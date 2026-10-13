import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - eservices.punjab.gov.in (eServices Punjab on ServicePlus) home page:
//   "Income Certificate" under Department of Revenue, Rehabilitation &
//   Disaster Management; apply online after one-time registration or at any
//   Sewa Kendra; "Check Your Application Status"; print via Track Application
//   Status -> Delivered -> Output Certificate; "Verify your Certificate" with
//   application reference number + token.
// - eservices.punjab.gov.in/resources/homePage/3/sop/Income_about_service.html:
//   purpose; any resident of Punjab eligible; "Duration of Certificate: One
//   Year (Current Financial Year)"; processing fee Rs 75 per copy; documents:
//   self-attested ID-cum-residence proof (Aadhaar/DL/passport/voter card/Govt
//   ID), self-declaration certificate, verification report, proof of income
//   from all sources (all mandatory); issued at tehsil by the Tehsildar and at
//   sub-tehsil by the Naib Tehsildar; help desk 0172-5078449,
//   managerstat.phtpb@gmail.com (10 AM-5 PM, Mon-Fri).
// - esewa.punjab.gov.in: Download Certificate, Verify Certificate, Track
//   Status; call 1100.
// - Search-result extracts of official pages we could not open from our
//   checker: punjab.gov.in "Income Certificate" service sheet (Sep 2025),
//   Revenue Department: Govt. fee nil, facilitation fee Rs 75; documents
//   include identity proof, income proof (ITR, Fard or J-Form) and photo.
//   punjab.gov.in "Income and Asset Certificate" sheet: Department of Social
//   Justice, Empowerment & Minorities, facilitation fee Rs 55.
// Left out (not confirmable on an official page we could open): the RTS time
// limit for the income certificate, appeal officer for this service.
export const punjabIncomeCertificate: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Punjab Income Certificate 2026: Apply Online",
  description: "पंजाब आय प्रमाण पत्र 2026: eServices Punjab पर ऑनलाइन या सेवा केंद्र से आवेदन। ₹75 शुल्क, तहसीलदार, चालू वित्त वर्ष तक वैध, ज़रूरी कागज़, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पंजाब आय प्रमाण पत्र 2026: eServices / सेवा केंद्र से आवेदन, ₹75 शुल्क, कागज़ और वैधता",
  lead: "पंजाब में आय प्रमाण पत्र राजस्व विभाग की सेवा है; तहसील में <strong>तहसीलदार</strong> और उप-तहसील में <strong>नायब तहसीलदार</strong> इसे जारी करते हैं। आवेदन <strong>eServices Punjab (eservices.punjab.gov.in)</strong> पर ऑनलाइन या किसी भी <strong>सेवा केंद्र</strong> से होता है। शुल्क <strong>₹75 प्रति कॉपी</strong> है और प्रमाण पत्र <strong>एक साल (चालू वित्त वर्ष)</strong> के लिए मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://eservices.punjab.gov.in/" target="_blank" rel="noopener nofollow">eservices.punjab.gov.in</a> / सेवा केंद्र'],
    ["जारी करते हैं", "तहसीलदार / नायब तहसीलदार"],
    ["शुल्क", "₹75 प्रति कॉपी"],
    ["वैधता", "1 साल (चालू वित्त वर्ष)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र और Income & Asset (EWS) में फर्क",
      table: {
        head: ["प्रमाण पत्र", "विभाग", "कब चाहिए"],
        rows: [
          ["<strong>आय प्रमाण पत्र</strong>", "राजस्व, पुनर्वास एवं आपदा प्रबंधन", "आय का सरकारी सबूत, बैंक लोन, छात्रवृत्ति, योजनाएं"],
          ["<strong>Income and Asset Certificate</strong>", "सामाजिक न्याय, अधिकारिता एवं अल्पसंख्यक", "EWS आरक्षण; सितंबर 2025 की सेवा-शीट में सुविधा शुल्क ₹55"],
        ],
      },
      callout: { kind: "info", html: "SC/BC आरक्षण के लिए जाति प्रमाण पत्र अलग से बनता है: <a href=\"/states/punjab-caste-certificate.html\">पंजाब जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (eServices Punjab की सूची)",
      intro: "पोर्टल के अनुसार ये चारों कागज़ <strong>अनिवार्य</strong> हैं:",
      list: [
        "<strong>पहचान-सह-निवास प्रमाण</strong> (स्व-सत्यापित): आधार कार्ड, ड्राइविंग लाइसेंस, पासपोर्ट, वोटर कार्ड या सरकारी पहचान पत्र।",
        "<strong>स्व-घोषणा प्रमाण पत्र</strong> (Self-Declaration)।",
        "<strong>तसदीक रिपोर्ट</strong> (Verification Report)।",
        "<strong>सभी स्रोतों से आय का सबूत</strong> या आय से जुड़ा कोई दूसरा कागज़। सितंबर 2025 की सेवा-शीट में ITR, फर्द (ज़मीन का रिकॉर्ड) या J-फॉर्म (फसल बिक्री) जैसे कागज़ बताए गए हैं।",
        "पासपोर्ट साइज़ फोटो (सेवा केंद्र पर)।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्व-घोषणा का नमूना: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (eServices Punjab)",
      steps: [
        '<a href="https://eservices.punjab.gov.in/" target="_blank" rel="noopener nofollow">eservices.punjab.gov.in</a> खोलें और एक बार रजिस्टर करके यूज़रनेम-पासवर्ड बनाएं।',
        "<strong>Department of Revenue, Rehabilitation & Disaster Management → Income Certificate</strong> चुनें।",
        "फॉर्म भरें और ऊपर के चारों अनिवार्य कागज़ अपलोड करें।",
        "₹75 शुल्क का भुगतान करें और आवेदन जमा करें।",
        "<strong>आवेदन संदर्भ संख्या</strong> संभालकर रखें; इसी से स्थिति देखी जाती है।",
      ],
    },
    {
      id: "offline",
      title: "सेवा केंद्र से",
      intro: "पोर्टल के अनुसार किसी भी <strong>सेवा केंद्र</strong> पर जाकर आवेदन किया जा सकता है। सारे कागज़ों की मूल प्रति और फोटो साथ ले जाएं। सितंबर 2025 की सेवा-शीट के अनुसार सरकारी फीस शून्य और सुविधा शुल्क ₹75 है; रसीद ज़रूर लें। रसीद पर आवेदन संख्या होती है।",
    },
    {
      id: "samay",
      title: "शुल्क, वैधता और शिकायत",
      list: [
        "<strong>शुल्क:</strong> ₹75 प्रति कॉपी (eServices पोर्टल; सेवा-शीट में \"सरकारी फीस शून्य, सुविधा शुल्क ₹75\")।",
        "<strong>वैधता:</strong> पोर्टल के अनुसार <strong>एक साल (चालू वित्त वर्ष)</strong>। नया वित्त वर्ष शुरू होने पर ज़रूरत हो तो नया प्रमाण पत्र बनवाएं।",
        "<strong>समय सीमा:</strong> इस सेवा की RTS समय सीमा हम किसी खुले सरकारी पेज पर पक्की नहीं कर पाए; रसीद पर लिखी तारीख देखें।",
      ],
      callout: { kind: "warn", html: "देर हो तो तहसील कार्यालय से लिखित स्थिति मांगें। Connect Punjab पर RTS अपील की सुविधा है, और पंजाब सरकार की हेल्पलाइन <strong>1100</strong> पर शिकायत कर सकते हैं। eServices की तकनीकी मदद: <strong>0172-5078449</strong> (सोम-शुक्र, सुबह 10 से शाम 5)।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>ऑनलाइन आवेदन का स्टेटस:</strong> eServices होमपेज पर <strong>Check Your Application Status</strong>, या लॉगिन करके View Status of Application → Track Application Status।",
        "<strong>प्रिंट:</strong> लॉगिन → Track Application Status → <strong>Delivered</strong> → <strong>Output Certificate</strong>।",
        "<strong>सत्यापन:</strong> eServices होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा टोकन डालें।",
        "<strong>सेवा केंद्र से आवेदन:</strong> <a href=\"https://esewa.punjab.gov.in/trackStatus\" target=\"_blank\" rel=\"noopener nofollow\">e-Sewa Track Status</a> और <a href=\"https://esewa.punjab.gov.in/certificateDownload\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate</a>।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["तसदीक रिपोर्ट नहीं लगाई", "यह अनिवार्य है; सेवा केंद्र या तहसील से प्रारूप पूछें"],
          ["आय का कोई सबूत नहीं", "ITR, फर्द, J-फॉर्म, सैलरी स्लिप या आय का दूसरा कागज़ लगाएं"],
          ["पहचान पत्र पर पता पंजाब का नहीं", "पहचान-सह-निवास प्रमाण पंजाब के पते वाला लगाएं"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवाया", "Income and Asset Certificate अलग सेवा है"],
        ],
      },
    },
  ],
  official: [
    { href: "https://eservices.punjab.gov.in/", title: "eServices Punjab (ऑनलाइन आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://eservices.punjab.gov.in/resources/homePage/3/sop/Income_about_service.html", title: "आय प्रमाण पत्र: सेवा विवरण, कागज़, शुल्क, वैधता" },
    { href: "https://esewa.punjab.gov.in/", title: "e-Sewa Punjab (सेवा केंद्र आवेदन का स्टेटस, डाउनलोड)" },
    { href: "https://connect.punjab.gov.in/", title: "Connect Punjab (नागरिक सेवाएं, RTS अपील)" },
  ],
  faq: [
    { q: "पंजाब में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "eservices.punjab.gov.in पर रजिस्टर करें, राजस्व विभाग की Income Certificate सेवा चुनें, फॉर्म भरें, पहचान-सह-निवास प्रमाण, स्व-घोषणा, तसदीक रिपोर्ट और आय का सबूत अपलोड करें, ₹75 देकर जमा करें।" },
    { q: "पंजाब आय प्रमाण पत्र की फीस कितनी है?", a: "eServices पोर्टल के अनुसार ₹75 प्रति कॉपी। सितंबर 2025 की सेवा-शीट में सरकारी फीस शून्य और सुविधा शुल्क ₹75 लिखा है।" },
    { q: "पंजाब का आय प्रमाण पत्र कितने समय तक मान्य है?", a: "पोर्टल के अनुसार एक साल, यानी चालू वित्त वर्ष तक।" },
    { q: "पंजाब में आय प्रमाण पत्र कौन जारी करता है?", a: "तहसील में तहसीलदार और उप-तहसील में नायब तहसीलदार।" },
    { q: "आय प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "eServices होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और टोकन डालें; सेवा केंद्र से बने प्रमाण पत्र के लिए e-Sewa पर Verify Certificate देखें।" },
  ],
  related: [
    { href: "/states/punjab-caste-certificate.html", emoji: "📜", title: "पंजाब जाति प्रमाण पत्र", text: "SC/BC, सेवा केंद्र" },
    { href: "/states/punjab-domicile-certificate.html", emoji: "🏠", title: "पंजाब निवास प्रमाण पत्र", text: "रेज़िडेंस सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://eservices.punjab.gov.in/", label: "📝 eServices पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
