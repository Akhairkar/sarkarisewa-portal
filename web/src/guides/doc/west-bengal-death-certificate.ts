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
// - West Bengal: janma-mrityutathya.wb.gov.in (state birth-death portal; RBD Rules WB
//   2000 PDF on the same site; same as the birth guide); state notification as
//   reproduced on wbxpress.com (death in a government hospital: certificate from the
//   hospital before discharge of the body; private hospital or home: local body -
//   municipality, corporation or gram panchayat; no fee except for delayed
//   registration); kmcgov.in Birth/Death page.
// Left out (not confirmed): late fees, copy fees (a municipality shows Rs 10),
// helpline, processing days.
export const westBengalDeathCertificate: DocGuide = {
  state: {
    slug: "west-bengal",
    hi: "पश्चिम बंगाल"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "West Bengal Death Certificate 2026: Apply & Status",
  description: "पश्चिम बंगाल मृत्यु प्रमाण पत्र 2026: जन्म-मृत्यु तथ्य पोर्टल, सरकारी अस्पताल और स्थानीय निकाय से प्रमाण पत्र, 21 दिन में मुफ़्त पंजीकरण, देर से पंजीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "पश्चिम बंगाल मृत्यु प्रमाण पत्र 2026: जन्म-मृत्यु तथ्य पोर्टल, अस्पताल, नगर निकाय और पंचायत",
  lead: "पश्चिम बंगाल में जन्म-मृत्यु का पंजीकरण राज्य के Janma Mrityu Tathya पोर्टल पर होता है। राज्य की अधिसूचना के अनुसार सरकारी अस्पताल में हुई मृत्यु का प्रमाण पत्र वही अस्पताल देता है, और निजी अस्पताल या घर पर हुई मृत्यु का प्रमाण पत्र संबंधित नगरपालिका, नगर निगम या ग्राम पंचायत देती है। देर से पंजीकरण के अलावा इस प्रक्रिया में शुल्क नहीं लगता।",
  facts: [
    [
      "पोर्टल",
      "<a href=\"https://janma-mrityutathya.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Janma Mrityu Tathya</a>"
    ],
    [
      "सरकारी अस्पताल",
      "वहीं से प्रमाण पत्र"
    ],
    [
      "घर / निजी अस्पताल",
      "नगरपालिका, निगम या ग्राम पंचायत"
    ],
    [
      "कोलकाता",
      "<a href=\"https://www.kmcgov.in/KMCPortal/jsp/KMCBirthDeathHome.jsp\" target=\"_blank\" rel=\"noopener nofollow\">KMC जन्म-मृत्यु पेज</a>"
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
      title: "पश्चिम बंगाल में कहां होता है पंजीकरण",
      list: [
        "राज्य का जन्म-मृत्यु पोर्टल <a href=\"https://janma-mrityutathya.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Janma Mrityu Tathya</a> है। इस पर नया पंजीकरण, देर से पंजीकरण, सुधार और पुराने रिकॉर्ड के डिजिटलीकरण की सेवाएं हैं।",
        "<strong>सरकारी अस्पताल में मृत्यु:</strong> राज्य की अधिसूचना के अनुसार प्रमाण पत्र उसी अस्पताल से मिलता है।",
        "<strong>निजी अस्पताल, नर्सिंग होम या घर पर मृत्यु:</strong> प्रमाण पत्र संबंधित <strong>नगरपालिका, नगर निगम या ग्राम पंचायत</strong> देती है।",
        "<strong>कोलकाता:</strong> <a href=\"https://www.kmcgov.in/KMCPortal/jsp/KMCBirthDeathHome.jsp\" target=\"_blank\" rel=\"noopener nofollow\">कोलकाता नगर निगम के पेज</a> के अनुसार वहां पंजीकृत घटनाओं के प्रमाण पत्र उसके पोर्टल से मिलते हैं।"
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
        "<strong>सरकारी अस्पताल में मृत्यु:</strong> अस्पताल से ही पंजीकरण और प्रमाण पत्र की जानकारी लें।",
        "<strong>घर पर या निजी अस्पताल में मृत्यु:</strong> 21 दिन के भीतर अपनी नगरपालिका, नगर निगम या ग्राम पंचायत के पंजीयक को सूचना दें। निजी अस्पताल से मृत्यु के कारण का प्रमाण पत्र (Form 4) साथ लें।",
        "मृतक का नाम, उम्र, पता, मृत्यु की तारीख और जगह, और सूचना देने वाले का ब्योरा दें।",
        "पंजीकरण के बाद प्रमाण पत्र लें और जानकारी जांच लें।",
        "21 दिन के बाद का पंजीकरण नीचे \"समय-सीमा\" के हिस्से के अनुसार होगा। देरी का शुल्क पंजीयक से पूछें।"
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
      title: "प्रमाण पत्र की प्रति और जांच",
      list: [
        "<a href=\"https://janma-mrityutathya.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Janma Mrityu Tathya पोर्टल</a> पर नागरिकों के लिए अलग हिस्सा (Citizen section) है। प्रमाण पत्र की प्रति या स्थिति के लिए पहले यहीं देखें।",
        "कोलकाता नगर निगम में पंजीकृत मृत्यु का प्रमाण पत्र <a href=\"https://www.kmcgov.in/KMCPortal/jsp/KMCBirthDeathHome.jsp\" target=\"_blank\" rel=\"noopener nofollow\">KMC के जन्म-मृत्यु पेज</a> से मिलता है।",
        "पोर्टल पर रिकॉर्ड न मिले तो जिस अस्पताल, नगर निकाय या पंचायत ने पंजीकरण किया, वहां पूछें।"
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
      href: "https://janma-mrityutathya.wb.gov.in/",
      title: "Janma Mrityu Tathya: पश्चिम बंगाल जन्म-मृत्यु पोर्टल"
    },
    {
      href: "https://janma-mrityutathya.wb.gov.in/Documents/RBD%20Rule%20WB.pdf",
      title: "पश्चिम बंगाल जन्म-मृत्यु पंजीकरण नियम (2000)",
      note: "PDF"
    },
    {
      href: "https://www.kmcgov.in/KMCPortal/jsp/KMCBirthDeathHome.jsp",
      title: "कोलकाता नगर निगम: जन्म-मृत्यु पंजीकरण"
    },
    {
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    }
  ],
  faq: [
    {
      q: "पश्चिम बंगाल में सरकारी अस्पताल में मृत्यु हुई, प्रमाण पत्र कहां से मिलेगा?",
      a: "राज्य की अधिसूचना के अनुसार उसी सरकारी अस्पताल से। निजी अस्पताल या घर पर हुई मृत्यु का प्रमाण पत्र नगरपालिका, नगर निगम या ग्राम पंचायत देती है।"
    },
    {
      q: "क्या पश्चिम बंगाल में मृत्यु प्रमाण पत्र का शुल्क लगता है?",
      a: "राज्य की अधिसूचना के अनुसार देर से पंजीकरण के अलावा इस प्रक्रिया में शुल्क नहीं लिया जाता। अतिरिक्त प्रतियों का शुल्क स्थानीय निकाय से पूछें।"
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
      href: "/states/west-bengal-birth-certificate.html",
      emoji: "👶",
      title: "पश्चिम बंगाल जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/west-bengal-domicile-certificate.html",
      emoji: "🏠",
      title: "पश्चिम बंगाल निवास प्रमाण पत्र",
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
      href: "https://janma-mrityutathya.wb.gov.in/",
      label: "📝 जन्म-मृत्यु तथ्य पोर्टल"
    },
    {
      href: "/service/death-certificate.html",
      label: "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
