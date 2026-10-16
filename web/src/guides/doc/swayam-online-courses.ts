import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): swayam.inflibnet.ac.in and
// ugcmoocs.inflibnet.ac.in/credit_transfer (UGC (Credit Framework for Online
// Learning Courses through SWAYAM) Regulations, 2021: up to 40% of courses of
// a programme in a semester; credits counted only where the university has
// adopted SWAYAM; semesters aligned to January and July); Free Press Journal
// on UGC's July 2026 semester letter (national coordinators NPTEL, UGC, CEC,
// AICTE, NCERT/NIOS, IGNOU, IIM Bangalore, NITTTR, INIs set their own course
// lists and deadlines); Careers360 on Lok Sabha reply (450+ universities have
// adopted credit transfer); NPTEL exam fee ₹1,000 (July 2026, Careers360 /
// PapersAdda). Exam fees of the other coordinators differ by coordinator and
// were not verified, so no figure is given for them.
export const swayamOnlineCourses: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "SWAYAM ऑनलाइन पाठ्यक्रम" },
  ],
  docHi: "SWAYAM ऑनलाइन पाठ्यक्रम",
  title: "स्वयं ऑनलाइन पाठ्यक्रम 2026",
  description: "स्कूल से स्नातकोत्तर स्तर तक मुफ्त ऑनलाइन पाठ्यक्रम प्रदान करने वाला सरकारी MOOC मंच, सशुल्क, क्रेडिट-मान्यता प्राप्त प्रमाणन के विकल्प के साथ।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "SWAYAM ऑनलाइन पाठ्यक्रम 2026: मुफ्त कोर्स, प्रमाणपत्र परीक्षा और डिग्री में क्रेडिट",
  lead: "SWAYAM शिक्षा मंत्रालय का ऑनलाइन पढ़ाई का मंच है, जहां 9वीं कक्षा से लेकर स्नातकोत्तर तक के कोर्स मुफ्त पढ़ सकते हैं। कोर्स NPTEL, UGC, CEC, AICTE, IGNOU, NCERT/NIOS, IIM बैंगलोर, NITTTR जैसे राष्ट्रीय समन्वयक (national coordinators) चलाते हैं। पढ़ाई मुफ्त है; प्रमाणपत्र के लिए परीक्षा फीस देनी होती है, और यूनिवर्सिटी ने SWAYAM अपनाया हो तो क्रेडिट डिग्री में जुड़ते हैं।",
  facts: [
    ["किसका", "शिक्षा मंत्रालय, भारत सरकार"],
    ["पढ़ाई", "मुफ्त"],
    ["सेमेस्टर", "जनवरी और जुलाई से"],
    ["क्रेडिट ट्रांसफर", "एक सेमेस्टर में 40% तक कोर्स (UGC नियम 2021)"],
  ],
  sections: [
    {
      id: "samanvayak",
      title: "कौन से कोर्स कौन चलाता है",
      table: {
        head: ["समन्वयक", "किस तरह के कोर्स"],
        rows: [
          ["NPTEL (IIT/IISc)", "इंजीनियरिंग, विज्ञान, तकनीक, प्रबंधन"],
          ["UGC", "स्नातकोत्तर (PG) के गैर-तकनीकी विषय"],
          ["CEC", "स्नातक (UG) के गैर-तकनीकी विषय"],
          ["AICTE", "स्व-गति वाले तकनीकी/पेशेवर कोर्स"],
          ["IGNOU", "डिप्लोमा/सर्टिफिकेट और दूरस्थ शिक्षा वाले विषय"],
          ["NCERT और NIOS", "स्कूल (9वीं से 12वीं) के विषय"],
          ["IIM बैंगलोर", "प्रबंधन"],
          ["NITTTR", "शिक्षक प्रशिक्षण"],
        ],
      },
      callout: { kind: "info", html: "हर समन्वयक अपनी कोर्स सूची, नामांकन की अंतिम तारीख, परीक्षा की तारीख और फीस खुद तय करता है। कोर्स पेज पर \"Course Status\", \"Enrollment Ends\" और \"Exam Date\" देखें।" },
    },
    {
      id: "kaise",
      title: "SWAYAM पर कोर्स में नामांकन कैसे करें",
      steps: [
        "<a href=\"https://swayam.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">swayam.gov.in</a> खोलें और \"Sign In/Register\" से ईमेल या मोबाइल से खाता बनाएं।",
        "विषय या कोर्स का नाम खोजें। कोर्स पेज पर अवधि, समन्वयक, क्रेडिट और तारीखें पढ़ें।",
        "\"Join/Enroll Now\" दबाएं और ज़रूरी जानकारी भरें। नामांकन मुफ्त है।",
        "हर हफ्ते वीडियो, पढ़ने की सामग्री और असाइनमेंट पूरे करें।",
        "प्रमाणपत्र/क्रेडिट चाहिए तो समन्वयक के बताए समय पर परीक्षा पंजीकरण करें और फीस भरें।",
      ],
    },
    {
      id: "pariksha",
      title: "प्रमाणपत्र और परीक्षा फीस",
      list: [
        "<strong>मुफ्त पढ़ाई, फीस सिर्फ परीक्षा की:</strong> पढ़ने और असाइनमेंट के लिए पैसा नहीं लगता।",
        "<strong>NPTEL:</strong> जुलाई 2026 सेमेस्टर में परीक्षा फीस ₹1,000 प्रति कोर्स थी (SC/ST या दिव्यांग ₹500)। विस्तार से देखें: <a href=\"/service/swayam-nptel-free-courses.html\">SWAYAM NPTEL कोर्स</a>।",
        "<strong>दूसरे समन्वयक:</strong> परीक्षा फीस और तरीका (केंद्र पर या ऑनलाइन) समन्वयक के अनुसार अलग है; कोर्स पेज या समन्वयक की सूचना देखें।",
        "<strong>प्रमाणपत्र:</strong> असाइनमेंट और परीक्षा के तय न्यूनतम अंक लाने पर ई-प्रमाणपत्र मिलता है।",
      ],
    },
    {
      id: "credit",
      title: "डिग्री में क्रेडिट ट्रांसफर",
      list: [
        "<strong>UGC नियम 2021:</strong> यूनिवर्सिटी किसी कार्यक्रम के एक सेमेस्टर के कुल कोर्स के 40% तक SWAYAM से करने की अनुमति दे सकती है।",
        "<strong>यूनिवर्सिटी की मंज़ूरी ज़रूरी:</strong> क्रेडिट तभी मार्कशीट में गिने जाते हैं जब आपकी यूनिवर्सिटी ने SWAYAM कोर्स को क्रेडिट ट्रांसफर के लिए अपनाया हो। शिक्षा मंत्रालय के अनुसार जुलाई 2026 तक 450 से ज़्यादा यूनिवर्सिटी इसे अपना चुकी हैं।",
        "<strong>पहले कॉलेज से पूछें:</strong> कौन से कोर्स मंज़ूर हैं, यह कॉलेज का SWAYAM नोडल अधिकारी बताएगा। उसी सूची से कोर्स चुनें।",
      ],
    },
    {
      id: "faayde",
      title: "किसके लिए उपयोगी",
      list: [
        "कॉलेज के छात्र जो अतिरिक्त या छूटे विषय के क्रेडिट लेना चाहते हैं",
        "प्रतियोगी परीक्षा या नौकरी के लिए नया विषय सीखने वाले",
        "स्कूल के छात्र (NCERT/NIOS के कोर्स)",
        "शिक्षक, जो प्रशिक्षण कोर्स करना चाहते हैं",
      ],
    },
  ],
  official: [
    { href: "https://swayam.gov.in/", title: "SWAYAM पोर्टल (शिक्षा मंत्रालय)" },
    { href: "https://onlinecourses.nptel.ac.in/", title: "NPTEL ऑनलाइन कोर्स" },
    { href: "https://ugcmoocs.inflibnet.ac.in/", title: "UGC MOOCs", note: "क्रेडिट ट्रांसफर की जानकारी" },
  ],
  faq: [
    { q: "क्या SWAYAM के कोर्स मुफ्त हैं?", a: "हां, नामांकन और पढ़ाई मुफ्त है। प्रमाणपत्र के लिए परीक्षा देनी हो तो समन्वयक की तय फीस लगती है।" },
    { q: "SWAYAM का प्रमाणपत्र कैसे मिलता है?", a: "कोर्स के असाइनमेंट पूरे करें, परीक्षा के लिए पंजीकरण कर फीस भरें और परीक्षा दें। तय न्यूनतम अंक आने पर ई-प्रमाणपत्र मिलता है।" },
    { q: "क्या SWAYAM कोर्स के क्रेडिट मेरी डिग्री में जुड़ेंगे?", a: "अगर आपकी यूनिवर्सिटी ने SWAYAM क्रेडिट ट्रांसफर अपनाया है तो हां, एक सेमेस्टर में 40% तक कोर्स। कॉलेज से कोर्स सूची की पुष्टि करें।" },
    { q: "SWAYAM पर नया सेमेस्टर कब शुरू होता है?", a: "क्रेडिट वाले कोर्स जनवरी और जुलाई के सेमेस्टर के हिसाब से चलते हैं। कुछ स्व-गति वाले कोर्स साल भर खुले रहते हैं।" },
    { q: "क्या स्कूल के छात्र SWAYAM पर पढ़ सकते हैं?", a: "हां, NCERT और NIOS 9वीं से 12वीं के विषयों के कोर्स SWAYAM पर चलाते हैं।" },
  ],
  related: [
    { href: "/service/swayam-nptel-free-courses.html", emoji: "🎓", title: "SWAYAM NPTEL", text: "IIT/IISc के कोर्स और परीक्षा" },
    { href: "/service/academic-bank-of-credits.html", emoji: "🏦", title: "Academic Bank of Credits", text: "APAAR और क्रेडिट" },
    { href: "/service/diksha-online-learning.html", emoji: "📚", title: "DIKSHA", text: "स्कूल की ऑनलाइन पढ़ाई" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए" },
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🛠️", title: "पीएम कौशल विकास योजना", text: "मुफ्त कौशल प्रशिक्षण" },
  ],
  aside: [
    { href: "https://swayam.gov.in/", label: "💻 SWAYAM पोर्टल" },
    { href: "/service/swayam-nptel-free-courses.html", label: "🎓 NPTEL गाइड" },
  ],
};
