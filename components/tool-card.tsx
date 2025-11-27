"use client"

import { useState } from "react"
import { ExternalLink, ChevronDown, ChevronUp, Check, X, Image, Globe, Brain, Mic, Zap, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { type AITool } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ToolCardProps {
  tool: AITool
}

export function ToolCard({ tool }: ToolCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:shadow-primary/5">
      <div
        className="flex cursor-pointer flex-col gap-6 p-6 sm:flex-row sm:items-start sm:justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4 sm:items-center">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 overflow-hidden transition-transform group-hover:scale-105">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="h-12 w-12 object-contain"
              onError={(e) => {
                // Fallback na první písmeno, pokud se logo nenačte
                e.currentTarget.style.display = 'none'
                const parent = e.currentTarget.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-2xl font-bold text-primary">${tool.name[0]}</span>`
                }
              }}
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{tool.name}</h3>
              <Badge variant={tool.pricing.startingPrice === 0 ? "secondary" : "outline"} className="text-xs">
                {tool.pricing.plan}
              </Badge>
            </div>
            <p className="text-sm font-medium text-muted-foreground">{tool.provider}</p>
            <p className="text-sm text-muted-foreground line-clamp-2 sm:line-clamp-1">{tool.shortDescription}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {tool.features.webSearch && (
                <Badge variant="outline" className="gap-1 bg-blue-500/5 text-blue-600 hover:bg-blue-500/10 border-blue-200">
                  <Globe className="h-3 w-3" /> Web
                </Badge>
              )}
              {tool.features.imageGeneration && (
                <Badge variant="outline" className="gap-1 bg-purple-500/5 text-purple-600 hover:bg-purple-500/10 border-purple-200">
                  <Image className="h-3 w-3" /> Obrázky
                </Badge>
              )}
              {tool.features.imageAnalysis && (
                <Badge variant="outline" className="gap-1 bg-orange-500/5 text-orange-600 hover:bg-orange-500/10 border-orange-200">
                  <Zap className="h-3 w-3" /> Vision
                </Badge>
              )}
              {tool.features.voice && (
                <Badge variant="outline" className="gap-1 bg-green-500/5 text-green-600 hover:bg-green-500/10 border-green-200">
                  <Mic className="h-3 w-3" /> Hlas
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground transition-transform" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
          )}
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border bg-secondary/5 p-6 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
          <p className="text-base leading-relaxed text-muted-foreground mb-6">{tool.description}</p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Models Section */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                Dostupné modely
              </h4>
              <div className="grid gap-3">
                {tool.models.map((model) => (
                  <div key={model.id} className="rounded-lg border border-border bg-background p-3 text-sm shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold">{model.name}</span>
                      <Badge variant="secondary" className="text-[10px] h-5">
                        {model.contextWindow / 1000}k context
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{model.description}</p>
                    <div className="flex gap-2 text-[10px] text-muted-foreground">
                      <span title="Reasoning (Logika)" className="flex items-center gap-1">
                        🧠 {model.capabilities.reasoning}/10
                      </span>
                      <span title="Coding (Programování)" className="flex items-center gap-1">
                        💻 {model.capabilities.coding}/10
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros/Cons & Best For */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Ideální pro</h4>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" /> Výhody
                  </h4>
                  <ul className="space-y-1">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-green-500 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2 mb-2 text-sm">
                    <X className="h-4 w-4 text-red-500" /> Nevýhody
                  </h4>
                  <ul className="space-y-1">
                    {tool.cons.map((con) => (
                      <li key={con} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-red-500 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href={tool.website} target="_blank" rel="noopener noreferrer">
                Vyzkoušet {tool.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
