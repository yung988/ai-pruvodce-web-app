# Analýza projektu: AI Průvodce (Web App)

Tato analýza hodnotí současný stav projektu "AI Průvodce" z hlediska architektury, uživatelské zkušenosti (UX), obsahu a kvality kódu.

## 1. Celkové zhodnocení
Projekt je **velmi dobře navržený** pro svou cílovou skupinu (rodina, začátečníci, běžní uživatelé).
- **Jasný cíl:** Edukace o AI nástrojích zdarma a bezpečně.
- **Cílová skupina:** Laici, kteří potřebují praktické příklady (ne techničtí nadšenci).
- **Stav:** Aplikace je plně funkční, má moderní design a kvalitní obsah.

**Verdikt:** Ano, takto to dává velký smysl. Je to přehledné, rychlé a zaměřené na užitek.

---

## 2. Architektura a Technologie
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS.
  - *Hodnocení:* Špičkový moderní stack. Zaručuje rychlost, SEO a dobrou udržitelnost.
- **Struktura projektu:**
  - `app/`: Logické rozdělení stránek. Použití dynamických rout (`kategorie/[id]`) je chytré řešení pro škálování obsahu bez nutnosti vytvářet nové soubory pro každou kategorii.
  - `components/`: Modularita je dobrá. Komponenty jako `ToolCard` nebo `UseCaseWizard` jsou dobře izolované.
  - `lib/data.ts`: Centrální úložiště dat. Pro tuto velikost projektu je to OK, ale soubor začíná být velký (přes 700 řádků).

## 3. Uživatelská zkušenost (UX/UI)
- **Design:** Čistý, moderní, využívá `shadcn/ui` komponenty. Dark mode je velké plus.
- **Navigace:**
  - **Wizard (Průvodce):** Skvělý prvek na úvodní stránce. Místo hledání v menu se uživatel "vykliká" k řešení.
  - **Kategorie:** Logické členění (Psaní, Obrázky, Výzkum...).
- **Obsah:**
  - **Strategie "ZDARMA":** Velmi silný prodejní argument (USP) webu. Uživatelé se bojí placení, tento web jim ukazuje cestu zdarma.
  - **Konkrétnost:** Příklady pro "Pivovar", "Výrobu mýdel" atd. jsou mnohem lepší než obecné "Marketingové texty". To dává webu osobní charakter.

## 4. Analýza obsahu (Content Strategy)
- **Nástroje:** Výběr je aktuální (DeepSeek, Claude 3.5/4.5, Gemini 1.5/2.0). Popisy jsou srozumitelné.
- **Příklady (Prompty):**
  - Rozdělení na "Vstup" (Text/Soubor/Obrázek) a "Byznys" je výborné. Pokrývá to různé mentální modely uživatelů.
- **Bezpečnost:** Kritická sekce pro tuto cílovou skupinu. Dobře zpracovaná (co nesdílet, čemu nevěřit).
- **Pokročilé prompty:** Dobrý "next step" pro ty, co už základy zvládli.

## 5. Návrhy na vylepšení (Co by se dalo zlepšit)

### A. Kód a Struktura
1.  **Refactoring `lib/data.ts`:** Soubor je příliš velký. Doporučuji rozdělit na:
    - `lib/tools-data.ts` (nástroje)
    - `lib/categories-data.ts` (kategorie a wizard)
    - `lib/safety-data.ts` (bezpečnost)
2.  **Typová bezpečnost:** Ujistit se, že všechna data mají striktní TypeScript rozhraní (vypadá to, že většinou ano).

### B. Funkcionalita
1.  **Vyhledávání:** Jak bude obsah růst, bude chybět globální vyhledávání (např. "jak napsat mail").
2.  **Filtrování nástrojů:** Na stránce Nástroje by se hodil filtr (např. "Jen nástroje s obrázky", "Jen české", "Jen zdarma").
3.  **Interaktivní kopírování:** Tlačítka "Kopírovat prompt" už tam jsou, což je super. Možná přidat "Otevřít v ChatGPT" (pokud to jde přes link).

### C. Obsah
1.  **Slovníček pojmů:** Pro úplné laiky (co je to "token", "kontextové okno", "halucinace").
2.  **Blog / Novinky:** Svět AI se mění týdně. Statická data mohou zastarat. Sekce "Novinky" by pomohla udržet web živý.

## Závěr
Projekt je ve vynikajícím stavu. Je to ukázkový příklad moderní, jednostránkové (SPA/MPA) aplikace zaměřené na obsah. Struktura "dává smysl" a je připravena na další rozšiřování.
