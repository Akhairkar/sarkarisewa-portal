import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026):
// - PIB backgrounder "5 Years of e-Shram Portal" (25 Aug 2026,
//   static.pib.gov.in doc_9692): Ministry of Labour & Employment, launched
//   26.08.2021, built by NIC; 12-digit UAN; One-Stop Solution from
//   21.10.2024 with 15 schemes (PM-SYM, PMSBY, PMJJBY, NSAP, ONORC, PMAY-G...);
//   PMSBY ₹2 lakh accidental death/permanent disability, ₹1 lakh partial;
//   PMJJBY ₹2 lakh life cover; PM-SYM ₹3,000/month pension at 60 subject to
//   eligibility; eligibility 16+ years, unorganised sector, not income-tax
//   payer, not EPFO/ESIC member; registration free (register.eshram.gov.in,
//   CSC, State Seva Kendra); needs Aadhaar (eKYC) + mobile; 22 languages;
//   NCS, Skill India Digital Hub, myScheme links; BOCW data shared with states.
// - eshram.gov.in/indexmain: Helpdesk 14434 / 18008896811, 9 AM-6 PM daily
//   incl. Sundays; "Register on eShram", "Already Registered? LOGIN", "Update
//   Your Occupation", eShram on UMANG, eShram mobile app.
// Not used: the old page's "provides accident insurance" (PMSBY is now an
// enrolment option, not automatic); "₹1,000/₹3,000 e-Shram payment" claims.
export const eShramCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "ई-श्रम कार्ड" },
  ],
  docHi: "ई-श्रम कार्ड",
  title: "ई-श्रम कार्ड (असंगठित श्रमिक पंजीकरण)",
  description: "ई-श्रम कार्ड 2026: असंगठित क्षेत्र के मज़दूरों का मुफ्त पंजीकरण, पात्रता, आधार-मोबाइल से आवेदन, UAN कार्ड डाउनलोड, जुड़ी योजनाएं (PMSBY, PMJJBY, PM-SYM) और हेल्पलाइन 14434।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ई-श्रम कार्ड 2026: कौन बनवा सकता है, मुफ्त पंजीकरण, डाउनलोड और फायदे",
  lead: "ई-श्रम (e-Shram) केंद्र सरकार के श्रम एवं रोज़गार मंत्रालय का पोर्टल है, जिस पर असंगठित क्षेत्र के मज़दूर (खेतिहर मज़दूर, निर्माण मज़दूर, घरेलू कामगार, रेहड़ी-पटरी वाले, प्रवासी, गिग/प्लेटफॉर्म वर्कर आदि) <strong>मुफ्त</strong> पंजीकरण करके 12 अंकों का UAN नंबर वाला ई-श्रम कार्ड पाते हैं। 16 साल या उससे ज़्यादा उम्र का कोई भी असंगठित मज़दूर, जो आयकर नहीं भरता और EPFO/ESIC का सदस्य नहीं है, आधार और मोबाइल नंबर से पंजीकरण कर सकता है। <strong>ई-श्रम कार्ड पर अपने-आप कोई मासिक पैसा नहीं आता</strong>; इससे सरकारी योजनाओं में जुड़ना आसान होता है।",
  facts: [
    ["पोर्टल", '<a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a>'],
    ["उम्र", "16 साल या ज़्यादा"],
    ["फीस", "पूरी तरह मुफ्त (CSC पर भी)"],
    ["हेल्पलाइन", "14434 / 1800-889-6811 (सुबह 9 से शाम 6, रविवार सहित)"],
  ],
  notice: "<strong>सावधान:</strong> \"ई-श्रम कार्ड पर ₹1,000 / ₹3,000 हर महीने\" जैसे वीडियो और वेबसाइटें भ्रामक हैं। ई-श्रम कार्ड पर कोई तय मासिक भुगतान नहीं है। ₹3,000 मासिक पेंशन अलग योजना (PM-SYM) की है, जिसमें 60 साल की उम्र के बाद, शर्तें पूरी होने पर पेंशन मिलती है।",
  sections: [
    {
      id: "kaun",
      title: "कौन बनवा सकता है ई-श्रम कार्ड",
      list: [
        "उम्र <strong>16 साल या उससे ज़्यादा</strong>।",
        "<strong>असंगठित क्षेत्र</strong> में काम: घर से काम करने वाले, खुद का काम करने वाले, या दिहाड़ी/वेतन पर काम करने वाले मज़दूर। संगठित क्षेत्र का वह कामगार भी, जो EPFO/ESIC का सदस्य या सरकारी कर्मचारी नहीं है।",
        "<strong>आयकर (Income Tax) नहीं</strong> भरता हो।",
        "<strong>EPFO (PF) या ESIC</strong> का सदस्य न हो।",
      ],
      callout: { kind: "info", html: "पंजीकरण के लिए सिर्फ <strong>आधार नंबर</strong> (आधार e-KYC के लिए) और <strong>मोबाइल नंबर</strong> चाहिए। मोबाइल आधार से जुड़ा हो तो काम आसान होता है।" },
    },
    {
      id: "panjikaran",
      title: "ई-श्रम पर पंजीकरण कैसे करें",
      steps: [
        '<a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a> पर <strong>Register on eShram</strong> चुनें (सीधा पेज: <a href="https://register.eshram.gov.in/#/user/self" target="_blank" rel="noopener nofollow">register.eshram.gov.in</a>)।',
        "आधार से जुड़ा मोबाइल नंबर डालें, OTP से पुष्टि करें।",
        "आधार नंबर डालकर आधार OTP से e-KYC पूरा करें।",
        "पता, शिक्षा, काम (occupation), हुनर और बैंक खाते की जानकारी भरें।",
        "सबमिट करें और <strong>UAN कार्ड</strong> डाउनलोड करके संभाल लें।",
      ],
      html: "<p>खुद न कर पाएं तो पास के <a href=\"/tools/csc-locator.html\">कॉमन सर्विस सेंटर (CSC)</a> या राज्य सेवा केंद्र पर करवाएं। PIB के अनुसार पंजीकरण किसी भी एजेंसी पर मुफ्त है; पैसे मांगे जाएं तो हेल्पलाइन 14434 पर बताएं। ई-श्रम UMANG ऐप और eShram मोबाइल ऐप पर भी है।</p>",
    },
    {
      id: "yojana",
      title: "ई-श्रम से कौन सी योजनाएं जुड़ी हैं",
      intro: "21 अक्टूबर 2024 से ई-श्रम \"वन-स्टॉप सॉल्यूशन\" है: पोर्टल पर 15 सामाजिक सुरक्षा और कल्याण योजनाएं एक जगह दिखती हैं, और आप देख सकते हैं कि किसका लाभ मिला है। कुछ मुख्य:",
      table: {
        head: ["योजना", "क्या मिलता है (PIB, अगस्त 2026)"],
        rows: [
          ['<a href="/service/pm-suraksha-bima-yojana.html">PM सुरक्षा बीमा योजना (PMSBY)</a>', "दुर्घटना में मृत्यु/स्थायी विकलांगता पर ₹2 लाख, आंशिक विकलांगता पर ₹1 लाख; ई-श्रम से नामांकन कर सकते हैं"],
          ['<a href="/service/pm-jeevan-jyoti-bima-yojana.html">PM जीवन ज्योति बीमा योजना (PMJJBY)</a>', "किसी भी कारण मृत्यु पर ₹2 लाख का जीवन बीमा; ई-श्रम से नामांकन"],
          ['<a href="/service/pm-shram-yogi-maandhan.html">PM श्रम योगी मान-धन (PM-SYM)</a>', "60 साल के बाद कम से कम ₹3,000 मासिक पेंशन, पात्रता की शर्तों के साथ"],
          ["वन नेशन वन राशन कार्ड, NSAP, PMAY-ग्रामीण आदि", "पात्र होने पर इन योजनाओं की जानकारी और लाभ एक जगह"],
          ['<a href="/service/ncs-national-career-service.html">नेशनल करियर सर्विस (NCS)</a>', "नौकरी खोजने के लिए जुड़ाव; Skill India Digital Hub से ट्रेनिंग"],
        ],
      },
      callout: { kind: "warn", html: "PMSBY/PMJJBY बीमा अपने-आप नहीं मिलता: इनमें नामांकन और बैंक खाते से सालाना प्रीमियम कटना ज़रूरी है। पहले की तरह \"ई-श्रम कार्ड बनते ही ₹2 लाख बीमा\" मानकर न चलें।" },
    },
    {
      id: "nirman",
      title: "निर्माण मज़दूर और प्रवासी मज़दूर ध्यान दें",
      list: [
        "ई-श्रम पर दर्ज निर्माण मज़दूरों का डेटा राज्यों के साथ साझा होता है, ताकि वे अपने राज्य के <strong>BOCW बोर्ड (लेबर कार्ड)</strong> में भी पंजीकरण करा सकें। लेबर कार्ड के फायदे अलग हैं: <a href=\"/service/labour-card-construction-workers.html\">लेबर कार्ड गाइड</a>।",
        "प्रवासी मज़दूर पोर्टल पर परिवार की जानकारी भी दर्ज कर सकते हैं।",
        "गिग और प्लेटफॉर्म वर्कर (डिलीवरी, कैब आदि) के लिए अलग पंजीकरण विकल्प है।",
      ],
    },
    {
      id: "update",
      title: "कार्ड डाउनलोड और जानकारी अपडेट",
      list: [
        "पोर्टल पर <strong>Already Registered? LOGIN</strong> से आधार/मोबाइल OTP से लॉगिन करें।",
        "प्रोफाइल में मोबाइल, पता, काम, बैंक खाता अपडेट करें और UAN कार्ड दोबारा डाउनलोड करें।",
        "काम बदल गया हो तो <strong>Update Your Occupation</strong> विकल्प है।",
      ],
    },
  ],
  official: [
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (श्रम एवं रोज़गार मंत्रालय)" },
    { href: "https://register.eshram.gov.in/#/user/self", title: "e-Shram स्व-पंजीकरण" },
    { href: "https://maandhan.in/", title: "PM-SYM पेंशन (maandhan.in)" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc_9692_20260825_14270901.pdf", title: "PIB: e-Shram के 5 साल (अगस्त 2026, PDF)" },
  ],
  faq: [
    { q: "ई-श्रम कार्ड कौन बनवा सकता है?", a: "16 साल या ज़्यादा उम्र का असंगठित क्षेत्र का कोई भी मज़दूर, जो आयकर नहीं भरता और EPFO या ESIC का सदस्य नहीं है।" },
    { q: "ई-श्रम कार्ड बनवाने की फीस कितनी है?", a: "कोई फीस नहीं। पोर्टल पर खुद करें या CSC/राज्य सेवा केंद्र पर, पंजीकरण मुफ्त है।" },
    { q: "क्या ई-श्रम कार्ड पर हर महीने पैसे मिलते हैं?", a: "नहीं। ई-श्रम कार्ड पर कोई तय मासिक भुगतान नहीं है। यह योजनाओं से जुड़ने का रास्ता है। ₹3,000 मासिक पेंशन PM-SYM योजना की है, जो 60 साल के बाद शर्तों के साथ मिलती है।" },
    { q: "ई-श्रम हेल्पलाइन नंबर क्या है?", a: "14434 या 1800-889-6811, सुबह 9 से शाम 6 बजे तक, रविवार सहित (eshram.gov.in के अनुसार)।" },
    { q: "क्या ई-श्रम कार्ड से दुर्घटना बीमा मिलता है?", a: "ई-श्रम पोर्टल से PMSBY में नामांकन कर सकते हैं, जिसमें दुर्घटना में मृत्यु/स्थायी विकलांगता पर ₹2 लाख और आंशिक विकलांगता पर ₹1 लाख मिलता है। इसके लिए नामांकन और प्रीमियम ज़रूरी है।" },
  ],
  related: [
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👴", title: "PM श्रम योगी मान-धन", text: "₹3,000 मासिक पेंशन योजना" },
    { href: "/service/labour-card-construction-workers.html", emoji: "👷", title: "लेबर कार्ड (BOCW)", text: "निर्माण मज़दूरों के लिए" },
    { href: "/service/pm-suraksha-bima-yojana.html", emoji: "🛡️", title: "PM सुरक्षा बीमा योजना", text: "दुर्घटना बीमा" },
    { href: "/service/migrant-worker-registration.html", emoji: "🧳", title: "प्रवासी मज़दूर पंजीकरण", text: "प्रवासी कामगारों के लिए" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP के लिए ज़रूरी" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "मुफ्त पंजीकरण करवाएं" },
  ],
  aside: [
    { href: "https://eshram.gov.in/", label: "📝 ई-श्रम पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
