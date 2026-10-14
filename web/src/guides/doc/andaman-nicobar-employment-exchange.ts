import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - labour.and.nic.in/webPages/EmploymentExchange.html (Dept of Labour,
//   Employment & Training, A&N Administration): documents for registration,
//   X-IA/X-IB/X-IC index cards, renewal every 3 years, 2 months grace before
//   cancellation, unemployment certificate, EI&AB offices, address change and
//   transfer of registration.
// - anieseva.andamannicobar.gov.in (ANI e-Seva service list): lists "Job Seeker
//   Registration" (online facility provided by the State/UT, fee shown as 0)
//   under the Labour/Employment services; the department page itself describes
//   only the office process, so online steps are not detailed here.
// - ncs.gov.in (toll-free helpline 1514).
// No state unemployment allowance scheme was found, so none is described.
export const andamanNicobarEmploymentExchange: DocGuide = {
  state: { slug: "andaman-nicobar", hi: "अंडमान और निकोबार" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Andaman & Nicobar Islands Employment",
  description: "अंडमान और निकोबार रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: ज़रूरी कागज़, इंडेक्स कार्ड, 3 साल में नवीनीकरण, बेरोज़गारी प्रमाण पत्र और e-Seva व NCS की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "अंडमान और निकोबार रोज़गार कार्यालय पंजीकरण 2026: कागज़, इंडेक्स कार्ड और नवीनीकरण",
  lead: "अंडमान और निकोबार में रोज़गार कार्यालय (Employment Exchange) श्रम, रोज़गार एवं प्रशिक्षण विभाग के तहत चलता है। मूल कागज़ दिखाकर पंजीकरण होता है और सामान्य स्थिति में इंडेक्स कार्ड एक दिन में मिल जाता है। पंजीकरण हर 3 साल में नवीनीकरण करवाना होता है।",
  facts: [
    ["विभाग", "श्रम, रोज़गार एवं प्रशिक्षण विभाग, अंडमान और निकोबार प्रशासन"],
    ["कार्ड", "इंडेक्स कार्ड (X-IA, X-IB, X-IC), पढ़ाई के स्तर के अनुसार"],
    ["नवीनीकरण", "हर 3 साल में"],
    ["बेरोज़गारी भत्ता", "विभाग के पेज पर कोई भत्ता योजना नहीं मिली"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग के पेज पर पंजीकरण के लिए <strong>मूल कागज़</strong> जमा करने की बात लिखी है। इसलिए ऑनलाइन फॉर्म हो या न हो, कार्यालय जाने के लिए सभी मूल कागज़ तैयार रखें।",
  sections: [
    {
      id: "kya-hai",
      title: "रोज़गार कार्यालय क्या करता है",
      intro: "विभाग के पेज के अनुसार Employment Exchange के मुख्य काम ये हैं:",
      list: [
        "<strong>पंजीकरण और नवीनीकरण:</strong> नौकरी चाहने वालों का नाम दर्ज करना और इंडेक्स कार्ड देना।",
        "<strong>योग्य उम्मीदवारों की सूची:</strong> नियोक्ता से वैकेंसी की सूचना आने पर वरिष्ठता (पंजीकरण के क्रम) के आधार पर सूची बनाना।",
        "<strong>व्यावसायिक और करियर मार्गदर्शन:</strong> छात्रों और बेरोज़गार युवाओं के लिए।",
        "<strong>दिव्यांग उम्मीदवारों के लिए विशेष सेल।</strong>",
        "<strong>बेरोज़गारी प्रमाण पत्र:</strong> पंजीकृत उम्मीदवार को, जो लोन लेकर अपना काम शुरू करना चाहता है।",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।" },
    },
    {
      id: "kagaz",
      title: "पंजीकरण के लिए क्या-क्या लाएं",
      intro: "विभाग के पेज पर ये <strong>मूल कागज़</strong> बताए गए हैं:",
      list: [
        "<strong>उम्र का प्रमाण</strong> (प्रमाण पत्र)",
        "<strong>पढ़ाई का प्रमाण:</strong> शैक्षणिक योग्यता का प्रमाण पत्र, मार्कशीट या ट्रांसफर सर्टिफिकेट",
        "<strong>ST / स्थानीय (Local) प्रमाण पत्र</strong>, अगर लागू हो",
        "दिव्यांग हैं तो <strong>मेडिकल बोर्ड का प्रमाण पत्र</strong>, जिसमें दिव्यांगता का प्रतिशत लिखा हो",
        "अनपढ़ उम्मीदवार के लिए उम्र का <strong>शपथ पत्र</strong>, जो कार्यपालक मजिस्ट्रेट से बनवाना होता है",
        "पूर्व सैनिक हैं तो <strong>डिस्चार्ज सर्टिफिकेट</strong>",
      ],
    },
    {
      id: "card",
      title: "इंडेक्स कार्ड के प्रकार",
      table: {
        head: ["कार्ड", "किसे मिलता है"],
        rows: [
          ["X-IA (पीला)", "जिनकी योग्यता मैट्रिक से कम है"],
          ["X-IB (हरा)", "मैट्रिक, हाई स्कूल, हायर सेकेंडरी, इंटरमीडिएट या डिग्री स्तर पास"],
          ["X-IC (सफेद)", "पोस्ट ग्रेजुएट या प्रोफेशनल/टेक्निकल कोर्स वाले"],
        ],
      },
      callout: { kind: "ok", html: "विभाग के अनुसार जमा किए गए मूल कागज़ इंडेक्स कार्ड के साथ लौटा दिए जाते हैं, और सामान्य स्थिति में कार्ड एक दिन में जारी हो जाता है।" },
    },
    {
      id: "online",
      title: "ऑनलाइन या ऑफिस: कैसे करें",
      intro: "ANI e-Seva पोर्टल की सेवा सूची में श्रम/रोज़गार के तहत \"Job Seeker Registration\" (राज्य/UT द्वारा दी गई ऑनलाइन पंजीकरण सुविधा, शुल्क 0 दिखाया गया) दर्ज है। पर विभाग का अपना पेज सिर्फ कार्यालय की प्रक्रिया बताता है, इसलिए ऑनलाइन के सही चरण हम यहां नहीं लिख रहे।",
      list: [
        '<a href="https://anieseva.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">ANI e-Seva पोर्टल</a> पर Labour, Employment & Training की सेवाएं देखें और Job Seeker Registration खोलें।',
        "ऑनलाइन में दिक्कत हो तो पोर्ट ब्लेयर के Employment Exchange या अपने इलाके के EI&AB (कैंपबेल बे, मायाबंदर, कार निकोबार, नानकौरी, हट बे) में जाएं।",
        "किसी भी पैसे की मांग हो तो पहले विभाग से पूछें; पोर्टल पर इस सेवा का शुल्क 0 दिखाया गया है।",
      ],
    },
    {
      id: "renewal",
      title: "नवीनीकरण, बदलाव और ट्रांसफर",
      list: [
        "<strong>नवीनीकरण:</strong> हर 3 साल में। अवधि इंडेक्स कार्ड पर लिखी होती है। साथ में पंजीकरण के समय मिला पहचान कार्ड ले जाएं।",
        "<strong>समय पर न कराने पर:</strong> विभाग के अनुसार 2 महीने की उचित मोहलत के बाद पंजीकरण रद्द हो सकता है और नया पंजीकरण कराना पड़ेगा।",
        "<strong>नई योग्यता जुड़वाना:</strong> मूल पंजीकरण कार्ड और नई योग्यता के मूल प्रमाण पत्र लेकर एक्सचेंज जाएं।",
        "<strong>पता बदलना:</strong> रोज़गार अधिकारी को नए पते का आवेदन दें; हस्ताक्षर मिलाकर कार्ड में पता बदला जाता है।",
        "<strong>पंजीकरण ट्रांसफर:</strong> नए पते और नज़दीकी एक्सचेंज के पते के साथ आवेदन दें।",
      ],
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता और बेरोज़गारी प्रमाण पत्र",
      intro: "विभाग के पेज पर किसी बेरोज़गारी भत्ता योजना का ज़िक्र नहीं मिला, इसलिए हम कोई राशि नहीं लिख रहे। हां, <strong>बेरोज़गारी प्रमाण पत्र</strong> मिलता है।",
      list: [
        "पंजीकृत बेरोज़गार उम्मीदवार, जो लोन लेकर अपना काम शुरू करना चाहता है, सादे आवेदन पर यह प्रमाण पत्र ले सकता है।",
        "विभाग के अनुसार सामान्य स्थिति में यह 2 दिन में जारी हो जाता है।",
      ],
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> आवेदन संबंधित भर्ती की अपनी वेबसाइट पर होता है।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://labour.and.nic.in/webPages/EmploymentExchange.html", title: "Employment Exchange, श्रम विभाग अंडमान और निकोबार" },
    { href: "https://anieseva.andamannicobar.gov.in/", title: "ANI e-Seva (सेवा सूची)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "अंडमान और निकोबार में रोज़गार कार्यालय में नाम कैसे लिखवाएं?", a: "उम्र, पढ़ाई और (लागू हो तो) ST/स्थानीय प्रमाण पत्र के मूल कागज़ लेकर Employment Exchange या अपने इलाके के EI&AB जाएं। सामान्य स्थिति में इंडेक्स कार्ड एक दिन में मिलता है।" },
    { q: "पंजीकरण कितने साल चलता है?", a: "3 साल। नवीनीकरण के लिए पहचान कार्ड ले जाएं। न कराने पर 2 महीने की मोहलत के बाद पंजीकरण रद्द हो सकता है।" },
    { q: "क्या ऑनलाइन पंजीकरण हो सकता है?", a: "ANI e-Seva की सूची में Job Seeker Registration दर्ज है, पर विभाग का पेज सिर्फ कार्यालय की प्रक्रिया बताता है। पोर्टल पर देख लें, न चले तो कार्यालय जाएं।" },
    { q: "क्या बेरोज़गारी भत्ता मिलता है?", a: "विभाग के पेज पर ऐसी कोई योजना नहीं मिली। अपना काम शुरू करने के लिए लोन चाहिए तो बेरोज़गारी प्रमाण पत्र मिल सकता है।" },
    { q: "बेरोज़गारी प्रमाण पत्र क्या है?", a: "पंजीकृत बेरोज़गार को दिया जाने वाला प्रमाण पत्र, जो लोन लेकर अपना काम शुरू करने में काम आता है। सादा आवेदन देना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/andaman-nicobar-caste-certificate.html", emoji: "📜", title: "अंडमान और निकोबार जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/andaman-nicobar-domicile-certificate.html", emoji: "🏠", title: "अंडमान और निकोबार निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://anieseva.andamannicobar.gov.in/", label: "📝 ANI e-Seva पोर्टल" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
