import type { LabourGuide } from "./types";

// Sources (checked 12 Oct 2026, both pages opened directly):
//   tnuwwb.tn.gov.in (home page): New Registration, Registration for Inter-State
//   Migrant Construction Workers, Application Status, Renewal, Claim, Amendment,
//   Transfer, Housing Scheme, Pensioner's Live Certificate (2025-26 from
//   02.04.2025), Pension Order, Auto Rickshaw / eScooter subsidy, PhD and
//   nursing/catering diploma education assistance, claim list for TN
//   Construction WWB (worksite accident death, accident death/disability,
//   dead body transport, family pension, funeral/natural death, pension),
//   Grievance form/status, "Know your application number / registration no.".
//   labour.tn.gov.in/tncons + Procedure-For-Registration.php: board set up 1994,
//   "No registration fee is collected", ID card free of cost; fee waiver G.O.
//   91 of 1.9.2006.
// Left out: scheme amounts. labour.tn.gov.in scheme pages show 2011-2016 figures
// (pension Rs 1,000 etc.) that are clearly out of date, and the current policy
// note (tn.gov.in) could not be opened. Registration validity also left general
// (the department page still shows the old "2 years" text). No helpline found.
export const tamilNadu: LabourGuide = {
  state: { slug: "tamil-nadu", hi: "तमिलनाडु" },
  title: "Tamil Nadu Labour Card (BOCW) 2026: Apply & Status",
  description: "तमिलनाडु लेबर कार्ड 2026: tnuwwb.tn.gov.in पर निर्माण श्रमिक कल्याण बोर्ड में मुफ्त रजिस्ट्रेशन, ज़रूरी कागज़, आवेदन स्टेटस, रिन्यूअल, क्लेम और पेंशन जीवन प्रमाण पत्र।",
  published: "2026-08-01",
  modified: "2026-10-12",
  verified: "12 अक्टूबर 2026",
  h1: "तमिलनाडु लेबर कार्ड 2026: निर्माण श्रमिक रजिस्ट्रेशन, स्टेटस और योजनाएं",
  lead: "तमिलनाडु में निर्माण मज़दूरों का लेबर कार्ड तमिलनाडु निर्माण श्रमिक कल्याण बोर्ड (Tamil Nadu Construction Workers Welfare Board) बनाता है। रजिस्ट्रेशन, रिन्यूअल, योजना के क्लेम और स्टेटस सब कुछ असंगठित श्रमिक कल्याण बोर्डों के पोर्टल tnuwwb.tn.gov.in पर ऑनलाइन होता है। श्रम विभाग के अनुसार रजिस्ट्रेशन की कोई फीस नहीं है और पहचान पत्र मुफ्त मिलता है।",
  facts: [
    ["पोर्टल", '<a href="https://tnuwwb.tn.gov.in/" target="_blank" rel="noopener nofollow">tnuwwb.tn.gov.in</a>'],
    ["फीस", "कोई रजिस्ट्रेशन फीस नहीं"],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "12 महीनों में 90 दिन निर्माण कार्य"],
  ],
  board: "तमिलनाडु निर्माण श्रमिक कल्याण बोर्ड (Tamil Nadu Construction Workers Welfare Board)",
  notice: "<strong>दूसरे राज्यों के मज़दूर भी:</strong> तमिलनाडु में काम कर रहे दूसरे राज्यों के निर्माण मज़दूरों के लिए पोर्टल पर अलग विकल्प है: <strong>\"Registration for Inter-State Migrant Construction Workers\"</strong>। हिंदी भाषी मज़दूर इसी से आवेदन करें।",
  eligibility: [
    "उम्र <strong>18 साल से 60 साल</strong> के बीच हो (भवन एवं अन्य सन्निर्माण कर्मकार अधिनियम, 1996 की धारा 12)।",
    "पिछले 12 महीनों में कम से कम <strong>90 दिन निर्माण कार्य</strong> किया हो: भवन, सड़क, पुल, बांध, पत्थर तोड़ने, ईंट भट्ठे (फैक्टरी कानून वाले नहीं) और पंडाल बनाने जैसे काम।",
    "तमिलनाडु में निर्माण कार्य कर रहे हों। दूसरे राज्यों के मज़दूरों के लिए अलग रजिस्ट्रेशन विकल्प है।",
    "योजनाओं का क्लेम करने के लिए रजिस्ट्रेशन <strong>चालू (renewed)</strong> होना चाहिए।",
  ],
  documents: [
    "<strong>आधार कार्ड</strong> और उससे जुड़ा मोबाइल नंबर",
    "<strong>उम्र का प्रमाण:</strong> जन्म प्रमाण पत्र / स्कूल सर्टिफिकेट / आधार",
    "<strong>निर्माण कार्य का प्रमाण:</strong> नियोक्ता, ठेकेदार या पंजीकृत ट्रेड यूनियन का प्रमाण पत्र",
    "राशन कार्ड (परिवार का विवरण)",
    "<strong>बैंक पासबुक</strong>, क्योंकि सहायता सीधे खाते में आती है",
    "पासपोर्ट साइज़ फोटो, और नॉमिनी का विवरण",
  ],
  apply: {
    intro: "आवेदन असंगठित श्रमिक कल्याण बोर्डों के साझा पोर्टल पर होता है। फॉर्म में बोर्ड के रूप में \"Tamil Nadu Construction Workers Welfare Board\" (தமிழ்நாடு கட்டுமானத் தொழிலாளர்கள் நல வாரியம்) चुनें।",
    steps: [
      '<strong>पोर्टल खोलें:</strong> <a href="https://tnuwwb.tn.gov.in/" target="_blank" rel="noopener nofollow">tnuwwb.tn.gov.in</a> पर <strong>"New Registration"</strong> (புதிய விண்ணப்பப் பதிவு) पर क्लिक करें। दूसरे राज्य के मज़दूर "Registration for Inter-State Migrant Construction Workers" चुनें।',
      "<strong>\"Register\" दबाकर आवेदन शुरू करें।</strong> पहले से आधा भरा आवेदन भी यहीं से आगे पूरा होता है।",
      "<strong>फॉर्म भरें:</strong> व्यक्तिगत जानकारी, पता, काम का प्रकार, परिवार, नॉमिनी और बैंक खाता।",
      "<strong>कागज़ अपलोड करें</strong> और आवेदन सबमिट करें।",
      "<strong>आवेदन नंबर संभालें।</strong> भूल जाएं तो पोर्टल पर \"Know Your Application Number / Registration Number\" से पता करें।",
      "<strong>मंज़ूरी के बाद</strong> रजिस्ट्रेशन नंबर मिलता है। इसके बाद \"Login\" से क्लेम, सुधार (Amendment), ट्रांसफर और रिन्यूअल कर सकते हैं।",
    ],
    offline: "<strong>खुद ऑनलाइन नहीं भर सकते?</strong> ज़िले के श्रम अधिकारी (सामाजिक सुरक्षा योजना) कार्यालय से मदद लें, या नज़दीकी CSC / ई-सेवा केंद्र से रसीद के साथ आवेदन करवाएं।",
  },
  fees: [
    ["रजिस्ट्रेशन फीस", "<strong>कोई फीस नहीं।</strong> श्रम विभाग के अनुसार रजिस्ट्रेशन के लिए फीस नहीं ली जाती और पहचान पत्र मुफ्त दिया जाता है (रजिस्ट्रेशन व रिन्यूअल फीस 2006 में माफ की गई थी)"],
    ["रिन्यूअल", 'पोर्टल पर <strong>"Renewal"</strong> (புதுப்பித்தல்) से समय पर रिन्यू करें। रिन्यूअल की अवधि आवेदन/पहचान पत्र पर लिखी तारीख से देखें'],
    ["रिन्यूअल क्यों ज़रूरी", "क्लेम सिर्फ चालू रजिस्ट्रेशन वाले सदस्य का ही मंज़ूर होता है"],
    ["पेंशन वालों के लिए", 'हर साल पोर्टल पर <strong>"Pensioner\'s Live Certificate"</strong> (जीवन प्रमाण पत्र) जमा करना होता है'],
  ],
  status: [
    '<strong>आवेदन का स्टेटस:</strong> <a href="https://tnuwwb.tn.gov.in/" target="_blank" rel="noopener nofollow">tnuwwb.tn.gov.in</a> पर <strong>"Application Status"</strong> (விண்ணப்பத்தின் நிலை) खोलें और आवेदन नंबर डालें।',
    '<strong>नंबर भूल गए?</strong> "Know Your Application Number / Registration Number" से आवेदन या रजिस्ट्रेशन नंबर पता करें।',
    "<strong>लॉगिन करके:</strong> यूज़रनेम और पासवर्ड से लॉगिन करने पर अपना रजिस्ट्रेशन विवरण, क्लेम, सुधार और ट्रांसफर के विकल्प मिलते हैं। पासवर्ड भूलने पर \"Forgot password\" इस्तेमाल करें।",
    '<strong>पेंशन आदेश:</strong> पेंशन मंज़ूर होने पर पोर्टल पर "Pension Order" से आदेश देख सकते हैं।',
    '<strong>शिकायत:</strong> "Grievance Form" से शिकायत दर्ज करें और "Grievance Status" में उसकी स्थिति देखें।',
  ],
  schemes: [
    ["दुर्घटना में मृत्यु / विकलांगता मुआवज़ा", "बोर्ड की तय राशि", "कार्यस्थल पर दुर्घटना में मृत्यु का क्लेम पंजीकृत और अपंजीकृत दोनों मज़दूरों के लिए है"],
    ["प्राकृतिक मृत्यु और अंत्येष्टि सहायता", "बोर्ड की तय राशि", "नॉमिनी को; मृत्यु प्रमाण पत्र और पहचान पत्र के साथ"],
    ["पेंशन और पारिवारिक पेंशन", "मासिक पेंशन", "60 साल पूरे होने पर; पेंशनधारक की मृत्यु पर पति/पत्नी को पारिवारिक पेंशन"],
    ["शिक्षा सहायता", "बोर्ड की तय राशि", "बच्चों की 10वीं, 12वीं, डिग्री, ITI, पेशेवर कोर्स; पोर्टल पर PhD और नर्सिंग/कैटरिंग डिप्लोमा के लिए भी"],
    ["विवाह और प्रसूति सहायता", "बोर्ड की तय राशि", "विवाह: श्रमिक या बच्चों की शादी; प्रसूति: पंजीकृत महिला श्रमिक"],
    ["आवास योजना", "घर के लिए सहायता", "पोर्टल पर लॉगिन करके \"Housing Scheme\" से आवेदन"],
    ["ऑटो रिक्शा / ई-स्कूटर सब्सिडी", "खरीद पर सब्सिडी", "पोर्टल पर लॉगिन करके आवेदन"],
  ],
  schemesNote: "बोर्ड की योजनाओं की राशि सरकार समय-समय पर बढ़ाती है। श्रम विभाग की वेबसाइट पर अभी भी कई साल पुरानी राशि दिखती है, और ताज़ा सरकारी आदेश हम खोल नहीं पाए, इसलिए यहां राशि नहीं लिखी। क्लेम करने से पहले ज़िले के श्रम अधिकारी (सामाजिक सुरक्षा योजना) कार्यालय या पोर्टल पर ताज़ा राशि पूछें।",
  reject: [
    ["काम का प्रमाण पत्र नहीं है", "जिस ठेकेदार या बिल्डर के पास काम किया उससे प्रमाण पत्र लें। न मिले तो अपनी पंजीकृत निर्माण मज़दूर यूनियन या ज़िले के श्रम कार्यालय से पूछें।"],
    ["आवेदन नंबर याद नहीं", "पोर्टल पर \"Know Your Application Number / Registration Number\" से नंबर निकालें।"],
    ["क्लेम रिजेक्ट हुआ", "देखें कि रजिस्ट्रेशन रिन्यू है या नहीं और सभी कागज़ (जैसे मृत्यु प्रमाण पत्र, पहचान पत्र) साफ अपलोड हुए हैं। कमी दूर करके दोबारा क्लेम करें।"],
    ["पेंशन रुक गई", "देखें कि इस साल का जीवन प्रमाण पत्र (Pensioner's Live Certificate) पोर्टल पर जमा हुआ है या नहीं।"],
    ["समाधान नहीं मिल रहा", "पोर्टल पर \"Grievance Form\" से शिकायत दर्ज करें और \"Grievance Status\" में स्थिति देखें, या ज़िले के श्रम कार्यालय जाएं।"],
  ],
  official: [
    { href: "https://tnuwwb.tn.gov.in/", title: "TNUWWB पोर्टल: रजिस्ट्रेशन, स्टेटस, रिन्यूअल, क्लेम" },
    { href: "https://labour.tn.gov.in/", title: "श्रम विभाग, तमिलनाडु सरकार" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (केंद्र सरकार)" },
  ],
  faq: [
    { q: "तमिलनाडु में लेबर कार्ड कैसे बनवाएं?", a: "tnuwwb.tn.gov.in पर \"New Registration\" चुनें, बोर्ड के रूप में तमिलनाडु निर्माण श्रमिक कल्याण बोर्ड चुनें, फॉर्म भरें और आधार, उम्र का प्रमाण, काम का प्रमाण, बैंक पासबुक व फोटो अपलोड करें। दूसरे राज्यों के मज़दूर \"Registration for Inter-State Migrant Construction Workers\" से आवेदन करें।" },
    { q: "तमिलनाडु लेबर कार्ड की फीस कितनी है?", a: "कोई फीस नहीं। श्रम विभाग के अनुसार रजिस्ट्रेशन की फीस नहीं ली जाती और पहचान पत्र मुफ्त मिलता है।" },
    { q: "तमिलनाडु लेबर कार्ड का स्टेटस कैसे देखें?", a: "पोर्टल पर \"Application Status\" में आवेदन नंबर डालें। नंबर याद न हो तो \"Know Your Application Number / Registration Number\" से पता करें।" },
    { q: "क्या दूसरे राज्य का मज़दूर तमिलनाडु में लेबर कार्ड बनवा सकता है?", a: "हां। tnuwwb.tn.gov.in पर दूसरे राज्यों के निर्माण मज़दूरों के लिए अलग विकल्प \"Registration for Inter-State Migrant Construction Workers\" है।" },
    { q: "पेंशन जारी रखने के लिए क्या करना होता है?", a: "हर साल पोर्टल पर \"Pensioner's Live Certificate\" से जीवन प्रमाण पत्र जमा करें। 2025-26 के लिए यह 2 अप्रैल 2025 से शुरू हुआ था।" },
    { q: "लेबर कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "लेबर कार्ड तमिलनाडु का निर्माण श्रमिक कल्याण बोर्ड सिर्फ निर्माण मज़दूरों के लिए बनाता है और इससे बोर्ड की योजनाएं मिलती हैं। e-Shram केंद्र सरकार का कार्ड है जो सभी असंगठित मज़दूरों के लिए है। दोनों बनवा सकते हैं।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का केंद्र सरकार का कार्ड" },
    { href: "/states/tamil-nadu-senior-citizen-card.html", emoji: "👴", title: "तमिलनाडु वृद्धावस्था पेंशन", text: "60+ के लिए राज्य की पेंशन" },
    { href: "/states/tamil-nadu-ration-card.html", emoji: "🍚", title: "तमिलनाडु राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, स्टेटस" },
    { href: "/states/tamil-nadu-employment-exchange.html", emoji: "💼", title: "तमिलनाडु रोज़गार पंजीकरण", text: "रोज़गार कार्यालय में नाम दर्ज" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/document-checklist.html", emoji: "📋", title: "डॉक्यूमेंट चेकलिस्ट", text: "आवेदन से पहले कागज़ तैयार करें" },
  ],
  csc: "/service/csc-locator/tamil-nadu.html",
};
