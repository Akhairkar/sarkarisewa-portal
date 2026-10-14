import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; tnvelaivaaippu.gov.in itself is not reachable
// from our checker, so details come from search-result extracts of its
// official pages):
// - tnvelaivaaippu.gov.in / employmentexchange.tn.gov.in FAQ.pdf (Department
//   of Employment and Training): renew once every 3 years within 3 months of
//   the due date, 18 month renewal concession, renew directly or online,
//   differently abled registrants exempt from renewal; Unemployment
//   Assistance Scheme for registrants waiting more than 5 years with a family
//   income limit.
// - ramanathapuram.nic.in "District Employment and Career Guidance Centre"
//   (names the district office; says UEAS amount was raised by a 2017 GO).
// - ncs.gov.in (toll-free helpline 1514).
// UEAS amounts and age limits are left out: two FAQ versions disagree and a
// 2017 revision is mentioned.
export const tamilNaduEmploymentExchange: DocGuide = {
  "state": {
    "slug": "tamil-nadu",
    "hi": "तमिलनाडु"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Tamil Nadu Employment Exchange 2026: Apply & Status",
  "description": "तमिलनाडु रोजगार कार्यालय (Employment Exchange) पंजीकरण 2026: tnvelaivaaippu.gov.in पर ऑनलाइन पंजीकरण, हर 3 साल में नवीनीकरण और बेरोज़गारी सहायता योजना की जानकारी।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "तमिलनाडु रोजगार कार्यालय पंजीकरण 2026: tnvelaivaaippu पर ऑनलाइन पंजीकरण और नवीनीकरण",
  "lead": "तमिलनाडु में रोजगार कार्यालय का पंजीकरण रोजगार एवं प्रशिक्षण विभाग के पोर्टल tnvelaivaaippu.gov.in पर ऑनलाइन हो सकता है। पंजीकरण को हर 3 साल में नवीनीकृत करना होता है; नवीनीकरण ऑनलाइन या सीधे कार्यालय में किया जा सकता है। ज़िले में यह काम District Employment and Career Guidance Centre देखता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://www.tnvelaivaaippu.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">tnvelaivaaippu.gov.in</a>"
    ],
    [
      "नवीनीकरण",
      "हर 3 साल में, ड्यू तारीख से 3 महीने के भीतर"
    ],
    [
      "देर होने पर",
      "18 महीने की नवीनीकरण छूट (FAQ के अनुसार)"
    ],
    [
      "दिव्यांग",
      "दिव्यांग श्रेणी में पंजीकृत लोगों को नवीनीकरण से छूट"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> बेरोज़गारी सहायता की राशि अलग-अलग स्रोतों में अलग मिलती है और 2017 में संशोधन की बात कही गई है। इसलिए यहां कोई राशि नहीं लिखी है; ताज़ा राशि ज़िला रोजगार कार्यालय से पूछें।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोजगार कार्यालय पंजीकरण क्या है",
      "intro": "रोजगार एवं प्रशिक्षण विभाग के पोर्टल पर नागरिक अपना रोजगार पंजीकरण कर सकते हैं और नवीनीकरण का आवेदन दे सकते हैं। पंजीकरण से आपका नाम जीवित पंजी (Live Register) में रहता है और बेरोज़गारी सहायता जैसी योजनाओं का रास्ता खुलता है।",
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन पंजीकरण कैसे करें",
      "steps": [
        "<a href=\"https://www.tnvelaivaaippu.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">tnvelaivaaippu.gov.in</a> खोलें और नया पंजीकरण (Registration) चुनें।",
        "मांगी गई व्यक्तिगत और शैक्षिक जानकारी भरें।",
        "आवेदन जमा करके पावती/पंजीकरण संख्या रख लें।",
        "ज़रूरत पड़ने पर मूल प्रमाण पत्र लेकर अपने ज़िले के District Employment and Career Guidance Centre जाएं।"
      ],
      "callout": {
        "kind": "warn",
        "html": "पंजीकरण के कागज़ों की सटीक सूची और फीस की जानकारी हमें पोर्टल के सार्वजनिक पेज से नहीं मिली, इसलिए यहां नहीं लिखी। कृपया पोर्टल के फॉर्म और FAQ या अपने ज़िला रोजगार केंद्र से पुष्टि करें। कोई एजेंट पैसे मांगे तो सीधे विभाग से पूछें।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण के नियम",
      "list": [
        "विभाग के FAQ के अनुसार पंजीकरण <strong>हर 3 साल में एक बार</strong> नवीनीकृत करना होता है।",
        "नवीनीकरण <strong>ड्यू तारीख से 3 महीने के भीतर</strong> करें।",
        "समय निकल जाए तो <strong>18 महीने की नवीनीकरण छूट</strong> का इस्तेमाल किया जा सकता है।",
        "नवीनीकरण <strong>सीधे कार्यालय में या ऑनलाइन</strong> हो सकता है।",
        "जो लोग <strong>दिव्यांग श्रेणी</strong> में पंजीकृत हैं, उन्हें नवीनीकरण से छूट है।"
      ]
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी सहायता योजना (Unemployment Assistance Scheme)",
      "intro": "यह योजना उन शिक्षित बेरोज़गार युवाओं के लिए है जो रोजगार कार्यालय में पंजीकृत हैं और लंबे समय (5 साल से अधिक) से नौकरी के इंतज़ार में हैं। विभाग के FAQ के अनुसार इसमें परिवार की वार्षिक आय की सीमा है, और सूचियों में उम्र की सीमा भी बताई जाती है।",
      "callout": {
        "kind": "warn",
        "html": "योजना की राशि, सहायता की अवधि और उम्र/आय की सीमा के आंकड़े अलग-अलग स्रोतों में अलग हैं और 2017 के एक आदेश से बदली बताई जाती है। इसलिए हमने कोई संख्या नहीं दी है। आवेदन से पहले अपने District Employment and Career Guidance Centre से ताज़ा नियम पूछें।"
      }
    },
    {
      "id": "dikkat",
      "title": "आम दिक्कतें और उनका हल",
      "table": {
        "head": [
          "दिक्कत",
          "क्या करें"
        ],
        "rows": [
          [
            "नवीनीकरण की तारीख निकल गई",
            "18 महीने की छूट के बारे में अपने ज़िला रोजगार केंद्र से पूछें"
          ],
          [
            "ऑनलाइन नवीनीकरण नहीं हो रहा",
            "सीधे ज़िला रोजगार केंद्र जाकर नवीनीकरण कराएं"
          ],
          [
            "योजना की राशि/शर्त",
            "ज़िला रोजगार केंद्र से ताज़ा नियम पूछें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> TNPSC, TRB आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://www.tnvelaivaaippu.gov.in/",
      "title": "तमिलनाडु रोजगार एवं प्रशिक्षण विभाग (पंजीकरण पोर्टल)"
    },
    {
      "href": "https://www.tnvelaivaaippu.gov.in/pdf/FAQ.pdf",
      "title": "विभाग के FAQ (PDF)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "तमिलनाडु में रोजगार कार्यालय में ऑनलाइन पंजीकरण कहां करें?",
      "a": "रोजगार एवं प्रशिक्षण विभाग के पोर्टल tnvelaivaaippu.gov.in पर।"
    },
    {
      "q": "नवीनीकरण कितने साल में करना होता है?",
      "a": "विभाग के FAQ के अनुसार हर 3 साल में, ड्यू तारीख से 3 महीने के भीतर। देर होने पर 18 महीने की छूट मिल सकती है।"
    },
    {
      "q": "क्या नवीनीकरण ऑनलाइन हो सकता है?",
      "a": "हाँ, FAQ के अनुसार नवीनीकरण सीधे या ऑनलाइन दोनों तरह से हो सकता है।"
    },
    {
      "q": "क्या दिव्यांगों को नवीनीकरण कराना होता है?",
      "a": "FAQ के अनुसार दिव्यांग श्रेणी में पंजीकृत लोगों को नवीनीकरण से छूट है।"
    },
    {
      "q": "बेरोज़गारी सहायता कितनी मिलती है?",
      "a": "राशि स्रोतों में अलग-अलग मिलती है और संशोधित हुई बताई जाती है, इसलिए हम कोई संख्या नहीं देते। ज़िला रोजगार केंद्र से ताज़ा राशि और शर्तें पूछें।"
    }
  ],
  "related": [
    {
      "href": "/jobs/index.html",
      "emoji": "🎯",
      "title": "नई सरकारी नौकरियां",
      "text": "भर्ती, योग्यता और आखिरी तारीख"
    },
    {
      "href": "/exams/index.html",
      "emoji": "📅",
      "title": "Exam Calendar",
      "text": "SSC, Railway, Bank की तारीखें"
    },
    {
      "href": "/states/tamil-nadu-caste-certificate.html",
      "emoji": "📜",
      "title": "तमिलनाडु जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/tamil-nadu-domicile-certificate.html",
      "emoji": "🏠",
      "title": "तमिलनाडु निवास प्रमाण पत्र",
      "text": "डोमिसाइल सर्टिफिकेट"
    },
    {
      "href": "/tools/age-calculator.html",
      "emoji": "⏳",
      "title": "Exam Age Calculator",
      "text": "कट-ऑफ तारीख पर सही उम्र"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Signature Resizer",
      "text": "फॉर्म के साइज़ में, फ्री"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  "aside": [
    {
      "href": "https://www.tnvelaivaaippu.gov.in/",
      "label": "📝 tnvelaivaaippu पोर्टल"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
