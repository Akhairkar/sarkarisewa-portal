import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; upsssc.gov.in not opened from the sandbox, so
// coverage of the UPSSSC advertisement was used):
// - careerpower.in, adda247.com, resultbharat.com (Advt 26-2026),
//   karmasandhan.com, sarkariresult.com, govtjobguru.in, kollegeapply:
//   Advt 26-Exam/2026 (notified ~16 Oct 2026), Combined Lower Subordinate
//   Services (Intermediate Level) Main Exam, 1,784 posts; online 10 Nov -
//   1 Dec 2026 at upsssc.gov.in; Intermediate (10+2) pass + valid PET-2025
//   scorecard; CCC for some posts; fee ₹25 for all; age max 40 (minimum and
//   maximum differ post-wise) on 1 Jul 2026; selection PET-2025 shortlisting
//   + main written exam + document verification; posts incl. Tax Collection
//   Amin (235), Land Acquisition Amin (187), Gram Panchayat Adhikari, Gram
//   Vikas Adhikari (Samaj Kalyan), Store Keeper and Clerk, etc. Category
//   totals UR 840, SC 326, ST 26, OBC 448, EWS 144.
// Pay reported Level 2 or Level 3 by post; full post-wise list and post-wise
// age bands not confirmed: left to the notification.
// NOTE: application opens 10 Nov 2026 (not yet open on 18 Oct 2026).
export const upssscInterLevelRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UPSSSC इंटर लेवल भर्ती 2026" },
  ],
  docHi: "UPSSSC इंटर लेवल भर्ती 2026",
  title: "UPSSSC इंटर लेवल भर्ती 2026: 1,784 पद, आवेदन 10 नवंबर से",
  description: "UPSSSC इंटर लेवल (12वीं स्तर) भर्ती 2026, विज्ञापन 26-परीक्षा/2026: 1,784 पद। PET-2025 वाले 10 नवंबर से 1 दिसंबर 2026 तक आवेदन करें। पद, उम्र, फीस।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "UPSSSC इंटर लेवल भर्ती 2026: 1,784 पदों पर आवेदन 10 नवंबर से",
  lead: "<strong>स्थिति: नोटिफिकेशन जारी, आवेदन 10 नवंबर 2026 से शुरू होगा।</strong> उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) ने संयुक्त अवर अधीनस्थ सेवा (इंटरमीडिएट स्तर) मुख्य परीक्षा के लिए <strong>1,784 पदों</strong> की भर्ती निकाली है (विज्ञापन 26-परीक्षा/2026)। 12वीं पास और <strong>PET-2025 स्कोर कार्ड</strong> वाले उम्मीदवार <strong>10 नवंबर से 1 दिसंबर 2026</strong> तक upsssc.gov.in पर आवेदन कर सकेंगे। फीस सभी के लिए ₹25 है।",
  facts: [
    ["कुल पद", "1,784 (इंटर स्तर, कई विभाग)"],
    ["आवेदन", "10 नवंबर से 1 दिसंबर 2026 तक"],
    ["योग्यता", "12वीं पास + PET-2025 स्कोर कार्ड"],
    ["वेबसाइट", "<a href=\"https://upsssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsssc.gov.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक: विज्ञापन जारी हो गया है, पर ऑनलाइन फॉर्म 10 नवंबर 2026 से खुलेगा। ये जानकारी UPSSSC के विज्ञापन पर आधारित रिपोर्टों से है। पदवार संख्या, उम्र और वेतन स्तर upsssc.gov.in पर विज्ञापन में ज़रूर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी", "अक्टूबर 2026 (26-परीक्षा/2026)"],
          ["ऑनलाइन आवेदन शुरू", "10 नवंबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "1 दिसंबर 2026"],
          ["फीस समायोजन / फॉर्म सुधार", "नोटिफिकेशन में देखें"],
          ["मुख्य लिखित परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["मुख्य पद (रिपोर्टों के अनुसार)", "पद संख्या"],
        rows: [
          ["कर संग्रह अमीन (Tax Collection Amin)", "235"],
          ["भूमि अध्याप्ति अमीन (Land Acquisition Amin)", "187"],
          ["ग्राम पंचायत अधिकारी, ग्राम विकास अधिकारी (समाज कल्याण)", "नोटिफिकेशन में देखें"],
          ["भंडारपाल एवं लिपिक और अन्य पद", "नोटिफिकेशन में देखें"],
          ["कुल", "1,784"],
        ],
      },
      callout: { kind: "info", html: "वर्गवार कुल पद: अनारक्षित 840, OBC 448, SC 326, EWS 144, ST 26। वेतन पद के अनुसार Level 2 या Level 3 बताया गया है; अपने पद का सही वेतन विज्ञापन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> माध्यमिक शिक्षा परिषद, उत्तर प्रदेश से इंटरमीडिएट (12वीं) या समकक्ष पास।",
        "<strong>PET-2025:</strong> UPSSSC PET-2025 दी हो और मान्य स्कोर कार्ड हो।",
        "<strong>कंप्यूटर:</strong> कुछ पदों के लिए NIELIT का CCC प्रमाण पत्र ज़रूरी।",
        "<strong>उम्र:</strong> 1 जुलाई 2026 को गिनी जाएगी; अधिकतम 40 साल, पर न्यूनतम और अधिकतम उम्र पद के अनुसार अलग है। UP के आरक्षित वर्गों को नियमों के अनुसार छूट।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      html: "सभी वर्गों के लिए ऑनलाइन फीस <strong>₹25</strong>।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>शॉर्टलिस्ट:</strong> PET-2025 के अंकों के आधार पर।",
        "<strong>मुख्य लिखित परीक्षा।</strong>",
        "<strong>दस्तावेज़ जांच</strong> (जहां लागू हो)।",
      ],
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें (10 नवंबर 2026 से)",
      steps: [
        "10 नवंबर 2026 को या उसके बाद <a href=\"https://upsssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsssc.gov.in</a> खोलें और विज्ञापन 26-परीक्षा/2026 पढ़ें।",
        "PET-2025 के रजिस्ट्रेशन नंबर से आवेदन फॉर्म खोलें।",
        "पदों की पसंद का क्रम, 12वीं और CCC की जानकारी भरें; फोटो और हस्ताक्षर अपलोड करें। साइज़ के लिए <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल कर सकते हैं।",
        "₹25 फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "info", html: "अभी से 12वीं की मार्कशीट, PET-2025 स्कोर कार्ड, जाति/निवास प्रमाण पत्र और (जिन पदों में ज़रूरी हो) CCC प्रमाण पत्र तैयार रखें।" },
    },
  ],
  official: [
    { href: "https://upsssc.gov.in/", title: "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC)", note: "विज्ञापन 26-परीक्षा/2026 और आवेदन" },
  ],
  faq: [
    { q: "UPSSSC इंटर लेवल भर्ती 2026 का फॉर्म कब भरेगा?", a: "ऑनलाइन आवेदन 10 नवंबर 2026 से 1 दिसंबर 2026 तक होगा।" },
    { q: "कितने पद हैं?", a: "कुल 1,784 पद, जिनमें कर संग्रह अमीन (235) और भूमि अध्याप्ति अमीन (187) जैसे पद शामिल हैं।" },
    { q: "क्या PET-2025 ज़रूरी है?", a: "हाँ। केवल PET-2025 का मान्य स्कोर कार्ड रखने वाले आवेदन कर सकते हैं।" },
    { q: "फीस कितनी है?", a: "सभी वर्गों के लिए ₹25।" },
    { q: "उम्र सीमा क्या है?", a: "1 जुलाई 2026 को गिनी जाएगी; अधिकतम 40 साल, पर पद के अनुसार अलग। सही सीमा विज्ञापन में देखें।" },
  ],
  related: [
    { href: "/jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html", emoji: "📋", title: "UPSSSC ऑडिटर भर्ती", text: "UPSSSC की एक और भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जुलाई 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://upsssc.gov.in/", label: "📝 upsssc.gov.in" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
