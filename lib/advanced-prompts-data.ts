export const promptStructure = {
  title: "Struktura složitého promptu",
  parts: [
    { icon: "User", label: "ROLE", description: "Kdo má AI být" },
    { icon: "FileText", label: "KONTEXT", description: "Pozadí situace" },
    { icon: "Target", label: "ÚKOL", description: "Co přesně chceš" },
    { icon: "Layout", label: "FORMÁT", description: "Jak má výstup vypadat" },
    { icon: "AlertTriangle", label: "OMEZENÍ", description: "Co nechceš / čemu se vyhnout" },
    { icon: "FileCode", label: "PŘÍKLAD", description: "Ukázka požadovaného stylu" },
  ],
}

export type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export type ConversationExample = {
  id: string
  title: string
  description: string
  category: "Vzdělávání" | "Byznys" | "Kreativita" | "Osobní rozvoj"
  messages: ChatMessage[]
}

export const conversationExamples: ConversationExample[] = [
  {
    id: "sokrates",
    title: "Sokratovský učitel",
    description: "AI jako mentor, který neodpovídá přímo, ale navádí otázkami.",
    category: "Vzdělávání",
    messages: [
      {
        role: "user",
        content: "Vysvětli mi, proč vzniká duha. Jsem žák 5. třídy.",
      },
      {
        role: "assistant",
        content: "Místo abych ti to hned prozradil, zkusme na to přijít spolu. Co musí být na obloze, abychom duhu viděli? Většinou jsou potřeba dvě věci najednou.",
      },
      {
        role: "user",
        content: "No, musí pršet a svítit sluníčko.",
      },
      {
        role: "assistant",
        content: "Přesně tak! A co se stane se světlem, když projde sklenicí vody nebo třeba hranolem? Už jsi to někdy viděl?",
      },
      {
        role: "user",
        content: "Jo, světlo se rozloží na barvy.",
      },
      {
        role: "assistant",
        content: "Výborně. A v případě duhy, co funguje jako ta 'sklenice vody' nebo hranol, který rozkládá sluneční světlo?",
      },
      {
        role: "user",
        content: "Ty kapky deště?",
      },
      {
        role: "assistant",
        content: "Ano! Každá kapka deště funguje jako malý hranol. Sluneční světlo do ní vstoupí, odrazí se a rozloží na barvy, které vidíš. Takže duha je vlastně co?",
      },
    ],
  },
  {
    id: "roleplay-interview",
    title: "Simulace pohovoru",
    description: "Trénink na pracovní pohovor s AI v roli přísného náboráře.",
    category: "Osobní rozvoj",
    messages: [
      {
        role: "user",
        content: "Chci trénovat na pohovor na pozici Project Managera. Hraj roli zkušeného HR manažera, buď trochu přísný a ptej se mě na těžké otázky. Po každé mé odpovědi mi dej krátkou zpětnou vazbu a polož další otázku.",
      },
      {
        role: "assistant",
        content: "Dobře, začněme. Jsem HR manažer a mám před sebou váš životopis. Vidím, že máte zkušenosti s vedením týmů, ale v posledním projektu jste nedodrželi termín o dva měsíce. Můžete mi vysvětlit, co se stalo a jak jste to řešil?",
      },
      {
        role: "user",
        content: "No, klient si pořád vymýšlel nové věci, tak se to protáhlo. Nebyla to úplně moje chyba.",
      },
      {
        role: "assistant",
        content: "**Zpětná vazba:** Tahle odpověď působí defenzivně a svaluje vinu na klienta. Jako Project Manager musíte umět řídit očekávání klienta.\n\n**Lepší odpověď:** 'Došlo k rozšíření rozsahu práce (scope creep). Poučil jsem se, že musím lépe nastavit hranice a komunikovat dopady změn na termín hned na začátku.'\n\n**Další otázka:** Popište mi situaci, kdy jste musel v týmu řešit konflikt mezi dvěma kolegy. Jak jste postupoval?",
      },
    ],
  },
  {
    id: "marketing-plan",
    title: "Tvorba marketingové strategie",
    description: "Iterativní tvorba plánu pro malou firmu.",
    category: "Byznys",
    messages: [
      {
        role: "user",
        content: "Jsem majitel malého květinářství. Chci začít s TikTokem, ale nevím jak. Navrhni mi strategii.",
      },
      {
        role: "assistant",
        content: "Pro květinářství je TikTok skvělý, protože je vizuální. Tady je návrh strategie:\n\n**1. Cílová skupina:** Mladí lidé (Gen Z, Millennials), kteří hledají dárky nebo dekorace.\n**2. Typ obsahu:**\n- *Behind the scenes:* Jak vážete kytici (zrychlené video).\n- *Tipy:* Jak se starat o řezané květiny, aby vydržely.\n- *Příběhy:* 'Kytice pro nevěstu, která chtěla černou růži'.\n\nChceš rozpracovat konkrétní nápady na videa na první týden?",
      },
      {
        role: "user",
        content: "Ano, dej mi 3 konkrétní nápady na videa, která zvládnu natočit sám na mobil.",
      },
      {
        role: "assistant",
        content: "Určitě, tady jsou 3 jednoduché koncepty:\n\n1. **'ASMR Vázání'** (bez mluvení)\n- Záběr na stůl, zvuky stříhání stonků, šustění papíru.\n- Titulek: 'Relax s kyticí pro radost'.\n\n2. **'Mýtus vs. Realita'**\n- Ty na kameru: 'Myslíte si, že do vázy patří cukr? Chyba! Dejte tam raději kapku Sava proti bakteriím.'\n\n3. **'Den v životě květinářky'**\n- Rychlý sestřih: Ranní nákup na trhu -> káva -> vázání -> předání zákazníkovi.\n- Hudba: Něco trendy a veselého.",
      },
    ],
  },
  {
    id: "copywriting-iterace",
    title: "Vylepšování textu (Copywriting)",
    description: "Postupné ladění textu e-mailu k dokonalosti.",
    category: "Kreativita",
    messages: [
      {
        role: "user",
        content: "Napiš e-mail zákazníkům, že máme slevu 20% na všechno.",
      },
      {
        role: "assistant",
        content: "Předmět: Sleva 20%\n\nDobrý den,\n\nmáme pro vás skvělou zprávu. Tento víkend nabízíme slevu 20 % na celý sortiment. Přijďte si nakoupit.\n\nS pozdravem,\nTým Obchodu",
      },
      {
        role: "user",
        content: "To je hrozně nudné. Udělej to vtipnější, jsme prodejce deskových her. A přidej tam nějaké emoji.",
      },
      {
        role: "assistant",
        content: "Předmět: 🎲 Hoďte kostkou a odečtěte 20 %!\n\nAhoj hráči! 👋\n\nVaše strategie na tento víkend je jasná: Vybavit se na dlouhé zimní večery! 🏰\n\nSeslali jsme kouzlo **SLEVA -20 %** na celou naši pokladnici her. Ať už sháníte draky, vláčky nebo explodující koťátka, teď je ten správný tah.\n\n⚔️ Akce platí jen do nedělní půlnoci!\n\nNa viděnou v e-shopu,\nVáš Herní Guru 🧙‍♂️",
      },
    ],
  },
]

