"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search,
    PenLine,
    Sparkles,
    BarChart3,
    Lightbulb,
    Globe,
    Image as ImageIcon,
    MessageCircle,
    Bot,
    FileText,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { aiTools, categories, examples } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const iconMap: Record<string, any> = {
    PenLine,
    Sparkles,
    BarChart3,
    Lightbulb,
    Globe,
    Image: ImageIcon,
    Search,
    MessageCircle,
}

export function SearchCommand() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="hidden lg:inline-flex">Hledat v průvodci...</span>
                <span className="inline-flex lg:hidden">Hledat...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Hledejte nástroje, kategorie nebo příklady..." />
                <CommandList>
                    <CommandEmpty>Nic nenalezeno.</CommandEmpty>

                    <CommandGroup heading="Nástroje">
                        {aiTools.map((tool) => (
                            <CommandItem
                                key={tool.id}
                                value={tool.name}
                                onSelect={() => {
                                    runCommand(() => router.push("/nastroje"))
                                }}
                            >
                                <Bot className="mr-2 h-4 w-4" />
                                <span>{tool.name}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Kategorie">
                        {categories.map((category) => {
                            const Icon = iconMap[category.icon] || PenLine
                            return (
                                <CommandItem
                                    key={category.id}
                                    value={category.title}
                                    onSelect={() => {
                                        runCommand(() => router.push(`/kategorie/${category.id}`))
                                    }}
                                >
                                    <Icon className="mr-2 h-4 w-4" />
                                    <span>{category.title}</span>
                                </CommandItem>
                            )
                        })}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Příklady">
                        {examples.map((example) => (
                            <CommandItem
                                key={example.id}
                                value={`${example.title} ${example.category}`}
                                onSelect={() => {
                                    runCommand(() => router.push("/priklady"))
                                }}
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                <span>{example.title}</span>
                                <span className="ml-2 text-xs text-muted-foreground">({example.category})</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                </CommandList>
            </CommandDialog>
        </>
    )
}
