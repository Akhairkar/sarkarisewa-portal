import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; consistent with haryana-birth-certificate.ts):
// - haryanahealth.gov.in/service/civil-registration-system/ (fetched; last updated 26 Aug 2025):
//   Haryana Registration of Births and Deaths Rules 2025; who must report; 21 days; Forms 1, 3, 4
//   for birth, death, still birth; free copy at registration; place of occurrence; late fees
//   21-30 days Rs 10, 31 days-1 year Rs 25, >1 year Rs 50; search Rs 20/year; copy Rs 50.
// - saralharyana.gov.in service 'Application for Delayed Birth/Death Registration' (search result,
//   as in the birth guide).
// - hisar.gov.in/service/apply-for-death-certificate/ (fetched): Haryana rules, 21 days, Saral link.
// National facts (checked 14 Oct 2026):
// - RBD (Amendment) Act 2023 (Gazette, 11 Aug 2023) and S.O. 4058(E) of 13 Sep 2023 (in force
//   1 Oct 2023): s.10 free medical certificate of cause of death from every medical institution to
//   the Registrar with a copy to the nearest relative, and from the attending doctor for deaths
//   outside an institution; s.12 free certificate within 7 days of registration; s.13(2) written
//   permission of the District Registrar, fee and self-attested document for 30 days-1 year;
//   s.17 no certificate shows the cause of death; s.25A appeals.
// - RBD (Amendment) Act 2026 (No. 12 of 2026, Gazette 6 Aug 2026) and S.O. 5081(E) of 16 Sep 2026
//   (in force 1 Oct 2026); also newsonair.gov.in and ThePrint/PTI reports: 1-2 years DM/SDM or
//   authorised Executive Magistrate order; over 2 years Judicial Magistrate of the First Class.
// - CRS FAQ (crsorgi.gov.in): 21 days; free within 21 days; who reports a death (head of household
//   / medical officer in charge); registration at the place of the event; one free copy (s.12),
//   further copies on fee (s.17); corrections under s.15; s.25A appeal to District Registrar /
//   Chief Registrar within 30 days, decision within 90 days; uses of a death certificate.
// - CRS model forms (crsorgi.gov.in): Form 2 death report, Form 4 MCCD (hospital in-patients),
//   Form 4A MCCD (non-institutional deaths).
// - RGI advisory of 13 Oct 2025 (crsorgi.gov.in circulars): look-alike phishing portals issuing fake
//   certificates; type the official URL rather than using a search engine.
// Left out (not confirmable on an official page we could open): registrar designations by area, SARAL document list and time limit, whether the late fees stack with the 2026 magistrate-order fee.
export const haryanaDeathCertificate: DocGuide = {
  "state": {
    "slug": "haryana",
    "hi": "हरियाणा"
  },
  "doc": "death-certificate",
  "docHi": "मृत्यु प्रमाण पत्र",
  "title": "Haryana Death Certificate 2026: Apply & Status",
  "description": "हरियाणा मृत्यु प्रमाण पत्र 2026: 21 दिन की सीमा, विलंब शुल्क ₹10/₹25/₹50, प्रति ₹50, फॉर्म नंबर 3, SARAL पर देर से पंजीकरण, MCCD और 2026 के नए नियम।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "हरियाणा मृत्यु प्रमाण पत्र 2026: फॉर्म 3, विलंब शुल्क, देर से पंजीकरण और कॉपी",
  "lead": "हरियाणा में मृत्यु का पंजीकरण जन्म-मृत्यु पंजीकरण अधिनियम 1969 और हरियाणा जन्म-मृत्यु पंजीकरण नियम 2025 के तहत होता है। मृत्यु की सूचना फॉर्म नंबर 3 पर 21 दिन के भीतर मृत्यु की जगह के रजिस्ट्रार को देनी है; उसी समय सर्टिफिकेट की मुफ्त प्रति मिलती है। स्वास्थ्य विभाग की सूची में विलंब शुल्क 21-30 दिन पर ₹10, 31 दिन से 1 साल पर ₹25 और 1 साल के बाद ₹50 है।",
  "facts": [
    [
      "समय सीमा",
      "मृत्यु के 21 दिन के भीतर (मुफ्त प्रति)"
    ],
    [
      "फॉर्म",
      "मृत्यु की सूचना: फॉर्म नंबर 3"
    ],
    [
      "विलंब शुल्क",
      "21-30 दिन ₹10; 31 दिन-1 साल ₹25; 1 साल बाद ₹50"
    ],
    [
      "सर्टिफिकेट प्रति",
      "₹50 प्रति कॉपी; रिकॉर्ड खोज ₹20 प्रति वर्ष"
    ]
  ],
  "sections": [
    {
      "id": "kab",
      "title": "कब तक पंजीकरण कराएं, देर होने पर क्या",
      "intro": "मृत्यु की सूचना <strong>21 दिन के भीतर</strong> उस जगह के रजिस्ट्रार को देनी होती है <strong>जहां मृत्यु हुई</strong> (मृतक का स्थायी पता नहीं)। अस्पताल में मृत्यु हो तो सूचना देने की ज़िम्मेदारी अस्पताल के प्रभारी की है; घर पर हो तो घर के मुखिया या पास मौजूद सबसे नज़दीकी रिश्तेदार की। हरियाणा स्वास्थ्य विभाग की सूची में 31 दिन से 1 साल पर ₹25 और 1 साल के बाद ₹50 विलंब शुल्क है; अनुमति/आदेश की शर्तें नीचे तालिका के अनुसार अलग से लागू होती हैं।",
      "table": {
        "head": [
          "मृत्यु के बाद",
          "क्या लगेगा"
        ],
        "rows": [
          [
            "मृत्यु के <strong>21 दिन के भीतर</strong>",
            "पंजीकरण मुफ्त; पंजीकरण के बाद 7 दिन के भीतर पहला प्रमाण पत्र भी मुफ्त (धारा 12)"
          ],
          [
            "21 से 30 दिन",
            "₹10 विलंब शुल्क (हरियाणा स्वास्थ्य विभाग की सूची)"
          ],
          [
            "30 दिन से 1 साल",
            "ज़िला रजिस्ट्रार या निर्धारित अधिकारी की लिखित अनुमति, स्व-प्रमाणित दस्तावेज़ और शुल्क"
          ],
          [
            "1 से 2 साल",
            "ज़िला मजिस्ट्रेट (DM), SDM या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और शुल्क"
          ],
          [
            "2 साल के बाद",
            "प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश और शुल्क"
          ]
        ]
      },
      "callout": {
        "kind": "warn",
        "html": "<strong>1 अक्टूबर 2026 से नया नियम:</strong> जन्म और मृत्यु पंजीकरण (संशोधन) अधिनियम, 2026 लागू हो गया है। अब 1 से 2 साल की देरी पर DM, SDM या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और <strong>2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट</strong> का आदेश लगता है। इसलिए पंजीकरण 21 दिन में ही करा लें।"
      }
    },
    {
      "id": "kahan",
      "title": "कहां और कैसे आवेदन करें",
      "intro": "हरियाणा स्वास्थ्य विभाग के अनुसार मृत्यु की सूचना देने की ज़िम्मेदारी घर के मुखिया (घर पर मृत्यु), अस्पताल प्रभारी (अस्पताल में मृत्यु), छात्रावास/जेल/धर्मशाला प्रभारी (वहां मृत्यु) और सार्वजनिक जगह पर लावारिस शव मिलने पर थाने के जांच अधिकारी की है। पंजीकरण मृत्यु की जगह पर होता है।",
      "steps": [
        "मृत्यु की सूचना <strong>फॉर्म नंबर 3</strong> पर दी जाती है। फॉर्म स्वास्थ्य विभाग की साइट <a href=\"https://haryanahealth.gov.in/service/civil-registration-system/\" target=\"_blank\" rel=\"noopener nofollow\">haryanahealth.gov.in</a> पर मिलते हैं।",
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल सूचना भेजता है। उससे MCCD की प्रति और पंजीकरण संख्या पूछें।",
        "<strong>घर पर मृत्यु:</strong> फॉर्म 3 भरकर अपने क्षेत्र के रजिस्ट्रार को 21 दिन में दें। ज़िला पेज (हिसार, पंचकूला आदि) ऑनलाइन रास्ते के रूप में <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> बताते हैं।",
        "<strong>देर से पंजीकरण:</strong> SARAL पोर्टल <a href=\"https://saralharyana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">saralharyana.gov.in</a> पर 'Application for Delayed Birth/Death Registration' सेवा दर्ज है। 1 साल से ज़्यादा देरी पर ऊपर तालिका के अनुसार मजिस्ट्रेट का आदेश लगेगा।"
      ]
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>मृत्यु की सूचना का फॉर्म</strong> (रजिस्ट्रार कार्यालय/केंद्र पर मिलता है या ऑनलाइन भरा जाता है)",
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल की मृत्यु रिपोर्ट और MCCD की प्रति (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)",
        "<strong>घर पर मृत्यु:</strong> भरा हुआ फॉर्म नंबर 3; डॉक्टर इलाज कर रहे थे तो उनका MCCD; कार्यालय जो स्थानीय सत्यापन मांगे (जैसे सरपंच/पार्षद का पत्र)",
        "<strong>मृतक का पहचान प्रमाण</strong> (आधार, मतदाता पहचान पत्र आदि, जो हो) और <strong>सूचना देने वाले का पहचान व पते का प्रमाण</strong>",
        "<strong>देर से पंजीकरण:</strong> शपथ-पत्र या स्व-प्रमाणित दस्तावेज़, \"रिकॉर्ड उपलब्ध नहीं\" का प्रमाण और देरी के हिसाब से अधिकारी की अनुमति या मजिस्ट्रेट का आदेश"
      ]
    },
    {
      "id": "mccd",
      "title": "मृत्यु के कारण का मेडिकल प्रमाण पत्र (फॉर्म 4/4A)",
      "intro": "2023 के संशोधन (धारा 10) के बाद यह नियम है:",
      "list": [
        "<strong>अस्पताल में मृत्यु:</strong> हर अस्पताल, सरकारी हो या निजी, इलाज करने वाले डॉक्टर के हस्ताक्षर वाला मृत्यु के कारण का प्रमाण पत्र (MCCD) <strong>मुफ्त</strong> रजिस्ट्रार को भेजता है और <strong>एक प्रति सबसे नज़दीकी रिश्तेदार को</strong> देता है। यह प्रति ज़रूर मांगें।",
        "<strong>अस्पताल के बाहर मृत्यु, जब डॉक्टर इलाज कर रहे थे:</strong> वह डॉक्टर मृत्यु के बाद यह प्रमाण पत्र मुफ्त देता है। परिवार इसे मृत्यु की सूचना के साथ रजिस्ट्रार को देता है।",
        "हरियाणा स्वास्थ्य विभाग के अनुसार राज्य के नियमों में जन्म, मृत्यु और मृत जन्म की सूचना क्रमशः फॉर्म नंबर 1, 3 और 4 पर दी जाती है। मृत्यु के कारण का मेडिकल प्रमाण पत्र अस्पताल/डॉक्टर अपने तय फॉर्म में देते हैं।"
      ],
      "callout": {
        "kind": "info",
        "html": "मृत्यु प्रमाण पत्र पर <strong>मृत्यु का कारण नहीं छपता</strong>। कानून (धारा 17) के अनुसार किसी को जारी प्रमाण पत्र में रजिस्टर में दर्ज कारण नहीं दिखाया जाता। कारण का कागज़ चाहिए तो अस्पताल या डॉक्टर से मिली MCCD की प्रति संभालकर रखें।"
      }
    },
    {
      "id": "download",
      "title": "सर्टिफिकेट डाउनलोड, सुधार और अपील",
      "list": [
        "<strong>प्रति और खोज:</strong> स्वास्थ्य विभाग की सूची में सर्टिफिकेट की प्रति ₹50 और रिकॉर्ड खोज ₹20 प्रति वर्ष है। ऑनलाइन कॉपी के लिए <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> देखें।",
        "<strong>शिकायत:</strong> SARAL की सेवा में देरी हो तो पहले उसी कार्यालय में लिखित शिकायत करें, फिर हरियाणा सेवा का अधिकार आयोग (haryana-rtsc.gov.in) से अपील की जा सकती है।",
        "<strong>गलती सुधार:</strong> नाम, तारीख या पते की गलती अधिनियम की धारा 15 के तहत ठीक हो सकती है। रजिस्ट्रार कार्यालय में सबूत के साथ आवेदन दें।",
        "<strong>ज़्यादा प्रतियां:</strong> पहली प्रति मुफ्त है; बाद की प्रतियां शुल्क देकर (धारा 17) रजिस्ट्रार से मिलती हैं। बीमा, बैंक और संपत्ति के लिए 3-4 प्रतियां एक साथ ले लें।",
        "<strong>अपील (धारा 25A):</strong> रजिस्ट्रार के फैसले से असहमत हों तो <strong>30 दिन के भीतर</strong> ज़िला रजिस्ट्रार को अपील करें; ज़िला रजिस्ट्रार के फैसले के खिलाफ मुख्य रजिस्ट्रार को। अपील का फैसला 90 दिन में होना है।"
      ]
    },
    {
      "id": "kaam",
      "title": "मृत्यु प्रमाण पत्र कहां काम आता है",
      "list": [
        "संपत्ति के <strong>उत्तराधिकार</strong> और नामांतरण (दाखिल-खारिज) के लिए",
        "<strong>बीमा क्लेम</strong> और कंपनियों से बकाया रकम लेने के लिए",
        "बैंक खाता, पेंशन और दूसरी सरकारी योजनाओं में नाम हटाने या लाभ परिवार को देने के लिए"
      ],
      "callout": {
        "kind": "warn",
        "html": "भारत के महारजिस्ट्रार ने अक्टूबर 2025 में चेताया है कि असली पोर्टल जैसी दिखने वाली <strong>नकली वेबसाइटें</strong> फर्जी जन्म-मृत्यु प्रमाण पत्र बना रही हैं। सरकारी पोर्टल का पता खुद टाइप करें, सर्च इंजन के लिंक या एजेंट के भरोसे न रहें। फर्जी प्रमाण पत्र से बाद में बीमा या संपत्ति का काम अटक सकता है।"
      }
    }
  ],
  "official": [
    {
      "href": "https://haryanahealth.gov.in/service/civil-registration-system/",
      "title": "हरियाणा स्वास्थ्य विभाग: सिविल रजिस्ट्रेशन सिस्टम, फॉर्म और फीस"
    },
    {
      "href": "https://saralharyana.gov.in/",
      "title": "SARAL हरियाणा (देर से पंजीकरण सेवा)"
    },
    {
      "href": "https://hisar.gov.in/service/apply-for-death-certificate/",
      "title": "हिसार ज़िला: जन्म/मृत्यु प्रमाण पत्र सेवा पेज"
    },
    {
      "href": "https://crsorgi.gov.in/",
      "title": "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल"
    },
    {
      "href": "https://haryana-rtsc.gov.in/",
      "title": "हरियाणा सेवा का अधिकार आयोग"
    }
  ],
  "faq": [
    {
      "q": "हरियाणा में मृत्यु पंजीकरण में देर हो जाए तो कितना शुल्क लगता है?",
      "a": "हरियाणा स्वास्थ्य विभाग की सूची के अनुसार 21-30 दिन पर ₹10, 31 दिन से 1 साल पर ₹25 और 1 साल के बाद ₹50। 30 दिन के बाद अनुमति और 1 साल के बाद मजिस्ट्रेट का आदेश भी लगता है।"
    },
    {
      "q": "हरियाणा में मृत्यु प्रमाण पत्र की एक और कॉपी कितने की है?",
      "a": "स्वास्थ्य विभाग की सूची में ₹50 प्रति कॉपी। पुराना रिकॉर्ड खोजना हो तो ₹20 प्रति वर्ष खोज शुल्क है।"
    },
    {
      "q": "हरियाणा में मृत्यु की सूचना किस फॉर्म पर देनी है?",
      "a": "फॉर्म नंबर 3 पर (हरियाणा जन्म-मृत्यु पंजीकरण नियम 2025, स्वास्थ्य विभाग की साइट)। फॉर्म haryanahealth.gov.in पर मिलते हैं।"
    },
    {
      "q": "हरियाणा में मृत्यु का पंजीकरण कितने दिन में कराना चाहिए?",
      "a": "मृत्यु के 21 दिन के भीतर, उस जगह के रजिस्ट्रार के पास जहां मृत्यु हुई। इस अवधि में पंजीकरण और पहली प्रति मुफ्त है। हरियाणा में 21-30 दिन पर ₹10 विलंब शुल्क है।"
    },
    {
      "q": "1 या 2 साल बाद मृत्यु प्रमाण पत्र कैसे बनेगा?",
      "a": "1 अक्टूबर 2026 से लागू संशोधन के अनुसार 1 से 2 साल की देरी पर DM, SDM या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश लगता है और 2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश। आदेश के बाद रजिस्ट्रार पंजीकरण करता है। 30 दिन से 1 साल तक ज़िला रजिस्ट्रार की लिखित अनुमति काफी है।"
    },
    {
      "q": "मृत्यु प्रमाण पत्र में मृत्यु का कारण क्यों नहीं लिखा होता?",
      "a": "कानून (धारा 17) के अनुसार जारी प्रमाण पत्र में मृत्यु का कारण नहीं दिखाया जाता। कारण अस्पताल या डॉक्टर के मेडिकल प्रमाण पत्र (MCCD) में होता है, जिसकी एक प्रति अस्पताल को सबसे नज़दीकी रिश्तेदार को मुफ्त देनी होती है।"
    }
  ],
  "related": [
    {
      "href": "/service/death-certificate.html",
      "emoji": "🕊️",
      "title": "मृत्यु प्रमाण पत्र: पूरी जानकारी",
      "text": "सभी राज्य"
    },
    {
      "href": "/states/haryana-birth-certificate.html",
      "emoji": "👶",
      "title": "हरियाणा जन्म प्रमाण पत्र",
      "text": "पंजीकरण और सर्टिफिकेट"
    },
    {
      "href": "/affidavit/self-declaration.html",
      "emoji": "✍️",
      "title": "स्व-घोषणा / शपथ-पत्र",
      "text": "देर से पंजीकरण में काम आता है"
    },
    {
      "href": "/affidavit/lost-document.html",
      "emoji": "📄",
      "title": "खोए कागज़ का एफिडेविट",
      "text": "प्रमाण पत्र खो जाए तो"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Document Resizer",
      "text": "अपलोड के साइज़ में, फ्री"
    },
    {
      "href": "/tools/csc-locator.html",
      "emoji": "📍",
      "title": "नज़दीकी CSC केंद्र",
      "text": "ऑनलाइन आवेदन में मदद"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में मृत्यु प्रमाण पत्र",
  "aside": [
    {
      "href": "https://saralharyana.gov.in/",
      "label": "📝 SARAL हरियाणा"
    },
    {
      "href": "https://haryanahealth.gov.in/service/civil-registration-system/",
      "label": "📄 फॉर्म और फीस (स्वास्थ्य विभाग)"
    }
  ]
};
