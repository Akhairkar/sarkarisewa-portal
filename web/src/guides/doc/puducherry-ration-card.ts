import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/PY: Department of Civil Supplies and Consumer Affairs,
//   Puducherry (0413-2253345); state food department website dcsca.py.gov.in;
//   grievance redressal pdsswo.py.gov.in/helpdesk; helpdesk 1800-425-1082,
//   1800-425-1083, 1800-425-1084, 1800-425-1085; schemes Annapurna, AAY,
//   PHH; 515 FPS (483 co-operative); 2,09,186 NFSA ration cards (AAY 25,383,
//   PHH 1,83,803); RC count report pdsswo.py.gov.in/civilmis.
// - pdsswo.py.gov.in (search extracts; site resets the connection from here):
//   online services incl. new ration card, bifurcation, address change;
//   "DOCUMENTS NEEDED" guideline for New Ration Card: Fees Nil, time limit 45
//   days, proof of residence (electricity bill / gas delivery challan /
//   rental agreement), surrender/deletion certificate from other State,
//   consent for use of Aadhaar.
// - yanam.gov.in/departments/civil-supplies (District Administration, Yanam,
//   last updated 04.03.2025): BPL (red), AAY and APL (yellow) cards; central
//   DBT in lieu of rice: ₹150.10 per person per month on BPL cards and
//   ₹1,050.70 per AAY card per month; 20 kg free rice to AAY and BPL cards
//   through fair price shops under the state scheme; Pongal kits.
// - Rajya Sabha unstarred question 198, 4 Feb 2025 (search extract): cash
//   transfer of food subsidy implemented only in Chandigarh, Puducherry and
//   Dadra & Nagar Haveli.
// - News (PTI via The Week, 6 Oct 2024; Deccan Herald): ration shops had been
//   shut since 2019; government announced 10 kg rice and 2 kg sugar free
//   through FPS; LG said the Centre approved supplying free rice and sugar
//   through ration shops instead of cash (date of approval not confirmed).
// - Puducherry Gazette Extraordinary Part II No. 42 of 31.12.2024 (search
//   extract): free rice scheme rules renamed to include edible oil and other
//   essentials at subsidised prices for all card holders.
// Left out: exact current quantities and whether the NFSA part is still paid
// as cash in each region in Oct 2026 (sources conflict / not dated); online
// application steps beyond what the department's guideline says.
export const puducherryRationCard: DocGuide = {
  state: { slug: "puducherry", hi: "पुडुचेरी" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Puducherry Ration Card 2026: Apply & Status",
  description: "पुडुचेरी राशन कार्ड 2026: लाल (BPL/PHH), AAY और पीला (APL) कार्ड, pdsswo.py.gov.in पर आवेदन (फीस नहीं, 45 दिन), ज़रूरी कागज़, राशन बनाम DBT पैसा और हेल्पलाइन 1800-425-1082।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पुडुचेरी राशन कार्ड 2026: कार्ड के प्रकार, आवेदन, कागज़ और DBT",
  lead: "पुडुचेरी में राशन कार्ड नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग (Civil Supplies & Consumer Affairs) बनाता है। विभाग के PDS पोर्टल pdsswo.py.gov.in पर नए कार्ड समेत ऑनलाइन सेवाएं हैं; नए कार्ड की कोई फीस नहीं है और समय-सीमा 45 दिन है। पुडुचेरी उन तीन केंद्र शासित प्रदेशों में है जहां NFSA अनाज के बदले बैंक खाते में पैसा (DBT) भेजा जाता रहा है।",
  facts: [
    ["NFSA कार्ड", "2.09 लाख (NFSA पोर्टल)"],
    ["राशन दुकानें", "515"],
    ["नए कार्ड की फीस", "नहीं (45 दिन में)"],
    ["हेल्पलाइन", "1800-425-1082, 1967"],
  ],
  notice: "<strong>अनाज या पैसा?</strong> केंद्र की DBT योजना में NFSA चावल के बदले पैसा खाते में आता रहा है, जबकि 2024 से राज्य सरकार ने राशन दुकानों से मुफ्त चावल फिर शुरू किया है। आपके कार्ड पर इस समय क्या मिल रहा है, यह अपनी राशन दुकान या हेल्पलाइन से पक्का करें।",
  sections: [
    {
      id: "prakar",
      title: "पुडुचेरी में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के अनुसार पुडुचेरी में <strong>2,09,186 NFSA राशन कार्ड</strong> और <strong>515 राशन दुकानें</strong> हैं (इनमें 483 सहकारी)। यानम ज़िला प्रशासन के पेज पर कार्ड के रंग इस तरह बताए गए हैं:",
      table: {
        head: ["कार्ड", "किसके लिए", "NFSA कार्ड (पोर्टल)"],
        rows: [
          ["<strong>AAY (अंत्योदय)</strong>", "सबसे गरीब, बुज़ुर्ग और बेसहारा परिवार", "25,383"],
          ["<strong>लाल कार्ड (BPL / PHH)</strong>", "गरीबी रेखा से नीचे के परिवार", "1,83,803"],
          ["<strong>पीला कार्ड (APL)</strong>", "गरीबी रेखा से ऊपर के परिवार (NFSA से बाहर)", "—"],
        ],
      },
    },
    {
      id: "dbt",
      title: "राशन या पैसा: DBT की स्थिति",
      list: [
        "<strong>केंद्र की DBT योजना:</strong> राज्यसभा में फरवरी 2025 के जवाब के अनुसार अनाज के बदले नकद (cash transfer of food subsidy) केवल चंडीगढ़, पुडुचेरी और दादरा-नगर हवेली में लागू है।",
        "<strong>कितना पैसा:</strong> यानम ज़िले के पेज (मार्च 2025 में अपडेट) के अनुसार BPL कार्ड पर <strong>₹150.10 प्रति व्यक्ति</strong> और AAY कार्ड पर <strong>₹1,050.70 प्रति कार्ड</strong> हर महीने खाते में आता है। इसके लिए हर सदस्य का आधार और बैंक खाता जुड़ा होना चाहिए।",
        "<strong>राज्य की मुफ्त चावल योजना:</strong> खबरों के अनुसार राशन दुकानें 2019 से बंद पड़ी थीं; 2024 में इन्हें फिर शुरू करने की घोषणा हुई और अक्टूबर 2024 में सरकार ने कार्डधारकों को राशन दुकानों से 10 किलो चावल और 2 किलो चीनी मुफ्त देने की घोषणा की। यानम में AAY और BPL कार्ड पर 20 किलो चावल मुफ्त दिया जा रहा है।",
        "<strong>आगे:</strong> खबरों के अनुसार उपराज्यपाल ने बताया कि केंद्र ने नकद की जगह राशन दुकानों से मुफ्त चावल-चीनी देने का प्रस्ताव मंज़ूर किया है; दिसंबर 2024 के गज़ट में योजना के नियमों में खाद्य तेल और दूसरी चीज़ें भी जोड़ी गईं।",
      ],
      callout: { kind: "warn", html: "किस क्षेत्र (पुडुचेरी, कराईकल, माहे, यानम) में इस समय कितना चावल और कितना पैसा मिल रहा है, यह हमें किसी एक ताज़ा सरकारी पेज पर नहीं मिला। अपनी राशन दुकान, बैंक पासबुक या हेल्पलाइन 1800-425-1082 से पुष्टि करें।" },
    },
    {
      id: "kagaz",
      title: "नए कार्ड के लिए ज़रूरी कागज़",
      intro: "विभाग की \"Documents Needed\" गाइडलाइन के अनुसार:",
      list: [
        "<strong>निवास का प्रमाण:</strong> बिजली बिल, गैस डिलीवरी चालान या किराया अनुबंध",
        "दूसरे राज्य में कार्ड था तो वहां का <strong>सरेंडर / डिलीशन सर्टिफिकेट</strong> (मूल)",
        "परिवार के सभी सदस्यों का <strong>आधार</strong>, और राशन कार्ड के लिए आधार इस्तेमाल करने की <strong>सहमति</strong>",
        "मुखिया की फोटो और <strong>बैंक खाता</strong> (DBT का पैसा इसी में आता है)",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कैसे करें",
      steps: [
        '<a href="https://pdsswo.py.gov.in/" target="_blank" rel="noopener nofollow">pdsswo.py.gov.in</a> खोलें और <strong>Online Services</strong> में नए राशन कार्ड का विकल्प चुनें।',
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें।",
        "निवास प्रमाण और बाकी कागज़ अपलोड करके आवेदन जमा करें; आवेदन नंबर नोट करें।",
        "विभाग की गाइडलाइन के अनुसार <strong>कोई फीस नहीं</strong> है और कार्ड <strong>45 दिन</strong> में बनना चाहिए।",
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को pdsswo.py.gov.in हमारी जांच में नहीं खुला। पोर्टल न खुले तो अपने क्षेत्र के नागरिक आपूर्ति कार्यालय (सिविल सप्लाइज़) में जाकर आवेदन करें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना, कार्ड अलग करना",
      intro: "विभाग के पोर्टल और यानम ज़िले के पेज के अनुसार ये सेवाएं मिलती हैं:",
      list: [
        "नए सदस्य का <strong>नाम जोड़ना</strong> (आधार और जन्म प्रमाण पत्र / पुराने कार्ड से नाम हटने का सबूत)",
        "परिवार बंटने, मृत्यु या दूसरे राज्य में नया कार्ड बनवाने पर <strong>नाम हटाना</strong>",
        "परिवार अलग होने पर <strong>कार्ड का बंटवारा</strong> (bifurcation) और <strong>पता बदलना</strong>",
        "कार्ड खोने पर <strong>डुप्लीकेट कार्ड</strong>, और दूसरे राज्य जाने पर <strong>सरेंडर सर्टिफिकेट</strong>",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>आधार और बैंक:</strong> DBT का पैसा पाने के लिए हर सदस्य का आधार और मुखिया का बैंक खाता कार्ड से जुड़ा होना चाहिए।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हक और शिकायत।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-425-1082, 1800-425-1083, 1800-425-1084, 1800-425-1085</strong>: NFSA पोर्टल पर पुडुचेरी के हेल्पडेस्क नंबर",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://pdsswo.py.gov.in/helpdesk" target="_blank" rel="noopener nofollow">pdsswo.py.gov.in/helpdesk</a>',
      ],
    },
  ],
  official: [
    { href: "https://pdsswo.py.gov.in/", title: "PDS पोर्टल, पुडुचेरी: ऑनलाइन सेवाएं और कार्ड की गिनती" },
    { href: "http://dcsca.py.gov.in/", title: "नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, पुडुचेरी" },
    { href: "https://yanam.gov.in/departments/civil-supplies/", title: "यानम ज़िला: सिविल सप्लाइज़ (कार्ड के प्रकार, DBT राशि)" },
    { href: "https://nfsa.gov.in/State/PY", title: "NFSA पोर्टल: पुडुचेरी का पेज (कार्ड, दुकानें, हेल्पलाइन)" },
  ],
  faq: [
    { q: "पुडुचेरी में नया राशन कार्ड कैसे बनवाएं?", a: "pdsswo.py.gov.in की Online Services में नए राशन कार्ड का आवेदन करें या नागरिक आपूर्ति कार्यालय जाएं। विभाग की गाइडलाइन के अनुसार कोई फीस नहीं है और कार्ड 45 दिन में बनना चाहिए।" },
    { q: "पुडुचेरी में राशन मिलता है या पैसा?", a: "केंद्र की DBT योजना में NFSA चावल के बदले पैसा खाते में आता रहा है (यानम पेज: BPL पर ₹150.10 प्रति व्यक्ति, AAY पर ₹1,050.70 प्रति कार्ड)। 2024 से राज्य सरकार राशन दुकानों से मुफ्त चावल भी दे रही है। अभी आपके कार्ड पर क्या है, दुकान या हेल्पलाइन से पूछें।" },
    { q: "लाल और पीला राशन कार्ड में क्या फर्क है?", a: "लाल कार्ड गरीबी रेखा से नीचे (BPL/PHH) के परिवारों के लिए है और NFSA में आता है; पीला कार्ड APL परिवारों के लिए है। सबसे गरीब परिवारों को AAY कार्ड मिलता है।" },
    { q: "नए कार्ड के लिए कौन-से कागज़ चाहिए?", a: "निवास प्रमाण (बिजली बिल, गैस चालान या किराया अनुबंध), सभी सदस्यों का आधार और उसकी सहमति, बैंक खाता, और दूसरे राज्य में कार्ड था तो वहां का सरेंडर/डिलीशन सर्टिफिकेट।" },
    { q: "पुडुचेरी राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1800-425-1082 से 1800-425-1085; 1967 भी। ऑनलाइन शिकायत pdsswo.py.gov.in/helpdesk पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/puducherry-income-certificate.html", emoji: "💰", title: "पुडुचेरी आय प्रमाण पत्र", text: "BPL कार्ड के लिए आय का प्रमाण" },
    { href: "/states/puducherry-domicile-certificate.html", emoji: "🏠", title: "पुडुचेरी निवास प्रमाण पत्र", text: "रेज़िडेंस सर्टिफिकेट" },
    { href: "/states/puducherry-birth-certificate.html", emoji: "👶", title: "पुडुचेरी जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/puducherry.html", emoji: "📍", title: "पुडुचेरी CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://pdsswo.py.gov.in/", label: "📝 ऑनलाइन सेवाएं (PDS पोर्टल)" },
    { href: "/service/csc-locator/puducherry.html", label: "📍 नज़दीकी CSC" },
  ],
};
