import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - bilaspur.nic.in/service/employment-exchange-registration/ : state
//   employment service covers all 27 districts; registration site
//   exchange.cg.nic.in; Bilaspur District Employment & Self Employment Guidance
//   Centre, Koni, Ratanpur Road (mobile 9540613360).
// - services.india.gov.in listing 'Job seeker registration and renewal,
//   employer registration in Chhattisgarh' (via search results): fully online,
//   free of charge, 33 district employment and self employment guidance centres,
//   1 special employment office for the disabled in Raipur.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on a page we could open): document list, age limit,
// validity/renewal period, any unemployment allowance (none confirmed).
export const chhattisgarhEmploymentExchange: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Chhattisgarh Employment Exchange 2026",
  description: "छत्तीसगढ़ रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: exchange.cg.nic.in पर जॉबसीकर रजिस्ट्रेशन, ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र और मुफ्त सेवा।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "छत्तीसगढ़ रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन और ज़िला मार्गदर्शन केंद्र",
  lead: "छत्तीसगढ़ में रोज़गार कार्यालय का पंजीकरण राज्य के रोज़गार सेवा पोर्टल exchange.cg.nic.in के ज़रिए होता है, और जॉबसीकर का रजिस्ट्रेशन और नवीनीकरण सरकारी सेवा सूची में पूरी तरह ऑनलाइन तथा निःशुल्क बताया गया है। राज्य के सभी 27 ज़िलों में ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र हैं।",
  facts: [
    ["पोर्टल", "<a href=\"http://www.exchange.cg.nic.in\" target=\"_blank\" rel=\"noopener nofollow\">exchange.cg.nic.in</a>"],
    ["फीस", "निःशुल्क सेवा (सरकारी सेवा सूची के अनुसार)"],
    ["कार्यालय", "33 ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र"],
    ["दिव्यांगों के लिए", "रायपुर में 1 विशेष रोज़गार कार्यालय"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "छत्तीसगढ़ में रोज़गार सेवा का ढांचा",
      list: [
        "रोज़गार सेवा राज्य के <strong>सभी 27 ज़िलों</strong> में है।",
        "क्षेत्र में <strong>33 ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र</strong> काम करते हैं।",
        "दिव्यांग उम्मीदवारों के लिए <strong>रायपुर में 1 विशेष रोज़गार कार्यालय</strong> है।",
        "केंद्र सरकार के सेवा पोर्टल पर जॉबसीकर रजिस्ट्रेशन और नवीनीकरण को पूरी तरह ऑनलाइन और निःशुल्क बताया गया है।",
      ],
    },,
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"http://www.exchange.cg.nic.in\" target=\"_blank\" rel=\"noopener nofollow\">exchange.cg.nic.in</a> खोलें (ज़िला सरकारी वेबसाइटों पर यही लिंक रोज़गार पंजीकरण के लिए दिया है)। किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।",
        "<strong>Job Seeker</strong> के रूप में नया रजिस्ट्रेशन चुनें और मांगी गई जानकारी भरें।",
        "नाम, जन्मतिथि और पढ़ाई 10वीं व आगे के प्रमाण पत्रों से मिलाकर सबमिट करें।",
        "रजिस्ट्रेशन पूरा होने पर <strong>पंजीकरण नंबर</strong> संभालकर रखें।",
      ],
      callout: { kind: "ok", html: "ऑनलाइन में दिक्कत हो तो अपने <strong>ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र</strong> जाएं। जैसे बिलासपुर: कोनी, रतनपुर रोड, बिलासपुर 495001 (मोबाइल 9540613360, बिलासपुर ज़िला वेबसाइट के अनुसार)।" },
    },,
    {
      id: "kagaz",
      title: "क्या तैयार रखें",
      list: [
        "चालू मोबाइल नंबर और ईमेल",
        "नाम और जन्मतिथि 10वीं के प्रमाण पत्र के अनुसार",
        "पढ़ाई के सभी प्रमाण पत्र (ITI/डिप्लोमा/डिग्री)",
        "पहचान और निवास का प्रमाण",
        "आरक्षित श्रेणी या दिव्यांगता हो तो प्रमाण पत्र",
      ],
      callout: { kind: "info", html: "कौन-कौन से कागज़ अनिवार्य हैं, उम्र की सीमा और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं मिली। पोर्टल या अपने ज़िला केंद्र से पक्का करें।" },
    },,
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "छत्तीसगढ़ में रोज़गार पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही। ताज़ा स्थिति अपने ज़िला केंद्र से पूछें।",
    },,
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["नवीनीकरण", "पोर्टल पर नवीनीकरण का विकल्प देखें या ज़िला केंद्र से पूछें"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },,
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> CG Vyapam, CGPSC, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },,
  ],
  official: [
    { href: "http://www.exchange.cg.nic.in", title: "रोज़गार सेवा, छत्तीसगढ़ (पंजीकरण पोर्टल)" },
    { href: "https://bilaspur.nic.in/service/employment-exchange-registration/", title: "Employment Exchange Registration (ज़िला बिलासपुर)" },
    { href: "https://services.india.gov.in/service/detail/job-seeker-registration-and-renewal-employer-registration-in-chhattisgarh", title: "जॉबसीकर पंजीकरण और नवीनीकरण: छत्तीसगढ़ (राष्ट्रीय सेवा पोर्टल)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "exchange.cg.nic.in पर Job Seeker के रूप में रजिस्ट्रेशन करें और पंजीकरण नंबर संभाल लें। दिक्कत हो तो अपने ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र जाएं।" },
    { q: "क्या छत्तीसगढ़ में रोज़गार पंजीकरण की फीस है?", a: "सरकारी सेवा सूची में जॉबसीकर पंजीकरण को निःशुल्क बताया गया है।" },
    { q: "छत्तीसगढ़ में कितने रोज़गार केंद्र हैं?", a: "सेवा सूची के अनुसार 33 ज़िला रोज़गार एवं स्वरोज़गार मार्गदर्शन केंद्र हैं, और दिव्यांगों के लिए रायपुर में 1 विशेष रोज़गार कार्यालय है।" },
    { q: "क्या छत्तीसगढ़ में बेरोज़गारी भत्ता मिलता है?", a: "इसकी कोई पुष्ट आधिकारिक जानकारी हमें नहीं मिली, इसलिए राशि नहीं लिखी गई। ज़िला केंद्र से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। CG Vyapam, CGPSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/chhattisgarh-domicile-certificate.html", emoji: "🏠", title: "छत्तीसगढ़ निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/chhattisgarh-caste-certificate.html", emoji: "📜", title: "छत्तीसगढ़ जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "http://www.exchange.cg.nic.in", label: "📝 exchange.cg.nic.in पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
