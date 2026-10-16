import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; uk.gov.in sites not reachable from the
// sandbox, search-result extracts used): Apuni Sarkar portal
// (eservices.uk.gov.in, run by ITDA, Dept. of Information & Science
// Technology; Hill Area Certificate listed among e-District certificates;
// apply via citizen login, CSC or e-District centre) via Anantam IAS and
// housing.com guides; Uttarakhand Right to Service Act, 2011 (appeal on delay);
// CM Helpline 1905. Fee and time limit appear only on secondary sites and
// which admissions/jobs require the certificate is not stated officially, so
// both are kept general.
export const ukHillAreaCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "उत्तराखंड", href: "/states/uttarakhand.html" },
    { label: "पर्वतीय प्रमाण पत्र" },
  ],
  docHi: "पर्वतीय प्रमाण पत्र (उत्तराखंड)",
  title: "पर्वतीय प्रमाण पत्र",
  description: "उत्तराखंड का पर्वतीय (Hill Area) प्रमाण पत्र: आवेदक के पहाड़ी क्षेत्र का निवासी होने का प्रमाण। Apuni Sarkar पोर्टल पर आवेदन, कागज़ और देरी पर शिकायत।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उत्तराखंड पर्वतीय प्रमाण पत्र (Hill Area Certificate): कैसे बनवाएं",
  lead: "पर्वतीय प्रमाण पत्र उत्तराखंड सरकार का प्रमाण पत्र है, जो बताता है कि आवेदक राज्य के <strong>पर्वतीय (पहाड़ी) क्षेत्र</strong> का निवासी है। यह राजस्व विभाग (तहसील) से बनता है और इसका आवेदन <strong>Apuni Sarkar पोर्टल</strong> (eservices.uk.gov.in), CSC या ई-डिस्ट्रिक्ट केंद्र से होता है। जिस दाखिले, भर्ती या योजना में यह मांगा गया हो, उसकी शर्तें पहले पढ़ लें।",
  facts: [
    ["राज्य", "उत्तराखंड"],
    ["जारी करने वाला", "तहसील / राजस्व विभाग"],
    ["आवेदन", "Apuni Sarkar पोर्टल, CSC या ई-डिस्ट्रिक्ट केंद्र"],
    ["हेल्पलाइन", "CM हेल्पलाइन 1905"],
  ],
  sections: [
    {
      id: "kab-chahiye",
      title: "पर्वतीय प्रमाण पत्र कब चाहिए",
      list: [
        "जब किसी दाखिले, भर्ती, स्थानांतरण या योजना में <strong>पहाड़ी क्षेत्र का निवासी</strong> होने का प्रमाण मांगा जाए",
        "यह <strong>स्थायी निवास (डोमिसाइल) प्रमाण पत्र</strong> से अलग है; डोमिसाइल पूरे उत्तराखंड का निवासी होना बताता है, पर्वतीय प्रमाण पत्र पहाड़ी क्षेत्र का",
        "कौन से क्षेत्र \"पर्वतीय\" माने जाते हैं, यह राज्य सरकार की अधिसूचना से तय होता है; अपनी तहसील से पुष्टि करें",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड और पासपोर्ट साइज़ फोटो",
        "परिवार रजिस्टर की नकल या पते का दूसरा प्रमाण",
        "स्थायी निवास प्रमाण पत्र (हो तो)",
        "ज़मीन/मकान के कागज़ या वहां लंबे समय से रहने का प्रमाण, जैसा तहसील मांगे",
        "तय फॉर्मेट में स्व-घोषणा पत्र",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a> (Apuni Sarkar) पर मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में \"पर्वतीय प्रमाण पत्र / Hill Area Certificate\" चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और पोर्टल पर दिखाई गई फीस भरें।",
        "लेखपाल/राजस्व निरीक्षक की जांच के बाद तहसीलदार प्रमाण पत्र मंज़ूर करते हैं।",
        "स्वीकृति के बाद डिजिटल हस्ताक्षर वाला प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: 'खुद आवेदन न कर सकें तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> या ई-डिस्ट्रिक्ट केंद्र जाएं। फीस और समय-सीमा पोर्टल की सेवा सूची में देखें; सिर्फ रसीद वाली राशि दें।' },
    },
    {
      id: "shikayat",
      title: "देरी या अस्वीकृति पर क्या करें",
      list: [
        "<strong>स्टेटस देखें:</strong> Apuni Sarkar पोर्टल पर आवेदन संख्या से।",
        "<strong>अपील:</strong> उत्तराखंड सेवा का अधिकार अधिनियम, 2011 के तहत अधिसूचित सेवा में तय समय से ज़्यादा देरी या गलत अस्वीकृति पर अपील की जा सकती है।",
        "<strong>शिकायत:</strong> मुख्यमंत्री हेल्पलाइन 1905 पर।",
      ],
    },
  ],
  official: [
    { href: "https://eservices.uk.gov.in/", title: "Apuni Sarkar पोर्टल (उत्तराखंड ई-सेवाएं)" },
    { href: "https://uk.gov.in/", title: "उत्तराखंड सरकार का पोर्टल" },
  ],
  faq: [
    { q: "पर्वतीय प्रमाण पत्र कौन बनाता है?", a: "तहसील (राजस्व विभाग)। आवेदन Apuni Sarkar पोर्टल, CSC या ई-डिस्ट्रिक्ट केंद्र से होता है।" },
    { q: "क्या पर्वतीय प्रमाण पत्र और स्थायी निवास प्रमाण पत्र एक ही हैं?", a: "नहीं। स्थायी निवास पूरे उत्तराखंड का निवासी होना बताता है, जबकि पर्वतीय प्रमाण पत्र पहाड़ी क्षेत्र का निवासी होना।" },
    { q: "आवेदन की फीस कितनी है?", a: "फीस पोर्टल पर आवेदन के समय दिखती है; CSC पर सेवा शुल्क अलग लग सकता है। रसीद ज़रूर लें।" },
    { q: "प्रमाण पत्र समय पर न बने तो?", a: "सेवा का अधिकार अधिनियम, 2011 के तहत अपील करें या CM हेल्पलाइन 1905 पर शिकायत दर्ज करें।" },
  ],
  related: [
    { href: "/service/uk-domicile-certificate.html", emoji: "🏠", title: "स्थायी निवास (उत्तराखंड)", text: "डोमिसाइल प्रमाण पत्र" },
    { href: "/service/uk-caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र (उत्तराखंड)", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/service/uk-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (उत्तराखंड)", text: "आय का प्रमाण" },
    { href: "/service/uk-ration-card.html", emoji: "🍚", title: "राशन कार्ड (उत्तराखंड)", text: "राशन कार्ड बनवाएं" },
    { href: "/states/uttarakhand.html", emoji: "🏔️", title: "उत्तराखंड की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://eservices.uk.gov.in/", label: "🌐 Apuni Sarkar पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
