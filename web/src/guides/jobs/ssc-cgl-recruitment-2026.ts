import type { DocGuide } from "../doc/types";

// Overlaps web/src/guides/doc/ssc-cgl-recruitment-2026.ts (/service/ page);
// this /jobs/ page is the status-and-next-steps view and links to it.
// Sources (checked 16 Oct 2026; ssc.gov.in not reachable from the sandbox,
// search-result extracts of news coverage used): freepressjournal,
// news.careers360, deccanherald, testbook (notification 21 May 2026, about
// SSC tentative vacancy list 24.09.2026: 10,731 posts (ssc.gov.in).
// 12,256 Group B and C posts; original last date 22 Jun, window reopened
// 23-25 Jun 2026 11 pm, fee till 26 Jun, correction 1-3 Jul 2026; 25 Jun is
// the crucial date for eligibility; fee ₹100 for General); testbook,
// careers360, pw.live (Tier 1 CBT 30 Sep - 30 Oct 2026, Tier 2 December 2026
// tentative). Fee exemption categories, graduation and the 18-32 post-wise age
// band are long-standing CGL rules. The old page's 17,727 posts, 24 Jun - 24 Jul
// dates and 9-26 Sep Tier 1 were wrong and are removed. Post-wise pay levels
// and answer key dates left general.
export const sscCglRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "SSC CGL 2026" },
  ],
  docHi: "SSC CGL 2026",
  title: "एसएससी सीजीएल भर्ती 2026",
  description: "SSC CGL 2026: लगभग 12,256 पद। आवेदन 25 जून 2026 को बंद, टियर 1 परीक्षा 30 सितंबर-30 अक्टूबर 2026, टियर 2 दिसंबर (संभावित)। अभी क्या करें, आगे के चरण।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "SSC CGL 2026: आवेदन बंद, टियर 1 परीक्षा जारी - अभी क्या करें",
  lead: "<strong>स्थिति: आवेदन बंद, टियर 1 परीक्षा चल रही है।</strong> कर्मचारी चयन आयोग (SSC) ने 21 मई 2026 को CGL 2026 की अधिसूचना जारी की थी; रिपोर्टों के अनुसार लगभग <strong>12,256 पद</strong> हैं। आवेदन की आखिरी तारीख 22 जून थी, जिसे बढ़ाकर <strong>25 जून 2026</strong> किया गया। टियर 1 कंप्यूटर आधारित परीक्षा <strong>30 सितंबर से 30 अक्टूबर 2026</strong> तक है।",
  facts: [
    ["स्थिति", "आवेदन बंद, टियर 1 जारी"],
    ["पद", "अधिसूचना में लगभग 12,256; SSC की 24.09.2026 की अस्थायी रिक्ति सूची में 10,731"],
    ["आवेदन बंद", "25 जून 2026 (बढ़ी हुई तारीख)"],
    ["टियर 1", "30 सितंबर - 30 अक्टूबर 2026"],
  ],
  notice: "16 अक्टूबर 2026 तक: CGL 2026 का फॉर्म अब नहीं भरा जा सकता। पूरी भर्ती की जानकारी (योग्यता, एडमिट कार्ड के स्टेप) हमारे <a href=\"/service/ssc-cgl-recruitment-2026.html\">SSC CGL 2026 गाइड</a> में भी है।",
  sections: [
    {
      id: "tarikhen",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["अधिसूचना और आवेदन शुरू", "21 मई 2026"],
          ["आवेदन की आखिरी तारीख", "22 जून 2026, फिर दोबारा खुलकर 25 जून 2026 (रात 11 बजे) तक"],
          ["फीस भुगतान की आखिरी तारीख", "26 जून 2026"],
          ["फॉर्म सुधार विंडो", "1 - 3 जुलाई 2026"],
          ["टियर 1 एडमिट कार्ड", "परीक्षा तारीख के अनुसार चरणों में, ssc.gov.in लॉगिन से"],
          ["टियर 1 परीक्षा (CBT)", "30 सितंबर - 30 अक्टूबर 2026"],
          ["टियर 2", "दिसंबर 2026 (संभावित)"],
        ],
      },
      callout: { kind: "info", html: "SSC ने बताया कि उम्र और योग्यता की गिनती के लिए 25 जून 2026 को ही आखिरी (crucial) तारीख माना जाएगा।" },
    },
    {
      id: "patrata",
      title: "पद, योग्यता, फीस",
      list: [
        "<strong>पद:</strong> केंद्रीय मंत्रालयों और विभागों में असिस्टेंट सेक्शन ऑफिसर, इंस्पेक्टर (आयकर, GST, सीमा शुल्क), ऑडिटर, अकाउंटेंट, टैक्स असिस्टेंट आदि; ग्रुप B और C।",
        "<strong>शिक्षा:</strong> किसी भी विषय में स्नातक; कुछ पदों के लिए तय विषय (जैसे सांख्यिकी)।",
        "<strong>उम्र:</strong> पद के अनुसार आम तौर पर 18 से 32 साल; SC/ST, OBC, दिव्यांग, पूर्व सैनिक को नियम के अनुसार छूट।",
        "<strong>फीस:</strong> ₹100; महिलाएं, SC, ST, दिव्यांग और पात्र पूर्व सैनिक फीस से मुक्त।",
        "<strong>सैलरी:</strong> पद के अनुसार 7वें वेतन आयोग का पे लेवल; हर पद का लेवल अधिसूचना की पद-सूची में दिया है।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "टियर 1: कंप्यूटर आधारित परीक्षा (क्वालिफाइंग/शॉर्टलिस्ट के लिए)।",
        "टियर 1 की आंसर की पर आपत्ति, फिर रिजल्ट और कट-ऑफ।",
        "टियर 2: कंप्यूटर आधारित परीक्षा; मेरिट इसी से बनती है (कुछ पदों के लिए अतिरिक्त पेपर)।",
        "कुछ पदों के लिए स्किल टेस्ट (DEST/CPT), फिर दस्तावेज़ जांच और विभाग आवंटन।",
      ],
    },
    {
      id: "abhi",
      title: "अभी क्या करें",
      list: [
        "<a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> पर लॉगिन करके अपना टियर 1 एडमिट कार्ड डाउनलोड करें; तारीख, शिफ्ट और सेंटर उसी में है।",
        "परीक्षा के दिन एडमिट कार्ड का प्रिंट और मूल फोटो पहचान पत्र ले जाएं।",
        "परीक्षा के बाद आंसर की और रिस्पॉन्स शीट ssc.gov.in पर देखें।",
      ],
      callout: { kind: "warn", html: "सिटी स्लिप एडमिट कार्ड नहीं है। रिजल्ट या नौकरी के नाम पर पैसे मांगने वालों से बचें।" },
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग (SSC)", note: "नोटिस, लॉगिन, एडमिट कार्ड, रिजल्ट" },
  ],
  faq: [
    { q: "क्या SSC CGL 2026 का फॉर्म अभी भर सकते हैं?", a: "नहीं। आवेदन 25 जून 2026 (बढ़ी हुई तारीख) को बंद हो चुके हैं।" },
    { q: "SSC CGL 2026 में कितने पद हैं?", a: "रिपोर्टों के अनुसार लगभग 12,256। SSC भर्ती के दौरान संख्या बदल सकता है; ताज़ा संख्या ssc.gov.in पर देखें।" },
    { q: "टियर 1 परीक्षा कब है?", a: "30 सितंबर से 30 अक्टूबर 2026 तक, कई शिफ्टों में। आपकी तारीख आपके एडमिट कार्ड में है।" },
    { q: "टियर 2 कब होगा?", a: "रिपोर्टों के अनुसार दिसंबर 2026 में संभावित; पक्की तारीख SSC बताएगा।" },
  ],
  related: [
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "📝", title: "SSC CGL 2026 गाइड", text: "योग्यता और एडमिट कार्ड" },
    { href: "/jobs/ssc-mts-havaldar-recruitment-2026.html", emoji: "🧾", title: "SSC MTS 2026", text: "10वीं पास के लिए" },
    { href: "/service/ssc-recruitment.html", emoji: "📋", title: "SSC भर्ती", text: "SSC की सभी परीक्षाएं" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://ssc.gov.in/", label: "📝 SSC वेबसाइट" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
