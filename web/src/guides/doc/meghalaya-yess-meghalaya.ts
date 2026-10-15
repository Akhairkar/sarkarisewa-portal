import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Meghalaya government sites not reachable from
// the sandbox, search-result extracts used): meghalaya.gov.in press release
// "HCM Launched YESS Scheme 27th July 2022" (YESS = Youth Engagement through
// Empowered Youth Organisations, launched by CM Conrad K. Sangma; over 3,000
// registered youth clubs/organisations in the state), meghalaya.gov.in
// schemes/content/45829 and northgarohills.gov.in notice (apply online at
// www.yessmeghalaya.in; assistance released on a continuous basis after
// scrutiny of applications on the portal; Sports and Youth Affairs
// Department), publicservicesmap.in / govtschemes.in (up to Rs 1 lakh per
// financial year; eligible entities: societies, cooperatives, NGOs, youth
// clubs, socio-cultural clubs, alumni associations, community youth groups,
// individuals selected for competitions/events; majority of members under
// 35). The "up to Rs 1 lakh" figure is from aggregator listings consistent
// with the scheme page extract; the aggregator helpline was not verified and
// is left out.
export const meghalayaYessMeghalaya: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मेघालय", href: "/states/meghalaya.html" },
    { label: "YESS Meghalaya" },
  ],
  docHi: "YESS Meghalaya",
  title: "YESS Meghalaya",
  description: "मेघालय राज्य सरकार की यह युवा सशक्तिकरण (Youth Empowerment) योजना युवा क्लबों और संगठनों को खेल, संस्कृति व सामुदायिक कामों के लिए आर्थिक सहायता देती है। पात्रता और ऑनलाइन आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "YESS Meghalaya: युवा क्लबों और संगठनों को आर्थिक सहायता, पात्रता और आवेदन",
  lead: "YESS (Youth Engagement through Empowered Youth Organisations) मेघालय सरकार के खेल एवं युवा मामले विभाग की योजना है, जो जुलाई 2022 में शुरू हुई। इसमें पंजीकृत युवा क्लब, संस्थाएं और प्रतियोगिता के लिए चुने गए युवा, खेल, संस्कृति, नेतृत्व और सामुदायिक कामों के लिए आर्थिक सहायता के लिए आवेदन कर सकते हैं। आवेदन <strong>yessmeghalaya.in</strong> पोर्टल पर ऑनलाइन होता है।",
  facts: [
    ["विभाग", "खेल एवं युवा मामले विभाग, मेघालय"],
    ["किसके लिए", "युवा क्लब, संस्थाएं, चुने गए युवा"],
    ["सहायता", "प्रति वित्त वर्ष ₹1 लाख तक (स्कीम सूची के अनुसार)"],
    ["आवेदन", "yessmeghalaya.in (ऑनलाइन)"],
  ],
  sections: [
    {
      id: "kaun",
      title: "कौन आवेदन कर सकता है",
      list: [
        "पंजीकृत सोसाइटी और सहकारी समितियां",
        "स्वैच्छिक और गैर-लाभकारी संस्थाएं (NGO)",
        "युवा क्लब, सामाजिक-सांस्कृतिक क्लब और पूर्व छात्र (alumni) संघ",
        "समुदाय स्तर के युवा समूह",
        "किसी प्रतियोगिता या कार्यक्रम के लिए चुने गए युवा, जिनके पास चयन/भागीदारी का प्रमाण हो",
      ],
      callout: { kind: "info", html: "संस्था के खाते साफ-सुथरे होने चाहिए और उसके ज़्यादातर सदस्य 35 वर्ष से कम उम्र के होने चाहिए (योजना की सूची के अनुसार)। आवेदन से पहले पोर्टल पर ताज़ा दिशानिर्देश ज़रूर पढ़ें।" },
    },
    {
      id: "kaam",
      title: "किन कामों के लिए सहायता मिलती है",
      list: [
        "खेल प्रतियोगिताएं और प्रशिक्षण",
        "संस्कृति, कला और नेतृत्व से जुड़े कार्यक्रम",
        "सामुदायिक सेवा, पर्यावरण संरक्षण",
        "वित्तीय साक्षरता, करियर मार्गदर्शन और मानसिक स्वास्थ्य जागरूकता",
      ],
    },
    {
      id: "avedan",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        '<a href="https://www.yessmeghalaya.in/" target="_blank" rel="noopener nofollow">yessmeghalaya.in</a> पोर्टल पर संस्था/आवेदक का पंजीकरण करें।',
        "संस्था का पंजीकरण प्रमाण पत्र, सदस्यों की सूची, बैंक खाता और पिछले कामों/खातों का विवरण तैयार रखें।",
        "जिस काम के लिए सहायता चाहिए, उसका प्रस्ताव और अनुमानित खर्च भरकर आवेदन जमा करें।",
        "विभाग आवेदनों की जांच करता है और सहायता लगातार (continuous basis) जारी करता है। मंज़ूरी के बाद राशि बैंक खाते में आती है।",
      ],
      callout: { kind: "warn", html: "सहायता की राशि आवेदन और जांच पर निर्भर है; ₹1 लाख अधिकतम सीमा है, हर आवेदक को इतनी राशि नहीं मिलती। खर्च का हिसाब और फोटो/रिपोर्ट संभालकर रखें।" },
    },
  ],
  official: [
    { href: "https://www.yessmeghalaya.in/", title: "YESS Meghalaya पोर्टल", note: "ऑनलाइन आवेदन" },
    { href: "https://megsports.gov.in/", title: "खेल एवं युवा मामले विभाग, मेघालय" },
  ],
  faq: [
    { q: "YESS Meghalaya का पूरा नाम क्या है?", a: "Youth Engagement through Empowered Youth Organisations. यह मेघालय के खेल एवं युवा मामले विभाग की योजना है।" },
    { q: "कितनी सहायता मिलती है?", a: "योजना की सूची के अनुसार एक वित्त वर्ष में ₹1 लाख तक। असली राशि प्रस्ताव और विभाग की जांच पर निर्भर करती है।" },
    { q: "क्या कोई अकेला युवा आवेदन कर सकता है?", a: "हां, अगर वह किसी प्रतियोगिता या कार्यक्रम के लिए चुना गया है और उसके पास चयन/भागीदारी का प्रमाण है। बाकी मामलों में पंजीकृत संस्था या क्लब आवेदन करता है।" },
    { q: "आवेदन कहां करें?", a: "yessmeghalaya.in पोर्टल पर ऑनलाइन। मदद के लिए ज़िला खेल/युवा अधिकारी कार्यालय से संपर्क करें।" },
  ],
  related: [
    { href: "/service/meghalaya-focus-scheme.html", emoji: "🌾", title: "मेघालय FOCUS योजना", text: "किसान उत्पादक समूह" },
    { href: "/service/meghalaya-mhis-scheme.html", emoji: "🏥", title: "मेघालय MHIS", text: "स्वास्थ्य बीमा योजना" },
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🛠️", title: "पीएम कौशल विकास योजना", text: "युवाओं के लिए कौशल प्रशिक्षण" },
    { href: "/states/meghalaya.html", emoji: "🗺️", title: "मेघालय की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://www.yessmeghalaya.in/", label: "🧑‍🤝‍🧑 YESS पोर्टल" },
    { href: "/states/meghalaya.html", label: "🗺️ मेघालय की सेवाएं" },
  ],
};
