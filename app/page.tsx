import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolExplorer } from "@/components/tool-explorer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Sparkles } from "lucide-react"
import { Zap, Image, Globe } from "lucide-react"
import { ToolExplorer } from "@/components/tool-explorer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
      </p>
    </div>
             </div >
           </div >
         </section >

    {/* Features */ }
    < section className = "border-t border-border bg-secondary/30 py-24" >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Příklady k okopírování</h3>
            <p className="mt-2 text-muted-foreground">
              Připravené prompty pro každou situaci. Stačí zkopírovat, upravit a použít.
            </p>
            <Link
              href="/priklady"
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Zobrazit příklady
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
              <Sparkles className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">7 AI nástrojů ZDARMA</h3>
            <p className="mt-2 text-muted-foreground">
              Kompletní přehled s limity free verzí a tipy, jak je efektivně používat bez placení.
            </p>
            <Link
              href="/nastroje"
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Zobrazit limity a strategie
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Bezpečnostní pravidla</h3>
            <p className="mt-2 text-muted-foreground">
              Co s AI nikdy nesdílet a čemu nevěřit. Ochraňte své soukromí.
            </p>
            <Link
              href="/bezpecnost"
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Přečíst pravidla
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
        </section >
      </main >
    <Footer />
    </div >
  )
}
