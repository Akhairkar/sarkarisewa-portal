import type { DocGuide } from "../doc/types";

// Sources (checked 31 Oct 2026; official sites not reachable from the sandbox,
// so only facts several reports agree on are used; anything that differs
// between reports is pointed to the notification):
// pw.live, freejobalert.com, karmasandhan.com, jobyaari.com, govtjobsalert.in, biharhelp.in.
// Indicative notice for CEN 09/2026 (Ministerial and Isolated Categories): about 195 tentative
// vacancies across all RRBs, Pay Level 2 to 7; online 05.11.2026 to 04.12.2026. Post-wise
// vacancies, qualification, age and fee are only in the detailed CEN: pointed to it.
export const rrbIsolatedCategoriesRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "RRB आइसोलेटेड कैटेगरी भर्ती 2026" },
  ],
  docHi: "RRB आइसोलेटेड कैटेगरी भर्ती 2026",
  title: "RRB आइसोलेटेड कैटेगरी भर्ती 2026 (CEN 09/2026): 195 पद, आवेदन 5 नवंबर से",
  description: "रेलवे भर्ती बोर्ड CEN 09/2026: मिनिस्टीरियल और आइसोलेटेड कैटेगरी के लगभग 195 पद, पे लेवल 2 से 7। ऑनलाइन आवेदन 5 नवंबर से 4 दिसंबर 2026 तक।",
  published: "2026-10-31",
  modified: "2026-10-31",
  verified: "31 अक्टूबर 2026",
  h1: "RRB आइसोलेटेड कैटेगरी भर्ती 2026 (CEN 09/2026): पद, तारीखें और आवेदन",
  lead: "<strong>स्थिति: आवेदन 5 नवंबर 2026 से।</strong> रेलवे भर्ती बोर्डों (RRB) ने <strong>CEN 09/2026</strong> का संक्षिप्त नोटिस जारी किया है, जिसमें <strong>मिनिस्टीरियल और आइसोलेटेड कैटेगरी</strong> के सभी RRB में मिलाकर लगभग <strong>195 पद</strong> (अस्थायी संख्या) हैं। पद <strong>पे लेवल 2 से 7</strong> के हैं। ऑनलाइन आवेदन <strong>5 नवंबर से 4 दिसंबर 2026</strong> तक होगा।",
  facts: [
    ["कुल पद", "लगभग 195 (अस्थायी)"],
    ["आवेदन", "5 नवंबर – 4 दिसंबर 2026"],
    ["वेतन स्तर", "पे लेवल 2 से 7 (7वां वेतन आयोग)"],
    ["वेबसाइट", "<a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a>"],
  ],
  notice: "अभी सिर्फ संक्षिप्त (indicative) नोटिस आया है। पदों के नाम, पद-वार संख्या, योग्यता, उम्र और फीस विस्तृत CEN 09/2026 में आएंगे; उसे पढ़कर ही आवेदन करें। यह साइट निजी है, रेलवे या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["संक्षिप्त नोटिस", "अक्टूबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "5 नवंबर 2026"],
          ["आवेदन की आखिरी तारीख", "4 दिसंबर 2026"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और योग्यता",
      list: [
        "<strong>मिनिस्टीरियल और आइसोलेटेड कैटेगरी</strong> में आम तौर पर अलग-अलग विशेष पद होते हैं; इस बार के पदों के नाम और संख्या विस्तृत CEN में दिए जाएंगे।",
        "<strong>वेतन:</strong> पद के अनुसार पे लेवल 2 से 7।",
        "<strong>योग्यता और उम्र:</strong> हर पद की अलग; विस्तृत CEN 09/2026 में देखें।",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "5 नवंबर 2026 से <a href=\"https://www.rrbapply.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrbapply.gov.in</a> खोलें; अपने RRB की वेबसाइट पर विस्तृत CEN 09/2026 पढ़ें।",
        "नया अकाउंट बनाएं (पहले से हो तो उसी से लॉगिन करें) और पद चुनें।",
        "फोटो, हस्ताक्षर और कागज़ अपलोड करें; <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> काम आएगा।",
        "4 दिसंबर 2026 से पहले फीस भरकर फॉर्म जमा करें।",
      ],
      callout: { kind: "warn", html: "फॉर्म और फीस सिर्फ आधिकारिक वेबसाइट पर भरें। नौकरी या चयन के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://www.rrbapply.gov.in/", title: "RRB ऑनलाइन आवेदन पोर्टल", note: "CEN 09/2026" },
    { href: "https://indianrailways.gov.in/", title: "भारतीय रेल", note: "RRB की वेबसाइटों के लिंक" },
  ],
  faq: [
    { q: "RRB CEN 09/2026 का फॉर्म कब से भर सकते हैं?", a: "5 नवंबर से 4 दिसंबर 2026 तक rrbapply.gov.in पर।" },
    { q: "RRB आइसोलेटेड कैटेगरी 2026 में कितने पद हैं?", a: "सभी RRB में मिलाकर लगभग 195 पद (अस्थायी संख्या)। पद-वार संख्या विस्तृत CEN में आएगी।" },
    { q: "इसमें कौन से पद हैं?", a: "मिनिस्टीरियल और आइसोलेटेड कैटेगरी के पद, पे लेवल 2 से 7। पदों के नाम विस्तृत CEN में देखें।" },
  ],
  related: [
    { href: "/jobs/rrb-station-master-recruitment-2026.html", emoji: "🚉", title: "RRB स्टेशन मास्टर भर्ती", text: "CEN 08/2026" },
    { href: "/jobs/rrb-ntpc-recruitment-2026.html", emoji: "🚆", title: "RRB NTPC भर्ती", text: "ग्रेजुएट और 12वीं" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "कट-ऑफ तारीख पर उम्र" },
  ],
  aside: [
    { href: "https://www.rrbapply.gov.in/", label: "🚆 rrbapply.gov.in" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
