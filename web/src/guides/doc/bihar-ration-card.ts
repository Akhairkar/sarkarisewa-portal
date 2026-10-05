import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - epds.bihar.gov.in (Ration Card Management System, Food & Consumer
//   Protection Dept., Bihar): RCMS also called Jan Vitran Ann (JVA) — new card,
//   modification, surrender, new card on split of family, change of card type,
//   change of head of family; links "Apply for Online RC"
//   (rconline.bihar.gov.in), RC-PRINT (rcms.bihar.gov.in), RC Details
//   (SearchByRCID.aspx: rural/urban, district, RC number; urban cards have 21
//   digits — search with 20, leaving out the 9th digit); "Report on Category
//   Wise Number of Ration Card in District" read on 5 Oct 2026 (counts below).
// - serviceonline.bihar.gov.in (RTPS Bihar): Food & Consumer Protection Dept.
//   services "राशन काड हेतु आवेदन" → rconline.bihar.gov.in and "राशन काड की
//   विवरणी जानना" → epds SearchByRCID.
// - nfsa.gov.in/State/BR: schemes AAY and PHH; 50,198 FPS; helpdesk
//   1800-345-6194; grievance system bpgrs.in; AePDS epos.bihar.gov.in; state
//   food department website sfc.bihar.gov.in.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH, State
//   sets PHH criteria, eldest woman head); Mera Ration 2.0 FAQ; dfpd.gov.in
//   toll-free 1967; free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023 (as in our Maharashtra guide); AePDS FAQ (UIDAI error codes, as
//   published on epos.mp.gov.in for the common AePDS software).
// Left out (not confirmable on an official page we could open; rconline,
// rcms and sfc.bihar.gov.in were not reachable): Bihar's own PHH inclusion and
// exclusion criteria, an official document list, fees, time limits under RTPS,
// and which grains are given in which proportion.
export const biharRationCard: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Bihar Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "बिहार राशन कार्ड 2026: AAY और PHH कार्ड, rconline.bihar.gov.in पर ऑनलाइन आवेदन, ePDS पर RC नंबर से विवरण (शहरी 21 अंक वाला नंबर), नाम जोड़ना, e-KYC, 2.03 करोड़ कार्ड का हिसाब और हेल्पलाइन 1800-345-6194 / 1967।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "बिहार राशन कार्ड 2026: ऑनलाइन आवेदन, RC विवरण, नाम जोड़ना और e-KYC",
  lead: "बिहार में राशन कार्ड खाद्य एवं उपभोक्ता संरक्षण विभाग बनाता है। विभाग की राशन कार्ड प्रबंधन प्रणाली (RCMS) को \"जन वितरण अन्न (JVA)\" भी कहा जाता है। नए कार्ड का ऑनलाइन आवेदन rconline.bihar.gov.in पर होता है, और कार्ड का विवरण epds.bihar.gov.in पर ज़िला और राशन कार्ड नंबर डालकर देखा जाता है।",
  facts: [
    ["राज्य में कार्ड", "2.03 करोड़ (5 अक्टूबर 2026)"],
    ["लाभार्थी", "8.41 करोड़ सदस्य"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-345-6194, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "बिहार में राशन कार्ड के प्रकार और संख्या",
      intro: "ePDS बिहार की \"श्रेणीवार राशन कार्ड\" रिपोर्ट (5 अक्टूबर 2026 को देखी गई) के अनुसार राज्य में <strong>2,02,59,858 राशन कार्ड</strong> और <strong>8,40,69,888 सदस्य</strong> हैं। इनमें 1,85,96,212 कार्ड ग्रामीण और 16,63,646 शहरी हैं। NFSA पोर्टल के अनुसार राज्य में <strong>50,198 जन वितरण प्रणाली (PDS) दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "कार्ड", "सदस्य", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "22,98,304", "88,58,069", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "1,79,61,554", "7,52,11,819", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "बिहार में प्राथमिकता परिवार की पात्रता और अपात्रता की शर्तें (आय, ज़मीन, वाहन, सरकारी नौकरी आदि) राज्य सरकार तय करती है। आवेदन से पहले rconline पोर्टल पर लिखी शर्तें पढ़ें या अपने प्रखंड/अनुमंडल के आपूर्ति कार्यालय से पूछें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ऑनलाइन फॉर्म में परिवार के हर सदस्य की जानकारी भरनी होती है। ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "बिहार के <strong>पते का प्रमाण</strong>",
        "मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong> (सरेंडर)",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        '<a href="https://rconline.bihar.gov.in/" target="_blank" rel="noopener nofollow">rconline.bihar.gov.in</a> खोलें। यही लिंक ePDS बिहार पर "Apply for Online RC" और RTPS पोर्टल पर "राशन कार्ड हेतु आवेदन" के नाम से दिया गया है।',
        "पोर्टल पर रजिस्टर/लॉगिन करें और नए राशन कार्ड का फॉर्म खोलें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें; पता और बाकी जानकारी दें।",
        "मांगे गए कागज़ अपलोड करके फॉर्म जमा करें और <strong>आवेदन नंबर</strong> नोट करें।",
        "जांच और मंज़ूरी के बाद कार्ड RCMS (JVA) में बनता है और नज़दीकी PDS दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "5 अक्टूबर 2026 को rconline पोर्टल हमारी जांच में नहीं खुला। पोर्टल न खुले तो कुछ समय बाद कोशिश करें, या नज़दीकी RTPS काउंटर / प्रखंड आपूर्ति कार्यालय में पूछें कि आवेदन कहां लिया जा रहा है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, बदलाव और कार्ड का बंटवारा",
      intro: "विभाग के अनुसार RCMS (JVA) में ये सुविधाएं हैं:",
      list: [
        "<strong>मौजूदा कार्ड में संशोधन:</strong> सदस्य जोड़ना/हटाना और जानकारी सुधारना। RTPS पोर्टल पर इसकी सेवा \"राशन कार्ड में सुधार के लिए आवेदन\" के नाम से दर्ज है।",
        "<strong>परिवार अलग होने पर नया कार्ड</strong> (split of family)",
        "<strong>कार्ड का प्रकार बदलना</strong> (जैसे PHH से AAY, अगर पात्र हों)",
        "<strong>परिवार का मुखिया बदलना</strong> (जैसे मुखिया की मृत्यु पर)",
        "<strong>कार्ड सरेंडर करना</strong> (जैसे दूसरे राज्य में बसने पर)",
      ],
      callout: { kind: "ok", html: "नए सदस्य का नाम जोड़ने के लिए उसका आधार ज़रूरी है। बच्चे के लिए जन्म प्रमाण पत्र और शादी के बाद आई सदस्य के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।" },
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें (RC नंबर से)",
      steps: [
        '<a href="https://epds.bihar.gov.in/SearchByRCID.aspx" target="_blank" rel="noopener nofollow">epds.bihar.gov.in → RC Details</a> खोलें।',
        "<strong>Rural</strong> या <strong>Urban</strong> चुनें और अपना ज़िला चुनें।",
        "<strong>राशन कार्ड नंबर</strong> डालें। <strong>शहरी कार्ड का नंबर 21 अंक का होता है: सर्च करते समय 20 अंक ही डालें, 9वां अंक छोड़कर।</strong>",
        "कार्ड में दर्ज सदस्य और विवरण दिख जाएंगे।",
      ],
      html: '<p>कार्ड प्रिंट करने के लिए ePDS पर <strong>"RC-PRINT"</strong> का लिंक (rcms.bihar.gov.in) है। ज़िलेवार कार्ड की गिनती <a href="https://epds.bihar.gov.in/DistrictWiseRationCardDetailsBH.aspx" target="_blank" rel="noopener nofollow">RCMS Report</a> में है।</p>',
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह PDS दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["शहरी RC नंबर से विवरण नहीं मिल रहा", "21 अंक के नंबर में से 9वां अंक हटाकर 20 अंक डालें"],
          ["PoS पर एरर 300", "बायोमेट्रिक मेल नहीं खाया: उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 996 / 997 / 998", "आधार रद्द / निलंबित / गलत नंबर: आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["किसी सदस्य का नाम कार्ड में नहीं", "RCMS में संशोधन का आवेदन करें (आधार और प्रमाण के साथ)"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-345-6194 या 1967 पर शिकायत, या bpgrs.in पर ऑनलाइन"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-6194</strong>: NFSA पोर्टल पर बिहार का हेल्पडेस्क नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://www.bpgrs.in/" target="_blank" rel="noopener nofollow">bpgrs.in</a> (NFSA पोर्टल पर बिहार की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://rconline.bihar.gov.in/", title: "RC Online बिहार: नए राशन कार्ड का आवेदन" },
    { href: "https://epds.bihar.gov.in/", title: "ePDS बिहार (RCMS / JVA): RC विवरण, RC-PRINT, रिपोर्ट" },
    { href: "https://serviceonline.bihar.gov.in/", title: "RTPS बिहार: लोक सेवाओं का पोर्टल" },
    { href: "https://nfsa.gov.in/State/BR", title: "NFSA पोर्टल: बिहार का पेज (योजनाएं, लिंक, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "बिहार में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "rconline.bihar.gov.in पर रजिस्टर करके नए राशन कार्ड का फॉर्म भरें, सभी सदस्यों का आधार और जानकारी दें और आवेदन नंबर संभालें। यह लिंक ePDS बिहार और RTPS पोर्टल दोनों पर दिया गया है।" },
    { q: "बिहार राशन कार्ड का विवरण या लिस्ट में नाम कैसे देखें?", a: "epds.bihar.gov.in के RC Details पेज पर ग्रामीण/शहरी और ज़िला चुनकर राशन कार्ड नंबर डालें। शहरी कार्ड के 21 अंकों में से 9वां अंक छोड़कर 20 अंक डालें।" },
    { q: "बिहार में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "बिहार में कितने राशन कार्ड हैं?", a: "ePDS बिहार की रिपोर्ट के अनुसार 5 अक्टूबर 2026 को 2,02,59,858 कार्ड (AAY 22,98,304 और PHH 1,79,61,554) और 8,40,69,888 सदस्य थे।" },
    { q: "परिवार अलग होने पर नया राशन कार्ड कैसे बनेगा?", a: "विभाग की RCMS (JVA) प्रणाली में परिवार के बंटवारे (split) पर नया कार्ड बनाने की सुविधा है। ऑनलाइन पोर्टल या प्रखंड आपूर्ति कार्यालय से आवेदन करें।" },
    { q: "बिहार राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार बिहार का हेल्पडेस्क 1800-345-6194 है; केंद्र का टोल-फ्री 1967 भी है। ऑनलाइन शिकायत bpgrs.in पर।" },
    { q: "क्या बिहार का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश के किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं। Mera Ration ऐप से नज़दीकी दुकान देख सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/bihar-income-certificate.html", emoji: "💰", title: "बिहार आय प्रमाण पत्र", text: "RTPS से आवेदन" },
    { href: "/states/bihar-domicile-certificate.html", emoji: "🏠", title: "बिहार निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/bihar-labour-card.html", emoji: "👷", title: "बिहार लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/uttar-pradesh-ration-card.html", emoji: "📋", title: "उत्तर प्रदेश राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://rconline.bihar.gov.in/", label: "📝 ऑनलाइन आवेदन (RC Online)" },
    { href: "https://epds.bihar.gov.in/SearchByRCID.aspx", label: "🔎 RC नंबर से विवरण देखें" },
  ],
};
