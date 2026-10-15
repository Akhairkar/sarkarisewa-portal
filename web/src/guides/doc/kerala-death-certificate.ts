import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; consistent with kerala-birth-certificate.ts):
// - lsgd.kerala.gov.in/en/birth-registration/ (fetched; covers births and deaths): Kerala Rules
//   1999; 941 gram panchayats, 87 municipalities, 6 corporations, Kannur Cantonment; K-SMART and
//   ILGMS; mobile, Akshaya, front office; 21 days; 21-30 days Rs 2; 30 days-1 year district
//   registrar (panchayats) / municipal secretary; after 1 year RDO (superseded by the 2026 Act
//   for delays over 2 years); pre-1970 records via Chief Registrar; s.15; death certificate download
//   by date of death and name of the deceased; grievance line 0471-2727255.
// - ksmart.lsgkerala.gov.in (reachable).
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
// Left out (not confirmable on an official page we could open): fees for 30 days-1 year and later, copy fees, ILGMS citizen portal URL.
export const keralaDeathCertificate: DocGuide = {
  "state": {
    "slug": "kerala",
    "hi": "केरल"
  },
  "doc": "death-certificate",
  "docHi": "मृत्यु प्रमाण पत्र",
  "title": "Kerala Death Certificate 2026: Apply & Status",
  "description": "केरल मृत्यु प्रमाण पत्र 2026: K-SMART (नगर पालिका/निगम) और ILGMS (ग्राम पंचायत) से पंजीकरण व डाउनलोड, 21 दिन की सीमा, ₹2 विलंब शुल्क, MCCD और 2026 के नए नियम।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "केरल मृत्यु प्रमाण पत्र 2026: K-SMART / ILGMS, देर से पंजीकरण और डाउनलोड",
  "lead": "केरल में मृत्यु का पंजीकरण स्थानीय निकाय की ऑनलाइन प्रणाली से होता है: नगर पालिका और नगर निगम में K-SMART और ग्राम पंचायत में ILGMS। आवेदन मोबाइल, अक्षय केंद्र या निकाय के फ्रंट ऑफिस से हो सकता है। मृत्यु की सूचना 21 दिन में देनी है; सर्टिफिकेट सिटिज़न पोर्टल पर मृत्यु की तारीख और मृतक का नाम डालकर डाउनलोड होता है।",
  "facts": [
    [
      "प्रणाली",
      "नगर निकाय: K-SMART; ग्राम पंचायत: ILGMS"
    ],
    [
      "आवेदन कैसे",
      "मोबाइल, अक्षय केंद्र या निकाय का फ्रंट ऑफिस"
    ],
    [
      "समय सीमा",
      "मृत्यु के 21 दिन के भीतर; 21-30 दिन पर ₹2"
    ],
    [
      "डाउनलोड",
      "मृत्यु की तारीख और मृतक का नाम डालकर"
    ]
  ],
  "sections": [
    {
      "id": "kab",
      "title": "कब तक पंजीकरण कराएं, देर होने पर क्या",
      "intro": "मृत्यु की सूचना <strong>21 दिन के भीतर</strong> उस जगह के रजिस्ट्रार को देनी होती है <strong>जहां मृत्यु हुई</strong> (मृतक का स्थायी पता नहीं)। अस्पताल में मृत्यु हो तो सूचना देने की ज़िम्मेदारी अस्पताल के प्रभारी की है; घर पर हो तो घर के मुखिया या पास मौजूद सबसे नज़दीकी रिश्तेदार की। केरल LSGD के अनुसार 30 दिन से 1 साल की देरी पर ग्राम पंचायत के लिए ज़िला जन्म-मृत्यु रजिस्ट्रार और नगर पालिका/निगम के लिए नगर सचिव अनुमति देते हैं।",
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
            "₹2 विलंब शुल्क देकर पंजीकरण इकाई में (LSGD केरल)"
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
      "intro": "स्थानीय स्वशासन विभाग (LSGD) के अनुसार केरल में 941 ग्राम पंचायतें, 87 नगर पालिकाएं, 6 नगर निगम और कन्नूर कैंटोनमेंट बोर्ड पंजीकरण इकाइयां हैं। मृत्यु उसी इकाई में दर्ज होती है जहां मृत्यु हुई।",
      "steps": [
        "मृत्यु की सूचना 21 दिन के भीतर संबंधित स्थानीय निकाय (पंचायत/नगर पालिका/निगम) को दें। अस्पताल में मृत्यु हो तो अस्पताल सूचना भेजता है।",
        "आवेदन मोबाइल फोन, <strong>अक्षय केंद्र</strong> या निकाय के फ्रंट ऑफिस से किया जा सकता है।",
        "नगर पालिका/निगम में प्रणाली <strong>K-SMART</strong> है; ग्राम पंचायत में <strong>ILGMS</strong>। दोनों इन्फॉर्मेशन केरल मिशन ने बनाए हैं।",
        "देर होने पर ऊपर तालिका के अनुसार अनुमति या आदेश लें। 1970 से पहले के पंजीकरण में सुधार मुख्य रजिस्ट्रार की अनुमति से होता है (LSGD)।"
      ]
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>मृत्यु की सूचना का फॉर्म</strong> (रजिस्ट्रार कार्यालय/केंद्र पर मिलता है या ऑनलाइन भरा जाता है)",
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल की मृत्यु रिपोर्ट और MCCD की प्रति (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)",
        "<strong>घर पर मृत्यु:</strong> मृत्यु की सूचना; डॉक्टर इलाज कर रहे थे तो उनका MCCD; निकाय जो स्थानीय सत्यापन मांगे (जैसे वार्ड सदस्य का पत्र)",
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
        "<strong>नगर पालिका/निगम का सर्टिफिकेट:</strong> K-SMART सिटिज़न पोर्टल के 'Certificate Search' मेन्यू में मृत्यु की तारीख और मृतक का नाम डालकर डाउनलोड करें।",
        "<strong>ग्राम पंचायत का सर्टिफिकेट:</strong> ILGMS सिटिज़न पोर्टल के 'Certificate Search' में यही तरीका।",
        "<strong>शिकायत:</strong> पहले निकाय के सचिव को लिखित में दें। LSGD की शिकायत हेल्पलाइन 0471-2727255 है (LSGD साइट)।",
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
      "href": "https://lsgd.kerala.gov.in/en/birth-registration/",
      "title": "LSGD केरल: जन्म-मृत्यु पंजीकरण प्रक्रिया और डाउनलोड का तरीका"
    },
    {
      "href": "https://ksmart.lsgkerala.gov.in/",
      "title": "K-SMART (नगर पालिका/निगम)"
    },
    {
      "href": "https://crsorgi.gov.in/",
      "title": "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल"
    }
  ],
  "faq": [
    {
      "q": "केरल में मृत्यु प्रमाण पत्र कैसे डाउनलोड करें?",
      "a": "नगर पालिका/निगम में दर्ज मृत्यु का सर्टिफिकेट K-SMART सिटिज़न पोर्टल से और ग्राम पंचायत में दर्ज मृत्यु का ILGMS सिटिज़न पोर्टल से, 'Certificate Search' में मृत्यु की तारीख और मृतक का नाम डालकर।"
    },
    {
      "q": "केरल में 30 दिन के बाद मृत्यु पंजीकरण की अनुमति कौन देता है?",
      "a": "LSGD के अनुसार 30 दिन से 1 साल तक ग्राम पंचायत के मामलों में ज़िला जन्म-मृत्यु रजिस्ट्रार और नगर पालिका/निगम में नगर सचिव। 1 साल से ज़्यादा देरी पर 1 अक्टूबर 2026 से 1-2 साल में DM/SDM/अधिकृत कार्यकारी मजिस्ट्रेट और 2 साल के बाद प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लगता है।"
    },
    {
      "q": "केरल में मृत्यु का पंजीकरण कितने दिन में कराना चाहिए?",
      "a": "मृत्यु के 21 दिन के भीतर, उस जगह के रजिस्ट्रार के पास जहां मृत्यु हुई। इस अवधि में पंजीकरण और पहली प्रति मुफ्त है। केरल में 21-30 दिन पर ₹2 विलंब शुल्क है।"
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
      "href": "/states/kerala-birth-certificate.html",
      "emoji": "👶",
      "title": "केरल जन्म प्रमाण पत्र",
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
      "href": "https://ksmart.lsgkerala.gov.in/",
      "label": "📝 K-SMART पोर्टल"
    },
    {
      "href": "/service/death-certificate.html",
      "label": "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
