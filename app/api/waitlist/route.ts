import { NextRequest, NextResponse, after } from 'next/server'
import { Resend } from 'resend'
import { confirmationEmailTemplate } from '@/lib/emails/confirmation-template'
import { notificationEmailTemplate } from '@/lib/emails/notification-template'
import { founderEmailTemplate } from '@/lib/emails/founder-template'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email } = body as { name?: string; email?: string }

    // Trim inputs before validation to prevent whitespace entries
    const trimmedName = name?.trim()  ''
    const trimmedEmail = email?.trim().toLowerCase()  ''

    // ── Validation ──
    if (!trimmedName || !trimmedEmail) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // ── Database Save ──
    try {
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({ name: trimmedName, email: trimmedEmail })

      if (insertError) {
        if (insertError.code === '23505') {
          return NextResponse.json(
            { error: 'You are already on the waitlist!' },
            { status: 409 }
          )
        }

        console.error('[Waitlist DB] Insert failed:', insertError)
        return NextResponse.json(
          { error: 'Failed to join waitlist. Please try again later.' },
          { status: 500 }
        )
      }
    } catch (dbErr) {
      console.error('[Waitlist DB] Unexpected error:', dbErr)
      return NextResponse.json(
        { error: 'Database connection error. Please try again.' },
        { status: 500 }
      )
    }

    // ── Primary Emails (Immediate) ──
    // resend.emails.send returns { data, error } and does not throw for API failures
    const [confirmRes, notifyRes] = await Promise.all([
      resend.emails.send({
        from: 'ServAfri <hello@servafri.com>',
        to: [trimmedEmail],
        subject: 'Welcome to ServAfri',
        html: confirmationEmailTemplate(trimmedName)
      }),
      resend.emails.send({
        from: 'Waitlist System <hello@servafri.com>',
        to: ['hello@servafri.com'],
        replyTo: trimmedEmail,
        subject: 'Someone just joined the waitlist',
        html: notificationEmailTemplate(trimmedName, trimmedEmail)
      }),
    ])

    // Log Resend errors if they exist
    if (confirmRes.error) {
      console.error('[Waitlist] Failed to send confirmation email:', confirmRes.error)
    }
    if (notifyRes.error) {
      console.error('[Waitlist] Failed to send notification email:', notifyRes.error)
    }

    // ── Background Emails (using Next.js after) ──
    // This runs after the response is sent to the user
    after(async () => {
      const { error } = await resend.emails.send({
        from: 'Victor Bodude <hello@servafri.com>',
        to: [trimmedEmail],
        replyTo: 'victorbodude@gmail.com',
        subject: 'A note from the founder',
        html: founderEmailTemplate(trimmedName)
      })
      
      if (error) {
        console.error('[Waitlist] Failed to send founder email in background:', error)
      }
    })

    // If both primary emails failed, return an error to the user
    if (confirmRes.error && notifyRes.error) {
      return NextResponse.json(
        { error: 'Failed to send emails. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Waitlist] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}