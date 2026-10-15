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
// - Telangana: ghmc.gov.in/Birth.aspx (hospital deaths entered online by the hospital,
//   certificate from MeeSeva after Registrar approval; hospitals without login give
//   data to GHMC staff; home deaths need the burial-ground receipt or entry in the
//   burial ground app, then certificate from MeeSeva); bnd.ghmc.gov.in status page
//   and ts.meeseva.telangana.gov.in (same as the birth guide); dc.crsorgi.gov.in
//   list includes "Telangana (GHMC)".
// Left out (sources conflict): fees, late fees, processing days, the process outside
// GHMC beyond the national rule.
export const telanganaDeathCertificate: DocGuide = {
  state: {
    slug: "telangana",
    hi: "तेलंगाना"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "Telangana Death Certificate 2026: Apply & Status",
  description: "तेलंगाना मृत्यु प्रमाण पत्र 2026: हैदराबाद (GHMC) में अस्पताल और घर पर मृत्यु, MeeSeva से प्रमाण पत्र, स्टेटस, 21 दिन में मुफ़्त पंजीकरण और देर से पंजीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  "h1": "तेलंगाना मृत्यु प्रमाण पत्र 2026: GHMC, MeeSeva, घर पर मृत्यु और देर से पंजीकरण",
  lead: "हैदराबाद (GHMC क्षेत्र) में अस्पताल में हुई मृत्यु का ब्योरा अस्पताल ऑनलाइन दर्ज करता है और पंजीयक की मंज़ूरी के बाद प्रमाण पत्र MeeSeva केंद्र से मिलता है। घर पर मृत्यु होने पर पहले श्मशान/कब्रिस्तान की रसीद लेनी होती है। GHMC के बाहर पंजीकरण उस नगर निकाय या ग्राम पंचायत के पंजीयक के पास होता है जहां मृत्यु हुई।",
  facts: [
    [
      "हैदराबाद",
      "<a href=\"https://www.ghmc.gov.in/Birth.aspx\" target=\"_blank\" rel=\"noopener nofollow\">GHMC जन्म-मृत्यु पेज</a>"
    ],
    [
      "प्रमाण पत्र",
      "<a href=\"https://ts.meeseva.telangana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">MeeSeva केंद्र / पोर्टल</a>"
    ],
    [
      "स्टेटस",
      "<a href=\"https://bnd.ghmc.gov.in/KnowYourApplicationStatus.aspx\" target=\"_blank\" rel=\"noopener nofollow\">GHMC आवेदन स्थिति</a>"
    ],
    [
      "21 दिन के भीतर",
      "पंजीकरण मुफ़्त"
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
      title: "तेलंगाना में कहां होता है पंजीकरण",
      list: [
        "<strong>GHMC क्षेत्र:</strong> केंद्रीय CRS पोर्टल की सूची में \"Telangana (GHMC)\" शामिल है। GHMC के पेज के अनुसार प्रमाण पत्र MeeSeva केंद्र से लिया जाता है।",
        "<strong>GHMC के बाहर:</strong> राष्ट्रीय नियम के अनुसार पंजीकरण उस जगह के नगर निकाय या ग्राम पंचायत के पंजीयक के पास होता है जहां मृत्यु हुई। अपने क्षेत्र का पंजीयक कौन है, यह नगर पालिका या पंचायत कार्यालय से पूछें।"
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
        "<strong>अस्पताल में मृत्यु (GHMC):</strong> अस्पताल प्रशासन मृत्यु का ब्योरा ऑनलाइन दर्ज करता है। जिस अस्पताल के पास लॉगिन नहीं है, वह ब्योरा GHMC कर्मचारियों को देता है और वे अपलोड करते हैं।",
        "<strong>घर पर मृत्यु (GHMC):</strong> परिवार श्मशान या कब्रिस्तान से रसीद लेता है, या वहां के ऐप (burial ground app) में मृतक का ब्योरा दर्ज कराता है।",
        "पंजीयक की मंज़ूरी के बाद प्रमाण पत्र <strong>MeeSeva</strong> केंद्र से लें।",
        "आवेदन की स्थिति <a href=\"https://bnd.ghmc.gov.in/KnowYourApplicationStatus.aspx\" target=\"_blank\" rel=\"noopener nofollow\">GHMC के स्टेटस पेज</a> पर देखें।",
        "21 दिन के बाद का पंजीकरण नीचे \"समय-सीमा\" के हिस्से के अनुसार होगा। शुल्क पंजीयक या MeeSeva केंद्र पर पूछें।"
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
      title: "MeeSeva और CRS से प्रति",
      list: [
        "<a href=\"https://ts.meeseva.telangana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">MeeSeva तेलंगाना</a> पर जन्म-मृत्यु रिकॉर्ड की खोज और सत्यापन की सेवाएं हैं। प्रमाण पत्र नज़दीकी MeeSeva केंद्र से भी ले सकते हैं।",
        "GHMC का रिकॉर्ड केंद्रीय CRS पर है, इसलिए पंजीकरण का Application Reference No. हो तो <a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">CRS Download Certificate पेज</a> से भी OTP डालकर PDF निकाला जा सकता है।"
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
      href: "https://www.ghmc.gov.in/Birth.aspx",
      title: "GHMC: जन्म और मृत्यु पेज"
    },
    {
      href: "https://bnd.ghmc.gov.in/KnowYourApplicationStatus.aspx",
      title: "GHMC: आवेदन की स्थिति (जन्म-मृत्यु)"
    },
    {
      href: "https://ts.meeseva.telangana.gov.in/",
      title: "MeeSeva तेलंगाना"
    },
    {
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    }
  ],
  faq: [
    {
      q: "हैदराबाद में अस्पताल में मृत्यु हुई, प्रमाण पत्र कहां से मिलेगा?",
      a: "अस्पताल मृत्यु का ब्योरा ऑनलाइन दर्ज करता है। पंजीयक की मंज़ूरी के बाद प्रमाण पत्र MeeSeva केंद्र से मिलता है (GHMC के पेज के अनुसार)।"
    },
    {
      q: "घर पर मृत्यु हुई तो हैदराबाद में क्या करें?",
      a: "श्मशान या कब्रिस्तान से रसीद लें या वहां के ऐप में मृतक का ब्योरा दर्ज कराएं। उसके बाद प्रमाण पत्र MeeSeva से लें।"
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
      href: "/states/telangana-birth-certificate.html",
      emoji: "👶",
      title: "तेलंगाना जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/telangana-domicile-certificate.html",
      emoji: "🏠",
      title: "तेलंगाना निवास प्रमाण पत्र",
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
      href: "https://ts.meeseva.telangana.gov.in/",
      label: "📝 MeeSeva खोलें"
    },
    {
      href: "/service/death-certificate.html",
      label: "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
