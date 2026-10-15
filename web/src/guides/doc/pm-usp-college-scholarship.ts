import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): scholarships.gov.in "All Scholarships" list
// for 2026-27 (PM-USP CSSS by Department of Higher Education shown "for
// Renewal": open 01-06-2026, student application till 31-10-2026, institute
// verification till 15-11-2026, DNO/SNO/MNO verification till 30-11-2026; no
// fresh window listed on that date); scholarships.gov.in/public/
// schemeGuidelines/CSSS_GUIDLINES_07022024_updated.pdf (applicable 2022-23
// onwards: max 82,000 fresh scholarships, 50% for girls, above 80th
// percentile in Class XII stream, regular degree only, no diploma, family
// income up to ₹4.5 lakh, ₹12,000/yr for first 3 years of graduation, ₹20,000/yr
// at PG and 4th/5th year of 5-year courses, B.Tech/BE ₹20,000 in 4th year,
// renewal needs 50% marks + 75% attendance, DBT, PFMS "Know Your Payment",
// contact 011-20862360, ns1-scholarship@gov.in); FAQ_DOHE_CSSS.pdf 2025-26
// (drop-year students not eligible, Board's top-20-percentile list, OTR,
// name must match Class XII roll card/marksheet, max 5 years).
export const pmUspCollegeScholarship: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "पीएम-यूएसपी कॉलेज छात्रवृत्ति" },
  ],
  docHi: "पीएम-यूएसपी कॉलेज छात्रवृत्ति",
  title: "पीएम उच्च शिक्षा छात्रवृत्ति योजना (PM-USP College Scholarship)",
  description: "कॉलेज व विश्वविद्यालय के मेधावी छात्रों हेतु प्रति वर्ष ₹12,000 से ₹20,000 की केंद्रीय छात्रवृत्ति योजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम-यूएसपी कॉलेज छात्रवृत्ति (CSSS): ₹12,000 से ₹20,000 सालाना, पात्रता और NSP पर आवेदन",
  lead: "शिक्षा मंत्रालय के उच्च शिक्षा विभाग की \"PM-USP सेंट्रल सेक्टर स्कीम ऑफ स्कॉलरशिप फॉर कॉलेज एंड यूनिवर्सिटी स्टूडेंट्स\" (CSSS) में 12वीं में अपने बोर्ड और स्ट्रीम के 80वें पर्सेंटाइल से ऊपर आए, ₹4.5 लाख तक सालाना पारिवारिक आय वाले छात्रों को नियमित डिग्री कोर्स के दौरान स्नातक में ₹12,000 और स्नातकोत्तर में ₹20,000 प्रति वर्ष मिलते हैं। हर साल अधिकतम 82,000 नई छात्रवृत्तियां दी जाती हैं। आवेदन सिर्फ राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर ऑनलाइन होता है और कोई फीस नहीं है।",
  facts: [
    ["राशि", "स्नातक (पहले 3 साल) ₹12,000/वर्ष; स्नातकोत्तर ₹20,000/वर्ष"],
    ["पात्रता", "12वीं में 80वें पर्सेंटाइल से ऊपर, आय ₹4.5 लाख तक"],
    ["आवेदन", '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> (NSP)'],
    ["2026-27 रिन्यूअल", "आवेदन 31 अक्टूबर 2026 तक"],
  ],
  notice: "15 अक्टूबर 2026 को NSP की 2026-27 सूची में यह योजना सिर्फ <strong>रिन्यूअल (for Renewal)</strong> के लिए खुली दिखी, छात्र आवेदन की आखिरी तारीख 31 अक्टूबर 2026। नए (Fresh) आवेदन की तारीख NSP पर ही देखें।",
  sections: [
    {
      id: "rashi",
      title: "कितनी छात्रवृत्ति मिलती है",
      intro: "दरें योजना के दिशानिर्देश (2022-23 से लागू) के अनुसार:",
      table: {
        head: ["पढ़ाई का स्तर", "राशि (प्रति वर्ष)"],
        rows: [
          ["स्नातक (ग्रेजुएशन) के पहले 3 साल", "₹12,000"],
          ["स्नातकोत्तर (पोस्ट-ग्रेजुएशन)", "₹20,000"],
          ["5 साल के प्रोफेशनल/इंटीग्रेटेड कोर्स का 4था और 5वां साल", "₹20,000"],
          ["B.Tech / B.E. का 4था साल", "₹20,000 (स्नातक तक ही मिलती है)"],
        ],
      },
      callout: { kind: "info", html: "पैसा सीधे छात्र के <strong>आधार से जुड़े (seeded) बैंक खाते</strong> में DBT से आता है। कुल अवधि 5 साल से ज़्यादा नहीं।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "12वीं (10+2) में अपने बोर्ड की संबंधित स्ट्रीम के सफल छात्रों में <strong>80वें पर्सेंटाइल से ऊपर</strong>। बोर्ड इन छात्रों की सूची देता है; नाम सूची में न हो तो योजना NSP पर नहीं दिखती।",
        "पिछले शैक्षणिक वर्ष में 12वीं पास करके इसी साल <strong>नियमित (Regular) डिग्री कोर्स</strong> के पहले वर्ष में दाखिला। 12वीं के बाद ड्रॉप लेने वाले पात्र नहीं।",
        "<strong>पत्राचार/दूरस्थ (Distance) कोर्स और डिप्लोमा</strong> वाले पात्र नहीं।",
        "परिवार की कुल सालाना आय <strong>₹4.5 लाख तक</strong>। आय प्रमाण पत्र सिर्फ नए आवेदन में लगता है।",
        "कोई दूसरी मेरिट छात्रवृत्ति, राज्य की छात्रवृत्ति, फीस माफी या फीस प्रतिपूर्ति न ले रहे हों।",
      ],
      callout: { kind: "info", html: "50% छात्रवृत्तियां लड़कियों के लिए। SC 15%, ST 7.5%, OBC 27% और 40% या ज़्यादा दिव्यांगता वाले छात्रों को 5% क्षैतिज आरक्षण मिलता है।" },
    },
    {
      id: "avedan",
      title: "NSP पर आवेदन कैसे करें",
      steps: [
        '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> पर मोबाइल नंबर और आधार e-KYC से <strong>One Time Registration (OTR)</strong> बनाएं।',
        "OTR/आधार से लॉगिन करें, अपना मूल (Domicile) राज्य और \"Post-Matric\" चुनकर Application ID बनाएं।",
        "सामान्य, श्रेणी और पढ़ाई की जानकारी भरें, फिर \"PM-USP Central Sector Scheme of Scholarship for College and University Students\" चुनें।",
        "ज़रूरी कागज़ अपलोड करके फॉर्म सबमिट करें।",
        "कॉलेज के <strong>इंस्टीट्यूट नोडल ऑफिसर (INO)</strong> से आवेदन सत्यापित करवाएं; इसके बाद राज्य स्तर पर सत्यापन होता है।",
      ],
      callout: { kind: "warn", html: "अपना नाम, पिता का नाम और रोल नंबर बिल्कुल वैसा भरें जैसा 12वीं के रोल कार्ड/मार्कशीट में है। आधार में नाम अलग हो (जैसे \"M.P. Singh\" बनाम पूरा नाम) तो योजना दिखती ही नहीं; पहले आधार में नाम ठीक करवाएं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "12वीं की मार्कशीट",
        "पारिवारिक आय प्रमाण पत्र (सिर्फ नए आवेदन के लिए)",
        "कॉलेज में दाखिले का प्रमाण / बोनाफाइड प्रमाण पत्र",
        "जाति प्रमाण पत्र (SC/ST/OBC श्रेणी में आवेदन हो तो) और दिव्यांगता प्रमाण पत्र (लागू हो तो)",
        "आधार और आधार से जुड़ा छात्र के नाम का बैंक खाता",
      ],
    },
    {
      id: "renewal",
      title: "हर साल रिन्यूअल",
      list: [
        "दूसरे, तीसरे और आगे के साल में पैसा पाने के लिए हर साल NSP पर <strong>रिन्यूअल आवेदन</strong> करना ज़रूरी है।",
        "पिछली वार्षिक परीक्षा में <strong>कम से कम 50% अंक</strong> और <strong>75% उपस्थिति</strong> चाहिए।",
        "किसी साल रिन्यूअल छूट गया तो उस साल का पैसा नहीं मिलेगा, पर अगले साल शर्तें पूरी हों तो फिर रिन्यूअल कर सकते हैं।",
        "रैगिंग या अनुशासनहीनता की शिकायत पर छात्रवृत्ति रद्द हो सकती है।",
        "कॉलेज बदलने पर भी छात्रवृत्ति जारी रह सकती है, अगर नए संस्थान का वैध AISHE कोड हो।",
      ],
    },
    {
      id: "payment",
      title: "पैसा नहीं आया? स्टेटस और शिकायत",
      list: [
        "NSP पर अपने लॉगिन से आवेदन और भुगतान की स्थिति देखें।",
        'PFMS पोर्टल पर "Know Your Payment" में आधार, खाता नंबर या NSP Application ID से भुगतान देखें। PFMS पर "Success" दिखे तो उस बैंक खाते को जांचें जो उस समय आधार से जुड़ा था।',
        "बैंक जाकर पक्का करें कि खाता आधार से जुड़ा (NPCI मैपर में) है।",
        "शिकायत: NSP हेल्पडेस्क 0120-6619540 (helpdesk@nsp.gov.in), या उच्च शिक्षा विभाग की स्कॉलरशिप डिवीज़न 011-20862360 (ns1-scholarship@gov.in), या pgportal.gov.in।",
      ],
    },
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "हेल्पडेस्क 0120-6619540" },
    { href: "https://scholarships.gov.in/public/schemeGuidelines/CSSS_GUIDLINES_07022024_updated.pdf", title: "PM-USP CSSS दिशानिर्देश (PDF)" },
    { href: "https://scholarships.gov.in/public/schemeGuidelines/FAQ_DOHE_CSSS.pdf", title: "PM-USP CSSS FAQ (PDF)" },
    { href: "https://www.education.gov.in/", title: "शिक्षा मंत्रालय" },
  ],
  faq: [
    { q: "PM-USP कॉलेज छात्रवृत्ति में कितना पैसा मिलता है?", a: "स्नातक के पहले तीन साल ₹12,000 प्रति वर्ष और स्नातकोत्तर में ₹20,000 प्रति वर्ष। 5 साल के कोर्स के 4थे-5वें साल और B.Tech/B.E. के 4थे साल में ₹20,000 मिलते हैं।" },
    { q: "80वां पर्सेंटाइल का मतलब क्या है?", a: "आपके बोर्ड में आपकी स्ट्रीम (साइंस/कॉमर्स/आर्ट्स) के पास हुए छात्रों में आप ऊपर के 20% में हों। यह सूची बोर्ड देता है; आपका नाम उसमें हो तभी NSP पर योजना दिखती है।" },
    { q: "क्या डिप्लोमा या डिस्टेंस कोर्स वाले आवेदन कर सकते हैं?", a: "नहीं। सिर्फ मान्यता प्राप्त कॉलेज/विश्वविद्यालय में नियमित डिग्री कोर्स वाले छात्र पात्र हैं।" },
    { q: "12वीं के बाद एक साल ड्रॉप लिया, क्या आवेदन कर सकते हैं?", a: "नहीं। 2025-26 के आधिकारिक FAQ के अनुसार 12वीं के बाद ड्रॉप लेने वाले छात्र नए आवेदन के पात्र नहीं हैं।" },
    { q: "2026-27 में आवेदन कब तक है?", a: "15 अक्टूबर 2026 को NSP पर यह योजना रिन्यूअल के लिए खुली दिखी, छात्र आवेदन 31 अक्टूबर 2026 तक और कॉलेज सत्यापन 15 नवंबर 2026 तक। नए आवेदन की तारीखें NSP पर देखते रहें।" },
    { q: "क्या साथ में दूसरी छात्रवृत्ति ले सकते हैं?", a: "नहीं। किसी दूसरी मेरिट छात्रवृत्ति, राज्य की छात्रवृत्ति, फीस माफी या प्रतिपूर्ति के साथ यह छात्रवृत्ति नहीं मिलती।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर OTR और आवेदन" },
    { href: "/service/pragati-scholarship-girl-students.html", emoji: "👩‍🎓", title: "AICTE प्रगति छात्रवृत्ति", text: "तकनीकी पढ़ाई वाली छात्राओं के लिए" },
    { href: "/service/post-matric-scholarship-obc-ebc.html", emoji: "📚", title: "पोस्ट-मैट्रिक छात्रवृत्ति OBC/EBC", text: "पिछड़े वर्ग के छात्रों के लिए" },
    { href: "/service/pm-vidyalaxmi-scheme.html", emoji: "🏦", title: "पीएम विद्यालक्ष्मी", text: "उच्च शिक्षा के लिए एजुकेशन लोन" },
    { href: "/service/digilocker.html", emoji: "📂", title: "डिजिलॉकर", text: "मार्कशीट और प्रमाण पत्र डिजिटल" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP पर आवेदन" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
