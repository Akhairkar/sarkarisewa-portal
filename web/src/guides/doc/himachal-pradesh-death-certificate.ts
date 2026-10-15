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
// - Himachal Pradesh: Urban Development Department "Procedure and Checklist for
//   Registration of Death certificate" (emerginghimachal.hp.gov.in PDF, fetched 14 Oct
//   2026: discharge/primary report and self-declaration by head of family; e-District
//   -> More services -> Panchayati Department / Urban Development department -> sign
//   up -> redirect to CRS -> Registrar of the ULB verifies -> download signed
//   certificate; timelines under the HP Public Services Guarantee Act, 2011); state
//   CRS report on himachal.nic.in (Panchayat Secretary/Sahayak as Registrar, CMO as
//   District Registrar, Director Health Services as Chief Registrar) and HimSeva
//   (himseva.hp.gov.in, helpline 18001808076) as in the birth guide.
// Left out: fee amounts (the UD checklist lists Rs 2 / Rs 5 / Rs 10, very old-looking
// and undated; the birth guide also leaves HP fees out).
export const himachalPradeshDeathCertificate: DocGuide = {
  state: {
    slug: "himachal-pradesh",
    hi: "हिमाचल प्रदेश"
  },
  doc: "death-certificate",
  docHi: "मृत्यु प्रमाण पत्र",
  title: "Himachal Pradesh Death Certificate 2026",
  description: "हिमाचल प्रदेश मृत्यु प्रमाण पत्र 2026: शहर में e-District से CRS पर आवेदन, गांव में पंचायत सचिव, ज़रूरी कागज़, 21 दिन में मुफ़्त पंजीकरण और देर से पंजीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश मृत्यु प्रमाण पत्र 2026: e-District, CRS, पंचायत और देर से पंजीकरण",
  lead: "हिमाचल प्रदेश में गांवों में पंचायत सचिव/सहायक और शहरों में नगर निकाय के पंजीयक मृत्यु दर्ज करते हैं, और रिकॉर्ड केंद्रीय CRS पोर्टल पर रहता है। शहरी विकास विभाग की चेकलिस्ट के अनुसार शहरी क्षेत्र में आवेदन e-District पोर्टल से शुरू होकर CRS पोर्टल पर भरा जाता है और मंज़ूरी के बाद प्रमाण पत्र ऑनलाइन डाउनलोड होता है। 21 दिन के भीतर पंजीकरण मुफ़्त है।",
  facts: [
    [
      "ऑनलाइन",
      "<a href=\"https://himseva.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">HimSeva (e-District)</a> → CRS"
    ],
    [
      "गांव में पंजीयक",
      "पंचायत सचिव / सहायक"
    ],
    [
      "शहर में पंजीयक",
      "नगर निगम / परिषद / नगर पंचायत"
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
      title: "हिमाचल प्रदेश में कहां होता है पंजीकरण",
      list: [
        "राज्य की CRS रिपोर्ट के अनुसार गांवों में <strong>पंचायत सचिव या पंचायत सहायक</strong> पंजीयक हैं, ज़िले में मुख्य चिकित्सा अधिकारी (CMO) ज़िला पंजीयक और स्वास्थ्य सेवाएं निदेशक मुख्य पंजीयक हैं।",
        "शहरों में नगर निगम, नगर परिषद और नगर पंचायत के पंजीयक मृत्यु दर्ज करते हैं।",
        "केंद्रीय CRS पोर्टल की सूची में हिमाचल प्रदेश शामिल है।"
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
        "<strong>अस्पताल में मृत्यु:</strong> अस्पताल पंजीयक को सूचना देता है। डिस्चार्ज/प्राथमिक रिपोर्ट और Form 4 की प्रति लें।",
        "<strong>शहरी क्षेत्र में ऑनलाइन:</strong> e-District पोर्टल खोलें, <strong>More Services</strong> में Panchayati Department / Urban Development department चुनें और <strong>Death Certificate</strong> के लिए Sign Up करें। लॉगिन की जानकारी मोबाइल पर आती है।",
        "कागज़, शुल्क और प्रक्रिया पढ़कर <strong>Proceed</strong> करें। पोर्टल आपको CRS पोर्टल पर भेज देगा, जहां साइन-अप करके आवेदन भरें और नगर निकाय के पंजीयक को भेजें।",
        "पंजीयक कागज़ जांचता है। कोई कमी हो तो पोर्टल पर जवाब देकर कागज़ फिर से जमा करें। मंज़ूरी के बाद हस्ताक्षर वाला प्रमाण पत्र ऑनलाइन डाउनलोड करें।",
        "<strong>गांव में:</strong> 21 दिन के भीतर अपनी पंचायत के सचिव/सहायक को सूचना दें। 21 दिन के बाद नीचे \"समय-सीमा\" के नियम लागू होंगे।"
      ]
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (शहरी विकास विभाग की चेकलिस्ट)",
      list: [
        "<strong>डिस्चार्ज रिपोर्ट या प्राथमिक रिपोर्ट</strong> (Discharge report / Primary report)",
        "<strong>परिवार के मुखिया का स्व-घोषणा पत्र</strong> (Self-declaration)",
        "सेवा देने की समय-सीमा हिमाचल प्रदेश लोक सेवा गारंटी अधिनियम, 2011 के तहत तय है।"
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
      href: "https://himseva.hp.gov.in/",
      title: "HimSeva: हिमाचल ई-डिस्ट्रिक्ट"
    },
    {
      href: "https://emerginghimachal.hp.gov.in//themes/backend/uploads/kya/Comprehensive%20Checklist%20and%20procedure-Death%20Certificate.pdf",
      title: "शहरी विकास विभाग: मृत्यु प्रमाण पत्र की प्रक्रिया और चेकलिस्ट",
      note: "PDF"
    },
    {
      href: "https://crsorgi.gov.in/",
      title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)"
    },
    {
      href: "https://dc.crsorgi.gov.in/crs/dwnld",
      title: "CRS: प्रमाण पत्र डाउनलोड"
    }
  ],
  faq: [
    {
      q: "हिमाचल के गांव में मृत्यु का पंजीकरण कौन करता है?",
      a: "राज्य की CRS रिपोर्ट के अनुसार पंचायत सचिव या पंचायत सहायक, जो पंजीयक होते हैं।"
    },
    {
      q: "शहर में मृत्यु प्रमाण पत्र के लिए कौन से कागज़ चाहिए?",
      a: "शहरी विकास विभाग की चेकलिस्ट के अनुसार डिस्चार्ज या प्राथमिक रिपोर्ट और परिवार के मुखिया का स्व-घोषणा पत्र।"
    },
    {
      q: "HimSeva की हेल्पलाइन क्या है?",
      a: "ज़िला वेबसाइटों पर HimSeva/e-District की हेल्पलाइन 1800-180-8076 दी गई है।"
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
      href: "/states/himachal-pradesh-birth-certificate.html",
      emoji: "👶",
      title: "हिमाचल प्रदेश जन्म प्रमाण पत्र",
      text: "जन्म का पंजीकरण"
    },
    {
      href: "/states/himachal-pradesh-domicile-certificate.html",
      emoji: "🏠",
      title: "हिमाचल प्रदेश निवास प्रमाण पत्र",
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
      href: "https://himseva.hp.gov.in/",
      label: "📝 HimSeva खोलें"
    },
    {
      href: "/service/death-certificate.html",
      label: "🕊️ मृत्यु प्रमाण पत्र गाइड"
    }
  ]
};
