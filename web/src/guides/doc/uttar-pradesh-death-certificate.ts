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
// - Uttar Pradesh: dc.crsorgi.gov.in list includes Uttar Pradesh; district pages
//   (prayagrajdivision.nic.in) link to CRS (same as the birth guide);
//   services.india.gov.in listings of death registration for Gorakhpur, Ghaziabad,
//   Varanasi, Ayodhya and Mathura-Vrindavan municipal corporations (e-Nagarsewa urban
//   services include birth and death certificates).
// Left out (not confirmed): UP rules' fees, the rural registrar's exact post, the
// e-Nagarsewa web address.
export const uttarPradeshDeathCertificate: DocGuide = {
  state: {
    slug: "uttar-pradesh",
    hi: "उत्तर प्रदेश"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "Uttar Pradesh Death Certificate 2026",
  description: "उत्तर प्रदेश मृत्यु प्रमाण पत्र 2026: केंद्रीय CRS पोर्टल, नगर निगम और ग्रामीण पंजीयक, 21 दिन में मुफ़्त पंजीकरण, देर से पंजीकरण, डाउनलोड और अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "उत्तर प्रदेश मृत्यु प्रमाण पत्र 2026: CRS पोर्टल, पंजीयक, देर से पंजीकरण और डाउनलोड",
  lead: "उत्तर प्रदेश में मृत्यु का पंजीकरण केंद्रीय CRS पोर्टल (crsorgi.gov.in) पर होता है। 21 दिन के भीतर सूचना देने पर पंजीकरण मुफ़्त है। शहर में नगर निगम या नगर पालिका और गांव में ब्लॉक/ग्रामीण पंजीकरण इकाई के पंजीयक के पास जाना होता है, और अस्पताल में हुई मृत्यु की सूचना अस्पताल देता है।",
  facts: [
    [
      "पोर्टल",
      "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in (CRS)</a>"
    ],
    [
      "डाउनलोड",
      "<a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate पेज</a>"
    ],
    [
      "21 दिन के भीतर",
      "पंजीकरण मुफ़्त"
    ],
    [
      "आवेदन कहां",
      "नगर निकाय / ब्लॉक या ग्रामीण इकाई / अस्पताल"
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
      title: "उत्तर प्रदेश में कहां होता है पंजीकरण",
      list: [
        "केंद्रीय CRS पोर्टल की सूची में उत्तर प्रदेश शामिल है। प्रयागराज मंडल जैसी ज़िला वेबसाइटें जन्म-मृत्यु पंजीकरण के लिए <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> का लिंक देती हैं।",
        "<strong>शहरी क्षेत्र:</strong> नगर निगम या नगर पालिका के पंजीयक। राष्ट्रीय सेवा पोर्टल पर गोरखपुर, गाज़ियाबाद, वाराणसी, अयोध्या और मथुरा-वृंदावन नगर निगमों की ऑनलाइन मृत्यु पंजीकरण सेवाएं दर्ज हैं।",
        "<strong>ग्रामीण क्षेत्र:</strong> ब्लॉक या ग्रामीण पंजीकरण इकाई। अपने गांव का पंजीयक कौन है, यह ब्लॉक कार्यालय या ग्राम पंचायत से पक्का कर लें।"
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
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल पंजीयक को सूचना देता है। पंजीकरण की पर्ची या नंबर और मृत्यु के कारण के प्रमाण पत्र (Form 4) की प्रति लें।",
        "<strong>घर पर मृत्यु:</strong> 21 दिन के भीतर नगर निकाय या ग्रामीण पंजीकरण इकाई के पंजीयक को सूचना दें, या CRS पोर्टल पर खुद रिपोर्ट करें (आम नागरिक कुल चार घटनाएं तक दर्ज कर सकता है)।",
        "मृतक का नाम, उम्र, पता, मृत्यु की तारीख और जगह, और सूचना देने वाले का ब्योरा दें। इलाज करने वाले डॉक्टर का प्रमाण पत्र (Form 4A) हो तो साथ दें।",
        "पंजीकरण के बाद एक मुफ़्त प्रति लें या CRS पोर्टल से डाउनलोड करें।",
        "21 दिन के बाद का पंजीकरण नीचे \"समय-सीमा\" के हिस्से के अनुसार होगा। शुल्क पंजीयक से पूछें।"
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
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    },
    {
      href: "https://dc.crsorgi.gov.in/crs/dwnld",
      title: "CRS: प्रमाण पत्र डाउनलोड"
    },
    {
      href: "https://prayagrajdivision.nic.in/hi/service/%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AE-%E0%A4%8F%E0%A4%B5%E0%A4%82-%E0%A4%AE%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A5%81-%E0%A4%AA%E0%A4%82%E0%A4%9C%E0%A5%80%E0%A4%95%E0%A4%B0%E0%A4%A3/",
      title: "प्रयागराज मंडल: जन्म एवं मृत्यु पंजीकरण"
    },
    {
      href: "https://services.india.gov.in/service/detail/death-registration-for-gorakhpur-municipal-corporation-uttar-pradesh-1",
      title: "राष्ट्रीय पोर्टल: गोरखपुर नगर निगम मृत्यु पंजीकरण"
    }
  ],
  faq: [
    {
      q: "उत्तर प्रदेश में मृत्यु पंजीकरण कहां होता है?",
      a: "शहर में नगर निगम या नगर पालिका के पंजीयक के पास और गांव में ब्लॉक या ग्रामीण पंजीकरण इकाई में। रिकॉर्ड केंद्रीय CRS पोर्टल crsorgi.gov.in पर रहता है।"
    },
    {
      q: "उत्तर प्रदेश में देर से मृत्यु पंजीकरण का शुल्क कितना है?",
      a: "यह राज्य के नियमों से तय होता है और हमें मौजूदा राशि आधिकारिक पेज से पक्की नहीं मिली, इसलिए यहां नहीं लिखी। अपने पंजीयक कार्यालय से पूछें।"
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
      href: "/states/uttar-pradesh-birth-certificate.html",
      emoji: "👶",
      title: "उत्तर प्रदेश जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/uttar-pradesh-domicile-certificate.html",
      emoji: "🏠",
      title: "उत्तर प्रदेश निवास प्रमाण पत्र",
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
