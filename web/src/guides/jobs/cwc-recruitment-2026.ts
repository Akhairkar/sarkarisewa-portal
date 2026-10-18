import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; cewacor.nic.in and the official PDF could not
// be opened from the sandbox, so coverage of the CWC notice was used and
// cross-checked): adda247.com, bankersadda.com, testbook.com, india.com,
// thedailyjagran.com, resultjunction.com, resultbharat.com, freejobalert.com
// (article 3074247), sundayguardianlive.com.
// Agreed facts: Advt CWC/I-Manpower/DR/Rectt/2026/01; 327 posts (AM General
// 70, AM Technical 60, AM Finance 10, AM Civil 22, AM Electrical 5, AM
// Mechanical 4, JE General 78, JE Technical 78); online 17 Oct - 15 Nov 2026
// (fee too); age 18-28 on 15 Nov 2026, SC/ST +5, OBC-NCL +3, PwBD +10; fee
// ₹1,350 (₹850 + ₹500 intimation) for UR/EWS/OBC, ₹500 (intimation only) for
// SC/ST/PwBD/ex-servicemen (women: sources differ, left to the notice); pay
// AM ₹40,000-1,40,000, JE ₹29,000-93,000; online exam + DV, interview only
// for AM posts. JE General = graduate + computer knowledge; JE Technical =
// B.Sc. in agriculture/botany/zoology/biotech etc. AM qualifications differ by
// post: only stated generally. Exam date not announced. One site's "347" posts
// is treated as an error.
export const cwcRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "CWC भर्ती 2026" },
  ],
  docHi: "CWC भर्ती 2026",
  title: "केंद्रीय भंडारण निगम (CWC) भर्ती 2026 — 327 पद",
  description: "CWC भर्ती 2026: असिस्टेंट मैनेजर और जूनियर एग्जीक्यूटिव के 327 पद, आवेदन 15 नवंबर 2026 तक cewacor.nic.in पर। योग्यता, उम्र 18-28, फीस और वेतन।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "CWC भर्ती 2026: असिस्टेंट मैनेजर और जूनियर एग्जीक्यूटिव के 327 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> केंद्र सरकार की कंपनी केंद्रीय भंडारण निगम (Central Warehousing Corporation, CWC) ने <strong>327 पदों</strong> की भर्ती निकाली है: असिस्टेंट मैनेजर के 171 और जूनियर एग्जीक्यूटिव के 156 पद। ऑनलाइन आवेदन <strong>17 अक्टूबर से 15 नवंबर 2026</strong> तक cewacor.nic.in पर है। उम्र 18 से 28 साल होनी चाहिए।",
  facts: [
    ["कुल पद", "327 (असिस्टेंट मैनेजर 171, जूनियर एग्जीक्यूटिव 156)"],
    ["आखिरी तारीख", "15 नवंबर 2026"],
    ["उम्र", "18 से 28 साल (15 नवंबर 2026 को)"],
    ["आवेदन", "<a href=\"https://cewacor.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">cewacor.nic.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक आवेदन चालू है (विज्ञापन संख्या CWC/I-Manpower/DR/Rectt/2026/01)। यह जानकारी CWC के नोटिफिकेशन पर आधारित रिपोर्टों से जांची गई है; फॉर्म भरने से पहले cewacor.nic.in पर पूरा विज्ञापन ज़रूर पढ़ें। यह साइट निजी है, CWC या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "17 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "15 नवंबर 2026"],
          ["फीस भरने की आखिरी तारीख", "15 नवंबर 2026"],
          ["ऑनलाइन परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "वेतनमान"],
        rows: [
          ["असिस्टेंट मैनेजर (जनरल)", "70", "₹40,000 – ₹1,40,000"],
          ["असिस्टेंट मैनेजर (टेक्निकल)", "60", "₹40,000 – ₹1,40,000"],
          ["असिस्टेंट मैनेजर (फाइनेंस)", "10", "₹40,000 – ₹1,40,000"],
          ["असिस्टेंट मैनेजर (सिविल इंजीनियरिंग)", "22", "₹40,000 – ₹1,40,000"],
          ["असिस्टेंट मैनेजर (इलेक्ट्रिकल)", "5", "₹40,000 – ₹1,40,000"],
          ["असिस्टेंट मैनेजर (मैकेनिकल)", "4", "₹40,000 – ₹1,40,000"],
          ["जूनियर एग्जीक्यूटिव (जनरल)", "78", "₹29,000 – ₹93,000"],
          ["जूनियर एग्जीक्यूटिव (टेक्निकल)", "78", "₹29,000 – ₹93,000"],
          ["<strong>कुल</strong>", "<strong>327</strong>", ""],
        ],
      },
      callout: { kind: "info", html: "वेतन के साथ DA, HRA और कंपनी के नियमों के अनुसार भत्ते मिलते हैं। वर्गवार (SC/ST/OBC/EWS) पद नोटिफिकेशन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>जूनियर एग्जीक्यूटिव (जनरल):</strong> किसी भी विषय में ग्रेजुएशन और कंप्यूटर (MS Office) की जानकारी।",
        "<strong>जूनियर एग्जीक्यूटिव (टेक्निकल):</strong> B.Sc. (जैसे कृषि, वनस्पति विज्ञान, प्राणी विज्ञान, बायोटेक्नोलॉजी)। मान्य विषयों की पूरी सूची नोटिफिकेशन में देखें।",
        "<strong>असिस्टेंट मैनेजर:</strong> पद के अनुसार पोस्ट-ग्रेजुएशन/PG डिप्लोमा, B.E./B.Tech (सिविल, इलेक्ट्रिकल, मैकेनिकल) या फाइनेंस की योग्यता। हर पद की सटीक योग्यता नोटिफिकेशन में देखें।",
        "<strong>उम्र:</strong> 15 नवंबर 2026 को 18 से 28 साल।",
        "<strong>उम्र में छूट:</strong> SC/ST को 5 साल, OBC (नॉन-क्रीमी लेयर) को 3 साल, दिव्यांग (PwBD) को 10 साल। पूर्व सैनिक और अन्य छूट नोटिफिकेशन में देखें।",
      ],
      html: "अपनी उम्र हमारे <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 15 नवंबर 2026 की तारीख डालकर देखें।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["General / OBC / EWS", "₹1,350 (₹850 आवेदन शुल्क + ₹500 सूचना शुल्क)"],
          ["SC / ST / PwBD / पूर्व सैनिक", "₹500 (केवल सूचना शुल्क)"],
          ["महिला उम्मीदवार", "नोटिफिकेशन में देखें"],
        ],
      },
      callout: { kind: "info", html: "फीस केवल ऑनलाइन, 15 नवंबर 2026 तक भरनी है। महिलाओं की फीस को लेकर रिपोर्टों में अंतर है, इसलिए फीस भरने से पहले विज्ञापन में अपना वर्ग ज़रूर जांचें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>ऑनलाइन परीक्षा:</strong> सभी पदों के लिए। विषय-ज्ञान और वर्णनात्मक (descriptive) टेस्ट में न्यूनतम अंक: अनारक्षित 40%, आरक्षित वर्ग 35%।",
        "<strong>इंटरव्यू:</strong> केवल असिस्टेंट मैनेजर पदों के लिए।",
        "<strong>दस्तावेज़ जांच</strong> और मेडिकल के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://cewacor.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">cewacor.nic.in</a> खोलें और Careers/Recruitment में विज्ञापन CWC/I-Manpower/DR/Rectt/2026/01 पढ़ें।",
        "\"Apply Online\" से नया रजिस्ट्रेशन करें; रजिस्ट्रेशन नंबर और पासवर्ड संभालकर रखें।",
        "पद चुनें, शिक्षा, वर्ग और पते की जानकारी भरें।",
        "फोटो और हस्ताक्षर तय साइज़ में अपलोड करें; ज़रूरत हो तो <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> इस्तेमाल करें।",
        "फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आखिरी दिनों का इंतज़ार न करें। नौकरी दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें; चयन केवल परीक्षा से होता है।" },
    },
  ],
  official: [
    { href: "https://cewacor.nic.in/", title: "केंद्रीय भंडारण निगम (CWC)", note: "विज्ञापन और ऑनलाइन आवेदन" },
  ],
  faq: [
    { q: "CWC भर्ती 2026 का फॉर्म कब तक भर सकते हैं?", a: "15 नवंबर 2026 तक। फीस भी इसी तारीख तक भरनी है।" },
    { q: "CWC 2026 में कितने पद हैं?", a: "कुल 327 पद: असिस्टेंट मैनेजर के 171 और जूनियर एग्जीक्यूटिव के 156 (जनरल 78, टेक्निकल 78)।" },
    { q: "जूनियर एग्जीक्यूटिव (जनरल) के लिए क्या योग्यता चाहिए?", a: "किसी भी विषय में ग्रेजुएशन और कंप्यूटर की जानकारी।" },
    { q: "उम्र सीमा क्या है?", a: "15 नवंबर 2026 को 18 से 28 साल। SC/ST को 5, OBC (नॉन-क्रीमी लेयर) को 3 और दिव्यांग को 10 साल की छूट।" },
    { q: "क्या जूनियर एग्जीक्यूटिव के लिए इंटरव्यू होगा?", a: "रिपोर्टों के अनुसार इंटरव्यू केवल असिस्टेंट मैनेजर पदों के लिए है; जूनियर एग्जीक्यूटिव का चयन ऑनलाइन परीक्षा और दस्तावेज़ जांच से होगा।" },
  ],
  related: [
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "ग्रेजुएट के लिए और भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "15 नवंबर 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://cewacor.nic.in/", label: "🏬 cewacor.nic.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
