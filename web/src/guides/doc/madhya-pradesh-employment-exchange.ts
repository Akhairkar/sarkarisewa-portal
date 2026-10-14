import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - indore.nic.in/?p=29655 (Employment Exchange Registration, Indore): the
//   Employment Department links job seekers and employers; registration can be
//   done through the online portal mprojgar.gov.in; District Employment Office,
//   10 near Pologround, District Udyog Kendra, Indore 452007.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (only third-party blogs state them): Samagra ID and Class 10
// conditions, 3-year validity and grace period, fee, documents, Rojgar Mela
// procedure, any unemployment allowance (none confirmed).
export const madhyaPradeshEmploymentExchange: DocGuide = {
  state: { slug: "madhya-pradesh", hi: "मध्य प्रदेश" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Madhya Pradesh Employment Exchange 2026",
  description: "मध्य प्रदेश रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: mprojgar.gov.in पर ऑनलाइन पंजीकरण, ज़िला रोज़गार कार्यालय और रोज़गार मेले की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मध्य प्रदेश रोज़गार कार्यालय पंजीकरण 2026: mprojgar.gov.in पर रजिस्ट्रेशन",
  lead: "मध्य प्रदेश में रोज़गार कार्यालय का पंजीकरण रोज़गार विभाग के पोर्टल mprojgar.gov.in पर ऑनलाइन हो सकता है; इंदौर ज़िला प्रशासन की वेबसाइट इसी पोर्टल की जानकारी देती है। हर ज़िले में ज़िला रोज़गार कार्यालय है। फीस, वैधता और ज़रूरी कागज़ों की पक्की जानकारी हमें आधिकारिक पेज पर नहीं मिली, इसलिए वे यहां नहीं लिखे हैं।",
  facts: [
    ["पोर्टल", "<a href=\"http://mprojgar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mprojgar.gov.in</a>"],
    ["विभाग", "रोज़गार विभाग, मध्य प्रदेश"],
    ["कार्यालय", "हर ज़िले में ज़िला रोज़गार कार्यालय"],
    ["NCS हेल्पलाइन", "1514 (टोल-फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "रोज़गार विभाग क्या करता है",
      intro: "इंदौर ज़िला प्रशासन की वेबसाइट के अनुसार रोज़गार विभाग रोज़गार के अवसरों और प्रशिक्षित, कुशल लोगों के बीच कड़ी का काम करता है। नौकरी चाहने वाले अपना पंजीकरण ऑनलाइन पोर्टल से कर सकते हैं।",
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"http://mprojgar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mprojgar.gov.in</a> खोलें। किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।",
        "जॉबसीकर के रूप में नया रजिस्ट्रेशन चुनें और मांगी गई जानकारी भरें।",
        "नाम, जन्मतिथि और पढ़ाई प्रमाण पत्रों से मिलाकर सबमिट करें।",
        "रजिस्ट्रेशन की पुष्टि और पंजीकरण नंबर संभालकर रखें।",
      ],
      callout: { kind: "info", html: "पोर्टल पर कौन-कौन सी पहचान और कागज़ की शर्तें हैं, उम्र की सीमा और नवीनीकरण की अवधि पोर्टल या अपने ज़िला रोज़गार कार्यालय से पक्का करें।" },
    },
    {
      id: "indore",
      title: "एक ज़िला कार्यालय का उदाहरण",
      intro: "इंदौर ज़िला वेबसाइट के अनुसार। अपने ज़िले का पता अपनी ज़िला वेबसाइट पर देखें।",
      table: { head: ["जानकारी", "विवरण"], rows: [
        ["कार्यालय", "ज़िला रोज़गार कार्यालय, 10, पोलोग्राउंड के पास, ज़िला उद्योग केंद्र, इंदौर 452007"],
      ] },
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "मध्य प्रदेश में रोज़गार पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही। ताज़ा योजनाओं की जानकारी ज़िला रोज़गार कार्यालय से लें।",
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
        "<strong>सरकारी भर्तियां:</strong> MPESB, MPPSC, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "http://mprojgar.gov.in/", title: "रोज़गार विभाग, मध्य प्रदेश (पोर्टल)" },
    { href: "https://indore.nic.in/?p=29655", title: "Employment Exchange Registration (ज़िला इंदौर)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "मध्य प्रदेश में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "रोज़गार विभाग के पोर्टल mprojgar.gov.in पर जॉबसीकर रजिस्ट्रेशन करें। दिक्कत हो तो अपने ज़िला रोज़गार कार्यालय जाएं।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल या कार्यालय जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "पंजीकरण की वैधता कितनी है?", a: "यह हमें आधिकारिक पेज पर पक्की नहीं मिली। अपने पोर्टल अकाउंट या ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या मध्य प्रदेश में बेरोज़गारी भत्ता मिलता है?", a: "इसकी कोई पुष्ट आधिकारिक जानकारी हमें नहीं मिली, इसलिए राशि नहीं लिखी गई। ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। MPESB, MPPSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/madhya-pradesh-domicile-certificate.html", emoji: "🏠", title: "मध्य प्रदेश निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/madhya-pradesh-caste-certificate.html", emoji: "📜", title: "मध्य प्रदेश जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "http://mprojgar.gov.in/", label: "📝 mprojgar.gov.in पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
