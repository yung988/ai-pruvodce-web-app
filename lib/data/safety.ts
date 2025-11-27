export const safetyRules = {
    neverShare: [
        { icon: "CreditCard", text: "Čísla platebních karet" },
        { icon: "KeyRound", text: "Hesla a přístupové údaje" },
        { icon: "IdCard", text: "Rodné číslo, číslo OP" },
        { icon: "FileText", text: "Citlivé smlouvy a dokumenty" },
        { icon: "ImageOff", text: "Intimní fotografie" },
        { icon: "Building2", text: "Firemní tajemství" },
    ],
    neverTrust: [
        { icon: "AlertTriangle", text: 'AI může "halucinovat" - vymýšlet si' },
        { icon: "Calculator", text: "Matematické výpočty mohou být chybné" },
        { icon: "Calendar", text: "Data a události mohou být nepřesné" },
        { icon: "Link", text: "Odkazy a zdroje nemusí existovat" },
        { icon: "Scale", text: "Právní a zdravotní rady ověř s odborníkem" },
    ],
    alwaysDo: [
        { icon: "CheckCircle", text: "Kontroluj důležité výstupy" },
        { icon: "Copy", text: "Ukládej si dobré prompty" },
        { icon: "Users", text: "U kritických úkolů použij více AI modelů" },
        { icon: "RefreshCw", text: "Iteruj a vylepšuj své dotazy" },
        { icon: "Shield", text: "Chraň svá osobní data" },
    ],
}
