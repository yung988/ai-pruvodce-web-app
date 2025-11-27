"use client"

import { useState } from "react"
import { conversationExamples, type ConversationExample } from "@/lib/advanced-prompts-data"
import { cn } from "@/lib/utils"
import { Bot, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ConversationViewer() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Vše")
    const [selectedExampleId, setSelectedExampleId] = useState<string>(conversationExamples[0].id)

    const categories = ["Vše", ...Array.from(new Set(conversationExamples.map((e) => e.category)))]

    const filteredExamples = selectedCategory === "Vše"
        ? conversationExamples
        : conversationExamples.filter(e => e.category === selectedCategory)

    const selectedExample = conversationExamples.find(e => e.id === selectedExampleId) || conversationExamples[0]

    return (
        <div className="flex flex-col gap-6 lg:flex-row h-[600px]">
            {/* Sidebar / List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4 border-r border-border pr-0 lg:pr-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 pb-4 border-b border-border">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={selectedCategory === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(cat)}
                            className="rounded-full text-xs"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Example List */}
                <div className="flex-1 overflow-y-auto space-y-2">
                    {filteredExamples.map((example) => (
                        <button
                            key={example.id}
                            onClick={() => setSelectedExampleId(example.id)}
                            className={cn(
                                "w-full text-left p-4 rounded-xl border transition-all hover:shadow-md",
                                selectedExampleId === example.id
                                    ? "border-primary bg-primary/5 shadow-sm"
                                    : "border-border bg-card hover:border-primary/50"
                            )}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-sm">{example.title}</h3>
                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{example.category}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">{example.description}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 flex flex-col bg-secondary/10 rounded-2xl border border-border overflow-hidden">
                {/* Chat Header */}
                <div className="p-4 border-b border-border bg-card flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold">{selectedExample.title}</h3>
                        <p className="text-xs text-muted-foreground">{selectedExample.description}</p>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {selectedExample.messages.map((msg, idx) => (
                        <div key={idx} className={cn(
                            "flex gap-4 max-w-[90%]",
                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                        )}>
                            {/* Avatar */}
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                                msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                            )}>
                                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>

                            {/* Bubble */}
                            <div className={cn(
                                "p-4 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed shadow-sm",
                                msg.role === "user"
                                    ? "bg-primary text-primary-foreground rounded-tr-none"
                                    : "bg-card border border-border rounded-tl-none"
                            )}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
