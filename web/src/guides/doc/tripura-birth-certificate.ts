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
// - health.tripura.gov.in/civil-registration-system (official, search extract; the
//   site resets connections from our sandbox): Chief Registrar = Director of
//   Health Services; DM/Collector and ZDO (TTAADC) District Registrars; Agartala
//   Municipal Corporation Health Officer; EOs of 13 municipal councils; BDOs
//   Additional District Registrars; Panchayat Secretaries (non-TTAADC rural).
// - health.tripura.gov.in Fees_Fine_Circular_26th_June_2020.pdf (search extract):
//   registration within the prescribed period and the extract certificate free.
// - edistrict.tripura.gov.in reachable; birth certificate there not confirmed.
// Left out: search fee, late-fee amounts.

export const tripuraBirthCertificate: DocGuide = {
  "state": {
    "slug": "tripura",
    "hi": "त्रिपुरा"
  },
  "doc": "birth-certificate",
  "docHi": "जन्म प्रमाण पत्र",
  "title": "Tripura Birth Certificate 2026: Apply & Status",
  "description": "त्रिपुरा जन्म प्रमाण पत्र 2026: स्वास्थ्य विभाग का नागरिक पंजीकरण तंत्र, नगर निगम/पंचायत/BDO में रजिस्ट्रार, 21 दिन में निःशुल्क और देर से पंजीकरण।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "त्रिपुरा जन्म प्रमाण पत्र 2026: रजिस्ट्रार कौन, ज़रूरी कागज़ और देर से पंजीकरण",
  "lead": "त्रिपुरा में जन्म-मृत्यु पंजीकरण स्वास्थ्य विभाग की नागरिक पंजीकरण व्यवस्था के तहत होता है। निर्धारित अवधि (21 दिन) में पंजीकरण निःशुल्क है। अगरतला में नगर निगम, छोटे शहरों में नगर परिषद और गांवों में पंचायत सचिव/BDO रजिस्ट्रार का काम देखते हैं।",
  "facts": [
    [
      "विभाग",
      "स्वास्थ्य विभाग, त्रिपुरा (नागरिक पंजीकरण)"
    ],
    [
      "मुख्य रजिस्ट्रार",
      "स्वास्थ्य सेवा निदेशक"
    ],
    [
      "निःशुल्क अवधि",
      "निर्धारित अवधि (21 दिन) के भीतर"
    ],
    [
      "ऑनलाइन",
      "e-District में जन्म प्रमाण पत्र की पुष्टि नहीं हुई"
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
      "title": "त्रिपुरा में पंजीकरण कौन करता है",
      "intro": "त्रिपुरा स्वास्थ्य विभाग के नागरिक पंजीकरण पृष्ठ के अनुसार ढांचा यह है:",
      "list": [
        "<strong>मुख्य रजिस्ट्रार:</strong> स्वास्थ्य सेवा निदेशक।",
        "<strong>ज़िला रजिस्ट्रार:</strong> TTAADC क्षेत्र से बाहर ज़िला मजिस्ट्रेट एवं कलेक्टर; TTAADC क्षेत्र में ज़ोनल डेवलपमेंट ऑफिसर।",
        "<strong>अगरतला:</strong> अगरतला नगर निगम के स्वास्थ्य अधिकारी रजिस्ट्रार हैं।",
        "<strong>अन्य शहर:</strong> 13 नगर परिषदों के कार्यकारी अधिकारी (EO)।",
        "<strong>गांव:</strong> TTAADC से बाहर के ग्रामीण क्षेत्र में पंचायत सचिव रजिस्ट्रार और खंड विकास अधिकारी (BDO) अतिरिक्त ज़िला रजिस्ट्रार हैं।"
      ]
    },
    {
      "id": "online",
      "title": "ऑनलाइन या ऑफलाइन",
      "intro": "त्रिपुरा का e-District पोर्टल (edistrict.tripura.gov.in) चालू है और ज़िला प्रशासन के पेजों पर दूसरे प्रमाण पत्रों (जैसे PRTC) के लिए उसका ज़िक्र है। हमें ऐसा कोई सरकारी पेज नहीं मिला जो साफ बताए कि जन्म प्रमाण पत्र वहां से मिलता है। इसलिए पहले अपने रजिस्ट्रार से पूछें।",
      "steps": [
        "अपने क्षेत्र का रजिस्ट्रार पहचानें (ऊपर की सूची): अगरतला में नगर निगम, शहर में नगर परिषद, गांव में पंचायत सचिव/BDO।",
        "जन्म की सूचना का फॉर्म, अस्पताल की पर्ची और माता-पिता का पहचान पत्र दें।",
        "ऑनलाइन चैनल उपलब्ध हो तो रजिस्ट्रार बताएंगे; वैकल्पिक रूप से राष्ट्रीय CRS पोर्टल (crsorgi.gov.in) देखें।",
        "पंजीकरण संख्या नोट करें और प्रमाण पत्र (extract) लें।"
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
      "intro": "जन्म दर्ज होते समय बच्चे का नाम न हो तो नाम बाद में जोड़ा जा सकता है। आम नियम यह है कि पंजीकरण के <strong>12 महीने के भीतर</strong> नाम जोड़ने पर कोई फीस नहीं लगती; उसके बाद देरी शुल्क देना पड़ता है और अधिकतम सीमा (आमतौर पर 15 साल) राज्य के नियमों में तय है। त्रिपुरा के नियमों में सही समय और राशि अपने रजिस्ट्रार से पूछ लें। नाम जुड़ने के बाद नया प्रमाण पत्र लें। नाम बदलवाने के लिए अलग प्रक्रिया है: <a href=\"/affidavit/name-change.html\">नाम बदलने का एफिडेविट</a>।"
    },
    {
      "id": "status",
      "title": "प्रमाण पत्र डाउनलोड, सुधार और शिकायत",
      "list": [
        "<strong>डाउनलोड:</strong> <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> पर लॉगिन करके, या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">DigiLocker</a> में आधार से जुड़े मोबाइल से जन्म प्रमाण पत्र खोजकर (नाम, जन्म तिथि, लिंग और पंजीकरण संख्या के साथ)।",
        "<strong>सुधार:</strong> नाम, तारीख या माता-पिता के नाम में गलती हो तो जिस रजिस्ट्रार ने पंजीकरण किया उसे लिखित आवेदन और सबूत दें। सुधार का शुल्क और समय उस राज्य के नियमों में तय है।",
        "<strong>प्रमाण पत्र न मिलने पर:</strong> पहले रजिस्ट्रार से, फिर ज़िला रजिस्ट्रार और मुख्य रजिस्ट्रार (Chief Registrar) से लिखित शिकायत करें; केंद्र की CPGRAMS शिकायत सेवा भी है।",
        "<strong>शुल्क:</strong> स्वास्थ्य विभाग के 26 जून 2020 के परिपत्र के सार के अनुसार निर्धारित अवधि में पंजीकरण और प्रमाण पत्र (extract) निःशुल्क है। यह परिपत्र पुराना हो सकता है; रजिस्ट्रार से आज की स्थिति पूछ लें।"
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
      "intro": "पहले अपने रजिस्ट्रार से, फिर ज़िला रजिस्ट्रार (DM कार्यालय) और स्वास्थ्य सेवा निदेशक (मुख्य रजिस्ट्रार) को लिखित आवेदन दें।"
    }
  ],
  "official": [
    {
      "href": "https://edistrict.tripura.gov.in/",
      "title": "त्रिपुरा e-District पोर्टल (जन्म प्रमाण पत्र की उपलब्धता अपुष्ट)"
    },
    {
      "href": "https://health.tripura.gov.in/civil-registration-system",
      "title": "त्रिपुरा स्वास्थ्य विभाग: नागरिक पंजीकरण व्यवस्था"
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
      "q": "त्रिपुरा में जन्म पंजीकरण कहां होता है?",
      "a": "अगरतला में नगर निगम के स्वास्थ्य अधिकारी, अन्य शहरों में नगर परिषद के कार्यकारी अधिकारी, और ग्रामीण क्षेत्र में पंचायत सचिव/BDO के पास।"
    },
    {
      "q": "क्या त्रिपुरा में जन्म प्रमाण पत्र e-District से बनता है?",
      "a": "e-District पोर्टल चालू है, पर हमें जन्म प्रमाण पत्र उस पर मिलने की सरकारी पुष्टि नहीं मिली। रजिस्ट्रार से पूछें।"
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
      "href": "/states/tripura-death-certificate.html",
      "emoji": "🕊️",
      "title": "त्रिपुरा मृत्यु प्रमाण पत्र",
      "text": "मृत्यु का पंजीकरण"
    },
    {
      "href": "/states/tripura-domicile-certificate.html",
      "emoji": "🏠",
      "title": "त्रिपुरा मूल निवास प्रमाण पत्र",
      "text": "निवास प्रमाण पत्र"
    },
    {
      "href": "/states/tripura-income-certificate.html",
      "emoji": "💰",
      "title": "त्रिपुरा आय प्रमाण पत्र",
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