export const promptTips = [
  "Představ si, že zadáváš úkol novému zaměstnanci - čím víc kontextu, tím lepší výsledek",
  "Rozděl velký úkol na kroky (Chain of Thought)",
  "Řekni CO chceš, ale i CO NECHCEŠ (Negative Prompting)",
  "Dej příklad výstupu, který se ti líbí (Few-Shot)",
  "Neboj se promptu, který má 200 slov - AI to zvládne",
  "Můžeš pokračovat v konverzaci a upřesňovat",
  "Používej oddělovače (###, ---) pro jasnou strukturu zadání",
  "Urči formát výstupu (tabulka, seznam, JSON, markdown)",
]

export const promptingTechniques = [
  {
    id: "chain-of-thought",
    title: "Chain of Thought",
    description: "Nuťte AI přemýšlet nahlas. Zvyšuje přesnost u logických úloh.",
    example: "Místo 'Kolik je 25*48?' zkus 'Spočítej 25*48. Postupuj krok za krokem.'",
    icon: "Brain",
  },
  {
    id: "few-shot",
    title: "Few-Shot Prompting",
    description: "Dejte modelu příklady toho, co chcete. Nejlepší způsob jak zaručit formát.",
    example:
      "Chci převést text na emoji:\n'Jsem šťastný' -> 😀\n'Je to smutné' -> 😢\n'Mám hlad' -> ?",
    icon: "List",
  },
  {
    id: "role-playing",
    title: "Role-Playing",
    description: "Přiřaďte AI specifickou roli pro lepší kontext a tón.",
    example: "Jsi seniorní Python vývojář s 10 lety praxe. Vysvětli mi dekorátory.",
    icon: "UserCheck",
  },
  {
    id: "zero-shot",
    title: "Zero-Shot",
    description: "Přímý dotaz bez příkladů. Funguje dobře u moderních modelů pro běžné úkoly.",
    example: "Napiš báseň o jaru.",
    icon: "Zap",
  },
]

