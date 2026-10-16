import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Lok Sabha answer (eparlib.nic.in) on SBM
// national helpline 1969 and the Swachhata app as a citizen grievance tool;
// swachh.jk.gov.in (Swachhata app: complaint examples garbage dumping,
// unclean streets, overflowing dustbins, blocked drains; complaint goes to the
// ULB); App Store listing "Swachhata-MoHUA" (id1124033628: civic issue is
// posted, routed to the city corporation / ward sanitary inspector); MoHUA
// 2020 note on additional categories. Play Store/App Store pages and
// sbmurban.org were not reachable, so the full current category list and any
// resolution deadline are not stated. The old page's "national helpline
// 1800-11-0001" was not for this service and was dropped.
export const swachhBharatSanitationComplaint: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "स्वच्छता शिकायत" },
  ],
  docHi: "स्वच्छता शिकायत",
  title: "स्वच्छ भारत स्वच्छता शिकायत (स्वच्छता ऐप) 2026",
  description: "स्वच्छता मोबाइल ऐप के माध्यम से सीधे अपने स्थानीय नगरपालिका निकाय को कचरा संग्रहण समस्याओं, सार्वजनिक शौचालय समस्याओं, या स्वच्छता शिकायतों की रिपोर्ट करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "स्वच्छता ऐप (Swachhata-MoHUA) से कचरा और सफाई की शिकायत कैसे करें",
  lead: "शहर में कचरे का ढेर, भरा हुआ कूड़ादान, बंद नाली या गंदी सड़क की शिकायत <strong>Swachhata-MoHUA</strong> ऐप से की जा सकती है। आप फोटो खींचकर शिकायत डालते हैं, ऐप जगह पहचानकर शिकायत सीधे आपके नगर निगम/नगर पालिका के उस वार्ड के सफाई अधिकारी को भेजता है, और आप ऐप में उसका स्टेटस देख सकते हैं। शिकायत करना मुफ्त है।",
  facts: [
    ["ऐप", "Swachhata-MoHUA (Android और iPhone)"],
    ["किसका", "आवास और शहरी कार्य मंत्रालय, स्वच्छ भारत मिशन-शहरी"],
    ["शिकायत किसे जाती है", "आपका नगर निकाय (वार्ड का सफाई अधिकारी)"],
    ["फीस", "मुफ्त"],
  ],
  sections: [
    {
      id: "kya",
      title: "किन बातों की शिकायत कर सकते हैं",
      intro: "ऐप शहरी इलाकों (नगर निगम, नगर पालिका, नगर पंचायत) की सफाई से जुड़ी शिकायतों के लिए है। आम शिकायतें:",
      list: [
        "कचरे का ढेर / खुले में कचरा फेंकना",
        "कूड़ादान भरा हुआ या कचरा गाड़ी नहीं आई",
        "सड़क की सफाई नहीं हुई",
        "नाली बंद या उफनती हुई",
        "सार्वजनिक शौचालय की सफाई या पानी की दिक्कत",
      ],
      callout: { kind: "info", html: "ऐप में श्रेणियां (categories) समय-समय पर बदलती हैं। जो समस्या सूची में न हो, उसके लिए नगर निकाय का अपना हेल्पलाइन/पोर्टल इस्तेमाल करें।" },
    },
    {
      id: "kaise",
      title: "शिकायत कैसे दर्ज करें",
      steps: [
        "Play Store या App Store से <strong>\"Swachhata-MoHUA\"</strong> ऐप डाउनलोड करें। नकली ऐप से बचें; डेवलपर में आवास और शहरी कार्य मंत्रालय/स्वच्छ भारत मिशन देखें।",
        "मोबाइल नंबर और OTP से रजिस्टर करें।",
        "\"Post a Complaint\" चुनें, समस्या की साफ फोटो लें। फोन का लोकेशन (GPS) चालू रखें ताकि सही जगह दर्ज हो।",
        "श्रेणी चुनें, ज़रूरत हो तो पास का पता/निशानी लिखें और शिकायत भेजें।",
        "\"My Complaints\" में स्टेटस देखें। काम हो जाने पर ऐप में फोटो के साथ जवाब आता है; संतुष्ट न हों तो शिकायत फिर से खोलने (reopen) का विकल्प देखें।",
      ],
    },
    {
      id: "dhyan",
      title: "शिकायत जल्दी निपटे, इसके लिए",
      list: [
        "फोटो उसी जगह पर खींचें जहां समस्या है; पुरानी या इंटरनेट की फोटो न लगाएं।",
        "एक शिकायत में एक ही समस्या डालें।",
        "निजी प्लॉट या घर के अंदर की समस्या नगर निकाय के सफाई दायरे में शायद न आए; ऐसी बात नगर निकाय कार्यालय में लिखित दें।",
        "बार-बार एक ही जगह कचरा जमा होता है तो वार्ड पार्षद/स्वच्छता निरीक्षक को भी बताएं।",
      ],
    },
    {
      id: "aur",
      title: "ऐप नहीं चला या हल नहीं हुआ तो",
      list: [
        "<strong>स्वच्छ भारत मिशन हेल्पलाइन 1969:</strong> मिशन से जुड़ी जानकारी और सवालों के लिए राष्ट्रीय हेल्पलाइन।",
        "<strong>नगर निकाय:</strong> अपने नगर निगम/नगर पालिका का कॉल सेंटर, पोर्टल या वार्ड कार्यालय।",
        "<strong>CPGRAMS:</strong> लंबे समय तक हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pgportal.gov.in</a> पर लोक शिकायत दर्ज कर सकते हैं।",
        "<strong>गांव में:</strong> ग्रामीण इलाकों की सफाई ग्राम पंचायत और स्वच्छ भारत मिशन (ग्रामीण) देखते हैं; शिकायत पंचायत सचिव या ब्लॉक कार्यालय में दें।",
      ],
    },
  ],
  official: [
    { href: "https://sbmurban.org/", title: "स्वच्छ भारत मिशन-शहरी" },
    { href: "https://mohua.gov.in/", title: "आवास और शहरी कार्य मंत्रालय" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS: लोक शिकायत पोर्टल" },
  ],
  faq: [
    { q: "स्वच्छता ऐप पर शिकायत करने का कोई शुल्क है?", a: "नहीं, शिकायत दर्ज करना मुफ्त है।" },
    { q: "शिकायत किसके पास जाती है?", a: "आपकी लोकेशन के आधार पर उस शहर के नगर निकाय और वार्ड के सफाई अधिकारी/निरीक्षक के पास।" },
    { q: "शिकायत का स्टेटस कैसे देखें?", a: "ऐप में \"My Complaints\" में हर शिकायत का स्टेटस और नगर निकाय का जवाब दिखता है।" },
    { q: "क्या गांव से इस ऐप पर शिकायत हो सकती है?", a: "यह ऐप मुख्य रूप से शहरी स्थानीय निकायों के लिए है। गांव की सफाई की शिकायत ग्राम पंचायत या ब्लॉक कार्यालय में करें।" },
    { q: "स्वच्छ भारत मिशन का हेल्पलाइन नंबर क्या है?", a: "राष्ट्रीय हेल्पलाइन 1969 है। सफाई की स्थानीय शिकायत के लिए ऐप या नगर निकाय का नंबर ज़्यादा काम आता है।" },
  ],
  related: [
    { href: "/service/municipal-property-tax.html", emoji: "🏙️", title: "प्रॉपर्टी टैक्स", text: "नगर निकाय की सेवाएं" },
    { href: "/service/water-supply-connection-bill.html", emoji: "🚰", title: "पानी का कनेक्शन", text: "जल आपूर्ति और बिल" },
    { href: "/service/consumer-grievance-redressal.html", emoji: "⚖️", title: "शिकायत निवारण", text: "शिकायत कहां करें" },
    { href: "/service/namaste-scheme-sewer-workers.html", emoji: "🧹", title: "नमस्ते योजना", text: "सफाई कर्मचारियों के लिए" },
  ],
  aside: [
    { href: "https://pgportal.gov.in/", label: "📝 CPGRAMS शिकायत" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
