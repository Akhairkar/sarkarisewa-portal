import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/TR: Department of Food, Civil Supplies and Consumer
//   Affairs, Tripura (Director 0381-2323780 / department 0381-2326308);
//   "Don't have Ration Card in Tripura? Apply here online" →
//   epdstr.gov.in/PublicLogin/frmPublicLogin.aspx; state food department
//   website fcatripura.gov.in; RCMS epdstr.gov.in; FEAST feasttr.gov.in
//   ("Know Your Ration Entitlement", FrmFindRcDetails.aspx); AePDS
//   epostr.gov.in; helpdesk 1967 and 1800-345-3665; schemes AAY(S), Priority
//   Group (PG) and additional allocations (festival / flood); 1,993 FPS;
//   6,02,209 ration cards (AAY 1,11,359, PHH 4,90,850).
// - News (UNI, Oct 2026, via search extract): the department began checking
//   beneficiaries under SMART-PDS; cards with no ration lifted for six months
//   in a row are treated as "silent" and made inactive for a time; three
//   months given to complete e-KYC.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; dfpd 1967;
//   free grain 1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: Tripura's own PHH/PG inclusion criteria, an official document
// list, fees and time limits (epdstr.gov.in and fcatripura.gov.in reset the
// connection from here; only third-party lists found). The old page's
// "e-District Tripura" route was not confirmed.
export const tripuraRationCard: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Tripura Ration Card 2026: Apply & Status",
  description: "त्रिपुरा राशन कार्ड 2026: AAY और प्राथमिकता (PHH/PG) कार्ड, epdstr.gov.in पर ऑनलाइन आवेदन, राशन का हक कैसे देखें, e-KYC, \"साइलेंट\" कार्ड और हेल्पलाइन 1800-345-3665 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "त्रिपुरा राशन कार्ड 2026: ऑनलाइन आवेदन, राशन का हक, e-KYC और हेल्पलाइन",
  lead: "त्रिपुरा में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। NFSA के तहत यहां अंत्योदय (AAY) और प्राथमिकता (PHH, जिसे NFSA पोर्टल पर Priority Group भी लिखा है) कार्ड हैं। NFSA पोर्टल के अनुसार नए कार्ड का ऑनलाइन आवेदन epdstr.gov.in पर होता है।",
  facts: [
    ["राज्य में कार्ड", "6.02 लाख (NFSA पोर्टल)"],
    ["राशन दुकानें", "1,993"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-345-3665, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> अक्टूबर 2026 की खबरों के अनुसार विभाग राशन कार्डों की जांच कर रहा है: <strong>लगातार 6 महीने राशन न उठाने वाले कार्ड \"साइलेंट\" मानकर कुछ समय के लिए बंद</strong> किए जा सकते हैं। हर सदस्य का e-KYC पूरा रखें और हर महीने राशन उठाएं।",
  sections: [
    {
      id: "prakar",
      title: "त्रिपुरा में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के अनुसार त्रिपुरा में <strong>6,02,209 राशन कार्ड</strong> और <strong>1,993 राशन दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "कार्ड (NFSA पोर्टल)", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "1,11,359", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH / Priority Group)</strong>", "4,90,850", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। त्योहार या बाढ़ के समय राज्य को अतिरिक्त आवंटन भी मिलता है (NFSA पोर्टल पर \"Tripura Festival\" और \"Tripura Flood\" आवंटन दर्ज हैं)।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। NFSA के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "त्रिपुरा की PHH पात्रता की पूरी शर्तें हमें किसी सरकारी पेज पर नहीं मिलीं। आवेदन से पहले पोर्टल पर लिखी शर्तें पढ़ें या अपने सब-डिवीज़न के खाद्य कार्यालय से पूछें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या कार्यालय मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "त्रिपुरा के <strong>पते का प्रमाण</strong>",
        "मुखिया (सबसे बड़ी महिला) की <strong>फोटो</strong> और <strong>बैंक खाता</strong> विवरण",
        "पहले किसी और राज्य/कार्ड में नाम था तो वहां का <strong>सरेंडर / नाम हटने का सर्टिफिकेट</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        'NFSA पोर्टल पर दिया गया लिंक <a href="https://epdstr.gov.in/PublicLogin/frmPublicLogin.aspx" target="_blank" rel="noopener nofollow">epdstr.gov.in → Public Login</a> खोलें।',
        "मोबाइल नंबर से रजिस्टर/लॉगिन करें और नए राशन कार्ड का फॉर्म खोलें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; पता और बाकी जानकारी दें।",
        "मांगे गए कागज़ अपलोड करके फॉर्म जमा करें और <strong>आवेदन नंबर</strong> नोट करें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को epdstr.gov.in हमारी जांच में नहीं खुला। पोर्टल न खुले तो कुछ समय बाद कोशिश करें, या अपने सब-डिवीज़न के खाद्य एवं नागरिक आपूर्ति कार्यालय में पूछें कि आवेदन कहां लिया जा रहा है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई बहू) का नाम जोड़ने के लिए उसका <strong>आधार</strong> और जन्म प्रमाण पत्र / पुराने कार्ड से नाम हटने का सबूत रखें।",
        "मृत्यु होने पर मृत्यु प्रमाण पत्र के साथ नाम हटवाएं।",
        "बदलाव का आवेदन epdstr.gov.in के Public Login से या खाद्य कार्यालय में करें।",
      ],
    },
    {
      id: "status",
      title: "राशन का हक और कार्ड का विवरण कैसे देखें",
      steps: [
        'NFSA पोर्टल पर दिया गया <a href="https://feasttr.gov.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">Know Your Ration Entitlement (FEAST Tripura)</a> पेज खोलें।',
        "राशन कार्ड नंबर और स्क्रीन पर दिख रहे अक्षर (कैप्चा) डालें।",
        "कार्ड पर इस महीने मिलने वाला राशन दिख जाएगा।",
      ],
      html: "<p>केंद्र सरकार के <strong>Mera Ration ऐप</strong> में भी राशन कार्ड नंबर से सदस्य, हक और लेन-देन देखे जा सकते हैं।</p>",
    },
    {
      id: "ekyc",
      title: "e-KYC, \"साइलेंट\" कार्ड और One Nation One Ration Card",
      list: [
        "<strong>e-KYC:</strong> राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है। अक्टूबर 2026 की खबरों के अनुसार विभाग ने e-KYC पूरा करने के लिए <strong>तीन महीने</strong> दिए हैं।",
        "<strong>साइलेंट कार्ड:</strong> खबरों के अनुसार लगातार 6 महीने राशन न उठाने पर कार्ड कुछ समय के लिए बंद होकर उसका आवंटन रुक सकता है। ऐसा हो तो खाद्य कार्यालय में जाकर e-KYC और जांच करवाएं।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-3665</strong>: NFSA पोर्टल पर त्रिपुरा का हेल्पडेस्क नंबर",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        "<strong>Mera Ration ऐप</strong> से भी शिकायत दर्ज होती है",
      ],
    },
  ],
  official: [
    { href: "https://epdstr.gov.in/", title: "ePDS त्रिपुरा (राशन कार्ड प्रबंधन प्रणाली)" },
    { href: "https://feasttr.gov.in/FrmFindRcDetails.aspx", title: "FEAST त्रिपुरा: Know Your Ration Entitlement" },
    { href: "http://www.fcatripura.gov.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, त्रिपुरा" },
    { href: "https://nfsa.gov.in/State/TR", title: "NFSA पोर्टल: त्रिपुरा का पेज (कार्ड, दुकानें, हेल्पलाइन, लिंक)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "त्रिपुरा में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "NFSA पोर्टल के अनुसार epdstr.gov.in के Public Login पेज पर रजिस्टर करके नए राशन कार्ड का फॉर्म भरें, सभी सदस्यों का आधार दें और आवेदन नंबर संभालें। पोर्टल न खुले तो सब-डिवीज़न के खाद्य कार्यालय में पूछें।" },
    { q: "त्रिपुरा में राशन कार्ड पर कितना राशन मिलता है, कैसे देखें?", a: "feasttr.gov.in के Know Your Ration Entitlement पेज पर कार्ड नंबर डालकर देखें। NFSA के तहत AAY पर 35 किलो प्रति परिवार और PHH पर 5 किलो प्रति व्यक्ति, 31 दिसंबर 2028 तक मुफ्त।" },
    { q: "साइलेंट राशन कार्ड क्या है?", a: "अक्टूबर 2026 की खबरों के अनुसार जिन कार्डों पर लगातार 6 महीने राशन नहीं उठाया गया, उन्हें \"साइलेंट\" मानकर कुछ समय के लिए बंद किया जा सकता है। हर महीने राशन उठाएं और e-KYC पूरा रखें।" },
    { q: "त्रिपुरा में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 6,02,209 कार्ड: AAY 1,11,359 और PHH 4,90,850। राज्य में 1,993 राशन दुकानें हैं।" },
    { q: "त्रिपुरा राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार त्रिपुरा का हेल्पडेस्क 1800-345-3665 है; 1967 भी काम करता है।" },
    { q: "क्या त्रिपुरा का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/tripura-income-certificate.html", emoji: "💰", title: "त्रिपुरा आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/tripura-domicile-certificate.html", emoji: "🏠", title: "त्रिपुरा निवास प्रमाण पत्र", text: "स्थायी निवास प्रमाण" },
    { href: "/states/tripura-birth-certificate.html", emoji: "👶", title: "त्रिपुरा जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/tripura.html", emoji: "📍", title: "त्रिपुरा CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://epdstr.gov.in/PublicLogin/frmPublicLogin.aspx", label: "📝 ऑनलाइन आवेदन (ePDS)" },
    { href: "https://feasttr.gov.in/FrmFindRcDetails.aspx", label: "🔎 राशन का हक देखें" },
  ],
};
