import Link from "next/link"
import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">AI Průvodce</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Domů
            </Link>
            <Link href="/nastroje" className="text-sm text-muted-foreground hover:text-foreground">
              Nástroje
            </Link>
            <Link href="/priklady" className="text-sm text-muted-foreground hover:text-foreground">
              Příklady
            </Link>
            <Link href="/bezpecnost" className="text-sm text-muted-foreground hover:text-foreground">
              Bezpečnost
            </Link>
            <Link href="/slovnicek" className="text-sm text-muted-foreground hover:text-foreground">
              Slovníček
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">Vytvořeno s pomocí AI</p>
        </div>
      </div>
    </footer>
  )
}
