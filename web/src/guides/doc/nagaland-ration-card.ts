import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/NL: Department of Food and Civil Supplies, Nagaland
//   (office 03702233347); citizen service "Don't have Ration Card in
//   Nagaland? Apply here online." (RCMS link on an NIC IP address); FEAST
//   feast.nagaland.gov.in (RC details: FrmFindRcDetails.aspx); AePDS
//   epos.nic.in/naga; helpdesk 1967, 18003453704, 18003453705; schemes
//   ANNAPURNA, AAY, PHH. The page's FPS and ration card counters show 0
//   (no data), so counts come from the notice below.
// - ipr.nagaland.gov.in/node/14370 (DIPR, 21 Aug 2024): NFSA Tide Over
//   guidelines: 2,37,434 PHH households / 11,93,922 beneficiaries and 47,500
//   AAY households / 2,09,657 beneficiaries (~70.95% of population, 2011
//   census); 1,852 FPS; NFSA rice free for PHH and AAY till December 2028;
//   General Household (GHH) card for indigenous inhabitants not under
//   AAY/PHH with annual income of ₹2.5 lakh and above, 5 kg rice per person
//   from Tide Over allocation at a department-fixed price; eldest woman (18+)
//   as head, else eldest man; Aadhaar of all members; Forms I–VI (new GHH
//   card, change head, correct name, delete name, change FPS/address,
//   surrender) to the district office.
// - ipr.nagaland.gov.in/node/14767 (DIPR, 24 Sep 2024): GHH circular, apply
//   by 30 Sep 2024; contact District Food & Civil Supplies Office.
// - nfsa.gov.in Coverage/Salient Features; dfpd.gov.in 1967; free grain
//   1.1.2024–31.12.2028; Mera Ration app / ONORC (national).
// Left out / vague: the online RCMS link (bare IP address, not reachable
// here) is referred to via the NFSA page, not linked directly; current card
// counts; whether a new GHH application window is open now; the rules for
// non-indigenous applicants (only news reports seen); fees and an official
// NFSA document list. fcsnagaland.gov.in did not resolve from here. The old
// page's "ServicePlus Nagaland" online route was not confirmed.
export const nagalandRationCard: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Nagaland Ration Card 2026: Apply & Status",
  description: "नागालैंड राशन कार्ड 2026: AAY, PHH और राज्य का GHH कार्ड, ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय में आवेदन, ज़रूरी कागज़, e-KYC और हेल्पलाइन 1800-345-3704 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "नागालैंड राशन कार्ड 2026: AAY, PHH, GHH कार्ड, आवेदन और e-KYC",
  lead: "नागालैंड में राशन कार्ड खाद्य एवं नागरिक आपूर्ति विभाग (Food & Civil Supplies) बनाता है, जिसका निदेशालय दीमापुर में है। NFSA के अंत्योदय (AAY) और प्राथमिकता परिवार (PHH) कार्ड के अलावा राज्य NFSA से बाहर के मूल निवासी परिवारों को <strong>जनरल हाउसहोल्ड (GHH)</strong> कार्ड देता है। आवेदन और बदलाव के लिए अपने ज़िले के खाद्य एवं नागरिक आपूर्ति कार्यालय से संपर्क करें।",
  facts: [
    ["NFSA परिवार", "2,84,934 (AAY + PHH, 2024 की सूचना)"],
    ["राशन दुकानें", "1,852"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति, मुफ्त"],
    ["हेल्पलाइन", "1800-345-3704, 1800-345-3705, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन Aadhaar आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए, नहीं तो उस सदस्य का राशन रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "नागालैंड में राशन कार्ड के प्रकार",
      intro: "नागालैंड सरकार की अगस्त 2024 की सूचना (DIPR) के अनुसार NFSA के तहत <strong>2,37,434 PHH परिवार</strong> (11,93,922 लाभार्थी) और <strong>47,500 AAY परिवार</strong> (2,09,657 लाभार्थी) पहचाने गए हैं, यानी राज्य की लगभग 70.95% आबादी (2011 की जनगणना के आधार पर)। राज्य में <strong>1,852 राशन दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "किसके लिए", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "सबसे गरीब परिवार (NFSA)", "<strong>35 किलो प्रति परिवार</strong>, मुफ्त"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "राज्य के मापदंडों से चुने परिवार (NFSA)", "<strong>5 किलो प्रति व्यक्ति</strong>, मुफ्त"],
          ["<strong>जनरल हाउसहोल्ड (GHH)</strong>", "NFSA से बाहर के मूल निवासी परिवार, सालाना आय ₹2.5 लाख या ज़्यादा", "5 किलो चावल प्रति व्यक्ति, विभाग की तय कीमत पर"],
        ],
      },
      callout: { kind: "info", html: "AAY और PHH का चावल केंद्र सरकार के निर्देश के अनुसार <strong>31 दिसंबर 2028 तक मुफ्त</strong> है। GHH का चावल केंद्र के \"Tide Over\" कोटे से आता है और इसकी कीमत राज्य का विभाग तय करता है; यह मुफ्त नहीं है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY और PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों से पहचाने गए परिवार। NFSA में राज्य के लाभार्थियों की संख्या तय है, इसलिए नई जगह खाली होने पर ही नया कार्ड बनता है।",
        "<strong>GHH:</strong> भारतीय नागरिक और नागालैंड का मूल निवासी (indigenous inhabitant) परिवार, जो AAY/PHH में नहीं है। सरकारी सूचना के अनुसार यह कार्ड ₹2.5 लाख या ज़्यादा सालाना आय वाले ऐसे परिवारों के लिए है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; दो कार्ड मिलने पर कानूनी कार्रवाई हो सकती है।",
        "कार्ड परिवार की <strong>सबसे बड़ी महिला</strong> (18 साल या ज़्यादा) के नाम बनता है; ऐसी महिला न हो तो सबसे बड़े पुरुष के नाम।",
      ],
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "GHH के लिए सरकारी सूचना में ये बातें लिखी हैं; NFSA कार्ड के लिए भी ज़िला कार्यालय आम तौर पर यही मांगता है (अंतिम सूची वही है जो दफ़्तर बताए):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार नंबर</strong> (जिनका नाम कार्ड में डालना है)",
        "परिवार का विवरण <strong>तय फॉर्म</strong> में, जिस पर ज़रूरी प्रमाण और हस्ताक्षर हों",
        "चालू मोबाइल नंबर और मुखिया का बैंक खाता विवरण",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
      callout: { kind: "warn", html: "गांव परिषद (Village Council) या किसी अधिकारी की सिफ़ारिश/प्रमाण चाहिए या नहीं, और दूसरे राज्य से आए परिवारों के लिए क्या शर्तें हैं, यह अपने ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय से पहले पूछ लें।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      steps: [
        "अपने <strong>ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय</strong> (District Civil Supply Office) जाएं और बताएं कि आप किस कार्ड (NFSA या GHH) के लिए आवेदन करना चाहते हैं।",
        "<strong>GHH कार्ड के लिए Form-I</strong> भरें (सरकारी सूचना के अनुसार)। NFSA कार्ड का फॉर्म दफ़्तर से लें।",
        "सभी सदस्यों के आधार नंबर और मांगे गए कागज़ के साथ फॉर्म जमा करें और रसीद लें।",
        "दफ़्तर विभाग के RCMS रिकॉर्ड से जांच करके मंज़ूरी देता है। सूचना के अनुसार <strong>सिर्फ़ आवेदन जमा करने से कार्ड का हक नहीं बनता</strong>।",
      ],
      callout: { kind: "info", html: "NFSA पोर्टल के नागालैंड पेज पर \"Don't have Ration Card in Nagaland? Apply here online\" का लिंक है, पर 13 अक्टूबर 2026 को वह हमारी जांच में नहीं खुला। GHH के आवेदन की पिछली आख़िरी तारीख़ 30 सितंबर 2024 थी; अभी नया आवेदन लिया जा रहा है या नहीं, ज़िला कार्यालय से पूछें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और दूसरे बदलाव",
      intro: "GHH कार्ड के लिए सरकारी सूचना में अलग-अलग फॉर्म तय हैं, जो ज़िला कार्यालय में जमा होते हैं:",
      table: {
        head: ["काम", "फॉर्म"],
        rows: [
          ["नया GHH कार्ड", "Form-I"],
          ["परिवार का मुखिया बदलना", "Form-II"],
          ["सदस्य का नाम बदलना/सुधारना", "Form-III"],
          ["सदस्य का नाम हटाना", "Form-IV"],
          ["राशन दुकान या पता बदलना", "Form-V"],
          ["कार्ड सरेंडर करना", "Form-VI"],
        ],
      },
      html: "<p>AAY/PHH कार्ड में नया सदस्य जोड़ने या नाम हटाने के लिए भी ज़िला कार्यालय में आवेदन करें। नए सदस्य का आधार, बच्चे का जन्म प्रमाण पत्र और बहू के लिए पुराने कार्ड से नाम हटने का सबूत साथ रखें।</p>",
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      list: [
        '<strong>FEAST नागालैंड:</strong> NFSA पोर्टल पर <a href="https://feast.nagaland.gov.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">feast.nagaland.gov.in → RC Details</a> का लिंक है, जहां राशन कार्ड नंबर से विवरण देखा जाता है।',
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड के सदस्य, हर महीने का हक और लेन-देन।",
        "आवेदन की स्थिति के लिए रसीद लेकर ज़िला कार्यालय से पूछें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है। मोबाइल नंबर और आधार भी कार्ड से जुड़ा रखें।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड (AAY, PHH) वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। GHH कार्ड NFSA का हिस्सा नहीं है।",
        "<strong>Mera Ration ऐप:</strong> कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-3704</strong> और <strong>1800-345-3705</strong>: NFSA पोर्टल पर नागालैंड के टोल-फ्री हेल्पडेस्क नंबर",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        "<strong>विभाग का दफ़्तर:</strong> 0370-2233347 (NFSA पोर्टल पर दिया नंबर)",
        "राशन कम मिले या दुकान मना करे तो ज़िला खाद्य एवं नागरिक आपूर्ति अधिकारी को लिखित शिकायत दें।",
      ],
    },
  ],
  official: [
    { href: "https://nfsa.gov.in/State/NL", title: "NFSA पोर्टल: नागालैंड का पेज (ऑनलाइन आवेदन लिंक, हेल्पलाइन)" },
    { href: "https://feast.nagaland.gov.in/", title: "FEAST नागालैंड: RC विवरण और रिपोर्ट" },
    { href: "https://ipr.nagaland.gov.in/node/14370", title: "DIPR नागालैंड: GHH और Tide Over दिशानिर्देश (अगस्त 2024)" },
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", title: "NFSA: ज़िला खाद्य एवं आपूर्ति कार्यालयों की सूची" },
  ],
  faq: [
    { q: "नागालैंड में नया राशन कार्ड कैसे बनवाएं?", a: "अपने ज़िला खाद्य एवं नागरिक आपूर्ति कार्यालय में फॉर्म भरकर सभी सदस्यों के आधार नंबर के साथ जमा करें। GHH कार्ड के लिए Form-I है। NFSA पोर्टल पर एक ऑनलाइन आवेदन लिंक भी है, पर वह हमारी जांच में नहीं खुला।" },
    { q: "नागालैंड में GHH राशन कार्ड क्या है?", a: "जनरल हाउसहोल्ड (GHH) कार्ड उन मूल निवासी परिवारों के लिए है जो AAY/PHH में नहीं हैं और जिनकी सालाना आय ₹2.5 लाख या ज़्यादा है। इस पर Tide Over कोटे से 5 किलो चावल प्रति व्यक्ति विभाग की तय कीमत पर मिलता है।" },
    { q: "नागालैंड में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, 31 दिसंबर 2028 तक मुफ्त। GHH पर 5 किलो चावल प्रति व्यक्ति, कीमत देकर।" },
    { q: "नागालैंड राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1800-345-3704, 1800-345-3705 और 1967।" },
    { q: "क्या नागालैंड का राशन कार्ड दूसरे राज्य में चलता है?", a: "AAY और PHH (NFSA) कार्ड One Nation One Ration Card के तहत देश की किसी भी e-PoS दुकान पर चलते हैं। GHH कार्ड राज्य का कार्ड है, उस पर यह सुविधा नहीं है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/nagaland-income-certificate.html", emoji: "💰", title: "नागालैंड आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/nagaland-domicile-certificate.html", emoji: "🏠", title: "नागालैंड निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/nagaland-birth-certificate.html", emoji: "👶", title: "नागालैंड जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/nagaland-labour-card.html", emoji: "👷", title: "नागालैंड लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://nfsa.gov.in/portal/DFS_Offices_AA", label: "🏢 ज़िला आपूर्ति कार्यालय" },
    { href: "https://feast.nagaland.gov.in/FrmFindRcDetails.aspx", label: "🔎 RC विवरण देखें" },
  ],
};
