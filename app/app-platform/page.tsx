import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Zap, GitBranch, Globe, Layout, Smartphone, Cloud, CheckCircle2, TerminalSquare, RefreshCw, BarChart3 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'App Platform | ServAfri',
  description: 'Deploy web apps and APIs directly from your Git repository. Auto-scaling, edge networking, and zero-downtime deploys.',
}

export default function AppPlatformPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32">
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 border border-primary/20">
                <Layout className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold lg:text-7xl tracking-tighter">Git to Edge.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deployment without the complexity. Push to your Git repository and we'll handle the build, orchestration, and global routing. Built for modern African engineering teams.
            </p>
         
          </div>
        </section>

        {/* PILLARS */}
        <section className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-4 gap-8">
           {[
             { icon: GitBranch, title: 'Push to Deploy', desc: 'Automatic builds for Node.js, Python, Go, and Ruby from your GitHub or GitLab.' },
             { icon: Globe, title: 'Edge Networking', desc: 'Your app is automatically routed via our anycast network for sub-10ms latency.' },
             { icon: RefreshCw, title: 'Zero Downtime', desc: 'Health-checked rolling updates ensure your app stays online during deployments.' },
             { icon: BarChart3, title: 'Auto-Scaling', desc: 'Scale from zero to millions of requests without managing servers.' }
           ].map((pillar, i) => (
             <div key={i} className="p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-6">
                   <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{pillar.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
             </div>
           ))}
        </section>

        {/* DEPLOYMENT WORKFLOW */}
        <section className="max-w-6xl mx-auto px-6 mb-32 py-24 border-t border-muted">
           <div className="mb-20 text-center">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Deployment Workflow</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">The Modern Standard.</h3>
           </div>
           
           <div className="space-y-24">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl mb-6 shadow-lg shadow-primary/20">1</div>
                    <h3 className="text-3xl font-bold mb-4">Connect and Configure</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Connect your GitHub account and select your repository. We automatically detect your build settings.</p>
                    <div className="bg-muted p-6 rounded-xl font-mono text-sm border shadow-inner">
                       <span className="text-primary">$</span> servafri apps link --repo my-company/backend <br/>
                       <span className="text-muted-foreground"># Detected: Next.js (Node 18)</span>
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-background/30 blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-card border rounded-2xl p-8 shadow-2xl space-y-4">
                       <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-bold uppercase">Repository Connected</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* PRICING */}
        <section className="max-w-3xl mx-auto px-6 mb-32 text-center py-20 bg-muted/30 rounded-[3rem] border border-muted">
           <h3 className="text-4xl font-black mb-6">Simple Pricing.</h3>
           <p className="text-muted-foreground text-lg mb-10">Start for free. Pay only for the resources your app consumes. $0.000001 per request after 1M free requests.</p>
           <Button asChild size="lg" className="rounded-xl px-12 py-7 font-black shadow-2xl shadow-primary/20">
              <Link href="/waitlist">Deploy Your First App</Link>
           </Button>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
