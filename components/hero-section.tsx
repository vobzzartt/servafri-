'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import type { AnimatedGroupProps } from '@/components/ui/animated-group'
import type { Transition } from 'motion/react'
import { HeroHeader } from './header'
import { SplineViewer } from './spline-viewer'
import { PaystackLogo, FlutterwaveLogo, MoniepointLogo, KudaLogo } from './brand-logos'

const createSpringTransition = (duration: number): Transition => ({
    type: 'spring',
    bounce: 0.3,
    duration,
})

const transitionVariants: NonNullable<AnimatedGroupProps['variants']> = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: createSpringTransition(1.5),
        },
    },
}

function VideoPlayer() {
    return (
        <div className="relative w-full aspect-video min-h-[250px] xs:min-h-[280px] sm:min-h-[350px] md:aspect-[16/9] md:min-h-[450px] lg:aspect-[15/8] lg:min-h-[500px] overflow-hidden rounded-[8px] sm:rounded-[12px] group">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/M988_fsOSWo?loop=1&playlist=M988_fsOSWo" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            ></iframe>

            {/* Epic Glow Effect */}
            <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </div>

            {/* Epic Corner Shine Effect */}
            <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
        </div>
    )
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden w-full">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: createSpringTransition(2),
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="/bg.png"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        {/* Spline 3D Animation */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
                            <div className="relative w-full h-[500px] sm:h-[600px] md:h-full max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-2 sm:px-4">
                                <SplineViewer
                                    url="https://prod.spline.design/n2ArOnqmbUvCzhSc/scene.splinecode"
                                    className="w-full h-full min-h-[300px] max-h-[500px] opacity-40 sm:opacity-45 md:opacity-50 lg:opacity-60 scale-[0.7] sm:scale-75 md:scale-90 lg:scale-100 -translate-y-6 sm:-translate-y-10 md:-translate-y-5 lg:translate-y-0"
                                />
                            </div>
                        </div>

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="/waitlist"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Available for Closed Beta Testing</span>

                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold tracking-tight">
                                    Accelerate Cloud Innovation with ServAfri
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed">
                                    Enterprise-grade cloud infrastructure built for Africa. Deploy, manage, and scale your applications with high-performance localized compute and storage.
                                </p>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-12 py-7 text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95">
                                            <Link href="/waitlist">
                                                <span className="text-nowrap">Join the Waitlist</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-3 sm:px-4 md:px-6 lg:px-2">

                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto mt-4 sm:mt-6 max-w-6xl overflow-hidden rounded-xl sm:rounded-2xl border p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <VideoPlayer />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="flex flex-col items-center">
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">Trusted by builders at</p>
                            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 grayscale opacity-40 hover:grayscale-0 transition-all duration-500">
                                <PaystackLogo className="h-6 w-auto" />
                                <FlutterwaveLogo className="h-6" />
                                <MoniepointLogo className="h-5" />
                                <KudaLogo className="h-6" />
                                <div className="flex items-center gap-2 font-bold text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                                    GitHub
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
