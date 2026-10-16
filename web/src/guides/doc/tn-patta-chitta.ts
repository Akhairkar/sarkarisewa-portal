import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; tn.gov.in sites not reachable from the
// sandbox, search-result extracts used): eservices.tn.gov.in "About this
// portal" (Revenue Dept. land records: view Patta/Chitta and A-Register
// extract for rural and urban areas, verify web-issued copies),
// services.india.gov.in listings "e services of land records" and "view a
// register extract", housing.com / Square Yards guides (Patta and Chitta
// merged into one record from 2015; search by survey/sub-division number).
// Patta transfer fee and time limits were not confirmed officially, so left out.
export const tnPattaChitta: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "तमिलनाडु", href: "/states/tamil-nadu.html" },
    { label: "पट्टा एवं चिट्टा" },
  ],
  docHi: "पट्टा एवं चिट्टा (तमिलनाडु)",
  title: "पट्टा एवं चिट्टा (भूमि रिकॉर्ड)",
  description: "तमिलनाडु में पट्टा-चिट्टा और A-रजिस्टर ऑनलाइन कैसे देखें, सर्वे नंबर से खोज, कॉपी की जांच, पट्टा ट्रांसफर और गलती सुधार की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "तमिलनाडु पट्टा-चिट्टा (Patta Chitta): ज़मीन का रिकॉर्ड ऑनलाइन कैसे देखें",
  lead: "तमिलनाडु में <strong>पट्टा</strong> ज़मीन के मालिक का राजस्व रिकॉर्ड है और <strong>चिट्टा</strong> में ज़मीन का प्रकार, क्षेत्रफल और मालिक का विवरण होता है। 2015 से दोनों एक ही रिकॉर्ड में मिलते हैं। राजस्व विभाग के पोर्टल eservices.tn.gov.in पर गांव/शहर की ज़मीन का पट्टा-चिट्टा और A-रजिस्टर का अंश देखा जा सकता है।",
  facts: [
    ["राज्य", "तमिलनाडु"],
    ["विभाग", "राजस्व एवं आपदा प्रबंधन विभाग"],
    ["ऑनलाइन देखें", "eservices.tn.gov.in"],
    ["खोज के लिए", "ज़िला, तालुक, गांव, सर्वे/सब-डिवीज़न नंबर"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "पट्टा, चिट्टा और A-रजिस्टर क्या हैं",
      table: {
        head: ["रिकॉर्ड", "इसमें क्या होता है"],
        rows: [
          ["पट्टा", "ज़मीन किसके नाम दर्ज है, पट्टा नंबर, सर्वे नंबर"],
          ["चिट्टा", "ज़मीन का प्रकार (नंजई/गीली, पुंजई/सूखी), क्षेत्रफल; अब पट्टा के साथ ही"],
          ["A-रजिस्टर", "गांव की हर सर्वे संख्या का ब्योरा: ज़मीन का वर्गीकरण, मालिक, क्षेत्रफल"],
        ],
      },
      callout: { kind: "info", html: "यह महाराष्ट्र के सातबारा (7/12) जैसा राजस्व रिकॉर्ड है। मालिकाना हक के पक्के सबूत के लिए रजिस्टर्ड बिक्री विलेख (sale deed) भी देखा जाता है।" },
    },
    {
      id: "online",
      title: "ऑनलाइन पट्टा-चिट्टा कैसे देखें",
      steps: [
        '<a href="https://eservices.tn.gov.in/" target="_blank" rel="noopener nofollow">eservices.tn.gov.in</a> खोलें और "View Patta & FMB / Chitta / TSLR Extract" जैसा विकल्प चुनें।',
        "ग्रामीण (Rural) या शहरी (Urban) क्षेत्र चुनें।",
        "ज़िला, तालुक और गांव चुनें; फिर सर्वे नंबर और सब-डिवीज़न नंबर (या पट्टा नंबर) डालें।",
        "कैप्चा भरकर सबमिट करें; रिकॉर्ड स्क्रीन पर आएगा, उसे सेव/प्रिंट करें।",
        "<strong>कॉपी की जांच:</strong> पोर्टल से निकली कॉपी पर रेफरेंस नंबर होता है; \"Verify\" विकल्प से कोई भी इसकी सच्चाई जांच सकता है।",
      ],
    },
    {
      id: "transfer",
      title: "पट्टा ट्रांसफर (नाम बदलना) और सुधार",
      list: [
        "<strong>ज़मीन खरीदी या विरासत में मिली:</strong> पट्टा अपने नाम कराने के लिए आवेदन करें। आवेदन e-Sevai केंद्र से या राजस्व विभाग की ऑनलाइन सेवा से होता है; बाद में तालुक कार्यालय जांच करता है।",
        "<strong>कागज़:</strong> रजिस्टर्ड विलेख, पुराना पट्टा, आधार; विरासत में वारिस प्रमाणपत्र/मृत्यु प्रमाणपत्र।",
        "<strong>रिकॉर्ड में गलती:</strong> नाम या क्षेत्रफल गलत दिखे तो ग्राम प्रशासनिक अधिकारी (VAO) या तालुक कार्यालय में आवेदन दें।",
      ],
      callout: { kind: "warn", html: "पट्टा ट्रांसफर की फीस और समय-सीमा की आधिकारिक पुष्टि हमें नहीं मिली। सिर्फ रसीद वाली राशि दें।" },
    },
  ],
  official: [
    { href: "https://eservices.tn.gov.in/", title: "तमिलनाडु राजस्व विभाग: भूमि रिकॉर्ड ई-सेवाएं" },
    { href: "https://www.tnesevai.tn.gov.in/", title: "TN e-Sevai पोर्टल", note: "पट्टा ट्रांसफर आदि के आवेदन" },
  ],
  faq: [
    { q: "पट्टा और चिट्टा में क्या फर्क है?", a: "पट्टा बताता है कि ज़मीन किसके नाम है; चिट्टा में ज़मीन का प्रकार और क्षेत्रफल होता है। 2015 से दोनों एक ही रिकॉर्ड में मिलते हैं।" },
    { q: "पट्टा-चिट्टा ऑनलाइन कहां देखें?", a: "राजस्व विभाग के पोर्टल eservices.tn.gov.in पर ज़िला, तालुक, गांव और सर्वे नंबर डालकर।" },
    { q: "क्या ऑनलाइन कॉपी मान्य है?", a: "पोर्टल से निकली कॉपी पर रेफरेंस नंबर होता है, जिसे उसी पोर्टल पर जांचा जा सकता है। कोई संस्था प्रमाणित कॉपी मांगे तो तालुक कार्यालय से लें।" },
    { q: "सर्वे नंबर नहीं पता तो?", a: "पुराने विलेख, टैक्स रसीद या VAO कार्यालय से सर्वे नंबर पता करें।" },
  ],
  related: [
    { href: "/service/tn-community-certificate.html", emoji: "🪪", title: "समुदाय प्रमाणपत्र", text: "तमिलनाडु का जाति प्रमाणपत्र" },
    { href: "/service/tn-income-certificate.html", emoji: "💰", title: "आय प्रमाणपत्र (तमिलनाडु)", text: "आय का प्रमाण" },
    { href: "/service/tn-magalir-urimai-thogai.html", emoji: "👩", title: "मगलिर उरिमई थोगई", text: "महिला मुखिया को ₹1,000 महीना" },
    { href: "/states/tamil-nadu.html", emoji: "🛕", title: "तमिलनाडु की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://eservices.tn.gov.in/", label: "🗺️ पट्टा-चिट्टा देखें" },
    { href: "/states/tamil-nadu.html", label: "🛕 तमिलनाडु की सेवाएं" },
  ],
};
