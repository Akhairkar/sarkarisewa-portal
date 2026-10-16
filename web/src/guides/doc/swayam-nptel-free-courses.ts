import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): NPTEL July-Dec 2026 semester details as
// reported by Careers360, PapersAdda, CareerIndia and university circulars
// (Brainware University NPTEL guide Aug 2026; Nagaland University SWAYAM
// notice 29.07.2026): enrolment free; proctored exam fee ₹1,000 per course,
// ₹500 for SC/ST or PwD, ₹250 if both, +₹100 for FDP certificate; July 2026
// enrolment closed 27 Jul (Set 1) / 17 Aug (Set 2); exams 9-12 and 2-5,
// max two a day. UGC (Credit Framework for Online Learning Courses through
// SWAYAM) Regulations, 2021 via ugcmoocs.inflibnet.ac.in / university SoPs:
// up to 40% of courses in a semester, credit only if the university adopted
// SWAYAM; semesters start January and July; Lok Sabha reply (July 2026):
// 450+ universities adopted. onlinecourses.nptel.ac.in course pages not
// opened; January 2027 dates not yet found, so none are given. Old page said
// "IIT and IIM professors" — NPTEL is the IITs and IISc; description fixed.
export const swayamNptelFreeCourses: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "SWAYAM NPTEL" },
  ],
  docHi: "SWAYAM NPTEL",
  title: "स्वयं एनपीटीईएल मुफ्त ऑनलाइन कोर्स (SWAYAM NPTEL)",
  description: "IIT और IISc के मुफ्त ऑनलाइन कोर्स: NPTEL पर नामांकन, ₹1,000 की प्रमाणपत्र परीक्षा (SC/ST/दिव्यांग को छूट), सेमेस्टर, और UGC नियमों के तहत 40% तक क्रेडिट ट्रांसफर।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "SWAYAM NPTEL मुफ्त ऑनलाइन कोर्स: नामांकन, परीक्षा फीस, प्रमाणपत्र और क्रेडिट ट्रांसफर",
  lead: "NPTEL (National Programme on Technology Enhanced Learning) IIT और IISc का कार्यक्रम है, जो शिक्षा मंत्रालय के SWAYAM मंच पर इंजीनियरिंग, विज्ञान, प्रबंधन और मानविकी के ऑनलाइन कोर्स चलाता है। कोर्स में नामांकन और पढ़ाई <strong>मुफ्त</strong> है; प्रमाणपत्र चाहिए तो परीक्षा केंद्र पर होने वाली परीक्षा की फीस <strong>₹1,000 प्रति कोर्स</strong> है (SC/ST या दिव्यांग को ₹500)। आपकी यूनिवर्सिटी ने SWAYAM अपनाया है तो इन कोर्स के क्रेडिट डिग्री में जुड़ सकते हैं।",
  facts: [
    ["पढ़ाई", "मुफ्त"],
    ["प्रमाणपत्र परीक्षा", "₹1,000 प्रति कोर्स (SC/ST/दिव्यांग ₹500)"],
    ["सेमेस्टर", "जनवरी-अप्रैल और जुलाई-अक्टूबर"],
    ["क्रेडिट ट्रांसफर", "एक सेमेस्टर में 40% तक कोर्स (UGC नियम 2021)"],
  ],
  sections: [
    {
      id: "kya",
      title: "NPTEL कोर्स कैसे चलते हैं",
      list: [
        "<strong>अवधि:</strong> कोर्स 4, 8 या 12 हफ्ते के होते हैं। हर हफ्ते वीडियो लेक्चर, पढ़ने की सामग्री और असाइनमेंट आते हैं।",
        "<strong>असाइनमेंट:</strong> तय तारीख तक हफ्तेवार असाइनमेंट जमा करने होते हैं; इनके अंक प्रमाणपत्र के कुल अंकों में जुड़ते हैं।",
        "<strong>परीक्षा:</strong> कोर्स के अंत में परीक्षा केंद्र पर निगरानी (proctored) में परीक्षा होती है। एक दिन में दो पाली (सुबह 9-12, दोपहर 2-5) होती हैं और एक दिन में ज़्यादा से ज़्यादा दो परीक्षाएं दे सकते हैं।",
        "<strong>प्रमाणपत्र:</strong> असाइनमेंट और परीक्षा दोनों में न्यूनतम अंक लाने पर ई-प्रमाणपत्र मिलता है, जिस पर IIT/IISc और NPTEL का नाम होता है।",
      ],
    },
    {
      id: "fees",
      title: "परीक्षा फीस (जुलाई 2026 सेमेस्टर)",
      table: {
        head: ["वर्ग", "प्रति कोर्स फीस"],
        rows: [
          ["सामान्य", "₹1,000"],
          ["SC/ST या दिव्यांग (PwD)", "₹500"],
          ["SC/ST और साथ में दिव्यांग", "₹250"],
          ["शिक्षक: FDP प्रमाणपत्र भी चाहिए", "लागू फीस + ₹100"],
        ],
      },
      callout: { kind: "warn", html: "फीस सिर्फ NPTEL पोर्टल पर अपने लॉगिन से भरें। NPTEL के नाम से फोन/WhatsApp पर पैसे मांगने वालों से सावधान रहें।" },
    },
    {
      id: "kaise",
      title: "नामांकन और परीक्षा पंजीकरण कैसे करें",
      steps: [
        "<a href=\"https://swayam.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">swayam.gov.in</a> या <a href=\"https://onlinecourses.nptel.ac.in/\" target=\"_blank\" rel=\"noopener nofollow\">onlinecourses.nptel.ac.in</a> पर ईमेल/Google खाते से लॉगिन करें।",
        "कोर्स खोजें और कोर्स पेज पर अवधि, शुरुआत की तारीख और \"Enrollment ends\" तारीख देखें।",
        "\"Join/Enroll\" पर क्लिक करके नाम, ईमेल और कॉलेज की जानकारी भरें। नामांकन मुफ्त है।",
        "प्रमाणपत्र चाहिए तो परीक्षा पंजीकरण खुलने पर फॉर्म भरें: फोटो, पहचान पत्र, परीक्षा शहर चुनें और फीस भरें।",
        "परीक्षा से पहले हॉल टिकट डाउनलोड करें और परीक्षा केंद्र पर मूल पहचान पत्र लेकर जाएं।",
      ],
      callout: { kind: "info", html: "जुलाई 2026 सेमेस्टर का नामांकन 27 जुलाई (Set 1) और 17 अगस्त 2026 (Set 2) को बंद हो गया। अगला सेमेस्टर जनवरी 2027 में शुरू होगा; उसकी तारीखें NPTEL पोर्टल पर देखें।" },
    },
    {
      id: "credit",
      title: "डिग्री में क्रेडिट कैसे जुड़ते हैं",
      list: [
        "<strong>UGC नियम 2021:</strong> यूनिवर्सिटी एक सेमेस्टर में कार्यक्रम के कुल कोर्स के 40% तक SWAYAM कोर्स से करने दे सकती है।",
        "<strong>शर्त:</strong> क्रेडिट तभी मार्कशीट में जुड़ते हैं जब आपकी यूनिवर्सिटी/कॉलेज ने SWAYAM कोर्स को क्रेडिट ट्रांसफर के लिए अपनाया हो। अपने कॉलेज के SWAYAM-NPTEL नोडल अधिकारी (SPOC) से पूछें।",
        "<strong>Academic Bank of Credits:</strong> क्रेडिट आपके ABC खाते (APAAR ID) में भी दिख सकते हैं, अगर संस्थान उन्हें अपलोड करे।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>असाइनमेंट छूटना:</strong> परीक्षा अच्छी होने पर भी असाइनमेंट के कम अंक से प्रमाणपत्र रुक सकता है।",
        "<strong>नाम की स्पेलिंग:</strong> परीक्षा फॉर्म में नाम वैसा ही लिखें जैसा पहचान पत्र और मार्कशीट में है; यही प्रमाणपत्र पर छपता है।",
        "<strong>तारीख चूकना:</strong> नामांकन और परीक्षा पंजीकरण की अंतिम तारीख अलग-अलग होती है; दोनों कोर्स पेज पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://nptel.ac.in/", title: "NPTEL (IIT और IISc)" },
    { href: "https://onlinecourses.nptel.ac.in/", title: "NPTEL ऑनलाइन कोर्स पोर्टल", note: "नामांकन, असाइनमेंट, परीक्षा पंजीकरण" },
    { href: "https://swayam.gov.in/", title: "SWAYAM (शिक्षा मंत्रालय)" },
  ],
  faq: [
    { q: "क्या NPTEL कोर्स सच में मुफ्त हैं?", a: "हां, नामांकन और वीडियो/सामग्री मुफ्त है। सिर्फ प्रमाणपत्र के लिए परीक्षा देने पर फीस लगती है (जुलाई 2026 सेमेस्टर में ₹1,000 प्रति कोर्स)।" },
    { q: "SC/ST और दिव्यांग छात्रों को कितनी फीस देनी होती है?", a: "₹500 प्रति कोर्स; जो SC/ST होने के साथ दिव्यांग भी हैं उनके लिए ₹250। प्रमाण पत्र अपलोड करना होता है।" },
    { q: "क्या बिना परीक्षा के प्रमाणपत्र मिलता है?", a: "नहीं। NPTEL का प्रमाणपत्र परीक्षा केंद्र पर हुई परीक्षा और असाइनमेंट के अंकों पर मिलता है।" },
    { q: "NPTEL के क्रेडिट डिग्री में जुड़ेंगे?", a: "UGC नियमों के तहत एक सेमेस्टर में 40% तक कोर्स SWAYAM से किए जा सकते हैं, पर क्रेडिट तभी जुड़ते हैं जब आपकी यूनिवर्सिटी ने इसे अपनाया हो। कॉलेज से पहले पूछ लें।" },
    { q: "अगला NPTEL सेमेस्टर कब है?", a: "NPTEL के सेमेस्टर जनवरी और जुलाई में शुरू होते हैं। जनवरी 2027 के कोर्स और तारीखें NPTEL पोर्टल पर जारी होंगी।" },
  ],
  related: [
    { href: "/service/swayam-online-courses.html", emoji: "💻", title: "SWAYAM ऑनलाइन पाठ्यक्रम", text: "सभी समन्वयकों के कोर्स" },
    { href: "/service/academic-bank-of-credits.html", emoji: "🏦", title: "Academic Bank of Credits", text: "APAAR और क्रेडिट" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए" },
    { href: "/service/pm-internship-scheme.html", emoji: "🧑‍💼", title: "पीएम इंटर्नशिप योजना", text: "कंपनियों में इंटर्नशिप" },
    { href: "/service/ncs-national-career-service.html", emoji: "🔎", title: "नेशनल करियर सर्विस", text: "नौकरी खोजें" },
  ],
  aside: [
    { href: "https://onlinecourses.nptel.ac.in/", label: "🎓 NPTEL कोर्स देखें" },
    { href: "https://swayam.gov.in/", label: "💻 SWAYAM पोर्टल" },
  ],
};
