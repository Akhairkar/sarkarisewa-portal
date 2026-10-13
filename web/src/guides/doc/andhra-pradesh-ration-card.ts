import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/AP: Department of Consumer Affairs, Food and Civil
//   Supplies; website civilsupplies.ap.gov.in; RCMS epds2.ap.gov.in; AePDS
//   epos.ap.gov.in; helpdesk 1967, 1800-425-2977; schemes AAY and PHH;
//   29,791 FPS; NFSA cards 89,24,640 (AAY 9,08,000, PHH 80,16,640);
//   district-wise RC report epds1.ap.gov.in.
// - The Week / PTI, 11 May 2025 and ap7am.com (Minister Nadendla Manohar):
//   new rice card applications and related services (new card, split of card,
//   change of address, addition and deletion of members, surrender) through
//   village and ward secretariats from 8 May 2025, and through WhatsApp
//   governance (send "Hello" to 95523 00009) from 15 May 2025; smart
//   cards free of cost; eKYC about 95% done; 1,46,21,223 rice cards covering
//   about 4,24,59,028 people.
// - Siasat and Deccan Chronicle (2025): smart (QR-coded) rice cards for about
//   1.46 crore families, statewide distribution from 25 Aug 2025 through
//   ration shops and secretariats; New Indian Express (Sep 2025): smart card
//   corrections via Mana Mitra (WhatsApp).
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: state eligibility limits (income, land, electricity use etc.),
// the extra rice the state gives beyond NFSA, fees, time limits. AP
// government sites (civilsupplies.ap.gov.in, epds2) did not open from here.
export const andhraPradeshRationCard: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Andhra Pradesh Ration Card 2026: Apply & Status",
  description: "आंध्र प्रदेश राशन (राइस) कार्ड 2026: ग्राम/वार्ड सचिवालय या WhatsApp 95523 00009 से नया कार्ड, सदस्य जोड़ना-हटाना, कार्ड बंटवारा, QR वाला स्मार्ट राइस कार्ड, e-KYC और हेल्पलाइन 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "आंध्र प्रदेश राइस कार्ड 2026: नया कार्ड, सदस्य जोड़ना, स्मार्ट कार्ड और e-KYC",
  lead: "आंध्र प्रदेश में राशन कार्ड को \"राइस कार्ड\" कहा जाता है और इसे उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग देखता है। नए राइस कार्ड, सदस्य जोड़ने-हटाने और कार्ड के बंटवारे का आवेदन गांव/वार्ड सचिवालय में होता है; मई 2025 से यही सेवाएं WhatsApp नंबर 95523 00009 (मन मित्र) से भी मिलती हैं। 2025 में सभी परिवारों को QR कोड वाले नए स्मार्ट राइस कार्ड मुफ्त दिए गए।",
  facts: [
    ["राइस कार्ड", "1.46 करोड़ (2025)"],
    ["NFSA कार्ड", "89.25 लाख (AAY + PHH)"],
    ["आवेदन", "ग्राम/वार्ड सचिवालय, WhatsApp 95523 00009"],
    ["हेल्पलाइन", "1967, 1800-425-2977"],
  ],
  notice: "<strong>ध्यान दें:</strong> नया स्मार्ट राइस कार्ड आधार और e-KYC से जुड़ा है। जिस सदस्य का e-KYC पूरा नहीं, उसका राशन रुक सकता है; राशन दुकान की PoS मशीन पर या सचिवालय में e-KYC कराएं।",
  sections: [
    {
      id: "prakar",
      title: "आंध्र प्रदेश में राइस कार्ड और NFSA",
      intro: "खाद्य मंत्री के अनुसार (2025) राज्य में <strong>1,46,21,223 राइस कार्ड</strong> हैं, जिनसे करीब <strong>4.24 करोड़ लोग</strong> जुड़े हैं। इनमें NFSA पोर्टल के अनुसार 89,24,640 कार्ड NFSA के हैं; बाकी परिवारों को राज्य सरकार अपने खर्च पर राशन देती है। राज्य में <strong>29,791 राशन दुकानें</strong> हैं।",
      table: {
        head: ["श्रेणी", "NFSA कार्ड", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "9,08,000", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "80,16,640", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का NFSA अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है। राज्य के अपने राइस कार्ड पर कितना चावल और दूसरी वस्तुएं किस दाम पर मिलती हैं, यह राशन दुकान या सचिवालय से पक्का करें।" },
    },
    {
      id: "smart",
      title: "नया स्मार्ट राइस कार्ड (QR कोड वाला)",
      list: [
        "राज्य सरकार ने पुराने कार्ड की जगह <strong>QR कोड वाले स्मार्ट राइस कार्ड</strong> दिए हैं, जिनमें परिवार के सभी सदस्यों की जानकारी है।",
        "खबरों के अनुसार इनका वितरण <strong>25 अगस्त 2025</strong> से पूरे राज्य में राशन दुकानों और सचिवालयों से शुरू हुआ; कार्ड <strong>मुफ्त</strong> है।",
        "स्मार्ट कार्ड में नाम या दूसरी गलती हो तो सुधार का अनुरोध <strong>मन मित्र (WhatsApp 95523 00009)</strong> या ग्राम/वार्ड सचिवालय से करें।",
        "कार्ड नहीं मिला हो तो अपने ग्राम/वार्ड सचिवालय या राशन दुकान पर पूछें।",
      ],
    },
    {
      id: "avedan",
      title: "नया राइस कार्ड: आवेदन कैसे करें",
      intro: "मंत्री की घोषणा के अनुसार 8 मई 2025 से ये सेवाएं गांव/वार्ड सचिवालय में और 15 मई 2025 से WhatsApp से मिल रही हैं:",
      steps: [
        "परिवार के सभी सदस्यों का <strong>आधार</strong> और चालू मोबाइल नंबर तैयार रखें; हर सदस्य का e-KYC पूरा हो।",
        "<strong>अपने गांव या वार्ड सचिवालय</strong> जाएं, या WhatsApp पर <strong>95523 00009</strong> पर \"Hello\" भेजकर मन मित्र में \"राइस कार्ड\" सेवा चुनें।",
        "नया राइस कार्ड की सेवा चुनें, सदस्यों की जानकारी दें और <strong>आवेदन नंबर</strong> संभालें।",
        "सचिवालय के स्तर पर जांच के बाद आवेदन मंज़ूर होता है और कार्ड राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "warn", html: "राज्य की पात्रता शर्तें (आय, ज़मीन, सरकारी नौकरी आदि) सचिवालय में पूछें। किसी एजेंट को पैसे न दें; सरकार के अनुसार स्मार्ट कार्ड मुफ्त है।" },
    },
    {
      id: "sadasya",
      title: "सदस्य जोड़ना, हटाना, बंटवारा और सरेंडर",
      intro: "सचिवालय और WhatsApp (मन मित्र) पर ये सेवाएं घोषित की गई हैं:",
      list: [
        "<strong>नया सदस्य जोड़ना</strong> (जैसे बच्चा या शादी के बाद आई बहू; उसका आधार ज़रूरी)",
        "<strong>सदस्य हटाना</strong> (मृत्यु या परिवार छोड़ने पर)",
        "<strong>कार्ड का बंटवारा</strong> (परिवार अलग होने पर नया कार्ड)",
        "<strong>पता बदलना</strong>",
        "<strong>कार्ड सरेंडर करना</strong>",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, पोर्टेबिलिटी और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार के बायोमेट्रिक से हर सदस्य की पहचान मिलाई जाती है; राशन दुकान की PoS मशीन पर होता है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड (AAY/PHH) से दूसरे राज्य की e-PoS दुकान से भी NFSA का हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["स्मार्ट कार्ड में नाम/जानकारी गलत", "मन मित्र (WhatsApp 95523 00009) या सचिवालय से सुधार"],
          ["PoS पर अंगूठा मेल नहीं खा रहा (एरर 300)", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["आधार रद्द / निलंबित / गलत (996 / 997 / 998)", "आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["राशन कम मिला या दुकान ने मना किया", "1967 या 1800-425-2977 पर शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: टोल-फ्री नंबर (NFSA पोर्टल पर आंध्र प्रदेश के लिए दिया गया)",
        "<strong>1800-425-2977</strong>: NFSA पोर्टल पर आंध्र प्रदेश का हेल्पडेस्क",
        "<strong>WhatsApp 95523 00009</strong>: मन मित्र (राज्य सरकार की WhatsApp सेवा)",
      ],
    },
  ],
  official: [
    { href: "https://civilsupplies.ap.gov.in/", title: "उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग, आंध्र प्रदेश" },
    { href: "https://epds2.ap.gov.in/", title: "ePDS आंध्र प्रदेश (राशन कार्ड प्रबंधन प्रणाली)" },
    { href: "https://nfsa.gov.in/State/AP", title: "NFSA पोर्टल: आंध्र प्रदेश का पेज (योजनाएं, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में नया राशन (राइस) कार्ड कैसे बनवाएं?", a: "अपने गांव या वार्ड सचिवालय में आवेदन करें, या WhatsApp 95523 00009 पर \"Hello\" भेजकर मन मित्र में राइस कार्ड सेवा चुनें। सभी सदस्यों का आधार और e-KYC ज़रूरी है।" },
    { q: "राइस कार्ड में नया सदस्य कैसे जोड़ें?", a: "सचिवालय या मन मित्र (WhatsApp) पर सदस्य जोड़ने की सेवा चुनें और नए सदस्य का आधार दें। यहीं से सदस्य हटाना, कार्ड बंटवारा, पता बदलना और सरेंडर भी होता है।" },
    { q: "नया स्मार्ट राइस कार्ड कहां मिलेगा?", a: "QR कोड वाले स्मार्ट कार्ड 2025 में राशन दुकानों और सचिवालयों से मुफ्त बांटे गए। आपको नहीं मिला तो सचिवालय या राशन दुकान पर पूछें।" },
    { q: "आंध्र प्रदेश राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1967 और 1800-425-2977। WhatsApp सेवा मन मित्र: 95523 00009।" },
    { q: "क्या आंध्र प्रदेश का राशन कार्ड दूसरे राज्य में चलेगा?", a: "NFSA (AAY/PHH) कार्ड पर One Nation One Ration Card के तहत दूसरे राज्य की e-PoS दुकान से NFSA का हिस्सा मिल सकता है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/andhra-pradesh-income-certificate.html", emoji: "💰", title: "आंध्र प्रदेश आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/andhra-pradesh-labour-card.html", emoji: "👷", title: "आंध्र प्रदेश लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/telangana-ration-card.html", emoji: "📋", title: "तेलंगाना राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://wa.me/919552300009", label: "💬 मन मित्र WhatsApp 95523 00009" },
    { href: "https://nfsa.gov.in/State/AP", label: "📊 NFSA: आंध्र प्रदेश का पेज" },
  ],
};
