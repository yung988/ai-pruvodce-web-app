export const categories = [
    {
        id: "napsat-text",
        title: "Napsat text",
        icon: "PenLine",
        description: "E-maily, popisy, příspěvky",
        fullDescription:
            "Nechte AI pomoci s psaním e-mailů, produktových popisů, příspěvků na sociální sítě a dalšího textového obsahu.",
        recommendedTools: ["Claude", "ChatGPT", "Gemini"],
        prompts: [
            {
                title: "Profesionální e-mail",
                prompt:
                    "Napiš profesionální e-mail zákazníkovi, který se ptá na stav jeho objednávky. Objednávka číslo 12345 byla odeslána včera a dorazí do 3 pracovních dnů. Buď zdvořilý a přátelský.",
            },
            {
                title: "Produktový popis",
                prompt:
                    "Napiš poutavý produktový popis pro [název produktu]. Zaměř se na hlavní výhody, použij emotivní jazyk a přidej výzvu k akci. Délka: 150-200 slov.",
            },
            {
                title: "Příspěvek na LinkedIn",
                prompt:
                    "Napiš profesionální příspěvek na LinkedIn o [téma]. Zahrň osobní zkušenost, praktický tip a otázku pro čtenáře. Použij 2-3 relevantní hashtagy.",
            },
            {
                title: "Odpověď na recenzi",
                prompt:
                    "Napiš zdvořilou odpověď na negativní recenzi zákazníka, který si stěžuje na pomalé doručení. Omluv se, vysvětli situaci a nabídni řešení.",
            },
        ],
        tips: [
            "Vždy uveď kontext a cílovou skupinu",
            "Specifikuj požadovaný tón (formální, přátelský, vtipný)",
            "Uveď přibližnou délku textu",
            "Přidej příklady, pokud máš specifickou představu",
        ],
    },
    {
        id: "kreativni-psani",
        title: "Kreativní psaní",
        icon: "Sparkles",
        description: "Příběhy, slogany, nápady",
        fullDescription: "Tvořte kreativní obsah jako příběhy, reklamní slogany, názvy produktů a další kreativní texty.",
        recommendedTools: ["Claude", "ChatGPT", "Grok"],
        prompts: [
            {
                title: "Reklamní slogan",
                prompt:
                    "Vymysli 5 originálních reklamních sloganů pro [produkt/značka]. Slogany by měly být krátké, zapamatovatelné a zdůrazňovat hlavní výhodu produktu.",
            },
            {
                title: "Krátký příběh",
                prompt:
                    "Napiš krátký příběh (500 slov) o [téma]. Zahrň překvapivý zvrat na konci. Styl: [např. pohádka, thriller, romantika].",
            },
            {
                title: "Názvy produktů",
                prompt:
                    "Vygeneruj 10 nápadů na název pro nový [typ produktu]. Názvy by měly být snadno zapamatovatelné, jedinečné a evokovat [pocit/vlastnost].",
            },
            {
                title: "Báseň",
                prompt:
                    "Napiš krátkou báseň na téma [téma]. Použij [typ rýmu] a zahrň metafory. Tón: [veselý/melancholický/inspirativní].",
            },
        ],
        tips: [
            "Neboj se experimentovat s různými styly",
            "Požádej o více variant a vyber nejlepší",
            "Dej AI volnost být kreativní",
            "Upřesni cílovou skupinu pro lepší výsledky",
        ],
    },
    {
        id: "analyza-shrnuti",
        title: "Analýza & Shrnutí",
        icon: "BarChart3",
        description: "Dokumenty, data, texty",
        fullDescription: "Analyzujte dokumenty, shrňte dlouhé texty a získejte klíčové informace z dat.",
        recommendedTools: ["Claude", "Gemini", "Kimi"],
        prompts: [
            {
                title: "Shrnutí dokumentu",
                prompt:
                    "Shrň následující dokument do 5 hlavních bodů. Zaměř se na klíčové informace a závěry:\n\n[vlož text dokumentu]",
            },
            {
                title: "Analýza článku",
                prompt:
                    "Analyzuj následující článek. Identifikuj: 1) Hlavní tezi, 2) Podpůrné argumenty, 3) Možné slabiny argumentace, 4) Závěr:\n\n[vlož článek]",
            },
            {
                title: "Extrakce dat",
                prompt:
                    "Z následujícího textu vytáhni všechna čísla, data a statistiky. Seřaď je do přehledné tabulky:\n\n[vlož text]",
            },
            {
                title: "Porovnání textů",
                prompt:
                    "Porovnej následující dva texty. Najdi společné body, rozdíly a vyhodnoť, který je kvalitnější:\n\nText 1: [vlož text]\n\nText 2: [vlož text]",
            },
        ],
        tips: [
            "Pro dlouhé dokumenty použij Gemini nebo Kimi (větší kontext)",
            "Požádej o strukturovaný výstup (odrážky, tabulka)",
            "Specifikuj, co přesně hledáš",
            "U důležitých analýz ověř výstupy",
        ],
    },
    {
        id: "brainstorming",
        title: "Brainstorming",
        icon: "Lightbulb",
        description: "Nápady, strategie, plánování",
        fullDescription: "Generujte nápady, plánujte strategie a rozvíjejte koncepty pro vaše projekty.",
        recommendedTools: ["Claude", "ChatGPT", "Grok"],
        prompts: [
            {
                title: "Generování nápadů",
                prompt:
                    "Vygeneruj 20 originálních nápadů pro [téma/problém]. Buď kreativní a neboj se nekonvenčních řešení. U každého nápadu uveď krátké zdůvodnění.",
            },
            {
                title: "SWOT analýza",
                prompt:
                    "Proveď SWOT analýzu pro [projekt/produkt/firma]. Identifikuj silné stránky, slabé stránky, příležitosti a hrozby. Formátuj jako přehlednou tabulku.",
            },
            {
                title: "Akční plán",
                prompt:
                    "Vytvoř akční plán pro [cíl]. Rozděl ho na týdenní kroky na příští měsíc. U každého kroku uveď konkrétní úkoly a měřitelné výstupy.",
            },
            {
                title: "Řešení problému",
                prompt:
                    "Pomoz mi vyřešit následující problém: [popis problému]. Navrhni 5 různých přístupů k řešení, včetně jejich výhod a nevýhod.",
            },
        ],
        tips: [
            "Čím více kontextu, tím lepší nápady",
            "Požádej o zdůvodnění jednotlivých návrhů",
            "Kombinuj různé perspektivy",
            "Iteruj a rozvíjej nejlepší nápady",
        ],
    },
    {
        id: "preklad",
        title: "Překlad",
        icon: "Globe",
        description: "Překlady a lokalizace",
        fullDescription: "Překládejte texty mezi jazyky s ohledem na kontext a kulturní nuance.",
        recommendedTools: ["Claude", "ChatGPT", "DeepSeek"],
        prompts: [
            {
                title: "Překlad textu",
                prompt:
                    "Přelož následující text z [zdrojový jazyk] do [cílový jazyk]. Zachovej původní tón a styl:\n\n[vlož text]",
            },
            {
                title: "Lokalizace obsahu",
                prompt:
                    "Přelož a lokalizuj následující marketingový text pro [cílový trh]. Přizpůsob kulturní reference a idiomy:\n\n[vlož text]",
            },
            {
                title: "Technický překlad",
                prompt:
                    "Přelož následující technický text. Zachovej přesnost odborné terminologie a přidej vysvětlivky pro nejasné termíny:\n\n[vlož text]",
            },
            {
                title: "Korektura překladu",
                prompt:
                    "Zkontroluj a oprav následující překlad. Identifikuj chyby, nepřesnosti a navrhni lepší formulace:\n\nOriginál: [vlož originál]\nPřeklad: [vlož překlad]",
            },
        ],
        tips: [
            "Uveď kontext textu pro přesnější překlad",
            "Specifikuj formálnost (ty/vy)",
            "U odborných textů zmíň obor",
            "Vždy ověř důležité překlady",
        ],
    },
    {
        id: "obrazky",
        title: "Obrázky",
        icon: "Image",
        description: "Generování a úpravy",
        fullDescription:
            "Vytvářejte a upravujte obrázky pomocí AI generátorů jako DALL-E, Midjourney nebo Stable Diffusion. Qwen nabízí nejlepší úpravu existujících obrázků.",
        recommendedTools: ["ChatGPT", "Gemini", "Qwen"],
        prompts: [
            {
                title: "Fotorealistický obrázek",
                prompt:
                    "Vytvoř fotorealistický obrázek [popis scény]. Styl: profesionální fotografie, přirozené osvětlení, vysoké rozlišení.",
            },
            {
                title: "Ilustrace",
                prompt:
                    "Vytvoř ilustraci [popis]. Styl: [např. minimalistický, akvarelový, komiksový]. Barevná paleta: [barvy].",
            },
            {
                title: "Logo koncept",
                prompt:
                    "Navrhni logo pro [značka/projekt]. Styl: moderní a minimalistický. Zahrň [prvky]. Barvy: [specifikace].",
            },
            {
                title: "Produktová vizualizace",
                prompt:
                    "Vytvoř produktovou fotografii [produkt] na [pozadí]. Profesionální osvětlení, reklamní styl, vysoká kvalita.",
            },
        ],
        tips: [
            "Buď co nejkonkrétnější v popisu",
            "Specifikuj styl, osvětlení a barevnost",
            "Vygeneruj více variant",
            "Kombinuj s úpravami v grafických programech",
        ],
    },
    {
        id: "vyzkum",
        title: "Výzkum",
        icon: "Search",
        description: "Hledání informací",
        fullDescription: "Vyhledávejte informace, ověřujte fakta a provádějte rešerše na různá témata.",
        recommendedTools: ["Perplexity", "Gemini", "ChatGPT"],
        prompts: [
            {
                title: "Rešerše tématu",
                prompt:
                    "Proveď komplexní rešerši na téma [téma]. Zahrň: základní přehled, současný stav, klíčové zdroje a trendy. Uveď zdroje informací.",
            },
            {
                title: "Ověření faktu",
                prompt:
                    "Ověř následující tvrzení: [tvrzení]. Je pravdivé? Uveď zdroje a kontext. Pokud je nepravdivé, uveď správnou informaci.",
            },
            {
                title: "Srovnání produktů",
                prompt:
                    "Porovnej [produkt A] a [produkt B]. Zaměř se na: cenu, funkce, výhody, nevýhody a doporučení pro různé uživatele.",
            },
            {
                title: "Průzkum trhu",
                prompt:
                    "Proveď základní průzkum trhu pro [produkt/služba]. Identifikuj: cílovou skupinu, konkurenci, trendy a příležitosti.",
            },
        ],
        tips: [
            "Pro aktuální informace použij Perplexity",
            "Vždy ověřuj důležité informace z více zdrojů",
            "Ptej se na zdroje informací",
            "AI může mít zastaralé informace",
        ],
    },
    {
        id: "vysvetleni",
        title: "Vysvětlení",
        icon: "MessageCircle",
        description: "Naučit se něco nového",
        fullDescription: "Nechte si vysvětlit složitá témata jednoduchým a srozumitelným způsobem.",
        recommendedTools: ["Claude", "ChatGPT", "Gemini"],
        prompts: [
            {
                title: "Vysvětlení konceptu",
                prompt:
                    "Vysvětli mi [koncept] tak, jako bych byl úplný začátečník. Použij analogie a příklady z běžného života.",
            },
            {
                title: "Krok za krokem",
                prompt:
                    "Nauč mě [dovednost] krok za krokem. Začni od úplných základů a postupně zvyšuj obtížnost. Přidej praktické cvičení.",
            },
            {
                title: "Vysvětli jako 5letému",
                prompt:
                    "Vysvětli [složitý koncept] tak jednoduše, aby to pochopilo pětileté dítě. Použij příměry a jednoduché příklady.",
            },
            {
                title: "Časté chyby",
                prompt:
                    "Jaké jsou nejčastější chyby, které lidé dělají při [činnost]? Jak se jim vyhnout? Uveď praktické tipy.",
            },
        ],
        tips: [
            "Neboj se ptát na doplňující otázky",
            "Požádej o příklady a analogie",
            "Specifikuj svou úroveň znalostí",
            "Nech si téma vysvětlit více způsoby",
        ],
    },
]
