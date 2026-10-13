import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/AR: Department of Food and Civil Supply, Arunachal
//   Pradesh (office phone 03602244290); department schemes ANNAPURNA,
//   AAY and PHH (NFSA); 1,987 fair price shops; 1,77,607 ration cards
//   (AAY 37,799, PHH 1,39,808); state food website listed as arunfcsgov.in;
//   AePDS on epos.nic.in/ap. No state helpdesk number is printed on the page.
// - nfsa.gov.in/portal/State_UT_Online_Grievance_AA: for Arunachal Pradesh
//   the online grievance link is pgportal.gov.in (CPGRAMS).
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH, State
//   sets PHH criteria, eldest woman head); dfpd.gov.in toll-free 1967; free
//   grain 1.1.2024–31.12.2028 per GoI notification of 04.12.2023; Mera Ration
//   app / ONORC (national).
// Left out / vague: the state food website (arunfcsgov.in / arunfcs.gov.in)
// and the AePDS site could not be opened from here, so we found no official
// page describing an online application, a state document list, fees or a
// state toll-free number. Third-party guides say the form goes to the District
// Supply Officer / SDO / EAC / CO and is forwarded by the Gaon Bura or a
// Panchayat member; we did not find this on an official page, so the guide
// only tells readers to ask the district office. The old page's "online apply
// at ServicePlus Arunachal" claim was not confirmed and is dropped.
export const arunachalPradeshRationCard: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Arunachal Pradesh Ration Card 2026: Apply & Status",
  description: "अरुणाचल प्रदेश राशन कार्ड 2026: AAY और PHH कार्ड, कितना मुफ्त अनाज, ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय में आवेदन, ज़रूरी कागज़, e-KYC और शिकायत के लिए 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश राशन कार्ड 2026: पात्रता, आवेदन, e-KYC और शिकायत",
  lead: "अरुणाचल प्रदेश में राशन कार्ड खाद्य एवं नागरिक आपूर्ति विभाग (Department of Food and Civil Supply) बनाता है। राष्ट्रीय खाद्य सुरक्षा कानून (NFSA) के तहत अंत्योदय (AAY) और प्राथमिकता परिवार (PHH) कार्ड बनते हैं। नए कार्ड के लिए अपने ज़िले के खाद्य एवं नागरिक आपूर्ति कार्यालय (या सब-डिवीज़न/सर्किल कार्यालय) से संपर्क करें; राज्य का कोई ऑनलाइन आवेदन पोर्टल हम पुष्टि नहीं कर पाए।",
  facts: [
    ["राज्य में कार्ड", "1,77,607 (NFSA पोर्टल)"],
    ["राशन दुकानें", "1,987"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "1967 (केंद्र सरकार)"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "अरुणाचल प्रदेश में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल के अरुणाचल प्रदेश पेज के अनुसार राज्य में <strong>1,77,607 राशन कार्ड</strong> हैं, जिन्हें <strong>1,987 उचित मूल्य दुकानों</strong> से राशन मिलता है। इनमें आधे से ज़्यादा दुकानें स्वयं सहायता समूह (SHG) और सहकारी समितियां चलाती हैं।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "37,799", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "1,39,808", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। NFSA पोर्टल पर विभाग की योजनाओं में <strong>अन्नपूर्णा (Annapurna)</strong> भी लिखी है; इसकी शर्तें ज़िला कार्यालय से पूछें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "NFSA में हर राज्य के लिए लाभार्थियों की संख्या तय है। नई जगह खाली होने पर ही नया PHH/AAY कार्ड बनता है, इसलिए आवेदन के बाद समय लग सकता है।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "राज्य की आधिकारिक दस्तावेज़ सूची हमें नहीं मिली। आम तौर पर ये चीज़ें मांगी जाती हैं (अंतिम सूची वही है जो दफ़्तर बताए):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "<strong>पते का प्रमाण</strong> और परिवार की <strong>फोटो</strong>",
        "बच्चों के लिए <strong>जन्म प्रमाण पत्र</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong> (सरेंडर सर्टिफिकेट)",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        "अपने <strong>ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय</strong> (या नज़दीकी सब-डिवीज़न/सर्किल कार्यालय) जाएं और नए राशन कार्ड का फॉर्म लें।",
        "पूछ लें कि फॉर्म पर <strong>गांव बूढ़ा, पंचायत सदस्य या किसी अधिकारी की सिफ़ारिश/हस्ताक्षर</strong> चाहिए या नहीं।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; कागज़ों की कॉपी लगाएं।",
        "फॉर्म जमा करके <strong>रसीद</strong> लें और उसका नंबर संभालें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और आपको नज़दीकी उचित मूल्य दुकान से जोड़ा जाता है।",
      ],
      callout: { kind: "info", html: "पुरानी जानकारी में \"ServicePlus से ऑनलाइन आवेदन\" लिखा मिलता है, पर 13 अक्टूबर 2026 को हम किसी आधिकारिक पेज पर इसकी पुष्टि नहीं कर पाए। विभाग की वेबसाइट भी हमारी जांच में नहीं खुली। इसलिए सबसे भरोसेमंद रास्ता ज़िला कार्यालय ही है। ज़िला कार्यालयों की सूची NFSA पोर्टल के \"District Food and Supply Offices\" पेज पर है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> बच्चे या शादी के बाद आई सदस्य का नाम जोड़ने के लिए ज़िला कार्यालय में आवेदन करें। सदस्य का आधार, बच्चे का जन्म प्रमाण पत्र और बहू के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।",
        "<strong>नाम हटाना:</strong> मृत्यु या परिवार से अलग होने पर नाम हटवाएं, ताकि कार्ड में गलत सदस्य न रहे।",
        "<strong>दूसरे राज्य/ज़िले में जाने पर:</strong> पुराना कार्ड सरेंडर करके सर्टिफिकेट लें; नई जगह यही सबूत मांगा जाता है।",
      ],
    },
    {
      id: "status",
      title: "कार्ड और राशन का विवरण कैसे देखें",
      list: [
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): राशन कार्ड नंबर या आधार से कार्ड के सदस्य, हर महीने का हक और पिछला लेन-देन।",
        "राशन लेते समय PoS मशीन की <strong>पर्ची</strong> मांगें; उसमें मिला हुआ अनाज लिखा होता है।",
        "कार्ड की स्थिति या आवेदन की जानकारी के लिए रसीद लेकर ज़िला कार्यालय से पूछें।",
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
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        "<strong>विभाग का दफ़्तर:</strong> 0360-2244290 (NFSA पोर्टल पर खाद्य एवं नागरिक आपूर्ति विभाग, अरुणाचल प्रदेश का नंबर)",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> (NFSA पोर्टल पर अरुणाचल प्रदेश के लिए यही लिंक दिया गया है)',
        "राशन कम मिले या दुकान मना करे तो ज़िला खाद्य एवं नागरिक आपूर्ति अधिकारी को लिखित शिकायत भी दे सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://nfsa.gov.in/State/AR", title: "NFSA पोर्टल: अरुणाचल प्रदेश का पेज (कार्ड, दुकानें, विभाग)" },
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", title: "NFSA: ज़िला खाद्य एवं आपूर्ति कार्यालयों की सूची" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS: ऑनलाइन शिकायत" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "अरुणाचल प्रदेश में नया राशन कार्ड कैसे बनवाएं?", a: "अपने ज़िले के खाद्य एवं नागरिक आपूर्ति कार्यालय या नज़दीकी सब-डिवीज़न/सर्किल कार्यालय से फॉर्म लें, सभी सदस्यों के आधार और कागज़ लगाकर जमा करें और रसीद संभालें। राज्य का कोई ऑनलाइन आवेदन पोर्टल हम पुष्टि नहीं कर पाए।" },
    { q: "अरुणाचल प्रदेश में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "अरुणाचल प्रदेश में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 1,77,607 कार्ड: AAY 37,799 और PHH 1,39,808। राज्य में 1,987 राशन दुकानें हैं।" },
    { q: "अरुणाचल प्रदेश राशन कार्ड की शिकायत कहां करें?", a: "केंद्र का टोल-फ्री 1967, ऑनलाइन pgportal.gov.in, या अपने ज़िला खाद्य एवं नागरिक आपूर्ति अधिकारी को लिखित शिकायत।" },
    { q: "क्या अरुणाचल का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/arunachal-pradesh-income-certificate.html", emoji: "💰", title: "अरुणाचल प्रदेश आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/arunachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "अरुणाचल प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/arunachal-pradesh-birth-certificate.html", emoji: "👶", title: "अरुणाचल प्रदेश जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/arunachal-pradesh-senior-citizen-card.html", emoji: "👴", title: "अरुणाचल प्रदेश सीनियर सिटीजन कार्ड", text: "60+ पहचान पत्र और पेंशन" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", label: "🏢 ज़िला आपूर्ति कार्यालय" },
    { href: "/service/csc-locator/arunachal-pradesh.html", label: "📍 नज़दीकी CSC" },
  ],
};