export const learningPrompts = [
  {
    title: "Vysvětlení jako pětiletému (ELI5)",
    description: "Ideální pro pochopení složitých konceptů.",
    prompt:
      "Vysvětli mi kvantovou fyziku, jako bych byl pětileté dítě. Používej analogie z běžného života.",
  },
  {
    title: "Sokratovská metoda (Mentor)",
    description: "Nech se vést k řešení místo dostání odpovědi.",
    prompt:
      "Chci se naučit o historii Říma. Nevysvětluj mi to rovnou, ale dávej mi otázky, které mě navedou k pochopení souvislostí. Buď můj mentor.",
  },
  {
    title: "Vytvoření studijního plánu",
    description: "Strukturovaný plán na míru.",
    prompt:
      "Chci se naučit programovat v Pythonu za 3 měsíce. Mám 5 hodin týdně. Vytvoř mi detailní studijní plán týden po týdnu.",
  },
  {
    title: "Simulace oponenta",
    description: "Ověř si své argumenty nebo znalosti.",
    prompt:
      "Mám názor, že jaderná energie je nezbytná. Hraj roli ekologického aktivisty, který je proti, a veď se mnou debatu. Hledej díry v mých argumentech.",
  },
]

export const promptFrameworks = [
  {
    name: "R.T.F.",
    fullName: "Role - Task - Format",
    description: "Zlatý standard pro většinu úkolů.",
    structure: [
      { label: "ROLE", text: "Kdo je AI (např. Expert na marketing)" },
      { label: "TASK", text: "Co má udělat (např. Napiš 5 sloganů)" },
      { label: "FORMAT", text: "Jak má výstup vypadat (např. Seznam s odrážkami)" },
    ],
  },
  {
    name: "T.A.G.",
    fullName: "Task - Action - Goal",
    description: "Skvělé pro konkrétní akce.",
    structure: [
      { label: "TASK", text: "Definice úkolu" },
      { label: "ACTION", text: "Co přesně se má stát" },
      { label: "GOAL", text: "Čeho tím chceme dosáhnout" },
    ],
  },
  {
    name: "C.A.R.E.",
    fullName: "Context - Action - Result - Example",
    description: "Pro komplexní generování obsahu.",
    structure: [
      { label: "CONTEXT", text: "Pozadí situace" },
      { label: "ACTION", text: "Co má AI udělat" },
      { label: "RESULT", text: "Jaký je požadovaný výsledek" },
      { label: "EXAMPLE", text: "Ukázka stylu nebo formátu" },
    ],
  },
]
