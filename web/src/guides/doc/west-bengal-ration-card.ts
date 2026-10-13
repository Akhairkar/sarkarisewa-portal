import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/WB: schemes Annapurna, AAY and PHH; 20,241 FPS; ration
//   cards 1,40,18,620 (AAY 16,17,090, PHH 1,24,01,530); state food
//   department website food.wb.gov.in; grievance system helpdesk.wbfood.in;
//   helpdesk 1800-345-5505 and 1967.
// - wb.gov.in "Information Centre > Schemes > Rajya Khadya Suraksha Yojana"
//   (updated 26 June 2026, read through search extract; direct fetch was
//   reset): apply online through the WBPDS portal at food.wb.gov.in or in
//   person at the local food office / fair price shop; RKSY-I card issued
//   in digital or physical form; higher-income / asset-owning households
//   (vehicles, large land, income-tax payers) excluded.
// - food.wb.gov.in/food/PDS/Forms/CommonForm.pdf (Food & Supplies Dept.
//   Common Application Form, via search extract): one form for digital
//   ration card services — full-family inclusion under NFSA/RKSY, adding
//   left-out members, non-subsidised card, name/address correction, change
//   of shop; Aadhaar, mobile and date of birth of each applicant; "For Online
//   Application Please visit https://www.food.wb.gov.in".
// - Department e-Ration Card guidelines (2021): offline application at the
//   Food Inspector's office in the block; in municipal areas at the SCF&S
//   office; e-ration card downloadable after approval.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH);
//   Mera Ration 2.0 FAQ; free grain 1.1.2024–31.12.2028 per GoI notification
//   of 04.12.2023.
// Left out: per-head quantities for SPHH / RKSY-I / RKSY-II (sources
// conflict and the department entitlement page looked outdated), Duare
// Sarkar / Duare Ration (status not confirmed), fees and time limits.
// food.wb.gov.in and wbpds.wb.gov.in were not reachable from here.
export const westBengalRationCard: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "West Bengal Ration Card 2026: Apply & Status",
  description: "पश्चिम बंगाल डिजिटल राशन कार्ड 2026: AAY, PHH, SPHH, RKSY-I/II कार्ड, food.wb.gov.in पर ऑनलाइन आवेदन या फूड इंस्पेक्टर ऑफिस, नाम जोड़ना, e-KYC और हेल्पलाइन 1800-345-5505 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पश्चिम बंगाल डिजिटल राशन कार्ड 2026: आवेदन, कार्ड के प्रकार, नाम जोड़ना और हेल्पलाइन",
  lead: "पश्चिम बंगाल में राशन कार्ड खाद्य एवं आपूर्ति विभाग (Food & Supplies Department) बनाता है और यह <strong>डिजिटल राशन कार्ड</strong> कहलाता है। नए कार्ड का आवेदन विभाग के WBPDS पोर्टल food.wb.gov.in पर ऑनलाइन, या ब्लॉक के फूड इंस्पेक्टर ऑफिस (शहर में SCF&S ऑफिस) में होता है। केंद्र के NFSA कार्ड के अलावा राज्य की अपनी राज्य खाद्य सुरक्षा योजना (RKSY) के कार्ड भी बनते हैं।",
  facts: [
    ["राज्य में NFSA कार्ड", "1.40 करोड़ (NFSA पोर्टल)"],
    ["कार्ड के प्रकार", "AAY, PHH, SPHH, RKSY-I, RKSY-II"],
    ["आवेदन", "food.wb.gov.in या फूड इंस्पेक्टर ऑफिस"],
    ["हेल्पलाइन", "1800-345-5505, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार और मोबाइल नंबर डिजिटल राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए।",
  sections: [
    {
      id: "prakar",
      title: "पश्चिम बंगाल में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के पश्चिम बंगाल पेज (13 अक्टूबर 2026 को देखा गया) के अनुसार राज्य में <strong>1,40,18,620 NFSA राशन कार्ड</strong> और <strong>20,241 राशन दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "योजना", "क्या मिलता है"],
        rows: [
          ["<strong>AAY</strong> (अंत्योदय)", "NFSA (केंद्र)", "<strong>35 किलो प्रति परिवार</strong> हर महीने; NFSA पोर्टल पर 16,17,090 कार्ड"],
          ["<strong>PHH / SPHH</strong> (प्राथमिकता वाले परिवार)", "NFSA (केंद्र)", "<strong>5 किलो प्रति व्यक्ति</strong> हर महीने; NFSA पोर्टल पर PHH 1,24,01,530 कार्ड"],
          ["<strong>RKSY-I</strong>", "राज्य खाद्य सुरक्षा योजना", "रियायती अनाज; मात्रा राज्य सरकार तय करती है"],
          ["<strong>RKSY-II</strong>", "राज्य खाद्य सुरक्षा योजना", "रियायती अनाज; मात्रा राज्य सरकार तय करती है"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार NFSA (AAY और PHH) का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। RKSY कार्ड की मात्रा अलग-अलग जगह अलग लिखी मिली, इसलिए हम संख्या नहीं दे रहे; अपनी राशन दुकान या विभाग से पूछें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY और PHH/SPHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से चुने गए गरीब और प्राथमिकता वाले परिवार।",
        "<strong>RKSY:</strong> पश्चिम बंगाल सरकार की राज्य खाद्य सुरक्षा योजना। राज्य सरकार की वेबसाइट के अनुसार ज़्यादा आय या संपत्ति वाले परिवार (जैसे गाड़ी, ज़्यादा ज़मीन, आयकर देने वाले) इससे बाहर हैं।",
        "जो परिवार किसी योजना में नहीं आते, उनके लिए विभाग के फॉर्म में <strong>बिना सब्सिडी वाला (non-subsidised) कार्ड</strong> का विकल्प भी है।",
        "एक व्यक्ति का नाम <strong>एक ही राशन कार्ड</strong> में हो सकता है।",
      ],
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "विभाग के कॉमन आवेदन फॉर्म में हर सदस्य का आधार नंबर, मोबाइल नंबर और जन्म तिथि मांगी जाती है। ये चीज़ें तैयार रखें:",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "हर सदस्य की <strong>जन्म तिथि</strong>",
        "पश्चिम बंगाल के <strong>पते का प्रमाण</strong>",
        "<strong>फोटो</strong>",
        "किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया डिजिटल राशन कार्ड: आवेदन",
      steps: [
        '<strong>ऑनलाइन:</strong> विभाग का पोर्टल <a href="https://food.wb.gov.in/" target="_blank" rel="noopener nofollow">food.wb.gov.in</a> खोलें। राज्य सरकार की वेबसाइट के अनुसार WBPDS पोर्टल पर ऑनलाइन आवेदन होता है।',
        "मोबाइल नंबर OTP से सत्यापित करें, नए राशन कार्ड का विकल्प चुनें और हर सदस्य की जानकारी व आधार भरें।",
        "फॉर्म जमा करके <strong>आवेदन नंबर</strong> संभाल लें।",
        "<strong>ऑफलाइन:</strong> गांव में ब्लॉक ऑफिस के <strong>फूड इंस्पेक्टर</strong> के ऑफिस में, और नगरपालिका इलाके में <strong>SCF&S</strong> (सब-डिवीजनल कंट्रोलर, फूड एंड सप्लाइज़) ऑफिस में भरा हुआ फॉर्म जमा करें।",
        "मंज़ूरी के बाद डिजिटल राशन कार्ड बनता है; विभाग के दिशा-निर्देशों के अनुसार e-राशन कार्ड PDF में डाउनलोड भी किया जा सकता है।",
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को food.wb.gov.in हमारी जांच में नहीं खुला। पोर्टल न खुले तो कुछ समय बाद कोशिश करें या फूड इंस्पेक्टर ऑफिस जाएं। पुराने पेज में \"e-District\" पर आवेदन लिखा था; राशन कार्ड का आवेदन खाद्य विभाग के पोर्टल पर होता है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, सुधार और दुकान बदलना",
      intro: "विभाग के एक ही <strong>कॉमन आवेदन फॉर्म</strong> से ये काम होते हैं:",
      list: [
        "पूरे परिवार को NFSA/RKSY में शामिल करना",
        "<strong>छूटे हुए सदस्य का नाम जोड़ना</strong>",
        "बिना सब्सिडी वाला कार्ड",
        "<strong>नाम या पते में सुधार</strong>",
        "<strong>राशन दुकान (डीलर) बदलना</strong>",
      ],
      callout: { kind: "ok", html: "फॉर्म ऑनलाइन food.wb.gov.in पर भरें, या प्रिंट करके फूड इंस्पेक्टर / SCF&S ऑफिस में जमा करें।" },
    },
    {
      id: "status",
      title: "आवेदन की स्थिति और कार्ड का विवरण",
      list: [
        "आवेदन की स्थिति food.wb.gov.in पर आवेदन नंबर से देखें।",
        "अपने कार्ड का विवरण और हर महीने का हक केंद्र सरकार के <strong>Mera Ration</strong> ऐप में राशन कार्ड नंबर डालकर भी देख सकते हैं।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA (AAY/PHH) कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। RKSY राज्य योजना है।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर अंगूठा नहीं लग रहा", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["किसी सदस्य का नाम कार्ड में नहीं", "कॉमन आवेदन फॉर्म से \"छूटे सदस्य\" का नाम जोड़ने का आवेदन"],
          ["दुकान बदलनी है", "कॉमन आवेदन फॉर्म में दुकान बदलने का विकल्प"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-345-5505 या 1967 पर शिकायत, या helpdesk.wbfood.in पर"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-5505</strong>: NFSA पोर्टल पर पश्चिम बंगाल का हेल्पडेस्क नंबर",
        "<strong>1967</strong>: टोल-फ्री खाद्य हेल्पलाइन",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://helpdesk.wbfood.in/" target="_blank" rel="noopener nofollow">helpdesk.wbfood.in</a> (NFSA पोर्टल पर पश्चिम बंगाल की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://food.wb.gov.in/", title: "खाद्य एवं आपूर्ति विभाग, पश्चिम बंगाल (WBPDS): आवेदन और फॉर्म" },
    { href: "https://wb.gov.in/government-schemes-details-rajya-khadya-suraksha-yojana.aspx", title: "पश्चिम बंगाल सरकार: राज्य खाद्य सुरक्षा योजना (RKSY)" },
    { href: "https://helpdesk.wbfood.in/", title: "पश्चिम बंगाल PDS शिकायत प्रणाली" },
    { href: "https://nfsa.gov.in/State/WB", title: "NFSA पोर्टल: पश्चिम बंगाल का पेज (योजनाएं, कार्ड, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में नया राशन कार्ड कैसे बनवाएं?", a: "खाद्य एवं आपूर्ति विभाग के पोर्टल food.wb.gov.in पर ऑनलाइन आवेदन करें, या ब्लॉक के फूड इंस्पेक्टर ऑफिस (शहर में SCF&S ऑफिस) में फॉर्म जमा करें। सभी सदस्यों का आधार, मोबाइल और जन्म तिथि चाहिए।" },
    { q: "SPHH और RKSY कार्ड क्या हैं?", a: "SPHH प्राथमिकता वाले परिवार (NFSA) का ही एक वर्ग है। RKSY-I और RKSY-II पश्चिम बंगाल सरकार की राज्य खाद्य सुरक्षा योजना के कार्ड हैं, जिन पर राज्य सरकार की तय मात्रा में रियायती अनाज मिलता है।" },
    { q: "पश्चिम बंगाल राशन कार्ड में नाम कैसे जोड़ें?", a: "विभाग के कॉमन आवेदन फॉर्म में \"छूटे सदस्य को जोड़ना\" चुनें। फॉर्म food.wb.gov.in पर ऑनलाइन या फूड इंस्पेक्टर / SCF&S ऑफिस में जमा होता है। नए सदस्य का आधार ज़रूरी है।" },
    { q: "राशन दुकान (डीलर) कैसे बदलें?", a: "कॉमन आवेदन फॉर्म में दुकान बदलने का विकल्प है। ऑनलाइन या फूड इंस्पेक्टर ऑफिस में आवेदन करें।" },
    { q: "पश्चिम बंगाल राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार पश्चिम बंगाल का हेल्पडेस्क 1800-345-5505 और 1967 है। ऑनलाइन शिकायत helpdesk.wbfood.in पर।" },
    { q: "क्या बंगाल का राशन कार्ड दूसरे राज्य में चलता है?", a: "AAY और PHH (NFSA) कार्ड One Nation One Ration Card के तहत देश की किसी भी e-PoS दुकान पर आधार से चलते हैं। RKSY राज्य योजना है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/west-bengal-income-certificate.html", emoji: "💰", title: "पश्चिम बंगाल आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/west-bengal-domicile-certificate.html", emoji: "🏠", title: "पश्चिम बंगाल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/west-bengal-labour-card.html", emoji: "👷", title: "पश्चिम बंगाल लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/bihar-ration-card.html", emoji: "📋", title: "बिहार राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://food.wb.gov.in/", label: "📝 food.wb.gov.in पर आवेदन" },
    { href: "https://helpdesk.wbfood.in/", label: "📞 शिकायत दर्ज करें" },
  ],
};
