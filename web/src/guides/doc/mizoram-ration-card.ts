import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/MZ: Food, Civil Supplies & Consumer Affairs (FCS&CA),
//   Mizoram; Director's office phones 03892322872 and 03892321035; 1,264 fair
//   price shops; 1,80,020 ration cards (AAY 25,813, PHH 1,54,207); FEAST
//   links on mzfeast.nic.in (RC details: FrmFindRcDetails.aspx); AePDS on
//   epos.mizoram.gov.in. The page as read today shows no helpdesk number and
//   no online application link.
// - nfsa.gov.in/portal/State_UT_Online_Grievance_AA: Mizoram's grievance link
//   is mizorampds.nic.in/grievances.htm (the host did not resolve from here,
//   so it is not linked).
// - services.india.gov.in "application for ration card mizoram": form for a
//   new ration card under the Mizoram FCS&CA department (download).
// - PTI via theweek.in (26 May 2025): CM Lalduhoma said only 60.26% of ration
//   card holders in the state are covered under NFSA (so the rest hold
//   state non-NFSA cards).
// - nfsa.gov.in Coverage/Salient Features; dfpd.gov.in 1967; free grain
//   1.1.2024–31.12.2028; Mera Ration app / ONORC (national).
// Left out / vague: reported plans to re-classify NFSA / non-NFSA households
// by income and to change the non-NFSA rice price (news reports, date and
// final order not confirmed); an official document list, fees and time
// limits; a state 1800 number (only a search-engine snippet showed one).
// The old page's "ServicePlus Mizoram" online route was not confirmed.
export const mizoramRationCard: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Mizoram Ration Card 2026: Apply & Status",
  description: "मिज़ोरम राशन कार्ड 2026: NFSA (AAY, PHH) और राज्य के non-NFSA कार्ड, ज़िला नागरिक आपूर्ति कार्यालय में आवेदन, ज़रूरी कागज़, कार्ड का विवरण, e-KYC और हेल्पलाइन 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मिज़ोरम राशन कार्ड 2026: पात्रता, आवेदन, कार्ड का विवरण और e-KYC",
  lead: "मिज़ोरम में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग (FCS&CA) बनाता है। NFSA के अंत्योदय (AAY) और प्राथमिकता परिवार (PHH) कार्ड के अलावा राज्य में बहुत से परिवारों के पास non-NFSA कार्ड भी हैं। नया कार्ड बनवाने के लिए विभाग का फॉर्म भरकर अपने ज़िले के नागरिक आपूर्ति कार्यालय में जमा करें।",
  facts: [
    ["NFSA कार्ड", "1,80,020 (NFSA पोर्टल)"],
    ["राशन दुकानें", "1,264"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "1967 (केंद्र सरकार)"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "मिज़ोरम में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल के मिज़ोरम पेज के अनुसार राज्य में NFSA के <strong>1,80,020 राशन कार्ड</strong> हैं, जिन्हें <strong>1,264 उचित मूल्य दुकानों</strong> से राशन मिलता है।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "25,813", "<strong>35 किलो प्रति परिवार</strong>, मुफ्त"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "1,54,207", "<strong>5 किलो प्रति व्यक्ति</strong>, मुफ्त"],
          ["<strong>non-NFSA (राज्य का कार्ड)</strong>", "NFSA पोर्टल पर नहीं", "राज्य सरकार की तय मात्रा और कीमत पर"],
        ],
      },
      callout: { kind: "info", html: "मई 2025 में मुख्यमंत्री ने कहा था कि राज्य के केवल <strong>60.26% राशन कार्ड धारक</strong> NFSA में आते हैं; बाकी परिवार राज्य के non-NFSA कार्ड पर राशन लेते हैं। NFSA (AAY, PHH) का अनाज केंद्र सरकार की अधिसूचना के अनुसार <strong>31 दिसंबर 2028 तक मुफ्त</strong> है। non-NFSA चावल की कीमत और मात्रा राज्य सरकार बदलती रहती है, इसलिए अपनी राशन दुकान से पूछें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "आवेदक और परिवार <strong>मिज़ोरम के निवासी</strong> हों; एक परिवार का <strong>एक ही राशन कार्ड</strong> होता है।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "राज्य सरकार NFSA और non-NFSA परिवारों को आय के आधार पर दोबारा जांचने की बात कह चुकी है। आपका परिवार किस श्रेणी में आएगा, यह अपने ज़िला नागरिक आपूर्ति कार्यालय से पक्का करें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "राज्य की आधिकारिक दस्तावेज़ सूची हम नहीं देख पाए। ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो दफ़्तर मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "परिवार के हर सदस्य का नाम, उम्र और मुखिया से रिश्ता",
        "बच्चों के लिए <strong>जन्म प्रमाण पत्र</strong>",
        "मिज़ोरम के <strong>पते का प्रमाण</strong> और मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        "FCS&CA विभाग का <strong>नए राशन कार्ड का फॉर्म</strong> लें। यह फॉर्म भारत सरकार के services.india.gov.in पोर्टल पर \"Application for Ration Card, Mizoram\" में डाउनलोड के लिए दिया गया है; ज़िला कार्यालय में भी मिलता है।",
        "फॉर्म पूरा भरें। अधूरे फॉर्म आम तौर पर लौटा दिए जाते हैं।",
        "कागज़ों की कॉपी लगाकर अपने <strong>ज़िला नागरिक आपूर्ति अधिकारी (DCSO) कार्यालय</strong> में जमा करें और रसीद लें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "पुरानी जानकारी में \"ServicePlus से ऑनलाइन आवेदन\" लिखा मिलता है, पर 13 अक्टूबर 2026 को NFSA पोर्टल पर मिज़ोरम के लिए कोई ऑनलाइन आवेदन लिंक नहीं था और हम किसी आधिकारिक पेज पर इसकी पुष्टि नहीं कर पाए। ज़िला कार्यालयों की सूची NFSA पोर्टल के \"District Food and Supply Offices\" पेज पर है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "<strong>बदलाव (modification):</strong> सदस्य जोड़ने/हटाने या जानकारी सुधारने के लिए विभाग का संशोधन फॉर्म भरकर ज़िला कार्यालय में दें।",
        "नया सदस्य जोड़ने के लिए उसका आधार; बच्चे का जन्म प्रमाण पत्र; बहू के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।",
        "<strong>दूसरे राज्य/ज़िले में जाने पर:</strong> पुराना कार्ड सरेंडर करके सर्टिफिकेट लें।",
      ],
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      list: [
        '<strong>FEAST मिज़ोरम:</strong> NFSA पोर्टल पर <a href="https://mzfeast.nic.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">mzfeast.nic.in → RC Details</a> का लिंक है, जहां राशन कार्ड नंबर से विवरण देखा जाता है।',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड के सदस्य, हर महीने का हक और लेन-देन।",
        "आवेदन की स्थिति के लिए रसीद लेकर ज़िला कार्यालय से पूछें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड (AAY, PHH) वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। यह सुविधा non-NFSA कार्ड पर नहीं है।",
        "<strong>Mera Ration ऐप:</strong> कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        "<strong>FCS&CA निदेशालय, आइज़ोल:</strong> 0389-2322872, 0389-2321035 (NFSA पोर्टल पर दिए नंबर)",
        "राशन कम मिले या दुकान मना करे तो अपने ज़िला नागरिक आपूर्ति अधिकारी (DCSO) को लिखित शिकायत दें।",
      ],
    },
  ],
  official: [
    { href: "https://nfsa.gov.in/State/MZ", title: "NFSA पोर्टल: मिज़ोरम का पेज (कार्ड, दुकानें, संपर्क)" },
    { href: "https://services.india.gov.in/service/detail/application-for-ration-card-mizoram", title: "भारत सरकार सेवा पोर्टल: मिज़ोरम राशन कार्ड का फॉर्म" },
    { href: "https://mzfeast.nic.in/FrmFindRcDetails.aspx", title: "FEAST मिज़ोरम: RC विवरण" },
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", title: "NFSA: ज़िला खाद्य एवं आपूर्ति कार्यालयों की सूची" },
  ],
  faq: [
    { q: "मिज़ोरम में नया राशन कार्ड कैसे बनवाएं?", a: "FCS&CA विभाग का नए राशन कार्ड का फॉर्म (services.india.gov.in पर या ज़िला कार्यालय में) भरें, सभी सदस्यों के आधार और कागज़ लगाकर ज़िला नागरिक आपूर्ति कार्यालय में जमा करें और रसीद संभालें।" },
    { q: "मिज़ोरम में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, 31 दिसंबर 2028 तक मुफ्त। non-NFSA कार्ड पर मात्रा और कीमत राज्य सरकार तय करती है।" },
    { q: "मिज़ोरम में non-NFSA राशन कार्ड क्या है?", a: "जो परिवार NFSA (AAY/PHH) में नहीं आते, उन्हें राज्य सरकार अपना कार्ड देती है जिस पर तय कीमत पर चावल मिलता है। मई 2025 में मुख्यमंत्री के अनुसार केवल 60.26% कार्ड धारक NFSA में थे।" },
    { q: "मिज़ोरम में कितने NFSA राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 1,80,020 कार्ड: AAY 25,813 और PHH 1,54,207। राज्य में 1,264 राशन दुकानें हैं।" },
    { q: "मिज़ोरम राशन कार्ड की शिकायत कहां करें?", a: "केंद्र का टोल-फ्री 1967, FCS&CA निदेशालय (0389-2322872), या अपने ज़िला नागरिक आपूर्ति अधिकारी को लिखित शिकायत।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/mizoram-income-certificate.html", emoji: "💰", title: "मिज़ोरम आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/mizoram-domicile-certificate.html", emoji: "🏠", title: "मिज़ोरम निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/mizoram-birth-certificate.html", emoji: "👶", title: "मिज़ोरम जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/mizoram-labour-card.html", emoji: "👷", title: "मिज़ोरम लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://services.india.gov.in/service/detail/application-for-ration-card-mizoram", label: "📄 नए कार्ड का फॉर्म" },
    { href: "https://mzfeast.nic.in/FrmFindRcDetails.aspx", label: "🔎 RC विवरण देखें" },
  ],
};
