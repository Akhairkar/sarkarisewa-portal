import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - goacivilsupplies.gov.in (Department of Civil Supplies & Consumer Affairs,
//   Goa; last updated 8 Oct 2026):
//   * "Services" page: where to apply and time limits under the Goa Right of
//     Citizens to Time Bound Delivery of Public Services Act 2013 — new ration
//     card (ga.smartpds.nic.in, 3–7 days), change of scheme PHH↔APL, deletion
//     of name (same day), cancellation of name for Portuguese passport,
//     change of address (same day), inclusion of name, surrender: all on
//     ga.smartpds.nic.in; duplicate card (same day), negative certificate,
//     revoke of suspended card, change of FPS: Taluka office.
//   * FAQ: categories PHH, AAY, APL; apply online via nfsa.gov.in; documents
//     (Aadhaar of all members, income certificate, photo of head); NFSA 5 kg
//     fortified rice per person free, AAY 35 kg fortified rice per card free,
//     APL 12 kg fortified rice at ₹12.50/kg and 7 kg wheat at ₹8/kg; ONORC;
//     e-KYC at any FPS or by face authentication in the "Mera eKYC" app;
//     complaints on 1967 or at the Taluka office; surrender if income exceeds
//     ₹5 lakh or moving out of the state (cancellation certificate at Taluka
//     office); duplicate card papers.
//   * Important links: online application (nfsa.gov.in/sso), know your ration
//     card status (nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx).
//   * Grievance page: Taluka nodal grievance officer = Assistant Director of
//     Civil Supplies of each taluka; district officers for North/South Goa.
// - nfsa.gov.in/State/GA: AAY 10,079 and PHH 1,10,258 cards (1,20,337); 491
//   FPS; helpdesk 1967 and 1800-233-0022; grievance form on nfsa.gov.in.
// - Free grain 1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the PHH income limit (not stated on the department site), fees.
// ga.smartpds.nic.in did not open from here.
export const goaRationCard: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Goa Ration Card 2026: Apply & Status",
  description: "गोवा राशन कार्ड 2026: AAY, PHH और APL कार्ड, ga.smartpds.nic.in और NFSA पोर्टल से ऑनलाइन आवेदन, कागज़, नाम जोड़ना-हटाना, स्टेटस, Mera eKYC और हेल्पलाइन 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "गोवा राशन कार्ड 2026: प्रकार, ऑनलाइन आवेदन, स्टेटस, नाम जोड़ना और e-KYC",
  lead: "गोवा में राशन कार्ड नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। कार्ड तीन तरह के हैं: AAY, PHH (प्राथमिकता) और APL। विभाग के अनुसार नया कार्ड, नाम जोड़ना-हटाना, पता बदलना और सरेंडर ऑनलाइन (ga.smartpds.nic.in) होता है, और नया कार्ड 3 से 7 दिन में बनना चाहिए।",
  facts: [
    ["कार्ड के प्रकार", "AAY, PHH, APL"],
    ["NFSA कार्ड", "1,20,337 (AAY + PHH)"],
    ["नया कार्ड", "3–7 दिन (समयबद्ध सेवा कानून)"],
    ["हेल्पलाइन", "1967, 1800-233-0022"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग के अनुसार परिवार की आय <strong>₹5 लाख से ज़्यादा</strong> हो जाए या आप गोवा छोड़कर जा रहे हों, तो राशन कार्ड सरेंडर करना होता है। तालुका कार्यालय से रद्द करने का प्रमाण पत्र (cancellation certificate) लें।",
  sections: [
    {
      id: "prakar",
      title: "गोवा में राशन कार्ड के प्रकार और कितना अनाज",
      intro: "NFSA पोर्टल के अनुसार गोवा में NFSA के <strong>10,079 AAY</strong> और <strong>1,10,258 PHH</strong> कार्ड हैं, और <strong>491 राशन दुकानें</strong> हैं। विभाग के FAQ के अनुसार हर महीने:",
      table: {
        head: ["कार्ड", "क्या मिलता है", "दाम"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "35 किलो फोर्टिफाइड चावल प्रति कार्ड", "<strong>मुफ्त</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "5 किलो फोर्टिफाइड चावल प्रति व्यक्ति", "<strong>मुफ्त</strong>"],
          ["<strong>APL</strong>", "12 किलो फोर्टिफाइड चावल और 7 किलो गेहूं", "चावल ₹12.50/किलो, गेहूं ₹8/किलो"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का NFSA अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "kagaz",
      title: "नए राशन कार्ड के लिए कागज़",
      intro: "विभाग के FAQ के अनुसार आवेदन के साथ ये चाहिए:",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार कार्ड</strong>",
        "<strong>आय प्रमाण पत्र</strong>",
        "परिवार के मुखिया की <strong>पासपोर्ट साइज़ फोटो</strong>",
      ],
      callout: { kind: "ok", html: "PHH, AAY या APL में कौन सा कार्ड मिलेगा, यह NFSA और राज्य की आय व दूसरी शर्तों पर तय होता है। राशन कार्ड में नाम जोड़ने के काम के लिए तालुका कार्यालय \"negative certificate\" भी जारी करता है।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        '<a href="https://ga.smartpds.nic.in/login" target="_blank" rel="noopener nofollow">ga.smartpds.nic.in</a> खोलें; विभाग की सेवा सूची में नए राशन कार्ड के लिए यही पता दिया है। विभाग के FAQ और NFSA पोर्टल पर <a href="https://nfsa.gov.in/sso/frmPublicLogin.aspx" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> का ऑनलाइन आवेदन लिंक भी दिया गया है।',
        "रजिस्टर/लॉगिन करके नए राशन कार्ड का फॉर्म भरें; मुखिया और हर सदस्य का आधार डालें।",
        "आय प्रमाण पत्र और फोटो अपलोड करके आवेदन जमा करें और <strong>आवेदन नंबर</strong> संभालें।",
        "गोवा के समयबद्ध सेवा कानून (2013) के तहत नया कार्ड <strong>3 से 7 दिन</strong> में बनना चाहिए। देर हो तो अपने तालुका के नागरिक आपूर्ति कार्यालय से संपर्क करें।",
      ],
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और दूसरे बदलाव",
      table: {
        head: ["सेवा", "कहां", "समय-सीमा"],
        rows: [
          ["नाम जोड़ना (inclusion)", "ga.smartpds.nic.in", "–"],
          ["नाम हटाना / रद्द करना", "ga.smartpds.nic.in", "उसी दिन"],
          ["पता बदलना", "ga.smartpds.nic.in", "उसी दिन"],
          ["कार्ड का प्रकार बदलना (PHH ↔ APL)", "ga.smartpds.nic.in", "–"],
          ["पुर्तगाली पासपोर्ट होने पर नाम रद्द", "ga.smartpds.nic.in", "उसी दिन"],
          ["कार्ड सरेंडर", "ga.smartpds.nic.in", "–"],
          ["डुप्लिकेट कार्ड", "तालुका कार्यालय", "उसी दिन"],
          ["राशन दुकान बदलना", "तालुका कार्यालय", "–"],
          ["निलंबित कार्ड दोबारा चालू कराना", "तालुका कार्यालय", "–"],
        ],
      },
      html: "<p><strong>डुप्लिकेट कार्ड</strong> के लिए तालुका कार्यालय में सहायक निदेशक (नागरिक आपूर्ति) के नाम आवेदन दें, साथ में: स्व-घोषणा, पुलिस रिपोर्ट, राशन दुकान की रिपोर्ट, मुखिया का आधार और पुराने कार्ड की कॉपी (अगर हो)।</p>",
    },
    {
      id: "status",
      title: "राशन कार्ड का स्टेटस और विवरण",
      list: [
        '<strong>Know Your Ration Card Status:</strong> <a href="https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> पर (विभाग की वेबसाइट पर यही लिंक दिया गया है)।',
        "<strong>Goa AePDS पोर्टल और Mera Ration / ImPDS ऐप:</strong> हक, लेन-देन का इतिहास देखने के लिए।",
        "<strong>One Nation One Ration Card:</strong> गोवा में भी लागू है; आधार बायोमेट्रिक से किसी भी दुकान से राशन लिया जा सकता है।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC कैसे करें",
      list: [
        "गोवा की <strong>किसी भी राशन दुकान</strong> पर अंगूठा/उंगली (बायोमेट्रिक) लगाकर।",
        "या <strong>Mera eKYC ऐप</strong> में चेहरे (face authentication) से, घर बैठे।",
        "परिवार के हर सदस्य का e-KYC पूरा हो, ताकि राशन न रुके।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: टोल-फ्री नंबर (विभाग के FAQ में राशन कम मिलने या मना करने की शिकायत के लिए)",
        "<strong>1800-233-0022</strong>: NFSA पोर्टल पर गोवा का हेल्पडेस्क",
        "<strong>तालुका स्तर:</strong> हर तालुका के सहायक निदेशक (नागरिक आपूर्ति) शिकायत अधिकारी हैं; ज़िला स्तर पर उत्तर गोवा में SDM तिसवाड़ी और दक्षिण गोवा में SDM सालसेत।",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://nfsa.gov.in/public/frmRegisterPublicGrievance.aspx" target="_blank" rel="noopener nofollow">NFSA पोर्टल का शिकायत फॉर्म</a>',
        "<strong>विभाग का पता:</strong> जुंटा हाउस, दूसरी मंज़िल, पणजी; फोन 0832-2226084, 0832-2227798",
      ],
    },
  ],
  official: [
    { href: "https://www.goacivilsupplies.gov.in/", title: "नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, गोवा" },
    { href: "https://goacivilsupplies.gov.in/services/", title: "विभाग की सेवाएं: कहां आवेदन करें और समय-सीमा" },
    { href: "https://ga.smartpds.nic.in/login", title: "SMART-PDS गोवा: ऑनलाइन आवेदन" },
    { href: "https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx", title: "NFSA: अपने राशन कार्ड का स्टेटस" },
    { href: "https://nfsa.gov.in/State/GA", title: "NFSA पोर्टल: गोवा का पेज (योजनाएं, हेल्पलाइन)" },
  ],
  faq: [
    { q: "गोवा में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "ga.smartpds.nic.in (या विभाग की वेबसाइट पर दिए NFSA पोर्टल के लिंक) पर ऑनलाइन आवेदन करें। सभी सदस्यों का आधार, आय प्रमाण पत्र और मुखिया की फोटो लगाएं। कार्ड 3 से 7 दिन में बनना चाहिए।" },
    { q: "गोवा में राशन कार्ड पर कितना अनाज मिलता है?", a: "AAY कार्ड पर 35 किलो और PHH पर 5 किलो प्रति व्यक्ति फोर्टिफाइड चावल मुफ्त। APL कार्ड पर 12 किलो चावल ₹12.50/किलो और 7 किलो गेहूं ₹8/किलो।" },
    { q: "गोवा राशन कार्ड में नाम कैसे जोड़ें?", a: "ga.smartpds.nic.in पर नाम जोड़ने (inclusion) का आवेदन करें। नाम हटाना और पता बदलना भी ऑनलाइन होता है और विभाग के अनुसार उसी दिन निपटता है।" },
    { q: "गोवा में e-KYC कैसे करें?", a: "किसी भी राशन दुकान पर बायोमेट्रिक से, या Mera eKYC ऐप में चेहरे से।" },
    { q: "गोवा राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1967 और NFSA पोर्टल पर दिया गया 1800-233-0022। अपने तालुका के नागरिक आपूर्ति कार्यालय में भी शिकायत दे सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/goa-income-certificate.html", emoji: "💰", title: "गोवा आय प्रमाण पत्र", text: "राशन कार्ड के आवेदन में ज़रूरी" },
    { href: "/states/goa-domicile-certificate.html", emoji: "🏠", title: "गोवा निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/goa-labour-card.html", emoji: "👷", title: "गोवा लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/karnataka-ration-card.html", emoji: "📋", title: "कर्नाटक राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ga.smartpds.nic.in/login", label: "📝 ऑनलाइन आवेदन (SMART-PDS)" },
    { href: "https://nfsa.gov.in/public/frmPublicGetMyRCDetails.aspx", label: "🔎 राशन कार्ड स्टेटस देखें" },
  ],
};
