import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; upsssc.gov.in not opened from the sandbox, so
// coverage of the UPSSSC advertisement was used):
// - adda247.com, resultbharat.com (Advt 22-2026), sarkariresult.com,
//   freejobalert.com, kollegeapply, govtjobguru.in, mysarkarinaukri.com,
//   karnatakacareers.org: Advt 22-Exam/2026, 108 posts in the Directorate of
//   Sports, UP (Deputy Sports Officer, Assistant Coach in 12 sports, Life
//   Guard, Groundsman); online 14 Oct - 4 Nov 2026; fee adjustment and
//   correction till 11 Nov 2026; fee ₹25 for all; only UPSSSC PET-2025
//   scorecard holders; shortlisting on PET-2025 score then main written exam.
//   Groundsman / Life Guard: High School (10th); coach / deputy sports officer
//   posts: graduation + coaching diploma (and experience) per one source.
// Post-wise numbers, pay level per post and age bands differ between
// sources (pay reported Level 3 to Level 6, ₹21,700 up to ₹1,12,400; age 18
// or 21 to 40): kept general / left to the notification.
export const upssscSportsDirectorateRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UPSSSC खेल निदेशालय भर्ती 2026" },
  ],
  docHi: "UPSSSC खेल निदेशालय भर्ती 2026",
  title: "UPSSSC खेल निदेशालय भर्ती 2026: 108 पद, आवेदन 4 नवंबर तक",
  description: "UPSSSC खेल निदेशालय भर्ती 2026 (विज्ञापन 22-परीक्षा/2026): उप क्रीड़ा अधिकारी, सहायक प्रशिक्षक, लाइफगार्ड, ग्राउंड्समैन के 108 पद। PET-2025 वाले 4 नवंबर 2026 तक आवेदन करें।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "UPSSSC खेल निदेशालय भर्ती 2026: 108 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) ने खेल निदेशालय, उत्तर प्रदेश में <strong>108 पदों</strong> की भर्ती निकाली है (विज्ञापन 22-परीक्षा/2026)। इसमें उप क्रीड़ा अधिकारी, 12 खेलों के सहायक प्रशिक्षक, लाइफगार्ड और ग्राउंड्समैन के पद हैं। आवेदन <strong>14 अक्टूबर से 4 नवंबर 2026</strong> तक होंगे। केवल वही आवेदन कर सकते हैं जिनके पास <strong>UPSSSC PET-2025 का स्कोर कार्ड</strong> है।",
  facts: [
    ["कुल पद", "108 (खेल निदेशालय, उत्तर प्रदेश)"],
    ["आखिरी तारीख", "4 नवंबर 2026; फीस समायोजन/सुधार 11 नवंबर तक"],
    ["फीस", "₹25 (सभी वर्ग)"],
    ["आवेदन", "<a href=\"https://upsssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsssc.gov.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी UPSSSC के विज्ञापन पर आधारित रिपोर्टों से है। पदवार संख्या, वेतन स्तर और उम्र सीमा पर रिपोर्टों में अंतर है, इसलिए फॉर्म भरने से पहले upsssc.gov.in पर विज्ञापन ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "14 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "4 नवंबर 2026"],
          ["फीस समायोजन और फॉर्म सुधार", "11 नवंबर 2026 तक"],
          ["मुख्य लिखित परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "न्यूनतम शिक्षा (रिपोर्टों के अनुसार)"],
        rows: [
          ["उप क्रीड़ा अधिकारी", "स्नातक + खेल प्रशिक्षण (कोचिंग) डिप्लोमा; अनुभव नोटिफिकेशन में देखें"],
          ["सहायक प्रशिक्षक (12 खेल)", "स्नातक + संबंधित खेल में कोचिंग डिप्लोमा"],
          ["लाइफगार्ड", "हाईस्कूल (10वीं) + तैराकी/जीवन रक्षा योग्यता"],
          ["ग्राउंड्समैन", "हाईस्कूल (10वीं)"],
        ],
      },
      callout: { kind: "info", html: "कुल पद 108 हैं। हर पद की संख्या और वेतन स्तर (रिपोर्टों में Level 3 से Level 6 तक, यानी ₹21,700 से ₹1,12,400 के दायरे में) विज्ञापन में पदवार दिए हैं; अपने पद का सही वेतन वहीं देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>PET-2025:</strong> UPSSSC की प्रारंभिक अर्हता परीक्षा (PET) 2025 दी हो और उसका स्कोर कार्ड मिला हो। इसके बिना आवेदन नहीं होगा।",
        "<strong>शिक्षा:</strong> ऊपर तालिका में दी गई; पद के अनुसार पूरी शर्तें विज्ञापन में देखें।",
        "<strong>उम्र:</strong> अधिकतम 40 साल; न्यूनतम उम्र पद के अनुसार (18 या 21 साल)। उम्र की गणना की तारीख और छूट नोटिफिकेशन में देखें।",
        "<strong>छूट:</strong> उत्तर प्रदेश के आरक्षित वर्गों को नियमों के अनुसार उम्र में छूट।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      html: "सभी वर्गों के लिए ऑनलाइन प्रोसेसिंग फीस <strong>₹25</strong>। आखिरी तारीख के बाद फॉर्म या फीस स्वीकार नहीं होगी।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>शॉर्टलिस्ट:</strong> PET-2025 के सामान्यीकृत (normalised) अंकों के आधार पर।",
        "<strong>मुख्य लिखित परीक्षा।</strong>",
        "<strong>दस्तावेज़ जांच</strong> और जहां ज़रूरी हो, कौशल/खेल संबंधी जांच (विज्ञापन में देखें)।",
      ],
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://upsssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsssc.gov.in</a> खोलें और विज्ञापन 22-परीक्षा/2026 (खेल निदेशालय) पढ़ें।",
        "PET-2025 के रजिस्ट्रेशन नंबर से आवेदन फॉर्म खोलें।",
        "पद चुनें, शिक्षा और खेल योग्यता की जानकारी भरें, फोटो और हस्ताक्षर अपलोड करें। साइज़ के लिए <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल कर सकते हैं।",
        "₹25 फीस ऑनलाइन भरें और फॉर्म का प्रिंट रखें। गलती हो तो 11 नवंबर 2026 तक सुधार करें।",
      ],
    },
  ],
  official: [
    { href: "https://upsssc.gov.in/", title: "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC)", note: "विज्ञापन 22-परीक्षा/2026 और आवेदन" },
  ],
  faq: [
    { q: "UPSSSC खेल निदेशालय भर्ती 2026 की आखिरी तारीख क्या है?", a: "4 नवंबर 2026। फीस समायोजन और फॉर्म सुधार 11 नवंबर 2026 तक।" },
    { q: "क्या PET-2025 के बिना आवेदन कर सकते हैं?", a: "नहीं। केवल वही उम्मीदवार आवेदन कर सकते हैं जिन्होंने UPSSSC PET-2025 दिया और जिन्हें स्कोर कार्ड मिला।" },
    { q: "फीस कितनी है?", a: "सभी वर्गों के लिए ₹25।" },
    { q: "10वीं पास किस पद के लिए आवेदन कर सकते हैं?", a: "रिपोर्टों के अनुसार ग्राउंड्समैन और लाइफगार्ड पदों के लिए हाईस्कूल (10वीं) योग्यता है; लाइफगार्ड के लिए तैराकी/जीवन रक्षा की शर्त भी देखें।" },
  ],
  related: [
    { href: "/jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html", emoji: "📋", title: "UPSSSC ऑडिटर भर्ती", text: "UPSSSC की एक और भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "अपनी सही उम्र जानें" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://upsssc.gov.in/", label: "🏅 upsssc.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
