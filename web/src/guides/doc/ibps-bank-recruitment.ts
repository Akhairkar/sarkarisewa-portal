import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; ibps.in not reachable from the sandbox,
// search-result extracts of coverage of the official notifications used):
// CRP PO/MT-XVI: pw.live, sreedharscce.com, indianpaycalculator.in,
// hellobanker.in (notification 30 June 2026, online application 1-21 July
// 2026, 6,715 posts initially, later reported revised upward with UCO Bank's
// 200 posts; age 20-30 as on 01.07.2026; fee ₹850 General/OBC/EWS, ₹175
// SC/ST/PwBD; prelims 22-23 Aug 2026, mains 4 Oct 2026). CRP CSA-XVI (Clerk):
// careers360, Free Press Journal, sreedharscce.com (registration 1-21 Aug
// 2026 on ibps.in, prelims 10-11 Oct 2026, mains 27 Dec 2026 (tentative),
// about 11,403 posts in 11 public sector banks as reported, LPT, no
// interview; age 20-28 from one source). Exact final vacancies and clerk age
// limits should be checked in the official PDF; the page says so.
export const ibpsBankRecruitment: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/index.html" },
    { label: "IBPS बैंक भर्ती" },
  ],
  docHi: "IBPS बैंक भर्ती",
  title: "आईबीपीएस बैंक भर्ती (पीओ/क्लर्क) 2026",
  description: "सार्वजनिक क्षेत्र के बैंकों में प्रोबेशनरी ऑफिसर और क्लर्क पदों के लिए आईबीपीएस द्वारा आयोजित सामान्य भर्ती प्रक्रिया।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "IBPS बैंक भर्ती 2026: PO और क्लर्क की योग्यता, उम्र, फीस, परीक्षा तारीखें",
  lead: "IBPS (Institute of Banking Personnel Selection) सरकारी (सार्वजनिक क्षेत्र के) बैंकों में PO (प्रोबेशनरी ऑफिसर/मैनेजमेंट ट्रेनी) और क्लर्क (Customer Service Associate) की साझा भर्ती परीक्षा कराता है। 2026 में PO (CRP PO/MT-XVI) के आवेदन 1 से 21 जुलाई और क्लर्क (CRP CSA-XVI) के आवेदन 1 से 21 अगस्त 2026 तक ibps.in पर हुए; दोनों के आवेदन अब बंद हैं। दोनों के लिए किसी भी विषय में ग्रेजुएशन ज़रूरी है।",
  facts: [
    ["आवेदन", '<a href="https://www.ibps.in/" target="_blank" rel="noopener nofollow">ibps.in</a> (सिर्फ ऑनलाइन)'],
    ["योग्यता", "किसी भी विषय में ग्रेजुएशन"],
    ["उम्र (PO 2026)", "20-30 साल (1 जुलाई 2026 को)"],
    ["फीस (PO 2026)", "₹850; SC/ST/PwBD ₹175"],
  ],
  notice: "15 अक्टूबर 2026 तक: PO 2026 और क्लर्क 2026, दोनों के आवेदन बंद हो चुके हैं। रिजल्ट, एडमिट कार्ड और अगली भर्ती की सूचना सिर्फ ibps.in पर देखें।",
  sections: [
    {
      id: "2026",
      title: "IBPS 2026 भर्ती: एक नज़र में",
      table: {
        head: ["", "PO/MT (CRP PO/MT-XVI)", "क्लर्क (CRP CSA-XVI)"],
        rows: [
          ["आवेदन", "1-21 जुलाई 2026", "1-21 अगस्त 2026"],
          ["पद (रिपोर्ट के अनुसार)", "6,715 (बाद में बढ़ाए गए)", "लगभग 11,403"],
          ["उम्र", "20-30 साल (1.7.2026 को)", "आमतौर पर 20-28 साल (नोटिफिकेशन में देखें)"],
          ["प्रीलिम्स", "22-23 अगस्त 2026", "10-11 अक्टूबर 2026"],
          ["मेन्स", "4 अक्टूबर 2026", "27 दिसंबर 2026 (संभावित)"],
          ["आगे", "इंटरव्यू", "स्थानीय भाषा परीक्षा (LPT), इंटरव्यू नहीं"],
        ],
      },
      callout: { kind: "info", html: "पदों की संख्या बैंक बाद में बदलते रहते हैं। अंतिम संख्या, राज्यवार पद और आरक्षण ibps.in पर जारी आधिकारिक नोटिफिकेशन/अपडेट में ही देखें।" },
    },
    {
      id: "yogyata",
      title: "योग्यता और उम्र में छूट",
      list: [
        "भारत का नागरिक (कुछ विशेष श्रेणियां नोटिफिकेशन के अनुसार)।",
        "किसी मान्यता प्राप्त विश्वविद्यालय से <strong>किसी भी विषय में ग्रेजुएशन</strong>; आवेदन के अंतिम दिन तक परिणाम आ चुका हो।",
        "कंप्यूटर का कामकाजी ज्ञान। क्लर्क में जिस राज्य के लिए आवेदन, उसकी स्थानीय भाषा पढ़ना-लिखना-बोलना आना चाहिए।",
        "ऊपरी उम्र में छूट: SC/ST 5 साल, OBC (नॉन-क्रीमी लेयर) 3 साल, PwBD 10 साल; बाकी श्रेणियों के लिए नोटिफिकेशन देखें।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>प्रीलिम्स (ऑनलाइन):</strong> अंग्रेज़ी, संख्यात्मक योग्यता (Quant) और रीज़निंग। यह सिर्फ क्वालिफाइंग है।",
        "<strong>मेन्स (ऑनलाइन):</strong> रीज़निंग/कंप्यूटर, सामान्य/बैंकिंग जागरूकता, अंग्रेज़ी, डेटा एनालिसिस। PO में डिस्क्रिप्टिव (निबंध/पत्र) भी।",
        "<strong>PO:</strong> मेन्स के बाद इंटरव्यू; अंतिम मेरिट मेन्स + इंटरव्यू से। <strong>क्लर्क:</strong> इंटरव्यू नहीं; मेन्स के अंकों से मेरिट, फिर स्थानीय भाषा परीक्षा।",
        "<strong>प्रोविज़नल अलॉटमेंट:</strong> मेरिट और पसंद के आधार पर बैंक मिलता है।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें (अगली भर्ती के लिए)",
      steps: [
        '<a href="https://www.ibps.in/" target="_blank" rel="noopener nofollow">ibps.in</a> पर संबंधित CRP (PO/MT या CSA) का लिंक खोलें और <strong>New Registration</strong> करें।',
        "नाम, जन्मतिथि, मोबाइल, ईमेल भरें। प्रोविज़नल रजिस्ट्रेशन नंबर और पासवर्ड संभालें।",
        "फोटो, सिग्नेचर, बाएं अंगूठे का निशान और हाथ से लिखी घोषणा नोटिफिकेशन में दिए आकार में अपलोड करें।",
        "योग्यता, परीक्षा केंद्र और (क्लर्क में) राज्य चुनें।",
        "ऑनलाइन फीस भरें और अंतिम फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "IBPS या बैंक में \"सेटिंग\" से नौकरी दिलाने का दावा करने वाले ठग होते हैं। IBPS भर्ती सिर्फ परीक्षा और मेरिट से होती है; फीस सिर्फ ibps.in पर ऑनलाइन जमा होती है।" },
    },
    {
      id: "aur",
      title: "IBPS की दूसरी भर्तियां",
      list: [
        "<strong>CRP RRB:</strong> ग्रामीण बैंकों में ऑफिस असिस्टेंट (मल्टीपर्पज़) और ऑफिसर स्केल I, II, III।",
        "<strong>CRP SPL (SO):</strong> IT, कृषि, लॉ, HR, मार्केटिंग जैसे विशेषज्ञ अधिकारी पद।",
        "SBI अपनी PO और क्लर्क भर्ती खुद करता है, IBPS से नहीं।",
      ],
    },
  ],
  official: [
    { href: "https://www.ibps.in/", title: "IBPS आधिकारिक वेबसाइट", note: "नोटिफिकेशन, आवेदन, एडमिट कार्ड, रिजल्ट" },
  ],
  faq: [
    { q: "IBPS PO 2026 का आवेदन कब तक था?", a: "1 से 21 जुलाई 2026 तक ibps.in पर। आवेदन अब बंद है; प्रीलिम्स 22-23 अगस्त और मेन्स 4 अक्टूबर 2026 को बताई गई थी।" },
    { q: "IBPS क्लर्क 2026 की परीक्षा कब है?", a: "आवेदन 1 से 21 अगस्त 2026 तक हुए। प्रीलिम्स 10-11 अक्टूबर 2026 को और मेन्स 27 दिसंबर 2026 को (संभावित) बताई गई है। ताज़ा तारीख ibps.in पर देखें।" },
    { q: "IBPS PO की उम्र सीमा क्या है?", a: "2026 भर्ती में 1 जुलाई 2026 को 20 से 30 साल। SC/ST को 5 साल, OBC (NCL) को 3 साल और PwBD को 10 साल की छूट।" },
    { q: "IBPS की फीस कितनी है?", a: "PO 2026 में सामान्य/OBC/EWS के लिए ₹850 और SC/ST/PwBD के लिए ₹175। हर भर्ती की फीस उसके नोटिफिकेशन में देखें।" },
    { q: "क्या IBPS क्लर्क में इंटरव्यू होता है?", a: "नहीं। क्लर्क में प्रीलिम्स और मेन्स के बाद स्थानीय भाषा परीक्षा होती है; इंटरव्यू नहीं होता। PO में इंटरव्यू होता है।" },
  ],
  related: [
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "CGL, CHSL, MTS, GD" },
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "🎓", title: "SSC CGL 2026", text: "ग्रेजुएट स्तर की भर्ती" },
    { href: "/service/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS", text: "10वीं पास डाक सेवक भर्ती" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो छोटा करें" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़ ठीक करें" },
  ],
  aside: [
    { href: "https://www.ibps.in/", label: "🏦 ibps.in खोलें" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
