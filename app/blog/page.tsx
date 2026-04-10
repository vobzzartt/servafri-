import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { FileText, Calendar, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engineering Blog | ServAfri',
  description: 'Read the latest updates, engineering deep dives, and scaling stories from the ServAfri team.',
}

export default function BlogPage() {
  const posts = [
    {
      title: "Why African Startups Should Stop Defaulting to AWS",
      date: "Oct 15, 2025",
      summary: "Exploring the latency, pricing, and support disparities when African startups rely on generic, non-localized global cloud providers.",
      slug: "/blog/aws-startups"
    },
    {
      title: "Scaling our Managed Kubernetes Control Plane",
      date: "Sep 28, 2025",
      summary: "A technical deep dive into how we re-architected our control plane routing to achieve zero-downtime upgrades.",
      slug: "/blog/scale-k8s"
    },
    {
      title: "Introducing ServAfri App Platform",
      date: "Sep 12, 2025",
      summary: "The fastest way to deploy your code in Africa. Push to git, and we'll handle the build, deploy, and global CDN caching.",
      slug: "/blog/app-platform"
    }
  ]

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Engineering Blog</h1>
            <p className="text-lg text-muted-foreground">
              Deep technical dives, product updates, and scaling stories directly from the engineers building Africa's fastest cloud.
            </p>
          </div>

          <div className="grid gap-12 mb-24">
            {posts.map((post, i) => (
              <article key={i} className="group border-b border-muted pb-12 last:border-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  {post.summary}
                </p>
                <Link href={post.slug} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
