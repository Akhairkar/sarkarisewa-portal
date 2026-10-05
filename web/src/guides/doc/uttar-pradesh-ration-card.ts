import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - nfsa.gov.in/State/UP (Dept. of Food & Public Distribution, GoI): schemes
//   AAY and PHH; 3,63,73,543 ration cards (AAY 40,81,014 + PHH 3,22,92,529);
//   78,455 FPS; department phone 18001800150; state food portal fcs.up.gov.in;
//   grievance system cms.up.gov.in; "District-wise RC Count Report (Source-RCMS
//   Uttar Pradesh)" at nfsa.up.gov.in/Food/citizen/Default.aspx.
// - nfsa.gov.in "Ration Card Details on State Portals", "State Food Portals",
//   "State ePoS Portals", "Online Grievance": UP links nfsa.up.gov.in,
//   fcs.up.gov.in/FoodPortal.aspx, fcs.up.gov.in/Important/POS-en.aspx,
//   cms.up.gov.in/jsk/User/Default.aspx.
// - District websites (NIC, Govt. of UP): etah.nic.in "Ration card" (online
//   application on the FCS portal: mobile number, OTP, personal and family
//   details, scanned documents, application number); mau.nic.in "Ration Card"
//   (documents: photo, Aadhaar, bank passbook, voter ID, house tax slip, DL,
//   telephone bill); lucknow/banda and other district pages listing the
//   eligible-household (survey 2018) lists of the Food & Civil Supplies Dept.;
//   District Supply Offices as the local office.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; dfpd.gov.in
//   toll-free 1967; free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023 (as in our Maharashtra guide); AePDS FAQ (UIDAI error codes).
// Not reachable from here: fcs.up.gov.in, nfsa.up.gov.in, cms.up.gov.in, so
// the state's own eligibility/ineligibility criteria for PHH, fees and time
// limits are not given. Dropped from the old page: helpline 1800-180-2087 (it
// is Haryana's number per nfsa.gov.in), "transfer in 7 days", DigiLocker
// download, "card blocked after 3 months", tatkal/SDM and 200 DPI claims.
export const uttarPradeshRationCard: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Uttar Pradesh Ration Card 2026: Apply & Status | SarkariSewa",
  description: "उत्तर प्रदेश राशन कार्ड 2026: अंत्योदय और पात्र गृहस्थी कार्ड, fcs.up.gov.in पर ऑनलाइन आवेदन, ज़रूरी कागज़, पात्र गृहस्थी सूची, e-KYC, राशन पोर्टेबिलिटी, 3.64 करोड़ कार्ड और हेल्पलाइन 1800-1800-150 / 1967।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "उत्तर प्रदेश राशन कार्ड 2026: अंत्योदय और पात्र गृहस्थी, आवेदन, सूची और e-KYC",
  lead: "उत्तर प्रदेश में राशन कार्ड खाद्य एवं रसद विभाग बनाता है। राष्ट्रीय खाद्य सुरक्षा कानून (NFSA) के तहत यहां दो तरह के कार्ड हैं: अंत्योदय (AAY) और पात्र गृहस्थी (PHH)। नए कार्ड का आवेदन विभाग के पोर्टल fcs.up.gov.in पर होता है, और मदद के लिए हर ज़िले में ज़िला पूर्ति कार्यालय है।",
  facts: [
    ["राज्य में कार्ड", "3.64 करोड़ (NFSA पोर्टल)"],
    ["राशन दुकानें", "78,455"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-1800-150, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित e-PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "उत्तर प्रदेश में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के उत्तर प्रदेश पेज के अनुसार (5 अक्टूबर 2026 को देखा गया) राज्य में <strong>3,63,73,543 राशन कार्ड</strong> हैं, जिन्हें <strong>78,455 उचित दर दुकानों</strong> (कोटेदार) से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "40,81,014", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>पात्र गृहस्थी (PHH)</strong>", "3,22,92,529", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और पात्र गृहस्थी का NFSA अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। NFSA पोर्टल पर UP की NFSA योजनाओं में यही दो श्रेणियां (AAY और PHH) दर्ज हैं।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>अंत्योदय:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>पात्र गृहस्थी:</strong> राज्य सरकार के मापदंडों से चुने गए परिवार। केंद्र सरकार के अनुसार प्राथमिकता परिवार की पहचान के मापदंड हर राज्य खुद तय करता है।",
        "आवेदक <strong>उत्तर प्रदेश का निवासी</strong> हो; एक परिवार का एक ही कार्ड हो और किसी सदस्य का नाम दो कार्डों में न हो।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "उत्तर प्रदेश में पात्र गृहस्थी की पात्रता और अपात्रता की शर्तें (आय, ज़मीन, वाहन, मकान आदि) राज्य सरकार तय करती है। आवेदन से पहले fcs.up.gov.in पर लिखी शर्तें पढ़ें या अपने ज़िला पूर्ति कार्यालय से पूछें। ज़िलों की वेबसाइट पर विभाग के सर्वे 2018 की पात्र गृहस्थी सूचियां भी दी गई हैं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "ज़िला पूर्ति कार्यालय (मऊ) की वेबसाइट पर राशन कार्ड के आवेदन के लिए ये कागज़ बताए गए हैं:",
      list: [
        "<strong>पासपोर्ट साइज़ फोटो</strong>",
        "<strong>आधार कार्ड</strong> (परिवार के सभी सदस्यों का आधार नंबर फॉर्म में भरना होता है)",
        "<strong>बैंक पासबुक</strong>",
        "<strong>पते/पहचान का प्रमाण:</strong> वोटर ID, हाउस टैक्स की रसीद, ड्राइविंग लाइसेंस या टेलीफोन बिल",
      ],
      callout: { kind: "info", html: "पहले किसी और कार्ड में नाम था (जैसे शादी से पहले मायके के कार्ड में) तो वहां से नाम कटवाकर ही नए कार्ड में जुड़वाएं; एक व्यक्ति का नाम दो कार्डों में नहीं रह सकता।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        '<a href="https://fcs.up.gov.in/FoodPortal.aspx" target="_blank" rel="noopener nofollow">fcs.up.gov.in</a> (खाद्य एवं रसद विभाग का पोर्टल) खोलें और राशन कार्ड के ऑनलाइन आवेदन का लिंक चुनें।',
        "<strong>मोबाइल नंबर</strong> डालें; उस पर आया <strong>OTP</strong> भरें।",
        "मुखिया की निजी जानकारी और <strong>परिवार के सभी सदस्यों</strong> का विवरण भरें।",
        "ज़रूरी कागज़ों की स्कैन कॉपी अपलोड करके सबमिट करें।",
        "<strong>आवेदन नंबर</strong> मिलेगा; उसका प्रिंट रखें। आवेदन की स्थिति और आगे की कार्यवाही के लिए यही नंबर काम आएगा।",
      ],
      callout: { kind: "ok", html: "<strong>ऑफलाइन मदद:</strong> खुद आवेदन न कर पाएं तो अपने ज़िले के <strong>ज़िला पूर्ति कार्यालय</strong> से संपर्क करें। ज़िले की NIC वेबसाइट पर \"Ration Card\" सेवा पेज में कार्यालय का पता दिया होता है।" },
    },
    {
      id: "suchi",
      title: "सूची में नाम और कार्ड का विवरण कैसे देखें",
      list: [
        '<strong>राज्य पोर्टल:</strong> NFSA पोर्टल के "Ration Card Details on State Portals" पेज पर उत्तर प्रदेश का लिंक <a href="https://nfsa.up.gov.in/Food/citizen/Default.aspx" target="_blank" rel="noopener nofollow">nfsa.up.gov.in</a> पर जाता है, जहां ज़िलेवार राशन कार्ड की रिपोर्ट है।',
        '<strong>e-PoS लेन-देन:</strong> NFSA पोर्टल पर UP के लिए <a href="https://fcs.up.gov.in/Important/POS-en.aspx" target="_blank" rel="noopener nofollow">fcs.up.gov.in का e-PoS पेज</a> दिया गया है।',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, पिछले लेन-देन और नज़दीकी दुकान।",
        "<strong>ज़िले की वेबसाइट:</strong> कई ज़िलों (जैसे लखनऊ, बांदा) की NIC वेबसाइट पर विभाग की पात्र गृहस्थी सूचियों के लिंक हैं।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, नाम जोड़ना और One Nation One Ration Card",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह कोटेदार की e-PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>नाम जोड़ना/हटाना:</strong> fcs.up.gov.in के पोर्टल या ज़िला पूर्ति कार्यालय से। नए सदस्य का आधार ज़रूरी है; बच्चे के लिए जन्म प्रमाण पत्र, शादी के बाद आई सदस्य के लिए पुराने कार्ड से नाम कटने का सबूत रखें। मृत्यु पर नाम हटाने के लिए मृत्यु प्रमाण पत्र।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश के किसी भी e-PoS दुकान पर आधार से अपना हिस्सा ले सकते हैं।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत / एरर", "क्या करें"],
        rows: [
          ["OTP नहीं आया", "मोबाइल नंबर जांचें, कुछ देर बाद दोबारा कोशिश करें"],
          ["एरर 300 (बायोमेट्रिक मेल नहीं खाया)", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 996 / 997 / 998", "आधार रद्द / निलंबित / गलत नंबर: आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["आवेदन लंबित या अस्वीकार", "आवेदन नंबर के साथ ज़िला पूर्ति कार्यालय में कारण पूछें; कमी दूर करके दोबारा आवेदन"],
          ["राशन कम मिला या कोटेदार ने मना किया", "1800-1800-150 या 1967 पर शिकायत, या cms.up.gov.in पर ऑनलाइन"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-1800-150</strong>: NFSA पोर्टल पर उत्तर प्रदेश खाद्य एवं रसद विभाग का फोन नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://cms.up.gov.in/" target="_blank" rel="noopener nofollow">cms.up.gov.in</a> (NFSA पोर्टल पर UP की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://fcs.up.gov.in/FoodPortal.aspx", title: "खाद्य एवं रसद विभाग, उत्तर प्रदेश: राशन कार्ड पोर्टल" },
    { href: "https://nfsa.up.gov.in/Food/citizen/Default.aspx", title: "NFSA उत्तर प्रदेश: ज़िलेवार राशन कार्ड रिपोर्ट" },
    { href: "https://cms.up.gov.in/", title: "PDS शिकायत प्रणाली (उत्तर प्रदेश)" },
    { href: "https://nfsa.gov.in/State/UP", title: "NFSA पोर्टल: उत्तर प्रदेश का पेज" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "उत्तर प्रदेश में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "fcs.up.gov.in पर राशन कार्ड के ऑनलाइन आवेदन में मोबाइल नंबर और OTP डालें, मुखिया और सभी सदस्यों का विवरण भरें, कागज़ अपलोड करें और आवेदन नंबर संभालें। मदद के लिए ज़िला पूर्ति कार्यालय जाएं।" },
    { q: "UP में राशन कार्ड के लिए कौन से कागज़ चाहिए?", a: "फोटो, आधार (सभी सदस्यों का), बैंक पासबुक और पते/पहचान का प्रमाण जैसे वोटर ID, हाउस टैक्स रसीद, ड्राइविंग लाइसेंस या टेलीफोन बिल।" },
    { q: "पात्र गृहस्थी और अंत्योदय कार्ड में क्या फर्क है?", a: "अंत्योदय कार्ड सबसे गरीब परिवारों के लिए है और इस पर हर महीने 35 किलो अनाज प्रति परिवार मिलता है। पात्र गृहस्थी कार्ड पर 5 किलो प्रति व्यक्ति। दोनों पर NFSA का अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "उत्तर प्रदेश में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 3,63,73,543 कार्ड: अंत्योदय 40,81,014 और पात्र गृहस्थी 3,22,92,529। राज्य में 78,455 राशन दुकानें हैं।" },
    { q: "UP राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल पर विभाग का नंबर 1800-1800-150 है; केंद्र का टोल-फ्री 1967 भी है। ऑनलाइन शिकायत cms.up.gov.in पर।" },
    { q: "क्या UP का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से देश के किसी भी e-PoS दुकान पर आधार से राशन ले सकते हैं। Mera Ration ऐप से नज़दीकी दुकान देखें।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/uttar-pradesh-income-certificate.html", emoji: "💰", title: "उत्तर प्रदेश आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/uttar-pradesh-domicile-certificate.html", emoji: "🏠", title: "उत्तर प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/uttar-pradesh-labour-card.html", emoji: "👷", title: "उत्तर प्रदेश लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/bihar-ration-card.html", emoji: "📋", title: "बिहार राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://fcs.up.gov.in/FoodPortal.aspx", label: "📝 fcs.up.gov.in पर आवेदन" },
    { href: "https://nfsa.up.gov.in/Food/citizen/Default.aspx", label: "📊 ज़िलेवार राशन कार्ड रिपोर्ट" },
  ],
};
