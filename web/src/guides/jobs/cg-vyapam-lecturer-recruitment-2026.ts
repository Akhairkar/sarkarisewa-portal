import type { DocGuide } from "../doc/types";

// Sources (checked 19 Oct 2026; vyapamcg.cgstate.gov.in not opened from the
// sandbox, so coverage of the official advertisement (exam code LSL26) used):
// - careerpower.in, adda247, pw.live, kollegeapply, sarkarinetwork,
//   allexamreview, freejobalert: 854 posts (E cadre 424 + T cadre 430);
//   online 29 Sep - 26 Oct 2026 (5 PM); correction 27-29 Oct; exam
//   tentatively 29 Nov 2026; PG (2nd class) + B.Ed; CG domicile compulsory;
//   age 21-35 on 1 Jan 2026, relaxations, max 45; Pay Matrix Level-09.
// - Fee: General ₹300 or ₹350 (sources differ), OBC ₹250, SC/ST/PwD ₹200.
// Left vague: subject-wise posts, exact pay figure, general fee.
export const cgVyapamLecturerRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "CG व्याख्याता भर्ती 2026" },
  ],
  docHi: "CG व्याख्याता भर्ती 2026",
  title: "CG व्यापम व्याख्याता भर्ती 2026: 854 पद, आवेदन 26 अक्टूबर तक",
  description: "छत्तीसगढ़ व्याख्याता (Lecturer) भर्ती 2026: E और T संवर्ग के 854 पद। ऑनलाइन आवेदन 26 अक्टूबर 2026 शाम 5 बजे तक, परीक्षा 29 नवंबर (संभावित)।",
  published: "2026-10-19",
  modified: "2026-10-19",
  verified: "19 अक्टूबर 2026",
  h1: "CG व्यापम व्याख्याता भर्ती 2026: 854 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> छत्तीसगढ़ व्यावसायिक परीक्षा मंडल (व्यापम) ने स्कूल शिक्षा विभाग में <strong>व्याख्याता (Lecturer) के 854 पदों</strong> (E संवर्ग 424, T संवर्ग 430) की भर्ती निकाली है। ऑनलाइन आवेदन <strong>26 अक्टूबर 2026 शाम 5 बजे</strong> तक है। केवल छत्तीसगढ़ के मूल निवासी आवेदन कर सकते हैं।",
  facts: [
    ["कुल पद", "854 (E संवर्ग 424, T संवर्ग 430)"],
    ["आवेदन की आखिरी तारीख", "26 अक्टूबर 2026, शाम 5 बजे"],
    ["परीक्षा (संभावित)", "29 नवंबर 2026"],
    ["आवेदन", "<a href=\"https://vyapamcg.cgstate.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">vyapamcg.cgstate.gov.in</a>"],
  ],
  notice: "19 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी व्यापम के विज्ञापन (परीक्षा कोड LSL26) पर आधारित रिपोर्टों से है। फॉर्म भरने से पहले व्यापम की वेबसाइट पर पूरा विज्ञापन पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "29 सितंबर 2026"],
          ["आवेदन की आखिरी तारीख", "26 अक्टूबर 2026 (शाम 5 बजे)"],
          ["फॉर्म में सुधार", "27 से 29 अक्टूबर 2026"],
          ["लिखित परीक्षा", "29 नवंबर 2026 (संभावित), सुबह 10:00 से 12:15"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["संवर्ग", "पद", "वेतन"],
        rows: [
          ["E संवर्ग (व्याख्याता)", "424", "पे मैट्रिक्स लेवल-09"],
          ["T संवर्ग (व्याख्याता)", "430", "पे मैट्रिक्स लेवल-09"],
        ],
      },
      callout: { kind: "info", html: "विषय-वार पद, वर्ग-वार आरक्षण और वेतन की पूरी राशि विज्ञापन में देखें। एक उम्मीदवार केवल एक विषय के लिए आवेदन कर सकता है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> संबंधित विषय में कम से कम द्वितीय श्रेणी में स्नातकोत्तर (PG) और B.Ed। PG का विषय वही होना चाहिए जिसके लिए आवेदन कर रहे हैं।",
        "<strong>निवास:</strong> छत्तीसगढ़ का मूल निवास प्रमाण पत्र ज़रूरी है।",
        "<strong>उम्र:</strong> 1 जनवरी 2026 को 21 से 35 साल।",
        "<strong>छूट:</strong> छत्तीसगढ़ के SC/ST/OBC (नॉन-क्रीमी लेयर) को 5 साल और महिलाओं को 10 साल तक; सभी छूट मिलाकर अधिकतम उम्र 45 साल।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["सामान्य", "₹300 या ₹350 (रिपोर्टों में अंतर; विज्ञापन में देखें)"],
          ["OBC (छत्तीसगढ़)", "₹250"],
          ["SC/ST/दिव्यांग (छत्तीसगढ़)", "₹200"],
        ],
      },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा:</strong> व्यापम द्वारा, संभागीय मुख्यालयों पर।",
        "<strong>मेरिट सूची:</strong> परीक्षा के अंकों से।",
        "<strong>दस्तावेज़ जांच</strong> और नियुक्ति स्कूल शिक्षा विभाग द्वारा।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://vyapamcg.cgstate.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">vyapamcg.cgstate.gov.in</a> खोलें और व्याख्याता भर्ती (LSL26) का विज्ञापन पढ़ें।",
        "\"Online Application\" से अपना विषय और संवर्ग चुनकर फॉर्म भरें।",
        "मूल निवास, जाति और शिक्षा की जानकारी सही भरें; फोटो और हस्ताक्षर अपलोड करें (साइज़ के लिए <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a>)।",
        "फीस ऑनलाइन भरें और फॉर्म का प्रिंट रखें।",
        "गलती हो तो 27 से 29 अक्टूबर के बीच सुधार करें।",
      ],
      callout: { kind: "warn", html: "आखिरी तारीख को शाम 5 बजे के बाद फॉर्म नहीं भरा जा सकेगा। पहले ही आवेदन कर दें।" },
    },
  ],
  official: [
    { href: "https://vyapamcg.cgstate.gov.in/", title: "छत्तीसगढ़ व्यापम", note: "व्याख्याता (LSL26) विज्ञापन और आवेदन" },
  ],
  faq: [
    { q: "CG व्याख्याता भर्ती 2026 का फॉर्म कब तक भरें?", a: "26 अक्टूबर 2026 शाम 5 बजे तक। सुधार 27 से 29 अक्टूबर तक होगा।" },
    { q: "कितने पद हैं?", a: "कुल 854: E संवर्ग में 424 और T संवर्ग में 430।" },
    { q: "क्या दूसरे राज्य के लोग आवेदन कर सकते हैं?", a: "नहीं। रिपोर्टों के अनुसार छत्तीसगढ़ का मूल निवास प्रमाण पत्र ज़रूरी है।" },
    { q: "क्या B.Ed ज़रूरी है?", a: "हां। संबंधित विषय में द्वितीय श्रेणी PG के साथ B.Ed चाहिए।" },
    { q: "परीक्षा कब होगी?", a: "29 नवंबर 2026 को प्रस्तावित है। प्रवेश पत्र की सूचना व्यापम वेबसाइट पर आएगी।" },
  ],
  related: [
    { href: "/jobs/bpsc-tre-4-teacher-recruitment-2026.html", emoji: "🏫", title: "BPSC TRE 4.0", text: "बिहार शिक्षक भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://vyapamcg.cgstate.gov.in/", label: "📝 vyapamcg.cgstate.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
