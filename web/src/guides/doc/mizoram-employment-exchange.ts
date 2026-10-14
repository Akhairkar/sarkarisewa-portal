import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - empex.mizoram.gov.in (EmpEx, Labour, Employment, Skill Development &
//   Entrepreneurship Dept, built by Mizoram State e-Governance Society): sign up
//   with name and phone number to apply for the Employment Card; fees shown on
//   the home page (Service Charge Rs 20, CSC Facilitation Charge Rs 30);
//   integrated with NCS; district helpline numbers; notice that people who
//   registered before 31 Jan 2023 via CSC/exchange must update their profile
//   on EmpEx; payment terms page (UPI has no transaction charge).
// - lunglei.nic.in/service/employment-exchange-registration: LESDE is the
//   nodal department; district exchanges at Aizawl, Lunglei, Siaha, Champhai.
// - serchhip.nic.in service page (search extract only): HSLC original for age
//   proof from class 10, NOC for government employees, renewal every 3 years,
//   Serchhip falls under Aizawl exchange.
// - ncs.gov.in (toll-free helpline 1514).
// No state unemployment allowance was found, so none is described.
export const mizoramEmploymentExchange: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Mizoram Employment Exchange 2026: Apply & Status",
  description: "मिज़ोरम रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: EmpEx पोर्टल पर ऑनलाइन Employment Card, पोर्टल पर दिखाई गई फीस, 3 साल में नवीनीकरण और हेल्पलाइन नंबर।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मिज़ोरम रोज़गार कार्यालय पंजीकरण 2026: EmpEx पोर्टल, Employment Card और नवीनीकरण",
  lead: "मिज़ोरम में रोज़गार कार्यालय का पंजीकरण श्रम, रोज़गार, कौशल विकास एवं उद्यमिता (LESDE) विभाग के EmpEx पोर्टल (empex.mizoram.gov.in) पर होता है। साइनअप सिर्फ नाम और फोन नंबर से शुरू होता है। पोर्टल पर इस सेवा की फीस ₹20 (सर्विस चार्ज) दिखाई गई है, और CSC से करवाने पर ₹30 अलग से सुविधा शुल्क।",
  facts: [
    ["पोर्टल", '<a href="https://empex.mizoram.gov.in/" target="_blank" rel="noopener nofollow">empex.mizoram.gov.in</a>'],
    ["फीस (पोर्टल पर दिखाई)", "सर्विस चार्ज ₹20; CSC सुविधा शुल्क ₹30"],
    ["नवीनीकरण", "हर 3 साल में"],
    ["NCS", "मंज़ूर हुए उम्मीदवार NCS पोर्टल पर अपने-आप पंजीकृत"],
  ],
  notice: "<strong>ध्यान दें:</strong> 31 जनवरी 2023 से पहले CSC या ज़िला Employment Exchange से पंजीकरण कराने वालों को पोर्टल की सूचना के अनुसार EmpEx पर अपनी प्रोफाइल (पढ़ाई, अनुभव, NCO कोड) अपडेट करनी है।",
  sections: [
    {
      id: "kya-hai",
      title: "EmpEx पोर्टल क्या है",
      intro: "EmpEx मिज़ोरम सरकार के LESDE विभाग का Employment Exchange पोर्टल है, जिसे Mizoram State e-Governance Society ने बनाया है। पोर्टल की सूची के अनुसार इससे ये काम होते हैं:",
      list: [
        "नौकरी चाहने वालों का <strong>ऑनलाइन पंजीकरण</strong> और Employment Card",
        "<strong>Job Notification:</strong> रजिस्टर्ड मोबाइल पर SMS से सूचना",
        "<strong>Employment News</strong> और नियोक्ताओं की जॉब पोस्टिंग",
        "<strong>NCS से जुड़ाव:</strong> पोर्टल के अनुसार मंज़ूर उम्मीदवार देशभर की नौकरियों के लिए NCS पर अपने-आप पंजीकृत होते हैं",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "ज़िला सरकारी पेजों के अनुसार (खोज परिणाम में दिखा अंश) ये कागज़ लगते हैं। EmpEx पर मांगे गए कागज़ों की ताज़ा सूची पोर्टल पर देख लें:",
      list: [
        "10वीं या उससे ऊपर के लिए उम्र के प्रमाण में <strong>HSLC का मूल प्रमाण पत्र</strong>",
        "पढ़ाई के प्रमाण पत्र",
        "सरकारी कर्मचारी हैं तो संबंधित प्राधिकारी से <strong>NOC</strong>",
        "चालू <strong>मोबाइल नंबर</strong> (साइनअप के लिए नाम और फोन नंबर चाहिए)",
      ],
    },
    {
      id: "online",
      title: "ऑनलाइन पंजीकरण कैसे करें",
      steps: [
        '<a href="https://empex.mizoram.gov.in/signup" target="_blank" rel="noopener nofollow">empex.mizoram.gov.in</a> पर जाकर <strong>Register as Jobseeker</strong> / SIGNUP चुनें और नाम व फोन नंबर से खाता बनाएं।',
        "लॉगिन करके अपनी प्रोफाइल (पढ़ाई, अनुभव आदि) भरें और Employment Card के लिए आवेदन करें।",
        "पोर्टल पर दिखाई गई फीस का भुगतान करें। भुगतान की शर्तों के पेज के अनुसार UPI से भुगतान पर कोई ट्रांज़ैक्शन चार्ज नहीं है।",
        "भुगतान की रसीद और Transaction Reference Number संभालकर रखें।",
        "पंजीकरण की स्थिति और कार्ड के लिए पोर्टल पर लॉगिन करें; दिक्कत हो तो नीचे दिए ज़िला नंबर पर पूछें।",
      ],
      callout: { kind: "warn", html: "<strong>फीस:</strong> पोर्टल के होमपेज पर सर्विस चार्ज ₹20 और CSC सुविधा शुल्क ₹30 लिखा है। इससे ज़्यादा कोई मांगे तो पहले ज़िला Employment Exchange से पूछें। पैसा कटकर रसीद न आए तो पोर्टल की भुगतान नीति के अनुसार अपने बैंक से संपर्क करें।" },
    },
    {
      id: "offline",
      title: "ज़िला Employment Exchange और हेल्पलाइन",
      intro: "LESDE के ज़िला Employment Exchange कार्यालय आइज़ोल, लुंगलेई, सैहा और चम्फाई में हैं। EmpEx पोर्टल पर दिए नंबर:",
      list: [
        "लुंगलेई, हनाहथियल: 6009-702-484",
        "चम्फाई, खावज़ॉल: 9233-671-799",
        "आइज़ोल, कोलासिब, ममित, सेरछिप, सैतुअल: 7640-880-647",
        "सैहा, लॉन्गतलाई: 8798-168-493",
        "निदेशालय: 7085-354-654",
      ],
      callout: { kind: "info", html: "सेरछिप ज़िले के लिए ज़िला सरकारी पेज के अनुसार पंजीकरण आइज़ोल के कार्यालय में होता है।" },
    },
    {
      id: "renewal",
      title: "नवीनीकरण (Renewal)",
      intro: "ज़िला सरकारी पेजों के अनुसार पंजीकरण <strong>हर 3 साल</strong> में नवीनीकरण करवाना होता है। EmpEx पोर्टल पर Renew के आंकड़े भी दिखते हैं, यानी नवीनीकरण पोर्टल से चलता है। नवीनीकरण का तरीका और फीस पोर्टल में लॉगिन करके देखें।",
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "LESDE के EmpEx पोर्टल और ज़िला पेजों पर किसी बेरोज़गारी भत्ता योजना का ज़िक्र हमें नहीं मिला, इसलिए हम कोई राशि नहीं लिख रहे। विभाग से पूछकर ही किसी योजना की जानकारी मानें।",
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
    { href: "https://empex.mizoram.gov.in/", title: "EmpEx, मिज़ोरम Employment Exchange पोर्टल" },
    { href: "https://lesde.mizoram.gov.in/", title: "LESDE विभाग, मिज़ोरम" },
    { href: "https://lunglei.nic.in/service/employment-exchange-registration", title: "Employment Exchange Registration (लुंगलेई ज़िला वेबसाइट)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "मिज़ोरम में रोज़गार कार्यालय का ऑनलाइन पंजीकरण कैसे करें?", a: "empex.mizoram.gov.in पर Jobseeker के रूप में नाम और फोन नंबर से साइनअप करें, प्रोफाइल भरें और Employment Card के लिए आवेदन करें।" },
    { q: "पंजीकरण की फीस कितनी है?", a: "EmpEx के होमपेज पर सर्विस चार्ज ₹20 और CSC सुविधा शुल्क ₹30 लिखा है। CSC से करवाने पर ही दूसरा शुल्क लगता है। भुगतान से पहले पोर्टल पर ताज़ा राशि देख लें।" },
    { q: "नवीनीकरण कब करना होता है?", a: "ज़िला सरकारी पेजों के अनुसार हर 3 साल में। पोर्टल पर लॉगिन करके नवीनीकरण का विकल्प और तरीका देखें।" },
    { q: "पुराने पंजीकरण वालों को क्या करना है?", a: "जिन्होंने 31 जनवरी 2023 से पहले CSC या ज़िला एक्सचेंज से पंजीकरण कराया, उन्हें पोर्टल की सूचना के अनुसार EmpEx पर पढ़ाई, अनुभव और NCO कोड अपडेट करना है।" },
    { q: "क्या मिज़ोरम में बेरोज़गारी भत्ता मिलता है?", a: "हमें विभाग के पोर्टल पर ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है। ज़िला Employment Exchange से पूछें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/mizoram-caste-certificate.html", emoji: "📜", title: "मिज़ोरम जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/mizoram-domicile-certificate.html", emoji: "🏠", title: "मिज़ोरम निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://empex.mizoram.gov.in/signup", label: "📝 EmpEx पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
