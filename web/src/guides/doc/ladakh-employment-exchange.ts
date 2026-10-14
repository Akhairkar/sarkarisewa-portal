import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - ladakh.gov.in/?p=18941 (Employment Department, UT Ladakh) and search
//   extracts of ladakh.gov.in pages: District Employment & Counselling Centre,
//   Leh, headed by the Deputy Director Employment under the Department of
//   Labour and Employment; mobile registration of unemployed educated youth.
// - ladakh.gov.in/?p=7401 (Mar 2021 press note): RoL Ladakh portal is for
//   labourers' labour card, not job-seeker registration.
// - ncs.gov.in (toll-free helpline 1514).
// No official Ladakh job-seeker registration portal, age, fee, renewal period
// or allowance was found; a third-party site's "age 14+, 3 years" is NOT used.
export const ladakhEmploymentExchange: DocGuide = {
  "state": {
    "slug": "ladakh",
    "hi": "लद्दाख"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Ladakh Employment Exchange 2026: Apply & Status",
  "description": "लद्दाख रोज़गार कार्यालय पंजीकरण 2026: श्रम एवं रोज़गार विभाग के अंतर्गत Employment & Counselling Centre (लेह), NCS पोर्टल पर पंजीकरण और ज़रूरी सावधानियां।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "लद्दाख रोज़गार कार्यालय पंजीकरण 2026: Employment & Counselling Centre और NCS",
  "lead": "लद्दाख में रोज़गार कार्यालय का काम श्रम एवं रोज़गार विभाग के अंतर्गत District Employment & Counselling Centre करता है, जैसे लेह में उप निदेशक रोज़गार के नेतृत्व वाला केंद्र। हमें लद्दाख का कोई अलग आधिकारिक ऑनलाइन जॉब सीकर पोर्टल नहीं मिला। इसलिए पंजीकरण के लिए अपने ज़िले का रोज़गार केंद्र संपर्क करें, और राष्ट्रीय स्तर पर NCS पोर्टल (ncs.gov.in) पर भी पंजीकरण कर सकते हैं।",
  "facts": [
    [
      "विभाग",
      "श्रम एवं रोज़गार विभाग, UT लद्दाख"
    ],
    [
      "कार्यालय",
      "District Employment & Counselling Centre (लेह)"
    ],
    [
      "राष्ट्रीय पोर्टल",
      "<a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> (हेल्पलाइन 1514)"
    ],
    [
      "राज्य पोर्टल",
      "अलग ऑनलाइन पोर्टल नहीं मिला"
    ]
  ],
  "notice": "<strong>सावधान:</strong> लद्दाख का \"RoL Ladakh\" पोर्टल (labouremp.ladakh.gov.in) मज़दूरों के <strong>लेबर कार्ड</strong> के लिए है, नौकरी चाहने वालों के रोज़गार पंजीकरण के लिए नहीं।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोज़गार केंद्र क्या करता है",
      "intro": "लेह के District Employment & Counselling Centre के बारे में लद्दाख प्रशासन की साइट के अनुसार यह उप निदेशक रोज़गार के अधीन है। इसका एक काम नौकरी चाहने वालों का डेटाबेस बनाना है ताकि नियोक्ता उसका उपयोग कर सकें, और यह ज़िले के ब्लॉकों में पढ़े-लिखे बेरोज़गार युवाओं का मोबाइल पंजीकरण भी करता है।",
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "kaise",
      "title": "पंजीकरण कैसे करें",
      "steps": [
        "अपने ज़िले (लेह या कारगिल) के District Employment & Counselling Centre जाएं या फोन से पूछें कि पंजीकरण की ताज़ा प्रक्रिया और ज़रूरी कागज़ क्या हैं।",
        "इसके साथ <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">National Career Service (ncs.gov.in)</a> पर जॉब सीकर के रूप में मुफ्त पंजीकरण करके नौकरियां खोज सकते हैं। हेल्पलाइन <strong>1514</strong>।",
        "पंजीकरण की उम्र सीमा, फीस, नवीनीकरण की अवधि और किसी बेरोज़गारी भत्ते की राशि हमें किसी आधिकारिक स्रोत में नहीं मिली, इसलिए यहां नहीं लिखी गई। इन्हें केंद्र से ज़रूर पूछें।"
      ],
      "callout": {
        "kind": "warn",
        "html": "कुछ गैर-सरकारी साइटें लद्दाख के लिए उम्र और नवीनीकरण की अवधि लिखती हैं, पर हम उन्हें पक्का नहीं मान सकते। आधिकारिक पुष्टि के बिना किसी को पैसे न दें।"
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
            "ऑनलाइन पोर्टल नहीं मिल रहा",
            "लद्दाख का अलग पोर्टल हमें नहीं मिला; ज़िला रोज़गार केंद्र या NCS का उपयोग करें"
          ],
          [
            "लेबर कार्ड चाहिए",
            "यह अलग सेवा है (RoL Ladakh / श्रम विभाग), रोज़गार पंजीकरण से अलग"
          ],
          [
            "कागज़ों की सूची",
            "ज़िला रोज़गार केंद्र से पूछें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> लद्दाख की भर्तियों में आवेदन विभाग/भर्ती एजेंसी की अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://ladakh.gov.in/?p=18941",
      "title": "रोज़गार विभाग, UT लद्दाख"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "लद्दाख में रोज़गार कार्यालय में पंजीकरण कहां होता है?",
      "a": "श्रम एवं रोज़गार विभाग के District Employment & Counselling Centre (जैसे लेह) में। प्रक्रिया के लिए केंद्र से पूछें।"
    },
    {
      "q": "क्या लद्दाख का अपना ऑनलाइन पोर्टल है?",
      "a": "हमें जॉब सीकर पंजीकरण के लिए कोई अलग आधिकारिक पोर्टल नहीं मिला। राष्ट्रीय NCS पोर्टल ncs.gov.in उपलब्ध है।"
    },
    {
      "q": "क्या RoL Ladakh पोर्टल से रोज़गार पंजीकरण होता है?",
      "a": "नहीं। वह मज़दूरों के लेबर कार्ड के पंजीकरण के लिए है।"
    },
    {
      "q": "फीस और नवीनीकरण की अवधि क्या है?",
      "a": "हमें आधिकारिक स्रोत में नहीं मिली, इसलिए नहीं लिख रहे। ज़िला रोज़गार केंद्र से पूछें।"
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
      "href": "/states/ladakh-caste-certificate.html",
      "emoji": "📜",
      "title": "लद्दाख जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/ladakh-domicile-certificate.html",
      "emoji": "🏠",
      "title": "लद्दाख निवास प्रमाण पत्र",
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
      "href": "https://ladakh.gov.in/?p=18941",
      "label": "ℹ️ रोज़गार विभाग, लद्दाख"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
