import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; ssc.gov.in notices could not be read from the
// sandbox, only search-result extracts of exam-news/coaching sites): reports
// conflict on whether the MTS & Havaldar 2026 notification is out. adda247 and
// careerpower/indianewjobs extracts say it is expected (around Oct 2026);
// testbook's revised-calendar extract lists notification Aug/Oct 2026 and the
// exam later; syllabus4u says the revised calendar shows the exam as awaited.
// No reliable report of an open application window was found, so the page
// says "expected" and gives no 2026 dates or vacancy count. Previous cycle
// (MTS & Havaldar 2025): about 7,948 posts (6,810 MTS + 1,138 Havaldar per
// careerpower), CBT from 4 Feb 2026, result in Aug 2026 with Havaldar PET/PST
// 24-31 Aug 2026 (testbook, class24, bhaskardigital extracts). 10th pass, age
// 18-25 (MTS) / 18-27 (Havaldar and some MTS posts), fee ₹100 with exemptions,
// Pay Level 1 are long-standing MTS rules. The old page's "9,583 posts",
// "27 Jun - 31 Jul 2026" window were not supported and are removed.
export const sscMtsHavaldarRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "SSC MTS और हवलदार 2026" },
  ],
  docHi: "SSC MTS 2026",
  title: "एसएससी एमटीएस व हवलदार भर्ती 2026",
  description: "SSC MTS और हवलदार 2026: 10वीं पास के लिए केंद्र सरकार की भर्ती। 2026 की अधिसूचना का इंतज़ार, पिछली भर्ती का हाल, योग्यता, उम्र, फीस, सैलरी और आवेदन का तरीका।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "SSC MTS और हवलदार 2026: अधिसूचना का इंतज़ार, योग्यता और तैयारी",
  lead: "<strong>स्थिति: अगली भर्ती अपेक्षित।</strong> कर्मचारी चयन आयोग (SSC) हर साल मल्टी-टास्किंग (नॉन-टेक्निकल) स्टाफ (MTS) और CBIC/CBN में हवलदार की भर्ती करता है; इसके लिए 10वीं पास होना काफी है। 16 अक्टूबर 2026 तक हमें 2026 की अधिसूचना जारी होने की भरोसेमंद पुष्टि नहीं मिली; रिपोर्टें इसे आने वाले महीनों में बता रही हैं। पदों की संख्या और तारीखें अधिसूचना में ही पता चलेंगी।",
  facts: [
    ["स्थिति", "2026 अधिसूचना अपेक्षित"],
    ["योग्यता", "10वीं पास"],
    ["उम्र", "18-25 साल (MTS), 18-27 साल (हवलदार)"],
    ["वेतन", "पे लेवल 1 (7वां वेतन आयोग)"],
  ],
  notice: "पुरानी जानकारी में 9,583 पद और 27 जून - 31 जुलाई 2026 का आवेदन बताया गया था; इसकी पुष्टि नहीं हुई, इसलिए हटाया गया है। फॉर्म भरने से पहले <a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> पर असली नोटिस ज़रूर देखें।",
  sections: [
    {
      id: "sthiti",
      title: "अभी की स्थिति",
      table: {
        head: ["चरण", "जानकारी"],
        rows: [
          ["MTS और हवलदार 2026 अधिसूचना", "अभी पक्की तारीख नहीं; SSC कैलेंडर/नोटिस देखें"],
          ["ऑनलाइन आवेदन", "अधिसूचना के बाद ssc.gov.in पर"],
          ["कंप्यूटर आधारित परीक्षा", "अधिसूचना में बताई जाएगी"],
          ["पिछली भर्ती (2025)", "रिपोर्टों के अनुसार लगभग 7,948 पद; परीक्षा फरवरी 2026, रिजल्ट अगस्त 2026"],
        ],
      },
      callout: { kind: "info", html: "SSC अपने कैलेंडर में तारीखें बदलता रहता है। किसी वेबसाइट पर \"आवेदन चालू\" लिखा देखें तो पहले ssc.gov.in के \"Notice Board\" में पुष्टि करें।" },
    },
    {
      id: "patrata",
      title: "योग्यता, उम्र और फीस (पिछली भर्तियों के नियम)",
      list: [
        "<strong>शिक्षा:</strong> किसी मान्यता प्राप्त बोर्ड से 10वीं (मैट्रिक) पास।",
        "<strong>उम्र:</strong> MTS के ज़्यादातर पदों के लिए 18-25 साल; हवलदार और कुछ MTS पदों के लिए 18-27 साल। SC/ST को 5, OBC को 3 साल की छूट; दिव्यांग और पूर्व सैनिकों को नियम के अनुसार।",
        "<strong>फीस:</strong> ₹100; महिलाएं, SC, ST, दिव्यांग और पात्र पूर्व सैनिक फीस से मुक्त।",
        "<strong>हवलदार के लिए:</strong> शारीरिक दक्षता (PET) और शारीरिक मानक (PST) टेस्ट भी पास करना होता है।",
      ],
      callout: { kind: "warn", html: "2026 की अधिसूचना में ये नियम बदल भी सकते हैं; अंतिम नियम अधिसूचना से ही मानें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया और सैलरी",
      list: [
        "कंप्यूटर आधारित परीक्षा (CBT): दो सेशन; पहला क्वालिफाइंग, मेरिट दूसरे सेशन से।",
        "हवलदार के लिए CBT के बाद PET/PST।",
        "दस्तावेज़ जांच के बाद विभाग आवंटन।",
        "वेतन 7वें वेतन आयोग के पे लेवल 1 में (बेसिक ₹18,000 से), साथ में DA, HRA और अन्य भत्ते।",
      ],
    },
    {
      id: "kaise",
      title: "अधिसूचना आने पर आवेदन कैसे करें",
      steps: [
        "<a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> पर वन टाइम रजिस्ट्रेशन (OTR) करें; पुरानी ssc.nic.in का रजिस्ट्रेशन मान्य नहीं है।",
        "लॉगिन करके MTS और हवलदार परीक्षा का फॉर्म खोलें, जानकारी भरें।",
        "ताज़ा फोटो और हस्ताक्षर तय साइज़ में अपलोड करें।",
        "फीस (अगर लागू हो) ऑनलाइन भरें और फॉर्म का प्रिंट रखें।",
      ],
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग (SSC)", note: "कैलेंडर, नोटिस, OTR, आवेदन" },
  ],
  faq: [
    { q: "क्या SSC MTS 2026 का फॉर्म अभी भर सकते हैं?", a: "16 अक्टूबर 2026 तक हमें आवेदन चालू होने की भरोसेमंद पुष्टि नहीं मिली। ssc.gov.in पर अधिसूचना आने के बाद ही फॉर्म भरें।" },
    { q: "SSC MTS के लिए क्या पढ़ाई चाहिए?", a: "10वीं पास होना काफी है।" },
    { q: "MTS 2026 में कितने पद होंगे?", a: "अभी तय नहीं। पिछली भर्ती (2025) में रिपोर्टों के अनुसार लगभग 7,948 पद थे; 2026 की संख्या अधिसूचना में आएगी।" },
    { q: "हवलदार और MTS में क्या फर्क है?", a: "दोनों की लिखित परीक्षा एक है। हवलदार (CBIC/CBN) के लिए उम्र 27 साल तक है और PET/PST भी देना होता है।" },
  ],
  related: [
    { href: "/jobs/ssc-cgl-recruitment-2026.html", emoji: "📝", title: "SSC CGL 2026", text: "स्नातक स्तर की भर्ती" },
    { href: "/jobs/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS 2026", text: "10वीं पास, बिना परीक्षा" },
    { href: "/service/ssc-recruitment.html", emoji: "📋", title: "SSC भर्ती", text: "SSC की सभी परीक्षाएं" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://ssc.gov.in/", label: "📝 SSC वेबसाइट" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
