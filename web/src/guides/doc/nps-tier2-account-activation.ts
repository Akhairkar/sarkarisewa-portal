import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; pfrda.org.in and the CRA sites were not
// reachable from the sandbox, search-result extracts used): PFRDA "NPS for
// All Citizen Models" page (Tier II needs an active Tier I; no withdrawal
// restriction; NRIs/OCIs with Tier I not permitted to activate Tier II; PAN
// mandatory); PFRDA bar on third-party payments into Tier II (Business
// Standard / PTI); Protean CRA knowledge centre "Through Online (eNPS)"
// (Tier II Activation on enps.nsdl.com with OTP, online form and payment,
// form with PAN copy and cancelled cheque; offline via POP-SP with Form
// UOS-S10, copy of PRAN card, PAN, cancelled cheque). Minimum opening and
// per-transaction amounts differ between sources (₹1,000/₹250 on PFRDA and
// Protean pages vs. lower figures on 2026 blogs), so no number is given.
export const npsTier2AccountActivation: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "NPS टियर-2 खाता" },
  ],
  docHi: "NPS टियर-2 खाता",
  title: "एनपीएस टियर-2 खाता ऑनलाइन (NPS Tier-II Activation)",
  description: "NPS टियर-1 खाताधारक बिना लॉक-इन वाला टियर-2 खाता चालू कर सकते हैं। eNPS पर ऑनलाइन या POP से चालू करने का तरीका, ज़रूरी कागज़, निकासी और ध्यान रखने वाली बातें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "NPS टियर-2 खाता 2026: कौन खोल सकता है, eNPS पर ऑनलाइन कैसे चालू करें, पैसा कब निकाल सकते हैं",
  lead: "NPS (राष्ट्रीय पेंशन प्रणाली) का टियर-2 खाता एक वैकल्पिक बचत/निवेश खाता है, जिसमें पैसा कभी भी निकाला जा सकता है। इसे वही चालू कर सकता है जिसका NPS टियर-1 खाता (PRAN) चालू है, और PAN ज़रूरी है। खाता eNPS पोर्टल पर OTP से ऑनलाइन या बैंक/POP शाखा में फॉर्म देकर चालू होता है।",
  facts: [
    ["नियामक", "PFRDA (पेंशन निधि विनियामक एवं विकास प्राधिकरण)"],
    ["कौन खोल सकता है", "चालू टियर-1 (PRAN) वाला भारतीय निवासी"],
    ["निकासी", "कभी भी, कोई लॉक-इन नहीं"],
    ["ज़रूरी", "PAN और अपना बैंक खाता"],
  ],
  sections: [
    {
      id: "fark",
      title: "टियर-1 और टियर-2 में फर्क",
      table: {
        head: ["बात", "टियर-1", "टियर-2"],
        rows: [
          ["उद्देश्य", "रिटायरमेंट पेंशन", "वैकल्पिक बचत/निवेश"],
          ["खोलना", "मुख्य NPS खाता", "सिर्फ चालू टियर-1 होने पर"],
          ["पैसा निकालना", "नियमों के तहत, सीमित", "कभी भी"],
          ["टैक्स छूट", "नियमों के अनुसार मिलती है", "आम निवेशक के लिए आम तौर पर नहीं"],
        ],
      },
      callout: { kind: "info", html: "टियर-2 में पैसा बाज़ार से जुड़े फंड में लगता है, इसलिए रकम घट-बढ़ सकती है। यह बचत खाते या FD जैसा तय ब्याज नहीं देता।" },
    },
    {
      id: "online",
      title: "eNPS पर ऑनलाइन कैसे चालू करें",
      steps: [
        "अपने CRA (जिस संस्था में आपका PRAN है, जैसे Protean, KFintech या CAMS) का eNPS पोर्टल खोलें। Protean वाले PRAN के लिए <a href=\"https://enps.nsdl.com/\" target=\"_blank\" rel=\"noopener nofollow\">enps.nsdl.com</a> है।",
        "<strong>Tier II Activation</strong> विकल्प चुनें और PRAN, जन्म तिथि जैसी मांगी गई जानकारी डालकर मोबाइल पर आया OTP भरें।",
        "बैंक खाते और नामांकित (nominee) की जानकारी जांचें, निवेश का विकल्प/फंड मैनेजर चुनें।",
        "पहला योगदान ऑनलाइन भरें। न्यूनतम राशि भुगतान के समय पोर्टल पर दिखती है।",
        "अगर पोर्टल फॉर्म पर दस्तखत करके भेजने को कहे, तो PAN की कॉपी और कैंसिल चेक के साथ बताए पते पर भेजें या ई-साइन करें।",
      ],
      callout: { kind: "warn", html: "PFRDA के नियम के अनुसार टियर-2 में पैसा <strong>अपने ही बैंक खाते</strong> से जमा करें; किसी दूसरे (थर्ड-पार्टी) के खाते से भुगतान स्वीकार नहीं होता।" },
    },
    {
      id: "offline",
      title: "बैंक/POP शाखा से चालू करना",
      steps: [
        "किसी POP (Point of Presence) शाखा में जाएं; कई बैंक और डाकघर NPS सेवा देते हैं।",
        "टियर-2 चालू करने का फॉर्म (UOS-S10) भरें।",
        "साथ में PRAN कार्ड की कॉपी, PAN कार्ड, कैंसिल चेक और पहला योगदान दें।",
        "सरकारी कर्मचारी अपने नोडल कार्यालय के ज़रिए भी फॉर्म दे सकते हैं।",
      ],
    },
    {
      id: "nikasi",
      title: "पैसा जमा करना और निकालना",
      list: [
        "आगे का योगदान eNPS पर PRAN और जन्म तिथि डालकर OTP से कर सकते हैं।",
        "टियर-2 से निकासी पर कोई रोक नहीं है; अनुरोध PRAN लॉग-इन (CRA पोर्टल/NPS ऐप) या POP से होता है। पैसा आपके दर्ज बैंक खाते में आता है।",
        "विदेश में रहने वाले (NRI/OCI) टियर-1 धारक टियर-2 चालू नहीं कर सकते।",
      ],
    },
  ],
  official: [
    { href: "https://www.pfrda.org.in/", title: "PFRDA (पेंशन नियामक)" },
    { href: "https://enps.nsdl.com/", title: "eNPS (Protean CRA)", note: "Protean वाले PRAN के लिए" },
    { href: "https://www.npscra.proteantech.in/", title: "Protean CRA: NPS सब्सक्राइबर जानकारी" },
  ],
  faq: [
    { q: "क्या बिना टियर-1 के टियर-2 खाता खुल सकता है?", a: "नहीं। टियर-2 वही चालू कर सकता है जिसका NPS टियर-1 खाता (PRAN) चालू है।" },
    { q: "टियर-2 से पैसा कब निकाल सकते हैं?", a: "कभी भी। टियर-2 में कोई लॉक-इन या निकासी की रोक नहीं है।" },
    { q: "क्या टियर-2 में टैक्स छूट मिलती है?", a: "आम निवेशकों को टियर-2 के योगदान पर आम तौर पर टैक्स छूट नहीं मिलती। सरकारी कर्मचारियों के लिए अलग नियम हो सकते हैं; अपने टैक्स सलाहकार से पुष्टि करें।" },
    { q: "टियर-2 खोलने के लिए कितने पैसे चाहिए?", a: "न्यूनतम पहला योगदान और हर बार की न्यूनतम राशि eNPS या POP पर बताई जाती है। अलग-अलग जगह अलग राशि लिखी मिलती है, इसलिए भुगतान के समय पोर्टल पर दिखी राशि ही मानें।" },
    { q: "क्या NRI टियर-2 खाता खोल सकते हैं?", a: "PFRDA के अनुसार टियर-1 वाले NRI/OCI टियर-2 चालू नहीं कर सकते।" },
  ],
  related: [
    { href: "/service/national-pension-system.html", emoji: "🧓", title: "राष्ट्रीय पेंशन प्रणाली (NPS)", text: "टियर-1 खाता और नियम" },
    { href: "/service/atal-pension-yojana.html", emoji: "🛡️", title: "अटल पेंशन योजना", text: "तय पेंशन वाली योजना" },
    { href: "/service/public-provident-fund.html", emoji: "💰", title: "PPF खाता", text: "तय ब्याज वाली बचत" },
    { href: "/service/pan-card.html", emoji: "🪪", title: "पैन कार्ड", text: "टियर-2 के लिए ज़रूरी" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "आयकर रिटर्न" },
  ],
  aside: [
    { href: "https://enps.nsdl.com/", label: "🧓 eNPS (Protean)" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
