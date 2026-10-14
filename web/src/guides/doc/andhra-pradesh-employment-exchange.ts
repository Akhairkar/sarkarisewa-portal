import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - krishna.ap.gov.in/district-employment-exchange/ (Krishna district website):
//   District Employment Exchange under the Department of Employment and Training,
//   Andhra Pradesh, headed by the District Employment Officer; registration
//   (Below SSC to Degree/B.Ed.), renewal, record updating, sponsoring candidates,
//   career counselling, job fairs under NCS; records computerised.
// - dge.gov.in e-directory of employment exchanges/career centres (listed in
//   search results); ncs.gov.in (toll-free helpline 1514).
// Left out (no official page we could open states them): a state online
// registration portal, fee, age limit, validity/renewal period, documents,
// any unemployment allowance (none confirmed). The old page's 'AP Meeseva/GSWS'
// online claim was not confirmed, so the description was rewritten.
export const andhraPradeshEmploymentExchange: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Andhra Pradesh Employment Exchange 2026",
  description: "आंध्र प्रदेश रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: ज़िला रोज़गार कार्यालय की सेवाएं, पंजीकरण-नवीनीकरण, NCS पोर्टल और जॉब फेयर की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "आंध्र प्रदेश रोज़गार कार्यालय पंजीकरण 2026: ज़िला रोज़गार कार्यालय और NCS पोर्टल",
  lead: "आंध्र प्रदेश में रोज़गार कार्यालय का काम रोज़गार एवं प्रशिक्षण विभाग के ज़िला रोज़गार कार्यालयों (District Employment Exchange) से होता है, जिसके मुखिया ज़िला रोज़गार अधिकारी होते हैं। ज़िला प्रशासन की वेबसाइट के अनुसार यहां पंजीकरण, नवीनीकरण और रिकॉर्ड अपडेट होता है। राज्य का अलग ऑनलाइन पंजीकरण पोर्टल हमें आधिकारिक पेज पर पक्का नहीं मिला; ऑनलाइन के लिए राष्ट्रीय पोर्टल NCS है।",
  facts: [
    ["विभाग", "Employment and Training Department, आंध्र प्रदेश"],
    ["कार्यालय", "ज़िला रोज़गार कार्यालय (District Employment Exchange)"],
    ["ऑनलाइन विकल्प", "<a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">NCS पोर्टल (ncs.gov.in)</a>"],
    ["NCS हेल्पलाइन", "1514 (टोल-फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "ज़िला रोज़गार कार्यालय क्या करता है",
      intro: "कृष्णा ज़िले की सरकारी वेबसाइट पर दी गई जानकारी के अनुसार (बाकी ज़िलों में भी यही ढांचा है):",
      list: [
        "<strong>पंजीकरण:</strong> SSC से कम से लेकर डिग्री/B.Ed. तक की योग्यता वाले बेरोज़गार युवाओं का नाम दर्ज करना।",
        "<strong>नवीनीकरण और रिकॉर्ड अपडेट।</strong>",
        "नौकरी देने वालों को उम्मीदवारों के नाम भेजना (sponsoring)।",
        "<strong>करियर काउंसलिंग</strong>, करियर टॉक और स्वरोज़गार मार्गदर्शन।",
        "NCS कार्यक्रम के तहत निजी क्षेत्र के लिए <strong>जॉब फेयर/जॉब मेला</strong>।",
      ],
    },
    {
      id: "registration",
      title: "पंजीकरण कैसे करें",
      steps: [
        "अपने ज़िले के <strong>ज़िला रोज़गार कार्यालय</strong> का पता अपनी ज़िला सरकारी वेबसाइट पर या केंद्र सरकार की रोज़गार कार्यालय डायरेक्टरी में देखें।",
        "10वीं और आगे की पढ़ाई के सभी मूल प्रमाण पत्र, पहचान प्रमाण और चालू मोबाइल नंबर लेकर जाएं।",
        "कार्यालय में बताए गए फॉर्म और प्रक्रिया से नाम दर्ज कराएं; कौन से कागज़ चाहिए यह कार्यालय से पक्का कर लें।",
        "ऑनलाइन विकल्प के लिए <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> पर जॉबसीकर रजिस्ट्रेशन करें।",
      ],
      callout: { kind: "info", html: "पंजीकरण की उम्र, वैधता, नवीनीकरण की अवधि और फीस हमें किसी चालू आधिकारिक पेज पर नहीं मिली, इसलिए यहां नहीं लिखी। अपने ज़िला रोज़गार अधिकारी से पूछें।" },
    },
    {
      id: "naipunyam",
      title: "Naipunyam पोर्टल क्या है",
      intro: "आंध्र प्रदेश कौशल विकास निगम (APSSDC) का <a href=\"https://naipunyam.ap.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">naipunyam.ap.gov.in</a> कौशल प्रशिक्षण, रिज़्यूमे और जॉब मेलों के पंजीकरण के लिए इस्तेमाल होता है। यह रोज़गार कार्यालय का पंजीकरण नहीं है; क्या यह उसकी जगह लेता है, इसकी पुष्टि हमें नहीं मिली। जॉब मेले में जाने से पहले उसके नोटिस में दिया पंजीकरण तरीका देखें।",
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "आंध्र प्रदेश में रोज़गार कार्यालय पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही। भत्ते के नाम पर फॉर्म बेचने या पैसे मांगने वालों से बचें।",
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["नवीनीकरण/रिकॉर्ड अपडेट", "अपने ज़िला रोज़गार कार्यालय में मूल कागज़ों के साथ जाएं"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> APPSC, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://krishna.ap.gov.in/district-employment-exchange/", title: "District Employment Exchange (ज़िला कृष्णा)" },
    { href: "http://www.dge.gov.in/directory-of-employment-exchanges-career-centres", title: "रोज़गार कार्यालयों की डायरेक्टरी (DGE, केंद्र सरकार)" },
    { href: "https://naipunyam.ap.gov.in/", title: "Naipunyam (APSSDC)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में रोज़गार कार्यालय में नाम कैसे दर्ज करें?", a: "अपने ज़िले के ज़िला रोज़गार कार्यालय में मूल प्रमाण पत्रों के साथ जाएं। ऑनलाइन के लिए NCS पोर्टल (ncs.gov.in) पर जॉबसीकर रजिस्ट्रेशन कर सकते हैं।" },
    { q: "रोज़गार कार्यालय कौन सा विभाग चलाता है?", a: "आंध्र प्रदेश का रोज़गार एवं प्रशिक्षण विभाग (Department of Employment and Training); ज़िले में ज़िला रोज़गार अधिकारी इसके मुखिया होते हैं।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल या कार्यालय जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या आंध्र प्रदेश में बेरोज़गारी भत्ता मिलता है?", a: "हमें इसकी कोई पुष्ट आधिकारिक जानकारी नहीं मिली, इसलिए राशि नहीं लिखी गई। ताज़ा स्थिति ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। APPSC, SSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/andhra-pradesh-caste-certificate.html", emoji: "📜", title: "आंध्र प्रदेश जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://www.ncs.gov.in/", label: "📝 NCS पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
