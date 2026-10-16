import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old post (same URL). Overlaps with
// /service/mh-ladki-bahin-yojana.html (eligibility, e-KYC steps); this post
// takes the "status / instalment not received / dates" angle and links there.
// Sources (checked 16 Oct 2026; ladakibahin.maharashtra.gov.in not reachable
// from the sandbox):
// - Scheme facts (₹1,500/month by DBT, women 21-65, income up to ₹2.5 lakh,
//   exclusions, e-KYC with Aadhaar OTP on the portal; ₹2,100 not officially
//   announced) reused from web/src/guides/doc/mh-ladki-bahin-yojana.ts
//   (myscheme.gov.in/schemes/mmlby, portal extracts).
// - e-KYC drive 2026: Navbharat Live (deadline extended to 31 Mar 2026, then
//   30 Apr 2026 for correcting wrong answers), Deccan Chronicle / UNI reports
//   (payments of about 24 lakh women halted after wrong e-KYC answers, about
//   20 lakh corrected; beneficiary count revised), Navbharat Live (pending
//   months sometimes paid together, e.g. ₹3,000 for two months). No official
//   date for the next instalment was found, so no instalment dates are given.
// - Helpline not verified, left out.

const PORTAL = '<a href="https://ladakibahin.maharashtra.gov.in/" target="_blank" rel="noopener nofollow">ladakibahin.maharashtra.gov.in</a>';

