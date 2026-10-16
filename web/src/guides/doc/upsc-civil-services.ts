import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; upsc.gov.in not reachable from the sandbox,
// search-result extracts of coverage of the official notices used):
// pw.live, padhai.ai, careers360, superkalam (CSE 2026: prelims 24 May 2026;
// prelims result 15 Jun 2026, about 13,343 qualified for mains; mains DAF
// window 19-28 Jun 2026; mains from 21 Aug 2026; age 21-32 on 1 Aug 2026 with
// OBC +3, SC/ST +5, PwBD +10; fee ₹100, exempt for women, SC, ST, PwBD);
// visionias, careers360 (UPSC calendar 2027 released 20 May 2026: CSE 2027
// notification 13 Jan 2027, last date 2 Feb 2027, prelims 23 May 2027, mains
// from 20 Aug 2027). Vacancy figures for 2026 conflict between sources (933 vs
// 1,016), so no number is given. Attempt limits (General/EWS 6, OBC/PwBD 9,
// SC/ST no limit up to age) are long-standing CSE rules. Helpline number not
// re-verified, so left out.
export const upscCivilServices: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "UPSC सिविल सेवा परीक्षा" },
  ],
  docHi: "UPSC सिविल सेवा परीक्षा",
  title: "यूपीएससी सिविल सेवा परीक्षा 2026",
  description: "आईएएस, आईपीएस, आईएफएस और अन्य केंद्रीय सिविल सेवाओं में भर्ती के लिए यूपीएससी द्वारा आयोजित प्रमुख राष्ट्रीय परीक्षा।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "UPSC सिविल सेवा परीक्षा (CSE) 2026: योग्यता, उम्र, प्रयास, फीस और परीक्षा के चरण",
  lead: "संघ लोक सेवा आयोग (UPSC) हर साल सिविल सेवा परीक्षा (CSE) से IAS, IPS, IFS और दूसरी केंद्रीय सेवाओं में भर्ती करता है। परीक्षा तीन चरणों में होती है: प्रारंभिक (Prelims), मुख्य (Mains) और इंटरव्यू। CSE 2026 का प्रीलिम्स 24 मई 2026 को हुआ और मुख्य परीक्षा 21 अगस्त 2026 से शुरू हुई; अगली परीक्षा (CSE 2027) की अधिसूचना 13 जनवरी 2027 को आनी है।",
  facts: [
    ["आयोग", "संघ लोक सेवा आयोग (UPSC)"],
    ["योग्यता", "किसी भी विषय में स्नातक"],
    ["उम्र", "21 से 32 साल (आरक्षित वर्गों को छूट)"],
    ["फीस", "₹100; महिला, SC, ST, दिव्यांग को छूट"],
  ],
  sections: [
    {
      id: "charan",
      title: "परीक्षा के तीन चरण",
      table: {
        head: ["चरण", "क्या होता है"],
        rows: [
          ["प्रारंभिक परीक्षा (Prelims)", "दो वस्तुनिष्ठ पेपर: सामान्य अध्ययन I और CSAT (पेपर II)। CSAT सिर्फ क्वालिफाइंग है; मेरिट GS पेपर I से बनती है।"],
          ["मुख्य परीक्षा (Mains)", "लिखित परीक्षा: निबंध, सामान्य अध्ययन, वैकल्पिक विषय और दो क्वालिफाइंग भाषा पेपर।"],
          ["व्यक्तित्व परीक्षण (Interview)", "मुख्य परीक्षा पास करने वालों का इंटरव्यू; अंतिम मेरिट मुख्य परीक्षा और इंटरव्यू के अंकों से।"],
        ],
      },
    },
    {
      id: "patrata",
      title: "योग्यता, उम्र और प्रयास",
      list: [
        "<strong>शिक्षा:</strong> मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक। अंतिम वर्ष के छात्र प्रीलिम्स दे सकते हैं, पर मुख्य परीक्षा के फॉर्म तक डिग्री का प्रमाण चाहिए।",
        "<strong>उम्र (CSE 2026):</strong> 1 अगस्त 2026 को 21 से 32 साल। OBC को 3 साल, SC/ST को 5 साल और दिव्यांगों को 10 साल की छूट।",
        "<strong>प्रयास:</strong> सामान्य/EWS को 6, OBC और दिव्यांग को 9 प्रयास; SC/ST के लिए उम्र सीमा तक कोई गिनती नहीं। प्रीलिम्स का एक भी पेपर देने पर प्रयास गिना जाता है।",
        "<strong>नागरिकता:</strong> IAS, IPS और IFS के लिए भारतीय नागरिक होना ज़रूरी है।",
      ],
    },
    {
      id: "cse-2026",
      title: "CSE 2026 का हाल",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["प्रारंभिक परीक्षा", "24 मई 2026"],
          ["प्रीलिम्स रिज़ल्ट", "15 जून 2026"],
          ["मुख्य परीक्षा", "21 अगस्त 2026 से"],
          ["इंटरव्यू और अंतिम रिज़ल्ट", "मुख्य परीक्षा के रिज़ल्ट के बाद; तारीख UPSC घोषित करेगा"],
        ],
      },
      callout: { kind: "info", html: "अगली परीक्षा की तैयारी कर रहे हैं? CSE 2027 की तारीखें हमारी <a href=\"/service/upsc-cse-recruitment-2027.html\">UPSC CSE 2027 गाइड</a> में देखें।" },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे होता है",
      steps: [
        "अधिसूचना आने पर <a href=\"https://upsconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsconline.gov.in</a> पर वन टाइम रजिस्ट्रेशन (OTR) करें।",
        "CSE का फॉर्म भरें: व्यक्तिगत और शैक्षणिक जानकारी, परीक्षा केंद्र और फोटो/हस्ताक्षर।",
        "पहचान पत्र की जानकारी भरें; वही पहचान पत्र परीक्षा के दिन साथ ले जाना होता है।",
        "₹100 फीस भरें (महिला, SC, ST और दिव्यांग उम्मीदवारों को फीस नहीं देनी)। फॉर्म जमा करके प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "UPSC का फॉर्म आखिरी तारीख के बाद नहीं भरा जा सकता। आखिरी दिनों में वेबसाइट धीमी हो सकती है, इसलिए जल्दी आवेदन करें।" },
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "अधिसूचना, एडमिट कार्ड, रिज़ल्ट" },
    { href: "https://upsconline.gov.in/", title: "UPSC ऑनलाइन आवेदन (OTR)" },
  ],
  faq: [
    { q: "UPSC सिविल सेवा परीक्षा के लिए क्या योग्यता चाहिए?", a: "किसी भी विषय में स्नातक डिग्री। अंतिम वर्ष के छात्र प्रीलिम्स दे सकते हैं।" },
    { q: "उम्र सीमा क्या है?", a: "आम तौर पर 21 से 32 साल। OBC को 3, SC/ST को 5 और दिव्यांगों को 10 साल की छूट मिलती है।" },
    { q: "कितनी बार परीक्षा दे सकते हैं?", a: "सामान्य/EWS उम्मीदवार 6 बार, OBC और दिव्यांग 9 बार; SC/ST उम्मीदवार उम्र सीमा तक कितनी भी बार।" },
    { q: "फीस कितनी है?", a: "प्रीलिम्स के लिए ₹100। महिला, SC, ST और दिव्यांग उम्मीदवारों को फीस से छूट है।" },
    { q: "CSE 2027 का फॉर्म कब आएगा?", a: "UPSC कैलेंडर 2027 के अनुसार अधिसूचना 13 जनवरी 2027 को और आवेदन की आखिरी तारीख 2 फरवरी 2027 है; प्रीलिम्स 23 मई 2027 को। तारीखें बदल सकती हैं, upsc.gov.in देखें।" },
  ],
  related: [
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "📅", title: "UPSC CSE 2027", text: "अगली परीक्षा की तारीखें" },
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "📝", title: "SSC CGL 2026", text: "स्नातक स्तर की भर्ती" },
    { href: "/service/rbi-grade-b-officer-recruitment-2026.html", emoji: "🏦", title: "RBI ग्रेड B", text: "RBI अधिकारी भर्ती" },
    { href: "/service/ibps-bank-recruitment.html", emoji: "💼", title: "IBPS बैंक भर्ती", text: "बैंक PO और क्लर्क" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "https://upsconline.gov.in/", label: "📝 UPSC ऑनलाइन आवेदन" },
  ],
};
