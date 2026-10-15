import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026):
// - Electricity (Rights of Consumers) Amendment Rules, 2024 (Ministry of
//   Power, notified 22.02.2024; via indiaenvironmentportal.org.in, SCC Online
//   and legitquest summaries): new-connection limit after a complete
//   application — metropolitan 3 days, municipal 7 days, rural 15 days, rural
//   areas of hilly States/UTs 30 days (earlier 7/15/30). SERCs asked to align
//   their regulations (e.g. OERC notice Dec 2024, Meghalaya circular 2025).
// - Electricity (Rights of Consumers) Rules, 2020: application with proof of
//   identity and proof of ownership/occupancy; online application facility.
// Left out: connection charges, security deposit and tariff (set by each
// state commission/DISCOM); helpline 1912 is mentioned only as "many
// states" because no single national notice was found.
export const electricityConnectionBill: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "बिजली कनेक्शन और बिल" },
  ],
  docHi: "बिजली कनेक्शन और बिल",
  title: "बिजली नया कनेक्शन और बिल भुगतान 2026",
  description: "अपने राज्य के डिस्कॉम के ऑनलाइन पोर्टल के माध्यम से नया घरेलू/वाणिज्यिक बिजली कनेक्शन लेने या मासिक बिजली बिल भुगतान करने के लिए आवेदन करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "बिजली का नया कनेक्शन और बिल भुगतान 2026: आवेदन, कागज़, समय सीमा और शिकायत",
  lead: "नया बिजली कनेक्शन और बिल भुगतान आपके इलाके की <strong>बिजली वितरण कंपनी (DISCOM)</strong> करती है, कोई एक राष्ट्रीय पोर्टल नहीं है। केंद्र सरकार के बिजली (उपभोक्ता अधिकार) नियमों के 2024 संशोधन के अनुसार पूरा आवेदन जमा होने के बाद कनेक्शन मेट्रो शहरों में <strong>3 दिन</strong>, नगर क्षेत्रों में <strong>7 दिन</strong> और गांवों में <strong>15 दिन</strong> (पहाड़ी राज्यों के गांवों में 30 दिन) के अंदर मिलना चाहिए। फीस और सिक्योरिटी राशि राज्य के हिसाब से अलग है।",
  facts: [
    ["कौन देता है", "आपके इलाके की DISCOM"],
    ["समय सीमा (नियम 2024)", "मेट्रो 3 दिन, नगर 7 दिन, गांव 15 दिन"],
    ["मुख्य कागज़", "पहचान का सबूत + मालिकाना/कब्ज़े का सबूत"],
    ["फीस", "राज्य आयोग/DISCOM तय करते हैं"],
  ],
  sections: [
    {
      id: "naya-connection",
      title: "नया बिजली कनेक्शन कैसे लें",
      steps: [
        "अपने इलाके की DISCOM पहचानें: पड़ोसी के बिजली बिल पर कंपनी का नाम और वेबसाइट लिखी होती है।",
        "DISCOM की वेबसाइट/ऐप पर <strong>New Connection</strong> चुनें, या पास के बिजली उपखंड/सब-डिवीज़न कार्यालय में फॉर्म भरें।",
        "कनेक्शन का प्रकार (घरेलू/व्यावसायिक) और ज़रूरी लोड (kW) भरें।",
        "पहचान का सबूत और मकान के मालिकाना या कब्ज़े (किराया अनुबंध आदि) का सबूत अपलोड करें।",
        "DISCOM जो फीस/सिक्योरिटी राशि मांगे, भरें और आवेदन संख्या संभालें।",
        "निरीक्षण के बाद मीटर लगता है और कनेक्शन चालू होता है।",
      ],
      callout: { kind: "info", html: "किराएदार भी कनेक्शन ले सकते हैं; किराया अनुबंध या मकान मालिक की अनुमति जैसे कब्ज़े के सबूत काम आते हैं। कौन सा कागज़ मान्य है, यह DISCOM के फॉर्म में दिखेगा।" },
    },
    {
      id: "samay-seema",
      title: "कनेक्शन मिलने की समय सीमा (केंद्रीय नियम, 2024)",
      table: {
        head: ["क्षेत्र", "पूरा आवेदन जमा होने के बाद अधिकतम समय"],
        rows: [
          ["मेट्रो शहर", "3 दिन"],
          ["नगर क्षेत्र (municipal)", "7 दिन"],
          ["ग्रामीण क्षेत्र", "15 दिन"],
          ["पहाड़ी राज्यों/UT के ग्रामीण क्षेत्र", "30 दिन"],
        ],
      },
      callout: { kind: "warn", html: "जहां नई लाइन या ट्रांसफॉर्मर लगाना पड़े, वहां राज्य आयोग के नियमों में अलग समय हो सकता है। आपके राज्य की सही समय सीमा राज्य बिजली नियामक आयोग (SERC) के नियमों/DISCOM की वेबसाइट पर देखें।" },
    },
    {
      id: "bill",
      title: "बिजली बिल कैसे भरें",
      list: [
        "<strong>DISCOM की वेबसाइट/ऐप:</strong> उपभोक्ता संख्या (Consumer/Account Number) डालकर बिल देखें और भरें।",
        "<strong>UPI ऐप या बैंक ऐप:</strong> \"Electricity\" में अपनी DISCOM चुनें और उपभोक्ता संख्या डालें।",
        "<strong>ऑफलाइन:</strong> DISCOM के कैश काउंटर या अधिकृत केंद्र पर। रसीद संभाल कर रखें।",
      ],
      callout: { kind: "warn", html: "<strong>ठगी से बचें:</strong> \"आज रात बिजली कट जाएगी, इस नंबर पर कॉल करें\" जैसे SMS/WhatsApp नकली होते हैं। किसी के कहने पर स्क्रीन-शेयरिंग ऐप डाउनलोड न करें। बिल सिर्फ DISCOM की आधिकारिक वेबसाइट/ऐप या भरोसेमंद UPI ऐप से भरें।" },
    },
    {
      id: "shikayat",
      title: "गलत बिल, बिजली कटौती और शिकायत",
      steps: [
        "DISCOM के कस्टमर केयर नंबर पर शिकायत दर्ज करें (कई राज्यों में <strong>1912</strong> नंबर चलता है) और शिकायत संख्या लें।",
        "गलत बिल हो तो मीटर रीडिंग की फोटो और पुराने बिल के साथ उपखंड कार्यालय में लिखित शिकायत दें।",
        "हल न हो तो DISCOM के <strong>उपभोक्ता शिकायत निवारण फोरम (CGRF)</strong> में शिकायत करें।",
        "फोरम के फैसले से संतुष्ट न हों तो राज्य के <strong>विद्युत लोकपाल (Electricity Ombudsman)</strong> के पास जा सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय, भारत सरकार" },
    { href: "https://indiaenvironmentportal.org.in/reports-and-documents/electricity-rights-of-consumers-amendment-rules-2024", title: "बिजली (उपभोक्ता अधिकार) संशोधन नियम 2024 (प्रति)" },
  ],
  faq: [
    { q: "नया बिजली कनेक्शन कितने दिन में मिलना चाहिए?", a: "2024 के केंद्रीय नियमों के अनुसार पूरा आवेदन जमा होने के बाद मेट्रो शहरों में 3 दिन, नगर क्षेत्रों में 7 दिन, गांवों में 15 दिन और पहाड़ी राज्यों के गांवों में 30 दिन। राज्य आयोग के नियम भी देखें।" },
    { q: "नए कनेक्शन के लिए कौन से कागज़ चाहिए?", a: "मुख्य रूप से पहचान का सबूत और मकान के मालिकाना या कब्ज़े (जैसे किराया अनुबंध) का सबूत। DISCOM का फॉर्म पूरी सूची बताता है।" },
    { q: "बिजली कनेक्शन की फीस कितनी है?", a: "यह राज्य बिजली नियामक आयोग और DISCOM तय करते हैं, और लोड व कनेक्शन के प्रकार पर निर्भर है। आवेदन करते समय DISCOM की वेबसाइट पर देखें।" },
    { q: "गलत बिजली बिल की शिकायत कहां करें?", a: "पहले DISCOM के कस्टमर केयर/उपखंड कार्यालय में, फिर उपभोक्ता शिकायत निवारण फोरम (CGRF), और उसके बाद विद्युत लोकपाल के पास।" },
  ],
  related: [
    { href: "/service/pm-surya-ghar-muft-bijli.html", emoji: "☀️", title: "PM सूर्य घर मुफ्त बिजली", text: "छत पर सोलर" },
    { href: "/service/sub-divisional-electricity-meter-shift.html", emoji: "🔌", title: "बिजली मीटर शिफ्ट", text: "मीटर हटवाना/बदलवाना" },
    { href: "/service/saubhagya-free-electricity-connection.html", emoji: "💡", title: "सौभाग्य योजना", text: "बिजली कनेक्शन योजना" },
    { href: "/rent-agreement/format.html", emoji: "📄", title: "किराया अनुबंध फॉर्मेट", text: "कब्ज़े का सबूत" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "#naya-connection", label: "🔌 नया कनेक्शन कैसे लें" },
    { href: "#shikayat", label: "📢 बिल की शिकायत" },
  ],
};
