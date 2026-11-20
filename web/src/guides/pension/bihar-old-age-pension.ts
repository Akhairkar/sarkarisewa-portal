import type { DocGuide } from "../doc/types";

// Sources (checked 20 Nov 2026):
// - betastate.bihar.gov.in/pension (official Bihar govt page): Mukhyamantri
//   Vridhjan Pension Yojana, Rs 1,100 a month from June 2025, age 60+, no income
//   limit stated, not for those drawing a salary/pension/social security pension
//   from Centre or State. No application process or portal listed there.
// - patrika.com (15 May 2026): pensions for elderly, disabled, widowed women
//   raised from Rs 400 to Rs 1,100; life certification due by 30 May 2026, free at
//   panchayat camps/CSC; over 1 crore social-security beneficiaries.
// Not confirmed: the online application portal, document list, and application
// steps, so the page says to apply via panchayat/block/welfare office.
export const biharOldAgePension: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "old-age-pension",
  docHi: "वृद्धजन पेंशन",
  title: "बिहार वृद्धजन पेंशन योजना 2026: ₹1,100 प्रति माह, पात्रता और आवेदन",
  description: "बिहार मुख्यमंत्री वृद्धजन पेंशन योजना: 60+ उम्र को ₹1,100 प्रति माह। पात्रता, जीवन प्रमाणीकरण, आवेदन कहां करें और पेंशन न आए तो क्या करें।",
  published: "2026-11-20",
  modified: "2026-11-20",
  verified: "20 नवंबर 2026",
  h1: "बिहार वृद्धजन पेंशन योजना 2026: कौन पात्र है और कितनी पेंशन मिलती है",
  lead: "बिहार सरकार के आधिकारिक पेज के अनुसार <strong>मुख्यमंत्री वृद्धजन पेंशन योजना</strong> में <strong>60 साल या उससे ज़्यादा</strong> उम्र के बुजुर्गों को जून 2025 से <strong>₹1,100 प्रति माह</strong> मिलते हैं। पेज पर आय की कोई सीमा नहीं लिखी है, पर जो केंद्र या राज्य सरकार से वेतन, पेंशन या किसी सामाजिक सुरक्षा पेंशन का लाभ ले रहे हैं वे इसके पात्र नहीं हैं।",
  facts: [
    ["पेंशन", "₹1,100 प्रति माह (जून 2025 से)"],
    ["उम्र", "60 साल या उससे ज़्यादा"],
    ["आय सीमा", "सरकारी पेज पर नहीं लिखी"],
    ["जीवन प्रमाणीकरण", "राज्य हर साल तारीख तय करता है"],
  ],
  notice: "बिहार सरकार के पेज पर आवेदन की प्रक्रिया, पोर्टल और दस्तावेज़ों की सूची नहीं मिली, इसलिए हमने अपनी तरफ से कोई पोर्टल या फॉर्म का नाम नहीं लिखा है। आवेदन के लिए अपनी पंचायत, प्रखंड (ब्लॉक) या नगर निकाय के कार्यालय से पूछें। हम सरकारी वेबसाइट नहीं हैं।",
  sections: [
    {
      id: "aage",
      title: "इसके साथ ये काम भी देखें",
      intro: "पेंशन के लिए अक्सर इन चीज़ों की ज़रूरत पड़ती है:",
      list: [
        "<a href=\"/states/bihar-senior-citizen-card.html\">बिहार सीनियर सिटीजन कार्ड</a>",
        "<a href=\"/states/bihar-income-certificate.html\">बिहार आय प्रमाण पत्र</a> और <a href=\"/states/bihar-ration-card.html\">राशन कार्ड</a>",
        "<a href=\"/states/bihar-labour-card.html\">बिहार श्रमिक कार्ड</a>",
        "<a href=\"/arzi/old-age-pension-application-letter.html\">वृद्धा पेंशन आवेदन पत्र</a> और <a href=\"/arzi/pension-not-received-complaint.html\">पेंशन न मिलने की शिकायत</a> (तैयार फॉर्मेट)",
        "<a href=\"/arzi/dbt-aadhaar-seeding-bank-application.html\">बैंक में आधार सीडिंग का आवेदन</a> – पेंशन सीधे खाते में आती है",
        "<a href=\"/states/digital-life-certificate-2026.html\">डिजिटल लाइफ सर्टिफिकेट 2026</a> – जीवन प्रमाण की जानकारी",
        "<a href=\"/tools/csc-locator.html\">नज़दीकी CSC खोजें</a>",
      ],
    },
    {
      id: "raashi",
      title: "पेंशन कितनी मिलती है",
      table: {
        head: ["योजना", "राशि", "उम्र"],
        rows: [["मुख्यमंत्री वृद्धजन पेंशन योजना", "₹1,100 प्रति माह", "60 साल या ज़्यादा"]],
      },
      intro: "एक समाचार रिपोर्ट (मई 2026) के अनुसार बुजुर्ग, दिव्यांग और विधवा महिलाओं की पेंशन पहले ₹400 थी और बढ़ाकर ₹1,100 की गई। विधवा और दिव्यांग पेंशन की पात्रता अलग है, उसके लिए अपने समाज कल्याण कार्यालय से पूछें।",
    },
    {
      id: "patrata",
      title: "पात्रता",
      list: [
        "आवेदक की उम्र 60 साल या उससे ज़्यादा हो।",
        "आधिकारिक पेज के अनुसार इसमें आय की सीमा नहीं बताई गई है।",
        "केंद्र या राज्य सरकार से वेतन, पेंशन, पारिवारिक पेंशन या कोई सामाजिक सुरक्षा पेंशन न ले रहा हो।",
      ],
    },
    {
      id: "jeevan",
      title: "जीवन प्रमाणीकरण न कराने पर पेंशन रुक सकती है",
      intro: "मई 2026 की एक रिपोर्ट के अनुसार सामाजिक सुरक्षा पेंशनरों को 30 मई 2026 तक जीवन प्रमाणीकरण कराना था, वरना पेंशन अस्थायी रूप से रुक सकती थी। इसके लिए पंचायत स्तर पर शिविर और CSC पर निःशुल्क सुविधा बताई गई थी। अगर आपकी पेंशन रुकी है तो अपने प्रखंड या पंचायत कार्यालय से पूछें कि प्रमाणीकरण बाकी है या नहीं।",
      callout: { kind: "info", html: "पेंशन रुकी हो तो पहले बैंक खाता और आधार सीडिंग जांचें, फिर <a href=\"/arzi/pension-not-received-complaint.html\">लिखित शिकायत</a> दें। केंद्र के पेंशनरों के लिए चल रहे अभियान की जानकारी <a href=\"/states/digital-life-certificate-2026.html\">यहां</a> है।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कहां और कैसे करें",
      steps: [
        "अपनी पंचायत (ग्रामीण) या नगर निकाय (शहरी) कार्यालय में पेंशन आवेदन के बारे में पूछें।",
        "आधार, आधार से जुड़ा बैंक खाता, उम्र का प्रमाण और फोटो साथ रखें (सूची कार्यालय से पक्की कर लें)।",
        "आवेदन जमा करके रसीद या रजिस्ट्रेशन नंबर संभालकर रखें।",
        "फॉर्म भरने में मदद चाहिए तो <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> खोजें।",
      ],
    },
  ],
  official: [
    { href: "https://betastate.bihar.gov.in/pension", title: "बिहार सरकार: मुख्यमंत्री वृद्धजन पेंशन योजना", note: "सरकारी जानकारी पेज" },
  ],
  faq: [
    { q: "बिहार में वृद्धजन पेंशन कितनी मिलती है?", a: "बिहार सरकार के पेज के अनुसार जून 2025 से ₹1,100 प्रति माह।" },
    { q: "बिहार में पेंशन के लिए उम्र कितनी होनी चाहिए?", a: "60 साल या उससे ज़्यादा।" },
    { q: "क्या इसमें आय की सीमा है?", a: "आधिकारिक पेज पर आय की कोई सीमा नहीं लिखी है। पर जो सरकार से वेतन या पेंशन पा रहे हैं वे पात्र नहीं हैं।" },
    { q: "आवेदन कहां करें?", a: "अपनी पंचायत, प्रखंड या नगर निकाय के कार्यालय में पूछें। आधिकारिक पेज पर आवेदन का पोर्टल नहीं लिखा, इसलिए हमने कोई पोर्टल नहीं बताया।" },
    { q: "पेंशन रुक जाए तो क्या करें?", a: "जीवन प्रमाणीकरण, बैंक खाता और आधार सीडिंग जांचें, फिर लिखित शिकायत दें।" },
  ],
  related: [
    { href: "/states/bihar-senior-citizen-card.html", emoji: "👴", title: "बिहार सीनियर सिटीजन कार्ड", text: "आवेदन और फायदे" },
    { href: "/states/digital-life-certificate-2026.html", emoji: "📱", title: "डिजिटल लाइफ सर्टिफिकेट", text: "जीवन प्रमाण कैसे बनाएं" },
    { href: "/arzi/old-age-pension-application-letter.html", emoji: "📝", title: "वृद्धा पेंशन आवेदन पत्र", text: "तैयार फॉर्मेट" },
    { href: "/arzi/pension-not-received-complaint.html", emoji: "📝", title: "पेंशन न मिलने की शिकायत", text: "तैयार फॉर्मेट" },
    { href: "/states/bihar-income-certificate.html", emoji: "📄", title: "बिहार आय प्रमाण पत्र", text: "आवेदन" },
  ],
  otherStatesTitle: "दूसरे राज्यों में वृद्धा पेंशन",
  aside: [
    { href: "/arzi/old-age-pension-application-letter.html", label: "📝 आवेदन पत्र बनाएं" },
    { href: "/states/digital-life-certificate-2026.html", label: "📱 जीवन प्रमाण" },
  ],
};
