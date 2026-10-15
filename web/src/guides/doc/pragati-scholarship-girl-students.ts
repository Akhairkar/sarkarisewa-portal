import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): scholarships.gov.in "All Scholarships" list
// for 2026-27 (AICTE - Pragati Scholarship Scheme For Girl Students, Technical
// Degree and Technical Diploma: open 01-06-2026, student application till
// 31-10-2026, institute verification till 15-11-2026, DNO/SNO/MNO till
// 30-11-2026); scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2010_G.pdf
// (AICTE Pragati Degree guidelines: 1st-year or lateral-entry 2nd-year girls in
// AICTE-approved institutions, max two girls per family, family income not
// more than ₹8 lakh, 5,000 degree scholarships + all eligible girls in 8 NE
// states and 5 UTs, ₹50,000 per year lump sum, max 4 years / 3 years for
// lateral entry, merit on 10+2 marks, gap max 2 years, renewal on promotion,
// DBT); AICTE_2010_F.pdf (Pragati FAQ: 5,000 diploma scholarships too, diploma
// max 3 years / 2 for lateral entry, no other Central/State/AICTE scholarship,
// Aadhaar-seeded own savings account, helpline pragati@aicte-india.org,
// 011-29581118, documents list, rejection reasons). Search extract of AICTE
// notice dated 19.06.2026 (last date 31.10.2026) matched NSP.
export const pragatiScholarshipGirlStudents: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "AICTE प्रगति छात्रवृत्ति" },
  ],
  docHi: "AICTE प्रगति छात्रवृत्ति",
  title: "एआईसीटीई प्रगति छात्रा छात्रवृत्ति (AICTE Pragati Scholarship)",
  description: "डिप्लोमा या बीटेक डिग्री करने वाली प्रतिभावान छात्राओं को प्रति वर्ष ₹50,000 की छात्रवृत्ति। पात्रता, ₹8 लाख आय सीमा, NSP पर आवेदन, कागज़ और 2026-27 की आखिरी तारीख।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "AICTE प्रगति छात्रवृत्ति: तकनीकी डिग्री/डिप्लोमा वाली छात्राओं को ₹50,000 सालाना",
  lead: "AICTE की प्रगति छात्रवृत्ति योजना उन छात्राओं के लिए है जिन्होंने AICTE से मान्यता प्राप्त संस्थान में तकनीकी डिग्री या डिप्लोमा के पहले साल (या लेटरल एंट्री से दूसरे साल) में दाखिला लिया है। परिवार की सालाना आय ₹8 लाख से ज़्यादा न हो और एक परिवार की ज़्यादा से ज़्यादा दो बेटियां इसका लाभ ले सकती हैं। चुनी गई छात्रा को हर साल ₹50,000 सीधे बैंक खाते में मिलते हैं। 2026-27 के लिए NSP पर आवेदन की आखिरी तारीख 31 अक्टूबर 2026 है।",
  facts: [
    ["राशि", "₹50,000 प्रति वर्ष"],
    ["आय सीमा", "₹8 लाख सालाना तक"],
    ["सीटें", "डिग्री 5,000 + डिप्लोमा 5,000 (पूर्वोत्तर व कुछ UT में सभी पात्र)"],
    ["2026-27 आखिरी तारीख", "31 अक्टूबर 2026 (NSP)"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकती है",
      list: [
        "सिर्फ <strong>छात्राएं</strong>; एक परिवार से <strong>अधिकतम दो बेटियां</strong>।",
        "<strong>AICTE से मान्यता प्राप्त</strong> संस्थान में तकनीकी <strong>डिग्री</strong> (जैसे B.Tech/B.E.) या <strong>डिप्लोमा</strong> के पहले साल में दाखिला, या लेटरल एंट्री से दूसरे साल में दाखिला।",
        "परिवार की सभी स्रोतों से आय <strong>₹8 लाख प्रति वर्ष</strong> से ज़्यादा नहीं। राज्य/UT सरकार का चालू वर्ष का आय प्रमाण पत्र चाहिए।",
        "योग्यता परीक्षा पास करने और दाखिले के बीच <strong>2 साल से ज़्यादा का अंतर</strong> न हो।",
        "केंद्र, राज्य या AICTE की <strong>कोई दूसरी छात्रवृत्ति</strong>, वेतन या स्टाइपेंड न ले रही हों।",
      ],
      callout: { kind: "warn", html: "तीसरे साल की छात्रा, पोस्ट-ग्रेजुएट कोर्स, ड्यूल डिग्री या गैर-तकनीकी कोर्स वाली छात्राएं पात्र नहीं हैं।" },
    },
    {
      id: "rashi",
      title: "कितना पैसा और कितने साल",
      table: {
        head: ["कोर्स", "राशि", "अधिकतम अवधि"],
        rows: [
          ["डिग्री (पहले साल में दाखिला)", "₹50,000/वर्ष", "4 साल"],
          ["डिग्री (लेटरल एंट्री, दूसरा साल)", "₹50,000/वर्ष", "3 साल"],
          ["डिप्लोमा (पहले साल में दाखिला)", "₹50,000/वर्ष", "3 साल"],
          ["डिप्लोमा (लेटरल एंट्री)", "₹50,000/वर्ष", "2 साल"],
        ],
      },
      intro: "यह एकमुश्त राशि कॉलेज फीस, कंप्यूटर, किताबें, उपकरण और सॉफ्टवेयर जैसे खर्चों के लिए है। हॉस्टल या मेडिकल के लिए अलग से कुछ नहीं मिलता, और खर्च का बिल देने की ज़रूरत नहीं।",
      callout: { kind: "info", html: "दिशानिर्देश के अनुसार डिग्री में 5,000 और डिप्लोमा में 5,000 छात्रवृत्तियां राज्यवार बंटी हैं। अरुणाचल, असम, मणिपुर, मेघालय, मिज़ोरम, नागालैंड, सिक्किम, त्रिपुरा और अंडमान-निकोबार, दादरा नगर हवेली व दमन दीव, जम्मू-कश्मीर, लद्दाख, लक्षद्वीप की <strong>सभी पात्र</strong> छात्राओं को छात्रवृत्ति मिलती है।" },
    },
    {
      id: "chayan",
      title: "चयन कैसे होता है",
      list: [
        "राज्य/UT वार मेरिट सूची बनती है, जो <strong>10+2 (या लेटरल एंट्री में डिप्लोमा/ITI) के अंकों</strong> पर आधारित है।",
        "बराबर अंक हों तो 10वीं के अंक, फिर उम्र (बड़ी उम्र आगे) देखी जाती है।",
        "आरक्षण भारत सरकार के नियमों के अनुसार।",
        "चयन सूची AICTE की वेबसाइट पर आती है। मेरिट सूची पर आपत्ति एक महीने के अंदर करनी होती है।",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> (NSP) पर आधार e-KYC से One Time Registration (OTR) करें।',
        "लॉगिन करके \"AICTE - Pragati Scholarship Scheme For Girl Students\" (Technical Degree या Technical Diploma) चुनें।",
        "जानकारी भरें और नीचे दिए कागज़ अपलोड करके फॉर्म सबमिट करें।",
        "अपने कॉलेज से आवेदन सत्यापित करवाएं; इसके बाद राज्य का तकनीकी शिक्षा निदेशालय (DTE) जांच करता है।",
      ],
      callout: { kind: "info", html: "2026-27: छात्रा आवेदन 31 अक्टूबर 2026 तक, संस्थान सत्यापन 15 नवंबर 2026 तक, ज़िला/राज्य स्तर सत्यापन 30 नवंबर 2026 तक (NSP पर दी तारीखें)।" },
    },
    {
      id: "kagaz",
      title: "अपलोड होने वाले कागज़",
      list: [
        "10वीं का प्रमाण पत्र और मार्कशीट",
        "12वीं का प्रमाण पत्र और मार्कशीट (डिग्री के लिए); लेटरल एंट्री में डिप्लोमा या ITI का प्रमाण पत्र और मार्कशीट",
        "जाति प्रमाण पत्र (लागू हो तो)",
        "संस्थान का स्टडी/बोनाफाइड प्रमाण पत्र (Appendix-I)",
        "तहसीलदार/मजिस्ट्रेट/राजस्व अधिकारी/BDO जैसे सक्षम अधिकारी का चालू वर्ष का पारिवारिक आय प्रमाण पत्र (Appendix-II)",
        "अभिभावक की घोषणा (Appendix-III); रिन्यूअल में प्रमोशन प्रमाण पत्र (Appendix-IV)",
        "आधार, और छात्रा के अपने नाम का आधार से जुड़ा सामान्य बचत खाता (जॉइंट या माइनर खाता नहीं चलेगा)",
      ],
    },
    {
      id: "galtiyan",
      title: "आवेदन रिजेक्ट होने के आम कारण",
      list: [
        "संस्थान या कोर्स उस साल AICTE से मान्यता प्राप्त नहीं।",
        "आय प्रमाण पत्र पुराना, किसी और के नाम का, या बिना मोहर/हस्ताक्षर का।",
        "10वीं/12वीं के कागज़ धुंधले या गलत कागज़ अपलोड।",
        "प्रमोशन प्रमाण पत्र अधूरा या बिना प्रिंसिपल के हस्ताक्षर/मोहर का।",
        "पहले से किसी दूसरी छात्रवृत्ति का लाभ।",
      ],
      callout: { kind: "warn", html: "अगर बाद में किसी और स्रोत से छात्रवृत्ति मिली तो प्रगति बंद होगी और पूरी राशि AICTE को लौटानी पड़ सकती है। किसी साल फेल होने या पढ़ाई छोड़ने पर आगे छात्रवृत्ति नहीं मिलेगी।" },
    },
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "हेल्पडेस्क helpdesk@nsp.gov.in" },
    { href: "https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2010_G.pdf", title: "प्रगति (डिग्री) दिशानिर्देश (PDF)" },
    { href: "https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2010_F.pdf", title: "प्रगति छात्रवृत्ति FAQ (PDF)" },
    { href: "https://www.aicte-india.org/", title: "AICTE", note: "pragati@aicte-india.org, 011-29581118" },
  ],
  faq: [
    { q: "प्रगति छात्रवृत्ति में कितना पैसा मिलता है?", a: "₹50,000 प्रति वर्ष, डिग्री में अधिकतम 4 साल और डिप्लोमा में अधिकतम 3 साल (लेटरल एंट्री में एक साल कम)।" },
    { q: "आय सीमा कितनी है?", a: "परिवार की सभी स्रोतों से कुल सालाना आय ₹8 लाख से ज़्यादा नहीं होनी चाहिए। चालू वित्त वर्ष का सक्षम अधिकारी का आय प्रमाण पत्र लगता है।" },
    { q: "मैं दूसरे या तीसरे साल में हूं, क्या आवेदन कर सकती हूं?", a: "नया आवेदन सिर्फ पहले साल या लेटरल एंट्री से दूसरे साल में दाखिले वाली छात्राएं कर सकती हैं। तीसरे साल की छात्राएं नया आवेदन नहीं कर सकतीं; पहले से चुनी गई छात्राएं रिन्यूअल करती हैं।" },
    { q: "क्या प्रगति के साथ दूसरी छात्रवृत्ति ले सकते हैं?", a: "नहीं। केंद्र, राज्य या AICTE की कोई दूसरी छात्रवृत्ति (जैसे PMSSS) ले रही हैं तो प्रगति के लिए पात्र नहीं।" },
    { q: "2026-27 में आवेदन की आखिरी तारीख क्या है?", a: "NSP के अनुसार छात्रा आवेदन 31 अक्टूबर 2026 तक, और संस्थान सत्यापन 15 नवंबर 2026 तक।" },
    { q: "शिकायत या सवाल कहां करें?", a: "AICTE: pragati@aicte-india.org, 011-29581118। पोर्टल की तकनीकी दिक्कत के लिए NSP हेल्पडेस्क: helpdesk@nsp.gov.in, 0120-6619540।" },
  ],
  related: [
    { href: "/service/saksham-scholarship-specially-abled.html", emoji: "♿", title: "AICTE सक्षम छात्रवृत्ति", text: "दिव्यांग छात्रों के लिए" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर OTR और आवेदन" },
    { href: "/service/pm-usp-college-scholarship.html", emoji: "📘", title: "PM-USP कॉलेज छात्रवृत्ति", text: "12वीं के मेधावी छात्रों के लिए" },
    { href: "/service/post-matric-scholarship-obc-ebc.html", emoji: "📚", title: "पोस्ट-मैट्रिक छात्रवृत्ति OBC/EBC", text: "पिछड़े वर्ग के छात्रों के लिए" },
    { href: "/service/pm-vidyalaxmi-scheme.html", emoji: "🏦", title: "पीएम विद्यालक्ष्मी", text: "उच्च शिक्षा के लिए लोन" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP पर आवेदन" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
