import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): No single national senior citizen card exists;
// identity cards/certificates are issued by state social welfare departments
// or district administration (see the per-state guides in
// web/src/guides/senior/). Maintenance and Welfare of Parents and Senior
// Citizens Act, 2007 (indiacode.gov.in: senior citizen = 60+; maintenance
// tribunal). NSAP/IGNOAPS central share ₹200/month (60-79) and ₹500/month
// (80+) for BPL — Lok Sabha AU1289 (2024) and PIB document Nov 2025. Elderline
// 14567 (elderline.dosje.gov.in). Ayushman Vay Vandana: 70+, ₹5 lakh, no
// income limit (beneficiary.nha.gov.in). Railway senior concession withdrawn
// since March 2020 (as in senior/common.ts). Small savings rates for Oct-Dec
// 2026 unchanged (DEA notification 30 Sep 2026): SCSS 8.2%.
export const seniorCitizenCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "वरिष्ठ नागरिक प्रमाण पत्र / कार्ड" },
  ],
  docHi: "वरिष्ठ नागरिक प्रमाण पत्र / कार्ड",
  title: "वरिष्ठ नागरिक प्रमाण पत्र / कार्ड 2026",
  description: "60 साल या उससे ज़्यादा उम्र के नागरिकों का पहचान पत्र, जो राज्य का समाज कल्याण विभाग/ज़िला प्रशासन बनाता है। राज्यवार कहां बनता है, कागज़, वृद्धावस्था पेंशन और 70+ वय वंदना कार्ड।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "वरिष्ठ नागरिक प्रमाण पत्र / कार्ड 2026: कहां बनता है और किस काम आता है",
  lead: "पूरे देश के लिए केंद्र सरकार का कोई एक \"सीनियर सिटीजन कार्ड\" नहीं है। 60 साल या उससे ज़्यादा उम्र के लोगों का वरिष्ठ नागरिक पहचान पत्र या प्रमाण पत्र राज्य सरकार का समाज कल्याण विभाग या ज़िला प्रशासन बनाता है, इसलिए फॉर्म, फीस और फायदे हर राज्य में अलग हैं। बहुत से फायदे (बैंक, टैक्स, बचत योजना) आधार जैसे किसी भी उम्र प्रमाण से मिल जाते हैं।",
  facts: [
    ["उम्र", "60 साल या ज़्यादा"],
    ["कौन बनाता है", "राज्य का समाज कल्याण विभाग / ज़िला प्रशासन"],
    ["70+ के लिए", "आयुष्मान वय वंदना कार्ड: ₹5 लाख तक मुफ्त इलाज"],
    ["मदद", "Elderline <a href=\"tel:14567\">14567</a> (फ्री)"],
  ],
  sections: [
    {
      id: "rajya",
      title: "अपने राज्य में कहां बनता है",
      intro: "हर राज्य की प्रक्रिया, पेंशन और पोर्टल हमारी राज्यवार गाइड में है। कुछ बड़े राज्य:",
      table: {
        head: ["राज्य", "गाइड"],
        rows: [
          ["उत्तर प्रदेश", "<a href=\"/states/uttar-pradesh-senior-citizen-card.html\">UP सीनियर सिटीजन कार्ड</a>"],
          ["बिहार", "<a href=\"/states/bihar-senior-citizen-card.html\">बिहार सीनियर सिटीजन कार्ड</a>"],
          ["महाराष्ट्र", "<a href=\"/states/maharashtra-senior-citizen-card.html\">महाराष्ट्र सीनियर सिटीजन कार्ड</a>"],
          ["मध्य प्रदेश", "<a href=\"/states/madhya-pradesh-senior-citizen-card.html\">MP सीनियर सिटीजन कार्ड</a>"],
          ["राजस्थान", "<a href=\"/states/rajasthan-senior-citizen-card.html\">राजस्थान सीनियर सिटीजन कार्ड</a>"],
          ["दिल्ली", "<a href=\"/states/delhi-senior-citizen-card.html\">दिल्ली सीनियर सिटीजन कार्ड</a>"],
          ["पश्चिम बंगाल", "<a href=\"/states/west-bengal-senior-citizen-card.html\">पश्चिम बंगाल सीनियर सिटीजन कार्ड</a>"],
          ["तमिलनाडु", "<a href=\"/states/tamil-nadu-senior-citizen-card.html\">तमिलनाडु सीनियर सिटीजन कार्ड</a>"],
        ],
      },
      callout: { kind: "info", html: "बाकी राज्यों के लिए <a href=\"/states/index.html\">राज्यवार सेवाएं</a> में अपना राज्य चुनें।" },
    },
    {
      id: "kaise",
      title: "आम तौर पर कैसे बनता है",
      steps: [
        "<strong>कागज़ तैयार करें:</strong> आधार, उम्र का प्रमाण (जन्म प्रमाण पत्र, स्कूल सर्टिफिकेट, PAN, पासपोर्ट या वोटर ID), पते का प्रमाण, 2 फोटो, मोबाइल नंबर। कुछ राज्यों में ब्लड ग्रुप और आपात संपर्क भी मांगा जाता है।",
        "<strong>आवेदन करें:</strong> राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल पर (जहां सेवा ऑनलाइन है), या तहसील, ज़िला समाज कल्याण कार्यालय या <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> से।",
        "<strong>रसीद लें</strong> और आवेदन संख्या संभालें।",
        "<strong>सत्यापन के बाद</strong> कार्ड/प्रमाण पत्र जारी होता है; ऑनलाइन सेवा में पोर्टल से डाउनलोड होता है।",
      ],
      callout: { kind: "warn", html: "नाम और जन्मतिथि बिल्कुल वैसी ही लिखें जैसी आधार में है। आधार में गलत जन्मतिथि हो तो पहले उसे सुधरवाएं।" },
    },
    {
      id: "fayde",
      title: "बुज़ुर्गों के मुख्य फायदे (कार्ड हो या न हो)",
      list: [
        "<strong>वृद्धावस्था पेंशन:</strong> गरीबी रेखा (BPL) वाले 60+ बुज़ुर्गों को इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना में केंद्र की ओर से ₹200 प्रति माह (60-79 साल) और ₹500 प्रति माह (80+) मिलते हैं; राज्य इसमें अपनी राशि जोड़ते हैं। राशि राज्य की गाइड में देखें।",
        "<strong>आयुष्मान वय वंदना कार्ड:</strong> 70 साल या ज़्यादा उम्र के हर नागरिक को, आय कितनी भी हो, ₹5 लाख तक मुफ्त इलाज।",
        "<strong>वरिष्ठ नागरिक बचत योजना (SCSS):</strong> डाकघर/बैंक में; अक्टूबर-दिसंबर 2026 तिमाही में 8.2% ब्याज। इसके लिए अलग कार्ड नहीं, उम्र का प्रमाण चाहिए।",
        "<strong>बैंक:</strong> ज़्यादातर बैंक FD पर बुज़ुर्गों को थोड़ा ज़्यादा ब्याज देते हैं (बैंक तय करता है)।",
        "<strong>भरण-पोषण का कानूनी हक:</strong> माता-पिता एवं वरिष्ठ नागरिक भरण-पोषण और कल्याण अधिनियम, 2007 के तहत बच्चे/रिश्तेदार देखभाल न करें तो SDM स्तर के भरण-पोषण न्यायाधिकरण में आवेदन कर सकते हैं।",
      ],
      callout: { kind: "info", html: "रेलवे में वरिष्ठ नागरिकों की किराया छूट मार्च 2020 से बंद है। नीचे की बर्थ में प्राथमिकता अभी भी मिलती है।" },
    },
  ],
  official: [
    { href: "https://elderline.dosje.gov.in/", title: "Elderline: राष्ट्रीय वरिष्ठ नागरिक हेल्पलाइन", note: "14567, सामाजिक न्याय एवं अधिकारिता मंत्रालय" },
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान कार्ड पोर्टल (NHA)", note: "वय वंदना कार्ड 70+" },
    { href: "https://nsap.nic.in/", title: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)" },
  ],
  faq: [
    { q: "क्या पूरे भारत के लिए एक सीनियर सिटीजन कार्ड है?", a: "नहीं। वरिष्ठ नागरिक पहचान पत्र राज्य सरकारें बनाती हैं। केंद्र का 70+ वालों के लिए आयुष्मान वय वंदना कार्ड है, पर वह इलाज का कार्ड है, पहचान पत्र नहीं।" },
    { q: "सीनियर सिटीजन कार्ड के लिए कितनी उम्र चाहिए?", a: "60 साल या उससे ज़्यादा। आयुष्मान वय वंदना कार्ड के लिए 70 साल या उससे ज़्यादा।" },
    { q: "सीनियर सिटीजन कार्ड ऑनलाइन बनता है?", a: "कई राज्यों में ई-डिस्ट्रिक्ट पोर्टल से बनता है, कई जगह तहसील या ज़िला समाज कल्याण कार्यालय में आवेदन होता है। अपने राज्य की गाइड देखें।" },
    { q: "क्या कार्ड के बिना पेंशन नहीं मिलेगी?", a: "मिलेगी। वृद्धावस्था पेंशन के लिए अलग से आवेदन होता है; उसमें आधार, उम्र, आय और बैंक खाते का प्रमाण लगता है, सीनियर सिटीजन कार्ड ज़रूरी नहीं।" },
    { q: "शिकायत या मदद कहां मिलेगी?", a: "Elderline 14567 पर फ्री कॉल करें। यह सामाजिक न्याय मंत्रालय की राष्ट्रीय हेल्पलाइन है, जहां पेंशन, कानूनी मदद और दुर्व्यवहार जैसे मामलों में जानकारी मिलती है।" },
  ],
  related: [
    { href: "/service/senior-citizen-identity-card.html", emoji: "🪪", title: "वरिष्ठ नागरिक पहचान पत्र", text: "फायदे और ज़रूरत" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "🏥", title: "आयुष्मान वय वंदना कार्ड", text: "70+ के लिए ₹5 लाख मुफ्त इलाज" },
    { href: "/service/national-social-assistance-programme.html", emoji: "👴", title: "वृद्धावस्था पेंशन (NSAP)", text: "BPL बुज़ुर्गों की पेंशन" },
    { href: "/service/form-15g-15h-submission.html", emoji: "🧾", title: "Form 15G / 15H", text: "बैंक ब्याज पर TDS से बचाव" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "उम्र कैलकुलेटर", text: "60 या 70 साल कब पूरे होंगे?" },
    { href: "/states/index.html", emoji: "🗺️", title: "राज्यवार सेवाएं", text: "अपने राज्य की गाइड" },
  ],
  aside: [
    { href: "/states/index.html", label: "🗺️ अपना राज्य चुनें" },
    { href: "tel:14567", label: "📞 Elderline 14567" },
  ],
};
