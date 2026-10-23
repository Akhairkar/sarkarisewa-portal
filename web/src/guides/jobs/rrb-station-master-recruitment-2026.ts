import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; rrbapply.gov.in and RRB regional sites could
// not be opened from the sandbox, so coverage of the official short notice
// was used and cross-checked): testbook.com (rrb-station-master), oliveboard.in,
// careerpower.in, pw.live, verandarace.com, karmasandhan.com, freejobalert.com
// (article 3074679), prabhatkhabar.com, 4pm.co.in, kollegeapply.com.
// Agreed facts: short (indicative) notice CEN 08/2026 for about 1,250 Station
// Master posts (tentative, all RRBs combined); online application tentatively
// 27 Oct 2026 to 25 Nov 2026 (11:59 PM) on rrbapply.gov.in; pay Level 6 (7th
// CPC), initial basic ₹35,400. Railway Board guidelines of 7 Oct 2026 moved
// Station Master out of NTPC into a separate CEN. Detailed CEN expected
// 26/27 Oct 2026. NOT confirmed (sources differ / short notice silent):
// RRB-wise vacancies, exact age limit (20-30 vs 20-33, as on 01.01.2027),
// fee (₹500/₹250 claimed by some), exact selection stages (CBT; some add
// CBAT). Graduation is the qualification for Station Master in previous
// cycles and most sources; confirm in detailed CEN. One site's 26 Nov / 6 Nov
// last date treated as outlier.
export const rrbStationMasterRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "RRB स्टेशन मास्टर 2026" },
  ],
  docHi: "RRB स्टेशन मास्टर 2026",
  title: "RRB स्टेशन मास्टर भर्ती 2026 — 1250 पद, आवेदन 27 अक्टूबर से",
  description: "RRB स्टेशन मास्टर भर्ती 2026 (CEN 08/2026): लगभग 1250 पद, लेवल 6 वेतन। ऑनलाइन आवेदन संभावित 27 अक्टूबर से 25 नवंबर 2026 तक rrbapply.gov.in पर।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "RRB स्टेशन मास्टर भर्ती 2026: 1250 पदों का शॉर्ट नोटिस जारी, आवेदन 27 अक्टूबर से",
  lead: "<strong>स्थिति: शॉर्ट नोटिस जारी, आवेदन 27 अक्टूबर 2026 से शुरू होंगे (संभावित)।</strong> रेलवे भर्ती बोर्ड (RRB) ने <strong>स्टेशन मास्टर</strong> के लगभग <strong>1,250 पदों</strong> के लिए शॉर्ट नोटिस (CEN 08/2026) जारी किया है। इस बार स्टेशन मास्टर की भर्ती NTPC से अलग निकाली गई है। ऑनलाइन आवेदन <strong>27 अक्टूबर से 25 नवंबर 2026</strong> तक rrbapply.gov.in पर होने की संभावना है। पद लेवल 6 के हैं, शुरुआती मूल वेतन ₹35,400।",
  facts: [
    ["कुल पद", "लगभग 1,250 (संभावित, सभी RRB मिलाकर)"],
    ["आवेदन", "27 अक्टूबर – 25 नवंबर 2026 (संभावित)"],
    ["वेतन", "लेवल 6, मूल वेतन ₹35,400 + भत्ते"],
    ["आवेदन", "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a>"],
  ],
  notice: "23 अक्टूबर 2026 तक केवल शॉर्ट नोटिस (Indicative Notice) आया है। पदों की संख्या और तारीखें अभी अस्थायी हैं; ज़ोन-वार पद, उम्र सीमा, फीस और परीक्षा का तरीका विस्तृत CEN 08/2026 में आएंगे। यह जानकारी शॉर्ट नोटिस पर आधारित कई रिपोर्टों से जांची गई है। यह साइट निजी है, रेलवे या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["शॉर्ट नोटिस (CEN 08/2026)", "जारी (अक्टूबर 2026)"],
          ["विस्तृत नोटिफिकेशन", "आवेदन शुरू होने के साथ (संभावित 26-27 अक्टूबर 2026)"],
          ["ऑनलाइन आवेदन शुरू", "27 अक्टूबर 2026 (संभावित)"],
          ["आवेदन की आखिरी तारीख", "25 नवंबर 2026, रात 11:59 बजे (संभावित)"],
          ["फीस की आखिरी तारीख, फॉर्म सुधार", "नोटिफिकेशन में देखें"],
          ["परीक्षा (CBT)", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "वेतन"],
        rows: [
          ["स्टेशन मास्टर", "लगभग 1,250", "लेवल 6 (7वां वेतन आयोग), मूल वेतन ₹35,400 + DA, HRA आदि"],
        ],
      },
      callout: { kind: "info", html: "किस RRB (ज़ोन) में कितने पद हैं, यह विस्तृत नोटिफिकेशन में आएगा। पिछली भर्ती के ज़ोन-वार आंकड़ों को इस बार का मानकर न चलें। आवेदन केवल एक RRB के लिए होता है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> किसी मान्य विश्वविद्यालय से ग्रेजुएशन (पिछली स्टेशन मास्टर भर्तियों में यही योग्यता थी; विस्तृत नोटिफिकेशन में पुष्टि करें)।",
        "<strong>उम्र:</strong> रिपोर्टों में 1 जनवरी 2027 को उम्र गिनने की बात है, पर अधिकतम उम्र को लेकर अंतर है। सटीक उम्र सीमा नोटिफिकेशन में देखें।",
        "<strong>उम्र में छूट:</strong> SC/ST, OBC (नॉन-क्रीमी लेयर), दिव्यांग और पूर्व सैनिकों को रेलवे नियमों के अनुसार; नोटिफिकेशन में देखें।",
        "<strong>मेडिकल:</strong> स्टेशन मास्टर के लिए रेलवे का मेडिकल स्टैंडर्ड (आंखों की जांच सहित) पास करना होता है; तय स्टैंडर्ड नोटिफिकेशन में देखें।",
      ],
      html: "अपनी उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 1 जनवरी 2027 की तारीख डालकर देख लें, और नोटिफिकेशन आते ही उम्र सीमा से मिलाएं।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["सभी वर्ग", "नोटिफिकेशन में देखें"],
        ],
      },
      callout: { kind: "info", html: "शॉर्ट नोटिस में फीस नहीं दी गई है। पिछली RRB भर्तियों में परीक्षा में बैठने पर फीस का कुछ हिस्सा वापस होता था; इस बार का नियम विस्तृत नोटिफिकेशन से ही पक्का होगा।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कंप्यूटर आधारित परीक्षा (CBT):</strong> चरण और सिलेबस विस्तृत नोटिफिकेशन में आएंगे।",
        "<strong>कंप्यूटर आधारित एप्टीट्यूड टेस्ट (CBAT):</strong> पिछली भर्तियों में स्टेशन मास्टर के लिए होता था; इस बार की पुष्टि नोटिफिकेशन से करें।",
        "<strong>दस्तावेज़ जांच और मेडिकल</strong> के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "आधार कार्ड में नाम, जन्मतिथि और फोटो अभी से सही करा लें; RRB ने आवेदन से पहले आधार की जानकारी ठीक रखने की सलाह दी है।",
        "आवेदन खुलने पर <a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> पर अकाउंट बनाएं (पहले से अकाउंट है तो उसी से लॉग-इन करें)।",
        "CEN 08/2026 चुनें, एक RRB चुनें और फॉर्म भरें।",
        "फोटो और हस्ताक्षर तय साइज़ में अपलोड करें; ज़रूरत हो तो <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> इस्तेमाल करें।",
        "फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "रेलवे पहले भी फर्जी नोटिफिकेशन को लेकर चेतावनी दे चुका है। केवल rrbapply.gov.in और RRB की आधिकारिक वेबसाइटों पर भरोसा करें; नौकरी दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB ऑनलाइन आवेदन पोर्टल", note: "CEN 08/2026 का आवेदन" },
    { href: "https://indianrailways.gov.in/", title: "भारतीय रेल", note: "RRB की वेबसाइटों के लिंक" },
  ],
  faq: [
    { q: "RRB स्टेशन मास्टर 2026 का फॉर्म कब से भरा जाएगा?", a: "शॉर्ट नोटिस के अनुसार संभावित रूप से 27 अक्टूबर से 25 नवंबर 2026 तक, rrbapply.gov.in पर। तारीखें विस्तृत नोटिफिकेशन में पक्की होंगी।" },
    { q: "स्टेशन मास्टर के कितने पद हैं?", a: "लगभग 1,250 पद (सभी RRB मिलाकर)। यह संख्या अस्थायी है और बदल सकती है।" },
    { q: "स्टेशन मास्टर का वेतन कितना है?", a: "पे लेवल 6, शुरुआती मूल वेतन ₹35,400 प्रति माह, साथ में DA, HRA और दूसरे भत्ते।" },
    { q: "क्या स्टेशन मास्टर अब NTPC से अलग है?", a: "हां। इस बार स्टेशन मास्टर के पद अलग CEN 08/2026 से निकाले गए हैं। RRB NTPC ग्रेजुएट भर्ती का फॉर्म अलग है।" },
    { q: "उम्र सीमा और फीस क्या है?", a: "शॉर्ट नोटिस में यह साफ नहीं है और रिपोर्टों में अंतर है। विस्तृत नोटिफिकेशन आने पर ही भरोसा करें।" },
  ],
  related: [
    { href: "/jobs/rrb-ntpc-recruitment-2026.html", emoji: "🚆", title: "RRB NTPC 2026", text: "ग्रेजुएट और 12वीं पास पद" },
    { href: "/jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html", emoji: "🛠️", title: "RRB JE 2026", text: "इंजीनियरों के लिए भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2027 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
