import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - dectmeg.nic.in/employment_services/my_registration (Directorate of
//   Employment and Craftsmen Training, Meghalaya): guidelines for registration:
//   age 14+, permanent residents, online registration, temporary registration
//   number, verification by local exchange, X-10 card, 3 year validity, renewal
//   from 2 months before to 3 months after expiry, documents list.
// - meghalaya.gov.in/services/content/20454 (state portal service page):
//   30 days to visit the local exchange with original documents after online
//   registration.
// - ncs.gov.in (toll-free helpline 1514).
// No state unemployment allowance was found, so none is described.
export const meghalayaEmploymentExchange: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Meghalaya Employment Exchange 2026: Apply & Status",
  description: "मेघालय रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: dectmeg.nic.in पर ऑनलाइन रजिस्ट्रेशन, 14+ उम्र, ज़रूरी कागज़, X-10 कार्ड और 3 साल में नवीनीकरण।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मेघालय रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन, कागज़ और नवीनीकरण",
  lead: "मेघालय में रोज़गार कार्यालय का पंजीकरण रोज़गार एवं शिल्पकार प्रशिक्षण निदेशालय (DECT) के पोर्टल dectmeg.nic.in से ऑनलाइन हो सकता है, या अपने इलाके के Employment Exchange में जाकर। 14 साल पूरे कर चुके मेघालय के स्थायी निवासी पंजीकरण करा सकते हैं। पंजीकरण 3 साल चलता है।",
  facts: [
    ["पोर्टल", '<a href="https://dectmeg.nic.in/" target="_blank" rel="noopener nofollow">dectmeg.nic.in</a>'],
    ["उम्र", "कम से कम 14 साल, मेघालय के स्थायी निवासी"],
    ["वैधता", "3 साल (नवीनीकरण ऑनलाइन या एक्सचेंज में)"],
    ["कार्ड", "Employment Exchange Registration Card X-10"],
  ],
  notice: "<strong>ध्यान दें:</strong> ऑनलाइन भरने पर सिर्फ <strong>अस्थायी (Temporary) रजिस्ट्रेशन नंबर</strong> मिलता है। स्थानीय Employment Exchange कागज़ों की जांच करके मंज़ूरी दे, तभी पंजीकरण पूरा होता है और कार्ड मिलता है।",
  sections: [
    {
      id: "kya-hai",
      title: "Employment Exchange क्या करता है",
      intro: "मेघालय सरकार के सेवा पेज के अनुसार पोर्टल से ये काम होते हैं:",
      list: [
        "नौकरी चाहने वालों का <strong>ऑनलाइन पंजीकरण</strong>",
        "पंजीकरण की <strong>ऑनलाइन जानकारी अपडेट/बदलाव</strong>",
        "नियोक्ताओं से वैकेंसी की सूचना लेना और उपयुक्त उम्मीदवारों के नाम भेजना",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।" },
    },
    {
      id: "patrata",
      title: "कौन पंजीकरण करा सकता है",
      list: [
        "भारत का नागरिक, जिसकी उम्र <strong>14 साल</strong> हो चुकी हो।",
        "DECT की गाइडलाइन के अनुसार <strong>मेघालय का स्थायी निवासी</strong>। गैर-स्थानीय स्थायी निवासियों और अस्थायी निवासियों के लिए अलग कागज़ लगते हैं (नीचे देखें)।",
        "आम तौर पर उसी Employment Exchange में, जिसके इलाके में आप सामान्यतः रहते हैं।",
      ],
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "DECT की गाइडलाइन के अनुसार पंजीकरण के लिए ये कागज़ अपलोड करने होते हैं:",
      list: [
        "<strong>जन्मतिथि का प्रमाण:</strong> स्कूल/मैट्रिक प्रमाण पत्र या जन्म प्रमाण पत्र",
        "<strong>पढ़ाई के प्रमाण पत्र</strong>",
        "SC/ST/OBC हैं तो <strong>जाति/जनजाति प्रमाण पत्र</strong>",
        "पूर्व सैनिक हैं तो सक्षम प्राधिकारी का प्रमाण पत्र",
        "दिव्यांग हैं तो सक्षम प्राधिकारी का <strong>दिव्यांगता प्रमाण पत्र</strong>",
        "<strong>गैर-स्थानीय स्थायी निवासी:</strong> सक्षम प्राधिकारी का Permanent Resident Certificate (PRC), EPIC (18 से ऊपर के लिए) और स्थानीय मुखिया (Headman) का प्रमाण पत्र",
        "<strong>अस्थायी निवासी:</strong> स्थानीय मुखिया का निवास प्रमाण पत्र और आश्रित प्रमाण पत्र (नाबालिग के लिए) या अपने मूल राज्य का आधार/EPIC (18 से ऊपर के लिए)",
      ],
    },
    {
      id: "online",
      title: "ऑनलाइन पंजीकरण कैसे करें",
      steps: [
        '<a href="https://dectmeg.nic.in/employment_services/my_registration" target="_blank" rel="noopener nofollow">dectmeg.nic.in</a> पर Employment Services के \"My Registration\" में दी गाइडलाइन पढ़ें और \"Click here to Register Online\" से आगे बढ़ें।',
        "मांगी गई जानकारी भरें और ऊपर बताए कागज़ अपलोड करें।",
        "जमा करने पर सिस्टम <strong>अस्थायी रजिस्ट्रेशन नंबर</strong> देता है। इसे लिखकर रख लें।",
        "मेघालय सरकार के सेवा पेज के अनुसार इसके बाद <strong>30 दिन के अंदर</strong> मूल कागज़ लेकर स्थानीय Employment Exchange जाना होता है।",
        "एक्सचेंज कागज़ जांचकर मंज़ूरी देता है, फिर आप <strong>Registration Card X-10</strong> ले सकते हैं।",
      ],
      callout: { kind: "warn", html: "सरकारी पेजों पर पंजीकरण की किसी फीस का ज़िक्र नहीं मिला। कोई \"पक्की नौकरी\" के नाम पर पैसे मांगे तो सीधे Employment Exchange से पूछें।" },
    },
    {
      id: "offline",
      title: "Employment Exchange जाकर पंजीकरण",
      intro: "ऑनलाइन में दिक्कत हो तो अपने इलाके के स्थानीय Employment Exchange में कागज़ लेकर जाएं। संपर्क के लिए DECT, शिलांग: 0364-2223592।",
    },
    {
      id: "renewal",
      title: "नवीनीकरण (Renewal): 3 साल में",
      intro: "पंजीकरण <strong>3 साल</strong> के लिए वैध है। DECT की गाइडलाइन के अनुसार नवीनीकरण की तारीख से <strong>2 महीने पहले से लेकर समाप्ति के 3 महीने बाद तक</strong> ऑनलाइन या स्थानीय एक्सचेंज में जाकर करवाया जा सकता है।",
      callout: { kind: "info", html: "समय निकल जाए तो जल्द से जल्द अपने Employment Exchange से संपर्क करें; वैकेंसी के लिए नाम तभी भेजा जा सकता है जब पंजीकरण चालू हो।" },
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "DECT और राज्य पोर्टल के पेजों पर मेघालय में किसी बेरोज़गारी भत्ता योजना का ज़िक्र हमें नहीं मिला, इसलिए हम कोई राशि नहीं लिख रहे। रोज़गार से जुड़ी योजनाओं की ताज़ा जानकारी DECT से पूछें।",
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://dectmeg.nic.in/employment_services/my_registration", title: "Meghalaya Employment Exchange: पंजीकरण गाइडलाइन (DECT)" },
    { href: "https://meghalaya.gov.in/services/content/20454", title: "ऑनलाइन पंजीकरण सेवा पेज (मेघालय सरकार पोर्टल)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "मेघालय में रोज़गार कार्यालय में ऑनलाइन रजिस्ट्रेशन कैसे करें?", a: "dectmeg.nic.in पर ऑनलाइन फॉर्म भरें और कागज़ अपलोड करें। अस्थायी रजिस्ट्रेशन नंबर मिलेगा। फिर स्थानीय Employment Exchange कागज़ जांचकर मंज़ूरी देता है और X-10 कार्ड मिलता है।" },
    { q: "पंजीकरण के लिए उम्र कितनी चाहिए?", a: "कम से कम 14 साल, और DECT की गाइडलाइन के अनुसार मेघालय का स्थायी निवासी होना चाहिए।" },
    { q: "पंजीकरण कितने समय चलता है और नवीनीकरण कब करें?", a: "3 साल। नवीनीकरण की तारीख से 2 महीने पहले से लेकर 3 महीने बाद तक ऑनलाइन या एक्सचेंज में करवा सकते हैं।" },
    { q: "ऑनलाइन भरने के बाद एक्सचेंज जाना ज़रूरी है?", a: "हां। स्थानीय एक्सचेंज कागज़ों की जांच करके मंज़ूरी देता है। राज्य पोर्टल के सेवा पेज के अनुसार इसके लिए 30 दिन का समय मिलता है।" },
    { q: "क्या मेघालय में बेरोज़गारी भत्ता मिलता है?", a: "हमें विभाग के पेजों पर ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है। DECT, शिलांग से पूछ लें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/meghalaya-caste-certificate.html", emoji: "📜", title: "मेघालय जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/meghalaya-domicile-certificate.html", emoji: "🏠", title: "मेघालय निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://dectmeg.nic.in/employment_services/my_registration", label: "📝 DECT मेघालय पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
