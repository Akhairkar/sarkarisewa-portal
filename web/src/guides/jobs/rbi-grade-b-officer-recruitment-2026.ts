import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026): opportunities.rbi.org.in could not be opened
// from here. Facts kept consistent with web/src/guides/doc/
// rbi-grade-b-officer-recruitment-2026.ts (edutap.in, bankersadda.com):
// 60 posts (General 40, DEPR 10, DSIM 10), applications closed 20 May 2026,
// Phase I 13/14 June 2026, Phase II 25/26 July 2026. bankersadda.com and
// mysarkarinaukri (search extracts, 16 Oct 2026): DEPR Phase II result
// 25 Aug 2026 with interview shortlist, General Phase II result also out; no
// interview schedule or final result found. This page takes the "after
// Phase 2: interview and final result" angle and links to the main guide.
// The old page's "250+ posts", "form active", "last date 15 July 2026" and
// ₹1,16,000 salary claim were wrong/unverified and are removed.
export const rbiGradeBOfficerRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "RBI Grade B 2026" },
  ],
  docHi: "RBI Grade B भर्ती 2026",
  title: "आरबीआई ग्रेड बी ऑफिसर भर्ती 2026",
  description: "RBI Grade B 2026: 60 पद, आवेदन 20 मई 2026 को बंद, Phase 1 और 2 हो चुके। अब इंटरव्यू और अंतिम रिजल्ट: क्या होता है, कौन से दस्तावेज़ रखें, रिजल्ट कहां देखें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "RBI Grade B 2026: Phase 2 के बाद इंटरव्यू और अंतिम रिजल्ट",
  lead: "<strong>स्थिति: आवेदन बंद, Phase 2 का रिजल्ट आया।</strong> RBI ने 2026 में Grade B (Direct Recruitment) के <strong>60 पदों</strong> की भर्ती निकाली थी; आवेदन <strong>20 मई 2026</strong> को बंद हो गए। Phase 1 जून में और Phase 2 जुलाई 2026 में हुआ, और रिपोर्टों के अनुसार Phase 2 के रिजल्ट के साथ इंटरव्यू की शॉर्टलिस्ट आ चुकी है। अंतिम रिजल्ट इंटरव्यू के बाद RBI की भर्ती वेबसाइट पर आएगा।",
  facts: [
    ["कुल पद", "60 (General 40, DEPR 10, DSIM 10)"],
    ["आवेदन", "बंद (20 मई 2026)"],
    ["Phase 2 रिजल्ट", "आया (DEPR: 25 अगस्त 2026)"],
    ["अगला चरण", "इंटरव्यू, फिर अंतिम रिजल्ट"],
  ],
  notice: "16 अक्टूबर 2026 तक इंटरव्यू शेड्यूल या अंतिम रिजल्ट की पक्की खबर नहीं मिली। ये जानकारी परीक्षा-समाचार रिपोर्टों से है। पूरी भर्ती की जानकारी हमारी <a href=\"/service/rbi-grade-b-officer-recruitment-2026.html\">RBI Grade B 2026 गाइड</a> में है; अंतिम सूचना <a href=\"https://opportunities.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">opportunities.rbi.org.in</a> पर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "2026 की तारीखें एक नज़र में",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["अधिसूचना", "अप्रैल 2026 के अंत में"],
          ["आवेदन की आखिरी तारीख", "20 मई 2026"],
          ["Phase 1", "13 जून (General), 14 जून 2026 (DEPR, DSIM)"],
          ["Phase 2", "25 जुलाई (General), 26 जुलाई 2026 (DEPR, DSIM)"],
          ["Phase 2 रिजल्ट", "DEPR 25 अगस्त 2026; General का भी जारी (रिपोर्ट के अनुसार)"],
          ["इंटरव्यू और अंतिम रिजल्ट", "RBI वेबसाइट पर सूचना देखें"],
        ],
      },
    },
    {
      id: "interview",
      title: "इंटरव्यू के लिए चुने गए हैं तो क्या करें",
      steps: [
        "<a href=\"https://opportunities.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">opportunities.rbi.org.in</a> पर अपनी स्ट्रीम का रिजल्ट नोटिस खोलें और रोल नंबर मिलाएं।",
        "इंटरव्यू कॉल लेटर रजिस्ट्रेशन नंबर और जन्मतिथि/पासवर्ड से डाउनलोड करें; उसमें तारीख, समय और जगह होती है।",
        "कॉल लेटर में मांगे गए सभी दस्तावेज़ों की मूल प्रति और फोटोकॉपी तैयार रखें: मार्कशीट, डिग्री, जन्मतिथि का प्रमाण, फोटो ID, और लागू हो तो जाति/EWS/दिव्यांग प्रमाण पत्र।",
        "सरकारी या बैंक नौकरी में हैं तो कॉल लेटर के अनुसार NOC साथ ले जाएं।",
      ],
      callout: { kind: "info", html: "अंतिम चयन Phase 2 और इंटरव्यू के अंकों को मिलाकर होता है। Phase 1 के अंक केवल Phase 2 के लिए छंटनी में गिने जाते हैं।" },
    },
    {
      id: "result",
      title: "अंतिम रिजल्ट कैसे देखें",
      steps: [
        "opportunities.rbi.org.in पर \"Results\" वाले हिस्से में जाएं।",
        "Officers in Grade B (DR) 2026 का अपनी स्ट्रीम (General/DEPR/DSIM) वाला अंतिम रिजल्ट PDF खोलें।",
        "PDF में Ctrl+F या फोन के \"Find\" से अपना रोल नंबर खोजें।",
      ],
    },
    {
      id: "agla",
      title: "चयन नहीं हुआ तो अगली भर्ती की तैयारी",
      list: [
        "RBI Grade B की भर्ती आम तौर पर हर साल आती है; अगली अधिसूचना RBI की वेबसाइट पर देखें।",
        "उम्र सीमा, अंकों की शर्त और प्रयासों की संख्या हर अधिसूचना में दी होती है; आवेदन से पहले वही पढ़ें।",
        "बैंक की दूसरी अधिकारी भर्तियां (IBPS PO, SBI PO) भी देखें, जिनका सिलेबस काफी मिलता है।",
      ],
      callout: { kind: "warn", html: "RBI भर्ती के लिए कोई पैसा नहीं मांगता। \"सीट पक्की\" या इंटरव्यू में पास कराने का दावा करने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://opportunities.rbi.org.in/", title: "RBI भर्ती वेबसाइट (Opportunities@RBI)", note: "रिजल्ट, कॉल लेटर और अधिसूचना" },
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक" },
  ],
  faq: [
    { q: "क्या RBI Grade B 2026 का फॉर्म अभी भर सकते हैं?", a: "नहीं। आवेदन 20 मई 2026 को बंद हो गए थे और दोनों लिखित चरण हो चुके हैं।" },
    { q: "RBI Grade B 2026 में कितने पद हैं?", a: "कुल 60: General 40, DEPR 10 और DSIM 10।" },
    { q: "इंटरव्यू कब होगा?", a: "16 अक्टूबर 2026 तक पक्की तारीख की खबर नहीं मिली। शॉर्टलिस्ट उम्मीदवारों के कॉल लेटर में तारीख होती है; opportunities.rbi.org.in देखें।" },
    { q: "अंतिम चयन कैसे होता है?", a: "Phase 2 और इंटरव्यू के अंक जोड़कर मेरिट सूची बनती है।" },
  ],
  related: [
    { href: "/service/rbi-grade-b-officer-recruitment-2026.html", emoji: "🏦", title: "RBI Grade B 2026 पूरी गाइड", text: "पद, पात्रता और चयन" },
    { href: "/jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html", emoji: "🏛️", title: "IBPS PO 2026", text: "सरकारी बैंकों में PO" },
    { href: "/jobs/sbi-po-recruitment-2026-2027.html", emoji: "💳", title: "SBI PO भर्ती", text: "SBI में अधिकारी" },
    { href: "/exams/banking-ibps-sbi-calendar-2026-2027.html", emoji: "📅", title: "बैंक परीक्षा कैलेंडर", text: "IBPS और SBI की तारीखें" },
  ],
  aside: [
    { href: "https://opportunities.rbi.org.in/", label: "🏦 RBI भर्ती वेबसाइट" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
