import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; uco.bank.in, NATS and BFSI SSC portals could
// not be opened from the sandbox, so coverage of the official notice was used
// and cross-checked): testbook.com, adda247.com, careerpower.in, bankersadda.com,
// education.sakshi.com (2 articles), thedailyjagran.com, jnanaloka.com,
// freejobalert.com (article 3073302), pw.live.
// Agreed facts: Advt HO/HRM/RECR/2026-27/COM-02 (13 Oct 2026); 530 apprentice
// seats (state-wise, provisional; WB 86, UP 45, Bihar 34 the largest);
// registration 14 Oct - 29 Oct 2026 (NATS registration + BFSI SSC fee);
// online exam 7 Nov 2026 (11 AM); graduate in any discipline, degree on or
// after 01.04.2022; age 20-28 as on 01.10.2026, SC/ST +5, OBC-NCL +3, PwBD
// relaxation; stipend ₹16,650 per month (₹10,500 bank + ₹6,150 Govt DBT),
// 1 year; fee ₹800+GST (Gen/EWS/OBC male), ₹600+GST (women/transgender of
// these categories), ₹200+GST (SC/ST/PwBD); selection: online test (100 Q,
// 100 marks, 60 min), local language test, DV, medical. Exam sections left
// generic because sources differ on the language section.
export const ucoBankApprenticeRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UCO बैंक अप्रेंटिस 2026" },
  ],
  docHi: "UCO बैंक अप्रेंटिस 2026",
  title: "UCO बैंक अप्रेंटिस भर्ती 2026 — 530 पद, 29 अक्टूबर तक आवेदन",
  description: "UCO बैंक अप्रेंटिस 2026: ग्रेजुएट्स के लिए 530 सीटें, स्टाइपेंड ₹16,650 महीना। आवेदन 29 अक्टूबर 2026 तक, परीक्षा 7 नवंबर। उम्र 20-28, फीस, राज्यवार सीटें।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "UCO बैंक अप्रेंटिस भर्ती 2026: 530 सीटों पर आवेदन 29 अक्टूबर तक",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> सरकारी बैंक UCO बैंक ने ग्रेजुएट युवाओं के लिए <strong>530 अप्रेंटिस सीटों</strong> पर एक साल की ट्रेनिंग निकाली है। आवेदन की आखिरी तारीख <strong>29 अक्टूबर 2026</strong> है और ऑनलाइन परीक्षा <strong>7 नवंबर 2026</strong> को होगी। हर महीने <strong>₹16,650 स्टाइपेंड</strong> मिलेगा। यह अप्रेंटिसशिप है, पक्की नौकरी नहीं।",
  facts: [
    ["कुल सीटें", "530 (राज्यवार)"],
    ["आखिरी तारीख", "29 अक्टूबर 2026"],
    ["उम्र", "20 से 28 साल (1 अक्टूबर 2026 को)"],
    ["स्टाइपेंड", "₹16,650 प्रति माह, 1 साल"],
  ],
  notice: "23 अक्टूबर 2026 तक आवेदन चालू है (विज्ञापन HO/HRM/RECR/2026-27/COM-02)। यह जानकारी UCO बैंक के नोटिफिकेशन पर आधारित कई रिपोर्टों से जांची गई है; फॉर्म भरने से पहले uco.bank.in पर पूरा नोटिफिकेशन पढ़ें। यह साइट निजी है, बैंक या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["नोटिफिकेशन", "13 अक्टूबर 2026"],
          ["आवेदन शुरू", "14 अक्टूबर 2026"],
          ["रजिस्ट्रेशन और फीस की आखिरी तारीख", "29 अक्टूबर 2026"],
          ["ऑनलाइन परीक्षा", "7 नवंबर 2026 (सुबह 11 बजे)"],
        ],
      },
    },
    {
      id: "pad",
      title: "सीटें और स्टाइपेंड",
      table: {
        head: ["राज्य (सबसे ज़्यादा सीटें)", "सीटें"],
        rows: [
          ["पश्चिम बंगाल", "86"],
          ["उत्तर प्रदेश", "45"],
          ["बिहार", "34"],
          ["बाकी राज्य", "नोटिफिकेशन में देखें"],
          ["<strong>कुल</strong>", "<strong>530</strong>"],
        ],
      },
      callout: { kind: "info", html: "स्टाइपेंड ₹16,650 महीना: ₹10,500 बैंक देगा और ₹6,150 सरकार DBT से सीधे खाते में भेजेगी। ट्रेनिंग 1 साल की है। बैंक चुने गए राज्य के किसी भी ज़िले में ट्रेनिंग दे सकता है। अप्रेंटिसशिप के बाद नौकरी की गारंटी नहीं होती।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> किसी भी विषय में ग्रेजुएशन, जो <strong>1 अप्रैल 2022 या उसके बाद</strong> पूरा हुआ हो। डिग्री/मार्कशीट हाथ में होनी चाहिए; फाइनल ईयर वाले आवेदन नहीं कर सकते।",
        "<strong>उम्र:</strong> 1 अक्टूबर 2026 को 20 से 28 साल।",
        "<strong>उम्र में छूट:</strong> SC/ST को 5 साल, OBC (नॉन-क्रीमी लेयर) को 3 साल, दिव्यांग को नियम अनुसार (10 से 15 साल)।",
        "<strong>स्थानीय भाषा:</strong> जिस राज्य की सीट के लिए आवेदन करें, उसकी स्थानीय भाषा पढ़ना-लिखना-बोलना आना चाहिए; इसकी जांच होगी।",
        "जिसने पहले कहीं अप्रेंटिसशिप की है या कर रहा है, वह सामान्यतः पात्र नहीं होता; शर्त नोटिफिकेशन में देखें।",
      ],
      html: "अपनी उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 1 अक्टूबर 2026 की तारीख डालकर देखें।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["General / EWS / OBC (पुरुष)", "₹800 + GST"],
          ["General / EWS / OBC (महिला, ट्रांसजेंडर)", "₹600 + GST"],
          ["SC / ST / दिव्यांग (PwBD)", "₹200 + GST"],
        ],
      },
      callout: { kind: "info", html: "फीस BFSI SSC के पोर्टल पर ऑनलाइन, 29 अक्टूबर 2026 तक भरनी है। फीस वापस नहीं होती।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>ऑनलाइन परीक्षा:</strong> 100 प्रश्न, 100 अंक, 60 मिनट, चार हिस्से (हर हिस्सा 25 अंक)। परीक्षा BFSI सेक्टर स्किल काउंसिल लेगी।",
        "<strong>स्थानीय भाषा टेस्ट:</strong> दस्तावेज़ जांच के समय।",
        "<strong>दस्तावेज़ जांच और मेडिकल फिटनेस</strong> के बाद ट्रेनिंग शुरू।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://nats.education.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nats.education.gov.in</a> पर छात्र (Student) के रूप में रजिस्ट्रेशन करें और प्रोफाइल पूरी करें।",
        "NATS पर UCO बैंक की अप्रेंटिसशिप खोजकर आवेदन करें।",
        "इसके बाद BFSI SSC के पोर्टल (beep.bfsissc.com) पर आए ईमेल/लिंक से परीक्षा फीस भरें और जानकारी पूरी करें।",
        "29 अक्टूबर 2026 से पहले सब पूरा करें और आवेदन व फीस की रसीद संभालकर रखें।",
      ],
      callout: { kind: "warn", html: "केवल NATS पर आवेदन काफी नहीं है; BFSI SSC पर फीस भरे बिना आप परीक्षा में नहीं बैठ पाएंगे। ठगों से सावधान रहें; चयन केवल परीक्षा से होता है।" },
    },
  ],
  official: [
    { href: "https://www.uco.bank.in/", title: "UCO बैंक", note: "Careers में नोटिफिकेशन" },
    { href: "https://nats.education.gov.in/", title: "NATS अप्रेंटिसशिप पोर्टल", note: "रजिस्ट्रेशन और आवेदन" },
  ],
  faq: [
    { q: "UCO बैंक अप्रेंटिस का फॉर्म कब तक भर सकते हैं?", a: "29 अक्टूबर 2026 तक। फीस भी इसी तारीख तक भरनी है।" },
    { q: "UCO बैंक अप्रेंटिस को कितना पैसा मिलेगा?", a: "₹16,650 प्रति माह स्टाइपेंड, एक साल तक। इसमें ₹10,500 बैंक देता है और ₹6,150 सरकार DBT से भेजती है।" },
    { q: "किसने 2021 में ग्रेजुएशन किया है, क्या वह आवेदन कर सकता है?", a: "नहीं। ग्रेजुएशन 1 अप्रैल 2022 या उसके बाद पूरा होना चाहिए।" },
    { q: "परीक्षा कब है?", a: "ऑनलाइन परीक्षा 7 नवंबर 2026 को सुबह 11 बजे है। एडमिट कार्ड BFSI SSC से मिलेगा।" },
    { q: "क्या यह पक्की बैंक नौकरी है?", a: "नहीं। यह एक साल की अप्रेंटिसशिप (ट्रेनिंग) है। इसके बाद नौकरी की कोई गारंटी नहीं है।" },
  ],
  related: [
    { href: "/jobs/lic-hfl-apprentice-recruitment-2026.html", emoji: "🏠", title: "LIC HFL अप्रेंटिस 2026", text: "ग्रेजुएट्स के लिए 232 सीटें" },
    { href: "/jobs/nicl-ao-recruitment-2026.html", emoji: "🏦", title: "NICL AO भर्ती", text: "बीमा कंपनी में ऑफिसर" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 अक्टूबर 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://nats.education.gov.in/", label: "🎓 NATS पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
