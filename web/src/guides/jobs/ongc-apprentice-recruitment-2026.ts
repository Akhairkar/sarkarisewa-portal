import type { DocGuide } from "../doc/types";

// Sources (checked 31 Oct 2026; official sites not reachable from the sandbox,
// so only facts several reports agree on are used; anything that differs
// between reports is pointed to the notification):
// adda247.com, kollegeapply.com, firstjob24.com, jobsarkariupdate.in: ONGC apprentices 2026,
// about 3,047 seats, online 29.10.2026 to 20.11.2026 through the apprenticeship portals
// (NAPS for trade, NATS for graduate/diploma). Other searches found only the 2025 round, so
// seats and dates are given as reported and readers are pointed to ongcindia.com. Age 18-24 and
// merit selection are from the 2025 round and are labelled so.
export const ongcApprenticeRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "ONGC अप्रेंटिस भर्ती 2026" },
  ],
  docHi: "ONGC अप्रेंटिस भर्ती 2026",
  title: "ONGC अप्रेंटिस भर्ती 2026: लगभग 3,047 सीटें, आवेदन 20 नवंबर तक",
  description: "ONGC में 10वीं, ITI, डिप्लोमा और ग्रेजुएट के लिए अप्रेंटिसशिप 2026: रिपोर्टों में लगभग 3,047 सीटें, आवेदन NAPS/NATS पोर्टल से 20 नवंबर 2026 तक। यह पक्की नौकरी नहीं।",
  published: "2026-10-31",
  modified: "2026-10-31",
  verified: "31 अक्टूबर 2026",
  h1: "ONGC अप्रेंटिस भर्ती 2026: सीटें, योग्यता और आवेदन का तरीका",
  lead: "<strong>स्थिति: आवेदन चालू (रिपोर्टों के अनुसार)।</strong> तेल और प्राकृतिक गैस निगम (<strong>ONGC</strong>) की 2026 की अप्रेंटिसशिप में रिपोर्टों के अनुसार लगभग <strong>3,047 सीटें</strong> हैं और आवेदन <strong>29 अक्टूबर से 20 नवंबर 2026</strong> तक सरकारी अप्रेंटिसशिप पोर्टल से हो रहे हैं: ट्रेड अप्रेंटिस के लिए <strong>NAPS</strong> और ग्रेजुएट/डिप्लोमा के लिए <strong>NATS</strong>। ध्यान दें: <strong>अप्रेंटिसशिप पक्की नौकरी नहीं</strong>, तय अवधि की ट्रेनिंग है जिसमें हर महीने स्टाइपेंड मिलता है।",
  facts: [
    ["सीटें", "लगभग 3,047 (रिपोर्टों में)"],
    ["आखिरी तारीख", "20 नवंबर 2026"],
    ["आवेदन", "NAPS (ट्रेड) / NATS (ग्रेजुएट, डिप्लोमा)"],
    ["वेबसाइट", "<a href=\"https://ongcindia.com/\" target=\"_blank\" rel=\"noopener nofollow\">ongcindia.com</a>"],
  ],
  notice: "ONGC की 2026 की आधिकारिक सूचना से सीटों की संख्या, तारीख और स्टाइपेंड ज़रूर मिला लें: कुछ जगह अभी पिछले साल (2025) की जानकारी घूम रही है। अप्रेंटिसशिप के लिए कोई फीस या एजेंट नहीं लगता। यह साइट निजी है, ONGC या सरकार की नहीं।",
  sections: [
    {
      id: "kaun",
      title: "कौन आवेदन कर सकता है",
      list: [
        "<strong>ट्रेड अप्रेंटिस:</strong> 10वीं/12वीं पास और संबंधित ट्रेड में ITI।",
        "<strong>डिप्लोमा और ग्रेजुएट अप्रेंटिस:</strong> संबंधित ब्रांच में डिप्लोमा या ग्रेजुएशन (जैसे B.Com, B.Sc, BA, B.E.)।",
        "<strong>उम्र:</strong> पिछली बार (2025) 18 से 24 साल थी, आरक्षित वर्गों को छूट; इस बार की सीमा सूचना में देखें।",
        "<strong>चयन:</strong> पिछली बार कोई परीक्षा नहीं थी, पढ़ाई के अंकों की मेरिट से चयन हुआ था।",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>ITI / ट्रेड वाले:</strong> <a href=\"https://www.apprenticeshipindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">apprenticeshipindia.gov.in</a> (NAPS) पर प्रोफाइल बनाएं और ONGC की अप्रेंटिसशिप खोजकर आवेदन करें।",
        "<strong>डिप्लोमा / ग्रेजुएट:</strong> <a href=\"https://nats.education.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nats.education.gov.in</a> (NATS) पर एनरोल करके ONGC के लिए आवेदन करें।",
        "इसके बाद <a href=\"https://ongcindia.com/\" target=\"_blank\" rel=\"noopener nofollow\">ongcindia.com</a> पर बताए अनुसार अपनी पसंद का स्थान/ट्रेड चुनें (अगर मांगा जाए)।",
        "20 नवंबर 2026 से पहले आवेदन पूरा करें; मेरिट लिस्ट ONGC की वेबसाइट पर आएगी।",
      ],
      callout: { kind: "warn", html: "अप्रेंटिसशिप दिलाने के नाम पर पैसे मांगने वालों से बचें। आवेदन मुफ्त है।" },
    },
  ],
  official: [
    { href: "https://ongcindia.com/", title: "ONGC", note: "अप्रेंटिसशिप सूचना" },
    { href: "https://www.apprenticeshipindia.gov.in/", title: "NAPS पोर्टल", note: "ट्रेड अप्रेंटिस" },
    { href: "https://nats.education.gov.in/", title: "NATS पोर्टल", note: "ग्रेजुएट/डिप्लोमा अप्रेंटिस" },
  ],
  faq: [
    { q: "ONGC अप्रेंटिस 2026 का आवेदन कब तक है?", a: "रिपोर्टों के अनुसार 29 अक्टूबर से 20 नवंबर 2026 तक, NAPS या NATS पोर्टल से।" },
    { q: "क्या ONGC अप्रेंटिसशिप पक्की नौकरी है?", a: "नहीं। यह तय अवधि की ट्रेनिंग है जिसमें स्टाइपेंड मिलता है; पूरी होने पर सर्टिफिकेट मिलता है।" },
    { q: "क्या कोई परीक्षा होती है?", a: "पिछली बार (2025) परीक्षा नहीं थी, अंकों की मेरिट से चयन हुआ था; इस बार का तरीका सूचना में देखें।" },
  ],
  related: [
    { href: "/service/national-apprenticeship-scheme.html", emoji: "🛠️", title: "नेशनल अप्रेंटिसशिप स्कीम", text: "NATS क्या है" },
    { href: "/jobs/iocl-western-region-apprentice-recruitment-2026.html", emoji: "⛽", title: "IOCL अप्रेंटिस", text: "वेस्टर्न रीजन" },
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "अपनी पढ़ाई की भर्तियां" },
  ],
  aside: [
    { href: "https://www.apprenticeshipindia.gov.in/", label: "🛠️ NAPS पोर्टल" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
