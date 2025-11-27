import { AITool } from "./types"

export const aiTools: AITool[] = [
    {
        id: "deepseek",
        name: "DeepSeek",
        provider: "DeepSeek",
        logo: "/logos/deepseek.svg",
        website: "https://chat.deepseek.com",
        shortDescription: "Spolehlivý textový asistent, který je zcela ZDARMA.",
        description: "DeepSeek je čistě textový asistent, který vyniká v češtině a je zcela zdarma. Nemá generování obrázků, ale o to lépe rozumí textu a logice. Je to spolehlivý parťák na povídání, učení a práci s dokumenty, který otevřeně přizná, když něco neví.",
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
        bestFor: ["Vysvětlování a učení", "Práce s českým textem", "Programování a logika", "Práce s dokumenty"],
        pros: ["Zcela ZDARMA", "Výborná čeština", "Upřímnost (přizná chybu)", "Velký kontext"],
        cons: ["Nemá generování obrázků", "Čínský původ (privacy concerns)", "Občasné výpadky serverů"],
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
        shortDescription: "Chytrý spolužák a asistent, který nikdy nespí.",
        description: "ChatGPT (GPT-5.1 Thinking) je univerzální asistent, který umí číst, psát, plánovat a pracovat s dokumenty. U složitějších úkolů používá 'reasoning' – promyslí si postup v krocích, než odpoví. Ideální na vysvětlování, učení i práci.",
        models: [
            {
                id: "gpt-5-1-instant",
                name: "GPT-5.1 Instant",
                contextWindow: 128000,
                pricing: { input: 2.50, output: 10.00, isFree: true },
                capabilities: { reasoning: 9, coding: 9, creativeWriting: 9 },
                description: "Rychlý režim pro každodenní úkoly a konverzaci."
            },
            {
                id: "gpt-5-1-thinking",
                name: "GPT-5.1 Thinking",
                contextWindow: 128000,
                pricing: { input: 15.00, output: 60.00, isFree: false },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 8 },
                description: "Adaptivní reasoning - promyslí si postup před odpovědí."
            },
            {
                id: "gpt-5-1-codex-max",
                name: "GPT-5.1-Codex-Max",
                contextWindow: 1000000,
                pricing: { input: 15.00, output: 60.00, isFree: false },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 7 },
                description: "Agentic coding model pro složité programování."
            }
        ],
        bestFor: ["Vysvětlování a učení", "Psaní e-mailů a textů", "Plánování a nápady", "Práce s dokumenty a Excelem"],
        pros: ["Umí přemýšlet v krocích (Thinking)", "Adaptivní - rychlý nebo důkladný", "Práce s webem a soubory", "Univerzální 'vše v jednom'"],
        cons: ["Nemá osobní zkušenosti", "Může 'halucinovat' (ověřovat fakta)", "Nevidí do soukromých účtů", "Limity ve free verzi"],
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
        description: "Claude Sonnet 4.5 je nejnovější model od Anthropic, navržený pro efektivitu a přirozenou konverzaci. Vyniká v programování, analýze dokumentů a kreativním psaní. Má silné etické zábrany a 'nuancované myšlení' – čte mezi řádky.",
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
        bestFor: ["Psaní textů a copywritingu", "Programování (Artifacts)", "Analýza dlouhých dokumentů", "Osobní asistent"],
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
        website: "https://grok.com",
        shortDescription: "Nejsilnější, upřímný a vtipný model bez cenzury.",
        description: "Grok 4 od xAI je navržený tak, aby byl maximálně užitečný, upřímný a vtipný (inspirovaný Stopařovým průvodcem). Nemá zbytečnou cenzuru, skvěle zvládá češtinu, matematiku i programování. Má přístup k aktuálním informacím v reálném čase.",
        models: [
            {
                id: "grok-4-1-thinking",
                name: "Grok 4.1 Thinking",
                contextWindow: 128000,
                pricing: { input: 0, output: 0, isFree: true },
                capabilities: { reasoning: 10, coding: 10, creativeWriting: 10 },
                description: "Plný reasoning režim pro složité úvahy a vědu."
            },
            {
                id: "grok-4-1-fast",
                name: "Grok 4.1 Fast",
                contextWindow: 128000,
                pricing: { input: 0, output: 0, isFree: true },
                capabilities: { reasoning: 9, coding: 9, creativeWriting: 10 },
                description: "Rychlý režim pro okamžité odpovědi a zábavu."
            }
        ],
        bestFor: ["Domácí úkoly a vysvětlování", "Zábava a memečka", "Aktuální zprávy", "Programování"],
        pros: ["Dostupný ZDARMA (s limity)", "Bez zbytečné cenzury a moralizování", "Skvělá čeština a humor", "Real-time informace"],
        cons: ["Limity zpráv ve free verzi", "Může být 'politically incorrect'", "Méně formální než ostatní"],
        features: {
            imageGeneration: true,
            webSearch: true,
            imageAnalysis: true,
            voice: false
        },
        pricing: {
            plan: "Zdarma / Premium",
            startingPrice: 0
        }
    },
    {
        id: "qwen",
        name: "Qwen",
        provider: "Alibaba Cloud",
        logo: "/logos/Qwen_logo.svg",
        website: "https://chat.qwen.ai",
        shortDescription: "Váš AI kamarád pro rodinu a tvoření.",
        description: "Qwen je jako chytrý kamarád, který pomůže s úkoly, vymyslí hru pro děti nebo naplánuje dovolenou. Mluví skvěle česky a je velmi flexibilní – není to 'suchar'. Má aktuální znalosti a dbá na bezpečnost dětí.",
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
        bestFor: ["Rodinné aktivity a zábava", "Pomoc s úkoly a učením", "Tvoření a kreativita", "Plánování"],
        pros: ["Přátelský a neformální tón", "Bezpečný pro rodinu", "Multijazyčnost (čeština, angličtina...)", "Aktuální znalosti"],
        cons: ["Méně známý na západě", "UI primárně v čínštině (ale chat česky)", "Omezená dokumentace"],
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
