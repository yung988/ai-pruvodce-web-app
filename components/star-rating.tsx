import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  className?: string
}

export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star key={i} className={cn("h-4 w-4", i < rating ? "fill-primary text-primary" : "fill-muted text-muted")} />
      ))}
    </div>
  )
}
