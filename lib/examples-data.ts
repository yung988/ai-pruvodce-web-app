// Examples organized by input type
export const examplesByInputType = {
  text: {
    title: "Vstup: Text",
    description: "Zkopíruj a vlož text",
    icon: "Type",
    subcategories: [
      {
        title: "Zlepšit text",
        prompts: [
          "Oprav gramatické chyby v tomto textu: [text]",
          "Přepiš tento email profesionálněji: [text]",
          "Zkrať tento text na polovinu: [text]",
          "Přepiš to jednodušeji, aby to pochopil i laik: [text]",
          "Přidej do textu více emocí, ať to není tak suché: [text]",
        ],
      },
      {
        title: "Analyzovat text",
        prompts: [
          "Shrň hlavní body této smlouvy: [text smlouvy]",
          "Je v této smlouvě něco podezřelého nebo nevýhodného? [text]",
          "Jaké jsou hlavní podmínky této nabídky? [text]",
          "Najdi v tomto textu všechny termíny a data: [text]",
          "Co vlastně tento email po mně chce? [text emailu]",
        ],
      },
      {
        title: "Přeložit",
        prompts: [
          "Přelož do angličtiny: [text]",
          "Přelož tento německý email do češtiny: [text]",
          "Přelož a vysvětli, co po mně chtějí: [text v cizím jazyce]",
        ],
      },
      {
        title: "Přepsat do jiného formátu",
        prompts: [
          "Udělej z těchto poznámek profesionální email: [poznámky]",
          "Převeď tento text do odrážek: [text]",
          "Udělej z toho tabulku: [text s daty]",
          "Napiš z těchto bodů plynulý text: [odrážky]",
        ],
      },
    ],
  },
  file: {
    title: "Vstup: Soubor",
    description: "Nahrát přílohu",
    icon: "FileUp",
    subcategories: [
      {
        title: "PDF dokumenty",
        prompts: [
          "Shrň tento dokument na 5 hlavních bodů",
          "Najdi v této smlouvě všechny poplatky a sankce",
          "Přelož tento dokument do češtiny",
          "O čem je tento dokument? Vysvětli mi to jednoduše",
        ],
      },
      {
        title: "Word dokumenty",
        prompts: [
          "Zkontroluj pravopis a gramatiku",
          "Vylepši tento text, zachovej význam",
          "Zkrať tento dokument na jednu stránku",
        ],
      },
      {
        title: "Excel/tabulky",
        prompts: [
          "Co mi říkají tato data?",
          "Shrň hlavní čísla z této tabulky",
          "Najdi v těchto datech nějaký vzorec nebo trend",
        ],
      },
      {
        title: "Faktury a účetní dokumenty",
        prompts: [
          "Jaká je celková částka a datum splatnosti?",
          "Vytáhni z této faktury: dodavatel, částka, datum, variabilní symbol",
          "Porovnej tyto dvě nabídky, která je výhodnější?",
        ],
      },
    ],
  },
  image: {
    title: "Vstup: Fotka",
    description: "Nahrát obrázek",
    icon: "Camera",
    subcategories: [
      {
        title: "Účtenky a doklady",
        prompts: ["Kolik jsem zaplatil a za co?", "Přepiš tuto účtenku do tabulky", "Přelož tuto účtenku/menu"],
      },
      {
        title: "Produkty",
        prompts: [
          "Co je tohle za produkt? Najdi mi podobné",
          "Přečti a přelož etiketu",
          "Jaké složení má tento produkt?",
        ],
      },
      {
        title: "Vizitky a kontakty",
        prompts: ["Přepiš údaje z této vizitky", "Přelož tuto vizitku"],
      },
      {
        title: "Rostliny, zvířata, věci",
        prompts: [
          "Co je to za rostlinu?",
          "Je tahle houba jedlá? (POZOR - vždy ověřit u experta!)",
          "Co je to za hmyz?",
          "Jaký je to font/písmo?",
        ],
      },
      {
        title: "Screenshoty",
        prompts: ["Co znamená tato chybová hláška?", "Jak se dostanu k nastavení?", "Přelož co je na této obrazovce"],
      },
    ],
  },
}

