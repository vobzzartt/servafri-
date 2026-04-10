import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { confirmationEmailTemplate } from '@/lib/emails/confirmation-template'
import { notificationEmailTemplate } from '@/lib/emails/notification-template'
import { founderEmailTemplate } from '@/lib/emails/founder-template'
import fs from 'fs'
import path from 'path'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email } = body as { name?: string; email?: string }

    // ── Validation ──
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim().toLowerCase()

    // ── Database Save ──
    try {
      // We attempt to insert directly. 
      // PostgreSQL will automatically block duplicates via the UNIQUE constraint.
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert({ name: trimmedName, email: trimmedEmail })

      if (insertError) {
        // Check if the error is a "Duplicate Key" error (PostgreSQL code 23505)
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

    // ── Emails ──

    // ── Send emails immediately ──
    const [confirmResult, notifyResult] = await Promise.allSettled([
      // 1. Initial Confirmation to user (arrives first)
      resend.emails.send({
        from: 'ServAfri <hello@servafri.com>',
        to: [trimmedEmail],
        subject: `Welcome to ServAfri`,
        html: confirmationEmailTemplate(trimmedName)
      }),
      // 2. Notification to the team
      resend.emails.send({
        from: 'Waitlist System <hello@servafri.com>',
        to: ['hello@servafri.com'],
        replyTo: trimmedEmail,
        subject: `Someone just joined the waitlist`,
        html: notificationEmailTemplate(trimmedName, trimmedEmail)
      }),
    ])

    // Wait 1 minute in the background for the founder email (will work on local node servers reliably)
    setTimeout(() => {
      resend.emails.send({
        from: 'Victor Bodude <hello@servafri.com>',
        to: [trimmedEmail],
        replyTo: 'victorbodude@gmail.com',
        subject: `A note from the founder`,
        html: founderEmailTemplate(trimmedName)
      }).catch(console.error)
    }, 60000)

    // Log any failures
    if (confirmResult.status === 'rejected') {
      console.error('[Waitlist] Failed to send confirmation email:', confirmResult.reason)
    }
    if (notifyResult.status === 'rejected') {
      console.error('[Waitlist] Failed to send notification email:', notifyResult.reason)
    }

    // Since we queue the founder email asynchronously, we only check the main failure conditionally:
    if (confirmResult.status === 'rejected' && notifyResult.status === 'rejected') {
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
