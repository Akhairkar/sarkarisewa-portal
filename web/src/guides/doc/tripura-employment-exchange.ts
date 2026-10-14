import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; employment.tripura.gov.in itself could not be
// opened from our checker, so the points below come from search extracts of
// its published pages):
// - employment.tripura.gov.in/sites/default/files/citizen-charter-1.pdf:
//   registration of job seekers in the NCS portal is a listed service handled
//   by the designated officer within three days; Director is final appellate
//   authority.
// - Directorate document: manual process shifted to online registration via the
//   NCS portal; the 6 employment exchanges (5 district + 1 special) are
//   transformed into Career Centres.
// - employment.tripura.gov.in/services: career counselling, pre-registration
//   guidance, job postings.
// - Ministry of Labour NCS notice (employment.tripura.gov.in/.../NCSSalientFeatures.pdf):
//   NCS registration is Aadhaar based, helpdesk 1800-425-1514.
// Documents, renewal period, fees and any unemployment allowance were not
// verified and are not stated.
export const tripuraEmploymentExchange: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Tripura Employment Exchange 2026: Apply & Status",
  description: "त्रिपुरा रोज़गार कार्यालय (Employment Exchange) 2026: NCS पोर्टल से ऑनलाइन जॉब सीकर पंजीकरण, आधार आधारित रजिस्ट्रेशन, ज़िला रोज़गार कार्यालय और हेल्पलाइन 1514।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "त्रिपुरा रोज़गार कार्यालय पंजीकरण 2026: NCS पोर्टल से ऑनलाइन रजिस्ट्रेशन",
  lead: "त्रिपुरा के रोज़गार निदेशालय के अनुसार राज्य में पुरानी मैनुअल प्रक्रिया की जगह नौकरी चाहने वालों का पंजीकरण अब राष्ट्रीय करियर सेवा (NCS) पोर्टल पर होता है। निदेशालय की सिटिज़न चार्टर में \"NCS पोर्टल पर जॉब सीकर का पंजीकरण\" एक सेवा है, जिसकी समय-सीमा 3 दिन लिखी है। रजिस्ट्रेशन आधार आधारित है।",
  facts: [["पोर्टल", "<a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> (राष्ट्रीय)"], ["निदेशालय", "<a href=\"https://employment.tripura.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.tripura.gov.in</a>"], ["समय-सीमा", "3 दिन (सिटिज़न चार्टर, डेज़िग्नेटेड ऑफिसर)"], ["हेल्पलाइन", "1514 (NCS)"]],
  notice: "<strong>ध्यान दें:</strong> त्रिपुरा निदेशालय के पुराने दस्तावेज़ों के आधार पर यह जानकारी है और निदेशालय की साइट हमारी जांच में खुली नहीं। फीस, नवीनीकरण और कागज़ों की ताज़ा जानकारी के लिए अपने ज़िला रोज़गार कार्यालय से पुष्टि करें।",
  sections: [
    {
      "id": "kya-hai",
      "title": "त्रिपुरा में Employment Exchange क्या करता है",
      "intro": "निदेशालय के प्रकाशित पेजों के अनुसार:",
      "list": [
        "राज्य के 6 रोज़गार कार्यालय (5 ज़िला + 1 विशेष) <strong>Career Centre</strong> के रूप में बदले गए हैं।",
        "<strong>करियर काउंसलिंग और पंजीकरण से पहले मार्गदर्शन</strong> मिलता है।",
        "सरकारी वेबसाइट पर वैकेंसी की सूची आम तौर पर हर सप्ताह के पहले या दूसरे दिन डाली जाती है (निदेशालय के सर्विस पेज के अनुसार)।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "NCS पोर्टल पर पंजीकरण कैसे करें",
      "steps": [
        "<a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a> खोलें और Job Seeker के रूप में रजिस्टर करें। NCS का रजिस्ट्रेशन आधार आधारित है, इसलिए आधार और उससे जुड़ा मोबाइल नंबर पास रखें।",
        "प्रोफाइल में पढ़ाई, अनुभव और पसंद की नौकरी की जानकारी भरें।",
        "मदद के लिए NCS हेल्पलाइन <strong>1514</strong> (या 1800-425-1514) पर बात करें।",
        "पास के ज़िला रोज़गार कार्यालय (Career Centre) जाकर भी पंजीकरण और मार्गदर्शन ले सकते हैं।"
      ],
      "callout": {
        "kind": "info",
        "html": "NCS सेवाएं ऑनलाइन, Career Centre, CSC और मोबाइल से ली जा सकती हैं (श्रम मंत्रालय की सूचना के अनुसार)। पंजीकरण की फीस का ज़िक्र हमें सरकारी पेजों पर नहीं मिला।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण और कागज़",
      "intro": "पंजीकरण का नवीनीकरण कब और कैसे होता है तथा कौन-से कागज़ चाहिए, यह हमने त्रिपुरा के किसी चालू सरकारी पेज से पक्का नहीं किया, इसलिए नहीं लिख रहे। NCS प्रोफाइल को समय-समय पर अपडेट करते रहें और अपने ज़िला रोज़गार कार्यालय से ताज़ा नियम पूछें।"
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "त्रिपुरा के रोज़गार निदेशालय के पेजों पर बेरोज़गारी भत्ता योजना की जानकारी हमें नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। किसी से \"भत्ता दिलाने\" के नाम पर पैसे न दें; योजना की पुष्टि विभाग से करें।"
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  official: [
    {
      "href": "https://employment.tripura.gov.in/",
      "title": "रोज़गार निदेशालय, त्रिपुरा"
    },
    {
      "href": "https://employment.tripura.gov.in/services",
      "title": "निदेशालय की सेवाएं"
    },
    {
      "href": "https://employment.tripura.gov.in/sites/default/files/citizen-charter-1.pdf",
      "title": "सिटिज़न चार्टर (रोज़गार निदेशालय, त्रिपुरा)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  faq: [
    {
      "q": "त्रिपुरा में रोज़गार कार्यालय में ऑनलाइन नाम कैसे लिखवाएं?",
      "a": "निदेशालय के अनुसार पंजीकरण NCS पोर्टल (ncs.gov.in) पर होता है, जो आधार आधारित है। मदद के लिए अपने ज़िला रोज़गार कार्यालय या हेल्पलाइन 1514 से संपर्क करें।"
    },
    {
      "q": "पंजीकरण में कितना समय लगता है?",
      "a": "निदेशालय की सिटिज़न चार्टर में NCS पोर्टल पर जॉब सीकर पंजीकरण की समय-सीमा 3 दिन लिखी है।"
    },
    {
      "q": "क्या रोज़गार कार्यालय अब भी हैं?",
      "a": "हां। निदेशालय के अनुसार राज्य के 6 रोज़गार कार्यालय Career Centre के रूप में चल रहे हैं।"
    },
    {
      "q": "नवीनीकरण कब करना होता है?",
      "a": "हमें त्रिपुरा के किसी चालू सरकारी पेज पर इसकी पक्की अवधि नहीं मिली। अपने ज़िला रोज़गार कार्यालय से पूछें।"
    },
    {
      "q": "क्या त्रिपुरा में बेरोज़गारी भत्ता मिलता है?",
      "a": "हमें निदेशालय के पेजों पर ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है।"
    }
  ],
  related: [
    {
      "href": "/jobs/index.html",
      "emoji": "🎯",
      "title": "नई सरकारी नौकरियां",
      "text": "भर्ती, योग्यता और आखिरी तारीख"
    },
    {
      "href": "/exams/index.html",
      "emoji": "📅",
      "title": "Exam Calendar",
      "text": "SSC, Railway, Bank की तारीखें"
    },
    {
      "href": "/states/tripura-caste-certificate.html",
      "emoji": "📜",
      "title": "त्रिपुरा जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/tripura-domicile-certificate.html",
      "emoji": "🏠",
      "title": "त्रिपुरा निवास प्रमाण पत्र",
      "text": "डोमिसाइल सर्टिफिकेट"
    },
    {
      "href": "/tools/age-calculator.html",
      "emoji": "⏳",
      "title": "Exam Age Calculator",
      "text": "कट-ऑफ तारीख पर सही उम्र"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Signature Resizer",
      "text": "फॉर्म के साइज़ में, फ्री"
    }
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    {
      "href": "https://www.ncs.gov.in/",
      "label": "📝 NCS पर रजिस्टर करें"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ],
};
