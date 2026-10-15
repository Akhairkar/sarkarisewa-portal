import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Rajya Sabha written reply of 7 Aug 2026
// (reported by BioVoice: 10.31 crore Farmer IDs as of 3 Aug 2026; target
// 11 crore; Digital Crop Survey in 648 districts, Rabi 2025-26); IANS
// 14 Feb 2026 (7.63 crore IDs on 27 Nov 2025); Lok Sabha reply reported by
// Angel One, Aug 2025 (Farmer ID compulsory for new PM-Kisan registrations
// in 14 states; existing beneficiaries not affected); MicroSave Nov 2025
// (registration modes: self, CSC, operator, Sahayak). agristack.gov.in is
// reachable but is a script-only page, so state portal addresses are not
// listed. Old page text (generic "ID card for SIM, passport, ITR") was wrong
// and dropped. The 12-digit number in the old description is not repeated
// because it could not be confirmed from an official page.
export const farmerIdCardAgristack: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "किसान पहचान पत्र (Farmer ID)" },
  ],
  docHi: "किसान पहचान पत्र",
  title: "किसान पहचान पत्र (AgriStack Farmer ID Card) 2026",
  description: "डिजिटल कृषि मिशन (AgriStack) के तहत किसान की ज़मीन के रिकॉर्ड से जुड़ी डिजिटल किसान ID: कौन बनवाए, कैसे बनती है, PM-Kisan में क्यों ज़रूरी, कागज़ और आम समस्याएं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "किसान पहचान पत्र (AgriStack Farmer ID): कैसे बनवाएं, क्यों ज़रूरी और PM-Kisan से संबंध",
  lead: "किसान पहचान पत्र (Farmer ID) केंद्र सरकार के डिजिटल कृषि मिशन (AgriStack) के तहत बनने वाली डिजिटल पहचान है, जो किसान के आधार को राज्य के डिजिटल भूमि रिकॉर्ड से जोड़ती है। यह राज्य की किसान रजिस्ट्री (Farmer Registry) में बनती है, खुद, CSC या कृषि/राजस्व विभाग के कैंप से। अगस्त 2026 तक देश में 10.31 करोड़ से ज़्यादा Farmer ID बन चुकी हैं, और कई राज्यों में PM-Kisan के नए पंजीकरण के लिए यह ज़रूरी है।",
  facts: [
    ["मिशन", "डिजिटल कृषि मिशन (AgriStack), कृषि मंत्रालय"],
    ["किससे जुड़ती है", "आधार + राज्य के भूमि रिकॉर्ड"],
    ["कहां बनती है", "राज्य की किसान रजिस्ट्री, CSC, कैंप"],
    ["शुल्क", "किसान के लिए मुफ्त (CSC पर सेवा शुल्क राज्य नियम से)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "Farmer ID क्या है और किस काम आती है",
      list: [
        "<strong>एक पहचान, ज़मीन के साथ:</strong> किसान का नाम, आधार, मोबाइल और उसके नाम की ज़मीन (खसरा/सर्वे नंबर) एक जगह जुड़ जाते हैं, ताकि हर योजना में बार-बार कागज़ न देने पड़ें।",
        "<strong>योजनाओं में:</strong> PM-Kisan, फसल बीमा (PMFBY), MSP पर खरीद और खेती के कर्ज जैसी सेवाओं में इसका उपयोग बढ़ रहा है।",
        "<strong>PM-Kisan:</strong> अगस्त 2025 में लोकसभा में बताया गया कि 14 राज्यों में PM-Kisan के <strong>नए</strong> पंजीकरण के लिए Farmer ID ज़रूरी है। पहले से जुड़े लाभार्थियों पर इसका असर नहीं बताया गया।",
      ],
      callout: { kind: "warn", html: "Farmer ID आधार या वोटर ID की जगह आम पहचान पत्र नहीं है। सिम, पासपोर्ट या बैंक खाते के लिए यह नहीं मांगी जाती।" },
    },
    {
      id: "kaun",
      title: "कौन बनवा सकता है",
      list: [
        "जिस किसान के नाम राज्य के भूमि रिकॉर्ड में खेती की ज़मीन दर्ज है।",
        "ज़मीन कई गांवों में हो तो सभी ज़मीनें एक ही Farmer ID से जोड़ी जा सकती हैं।",
        "बटाईदार/किरायेदार किसानों के लिए नियम राज्य के हिसाब से अलग हैं; अपने कृषि विभाग से पूछें।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड और आधार से जुड़ा मोबाइल नंबर (OTP/e-KYC के लिए)",
        "ज़मीन का विवरण: खतौनी/जमाबंदी/7-12 या खसरा-सर्वे नंबर",
        "आधार और भूमि रिकॉर्ड में नाम एक जैसा होना ज़रूरी है; फर्क हो तो पहले सुधार करवाएं",
      ],
    },
    {
      id: "kaise",
      title: "Farmer ID कैसे बनवाएं",
      steps: [
        "<strong>खुद ऑनलाइन:</strong> <a href=\"https://agristack.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">agristack.gov.in</a> से अपने राज्य की किसान रजिस्ट्री खोलें और आधार OTP से खाता बनाएं।",
        "अपना नाम, पता और ज़मीन का खसरा/सर्वे नंबर खोजकर जोड़ें। सिस्टम आधार और भूमि रिकॉर्ड का नाम मिलाता है।",
        "आधार e-KYC/e-Sign से आवेदन जमा करें। आवेदन संख्या संभालें।",
        "राजस्व/कृषि विभाग की जांच के बाद Farmer ID बनती है। स्टेटस उसी पोर्टल पर देखें।",
        "<strong>खुद न कर पाएं तो</strong> नज़दीकी CSC, पटवारी/लेखपाल/कृषि सहायक या गांव में लगने वाले कैंप से बनवाएं।",
      ],
      callout: { kind: "ok", html: 'नज़दीकी केंद्र खोजने के लिए <a href="/tools/csc-locator.html">CSC लोकेटर</a> देखें। ऑनलाइन फॉर्म में मदद के लिए किसी को OTP बताने से पहले पक्का करें कि वह अधिकृत केंद्र है।' },
    },
    {
      id: "samasya",
      title: "आम समस्याएं",
      list: [
        "<strong>नाम मेल नहीं खा रहा:</strong> आधार और खतौनी के नाम में फर्क हो तो तहसील/राजस्व कार्यालय से रिकॉर्ड सुधार या आधार अपडेट करवाएं।",
        "<strong>ज़मीन नहीं मिल रही:</strong> भूमि रिकॉर्ड डिजिटल न हो या खसरा गलत हो तो पटवारी/लेखपाल से संपर्क करें।",
        "<strong>मोबाइल आधार से नहीं जुड़ा:</strong> पहले आधार केंद्र पर मोबाइल नंबर जुड़वाएं।",
        "<strong>आवेदन लंबित:</strong> प्रखंड/ब्लॉक कृषि अधिकारी या तहसील में आवेदन संख्या के साथ संपर्क करें।",
      ],
    },
  ],
  official: [
    { href: "https://agristack.gov.in/", title: "AgriStack (डिजिटल कृषि मिशन)", note: "राज्य की किसान रजिस्ट्री का रास्ता" },
    { href: "https://pmkisan.gov.in/", title: "PM-Kisan पोर्टल" },
  ],
  faq: [
    { q: "Farmer ID कहां से बनती है?", a: "अपने राज्य की AgriStack किसान रजिस्ट्री से, जो agristack.gov.in से खुलती है। CSC, पटवारी/कृषि सहायक या गांव के कैंप से भी बनवा सकते हैं।" },
    { q: "क्या PM-Kisan के लिए Farmer ID ज़रूरी है?", a: "अगस्त 2025 में संसद में बताया गया कि 14 राज्यों में PM-Kisan के नए पंजीकरण के लिए Farmer ID ज़रूरी है। अपने राज्य का नियम कृषि विभाग से पक्का करें।" },
    { q: "Farmer ID बनवाने में कितना पैसा लगता है?", a: "किसान के लिए Farmer ID मुफ्त है। CSC पर फॉर्म भरवाने का सेवा शुल्क राज्य के नियम से लग सकता है।" },
    { q: "अब तक कितनी Farmer ID बनी हैं?", a: "संसद में दिए जवाब के अनुसार 3 अगस्त 2026 तक 10.31 करोड़ से ज़्यादा Farmer ID बन चुकी थीं; लक्ष्य 11 करोड़ है।" },
    { q: "जिसके नाम ज़मीन नहीं है, क्या वह Farmer ID बनवा सकता है?", a: "Farmer ID ज़मीन के रिकॉर्ड से जुड़ती है। बटाईदार/किरायेदार किसानों के लिए नियम राज्य के हिसाब से हैं; कृषि विभाग से पूछें।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "₹6,000 सालाना सहायता" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "खेती के लिए कर्ज" },
    { href: "/service/farm-machinery-subsidy.html", emoji: "🚜", title: "कृषि यंत्र सब्सिडी", text: "SMAM के तहत सहायता" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP के लिए ज़रूरी" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "Farmer ID बनवाने में मदद" },
  ],
  aside: [
    { href: "https://agristack.gov.in/", label: "🌾 AgriStack पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
