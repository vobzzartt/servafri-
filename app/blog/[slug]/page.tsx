import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import CallToAction from '@/components/call-to-action'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostParams {
  params: {
    slug: string
  }
}

const getPostData = (slug: string) => {
    switch(slug) {
        case 'aws-startups':
            return {
                title: "Why African Startups Should Stop Defaulting to AWS",
                date: "Oct 15, 2025",
                readTime: "6 min read",
                author: "Engineering Team",
                content: `
                    <p class="lead">For the past decade, building a startup in Africa implicitly meant swiping a dual-currency card to spin up an AWS us-east-1 instance. This was an undeniable standard, but as the African digital economy explodes, this default architecture is actively harming local user experiences.</p>
                    
                    <h2>The Latency Tax</h2>
                    <p>When an application's database lives in Virginia, every single query a user makes in Nairobi or Lagos must travel via submarine cables across the Atlantic. This inherently guarantees <strong>120ms to 240ms of latency</strong> on every single round-trip. For modern applications that require multiple DB queries per render, this cascades into agonizingly slow load times.</p>
                    
                    <h2>The Egress Math</h2>
                    <p>Beyond latency, there's the mathematical reality of Cloud Egress. The giants charge an average of $0.09 per GB of outbound data. For a video streaming or heavy SaaS platform operating on standard African margins, this cost model becomes economically unviable at scale.</p>
                    
                    <h2>The ServAfri Philosophy</h2>
                    <p>We built our proprietary network topology specifically to place Bare-Metal nodes and Managed Kubernetes physically closer to the users who matter. By establishing a massive Anycast presence across 9 global regions including multiple tier-4 African data centers, ServAfri guarantees <strong>sub-10ms latency</strong> locally and caps egress pricing aggressively.</p>

                    <p>It's time for builders to stop settling for the legacy pipeline. Our continent deserves infrastructure built by us, for us, priced in our native currencies.</p>
                `
            }
        case 'scale-k8s':
            return {
                title: "Scaling our Managed Kubernetes Control Plane",
                date: "Sep 28, 2025",
                readTime: "12 min read",
                author: "Infrastructure Team",
                content: `
                    <p class="lead">Operating a Managed Kubernetes service requires immense diligence in control plane isolation, etcd backup resilience, and high availability across the worker node substrate.</p>
                    
                    <h2>Redesigning the Control Plane</h2>
                    <p>When we first built ServAfri K8s, our control planes were co-located on high-availability bare-metal chassis. As cluster deployments grew 300% month-over-month, we noticed sporadic API server latency during heavy burst provisions.</p>

                    <h2>The Zero-Downtime Migration Algorithm</h2>
                    <p>To solve this, we decoupled the API server instances natively into our newly minted micro-VM ecosystem, backed by local NVMe raids and connected to entirely separate top-of-rack switches. We built an in-house Golang operator that automatically streams etcd changes and performs hot-swaps on traffic without dropping a single packet.</p>

                    <p>This allows us to offer completely automated Kubernetes scaling. You just provide the worker node constraints, and our engine manages the orchestration, upgrading your control plane transparently.</p>
                `
            }
        case 'app-platform':
            return {
                title: "Introducing ServAfri App Platform",
                date: "Sep 12, 2025",
                readTime: "4 min read",
                author: "Product Team",
                content: `
                    <p class="lead">Today we are incredibly excited to announce the release of the ServAfri App Platform. We want to remove all DevOps friction for small-to-medium teams building for the African market.</p>
                    
                    <h2>Push to Deploy</h2>
                    <p>You no longer need to write intricate Dockerfiles or Terraform manifests to get your code live. With App Platform, you simply connect your GitHub, GitLab, or Bitbucket repository. We automatically detect your framework—whether it's Next.js, Django, Ruby on Rails, or Go—and build it seamlessly.</p>
                    
                    <h2>Global Edge Caching</h2>
                    <p>Once your app is built, our systems instantly distribute it across our Global Edge network. Your static assets are pushed to every point of presence, ensuring that users in Lagos get the same instant load times as users in New York or London.</p>

                    <p>We are rolling this out to all users in our private beta starting today!</p>
                `
            }
        default:
            return null;
    }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = getPostData(params.slug)

  if (!post) {
      notFound()
  }

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32 bg-background">
        <article className="mx-auto max-w-3xl px-6">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-10 transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
               {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-muted pb-8">
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> <time>{post.date}</time>
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4" /> <span>{post.readTime}</span>
               </div>
               <div className="flex items-center gap-2 font-medium text-primary">
                 By {post.author}
               </div>
            </div>
          </header>

          <div 
             className="prose prose-zinc dark:prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-semibold prose-a:text-primary"
             dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <CallToAction />
      <FooterSection />
    </>
  )
}
