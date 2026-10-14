import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - National (all states): Registration of Births and Deaths (Amendment) Act, 2023 in force
//   1 Oct 2023 (MHA S.O. 4058(E), 13 Sep 2023): section 17(3) single proof of date and
//   place of birth for persons born on/after that date; section 25A appeal (30 days to
//   District Registrar, then Chief Registrar; decided in 90 days). Registration of Births
//   and Deaths (Amendment) Act, 2026 (12 of 2026; in force 1 Oct 2026, S.O. 5081(E),
//   16 Sep 2026): delayed registration after 1-2 years on DM/SDM/authorised Executive
//   Magistrate order, after 2 years on JMFC order. Registrar General of India CRS FAQ
//   (21 days free, name free in 12 months and up to 15 years with fee, one free copy) and
//   crsorgi.gov.in public-portal pages (download by Application Reference No. and OTP).
// - Late-registration fee amounts left out everywhere: they differ by state rules.
// - Uttarakhand: Vital Statistics of India based on the CRS 2022 (dc.crsorgi.gov.in
//   annual report: urban units on ORGI CRS software, most rural units on
//   e-district/Apuni Sarkar); eservices.uk.gov.in (Apuni Sarkar, ITDA) and its public
//   certificate-verification page; haridwar.nic.in and uttarkashi.nic.in birth
//   certificate service pages (delayed cases: police verification and revenue order).
// Left out (not confirmed): fees, state rules, a separate helpline.
export const uttarakhandBirthCertificate: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Uttarakhand Birth Certificate 2026: Apply & Status",
  description: "उत्तराखंड जन्म प्रमाण पत्र 2026: शहरों में CRS पोर्टल, गांवों में आपनी सरकार (Apuni Sarkar) ई-डिस्ट्रिक्ट, 21 दिन में मुफ़्त पंजीकरण और देर से पंजीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "उत्तराखंड जन्म प्रमाण पत्र 2026: CRS, आपनी सरकार, देर से पंजीकरण और नाम जोड़ना",
  lead: "उत्तराखंड में जन्म का पंजीकरण दो सिस्टम से होता है: शहरी इकाइयों में अधिकतर केंद्रीय CRS पोर्टल से और ग्रामीण इकाइयों में अधिकतर राज्य के आपनी सरकार (Apuni Sarkar) ई-डिस्ट्रिक्ट पोर्टल से। 21 दिन के भीतर पंजीकरण मुफ़्त है। देर से पंजीकरण में राजस्व अधिकारी का आदेश और जांच लग सकती है।",
  facts: [
    ["शहरी क्षेत्र", "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CRS पोर्टल (crsorgi.gov.in)</a>"],
    ["ग्रामीण क्षेत्र", "<a href=\"https://eservices.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">आपनी सरकार (eservices.uk.gov.in)</a>"],
    ["21 दिन के भीतर", "पंजीकरण मुफ़्त"],
    ["सत्यापन", "<a href=\"https://eservices.uk.gov.in/officer/public/application/verify/certificate/\" target=\"_blank\" rel=\"noopener nofollow\">प्रमाण पत्र सत्यापन पेज</a>"],
  ],
  sections: [
    {
      id: "kyon",
      title: "जन्म प्रमाण पत्र क्यों ज़रूरी है",
      list: [
        "<strong>1 अक्टूबर 2023 या उसके बाद जन्मे</strong> बच्चे के लिए जन्म और मृत्यु पंजीकरण (संशोधन) अधिनियम, 2023 के अनुसार जन्म की तारीख और जगह यही प्रमाण पत्र साबित करता है। यह स्कूल-कॉलेज में दाखिले, ड्राइविंग लाइसेंस, वोटर सूची, विवाह पंजीकरण, सरकारी या सरकारी निकाय की नौकरी, पासपोर्ट और आधार नंबर के लिए लागू है।",
        "इस तारीख से पहले जन्मे लोगों पर यह नियम लागू नहीं होता।",
        "पंजीकरण के समय माता-पिता और सूचना देने वाले का <strong>आधार नंबर</strong> (अगर उपलब्ध हो) दर्ज किया जाता है।",
        "सूचना देने वाले को <strong>एक प्रति मुफ़्त</strong> मिलती है (अधिनियम की धारा 12)। और प्रतियां तय शुल्क देकर मिलती हैं।",
      ],
    },
    {
      id: "kahan",
      title: "उत्तराखंड में कौन सा पोर्टल कहां",
      list: [
        "भारत के महारजिस्ट्रार की 2022 की CRS रिपोर्ट के अनुसार उत्तराखंड के लगभग सभी शहरी पंजीकरण इकाइयों में ऑनलाइन पंजीकरण केंद्रीय CRS सॉफ्टवेयर से होता है। कुछ ग्रामीण इकाइयों में भी यही सॉफ्टवेयर है, पर <strong>अधिकतर ग्रामीण इकाइयां ई-डिस्ट्रिक्ट/आपनी सरकार पोर्टल</strong> इस्तेमाल करती हैं।",
        "आपनी सरकार राज्य के सूचना प्रौद्योगिकी विकास अभिकरण (ITDA) का पोर्टल है: <a href=\"https://eservices.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eservices.uk.gov.in</a>। ज़िला वेबसाइटों में जन्म प्रमाण पत्र की जगह नगर निगम/नगर पालिका परिषद बताई गई है (जैसे हरिद्वार)।",
        "केंद्रीय CRS पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>। प्रमाण पत्र डाउनलोड का पेज: <a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate</a>।",
        "आपका रिकॉर्ड किस सिस्टम में है, यह अपने नगर निकाय या ग्रामीण पंजीयक से पूछकर तय करें।",
      ],
    },
    {
      id: "kaun",
      title: "पंजीकरण कौन कराता है",
      list: [
        "<strong>अस्पताल या नर्सिंग होम में जन्म:</strong> अस्पताल का प्रभारी डॉक्टर या उसका अधिकृत व्यक्ति जन्म की सूचना पंजीयक को देता है। माता-पिता यह काम नहीं करते। अस्पताल से पंजीकरण की पर्ची या नंबर ज़रूर लें।",
        "<strong>घर पर जन्म:</strong> घर का मुखिया, उसके न होने पर घर में मौजूद उसका निकट संबंधी, या सबसे बड़ा वयस्क सूचना देता है। आंगनवाड़ी कार्यकर्ता, ANM और आशा जैसे अधिसूचित लोग भी सूचना दे सकते हैं।",
        "<strong>अविवाहित या अकेली मां, गोद लिया बच्चा, सरोगेसी:</strong> 2023 के संशोधन में इनके लिए सूचना देने वाले तय किए गए हैं, जैसे अकेली मां के लिए माता खुद और गोद लेने पर गोद लेने वाले माता-पिता।",
        "<strong>जन्म की जगह के हिसाब से पंजीकरण:</strong> जन्म जहां हुआ, वहीं के नगरपालिका, पंचायत या स्थानीय निकाय के पंजीयक (Registrar) के पास पंजीकरण होता है। कहीं और रहने पर भी जन्म की जगह का पंजीयक ही रिकॉर्ड रखता है।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन का तरीका",
      steps: [
        "<strong>अस्पताल में जन्म:</strong> अस्पताल जन्म की सूचना पंजीयक को देता है। डिस्चार्ज पर पंजीकरण की पर्ची या नंबर लें।",
        "<strong>घर पर जन्म:</strong> जन्म के 21 दिन के भीतर अपने क्षेत्र के पंजीयक को सूचना दें। शहर में नगर निगम/नगर पालिका और गांव में ग्रामीण पंजीकरण इकाई।",
        "बच्चे और माता-पिता का ब्योरा दें। आधार नंबर हो तो दें।",
        "पंजीकरण के बाद एक मुफ़्त प्रति लें और नाम, तारीख और जगह जांचें।",
        "देर से पंजीकरण में ज़िला वेबसाइट के अनुसार जन्म की जानकारी का सत्यापन पुलिस से कराने के बाद राजस्व अधिकारी के आदेश पर प्रमाण पत्र जारी होता है। यह ज़िला स्तर की प्रक्रिया है, इसलिए तहसील या नगर निकाय से पूछ लें।",
      ],
      callout: {
        kind: "info",
        html: "आपनी सरकार पोर्टल पर जारी प्रमाण पत्र की असलियत <a href=\"https://eservices.uk.gov.in/officer/public/application/verify/certificate/\" target=\"_blank\" rel=\"noopener nofollow\">प्रमाण पत्र सत्यापन पेज</a> पर जांची जा सकती है।",
      },
    },
    {
      id: "crs-download",
      title: "CRS पोर्टल से प्रमाण पत्र डाउनलोड करना",
      intro: "जिन राज्यों और इकाइयों का रिकॉर्ड केंद्रीय CRS पोर्टल पर है, वहां <a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate पेज</a> से प्रमाण पत्र निकलता है।",
      steps: [
        "<a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in/crs/dwnld</a> खोलें।",
        "बॉक्स में <strong>Application Reference No.</strong> डालें और आगे बढ़ें।",
        "आपके पंजीकृत मोबाइल पर <strong>OTP</strong> आएगा। उसे डालकर सत्यापन करें।",
        "सत्यापन के बाद प्रमाण पत्र <strong>PDF</strong> में डाउनलोड हो जाएगा।",
      ],
      callout: {
        kind: "info",
        html: "संदर्भ नंबर नहीं मिल रहा तो अस्पताल या पंजीयक कार्यालय से पूछें। CRS पोर्टल की जानकारी के अनुसार आम नागरिक खुद कुल चार घटनाएं (events) तक ही दर्ज कर सकता है।",
      },
    },
    {
      id: "samay",
      title: "समय-सीमा और देर से पंजीकरण",
      intro: "ये केंद्रीय कानून (1969 का अधिनियम, 2023 और 2026 के संशोधन के साथ) के नियम हैं। देरी का शुल्क हर राज्य के नियमों से तय होता है, इसलिए यहां शुल्क की राशि नहीं लिखी है।",
      table: {
        head: ["जन्म के कितने बाद", "क्या करना होगा"],
        rows: [
          ["21 दिन के भीतर", "<strong>कोई शुल्क नहीं।</strong>"],
          ["21 से 30 दिन", "देरी का शुल्क देकर पंजीयक के पास पंजीकरण।"],
          ["30 दिन से 1 साल", "ज़िला पंजीयक (District Registrar) या तय अधिकारी की <strong>लिखित अनुमति</strong>, देरी का शुल्क और स्व-प्रमाणित दस्तावेज़ (Form 14)।"],
          ["1 साल से 2 साल", "ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या ज़िला मजिस्ट्रेट द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, जो 1 अक्टूबर 2026 से लागू है)"],
          ["2 साल के बाद", "प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, 1 अक्टूबर 2026 से लागू)"],
        ],
      },
      callout: {
        kind: "warn",
        html: "देर से पंजीकरण में हर जगह जन्म का कोई सबूत मांगा जाता है, जैसे अस्पताल का रिकॉर्ड, टीकाकरण कार्ड या स्कूल का रिकॉर्ड। कौन सा सबूत चलेगा, यह आपके पंजीयक और राज्य के नियमों पर है। जाने से पहले पंजीयक कार्यालय से पूछ लें।",
      },
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना और गलती सुधारना",
      list: [
        "बच्चे के नाम के बिना भी जन्म दर्ज हो सकता है। नाम बाद में जोड़ा जा सकता है।",
        "पंजीकरण के <strong>12 महीने के भीतर नाम जोड़ना मुफ़्त</strong> है।",
        "12 महीने के बाद पंजीकरण की तारीख से <strong>15 साल तक</strong> नाम तय शुल्क देकर जुड़ता है (शुल्क राज्य के नियमों में तय)।",
        "नाम या दूसरी जानकारी में गलती हो तो सुधार (correction) की व्यवस्था अधिनियम की धारा 15 और राज्य के नियमों के तहत है। इसके लिए पंजीयक को प्रमाण के साथ आवेदन दें।",
      ],
    },
    {
      id: "shikayat",
      title: "आवेदन अटके या खारिज हो तो कहां जाएं",
      list: [
        "पंजीयक के किसी फैसले या आदेश से असंतुष्ट हों तो <strong>30 दिन के भीतर ज़िला पंजीयक</strong> (District Registrar) के पास अपील कर सकते हैं (अधिनियम की धारा 25A)।",
        "ज़िला पंजीयक के आदेश के खिलाफ <strong>30 दिन के भीतर मुख्य पंजीयक</strong> (Chief Registrar) के पास अपील होती है।",
        "अपील का फैसला <strong>90 दिन</strong> के भीतर करना ज़रूरी है।",
      ],
    },
    {
      id: "rashtriya",
      title: "राष्ट्रीय CRS पोर्टल और सत्यापन",
      list: [
        "केंद्र सरकार का नागरिक पंजीकरण पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>। वहां जन्म की ऑनलाइन रिपोर्ट, देरी के शुल्क का भुगतान, आवेदन की स्थिति देखना और सुधार का आवेदन जैसी सेवाएं हैं।",
        "यह पोर्टल किसी राज्य के हर पंजीकरण केंद्र के लिए चालू हो, यह ज़रूरी नहीं। अपने पंजीयक से पूछें कि आपका रिकॉर्ड किस पोर्टल पर है।",
        "प्रमाण पत्र फोन में रखना हो तो देखें: <a href=\"/service/digilocker.html\">DigiLocker गाइड</a>।",
      ],
    },
  ],
  official: [
    { href: "https://eservices.uk.gov.in/", title: "आपनी सरकार: उत्तराखंड ई-सेवाएं" },
    { href: "https://eservices.uk.gov.in/officer/public/application/verify/certificate/", title: "आपनी सरकार: प्रमाण पत्र सत्यापन" },
    { href: "https://haridwar.nic.in/service/birth-certificate/", title: "हरिद्वार ज़िला: जन्म प्रमाण पत्र" },
    { href: "https://crsorgi.gov.in/", title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)" },
  ],
  faq: [
    {
      q: "उत्तराखंड में जन्म प्रमाण पत्र किस पोर्टल से मिलता है?",
      a: "भारत के महारजिस्ट्रार की 2022 की CRS रिपोर्ट के अनुसार शहरी इकाइयां मुख्य रूप से केंद्रीय CRS पोर्टल इस्तेमाल करती हैं और अधिकतर ग्रामीण इकाइयां आपनी सरकार (ई-डिस्ट्रिक्ट) पोर्टल।",
    },
    {
      q: "उत्तराखंड में देर से पंजीकरण में कौन आदेश देता है?",
      a: "केंद्रीय कानून में एक साल तक ज़िला पंजीयक की अनुमति और उसके बाद मजिस्ट्रेट का आदेश चाहिए। ज़िला वेबसाइट के अनुसार जांच पुलिस से होती है और आदेश राजस्व अधिकारी देते हैं। शुल्क के लिए अपने पंजीयक से पूछें।",
    },
    {
      q: "जन्म के 21 दिन के भीतर पंजीकरण में कितना शुल्क लगता है?",
      a: "कुछ नहीं। राष्ट्रीय CRS की जानकारी के अनुसार 21 दिन के भीतर सूचना देने पर कोई शुल्क नहीं लगता।",
    },
    {
      q: "क्या बिना नाम के जन्म दर्ज हो सकता है?",
      a: "हां। नाम 12 महीने के भीतर मुफ़्त जुड़ता है और उसके बाद पंजीकरण की तारीख से 15 साल तक तय शुल्क देकर जुड़ता है।",
    },
    {
      q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?",
      a: "1 अक्टूबर 2023 या उसके बाद जन्मे लोगों के लिए हां: स्कूल दाखिले, ड्राइविंग लाइसेंस, वोटर सूची, विवाह पंजीकरण, सरकारी नौकरी, पासपोर्ट और आधार के लिए जन्म की तारीख और जगह इसी प्रमाण पत्र से साबित होती है। उससे पहले जन्मे लोगों पर यह नियम लागू नहीं होता।",
    },
    {
      q: "एक साल से ज़्यादा देर हो जाए तो क्या करें?",
      a: "एक से दो साल के बीच ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश चाहिए। दो साल के बाद प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का आदेश चाहिए। यह 1 अक्टूबर 2026 से लागू 2026 के संशोधन के अनुसार है। शुल्क राज्य के नियमों से तय होता है।",
    },
    {
      q: "पंजीयक का फैसला गलत लगे तो कहां अपील करें?",
      a: "फैसले के 30 दिन के भीतर ज़िला पंजीयक के पास, और उसके आदेश पर 30 दिन के भीतर मुख्य पंजीयक के पास। फैसला 90 दिन में होना चाहिए (धारा 25A)।",
    },
  ],
  related: [
    { href: "/states/uttarakhand-death-certificate.html", emoji: "🕊️", title: "उत्तराखंड मृत्यु प्रमाण पत्र", text: "मृत्यु का पंजीकरण" },
    { href: "/states/uttarakhand-domicile-certificate.html", emoji: "🏠", title: "उत्तराखंड मूल निवास प्रमाण पत्र", text: "निवास का सबूत" },
    { href: "/states/uttarakhand-ration-card.html", emoji: "🍚", title: "उत्तराखंड राशन कार्ड", text: "बच्चे का नाम जोड़ना" },
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://eservices.uk.gov.in/", label: "📝 आपनी सरकार पोर्टल खोलें" },
    { href: "/service/birth-certificate.html", label: "👶 जन्म प्रमाण पत्र गाइड" },
  ],
};
