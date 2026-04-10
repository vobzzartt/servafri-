import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Rocket, Box, Database, RefreshCw } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS & Web Apps | ServAfri',
  description: 'Deploy, scale, and manage SaaS applications rapidly with ServAfri App Platform and K8s.',
}

export default function SaasSolutionPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 mb-6">
               <Box className="h-8 w-8 text-pink-500" />
            </div>
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Rapid SaaS Delivery</h1>
            <p className="text-lg text-muted-foreground">
              From your first prototype to thousands of paying users. Stop configuring servers and start shipping features your customers actually want.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Git-to-Production</h3>
              </div>
              <p className="text-muted-foreground">Use the App Platform to deploy Next.js, Django, Rails, or Go applications instantly. Push to your main branch, and we handle the build, SSL, and zero-downtime release.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Preview Environments</h3>
              </div>
              <p className="text-muted-foreground">Accelerate your QA process. Every Pull Request automatically generates a unique preview URL, allowing your team to test new features before they merge to production.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Managed Everything</h3>
              </div>
              <p className="text-muted-foreground">Offload the operational burden. From database backups to OS patching to Redis caching layers—we manage the infrastructure so you can manage the product.</p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
