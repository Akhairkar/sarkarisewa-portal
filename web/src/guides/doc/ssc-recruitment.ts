import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): ssc.gov.in (API /admin/5.1/allExams for the
// exam list; /admin/5.1/liveExams: CHSL 2026 application 07.09.2026 to
// 07.10.2026, fee ₹100, correction charges ₹200/₹500, age 18-27, correction
// window 14-16.10.2026; notice board), Notice of CGL Examination 2026
// (21.05.2026: OTR on new site, old ssc.nic.in OTR not valid, Aadhaar
// authentication, OTR documents, 14-day completion, fee ₹100 and exemptions,
// payment modes, correction charges, age-relaxation codes 01-13, helpline
// 1800 309 3063, mySSC app, Bachelor's degree), Notice of MTS & Havaldar 2025
// and CT(GD) 2024 (Matriculation), Notice of SI in Delhi Police & CAPF 2025
// (Bachelor's degree), Notice of Stenographer C & D 2026 (12th), Notice of JE
// 2025 (engineering degree/diploma), Notice of Phase-XIV/2026 Selection Posts
// (post-wise EQs, Annexure-III); CGL 2026 Annexure: "Apply" link under
// "Latest Notifications" tab, signature JPEG 10-20 KB. Old page helpline 011-24363343 not found on
// ssc.gov.in and was dropped.
export const sscRecruitment: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/index.html" },
    { label: "SSC भर्ती" },
  ],
  docHi: "SSC भर्ती",
  title: "एसएससी (कर्मचारी चयन आयोग) भर्ती 2026 | SarkariSewa India",
  description: "केंद्र सरकार के मंत्रालयों, विभागों, और अधीनस्थ कार्यालयों में समूह बी और सी पदों के लिए भर्ती परीक्षाएं आयोजित करता है। ssc.gov.in पर OTR, आवेदन, ₹100 फीस व छूट, उम्र में छूट और CGL, CHSL, MTS, GD, CPO की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "SSC भर्ती 2026: परीक्षाएं, ssc.gov.in पर वन टाइम रजिस्ट्रेशन (OTR), आवेदन, फीस और उम्र में छूट",
  lead: "कर्मचारी चयन आयोग (SSC) केंद्र सरकार के मंत्रालयों और विभागों के लिए CGL, CHSL, MTS, कांस्टेबल GD, दिल्ली पुलिस-CAPF SI, स्टेनोग्राफर, JE और सेलेक्शन पोस्ट जैसी परीक्षाएं कराता है। आवेदन सिर्फ नई वेबसाइट ssc.gov.in या mySSC ऐप से होता है। पहले एक बार One-Time Registration (OTR) करें; पुरानी साइट ssc.nic.in का OTR अब नहीं चलता। ज़्यादातर परीक्षाओं की फीस ₹100 है, और महिलाएं, SC, ST, दिव्यांग (PwBD) और आरक्षण के पात्र पूर्व सैनिक फीस से मुक्त हैं।",
  facts: [
    ["वेबसाइट", '<a href="https://ssc.gov.in/" target="_blank" rel="noopener nofollow">ssc.gov.in</a> + mySSC ऐप'],
    ["फीस", "₹100 (छूट: महिला, SC, ST, PwBD, ESM)"],
    ["अभी खुली", "CHSL 2026: 7 अक्टूबर 2026 तक"],
    ["हेल्पलाइन", "1800 309 3063 (टोल-फ्री)"],
  ],
  notice: "<strong>CHSL 2026 का आवेदन चल रहा है:</strong> ssc.gov.in के अनुसार आवेदन 7 सितंबर से <strong>7 अक्टूबर 2026</strong> तक, ऑनलाइन फीस <strong>8 अक्टूबर 2026</strong> तक और सुधार विंडो 14 से 16 अक्टूबर 2026 है। उम्र सीमा 18-27 साल, फीस ₹100। तारीखें बदल सकती हैं, आवेदन से पहले नोटिस ज़रूर पढ़ें।",
  sections: [
    {
      id: "parikshaen",
      title: "SSC की मुख्य परीक्षाएं और न्यूनतम योग्यता",
      intro: "योग्यता हर परीक्षा के नोटिस में दी जाती है। ये SSC के हालिया नोटिस से हैं:",
      table: {
        head: ["परीक्षा", "न्यूनतम शैक्षणिक योग्यता"],
        rows: [
          ["<strong>CGL</strong> (Combined Graduate Level)", "स्नातक (Bachelor's degree); कुछ पदों के लिए खास विषय"],
          ["<strong>CHSL</strong> (Combined Higher Secondary Level 10+2)", "12वीं पास"],
          ["<strong>MTS और हवलदार</strong> (CBIC, CBN)", "10वीं (मैट्रिक) पास"],
          ["<strong>कांस्टेबल (GD)</strong> CAPF, SSF, असम राइफल्स राइफलमैन", "10वीं पास"],
          ["<strong>SI, दिल्ली पुलिस और CAPF</strong> (CPO)", "स्नातक"],
          ["<strong>स्टेनोग्राफर ग्रेड C और D</strong>", "12वीं पास + स्किल टेस्ट"],
          ["<strong>जूनियर इंजीनियर (JE)</strong> सिविल, मैकेनिकल, इलेक्ट्रिकल", "संबंधित इंजीनियरिंग डिग्री, या डिप्लोमा (कुछ पदों में अनुभव के साथ)"],
          ["<strong>सेलेक्शन पोस्ट</strong> (Phase परीक्षा)", "हर पद के हिसाब से 10वीं, 12वीं या स्नातक; नोटिस के Annexure में"],
          ["<strong>हिंदी अनुवादक</strong>, दिल्ली पुलिस कांस्टेबल/हेड कांस्टेबल आदि", "संबंधित नोटिस के अनुसार"],
        ],
      },
      callout: { kind: "info", html: 'SSC की ताज़ा भर्तियों की सूची हमारे <a href="/jobs/index.html">सरकारी नौकरी पेज</a> पर, और खास पेज: <a href="/jobs/ssc-cgl-recruitment-2026.html">SSC CGL 2026</a>, <a href="/jobs/ssc-mts-havaldar-recruitment-2026.html">SSC MTS व हवलदार</a>।' },
    },
    {
      id: "otr",
      title: "ssc.gov.in पर वन टाइम रजिस्ट्रेशन (OTR) कैसे करें",
      intro: "OTR एक बार बनता है और नई वेबसाइट पर आगे की सभी परीक्षाओं में काम आता है। पहले से ये तैयार रखें: मोबाइल नंबर और ईमेल (दोनों OTP से सत्यापित होंगे), आधार नंबर (न हो तो वोटर ID, PAN, पासपोर्ट, ड्राइविंग लाइसेंस, स्कूल/कॉलेज या नियोक्ता का पहचान पत्र), 10वीं का बोर्ड, रोल नंबर और पास होने का साल, और दिव्यांग हों तो दिव्यांगता प्रमाण पत्र नंबर।",
      steps: [
        '<a href="https://ssc.gov.in/" target="_blank" rel="noopener nofollow">ssc.gov.in</a> पर <strong>"Login or Register"</strong> पर क्लिक करें और Register चुनें।',
        "<strong>Basic Details भरें:</strong> आधार, नाम, लिंग, जन्मतिथि, पिता और माता का नाम बिल्कुल <strong>10वीं के प्रमाण पत्र के अनुसार</strong>। कुछ खाने दो बार भरने होते हैं; मेल न खाए तो लाल रंग में दिखेगा।",
        "मोबाइल और ईमेल की पुष्टि करें। <strong>Registration Number और पासवर्ड</strong> मोबाइल व ईमेल पर आता है।",
        "Registration Number से लॉगिन करें और <strong>पासवर्ड बदलें</strong>, फिर नए पासवर्ड से दोबारा लॉगिन करें।",
        "<strong>Additional Details:</strong> कैटेगरी, राष्ट्रीयता, पहचान चिह्न, दिव्यांगता (अगर है), स्थायी और मौजूदा पता भरें।",
        "ड्राफ्ट प्रीव्यू जांचें, <strong>Final Submit</strong> करें, आए OTP में से एक डालें और Declaration पर \"I Agree\" दबाएं।",
      ],
      callout: { kind: "warn", html: "बेसिक डिटेल सेव करने के बाद <strong>14 दिन में रजिस्ट्रेशन पूरा न किया तो डेटा डिलीट</strong> हो जाता है। OTR जमा होने के बाद उसमें बदलाव नहीं होता, इसलिए नाम और जन्मतिथि ध्यान से भरें। SSC आधार से सत्यापन (Aadhaar authentication) की सलाह देता है; इससे फोटो/हस्ताक्षर के आधार पर फॉर्म रिजेक्ट नहीं होता।" },
    },
    {
      id: "avedan",
      title: "किसी परीक्षा का फॉर्म कैसे भरें",
      steps: [
        "ssc.gov.in पर परीक्षा का <strong>नोटिस (Notice of Examination) PDF</strong> पढ़ें: पद, उम्र, योग्यता, तारीखें।",
        "OTR नंबर और पासवर्ड से लॉगिन करें; <strong>\"Latest Notifications\"</strong> टैब में उस परीक्षा के सेक्शन में <strong>\"Apply\"</strong> लिंक दबाएं।",
        "पोस्ट/परीक्षा केंद्र की पसंद, योग्यता और दूसरी जानकारी भरें। फोटो आवेदन के समय <strong>कैमरे से लाइव</strong> खींची जाती है; पहले से फोटो की ज़रूरत नहीं। हस्ताक्षर का स्कैन <strong>JPEG/JPG, 10 से 20 KB</strong> में अपलोड करें (CGL 2026 नोटिस)।",
        "फॉर्म सबमिट करें और फीस छूट न हो तो <strong>BHIM UPI, नेट बैंकिंग या Visa, Mastercard, Maestro, RuPay डेबिट कार्ड</strong> से ₹100 भरें।",
        "लॉगिन में <strong>Payment Status</strong> जांचें और फॉर्म का प्रिंट रखें। फीस न पहुंची हो तो फॉर्म \"Incomplete\" रहता है और रिजेक्ट हो जाता है।",
      ],
      callout: { kind: "info", html: "<strong>सुधार विंडो:</strong> नोटिस में दी तारीखों पर फॉर्म सुधार सकते हैं। पहली बार सुधार पर <strong>₹200</strong> और दूसरी बार <strong>₹500</strong> शुल्क लगता है (सभी श्रेणियों पर)। फीस और सुधार शुल्क वापस नहीं होते।" },
    },
    {
      id: "umr-chhoot",
      title: "उम्र में छूट (ऊपरी आयु सीमा में)",
      intro: "CGL 2026 नोटिस के अनुसार कैटेगरी कोड और छूट। दूसरी परीक्षाओं में भी इसी तरह के कोड होते हैं, पर अंतिम नियम उसी परीक्षा का नोटिस है।",
      table: {
        head: ["कोड", "कैटेगरी", "छूट"],
        rows: [
          ["01", "SC/ST", "5 साल"],
          ["02", "OBC", "3 साल"],
          ["03", "PwBD (सामान्य/EWS)", "10 साल"],
          ["04", "PwBD (OBC)", "13 साल"],
          ["05", "PwBD (SC/ST)", "15 साल"],
          ["06", "पूर्व सैनिक (ESM)", "उम्र से सैन्य सेवा घटाने के बाद 3 साल"],
          ["08 / 09", "युद्ध/अशांत क्षेत्र में विकलांग होकर रिलीज़ रक्षा कर्मी (सामान्य / SC-ST)", "3 साल / 8 साल"],
          ["10 / 11", "3 साल नियमित सेवा वाले केंद्र सरकार के सिविल कर्मचारी (सामान्य / SC-ST), ग्रुप C पद", "40 / 45 साल की उम्र तक"],
          ["12 / 13", "विधवा, तलाकशुदा या न्यायिक रूप से अलग महिला जिसने दोबारा शादी न की हो (सामान्य / SC-ST), ग्रुप C पद", "35 / 40 साल की उम्र तक"],
        ],
      },
      callout: { kind: "warn", html: "उम्र 10वीं के प्रमाण पत्र में लिखी जन्मतिथि से ही मानी जाती है; बाद में बदलाव का अनुरोध नहीं माना जाता। उम्र में छूट लेने वालों को सक्षम अधिकारी का प्रमाण पत्र दस्तावेज़ सत्यापन में दिखाना होता है।" },
    },
    {
      id: "baad-mein",
      title: "आवेदन के बाद: एडमिट कार्ड, आंसर की, रिज़ल्ट",
      list: [
        "<strong>परीक्षा शहर और एडमिशन सर्टिफिकेट:</strong> परीक्षा से पहले ssc.gov.in पर लॉगिन करके डाउनलोड होते हैं; नोटिस बोर्ड पर इसकी सूचना आती है।",
        "<strong>आंसर की:</strong> परीक्षा के बाद टेंटेटिव आंसर की और रिस्पॉन्स शीट आती है, जिस पर तय समय में आपत्ति (challenge) दर्ज की जा सकती है।",
        "<strong>रिज़ल्ट, कट-ऑफ और वैकेंसी:</strong> ssc.gov.in के Result सेक्शन और \"For Candidates → Tentative Vacancy\" में।",
        "<strong>परीक्षा कैलेंडर:</strong> ssc.gov.in पर \"For Candidates → Examination Calendar\"।",
      ],
    },
    {
      id: "samasya",
      title: "आम समस्याएं और हल",
      list: [
        "<strong>पुराना ssc.nic.in रजिस्ट्रेशन नहीं चल रहा:</strong> यह अपेक्षित है; ssc.gov.in पर नया OTR बनाएं।",
        "<strong>फीस कटी पर स्टेटस Incomplete:</strong> लॉगिन में Payment Status देखें; फीस भरने की आखिरी तारीख से पहले ही जांच लें।",
        "<strong>फॉर्म भरने में दिक्कत:</strong> SSC मुख्यालय हेल्पडेस्क <a href=\"tel:18003093063\">1800 309 3063</a> (टोल-फ्री)।",
        "<strong>फर्जी नोटिस/वेबसाइट से बचें:</strong> SSC के नोटिस सिर्फ ssc.gov.in पर मान्य हैं।",
      ],
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग: OTR, आवेदन, नोटिस, रिज़ल्ट" },
    { href: "https://ssc.gov.in/for-candidates/examination-calendar", title: "SSC परीक्षा कैलेंडर" },
    { href: "https://ssc.gov.in/for-candidates/syllabus", title: "SSC सिलेबस और परीक्षा योजना" },
    { href: "tel:18003093063", title: "SSC हेल्पडेस्क (मुख्यालय)", note: "1800 309 3063 (टोल-फ्री)" },
  ],
  faq: [
    { q: "SSC का फॉर्म कहां भरें?", a: "सिर्फ ssc.gov.in या mySSC मोबाइल ऐप से। पहले वन टाइम रजिस्ट्रेशन (OTR) करें, फिर लॉगिन करके परीक्षा के आगे Apply चुनें।" },
    { q: "क्या ssc.nic.in वाला पुराना रजिस्ट्रेशन चलेगा?", a: "नहीं। SSC के नोटिस के अनुसार पुरानी वेबसाइट का OTR नई वेबसाइट पर काम नहीं करता। ssc.gov.in पर एक बार नया OTR बनाएं; वह आगे की सभी परीक्षाओं में मान्य रहेगा।" },
    { q: "SSC की फीस कितनी है और किसे छूट है?", a: "ज़्यादातर परीक्षाओं में ₹100। महिलाएं, SC, ST, बेंचमार्क दिव्यांग (PwBD) और आरक्षण के पात्र पूर्व सैनिक फीस से मुक्त हैं (कांस्टेबल GD जैसी परीक्षाओं में छूट की श्रेणियां नोटिस में देखें)।" },
    { q: "OBC को SSC में उम्र में कितनी छूट है?", a: "OBC को ऊपरी आयु सीमा में 3 साल, SC/ST को 5 साल, PwBD को 10 साल (OBC PwBD 13, SC/ST PwBD 15 साल) की छूट है।" },
    { q: "SSC CHSL 2026 की आखिरी तारीख क्या है?", a: "ssc.gov.in के अनुसार आवेदन की आखिरी तारीख 7 अक्टूबर 2026 और ऑनलाइन फीस की 8 अक्टूबर 2026 है। सुधार विंडो 14 से 16 अक्टूबर 2026 है।" },
    { q: "OTR में गलती हो गई तो?", a: "OTR जमा होने के बाद उसमें खुद बदलाव नहीं होता, इसलिए भरते समय नाम और जन्मतिथि 10वीं के प्रमाण पत्र से मिलाएं। परीक्षा फॉर्म की गलती सुधार विंडो में ₹200 (पहली बार) / ₹500 (दूसरी बार) देकर ठीक होती है।" },
    { q: "क्या फोटो पहले से स्कैन करनी होगी?", a: "नहीं। आवेदन के समय सिस्टम कैमरे से आपकी लाइव फोटो लेता है। हस्ताक्षर की स्कैन कॉपी JPEG/JPG में 10 से 20 KB की अपलोड करनी होती है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "💼", title: "सरकारी नौकरी 2026", text: "सभी ताज़ा भर्तियां" },
    { href: "/jobs/ssc-cgl-recruitment-2026.html", emoji: "🎓", title: "SSC CGL 2026", text: "ग्रेजुएट लेवल भर्ती" },
    { href: "/jobs/ssc-mts-havaldar-recruitment-2026.html", emoji: "📋", title: "SSC MTS व हवलदार", text: "10वीं पास के लिए" },
    { href: "/exam-age-calculator.html", emoji: "🎂", title: "परीक्षा आयु कैलकुलेटर", text: "कट-ऑफ तारीख पर उम्र" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "अपलोड के लिए सही साइज़" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "टाइपिंग टेस्ट", text: "CHSL/स्टेनो स्किल टेस्ट की तैयारी" },
  ],
  aside: [
    { href: "https://ssc.gov.in/", label: "📝 ssc.gov.in खोलें" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरी" },
  ],
};
