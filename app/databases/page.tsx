import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Database, ShieldCheck, RefreshCw, Zap, Server, HardDrive, CheckCircle2, Globe, Lock } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Managed Databases | ServAfri',
  description: 'Production-grade PostgreSQL, MySQL, Redis, and MongoDB with automatic backups and NVMe performance.',
}

export default function DatabasesPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background font-sans">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Database className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Managed Databases</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Scale your data with AWS-level durability. Managed PostgreSQL, MySQL, and Redis with automatic backups and sub-10ms localized latency.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <Link href="/waitlist" className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-primary/20">
                Join the Waitlist
              </Link>
              <Link href="https://docs.servafri.com/databases" className="bg-background border text-foreground hover:bg-muted font-bold px-10 py-4 rounded-xl transition-colors">
                Technical Docs
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Automated Backups', desc: 'Point-in-time recovery and daily snapshots included by default.' },
                { icon: RefreshCw, title: 'Self-Healing', desc: 'Automatic failover to standby replicas ensures 99.9% uptime.' },
                { icon: Zap, title: 'NVMe Performance', desc: 'All databases run on high-speed NVMe storage for maximum IOPS.' }
              ].map((feat, i) => (
                <div key={i} className="p-8 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                   <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                      <feat.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">{feat.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* PROVISIONING FLOW */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 border-t border-muted">
           <div className="mb-20">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Provisioning Flow</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">Zero-Config Data.</h3>
           </div>
           
           <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">1</div>
                    <h3 className="text-3xl font-bold mb-4">Create your cluster</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Select your engine and size. Our platform handles OS hardening, patching, and configuration of safe defaults.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> servafri db create --engine postgres \ <br/>
                       &nbsp;&nbsp;--name app-main --size db-small --ha
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                       <div className="space-y-2 font-mono text-xs sm:text-sm">
                          <p className="text-muted-foreground"># Initializing cluster...</p>
                          <p className="text-primary">[INFO] Provisioning NVMe storage.</p>
                          <p className="text-primary">[INFO] Setting up HA standby.</p>
                          <p className="text-green-500 font-bold">[SUCCESS] Database cluster is online.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING TABLE */}
        <section className="bg-muted/30 py-32 mb-32 border-y border-muted">
           <div className="max-w-6xl mx-auto px-6">
              <div className="mb-20 text-center max-w-2xl mx-auto">
                 <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Pricing</h2>
                 <h3 className="text-4xl md:text-5xl font-black mb-6 italic">Secure & Transparent.</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">Predictable monthly billing for managed database engines. Storage is charged at a flat rate of ₦75 per GB.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Hobby</p>
                    <p className="text-2xl font-black mb-6">₦22,500<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 1 vCPU · 2 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Automated Backups</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border-2 border-primary relative scale-105 shadow-2xl z-10">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase px-4 py-1 rounded-full">Standard</span>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Startup</p>
                    <p className="text-2xl font-black mb-6">₦75,000<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 2 vCPU · 4 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> HA Failover Support</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 bg-primary text-primary-foreground hover:opacity-90 font-bold" variant="default">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Business</p>
                    <p className="text-2xl font-black mb-6">₦225,000<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 4 vCPU · 8 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Cross-Region Replica</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
