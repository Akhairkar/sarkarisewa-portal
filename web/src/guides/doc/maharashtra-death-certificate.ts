import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; consistent with maharashtra-birth-certificate.ts):
// - aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=2480 (fetched):
//   Rural Development and Panchayat Raj 'Death Certificate' (मृत्यु नोंद दाखला): no documents
//   required, 5 days, Gram Sevak, appeals ABDO then BDO; Track your Application; 18-digit barcode
//   verification; call centre; notice that some services moved to MAITRI.
// - Birth guide sources: call centre 1800 120 8040, third appeal to RTS Commission, Aaple Sarkar
//   Seva Kendra / Taluka Setu (amravati.gov.in).
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
// Left out (not confirmable on an official page we could open): urban (municipal) procedure and fees, late-fee amounts, copy fees.
export const maharashtraDeathCertificate: DocGuide = {
  "state": {
    "slug": "maharashtra",
    "hi": "महाराष्ट्र"
  },
  "doc": "death-certificate",
  "docHi": "मृत्यु प्रमाण पत्र",
  "title": "Maharashtra Death Certificate 2026: Apply & Status",
  "description": "महाराष्ट्र मृत्यु प्रमाण पत्र 2026: Aaple Sarkar पर ग्रामीण 'मृत्यु नोंद दाखला' (5 दिन, ग्रामसेवक), अपील, शहर में नगर निकाय, MCCD, 21 दिन की सीमा और 2026 के नए नियम।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "महाराष्ट्र मृत्यु प्रमाण पत्र 2026: मृत्यु नोंद दाखला, Aaple Sarkar, अपील और देर से पंजीकरण",
  "lead": "महाराष्ट्र के Aaple Sarkar पोर्टल पर ग्रामीण विकास एवं पंचायत राज विभाग की 'मृत्यु नोंद दाखला' (Death Certificate) सेवा दर्ज है: समय सीमा 5 दिन, निर्धारित अधिकारी ग्रामसेवक, पहली अपील सहायक गट विकास अधिकारी और दूसरी अपील गट विकास अधिकारी के पास। शहर में मृत्यु का पंजीकरण नगर निगम/नगरपालिका करती है। मृत्यु की सूचना 21 दिन में देनी है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://aaplesarkar.mahaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">aaplesarkar.mahaonline.gov.in</a>"
    ],
    [
      "समय सीमा",
      "5 दिन (ग्रामीण सेवा, पोर्टल सूची)"
    ],
    [
      "अधिकारी / अपील",
      "ग्रामसेवक; अपील: सहायक गट विकास अधिकारी, फिर गट विकास अधिकारी"
    ],
    [
      "कॉल सेंटर",
      "1800 120 8040 (टोल फ्री, पोर्टल पर दिया)"
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
      "intro": "पहले मृत्यु का पंजीकरण होता है (गांव में ग्राम पंचायत, शहर में नगर निकाय), फिर उसका दाखला (सर्टिफिकेट) निकलता है। गांव के लिए Aaple Sarkar पर सेवा उपलब्ध है; आवेदन आपले सरकार सेवा केंद्र या तालुका सेतू केंद्र से भी कराया जा सकता है। पोर्टल पर कुछ सेवाएं MAITRI पोर्टल पर जाने की सूचना भी है।",
      "steps": [
        "<a href=\"https://aaplesarkar.mahaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">aaplesarkar.mahaonline.gov.in</a> पर 'ग्रामीण विकास एवं पंचायत राज विभाग' के तहत <strong>Death Certificate (मृत्यु नोंद दाखला)</strong> चुनें। पोर्टल पर इस सेवा के लिए कोई दस्तावेज़ अनिवार्य नहीं बताया गया है।",
        "सिटिज़न लॉगिन से आवेदन भरें या नज़दीकी आपले सरकार सेवा केंद्र से भरवाएं और पावती लें।",
        "पोर्टल के 'Track your Application' में आवेदन संख्या डालकर स्थिति देखें।",
        "सर्टिफिकेट पर 18 अंकों का बारकोड होता है; 'Verify Your Authenticated Certificate' से उसकी जांच हो सकती है।"
      ],
      "html": "<p><strong>शहर में:</strong> नगर निगम/नगरपालिका का जन्म-मृत्यु पंजीकरण विभाग रजिस्ट्रार का काम करता है। अस्पताल में मृत्यु हो तो अस्पताल सूचना भेजता है; घर पर मृत्यु हो तो वार्ड कार्यालय में 21 दिन के भीतर सूचना दें। हर शहर की अपनी साइट और शुल्क होते हैं, जिनकी हम पुष्टि नहीं कर पाए।</p>"
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>मृत्यु की सूचना का फॉर्म</strong> (रजिस्ट्रार कार्यालय/केंद्र पर मिलता है या ऑनलाइन भरा जाता है)",
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल की मृत्यु रिपोर्ट और MCCD की प्रति (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)",
        "<strong>घर पर मृत्यु:</strong> मृत्यु की सूचना; डॉक्टर इलाज कर रहे थे तो उनका MCCD; ग्रामसेवक/वार्ड कार्यालय जो स्थानीय सत्यापन मांगे",
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
        "<strong>स्थिति और सत्यापन:</strong> Aaple Sarkar पर 'Track your Application' और 18 अंकों के बारकोड से 'Verify Your Authenticated Certificate'।",
        "<strong>सेवा में देरी:</strong> महाराष्ट्र लोकसेवा हक्क अधिनियम के तहत पहली अपील सहायक गट विकास अधिकारी और दूसरी गट विकास अधिकारी को; तीसरी अपील लोकसेवा हक्क आयोग में। कॉल सेंटर: 1800 120 8040 (टोल फ्री)।",
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
      "href": "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=2480",
      "title": "Aaple Sarkar: मृत्यु नोंद दाखला सेवा (समय सीमा, अधिकारी, अपील)"
    },
    {
      "href": "https://aaplesarkar.mahaonline.gov.in/",
      "title": "Aaple Sarkar महाराष्ट्र"
    },
    {
      "href": "https://maitri.maharashtra.gov.in/",
      "title": "MAITRI पोर्टल (कुछ सेवाएं यहां गई हैं)"
    },
    {
      "href": "https://crsorgi.gov.in/",
      "title": "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल"
    }
  ],
  "faq": [
    {
      "q": "महाराष्ट्र में गांव का मृत्यु नोंद दाखला कितने दिन में मिलता है?",
      "a": "Aaple Sarkar पोर्टल की सूची में ग्रामीण 'मृत्यु नोंद दाखला' की समय सीमा 5 दिन है और निर्धारित अधिकारी ग्रामसेवक हैं। देरी पर पहली अपील सहायक गट विकास अधिकारी और दूसरी गट विकास अधिकारी के पास।"
    },
    {
      "q": "शहर में मृत्यु प्रमाण पत्र कहां मिलेगा?",
      "a": "अपने नगर निगम/नगरपालिका के जन्म-मृत्यु पंजीकरण विभाग या वार्ड कार्यालय से। अस्पताल में मृत्यु हो तो अस्पताल पंजीकरण के लिए सूचना भेजता है।"
    },
    {
      "q": "महाराष्ट्र में मृत्यु का पंजीकरण कितने दिन में कराना चाहिए?",
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
      "href": "/states/maharashtra-birth-certificate.html",
      "emoji": "👶",
      "title": "महाराष्ट्र जन्म प्रमाण पत्र",
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
      "href": "https://aaplesarkar.mahaonline.gov.in/",
      "label": "📝 Aaple Sarkar पोर्टल"
    },
    {
      "href": "/service/death-certificate.html",
      "label": "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
