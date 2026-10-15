import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): diksha.gov.in (home: Textbooks, Videos,
// Interactive Content, Courses, Browse by Subject, quizzes, Login/Register,
// User Guide, "Raise a Query"; mobile app recommended), diksha.gov.in/about
// (initiative of NCERT under the Ministry of Education; launched 2017; adopted
// by almost all States/UTs and boards incl. CBSE; 135 languages — 128 Indian
// and 7 foreign; energized textbooks, teacher professional development,
// question bank, quizzes, digital credentials; 5 crore+ app downloads),
// ncert.nic.in (live). No fees exist; old page's generic helpline dropped.
export const dikshaOnlineLearning: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "छात्र", href: "/students/" },
    { label: "दीक्षा (DIKSHA)" },
  ],
  docHi: "दीक्षा (DIKSHA)",
  title: "दीक्षा — राष्ट्रीय डिजिटल शिक्षण मंच 2026",
  description: "स्कूली छात्रों और शिक्षकों के लिए मुफ्त ई-लर्निंग मंच, जो कई भाषाओं में एनसीईआरटी-संरेखित सामग्री, पाठ्यपुस्तकें, और शिक्षक प्रशिक्षण मॉड्यूल प्रदान करता है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दीक्षा (DIKSHA): किताब का QR कोड स्कैन करें, वीडियो देखें, शिक्षक कोर्स करें",
  lead: "दीक्षा (DIKSHA) स्कूली शिक्षा का राष्ट्रीय डिजिटल मंच है, जिसे शिक्षा मंत्रालय के तहत NCERT चलाता है। diksha.gov.in और DIKSHA ऐप पर कक्षा की पाठ्यपुस्तकें, वीडियो, अभ्यास प्रश्न और क्विज़ मुफ्त हैं। NCERT और कई राज्य बोर्ड की किताबों पर छपा QR कोड स्कैन करते ही उस पाठ की सामग्री खुल जाती है। शिक्षक यहां प्रशिक्षण कोर्स करके डिजिटल प्रमाण पत्र भी ले सकते हैं।",
  facts: [
    ["कौन चलाता है", "NCERT, शिक्षा मंत्रालय"],
    ["वेबसाइट/ऐप", '<a href="https://diksha.gov.in/" target="_blank" rel="noopener nofollow">diksha.gov.in</a>, DIKSHA ऐप'],
    ["शुल्क", "पूरी तरह मुफ्त"],
    ["भाषाएं", "135 (128 भारतीय, 7 विदेशी)"],
  ],
  sections: [
    {
      id: "kya-milta",
      title: "दीक्षा पर क्या-क्या मिलता है",
      table: {
        head: ["सामग्री", "किसके लिए"],
        rows: [
          ["<strong>पाठ्यपुस्तकें (Textbooks)</strong>", "कक्षा और बोर्ड के हिसाब से किताबें और हर पाठ की सामग्री"],
          ["<strong>वीडियो और इंटरैक्टिव सामग्री</strong>", "पाठ समझाने वाले वीडियो, अभ्यास और क्विज़"],
          ["<strong>प्रश्न बैंक</strong>", "परीक्षा की तैयारी के लिए अभ्यास प्रश्न"],
          ["<strong>कोर्स (Courses)</strong>", "शिक्षकों के प्रशिक्षण कोर्स; पूरा करने पर डिजिटल प्रमाण पत्र"],
          ["<strong>विषय के हिसाब से खोज</strong>", "गणित, विज्ञान, हिंदी, अंग्रेज़ी, EVS, व्यावसायिक शिक्षा आदि"],
        ],
      },
    },
    {
      id: "qr-code",
      title: "किताब का QR कोड कैसे स्कैन करें",
      steps: [
        "फोन में Google Play Store/App Store से <strong>DIKSHA</strong> ऐप डाउनलोड करें।",
        "ऐप खोलकर भूमिका चुनें (छात्र, शिक्षक, अभिभावक), फिर अपना <strong>राज्य/बोर्ड, माध्यम (भाषा) और कक्षा</strong> चुनें।",
        "ऐप में <strong>QR कोड स्कैनर</strong> खोलें और किताब के पाठ के पास छपा QR कोड स्कैन करें।",
        "उस पाठ के वीडियो, अभ्यास और दूसरी सामग्री खुल जाएगी। ज़रूरी सामग्री डाउनलोड करके बिना इंटरनेट भी देख सकते हैं।",
      ],
      callout: { kind: "info", html: "ब्राउज़र में भी <a href=\"https://diksha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">diksha.gov.in</a> पर किताबें और वीडियो देख सकते हैं; लॉगिन के बिना भी ज़्यादातर सामग्री खुलती है। कोर्स करने और प्रमाण पत्र के लिए Login/Register ज़रूरी है।" },
    },
    {
      id: "shikshak",
      title: "शिक्षकों के लिए: कोर्स और प्रमाण पत्र",
      steps: [
        "diksha.gov.in या ऐप पर <strong>Login / Register</strong> करें (मोबाइल/ईमेल से); राज्य और स्कूल का विवरण सही भरें।",
        "<strong>Courses</strong> में अपने राज्य या NCERT के कोर्स देखें और Join करें।",
        "सभी मॉड्यूल और आकलन पूरे करें।",
        "कोर्स पूरा होने पर <strong>डिजिटल प्रमाण पत्र</strong> प्रोफ़ाइल में मिलता है, जिसे डाउनलोड कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "राज्य के अनिवार्य प्रशिक्षण के लिए राज्य विभाग जो कोर्स और समय सीमा बताए, वही करें। प्रोफ़ाइल में राज्य/ज़िला गलत होने पर आपका रिकॉर्ड राज्य की रिपोर्ट में नहीं दिखता।" },
    },
    {
      id: "madad",
      title: "दिक्कत आने पर",
      list: [
        "वेबसाइट पर <strong>User Guide</strong> देखें।",
        "\"Need help?\" में <strong>Raise a Query</strong> से अपनी समस्या भेजें।",
        "प्रमाण पत्र न आए तो देखें कि सभी मॉड्यूल 100% पूरे हुए और प्रोफ़ाइल में नाम सही है।",
      ],
    },
  ],
  official: [
    { href: "https://diksha.gov.in/", title: "दीक्षा (DIKSHA) पोर्टल" },
    { href: "https://ncert.nic.in/", title: "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (NCERT)" },
    { href: "https://www.dsel-education.gov.in/", title: "स्कूल शिक्षा और साक्षरता विभाग, शिक्षा मंत्रालय" },
  ],
  faq: [
    { q: "क्या दीक्षा ऐप मुफ्त है?", a: "हां, दीक्षा पर सारी सामग्री, कोर्स और प्रमाण पत्र मुफ्त हैं। यह NCERT का सरकारी मंच है।" },
    { q: "दीक्षा पर किन बोर्ड की किताबें हैं?", a: "NCERT/CBSE और लगभग सभी राज्यों और केंद्र शासित प्रदेशों ने दीक्षा अपनाया है। ऐप में अपना बोर्ड, माध्यम और कक्षा चुनकर उसकी किताबें देखें।" },
    { q: "किताब का QR कोड स्कैन नहीं हो रहा, क्या करें?", a: "DIKSHA ऐप के अंदर वाला स्कैनर इस्तेमाल करें, कैमरे पर रोशनी ठीक रखें और ऐप अपडेट करें। ऐप में सही राज्य/बोर्ड चुना होना चाहिए।" },
    { q: "दीक्षा कोर्स का प्रमाण पत्र कहां मिलेगा?", a: "कोर्स पूरा करने के बाद लॉगिन करके प्रोफ़ाइल में डिजिटल प्रमाण पत्र दिखता है, जहां से डाउनलोड कर सकते हैं।" },
    { q: "क्या बिना इंटरनेट दीक्षा चलता है?", a: "सामग्री एक बार ऐप में डाउनलोड कर लें तो बाद में बिना इंटरनेट देख सकते हैं। कोर्स की प्रगति अपडेट होने के लिए इंटरनेट चाहिए।" },
  ],
  related: [
    { href: "/service/swayam-online-courses.html", emoji: "🎓", title: "स्वयं (SWAYAM)", text: "कॉलेज स्तर के मुफ्त ऑनलाइन कोर्स" },
    { href: "/service/national-scholarship-portal.html", emoji: "💰", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए आवेदन" },
    { href: "/service/manodarpan-student-mental-wellness.html", emoji: "🧠", title: "मनोदर्पण", text: "छात्रों के मानसिक स्वास्थ्य के लिए सहायता" },
    { href: "/service/academic-bank-of-credits.html", emoji: "🏦", title: "एकेडमिक बैंक ऑफ क्रेडिट्स", text: "उच्च शिक्षा के क्रेडिट" },
  ],
  aside: [
    { href: "https://diksha.gov.in/", label: "📚 दीक्षा खोलें" },
    { href: "/students/", label: "🎓 छात्रों के लिए और सेवाएं" },
  ],
};
