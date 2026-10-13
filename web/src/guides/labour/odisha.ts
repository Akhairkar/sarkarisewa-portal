import type { LabourGuide } from "./types";

// Sources (checked 13 Oct 2026). nirmanshramik.odisha.gov.in, bocboard.labdirodisha.gov.in and
// inpr.odisha.gov.in do not load from here (DNS failure), so the board's schemes were read
// through myScheme (myscheme.gov.in, Govt of India; public API). Its OB&OCWWB entries cite
// nirmanshramik.odisha.gov.in/website/schemes and bocboard.labdirodisha.gov.in guideline PDFs:
//   dbobocwwb (death Rs 1 lakh natural / Rs 2 lakh accidental: OLD figures, see below),
//   acaobocwwb (accident disability Rs 1.5 lakh / 80,000 / 40,000), affeobocwwb (funeral Rs 5,000),
//   mbobocwwb (maternity Rs 8,000-10,000 per child; Rs 15,000 with Mamata; two children),
//   maobocwwb (marriage Rs 50,000; 1 year registration), faecbobocwwb + nsky (education table,
//   applied via scholarship.odisha.gov.in), metfmaiso (major ailments Rs 3 lakh),
//   gpwtobocwwb (tools Rs 4,000), afpobbocwwb (bicycle Rs 4,000; 3 years contribution),
//   afpsebocwwb (safety equipment Rs 1,000), nspybocwwb (pension Rs 500/700 in myScheme),
//   nspgy (Nirman Shramik Pucca Ghar Yojana Rs 1.2 / 1.3 lakh, rural).
//   Online steps (One Time Registration, OTP, Benefit menu, applicationTracking,
//   payAnnuealContribution) and offline Form-XXVII to DLO/ALO/RLI from the same entries.
// - Death benefit raised to Rs 3 lakh (natural) / Rs 6 lakh (accidental) in Sept 2024
//   (CM announcement, allthingstalent.org / odishabytes reports) and repeated in Labour & ESI
//   Dept press note of 11 Feb 2025 (inpr.odisha.gov.in, via search extract), which also gives
//   the 24x7 toll-free number 1800-3456703.
// - Pension raised from Rs 500 to Rs 1,000/month from Feb 2024: odishabytes.com report
//   (search extract only; not seen on an official page), so marked as such.
// Left out (not verifiable from an official page here): registration fee and yearly
// contribution amount (third-party sites say Rs 20 / Rs 50), card validity period.
// Old description's "e-District Odisha" claim not supported, so description rewritten.
export const odisha: LabourGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  title: "Odisha Labour Card (BOCW) 2026: Apply & Status",
  description: "ओडिशा लेबर कार्ड (BOCW) 2026: Nirman Shramik पोर्टल पर निर्माण मज़दूर रजिस्ट्रेशन, ज़रूरी कागज़, बोर्ड की योजनाएं, अंशदान और स्टेटस देखने का तरीका।",
  published: "2026-08-01",
  modified: "2026-10-12",
  verified: "12 अक्टूबर 2026",
  h1: "ओडिशा लेबर कार्ड 2026: निर्माण श्रमिक रजिस्ट्रेशन, योजनाएं और स्टेटस",
  lead: "ओडिशा में निर्माण मज़दूरों का लेबर कार्ड (रजिस्ट्रेशन) ओडिशा भवन एवं अन्य निर्माण कर्मकार कल्याण बोर्ड (OB&OCWWB) देता है। रजिस्ट्रेशन और योजनाओं के आवेदन बोर्ड के <strong>Nirman Shramik पोर्टल</strong> (nirmanshramik.odisha.gov.in) पर होते हैं, या फॉर्म भरकर ज़िला श्रम अधिकारी के कार्यालय में जमा किया जा सकता है। 18 से 60 साल के वे मज़दूर रजिस्ट्रेशन करवा सकते हैं जिन्होंने पिछले 12 महीनों में कम से कम 90 दिन निर्माण कार्य किया हो।",
  facts: [
    ["पोर्टल", '<a href="https://nirmanshramik.odisha.gov.in/" target="_blank" rel="noopener nofollow">nirmanshramik.odisha.gov.in</a>'],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "पिछले 12 महीनों में 90 दिन निर्माण कार्य"],
    ["हेल्पलाइन", '<a href="tel:18003456703">1800-345-6703</a> (टोल-फ्री)'],
  ],
  board: "ओडिशा भवन एवं अन्य निर्माण कर्मकार कल्याण बोर्ड (OB&OCWWB)",
  notice: "<strong>सालाना अंशदान जमा करते रहें:</strong> ज़्यादातर योजनाओं में शर्त है कि मज़दूर ने बोर्ड को अंशदान (annual contribution) समय पर जमा किया हो। साइकिल सहायता के लिए 3 साल का अंशदान ज़रूरी है। अंशदान Nirman Shramik पोर्टल के \"Pay Annual Contribution\" विकल्प में रजिस्ट्रेशन नंबर डालकर जमा होता है।",
  eligibility: [
    "उम्र <strong>18 साल से 60 साल</strong> के बीच हो (भवन एवं अन्य सन्निर्माण कर्मकार अधिनियम, 1996)।",
    "पिछले 12 महीनों में कम से कम <strong>90 दिन निर्माण कार्य</strong> किया हो: राजमिस्त्री, हेल्पर, बढ़ई, पेंटर, बिजली मिस्त्री, प्लंबर, सड़क-पुल निर्माण जैसे काम।",
    "आवेदक <strong>ओडिशा का निवासी</strong> हो।",
    "किसी दूसरे कल्याण कोष (Welfare Fund) का सदस्य न हो, और किसी दूसरे ज़िले या राज्य के बोर्ड में पहले से रजिस्टर्ड न हो।",
    "फैक्ट्री अधिनियम या खान अधिनियम वाले कामों में लगे मज़दूर इस बोर्ड में नहीं आते।",
  ],
  documents: [
    "<strong>आधार कार्ड</strong> और चालू मोबाइल नंबर (OTP के लिए)",
    "<strong>उम्र का प्रमाण</strong> (आधार, वोटर ID या स्कूल प्रमाण पत्र)",
    "<strong>90 दिन के निर्माण कार्य का प्रमाण</strong>, और पिछले एक साल में जिन जगहों/ठेकेदारों के यहां काम किया उनका विवरण",
    "<strong>बैंक खाते की पासबुक</strong> (DBT चालू खाता), क्योंकि पैसा सीधे खाते में आता है",
    "<strong>ओडिशा के निवास का प्रमाण</strong>",
    "पासपोर्ट साइज़ फोटो, और परिवार व नॉमिनी का विवरण",
  ],
  apply: {
    intro: "रजिस्ट्रेशन Nirman Shramik पोर्टल पर ऑनलाइन, या फॉर्म भरकर श्रम कार्यालय में ऑफलाइन हो सकता है। ऑनलाइन के लिए आधार से जुड़ा मोबाइल पास रखें।",
    steps: [
      '<strong>पोर्टल खोलें:</strong> <a href="https://nirmanshramik.odisha.gov.in/" target="_blank" rel="noopener nofollow">nirmanshramik.odisha.gov.in</a> पर आवेदक लॉगिन (Login) पेज पर जाएं और ऊपर दाईं ओर <strong>"One Time Registration"</strong> दबाएं।',
      "<strong>घोषणा स्वीकार करें:</strong> Declaration वाले बॉक्स पर टिक करके \"Proceed\" दबाएं। ज़रूरी जानकारी भरें और फिर \"Proceed\" दबाएं।",
      "<strong>OTP डालें:</strong> मोबाइल पर आया OTP डालकर \"Submit\" करें। खाता बन जाता है और एक Username दिखता है। इसे लिखकर रख लें।",
      "<strong>लॉगिन करें:</strong> Username, OTP और कैप्चा डालकर \"Sign In\" करें।",
      "<strong>फॉर्म भरें:</strong> सामान्य जानकारी, पता, परिवार और नॉमिनी, पिछले एक साल में जहां काम किया उनका विवरण, और बैंक खाता भरें। कागज़ अपलोड करके \"Submit\" करें।",
      "<strong>जांच और मंज़ूरी:</strong> श्रम कार्यालय आवेदन की जांच करता है। मंज़ूरी के बाद रजिस्ट्रेशन नंबर मिलता है, जो अंशदान जमा करने और हर योजना के आवेदन में लगता है।",
    ],
    offline: "<strong>ऑफलाइन तरीका:</strong> बोर्ड का रजिस्ट्रेशन फॉर्म (Form-XXVII) भरें, कागज़ों की स्व-प्रमाणित कॉपी लगाएं और अपने इलाके के ज़िला श्रम अधिकारी (DLO), सहायक श्रम अधिकारी (ALO) या ग्रामीण श्रम निरीक्षक (RLI) के पास जमा करें। फॉर्म भरने में मदद के लिए नज़दीकी CSC केंद्र भी जा सकते हैं। किसी दलाल को पैसे न दें।",
  },
  fees: [
    ["रजिस्ट्रेशन शुल्क", "राशि आवेदन के समय बताई जाती है; ज़िला श्रम कार्यालय से पुष्टि करें"],
    ["सालाना अंशदान (annual contribution)", "हर साल जमा करना होता है। पोर्टल पर \"Pay Annual Contribution\" में रजिस्ट्रेशन नंबर डालकर ऑनलाइन जमा होता है"],
    ["क्यों ज़रूरी", "कई योजनाओं में <strong>अद्यतन (up-to-date) अंशदान</strong> की शर्त है। अंशदान बकाया रहा तो लाभ रुक सकता है"],
    ["CSC केंद्र", "फॉर्म भरने का सेवा शुल्क अलग लग सकता है; रसीद ज़रूर लें"],
  ],
  status: [
    "<strong>स्टेटस देखें:</strong> Nirman Shramik पोर्टल के \"Application Tracking\" विकल्प में अपना Application Tracking Number डालें। रजिस्ट्रेशन और योजना, दोनों के आवेदन का स्टेटस यहीं दिखता है।",
    "<strong>योजना का आवेदन:</strong> लॉगिन करें, ऊपर मेनू में \"Benefit\" दबाएं, सूची से योजना चुनें, जानकारी भरें, कागज़ अपलोड करें और \"Submit\" करें।",
    "<strong>ऑफलाइन योजना आवेदन:</strong> हर योजना का अलग फॉर्म है (जैसे दुर्घटना के लिए Form-XXXIV, मृत्यु के लिए Form-XXXV)। फॉर्म भरकर DLO/ALO/RLI कार्यालय में जमा करें।",
    "<strong>बच्चों की पढ़ाई सहायता:</strong> इसका आवेदन ओडिशा राज्य छात्रवृत्ति पोर्टल (scholarship.odisha.gov.in) पर होता है; जांच ज़िला श्रम अधिकारी करते हैं।",
    "<strong>दिक्कत हो तो:</strong> टोल-फ्री नंबर 1800-345-6703 पर फोन करें या ज़िला श्रम अधिकारी कार्यालय जाएं।",
  ],
  schemes: [
    ["मृत्यु सहायता", "सामान्य मृत्यु: <strong>₹3,00,000</strong>; दुर्घटना में मृत्यु: <strong>₹6,00,000</strong> (सितंबर 2024 में बढ़ाई गई राशि)", "नॉमिनी को; पहले यह ₹2 लाख / ₹4 लाख थी"],
    ["दुर्घटना में विकलांगता", "पूर्ण स्थायी विकलांगता: ₹1,50,000; एक अंग या आंख खोने पर: ₹80,000; अन्य स्थायी विकलांगता: ₹40,000", "रजिस्टर्ड मज़दूर"],
    ["अंत्येष्टि सहायता", "₹5,000", "मृत मज़दूर के नॉमिनी को"],
    ["मातृत्व सहायता", "₹8,000 से ₹10,000 प्रति बच्चा; \"Mamata\" योजना के योग्य हों तो कुल ₹15,000", "महिला मज़दूर; एक साल का रजिस्ट्रेशन; दो बच्चों तक"],
    ["विवाह सहायता", "<strong>₹50,000</strong>", "अविवाहित महिला मज़दूर की अपनी शादी या दो बेटियों (18+) की शादी; एक साल का रजिस्ट्रेशन"],
    ["बच्चों की पढ़ाई (Nirman Shramik Kalyan Yojana)", "कक्षा 6-7 (केवल लड़कियां) और 8: ₹2,000/साल; 9: ₹3,000; 10: ₹4,000; 11-12: ₹5,000; BA/BSc/BCom/PG: ₹7,000; B.Ed/CT/नर्सिंग: ₹10,000; B.Tech/मेडिकल/MBA आदि (सरकारी कॉलेज): ₹40,000; कक्षा 10 में 90%+ पर ₹10,000 इनाम", "दो बच्चों तक; लड़कियों को कक्षा 8 से 20% ज़्यादा; 50% हाज़िरी ज़रूरी"],
    ["गंभीर बीमारी का इलाज", "अधिकतम ₹3,00,000", "मज़दूर या आश्रित; दिमाग/रीढ़, हृदय, किडनी और कैंसर की बीमारी; एक साल का रजिस्ट्रेशन"],
    ["निर्माण श्रमिक पेंशन (NSPY)", "<strong>₹1,000 / महीना</strong> (फरवरी 2024 से बढ़ी राशि, समाचार रिपोर्ट के अनुसार)", "60+ रजिस्टर्ड मज़दूर; विधवा, दिव्यांग और कुष्ठ रोगी मज़दूर भी"],
    ["औज़ार / साइकिल / सुरक्षा उपकरण", "औज़ार: ₹4,000; साइकिल: ₹4,000; हेलमेट, जूते, दस्ताने: ₹1,000 (असली बिल पर, एक बार)", "साइकिल के लिए 3 साल का अंशदान; औज़ार के लिए एक साल का रजिस्ट्रेशन"],
    ["निर्माण श्रमिक पक्का घर योजना (NSPGY)", "पक्का घर बनाने के लिए ₹1,20,000 (IAP ज़िलों में ₹1,30,000), किस्तों में", "गांव के रजिस्टर्ड मज़दूर जिनके पास पक्का घर नहीं; पंचायती राज विभाग के माध्यम से"],
  ],
  schemesNote: "ज़्यादातर राशि भारत सरकार के myScheme पोर्टल पर ओडिशा बोर्ड की योजनाओं के विवरण से ली गई है, जो बोर्ड के दिशा-निर्देशों पर आधारित है। मृत्यु सहायता की बढ़ी राशि राज्य सरकार की 2024-25 की घोषणा से है, और पेंशन की बढ़ी राशि समाचार रिपोर्ट से। बोर्ड समय-समय पर राशि और शर्तें बदलता है, आवेदन से पहले <a href=\"https://nirmanshramik.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nirmanshramik.odisha.gov.in</a> या ज़िला श्रम कार्यालय से पुष्टि करें।",
  reject: [
    ["90 दिन का कार्य प्रमाण नहीं है", "ठेकेदार/नियोजक से प्रमाण पत्र लें। न मिले तो ज़िला श्रम अधिकारी या ग्रामीण श्रम निरीक्षक से पूछें कि आपके काम के लिए कौन सा प्रमाण मान्य होगा।"],
    ["अंशदान बकाया है", "पोर्टल के \"Pay Annual Contribution\" में रजिस्ट्रेशन नंबर डालकर बकाया अंशदान जमा करें। कई योजनाओं में अद्यतन अंशदान की शर्त है।"],
    ["OTP नहीं आ रहा", "जो मोबाइल नंबर डाला है वह चालू हो और आपके पास हो। नंबर बदल गया हो तो श्रम कार्यालय से सुधार करवाएं।"],
    ["पैसा खाते में नहीं आया", "बैंक खाता चालू, आधार से जुड़ा और DBT के लिए चालू है या नहीं, जांचें। फिर Application Tracking में स्टेटस देखें।"],
    ["समय सीमा निकल गई", "मृत्यु, मातृत्व जैसी योजनाओं में घटना के बाद तय समय में आवेदन करना होता है। जल्द से जल्द श्रम कार्यालय में आवेदन दें और देरी का कारण लिखें।"],
  ],
  official: [
    { href: "https://nirmanshramik.odisha.gov.in/", title: "Nirman Shramik पोर्टल, ओडिशा निर्माण कर्मकार कल्याण बोर्ड", note: "रजिस्ट्रेशन, सालाना अंशदान, योजना आवेदन, Application Tracking" },
    { href: "https://scholarship.odisha.gov.in/", title: "ओडिशा राज्य छात्रवृत्ति पोर्टल", note: "मज़दूरों के बच्चों की पढ़ाई सहायता (Nirman Shramik Kalyan Yojana)" },
    { href: "https://www.myscheme.gov.in/", title: "myScheme (भारत सरकार)", note: "ओडिशा बोर्ड की योजनाओं के विवरण (\"O.B.O.C.W.W.B\" खोजें)" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (केंद्र सरकार)" },
  ],
  faq: [
    { q: "ओडिशा में लेबर कार्ड कैसे बनवाएं?", a: "Nirman Shramik पोर्टल (nirmanshramik.odisha.gov.in) पर \"One Time Registration\" से मोबाइल OTP द्वारा खाता बनाएं, फिर लॉगिन करके फॉर्म भरें और कागज़ अपलोड करें। ऑफलाइन के लिए Form-XXVII भरकर ज़िला श्रम अधिकारी, सहायक श्रम अधिकारी या ग्रामीण श्रम निरीक्षक के पास जमा करें।" },
    { q: "क्या ओडिशा लेबर कार्ड e-District पर बनता है?", a: "निर्माण मज़दूर का रजिस्ट्रेशन और बोर्ड की योजनाओं के आवेदन बोर्ड के Nirman Shramik पोर्टल पर होते हैं। ऑफलाइन आवेदन ज़िले के श्रम कार्यालय में जमा होता है।" },
    { q: "ओडिशा लेबर कार्ड से कौन सी योजनाएं मिलती हैं?", a: "सामान्य मृत्यु पर ₹3 लाख और दुर्घटना मृत्यु पर ₹6 लाख, दुर्घटना में विकलांगता सहायता, शादी पर ₹50,000, मातृत्व सहायता, बच्चों की पढ़ाई सहायता, गंभीर बीमारी पर ₹3 लाख तक, 60 साल के बाद पेंशन, औज़ार, साइकिल, सुरक्षा उपकरण और गांव में पक्का घर।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "Nirman Shramik पोर्टल के \"Application Tracking\" विकल्प में Application Tracking Number डालें। मदद के लिए टोल-फ्री नंबर 1800-345-6703 पर फोन कर सकते हैं।" },
    { q: "लेबर कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "लेबर कार्ड ओडिशा का निर्माण कर्मकार कल्याण बोर्ड सिर्फ निर्माण मज़दूरों के लिए बनाता है और इससे बोर्ड की योजनाएं मिलती हैं। e-Shram केंद्र सरकार का मुफ्त कार्ड है जो सभी असंगठित मज़दूरों के लिए है। दोनों बनवा सकते हैं।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का केंद्र सरकार का कार्ड" },
    { href: "/states/odisha-senior-citizen-card.html", emoji: "👴", title: "ओडिशा वृद्धावस्था पेंशन", text: "60+ के लिए पेंशन" },
    { href: "/states/odisha-ration-card.html", emoji: "🍚", title: "ओडिशा राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, स्टेटस" },
    { href: "/states/odisha-employment-exchange.html", emoji: "💼", title: "ओडिशा रोज़गार पंजीकरण", text: "रोज़गार कार्यालय में नाम दर्ज" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/document-checklist.html", emoji: "📋", title: "डॉक्यूमेंट चेकलिस्ट", text: "आवेदन से पहले कागज़ तैयार करें" },
  ],
  csc: "/service/csc-locator/odisha.html",
};
