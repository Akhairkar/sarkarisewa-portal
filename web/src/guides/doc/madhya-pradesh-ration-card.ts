import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - epos.mp.gov.in (AePDS, Food, Civil Supplies & Consumer Protection Dept.,
//   MP): Key Register for October 2026 (28,253 FPS; 1,34,11,501 cards;
//   5,22,40,618 units; AAY 13,61,457 cards / 43,79,305 units; PHH 1,20,48,207
//   cards / 4,78,58,940 units); home page toll-free 1967; price chart Oct 2026
//   (wheat and rice ₹0 for AAY and PHH); "RC Details" report by month/year;
//   ONORC eKYC report; FAQ (UIDAI error codes 300/510/811/996/997/998/999,
//   eKYC, "Device is not Mapped with this Shop", ration only at the tagged FPS).
// - nfsa.gov.in/State/MP: schemes AAY and PHH; helpdesk 1967 and 181;
//   grievance via CM Helpline (cmhelpline.mp.gov.in/Mpsamadhan); department
//   website food.mp.gov.in; RC count report on rationmitra.nic.in.
// - damoh.nic.in (District Damoh, MP): "Madhya Pradesh Food security Portal
//   (Ration Mitra)" — Mukhyamantri Annapurna Yojana, eligibility slip (MP
//   e-Ration Card) via portal and m-Ration Mitra app, eKYC by adding Aadhaar
//   in the app, online application to add and remove members; stakeholders
//   (DSO, Janpad Panchayat, urban bodies). "Samagra Portal" page: 8-digit
//   family ID, 9-digit member ID, helpdesk 0755-2700800.
// - dhar.nic.in (District Dhar, MP) note of the District Supply Officer: 28
//   priority household categories plus the new category of unorganised and
//   migrant workers (Sambal / e-Shram), its exclusions, and the application
//   at the Gram Panchayat / ward office with Samagra family ID, Aadhaar of all
//   members, Sambal registration certificate and a mobile number.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the full list of the 28 categories (no official page we could
// open lists them), fees and time limits, and the old page's "e-District /
// Lok Seva" application route, which does not match the Ration Mitra process.
// rationmitra.nic.in and samagra.gov.in were not reachable from here.
export const madhyaPradeshRationCard: DocGuide = {
  state: { slug: "madhya-pradesh", hi: "मध्य प्रदेश" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Madhya Pradesh Ration Card 2026: Apply & Status | SarkariSewa",
  description: "मध्य प्रदेश राशन कार्ड (पात्रता पर्ची) 2026: समग्र ID से ग्राम पंचायत/वार्ड में आवेदन, 28 प्राथमिकता श्रेणियां और असंगठित-प्रवासी श्रमिक, राशन मित्र पोर्टल, e-KYC, सदस्य जोड़ना-हटाना, मुफ्त गेहूं-चावल और हेल्पलाइन 1967 / 181।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "मध्य प्रदेश राशन कार्ड (पात्रता पर्ची) 2026: पात्रता, आवेदन, e-KYC और सदस्य जोड़ना",
  lead: "मध्य प्रदेश में राष्ट्रीय खाद्य सुरक्षा कानून (NFSA) के तहत \"मुख्यमंत्री अन्नपूर्णा योजना\" चलती है। पात्र परिवार को खाद्यान्न की पात्रता पर्ची (MP e-Ration Card) मिलती है, जो राशन मित्र पोर्टल और m-Ration Mitra ऐप से जारी होती है। आवेदन परिवार की समग्र ID के साथ ग्राम पंचायत या वार्ड कार्यालय में होता है।",
  facts: [
    ["राज्य में कार्ड", "1.34 करोड़ (अक्टूबर 2026)"],
    ["लाभार्थी", "5.22 करोड़ सदस्य"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "1967, 181"],
  ],
  notice: "<strong>ध्यान दें:</strong> मध्य प्रदेश में राशन का आधार <strong>समग्र ID</strong> है। परिवार की 8 अंकों की समग्र परिवार ID और हर सदस्य की 9 अंकों की सदस्य ID सही हो, सबका आधार जुड़ा हो और e-KYC पूरा हो, तभी पर्ची और राशन बिना रुकावट मिलता है।",
  sections: [
    {
      id: "prakar",
      title: "मध्य प्रदेश में राशन के प्रकार और कितना अनाज",
      intro: "AePDS मध्य प्रदेश के अक्टूबर 2026 के Key Register के अनुसार राज्य में <strong>1,34,11,501 कार्ड</strong> और <strong>5,22,40,618 सदस्य</strong> हैं, जिन्हें <strong>28,253 उचित मूल्य दुकानों</strong> से राशन मिलता है।",
      table: {
        head: ["श्रेणी", "कार्ड (अक्टूबर 2026)", "सदस्य", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "13,61,457", "43,79,305", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "1,20,48,207", "4,78,58,940", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "AePDS मध्य प्रदेश के अक्टूबर 2026 के प्राइस चार्ट में AAY और PHH के लिए <strong>गेहूं और चावल की दर ₹0</strong> है। केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार NFSA का अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलती है पात्रता पर्ची",
      list: [
        "<strong>अंत्योदय परिवार</strong> और राज्य की <strong>28 प्राथमिकता परिवार श्रेणियों</strong> में आने वाले परिवार (जैसे BPL और राज्य सरकार की तय श्रेणियां)।",
        "<strong>नई श्रेणी: असंगठित एवं प्रवासी श्रमिक।</strong> श्रम विभाग की मुख्यमंत्री जन कल्याण (संबल) योजना में पंजीकृत असंगठित श्रमिक, और संबल व ई-श्रम (भारत सरकार) पोर्टल पर पंजीकृत प्रवासी श्रमिक, जो अभी किसी और श्रेणी में पात्र नहीं हैं।",
        "NFSA के अनुसार परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) राशन कार्ड में मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "<strong>असंगठित/प्रवासी श्रमिक श्रेणी में ये परिवार नहीं आते:</strong> जिनका मुखिया या कोई सदस्य आयकरदाता है, या केंद्र/राज्य सरकार के किसी कार्यालय, शासकीय/अर्धशासकीय/सार्वजनिक/स्वायत्त उपक्रम (राष्ट्रीयकृत बैंक और सहकारी संस्थाएं सहित) में प्रथम, द्वितीय या तृतीय श्रेणी का अधिकारी/कर्मचारी है। अपनी श्रेणी के मापदंड ज़िला आपूर्ति अधिकारी या जनपद पंचायत / नगरीय निकाय से पक्के करें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन के लिए ज़रूरी कागज़",
      intro: "ज़िला आपूर्ति अधिकारी (धार) की सूचना के अनुसार, असंगठित श्रमिक श्रेणी में पर्ची के लिए:",
      list: [
        "<strong>परिवार की समग्र ID</strong> (8 अंकों की परिवार ID)",
        "<strong>परिवार के सभी सदस्यों का आधार कार्ड</strong>",
        "<strong>संबल योजना का पंजीयन प्रमाण पत्र</strong> (श्रम विभाग से) या अपनी श्रेणी का प्रमाण",
        "परिवार के मुखिया या किसी एक सदस्य का <strong>मोबाइल नंबर</strong>",
      ],
      callout: { kind: "info", html: "समग्र पोर्टल पर परिवार का पंजीकरण न हो तो पहले वह कराएं। समग्र हेल्पडेस्क: <strong>0755-2700800</strong>, ईमेल samagra.support@mp.gov.in।" },
    },
    {
      id: "avedan",
      title: "नई पात्रता पर्ची के लिए आवेदन कैसे करें",
      steps: [
        "देख लें कि परिवार और सभी सदस्य <strong>समग्र पोर्टल</strong> पर दर्ज हैं और सबका आधार समग्र से जुड़ा है।",
        "सारे कागज़ लेकर <strong>गांव में ग्राम पंचायत</strong> और <strong>शहर में वार्ड कार्यालय</strong> (नगरीय निकाय) में आवेदन दें।",
        "नई पर्ची और नए सदस्य की स्वीकृति स्थानीय निकाय (जनपद पंचायत / नगरीय निकाय) के स्तर पर होती है; ज़िला आपूर्ति अधिकारी कार्यालय भी इस प्रक्रिया में शामिल है।",
        'मंज़ूरी के बाद पर्ची <a href="https://rationmitra.nic.in/" target="_blank" rel="noopener nofollow">राशन मित्र पोर्टल</a> या m-Ration Mitra ऐप पर दिखती है। परिवार अपनी पर्ची और सदस्यों की सूची वहीं देख सकता है।',
        "उचित मूल्य दुकान की PoS मशीन पर आधार से अंगूठा/उंगली लगाकर राशन लें।",
      ],
    },
    {
      id: "sadasya",
      title: "सदस्य जोड़ना, हटाना और e-KYC",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> राशन मित्र पर ऑनलाइन आवेदन होता है। पहले नए सदस्य (जैसे बच्चा या बहू) का नाम समग्र में परिवार के साथ जुड़वाएं और आधार लिंक कराएं।",
        "<strong>सदस्य हटाना:</strong> पर्ची से नाम हटाने का आवेदन भी राशन मित्र से होता है (जैसे मृत्यु या शादी के बाद)।",
        "<strong>e-KYC:</strong> m-Ration Mitra ऐप में आधार जोड़कर e-KYC का सत्यापन किया जा सकता है। राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर भी आधार e-KYC होता है।",
        "AePDS पोर्टल पर <strong>\"ONORC eKYC\"</strong> रिपोर्ट से ज़िलेवार e-KYC की स्थिति दिखती है।",
      ],
    },
    {
      id: "status",
      title: "राशन मिला या नहीं: कहां देखें",
      list: [
        '<strong>RC Details:</strong> <a href="https://epos.mp.gov.in/SRC_Trans_Int.jsp" target="_blank" rel="noopener nofollow">epos.mp.gov.in</a> पर महीना और साल चुनकर कार्ड का लेन-देन देखें।',
        '<strong>राशन मित्र:</strong> <a href="https://rationmitra.nic.in/" target="_blank" rel="noopener nofollow">rationmitra.nic.in</a> पर पर्ची, सदस्य, राशन दुकान, आवंटन और PoS मशीन की स्थिति।',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, पिछले लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी हो सकती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश के किसी भी e-PoS दुकान पर अपना हिस्सा लिया जा सकता है।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें, एरर कोड और हल",
      table: {
        head: ["दिक्कत / एरर", "मतलब और हल"],
        rows: [
          ["समग्र में नाम नहीं या आधार नहीं जुड़ा", "पहले समग्र में सदस्य जोड़ें और e-KYC कराएं, फिर पंचायत/वार्ड में आवेदन"],
          ["एरर 300", "बायोमेट्रिक मेल नहीं खाया: उंगली साफ करके या दूसरी उंगली से दोबारा; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 811", "आधार डेटाबेस में बायोमेट्रिक नहीं मिला: आधार केंद्र पर बायोमेट्रिक अपडेट कराएं"],
          ["एरर 996 / 997", "आधार रद्द / निलंबित: आधार केंद्र में संपर्क करें"],
          ["एरर 998", "आधार नंबर गलत या डेटा उपलब्ध नहीं: पर्ची/समग्र में दर्ज आधार नंबर जांचें"],
          ["\"Device is not Mapped with this Shop\"", "हर दुकान की PoS मशीन उसी दुकान से जुड़ी होती है; दुकानदार को सही मशीन से लेन-देन करना होगा"],
          ["राशन कम मिला या मना किया", "1967 या CM हेल्पलाइन 181 पर शिकायत करें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: AePDS मध्य प्रदेश और NFSA पोर्टल पर दिया गया टोल-फ्री नंबर",
        '<strong>181</strong>: मुख्यमंत्री हेल्पलाइन; ऑनलाइन शिकायत <a href="https://cmhelpline.mp.gov.in/" target="_blank" rel="noopener nofollow">cmhelpline.mp.gov.in</a> (NFSA पोर्टल पर PDS शिकायत के लिए यही बताया गया है)',
        "<strong>0755-2700800</strong>: समग्र हेल्पडेस्क (समग्र ID से जुड़ी दिक्कतें)",
      ],
    },
  ],
  official: [
    { href: "https://rationmitra.nic.in/", title: "राशन मित्र: मध्य प्रदेश खाद्य सुरक्षा पोर्टल (पात्रता पर्ची)" },
    { href: "https://epos.mp.gov.in/", title: "AePDS मध्य प्रदेश: RC Details, Key Register, e-KYC रिपोर्ट" },
    { href: "https://samagra.gov.in/", title: "समग्र पोर्टल: परिवार और सदस्य ID" },
    { href: "https://cmhelpline.mp.gov.in/", title: "CM हेल्पलाइन 181: शिकायत" },
    { href: "https://nfsa.gov.in/State/MP", title: "NFSA पोर्टल: मध्य प्रदेश का पेज" },
    { href: "https://damoh.nic.in/en/rationmitra/", title: "ज़िला दमोह: राशन मित्र पोर्टल की जानकारी" },
  ],
  faq: [
    { q: "मध्य प्रदेश में नया राशन कार्ड (पात्रता पर्ची) कैसे बनवाएं?", a: "परिवार की समग्र ID, सभी सदस्यों के आधार, अपनी पात्र श्रेणी का प्रमाण और मोबाइल नंबर लेकर गांव में ग्राम पंचायत या शहर में वार्ड कार्यालय में आवेदन करें। मंज़ूरी के बाद पर्ची राशन मित्र पोर्टल पर आती है।" },
    { q: "MP में पात्रता पर्ची क्या है?", a: "मुख्यमंत्री अन्नपूर्णा योजना में पात्र परिवार को मिलने वाली खाद्यान्न पात्रता पर्ची ही MP का e-Ration Card है। यह राशन मित्र पोर्टल और m-Ration Mitra ऐप से जारी होती है।" },
    { q: "क्या असंगठित मज़दूर को राशन कार्ड मिल सकता है?", a: "हाँ। संबल योजना में पंजीकृत असंगठित श्रमिक और संबल/ई-श्रम पर पंजीकृत प्रवासी श्रमिक, जो किसी और श्रेणी में नहीं हैं, नई प्राथमिकता श्रेणी में आते हैं; आयकरदाता और सरकारी/बैंक/सहकारी संस्था के कर्मचारी वाले परिवार नहीं।" },
    { q: "राशन मित्र में नया सदस्य कैसे जोड़ें?", a: "पहले नए सदस्य का नाम समग्र में परिवार के साथ जुड़वाएं और आधार लिंक कराएं, फिर राशन मित्र पर सदस्य जोड़ने का ऑनलाइन आवेदन करें।" },
    { q: "MP में राशन कार्ड पर कितना अनाज मिलता है?", a: "AAY परिवार को 35 किलो प्रति परिवार और प्राथमिकता परिवार को 5 किलो प्रति व्यक्ति हर महीने। अक्टूबर 2026 के प्राइस चार्ट में गेहूं-चावल की दर ₹0 है।" },
    { q: "MP राशन कार्ड e-KYC कैसे करें?", a: "m-Ration Mitra ऐप में आधार जोड़कर, या अपनी राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर।" },
    { q: "मध्य प्रदेश राशन हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1967 और CM हेल्पलाइन 181। समग्र ID से जुड़ी दिक्कत के लिए 0755-2700800।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड", text: "असंगठित श्रमिक पंजीकरण" },
    { href: "/states/madhya-pradesh-labour-card.html", emoji: "👷", title: "मध्य प्रदेश लेबर कार्ड", text: "श्रमिक पंजीकरण" },
    { href: "/states/madhya-pradesh-income-certificate.html", emoji: "💰", title: "मध्य प्रदेश आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/madhya-pradesh-caste-certificate.html", emoji: "📜", title: "मध्य प्रदेश जाति प्रमाण पत्र", text: "आवेदन का तरीका" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://rationmitra.nic.in/", label: "📋 राशन मित्र पोर्टल" },
    { href: "https://epos.mp.gov.in/SRC_Trans_Int.jsp", label: "🔎 RC Details देखें" },
  ],
};
