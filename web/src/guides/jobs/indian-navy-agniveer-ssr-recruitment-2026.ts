import type { DocGuide } from "../doc/types";

// Sources: no new search for this page (a web search was declined on 16 Oct
// 2026). All facts are reused from web/src/guides/doc/indian-navy-agniveer-
// ssr-recruitment-2026.ts (checked 15 Oct 2026 from search extracts of
// frontlinesmedia.in, ssbcrackexams.com, resultbharat.com, pw.live,
// govtjobsalert.in; Agnipath terms from the 2022 PIB announcement):
// 01/2027 & 02/2027 batches, online application 14 Mar-6 Apr 2026 on
// joinindiannavy.gov.in, correction 10-11 Apr, fee ₹550 + GST, 10+2 with
// Maths and Physics 50% or diploma/vocational alternative, unmarried men and
// women, Stage I INET (100 questions, 1 hour) around May 2026, then Stage II.
// Status after INET (Stage II results, next notification) not re-checked and
// left general. Old page's "2,500+ posts", "form active" and
// "agniveernavy.cdac.in" were not verified and removed.
export const indianNavyAgniveerSsrRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "नौसेना अग्निवीर SSR 2026" },
  ],
  docHi: "नौसेना अग्निवीर SSR 2026",
  title: "भारतीय नौसेना अग्निवीर (SSR) भर्ती 2026",
  description: "भारतीय नौसेना अग्निवीर SSR 2026 (01/2027 और 02/2027 बैच): आवेदन 14 मार्च से 6 अप्रैल 2026 तक हुए, अब बंद। योग्यता, फीस, INET परीक्षा और अगली भर्ती कहां देखें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "नौसेना अग्निवीर SSR 2026: आवेदन बंद, अगली भर्ती की तैयारी कैसे करें",
  lead: "भारतीय नौसेना 12वीं (गणित-भौतिकी) पास युवाओं को अग्निपथ योजना में अग्निवीर (SSR) के रूप में 4 साल के लिए भर्ती करती है। 2026 में 01/2027 और 02/2027 बैच के आवेदन <strong>14 मार्च से 6 अप्रैल 2026</strong> तक joinindiannavy.gov.in पर हुए और पहली परीक्षा (INET) मई 2026 में हुई। अभी इस भर्ती में नया आवेदन नहीं हो सकता; अगली अधिसूचना सिर्फ आधिकारिक पोर्टल पर आएगी।",
  facts: [
    ["स्थिति", "आवेदन बंद (6 अप्रैल 2026 को)"],
    ["योग्यता", "12वीं गणित और भौतिकी के साथ, 50% अंक"],
    ["फीस (2026)", "₹550 + GST"],
    ["सेवा", "4 साल; अधिकतम 25% नियमित कैडर में"],
  ],
  notice: "16 अक्टूबर 2026 तक: <strong>आवेदन बंद</strong>। पुराने पेज की \"2,500+ पद\" और \"फॉर्म चालू\" वाली बातें सही नहीं थीं। यह निजी सूचना वेबसाइट है, नौसेना की नहीं; नौकरी लगवाने के नाम पर पैसे मांगने वालों से बचें।",
  sections: [
    {
      id: "tarikhen",
      title: "2026 की भर्ती की तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["ऑनलाइन आवेदन", "14 मार्च से 6 अप्रैल 2026"],
          ["फॉर्म सुधार", "10 से 11 अप्रैल 2026"],
          ["Stage I (INET)", "मई 2026 (हो चुकी)"],
          ["Stage II (PFT, मेडिकल)", "INET में चुने गए उम्मीदवारों के लिए, सूचना पोर्टल पर"],
        ],
      },
      callout: { kind: "info", html: "पद, जन्म तारीख की सीमा और अगली भर्ती की तारीखें सिर्फ <a href=\"https://www.joinindiannavy.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">joinindiannavy.gov.in</a> की अधिसूचना से मानें।" },
    },
    {
      id: "yogyata",
      title: "योग्यता और चयन",
      list: [
        "<strong>शिक्षा:</strong> 10+2 गणित और भौतिकी के साथ कुल 50% अंक; या 3 साल का इंजीनियरिंग डिप्लोमा / 2 साल का वोकेशनल कोर्स (गणित-भौतिकी के साथ, 50%)।",
        "<strong>कौन:</strong> अविवाहित पुरुष और महिला भारतीय नागरिक।",
        "<strong>उम्र:</strong> हर बैच की जन्म तारीख सीमा अधिसूचना में अलग दी होती है।",
        "<strong>Stage I – INET:</strong> 100 प्रश्न, 1 घंटा; अंग्रेज़ी, विज्ञान, गणित, सामान्य ज्ञान।",
        "<strong>Stage II:</strong> शारीरिक फिटनेस टेस्ट (PFT) और मेडिकल; फिर INS चिल्का में ट्रेनिंग।",
      ],
      callout: { kind: "ok", html: "सेवा की शर्तें और आवेदन के स्टेप हमारी <a href=\"/service/indian-navy-agniveer-ssr-recruitment-2026.html\">नौसेना अग्निवीर SSR गाइड</a> में विस्तार से हैं।" },
    },
    {
      id: "taiyari",
      title: "अगली भर्ती के लिए अभी क्या तैयार रखें",
      list: [
        "10वीं और 12वीं की मार्कशीट, आधार और चालू मोबाइल/ईमेल।",
        "साफ पासपोर्ट फोटो और हस्ताक्षर की स्कैन कॉपी (<a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a>, <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a>)।",
        "दौड़ और व्यायाम की रोज़ तैयारी, क्योंकि PFT पास करना ज़रूरी है।",
        "<a href=\"https://www.joinindiannavy.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">joinindiannavy.gov.in</a> पर पहले से रजिस्ट्रेशन और \"Current Opportunities\" पर नज़र।",
      ],
    },
  ],
  official: [
    { href: "https://www.joinindiannavy.gov.in/", title: "Join Indian Navy: आधिकारिक भर्ती पोर्टल" },
    { href: "https://www.indiannavy.nic.in/", title: "भारतीय नौसेना की आधिकारिक वेबसाइट" },
  ],
  faq: [
    { q: "क्या नौसेना अग्निवीर SSR का फॉर्म अभी भर सकते हैं?", a: "नहीं। 2026 की भर्ती के आवेदन 6 अप्रैल 2026 को बंद हो गए। अगली अधिसूचना joinindiannavy.gov.in पर आएगी।" },
    { q: "आवेदन फीस कितनी थी?", a: "2026 की भर्ती में ₹550 + GST।" },
    { q: "अग्निवीर की नौकरी कितने साल की है?", a: "4 साल। हर बैच के अधिकतम 25% अग्निवीर योग्यता के आधार पर नियमित सेवा में लिए जा सकते हैं।" },
    { q: "क्या लड़कियां आवेदन कर सकती हैं?", a: "हां, अविवाहित महिला उम्मीदवार भी आवेदन कर सकती हैं।" },
  ],
  related: [
    { href: "/service/indian-navy-agniveer-ssr-recruitment-2026.html", emoji: "⚓", title: "नौसेना अग्निवीर गाइड", text: "पूरी जानकारी" },
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "केंद्र सरकार की नौकरियां" },
    { href: "/jobs/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS 2026", text: "10वीं पास, बिना परीक्षा" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "उम्र सीमा जांचें" },
  ],
  aside: [
    { href: "https://www.joinindiannavy.gov.in/", label: "⚓ joinindiannavy.gov.in" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
