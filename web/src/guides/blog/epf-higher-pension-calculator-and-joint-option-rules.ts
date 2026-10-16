import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/epfo-higher-pension-option.html (application window, status,
// demand letter, grievance), so this post explains the CALCULATION and links
// there for the process.
// Sources (checked 16 Oct 2026):
// - Supreme Court 4 Nov 2022 (EPFO v. Sunil Kumar B.); member deadline 11 Jul
//   2023; no new window (Business Today 13 Aug 2026) - reused from
//   web/src/guides/doc/epfo-higher-pension-option.ts.
// - EPS formula: pension = pensionable salary x pensionable service / 70;
//   pensionable salary = average of the last 60 months' pay for exits on/after
//   1 Sep 2014 (12 months before that); EPFO Circular Pension/SC/Higher
//   Pension/2022/1357 dated 1 Jun 2023 on computation (WTW June 2023 update,
//   KPMG flash news, Outlook Money).
// - Employer's EPS share 8.33% + additional 1.16% on pay above ₹15,000 for
//   higher-wage members (May 2023 notification, Business Today 11 May 2023);
//   past dues moved from EPF to EPS, shortfall paid by member.
// - EPFO higher pension calculator gives a ball-park estimate only (EPFO member
//   portal text as quoted on the old page). Weightage/maximum-service rules
//   not stated (not re-verified).

export const epfHigherPensionCalculatorAndJointOptionRules: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "EPF हायर पेंशन कैलकुलेशन" },
  ],
  docHi: "EPF हायर पेंशन",
  title: "EPF हायर पेंशन स्कीम: पेंशन कैलकुलेशन फॉर्मूला व नए नियम",
  description: "EPFO उच्च पेंशन (Higher Pension) का कैलकुलेशन फॉर्मूला, 60 महीने का औसत वेतन, असली वेतन पर अंशदान और उदाहरण से समझें कि पेंशन कितनी बनती है।",
  published: "2026-08-21",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "EPF हायर पेंशन कैसे गिनी जाती है: फॉर्मूला, उदाहरण और जरूरी नियम",
  lead: "EPS-95 में मासिक पेंशन का फॉर्मूला है: <strong>पेंशन योग्य वेतन × पेंशन योग्य सेवा (साल) ÷ 70</strong>। सामान्य पेंशन में वेतन ₹15,000 की सीमा पर गिना जाता है; हायर पेंशन में असली वेतन पर, यानी 1 सितंबर 2014 के बाद रिटायर होने वालों के लिए आखिरी 60 महीने के औसत वेतन पर। हायर पेंशन का विकल्प चुनने की आखिरी तारीख 11 जुलाई 2023 थी, इसलिए यह हिसाब उन्हीं के काम का है जिनका आवेदन पहले जमा हो चुका है।",
  facts: [
    ["फॉर्मूला", "औसत वेतन × सेवा के साल ÷ 70"],
    ["औसत वेतन", "आखिरी 60 महीने (1 सितंबर 2014 के बाद रिटायर)"],
    ["नियोक्ता का EPS अंशदान", "8.33% + ₹15,000 से ऊपर वेतन पर 1.16%"],
    ["नया आवेदन", "बंद (आखिरी तारीख 11 जुलाई 2023)"],
  ],
  notice: "हायर पेंशन का नया आवेदन अब नहीं होता। जो एजेंट \"अब भी फॉर्म भरवा देंगे\" कहकर पैसे मांगे, उससे सावधान रहें।",
  sections: [
    {
      id: "formula",
      title: "पेंशन का फॉर्मूला समझें",
      list: [
        "<strong>पेंशन योग्य वेतन:</strong> 1 सितंबर 2014 को या उसके बाद सेवा छोड़ने/रिटायर होने वालों के लिए आखिरी 60 महीने का औसत वेतन (बेसिक + DA)। उससे पहले रिटायर होने वालों के लिए आखिरी 12 महीने।",
        "<strong>पेंशन योग्य सेवा:</strong> जितने साल आपने EPS में अंशदान के साथ नौकरी की।",
        "<strong>सामान्य पेंशन:</strong> वेतन ₹15,000 की सीमा तक ही गिना जाता है, चाहे असली वेतन ज़्यादा हो।",
        "<strong>हायर पेंशन:</strong> असली (सीमा से ज़्यादा) वेतन गिना जाता है, क्योंकि उस पर पेंशन फंड में अंशदान भी गया है या अब जमा किया गया है।",
      ],
      callout: { kind: "info", html: "EPFO के 1 जून 2023 के सर्कुलर में बताया गया है कि 1 सितंबर 2014 से पहले और बाद की सेवा का हिसाब अलग-अलग हिस्सों में हो सकता है। आपके मामले में अंतिम राशि EPFO क्षेत्रीय कार्यालय आपके रिकॉर्ड से तय करता है।" },
    },
    {
      id: "udaharan",
      title: "उदाहरण से समझें",
      intro: "मान लीजिए आखिरी 60 महीने का औसत वेतन (बेसिक + DA) ₹50,000 है और EPS में सेवा 30 साल की है। यह सिर्फ समझाने के लिए मोटा हिसाब है:",
      table: {
        head: ["हिसाब", "पेंशन योग्य वेतन", "मासिक पेंशन (लगभग)"],
        rows: [
          ["सामान्य पेंशन", "₹15,000 (सीमा)", "₹15,000 × 30 ÷ 70 = ₹6,429"],
          ["हायर पेंशन", "₹50,000 (असली औसत)", "₹50,000 × 30 ÷ 70 = ₹21,429"],
        ],
      },
      callout: { kind: "warn", html: "हायर पेंशन के बदले पिछले सालों का अतिरिक्त अंशदान (ब्याज सहित) EPF खाते से EPS में जाता है; कम पड़े तो सदस्य को जमा करना होता है। इसलिए मासिक पेंशन बढ़ती है पर PF की एकमुश्त रकम घटती है।" },
    },
    {
      id: "anshdan",
      title: "अंशदान कैसे बदलता है",
      list: [
        "नियोक्ता के 12% अंशदान में से 8.33% EPS (पेंशन) में जाता है, बाकी EPF में।",
        "हायर पेंशन वाले सदस्यों के लिए ₹15,000 से ऊपर के वेतन पर नियोक्ता के हिस्से से <strong>1.16% और</strong> EPS में जाता है (कुल 9.49%)।",
        "पिछले वर्षों का अंतर (arrear) EPFO डिमांड लेटर में बताता है। तय समय में जमा न हो तो आवेदन अपात्र हो सकता है।",
      ],
    },
    {
      id: "calculator",
      title: "EPFO कैलकुलेटर का सही इस्तेमाल",
      steps: [
        "<a href=\"https://unifiedportal-mem.epfindia.gov.in/memberinterface/\" target=\"_blank\" rel=\"noopener nofollow\">EPFO मेंबर पोर्टल</a> पर Pension on Higher Wages वाले विकल्प में कैलकुलेटर और आवेदन स्टेटस मिलते हैं।",
        "वेतन, अंशदान और सेवा के विवरण भरें।",
        "जो राशि दिखे उसे <strong>मोटा अनुमान</strong> मानें; EPFO खुद इसे ball-park estimate बताता है। अंतिम राशि डिमांड लेटर/PPO में आती है।",
      ],
    },
  ],
  official: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", title: "EPFO यूनिफाइड मेंबर पोर्टल", note: "हायर पेंशन स्टेटस और कैलकुलेटर" },
    { href: "https://www.epfindia.gov.in/", title: "कर्मचारी भविष्य निधि संगठन (EPFO)", note: "सर्कुलर और FAQ" },
    { href: "https://epfigms.gov.in/", title: "EPFiGMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "EPS पेंशन का फॉर्मूला क्या है?", a: "पेंशन योग्य वेतन × पेंशन योग्य सेवा (साल) ÷ 70। 1 सितंबर 2014 के बाद रिटायर होने वालों के लिए पेंशन योग्य वेतन आखिरी 60 महीने का औसत है।" },
    { q: "क्या अब भी हायर पेंशन के लिए आवेदन कर सकते हैं?", a: "नहीं। संयुक्त विकल्प जमा करने की आखिरी तारीख 11 जुलाई 2023 थी और कोई नई विंडो नहीं खुली है।" },
    { q: "क्या EPFO कैलकुलेटर की राशि पक्की है?", a: "नहीं, यह मोटा अनुमान है। अंतिम राशि EPFO क्षेत्रीय कार्यालय आपके वेतन और अंशदान के रिकॉर्ड से तय करता है।" },
    { q: "हायर पेंशन में अतिरिक्त 1.16% क्या है?", a: "₹15,000 से ऊपर के वेतन पर नियोक्ता के हिस्से से 1.16% अतिरिक्त EPS में जाता है, ताकि पेंशन फंड में कुल 9.49% जाए।" },
    { q: "आवेदन या डिमांड लेटर से जुड़ी शिकायत कहां करें?", a: "epfigms.gov.in पर, या EPFO टोल-फ्री 1800-118-005 पर। पूरी प्रक्रिया हमारी EPFO हायर पेंशन गाइड में है।" },
  ],
  related: [
    { href: "/service/epfo-higher-pension-option.html", emoji: "📑", title: "EPFO हायर पेंशन: आवेदन और स्टेटस", text: "डिमांड लेटर, स्टेटस, शिकायत" },
    { href: "/service/epfo.html", emoji: "🏦", title: "EPFO / भविष्य निधि", text: "UAN, बैलेंस, क्लेम" },
    { href: "/tools/epf-calculator.html", emoji: "🧮", title: "EPF कैलकुलेटर", text: "PF जमा का अनुमान" },
    { href: "/service/national-pension-system.html", emoji: "📈", title: "NPS", text: "अतिरिक्त पेंशन बचत" },
  ],
  aside: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", label: "🏦 EPFO मेंबर पोर्टल" },
    { href: "/service/epfo-higher-pension-option.html", label: "📑 हायर पेंशन गाइड" },
  ],
};
