import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - dsde.uk.gov.in/?p=6637 (Directorate of Training & Employment, Uttarakhand,
//   "Candidate Corner: How to Register Yourself in Employment Exchange"):
//   register on eservices.uk.gov.in by self-registration, CSC or nearest
//   Employment Exchange; documents; acknowledgment card; X-10 card after
//   verification.
// - ncs.gov.in (toll-free helpline 1514).
// Age limit, renewal period, fees and any unemployment allowance were not
// found on an official page, so they are left out on purpose.
export const uttarakhandEmploymentExchange: DocGuide = {
  "state": {
    "slug": "uttarakhand",
    "hi": "उत्तराखंड"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Uttarakhand Employment Exchange 2026",
  "description": "उत्तराखंड रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: eservices.uk.gov.in पर ऑनलाइन पंजीकरण, ज़रूरी कागज़, X-10 रजिस्ट्रेशन कार्ड और CSC/रोज़गार कार्यालय का विकल्प।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "उत्तराखंड रोज़गार कार्यालय पंजीकरण 2026: eservices.uk.gov.in पर कैसे करें",
  "lead": "उत्तराखंड में रोज़गार कार्यालय का पंजीकरण राज्य के e-Services पोर्टल (eservices.uk.gov.in) पर ऑनलाइन हो सकता है। आप खुद, कॉमन सर्विस सेंटर (CSC) से या नज़दीकी रोज़गार कार्यालय में जाकर पंजीकरण करा सकते हैं। रोज़गार कार्यालय से सत्यापन के बाद रजिस्ट्रेशन कार्ड (X-10) मिलता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://eservices.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eservices.uk.gov.in</a>"
    ],
    [
      "कहां से",
      "खुद, CSC या नज़दीकी रोज़गार कार्यालय"
    ],
    [
      "कार्ड",
      "सत्यापन के बाद X-10 रजिस्ट्रेशन कार्ड"
    ],
    [
      "कागज़",
      "निवास, पहचान, जन्म तिथि, शैक्षिक अंकपत्र"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> आवेदन के बाद मिलने वाला <strong>acknowledgment card</strong> संभालकर रखें। X-10 कार्ड तभी मिलता है जब संबंधित रोज़गार कार्यालय आपका पंजीकरण सत्यापित कर दे।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोज़गार कार्यालय पंजीकरण क्या है",
      "intro": "उत्तराखंड में यह सेवा प्रशिक्षण एवं सेवायोजन निदेशालय (Directorate of Training & Employment) के अंतर्गत है। पंजीकरण से आपका नाम नौकरी चाहने वालों की सूची में दर्ज होता है।",
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "kagaz",
      "title": "क्या-क्या तैयार रखें",
      "intro": "निदेशालय के कैंडिडेट कॉर्नर के अनुसार आवेदन में ये कागज़ लगते हैं:",
      "list": [
        "<strong>निवास प्रमाण पत्र</strong> (उत्तराखंड सरकार द्वारा जारी)",
        "<strong>स्थानीय पहचान पत्र (Local ID)</strong>",
        "<strong>जाति प्रमाण पत्र</strong>, अगर SC/ST/OBC हैं",
        "<strong>जन्म का प्रमाण:</strong> हाईस्कूल की अंकपत्र/प्रमाण पत्र, और हाईस्कूल से नीचे वालों के लिए TC",
        "<strong>सबसे ऊंची शैक्षिक योग्यता</strong> का अंकपत्र",
        "व्यावसायिक या तकनीकी शिक्षा है तो उसका अंकपत्र",
        "<strong>चालू मोबाइल नंबर</strong>: यही आपका लॉगिन ID बनता है"
      ]
    },
    {
      "id": "online",
      "title": "ऑनलाइन पंजीकरण कैसे करें (स्टेप बाय स्टेप)",
      "steps": [
        "<a href=\"https://eservices.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eservices.uk.gov.in</a> खोलें और <strong>\"Don't have a user account\"</strong> से लॉगिन बनाएं।",
        "आपका पंजीकृत मोबाइल नंबर ही लॉगिन ID होता है; पासवर्ड उसी नंबर पर भेजा जाता है।",
        "लॉगिन करके <strong>Employment Exchange में पंजीकरण</strong> की सेवा चुनें और फॉर्म भरें।",
        "ऊपर बताए कागज़ जोड़कर आवेदन जमा करें। <strong>Acknowledgment card</strong> बनेगा, उसे रख लें।",
        "संबंधित रोज़गार कार्यालय के सत्यापन के बाद <strong>X-10 रजिस्ट्रेशन कार्ड</strong> पोर्टल से डाउनलोड/प्रिंट करें।"
      ],
      "callout": {
        "kind": "ok",
        "html": "ऑनलाइन में दिक्कत हो तो नज़दीकी रोज़गार कार्यालय या CSC पर भी यही पंजीकरण सेवा उपलब्ध है। निदेशालय के पेज पर फीस का ज़िक्र हमें नहीं मिला, इसलिए कोई राशि नहीं लिखी; CSC पर सेवा शुल्क लग सकता है, पहले पूछ लें।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण, उम्र सीमा और बेरोज़गारी भत्ता",
      "intro": "निदेशालय के कैंडिडेट कॉर्नर पर पंजीकरण की उम्र सीमा, नवीनीकरण की अवधि और किसी बेरोज़गारी भत्ते की राशि नहीं दी गई है। इसलिए यहां कोई संख्या नहीं लिखी जा रही है। ये बातें अपने ज़िले के रोज़गार कार्यालय से या e-Services पोर्टल पर सेवा का विवरण देखकर पक्का करें।"
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
            "पासवर्ड नहीं आया",
            "जिस मोबाइल से लॉगिन बनाया उसका नंबर सही है या नहीं देखें; न मिले तो रोज़गार कार्यालय/CSC से मदद लें"
          ],
          [
            "X-10 कार्ड डाउनलोड नहीं हो रहा",
            "पहले जांचें कि कार्यालय ने सत्यापन कर दिया है; न हुआ हो तो कार्यालय से संपर्क करें"
          ],
          [
            "कागज़ों में निवास प्रमाण नहीं",
            "पहले निवास प्रमाण पत्र बनवाएं"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> UKSSSC, UKPSC आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://eservices.uk.gov.in/",
      "title": "e-Services उत्तराखंड (पंजीकरण पोर्टल)"
    },
    {
      "href": "https://dsde.uk.gov.in/?p=6637",
      "title": "कैंडिडेट कॉर्नर: रोज़गार कार्यालय में पंजीकरण (प्रशिक्षण एवं सेवायोजन निदेशालय)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "उत्तराखंड में रोज़गार कार्यालय में ऑनलाइन पंजीकरण कैसे करें?",
      "a": "eservices.uk.gov.in पर \"Don't have a user account\" से लॉगिन बनाएं, Employment Exchange पंजीकरण सेवा चुनकर फॉर्म भरें और कागज़ जोड़ें। सत्यापन के बाद X-10 कार्ड मिलता है।"
    },
    {
      "q": "कौन से कागज़ चाहिए?",
      "a": "उत्तराखंड का निवास प्रमाण पत्र, स्थानीय पहचान पत्र, जाति प्रमाण पत्र (अगर लागू), हाईस्कूल का जन्म प्रमाण, सबसे ऊंची शैक्षिक योग्यता और तकनीकी योग्यता (अगर हो) के अंकपत्र।"
    },
    {
      "q": "क्या CSC या रोज़गार कार्यालय से भी पंजीकरण हो सकता है?",
      "a": "हाँ, निदेशालय के पेज के अनुसार खुद, CSC या नज़दीकी रोज़गार कार्यालय, तीनों रास्ते हैं।"
    },
    {
      "q": "रजिस्ट्रेशन कार्ड (X-10) कैसे मिलता है?",
      "a": "रोज़गार कार्यालय आपका पंजीकरण सत्यापित कर दे तो कार्ड पोर्टल से डाउनलोड या प्रिंट किया जा सकता है।"
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
      "href": "/states/uttarakhand-caste-certificate.html",
      "emoji": "📜",
      "title": "उत्तराखंड जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/uttarakhand-domicile-certificate.html",
      "emoji": "🏠",
      "title": "उत्तराखंड निवास प्रमाण पत्र",
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
      "href": "https://eservices.uk.gov.in/",
      "label": "📝 e-Services पर पंजीकरण करें"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
