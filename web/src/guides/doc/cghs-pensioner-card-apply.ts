import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): CGHS OM F.No. S.11012/1/2024-EHS dated 28 June
// 2024 "Guidelines for issue of CGHS card to serving employees and retired
// employees" on cghs.mohfw.gov.in (cards for retired employees/family pensioners
// drawing pension from Central Civil Estimates not availing FMA; contribution of
// 12 months for annual / 120 months for lifetime card paid on Bharatkosh, challan
// attached; L1-5 ₹30,000, L6 ₹54,000, L7-11 ₹78,000, L12+ ₹1,20,000 lifetime);
// MoHFW OM 17 Jul 2026 (CGHS integrated with DoPPW Bhavishya portal: Head of
// Office verifies, PPO generated, contribution through integrated Bharatkosh,
// digital card downloadable; CGHS portal route continues) as reported by Business
// Today (23 Jul 2026) and Outlook Money. Processing time and helpline left out.
export const cghsPensionerCardApply: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "CGHS पेंशनभोगी कार्ड" },
  ],
  docHi: "CGHS पेंशनभोगी कार्ड",
  title: "सीजीएचएस केंद्र सरकार स्वास्थ्य कार्ड (CGHS Health Card)",
  description: "केंद्र सरकार के पेंशनभोगियों के लिए CGHS कार्ड: पात्रता, FMA की शर्त, Bharatkosh पर अंशदान (आजीवन कार्ड ₹30,000 से ₹1,20,000), CGHS पोर्टल या भविष्य पोर्टल से ऑनलाइन आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "CGHS पेंशनभोगी कार्ड 2026: ऑनलाइन आवेदन, अंशदान और ज़रूरी कागज़",
  lead: "केंद्र सरकार से रिटायर कर्मचारी और पारिवारिक पेंशनभोगी, जो निश्चित चिकित्सा भत्ता (FMA) नहीं ले रहे, CGHS कार्ड बनवा सकते हैं। आवेदन cghs.mohfw.gov.in पर ऑनलाइन होता है और अंशदान Bharatkosh पर जमा होता है; 120 महीने का अंशदान देने पर आजीवन कार्ड मिलता है। जुलाई 2026 से रिटायर होने वाले कर्मचारी पेंशन के भविष्य (Bhavishya) पोर्टल से भी यह कार्ड ले सकते हैं।",
  facts: [
    ["कौन पात्र", "केंद्रीय सिविल पेंशनभोगी/पारिवारिक पेंशनभोगी (FMA न लेने वाले)"],
    ["आजीवन कार्ड", "120 महीने का अंशदान (₹30,000 से ₹1,20,000)"],
    ["भुगतान", "Bharatkosh पर ऑनलाइन"],
    ["आवेदन", "CGHS पोर्टल या भविष्य पोर्टल"],
  ],
  sections: [
    {
      id: "anshdan",
      title: "कितना अंशदान देना होगा",
      intro: "पेंशनभोगी का वेतन स्तर (Pay Level) रिटायरमेंट के समय का माना जाता है। आप 1 साल का कार्ड या आजीवन कार्ड चुन सकते हैं।",
      table: {
        head: ["रिटायरमेंट के समय वेतन स्तर", "1 साल (12 माह)", "आजीवन (120 माह)"],
        rows: [
          ["लेवल 1 से 5", "₹3,000", "₹30,000"],
          ["लेवल 6", "₹5,400", "₹54,000"],
          ["लेवल 7 से 11", "₹7,800", "₹78,000"],
          ["लेवल 12 और ऊपर", "₹12,000", "₹1,20,000"],
        ],
      },
      html: "<p>दरें CGHS के 28 जून 2024 के आदेश के अनुसार हैं। भुगतान से पहले CGHS पोर्टल पर ताज़ा दरें देख लें।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>PPO</strong> (पेंशन भुगतान आदेश) की कॉपी, या रिटायरमेंट से पहले आवेदन हो तो कार्यालय का प्रमाण।",
        "पेंशनभोगी और हर आश्रित की फोटो, आधार और जन्म तिथि का प्रमाण।",
        "आश्रितों के रिश्ते और (माता-पिता जैसे आश्रितों के लिए) आय/निर्भरता का प्रमाण, CGHS के नियमों के अनुसार।",
        "Bharatkosh पर अंशदान जमा करने का <strong>चालान/रसीद</strong>।",
        "पहले सेवारत कर्मचारी का CGHS कार्ड था तो उसका नंबर (सेवारत से पेंशनभोगी कार्ड में बदलने के लिए)।",
        "FMA लेना बंद करने का घोषणा पत्र (अगर FMA मिल रहा था)।",
      ],
    },
    {
      id: "cghs-portal",
      title: "तरीका 1: CGHS पोर्टल से आवेदन",
      steps: [
        "<a href=\"https://cghs.mohfw.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cghs.mohfw.gov.in</a> खोलें और पेंशनभोगी कार्ड के नए आवेदन का विकल्प चुनें।",
        "मोबाइल/ईमेल से रजिस्टर करें, PPO नंबर, वेतन स्तर, शहर और आश्रितों की जानकारी भरें।",
        "<a href=\"https://bharatkosh.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Bharatkosh</a> पर अपने शहर के CGHS के लिए अंशदान जमा करें (1 साल या आजीवन)।",
        "कागज़ और Bharatkosh का चालान अपलोड करके सबमिट करें। आवेदन नंबर से स्टेटस देखें।",
        "मंज़ूरी के बाद कार्ड पोर्टल से डाउनलोड करें और अपना वेलनेस सेंटर देख लें।",
      ],
    },
    {
      id: "bhavishya",
      title: "तरीका 2: रिटायर होने वाले कर्मचारी, भविष्य पोर्टल से",
      steps: [
        "रिटायरमेंट से पहले पेंशन फॉर्म भरते समय भविष्य (Bhavishya) पोर्टल पर CGHS पेंशनभोगी कार्ड का विकल्प चुनें; पेंशन की जानकारी अपने आप CGHS फॉर्म में आ जाती है।",
        "कार्यालय प्रमुख (Head of Office) फॉर्म का सत्यापन करते हैं और PPO बनता है।",
        "PPO बनने के बाद जुड़े हुए Bharatkosh पेमेंट गेटवे से अंशदान जमा करें।",
        "कार्ड डिजिटल रूप में बनता है और भविष्य या CGHS, किसी भी पोर्टल से डाउनलोड हो सकता है।",
      ],
      callout: { kind: "info", html: "भविष्य पोर्टल वाला रास्ता जुलाई 2026 के आदेश से <strong>अतिरिक्त सुविधा</strong> है। जो पहले से रिटायर हैं, वे CGHS पोर्टल से ही आवेदन करें।" },
    },
    {
      id: "dhyan",
      title: "ध्यान रखें",
      list: [
        "CGHS कार्ड लेने पर <strong>FMA बंद</strong> हो जाता है; दोनों साथ नहीं मिलते।",
        "शहर बदलने पर कार्ड ट्रांसफर (नए शहर के CGHS में) का आवेदन पोर्टल से होता है।",
        "70 साल या उससे ऊपर हैं तो CGHS या <a href=\"/service/ayushman-bharat-vayo-vandana.html\">आयुष्मान वय वंदना कार्ड</a>, इनमें से एक चुनना होगा।",
        "सालाना कार्ड हर साल समय पर रिन्यू कराएं, नहीं तो इलाज में दिक्कत होगी।",
      ],
    },
  ],
  official: [
    { href: "https://cghs.mohfw.gov.in/", title: "CGHS पोर्टल: पेंशनभोगी कार्ड आवेदन और आदेश" },
    { href: "https://bharatkosh.gov.in/", title: "Bharatkosh: अंशदान का भुगतान" },
    { href: "https://bhavishya.nic.in/", title: "भविष्य पोर्टल (पेंशन एवं पेंशनभोगी कल्याण विभाग)" },
  ],
  faq: [
    { q: "CGHS आजीवन कार्ड के लिए कितना पैसा देना होता है?", a: "120 महीने का अंशदान: लेवल 1-5 पर ₹30,000, लेवल 6 पर ₹54,000, लेवल 7-11 पर ₹78,000 और लेवल 12 व ऊपर ₹1,20,000।" },
    { q: "CGHS अंशदान कहां जमा करें?", a: "Bharatkosh पर ऑनलाइन। भविष्य पोर्टल से आवेदन करने वालों के लिए Bharatkosh भुगतान उसी में जुड़ा है।" },
    { q: "क्या रिटायरमेंट से पहले ही CGHS पेंशनभोगी कार्ड का आवेदन हो सकता है?", a: "हां। जुलाई 2026 से भविष्य पोर्टल में पेंशन फॉर्म के साथ CGHS कार्ड का आवेदन होता है; PPO बनने के बाद अंशदान जमा करके डिजिटल कार्ड मिलता है।" },
    { q: "पारिवारिक पेंशनभोगी CGHS कार्ड ले सकते हैं?", a: "हां, केंद्रीय सिविल प्राक्कलन से पारिवारिक पेंशन पाने वाले, जो FMA नहीं ले रहे, CGHS कार्ड के पात्र हैं।" },
  ],
  related: [
    { href: "/service/central-govt-health-scheme.html", emoji: "🩺", title: "CGHS की पूरी जानकारी", text: "सुविधाएं, पात्रता, अंशदान" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना कार्ड", text: "70+ के लिए विकल्प" },
    { href: "/service/epfo-higher-pension-option.html", emoji: "💼", title: "EPFO उच्च पेंशन", text: "पेंशन से जुड़ी जानकारी" },
    { href: "/service/senior-citizen-card.html", emoji: "🪪", title: "सीनियर सिटीजन कार्ड", text: "राज्यवार बुजुर्ग पहचान पत्र" },
  ],
  aside: [
    { href: "https://cghs.mohfw.gov.in/", label: "🩺 CGHS पोर्टल खोलें" },
    { href: "https://bharatkosh.gov.in/", label: "💳 Bharatkosh भुगतान" },
  ],
};
