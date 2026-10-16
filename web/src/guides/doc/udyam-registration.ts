import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 16 Oct 2026; udyamregistration.gov.in not reachable from
// the sandbox, search-result extract of its homepage used): Udyam portal
// homepage ("Udyam Registration is free of cost", paperless; separate entries
// for new registration, UAM migration and Udyam Assist Platform (UAP) for
// informal micro enterprises; "Beware of fake sites"), Ministry of MSME
// notification S.O. 1364(E) dt 21.03.2025 effective 01.04.2025 (micro up to
// Rs 2.5 cr investment & Rs 10 cr turnover; small Rs 25 cr / Rs 100 cr; medium
// Rs 125 cr / Rs 500 cr) via News On AIR and Tribune, superseding S.O.
// 2119(E) dt 26.06.2020. Helpline numbers were not confirmed, so none given.
export const udyamRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "उद्यम पंजीकरण" },
  ],
  docHi: "उद्यम पंजीकरण (MSME)",
  promo: gstinPromo,
  title: "उद्यम पंजीकरण (MSME) 2026",
  description: "सूक्ष्म, लघु, और मध्यम उद्यमों के लिए मुफ़्त ऑनलाइन पंजीकरण, जो प्राथमिकता-क्षेत्र ऋण, सब्सिडी, और निविदा वरीयता देता है।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उद्यम पंजीकरण (Udyam Registration) 2026: MSME सर्टिफिकेट मुफ्त में ऑनलाइन कैसे बनाएं",
  lead: "उद्यम पंजीकरण सूक्ष्म, लघु और मध्यम उद्यम (MSME) मंत्रालय का ऑनलाइन पंजीकरण है। यह <strong>पूरी तरह मुफ्त</strong> है और सिर्फ आधिकारिक पोर्टल <strong>udyamregistration.gov.in</strong> पर आधार और PAN से होता है। पंजीकरण के बाद उद्यम प्रमाण पत्र (Udyam Certificate) मिलता है, जो बैंक लोन, सरकारी योजनाओं और टेंडर में MSME होने का सबूत है।",
  facts: [
    ["फीस", "मुफ्त (सरकारी पोर्टल पर)"],
    ["पोर्टल", "udyamregistration.gov.in"],
    ["ज़रूरी", "आधार (OTP) और PAN; जहां लागू हो GSTIN"],
    ["नवीनीकरण", "ज़रूरत नहीं, पर जानकारी अपडेट रखें"],
  ],
  notice: "\"Udyam Registration\" के नाम से कई प्राइवेट वेबसाइटें ₹1,000-₹2,000 तक फीस लेती हैं। सरकारी पोर्टल पर पंजीकरण मुफ्त है; किसी को पैसे न दें।",
  sections: [
    {
      id: "vargikaran",
      title: "कौन सा उद्यम सूक्ष्म, लघु या मध्यम है (1 अप्रैल 2025 से)",
      intro: "MSME मंत्रालय की अधिसूचना S.O. 1364(E), 21 मार्च 2025 के अनुसार:",
      table: {
        head: ["श्रेणी", "प्लांट/मशीनरी में निवेश", "सालाना टर्नओवर"],
        rows: [
          ["सूक्ष्म (Micro)", "₹2.5 करोड़ तक", "₹10 करोड़ तक"],
          ["लघु (Small)", "₹25 करोड़ तक", "₹100 करोड़ तक"],
          ["मध्यम (Medium)", "₹125 करोड़ तक", "₹500 करोड़ तक"],
        ],
      },
      callout: { kind: "info", html: "निवेश और टर्नओवर दोनों सीमाएं देखी जाती हैं। निर्यात से हुआ टर्नओवर इस गणना में नहीं जुड़ता। श्रेणी आयकर रिटर्न और GST के आंकड़ों से अपने-आप अपडेट होती है।" },
    },
    {
      id: "kagaz",
      title: "पंजीकरण के लिए क्या चाहिए",
      list: [
        "मालिक/पार्टनर/डायरेक्टर का <strong>आधार नंबर</strong> और उससे जुड़ा मोबाइल (OTP के लिए)",
        "<strong>PAN</strong> (प्रोप्राइटरशिप में मालिक का, कंपनी/फर्म में संस्था का)",
        "GST लागू हो तो <strong>GSTIN</strong>",
        "बैंक खाता नंबर और IFSC, व्यवसाय का पता, काम का प्रकार (NIC कोड), कर्मचारियों की संख्या, निवेश और टर्नओवर की जानकारी",
      ],
    },
    {
      id: "avedan",
      title: "ऑनलाइन पंजीकरण कैसे करें",
      steps: [
        '<a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener nofollow">udyamregistration.gov.in</a> खोलें और "For New Entrepreneurs who are not Registered yet as MSME" चुनें।',
        "आधार नंबर और नाम डालकर OTP से सत्यापन करें।",
        "संस्था का प्रकार चुनें और PAN सत्यापित करें।",
        "व्यवसाय का नाम, पता, बैंक विवरण, NIC कोड, कर्मचारी, निवेश और टर्नओवर भरें।",
        "फाइनल OTP से सबमिट करें। उद्यम पंजीकरण नंबर (UDYAM-XX-00-0000000) मिलता है और प्रमाण पत्र पोर्टल से डाउनलोड होता है।",
      ],
      callout: { kind: "ok", html: 'जिनके पास PAN/GST नहीं है, ऐसे अनौपचारिक सूक्ष्म उद्यम (छोटे दुकानदार, कारीगर आदि) <strong>Udyam Assist Platform (UAP)</strong> से पंजीकरण करा सकते हैं; पोर्टल पर इसका अलग विकल्प है। मदद के लिए <a href="/tools/csc-locator.html">नज़दीकी CSC</a> जाएं।' },
    },
    {
      id: "fayde",
      title: "उद्यम पंजीकरण से क्या फायदे",
      list: [
        "बैंक से प्राथमिकता क्षेत्र (priority sector) के तहत लोन; CGTMSE गारंटी वाले बिना गिरवी के लोन में मदद",
        "सरकारी खरीद (GeM/टेंडर) में MSME को मिलने वाली छूट, जैसे EMD छूट",
        "बड़े खरीदार से भुगतान में देरी पर MSME Samadhan में शिकायत",
        "केंद्र और राज्य की MSME योजनाओं, सब्सिडी और प्रदर्शनियों में भागीदारी",
      ],
    },
  ],
  official: [
    { href: "https://udyamregistration.gov.in/", title: "उद्यम पंजीकरण पोर्टल (MSME मंत्रालय)", note: "पंजीकरण मुफ्त है" },
    { href: "https://msme.gov.in/", title: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय" },
  ],
  faq: [
    { q: "उद्यम पंजीकरण की फीस कितनी है?", a: "कोई फीस नहीं। सरकारी पोर्टल udyamregistration.gov.in पर पंजीकरण मुफ्त है। पैसे लेने वाली साइटें प्राइवेट हैं।" },
    { q: "क्या उद्यम प्रमाण पत्र का नवीनीकरण करना पड़ता है?", a: "नहीं, यह स्थायी है। पर व्यवसाय की जानकारी बदलने पर पोर्टल पर अपडेट करें; निवेश/टर्नओवर ITR और GST से अपने-आप अपडेट होते हैं।" },
    { q: "क्या बिना GST के उद्यम पंजीकरण हो सकता है?", a: "जिन व्यवसायों पर GST लागू नहीं है, वे बिना GSTIN पंजीकरण कर सकते हैं। PAN-GST न होने पर अनौपचारिक सूक्ष्म उद्यम Udyam Assist Platform से पंजीकरण करा सकते हैं।" },
    { q: "सूक्ष्म उद्यम की सीमा क्या है?", a: "1 अप्रैल 2025 से प्लांट/मशीनरी में ₹2.5 करोड़ तक निवेश और ₹10 करोड़ तक टर्नओवर।" },
    { q: "पुराना उद्योग आधार है तो क्या करें?", a: "उद्योग आधार (UAM) अब मान्य नहीं है। पोर्टल पर \"For those having registration as UAM\" विकल्प से उद्यम में बदलें।" },
  ],
  related: [
    { href: "/service/udyam-msme-re-registration.html", emoji: "🔄", title: "उद्योग आधार से उद्यम", text: "UAM माइग्रेशन और अपडेट" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "₹20 लाख तक का बिज़नेस लोन" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🏦", title: "CGTMSE लोन गारंटी", text: "बिना गिरवी लोन" },
    { href: "/service/gst.html", emoji: "🧾", title: "GST", text: "GST पंजीकरण और रिटर्न" },
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🛠️", title: "पीएम विश्वकर्मा योजना", text: "कारीगरों के लिए" },
  ],
  aside: [
    { href: "https://udyamregistration.gov.in/", label: "🌐 उद्यम पोर्टल (मुफ्त)" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
