import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - ec.sikkim.gov.in ("Issue of Employment Card", Govt of Sikkim, IT Dept):
//   register/login with Sikkim GO (sso.sikkim.gov.in), fill form and upload
//   documents, track status, SMS/email notification.
// - soreng.nic.in/service/employment-card/ (District Administration, Soreng):
//   describes the card as proof of registration with the employment office and
//   links ec.sikkim.gov.in.
// - negd.gov.in/isl/Directory/statedata/126 (NeGD profile): service offered by
//   the District Administrative Centre for new and renewed cards via Sikkim GO;
//   issuing office verifies the application.
// - ncs.gov.in (toll-free helpline 1514).
// Document list, validity, renewal period and fees were not found on official
// pages, so they are not stated. No unemployment allowance was found.
export const sikkimEmploymentExchange: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Sikkim Employment Exchange 2026: Apply & Status",
  description: "सिक्किम Employment Card 2026: Sikkim GO (SSO) खाते से ec.sikkim.gov.in पर नया और नवीनीकरण आवेदन, ज़िला प्रशासनिक केंद्र से सत्यापन और स्थिति ट्रैक करने का तरीका।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "सिक्किम रोज़गार कार्यालय पंजीकरण 2026: Employment Card ऑनलाइन आवेदन और नवीनीकरण",
  lead: "सिक्किम में Employment Card की सेवा ज़िला प्रशासनिक केंद्र (District Administrative Centre) देता है। नया कार्ड और नवीनीकरण दोनों के लिए आवेदन Sikkim GO (sso.sikkim.gov.in) खाते से ec.sikkim.gov.in पर होता है। जारी करने वाला कार्यालय आवेदन की जांच करता है और स्थिति आप ऑनलाइन या SMS/ईमेल से देख सकते हैं।",
  facts: [["पोर्टल", "<a href=\"https://ec.sikkim.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ec.sikkim.gov.in</a> (Sikkim GO लॉगिन)"], ["सेवा", "नया Employment Card और नवीनीकरण"], ["कौन देता है", "ज़िला प्रशासनिक केंद्र (District Administrative Centre)"], ["बेरोज़गारी भत्ता", "सरकारी पेजों पर कोई योजना नहीं मिली"]],
  notice: "<strong>ध्यान दें:</strong> ऑनलाइन आवेदन के बाद जारी करने वाला कार्यालय आवेदन की जांच करता है। ज़रूरत पड़ने पर कार्यालय से संपर्क के लिए मोबाइल नंबर चालू रखें।",
  sections: [
    {
      "id": "kya-hai",
      "title": "Employment Card क्या है",
      "intro": "ज़िला सरकारी पेज के अनुसार Employment Card रोज़गार चाहने वाले का <strong>रोज़गार कार्यालय में पंजीकरण का प्रमाण</strong> है। इसका उपयोग नौकरी में मदद, करियर मार्गदर्शन और रोज़गार से जुड़े लाभों के लिए होता है।",
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन आवेदन कैसे करें",
      "steps": [
        "अगर Sikkim GO खाता नहीं है तो <a href=\"https://sso.sikkim.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sso.sikkim.gov.in</a> पर रजिस्टर करके खाता बनाएं।",
        "सिक्किम सरकार के Employment Card पोर्टल <a href=\"https://ec.sikkim.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ec.sikkim.gov.in</a> पर जाएं और अपने Sikkim GO खाते से लॉगिन करें।",
        "आवेदन फॉर्म में अपनी जानकारी भरें और ज़रूरी कागज़ अपलोड करें। (कौन-से कागज़ चाहिए, यह फॉर्म में दिखता है; हमने सरकारी पेज पर पक्की सूची नहीं पाई।)",
        "आवेदन की स्थिति ऑनलाइन देखें। पोर्टल के अनुसार SMS या ईमेल से भी सूचना आती है।"
      ],
      "callout": {
        "kind": "warn",
        "html": "सरकारी पेजों पर इस सेवा की फीस का ज़िक्र हमें नहीं मिला। भुगतान से पहले पोर्टल पर राशि देख लें और किसी एजेंट को \"जल्दी कार्ड\" के नाम पर पैसे न दें."
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण और बदलाव",
      "intro": "NeGD की सेवा प्रोफाइल के अनुसार नया और नवीनीकृत (renewed) Employment Card दोनों के लिए आवेदन Sikkim GO पोर्टल से होता है। नवीनीकरण की अवधि और ज़रूरी कागज़ हमने सरकारी स्रोत से पक्के नहीं किए, इसलिए यहां नहीं लिखे। अपने कार्ड की समाप्ति तारीख देखकर पोर्टल या अपने ज़िले के प्रशासनिक केंद्र से पूछें."
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "सिक्किम के सरकारी पेजों पर बेरोज़गारी भत्ता योजना की जानकारी हमें नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। किसी से \"भत्ता दिलाने\" के नाम पर पैसे न दें; योजना की पुष्टि विभाग से करें।"
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
      "href": "https://ec.sikkim.gov.in/",
      "title": "Issue of Employment Card (सिक्किम सरकार)"
    },
    {
      "href": "https://sso.sikkim.gov.in/",
      "title": "Sikkim GO (सिंगल साइन-ऑन)"
    },
    {
      "href": "https://soreng.nic.in/service/employment-card/",
      "title": "Employment Card सेवा पेज (सोरेंग ज़िला)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  faq: [
    {
      "q": "सिक्किम में Employment Card ऑनलाइन कैसे बनवाएं?",
      "a": "Sikkim GO (sso.sikkim.gov.in) पर खाता बनाएं, फिर ec.sikkim.gov.in पर लॉगिन करके फॉर्म भरें और कागज़ अपलोड करें। जारी करने वाला कार्यालय आवेदन की जांच करता है।"
    },
    {
      "q": "आवेदन की स्थिति कैसे देखें?",
      "a": "पोर्टल पर लॉगिन करके स्थिति देख सकते हैं। पोर्टल के अनुसार SMS या ईमेल से भी सूचना भेजी जाती है।"
    },
    {
      "q": "कार्ड कौन-सा कार्यालय देता है?",
      "a": "NeGD प्रोफाइल के अनुसार यह सेवा ज़िला प्रशासनिक केंद्र (District Administrative Centre) की है।"
    },
    {
      "q": "क्या नवीनीकरण भी ऑनलाइन होता है?",
      "a": "NeGD की प्रोफाइल के अनुसार नया और नवीनीकृत कार्ड दोनों Sikkim GO पोर्टल से अप्लाई किए जा सकते हैं।"
    },
    {
      "q": "क्या सिक्किम में बेरोज़गारी भत्ता मिलता है?",
      "a": "हमें सरकारी पेजों पर ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है। अपने ज़िला प्रशासनिक केंद्र या श्रम विभाग से पूछें।"
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
      "href": "/states/sikkim-caste-certificate.html",
      "emoji": "📜",
      "title": "सिक्किम जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/sikkim-domicile-certificate.html",
      "emoji": "🏠",
      "title": "सिक्किम निवास प्रमाण पत्र",
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
      "href": "https://ec.sikkim.gov.in/",
      "label": "📝 Employment Card के लिए आवेदन"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ],
};
