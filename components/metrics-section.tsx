'use client'

import React, { useState, useEffect, useRef } from 'react'
// @ts-ignore
import createGlobe from 'cobe'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Globe, Activity, Terminal } from 'lucide-react'

// Terminal Typewriter Effect
const TerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  
  const sequence = [
    { text: "> Contacting African edge locations...", delay: 400 },
    { text: "> Authenticating routing peers...", delay: 600 },
    { text: "> Provisioning bare-metal node [Lagos, NG]...", delay: 1000 },
    { text: "--------- ANYCAST SYNC SUCCESS ---------", delay: 800 },
    { text: "> Memory: 1.2TB / 2.0TB Allocated", delay: 1500 },
    { text: "> Network Link: 100Gbps Active", delay: 1000 },
    { text: "> Root access granted.", delay: 500 }
  ]

  useEffect(() => {
    let isActive = true
    let seqIndex = 0

    const runSequence = async () => {
      while (isActive) {
        if (seqIndex >= sequence.length) {
            await new Promise(r => setTimeout(r, 3000))
            if (isActive) {
                setLines([])
                seqIndex = 0
            }
            continue;
        }

        const item = sequence[seqIndex]
        setCurrentLine("")
        
        // "Type" characters fast
        let typed = ""
        for (let i = 0; i < item.text.length; i++) {
            if (!isActive) break;
            typed += item.text[i]
            setCurrentLine(typed)
            await new Promise(r => setTimeout(r, 20))
        }

        if (isActive) {
            setLines(prev => [...prev, item.text])
            setCurrentLine("")
            await new Promise(r => setTimeout(r, item.delay))
            seqIndex++
        }
      }
    }
    
    runSequence()
    return () => { isActive = false }
  }, [])

  return (
    <div className="h-full w-full font-mono text-[13px] leading-tight sm:text-sm text-primary/90 overflow-hidden flex flex-col justify-end p-4">
       <div className="flex flex-col gap-1.5 opacity-90">
          <p className="text-muted-foreground">{'>'} Last login: {new Date().toUTCString()} on pts/0</p>
          {lines.map((line, i) => (
             <p key={i} className={line.includes('SUCCESS') ? 'text-green-500' : 'text-primary'}>{line}</p>
          ))}
          <p className="text-primary">{currentLine}<span className="inline-block w-2 bg-primary h-3.5 ml-1 animate-pulse align-middle"></span></p>
       </div>
    </div>
  )
}

const initialRegions = [
  { name: 'Lagos, NG', baseValue: 1, value: 1, unit: 'ms', status: 'ONLINE', jitter: 1 },
  { name: 'New York, US', baseValue: 85, value: 85, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'London, GB', baseValue: 68, value: 68, unit: 'ms', status: 'ONLINE', jitter: 1 },
  { name: 'Amsterdam, NL', baseValue: 71, value: 71, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'Frankfurt, DE', baseValue: 77, value: 77, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'Singapore, SG', baseValue: 208, value: 208, unit: 'ms', status: 'ONLINE', jitter: 4 },
  { name: 'Sydney, AU', baseValue: 245, value: 245, unit: 'ms', status: 'ONLINE', jitter: 5 },
]

function GlobeVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 4.5
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.1, 0.1, 0.12], // Dark gray
      markerColor: [0.0, 0.4, 1.0], // Primary bright blue
      glowColor: [0.05, 0.05, 0.06],
      markers: [
        { location: [6.5244, 3.3792], size: 0.1 }, // Lagos
        { location: [40.7128, -74.0060], size: 0.05 }, // NY
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [50.1109, 8.6821], size: 0.05 }, // Frankfurt
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
      ],
      // @ts-ignore
      onRender: (state: Record<string, any>) => {
        state.phi = phi
        phi += 0.003
      }
    })

    return () => globe.destroy()
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-60">
       <canvas
          ref={canvasRef}
          style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
          className="rounded-full translate-y-12"
       />
    </div>
  )
}

export function MetricsSection() {
  const [regions, setRegions] = useState(initialRegions)

  useEffect(() => {
    const interval = setInterval(() => {
      setRegions(current => current.map(r => ({
        ...r,
        value: Math.max(1, r.baseValue + (Math.random() > 0.5 ? 1 : Math.random() > 0.5 ? -1 : 0) * Math.floor(Math.random() * (r.jitter + 1)))
      })))
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Infrastructure built for global scale.</h2>
              <p className="text-lg text-muted-foreground">Deterministic routing, high-performance NVMe storage, and transparent operational control across every node.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
          
          {/* Terminal Block (Matches System Theme instead of forced dark) */}
          <Card className="lg:col-span-1 border-muted shadow-sm flex flex-col bg-background/50 backdrop-blur">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-muted bg-muted/40 rounded-t-xl">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <span className="ml-auto text-xs font-mono text-muted-foreground flex items-center gap-2"><Terminal className="w-3 h-3"/> servafri://terminal</span>
             </div>
             <CardContent className="p-0 flex-1 relative bg-background/80 rounded-b-xl">
                 <TerminalOutput />
             </CardContent>
          </Card>

          {/* Metrics 2x2 Block */}
          <div className="lg:col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">4.2ms</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Avg. Latency</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Live</span>
                </div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">12.8M</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Packets / Sec</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">99.99%</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Uptime</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">147K</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Active VMs</span>
             </Card>
          </div>

          {/* Map Status Block */}
          <Card className="lg:col-span-1 row-span-2 border-muted shadow-sm bg-background/50 flex flex-col overflow-hidden relative">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-widest">EDGE_NODES.STATUS</span>
                 <span className="text-xs font-medium text-primary flex items-center gap-2"><Globe className="w-3 h-3" /> {regions.length} regions</span>
             </div>
             
             {/* World Map Visualization */}
             <div className="h-48 w-full relative bg-foreground/[0.02] border-b border-muted overflow-hidden flex items-center justify-center">
                <GlobeVisualization />
                <span className="text-[10px] z-10 font-mono text-muted-foreground opacity-70 absolute bottom-3 right-3 uppercase">NETWORK_TOPOLOGY.MAP</span>
             </div>
             
             <CardContent className="p-0 flex-1 flex flex-col">
                <div className="p-6">
                    <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-4 text-xs font-mono text-muted-foreground border-b border-muted/50 pb-2 uppercase tracking-wide">
                        <span>Region</span>
                        <span>Status</span>
                        <span>Latency</span>
                    </div>
                    <div className="space-y-3">
                        {regions.map((region) => (
                            <div key={region.name} className="grid grid-cols-[1fr_auto_auto] gap-4 text-sm items-center font-medium">
                                <span>{region.name}</span>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    {region.status}
                                </div>
                                <span className={region.value < 15 ? 'text-primary font-bold' : 'text-foreground'}>{region.value}{region.unit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto border-t border-muted bg-muted/20 p-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Global Capacity</span>
                        <span className="text-xs font-bold text-foreground">87%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '87%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
