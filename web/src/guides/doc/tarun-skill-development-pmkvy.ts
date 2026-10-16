import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): myscheme.gov.in/schemes/pmkvy-stt and
// pmkvy-rpl (MSDE / NSDC; STT age 15-45, RPL 18-59, free training,
// assessment and certificate, 70% biometric attendance, DigiLocker
// certificate; register on skillindiadigital.gov.in), as already verified for
// pm-kaushal-vikas-yojana.ts on 15 Oct 2026; Lok Sabha reply (July 2026, via
// Kashmir Life / SuperKalam PIB summaries): PMKVY 4.0 implemented since
// 2022-23, 600+ new-age courses (AI, semiconductors, drones, cybersecurity,
// robotics), about 5.44 lakh trained in new-age job roles up to 30 Jun 2026;
// Rajya Sabha PQ 267 (19.03.2025, rsdebate.nic.in): OJT mandatory in STT;
// Cabinet decision 7 Feb 2025 (Skill India Programme to 2025-26, via
// careers360). No official approval of a PMKVY 5.0 phase found. The old
// page's helpline "1800-11-0001 / 1947" was not for this scheme and was
// dropped.
export const tarunSkillDevelopmentPmkvy: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "PMKVY 4.0 नए ज़माने के कोर्स" },
  ],
  docHi: "PMKVY 4.0 ट्रेनिंग",
  title: "पीएम कौशल विकास योजना 4.0 (PMKVY 4.0 Training)",
  description: "PMKVY 4.0 में AI, ड्रोन, रोबोटिक्स, साइबर सुरक्षा जैसे नए ज़माने के कोर्स की मुफ्त ट्रेनिंग और सर्टिफिकेट: उम्र, Skill India Digital पर रजिस्ट्रेशन, सेंटर चुनना और सावधानियां।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PMKVY 4.0 ट्रेनिंग: AI, ड्रोन, रोबोटिक्स जैसे नए कोर्स मुफ्त कैसे सीखें",
  lead: "प्रधानमंत्री कौशल विकास योजना 4.0 (PMKVY 4.0) कौशल विकास और उद्यमिता मंत्रालय की योजना है, जिसमें पारंपरिक कामों के साथ AI, ड्रोन, रोबोटिक्स, साइबर सुरक्षा और सेमीकंडक्टर जैसे नए ज़माने के कोर्स भी मुफ्त सिखाए जाते हैं। मंत्रालय के अनुसार 600 से ज़्यादा ऐसे कोर्स जोड़े गए हैं और 30 जून 2026 तक करीब 5.44 लाख लोग इनमें ट्रेनिंग ले चुके हैं। 15 से 45 साल के युवा Skill India Digital पोर्टल पर रजिस्टर करके पास का ट्रेनिंग सेंटर चुन सकते हैं।",
  facts: [
    ["फीस", "ट्रेनिंग, परीक्षा और सर्टिफिकेट मुफ्त"],
    ["उम्र", "नई ट्रेनिंग 15-45 साल; RPL 18-59 साल"],
    ["नए ज़माने के कोर्स", "600 से ज़्यादा (AI, ड्रोन, रोबोटिक्स आदि)"],
    ["रजिस्ट्रेशन", "Skill India Digital पोर्टल या ट्रेनिंग सेंटर"],
  ],
  notice: "PMKVY 4.0 की मंज़ूर अवधि वित्त वर्ष 2025-26 तक थी। 16 अक्टूबर 2026 तक हमें अगले चरण (PMKVY 5.0) की आधिकारिक मंज़ूरी की सूचना नहीं मिली। दाखिले से पहले Skill India Digital पोर्टल पर कोर्स और बैच चालू होने की पुष्टि करें।",
  sections: [
    {
      id: "courses",
      title: "कौन से नए ज़माने के कोर्स हैं",
      intro: "PMKVY 4.0 में उद्योग की ज़रूरत (Industry 4.0) के हिसाब से ऐसे क्षेत्रों के कोर्स जोड़े गए:",
      list: [
        "आर्टिफिशियल इंटेलिजेंस (AI) और डेटा से जुड़े काम",
        "ड्रोन चलाना और रखरखाव",
        "रोबोटिक्स, मेकाट्रॉनिक्स, IoT और 3D प्रिंटिंग",
        "साइबर सुरक्षा और कोडिंग",
        "सेमीकंडक्टर और इलेक्ट्रॉनिक्स",
      ],
      callout: { kind: "info", html: "हर कोर्स हर ज़िले में नहीं चलता। कोर्स की न्यूनतम पढ़ाई (जैसे 10वीं, 12वीं, ITI या डिप्लोमा) अलग होती है; पोर्टल पर कोर्स (job role) के पेज पर देखें।" },
    },
    {
      id: "kya-milta",
      title: "ट्रेनिंग में क्या मिलता है",
      list: [
        "<strong>मुफ्त ट्रेनिंग:</strong> मान्यता प्राप्त सेंटर पर NSQF के हिसाब से कोर्स, साथ में ज़रूरी काम पर ट्रेनिंग (On-Job Training)।",
        "<strong>मुफ्त परीक्षा:</strong> पास होने पर QR कोड वाला सर्टिफिकेट, जो DigiLocker और Skill India Digital प्रोफाइल में आता है।",
        "<strong>RPL:</strong> जो काम पहले से जानते हैं (18-59 साल), वे छोटे ओरिएंटेशन और परीक्षा के बाद सर्टिफिकेट ले सकते हैं।",
        "<strong>बाद में:</strong> रोज़गार और अप्रेंटिसशिप मेलों से जोड़ने की कोशिश होती है, पर नौकरी की गारंटी नहीं है।",
      ],
      callout: { kind: "warn", html: "परीक्षा देने के लिए 70% से ज़्यादा बायोमेट्रिक हाज़िरी ज़रूरी है। कोई सेंटर फीस मांगे या बिना क्लास के सर्टिफिकेट देने की बात करे तो दाखिला न लें।" },
    },
    {
      id: "registration",
      title: "रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"https://www.skillindiadigital.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">skillindiadigital.gov.in</a> या Skill India Digital ऐप पर मोबाइल OTP और आधार से रजिस्टर करें।",
        "प्रोफाइल में पढ़ाई और रुचि भरें। \"Courses\" में AI, ड्रोन जैसे शब्द से खोजें और PMKVY वाले कोर्स चुनें।",
        "कोर्स पेज पर पास के ट्रेनिंग सेंटर और बैच की तारीख देखें, फिर आवेदन करें।",
        "सेंटर पर जाकर कागज़ जमा करें और दाखिला पक्का करें।",
        "ट्रेनिंग और परीक्षा पूरी होने पर DigiLocker से सर्टिफिकेट डाउनलोड करें।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड (आधार से जुड़ा मोबाइल नंबर)",
        "कोर्स की तय पढ़ाई की मार्कशीट",
        "बैंक खाते का विवरण और पासपोर्ट साइज़ फोटो",
        "RPL के लिए काम के अनुभव का कोई प्रमाण, अगर हो",
      ],
    },
  ],
  official: [
    { href: "https://www.skillindiadigital.gov.in/", title: "Skill India Digital: कोर्स और रजिस्ट्रेशन" },
    { href: "https://www.msde.gov.in/", title: "कौशल विकास और उद्यमिता मंत्रालय (MSDE)" },
    { href: "https://www.myscheme.gov.in/schemes/pmkvy-stt", title: "myScheme: PMKVY 4.0 अल्पकालिक ट्रेनिंग" },
  ],
  faq: [
    { q: "क्या PMKVY 4.0 में AI और ड्रोन की ट्रेनिंग मुफ्त है?", a: "हां, योजना के तहत मान्यता प्राप्त सेंटर पर ट्रेनिंग, परीक्षा और सर्टिफिकेट मुफ्त है। कोर्स आपके इलाके में चल रहा है या नहीं, यह Skill India Digital पोर्टल पर देखें।" },
    { q: "PMKVY 4.0 में दाखिले की उम्र क्या है?", a: "नई ट्रेनिंग के लिए 15 से 45 साल, और पहले से काम जानने वालों के सर्टिफिकेट (RPL) के लिए 18 से 59 साल।" },
    { q: "क्या ट्रेनिंग के बाद नौकरी मिलेगी?", a: "नौकरी की गारंटी नहीं है। सर्टिफिकेट से नौकरी खोजने में मदद मिलती है और सेंटर/मंत्रालय रोज़गार मेलों से जोड़ने की कोशिश करते हैं।" },
    { q: "क्या PMKVY 5.0 शुरू हो गई है?", a: "16 अक्टूबर 2026 तक हमें PMKVY 5.0 की आधिकारिक मंज़ूरी की सूचना नहीं मिली। नए बैच Skill India Digital पोर्टल पर देखें।" },
  ],
  related: [
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🛠️", title: "पीएम कौशल विकास योजना", text: "पूरी योजना की जानकारी" },
    { href: "/service/national-apprenticeship-scheme.html", emoji: "🏭", title: "अप्रेंटिसशिप योजना", text: "काम सीखते हुए स्टाइपेंड" },
    { href: "/service/pm-internship-scheme.html", emoji: "💼", title: "PM इंटर्नशिप योजना", text: "बड़ी कंपनियों में इंटर्नशिप" },
    { href: "/service/swayam-nptel-free-courses.html", emoji: "🎓", title: "SWAYAM NPTEL", text: "मुफ्त ऑनलाइन कोर्स" },
    { href: "/service/ncs-national-career-service.html", emoji: "🔎", title: "नेशनल करियर सर्विस", text: "नौकरी खोजें" },
  ],
  aside: [
    { href: "https://www.skillindiadigital.gov.in/", label: "🎓 Skill India Digital" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
