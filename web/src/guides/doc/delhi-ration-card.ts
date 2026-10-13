import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/DL (Dept. of Food & Public Distribution, GoI): Department
//   of Food, Supplies and Consumer Affairs, GNCTD; state food website
//   nfs.delhi.gov.in; "Ration Card and Beneficiary Details" link
//   nfs.delhi.gov.in/Citizen/RCWiseAllocationDetails.aspx; AePDS
//   epos.delhi.gov.in; helpdesk 1967 and 1800110841; schemes AAY, PHH (NFSA)
//   and Annapurna; 2,018 FPS; 17,78,372 cards (AAY 68,708, PHH 17,09,664).
// - Food department public notice NFS_PublicNotice_20260515 (edistrict.delhi
//   .gov.in/Downloads/Abstract/), as quoted in search results: fresh
//   applications for new ration cards and addition of members accepted on the
//   e-District portal (edistrict.delhigovt.nic.in) from 15.05.2026; old and
//   long-pending applications returned to the applicant's e-District login
//   ("Pending for Submission" under "Apply Online") for resubmission with a
//   Family Income Certificate from the jurisdictional Revenue Authority;
//   helpline 1967.
// - News reports, May 2026 (Business Today 21 May 2026, UNI/Daily Pioneer,
//   Outlook Money): Delhi Food Security Rules, 2026; income limit raised from
//   Rs 1 lakh to Rs 1.2 lakh with revenue-department income certificate
//   mandatory (no self-certification); exclusions (property in A-E category
//   colonies, income tax payer, four-wheeler except one commercial vehicle for
//   livelihood, a government employee in the family, electricity connection
//   above 2 kW); scrutiny by Food & Supply Officers, final decision by a
//   district committee headed by the DM; Cabinet decision of 26 May 2026 to
//   raise the limit to Rs 2.5 lakh (reported; no official notification seen).
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH, eldest
//   woman head); free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023 (as in our Maharashtra guide); Mera Ration app.
// Note: nfs.delhi.gov.in and edistrict.delhi.gov.in did not open from our
// checks (connection reset), so the notice text is taken from search extracts.
// Left out: fees, time limit, the final official document list, and whether
// the Rs 2.5 lakh limit has been formally notified.
export const delhiRationCard: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Delhi Ration Card 2026: Apply & Status",
  description: "दिल्ली राशन कार्ड 2026: 15 मई 2026 से e-District पर नए कार्ड और नाम जोड़ने के आवेदन, आय प्रमाण पत्र ज़रूरी, AAY/PHH कार्ड, RC विवरण, e-KYC और हेल्पलाइन 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "दिल्ली राशन कार्ड 2026: e-District पर आवेदन, आय सीमा, स्टेटस और e-KYC",
  lead: "दिल्ली में राशन कार्ड दिल्ली सरकार का खाद्य, आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। विभाग के नोटिस के अनुसार <strong>15 मई 2026 से</strong> नए राशन कार्ड और कार्ड में सदस्य जोड़ने के आवेदन <strong>e-District पोर्टल</strong> पर ऑनलाइन लिए जा रहे हैं। आवेदन के साथ राजस्व विभाग से बना <strong>परिवार का आय प्रमाण पत्र</strong> ज़रूरी है।",
  facts: [
    ["दिल्ली में कार्ड", "17.78 लाख (NFSA पोर्टल)"],
    ["आवेदन", "e-District पोर्टल (15 मई 2026 से)"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1967, 1800-110-841"],
  ],
  notice: "<strong>पुराने आवेदन वालों के लिए:</strong> विभाग के नोटिस के अनुसार पुराने और लंबे समय से अटके आवेदन आवेदक के e-District लॉगिन में वापस भेजे गए हैं। लॉगिन करके <strong>\"Apply Online\" में \"Pending for Submission\"</strong> देखें और आय प्रमाण पत्र लगाकर आवेदन दोबारा जमा करें।",
  sections: [
    {
      id: "prakar",
      title: "दिल्ली में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल पर दिल्ली के पेज के अनुसार यहां <strong>17,78,372 राशन कार्ड</strong> और <strong>2,018 राशन की दुकानें (FPS)</strong> हैं। विभाग की योजनाओं में AAY, PHH और अन्नपूर्णा योजना दर्ज है।",
      table: {
        head: ["कार्ड", "संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "68,708", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "17,09,664", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड: आय सीमा और शर्तें",
      intro: "समाचार रिपोर्टों के अनुसार <strong>दिल्ली खाद्य सुरक्षा नियम, 2026</strong> में परिवार की सालाना आय सीमा ₹1 लाख से बढ़ाकर <strong>₹1.2 लाख</strong> की गई और राजस्व विभाग का आय प्रमाण पत्र ज़रूरी किया गया (खुद लिखकर देने वाला तरीका खत्म)। रिपोर्टों में बताई गई शर्तों के अनुसार ये परिवार पात्र नहीं हैं:",
      list: [
        "जिनकी संपत्ति <strong>A से E श्रेणी</strong> की कॉलोनियों में है",
        "परिवार का कोई सदस्य <strong>इनकम टैक्स</strong> देता है",
        "जिनके पास <strong>चार पहिया वाहन</strong> है (रोज़ी-रोटी के लिए एक व्यावसायिक वाहन को छोड़कर)",
        "परिवार में कोई <strong>सरकारी नौकरी</strong> में है",
        "<strong>2 किलोवाट से ज़्यादा</strong> का बिजली कनेक्शन है",
      ],
      callout: { kind: "warn", html: "मई 2026 की खबरों के अनुसार दिल्ली कैबिनेट ने आय सीमा <strong>₹2.5 लाख</strong> करने का फैसला किया। इसकी आधिकारिक अधिसूचना हमें नहीं मिली। आवेदन से पहले e-District पोर्टल पर लिखी शर्तें पढ़ें या 1967 पर पूछें कि अभी कौन सी आय सीमा लागू है।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल मांगे):",
      list: [
        "<strong>परिवार का आय प्रमाण पत्र</strong>, जो आपके इलाके के राजस्व विभाग (SDM/तहसील) से बना हो: <a href=\"/states/delhi-income-certificate.html\">दिल्ली आय प्रमाण पत्र कैसे बनवाएं</a>",
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "दिल्ली के <strong>पते का प्रमाण</strong>",
        "परिवार की मुखिया (सबसे बड़ी महिला) की <strong>फोटो</strong> और बैंक खाते का विवरण",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: e-District पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.delhigovt.nic.in/" target="_blank" rel="noopener nofollow">e-District दिल्ली</a> पोर्टल खोलें। खाद्य विभाग की वेबसाइट nfs.delhi.gov.in से भी यहां पहुंचा जा सकता है।',
        "पोर्टल पर रजिस्टर करें या अपने लॉगिन से अंदर जाएं।",
        "<strong>Apply Online</strong> में नए राशन कार्ड (Food Security) का फॉर्म चुनें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता, आधार और पता भरें; आय प्रमाण पत्र और बाकी कागज़ अपलोड करें।",
        "फॉर्म जमा करके <strong>आवेदन नंबर</strong> संभाल कर रखें।",
      ],
      callout: { kind: "info", html: "खबरों के अनुसार आवेदन की जांच पहले खाद्य एवं आपूर्ति अधिकारी (FSO) ऑनलाइन करते हैं, ज़रूरत हो तो घर पर जांच होती है, और आखिरी फैसला ज़िलाधिकारी (DM) की अध्यक्षता वाली ज़िला समिति लेती है। खुद ऑनलाइन न भर सकें तो नज़दीकी <a href=\"/service/csc-locator/delhi.html\">CSC केंद्र</a> की मदद लें।" },
    },
    {
      id: "sadasya",
      title: "कार्ड में नाम जोड़ना",
      intro: "विभाग के नोटिस के अनुसार मौजूदा कार्ड में <strong>सदस्य जोड़ने का आवेदन</strong> भी 15 मई 2026 से e-District पोर्टल पर हो रहा है।",
      list: [
        "नए सदस्य का <strong>आधार</strong> ज़रूरी है।",
        "बच्चे के लिए <strong>जन्म प्रमाण पत्र</strong> साथ रखें।",
        "शादी के बाद आई सदस्य के लिए पुराने कार्ड से <strong>नाम हटने का सबूत</strong> रखें।",
      ],
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण और राशन कैसे देखें",
      steps: [
        '<a href="https://nfs.delhi.gov.in/Citizen/RCWiseAllocationDetails.aspx?type=MA==" target="_blank" rel="noopener nofollow">nfs.delhi.gov.in → Ration Card and Beneficiary Details</a> खोलें (यह लिंक NFSA पोर्टल पर दिल्ली के पेज पर दिया गया है)।',
        "अपना <strong>राशन कार्ड नंबर</strong> डालें।",
        "कार्ड में दर्ज सदस्य और मिलने वाले राशन का विवरण दिख जाएगा।",
      ],
      html: "<p>आवेदन की स्थिति e-District पोर्टल पर अपने लॉगिन में देखें। 13 अक्टूबर 2026 को nfs.delhi.gov.in और e-District पोर्टल हमारी जांच में नहीं खुले; न खुलें तो कुछ समय बाद कोशिश करें या 1967 पर फोन करें।</p>",
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> राशन दुकान की e-PoS मशीन पर अंगूठा/उंगली लगाकर आधार से पहचान होती है। परिवार के हर सदस्य का आधार कार्ड से जुड़ा होना चाहिए।",
        "<strong>One Nation One Ration Card:</strong> दूसरे राज्य का NFSA कार्ड वाला व्यक्ति दिल्ली की किसी भी e-PoS दुकान से अपना हिस्सा ले सकता है, और दिल्ली का कार्ड वाला दूसरे राज्य में।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["पुराना आवेदन अटका है", "e-District लॉगिन में \"Pending for Submission\" देखें, आय प्रमाण पत्र लगाकर दोबारा जमा करें"],
          ["आय प्रमाण पत्र नहीं है", "पहले राजस्व विभाग से परिवार का आय प्रमाण पत्र बनवाएं, फिर आवेदन करें"],
          ["PoS पर अंगूठा नहीं लग रहा", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["राशन कम मिला या दुकान ने मना किया", "1967 या 1800-110-841 पर शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: विभाग के नोटिस और NFSA पोर्टल पर दिया गया हेल्पलाइन नंबर",
        "<strong>1800-110-841</strong>: NFSA पोर्टल पर दिल्ली का हेल्पडेस्क नंबर",
        "खाद्य, आपूर्ति एवं उपभोक्ता मामले विभाग, दिल्ली सरकार: 011-23378759, 011-23379252 (NFSA पोर्टल के अनुसार)",
      ],
    },
  ],
  official: [
    { href: "https://edistrict.delhigovt.nic.in/", title: "e-District दिल्ली: नए राशन कार्ड और सदस्य जोड़ने का आवेदन" },
    { href: "https://nfs.delhi.gov.in/", title: "खाद्य, आपूर्ति एवं उपभोक्ता मामले विभाग, दिल्ली (NFS Delhi)" },
    { href: "https://nfsa.gov.in/State/DL", title: "NFSA पोर्टल: दिल्ली का पेज (कार्ड, दुकानें, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "दिल्ली में नया राशन कार्ड कैसे बनवाएं?", a: "15 मई 2026 से नए राशन कार्ड का आवेदन e-District दिल्ली पोर्टल पर ऑनलाइन हो रहा है। रजिस्टर करके फॉर्म भरें, सभी सदस्यों का आधार और राजस्व विभाग का परिवार आय प्रमाण पत्र लगाएं और आवेदन नंबर संभालें।" },
    { q: "दिल्ली राशन कार्ड के लिए आय सीमा कितनी है?", a: "खबरों के अनुसार दिल्ली खाद्य सुरक्षा नियम, 2026 में सीमा ₹1.2 लाख सालाना रखी गई, और मई 2026 में कैबिनेट ने इसे ₹2.5 लाख करने का फैसला किया। इसकी अधिसूचना हमें नहीं मिली, इसलिए आवेदन के समय पोर्टल पर लिखी सीमा देखें या 1967 पर पूछें।" },
    { q: "क्या आय प्रमाण पत्र ज़रूरी है?", a: "हाँ। विभाग के नोटिस के अनुसार आवेदन के साथ इलाके के राजस्व अधिकारी से बना परिवार का आय प्रमाण पत्र लगाना है। पुराने आवेदन भी इसी के साथ दोबारा जमा करने हैं।" },
    { q: "मेरा पुराना आवेदन कई साल से अटका है, अब क्या करूं?", a: "विभाग ने पुराने आवेदन e-District लॉगिन में वापस भेजे हैं। Apply Online में \"Pending for Submission\" खोलें, आय प्रमाण पत्र लगाएं और फिर से जमा करें।" },
    { q: "दिल्ली में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति। यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "दिल्ली राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "1967 और 1800-110-841। दोनों NFSA पोर्टल पर दिल्ली के पेज पर दर्ज हैं।" },
    { q: "क्या दूसरे राज्य का राशन कार्ड दिल्ली में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA कार्ड से दिल्ली की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं। Mera Ration ऐप से नज़दीकी दुकान देख सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/delhi-income-certificate.html", emoji: "💰", title: "दिल्ली आय प्रमाण पत्र", text: "राशन कार्ड के लिए ज़रूरी" },
    { href: "/states/delhi-domicile-certificate.html", emoji: "🏠", title: "दिल्ली निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/delhi-labour-card.html", emoji: "👷", title: "दिल्ली लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/haryana-ration-card.html", emoji: "📋", title: "हरियाणा राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://edistrict.delhigovt.nic.in/", label: "📝 e-District पर आवेदन" },
    { href: "https://nfs.delhi.gov.in/Citizen/RCWiseAllocationDetails.aspx?type=MA==", label: "🔎 RC नंबर से विवरण देखें" },
  ],
};
