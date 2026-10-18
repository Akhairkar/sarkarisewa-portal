import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; upessc.up.gov.in not opened from the sandbox,
// so coverage of the UPESSC advertisement was used):
// - businesstoday.in (16 Sep 2026): UPESSC teacher recruitment, 15,012 posts
//   (12,405 Assistant Teacher + 2,607 Lecturer/PGT), exams in December.
// - newsbytesapp.com, news.kollegeapply.com (UPESSC PRT last date extended),
//   timesnowhindi.com headline: Assistant Teacher (12,405) last date extended
//   to 28 Oct 2026, correction till 31 Oct 2026; exam 3-4 Dec 2026 unchanged.
// - competition.careers360.com/hi, careerindia.com, sarkarijobs.com,
//   careerpower.in, govtjobsalert.in: Advt 05/2026 dated 15 Sep 2026, online
//   from 16 Sep 2026; 11,508 Assistant Teacher (Primary, Urban - Basic Edu.)
//   + 897 Assistant Teacher (attached primary, aided - Secondary Edu.);
//   graduation + D.El.Ed/BTC/Special BTC/B.El.Ed + UPTET/CTET (primary); OTR
//   mandatory; urban post age 21-40 on 1 Jul 2026 (UP SC/ST/OBC +5); Pay
//   Level 6 (₹35,400-1,12,400); written exam 120 MCQ / 360 marks, 2 hours,
//   -1 negative. Fee reports differ (₹1,000 / ₹500 / ₹300 in one source):
//   left to the notification. Aided-post age rule differs: left vague.
export const upAssistantTeacherRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UP सहायक अध्यापक भर्ती 2026" },
  ],
  docHi: "UP सहायक अध्यापक भर्ती 2026",
  title: "UP सहायक अध्यापक भर्ती 2026: 12,405 पद, आवेदन 28 अक्टूबर तक",
  description: "UPESSC सहायक अध्यापक भर्ती 2026 (विज्ञापन 05/2026): 12,405 पद, आवेदन की आखिरी तारीख बढ़कर 28 अक्टूबर 2026। योग्यता, उम्र, वेतन, परीक्षा और आवेदन का तरीका।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "UP सहायक अध्यापक भर्ती 2026: 12,405 पदों पर आवेदन 28 अक्टूबर तक",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC) ने विज्ञापन 05/2026 से <strong>सहायक अध्यापक के 12,405 पद</strong> निकाले हैं। इनमें 11,508 पद नगर क्षेत्र के परिषदीय प्राथमिक स्कूलों के और 897 पद सहायता प्राप्त स्कूलों से जुड़े प्राथमिक विभाग के हैं। आवेदन की आखिरी तारीख <strong>बढ़कर 28 अक्टूबर 2026</strong> हो गई है (समाचार रिपोर्टों के अनुसार)। लिखित परीक्षा 3 और 4 दिसंबर 2026 को प्रस्तावित है।",
  facts: [
    ["कुल पद", "12,405 (11,508 नगर क्षेत्र + 897 सहायता प्राप्त)"],
    ["आखिरी तारीख", "28 अक्टूबर 2026 (बढ़ी हुई); सुधार 31 अक्टूबर तक"],
    ["वेतन", "Pay Level 6 (₹35,400 से ₹1,12,400)"],
    ["आवेदन", "<a href=\"https://upessc.up.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upessc.up.gov.in</a> (पहले OTR ज़रूरी)"],
  ],
  notice: "18 अक्टूबर 2026 तक: आवेदन की आखिरी तारीख पहले 15 अक्टूबर थी; समाचार रिपोर्टों के अनुसार इसे 28 अक्टूबर 2026 तक बढ़ाया गया है। ये जानकारी UPESSC के विज्ञापन पर आधारित समाचार रिपोर्टों से है। फॉर्म भरने से पहले upessc.up.gov.in पर विज्ञापन और तारीख बढ़ाने वाला नोटिस ज़रूर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी", "15 सितंबर 2026 (विज्ञापन 05/2026)"],
          ["ऑनलाइन आवेदन शुरू", "16 सितंबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "28 अक्टूबर 2026 (पहले 15 अक्टूबर थी)"],
          ["फॉर्म में सुधार", "31 अक्टूबर 2026 तक"],
          ["लिखित परीक्षा", "3 और 4 दिसंबर 2026 (प्रस्तावित)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "विभाग"],
        rows: [
          ["सहायक अध्यापक (प्राथमिक, नगर क्षेत्र)", "11,508", "बेसिक शिक्षा विभाग"],
          ["सहायक अध्यापक (सहायता प्राप्त विद्यालयों से जुड़ा प्राथमिक विभाग)", "897", "माध्यमिक शिक्षा विभाग"],
          ["कुल", "12,405", ""],
        ],
      },
      callout: { kind: "info", html: "वेतन: Pay Level 6 (₹35,400 से ₹1,12,400) और नियमों के अनुसार भत्ते। इसी के साथ प्रवक्ता (PGT) के 2,607 पदों की अलग भर्ती आई थी; उसका आवेदन 17 अक्टूबर 2026 को बंद हो चुका है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> किसी भी विषय में स्नातक, साथ में 2 साल का D.El.Ed (BTC), BTC (उर्दू), विशिष्ट BTC, RCI मान्य विशेष शिक्षा डिप्लोमा या 4 साल का B.El.Ed।",
        "<strong>शिक्षक पात्रता परीक्षा:</strong> प्राथमिक स्तर (कक्षा 1 से 5) की UPTET या CTET पास।",
        "<strong>उम्र (नगर क्षेत्र के पद):</strong> 1 जुलाई 2026 को 21 से 40 साल। UP के SC/ST/OBC को 5 साल की छूट।",
        "<strong>सहायता प्राप्त विद्यालयों के 897 पद:</strong> इनकी उम्र और योग्यता के नियम अलग हैं; नोटिफिकेशन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      html: "फीस ऑनलाइन (डेबिट/क्रेडिट कार्ड, नेट बैंकिंग) भरनी है। वर्ग के अनुसार फीस की रकम अलग-अलग रिपोर्टों में अलग दी गई है, इसलिए सही रकम नोटिफिकेशन में देखें।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा:</strong> 120 बहुविकल्पीय प्रश्न, कुल 360 अंक, समय 2 घंटे। सही उत्तर पर +3 और गलत उत्तर पर -1 अंक। एक से ज़्यादा पाली होने पर नॉर्मलाइज़ेशन।",
        "<strong>मेरिट सूची</strong> और <strong>दस्तावेज़ जांच</strong> के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://upessc.up.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upessc.up.gov.in</a> खोलें। पहले One Time Registration (OTR) पूरा करें; इसके बिना फॉर्म नहीं भरेगा।",
        "OTR नंबर से लॉगिन करके विज्ञापन 05/2026 (सहायक अध्यापक) चुनें।",
        "शिक्षा, D.El.Ed/BTC और TET की जानकारी भरें, फोटो और हस्ताक्षर अपलोड करें। साइज़ ठीक करने के लिए हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> इस्तेमाल कर सकते हैं।",
        "फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
        "कोई गलती हो तो 31 अक्टूबर 2026 तक सुधार कर लें।",
      ],
      callout: { kind: "warn", html: "शिक्षक भर्ती के नाम पर पैसे लेकर नौकरी दिलाने का दावा करने वालों से सावधान रहें। चयन केवल लिखित परीक्षा और मेरिट से होता है।" },
    },
  ],
  official: [
    { href: "https://upessc.up.gov.in/", title: "उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC)", note: "विज्ञापन 05/2026, OTR और आवेदन" },
    { href: "https://basiceducation.up.gov.in/", title: "बेसिक शिक्षा विभाग, उत्तर प्रदेश" },
  ],
  faq: [
    { q: "UP सहायक अध्यापक भर्ती 2026 का फॉर्म कब तक भरें?", a: "समाचार रिपोर्टों के अनुसार आखिरी तारीख बढ़कर 28 अक्टूबर 2026 हो गई है और फॉर्म में सुधार 31 अक्टूबर तक होगा। upessc.up.gov.in पर नोटिस देखकर पुष्टि करें।" },
    { q: "कितने पद हैं?", a: "कुल 12,405 पद: 11,508 नगर क्षेत्र के परिषदीय प्राथमिक स्कूलों में और 897 सहायता प्राप्त स्कूलों के प्राथमिक विभाग में।" },
    { q: "क्या B.Ed वाले आवेदन कर सकते हैं?", a: "रिपोर्टों में योग्यता D.El.Ed/BTC, विशिष्ट BTC, विशेष शिक्षा डिप्लोमा या B.El.Ed बताई गई है, साथ में प्राथमिक स्तर की UPTET/CTET। B.Ed के बारे में अंतिम नियम नोटिफिकेशन में देखें।" },
    { q: "उम्र कितनी होनी चाहिए?", a: "नगर क्षेत्र के पदों के लिए 1 जुलाई 2026 को 21 से 40 साल; UP के SC/ST/OBC को 5 साल की छूट। सहायता प्राप्त पदों के नियम अलग हैं।" },
    { q: "परीक्षा कब होगी?", a: "लिखित परीक्षा 3 और 4 दिसंबर 2026 को प्रस्तावित है। एडमिट कार्ड की सूचना UPESSC की वेबसाइट पर आएगी।" },
  ],
  related: [
    { href: "/jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html", emoji: "📋", title: "UPSSSC ऑडिटर भर्ती", text: "UP की एक और भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जुलाई 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://upessc.up.gov.in/", label: "🏫 upessc.up.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
