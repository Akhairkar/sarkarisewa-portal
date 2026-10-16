import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Overlaps
// with /service/cowin-vaccination-certificate.html, so this post focuses on
// "certificate won't download - which route to use in which situation" and
// links to that guide for corrections/travel.
// Facts reused from web/src/guides/doc/cowin-vaccination-certificate.ts
// (checked 15 Oct 2026 against cowin.gov.in and its FAQ: download from Co-WIN,
// Aarogya Setu or DigiLocker using the registration mobile; DigiLocker path
// "Ministry of Health and Family Welfare > Health > COVID Vaccine certificate"
// with Beneficiary Reference ID; "Raise an Issue" corrections;
// verify.cowin.gov.in; helpline 1075; only Aarogya Setu and UMANG authorised
// apps besides Co-WIN). 13-digit beneficiary reference ID sent by SMS and
// printed on the certificate: explainers (BankBazaar, Bajaj Finserv), checked
// 16 Oct 2026.

export const cowinVaccinationCertificateDownloadGuide: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "CoWIN सर्टिफिकेट डाउनलोड" },
  ],
  docHi: "CoWIN सर्टिफिकेट",
  title: "अपना CoWIN वैक्सीनेशन सर्टिफिकेट कैसे डाउनलोड करें",
  description: "यात्रा, नौकरी या रिकॉर्ड के लिए कोविड वैक्सीनेशन सर्टिफिकेट चाहिए? बिना कोई ऐप इंस्टॉल किए इसे पाने का सबसे तेज़ आधिकारिक तरीका, और नंबर बदल गया हो तो क्या करें।",
  published: "2026-06-22",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "CoWIN वैक्सीनेशन सर्टिफिकेट डाउनलोड: कौन सा तरीका कब काम आएगा",
  lead: "कोविड टीके का सर्टिफिकेट सबसे जल्दी फोन के ब्राउज़र में cowin.gov.in खोलकर मिलता है: वही मोबाइल नंबर डालें जो टीका लगवाते समय दिया था, OTP भरें और Download दबाएं। कोई ऐप ज़रूरी नहीं, और यह मुफ्त है। वह नंबर अब आपके पास नहीं है तो DigiLocker (आधार से लॉगिन) में 13 अंकों की Beneficiary Reference ID डालकर सर्टिफिकेट निकाल सकते हैं।",
  facts: [
    ["सबसे तेज़ तरीका", "<a href=\"https://www.cowin.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cowin.gov.in</a> + रजिस्टर्ड मोबाइल OTP"],
    ["नंबर बदल गया हो", "DigiLocker + Beneficiary Reference ID"],
    ["शुल्क", "मुफ्त"],
    ["हेल्पलाइन", "1075"],
  ],
  sections: [
    {
      id: "kaun-sa",
      title: "आपकी स्थिति के हिसाब से तरीका",
      table: {
        head: ["आपकी स्थिति", "क्या करें"],
        rows: [
          ["टीके वाला मोबाइल नंबर पास है", "cowin.gov.in खोलें, Register / Sign In में नंबर और OTP डालें, सदस्य के आगे Certificate पर क्लिक करके Download करें।"],
          ["नंबर बंद/बदल गया, पर Reference ID पता है", "DigiLocker में आधार से लॉगिन करें, Ministry of Health and Family Welfare → COVID Vaccine Certificate चुनें और Beneficiary Reference ID डालें।"],
          ["Reference ID भी नहीं पता", "टीके के समय आए SMS में या पुराने सर्टिफिकेट के प्रिंट पर 13 अंकों की Beneficiary Reference ID देखें। न मिले तो 1075 पर पूछें।"],
          ["फोन में Aarogya Setu पहले से है", "उसी रजिस्टर्ड नंबर से ऐप में सर्टिफिकेट डाउनलोड कर सकते हैं।"],
          ["परिवार के कई लोगों का चाहिए", "एक ही नंबर से जुड़े सभी सदस्यों के सर्टिफिकेट CoWIN खाते में एक साथ दिखते हैं।"],
        ],
      },
    },
    {
      id: "browser",
      title: "बिना ऐप, ब्राउज़र से डाउनलोड (स्टेप)",
      steps: [
        "फोन के Chrome या किसी भी ब्राउज़र में <a href=\"https://www.cowin.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cowin.gov.in</a> खोलें।",
        "<strong>Register / Sign In</strong> पर टैप करें, टीके वाला मोबाइल नंबर डालें और OTP भरें।",
        "सदस्यों की सूची में जिसका सर्टिफिकेट चाहिए उसके आगे <strong>Certificate</strong> चुनें।",
        "<strong>Download</strong> दबाएं। PDF फोन की Downloads फोल्डर में सेव होगी; चाहें तो DigiLocker में भी रख लें।",
      ],
    },
    {
      id: "dikkat",
      title: "डाउनलोड नहीं हो रहा: आम दिक्कतें",
      list: [
        "<strong>OTP नहीं आ रहा:</strong> नंबर सही है या नहीं जांचें; कई बार परिवार के किसी दूसरे सदस्य के नंबर से रजिस्ट्रेशन हुआ होता है। वह नंबर आज़माएं।",
        "<strong>सिर्फ पहली डोज़ दिख रही:</strong> दूसरी डोज़ अलग नंबर/रजिस्ट्रेशन पर दर्ज हो गई हो सकती है। CoWIN के <strong>Raise an Issue</strong> में दो सर्टिफिकेट को एक (merge) करने का अनुरोध करें।",
        "<strong>नाम/जन्म वर्ष गलत:</strong> Raise an Issue में सुधार का विकल्प है। पूरी विधि <a href=\"/service/cowin-vaccination-certificate.html\">CoWIN सर्टिफिकेट गाइड</a> में।",
        "<strong>विदेश यात्रा के लिए:</strong> पासपोर्ट विवरण जोड़ें और International Travel Certificate लें; तरीका उसी गाइड में है।",
      ],
      callout: { kind: "warn", html: "CoWIN के अलावा सिर्फ Aarogya Setu और UMANG अधिकृत ऐप हैं। \"सर्टिफिकेट डाउनलोड\" के नाम पर किसी अनजान लिंक या ऐप में OTP न डालें।" },
    },
    {
      id: "verify",
      title: "सर्टिफिकेट मांगने वाली संस्था के लिए",
      html: "<p>सर्टिफिकेट पर QR कोड होता है। <a href=\"https://verify.cowin.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">verify.cowin.gov.in</a> पर QR स्कैन करके उसकी असलियत जांची जा सकती है।</p>",
    },
  ],
  official: [
    { href: "https://www.cowin.gov.in/", title: "CoWIN पोर्टल (स्वास्थ्य एवं परिवार कल्याण मंत्रालय)" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "Reference ID से सर्टिफिकेट" },
    { href: "https://verify.cowin.gov.in/", title: "CoWIN सर्टिफिकेट सत्यापन" },
  ],
  faq: [
    { q: "क्या CoWIN सर्टिफिकेट के लिए ऐप डाउनलोड करना ज़रूरी है?", a: "नहीं। फोन या कंप्यूटर के ब्राउज़र में cowin.gov.in खोलकर रजिस्टर्ड मोबाइल नंबर और OTP से सर्टिफिकेट डाउनलोड हो जाता है।" },
    { q: "Beneficiary Reference ID कहां मिलेगी?", a: "टीका लगने के समय आए SMS में और सर्टिफिकेट पर 13 अंकों की Beneficiary Reference ID लिखी होती है।" },
    { q: "मोबाइल नंबर बंद हो गया, सर्टिफिकेट कैसे मिलेगा?", a: "DigiLocker में आधार से लॉगिन करके COVID Vaccine Certificate चुनें और Beneficiary Reference ID डालें। न हो तो हेल्पलाइन 1075 पर संपर्क करें।" },
    { q: "क्या सर्टिफिकेट डाउनलोड करने के पैसे लगते हैं?", a: "नहीं, यह मुफ्त है।" },
  ],
  related: [
    { href: "/service/cowin-vaccination-certificate.html", emoji: "💉", title: "CoWIN सर्टिफिकेट: पूरी गाइड", text: "सुधार, पासपोर्ट, ट्रैवल सर्टिफिकेट" },
    { href: "/service/digilocker.html", emoji: "🗂️", title: "DigiLocker", text: "सरकारी दस्तावेज़ फोन में" },
    { href: "/blog/digilocker-guide-store-government-documents.html", emoji: "📂", title: "DigiLocker इस्तेमाल करने का तरीका", text: "दस्तावेज़ जोड़ना और शेयर करना" },
    { href: "/service/abha-health-card.html", emoji: "🏥", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य खाता" },
  ],
  aside: [
    { href: "https://www.cowin.gov.in/", label: "💉 CoWIN खोलें" },
    { href: "https://www.digilocker.gov.in/", label: "🗂️ DigiLocker" },
  ],
};
