import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Cabinet (CCEA) decision of 28 June 2023
// approving PM-PRANAM (Programme for Restoration, Awareness, Nourishment and
// Amelioration of Mother Earth) under the Department of Fertilizers; secondary
// summaries of the PIB release and of a June 2025 update (Drishti IAS 6 Jun
// 2025, Vajiram & Ravi, Shankar IAS): 50% of fertilizer subsidy saved by a
// State (vs its 3-year average consumption of chemical fertilizers) passed to
// it as grant; 70% of grant for assets/alternative fertilizer production, 30%
// to reward farmers, panchayats, FPOs/SHGs; no separate budget, funded from
// subsidy savings; tracked on iFMS; period FY 2023-24 to 2025-26. myScheme has
// no PM-PRANAM entry (no individual application). Savings figures and any
// extension beyond 2025-26 were not confirmed officially, so none are given.
export const pmPranamYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम प्रणाम योजना" },
  ],
  docHi: "पीएम प्रणाम योजना",
  title: "पीएम प्रणाम योजना (PM PRANAM Fertilizer Scheme)",
  description: "रासायनिक खाद का उपयोग घटाने वाले राज्यों को बची सब्सिडी का 50% अनुदान देने वाली केंद्र की योजना। किसान के लिए इसमें अलग आवेदन नहीं है; क्या फायदा है और नकली फॉर्म से कैसे बचें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम प्रणाम योजना (PM-PRANAM): राज्यों को खाद की बचत पर अनुदान, किसानों के लिए इसका मतलब",
  lead: "पीएम प्रणाम (PM-PRANAM) केंद्र सरकार की वह योजना है जिसमें जो राज्य रासायनिक खाद का उपयोग घटाता है, उसे बची हुई खाद सब्सिडी का 50% अनुदान के रूप में मिलता है। यह पैसा राज्य सरकार को मिलता है, किसान के खाते में सीधे नहीं आता। इसलिए किसान को इस योजना के लिए कोई ऑनलाइन फॉर्म नहीं भरना होता; जो वेबसाइट या व्यक्ति \"PM-PRANAM आवेदन\" के नाम पर फीस मांगे, उससे सावधान रहें।",
  facts: [
    ["पूरा नाम", "Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth"],
    ["किसे पैसा", "राज्य/केंद्र शासित प्रदेश सरकार (किसान को सीधे नहीं)"],
    ["अनुदान", "बची हुई रासायनिक खाद सब्सिडी का 50%"],
    ["किसान का आवेदन", "कोई अलग आवेदन नहीं"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      intro: "केंद्रीय मंत्रिमंडल ने 28 जून 2023 को इस योजना को मंज़ूरी दी। इसका मकसद रासायनिक खाद (यूरिया, DAP आदि) का ज़रूरत से ज़्यादा इस्तेमाल घटाना और जैविक/प्राकृतिक खेती, नैनो खाद और दूसरी वैकल्पिक खादों को बढ़ावा देना है, ताकि मिट्टी की सेहत सुधरे।",
      list: [
        "हर राज्य की रासायनिक खाद की खपत की तुलना उसके <strong>पिछले 3 साल के औसत</strong> से होती है।",
        "खपत घटने से केंद्र की जितनी सब्सिडी बचती है, उसका <strong>50%</strong> उस राज्य को अनुदान के रूप में दिया जाता है।",
        "योजना का कोई अलग बजट नहीं है; पैसा खाद सब्सिडी की बचत से आता है। खाद का हिसाब उर्वरक विभाग के iFMS सिस्टम से रखा जाता है।",
      ],
    },
    {
      id: "anudan",
      title: "राज्य अनुदान का पैसा कहां खर्च करते हैं",
      table: {
        head: ["हिस्सा", "किस पर खर्च"],
        rows: [
          ["70%", "वैकल्पिक खाद बनाने और उससे जुड़ी संपत्ति (जैसे जैविक खाद इकाइयां) गांव, ब्लॉक और ज़िला स्तर पर"],
          ["30%", "खाद की खपत घटाने और जागरूकता फैलाने वाले किसानों, पंचायतों, किसान उत्पादक संगठनों (FPO) और स्वयं सहायता समूहों को प्रोत्साहन"],
        ],
      },
      callout: { kind: "info", html: "किसानों या पंचायतों को प्रोत्साहन कैसे और किसे मिलेगा, यह <strong>राज्य सरकार</strong> तय करती है। अपने ज़िला कृषि अधिकारी से पूछें कि आपके राज्य में ऐसा कोई कार्यक्रम चल रहा है या नहीं।" },
    },
    {
      id: "kisan",
      title: "किसान के लिए इसका क्या मतलब है",
      list: [
        "<strong>कोई सीधा पैसा या फॉर्म नहीं:</strong> PM-PRANAM के नाम से किसान के लिए कोई राष्ट्रीय पंजीकरण पोर्टल नहीं है।",
        "<strong>मिट्टी जांच के हिसाब से खाद डालें:</strong> ज़रूरत से ज़्यादा यूरिया डालने से खर्च बढ़ता है और मिट्टी खराब होती है।",
        "<strong>वैकल्पिक खाद:</strong> जैविक खाद, वर्मी कम्पोस्ट, जैव उर्वरक और नैनो यूरिया/नैनो DAP के बारे में कृषि विज्ञान केंद्र (KVK) या कृषि विभाग से सलाह लें।",
        "राज्य अपने अनुदान से किसानों के लिए प्रशिक्षण या प्रोत्साहन कार्यक्रम चला सकते हैं; इनकी जानकारी कृषि विभाग से मिलेगी।",
      ],
      callout: { kind: "warn", html: "\"PM-PRANAM योजना में रजिस्ट्रेशन करो, सब्सिडी मिलेगी\" कहकर फीस या OTP मांगने वाले लोग ठग हो सकते हैं। ठगी होने पर साइबर हेल्पलाइन <strong>1930</strong> पर शिकायत करें।" },
    },
    {
      id: "avadhi",
      title: "योजना की अवधि",
      list: [
        "योजना वित्त वर्ष <strong>2023-24 से 2025-26</strong> (तीन साल) के लिए मंज़ूर हुई थी।",
        "15 अक्टूबर 2026 तक इसकी आगे की अवधि की कोई आधिकारिक घोषणा हमें नहीं मिली। ताज़ा जानकारी उर्वरक विभाग या PIB पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://fert.gov.in/", title: "उर्वरक विभाग, रसायन एवं उर्वरक मंत्रालय" },
    { href: "https://pib.gov.in/", title: "PIB: केंद्र सरकार की प्रेस विज्ञप्तियां" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  faq: [
    { q: "क्या पीएम प्रणाम योजना में किसान को पैसा मिलता है?", a: "सीधे नहीं। अनुदान राज्य सरकार को मिलता है। उसका 30% हिस्सा राज्य खाद की खपत घटाने वाले किसानों, पंचायतों, FPO और स्वयं सहायता समूहों को प्रोत्साहन देने में खर्च कर सकता है।" },
    { q: "पीएम प्रणाम योजना का ऑनलाइन आवेदन कहां होता है?", a: "किसानों के लिए इस योजना में कोई अलग ऑनलाइन आवेदन नहीं है। यह केंद्र और राज्यों के बीच की योजना है।" },
    { q: "राज्य को कितना अनुदान मिलता है?", a: "राज्य की रासायनिक खाद की खपत पिछले 3 साल के औसत से जितनी घटती है, उससे बची केंद्रीय सब्सिडी का 50%।" },
    { q: "PM-PRANAM का पूरा नाम क्या है?", a: "PM Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth, यानी धरती माता के पुनर्स्थापन, जागरूकता, पोषण और सुधार का कार्यक्रम।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान सम्मान निधि", text: "₹6,000 सालाना सहायता" },
    { href: "/service/pm-kusam-solar-pump-apply.html", emoji: "☀️", title: "पीएम कुसुम सोलर पंप", text: "सिंचाई के लिए सोलर पंप" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "खेती के लिए सस्ता कर्ज़" },
    { href: "/service/pm-fasal-bima-yojana.html", emoji: "🌧️", title: "पीएम फसल बीमा योजना", text: "फसल नुकसान पर बीमा" },
  ],
  aside: [
    { href: "https://fert.gov.in/", label: "🌱 उर्वरक विभाग" },
    { href: "/yojana/", label: "📜 सभी सरकारी योजनाएं" },
  ],
};
