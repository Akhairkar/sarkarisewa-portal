import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; NOTTO sites not reachable from the sandbox,
// search-result extracts used): notto.mohfw.gov.in (NOTTO under DGHS, Ministry
// of Health; toll-free 1800-11-4770, 24x7); notto.abdm.gov.in (pledge
// registration of organs and tissues after death); Health Ministry D.O.
// letters (anyone 18+ may pledge); news June 2026 (5 lakh+ pledges); news Aug
// 2026 (NOTTO real-time transplant portal/app with C-DAC including national
// waiting lists and Aadhaar-linked pledges — mentioned only in general terms);
// Transplantation of Human Organs and Tissues Act, 1994 (family consent,
// authorisation committees for living donation, ban on commercial dealing).
// Hospital-specific waiting-list procedures vary by state (ROTTO/SOTTO) and
// were described generally.
export const organDonationRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "अंगदान पंजीकरण" },
  ],
  docHi: "अंगदान पंजीकरण",
  title: "अंगदान पंजीकरण (NOTTO) 2026",
  description: "प्रत्यारोपण के माध्यम से जीवन बचाने में मदद के लिए राष्ट्रीय अंग और ऊतक प्रत्यारोपण संगठन (NOTTO) के साथ पंजीकरण करके मृत्यु के बाद अंगदान की प्रतिज्ञा करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "अंगदान पंजीकरण (NOTTO) 2026: मृत्यु के बाद अंगदान की प्रतिज्ञा, जीवित दान के नियम और मरीज का पंजीकरण",
  lead: "भारत में अंगदान दो तरह से होता है: मृत्यु (ब्रेन डेथ) के बाद, और जीवित रहते हुए नज़दीकी रिश्तेदार को किडनी या लिवर का हिस्सा देना। मृत्यु के बाद अंगदान की इच्छा का पंजीकरण 18 साल से ऊपर का कोई भी व्यक्ति NOTTO के पोर्टल notto.abdm.gov.in पर आधार से मुफ्त कर सकता है। अंग पाने के लिए मरीज का पंजीकरण अस्पताल के ज़रिए राज्य/राष्ट्रीय प्रतीक्षा सूची में होता है।",
  facts: [
    ["संस्था", "NOTTO, स्वास्थ्य मंत्रालय"],
    ["कानून", "मानव अंग और ऊतक प्रत्यारोपण अधिनियम, 1994"],
    ["प्रतिज्ञा", "notto.abdm.gov.in, 18+ उम्र, मुफ्त"],
    ["हेल्पलाइन", "1800-11-4770 (टोल-फ्री, 24x7)"],
  ],
  sections: [
    {
      id: "prakar",
      title: "अंगदान के प्रकार",
      table: {
        head: ["प्रकार", "कैसे होता है", "क्या ज़रूरी"],
        rows: [
          ["मृत्यु के बाद (ब्रेन डेथ)", "अस्पताल में ब्रेन डेथ घोषित होने पर कई अंग (हृदय, फेफड़े, लिवर, किडनी आदि) दान", "परिवार की सहमति; प्रतिज्ञा मददगार"],
          ["सामान्य मृत्यु के बाद", "आंखें (कॉर्निया), त्वचा, हड्डी जैसे कुछ ऊतक", "परिवार की सहमति, समय पर आई बैंक/अस्पताल को सूचना"],
          ["जीवित दान", "किडनी या लिवर का हिस्सा, आम तौर पर नज़दीकी रिश्तेदार को", "अस्पताल की ऑथराइज़ेशन कमेटी की मंज़ूरी"],
        ],
      },
    },
    {
      id: "pratigya",
      title: "मृत्यु के बाद अंगदान का पंजीकरण (प्रतिज्ञा)",
      steps: [
        '<a href="https://notto.abdm.gov.in/" target="_blank" rel="noopener nofollow">notto.abdm.gov.in</a> पर अंगदान प्रतिज्ञा चुनें।',
        "आधार नंबर डालकर मोबाइल पर आए OTP से सत्यापन करें।",
        "सभी अंग/ऊतक या चुने हुए अंग चुनें और परिवार के किसी सदस्य की जानकारी भरें।",
        "प्रतिज्ञा जमा करके डोनर कार्ड/प्रमाण डाउनलोड करें और परिवार को बताएं।",
      ],
      callout: { kind: "info", html: "विस्तार से तरीका हमारी <a href=\"/service/organ-donation-pledge-notto.html\">अंगदान ऑनलाइन प्रतिज्ञा गाइड</a> में है। प्रतिज्ञा के बावजूद मृत्यु के समय परिवार की सहमति ली जाती है।" },
    },
    {
      id: "marij",
      title: "अंग पाने के लिए मरीज का पंजीकरण",
      list: [
        "मरीज का पंजीकरण किसी <strong>मान्यता प्राप्त प्रत्यारोपण अस्पताल</strong> के ज़रिए होता है; डॉक्टर जांच के बाद मरीज को प्रतीक्षा सूची में दर्ज करते हैं।",
        "मृत्यु के बाद मिले अंग राज्य/क्षेत्रीय संगठन (SOTTO/ROTTO) और NOTTO की प्रतीक्षा सूची के नियमों से बांटे जाते हैं। अगस्त 2026 की खबरों के अनुसार NOTTO ने राष्ट्रीय प्रतीक्षा सूची के लिए नया रियल-टाइम पोर्टल और ऐप शुरू किया है।",
        "जीवित दाता से प्रत्यारोपण में रिश्ते के कागज़ और अस्पताल/राज्य की <strong>ऑथराइज़ेशन कमेटी</strong> की मंज़ूरी लगती है।",
      ],
      callout: { kind: "warn", html: "अंगों की खरीद-बिक्री कानूनन अपराध है। <strong>पैसे के बदले अंग दिलाने का दावा करने वाले एजेंटों से दूर रहें</strong> और पुलिस को सूचना दें।" },
    },
  ],
  official: [
    { href: "https://notto.abdm.gov.in/", title: "NOTTO अंगदान प्रतिज्ञा पोर्टल" },
    { href: "https://notto.mohfw.gov.in/", title: "राष्ट्रीय अंग एवं ऊतक प्रत्यारोपण संगठन (NOTTO)", note: "टोल-फ्री 1800-11-4770" },
    { href: "https://dghs.mohfw.gov.in/notto.php", title: "स्वास्थ्य सेवा महानिदेशालय: NOTTO" },
  ],
  faq: [
    { q: "अंगदान के लिए पंजीकरण कहां करें?", a: "मृत्यु के बाद अंगदान की प्रतिज्ञा NOTTO के पोर्टल notto.abdm.gov.in पर आधार और OTP से मुफ्त होती है।" },
    { q: "क्या 18 साल से कम उम्र में पंजीकरण हो सकता है?", a: "ऑनलाइन प्रतिज्ञा 18 साल या उससे ज़्यादा उम्र के लोग कर सकते हैं।" },
    { q: "जीवित रहते हुए कौन अंगदान कर सकता है?", a: "आम तौर पर नज़दीकी रिश्तेदार किडनी या लिवर का हिस्सा दे सकते हैं। हर मामले में अस्पताल/राज्य की ऑथराइज़ेशन कमेटी कागज़ों की जांच करके मंज़ूरी देती है।" },
    { q: "अंग पाने के लिए मरीज कैसे पंजीकरण करे?", a: "मान्यता प्राप्त प्रत्यारोपण अस्पताल में डॉक्टर से संपर्क करें; अस्पताल ही मरीज को प्रतीक्षा सूची में दर्ज करता है।" },
    { q: "NOTTO हेल्पलाइन क्या है?", a: "1800-11-4770, टोल-फ्री, 24 घंटे।" },
  ],
  related: [
    { href: "/service/organ-donation-pledge-notto.html", emoji: "🫀", title: "अंगदान ऑनलाइन प्रतिज्ञा", text: "आधार से प्रतिज्ञा का तरीका" },
    { href: "/service/e-raktkosh-blood-donation.html", emoji: "🩸", title: "ई-रक्तकोष", text: "रक्तदान और ब्लड बैंक" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य ID" },
    { href: "/service/central-govt-health-scheme.html", emoji: "🏛️", title: "CGHS", text: "केंद्रीय कर्मचारियों की स्वास्थ्य योजना" },
  ],
  aside: [
    { href: "https://notto.abdm.gov.in/", label: "🫀 प्रतिज्ञा लें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
