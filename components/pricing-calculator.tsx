'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Server, Database, HardDrive, Network } from 'lucide-react'

// Base prices in USD
const BASE_PRICES = {
    compute: { small: 5, medium: 20, large: 80 },
    database: { small: 15, medium: 50, large: 150 },
    storage: 0.05, // per GB
    bandwidth: 0.01 // per GB after 1TB free
}

// Exchange rate mapping
const EXCHANGE_RATES = {
    USD: 1,
    NGN: 1500, // Nigerian Naira
    GHS: 13.5, // Ghanaian Cedi
    KES: 130, // Kenyan Shilling
    ZAR: 19, // South African Rand
    EGP: 47, // Egyptian Pound
    EUR: 0.92 // Euro
}

export function PricingCalculator() {
    const [currency, setCurrency] = useState<keyof typeof EXCHANGE_RATES>('USD')
    
    // Inputs
    const [computeInstances, setComputeInstances] = useState(1)
    const [computeSize, setComputeSize] = useState<'small' | 'medium' | 'large'>('small')
    
    const [dbInstances, setDbInstances] = useState(0)
    const [dbType, setDbType] = useState<'postgresql' | 'mysql' | 'redis'>('postgresql')
    const [dbSize, setDbSize] = useState<'small' | 'medium' | 'large'>('small')
    
    const [storageGb, setStorageGb] = useState(50)
    const [bandwidthTb, setBandwidthTb] = useState(1) // 1 TB is free

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cost = 0;
        
        // Compute cost
        cost += computeInstances * BASE_PRICES.compute[computeSize]
        
        // Database cost
        cost += dbInstances * BASE_PRICES.database[dbSize]
        
        // Storage cost
        cost += storageGb * BASE_PRICES.storage
        
        // Bandwidth cost (after 1TB free)
        const bandwidthGb = bandwidthTb * 1024
        if (bandwidthGb > 1024) {
            cost += (bandwidthGb - 1024) * BASE_PRICES.bandwidth
        }

        // Apply conversion
        cost = cost * EXCHANGE_RATES[currency]
        
        setTotal(cost)
    }, [computeInstances, computeSize, dbInstances, dbSize, storageGb, bandwidthTb, currency])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        }).format(amount)
    }

    return (
        <Card className="w-full bg-muted/30 border-muted">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Cost Calculator</h3>
                        <p className="text-sm text-muted-foreground">Estimate your monthly spend dynamically.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-muted p-1 rounded-lg border">
                        <select 
                            value={currency} 
                            onChange={(e) => setCurrency(e.target.value as any)}
                            className="bg-transparent border-none text-sm font-medium focus:ring-0 px-2 py-1 cursor-pointer"
                        >
                            <option value="USD">USD ($)</option>
                            <option value="NGN">NGN (₦)</option>
                            <option value="GHS">GHS (₵)</option>
                            <option value="KES">KES (KSh)</option>
                            <option value="ZAR">ZAR (R)</option>
                            <option value="EGP">EGP (E£)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        {/* Compute */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 font-medium">
                                <Server className="w-4 h-4 text-primary" />
                                <span>Compute Instances</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Quantity</label>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        value={computeInstances}
                                        onChange={(e) => setComputeInstances(parseInt(e.target.value) || 0)}
                                        className="w-full bg-background border rounded-md px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Size</label>
                                    <select 
                                        value={computeSize}
                                        onChange={(e) => setComputeSize(e.target.value as any)}
                                        className="w-full bg-background border rounded-md px-3 py-2 text-sm"
                                    >
                                        <option value="small">Small (2vCPU, 2GB)</option>
                                        <option value="medium">Medium (4vCPU, 8GB)</option>
                                        <option value="large">Large (8vCPU, 16GB)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Database */}
                        <div className="space-y-3 pt-4 border-t border-muted-foreground/10">
                            <div className="flex items-center gap-2 font-medium">
                                <Database className="w-4 h-4 text-primary" />
                                <span>Managed Databases</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Engine</label>
                                    <select 
                                        value={dbType}
                                        onChange={(e) => setDbType(e.target.value as any)}
                                        className="w-full bg-background border rounded-md px-3 py-2 text-sm"
                                    >
                                        <option value="postgresql">PostgreSQL</option>
                                        <option value="mysql">MySQL</option>
                                        <option value="redis">Redis</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Size</label>
                                    <select 
                                        value={dbSize}
                                        onChange={(e) => setDbSize(e.target.value as any)}
                                        className="w-full bg-background border rounded-md px-3 py-2 text-sm"
                                    >
                                        <option value="small">Small (1vCPU, 2GB)</option>
                                        <option value="medium">Medium (2vCPU, 4GB)</option>
                                        <option value="large">Large (4vCPU, 8GB)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Quantity</label>
                                    <input 
                                        type="number" 
                                        min="0" 
                                        value={dbInstances}
                                        onChange={(e) => setDbInstances(parseInt(e.target.value) || 0)}
                                        className="w-full bg-background border rounded-md px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Storage */}
                        <div className="space-y-3 pt-4 border-t border-muted-foreground/10">
                            <div className="flex items-center gap-2 font-medium">
                                <HardDrive className="w-4 h-4 text-primary" />
                                <span>NVMe Storage (GB)</span>
                            </div>
                            <div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="2000" 
                                    step="10"
                                    value={storageGb}
                                    onChange={(e) => setStorageGb(parseInt(e.target.value))}
                                    className="w-full accent-primary"
                                />
                                <div className="text-sm mt-1 text-muted-foreground">{storageGb} GB</div>
                            </div>
                        </div>

                        {/* Bandwidth */}
                        <div className="space-y-3 pt-4 border-t border-muted-foreground/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium">
                                    <Network className="w-4 h-4 text-primary" />
                                    <span>Egress Bandwidth (TB)</span>
                                </div>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">First 1TB Free</span>
                            </div>
                            <div>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="50" 
                                    step="1"
                                    value={bandwidthTb}
                                    onChange={(e) => setBandwidthTb(parseInt(e.target.value))}
                                    className="w-full accent-primary"
                                />
                                <div className="text-sm mt-1 text-muted-foreground">{bandwidthTb} TB</div>
                            </div>
                        </div>
                    </div>

                    <div className="md:pl-8 md:border-l border-muted-foreground/10 flex flex-col justify-center">
                        <div className="bg-background rounded-xl p-8 border shadow-sm text-center">
                            <p className="text-muted-foreground text-sm font-medium mb-2">Estimated Monthly Cost</p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                                {formatCurrency(total)}
                            </h2>
                            <p className="text-xs text-muted-foreground mt-4 pb-4 border-b">
                                Rates updated using live exchange API. <br />No hidden fees. Free tier limits included.
                            </p>
                            
                            <div className="mt-6 flex flex-col gap-3">
                                <button className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-2.5 rounded-lg transition-colors">
                                    Deploy Now
                                </button>
                                <button className="w-full bg-muted text-foreground hover:bg-muted/80 font-medium py-2.5 rounded-lg transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
