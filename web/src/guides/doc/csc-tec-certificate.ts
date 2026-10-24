import type { DocGuide } from "./types";

// Sources (checked 24 Oct 2026; cscentrepreneur.in not reachable from the
// sandbox, search-result extracts of its official PDFs used): CCE FAQ PDF
// (cscentrepreneur.in/FAQs_CCE_.pdf: course fee Rs 1300 + GST, non
// refundable; all 10 assessments mandatory; 5 attempts at the final online
// exam; CCE username = certificate number, used to apply for a new CSC),
// CCE user manual and "CCE Important update" PDF (final exam 50 multiple
// choice questions, pass 50%; certificate downloaded from the portal after
// passing; support tec.support@cscacademy.org, 9:30 AM-6 PM Mon-Sat),
// register.csc.gov.in FAQ (TEC certificate number mandatory for "CSC VLE").
// Third-party sites quote ₹1,479.72 incl. GST; the page tells readers to
// check the amount shown at payment.
export const cscTecCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "CSC रजिस्ट्रेशन", href: "/service/csc-registration-kaise-kare.html" },
    { label: "TEC सर्टिफिकेट" },
  ],
  docHi: "TEC सर्टिफिकेट",
  vle: true,
  title: "CSC TEC सर्टिफिकेट 2026: रजिस्ट्रेशन, फीस, परीक्षा और डाउनलोड",
  description: "TEC (टेलीसेंटर एंटरप्रेन्योर कोर्स) सर्टिफिकेट कैसे बनाएं: cscentrepreneur.in पर रजिस्ट्रेशन, फीस, 10 असेसमेंट, फाइनल परीक्षा के नियम और सर्टिफिकेट डाउनलोड।",
  published: "2026-10-24",
  modified: "2026-10-24",
  verified: "24 अक्टूबर 2026",
  h1: "CSC TEC सर्टिफिकेट 2026: रजिस्ट्रेशन, फीस, परीक्षा के नियम और सर्टिफिकेट डाउनलोड",
  lead: "<strong>TEC (टेलीसेंटर एंटरप्रेन्योर कोर्स)</strong> CSC अकादमी का ऑनलाइन कोर्स है, जिसे अब <strong>CCE (सर्टिफिकेट कोर्स इन एंटरप्रेन्योरशिप)</strong> भी कहते हैं। नया CSC खोलने के \"CSC VLE\" आवेदन में इसका सर्टिफिकेट नंबर ज़रूरी है। कोर्स <a href=\"https://cscentrepreneur.in/\" target=\"_blank\" rel=\"noopener nofollow\">cscentrepreneur.in</a> पर होता है: फीस भरें, 10 असेसमेंट पूरे करें, फाइनल ऑनलाइन परीक्षा पास करें और सर्टिफिकेट डाउनलोड करें।",
  facts: [
    ["फीस", "₹1,300 + GST (वापस नहीं होती)"],
    ["परीक्षा", "50 सवाल, पास होने के लिए 50%"],
    ["मौके", "फाइनल परीक्षा के 5 मौके"],
    ["वेबसाइट", "<a href=\"https://cscentrepreneur.in/\" target=\"_blank\" rel=\"noopener nofollow\">cscentrepreneur.in</a>"],
  ],
  notice: "फीस CSC अकादमी के FAQ के अनुसार ₹1,300 + GST लिखी है; भुगतान पेज पर जो रकम दिखे वही मान्य है। TEC का सर्टिफिकेट या उत्तर \"पक्का पास\" कराने के नाम पर पैसे मांगने वालों से बचें। यह साइट निजी है, CSC की नहीं।",
  sections: [
    {
      id: "tarika",
      title: "TEC सर्टिफिकेट कैसे बनाएं",
      steps: [
        "<a href=\"https://cscentrepreneur.in/\" target=\"_blank\" rel=\"noopener nofollow\">cscentrepreneur.in</a> खोलें और नए उपयोगकर्ता (Public User) के रूप में रजिस्टर करें; अपना मोबाइल नंबर और ईमेल ही दें।",
        "ऑनलाइन कोर्स फीस भरें। फीस वापस नहीं होती, इसलिए जानकारी ध्यान से भरें।",
        "लॉगिन करके कोर्स के मॉड्यूल पढ़ें और <strong>सभी 10 असेसमेंट</strong> पूरे करें; ये अनिवार्य हैं।",
        "फाइनल ऑनलाइन परीक्षा दें: <strong>50 बहुविकल्पीय सवाल</strong>, पास होने के लिए <strong>50% अंक</strong>। परीक्षा के <strong>5 मौके</strong> मिलते हैं।",
        "पास होने के बाद पोर्टल से सर्टिफिकेट डाउनलोड करें।",
        "आपका CCE यूज़रनेम ही सर्टिफिकेट नंबर है। इसी नंबर से <a href=\"/service/csc-registration-kaise-kare.html\">नया CSC रजिस्ट्रेशन</a> करें।",
      ],
    },
    {
      id: "taiyari",
      title: "परीक्षा की तैयारी",
      list: [
        "कोर्स के हर मॉड्यूल को ध्यान से पढ़ें; मॉड्यूल की सूची पोर्टल पर लॉगिन के बाद दिखती है।",
        "असेसमेंट के सवाल मॉड्यूल से ही आते हैं; पहले असेसमेंट पूरे करें, फिर फाइनल परीक्षा दें।",
        "परीक्षा शांत जगह और अच्छे इंटरनेट पर दें, ताकि बीच में कनेक्शन न टूटे।",
      ],
    },
    {
      id: "dikkat",
      title: "दिक्कत आए तो",
      list: [
        "यूज़र ID/पासवर्ड न मिले या परीक्षा में तकनीकी दिक्कत हो: <strong>tec.support@cscacademy.org</strong> पर ईमेल करें (सुबह 9:30 से शाम 6 बजे, सोमवार से शनिवार)।",
        "ईमेल में अपना नाम, रजिस्टर्ड मोबाइल, यूज़रनेम और दिक्कत का स्क्रीनशॉट लिखें।",
        "CSC ID या रजिस्ट्रेशन से जुड़े सवाल के लिए CSC हेल्पलाइन <a href=\"tel:18001213468\">1800-121-3468</a>।",
      ],
    },
  ],
  official: [
    { href: "https://cscentrepreneur.in/", title: "TEC / CCE कोर्स पोर्टल", note: "cscentrepreneur.in" },
    { href: "https://register.csc.gov.in/", title: "CSC रजिस्ट्रेशन पोर्टल", note: "register.csc.gov.in" },
  ],
  faq: [
    { q: "TEC सर्टिफिकेट की फीस कितनी है?", a: "CSC अकादमी के FAQ के अनुसार ₹1,300 + GST, जो वापस नहीं होती। भुगतान पेज पर दिखने वाली रकम ही अंतिम मानें।" },
    { q: "TEC परीक्षा में कितने सवाल आते हैं?", a: "फाइनल ऑनलाइन परीक्षा में 50 बहुविकल्पीय सवाल होते हैं और पास होने के लिए 50% अंक चाहिए। इससे पहले सभी 10 असेसमेंट पूरे करने होते हैं।" },
    { q: "TEC में फेल हो जाएं तो?", a: "फाइनल परीक्षा देने के कुल 5 मौके मिलते हैं।" },
    { q: "TEC सर्टिफिकेट नंबर कहां मिलेगा?", a: "आपका CCE यूज़रनेम ही सर्टिफिकेट नंबर है। पास होने के बाद पोर्टल से सर्टिफिकेट डाउनलोड करें; उस पर भी नंबर होता है।" },
    { q: "TEC के बाद क्या करना है?", a: "सर्टिफिकेट नंबर से register.csc.gov.in पर \"CSC VLE\" आवेदन करें। पूरी प्रक्रिया हमारी CSC रजिस्ट्रेशन गाइड में है।" },
  ],
  related: [
    { href: "/service/csc-registration-kaise-kare.html", emoji: "🏪", title: "CSC रजिस्ट्रेशन", text: "CSC सेंटर कैसे खोलें" },
    { href: "/service/digital-seva-portal-login.html", emoji: "🔐", title: "Digital Seva लॉगिन", text: "पासवर्ड और ID की दिक्कतें" },
    { href: "/service/csc-services-list.html", emoji: "🧾", title: "CSC सेवाओं की सूची", text: "कौन सी सेवाएं और कमाई" },
  ],
  aside: [
    { href: "https://cscentrepreneur.in/", label: "🎓 cscentrepreneur.in" },
    { href: "/claim-your-csc.html", label: "🏪 अपना केंद्र फ्री जोड़ें" },
  ],
};
