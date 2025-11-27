import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CopyButton } from "@/components/copy-button"
import { categories, aiTools } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  PenLine,
  Sparkles,
  BarChart3,
  Lightbulb,
  Globe,
  ImageIcon,
  Search,
  MessageCircle,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenLine,
  Sparkles,
  BarChart3,
  Lightbulb,
  Globe,
  ImageIcon,
  Search,
  MessageCircle,
}

interface CategoryPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { id } = await params
  const category = categories.find((c) => c.id === id)
  if (!category) return { title: "Kategorie nenalezena" }
  return {
    title: `${category.title} - AI Průvodce`,
    description: category.fullDescription,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params
  const category = categories.find((c) => c.id === id)

  if (!category) {
    notFound()
  }

  const Icon = iconMap[category.icon] || PenLine
  const recommendedToolsData = aiTools.filter((tool) => category.recommendedTools.includes(tool.name))

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Zpět na kategorie
            </Link>

            <div className="mt-8 flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{category.title}</h1>
                <p className="mt-2 text-lg text-muted-foreground">{category.fullDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended tools */}
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="text-xl font-semibold">Doporučené nástroje</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {recommendedToolsData.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 overflow-hidden">
                    <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">Kontext: {tool.context}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="text-xl font-semibold">Připravené prompty</h2>
            <p className="mt-2 text-muted-foreground">Zkopíruj, uprav podle potřeby a vlož do AI nástroje</p>

            <div className="mt-8 space-y-6">
              {category.prompts.map((prompt, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-6 py-4">
                    <h3 className="font-medium">{prompt.title}</h3>
                    <CopyButton text={prompt.prompt} />
                  </div>
                  <pre className="whitespace-pre-wrap p-6 text-sm text-muted-foreground font-sans">{prompt.prompt}</pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="border-t border-border bg-secondary/30 py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="text-xl font-semibold">Tipy pro nejlepší výsledky</h2>
            <ul className="mt-6 space-y-3">
              {category.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/priklady">
                  Zobrazit více příkladů
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
