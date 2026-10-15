import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; consistent with jharkhand-birth-certificate.ts):
// - dhanbad.nic.in/service/death-certificate/ (fetched): links dc.crsorgi.gov.in/crs/home. (Its
//   line that the certificate states the cause of death is not used: s.17 forbids it.)
// - jharsewa.jharkhand.gov.in (reachable); Pragya Kendra route from the birth guide's district
//   pages.
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
// Left out (not confirmable on an official page we could open): fee amounts, service time limit, rural registrar designation, home-death document list.
export const jharkhandDeathCertificate: DocGuide = {
  "state": {
    "slug": "jharkhand",
    "hi": "झारखंड"
  },
  "doc": "death-certificate",
  "docHi": "मृत्यु प्रमाण पत्र",
  "title": "Jharkhand Death Certificate 2026: Apply & Status",
  "description": "झारखंड मृत्यु प्रमाण पत्र 2026: CRS पोर्टल, JharSewa और प्रज्ञा केंद्र, 21 दिन की सीमा, MCCD, ज़रूरी कागज़, देर से पंजीकरण के नए नियम और डाउनलोड।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "झारखंड मृत्यु प्रमाण पत्र 2026: CRS पोर्टल, प्रज्ञा केंद्र, कागज़ और देर से पंजीकरण",
  "lead": "झारखंड में मृत्यु प्रमाण पत्र के लिए ज़िला सरकारी पेज (जैसे धनबाद) केंद्र का CRS पोर्टल (dc.crsorgi.gov.in) बताते हैं; राज्य का JharSewa पोर्टल और प्रज्ञा केंद्र भी आवेदन में मदद करते हैं। मृत्यु की सूचना 21 दिन में उस जगह के रजिस्ट्रार को देनी है जहां मृत्यु हुई; इस अवधि में पंजीकरण और पहली प्रति मुफ्त है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://dc.crsorgi.gov.in/crs/home\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in</a> और <a href=\"https://jharsewa.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jharsewa.jharkhand.gov.in</a>"
    ],
    [
      "कहां",
      "प्रज्ञा केंद्र / CSC / रजिस्ट्रार कार्यालय"
    ],
    [
      "समय सीमा",
      "मृत्यु के 21 दिन के भीतर, मुफ्त"
    ],
    [
      "अस्पताल",
      "MCCD की मुफ्त प्रति परिवार को"
    ]
  ],
  "sections": [
    {
      "id": "kab",
      "title": "कब तक पंजीकरण कराएं, देर होने पर क्या",
      "intro": "मृत्यु की सूचना <strong>21 दिन के भीतर</strong> उस जगह के रजिस्ट्रार को देनी होती है <strong>जहां मृत्यु हुई</strong> (मृतक का स्थायी पता नहीं)। अस्पताल में मृत्यु हो तो सूचना देने की ज़िम्मेदारी अस्पताल के प्रभारी की है; घर पर हो तो घर के मुखिया या पास मौजूद सबसे नज़दीकी रिश्तेदार की।",
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
            "विलंब शुल्क देकर पंजीकरण (राशि राज्य के नियमों से तय; रजिस्ट्रार से पूछें)"
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
      "intro": "धनबाद ज़िले का मृत्यु प्रमाण पत्र सेवा पेज आवेदन के लिए केंद्र का CRS पोर्टल बताता है। झारखंड का e-District सिस्टम JharSewa के नाम से चलता है और ज़िला पेज प्रज्ञा केंद्र से आवेदन का रास्ता बताते हैं।",
      "steps": [
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल सूचना भेजता है। उससे MCCD की प्रति लें और पूछें कि CRS पर पंजीकरण हुआ या नहीं।",
        "<strong>घर पर मृत्यु:</strong> 21 दिन के भीतर अपने क्षेत्र के रजिस्ट्रार (पंचायत/नगर निकाय) को सूचना दें, या नज़दीकी प्रज्ञा केंद्र/CSC से आवेदन कराएं। राज्य पोर्टल: <a href=\"https://jharsewa.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">JharSewa</a>।",
        "केंद्र का CRS पोर्टल: <a href=\"https://dc.crsorgi.gov.in/crs/home\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in</a>। इलाके में कौन सा रास्ता चालू है, यह प्रज्ञा केंद्र/ज़िला कार्यालय से पूछें।",
        "पावती और पंजीकरण संख्या रखें।"
      ]
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>मृत्यु की सूचना का फॉर्म</strong> (रजिस्ट्रार कार्यालय/केंद्र पर मिलता है या ऑनलाइन भरा जाता है)",
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल की मृत्यु रिपोर्ट और MCCD की प्रति (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)",
        "<strong>घर पर मृत्यु:</strong> मृत्यु की सूचना; डॉक्टर इलाज कर रहे थे तो उनका MCCD; कार्यालय जो स्थानीय सत्यापन मांगे (जैसे वार्ड पार्षद/मुखिया का पत्र या शपथ-पत्र)",
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
        "केंद्र के मॉडल फॉर्म में मृत्यु की सूचना <strong>फॉर्म 2</strong> है, और मृत्यु के कारण का प्रमाण पत्र <strong>फॉर्म 4</strong> (अस्पताल में भर्ती मरीज़) और <strong>फॉर्म 4A</strong> (अस्पताल के बाहर मृत्यु) है। राज्य के नियमों में नंबर अलग हो सकता है।"
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
        "<strong>डाउनलोड:</strong> पंजीकरण के बाद सर्टिफिकेट CRS पोर्टल <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>, JharSewa या प्रज्ञा केंद्र से मिलता है।",
        "<strong>शिकायत:</strong> पहले आवेदन वाले कार्यालय में, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर लिखित शिकायत करें।",
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
      "href": "https://dc.crsorgi.gov.in/crs/home",
      "title": "CRS पोर्टल (धनबाद ज़िला पेज में दिया लिंक)"
    },
    {
      "href": "https://dhanbad.nic.in/service/death-certificate/",
      "title": "धनबाद ज़िला: मृत्यु प्रमाण पत्र सेवा पेज"
    },
    {
      "href": "https://jharsewa.jharkhand.gov.in/",
      "title": "JharSewa (झारखंड e-District)"
    },
    {
      "href": "https://pgportal.gov.in/",
      "title": "CPGRAMS (शिकायत)"
    }
  ],
  "faq": [
    {
      "q": "झारखंड में मृत्यु प्रमाण पत्र ऑनलाइन कहां मिलता है?",
      "a": "ज़िला सरकारी पेज (जैसे धनबाद) केंद्र का CRS पोर्टल dc.crsorgi.gov.in बताते हैं। प्रज्ञा केंद्र/CSC से भी आवेदन करा सकते हैं।"
    },
    {
      "q": "क्या मृत्यु प्रमाण पत्र के लिए अस्पताल से कुछ लेना ज़रूरी है?",
      "a": "हां, अस्पताल में मृत्यु हुई हो तो अस्पताल को मृत्यु के कारण का मेडिकल प्रमाण पत्र (MCCD) रजिस्ट्रार को भेजना है और उसकी एक प्रति मुफ्त में सबसे नज़दीकी रिश्तेदार को देनी है। यह प्रति ज़रूर लें।"
    },
    {
      "q": "झारखंड में मृत्यु का पंजीकरण कितने दिन में कराना चाहिए?",
      "a": "मृत्यु के 21 दिन के भीतर, उस जगह के रजिस्ट्रार के पास जहां मृत्यु हुई। इस अवधि में पंजीकरण और पहली प्रति मुफ्त है। "
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
      "href": "/states/jharkhand-birth-certificate.html",
      "emoji": "👶",
      "title": "झारखंड जन्म प्रमाण पत्र",
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
      "href": "https://dc.crsorgi.gov.in/crs/home",
      "label": "📝 CRS पोर्टल"
    },
    {
      "href": "/service/death-certificate.html",
      "label": "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
