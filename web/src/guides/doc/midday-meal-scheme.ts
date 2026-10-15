import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; pmposhan.education.gov.in not reachable from
// the sandbox, search-result extracts used): PIB release hosted on
// dsel.education.gov.in (PIB2120666, April 2025: material cost raised 9.5%
// from 1 May 2025 to Rs 6.78 per child per day for Balvatika/primary and
// Rs 10.17 for upper primary (from Rs 6.19 / Rs 9.29); these are minimum
// mandatory rates, states/UTs may add more; one hot cooked meal to 11.20 crore
// students of Balvatika and classes I-VIII in 10.36 lakh Government and
// Government-aided schools), pmposhan.education.gov.in/PAB_PM_POSHAN.html
// (scheme approved up to 2025-26; Finance Ministry extended schemes ending
// 31.03.2026 up to 30.09.2026 or approval for the 16th FC cycle, whichever is
// earlier; next cycle 2026-27 to 2030-31 due for appraisal), Cabinet approval
// Sept 2021 (PIB via Vikaspedia/Tribune: 2021-22 to 2025-26, renamed PM
// POSHAN). Approval of the 2026-31 cycle and a breakfast component were not
// confirmed and are described as pending/proposed. Nutrition norms (450 kcal
// and 12 g protein primary; 700 kcal and 20 g protein upper primary) are the
// long-standing scheme norms.
export const middayMealScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "पीएम पोषण (मिड-डे मील)" },
  ],
  docHi: "पीएम पोषण (मिड-डे मील)",
  title: "पीएम पोषण (मध्याह्न भोजन योजना) 2026",
  description: "पोषण और स्कूल उपस्थिति में सुधार के लिए सरकारी और सरकारी-सहायता प्राप्त स्कूलों में बच्चों को मुफ्त, पौष्टिक पका हुआ भोजन प्रदान करती है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम पोषण (मध्याह्न भोजन / मिड-डे मील) योजना: किन बच्चों को खाना मिलता है, कितना पोषण, शिकायत कहां",
  lead: "प्रधानमंत्री पोषण शक्ति निर्माण (PM POSHAN), जिसे पहले मध्याह्न भोजन (मिड-डे मील) योजना कहते थे, केंद्र प्रायोजित योजना है जिसे शिक्षा मंत्रालय राज्यों के साथ मिलकर चलाता है। इसमें सरकारी और सरकारी-सहायता प्राप्त स्कूलों में <strong>बालवाटिका और कक्षा 1 से 8</strong> के बच्चों को स्कूल के दिनों में एक बार गरम पका हुआ खाना मुफ्त मिलता है। इसके लिए कोई आवेदन नहीं करना पड़ता; स्कूल में दाखिला ही काफी है।",
  facts: [
    ["मंत्रालय", "शिक्षा मंत्रालय (स्कूल शिक्षा विभाग)"],
    ["कौन बच्चे", "बालवाटिका और कक्षा 1-8, सरकारी/सहायता प्राप्त स्कूल"],
    ["लाभार्थी", "लगभग 11.20 करोड़ छात्र (PIB, 2025)"],
    ["आवेदन", "ज़रूरी नहीं, स्कूल में मुफ्त"],
  ],
  sections: [
    {
      id: "kaun",
      title: "किसे खाना मिलता है",
      list: [
        "सरकारी और सरकारी-सहायता प्राप्त स्कूलों के <strong>बालवाटिका (प्री-प्राइमरी)</strong> और <strong>कक्षा 1 से 8</strong> के सभी बच्चे",
        "कोई आय सीमा या जाति की शर्त नहीं; दाखिला ही पात्रता है",
        "PIB (अप्रैल 2025) के अनुसार लगभग 10.36 लाख स्कूलों में 11.20 करोड़ छात्र",
      ],
      callout: { kind: "info", html: "प्राइवेट (बिना सरकारी सहायता वाले) स्कूल इस योजना में नहीं आते। कुछ राज्य अपने पैसे से नाश्ता, दूध, अंडा या फल जैसी अतिरिक्त चीज़ें देते हैं।" },
    },
    {
      id: "poshan",
      title: "थाली में कितना पोषण होना चाहिए",
      table: {
        head: ["स्तर", "कैलोरी", "प्रोटीन", "केंद्र की सामग्री लागत (1 मई 2025 से)"],
        rows: [
          ["बालवाटिका और प्राथमिक (कक्षा 1-5)", "450", "12 ग्राम", "₹6.78 प्रति बच्चा प्रति दिन"],
          ["उच्च प्राथमिक (कक्षा 6-8)", "700", "20 ग्राम", "₹10.17 प्रति बच्चा प्रति दिन"],
        ],
      },
      intro: "अनाज केंद्र सरकार देती है। दाल, सब्ज़ी, तेल, मसाले और ईंधन का खर्च \"सामग्री लागत\" (material cost) से होता है, जिसे केंद्र और राज्य मिलकर देते हैं।",
      callout: { kind: "ok", html: "ऊपर की सामग्री लागत न्यूनतम दर है; राज्य अपने बजट से ज़्यादा दे सकते हैं।" },
    },
    {
      id: "abhi",
      title: "2026 में योजना की स्थिति",
      list: [
        "पिछला चक्र 2021-22 से 2025-26 तक मंज़ूर था।",
        "वित्त मंत्रालय ने 31 मार्च 2026 को खत्म होने वाली योजनाओं को 30 सितंबर 2026 तक, या 16वें वित्त आयोग चक्र की मंज़ूरी तक, बढ़ाया था।",
        "2026-27 से 2030-31 के नए चक्र की मंज़ूरी की सरकारी घोषणा हमें 15 अक्टूबर 2026 तक नहीं मिली। स्कूलों में खाना पहले की तरह मिलना चाहिए।",
        "कई राज्यों ने योजना में <strong>नाश्ता</strong> जोड़ने की मांग की है; केंद्र स्तर पर इसकी मंज़ूरी की पुष्टि नहीं हुई है।",
      ],
    },
    {
      id: "shikayat",
      title: "खाना न मिले या खराब हो तो",
      steps: [
        "पहले स्कूल के प्रधानाध्यापक और <strong>स्कूल प्रबंधन समिति (SMC)</strong> को बताएं। अभिभावक SMC की बैठक में मुद्दा उठा सकते हैं।",
        "हल न हो तो ब्लॉक शिक्षा अधिकारी (BEO) या ज़िला शिक्षा अधिकारी/मिड-डे मील प्रभारी से लिखित शिकायत करें।",
        "राज्य के शिकायत पोर्टल/मुख्यमंत्री हेल्पलाइन या केंद्र के <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत दर्ज करें।",
      ],
      callout: { kind: "warn", html: "खाना खाने के बाद बच्चे बीमार पड़ें तो तुरंत नज़दीकी स्वास्थ्य केंद्र ले जाएं और 112 पर सूचना दें।" },
    },
  ],
  official: [
    { href: "https://pmposhan.education.gov.in/", title: "PM POSHAN पोर्टल (शिक्षा मंत्रालय)" },
    { href: "https://dsel.education.gov.in/", title: "स्कूल शिक्षा एवं साक्षरता विभाग" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (केंद्र सरकार शिकायत पोर्टल)" },
  ],
  faq: [
    { q: "मिड-डे मील किन बच्चों को मिलता है?", a: "सरकारी और सरकारी-सहायता प्राप्त स्कूलों में बालवाटिका और कक्षा 1 से 8 के सभी बच्चों को, स्कूल के दिनों में एक बार गरम पका खाना।" },
    { q: "क्या इसके लिए आवेदन करना पड़ता है?", a: "नहीं। स्कूल में दाखिला ही काफी है। कोई फीस या कागज़ नहीं लगता।" },
    { q: "एक बच्चे के खाने पर सरकार कितना देती है?", a: "1 मई 2025 से सामग्री लागत की न्यूनतम दर बालवाटिका/प्राथमिक के लिए ₹6.78 और उच्च प्राथमिक के लिए ₹10.17 प्रति बच्चा प्रति दिन है। अनाज अलग से केंद्र देता है।" },
    { q: "मिड-डे मील और पीएम पोषण में क्या फर्क है?", a: "कोई फर्क नहीं। 2021 में मध्याह्न भोजन योजना का नाम बदलकर प्रधानमंत्री पोषण शक्ति निर्माण (PM POSHAN) रखा गया और इसमें बालवाटिका के बच्चे भी जोड़े गए।" },
  ],
  related: [
    { href: "/service/pm-poshan-shakti-nirman.html", emoji: "🍲", title: "पीएम पोषण शक्ति निर्माण", text: "योजना की दूसरी गाइड" },
    { href: "/service/pm-shri-schools-portal.html", emoji: "🏫", title: "पीएम श्री स्कूल", text: "स्कूल से जुड़ी योजना" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए आवेदन" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "परिवार के लिए मुफ्त अनाज" },
  ],
  aside: [
    { href: "https://pmposhan.education.gov.in/", label: "🍲 PM POSHAN पोर्टल" },
    { href: "https://pgportal.gov.in/", label: "📝 शिकायत (CPGRAMS)" },
  ],
};
