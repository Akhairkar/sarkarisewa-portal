import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - e-Mitra public API getServiceRevenueDetails (emitraapp.rajasthan.gov.in,
//   commType ALL): REVENUE DEPARTMENT G2C services "Application for Income
//   Certificate", "Application of Income and Asset certificate for
//   Economically weaker sections (EWS) for Center" and "... for state".
// - e-Mitra getGuidelineEformJSON: EWS application forms for centre and state
//   (May 2021 PDFs); no separate guideline/e-form is listed for the plain
//   income certificate.
// - Facts already verified for rajasthan-caste-certificate.ts (same portal):
//   SSO > e-Mitra > प्रमाण पत्र सेवायें (Application) flow with Jan Aadhaar,
//   family member, OTP on Jan Aadhaar mobile, attachments, payment page showing
//   the departmental fee (QR/net banking/aggregator/UPI), DMP and Laser
//   receipts; "Print Digital Signed Certificates" revenue service; Online
//   verification / Transaction Status page; helplines 1800-180-6127,
//   0141-2922241, 0141-2922238; complaint if a kiosk charges more than the
//   fixed service charge.
// Left out (not confirmable on an official page we could open): the fee
// amount, issuing officer named in an official document, a time limit under
// the Rajasthan Guaranteed Delivery of Public Services Act, a validity period.
// The old page description said "fee ₹40 to ₹50"; that was not confirmable, so
// the description was rewritten.
export const rajasthanIncomeCertificate: DocGuide = {
  state: { slug: "rajasthan", hi: "राजस्थान" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Rajasthan Income Certificate 2026: Apply Online",
  description: "राजस्थान आय प्रमाण पत्र 2026: SSO ID से e-Mitra पर या e-Mitra कियोस्क से आवेदन। जन आधार से फॉर्म, ज़रूरी कागज़, EWS की अलग सेवा, स्टेटस और डिजिटल प्रमाण पत्र का प्रिंट।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "राजस्थान आय प्रमाण पत्र 2026: e-Mitra पर आवेदन, जन आधार, कागज़ और स्टेटस",
  lead: "राजस्थान में आय प्रमाण पत्र राजस्व विभाग की सेवा है। आवेदन SSO ID से e-Mitra पर (\"Application for Income Certificate\") या नज़दीकी e-Mitra कियोस्क पर होता है। e-Mitra की प्रमाण पत्र सेवाओं में परिवार के मुखिया का जन आधार नंबर डालकर सदस्य चुना जाता है और जन आधार से जुड़े मोबाइल पर OTP आता है। EWS आरक्षण के लिए आय और संपत्ति (Income and Asset) प्रमाण पत्र की अलग सेवाएं हैं।",
  facts: [
    ["पोर्टल", '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">SSO</a> → <a href="https://emitra.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">e-Mitra</a>'],
    ["विभाग", "राजस्व विभाग"],
    ["ज़रूरी", "परिवार का जन आधार नंबर"],
    ["फीस", "भुगतान पेज पर विभागीय शुल्क दिखता है"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> छात्रवृत्ति या योजना के लिए \"Application for Income Certificate\"। EWS आरक्षण के लिए \"Income and Asset certificate for EWS\" वाली सेवा, और उसमें भी राज्य (for state) और केंद्र (for Center) के लिए अलग-अलग सेवा चुनें।",
  sections: [
    {
      id: "sevayen",
      title: "e-Mitra पर आय से जुड़ी कौन सी सेवा किसके लिए",
      table: {
        head: ["e-Mitra सेवा (राजस्व विभाग)", "किसके लिए"],
        rows: [
          ["Application for Income Certificate", "छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाएं"],
          ["Income and Asset certificate for EWS for state", "राजस्थान सरकार की नौकरी/दाखिले में EWS आरक्षण"],
          ["Income and Asset certificate for EWS for Center", "केंद्र सरकार की नौकरी/परीक्षा में EWS आरक्षण"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि नॉन-क्रीमी लेयर वाला OBC जाति प्रमाण पत्र लगता है। देखें: <a href=\"/states/rajasthan-caste-certificate.html\">राजस्थान जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "e-Mitra पर आय प्रमाण पत्र के लिए अलग से कोई आधिकारिक कागज़-सूची प्रकाशित नहीं मिली; फॉर्म भरते समय <strong>संलग्नक सूची</strong> में जो कागज़ मांगे जाएं वही लगाएं। आम तौर पर ये पास रखें:",
      list: [
        "<strong>परिवार का जन आधार नंबर</strong> और उससे जुड़ा मोबाइल (OTP के लिए)",
        "<strong>आवेदक की नई फोटो</strong>",
        "<strong>आय का सबूत</strong>: नौकरी हो तो वेतन पर्ची, पेंशन हो तो पेंशन का कागज़, आयकर भरते हों तो ITR, खेती हो तो जमाबंदी/गिरदावरी",
        "<strong>आय का स्व-घोषणा पत्र / शपथ-पत्र</strong> (अगर फॉर्म में मांगा जाए)",
      ],
      callout: { kind: "warn", html: "स्व-घोषणा में आय कम या गलत न लिखें; गलत जानकारी पर प्रमाण पत्र रद्द और कार्रवाई हो सकती है। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "SSO और e-Mitra पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">sso.rajasthan.gov.in</a> पर अपनी SSO ID से लॉगिन करें और <strong>E-MITRA</strong> चुनें।',
        "<strong>प्रमाण पत्र सेवायें (Application)</strong> में सर्च बॉक्स में <strong>Application for Income Certificate</strong> लिखकर सेवा चुनें।",
        "<strong>जन आधार नंबर</strong> डालें, <strong>Show Family Members</strong> से वह सदस्य चुनें जिसका प्रमाण पत्र बनना है और <strong>Verify and Fetch Detail</strong> करें।",
        "जन आधार से जुड़े मोबाइल पर आया <strong>OTP</strong> डालें, बाकी जानकारी और पता भरें।",
        "फॉर्म के सभी ज़रूरी फील्ड भरें, <strong>संलग्नक सूची</strong> में हर कागज़ अपलोड करके <strong>ADD</strong> करें और सेव करें।",
        "भुगतान पेज पर सेवा का नाम और <strong>विभागीय शुल्क</strong> दिखेगा। QR कोड, नेट बैंकिंग, एग्रीगेटर या UPI से भुगतान करें।",
        "<strong>DMP रसीद</strong> और <strong>लेज़र रसीद</strong> डाउनलोड करें। रसीद का ट्रांज़ैक्शन नंबर स्टेटस और प्रिंट के लिए काम आता है।",
      ],
    },
    {
      id: "offline",
      title: "e-Mitra कियोस्क से आवेदन",
      intro: "खुद आवेदन न कर पाएं तो नज़दीकी <strong>e-Mitra कियोस्क</strong> पर जन आधार, आय के कागज़ और फोटो लेकर जाएं और रसीद लेकर ही लौटें। e-Mitra के अनुसार कियोस्क तय सेवा शुल्क से ज़्यादा पैसे मांगे तो <strong>टोल फ्री 1800-180-6127</strong> पर शिकायत करें।",
    },
    {
      id: "status",
      title: "स्टेटस और डिजिटल प्रमाण पत्र का प्रिंट",
      list: [
        "<strong>स्टेटस:</strong> e-Mitra वेबसाइट के <a href=\"https://emitra.rajasthan.gov.in/emitra/online-verification\" target=\"_blank\" rel=\"noopener nofollow\">Online verification / Transaction Status</a> पेज पर रसीद का ट्रांज़ैक्शन नंबर डालें।",
        "<strong>प्रिंट:</strong> मंज़ूरी के बाद राजस्व विभाग की <strong>Print Digital Signed Certificates</strong> सेवा में ट्रांज़ैक्शन नंबर डालकर डिजिटल हस्ताक्षरित प्रमाण पत्र निकालें (यह e-Mitra कियोस्क से भी होता है)।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता और फीस",
      intro: "राजस्थान के आय प्रमाण पत्र की वैधता अवधि और सेवा की तय समय सीमा किसी आधिकारिक पेज पर नहीं मिली, इसलिए हम यहां कोई संख्या नहीं लिख रहे। आय हर साल बदलती है, इसलिए ज़्यादातर छात्रवृत्ति और योजनाएं हाल का प्रमाण पत्र मांगती हैं; योजना के नियम में देखें कि कितना पुराना चलेगा। फीस: भुगतान से पहले e-Mitra के भुगतान पेज पर विभागीय शुल्क दिखता है, वही मान्य है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जन आधार में नाम/रिश्ता/मोबाइल गलत", "पहले जन आधार में सुधार कराएं, फिर आवेदन करें"],
          ["आय का कोई सबूत नहीं लगाया", "वेतन पर्ची, पेंशन कागज़, ITR या खेती का रिकॉर्ड लगाएं"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवा लिया", "EWS की \"Income and Asset\" सेवा (राज्य या केंद्र) में अलग आवेदन करें"],
          ["आवेदन कियोस्क पर अधूरा छूट गया", "रसीद का ट्रांज़ैक्शन नंबर लेकर कियोस्क से आवेदन पूरा कराएं"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन (e-Mitra)",
      list: [
        "<strong>सिटिज़न कॉन्टैक्ट सेंटर:</strong> 1800-180-6127 (टोल फ्री), ccc.emitra@rajasthan.gov.in",
        "<strong>e-Mitra हेल्पडेस्क:</strong> 0141-2922241, 0141-2922238, helpdesk.emitra@rajasthan.gov.in",
      ],
    },
  ],
  official: [
    { href: "https://sso.rajasthan.gov.in/", title: "राजस्थान SSO (e-Mitra लॉगिन)" },
    { href: "https://emitra.rajasthan.gov.in/", title: "e-Mitra पोर्टल" },
    { href: "https://emitra.rajasthan.gov.in/emitra/online-verification", title: "e-Mitra: Online verification / Transaction Status" },
    { href: "https://emitraapp.rajasthan.gov.in//emitrashared/USER_MGMT_DOCS/GUIDELINE_AND_EFORM/2021/5/20/GAndE_1621499519197.pdf", title: "EWS आय एवं एसेट प्रमाण पत्र (राज्य हेतु) आवेदन पत्र (PDF)" },
    { href: "https://emitraapp.rajasthan.gov.in//emitrashared/USER_MGMT_DOCS/GUIDELINE_AND_EFORM/2021/5/20/GAndE_1621499473524.pdf", title: "EWS प्रमाण पत्र (केंद्र हेतु) आवेदन पत्र (PDF)" },
  ],
  faq: [
    { q: "राजस्थान में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sso.rajasthan.gov.in पर लॉगिन करके e-Mitra खोलें, प्रमाण पत्र सेवायें (Application) में \"Application for Income Certificate\" चुनें, जन आधार नंबर और OTP से सदस्य का ब्योरा लाएं, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरकर रसीद लें।" },
    { q: "राजस्थान आय प्रमाण पत्र की फीस कितनी है?", a: "हमें शुल्क की राशि किसी आधिकारिक पेज पर नहीं मिली। e-Mitra के भुगतान पेज पर भुगतान से पहले विभागीय शुल्क दिखता है। कियोस्क तय शुल्क से ज़्यादा मांगे तो 1800-180-6127 पर शिकायत करें।" },
    { q: "क्या बिना जन आधार के आय प्रमाण पत्र का आवेदन हो सकता है?", a: "e-Mitra की प्रमाण पत्र सेवाओं में आवेदन जन आधार नंबर से सदस्य चुनकर और जन आधार वाले मोबाइल पर OTP से होता है। जन आधार न हो या उसमें गलती हो तो पहले उसे बनवाएं/सुधरवाएं।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। e-Mitra पर EWS के लिए \"Income and Asset certificate\" की अलग सेवाएं हैं: राज्य के लिए अलग और केंद्र के लिए अलग।" },
    { q: "आय प्रमाण पत्र का स्टेटस और प्रिंट कैसे निकालें?", a: "e-Mitra के Online verification / Transaction Status पेज पर रसीद का ट्रांज़ैक्शन नंबर डालकर स्टेटस देखें। मंज़ूरी के बाद \"Print Digital Signed Certificates\" सेवा से डिजिटल हस्ताक्षरित प्रमाण पत्र प्रिंट करें।" },
  ],
  related: [
    { href: "/states/rajasthan-caste-certificate.html", emoji: "📜", title: "राजस्थान जाति प्रमाण पत्र", text: "SC/ST/OBC, e-Mitra पर" },
    { href: "/states/rajasthan-domicile-certificate.html", emoji: "🏠", title: "राजस्थान मूल निवास प्रमाण पत्र", text: "बोनाफाइड सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://sso.rajasthan.gov.in/", label: "📝 SSO / e-Mitra पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
