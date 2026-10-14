import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - kamrup.assam.gov.in/departments/skill-employment-entrepreneurship
//   (District Employment Exchange, Kamrup): services, documents, card valid 3
//   years and renewal within 3 months of the renewal date, unemployment
//   certificate, NCS.
// - sewasetu.assam.gov.in service page "Registration of Employment Seeker in
//   Employment Exchange" and its Aadhaar / non-Aadhaar applicant user manuals
//   (seen in search results; the site is not reachable from our checker):
//   Aadhaar-based online route, non-Aadhaar route with physical verification
//   of originals, residents of Assam above 14 years.
// - ncs.gov.in (toll-free helpline 1514).
// Fees and any allowance were not found on an official page and are left out.
export const assamEmploymentExchange: DocGuide = {
  "state": {
    "slug": "assam",
    "hi": "असम"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Assam Employment Exchange 2026: Apply & Status",
  "description": "असम रोजगार कार्यालय (Employment Exchange) पंजीकरण 2026: Sewa Setu पर आधार आधारित/नॉन-आधार आवेदन, ज़रूरी कागज़, 3 साल में नवीनीकरण (ड्यू तारीख से 3 महीने के भीतर)।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "असम रोजगार कार्यालय पंजीकरण 2026: Sewa Setu पर आवेदन, कागज़ और नवीनीकरण",
  "lead": "असम में रोजगार कार्यालय का पंजीकरण कौशल, रोजगार एवं उद्यमिता विभाग के अंतर्गत होता है और आवेदन Sewa Setu पोर्टल की सेवा \"Registration of Employment Seeker in Employment Exchange\" से किया जा सकता है। आधार वाला रास्ता ऑनलाइन है; बिना आधार वाले रास्ते में मूल कागज़ों का भौतिक सत्यापन होता है। कार्ड 3 साल तक वैध रहता है और नवीनीकरण ड्यू तारीख से 3 महीने के भीतर करना होता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://sewasetu.assam.gov.in/site/service-apply/registration-of-employment-seeker-in-employment-exchange\" target=\"_blank\" rel=\"noopener nofollow\">Sewa Setu (रोजगार पंजीकरण सेवा)</a>"
    ],
    [
      "कौन",
      "असम के स्थायी निवासी, 14 साल से ऊपर"
    ],
    [
      "वैधता",
      "3 साल"
    ],
    [
      "नवीनीकरण",
      "ड्यू तारीख से 3 महीने के भीतर"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> समय पर नवीनीकरण न हो तो पंजीकरण रद्द हो सकता है। विभाग के नियमों के अनुसार ड्यू महीने और छूट अवधि के बाद नवीनीकरण का अनुरोध स्वीकार नहीं किया जाता।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोजगार कार्यालय पंजीकरण के फायदे",
      "intro": "ज़िला रोजगार कार्यालय (Kamrup) के पेज के अनुसार:",
      "list": [
        "उम्मीदवार का नाम रोजगार कार्यालय के लाइव रजिस्टर में रहता है और अधिसूचित रिक्तियों के लिए योग्यता, उम्र और श्रेणी के अनुसार नाम भेजा जाता है।",
        "सरकारी योजनाओं के तहत प्रशिक्षण/कोचिंग के लिए नाम भेजने की पात्रता।",
        "स्वरोज़गार के लिए करियर गाइडेंस।",
        "कार्यालय बेरोज़गारी प्रमाण पत्र और असम के स्थानीय लोगों के लिए रोज़गार प्रमाण पत्र भी जारी करता है।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "kagaz",
      "title": "क्या-क्या तैयार रखें",
      "intro": "ज़िला रोजगार कार्यालय के पेज पर आधार आधारित और बिना आधार, दोनों पंजीकरण के लिए ये कागज़ लिखे हैं:",
      "list": [
        "<strong>पहचान:</strong> आधार / पैन / ड्राइविंग लाइसेंस / वोटर ID में से कोई",
        "<strong>निवास का प्रमाण</strong>",
        "<strong>शैक्षिक योग्यता का प्रमाण पत्र</strong> और अतिरिक्त योग्यता का प्रमाण पत्र",
        "<strong>उम्र का प्रमाण</strong> (जन्म प्रमाण पत्र / HSLC एडमिट कार्ड / स्कूल सर्टिफिकेट)",
        "अनुभव प्रमाण पत्र (अगर हो) और जाति प्रमाण पत्र (अगर लागू)",
        "<strong>फोटो</strong>"
      ]
    },
    {
      "id": "online",
      "title": "आवेदन कैसे करें",
      "steps": [
        "Sewa Setu पर <a href=\"https://sewasetu.assam.gov.in/site/service-apply/registration-of-employment-seeker-in-employment-exchange\" target=\"_blank\" rel=\"noopener nofollow\">Registration of Employment Seeker in Employment Exchange</a> सेवा खोलें।",
        "<strong>आधार वाला रास्ता:</strong> सिर्फ वे लोग ऑनलाइन नाम दर्ज कर सकते हैं जिनके आधार में असम का स्थायी पता है। फॉर्म भरकर कागज़ अपलोड करें।",
        "<strong>बिना आधार वाला रास्ता:</strong> आवेदन के साथ मूल कागज़ों के भौतिक सत्यापन के लिए अगला उपलब्ध समय-स्लॉट चुनें और उस दिन रोजगार कार्यालय जाएं।",
        "पोर्टल की यूज़र मैनुअल के अनुसार आप Public Facilitation Center (PFC) से भी आवेदन करवा सकते हैं।"
      ],
      "callout": {
        "kind": "warn",
        "html": "फीस की जानकारी हमें सरकारी पेज पर नहीं मिली, इसलिए नहीं लिख रहे। PFC पर शुल्क लगे तो पहले पूछ लें। पोर्टल का पता विभाग के पेजों पर employmentassam.gov.in / employment.assam.gov.in दोनों रूपों में मिलता है, इसलिए Sewa Setu की सेवा से या अपने ज़िला रोजगार कार्यालय से शुरू करना सुरक्षित है।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण",
      "list": [
        "कार्ड <strong>3 साल</strong> तक वैध रहता है।",
        "नवीनीकरण <strong>ड्यू तारीख से 3 महीने के भीतर</strong> करना होता है।",
        "विभाग के नियम के अनुसार छूट अवधि के बाद भी नवीनीकरण न कराने पर पंजीकरण रद्द हो जाता है।",
        "बेरोज़गारी भत्ते की कोई राशि हमें सरकारी पेज पर नहीं मिली, इसलिए नहीं लिखी जा रही।"
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
            "आधार में असम का पता नहीं है",
            "बिना आधार वाले रास्ते से आवेदन करें और मूल कागज़ों से सत्यापन कराएं"
          ],
          [
            "नवीनीकरण की तारीख निकल गई",
            "तुरंत अपने ज़िला रोजगार कार्यालय से पूछें; छूट अवधि के बाद अनुरोध नहीं माना जाता"
          ],
          [
            "ऑनलाइन में दिक्कत",
            "PFC या ज़िला रोजगार कार्यालय से मदद लें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> ADRE, APSC आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://sewasetu.assam.gov.in/site/service-apply/registration-of-employment-seeker-in-employment-exchange",
      "title": "Sewa Setu: रोजगार कार्यालय पंजीकरण सेवा"
    },
    {
      "href": "https://kamrup.assam.gov.in/departments/skill-employment-entrepreneurship",
      "title": "ज़िला रोजगार कार्यालय, कामरूप: सेवाएं और कागज़"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "असम में रोजगार कार्यालय में पंजीकरण कहां करें?",
      "a": "Sewa Setu पोर्टल की \"Registration of Employment Seeker in Employment Exchange\" सेवा से, या अपने ज़िला रोजगार कार्यालय में।"
    },
    {
      "q": "कौन पंजीकरण करा सकता है?",
      "a": "पोर्टल के दिशानिर्देशों के अनुसार असम के स्थायी निवासी, भारतीय नागरिक, 14 साल से ऊपर। ऑनलाइन आधार वाले रास्ते के लिए आधार में असम का स्थायी पता होना चाहिए।"
    },
    {
      "q": "नवीनीकरण कब करना होता है?",
      "a": "कार्ड 3 साल तक वैध है और नवीनीकरण ड्यू तारीख से 3 महीने के भीतर करना होता है।"
    },
    {
      "q": "आधार नहीं है तो क्या करें?",
      "a": "बिना आधार वाला रास्ता है, जिसमें मूल कागज़ों का भौतिक सत्यापन रोजगार कार्यालय में होता है।"
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
      "href": "/states/assam-caste-certificate.html",
      "emoji": "📜",
      "title": "असम जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/assam-domicile-certificate.html",
      "emoji": "🏠",
      "title": "असम निवास प्रमाण पत्र",
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
      "href": "https://sewasetu.assam.gov.in/site/service-apply/registration-of-employment-seeker-in-employment-exchange",
      "label": "📝 Sewa Setu पर आवेदन"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
