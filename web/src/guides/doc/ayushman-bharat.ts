import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB backgrounder "Ayushman Bharat PM-JAY"
// 1 Nov 2025 (release 2185049: ₹5 lakh per family per year, launched 23 Sep 2018,
// 12 crore+ families, cashless in empanelled public/private hospitals, 42 crore+
// cards); PIB release 2210432 (1 Jan 2026: ASHA/AWW/AWH added Feb 2024, 70+ Vay
// Vandana from 29 Oct 2024, Ayushman App with face-auth/OTP/iris/fingerprint,
// expanded to Delhi and Odisha in 2025); PIB backgrounder 17 Nov 2024 (SECC 2011
// criteria, services covered, 15-day post-hospitalisation, no family size cap,
// pre-existing diseases covered); nha.gov.in Contact-Us (helpline 14555).
export const ayushmanBharat: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "आयुष्मान भारत (PM-JAY)" },
  ],
  docHi: "आयुष्मान भारत (PM-JAY)",
  title: "आयुष्मान भारत (PM-JAY) 2026",
  description: "आयुष्मान भारत PM-JAY: पात्र परिवारों को हर साल ₹5 लाख तक कैशलेस इलाज। पात्रता कैसे जांचें, आयुष्मान कार्ड कैसे बनाएं/डाउनलोड करें, अस्पताल में इलाज और हेल्पलाइन 14555।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आयुष्मान भारत (PM-JAY) 2026: पात्रता, आयुष्मान कार्ड और ₹5 लाख तक मुफ्त इलाज",
  lead: "आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY) में पात्र परिवारों को हर साल ₹5 लाख तक का कैशलेस इलाज सूचीबद्ध सरकारी और निजी अस्पतालों में मिलता है। इसमें आवेदन नहीं होता: परिवार का नाम सरकारी सूची में है तो आधार e-KYC से आयुष्मान कार्ड बनता है। 70 साल और उससे ऊपर के सभी बुजुर्ग आय की परवाह किए बिना पात्र हैं।",
  facts: [
    ["कवर", "₹5 लाख प्रति परिवार प्रति वर्ष"],
    ["कौन पात्र", "SECC 2011 सूची वाले परिवार, राज्य द्वारा जोड़े गए परिवार, 70+ बुजुर्ग"],
    ["कार्ड कहां बने", "Ayushman App, beneficiary.nha.gov.in, अस्पताल, CSC"],
    ["हेल्पलाइन", "14555 (टोल-फ्री)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "PM-JAY क्या है",
      intro: "PM-JAY 23 सितंबर 2018 को शुरू हुई और इसे राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) तथा राज्यों की State Health Agency चलाती हैं। PIB के अनुसार 12 करोड़ से ज़्यादा परिवार इसमें शामिल हैं और 42 करोड़ से ज़्यादा आयुष्मान कार्ड बन चुके हैं।",
      list: [
        "<strong>अस्पताल में भर्ती का इलाज:</strong> जांच, दवाएं, ऑपरेशन, ICU, भर्ती के दौरान खाना-रहना।",
        "<strong>भर्ती से पहले और बाद:</strong> भर्ती से पहले के खर्च और छुट्टी के बाद 15 दिन तक की फॉलो-अप देखभाल।",
        "<strong>परिवार के सदस्यों की कोई सीमा नहीं</strong> और पहले से मौजूद बीमारियां पहले दिन से कवर।",
        "<strong>पूरे देश में:</strong> किसी भी राज्य के सूचीबद्ध अस्पताल में इलाज करा सकते हैं।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "<strong>SECC 2011 सूची:</strong> ग्रामीण क्षेत्र में वंचन (deprivation) के मानदंड और शहरी क्षेत्र में पेशे के आधार पर चुने गए परिवार।",
        "<strong>राज्य द्वारा जोड़े गए परिवार:</strong> कई राज्य अपने खर्च पर राशन कार्ड या अपनी सूची के आधार पर और परिवार जोड़ते हैं; यह राज्य के हिसाब से अलग है।",
        "<strong>ASHA, आंगनवाड़ी कार्यकर्ता और सहायिकाएं</strong> और उनके परिवार (फरवरी 2024 से)।",
        "<strong>70 साल और उससे ऊपर के सभी नागरिक</strong>, आय की कोई सीमा नहीं (आयुष्मान वय वंदना कार्ड से)।",
      ],
      callout: { kind: "info", html: "PM-JAY में अलग से <strong>आवेदन फॉर्म नहीं</strong> होता। अगर आपका नाम सूची में नहीं है तो आयुष्मान कार्ड नहीं बनेगा (70+ बुजुर्गों को छोड़कर)। कोई एजेंट पैसे लेकर नाम जोड़ने का दावा करे तो सावधान रहें।" },
    },
    {
      id: "card",
      title: "पात्रता जांचें और आयुष्मान कार्ड बनाएं",
      steps: [
        "मोबाइल पर <strong>Ayushman App</strong> डाउनलोड करें या <a href=\"https://beneficiary.nha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">beneficiary.nha.gov.in</a> खोलें और मोबाइल OTP से लॉगिन करें।",
        "योजना (PM-JAY), राज्य और खोज का तरीका (आधार, राशन कार्ड/परिवार ID आदि) चुनकर अपना नाम खोजें।",
        "नाम मिल जाए तो सदस्य के आगे <strong>e-KYC</strong> करें: आधार OTP, फेस ऑथेंटिकेशन, फिंगरप्रिंट या आइरिस से।",
        "फोटो और ज़रूरी जानकारी भरकर सबमिट करें। मंज़ूरी के बाद कार्ड वहीं से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद न बना सकें तो आधार और राशन कार्ड लेकर नज़दीकी सूचीबद्ध अस्पताल के <strong>आयुष्मान मित्र</strong> या <a href=\"/tools/csc-locator.html\">CSC केंद्र</a> पर जाएं।" },
    },
    {
      id: "ilaj",
      title: "अस्पताल में इलाज कैसे लें",
      steps: [
        "PM-JAY से जुड़ा (empanelled) अस्पताल चुनें। सूची Ayushman App में या 14555 पर फोन करके मिलती है।",
        "अस्पताल के <strong>आयुष्मान मित्र / हेल्प डेस्क</strong> पर आयुष्मान कार्ड या आधार दिखाएं।",
        "पहचान की पुष्टि और अस्पताल की ओर से मंज़ूरी (pre-authorisation) के बाद इलाज कैशलेस होता है।",
      ],
      callout: { kind: "warn", html: "PM-JAY मुख्य रूप से <strong>भर्ती वाले इलाज</strong> के लिए है; सामान्य OPD इसमें आम तौर पर नहीं आता। सूचीबद्ध अस्पताल पैकेज में शामिल इलाज के पैसे मांगे तो 14555 पर शिकायत करें।" },
    },
    {
      id: "madad",
      title: "मदद और शिकायत",
      list: [
        "<strong>टोल-फ्री हेल्पलाइन:</strong> 14555 (पात्रता, नज़दीकी अस्पताल और CSC)।",
        "<strong>राज्य स्तर:</strong> अपने राज्य की State Health Agency (SHA) या ज़िला आयुष्मान समन्वयक।",
        "<strong>बुजुर्ग (70+):</strong> <a href=\"/service/ayushman-bharat-vayo-vandana.html\">आयुष्मान वय वंदना कार्ड</a> की अलग गाइड देखें।",
      ],
    },
  ],
  official: [
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान कार्ड: पात्रता जांचें, e-KYC और डाउनलोड" },
    { href: "https://nha.gov.in/PM-JAY", title: "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA): PM-JAY" },
    { href: "https://nha.gov.in/Contact-Us", title: "NHA संपर्क और हेल्पलाइन" },
  ],
  faq: [
    { q: "आयुष्मान भारत में कितने का इलाज मुफ्त है?", a: "पात्र परिवार को हर साल ₹5 लाख तक का कैशलेस इलाज, सूचीबद्ध सरकारी और निजी अस्पतालों में भर्ती होने पर।" },
    { q: "कैसे पता करें कि मेरा नाम आयुष्मान सूची में है?", a: "Ayushman App या beneficiary.nha.gov.in पर मोबाइल OTP से लॉगिन करके आधार या राशन कार्ड से खोजें, या 14555 पर फोन करें।" },
    { q: "क्या आयुष्मान कार्ड के लिए ऑनलाइन आवेदन होता है?", a: "नया नाम जोड़ने का आम आवेदन नहीं होता। नाम सूची में है तो e-KYC करके कार्ड बनता है। 70+ बुजुर्ग बिना सूची के वय वंदना कार्ड बनवा सकते हैं।" },
    { q: "क्या दूसरे राज्य में इलाज करा सकते हैं?", a: "हां, PM-JAY का लाभ देश के किसी भी सूचीबद्ध अस्पताल में लिया जा सकता है।" },
    { q: "आयुष्मान कार्ड बनवाने के लिए क्या चाहिए?", a: "आधार कार्ड और आधार से जुड़ा मोबाइल (OTP के लिए), या फेस/फिंगरप्रिंट से e-KYC। कुछ राज्यों में राशन कार्ड/परिवार ID से नाम खोजा जाता है।" },
  ],
  related: [
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना कार्ड", text: "70+ बुजुर्गों के लिए" },
    { href: "/service/abha-health-card.html", emoji: "📋", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य रिकॉर्ड" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "नाम खोजने में काम आता है" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP से e-KYC के लिए" },
    { href: "/tools/eligibility-checker.html", emoji: "✅", title: "पात्रता जांच", text: "आप किन योजनाओं के लिए पात्र हैं" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "कार्ड बनवाने में मदद" },
  ],
  aside: [
    { href: "https://beneficiary.nha.gov.in/", label: "🏥 आयुष्मान कार्ड पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
