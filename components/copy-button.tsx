"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="secondary" size="sm" onClick={handleCopy} className={cn("gap-2", className)}>
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Zkopírováno
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Kopírovat
        </>
      )}
    </Button>
  )
}
