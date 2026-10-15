import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myscheme.gov.in/schemes/pmkvy-stt and
// pmkvy-rpl (MSDE, implemented by NSDC under Skill India Programme FY 2022-26;
// STT: free NSQF-aligned training 300-600 hours with OJT, age 15-45, Aadhaar,
// induction kit, free assessment + one free re-assessment, one-year accident
// insurance, ₹5,000 assistive-device support for PwD, boarding/lodging/
// conveyance for women/PwD per Common Norms, DigiLocker certificate, 70%
// biometric attendance; RPL: age 18-59, min 30 hours orientation, pass 70%;
// register on skillindiadigital.gov.in); PIB-reported Cabinet decision 7 Feb
// 2025 (Skill India Programme 2022-23 to 2025-26, PMKVY 4.0 ₹6,000 crore, via
// businesstoday/yourstory); careers360 Mar 2026 (MSDE preparing PMKVY 5.0, not
// yet approved). No Cabinet approval for a new phase was found as of this date.
export const pmKaushalVikasYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "पीएम कौशल विकास योजना (PMKVY)" },
  ],
  docHi: "पीएम कौशल विकास योजना (PMKVY)",
  title: "पीएम कौशल विकास योजना (PMKVY) 2026",
  description: "युवाओं को रोजगार योग्य कौशल प्राप्त करने में मदद के लिए मुफ्त अल्पकालिक प्रशिक्षण और प्रमाणन प्रदान करने वाली प्रमुख कौशल-प्रशिक्षण योजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम कौशल विकास योजना (PMKVY) 2026: मुफ्त ट्रेनिंग, सर्टिफिकेट, पात्रता और रजिस्ट्रेशन",
  lead: "प्रधानमंत्री कौशल विकास योजना कौशल विकास और उद्यमिता मंत्रालय (MSDE) की योजना है, जिसे NSDC मान्यता प्राप्त ट्रेनिंग सेंटरों के ज़रिये चलाता है। इसमें युवाओं को किसी काम (जैसे इलेक्ट्रीशियन, ब्यूटी, सिलाई, डेटा एंट्री) की मुफ्त छोटी अवधि की ट्रेनिंग, परीक्षा और सरकारी मान्यता वाला सर्टिफिकेट मिलता है। पहले से काम जानने वालों को RPL के तहत जांच के बाद सर्टिफिकेट मिलता है। रजिस्ट्रेशन Skill India Digital पोर्टल या ट्रेनिंग सेंटर पर होता है।",
  facts: [
    ["फीस", "ट्रेनिंग, परीक्षा और सर्टिफिकेट मुफ्त"],
    ["उम्र", "नई ट्रेनिंग 15-45 साल; RPL 18-59 साल"],
    ["ट्रेनिंग अवधि", "आम तौर पर 300 से 600 घंटे (RPL में कम)"],
    ["रजिस्ट्रेशन", "Skill India Digital पोर्टल या ट्रेनिंग सेंटर"],
  ],
  notice: "PMKVY 4.0 की मंज़ूर अवधि वित्त वर्ष 2022-23 से 2025-26 तक थी। अगले चरण (PMKVY 5.0) की तैयारी की खबरें हैं, पर 15 अक्टूबर 2026 तक हमें नए चरण की केंद्रीय मंज़ूरी की आधिकारिक सूचना नहीं मिली। किसी सेंटर पर दाखिले से पहले Skill India Digital पोर्टल पर कोर्स और बैच की पुष्टि करें।",
  sections: [
    {
      id: "do-hisse",
      title: "योजना के दो मुख्य हिस्से",
      table: {
        head: ["हिस्सा", "किसके लिए", "क्या होता है"],
        rows: [
          ["अल्पकालिक ट्रेनिंग (STT)", "15-45 साल के युवा, पढ़ाई छोड़ चुके या बेरोज़गार", "300-600 घंटे की मुफ्त ट्रेनिंग, काम पर ट्रेनिंग (OJT), परीक्षा, सर्टिफिकेट"],
          ["पूर्व अनुभव की मान्यता (RPL)", "18-59 साल के लोग जो काम पहले से जानते हैं", "जांच, कम से कम 30 घंटे का ओरिएंटेशन, परीक्षा, सर्टिफिकेट"],
        ],
      },
    },
    {
      id: "fayde",
      title: "ट्रेनिंग में क्या मिलता है",
      list: [
        "<strong>मुफ्त ट्रेनिंग और परीक्षा:</strong> फेल होने पर एक बार दोबारा परीक्षा भी मुफ्त।",
        "<strong>किट:</strong> टी-शर्ट/जैकेट, बैग और हैंडबुक।",
        "<strong>दुर्घटना बीमा:</strong> सर्टिफिकेट मिलने पर एक साल का।",
        "<strong>सर्टिफिकेट:</strong> QR कोड वाला डिजिटल सर्टिफिकेट DigiLocker और Skill India Digital प्रोफाइल में, साथ में छपा हुआ सर्टिफिकेट।",
        "<strong>महिलाएं और दिव्यांग:</strong> नियम के अनुसार रहने-खाने या आने-जाने का खर्च; दिव्यांग उम्मीदवारों को सहायक उपकरण के लिए ₹5,000 तक की मदद।",
        "<strong>बाद में:</strong> रोज़गार मेले और अप्रेंटिसशिप मेले से जोड़ने की कोशिश। नौकरी की गारंटी नहीं है।",
      ],
      callout: { kind: "warn", html: "परीक्षा में बैठने के लिए <strong>70% से ज़्यादा बायोमेट्रिक हाज़िरी</strong> ज़रूरी है। कोई सेंटर फीस मांगे या बिना क्लास के सर्टिफिकेट देने की बात करे तो उससे दूर रहें।" },
    },
    {
      id: "registration",
      title: "रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"https://www.skillindiadigital.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Skill India Digital</a> पोर्टल या ऐप पर मोबाइल OTP और आधार से रजिस्टर करें।",
        "अपनी पढ़ाई और रुचि भरें; पोर्टल पर कोर्स (job role) और पास का ट्रेनिंग सेंटर चुनें।",
        "चाहें तो सीधे मान्यता प्राप्त ट्रेनिंग सेंटर पर जाकर दाखिला लें; सेंटर SID पर आपका नामांकन करता है।",
        "ट्रेनिंग पूरी करें, परीक्षा दें और पास होने पर DigiLocker से सर्टिफिकेट डाउनलोड करें।",
      ],
      callout: { kind: "info", html: "एक ही काम (job role) में दोबारा दाखिला नहीं होता। एक सेक्टर में अधिकतम दो बार, दूसरी बार ऊंचे स्तर के कोर्स में और पहले सर्टिफिकेट के 6 महीने बाद।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड (आधार से जुड़ा मोबाइल नंबर)",
        "कोर्स के लिए तय पढ़ाई का प्रमाण (मार्कशीट), अगर कोर्स में मांगा गया हो",
        "बैंक खाते का विवरण और पासपोर्ट साइज़ फोटो",
        "RPL के लिए उस काम के अनुभव का कोई प्रमाण, अगर हो",
      ],
    },
  ],
  official: [
    { href: "https://www.skillindiadigital.gov.in/", title: "Skill India Digital: रजिस्ट्रेशन और कोर्स" },
    { href: "https://www.msde.gov.in/", title: "कौशल विकास और उद्यमिता मंत्रालय (MSDE)" },
    { href: "https://www.myscheme.gov.in/schemes/pmkvy-stt", title: "myScheme: PMKVY 4.0 अल्पकालिक ट्रेनिंग" },
  ],
  faq: [
    { q: "क्या PMKVY ट्रेनिंग के पैसे लगते हैं?", a: "नहीं। योजना के तहत ट्रेनिंग, परीक्षा और सर्टिफिकेट मुफ्त है। कोई सेंटर फीस मांगे तो शिकायत करें।" },
    { q: "PMKVY में कितनी उम्र तक दाखिला मिलता है?", a: "नई ट्रेनिंग (STT) के लिए 15 से 45 साल और पहले से काम जानने वालों के सर्टिफिकेट (RPL) के लिए 18 से 59 साल।" },
    { q: "क्या ट्रेनिंग के दौरान पैसे (स्टाइपेंड) मिलते हैं?", a: "PMKVY 4.0 में हर उम्मीदवार को नकद स्टाइपेंड का नियम नहीं है। महिलाओं, दिव्यांगों और खास इलाकों के लिए रहने-खाने या आने-जाने का खर्च नियम के अनुसार मिलता है।" },
    { q: "सर्टिफिकेट कहां से मिलेगा?", a: "पास होने पर QR कोड वाला डिजिटल सर्टिफिकेट DigiLocker और Skill India Digital प्रोफाइल पर आता है; ट्रेनिंग सेंटर छपा सर्टिफिकेट भी देता है।" },
    { q: "क्या PMKVY 5.0 शुरू हो गई है?", a: "15 अक्टूबर 2026 तक हमें PMKVY 5.0 की केंद्रीय मंज़ूरी की आधिकारिक सूचना नहीं मिली। नए बैच और कोर्स Skill India Digital पोर्टल पर देखें।" },
  ],
  related: [
    { href: "/service/tarun-skill-development-pmkvy.html", emoji: "🛠️", title: "कौशल विकास ट्रेनिंग", text: "PMKVY से जुड़ी जानकारी" },
    { href: "/service/national-apprenticeship-scheme.html", emoji: "🏭", title: "अप्रेंटिसशिप योजना", text: "कंपनी में काम सीखते हुए स्टाइपेंड" },
    { href: "/service/pm-internship-scheme.html", emoji: "💼", title: "PM इंटर्नशिप योजना", text: "बड़ी कंपनियों में इंटर्नशिप" },
    { href: "/service/ncs-national-career-service.html", emoji: "🔎", title: "नेशनल करियर सर्विस", text: "नौकरी खोजें" },
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🔨", title: "PM विश्वकर्मा", text: "कारीगरों की ट्रेनिंग और लोन" },
  ],
  aside: [
    { href: "https://www.skillindiadigital.gov.in/", label: "🎓 Skill India Digital पर रजिस्टर" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
