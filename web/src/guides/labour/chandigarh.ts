import type { LabourGuide } from "./types";

// Sources (checked 13 Oct 2026). labour.chd.gov.in (Labour Department, Chandigarh) does not
// resolve from here, so the board's information was read through myScheme (myscheme.gov.in,
// Govt of India; public API). Its 11 CBOCWWB entries cite labour.chd.gov.in/PublicPages/*.aspx,
// the ServicePlus service link (serviceonline.gov.in) and labour.chd.gov.in/pdf/LWB.pdf:
//   registration steps (labour.chd.gov.in > "Click Here for Registration" on ServicePlus;
//   Apply for Services > search "BOCW" > "BOCW Application for Registration as a New Member /
//   Renewal"; download CBOCW form; attach annexures; pay by card/UPI; acknowledgement;
//   Aadhaar both sides, bank passbook, filled pages of the BOCW copy issued by the Board);
//   scheme application and "Track Application Status" on the same ServicePlus service;
//   kscbocwwb (Kanyadaan Rs 21,000), faddbcbocwwb (widow ex-gratia Rs 50,000; accident full
//   disability Rs 25,000, 50% Rs 15,000), facbocwwb (funeral Rs 5,000), mbcbocwwb (Rs 5,100),
//   wpcbocwwb (widow pension Rs 1,000/month), fapmdcbcbocwwb (disabled child Rs 1,000/month),
//   swbcbocwwb (scholarship Rs 3,000-7,500 by marks), fapsdhacbocwwb (spectacles 1,500,
//   denture 5,000, hearing aid 4,000), fapsmcbocwwb (sewing machine Rs 3,500),
//   stccbocwwb (tri-cycle), iflcbocwwb (interest-free loan Rs 2,500-25,000).
//   NOTE: these entries' eligibility text refers to establishments under the Punjab Labour
//   Welfare Fund Act and the scheme pages sit under "Chandigarh Labour Welfare Board", so the
//   amounts are given with a clear "confirm first" note.
// Not found (left general): registration fee, contribution, validity period, helpline.
// Old description's "e-District Chandigarh" claim not supported, so description rewritten.
export const chandigarh: LabourGuide = {
  state: { slug: "chandigarh", hi: "चंडीगढ़" },
  title: "Chandigarh Labour Card (BOCW) 2026: Apply & Status",
  description: "चंडीगढ़ लेबर कार्ड (BOCW) 2026: श्रम विभाग की ServicePlus सेवा से निर्माण मज़दूर रजिस्ट्रेशन/नवीनीकरण, ज़रूरी कागज़, योजनाएं और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-12",
  verified: "12 अक्टूबर 2026",
  h1: "चंडीगढ़ लेबर कार्ड 2026: निर्माण मज़दूर रजिस्ट्रेशन, योजनाएं और स्टेटस",
  lead: "चंडीगढ़ में निर्माण मज़दूरों का लेबर कार्ड (BOCW रजिस्ट्रेशन) चंडीगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड देता है, जो चंडीगढ़ प्रशासन के श्रम विभाग के तहत है। नया रजिस्ट्रेशन और नवीनीकरण श्रम विभाग की वेबसाइट (labour.chd.gov.in) से जुड़ी <strong>ServicePlus</strong> ऑनलाइन सेवा पर होता है। 18 से 60 साल के वे मज़दूर आवेदन कर सकते हैं जिन्होंने पिछले 12 महीनों में कम से कम 90 दिन निर्माण कार्य किया हो।",
  facts: [
    ["वेबसाइट", '<a href="http://labour.chd.gov.in/" target="_blank" rel="noopener nofollow">labour.chd.gov.in</a>'],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "पिछले 12 महीनों में 90 दिन निर्माण कार्य"],
    ["आवेदन", "ऑनलाइन, ServicePlus पर \"BOCW\" सेवा"],
  ],
  board: "चंडीगढ़ भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (CBOCWWB), श्रम विभाग, चंडीगढ़ प्रशासन",
  notice: "<strong>पुराना कार्ड है?</strong> नवीनीकरण (Renewal) भी उसी ऑनलाइन सेवा \"BOCW Application for Registration as a New Member / Renewal\" से होता है। इसमें बोर्ड की दी हुई BOCW कॉपी के भरे हुए सभी पन्नों की साफ फोटो लगानी होती है, इसलिए कॉपी संभालकर रखें।",
  eligibility: [
    "उम्र <strong>18 साल से 60 साल</strong> के बीच हो (भवन एवं अन्य सन्निर्माण कर्मकार अधिनियम, 1996)।",
    "पिछले 12 महीनों में कम से कम <strong>90 दिन निर्माण कार्य</strong> किया हो: राजमिस्त्री, हेल्पर, बढ़ई, पेंटर, बिजली मिस्त्री, प्लंबर, सड़क-पुल निर्माण जैसे काम।",
    "चंडीगढ़ में निर्माण कार्य करते हों।",
    "ज़्यादातर योजनाओं का लाभ बोर्ड का <strong>कम से कम 6 महीने</strong> सदस्य रहने के बाद मिलता है।",
  ],
  documents: [
    "<strong>आधार कार्ड</strong> (दोनों तरफ की साफ फोटो) और चालू मोबाइल नंबर",
    "<strong>बैंक पासबुक</strong> की साफ फोटो",
    "<strong>90 दिन के निर्माण कार्य का प्रमाण</strong> (ठेकेदार/नियोजक का प्रमाण पत्र)",
    "भरा हुआ <strong>CBOCW फॉर्म</strong> (ऑनलाइन आवेदन के दौरान डाउनलोड होता है)",
    "नवीनीकरण के लिए: बोर्ड की दी हुई <strong>BOCW कॉपी</strong> के भरे हुए सभी पन्नों की फोटो",
    "पासपोर्ट साइज़ फोटो और नॉमिनी/परिवार का विवरण",
  ],
  apply: {
    intro: "रजिस्ट्रेशन श्रम विभाग की वेबसाइट से जुड़ी ServicePlus सेवा पर ऑनलाइन होता है। पहले ServicePlus पर अपना खाता बनाना होता है।",
    steps: [
      '<strong>वेबसाइट खोलें:</strong> <a href="http://labour.chd.gov.in/" target="_blank" rel="noopener nofollow">labour.chd.gov.in</a> पर "Click Here for Registration" दबाएं। ServicePlus का रजिस्ट्रेशन पेज खुलेगा।',
      "<strong>खाता बनाएं:</strong> ज़रूरी जानकारी भरकर \"Submit\" करें। मोबाइल और ईमेल पर आया OTP डालें। User ID और Password लिखकर रख लें।",
      "<strong>लॉगिन करें</strong> और \"Apply for Services\" > \"View all available services\" में जाएं। सर्च बॉक्स में <strong>BOCW</strong> लिखें और \"BOCW Application for Registration as a New Member / Renewal\" चुनें।",
      "<strong>फॉर्म भरें:</strong> CBOCW फॉर्म डाउनलोड करके भरें। फिर \"New Member\" का विवरण भरकर \"Submit\" करें।",
      "<strong>कागज़ लगाएं:</strong> \"Attach Annexure\" में आधार (दोनों तरफ), बैंक पासबुक, भरा हुआ CBOCW फॉर्म और बाकी कागज़ लगाएं, फिर \"Save Annexure\" दबाएं।",
      "<strong>फीस भरें:</strong> \"Make Payment\" में कार्ड या UPI से फीस भरें और \"Proceed\" दबाएं। पावती (Acknowledgement Receipt) बनती है, इसका प्रिंट रख लें।",
    ],
    offline: "<strong>खुद ऑनलाइन नहीं भर सकते?</strong> चंडीगढ़ प्रशासन के श्रम विभाग के कार्यालय में जाकर मदद लें, या नज़दीकी CSC/सम्पर्क केंद्र से आवेदन करवाएं। किसी दलाल को पैसे न दें।",
  },
  fees: [
    ["रजिस्ट्रेशन / नवीनीकरण शुल्क", "राशि ऑनलाइन आवेदन के \"Make Payment\" चरण में दिखती है; कार्ड या UPI से जमा होती है"],
    ["अंशदान (contribution)", "बोर्ड की सदस्यता चालू रखने के लिए नियमित अंशदान ज़रूरी है; राशि श्रम विभाग से पुष्टि करें"],
    ["क्यों ज़रूरी", "योजनाओं में शर्त है कि मज़दूर का अंशदान बोर्ड को <strong>नियमित रूप से</strong> मिलता रहा हो"],
    ["CSC केंद्र", "फॉर्म भरने का सेवा शुल्क अलग लग सकता है; रसीद ज़रूर लें"],
  ],
  status: [
    "<strong>स्टेटस देखें:</strong> ServicePlus पर अपने User ID और Password से लॉगिन करें, \"Track Application Status\" खोलें, विवरण भरें और \"Get Data\" दबाएं।",
    "<strong>योजना का आवेदन:</strong> labour.chd.gov.in पर योजना का पेज खोलें, नीचे \"Click here to Apply/Register\" दबाएं और ServicePlus में लॉगिन करें। फॉर्म में अपनी जानकारी, योजना और काम की जगह का विवरण भरें, Self-Declaration भरें, कागज़ \"Attach Annexure\" में लगाएं और \"Submit\" करें।",
    "<strong>पावती रखें:</strong> हर आवेदन के बाद बनने वाली Acknowledgement Receipt का प्रिंट रखें। स्टेटस देखने में इसकी ज़रूरत पड़ती है।",
    "<strong>दिक्कत हो तो:</strong> चंडीगढ़ प्रशासन के श्रम विभाग के कार्यालय से संपर्क करें।",
  ],
  // The myScheme "CBOCWWB" entries (Kanyadaan ₹21,000 etc.) carry Labour Welfare
  // Fund conditions (employer contribution, ESIC/EPF), so they may belong to the
  // Chandigarh Labour Welfare Board, not the BOCW card. Only the kinds of help the
  // BOCW Act (section 22) lets a board give are listed, without amounts.
  schemes: [
    ["पेंशन", "60 साल के बाद, बोर्ड के नियम के अनुसार", "राशि श्रम विभाग से पूछें"],
    ["दुर्घटना पर सहायता / मृत्यु पर परिवार को सहायता", "बोर्ड के नियम के अनुसार", "राशि श्रम विभाग से पूछें"],
    ["बच्चों की पढ़ाई के लिए मदद", "बोर्ड के नियम के अनुसार", ""],
    ["इलाज के लिए मदद", "बोर्ड के नियम के अनुसार", ""],
    ["महिला मज़दूर को मातृत्व सहायता", "बोर्ड के नियम के अनुसार", ""],
    ["अंतिम संस्कार सहायता", "बोर्ड के नियम के अनुसार", ""],
  ],
  schemesNote: "BOCW कानून (धारा 22) के अनुसार कल्याण बोर्ड इस तरह की मदद देता है। चंडीगढ़ में हर योजना की राशि की भरोसेमंद, ताज़ा जानकारी हमें नहीं मिली। कुछ वेबसाइटों पर दिखने वाली राशियां (जैसे कन्यादान ₹21,000) चंडीगढ़ श्रम कल्याण बोर्ड की योजनाओं की हो सकती हैं, जो BOCW कार्ड से अलग हैं। आवेदन से पहले <a href=\"http://labour.chd.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">labour.chd.gov.in</a> या श्रम विभाग के कार्यालय से पुष्टि करें।",
  reject: [
    ["90 दिन का कार्य प्रमाण नहीं है", "ठेकेदार/नियोजक से प्रमाण पत्र लें। न मिले तो श्रम विभाग के कार्यालय में पूछें कि आपके काम के लिए कौन सा प्रमाण मान्य होगा।"],
    ["कागज़ साफ नहीं दिख रहे", "आधार के दोनों तरफ, बैंक पासबुक और BOCW कॉपी के पन्नों की साफ, पूरी फोटो दोबारा लगाएं। धुंधली फोटो पर आवेदन लौट सकता है।"],
    ["समय सीमा निकल गई", "ज़्यादातर योजनाओं में घटना (शादी, प्रसव, मृत्यु) के 3 महीने या एक साल के अंदर आवेदन करना होता है। जल्द से जल्द आवेदन करें।"],
    ["सदस्यता 6 महीने से कम है", "ज़्यादातर योजनाएं 6 महीने की सदस्यता के बाद मिलती हैं। तब तक अंशदान नियमित रखें।"],
    ["User ID / Password भूल गए", "ServicePlus के लॉगिन पेज पर पासवर्ड दोबारा बनाने का विकल्प इस्तेमाल करें, या रजिस्टर्ड मोबाइल/ईमेल से मदद लें।"],
  ],
  official: [
    { href: "http://labour.chd.gov.in/", title: "श्रम विभाग, चंडीगढ़ प्रशासन", note: "BOCW रजिस्ट्रेशन लिंक, योजनाओं के पेज, यूज़र मैनुअल" },
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (serviceonline.gov.in)", note: "ऑनलाइन आवेदन, पावती और Track Application Status" },
    { href: "https://www.myscheme.gov.in/", title: "myScheme (भारत सरकार)", note: "चंडीगढ़ बोर्ड की योजनाओं के विवरण (\"CBOCWWB\" खोजें)" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (केंद्र सरकार)" },
  ],
  faq: [
    { q: "चंडीगढ़ में लेबर कार्ड कैसे बनवाएं?", a: "labour.chd.gov.in पर \"Click Here for Registration\" से ServicePlus पर खाता बनाएं। लॉगिन करके \"BOCW\" खोजें और \"BOCW Application for Registration as a New Member / Renewal\" चुनें। CBOCW फॉर्म भरें, आधार और बैंक पासबुक लगाएं और कार्ड/UPI से फीस भरें।" },
    { q: "क्या चंडीगढ़ लेबर कार्ड e-District पर बनता है?", a: "निर्माण मज़दूर का रजिस्ट्रेशन और नवीनीकरण चंडीगढ़ श्रम विभाग की वेबसाइट से जुड़ी ServicePlus सेवा पर होता है। खुद न भर सकें तो श्रम विभाग के कार्यालय या CSC केंद्र से मदद लें।" },
    { q: "लेबर कार्ड का नवीनीकरण कैसे होगा?", a: "उसी ऑनलाइन सेवा \"BOCW Application for Registration as a New Member / Renewal\" से। इसमें बोर्ड की दी हुई BOCW कॉपी के भरे सभी पन्नों की फोटो लगानी होती है। नवीनीकरण कितने समय बाद होता है, यह श्रम विभाग से पुष्टि करें।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "ServicePlus पर अपने User ID और Password से लॉगिन करें, \"Track Application Status\" में विवरण भरें और \"Get Data\" दबाएं।" },
    { q: "लेबर कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "लेबर कार्ड चंडीगढ़ का निर्माण कर्मकार कल्याण बोर्ड सिर्फ निर्माण मज़दूरों के लिए बनाता है और इससे बोर्ड की योजनाएं मिलती हैं। e-Shram केंद्र सरकार का मुफ्त कार्ड है जो सभी असंगठित मज़दूरों के लिए है। दोनों बनवा सकते हैं।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का केंद्र सरकार का कार्ड" },
    { href: "/states/chandigarh-senior-citizen-card.html", emoji: "👴", title: "चंडीगढ़ वृद्धावस्था पेंशन", text: "60+ के लिए पेंशन" },
    { href: "/states/chandigarh-ration-card.html", emoji: "🍚", title: "चंडीगढ़ राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, स्टेटस" },
    { href: "/states/chandigarh-employment-exchange.html", emoji: "💼", title: "चंडीगढ़ रोज़गार पंजीकरण", text: "रोज़गार कार्यालय में नाम दर्ज" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/document-checklist.html", emoji: "📋", title: "डॉक्यूमेंट चेकलिस्ट", text: "आवेदन से पहले कागज़ तैयार करें" },
  ],
  csc: "/service/csc-locator/chandigarh.html",
};
