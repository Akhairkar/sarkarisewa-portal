import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): myScheme (api.myscheme.gov.in, slug "myyyt":
// Mukhyamantri Yuba Yogayog Yojana-Special, Directorate/Department of
// Information Technology, Govt of Tripura; Rs 5,000 or phone cost whichever is
// lower, DBT, once in a lifetime; eligibility for AY 2022-23: Tripura ration
// card, final-year UG in a Government college/institute/university in Tripura,
// passed previous year; apply on bms.tripura.gov.in), Vikaspedia scheme page,
// UNI news (Rs 6.23 crore for AY 2024-25, 12,478 final-year students in govt
// colleges), Careers360 2020 (launch, Rs 5,000 for smartphones). The
// application window for the current academic year was not confirmed.
export const tripuraYubaYogayogYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "त्रिपुरा", href: "/states/tripura.html" },
    { label: "युवा योगायोग योजना" },
  ],
  docHi: "मुख्यमंत्री युवा योगायोग योजना",
  title: "Yuba Yogayog Yojana",
  description: "त्रिपुरा मुख्यमंत्री युवा योगायोग योजना: सरकारी कॉलेज के अंतिम वर्ष के स्नातक छात्रों को स्मार्टफोन के लिए ₹5,000 तक। पात्रता, कागज़ और BMS पोर्टल पर आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "त्रिपुरा मुख्यमंत्री युवा योगायोग योजना: स्मार्टफोन के लिए ₹5,000 तक की सहायता",
  lead: "मुख्यमंत्री युवा योगायोग योजना (Mukhyamantri Yuba Yogayog Yojana) त्रिपुरा सरकार के सूचना प्रौद्योगिकी निदेशालय की योजना है। इसमें त्रिपुरा के सरकारी कॉलेज/संस्थान/विश्वविद्यालय में <strong>स्नातक (UG) अंतिम वर्ष</strong> के छात्रों को स्मार्टफोन खरीदने के लिए <strong>₹5,000 या फोन की कीमत, जो कम हो</strong>, सीधे बैंक खाते में मिलती है। छात्र पहले फोन खरीदता है, फिर बिल के साथ BMS पोर्टल पर आवेदन करता है।",
  facts: [
    ["राज्य", "त्रिपुरा"],
    ["राशि", "₹5,000 या फोन की कीमत, जो कम हो (जीवन में एक बार)"],
    ["किसके लिए", "सरकारी कॉलेज के UG अंतिम वर्ष के छात्र"],
    ["आवेदन", "bms.tripura.gov.in"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      intro: "myScheme पर दी गई शर्तें (शैक्षणिक वर्ष 2022-23 के दिशानिर्देश):",
      list: [
        "छात्र त्रिपुरा का हो और उसका नाम <strong>त्रिपुरा के राशन कार्ड</strong> में दर्ज हो",
        "त्रिपुरा के <strong>सरकारी</strong> कॉलेज/संस्थान/विश्वविद्यालय में स्नातक के अंतिम वर्ष में पढ़ रहा हो",
        "पिछला वर्ष/सेमेस्टर पास किया हो",
        "फोन छात्र या उसके माता-पिता के नाम पर खरीदा गया हो, तय तारीख के बाद (2022-23 के लिए 1 जुलाई 2022 या बाद)",
      ],
      callout: { kind: "info", html: "हर शैक्षणिक वर्ष के लिए योजना अलग से खुलती है और फोन खरीदने की तारीख की शर्त बदलती है। 2024-25 में सरकार ने 12,478 छात्रों के लिए ₹6.23 करोड़ से ज़्यादा जारी किए थे (समाचार रिपोर्ट)।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "स्मार्टफोन का <strong>GST बिल</strong> (इनवॉइस नंबर, तारीख, राशि, दुकान का GSTIN) और फोन का IMEI नंबर",
        "कॉलेज का प्रमाण, जैसे प्रिंसिपल/संस्थान प्रमुख के हस्ताक्षर वाला दस्तावेज़",
        "12 अंकों का राशन कार्ड नंबर",
        "बैंक खाते का विवरण (बैंक, खाता नंबर, IFSC)",
        "फोटो (JPG, 2 MB तक); बाकी कागज़ PDF में, 2 MB तक",
      ],
    },
    {
      id: "avedan",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        '<a href="https://bms.tripura.gov.in/" target="_blank" rel="noopener nofollow">bms.tripura.gov.in</a> (Beneficiary Management System) खोलें और "Citizen" चुनें।',
        "\"Beneficiary Schemes\" में Mukhyamantri Yuba Yogayog Yojana (उस साल का) चुनकर \"Enroll\" करें।",
        "नए उपयोगकर्ता \"New User? Register\" से नाम, मोबाइल और ईमेल डालकर OTP से रजिस्टर करें।",
        "राशन कार्ड नंबर डालें, परिवार की सूची से अपना नाम चुनें, पता और बैंक विवरण भरें।",
        "कॉलेज, साल, बिल और IMEI की जानकारी भरें; कागज़ अपलोड करें और सबमिट करें। पावती (acknowledgement) संभाल कर रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन की आखिरी तारीख कॉलेज और पोर्टल पर बताई जाती है। अपने कॉलेज के नोटिस बोर्ड/वेबसाइट पर नज़र रखें।" },
    },
  ],
  official: [
    { href: "https://bms.tripura.gov.in/", title: "Beneficiary Management System, त्रिपुरा", note: "आवेदन और स्टेटस" },
    { href: "https://www.myscheme.gov.in/schemes/myyyt", title: "myScheme: Mukhyamantri Yuba Yogayog Yojana-Special" },
  ],
  faq: [
    { q: "युवा योगायोग योजना में कितने पैसे मिलते हैं?", a: "स्मार्टफोन के लिए ₹5,000 या फोन की कीमत, जो भी कम हो। यह जीवन में एक बार DBT से बैंक खाते में आता है।" },
    { q: "क्या प्राइवेट कॉलेज के छात्र पात्र हैं?", a: "दिशानिर्देशों के अनुसार यह योजना त्रिपुरा के सरकारी कॉलेज/संस्थान/विश्वविद्यालय के UG अंतिम वर्ष के छात्रों के लिए है।" },
    { q: "क्या सरकार फोन देती है?", a: "नहीं। छात्र खुद फोन खरीदता है और GST बिल के साथ आवेदन करने पर राशि बैंक खाते में आती है।" },
    { q: "आवेदन कहां होता है?", a: "त्रिपुरा सरकार के Beneficiary Management System पोर्टल bms.tripura.gov.in पर।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति आवेदन" },
    { href: "/service/tripura-vande-tripura.html", emoji: "📺", title: "वंदे त्रिपुरा", text: "शैक्षिक टीवी चैनल" },
    { href: "/service/tripura-ration-card.html", emoji: "🍚", title: "राशन कार्ड (त्रिपुरा)", text: "आवेदन में राशन कार्ड नंबर लगता है" },
    { href: "/service/tripura-domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र (त्रिपुरा)", text: "राज्य की योजनाओं के लिए" },
    { href: "/states/tripura.html", emoji: "🗺️", title: "त्रिपुरा की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://bms.tripura.gov.in/", label: "🌐 BMS पोर्टल पर आवेदन" },
    { href: "/states/tripura.html", label: "🗺️ त्रिपुरा की सेवाएं" },
  ],
};
