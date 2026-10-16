import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): EastMojo 17 May 2021 ("24x7 educational
// channel 'Vande Tripura' launched in Tripura"), Careers360 / uLektz news May
// 2021 (education channel for school students, NCERT syllabus; available on
// local cable GTPL, Srishti-Hathway, Jio TV and YouTube; >90% coverage), CIET
// NCERT presentation "Digital Initiatives in Education" (School Education
// Department / SCERT studio, classes I-XII, inaugurated 17 May 2021). The
// channel's 2026 schedule and current platforms were not confirmed.
export const tripuraVandeTripura: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "त्रिपुरा", href: "/states/tripura.html" },
    { label: "वंदे त्रिपुरा" },
  ],
  docHi: "वंदे त्रिपुरा",
  title: "Vande Tripura",
  description: "वंदे त्रिपुरा: त्रिपुरा स्कूल शिक्षा विभाग का 24x7 शैक्षिक टीवी चैनल, कक्षा 1 से 12 तक की पढ़ाई। केबल, Jio TV और YouTube पर कैसे देखें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "वंदे त्रिपुरा (Vande Tripura): स्कूली बच्चों के लिए त्रिपुरा का शैक्षिक टीवी चैनल",
  lead: "वंदे त्रिपुरा त्रिपुरा सरकार के स्कूल शिक्षा विभाग का <strong>24x7 शैक्षिक टीवी चैनल</strong> है, जो 17 मई 2021 को कोविड के समय स्कूल बंद होने पर शुरू हुआ। इसमें कक्षा 1 से 12 तक की कक्षाएं NCERT पाठ्यक्रम के अनुसार दिखाई जाती हैं। यह कोई पैसे वाली योजना नहीं है और इसके लिए आवेदन नहीं करना होता।",
  facts: [
    ["राज्य", "त्रिपुरा"],
    ["विभाग", "स्कूल शिक्षा विभाग / SCERT त्रिपुरा"],
    ["किसके लिए", "कक्षा 1 से 12 के छात्र"],
    ["कहां देखें", "स्थानीय केबल, Jio TV, YouTube (2021 की जानकारी)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "वंदे त्रिपुरा में क्या मिलता है",
      list: [
        "कक्षा 1 से 12 तक के विषयों की टीवी कक्षाएं, NCERT पाठ्यक्रम के अनुसार",
        "प्रवेश और छात्रवृत्ति परीक्षाओं की तैयारी के सत्र",
        "राष्ट्रीय शिक्षा नीति 2020 पर चर्चा जैसे कार्यक्रम",
        "कार्यक्रम SCERT के स्टूडियो से बनते हैं; YouTube पर भी दोबारा देखे जा सकते हैं",
      ],
    },
    {
      id: "kaise-dekhen",
      title: "कैसे देखें",
      steps: [
        "<strong>केबल टीवी:</strong> शुरुआत में चैनल GTPL और Srishti-Hathway जैसे स्थानीय केबल पर दिया गया था; अपने केबल ऑपरेटर से चैनल नंबर पूछें।",
        "<strong>Jio TV:</strong> Jio TV ऐप में \"Vande Tripura\" खोजें।",
        "<strong>YouTube:</strong> YouTube पर \"Vande Tripura\" खोजें; सिर्फ आधिकारिक चैनल ही देखें।",
        "<strong>समय-सारिणी:</strong> किस कक्षा का पाठ कब आएगा, यह स्कूल या शिक्षक से पूछें।",
      ],
      callout: { kind: "info", html: "चैनल नंबर और प्लेटफॉर्म 2021 की खबरों के अनुसार हैं। 2026 में ये बदले हो सकते हैं।" },
    },
    {
      id: "dusri",
      title: "छात्रों के लिए दूसरी मदद",
      list: [
        '<strong>छात्रवृत्ति:</strong> केंद्र और राज्य की छात्रवृत्तियों के लिए <a href="/service/national-scholarship-portal.html">राष्ट्रीय छात्रवृत्ति पोर्टल</a> देखें।',
        "<strong>DIKSHA:</strong> NCERT/राज्य की ई-पाठ्य सामग्री के लिए केंद्र का DIKSHA प्लेटफॉर्म।",
      ],
    },
  ],
  official: [
    { href: "https://tripura.gov.in/", title: "त्रिपुरा सरकार का पोर्टल" },
    { href: "https://diksha.gov.in/", title: "DIKSHA: स्कूल की डिजिटल पाठ्य सामग्री" },
  ],
  faq: [
    { q: "वंदे त्रिपुरा क्या है?", a: "त्रिपुरा स्कूल शिक्षा विभाग का 24x7 शैक्षिक टीवी चैनल, जो 17 मई 2021 को शुरू हुआ और कक्षा 1 से 12 तक की पढ़ाई दिखाता है।" },
    { q: "क्या इसमें पैसे या टैबलेट मिलते हैं?", a: "नहीं। यह एक शैक्षिक चैनल है, कोई नकद या सामान वाली योजना नहीं।" },
    { q: "क्या इसके लिए रजिस्ट्रेशन करना होता है?", a: "नहीं। केबल, Jio TV या YouTube पर सीधे देखा जा सकता है।" },
    { q: "किस पाठ्यक्रम के अनुसार पढ़ाई होती है?", a: "शुरुआत की खबरों के अनुसार NCERT पाठ्यक्रम के अनुसार, जो त्रिपुरा बोर्ड के स्कूलों में भी लागू है।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति आवेदन" },
    { href: "/service/tripura-yuba-yogayog-yojana.html", emoji: "📱", title: "युवा योगायोग योजना", text: "त्रिपुरा के छात्रों के लिए" },
    { href: "/service/tripura-domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र (त्रिपुरा)", text: "दाखिले और छात्रवृत्ति में" },
    { href: "/states/tripura.html", emoji: "🗺️", title: "त्रिपुरा की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "/students/", label: "🎓 छात्रों के लिए गाइड" },
    { href: "/states/tripura.html", label: "🗺️ त्रिपुरा की सेवाएं" },
  ],
};
