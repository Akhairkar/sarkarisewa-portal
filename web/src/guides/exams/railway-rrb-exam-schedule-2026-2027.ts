import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; RRB websites not reachable from the sandbox,
// search-result extracts of exam news used):
// - NTPC Undergraduate CEN 07/2026 and Graduate CEN 06/2026: as in
//   /exams/rrb-ntpc-ug-2026 (UG 15 Oct - 13 Nov 2026, about 1,688 posts;
//   Graduate 8 Oct - 6 Nov 2026, oliveboard).
// - JE / DMS / CMA CEN 04/2026: adda247, engineersacademy, careerindia
//   (applications 14 Aug - 13 Sep 2026; CBT-1 tentatively 27, 28 and 30 Oct
//   2026 per RRB notice of 16 Sep 2026; about 4,029 posts after corrigendum -
//   figures vary, so given as "about 4,000").
// - Group D CEN 09/2025 and CEN 08/2024: as in /exams/rrb-group-d-2026.
// - ALP CEN 01/2025: CBT-1 13 Feb - 11 Mar 2026, CBT-2 28 Jul 2026 (search
//   extract of exam news; one source).
// - Annual calendar: RRB plans ALP notification from Feb, then Technician,
//   NTPC/JE, Group D (pw.live, practicemock); ALP 2026 and Technician 2026 CBT
//   dates not found, so not given.
// The old page's dates (NTPC Graduate 14 Sep-13 Oct, CBT 18-29 Dec; Group D
// 15 Oct-15 Nov; ALP CBT 25-29 Nov; JE CBT 13-17 Dec etc.) were unsupported.
export const railwayRrbExamSchedule20262027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "रेलवे 2026-2027" },
  ],
  docHi: "RRB परीक्षा कैलेंडर 2026-27",
  title: "रेलवे भर्ती बोर्ड (RRB) परीक्षा कैलेंडर",
  description: "RRB परीक्षा कैलेंडर 2026-27: NTPC ग्रेजुएट और 12वीं पास के आवेदन अक्टूबर-नवंबर 2026 में, JE CBT-1 27-30 अक्टूबर 2026, ग्रुप डी CBT अगस्त 2026। ALP और तकनीशियन की स्थिति।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "रेलवे RRB परीक्षा कैलेंडर 2026-27: NTPC, ग्रुप डी, JE, ALP की तारीखें",
  lead: "रेलवे भर्ती बोर्ड (RRB) अब हर साल तय क्रम में भर्तियां निकालते हैं। 16 अक्टूबर 2026 को <strong>NTPC ग्रेजुएट (CEN 06/2026)</strong> का आवेदन 6 नवंबर तक और <strong>NTPC 12वीं पास (CEN 07/2026)</strong> का आवेदन 13 नवंबर 2026 तक चल रहा है (नोटिस के अनुसार)। <strong>JE (CEN 04/2026)</strong> की CBT-1 <strong>27, 28 और 30 अक्टूबर 2026</strong> को है।",
  facts: [
    ["NTPC ग्रेजुएट आवेदन", "8 अक्टूबर - 6 नवंबर 2026"],
    ["NTPC 12वीं पास आवेदन", "15 अक्टूबर - 13 नवंबर 2026"],
    ["JE CBT-1", "27, 28, 30 अक्टूबर 2026"],
    ["ग्रुप डी (CEN 09/2025) CBT", "3-21 अगस्त 2026 (हो चुकी)"],
  ],
  notice: "16 अक्टूबर 2026: तारीखें परीक्षा समाचार रिपोर्टों और RRB के सांकेतिक नोटिस पर आधारित हैं; RRB वेबसाइटें यहां से नहीं खुल सकीं। आवेदन सिर्फ rrbapply.gov.in पर करें और विस्तृत CEN ज़रूर पढ़ें।",
  sections: [
    {
      id: "calendar",
      title: "RRB भर्तियां: अभी की स्थिति",
      table: {
        head: ["भर्ती (CEN)", "योग्यता", "आवेदन", "परीक्षा"],
        rows: [
          ["NTPC ग्रेजुएट (CEN 06/2026)", "स्नातक", "8 अक्टूबर - 6 नवंबर 2026", "अभी घोषित नहीं"],
          ["NTPC अंडरग्रेजुएट (CEN 07/2026)", "12वीं पास", "15 अक्टूबर - 13 नवंबर 2026", "अभी घोषित नहीं"],
          ["JE, DMS, CMA (CEN 04/2026), लगभग 4,000 पद", "इंजीनियरिंग डिप्लोमा/डिग्री, B.Sc (पद के अनुसार)", "14 अगस्त - 13 सितंबर 2026 (बंद)", "CBT-1: 27, 28, 30 अक्टूबर 2026"],
          ["ग्रुप डी लेवल-1 (CEN 09/2025), 22,195 पद", "10वीं / ITI", "31 जनवरी - 9 मार्च 2026 (बंद)", "CBT 3-21 अगस्त 2026 (हो चुकी)"],
          ["ग्रुप डी लेवल-1 (CEN 08/2024), 32,438 पद", "10वीं / ITI", "बंद", "रिज़ल्ट 1 जुलाई 2026; PET जुलाई 2026 से"],
          ["ALP (CEN 01/2025)", "10वीं + ITI / डिप्लोमा", "बंद", "CBT-1 13 फरवरी - 11 मार्च 2026; CBT-2 28 जुलाई 2026"],
        ],
      },
      callout: { kind: "info", html: "ALP 2026 और तकनीशियन 2026 भर्ती की परीक्षा तारीखें हमें किसी भरोसेमंद स्रोत में नहीं मिलीं, इसलिए यहां नहीं दी गईं। अपनी तारीख, शहर और शिफ्ट सिटी स्लिप और ई-कॉल लेटर में ही देखें।" },
    },
    {
      id: "chakra",
      title: "RRB का सालाना भर्ती क्रम",
      list: [
        "रेल मंत्रालय ने 2024 से सालाना कैलेंडर अपनाया है, ताकि हर बड़ी भर्ती लगभग हर साल आए।",
        "आम क्रम: साल की शुरुआत में ALP, फिर तकनीशियन, उसके बाद NTPC और JE, और फिर ग्रुप डी (लेवल-1)।",
        "हर भर्ती की पक्की तारीख उसके CEN (Centralised Employment Notice) में आती है; कैलेंडर सिर्फ अनुमान है।",
      ],
    },
    {
      id: "kaise",
      title: "RRB फॉर्म और एडमिट कार्ड के लिए क्या करें",
      steps: [
        "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> पर एक बार खाता बनाएं; उसी से सारी RRB भर्तियों का फॉर्म भरें।",
        "हर CEN में सिर्फ एक RRB (ज़ोन) चुनें और पदों की पसंद ध्यान से भरें।",
        "परीक्षा से लगभग 10 दिन पहले सिटी स्लिप और कुछ दिन पहले ई-कॉल लेटर अपनी RRB वेबसाइट पर आता है।",
        "परीक्षा में ई-कॉल लेटर का प्रिंट और मूल फोटो पहचान पत्र (जैसे आधार) ले जाएं।",
      ],
      callout: { kind: "warn", html: "रेलवे नौकरी के नाम पर पैसे मांगने वाले एजेंट, फर्ज़ी नियुक्ति पत्र और फर्ज़ी वेबसाइट से सावधान रहें। चयन सिर्फ CBT, स्किल/PET, दस्तावेज़ और मेडिकल से होता है।" },
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB ऑनलाइन आवेदन पोर्टल", note: "सभी CEN के आवेदन" },
    { href: "https://www.rrbcdg.gov.in/", title: "RRB चंडीगढ़ (उदाहरण)", note: "CEN, सिटी स्लिप, रिज़ल्ट हर ज़ोन की RRB साइट पर" },
  ],
  faq: [
    { q: "अभी कौन सा रेलवे फॉर्म खुला है?", a: "नोटिस के अनुसार NTPC ग्रेजुएट (CEN 06/2026) का आवेदन 6 नवंबर 2026 तक और NTPC 12वीं पास (CEN 07/2026) का आवेदन 13 नवंबर 2026 तक है। rrbapply.gov.in पर पुष्टि करें।" },
    { q: "RRB JE 2026 परीक्षा कब है?", a: "CEN 04/2026 की CBT-1 27, 28 और 30 अक्टूबर 2026 को (RRB के 16 सितंबर 2026 के नोटिस के अनुसार)। आपकी तारीख सिटी स्लिप में होगी।" },
    { q: "RRB ग्रुप डी की परीक्षा कब हुई?", a: "CEN 09/2025 की CBT 3 से 21 अगस्त 2026 तक हुई। अगली ग्रुप डी भर्ती अभी घोषित नहीं हुई है।" },
    { q: "ALP 2026 की परीक्षा कब है?", a: "हमें इसकी पक्की तारीख नहीं मिली। अपने ज़ोन की RRB वेबसाइट पर ALP के CEN और परीक्षा नोटिस देखें।" },
  ],
  related: [
    { href: "/exams/rrb-ntpc-ug-2026.html", emoji: "🎫", title: "RRB NTPC 12वीं पास 2026", text: "1,688 पद, आवेदन 13 नवंबर तक" },
    { href: "/exams/rrb-group-d-2026.html", emoji: "🛤️", title: "RRB ग्रुप डी 2026", text: "CEN 09/2025 की स्थिति" },
    { href: "/jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html", emoji: "🛠️", title: "RRB JE भर्ती 2026", text: "भर्ती की जानकारी" },
    { href: "/exams/ssc-exam-calendar-2026-2027.html", emoji: "📝", title: "SSC कैलेंडर 2026-27", text: "CGL, CHSL, JE, CPO" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
