import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old post (same URL). Close overlap with
// /service/lakhpati-didi-yojana.html, so this post takes the "first steps for
// a village woman + common problems" angle and links there for the full rules.
// The old title said "ऑनलाइन आवेदन" (there is no individual online form) and
// was cut off; fixed minimally.
// Sources (checked 16 Oct 2026), reused from the verified guide
// web/src/guides/doc/lakhpati-didi-yojana.ts: lakhpatididi.gov.in (definition:
// household income ₹1 lakh+/year, average monthly income above ₹10,000 for at
// least 4 agricultural seasons/business cycles; potential Didis = SHG members
// of 2+ years who availed CIF and do 2+ livelihood activities; Lakhpati plan by
// CRP; RF avg ₹20,000-30,000 per SHG, CIF up to ₹2.5 lakh per SHG; helpline
// 0120-5202521 Mon-Sat 9-6), pmindia.gov.in 13.02.2026 (3 crore reached ahead
// of March 2027; new target 6 crore by March 2029). Namo Drone Didi facts from
// web/src/guides/doc/namo-drone-didi-scheme.ts. Old page's "3 crore target"
// updated; list of trades kept general.

export const lakhpatiDidiYojana2026Benefits: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "लखपति दीदी: कैसे जुड़ें" },
  ],
  docHi: "लखपति दीदी",
  title: "Lakhpati Didi Yojana 2026: आवेदन कैसे करें और लाभ गाइड",
  description: "लखपति दीदी 2026: SHG से जुड़कर गांव की महिला सालाना ₹1 लाख आय तक कैसे पहुंचे, पहला कदम, किससे मिलें, कौन से कागज़ रखें और आम भ्रम।",
  published: "2026-08-23",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "लखपति दीदी 2026: गांव की महिला कैसे जुड़े, क्या फायदा मिलता है",
  lead: "लखपति दीदी कोई नकद राशि या ऑनलाइन फॉर्म वाली योजना नहीं है। यह ग्रामीण आजीविका मिशन (DAY-NRLM) की पहल है, जिसमें स्वयं सहायता समूह (SHG) की महिला को प्रशिक्षण, समूह के फंड, बैंक लोन और बाज़ार से जोड़कर उसके परिवार की आय कम से कम ₹1 लाख सालाना तक पहुंचाई जाती है। जुड़ने का पहला कदम है गांव के SHG की सदस्य बनना। सरकार के अनुसार 3 करोड़ का लक्ष्य पूरा हो चुका है और अब मार्च 2029 तक 6 करोड़ का लक्ष्य है।",
  facts: [
    ["किसके लिए", "ग्रामीण SHG की महिलाएं"],
    ["लक्ष्य आय", "परिवार की आय ₹1 लाख+ सालाना"],
    ["ऑनलाइन फॉर्म", "नहीं; SHG/ग्राम संगठन के ज़रिए"],
    ["हेल्पलाइन", "0120-5202521 (सोम-शनि, 9 से 6)"],
  ],
  sections: [
    {
      id: "pehla-kadam",
      title: "पहला कदम: अपनी स्थिति के हिसाब से",
      table: {
        head: ["आप कहां हैं", "क्या करें"],
        rows: [
          ["किसी SHG में नहीं हैं", "गांव के ग्राम संगठन, आजीविका दीदी/CRP या ब्लॉक के ग्रामीण आजीविका मिशन कार्यालय से मिलें और किसी समूह में जुड़ें या नया समूह बनवाएं"],
          ["SHG में नई हैं (2 साल से कम)", "बैठक, बचत और कर्ज़ वापसी नियमित रखें। संभावित लखपति दीदी आम तौर पर 2 साल पुराने सदस्यों में से चुनी जाती हैं"],
          ["SHG में 2+ साल से हैं", "समूह की बैठक में बताएं कि आप कौन सा काम बढ़ाना चाहती हैं। CRP आपके परिवार की \"लखपति योजना\" (आजीविका प्लान) बनाते हैं"],
          ["काम चल रहा है, पूंजी चाहिए", "समूह को मिले फंड (CIF) से कर्ज़ या बैंक लिंकेज के बारे में ग्राम संगठन से पूछें"],
        ],
      },
    },
    {
      id: "fayde",
      title: "असल में क्या फायदा मिलता है",
      list: [
        "<strong>प्रशिक्षण:</strong> आपके चुने काम (खेती, पशुपालन, छोटी दुकान, सिलाई, खाद्य प्रसंस्करण जैसे काम) से जुड़ा कौशल प्रशिक्षण।",
        "<strong>समूह के ज़रिए पूंजी:</strong> SHG को रिवॉल्विंग फंड (औसतन ₹20,000-30,000) और सामुदायिक निवेश निधि (₹2.5 लाख तक प्रति SHG) मिलती है, जिससे सदस्यों को कर्ज़ मिलता है।",
        "<strong>बैंक लोन:</strong> समूह को बैंक से जोड़ा जाता है; राशि और ब्याज बैंक व राज्य की व्यवस्था पर निर्भर है।",
        "<strong>बाज़ार:</strong> मेले, सरस आजीविका जैसे आयोजन और ऑनलाइन बिक्री से जोड़ने की कोशिश।",
        "<strong>दूसरी योजनाएं:</strong> चुने हुए SHG को <a href=\"/blog/namo-drone-didi-scheme-2026-training.html\">नमो ड्रोन दीदी</a> जैसी योजनाओं से भी जोड़ा जाता है।",
      ],
      callout: { kind: "info", html: "पैसा व्यक्ति के खाते में सीधे नहीं आता; मदद समूह और उसके संगठनों के ज़रिए मिलती है। पूरे नियम: <a href=\"/service/lakhpati-didi-yojana.html\">लखपति दीदी योजना गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "लखपति दीदी के लिए अलग फॉर्म नहीं है, पर SHG सदस्यता और बैंक लोन के लिए आम तौर पर ये लगते हैं:",
      list: [
        "आधार कार्ड",
        "अपने नाम का बैंक खाता (पासबुक), जो आधार से जुड़ा हो",
        "SHG की पासबुक / सदस्यता का रिकॉर्ड",
        "पासपोर्ट साइज फोटो",
        "लोन के समय बैंक जो कागज़ मांगे (जैसे काम की योजना, पता प्रमाण)",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["गांव में कोई SHG नहीं / समूह बंद पड़ा है", "ब्लॉक के ग्रामीण आजीविका मिशन (SRLM) कार्यालय से नया समूह बनवाने को कहें"],
          ["समूह का बैंक खाता या लोन अटका", "ग्राम संगठन/क्लस्टर संगठन और बैंक सखी से बात करें; समूह की बचत और कर्ज़ वापसी का रिकॉर्ड ठीक रखें"],
          ["कोई \"लखपति दीदी फॉर्म\" के पैसे मांग रहा", "न दें। इसका कोई व्यक्तिगत फॉर्म या फीस नहीं है"],
          ["शहर में रहती हैं", "यह ग्रामीण आजीविका मिशन की पहल है; शहरी महिलाओं के लिए शहरी आजीविका मिशन और <a href=\"/service/pm-mudra-yojana.html\">मुद्रा लोन</a> जैसे विकल्प देखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://lakhpatididi.gov.in/", title: "लखपति दीदी पोर्टल (DAY-NRLM)", note: "हेल्पलाइन 0120-5202521" },
    { href: "https://aajeevika.gov.in/", title: "DAY-NRLM (आजीविका मिशन)" },
    { href: "https://rural.gov.in/", title: "ग्रामीण विकास मंत्रालय" },
  ],
  faq: [
    { q: "क्या लखपति दीदी में ₹1 लाख मिलते हैं?", a: "नहीं। ₹1 लाख वह सालाना पारिवारिक आय है जिस तक पहुंचाने का लक्ष्य है। सरकार कोई ₹1 लाख नकद नहीं देती।" },
    { q: "क्या ऑनलाइन आवेदन होता है?", a: "नहीं, कोई व्यक्तिगत ऑनलाइन फॉर्म नहीं है। SHG की सदस्य बनें और ग्राम संगठन या ब्लॉक के आजीविका मिशन कार्यालय से जुड़ें।" },
    { q: "लखपति दीदी कब मानी जाती है?", a: "जब SHG सदस्य के परिवार की सालाना आय ₹1 लाख या ज़्यादा हो, औसत मासिक आय ₹10,000 से ज़्यादा हो और यह कम से कम 4 फसल सीज़न/कारोबारी चक्र तक बनी रहे।" },
    { q: "अब लक्ष्य कितना है?", a: "सरकार के अनुसार 3 करोड़ लखपति दीदी का लक्ष्य पूरा हुआ और फरवरी 2026 में नया लक्ष्य मार्च 2029 तक 6 करोड़ रखा गया।" },
  ],
  related: [
    { href: "/service/lakhpati-didi-yojana.html", emoji: "👩", title: "लखपति दीदी योजना: पूरी गाइड", text: "परिभाषा, चयन, फंड" },
    { href: "/service/deendayal-antyodaya-yojana-nrlm.html", emoji: "🤝", title: "DAY-NRLM", text: "ग्रामीण आजीविका मिशन और SHG" },
    { href: "/service/namo-drone-didi-scheme.html", emoji: "🚁", title: "नमो ड्रोन दीदी", text: "SHG को ड्रोन पर 80% मदद" },
    { href: "/service/pm-mudra-yojana.html", emoji: "🏪", title: "PM मुद्रा योजना", text: "छोटे कारोबार के लिए लोन" },
  ],
  aside: [
    { href: "https://lakhpatididi.gov.in/", label: "👩 लखपति दीदी पोर्टल" },
    { href: "/service/lakhpati-didi-yojana.html", label: "📘 योजना की पूरी गाइड" },
  ],
};
