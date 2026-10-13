import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - epos.kerala.gov.in (AePDS Kerala, Food, Civil Supplies and Consumer
//   Affairs Dept.): "PDS Transactions - October 2026": total cards 95,99,411,
//   total shops 13,925; helpline 1800-425-1550, toll free 1967; Commissionerate
//   of Civil Supplies, Public Office Complex, Museum PO, Trivandrum; reports
//   "Beneficiary Details" (SRC_Trans_Int.jsp), eKYC abstract, ONORC eKYC;
//   FAQ (UIDAI error codes, eKYC, ration only at the tagged FPS).
// - nfsa.gov.in/State/KL: schemes AAY and PHH; AAY 5,94,430 and PHH 37,73,579
//   cards (43,68,009 NFSA cards); 13,884 FPS; department website
//   civilsupplieskerala.gov.in; grievance pg.civilsupplieskerala.gov.in;
//   helpdesk 1967 and 1800-425-1550.
// - Onmanorama, 2 Jun 2025 and 4 Nov 2025: five colours of card — yellow
//   (AAY), pink (priority), blue (non-priority subsidy), white (non-priority);
//   applications via Akshaya centres or the Citizen Login portal
//   ecitizen.civilsupplieskerala.gov.in; blue/white to pink conversion window
//   1–15 June 2025; yellow-card limit reached, some very poor families given
//   pink cards.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: what blue and white cards get each month and at what price (it
// changes by month and we could not open the department site), the fifth card
// colour, an official document list, fees, current dates for conversion to
// pink. civilsupplieskerala.gov.in and ecitizen were not reachable from here.
export const keralaRationCard: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Kerala Ration Card 2026: Apply & Status",
  description: "केरल राशन कार्ड 2026: पीला (AAY), गुलाबी (PHH), नीला और सफेद कार्ड, ecitizen पोर्टल या अक्षय केंद्र से आवेदन, e-KYC, राशन का विवरण और हेल्पलाइन 1800-425-1550 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "केरल राशन कार्ड 2026: कार्ड के रंग, आवेदन, e-KYC और शिकायत",
  lead: "केरल में राशन कार्ड खाद्य, नागरिक आपूर्ति और उपभोक्ता मामले विभाग (Civil Supplies) बनाता है। कार्ड रंग से पहचाने जाते हैं: पीला (AAY) और गुलाबी (प्राथमिकता) NFSA के कार्ड हैं, नीला और सफेद गैर-प्राथमिकता कार्ड। आवेदन ecitizen.civilsupplieskerala.gov.in के Citizen Login से या नज़दीकी अक्षय केंद्र से होता है।",
  facts: [
    ["राज्य में कार्ड", "95.99 लाख (अक्टूबर 2026)"],
    ["राशन दुकानें", "13,925"],
    ["अनाज (NFSA)", "पीला: 35 किलो/परिवार, गुलाबी: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-425-1550, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। पीले या गुलाबी कार्ड में हर सदस्य का आधार जुड़ा और <strong>e-KYC पूरा</strong> हो। खबरों के अनुसार दिसंबर 2024 में जांच के बाद करीब 60,000 लोगों को प्राथमिकता कार्ड से हटाया गया था, इसलिए कार्ड से राशन नियमित लेते रहें।",
  sections: [
    {
      id: "prakar",
      title: "केरल में राशन कार्ड के रंग और किसे क्या मिलता है",
      intro: "AePDS केरल के अनुसार अक्टूबर 2026 में राज्य में <strong>95,99,411 राशन कार्ड</strong> और <strong>13,925 राशन दुकानें</strong> हैं। इनमें NFSA पोर्टल के अनुसार 43,68,009 कार्ड NFSA (पीले और गुलाबी) के हैं।",
      table: {
        head: ["कार्ड का रंग", "श्रेणी", "NFSA कार्ड", "हर महीने अनाज"],
        rows: [
          ["<strong>पीला</strong>", "अंत्योदय अन्न योजना (AAY)", "5,94,430", "<strong>35 किलो प्रति परिवार</strong>, मुफ्त"],
          ["<strong>गुलाबी</strong>", "प्राथमिकता परिवार (PHH / BPL)", "37,73,579", "<strong>5 किलो प्रति व्यक्ति</strong>, मुफ्त"],
          ["<strong>नीला</strong>", "गैर-प्राथमिकता, सब्सिडी वाला", "NFSA में नहीं", "राज्य जो मात्रा और दाम तय करे"],
          ["<strong>सफेद</strong>", "गैर-प्राथमिकता, बिना सब्सिडी", "NFSA में नहीं", "राज्य जो मात्रा और दाम तय करे"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का NFSA अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है। नीले और सफेद कार्ड पर इस महीने क्या और किस दाम पर मिलेगा, यह राशन दुकान पर लगी सूची या 1967 से पूछें।" },
    },
    {
      id: "patrata",
      title: "गुलाबी (प्राथमिकता) कार्ड किसे मिलता है",
      list: [
        "खबरों के अनुसार राज्य की प्राथमिकता सूची में पारंपरिक और असंगठित क्षेत्र के मज़दूर, स्थानीय निकाय की BPL सूची वाले परिवार, आश्रय (ASHRAYA) योजना के लाभार्थी और ऐसे दूसरे गरीब परिवार आते हैं।",
        "राज्य में पीले (AAY) कार्ड की संख्या की सीमा पूरी हो चुकी है, इसलिए कुछ बेहद गरीब परिवारों को गुलाबी कार्ड दिया गया है।",
        "नीले या सफेद कार्ड वाले परिवार <strong>गुलाबी कार्ड में बदलाव</strong> का आवेदन तभी कर सकते हैं जब विभाग इसके लिए आवेदन खोले (2025 में यह 1 से 15 जून तक खुला था)।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "प्राथमिकता कार्ड के लिए अपात्र होकर भी गुलाबी या पीला कार्ड रखना गलत है; जांच में पकड़े जाने पर कार्ड सफेद श्रेणी में बदला जा सकता है। अपनी पात्रता तालुक सप्लाई ऑफिस से पक्की करें।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड या बदलाव: आवेदन कैसे करें",
      steps: [
        '<a href="https://ecitizen.civilsupplieskerala.gov.in/" target="_blank" rel="noopener nofollow">ecitizen.civilsupplieskerala.gov.in</a> पर <strong>Citizen Login</strong> बनाएं, या नज़दीकी <strong>अक्षय केंद्र</strong> जाएं।',
        "नया कार्ड, सदस्य जोड़ना/हटाना, पता बदलना या कार्ड की श्रेणी बदलने की सेवा चुनें।",
        "परिवार के हर सदस्य का नाम, उम्र, रिश्ता और <strong>आधार नंबर</strong> भरें; मांगे गए कागज़ अपलोड करें।",
        "आवेदन जमा करके <strong>आवेदन नंबर</strong> संभालें; जांच आपके तालुक के सप्लाई ऑफिस में होती है।",
      ],
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "केरल में रहने के पते का प्रमाण",
        "मुखिया की फोटो",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का प्रमाण</strong>",
      ],
      callout: { kind: "info", html: "कागज़ों की अंतिम सूची वही है जो पोर्टल या अक्षय केंद्र मांगे। 13 अक्टूबर 2026 को विभाग की वेबसाइट हमारी जांच में नहीं खुली, इसलिए फीस और समय-सीमा यहां नहीं दी है।" },
    },
    {
      id: "status",
      title: "कार्ड का विवरण और राशन मिला या नहीं",
      list: [
        '<strong>AePDS केरल:</strong> <a href="https://epos.kerala.gov.in/" target="_blank" rel="noopener nofollow">epos.kerala.gov.in</a> पर \"Beneficiary Details\" रिपोर्ट में कार्ड नंबर से लेन-देन देखें।',
        "<strong>आवेदन का स्टेटस:</strong> ecitizen पोर्टल के Citizen Login में या उसी अक्षय केंद्र से।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC और One Nation One Ration Card",
      list: [
        "<strong>e-KYC:</strong> आधार के बायोमेट्रिक से सदस्य की पहचान मिलाई जाती है; यह राशन दुकान की PoS मशीन पर होता है।",
        "AePDS केरल पर <strong>eKYC Abstract</strong> और <strong>ONORC eKYC</strong> रिपोर्ट से इसकी प्रगति दिखती है।",
        "<strong>One Nation One Ration Card:</strong> पीले/गुलाबी कार्ड से दूसरे राज्य की e-PoS दुकान से भी NFSA का हिस्सा ले सकते हैं।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर एरर 300", "बायोमेट्रिक मेल नहीं खाया: उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 996 / 997 / 998", "आधार रद्द / निलंबित / गलत नंबर: आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["सदस्य का नाम कार्ड में नहीं", "ecitizen पोर्टल या अक्षय केंद्र से सदस्य जोड़ने का आवेदन"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-425-1550 या 1967 पर, या pg.civilsupplieskerala.gov.in पर शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-425-1550</strong>: AePDS केरल और NFSA पोर्टल पर दिया गया हेल्पलाइन नंबर",
        "<strong>1967</strong>: टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://pg.civilsupplieskerala.gov.in/" target="_blank" rel="noopener nofollow">pg.civilsupplieskerala.gov.in</a> (NFSA पोर्टल पर केरल की PDS शिकायत प्रणाली)',
        "पता: Commissionerate of Civil Supplies, Public Office Complex, Museum PO, तिरुवनंतपुरम",
      ],
    },
  ],
  official: [
    { href: "https://civilsupplieskerala.gov.in/", title: "खाद्य एवं नागरिक आपूर्ति विभाग, केरल" },
    { href: "https://ecitizen.civilsupplieskerala.gov.in/", title: "ecitizen: राशन कार्ड आवेदन (Citizen Login)" },
    { href: "https://epos.kerala.gov.in/", title: "AePDS केरल: लेन-देन, e-KYC रिपोर्ट" },
    { href: "https://nfsa.gov.in/State/KL", title: "NFSA पोर्टल: केरल का पेज (योजनाएं, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "केरल में नया राशन कार्ड कैसे बनवाएं?", a: "ecitizen.civilsupplieskerala.gov.in पर Citizen Login बनाकर या नज़दीकी अक्षय केंद्र से आवेदन करें। सभी सदस्यों का आधार और पते का प्रमाण साथ रखें, और आवेदन नंबर संभालें।" },
    { q: "केरल में पीला, गुलाबी, नीला और सफेद राशन कार्ड क्या है?", a: "पीला अंत्योदय (AAY) कार्ड है, गुलाबी प्राथमिकता (BPL) कार्ड; ये दोनों NFSA के हैं। नीला गैर-प्राथमिकता सब्सिडी वाला और सफेद गैर-प्राथमिकता बिना सब्सिडी वाला कार्ड है।" },
    { q: "नीले या सफेद कार्ड को गुलाबी कैसे करवाएं?", a: "विभाग जब बदलाव के आवेदन खोलता है तब ecitizen पोर्टल या अक्षय केंद्र से आवेदन होता है; 2025 में यह 1 से 15 जून तक खुला था। अगली तारीख के लिए तालुक सप्लाई ऑफिस या 1967 पर पूछें।" },
    { q: "केरल में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत पीले कार्ड पर 35 किलो प्रति परिवार और गुलाबी कार्ड पर 5 किलो प्रति व्यक्ति हर महीने, 31 दिसंबर 2028 तक मुफ्त। नीले और सफेद कार्ड की मात्रा राज्य तय करता है।" },
    { q: "केरल राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "1800-425-1550 और टोल-फ्री 1967। ऑनलाइन शिकायत pg.civilsupplieskerala.gov.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/kerala-income-certificate.html", emoji: "💰", title: "केरल आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/kerala-labour-card.html", emoji: "👷", title: "केरल लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/tamil-nadu-ration-card.html", emoji: "📋", title: "तमिलनाडु राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ecitizen.civilsupplieskerala.gov.in/", label: "📝 ecitizen पर आवेदन" },
    { href: "https://epos.kerala.gov.in/", label: "🔎 AePDS केरल: लेन-देन देखें" },
  ],
};
