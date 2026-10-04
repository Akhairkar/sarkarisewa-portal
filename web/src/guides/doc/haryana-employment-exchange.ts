import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026; hrex.gov.in and hreyahs.gov.in are not reachable
// from our checker, so facts come from Haryana district websites that link them):
// - panchkula.nic.in, hisar.gov.in, rohtak.gov.in, faridabad.nic.in
//   /service/(register-at-)employment-exchange-registration/: Department of
//   Employment Haryana, CNV Act 1959, 56 exchanges (1 state, 4 divisional,
//   17 district, 31 sub-divisional, 3 university bureaux; SC and PH cells),
//   free services, registration where you usually reside, hrex.gov.in,
//   district office addresses and phone numbers.
// - mahendragarh.gov.in/service/employment-exchange-registration/: Saksham
//   Yuva registration on hreyahs.gov.in for graduates/post-graduates with a
//   degree from a university in Haryana, Chandigarh or Delhi.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on an official page we could open): registration
// validity/renewal period in Haryana, exact hrex menu names, Saksham Yuva
// amounts (district page figures may be outdated), a state helpline number.
export const haryanaEmploymentExchange: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Haryana Employment Exchange 2026: Apply & Status | SarkariSewa",
  description: "हरियाणा रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: रोज़गार विभाग के hrex.gov.in पोर्टल पर ऑनलाइन रजिस्ट्रेशन, ज़रूरी जानकारी, मुफ्त सेवा, ज़िला रोज़गार कार्यालय और सक्षम युवा योजना की शर्तें।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "हरियाणा रोज़गार कार्यालय पंजीकरण 2026: hrex.gov.in पर रजिस्ट्रेशन, प्रोफाइल और सक्षम युवा",
  lead: "हरियाणा में रोज़गार कार्यालय (Employment Exchange) का पंजीकरण रोज़गार विभाग, हरियाणा के पोर्टल hrex.gov.in पर होता है। कोई भी नौकरी चाहने वाला उसी रोज़गार कार्यालय में नाम दर्ज करा सकता है जिसके इलाके में वह आम तौर पर रहता है। विभाग के अनुसार रोज़गार कार्यालयों की सेवाएं नौकरी चाहने वालों और नौकरी देने वालों, दोनों के लिए मुफ्त हैं।",
  facts: [
    ["पोर्टल", '<a href="https://hrex.gov.in/" target="_blank" rel="noopener nofollow">hrex.gov.in</a>'],
    ["फीस", "मुफ्त सेवा"],
    ["कार्यालय", "राज्य में 56 रोज़गार कार्यालय"],
    ["सक्षम युवा", '<a href="https://hreyahs.gov.in/" target="_blank" rel="noopener nofollow">hreyahs.gov.in</a>'],
  ],
  notice: "<strong>ध्यान दें:</strong> रोज़गार कार्यालय में पंजीकरण मुफ्त है। कोई एजेंट \"सरकारी नौकरी पक्की\" कहकर पैसे मांगे तो न दें; ज़रूरत हो तो सीधे अपने ज़िला रोज़गार कार्यालय से बात करें।",
  sections: [
    {
      id: "kya-hai",
      title: "हरियाणा में रोज़गार कार्यालय क्या करते हैं",
      intro: "रोज़गार विभाग, हरियाणा केंद्र के <strong>Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959</strong> और उसके नियम लागू करता है। इस कानून के दायरे में आने वाले नियोक्ताओं को अपनी खाली जगहें रोज़गार कार्यालय को बतानी होती हैं। रोज़गार कार्यालय मुख्य रूप से तीन काम करते हैं:",
      list: [
        "<strong>पंजीकरण और प्लेसमेंट:</strong> नौकरी चाहने वालों का नाम दर्ज करना और वैकेंसी के लिए योग्य उम्मीदवारों के नाम भेजना।",
        "<strong>व्यावसायिक मार्गदर्शन (Vocational Guidance):</strong> करियर चुनने और नौकरी की तैयारी में सलाह।",
        "<strong>रोज़गार बाज़ार की जानकारी:</strong> संगठित क्षेत्र के संस्थानों से रोज़गार का डेटा जुटाना।",
      ],
    },
    {
      id: "karyalay",
      title: "हरियाणा में कितने रोज़गार कार्यालय हैं",
      table: {
        head: ["कार्यालय", "संख्या"],
        rows: [
          ["राज्य रोज़गार कार्यालय (पंचकूला)", "1"],
          ["मंडल (Divisional) रोज़गार कार्यालय", "4"],
          ["ज़िला रोज़गार कार्यालय", "17"],
          ["उप-मंडल (Sub-Divisional) रोज़गार कार्यालय", "31"],
          ["यूनिवर्सिटी रोज़गार सूचना एवं मार्गदर्शन ब्यूरो", "3"],
          ["<strong>कुल</strong>", "<strong>56</strong>"],
        ],
      },
      callout: { kind: "info", html: "राज्य रोज़गार कार्यालय पंचकूला में <strong>अनुसूचित जाति (SC) सेल</strong> और <strong>दिव्यांग (PH) सेल</strong> भी काम करते हैं। आपका पंजीकरण उसी कार्यालय में होता है जिसके क्षेत्र में आप आम तौर पर रहते हैं।" },
    },
    {
      id: "kya-chahiye",
      title: "रजिस्ट्रेशन से पहले क्या तैयार रखें",
      intro: "ऑनलाइन फॉर्म में ज़्यादातर जानकारी भरनी होती है; रोज़गार कार्यालय बुलाए तो मूल कागज़ दिखाने होते हैं। ये चीज़ें पहले से सामने रखें:",
      list: [
        "<strong>चालू मोबाइल नंबर और ईमेल ID</strong> (लॉगिन और सूचनाओं के लिए)",
        "नाम, माता-पिता का नाम और <strong>जन्मतिथि</strong>, 10वीं के सर्टिफिकेट के अनुसार",
        "<strong>पढ़ाई का पूरा विवरण:</strong> बोर्ड/यूनिवर्सिटी, पास होने का साल और अंक; ITI/डिप्लोमा/डिग्री के सर्टिफिकेट",
        "हरियाणा का पता; ज़रूरत हो तो <strong>हरियाणा निवास प्रमाण पत्र</strong> (सक्षम युवा जैसी योजनाओं में मांगा जाता है)",
        "SC/BC/EWS हैं तो <strong>श्रेणी का प्रमाण पत्र</strong>; दिव्यांग हैं तो दिव्यांगता प्रमाण पत्र; पूर्व सैनिक हैं तो डिस्चार्ज के कागज़",
        "कौशल, अनुभव और पसंद की नौकरी/इलाके की जानकारी",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        '<a href="https://hrex.gov.in/" target="_blank" rel="noopener nofollow">hrex.gov.in</a> खोलें (रोज़गार विभाग, हरियाणा की आधिकारिक वेबसाइट; किसी दूसरी मिलती-जुलती साइट पर जानकारी न भरें)।',
        "<strong>Jobseeker</strong> के रूप में नया रजिस्ट्रेशन चुनें और पोर्टल जो पहचान/संपर्क जानकारी मांगे वह भरकर अकाउंट बनाएं।",
        "बुनियादी जानकारी, पता, श्रेणी, पढ़ाई, कौशल और अनुभव भरें। हर एंट्री सेव होने के बाद ही आगे बढ़ें।",
        "सबमिट करने से पहले नाम, जन्मतिथि और योग्यता 10वीं/डिग्री के सर्टिफिकेट से मिलाएं।",
        "रजिस्ट्रेशन पूरा होने पर <strong>रजिस्ट्रेशन नंबर/कार्ड</strong> डाउनलोड करके संभाल लें; आगे प्रोफाइल अपडेट और योजनाओं में यही काम आता है।",
      ],
      callout: { kind: "ok", html: "ऑनलाइन करने में दिक्कत हो तो अपने <strong>ज़िला या उप-मंडल रोज़गार कार्यालय</strong> में जाएं। ज़िलों के पते और फोन नंबर ज़िले की सरकारी वेबसाइट के Services सेक्शन में \"Employment Exchange Registration\" पेज पर दिए हैं।" },
    },
    {
      id: "offline",
      title: "ज़िला रोज़गार कार्यालय: कुछ पते",
      table: {
        head: ["ज़िला", "पता", "फोन / ईमेल"],
        rows: [
          ["पंचकूला", "नया भवन, मिनी सचिवालय, DC ऑफिस, सेक्टर 1, पंचकूला 134109", "0172-2584055, deopanchkula[at]gmail[dot]com"],
          ["हिसार", "भूतल, लघु सचिवालय, हिसार 125001", "01662-237031, dlehisar[at]yahoo[dot]com"],
          ["महेंद्रगढ़", "तीसरी मंज़िल, मिनी सचिवालय, नारनौल 123001", "ज़िला वेबसाइट देखें"],
        ],
      },
      intro: "बाकी ज़िलों के लिए अपने ज़िले की वेबसाइट (जैसे rohtak.gov.in, faridabad.nic.in) पर \"Employment Exchange Registration\" सेवा पेज देखें।",
    },
    {
      id: "saksham",
      title: "सक्षम युवा योजना (Saksham Yuva) और पंजीकरण",
      intro: "हरियाणा सरकार की <strong>सक्षम युवा योजना</strong> में पात्र शिक्षित बेरोज़गार युवाओं को भत्ता और मानदेय के बदले काम दिया जाता है। इसका रजिस्ट्रेशन अलग पोर्टल <a href=\"https://hreyahs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">hreyahs.gov.in</a> पर होता है।",
      list: [
        "आवेदक का <strong>रोज़गार कार्यालय में पंजीकरण</strong> होना चाहिए; इसलिए पहले hrex.gov.in पर रजिस्ट्रेशन कर लें।",
        "महेंद्रगढ़ ज़िला प्रशासन के पेज के अनुसार <strong>ग्रेजुएट (BA गणित के साथ, B.Sc., B.Tech, B.Com) और पोस्ट-ग्रेजुएट</strong> आवेदन कर सकते हैं, जिनकी डिग्री <strong>हरियाणा, चंडीगढ़ या दिल्ली</strong> की यूनिवर्सिटी से हो।",
        "भत्ते की राशि, काम के घंटे और ताज़ा शर्तें hreyahs.gov.in और ज़िला रोज़गार कार्यालय से ही पक्की करें, क्योंकि ये समय-समय पर बदलती रही हैं।",
      ],
    },
    {
      id: "update",
      title: "प्रोफाइल अपडेट और नवीनीकरण",
      list: [
        "नई डिग्री, कौशल या अनुभव मिलने पर <strong>लॉगिन करके प्रोफाइल अपडेट</strong> करें, ताकि सही वैकेंसी के लिए आपका नाम जाए।",
        "मोबाइल नंबर या पता बदले तो उसे भी अपडेट करें; सूचनाएं इसी पर आती हैं।",
        "पंजीकरण की वैधता और नवीनीकरण की तारीख अपने अकाउंट या ज़िला रोज़गार कार्यालय से पता करें। नाम कट गया हो तो <strong>दोबारा नया रजिस्ट्रेशन न करें</strong>; पहले कार्यालय से पुराना पंजीकरण बहाल करने का तरीका पूछें।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
          ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने नंबर से लॉगिन करें या ज़िला रोज़गार कार्यालय से पूछें"],
          ["नाम/जन्मतिथि गलत भर दी", "10वीं के सर्टिफिकेट के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
          ["सक्षम युवा में आवेदन नहीं हो रहा", "पहले hrex.gov.in पर पंजीकरण पूरा है या नहीं देखें; डिग्री की यूनिवर्सिटी और निवास की शर्त जांचें"],
          ["वेबसाइट नहीं खुल रही", "कुछ देर बाद या दूसरे ब्राउज़र में कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> HSSC, HPSC, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है; रोज़गार कार्यालय का पंजीकरण उनके लिए अलग से ज़रूरी नहीं होता।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://hrex.gov.in/", title: "रोज़गार विभाग, हरियाणा (पंजीकरण पोर्टल)" },
    { href: "https://hreyahs.gov.in/", title: "सक्षम युवा योजना पोर्टल" },
    { href: "https://panchkula.nic.in/service/employment-exchange-registration/", title: "Employment Exchange Registration (ज़िला पंचकूला)" },
    { href: "https://mahendragarh.gov.in/service/employment-exchange-registration/", title: "पंजीकरण और सक्षम योजना (ज़िला महेंद्रगढ़)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "हरियाणा में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "रोज़गार विभाग के पोर्टल hrex.gov.in पर Jobseeker रजिस्ट्रेशन करें, अपनी पढ़ाई, कौशल और अनुभव भरें और रजिस्ट्रेशन नंबर/कार्ड संभाल लें। दिक्कत हो तो अपने ज़िला रोज़गार कार्यालय जाएं।" },
    { q: "क्या हरियाणा रोज़गार कार्यालय में पंजीकरण की फीस है?", a: "नहीं। रोज़गार विभाग के अनुसार रोज़गार कार्यालय नौकरी चाहने वालों और नियोक्ताओं को मुफ्त सेवा देते हैं।" },
    { q: "मुझे किस रोज़गार कार्यालय में पंजीकरण कराना होगा?", a: "उसी कार्यालय में जिसके क्षेत्र में आप आम तौर पर रहते हैं। हरियाणा में 17 ज़िला, 31 उप-मंडल, 4 मंडल रोज़गार कार्यालय और 3 यूनिवर्सिटी ब्यूरो हैं।" },
    { q: "सक्षम युवा योजना के लिए क्या रोज़गार कार्यालय का पंजीकरण ज़रूरी है?", a: "हाँ, आवेदक का रोज़गार कार्यालय में पंजीकरण होना चाहिए। सक्षम युवा का आवेदन अलग पोर्टल hreyahs.gov.in पर होता है और डिग्री हरियाणा, चंडीगढ़ या दिल्ली की यूनिवर्सिटी से होनी चाहिए।" },
    { q: "रोज़गार कार्यालय में पंजीकरण से सरकारी नौकरी मिल जाती है?", a: "नहीं, अपने-आप नहीं। वैकेंसी आने पर योग्य पंजीकृत उम्मीदवारों के नाम भेजे जाते हैं। HSSC, HPSC, SSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
    { q: "हरियाणा रोज़गार कार्यालय का संपर्क नंबर क्या है?", a: "अपने ज़िला रोज़गार कार्यालय से संपर्क करें, जैसे पंचकूला 0172-2584055 और हिसार 01662-237031। बाकी ज़िलों के नंबर ज़िले की सरकारी वेबसाइट पर हैं। NCS की राष्ट्रीय हेल्पलाइन 1514 है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/haryana-domicile-certificate.html", emoji: "🏠", title: "हरियाणा निवास प्रमाण पत्र", text: "15 साल निवास की शर्त, कागज़" },
    { href: "/states/haryana-caste-certificate.html", emoji: "📜", title: "हरियाणा जाति प्रमाण पत्र", text: "SC/BC प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://hrex.gov.in/", label: "📝 hrex.gov.in पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
