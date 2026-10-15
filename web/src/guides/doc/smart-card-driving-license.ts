import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): sarathi.parivahan.gov.in (MoRTH Sarathi
// portal: state selection, "Services on DL", application status, fee
// payment), transport.uk.gov.in/fees-structrure/ (CMVR Rule 32 fee table per
// MoRTH notification 29.12.2016: duplicate DL Rs 200, change of particulars
// Rs 200, DL in smart card form Rs 200 extra), MoRTH 2019 amendment of the
// Central Motor Vehicles Rules for a uniform card-format DL/RC with optional
// chip/QR/NFC (The Quint, Hindustan Times 2019 reports), and the same research
// as web/src/guides/doc/driving-licence.ts. Names of the Sarathi menu used for
// paper-to-card conversion differ by state, so described generally; state
// service/postage charges and timelines left out.
export const smartCardDrivingLicense: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "स्मार्ट कार्ड DL" },
  ],
  docHi: "स्मार्ट कार्ड DL",
  title: "स्मार्ट कार्ड ड्राइविंग लाइसेंस (Smart Card DL)",
  description: "पुराना कागज़ी/बुकलेट ड्राइविंग लाइसेंस स्मार्ट कार्ड DL में कैसे बदलें: Sarathi पोर्टल पर आवेदन, केंद्रीय नियम की फीस, ज़रूरी कागज़ और स्टेटस।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "स्मार्ट कार्ड ड्राइविंग लाइसेंस: पुराना कागज़ी DL कार्ड में कैसे बदलें",
  lead: "अब ज़्यादातर राज्य ड्राइविंग लाइसेंस प्लास्टिक के <strong>स्मार्ट कार्ड</strong> पर देते हैं, जिसमें चिप या QR कोड हो सकता है। पुराना कागज़ी या बुकलेट DL वैध रहता है जब तक उसकी अवधि बाकी है, पर उसे कार्ड में बदलवाने के लिए केंद्र सरकार के <strong>Sarathi पोर्टल</strong> पर अपना राज्य चुनकर \"Services on DL\" से आवेदन होता है। केंद्रीय नियम में स्मार्ट कार्ड का शुल्क ₹200 अतिरिक्त है; राज्य सेवा/डाक शुल्क अलग जोड़ सकते हैं।",
  facts: [
    ["कौन जारी करता है", "राज्य परिवहन विभाग (RTO)"],
    ["आवेदन", "sarathi.parivahan.gov.in (राज्य चुनकर)"],
    ["स्मार्ट कार्ड शुल्क", "₹200 अतिरिक्त (केंद्रीय नियम 32)"],
    ["डिजिटल कॉपी", "DigiLocker / mParivahan"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "स्मार्ट कार्ड DL क्या है",
      list: [
        "<strong>कार्ड फॉर्मेट:</strong> 2019 में केंद्रीय मोटर वाहन नियमों में बदलाव करके पूरे देश में DL और RC के लिए एक जैसा कार्ड फॉर्मेट तय किया गया, जिसमें चिप, QR कोड या NFC का विकल्प है।",
        "<strong>कागज़ी DL भी वैध:</strong> पुराना DL अपनी वैधता तक मान्य है। कार्ड में बदलना ज़्यादातर तब ज़रूरी होता है जब DL फट गया हो, पढ़ा न जाए, या नवीनीकरण/पता बदलना हो।",
        "<strong>नंबर ऑनलाइन है या नहीं:</strong> पुराने DL का रिकॉर्ड राष्ट्रीय डेटाबेस (Sarathi) में न हो तो पहले RTO में उसे ऑनलाइन दर्ज (बैकलॉग एंट्री) करवाना पड़ता है।",
      ],
    },
    {
      id: "kaise",
      title: "कागज़ी DL को स्मार्ट कार्ड में कैसे बदलें",
      steps: [
        '<strong>Sarathi खोलें:</strong> <a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noopener nofollow">sarathi.parivahan.gov.in</a> पर अपना राज्य चुनें और "Driving Licence" में <strong>Services on DL</strong> चुनें।',
        "<strong>DL विवरण डालें:</strong> DL नंबर और जन्मतिथि डालें। रिकॉर्ड न मिले तो RTO में पुराना DL दिखाकर उसका रिकॉर्ड ऑनलाइन दर्ज करवाएं।",
        "<strong>सेवा चुनें:</strong> राज्य के अनुसार \"Replacement of DL\", \"Duplicate DL\" या नवीनीकरण/पता बदलने की सेवा; इनके साथ कार्ड वाला DL बनता है।",
        "<strong>कागज़ अपलोड करें:</strong> पुराना DL, पहचान व पते का प्रमाण (जैसे आधार), फोटो और हस्ताक्षर; 40 साल से ऊपर नवीनीकरण में मेडिकल फॉर्म 1A।",
        "<strong>फीस भरें</strong> और ज़रूरत हो तो RTO का स्लॉट बुक करें। कार्ड डाक से या RTO से मिलता है।",
      ],
      callout: { kind: "ok", html: 'खुद न कर पाएं तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> से आवेदन करवा सकते हैं। पूरी प्रक्रिया के लिए हमारी <a href="/service/driving-licence.html">ड्राइविंग लाइसेंस गाइड</a> देखें।' },
    },
    {
      id: "fees",
      title: "फीस (केंद्रीय नियम 32)",
      intro: "केंद्रीय मोटर वाहन नियम 32 (MoRTH अधिसूचना 29.12.2016) के अनुसार:",
      table: {
        head: ["सेवा", "फीस"],
        rows: [
          ["डुप्लीकेट DL", "₹200"],
          ["DL नवीनीकरण", "₹200"],
          ["DL में पता या दूसरा विवरण बदलना", "₹200"],
          ["स्मार्ट कार्ड वाला DL", "₹200 अतिरिक्त"],
        ],
      },
      callout: { kind: "info", html: "राज्य अपना सेवा शुल्क, डाक शुल्क या कार्ड शुल्क अलग जोड़ सकते हैं। सही कुल राशि Sarathi पर फीस भरते समय दिखती है।" },
    },
    {
      id: "digital",
      title: "DigiLocker और mParivahan में DL",
      list: [
        "Sarathi में दर्ज DL को DigiLocker या mParivahan ऐप में जोड़ा जा सकता है; ट्रैफिक जांच में यह डिजिटल कॉपी दिखाई जा सकती है।",
        "DigiLocker में DL न आए तो आम तौर पर उसका रिकॉर्ड Sarathi में दर्ज नहीं है या नंबर का फॉर्मेट अलग है; RTO में रिकॉर्ड ठीक करवाएं।",
      ],
    },
  ],
  official: [
    { href: "https://sarathi.parivahan.gov.in/", title: "Sarathi पोर्टल (सड़क परिवहन एवं राजमार्ग मंत्रालय)", note: "DL सेवाएं, फीस, स्टेटस" },
    { href: "https://parivahan.gov.in/", title: "Parivahan Sewa" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker" },
  ],
  faq: [
    { q: "क्या पुराना कागज़ी DL अब मान्य नहीं है?", a: "पुराना DL अपनी वैधता तक मान्य है। फिर भी उसका रिकॉर्ड Sarathi में ऑनलाइन होना चाहिए, ताकि नवीनीकरण, DigiLocker और जांच में दिक्कत न हो।" },
    { q: "स्मार्ट कार्ड DL की फीस कितनी है?", a: "केंद्रीय नियम 32 में स्मार्ट कार्ड DL के लिए ₹200 अतिरिक्त है, साथ में जिस सेवा (डुप्लीकेट/नवीनीकरण/विवरण बदलना) से आवेदन करें उसकी ₹200 फीस। राज्य शुल्क अलग हो सकता है।" },
    { q: "Sarathi पर मेरा DL नहीं मिल रहा, क्या करूं?", a: "पुराना DL लेकर उसी RTO जाएं जहां से बना था और उसका रिकॉर्ड ऑनलाइन (बैकलॉग) दर्ज करवाएं। उसके बाद ऑनलाइन सेवाएं मिलेंगी।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "Sarathi पर अपना राज्य चुनकर Application Status में आवेदन संख्या और जन्मतिथि डालें।" },
  ],
  related: [
    { href: "/service/driving-licence.html", emoji: "🚗", title: "ड्राइविंग लाइसेंस", text: "LL, टेस्ट, नवीनीकरण की पूरी गाइड" },
    { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "पहचान और पते का प्रमाण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://sarathi.parivahan.gov.in/", label: "🚗 Sarathi पोर्टल" },
    { href: "/service/driving-licence.html", label: "📘 DL की पूरी गाइड" },
  ],
};
