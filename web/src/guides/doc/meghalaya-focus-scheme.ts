import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Meghalaya government sites not reachable from
// the sandbox, search-result extracts used): mymeg.meghalaya.gov.in/scheme/9
// (FOCUS - Farmers' Collectivization for Upscaling Production and Marketing
// System; initial mobilization fund of Rs 5,000 to each member of a producer
// group; support for funding, value chain, machinery, market linkage,
// transport and aggregation), cm.meghalaya.gov.in ("CM launches FOCUS scheme
// to benefit all households of Meghalaya"), Krishi Jagran / PTI (FOCUS+
// launched July 2022 as an extension: Rs 5,000 to households registered with
// a producer group), UNI / Eastern Mirror 2025 (FY 2025-26 tranche of nearly
// Rs 19 crore in grants to producer groups; about 22,500 PGs supported so
// far). Group size, Family ID rules and the annual PG grant range appear only
// on aggregator sites and were left general; nodal department not confirmed
// from an official source, so not named.
export const meghalayaFocusScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मेघालय", href: "/states/meghalaya.html" },
    { label: "FOCUS योजना" },
  ],
  docHi: "FOCUS योजना",
  title: "FOCUS Scheme",
  description: "मेघालय राज्य सरकार की यह कृषि एवं आजीविका (Agriculture & Livelihood) योजना किसानों को उत्पादक समूह (Producer Group) बनाकर आर्थिक मदद और बाज़ार से जोड़ती है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मेघालय FOCUS योजना: किसान उत्पादक समूह, ₹5,000 सहायता और FOCUS+",
  lead: "FOCUS (Farmers' Collectivization for Upscaling Production and Marketing System) मेघालय सरकार की योजना है, जिसमें गांव के किसान और पशुपालक मिलकर उत्पादक समूह (Producer Group, PG) बनाते हैं। सरकारी MyMeg पोर्टल के अनुसार समूह के हर सदस्य को शुरुआत में <strong>₹5,000</strong> की मोबिलाइज़ेशन राशि मिलती है, और समूहों को खेती, मशीन, ढुलाई और बाज़ार के लिए अलग से अनुदान मिलता है। लाभ के लिए किसी पंजीकृत उत्पादक समूह से जुड़ना ज़रूरी है।",
  facts: [
    ["राज्य", "मेघालय"],
    ["किसके लिए", "किसान, पशुपालक, कृषि-सम्बद्ध काम करने वाले परिवार"],
    ["सदस्य को राशि", "₹5,000 (शुरुआती मोबिलाइज़ेशन राशि)"],
    ["जानकारी", "MyMeg पोर्टल / ब्लॉक कृषि कार्यालय"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "FOCUS योजना में क्या मिलता है",
      list: [
        "<strong>सदस्य को ₹5,000:</strong> उत्पादक समूह के हर सदस्य को शुरुआती मोबिलाइज़ेशन राशि (MyMeg पोर्टल के अनुसार)।",
        "<strong>समूह को अनुदान:</strong> उत्पादक समूह के बैंक खाते में DBT से अनुदान, जिससे बीज, सूअर/मुर्गी पालन, बागवानी जैसे काम बढ़ाए जा सकें। 2025-26 में लगभग ₹19 करोड़ की किस्त जारी होने की खबर है।",
        "<strong>बाज़ार और ढुलाई:</strong> उपज इकट्ठा करने, ढुलाई, मशीन और बाज़ार से जोड़ने में मदद।",
      ],
      callout: { kind: "info", html: "जुलाई 2022 में इसका विस्तार <strong>FOCUS+</strong> नाम से हुआ, जिसमें उत्पादक समूह से जुड़े परिवारों को ₹5,000 नकद देने की बात कही गई। समूह को मिलने वाले सालाना अनुदान की सही राशि हमें सरकारी स्रोत से पक्की नहीं मिली; अपने ब्लॉक कार्यालय से पूछें।" },
    },
    {
      id: "patrata",
      title: "कौन जुड़ सकता है",
      list: [
        "मेघालय के निवासी किसान, पशुपालक, मछली पालक या कृषि-सम्बद्ध काम करने वाले लोग",
        "एक ही गांव के, एक जैसा काम करने वाले लोग मिलकर उत्पादक समूह बनाते हैं",
        "हर सदस्य अलग परिवार से हो और उसके पास मेघालय की पहचान से जुड़े कागज़ हों (जैसे आधार, बैंक खाता)",
      ],
    },
    {
      id: "kaise",
      title: "कैसे जुड़ें",
      steps: [
        "अपने गांव के मुखिया, ब्लॉक विकास कार्यालय (BDO) या ब्लॉक/ज़िला कृषि कार्यालय से पूछें कि गांव में FOCUS उत्पादक समूह बना है या नहीं।",
        "समूह बना हो तो उसमें नाम जुड़वाएं; न बना हो तो गांव के किसान मिलकर नया समूह बनवाएं।",
        "समूह का बैंक खाता खुलवाएं और सदस्यों का आधार, बैंक खाता और मोबाइल नंबर दर्ज करवाएं।",
        "पंजीकरण के बाद राशि DBT से सदस्य/समूह के खाते में आती है। योजना की जानकारी <a href=\"https://mymeg.meghalaya.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">MyMeg पोर्टल</a> पर भी देखें।",
      ],
      callout: { kind: "warn", html: "इस योजना में पंजीकरण के लिए कोई निजी एजेंट पैसा मांगे तो न दें। समूह के खाते की राशि सिर्फ समूह के तय काम में खर्च होती है।" },
    },
  ],
  official: [
    { href: "https://mymeg.meghalaya.gov.in/", title: "MyMeg पोर्टल (मेघालय सरकार)", note: "FOCUS योजना की जानकारी" },
    { href: "https://cm.meghalaya.gov.in/", title: "मुख्यमंत्री कार्यालय, मेघालय" },
  ],
  faq: [
    { q: "FOCUS योजना में कितना पैसा मिलता है?", a: "MyMeg पोर्टल के अनुसार उत्पादक समूह के हर सदस्य को शुरुआत में ₹5,000 मिलते हैं। इसके अलावा समूह को काम बढ़ाने के लिए अनुदान मिलता है, जिसकी राशि समूह और साल के हिसाब से अलग हो सकती है।" },
    { q: "FOCUS और FOCUS+ में क्या फर्क है?", a: "FOCUS मूल योजना है जिसमें किसान उत्पादक समूह बनाते हैं। FOCUS+ (जुलाई 2022) इसका विस्तार है, जिसमें समूह से जुड़े परिवारों को ₹5,000 नकद सहायता की घोषणा हुई।" },
    { q: "क्या अकेला किसान आवेदन कर सकता है?", a: "नहीं, लाभ उत्पादक समूह के ज़रिए मिलता है। अपने गांव के समूह से जुड़ें या दूसरे किसानों के साथ समूह बनाएं।" },
    { q: "पैसा कैसे आता है?", a: "DBT से सीधे बैंक खाते में। इसलिए खाता आधार से जुड़ा और चालू रखें।" },
  ],
  related: [
    { href: "/service/meghalaya-mhis-scheme.html", emoji: "🏥", title: "मेघालय MHIS", text: "स्वास्थ्य बीमा योजना" },
    { href: "/service/meghalaya-yess-meghalaya.html", emoji: "🧑‍🎓", title: "YESS Meghalaya", text: "युवाओं के लिए योजनाएं" },
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "किसानों को ₹6,000 सालाना" },
    { href: "/states/meghalaya.html", emoji: "🗺️", title: "मेघालय की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://mymeg.meghalaya.gov.in/", label: "🌾 MyMeg पोर्टल" },
    { href: "/states/meghalaya.html", label: "🗺️ मेघालय की सेवाएं" },
  ],
};
