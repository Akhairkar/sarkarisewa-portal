import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB Cabinet release, Nov 2023, as carried on
// pmindia.gov.in / narendramodi.in ("Cabinet approves Central Sector Scheme
// for providing drones to the Women Self Help Groups" — outlay ₹1,261 crore
// for 2024-25 to 2025-26; 15,000 selected women SHGs to give drones on rent to
// farmers; central assistance 80% of drone + accessories cost, max ₹8 lakh;
// balance as loan under Agriculture Infrastructure Financing Facility with 3%
// interest subvention; one member aged 18+ trained 15 days incl. 5 days drone
// pilot training and 10 days nutrient/pesticide application; Lead Fertilizer
// Companies; DAY-NRLM); Department of Agriculture & Farmers Welfare
// operational guidelines (Oct 2024 news reports: drone package with spare
// batteries, 1-year insurance, 2-year AMC; drone assistant also trained;
// revised target 14,500). Number of drones actually delivered, rental rate per
// acre, any honorarium and any extension after 2025-26 could not be confirmed
// from an official source and are left out. namodronedidi.da.gov.in returned
// 403 from the sandbox, so it is not linked.
export const namoDroneDidiScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "नमो ड्रोन दीदी" },
  ],
  docHi: "नमो ड्रोन दीदी",
  title: "नमो ड्रोन दीदी योजना 2026",
  description: "महिलाओं के स्वयं सहायता समूहों को कृषि उपयोग (कीटनाशक छिड़काव आदि) के लिए ड्रोन और प्रशिक्षण प्रदान करने की योजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "नमो ड्रोन दीदी योजना 2026: महिला SHG को ड्रोन पर 80% (₹8 लाख तक) मदद, ट्रेनिंग और चयन",
  lead: "नमो ड्रोन दीदी केंद्र सरकार की योजना है, जिसमें चुने हुए महिला स्वयं सहायता समूहों (SHG) को खेती के काम (खाद और कीटनाशक छिड़काव) के लिए ड्रोन दिए जाते हैं, ताकि वे किसानों को किराये पर ड्रोन सेवा देकर कमाई कर सकें। ड्रोन की कीमत का 80% (अधिकतम ₹8 लाख) केंद्र सरकार देती है। इसमें व्यक्तिगत ऑनलाइन आवेदन नहीं होता; SHG का चयन राज्य की ग्रामीण आजीविका मिशन (DAY-NRLM) के ज़रिये होता है।",
  facts: [
    ["मदद", "ड्रोन व सामान की कीमत का 80%, अधिकतम ₹8 लाख"],
    ["किसके लिए", "DAY-NRLM से जुड़े चुने हुए महिला SHG"],
    ["लक्ष्य", "15,000 महिला SHG (2024-25 से 2025-26)"],
    ["बजट", "₹1,261 करोड़"],
  ],
  notice: "<strong>सावधान:</strong> \"ड्रोन दीदी फॉर्म\" के नाम पर पैसे मांगने वाली वेबसाइटों/लोगों से बचें। चयन आपके ब्लॉक/ज़िले की आजीविका मिशन टीम और सरकारी एजेंसियां करती हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      intro: "केंद्रीय मंत्रिमंडल ने नवंबर 2023 में यह केंद्रीय क्षेत्र योजना मंज़ूर की। कृषि एवं किसान कल्याण विभाग, ग्रामीण विकास विभाग (DAY-NRLM), उर्वरक विभाग और बड़ी खाद कंपनियां (Lead Fertilizer Companies) मिलकर इसे चलाते हैं।",
      list: [
        "<strong>कमाई का मौका:</strong> SHG ड्रोन से किसानों के खेत में तरल खाद और कीटनाशक का छिड़काव करके किराया कमाता है।",
        "<strong>किसानों को फायदा:</strong> कम समय और कम मेहनत में छिड़काव।",
        "<strong>ड्रोन पैकेज:</strong> ड्रोन के साथ अतिरिक्त बैटरी, प्रोपेलर, 1 साल का बीमा और 2 साल की मेंटेनेंस (AMC) दी जाती है।",
      ],
    },
    {
      id: "paisa",
      title: "पैसा कैसे मिलता है",
      table: {
        head: ["हिस्सा", "कौन देता है"],
        rows: [
          ["ड्रोन व सामान की कीमत का 80% (अधिकतम ₹8 लाख)", "केंद्र सरकार, अनुदान के रूप में"],
          ["बाकी रकम", "SHG का क्लस्टर लेवल फेडरेशन (CLF) कृषि अवसंरचना कोष (AIF) से कर्ज़ ले सकता है"],
          ["कर्ज़ पर ब्याज", "AIF कर्ज़ पर 3% ब्याज छूट (interest subvention)"],
        ],
      },
    },
    {
      id: "training",
      title: "ड्रोन दीदी की ट्रेनिंग",
      list: [
        "SHG की एक योग्य सदस्य (18 साल या ज़्यादा) को <strong>15 दिन</strong> की ट्रेनिंग: 5 दिन अनिवार्य ड्रोन पायलट ट्रेनिंग और 10 दिन खेती में खाद/कीटनाशक छिड़काव की ट्रेनिंग।",
        "SHG की एक और सदस्य (या परिवार का सदस्य) को <strong>ड्रोन सहायक</strong> के रूप में मरम्मत और फिटिंग की ट्रेनिंग।",
      ],
    },
    {
      id: "chayan",
      title: "SHG का चयन कैसे होता है",
      steps: [
        "SHG का DAY-NRLM (राज्य ग्रामीण आजीविका मिशन, जैसे जीविका, उमेद, लखपति दीदी वाले समूह) से जुड़ा होना ज़रूरी है।",
        "राज्य और ज़िला स्तर पर ऐसे इलाके चुने जाते हैं जहां ड्रोन से छिड़काव का काम मिल सके।",
        "आजीविका मिशन की टीम योग्य, सक्रिय SHG/CLF की सूची बनाती है; खाद कंपनियां ड्रोन खरीदकर SHG को देती हैं।",
        "जानकारी के लिए अपने <strong>ब्लॉक मिशन मैनेजमेंट यूनिट (BMMU)</strong> या ज़िले के आजीविका मिशन कार्यालय से संपर्क करें।",
      ],
      callout: { kind: "info", html: "योजना 2024-25 और 2025-26 के लिए मंज़ूर हुई थी। इसके आगे बढ़ने की आधिकारिक जानकारी हमें नहीं मिली; ताज़ा स्थिति अपने आजीविका मिशन कार्यालय से पूछें।" },
    },
  ],
  official: [
    { href: "https://www.pmindia.gov.in/en/", title: "PM India: मंत्रिमंडल के फैसले (ड्रोन योजना, नवंबर 2023)" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
    { href: "https://aajeevika.gov.in/", title: "DAY-NRLM (आजीविका मिशन)" },
  ],
  faq: [
    { q: "नमो ड्रोन दीदी योजना में कितनी सब्सिडी मिलती है?", a: "ड्रोन और उसके सामान की कीमत का 80%, अधिकतम ₹8 लाख, केंद्र सरकार देती है। बाकी रकम के लिए AIF से कर्ज़ और उस पर 3% ब्याज छूट मिल सकती है।" },
    { q: "क्या कोई भी महिला ऑनलाइन आवेदन कर सकती है?", a: "नहीं। यह व्यक्तिगत योजना नहीं है। DAY-NRLM से जुड़े चुने हुए महिला स्वयं सहायता समूहों को ड्रोन दिया जाता है; चयन आजीविका मिशन के ज़रिये होता है।" },
    { q: "ड्रोन दीदी की ट्रेनिंग कितने दिन की होती है?", a: "15 दिन: 5 दिन ड्रोन पायलट ट्रेनिंग और 10 दिन खेती में खाद/कीटनाशक छिड़काव की ट्रेनिंग।" },
    { q: "कितने ड्रोन देने का लक्ष्य है?", a: "मंत्रिमंडल ने 2024-25 से 2025-26 के बीच 15,000 महिला SHG को ड्रोन देने का लक्ष्य रखा था।" },
  ],
  related: [
    { href: "/service/lakhpati-didi-yojana.html", emoji: "👩", title: "लखपति दीदी योजना", text: "SHG महिलाओं की आय बढ़ाना" },
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "किसानों को ₹6,000 सालाना" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "मुद्रा लोन", text: "छोटे कारोबार के लिए कर्ज़" },
    { href: "/tools/eligibility-checker.html", emoji: "✅", title: "पात्रता जांच", text: "आप किन योजनाओं के लिए पात्र हैं" },
  ],
  aside: [
    { href: "https://aajeevika.gov.in/", label: "👩 DAY-NRLM वेबसाइट" },
    { href: "/service/lakhpati-didi-yojana.html", label: "💰 लखपति दीदी" },
  ],
};
