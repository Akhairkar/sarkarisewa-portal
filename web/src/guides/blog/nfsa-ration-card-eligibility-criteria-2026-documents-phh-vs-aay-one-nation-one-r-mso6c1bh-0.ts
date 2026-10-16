import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old post (same URL). Overlaps with
// /service/ration-card.html and /service/pm-garib-kalyan-anna-yojana.html; this
// post takes the "PHH vs AAY: which card fits my family" explainer angle and
// links there for how to apply. Title was cut off; completed from the old h1.
// Sources (checked 16 Oct 2026):
// - Reused from web/src/guides/doc/ration-card.ts and
//   pm-garib-kalyan-anna-yojana.ts: NFSA 2013 (75% rural / 50% urban coverage;
//   AAY 35 kg per household, PHH 5 kg per person per month; states identify
//   households; eldest woman 18+ as head), PMGKAY free foodgrains 1.1.2024 to
//   31.12.2028 (Cabinet 29.11.2023), nfsa.gov.in (ONORC, Mera Ration app,
//   toll-free 1967 in most states).
// - AAY identification criteria: Lok Sabha unstarred Q 1444, July 2024
//   (eparlib.nic.in): landless agricultural labourers, marginal farmers, rural
//   artisans, informal daily-wage workers (porters, rickshaw pullers etc.);
//   households headed by widows / terminally ill / disabled / persons 60+ with
//   no assured subsistence; single persons without support; all primitive
//   tribal households; eligible BPL families of HIV-positive persons; AAY
//   ceiling about 2.5 crore households. State income/asset limits vary, so no
//   income figure is given.

