import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): web searches for a Mizoram state "BPL Housing
// Scheme" (2024-2026) found no official notification, department page or
// myScheme entry (myScheme search "Mizoram housing" returned nothing for
// Mizoram); only aggregator pages with conflicting amounts, which are not
// used. Central schemes: PIB / Cabinet decision of 09.08.2024 on PMAY-G for
// FY 2024-25 to 2028-29 (2 crore more rural houses; unit assistance ₹1.20
// lakh in plain areas and ₹1.30 lakh in North Eastern and hill states) and
// PMAY-Urban 2.0 (approved 09.08.2024; up to ₹2.5 lakh assistance for EWS
// under Beneficiary-Led Construction). Exact Mizoram SECC/Awaas+ lists,
// village-level process and state top-ups were not verified, so they are
// described generally. Title kept; old description (claiming a state scheme)
// rewritten.
export const mizoramBplHousingScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मिज़ोरम", href: "/states/mizoram.html" },
    { label: "BPL आवास योजना" },
  ],
  docHi: "BPL आवास योजना",
  title: "BPL Housing Scheme",
  description: "मिज़ोरम के गरीब (BPL) परिवारों के लिए पक्का घर: अलग राज्य योजना का आधिकारिक विवरण नहीं मिला; PMAY-ग्रामीण (पहाड़ी राज्यों में ₹1.30 लाख) और PMAY-शहरी 2.0 से मदद कैसे लें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मिज़ोरम में BPL परिवारों के लिए आवास योजना: घर के लिए मदद कहां से मिलती है",
  lead: "हमें 15 अक्टूबर 2026 तक मिज़ोरम सरकार की \"BPL Housing Scheme\" नाम की किसी अलग योजना की आधिकारिक अधिसूचना या पोर्टल नहीं मिला। मिज़ोरम में गरीब परिवारों को पक्का घर मुख्य रूप से केंद्र की <strong>प्रधानमंत्री आवास योजना</strong> से मिलता है: गांव में PMAY-ग्रामीण (उत्तर-पूर्व और पहाड़ी राज्यों में ₹1.30 लाख प्रति घर) और शहर में PMAY-शहरी 2.0।",
  facts: [
    ["गांव में", "PMAY-ग्रामीण: ₹1.30 लाख (पहाड़ी/उत्तर-पूर्व राज्य)"],
    ["शहर में", "PMAY-शहरी 2.0"],
    ["चयन", "आवास सूची/सर्वे से, ग्राम सभा की जांच"],
    ["कहां पूछें", "BDO / ग्राम परिषद / नगर निकाय"],
  ],
  notice: "राज्य की योजनाएं अक्सर नए नाम से आती हैं। कोई व्यक्ति \"BPL Housing Scheme\" के नाम पर फॉर्म या फीस मांगे तो पहले BDO कार्यालय या ज़िला ग्रामीण विकास एजेंसी से पुष्टि करें। आवास योजना में आवेदन के लिए किसी को पैसे न दें।",
  sections: [
    {
      id: "pmayg",
      title: "गांव में: प्रधानमंत्री आवास योजना-ग्रामीण (PMAY-G)",
      list: [
        "केंद्र सरकार ने अगस्त 2024 में PMAY-G को 2024-25 से 2028-29 तक बढ़ाया, 2 करोड़ और घर बनाने के लक्ष्य के साथ।",
        "प्रति घर सहायता <strong>₹1.20 लाख (मैदानी इलाके)</strong> और <strong>₹1.30 लाख (उत्तर-पूर्व व पहाड़ी राज्य)</strong>। मिज़ोरम उत्तर-पूर्वी राज्य है।",
        "पैसा किश्तों में सीधे लाभार्थी के बैंक खाते में आता है; घर के निर्माण के हर चरण की जियो-टैग फोटो से जांच होती है।",
        "लाभार्थी का चयन सरकारी आवास सर्वे/सूची से होता है, जिसे ग्राम सभा जांचती है। जिनके पास पक्का घर है या जो तय बहिष्करण शर्तों में आते हैं, वे पात्र नहीं।",
      ],
    },
    {
      id: "pmayu",
      title: "शहर में: प्रधानमंत्री आवास योजना-शहरी 2.0",
      list: [
        "आर्थिक रूप से कमज़ोर वर्ग (EWS) के परिवार जिनके पास देश में कहीं पक्का घर नहीं है, अपनी ज़मीन पर घर बनाने (BLC) के लिए सहायता ले सकते हैं।",
        "आवेदन PMAY-U पोर्टल पर या नगर निकाय/शहरी विकास विभाग के ज़रिए।",
        "आय सीमा, सहायता राशि और ज़रूरी कागज़ आवेदन के समय पोर्टल पर देखें।",
      ],
    },
    {
      id: "kaise",
      title: "मदद कैसे लें",
      steps: [
        "गांव में हैं तो <strong>ग्राम परिषद (Village Council)</strong> और ब्लॉक कार्यालय (BDO) से पूछें कि आपका नाम आवास सूची/सर्वे में है या नहीं।",
        "नाम नहीं है तो अगले सर्वे या सूची संशोधन के समय नाम जुड़वाने का तरीका पूछें।",
        "शहर में हैं तो नगर निकाय या शहरी विकास विभाग में PMAY-U 2.0 के बारे में पूछें, या पोर्टल पर आवेदन करें।",
        "आधार, बैंक खाता (आधार से जुड़ा), राशन कार्ड और ज़मीन के कागज़ तैयार रखें।",
        'अपना नाम और स्थिति <a href="https://pmayg.nic.in/" target="_blank" rel="noopener nofollow">pmayg.nic.in</a> पर रजिस्ट्रेशन नंबर से देखें।',
      ],
    },
    {
      id: "dusri",
      title: "मिज़ोरम सरकार की दूसरी मदद",
      list: [
        '<strong>Mizoram Bana Kaih (Handholding) Scheme:</strong> यह आवास नहीं, आजीविका/व्यवसाय की योजना है (19 सितंबर 2024 से)। देखें <a href="/service/mizoram-sedp-policy.html">SEDP और Bana Kaih गाइड</a>।',
        '<a href="/service/mizoram-chief-minister-rural-housing-scheme.html">मुख्यमंत्री ग्रामीण आवास योजना (मिज़ोरम) गाइड</a>',
      ],
    },
  ],
  official: [
    { href: "https://pmayg.nic.in/", title: "प्रधानमंत्री आवास योजना-ग्रामीण", note: "लाभार्थी की स्थिति देखें" },
    { href: "https://pmay-urban.gov.in/", title: "प्रधानमंत्री आवास योजना-शहरी" },
    { href: "https://mizoram.gov.in/", title: "मिज़ोरम सरकार" },
  ],
  faq: [
    { q: "क्या मिज़ोरम में BPL Housing Scheme नाम की अलग योजना है?", a: "15 अक्टूबर 2026 तक हमें इस नाम की राज्य योजना की आधिकारिक अधिसूचना नहीं मिली। गरीब परिवारों के लिए घर मुख्य रूप से PMAY-ग्रामीण और PMAY-शहरी से मिलता है।" },
    { q: "PMAY-ग्रामीण में मिज़ोरम में कितना पैसा मिलता है?", a: "उत्तर-पूर्व और पहाड़ी राज्यों में प्रति घर ₹1.30 लाख, किश्तों में सीधे बैंक खाते में।" },
    { q: "नाम सूची में कैसे जुड़ेगा?", a: "चयन सरकारी आवास सर्वे/सूची से होता है। ग्राम परिषद और BDO कार्यालय से अपने गांव के सर्वे और सूची संशोधन के बारे में पूछें।" },
    { q: "आवेदन के लिए फीस लगती है?", a: "नहीं। PMAY में चयन या पैसा दिलाने के नाम पर कोई पैसे मांगे तो BDO या ज़िला प्रशासन से शिकायत करें।" },
  ],
  related: [
    { href: "/service/pm-awas-yojana.html", emoji: "🏠", title: "प्रधानमंत्री आवास योजना", text: "पात्रता और आवेदन" },
    { href: "/service/mizoram-chief-minister-rural-housing-scheme.html", emoji: "🏡", title: "मुख्यमंत्री ग्रामीण आवास (मिज़ोरम)", text: "गांव में घर के लिए मदद" },
    { href: "/service/mizoram-ration-card.html", emoji: "🍚", title: "राशन कार्ड (मिज़ोरम)", text: "गरीब परिवार का प्रमाण" },
    { href: "/service/mz-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (मिज़ोरम)", text: "योजनाओं के लिए" },
    { href: "/states/mizoram.html", emoji: "🎍", title: "मिज़ोरम की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://pmayg.nic.in/", label: "🏠 PMAY-G स्थिति देखें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
