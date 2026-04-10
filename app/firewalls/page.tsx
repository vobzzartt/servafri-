import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Shield, Lock, Eye, Zap, Activity, Globe, CheckCircle2, Server, TerminalSquare, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Cloud Firewalls | ServAfri',
  description: 'Enterprise-grade security at the edge. Filter traffic, protect workloads, and manage access with ease.',
}

export default function FirewallsPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Cloud Firewalls</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Protect your infrastructure with stateful firewalls at the edge. Block malicious traffic before it ever reaches your servers.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <Link href="/waitlist" className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-primary/20">
                Join the Waitlist
              </Link>
              <Link href="https://docs.servafri.com/firewalls" className="bg-background border text-foreground hover:bg-muted font-bold px-10 py-4 rounded-xl transition-colors">
                Technical Docs
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Lock, title: 'Zero-Trust', desc: 'Implement granular access control for your team via source-IP restrictions.' },
                { icon: Zap, title: 'DDoS Mitigation', desc: 'Automated Layer 3/4 protection absorbed at our backbone edge.' },
                { icon: Eye, title: 'Stateful Inspection', desc: 'Maintains connection state to ensure only response traffic is allowed.' },
                { icon: Activity, title: 'Traffic Insights', desc: 'Real-time visibility into blocked packets and traffic spikes.' }
              ].map((feat, i) => (
                <div key={i} className="p-8 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                   <feat.icon className="w-8 h-8 text-primary mb-6" />
                   <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 bg-muted/30 rounded-3xl border border-muted">
           <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center px-6 lg:px-12">
              <div>
                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">1</div>
                 <h3 className="text-4xl font-bold mb-6 italic">Tag-Based Security.</h3>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Don't manage individual rules per server. Assign tags like `web` to your instances and apply rules globally.</p>
                 <div className="bg-background p-6 rounded-xl font-mono text-sm border shadow-inner">
                    <span className="text-primary">$</span> servafri firewalls create --name web-ports \ <br/>
                    &nbsp;&nbsp;--inbound "tcp:80, tcp:443" --tags "web-prod"
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                 <div className="relative bg-card border rounded-2xl p-8 shadow-2xl overflow-hidden font-mono text-xs">
                    <div className="flex items-center gap-3 mb-8">
                       <Shield className="w-5 h-5 text-primary" />
                       <span className="font-bold">Rule: HTTPS Inbound</span>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 font-bold">
                          <span>Protocol: TCP/443</span>
                          <span>ALLOWED</span>
                       </div>
                       <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 font-bold">
                          <span>Port: 22 (SSH)</span>
                          <span>BLOCKED</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING */}
        <section className="max-w-3xl mx-auto px-6 mb-32 text-center">
           <h3 className="text-3xl font-black mb-6">Always Free.</h3>
           <p className="text-muted-foreground text-lg mb-10">We believe security is a right, not a feature. Cloud Firewalls are free for all ServAfri compute customers.</p>
           <Button asChild size="lg" className="rounded-xl px-12 py-7 font-bold shadow-xl shadow-primary/20">
              <Link href="/waitlist">Start Securing Your App</Link>
           </Button>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
