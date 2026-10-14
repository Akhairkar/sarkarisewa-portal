import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - goa.gov.in/wp-content/uploads/2026/03/Citizen-Charter-REE-CLE.pdf
//   (Citizen Charter, Regional Employment Exchange, Office of the Commissioner
//   Labour & Employment, Panaji): online services on goaonline.gov.in (Labour
//   and Employment Card, notification of vacancies, etc.), exchange verifies
//   online applications, online L&E card is not invalidated for want of
//   renewal, no fee for any service, phone 0832 2437276, email, WhatsApp.
// - heraldgoa.in (Feb 2019): registration moved fully online, Aadhaar needed
//   for enrolment (older news report, not official).
// - ncs.gov.in (toll-free helpline 1514).
// Age limit and documents were not found on an official page and are left out.
export const goaEmploymentExchange: DocGuide = {
  "state": {
    "slug": "goa",
    "hi": "गोवा"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Goa Employment Exchange 2026: Apply & Status",
  "description": "गोवा रोजगार कार्यालय पंजीकरण 2026: goaonline.gov.in पर Labour and Employment Card, ऑनलाइन आवेदन का रीजनल एम्प्लॉयमेंट एक्सचेंज (पणजी) से सत्यापन, कोई फीस नहीं।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "गोवा रोजगार कार्यालय पंजीकरण 2026: Labour and Employment Card ऑनलाइन",
  "lead": "गोवा में रोजगार कार्यालय का पंजीकरण goaonline.gov.in पर ऑनलाइन होता है और Labour and Employment (L&E) कार्ड के रूप में मिलता है। आवेदन की जांच और मंज़ूरी पणजी का Regional Employment Exchange करता है। नागरिक चार्टर के अनुसार रोजगार कार्यालय किसी सेवा की फीस नहीं लेता और नया ऑनलाइन L&E कार्ड नवीनीकरण न होने से अमान्य नहीं होता।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://www.goaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">goaonline.gov.in</a>"
    ],
    [
      "फीस",
      "रोजगार कार्यालय कोई फीस नहीं लेता (नागरिक चार्टर)"
    ],
    [
      "नवीनीकरण",
      "नया ऑनलाइन L&E कार्ड नवीनीकरण के बिना अमान्य नहीं होता"
    ],
    [
      "संपर्क",
      "0832-2437276 (रीजनल एम्प्लॉयमेंट एक्सचेंज, पणजी)"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> गोवा में पंजीकरण को आम बोलचाल में \"L&E कार्ड\" कहा जाता है। यह नौकरी की गारंटी नहीं है, पर इसे सरकारी विभागों के रोज़गार से जुड़ी प्रक्रियाओं में देखा जाता है; नियम भर्ती विभाग के विज्ञापन में पढ़ें।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रीजनल एम्प्लॉयमेंट एक्सचेंज क्या करता है",
      "intro": "नागरिक चार्टर के अनुसार यह कार्यालय श्रम एवं रोजगार आयुक्त के अंतर्गत है और:",
      "list": [
        "ऑनलाइन आए जॉबसीकर आवेदनों की जांच और मंज़ूरी करता है।",
        "नियोक्ताओं को उम्मीदवारों के नाम भेजता है और प्लेसमेंट का रिकॉर्ड रखता है।",
        "Model Career Centre के ज़रिए करियर काउंसलिंग, जॉब फेयर और प्रतियोगी परीक्षा (GPSC, UPSC, बैंक, रेलवे) की तैयारी के सत्र चलाता है।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन आवेदन कैसे करें",
      "steps": [
        "<a href=\"https://www.goaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">goaonline.gov.in</a> पर जाएं और \"Labour and Employment Card\" सेवा चुनें।",
        "मांगी गई जानकारी भरें। 2019 की खबरों के अनुसार नामांकन के लिए आधार नंबर ज़रूरी है (दोहरे रिकॉर्ड रोकने के लिए)।",
        "आवेदन जमा करें। रीजनल एम्प्लॉयमेंट एक्सचेंज इसे जांचकर मंज़ूर करता है।",
        "मंज़ूरी के बाद ऑनलाइन बना L&E कार्ड डाउनलोड/प्रिंट करें।"
      ],
      "callout": {
        "kind": "ok",
        "html": "ज़रूरी कागज़ों की सटीक सूची हमें सरकारी पेज पर नहीं मिली, इसलिए यहां नहीं दी। फॉर्म में दिखने वाली सूची देखें या पूछताछ के लिए कार्यालय से संपर्क करें: फोन 0832-2437276, ईमेल dir-empl.goa@nic.in, WhatsApp 7770040601 (नागरिक चार्टर में दिए संपर्क)।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण और बेरोज़गारी भत्ता",
      "list": [
        "नागरिक चार्टर के अनुसार नया ऑनलाइन L&E कार्ड जारी होने के बाद नवीनीकरण न होने से अमान्य नहीं होता।",
        "पुराने मैन्युअल कार्ड वाले लोगों के लिए 2019 में ऑनलाइन रिकॉर्ड सक्रिय करने की व्यवस्था थी (पुरानी खबर)। अपना कार्ड स्टेटस पक्का करने के लिए कार्यालय से पूछें।",
        "बेरोज़गारी भत्ते की कोई राशि हमें सरकारी स्रोत में नहीं मिली, इसलिए नहीं लिखी जा रही।"
      ]
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
            "पुराना मैन्युअल कार्ड है",
            "कार्यालय से पूछें कि ऑनलाइन रिकॉर्ड सक्रिय है या नहीं"
          ],
          [
            "आवेदन मंज़ूर नहीं हुआ",
            "रीजनल एम्प्लॉयमेंट एक्सचेंज, पणजी को फोन/ईमेल करें"
          ],
          [
            "कोई पैसे मांगे",
            "चार्टर के अनुसार कार्यालय की कोई फीस नहीं है; शिकायत के लिए कार्यालय से संपर्क करें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> GPSC, GSSC आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://www.goaonline.gov.in/",
      "title": "Goa Online: Labour and Employment Card"
    },
    {
      "href": "https://www.goa.gov.in/wp-content/uploads/2026/03/Citizen-Charter-REE-CLE.pdf",
      "title": "नागरिक चार्टर: रीजनल एम्प्लॉयमेंट एक्सचेंज, पणजी (PDF)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "गोवा में रोजगार कार्यालय का पंजीकरण कहां होता है?",
      "a": "goaonline.gov.in पर Labour and Employment Card सेवा से ऑनलाइन। आवेदन की जांच पणजी का रीजनल एम्प्लॉयमेंट एक्सचेंज करता है।"
    },
    {
      "q": "क्या पंजीकरण की फीस है?",
      "a": "नागरिक चार्टर के अनुसार रोजगार कार्यालय किसी भी सेवा की कोई फीस नहीं लेता।"
    },
    {
      "q": "क्या L&E कार्ड का नवीनीकरण करना पड़ता है?",
      "a": "चार्टर के अनुसार नया ऑनलाइन L&E कार्ड नवीनीकरण न होने से अमान्य नहीं होता।"
    },
    {
      "q": "कार्यालय से कैसे संपर्क करें?",
      "a": "फोन 0832-2437276, ईमेल dir-empl.goa@nic.in; पता: चौथी मंज़िल, श्रम शक्ति भवन, पट्टो प्लाज़ा, पणजी।"
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
      "href": "/states/goa-caste-certificate.html",
      "emoji": "📜",
      "title": "गोवा जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/goa-domicile-certificate.html",
      "emoji": "🏠",
      "title": "गोवा निवास प्रमाण पत्र",
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
      "href": "https://www.goaonline.gov.in/",
      "label": "📝 Goa Online पर L&E कार्ड"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
