import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/DN: Department of Food and Civil Supplies and Consumer
//   Affairs, UT of DNH and DD (fcs-dmn-dd, 0260-2230922); State Food
//   Department website fcs.dnh.nic.in; AePDS epos.ddd.gov.in; "Ration card
//   Management (RCMS) and Grievance Redressal System" rcms.ddd.gov.in; 115 FPS;
//   57,781 ration cards (AAY 4,974, PHH 52,807). Old nfsa.gov.in/State/DD
//   page: grievance pgrams.daman.nic.in, helpdesk 1967.
// - diu.gov.in (District Diu, Food and Civil Supply Department, pages updated
//   2022–2023): NFSA in the UT from 1 Nov 2015; 100% Aadhaar seeding; ePoS in
//   all FPS of Daman and Diu; PHH 4.5 kg rice + 0.5 kg wheat per person, AAY
//   33 kg rice + 2 kg wheat (35 kg per card); services: new card on change of
//   State with surrender certificate (criteria: annual income below
//   ₹1,00,000 / BPL / kutcha house; 7 days; documents), inclusion/deletion of
//   members (1 day; documents), separate card, duplicate card, transfer,
//   address change; grievance 1967 / 1800-345-3611 (24x7 call centre), ONORC
//   14445, pgrams.daman.nic.in; Diu office 02875-252441.
// - Rajya Sabha answers (6 Aug 2024 and 4 Feb 2025, via search extracts):
//   cash transfer of food subsidy runs on a pilot basis in urban areas of
//   Dadra and Nagar Haveli since March 2016; remaining areas get grain from
//   FPS; in Feb 2025 DBT was implemented only in Chandigarh, Puducherry and
//   DNH.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the cash amount per person in DNH urban areas, an online
// new-card application (rcms.ddd.gov.in and fcs.dnh.nic.in did not resolve
// from here), and DNH/Daman district-level procedures (only Diu's pages were
// readable). The old page's "e-Services Daman online apply" claim was dropped.
export const dadraNagarHaveliDamanDiuRationCard: DocGuide = {
  state: { slug: "dadra-nagar-haveli-daman-diu", hi: "दादरा नगर हवेली और दमन दीव" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Dadra & Nagar Haveli and Daman & Diu Ration Card 2026: Apply & Status",
  description: "दादरा नगर हवेली और दमन दीव राशन कार्ड 2026: AAY/PHH कार्ड, शहरी DNH में अनाज की जगह DBT पैसा, नया कार्ड और नाम जोड़ने के कागज़, हेल्पलाइन 1967 / 1800-345-3611।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "दादरा नगर हवेली और दमन दीव राशन कार्ड 2026: आवेदन, कागज़, DBT और हेल्पलाइन",
  lead: "इस केंद्र शासित प्रदेश में राशन कार्ड खाद्य एवं नागरिक आपूर्ति विभाग बनाता है। NFSA यहां 1 नवंबर 2015 से लागू है। दादरा नगर हवेली के शहरी इलाके में अनाज की जगह बैंक खाते में पैसा (DBT) मिलता है, बाकी जगह राशन दुकान से अनाज।",
  facts: [
    ["UT में कार्ड", "57,781 (NFSA पोर्टल)"],
    ["राशन दुकानें", "115"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1967, 1800-345-3611"],
  ],
  notice: "<strong>शहरी दादरा नगर हवेली:</strong> संसद में दिए जवाबों के अनुसार यहां मार्च 2016 से (पायलट के रूप में) अनाज की जगह पैसा सीधे बैंक खाते में (DBT) भेजा जाता है, और फरवरी 2025 तक यह व्यवस्था चल रही थी। इसके लिए परिवार के सदस्यों का आधार और बैंक खाता राशन कार्ड से जुड़ा होना ज़रूरी है।",
  sections: [
    {
      id: "prakar",
      title: "कार्ड के प्रकार और हर महीने का राशन",
      intro: "NFSA पोर्टल के अनुसार UT में <strong>57,781 राशन कार्ड</strong> और <strong>115 राशन दुकानें</strong> हैं। दीव के खाद्य विभाग के पेज पर राशन इस तरह लिखा है:",
      table: {
        head: ["कार्ड", "कार्ड (NFSA पोर्टल)", "चावल", "गेहूं"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "4,974", "33 किलो प्रति कार्ड", "2 किलो (कुल 35 किलो प्रति कार्ड)"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "52,807", "4.5 किलो प्रति व्यक्ति", "0.5 किलो (कुल 5 किलो प्रति व्यक्ति)"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। चावल-गेहूं का बंटवारा बदल सकता है; अपनी राशन दुकान पर पूछें।" },
    },
    {
      id: "dbt",
      title: "अनाज या पैसा (DBT)",
      list: [
        "<strong>दादरा नगर हवेली के शहरी इलाके:</strong> मार्च 2016 से पायलट के रूप में अनाज की जगह पैसा बैंक खाते में (cash transfer of food subsidy)।",
        "<strong>बाकी इलाके (ग्रामीण DNH, दमन, दीव):</strong> राशन दुकान से अनाज, PoS मशीन पर आधार से।",
        "फरवरी 2025 में संसद को बताया गया कि यह नकद योजना देश में सिर्फ चंडीगढ़, पुडुचेरी और दादरा नगर हवेली में चल रही है।",
      ],
      callout: { kind: "warn", html: "हर महीने कितना पैसा आता है, यह हमें किसी सरकारी पेज पर नहीं मिला। पैसा न आए तो पहले बैंक में आधार-सीडिंग जांचें, फिर 1967 या 1800-345-3611 पर शिकायत करें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      intro: "दीव ज़िले की सेवा-सूची में नए कार्ड के लिए ये परिवार पात्र बताए गए हैं:",
      list: [
        "जिनकी <strong>सालाना आय ₹1,00,000 से कम</strong> है",
        "सभी <strong>BPL (गरीबी रेखा से नीचे)</strong> परिवार",
        "<strong>कच्चे मकान</strong> में रहने वाले सभी परिवार",
      ],
      callout: { kind: "info", html: "एक परिवार का एक ही राशन कार्ड होता है। NFSA के अनुसार कार्ड में परिवार की सबसे बड़ी महिला सदस्य (18 साल या ज़्यादा) मुखिया मानी जाती है।" },
    },
    {
      id: "kagaz",
      title: "नए कार्ड के लिए ज़रूरी कागज़",
      intro: "दीव ज़िले के खाद्य विभाग के अनुसार (दूसरे राज्य से आकर नया कार्ड बनवाने पर):",
      list: [
        "आवेदन पत्र और भरा हुआ <strong>घोषणा पत्र</strong>",
        "मामलतदार का <strong>आय प्रमाण पत्र</strong> (₹1 लाख से कम)",
        "परिवार के सभी सदस्यों का <strong>आधार</strong>",
        "<strong>गैस कनेक्शन</strong> का विवरण और <strong>बैंक पासबुक</strong>",
        "मुखिया की <strong>दो पासपोर्ट साइज़ रंगीन फोटो</strong>",
        "<strong>बिजली बिल</strong>; किराये पर हों तो मकान मालिक का NOC",
        "पुराने राज्य का <strong>सरेंडर सर्टिफिकेट</strong>",
      ],
      html: "<p>दीव में यह सेवा <strong>7 दिन</strong> में देने की समय-सीमा लिखी है।</p>",
    },
    {
      id: "avedan",
      title: "आवेदन कहां करें",
      steps: [
        "अपने ज़िले (सिलवासा/दादरा नगर हवेली, दमन या दीव) के <strong>खाद्य एवं नागरिक आपूर्ति कार्यालय</strong> से फॉर्म लें।",
        "फॉर्म भरकर ऊपर बताए कागज़ लगाएं और कार्यालय में जमा करें; रसीद लें।",
        "जांच के बाद कार्ड बनकर नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "NFSA पोर्टल पर UT की राशन कार्ड प्रबंधन प्रणाली (RCMS) का पता rcms.ddd.gov.in दिया गया है, पर 13 अक्टूबर 2026 को यह हमारी जांच में नहीं खुला और ऑनलाइन नए आवेदन की पुष्टि नहीं हो सकी। दीव कार्यालय: कलेक्टोरेट, फोर्ट रोड, दीव, फोन 02875-252441।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और दूसरी सेवाएं",
      intro: "दीव ज़िले के अनुसार <strong>नाम जोड़ना/हटाना 1 दिन</strong> में होता है। इसके लिए:",
      list: [
        "बच्चे का नाम जोड़ने के लिए <strong>जन्म प्रमाण पत्र की कॉपी और आधार</strong>",
        "बाहर से आए सदस्य के लिए मूल स्थान का <strong>कैंसलेशन सर्टिफिकेट</strong> (मूल)",
        "नाम हटाने के लिए <strong>मृत्यु प्रमाण पत्र</strong> की कॉपी या आवेदन में कारण",
      ],
      html: "<p>इसके अलावा अलग कार्ड (परिवार बंटने पर), डुप्लीकेट कार्ड, एक कार्ड से दूसरे में नाम ले जाना, कार्ड दूसरे इलाके में ले जाना और पता बदलने की सेवाएं भी खाद्य कार्यालय में होती हैं।</p>",
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> राशन दुकान की PoS मशीन पर आधार से अंगूठा/उंगली लगाकर होती है। विभाग के अनुसार UT में सभी कार्डों की आधार-सीडिंग पूरी है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। ONORC हेल्पलाइन: <strong>14445</strong>।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हक और शिकायत।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong> या <strong>1800-345-3611</strong> (टोल-फ्री): PDS शिकायत कॉल सेंटर, 24 घंटे",
        "<strong>14445</strong>: One Nation One Ration Card हेल्पलाइन",
        "<strong>02875-252441</strong>: खाद्य विभाग, दीव",
        '<strong>ऑनलाइन शिकायत:</strong> UT की शिकायत प्रणाली <a href="http://pgrams.daman.nic.in/" target="_blank" rel="noopener nofollow">pgrams.daman.nic.in</a> या <a href="https://nfsa.gov.in/" target="_blank" rel="noopener nofollow">nfsa.gov.in</a>',
      ],
    },
  ],
  official: [
    { href: "https://diu.gov.in/list-of-departments/food-and-civil-supply-department/", title: "खाद्य एवं नागरिक आपूर्ति विभाग, दीव: सेवाएं, कागज़, शिकायत" },
    { href: "https://epos.ddd.gov.in/", title: "AePDS: दादरा नगर हवेली और दमन दीव (राशन वितरण)" },
    { href: "https://nfsa.gov.in/State/DN", title: "NFSA पोर्टल: दादरा नगर हवेली और दमन दीव का पेज" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "दादरा नगर हवेली और दमन दीव में नया राशन कार्ड कैसे बनवाएं?", a: "अपने ज़िले के खाद्य एवं नागरिक आपूर्ति कार्यालय में फॉर्म, आय प्रमाण पत्र, सभी सदस्यों का आधार, बैंक पासबुक, फोटो, बिजली बिल और (दूसरे राज्य से आए हों तो) सरेंडर सर्टिफिकेट जमा करें। दीव में इसकी समय-सीमा 7 दिन लिखी है।" },
    { q: "क्या दादरा नगर हवेली में राशन की जगह पैसा मिलता है?", a: "संसद में दिए जवाबों (अगस्त 2024 और फरवरी 2025) के अनुसार दादरा नगर हवेली के शहरी इलाकों में मार्च 2016 से अनाज की जगह पैसा बैंक खाते में आता है। ग्रामीण DNH, दमन और दीव में राशन दुकान से अनाज मिलता है।" },
    { q: "राशन कार्ड पर कितना अनाज मिलता है?", a: "AAY कार्ड पर 35 किलो (दीव: 33 किलो चावल + 2 किलो गेहूं) और PHH पर 5 किलो प्रति व्यक्ति (4.5 किलो चावल + 0.5 किलो गेहूं), 31 दिसंबर 2028 तक मुफ्त।" },
    { q: "राशन कार्ड में बच्चे का नाम कैसे जोड़ें?", a: "जन्म प्रमाण पत्र की कॉपी और बच्चे का आधार लेकर खाद्य कार्यालय में आवेदन करें। दीव में यह 1 दिन में होता है।" },
    { q: "राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "1967 या टोल-फ्री 1800-345-3611 (24 घंटे), ONORC के लिए 14445। ऑनलाइन शिकायत pgrams.daman.nic.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/dadra-nagar-haveli-daman-diu-income-certificate.html", emoji: "💰", title: "DNH-DD आय प्रमाण पत्र", text: "राशन कार्ड के लिए आय का प्रमाण" },
    { href: "/states/dadra-nagar-haveli-daman-diu-domicile-certificate.html", emoji: "🏠", title: "DNH-DD निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/dadra-nagar-haveli-daman-diu-birth-certificate.html", emoji: "👶", title: "DNH-DD जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/dadra-nagar-haveli-daman-diu.html", emoji: "📍", title: "DNH-DD CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://diu.gov.in/service-category/food-and-civil-supply-department/", label: "📋 सेवाएं और कागज़ (दीव)" },
    { href: "/service/csc-locator/dadra-nagar-haveli-daman-diu.html", label: "📍 नज़दीकी CSC" },
  ],
};
