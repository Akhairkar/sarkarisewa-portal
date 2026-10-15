import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): World Bank documents for project P149340
// "Nagaland Health Project" — Project Appraisal Document / 2017 financing
// agreement (IDA credit US$48 million, total US$60 million; original closing
// 31 Mar 2023; implemented by the Department of Health & Family Welfare,
// Nagaland, with communitised health facilities); restructuring paper Dec 2023
// (closing moved from 31 Dec 2023 to 30 Jun 2024; Kohima knowledge centre and
// library to be completed; activities handed to the National Health Mission);
// Implementation Completion and Results Report ICR6087 dated 20 Dec 2024.
// Exact outcome numbers not reproduced.
export const nagalandNagalandHealthProject: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "नागालैंड", href: "/states/nagaland.html" },
    { label: "नागालैंड हेल्थ प्रोजेक्ट" },
  ],
  docHi: "नागालैंड हेल्थ प्रोजेक्ट",
  title: "Nagaland Health Project",
  description: "नागालैंड हेल्थ प्रोजेक्ट विश्व बैंक की मदद से चला स्वास्थ्य सुधार प्रोजेक्ट था, जो 2024 में पूरा हो गया। इसमें आवेदन नहीं होता; इलाज के लिए CMHIS और आयुष्मान भारत देखें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "नागालैंड हेल्थ प्रोजेक्ट (विश्व बैंक): क्या था, अब स्थिति क्या है",
  lead: "नागालैंड हेल्थ प्रोजेक्ट विश्व बैंक की मदद से नागालैंड सरकार के स्वास्थ्य एवं परिवार कल्याण विभाग का प्रोजेक्ट था, जिसका मकसद सरकारी स्वास्थ्य केंद्रों की सेवा सुधारना और गांव/समुदाय की भागीदारी बढ़ाना था। यह व्यक्तिगत लाभ वाली योजना नहीं थी, इसलिए इसमें आम लोगों के लिए कोई आवेदन नहीं होता। विश्व बैंक के दस्तावेज़ों के अनुसार इसकी अंतिम तारीख जून 2024 तक बढ़ाई गई थी और दिसंबर 2024 में इसकी समापन रिपोर्ट जारी हुई।",
  facts: [
    ["किसका प्रोजेक्ट", "स्वास्थ्य एवं परिवार कल्याण विभाग, नागालैंड"],
    ["मदद", "विश्व बैंक (IDA) कर्ज़ US$48 मिलियन"],
    ["स्थिति", "पूरा हो चुका (2024)"],
    ["आवेदन", "नहीं होता (व्यक्तिगत योजना नहीं)"],
  ],
  notice: "<strong>इलाज के खर्च में मदद चाहिए?</strong> नागालैंड में <a href=\"/service/nagaland-cmhis-scheme.html\">CMHIS योजना</a> (₹5 लाख/₹20 लाख) और <a href=\"/service/ayushman-bharat.html\">आयुष्मान भारत PM-JAY</a> देखें।",
  sections: [
    {
      id: "kya-tha",
      title: "प्रोजेक्ट क्या था",
      intro: "भारत सरकार, नागालैंड सरकार और विश्व बैंक के बीच 2017 में इस प्रोजेक्ट का समझौता हुआ। कुल लागत लगभग US$60 मिलियन थी, जिसमें US$48 मिलियन विश्व बैंक का कर्ज़ था।",
      list: [
        "<strong>स्वास्थ्य केंद्रों में सुधार:</strong> चुने हुए सरकारी स्वास्थ्य केंद्रों और अस्पतालों में सेवाओं की गुणवत्ता बढ़ाना।",
        "<strong>समुदाय की भागीदारी:</strong> नागालैंड के \"कम्युनिटाइज़ेशन\" मॉडल के तहत गांव की स्वास्थ्य समितियों को मज़बूत करना।",
        "<strong>अस्पताल सुविधाएं:</strong> पानी, शौचालय, बिजली बैकअप जैसी बुनियादी सुविधाएं।",
      ],
    },
    {
      id: "sthiti",
      title: "अब स्थिति क्या है",
      table: {
        head: ["समय", "क्या हुआ"],
        rows: [
          ["2017", "विश्व बैंक के साथ वित्तीय समझौता"],
          ["मार्च 2023", "शुरुआत में तय अंतिम तारीख"],
          ["दिसंबर 2023", "अंतिम तारीख 30 जून 2024 तक बढ़ाने का प्रस्ताव; काम राष्ट्रीय स्वास्थ्य मिशन (NHM) को सौंपने की योजना"],
          ["दिसंबर 2024", "विश्व बैंक की समापन रिपोर्ट (ICR) जारी"],
        ],
      },
      callout: { kind: "warn", html: "इस प्रोजेक्ट के नाम पर कोई फॉर्म, रजिस्ट्रेशन या पैसा मांगे तो सावधान रहें। यह आम लोगों के लिए आवेदन वाली योजना नहीं थी।" },
    },
    {
      id: "ab-kya",
      title: "नागालैंड में अभी इलाज के लिए कौन सी योजनाएं हैं",
      list: [
        '<strong>CMHIS:</strong> मुख्यमंत्री स्वास्थ्य बीमा योजना, आम परिवार ₹5 लाख और सरकारी कर्मचारी/पेंशनर ₹20 लाख प्रति साल। <a href="/service/nagaland-cmhis-scheme.html">पूरी जानकारी</a>',
        '<strong>आयुष्मान भारत PM-JAY:</strong> पात्र परिवारों को ₹5 लाख तक मुफ्त इलाज। <a href="/service/ayushman-bharat.html">पूरी जानकारी</a>',
        '<strong>70 साल से ऊपर:</strong> <a href="/service/ayushman-bharat-vayo-vandana.html">आयुष्मान वय वंदना कार्ड</a>।',
        "<strong>सरकारी अस्पताल/स्वास्थ्य केंद्र:</strong> नज़दीकी PHC/CHC या ज़िला अस्पताल।",
      ],
    },
  ],
  official: [
    { href: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099122324104527444", title: "विश्व बैंक: नागालैंड हेल्थ प्रोजेक्ट समापन रिपोर्ट (ICR)" },
    { href: "https://documents1.worldbank.org/curated/en/099122223073029457/pdf/P1493401e1ce1e0ac1b2971a71f4aa17217.pdf", title: "विश्व बैंक: प्रोजेक्ट की अवधि बढ़ाने का दस्तावेज़ (दिसंबर 2023, PDF)" },
  ],
  faq: [
    { q: "क्या नागालैंड हेल्थ प्रोजेक्ट में आवेदन कर सकते हैं?", a: "नहीं। यह स्वास्थ्य केंद्रों के सुधार का प्रोजेक्ट था, व्यक्तिगत लाभ की योजना नहीं। यह 2024 में पूरा हो चुका है।" },
    { q: "यह प्रोजेक्ट किसकी मदद से चला?", a: "विश्व बैंक की मदद से; नागालैंड सरकार का स्वास्थ्य एवं परिवार कल्याण विभाग इसे लागू करता था।" },
    { q: "नागालैंड में मुफ्त इलाज के लिए क्या करें?", a: "CMHIS कार्ड या आयुष्मान भारत (PM-JAY) कार्ड बनवाएं। 70 साल से ऊपर के लोग आयुष्मान वय वंदना कार्ड बनवा सकते हैं।" },
  ],
  related: [
    { href: "/service/nagaland-cmhis-scheme.html", emoji: "🏥", title: "नागालैंड CMHIS", text: "₹5 लाख/₹20 लाख स्वास्थ्य बीमा" },
    { href: "/service/ayushman-bharat.html", emoji: "🩺", title: "आयुष्मान भारत PM-JAY", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/abha-health-card.html", emoji: "🆔", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य रिकॉर्ड" },
    { href: "/states/nagaland.html", emoji: "🗺️", title: "नागालैंड की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "/service/nagaland-cmhis-scheme.html", label: "🏥 CMHIS योजना" },
    { href: "/states/nagaland.html", label: "🗺️ नागालैंड की सेवाएं" },
  ],
};
