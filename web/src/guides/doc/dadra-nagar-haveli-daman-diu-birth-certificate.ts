import type { DocGuide } from "./types";

// National facts (checked 14 Oct 2026):
// - Registration of Births and Deaths Act 1969, s.13 (text on a .nic.in copy of the
//   Act): 21 days = registration without fee; up to 30 days = late fee; 30 days to
//   1 year = written permission of the prescribed authority + affidavit + fee;
//   after 1 year = order of a first-class magistrate + fee.
// - Registration of Births and Deaths (Amendment) Act 2023: in force 1 Oct 2023
//   (Registrar General notification, reported by Business Standard / Free Press
//   Journal / Orissa Post); birth certificate is the single proof of date and
//   place of birth for persons born on or after that date (school admission,
//   driving licence, voter list, marriage registration, government jobs; Aadhaar
//   and passport as notified).
// - Registration of Births and Deaths (Amendment) Act 2026 (Act 12 of 2026): in
//   force 1 Oct 2026 (Registrar General gazette notice of 16 Sep 2026, as
//   reported by ANI, PGurus, The Publish): s.13(3) rewritten and s.13(3A)
//   inserted; 1-2 years late = order of DM / SDM / Executive Magistrate
//   authorised by the DM; over 2 years late = order of a Judicial Magistrate of
//   the first class. Gazette text itself could not be opened: news reports only.
// - crsorgi.gov.in opens (JavaScript app); services.india.gov.in lists the
//   revamped CRS portal (dc.crsorgi.gov.in) as the online route for the listed
//   States/UTs.
// - services.india.gov.in listing of the revamped CRS portal: Dadra & Nagar Haveli
//   and Daman & Diu among the States/UTs covered.
// - blog.digilocker.gov.in: birth certificates from August 2015 on DigiLocker;
//   DNH and Daman & Diu register through the Central portal.
// Left out: registrar offices and phone numbers, UT e-services portal (no
// birth-certificate page found), late-fee amounts.

