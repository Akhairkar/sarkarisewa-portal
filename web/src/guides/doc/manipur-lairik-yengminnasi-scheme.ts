import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): no official source (myScheme, Manipur
// department sites, news) uses the name "Lairik Yengminnasi"; searches only
// returned unrelated news. Closest verified scheme: myScheme cmlh-prem "CM's
// Lairik Heiminnashi Programme (CMLH): Pre-Matric Remedial Coaching" (Govt of
// Manipur, OBC & SC Department; free 6-month remedial coaching in English,
// Mathematics and Science for Class 8-10 BOSEM students from minority, OBC or
// SC communities in government/aided institutions; merit list by economic +
// academic rank; at least 30% seats for girls; coaching centres empanelled),
// citing manipurobcsc.mn.gov.in (empanelment notice for pre-matric and
// post-matric remedial coaching under CM's Lairik Heiminashi Programme).
// UNI / state budget report 2025-26 (10 coaching centres, 1,040 OBC and SC
// students) is secondary and not used for numbers. Old page linked
// eservicesmanipur.gov.in without scheme details.
export const manipurLairikYengminnasiScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मणिपुर", href: "/states/manipur.html" },
    { label: "लाइरिक योजना (शिक्षा)" },
  ],
  docHi: "लाइरिक योजना (मणिपुर)",
  title: "Lairik Yengminnasi Scheme",
  description: "\"Lairik Yengminnasi\" नाम की मणिपुर योजना का सरकारी स्रोत नहीं मिला। मिलती-जुलती सरकारी योजना CM's Lairik Heiminnashi Programme: कक्षा 8-10 के OBC, SC व अल्पसंख्यक छात्रों को मुफ्त कोचिंग।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "Lairik Yengminnasi योजना (मणिपुर): सरकारी स्थिति और असली योजना CM's Lairik Heiminnashi Programme",
  lead: "हमें मणिपुर सरकार, myScheme पोर्टल या समाचारों में \"Lairik Yengminnasi\" नाम की कोई योजना नहीं मिली। इसी तरह के नाम वाली सरकारी योजना <strong>CM's Lairik Heiminnashi Programme (CMLH)</strong> है, जिसमें मणिपुर के सरकारी/सहायता प्राप्त स्कूलों के कक्षा 8 से 10 के अल्पसंख्यक, OBC और SC छात्रों को अंग्रेज़ी, गणित और विज्ञान की 6 महीने की मुफ्त कोचिंग मिलती है।",
  facts: [
    ["असली योजना", "CM's Lairik Heiminnashi Programme (CMLH)"],
    ["विभाग", "OBC और SC कल्याण विभाग, मणिपुर"],
    ["किसके लिए", "कक्षा 8-10 (BOSEM), अल्पसंख्यक/OBC/SC छात्र"],
    ["लाभ", "6 महीने मुफ्त कोचिंग (अंग्रेज़ी, गणित, विज्ञान)"],
  ],
  notice: "\"Lairik Yengminnasi\" के नाम पर कोई फॉर्म, फीस या ऑनलाइन आवेदन की बात करे तो पहले अपने स्कूल या संबंधित विभाग से पुष्टि करें। इस नाम की योजना का सरकारी स्रोत हमें नहीं मिला।",
  sections: [
    {
      id: "cmlh",
      title: "CM's Lairik Heiminnashi Programme क्या है",
      intro: "यह मणिपुर सरकार की उपचारात्मक कोचिंग (remedial coaching) योजना है, जो पढ़ाई में कमज़ोर छात्रों को बेहतर अंक लाने में मदद करती है।",
      list: [
        "कोचिंग <strong>मुफ्त</strong> है; पैसा सीधे सूचीबद्ध कोचिंग केंद्र को मिलता है, छात्र को नहीं",
        "विषय: <strong>अंग्रेज़ी, गणित और विज्ञान</strong>",
        "हर कक्षा के लिए कोचिंग <strong>6 महीने</strong> की",
        "कोचिंग केंद्र: सरकारी स्कूल, मान्यता प्राप्त निजी स्कूल या पंजीकृत कोचिंग संस्थान, जिन्हें विभाग चुनता है",
        "विभाग ने प्री-मैट्रिक और पोस्ट-मैट्रिक दोनों तरह की उपचारात्मक कोचिंग के लिए केंद्रों का पैनल बनाने की सूचना जारी की है",
      ],
    },
    {
      id: "patrata",
      title: "कौन छात्र पात्र है (प्री-मैट्रिक कोचिंग)",
      list: [
        "मणिपुर माध्यमिक शिक्षा बोर्ड (BOSEM) के तहत <strong>कक्षा 8, 9 या 10</strong> में पढ़ रहा छात्र",
        "<strong>अल्पसंख्यक, OBC या SC</strong> समुदाय से",
        "सरकारी या सरकारी सहायता प्राप्त संस्थान में पढ़ाई",
        "पढ़ाई में कमज़ोर (योजना ऐसे छात्रों के लिए है)",
      ],
      callout: { kind: "info", html: "कम से कम <strong>30% सीटें छात्राओं</strong> के लिए आरक्षित हैं। जो छात्राएं इन सीटों में न आ पाएं, उन्हें बाकी 70% सीटों में भी मौका मिलता है।" },
    },
    {
      id: "chayan",
      title: "छात्रों का चयन कैसे होता है",
      steps: [
        "परिवार की आय के बढ़ते क्रम में \"आर्थिक रैंक\" बनती है (कम आय = ऊपर)।",
        "पिछली कक्षा की अंतिम परीक्षा के अंकों के बढ़ते क्रम में \"शैक्षणिक रैंक\" बनती है (योजना कमज़ोर छात्रों के लिए है)।",
        "दोनों रैंक जोड़कर अंतिम रैंक बनती है और उसी से चयन होता है।",
        "चयन नोडल विभाग/निदेशालय या उसकी कार्यान्वयन एजेंसी करती है।",
      ],
    },
    {
      id: "kaise",
      title: "जानकारी और आवेदन कहां से",
      list: [
        "अपने स्कूल के प्रधानाध्यापक से पूछें कि आपके इलाके में CMLH कोचिंग केंद्र और चयन कब है।",
        "OBC और SC कल्याण निदेशालय / अल्पसंख्यक मामलों का निदेशालय, मणिपुर (सिक्योर्ड ऑफिस कॉम्प्लेक्स, साउथ ब्लॉक, AT लाइंस, इम्फाल) से संपर्क करें।",
        "विभाग की सूचनाएं <a href=\"https://manipurobcsc.mn.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">manipurobcsc.mn.gov.in</a> पर आती हैं।",
      ],
      callout: { kind: "ok", html: "छात्रवृत्ति के लिए <a href=\"/service/national-scholarship-portal.html\">राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)</a> और मणिपुर की राज्य छात्रवृत्तियां अलग से देखें।" },
    },
  ],
  official: [
    { href: "https://manipurobcsc.mn.gov.in/", title: "OBC और SC कल्याण विभाग, मणिपुर", note: "CMLH कोचिंग की सूचनाएं" },
    { href: "https://www.myscheme.gov.in/schemes/cmlh-prem", title: "myScheme: CM's Lairik Heiminnashi Programme (Pre-Matric Remedial Coaching)" },
  ],
  faq: [
    { q: "क्या Lairik Yengminnasi नाम की कोई सरकारी योजना है?", a: "15 अक्टूबर 2026 तक हमें मणिपुर सरकार, myScheme या समाचारों में इस नाम की योजना नहीं मिली। मिलती-जुलती सरकारी योजना CM's Lairik Heiminnashi Programme (CMLH) है।" },
    { q: "CM's Lairik Heiminnashi Programme में क्या मिलता है?", a: "कक्षा 8 से 10 के पात्र छात्रों को अंग्रेज़ी, गणित और विज्ञान की 6 महीने की मुफ्त कोचिंग, सूचीबद्ध कोचिंग केंद्रों में।" },
    { q: "कौन पात्र है?", a: "BOSEM के तहत कक्षा 8-10 में पढ़ने वाले अल्पसंख्यक, OBC या SC छात्र, जो सरकारी या सहायता प्राप्त संस्थान में पढ़ते हैं और पढ़ाई में कमज़ोर हैं। कम से कम 30% सीटें छात्राओं के लिए हैं।" },
    { q: "क्या इसमें छात्र के खाते में पैसा आता है?", a: "नहीं। योजना का पैसा कोचिंग केंद्र को किस्तों में मिलता है; छात्र को कोचिंग मुफ्त मिलती है।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "केंद्र और राज्यों की छात्रवृत्ति" },
    { href: "/states/manipur-caste-certificate.html", emoji: "🪪", title: "मणिपुर जाति प्रमाण पत्र", text: "OBC/SC प्रमाण पत्र" },
    { href: "/states/manipur-income-certificate.html", emoji: "💰", title: "मणिपुर आय प्रमाण पत्र", text: "आर्थिक रैंक के लिए" },
    { href: "/service/minority-certificate.html", emoji: "📜", title: "अल्पसंख्यक प्रमाण पत्र", text: "समुदाय का प्रमाण" },
  ],
  aside: [
    { href: "https://manipurobcsc.mn.gov.in/", label: "🌐 OBC-SC विभाग, मणिपुर" },
    { href: "/states/manipur.html", label: "🗺️ मणिपुर की सेवाएं" },
  ],
};
