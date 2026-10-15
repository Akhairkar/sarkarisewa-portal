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
// - Rajasthan: Pehchan portal description (unified birth, death, still-birth and
//   marriage registration by NIC Rajasthan; sub-registrars register within 21 days,
//   after 21 days only the Registrar office; online/app applications and e-Mitra
//   kiosks; digitally signed certificates by e-mail, portal download and DigiLocker;
//   toll-free 18001806785, pehchan.raj@gov.in) as seen in NIC (informatics.nic.in)
//   pages in search extracts; Pehchan workshop, Jaipur, 15-16 Jan 2026; Rajasthan RBD
//   (Amendment) Rules, 2025 PDF on Pehchan (same as the birth guide).
// Left out (not confirmed): the state's late fees, copy fees, processing days.
export const rajasthanDeathCertificate: DocGuide = {
  state: {
    slug: "rajasthan",
    hi: "राजस्थान"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "Rajasthan Death Certificate 2026: Apply & Status",
  description: "राजस्थान मृत्यु प्रमाण पत्र 2026: Pehchan पोर्टल, 21 दिन में मुफ़्त पंजीकरण, अस्पताल और घर पर मृत्यु, देर से पंजीकरण के नियम, डाउनलोड और अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  "h1": "राजस्थान मृत्यु प्रमाण पत्र 2026: Pehchan पोर्टल, पंजीयक, देर से पंजीकरण और डाउनलोड",
  lead: "राजस्थान में मृत्यु का पंजीकरण राज्य के Pehchan पोर्टल पर होता है। मृत्यु के 21 दिन के भीतर सूचना देने पर पंजीकरण मुफ़्त है और उप-पंजीयक पोर्टल पर दर्ज करके प्रमाण पत्र जारी करते हैं; 21 दिन के बाद पंजीकरण केवल पंजीयक के कार्यालय में होता है। डिजिटल हस्ताक्षर वाला प्रमाण पत्र पोर्टल से डाउनलोड होता है और DigiLocker में भी मिलता है।",
  facts: [
    [
      "पोर्टल",
      "<a href=\"https://pehchan.rajasthan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Pehchan (pehchan.rajasthan.gov.in)</a>"
    ],
    [
      "21 दिन के भीतर",
      "पंजीकरण मुफ़्त"
    ],
    [
      "हेल्पलाइन",
      "1800-180-6785 (टोल फ्री)"
    ],
    [
      "डाउनलोड",
      "Pehchan पोर्टल और DigiLocker"
    ]
  ],
  notice: "<strong>नकली वेबसाइटों से सावधान:</strong> भारत के महारजिस्ट्रार (RGI) ने 13 अक्टूबर 2025 की सलाह में बताया कि जन्म-मृत्यु पंजीकरण की असली वेबसाइट जैसी दिखने वाली नकली वेबसाइटें बनाई गई हैं। पोर्टल का पता सर्च इंजन से नहीं, खुद टाइप करके खोलें, और किसी को OTP न बताएं।",
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
      title: "राजस्थान में कहां होता है पंजीकरण",
      list: [
        "राज्य का जन्म-मृत्यु पंजीकरण पोर्टल <a href=\"https://pehchan.rajasthan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Pehchan</a> है, जिसे NIC राजस्थान ने बनाया है। इसी पर जन्म, मृत्यु, मृत-जन्म और विवाह का पंजीकरण होता है।",
        "पोर्टल की जानकारी के अनुसार उप-पंजीयक मृत्यु को घटना के <strong>21 दिन के भीतर</strong> पोर्टल पर दर्ज करके प्रमाण पत्र जारी करते हैं।",
        "<strong>21 दिन के बाद</strong> पंजीकरण केवल संबंधित पंजीयक के कार्यालय में हो सकता है।",
        "NIC की जानकारी के अनुसार राज्य में 14,500 से ज़्यादा पंजीयक और उप-पंजीयक इस पोर्टल पर काम करते हैं, और निजी अस्पताल भी इससे जुड़े हैं।"
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
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल सूचना देता है। अस्पताल से पंजीकरण की पर्ची या नंबर और मृत्यु के कारण के प्रमाण पत्र (Form 4) की प्रति लें।",
        "<strong>घर पर मृत्यु:</strong> 21 दिन के भीतर अपने ग्राम पंचायत या नगर निकाय के पंजीयक/उप-पंजीयक के पास सूचना दें। NIC की जानकारी के अनुसार नागरिक Pehchan पोर्टल या उसके मोबाइल ऐप से खुद आवेदन कर सकते हैं, और e-Mitra कियोस्क से भी आवेदन होता है।",
        "मृतक और सूचना देने वाले का ब्योरा, पता और आधार नंबर (अगर हो) सही भरें। राज्य के 2025 के संशोधित नियमों के अनुसार नाम (पहला-बीच का-अंतिम), तारीख DD-MM-YYYY में और पूरा पता (मकान नंबर, वार्ड, गांव/शहर, तहसील, ज़िला, पिन कोड) लिखना होता है।",
        "पंजीकरण के बाद डिजिटल हस्ताक्षर वाला प्रमाण पत्र ई-मेल पर आता है और पोर्टल से डाउनलोड होता है।",
        "21 दिन के बाद का पंजीकरण नीचे \"समय-सीमा\" के हिस्से के अनुसार पंजीयक कार्यालय में होगा। राज्य का शुल्क पंजीयक से पूछें।"
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
      id: "download",
      title: "Pehchan से डाउनलोड और DigiLocker",
      list: [
        "Pehchan पोर्टल पर नागरिकों के लिए प्रमाण पत्र डाउनलोड, पंजीकरण का आवेदन और पुराने प्रमाण पत्रों के कंप्यूटरीकरण जैसी सेवाएं हैं।",
        "Pehchan पर बने प्रमाण पत्र <strong>DigiLocker</strong> में भी मिलते हैं। देखें: <a href=\"/service/digilocker.html\">DigiLocker गाइड</a>।",
        "मदद के लिए NIC की जानकारी के अनुसार टोल-फ्री हेल्पलाइन <strong>1800-180-6785</strong> और ई-मेल pehchan.raj@gov.in है।"
      ]
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
      href: "https://pehchan.rajasthan.gov.in/",
      title: "Pehchan: राजस्थान जन्म-मृत्यु पंजीकरण"
    },
    {
      href: "https://pehchan.rajasthan.gov.in/pehchan9/Download/BIRTH_DEATH_ACTAndRULES_2025.pdf",
      title: "Pehchan: अधिनियम और राजस्थान नियम (2025 तक)",
      note: "PDF"
    },
    {
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    }
  ],
  faq: [
    {
      q: "राजस्थान में मृत्यु प्रमाण पत्र किस पोर्टल से बनता है?",
      a: "राज्य के Pehchan पोर्टल (pehchan.rajasthan.gov.in) से। 21 दिन के भीतर उप-पंजीयक पोर्टल पर पंजीकरण करते हैं; 21 दिन के बाद पंजीकरण केवल पंजीयक कार्यालय में होता है।"
    },
    {
      q: "क्या e-Mitra से मृत्यु प्रमाण पत्र का आवेदन हो सकता है?",
      a: "NIC की जानकारी के अनुसार Pehchan की सेवाओं के लिए e-Mitra कियोस्क से भी आवेदन होता है। कियोस्क पर मृतक और सूचना देने वाले के कागज़ साथ ले जाएं।"
    },
    {
      q: "Pehchan की हेल्पलाइन क्या है?",
      a: "टोल-फ्री 1800-180-6785 और ई-मेल pehchan.raj@gov.in (NIC की जानकारी के अनुसार)।"
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
      href: "/states/rajasthan-birth-certificate.html",
      emoji: "👶",
      title: "राजस्थान जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/rajasthan-domicile-certificate.html",
      emoji: "🏠",
      title: "राजस्थान निवास प्रमाण पत्र",
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
      href: "https://pehchan.rajasthan.gov.in/",
      label: "📝 Pehchan पोर्टल खोलें"
    },
    {
      href: "/service/death-certificate.html",
      label: "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
