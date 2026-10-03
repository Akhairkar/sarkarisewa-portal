import type { SeniorGuide } from "./types";
import { commonFaq, commonReject, elderlineLinks, baseDocuments, relatedFor } from "./common";

const ED = "<a href=\"https://edistrict.delhigovt.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-District दिल्ली</a>";

export const delhi: SeniorGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  title: "Delhi Senior Citizen Card 2026: Apply & Status | SarkariSewa",
  description: "दिल्ली में सीनियर सिटीजन कार्ड: e-District से आवेदन, Delhi Police senior citizen registration, वृद्धावस्था पेंशन ₹2,500/₹3,000 और 70+ के लिए आयुष्मान वय वंदना कार्ड।",
  published: "2026-08-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "दिल्ली सीनियर सिटीजन कार्ड 2026: आवेदन, पेंशन और पुलिस रजिस्ट्रेशन",
  lead: "दिल्ली में बुज़ुर्गों से जुड़े आवेदन e-District पोर्टल या ज़िला समाज कल्याण कार्यालय से होते हैं। वृद्धावस्था पेंशन 60-69 साल में ₹2,500 और 70+ में ₹3,000 हर महीने है। सुरक्षा के लिए Delhi Police में senior citizen रजिस्ट्रेशन भी करा सकते हैं।",
  facts: [["उम्र", "60 साल या ज़्यादा"], ["आवेदन", "e-District / समाज कल्याण कार्यालय"], ["वृद्धावस्था पेंशन", "₹2,500 – ₹3,000 / महीना"], ["Delhi Police हेल्पलाइन", "<a href=\"tel:1291\">1291</a>"]],
  idCard: {
    office: "दिल्ली में e-District पोर्टल या ज़िला समाज कल्याण कार्यालय से आवेदन होता है।",
    note: "<strong>आधार ज़रूरी है:</strong> e-District दिल्ली पर आवेदन आधार नंबर के बिना नहीं होता।",
    steps: [
      `<strong>${ED} पर जाएं</strong> और मोबाइल नंबर से Citizen Login बनाएं।`,
      "<strong>सेवा चुनें।</strong> वरिष्ठ नागरिक से जुड़ी सेवा (पहचान पत्र / पेंशन) चुनें और आधार नंबर डालें।",
      "<strong>फॉर्म भरें और दस्तावेज़ अपलोड करें।</strong> नाम और जन्मतिथि बिल्कुल वैसी ही लिखें जैसी आधार में है।",
      "<strong>सबमिट करें और आवेदन नंबर संभालें।</strong> इसी नंबर से स्टेटस देखा जाता है।",
      "<strong>ऑनलाइन नहीं कर पा रहे?</strong> अपने ज़िले के समाज कल्याण कार्यालय जाएं, या Elderline <a href=\"tel:14567\">14567</a> पर कॉल करें।",
    ],
  },
  documents: [...baseDocuments, "<strong>दिल्ली में 5 साल से रहने का प्रमाण</strong> और <strong>आय प्रमाण</strong> (पेंशन के लिए)", "<strong>आधार से लिंक बैंक खाते की पासबुक</strong> (पेंशन के लिए)"],
  pension: {
    name: "वृद्धावस्था सहायता (पेंशन)",
    amount: "₹2,500 – ₹3,000 / महीना",
    intro: "दिल्ली सरकार का समाज कल्याण विभाग यह पेंशन देता है। 17 सितंबर 2025 से राशि ₹500 बढ़ाई गई है।",
    rows: [
      ["60 से 69 साल", "₹2,500 प्रति माह"],
      ["70 साल या ज़्यादा", "₹3,000 प्रति माह"],
      ["SC / ST / अल्पसंख्यक (60-69 साल)", "₹500 अतिरिक्त"],
      ["शर्त", "दिल्ली में कम से कम 5 साल से निवास, परिवार की सालाना आय ₹1 लाख से कम, आधार ज़रूरी"],
      ["कहाँ आवेदन करें", `${ED} या ज़िला समाज कल्याण कार्यालय`],
    ],
    status: `${ED} पर आवेदन नंबर डालकर स्टेटस देखें। पैसा आधार से जुड़े बैंक खाते में PFMS के ज़रिए आता है, न आए तो बैंक में आधार सीडिंग जांचें।`,
  },
  extra: [{
    id: "delhi-police",
    title: "Delhi Police में senior citizen रजिस्ट्रेशन",
    html: "<p>अकेले रहने वाले बुज़ुर्ग Delhi Police में senior citizen के रूप में रजिस्टर हो सकते हैं। इसके बाद इलाके का बीट स्टाफ समय-समय पर हाल-चाल लेता है और ज़रूरत पड़ने पर जल्दी मदद मिलती है। रजिस्ट्रेशन मुफ्त है।</p><ul class=\"checklist\"><li><strong>हेल्पलाइन:</strong> Delhi Police senior citizen हेल्पलाइन <a href=\"tel:1291\">1291</a> पर कॉल करें।</li><li><strong>कहाँ:</strong> अपने इलाके के पुलिस स्टेशन या <a href=\"https://delhipolice.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Delhi Police वेबसाइट</a> से।</li><li><strong>आपात स्थिति में:</strong> हमेशा <a href=\"tel:112\">112</a> डायल करें।</li></ul>",
  }],
  reject: [["दिल्ली में 5 साल का निवास साबित नहीं हो पा रहा", "पुराना वोटर ID, राशन कार्ड, बिजली/पानी का बिल या किराया अनुबंध जैसे कागज़ जिन पर 5 साल पुरानी तारीख हो, साथ लगाएं।"], ...commonReject],
  official: [
    { href: "https://edistrict.delhigovt.nic.in/", title: "e-District दिल्ली", note: "पेंशन और प्रमाण पत्र के आवेदन" },
    { href: "https://socialwelfare.delhi.gov.in/", title: "समाज कल्याण विभाग, दिल्ली सरकार", note: "वृद्धावस्था सहायता योजना" },
    { href: "https://delhipolice.gov.in/", title: "Delhi Police", note: "senior citizen रजिस्ट्रेशन" },
    { href: "tel:1291", title: "Delhi Police senior citizen हेल्पलाइन: 1291" },
    ...elderlineLinks,
  ],
  faq: [
    { q: "दिल्ली में सीनियर सिटीजन कार्ड कैसे बनता है?", a: "e-District दिल्ली पोर्टल पर आधार से लॉगिन करके वरिष्ठ नागरिक से जुड़ी सेवा चुनें और आवेदन करें, या अपने ज़िले के समाज कल्याण कार्यालय जाएं। सुरक्षा के लिए Delhi Police में senior citizen रजिस्ट्रेशन अलग से होता है।" },
    { q: "दिल्ली में वृद्धावस्था पेंशन कितनी है?", a: "17 सितंबर 2025 से 60 से 69 साल के बुज़ुर्गों को ₹2,500 और 70 साल से ऊपर को ₹3,000 प्रति माह मिलते हैं। SC, ST और अल्पसंख्यक वर्ग के 60-69 साल के बुज़ुर्गों को ₹500 अतिरिक्त मिलते हैं।" },
    { q: "दिल्ली पेंशन के लिए क्या शर्तें हैं?", a: "उम्र 60 साल या ज़्यादा, दिल्ली में कम से कम 5 साल से निवास, परिवार की सालाना आय ₹1 लाख से कम और आधार नंबर ज़रूरी है।" },
    { q: "Delhi Police senior citizen हेल्पलाइन नंबर क्या है?", a: "Delhi Police की senior citizen हेल्पलाइन 1291 है। किसी भी आपात स्थिति में 112 डायल करें।" },
    ...commonFaq,
  ],
  related: relatedFor("delhi", "दिल्ली"),
  csc: "/service/csc-locator/delhi.html",
};
