import type { DocGuide } from "../doc/types";

// Sources (checked 31 Oct 2026; official sites not reachable from the sandbox,
// so only facts several reports agree on are used; anything that differs
// between reports is pointed to the notification):
// testbook.com, careerpower.in, govtjobsalert.in, govtexamupdate.com, udyogavarthe.in, firstjob24.
// Karnataka Examinations Authority: about 5,431 posts (FDA/SDA in RPC and Kalyana Karnataka
// cadres, some reports add other posts); online 30.10.2026 to 25.11.2026 at
// cetonline.karnataka.gov.in, fee till 26.11.2026 (one report). FDA degree, SDA II PUC; pay FDA
// ₹44,425-83,700, SDA ₹34,100-67,700 (one report). Split and other details: notification.
export const keaFdaSdaRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "कर्नाटक KEA FDA SDA भर्ती 2026" },
  ],
  docHi: "कर्नाटक KEA FDA SDA भर्ती 2026",
  title: "कर्नाटक KEA FDA SDA भर्ती 2026: 5,431 पद, आवेदन 25 नवंबर तक",
  description: "कर्नाटक परीक्षा प्राधिकरण (KEA) से फर्स्ट डिवीज़न असिस्टेंट (FDA) और सेकंड डिवीज़न असिस्टेंट (SDA) समेत लगभग 5,431 पद। ग्रेजुएट/12वीं, आवेदन 25 नवंबर 2026 तक।",
  published: "2026-10-31",
  modified: "2026-10-31",
  verified: "31 अक्टूबर 2026",
  h1: "कर्नाटक KEA FDA, SDA भर्ती 2026: 5,431 पद, योग्यता, वेतन और आवेदन",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> कर्नाटक परीक्षा प्राधिकरण (<strong>KEA</strong>) ने राज्य सरकार के विभागों में <strong>फर्स्ट डिवीज़न असिस्टेंट (FDA)</strong> और <strong>सेकंड डिवीज़न असिस्टेंट (SDA)</strong> समेत लगभग <strong>5,431 पद</strong> निकाले हैं (शेष कर्नाटक और कल्याण कर्नाटक कैडर)। ऑनलाइन आवेदन <strong>30 अक्टूबर से 25 नवंबर 2026</strong> तक <a href=\"https://cetonline.karnataka.gov.in/kea/\" target=\"_blank\" rel=\"noopener nofollow\">cetonline.karnataka.gov.in</a> पर होगा।",
  facts: [
    ["कुल पद", "लगभग 5,431"],
    ["आखिरी तारीख", "25 नवंबर 2026"],
    ["योग्यता", "FDA: ग्रेजुएशन, SDA: 12वीं / II PUC"],
    ["वेबसाइट", "<a href=\"https://cetonline.karnataka.gov.in/kea/\" target=\"_blank\" rel=\"noopener nofollow\">cetonline.karnataka.gov.in</a>"],
  ],
  notice: "कैडर-वार और पद-वार संख्या, उम्र सीमा, फीस और कन्नड़ भाषा की शर्त KEA के नोटिफिकेशन में देखें; रिपोर्टों में आंकड़े थोड़े अलग हैं। यह साइट निजी है, KEA या कर्नाटक सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "30 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "25 नवंबर 2026"],
          ["फीस की आखिरी तारीख", "26 नवंबर 2026 (रिपोर्ट के अनुसार)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद, योग्यता और वेतन",
      list: [
        "<strong>FDA (फर्स्ट डिवीज़न असिस्टेंट):</strong> ग्रेजुएशन; एक रिपोर्ट में वेतनमान ₹44,425 – ₹83,700।",
        "<strong>SDA (सेकंड डिवीज़न असिस्टेंट):</strong> 12वीं / II PUC; एक रिपोर्ट में वेतनमान ₹34,100 – ₹67,700।",
        "पद शेष कर्नाटक (RPC) और कल्याण कर्नाटक (KK) दोनों कैडर में हैं; कुछ रिपोर्टों में दूसरे पद भी इसी भर्ती में बताए गए हैं।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://cetonline.karnataka.gov.in/kea/\" target=\"_blank\" rel=\"noopener nofollow\">cetonline.karnataka.gov.in/kea</a> पर FDA/SDA भर्ती का नोटिफिकेशन खोलें।",
        "रजिस्ट्रेशन करके पद और कैडर चुनें, फॉर्म भरें।",
        "फोटो, हस्ताक्षर और कागज़ अपलोड करें; 25 नवंबर 2026 तक फॉर्म और समय पर फीस जमा करें।",
      ],
      callout: { kind: "warn", html: "फॉर्म और फीस सिर्फ आधिकारिक वेबसाइट पर भरें। नौकरी या चयन के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://cetonline.karnataka.gov.in/kea/", title: "कर्नाटक परीक्षा प्राधिकरण (KEA)", note: "FDA/SDA नोटिफिकेशन और आवेदन" },
  ],
  faq: [
    { q: "KEA FDA SDA 2026 का फॉर्म कब तक भरें?", a: "30 अक्टूबर से 25 नवंबर 2026 तक cetonline.karnataka.gov.in पर।" },
    { q: "KEA FDA SDA 2026 में कितने पद हैं?", a: "लगभग 5,431, शेष कर्नाटक और कल्याण कर्नाटक कैडर में।" },
    { q: "FDA और SDA के लिए क्या योग्यता चाहिए?", a: "FDA के लिए ग्रेजुएशन और SDA के लिए 12वीं / II PUC; पूरी शर्त नोटिफिकेशन में देखें।" },
  ],
  related: [
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "12वीं और ग्रेजुएट की भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "कट-ऑफ तारीख पर उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के साइज़ में फोटो" },
  ],
  aside: [
    { href: "https://cetonline.karnataka.gov.in/kea/", label: "📝 KEA पोर्टल" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
