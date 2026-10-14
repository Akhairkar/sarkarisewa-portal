import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; empmission.odisha.gov.in is not reachable
// from our checker, so facts come from search-result extracts):
// - Portal empmission.odisha.gov.in as the Directorate of Employment portal
//   (NIC-hosted), services: jobseeker registration, counselling, employment
//   market information, vocational guidance, renewal, sponsorship; registration
//   free. Seen in search results of secondary sites, not opened.
// - District employment exchange notices (kalahandi / balangir .odisha.gov.in,
//   search extracts): temporary registration number after online registration is
//   valid for 20 days; validate at the district employment exchange within the
//   due date or it is cancelled.
// - Odisha Bytes (news): 25,74,663 names deleted from the Live Register between
//   2010 and 28 Feb 2023 for non-renewal.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (secondary or wiki sources only): validity period, documents, phone
// numbers, any unemployment allowance (none confirmed).
export const odishaEmploymentExchange: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Odisha Employment Exchange 2026: Apply & Status",
  description: "ओडिशा रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: empmission.odisha.gov.in पर ऑनलाइन पंजीकरण, अस्थायी नंबर का सत्यापन, नवीनीकरण और ज़िला रोज़गार कार्यालय।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "ओडिशा रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन, 20 दिन में सत्यापन और नवीनीकरण",
  lead: "ओडिशा में रोज़गार कार्यालय का ऑनलाइन पंजीकरण रोज़गार निदेशालय के पोर्टल empmission.odisha.gov.in के ज़रिए बताया गया है। ज़िला प्रशासन के नोटिसों के अनुसार ऑनलाइन पंजीकरण पर मिला अस्थायी पंजीकरण नंबर 20 दिन के लिए मान्य होता है; इस अवधि में ज़िला रोज़गार कार्यालय जाकर उसे वैध कराना होता है, नहीं तो वह रद्द हो जाता है।",
  facts: [
    ["पोर्टल", "<a href=\"https://empmission.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">empmission.odisha.gov.in</a>"],
    ["फीस", "पंजीकरण निःशुल्क बताया गया है"],
    ["अस्थायी नंबर", "20 दिन मान्य; कार्यालय में सत्यापन ज़रूरी"],
    ["नवीनीकरण", "समय पर कराना ज़रूरी; चूक पर नाम कट सकता है"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "ओडिशा रोज़गार कार्यालय की सेवाएं",
      intro: "ओडिशा रोज़गार सेवा की जानकारी के अनुसार निदेशालय ये सेवाएं देता है:",
      list: [
        "नौकरी चाहने वालों का <strong>पंजीकरण</strong> और नवीनीकरण",
        "<strong>करियर काउंसलिंग</strong> और व्यावसायिक मार्गदर्शन",
        "रोज़गार बाज़ार की जानकारी",
        "अधिसूचित वैकेंसी के लिए उम्मीदवारों के नाम भेजना (sponsorship)",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन और सत्यापन",
      steps: [
        "<a href=\"https://empmission.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">empmission.odisha.gov.in</a> खोलें। किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।",
        "जॉबसीकर रजिस्ट्रेशन में नाम, जन्मतिथि, पता और पढ़ाई भरें।",
        "सबमिट करने के बाद मिलने वाला <strong>अस्थायी पंजीकरण नंबर</strong> सुरक्षित रखें।",
        "<strong>20 दिन के अंदर</strong> अपने ज़िला रोज़गार कार्यालय जाकर मूल कागज़ दिखाएं और पंजीकरण वैध कराएं। आखिरी तारीख़ सरकारी छुट्टी पर पड़े तो उससे पहले के कार्य दिवस पर जाएं।",
      ],
      callout: { kind: "warn", html: "सत्यापन न कराने पर अस्थायी नंबर रद्द हो जाता है। ज़रूरी कागज़ों की पक्की सूची पोर्टल या अपने ज़िला रोज़गार कार्यालय से लें।" },
    },
    {
      id: "naveenikaran",
      title: "नवीनीकरण क्यों ज़रूरी है",
      intro: "समाचार रिपोर्ट (Odisha Bytes) के अनुसार 2010 से 28 फरवरी 2023 के बीच 25,74,663 उम्मीदवारों के नाम लाइव रजिस्टर से इसलिए हटाए गए कि वे समय पर नवीनीकरण नहीं करा पाए। नवीनीकरण की अवधि अपने रोज़गार कार्ड या पोर्टल अकाउंट में देखें और तारीख़ से पहले नवीनीकरण कराएं। ऑनलाइन नवीनीकरण का विकल्प पोर्टल पर देखें; या उसी कार्यालय में जाएं जहां कार्ड बना था।",
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "ओडिशा में रोज़गार पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही। \"बेरोज़गारी भत्ता\" के नाम पर फॉर्म बेचने वालों से बचें।",
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["नवीनीकरण की तारीख़ निकल गई", "तुरंत ज़िला रोज़गार कार्यालय से पूछें कि पंजीकरण बहाल हो सकता है या नया करना होगा"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> OSSC, OSSSC, OPSC, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://empmission.odisha.gov.in/", title: "रोज़गार निदेशालय, ओडिशा (पोर्टल)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "ओडिशा में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "empmission.odisha.gov.in पर जॉबसीकर रजिस्ट्रेशन करें, अस्थायी नंबर लें और 20 दिन के अंदर ज़िला रोज़गार कार्यालय में मूल कागज़ दिखाकर सत्यापन कराएं।" },
    { q: "अस्थायी पंजीकरण नंबर कितने दिन मान्य है?", a: "ज़िला प्रशासन के नोटिसों के अनुसार 20 दिन। इसके अंदर ज़िला रोज़गार कार्यालय में वैध न कराने पर वह रद्द हो जाता है।" },
    { q: "क्या ओडिशा में पंजीकरण की फीस है?", a: "पोर्टल की सेवाओं के विवरण में पंजीकरण निःशुल्क बताया गया है। किसी एजेंट को पैसे न दें।" },
    { q: "क्या ओडिशा में बेरोज़गारी भत्ता मिलता है?", a: "इसकी कोई पुष्ट आधिकारिक जानकारी हमें नहीं मिली, इसलिए राशि नहीं लिखी गई। ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। OSSC, OSSSC, OPSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/odisha-caste-certificate.html", emoji: "📜", title: "ओडिशा जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://empmission.odisha.gov.in/", label: "📝 empmission.odisha.gov.in" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
