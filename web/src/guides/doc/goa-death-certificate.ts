import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - National (all states): Registration of Births and Deaths Act, 1969 as amended by
//   the Amendment Act, 2023 (in force 1 Oct 2023, S.O. 4058(E), 13 Sep 2023): s.10(2)
//   medical institutions give the certificate of cause of death free to the Registrar
//   and a copy to the nearest relative; s.10(3) attending doctor gives it free for
//   deaths outside an institution; s.12 free certificate to the informant within 7
//   days; s.13(2) 30 days-1 year with District Registrar's written permission, fee and
//   self-attested document; s.17 cause of death not shown on certificates; s.25A
//   appeal (30 days to District Registrar, then Chief Registrar; decided in 90 days).
//   Registration of Births and Deaths (Amendment) Act, 2026 (12 of 2026; gazette
//   6 Aug 2026; in force 1 Oct 2026, S.O. 5081(E), 16 Sep 2026): 1-2 years on DM/SDM/
//   authorised Executive Magistrate order, after 2 years on JMFC order.
//   Registrar General of India CRS FAQ (21 days, no fee within 21 days, who reports a
//   death, one free copy, uses for inheritance and insurance claims); CRS forms 2019
//   (Form 2 death report, Form 4 hospital and Form 4A non-institutional medical
//   certificate of cause of death); RGI advisory of 13 Oct 2025 (look-alike fake
//   birth-death websites; type the URL rather than use a search engine);
//   dc.crsorgi.gov.in portal text (list of States/UTs using it; a member of the public
//   may submit at most four events).
// - Late-registration fee amounts left out everywhere: they differ by state rules.
// - Goa: dpse.goa.gov.in/off-crbd.htm (DPSE is the Chief Registrar; Registrars are the
//   Secretaries of 191 Village Panchayats, Chief Officers of 13 Municipal Councils,
//   the Commissioner of the Corporation of the City of Panaji and the Medical
//   Superintendent, Goa Medical College; 206 registration units); Goa government press
//   release PR-380 (goa.gov.in, July 2026; also The Goan, 3 Jul 2026): registration
//   moved to the central CRS portal from 1 Jul 2026, state portal only for records not
//   yet pushed to CRS, certificate formats may differ; goa.gov.in 2017 circular (no
//   period of validity for birth and death certificates); rbd.goa.gov.in.
// Left out: the Rs 25 / Rs 50 download fee shown on state-portal pages (predates the
// CRS move), late fees.
export const goaDeathCertificate: DocGuide = {
  state: {
    slug: "goa",
    hi: "गोवा"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "Goa Death Certificate 2026: Apply & Status",
  description: "गोवा मृत्यु प्रमाण पत्र 2026: 1 जुलाई 2026 से केंद्रीय CRS पोर्टल, पंचायत और नगर परिषद के पंजीयक, पुराने रिकॉर्ड, 21 दिन में मुफ़्त पंजीकरण और देर से पंजीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  "h1": "गोवा मृत्यु प्रमाण पत्र 2026: CRS पोर्टल, पंचायत/नगर पंजीयक और पुराने रिकॉर्ड",
  lead: "गोवा ने 1 जुलाई 2026 से जन्म-मृत्यु पंजीकरण केंद्रीय CRS पोर्टल पर कर दिया है। राज्य का पुराना पोर्टल (rbd.goa.gov.in) अब केवल उन पुराने रिकॉर्ड के प्रमाण पत्र के लिए है जो अभी CRS पर नहीं पहुंचे। पंजीयक गांव में पंचायत सचिव और शहर में नगर परिषद के मुख्य अधिकारी या पणजी नगर निगम के आयुक्त हैं। 21 दिन के भीतर पंजीकरण मुफ़्त है।",
  facts: [
    [
      "1 जुलाई 2026 से",
      "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">केंद्रीय CRS पोर्टल</a>"
    ],
    [
      "पुराने रिकॉर्ड",
      "<a href=\"https://rbd.goa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rbd.goa.gov.in</a>"
    ],
    [
      "मुख्य पंजीयक",
      "योजना, सांख्यिकी व मूल्यांकन निदेशालय (DPSE)"
    ],
    [
      "वैधता",
      "प्रमाण पत्र की कोई समय-सीमा नहीं"
    ]
  ],
  notice: "<strong>1 जुलाई 2026 से बदलाव:</strong> गोवा सरकार की प्रेस विज्ञप्ति के अनुसार नए जन्म-मृत्यु पंजीकरण अब राज्य पोर्टल पर नहीं, केंद्रीय CRS पोर्टल पर होते हैं। CRS पर पहुंच चुके पुराने रिकॉर्ड का प्रमाण पत्र भी CRS से ही मिलेगा, और दोनों व्यवस्थाओं के प्रमाण पत्रों का फॉर्मेट अलग हो सकता है। नकली वेबसाइटों से बचने के लिए पोर्टल का पता खुद टाइप करें।",
  sections: [
    {
      id: "kyon",
      title: "मृत्यु प्रमाण पत्र क्यों ज़रूरी है",
      list: [
        "संपत्ति के <strong>उत्तराधिकार</strong> (विरासत), बीमा का दावा और बैंक या दूसरी कंपनियों से बकाया पैसा लेने में यह प्रमाण पत्र मांगा जाता है (राष्ट्रीय CRS की जानकारी)।",
        "मृत्यु का पंजीकरण <strong>उसी जगह</strong> होता है जहां मृत्यु हुई, भले ही परिवार कहीं और रहता हो।",
        "पंजीकरण के बाद पंजीयक सूचना देने वाले को <strong>7 दिन के भीतर एक प्रति मुफ़्त</strong> देता है, कागज़ पर या इलेक्ट्रॉनिक रूप में (अधिनियम की धारा 12)। और प्रतियां तय शुल्क देकर मिलती हैं (धारा 17)।",
        "मृत्यु प्रमाण पत्र पर <strong>मृत्यु का कारण नहीं लिखा जाता</strong>। 2023 के संशोधन के बाद कानून में यही नियम है।"
      ]
    },
    {
      id: "kahan",
      title: "गोवा में कहां होता है पंजीकरण",
      list: [
        "<a href=\"https://www.dpse.goa.gov.in/off-crbd.htm\" target=\"_blank\" rel=\"noopener nofollow\">योजना, सांख्यिकी और मूल्यांकन निदेशालय</a> (DPSE) राज्य का मुख्य पंजीयक है।",
        "<strong>पंजीयक:</strong> 191 ग्राम पंचायतों के सचिव, 13 नगर परिषदों के मुख्य अधिकारी, पणजी नगर निगम के आयुक्त और गोवा मेडिकल कॉलेज (बांबोलिम) के चिकित्सा अधीक्षक। कुल 206 पंजीकरण इकाइयां हैं।",
        "<strong>1 जुलाई 2026 से</strong> नए पंजीकरण केंद्रीय CRS पोर्टल पर होते हैं।",
        "<a href=\"https://rbd.goa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">राज्य का पुराना पोर्टल</a> अब केवल उन रिकॉर्ड के प्रमाण पत्र के लिए है जो अभी CRS पर नहीं भेजे गए।"
      ]
    },
    {
      id: "kaun",
      title: "मृत्यु की सूचना कौन देता है",
      list: [
        "<strong>अस्पताल, नर्सिंग होम या दूसरे संस्थान में मृत्यु:</strong> संस्थान का प्रभारी चिकित्सा अधिकारी या उसका अधिकृत व्यक्ति पंजीयक को सूचना देता है। परिवार को यह सूचना अलग से नहीं देनी होती, लेकिन अस्पताल से पंजीकरण की पर्ची या नंबर ज़रूर लें।",
        "<strong>घर पर मृत्यु:</strong> घर का मुखिया, उसके न होने पर घर में मौजूद निकट संबंधी, या वहां मौजूद सबसे बड़ा व्यक्ति पंजीयक को सूचना देता है। आंगनवाड़ी कार्यकर्ता, ANM और आशा जैसे अधिसूचित लोग भी सूचना दे सकते हैं।",
        "सूचना <strong>21 दिन के भीतर</strong> देनी होती है। इस समय में पंजीकरण पर <strong>कोई शुल्क नहीं</strong> लगता।"
      ]
    },
    {
      id: "aavedan",
      title: "आवेदन का तरीका",
      steps: [
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल पंजीयक को सूचना देता है। गोवा मेडिकल कॉलेज में हुई मृत्यु वहीं की पंजीकरण इकाई में दर्ज होती है।",
        "<strong>घर पर मृत्यु:</strong> 21 दिन के भीतर अपनी ग्राम पंचायत के सचिव या नगर परिषद/नगर निगम के पंजीयक को सूचना दें।",
        "मृतक का नाम, उम्र, पता, मृत्यु की तारीख और जगह, और सूचना देने वाले का ब्योरा दें। Form 4 या 4A साथ दें।",
        "पंजीकरण के बाद प्रमाण पत्र CRS पोर्टल से मिलता है (नीचे देखें)।",
        "21 दिन के बाद का पंजीकरण नीचे \"समय-सीमा\" के हिस्से के अनुसार होगा। शुल्क पंजीयक से पूछें।"
      ]
    },
    {
      id: "purane",
      title: "पुराने रिकॉर्ड और वैधता",
      list: [
        "1 जुलाई 2026 से पहले दर्ज मृत्यु का रिकॉर्ड अगर CRS पर भेजा जा चुका है, तो उसका प्रमाण पत्र केवल CRS पोर्टल से मिलेगा।",
        "जो रिकॉर्ड अभी CRS पर नहीं पहुंचे, उनके प्रमाण पत्र <a href=\"https://rbd.goa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rbd.goa.gov.in</a> से मिलते हैं।",
        "मुख्य पंजीयक कार्यालय के स्पष्टीकरण के अनुसार न केंद्रीय कानून और न गोवा के नियम जन्म-मृत्यु प्रमाण पत्र की <strong>वैधता की कोई समय-सीमा</strong> तय करते हैं। कोई दफ्तर \"नया प्रमाण पत्र\" मांगे तो यह बात बता सकते हैं।"
      ]
    },
    {
      id: "kaaran-praman",
      title: "मृत्यु के कारण का चिकित्सा प्रमाण पत्र (Form 4 / 4A)",
      list: [
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल (सरकारी हो या निजी) डॉक्टर के हस्ताक्षर वाला मृत्यु के कारण का प्रमाण पत्र (<strong>Form 4</strong>) <strong>मुफ़्त</strong> में पंजीयक को भेजता है और उसकी एक प्रति मृतक के निकट संबंधी को देता है।",
        "<strong>घर या दूसरी जगह मृत्यु:</strong> अगर बीमारी के दौरान किसी डॉक्टर ने इलाज किया था, तो वह डॉक्टर मृत्यु के बाद <strong>मुफ़्त</strong> में यह प्रमाण पत्र (<strong>Form 4A</strong>) सूचना देने वाले को देता है। सूचना देने वाला इसे मृत्यु की रिपोर्ट (<strong>Form 2</strong>) के साथ पंजीयक को देता है।",
        "यह प्रमाण पत्र पंजीयक के रिकॉर्ड के लिए है। आपको मिलने वाले मृत्यु प्रमाण पत्र पर मृत्यु का कारण नहीं छपता।"
      ],
      callout: {
        kind: "info",
        html: "घर पर मृत्यु हुई और किसी डॉक्टर ने इलाज नहीं किया था, तो पंजीयक पहचान और मृत्यु की पुष्टि के लिए दूसरे कागज़ मांग सकता है, जैसे श्मशान या कब्रिस्तान की पर्ची, पंचायत या वार्ड के प्रतिनिधि का पत्र। जाने से पहले पंजीयक कार्यालय से पूछ लें।"
      }
    },
    {
      id: "samay",
      title: "समय-सीमा और देर से पंजीकरण",
      intro: "ये केंद्रीय कानून (1969 का अधिनियम, 2023 और 2026 के संशोधन के साथ) के नियम हैं। देरी का शुल्क हर राज्य के नियमों से तय होता है, इसलिए यहां शुल्क की राशि नहीं लिखी है।",
      table: {
        head: [
          "मृत्यु के कितने बाद",
          "क्या करना होगा"
        ],
        rows: [
          [
            "21 दिन के भीतर",
            "<strong>कोई शुल्क नहीं।</strong>"
          ],
          [
            "21 से 30 दिन",
            "देरी का शुल्क देकर पंजीयक के पास पंजीकरण।"
          ],
          [
            "30 दिन से 1 साल",
            "ज़िला पंजीयक (District Registrar) या तय अधिकारी की <strong>लिखित अनुमति</strong>, देरी का शुल्क और स्व-प्रमाणित दस्तावेज़।"
          ],
          [
            "1 साल से 2 साल",
            "ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या ज़िला मजिस्ट्रेट द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, जो 1 अक्टूबर 2026 से लागू है)"
          ],
          [
            "2 साल के बाद",
            "प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, 1 अक्टूबर 2026 से लागू)"
          ]
        ]
      },
      callout: {
        kind: "warn",
        html: "देर से पंजीकरण में मृत्यु का कोई सबूत मांगा जाता है, जैसे अस्पताल का रिकॉर्ड, डॉक्टर का प्रमाण पत्र, श्मशान या कब्रिस्तान की रसीद, और शपथ पत्र। कौन सा सबूत चलेगा, यह आपके पंजीयक और राज्य के नियमों पर है।"
      }
    },
    {
      id: "crs-download",
      title: "CRS पोर्टल से प्रमाण पत्र डाउनलोड करना",
      intro: "जिन इकाइयों का रिकॉर्ड केंद्रीय CRS पोर्टल पर है, वहां <a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate पेज</a> से प्रमाण पत्र निकलता है।",
      steps: [
        "<a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in/crs/dwnld</a> खोलें। पता खुद टाइप करें; भारत के महारजिस्ट्रार (RGI) ने अक्टूबर 2025 में मिलती-जुलती नकली वेबसाइटों से सावधान किया है।",
        "बॉक्स में <strong>Application Reference No.</strong> डालें और आगे बढ़ें।",
        "पंजीकृत मोबाइल पर आया <strong>OTP</strong> डालकर सत्यापन करें।",
        "सत्यापन के बाद प्रमाण पत्र <strong>PDF</strong> में डाउनलोड हो जाएगा।"
      ],
      callout: {
        kind: "info",
        html: "संदर्भ नंबर नहीं मिल रहा तो अस्पताल या पंजीयक कार्यालय से पूछें। CRS पोर्टल के अनुसार आम नागरिक खुद कुल चार घटनाएं (events) तक ही दर्ज कर सकता है।"
      }
    },
    {
      id: "sudhar",
      title: "गलती सुधारना और अतिरिक्त प्रतियां",
      list: [
        "नाम, उम्र, पता या दूसरी जानकारी में गलती हो तो सुधार (correction) अधिनियम की धारा 15 और राज्य के नियमों के तहत होता है। पंजीयक को सही जानकारी के प्रमाण के साथ आवेदन दें।",
        "पहली प्रति मुफ़्त है। बाद में कोई भी व्यक्ति तय शुल्क देकर और प्रतियां ले सकता है (धारा 17)।",
        "प्रमाण पत्र मिलते ही मृतक का नाम, पिता या पति का नाम, मृत्यु की तारीख और जगह ध्यान से जांचें। गलती जल्दी पकड़ में आए तो सुधार आसान रहता है।"
      ]
    },
    {
      id: "shikayat",
      title: "आवेदन अटके या खारिज हो तो कहां जाएं",
      list: [
        "पंजीयक के किसी फैसले या आदेश से असंतुष्ट हों तो <strong>30 दिन के भीतर ज़िला पंजीयक</strong> (District Registrar) के पास अपील कर सकते हैं (अधिनियम की धारा 25A)।",
        "ज़िला पंजीयक के आदेश के खिलाफ <strong>30 दिन के भीतर मुख्य पंजीयक</strong> (Chief Registrar) के पास अपील होती है।",
        "अपील का फैसला <strong>90 दिन</strong> के भीतर करना ज़रूरी है।"
      ]
    }
  ],
  official: [
    {
      href: "https://www.goa.gov.in/wp-content/uploads/2026/07/PR-380.pdf",
      title: "गोवा सरकार प्रेस विज्ञप्ति: CRS पोर्टल पर बदलाव (जुलाई 2026)",
      note: "PDF"
    },
    {
      href: "https://www.dpse.goa.gov.in/off-crbd.htm",
      title: "DPSE गोवा: मुख्य पंजीयक कार्यालय"
    },
    {
      href: "https://rbd.goa.gov.in/",
      title: "गोवा जन्म-मृत्यु पंजीकरण (पुराने रिकॉर्ड)"
    },
    {
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    }
  ],
  faq: [
    {
      q: "गोवा में अब मृत्यु पंजीकरण किस पोर्टल पर होता है?",
      a: "1 जुलाई 2026 से केंद्रीय CRS पोर्टल पर। राज्य का पुराना पोर्टल केवल उन पुराने रिकॉर्ड के प्रमाण पत्र के लिए है जो अभी CRS पर नहीं पहुंचे।"
    },
    {
      q: "गोवा में मृत्यु का पंजीयक कौन है?",
      a: "गांव में ग्राम पंचायत सचिव, शहर में नगर परिषद के मुख्य अधिकारी या पणजी नगर निगम के आयुक्त, और गोवा मेडिकल कॉलेज में वहां के चिकित्सा अधीक्षक।"
    },
    {
      q: "क्या पुराना मृत्यु प्रमाण पत्र अमान्य हो जाता है?",
      a: "नहीं। गोवा के मुख्य पंजीयक कार्यालय के अनुसार कानून में जन्म-मृत्यु प्रमाण पत्र की वैधता की कोई समय-सीमा नहीं है।"
    },
    {
      q: "मृत्यु के 21 दिन के भीतर पंजीकरण का शुल्क कितना है?",
      a: "कुछ नहीं। राष्ट्रीय CRS की जानकारी के अनुसार 21 दिन के भीतर सूचना देने पर कोई शुल्क नहीं लगता, और सूचना देने वाले को एक प्रति मुफ़्त मिलती है।"
    },
    {
      q: "क्या मृत्यु प्रमाण पत्र पर मृत्यु का कारण लिखा होता है?",
      a: "नहीं। 2023 के संशोधन के बाद कानून कहता है कि किसी को दिए गए मृत्यु प्रमाण पत्र में मृत्यु का कारण नहीं दिखाया जाएगा। कारण का चिकित्सा प्रमाण पत्र (Form 4/4A) पंजीयक के रिकॉर्ड में रहता है।"
    },
    {
      q: "एक साल से ज़्यादा देर हो जाए तो क्या करें?",
      a: "एक से दो साल के बीच ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या ज़िला मजिस्ट्रेट द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश चाहिए। दो साल के बाद प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का आदेश चाहिए। यह 1 अक्टूबर 2026 से लागू 2026 के संशोधन के अनुसार है। शुल्क राज्य के नियमों से तय होता है।"
    },
    {
      q: "पंजीयक का फैसला गलत लगे तो कहां अपील करें?",
      a: "फैसले के 30 दिन के भीतर ज़िला पंजीयक के पास, और उसके आदेश पर 30 दिन के भीतर मुख्य पंजीयक के पास। फैसला 90 दिन में होना चाहिए (धारा 25A)।"
    }
  ],
  related: [
    {
      href: "/states/goa-birth-certificate.html",
      emoji: "👶",
      title: "गोवा जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/goa-domicile-certificate.html",
      emoji: "🏠",
      title: "गोवा निवास प्रमाण पत्र",
      text: "निवास का सबूत"
    },
    {
      href: "/service/death-certificate.html",
      emoji: "🕊️",
      title: "मृत्यु प्रमाण पत्र: पूरी जानकारी",
      text: "सभी राज्य"
    },
    {
      href: "/affidavit/",
      emoji: "✍️",
      title: "एफिडेविट और स्व-घोषणा",
      text: "नमूने और नियम"
    },
    {
      href: "/service/digilocker.html",
      emoji: "📲",
      title: "DigiLocker गाइड",
      text: "प्रमाण पत्र फोन में रखें"
    },
    {
      href: "/tools/document-compressor.html",
      emoji: "🗜️",
      title: "फोटो / Document Resizer",
      text: "अपलोड के साइज़ में, फ्री"
    }
  ],
  otherStatesTitle: "दूसरे राज्यों में मृत्यु प्रमाण पत्र",
  aside: [
    {
      href: "https://crsorgi.gov.in/",
      label: "📝 CRS पोर्टल खोलें"
    },
    {
      href: "/service/death-certificate.html",
      label: "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
