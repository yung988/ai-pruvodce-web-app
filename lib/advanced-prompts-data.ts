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

export const advancedExamples = [
  {
    id: "produkt",
    title: "Komplexní popis produktu",
    badPrompt: "Napiš popis mýdla",
    goodPrompt: `Jsi zkušený copywriter specializující se na přírodní kosmetiku a ruční výrobu.

PRODUKT:
- Levandulové mýdlo, 100g
- Složení: olivový olej, kokosový olej, bambucké máslo, levandulový esenciální olej, sušené levandulové květy
- Ruční výroba, cold process metoda
- Vyzrávání 6 týdnů

CÍLOVÁ SKUPINA:
- Ženy 30-50 let
- Zajímají se o přírodní produkty
- Nakupují na českých e-shopech a farmářských trzích
- Jsou ochotné zaplatit víc za kvalitu

ÚKOL:
Napiš 3 různé verze popisu produktu:
1. Krátká verze pro Instagram (max 150 znaků)
2. Střední verze pro e-shop (3-4 věty)
3. Dlouhá verze pro blog/detail produktu (2 odstavce)

STYL:
- Přátelský, ne formální
- Zdůrazni ruční práci a přírodní složení
- Používej smyslové popisy (vůně, pocit na kůži)
- Nepoužívej klišé jako "luxusní" nebo "jedinečný"

PŘÍKLAD TÓNU, KTERÝ SE MI LÍBÍ:
"Toto mýdlo vzniká v naší malé dílně, kde každý kus prochází rukama. Žádná továrna, žádný spěch."`,
  },
  {
    id: "smlouva",
    title: "Analýza smlouvy",
    badPrompt: "Přečti tuto smlouvu + příloha",
    goodPrompt: `Jsi právní asistent, který pomáhá malým podnikatelům porozumět smlouvám. Neposkytuješ právní rady, ale pomáháš identifikovat důležité body.

Přečti přiloženou smlouvu a vytvoř přehlednou analýzu:

1. ZÁKLADNÍ INFORMACE
   - Kdo jsou strany smlouvy
   - O čem smlouva je (předmět)
   - Na jak dlouho platí

2. FINANČNÍ PODMÍNKY
   - Kolik a kdy platím
   - Jsou tam nějaké skryté poplatky?
   - Podmínky zdražení

3. DŮLEŽITÉ TERMÍNY A LHŮTY
   - Kdy můžu vypovědět
   - Výpovědní lhůty
   - Automatické prodlužování?

4. RIZIKA A ČERVENÉ VLAJKY
   - Co mi přijde nevýhodné
   - Neobvyklé podmínky
   - Sankce a pokuty

5. OTÁZKY K PROTISTRANĚ
   - Na co se zeptat před podpisem
   - Co si nechat vysvětlit

Formát: Použij odrážky, buď stručný. U každého rizika napiš proč je to problém.

DŮLEŽITÉ: Na konci připomeň, že jsi AI a pro důležité smlouvy doporučuješ konzultaci s právníkem.`,
  },
  {
    id: "marketing",
    title: "Kompletní marketingová kampaň",
    badPrompt: "Vymysli marketing pro pivovar",
    goodPrompt: `Jsi marketingový stratég pro malé české pivovary.

KONTEXT:
- Rodinný minipivovar v jižní Moravě
- Vyrábíme 3 druhy piva: ležák 12°, pšeničné, IPA
- Prodáváme: ve vlastní hospodě, lokální obchody, e-shop
- Cílová skupina: muži 30-55, fanoušci craftových piv, podporují lokální výrobce
- Rozpočet na marketing: 5000 Kč/měsíc
- Aktuálně máme Facebook (500 sledujících), Instagram (200 sledujících)

ÚKOL:
Vytvoř kompletní marketingový plán na 3 měsíce (říjen-prosinec) se zaměřením na vánoční sezónu.

POTŘEBUJI:
1. STRATEGIE (celkový přístup, hlavní sdělení)

2. OBSAHOVÝ KALENDÁŘ
   - 2 příspěvky týdně na Facebook
   - 3 příspěvky týdně na Instagram
   - Pro každý měsíc napiš konkrétní témata a typy obsahu

3. KONKRÉTNÍ TEXTY (připrav mi):
   - 5 příspěvků na Facebook s texty připravenými k publikaci
   - 5 popisků na Instagram včetně hashtagů
   - 1 email pro stávající zákazníky o vánoční nabídce
   - Text na vánoční dárkový balíček

4. AKCE A KAMPANĚ
   - Návrh vánoční akce/soutěže
   - Návrh dárkových balíčků s cenami

5. MĚŘENÍ
   - Jaké metriky sledovat
   - Jak poznám, že je kampaň úspěšná

Formát: Strukturovaný dokument s nadpisy, snadno se v tom orientuje.`,
  },
  {
    id: "dokument",
    title: "Práce s nahraným dokumentem",
    badPrompt: 'Nahraje fakturu a napíše "co to je"',
    goodPrompt: `Nahrávám ti 3 cenové nabídky od různých dodavatelů na tisk etiket pro mé produkty.

KONTEXT:
- Potřebuji etikety na sklenice s paštikama
- Roční spotřeba cca 5000 ks
- Potřebuji voděodolné (produkt jde do lednice)
- Důležitá je kvalita tisku (fotka produktu)

ÚKOL:
1. Z každé nabídky vytáhni:
   - Cena za kus při různých množstvích
   - Minimální objednávka
   - Dodací lhůta
   - Materiál a voděodolnost
   - Co je/není v ceně (grafika, doprava)

2. Udělej srovnávací tabulku všech tří nabídek

3. Doporuč, která nabídka je pro mě nejvýhodnější a proč

4. Napiš mi otázky, které bych měl dodavatelům položit před rozhodnutím`,
  },
  {
    id: "iterativni",
    title: "Iterativní práce (konverzace)",
    isConversation: true,
    steps: [
      {
        step: 1,
        prompt: `Potřebuji napsat pravidla péče o čerstvé tetování pro mé klienty. Bude to vytištěný leták A5, který jim dám po tetování.

Informace k zahrnutí:
- Péče první den (folie, mytí)
- Péče první týden (mastička, sprchování)
- Co nedělat (sluníčko, bazén, škrábání)
- Kdy se ozvat (příznaky infekce)
- Hojení (jak dlouho, co očekávat)

Tón: přátelský ale důvěryhodný, klienti jsou většinou 20-35 let.`,
      },
      {
        step: 2,
        prompt: `Dobrý základ. Teď potřebuji:
1. Zkrať to - musí se vejít na A5
2. Rozděl na sekce s ikonami (navrhni jaké použít)
3. Důležité věci dej tučně
4. Přidej na konec kontakt na mě a poznámku "Nejsi si jistý? Napiš mi!"`,
      },
      {
        step: 3,
        prompt: `Super. Teď mi udělej druhou verzi - stejný obsah, ale pro stories na Instagram. Rozděl to na 5-6 slidů, každý max 2-3 věty.`,
      },
    ],
  },
  {
    id: "roleplay",
    title: "Role-play pro přípravu",
    badPrompt: "Jak se připravit na schůzku",
    goodPrompt: `Potřebuji se připravit na schůzku s potenciálním odběratelem - je to síť bio obchodů, která by mohla odebírat mé sýry.

Představ si, že jsi nákupčí této sítě. Jsi skeptický, máš hodně dodavatelů a málo času.

Polož mi 10 nejtěžších otázek, které bys mi na schůzce položil:
- O ceně a maržích
- O spolehlivosti dodávek
- O certifikacích a hygieně
- O tom, proč zrovna můj produkt

Pak mi pomoz připravit odpovědi na každou z nich.`,
  },
  {
    id: "analyza-podnikani",
    title: "Analýza vlastního podnikání",
    badPrompt: "Jak zlepšit mé podnikání",
    goodPrompt: `Jsi byznys konzultant pro malé výrobce.

Tady je popis mého podnikání:
- Vyrábím domácí marmelády, 8 druhů
- Prodávám na 3 farmářských trzích (sobota)
- Mám Instagram (800 sledujících), web bez e-shopu
- Měsíční tržby cca 15.000 Kč
- Dělám to při zaměstnání, věnuji tomu 15 hodin týdně
- Mám kapacitu vyrábět víc, ale nevím jak prodat

ÚKOL:
1. Zanalyzuj silné a slabé stránky
2. Najdi 3 největší příležitosti k růstu
3. Pro každou příležitost napiš:
   - Co konkrétně udělat
   - Kolik to bude stát (čas/peníze)
   - Jaký očekávat výsledek
   - První krok, který můžu udělat tento týden
4. Co bys nedoporučil dělat a proč`,
  },
  {
    id: "zpetna-vazba",
    title: "Zpracování zpětné vazby",
    badPrompt: "Přečti tyto recenze",
    goodPrompt: `Tady jsou všechny recenze mého produktu z posledních 6 měsíců (zkopírované z Heureka, Google, emaily):

[vložit všechny recenze]

ÚKOL:
1. Kategorizuj zpětnou vazbu:
   - Co zákazníci MILUJÍ (silné stránky)
   - Co je ŠTVE (problémy)
   - Co by CHTĚLI (přání, návrhy)

2. U každé kategorie napiš kolikrát se to opakovalo

3. Identifikuj 3 největší problémy a navrhni řešení

4. Najdi citáty, které můžu použít jako testimonials na web

5. Navrhni, jak odpovědět na negativní recenze (dej mi šablonu)`,
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
      { label: "FORMAT", text: "Jak to má vypadat (např. Seznam s odrážkami)" },
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
