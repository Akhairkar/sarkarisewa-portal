import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Overlaps
// with the DigiLocker hub /service/digilocker.html and /digilocker/*.html, so
// this post is a first-time-user explainer: Issued vs Uploaded documents, what
// is legally accepted, and common problems; it links to the hub and per-document
// guides.
// Facts reused from web/src/guides/digilocker/common.ts (checked 4 Oct 2026):
// DigiLocker Rules 2016 + Amendment Rules 2017 rule 9A (issued documents at par
// with physical documents); DigiLocker "Ask our Experts" (name must match
// Aadhaar to fetch; only the issuer can correct records; up to five accounts
// per mobile number; app needs Android 10+; support.digilocker.gov.in; passport
// issuer not integrated); PIB Railways 6 Jul 2018 (Issued Aadhaar/DL valid ID on
// trains, Uploaded not valid).
// Storage 1 GB for uploads and 10 MB per file: DigiLocker/govt pages as quoted
// by Wikipedia and Bajaj Finserv (Aug 2025), checked 16 Oct 2026. Accepted
// formats left general (sources differ).

export const digilockerGuideStoreGovernmentDocuments: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "DigiLocker में दस्तावेज़ सुरक्षित रखें" },
  ],
  docHi: "DigiLocker",
  title: "DigiLocker से अपने सरकारी दस्तावेज़ कैसे सुरक्षित रखें",
  description: "DigiLocker हर नागरिक को सत्यापित सरकारी दस्तावेज़ों के लिए मुफ्त डिजिटल लॉकर देता है। Issued और Uploaded दस्तावेज़ का फर्क, सेटअप और आम दिक्कतों के उपाय जानें।",
  published: "2026-02-18",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "DigiLocker में दस्तावेज़ सुरक्षित रखें: Issued और Uploaded का फर्क, सेटअप और दिक्कतें",
  lead: "DigiLocker इलेक्ट्रॉनिक्स और IT मंत्रालय की मुफ्त सेवा है। इसमें दो तरह के दस्तावेज़ होते हैं: <strong>Issued</strong> (जो बोर्ड, परिवहन विभाग, आयकर विभाग जैसे issuer सीधे आपके खाते में भेजते हैं) और <strong>Uploaded</strong> (जो आप खुद स्कैन करके रखते हैं)। कानूनन सिर्फ Issued दस्तावेज़ ही मूल कागज़ के बराबर मान्य हैं; Uploaded दस्तावेज़ बस आपकी डिजिटल कॉपी हैं। इसलिए जो दस्तावेज़ Issued में मिल सकता है, उसे वहीं से निकालें।",
  facts: [
    ["वेबसाइट", "<a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a>"],
    ["फीस", "मुफ्त"],
    ["Issued दस्तावेज़", "मूल कागज़ के बराबर मान्य (DigiLocker नियम 9A)"],
    ["अपलोड की जगह", "1 GB, एक फाइल 10 MB तक"],
  ],
  sections: [
    {
      id: "farq",
      title: "Issued और Uploaded दस्तावेज़ में फर्क",
      table: {
        head: ["बात", "Issued Documents", "Uploaded Documents"],
        rows: [
          ["कहां से आते हैं", "सीधे issuer (बोर्ड, यूनिवर्सिटी, RTO, आयकर विभाग, राज्य सरकार) के रिकॉर्ड से", "आप खुद फोटो/स्कैन अपलोड करते हैं"],
          ["मान्यता", "IT कानून के DigiLocker नियमों के तहत मूल कागज़ के बराबर", "सिर्फ आपकी कॉपी; किसी दफ्तर में मूल की तरह नहीं चलती"],
          ["उदाहरण", "आधार, PAN, ड्राइविंग लाइसेंस, RC, CBSE/राज्य बोर्ड मार्कशीट, कई राज्यों के आय/जाति प्रमाण पत्र", "पुराने कागज़ जिनका issuer जुड़ा नहीं (जैसे पासपोर्ट की कॉपी), बिजली बिल, किराया अनुबंध"],
          ["गलती सुधार", "सिर्फ issuer कर सकता है", "आप फाइल हटाकर नई डाल सकते हैं"],
        ],
      },
      callout: { kind: "info", html: "रेलवे के अनुसार ट्रेन में पहचान के लिए DigiLocker के <strong>Issued Documents</strong> से दिखाया आधार या ड्राइविंग लाइसेंस मान्य है; Uploaded वाली कॉपी नहीं।" },
    },
    {
      id: "setup",
      title: "पहली बार खाता बनाकर दस्तावेज़ जोड़ना",
      steps: [
        "<a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> खोलें या DigiLocker ऐप डाउनलोड करें (Android 10 या नया चाहिए)।",
        "मोबाइल नंबर से साइन-अप करें, 6 अंकों का सुरक्षा PIN बनाएं और आधार से खाता जोड़ें। आधार जुड़ते ही आधार कार्ड Issued Documents में आ जाता है।",
        "<strong>Search Document</strong> में issuer चुनें (जैसे Ministry of Road Transport and Highways), दस्तावेज़ चुनें और नंबर डालें (जैसे DL नंबर)।",
        "मिलने पर दस्तावेज़ Issued Documents में जुड़ जाता है। इसी तरह PAN, मार्कशीट, RC आदि जोड़ें।",
        "जो दस्तावेज़ Issued में नहीं मिलता, उसे <strong>Drive/Uploaded</strong> में साफ स्कैन करके रखें।",
      ],
      callout: { kind: "ok", html: "हर दस्तावेज़ के लिए अलग गाइड: <a href=\"/digilocker/aadhaar.html\">आधार</a>, <a href=\"/digilocker/pan-card.html\">PAN</a>, <a href=\"/digilocker/driving-licence.html\">DL</a>, <a href=\"/digilocker/vehicle-rc.html\">RC</a>, <a href=\"/digilocker/cbse-marksheet.html\">CBSE मार्कशीट</a>, <a href=\"/digilocker/income-certificate.html\">आय प्रमाण पत्र</a>।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उपाय",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["\"No record found\" / दस्तावेज़ नहीं मिला", "दस्तावेज़ पर नाम और आधार का नाम एक जैसा होना चाहिए। नंबर सही डालें। पुराना रिकॉर्ड तभी मिलेगा जब issuer ने उसे DigiLocker पर डाला हो।"],
          ["दस्तावेज़ में गलती है", "DigiLocker खुद नहीं सुधार सकता। issuer (बोर्ड, RTO, आयकर विभाग, तहसील) से सुधार कराएं; फिर दस्तावेज़ दोबारा निकालें।"],
          ["सुरक्षा PIN भूल गए", "लॉगिन स्क्रीन पर Forgot security PIN चुनें और आधार/मोबाइल OTP से नया PIN बनाएं।"],
          ["पासपोर्ट नहीं मिल रहा", "DigiLocker के अनुसार पासपोर्ट विभाग अभी issuer के रूप में जुड़ा नहीं है; कॉपी Uploaded में रख सकते हैं, पर वह मूल की तरह मान्य नहीं।"],
          ["अपलोड नहीं हो रहा", "फाइल 10 MB से छोटी रखें और PDF/JPG जैसे सामान्य फॉर्मेट में अपलोड करें।"],
          ["कोई और समस्या", "support.digilocker.gov.in पर टिकट दर्ज करें।"],
        ],
      },
      callout: { kind: "warn", html: "DigiLocker का PIN और OTP किसी को न बताएं। दस्तावेज़ शेयर करना हो तो ऐप के Share विकल्प से सिर्फ ज़रूरी दस्तावेज़ भेजें।" },
    },
  ],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker (MeitY)", note: "खाता, Issued Documents, अपलोड" },
    { href: "https://support.digilocker.gov.in/", title: "DigiLocker सहायता", note: "टिकट दर्ज करें" },
  ],
  faq: [
    { q: "क्या DigiLocker का दस्तावेज़ मूल कागज़ की जगह चलता है?", a: "Issued Documents (जो issuer ने सीधे भेजे) DigiLocker नियमों के तहत मूल कागज़ के बराबर मान्य हैं। खुद अपलोड की गई कॉपी नहीं।" },
    { q: "DigiLocker में कितनी जगह मिलती है?", a: "अपलोड के लिए 1 GB जगह मिलती है और एक फाइल 10 MB तक हो सकती है। Issued Documents इस जगह में नहीं गिने जाते क्योंकि वे issuer के रिकॉर्ड से दिखते हैं।" },
    { q: "क्या DigiLocker के लिए पैसे लगते हैं?", a: "नहीं, DigiLocker मुफ्त है।" },
    { q: "एक मोबाइल नंबर से कितने खाते बन सकते हैं?", a: "DigiLocker के अनुसार एक मोबाइल नंबर से पांच तक आधार-सत्यापित खाते बन सकते हैं, यानी परिवार के सदस्यों के खाते एक नंबर से बन सकते हैं।" },
  ],
  related: [
    { href: "/service/digilocker.html", emoji: "🗂️", title: "DigiLocker: पूरी गाइड", text: "कौन सा दस्तावेज़ कहां मिलेगा" },
    { href: "/digilocker/aadhaar.html", emoji: "🪪", title: "DigiLocker में आधार", text: "आधार जोड़ें और डाउनलोड करें" },
    { href: "/digilocker/driving-licence.html", emoji: "🚗", title: "DigiLocker में DL", text: "डिजिटल ड्राइविंग लाइसेंस" },
    { href: "/digilocker/cbse-marksheet.html", emoji: "🎓", title: "CBSE मार्कशीट", text: "DigiLocker से डाउनलोड" },
    { href: "/blog/cowin-vaccination-certificate-download-guide.html", emoji: "💉", title: "CoWIN सर्टिफिकेट", text: "DigiLocker से भी मिलता है" },
  ],
  aside: [
    { href: "https://www.digilocker.gov.in/", label: "🗂️ DigiLocker खोलें" },
    { href: "/service/digilocker.html", label: "📚 DigiLocker गाइड" },
  ],
};