export const nfsaRationCardEligibilityCriteria2026DocumentsPhhVsAayOneNationOneRMso6c1bh0: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "NFSA राशन कार्ड: PHH बनाम AAY" },
  ],
  docHi: "NFSA पात्रता",
  title: "NFSA राशन कार्ड पात्रता मानदंड 2026: दस्तावेज, PHH बनाम AAY और वन नेशन वन राशन कार्ड",
  description: "NFSA राशन कार्ड पात्रता, जरूरी दस्तावेज, PHH बनाम AAY श्रेणी और वन नेशन वन राशन कार्ड की पूरी जानकारी।",
  published: "2026-08-09",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "NFSA राशन कार्ड 2026: PHH और AAY में फर्क, आपका परिवार किसमें आता है",
  lead: "राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013 के तहत दो तरह के राशन कार्ड हैं: अंत्योदय (AAY), जिसमें परिवार को हर महीने 35 किलो अनाज मिलता है, और प्राथमिकता परिवार (PHH), जिसमें हर सदस्य को 5 किलो। 1 जनवरी 2024 से 31 दिसंबर 2028 तक यह अनाज मुफ्त है। कौन सा परिवार किस श्रेणी में आएगा, यह राज्य सरकार केंद्र के दिशानिर्देश और अपने आय/संपत्ति नियमों से तय करती है।",
  facts: [
    ["AAY", "35 किलो अनाज प्रति परिवार प्रति माह"],
    ["PHH", "5 किलो अनाज प्रति व्यक्ति प्रति माह"],
    ["कीमत", "मुफ्त (1.1.2024 से 31.12.2028)"],
    ["शिकायत", "राज्य की खाद्य हेल्पलाइन (ज़्यादातर 1967)"],
  ],
  sections: [
    {
      id: "farq",
      title: "PHH और AAY में फर्क",
      table: {
        head: ["बात", "अंत्योदय (AAY)", "प्राथमिकता परिवार (PHH)"],
        rows: [
          ["किसके लिए", "सबसे गरीब परिवार", "NFSA में शामिल बाकी पात्र परिवार"],
          ["अनाज", "35 किलो प्रति परिवार, सदस्य कितने भी हों", "5 किलो प्रति सदस्य (कार्ड में दर्ज हर व्यक्ति)"],
          ["कीमत", "मुफ्त", "मुफ्त"],
          ["और क्या", "रियायती दर पर चीनी", "राज्य की योजना के अनुसार"],
          ["कौन तय करता है", "राज्य, केंद्र के AAY मानदंड से", "राज्य, अपने आय/संपत्ति नियमों से"],
        ],
      },
      callout: { kind: "info", html: "छोटे परिवार (1-6 सदस्य) के लिए AAY में ज़्यादा अनाज मिलता है; 7 या ज़्यादा सदस्य हों तो PHH में कुल अनाज 35 किलो या ज़्यादा हो जाता है।" },
    },
    {
      id: "aay",
      title: "AAY में किन परिवारों को रखा जाता है",
      intro: "केंद्र सरकार के दिशानिर्देश (लोकसभा उत्तर, जुलाई 2024) के अनुसार राज्य इन परिवारों को AAY के लिए चुनते हैं:",
      list: [
        "भूमिहीन खेतिहर मज़दूर, सीमांत किसान, ग्रामीण कारीगर, और गांव-शहर के दिहाड़ी मज़दूर (जैसे कुली, रिक्शा चालक)",
        "जिन परिवारों की मुखिया विधवा, गंभीर रूप से बीमार, दिव्यांग या 60 साल से ऊपर का व्यक्ति हो और कमाई का पक्का साधन न हो",
        "अकेले रहने वाले महिला/पुरुष जिनका कोई सहारा न हो",
        "सभी आदिम जनजाति (PVTG) परिवार",
        "HIV पॉज़िटिव व्यक्तियों के पात्र गरीब परिवार",
      ],
      callout: { kind: "warn", html: "पूरे देश में AAY परिवारों की संख्या की सीमा (लगभग 2.5 करोड़) तय है। इसलिए पात्र होने पर भी AAY में नाम तभी जुड़ता है जब राज्य के कोटे में जगह हो।" },
    },
    {
      id: "phh",
      title: "PHH (प्राथमिकता परिवार) की पात्रता",
      intro: "PHH के नियम हर राज्य अलग रखता है। आम तौर पर ये परिवार बाहर रखे जाते हैं:",
      list: [
        "परिवार में कोई सरकारी/स्थायी नौकरी वाला या आयकर देने वाला सदस्य",
        "चारपहिया वाहन, पक्का बड़ा मकान या राज्य की सीमा से ज़्यादा ज़मीन",
        "राज्य की तय आय सीमा से ज़्यादा आय",
        "जिसका देश में कहीं और राशन कार्ड बना हो",
      ],
      html: "अपने राज्य के नियम और ऑनलाइन आवेदन: <a href=\"/states/index.html\">राज्यवार सेवाएं</a> में अपना राज्य चुनें।",
    },
    {
      id: "kagaz",
      title: "ज़रूरी दस्तावेज़",
      list: [
        "परिवार के सभी सदस्यों का आधार",
        "पते का प्रमाण (बिजली बिल, किरायानामा, वोटर ID आदि)",
        "आय प्रमाण पत्र (जहां राज्य मांगे); AAY के लिए विधवा/दिव्यांग/बीमारी का प्रमाण काम आता है",
        "मुखिया (परिवार की सबसे बड़ी 18+ उम्र की महिला) की फोटो और बैंक खाते का विवरण",
        "पुराने कार्ड से नाम कटवाया हो तो उसका प्रमाण",
      ],
    },
    {
      id: "onorc",
      title: "वन नेशन वन राशन कार्ड: दूसरे राज्य में राशन",
      list: [
        "NFSA कार्ड (AAY या PHH) वाले देश की किसी भी सरकारी राशन दुकान से अपने हिस्से का अनाज ले सकते हैं; नया कार्ड नहीं बनवाना पड़ता।",
        "दुकान पर राशन कार्ड नंबर या आधार बताएं और ePoS मशीन पर अंगूठा लगाएं।",
        "परिवार बंटा हो तो एक सदस्य शहर में और बाकी गांव में अपने-अपने हिस्से का राशन ले सकते हैं।",
        "\"Mera Ration\" ऐप में अपना हक और पिछली बार का राशन देखें।",
      ],
    },
  ],
  official: [
    { href: "https://nfsa.gov.in/", title: "NFSA पोर्टल", note: "राज्यों के खाद्य विभाग के लिंक, टोल-फ्री नंबर" },
    { href: "https://dfpd.gov.in/", title: "खाद्य एवं सार्वजनिक वितरण विभाग, भारत सरकार" },
  ],
  faq: [
    { q: "PHH से AAY कार्ड में कैसे बदलें?", a: "अपने ब्लॉक/तहसील के खाद्य आपूर्ति कार्यालय में आवेदन दें और AAY मानदंड का प्रमाण (जैसे विधवा, दिव्यांग, गंभीर बीमारी) लगाएं। AAY का कोटा सीमित है, इसलिए बदलाव राज्य में जगह होने पर ही होता है।" },
    { q: "क्या एक परिवार के दो राशन कार्ड हो सकते हैं?", a: "नहीं। एक परिवार का एक ही राशन कार्ड होता है; दूसरे राज्य में जाने पर ONORC से वहीं राशन लें या पुराने कार्ड से नाम कटवाकर नया बनवाएं।" },
    { q: "क्या राशन के पैसे देने पड़ते हैं?", a: "नहीं। NFSA का अनाज 1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त है। पैसे मांगे जाएं तो 1967 या राज्य हेल्पलाइन पर शिकायत करें।" },
    { q: "आय सीमा कितनी है?", a: "NFSA में आय सीमा केंद्र तय नहीं करता; हर राज्य अपने नियम बनाता है। अपने राज्य का राशन कार्ड पेज या खाद्य विभाग का पोर्टल देखें।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी गाइड", text: "नया कार्ड, नाम जोड़ना, शिकायत" },
    { href: "/service/pm-garib-kalyan-anna-yojana.html", emoji: "🌾", title: "PM गरीब कल्याण अन्न योजना", text: "मुफ्त अनाज योजना" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "पात्रता के लिए आय का प्रमाण" },
    { href: "/service/migrant-worker-registration.html", emoji: "🧳", title: "प्रवासी मज़दूर पंजीकरण", text: "दूसरे राज्य में काम करने वालों के लिए" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://nfsa.gov.in/", label: "🍚 NFSA पोर्टल" },
    { href: "/service/ration-card.html", label: "📘 राशन कार्ड गाइड" },
  ],
};
