import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - lakshadweep.gov.in/departments/labour-employment-and-training/ (UT
//   Administration): department functions include operating the Model Career
//   Centre under the National Career Service for job seekers and employers,
//   monitoring and managing employment exchanges and employment data, and
//   promoting NCS, e-SHRAM and Skill India as digital platforms.
// - ncs.gov.in (toll-free helpline 1514).
// No official page with registration documents, fees, renewal period or any
// unemployment allowance was found, so none are stated.
export const lakshadweepEmploymentExchange: DocGuide = {
  state: { slug: "lakshadweep", hi: "लक्षद्वीप" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Lakshadweep Employment Exchange 2026",
  description: "लक्षद्वीप रोज़गार कार्यालय (Employment Exchange) 2026: श्रम, रोज़गार एवं प्रशिक्षण विभाग, Model Career Centre और NCS पोर्टल से नौकरी के लिए पंजीकरण की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "लक्षद्वीप रोज़गार कार्यालय पंजीकरण 2026: श्रम विभाग, Model Career Centre और NCS",
  lead: "लक्षद्वीप में रोज़गार से जुड़ा काम श्रम, रोज़गार एवं प्रशिक्षण विभाग के पास है। विभाग के पेज के अनुसार वह राष्ट्रीय करियर सेवा (NCS) के तहत <strong>Model Career Centre</strong> चलाता है और रोज़गार कार्यालयों व रोज़गार के आंकड़ों की निगरानी करता है। ऑनलाइन नौकरी पंजीकरण के लिए विभाग NCS पोर्टल को बढ़ावा देता है।",
  facts: [["विभाग", "<a href=\"https://lakshadweep.gov.in/departments/labour-employment-and-training/\" target=\"_blank\" rel=\"noopener nofollow\">श्रम, रोज़गार एवं प्रशिक्षण</a>"], ["केंद्र", "Model Career Centre (NCS के तहत)"], ["ऑनलाइन", "NCS पोर्टल (ncs.gov.in)"], ["हेल्पलाइन", "1514 (NCS)"]],
  notice: "<strong>ध्यान दें:</strong> लक्षद्वीप प्रशासन के पेज पर पंजीकरण की कागज़-सूची, फीस और नवीनीकरण की अवधि नहीं मिली, इसलिए हमने उन्हें नहीं लिखा। जाने से पहले विभाग से पूछ लें।",
  sections: [
    {
      "id": "kya-hai",
      "title": "विभाग क्या करता है",
      "intro": "लक्षद्वीप प्रशासन के विभाग-पेज के अनुसार श्रम, रोज़गार एवं प्रशिक्षण विभाग के काम में ये शामिल हैं:",
      "list": [
        "<strong>Model Career Centre</strong> चलाना, जो NCS के तहत नौकरी चाहने वालों और नियोक्ताओं के लिए है।",
        "रोज़गार कार्यालयों और रोज़गार के आंकड़ों की निगरानी।",
        "निर्माण श्रमिकों (BOCW) का पंजीकरण और कल्याण, e-SHRAM पंजीकरण में सहायता।",
        "युवाओं के लिए कौशल और व्यावसायिक प्रशिक्षण (जैसे PMKVY)।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "कैसे पंजीकरण करें",
      "steps": [
        "<a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> पर Job Seeker के रूप में रजिस्टर करें और प्रोफाइल बनाएं। यह विभाग का बताया हुआ ऑनलाइन रास्ता है।",
        "मदद चाहिए तो NCS हेल्पलाइन <strong>1514</strong> पर बात करें।",
        "द्वीप पर Model Career Centre या श्रम विभाग के कार्यालय में जाकर पंजीकरण की स्थानीय प्रक्रिया पूछें।"
      ],
      "callout": {
        "kind": "warn",
        "html": "कोई पैसे मांगकर \"पक्की नौकरी\" का वादा करे तो न दें। विभाग का पेज इस सेवा की फीस नहीं बताता।"
      }
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "लक्षद्वीप प्रशासन के विभाग-पेज पर बेरोज़गारी भत्ता योजना की जानकारी हमें नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। किसी से \"भत्ता दिलाने\" के नाम पर पैसे न दें; योजना की पुष्टि विभाग से करें।"
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  official: [
    {
      "href": "https://lakshadweep.gov.in/departments/labour-employment-and-training/",
      "title": "श्रम, रोज़गार एवं प्रशिक्षण विभाग, लक्षद्वीप"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  faq: [
    {
      "q": "लक्षद्वीप में रोज़गार के लिए नाम कहां दर्ज कराएं?",
      "a": "श्रम, रोज़गार एवं प्रशिक्षण विभाग के Model Career Centre या कार्यालय में संपर्क करें, और ऑनलाइन के लिए NCS पोर्टल पर रजिस्टर करें।"
    },
    {
      "q": "Model Career Centre क्या है?",
      "a": "NCS के तहत नौकरी चाहने वालों और नियोक्ताओं के लिए सेवाएं देने वाला केंद्र, जो विभाग के पेज के अनुसार लक्षद्वीप विभाग चलाता है।"
    },
    {
      "q": "कौन-से कागज़ और कितनी फीस लगती है?",
      "a": "लक्षद्वीप प्रशासन के पेज पर हमें इसकी जानकारी नहीं मिली। विभाग से पूछकर ही तय करें।"
    },
    {
      "q": "नवीनीकरण कब करना होता है?",
      "a": "हमें पक्की सरकारी जानकारी नहीं मिली, इसलिए अवधि नहीं लिख रहे।"
    },
    {
      "q": "क्या लक्षद्वीप में बेरोज़गारी भत्ता मिलता है?",
      "a": "हमें ऐसी योजना की जानकारी नहीं मिली, इसलिए कोई राशि नहीं लिखी है।"
    }
  ],
  related: [
    {
      "href": "/jobs/index.html",
      "emoji": "🎯",
      "title": "नई सरकारी नौकरियां",
      "text": "भर्ती, योग्यता और आखिरी तारीख"
    },
    {
      "href": "/exams/index.html",
      "emoji": "📅",
      "title": "Exam Calendar",
      "text": "SSC, Railway, Bank की तारीखें"
    },
    {
      "href": "/states/lakshadweep-caste-certificate.html",
      "emoji": "📜",
      "title": "लक्षद्वीप जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/lakshadweep-domicile-certificate.html",
      "emoji": "🏠",
      "title": "लक्षद्वीप निवास प्रमाण पत्र",
      "text": "डोमिसाइल सर्टिफिकेट"
    },
    {
      "href": "/tools/age-calculator.html",
      "emoji": "⏳",
      "title": "Exam Age Calculator",
      "text": "कट-ऑफ तारीख पर सही उम्र"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Signature Resizer",
      "text": "फॉर्म के साइज़ में, फ्री"
    }
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    {
      "href": "https://www.ncs.gov.in/",
      "label": "📝 NCS पर रजिस्टर करें"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ],
};
