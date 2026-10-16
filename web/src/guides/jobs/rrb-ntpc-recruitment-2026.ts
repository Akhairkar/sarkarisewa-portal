import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; rrbapply.gov.in / RRB sites not opened from
// the sandbox, so coverage of the RRB notices was used):
// - Graduate CEN 06/2026: careerpower.in, practicemock, oliveboard,
//   verandarace, easyapplications, resultbharat (short notice 3,477 posts;
//   detailed CEN 3,548 posts in 4 post types, Goods Train Manager 2,750;
//   online 8 Oct 2026 00:00 - 6 Nov 2026 23:59, fee till 8 Nov; age 18-33 on
//   1 Jan 2027; Pay Level 5 and 6; one RRB only; fee ₹250-500 by category).
// - Undergraduate CEN 07/2026: pw.live, practicemock, oliveboard (indicative
//   notice: about 1,688 posts incl. Commercial cum Ticket Clerk, Junior Clerk
//   cum Typist; online from 15 Oct 2026, last date 13 Nov 2026 23:59 in most
//   reports (one says 15 Nov); Pay Level 2 and 3; age on 1 Jan 2027). UG age
//   band, fee split and post-wise counts not confirmed: left to the CEN.
// The old page's 11,558 posts (8,110 + 3,448) and last dates 13/20 Oct 2026
// belonged to the previous cycle and are replaced.
export const rrbNtpcRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "RRB NTPC 2026" },
  ],
  docHi: "RRB NTPC भर्ती 2026",
  title: "रेलवे आरआरबी एनटीपीसी भर्ती 2026",
  description: "RRB NTPC 2026: ग्रेजुएट पद (CEN 06/2026, 3,548 पद) का आवेदन 6 नवंबर तक और 12वीं पास पद (CEN 07/2026) का 13 नवंबर 2026 तक। पात्रता, उम्र, वेतन और rrbapply.gov.in पर आवेदन का तरीका।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "RRB NTPC भर्ती 2026: ग्रेजुएट और 12वीं पास पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> रेलवे भर्ती बोर्डों (RRB) ने NTPC (Non-Technical Popular Categories) की दो भर्तियां निकाली हैं। <strong>ग्रेजुएट पद (CEN 06/2026)</strong>: 3,548 पद, आवेदन <strong>8 अक्टूबर से 6 नवंबर 2026</strong> तक। <strong>12वीं पास (Undergraduate) पद (CEN 07/2026)</strong>: लगभग 1,688 पद, आवेदन <strong>15 अक्टूबर से 13 नवंबर 2026</strong> तक (संक्षिप्त नोटिस के अनुसार)। फॉर्म केवल rrbapply.gov.in पर भरें।",
  facts: [
    ["ग्रेजुएट पद", "3,548 (CEN 06/2026), आखिरी तारीख 6 नवंबर 2026"],
    ["12वीं पास पद", "लगभग 1,688 (CEN 07/2026), आखिरी तारीख 13 नवंबर 2026"],
    ["उम्र की गणना", "1 जनवरी 2027 को"],
    ["आवेदन", "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a>"],
  ],
  notice: "16 अक्टूबर 2026 तक: दोनों भर्तियों में आवेदन चालू है। 12वीं पास पदों की संख्या और तारीखें संक्षिप्त (indicative) नोटिस से हैं; विस्तृत CEN आने पर बदल सकती हैं। ये जानकारी RRB नोटिस पर आधारित समाचार रिपोर्टों से है; फॉर्म भरने से पहले अपने RRB की वेबसाइट पर CEN ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "ग्रेजुएट (CEN 06/2026)", "12वीं पास (CEN 07/2026)"],
        rows: [
          ["आवेदन शुरू", "8 अक्टूबर 2026", "15 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "6 नवंबर 2026 (रात 11:59)", "13 नवंबर 2026 (रात 11:59, संभावित)"],
          ["फीस भरने की आखिरी तारीख", "8 नवंबर 2026", "CEN में देखें"],
          ["CBT परीक्षा", "बाद में घोषित होगी", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["भर्ती", "मुख्य पद", "वेतन स्तर"],
        rows: [
          ["ग्रेजुएट (3,548)", "Goods Train Manager (2,750), Chief Commercial cum Ticket Supervisor, क्लर्क/टाइपिस्ट पद", "Pay Level 5 और 6"],
          ["12वीं पास (लगभग 1,688)", "Commercial cum Ticket Clerk, Junior Clerk cum Typist आदि", "Pay Level 2 और 3"],
        ],
      },
      callout: { kind: "info", html: "हर पद की संख्या, RRB-वार बंटवारा और वर्गवार आरक्षण CEN में दिया होता है। एक उम्मीदवार एक भर्ती में केवल एक RRB के लिए आवेदन कर सकता है।" },
    },
    {
      id: "patrata",
      title: "पात्रता, उम्र और फीस",
      list: [
        "<strong>ग्रेजुएट पद:</strong> किसी भी विषय में स्नातक; टाइपिस्ट पदों के लिए कंप्यूटर पर टाइपिंग आनी चाहिए।",
        "<strong>12वीं पास पद:</strong> 12वीं (10+2) पास; क्लर्क-टाइपिस्ट पदों के लिए टाइपिंग।",
        "<strong>उम्र:</strong> ग्रेजुएट पदों के लिए 1 जनवरी 2027 को 18 से 33 साल। 12वीं पास पदों की उम्र सीमा CEN 07/2026 में देखें। OBC को 3 और SC/ST को 5 साल की छूट।",
        "<strong>फीस:</strong> वर्ग के अनुसार ₹250 या ₹500; CBT देने पर नियमों के अनुसार बैंक खाते में वापसी। सही नियम CEN में देखें।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> खोलें। पहली बार हैं तो \"Create an Account\" से मोबाइल और ईमेल के साथ अकाउंट बनाएं।",
        "लॉगिन करके सही CEN चुनें: ग्रेजुएट के लिए 06/2026, 12वीं पास के लिए 07/2026।",
        "एक RRB चुनें, पदों की पसंद का क्रम भरें, शिक्षा और वर्ग की जानकारी भरें।",
        "फोटो और हस्ताक्षर CEN में दिए साइज़ में अपलोड करें; ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> से साइज़ ठीक करें।",
        "फीस ऑनलाइन भरें और फाइनल फॉर्म का PDF/प्रिंट संभालकर रखें। रिफंड के लिए बैंक खाते की सही जानकारी भरें।",
      ],
      callout: { kind: "warn", html: "आखिरी दिनों में सर्वर धीमा हो जाता है, इसलिए पहले ही फॉर्म भरें। रेलवे नौकरी के नाम पर पैसे मांगने वाले एजेंटों से सावधान रहें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>CBT:</strong> कंप्यूटर आधारित परीक्षा (ग्रेजुएट पदों में आम तौर पर दो चरण)।",
        "<strong>स्किल टेस्ट:</strong> टाइपिस्ट पदों के लिए टाइपिंग टेस्ट।",
        "<strong>दस्तावेज़ जांच और मेडिकल।</strong>",
      ],
      html: "परीक्षा की संभावित तारीखें हमारे <a href=\"/exams/railway-rrb-exam-schedule-2026-2027.html\">रेलवे परीक्षा कैलेंडर</a> में देखें।",
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB आवेदन पोर्टल", note: "CEN 06/2026 और 07/2026 के फॉर्म" },
    { href: "https://indianrailways.gov.in/", title: "भारतीय रेल" },
  ],
  faq: [
    { q: "RRB NTPC 2026 का फॉर्म कब तक भर सकते हैं?", a: "ग्रेजुएट पद (CEN 06/2026) 6 नवंबर 2026 तक और 12वीं पास पद (CEN 07/2026) 13 नवंबर 2026 तक (संक्षिप्त नोटिस के अनुसार)।" },
    { q: "RRB NTPC 2026 में कितने पद हैं?", a: "ग्रेजुएट के 3,548 पद और 12वीं पास के लगभग 1,688 पद। पुराने पेजों पर दिखने वाले 11,558 पद पिछली भर्ती के थे।" },
    { q: "उम्र किस तारीख से गिनी जाएगी?", a: "1 जनवरी 2027 को। ग्रेजुएट पदों के लिए 18 से 33 साल; 12वीं पास पदों की सीमा CEN में देखें।" },
    { q: "क्या दो RRB के लिए आवेदन कर सकते हैं?", a: "नहीं। एक भर्ती (CEN) में केवल एक RRB के लिए आवेदन होता है; एक से ज़्यादा फॉर्म भरने पर सभी रद्द हो सकते हैं।" },
  ],
  related: [
    { href: "/exams/rrb-ntpc-ug-2026.html", emoji: "📘", title: "RRB NTPC UG परीक्षा", text: "12वीं पास पदों की परीक्षा" },
    { href: "/jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html", emoji: "🚆", title: "RRB JE 2026", text: "इंजीनियरों के लिए भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2027 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
