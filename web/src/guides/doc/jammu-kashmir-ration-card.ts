import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/JK (Dept. of Food & Public Distribution, GoI): Food,
//   Civil Supplies and Consumer Affairs Dept., Govt. of J&K; state food
//   website jkfcsca.gov.in; Ration Card Management System rcms.jk.gov.in;
//   FEAST feastjk.gov.in; grievance system feastjk.gov.in/jkgrams; FPS
//   automation epos.jk.gov.in (SMART-PDS); helpdesk 1967, 18001807106 (Jammu
//   region), 18001807011 (Kashmir region); schemes AAY and PHH; 6,607 FPS;
//   16,60,976 cards (AAY 2,21,315, PHH 14,39,661); Directors for Kashmir and
//   Jammu.
// - Greater Kashmir (Dec 2025): Govt sanction to issue new ration cards to
//   eligible e-Shram registrants; Labour & Employment Dept. shares details
//   (incl. Aadhaar) with Assistant Directors FCS&CA of each district; in
//   compliance with Supreme Court order of 20.04.2023.
// - ladakh.gov.in FCS&CA page: NFSA implemented across the erstwhile J&K State
//   from 1 Feb 2016.
// - nfsa.gov.in Coverage (35 kg AAY, 5 kg/person PHH, eldest woman head);
//   free grain to 31.12.2028 (GoI notification of 04.12.2023); Mera Ration.
// Note: rcms.jk.gov.in, jkfcsca.gov.in and jkfcsca.jk.gov.in did not open from
// our checks. The online-application route on RCMS is described only by
// third-party guides, so the page tells readers to confirm at the office.
// Left out: J&K's PHH criteria, official document list, fees, time limits,
// NPHH prices and any UT-specific extra ration.
export const jammuKashmirRationCard: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू-कश्मीर" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Jammu & Kashmir Ration Card 2026: Apply & Status",
  description: "जम्मू-कश्मीर राशन कार्ड 2026: AAY/PHH कार्ड, RCMS पोर्टल, नया कार्ड और नाम जोड़ना, e-Shram मज़दूरों के लिए कार्ड, e-KYC और जम्मू/कश्मीर की अलग हेल्पलाइन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "जम्मू-कश्मीर राशन कार्ड 2026: नया कार्ड, RCMS, नाम जोड़ना और हेल्पलाइन",
  lead: "जम्मू-कश्मीर में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले (FCS&CA) विभाग बनाता है। कार्ड का पूरा रिकॉर्ड विभाग की <strong>राशन कार्ड प्रबंधन प्रणाली (RCMS)</strong> rcms.jk.gov.in में रहता है। जम्मू और कश्मीर संभाग के लिए <strong>अलग-अलग टोल-फ्री नंबर</strong> हैं।",
  facts: [
    ["कुल कार्ड", "16.61 लाख (NFSA पोर्टल)"],
    ["राशन दुकानें", "6,607"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "जम्मू 1800-180-7106, कश्मीर 1800-180-7011, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन e-PoS मशीन पर आधार से अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए।",
  sections: [
    {
      id: "prakar",
      title: "जम्मू-कश्मीर में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल पर जम्मू-कश्मीर के पेज के अनुसार यहां <strong>16,60,976 राशन कार्ड</strong> और <strong>6,607 राशन की दुकानें</strong> हैं। राष्ट्रीय खाद्य सुरक्षा कानून (NFSA) यहां 1 फरवरी 2016 से लागू है।",
      table: {
        head: ["कार्ड", "संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "2,21,315", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "14,39,661", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> NFSA के तहत सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "ok", html: "<strong>e-Shram वाले मज़दूर:</strong> दिसंबर 2025 के सरकारी आदेश के अनुसार e-Shram पोर्टल पर दर्ज पात्र लोगों को नए राशन कार्ड दिए जाने हैं। श्रम विभाग उनकी जानकारी हर ज़िले के FCS&CA असिस्टेंट डायरेक्टर को देता है। <a href=\"/service/e-shram-card.html\">e-Shram कार्ड के बारे में</a>" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        "परिवार के सभी सदस्यों का <strong>आधार</strong>, मोबाइल नंबर, जम्मू-कश्मीर के पते का प्रमाण, मुखिया की फोटो और बैंक खाते का विवरण तैयार रखें।",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong> लें।",
        "अपने इलाके के <strong>FCS&CA कार्यालय</strong> (ज़िले में असिस्टेंट डायरेक्टर FCS&CA का दफ्तर या नज़दीकी सप्लाई ऑफिस) में आवेदन करें और पूछें कि ऑनलाइन फॉर्म कहां भरना है।",
        "विभाग के <a href=\"https://rcms.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">RCMS पोर्टल</a> पर कार्ड बनता और दर्ज होता है। जमा करने के बाद मिला <strong>आवेदन/रेफरेंस नंबर</strong> संभालें।",
      ],
      callout: { kind: "warn", html: "13 अक्टूबर 2026 को RCMS पोर्टल और विभाग की वेबसाइट हमारी जांच में नहीं खुलीं, और ऑनलाइन आवेदन का तरीका किसी सरकारी पेज पर हम पक्का नहीं कर पाए। इसलिए आवेदन से पहले FCS&CA कार्यालय या टोल-फ्री नंबर (जम्मू 1800-180-7106, कश्मीर 1800-180-7011) पर पूछ लें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना और बदलाव",
      list: [
        "नए सदस्य का नाम जोड़ने के लिए उसका <strong>आधार</strong> ज़रूरी है।",
        "बच्चे के लिए <strong>जन्म प्रमाण पत्र</strong>, शादी के बाद आई सदस्य के लिए <strong>विवाह प्रमाण पत्र</strong> और पुराने कार्ड से नाम हटने का सबूत रखें।",
        "मृत्यु पर नाम हटाने के लिए <strong>मृत्यु प्रमाण पत्र</strong> लगता है।",
        "बदलाव का आवेदन अपने FCS&CA कार्यालय में दें; बदलाव RCMS रिकॉर्ड में दर्ज होता है।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> राशन दुकान की e-PoS मशीन पर आधार से अंगूठा/उंगली लगाकर होती है। NFSA पोर्टल के अनुसार जम्मू-कश्मीर का e-PoS सिस्टम <strong>epos.jk.gov.in</strong> (SMART-PDS) है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश की किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
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
          ["किसी सदस्य का नाम कार्ड में नहीं", "आधार और प्रमाण के साथ FCS&CA कार्यालय में नाम जोड़ने का आवेदन"],
          ["राशन कम मिला या दुकान ने मना किया", "जम्मू 1800-180-7106, कश्मीर 1800-180-7011 या 1967; ऑनलाइन JK GRAMS पर"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-180-7106</strong>: जम्मू संभाग (NFSA पोर्टल के अनुसार)",
        "<strong>1800-180-7011</strong>: कश्मीर संभाग (NFSA पोर्टल के अनुसार)",
        "<strong>1967</strong>: खाद्य विभाग की हेल्पलाइन",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://feastjk.gov.in/jkgrams" target="_blank" rel="noopener nofollow">JK GRAMS (feastjk.gov.in)</a>, NFSA पोर्टल पर दर्ज PDS शिकायत प्रणाली',
      ],
    },
  ],
  official: [
    { href: "https://rcms.jk.gov.in/", title: "RCMS जम्मू-कश्मीर: राशन कार्ड प्रबंधन प्रणाली" },
    { href: "http://jkfcsca.gov.in/", title: "FCS&CA विभाग, जम्मू-कश्मीर" },
    { href: "http://feastjk.gov.in/jkgrams", title: "JK GRAMS: PDS शिकायत प्रणाली" },
    { href: "https://nfsa.gov.in/State/JK", title: "NFSA पोर्टल: जम्मू-कश्मीर का पेज (लिंक, हेल्पलाइन)" },
  ],
  faq: [
    { q: "जम्मू-कश्मीर में नया राशन कार्ड कैसे बनवाएं?", a: "सभी सदस्यों का आधार, पते का प्रमाण और फोटो लेकर अपने इलाके के FCS&CA कार्यालय में आवेदन करें। कार्ड विभाग के RCMS पोर्टल (rcms.jk.gov.in) में बनता है। ऑनलाइन आवेदन की सुविधा के बारे में दफ्तर या टोल-फ्री नंबर पर पूछ लें।" },
    { q: "e-Shram कार्ड वालों को राशन कार्ड कैसे मिलेगा?", a: "दिसंबर 2025 के सरकारी आदेश के अनुसार e-Shram पर दर्ज पात्र लोगों की जानकारी श्रम विभाग ज़िले के FCS&CA असिस्टेंट डायरेक्टर को देता है, और उन्हें नए राशन कार्ड दिए जाने हैं। अपने ज़िले के FCS&CA दफ्तर में पूछें।" },
    { q: "जम्मू-कश्मीर में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "जम्मू-कश्मीर राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "जम्मू संभाग: 1800-180-7106, कश्मीर संभाग: 1800-180-7011, और 1967। ऑनलाइन शिकायत JK GRAMS (feastjk.gov.in/jkgrams) पर।" },
    { q: "क्या जम्मू-कश्मीर का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का पंजीकरण" },
    { href: "/states/jammu-kashmir-income-certificate.html", emoji: "💰", title: "जम्मू-कश्मीर आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/jammu-kashmir-domicile-certificate.html", emoji: "🏠", title: "जम्मू-कश्मीर डोमिसाइल", text: "निवास प्रमाण पत्र" },
    { href: "/states/jammu-kashmir-labour-card.html", emoji: "👷", title: "जम्मू-कश्मीर लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/states/ladakh-ration-card.html", emoji: "📋", title: "लद्दाख राशन कार्ड", text: "पड़ोसी UT का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://rcms.jk.gov.in/", label: "📝 RCMS जम्मू-कश्मीर" },
    { href: "http://feastjk.gov.in/jkgrams", label: "📣 ऑनलाइन शिकायत (JK GRAMS)" },
  ],
};
