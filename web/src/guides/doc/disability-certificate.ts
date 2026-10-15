import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Rights of Persons with Disabilities Act 2016
// (21 specified disabilities; "benchmark disability" = not less than 40% of a
// specified disability certified by the certifying authority; s.34 4%
// reservation in government posts split across categories; s.32 5% seats in
// government/aided higher education) as summarised by Drishti IAS / Legacy IAS;
// swavlambancard.gov.in (UDID portal of the Department of Empowerment of
// Persons with Disabilities: online application, medical authority/board
// assessment, e-UDID download, renewal, lost card, reassessment after 3 years,
// 180-day bar after withdrawal, disability-udid@gov.in — as verified for
// udid-card.ts on 4 Oct 2026). The 2024 assessment-guideline changes and
// certificate validity rules were not verified and are left out. Old
// description saying the Ministry itself issues the certificate was corrected.
export const disabilityCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "दिव्यांगता प्रमाण पत्र" },
  ],
  docHi: "दिव्यांगता प्रमाण पत्र",
  title: "दिव्यांगता प्रमाण पत्र (UDID) 2026",
  description: "दिव्यांगता प्रमाण पत्र और UDID कार्ड: 21 तरह की दिव्यांगता, 40% बेंचमार्क का मतलब, swavlambancard.gov.in पर आवेदन, मेडिकल बोर्ड जांच, आरक्षण व योजनाओं में उपयोग।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दिव्यांगता प्रमाण पत्र (Disability Certificate) और UDID कार्ड: कौन पात्र, कैसे बनता है, कहां काम आता है",
  lead: "दिव्यांगता प्रमाण पत्र राज्य/केंद्र शासित प्रदेश की अधिसूचित मेडिकल अथॉरिटी (सरकारी अस्पताल का मेडिकल बोर्ड या CMO) जांच के बाद देती है। अब यह प्रमाण पत्र और UDID कार्ड दोनों केंद्र के UDID पोर्टल swavlambancard.gov.in पर ऑनलाइन आवेदन से बनते हैं। दिव्यांगजन अधिकार अधिनियम, 2016 में 21 तरह की दिव्यांगता शामिल हैं, और आरक्षण जैसे ज़्यादातर लाभों के लिए कम से कम 40% दिव्यांगता (बेंचमार्क) चाहिए।",
  facts: [
    ["कानून", "दिव्यांगजन अधिकार अधिनियम, 2016"],
    ["दिव्यांगता के प्रकार", "21"],
    ["बेंचमार्क दिव्यांगता", "40% या ज़्यादा"],
    ["आवेदन", '<a href="https://swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a>'],
  ],
  sections: [
    {
      id: "prakar",
      title: "कौन-कौन सी दिव्यांगता शामिल हैं",
      intro: "2016 के कानून ने सूची 7 से बढ़ाकर 21 कर दी। मुख्य समूह:",
      list: [
        "<strong>चलने-फिरने से जुड़ी:</strong> चलन दिव्यांगता, कुष्ठ रोग से ठीक हुए व्यक्ति, सेरेब्रल पाल्सी, बौनापन, मांसपेशी दुर्विकास (मस्कुलर डिस्ट्रॉफी), तेज़ाब हमले के पीड़ित",
        "<strong>देखने-सुनने से जुड़ी:</strong> अंधता, कम दृष्टि, बधिर और कम सुनना, बोलने-भाषा की दिव्यांगता",
        "<strong>बौद्धिक और मानसिक:</strong> बौद्धिक दिव्यांगता, विशिष्ट अधिगम दिव्यांगता (Specific Learning Disability), ऑटिज़्म, मानसिक बीमारी",
        "<strong>तंत्रिका और रक्त से जुड़ी:</strong> मल्टीपल स्क्लेरोसिस, पार्किंसन रोग, हीमोफीलिया, थैलेसीमिया, सिकल सेल रोग",
        "<strong>बहु-दिव्यांगता</strong> (एक से ज़्यादा दिव्यांगता, बहरापन-अंधता सहित)",
      ],
      callout: { kind: "info", html: "<strong>बेंचमार्क दिव्यांगता:</strong> किसी तय दिव्यांगता का प्रमाणित स्तर <strong>40% या उससे ज़्यादा</strong> हो। सरकारी नौकरी व उच्च शिक्षा में आरक्षण जैसे लाभ इसी पर मिलते हैं।" },
    },
    {
      id: "avedan",
      title: "प्रमाण पत्र के लिए आवेदन कैसे करें",
      steps: [
        '<a href="https://swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a> पर <strong>"Apply for Disability Certificate & UDID Card"</strong> चुनें।',
        "<strong>आधार से e-KYC</strong> करें (आधार न हो तो एनरोलमेंट स्लिप से भी आवेदन होता है), फिर व्यक्तिगत जानकारी और पता भरें।",
        "<strong>दिव्यांगता का विवरण</strong> भरें और पुराना प्रमाण पत्र हो तो उसकी कॉपी लगाएं।",
        "<strong>अस्पताल चुनें</strong> जहां जांच करानी है, सबमिट करें और आवेदन नंबर नोट करें।",
        "<strong>अस्पताल जाएं:</strong> तय अस्पताल के UDID/दिव्यांगता विभाग में सत्यापन कराएं; मेडिकल बोर्ड जांच करके दिव्यांगता का प्रकार और प्रतिशत तय करता है।",
        "<strong>प्रमाण पत्र और कार्ड:</strong> मंज़ूरी के बाद e-दिव्यांगता प्रमाण पत्र और e-UDID कार्ड पोर्टल से डाउनलोड होते हैं; कार्ड डाक से भी आता है।",
      ],
      callout: { kind: "ok", html: 'पूरी प्रक्रिया, स्टेटस, डाउनलोड और रिन्यूअल के लिए हमारी <a href="/service/udid-disability-card-download.html">UDID कार्ड गाइड</a> देखें।' },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड या आधार एनरोलमेंट स्लिप",
        "हाल की पासपोर्ट साइज़ फोटो",
        "पते का प्रमाण",
        "इलाज के पुराने कागज़/रिपोर्ट (जांच में मदद करते हैं)",
        "पहले से बना दिव्यांगता प्रमाण पत्र हो तो उसकी कॉपी, नंबर और तारीख",
      ],
    },
    {
      id: "labh",
      title: "प्रमाण पत्र कहां काम आता है",
      table: {
        head: ["लाभ", "क्या मिलता है"],
        rows: [
          ["सरकारी नौकरी", "बेंचमार्क दिव्यांगता वालों के लिए कुल 4% आरक्षण (अलग-अलग दिव्यांगता समूहों में बंटा)"],
          ["उच्च शिक्षा", "सरकारी और सरकारी सहायता प्राप्त उच्च शिक्षा संस्थानों में कम से कम 5% सीटें"],
          ["पेंशन और योजनाएं", "राज्य की दिव्यांग पेंशन, केंद्र की इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन, उपकरण सहायता"],
          ["छात्रवृत्ति", "दिव्यांग छात्रों की छात्रवृत्ति (जैसे AICTE की सक्षम छात्रवृत्ति)"],
          ["यात्रा और कर", "रेल/बस किराए में छूट (नियम अनुसार) और आयकर में तय कटौती"],
        ],
      },
      html: "<p>हर योजना की अपनी शर्तें (प्रतिशत, आय, उम्र) होती हैं; आवेदन से पहले योजना के नियम पढ़ें।</p>",
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      list: [
        "<strong>प्रतिशत कम लगा:</strong> UDID कार्ड जारी होने के कम से कम 3 साल बाद दोबारा आकलन (reassessment) का आवेदन कर सकते हैं; उससे पहले राज्य की अपील व्यवस्था के बारे में CMO/ज़िला दिव्यांगजन अधिकारी से पूछें।",
        "<strong>आवेदन वापस लिया:</strong> सत्यापन के चरण पर आवेदन वापस लेने के बाद 180 दिन तक दोबारा आवेदन नहीं होता।",
        "<strong>कार्ड डाक से नहीं आया:</strong> पोर्टल पर \"Lost Card / Card Not Received\" अनुरोध करें और तब तक e-UDID इस्तेमाल करें।",
        "<strong>मदद:</strong> disability-udid@gov.in, या <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> पर फॉर्म भरवाएं।",
      ],
    },
  ],
  official: [
    { href: "https://swavlambancard.gov.in/", title: "UDID पोर्टल: दिव्यांगता प्रमाण पत्र और UDID कार्ड", note: "ईमेल: disability-udid@gov.in" },
    { href: "https://depwd.gov.in/", title: "दिव्यांगजन सशक्तिकरण विभाग, भारत सरकार" },
  ],
  faq: [
    { q: "दिव्यांगता प्रमाण पत्र कौन बनाता है?", a: "राज्य/केंद्र शासित प्रदेश की अधिसूचित मेडिकल अथॉरिटी, यानी सरकारी अस्पताल का मेडिकल बोर्ड या CMO कार्यालय। आवेदन UDID पोर्टल swavlambancard.gov.in पर होता है।" },
    { q: "40% दिव्यांगता का क्या मतलब है?", a: "दिव्यांगजन अधिकार अधिनियम, 2016 में 40% या उससे ज़्यादा प्रमाणित दिव्यांगता को \"बेंचमार्क दिव्यांगता\" कहा गया है। आरक्षण और कई योजनाओं के लिए यही न्यूनतम सीमा है।" },
    { q: "दिव्यांगता प्रमाण पत्र और UDID कार्ड में क्या फर्क है?", a: "प्रमाण पत्र में दिव्यांगता का प्रकार और प्रतिशत लिखा होता है; UDID कार्ड उसी आधार पर बना पूरे देश में मान्य पहचान पत्र है। दोनों एक ही आवेदन से UDID पोर्टल पर बनते हैं।" },
    { q: "क्या दिव्यांगता प्रमाण पत्र के लिए फीस लगती है?", a: "हमने पोर्टल पर कोई राष्ट्रीय फीस तय नहीं देखी। अस्पताल में जांच या कार्ड का कोई शुल्क हो तो वह राज्य के नियम पर निर्भर है; अपने CMO कार्यालय से पूछें।" },
    { q: "कितनी तरह की दिव्यांगता के लिए प्रमाण पत्र बनता है?", a: "दिव्यांगजन अधिकार अधिनियम, 2016 में दी गई 21 तरह की दिव्यांगता के लिए, जिनमें थैलेसीमिया, हीमोफीलिया, सिकल सेल रोग, ऑटिज़्म और तेज़ाब हमले के पीड़ित भी शामिल हैं।" },
  ],
  related: [
    { href: "/service/udid-disability-card-download.html", emoji: "♿", title: "UDID कार्ड डाउनलोड", text: "आवेदन, स्टेटस और e-UDID" },
    { href: "/service/saksham-scholarship-specially-abled.html", emoji: "🎓", title: "सक्षम छात्रवृत्ति", text: "दिव्यांग छात्रों के लिए" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "e-KYC के लिए आधार अपडेट" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन फॉर्म भरवाने के लिए" },
  ],
  aside: [
    { href: "https://swavlambancard.gov.in/", label: "♿ UDID पोर्टल खोलें" },
    { href: "/service/udid-disability-card-download.html", label: "📥 UDID कार्ड गाइड" },
  ],
};
