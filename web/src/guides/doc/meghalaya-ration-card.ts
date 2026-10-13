import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - meghalaya.gov.in/announce/content/51713 and the attached press release
//   (Office of the Deputy Commissioner (Supply), South West Garo Hills,
//   announced 6 Sep 2026; notification of 26 Aug 2026): new ration card can be
//   applied for online and offline; applicants approach their nearest Fair
//   Price Shop with documents for verification; online via the Meghalaya
//   Smart PDS portal ml.smartpds.nic.in/login/citizen.
// - nfsa.gov.in/State/ML: Food, Civil Supplies and Consumer Affairs
//   Department (office 03642224108); schemes ANNAPURNA, AAY, PHH; 4,722 fair
//   price shops; 4,21,888 ration cards (AAY 70,197, PHH 3,51,691); helpdesk
//   1800-345-3644 and 1967; grievance system megpgrams.gov.in; older links
//   RCMS megrcms.nic.in, FEAST megfeast.gov.in (RC details), AePDS
//   epos.nic.in/meghalaya, department site megfcsca.gov.in.
// - nfsa.gov.in/portal/State_UT_Online_Grievance_AA: megpgrams.gov.in.
// - nfsa.gov.in Coverage/Salient Features; dfpd.gov.in 1967; free grain
//   1.1.2024–31.12.2028; Mera Ration app / ONORC (national).
// Left out / vague: ml.smartpds.nic.in, megrcms, megfeast and megpgrams did
// not open from here (megfcsca.gov.in did not resolve), so the online form's
// fields, an official document list and fees are not given. Third-party
// guides mention a Village Council / headman certificate; not confirmed on an
// official page, so readers are told to ask. Old description's "e-District
// Meghalaya" route is replaced by the Smart PDS route.
export const meghalayaRationCard: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Meghalaya Ration Card 2026: Apply & Status",
  description: "मेघालय राशन कार्ड 2026: Smart PDS पोर्टल पर ऑनलाइन या नज़दीकी राशन दुकान से आवेदन, AAY और PHH कार्ड, मुफ्त अनाज, e-KYC और हेल्पलाइन 1800-345-3644 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मेघालय राशन कार्ड 2026: Smart PDS से आवेदन, कार्ड का विवरण, e-KYC और शिकायत",
  lead: "मेघालय में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग (FCS&CA) बनाता है। अगस्त 2026 की सरकारी अधिसूचना के अनुसार नए राशन कार्ड का आवेदन ऑनलाइन <strong>Meghalaya Smart PDS</strong> पोर्टल (ml.smartpds.nic.in) पर या ऑफलाइन अपनी नज़दीकी उचित मूल्य (राशन) दुकान पर कागज़ जमा करके किया जा सकता है।",
  facts: [
    ["राज्य में कार्ड", "4,21,888 (NFSA पोर्टल)"],
    ["राशन दुकानें", "4,722"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "1800-345-3644, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "मेघालय में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल के मेघालय पेज के अनुसार राज्य में <strong>4,21,888 राशन कार्ड</strong> हैं, जिन्हें <strong>4,722 उचित मूल्य दुकानों</strong> से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "70,197", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "3,51,691", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। NFSA पोर्टल पर विभाग की योजनाओं में <strong>अन्नपूर्णा (Annapurna)</strong> भी लिखी है; इसकी शर्तें ज़िला आपूर्ति कार्यालय से पूछें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "जिस पात्र परिवार के पास <strong>अभी कोई राशन कार्ड नहीं</strong> है, वह आवेदन कर सकता है। एक परिवार का एक ही कार्ड होता है।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "राज्य की आधिकारिक दस्तावेज़ सूची हम नहीं देख पाए। ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या राशन दुकान/दफ़्तर मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "मेघालय के <strong>पते का प्रमाण</strong> और मुखिया की <strong>फोटो</strong>",
        "बच्चों के लिए <strong>जन्म प्रमाण पत्र</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
      callout: { kind: "warn", html: "कई जगह गांव के मुखिया (Headman) या Village Council का प्रमाण पत्र मांगा जा सकता है। यह ज़रूरी है या नहीं, अपनी राशन दुकान या ज़िला आपूर्ति कार्यालय से पहले पूछ लें।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: दो रास्ते",
      intro: "<strong>1. ऑनलाइन (Smart PDS पोर्टल):</strong>",
      steps: [
        '<a href="https://ml.smartpds.nic.in/login/citizen" target="_blank" rel="noopener nofollow">ml.smartpds.nic.in/login/citizen</a> खोलें। सरकारी अधिसूचना में यही पता दिया गया है।',
        "नागरिक (Citizen) के रूप में रजिस्टर/लॉगिन करें और नए राशन कार्ड का आवेदन चुनें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; मांगे गए कागज़ अपलोड करें।",
        "फॉर्म जमा करके <strong>आवेदन नंबर</strong> नोट करें।",
      ],
      html: "<p><strong>2. ऑफलाइन (राशन दुकान से):</strong> अपनी <strong>नज़दीकी उचित मूल्य दुकान (FPS)</strong> पर जाकर ज़रूरी कागज़ और जानकारी जमा करें। अधिसूचना के अनुसार अधिकारियों और राशन डीलरों को आवेदन में मदद करने का निर्देश दिया गया है। जांच के बाद आवेदन आगे बढ़ता है।</p>",
      callout: { kind: "info", html: "13 अक्टूबर 2026 को Smart PDS पोर्टल हमारी जांच में नहीं खुला। पोर्टल न खुले तो राशन दुकान वाला रास्ता अपनाएं, या ज़िले के <strong>डिप्टी कमिश्नर (सप्लाई) कार्यालय</strong> से पूछें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> बच्चे या शादी के बाद आई सदस्य का नाम जोड़ने के लिए Smart PDS पोर्टल पर या राशन दुकान/ज़िला आपूर्ति कार्यालय में आवेदन करें। सदस्य का आधार साथ रखें।",
        "<strong>नाम हटाना:</strong> मृत्यु या परिवार से अलग होने पर नाम हटवाएं।",
        "<strong>दूसरे राज्य/ज़िले में जाने पर:</strong> पुराना कार्ड सरेंडर करके सर्टिफिकेट लें।",
      ],
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      list: [
        "<strong>Smart PDS पोर्टल</strong> पर लॉगिन करके अपने आवेदन की स्थिति देखें।",
        '<strong>पुराना FEAST पोर्टल:</strong> NFSA पोर्टल पर <a href="https://megfeast.gov.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">megfeast.gov.in → RC Details</a> का लिंक है, जहां राशन कार्ड नंबर से विवरण दिखता था।',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): राशन कार्ड नंबर या आधार से कार्ड के सदस्य और हर महीने का हक।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप:</strong> कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-3644</strong>: NFSA पोर्टल पर मेघालय का टोल-फ्री हेल्पडेस्क",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://megpgrams.gov.in/" target="_blank" rel="noopener nofollow">megpgrams.gov.in</a> (NFSA पोर्टल पर मेघालय की PDS शिकायत प्रणाली)',
        "ज़िले के डिप्टी कमिश्नर (सप्लाई) कार्यालय में लिखित शिकायत भी दे सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://ml.smartpds.nic.in/login/citizen", title: "Meghalaya Smart PDS: नागरिक लॉगिन (नए कार्ड का आवेदन)" },
    { href: "https://meghalaya.gov.in/announce/content/51713", title: "मेघालय सरकार: नए राशन कार्ड के आवेदन की सूचना (सितंबर 2026)" },
    { href: "https://nfsa.gov.in/State/ML", title: "NFSA पोर्टल: मेघालय का पेज (लिंक, हेल्पलाइन, संख्या)" },
    { href: "http://megpgrams.gov.in/", title: "मेघालय PDS शिकायत प्रणाली" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "मेघालय में नया राशन कार्ड कैसे बनवाएं?", a: "ऑनलाइन ml.smartpds.nic.in/login/citizen पर, या ऑफलाइन अपनी नज़दीकी राशन दुकान पर सभी सदस्यों के आधार और कागज़ जमा करके। अगस्त 2026 की सरकारी अधिसूचना में दोनों रास्ते बताए गए हैं।" },
    { q: "मेघालय में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "मेघालय में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 4,21,888 कार्ड: AAY 70,197 और PHH 3,51,691। राज्य में 4,722 राशन दुकानें हैं।" },
    { q: "मेघालय राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1800-345-3644 और 1967। ऑनलाइन शिकायत megpgrams.gov.in पर।" },
    { q: "क्या मेघालय का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/meghalaya-income-certificate.html", emoji: "💰", title: "मेघालय आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/meghalaya-domicile-certificate.html", emoji: "🏠", title: "मेघालय निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/meghalaya-birth-certificate.html", emoji: "👶", title: "मेघालय जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/meghalaya-labour-card.html", emoji: "👷", title: "मेघालय लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ml.smartpds.nic.in/login/citizen", label: "📝 ऑनलाइन आवेदन (Smart PDS)" },
    { href: "/service/csc-locator/meghalaya.html", label: "📍 नज़दीकी CSC" },
  ],
};
