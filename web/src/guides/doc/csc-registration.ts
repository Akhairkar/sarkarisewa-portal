import type { DocGuide } from "./types";

// Sources (checked 24 Oct 2026; csc.gov.in, register.csc.gov.in and
// cscentrepreneur.in not reachable from the sandbox, search-result extracts
// of the official pages used): csc.gov.in/faqs (VLE minimum: valid Aadhaar,
// 18+, 10th pass, read/write local language + basic English, basic computer
// skills preferred; "There is no fee for registration as a VLE"),
// register.csc.gov.in/page/faq (TEC certificate number mandatory for the
// "CSC VLE" application type; documents: photo, proof of identity, proof of
// address, cancelled cheque or passbook copy), register.csc.gov.in/register/
// status (application status), csc.gov.in home notice "CSCs without Police
// Verification Report shall be disabled soon", cscentrepreneur.in CCE FAQ
// (CCE username = certificate number, used to apply for a new CSC).
// Not stated: approval time, PVR format/validity (sources disagree).
export const cscRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "आपके पास", href: "/near-me/" },
    { label: "CSC रजिस्ट्रेशन" },
  ],
  docHi: "CSC रजिस्ट्रेशन",
  vle: true,
  title: "CSC रजिस्ट्रेशन 2026: CSC सेंटर कैसे खोलें, CSC ID कैसे मिलती है",
  description: "CSC सेंटर (जन सेवा केंद्र) कैसे खोलें: VLE बनने की योग्यता, TEC सर्टिफिकेट, register.csc.gov.in पर आवेदन, ज़रूरी कागज़, फीस और स्टेटस चेक।",
  published: "2026-10-24",
  modified: "2026-10-24",
  verified: "24 अक्टूबर 2026",
  h1: "CSC रजिस्ट्रेशन 2026: CSC सेंटर (जन सेवा केंद्र) कैसे खोलें और CSC ID कैसे मिलती है",
  lead: "CSC (कॉमन सर्विस सेंटर) चलाने वाले को <strong>VLE (विलेज लेवल एंटरप्रेन्योर)</strong> कहते हैं। VLE बनने का रजिस्ट्रेशन <strong>मुफ्त</strong> है और <a href=\"https://register.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">register.csc.gov.in</a> पर होता है। पर आवेदन से पहले <strong>TEC सर्टिफिकेट</strong> लेना ज़रूरी है, जिसका कोर्स और परीक्षा ऑनलाइन होती है और उसकी फीस लगती है। आवेदन के बाद CSC की टीम जांच करती है, फिर CSC ID और लॉगिन मिलता है।",
  facts: [
    ["रजिस्ट्रेशन फीस", "कोई फीस नहीं (TEC कोर्स की फीस अलग)"],
    ["पहले ज़रूरी", "TEC सर्टिफिकेट नंबर"],
    ["वेबसाइट", "<a href=\"https://register.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">register.csc.gov.in</a>"],
    ["हेल्पलाइन", "<a href=\"tel:18001213468\">1800-121-3468</a>"],
  ],
  notice: "CSC या VLE ID दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें। रजिस्ट्रेशन खुद register.csc.gov.in पर मुफ्त होता है; पैसा सिर्फ TEC कोर्स की फीस के रूप में cscentrepreneur.in पर लगता है। यह साइट निजी है, CSC या सरकार की नहीं।",
  sections: [
    {
      id: "yogyata",
      title: "CSC खोलने के लिए योग्यता",
      list: [
        "उम्र <strong>18 साल से ज़्यादा</strong> और मान्य <strong>आधार नंबर</strong>।",
        "मान्यता प्राप्त बोर्ड से कम से कम <strong>10वीं पास</strong>।",
        "स्थानीय भाषा पढ़ना-लिखना और थोड़ी अंग्रेज़ी; कंप्यूटर की बुनियादी जानकारी हो तो बेहतर।",
        "<strong>TEC सर्टिफिकेट:</strong> \"CSC VLE\" वाले आवेदन में TEC सर्टिफिकेट नंबर डालना अनिवार्य है। इसकी पूरी प्रक्रिया हमारी <a href=\"/service/csc-tec-certificate.html\">TEC सर्टिफिकेट गाइड</a> में है।",
      ],
      callout: { kind: "info", html: "केंद्र के लिए एक छोटी जगह (दुकान/कमरा), कंप्यूटर या लैपटॉप, प्रिंटर, बायोमेट्रिक डिवाइस और इंटरनेट की ज़रूरत पड़ती है; कौन सी सेवा के लिए क्या चाहिए, यह सेवा पर निर्भर है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आवेदक की फोटो",
        "पहचान का प्रमाण (जैसे आधार, PAN)",
        "पते का प्रमाण",
        "बैंक खाते का कैंसल चेक या पासबुक की कॉपी",
        "TEC सर्टिफिकेट नंबर",
        "<strong>पुलिस वेरिफिकेशन रिपोर्ट:</strong> CSC की वेबसाइट पर सूचना है कि बिना पुलिस वेरिफिकेशन रिपोर्ट वाले CSC बंद किए जाएंगे। इसलिए यह रिपोर्ट पहले से बनवाकर रखें; मांगे जाने पर पोर्टल पर अपलोड करें।",
      ],
    },
    {
      id: "aavedan",
      title: "CSC रजिस्ट्रेशन कैसे करें",
      steps: [
        "पहले <a href=\"https://cscentrepreneur.in/\" target=\"_blank\" rel=\"noopener nofollow\">cscentrepreneur.in</a> पर TEC कोर्स पूरा करके सर्टिफिकेट नंबर लें।",
        "<a href=\"https://register.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">register.csc.gov.in</a> खोलें और <strong>Apply</strong> में नया रजिस्ट्रेशन चुनें।",
        "आवेदन का प्रकार <strong>CSC VLE</strong> चुनें, TEC सर्टिफिकेट नंबर, मोबाइल और ईमेल डालकर OTP से पुष्टि करें।",
        "आधार, निजी जानकारी, बैंक खाता और केंद्र की जगह (गांव/वार्ड, पता) भरें, कागज़ अपलोड करें।",
        "फॉर्म जमा करें और <strong>आवेदन नंबर</strong> संभालकर रखें।",
        "CSC की टीम आवेदन और केंद्र की जांच करती है। मंज़ूरी के बाद CSC ID और लॉगिन की जानकारी आपके ईमेल/मोबाइल पर आती है।",
      ],
      callout: { kind: "ok", html: "आवेदन का स्टेटस <a href=\"https://register.csc.gov.in/register/status\" target=\"_blank\" rel=\"noopener nofollow\">register.csc.gov.in/register/status</a> पर देखें। ID मिलने के बाद काम <a href=\"/service/digital-seva-portal-login.html\">Digital Seva पोर्टल</a> से होता है।" },
    },
    {
      id: "baad-me",
      title: "CSC ID मिलने के बाद",
      list: [
        "<a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digitalseva.csc.gov.in</a> पर लॉगिन करके सेवाएं शुरू करें। कौन सी सेवाएं होती हैं, यह <a href=\"/service/csc-services-list.html\">CSC सेवाओं की सूची</a> में देखें।",
        "कई सेवाएं (जैसे बैंकिंग, बीमा, आधार) के लिए अलग से मंज़ूरी या प्रमाणपत्र लगता है; हर सेवा के नियम पोर्टल पर पढ़ें।",
        "केंद्र पर CSC का बोर्ड लगाएं और सेवाओं की रेट लिस्ट दिखाएं, ताकि ग्राहक भरोसा करें।",
        "<a href=\"/claim-your-csc.html\">SarkariSewa पर अपना केंद्र फ्री में जोड़ें</a>, ताकि आपके ज़िले के पेज पर आपका नाम, सेवाएं और WhatsApp बटन दिखे।",
      ],
    },
  ],
  official: [
    { href: "https://register.csc.gov.in/", title: "CSC रजिस्ट्रेशन पोर्टल", note: "register.csc.gov.in" },
    { href: "https://cscentrepreneur.in/", title: "TEC (टेलीसेंटर एंटरप्रेन्योर कोर्स)", note: "cscentrepreneur.in" },
    { href: "https://www.csc.gov.in/faqs", title: "CSC के सवाल-जवाब (FAQ)", note: "csc.gov.in" },
    { href: "tel:18001213468", title: "CSC हेल्पलाइन", note: "1800-121-3468" },
  ],
  faq: [
    { q: "CSC खोलने में कितनी फीस लगती है?", a: "VLE रजिस्ट्रेशन की कोई फीस नहीं है। पर आवेदन के लिए ज़रूरी TEC कोर्स की फीस cscentrepreneur.in पर देनी होती है। इसके अलावा कंप्यूटर, प्रिंटर, इंटरनेट और दुकान का खर्च आपका अपना है।" },
    { q: "CSC ID कैसे मिलती है?", a: "TEC सर्टिफिकेट लेकर register.csc.gov.in पर \"CSC VLE\" आवेदन करें। CSC की टीम जांच के बाद आवेदन मंज़ूर करती है और CSC ID व लॉगिन की जानकारी भेजती है।" },
    { q: "क्या बिना TEC सर्टिफिकेट के CSC खुल सकता है?", a: "नहीं। CSC के रजिस्ट्रेशन FAQ के अनुसार \"CSC VLE\" आवेदन में TEC सर्टिफिकेट नंबर अनिवार्य है।" },
    { q: "CSC खोलने के लिए क्या योग्यता चाहिए?", a: "18 साल से ज़्यादा उम्र, आधार नंबर, 10वीं पास, स्थानीय भाषा और थोड़ी अंग्रेज़ी पढ़ना-लिखना; कंप्यूटर की बुनियादी जानकारी हो तो बेहतर।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "register.csc.gov.in/register/status पर अपना आवेदन नंबर डालकर देखें। देर हो तो CSC हेल्पलाइन 1800-121-3468 पर पूछें।" },
  ],
  related: [
    { href: "/service/csc-tec-certificate.html", emoji: "🎓", title: "TEC सर्टिफिकेट", text: "कोर्स, फीस और परीक्षा" },
    { href: "/service/digital-seva-portal-login.html", emoji: "🔐", title: "Digital Seva लॉगिन", text: "पासवर्ड और ID की दिक्कतें" },
    { href: "/service/csc-services-list.html", emoji: "🧾", title: "CSC सेवाओं की सूची", text: "कौन सी सेवाएं और कमाई" },
    { href: "/claim-your-csc.html", emoji: "🏪", title: "अपना केंद्र जोड़ें", text: "SarkariSewa पर फ्री लिस्टिंग" },
  ],
  aside: [
    { href: "https://register.csc.gov.in/", label: "📝 register.csc.gov.in" },
    { href: "/claim-your-csc.html", label: "🏪 अपना केंद्र फ्री जोड़ें" },
  ],
};
