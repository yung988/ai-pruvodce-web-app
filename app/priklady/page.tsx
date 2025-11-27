import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CopyButton } from "@/components/copy-button"
import { examplesByInputType, examplesByBusiness, generalBusinessExamples, aiLimitations } from "@/lib/examples-data"
import {
  Type,
  FileUp,
  Camera,
  Droplet,
  Beer,
  Pen,
  Sandwich,
  Mail,
  Share2,
  TrendingUp,
  FileText,
  Calendar,
  AlertTriangle,
  XCircle,
  CheckCircle,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Type,
  FileUp,
  Camera,
  Droplet,
  Beer,
  Pen,
  Sandwich,
  Mail,
  Share2,
  TrendingUp,
  FileText,
  Calendar,
}

export const metadata = {
  title: "Příklady - AI Průvodce",
  description: "Kompletní příklady použití AI podle typu vstupu a oboru podnikání.",
}

export default function ExamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Příklady z praxe</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Kompletní přehled promptů podle typu vstupu i oboru podnikání. Vše připraveno ke zkopírování.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <Tabs defaultValue="input" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
                <TabsTrigger value="input">Podle vstupu</TabsTrigger>
                <TabsTrigger value="business">Podle podnikání</TabsTrigger>
                <TabsTrigger value="general">Obecné</TabsTrigger>
              </TabsList>

              {/* By Input Type */}
              <TabsContent value="input" className="space-y-12">
                {Object.entries(examplesByInputType).map(([key, category]) => {
                  const Icon = iconMap[category.icon] || Type
                  return (
                    <div key={key} className="rounded-2xl border border-border bg-card overflow-hidden">
                      <div className="flex items-center gap-4 border-b border-border bg-secondary/30 p-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">{category.title}</h2>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="divide-y divide-border">
                        {category.subcategories.map((sub, idx) => (
                          <div key={idx} className="p-6">
                            <h3 className="mb-4 font-medium text-primary">{sub.title}</h3>
                            <div className="space-y-2">
                              {sub.prompts.map((prompt, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="flex items-start justify-between gap-4 rounded-lg bg-secondary/30 p-3"
                                >
                                  <p className="text-sm text-foreground/90">{prompt}</p>
                                  <CopyButton text={prompt} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </TabsContent>

              {/* By Business Type */}
              <TabsContent value="business" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {examplesByBusiness.map((business) => {
                    const Icon = iconMap[business.icon] || Droplet
                    return (
                      <div key={business.id} className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className={`flex items-center gap-4 p-6 bg-gradient-to-r ${business.color} text-white`}>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h2 className="text-lg font-semibold">{business.title}</h2>
                        </div>
                        <div className="p-4 space-y-2">
                          {business.prompts.map((prompt, idx) => (
                            <div
                              key={idx}
                              className="flex items-start justify-between gap-3 rounded-lg bg-secondary/30 p-3"
                            >
                              <p className="text-sm text-foreground/90">{prompt}</p>
                              <CopyButton text={prompt} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              {/* General Business Examples */}
              <TabsContent value="general" className="space-y-8">
                <div className="space-y-6">
                  {generalBusinessExamples.map((category, idx) => {
                    const Icon = iconMap[category.icon] || Mail
                    return (
                      <div key={idx} className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className="flex items-center gap-4 border-b border-border bg-secondary/30 p-5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h2 className="text-lg font-semibold">{category.title}</h2>
                        </div>
                        <div className="p-4 space-y-2">
                          {category.prompts.map((prompt, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start justify-between gap-3 rounded-lg bg-secondary/30 p-3"
                            >
                              <p className="text-sm text-foreground/90">{prompt}</p>
                              <CopyButton text={prompt} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* AI Limitations Section */}
                <div className="mt-12 rounded-2xl border-2 border-destructive/50 bg-destructive/5 p-6">
                  <h2 className="flex items-center gap-3 text-xl font-bold text-destructive">
                    <AlertTriangle className="h-6 w-6" />
                    Co AI NEMŮŽE
                  </h2>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 font-semibold text-destructive">
                        <XCircle className="h-5 w-5" />
                        Tyto věci NEDĚLEJ přes AI:
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {aiLimitations.neverDo.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-foreground">"{item.text}"</span>
                            <span className="text-muted-foreground">- {item.note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 font-semibold text-amber-500">
                        <AlertTriangle className="h-5 w-5" />
                        AI se může mýlit:
                      </h3>
                      <ul className="mt-3 space-y-1">
                        {aiLimitations.warnings.map((warning, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {warning}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 font-semibold text-primary">
                        <CheckCircle className="h-5 w-5" />
                        Jak ověřit:
                      </h3>
                      <ul className="mt-3 space-y-1">
                        {aiLimitations.howToVerify.map((tip, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
