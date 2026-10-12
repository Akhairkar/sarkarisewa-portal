import type { LabourGuide } from "./types";

// Sources (checked 12 Oct 2026; official sites do not load from here, read
// through search-result extracts):
//   uttardinajpur.gov.in/service/bina-mulye-samajik-suraksha-yojana-bmssy/ and
//   uttardinajpur.gov.in/scheme/bina-mulya-samajik-suraksha-yojana-bm-ssy/
//   (BOCW + transport worker registration moved from e-District to BMSSY portal;
//   Rs 25/month beneficiary contribution waived, paid by state from 1 Apr 2020).
//   bmssy.wblabour.gov.in/downloads/gazette-notification-no-698.pdf (accidental
//   death Rs 2,00,000; hospitalisation Rs 200/day for first 5 days; surgery
//   up to Rs 60,000 a year; education help for up to two children).
//   malda.gov.in/samajik-suraksha-yojana/ (18-60, resident; no income limit for
//   construction and transport workers).
//   wblabour.gov.in/building-and-other-construction-workers-welfare-board
//   (board set up 2005 under BOCW Act 1996, chaired by Labour Minister).
// New state government from May/June 2026: no announced change to BMSSY found.
// Left out (not verified): helpline, exact portal menu names, education
// amounts per class, natural death amount.
export const westBengal: LabourGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  title: "West Bengal Labour Card (BOCW) 2026: Apply & Status",
  description: "पश्चिम बंगाल लेबर कार्ड (BOCW) 2026: निर्माण मज़दूरों का पंजीकरण अब BMSSY पोर्टल पर, कोई अंशदान नहीं, पात्रता, ज़रूरी दस्तावेज़, स्टेटस और योजनाओं के लाभ।",
  published: "2026-08-01",
  modified: "2026-10-12",
  verified: "12 अक्टूबर 2026",
  h1: "पश्चिम बंगाल लेबर कार्ड 2026: BMSSY पंजीकरण, स्टेटस और योजनाएं",
  lead: "पश्चिम बंगाल में निर्माण मज़दूरों का पंजीकरण अब बिना मूल्य सामाजिक सुरक्षा योजना (BMSSY) के पोर्टल bmssy.wblabour.gov.in पर होता है, e-District पर नहीं। राज्य का 18 से 60 साल का निर्माण मज़दूर इसमें जुड़ सकता है। 1 अप्रैल 2020 से मज़दूर का ₹25 महीने का अंशदान राज्य सरकार खुद भरती है, इसलिए सदस्य को कुछ नहीं देना पड़ता।",
  facts: [
    ["पोर्टल", '<a href="https://bmssy.wblabour.gov.in/" target="_blank" rel="noopener nofollow">bmssy.wblabour.gov.in</a>'],
    ["अंशदान", "₹0 (सरकार भरती है)"],
    ["उम्र", "18 से 60 साल"],
    ["दुर्घटना मृत्यु", "नॉमिनी को ₹2,00,000"],
  ],
  board: "पश्चिम बंगाल भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (श्रम विभाग), बिना मूल्य सामाजिक सुरक्षा योजना (BMSSY) के ज़रिए",
  notice: "<strong>e-District से नहीं:</strong> निर्माण मज़दूरों (BOCW) और परिवहन मज़दूरों का पंजीकरण अब e-District पोर्टल की जगह <a href=\"https://bmssy.wblabour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">BMSSY पोर्टल</a> पर होता है। 2026 में राज्य में नई सरकार बनी है; 12 अक्टूबर 2026 तक इस योजना में बदलाव की कोई आधिकारिक घोषणा हमें नहीं मिली। आवेदन से पहले पोर्टल पर ताज़ा सूचना देखें।",
  eligibility: [
    "पश्चिम बंगाल का <strong>निवासी</strong> हो।",
    "उम्र <strong>18 साल से 60 साल</strong> के बीच हो।",
    "निर्माण कार्य करता हो: राजमिस्त्री, हेल्पर, बढ़ई, पेंटर, प्लंबर, इलेक्ट्रीशियन, सड़क-पुल निर्माण जैसे काम। BOCW कानून के तहत पिछले 12 महीनों में <strong>90 दिन</strong> निर्माण कार्य की शर्त है।",
    "दूसरे असंगठित मज़दूरों के लिए परिवार की आय की सीमा है, लेकिन <strong>निर्माण और परिवहन मज़दूरों के लिए कोई आय सीमा नहीं</strong> है।",
  ],
  documents: [
    "<strong>आधार कार्ड</strong> और चालू मोबाइल नंबर",
    "<strong>उम्र का प्रमाण</strong> (आधार, वोटर कार्ड, स्कूल का प्रमाण पत्र)",
    "<strong>निवास प्रमाण</strong>",
    "<strong>निर्माण कार्य का प्रमाण</strong> (ठेकेदार/नियोजक या मान्य यूनियन से)",
    "<strong>बैंक पासबुक</strong>, क्योंकि लाभ का पैसा सीधे खाते में आता है",
    "पासपोर्ट साइज़ फोटो और नॉमिनी का विवरण",
  ],
  apply: {
    intro: "पंजीकरण BMSSY पोर्टल के ज़रिए होता है। आप खुद पोर्टल पर, या श्रम विभाग के स्थानीय कार्यालय/सुविधा केंद्र की मदद से आवेदन कर सकते हैं।",
    steps: [
      '<strong>पोर्टल खोलें:</strong> <a href="https://bmssy.wblabour.gov.in/" target="_blank" rel="noopener nofollow">bmssy.wblabour.gov.in</a> पर नए पंजीकरण का विकल्प चुनें।',
      "<strong>मज़दूर की श्रेणी चुनें:</strong> निर्माण मज़दूर (Construction Worker) चुनें, ताकि आपका पंजीकरण BOCW के तहत हो।",
      "<strong>फॉर्म भरें:</strong> नाम, उम्र, पता, काम का प्रकार, बैंक खाता और नॉमिनी की जानकारी आधार के अनुसार भरें।",
      "<strong>कागज़ अपलोड करें</strong> और आवेदन सबमिट करें। आवेदन संख्या नोट कर लें।",
      "<strong>जांच के बाद मंज़ूरी:</strong> श्रम विभाग जांच करता है, फिर पंजीकरण मंज़ूर होता है। कोई अंशदान नहीं देना है।",
    ],
    offline: "<strong>खुद नहीं भर सकते?</strong> अपने ब्लॉक या नगर के श्रम विभाग कार्यालय में जाकर मदद लें। पंजीकरण के लिए किसी दलाल को पैसे न दें।",
  },
  fees: [
    ["मासिक अंशदान", "<strong>₹0</strong>: 1 अप्रैल 2020 से मज़दूर का ₹25 महीने का अंशदान राज्य सरकार खुद जमा करती है"],
    ["प्रोविडेंट फंड", "योजना में सदस्य के नाम पर प्रोविडेंट फंड जमा होता है, जिसमें अंशदान सरकार भरती है"],
    ["पंजीकरण चालू रखना", "लाभ के लिए पंजीकरण चालू होना चाहिए। अपना मोबाइल नंबर और बैंक खाता पोर्टल पर सही रखें"],
    ["e-District वाला पुराना तरीका", "निर्माण मज़दूरों का पंजीकरण अब e-District पर नहीं होता, BMSSY पोर्टल पर होता है"],
  ],
  status: [
    '<strong>आवेदन की स्थिति:</strong> <a href="https://bmssy.wblabour.gov.in/" target="_blank" rel="noopener nofollow">bmssy.wblabour.gov.in</a> पर अपने आवेदन/पंजीकरण की स्थिति देखें। आवेदन संख्या संभालकर रखें।',
    "<strong>पहचान पत्र:</strong> पंजीकरण मंज़ूर होने के बाद मिला पंजीकरण नंबर और कार्ड संभालकर रखें। लाभ के हर आवेदन में यही नंबर लगता है।",
    "<strong>लाभ का आवेदन:</strong> इलाज, पढ़ाई या मृत्यु सहायता जैसे लाभ के लिए अलग आवेदन करना होता है। मदद के लिए श्रम विभाग के स्थानीय कार्यालय जाएं।",
    "<strong>पैसा नहीं आया?</strong> बैंक खाता चालू और आधार से जुड़ा है या नहीं, यह जांचें और फिर स्थानीय श्रम कार्यालय से पूछें।",
  ],
  schemes: [
    ["दुर्घटना में मृत्यु", "नॉमिनी को <strong>₹2,00,000</strong>", "राज्य गज़ट अधिसूचना के अनुसार"],
    ["इलाज", "जांच, दवा और अस्पताल में भर्ती का खर्च", "सदस्य के लिए"],
    ["भर्ती होने पर मज़दूरी का नुकसान", "पहले 5 दिन <strong>₹200 प्रतिदिन</strong> (कुल ₹1,000)", "अस्पताल में भर्ती होने पर ही"],
    ["ऑपरेशन (सर्जरी)", "<strong>₹60,000 तक</strong> हर साल", "किसी भी तरह की सर्जरी पर अतिरिक्त सहायता"],
    ["बच्चों की पढ़ाई", "ऊंची पढ़ाई के लिए हर साल सहायता; राशि पढ़ाई के स्तर के अनुसार", "अधिकतम दो बच्चे"],
    ["प्रोविडेंट फंड", "सदस्य के नाम पर जमा, अंशदान सरकार का", "निकासी की शर्तें पोर्टल/श्रम कार्यालय से पता करें"],
  ],
  schemesNote: "राशि पश्चिम बंगाल श्रम विभाग की BMSSY गज़ट अधिसूचना (संख्या 698) के अनुसार है। पढ़ाई सहायता की कक्षा-वार राशि और दूसरी योजनाओं का पूरा विवरण हम पक्का नहीं कर पाए, इसलिए यहां नहीं लिखा। आवेदन से पहले <a href=\"https://bmssy.wblabour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">bmssy.wblabour.gov.in</a> पर ताज़ा जानकारी देखें।",
  reject: [
    ["e-District पर फॉर्म नहीं मिल रहा", "निर्माण मज़दूरों का पंजीकरण अब e-District पर नहीं होता। BMSSY पोर्टल पर आवेदन करें।"],
    ["काम का प्रमाण नहीं है", "जिस ठेकेदार/नियोजक के पास काम किया, उससे प्रमाण लें। न मिले तो स्थानीय श्रम कार्यालय से पूछें।"],
    ["नाम या उम्र आधार से अलग", "फॉर्म में वही लिखें जो आधार में है। आधार में गलती हो तो पहले आधार केंद्र पर सुधार करवाएं।"],
    ["लाभ का पैसा नहीं आया", "बैंक खाता चालू है और आधार से जुड़ा है या नहीं, बैंक से जांचें। फिर पोर्टल पर स्थिति देखें या श्रम कार्यालय जाएं।"],
  ],
  official: [
    { href: "https://bmssy.wblabour.gov.in/", title: "BMSSY पोर्टल: पंजीकरण और योजनाएं", note: "श्रम विभाग, पश्चिम बंगाल" },
    { href: "https://wblabour.gov.in/", title: "श्रम विभाग, पश्चिम बंगाल सरकार" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में लेबर कार्ड कैसे बनवाएं?", a: "निर्माण मज़दूर का पंजीकरण अब BMSSY पोर्टल bmssy.wblabour.gov.in पर होता है। आधार, उम्र और निवास का प्रमाण, काम का प्रमाण, बैंक पासबुक और फोटो के साथ आवेदन करें। खुद न कर सकें तो ब्लॉक/नगर के श्रम कार्यालय से मदद लें।" },
    { q: "क्या पश्चिम बंगाल लेबर कार्ड e-District पर बनता है?", a: "नहीं। निर्माण और परिवहन मज़दूरों का पंजीकरण e-District से हटाकर BMSSY पोर्टल पर कर दिया गया है।" },
    { q: "क्या इसके लिए हर महीने पैसा देना पड़ता है?", a: "नहीं। 1 अप्रैल 2020 से मज़दूर का ₹25 महीने का अंशदान राज्य सरकार खुद जमा करती है, इसलिए योजना सदस्य के लिए मुफ्त है।" },
    { q: "निर्माण मज़दूर की दुर्घटना में मृत्यु पर क्या मिलता है?", a: "राज्य की गज़ट अधिसूचना के अनुसार दुर्घटना में मृत्यु पर नॉमिनी को ₹2 लाख मिलते हैं। मौत के समय पंजीकरण चालू होना चाहिए।" },
    { q: "लेबर कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "BMSSY में निर्माण मज़दूर का पंजीकरण राज्य सरकार का है और इससे राज्य की योजनाएं मिलती हैं। e-Shram केंद्र सरकार का कार्ड है जो सभी असंगठित मज़दूरों के लिए है। दोनों बनवा सकते हैं।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का केंद्र सरकार का कार्ड" },
    { href: "/states/west-bengal-senior-citizen-card.html", emoji: "👴", title: "पश्चिम बंगाल वृद्धावस्था पेंशन", text: "60+ के लिए राज्य की पेंशन" },
    { href: "/states/west-bengal-ration-card.html", emoji: "🍚", title: "पश्चिम बंगाल राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, स्टेटस" },
    { href: "/states/west-bengal-employment-exchange.html", emoji: "💼", title: "पश्चिम बंगाल रोज़गार पंजीकरण", text: "रोज़गार कार्यालय में नाम दर्ज" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/document-checklist.html", emoji: "📋", title: "डॉक्यूमेंट चेकलिस्ट", text: "आवेदन से पहले कागज़ तैयार करें" },
  ],
  csc: "/service/csc-locator/west-bengal.html",
};
