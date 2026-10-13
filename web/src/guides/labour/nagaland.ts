import type { LabourGuide } from "./types";

// Sources (checked 12 Oct 2026):
// - Board's official site https://nbocw.nagaland.gov.in (pages /about, /schemes,
//   /contact-members, /faq, /user-manual; site "last updated 31 Aug 2026"):
//   board name (NBOCWWB, under Department of Labour, office in Directorate of Labour,
//   Kohima); registration through the district Assistant Labour Commissioner (ALC),
//   who is the registering officer; employer registered under s.7 certifies the form;
//   Form XXVIII nomination with 2 nominees; premium Rs 300/year (Rs 25/month), renewed
//   every year January-March; ID card with registration number. Online "Register" on
//   the site is ONLY for cess payers; beneficiary registration is at the district office.
//   Schemes: life insurance Rs 2 lakh natural / Rs 4 lakh accidental death; loss of
//   earning Rs 1,000/day hospitalisation, max 30 days per family per calendar year;
//   children education Rs 500/month per child, 2 children, Nursery-Class 12; maternity
//   Rs 6,000 per pregnancy, max 2; tool grant Rs 3,000 to members who renew yearly.
//   No pension scheme is listed on the board's schemes page.
// - Board user manual "Beneficiary Renewal with UAN" v3.2 (9 Mar 2026): online renewal
//   via Services > Renewal with registration number + OTP + e-Shram UAN/card photo;
//   Reference ID by SMS; status at /renewal/status; receipt download.
// - Helpdesk page: online ticket, 9 AM-5 PM Mon-Fri; email nbocw-ngl@gov.in.
// - myScheme (cea, mbfwb, manbocwwb) confirms board name and offline ALC application;
//   where myScheme differs from the board's own schemes page (education up to Class 10,
//   medical Rs 1,000/500 per day), the board's page is used.
export const nagaland: LabourGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  title: "Nagaland Labour Card (BOCW) 2026: Apply & Status",
  description: "नागालैंड लेबर कार्ड (BOCW) 2026: निर्माण मज़दूर रजिस्ट्रेशन के लिए कहां जाएं, कौन पात्र है, कौन से कागज़ लगेंगे और बोर्ड से कौन सी मदद मिलती है।",
  published: "2026-08-01",
  modified: "2026-10-12",
  verified: "12 अक्टूबर 2026",
  h1: "नागालैंड लेबर कार्ड 2026: रजिस्ट्रेशन कहां और कैसे",
  lead: "नागालैंड में निर्माण मज़दूरों का लेबर कार्ड <strong>नागालैंड भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (NBOCWWB)</strong> बनाता है, जो राज्य के श्रम विभाग के तहत है। नया रजिस्ट्रेशन ऑनलाइन नहीं होता: फॉर्म अपने ज़िले के सहायक श्रम आयुक्त (ALC) कार्यालय में जमा होता है। सदस्यता का अंशदान ₹300 साल (₹25 महीना) है, जिसे हर साल जनवरी से मार्च के बीच नवीनीकरण करना होता है।",
  facts: [
    ["कहां आवेदन", "ज़िले का सहायक श्रम आयुक्त (ALC) कार्यालय"],
    ["अंशदान", "₹300 हर साल (₹25 महीना)"],
    ["नवीनीकरण", "हर साल जनवरी से मार्च, ऑनलाइन भी"],
    ["बीमा", "मृत्यु पर ₹2 लाख, दुर्घटना मृत्यु पर ₹4 लाख"],
  ],
  board: "नागालैंड भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (Nagaland Building and Other Construction Workers' Welfare Board, NBOCWWB)",
  notice: "<strong>ध्यान दें:</strong> बोर्ड की वेबसाइट पर \"Register\" का बटन सिर्फ ठेकेदारों/विभागों के <strong>सेस (cess) भुगतान</strong> के लिए है। मज़दूर का नया रजिस्ट्रेशन ज़िले के ALC कार्यालय में ही होता है। नवीनीकरण (renewal) अब ऑनलाइन भी हो सकता है, इसके लिए e-Shram UAN नंबर चाहिए।",
  eligibility: [
    "उम्र <strong>18 साल से 60 साल</strong> के बीच हो (भवन एवं अन्य सन्निर्माण कर्मकार अधिनियम, 1996 की धारा 12)।",
    "पिछले 12 महीनों में कम से कम <strong>90 दिन निर्माण कार्य</strong> किया हो: राजमिस्त्री, हेल्पर, बढ़ई, पेंटर, प्लंबर, इलेक्ट्रीशियन, सड़क, पुल और भवन निर्माण के मज़दूर।",
    "जिस ठेकेदार/नियोजक के यहां काम किया, वह श्रम विभाग में (अधिनियम की धारा 7 के तहत) पंजीकृत हो और फॉर्म पर काम की पुष्टि करे।",
    "फैक्टरी अधिनियम या खान अधिनियम के तहत आने वाले मज़दूर इसमें नहीं आते।",
    "योजनाओं का फायदा तभी मिलता है जब सदस्यता <strong>चालू (active)</strong> हो, यानी हर साल नवीनीकरण हुआ हो।",
  ],
  documents: [
    "<strong>रजिस्ट्रेशन फॉर्म (Form XXVII)</strong> और <strong>नॉमिनेशन फॉर्म (Form XXVIII)</strong>: दोनों ALC कार्यालय से मिलते हैं",
    "<strong>आधार कार्ड</strong>",
    "<strong>उम्र का प्रमाण</strong>",
    "<strong>ठेकेदार का प्रमाण:</strong> फॉर्म पर ठेकेदार का रजिस्ट्रेशन नंबर, नाम, पता और हस्ताक्षर, साथ में ठेकेदार के रजिस्ट्रेशन सर्टिफिकेट की फोटो कॉपी",
    "<strong>दो नॉमिनी</strong> (पति/पत्नी, बच्चे, माता-पिता या भाई-बहन) के जन्म प्रमाण पत्र और आधार की कॉपी",
    "<strong>बैंक पासबुक</strong> की कॉपी, और पासपोर्ट साइज़ फोटो",
    "चालू मोबाइल नंबर: रजिस्ट्रेशन नंबर और OTP इसी पर आते हैं",
  ],
  apply: {
    intro: "नया रजिस्ट्रेशन ज़िले के सहायक श्रम आयुक्त (ALC) कार्यालय में होता है। ALC ही अपने ज़िले के रजिस्ट्रेशन अधिकारी हैं।",
    steps: [
      "<strong>ALC कार्यालय जाएं:</strong> अपने ज़िले के सहायक श्रम आयुक्त कार्यालय से रजिस्ट्रेशन फॉर्म (Form XXVII) और नॉमिनेशन फॉर्म (Form XXVIII) लें। ज़िलेवार कार्यालयों के पते और फोन नंबर <a href=\"https://nbocw.nagaland.gov.in/contact-members\" target=\"_blank\" rel=\"noopener nofollow\">बोर्ड की वेबसाइट</a> पर हैं।",
      "<strong>ठेकेदार से पुष्टि लें:</strong> फॉर्म के तय कॉलम में ठेकेदार का रजिस्ट्रेशन नंबर, नाम और पता लिखवाएं और उससे हस्ताक्षर करवाएं। ठेकेदार के रजिस्ट्रेशन सर्टिफिकेट की कॉपी साथ लगाएं।",
      "<strong>दो नॉमिनी चुनें:</strong> नॉमिनेशन फॉर्म में दो परिवार वालों के नाम लिखें और उनके जन्म प्रमाण पत्र और आधार की कॉपी लगाएं।",
      "<strong>अंशदान जमा करें:</strong> ₹300 (₹25 महीना के हिसाब से एक साल का) जमा करें और रसीद लें।",
      "<strong>पहचान पत्र लें:</strong> कागज़ों की जांच के बाद ALC कार्यालय रजिस्ट्रेशन नंबर वाला पहचान पत्र (ID card) देता है। आगे हर काम में यही कार्ड लगता है, इसे संभालकर रखें।",
    ],
    offline: "<strong>केंद्र का कार्ड भी बनवाएं:</strong> लेबर कार्ड के साथ <a href=\"/service/e-shram-card.html\">e-Shram कार्ड</a> भी बनवाएं। नागालैंड बोर्ड में ऑनलाइन नवीनीकरण के लिए e-Shram का UAN नंबर मांगा जाता है।",
  },
  fees: [
    ["अंशदान", "₹300 हर साल (₹25 महीना)"],
    ["नवीनीकरण कब", "हर साल <strong>जनवरी से मार्च</strong> के बीच"],
    ["ऑनलाइन नवीनीकरण", "बोर्ड की वेबसाइट पर Services &gt; Renewal: रजिस्ट्रेशन नंबर, रजिस्टर्ड मोबाइल पर OTP, e-Shram UAN और e-Shram कार्ड की फोटो चाहिए"],
    ["सदस्यता चालू रखना", "नवीनीकरण न होने पर सदस्यता चालू नहीं रहती और योजनाओं का पैसा रुक सकता है"],
  ],
  status: [
    "<strong>रजिस्ट्रेशन की जांच:</strong> बोर्ड की वेबसाइट पर Services &gt; Beneficiary Verification में रजिस्ट्रेशन नंबर (जैसे NBOCW/ABC/0010/2016) डालकर अपनी जानकारी देखें। रजिस्ट्रेशन नंबर आपके ID कार्ड पर और रजिस्टर्ड मोबाइल पर SMS में होता है।",
    "<strong>नवीनीकरण की स्थिति:</strong> ऑनलाइन नवीनीकरण के बाद SMS में Reference ID आता है। इसे Services &gt; Check Renewal Status में डालें। ALC की जांच के बाद रसीद डाउनलोड होती है।",
    "<strong>योजना के क्लेम की स्थिति:</strong> Services &gt; Check Claim Status में योजना चुनकर Claim ID डालें।",
    "<strong>कार्ड खो गया:</strong> उसी ALC कार्यालय में नाम और रजिस्ट्रेशन नंबर बताकर दूसरी प्रति के लिए आवेदन करें।",
    "<strong>शिकायत:</strong> बोर्ड का ऑनलाइन हेल्पडेस्क (टिकट) सोमवार से शुक्रवार, सुबह 9 से शाम 5 बजे तक है। ईमेल: nbocw-ngl@gov.in",
  ],
  schemes: [
    ["जीवन बीमा (मृत्यु)", "सामान्य मृत्यु पर <strong>₹2,00,000</strong>, दुर्घटना से मृत्यु पर <strong>₹4,00,000</strong>", "चालू सदस्यता वाले मज़दूर के आश्रित/नॉमिनी को"],
    ["अस्पताल में भर्ती (कमाई का नुकसान)", "<strong>₹1,000 प्रतिदिन</strong>, साल में एक परिवार को ज़्यादा से ज़्यादा 30 दिन", "सदस्य या परिवार; अस्पताल का भर्ती और छुट्टी का पर्चा (admission/discharge summary) ALC कार्यालय में दें"],
    ["बच्चों की पढ़ाई", "<strong>₹500 प्रति बच्चा, हर महीने</strong> (दो बच्चे)", "नर्सरी से कक्षा 12 तक; हर सत्र में दोबारा आवेदन, स्कूल के प्रधानाध्यापक का प्रमाण ज़रूरी"],
    ["मातृत्व लाभ", "<strong>₹6,000</strong> प्रति प्रसव (ज़्यादा से ज़्यादा 2 बार)", "महिला सदस्य या सदस्य की पत्नी; बच्चे का जन्म प्रमाण पत्र ज़रूरी"],
    ["औज़ार सहायता", "<strong>₹3,000</strong>", "हर साल नवीनीकरण कराने वाले सदस्य को औज़ार खरीदने के लिए"],
  ],
  schemesNote: "ये योजनाएं और राशि बोर्ड की वेबसाइट के योजना पेज (nbocw.nagaland.gov.in/schemes) से हैं, जिसे अगस्त 2026 में अपडेट किया गया था। बोर्ड के योजना पेज पर अभी कोई पेंशन योजना नहीं दी गई है। सभी योजनाओं के आवेदन ज़िले के ALC कार्यालय में जमा होते हैं; राशि बदल सकती है, इसलिए आवेदन के समय कार्यालय से पुष्टि करें।",
  reject: [
    ["वेबसाइट पर रजिस्टर नहीं हो पा रहा", "वेबसाइट का \"Register\" सिर्फ सेस भरने वाले ठेकेदारों/विभागों के लिए है। मज़दूर का रजिस्ट्रेशन ALC कार्यालय में होता है। \"ऑनलाइन लेबर कार्ड\" के नाम पर पैसे मांगने वाली निजी वेबसाइटों से बचें।"],
    ["ठेकेदार पंजीकृत नहीं है", "फॉर्म पर पंजीकृत ठेकेदार की पुष्टि ज़रूरी है। ALC कार्यालय से पूछें कि आपके काम का प्रमाण और कैसे दिया जा सकता है।"],
    ["ऑनलाइन नवीनीकरण में UAN नहीं मिल रहा", "UAN सत्यापित न हो तो भी आगे बढ़ सकते हैं; तब नवीनीकरण ALC की जांच के बाद मंज़ूर होता है। रजिस्टर्ड मोबाइल नंबर बंद हो तो ALC कार्यालय जाएं।"],
    ["नवीनीकरण रिजेक्ट हुआ", "Check Renewal Status में कारण पढ़ें, गलती ठीक करें और दोबारा नवीनीकरण करें।"],
    ["योजना का पैसा नहीं आया", "Check Claim Status में स्थिति देखें। बैंक खाता सही है या नहीं जांचें, फिर रसीद के साथ ALC कार्यालय से संपर्क करें।"],
  ],
  official: [
    { href: "https://nbocw.nagaland.gov.in/", title: "नागालैंड BOCW कल्याण बोर्ड (NBOCWWB)", note: "योजनाएं, ऑनलाइन नवीनीकरण, रजिस्ट्रेशन की जांच" },
    { href: "https://nbocw.nagaland.gov.in/contact-members", title: "ज़िलेवार ALC कार्यालय", note: "पते और फोन नंबर" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (केंद्र सरकार)", note: "नवीनीकरण में UAN लगता है" },
  ],
  faq: [
    { q: "नागालैंड में लेबर कार्ड कैसे बनवाएं?", a: "अपने ज़िले के सहायक श्रम आयुक्त (ALC) कार्यालय से Form XXVII और नॉमिनेशन Form XXVIII लें। ठेकेदार से फॉर्म पर पुष्टि करवाएं, दो नॉमिनी के कागज़, आधार, बैंक पासबुक और फोटो लगाएं, ₹300 अंशदान जमा करें। जांच के बाद रजिस्ट्रेशन नंबर वाला ID कार्ड मिलता है।" },
    { q: "क्या नागालैंड लेबर कार्ड ऑनलाइन बनता है?", a: "नहीं। बोर्ड की वेबसाइट के अनुसार मज़दूर का नया रजिस्ट्रेशन ज़िले के ALC कार्यालय में होता है। लेकिन नवीनीकरण, रजिस्ट्रेशन की जांच और क्लेम की स्थिति nbocw.nagaland.gov.in पर ऑनलाइन देखी जा सकती है।" },
    { q: "नागालैंड लेबर कार्ड की फीस कितनी है?", a: "बोर्ड की वेबसाइट के अनुसार ₹300 साल (₹25 महीना) अंशदान देना होता है, और हर साल जनवरी से मार्च के बीच नवीनीकरण करना होता है।" },
    { q: "नवीनीकरण ऑनलाइन कैसे करें?", a: "nbocw.nagaland.gov.in पर Services > Renewal में जाएं, रजिस्ट्रेशन नंबर डालें, रजिस्टर्ड मोबाइल पर आया OTP भरें, e-Shram UAN डालें, साल चुनें और e-Shram कार्ड की फोटो लगाकर जमा करें। Reference ID SMS में आता है, उससे स्थिति देखें और रसीद डाउनलोड करें।" },
    { q: "क्या नागालैंड बोर्ड पेंशन देता है?", a: "बोर्ड के योजना पेज पर अभी पेंशन योजना नहीं दी गई है। वहां जीवन बीमा, अस्पताल में भर्ती पर सहायता, बच्चों की पढ़ाई, मातृत्व लाभ और औज़ार सहायता दी गई है। 60 साल से ऊपर के लोग राज्य की वृद्धावस्था पेंशन के बारे में पता कर सकते हैं।" },
    { q: "लेबर कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "लेबर कार्ड राज्य का निर्माण कर्मकार कल्याण बोर्ड सिर्फ निर्माण मज़दूरों के लिए बनाता है। e-Shram केंद्र सरकार का मुफ्त कार्ड है जो सभी असंगठित मज़दूरों के लिए है। नागालैंड में लेबर कार्ड के ऑनलाइन नवीनीकरण में e-Shram UAN भी मांगा जाता है, इसलिए दोनों बनवाएं।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का केंद्र सरकार का कार्ड" },
    { href: "/states/nagaland-senior-citizen-card.html", emoji: "👴", title: "नागालैंड वृद्धावस्था पेंशन", text: "60+ के लिए पेंशन" },
    { href: "/states/nagaland-ration-card.html", emoji: "🍚", title: "नागालैंड राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, स्टेटस" },
    { href: "/states/nagaland-employment-exchange.html", emoji: "💼", title: "नागालैंड रोज़गार पंजीकरण", text: "रोज़गार कार्यालय में नाम दर्ज" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/document-checklist.html", emoji: "📋", title: "डॉक्यूमेंट चेकलिस्ट", text: "आवेदन से पहले कागज़ तैयार करें" },
  ],
  csc: "/service/csc-locator/nagaland.html",
};
