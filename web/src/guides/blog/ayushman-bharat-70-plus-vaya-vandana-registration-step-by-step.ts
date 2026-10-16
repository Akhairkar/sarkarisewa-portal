import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/ayushman-bharat-vayo-vandana.html, so this post is a how-to for one
// situation: a son/daughter registering an elderly parent from their phone,
// plus common problems. Facts reused from the verified guide
// web/src/guides/doc/ayushman-bharat-vayo-vandana.ts (sources there: PIB
// Cabinet release 11 Sep 2024 - all 70+ irrespective of income, ₹5 lakh/yr on
// family basis, separate top-up for 70+ members of existing PM-JAY families,
// CGHS/ECHS/CAPF must choose one, private insurance/ESIC eligible; PIB
// 17 Nov 2024 - card launched 29 Oct 2024; PIB 1 Jan 2026 - Ayushman App with
// face-auth/OTP/iris/fingerprint e-KYC; nha.gov.in helpline 14555).
// Age taken from Aadhaar, Aadhaar e-KYC mandatory: NHA FAQ as quoted on the
// old page and secondary explainers (checked 16 Oct 2026).

export const ayushmanBharat70PlusVayaVandanaRegistrationStepByStep: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "वय वंदना कार्ड रजिस्ट्रेशन" },
  ],
  docHi: "वय वंदना कार्ड",
  title: "आयुष्मान वय वंदना कार्ड: 70+ बुजुर्गों के लिए रजिस्ट्रेशन स्टेप बाय स्टेप",
  description: "70 वर्ष व उससे अधिक आयु के वरिष्ठ नागरिकों के लिए आयुष्मान वय वंदना कार्ड ऑनलाइन बनवाने की पूरी प्रक्रिया, ज़रूरी दस्तावेज़ और आम दिक्कतों के उपाय।",
  published: "2026-08-24",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "माता-पिता का आयुष्मान वय वंदना कार्ड घर बैठे कैसे बनवाएं: स्टेप बाय स्टेप",
  lead: "70 साल या उससे ज़्यादा उम्र के हर नागरिक का आयुष्मान वय वंदना कार्ड बन सकता है, आय चाहे जितनी हो; इससे PM-JAY अस्पतालों में साल में ₹5 लाख तक कैशलेस इलाज मिलता है। बेटा-बेटी अपने फोन पर Ayushman App से माता-पिता का कार्ड बना सकते हैं; बस बुजुर्ग का आधार और उनका चेहरा (फेस ऑथेंटिकेशन) या आधार से जुड़ा मोबाइल चाहिए। उम्र आधार में लिखी जन्म तिथि से मानी जाती है।",
  facts: [
    ["कौन पात्र", "70+ उम्र का हर नागरिक, कोई आय सीमा नहीं"],
    ["कवर", "₹5 लाख प्रति वर्ष तक (परिवार के आधार पर)"],
    ["ज़रूरी", "आधार + e-KYC (OTP या चेहरा)"],
    ["हेल्पलाइन", "14555"],
  ],
  sections: [
    {
      id: "pehle",
      title: "शुरू करने से पहले ये तैयार रखें",
      list: [
        "बुजुर्ग का <strong>आधार कार्ड</strong>। आधार में जन्म तिथि से उम्र 70 साल या ज़्यादा बननी चाहिए।",
        "आधार से जुड़ा मोबाइल पास हो तो OTP से काम आसान है; न हो तो <strong>फेस ऑथेंटिकेशन</strong> के लिए बुजुर्ग पास बैठें।",
        "आपका अपना मोबाइल नंबर (ऐप में लॉगिन के लिए)।",
        "CGHS, ECHS या CAPF योजना का कार्ड हो तो उसकी जानकारी, क्योंकि ऐसे में एक योजना चुननी होगी।",
      ],
    },
    {
      id: "steps",
      title: "Ayushman App से कार्ड बनाने के स्टेप",
      steps: [
        "Google Play Store से <strong>Ayushman App</strong> (राष्ट्रीय स्वास्थ्य प्राधिकरण का) डाउनलोड करें। कंप्यूटर पर <a href=\"https://beneficiary.nha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">beneficiary.nha.gov.in</a> खोल सकते हैं।",
        "<strong>Beneficiary</strong> के रूप में अपना मोबाइल नंबर और OTP डालकर लॉगिन करें।",
        "70+ / वय वंदना एनरोलमेंट का विकल्प चुनें, राज्य चुनें और बुजुर्ग का आधार नंबर डालें।",
        "आधार OTP या फेस ऑथेंटिकेशन से e-KYC करें। फेस स्कैन के समय रोशनी अच्छी रखें और चश्मा हटा दें।",
        "ताज़ा फोटो लें, मोबाइल नंबर और पता जांचें। CGHS/ECHS/CAPF से जुड़े हैं तो वह विकल्प चुनें।",
        "सबमिट करें। मंज़ूरी के बाद उसी ऐप में <strong>Download Card</strong> से कार्ड डाउनलोड करें और प्रिंट रख लें।",
      ],
      callout: { kind: "info", html: "घर में दूसरा 70+ सदस्य (जैसे मां) भी है तो उसी तरह उसका भी e-KYC करवाकर कार्ड बनवाएं। दोनों पर मिलाकर परिवार का ₹5 लाख सालाना कवर रहता है।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उपाय",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["आधार में उम्र 70 से कम दिख रही", "पात्रता आधार की जन्म तिथि से तय होती है। जन्म तिथि गलत है तो सबूत के साथ आधार केंद्र पर सुधार कराएं, फिर आवेदन करें।"],
          ["आधार OTP नहीं आ रहा", "OTP आधार से जुड़े मोबाइल पर जाता है। उसकी जगह ऐप में फेस ऑथेंटिकेशन चुनें, या अस्पताल/CSC पर फिंगरप्रिंट से e-KYC कराएं।"],
          ["फेस ऑथेंटिकेशन बार-बार फेल", "अच्छी रोशनी में दोबारा कोशिश करें। फिर भी न हो तो आधार लेकर नज़दीकी PM-JAY अस्पताल के आयुष्मान मित्र या CSC पर जाएं।"],
          ["परिवार पहले से आयुष्मान कार्ड में है", "फिर भी 70+ सदस्य का वय वंदना कार्ड बनवाएं। उन्हें अलग से ₹5 लाख सालाना तक का टॉप-अप मिलता है, जो 70 से कम उम्र वालों के साथ साझा नहीं होता।"],
          ["CGHS पेंशनभोगी हैं", "CGHS/ECHS/CAPF में से पुरानी योजना या PM-JAY में से एक चुनना होगा; दोनों साथ नहीं।"],
          ["आवेदन रुका/पेंडिंग है", "कुछ दिन बाद ऐप में स्टेटस देखें। लंबे समय तक पेंडिंग रहे तो 14555 पर फोन करें।"],
        ],
      },
    },
    {
      id: "offline",
      title: "फोन से नहीं हो पा रहा तो",
      intro: "बुजुर्ग का आधार लेकर नज़दीकी PM-JAY सूचीबद्ध अस्पताल के <strong>आयुष्मान मित्र</strong> या <a href=\"/tools/csc-locator.html\">CSC केंद्र</a> पर जाएं। वहां फिंगरप्रिंट या आइरिस से भी e-KYC हो जाता है। सरकार की ओर से कार्ड का कोई शुल्क नहीं है।",
      callout: { kind: "warn", html: "कार्ड बनवाने के नाम पर फोन पर OTP मांगने या पैसे मांगने वाले से सावधान रहें। शिकायत 14555 पर करें।" },
    },
  ],
  official: [
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान / वय वंदना कार्ड बनाएं और डाउनलोड करें" },
    { href: "https://nha.gov.in/PM-JAY", title: "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA): PM-JAY" },
    { href: "https://nha.gov.in/Contact-Us", title: "NHA संपर्क और हेल्पलाइन", note: "14555" },
  ],
  faq: [
    { q: "क्या बेटा या बेटी अपने फोन से माता-पिता का कार्ड बना सकते हैं?", a: "हां। Ayushman App में अपने मोबाइल से लॉगिन करके बुजुर्ग का आधार डालें और उनका e-KYC (OTP या फेस ऑथेंटिकेशन) करवाएं।" },
    { q: "आय प्रमाण पत्र या राशन कार्ड चाहिए?", a: "नहीं। 70+ के लिए कोई आय सीमा नहीं है; आधार और e-KYC ही ज़रूरी है।" },
    { q: "क्या कार्ड बनवाने में पैसे लगते हैं?", a: "योजना में कोई सरकारी शुल्क नहीं है। ऐप या पोर्टल से खुद बना सकते हैं।" },
    { q: "कार्ड बनते ही इलाज मिलेगा?", a: "कार्ड बनने के बाद PM-JAY से जुड़े अस्पताल में भर्ती होकर इलाज कैशलेस मिलता है। सामान्य OPD आम तौर पर कवर नहीं होती।" },
    { q: "शिकायत कहां करें?", a: "टोल-फ्री हेल्पलाइन 14555 पर। बुजुर्गों की मदद के लिए Elderline 14567 भी है।" },
  ],
  related: [
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना: पूरी गाइड", text: "कवर, पात्रता, इलाज कैसे लें" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत (PM-JAY)", text: "परिवार के लिए ₹5 लाख का इलाज" },
    { href: "/service/senior-citizen-card.html", emoji: "🪪", title: "सीनियर सिटीजन कार्ड", text: "राज्यवार बुजुर्ग पहचान पत्र" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP से e-KYC के लिए" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "कार्ड बनवाने में मदद" },
  ],
  aside: [
    { href: "https://beneficiary.nha.gov.in/", label: "🏥 वय वंदना कार्ड बनाएं" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
