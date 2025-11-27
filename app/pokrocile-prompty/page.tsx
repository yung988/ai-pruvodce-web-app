import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CopyButton } from "@/components/copy-button"
import {
  promptStructure,
  promptTips,
  promptingTechniques,
  learningPrompts,
  promptFrameworks,
} from "@/lib/advanced-prompts-data"
import { ConversationViewer } from "@/components/conversation-viewer"
import {
  User,
  FileText,
  Target,
  Layout,
  AlertTriangle,
  FileCode,
  ThumbsDown,
  ThumbsUp,
  Lightbulb,
  ArrowRight,
  Brain,
  List,
  UserCheck,
  Zap,
  GraduationCap,
  MessageSquare,
  CheckCircle2,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  FileText,
  Target,
  Layout,
  AlertTriangle,
  FileCode,
  Brain,
  List,
  UserCheck,
  Zap,
}

export const metadata = {
  title: "Pokročilé prompty - AI Průvodce",
  description: "Naučte se psát složité prompty, které z AI vytěží maximum.",
}

export default function AdvancedPromptsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pokročilé prompty</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Ukážeme vám SKUTEČNOU sílu AI s komplexními, detailními prompty a profesionálními technikami.
            </p>
          </div>
        </section>

        {/* Prompt Structure */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold">{promptStructure.title}</h2>
            <div className="rounded-2xl border-2 border-primary/30 bg-card p-6">
              <div className="space-y-3">
                {promptStructure.parts.map((part, idx) => {
                  const Icon = iconMap[part.icon] || FileText
                  return (
                    <div key={idx} className="flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-primary">{part.label}</span>
                        <span className="text-muted-foreground"> - {part.description}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Prompting Techniques */}
        <section className="border-b border-border py-12 bg-secondary/10">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold">Profesionální techniky promptování</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {promptingTechniques.map((tech) => {
                const Icon = iconMap[tech.icon] || Brain
                return (
                  <div key={tech.id} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{tech.title}</h3>
                    </div>
                    <p className="mb-4 text-muted-foreground">{tech.description}</p>
                    <div className="relative rounded-lg bg-secondary/50 p-3 text-sm">
                      <p className="font-mono text-xs text-muted-foreground mb-1">Příklad:</p>
                      <pre className="whitespace-pre-wrap font-sans">{tech.example}</pre>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="border-b border-border py-12">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold">Osvědčené frameworky</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {promptFrameworks.map((framework, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-2xl font-bold text-primary">{framework.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{framework.fullName}</p>
                  </div>
                  <p className="mb-6 text-center text-sm text-muted-foreground">{framework.description}</p>
                  <div className="mt-auto space-y-2">
                    {framework.structure.map((item, i) => (
                      <div key={i} className="rounded-lg bg-secondary/30 p-2 text-sm">
                        <span className="font-bold text-primary">{item.label}</span>
                        <span className="block text-xs text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Conversations */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl space-y-8 px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Ukázky konverzací v praxi</h2>
              <p className="text-muted-foreground mt-2">
                AI není jen o jednom příkazu. Podívejte se, jak vypadá skutečná konverzace.
              </p>
            </div>

            <ConversationViewer />
          </div>
        </section>

        {/* Learning Prompts */}
        <section className="border-b border-border py-12 bg-secondary/10">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="mb-2 text-center text-2xl font-bold flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Jak se učit s AI
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Nechte AI, ať vás něco naučí. Tady jsou prompty, které z modelu udělají vašeho osobního učitele.
            </p>
            <div className="space-y-4">
              {learningPrompts.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {item.description}
                    </span>
                  </div>
                  <div className="relative rounded-lg bg-secondary/30 p-3">
                    <p className="pr-8 text-sm">{item.prompt}</p>
                    <div className="absolute right-2 top-2">
                      <CopyButton text={item.prompt} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="mb-6 flex items-center justify-center gap-3 text-xl font-bold">
              <Lightbulb className="h-6 w-6 text-primary" />
              Tipy pro profesionály
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {promptTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg bg-card p-4 border border-border">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-foreground/90">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
