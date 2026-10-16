import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Not a tool page:
// the post only points to the site's calculator at /tools/age-calculator.html.
// Age limits and cut-off dates reused from the verified job/exam guides
// (checked 15-16 Oct 2026, mostly from coverage of the official notices):
// - SSC CGL 2026: 18-32 by post, reckoned on 1 Aug 2026 (indianpaycalculator,
//   sscdrishti, pw.live; e.g. 18-27 band = born 02-08-1999 to 01-08-2008);
//   SSC MTS 18-25, Havaldar 18-27 (ssc-mts-havaldar-recruitment-2026.ts).
// - UPSC CSE 2026: 21-32 on 1 Aug 2026; attempts Gen/EWS 6, OBC/PwBD 9
//   (upsc-cse-recruitment-2027.ts).
// - IBPS PO 2026: 20-30 on 1 Jul 2026; IBPS Clerk CSA-XVI 20-28; SBI PO
//   2026: 21-30 on 1 Apr 2026; RRB NTPC graduate (CEN 06/2026): 18-33 on
//   1 Jan 2027 (jobs/*.ts guides).
// - Central relaxation: SC/ST 5, OBC-NCL 3, PwBD 10 (+3 OBC, +5 SC/ST),
//   ex-servicemen 3 years after deducting military service (as printed in
//   SSC/IBPS notices). Old page's defence (NDA/CDS/AFCAT), RPF and SSC GD
//   ranges, and "attempts left / next exam dates" tool claims, were not
//   verified for 2026 and are left out.

