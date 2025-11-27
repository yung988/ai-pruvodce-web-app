import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { glossaryTerms } from "@/lib/data"
import { BookOpen, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Slovníček pojmů - AI Průvodce",
    description: "Vysvětlení základních i pokročilých pojmů ze světa umělé inteligence.",
}

export default function GlossaryPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="border-b border-border py-16">
                    <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
                        <div className="inline-flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                        </div>
                        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Slovníček pojmů</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            Nerozumíte nějakému slovu? Tady najdete jednoduchá vysvětlení.
                        </p>
                    </div>
                </section>

                <section className="py-12">
                    <div className="mx-auto max-w-4xl px-4 lg:px-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {glossaryTerms.map((term, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-bold text-lg">{term.term}</h3>
                                        <Badge variant="secondary" className="text-xs">
                                            {term.category}
                                        </Badge>
                                    </div>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        {term.definition}
                                    </p>
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
