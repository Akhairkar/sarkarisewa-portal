import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; abdm.gov.in not reachable from the sandbox,
// search-result extracts used): NHA contact page on abdm.gov.in (toll free
// 1800-11-4477 / 14477), ABDM grievance FAQ (same number for complaints),
// Vikaspedia ABHA page (self-registration on the ABHA web portal or the ABDM
// health records app; mobile-number route needs name, year of birth, gender,
// address, mobile), ABDM developer forum + guides (Aadhaar OTP route; the
// driving-licence route gives an enrolment number and needs identity
// verification at an ABDM facility; ABHA address ends in @abdm; free and
// voluntary). Old title was cut off ("... 202"), completed as "2026".
export const abhaHealthCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "ABHA हेल्थ कार्ड" },
  ],
  docHi: "ABHA हेल्थ कार्ड",
  title: "आभा डिजिटल हेल्थ कार्ड (ABHA Health Card) 2026 | SarkariSewa India",
  description: "आयुष्मान भारत डिजिटल मिशन के तहत 14 अंकों का डिजिटल हेल्थ आईडी कार्ड बनाएं। आभा डिजिटल हेल्थ कार्ड (ABHA Health Card) के लिए आधिकारिक लिंक, आधार से बनाने का तरीका, कार्ड डाउनलोड और हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ABHA हेल्थ कार्ड 2026: आधार से मुफ्त कैसे बनाएं और कार्ड कैसे डाउनलोड करें",
  lead: "ABHA (आयुष्मान भारत हेल्थ अकाउंट) 14 अंकों का डिजिटल स्वास्थ्य नंबर है, जिसे राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) आयुष्मान भारत डिजिटल मिशन (ABDM) के तहत देता है। इसे abha.abdm.gov.in पर आधार OTP से कुछ मिनट में मुफ्त बनाया जा सकता है और फिर ABHA कार्ड डाउनलोड या प्रिंट किया जा सकता है। ABHA बनाना अपनी मर्ज़ी पर है; यह इलाज का बीमा नहीं है।",
  facts: [
    ["कौन देता है", "NHA, आयुष्मान भारत डिजिटल मिशन"],
    ["नंबर", "14 अंक + ABHA पता (…@abdm)"],
    ["फीस", "मुफ्त"],
    ["हेल्पलाइन", "1800-11-4477 / 14477"],
  ],
  sections: [
    {
      id: "aadhaar-se",
      title: "आधार से ABHA कार्ड बनाने का तरीका",
      steps: [
        '<a href="https://abha.abdm.gov.in/" target="_blank" rel="noopener nofollow">abha.abdm.gov.in</a> खोलें और <strong>Create ABHA Number</strong> चुनें।',
        "<strong>Using Aadhaar</strong> चुनें, 12 अंकों का आधार नंबर डालें और सहमति (consent) पर टिक करें।",
        "आधार से जुड़े मोबाइल पर आया OTP डालें। मोबाइल नंबर पूछा जाए तो वह नंबर दें जिस पर स्वास्थ्य की सूचना चाहिए।",
        "अपना <strong>ABHA पता</strong> चुनें, जैसे <code>naam123@abdm</code>। यह ईमेल जैसा आसान नाम है जिससे अस्पताल में लॉग-इन/शेयर होता है।",
        "14 अंकों का ABHA नंबर बन जाता है। <strong>Download ABHA Card</strong> से कार्ड PDF/फोटो के रूप में सहेजें या प्रिंट करें।",
      ],
      callout: { kind: "info", html: "आधार से मोबाइल नंबर जुड़ा न हो तो OTP नहीं आएगा। पहले <a href=\"/service/aadhaar-mobile-update.html\">आधार में मोबाइल जुड़वाएं</a> या नज़दीकी सरकारी अस्पताल/ABDM से जुड़े केंद्र पर मदद लें।" },
    },
    {
      id: "bina-aadhaar",
      title: "आधार नहीं है तो",
      list: [
        "<strong>ड्राइविंग लाइसेंस से:</strong> पोर्टल पर आवेदन शुरू होता है, पर पहले सिर्फ नामांकन संख्या मिलती है; ABHA नंबर के लिए ABDM से जुड़े स्वास्थ्य केंद्र पर जाकर पहचान की पुष्टि करवानी होती है।",
        "<strong>मोबाइल नंबर से:</strong> नाम, जन्म का साल, लिंग, पता और मोबाइल देकर ABHA पता बनाया जा सकता है; इसमें पहचान सत्यापित नहीं होती, इसलिए आधार वाला तरीका बेहतर है।",
        "सरकारी अस्पताल, आयुष्मान आरोग्य मंदिर या कई निजी अस्पतालों के काउंटर पर भी ABHA बनवाया जा सकता है।",
      ],
    },
    {
      id: "upyog",
      title: "ABHA कार्ड से क्या फायदा",
      list: [
        "अस्पताल में <strong>Scan and Share</strong>: OPD काउंटर का QR कोड स्कैन करके पर्ची बनवाना, लाइन कम होती है (जहां सुविधा हो)।",
        "जांच रिपोर्ट, पर्चे और डिस्चार्ज समरी एक जगह जुड़ सकती है; दूसरे डॉक्टर को आपकी सहमति से दिखती है।",
        "आपकी मर्ज़ी के बिना कोई रिकॉर्ड नहीं देख सकता; हर बार सहमति (consent) मांगी जाती है।",
      ],
      callout: { kind: "warn", html: "ABHA कार्ड से <strong>मुफ्त इलाज नहीं</strong> मिलता। ₹5 लाख तक मुफ्त इलाज के लिए अलग से <a href=\"/service/ayushman-bharat.html\">आयुष्मान कार्ड (PM-JAY)</a> चाहिए।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें",
      list: [
        "<strong>पहले से ABHA बना है:</strong> उसी आधार से दोबारा बनाने पर पुराना ABHA ही दिखता है; Login से कार्ड डाउनलोड करें।",
        "<strong>ABHA पता भूल गए:</strong> पोर्टल पर आधार या मोबाइल OTP से लॉग-इन करके देखें।",
        "<strong>नाम/जन्मतिथि गलत:</strong> आधार से बना ABHA आधार की जानकारी लेता है; पहले आधार में सुधार करवाएं।",
        "<strong>शिकायत:</strong> 1800-11-4477 या 14477 पर कॉल करें।",
      ],
    },
  ],
  official: [
    { href: "https://abha.abdm.gov.in/", title: "ABHA पोर्टल", note: "ABHA बनाना, लॉग-इन, कार्ड डाउनलोड" },
    { href: "https://abdm.gov.in/", title: "आयुष्मान भारत डिजिटल मिशन (ABDM)", note: "हेल्पलाइन 1800-11-4477 / 14477" },
  ],
  faq: [
    { q: "ABHA कार्ड बनाने की फीस कितनी है?", a: "ABHA पूरी तरह मुफ्त है। कोई एजेंट पैसे मांगे तो आप खुद abha.abdm.gov.in पर आधार OTP से बना सकते हैं।" },
    { q: "क्या ABHA कार्ड और आयुष्मान कार्ड एक ही हैं?", a: "नहीं। ABHA डिजिटल स्वास्थ्य रिकॉर्ड के लिए नंबर है। आयुष्मान कार्ड (PM-JAY) से पात्र परिवार को सूचीबद्ध अस्पतालों में मुफ्त इलाज मिलता है। दोनों अलग हैं।" },
    { q: "ABHA नंबर और ABHA पता में क्या फर्क है?", a: "ABHA नंबर 14 अंकों का होता है और बदलता नहीं। ABHA पता (जैसे naam@abdm) याद रखने में आसान नाम है जिससे लॉग-इन और रिकॉर्ड शेयर होते हैं।" },
    { q: "क्या ABHA बनाना ज़रूरी है?", a: "नहीं, यह स्वैच्छिक है। पर कई सरकारी अस्पतालों में ABHA से पर्ची बनवाना और रिपोर्ट रखना आसान हो जाता है।" },
    { q: "ABHA हेल्पलाइन नंबर क्या है?", a: "टोल फ्री 1800-11-4477 और 14477।" },
  ],
  related: [
    { href: "/service/abha-health-id.html", emoji: "🏥", title: "ABHA स्वास्थ्य खाता", text: "रिकॉर्ड जोड़ना और शेयर करना" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत (PM-JAY)", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों का कार्ड" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार मोबाइल अपडेट", text: "OTP के लिए नंबर जोड़ें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://abha.abdm.gov.in/", label: "🏥 ABHA पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
