import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; incometax.gov.in not reachable from the
// sandbox, search-result extracts used): incometaxindia.gov.in pages "Annual
// Information Statement (AIS)" and "Steps to access AIS information offline"
// (login at incometax.gov.in -> Services -> Annual Information Statement ->
// compliance portal; choose financial year; AIS and TIS tiles; TIS =
// Taxpayer Information Summary; AIS download as PDF/JSON/CSV, TIS as PDF; PDF
// password = PAN in lower case + date of birth DDMMYYYY, example
// aaaaa1234a21011991; feedback on wrong/duplicate/other person's
// information; offline AIS Utility from the Resources tab with the JSON
// file). No deadline or penalty numbers are stated.
export const aisAnnualInformationStatement: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "AIS / TIS" },
  ],
  docHi: "AIS / TIS",
  title: "वार्षिक सूचना विवरण (AIS / TIS Income Tax) 2026",
  description: "आयकर पोर्टल से अपने सभी बैंक ब्याज, शेयर, म्यूचुअल फंड व टीडीएस लेनदेन का विवरण (AIS/TIS) डाउनलोड करें। PDF पासवर्ड, गलत जानकारी पर फीडबैक और ITR में उपयोग।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "AIS और TIS (वार्षिक सूचना विवरण): कैसे देखें, डाउनलोड करें, पासवर्ड और गलत एंट्री पर फीडबैक",
  lead: "वार्षिक सूचना विवरण (AIS) में आयकर विभाग के पास आई आपकी साल भर की वित्तीय जानकारी होती है: बैंक ब्याज, डिविडेंड, शेयर/म्यूचुअल फंड की खरीद-बिक्री, TDS/TCS, किराया, बड़ी नकद जमा आदि। TIS (Taxpayer Information Summary) इसी का छोटा सारांश है। दोनों incometax.gov.in पर लॉग-इन करके Services > Annual Information Statement (AIS) से मुफ्त देखे और डाउनलोड किए जा सकते हैं; कोई एंट्री गलत हो तो वहीं फीडबैक दें।",
  facts: [
    ["कहां", "incometax.gov.in > Services > AIS"],
    ["फॉर्मेट", "AIS: PDF/JSON/CSV, TIS: PDF"],
    ["PDF पासवर्ड", "PAN (छोटे अक्षर) + जन्मतिथि DDMMYYYY"],
    ["फीस", "मुफ्त"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "AIS और TIS में क्या होता है",
      table: {
        head: ["", "AIS", "TIS"],
        rows: [
          ["क्या है", "हर लेन-देन की पूरी सूची, स्रोत के हिसाब से", "श्रेणी के हिसाब से जोड़ (जैसे कुल ब्याज, कुल वेतन)"],
          ["फीडबैक के बाद", "आपका फीडबैक साथ दिखता है", "फीडबैक के अनुसार बदली हुई राशि भी दिखती है"],
          ["डाउनलोड", "PDF, JSON, CSV", "PDF"],
        ],
      },
      callout: { kind: "info", html: "AIS, फॉर्म 26AS से ज़्यादा जानकारी दिखाता है। ITR भरने से पहले दोनों देखें ताकि कोई आय छूट न जाए।" },
    },
    {
      id: "download",
      title: "AIS कैसे डाउनलोड करें",
      steps: [
        '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a> पर PAN/आधार और पासवर्ड से लॉग-इन करें।',
        "ऊपर <strong>Services</strong> में <strong>Annual Information Statement (AIS)</strong> चुनें और <strong>Proceed</strong> दबाएं; AIS कंप्लायंस पोर्टल खुलेगा।",
        "<strong>AIS</strong> टैब में वित्तीय वर्ष चुनें।",
        "<strong>Taxpayer Information Summary (TIS)</strong> या <strong>Annual Information Statement (AIS)</strong> टाइल पर डाउनलोड आइकन दबाएं।",
        "PDF खोलने का पासवर्ड: PAN छोटे अक्षरों में + जन्मतिथि DDMMYYYY, बिना स्पेस। जैसे PAN AAAAA1234A और जन्म 21-01-1991 हो तो <strong>aaaaa1234a21011991</strong>।",
      ],
    },
    {
      id: "feedback",
      title: "गलत जानकारी हो तो फीडबैक कैसे दें",
      steps: [
        "AIS खोलकर उस श्रेणी (जैसे Interest from deposit) में जाएं जिसकी एंट्री गलत है।",
        "एंट्री के सामने <strong>Optional</strong>/फीडबैक विकल्प चुनें।",
        "सही विकल्प चुनें, जैसे: जानकारी सही है, जानकारी पूरी तरह गलत है, किसी दूसरे व्यक्ति की है, दोहराई गई (duplicate) है, या राशि अलग है।",
        "राशि अलग हो तो सही राशि भरें और जमा करें। फीडबैक बाद में देखा और डाउनलोड किया जा सकता है।",
      ],
      callout: { kind: "warn", html: "फीडबैक देने से AIS की गलत एंट्री अपने आप नहीं हटती; यह जानकारी देने वाले (बैंक आदि) को जांच के लिए भेजी जा सकती है। अपने ITR में सही आय ही दिखाएं और सबूत संभालकर रखें।" },
    },
    {
      id: "offline",
      title: "ऑफलाइन देखना (AIS Utility)",
      list: [
        "AIS कंप्लायंस पोर्टल के <strong>Resources</strong> टैब से AIS Utility डाउनलोड करें।",
        "AIS को JSON फॉर्मेट में डाउनलोड करें और Utility में import करें।",
        "ऑफलाइन फीडबैक भरकर बाद में पोर्टल पर अपलोड किया जा सकता है।",
      ],
    },
    {
      id: "itr",
      title: "ITR भरते समय ध्यान दें",
      list: [
        "बचत खाते और FD का ब्याज अक्सर लोग भूल जाते हैं; AIS में दिखे तो ITR में दिखाएं।",
        "AIS और ITR में बड़ा फर्क हो तो विभाग नोटिस भेज सकता है।",
        "कोई एंट्री आपकी नहीं है (जैसे दूसरे व्यक्ति का लेन-देन) तो फीडबैक में \"relates to other PAN/Year\" जैसा विकल्प चुनें।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "लॉग-इन के बाद Services > AIS" },
    { href: "https://www.incometaxindia.gov.in/", title: "आयकर विभाग", note: "AIS से जुड़े FAQ और निर्देश" },
  ],
  faq: [
    { q: "AIS PDF का पासवर्ड क्या है?", a: "PAN छोटे अक्षरों में और उसके बाद जन्मतिथि DDMMYYYY फॉर्मेट में, बिना स्पेस। जैसे aaaaa1234a21011991। कंपनी/फर्म के लिए स्थापना की तारीख।" },
    { q: "AIS और TIS में क्या फर्क है?", a: "AIS में हर लेन-देन की पूरी जानकारी होती है। TIS उसका श्रेणी-वार सारांश है, जिसमें आपके फीडबैक के बाद की राशि भी दिखती है।" },
    { q: "AIS में गलत एंट्री हो तो क्या करें?", a: "AIS में उस एंट्री पर फीडबैक दें (गलत, दोहराई गई, दूसरे व्यक्ति की, या अलग राशि)। ITR में सही आय दिखाएं और सबूत रखें।" },
    { q: "क्या AIS देखने के लिए फीस लगती है?", a: "नहीं, यह ई-फाइलिंग पोर्टल पर लॉग-इन करके मुफ्त मिलता है।" },
  ],
  related: [
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न कैसे भरें" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "PAN चालू रखें" },
    { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया PAN और सुधार" },
    { href: "/tools/income-tax-calculator.html", emoji: "🧮", title: "इनकम टैक्स कैलकुलेटर", text: "टैक्स का अनुमान" },
    { href: "/service/itr-penalty-calculator.html", emoji: "⏰", title: "ITR लेट फीस कैलकुलेटर", text: "देर से रिटर्न पर फीस" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "📊 ई-फाइलिंग पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
