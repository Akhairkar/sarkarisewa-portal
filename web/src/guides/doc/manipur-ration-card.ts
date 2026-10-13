import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/MN: Department of Consumer Affairs, Food and Public
//   Distribution (CAF&PD), Manipur; citizen service "Don't have Ration Card in
//   Manipur? Apply here online." → rcmsmanipur.nic.in/PublicLogin; Ration Card
//   Management System rcmsmanipur.nic.in; FEAST feastmn.nic.in (RC details:
//   FrmFindRcDetails.aspx); AePDS epos.nic.in/manipur; helpdesk 03852455496
//   and "1800345382" (printed with only 10 digits); schemes AAY and PHH;
//   2,448 fair price shops; 5,82,253 ration cards (AAY 63,887, PHH 5,18,366).
// - nfsa.gov.in/portal/State_UT_Online_Grievance_AA: Manipur's online
//   grievance link is rcmsmanipur.nic.in.
// - manipur.gov.in/?page_id=1683 (department page): CAF&PD handles PDS,
//   opening of fair price shops and distribution of ration cards.
// - nfsa.gov.in Coverage/Salient Features; dfpd.gov.in toll-free 1967; free
//   grain 1.1.2024–31.12.2028 per GoI notification of 04.12.2023; Mera
//   Ration app / ONORC (national).
// Left out / vague: rcmsmanipur.nic.in and feastmn.nic.in did not open from
// here, so the online form's fields, an official document list, fees and
// time limits are not stated. The 1800 toll-free number is not printed: NFSA
// shows it with a missing digit and only private sites give 1800-345-3821.
// The old page's "ServicePlus Manipur" claim was not confirmed and is dropped.
export const manipurRationCard: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Manipur Ration Card 2026: Apply & Status",
  description: "मणिपुर राशन कार्ड 2026: AAY और PHH कार्ड, rcmsmanipur.nic.in पर ऑनलाइन आवेदन, FEAST पोर्टल पर कार्ड का विवरण, नाम जोड़ना, e-KYC और हेल्पलाइन 0385-2455496 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मणिपुर राशन कार्ड 2026: ऑनलाइन आवेदन, कार्ड का विवरण, e-KYC और शिकायत",
  lead: "मणिपुर में राशन कार्ड उपभोक्ता मामले, खाद्य एवं सार्वजनिक वितरण विभाग (CAF&PD) बनाता है। NFSA पोर्टल के अनुसार नए कार्ड का ऑनलाइन आवेदन राज्य की राशन कार्ड प्रबंधन प्रणाली rcmsmanipur.nic.in पर होता है। ऑनलाइन न हो पाए तो अपने ज़िले के CAF&PD (आपूर्ति) कार्यालय से संपर्क करें।",
  facts: [
    ["राज्य में कार्ड", "5,82,253 (NFSA पोर्टल)"],
    ["राशन दुकानें", "2,448"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "0385-2455496, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "मणिपुर में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल के मणिपुर पेज के अनुसार राज्य में <strong>5,82,253 राशन कार्ड</strong> हैं, जिन्हें <strong>2,448 उचित मूल्य दुकानों</strong> से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "63,887", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "5,18,366", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
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
      callout: { kind: "warn", html: "NFSA में हर राज्य के लिए लाभार्थियों की संख्या तय है। नई जगह खाली होने पर ही नया PHH/AAY कार्ड बनता है, इसलिए मंज़ूरी में समय लग सकता है।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "राज्य की आधिकारिक दस्तावेज़ सूची हम नहीं देख पाए। ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या दफ़्तर मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "मणिपुर के <strong>पते का प्रमाण</strong> और मुखिया की <strong>फोटो</strong>",
        "बच्चों के लिए <strong>जन्म प्रमाण पत्र</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        '<a href="https://rcmsmanipur.nic.in/PublicLogin/frmPublicLogin.aspx" target="_blank" rel="noopener nofollow">rcmsmanipur.nic.in (Public Login)</a> खोलें। NFSA पोर्टल पर यही लिंक "Don\'t have Ration Card in Manipur? Apply here online" के नाम से दिया गया है।',
        "पोर्टल पर रजिस्टर/लॉगिन करें और नए राशन कार्ड का फॉर्म खोलें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; पता और बाकी जानकारी दें।",
        "मांगे गए कागज़ अपलोड करके फॉर्म जमा करें और <strong>आवेदन नंबर</strong> नोट करें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को rcmsmanipur.nic.in हमारी जांच में नहीं खुला। पोर्टल न खुले तो कुछ समय बाद कोशिश करें, या अपने <strong>ज़िले के CAF&PD (आपूर्ति) कार्यालय</strong> में पूछें कि आवेदन कहां लिया जा रहा है। ज़िला कार्यालयों की सूची NFSA पोर्टल के \"District Food and Supply Offices\" पेज पर है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> बच्चे या शादी के बाद आई सदस्य का नाम जोड़ने के लिए RCMS पोर्टल या ज़िला कार्यालय में आवेदन करें। सदस्य का आधार साथ रखें।",
        "<strong>नाम हटाना:</strong> मृत्यु या परिवार से अलग होने पर नाम हटवाएं।",
        "<strong>दूसरे राज्य/ज़िले में जाने पर:</strong> पुराना कार्ड सरेंडर करके सर्टिफिकेट लें; नई जगह यही सबूत मांगा जाता है।",
      ],
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      steps: [
        '<a href="https://feastmn.nic.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">FEAST मणिपुर → RC Details</a> खोलें (NFSA पोर्टल पर दिया गया लिंक)।',
        "अपना <strong>राशन कार्ड नंबर</strong> डालें।",
        "कार्ड में दर्ज सदस्य और विवरण दिख जाएंगे।",
      ],
      html: "<p>पोर्टल न खुले तो केंद्र सरकार के <strong>Mera Ration ऐप</strong> में राशन कार्ड नंबर या आधार से भी कार्ड के सदस्य और हर महीने का हक देख सकते हैं।</p>",
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
        "<strong>0385-2455496</strong>: NFSA पोर्टल पर मणिपुर का हेल्पडेस्क नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://rcmsmanipur.nic.in/" target="_blank" rel="noopener nofollow">rcmsmanipur.nic.in</a> (NFSA पोर्टल पर मणिपुर की शिकायत के लिए यही लिंक है)',
        "ज़िला CAF&PD (आपूर्ति) कार्यालय में लिखित शिकायत भी दे सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://rcmsmanipur.nic.in/", title: "RCMS मणिपुर: राशन कार्ड प्रबंधन प्रणाली (ऑनलाइन आवेदन)" },
    { href: "https://feastmn.nic.in/", title: "FEAST मणिपुर: RC विवरण और रिपोर्ट" },
    { href: "https://manipur.gov.in/?page_id=1683", title: "CAF&PD विभाग, मणिपुर सरकार" },
    { href: "https://nfsa.gov.in/State/MN", title: "NFSA पोर्टल: मणिपुर का पेज (लिंक, हेल्पलाइन, संख्या)" },
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", title: "NFSA: ज़िला खाद्य एवं आपूर्ति कार्यालयों की सूची" },
  ],
  faq: [
    { q: "मणिपुर में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "rcmsmanipur.nic.in के Public Login पर रजिस्टर करके नए कार्ड का फॉर्म भरें, सभी सदस्यों का आधार दें और आवेदन नंबर संभालें। NFSA पोर्टल पर मणिपुर के ऑनलाइन आवेदन के लिए यही लिंक है। पोर्टल न खुले तो ज़िला CAF&PD कार्यालय जाएं।" },
    { q: "मणिपुर राशन कार्ड का विवरण कैसे देखें?", a: "feastmn.nic.in के RC Details पेज पर राशन कार्ड नंबर डालें, या Mera Ration ऐप में कार्ड नंबर/आधार से देखें।" },
    { q: "मणिपुर में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "मणिपुर में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 5,82,253 कार्ड: AAY 63,887 और PHH 5,18,366। राज्य में 2,448 राशन दुकानें हैं।" },
    { q: "मणिपुर राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल पर मणिपुर का हेल्पडेस्क 0385-2455496 है; केंद्र का टोल-फ्री 1967 भी है। ऑनलाइन शिकायत rcmsmanipur.nic.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/manipur-income-certificate.html", emoji: "💰", title: "मणिपुर आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/manipur-domicile-certificate.html", emoji: "🏠", title: "मणिपुर निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/manipur-birth-certificate.html", emoji: "👶", title: "मणिपुर जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/manipur-labour-card.html", emoji: "👷", title: "मणिपुर लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://rcmsmanipur.nic.in/PublicLogin/frmPublicLogin.aspx", label: "📝 ऑनलाइन आवेदन (RCMS)" },
    { href: "https://feastmn.nic.in/FrmFindRcDetails.aspx", label: "🔎 RC विवरण देखें" },
  ],
};
