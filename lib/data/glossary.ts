export interface GlossaryTerm {
    term: string
    definition: string
    category: "Základní" | "Pokročilé" | "Technické"
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Prompt",
        definition: "Zadání nebo instrukce, kterou píšete do AI. Čím lepší prompt, tím lepší výsledek.",
        category: "Základní",
    },
    {
        term: "Model",
        definition: "Samotný 'mozek' AI (např. GPT-4, Claude 3.5). Různé modely umí různé věci.",
        category: "Základní",
    },
    {
        term: "Token",
        definition: "Jednotka, ve které AI počítá text. Zhruba odpovídá 3/4 slova. Limity se často udávají v tokenech.",
        category: "Technické",
    },
    {
        term: "Kontextové okno",
        definition: "Paměť AI v rámci jedné konverzace. Určuje, kolik textu si AI pamatuje zpětně.",
        category: "Pokročilé",
    },
    {
        term: "Halucinace",
        definition: "Situace, kdy si AI vymyslí informaci, ale prezentuje ji jako fakt. Časté u faktických dotazů.",
        category: "Základní",
    },
    {
        term: "Multimodální",
        definition: "Schopnost AI pracovat s více druhy vstupů najednou - text, obrázky, zvuk.",
        category: "Pokročilé",
    },
    {
        term: "LLM (Large Language Model)",
        definition: "Velký jazykový model. Typ AI, který je trénovaný na obrovském množství textu.",
        category: "Technické",
    },
    {
        term: "Agent",
        definition: "AI systém, který umí nejen odpovídat, ale i vykonávat kroky autonomně (např. vyhledat na webu, napsat kód).",
        category: "Pokročilé",
    },
    {
        term: "Zero-shot",
        definition: "Technika promptování, kdy po AI chceme úkol bez předchozích příkladů.",
        category: "Technické",
    },
    {
        term: "Few-shot",
        definition: "Technika, kdy AI dáme několik příkladů (ukázek), jak má úkol splnit.",
        category: "Pokročilé",
    },
    {
        term: "RAG (Retrieval-Augmented Generation)",
        definition: "Metoda, kdy AI hledá informace ve vašich vlastních dokumentech a odpovídá podle nich.",
        category: "Technické",
    },
    {
        term: "Temperature",
        definition: "Nastavení 'kreativity' modelu. Nízká teplota = přesné, faktické odpovědi. Vysoká = kreativní, náhodnější.",
        category: "Technické",
    },
]
