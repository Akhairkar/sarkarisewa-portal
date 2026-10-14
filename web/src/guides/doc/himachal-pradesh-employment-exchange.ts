import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - eemis.hp.gov.in (Employment Exchange MIS, Department of Labour and
//   Employment HP) home page: candidate corner (online registration, renewal,
//   transfer, qualification update), applicant age 14+ and bonafide Himachali,
//   renewal every 3 years with 2 month grace, 30 day Public Service Guarantee
//   Act limit, login now through SSO / Him Access, helpline 01772625277,
//   email lep-hp[at]nic[dot]in.
// - ncs.gov.in (toll-free helpline 1514).
export const himachalPradeshEmploymentExchange: DocGuide = {
  "state": {
    "slug": "himachal-pradesh",
    "hi": "हिमाचल प्रदेश"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Himachal Pradesh Employment Exchange 2026",
  "description": "हिमाचल प्रदेश रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: eemis.hp.gov.in पर ऑनलाइन पंजीकरण/नवीनीकरण, Him Access (SSO) लॉगिन, 14+ उम्र, हर 3 साल में नवीनीकरण।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "हिमाचल प्रदेश रोज़गार कार्यालय पंजीकरण 2026: eEMIS पोर्टल पर पंजीकरण और नवीनीकरण",
  "lead": "हिमाचल प्रदेश में रोज़गार कार्यालय का पंजीकरण श्रम एवं रोज़गार विभाग के eEMIS पोर्टल (eemis.hp.gov.in) पर ऑनलाइन होता है। 14 साल से ऊपर के हिमाचली निवासी अपने पते के हिसाब से संबंधित रोज़गार कार्यालय में पंजीकरण करा सकते हैं। पंजीकरण हर 3 साल में नवीनीकृत करना होता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://eemis.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eemis.hp.gov.in</a>"
    ],
    [
      "उम्र",
      "14 साल से ऊपर, हिमाचली निवासी"
    ],
    [
      "नवीनीकरण",
      "हर 3 साल में, ऊपर 2 महीने की छूट"
    ],
    [
      "समय सीमा",
      "30 दिन (लोक सेवा गारंटी अधिनियम, पोर्टल के अनुसार)"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> पोर्टल के अनुसार पुराना कैंडिडेट लॉगिन बंद हो चुका है। अब <strong>SSO / Him Access</strong> पोर्टल से लॉगिन करना होता है। पहले eEMIS पर पंजीकृत थे और SSO में अलग मोबाइल/ईमेल है तो लॉगिन के बाद आने वाले पॉप-अप से पुराना खाता जोड़ें।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोज़गार कार्यालय क्या करता है",
      "intro": "पोर्टल के अनुसार रोज़गार कार्यालय का मकसद राज्य के बेरोज़गारों को रोज़गार के अवसर दिलाना है। नौकरी बदलना चाहने वाले कार्यरत लोग भी पंजीकरण करा सकते हैं।",
      "list": [
        "पंजीकृत उम्मीदवारों के नाम प्रकाशित रिक्तियों के लिए नियोक्ताओं को भेजे जाते हैं।",
        "कौशल विकास और करियर काउंसलिंग की कार्यशालाएं।",
        "पोर्टल पर रोज़गार मेलों और आने वाली रिक्तियों की जानकारी।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "patrata",
      "title": "कौन पंजीकरण करा सकता है",
      "list": [
        "<strong>14 साल से ऊपर</strong> की उम्र का कोई भी बोनाफाइड हिमाचली।",
        "आपके <strong>संपर्क पते</strong> का इलाका जिस रोज़गार कार्यालय के अधिकार क्षेत्र में आता है, पंजीकरण उसी में होता है।"
      ]
    },
    {
      "id": "online",
      "title": "ऑनलाइन पंजीकरण कैसे करें",
      "steps": [
        "<a href=\"https://eemis.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eemis.hp.gov.in</a> खोलें और Candidate's Corner में <strong>Online Registration</strong> चुनें।",
        "लॉगिन के लिए <strong>Him Access (SSO)</strong> पोर्टल का उपयोग करें। खाता नहीं है तो वहां साइन-अप करें; SMS से यूज़र ID और पासवर्ड मिलेगा।",
        "फॉर्म में व्यक्तिगत, संपर्क और शैक्षिक जानकारी भरें और ज़रूरी कागज़ अपलोड करें।",
        "आवेदन जमा करें। रोज़गार कार्यालय उसे जांचकर स्वीकृत करता है।",
        "पोर्टल पर आवेदन की समय सीमा 30 दिन दिखाई गई है (लोक सेवा गारंटी अधिनियम)।"
      ],
      "callout": {
        "kind": "warn",
        "html": "<strong>फीस:</strong> पोर्टल के होम पेज पर पंजीकरण की फीस का ज़िक्र हमें नहीं मिला। कोई एजेंट पैसे मांगे तो पहले अपने रोज़गार कार्यालय से पुष्टि करें। कागज़ों की सटीक सूची फॉर्म में दिखती है।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण, ट्रांसफर और योग्यता जोड़ना",
      "list": [
        "<strong>नवीनीकरण:</strong> पंजीकरण के हर 3 साल बाद, <strong>2 महीने की छूट अवधि</strong> के भीतर। पोर्टल पर लॉगिन करके Online Renewal चुनें। पोर्टल के पुराने निर्देश के अनुसार समय पर नवीनीकरण न हो तो नाम कट सकता है।",
        "<strong>ट्रांसफर:</strong> पता बदलने पर Online Transfer Request का विकल्प है।",
        "<strong>नई योग्यता:</strong> Online Qualification Addition/Updation से नई पढ़ाई जोड़ें।"
      ]
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "eEMIS पोर्टल में रोज़गार कार्यालयों के लिए पंजीकृत उम्मीदवारों को विभिन्न भत्ते प्रोसेस करने का मॉड्यूल है, पर पोर्टल के सार्वजनिक पेज पर किसी भत्ते की राशि या पात्रता नहीं दी गई। इसलिए यहां कोई राशि नहीं लिखी जा रही। जानकारी के लिए अपने रोज़गार कार्यालय से पूछें।"
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
            "पुराना eEMIS लॉगिन नहीं चल रहा",
            "Him Access (SSO) से लॉगिन करें; पुराना खाता पॉप-अप से जोड़ें"
          ],
          [
            "मोबाइल/ईमेल अलग है",
            "लॉगिन के बाद पुराने Login ID और पासवर्ड से मैपिंग करें"
          ],
          [
            "नवीनीकरण की तारीख निकल गई",
            "जल्द से जल्द अपने रोज़गार कार्यालय से संपर्क करें"
          ],
          [
            "पोर्टल की दिक्कत",
            "फोन 0177-2625277 या ईमेल lep-hp@nic.in (पोर्टल पर दिया संपर्क)"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> HPPSC, HPRCA आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://eemis.hp.gov.in/",
      "title": "eEMIS हिमाचल प्रदेश (रोज़गार कार्यालय पोर्टल)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "हिमाचल में रोज़गार कार्यालय में ऑनलाइन पंजीकरण कहां करें?",
      "a": "श्रम एवं रोज़गार विभाग के पोर्टल eemis.hp.gov.in पर Candidate's Corner में Online Registration से। लॉगिन SSO / Him Access के ज़रिए होता है।"
    },
    {
      "q": "पंजीकरण के लिए उम्र कितनी होनी चाहिए?",
      "a": "पोर्टल के अनुसार 14 साल से ऊपर और बोनाफाइड हिमाचली।"
    },
    {
      "q": "नवीनीकरण कब करवाना होता है?",
      "a": "पंजीकरण के हर 3 साल बाद, 2 महीने की छूट अवधि के भीतर।"
    },
    {
      "q": "आवेदन कितने दिन में निपटता है?",
      "a": "पोर्टल पर लोक सेवा गारंटी अधिनियम के तहत पंजीकरण और नवीनीकरण दोनों की समय सीमा 30 दिन दिखाई गई है।"
    },
    {
      "q": "पुराना eEMIS लॉगिन नहीं चल रहा तो क्या करें?",
      "a": "पोर्टल के अनुसार अब SSO / Him Access से लॉगिन होता है। नए खाते पर SMS से यूज़र ID और पासवर्ड मिलता है।"
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
      "href": "/states/himachal-pradesh-caste-certificate.html",
      "emoji": "📜",
      "title": "हिमाचल प्रदेश जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/himachal-pradesh-domicile-certificate.html",
      "emoji": "🏠",
      "title": "हिमाचल प्रदेश निवास प्रमाण पत्र",
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
      "href": "https://eemis.hp.gov.in/",
      "label": "📝 eEMIS पर पंजीकरण करें"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
