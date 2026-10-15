import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): web searches for a Mizoram "Chief Minister
// Rural Housing Scheme" (2024-2026) found no official notification,
// department page or myScheme entry; aggregator pages only, not used.
// Central scheme: PIB / Cabinet decision of 09.08.2024 on PMAY-G for FY
// 2024-25 to 2028-29 (2 crore more rural houses; unit assistance ₹1.20 lakh
// in plain areas, ₹1.30 lakh in North Eastern and hill states). State
// livelihood scheme: myScheme "mbkhhs" (Mizoram Bana Kaih (Handholding)
// Scheme, Planning & Programme Implementation Department, from 19.09.2024,
// portal handholding.mizoram.gov.in). Title kept; old description (claiming
// a running state scheme) rewritten.
export const mizoramChiefMinisterRuralHousingScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मिज़ोरम", href: "/states/mizoram.html" },
    { label: "मुख्यमंत्री ग्रामीण आवास योजना" },
  ],
  docHi: "मुख्यमंत्री ग्रामीण आवास योजना",
  title: "Chief Minister Rural Housing Scheme",
  description: "मिज़ोरम के गांवों में पक्के घर के लिए मदद: \"मुख्यमंत्री ग्रामीण आवास योजना\" का आधिकारिक विवरण नहीं मिला; PMAY-ग्रामीण (₹1.30 लाख) में नाम, स्थिति और शिकायत कैसे करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मिज़ोरम मुख्यमंत्री ग्रामीण आवास योजना: गांव में घर बनाने के लिए मदद कैसे लें",
  lead: "15 अक्टूबर 2026 तक हमें मिज़ोरम सरकार की \"Chief Minister Rural Housing Scheme\" की कोई आधिकारिक अधिसूचना, पोर्टल या myScheme पर विवरण नहीं मिला। मिज़ोरम के गांवों में पक्का घर बनाने की मुख्य सरकारी मदद <strong>प्रधानमंत्री आवास योजना-ग्रामीण (PMAY-G)</strong> है, जिसमें उत्तर-पूर्व और पहाड़ी राज्यों में प्रति घर <strong>₹1.30 लाख</strong> मिलते हैं। चयन सरकारी सर्वे/सूची से होता है, अलग फॉर्म से नहीं।",
  facts: [
    ["मुख्य योजना", "PMAY-ग्रामीण (केंद्र व राज्य)"],
    ["सहायता", "₹1.30 लाख प्रति घर (पहाड़ी/उत्तर-पूर्व)"],
    ["अवधि", "2024-25 से 2028-29"],
    ["कहां पूछें", "ग्राम परिषद / BDO"],
  ],
  notice: "किसी नई \"मुख्यमंत्री आवास\" योजना की घोषणा हो तो उसका आदेश ग्रामीण विकास विभाग या ज़िला प्रशासन से ही मानें। फॉर्म भरवाने या नाम जुड़वाने के लिए किसी को पैसे न दें।",
  sections: [
    {
      id: "pmayg",
      title: "PMAY-ग्रामीण: क्या मिलता है",
      list: [
        "पक्का घर बनाने के लिए <strong>₹1.30 लाख</strong> (उत्तर-पूर्व व पहाड़ी राज्य); मैदानी राज्यों में ₹1.20 लाख।",
        "पैसा किश्तों में सीधे लाभार्थी के आधार से जुड़े बैंक खाते में; निर्माण के हर चरण की जियो-टैग फोटो से जांच।",
        "केंद्र ने अगस्त 2024 में योजना 2028-29 तक बढ़ाई, 2 करोड़ और ग्रामीण घरों के लक्ष्य के साथ।",
        "घर आम तौर पर महिला के नाम या पति-पत्नी के संयुक्त नाम पर दिया जाता है।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "गांव में रहने वाला बेघर परिवार, या कच्चे/जर्जर घर में रहने वाला परिवार",
        "नाम सरकारी आवास सर्वे/स्थायी प्रतीक्षा सूची में हो और ग्राम सभा ने जांचा हो",
        "जिनके पास पक्का घर है या जो योजना की बहिष्करण शर्तों में आते हैं (जैसे सरकारी नौकरी, तय सीमा से ज़्यादा आय या संपत्ति), वे पात्र नहीं",
      ],
      callout: { kind: "info", html: "बहिष्करण की पूरी सूची और ताज़ा सर्वे की जानकारी BDO कार्यालय या <a href=\"https://pmayg.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmayg.nic.in</a> पर देखें।" },
    },
    {
      id: "kaise",
      title: "क्या करें",
      steps: [
        "अपनी <strong>ग्राम परिषद (Village Council)</strong> से पूछें कि गांव की आवास सूची में आपका नाम है या नहीं।",
        "ब्लॉक विकास अधिकारी (BDO) कार्यालय में पूछें कि नया सर्वे/सूची संशोधन कब है और नाम कैसे जुड़ेगा।",
        "आधार, आधार से जुड़ा बैंक खाता, राशन कार्ड, जॉब कार्ड (MGNREGA, यदि हो) और ज़मीन के कागज़ तैयार रखें।",
        "स्वीकृति के बाद किश्तें और निर्माण की प्रगति pmayg.nic.in पर रजिस्ट्रेशन नंबर से देखें।",
        "किश्त रुकी हो या कोई पैसे मांगे तो BDO, ज़िला ग्रामीण विकास एजेंसी या उपायुक्त कार्यालय में लिखित शिकायत दें।",
      ],
    },
    {
      id: "bana-kaih",
      title: "मिज़ोरम सरकार की आजीविका योजना",
      intro: 'मौजूदा राज्य सरकार की प्रमुख योजना <strong>Mizoram Bana Kaih (Handholding) Scheme</strong> (19 सितंबर 2024 से) है, जो घर नहीं बल्कि व्यवसाय/आजीविका के लिए कर्ज और मदद देती है। विवरण: <a href="/service/mizoram-sedp-policy.html">SEDP और Bana Kaih गाइड</a>।',
    },
  ],
  official: [
    { href: "https://pmayg.nic.in/", title: "प्रधानमंत्री आवास योजना-ग्रामीण", note: "सूची और स्थिति" },
    { href: "https://mizoram.gov.in/", title: "मिज़ोरम सरकार" },
    { href: "https://handholding.mizoram.gov.in/", title: "Mizoram Bana Kaih (Handholding) पोर्टल", note: "आजीविका योजना, आवास नहीं" },
  ],
  faq: [
    { q: "क्या मिज़ोरम में मुख्यमंत्री ग्रामीण आवास योजना चल रही है?", a: "15 अक्टूबर 2026 तक हमें इस नाम की योजना का आधिकारिक आदेश या पोर्टल नहीं मिला। गांव में घर के लिए मुख्य मदद PMAY-ग्रामीण से मिलती है।" },
    { q: "PMAY-ग्रामीण में मिज़ोरम में कितनी राशि मिलती है?", a: "उत्तर-पूर्व और पहाड़ी राज्यों में ₹1.30 लाख प्रति घर।" },
    { q: "आवेदन फॉर्म कहां मिलेगा?", a: "PMAY-G में लाभार्थी सरकारी सर्वे/सूची से चुने जाते हैं, खुले फॉर्म से नहीं। ग्राम परिषद और BDO से सूची के बारे में पूछें।" },
    { q: "Bana Kaih योजना से घर बन सकता है?", a: "नहीं, Bana Kaih (Handholding) योजना व्यवसाय और आजीविका के लिए है, आवास के लिए नहीं।" },
  ],
  related: [
    { href: "/service/pm-awas-yojana.html", emoji: "🏠", title: "प्रधानमंत्री आवास योजना", text: "पात्रता और आवेदन" },
    { href: "/service/mizoram-bpl-housing-scheme.html", emoji: "🏘️", title: "BPL आवास (मिज़ोरम)", text: "गरीब परिवारों के लिए घर" },
    { href: "/service/mizoram-sedp-policy.html", emoji: "🤝", title: "SEDP / Bana Kaih (मिज़ोरम)", text: "आजीविका सहायता" },
    { href: "/service/mizoram-ration-card.html", emoji: "🍚", title: "राशन कार्ड (मिज़ोरम)", text: "परिवार का प्रमाण" },
    { href: "/states/mizoram.html", emoji: "🎍", title: "मिज़ोरम की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://pmayg.nic.in/", label: "🏠 PMAY-G स्थिति देखें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
