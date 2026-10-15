import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): scholarships.gov.in home page (Ministry of
// Electronics & IT; portal open for AY 2026-27 from 1 June 2026; OTR — 14-digit
// number from Aadhaar / Aadhaar Enrolment ID, valid for the whole academic
// career, required from AY 2024-25, face authentication through the NSP OTR
// app with Aadhaar biometrics unlocked; CSC charge ₹30 for the whole activity;
// one merit-based plus one or more welfare-based schemes from AY 2026-27;
// disabled students must give UDID consent first; PM-USP CSSS renewal closing
// 31-10-2026, institute verification 15-11-2026, L2 30-11-2026) and
// scholarships.gov.in/nsphelpdesk (helpdesk@nsp.gov.in, 0120-6619540, PFMS
// toll-free 1800 118 111, 8 AM-8 PM). Scheme-wise amounts and last dates of
// other schemes vary and are not listed.
export const nationalScholarshipPortal: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)" },
  ],
  docHi: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)",
  title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) 2026",
  description: "योग्यता, आय, और श्रेणी के आधार पर केंद्र और राज्य सरकार की छात्रवृत्तियों के लिए आवेदन करने हेतु छात्रों के लिए एक एकल-खिड़की मंच।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "NSP स्कॉलरशिप 2026-27: OTR रजिस्ट्रेशन, ऑनलाइन आवेदन, स्टेटस और पेमेंट कैसे देखें",
  lead: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) <strong>scholarships.gov.in</strong> पर केंद्र सरकार और कई राज्यों की छात्रवृत्तियों के लिए एक ही जगह आवेदन होता है। अकादमिक वर्ष 2026-27 के लिए पोर्टल 1 जून 2026 से खुला है। आवेदन से पहले आधार से <strong>OTR (One Time Registration)</strong> नंबर बनवाना ज़रूरी है, जो पूरी पढ़ाई के दौरान एक ही रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a>'],
    ["पहला कदम", "OTR नंबर (आधार + NSP OTR ऐप से फेस ऑथेंटिकेशन)"],
    ["हेल्पडेस्क", "0120-6619540, helpdesk@nsp.gov.in"],
    ["CSC पर शुल्क", "₹30 (OTR से आवेदन भरने तक, कुल)"],
  ],
  notice: "<strong>2026-27 की तारीखें:</strong> PM-USP (CSSS) मेरिट स्कॉलरशिप के रिन्यूअल आवेदन की अंतिम तारीख <strong>31 अक्टूबर 2026</strong> है (संस्थान सत्यापन 15 नवंबर 2026)। हर योजना की अंतिम तारीख अलग होती है; पोर्टल के Announcements में देखें।",
  sections: [
    {
      id: "otr",
      title: "स्टेप 1: OTR (One Time Registration) बनवाएं",
      intro: "OTR 14 अंकों का नंबर है, जो आधार या आधार एनरोलमेंट ID (EID) से बनता है। अकादमिक वर्ष 2024-25 से NSP पर आवेदन के लिए OTR ज़रूरी है, और हर साल नया रजिस्ट्रेशन नहीं करना पड़ता।",
      steps: [
        '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> पर <strong>Apply For One Time Registration (OTR)</strong> में मोबाइल नंबर और आधार/EID की जानकारी भरें; एक Reference नंबर मिलता है।',
        "Google Play Store से <strong>NSP OTR</strong> ऐप (और साथ में AadhaarFaceRD ऐप) डाउनलोड करें।",
        "ऐप में Reference नंबर डालकर <strong>फेस ऑथेंटिकेशन</strong> करें। इसके बाद OTR नंबर बनता है।",
      ],
      callout: { kind: "warn", html: "<strong>फेस ऑथेंटिकेशन फेल हो रहा है?</strong> अक्सर इसकी वजह आधार का बायोमेट्रिक लॉक होता है। mAadhaar ऐप या myAadhaar पोर्टल पर बायोमेट्रिक \"Unlock\" करें, फिर दोबारा कोशिश करें।" },
    },
    {
      id: "avedan",
      title: "स्टेप 2: स्कॉलरशिप के लिए आवेदन",
      steps: [
        "OTR नंबर से <strong>Student Login</strong> करें।",
        "पढ़ाई, संस्थान, आय, जाति/श्रेणी और बैंक की जानकारी भरें। आपका स्कूल/कॉलेज NSP पर रजिस्टर्ड होना चाहिए (पोर्टल पर \"Registered Institutes on NSP\" में देखें)।",
        "पात्र योजनाओं में से चुनें। 2026-27 से एक मेरिट-आधारित और एक या अधिक कल्याण-आधारित (welfare) योजनाओं में आवेदन किया जा सकता है।",
        "दस्तावेज़ अपलोड करके फाइनल सबमिट करें। इसके बाद संस्थान और फिर ज़िला/राज्य/मंत्रालय स्तर पर सत्यापन होता है।",
      ],
      callout: { kind: "info", html: "<strong>दिव्यांग छात्र:</strong> पहले UDID पोर्टल पर लॉगिन करके UDID जानकारी साझा करने की सहमति दें, उसके बाद ही NSP पर आवेदन जमा होगा।" },
    },
    {
      id: "dastavej",
      title: "आम तौर पर कौन से कागज़ लगते हैं",
      list: [
        "आधार कार्ड (या आधार एनरोलमेंट ID) और मोबाइल नंबर।",
        "पिछली कक्षा की मार्कशीट, इस साल की फीस रसीद/एडमिशन का प्रमाण।",
        "आय प्रमाण पत्र और ज़रूरत के हिसाब से जाति/अल्पसंख्यक/दिव्यांगता प्रमाण पत्र।",
        "छात्र का बैंक खाता, जो <strong>आधार से जुड़ा (Aadhaar seeded)</strong> हो, क्योंकि पैसा DBT से आता है।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और पेमेंट कैसे देखें",
      list: [
        "<strong>Application Status:</strong> पोर्टल पर लॉगिन करके देखें कि आवेदन किस स्तर पर है।",
        "<strong>Track Your Payment:</strong> पोर्टल का लिंक PFMS पर भुगतान की स्थिति दिखाता है।",
        "<strong>Check Aadhaar Seeding Status:</strong> देखें कि बैंक खाता आधार से जुड़ा है या नहीं; न जुड़ा हो तो बैंक या NPCI के BASE प्लेटफॉर्म से जोड़ें।",
      ],
    },
    {
      id: "madad",
      title: "हेल्पलाइन और शिकायत",
      table: {
        head: ["किसके लिए", "संपर्क"],
        rows: [
          ["NSP हेल्पडेस्क", "0120-6619540, helpdesk@nsp.gov.in (सुबह 8 से रात 8, सरकारी छुट्टी छोड़कर)"],
          ["PFMS (भुगतान)", "टोल-फ्री 1800 118 111, helpdesk-pfms@gov.in"],
          ["शिकायत", "पोर्टल पर Grievance Registration, या योजना के नोडल अधिकारी (Scheme-wise / District-wise सूची पोर्टल पर)"],
          ["फॉर्म भरने में मदद", 'नज़दीकी CSC (कुल ₹30): <a href="/tools/csc-locator.html">CSC खोजें</a>'],
        ],
      },
    },
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)" },
    { href: "https://scholarships.gov.in/nsphelpdesk", title: "NSP हेल्पडेस्क संपर्क" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar: बायोमेट्रिक लॉक/अनलॉक" },
  ],
  faq: [
    { q: "NSP पर OTR क्या है?", a: "One Time Registration, 14 अंकों का नंबर जो आधार/EID से बनता है और पूरी पढ़ाई के दौरान चलता है। 2024-25 से NSP पर आवेदन के लिए यह ज़रूरी है।" },
    { q: "NSP OTR फेस ऑथेंटिकेशन फेल हो तो क्या करें?", a: "mAadhaar ऐप या myAadhaar पोर्टल पर देखें कि आधार बायोमेट्रिक लॉक तो नहीं है; उसे Unlock करके फिर से कोशिश करें। CSC पर भी यह काम हो सकता है।" },
    { q: "क्या एक से ज़्यादा स्कॉलरशिप ले सकते हैं?", a: "2026-27 से छात्र एक मेरिट-आधारित और एक या अधिक कल्याण-आधारित योजनाओं में, पात्रता के अनुसार, आवेदन कर सकते हैं।" },
    { q: "NSP हेल्पलाइन नंबर क्या है?", a: "0120-6619540 और ईमेल helpdesk@nsp.gov.in (सुबह 8 से रात 8)। भुगतान से जुड़े सवालों के लिए PFMS टोल-फ्री 1800 118 111।" },
    { q: "NSP 2026-27 की अंतिम तारीख क्या है?", a: "हर योजना की तारीख अलग है। PM-USP (CSSS) रिन्यूअल की अंतिम तारीख 31 अक्टूबर 2026 है। बाकी योजनाओं की तारीख पोर्टल के Announcements में देखें।" },
  ],
  related: [
    { href: "/service/pm-usp-college-scholarship.html", emoji: "🎓", title: "PM-USP कॉलेज स्कॉलरशिप", text: "मेरिट आधारित छात्रवृत्ति" },
    { href: "/service/post-matric-scholarship-obc-ebc.html", emoji: "📚", title: "पोस्ट मैट्रिक स्कॉलरशिप", text: "OBC/EBC छात्रों के लिए" },
    { href: "/service/pragati-scholarship-girl-students.html", emoji: "👩‍🎓", title: "प्रगति स्कॉलरशिप", text: "तकनीकी शिक्षा में छात्राएं" },
    { href: "/service/saksham-scholarship-specially-abled.html", emoji: "♿", title: "सक्षम स्कॉलरशिप", text: "दिव्यांग छात्रों के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "आधार अपडेट और बायोमेट्रिक" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
