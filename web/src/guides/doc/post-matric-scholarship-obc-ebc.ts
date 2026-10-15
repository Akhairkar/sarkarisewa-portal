import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Rajya Sabha unstarred question annexure
// (education.gov.in RSUQ_534, Feb 2026: PM YASASVI post-matric component for
// OBC, EBC and DNT students, parental income limit ₹2.5 lakh, 60:40
// Centre-State sharing, 30% of funds earmarked for girls, 5% for students
// with disabilities); myScheme scheme page "pm-yasasvipmsobcebcdnts" (via
// search extracts: Ministry of Social Justice & Empowerment, OBC/EBC/DNT as
// notified by Centre/State/UT, domicile of the state, after matriculation,
// income incl. own earnings for employed students; course groups: Group 1
// ₹10,000 academic allowance + up to ₹10,000 fee, Group 2
// ₹8,000 + ₹5,000, Group 3 ₹6,000 + ₹2,000, Group 4 ₹5,000 + nil; states may
// top up); socialwelfare.uk.gov.in PM YASASVI service page (search extract:
// income up to ₹2.5 lakh, Group 4 ₹5,000). scholarships.gov.in 2026-27 list
// on 15 Oct 2026 shows only PM YASASVI Top Class Education (School/College)
// central sector schemes, not the post-matric scheme, which states run.
// Exact state portals, dates and state top-ups were not verified per state.
export const postMatricScholarshipObcEbc: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "पोस्ट-मैट्रिक छात्रवृत्ति OBC/EBC" },
  ],
  docHi: "पोस्ट-मैट्रिक छात्रवृत्ति OBC/EBC",
  title: "उत्तर-मैट्रिक छात्रवृत्ति ओबीसी/ईबीसी (Post-Matric Scholarship)",
  description: "11वीं, 12वीं, आईटीआई, ग्रेजुएशन व पोस्ट ग्रेजुएशन करने वाले पिछड़ा वर्ग के छात्रों को छात्रवृत्ति। PM YASASVI के तहत पात्रता, ₹2.5 लाख आय सीमा, कोर्स के हिसाब से राशि और राज्य पोर्टल पर आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पोस्ट-मैट्रिक छात्रवृत्ति OBC/EBC/DNT (PM YASASVI): पात्रता, राशि और आवेदन",
  lead: "10वीं के बाद पढ़ रहे OBC, EBC (आर्थिक रूप से पिछड़े वर्ग) और DNT (विमुक्त जनजाति) छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति अब केंद्र की PM YASASVI योजना का हिस्सा है। माता-पिता की सालाना आय ₹2.5 लाख तक होनी चाहिए। यह केंद्र प्रायोजित योजना है जिसे राज्य सरकारें चलाती हैं, इसलिए आवेदन आपके राज्य के छात्रवृत्ति पोर्टल या राज्य जिस पोर्टल को तय करे, उस पर होता है और तारीखें राज्य के हिसाब से अलग होती हैं।",
  facts: [
    ["मंत्रालय", "सामाजिक न्याय एवं अधिकारिता मंत्रालय"],
    ["आय सीमा", "₹2.5 लाख सालाना तक"],
    ["राशि", "कोर्स ग्रुप के हिसाब से ₹5,000 से ₹20,000 तक/वर्ष"],
    ["आवेदन", "राज्य का छात्रवृत्ति पोर्टल"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "केंद्र या राज्य/UT सरकार द्वारा अधिसूचित <strong>OBC, EBC या DNT</strong> वर्ग का भारतीय छात्र।",
        "जिस राज्य से आवेदन कर रहे हैं, वहां का <strong>स्थायी निवासी</strong>।",
        "<strong>10वीं (मैट्रिक) पास</strong> करके मान्यता प्राप्त संस्थान में 11वीं, 12वीं, ITI/डिप्लोमा, ग्रेजुएशन, पोस्ट-ग्रेजुएशन या प्रोफेशनल कोर्स कर रहे हों।",
        "माता-पिता/अभिभावक की सभी स्रोतों से सालाना आय <strong>₹2.5 लाख तक</strong>। नौकरी करने वाले छात्र की अपनी कमाई भी जोड़ी जाती है।",
      ],
      callout: { kind: "info", html: "केंद्र के फंड का 30% हिस्सा छात्राओं के लिए और 5% दिव्यांग छात्रों के लिए तय है। खर्च केंद्र और राज्य 60:40 में बांटते हैं।" },
    },
    {
      id: "rashi",
      title: "कितनी छात्रवृत्ति मिलती है",
      intro: "केंद्र के मानकों में कोर्स को चार ग्रुप में बांटा गया है (myScheme पर योजना विवरण के अनुसार):",
      table: {
        head: ["ग्रुप", "कोर्स", "शैक्षणिक भत्ता/वर्ष", "फीस/वर्ष (अधिकतम)"],
        rows: [
          ["ग्रुप 1", "डिग्री और PG प्रोफेशनल कोर्स (जैसे मेडिकल, इंजीनियरिंग)", "₹10,000", "₹10,000"],
          ["ग्रुप 2", "दूसरे प्रोफेशनल कोर्स (डिग्री/डिप्लोमा/सर्टिफिकेट)", "₹8,000", "₹5,000"],
          ["ग्रुप 3", "ग्रुप 1-2 के अलावा ग्रेजुएशन और PG", "₹6,000", "₹2,000"],
          ["ग्रुप 4", "10वीं के बाद के गैर-डिग्री कोर्स (जैसे 11वीं-12वीं, ITI)", "₹5,000", "—"],
        ],
      },
      callout: { kind: "warn", html: "राज्य अपनी तरफ से राशि बढ़ा सकते हैं और कई राज्यों में राशि और नियम अलग हैं। अपने राज्य के पोर्टल पर दी गई दर ही मानें।" },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "अपने राज्य के समाज कल्याण/पिछड़ा वर्ग कल्याण विभाग का छात्रवृत्ति पोर्टल देखें। कुछ राज्य <a href=\"https://scholarships.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">NSP</a> से और कुछ अपने पोर्टल से आवेदन लेते हैं।",
        "पोर्टल पर रजिस्ट्रेशन करें (NSP पर One Time Registration, राज्य पोर्टल पर उसका रजिस्ट्रेशन)।",
        "\"Post Matric Scholarship for OBC/EBC/DNT\" या राज्य में जिस नाम से योजना है, वह चुनकर फॉर्म भरें और कागज़ अपलोड करें।",
        "फॉर्म का प्रिंट लेकर कॉलेज/स्कूल में जमा करें और संस्थान से ऑनलाइन सत्यापन करवाएं।",
        "राज्य/ज़िला स्तर पर जांच के बाद पैसा आधार से जुड़े बैंक खाते में DBT से आता है।",
      ],
      callout: { kind: "ok", html: 'फॉर्म भरने में मदद चाहिए तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> पर जाएं। आखिरी तारीख राज्य के हिसाब से अलग है, इसलिए सत्र शुरू होते ही पोर्टल देखते रहें।' },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "OBC/EBC/DNT जाति या वर्ग प्रमाण पत्र (सक्षम अधिकारी का)",
        "माता-पिता का आय प्रमाण पत्र (राजस्व अधिकारी का; सादे कागज़ पर घोषणा आम तौर पर नहीं चलती)",
        "निवास प्रमाण पत्र",
        "10वीं और पिछली कक्षा की मार्कशीट",
        "दाखिले की रसीद/फीस रसीद और संस्थान का बोनाफाइड प्रमाण पत्र",
        "आधार और छात्र के नाम का आधार से जुड़ा बैंक खाता",
      ],
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>पुराना आय प्रमाण पत्र:</strong> कई राज्य चालू वित्त वर्ष का प्रमाण पत्र मांगते हैं।",
        "<strong>नाम में फर्क:</strong> आधार, मार्कशीट और बैंक खाते में नाम एक जैसा रखें।",
        "<strong>खाता आधार से नहीं जुड़ा:</strong> DBT फेल हो जाता है। बैंक जाकर आधार सीडिंग करवाएं।",
        "<strong>संस्थान सत्यापन छूटना:</strong> फॉर्म सबमिट करने के बाद कॉलेज से समय पर सत्यापन करवाएं।",
        "<strong>दो छात्रवृत्ति एक साथ:</strong> आम तौर पर एक ही पोस्ट-मैट्रिक छात्रवृत्ति मिलती है।",
      ],
    },
  ],
  official: [
    { href: "https://socialjustice.gov.in/", title: "सामाजिक न्याय एवं अधिकारिता मंत्रालय" },
    { href: "https://www.myscheme.gov.in/schemes/pm-yasasvipmsobcebcdnts", title: "myScheme: PM YASASVI पोस्ट-मैट्रिक (OBC/EBC/DNT)" },
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "हेल्पडेस्क 0120-6619540" },
  ],
  faq: [
    { q: "पोस्ट-मैट्रिक OBC छात्रवृत्ति के लिए आय सीमा कितनी है?", a: "PM YASASVI के तहत माता-पिता/अभिभावक की सालाना आय ₹2.5 लाख तक होनी चाहिए। नौकरी करने वाले छात्र की अपनी आय भी जोड़ी जाती है।" },
    { q: "कितनी राशि मिलती है?", a: "केंद्र के मानकों में कोर्स ग्रुप के हिसाब से शैक्षणिक भत्ता ₹5,000 से ₹10,000 और फीस ₹10,000 तक, यानी कुल ₹5,000 से ₹20,000 सालाना। राज्य अपनी दर अलग रख सकते हैं।" },
    { q: "आवेदन NSP पर होगा या राज्य पोर्टल पर?", a: "यह राज्य तय करता है। 15 अक्टूबर 2026 को NSP की केंद्रीय योजना सूची में यह पोस्ट-मैट्रिक योजना नहीं थी; ज़्यादातर राज्य अपने छात्रवृत्ति पोर्टल पर आवेदन लेते हैं। अपने राज्य के पिछड़ा वर्ग/समाज कल्याण विभाग से पुष्टि करें।" },
    { q: "क्या 11वीं-12वीं के छात्र आवेदन कर सकते हैं?", a: "हां, 10वीं के बाद की पढ़ाई (11वीं, 12वीं, ITI आदि) पोस्ट-मैट्रिक में आती है। केंद्र के मानकों में यह ग्रुप 4 में है।" },
    { q: "EBC और DNT का मतलब क्या है?", a: "EBC यानी आर्थिक रूप से पिछड़े वर्ग और DNT यानी विमुक्त, घुमंतू और अर्ध-घुमंतू जनजातियां। कौन किस वर्ग में आता है, यह केंद्र/राज्य की अधिसूचना से तय होता है।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर OTR और आवेदन" },
    { href: "/service/pm-usp-college-scholarship.html", emoji: "📘", title: "PM-USP कॉलेज छात्रवृत्ति", text: "12वीं के मेधावी छात्रों के लिए" },
    { href: "/service/pragati-scholarship-girl-students.html", emoji: "👩‍🎓", title: "AICTE प्रगति छात्रवृत्ति", text: "तकनीकी पढ़ाई वाली छात्राओं के लिए" },
    { href: "/service/up-caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र (उत्तर प्रदेश)", text: "OBC प्रमाण पत्र कैसे बनवाएं" },
    { href: "/service/up-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (उत्तर प्रदेश)", text: "छात्रवृत्ति के लिए आय का प्रमाण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP देखें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
