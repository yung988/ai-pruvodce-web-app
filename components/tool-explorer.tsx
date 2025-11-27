"use client"

import { useState } from "react"
import { aiTools } from "@/lib/data"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { Search, Image, Globe, Zap, Code, FileText, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type FilterType = "all" | "text" | "image" | "search" | "analysis" | "coding" | "free"

const filters: { id: FilterType; label: string; icon: any }[] = [
    { id: "all", label: "Všechno", icon: Search },
    { id: "text", label: "Psaní a text", icon: FileText },
    { id: "image", label: "Obrázky", icon: Image },
    { id: "search", label: "Web & Aktuality", icon: Globe },
    { id: "analysis", label: "Analýza souborů", icon: Zap },
    { id: "coding", label: "Programování", icon: Code },
    { id: "free", label: "Zcela Zdarma", icon: Check },
]

export function ToolExplorer() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all")

    const filteredTools = aiTools.filter((tool) => {
        if (activeFilter === "all") return true
        if (activeFilter === "text") return tool.capabilities?.creativeWriting && tool.capabilities.creativeWriting > 7
        // Note: capabilities are on models, but we can check features or bestFor
        // Let's use the 'features' object and 'bestFor' arrays for better filtering

        if (activeFilter === "image") return tool.features.imageGeneration
        if (activeFilter === "search") return tool.features.webSearch
        if (activeFilter === "analysis") return tool.features.imageAnalysis
        if (activeFilter === "coding") return tool.bestFor.some(t => t.toLowerCase().includes("programování") || t.toLowerCase().includes("kódování"))
        if (activeFilter === "free") return tool.pricing.startingPrice === 0 && tool.models.some(m => m.pricing.isFree)

        return true
    })

    return (
        <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Najdi ten správný nástroj</h2>
                <p className="text-muted-foreground max-w-2xl">
                    Filtrujte modely podle toho, co zrovna potřebujete dělat.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => {
                    const Icon = filter.icon
                    return (
                        <Button
                            key={filter.id}
                            variant={activeFilter === filter.id ? "default" : "outline"}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "rounded-full gap-2 transition-all",
                                activeFilter === filter.id ? "shadow-md scale-105" : "hover:bg-secondary"
                            )}
                        >
                            <Icon className="h-4 w-4" />
                            {filter.label}
                        </Button>
                    )
                })}
            </div>

            {/* Results */}
            <div className="grid gap-6">
                {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        Pro tento filtr jsme nenašli žádné nástroje. Zkuste jinou kategorii.
                    </div>
                )}
            </div>
        </div>
    )
}
