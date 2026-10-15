import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): incometax.gov.in Help > Instant e-PAN FAQ
// (free pre-login service; for individuals without PAN, with Aadhaar linked to
// an active mobile and DigiLocker access; not for minors, existing PAN holders
// or representative assessees (s.160 of 1961 Act / s.303 of Income Tax Act,
// 2025); DOB proof pulled from DigiLocker: driving licence, birth certificate,
// Class X marksheet/certificate, CGHS card; acknowledgement number; status
// and download via Quick Links > Instant e-PAN; post-login Services > View /
// Download e-PAN); incometax.gov.in Help > Verify Your PAN and Link Aadhaar
// FAQs (PAN correction via Protean onlineservices.nsdl.com/paam or UTIITSL
// pan.utiitsl.com); e-Filing "Call Us" (Protean PAN/TAN queries
// +91-20-27218080, 07:00-23:00 all days; e-filing 1800 103 0025 /
// 1800 419 0025). PAN 2.0 (Cabinet approval Nov 2024; existing PANs stay
// valid) from news/explainers. Physical card and reprint fees differ across
// sources, so no amounts are given.
export const panCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "पैन कार्ड" },
  ],
  docHi: "पैन कार्ड",
  title: "पैन कार्ड 2026",
  description: "स्थायी खाता संख्या (PAN) आयकर विभाग द्वारा जारी 10 अंकों/अक्षरों का पहचानकर्ता है, जो वित्तीय लेनदेन और कर फाइलिंग के लिए अनिवार्य है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पैन कार्ड 2026: आधार से मुफ्त Instant e-PAN, Protean/UTIITSL से नया या सुधार, खो जाए तो क्या करें",
  lead: "PAN (स्थायी खाता संख्या) आयकर विभाग का 10 अक्षर/अंक वाला नंबर है, जो टैक्स रिटर्न, बैंक और बड़े लेन-देन में लगता है। जिसके पास आधार और उससे जुड़ा मोबाइल है, वह आयकर पोर्टल पर Instant e-PAN मुफ्त में कुछ ही मिनटों में बना सकता है। छपा हुआ कार्ड, सुधार या दोबारा कार्ड Protean (पहले NSDL) या UTIITSL से बनता है।",
  facts: [
    ["जारी करता है", "आयकर विभाग"],
    ["Instant e-PAN", "मुफ्त, आधार + OTP + DigiLocker"],
    ["कार्ड/सुधार", "Protean (NSDL) या UTIITSL"],
    ["हेल्पलाइन", "Protean PAN: +91-20-27218080"],
  ],
  sections: [
    {
      id: "epan",
      title: "आधार से मुफ्त Instant e-PAN कैसे बनाएं",
      intro: "यह सेवा उन लोगों के लिए है जिनके पास अभी PAN नहीं है। ज़रूरी: आधार नंबर, आधार से जुड़ा चालू मोबाइल और DigiLocker खाता।",
      steps: [
        '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a> खोलें, <strong>Quick Links</strong> में <strong>Instant e-PAN</strong> चुनें और <strong>Get New e-PAN</strong> पर क्लिक करें।',
        "आधार नंबर डालें और आधार से जुड़े मोबाइल पर आया OTP भरें।",
        "DigiLocker पर जाकर जन्म तिथि का प्रमाण चुनें: ड्राइविंग लाइसेंस, जन्म प्रमाण पत्र, 10वीं की मार्कशीट/प्रमाण पत्र या CGHS कार्ड (जो DigiLocker में पहले से हो)।",
        "ईमेल जोड़ना वैकल्पिक है। अनुरोध जमा करने पर <strong>Acknowledgement Number</strong> मिलता है; इसे लिख लें।",
        "स्टेटस और डाउनलोड: Instant e-PAN में <strong>Check Status / Download e-PAN</strong> चुनें, आधार और OTP डालें, फिर e-PAN देखें या डाउनलोड करें।",
      ],
      callout: { kind: "warn", html: "Instant e-PAN <strong>नाबालिग</strong> या पहले से PAN वाले व्यक्ति के लिए नहीं है। एक व्यक्ति के दो PAN रखना नियम के खिलाफ है; पुराना PAN हो तो नया न बनाएं।" },
    },
    {
      id: "card",
      title: "छपा हुआ कार्ड, नाबालिग का PAN और सुधार",
      list: [
        '<strong>नया PAN (फॉर्म से):</strong> नाबालिग, विदेशी नागरिक या जो Instant e-PAN नहीं ले सकते, वे <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener nofollow">Protean</a> या <a href="https://www.pan.utiitsl.com/" target="_blank" rel="noopener nofollow">UTIITSL</a> पर आवेदन करें। भारतीय नागरिक फॉर्म 49A, विदेशी 49AA भरते हैं।',
        "<strong>सुधार:</strong> नाम, जन्म तिथि, फोटो, पिता का नाम में गलती हो तो \"Changes or Correction in PAN Data\" आवेदन करें। आधार e-KYC से विवरण आधार जैसा हो जाता है।",
        "<strong>फीस:</strong> छपे कार्ड और सुधार की फीस आवेदन के समय पोर्टल पर दिखती है; भारत के पते और विदेश के पते के लिए अलग होती है।",
        "<strong>e-PAN डाउनलोड:</strong> आयकर पोर्टल पर लॉग-इन करके Services > View / Download e-PAN से भी e-PAN मिलता है।",
      ],
    },
    {
      id: "kho-gaya",
      title: "PAN कार्ड खो जाए तो",
      steps: [
        "नया PAN न बनाएं; आपका PAN नंबर वही रहता है।",
        "PAN नंबर याद न हो तो आयकर पोर्टल पर आधार से e-PAN देखें, या पुराने ITR/फॉर्म 16/बैंक कागज़ में देखें।",
        "छपा कार्ड चाहिए तो Protean या UTIITSL पर \"Reprint of PAN Card\" का आवेदन करें।",
      ],
    },
    {
      id: "zaruri",
      title: "PAN से जुड़ी ज़रूरी बातें",
      list: [
        '<strong>आधार से लिंक:</strong> ज़्यादातर लोगों के लिए PAN को आधार से जोड़ना ज़रूरी है, वरना PAN निष्क्रिय हो जाता है। देखें: <a href="/service/aadhaar-pan-linking.html">आधार-पैन लिंकिंग</a>।',
        "<strong>PAN 2.0:</strong> सरकार ने नवंबर 2024 में PAN 2.0 परियोजना को मंज़ूरी दी थी, जिसमें QR कोड वाला PAN और सेवाएं एक प्लेटफॉर्म पर लाने की बात है। पुराने PAN कार्ड मान्य रहते हैं; नया कार्ड बनवाना ज़रूरी नहीं।",
        "<strong>ठगी से बचें:</strong> PAN अपडेट या KYC के नाम पर आए SMS/लिंक पर OTP या बैंक जानकारी न दें। साइबर ठगी की शिकायत 1930 पर करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल (Instant e-PAN, Verify Your PAN)", note: "1800 103 0025" },
    { href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", title: "Protean (NSDL): नया PAN / सुधार", note: "+91-20-27218080" },
    { href: "https://www.pan.utiitsl.com/", title: "UTIITSL: PAN सेवाएं" },
  ],
  faq: [
    { q: "क्या PAN मुफ्त में बन सकता है?", a: "हां। आयकर पोर्टल पर आधार से Instant e-PAN मुफ्त है। इसके लिए आधार से जुड़ा मोबाइल और DigiLocker खाता चाहिए।" },
    { q: "Instant e-PAN कौन नहीं ले सकता?", a: "नाबालिग, जिसके पास पहले से PAN है, और प्रतिनिधि करदाता (representative assessee)। उन्हें Protean या UTIITSL से फॉर्म भरना होगा।" },
    { q: "e-PAN का स्टेटस कैसे देखें?", a: "आयकर पोर्टल पर Quick Links > Instant e-PAN > Check Status / Download e-PAN में आधार नंबर और OTP डालें।" },
    { q: "PAN कार्ड खो गया, क्या नया PAN बनवाना होगा?", a: "नहीं। PAN नंबर वही रहता है। e-PAN डाउनलोड करें या Protean/UTIITSL से कार्ड का रीप्रिंट मंगवाएं।" },
    { q: "क्या पुराना PAN कार्ड PAN 2.0 के बाद भी चलेगा?", a: "हां, पुराने PAN कार्ड मान्य हैं। QR कोड वाला नया कार्ड लेना ज़रूरी नहीं है।" },
  ],
  related: [
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "PAN निष्क्रिय होने से बचाएं" },
    { href: "/service/pan-aadhaar-conflict-resolver.html", emoji: "🧩", title: "पैन-आधार बेमेल", text: "नाम/जन्म तिथि का फर्क ठीक करें" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "अपडेट और डाउनलोड" },
    { href: "/service/digilocker.html", emoji: "📂", title: "DigiLocker", text: "e-PAN के लिए ज़रूरी" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "आयकर रिटर्न" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "PAN आवेदन में मदद" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "🪪 Instant e-PAN" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
