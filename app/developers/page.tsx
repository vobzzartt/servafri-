import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Terminal, Code2, BookOpen, Layers } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developers | ServAfri',
  description: 'APIs, CLIs, SDKs, and integrations. Build your next great app on ServAfri.',
}

export default function DevelopersPage() {
  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Developer Tools</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to automate your infrastructure. Open REST APIs, official Go & Node.js SDKs, and a powerful CLI tool natively built for developers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <div className="p-6 border rounded-xl bg-background hover:border-primary transition-colors space-y-4">
              <Terminal className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-xl">CLI Tool</h3>
              <p className="text-sm text-muted-foreground">Manage your entire ServAfri fleet directly from your terminal using `servafri-cli`.</p>
              <Link href="#" className="text-primary text-sm font-medium inline-block hover:underline">Install CLI &rarr;</Link>
            </div>
            
            <div className="p-6 border rounded-xl bg-background hover:border-primary transition-colors space-y-4">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-xl">REST API</h3>
              <p className="text-sm text-muted-foreground">Comprehensive, thoroughly documented REST API for complete programmed control.</p>
              <Link href="#" className="text-primary text-sm font-medium inline-block hover:underline">View API Docs &rarr;</Link>
            </div>

            <div className="p-6 border rounded-xl bg-background hover:border-primary transition-colors space-y-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-xl">SDKs</h3>
              <p className="text-sm text-muted-foreground">Official SDK wrappers for Go, Node.js, Python, and Rust, updated automatically.</p>
              <Link href="#" className="text-primary text-sm font-medium inline-block hover:underline">Browse SDKs &rarr;</Link>
            </div>

            <div className="p-6 border rounded-xl bg-background hover:border-primary transition-colors space-y-4">
              <Layers className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-xl">Terraform</h3>
              <p className="text-sm text-muted-foreground">Infrastructure as Code. Deploy and manage resources using our official Terraform provider.</p>
              <Link href="#" className="text-primary text-sm font-medium inline-block hover:underline">Terraform Registry &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
