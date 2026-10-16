import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic post (same URL; the old page had
// no calculator of its own, so it is not a tool). Overlaps with
// /service/national-pension-system.html; this post takes the explainer angle:
// how contributions (incl. the 14% government share) build the corpus and how
// the pension is worked out, with simple arithmetic only.
// Sources (checked 16 Oct 2026):
// - Central govt NPS: employee 10% of basic pay + DA, government 14% (since
//   2019); UPS option window for existing employees closed 30 Sep 2025 (after
//   extension from 30 Jun 2025); UPS government share 10% + about 8.5% pool
//   (Business Today 26.09.2025, Outlook Business, Drishti IAS UPS explainer).
// - Exit rules (non-govt 80/20 from Dec 2025; govt sector stays 60/40; ₹8 lakh
//   full withdrawal etc.), Tier I minimums, 80CCD(1B) ₹50,000: reused from
//   web/src/guides/doc/national-pension-system.ts (PIB/PFRDA 19.12.2025, PFRDA
//   and NPS Trust FAQs).
// - Returns and annuity rates are market-linked and not stated; tax treatment
//   of employer contribution under the new Income-tax Act 2025 not re-verified,
//   so described generally.

export const npsPensionCalculatorBenefitsGuide: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "NPS पेंशन का हिसाब" },
  ],
  docHi: "NPS पेंशन का हिसाब",
  title: "NPS पेंशन कैलकुलेटर और सरकारी योगदान के फायदे",
  description: "NPS में पेंशन का हिसाब कैसे बनता है: आपका 10% और सरकार का 14% योगदान, रिटायरमेंट पर एकमुश्त रकम और annuity पेंशन, और कैलकुलेटर में क्या डालें।",
  published: "2026-08-09",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "NPS पेंशन का हिसाब: 14% सरकारी योगदान, जमा रकम और पेंशन कैसे बनती है",
  lead: "NPS में तय पेंशन नहीं मिलती। हर महीने का योगदान बाज़ार से जुड़े फंड में जमा होता है, और रिटायरमेंट पर इस जमा रकम (corpus) का एक हिस्सा एकमुश्त मिलता है और बाकी से annuity खरीदी जाती है, जिससे हर महीने पेंशन आती है। केंद्र सरकार के NPS कर्मचारियों के खाते में कर्मचारी अपने मूल वेतन + DA का 10% और सरकार 14% डालती है। इसलिए पेंशन का अंदाज़ा तीन बातों पर टिका है: कितना जमा हुआ, कितना रिटर्न मिला और annuity की दर क्या है।",
  facts: [
    ["केंद्रीय कर्मचारी", "कर्मचारी 10% + सरकार 14% (मूल वेतन + DA)"],
    ["निकासी (सरकारी क्षेत्र)", "60% तक एकमुश्त, कम से कम 40% annuity"],
    ["निकासी (गैर-सरकारी)", "80% तक एकमुश्त, कम से कम 20% annuity"],
    ["नियामक", "PFRDA"],
  ],
  sections: [
    {
      id: "yogdan",
      title: "किसका कितना योगदान",
      table: {
        head: ["कौन", "कर्मचारी", "नियोक्ता/सरकार"],
        rows: [
          ["केंद्र सरकार कर्मचारी (NPS)", "मूल वेतन + DA का 10%", "14%"],
          ["राज्य सरकार कर्मचारी", "आम तौर पर 10%", "राज्य के नियम से (कई राज्यों में 14%)"],
          ["निजी कंपनी (Corporate NPS)", "कंपनी की नीति से", "कंपनी की नीति से (ज़रूरी नहीं)"],
          ["आम नागरिक (All Citizen)", "अपनी मर्ज़ी से; Tier I में एक बार में कम से कम ₹500, साल में ₹1,000", "कोई नहीं"],
        ],
      },
      callout: { kind: "info", html: "<strong>उदाहरण (सिर्फ हिसाब):</strong> मूल वेतन + DA ₹50,000 हो तो कर्मचारी का 10% = ₹5,000 और सरकार का 14% = ₹7,000, यानी हर महीने ₹12,000 खाते में। इस पर बाज़ार के हिसाब से रिटर्न जुड़ता है।" },
    },
    {
      id: "calculator",
      title: "कैलकुलेटर में क्या डालें",
      intro: "NPS Trust और कई बैंकों/पेंशन फंड की वेबसाइट पर NPS कैलकुलेटर है। सब में लगभग यही चीज़ें डालनी होती हैं:",
      list: [
        "<strong>अभी की उम्र और रिटायरमेंट की उम्र</strong> (आम तौर पर 60)",
        "<strong>हर महीने का कुल योगदान</strong> (आपका + नियोक्ता/सरकार का)",
        "<strong>अनुमानित सालाना रिटर्न</strong>: यह पक्का नहीं होता; कम और ज़्यादा दोनों अनुमान से देखें",
        "<strong>annuity में कितना प्रतिशत</strong> (सरकारी क्षेत्र में कम से कम 40%, गैर-सरकारी में कम से कम 20%)",
        "<strong>annuity की अनुमानित दर</strong>: बीमा कंपनी की उस समय की दर पर निर्भर",
      ],
      callout: { kind: "warn", html: "कैलकुलेटर का नतीजा सिर्फ अंदाज़ा है। असली पेंशन बाज़ार के रिटर्न और रिटायरमेंट के समय की annuity दर से तय होगी। \"पक्की पेंशन\" का वादा करने वाले से सावधान रहें।" },
    },
    {
      id: "ups",
      title: "केंद्रीय कर्मचारी: NPS या UPS?",
      intro: "केंद्र सरकार ने 1 अप्रैल 2025 से एकीकृत पेंशन योजना (UPS) का विकल्प दिया। पहले से NPS में रहे कर्मचारियों के लिए UPS चुनने की आखिरी तारीख (बढ़ाकर) 30 सितंबर 2025 थी, जो निकल चुकी है।",
      list: [
        "<strong>NPS:</strong> सरकार का योगदान 14%; पेंशन बाज़ार और annuity पर निर्भर।",
        "<strong>UPS:</strong> सरकार का योगदान 10% व्यक्तिगत खाते में और लगभग 8.5% एक अलग पूल में; बदले में तय (assured) पेंशन का प्रावधान।",
        "खबरों के अनुसार UPS चुनने वाले बाद में तय शर्तों पर NPS में लौट सकते हैं, पर NPS में लौटने के बाद फिर UPS नहीं ले सकते। अपने विभाग के DDO से अपनी स्थिति पक्की करें।",
      ],
    },
    {
      id: "nikasi",
      title: "रिटायरमेंट पर पैसा कैसे मिलता है",
      table: {
        head: ["स्थिति", "सरकारी क्षेत्र", "गैर-सरकारी (दिसंबर 2025 से)"],
        rows: [
          ["सामान्य निकास (60 साल)", "60% तक एकमुश्त, कम से कम 40% annuity", "80% तक एकमुश्त, कम से कम 20% annuity"],
          ["कम जमा रकम", "राज्य/केंद्र के नियम देखें", "कुल जमा ₹8 लाख तक हो तो पूरी रकम एकमुश्त ले सकते हैं"],
          ["सदस्य की मृत्यु", "नॉमिनी/परिवार को नियम के अनुसार", "नॉमिनी को पूरी रकम एकमुश्त"],
        ],
      },
      html: "पूरे नियम: <a href=\"/service/national-pension-system.html#nikasi\">NPS निकासी के नए नियम</a>।",
    },
    {
      id: "tax",
      title: "टैक्स का फायदा",
      list: [
        "आपके अपने योगदान पर पुरानी टैक्स व्यवस्था में ₹1.5 लाख की सामान्य सीमा के ऊपर <strong>₹50,000 तक</strong> की अतिरिक्त छूट (धारा 80CCD(1B), पुराने अधिनियम की नंबरिंग)।",
        "नियोक्ता/सरकार के योगदान पर भी छूट मिलती है; सीमा टैक्स व्यवस्था और नियोक्ता के प्रकार पर निर्भर है। 2026 से नया आयकर अधिनियम लागू है, इसलिए अपने वेतन विभाग या टैक्स सलाहकार से पुष्टि करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.pfrda.org.in/", title: "PFRDA (पेंशन नियामक)" },
    { href: "https://npstrust.org.in/", title: "NPS Trust", note: "योजना की जानकारी, FAQ, कैलकुलेटर" },
    { href: "https://enps.nsdl.com/", title: "eNPS (Protean CRA)", note: "ऑनलाइन खाता और योगदान" },
  ],
  faq: [
    { q: "NPS में सरकार कितना योगदान देती है?", a: "केंद्र सरकार के NPS कर्मचारियों के लिए सरकार मूल वेतन + DA का 14% देती है और कर्मचारी 10%। राज्य कर्मचारियों के लिए यह राज्य के नियम पर निर्भर है।" },
    { q: "क्या NPS में तय पेंशन मिलती है?", a: "नहीं। NPS में पेंशन जमा रकम, बाज़ार के रिटर्न और annuity की दर पर निर्भर है। तय पेंशन का प्रावधान UPS में है, जिसे चुनने की तारीख केंद्रीय कर्मचारियों के लिए 30 सितंबर 2025 को निकल चुकी है।" },
    { q: "आम आदमी NPS में कितना जमा कर सकता है?", a: "All Citizen मॉडल में Tier I खाते में एक बार में कम से कम ₹500 और साल में कम से कम ₹1,000; ऊपर की कोई सीमा नहीं।" },
    { q: "कैलकुलेटर का अनुमान कितना सही होता है?", a: "यह सिर्फ अंदाज़ा है, क्योंकि रिटर्न और annuity दर पहले से तय नहीं होतीं। अलग-अलग रिटर्न मानकर दो-तीन अनुमान देखें।" },
  ],
  related: [
    { href: "/service/national-pension-system.html", emoji: "🧓", title: "NPS: पूरी गाइड", text: "खाता, निकासी, टैक्स" },
    { href: "/service/nps-tier2-account-activation.html", emoji: "💼", title: "NPS Tier II", text: "Tier II खाता कैसे चालू करें" },
    { href: "/service/atal-pension-yojana.html", emoji: "👴", title: "अटल पेंशन योजना", text: "₹1,000-₹5,000 तय पेंशन" },
    { href: "/blog/8th-pay-commission-fitment-factor-salary-matrix.html", emoji: "💰", title: "8वां वेतन आयोग", text: "फिटमेंट फैक्टर और वेतन" },
  ],
  aside: [
    { href: "https://npstrust.org.in/", label: "🧓 NPS Trust" },
    { href: "/service/national-pension-system.html", label: "📘 NPS गाइड" },
  ],
};
