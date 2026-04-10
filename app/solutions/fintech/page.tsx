import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Landmark, Lock, Server, Activity, ShieldCheck, Zap, Globe, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Fintech Cloud Infrastructure | ServAfri',
  description: 'Enterprise-grade security and ultra-low latency for African Fintechs and banking platforms.',
}

export default function FintechSolutionPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 mb-8 border border-primary/20 rotate-3">
                <Landmark className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl font-black lg:text-7xl tracking-tighter leading-tight italic">Secure. Sovereign. <br/><span className="text-primary not-italic font-bold">Fast.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powering the next generation of African finance. Run mission-critical payments, ledgers, and fraud detection on infrastructure built for millisecond precision.
            </p>
            <div className="flex justify-center gap-4 pt-8">
              <Link href="/waitlist" className="bg-primary text-primary-foreground font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/20">Deploy Financial Stack</Link>
              <Link href="/security" className="bg-background border font-bold px-10 py-5 rounded-2xl hover:bg-muted transition-all">Security Protocol</Link>
            </div>
          </div>
        </section>

        {/* BENCHMARKS */}
        <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-6">The Fintech Problem</h2>
              <h3 className="text-4xl font-black mb-8 leading-tight">Latency kills conversion.</h3>
              <p className="text-muted-foreground text-lg mb-8">When a payment API takes 3 seconds to respond from a European data center, users abandon transactions. ServAfri brings your API to the same data centers as the local banking switches.</p>
              <ul className="space-y-4 font-medium text-sm">
                 <li className="flex items-center gap-3"><Lock className="w-5 h-5 text-primary" /> NDPA Compliant Data Residency</li>
                 <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Sub-1ms Latency to Local Switches</li>
                 <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary" /> SOC2 / PCI-DSS Primitives</li>
              </ul>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] bg-primary text-primary-foreground text-center">
                 <p className="text-xs font-bold opacity-70 mb-4 uppercase">Legacy Cloud (EU)</p>
                 <p className="text-5xl font-black mb-2 tracking-tighter italic">350ms</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-foreground text-background text-center">
                 <p className="text-xs font-bold opacity-70 mb-4 uppercase italic">ServAfri Edge</p>
                 <p className="text-5xl font-black mb-2 tracking-tighter text-primary">12ms</p>
              </div>
           </div>
        </section>

        {/* SOLUTIONS STACK */}
        <section className="bg-muted pb-32 pt-24 border-y border-muted">
           <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                 <h3 className="text-4xl font-black mb-4">The Fintech Stack</h3>
                 <p className="text-muted-foreground text-lg italic">Optimized primitives for high-transaction environments.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { icon: Database, title: 'Atomic Ledgers', desc: 'Managed PostgreSQL with synchronous replication. Zero transaction loss.' },
                   { icon: ShieldCheck, title: 'Encrypted Compute', desc: 'Isolated VMs with dedicated NVMe storage. Hardware-level encryption.' },
                   { icon: Globe, title: 'Global Settlement', desc: 'Anycast DNS for low-latency routing to cross-border settlement gateways.' }
                 ].map((sol, i) => (
                   <div key={i} className="bg-background p-10 rounded-3xl border shadow-sm hover:border-primary transition-colors">
                      <sol.icon className="w-10 h-10 text-primary mb-6" />
                      <h4 className="text-xl font-black mb-4">{sol.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{sol.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center my-32">
            <h4 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-8 text-primary">Join the Vanguard</h4>
            <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter italic">Build the future <br/>of African Finance.</h3>
            <Button asChild size="lg" className="rounded-2xl px-16 py-10 text-xl font-black shadow-2xl transition-transform hover:scale-105 active:scale-95">
                <Link href="/waitlist">Apply for Early Access</Link>
            </Button>
        </section>

      </main>
      <FooterSection />
    </>
  )
}

import { Database } from 'lucide-react'
