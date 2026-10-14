import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - dharwad.nic.in employment service page (Employment and Training): Department
//   of Industrial Training & Employment runs the National Employment Service
//   Scheme; site itiemp.karnataka.gov.in; District Employment Exchange, Rashtrakavi
//   Kuvempu Road, Navanagara, Hubballi 580025, phone 0836-2225288.
// - Yuva Nidhi: Deccan Herald / Karnataka government order as reported (search
//   results; the official Seva Sindhu portal is not reachable from our checker):
//   Rs 3,000 a month for degree holders, Rs 1,500 for diploma holders, until a
//   job is found or 2 years, applied through Seva Sindhu, DBT, false
//   declaration of job status attracts penalty.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on a page we could open): exchange registration
// steps, fee, validity, the six-year domicile, income and cohort conditions of
// Yuva Nidhi (sources disagree), self-declaration frequency, whether Yuva Nidhi
// intake is open now.
export const karnatakaEmploymentExchange: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Karnataka Employment Exchange 2026: Apply & Status",
  description: "कर्नाटक रोज़गार कार्यालय (Employment Exchange) 2026: itiemp.karnataka.gov.in, ज़िला रोज़गार कार्यालय, और अलग से युवा निधि बेरोज़गारी भत्ते की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "कर्नाटक रोज़गार कार्यालय 2026: ज़िला रोज़गार कार्यालय और युवा निधि बेरोज़गारी भत्ता",
  lead: "कर्नाटक में रोज़गार कार्यालय औद्योगिक प्रशिक्षण एवं रोज़गार विभाग के राष्ट्रीय रोज़गार सेवा कार्यक्रम के तहत चलते हैं, और विभाग की वेबसाइट itiemp.karnataka.gov.in है। बेरोज़गारी भत्ता \"युवा निधि\" योजना से मिलता है, जिसका आवेदन Seva Sindhu पोर्टल पर होता है; वह रोज़गार कार्यालय के पंजीकरण से अलग आवेदन है।",
  facts: [
    ["वेबसाइट", "<a href=\"https://itiemp.karnataka.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">itiemp.karnataka.gov.in</a>"],
    ["विभाग", "औद्योगिक प्रशिक्षण एवं रोज़गार विभाग"],
    ["युवा निधि", "डिग्री ₹3,000, डिप्लोमा ₹1,500 प्रति माह (रिपोर्ट के अनुसार)"],
    ["युवा निधि आवेदन", "Seva Sindhu पोर्टल"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "कर्नाटक में रोज़गार कार्यालय",
      intro: "धारवाड़ ज़िला वेबसाइट के अनुसार औद्योगिक प्रशिक्षण एवं रोज़गार विभाग बेरोज़गारों के लिए <strong>राष्ट्रीय रोज़गार सेवा योजना</strong> और युवाओं के लिए व्यावसायिक प्रशिक्षण योजना लागू करता है, जो केंद्र के DGET के मानकों पर चलती हैं। हर ज़िले में ज़िला रोज़गार कार्यालय है।",
    },
    {
      id: "registration",
      title: "पंजीकरण कैसे करें",
      steps: [
        "<a href=\"https://itiemp.karnataka.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">itiemp.karnataka.gov.in</a> खोलें (विभाग की वेबसाइट, जो ज़िला सरकारी साइट पर दी गई है)।",
        "जॉबसीकर पंजीकरण का विकल्प ढूंढें और मांगी गई जानकारी भरें।",
        "न मिले या दिक्कत हो तो अपने ज़िला रोज़गार कार्यालय जाएं और मूल प्रमाण पत्र साथ ले जाएं।",
        "ऑनलाइन विकल्प के लिए <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> पर भी रजिस्ट्रेशन किया जा सकता है।",
      ],
      callout: { kind: "info", html: "पंजीकरण के सटीक चरण, फीस, कागज़ और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं मिली, इसलिए यहां नहीं लिखी।" },
    },
    {
      id: "hubballi",
      title: "एक ज़िला कार्यालय का उदाहरण",
      intro: "धारवाड़ ज़िला वेबसाइट के अनुसार। अपने ज़िले का पता वहीं की वेबसाइट पर देखें।",
      table: { head: ["जानकारी", "विवरण"], rows: [
        ["कार्यालय", "District Employment Exchange, राष्ट्रकवि कुवेंपु रोड, नवनगर, हुब्बल्ली 580025"],
        ["फोन", "0836-2225288"],
      ] },
    },
    {
      id: "yuvanidhi",
      title: "युवा निधि (बेरोज़गारी भत्ता): रिपोर्ट के अनुसार",
      intro: "कर्नाटक सरकार के आदेश पर आधारित समाचार रिपोर्टों के अनुसार:",
      list: [
        "<strong>राशि:</strong> डिग्री धारकों को ₹3,000 और डिप्लोमा धारकों को ₹1,500 प्रति माह, नौकरी मिलने तक या अधिकतम 2 साल तक।",
        "<strong>भुगतान:</strong> सीधे बैंक खाते में (DBT)।",
        "<strong>आवेदन:</strong> Seva Sindhu पोर्टल से।",
        "<strong>नौकरी की स्थिति छिपाने पर जुर्माना</strong> लग सकता है, और लाभार्थी को अपनी स्थिति की स्व-घोषणा देनी होती है।",
      ],
      callout: { kind: "warn", html: "पात्रता की शर्तें (निवास की अवधि, कौन सा बैच, आदि) और स्व-घोषणा की अवधि के बारे में स्रोत अलग-अलग बताते हैं, और आवेदन अभी खुले हैं या नहीं यह हम पुष्ट नहीं कर सके। आवेदन से पहले Seva Sindhu या नज़दीकी कर्नाटक वन केंद्र पर ताज़ा नियम देखें।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> KPSC, KEA, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://itiemp.karnataka.gov.in", title: "औद्योगिक प्रशिक्षण एवं रोज़गार विभाग, कर्नाटक" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "कर्नाटक में रोज़गार कार्यालय में नाम कैसे दर्ज करें?", a: "विभाग की वेबसाइट itiemp.karnataka.gov.in देखें या अपने ज़िला रोज़गार कार्यालय जाएं। ऑनलाइन विकल्प के लिए NCS पोर्टल पर भी रजिस्टर कर सकते हैं।" },
    { q: "कर्नाटक में बेरोज़गारी भत्ता कितना है?", a: "रिपोर्टों के अनुसार युवा निधि में डिग्री धारकों को ₹3,000 और डिप्लोमा धारकों को ₹1,500 प्रति माह, अधिकतम 2 साल तक। पात्रता और आवेदन की स्थिति Seva Sindhu पर पक्की करें।" },
    { q: "क्या युवा निधि के लिए रोज़गार कार्यालय में नाम होना ज़रूरी है?", a: "इसकी पुष्टि हमें नहीं मिली। आवेदन Seva Sindhu पर होता है; शर्तें वहीं देखें।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल या कार्यालय जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। KPSC, KEA जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/karnataka-caste-certificate.html", emoji: "📜", title: "कर्नाटक जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://itiemp.karnataka.gov.in", label: "📝 itiemp.karnataka.gov.in" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
