import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { ShoppingBag, Zap, Globe, Database, Server, HardDrive, CheckCircle2, ArrowRight, BarChart3, CloudLightning, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Ecommerce Cloud Infrastructure | ServAfri',
  description: 'Scale your online store with high-performance compute, localized CDN, and ultra-reliable databases across Africa.',
}

export default function EcommerceSolutionPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-5xl px-6 mb-24 md:mb-32 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 mb-8 border border-primary/20 rotate-3">
                <ShoppingBag className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl font-black lg:text-7xl tracking-tighter leading-tight italic">Commerce at the <br/><span className="text-primary not-italic font-bold">Speed of Sale.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't let legacy infrastructure slow down your revenue. Deploy Magento, WooCommerce, or Custom engines on Africa's fastest localized cloud.
            </p>
            <div className="flex justify-center gap-4 pt-8">
              <Link href="/waitlist" className="bg-primary text-primary-foreground font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/20">Scale Your Store</Link>
              <Link href="/instances" className="bg-background border font-bold px-10 py-5 rounded-2xl hover:bg-muted transition-all">Storefront Specs</Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-6">User Experience</h2>
              <h3 className="text-4xl font-black mb-8 leading-tight">Every 100ms counts.</h3>
              <p className="text-muted-foreground text-lg mb-8">A 100ms delay in load time can drop conversion rates by 7%. ServAfri removes the "Atlantic delay," keeping your African customers engaged from click to checkout.</p>
              <div className="space-y-6 font-medium text-sm">
                 <div className="flex items-center gap-4">
                    <CloudLightning className="w-6 h-6 text-primary" />
                    <span>Localized Edge Caching</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span>Auto-scale for Flash Sales</span>
                 </div>
              </div>
           </div>
           <div className="p-10 rounded-[3rem] bg-muted/50 border border-muted text-center flex flex-col items-center justify-center space-y-4">
              <p className="text-sm font-bold text-muted-foreground uppercase italic px-4 py-1 rounded-full bg-primary/10 text-primary">Conversion Boost</p>
              <p className="text-8xl font-black tracking-tighter italic">+14%</p>
              <p className="text-muted-foreground text-sm">Average conversion lift for Lagos-based storefronts.</p>
           </div>
        </section>

        {/* STACK */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
           <div className="text-center mb-16">
              <h3 className="text-4xl font-black mb-4">Merchant Infrastructure</h3>
              <p className="text-muted-foreground text-lg italic">Robust components for every step of the funnel.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Server, title: 'High-Perf Compute', desc: 'Optimized instances for Magento and large-scale catalog processing.' },
                { icon: Database, title: 'Product DBs', desc: 'Managed MySQL and PostgreSQL with NVMe storage. Millions of SKUs, zero lag.' },
                { icon: HardDrive, title: 'Object Storage', desc: 'Host product images and videos with zero egress fees within Africa.' }
              ].map((item, i) => (
                <div key={i} className="bg-card p-10 rounded-3xl border border-muted hover:border-primary transition-all group">
                   <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-xl font-black mb-4">{item.title}</h4>
                   <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-5xl mx-auto px-6 mb-32 text-center">
            <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Ready to Grow?</h3>
            <Button asChild size="lg" className="rounded-2xl px-16 py-10 text-xl font-black shadow-2xl transition-transform hover:scale-105 active:scale-95">
                <Link href="/waitlist">Apply for Beta Access</Link>
            </Button>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
