export interface AIModel {
    id: string
    name: string
    contextWindow: number // in tokens
    maxOutputTokens?: number
    pricing: {
        input: number // per 1M tokens in USD
        output: number // per 1M tokens in USD
        isFree: boolean
    }
    capabilities: {
        reasoning: number // 1-10
        coding: number // 1-10
        creativeWriting: number // 1-10
    }
    description: string
}

export interface AITool {
    id: string
    name: string
    provider: string
    logo: string
    website: string
    description: string
    shortDescription: string
    models: AIModel[]
    bestFor: string[]
    pros: string[]
    cons: string[]
    features: {
        imageGeneration: boolean
        webSearch: boolean
        imageAnalysis: boolean
        voice: boolean
    }
    pricing: {
        plan: string
        startingPrice: number // 0 for free
    }
}
