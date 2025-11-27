"use client"

import { useState } from "react"
import { ArrowRight, PenLine, Image as ImageIcon, Search, FileText, Sparkles, Brain, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { aiTools } from "@/lib/data"
import { ToolCard } from "@/components/tool-card"

const useCases = [
    {
        id: "write",
        title: "Něco napsat",
        description: "E-maily, články, příspěvky",
        icon: PenLine,
        color: "bg-blue-500/10 text-blue-500",
        recommended: ["claude", "deepseek", "chatgpt"], // Claude pro kvalitu, DeepSeek neomezeně, ChatGPT pro začátečníky
        freeStrategy: "Začni s Claude (nejlepší kvalita), přepni na DeepSeek když dojde limit, ChatGPT jako záloha"
    },
    {
        id: "image",
        title: "Vytvořit obrázek",
        description: "Loga, ilustrace, fotky",
        icon: ImageIcon,
        color: "bg-purple-500/10 text-purple-500",
        recommended: ["qwen", "chatgpt", "gemini"], // Qwen zdarma neomezeně, ChatGPT má limity, Gemini bez limitů
        freeStrategy: "Qwen pro neomezené obrázky zdarma, ChatGPT pro kvalitu (limit 50/3h), Gemini bez limitů"
    },
    {
        id: "search",
        title: "Zjistit informace",
        description: "Aktuální zprávy, fakta",
        icon: Search,
        color: "bg-green-500/10 text-green-500",
        recommended: ["perplexity", "gemini", "grok"], // Perplexity zdarma neomezeně, Gemini bez limitů, Grok pro aktuální zprávy
        freeStrategy: "Perplexity pro ověřitelné fakty zdarma, Gemini pro dlouhé dokumenty, Grok pro X/Twitter novinky"
    },
    {
        id: "edit",
        title: "Upravit obrázek",
        description: "Změny, analýza co je na fotce",
        icon: Sparkles,
        color: "bg-orange-500/10 text-orange-500",
        recommended: ["qwen", "chatgpt", "gemini"], // Qwen zdarma neomezeně, ChatGPT pro kvalitu
        freeStrategy: "Qwen pro vše zdarma, ChatGPT pro lepší výsledky (ale limit), Gemini pro dokumenty"
    },
    {
        id: "logic",
        title: "Složité úkoly",
        description: "Matematika, programování, logika",
        icon: Brain,
        color: "bg-red-500/10 text-red-500",
        recommended: ["deepseek", "claude", "chatgpt"], // DeepSeek neomezeně zdarma, Claude pro kvalitu, ChatGPT pro všechno
        freeStrategy: "DeepSeek pro neomezené programování zdarma, Claude pro složité analýzy, ChatGPT pro rychlé úkoly"
    },
]

export function UseCaseWizard() {
    const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null)

    const selectedData = useCases.find((u) => u.id === selectedUseCase)
    const recommendedTools = selectedData
        ? aiTools.filter((tool) => selectedData.recommended.includes(tool.id))
        : []

    return (
        <div className="w-full max-w-5xl mx-auto">
            {!selectedUseCase ? (
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Co chceš dnes udělat?</h2>
                        <p className="text-lg text-muted-foreground">Vyber si úkol a my ti doporučíme ten nejlepší nástroj.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {useCases.map((useCase) => (
                            <button
                                key={useCase.id}
                                onClick={() => setSelectedUseCase(useCase.id)}
                                className="group relative flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex w-full items-start justify-between">
                                    <div className={cn("rounded-xl p-3 transition-colors", useCase.color)}>
                                        <useCase.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex -space-x-2">
                                        {useCase.recommended.slice(0, 3).map((toolId) => {
                                            const tool = aiTools.find((t) => t.id === toolId)
                                            if (!tool) return null
                                            return (
                                                <div key={tool.id} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background bg-background">
                                                    <img src={tool.logo} alt={tool.name} className="h-full w-full object-cover" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{useCase.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{useCase.description}</p>
                                </div>
                                <div className="absolute bottom-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ArrowRight className="h-5 w-5 text-primary" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedUseCase(null)} className="rounded-full">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h2 className="text-2xl font-bold">Nejlepší nástroje pro: {selectedData?.title}</h2>
                            <p className="text-muted-foreground">Vybrali jsme pro tebe ty nejvhodnější AI modely.</p>
                        </div>
                    </div>

                    {/* Free Strategy */}
                    <div className="rounded-2xl border-2 border-green-500/20 bg-green-500/5 p-6 mb-6">
                        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">
                            💡 Strategie pro ZDARMA používání:
                        </h3>
                        <p className="text-green-800 dark:text-green-300">
                            {selectedData?.freeStrategy}
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {recommendedTools.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <Button variant="outline" onClick={() => setSelectedUseCase(null)}>
                            Vybrat jiný úkol
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