export const dadraNagarHaveliDamanDiuBirthCertificate: DocGuide = {
  "state": {
    "slug": "dadra-nagar-haveli-daman-diu",
    "hi": "दादरा और नगर हवेली और दमन और दीव"
  },
  "doc": "birth-certificate",
  "docHi": "जन्म प्रमाण पत्र",
  "title": "Dadra & Nagar Haveli and Daman & Diu Birth Certificate 2026: Apply & Status",
  "description": "दादरा और नगर हवेली और दमन और दीव जन्म प्रमाण पत्र 2026: CRS पोर्टल और DigiLocker, 21 दिन में निःशुल्क पंजीकरण, देर से पंजीकरण और नाम जोड़ना।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "दादरा और नगर हवेली और दमन और दीव जन्म प्रमाण पत्र 2026: CRS पोर्टल, कागज़ और देर से पंजीकरण",
  "lead": "दादरा और नगर हवेली और दमन और दीव में जन्म का पंजीकरण जन्म के 21 दिन के भीतर कराना है और इस अवधि में कोई शुल्क नहीं। ऑनलाइन रिपोर्टिंग और प्रमाण पत्र राष्ट्रीय CRS पोर्टल से मिलते हैं, और DigiLocker में भी जन्म प्रमाण पत्र खोजा जा सकता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> (CRS)"
    ],
    [
      "पंजीकरण करता है",
      "जन्म स्थान का स्थानीय रजिस्ट्रार"
    ],
    [
      "निःशुल्क अवधि",
      "जन्म के 21 दिन के भीतर"
    ],
    [
      "DigiLocker",
      "केंद्रीय पोर्टल के प्रमाण पत्र खोजे जा सकते हैं"
    ]
  ],
  "sections": [
    {
      "id": "kya-hai",
      "title": "जन्म प्रमाण पत्र क्या है और क्यों ज़रूरी है",
      "intro": "जन्म प्रमाण पत्र जन्म की तारीख और जगह का कानूनी सबूत है। जन्म और मृत्यु पंजीकरण अधिनियम 1969 के तहत हर जन्म का पंजीकरण <strong>21 दिन के भीतर</strong> होना चाहिए, और इस अवधि में पंजीकरण निःशुल्क है।",
      "callout": {
        "kind": "info",
        "html": "<strong>2023 का संशोधन:</strong> 1 अक्टूबर 2023 से लागू संशोधन के बाद जो बच्चे इस तारीख के बाद जन्मे हैं, उनके लिए जन्म प्रमाण पत्र स्कूल दाखिले, ड्राइविंग लाइसेंस, मतदाता सूची, विवाह पंजीकरण और सरकारी नौकरी में <strong>जन्म तिथि का एकमात्र प्रमाण</strong> है। पुराने जन्मों पर यह नियम लागू नहीं होता।"
      }
    },
    {
      "id": "kahan",
      "title": "दादरा और नगर हवेली और दमन और दीव में पंजीकरण कौन करता है",
      "intro": "पंजीकरण जन्म वाले क्षेत्र (सिलवासा, दमन या दीव) के स्थानीय रजिस्ट्रार के पास होता है। राष्ट्रीय CRS पोर्टल की सूची में यह केंद्रशासित प्रदेश शामिल है और DigiLocker के अनुसार यहां के प्रमाण पत्र केंद्रीय पोर्टल से पंजीकृत होते हैं।",
      "list": [
        "<strong>अस्पताल/स्वास्थ्य केंद्र में जन्म:</strong> संस्था रजिस्ट्रार को सूचना भेजती है। वहीं से पंजीकरण नंबर पूछें।",
        "<strong>नगर क्षेत्र (सिलवासा, दमन, दीव):</strong> नगर निकाय/नगर पालिका का रजिस्ट्रार।",
        "<strong>ग्रामीण क्षेत्र:</strong> ग्राम पंचायत या स्वास्थ्य केंद्र के स्थानीय रजिस्ट्रार।",
        "<strong>किस दफ्तर में जाएं:</strong> इस पेज पर रजिस्ट्रार दफ्तरों के नाम और फोन इसलिए नहीं दिए गए कि हमें आधिकारिक साइट पर पुष्ट सूची नहीं मिली। अस्पताल या ज़िला प्रशासन कार्यालय से पूछ लें।"
      ]
    },
    {
      "id": "online",
      "title": "CRS पोर्टल और DigiLocker से ऑनलाइन",
      "intro": "पोर्टल पर आम नागरिक का लॉगिन मुख्य रूप से <strong>घर पर हुए जन्म</strong> की रिपोर्ट के लिए है। अस्पताल या स्वास्थ्य केंद्र में हुआ जन्म वही संस्था दर्ज करती है; वह पंजीकरण नंबर दे देती है।",
      "steps": [
        "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> खोलें और <strong>General Public</strong> वाले विकल्प से मोबाइल नंबर पर साइन-अप/लॉगिन करें।",
        "जन्म की घटना दर्ज करने का विकल्प चुनें और बच्चे, माता-पिता और जन्म की जगह का विवरण भरें।",
        "मांगे गए कागज़ अपलोड करें (साफ़ स्कैन, छोटी PDF/JPG) और आवेदन जमा करें।",
        "आवेदन संख्या/पावती सुरक्षित रखें। रजिस्ट्रार की जांच और स्वीकृति के बाद प्रमाण पत्र पोर्टल से डाउनलोड होता है।"
      ]
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>जन्म की सूचना/पर्ची:</strong> अस्पताल या स्वास्थ्य केंद्र की जन्म पर्ची या डिस्चार्ज स्लिप। घर पर जन्म हुआ हो तो रजिस्ट्रार जो स्थानीय रिपोर्ट या पुष्टि मांगे (जैसे गांव/वार्ड के प्रतिनिधि की)।",
        "<strong>माता-पिता का पहचान पत्र:</strong> आधार या दूसरा मान्य पहचान पत्र।",
        "<strong>पते का प्रमाण:</strong> राशन कार्ड, बिजली बिल या निवास का कोई मान्य कागज़।",
        "<strong>देर से पंजीकरण में अतिरिक्त:</strong> हलफनामा और जन्म की तारीख का कोई प्रमाण (जैसे टीकाकरण कार्ड या स्कूल का रिकॉर्ड)। सही सूची रजिस्ट्रार देगा।"
      ],
      "callout": {
        "kind": "ok",
        "html": "<strong>टिप:</strong> अस्पताल में जन्म हो तो अस्पताल अक्सर खुद पंजीकरण की सूचना भेजता है। बच्चे के घर आने से पहले अस्पताल से पूछ लें कि पंजीकरण नंबर मिला या नहीं।"
      }
    },
    {
      "id": "samay",
      "title": "देर से पंजीकरण: समय और शुल्क",
      "table": {
        "head": [
          "कितनी देरी से",
          "क्या लगता है"
        ],
        "rows": [
          [
            "<strong>21 दिन के भीतर</strong>",
            "पंजीकरण निःशुल्क है। यही सबसे आसान रास्ता है।"
          ],
          [
            "<strong>21 से 30 दिन</strong>",
            "देरी शुल्क (late fee) के साथ स्थानीय रजिस्ट्रार पंजीकरण करता है। राशि राज्य के नियमों में तय है; रजिस्ट्रार से पूछें।"
          ],
          [
            "<strong>30 दिन से 1 साल</strong>",
            "निर्धारित अधिकारी की <strong>लिखित अनुमति</strong>, नोटरी/अधिकृत अधिकारी के सामने बना <strong>हलफनामा</strong> और शुल्क (Act की धारा 13)।"
          ],
          [
            "<strong>1 साल से 2 साल</strong>",
            "1 अक्टूबर 2026 से लागू संशोधन के अनुसार <strong>ज़िला मजिस्ट्रेट (DM), उप-मंडल मजिस्ट्रेट (SDM) या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट</strong> का आदेश और शुल्क (समाचार रिपोर्टों के अनुसार; गज़ट पाठ से मिलान करें)।"
          ],
          [
            "<strong>2 साल से अधिक</strong>",
            "उसी संशोधन में <strong>प्रथम श्रेणी न्यायिक मजिस्ट्रेट</strong> का आदेश और शुल्क (समाचार रिपोर्टों के अनुसार)।"
          ]
        ]
      },
      "html": "<p>शुल्क की राशि और स्थानीय अनुमति देने वाला अधिकारी राज्य के जन्म-मृत्यु पंजीकरण नियमों से तय होते हैं। इस पेज पर वही राशि दी गई है जो आधिकारिक स्रोत से देखी जा सकी; बाकी के लिए रजिस्ट्रार से पूछें।</p>"
    },
    {
      "id": "naam",
      "title": "बच्चे का नाम जोड़ना",
      "intro": "जन्म दर्ज होते समय बच्चे का नाम न हो तो नाम बाद में जोड़ा जा सकता है। आम नियम यह है कि पंजीकरण के <strong>12 महीने के भीतर</strong> नाम जोड़ने पर कोई फीस नहीं लगती; उसके बाद देरी शुल्क देना पड़ता है और अधिकतम सीमा (आमतौर पर 15 साल) राज्य के नियमों में तय है। दादरा और नगर हवेली और दमन और दीव के नियमों में सही समय और राशि अपने रजिस्ट्रार से पूछ लें। नाम जुड़ने के बाद नया प्रमाण पत्र लें। नाम बदलवाने के लिए अलग प्रक्रिया है: <a href=\"/affidavit/name-change.html\">नाम बदलने का एफिडेविट</a>।"
    },
    {
      "id": "status",
      "title": "प्रमाण पत्र डाउनलोड, सुधार और शिकायत",
      "list": [
        "<strong>डाउनलोड:</strong> <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> पर लॉगिन करके, या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">DigiLocker</a> में आधार से जुड़े मोबाइल से जन्म प्रमाण पत्र खोजकर (नाम, जन्म तिथि, लिंग और पंजीकरण संख्या के साथ)।",
        "<strong>सुधार:</strong> नाम, तारीख या माता-पिता के नाम में गलती हो तो जिस रजिस्ट्रार ने पंजीकरण किया उसे लिखित आवेदन और सबूत दें। सुधार का शुल्क और समय उस राज्य के नियमों में तय है।",
        "<strong>प्रमाण पत्र न मिलने पर:</strong> पहले रजिस्ट्रार से, फिर ज़िला रजिस्ट्रार और मुख्य रजिस्ट्रार (Chief Registrar) से लिखित शिकायत करें; केंद्र की CPGRAMS शिकायत सेवा भी है।"
      ]
    },
    {
      "id": "rejection",
      "title": "आवेदन क्यों अटकता है, और क्या करें",
      "table": {
        "head": [
          "वजह",
          "हल"
        ],
        "rows": [
          [
            "सूचना 21 दिन के बाद दी गई",
            "देरी शुल्क और ऊपर की तालिका की अनुमति वाली प्रक्रिया अपनाएं"
          ],
          [
            "माता-पिता के नाम/स्पेलिंग में अंतर",
            "आधार/पहचान पत्र जैसा ही नाम लिखें। गलती हो तो सुधार के लिए रजिस्ट्रार को आवेदन दें"
          ],
          [
            "अस्पताल की पर्ची नहीं है",
            "अस्पताल से डुप्लीकेट पर्ची या पुष्टि पत्र लें"
          ],
          [
            "गलत रजिस्ट्रार के पास गए",
            "जन्म जहां हुआ, उसी क्षेत्र के रजिस्ट्रार के पास पंजीकरण होता है"
          ],
          [
            "बच्चे का नाम खाली रह गया",
            "नाम जोड़ने का आवेदन दें (ऊपर 'नाम जोड़ना' देखें)"
          ]
        ]
      }
    },
    {
      "id": "help",
      "title": "मदद कहां मिलेगी",
      "intro": "स्थानीय रजिस्ट्रार से हल न हो तो ज़िला रजिस्ट्रार और मुख्य रजिस्ट्रार को लिखित शिकायत दें। पोर्टल में दिक्कत आए (पहले CRS पोर्टल पर तकनीकी गड़बड़ियों की खबरें आई थीं) तो कुछ समय बाद दोबारा कोशिश करें या रजिस्ट्रार से मैनुअल प्रमाण पत्र मांगें।"
    }
  ],
  "official": [
    {
      "href": "https://services.india.gov.in/service/detail/revamped-civil-registration-system-crs-portal",
      "title": "CRS पोर्टल की सेवा सूची (services.india.gov.in)"
    },
    {
      "href": "https://blog.digilocker.gov.in/digilocker-now-offers-birth-certificates-august-2015-onwards/",
      "title": "DigiLocker: जन्म प्रमाण पत्र उपलब्धता"
    },
    {
      "href": "https://crsorgi.gov.in/",
      "title": "CRS पोर्टल (Registrar General of India): जन्म-मृत्यु पंजीकरण"
    },
    {
      "href": "https://www.thc.nic.in/Tripura%20State%20Lagislation%20Acts/The%20Registration%20of%20Births%20and%20Deaths%20Act,%201969.pdf",
      "title": "जन्म और मृत्यु पंजीकरण अधिनियम 1969 (PDF)"
    }
  ],
  "faq": [
    {
      "q": "दमन/दीव/सिलवासा में जन्म प्रमाण पत्र ऑनलाइन कैसे मिलेगा?",
      "a": "राष्ट्रीय CRS पोर्टल (crsorgi.gov.in) पर लॉगिन करके, या DigiLocker में आधार से जुड़े मोबाइल से जन्म प्रमाण पत्र खोजकर (नाम, जन्म तिथि, लिंग और पंजीकरण संख्या के साथ)।"
    },
    {
      "q": "क्या DigiLocker पर जन्म प्रमाण पत्र मिलता है?",
      "a": "DigiLocker के ब्लॉग के अनुसार दादरा और नगर हवेली, दमन और दीव का रिकॉर्ड केंद्रीय पोर्टल से जुड़ा है। वहां आधार वाले मोबाइल से लॉगिन करके पंजीकरण संख्या डालनी होती है।"
    },
    {
      "q": "जन्म के कितने दिन में पंजीकरण कराना चाहिए?",
      "a": "21 दिन के भीतर। इस अवधि में पंजीकरण निःशुल्क है। उसके बाद देरी शुल्क और, देरी बढ़ने पर, अनुमति या मजिस्ट्रेट के आदेश की ज़रूरत पड़ती है।"
    },
    {
      "q": "क्या जन्म प्रमाण पत्र ही जन्म तिथि का एकमात्र प्रमाण है?",
      "a": "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: संशोधित अधिनियम के अनुसार स्कूल दाखिले, ड्राइविंग लाइसेंस, मतदाता सूची, विवाह पंजीकरण और सरकारी नौकरी में जन्म प्रमाण पत्र ही जन्म तिथि का प्रमाण है। पुराने जन्मों पर यह लागू नहीं।"
    },
    {
      "q": "1 साल से ज़्यादा देर हो गई तो क्या करें?",
      "a": "समाचार रिपोर्टों के अनुसार 1 अक्टूबर 2026 से 1 से 2 साल की देरी में DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और 2 साल से अधिक में प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश चाहिए। अपने रजिस्ट्रार से प्रक्रिया पूछकर आवेदन करें।"
    }
  ],
  "related": [
    {
      "href": "/states/dadra-nagar-haveli-daman-diu-death-certificate.html",
      "emoji": "🕊️",
      "title": "दादरा और नगर हवेली और दमन और दीव मृत्यु प्रमाण पत्र",
      "text": "मृत्यु का पंजीकरण"
    },
    {
      "href": "/states/dadra-nagar-haveli-daman-diu-domicile-certificate.html",
      "emoji": "🏠",
      "title": "दादरा और नगर हवेली और दमन और दीव मूल निवास प्रमाण पत्र",
      "text": "निवास प्रमाण पत्र"
    },
    {
      "href": "/states/dadra-nagar-haveli-daman-diu-income-certificate.html",
      "emoji": "💰",
      "title": "दादरा और नगर हवेली और दमन और दीव आय प्रमाण पत्र",
      "text": "आवेदन की जानकारी"
    },
    {
      "href": "/affidavit/date-of-birth.html",
      "emoji": "✍️",
      "title": "जन्म तिथि का एफिडेविट",
      "text": "कब काम आता है, नमूना"
    },
    {
      "href": "/service/birth-certificate.html",
      "emoji": "👶",
      "title": "जन्म प्रमाण पत्र: पूरी जानकारी",
      "text": "सभी राज्य"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Document Resizer",
      "text": "अपलोड के साइज़ में, फ्री"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में जन्म प्रमाण पत्र",
  "aside": [
    {
      "href": "https://crsorgi.gov.in/",
      "label": "📝 CRS पोर्टल खोलें"
    },
    {
      "href": "/affidavit/date-of-birth.html",
      "label": "✍️ जन्म तिथि का एफिडेविट"
    }
  ]
};
