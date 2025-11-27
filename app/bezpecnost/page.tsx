import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { safetyRules } from "@/lib/data"
import {
  CreditCard,
  KeyRound,
  Award as IdCard,
  FileText,
  ImageOff,
  Building2,
  AlertTriangle,
  Calculator,
  Calendar,
  LinkIcon,
  Scale,
  CheckCircle,
  Copy,
  Users,
  RefreshCw,
  Shield,
  XCircle,
  AlertOctagon,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  KeyRound,
  IdCard,
  FileText,
  ImageOff,
  Building2,
  AlertTriangle,
  Calculator,
  Calendar,
  Link: LinkIcon,
  Scale,
  CheckCircle,
  Copy,
  Users,
  RefreshCw,
  Shield,
}

export const metadata = {
  title: "Bezpečnost - AI Průvodce",
  description: "Důležitá bezpečnostní pravidla pro používání AI nástrojů.",
}

export default function SafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="inline-flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
                <Shield className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Bezpečnost při práci s AI</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              AI je mocný nástroj, ale vyžaduje opatrnost. Dodržuj tato pravidla pro bezpečné používání.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            {/* Never share */}
            <div className="rounded-2xl border-2 border-destructive/50 bg-destructive/5 p-8">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-destructive" />
                <h2 className="text-xl font-bold text-destructive">Nikdy nedávej do AI</h2>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {safetyRules.neverShare.map((rule, index) => {
                  const Icon = iconMap[rule.icon] || AlertTriangle
                  return (
                    <div key={index} className="flex items-center gap-3 rounded-xl bg-background p-4">
                      <Icon className="h-5 w-5 flex-shrink-0 text-destructive" />
                      <span className="font-medium">{rule.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Never trust */}
            <div className="mt-8 rounded-2xl border-2 border-orange-500/50 bg-orange-500/5 p-8">
              <div className="flex items-center gap-3">
                <AlertOctagon className="h-6 w-6 text-orange-500" />
                <h2 className="text-xl font-bold text-orange-500">Nevěř všemu slepě</h2>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {safetyRules.neverTrust.map((rule, index) => {
                  const Icon = iconMap[rule.icon] || AlertTriangle
                  return (
                    <div key={index} className="flex items-center gap-3 rounded-xl bg-background p-4">
                      <Icon className="h-5 w-5 flex-shrink-0 text-orange-500" />
                      <span className="font-medium">{rule.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Always do */}
            <div className="mt-8 rounded-2xl border-2 border-primary/50 bg-primary/5 p-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-primary">Vždy dělej</h2>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {safetyRules.alwaysDo.map((rule, index) => {
                  const Icon = iconMap[rule.icon] || CheckCircle
                  return (
                    <div key={index} className="flex items-center gap-3 rounded-xl bg-background p-4">
                      <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="font-medium">{rule.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Additional tips */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold">Proč je to důležité?</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">AI data nejsou soukromá.</strong> Vše, co napíšeš do AI, může být
                  použito k trénování budoucích modelů nebo uloženo na serverech.
                </p>
                <p>
                  <strong className="text-foreground">AI může "halucinovat".</strong> AI modely někdy generují
                  informace, které vypadají věrohodně, ale jsou zcela vymyšlené – falešné citace, neexistující zdroje
                  nebo špatná fakta.
                </p>
                <p>
                  <strong className="text-foreground">Ověřuj důležité informace.</strong> U kritických rozhodnutí
                  (právní, zdravotní, finanční) vždy konzultuj s odborníkem a ověř informace z více zdrojů.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
