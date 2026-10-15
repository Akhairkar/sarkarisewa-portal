import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slug "pm-kisan":
// Department of Agriculture & Farmers Welfare; from 24 Feb 2019; ₹6,000/year in
// 3 equal instalments of ₹2,000 every four months by DBT to landholding farmer
// families; exclusion list incl. pensioners with ₹10,000+/month and last-year
// income tax payers; registration on pmkisan.gov.in "New Farmer Registration"
// with Aadhaar OTP or via CSC; Know Your Status page; references revised
// operational guidelines and eKYC note); pmkisan.gov.in (search extract: eKYC
// mandatory for registered farmers, OTP eKYC on portal/app, biometric at CSC);
// helpline 155261 / 011-24300606, toll-free 1800-115-526, pmkisan-ict@gov.in
// (vikaspedia/Business Standard citing the portal). Instalment dates and the
// AgriStack Farmer ID rollout were only found in news/aggregator sites, so no
// dates are given; Farmer ID is described generally.
export const pmKisan: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम किसान सम्मान निधि" },
  ],
  docHi: "पीएम किसान सम्मान निधि",
  title: "पीएम किसान सम्मान निधि 2026",
  description: "पात्र किसान परिवारों को सालाना ₹6,000 की आय सहायता। पीएम किसान सम्मान निधि के लिए आधिकारिक लिंक, ज़रूरी दस्तावेज़, पात्रता, e-KYC और आवेदन प्रक्रिया की पूरी जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम किसान सम्मान निधि (PM-KISAN) 2026: ₹6,000 सालाना, पात्रता, पंजीकरण, e-KYC और स्टेटस",
  lead: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) में केंद्र सरकार ज़मीन वाले किसान परिवारों को हर साल ₹6,000 देती है। यह पैसा ₹2,000 की तीन बराबर किस्तों में, हर चार महीने पर, सीधे आधार से जुड़े बैंक खाते में आता है। पंजीकरण pmkisan.gov.in पर या नज़दीकी CSC से होता है, और किस्त पाने के लिए e-KYC ज़रूरी है।",
  facts: [
    ["सालाना राशि", "₹6,000 (₹2,000 की 3 किस्तें)"],
    ["कौन पात्र", "जिन किसान परिवारों के नाम खेती की ज़मीन है"],
    ["e-KYC", "ज़रूरी (OTP से ऑनलाइन या CSC पर बायोमेट्रिक)"],
    ["हेल्पलाइन", "155261 / 011-24300606"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      intro: "PM-KISAN कृषि एवं किसान कल्याण मंत्रालय की केंद्रीय योजना है, जो 24 फरवरी 2019 को शुरू हुई। पूरा पैसा केंद्र सरकार देती है। परिवार का मतलब है पति, पत्नी और नाबालिग बच्चे।",
      list: [
        "<strong>₹6,000 सालाना</strong>, तीन किस्तों में: अप्रैल-जुलाई, अगस्त-नवंबर और दिसंबर-मार्च की अवधि में एक-एक किस्त।",
        "<strong>DBT:</strong> पैसा सीधे किसान के आधार से जुड़े (seeded) बैंक खाते में आता है।",
        "किस्त जारी होने की तारीख सरकार हर बार अलग से घोषित करती है।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है और कौन नहीं",
      intro: "जिन किसान परिवारों के नाम पर खेती योग्य ज़मीन दर्ज है, वे पात्र हैं। ज़मीन का रिकॉर्ड राज्य सरकार सत्यापित करती है।",
      list: [
        "संस्थागत भूमिधारक (जैसे ट्रस्ट, संस्था)।",
        "परिवार का कोई सदस्य संवैधानिक पद पर हो या रहा हो; वर्तमान/पूर्व मंत्री, सांसद, विधायक, विधान परिषद सदस्य, नगर निगम महापौर, ज़िला पंचायत अध्यक्ष।",
        "केंद्र/राज्य सरकार, PSU या स्थानीय निकाय के सेवारत या सेवानिवृत्त अधिकारी/कर्मचारी (मल्टी टास्किंग स्टाफ/चतुर्थ श्रेणी/ग्रुप D को छोड़कर)।",
        "₹10,000 या उससे ज़्यादा मासिक पेंशन पाने वाले सेवानिवृत्त (MTS/चतुर्थ श्रेणी/ग्रुप D को छोड़कर)।",
        "पिछले आकलन वर्ष में आयकर भरने वाले।",
        "पेशेवर निकायों में पंजीकृत और प्रैक्टिस करने वाले डॉक्टर, इंजीनियर, वकील, CA, आर्किटेक्ट।",
      ],
      callout: { kind: "warn", html: "ऊपर की सूची वाले लोग <strong>पात्र नहीं</strong> हैं। गलत तरीके से लिया गया पैसा सरकार वापस वसूल सकती है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>आधार कार्ड</strong> और आधार से जुड़ा मोबाइल नंबर",
        "<strong>ज़मीन के कागज़:</strong> खसरा/खतौनी, सर्वे नंबर, रकबा",
        "<strong>बैंक खाता</strong> (पासबुक); खाता आधार से जुड़ा (seeded) हो",
        "कई राज्यों में किसान की डिजिटल पहचान <strong>Farmer ID (AgriStack)</strong> भी मांगी जा रही है; अपने राज्य के कृषि विभाग या CSC से पूछें",
      ],
    },
    {
      id: "panjikaran",
      title: "नया पंजीकरण कैसे करें",
      steps: [
        '<a href="https://pmkisan.gov.in/" target="_blank" rel="noopener nofollow">pmkisan.gov.in</a> खोलें और <strong>"New Farmer Registration"</strong> चुनें।',
        "आधार नंबर और मोबाइल नंबर डालें; OTP से आधार सत्यापन करें।",
        "राज्य, ज़िला, गांव, बैंक विवरण और ज़मीन का विवरण भरें; ज़मीन, आधार और पासबुक के कागज़ अपलोड करें।",
        "सबमिट करें। आवेदन राज्य सरकार के अधिकारी ज़मीन के रिकॉर्ड से जांचते हैं; मंज़ूरी के बाद किस्त आती है।",
      ],
      callout: { kind: "ok", html: 'ऑनलाइन न कर पाएं तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> पर VLE से पंजीकरण करवाएं, या पटवारी/कृषि विभाग के नोडल अधिकारी से संपर्क करें।' },
    },
    {
      id: "ekyc",
      title: "e-KYC और स्टेटस",
      list: [
        "<strong>e-KYC ज़रूरी है:</strong> बिना e-KYC के अगली किस्तें रुक सकती हैं।",
        "<strong>OTP से:</strong> pmkisan.gov.in पोर्टल या PM-KISAN मोबाइल ऐप पर आधार OTP से।",
        "<strong>बायोमेट्रिक से:</strong> नज़दीकी CSC पर अंगूठा लगाकर।",
        "<strong>स्टेटस:</strong> पोर्टल पर \"Know Your Status\" में पंजीकरण संख्या या मोबाइल/आधार से किस्त की स्थिति देखें।",
      ],
    },
    {
      id: "kist-nahi",
      title: "किस्त नहीं आई तो क्या करें",
      steps: [
        "स्टेटस में देखें कि e-KYC, ज़मीन सत्यापन (land seeding) और आधार-बैंक लिंकिंग पूरी है या नहीं।",
        "बैंक खाता बंद/गलत हो या आधार से जुड़ा न हो तो बैंक जाकर ठीक कराएं।",
        "नाम या ज़मीन की गलती के लिए पटवारी/तहसील या ब्लॉक कृषि अधिकारी से मिलें।",
        "<strong>हेल्पलाइन:</strong> 155261 या 011-24300606; टोल-फ्री 1800-115-526; ईमेल pmkisan-ict@gov.in। पोर्टल पर भी शिकायत (Help Desk) दर्ज होती है।",
      ],
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल: पंजीकरण, e-KYC, स्टेटस", note: "हेल्पलाइन 155261 / 011-24300606" },
    { href: "https://www.myscheme.gov.in/schemes/pm-kisan", title: "myScheme: PM-KISAN" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  faq: [
    { q: "PM-KISAN में कितना पैसा मिलता है?", a: "हर पात्र किसान परिवार को साल में ₹6,000, जो ₹2,000 की तीन किस्तों में हर चार महीने पर बैंक खाते में आता है।" },
    { q: "क्या e-KYC करना ज़रूरी है?", a: "हां। पंजीकृत किसानों के लिए e-KYC अनिवार्य है। यह पोर्टल/ऐप पर आधार OTP से या CSC पर बायोमेट्रिक से हो सकता है।" },
    { q: "किराये पर खेती करने वाले (बटाईदार) किसान को पैसा मिलेगा?", a: "योजना उन किसान परिवारों के लिए है जिनके नाम पर ज़मीन दर्ज है। जिसके नाम ज़मीन नहीं है, वह इस योजना में पात्र नहीं माना जाता।" },
    { q: "अगली किस्त कब आएगी?", a: "किस्तें चार-चार महीने की अवधि में आती हैं, पर सही तारीख सरकार हर बार घोषित करती है। पोर्टल पर \"Know Your Status\" में अपनी किस्त की स्थिति देखें।" },
    { q: "क्या पेंशन पाने वाले किसान पात्र हैं?", a: "₹10,000 या उससे ज़्यादा मासिक पेंशन वाले सेवानिवृत्त कर्मचारी पात्र नहीं हैं (MTS/चतुर्थ श्रेणी/ग्रुप D को छोड़कर)।" },
    { q: "PM-KISAN हेल्पलाइन नंबर क्या है?", a: "155261 या 011-24300606, टोल-फ्री 1800-115-526। ईमेल: pmkisan-ict@gov.in।" },
  ],
  related: [
    { href: "/service/pm-kisan-maan-dhan-yojana.html", emoji: "🧓", title: "पीएम किसान मानधन", text: "किसानों को ₹3,000 मासिक पेंशन" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "खेती के लिए सस्ता कर्ज़" },
    { href: "/service/pm-fasal-bima-yojana.html", emoji: "🌧️", title: "पीएम फसल बीमा योजना", text: "फसल नुकसान पर बीमा" },
    { href: "/service/pm-kusam-solar-pump-apply.html", emoji: "☀️", title: "पीएम कुसुम सोलर पंप", text: "सोलर पंप पर सब्सिडी" },
    { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "आधार अपडेट और मोबाइल लिंक" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "पंजीकरण और e-KYC" },
  ],
  aside: [
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