export const ladkiBahinYojanaApplicationStatusAndInstallmentDates: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "लाडकी बहीण: स्थिति और किस्त" },
  ],
  docHi: "लाडकी बहीण स्थिति",
  title: "माझी लाडकी बहीण योजना: आवेदन स्थिति, ₹1500 हफ्ता व e-KYC गाइड",
  description: "महाराष्ट्र मुख्यमंत्री माझी लाडकी बहीण योजना की आवेदन स्थिति, ₹1,500 मासिक बैंक ट्रांसफर, किस्त रुकने के कारण, e-KYC और अस्वीकृत आवेदनों का समाधान।",
  published: "2026-08-22",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "लाडकी बहीण योजना: आवेदन स्थिति कैसे देखें, ₹1,500 की किस्त क्यों रुकती है",
  lead: "मुख्यमंत्री माझी लाडकी बहीण योजना में पात्र महिलाओं को ₹1,500 हर महीने सीधे आधार से जुड़े बैंक खाते में (DBT) मिलते हैं। 2026 में e-KYC और जांच के बाद कई महिलाओं की किस्त रुकी है, इसलिए पैसा न आए तो सबसे पहले e-KYC, आवेदन की स्थिति और बैंक की आधार सीडिंग देखें। किस्त की कोई तय मासिक तारीख नहीं है; कभी-कभी दो महीने की राशि एक साथ आती है। ₹2,100 करने की कोई सरकारी घोषणा हमें नहीं मिली।",
  facts: [
    ["राशि", "₹1,500 प्रति माह (DBT)"],
    ["स्थिति कहां देखें", PORTAL],
    ["किस्त की तारीख", "हर बार सरकार तय करती है, कोई तय तारीख नहीं"],
    ["e-KYC", "ज़रूरी; न करने पर किस्त रुक सकती है"],
  ],
  notice: "सोशल मीडिया पर \"इस तारीख को हफ्ता पक्का\" वाले मैसेज अक्सर गलत निकलते हैं। किस्त की तारीख सिर्फ महिला एवं बाल विकास विभाग या मंत्री की आधिकारिक घोषणा से मानें।",
  sections: [
    {
      id: "status",
      title: "आवेदन और भुगतान की स्थिति कैसे देखें",
      steps: [
        `${PORTAL} खोलें और अपने मोबाइल नंबर से लॉग-इन करें।`,
        "पहले किए गए आवेदन (application) की सूची खोलें और उसकी स्थिति पढ़ें: मंज़ूर (Approved), जांच में (Pending/In review), या अस्वीकृत (Rejected)।",
        "अस्वीकृत हो तो कारण पढ़ें और नोट कर लें; वही कारण आंगनवाड़ी सेविका या बाल विकास प्रकल्प कार्यालय में बताना होगा।",
        "भुगतान आया या नहीं, यह बैंक पासबुक, बैंक SMS या नेट-बैंकिंग में DBT की ₹1,500 की एंट्री से पक्का करें।",
      ],
      callout: { kind: "info", html: "ऑनलाइन न देख पाएं तो अपनी आंगनवाड़ी सेविका, सेतु सुविधा केंद्र या <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> से स्थिति निकलवाएं।" },
    },
    {
      id: "rukne-ke-karan",
      title: "किस्त रुकने के आम कारण",
      table: {
        head: ["कारण", "क्या करें"],
        rows: [
          ["e-KYC नहीं की या अधूरी", "पोर्टल पर आधार OTP से e-KYC पूरी करें। तरीका: <a href=\"/service/mh-ladki-bahin-yojana.html#ekyc\">e-KYC के स्टेप</a>"],
          ["e-KYC में गलत जवाब (जैसे परिवार में सरकारी नौकरी के सवाल पर)", "2026 में लाखों महिलाओं की किस्त इसी वजह से रुकी। सुधार की सुविधा पोर्टल पर है या नहीं, यह बाल विकास प्रकल्प कार्यालय से पूछें"],
          ["जांच में अपात्र पाई गईं", "जैसे आयकर देने वाला सदस्य, सरकारी कर्मचारी, चारपहिया वाहन या ₹2.5 लाख से ज़्यादा आय। ऐसे में किस्त बंद होती है"],
          ["बैंक खाता आधार से नहीं जुड़ा / DBT बंद", "बैंक जाकर आधार सीडिंग और DBT चालू कराएं"],
          ["खाता बंद या निष्क्रिय", "बैंक में KYC करवाकर खाता चालू कराएं"],
          ["उम्र 65 साल पूरी", "योजना 21 से 65 साल की महिलाओं के लिए है"],
        ],
      },
    },
    {
      id: "tarikh",
      title: "किस्त की तारीख के बारे में सच",
      list: [
        "योजना में किस्त की कोई तय मासिक तारीख नहीं है। हर बार सरकार पैसा जारी करती है और बैंक में आने में कुछ दिन लग सकते हैं।",
        "कई बार पिछले महीने की किस्त देर से आती है, या दो महीने की राशि (₹3,000) एक साथ आती है।",
        "राशि अभी ₹1,500 प्रति माह ही है। ₹2,100 की बात चर्चा में रही है, पर हमें इसकी सरकारी घोषणा नहीं मिली।",
      ],
    },
    {
      id: "naya-avedan",
      title: "नया आवेदन",
      intro: "खबरों के अनुसार नए आवेदन फिलहाल बंद हैं और मौजूदा लाभार्थियों की e-KYC और जांच चल रही है। नए आवेदन फिर से खुलने की जानकारी पोर्टल या आंगनवाड़ी सेविका से ही लें। फॉर्म भरवाने के नाम पर पैसे मांगने वालों से बचें।",
    },
  ],
  official: [
    { href: "https://ladakibahin.maharashtra.gov.in/", title: "मुख्यमंत्री माझी लाडकी बहीण योजना पोर्टल", note: "लॉग-इन, e-KYC, आवेदन की स्थिति" },
    { href: "https://www.myscheme.gov.in/schemes/mmlby", title: "myScheme: योजना का विवरण" },
    { href: "https://grievances.maharashtra.gov.in/en", title: "महाराष्ट्र सरकार शिकायत पोर्टल" },
  ],
  faq: [
    { q: "लाडकी बहीण योजना का स्टेटस कैसे देखें?", a: "ladakibahin.maharashtra.gov.in पर मोबाइल नंबर से लॉग-इन करें और अपने आवेदन की स्थिति देखें। पैसा आया या नहीं, यह बैंक पासबुक/SMS से पक्का करें।" },
    { q: "e-KYC की आखिरी तारीख निकल गई, अब क्या?", a: "खबरों के अनुसार e-KYC की तारीख कई बार बढ़ी और गलत जवाब सुधारने की आखिरी तारीख 30 अप्रैल 2026 बताई गई थी। अब आपके मामले में क्या हो सकता है, यह तालुका के बाल विकास प्रकल्प कार्यालय या आंगनवाड़ी सेविका से पूछें।" },
    { q: "क्या अब ₹2,100 मिलेंगे?", a: "हमें इसकी कोई सरकारी घोषणा नहीं मिली। अभी ₹1,500 प्रति माह ही मान्य है।" },
    { q: "मेरी किस्त अचानक बंद हो गई, क्यों?", a: "सबसे आम कारण: e-KYC नहीं हुई या उसमें गलत जवाब, जांच में अपात्र पाया जाना, या बैंक खाते की आधार सीडिंग/DBT बंद होना। पोर्टल पर कारण देखें और ऊपर दी तालिका के अनुसार ठीक कराएं।" },
  ],
  related: [
    { href: "/service/mh-ladki-bahin-yojana.html", emoji: "👩", title: "लाडकी बहीण योजना: पूरी गाइड", text: "पात्रता, अपात्रता, e-KYC" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "आय का प्रमाण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "मोबाइल और जानकारी अपडेट" },
    { href: "/states/maharashtra.html", emoji: "🗺️", title: "महाराष्ट्र की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://ladakibahin.maharashtra.gov.in/", label: "👩 लाडकी बहीण पोर्टल" },
    { href: "/service/mh-ladki-bahin-yojana.html", label: "📘 योजना की पूरी गाइड" },
  ],
};
