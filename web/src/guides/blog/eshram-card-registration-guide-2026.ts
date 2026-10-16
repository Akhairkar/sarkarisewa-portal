import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Overlaps
// with /service/e-shram-card.html (web/src/guides/doc/e-shram-card.ts), so this
// post takes the "is it worth it / common problems and fixes" angle and links
// there for the full process.
// Sources (checked 16 Oct 2026):
// - PIB backgrounder "5 Years of e-Shram Portal" (25 Aug 2026,
//   static.pib.gov.in doc_9692): launched 26.08.2021; 12-digit UAN; free
//   registration; eligibility 16+, unorganised worker, not income-tax payer,
//   not EPFO/ESIC member; Aadhaar + mobile (preferably Aadhaar-linked);
//   One-Stop Solution since 21.10.2024 with schemes such as PMSBY (₹2 lakh
//   accidental death/permanent disability), PMJJBY, PM-SYM (₹3,000/month at
//   60, subject to eligibility); CSC registration via biometric authentication.
// - eshram.gov.in / beta.eshram.gov.in FAQ: helpdesk 14434 / 18008896811,
//   9 AM-6 PM daily incl. Sundays; online grievance option.
// Old page claims not carried over: "one card gives accident insurance"
// (PMSBY needs separate enrolment and premium).

