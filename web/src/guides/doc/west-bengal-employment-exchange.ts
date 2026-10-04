import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026; employmentbankwb.gov.in itself is not reachable
// from our checker, so its process is taken from district pages that link it):
// - ranaghat.gov.in/employment-exchange.html (SDO Ranaghat, Nadia): enrol on
//   employmentbankwb.gov.in, then validate at any Employment Exchange of WB and
//   get the password; renewal every 3 years with ration and voter card.
// - purulia.gov.in/employment-exchange/ (District Employment Exchange, Purulia):
//   age 18+, no upper age limit, register where you normally reside, renewal
//   every 3 years in the due month or the next two months, 1:20 submission.
// - ddinajpur.nic.in/district-employment-exchange/ (Directorate of Employment
//   schemes: Employment Bank services, Yuvasree eligibility, e-enablement at
//   elearning.wblabour.gov.in, 10 day free coaching).
// - howrah.gov.in/scheme/yuvashree/ and /service/employment-bank/ (Rs 1,500 pm,
//   "New Enrollment Job Seeker" steps, list of exchanges PDF).
// - alipurduar.gov.in/employment-exchange/ (services list).
// - ncs.gov.in (toll-free helpline 1514).
export const westBengalEmploymentExchange: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "West Bengal Employment Exchange 2026 | SarkariSewa India",
  description: "पश्चिम बंगाल रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: Employment Bank WB पर ऑनलाइन एनरोलमेंट, रोज़गार कार्यालय में वैलिडेशन, 18+ उम्र, 3 साल में नवीनीकरण और युवाश्री (₹1,500/माह) की पात्रता।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "पश्चिम बंगाल रोज़गार कार्यालय पंजीकरण 2026: Employment Bank एनरोलमेंट, वैलिडेशन और नवीनीकरण",
  lead: "पश्चिम बंगाल में रोज़गार कार्यालय का पंजीकरण श्रम विभाग के Employment Bank पोर्टल (employmentbankwb.gov.in) से होता है। पहले ऑनलाइन एनरोलमेंट करें, फिर राज्य के किसी भी Employment Exchange में जाकर उसे validate करवाएं; उसके बाद पोर्टल का पासवर्ड मिलता है। 18 साल से ऊपर कोई भी नौकरी चाहने वाला पंजीकरण करा सकता है और इसे हर 3 साल में नवीनीकरण करवाना होता है।",
  facts: [
    ["पोर्टल", '<a href="https://employmentbankwb.gov.in/" target="_blank" rel="noopener nofollow">employmentbankwb.gov.in</a>'],
    ["उम्र", "कम से कम 18 साल, ऊपरी सीमा नहीं"],
    ["नवीनीकरण", "हर 3 साल में"],
    ["युवाश्री", "₹1,500 प्रति माह (शर्तों के साथ)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सिर्फ ऑनलाइन फॉर्म भरने से पंजीकरण पूरा नहीं होता। एनरोलमेंट के बाद Employment Exchange में जाकर <strong>validation</strong> करवाना ज़रूरी है, तभी पासवर्ड मिलता है और आप पोर्टल पर लॉगिन कर पाते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "Employment Bank और रोज़गार कार्यालय क्या करते हैं",
      intro: "Employment Bank पश्चिम बंगाल के श्रम विभाग और सूचना प्रौद्योगिकी विभाग की संयुक्त पहल है। यह राज्य का नौकरी चाहने वालों का डेटाबेस है, और ज़िलों के Employment Exchange इसी से पंजीकरण, नवीनीकरण और योजनाओं का काम करते हैं।",
      list: [
        "<strong>नौकरी देने वालों को नाम भेजना:</strong> वैकेंसी आने पर योग्य उम्मीदवारों के नाम वरिष्ठता (seniority) के क्रम में भेजे जाते हैं, आम तौर पर एक पद के लिए 20 नाम (1:20)।",
        "<strong>Job Search और Job Match:</strong> लॉगिन करके नौकरियां खोज सकते हैं और अपनी प्रोफाइल देख/अपडेट कर सकते हैं।",
        "<strong>मुफ्त कोचिंग:</strong> सरकारी परीक्षाओं के लिए 10 दिन के स्पेशल कोचिंग कैंप, ऑनलाइन मॉक टेस्ट, करियर काउंसलिंग और \"English Bolo\" ऐप (e-enablement पोर्टल पर)।",
        "<strong>युवाश्री और स्वरोज़गार योजनाएं:</strong> पंजीकृत बेरोज़गारों के लिए भत्ता और स्वरोज़गार लोन योजना (USKP)।",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है; पंजीकरण से आपका नाम वैकेंसी के लिए भेजा जा सकता है और योजनाओं का रास्ता खुलता है।" },
    },
    {
      id: "patrata",
      title: "कौन पंजीकरण करा सकता है",
      list: [
        "<strong>उम्र 18 साल से ज़्यादा</strong> हो; पंजीकरण के लिए कोई अधिकतम उम्र नहीं है।",
        "आम तौर पर उसी Employment Exchange में पंजीकरण होता है <strong>जिसके इलाके में आप रहते हैं</strong> (विशेष छूट को छोड़कर)।",
        "पढ़ाई पूरी कर चुके, पढ़ रहे या नौकरी बदलना चाहने वाले, सभी नौकरी चाहने वाले पंजीकरण करा सकते हैं; पर <strong>युवाश्री भत्ता</strong> सिर्फ बेरोज़गार को मिलता है।",
      ],
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "ऑनलाइन फॉर्म में जानकारी भरनी होती है और वैलिडेशन के समय कागज़ों की जांच होती है। ये चीज़ें साथ रखें:",
      list: [
        "<strong>चालू मोबाइल नंबर</strong> (पासवर्ड और सूचनाएं SMS से आती हैं) और ईमेल ID",
        "<strong>पढ़ाई के सभी सर्टिफिकेट और मार्कशीट</strong> (मूल और स्व-प्रमाणित फोटोकॉपी)",
        "<strong>उम्र का प्रमाण</strong>, जैसे माध्यमिक (10वीं) का एडमिट/सर्टिफिकेट",
        "<strong>वोटर कार्ड और राशन कार्ड</strong>: नवीनीकरण के समय भी इन्हीं की मदद ली जाती है",
        "SC/ST/OBC हैं तो <strong>जाति प्रमाण पत्र</strong>; दिव्यांग हैं तो दिव्यांगता प्रमाण पत्र",
        "<strong>पासपोर्ट साइज़ फोटो और हस्ताक्षर</strong> की स्कैन कॉपी (फॉर्म में अपलोड के लिए)",
      ],
    },
    {
      id: "online",
      title: "ऑनलाइन एनरोलमेंट कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://employmentbankwb.gov.in/" target="_blank" rel="noopener nofollow">employmentbankwb.gov.in</a> खोलें और Job Seeker के लिए <strong>"New Enrollment"</strong> चुनें।',
        "नियम और शर्तें पढ़कर <strong>\"Accept and Continue\"</strong> पर क्लिक करें।",
        "फॉर्म में नाम, पता, पढ़ाई, कौशल और बाकी जानकारी भरें; फोटो और हस्ताक्षर अपलोड करें, फिर <strong>\"Save\"</strong> दबाएं।",
        "स्क्रीन पर <strong>एनरोलमेंट/रजिस्ट्रेशन नंबर</strong> आता है। इसकी पावती (acknowledgement) डाउनलोड या प्रिंट कर लें।",
        "पावती और <strong>सभी मूल कागज़</strong> लेकर अपने नज़दीकी Employment Exchange जाएं और <strong>validation</strong> करवाएं।",
        "वैलिडेशन के बाद पोर्टल का <strong>पासवर्ड</strong> मिलता है। अब लॉगिन करके प्रोफाइल देखें, अपडेट करें और नौकरियां खोजें।",
      ],
      callout: { kind: "warn", html: "<strong>फीस:</strong> सरकारी ज़िला पेजों पर पंजीकरण की किसी फीस का ज़िक्र नहीं है। कोई एजेंट \"पक्का नंबर\" या \"जल्दी नौकरी\" के नाम पर पैसे मांगे तो सीधे Employment Exchange से पूछें।" },
    },
    {
      id: "offline",
      title: "रोज़गार कार्यालय (Employment Exchange) जाकर पंजीकरण",
      intro: "अगर ऑनलाइन फॉर्म भरने में दिक्कत हो तो अपने ज़िले के District Employment Exchange या Employment Information & Assistance Bureau (EI&AB) में कागज़ लेकर जाएं। वहां पंजीकरण, नवीनीकरण, Employment Bank वैलिडेशन, USKP और कोचिंग, सभी काम होते हैं।",
      list: [
        'पूरे राज्य के एक्सचेंजों की सूची: <a href="https://cdn.s3waas.gov.in/s353e3a7161e428b65688f14b84d61c610/uploads/2021/11/2021112947.pdf" target="_blank" rel="noopener nofollow">Exchange List (PDF, हावड़ा ज़िला वेबसाइट)</a>',
        "अपने ज़िले की सरकारी वेबसाइट (जैसे paschimmedinipur.gov.in, alipurduar.gov.in) पर एक्सचेंज का पता, फोन और ईमेल दिया रहता है।",
      ],
    },
    {
      id: "renewal",
      title: "नवीनीकरण (Renewal): हर 3 साल में",
      intro: "पश्चिम बंगाल में पंजीकरण <strong>3 साल</strong> के लिए रहता है। नवीनीकरण <strong>उसी महीने में जिसमें यह ड्यू है, या उसके बाद के 2 महीनों में</strong> किसी भी कार्य दिवस पर करवाया जा सकता है।",
      list: [
        "समय पर नवीनीकरण न हो तो पंजीकरण लैप्स हो सकता है और वैकेंसी के लिए आपका नाम नहीं जाएगा।",
        "नवीनीकरण के समय वोटर कार्ड और राशन कार्ड साथ रखें, और नई योग्यता या अनुभव भी जुड़वा लें।",
        "पोर्टल पर नवीनीकरण का विकल्प न दिखे तो अपने Employment Exchange से संपर्क करें।",
      ],
    },
    {
      id: "yuvashree",
      title: "युवाश्री (Yuvasree): ₹1,500 प्रति माह",
      intro: "युवाश्री पश्चिम बंगाल श्रम विभाग की योजना है, जिसमें Employment Bank में पंजीकृत बेरोज़गार युवाओं को कौशल बढ़ाने के लिए <strong>₹1,500 प्रति माह</strong> की मदद मिलती है। सरकारी ज़िला पेजों के अनुसार शर्तें:",
      list: [
        "बेरोज़गार हों और <strong>पश्चिम बंगाल के निवासी</strong> हों।",
        "Employment Bank में <strong>Job Seeker के रूप में एनरोल</strong> हों।",
        "कम से कम <strong>8वीं पास</strong> हों।",
        "जिस साल चुने जा रहे हैं उस साल की <strong>1 अप्रैल को उम्र 18 से 45 साल</strong> हो।",
        "किसी राज्य/केंद्र की स्वरोज़गार योजना में आर्थिक मदद या लोन न लिया हो।",
        "<strong>परिवार में एक ही सदस्य</strong> को यह मदद मिलती है।",
      ],
      callout: { kind: "info", html: "योजना में लाभार्थियों की संख्या तय होती है और बाकी के लिए वेटिंग लिस्ट बनती है। लाभार्थी को <strong>हर 6 महीने में स्व-घोषणा (Annexure-III)</strong> देनी होती है कि वह अब भी पात्र है और ट्रेनिंग ले रहा है। ताज़ा स्थिति Employment Bank पोर्टल के Yuvasree सेक्शन में देखें।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["पासवर्ड नहीं मिला", "पहले Employment Exchange में validation करवाएं; पासवर्ड वैलिडेशन के बाद ही आता है"],
          ["एनरोलमेंट नंबर खो गया", "पावती का प्रिंट रखें; न हो तो पहचान के कागज़ के साथ Employment Exchange जाएं"],
          ["वैलिडेशन में कागज़ अधूरे", "पढ़ाई, उम्र और पते के सभी मूल कागज़ और फोटोकॉपी लेकर दोबारा जाएं"],
          ["नाम/जन्मतिथि में गलती", "10वीं के सर्टिफिकेट से मिलाकर सुधार के लिए एक्सचेंज में आवेदन दें"],
          ["नवीनीकरण की तारीख निकल गई", "जल्द से जल्द एक्सचेंज से संपर्क करें; ड्यू महीने के बाद 2 महीने की छूट होती है"],
          ["नई डिग्री जोड़नी है", "लॉगिन करके प्रोफाइल अपडेट करें या एक्सचेंज में योग्यता जुड़वाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> WBPSC, WBSSC, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है; रोज़गार कार्यालय का पंजीकरण उनके लिए अलग से ज़रूरी नहीं होता।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://employmentbankwb.gov.in/", title: "Employment Bank, पश्चिम बंगाल (पंजीकरण पोर्टल)" },
    { href: "https://employmentbankwb.gov.in/yuvasree.php", title: "युवाश्री योजना (Employment Bank)" },
    { href: "http://elearning.wblabour.gov.in/", title: "e-enablement पोर्टल: मॉक टेस्ट, काउंसलिंग, कोचिंग" },
    { href: "https://purulia.gov.in/employment-exchange/", title: "पंजीकरण और नवीनीकरण के नियम (District Employment Exchange, पुरुलिया)" },
    { href: "https://ddinajpur.nic.in/district-employment-exchange/", title: "रोज़गार निदेशालय की योजनाएं (दक्षिण दिनाजपुर)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में रोज़गार कार्यालय में ऑनलाइन नाम कैसे लिखवाएं?", a: "employmentbankwb.gov.in पर Job Seeker का New Enrollment करें, फॉर्म भरकर Save करें और पावती प्रिंट करें। फिर मूल कागज़ों के साथ किसी भी Employment Exchange में जाकर validation करवाएं; उसके बाद पासवर्ड मिलता है।" },
    { q: "Employment Bank में पासवर्ड कब मिलता है?", a: "ऑनलाइन एनरोलमेंट के बाद Employment Exchange में validation होने पर ही पासवर्ड मिलता है। वैलिडेशन के बिना लॉगिन नहीं हो पाता।" },
    { q: "पंजीकरण के लिए उम्र कितनी होनी चाहिए?", a: "18 साल से ज़्यादा। पंजीकरण के लिए कोई अधिकतम उम्र तय नहीं है। युवाश्री भत्ते के लिए उम्र 18 से 45 साल होनी चाहिए।" },
    { q: "रोज़गार कार्यालय का पंजीकरण कितने समय तक चलता है?", a: "3 साल। नवीनीकरण ड्यू महीने में या उसके बाद के 2 महीनों में करवाया जा सकता है।" },
    { q: "युवाश्री में कितने पैसे मिलते हैं और कौन पात्र है?", a: "₹1,500 प्रति माह। पश्चिम बंगाल का बेरोज़गार निवासी, Employment Bank में एनरोल, कम से कम 8वीं पास और 18-45 साल का हो, परिवार में एक ही सदस्य को मिलता है और लाभार्थियों की संख्या सीमित है।" },
    { q: "क्या पढ़ाई कर रहे छात्र पंजीकरण करा सकते हैं?", a: "हाँ, 18 साल से ऊपर के छात्र भी पंजीकरण करा सकते हैं। पर युवाश्री जैसा भत्ता केवल बेरोज़गार और पात्र युवाओं को मिलता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/west-bengal-caste-certificate.html", emoji: "📜", title: "पश्चिम बंगाल जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/west-bengal-domicile-certificate.html", emoji: "🏠", title: "पश्चिम बंगाल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://employmentbankwb.gov.in/", label: "📝 Employment Bank पर एनरोल करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
