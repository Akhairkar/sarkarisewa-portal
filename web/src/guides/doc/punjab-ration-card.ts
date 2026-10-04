import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026):
// - nfsa.gov.in/State/PB (Dept. of Food & Public Distribution, GoI): Punjab
//   schemes AAY and PHH (NFSA); online apply link
//   ercms.punjab.gov.in/PublicLogin/frmPublicLogin.aspx; ERCMS, FEAST and AePDS
//   portals; grievance via connect.punjab.gov.in; helpdesk 180030061313, 1967,
//   14445; department contacts.
// - epos.punjab.gov.in (AePDS Punjab, Food, Civil Supplies & Consumer Affairs
//   Dept.): Key Register for July 2026 (16,551 FPS; 39,73,815 cards = AAY
//   1,75,958 + PHH 37,97,857; 1,36,11,357 units), scheme-wise allotment in
//   wheat, "Beneficiary Details" by RC number, month and year, RC Drawl Status,
//   ONORC report, FAQ (eKYC, UIDAI error codes 300/996/997/998, ration only at
//   the tagged FPS on the PoS device).
// - nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA and Salient_Features:
//   35 kg per AAY household and 5 kg per PHH person per month; States set the
//   PHH criteria; eldest woman (18+) is head of family on the card.
// - Free grain 1.1.2024 to 31.12.2028: GoI notification of 04.12.2023 (as in
//   our Maharashtra guide).
// - nfsa.gov.in: Mera Ration app (One Nation One Ration Card).
// Note: ercms.punjab.gov.in showed a maintenance page on 4 Oct 2026.
// Left out (not confirmable on an official page we could open): Punjab's PHH
// inclusion criteria, an official document list, fees and time limits.
export const punjabRationCard: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Punjab Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "पंजाब राशन कार्ड (स्मार्ट राशन कार्ड) 2026: AAY और PHH कार्ड, ERCMS पोर्टल पर ऑनलाइन आवेदन, epos.punjab.gov.in पर RC नंबर से राशन की जानकारी, e-KYC, Mera Ration ऐप और हेल्पलाइन 1967 / 1800-3006-1313।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "पंजाब राशन कार्ड 2026: नया कार्ड, ऑनलाइन आवेदन, राशन स्टेटस और e-KYC",
  lead: "पंजाब में राशन कार्ड खाद्य, सिविल सप्लाई एवं उपभोक्ता मामले विभाग बनाता है। राष्ट्रीय खाद्य सुरक्षा कानून (NFSA) के तहत यहां दो तरह के कार्ड हैं: अंत्योदय (AAY) और प्राथमिकता वाले परिवार (PHH)। नए कार्ड का ऑनलाइन आवेदन विभाग के ERCMS पोर्टल पर होता है, और राशन किस महीने कितना मिला, यह epos.punjab.gov.in पर RC नंबर डालकर देखा जा सकता है।",
  facts: [
    ["राज्य में कार्ड", "39.74 लाख (जुलाई 2026)"],
    ["लाभार्थी", "1.36 करोड़ सदस्य"],
    ["अनाज", "AAY: 35 किलो/कार्ड, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1967, 1800-3006-1313, 14445"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "पंजाब में राशन कार्ड के प्रकार और कितना अनाज",
      intro: "पंजाब के AePDS पोर्टल के जुलाई 2026 के Key Register के अनुसार राज्य में <strong>39,73,815 राशन कार्ड</strong> और <strong>1,36,11,357 सदस्य</strong> हैं, जिन्हें <strong>16,551 राशन डिपो (Fair Price Shops)</strong> से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड (जुलाई 2026)", "सदस्य", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "1,75,958", "7,78,781", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "37,97,857", "1,28,32,576", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "पंजाब में NFSA का अनाज <strong>गेहूं</strong> के रूप में बांटा जाता है। केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। आम बोलचाल में इन्हें \"स्मार्ट राशन कार्ड\" भी कहते हैं।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong> होता है; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार राशन कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) को परिवार का मुखिया माना जाता है।",
      ],
      callout: { kind: "warn", html: "पंजाब में PHH की पात्रता की शर्तें (आय, ज़मीन, वाहन आदि) राज्य सरकार तय करती है और बदलती रहती हैं। आवेदन से पहले ERCMS के आवेदन पेज पर लिखी शर्तें पढ़ें या अपने ज़िला खाद्य एवं सिविल सप्लाई कंट्रोलर (DFSC) दफ्तर से पूछें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "आवेदन फॉर्म में परिवार के हर सदस्य की जानकारी भरनी होती है। ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या दफ्तर मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार कार्ड</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "पंजाब के <strong>पते का प्रमाण</strong> (जैसे वोटर कार्ड, बिजली बिल, किरायानामा)",
        "<strong>परिवार की आय</strong> से जुड़ी जानकारी/स्व-घोषणा",
        "मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम कटवाने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन (ERCMS)",
      steps: [
        'केंद्र सरकार के NFSA पोर्टल पर पंजाब के लिए दिया गया लिंक खोलें: <a href="https://ercms.punjab.gov.in/PublicLogin/frmPublicLogin.aspx" target="_blank" rel="noopener nofollow">ercms.punjab.gov.in (Public Login)</a> ("Don\'t have Ration Card in Punjab? Apply here online")।',
        "पब्लिक लॉगिन करें (पोर्टल जो जानकारी मांगे, जैसे मोबाइल नंबर) और नए राशन कार्ड का फॉर्म खोलें।",
        "मुखिया और परिवार के हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; पता और आय की जानकारी दें।",
        "मांगे गए कागज़ अपलोड करके फॉर्म जमा करें और <strong>आवेदन नंबर</strong> नोट कर लें।",
        "विभाग जांच के बाद कार्ड मंज़ूर करता है और उसे नज़दीकी राशन डिपो से जोड़ता है। राशन उसी डिपो की PoS मशीन पर आधार से मिलता है।",
      ],
      callout: { kind: "info", html: "4 अक्टूबर 2026 को ERCMS पोर्टल पर रखरखाव (maintenance) का पेज दिख रहा था। पोर्टल न खुले तो कुछ समय बाद कोशिश करें या अपने ज़िले के DFSC/खाद्य निरीक्षक दफ्तर में पूछें कि नए आवेदन इस समय कहां लिए जा रहे हैं।" },
    },
    {
      id: "status",
      title: "राशन मिला या नहीं: RC नंबर से जांच",
      steps: [
        '<a href="https://epos.punjab.gov.in/SRC_Trans_Int.jsp" target="_blank" rel="noopener nofollow">epos.punjab.gov.in</a> खोलें और मेन्यू में <strong>"Beneficiary Details"</strong> चुनें।',
        "<strong>RC Number</strong> (राशन कार्ड नंबर), महीना और साल चुनें और सबमिट करें।",
        "उस महीने में आपके कार्ड पर कब, किस डिपो से और कितना राशन निकला, यह दिखेगा।",
      ],
      html: "<p>इसी पोर्टल पर <strong>\"RC Drawl Status\"</strong> (ज़िला और इंस्पेक्टर के हिसाब से), <strong>\"FPS Status\"</strong> (डिपो चालू है या नहीं) और <strong>\"Portability Details\"</strong> जैसी रिपोर्ट भी हैं।</p>",
    },
    {
      id: "ekyc",
      title: "e-KYC, पोर्टेबिलिटी और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन डिपो की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>किसी भी डिपो से राशन (One Nation One Ration Card):</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS डिपो से अपना हिस्सा ले सकते हैं।",
        '<strong>Mera Ration ऐप</strong> (केंद्र सरकार): अपना हक, नज़दीकी डिपो और लेन-देन देखने के लिए; लिंक <a href="https://nfsa.gov.in/" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> पर है।',
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें, एरर कोड और हल",
      table: {
        head: ["दिक्कत / एरर", "मतलब और हल"],
        rows: [
          ["एरर 300", "बायोमेट्रिक मेल नहीं खाया: उंगली साफ करके दोबारा या दूसरी उंगली लगाएं; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट कराएं"],
          ["एरर 996 / 997", "आधार रद्द / निलंबित: नज़दीकी आधार केंद्र में संपर्क करें"],
          ["एरर 998", "आधार नंबर गलत या आधार डेटा उपलब्ध नहीं: राशन कार्ड में दर्ज आधार नंबर जांचें और DFSC दफ्तर में सुधार कराएं"],
          ["\"Device is not Mapped with this Shop\"", "हर डिपो की मशीन उसी डिपो से जुड़ी होती है; डीलर को सही मशीन से लेन-देन करना होगा"],
          ["राशन कम मिला या डिपो ने मना किया", "epos पोर्टल पर RC नंबर से लेन-देन देखें और हेल्पलाइन 1967 / 1800-3006-1313 या connect.punjab.gov.in पर शिकायत करें"],
          ["किसी सदस्य का नाम जोड़ना/हटाना", "ज़िला DFSC/खाद्य निरीक्षक दफ्तर से तरीका पूछें (ERCMS पर विकल्प हो तो वहीं आवेदन करें); जन्म/विवाह/मृत्यु का प्रमाण और नए सदस्य का आधार साथ रखें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong> और <strong>14445</strong>: राशन/PDS हेल्पलाइन",
        "<strong>1800-3006-1313</strong>: पंजाब खाद्य विभाग का टोल-फ्री हेल्पडेस्क",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://connect.punjab.gov.in/" target="_blank" rel="noopener nofollow">connect.punjab.gov.in</a> (पंजाब सरकार का शिकायत पोर्टल, जिसे NFSA पोर्टल PDS शिकायत के लिए बताता है)',
      ],
    },
  ],
  official: [
    { href: "https://ercms.punjab.gov.in/PublicLogin/frmPublicLogin.aspx", title: "ERCMS पंजाब: नए राशन कार्ड का ऑनलाइन आवेदन" },
    { href: "https://epos.punjab.gov.in/", title: "AePDS पंजाब: RC नंबर से राशन की जानकारी, डिपो रिपोर्ट" },
    { href: "https://nfsa.gov.in/State/PB", title: "NFSA पोर्टल: पंजाब का पेज (योजनाएं, लिंक, हेल्पलाइन)" },
    { href: "https://connect.punjab.gov.in/", title: "Connect पंजाब: शिकायत पोर्टल" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पंजाब में नया राशन कार्ड कैसे बनवाएं?", a: "NFSA पोर्टल पर पंजाब के लिए दिए लिंक ercms.punjab.gov.in (Public Login) पर ऑनलाइन आवेदन करें, परिवार के सभी सदस्यों का आधार और जानकारी भरें और आवेदन नंबर संभालें। पोर्टल न खुले तो ज़िला DFSC दफ्तर से पूछें।" },
    { q: "पंजाब में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। पंजाब में यह गेहूं के रूप में मिलता है और 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "पंजाब राशन कार्ड का स्टेटस या राशन कैसे चेक करें?", a: "epos.punjab.gov.in पर \"Beneficiary Details\" में अपना RC नंबर, महीना और साल डालें। उस महीने में कार्ड पर निकला राशन दिख जाएगा।" },
    { q: "पंजाब राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार पंजाब के लिए हेल्पडेस्क नंबर 1800-3006-1313, 1967 और 14445 हैं। ऑनलाइन शिकायत connect.punjab.gov.in पर कर सकते हैं।" },
    { q: "पंजाब में कितने राशन कार्ड हैं?", a: "AePDS पंजाब के जुलाई 2026 के Key Register के अनुसार 39,73,815 कार्ड (AAY 1,75,958 और PHH 37,97,857) और 1,36,11,357 सदस्य, 16,551 राशन डिपो से जुड़े हैं।" },
    { q: "क्या पंजाब का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश के किसी भी e-PoS डिपो पर आधार से अपना राशन ले सकते हैं। Mera Ration ऐप से नज़दीकी डिपो देख सकते हैं।" },
    { q: "PoS मशीन पर एरर 300 आए तो क्या करें?", a: "इसका मतलब बायोमेट्रिक मेल नहीं खाया। उंगली साफ करके या दूसरी उंगली से दोबारा कोशिश करें; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट कराएं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/punjab-domicile-certificate.html", emoji: "🏠", title: "पंजाब निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/punjab-income-certificate.html", emoji: "💰", title: "पंजाब आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/punjab-labour-card.html", emoji: "👷", title: "पंजाब लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/maharashtra-ration-card.html", emoji: "📋", title: "महाराष्ट्र राशन कार्ड", text: "दूसरे राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ercms.punjab.gov.in/PublicLogin/frmPublicLogin.aspx", label: "📝 ऑनलाइन आवेदन (ERCMS)" },
    { href: "https://epos.punjab.gov.in/SRC_Trans_Int.jsp", label: "🔎 RC नंबर से राशन देखें" },
  ],
};
