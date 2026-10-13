import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/JH: schemes Annapurna, AAY and PHH; 23,624 FPS; ration
//   cards 60,15,999 (AAY 8,80,379, PHH 51,35,620); state food department
//   website aahar.jharkhand.gov.in; grievance system pgms.dfcajharkhand.in;
//   helpdesk 1800-212-5512; district-wise RC count report "Source-Aahaar
//   Jharkhand".
// - myScheme (api.myscheme.gov.in, slug "jsfss"): Jharkhand State Food
//   Security Scheme by the Department of Food, Public Distribution and
//   Consumer Affairs; subsidised/free food grain, mainly rice, to Green Card
//   holders; implemented by the Directorate of Food and Consumer Affairs,
//   Ranchi; Aadhaar or Aadhaar enrolment slip needed.
// - jharsewa.jharkhand.gov.in home page (read 13 Oct 2026): no ration card
//   service listed, so the old page's "apply at JharSewa" was dropped.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH, State
//   sets PHH criteria, eldest woman head); Mera Ration 2.0 FAQ; dfpd.gov.in
//   toll-free 1967; free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023.
// Left out (aahar.jharkhand.gov.in, jsfss.jharkhand.gov.in and
// pgms.dfcajharkhand.in were not reachable; only commercial sites described
// the forms): the exact online form steps, the JSFSS (Green Card) income
// limit and grain quantity, the official document list, fees and time limits.
export const jharkhandRationCard: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Jharkhand Ration Card 2026: Apply & Status",
  description: "झारखंड राशन कार्ड 2026: AAY, PHH और हरा कार्ड (JSFSS), आहार पोर्टल aahar.jharkhand.gov.in, प्रखंड आपूर्ति कार्यालय में आवेदन, e-KYC, नाम जोड़ना और हेल्पलाइन 1800-212-5512 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "झारखंड राशन कार्ड 2026: आवेदन, हरा कार्ड, सूची, e-KYC और हेल्पलाइन",
  lead: "झारखंड में राशन कार्ड खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग बनाता है। विभाग का पोर्टल \"आहार झारखंड\" (aahar.jharkhand.gov.in) है, जिस पर राशन कार्ड का रिकॉर्ड रहता है। केंद्र के NFSA वाले AAY और PHH कार्ड के अलावा राज्य की अपनी योजना में <strong>हरा राशन कार्ड (JSFSS)</strong> भी बनता है।",
  facts: [
    ["राज्य में NFSA कार्ड", "60.16 लाख (NFSA पोर्टल)"],
    ["कार्ड के प्रकार", "AAY, PHH, हरा कार्ड (JSFSS)"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-212-5512, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "झारखंड में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के झारखंड पेज (13 अक्टूबर 2026 को देखा गया) के अनुसार राज्य में <strong>60,15,999 NFSA राशन कार्ड</strong> और <strong>23,624 जन वितरण प्रणाली (PDS) दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "8,80,379", "<strong>35 किलो प्रति परिवार</strong> (NFSA)"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "51,35,620", "<strong>5 किलो प्रति व्यक्ति</strong> (NFSA)"],
          ["<strong>हरा राशन कार्ड (JSFSS)</strong>", "राज्य योजना", "मुख्य रूप से चावल, रियायती दर या मुफ्त (मात्रा राज्य तय करता है)"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "hara-card",
      title: "हरा राशन कार्ड (झारखंड राज्य खाद्य सुरक्षा योजना)",
      intro: "myScheme पोर्टल के अनुसार <strong>Jharkhand State Food Security Scheme (JSFSS)</strong> खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग की राज्य योजना है। इसमें <strong>हरा कार्ड (Green Card)</strong> वालों को अनाज, मुख्य रूप से चावल, रियायती दर पर या मुफ्त दिया जाता है। योजना खाद्य एवं उपभोक्ता मामले निदेशालय, रांची चलाता है।",
      list: [
        "आवेदक झारखंड का निवासी हो।",
        "आर्थिक रूप से कमज़ोर परिवारों को प्राथमिकता दी जाती है।",
        "पंजीकरण के समय आधार नंबर, या आधार न हो तो आधार नामांकन पर्ची देनी होती है।",
      ],
      callout: { kind: "warn", html: "हरा कार्ड की आय सीमा और प्रति व्यक्ति अनाज की मात्रा हमें किसी सरकारी पेज पर नहीं मिली। आवेदन से पहले अपने प्रखंड आपूर्ति कार्यालय या राशन दुकान से पूछ लें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "<strong>हरा कार्ड:</strong> राज्य की JSFSS योजना के परिवार।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या प्रखंड कार्यालय मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> (या आधार नामांकन पर्ची) और चालू मोबाइल नंबर",
        "परिवार की मुखिया (सबसे बड़ी महिला) का <strong>बैंक खाता</strong> विवरण",
        "झारखंड के <strong>पते का प्रमाण</strong>",
        "मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        'विभाग का पोर्टल <a href="https://aahar.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">aahar.jharkhand.gov.in</a> खोलें और देखें कि नए राशन कार्ड का ऑनलाइन आवेदन चालू है या नहीं।',
        "ऑनलाइन आवेदन चालू हो तो मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें, कागज़ अपलोड करें और <strong>आवेदन नंबर</strong> नोट करें।",
        "ऑनलाइन न कर सकें तो अपने <strong>प्रखंड आपूर्ति कार्यालय</strong> (शहर में अनुमंडल/ज़िला आपूर्ति कार्यालय) में फॉर्म और कागज़ जमा करें और पावती लें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और नज़दीकी PDS दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को आहार पोर्टल हमारी जांच में नहीं खुला, इसलिए हम ऑनलाइन फॉर्म के चरण पक्के तौर पर नहीं लिख रहे। पुराने पेज में JharSewa पर आवेदन लिखा था, पर JharSewa के होम पेज पर राशन कार्ड की सेवा नहीं दिखी।" },
    },
    {
      id: "status",
      title: "आवेदन की स्थिति और राशन कार्ड सूची",
      list: [
        "आवेदन की स्थिति आहार पोर्टल पर आवेदन नंबर से या प्रखंड आपूर्ति कार्यालय में पूछकर जानें।",
        'ज़िलेवार कार्ड की गिनती NFSA पोर्टल के झारखंड पेज पर "District-wise RC Count Report (Source-Aahaar Jharkhand)" में है।',
        "अपने कार्ड का विवरण और हर महीने का हक केंद्र सरकार के <strong>Mera Ration</strong> ऐप में राशन कार्ड नंबर डालकर भी देख सकते हैं।",
      ],
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना या हटाना",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई बहू) का नाम जोड़ने के लिए उसका <strong>आधार</strong> ज़रूरी है।",
        "बच्चे के लिए जन्म प्रमाण पत्र और बहू के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।",
        "मृत्यु या स्थायी रूप से बाहर बसने पर नाम हटवाएं, ताकि कार्ड सही रहे।",
        "आवेदन आहार पोर्टल पर (अगर सुविधा चालू हो) या प्रखंड आपूर्ति कार्यालय में करें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह PDS दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। झारखंड से बाहर काम करने वाले मज़दूरों के लिए यह काम का है।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर अंगूठा नहीं लग रहा", "उंगली साफ करके या दूसरी उंगली से कोशिश करें; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट कराएं"],
          ["किसी सदस्य का नाम कार्ड में नहीं", "प्रखंड आपूर्ति कार्यालय में आधार और प्रमाण के साथ नाम जोड़ने का आवेदन दें"],
          ["आहार पोर्टल नहीं खुल रहा", "कुछ समय बाद कोशिश करें या प्रखंड आपूर्ति कार्यालय जाएं"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-212-5512 या 1967 पर शिकायत करें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-212-5512</strong>: NFSA पोर्टल पर झारखंड का हेल्पडेस्क नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://pgms.dfcajharkhand.in/" target="_blank" rel="noopener nofollow">pgms.dfcajharkhand.in</a> (NFSA पोर्टल पर झारखंड की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://aahar.jharkhand.gov.in/", title: "आहार झारखंड: खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग" },
    { href: "http://pgms.dfcajharkhand.in/", title: "झारखंड PDS शिकायत प्रणाली" },
    { href: "https://nfsa.gov.in/State/JH", title: "NFSA पोर्टल: झारखंड का पेज (योजनाएं, कार्ड, हेल्पलाइन)" },
    { href: "https://www.myscheme.gov.in/schemes/jsfss", title: "myScheme: झारखंड राज्य खाद्य सुरक्षा योजना (हरा कार्ड)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "झारखंड में नया राशन कार्ड कैसे बनवाएं?", a: "विभाग के आहार पोर्टल aahar.jharkhand.gov.in पर देखें कि ऑनलाइन आवेदन चालू है या नहीं। नहीं तो प्रखंड आपूर्ति कार्यालय में सभी सदस्यों के आधार, बैंक खाता, पते के प्रमाण और फोटो के साथ आवेदन दें और पावती लें।" },
    { q: "हरा राशन कार्ड क्या है?", a: "हरा कार्ड झारखंड राज्य खाद्य सुरक्षा योजना (JSFSS) का कार्ड है। इसमें राज्य सरकार अनाज, मुख्य रूप से चावल, रियायती दर पर या मुफ्त देती है। यह केंद्र के NFSA वाले AAY/PHH कार्ड से अलग राज्य योजना है।" },
    { q: "झारखंड में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है। हरे कार्ड की मात्रा राज्य सरकार तय करती है।" },
    { q: "क्या JharSewa पोर्टल पर राशन कार्ड बनता है?", a: "13 अक्टूबर 2026 को JharSewa के होम पेज पर राशन कार्ड की सेवा नहीं दिखी। राशन कार्ड का काम खाद्य विभाग के आहार पोर्टल और प्रखंड आपूर्ति कार्यालय से होता है।" },
    { q: "झारखंड राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार झारखंड का हेल्पडेस्क 1800-212-5512 है; केंद्र का टोल-फ्री 1967 भी है। ऑनलाइन शिकायत pgms.dfcajharkhand.in पर।" },
    { q: "क्या झारखंड का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, NFSA (AAY/PHH) कार्ड One Nation One Ration Card के तहत देश की किसी भी e-PoS दुकान पर आधार से चलता है। हरा कार्ड राज्य योजना है, इसलिए उसका राशन झारखंड में ही मिलता है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/jharkhand-income-certificate.html", emoji: "💰", title: "झारखंड आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/jharkhand-labour-card.html", emoji: "👷", title: "झारखंड लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/bihar-ration-card.html", emoji: "📋", title: "बिहार राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://aahar.jharkhand.gov.in/", label: "📋 आहार झारखंड पोर्टल" },
    { href: "https://nfsa.gov.in/State/JH", label: "🔎 NFSA: झारखंड पेज" },
  ],
};
