import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; uidai.gov.in not reachable from the sandbox,
// search-result extracts used): UIDAI "Aadhaar Enrolment and Update" fee
// document (demographic update incl. mobile number/email ₹75 at a centre;
// free when done with a biometric update); India TV / BankBazaar / Business
// Today (13.07.2026) / DT Next reports: full version of the new "Aadhaar" app
// launched 28.01.2026 with mobile number and address update from home using
// face authentication + OTP, mobile update fee ₹75, older mAadhaar app being
// discontinued (May 2026). UIDAI helpline 1947. Processing time for the
// app route is reported differently by outlets, so no time is stated.
export const aadhaarMobileUpdate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "आधार मोबाइल नंबर अपडेट" },
  ],
  docHi: "आधार मोबाइल नंबर अपडेट",
  title: "आधार मोबाइल नंबर अपडेट 2026",
  description: "आधार से अपना मोबाइल नंबर अपडेट या लिंक करें — OTP-आधारित सेवाओं, e-KYC, और UIDAI अलर्ट पाने के लिए ज़रूरी। नए Aadhaar ऐप और आधार केंद्र का तरीका, ₹75 फीस।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आधार में मोबाइल नंबर कैसे जोड़ें या बदलें: Aadhaar ऐप और आधार केंद्र, फीस ₹75",
  lead: "आधार में मोबाइल नंबर जोड़ने या बदलने की फीस ₹75 है। जनवरी 2026 से UIDAI के नए Aadhaar ऐप में चेहरे की पहचान (face authentication) और नए नंबर पर OTP से यह काम घर बैठे हो सकता है। ऐप से न हो पाए तो नज़दीकी आधार केंद्र पर जाकर फिंगरप्रिंट देकर नंबर बदलवाएं; वहां कोई कागज़ नहीं लगता।",
  facts: [
    ["फीस", "₹75"],
    ["घर बैठे", "नया Aadhaar ऐप (चेहरा + OTP)"],
    ["ऑफलाइन", "आधार केंद्र, बायोमेट्रिक से"],
    ["हेल्पलाइन", "1947"],
  ],
  sections: [
    {
      id: "kyon",
      title: "आधार से मोबाइल जुड़ा होना क्यों ज़रूरी है",
      list: [
        "e-Aadhaar डाउनलोड, ऑनलाइन पता/दस्तावेज़ अपडेट और PVC कार्ड के लिए OTP इसी नंबर पर आता है।",
        "बैंक, सिम, PAN, DigiLocker और कई सरकारी योजनाओं में आधार OTP से e-KYC होती है।",
        "आधार इस्तेमाल होने पर UIDAI की सूचना (SMS) इसी नंबर पर आती है, जिससे गलत इस्तेमाल पता चलता है।",
      ],
    },
    {
      id: "app",
      title: "तरीका 1: नए Aadhaar ऐप से (घर बैठे)",
      steps: [
        "Play Store या App Store से UIDAI का आधिकारिक <strong>\"Aadhaar\"</strong> ऐप डाउनलोड करें। नकली ऐप से बचें; डेवलपर UIDAI होना चाहिए।",
        "आधार नंबर डालकर ऐप में लॉग-इन करें और पहचान की पुष्टि (चेहरे की जांच) पूरी करें।",
        "<strong>Services</strong> में <strong>Mobile Number Update</strong> चुनें और नया मोबाइल नंबर डालें; उस नंबर पर आया OTP भरें।",
        "चेहरा कैमरे के सामने रखकर face authentication करें (जैसे आंख खोलना-बंद करना)।",
        "₹75 ऑनलाइन भुगतान करें और अनुरोध संख्या (URN/SRN) संभाल लें। अपडेट होने में कुछ दिन लग सकते हैं।",
      ],
      callout: { kind: "info", html: "पुराना mAadhaar ऐप बंद किया जा रहा है; नया काम नए \"Aadhaar\" ऐप में करें। चेहरे की जांच बार-बार फेल हो तो आधार केंद्र जाएं।" },
    },
    {
      id: "kendra",
      title: "तरीका 2: आधार केंद्र पर",
      steps: [
        "नज़दीकी आधार केंद्र (बैंक, डाकघर या आधार सेवा केंद्र) जाएं। UIDAI वेबसाइट पर केंद्र खोज और अपॉइंटमेंट की सुविधा है।",
        "अपडेट फॉर्म में आधार नंबर और नया मोबाइल नंबर लिखें। <strong>कोई दस्तावेज़ नहीं</strong> लगता।",
        "ऑपरेटर फिंगरप्रिंट या आंख से आपकी पहचान करेगा।",
        "₹75 फीस दें और पर्ची (URN) लें; इसी से स्टेटस देखें।",
      ],
      callout: { kind: "warn", html: "मोबाइल नंबर किसी एजेंट या दुकान के \"ऑनलाइन फॉर्म\" से नहीं बदलता। ₹75 से ज़्यादा मांगा जाए तो 1947 पर शिकायत करें।" },
    },
    {
      id: "jaanch",
      title: "कैसे देखें कि कौन सा नंबर जुड़ा है",
      list: [
        '<a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener nofollow">myAadhaar</a> या UIDAI वेबसाइट पर "Verify Email/Mobile Number" सेवा से अपना नंबर जांचें।',
        "e-Aadhaar डाउनलोड करते समय OTP जिस नंबर पर जाता है (आखिरी अंक दिखते हैं), वही जुड़ा नंबर है।",
        "बायोमेट्रिक या पता अपडेट के साथ मोबाइल भी बदलवाएं तो जानकारी वाला अपडेट अलग से नहीं लगता।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें",
      list: [
        "<strong>पुराना नंबर बंद है:</strong> कोई बात नहीं; ऐप में चेहरे से या केंद्र पर फिंगरप्रिंट से पहचान होती है, पुराने नंबर का OTP नहीं चाहिए।",
        "<strong>फिंगरप्रिंट नहीं मिलते:</strong> आंख (आइरिस) से पहचान करवाएं, या पहले बायोमेट्रिक अपडेट (₹125) करवाएं; उसके साथ मोबाइल बदलना मुफ्त हो जाता है।",
        "<strong>अपडेट अटका है:</strong> URN से स्टेटस देखें; ज़्यादा देर हो तो 1947 पर कॉल करें।",
        "<strong>ठगी:</strong> आधार OTP किसी को न बताएं, चाहे वह खुद को बैंक या UIDAI वाला बताए।",
      ],
    },
  ],
  official: [
    { href: "https://uidai.gov.in/", title: "UIDAI आधिकारिक वेबसाइट", note: "हेल्पलाइन 1947" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar पोर्टल", note: "जुड़ा नंबर और अपडेट स्टेटस" },
  ],
  faq: [
    { q: "आधार में मोबाइल नंबर बदलने की फीस कितनी है?", a: "₹75। ऐप से हो या आधार केंद्र पर, यही फीस है। बायोमेट्रिक अपडेट के साथ करवाएं तो मोबाइल बदलने का अलग पैसा नहीं लगता।" },
    { q: "क्या घर बैठे आधार में मोबाइल नंबर बदल सकते हैं?", a: "हां, UIDAI के नए Aadhaar ऐप से, जिसमें चेहरे की पहचान और नए नंबर पर OTP से अपडेट होता है। ऐप में दिक्कत हो तो आधार केंद्र जाएं।" },
    { q: "पुराना नंबर बंद हो गया है, क्या OTP चाहिए?", a: "नहीं। ऐप में चेहरे से और केंद्र पर फिंगरप्रिंट/आंख से पहचान होती है। OTP सिर्फ नए नंबर पर आता है।" },
    { q: "मोबाइल बदलने के लिए कौन से कागज़ चाहिए?", a: "कोई दस्तावेज़ नहीं। सिर्फ आधार नंबर और बायोमेट्रिक या चेहरे से पहचान।" },
    { q: "कैसे पता करें कि आधार से कौन सा नंबर जुड़ा है?", a: "myAadhaar या UIDAI वेबसाइट पर \"Verify Email/Mobile Number\" से जांच करें।" },
  ],
  related: [
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "नया आधार, अपडेट फीस, PVC" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "PAN चालू रखने के लिए" },
    { href: "/service/digilocker.html", emoji: "📂", title: "DigiLocker", text: "आधार OTP से खाता" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://myaadhaar.uidai.gov.in/", label: "🆔 myAadhaar खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
