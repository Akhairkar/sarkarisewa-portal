import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; rrbcdg.gov.in / rrbapply.gov.in not reachable
// from the sandbox, search-result extracts of exam news used):
// - CEN 09/2025 (Level 1): indianpaycalculator, competitivecracker, aglasem
//   news (22,195 posts; applications from 31 Jan 2026, last date extended to
//   9 Mar 2026; CBT 3-21 Aug 2026 per most sources, one says to 25 Aug; e-call
//   letter from about 1 Aug 2026). Answer key/result not confirmed by any
//   source, so described as "check RRB website".
// - CEN 08/2024 (Level 1): aglasem, pw.live, truejobs (32,438 posts; CBT
//   27 Nov 2025 - 10 Feb 2026; result with cut-offs 1 Jul 2026; PET from late
//   July 2026).
// Pay Level 1 (7th CPC, ₹18,000 basic) is the standard Level-1 pay. Age limit
// not stated because it could not be checked in the CEN text. The old page's
// "notification 15 Oct 2026, last date 15 Nov, CBT 15 Feb-28 Mar 2027, 32,000+"
// is not supported by any source and is removed.
export const rrbGroupD2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "RRB ग्रुप डी 2026" },
  ],
  docHi: "RRB ग्रुप डी 2026 परीक्षा",
  title: "RRB ग्रुप डी (Level-1) 2026-2027 परीक्षा तिथि, CBT टाइमटेबल व एडमिट कार्ड",
  description: "RRB ग्रुप डी (Level-1) CEN 09/2025: 22,195 पद, CBT अगस्त 2026 में हुई। CEN 08/2024 का रिज़ल्ट 1 जुलाई 2026 को आया। तारीखें, PET और आगे की प्रक्रिया।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "RRB ग्रुप डी 2026: CEN 09/2025 की CBT अगस्त में हुई, आगे क्या",
  lead: "रेलवे भर्ती बोर्ड (RRB) की ग्रुप डी (लेवल-1: ट्रैक मेंटेनर, पॉइंट्समैन, हेल्पर आदि) भर्ती <strong>CEN 09/2025</strong> में <strong>22,195 पद</strong> हैं। रिपोर्टों के अनुसार इसकी कंप्यूटर आधारित परीक्षा (CBT) <strong>3 से 21 अगस्त 2026</strong> तक हुई; आवेदन मार्च 2026 में बंद हो चुके हैं। पिछली भर्ती CEN 08/2024 (32,438 पद) का रिज़ल्ट <strong>1 जुलाई 2026</strong> को आया था।",
  facts: [
    ["भर्ती", "CEN 09/2025 (लेवल-1)"],
    ["पद", "22,195"],
    ["CBT", "3 - 21 अगस्त 2026 (हो चुकी)"],
    ["योग्यता", "10वीं पास या ITI/NAC"],
  ],
  notice: "16 अक्टूबर 2026 तक: ग्रुप डी का कोई नया फॉर्म खुला नहीं है। CEN 09/2025 की उत्तर कुंजी, रिज़ल्ट और PET की जानकारी सिर्फ अपने ज़ोन की RRB वेबसाइट पर देखें। अगली ग्रुप डी भर्ती की तारीख अभी घोषित नहीं हुई।",
  sections: [
    {
      id: "cen-09-2025",
      title: "CEN 09/2025 की तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "31 जनवरी 2026"],
          ["आवेदन की आखिरी तारीख", "9 मार्च 2026 (बढ़ाई गई)"],
          ["ई-कॉल लेटर", "लगभग 1 अगस्त 2026 से, परीक्षा से कुछ दिन पहले"],
          ["CBT", "3 - 21 अगस्त 2026"],
          ["उत्तर कुंजी / रिज़ल्ट", "अपनी RRB वेबसाइट पर देखें"],
          ["PET (शारीरिक दक्षता परीक्षा)", "CBT रिज़ल्ट के बाद"],
        ],
      },
      callout: { kind: "info", html: "RRB की वेबसाइटें यहां से नहीं खुल सकीं, इसलिए तारीखें परीक्षा समाचार रिपोर्टों से हैं। आवेदन <a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> पर होता है; नोटिस अपने ज़ोन की RRB वेबसाइट (जैसे <a href=\"https://www.rrbcdg.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbcdg.gov.in</a>) पर आते हैं।" },
    },
    {
      id: "cen-08-2024",
      title: "पिछली भर्ती CEN 08/2024 की स्थिति",
      list: [
        "32,438 लेवल-1 पद।",
        "CBT 27 नवंबर 2025 से 10 फरवरी 2026 तक हुई।",
        "रिज़ल्ट और ज़ोनवार कट-ऑफ 1 जुलाई 2026 को आए।",
        "चुने गए उम्मीदवारों का PET जुलाई 2026 के आखिर से शुरू हुआ; उसके बाद दस्तावेज़ सत्यापन और मेडिकल।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>CBT:</strong> गणित, सामान्य बुद्धि और तर्क, सामान्य विज्ञान और सामान्य जागरूकता के वस्तुनिष्ठ प्रश्न; गलत जवाब पर नेगेटिव मार्किंग (CEN में बताए अनुसार)।",
        "<strong>PET:</strong> दौड़ और वज़न उठाने की शारीरिक परीक्षा; मानक CEN में दिए होते हैं।",
        "<strong>दस्तावेज़ सत्यापन (DV)</strong> और <strong>मेडिकल जांच</strong>।",
        "चयन के बाद वेतन 7वें वेतन आयोग के <strong>लेवल-1</strong> (मूल वेतन ₹18,000) पर, साथ में भत्ते।",
      ],
      callout: { kind: "warn", html: "रेलवे में ग्रुप डी नौकरी सिर्फ परीक्षा और मेरिट से मिलती है। पैसे लेकर नौकरी दिलाने का दावा करने वाले ठग हैं; RRB ऐसे लोगों से सावधान रहने को कहता है।" },
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB ऑनलाइन आवेदन पोर्टल", note: "आवेदन, स्टेटस, कॉल लेटर" },
    { href: "https://www.rrbcdg.gov.in/", title: "RRB चंडीगढ़ (उदाहरण)", note: "हर ज़ोन की RRB वेबसाइट पर रिज़ल्ट और नोटिस" },
  ],
  faq: [
    { q: "RRB ग्रुप डी 2026 की परीक्षा कब हुई?", a: "CEN 09/2025 की CBT रिपोर्टों के अनुसार 3 से 21 अगस्त 2026 तक हुई।" },
    { q: "क्या अभी ग्रुप डी का फॉर्म भर सकते हैं?", a: "नहीं। CEN 09/2025 के आवेदन 9 मार्च 2026 को बंद हो गए। 16 अक्टूबर 2026 तक नई ग्रुप डी भर्ती घोषित नहीं हुई है।" },
    { q: "ग्रुप डी में कितने पद हैं?", a: "CEN 09/2025 में 22,195 पद हैं। पिछली CEN 08/2024 में 32,438 पद थे।" },
    { q: "ग्रुप डी के लिए योग्यता क्या है?", a: "10वीं पास या ITI/NAC। उम्र सीमा और छूट CEN (अधिसूचना) में देखें।" },
  ],
  related: [
    { href: "/exams/railway-rrb-exam-schedule-2026-2027.html", emoji: "🚆", title: "RRB परीक्षा कैलेंडर", text: "NTPC, ग्रुप डी, ALP, JE" },
    { href: "/exams/rrb-ntpc-ug-2026.html", emoji: "🎫", title: "RRB NTPC 12वीं पास", text: "CEN 07/2026 के आवेदन" },
    { href: "/service/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS", text: "10वीं पास भर्ती" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
