import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - ladakh.gov.in/food-civil-supplies-consumer-affairs/ (FCS&CA Dept., UT
//   Ladakh): operational since 1970 in Leh and Kargil; 404 sale centres;
//   Kargil 27,001 cards / 1,24,574 persons, Leh 25,584 cards / 1,02,083
//   persons, total 52,585 cards / 2,26,657 persons under PHH, AAY and NPHH;
//   Aadhaar seeding 99.77% (cards), 98.50% (members); distribution via e-POS;
//   vision: smart ration card, SMS alerts, 100% eKYC; NFSA in erstwhile J&K
//   from 1 Feb 2016; PMGKAY 35 kg/AAY household, 5 kg/PHH person; NPHH 5 kg per
//   person at Rs 15/kg rice and Rs 13/kg atta; Ladakh Food Security Scheme
//   (LFSS): extra 5 kg/person (up to 9 members) at Rs 29/kg fortified rice,
//   with the family-size table (NFSA + LFSS up to 50 kg); ONORC launched Aug
//   2020; toll-free short code 14445 for inter-state portability complaints;
//   Mera Ration app.
// - ladakh.gov.in press release, 9 Sep 2025 (DC Leh review): Aadhaar is a
//   prerequisite for ration cards, which are issued only to residents of
//   Ladakh; F&CS asked to survey villages for households without cards.
// - nfsa.gov.in/State/LA: FCS&CA Dept., UT Ladakh, phone 01982-252376; RCMS
//   jk.epds.nic.in/LH/epds; FEAST feast.ladakh.gov.in; AePDS epos.nic.in/ladakh;
//   404 FPS; NFSA cards 28,926 (AAY 5,447, PHH 23,479). No state toll-free
//   number listed.
// - Free grain to 31.12.2028 (GoI notification of 04.12.2023).
// Note: the RCMS/FEAST/ePoS portals did not open from our checks; no official
// online application for new cards was found, so the page points to the
// department offices in Leh and Kargil.
// Left out: documents list beyond Aadhaar/residence, fees, time limits, NPHH
// eligibility rules.
export const ladakhRationCard: DocGuide = {
  state: { slug: "ladakh", hi: "लद्दाख" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Ladakh Ration Card 2026: Apply & Status",
  description: "लद्दाख राशन कार्ड 2026: Leh और Kargil में PHH, AAY और NPHH कार्ड, लद्दाख खाद्य सुरक्षा योजना का अतिरिक्त अनाज, आवेदन कहां करें, e-KYC और हेल्पलाइन 1967 / 14445।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लद्दाख राशन कार्ड 2026: कार्ड के प्रकार, अतिरिक्त अनाज (LFSS), आवेदन और e-KYC",
  lead: "लद्दाख में राशन कार्ड UT प्रशासन का खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले (FCS&CA) विभाग बनाता है, जो Leh और Kargil दोनों ज़िलों में काम करता है। यहां PHH, AAY और NPHH कार्ड हैं। NFSA के अनाज के ऊपर <strong>लद्दाख खाद्य सुरक्षा योजना (LFSS)</strong> में हर व्यक्ति को 5 किलो अतिरिक्त चावल सस्ते दाम पर मिलता है।",
  facts: [
    ["कुल कार्ड", "52,585 (Leh 25,584, Kargil 27,001)"],
    ["राशन केंद्र", "404 सेल सेंटर"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति + LFSS"],
    ["हेल्पलाइन", "1967, 14445"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग के अनुसार राशन कार्ड सिर्फ <strong>लद्दाख के निवासियों</strong> को मिलता है और इसके लिए <strong>आधार ज़रूरी</strong> है। राशन e-POS मशीन से बंटता है, इसलिए हर सदस्य का e-KYC पूरा रखें।",
  sections: [
    {
      id: "prakar",
      title: "लद्दाख में राशन कार्ड के प्रकार और अनाज",
      intro: "विभाग के अनुसार लद्दाख में <strong>52,585 राशन कार्ड</strong> पर <strong>2,26,657 लोग</strong> राशन लेते हैं। Kargil में 27,001 कार्ड (1,24,574 लोग) और Leh में 25,584 कार्ड (1,02,083 लोग) हैं।",
      table: {
        head: ["कार्ड", "हर महीने अनाज", "दाम"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "35 किलो प्रति परिवार", "मुफ्त (31 दिसंबर 2028 तक)"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "5 किलो प्रति व्यक्ति", "मुफ्त (31 दिसंबर 2028 तक)"],
          ["<strong>NPHH</strong> (NFSA से बाहर)", "5 किलो प्रति व्यक्ति", "चावल ₹15/किलो, आटा ₹13/किलो"],
        ],
      },
      callout: { kind: "info", html: "NFSA पोर्टल पर लद्दाख के NFSA कार्ड 28,926 दर्ज हैं (AAY 5,447 और PHH 23,479)। बाकी कार्ड NPHH के हैं। ये आंकड़े और दाम विभाग के पेज से हैं; बदलाव हो तो सेल सेंटर से पुष्टि करें।" },
    },
    {
      id: "lfss",
      title: "लद्दाख खाद्य सुरक्षा योजना (LFSS): अतिरिक्त अनाज",
      intro: "विभाग के अनुसार LFSS में NFSA के ऊपर <strong>हर व्यक्ति को 5 किलो अतिरिक्त</strong> अनाज (फोर्टिफाइड चावल) <strong>₹29 प्रति किलो</strong> पर मिलता है, परिवार के 9 सदस्यों तक। NFSA और LFSS मिलाकर एक परिवार को ज़्यादा से ज़्यादा 50 किलो मिलता है:",
      table: {
        head: ["परिवार के सदस्य", "NFSA", "LFSS (अतिरिक्त)", "कुल"],
        rows: [
          ["1", "5 किलो", "5 किलो", "10 किलो"],
          ["2", "10 किलो", "10 किलो", "20 किलो"],
          ["3", "15 किलो", "15 किलो", "30 किलो"],
          ["4", "20 किलो", "20 किलो", "40 किलो"],
          ["5", "25 किलो", "25 किलो", "50 किलो"],
          ["6", "30 किलो", "20 किलो", "50 किलो"],
          ["7", "35 किलो", "15 किलो", "50 किलो"],
          ["8", "40 किलो", "10 किलो", "50 किलो"],
          ["9", "45 किलो", "5 किलो", "50 किलो"],
        ],
      },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        "परिवार के सभी सदस्यों का <strong>आधार</strong> बनवा लें (5 साल से ऊपर के हर व्यक्ति का आधार बनता है)।",
        "लद्दाख में <strong>रहने का प्रमाण</strong>, मुखिया की फोटो और मोबाइल नंबर तैयार रखें। पहले किसी और कार्ड में नाम था तो वहां से नाम हटने का सबूत लें।",
        "अपने ज़िले (<strong>Leh या Kargil</strong>) के FCS&CA विभाग के दफ्तर या अपने सेल सेंटर के स्टोरकीपर से आवेदन फॉर्म और बाकी कागज़ों की सूची लें।",
        "फॉर्म भरकर दफ्तर में जमा करें और रसीद/आवेदन नंबर संभालें। जांच के बाद कार्ड विभाग के रिकॉर्ड (RCMS) में दर्ज होता है।",
      ],
      callout: { kind: "warn", html: "लद्दाख में नए कार्ड का कोई आधिकारिक ऑनलाइन आवेदन हमें नहीं मिला, और विभाग के RCMS पोर्टल 13 अक्टूबर 2026 को हमारी जांच में नहीं खुले। सितंबर 2025 में DC Leh ने विभाग को गांव-गांव सर्वे करके बिना कार्ड वाले परिवारों की पहचान करने को कहा था। जानकारी के लिए विभाग का नंबर <strong>01982-252376</strong> (NFSA पोर्टल के अनुसार) है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना और बदलाव",
      list: [
        "नए सदस्य का नाम जोड़ने के लिए उसका <strong>आधार</strong> ज़रूरी है; बच्चे के लिए जन्म प्रमाण पत्र रखें।",
        "शादी के बाद आई सदस्य के लिए पुराने कार्ड से <strong>नाम हटने का सबूत</strong> रखें।",
        "मृत्यु पर नाम हटाने के लिए <strong>मृत्यु प्रमाण पत्र</strong> लगता है।",
        "बदलाव का आवेदन Leh या Kargil के FCS&CA दफ्तर में दें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, स्मार्ट राशन कार्ड, One Nation One Ration Card",
      list: [
        "<strong>e-KYC:</strong> सेल सेंटर की e-POS मशीन पर आधार से अंगूठा/उंगली लगाकर। विभाग का लक्ष्य 100% e-KYC है।",
        "<strong>स्मार्ट राशन कार्ड:</strong> विभाग पुराने कार्ड की जगह स्मार्ट राशन कार्ड लाने पर काम कर रहा है।",
        "<strong>One Nation One Ration Card:</strong> लद्दाख में अगस्त 2020 से लागू है। दूसरे राज्य से आए मज़दूर अपने NFSA कार्ड से यहां राशन ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हक और नज़दीकी दुकान।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>14445</strong>: दूसरे राज्य के कार्ड से राशन (ONORC) की शिकायत; विभाग के अनुसार यह नंबर लद्दाख FCS&CA निदेशालय में लगा है",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का हेल्पलाइन नंबर",
        "<strong>01982-252376</strong>: FCS&CA विभाग, लद्दाख (NFSA पोर्टल के अनुसार)",
      ],
    },
  ],
  official: [
    { href: "https://ladakh.gov.in/food-civil-supplies-consumer-affairs/", title: "FCS&CA विभाग, UT लद्दाख: योजनाएं और संपर्क" },
    { href: "https://nfsa.gov.in/State/LA", title: "NFSA पोर्टल: लद्दाख का पेज (RCMS, FEAST, ePoS लिंक)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "लद्दाख में नया राशन कार्ड कैसे बनवाएं?", a: "सभी सदस्यों का आधार और लद्दाख में रहने का प्रमाण लेकर Leh या Kargil के FCS&CA विभाग के दफ्तर में आवेदन करें। विभाग के अनुसार कार्ड सिर्फ लद्दाख के निवासियों को मिलता है।" },
    { q: "लद्दाख खाद्य सुरक्षा योजना (LFSS) क्या है?", a: "यह UT की योजना है जिसमें NFSA के ऊपर हर व्यक्ति को 5 किलो अतिरिक्त फोर्टिफाइड चावल ₹29 प्रति किलो पर मिलता है, परिवार के 9 सदस्यों तक। NFSA और LFSS मिलाकर एक परिवार को अधिकतम 50 किलो मिलता है।" },
    { q: "NPHH कार्ड पर कितना राशन मिलता है?", a: "विभाग के अनुसार NPHH कार्ड पर हर व्यक्ति को 5 किलो अनाज मिलता है: चावल ₹15 प्रति किलो और आटा ₹13 प्रति किलो।" },
    { q: "लद्दाख में AAY और PHH कार्ड पर कितना अनाज मिलता है?", a: "AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "लद्दाख राशन कार्ड की शिकायत कहां करें?", a: "दूसरे राज्य के कार्ड से राशन की दिक्कत के लिए 14445, सामान्य शिकायत के लिए 1967, या विभाग का नंबर 01982-252376।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/ladakh-domicile-certificate.html", emoji: "🏠", title: "लद्दाख निवास प्रमाण पत्र", text: "राशन कार्ड के लिए निवास का सबूत" },
    { href: "/states/ladakh-income-certificate.html", emoji: "💰", title: "लद्दाख आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/ladakh-labour-card.html", emoji: "👷", title: "लद्दाख लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "राशन कार्ड के लिए ज़रूरी" },
    { href: "/states/jammu-kashmir-ration-card.html", emoji: "📋", title: "जम्मू-कश्मीर राशन कार्ड", text: "पड़ोसी UT का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ladakh.gov.in/food-civil-supplies-consumer-affairs/", label: "🏛️ FCS&CA लद्दाख" },
    { href: "https://nfsa.gov.in/State/LA", label: "🔗 NFSA: लद्दाख के पोर्टल" },
  ],
};
