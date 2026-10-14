import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - singlewindow.jk.gov.in SOP file 638 (J&K Business Reform Action Plan 2022
//   document, via search): Directorate of Employment, Labour and Employment
//   Department handles job-seeker registration and renewal under the
//   Employment Exchange Act 1959; service meant to run online through the J&K
//   Single Window portal; eligibility/document checklist posted on
//   jakemp.nic.in.
// - services.india.gov.in listing (search extract): register online or at the
//   District Employment & Counselling Centres; renewal online or offline.
// - ncs.gov.in (toll-free helpline 1514).
// jakemp.nic.in and the Single Window site were not reachable from our
// checker, so age, documents, fee, renewal period and any allowance are left
// out.
export const jammuKashmirEmploymentExchange: DocGuide = {
  "state": {
    "slug": "jammu-kashmir",
    "hi": "जम्मू और कश्मीर"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Jammu & Kashmir Employment Exchange 2026",
  "description": "जम्मू और कश्मीर रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: रोज़गार निदेशालय, Single Window / jakemp.nic.in पर ऑनलाइन पंजीकरण-नवीनीकरण की जानकारी और ज़िला रोज़गार केंद्र।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "जम्मू और कश्मीर रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन पंजीकरण और ज़िला रोज़गार केंद्र",
  "lead": "जम्मू और कश्मीर में नौकरी चाहने वालों का पंजीकरण और नवीनीकरण श्रम एवं रोज़गार विभाग के रोज़गार निदेशालय के अंतर्गत होता है। सरकारी दस्तावेज़ों के अनुसार यह सेवा J&K Single Window पोर्टल से ऑनलाइन चलाने की व्यवस्था है, और आप अपने ज़िले के District Employment & Counselling Centre भी जा सकते हैं। उम्र, कागज़ और फीस की सटीक जानकारी के लिए विभाग का पोर्टल jakemp.nic.in देखें।",
  "facts": [
    [
      "विभाग",
      "श्रम एवं रोज़गार विभाग, रोज़गार निदेशालय"
    ],
    [
      "ऑनलाइन",
      "J&K Single Window पोर्टल / jakemp.nic.in"
    ],
    [
      "ऑफलाइन",
      "ज़िला Employment & Counselling Centre"
    ],
    [
      "कानून",
      "Employment Exchanges (CNV) Act, 1959"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> हम jakemp.nic.in और Single Window साइट को अपने चेकर से खोल नहीं पाए, इसलिए उम्र सीमा, कागज़ों की सूची, फीस और नवीनीकरण की अवधि यहां नहीं लिखी जा रही। गलत जानकारी से बेहतर है कि आप विभाग की साइट पर देखें।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "किसके पास पंजीकरण होता है",
      "intro": "राज्य सरकार के 2022 के सुधार-योजना दस्तावेज़ (Business Reform Action Plan) के अनुसार रोज़गार निदेशालय Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959 के तहत जॉब सीकर का पंजीकरण और नवीनीकरण करता है।",
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "पंजीकरण कैसे करें",
      "steps": [
        "विभाग की साइट <strong>jakemp.nic.in</strong> खोलें; उसके होम पेज पर पात्रता और कागज़ों की सूची दी जाती है।",
        "सरकारी दस्तावेज़ के अनुसार आवेदन फॉर्म भरना, कागज़ अपलोड करना, जमा करना और फीस (अगर हो) का भुगतान Single Window पोर्टल पर ऑनलाइन करने की व्यवस्था है। सेवा का SOP यहां देखें: <a href=\"https://singlewindow.jk.gov.in/assets/services/sop_file/638/sop_file_0636035001669515562.pdf\" target=\"_blank\" rel=\"noopener nofollow\">SOP (PDF)</a>।",
        "ऑनलाइन में दिक्कत हो तो अपने ज़िले के <strong>District Employment & Counselling Centre</strong> में जाकर पंजीकरण/नवीनीकरण के बारे में पूछें।"
      ],
      "callout": {
        "kind": "warn",
        "html": "फीस के बारे में हम कोई आंकड़ा नहीं दे रहे क्योंकि हमें वह सत्यापित नहीं मिला। कोई एजेंट \"पक्के रजिस्ट्रेशन\" के पैसे मांगे तो सीधे ज़िला केंद्र से पूछें।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण और बेरोज़गारी भत्ता",
      "intro": "सरकारी सूचियों के अनुसार नवीनीकरण भी ऑनलाइन या ऑफलाइन हो सकता है। नवीनीकरण की अवधि और किसी बेरोज़गारी भत्ते की राशि हमें किसी सत्यापित सरकारी पेज पर नहीं मिली, इसलिए यहां नहीं लिखी गई है।"
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
            "पोर्टल नहीं खुल रहा",
            "ज़िला Employment & Counselling Centre से संपर्क करें"
          ],
          [
            "कागज़ों की सूची चाहिए",
            "jakemp.nic.in के होम पेज पर पात्रता और Document Checklist देखें"
          ],
          [
            "नवीनीकरण की तारीख",
            "अपने ज़िला केंद्र से पक्का करें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> JKSSB, JKPSC आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://singlewindow.jk.gov.in/assets/services/sop_file/638/sop_file_0636035001669515562.pdf",
      "title": "रोज़गार पंजीकरण और नवीनीकरण: Single Window SOP (PDF)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "जम्मू और कश्मीर में रोज़गार कार्यालय में पंजीकरण कैसे होता है?",
      "a": "रोज़गार निदेशालय की सेवा Single Window पोर्टल पर ऑनलाइन चलाने की व्यवस्था है, और ज़िला Employment & Counselling Centre में भी जा सकते हैं। पात्रता और कागज़ विभाग की साइट jakemp.nic.in पर देखें।"
    },
    {
      "q": "पंजीकरण की फीस या उम्र सीमा क्या है?",
      "a": "हमें इसका सत्यापित सरकारी स्रोत नहीं मिला, इसलिए नहीं लिख रहे। ज़िला केंद्र या विभाग की साइट से पूछें।"
    },
    {
      "q": "क्या नवीनीकरण ऑनलाइन हो सकता है?",
      "a": "सरकारी सेवा-सूची के अनुसार नवीनीकरण ऑनलाइन या ऑफलाइन हो सकता है।"
    },
    {
      "q": "राष्ट्रीय स्तर पर कहां पंजीकरण कर सकते हैं?",
      "a": "ncs.gov.in (National Career Service) पर, हेल्पलाइन 1514।"
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
      "href": "/states/jammu-kashmir-caste-certificate.html",
      "emoji": "📜",
      "title": "जम्मू और कश्मीर जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/jammu-kashmir-domicile-certificate.html",
      "emoji": "🏠",
      "title": "जम्मू और कश्मीर निवास प्रमाण पत्र",
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
      "href": "https://singlewindow.jk.gov.in/assets/services/sop_file/638/sop_file_0636035001669515562.pdf",
      "label": "📝 पंजीकरण SOP (Single Window)"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
