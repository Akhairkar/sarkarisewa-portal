import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): mpbcdc.maharashtra.gov.in, official site of
// Mahatma Phule Backward Class Development Corporation Ltd (Social Justice &
// Special Assistance Department, Maharashtra): "थेट कर्ज योजना" page (project
// up to ₹1,00,000; corporation share ₹45,000, subsidy ₹50,000 (with limit),
// applicant share ₹5,000; 36 equal monthly instalments; 4% p.a. interest;
// limit raised from ₹25,000 to ₹1,00,000 by GR MPC-2017/P.K.274/Mahamandale
// dated 21.12.2018; documents: caste, income, residence proof, quotation;
// district office verifies home and business site, regional manager approves;
// first instalment 75% after excluding applicant share, second 25% after the
// unit starts and is inspected); homepage (target group: economically weak /
// BPL Scheduled Caste and Neo-Buddhist persons; loan management system login;
// email info@mpbcdc.in). Age limit, income limit and a public online
// application form were not verified, so they are left out.
export const mpbcdcDirectLoanYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "MPBCDC योजनाएं", href: "/category/mpbcdc-schemes.html" },
    { label: "थेट कर्ज (Direct Loan) योजना" },
  ],
  docHi: "थेट कर्ज (Direct Loan) योजना",
  title: "MPBCDC Direct Loan Yojana 2026: 50% Subsidy, 4% Interest Loan",
  description: "MPBCDC थेट कर्ज योजना: महाराष्ट्र के SC/नव-बौद्ध लोगों के ₹1 लाख तक के व्यवसाय पर ₹50,000 अनुदान, ₹45,000 कर्ज 4% ब्याज पर और ₹5,000 अपना हिस्सा। कागज़ और आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "MPBCDC थेट कर्ज (Direct Loan) योजना: ₹1 लाख तक का व्यवसाय, ₹50,000 अनुदान और 4% ब्याज",
  lead: "थेट कर्ज योजना महाराष्ट्र के महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC) की स्वरोज़गार योजना है, जो अनुसूचित जाति और नव-बौद्ध समाज के आर्थिक रूप से कमज़ोर लोगों के लिए है। ₹1,00,000 तक के व्यवसाय में ₹50,000 तक अनुदान, ₹45,000 महामंडळ का सीधा कर्ज (4% सालाना ब्याज) और ₹5,000 आवेदक का अपना हिस्सा होता है। इसमें बैंक नहीं, महामंडळ खुद कर्ज देता है।",
  facts: [
    ["प्रकल्प सीमा", "₹1,00,000 तक"],
    ["अनुदान", "₹50,000 तक"],
    ["महामंडळ का कर्ज", "₹45,000, 4% सालाना ब्याज"],
    ["अपना हिस्सा", "₹5,000; वापसी 36 महीने में"],
  ],
  sections: [
    {
      id: "swaroop",
      title: "योजना का स्वरूप",
      intro: "महामंडळ की वेबसाइट के अनुसार ₹1 लाख के प्रकल्प का बंटवारा:",
      table: {
        head: ["हिस्सा", "राशि", "ध्यान दें"],
        rows: [
          ["अनुदान (subsidy)", "₹50,000 तक", "वापस नहीं करना होता"],
          ["महामंडळ का कर्ज", "₹45,000", "4% सालाना ब्याज, 36 बराबर मासिक किश्तों में वापसी"],
          ["आवेदक का हिस्सा", "₹5,000", "खुद लगाना होता है"],
        ],
      },
      callout: { kind: "info", html: "कर्ज की सीमा ₹25,000 से बढ़ाकर ₹1,00,000 करने की मंज़ूरी शासन निर्णय दिनांक <strong>21 दिसंबर 2018</strong> से मिली। प्रकल्प ₹1 लाख से कम है तो राशि उसी हिसाब से कम होगी; अपने मामले की राशि ज़िला कार्यालय से पक्की करें।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "महाराष्ट्र का निवासी",
        "<strong>अनुसूचित जाति (SC) या नव-बौद्ध</strong> समाज से, जाति प्रमाण पत्र के साथ",
        "आर्थिक रूप से कमज़ोर / गरीबी रेखा से नीचे का परिवार (आय प्रमाण पत्र ज़रूरी)",
        "जो छोटा व्यवसाय शुरू करना चाहता है, उसका सामान/मशीन का कोटेशन हो",
      ],
      callout: { kind: "warn", html: "आयु सीमा और आय सीमा की ताज़ा शर्तें हमें महामंडळ की वेबसाइट पर नहीं मिलीं। आवेदन से पहले ज़िला कार्यालय से लिखित शर्तें लें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "जाति प्रमाण पत्र",
        "आय प्रमाण पत्र (उत्पन्नाचा दाखला)",
        "निवास का प्रमाण: राशन कार्ड, वोटर ID, आधार, PAN या बिजली बिल",
        "व्यवसाय के कागज़, जैसे खरीदे जाने वाले सामान का कोटेशन (किंमतीपत्रक)",
        "कर्ज मंज़ूरी के समय ज़मानतदार और उनके कागज़ मांगे जा सकते हैं",
      ],
    },
    {
      id: "prakriya",
      title: "आवेदन और कर्ज मिलने की प्रक्रिया",
      steps: [
        "अपने ज़िले के <strong>महात्मा फुले महामंडळ ज़िला कार्यालय</strong> में योजना और आवेदन का तरीका पूछें; कागज़ के साथ आवेदन जमा करें।",
        "ज़िला कार्यालय आपके घर और व्यवसाय की जगह की <strong>जांच</strong> करता है।",
        "प्रस्ताव <strong>प्रादेशिक व्यवस्थापक</strong> के पास मंज़ूरी और निधि के लिए जाता है।",
        "मंज़ूरी के बाद आपका हिस्सा घटाकर <strong>पहली किश्त (75%)</strong> दी जाती है।",
        "व्यवसाय सच में शुरू होने पर प्रादेशिक व्यवस्थापक की जांच के बाद <strong>दूसरी किश्त (25%)</strong> मिलती है।",
        "₹45,000 का कर्ज 4% ब्याज के साथ 36 मासिक किश्तों में महामंडळ को लौटाएं।",
      ],
      callout: { kind: "ok", html: "किसी एजेंट को पैसे न दें। महामंडळ की वेबसाइट पर कर्ज व्यवस्थापन प्रणाली का लॉगिन है; ऑनलाइन आवेदन चालू है या नहीं, यह ज़िला कार्यालय से पूछें।" },
    },
    {
      id: "dusri",
      title: "महामंडळ की दूसरी योजनाएं",
      list: [
        '<strong>अनुदान योजना:</strong> ₹50,000 तक के व्यवसाय पर 50% (अधिकतम ₹25,000) अनुदान, बाकी बैंक कर्ज। देखें <a href="/service/mpbcdc-subsidy-yojana.html">50% अनुदान योजना</a>।',
        "<strong>बीज भांडवल योजना:</strong> ₹5 लाख तक के व्यवसाय पर बैंक 75%, महामंडळ 20% और आवेदक 5%।",
        '<a href="/service/mpbcdc-yojana.html">MPBCDC की सभी योजनाओं की तुलना</a>',
      ],
    },
  ],
  official: [
    { href: "https://mpbcdc.maharashtra.gov.in/", title: "महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC)", note: "ईमेल info@mpbcdc.in" },
    { href: "https://sjsa.maharashtra.gov.in/", title: "सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र" },
  ],
  faq: [
    { q: "थेट कर्ज योजना में कितना पैसा मिलता है?", a: "₹1,00,000 तक के व्यवसाय के लिए: ₹50,000 तक अनुदान, ₹45,000 महामंडळ का कर्ज और ₹5,000 आवेदक का हिस्सा।" },
    { q: "ब्याज कितना है और कितने समय में लौटाना है?", a: "महामंडळ के कर्ज पर 4% सालाना ब्याज है और इसे 3 साल (36 बराबर मासिक किश्तों) में लौटाना होता है।" },
    { q: "क्या बैंक से कर्ज लेना पड़ता है?", a: "नहीं, इस योजना में कर्ज सीधे महामंडळ देता है। अनुदान और बीज भांडवल योजनाओं में बैंक का कर्ज होता है।" },
    { q: "कौन पात्र है?", a: "महाराष्ट्र के अनुसूचित जाति और नव-बौद्ध समाज के आर्थिक रूप से कमज़ोर लोग, जो स्वरोज़गार शुरू करना चाहते हैं। आयु और आय सीमा ज़िला कार्यालय से पक्की करें।" },
    { q: "पैसा एक साथ मिलता है?", a: "नहीं, पहले 75% और व्यवसाय शुरू होने व जांच के बाद बाकी 25% मिलता है।" },
  ],
  related: [
    { href: "/service/mpbcdc-yojana.html", emoji: "💸", title: "MPBCDC की सभी योजनाएं", text: "अनुदान, बीज भांडवल, थेट कर्ज" },
    { href: "/service/mpbcdc-subsidy-yojana.html", emoji: "🎁", title: "50% अनुदान योजना", text: "₹50,000 तक के व्यवसाय पर" },
    { href: "/service/mh-caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र (महाराष्ट्र)", text: "आवेदन के लिए ज़रूरी" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (महाराष्ट्र)", text: "उत्पन्नाचा दाखला" },
    { href: "/service/stand-up-india.html", emoji: "🏦", title: "स्टैंड-अप इंडिया", text: "SC/ST व महिलाओं के लिए बैंक कर्ज" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे व्यवसाय के लिए कर्ज" },
  ],
  aside: [
    { href: "https://mpbcdc.maharashtra.gov.in/", label: "🏛️ MPBCDC वेबसाइट" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
