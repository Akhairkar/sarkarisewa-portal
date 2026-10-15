import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; nadakacheri.karnataka.gov.in not reachable
// from the sandbox): district NIC pages used for our Karnataka caste/income
// guides — gadag.nic.in/en/service/caste-certificate/ (caste and income
// certificates at Atalji Janasnehi Kendras/Nadakacheri, online on Nadakacheri;
// caste certificate life-time validity, income certificate five years),
// tumkur.nic.in/en/service/caste-certificate/ (documents, online steps, fee
// Rs 40), kolar.nic.in/en/service/caste-and-income-certificate/ (AJSK in hobli
// centres; Nadakacheri cell in the Tahsildar's office); search extracts of
// the Nadakacheri services table (Rs 40, Sakala 21 working days). Search
// extracts (citizennest.com, vidhikarya.com, corpseed.com, kanakkupillai.com)
// on the combined caste-and-income certificate for state OBC categories 2A,
// 2B, 3A, 3B used for KCET, state jobs and scholarships; barandbench.com
// (Karnataka HC: caste and income certificates are different). The creamy
// layer income limit was not confirmed from an official order and is left out.
export const kaCasteIncomeCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "कर्नाटक", href: "/states/karnataka.html" },
    { label: "जाति एवं आय प्रमाणपत्र" },
  ],
  docHi: "जाति एवं आय प्रमाणपत्र",
  title: "जाति एवं आय प्रमाणपत्र (कर्नाटक)",
  description: "जाति और आय का संयुक्त प्रमाणपत्र — कर्नाटक में आरक्षित श्रेणी प्रवेश, नौकरी, छात्रवृत्ति और योजना लाभ के लिए ज़रूरी। नाडकचेरी पर आवेदन, ₹40 फीस, 21 कार्य दिवस।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "कर्नाटक जाति एवं आय प्रमाणपत्र: नाडकचेरी पर आवेदन, फीस, समय और किसे चाहिए",
  lead: "कर्नाटक में जाति प्रमाणपत्र, आय प्रमाणपत्र और राज्य की पिछड़ा वर्ग श्रेणियों (2A, 2B, 3A, 3B) के लिए जाति एवं आय प्रमाणपत्र राजस्व विभाग के नाडकचेरी (Nadakacheri) सिस्टम से बनते हैं। आवेदन होबली के नाडकचेरी/अटलजी जनस्नेही केंद्र पर या nadakacheri.karnataka.gov.in पर ऑनलाइन होता है। फीस ₹40 है और सकाल के तहत 21 कार्य दिवस की समय-सीमा है।",
  facts: [
    ["पोर्टल", "<a href=\"https://nadakacheri.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nadakacheri.karnataka.gov.in</a>"],
    ["जारी करते हैं", "तहसीलदार / उप-तहसीलदार"],
    ["फीस / समय", "₹40; 21 कार्य दिवस (सकाल)"],
    ["वैधता", "जाति: जीवन भर; आय: 5 साल"],
  ],
  sections: [
    {
      id: "kaun-sa",
      title: "कौन सा प्रमाणपत्र चाहिए",
      table: {
        head: ["प्रमाणपत्र", "कब काम आता है"],
        rows: [
          ["जाति प्रमाणपत्र", "SC/ST और श्रेणी-1 के लिए आरक्षण, छात्रवृत्ति और योजनाएं"],
          ["जाति एवं आय प्रमाणपत्र", "राज्य की पिछड़ा वर्ग श्रेणियां 2A, 2B, 3A, 3B: KCET जैसे दाखिले, राज्य की नौकरी और छात्रवृत्ति में आरक्षण, जहां आय की शर्त भी है"],
          ["आय प्रमाणपत्र", "छात्रवृत्ति, पेंशन, फीस छूट और आय-आधारित योजनाएं"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी या केंद्रीय संस्थानों (जैसे NEET/JEE काउंसलिंग) में OBC आरक्षण के लिए केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाणपत्र चाहिए, जो राज्य के 2A/3B प्रमाणपत्र से अलग है। जिस संस्था में आवेदन कर रहे हैं, उसका मांगा गया फॉर्मेट ही बनवाएं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "भरा हुआ आवेदन और स्व-घोषणा",
        "राशन कार्ड या वोटर ID; आधार",
        "निवास का प्रमाण",
        "माता-पिता की जाति, धर्म और उप-जाति की जानकारी; परिवार के किसी सदस्य का पुराना जाति प्रमाणपत्र हो तो उसकी कॉपी",
        "आय की जानकारी: वेतन पर्ची या आय की स्व-घोषणा (जाति एवं आय और आय प्रमाणपत्र के लिए)",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>ऑनलाइन:</strong> <a href=\"https://nadakacheri.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nadakacheri.karnataka.gov.in</a> पर Apply Online चुनें, मोबाइल नंबर से OTP लेकर New Request में सेवा चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और ₹40 ऑनलाइन भरें। पावती संख्या SMS पर आती है।",
        "<strong>ऑफलाइन:</strong> होबली के नाडकचेरी/अटलजी जनस्नेही केंद्र (AJSK) या तालुक कार्यालय में फॉर्म और कागज़ जमा करें।",
        "गांव लेखाकार/राजस्व निरीक्षक जांच करते हैं; फिर तहसीलदार (जाति) या उप-तहसीलदार (आय) प्रमाणपत्र जारी करते हैं।",
        "पावती संख्या से स्टेटस देखें और प्रमाणपत्र डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "21 कार्य दिवस में प्रमाणपत्र न मिले तो सकाल (Sakala) के तहत शिकायत की जा सकती है। मदद के लिए <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> या कर्नाटक वन/ग्राम वन केंद्र जाएं।" },
    },
    {
      id: "dhyan",
      title: "ध्यान रखें",
      list: [
        "<strong>सही श्रेणी चुनें:</strong> 2A, 2B, 3A, 3B या श्रेणी-1 गलत चुनी तो प्रमाणपत्र दाखिले में नहीं चलेगा।",
        "<strong>आय सीमा:</strong> पिछड़ा वर्ग आरक्षण में परिवार की आय की सीमा राज्य सरकार के आदेश से तय होती है; दाखिले की सूचना में दी गई सीमा देखें।",
        "<strong>जाति और आय अलग हैं:</strong> कर्नाटक हाई कोर्ट ने भी कहा है कि जाति प्रमाणपत्र और आय प्रमाणपत्र को एक जैसा नहीं माना जा सकता। जहां \"जाति एवं आय\" मांगा जाए, वहां वही दें।",
        "<strong>आय प्रमाणपत्र की वैधता:</strong> 5 साल, इसलिए हर साल नया बनवाना ज़रूरी नहीं, जब तक संस्था ताज़ा न मांगे।",
      ],
    },
  ],
  official: [
    { href: "https://nadakacheri.karnataka.gov.in/", title: "नाडकचेरी: राजस्व विभाग, कर्नाटक", note: "आवेदन और स्टेटस" },
    { href: "https://kolar.nic.in/en/service/caste-and-income-certificate/", title: "कोलार ज़िला: जाति एवं आय प्रमाणपत्र सेवा" },
    { href: "https://tumkur.nic.in/en/service/caste-certificate/", title: "तुमकूर ज़िला: जाति प्रमाणपत्र (कागज़ और फीस)" },
  ],
  faq: [
    { q: "कर्नाटक में जाति एवं आय प्रमाणपत्र की फीस कितनी है?", a: "नाडकचेरी पर ₹40। सकाल के तहत 21 कार्य दिवस में जारी होना चाहिए।" },
    { q: "जाति एवं आय प्रमाणपत्र किसे चाहिए?", a: "राज्य की पिछड़ा वर्ग श्रेणियों 2A, 2B, 3A, 3B के उम्मीदवारों को, जब दाखिले, राज्य की नौकरी या छात्रवृत्ति में आरक्षण के साथ आय की शर्त हो।" },
    { q: "आय प्रमाणपत्र कितने साल वैध है?", a: "ज़िला प्रशासन के अनुसार 5 साल; जाति प्रमाणपत्र जीवन भर वैध रहता है।" },
    { q: "क्या यह प्रमाणपत्र केंद्र की नौकरी में OBC के लिए चलेगा?", a: "आम तौर पर नहीं। केंद्र की नौकरी/संस्थानों के लिए केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाणपत्र अलग से बनवाएं।" },
    { q: "स्टेटस कैसे देखें?", a: "nadakacheri.karnataka.gov.in पर पावती संख्या डालकर, या जिस केंद्र पर आवेदन किया वहां पूछकर।" },
  ],
  related: [
    { href: "/states/karnataka-caste-certificate.html", emoji: "🪪", title: "कर्नाटक जाति प्रमाण पत्र", text: "पूरी गाइड" },
    { href: "/states/karnataka-income-certificate.html", emoji: "💰", title: "कर्नाटक आय प्रमाण पत्र", text: "पूरी गाइड" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "राज्य कोटे के लिए" },
    { href: "/service/ka-bhoomi-rtc.html", emoji: "📜", title: "भूमि RTC (पहानी)", text: "ज़मीन का रिकॉर्ड" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए" },
  ],
  aside: [
    { href: "https://nadakacheri.karnataka.gov.in/", label: "🪪 नाडकचेरी पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
