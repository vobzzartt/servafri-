import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Globe, Zap, Shield, Search, RefreshCw, Server, CheckCircle2, Activity, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Anycast DNS | ServAfri',
  description: 'Global 100% uptime DNS. Accelerate your web performance with localized routing and automated record management.',
}

export default function DNSPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Globe className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Anycast Global DNS</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Accelerate your user experience with 100% uptime DNS. Our Anycast network routes queries to the nearest edge point, ensuring millisecond resolution across Africa.
            </p>
          
          </div>
        </section>

        {/* PILLARS */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: 'Lightning Speed', desc: 'DNS queries resolved at the nearest edge location for minimum TTFB.' },
                { icon: Shield, title: 'DDoS Resilient', desc: 'Anycast network built to absorb large-scale DNS floods and amplification attacks.' },
                { icon: RefreshCw, title: 'Instant Propagation', desc: 'Updates propagate globally in seconds. No more waiting hours for cache refreshes.' }
              ].map((pillar, i) => (
                <div key={i} className="p-8 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                   <pillar.icon className="w-10 h-10 text-primary mb-6" />
                   <h4 className="text-xl font-bold mb-3">{pillar.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* INTERFACE */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 border-t border-muted">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">The Interface</h2>
                 <h3 className="text-4xl font-black mb-8">CLI & UI Native.</h3>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Whether you're automating record management via Terraform or using our dashboard, ServAfri DNS makes routing simple.</p>
                 <div className="space-y-4">
                    {['A, AAAA, CNAME, MX, TXT', 'Dynamic TTL down to 30s', 'Secondary DNS / XFR Support'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl border bg-muted/50">
                         <CheckCircle2 className="w-5 h-5 text-primary" />
                         <span className="font-medium text-sm">{feat}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                 <div className="relative bg-card border rounded-2xl p-8 shadow-2xl space-y-4 font-mono text-sm leading-relaxed">
                    <p className="text-muted-foreground italic"># Updating record via CLI</p>
                    <p className="text-primary">$ servafri dns records update \</p>
                    <p>&nbsp;&nbsp;--domain my-app.io --type CNAME \</p>
                    <p>&nbsp;&nbsp;--name www --value edge-lb-1.servafri.net</p>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING */}
        <section className="bg-primary text-primary-foreground py-24 mb-32 rounded-[3.5rem] text-center mx-6">
           <h3 className="text-4xl md:text-5xl font-black mb-6 italic">Simple Pricing.</h3>
           <p className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto">1 Domain included free. ₦1,500/mo per additional domain with unlimited queries across our global network.</p>
           <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 rounded-2xl px-12 py-8 text-xl font-black shadow-2xl">
              <Link href="/waitlist">Get Started with Anycast</Link>
           </Button>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
