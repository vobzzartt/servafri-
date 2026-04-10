'use client'

import React, { useState } from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { 
  Code2, 
  Terminal, 
  Users, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Upload, 
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import Link from 'next/link'

const roles = [
  {
    id: 'go-se',
    title: 'Go Software Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    icon: Code2,
    description: 'Help us build the underlying systems of a localized cloud. You will work on networking, storage drivers, and virtualization layers.',
    requirements: [
      '3+ years of professional Go experience.',
      'Strong understanding of concurrency and memory management.',
      'Experience with distributed systems and gRPC.',
      'Familiarity with Linux namespaces and container runtimes.',
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    icon: Terminal,
    description: 'Maintain the reliability of our network backbone. You will manage large-scale clusters and edge networking points.',
    requirements: [
      'Expertise in Kubernetes orchestration.',
      'Proficiency with Terraform or Ansible.',
      'Experience with BGP networking and routing.',
      'Strong scripting skills in Go or Bash.',
    ]
  },
  {
    id: 'support',
    title: 'Customer Support Intern',
    department: 'Success',
    type: 'Internship',
    location: 'Remote / Hybrid',
    icon: Users,
    description: 'Help builders on ServAfri solve technical hurdles and gather feedback for the engineering team.',
    requirements: [
      'Excellent written and verbal communication.',
      'Technical curiosity and willingness to learn.',
      'Basic understanding of cloud concepts (VMs, IPs, DNS).',
      'Strong empathy for user success.',
    ]
  }
]

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    
    try {
      const resp = await fetch('/api/jobs/apply', {
        method: 'POST',
        body: formData,
      })
      
      const data = await resp.json()
      
      if (resp.ok) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Connection error. Please check your network.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-36 bg-background pb-20">
        
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <AnimatedGroup variants={{
               item: {
                 hidden: { opacity: 0, y: 12 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
               }
            }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-6 uppercase tracking-widest">
                <Briefcase className="w-3 h-3" />
                <span>Careers</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Build the future <br /> of our <span className="text-primary italic">Cloud</span>.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We are building the technical infrastructure that software teams use across the continent. Join us in working on high-availability systems and localized routing.
              </p>
            </AnimatedGroup>
          </div>
        </section>

        {/* OPEN ROLES */}
        <section className="max-w-7xl mx-auto px-6 mb-32" id="open-roles">
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div 
                key={role.id} 
                className="group p-8 rounded-3xl border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <role.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                <div className="flex gap-3 text-xs font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                  <span>{role.department}</span>
                  <span>•</span>
                  <span>{role.type}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {role.description}
                </p>
                <div className="space-y-3 mb-10">
                  {role.requirements.slice(0, 3).map((req, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5" />
                      {req}
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => {
                    setSelectedRole(role.id)
                    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full rounded-xl py-6 font-bold flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section className="max-w-4xl mx-auto px-6 pt-24 border-t border-muted" id="apply-form">
          <div className="bg-card border rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Application Sent!</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                  Thank you for applying. We'll review your profile and give you feedback within <strong>48 hours</strong>.
                </p>
                <Button asChild size="lg" className="rounded-xl px-12 font-bold">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
                  <p className="text-muted-foreground">Fill out the form below and attach your resume.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                      <input 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-background border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full bg-background border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Which role are you applying for?</label>
                    <select 
                      name="role" 
                      required 
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-background border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                    >
                      <option value="">Select a role</option>
                      {roles.map(r => (
                        <option key={r.id} value={r.title}>{r.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Resume (PDF or DOCX)</label>
                    <div className="relative group/file">
                      <input 
                        type="file" 
                        name="resume" 
                        required 
                        accept=".pdf,.docx,.doc"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full border-2 border-dashed border-muted rounded-xl px-4 py-8 text-center group-hover/file:border-primary/50 group-hover/file:bg-primary/5 transition-all">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3 group-hover/file:text-primary" />
                        <p className="text-sm font-medium text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground mt-1">Maximum file size: 5MB</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Why are you interested in ServAfri?</label>
                    <textarea 
                      name="interest" 
                      required 
                      rows={4}
                      placeholder="Tell us about your background and why you want to help build African cloud infrastructure..."
                      className="w-full bg-background border rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-sm font-bold text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">{error}</p>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-8 rounded-xl text-lg font-bold shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin" /> Submitting...
                      </span>
                    ) : (
                      'Submit My Application'
                    )}
                  </Button>
                </form>
              </>
            )}
            
            {/* Abstract Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </section>

        {/* REASONS TO JOIN */}
        <section className="max-w-7xl mx-auto px-6 mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <Zap className="w-10 h-10 text-primary mx-auto" />
            <h4 className="text-xl font-bold italic">Network Reliability</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">We develop systems that provide low-latency compute. Our work ensures applications remain stable and fast for local users.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto" />
            <h4 className="text-xl font-bold italic">Data Control</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">We believe in providing teams with more control over their data residency. We build tools that manage compute resources independently.</p>
          </div>
          <div className="space-y-4">
            <Globe className="w-10 h-10 text-primary mx-auto" />
            <h4 className="text-xl font-bold italic">Physical Infrastructure</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Our clusters are expanding into different regions. Your role involves software that interacts with the server hardware in these data centers.</p>
          </div>
        </section>

      </main>
      <FooterSection />
    </>
  )
}
