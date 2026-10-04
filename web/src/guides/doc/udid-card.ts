import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): swavlambancard.gov.in (UDID portal, Department
// of Empowerment of Persons with Disabilities — application flow, renewal,
// lost card, e-card download, Aadhaar e-KYC, reassessment and withdrawal
// rules, contact e-mail), depwd.gov.in.
export const udidCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "UDID कार्ड" },
  ],
  docHi: "UDID कार्ड",
  title: "UDID Card Download 2026: यूडीआईडी कार्ड आवेदन, स्टेटस और डाउनलोड | SarkariSewa India",
  description: "UDID कार्ड (विशिष्ट दिव्यांगता पहचान पत्र) 2026: swavlambancard.gov.in पर ऑनलाइन आवेदन, अस्पताल में जांच, स्टेटस ट्रैक, e-UDID कार्ड और दिव्यांगता प्रमाण पत्र डाउनलोड, रिन्यूअल और कार्ड खो जाने पर क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "UDID कार्ड 2026: ऑनलाइन आवेदन, स्टेटस, e-UDID कार्ड डाउनलोड और रिन्यूअल",
  lead: "UDID (Unique Disability ID) कार्ड और दिव्यांगता प्रमाण पत्र भारत सरकार के दिव्यांगजन सशक्तिकरण विभाग के पोर्टल swavlambancard.gov.in से बनते हैं। ऑनलाइन आवेदन के बाद चुने गए अस्पताल में डॉक्टरों का बोर्ड दिव्यांगता का प्रकार और प्रतिशत तय करता है, फिर UDID कार्ड बनता है, जिसे पोर्टल से e-UDID कार्ड के रूप में डाउनलोड भी कर सकते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a>'],
    ["कौन जारी करता है", "राज्य/UT द्वारा अधिसूचित मेडिकल अथॉरिटी"],
    ["आवेदन के तरीके", "ऑनलाइन, कैंप, CMO कार्यालय"],
    ["ईमेल", "disability-udid@gov.in"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "UDID कार्ड क्या है और क्यों ज़रूरी है",
      intro: "UDID परियोजना देश के सभी दिव्यांगजनों का एक राष्ट्रीय डेटाबेस बनाने के लिए चलाई जा रही है। इसके तहत राज्य/केंद्र शासित प्रदेश की अधिसूचित मेडिकल अथॉरिटी दिव्यांगता प्रमाण पत्र और UDID कार्ड जारी करती है।",
      list: [
        "<strong>एक कार्ड, पूरे देश में मान्य:</strong> अलग-अलग जगह बार-बार प्रमाण पत्र दिखाने की ज़रूरत कम होती है।",
        "<strong>सरकारी योजनाओं का लाभ:</strong> दिव्यांग पेंशन, छात्रवृत्ति, आरक्षण, रेल/बस किराए में छूट और उपकरण सहायता जैसी योजनाओं में UDID मांगा जाता है।",
        "<strong>डेटा साझा करने की सहमति:</strong> सरकारी सेवाओं के लिए पोर्टल के PwD Dashboard में लॉगिन करके UDID डेटा साझा करने की सहमति दें; यह सहमति कभी भी वापस ली जा सकती है।",
      ],
    },
    {
      id: "avedan",
      title: "UDID कार्ड के लिए ऑनलाइन आवेदन कैसे करें",
      steps: [
        '<a href="https://swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a> पर <strong>"Apply for Disability Certificate & UDID Card"</strong> चुनें।',
        "<strong>आधार नंबर डालें</strong> और आधार OTP से e-KYC की सहमति दें। आधार नहीं बना है तो <strong>आधार एनरोलमेंट स्लिप</strong> अपलोड करके आवेदन कर सकते हैं।",
        "<strong>व्यक्तिगत जानकारी और पता भरें</strong> (पता आधार के अनुसार है या नहीं, यह भी चुनना होता है)।",
        "<strong>दिव्यांगता का विवरण भरें:</strong> प्रकार, जन्म से है या नहीं, किस कारण से, कब से; पहले से दिव्यांगता प्रमाण पत्र है तो उसका नंबर, तारीख और कॉपी अपलोड करें।",
        "<strong>अस्पताल चुनें:</strong> जांच/प्रमाण पत्र के लिए अस्पताल; इलाज किसी दूसरे राज्य/ज़िले में चल रहा है तो वह भी चुन सकते हैं।",
        "<strong>सबमिट करें</strong> और आवेदन नंबर नोट करें। पोर्टल से आवेदन की कॉपी डाउनलोड कर लें।",
      ],
      callout: { kind: "info", html: "<strong>ध्यान दें:</strong> 8 साल से कम उम्र के बच्चे के लिए Specific Learning Disability का आवेदन नहीं होता, और हीमोफीलिया की श्रेणी सिर्फ पुरुष आवेदकों के लिए है (पोर्टल के नियम)।" },
    },
    {
      id: "aage-kya",
      title: "आवेदन के बाद: अस्पताल में जांच से कार्ड तक",
      steps: [
        '<strong>स्टेटस देखें:</strong> पोर्टल पर "Track Application" में आवेदन नंबर डालें। जब स्टेटस "Submitted" दिखे, तब आगे बढ़ें।',
        "<strong>अस्पताल जाएं:</strong> आवेदन में चुने गए अस्पताल के UDID/दिव्यांगता प्रमाणन विभाग में जाकर आवेदन का सत्यापन करवाएं; कोई सुधार हो तो वहीं करवाएं।",
        "<strong>विशेषज्ञ डॉक्टरों द्वारा जांच:</strong> मेडिकल बोर्ड दिव्यांगता का प्रकार और प्रतिशत तय करता है और प्रमाण पत्र को सत्यापित करता है।",
        "<strong>कार्ड बनना और भेजा जाना:</strong> मेडिकल बोर्ड के आकलन के आधार पर मेडिकल अथॉरिटी UDID कार्ड और दिव्यांगता प्रमाण पत्र बनाती है, और कार्ड डाक से भेजा जाता है।",
      ],
      callout: { kind: "warn", html: "<strong>आवेदन वापस लेने से पहले सोचें:</strong> इस चरण पर आवेदन वापस लेने (withdraw) के बाद <strong>180 दिन तक दोबारा आवेदन नहीं</strong> कर सकते।" },
    },
    {
      id: "download",
      title: "e-UDID कार्ड और दिव्यांगता प्रमाण पत्र डाउनलोड",
      steps: [
        'पोर्टल पर <strong>"Download your e-Disability Card & e-UDID Card"</strong> चुनें।',
        "<strong>एनरोलमेंट नंबर या UDID नंबर</strong> डालें। अगर नंबर आधार से जुड़ा नहीं है तो पोर्टल आधार नंबर मांगता है।",
        "<strong>e-UDID कार्ड</strong> व <strong>e-दिव्यांगता प्रमाण पत्र</strong> PDF डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "डाक से कार्ड आने में समय लगे तो e-UDID कार्ड और e-प्रमाण पत्र की प्रिंट कॉपी अपने पास रखें।" },
    },
    {
      id: "renewal",
      title: "रिन्यूअल, कार्ड खो जाना और जानकारी में सुधार",
      table: {
        head: ["स्थिति", "क्या करें"],
        rows: [
          ["प्रमाण पत्र/कार्ड की अवधि खत्म हो गई", 'पोर्टल पर <strong>"Apply for Disability Certificate & UDID Card Renewal"</strong> से रिन्यूअल का आवेदन करें'],
          ["कार्ड खो गया या डाक से नहीं मिला", "पोर्टल पर \"Lost Card / Card Not Received\" का अनुरोध करें; अनुरोध जमा होने के बाद कार्ड दोबारा भेजा जाता है"],
          ["दिव्यांगता या दूसरी जानकारी गलत है", "नए UDID कार्ड के लिए \"Disability / Other Detail is incorrect\" विकल्प चुनें"],
          ["पता, लिंग या अभिभावक का नाम बदलना", "आधार के अनुसार अपडेट करें; अपडेट के बाद नई जानकारी वाला प्रमाण पत्र डाउनलोड करें"],
          ["मोबाइल नंबर बदलना", "पोर्टल से अपडेट करें; इससे UDID कार्ड पर असर नहीं पड़ता"],
          ["दोबारा जांच (reassessment)", "UDID कार्ड जारी होने के <strong>कम से कम 3 साल बाद</strong> दोबारा आकलन के लिए आवेदन कर सकते हैं"],
          ["आवेदन रिजेक्ट या निष्क्रिय हो गया", "नए आवेदन में यह विकल्प चुनें और फिर से आवेदन करें"],
        ],
      },
    },
    {
      id: "madad",
      title: "मदद कहां मिलेगी",
      list: [
        '<strong>अपनी मेडिकल अथॉरिटी जानें:</strong> पोर्टल पर राज्य और ज़िला चुनकर देखें कि आपके इलाके में कौन सा अस्पताल/CMO कार्यालय UDID जारी करता है।',
        "<strong>कैंप:</strong> कई ज़िलों में UDID कैंप लगते हैं; अपने CMO कार्यालय या ज़िला दिव्यांगजन सशक्तिकरण अधिकारी से पूछें।",
        "<strong>चैटबॉट:</strong> पोर्टल पर \"Divya\" वॉइसबॉट और चैटबॉट से सवाल पूछ सकते हैं।",
        '<strong>ईमेल:</strong> disability-udid@gov.in; पोर्टल पर हर राज्य के UDID नोडल अधिकारी/कोऑर्डिनेटर के संपर्क भी दिए गए हैं।',
        '<strong>ऑनलाइन फॉर्म में मदद:</strong> <a href="/tools/csc-locator.html">नज़दीकी CSC</a> पर आवेदन भरवा सकते हैं।',
      ],
    },
  ],
  official: [
    { href: "https://swavlambancard.gov.in/", title: "UDID पोर्टल: आवेदन, स्टेटस, e-UDID डाउनलोड" },
    { href: "https://depwd.gov.in/", title: "दिव्यांगजन सशक्तिकरण विभाग, भारत सरकार" },
    { href: "https://data.gov.in/catalog/unique-disability-id-udid", title: "UDID के आंकड़े (data.gov.in)" },
  ],
  faq: [
    { q: "UDID कार्ड कैसे डाउनलोड करें?", a: "swavlambancard.gov.in पर \"Download your e-Disability Card & e-UDID Card\" चुनें, एनरोलमेंट नंबर या UDID नंबर डालें और e-UDID कार्ड व e-दिव्यांगता प्रमाण पत्र PDF डाउनलोड करें।" },
    { q: "UDID कार्ड का स्टेटस कैसे देखें?", a: "पोर्टल पर Track Application में आवेदन नंबर डालें। स्टेटस \"Submitted\" हो तो चुने गए अस्पताल के UDID विभाग में जाकर सत्यापन और जांच करवाएं।" },
    { q: "UDID कार्ड के लिए कौन से कागज़ चाहिए?", a: "आधार (या आधार एनरोलमेंट स्लिप), फोटो, पहचान का प्रमाण और पत्राचार के पते का प्रमाण, और अगर पहले से दिव्यांगता प्रमाण पत्र है तो उसकी कॉपी, नंबर और जारी होने की तारीख।" },
    { q: "UDID कार्ड बनने में कितना समय लगता है?", a: "आवेदन के बाद अस्पताल में सत्यापन और मेडिकल बोर्ड की जांच होती है; समय अस्पताल के हिसाब से अलग होता है। पोर्टल पर हर ज़िले/अस्पताल की लंबित आवेदनों (pendency) की रिपोर्ट भी देखी जा सकती है।" },
    { q: "UDID कार्ड खो जाए तो क्या करें?", a: "पोर्टल पर Lost Card / Card Not Received का अनुरोध करें; अनुरोध के बाद कार्ड दोबारा भेजा जाता है। तब तक e-UDID कार्ड डाउनलोड करके इस्तेमाल करें।" },
    { q: "क्या दिव्यांगता का दोबारा आकलन हो सकता है?", a: "हां, UDID कार्ड जारी होने के कम से कम 3 साल बाद दोबारा आकलन (reassessment) के लिए आवेदन किया जा सकता है।" },
  ],
  related: [
    { href: "/service/disability-certificate.html", emoji: "♿", title: "दिव्यांगता प्रमाण पत्र", text: "प्रमाण पत्र की पूरी जानकारी" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "e-KYC के लिए आधार अपडेट" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/tools/eligibility-checker.html", emoji: "✅", title: "पात्रता जांच", text: "आप किन योजनाओं के लिए पात्र हैं" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन फॉर्म भरवाने के लिए" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "अपलोड के लिए सही साइज़" },
  ],
  aside: [
    { href: "https://swavlambancard.gov.in/", label: "♿ UDID पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