export const eshramCardRegistrationGuide2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "ई-श्रम कार्ड 2026" },
  ],
  docHi: "ई-श्रम कार्ड",
  title: "ई-श्रम कार्ड 2026: रजिस्ट्रेशन, फायदे और हर असंगठित श्रमिक को इसकी जरूरत क्यों है",
  description: "ई-श्रम कार्ड से असल में क्या मिलता है, क्या नहीं, कौन बनवा सकता है, और रजिस्ट्रेशन में OTP, EPFO सदस्य या पहले से पंजीकरण जैसी आम दिक्कतों का हल।",
  published: "2026-06-10",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "ई-श्रम कार्ड 2026: बनवाना क्यों फायदेमंद है, असल में क्या मिलता है और आम दिक्कतों का हल",
  lead: "ई-श्रम श्रम एवं रोज़गार मंत्रालय का पोर्टल है, जहां दिहाड़ी, घरेलू, निर्माण, खेतिहर, प्रवासी और गिग मज़दूर <strong>मुफ्त</strong> पंजीकरण करके 12 अंकों के UAN नंबर वाला कार्ड पाते हैं। कार्ड पर अपने-आप कोई पैसा या बीमा नहीं मिलता; इसका फायदा यह है कि सरकार के रिकॉर्ड में आप असंगठित मज़दूर के रूप में दर्ज हो जाते हैं और बीमा, पेंशन, राशन जैसी योजनाओं से जुड़ना आसान होता है। 16 साल से ऊपर का कोई भी मज़दूर, जो आयकर नहीं भरता और PF (EPFO) या ESIC का सदस्य नहीं है, आधार और मोबाइल से पंजीकरण कर सकता है।",
  facts: [
    ["फीस", "मुफ्त (CSC पर भी)"],
    ["उम्र", "16 साल या ज़्यादा"],
    ["पोर्टल", '<a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a>'],
    ["हेल्पलाइन", "14434 / 1800-889-6811"],
  ],
  notice: "<strong>सावधान:</strong> \"ई-श्रम कार्ड पर हर महीने ₹1,000 या ₹3,000\" जैसे वीडियो भ्रामक हैं। ई-श्रम कार्ड पर कोई तय मासिक भुगतान नहीं है। ₹3,000 मासिक पेंशन अलग योजना PM-SYM की है, जो 60 साल के बाद, अंशदान की शर्तें पूरी करने पर मिलती है।",
  sections: [
    {
      id: "kyon",
      title: "ई-श्रम कार्ड क्यों बनवाएं",
      list: [
        "<strong>योजनाएं एक जगह:</strong> अक्टूबर 2024 से ई-श्रम \"वन-स्टॉप सॉल्यूशन\" है। पोर्टल पर लॉग-इन करके PMSBY, PMJJBY, PM-SYM, वन नेशन वन राशन कार्ड जैसी योजनाएं देख और उनसे जुड़ सकते हैं।",
        "<strong>आपदा या संकट में पहचान:</strong> सरकार असंगठित मज़दूरों तक मदद पहुंचाने के लिए इसी डेटाबेस का इस्तेमाल कर सकती है।",
        "<strong>निर्माण मज़दूरों के लिए:</strong> ई-श्रम पर दर्ज निर्माण मज़दूरों का डेटा राज्यों के साथ साझा होता है, ताकि वे राज्य के लेबर कार्ड (BOCW बोर्ड) में भी जुड़ सकें।",
        "<strong>नौकरी और हुनर:</strong> पोर्टल नेशनल करियर सर्विस (NCS) और Skill India Digital Hub से जुड़ा है।",
      ],
    },
    {
      id: "kya-nahi",
      title: "ई-श्रम कार्ड क्या नहीं है",
      list: [
        "<strong>बीमा पॉलिसी नहीं:</strong> दुर्घटना बीमा (PMSBY: मृत्यु/स्थायी विकलांगता पर ₹2 लाख) के लिए अलग से नामांकन और बैंक खाते से सालाना प्रीमियम कटना ज़रूरी है।",
        "<strong>पेंशन कार्ड नहीं:</strong> पेंशन PM-SYM में नामांकन और हर महीने अंशदान से मिलती है।",
        "<strong>लेबर कार्ड नहीं:</strong> निर्माण मज़दूरों के बोर्ड की योजनाएं (पढ़ाई, शादी, प्रसूति सहायता) सिर्फ राज्य के श्रमिक कार्ड से मिलती हैं।",
      ],
      callout: { kind: "info", html: "पंजीकरण की पूरी विधि, कार्ड डाउनलोड और जुड़ी योजनाओं की तालिका: <a href=\"/service/e-shram-card.html\">ई-श्रम कार्ड गाइड</a>।" },
    },
    {
      id: "kaise",
      title: "पंजीकरण संक्षेप में",
      steps: [
        '<a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a> पर <strong>Register on eShram</strong> चुनें।',
        "आधार से जुड़ा मोबाइल नंबर डालें और OTP से पुष्टि करें; फिर आधार OTP से e-KYC करें।",
        "पता, शिक्षा, काम (occupation) और बैंक खाते की जानकारी भरें।",
        "सबमिट करके UAN कार्ड डाउनलोड करें और संभाल लें।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["आधार से मोबाइल जुड़ा नहीं, OTP नहीं आता", "नज़दीकी <a href=\"/tools/csc-locator.html\">CSC</a> पर जाएं; वहां अंगूठे के निशान (बायोमेट्रिक) से पंजीकरण हो जाता है। या पहले <a href=\"/service/aadhaar-mobile-update.html\">आधार में मोबाइल अपडेट</a> कराएं।"],
          ["फॉर्म में EPFO/ESIC सदस्य होने का सवाल", "जिनका PF या ESIC कटता है, वे ई-श्रम के पात्र नहीं हैं। गलत जानकारी न भरें; उन्हें EPFO/ESIC के लाभ मिलते हैं।"],
          ["\"पहले से पंजीकृत\" दिखा रहा है", "एक आधार पर एक ही पंजीकरण होता है। <strong>Already Registered? LOGIN</strong> से आधार/मोबाइल OTP डालकर पुराना कार्ड डाउनलोड करें।"],
          ["काम या पता बदल गया", "लॉग-इन करके प्रोफाइल अपडेट करें; काम के लिए <strong>Update Your Occupation</strong> विकल्प है।"],
          ["CSC या एजेंट पैसे मांग रहा है", "पंजीकरण मुफ्त है। हेल्पलाइन 14434 पर शिकायत करें, या पोर्टल पर ऑनलाइन शिकायत दर्ज करें।"],
          ["आयकर भरते हैं", "आयकरदाता ई-श्रम के पात्र नहीं हैं।"],
        ],
      },
    },
  ],
  official: [
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "हेल्पलाइन 14434 / 1800-889-6811, सुबह 9 से शाम 6, रविवार सहित" },
    { href: "https://register.eshram.gov.in/#/user/self", title: "e-Shram स्व-पंजीकरण" },
    { href: "https://maandhan.in/", title: "PM-SYM पेंशन (maandhan.in)" },
  ],
  faq: [
    { q: "क्या ई-श्रम कार्ड बनवाना ज़रूरी है?", a: "अनिवार्य नहीं है, पर असंगठित मज़दूरों के लिए फायदेमंद है, क्योंकि इससे सरकारी योजनाओं से जुड़ना आसान होता है। पंजीकरण मुफ्त है।" },
    { q: "क्या ई-श्रम कार्ड से ₹2 लाख का बीमा मिलता है?", a: "अपने-आप नहीं। पोर्टल से PM सुरक्षा बीमा योजना (PMSBY) में नामांकन कर सकते हैं, जिसमें दुर्घटना में मृत्यु या स्थायी विकलांगता पर ₹2 लाख मिलता है। इसके लिए बैंक खाते से सालाना प्रीमियम कटता है।" },
    { q: "PF कटता है, क्या मैं ई-श्रम कार्ड बनवा सकता हूं?", a: "नहीं। EPFO या ESIC के सदस्य ई-श्रम के पात्र नहीं हैं।" },
    { q: "आधार से मोबाइल लिंक नहीं है तो क्या करूं?", a: "CSC पर बायोमेट्रिक (अंगूठे के निशान) से पंजीकरण करा सकते हैं, या पहले आधार केंद्र पर मोबाइल नंबर जुड़वा लें।" },
    { q: "क्या ई-श्रम कार्ड पर हर महीने पैसे आते हैं?", a: "नहीं। ई-श्रम कार्ड पर कोई तय मासिक भुगतान नहीं है।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड गाइड", text: "पंजीकरण, डाउनलोड, योजनाएं" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👴", title: "PM श्रम योगी मान-धन", text: "₹3,000 मासिक पेंशन योजना" },
    { href: "/service/pm-suraksha-bima-yojana.html", emoji: "🛡️", title: "PM सुरक्षा बीमा योजना", text: "दुर्घटना बीमा" },
    { href: "/service/labour-card-construction-workers.html", emoji: "👷", title: "लेबर कार्ड (BOCW)", text: "निर्माण मज़दूरों के लिए" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP के लिए ज़रूरी" },
  ],
  aside: [
    { href: "/service/e-shram-card.html", label: "🪪 पूरी ई-श्रम गाइड" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
