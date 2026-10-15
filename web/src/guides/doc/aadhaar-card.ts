import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; uidai.gov.in could not be opened from the
// sandbox, so search-result extracts of UIDAI documents were used): UIDAI
// "Aadhaar Enrolment and Update" fee document (enrolment free; demographic
// update ₹75 when done separately, free with a biometric update; biometric
// update ₹125, free at 5-7 and the 15-17 mandatory update); UIDAI OM dated
// 13.05.2026 "Extn of relaxation in fee myAadhaar upto 14.6.27" (online
// POI/POA document update free on myAadhaar till 14.06.2027; ₹75 at centres);
// UIDAI official-memorandums list + Business Standard 06.01.2026 (PVC card
// fee ₹50 -> ₹75 incl. taxes from 01.01.2026); news reports 2025-26 on the new
// Aadhaar app (mobile/address update with face authentication + OTP). UIDAI
// helpline 1947. Free biometric update at 7-15 was a time-bound relaxation
// (till 30.09.2026) and is not mentioned as current.
export const aadhaarCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "आधार कार्ड" },
  ],
  docHi: "आधार कार्ड",
  title: "आधार कार्ड 2026 | SarkariSewa India",
  description: "UIDAI द्वारा भारत के निवासियों को जारी किया गया 12 अंकों का विशिष्ट पहचान नंबर। नया आधार, अपडेट फीस (₹75/₹125), मुफ्त ऑनलाइन दस्तावेज़ अपडेट, e-Aadhaar और PVC कार्ड की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आधार कार्ड 2026: नया आधार कैसे बनवाएं, अपडेट फीस, e-Aadhaar डाउनलोड और PVC कार्ड",
  lead: "आधार 12 अंकों का पहचान नंबर है, जिसे भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI) जारी करता है। नया आधार बनवाना मुफ्त है और यह सिर्फ आधार केंद्र पर बायोमेट्रिक (फिंगरप्रिंट, आंख, फोटो) देकर बनता है। केंद्र पर नाम/पता जैसे बदलाव की फीस ₹75 और बायोमेट्रिक अपडेट की ₹125 है, जबकि myAadhaar पोर्टल पर पहचान और पते के दस्तावेज़ ऑनलाइन अपडेट करना 14 जून 2027 तक मुफ्त है।",
  facts: [
    ["जारी करने वाला", "UIDAI (भारत सरकार)"],
    ["नया आधार", "मुफ्त, आधार केंद्र पर"],
    ["अपडेट फीस (केंद्र)", "जानकारी ₹75, बायोमेट्रिक ₹125"],
    ["हेल्पलाइन", "1947"],
  ],
  sections: [
    {
      id: "naya-aadhaar",
      title: "नया आधार कैसे बनवाएं",
      steps: [
        "<strong>नज़दीकी आधार केंद्र खोजें:</strong> बैंक, डाकघर, सरकारी दफ्तर या UIDAI के आधार सेवा केंद्र पर नामांकन होता है। UIDAI की वेबसाइट पर केंद्र खोजने और अपॉइंटमेंट लेने का विकल्प है।",
        "<strong>कागज़ साथ ले जाएं:</strong> पहचान (POI) और पते (POA) का मूल प्रमाण। बच्चे के लिए जन्म प्रमाण पत्र और माता-पिता का आधार।",
        "<strong>फॉर्म भरें और बायोमेट्रिक दें:</strong> फिंगरप्रिंट, आंख (आइरिस) और फोटो लिए जाते हैं। 5 साल से छोटे बच्चे का सिर्फ फोटो लिया जाता है।",
        "<strong>पर्ची (Acknowledgement) संभालें:</strong> इस पर नामांकन संख्या (EID) होती है, जिससे स्टेटस देखा जाता है।",
        "<strong>आधार मिलना:</strong> बनने के बाद मोबाइल पर सूचना आती है; e-Aadhaar myAadhaar से डाउनलोड करें और कार्ड डाक से भी आता है।",
      ],
      callout: { kind: "info", html: "नया आधार बनवाने की <strong>कोई फीस नहीं</strong> है। कोई केंद्र नए नामांकन के पैसे मांगे तो 1947 पर शिकायत करें।" },
    },
    {
      id: "fees",
      title: "आधार अपडेट फीस 2026",
      table: {
        head: ["सेवा", "कहां", "फीस"],
        rows: [
          ["नया आधार (नामांकन)", "आधार केंद्र", "मुफ्त"],
          ["नाम, जन्मतिथि, लिंग, पता, मोबाइल, ईमेल बदलना", "आधार केंद्र", "₹75 (बायोमेट्रिक अपडेट के साथ हो तो मुफ्त)"],
          ["बायोमेट्रिक अपडेट (फिंगरप्रिंट, आंख, फोटो)", "आधार केंद्र", "₹125"],
          ["5-7 साल और 15-17 साल पर अनिवार्य बायोमेट्रिक अपडेट", "आधार केंद्र", "मुफ्त"],
          ["पहचान/पते के दस्तावेज़ अपडेट (POI/POA)", "myAadhaar पोर्टल", "14.06.2027 तक मुफ्त (केंद्र पर ₹75)"],
          ["आधार PVC कार्ड मंगवाना", "myAadhaar / ऐप", "₹75 (1 जनवरी 2026 से)"],
        ],
      },
      callout: { kind: "warn", html: "बच्चे का आधार 5 साल और फिर 15 साल की उम्र के बाद बायोमेट्रिक अपडेट न होने पर काम करना बंद कर सकता है। यह अपडेट समय पर करवाएं।" },
    },
    {
      id: "online",
      title: "घर बैठे क्या-क्या हो सकता है",
      list: [
        '<strong>e-Aadhaar डाउनलोड:</strong> <a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener nofollow">myaadhaar.uidai.gov.in</a> पर आधार नंबर/नामांकन संख्या और OTP से। PDF का पासवर्ड है: नाम के पहले 4 अक्षर (अंग्रेज़ी बड़े अक्षरों में) + जन्म का साल, जैसे RAME1985।',
        "<strong>दस्तावेज़ अपडेट:</strong> myAadhaar पर पहचान और पते का प्रमाण अपलोड करें; 14 जून 2027 तक मुफ्त।",
        "<strong>पता बदलना:</strong> myAadhaar पर पते का प्रमाण देकर ऑनलाइन बदल सकते हैं।",
        "<strong>मोबाइल नंबर:</strong> UIDAI के नए Aadhaar ऐप में चेहरे की पहचान (face authentication) और OTP से मोबाइल नंबर बदलने की सुविधा शुरू हुई है; यह न हो पाए तो आधार केंद्र जाएं।",
        "<strong>बायोमेट्रिक लॉक/अनलॉक, वर्चुअल ID और मास्क्ड आधार:</strong> myAadhaar और ऐप से।",
        "<strong>PVC कार्ड:</strong> ATM जैसा प्लास्टिक कार्ड ₹75 में ऑनलाइन मंगवाएं; डाक से घर आता है।",
      ],
      callout: { kind: "info", html: "ऑनलाइन काम के लिए आधार से मोबाइल नंबर जुड़ा होना ज़रूरी है, क्योंकि OTP उसी पर आता है।" },
    },
    {
      id: "kagaz",
      title: "मान्य दस्तावेज़",
      intro: "UIDAI की दस्तावेज़ सूची में ये आम तौर पर मान्य हैं:",
      list: [
        "<strong>पहचान (POI):</strong> पासपोर्ट, PAN कार्ड, वोटर ID, ड्राइविंग लाइसेंस, राशन कार्ड, सरकारी फोटो पहचान पत्र",
        "<strong>पता (POA):</strong> पासपोर्ट, वोटर ID, राशन कार्ड, बैंक पासबुक/स्टेटमेंट, बिजली-पानी-गैस बिल (आम तौर पर 3 महीने से पुराना नहीं)",
        "<strong>जन्मतिथि:</strong> जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट",
        "कोई दस्तावेज़ न हो तो परिवार के मुखिया (Head of Family) के आधार और संबंध के प्रमाण से भी पता दर्ज हो सकता है।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      list: [
        "<strong>जन्मतिथि बदलना:</strong> इसकी सीमा तय है; बार-बार बदलाव के लिए UIDAI क्षेत्रीय कार्यालय से अनुमति लगती है। सही दस्तावेज़ के साथ एक बार में सही करवाएं।",
        "<strong>अपडेट रिजेक्ट:</strong> दस्तावेज़ पर नाम/पता साफ न हो या आवेदन से मेल न खाए तो रिजेक्ट होता है। स्टेटस में कारण देखें और सही कागज़ से दोबारा करें।",
        "<strong>फिंगरप्रिंट नहीं लगते:</strong> बुज़ुर्ग और मज़दूरों में आम है; बायोमेट्रिक अपडेट करवाएं या आंख/चेहरे से प्रमाणीकरण का विकल्प मांगें।",
        "<strong>ठगी से बचें:</strong> आधार OTP किसी को न बताएं। UIDAI कभी फोन पर OTP नहीं मांगता।",
      ],
    },
  ],
  official: [
    { href: "https://uidai.gov.in/", title: "UIDAI आधिकारिक वेबसाइट", note: "हेल्पलाइन 1947" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar पोर्टल", note: "e-Aadhaar, ऑनलाइन अपडेट, PVC कार्ड" },
  ],
  faq: [
    { q: "नया आधार कार्ड बनवाने की फीस कितनी है?", a: "नया आधार (पहला नामांकन) मुफ्त है। यह सिर्फ आधार केंद्र पर बायोमेट्रिक देकर बनता है, ऑनलाइन नहीं।" },
    { q: "आधार में नाम या पता बदलने की फीस कितनी है?", a: "आधार केंद्र पर नाम, पता, जन्मतिथि, मोबाइल जैसी जानकारी बदलने की फीस ₹75 है; बायोमेट्रिक अपडेट ₹125 का है। myAadhaar पर पहचान/पते के दस्तावेज़ ऑनलाइन अपडेट करना 14 जून 2027 तक मुफ्त है।" },
    { q: "e-Aadhaar PDF का पासवर्ड क्या है?", a: "नाम के पहले 4 अक्षर अंग्रेज़ी के बड़े अक्षरों में और जन्म का साल, जैसे नाम RAMESH और जन्म 1985 हो तो RAME1985।" },
    { q: "आधार PVC कार्ड कितने का है?", a: "1 जनवरी 2026 से PVC कार्ड की फीस ₹75 (टैक्स सहित) है। इसे myAadhaar पोर्टल या ऐप से मंगवाया जाता है और यह डाक से आता है।" },
    { q: "बच्चों का बायोमेट्रिक अपडेट कब ज़रूरी है?", a: "5 साल और 15 साल की उम्र के बाद। 5-7 और 15-17 साल की उम्र में यह अपडेट मुफ्त है; उसके बाद ₹125 लगते हैं।" },
    { q: "आधार की शिकायत कहां करें?", a: "UIDAI हेल्पलाइन 1947 पर कॉल करें या uidai.gov.in पर शिकायत दर्ज करें।" },
  ],
  related: [
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार मोबाइल नंबर अपडेट", text: "OTP वाला नंबर जोड़ें या बदलें" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "स्टेटस और ₹1,000 फीस" },
    { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया PAN और सुधार" },
    { href: "/service/digilocker.html", emoji: "📂", title: "DigiLocker", text: "आधार से दस्तावेज़ डिजिटल रखें" },
    { href: "/service/voter-id-card.html", emoji: "🗳️", title: "वोटर ID कार्ड", text: "नया कार्ड और सुधार" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://myaadhaar.uidai.gov.in/", label: "🆔 myAadhaar खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
