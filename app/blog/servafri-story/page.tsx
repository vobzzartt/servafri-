import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import CallToAction from '@/components/call-to-action'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rebuilding Africa’s Cloud Future — The Servafri Story',
  description: 'The mission and vision behind Africa’s sovereign cloud platform.',
}

export default function ServafriStoryPage() {
  const post = {
    title: "Rebuilding Africa’s Cloud Future — The Servafri Story",
    date: "October 13, 2025",
    readTime: "7 min read",
    author: "Victor Bodude",
    content: `
        <p class="lead">Africa has always been full of creativity, hustle, and raw talent. From fintech breakthroughs to global entertainment waves, young Africans continue to prove what’s possible. But there’s still one area holding us back: infrastructure, especially cloud computing.</p>

        <p>Most apps we use daily still run on clouds owned by companies far from our shores—AWS, Google Cloud, Azure, DigitalOcean. They work, yes, but always with stress:</p>
        <ul>
            <li>High prices in dollars.</li>
            <li>Payment struggles for founders without international cards.</li>
            <li>Latency because your server is sitting in Europe.</li>
            <li>Scaling limits because the costs don’t make sense for our economy.</li>
        </ul>

        <p>Every African developer who has tried deploying a real app knows this pain. This is the gap that led to Servafri.</p>

        <h2>What Servafri Represents</h2>
        <p>Servafri is a cloud platform created specifically for Africa. The goal is simple: make cloud hosting easier, faster, and affordable for developers and startups on the continent.</p>
        <p>The name Servafri means “Serving Africa,” and it captures the heart behind the project. It’s not just a tech product. It’s a mission.</p>

        <h2>Why Cloud Matters Here</h2>
        <ul>
            <li>Most African startups host their servers outside Africa.</li>
            <li>Latency still ranges between 180–350ms for many apps.</li>
            <li>The African cloud market is already worth over $15 billion and growing.</li>
            <li>Yet many local startups can’t scale because cloud bills keep rising in dollars.</li>
        </ul>
        <p>We build world-class software here, but the infrastructure powering everything isn’t ours. That’s the cycle Servafri wants to break.</p>

        <h2>The Vision Behind Servafri</h2>
        <p>Servafri was born from one belief: Africa deserves its own cloud. Infrastructure that understands our reality, our economy, and the challenges we face—not something imported and adjusted.</p>

        <p>We want to build:</p>
        <ul>
            <li>Multiple data centers across Africa.</li>
            <li>Developer tools that remove stress, not add to it.</li>
            <li>Cloud pricing that actually fits African pockets.</li>
            <li>A platform where African startups can grow confidently.</li>
        </ul>
        <p>We’re not in competition with anyone. We’re creating something that fits us.</p>

        <h2>The Story of Servafri’s Rebirth</h2>
        <p>Servafri existed before 2024, but the project went silent. The dream paused, not cancelled. In 2025, at age 18, I brought it back with a clearer purpose. Not because I wanted a company, but because I wanted to solve the struggles developers like me face every single day.</p>
        <p>Africa doesn’t just need more apps; it needs the infrastructure powering those apps. Those engines behind the scenes that nobody sees but everyone depends on. That’s what Servafri exists to be.</p>

        <blockquote class="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground my-8 bg-muted/20 rounded-r-lg">
            “When I came across the name Servafri, it felt bigger than a brand. It felt like a space waiting to be created—a cloud forming over Africa’s digital sky.<br/><br/>
            Every developer who has fought with foreign billing,<br/>
            every founder blocked by card issues,<br/>
            every startup slowed down by latency—this is for you.<br/><br/>
            I was 18 when I picked this project back up. Age didn’t matter. Vision did.<br/><br/>
            Servafri isn’t just a product. It’s a commitment to Africa’s builders.”
            <footer class="mt-4 font-semibold text-primary">— Victor Bodude</footer>
        </blockquote>

        <h2>What We’re Building Toward</h2>
        <p>The heart of Servafri is Africa. Every decision is shaped around our reality:</p>
        <ul>
            <li>Localized billing that makes sense here.</li>
            <li>Simple tools for deploying apps without stress.</li>
            <li>Low-latency regions, with African data centers coming in the future.</li>
            <li>Community support, mentorship, and developer empowerment.</li>
            <li>Collaboration with tech hubs, payment providers, and universities.</li>
        </ul>
        <p>We’re not just building a cloud service. We’re building a foundation for African innovation.</p>

        <h2>Keeping Value Within Africa</h2>
        <p>Cloud is a multi-billion-dollar industry. Yet almost all the money leaves the continent. Servafri wants to help change that by creating jobs, training more African cloud engineers, increasing data sovereignty, and keeping more value within our borders.</p>
        <p>If we say “Serving Africa,” it has to show in the impact.</p>

        <h2>The Future We See</h2>
        <p>A future where developers in Lagos deploy instantly, startups in Nairobi scale smoothly, and businesses in Ghana can host data locally. African infrastructure stands confidently on the global stage. This isn’t a dream. It’s the path we’ve already started walking.</p>

        <h2>Be Part of the Journey</h2>
        <p>Whether you’re a developer, founder, student, or just someone who believes Africa can build its own digital future, you’re invited. Join the early waitlist at <a href="http://www.servafri.com" class="text-primary hover:underline">www.servafri.com</a>.</p>
        <p>Servafri is more than servers and dashboards. It’s Africa taking control of its digital future—one cloud at a time.</p>
    `
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
