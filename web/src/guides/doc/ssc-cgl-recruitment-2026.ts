import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; ssc.gov.in not reachable from the sandbox,
// search-result extracts of coverage of the official notice used):
// careers360, pw.live, challengerapp, indianpaycalculator (CGL 2026
// notification on ssc.gov.in, online application from 21 May 2026, about
// SSC tentative vacancy list 24.09.2026: 10,731 posts (ssc.gov.in).
// 12,256 Group B and C posts; last date reported as 22 June 2026 by most and
// 25 June by one; correction window end-June/early July), careers360 news,
// careerindia, adda247, mysarkarinaukri (Tier 1 admit card from about 27 Sep
// 2026, released phase-wise; Tier 1 CBT 30 Sep - 30 Oct 2026; Tier 2
// tentatively December 2026; login at ssc.gov.in). Graduation and the 18-32
// post-wise age band are long-standing CGL rules. The old page's "15,000+
// posts" and "last date 25 September 2026" did not match the 2026 notice and
// were removed. Exact last date, shift timings and helpline left general.
export const sscCglRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "SSC CGL 2026" },
  ],
  docHi: "SSC CGL 2026",
  title: "SSC CGL 2026-27 Recruitment - Combined Graduate Level",
  description: "SSC CGL 2026: कर्मचारी चयन आयोग की संयुक्त स्नातक स्तरीय भर्ती, लगभग 12,256 पद। आवेदन जून 2026 में बंद; टियर 1 परीक्षा 30 सितंबर-30 अक्टूबर 2026, एडमिट कार्ड और आगे के चरण।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "15 अक्टूबर 2026",
  h1: "SSC CGL 2026: आवेदन बंद, टियर 1 परीक्षा और एडमिट कार्ड की जानकारी",
  lead: "कर्मचारी चयन आयोग (Staff Selection Commission, SSC) संयुक्त स्नातक स्तरीय (CGL) परीक्षा से केंद्र सरकार के मंत्रालयों और विभागों में ग्रुप B और ग्रुप C के पद भरता है। 2026 की भर्ती के ऑनलाइन आवेदन <strong>21 मई 2026</strong> से शुरू होकर <strong>जून 2026</strong> में बंद हो चुके हैं; रिपोर्टों के अनुसार इसमें लगभग <strong>12,256 पद</strong> हैं। टियर 1 कंप्यूटर आधारित परीक्षा <strong>30 सितंबर से 30 अक्टूबर 2026</strong> तक चल रही है और एडमिट कार्ड ssc.gov.in पर लॉगिन करके मिलता है।",
  facts: [
    ["आयोग", "कर्मचारी चयन आयोग (SSC)"],
    ["पद", "अधिसूचना में लगभग 12,256; SSC की 24.09.2026 की अस्थायी रिक्ति सूची में 10,731"],
    ["योग्यता", "किसी भी विषय में स्नातक (Graduation)"],
    ["टियर 1", "30 सितंबर - 30 अक्टूबर 2026"],
  ],
  notice: "15 अक्टूबर 2026 तक: CGL 2026 के आवेदन बंद हैं, अब नया फॉर्म नहीं भरा जा सकता। टियर 1 परीक्षा चल रही है; अपनी तारीख, शिफ्ट और सेंटर एडमिट कार्ड में देखें।",
  sections: [
    {
      id: "timeline",
      title: "SSC CGL 2026 की मुख्य तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "21 मई 2026"],
          ["आवेदन की आखिरी तारीख", "जून 2026 (ज़्यादातर रिपोर्ट में 22 जून)"],
          ["फॉर्म सुधार विंडो", "जून के आखिर से जुलाई 2026 की शुरुआत"],
          ["टियर 1 एडमिट कार्ड", "लगभग 27 सितंबर 2026 से, परीक्षा तारीख के अनुसार चरणों में"],
          ["टियर 1 परीक्षा (CBT)", "30 सितंबर - 30 अक्टूबर 2026"],
          ["टियर 2", "दिसंबर 2026 (संभावित)"],
        ],
      },
      callout: { kind: "info", html: "ये तारीखें अधिसूचना पर आधारित समाचार रिपोर्टों से हैं। आखिरी और सही जानकारी हमेशा <a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> के नोटिस में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक। कुछ पदों (जैसे सांख्यिकी या लेखा से जुड़े) के लिए खास विषय मांगे जाते हैं।",
        "<strong>उम्र:</strong> पद के अनुसार आम तौर पर 18 से 32 साल के बीच; SC/ST, OBC, दिव्यांग और पूर्व सैनिकों को सरकारी नियमों के अनुसार छूट।",
        "<strong>पद:</strong> केंद्रीय मंत्रालयों, आयकर, GST/सीमा शुल्क, CBI, डाक, CAG जैसे विभागों में असिस्टेंट, इंस्पेक्टर, ऑडिटर, अकाउंटेंट आदि।",
      ],
    },
    {
      id: "admit-card",
      title: "टियर 1 एडमिट कार्ड कैसे डाउनलोड करें",
      steps: [
        "<a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> खोलें और अपने रजिस्ट्रेशन नंबर व पासवर्ड से लॉगिन करें।",
        "डैशबोर्ड में CGL 2026 टियर 1 का एडमिट कार्ड लिंक खोलें और डाउनलोड करें।",
        "परीक्षा की तारीख, शिफ्ट, रिपोर्टिंग टाइम और सेंटर का पता ध्यान से पढ़ें।",
        "एडमिट कार्ड का प्रिंट और मूल फोटो पहचान पत्र साथ लेकर जाएं।",
      ],
      callout: { kind: "warn", html: "सिटी स्लिप (City Intimation Slip) एडमिट कार्ड नहीं है। परीक्षा में सिर्फ एडमिट कार्ड मान्य है। गेट बंद होने का समय एडमिट कार्ड में लिखा होता है।" },
    },
    {
      id: "aage",
      title: "आगे क्या होता है",
      list: [
        "टियर 1 के बाद SSC प्रोविज़नल आंसर की जारी करता है; उस पर तय फीस देकर आपत्ति की जा सकती है।",
        "टियर 1 का रिज़ल्ट और कट-ऑफ के बाद योग्य उम्मीदवार टियर 2 देते हैं (संभावित दिसंबर 2026)।",
        "अंतिम चयन के बाद दस्तावेज़ सत्यापन और विभाग का आवंटन होता है।",
      ],
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग (SSC)", note: "नोटिस, लॉगिन, एडमिट कार्ड, रिज़ल्ट" },
  ],
  faq: [
    { q: "क्या SSC CGL 2026 का फॉर्म अभी भर सकते हैं?", a: "नहीं। ऑनलाइन आवेदन 21 मई 2026 से शुरू होकर जून 2026 में बंद हो चुके हैं। अगली CGL भर्ती की सूचना ssc.gov.in पर आएगी।" },
    { q: "SSC CGL 2026 में कितने पद हैं?", a: "अधिसूचना पर आधारित रिपोर्टों के अनुसार लगभग 12,256 पद। भर्ती के दौरान SSC पदों की संख्या बदल भी सकता है, इसलिए ताज़ा संख्या ssc.gov.in पर देखें।" },
    { q: "टियर 1 परीक्षा कब है?", a: "रिपोर्टों के अनुसार 30 सितंबर से 30 अक्टूबर 2026 तक, कई शिफ्टों में। आपकी तारीख आपके एडमिट कार्ड में लिखी है।" },
    { q: "SSC CGL के लिए कौन सी डिग्री चाहिए?", a: "किसी भी विषय में स्नातक। कुछ खास पदों के लिए तय विषय (जैसे सांख्यिकी) ज़रूरी होता है।" },
  ],
  related: [
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "SSC की सभी परीक्षाएं" },
    { href: "/service/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS 2026", text: "10वीं पास, बिना परीक्षा" },
    { href: "/service/indian-navy-agniveer-ssr-recruitment-2026.html", emoji: "⚓", title: "नौसेना अग्निवीर SSR 2026", text: "12वीं पास के लिए" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "परीक्षा फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://ssc.gov.in/", label: "📝 SSC वेबसाइट" },
    { href: "/category/jobs-education.html", label: "🎓 नौकरी और शिक्षा" },
  ],
};
