import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - e-Mitra public APIs on emitraapp.rajasthan.gov.in (responses saved by our
//   checker): getServiceRevenueDetails (commType ALL): REVENUE DEPARTMENT G2C
//   services "Application form for Bonafide Certificate", "Print Digital
//   Signed Certificates - Bonafide Certificate" and "Print Digital Signed
//   Certificates - Apply for Smart bonafide certificate".
// - getGuidelineEformJSON: for "Application form for Bonafide Certificate":
//   "मूल निवास प्रमाण पत्र के लिए आवेदन पत्र" (guideline .docx Jul 2024, e-form
//   PDF updated 24.07.2025) and "मूल निवास प्रमाण पत्र राजस्थान के लिए"
//   (guideline PDF May 2021, e-form PDF 24.07.2025). The PDFs themselves did
//   not open from our checker, so their contents are not used.
// - Facts already verified for rajasthan-caste-certificate.ts (same portal):
//   SSO > e-Mitra > प्रमाण पत्र सेवायें (Application) flow with Jan Aadhaar,
//   family member, OTP, attachments, payment page showing the departmental fee;
//   DMP and Laser receipts; Online verification page "Bonafide/Caste
//   Certificate" by Transaction ID; helplines 1800-180-6127, 0141-2922241,
//   0141-2922238.
// Left out (not confirmable on an official page we could open): the residence
// period (third-party sites say 10 years; not confirmed officially), issuing
// officer, fee amount, time limit, validity. The old description promised an
// "official fee"; it was rewritten.
export const rajasthanDomicileCertificate: DocGuide = {
  state: { slug: "rajasthan", hi: "राजस्थान" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Rajasthan Domicile Certificate 2026: Apply & Status",
  description: "राजस्थान मूल निवास प्रमाण पत्र (Bonafide Certificate) 2026: SSO ID से e-Mitra पर या e-Mitra कियोस्क से आवेदन, जन आधार, कागज़, स्टेटस और डिजिटल प्रमाण पत्र का प्रिंट।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "राजस्थान मूल निवास प्रमाण पत्र 2026: e-Mitra पर आवेदन, कागज़ और स्टेटस",
  lead: "राजस्थान में मूल निवास प्रमाण पत्र को सरकारी रिकॉर्ड में <strong>Bonafide Certificate</strong> कहा जाता है और यह राजस्व विभाग की सेवा है। आवेदन SSO ID से e-Mitra पर (\"Application form for Bonafide Certificate\") या नज़दीकी e-Mitra कियोस्क पर होता है। मंज़ूरी के बाद डिजिटल हस्ताक्षर वाला प्रमाण पत्र e-Mitra से प्रिंट होता है।",
  facts: [
    ["पोर्टल", '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">SSO</a> → <a href="https://emitra.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">e-Mitra</a>'],
    ["सेवा का नाम", "Application form for Bonafide Certificate"],
    ["ज़रूरी", "परिवार का जन आधार नंबर"],
    ["फीस", "भुगतान पेज पर विभागीय शुल्क दिखता है"],
  ],
  notice: "<strong>ध्यान दें:</strong> राजस्थान में कितने साल रहने पर मूल निवास बनता है, यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली, इसलिए हम यहां साल नहीं लिख रहे। e-Mitra पर इस सेवा का आवेदन पत्र और दिशा-निर्देश (Guideline) दिए गए हैं; आवेदन से पहले उन्हें या अपने तहसील/उपखंड कार्यालय से शर्त पढ़ लें।",
  sections: [
    {
      id: "kya-hai",
      title: "मूल निवास (Bonafide) प्रमाण पत्र कहां काम आता है",
      intro: "यह इस बात का सबूत है कि आप राजस्थान के निवासी हैं। आम तौर पर इसकी ज़रूरत पड़ती है:",
      list: [
        "राजस्थान की <strong>सरकारी भर्तियों</strong> और परीक्षाओं में राज्य के निवासी होने का दावा करने के लिए",
        "कॉलेज, मेडिकल/इंजीनियरिंग काउंसलिंग में <strong>राज्य कोटे</strong> के दाखिले के लिए",
        "राज्य की उन योजनाओं में जहां <strong>राजस्थान का निवासी</strong> होना शर्त है",
      ],
      callout: { kind: "info", html: "मूल निवास प्रमाण पत्र सभी वर्गों के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/rajasthan-caste-certificate.html\">राजस्थान जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "फॉर्म भरते समय e-Mitra की <strong>संलग्नक सूची</strong> में जो कागज़ मांगे जाएं वही लगाएं। आम तौर पर ये पास रखें:",
      list: [
        "<strong>परिवार का जन आधार नंबर</strong> और उससे जुड़ा मोबाइल (OTP के लिए)",
        "<strong>आवेदक की नई फोटो</strong>",
        "<strong>राजस्थान में रहने के सबूत</strong>: जैसे पुराना राशन कार्ड, वोटर लिस्ट में नाम, स्कूल के प्रमाण पत्र, ज़मीन/मकान के कागज़",
        "<strong>जन्म प्रमाण पत्र</strong> या जन्मतिथि का सबूत",
        "<strong>शपथ-पत्र</strong> और कोई और कागज़, अगर आवेदन पत्र में मांगा जाए",
      ],
      callout: { kind: "warn", html: "सिर्फ नया आधार कार्ड लंबे समय के निवास का सबूत नहीं माना जाता। जितने पुराने कागज़ हों, उतना अच्छा। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "SSO और e-Mitra पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">sso.rajasthan.gov.in</a> पर अपनी SSO ID से लॉगिन करें और <strong>E-MITRA</strong> चुनें।',
        "<strong>प्रमाण पत्र सेवायें (Application)</strong> में सर्च बॉक्स में <strong>Bonafide</strong> लिखकर <strong>Application form for Bonafide Certificate</strong> चुनें।",
        "<strong>जन आधार नंबर</strong> डालें, वह सदस्य चुनें जिसका प्रमाण पत्र बनना है और विवरण लाएं; जन आधार वाले मोबाइल पर आया <strong>OTP</strong> डालें।",
        "फॉर्म में पता और राजस्थान में रहने की जानकारी सही भरें, <strong>संलग्नक सूची</strong> में हर कागज़ अपलोड करें और सेव करें।",
        "भुगतान पेज पर सेवा का नाम और <strong>विभागीय शुल्क</strong> दिखेगा। QR कोड, नेट बैंकिंग या UPI से भुगतान करें।",
        "<strong>DMP रसीद</strong> और <strong>लेज़र रसीद</strong> डाउनलोड करें। रसीद का ट्रांज़ैक्शन नंबर स्टेटस और प्रिंट के लिए काम आता है।",
      ],
    },
    {
      id: "offline",
      title: "e-Mitra कियोस्क से आवेदन",
      intro: "खुद आवेदन न कर पाएं तो नज़दीकी <strong>e-Mitra कियोस्क</strong> पर जन आधार, निवास के कागज़ और फोटो लेकर जाएं और रसीद लेकर ही लौटें। e-Mitra के अनुसार कियोस्क तय सेवा शुल्क से ज़्यादा पैसे मांगे तो <strong>टोल फ्री 1800-180-6127</strong> पर शिकायत करें।",
    },
    {
      id: "status",
      title: "स्टेटस और डिजिटल प्रमाण पत्र का प्रिंट",
      list: [
        "<strong>स्टेटस:</strong> e-Mitra के <a href=\"https://emitra.rajasthan.gov.in/emitra/online-verification\" target=\"_blank\" rel=\"noopener nofollow\">Online verification</a> पेज पर <strong>Bonafide/Caste Certificate</strong> चुनकर रसीद का ट्रांज़ैक्शन नंबर डालें।",
        "<strong>प्रिंट:</strong> मंज़ूरी के बाद राजस्व विभाग की <strong>Print Digital Signed Certificates - Bonafide Certificate</strong> सेवा से डिजिटल हस्ताक्षरित प्रमाण पत्र निकालें (यह e-Mitra कियोस्क से भी होता है)।",
        "प्रमाण पत्र में नाम, पिता का नाम और पता जांच लें; गलती हो तो तुरंत सुधार के लिए संपर्क करें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जन आधार में नाम/पता/मोबाइल गलत", "पहले जन आधार में सुधार कराएं, फिर आवेदन करें"],
          ["राजस्थान में निवास का पुराना सबूत नहीं", "पुराना राशन कार्ड, वोटर लिस्ट, स्कूल रिकॉर्ड या संपत्ति के कागज़ लगाएं"],
          ["कागज़ों में नाम/पता अलग-अलग", "आधार, जन आधार और राशन कार्ड में एक जैसी जानकारी कराएं"],
          ["आवेदन कियोस्क पर अधूरा छूट गया", "रसीद का ट्रांज़ैक्शन नंबर लेकर कियोस्क से आवेदन पूरा कराएं"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन (e-Mitra)",
      list: [
        "<strong>सिटिज़न कॉन्टैक्ट सेंटर:</strong> 1800-180-6127 (टोल फ्री)",
        "<strong>e-Mitra हेल्पडेस्क:</strong> 0141-2922241, 0141-2922238, helpdesk.emitra@rajasthan.gov.in",
      ],
    },
  ],
  official: [
    { href: "https://sso.rajasthan.gov.in/", title: "राजस्थान SSO (e-Mitra लॉगिन)" },
    { href: "https://emitra.rajasthan.gov.in/", title: "e-Mitra पोर्टल (आवेदन पत्र और दिशा-निर्देश)" },
    { href: "https://emitra.rajasthan.gov.in/emitra/online-verification", title: "e-Mitra: Online verification (Bonafide/Caste Certificate)" },
  ],
  faq: [
    { q: "राजस्थान में मूल निवास प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sso.rajasthan.gov.in पर लॉगिन करके e-Mitra खोलें, प्रमाण पत्र सेवायें (Application) में \"Application form for Bonafide Certificate\" चुनें, जन आधार और OTP से सदस्य का ब्योरा लाएं, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरकर रसीद लें।" },
    { q: "Bonafide Certificate और मूल निवास प्रमाण पत्र एक ही हैं?", a: "हां। e-Mitra पर राजस्व विभाग की \"Bonafide Certificate\" सेवा का हिंदी नाम \"मूल निवास प्रमाण पत्र\" है।" },
    { q: "राजस्थान मूल निवास प्रमाण पत्र की फीस कितनी है?", a: "हमें शुल्क की राशि किसी खुलने वाले आधिकारिक पेज पर नहीं मिली। e-Mitra के भुगतान पेज पर भुगतान से पहले विभागीय शुल्क दिखता है। कियोस्क तय शुल्क से ज़्यादा मांगे तो 1800-180-6127 पर शिकायत करें।" },
    { q: "कितने साल राजस्थान में रहने पर मूल निवास बनता है?", a: "यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। e-Mitra पर दिए गए आवेदन पत्र/दिशा-निर्देश या तहसील/उपखंड कार्यालय से पुष्टि करें। भर्ती या दाखिले के विज्ञापन में भी निवास की शर्त लिखी होती है।" },
    { q: "मूल निवास प्रमाण पत्र का प्रिंट कैसे निकालें?", a: "मंज़ूरी के बाद e-Mitra की \"Print Digital Signed Certificates - Bonafide Certificate\" सेवा में रसीद का ट्रांज़ैक्शन नंबर डालकर डिजिटल हस्ताक्षरित प्रमाण पत्र प्रिंट करें।" },
  ],
  related: [
    { href: "/states/rajasthan-caste-certificate.html", emoji: "📜", title: "राजस्थान जाति प्रमाण पत्र", text: "SC/ST/OBC, e-Mitra पर" },
    { href: "/states/rajasthan-income-certificate.html", emoji: "💰", title: "राजस्थान आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/rajasthan-employment-exchange.html", emoji: "💼", title: "राजस्थान रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://sso.rajasthan.gov.in/", label: "📝 SSO / e-Mitra पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
