import type { DocGuide } from "../doc/types";

// Sources (checked 19 Oct 2026; oav.edu.in not opened from the sandbox, so
// coverage of Advt. 01/2026 was used):
// - sarkarijobs.com, adda247, careerpower, testbook, brinto, freejobalert,
//   sahisarkarijobs: 815 Principal and Teacher posts in Odisha Adarsha
//   Vidyalayas (OAV) and Odisha Mining Adarsha Vidyalayas (OMAV); online
//   registration 12 Oct - 11 Nov 2026 (5 PM) at oav.edu.in only; selection
//   CBT, interview, performance test where needed.
// - Principal age (1 Jan 2026) above 32 and below 50, relaxation +5 SC/ST/
//   SEBC/women/ex-servicemen, +10 PwD; Principal fee ₹2,000 (UR/SEBC),
//   ₹1,250 (SC/ST/PwD).
// Left vague (sources conflict): post-wise split (one: Principal 109, PGT
// 101, TGT 362, Art 88, PET 83, Computer 72), teacher age limit, teacher
// fee, pay, exam date.
export const oavsTeacherRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "OAVS शिक्षक भर्ती 2026" },
  ],
  docHi: "OAVS शिक्षक भर्ती 2026",
  title: "OAVS शिक्षक भर्ती 2026: 815 प्रिंसिपल और टीचर पद, आवेदन 11 नवंबर तक",
  description: "ओडिशा आदर्श विद्यालय संगठन (OAVS) भर्ती 2026: प्रिंसिपल, PGT, TGT आदि के 815 पद। ऑनलाइन आवेदन 11 नवंबर 2026 शाम 5 बजे तक oav.edu.in पर।",
  published: "2026-10-19",
  modified: "2026-10-19",
  verified: "19 अक्टूबर 2026",
  h1: "OAVS शिक्षक भर्ती 2026: 815 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> ओडिशा आदर्श विद्यालय संगठन (OAVS) ने विज्ञापन 01/2026 में ओडिशा आदर्श विद्यालयों (OAV) और ओडिशा माइनिंग आदर्श विद्यालयों (OMAV) के लिए <strong>815 पद</strong> निकाले हैं: प्रिंसिपल, PGT, TGT, आर्ट टीचर, PET और कंप्यूटर टीचर। ऑनलाइन आवेदन <strong>11 नवंबर 2026 शाम 5 बजे</strong> तक केवल oav.edu.in पर है।",
  facts: [
    ["कुल पद", "815 (विज्ञापन 01/2026)"],
    ["आवेदन की आखिरी तारीख", "11 नवंबर 2026, शाम 5 बजे"],
    ["चयन", "CBT, इंटरव्यू, ज़रूरत हो तो परफॉर्मेंस टेस्ट"],
    ["आवेदन", "<a href=\"https://oav.edu.in/\" target=\"_blank\" rel=\"noopener nofollow\">oav.edu.in</a>"],
  ],
  notice: "19 अक्टूबर 2026 तक: आवेदन चालू है। पद-वार संख्या, शिक्षक पदों की उम्र सीमा और फीस अलग-अलग रिपोर्टों में अलग है; सही जानकारी के लिए oav.edu.in पर विस्तृत विज्ञापन ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन रजिस्ट्रेशन शुरू", "12 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "11 नवंबर 2026 (शाम 5 बजे)"],
          ["CBT परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      intro: "पद: प्रिंसिपल, PGT, TGT, आर्ट टीचर, PET (शारीरिक शिक्षा शिक्षक) और कंप्यूटर टीचर। एक रिपोर्ट के अनुसार बंटवारा इस प्रकार है, पर विस्तृत विज्ञापन में यह बदला हुआ बताया गया है:",
      table: {
        head: ["पद", "पद संख्या (एक रिपोर्ट के अनुसार)"],
        rows: [
          ["प्रिंसिपल", "109"],
          ["PGT", "101"],
          ["TGT", "362"],
          ["आर्ट टीचर", "88"],
          ["PET", "83"],
          ["कंप्यूटर टीचर", "72"],
        ],
      },
      callout: { kind: "info", html: "पद-वार सही संख्या, विषय-वार पद और वेतन विज्ञापन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>प्रिंसिपल:</strong> कम से कम 45% अंकों के साथ मास्टर डिग्री, B.Ed और PGT/वाइस प्रिंसिपल/प्रिंसिपल के रूप में अनुभव। उम्र 1 जनवरी 2026 को 32 से ज़्यादा और 50 से कम।",
        "<strong>PGT:</strong> संबंधित विषय में मास्टर डिग्री (या इंटीग्रेटेड PG) और B.Ed।",
        "<strong>TGT:</strong> संबंधित विषयों के साथ स्नातक और B.Ed; कई रिपोर्टों में OSSTET/OTET या CTET पेपर-2 भी ज़रूरी बताया गया है।",
        "<strong>शिक्षक पदों की उम्र:</strong> रिपोर्टों में अलग-अलग सीमा दी गई है; विज्ञापन में देखें।",
        "<strong>छूट:</strong> SC/ST, SEBC, महिलाएं और पूर्व सैनिक को 5 साल, दिव्यांग को 10 साल (प्रिंसिपल पद के लिए रिपोर्टों के अनुसार)।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["पद", "UR/SEBC", "SC/ST/दिव्यांग"],
        rows: [
          ["प्रिंसिपल", "₹2,000", "₹1,250"],
          ["शिक्षक पद", "विज्ञापन में देखें", "विज्ञापन में देखें"],
        ],
      },
      callout: { kind: "info", html: "फीस वापस नहीं होती; बैंक शुल्क अलग से लगता है।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कंप्यूटर आधारित परीक्षा (CBT)।</strong>",
        "<strong>इंटरव्यू।</strong>",
        "<strong>परफॉर्मेंस टेस्ट:</strong> जिन पदों में ज़रूरी हो (जैसे आर्ट, PET)।",
        "<strong>दस्तावेज़ जांच।</strong>",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://oav.edu.in/\" target=\"_blank\" rel=\"noopener nofollow\">oav.edu.in</a> पर भर्ती (Recruitment) सेक्शन खोलें और विज्ञापन 01/2026 पढ़ें।",
        "मोबाइल और ईमेल से रजिस्ट्रेशन करें, फिर पद चुनकर फॉर्म भरें।",
        "फोटो, हस्ताक्षर और प्रमाण पत्र अपलोड करें (<a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a>, <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a>)।",
        "फीस ऑनलाइन भरें, सबमिट करें और फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन केवल oav.edu.in पर ऑनलाइन होगा; डाक या किसी और तरीके से भेजा फॉर्म नहीं माना जाएगा।" },
    },
  ],
  official: [
    { href: "https://oav.edu.in/", title: "ओडिशा आदर्श विद्यालय संगठन (OAVS)", note: "विज्ञापन 01/2026 और ऑनलाइन आवेदन" },
  ],
  faq: [
    { q: "OAVS भर्ती 2026 का फॉर्म कब तक भरें?", a: "11 नवंबर 2026 शाम 5 बजे तक, केवल oav.edu.in पर।" },
    { q: "कितने पद हैं?", a: "कुल 815: प्रिंसिपल, PGT, TGT, आर्ट टीचर, PET और कंप्यूटर टीचर।" },
    { q: "क्या B.Ed ज़रूरी है?", a: "प्रिंसिपल, PGT और TGT के लिए हां। दूसरे पदों की योग्यता विज्ञापन में देखें।" },
    { q: "प्रिंसिपल की फीस कितनी है?", a: "UR/SEBC के लिए ₹2,000 और SC/ST/दिव्यांग के लिए ₹1,250। शिक्षक पदों की फीस विज्ञापन में देखें।" },
    { q: "परीक्षा कब होगी?", a: "CBT की तारीख अभी घोषित नहीं है। सूचना oav.edu.in पर आएगी।" },
  ],
  related: [
    { href: "/jobs/bpsc-tre-4-teacher-recruitment-2026.html", emoji: "🏫", title: "BPSC TRE 4.0", text: "बिहार शिक्षक भर्ती" },
    { href: "/jobs/cg-vyapam-lecturer-recruitment-2026.html", emoji: "📚", title: "CG व्याख्याता भर्ती", text: "छत्तीसगढ़ के 854 पद" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://oav.edu.in/", label: "🏫 oav.edu.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
