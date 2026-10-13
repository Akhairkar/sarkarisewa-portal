import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/LD: Food and Civil Supplies Department Lakshadweep
//   (dirfcs-lk, 04896-263703); "Don't have Ration Card in Lakshadweep? Apply
//   here online" → nfsa.gov.in/sso/frmPublicLogin.aspx; state food
//   department website lakpds.gov.in; FPS automation epos.nic.in/ld;
//   helpdesk 1800-425-3186 and 1967; schemes APL, AAY, PHH(NFSA),
//   Tide-over; 38 FPS; 4,629 ration cards (AAY 1,114, PHH 3,515).
// - lakpds.gov.in (Public Distribution System Portal, Food & Civil Supplies
//   Department, Lakshadweep, read 13 Oct 2026): PDS through co-operative
//   societies (LCMF as wholesale agent, 10 primary co-operative supply &
//   marketing societies, one in each inhabited island, run the FPS); "The
//   competent authority to issue ration cards in each island is Sub
//   Divisional Officer (SDO)"; FAQ: new / temporary ration card and
//   modification — download the form from the Downloads menu, fill it,
//   attach photograph of head of family, submit to SDO; Downloads: "New
//   Ration card" form (Downloads/RC-Form.pdf); PDS toll free 1800-425-3186;
//   "New Ration Card" link to nfsa.gov.in/sso; notices on District Grievance
//   Redressal Officer (13-08-2021), Lakshadweep Food Security Rules 2016.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the "PDS Commodity Details" price table on lakpds.gov.in (shows
// pre-2023 rice prices, so not used); a document list (the RC form PDF is a
// scan we could not read); fees and time limits. The old page's
// "Lakshadweep e-Portal" route was not confirmed.
export const lakshadweepRationCard: DocGuide = {
  state: { slug: "lakshadweep", hi: "लक्षद्वीप" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Lakshadweep Ration Card 2026: Apply & Status",
  description: "लक्षद्वीप राशन कार्ड 2026: AAY, PHH और APL कार्ड, हर द्वीप के SDO से नया कार्ड, lakpds.gov.in से फॉर्म, सहकारी राशन दुकानें, e-KYC और हेल्पलाइन 1800-425-3186।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लक्षद्वीप राशन कार्ड 2026: नया कार्ड, फॉर्म, राशन दुकानें और हेल्पलाइन",
  lead: "लक्षद्वीप में राशन व्यवस्था खाद्य एवं नागरिक आपूर्ति विभाग चलाता है, पर राशन कार्ड हर द्वीप के उप-मंडल अधिकारी (SDO) जारी करते हैं। नए कार्ड का फॉर्म विभाग की वेबसाइट lakpds.gov.in से डाउनलोड करके, मुखिया की फोटो लगाकर SDO के पास जमा होता है।",
  facts: [
    ["UT में कार्ड", "4,629 (NFSA पोर्टल)"],
    ["राशन दुकानें", "38 (सहकारी)"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-425-3186, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार वाली PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए।",
  sections: [
    {
      id: "prakar",
      title: "लक्षद्वीप में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के अनुसार लक्षद्वीप में <strong>4,629 NFSA राशन कार्ड</strong> और <strong>38 राशन दुकानें</strong> हैं। पोर्टल पर यहां APL, AAY, PHH और Tide-over योजनाएं दर्ज हैं।",
      table: {
        head: ["कार्ड", "कार्ड (NFSA पोर्टल)", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "1,114", "<strong>35 किलो प्रति परिवार</strong>, मुफ्त"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "3,515", "<strong>5 किलो प्रति व्यक्ति</strong>, मुफ्त"],
          ["<strong>APL</strong>", "—", "NFSA से बाहर; मात्रा और दाम विभाग तय करता है"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। APL कार्ड पर इस समय क्या और किस दाम पर मिल रहा है, अपनी सहकारी राशन दुकान पर पूछें।" },
    },
    {
      id: "vyavastha",
      title: "राशन कैसे पहुंचता है: सहकारी दुकानें",
      intro: "विभाग की वेबसाइट के अनुसार लक्षद्वीप में राशन व्यवस्था सहकारी समितियों से चलती है:",
      list: [
        "<strong>लक्षद्वीप कोऑपरेटिव मार्केटिंग फेडरेशन (LCMF)</strong> थोक एजेंट है, जो FCI से अनाज लेकर द्वीपों तक जहाज़ से पहुंचाता है।",
        "हर बसे हुए द्वीप पर एक, कुल <strong>10 प्राथमिक सहकारी आपूर्ति एवं विपणन समितियां</strong> अपनी राशन दुकानों से अनाज बांटती हैं।",
        "भौगोलिक दिक्कतों के कारण केंद्र सरकार चावल-गेहूं का आवंटन साल भर के लिए एक साथ करती है।",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कैसे करें",
      steps: [
        '<a href="https://lakpds.gov.in/Downloads.aspx" target="_blank" rel="noopener nofollow">lakpds.gov.in → Downloads</a> से <strong>"New Ration card"</strong> फॉर्म डाउनलोड करें (या SDO कार्यालय से लें)।',
        "फॉर्म में मुखिया और हर सदस्य की जानकारी भरें।",
        "<strong>परिवार के मुखिया की फोटो</strong> लगाएं; सभी सदस्यों का आधार और पिछला कार्ड हो तो उसका सरेंडर सर्टिफिकेट साथ रखें।",
        "फॉर्म अपने द्वीप के <strong>उप-मंडल अधिकारी (SDO)</strong> के कार्यालय में जमा करें। राशन कार्ड जारी करने का अधिकार SDO के पास है।",
      ],
      callout: { kind: "info", html: "विभाग की FAQ के अनुसार <strong>अस्थायी (temporary) राशन कार्ड</strong> के लिए भी यही तरीका है। NFSA पोर्टल पर लक्षद्वीप के लिए ऑनलाइन आवेदन का लिंक <a href=\"https://nfsa.gov.in/sso/frmPublicLogin.aspx\" target=\"_blank\" rel=\"noopener nofollow\">nfsa.gov.in/sso</a> भी दिया गया है; कार्ड जारी करने का अधिकार हर हाल में SDO के पास ही है।" },
    },
    {
      id: "sadasya",
      title: "कार्ड में बदलाव, नाम जोड़ना या हटाना",
      steps: [
        "lakpds.gov.in के Downloads से <strong>Modification of Ration Card</strong> का फॉर्म लें (FAQ के अनुसार)।",
        "बदलाव (नाम जोड़ना/हटाना, पता आदि) भरें और मुखिया की फोटो लगाएं।",
        "फॉर्म SDO के पास जमा करें। नया नाम जोड़ने के लिए उस सदस्य का आधार और जन्म प्रमाण पत्र / पुराने कार्ड से नाम हटने का सबूत साथ रखें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं, जैसे पढ़ाई या इलाज के लिए मुख्य भूमि पर रहते समय।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हक, नज़दीकी दुकान और शिकायत।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-425-3186</strong>: लक्षद्वीप PDS टोल-फ्री नंबर",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        "विभाग ने <strong>ज़िला शिकायत निवारण अधिकारी</strong> नियुक्त किया है (अधिसूचना 13.08.2021)",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://nfsa.gov.in/" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> (विभाग की वेबसाइट पर दिया गया लिंक)',
      ],
    },
  ],
  official: [
    { href: "https://lakpds.gov.in/", title: "PDS पोर्टल, खाद्य एवं नागरिक आपूर्ति विभाग, लक्षद्वीप" },
    { href: "https://lakpds.gov.in/FAQ.aspx", title: "lakpds.gov.in FAQ: नया, अस्थायी कार्ड और बदलाव" },
    { href: "https://nfsa.gov.in/State/LD", title: "NFSA पोर्टल: लक्षद्वीप का पेज (कार्ड, दुकानें, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "लक्षद्वीप में नया राशन कार्ड कैसे बनवाएं?", a: "lakpds.gov.in के Downloads से New Ration card फॉर्म लें, भरकर परिवार के मुखिया की फोटो लगाएं और अपने द्वीप के SDO कार्यालय में जमा करें। राशन कार्ड SDO जारी करते हैं।" },
    { q: "लक्षद्वीप में राशन कार्ड कौन जारी करता है?", a: "विभाग की वेबसाइट के अनुसार हर द्वीप पर राशन कार्ड जारी करने का अधिकार उप-मंडल अधिकारी (SDO) के पास है, जो राजस्व अधिकारी हैं।" },
    { q: "लक्षद्वीप में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY पर 35 किलो प्रति परिवार और PHH पर 5 किलो प्रति व्यक्ति हर महीने, 31 दिसंबर 2028 तक मुफ्त। APL कार्ड की मात्रा और दाम दुकान पर पूछें।" },
    { q: "राशन दुकानें कौन चलाता है?", a: "हर बसे हुए द्वीप पर एक प्राथमिक सहकारी आपूर्ति एवं विपणन समिति राशन दुकान चलाती है; NFSA पोर्टल पर कुल 38 दुकानें दर्ज हैं।" },
    { q: "लक्षद्वीप राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "PDS टोल-फ्री 1800-425-3186 और 1967।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/lakshadweep-income-certificate.html", emoji: "💰", title: "लक्षद्वीप आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/lakshadweep-domicile-certificate.html", emoji: "🏠", title: "लक्षद्वीप निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/lakshadweep-birth-certificate.html", emoji: "👶", title: "लक्षद्वीप जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/lakshadweep.html", emoji: "📍", title: "लक्षद्वीप CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://lakpds.gov.in/Downloads/RC-Form.pdf", label: "📝 नए राशन कार्ड का फॉर्म" },
    { href: "https://nfsa.gov.in/sso/frmPublicLogin.aspx", label: "🌐 NFSA पर ऑनलाइन आवेदन" },
  ],
};
