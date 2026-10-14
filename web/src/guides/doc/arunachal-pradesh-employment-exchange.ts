import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; employment.arunachal.gov.in could not be
// opened from our checker):
// - Arunachal Times launch report (arunachaltimes.in/?p=38366, year not shown in
//   the extract): portal employment.arunachal.gov.in lets students and job
//   seekers register and see jobs online; rolled out first for the capital
//   complex employment exchange, district exchanges to follow in phases.
// - Vikaspedia (MeitY) "register with employment exchange": general list of
//   identity proofs accepted (voter ID, ration card, passport, birth
//   certificate, domicile certificate) and that a registration number is issued.
// - ncs.gov.in (toll-free helpline 1514).
// Documents specific to Arunachal, fees, renewal period and any unemployment
// allowance were not verified and are not stated.
export const arunachalPradeshEmploymentExchange: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Arunachal Pradesh Employment Exchange 2026",
  description: "अरुणाचल प्रदेश रोज़गार कार्यालय (Employment Exchange) 2026: श्रम एवं रोज़गार विभाग का employment.arunachal.gov.in पोर्टल, ज़िला कार्यालय और पंजीकरण से जुड़ी जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश रोज़गार कार्यालय पंजीकरण 2026: राज्य पोर्टल और ज़िला कार्यालय",
  lead: "अरुणाचल प्रदेश के श्रम एवं रोज़गार विभाग का Employment Exchange पोर्टल employment.arunachal.gov.in है, जिस पर छात्र और नौकरी चाहने वाले ऑनलाइन पंजीकरण कर सकते हैं। अरुणाचल टाइम्स की रिपोर्ट के अनुसार यह पहले राजधानी क्षेत्र के एक्सचेंज के लिए शुरू हुआ और ज़िलों में चरणबद्ध तरीके से बढ़ना था; ज़िलों में अभी कितना लागू है, हम पक्का नहीं कर पाए।",
  facts: [["पोर्टल", "<a href=\"https://employment.arunachal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.arunachal.gov.in</a>"], ["विभाग", "श्रम एवं रोज़गार विभाग"], ["ज़िला स्तर", "ज़िले के Labour & Employment Officer का कार्यालय"], ["हेल्पलाइन", "1514 (NCS)"]],
  notice: "<strong>ध्यान दें:</strong> यह पोर्टल हमारी जांच में खुल नहीं पाया और अरुणाचल की सरकारी साइट पर पंजीकरण की कागज़-सूची, फीस और नवीनीकरण अवधि हमें नहीं मिली, इसलिए हमने उन्हें नहीं लिखा। अपने ज़िले के कार्यालय से पुष्टि करें।",
  sections: [
    {
      "id": "kya-hai",
      "title": "राज्य पोर्टल पर क्या मिलता है",
      "intro": "अरुणाचल टाइम्स की रिपोर्ट के अनुसार पोर्टल पर:",
      "list": [
        "छात्र और नौकरी चाहने वाले <strong>ऑनलाइन पंजीकरण</strong> कर सकते हैं।",
        "विभागीय और निजी क्षेत्र की ताज़ा नौकरियां देख सकते हैं।",
        "शुरुआत राजधानी क्षेत्र के Employment Exchange से हुई, ज़िला एक्सचेंज चरणों में जुड़ने थे।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "kagaz",
      "title": "पहचान के कागज़",
      "intro": "सरकारी जानकारी पोर्टल Vikaspedia (MeitY) के सामान्य मार्गदर्शन के अनुसार रोज़गार कार्यालय में पंजीकरण के लिए पहचान के रूप में वोटर कार्ड, राशन कार्ड, पासपोर्ट, जन्म प्रमाण पत्र या निवास प्रमाण पत्र जैसे कागज़ माने जाते हैं और पंजीकरण के बाद रजिस्ट्रेशन नंबर मिलता है। अरुणाचल के लिए पक्की सूची पोर्टल या ज़िला कार्यालय से लें, साथ में पढ़ाई के प्रमाण पत्र तैयार रखें।"
    },
    {
      "id": "online",
      "title": "कैसे पंजीकरण करें",
      "steps": [
        "<a href=\"https://employment.arunachal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.arunachal.gov.in</a> खोलें और जॉब सीकर के रूप में रजिस्टर करें।",
        "प्रोफाइल में पढ़ाई और जानकारी भरें और ज़रूरी कागज़ तैयार रखें।",
        "पोर्टल से पंजीकरण न हो पाए तो अपने ज़िले के श्रम एवं रोज़गार अधिकारी (Labour & Employment Officer) के कार्यालय में जाएं।",
        "रजिस्ट्रेशन नंबर संभालकर रखें।"
      ],
      "callout": {
        "kind": "warn",
        "html": "फीस और नवीनीकरण का नियम हमें सरकारी स्रोत से पक्का नहीं मिला। कोई पैसे मांगे तो पहले ज़िला कार्यालय से पूछें।"
      }
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "अरुणाचल के श्रम एवं रोज़गार विभाग के पेजों पर बेरोज़गारी भत्ता योजना की जानकारी हमें नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। किसी से \"भत्ता दिलाने\" के नाम पर पैसे न दें; योजना की पुष्टि विभाग से करें।"
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
      "href": "https://employment.arunachal.gov.in/",
      "title": "Employment Exchange पोर्टल, अरुणाचल प्रदेश"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  faq: [
    {
      "q": "अरुणाचल प्रदेश में रोज़गार कार्यालय का ऑनलाइन पंजीकरण कहां होता है?",
      "a": "श्रम एवं रोज़गार विभाग के पोर्टल employment.arunachal.gov.in पर। रिपोर्ट के अनुसार यह पहले राजधानी क्षेत्र में शुरू हुआ और ज़िलों में चरणों में बढ़ना था, इसलिए ज़िला कार्यालय से भी पुष्टि कर लें।"
    },
    {
      "q": "ऑफलाइन कहां जाएं?",
      "a": "अपने ज़िले के श्रम एवं रोज़गार अधिकारी (Labour & Employment Officer) के कार्यालय में।"
    },
    {
      "q": "कौन-से कागज़ लगते हैं?",
      "a": "सामान्य मार्गदर्शन के अनुसार पहचान (जैसे वोटर कार्ड, राशन कार्ड, पासपोर्ट, जन्म या निवास प्रमाण पत्र) और पढ़ाई के प्रमाण पत्र। अरुणाचल की पक्की सूची पोर्टल पर देखें।"
    },
    {
      "q": "नवीनीकरण कितने साल में होता है?",
      "a": "हमें इसकी पक्की सरकारी जानकारी नहीं मिली, इसलिए नहीं लिख रहे। ज़िला कार्यालय से पूछें।"
    },
    {
      "q": "क्या अरुणाचल में बेरोज़गारी भत्ता मिलता है?",
      "a": "हमें ऐसी योजना की सरकारी जानकारी नहीं मिली, इसलिए कोई राशि नहीं लिखी है।"
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
      "href": "/states/arunachal-pradesh-caste-certificate.html",
      "emoji": "📜",
      "title": "अरुणाचल प्रदेश जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/arunachal-pradesh-domicile-certificate.html",
      "emoji": "🏠",
      "title": "अरुणाचल प्रदेश निवास प्रमाण पत्र",
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
      "href": "https://employment.arunachal.gov.in/",
      "label": "📝 राज्य पोर्टल"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ],
};
