import { AITool } from "./types"

export const aiTools: AITool[] = [
    {
        id: "deepseek",
        name: "DeepSeek",
        provider: "DeepSeek",
        logo: "/logos/deepseek.svg",
        website: "https://chat.deepseek.com",
        shortDescription: "Open-source gigant s nejlevnějším API a špičkovým reasoning.",
        description: "DeepSeek nabízí výkon srovnatelný s nejlepšími komerčními modely, ale zcela zdarma nebo za zlomek ceny. Modely V3.2 a R1 vynikají v logice, programování a dlouhém kontextu. Open-source s možností vlastního hostingu.",
        models: [
            {
                id: "deepseek-v3-2",
                name: "DeepSeek V3.2",
                contextWindow: 128000,
                pricing: { input: 0.14, output: 0.28, isFree: true },
                capabilities: { reasoning: 9, coding: 9, creativeWriting: 7 },
                description: "Nejnovější chatovací model s vylepšeným dlouhým kontextem."
            },
            {
                id: "deepseek-r1",
                name: "DeepSeek R1",
                contextWindow: 128000,
                pricing: { input: 0.55, output: 2.19, isFree: true },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 6 },
                description: "Špičkový reasoning model pro komplexní logiku a matematiku."
            }
        ],
        bestFor: ["Programování a debugging", "Složitá logika a matematika", "Dlouhé konverzace (levné API)"],
        pros: ["Zdarma přístup k top modelům", "Špičkový reasoning (R1)", "Velmi levné API", "Open weights (V3)"],
        cons: ["Čínský původ (privacy concerns)", "Slabší v kreativním psaní", "Občasné výpadky serverů"],
        features: {
            imageGeneration: false,
            webSearch: true,
            imageAnalysis: true,
            voice: false
        },
        pricing: {
            plan: "Zdarma",
            startingPrice: 0
        }
    },
    {
        id: "chatgpt",
        name: "ChatGPT",
        provider: "OpenAI",
        logo: "/logos/OpenAI_logo.svg",
        website: "https://chatgpt.com",
        shortDescription: "Univerzální standard a nejpopulárnější AI asistent.",
        description: "ChatGPT od OpenAI je synonymem pro AI. Nabízí nejvšestrannější sadu funkcí včetně generování obrázků (DALL-E 3), analýzy dat a pokročilého hlasového režimu. GPT-5.1 přináší adaptivní reasoning a personalizaci.",
        models: [
            {
                id: "gpt-5-1-instant",
                name: "GPT-5.1 Instant",
                contextWindow: 128000,
                pricing: { input: 2.50, output: 10.00, isFree: true },
                capabilities: { reasoning: 9, coding: 9, creativeWriting: 9 },
                description: "Rychlý režim s konverzačním a přátelským stylem."
            },
            {
                id: "gpt-5-1-thinking",
                name: "GPT-5.1 Thinking",
                contextWindow: 128000,
                pricing: { input: 15.00, output: 60.00, isFree: false },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 8 },
                description: "Adaptivní reasoning - mění čas přemýšlení podle složitosti."
            },
            {
                id: "gpt-5-1-codex-max",
                name: "GPT-5.1-Codex-Max",
                contextWindow: 1000000,
                pricing: { input: 15.00, output: 60.00, isFree: false },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 7 },
                description: "Agentic coding model, 30+ hodin autonomního kódování."
            }
        ],
        bestFor: ["Každodenní úkoly", "Generování obrázků", "Hlasová konverzace", "Analýza dat"],
        pros: ["Nejlepší UX a aplikace", "Multimodální (vidí, slyší, mluví)", "Obrovská komunita a GPTs", "Spolehlivost"],
        cons: ["Přísné limity ve free verzi", "Občas 'líný' při kódování", "O1 je velmi drahý"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: true
        },
        pricing: {
            plan: "Free / Plus",
            startingPrice: 0
        }
    },
    {
        id: "claude",
        name: "Claude",
        provider: "Anthropic",
        logo: "/logos/Claude_AI_symbol.svg",
        website: "https://claude.ai",
        shortDescription: "Nejlidštější AI s citem pro psaní a kódování.",
        description: "Claude od Anthropic je miláčkem vývojářů a spisovatelů. Jeho 4.5 série přináší best-in-class kódování s 30+ hodinami autonomní práce, rozšířený kontext až 1M tokenů a vylepšené computer use schopnosti.",
        models: [
            {
                id: "claude-4-5-opus",
                name: "Claude Opus 4.5",
                contextWindow: 200000,
                maxOutputTokens: 64000,
                pricing: { input: 15.00, output: 75.00, isFree: false },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 10 },
                description: "Nejvýkonnější model pro složité úkoly a nuance."
            },
            {
                id: "claude-4-5-sonnet",
                name: "Claude Sonnet 4.5",
                contextWindow: 200000,
                maxOutputTokens: 64000,
                pricing: { input: 3.00, output: 15.00, isFree: true },
                capabilities: { reasoning: 9, coding: 10, creativeWriting: 10 },
                description: "Nejlepší model na kódování a agenty, 77% SWE-bench."
            },
            {
                id: "claude-4-5-haiku",
                name: "Claude Haiku 4.5",
                contextWindow: 200000,
                pricing: { input: 0.80, output: 4.00, isFree: true },
                capabilities: { reasoning: 8, coding: 8, creativeWriting: 9 },
                description: "Rychlý a levný model pro běžné úkoly."
            }
        ],
        bestFor: ["Psaní textů a copywritingu", "Programování (Artifacts)", "Analýza dlouhých dokumentů"],
        pros: ["Nejpřirozenější čeština", "Artifacts (náhled kódu/webu)", "Velký kontext bez ztráty paměti", "Bezpečný a etický"],
        cons: ["Přísné limity zpráv (i u placené verze)", "Nemá generování obrázků", "Občas příliš opatrný"],
        features: {
            imageGeneration: false,
            webSearch: true,
            imageAnalysis: true,
            voice: false
        },
        pricing: {
            plan: "Free / Pro",
            startingPrice: 0
        }
    },
    {
        id: "gemini",
        name: "Gemini",
        provider: "Google",
        logo: "/logos/gemini.svg",
        website: "https://gemini.google.com",
        shortDescription: "Nejinteligentnější model od Google s nekonečnou pamětí.",
        description: "Gemini 3 je označován jako 'nejinteligentnější' model od Google. Kombinuje pokročilý reasoning, multimodální porozumění (text, obraz, video, kód) a agentic schopnosti. Deep Think režim pro extra složité úkoly.",
        models: [
            {
                id: "gemini-3",
                name: "Gemini 3",
                contextWindow: 2000000,
                pricing: { input: 3.50, output: 10.50, isFree: true },
                capabilities: { reasoning: 10, coding: 9, creativeWriting: 9 },
                description: "Vlajková loď s obřím kontextem a multimodálními schopnostmi."
            },
            {
                id: "gemini-3-deepthink",
                name: "Gemini 3 Deepthink",
                contextWindow: 2000000,
                pricing: { input: 5.00, output: 15.00, isFree: false },
                capabilities: { reasoning: 10, coding: 9, creativeWriting: 9 },
                description: "Enhanced reasoning pro výzkumné a komplexní úkoly."
            },
            {
                id: "gemini-2-5-flash",
                name: "Gemini 2.5 Flash",
                contextWindow: 1000000,
                pricing: { input: 0.10, output: 0.40, isFree: true },
                capabilities: { reasoning: 8, coding: 8, creativeWriting: 8 },
                description: "Extrémně rychlý a levný model pro běžné úkoly."
            }
        ],
        bestFor: ["Práce s velkými dokumenty/PDF", "Integrace s Google Workspace", "Multimodální analýza (video)"],
        pros: ["Obří kontext (2M tokenů)", "Zdarma velmi štědré limity", "Rychlost (Flash modely)", "Integrace (Docs, Gmail)"],
        cons: ["Občas halucinuje více než konkurence", "UX není tak uhlazené jako ChatGPT", "Ochrana soukromí (Google)"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: true
        },
        pricing: {
            plan: "Free / Advanced",
            startingPrice: 0
        }
    },
    {
        id: "perplexity",
        name: "Perplexity",
        provider: "Perplexity AI",
        logo: "/logos/perplexity.svg",
        website: "https://perplexity.ai",
        shortDescription: "Odpovědní motor, který nahrazuje Google.",
        description: "Perplexity není klasický chatbot, ale 'odpovědní engine' s real-time webovým vyhledáváním. Kombinuje AI s vyhledáváním a poskytuje přesné odpovědi se zdroji. Pro verze umožňují přepínání mezi GPT-5, Claude 4.5 a dalšími.",
        models: [
            {
                id: "perplexity-sonar",
                name: "Sonar (Llama 3.3)",
                contextWindow: 128000,
                pricing: { input: 0, output: 0, isFree: true },
                capabilities: { reasoning: 8, coding: 7, creativeWriting: 7 },
                description: "Základní model s real-time webovým vyhledáváním."
            },
            {
                id: "perplexity-pro",
                name: "Pro (Multi-Model)",
                contextWindow: 128000,
                pricing: { input: 0, output: 0, isFree: false },
                capabilities: { reasoning: 10, coding: 9, creativeWriting: 9 },
                description: "Přepínání mezi GPT-5, Claude 4.5, Gemini 3 a dalšími."
            }
        ],
        bestFor: ["Rešerše a vyhledávání informací", "Ověřování faktů", "Akademická práce"],
        pros: ["Vždy uvádí zdroje", "Přístup k různým modelům (Pro)", "Skvělé UI pro čtení", "Nahradí Google Search"],
        cons: ["Není vhodný na kreativní psaní", "Slabší na kódování", "Pro verze je nutná pro top modely"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: true
        },
        pricing: {
            plan: "Free / Pro",
            startingPrice: 0
        }
    },
    {
        id: "grok",
        name: "Grok",
        provider: "xAI",
        logo: "/logos/xai.ico",
        website: "https://x.com/i/grok",
        shortDescription: "Rebel s real-time daty z X a špičkovými obrázky.",
        description: "Grok 4.1 od Elona Muska je integrován přímo do sítě X. Má real-time přístup k datům z tweetů, vylepšenou kreativitu a emocionální inteligenci. Thinking režim pro důkladné odpovědi, Fast režim pro rychlost.",
        models: [
            {
                id: "grok-4-1-thinking",
                name: "Grok 4.1 Thinking",
                contextWindow: 128000,
                pricing: { input: 2.00, output: 10.00, isFree: false },
                capabilities: { reasoning: 10, coding: 9, creativeWriting: 9 },
                description: "Důkladný režim s hlubším reasoning."
            },
            {
                id: "grok-4-1-fast",
                name: "Grok 4.1 Fast",
                contextWindow: 128000,
                pricing: { input: 2.00, output: 10.00, isFree: false },
                capabilities: { reasoning: 9, coding: 8, creativeWriting: 9 },
                description: "Rychlý režim pro okamžité odpovědi."
            }
        ],
        bestFor: ["Aktuální zprávy a trendy", "Generování obrázků (Flux)", "Necenzurovaný humor"],
        pros: ["Real-time data z X", "Špičkové generování obrázků", "Méně 'woke' bias", "Zábavný režim"],
        cons: ["Nutné předplatné X Premium", "Může být vulgární/urážlivý", "Menší ekosystém"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: false
        },
        pricing: {
            plan: "X Premium",
            startingPrice: 8
        }
    },
    {
        id: "qwen",
        name: "Qwen",
        provider: "Alibaba Cloud",
        logo: "/logos/Qwen_logo.svg",
        website: "https://tongyi.aliyun.com",
        shortDescription: "Multimodální gigant s nejlepší úpravou obrázků.",
        description: "Qwen3-Max od Alibaba je top-tier model konkurující GPT-5 a Claude Opus 4. Speciální Qwen-Image-Edit model nabízí nejlepší AI úpravu obrázků na trhu - od přesných textových úprav po kompletní sémantické změny.",
        models: [
            {
                id: "qwen3-max",
                name: "Qwen3-Max",
                contextWindow: 128000,
                pricing: { input: 2.00, output: 6.00, isFree: true },
                capabilities: { reasoning: 9, coding: 9, creativeWriting: 9 },
                description: "Vlajková loď konkurující GPT-5 a Claude Opus."
            },
            {
                id: "qwen-2-5-vl",
                name: "Qwen 2.5 VL",
                contextWindow: 128000,
                pricing: { input: 1.00, output: 3.00, isFree: true },
                capabilities: { reasoning: 8, coding: 8, creativeWriting: 8 },
                description: "Vision-Language model pro multimodální úkoly."
            }
        ],
        bestFor: ["Úprava a editace obrázků", "Multimodální analýza", "Precizní textové úpravy v obrázcích", "Generování obrázků"],
        pros: ["Nejlepší AI úprava obrázků", "Výkon srovnatelný s GPT-5", "Štědré bezplatné limity", "Integrace s Alibaba ekosystémem"],
        cons: ["Méně známý na západě", "UI primárně v čínštině", "Omezená dokumentace v angličtině"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: true
        },
        pricing: {
            plan: "Zdarma / Pro",
            startingPrice: 0
        }
    }
]
