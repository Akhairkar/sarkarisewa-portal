import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/OR: schemes Annapurna, AAY and PHH; 11,975 FPS; ration
//   cards 92,89,341 (AAY 12,52,845, PHH 80,36,496); state food department
//   website foododisha.in; ration card list report
//   pdsodisha.gov.in/TPDS/Reports/RationCardListReport.aspx; grievance via
//   CM Grievance Cell cmgcodisha.gov.in; helpdesk 155335 and 1800-345-6724;
//   district-wise RC count report "Source-PDS Odhisa".
// - PTI wire reports (theweek.in, 1 Mar 2025, 12 Mar 2025, 22 Apr 2025, read
//   through search extracts): State launched a website for new ration cards
//   on 1 Mar 2025 (Food Supplies Minister K.C. Patra); 13.70 lakh people had
//   applied by March 2025; distribution of new cards from 24 Apr 2025; new
//   cards follow e-KYC completion.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH);
//   Mera Ration 2.0 FAQ; free grain 1.1.2024–31.12.2028 per GoI notification
//   of 04.12.2023.
// Left out: the exact address of the 2025 application website (not named in
// the extracts we saw), SFSS (State Food Security Scheme) quantities and
// income criteria, document list, fees and whether the online window is
// open today. foododisha.in and pdsodisha.gov.in were not reachable.
export const odishaRationCard: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Odisha Ration Card 2026: Apply & Status",
  description: "ओडिशा राशन कार्ड 2026: NFSA (AAY, PHH) और राज्य खाद्य सुरक्षा योजना (SFSS), नया कार्ड आवेदन, pdsodisha.gov.in पर राशन कार्ड सूची, e-KYC और हेल्पलाइन 155335 / 1800-345-6724।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "ओडिशा राशन कार्ड 2026: आवेदन, राशन कार्ड सूची, e-KYC और हेल्पलाइन",
  lead: "ओडिशा में राशन कार्ड खाद्य आपूर्ति एवं उपभोक्ता कल्याण विभाग बनाता है। केंद्र के NFSA वाले AAY और PHH कार्ड के साथ राज्य की अपनी <strong>राज्य खाद्य सुरक्षा योजना (SFSS)</strong> भी है। राशन कार्ड की सूची pdsodisha.gov.in पर देखी जाती है, और शिकायत के लिए 155335 या 1800-345-6724 पर कॉल करें।",
  facts: [
    ["राज्य में NFSA कार्ड", "92.89 लाख (NFSA पोर्टल)"],
    ["कार्ड के प्रकार", "AAY, PHH, SFSS (राज्य)"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "155335, 1800-345-6724"],
  ],
  notice: "<strong>ध्यान दें:</strong> राज्य के खाद्य मंत्री के अनुसार नए राशन कार्ड e-KYC पूरा होने के बाद दिए जा रहे हैं। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "ओडिशा में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के ओडिशा पेज (13 अक्टूबर 2026 को देखा गया) के अनुसार राज्य में <strong>92,89,341 NFSA राशन कार्ड</strong> और <strong>11,975 राशन दुकानें</strong> हैं। ज़्यादातर दुकानें सहकारी समितियां, पंचायत और स्वयं सहायता समूह चलाते हैं।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "12,52,845", "<strong>35 किलो प्रति परिवार</strong> (NFSA)"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "80,36,496", "<strong>5 किलो प्रति व्यक्ति</strong> (NFSA)"],
          ["<strong>राज्य खाद्य सुरक्षा योजना (SFSS)</strong>", "राज्य योजना", "NFSA से छूटे पात्र परिवारों के लिए; मात्रा राज्य सरकार तय करती है"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार।",
        "<strong>SFSS:</strong> ऐसे पात्र परिवार जो NFSA में नहीं आ पाए; यह राज्य सरकार की योजना है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "PHH और SFSS की आय, ज़मीन और दूसरी शर्तें राज्य सरकार तय करती है। हमें इनकी ताज़ा सरकारी सूची नहीं मिली; आवेदन से पहले ब्लॉक या ज़िला आपूर्ति कार्यालय से पूछें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या कार्यालय मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार की मुखिया का <strong>बैंक खाता</strong> विवरण",
        "ओडिशा के <strong>पते का प्रमाण</strong>",
        "मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन",
      intro: "PTI की खबर के अनुसार ओडिशा सरकार ने <strong>1 मार्च 2025</strong> को नए राशन कार्ड के लिए वेबसाइट शुरू की थी, ताकि छूटे हुए पात्र लोग आवेदन कर सकें। मार्च 2025 तक 13.70 लाख लोगों ने आवेदन किया था, और 24 अप्रैल 2025 से नए कार्ड बांटे गए।",
      steps: [
        'खाद्य आपूर्ति विभाग की वेबसाइट <a href="http://www.foododisha.in/" target="_blank" rel="noopener nofollow">foododisha.in</a> पर देखें कि नए राशन कार्ड का ऑनलाइन आवेदन अभी चालू है या नहीं।',
        "चालू हो तो मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें, कागज़ अपलोड करें और <strong>आवेदन नंबर</strong> नोट करें।",
        "ऑनलाइन न कर सकें तो अपने ब्लॉक कार्यालय या ज़िला आपूर्ति कार्यालय में पूछें कि आवेदन कहां लिया जा रहा है।",
        "जांच और e-KYC के बाद पात्र परिवार का कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "आवेदन की खिड़की हमेशा खुली नहीं रहती। 13 अक्टूबर 2026 को foododisha.in और pdsodisha.gov.in हमारी जांच में नहीं खुले, इसलिए अभी आवेदन चालू है या नहीं, यह हम पक्का नहीं कह सकते। पुराने पेज में \"e-District\" पर आवेदन लिखा था; इसका सबूत हमें नहीं मिला।" },
    },
    {
      id: "status",
      title: "राशन कार्ड सूची में नाम कैसे देखें",
      steps: [
        '<a href="http://pdsodisha.gov.in/TPDS/Reports/RationCardListReport.aspx" target="_blank" rel="noopener nofollow">pdsodisha.gov.in की Ration Card List रिपोर्ट</a> खोलें (यह लिंक NFSA पोर्टल के ओडिशा पेज पर दिया गया है)।',
        "पेज पर मांगी गई जानकारी (जैसे ज़िला और अपना इलाका) चुनें।",
        "सूची में अपना नाम या राशन कार्ड नंबर खोजें।",
      ],
      html: "<p>कार्ड का विवरण और हर महीने का हक केंद्र सरकार के <strong>Mera Ration</strong> ऐप में राशन कार्ड नंबर डालकर भी देख सकते हैं।</p>",
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना या हटाना",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई बहू) का नाम जोड़ने के लिए उसका <strong>आधार</strong> ज़रूरी है।",
        "बच्चे के लिए जन्म प्रमाण पत्र और बहू के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।",
        "मृत्यु या स्थायी रूप से बाहर बसने पर नाम हटवाएं।",
        "आवेदन ब्लॉक / ज़िला आपूर्ति कार्यालय में, या विभाग की वेबसाइट पर सुविधा चालू हो तो ऑनलाइन करें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA (AAY/PHH) कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। ओडिशा से बाहर काम करने वाले मज़दूरों के लिए यह काम का है।",
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
          ["सूची में नाम नहीं", "ब्लॉक / ज़िला आपूर्ति कार्यालय में पूछें; आवेदन चालू हो तो नया आवेदन करें"],
          ["e-KYC न होने से राशन रुका", "अपनी राशन दुकान पर PoS से e-KYC कराएं"],
          ["राशन कम मिला या दुकान ने मना किया", "155335 या 1800-345-6724 पर शिकायत, या cmgcodisha.gov.in पर"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>155335</strong> और <strong>1800-345-6724</strong>: NFSA पोर्टल पर ओडिशा के हेल्पडेस्क नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://cmgcodisha.gov.in/citizen/grievance.php?TabID=L" target="_blank" rel="noopener nofollow">cmgcodisha.gov.in</a> (NFSA पोर्टल पर ओडिशा की PDS शिकायत का लिंक)',
      ],
    },
  ],
  official: [
    { href: "http://www.foododisha.in/", title: "खाद्य आपूर्ति एवं उपभोक्ता कल्याण विभाग, ओडिशा" },
    { href: "http://pdsodisha.gov.in/TPDS/Reports/RationCardListReport.aspx", title: "PDS ओडिशा: राशन कार्ड सूची" },
    { href: "https://cmgcodisha.gov.in/citizen/grievance.php?TabID=L", title: "CM शिकायत प्रकोष्ठ ओडिशा: ऑनलाइन शिकायत" },
    { href: "https://nfsa.gov.in/State/OR", title: "NFSA पोर्टल: ओडिशा का पेज (योजनाएं, कार्ड, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "ओडिशा में नया राशन कार्ड कैसे बनवाएं?", a: "राज्य सरकार ने मार्च 2025 में नए राशन कार्ड के लिए वेबसाइट शुरू की थी। foododisha.in पर देखें कि आवेदन चालू है या नहीं, या ब्लॉक / ज़िला आपूर्ति कार्यालय में पूछें। सभी सदस्यों का आधार और e-KYC ज़रूरी है।" },
    { q: "ओडिशा राशन कार्ड सूची में नाम कैसे देखें?", a: "pdsodisha.gov.in की Ration Card List रिपोर्ट में अपना इलाका चुनकर नाम खोजें। यह लिंक NFSA पोर्टल के ओडिशा पेज पर दिया गया है।" },
    { q: "SFSS राशन कार्ड क्या है?", a: "SFSS ओडिशा सरकार की राज्य खाद्य सुरक्षा योजना है। इसमें उन पात्र परिवारों को राशन मिलता है जो NFSA में शामिल नहीं हो पाए। मात्रा और शर्तें राज्य सरकार तय करती है।" },
    { q: "ओडिशा में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "ओडिशा राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार ओडिशा के हेल्पडेस्क नंबर 155335 और 1800-345-6724 हैं; केंद्र का 1967 भी है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/odisha-income-certificate.html", emoji: "💰", title: "ओडिशा आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/odisha-labour-card.html", emoji: "👷", title: "ओडिशा लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/west-bengal-ration-card.html", emoji: "📋", title: "पश्चिम बंगाल राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "http://pdsodisha.gov.in/TPDS/Reports/RationCardListReport.aspx", label: "🔎 राशन कार्ड सूची देखें" },
    { href: "http://www.foododisha.in/", label: "📋 खाद्य विभाग ओडिशा" },
  ],
};
