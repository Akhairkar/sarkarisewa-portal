// Free-tools hub data, shared by the tools page (views/Tools.astro) and the
// homepage "All N tools" link so the two numbers can never drift apart.
import { exists } from "./repo";

const T = (href: string, emoji: string, title: string | [string, string], hi: string, en: string) => ({ href, emoji, title: (Array.isArray(title) ? title : [title, title]) as [string, string], hi, en });

const RAW = [
  { id: "forms", hi: "फॉर्म भरने के टूल्स", en: "Form-filling tools", cards: [
    T("/tools/photo-resizer.html", "🖼️", "Photo Resizer", "फोटो को फॉर्म के KB/size में", "Photo in the form's KB/size"),
    T("/tools/signature-resizer.html", "✍️", "Signature Resizer", "सिग्नेचर सही साइज़ में", "Signature in the right size"),
    T("/tools/document-compressor.html", "🗜️", "Document Compressor", "PDF/फोटो छोटा करें", "Compress PDF/photo"),
    T("/tools/self-declaration-builder.html", "📝", "Self Declaration Builder", "स्व-घोषणा पत्र तैयार करें", "Create a self-declaration"),
    T("/tools/document-checklist.html", "📋", "Document Checklist", "किस काम में कौन सा कागज़", "Which papers for which task"),
    T("/tools/typing-speed-test.html", "⌨️", "Typing Speed Test", "हिंदी/English टाइपिंग टेस्ट", "Hindi/English typing test"),
    T("/poster/", "🖼️", "WhatsApp Status पोस्टर", "रोज़ के सरकारी अपडेट, अपने नाम के साथ", "Daily govt update posters"),
    T("/embed/", "🔗", ["अपनी वेबसाइट पर टूल लगाएं", "Tools for your website"], "ब्लॉग/कोचिंग साइट पर फ्री embed", "Free embeds for blogs and coaching sites"),
  ]},
  { id: "eligibility", hi: "पात्रता और उम्र", en: "Eligibility and age", cards: [
    T("/tools/age-calculator.html", "⏳", "Age Calculator", "किसी भी तारीख पर सही उम्र", "Exact age on any date"),
    T("/tools/eligibility-checker.html", "✅", "Scheme Eligibility Checker", "आप किन योजनाओं के पात्र हैं", "Schemes you may qualify for"),
    T("/tools/govt-card-clarifier.html", "💳", ["कौन सा सरकारी कार्ड?", "Which government card?"], "ABHA, आयुष्मान, e-Shram में फर्क", "ABHA vs Ayushman vs e-Shram"),
    T("/tools/status-troubleshooter.html", "🔍", "Status Troubleshooter", "आवेदन अटका है? कारण और हल", "Application stuck? Causes and fixes"),
    T("/tools/pan-aadhaar-conflict-resolver.html", "🔗", "PAN-Aadhaar Resolver", "नाम/जन्मतिथि mismatch का हल", "Fix name/DOB mismatch"),
    T("/deadline-calendar.html", "📅", "Deadline Calendar", "फॉर्म और टैक्स की आखिरी तारीखें", "Form and tax deadlines"),
  ]},
  { id: "money", hi: "पैसे और टैक्स के कैलकुलेटर", en: "Money and tax calculators", cards: [
    T("/tools/income-tax-calculator.html", "🧮", "Income Tax Calculator", "नई vs पुरानी व्यवस्था", "New vs old regime"),
    T("/tools/hra-calculator.html", "🏠", "HRA Calculator", "HRA टैक्स छूट", "HRA tax exemption"),
    T("/tools/itr-penalty-calculator.html", "⚠️", "ITR Late Penalty", "देर से ITR पर जुर्माना", "Penalty for late ITR"),
    T("/tools/epf-calculator.html", "🏦", "EPF Calculator", "रिटायरमेंट पर PF", "Your PF at retirement"),
    T("/tools/gratuity-calculator.html", "🎁", "Gratuity Calculator", "ग्रेच्युटी कितनी मिलेगी", "How much gratuity you get"),
    T("/tools/savings-comparator.html", "📊", "Savings Scheme Comparator", "PPF, SSY, SCSS, FD की तुलना", "Compare PPF, SSY, SCSS, FD"),
    T("/7th-pay-commission-calculator.html", "💵", "7th Pay Calculator", "सरकारी वेतन", "Government salary"),
    T("/8th-pay-calculator.html", "🚀", "8th Pay Projection", "8वें वेतन आयोग का अनुमान", "8th Pay Commission estimate"),
    T("/nps-pension-calculator.html", "👴", "NPS Pension Calculator", "NPS से पेंशन कितनी", "Your NPS pension"),
    T("/tools/hidden-tax-calculator.html", "🧾", "Hidden Tax Calculator", "आप कितना अप्रत्यक्ष टैक्स देते हैं", "How much indirect tax you pay"),
  ]},
  { id: "health", hi: "स्वास्थ्य और आस-पास", en: "Health and nearby", cards: [
    T("/tools/medicine-price-checker.html", "💊", "Medicine Price Checker", "ब्रांडेड vs जन औषधि दाम", "Branded vs Jan Aushadhi price"),
    T("/tools/csc-locator.html", "📍", "CSC Locator", "नज़दीकी जन सेवा केंद्र", "Nearest Jan Seva Kendra"),
  ]},
];

/** Groups with only the pages that really exist (poster/embed are served outside Astro). */
export const TOOL_GROUPS = RAW.map((g) => ({ ...g, cards: g.cards.filter((c) => c.href === "/poster/" || c.href === "/embed/" || exists(c.href)) }));
export const TOOL_TOTAL = TOOL_GROUPS.reduce((n, g) => n + g.cards.length, 0);
