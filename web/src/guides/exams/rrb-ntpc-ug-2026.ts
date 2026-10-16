import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; RRB websites not reachable from the sandbox,
// search-result extracts of exam news on the indicative notice used):
// pw.live, practicemock, oliveboard (CEN 07/2026 NTPC Undergraduate indicative
// notice: about 1,688 posts - Commercial cum Ticket Clerk 700 (Level 3),
// Junior Clerk cum Typist 600, Accounts Clerk cum Typist 200, Trains Clerk 188
// (Level 2); online application at rrbapply.gov.in from 15 Oct 2026 to 13 Nov
// 2026 (one article also says 15 Nov); age reckoned on 1 Jan 2027; CBT-1 date
// not announced). Graduate CEN 06/2026: 8 Oct - 6 Nov 2026 (oliveboard).
// Exact age band, fee and 12th-marks rule could not be read in the detailed
// CEN, so they are left to the notification. The old page's "3,445 posts,
// notification 21 Sep, last date 20 Oct, CBT-1 12-24 Jan 2027" is unsupported.
export const rrbNtpcUg2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "RRB NTPC 12वीं पास 2026" },
  ],
  docHi: "RRB NTPC अंडरग्रेजुएट 2026",
  title: "RRB NTPC (12वीं पास अंडरग्रेजुएट) 2026",
  description: "RRB NTPC अंडरग्रेजुएट (CEN 07/2026): लगभग 1,688 पद, ऑनलाइन आवेदन 15 अक्टूबर से 13 नवंबर 2026 (सांकेतिक नोटिस के अनुसार)। पद, योग्यता, आवेदन का तरीका; CBT-1 की तारीख अभी घोषित नहीं।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "RRB NTPC 12वीं पास (CEN 07/2026): 1,688 पद, आवेदन 13 नवंबर 2026 तक",
  lead: "रेलवे भर्ती बोर्ड (RRB) के सांकेतिक (indicative) नोटिस के अनुसार NTPC अंडरग्रेजुएट (12वीं पास) भर्ती <strong>CEN 07/2026</strong> में लगभग <strong>1,688 पद</strong> हैं। ऑनलाइन आवेदन <strong>15 अक्टूबर 2026</strong> से <strong>13 नवंबर 2026</strong> (रात 11:59) तक <strong>rrbapply.gov.in</strong> पर होने हैं। CBT-1 परीक्षा की तारीख अभी घोषित नहीं हुई है।",
  facts: [
    ["स्थिति", "आवेदन चालू (15 अक्टूबर 2026 से, नोटिस के अनुसार)"],
    ["आखिरी तारीख", "13 नवंबर 2026"],
    ["पद", "लगभग 1,688 (अस्थायी)"],
    ["CBT-1", "अभी घोषित नहीं"],
  ],
  notice: "16 अक्टूबर 2026: ये तारीखें सांकेतिक नोटिस की हैं। फॉर्म भरने से पहले rrbapply.gov.in और अपने ज़ोन की RRB वेबसाइट पर विस्तृत CEN 07/2026 पढ़ें और आखिरी तारीख की पुष्टि करें।",
  sections: [
    {
      id: "pad",
      title: "पद और वेतन स्तर",
      table: {
        head: ["पद", "वेतन स्तर (7वां वेतन आयोग)", "पद संख्या (अस्थायी)"],
        rows: [
          ["कमर्शियल कम टिकट क्लर्क", "लेवल-3", "700"],
          ["जूनियर क्लर्क कम टाइपिस्ट", "लेवल-2", "600"],
          ["अकाउंट्स क्लर्क कम टाइपिस्ट", "लेवल-2", "200"],
          ["ट्रेन्स क्लर्क", "लेवल-2", "188"],
          ["<strong>कुल</strong>", "", "<strong>लगभग 1,688</strong>"],
        ],
      },
      callout: { kind: "info", html: "पदों की संख्या सांकेतिक नोटिस से है और RRB इसे बदल सकता है। ज़ोनवार पद विस्तृत CEN में होंगे।" },
    },
    {
      id: "tarikhen",
      title: "मुख्य तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "15 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "13 नवंबर 2026 (रात 11:59)"],
          ["उम्र की गणना की तारीख", "1 जनवरी 2027"],
          ["CBT-1 परीक्षा", "अभी घोषित नहीं"],
        ],
      },
    },
    {
      id: "yogyata",
      title: "योग्यता",
      list: [
        "मान्यता प्राप्त बोर्ड से <strong>12वीं (10+2) पास</strong>। अंकों की शर्त और छूट विस्तृत CEN में देखें।",
        "क्लर्क कम टाइपिस्ट पदों के लिए चयन के समय कंप्यूटर पर हिंदी या अंग्रेज़ी टाइपिंग टेस्ट होता है।",
        "उम्र 1 जनवरी 2027 के हिसाब से गिनी जाएगी; न्यूनतम-अधिकतम उम्र और SC/ST/OBC आदि की छूट CEN में दी होगी।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> खोलें। पहली बार हैं तो \"Create an Account\" से खाता बनाएं।",
        "लॉगिन करके CEN 07/2026 (NTPC अंडरग्रेजुएट) चुनें और एक RRB (ज़ोन) चुनें। एक उम्मीदवार सिर्फ एक RRB के लिए आवेदन कर सकता है।",
        "पदों की पसंद का क्रम, शिक्षा की जानकारी, फोटो और हस्ताक्षर CEN में बताए आकार में अपलोड करें।",
        "फीस ऑनलाइन जमा करें, फॉर्म सबमिट करें और उसका प्रिंट/PDF रखें।",
      ],
      callout: { kind: "warn", html: "रेलवे भर्ती सिर्फ परीक्षा और मेरिट से होती है। पैसे लेकर नौकरी का वादा करने वाले ठग हैं। फीस सिर्फ rrbapply.gov.in पर ही जमा करें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>CBT-1:</strong> गणित, सामान्य बुद्धि और तर्क, सामान्य जागरूकता; यह स्क्रीनिंग परीक्षा है।",
        "<strong>CBT-2:</strong> इसी तरह के विषय, ज़्यादा कठिन स्तर; मेरिट इसी से।",
        "<strong>टाइपिंग स्किल टेस्ट</strong> (क्लर्क कम टाइपिस्ट पदों के लिए), फिर दस्तावेज़ सत्यापन और मेडिकल।",
      ],
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB ऑनलाइन आवेदन पोर्टल", note: "आवेदन, स्टेटस, कॉल लेटर" },
    { href: "https://www.rrbcdg.gov.in/", title: "RRB चंडीगढ़ (उदाहरण)", note: "CEN और नोटिस हर ज़ोन की RRB साइट पर" },
  ],
  faq: [
    { q: "RRB NTPC 12वीं पास 2026 का फॉर्म कब तक भर सकते हैं?", a: "सांकेतिक नोटिस के अनुसार 13 नवंबर 2026 (रात 11:59) तक। आवेदन 15 अक्टूबर 2026 से rrbapply.gov.in पर शुरू होने थे।" },
    { q: "कितने पद हैं?", a: "लगभग 1,688: कमर्शियल कम टिकट क्लर्क 700, जूनियर क्लर्क कम टाइपिस्ट 600, अकाउंट्स क्लर्क कम टाइपिस्ट 200 और ट्रेन्स क्लर्क 188।" },
    { q: "CBT-1 परीक्षा कब होगी?", a: "16 अक्टूबर 2026 तक RRB ने तारीख घोषित नहीं की है। परीक्षा तारीख और सिटी स्लिप RRB वेबसाइट पर आएगी।" },
    { q: "क्या ग्रेजुएट के लिए अलग NTPC भर्ती है?", a: "हां, NTPC ग्रेजुएट (CEN 06/2026) अलग है; रिपोर्टों के अनुसार उसका आवेदन 8 अक्टूबर से 6 नवंबर 2026 तक है।" },
  ],
  related: [
    { href: "/exams/railway-rrb-exam-schedule-2026-2027.html", emoji: "🚆", title: "RRB परीक्षा कैलेंडर", text: "NTPC, ग्रुप डी, ALP, JE" },
    { href: "/exams/rrb-group-d-2026.html", emoji: "🛤️", title: "RRB ग्रुप डी", text: "CEN 09/2025 की स्थिति" },
    { href: "/jobs/rrb-ntpc-recruitment-2026.html", emoji: "💼", title: "RRB NTPC भर्ती", text: "भर्ती की जानकारी" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "टाइपिंग स्पीड टेस्ट", text: "स्किल टेस्ट की तैयारी" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
