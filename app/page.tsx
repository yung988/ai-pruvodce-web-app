import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UseCaseWizard } from "@/components/use-case-wizard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 text-center lg:px-8 lg:py-32">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-500/50 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-400">
              <Sparkles className="h-4 w-4" />
              <span>100% ZDARMA - Žádné placení!</span>
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Váš průvodce světem <span className="text-primary">umělé inteligence</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Naučte se používat AI ZDARMA! ChatGPT, Claude, Gemini a další - všechny mají free verze. Připravené prompty, tipy na přepínání mezi nástroji a bezpečnostní pravidla.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#kategorie">
                  Začít
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/nastroje">Porovnat nástroje</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Case Wizard */}
        <section id="kategorie" className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <UseCaseWizard />
          </div>
        </section>

         {/* Free Strategy */}
         <section className="border-t border-border py-24">
           <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Jak používat AI ZDARMA</h2>
             <p className="mt-4 text-lg text-muted-foreground">
               Žádné placení není potřeba! Zde je strategie pro efektivní používání AI bez kreditů.
             </p>

             <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               <div className="rounded-xl border border-border bg-card p-6">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 mx-auto">
                   <span className="text-2xl">1️⃣</span>
                 </div>
                 <h3 className="mt-4 font-semibold">Začni s DeepSeek</h3>
                 <p className="mt-2 text-sm text-muted-foreground">
                   Neomezené používání zdarma pro většinu úkolů
                 </p>
               </div>
               <div className="rounded-xl border border-border bg-card p-6">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 mx-auto">
                   <span className="text-2xl">2️⃣</span>
                 </div>
                 <h3 className="mt-4 font-semibold">Přepínej nástroje</h3>
                 <p className="mt-2 text-sm text-muted-foreground">
                   Když dojde limit, použij alternativu (vše zdarma!)
                 </p>
               </div>
               <div className="rounded-xl border border-border bg-card p-6">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 mx-auto">
                   <span className="text-2xl">3️⃣</span>
                 </div>
                 <h3 className="mt-4 font-semibold">Gemini pro dokumenty</h3>
                 <p className="mt-2 text-sm text-muted-foreground">
                   Obrovský kontext 2M zdarma bez limitů
                 </p>
               </div>
               <div className="rounded-xl border border-border bg-card p-6">
                 <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 mx-auto">
                   <span className="text-2xl">4️⃣</span>
                 </div>
                 <h3 className="mt-4 font-semibold">Qwen pro obrázky</h3>
                 <p className="mt-2 text-sm text-muted-foreground">
                   Neomezené generování obrázků zdarma
                 </p>
               </div>
             </div>
           </div>
         </section>

         {/* Features */}
         <section className="border-t border-border bg-secondary/30 py-24">
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
        </section>
      </main>
      <Footer />
    </div>
  )
}
