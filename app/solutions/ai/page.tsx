import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Cpu, Network, Zap, CpuIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Infrastructure | ServAfri',
  description: 'High-performance GPU instances and infinite object storage for training and serving ML models.',
}

export default function AiSolutionPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 mb-6">
               <CpuIcon className="h-8 w-8 text-purple-500" />
            </div>
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Powering African AI</h1>
            <p className="text-lg text-muted-foreground">
              Train complex models faster and serve low-latency inferences. We provide the dedicated hardware and massive storage your data science team needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">GPU-Accelerated Compute</h3>
              </div>
              <p className="text-muted-foreground">Access state-of-the-art NVIDIA GPUs attached directly to bare-metal instances. Perfect for LLM fine-tuning, computer vision training, and high-throughput inference APIs.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Network className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Massive Object Storage</h3>
              </div>
              <p className="text-muted-foreground">Store terabytes of training datasets affordably in our S3-compatible Object Storage, with zero egress fees when transferring data to your internal compute instances.</p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
