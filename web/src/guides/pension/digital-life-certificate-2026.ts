import type { DocGuide } from "../doc/types";

// Sources (checked 20 Nov 2026):
// - newsonair.gov.in (5 Nov 2026): 5th nationwide DLC campaign by the Dept of
//   Pension & Pensioners' Welfare, month-long, launched by MoS Jitendra Singh;
//   face authentication via the Jeevan Pramaan app; special focus on 80+,
//   women and ill pensioners; doorstep service; partners PSU banks, IPPB, UIDAI.
// - upstox.com: campaign 1-30 Nov 2026; steps (Jeevan Pramaan app + AadhaarFaceRD
//   app, Aadhaar and pension details, face capture, Pramaan ID); no fee mentioned;
//   UPS pensioners must submit annually by 30 Nov.
// - patrika.com (15 May 2026): Bihar social-security pensioners had a 30 May 2026
//   life-certification deadline, free at CSC/panchayat camps (state-specific).
// Not confirmed: exact number of cities; state pension schemes' own deadlines.
export const digitalLifeCertificate2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पेंशन", href: "/states/index.html" },
    { label: "डिजिटल लाइफ सर्टिफिकेट 2026" },
  ],
  docHi: "डिजिटल लाइफ सर्टिफिकेट 2026",
  title: "डिजिटल लाइफ सर्टिफिकेट 2026: घर बैठे जीवन प्रमाण पत्र, 30 नवंबर तक अभियान",
  description: "पेंशनरों के लिए 5वां डिजिटल लाइफ सर्टिफिकेट अभियान 1–30 नवंबर 2026। जीवन प्रमाण ऐप से फेस ऑथेंटिकेशन के स्टेप, ज़रूरी चीज़ें और पेंशन रुकने से बचने के तरीके।",
  published: "2026-11-20",
  modified: "2026-11-20",
  verified: "20 नवंबर 2026",
  h1: "डिजिटल लाइफ सर्टिफिकेट 2026: पेंशनर फोन से जीवन प्रमाण पत्र कैसे जमा करें",
  lead: "<strong>पेंशन एवं पेंशनभोगी कल्याण विभाग का 5वां राष्ट्रव्यापी डिजिटल लाइफ सर्टिफिकेट (DLC) अभियान नवंबर 2026 में चल रहा है।</strong> रिपोर्टों के अनुसार यह 1 से 30 नवंबर तक है। पेंशनर <strong>जीवन प्रमाण ऐप</strong> से चेहरे की पहचान (face authentication) के ज़रिए घर बैठे जीवन प्रमाण पत्र बना सकते हैं। 80 साल से ऊपर, महिला और बीमार पेंशनरों पर खास ज़ोर है, और जो बाहर नहीं जा सकते उनके लिए घर पर सेवा की बात कही गई है।",
  facts: [
    ["अभियान", "1–30 नवंबर 2026 (5वां राष्ट्रव्यापी)"],
    ["तरीका", "जीवन प्रमाण ऐप + चेहरे की पहचान"],
    ["शुल्क", "किसी रिपोर्ट में नहीं बताया गया"],
    ["किसके लिए", "पेंशनर, खासकर 80+ और असहाय"],
  ],
  notice: "यह पेज केंद्र सरकार के पेंशनरों के अभियान की खबरों पर आधारित है। राज्य की सामाजिक सुरक्षा पेंशन (वृद्धा, विधवा, दिव्यांग) की जीवन प्रमाणीकरण तारीखें हर राज्य की अलग होती हैं, उन्हें अपने राज्य के विभाग से पूछें। हम सरकारी वेबसाइट नहीं हैं।",
  sections: [
    {
      id: "aage",
      title: "पेंशन से जुड़ी बाकी सेवाएं",
      intro: "पेंशन और बुजुर्गों से जुड़ी ये चीज़ें अक्सर साथ में काम आती हैं:",
      list: [
        "<a href=\"/arzi/pension-not-received-complaint.html\">पेंशन न मिलने की शिकायत</a> – तैयार फॉर्मेट",
        "<a href=\"/arzi/bank-kyc-update-application.html\">बैंक KYC अपडेट आवेदन</a> और <a href=\"/arzi/mobile-number-change-bank-application.html\">बैंक में मोबाइल नंबर बदलने का आवेदन</a>",
        "<a href=\"/arzi/old-age-pension-application-letter.html\">वृद्धा पेंशन आवेदन पत्र</a> और <a href=\"/arzi/widow-pension-application-letter.html\">विधवा पेंशन आवेदन पत्र</a>",
        "<a href=\"/states/uttar-pradesh-old-age-pension.html\">UP वृद्धा पेंशन</a> और <a href=\"/states/bihar-old-age-pension.html\">बिहार वृद्धजन पेंशन</a>",
        "<a href=\"/tools/csc-locator.html\">नज़दीकी CSC खोजें</a> – मदद के लिए",
        "<a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a>",
      ],
    },
    {
      id: "steps",
      title: "फेस ऑथेंटिकेशन से DLC कैसे बनाएं",
      intro: "रिपोर्टों में बताई गई प्रक्रिया:",
      steps: [
        "एंड्रॉयड या iOS फोन में <strong>जीवन प्रमाण</strong> ऐप इंस्टॉल करें।",
        "फेस ऑथेंटिकेशन के लिए <strong>AadhaarFaceRD</strong> ऐप भी इंस्टॉल करें।",
        "ऑपरेटर और पेंशनर की पहचान पूरी करें।",
        "आधार और पेंशन से जुड़ी जानकारी भरें।",
        "ऑन-स्क्रीन निर्देश के अनुसार फोन के कैमरे से चेहरा कैप्चर करें।",
        "सफल होने पर मिलने वाला <strong>प्रमाण ID</strong> संभालकर रखें; उससे प्रमाण पत्र देख और डाउनलोड कर सकते हैं।",
      ],
      callout: { kind: "info", html: "अलग फिंगरप्रिंट स्कैनर की ज़रूरत नहीं बताई गई। फोन में अच्छी रोशनी रखें और कैमरा साफ़ रखें। ऐप के नाम और स्टेप ऐप स्टोर पर देखकर मिला लें, क्योंकि ऐप का रूप बदल सकता है।" },
    },
    {
      id: "zaroori",
      title: "क्या-क्या चाहिए",
      list: [
        "अच्छे कैमरे वाला एंड्रॉयड या iOS स्मार्टफोन और इंटरनेट",
        "आधार नंबर",
        "पेंशन से जुड़ी जानकारी (PPO नंबर, बैंक/विभाग का नाम आदि)",
        "आधार से जुड़ा मोबाइल नंबर (OTP के लिए)",
      ],
    },
    {
      id: "madad",
      title: "फोन से न हो तो क्या करें",
      list: [
        "अभियान में सार्वजनिक क्षेत्र के बैंक, इंडिया पोस्ट पेमेंट्स बैंक और UIDAI शामिल बताए गए हैं; अपनी बैंक शाखा या डाकघर से पूछें।",
        "जो पेंशनर बाहर नहीं जा सकते उनके लिए घर पर सेवा की सुविधा बताई गई है।",
        "<a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> पर भी मदद मिल सकती है।",
        "UPS पेंशनरों के लिए रिपोर्ट में हर साल 30 नवंबर तक DLC जमा करने की बात है; वे UPS जीवन सेतु सुविधा इस्तेमाल कर सकते हैं।",
      ],
    },
    {
      id: "rajya",
      title: "राज्य की पेंशन (वृद्धा, विधवा, दिव्यांग) का क्या?",
      intro: "ये अभियान केंद्र के विभाग का है। राज्यों की सामाजिक सुरक्षा पेंशन में जीवन प्रमाणीकरण की अपनी व्यवस्था और तारीख होती है। जैसे बिहार में इस साल 30 मई 2026 तक प्रमाणीकरण कराने को कहा गया था और पंचायत शिविर व CSC पर यह निःशुल्क बताया गया। अपने राज्य की पेंशन के लिए अपने समाज कल्याण कार्यालय से पूछें और पेंशन न आए तो <a href=\"/arzi/pension-not-received-complaint.html\">शिकायत पत्र</a> दें।",
    },
  ],
  official: [],
  faq: [
    { q: "डिजिटल लाइफ सर्टिफिकेट अभियान कब तक है?", a: "रिपोर्टों के अनुसार 1 से 30 नवंबर 2026 तक।" },
    { q: "DLC कैसे बनता है?", a: "जीवन प्रमाण ऐप और AadhaarFaceRD ऐप से चेहरे की पहचान करके, आधार और पेंशन की जानकारी के साथ। सफल होने पर प्रमाण ID मिलता है।" },
    { q: "क्या इसका कोई शुल्क है?", a: "किसी रिपोर्ट में शुल्क का ज़िक्र नहीं है। CSC जैसी जगह अपनी सेवा का शुल्क ले सकती है, पहले पूछ लें।" },
    { q: "क्या फोन न हो तो भी बन सकता है?", a: "हां, बैंक, डाकघर या CSC पर मदद लें। जो बाहर नहीं जा सकते उनके लिए घर पर सेवा की बात बताई गई है।" },
    { q: "क्या यह राज्य की वृद्धा पेंशन के लिए भी है?", a: "यह केंद्र के पेंशनरों का अभियान है। राज्य की पेंशन में जीवन प्रमाणीकरण की तारीख और तरीका राज्य के विभाग से पूछें।" },
    { q: "पेंशन रुक जाए तो क्या करें?", a: "पहले बैंक/विभाग से कारण पूछें, फिर लिखित शिकायत दें। हमारे यहां तैयार पत्र है।" },
  ],
  related: [
    { href: "/arzi/pension-not-received-complaint.html", emoji: "📝", title: "पेंशन न मिलने की शिकायत", text: "तैयार फॉर्मेट" },
    { href: "/arzi/bank-kyc-update-application.html", emoji: "🏦", title: "बैंक KYC अपडेट", text: "आवेदन फॉर्मेट" },
    { href: "/states/uttar-pradesh-old-age-pension.html", emoji: "👴", title: "UP वृद्धा पेंशन", text: "पात्रता और आवेदन" },
    { href: "/states/bihar-old-age-pension.html", emoji: "👴", title: "बिहार वृद्धजन पेंशन", text: "₹1,100 प्रति माह" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "मदद के लिए" },
  ],
  aside: [
    { href: "/arzi/pension-not-received-complaint.html", label: "📝 पेंशन शिकायत पत्र" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