export const examAgeCalculator2026CheckEligibilityForSscUpscBankingStateExamsMsfh9pcr0: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "परीक्षा आयु पात्रता 2026" },
  ],
  docHi: "परीक्षा आयु पात्रता",
  title: "परीक्षा आयु कैलकुलेटर 2026: SSC, UPSC, बैंकिंग और राज्य परीक्षाओं की पात्रता जांचें",
  description: "सरकारी परीक्षा में उम्र किस तारीख पर गिनी जाती है, 2026 की SSC, UPSC, बैंक और रेलवे भर्तियों की उम्र सीमा, आरक्षण में छूट, और अपनी उम्र खुद कैसे जांचें।",
  published: "2026-08-05",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "सरकारी परीक्षा में उम्र कैसे गिनें: कट-ऑफ तारीख, 2026 की उम्र सीमा और छूट",
  lead: "सरकारी भर्ती में आपकी आज की उम्र नहीं, बल्कि अधिसूचना में लिखी <strong>कट-ऑफ तारीख</strong> पर की उम्र देखी जाती है। यह तारीख हर परीक्षा में अलग होती है: जैसे SSC CGL 2026 और UPSC CSE 2026 में 1 अगस्त 2026, IBPS PO 2026 में 1 जुलाई 2026 और RRB NTPC (ग्रेजुएट) में 1 जनवरी 2027। जन्म तिथि 10वीं के प्रमाण पत्र वाली ही मानी जाती है। आरक्षित वर्गों को ऊपरी उम्र सीमा में छूट मिलती है।",
  facts: [
    ["उम्र किस दिन की", "अधिसूचना की कट-ऑफ तारीख पर"],
    ["जन्म तिथि का प्रमाण", "10वीं का प्रमाण पत्र"],
    ["छूट (केंद्र)", "SC/ST 5, OBC 3, दिव्यांग 10 साल"],
    ["जांचें", '<a href="/tools/age-calculator.html">उम्र कैलकुलेटर</a>'],
  ],
  sections: [
    {
      id: "seema",
      title: "2026 की कुछ भर्तियों में उम्र सीमा",
      intro: "ये सीमाएं सामान्य वर्ग की हैं और भर्तियों की अधिसूचना (या उसकी खबरों) से ली गई हैं। आवेदन से पहले हमेशा अपनी भर्ती की अधिसूचना देखें:",
      table: {
        head: ["परीक्षा", "उम्र सीमा", "किस तारीख को"],
        rows: [
          ['<a href="/service/ssc-cgl-recruitment-2026.html">SSC CGL 2026</a>', "18 से 32 साल (पद के अनुसार 18-27, 18-30, 20-30 आदि)", "1 अगस्त 2026"],
          ["SSC MTS / हवलदार", "MTS 18-25; हवलदार 18-27 साल", "अधिसूचना में"],
          ['<a href="/service/upsc-cse-recruitment-2027.html">UPSC सिविल सेवा</a> 2026', "21 से 32 साल", "1 अगस्त 2026"],
          ["IBPS PO 2026", "20 से 30 साल", "1 जुलाई 2026"],
          ["IBPS क्लर्क (CSA-XVI)", "20 से 28 साल", "अधिसूचना में"],
          ["SBI PO 2026", "21 से 30 साल", "1 अप्रैल 2026"],
          ['<a href="/jobs/rrb-ntpc-recruitment-2026-2027.html">RRB NTPC</a> ग्रेजुएट (CEN 06/2026)', "18 से 33 साल", "1 जनवरी 2027"],
        ],
      },
      callout: { kind: "info", html: "राज्य लोक सेवा आयोग और राज्य की भर्तियों में उम्र सीमा, कट-ऑफ तारीख और छूट राज्य सरकार के नियम से तय होती है, और अक्सर राज्य के मूल निवासियों को ही छूट मिलती है। अपने राज्य की अधिसूचना पढ़ें।" },
    },
    {
      id: "chhoot",
      title: "उम्र में छूट (केंद्र सरकार की भर्तियां)",
      table: {
        head: ["वर्ग", "ऊपरी सीमा में छूट"],
        rows: [
          ["SC / ST", "5 साल"],
          ["OBC (नॉन-क्रीमी लेयर)", "3 साल"],
          ["दिव्यांग (PwBD) सामान्य/EWS", "10 साल"],
          ["दिव्यांग OBC", "13 साल"],
          ["दिव्यांग SC/ST", "15 साल"],
          ["पूर्व सैनिक", "सेना की सेवा घटाकर उम्र में 3 साल (भर्ती के नियम अनुसार)"],
        ],
      },
      callout: { kind: "warn", html: "EWS वर्ग को केंद्र की भर्तियों में उम्र की छूट नहीं मिलती। छूट तभी मिलेगी जब आवेदन में सही वर्ग चुना हो और उस वर्ग का मान्य प्रमाण पत्र (जैसे OBC-NCL का ताज़ा प्रमाण पत्र) हो।" },
    },
    {
      id: "ganana",
      title: "अपनी उम्र खुद कैसे जांचें: एक उदाहरण",
      steps: [
        "अधिसूचना में कट-ऑफ तारीख और उम्र सीमा देखें। जैसे SSC CGL 2026 में 18-27 वाले पद के लिए 1 अगस्त 2026 को उम्र 18 से 27 साल।",
        "अधिसूचना अक्सर जन्म तिथि की सीमा भी लिख देती है। ऊपर के उदाहरण में: जन्म <strong>2 अगस्त 1999</strong> से पहले नहीं और <strong>1 अगस्त 2008</strong> के बाद नहीं।",
        "अपनी 10वीं वाली जन्म तिथि इस सीमा से मिलाएं। सीमा के अंदर है तो उम्र से पात्र हैं।",
        "आरक्षित वर्ग में हैं तो ऊपरी सीमा में अपनी छूट जोड़ें (जैसे OBC: 27 + 3 = 30 साल)।",
      ],
      html: "<p>साल, महीने और दिन में सटीक उम्र देखने के लिए साइट का मुफ्त <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> इस्तेमाल करें। उसमें कट-ऑफ तारीख खुद डालें; नतीजा अनुमान है, अंतिम फैसला अधिसूचना के नियम से होता है।</p>",
    },
    {
      id: "galti",
      title: "आम गलतियां",
      list: [
        "<strong>आज की उम्र देखना:</strong> उम्र सिर्फ कट-ऑफ तारीख पर गिनी जाती है, फॉर्म भरने के दिन पर नहीं।",
        "<strong>पिछले साल की सीमा मान लेना:</strong> कट-ऑफ तारीख और पदों की उम्र सीमा हर भर्ती में बदल सकती है।",
        "<strong>आधार की जन्म तिथि लिखना:</strong> 10वीं के प्रमाण पत्र और फॉर्म की जन्म तिथि अलग हो तो दस्तावेज़ जांच में उम्मीदवारी रद्द हो सकती है।",
        "<strong>प्रयासों की सीमा भूलना:</strong> UPSC सिविल सेवा में उम्र के साथ प्रयास भी सीमित हैं: सामान्य/EWS 6, OBC और दिव्यांग 9; SC/ST उम्र सीमा तक।",
      ],
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग (SSC)", note: "अधिसूचना और उम्र सीमा" },
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)" },
    { href: "https://www.ibps.in/", title: "IBPS", note: "बैंक भर्तियां" },
    { href: "https://www.rrbapply.gov.in/", title: "RRB आवेदन पोर्टल" },
  ],
  faq: [
    { q: "सरकारी परीक्षा में उम्र किस तारीख से गिनी जाती है?", a: "अधिसूचना में लिखी कट-ऑफ तारीख से। जैसे SSC CGL 2026 और UPSC CSE 2026 में 1 अगस्त 2026, IBPS PO 2026 में 1 जुलाई 2026।" },
    { q: "OBC को उम्र में कितनी छूट मिलती है?", a: "केंद्र की भर्तियों में OBC (नॉन-क्रीमी लेयर) को 3 साल, SC/ST को 5 साल और दिव्यांग को 10 साल की छूट मिलती है।" },
    { q: "क्या EWS को उम्र में छूट मिलती है?", a: "केंद्र सरकार की भर्तियों में नहीं। कुछ राज्य अपनी भर्तियों में देते हैं; राज्य की अधिसूचना देखें।" },
    { q: "उम्र के लिए कौन सा दस्तावेज़ माना जाता है?", a: "आम तौर पर 10वीं (मैट्रिक) का प्रमाण पत्र। फॉर्म में वही जन्म तिथि भरें।" },
    { q: "क्या उम्र सीमा से एक दिन ज़्यादा होने पर आवेदन हो सकता है?", a: "नहीं। कट-ऑफ तारीख पर एक दिन भी ज़्यादा होने पर आप अपात्र होते हैं, जब तक कोई छूट लागू न हो।" },
  ],
  related: [
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "कट-ऑफ तारीख पर सटीक उम्र" },
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "📝", title: "SSC CGL 2026", text: "पद, उम्र, परीक्षा तारीख" },
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "🏛️", title: "UPSC CSE 2027", text: "उम्र, प्रयास, कैलेंडर" },
    { href: "/exams/ssc-exam-calendar-2026-2027.html", emoji: "📅", title: "SSC परीक्षा कैलेंडर", text: "2026-27 की तारीखें" },
    { href: "/jobs/", emoji: "💼", title: "सरकारी नौकरी", text: "ताज़ा भर्तियां" },
  ],
  aside: [
    { href: "/tools/age-calculator.html", label: "🎂 उम्र कैलकुलेटर" },
    { href: "/jobs/", label: "💼 ताज़ा भर्तियां" },
  ],
};
