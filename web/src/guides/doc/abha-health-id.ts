import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; abdm.gov.in not reachable from the sandbox,
// search-result extracts used): NHA contact page on abdm.gov.in (toll free
// 1800-11-4477 / 14477), ABDM grievance FAQ, Vikaspedia "ABHA - Ayushman
// Bharat Health Account" (self-registration on the ABHA portal or the ABDM
// health records app; mobile route details), ABDM "Scan and Share"
// onboarding manual (OPD registration by scanning a facility QR code),
// ABDM developer forum (driving-licence route needs verification at a
// facility). No claim is made about which apps/hospitals are linked, since
// the list changes.
export const abhaHealthId: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "ABHA स्वास्थ्य खाता" },
  ],
  docHi: "ABHA स्वास्थ्य खाता",
  title: "आयुष्मान भारत स्वास्थ्य खाता (ABHA) 2026 | SarkariSewa India",
  description: "एक अद्वितीय 14-अंकीय डिजिटल स्वास्थ्य आईडी जो आपको भारत भर के स्वास्थ्य सेवा प्रदाताओं के साथ अपने डिजिटल स्वास्थ्य रिकॉर्ड बनाने, एक्सेस करने और साझा करने देती है। बनाने का तरीका, सहमति और हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ABHA (आयुष्मान भारत स्वास्थ्य खाता): क्या है, कैसे बनाएं, रिपोर्ट कैसे जोड़ें और शेयर करें",
  lead: "ABHA आयुष्मान भारत डिजिटल मिशन (ABDM) का 14 अंकों का स्वास्थ्य खाता नंबर है। इससे आपकी जांच रिपोर्ट, डॉक्टर के पर्चे और अस्पताल के रिकॉर्ड डिजिटल रूप से आपके खाते से जुड़ सकते हैं और आपकी सहमति से ही किसी डॉक्टर या अस्पताल को दिखते हैं। ABHA मुफ्त है और abha.abdm.gov.in या ABDM से जुड़े स्वास्थ्य रिकॉर्ड ऐप से बनता है।",
  facts: [
    ["योजना", "आयुष्मान भारत डिजिटल मिशन (NHA)"],
    ["पहचान", "14 अंकों का ABHA नंबर + ABHA पता"],
    ["फीस", "मुफ्त, स्वैच्छिक"],
    ["हेल्पलाइन", "1800-11-4477 / 14477"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "ABHA खाता क्या करता है",
      list: [
        "<strong>एक नंबर, सब रिकॉर्ड:</strong> अलग-अलग अस्पताल और लैब की रिपोर्ट आपके ABHA से जुड़ सकती हैं (अगर वह संस्था ABDM से जुड़ी है)।",
        "<strong>आपकी सहमति ज़रूरी:</strong> कोई डॉक्टर रिकॉर्ड देखना चाहे तो आपके ऐप पर सहमति (consent) का अनुरोध आता है; आप मना कर सकते हैं या समय सीमा तय कर सकते हैं।",
        "<strong>Scan and Share:</strong> ABDM से जुड़े अस्पतालों में OPD काउंटर का QR कोड स्कैन करके पर्ची के लिए जानकारी भेज सकते हैं।",
        "<strong>कागज़ खोने का डर कम:</strong> पुरानी रिपोर्ट फोन में सुरक्षित रहती हैं।",
      ],
    },
    {
      id: "banayen",
      title: "ABHA कैसे बनाएं",
      steps: [
        '<a href="https://abha.abdm.gov.in/" target="_blank" rel="noopener nofollow">abha.abdm.gov.in</a> पर <strong>Create ABHA Number</strong> चुनें, या ABDM से जुड़ा कोई स्वास्थ्य रिकॉर्ड (PHR) ऐप खोलें।',
        "<strong>आधार से:</strong> आधार नंबर डालें और आधार से जुड़े मोबाइल पर आया OTP भरें। यह सबसे आसान और सत्यापित तरीका है।",
        "<strong>ड्राइविंग लाइसेंस से:</strong> आवेदन शुरू होता है, पर ABHA नंबर के लिए ABDM से जुड़े स्वास्थ्य केंद्र पर पहचान की पुष्टि करवानी होती है।",
        "अपना ABHA पता (जैसे naam@abdm) चुनें और ABHA कार्ड डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "कार्ड बनाने और डाउनलोड करने की पूरी जानकारी हमारी <a href=\"/service/abha-health-card.html\">ABHA हेल्थ कार्ड गाइड</a> में है।" },
    },
    {
      id: "record",
      title: "रिपोर्ट कैसे जोड़ें और शेयर करें",
      steps: [
        "ABDM से जुड़े किसी स्वास्थ्य रिकॉर्ड ऐप में अपने ABHA पते से लॉग-इन करें।",
        "अस्पताल/लैब में रजिस्ट्रेशन के समय अपना ABHA नंबर या पता बताएं, ताकि उनकी रिपोर्ट आपके खाते से जुड़ सके।",
        "ऐप में अस्पताल को <strong>link</strong> करने का अनुरोध आए तो देखें और मंज़ूर करें।",
        "डॉक्टर रिकॉर्ड मांगे तो ऐप में सहमति अनुरोध देखें; कौन सी रिपोर्ट और कितने दिन के लिए दिखानी है, यह आप तय करें।",
      ],
      callout: { kind: "info", html: "हर अस्पताल ABDM से नहीं जुड़ा है। जो नहीं जुड़ा, उसकी रिपोर्ट अपने आप ABHA में नहीं आएगी।" },
    },
    {
      id: "suraksha",
      title: "सुरक्षा और गोपनीयता",
      list: [
        "ABHA बनाना स्वैच्छिक है।",
        "OTP और ABHA पासवर्ड किसी को न बताएं।",
        "किसी अस्पताल को दी गई सहमति ऐप में देखी और वापस ली जा सकती है।",
      ],
    },
  ],
  official: [
    { href: "https://abha.abdm.gov.in/", title: "ABHA पोर्टल", note: "ABHA बनाना और लॉग-इन" },
    { href: "https://abdm.gov.in/", title: "आयुष्मान भारत डिजिटल मिशन (ABDM)", note: "हेल्पलाइन 1800-11-4477 / 14477" },
  ],
  faq: [
    { q: "क्या ABHA और आयुष्मान भारत (PM-JAY) एक ही हैं?", a: "नहीं। ABHA स्वास्थ्य रिकॉर्ड रखने और शेयर करने का डिजिटल खाता है। PM-JAY अलग योजना है जिसमें पात्र परिवारों को मुफ्त इलाज मिलता है। एक के बिना दूसरा हो सकता है।" },
    { q: "क्या ABHA बनाने में पैसे लगते हैं?", a: "नहीं, ABHA मुफ्त है।" },
    { q: "मेरी रिपोर्ट कौन देख सकता है?", a: "सिर्फ वही डॉक्टर या अस्पताल जिसे आप सहमति दें, और उतने समय तक जितना आप तय करें।" },
    { q: "आधार के बिना ABHA बन सकता है?", a: "हां, ड्राइविंग लाइसेंस से आवेदन कर सकते हैं, पर पहचान की पुष्टि ABDM से जुड़े स्वास्थ्य केंद्र पर करवानी होती है।" },
    { q: "ABHA की शिकायत कहां करें?", a: "टोल फ्री 1800-11-4477 या 14477 पर।" },
  ],
  related: [
    { href: "/service/abha-health-card.html", emoji: "🪪", title: "ABHA हेल्थ कार्ड", text: "आधार से बनाएं, कार्ड डाउनलोड" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत (PM-JAY)", text: "मुफ्त इलाज की योजना" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों का कार्ड" },
    { href: "/service/organ-donation-registration.html", emoji: "❤️", title: "अंगदान पंजीकरण", text: "ऑनलाइन प्रतिज्ञा" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://abha.abdm.gov.in/", label: "🏥 ABHA पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
