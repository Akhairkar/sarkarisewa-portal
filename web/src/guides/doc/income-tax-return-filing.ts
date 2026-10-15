import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; incometax.gov.in not reachable from the
// sandbox, search-result extracts of CBDT press releases/notifications used):
// angelone.in, outlookmoney.com, taxguru.in, patronaccounting.com (Finance
// Act 2026 amended s.139(1): AY 2026-27 due date 31 July 2026 for ITR-1/ITR-2
// and other non-business cases, 31 August 2026 for non-audit ITR-3/ITR-4;
// belated return till 31 Dec 2026; revised return till 31 March 2027; belated
// return cannot opt for old regime where business income); studycafe.in,
// teamleaseregtech.com, taxheal.com (CBDT press release 28 Sept 2026: audit
// report due date 30 Sept -> 21 Oct 2026, audit-case ITR 31 Oct -> 21 Nov
// 2026; transfer-pricing cases 30 Nov 2026 unchanged). Finance Act 2025
// (new regime rebate: no tax up to ₹12 lakh, ₹75,000 standard deduction for
// salaried) and s.234F late fee (₹5,000; ₹1,000 if total income ≤ ₹5 lakh),
// 30-day e-verification rule, e-filing helpdesk 1800 103 0025 are from the
// Act/incometax.gov.in as widely published. ITR form eligibility given only
// in broad terms.
export const incomeTaxReturnFiling: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "ITR फाइलिंग" },
  ],
  docHi: "ITR फाइलिंग",
  title: "आयकर रिटर्न (ITR) फाइलिंग 2026",
  description: "आय की घोषणा, कटौतियों का दावा, और कर का भुगतान/रिफंड का दावा करने के लिए आयकर विभाग के साथ आय विवरण की वार्षिक फाइलिंग।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आयकर रिटर्न (ITR) फाइलिंग 2026: आखिरी तारीख, कौन सा फॉर्म, लेट फीस और ई-वेरिफिकेशन",
  lead: "आयकर रिटर्न (ITR) आयकर विभाग के e-Filing पोर्टल incometax.gov.in पर मुफ्त भरा जाता है। वित्त वर्ष 2025-26 (AY 2026-27) के लिए सामान्य (बिना ऑडिट) रिटर्न की आखिरी तारीख ITR-1/ITR-2 के लिए 31 जुलाई 2026 और कारोबार वाले ITR-3/ITR-4 के लिए 31 अगस्त 2026 थी; ऑडिट वाले मामलों की तारीख बढ़ाकर 21 नवंबर 2026 की गई है। जो चूक गए हैं वे लेट फीस के साथ 31 दिसंबर 2026 तक बिलेटेड रिटर्न भर सकते हैं। रिटर्न भरने के बाद 30 दिन में ई-वेरिफाई करना ज़रूरी है।",
  facts: [
    ["पोर्टल", '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a>'],
    ["बिलेटेड रिटर्न (AY 2026-27)", "31 दिसंबर 2026 तक, लेट फीस के साथ"],
    ["लेट फीस (234F)", "₹5,000; कुल आय ₹5 लाख तक हो तो ₹1,000"],
    ["e-Filing हेल्पडेस्क", "1800 103 0025"],
  ],
  notice: "आज (15 अक्टूबर 2026) की स्थिति: ITR-1/2 की 31 जुलाई और ITR-3/4 (बिना ऑडिट) की 31 अगस्त 2026 की तारीख निकल चुकी है। ऑडिट वाले मामलों में ऑडिट रिपोर्ट 21 अक्टूबर और ITR 21 नवंबर 2026 तक भरी जा सकती है (CBDT, 28 सितंबर 2026)।",
  sections: [
    {
      id: "tarikhen",
      title: "AY 2026-27 (FY 2025-26) की तारीखें",
      table: {
        head: ["किसके लिए", "आखिरी तारीख"],
        rows: [
          ["ITR-1, ITR-2 (वेतन, पेंशन, ब्याज, कैपिटल गेन आदि; बिना कारोबार)", "31 जुलाई 2026"],
          ["ITR-3, ITR-4 (कारोबार/पेशा, बिना ऑडिट)", "31 अगस्त 2026"],
          ["ऑडिट वाले मामले (कंपनी, ऑडिट वाली फर्म/व्यक्ति)", "21 नवंबर 2026 (पहले 31 अक्टूबर)"],
          ["ट्रांसफर प्राइसिंग वाले मामले", "30 नवंबर 2026"],
          ["बिलेटेड (देर से) रिटर्न", "31 दिसंबर 2026"],
          ["संशोधित (revised) रिटर्न", "31 मार्च 2027"],
        ],
      },
      callout: { kind: "info", html: "आखिरी तारीख के बाद भी 2 से 4 साल तक <strong>अपडेटेड रिटर्न (ITR-U)</strong> अतिरिक्त टैक्स के साथ भरा जा सकता है, पर उसमें रिफंड नहीं मिलता और कई शर्तें हैं।" },
    },
    {
      id: "kaun",
      title: "रिटर्न किसे भरना चाहिए",
      list: [
        "जिसकी कुल आय (कटौतियों से पहले) <strong>मूल छूट सीमा</strong> से ज़्यादा है।",
        "जिसका TDS कटा है और <strong>रिफंड</strong> चाहिए। रिफंड सिर्फ रिटर्न भरने पर मिलता है।",
        "कुछ बड़े खर्च/जमा वाले लोग भी, जैसे विदेश यात्रा पर ₹2 लाख से ज़्यादा खर्च या बिजली बिल ₹1 लाख से ज़्यादा।",
        "लोन, वीज़ा या सरकारी टेंडर के लिए भी पिछले सालों के ITR मांगे जाते हैं।",
      ],
      callout: { kind: "ok", html: "नई कर व्यवस्था (new regime) में FY 2025-26 से <strong>₹12 लाख तक की आय पर टैक्स शून्य</strong> (धारा 87A छूट से) है; वेतनभोगियों को ₹75,000 की स्टैंडर्ड डिडक्शन भी मिलती है। टैक्स शून्य होने पर भी आय छूट सीमा से ऊपर हो तो रिटर्न भरें।" },
    },
    {
      id: "form",
      title: "कौन सा ITR फॉर्म",
      table: {
        head: ["फॉर्म", "किसके लिए (मोटे तौर पर)"],
        rows: [
          ["<strong>ITR-1 (सहज)</strong>", "निवासी व्यक्ति, कुल आय ₹50 लाख तक: वेतन/पेंशन, एक मकान, ब्याज, सीमित लंबी अवधि का शेयर लाभ"],
          ["<strong>ITR-2</strong>", "कारोबार के बिना, पर कैपिटल गेन, एक से ज़्यादा मकान, विदेशी आय या ₹50 लाख से ज़्यादा आय"],
          ["<strong>ITR-3</strong>", "कारोबार/पेशे की आय (सामान्य हिसाब-किताब से)"],
          ["<strong>ITR-4 (सुगम)</strong>", "अनुमानित आय योजना (44AD/44ADA/44AE) वाले छोटे कारोबारी/पेशेवर"],
          ["ITR-5, 6, 7", "फर्म/LLP, कंपनी, ट्रस्ट आदि"],
        ],
      },
      html: "<p>पोर्टल पर \"Help me decide which ITR Form to file\" विकल्प आपके जवाबों से सही फॉर्म बताता है।</p>",
    },
    {
      id: "steps",
      title: "ऑनलाइन रिटर्न भरने के स्टेप",
      steps: [
        '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a> पर PAN (यूज़र ID) और पासवर्ड से लॉगिन करें। PAN-आधार लिंक होना चाहिए।',
        "पहले <strong>AIS और फॉर्म 26AS</strong> देखें: इनमें आपकी आय, TDS, ब्याज, शेयर बिक्री आदि दर्ज होते हैं।",
        "<strong>e-File → Income Tax Returns → File Income Tax Return</strong> चुनें, AY 2026-27 और ऑनलाइन मोड चुनें।",
        "फॉर्म चुनें। पहले से भरी (pre-filled) जानकारी जांचें, बाकी आय और कटौतियां (पुरानी व्यवस्था में 80C, 80D आदि) भरें।",
        "टैक्स बकाया हो तो e-Pay Tax से भरें; रिफंड हो तो सही, प्री-वैलिडेटेड बैंक खाता चुनें।",
        "सबमिट करें और <strong>30 दिन के अंदर ई-वेरिफाई</strong> करें: आधार OTP, नेट बैंकिंग, बैंक/डीमैट EVC या साइन किया ITR-V CPC बेंगलुरु भेजकर।",
      ],
      callout: { kind: "warn", html: "30 दिन में वेरिफाई न करने पर देर से वेरिफिकेशन की तारीख को ही रिटर्न भरने की तारीख माना जाता है और लेट फीस लग सकती है। बिना वेरिफिकेशन रिटर्न अमान्य रहता है।" },
    },
    {
      id: "baad-me",
      title: "रिटर्न के बाद",
      list: [
        "<strong>रिफंड स्टेटस:</strong> पोर्टल पर लॉगिन करके e-File → Income Tax Returns → View Filed Returns में देखें।",
        "<strong>धारा 143(1) सूचना</strong> ईमेल पर आती है: इसमें आपके और विभाग के हिसाब का मिलान होता है। मांग (demand) हो तो पोर्टल पर जवाब दें।",
        "गलती हो तो 31 मार्च 2027 तक <strong>संशोधित रिटर्न</strong> भरें।",
        "आयकर विभाग के नाम से रिफंड का SMS/लिंक भेजकर ठगी होती है। विभाग कभी OTP, PIN या कार्ड की जानकारी नहीं मांगता।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर e-Filing पोर्टल", note: "रिटर्न, रिफंड स्टेटस, AIS, ई-वेरिफिकेशन" },
    { href: "https://incometaxindia.gov.in/", title: "आयकर विभाग (कानून, नियम, नोटिफिकेशन)" },
    { href: "tel:18001030025", title: "e-Filing हेल्पडेस्क", note: "1800 103 0025" },
  ],
  faq: [
    { q: "AY 2026-27 की ITR की आखिरी तारीख क्या थी?", a: "बिना ऑडिट: ITR-1/ITR-2 के लिए 31 जुलाई 2026 और ITR-3/ITR-4 के लिए 31 अगस्त 2026। ऑडिट वाले मामलों के लिए CBDT ने तारीख 21 नवंबर 2026 कर दी है।" },
    { q: "तारीख निकल गई, अब क्या करें?", a: "31 दिसंबर 2026 तक बिलेटेड रिटर्न भरें। धारा 234F की लेट फीस ₹5,000 (कुल आय ₹5 लाख तक हो तो ₹1,000) और बकाया टैक्स पर ब्याज लगेगा। कुछ मामलों में बिलेटेड रिटर्न में पुरानी कर व्यवस्था नहीं चुनी जा सकती।" },
    { q: "क्या ₹12 लाख तक आय पर टैक्स नहीं लगता?", a: "नई कर व्यवस्था में FY 2025-26 से ₹12 लाख तक की कुल आय पर 87A की छूट से टैक्स शून्य है (वेतनभोगी के लिए स्टैंडर्ड डिडक्शन मिलाकर ₹12.75 लाख)। कुछ खास दर वाली आय (जैसे कैपिटल गेन) पर यह छूट पूरी नहीं मिलती।" },
    { q: "रिटर्न ई-वेरिफाई कैसे करें?", a: "भरने के 30 दिन के अंदर आधार OTP, नेट बैंकिंग, बैंक/डीमैट खाते से बने EVC से, या साइन किया ITR-V डाक से CPC बेंगलुरु भेजकर।" },
    { q: "ITR भरने की फीस कितनी है?", a: "आयकर पोर्टल पर रिटर्न भरना मुफ्त है। CA या टैक्स प्रैक्टिशनर से भरवाएं तो उनकी फीस अलग है।" },
  ],
  related: [
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS देखें", text: "आपकी आय की पूरी जानकारी" },
    { href: "/service/form16-form26as.html", emoji: "📄", title: "फॉर्म 16 / 26AS", text: "TDS का सबूत" },
    { href: "/service/tds-refund-status.html", emoji: "💰", title: "रिफंड स्टेटस", text: "TDS रिफंड कब आएगा" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "PAN-आधार लिंक", text: "रिटर्न से पहले ज़रूरी" },
    { href: "/tools/itr-penalty-calculator.html", emoji: "🧮", title: "ITR लेट फीस कैलकुलेटर", text: "234F जुर्माना जांचें" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "📑 e-Filing पोर्टल खोलें" },
    { href: "/tools/income-tax-calculator.html", label: "🧮 टैक्स कैलकुलेटर" },
  ],
};
