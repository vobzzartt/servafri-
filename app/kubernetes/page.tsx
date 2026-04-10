import { Activity, GitBranch, RefreshCw, TerminalSquare, Server, Layers, Globe, Code2, ShieldCheck, HardDrive, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

export const metadata: Metadata = {
  title: 'Managed Kubernetes | ServAfri',
  description: 'Production-grade K8s clusters that auto-scale, self-heal, and integrate with your existing CI/CD pipeline.',
}

export default function KubernetesPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION - Unified with landing page style */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Layers className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Managed Kubernetes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ship features faster with production-ready K8s clusters. Automated provisioning, self-healing nodes, and integrated load balancing at the edge.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <Link href="/waitlist" className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-primary/20">
                Join the Waitlist
              </Link>
              <Link href="https://docs.servafri.com/kubernetes" className="bg-background border text-foreground hover:bg-muted font-bold px-10 py-4 rounded-xl transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES GRID - Cleaner UI */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: RefreshCw, title: 'Auto-Scaling', desc: 'Clusters grow and shrink based on your traffic demands.' },
                { icon: ShieldCheck, title: 'Hardened Security', desc: 'RBAC, isolated VPCs, and automated security patches.' },
                { icon: GitBranch, title: 'GitOps Ready', desc: 'Native integration with your existing CI/CD pipelines.' },
                { icon: Server, title: 'High Availability', desc: 'Multi-zone control plane for zero-downtime operations.' }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                   <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-6">
                      <feature.icon className="w-5 h-5 text-primary" />
                   </div>
                   <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* TECHNICAL WORKTHROUGH - Rebranded with servafri CLI */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 border-t border-muted">
           <div className="mb-20 text-center">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Setup Flow</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">Deploy in Seconds.</h3>
           </div>
           
           <div className="space-y-24">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">1</div>
                    <h3 className="text-3xl font-bold mb-4">Initialize Cluster</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Choose your region and node tier. Our control plane handles the master node setup and control-etcd configuration automatically.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> servafri k8s create --name prod-cluster \ <br/>
                       &nbsp;&nbsp;--region lagos-ap1 --nodes 3 --tier standard
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                       <div className="space-y-2 font-mono text-xs sm:text-sm">
                          <p className="text-muted-foreground"># Dispatching to Lagos edge...</p>
                          <p className="text-primary">[INFO] Provisioning control plane.</p>
                          <p className="text-primary">[INFO] Booting worker nodes.</p>
                          <p className="text-green-500 font-bold">[SUCCESS] Cluster is ready for workloads.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center md:flex-row-reverse">
                 <div className="md:order-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">2</div>
                    <h3 className="text-3xl font-bold mb-4">Deploy workload</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Use your standard `kubectl` toolchain. Deploy your containers, services, and ingresses using our pre-optimized storage drivers.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> servafri k8s get-kubeconfig --cluster prod-cluster <br/>
                       <span className="text-primary">$</span> kubectl apply -f deployment.yaml
                    </div>
                 </div>
                 <div className="relative group md:order-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl">
                       <div className="space-y-4">
                          <div className="h-2 w-full bg-muted rounded-full">
                             <div className="h-full bg-green-500 w-[90%] rounded-full"></div>
                          </div>
                          <p className="text-xs font-mono text-muted-foreground">Rolling update: 3/3 pods healthy</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING TABLE - Synced with /pricing */}
        <section className="bg-muted/30 py-32 mb-32 border-y border-muted">
           <div className="max-w-6xl mx-auto px-6">
              <div className="mb-20 text-center max-w-2xl mx-auto">
                 <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Pricing</h2>
                 <h3 className="text-4xl md:text-5xl font-black mb-6 italic">Built for Scale.</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">Managed Kubernetes with predictable billing in NGN. Primary control plane included for free on all multi-node clusters.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Starter</p>
                    <p className="text-2xl font-black mb-6">₦7,500<span className="text-sm text-muted-foreground font-normal">/node/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 2 vCPU · 2 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 10 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border-2 border-primary relative scale-105 shadow-2xl z-10">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase px-4 py-1 rounded-full">Popular</span>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Standard</p>
                    <p className="text-2xl font-black mb-6">₦30,000<span className="text-sm text-muted-foreground font-normal">/node/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 4 vCPU · 8 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 40 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 bg-primary text-primary-foreground hover:opacity-90 font-bold" variant="default">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
                 <div className="bg-background p-8 rounded-2xl border hover:border-primary/50 transition-all">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Enterprise</p>
                    <p className="text-2xl font-black mb-6">₦120,000<span className="text-sm text-muted-foreground font-normal">/node/mo</span></p>
                    <ul className="space-y-4 text-sm mb-8">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 8 vCPU · 16 GB RAM</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 160 GB NVMe Storage</li>
                    </ul>
                    <Button asChild className="w-full rounded-xl py-6 border-primary text-primary" variant="outline">
                       <Link href="/waitlist">Select Tier</Link>
                    </Button>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
           <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-24 text-center">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Scale without limits.</h2>
              <p className="text-primary-foreground/60 text-xl max-w-xl mx-auto mb-12 italic">Experience production-ready Kubernetes infrastructure across Africa. Join our waitlist for early access.</p>
              <Link href="/waitlist" className="bg-background text-primary font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-block shadow-2xl">Join the Waitlist</Link>
           </div>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
