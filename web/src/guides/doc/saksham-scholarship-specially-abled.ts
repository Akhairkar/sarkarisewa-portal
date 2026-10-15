import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in) scheme pages
// "AICTE – Saksham Scholarship Scheme For Specially-Abled Student" (Degree,
// slug sak-deg; Diploma, slug sak-dip): Ministry of Education, implemented by
// AICTE; ₹50,000 per year lump sum, max 4/3 years (degree) and 3/2 years
// (diploma, lateral entry); disability not less than 40%; family income not
// above ₹8 lakh; 1st year or lateral-entry 2nd year in AICTE-approved
// institution; gap not more than 2 years; DBT; renewal via NSP; no other
// scholarship; references to aicte-india.org guidelines. AICTE notice dated
// 19 June 2026 (as quoted in university circulars found by search): NSP last
// date for 2026-27 fresh and renewal applications 31.10.2026. NSP helpdesk
// 0120-6619540. The old page's helpline (1800-11-0001 / 1947) and email were
// not scheme contacts and are removed.
export const sakshamScholarshipSpeciallyAbled: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "AICTE सक्षम छात्रवृत्ति" },
  ],
  docHi: "AICTE सक्षम छात्रवृत्ति",
  title: "एआईसीटीई सक्षम दिव्यांग छात्रवृत्ति (AICTE Saksham Scholarship)",
  description: "तकनीकी डिग्री/डिप्लोमा पढ़ रहे 40% या अधिक दिव्यांगता वाले छात्रों को ₹50,000 सालाना। पात्रता, ₹8 लाख आय सीमा, NSP पर आवेदन, 2026-27 की आखिरी तारीख और नवीनीकरण।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "AICTE सक्षम छात्रवृत्ति 2026-27: दिव्यांग छात्रों को ₹50,000 सालाना",
  lead: "सक्षम (Saksham) शिक्षा मंत्रालय की छात्रवृत्ति योजना है, जिसे AICTE चलाता है। AICTE से मान्यता प्राप्त संस्थान में तकनीकी डिग्री या डिप्लोमा के पहले साल (या लेटरल एंट्री से दूसरे साल) में दाखिला लेने वाले, कम से कम 40% दिव्यांगता वाले छात्र को हर साल ₹50,000 मिलते हैं, बशर्ते परिवार की सालाना आय ₹8 लाख से ज़्यादा न हो। आवेदन राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर होता है; 2026-27 के लिए आखिरी तारीख 31 अक्टूबर 2026 है।",
  facts: [
    ["राशि", "₹50,000 प्रति वर्ष (DBT से)"],
    ["दिव्यांगता", "कम से कम 40%"],
    ["परिवार की आय", "₹8 लाख सालाना तक"],
    ["आवेदन", "NSP पर, 2026-27 के लिए 31 अक्टूबर 2026 तक"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "AICTE से मान्यता प्राप्त संस्थान में <strong>डिग्री या डिप्लोमा कोर्स के पहले साल</strong> में दाखिला, या <strong>लेटरल एंट्री से दूसरे साल</strong> में दाखिला (उसी शैक्षणिक वर्ष में)।",
        "<strong>दिव्यांगता 40% से कम न हो</strong> (सक्षम अधिकारी का दिव्यांगता प्रमाण पत्र/UDID)।",
        "परिवार की सभी स्रोतों से सालाना आय <strong>₹8 लाख से ज़्यादा न हो</strong>; राज्य/UT सरकार का आय प्रमाण पत्र ज़रूरी।",
        "पिछली परीक्षा पास करने और इस कोर्स में दाखिले के बीच <strong>दो साल से ज़्यादा का अंतर</strong> न हो।",
        "छात्र को किसी दूसरे स्रोत से छात्रवृत्ति, वेतन या स्टाइपेंड न मिल रहा हो।",
      ],
    },
    {
      id: "rashi",
      title: "कितना पैसा और कितने साल",
      table: {
        head: ["कोर्स", "पहले साल में दाखिला", "लेटरल एंट्री (दूसरा साल)"],
        rows: [
          ["डिग्री", "₹50,000 हर साल, अधिकतम 4 साल", "₹50,000 हर साल, अधिकतम 3 साल"],
          ["डिप्लोमा", "₹50,000 हर साल, अधिकतम 3 साल", "₹50,000 हर साल, अधिकतम 2 साल"],
        ],
      },
      intro: "यह एकमुश्त सालाना राशि है, जो कॉलेज फीस, कंप्यूटर, किताबें, स्टेशनरी, उपकरण और सॉफ्टवेयर पर खर्च के लिए है।",
      callout: { kind: "info", html: "पैसा सीधे छात्र के आधार से जुड़े बैंक खाते में DBT से आता है। भुगतान की स्थिति PFMS पोर्टल के \"Know Your Payment\" में आधार, बैंक खाता या NSP आवेदन ID से देख सकते हैं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "दिव्यांगता प्रमाण पत्र / UDID कार्ड (40% या अधिक)",
        "राज्य/UT सरकार का आय प्रमाण पत्र (चालू वित्त वर्ष का)",
        "पिछली परीक्षा (10वीं/12वीं/डिप्लोमा) की मार्कशीट",
        "दाखिले का प्रमाण और फीस रसीद; संस्थान का AICTE वाला पहचान विवरण",
        "आधार और आधार से जुड़ा बैंक खाता",
        "जाति प्रमाण पत्र (अगर लागू हो)",
      ],
    },
    {
      id: "avedan",
      title: "NSP पर आवेदन कैसे करें",
      steps: [
        "<a href=\"https://scholarships.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">scholarships.gov.in</a> पर <strong>One Time Registration (OTR)</strong> करें: मोबाइल OTP और आधार e-KYC (NSP OTR ऐप से चेहरे के सत्यापन से भी)।",
        "OTR नंबर से लॉगिन करें और 2026-27 के लिए \"AICTE – Saksham Scholarship\" (Degree या Diploma) चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और <strong>31 अक्टूबर 2026</strong> से पहले सबमिट करें।",
        "इसके बाद आपका संस्थान आवेदन की जांच (Institute verification) करता है और फिर राज्य नोडल स्तर पर जांच होती है। संस्थान से पूछते रहें कि वेरिफिकेशन हुआ या नहीं।",
        "चयन के बाद राशि सालाना DBT से आती है।",
      ],
      callout: { kind: "warn", html: "आखिरी तारीख कभी-कभी बढ़ाई जाती है, पर उस पर भरोसा न करें। संस्थान वेरिफिकेशन न हो तो आवेदन आगे नहीं बढ़ता।" },
    },
    {
      id: "renewal",
      title: "अगले साल नवीनीकरण (Renewal)",
      list: [
        "हर साल NSP पर renewal आवेदन करें, पास होने का प्रमाण/मार्कशीट और संस्थान प्रमुख का पत्र लगाकर।",
        "अगली कक्षा में प्रमोट न होने, फेल होने या पढ़ाई छोड़ने पर छात्रवृत्ति बंद हो जाती है।",
        "किसी दूसरे स्रोत से छात्रवृत्ति लेने पर सक्षम की पूरी राशि लौटानी पड़ सकती है।",
      ],
    },
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "हेल्पडेस्क 0120-6619540, helpdesk@nsp.gov.in" },
    { href: "https://www.aicte-india.org/", title: "AICTE (योजना के दिशानिर्देश)" },
    { href: "https://www.myscheme.gov.in/schemes/sak-deg", title: "myScheme: सक्षम छात्रवृत्ति (डिग्री)" },
  ],
  faq: [
    { q: "सक्षम छात्रवृत्ति में कितना पैसा मिलता है?", a: "₹50,000 हर साल। डिग्री में अधिकतम 4 साल (लेटरल एंट्री में 3), डिप्लोमा में अधिकतम 3 साल (लेटरल एंट्री में 2)।" },
    { q: "2026-27 के लिए आखिरी तारीख क्या है?", a: "AICTE के नोटिस के अनुसार NSP पर नए और renewal आवेदन की आखिरी तारीख 31 अक्टूबर 2026 है।" },
    { q: "कितनी दिव्यांगता चाहिए?", a: "कम से कम 40%। सक्षम अधिकारी का दिव्यांगता प्रमाण पत्र या UDID कार्ड लगाएं।" },
    { q: "क्या दूसरे साल का छात्र नया आवेदन कर सकता है?", a: "सिर्फ तभी, जब उसने उसी साल लेटरल एंट्री से सीधे दूसरे साल में दाखिला लिया हो। बाकी छात्र पहले साल में ही नया आवेदन कर सकते हैं।" },
    { q: "क्या सक्षम के साथ दूसरी छात्रवृत्ति ले सकते हैं?", a: "नहीं। योजना की शर्त है कि छात्र को किसी दूसरे स्रोत से छात्रवृत्ति, वेतन या स्टाइपेंड न मिले।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर OTR और आवेदन" },
    { href: "/service/pragati-scholarship-girl-students.html", emoji: "👩‍🎓", title: "AICTE प्रगति छात्रवृत्ति", text: "तकनीकी शिक्षा में छात्राओं के लिए" },
    { href: "/service/udid-disability-card-download.html", emoji: "♿", title: "UDID कार्ड", text: "दिव्यांगता प्रमाण पत्र" },
    { href: "/service/disability-certificate.html", emoji: "📄", title: "दिव्यांगता प्रमाण पत्र", text: "कैसे बनता है" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "₹8 लाख आय सीमा के प्रमाण के लिए" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP पर आवेदन" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
