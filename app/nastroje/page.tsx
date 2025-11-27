import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { aiTools } from "@/lib/data"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "AI Nástroje - AI Průvodce",
  description: "Porovnání nejlepších AI nástrojů zdarma. ChatGPT, Claude, Gemini a další.",
}

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Nástroje</h1>
              <p className="mt-4 text-lg text-muted-foreground">Porovnání nejlepších AI nástrojů pro různé úkoly</p>
               <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-green-500/50 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-400">
                 <Sparkles className="h-4 w-4" />
                 Kompletní přehled FREE limitů a strategií!
               </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl space-y-4 px-4 lg:px-8">
            {aiTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
