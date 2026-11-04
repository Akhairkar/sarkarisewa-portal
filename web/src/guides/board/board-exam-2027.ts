import type { DocGuide } from "../doc/types";

// Hub of the board-exam 2027 pages. Only boards whose 2027 dates several
// reports agree on are listed with dates; CBSE had not published its 2027 date
// sheet as of 4 Nov 2026 (careers360, shiksha). Dates as on the board pages.
const rows: [string, string, string, string][] = [
  ["/board-exam/up-board-exam-2027.html", "UP बोर्ड (UPMSP)", "5 – 24 फरवरी 2027", "5 – 24 फरवरी 2027"],
  ["/board-exam/mp-board-exam-2027.html", "MP बोर्ड (MPBSE)", "24 फरवरी – 18 मार्च 2027", "17 फरवरी – 19 मार्च 2027"],
  ["/board-exam/maharashtra-board-exam-2027.html", "महाराष्ट्र बोर्ड (SSC/HSC)", "15 फरवरी – 11 मार्च 2027", "8 फरवरी – 16 मार्च 2027"],
];

export const boardExam2027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "Students", href: "/students/" },
    { label: "बोर्ड परीक्षा 2027" },
  ],
  docHi: "बोर्ड परीक्षा 2027",
  title: "Board Exam 2027 Time Table: राज्यवार 10वीं-12वीं परीक्षा की तारीखें",
  description: "बोर्ड परीक्षा 2027 की राज्यवार तारीखें: UP बोर्ड, MP बोर्ड, महाराष्ट्र SSC/HSC का टाइम टेबल, प्रैक्टिकल, एडमिट कार्ड और पास मार्क्स। CBSE और दूसरे बोर्ड की तारीख आते ही जोड़ी जाएगी।",
  published: "2026-11-04",
  modified: "2026-11-04",
  verified: "4 नवंबर 2026",
  h1: "बोर्ड परीक्षा 2027: राज्यवार 10वीं और 12वीं टाइम टेबल",
  lead: "यहां उन बोर्डों की <strong>2027 की परीक्षा की तारीखें</strong> हैं जिन्होंने कार्यक्रम जारी कर दिया है। हर बोर्ड के पेज पर टाइम टेबल डाउनलोड करने का तरीका, प्रैक्टिकल, एडमिट कार्ड, पास मार्क्स और तैयारी की योजना है। <strong>CBSE</strong> ने 4 नवंबर 2026 तक 2027 की डेटशीट जारी नहीं की थी; जारी होते ही यहां जोड़ी जाएगी।",
  facts: [
    ["UP बोर्ड", "5 – 24 फरवरी 2027"],
    ["MP बोर्ड", "17 फरवरी – 19 मार्च 2027"],
    ["महाराष्ट्र बोर्ड", "8 फरवरी – 16 मार्च 2027"],
    ["CBSE", "डेटशीट का इंतज़ार"],
  ],
  notice: "तारीखें बोर्डों की घोषणा पर आधारित रिपोर्टों से ली गई हैं। विषयवार तारीख के लिए हमेशा अपने बोर्ड की आधिकारिक वेबसाइट का PDF या स्कूल की सूचना देखें। यह साइट निजी है, किसी बोर्ड की नहीं।",
  sections: [
    {
      id: "tareekh",
      title: "बोर्डवार परीक्षा की तारीखें 2027",
      table: {
        head: ["बोर्ड", "10वीं", "12वीं"],
        rows: rows.map(([href, name, ten, twelve]) => [`<a href="${href}">${name}</a>`, ten, twelve]),
      },
      callout: { kind: "info", html: "दूसरे राज्यों के बोर्ड और CBSE का पक्का कार्यक्रम आने पर उनके पेज भी जोड़े जाएंगे। तब तक अपने बोर्ड की वेबसाइट देखते रहें।" },
    },
    {
      id: "dhyan",
      title: "सभी बोर्ड के छात्रों के लिए ज़रूरी बातें",
      list: [
        "टाइम टेबल सिर्फ बोर्ड की आधिकारिक वेबसाइट से डाउनलोड करें; WhatsApp पर नकली टाइम टेबल बहुत घूमते हैं।",
        "एडमिट कार्ड (हॉल टिकट) आमतौर पर स्कूल से मिलता है; नाम, फोटो और विषय ज़रूर जांचें।",
        "प्रैक्टिकल परीक्षा लिखित परीक्षा से पहले होती है; उसकी तारीख स्कूल से पूछें।",
        "परीक्षा केंद्र पर कम से कम 30 मिनट पहले पहुंचें; मोबाइल साथ न ले जाएं।",
      ],
    },
  ],
  official: [
    { href: "https://upmsp.edu.in/", title: "UP बोर्ड (UPMSP)" },
    { href: "https://mpbse.nic.in/", title: "MP बोर्ड (MPBSE)" },
    { href: "https://mahahsscboard.in/", title: "महाराष्ट्र बोर्ड (MSBSHSE)" },
    { href: "https://www.cbse.gov.in/", title: "CBSE" },
  ],
  faq: [
    { q: "बोर्ड परीक्षा 2027 कब से शुरू होंगी?", a: "UP बोर्ड 5 फरवरी, महाराष्ट्र HSC 8 फरवरी, MP बोर्ड 12वीं 17 फरवरी से। दूसरे बोर्ड अपनी तारीखें अलग से घोषित करते हैं।" },
    { q: "CBSE 2027 डेटशीट कब आएगी?", a: "4 नवंबर 2026 तक जारी नहीं हुई थी; आते ही इस पेज पर जोड़ी जाएगी।" },
    { q: "एडमिट कार्ड कहां से मिलेगा?", a: "ज़्यादातर बोर्ड में नियमित छात्रों को स्कूल से; स्कूल इसे बोर्ड की वेबसाइट से डाउनलोड करता है।" },
  ],
  related: [
    { href: "/students/", emoji: "🎓", title: "Students Hub", text: "छात्रवृत्ति, प्रमाण पत्र, टूल्स" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "प्रतियोगी परीक्षाएं" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "फॉर्म के लिए उम्र" },
  ],
  aside: [
    { href: "/board-exam/up-board-exam-2027.html", label: "📄 UP बोर्ड 2027" },
    { href: "/board-exam/mp-board-exam-2027.html", label: "📄 MP बोर्ड 2027" },
    { href: "/board-exam/maharashtra-board-exam-2027.html", label: "📄 महाराष्ट्र बोर्ड 2027" },
  ],
};
