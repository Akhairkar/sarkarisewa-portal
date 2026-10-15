import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB backgrounder "5 Years of e-Shram Portal"
// (static.pib.gov.in doc_9692, 25.08.2026: Ministry of Labour & Employment;
// 12-digit UAN; free registration at register.eshram.gov.in, CSC, State Seva
// Kendra; Aadhaar eKYC + mobile; eligibility 16+, unorganised, not income-tax
// payer, not EPFO/ESIC member; One-Stop Solution with mapped schemes incl.
// ONORC, PMSBY, PMJJBY, PM-SYM), Ministry of Labour release 2026 (provision to
// capture family details of migrant workers), PIB Dec 2025 (31.38 crore
// registrations as of 27.11.2025), Lok Sabha answer 01.12.2025 (Inter-State
// Migrant Workmen Act subsumed in the OSH Code, 2020; old Act entitlements
// incl. journey allowance, displacement allowance, accommodation, medical
// facilities), eshram.gov.in (helpline 14434 / 1800-889-6811, 9 AM-6 PM incl.
// Sundays). There is no separate "Migrant Worker ID": the e-Shram card is
// the national card migrants use. The old description's "₹2 lakh accident
// insurance" was rewritten because PMSBY now needs enrolment and premium.
export const migrantWorkerRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "प्रवासी मज़दूर पंजीकरण" },
  ],
  docHi: "प्रवासी मज़दूर पंजीकरण",
  title: "ई-श्रम प्रवासी मजदूर पहचान पत्र (Migrant Worker ID)",
  description: "प्रवासी मज़दूर ई-श्रम पोर्टल पर मुफ्त पंजीकरण करके 12 अंकों के UAN वाला राष्ट्रीय कार्ड पाते हैं। पात्रता, परिवार की जानकारी, राशन (ONORC), बीमा योजनाओं से जुड़ना और हेल्पलाइन 14434।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "प्रवासी मज़दूर पंजीकरण (ई-श्रम): दूसरे राज्य में काम करने वालों के लिए मुफ्त कार्ड, फायदे और अधिकार",
  lead: "दूसरे राज्य या ज़िले में काम करने वाले प्रवासी मज़दूरों के लिए अलग से कोई \"Migrant Worker ID\" नहीं बनता; केंद्र सरकार के श्रम एवं रोज़गार मंत्रालय के <strong>ई-श्रम पोर्टल</strong> पर पंजीकरण ही उनका राष्ट्रीय पहचान कार्ड है। 16 साल से ज़्यादा उम्र का असंगठित मज़दूर, जो आयकर नहीं भरता और EPFO/ESIC का सदस्य नहीं है, आधार और मोबाइल से <strong>मुफ्त</strong> पंजीकरण कर 12 अंकों का UAN पाता है। पोर्टल पर प्रवासी मज़दूर अपने परिवार की जानकारी भी दर्ज कर सकते हैं।",
  facts: [
    ["पोर्टल", "eshram.gov.in (श्रम एवं रोज़गार मंत्रालय)"],
    ["उम्र", "16 साल या ज़्यादा"],
    ["फीस", "मुफ्त"],
    ["हेल्पलाइन", "14434 / 1800-889-6811"],
  ],
  notice: "ई-श्रम कार्ड बनते ही अपने-आप ₹2 लाख का बीमा या कोई मासिक पैसा नहीं मिलता। बीमा (PMSBY/PMJJBY) के लिए अलग से नामांकन और सालाना प्रीमियम ज़रूरी है।",
  sections: [
    {
      id: "patrata",
      title: "कौन पंजीकरण करवा सकता है",
      list: [
        "उम्र 16 साल या ज़्यादा",
        "असंगठित क्षेत्र में काम: निर्माण, फैक्ट्री/ठेके पर दिहाड़ी, खेत मज़दूरी, घरेलू काम, रेहड़ी-पटरी, ढुलाई, गिग/प्लेटफॉर्म काम आदि",
        "आयकर नहीं भरता हो, और EPFO या ESIC का सदस्य न हो",
        "आधार नंबर और आधार से जुड़ा मोबाइल (या बायोमेट्रिक के लिए CSC)",
      ],
    },
    {
      id: "kaise",
      title: "पंजीकरण कैसे करें",
      steps: [
        '<a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a> पर "Register on eShram" चुनें।',
        "आधार से जुड़ा मोबाइल नंबर डालें, OTP से पुष्टि करें, फिर आधार eKYC करें।",
        "पता (स्थायी और अभी का), काम/पेशा, शिक्षा, कौशल और बैंक खाता भरें। प्रवासी हैं तो परिवार की जानकारी भी भरें।",
        "सबमिट करने पर 12 अंकों के UAN वाला ई-श्रम कार्ड डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: 'खुद न कर पाएं तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> या राज्य सेवा केंद्र पर मुफ्त करवाएं। पैसे मांगे जाएं तो 14434 पर शिकायत करें। काम या पता बदले तो पोर्टल पर \"Update\" से जानकारी बदलें।' },
    },
    {
      id: "labh",
      title: "प्रवासी मज़दूरों के काम की बातें",
      list: [
        "<strong>राशन (ONORC):</strong> वन नेशन वन राशन कार्ड ई-श्रम से जुड़ी योजनाओं में है। जिस राज्य में काम कर रहे हैं, वहां की राशन दुकान से अपने राशन कार्ड पर अनाज ले सकते हैं।",
        "<strong>बीमा:</strong> PMSBY (दुर्घटना में मृत्यु/स्थायी विकलांगता पर ₹2 लाख) और PMJJBY (₹2 लाख जीवन बीमा) में नामांकन; प्रीमियम बैंक खाते से कटता है।",
        "<strong>पेंशन:</strong> PM-SYM में 18-40 साल की उम्र में जुड़कर 60 साल के बाद ₹3,000 मासिक पेंशन (शर्तों के साथ)।",
        "<strong>निर्माण मज़दूर:</strong> ई-श्रम के अलावा राज्य के BOCW मंडल का लेबर कार्ड भी बनवाएं; उससे मंडल की योजनाएं मिलती हैं।",
      ],
    },
    {
      id: "adhikar",
      title: "कानूनी अधिकार",
      intro: "पहले के अंतर-राज्यीय प्रवासी कर्मकार अधिनियम, 1979 को अब व्यावसायिक सुरक्षा, स्वास्थ्य और कार्य दशा संहिता (OSH Code), 2020 में शामिल कर दिया गया है। पुराने कानून में ठेकेदार के ज़रिए दूसरे राज्य में ले जाए गए मज़दूरों को यात्रा भत्ता, विस्थापन भत्ता, रहने की जगह और इलाज जैसी सुविधाओं का हक था।",
      callout: { kind: "info", html: "मज़दूरी न मिले, ठेकेदार कागज़ रख ले या काम की जगह पर हादसा हो तो उस ज़िले के श्रम कार्यालय (Labour Office) में शिकायत करें। केंद्र सरकार के <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर भी शिकायत दर्ज कर सकते हैं।" },
    },
  ],
  official: [
    { href: "https://eshram.gov.in/", title: "ई-श्रम पोर्टल", note: "हेल्पलाइन 14434 / 1800-889-6811" },
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "क्या प्रवासी मज़दूरों का अलग पहचान पत्र बनता है?", a: "नहीं। प्रवासी मज़दूर ई-श्रम पोर्टल पर पंजीकरण करते हैं और 12 अंकों के UAN वाला ई-श्रम कार्ड ही उनका राष्ट्रीय कार्ड है। पोर्टल पर परिवार की जानकारी भी दर्ज होती है।" },
    { q: "पंजीकरण की फीस कितनी है?", a: "बिल्कुल मुफ्त, चाहे खुद करें या CSC/राज्य सेवा केंद्र पर।" },
    { q: "क्या ई-श्रम कार्ड से ₹2 लाख बीमा मिलता है?", a: "अपने-आप नहीं। PMSBY में नामांकन करना होता है और सालाना प्रीमियम बैंक खाते से कटता है; तब दुर्घटना में मृत्यु या स्थायी विकलांगता पर ₹2 लाख मिलते हैं।" },
    { q: "दूसरे राज्य में राशन कैसे लें?", a: "वन नेशन वन राशन कार्ड के तहत किसी भी राज्य की राशन दुकान पर आधार से अंगूठा लगाकर अपने राशन कार्ड का अनाज ले सकते हैं।" },
    { q: "ई-श्रम हेल्पलाइन नंबर क्या है?", a: "14434 या 1800-889-6811, सुबह 9 से शाम 6 बजे तक, रविवार सहित।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड", text: "पंजीकरण और डाउनलोड की पूरी गाइड" },
    { href: "/service/labour-card-construction-workers.html", emoji: "👷", title: "लेबर कार्ड (BOCW)", text: "निर्माण मज़दूरों के लिए" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👴", title: "PM श्रम योगी मानधन", text: "₹3,000 मासिक पेंशन योजना" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "ONORC और राशन" },
    { href: "/service/pm-suraksha-bima-yojana.html", emoji: "🛡️", title: "PM सुरक्षा बीमा", text: "₹2 लाख दुर्घटना बीमा" },
  ],
  aside: [
    { href: "https://eshram.gov.in/", label: "🪪 ई-श्रम पर पंजीकरण" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
