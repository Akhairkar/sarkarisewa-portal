import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; nationalinsurance.nic.co.in and the official
// PDF could not be opened from the sandbox, so coverage of the NICL notice was
// used and cross-checked): oliveboard.in/nicl-ao-notification, bankersadda.com
// (apply online), freejobalert.com (article 3071380), prepp.in/nicl-exam,
// careerpower.in/nicl-ao, campusreality.in, resultbharat.com, onlineresult.in.
// Agreed facts: 321 AO (Scale I) posts = 200 Generalist + 121 Specialist
// (Finance CA/CMA 20, Legal 20, IT 11 incl. 1 backlog, Automobile Engineers 20,
// Risk Engineers 28, Company Secretary 2, Agriculture 20); online 8-28 Oct
// 2026; fee ₹1,000 (₹250 SC/ST/PwBD); age 21-30 on 1 Oct 2026, SC/ST +5,
// OBC-NCL +3; graduate/PG with 60% (55% SC/ST/PwBD); basic pay ₹82,485;
// prelims + mains (objective + descriptive) + interview. Prelims 17 Nov 2026
// and mains 22 Dec 2026 are reported dates (tentative). Discipline-wise
// specialist qualifications and PwBD relaxation: left to the notification.
export const niclAoRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "NICL AO 2026" },
  ],
  docHi: "NICL AO भर्ती 2026",
  title: "नेशनल इंश्योरेंस (NICL) एओ भर्ती 2026 — 321 पद",
  description: "नेशनल इंश्योरेंस (NICL) AO Scale-I भर्ती 2026: 321 पद (200 जनरलिस्ट, 121 स्पेशलिस्ट), आवेदन 28 अक्टूबर 2026 तक। योग्यता, उम्र, फीस और आवेदन तरीका।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "NICL AO भर्ती 2026: 321 प्रशासनिक अधिकारी पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> सरकारी बीमा कंपनी नेशनल इंश्योरेंस कंपनी लिमिटेड (NICL) ने Administrative Officer (AO) Scale-I के <strong>321 पदों</strong> की भर्ती निकाली है: 200 जनरलिस्ट और 121 स्पेशलिस्ट। ऑनलाइन आवेदन <strong>8 अक्टूबर से 28 अक्टूबर 2026</strong> तक है। उम्र 1 अक्टूबर 2026 को 21 से 30 साल होनी चाहिए।",
  facts: [
    ["कुल पद", "321 (200 जनरलिस्ट + 121 स्पेशलिस्ट)"],
    ["आखिरी तारीख", "28 अक्टूबर 2026"],
    ["उम्र", "21 से 30 साल (1 अक्टूबर 2026 को)"],
    ["आवेदन", "<a href=\"https://nationalinsurance.nic.co.in/\" target=\"_blank\" rel=\"noopener nofollow\">nationalinsurance.nic.co.in</a> (Recruitment सेक्शन)"],
  ],
  notice: "18 अक्टूबर 2026 तक आवेदन चालू है। यह जानकारी NICL के नोटिफिकेशन पर आधारित रिपोर्टों से जांची गई है; फॉर्म भरने से पहले NICL की वेबसाइट पर पूरा विज्ञापन ज़रूर पढ़ें। यह साइट निजी है, NICL या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "8 अक्टूबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "28 अक्टूबर 2026"],
          ["प्रारंभिक परीक्षा (Phase-I)", "17 नवंबर 2026 (संभावित)"],
          ["मुख्य परीक्षा (Phase-II)", "22 दिसंबर 2026 (संभावित)"],
          ["इंटरव्यू", "बाद में घोषित होगा"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["शाखा (Discipline)", "पद"],
        rows: [
          ["जनरलिस्ट", "200"],
          ["फाइनेंस (CA/CMA)", "20"],
          ["लीगल", "20"],
          ["इंफॉर्मेशन टेक्नोलॉजी (IT)", "11 (1 बैकलॉग सहित)"],
          ["ऑटोमोबाइल इंजीनियर", "20"],
          ["रिस्क इंजीनियर", "28"],
          ["कंपनी सेक्रेटरी", "2"],
          ["एग्रीकल्चर", "20"],
          ["<strong>कुल</strong>", "<strong>321</strong>"],
        ],
      },
      callout: { kind: "info", html: "<strong>वेतन:</strong> शुरुआती बेसिक पे ₹82,485 (स्केल ₹82,485 से ₹1,56,745), साथ में DA, HRA और कंपनी के नियमों के अनुसार भत्ते। उम्मीदवार केवल <strong>एक</strong> शाखा (discipline) के लिए आवेदन कर सकता है। वर्गवार (SC/ST/OBC/EWS) पद नोटिफिकेशन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>जनरलिस्ट:</strong> किसी भी विषय में ग्रेजुएशन या पोस्ट-ग्रेजुएशन, कम से कम 60% अंक (SC/ST/PwBD के लिए 55%)।",
        "<strong>स्पेशलिस्ट:</strong> संबंधित विषय की डिग्री/योग्यता (जैसे CA/CMA, LLB, B.E./B.Tech, CS, कृषि में डिग्री)। हर शाखा की सटीक योग्यता नोटिफिकेशन में देखें।",
        "<strong>उम्र:</strong> 1 अक्टूबर 2026 को कम से कम 21 और अधिकतम 30 साल।",
        "<strong>उम्र में छूट:</strong> SC/ST को 5 साल, OBC (नॉन-क्रीमी लेयर) को 3 साल। PwBD और अन्य वर्गों की छूट नोटिफिकेशन में देखें। छूट जोड़ने पर भी अधिकतम उम्र 45 साल से ज़्यादा नहीं होगी।",
      ],
      html: "अपनी सही उम्र हमारे <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 1 अक्टूबर 2026 की तारीख डालकर देखें।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["SC / ST / PwBD", "₹250"],
          ["बाकी सभी (General, OBC, EWS)", "₹1,000"],
        ],
      },
      callout: { kind: "info", html: "फीस में सूचना शुल्क और GST शामिल है; बैंक का लेनदेन शुल्क अलग से उम्मीदवार देगा। फीस केवल ऑनलाइन भरी जाती है और वापस नहीं होती।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>प्रारंभिक परीक्षा (Phase-I):</strong> ऑनलाइन, वस्तुनिष्ठ (objective)। यह केवल छंटनी के लिए है।",
        "<strong>मुख्य परीक्षा (Phase-II):</strong> ऑनलाइन, वस्तुनिष्ठ और वर्णनात्मक (descriptive) दोनों।",
        "<strong>इंटरव्यू:</strong> मुख्य परीक्षा में चुने गए उम्मीदवारों का।",
        "<strong>दस्तावेज़ जांच और मेडिकल</strong> के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://nationalinsurance.nic.co.in/\" target=\"_blank\" rel=\"noopener nofollow\">nationalinsurance.nic.co.in</a> खोलें और Recruitment सेक्शन में AO Scale-I 2026 का विज्ञापन पढ़ें।",
        "\"Apply Online\" लिंक से नया रजिस्ट्रेशन करें; मोबाइल और ईमेल पर आया रजिस्ट्रेशन नंबर और पासवर्ड संभालकर रखें।",
        "एक शाखा (Generalist या कोई Specialist discipline) चुनें, शिक्षा और वर्ग की जानकारी भरें।",
        "फोटो, हस्ताक्षर, अंगूठे का निशान और हाथ से लिखा घोषणा-पत्र तय साइज़ में अपलोड करें। साइज़ ठीक करने के लिए <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> काम आ सकते हैं।",
        "28 अक्टूबर 2026 से पहले फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आखिरी दिनों में वेबसाइट धीमी हो जाती है, इसलिए पहले ही फॉर्म भरें। नौकरी दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://nationalinsurance.nic.co.in/", title: "नेशनल इंश्योरेंस कंपनी लिमिटेड", note: "Recruitment सेक्शन में विज्ञापन और आवेदन लिंक" },
  ],
  faq: [
    { q: "NICL AO 2026 का फॉर्म कब तक भर सकते हैं?", a: "28 अक्टूबर 2026 तक। फीस भी इसी तारीख तक ऑनलाइन भरनी है।" },
    { q: "NICL AO 2026 में कितने पद हैं?", a: "कुल 321 पद: 200 जनरलिस्ट और 121 स्पेशलिस्ट (फाइनेंस, लीगल, IT, ऑटोमोबाइल, रिस्क इंजीनियर, कंपनी सेक्रेटरी, एग्रीकल्चर)।" },
    { q: "उम्र सीमा क्या है?", a: "1 अक्टूबर 2026 को 21 से 30 साल। SC/ST को 5 साल और OBC (नॉन-क्रीमी लेयर) को 3 साल की छूट।" },
    { q: "ग्रेजुएशन में कितने अंक चाहिए?", a: "कम से कम 60% अंक; SC/ST/PwBD के लिए 55%।" },
    { q: "फीस कितनी है?", a: "SC/ST/PwBD के लिए ₹250 और बाकी सभी के लिए ₹1,000।" },
    { q: "क्या एक से ज़्यादा शाखा के लिए आवेदन कर सकते हैं?", a: "नहीं। केवल एक शाखा (discipline) के लिए आवेदन किया जा सकता है।" },
  ],
  related: [
    { href: "/exams/banking-ibps-sbi-calendar-2026-2027.html", emoji: "🏦", title: "बैंकिंग परीक्षा कैलेंडर", text: "IBPS, SBI और अन्य परीक्षाएं" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 अक्टूबर 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://nationalinsurance.nic.co.in/", label: "🛡️ NICL की वेबसाइट" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
