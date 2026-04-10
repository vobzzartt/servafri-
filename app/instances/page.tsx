import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Server, Activity, ArrowUpRight, Cpu, HardDrive, TerminalSquare, CheckCircle2, Globe } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Bare-Metal & Virtual Instances | ServAfri',
  description: 'Deploy raw compute power across Africa. Unmatched performance with local NVMe and zero egress fees.',
}

export default function InstancesPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Server className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Pan-African Compute</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Raw performance at the edge. Deploy scalable virtual machines or dedicated bare-metal nodes across our Lagos-based data centers in under 60 seconds.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <Link href="/waitlist" className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-primary/20">
                Join the Waitlist
              </Link>
              <Link href="https://docs.servafri.com/compute" className="bg-background border text-foreground hover:bg-muted font-bold px-10 py-4 rounded-xl transition-colors">
                View Specifications
              </Link>
            </div>
            <p className="text-sm text-muted-foreground pt-4 font-medium italic">
              Lagos Tier-4 Data Center · NVMe Local Storage · 100Gbps Backbone · Zero Egress Fees
            </p>
          </div>
        </section>

        {/* PERFORMANCE TIERS */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Cpu, title: 'General Purpose VMs', desc: 'Balanced CPU-to-Memory ratios with burstable performance for web servers and microservices.' },
                { icon: Activity, title: 'Dedicated Compute', desc: 'No noisy neighbors. 1:1 vCPU mapping ideal for heavy CI/CD and data processing.' },
                { icon: HardDrive, title: 'Bare-Metal Nodes', desc: 'Zero virtualization overhead. Direct access to high-frequency hardware for intensive workloads.' }
              ].map((tier, i) => (
                <div key={i} className="p-8 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                   <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                      <tier.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">{tier.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{tier.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* PROVISIONING FLOW */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 border-t border-muted">
           <div className="mb-20">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Provisioning Flow</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">From Boot to Shell.</h3>
           </div>
           
           <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">1</div>
                    <h3 className="text-3xl font-bold mb-4">Select architecture</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Choose your region, OS image, and instance size. We support all major Linux distributions natively.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> servafri instances create --name web-prod \ <br/>
                       &nbsp;&nbsp;--region lagos-ap1 --image ubuntu-24-04 --size c2-standard
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                       <div className="space-y-2 font-mono text-xs sm:text-sm">
                          <p className="text-muted-foreground"># Dispatching to Lagos hypervisor...</p>
                          <p className="text-primary">[INFO] Allocating NVMe storage.</p>
                          <p className="text-primary">[INFO] Injecting Cloud-Init metadata.</p>
                          <p className="text-green-500 font-bold">[SUCCESS] Instance is online at 105.12.X.X</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center md:flex-row-reverse">
                 <div className="md:order-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">2</div>
                    <h3 className="text-3xl font-bold mb-4">Secure Shell Access</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Safety is our default. We use your SSH public keys to give you secure, root-level access immediately upon boot.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> ssh root@105.12.X.X
                    </div>
                 </div>
                 <div className="relative group md:order-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl font-mono text-xs sm:text-sm">
                       <p className="text-muted-foreground"># Secure login established</p>
                       <p className="text-primary">Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-generic)</p>
                       <p className="text-green-500 mt-4">root@web-prod:~# _</p>
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
                 <h3 className="text-4xl md:text-5xl font-black mb-6 italic">Built for Africa.</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">Predictable monthly billing in NGN. No hidden egress charges, no API request fees, just pure compute power.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Starter</p>
                    <p className="text-2xl font-black mb-6">₦7,500<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 2 vCPU · 2 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 10 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Plan</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border-2 border-primary relative scale-105 shadow-2xl z-10">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase px-4 py-1 rounded-full">Popular</span>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Standard</p>
                    <p className="text-2xl font-black mb-6">₦30,000<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 4 vCPU · 8 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 40 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 bg-primary text-primary-foreground hover:opacity-90 font-bold" variant="default">
                       <Link href="/waitlist">Select Plan</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Enterprise</p>
                    <p className="text-2xl font-black mb-6">₦120,000<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 8 vCPU · 16 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 160 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Plan</Link>
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
