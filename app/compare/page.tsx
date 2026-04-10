import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import CallToAction from '@/components/call-to-action'
import { Check, X, Shield, Zap, Globe, Coins } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ServAfri vs The Giants | Cloud Comparison',
  description: 'See how ServAfri stacks up against AWS, DigitalOcean, and GCP for African workloads.',
}

export default function ComparePage() {
  const comparisonData = [
    {
      feature: 'Average Latency in Lagos',
      servafri: '< 2ms',
      aws: '120ms+',
      digitalocean: '95ms+',
      gcp: '130ms+',
      metric: true
    },
    {
      feature: 'Outbound Egress (After 1TB Free)',
      servafri: '$0.01 / GB',
      aws: '$0.09 / GB',
      digitalocean: '$0.01 / GB',
      gcp: '$0.12 / GB',
      metric: true
    },
    {
      feature: 'Local Currency Billing (NGN, KES, ZAR)',
      servafri: true,
      aws: false,
      digitalocean: false,
      gcp: false,
      metric: false
    },
    {
      feature: 'Bare-Metal Provisioning Speed',
      servafri: '< 60 Seconds',
      aws: '~5-10 Minutes',
      digitalocean: 'N/A',
      gcp: 'Variable (~5 Min)',
      metric: true
    },
    {
      feature: 'Hypervisor Overhead',
      servafri: '0% (Direct bare-metal routing)',
      aws: '15-30% (Nitro dependent)',
      digitalocean: '10-25% (Droplet layer)',
      gcp: '15-30% (GCE overhead)',
      metric: true
    },
    {
      feature: 'Enterprise Edge Support',
      servafri: 'Included for all Builders',
      aws: 'Min $15k/mo or % of spend',
      digitalocean: '$100+/mo Premium Support',
      gcp: 'Min $12.5k/mo',
      metric: true
    }
  ]

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-muted/10">
        <section className="mx-auto max-w-6xl px-6">
          <div className="space-y-6 text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
               <Zap className="w-4 h-4" /> Unfair Advantage
            </div>
            <h1 className="text-4xl font-semibold lg:text-7xl tracking-tight">ServAfri vs The Giants</h1>
            <p className="text-lg text-muted-foreground">
              Legacy cloud providers route African traffic through Europe, charge exorbitant egress fees, and bill exclusively in USD. We rebuilt the stack from the ground up to solve this.
            </p>
          </div>

          <div className="bg-background rounded-2xl border shadow-sm overflow-hidden mb-24">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-muted/30">
                         <th className="p-6 font-semibold text-muted-foreground w-1/3">Feature / Metric</th>
                         <th className="p-6 text-center border-l bg-primary/5">
                            <span className="font-bold text-lg text-foreground block">ServAfri</span>
                            <span className="text-xs text-primary mt-1 block">Africa-First Cloud</span>
                         </th>
                         <th className="p-6 text-center border-l text-muted-foreground">
                            <span className="font-medium text-foreground block">AWS / EC2</span>
                            <span className="text-xs mt-1 block">Legacy Giant</span>
                         </th>
                         <th className="p-6 text-center border-l text-muted-foreground">
                            <span className="font-medium text-foreground block">DigitalOcean</span>
                            <span className="text-xs mt-1 block">SMB Cloud</span>
                         </th>
                         <th className="p-6 text-center border-l text-muted-foreground">
                            <span className="font-medium text-foreground block">GCP</span>
                            <span className="text-xs mt-1 block">Legacy Giant</span>
                         </th>
                      </tr>
                   </thead>
                   <tbody className="divide-y">
                      {comparisonData.map((row, i) => (
                         <tr key={i} className="hover:bg-muted/10 transition-colors">
                            <td className="p-6 font-medium bg-muted/5">{row.feature}</td>
                            <td className="p-6 text-center border-l bg-primary/[0.02] font-semibold text-primary">
                               {row.metric ? row.servafri : (row.servafri ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-red-500" />)}
                            </td>
                            <td className="p-6 text-center border-l text-muted-foreground">
                               {row.metric ? row.aws : (row.aws ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-red-500" />)}
                            </td>
                            <td className="p-6 text-center border-l text-muted-foreground">
                               {row.metric ? row.digitalocean : (row.digitalocean ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-red-500" />)}
                            </td>
                            <td className="p-6 text-center border-l text-muted-foreground">
                               {row.metric ? row.gcp : (row.gcp ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-red-500" />)}
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
             <div className="bg-background border rounded-2xl p-8 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Data Sovereignty</h3>
                <p className="text-muted-foreground text-sm">By keeping traffic within the continent, ServAfri natively complies with the NDPA and regional African data privacy frameworks, something offshore providers cannot guarantee.</p>
             </div>
             <div className="bg-background border rounded-2xl p-8 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Predictable Billing</h3>
                <p className="text-muted-foreground text-sm">No complex egress algebra. No FX constraints. We offer fixed pricing calculated in your native currency. You pay for the exact compute you reserve, nothing hidden.</p>
             </div>
             <div className="bg-background border rounded-2xl p-8 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Built for Defense</h3>
                <p className="text-muted-foreground text-sm">Each ServAfri deployment comes with hardware-level DDoS mitigation backed by our global Anycast network, protecting against localized volumetric attacks without upstream latency.</p>
             </div>
          </div>

        </section>
        <CallToAction />
      </main>
      <FooterSection />
    </>
  )
}