// Examples organized by business type
export const examplesByBusiness = [
  {
    id: "kosmetika",
    title: "Výroba kosmetiky / mýdel",
    icon: "Droplet",
    color: "from-pink-500 to-rose-500",
    prompts: [
      "Napiš popis levandulového mýdla pro e-shop. 100g, ruční výroba, přírodní složení. Pro ženy 30-50 let.",
      "Vymysli 10 názvů pro novou kolekci mýdel inspirovanou českou přírodou",
      "Napiš příspěvek na Instagram o tom, proč je ruční mýdlo lepší než kupované",
      "Jaké ingredience musím uvést na etiketě podle EU předpisů?",
      "Přelož tento popis mýdla do angličtiny pro zahraniční zákazníky",
      "Napiš odpověď na tuto recenzi zákazníka: [text recenze]",
      "Vymysli vánoční akci pro můj e-shop s mýdly",
    ],
  },
  {
    id: "pivovar",
    title: "Pivovar",
    icon: "Beer",
    color: "from-amber-500 to-orange-500",
    prompts: [
      "Napiš popis nového ležáku pro web. 12°, chmele Žatec, karamelové tóny.",
      "Vymysli název pro limitovanou letní edici piva",
      "Napiš email odběratelům o zdražení. Zdvořile, vysvětli proč (energie, suroviny).",
      "Porovnej požadavky na hygienu pro malý pivovar vs hospodský pivovar",
      "Napiš příspěvek na Facebook o víkendové prohlídce pivovaru",
      "Jaké dotace existují pro malé pivovary v ČR?",
      "Napiš text na cedulku ke kohoutu: [název piva, parametry]",
    ],
  },
  {
    id: "tetovani",
    title: "Tetování",
    icon: "Pen",
    color: "from-slate-500 to-zinc-600",
    prompts: [
      "Napiš odpověď klientovi, který chce posunout termín už potřetí",
      "Jak zdvořile odmítnout motiv, který nechci dělat?",
      "Napiš pravidla péče o čerstvé tetování pro klienty",
      "Napiš bio pro Instagram profil tetovacího studia",
      "Vymysli 5 nápadů na stories, které ukážou zákulisí studia",
      "Napiš ceník služeb - malé, střední, velké tetování, konzultace",
      "Jak reagovat na negativní recenzi od klienta?",
    ],
  },
  {
    id: "syry",
    title: "Výroba sýrů / paštik",
    icon: "Sandwich",
    color: "from-yellow-500 to-amber-500",
    prompts: [
      "Napiš popis farmářského sýra pro farmářské trhy",
      "Jaká je trvanlivost a podmínky skladování pro domácí paštiku?",
      "Napiš text na etiketu - ingredience, alergeny, výrobce, hmotnost",
      "Vymysli vánoční dárkový balíček - co do něj dát a jak ho popsat",
      "Napiš email pro restaurace - nabídka pravidelného odběru sýrů",
      "Jaké certifikáty potřebuji pro prodej domácích sýrů?",
      "Napiš příspěvek o tom, jak se vyrábí můj sýr - storytelling",
    ],
  },
]

// General business examples
export const generalBusinessExamples = [
  {
    title: "Emaily",
    icon: "Mail",
    prompts: [
      "Napiš email zákazníkovi - jeho objednávka je na cestě",
      "Napiš email dodavateli - reklamace poškozeného zboží",
      "Napiš email s omluvou za zpoždění dodávky",
      "Odpověz na tento dotaz zákazníka: [text]",
      "Napiš follow-up email pro zákazníka, který nakoupil před měsícem",
      "Napiš zdvořilé odmítnutí spolupráce",
      "Napiš email s prosbou o recenzi po nákupu",
    ],
  },
  {
    title: "Sociální sítě",
    icon: "Share2",
    prompts: [
      "Napiš 5 příspěvků na Instagram pro tento týden pro [typ podnikání]",
      "Vymysli popisky k těmto fotkám produktů: [popsat fotky]",
      "Jaké hashtagy použít pro [typ podnikání]?",
      "Napiš BIO pro Instagram: [popis podnikání]",
      "Vymysli soutěž pro Facebook, která zvýší engagement",
      "Napiš reakci na tento komentář: [text komentáře]",
    ],
  },
  {
    title: "Prodej a marketing",
    icon: "TrendingUp",
    prompts: [
      "Napiš poutavý popis produktu pro e-shop: [základní info]",
      "Vymysli 5 sloganů pro můj obchod",
      "Jaké argumenty použít, proč je můj produkt lepší než supermarketový?",
      "Napiš text pro leták A5 o mém podnikání",
      "Vymysli věrnostní program pro stálé zákazníky",
      "Napiš text pro Google reklamu (max 90 znaků)",
    ],
  },
  {
    title: "Administrativa",
    icon: "FileText",
    prompts: [
      "Shrň co je v této smlouvě a na co si dát pozor: [vložit smlouvu]",
      "Napiš jednoduchý reklamační řád pro e-shop",
      "Napiš obchodní podmínky pro malý e-shop (POZOR: nechat zkontrolovat právníkem!)",
      "Vysvětli mi co znamená tato část smlouvy: [text]",
      "Jak mám odpovědět na tuto úřední výzvu? [text]",
    ],
  },
  {
    title: "Plánování",
    icon: "Calendar",
    prompts: [
      "Udělej mi checklist co vše potřebuji před otevřením e-shopu",
      "Naplánuj harmonogram přípravy na vánoční sezónu",
      "Jaké kroky potřebuji k založení živnosti na [obor]?",
      "Udělej mi týdenní plán příspěvků na sociální sítě",
      "Vymysli roční marketingový plán pro malé podnikání",
    ],
  },
]

// AI limitations
export const aiLimitations = {
  neverDo: [
    { text: "Jakou mám diagnózu?", note: "na tohle doktor!" },
    { text: "Je tato smlouva právně v pořádku?", note: "na tohle právník!" },
    { text: "Udělej mi daňové přiznání", note: "na tohle účetní!" },
    { text: "Jaká je dnes cena zlata?", note: "AI neví aktuální ceny - použij Google nebo Perplexity" },
    { text: "Kdo vyhrál včerejší zápas?", note: "použij Perplexity nebo Google" },
  ],
  warnings: ["Vždy ověř důležité informace", "AI si může vymýšlet zdroje a fakta", "AI může dávat zastaralé informace"],
  howToVerify: ["Použij Perplexity (ukazuje zdroje)", "Zadej do Google", "Zeptej se odborníka na důležité věci"],
}
