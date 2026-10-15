import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Morung Express / PTI and IANS (August 2022:
// Mizoram's flagship Socio-Economic Development Policy (SEDP) launched by the
// MNF government of CM Zoramthanga; family-oriented direct assistance for
// 60,000 households in 2022-23); Hindustan Times (Dec 2018: SEDP announced to
// replace NLUP/NEDP); nenow 2023 (third-phase SEDP disbursement put on hold
// for the assembly polls). Current scheme: myScheme "mbkhhs" (Mizoram Bana
// Kaih (Handholding) Scheme, Planning & Programme Implementation Department,
// initial 5 years from 19.09.2024, end date 18.09.2029; Progress Partners
// selected by an Apex Body; collateral-free bank loans with full interest
// subvention and guarantee support; catalytic capital grant; apply via
// handholding.mizoram.gov.in registration), Vikaspedia "Mizoram Bana Kaih
// Handholding Scheme 3.0" and nenow (Chief Minister's Special Package: ₹50,000
// per Progress Partner by DBT; loans up to ₹50 lakh through partner banks);
// The Week/PTI 04.03.2025 (₹350 crore in the 2025-26 budget). Whether any old
// SEDP instalments are still being paid was not verified.
export const mizoramSedpPolicy: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मिज़ोरम", href: "/states/mizoram.html" },
    { label: "SEDP / Bana Kaih" },
  ],
  docHi: "SEDP / Bana Kaih",
  title: "SEDP Policy",
  description: "मिज़ोरम की SEDP (Socio-Economic Development Policy) पिछली सरकार की योजना थी। अब 2024 से Bana Kaih (Handholding) योजना: ₹50 लाख तक बिना गारंटी कर्ज, ब्याज मदद और ₹50,000 पैकेज।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मिज़ोरम SEDP नीति और नई Bana Kaih (Handholding) योजना: क्या बदला, अब किससे मदद मिलती है",
  lead: "SEDP (Socio-Economic Development Policy) मिज़ोरम की पिछली MNF सरकार की प्रमुख योजना थी, जिसके तहत अगस्त 2022 से परिवारों को आजीविका के लिए सीधी आर्थिक सहायता दी गई। 2023 के विधानसभा चुनाव के बाद नई सरकार ने <strong>19 सितंबर 2024</strong> से <strong>Mizoram Bana Kaih (Handholding) Scheme</strong> शुरू की। अब व्यवसाय और आजीविका की मदद के लिए इसी योजना में handholding.mizoram.gov.in पर पंजीकरण होता है।",
  facts: [
    ["पुरानी योजना", "SEDP (2022 से, पिछली सरकार)"],
    ["अब की योजना", "Bana Kaih (Handholding), 19.09.2024 से"],
    ["विभाग", "योजना एवं कार्यक्रम कार्यान्वयन (Planning)"],
    ["पोर्टल", "handholding.mizoram.gov.in"],
  ],
  sections: [
    {
      id: "sedp",
      title: "SEDP क्या थी",
      list: [
        "दिसंबर 2018 में बनी MNF सरकार ने पुरानी NLUP/NEDP योजनाओं की जगह SEDP लाने की घोषणा की।",
        "अगस्त 2022 में परिवार-आधारित सहायता शुरू हुई; 2022-23 में 60,000 परिवारों को आजीविका के लिए सीधे बैंक खाते में सहायता का लक्ष्य था।",
        "2023 में चुनाव की घोषणा के कारण तीसरे चरण का वितरण रोका गया।",
      ],
      callout: { kind: "warn", html: "पुरानी SEDP की कोई बकाया किश्त अभी दी जा रही है या नहीं, इसकी आधिकारिक पुष्टि हमें नहीं मिली। अपने मामले के लिए ज़िले के उपायुक्त (DC) कार्यालय या संबंधित विभाग से पूछें।" },
    },
    {
      id: "bana-kaih",
      title: "Bana Kaih (Handholding) योजना में क्या मिलता है",
      list: [
        "<strong>बैंक कर्ज:</strong> साझेदार बैंकों से बिना गारंटी (collateral-free) कर्ज, ₹50 लाख तक बताया गया है; ब्याज में पूरी मदद (interest subvention) और सरकारी गारंटी सहायता।",
        "<strong>मुख्यमंत्री विशेष पैकेज:</strong> चुने गए \"Progress Partner\" को ₹50,000 तक सीधे बैंक खाते में (DBT)।",
        "<strong>सलाह और प्रशिक्षण:</strong> तकनीकी मदद, प्रशिक्षण और निगरानी।",
        "<strong>बाज़ार मदद:</strong> प्रमुख फसलों के लिए मूल्य समर्थन और बाज़ार से जोड़ना।",
      ],
      callout: { kind: "info", html: "योजना शुरुआती 5 साल (19 सितंबर 2024 से) के लिए है। राज्य बजट 2025-26 में इसके लिए ₹350 करोड़ रखे गए। राशि और शर्तें दिशानिर्देश के अनुसार बदल सकती हैं, इसलिए पोर्टल पर ताज़ा सूचना देखें।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "व्यक्ति, समूह, संस्था, उद्यमी या नवाचार करने वाला (innovator)",
        "जो आजीविका, व्यवसाय, स्टार्टअप या विकास कार्य में लगा हो और जिसमें रोज़गार व आय बढ़ाने की संभावना हो",
        "अंतिम चयन शीर्ष समिति (Apex Body) \"Progress Partner\" के रूप में करती है",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://handholding.mizoram.gov.in/" target="_blank" rel="noopener nofollow">handholding.mizoram.gov.in</a> पर "Register New User" से पंजीकरण करें। एक खाते से एक व्यक्तिगत और/या एक संस्था का प्रोजेक्ट जमा हो सकता है।',
        "लॉगिन करके आवेदन (Loan या Chief Minister Package) ऑनलाइन जमा करें। जमा होने पर पंजीकृत मोबाइल पर SMS आता है।",
        "आपके चुने व्यवसाय (trade) से जुड़ा विभाग जांच करके आवेदन योजना विभाग को भेजता है।",
        "चयन होने पर कर्ज/पैकेज की प्रक्रिया बैंक और विभाग के ज़रिए होती है।",
      ],
      callout: { kind: "ok", html: 'ऑनलाइन आवेदन में मदद के लिए <a href="/tools/csc-locator.html">नज़दीकी CSC</a> या ज़िले के संबंधित विभाग से संपर्क करें।' },
    },
  ],
  official: [
    { href: "https://handholding.mizoram.gov.in/", title: "Mizoram Bana Kaih (Handholding) Scheme पोर्टल" },
    { href: "https://www.myscheme.gov.in/schemes/mbkhhs", title: "myScheme: Mizoram Bana Kaih (Handholding) Scheme" },
    { href: "https://mizoram.gov.in/", title: "मिज़ोरम सरकार" },
  ],
  faq: [
    { q: "क्या SEDP अभी चल रही है?", a: "SEDP पिछली सरकार की योजना थी। नई सरकार ने 19 सितंबर 2024 से Bana Kaih (Handholding) योजना शुरू की है; नई मदद के लिए इसी में आवेदन होता है। पुरानी SEDP किश्तों के बारे में DC कार्यालय से पूछें।" },
    { q: "Bana Kaih योजना में कितना कर्ज मिल सकता है?", a: "रिपोर्टों के अनुसार साझेदार बैंकों से ₹50 लाख तक बिना गारंटी कर्ज, ब्याज मदद के साथ। आपकी राशि प्रोजेक्ट और चयन पर निर्भर है।" },
    { q: "₹50,000 का पैकेज किसे मिलता है?", a: "मुख्यमंत्री विशेष पैकेज के तहत चुने गए Progress Partners को ₹50,000 तक DBT से दिए गए हैं।" },
    { q: "आवेदन कहां करें?", a: "handholding.mizoram.gov.in पर पंजीकरण करके ऑनलाइन।" },
  ],
  related: [
    { href: "/service/mizoram-bpl-housing-scheme.html", emoji: "🏘️", title: "BPL आवास (मिज़ोरम)", text: "घर के लिए मदद" },
    { href: "/service/mizoram-chief-minister-rural-housing-scheme.html", emoji: "🏡", title: "मुख्यमंत्री ग्रामीण आवास (मिज़ोरम)", text: "गांव में घर" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे व्यवसाय के लिए कर्ज" },
    { href: "/service/mz-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (मिज़ोरम)", text: "योजनाओं के लिए" },
    { href: "/states/mizoram.html", emoji: "🎍", title: "मिज़ोरम की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://handholding.mizoram.gov.in/", label: "🤝 Bana Kaih पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
