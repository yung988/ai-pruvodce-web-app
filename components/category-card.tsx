import type React from "react"
import Link from "next/link"
import { PenLine, Sparkles, BarChart3, Lightbulb, Globe, ImageIcon, Search, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

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

interface CategoryCardProps {
  id: string
  title: string
  icon: string
  description: string
  className?: string
}

export function CategoryCard({ id, title, icon, description, className }: CategoryCardProps) {
  const Icon = iconMap[icon] || PenLine

  return (
    <Link
      href={`/kategorie/${id}`}
      className={cn(
        "group relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:bg-secondary/50",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
