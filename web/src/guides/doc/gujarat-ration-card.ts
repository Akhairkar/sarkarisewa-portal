import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - nfsa.gov.in/State/GJ (Dept. of Food & Public Distribution, GoI):
//   Department of Food, Civil Supplies and Consumer Affairs, Govt. of Gujarat;
//   schemes AAY and PHH; 78,68,468 ration cards (AAY 8,04,707 + PHH
//   70,63,761); 15,441 FPS; website fcsca.gujarat.gov.in; grievance
//   ipds.gujarat.gov.in/PGRS/Complaint.aspx; helpdesk 1967 and 18002335500;
//   District-wise RC count report on ipds.gujarat.gov.in; ePoS transaction
//   report (State ePoS Portals page).
// - banaskantha.nic.in "Ration Card" (District Banaskantha): the ration card
//   services are online on the Digital Gujarat portal (list of 9 services),
//   Digital Gujarat Help Desk 18002335500.
// - jamnagar.nic.in "Supply – Ration Card": ATVT / Jan Seva Kendra provide the
//   services at the Taluka Mamlatdar office (rural, Supply Branch) and the
//   Zonal office (urban); also available online on digitalgujarat.gov.in.
// - mahesana.nic.in "Getting a new ration card": apply at the Taluka
//   Mamlatdar office; documents (salary certificate if employed, PAN if filing
//   income tax, cancellation certificate of the old card, proof of residence,
//   gas agency receipt).
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; dfpd.gov.in
//   toll-free 1967; free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023 (as in our Maharashtra guide); AePDS FAQ (UIDAI error codes).
// Not reachable from here: dcs-dof.gujarat.gov.in, fcsca.gujarat.gov.in,
// ipds.gujarat.gov.in and digitalgujarat.gov.in. So Gujarat's own PHH
// criteria, the current fee and time limit (the Mahesana page still lists old
// APL-1/APL-2 fees, so we did not repeat them) are left out.
export const gujaratRationCard: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Gujarat Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "गुजरात राशन कार्ड 2026: AAY और PHH (NFSA) कार्ड, Digital Gujarat पोर्टल पर नया/अलग/डुप्लीकेट कार्ड और नाम जोड़ने-हटाने की सेवाएं, मामलतदार/ज़ोनल ऑफिस, ज़रूरी कागज़, e-KYC और हेल्पलाइन 1967 / 1800-233-5500।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "गुजरात राशन कार्ड 2026: Digital Gujarat पर आवेदन, नाम जोड़ना और e-KYC",
  lead: "गुजरात में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग का है। नया कार्ड, अलग कार्ड, डुप्लीकेट कार्ड, नाम जोड़ना-हटाना जैसी सेवाएं Digital Gujarat पोर्टल पर ऑनलाइन हैं, और गांव में तालुका मामलतदार कार्यालय तथा शहर में ज़ोनल कार्यालय के जन सेवा केंद्र (ATVT) पर भी मिलती हैं।",
  facts: [
    ["राज्य में कार्ड", "78.68 लाख (NFSA पोर्टल)"],
    ["राशन दुकानें", "15,441"],
    ["ऑनलाइन", "Digital Gujarat पोर्टल"],
    ["हेल्पलाइन", "1967, 1800-233-5500"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित e-PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "गुजरात में राशन कार्ड के प्रकार और कितना अनाज",
      intro: "NFSA पोर्टल के गुजरात पेज के अनुसार (5 अक्टूबर 2026 को देखा गया) राज्य में <strong>78,68,468 राशन कार्ड</strong> हैं, जिन्हें <strong>15,441 सस्ते अनाज की दुकानों</strong> (FPS) से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "8,04,707", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "70,63,761", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का NFSA अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। NFSA से बाहर के कार्डों पर यह मुफ्त अनाज नहीं मिलता।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है NFSA (AAY / PHH) कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह पहचान और उसके मापदंड हर राज्य खुद तय करता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "गुजरात में PHH की पात्रता की शर्तें राज्य सरकार तय करती है। आवेदन से पहले अपने तालुका मामलतदार कार्यालय (पुरवठा शाखा) या ज़ोनल कार्यालय से अपनी श्रेणी के बारे में पूछ लें।" },
    },
    {
      id: "sevaen",
      title: "Digital Gujarat पर मिलने वाली राशन कार्ड सेवाएं",
      intro: "ज़िला बनासकांठा और जामनगर की वेबसाइट के अनुसार ये सेवाएं Digital Gujarat पोर्टल पर ऑनलाइन और जन सेवा केंद्रों पर हैं:",
      list: [
        "नया राशन कार्ड (Application for New Ration Card)",
        "अलग राशन कार्ड (Separate Ration Card), जैसे परिवार अलग होने पर",
        "डुप्लीकेट राशन कार्ड",
        "राशन कार्ड में सदस्य को अभिभावक (Member Guardian) बनाना",
        "राशन कार्ड में नाम जोड़ना",
        "राशन कार्ड से नाम हटाना",
        "राशन कार्ड में बदलाव, और दूसरे तालुका/ज़िले में ट्रांसफर के लिए बदलाव",
        "राशन कार्ड रद्द करना (Cancel Ration Card)",
      ],
    },
    {
      id: "kagaz",
      title: "नए राशन कार्ड के लिए कागज़",
      intro: "ज़िला मेहसाणा की वेबसाइट पर नए कार्ड के आवेदन के साथ ये कागज़ बताए गए हैं (ऑनलाइन फॉर्म में आधार और परिवार की जानकारी भी भरनी होती है):",
      list: [
        "<strong>रहने की जगह का प्रमाण</strong>",
        "नौकरी करते हों तो संस्था का <strong>वेतन प्रमाण पत्र</strong>",
        "आयकर भरते हों तो <strong>PAN</strong> का प्रमाण",
        "पहले किसी कार्ड में नाम था तो <strong>पुराना कार्ड रद्द होने / नाम कटने का प्रमाण पत्र</strong>",
        "गैस कनेक्शन हो तो <strong>गैस एजेंसी की रसीद</strong>",
        "परिवार के सभी सदस्यों का <strong>आधार</strong> (e-KYC और राशन के लिए ज़रूरी)",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें: ऑनलाइन और ऑफलाइन",
      steps: [
        '<strong>ऑनलाइन:</strong> <a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a> पर नागरिक के रूप में रजिस्टर/लॉगिन करें और Citizen Services में राशन कार्ड की सही सेवा चुनें।',
        "फॉर्म में मुखिया और परिवार के सदस्यों की जानकारी भरें, कागज़ अपलोड करें और जमा करें। आवेदन नंबर संभालें।",
        "<strong>ऑफलाइन:</strong> गांव में अपने <strong>तालुका मामलतदार कार्यालय (पुरवठा शाखा)</strong> और शहर में <strong>ज़ोनल कार्यालय</strong> के जन सेवा केंद्र / ATVT केंद्र पर आवेदन दें।",
        "जांच के बाद कार्ड मंज़ूर होता है और नज़दीकी सस्ते अनाज की दुकान से जुड़ता है।",
      ],
      callout: { kind: "ok", html: "ऑनलाइन आवेदन में दिक्कत हो तो <strong>Digital Gujarat हेल्पडेस्क 1800-233-5500</strong> पर फोन करें (यही नंबर NFSA पोर्टल पर गुजरात के हेल्पडेस्क में दिया गया है)।" },
    },
    {
      id: "status",
      title: "राशन कार्ड और राशन की जानकारी कहां देखें",
      list: [
        '<strong>ज़िलेवार राशन कार्ड रिपोर्ट:</strong> NFSA पोर्टल पर गुजरात के लिए <a href="http://ipds.gujarat.gov.in/Register/frm_RationCardAbstract.aspx" target="_blank" rel="noopener nofollow">IPDS गुजरात</a> की रिपोर्ट दी गई है।',
        '<strong>e-PoS वितरण:</strong> <a href="https://ipds.gujarat.gov.in/FpsSale/TransactionDistrictWiseByMonthAndYear.aspx" target="_blank" rel="noopener nofollow">महीने और साल के हिसाब से ज़िलेवार लेन-देन</a>',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, पिछले लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी हो सकती है।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC और One Nation One Ration Card",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की e-PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश के किसी भी e-PoS दुकान पर आधार से अपना हिस्सा ले सकते हैं। दूसरे राज्य से आकर गुजरात में काम करने वाले भी अपने राज्य के NFSA कार्ड पर यहां राशन ले सकते हैं।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत / एरर", "क्या करें"],
        rows: [
          ["एरर 300 (बायोमेट्रिक मेल नहीं खाया)", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 996 / 997 / 998", "आधार रद्द / निलंबित / गलत नंबर: आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["पुराने कार्ड में नाम होने से नया कार्ड नहीं बन रहा", "पुराने कार्ड से नाम हटवाएं / रद्द करवाएं और उसका प्रमाण लगाएं"],
          ["दूसरे तालुका/ज़िले में घर बदला", "Digital Gujarat पर ट्रांसफर वाली \"Change in Ration Card\" सेवा चुनें"],
          ["राशन कम मिला या दुकान ने मना किया", "1967 पर शिकायत, या IPDS गुजरात के शिकायत पेज पर ऑनलाइन"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: NFSA पोर्टल पर गुजरात का हेल्पडेस्क और केंद्र का टोल-फ्री नंबर",
        "<strong>1800-233-5500</strong>: Digital Gujarat हेल्पडेस्क (NFSA पोर्टल पर भी दर्ज)",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://ipds.gujarat.gov.in/PGRS/Complaint.aspx" target="_blank" rel="noopener nofollow">ipds.gujarat.gov.in (PGRS)</a>',
      ],
    },
  ],
  official: [
    { href: "https://www.digitalgujarat.gov.in/", title: "Digital Gujarat: राशन कार्ड की ऑनलाइन सेवाएं" },
    { href: "https://fcsca.gujarat.gov.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, गुजरात" },
    { href: "https://ipds.gujarat.gov.in/PGRS/Complaint.aspx", title: "IPDS गुजरात: PDS शिकायत" },
    { href: "https://nfsa.gov.in/State/GJ", title: "NFSA पोर्टल: गुजरात का पेज (कार्ड संख्या, लिंक, हेल्पलाइन)" },
    { href: "https://jamnagar.nic.in/service/rationcard/", title: "ज़िला जामनगर: राशन कार्ड सेवाएं और कार्यालय" },
  ],
  faq: [
    { q: "गुजरात में नया राशन कार्ड कैसे बनवाएं?", a: "Digital Gujarat पोर्टल पर \"Application for New Ration Card\" सेवा में ऑनलाइन आवेदन करें, या गांव में तालुका मामलतदार कार्यालय और शहर में ज़ोनल कार्यालय के जन सेवा केंद्र पर आवेदन दें।" },
    { q: "गुजरात राशन कार्ड में नाम कैसे जोड़ें या हटाएं?", a: "Digital Gujarat पर \"Addition of Name in Ration Card\" या \"Removal of Name from Ration Card\" सेवा चुनें। नए सदस्य का आधार और ज़रूरी प्रमाण (जैसे जन्म प्रमाण पत्र या पुराने कार्ड से नाम कटने का प्रमाण) लगाएं।" },
    { q: "गुजरात में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "गुजरात में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 78,68,468 कार्ड: AAY 8,04,707 और PHH 70,63,761। राज्य में 15,441 राशन दुकानें हैं।" },
    { q: "घर दूसरे ज़िले में बदल लिया, राशन कार्ड कैसे ट्रांसफर करें?", a: "Digital Gujarat पर \"Change in Ration Card (For Transfer of Other Taluka/District)\" सेवा में आवेदन करें। तब तक One Nation One Ration Card से किसी भी e-PoS दुकान पर आधार से राशन ले सकते हैं।" },
    { q: "गुजरात राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल पर गुजरात के लिए 1967 और 1800-233-5500 दिए गए हैं। ऑनलाइन शिकायत ipds.gujarat.gov.in के PGRS पेज पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/gujarat-income-certificate.html", emoji: "💰", title: "गुजरात आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/gujarat-labour-card.html", emoji: "👷", title: "गुजरात लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/maharashtra-ration-card.html", emoji: "📋", title: "महाराष्ट्र राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://www.digitalgujarat.gov.in/", label: "📝 Digital Gujarat पर आवेदन" },
    { href: "https://ipds.gujarat.gov.in/PGRS/Complaint.aspx", label: "📣 शिकायत दर्ज करें" },
  ],
};
