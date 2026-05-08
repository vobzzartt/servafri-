'use client'

import React, { useState, useEffect, useRef } from 'react'
// @ts-ignore
import createGlobe from 'cobe'
import { SplineViewer } from './spline-viewer'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Globe, Activity, Terminal } from 'lucide-react'

// Terminal Typewriter Effect
const TerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  
  const sequence = [
    { text: "> [SYSTEM] Initializing sovereign cloud core...", delay: 400 },
    { text: "> [NETWORK] Establishing BGP peering with African edge nodes...", delay: 600 },
    { text: "> [SECURITY] Validating zero-trust certificates...", delay: 500 },
    { text: "> [NODE] Provisioning bare-metal compute [Lagos, NG]...", delay: 1000 },
    { text: "--------- ANYCAST SYNC SUCCESSFUL ---------", delay: 800 },
    { text: "> [INFO] NVMe Storage Cluster: 8.4PB Online", delay: 1200 },
    { text: "> [INFO] Global Network Link: 100Gbps (Healthy)", delay: 1000 },
    { text: "> [AUTH] Superuser session granted.", delay: 500 }
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
  { name: 'Lagos, NG', baseValue: 1.2, value: 1.2, unit: 'ms', status: 'ONLINE', jitter: 0.2 },
  { name: 'Accra, GH', baseValue: 15, value: 15, unit: 'ms', status: 'ONLINE', jitter: 1 },
  { name: 'Nairobi, KE', baseValue: 28, value: 28, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'Johannesburg, ZA', baseValue: 34, value: 34, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'Cairo, EG', baseValue: 52, value: 52, unit: 'ms', status: 'ONLINE', jitter: 3 },
  { name: 'London, GB', baseValue: 68, value: 68, unit: 'ms', status: 'ONLINE', jitter: 2 },
  { name: 'New York, US', baseValue: 86, value: 86, unit: 'ms', status: 'ONLINE', jitter: 3 },
  { name: 'Singapore, SG', baseValue: 208, value: 208, unit: 'ms', status: 'ONLINE', jitter: 5 },
  { name: 'Sydney, AU', baseValue: 245, value: 245, unit: 'ms', status: 'ONLINE', jitter: 6 },
  { name: 'São Paulo, BR', baseValue: 180, value: 180, unit: 'ms', status: 'ONLINE', jitter: 5 },
]

function GlobeVisualization() {
  return (
    <div className="w-full h-full flex items-center justify-center z-20 pointer-events-auto">
       <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] relative overflow-hidden rounded-full bg-black shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          <iframe 
             src="https://my.spline.design/n2ArOnqmbUvCzhSc/" 
             className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
             title="ServAfri 3D Globe"
          />
          {/* Overlay to capture clicks but keep the visual */}
          <div className="absolute inset-0 z-30 bg-transparent" />
       </div>
    </div>
  )
}

export function MetricsSection() {
  const [regions, setRegions] = useState(initialRegions)
  const [vmCount, setVmCount] = useState(62)
  const [avgLatency, setAvgLatency] = useState(1.2)
  const [packetsPerSec, setPacketsPerSec] = useState(12.8)

  useEffect(() => {
    // Latency jitter (fast rotation)
    const latencyInterval = setInterval(() => {
      setAvgLatency(prev => {
        const change = (Math.random() - 0.5) * 0.2
        const next = Math.max(1.0, Math.min(2.8, prev + change))
        return Number(next.toFixed(1))
      })
      
      setPacketsPerSec(prev => {
        const change = (Math.random() - 0.5) * 0.4
        const next = Math.max(10.1, Math.min(15.5, prev + change))
        return Number(next.toFixed(1))
      })
    }, 3000)

    // VM Count rotation (now every 30 seconds so you can see it move)
    const vmInterval = setInterval(() => {
      setVmCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2 // Small realistic fluctuation
        const next = Math.max(60, Math.min(189, prev + change))
        return next
      })
    }, 30000) // 30 seconds

    const regionInterval = setInterval(() => {
      setRegions(current => current.map(r => ({
        ...r,
        value: Number(Math.max(r.baseValue, r.baseValue + (Math.random() - 0.5) * r.jitter).toFixed(1))
      })))
    }, 1500)

    return () => {
      clearInterval(latencyInterval)
      clearInterval(vmInterval)
      clearInterval(regionInterval)
    }
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
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{avgLatency}ms</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Avg. Latency</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Live</span>
                </div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-2">{packetsPerSec}M</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Packets / Sec</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">99.99%</span>
                <span className="text-xs font-medium text-muted-foreground mt-2 uppercase tracking-widest">Uptime</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{vmCount}</span>
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
             <div className="h-64 w-full relative bg-foreground/[0.02] border-b border-muted overflow-hidden flex items-center justify-center">
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
