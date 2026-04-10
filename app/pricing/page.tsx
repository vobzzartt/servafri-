import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { PricingCalculator } from '@/components/pricing-calculator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Transparent Cloud Costs | ServAfri',
  description: 'Estimate your ServAfri cloud infrastructure costs with our dynamic pricing calculator. Start for free, scale with confidence, and pay in local currency (NGN).',
}

export default function PricingPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Transparent Cloud Costs</h1>
            <p className="text-lg text-muted-foreground">
              Every resource maps to a fixed cost. No egress surprises, no opaque metering, no AWS bill shock. Start free, scale with confidence, and pay in your local currency.
            </p>
            <div className="text-sm font-medium text-primary bg-primary/10 w-fit mx-auto px-4 py-1.5 rounded-full">
              Supports NGN & USD · No credit card required to start
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {/* Starter Plan */}
            <Card className="flex flex-col relative h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>
                  For side projects, experiments, and early-stage products.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Shared vCPU Compute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Basic App Platform Integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Community Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>1 TB Outbound Bandwidth</span>
                  </li>
                </ul>
                <Link href="https://console.servafri.com/sign-up" className="w-full text-center bg-muted text-foreground hover:bg-muted/80 font-medium py-2 rounded-lg transition-colors">
                  Start for free
                </Link>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="flex flex-col relative h-full border-primary/50 shadow-md">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Growth</CardTitle>
                <CardDescription>
                  For production workloads that need reliability and scale.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Dedicated Bare-Metal Instances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Managed Kubernetes & Databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Standard Support (24hr SLA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>VPC Network Isolation</span>
                  </li>
                </ul>
                <Link href="https://console.servafri.com/sign-up" className="w-full text-center bg-foreground text-background hover:bg-foreground/90 font-medium py-2 rounded-lg transition-colors">
                  Get started
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col relative h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>
                  For regulated industries and multi-region architectures.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Custom Hardware Configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Priority Support (1hr SLA) & TAM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>Volume & Commitment Discounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>SOC2 / GDPR Compliance Assistance</span>
                  </li>
                </ul>
                <Link href="https://servafri.com/contact" className="w-full text-center bg-muted text-foreground hover:bg-muted/80 font-medium py-2 rounded-lg transition-colors">
                  Talk to sales
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mb-24 space-y-8">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-medium mb-3">Estimate your monthly spend.</h2>
              <p className="text-muted-foreground max-w-2xl">
                Build your infrastructure stack below and get a real-time estimate. Dynamic Naira (NGN) exchange rates ensure zero billing surprises for African teams.
              </p>
            </div>
            
            <PricingCalculator />
          </div>

          {/* Pricing FAQ or extra features could go here */}
          <div className="pt-16 border-t border-muted text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-medium mb-4">Every resource, every cost.</h3>
            <p className="text-muted-foreground mb-6">
              Prices calculate exactly what you use. Multiply by live exchange rate for NGN billing. No egress surprises — outbound bandwidth is flat-rate after your 1TB free allowance.
            </p>
            <Link href="https://console.servafri.com/sign-up" className="text-primary hover:underline font-medium">
              Create an account to see the full pricing catalog &rarr;
            </Link>
          </div>

        </section>
      </main>
      <FooterSection />
    </>
  )
}
