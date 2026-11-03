import type { DocGuide } from "./types";

// Sources (checked 3 Nov 2026): PIB release 25 Jul 2025 (labour.gov.in copy)
// and PIB "PMVBRY portal goes live" (PRID 2157513); EPFO FAQ
// (pmvbry.epfindia.gov.in/faq/); cleartax.in, kotakneo.com, vikaspedia,
// adda247, sarkariyojana.com. Part A: first-time EPFO-registered employees,
// one-month EPF wage up to Rs 15,000 in two instalments (after 6 and 12
// months of service; second needs the financial literacy programme; part of
// it kept in a savings instrument), gross salary up to Rs 1 lakh/month,
// joining 1 Aug 2025 - 31 Jul 2027, UAN generated with Face Authentication
// (UMANG), paid by DBT through Aadhaar Bridge Payment System; no separate
// application (based on employer's ECR). Part B: incentive to employers for
// extra hiring (amounts not stated here). Wage-base wording differs between
// sources: pointed to the portal.
export const pmViksitBharatRozgarYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "EPFO", href: "/service/epfo.html" },
    { label: "PM विकसित भारत रोज़गार योजना" },
  ],
  docHi: "PM विकसित भारत रोज़गार योजना",
  title: "PM विकसित भारत रोज़गार योजना: पहली नौकरी पर ₹15,000, UAN फेस ऑथेंटिकेशन, पैसा कब आएगा",
  description: "PM-VBRY (ELI योजना) में पहली बार EPFO से जुड़ने वाले कर्मचारियों को ₹15,000 तक दो किस्तों में। पात्रता, UAN फेस ऑथेंटिकेशन कैसे करें, पहली और दूसरी किस्त कब, पैसा नहीं आया तो क्या करें।",
  published: "2026-11-03",
  modified: "2026-11-03",
  verified: "3 नवंबर 2026",
  h1: "प्रधानमंत्री विकसित भारत रोज़गार योजना (PM-VBRY): पहली नौकरी पर ₹15,000 तक",
  lead: "<strong>प्रधानमंत्री विकसित भारत रोज़गार योजना (PM-VBRY)</strong>, जिसे ELI (Employment Linked Incentive) योजना भी कहते हैं, 1 अगस्त 2025 से लागू है। इसके <strong>भाग A</strong> में <strong>पहली बार EPFO से जुड़ने वाले कर्मचारियों</strong> को एक महीने के EPF वेतन के बराबर, <strong>अधिकतम ₹15,000</strong>, दो किस्तों में सीधे बैंक खाते में मिलते हैं। इसके लिए अलग फॉर्म नहीं भरना होता, पर <strong>UAN फेस ऑथेंटिकेशन से बना होना ज़रूरी</strong> है।",
  facts: [
    ["कितना", "₹15,000 तक, दो किस्तों में"],
    ["किसे", "पहली बार EPFO से जुड़ने वाले, वेतन ₹1 लाख/माह तक"],
    ["नौकरी शुरू", "1 अगस्त 2025 से 31 जुलाई 2027 के बीच"],
    ["ज़रूरी", "UAN फेस ऑथेंटिकेशन (UMANG) + आधार से जुड़ा बैंक खाता"],
  ],
  notice: "इस योजना के नाम पर \"₹15,000 पाने के लिए रजिस्ट्रेशन फीस\" मांगने वाले कॉल और लिंक धोखा हैं। कोई फॉर्म या फीस नहीं है; पैसा EPFO रिकॉर्ड के आधार पर अपने आप आता है। यह साइट निजी है, EPFO या सरकार की नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है: भाग A और भाग B",
      table: {
        head: ["भाग", "किसके लिए", "क्या मिलता है"],
        rows: [
          ["<strong>भाग A</strong>", "पहली बार EPFO में पंजीकृत होने वाले कर्मचारी", "एक महीने का EPF वेतन, अधिकतम ₹15,000, दो किस्तों में"],
          ["<strong>भाग B</strong>", "नियोक्ता (कंपनियां) जो अतिरिक्त कर्मचारी रखती हैं", "हर नए कर्मचारी पर तय समय तक प्रोत्साहन राशि"],
        ],
      },
      intro: "सरकार का लक्ष्य दो साल में लगभग 3.5 करोड़ नई नौकरियों को बढ़ावा देना है। यह पेज मुख्य रूप से <strong>कर्मचारियों (भाग A)</strong> के लिए है।",
    },
    {
      id: "patrata",
      title: "कौन पात्र है (भाग A)",
      list: [
        "जो <strong>पहली बार</strong> EPFO में पंजीकृत हो रहे हैं (पहले कभी PF नहीं कटा)।",
        "नौकरी <strong>1 अगस्त 2025 से 31 जुलाई 2027</strong> के बीच शुरू हुई हो।",
        "महीने का कुल (gross) वेतन <strong>₹1 लाख तक</strong>।",
        "UAN <strong>फेस ऑथेंटिकेशन (FAT)</strong> से बना या सत्यापित हो।",
        "आधार से जुड़ा, <strong>DBT चालू</strong> बैंक खाता हो।",
      ],
    },
    {
      id: "kist",
      title: "₹15,000 कब और कैसे आते हैं",
      table: {
        head: ["किस्त", "कब", "शर्त"],
        rows: [
          ["पहली", "नौकरी के <strong>6 महीने</strong> पूरे होने के बाद", "लगातार उसी नियोक्ता के पास काम, PF कटता रहे"],
          ["दूसरी", "<strong>12 महीने</strong> पूरे होने के बाद", "साथ में सरकार का <strong>वित्तीय साक्षरता (financial literacy) कोर्स</strong> पूरा करना ज़रूरी"],
        ],
      },
      callout: { kind: "info", html: "दूसरी किस्त का एक हिस्सा कुछ समय के लिए बचत खाते/बचत साधन में रखा जाता है, ताकि बचत की आदत बने। पैसा <strong>आधार ब्रिज पेमेंट सिस्टम (ABPS)</strong> से उसी बैंक खाते में आता है जो आधार से जुड़ा है। हिसाब किस वेतन पर बनता है (EPF वेतन/बेसिक+DA), इस पर रिपोर्टें अलग हैं; अंतिम रकम पोर्टल पर देखें।" },
    },
    {
      id: "face-auth",
      title: "UAN फेस ऑथेंटिकेशन कैसे करें (UMANG ऐप)",
      steps: [
        "Play Store/App Store से <strong>UMANG</strong> और <strong>AadhaarFaceRD</strong> ऐप डालें।",
        "UMANG में <strong>EPFO</strong> सेवा खोलें और <strong>UAN Allotment & Activation (Face Authentication)</strong> चुनें।",
        "आधार नंबर और आधार से जुड़ा मोबाइल डालें, OTP से सत्यापित करें।",
        "कैमरे के सामने चेहरा रखकर फेस ऑथेंटिकेशन पूरा करें।",
        "UAN बनने/सक्रिय होने का SMS आएगा; यह UAN अपने HR/नियोक्ता को दें।",
      ],
      callout: { kind: "warn", html: "अगर आपका UAN पहले से बना है पर फेस ऑथेंटिकेशन से नहीं बना, तो UMANG में फेस ऑथेंटिकेशन से सत्यापन करें। बिना FAT वाले UAN पर लाभ नहीं मिलता।" },
    },
    {
      id: "status",
      title: "स्टेटस कैसे देखें",
      steps: [
        "<a href=\"https://pmvbry.epfindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmvbry.epfindia.gov.in</a> या EPFO मेंबर पोर्टल/UMANG ऐप खोलें।",
        "UAN और OTP से लॉगिन करें।",
        "योजना की स्थिति और किस्त का भुगतान देखें।",
      ],
    },
    {
      id: "paisa-nahi",
      title: "पैसा नहीं आया? कारण और उपाय",
      table: {
        head: ["कारण", "क्या करें"],
        rows: [
          ["UAN फेस ऑथेंटिकेशन से नहीं बना", "UMANG में फेस ऑथेंटिकेशन से UAN सत्यापित करें"],
          ["अभी 6 महीने पूरे नहीं हुए", "पहली किस्त 6 महीने की सेवा के बाद ही आती है"],
          ["नियोक्ता ने हर महीने <strong>ECR</strong> (PF रिटर्न) नहीं भरा या देर से भरा", "HR से पूछें; पात्रता नियोक्ता के ECR से तय होती है"],
          ["बैंक खाता आधार से जुड़ा/DBT चालू नहीं", "बैंक में आधार सीडिंग और DBT चालू कराएं"],
          ["पहले भी कभी PF कट चुका है", "तब आप \"पहली बार\" वाले नहीं हैं; भाग A का लाभ नहीं मिलेगा"],
          ["वेतन ₹1 लाख/माह से ज़्यादा", "भाग A में पात्र नहीं"],
          ["दूसरी किस्त: वित्तीय साक्षरता कोर्स नहीं किया", "पोर्टल पर बताया कोर्स पूरा करें"],
        ],
      },
      html: "<p>शिकायत के लिए EPFO के <a href=\"https://epfigms.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">शिकायत पोर्टल (EPFiGMS)</a> का इस्तेमाल करें।</p>",
    },
  ],
  official: [
    { href: "https://pmvbry.epfindia.gov.in/", title: "PM-VBRY पोर्टल (EPFO)", note: "स्टेटस और जानकारी" },
    { href: "https://pmvbry.epfindia.gov.in/faq/", title: "PM-VBRY: अक्सर पूछे जाने वाले सवाल (EPFO)" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2157513", title: "PIB: PM-VBRY पोर्टल शुरू" },
    { href: "https://epfigms.gov.in/", title: "EPFO शिकायत पोर्टल" },
  ],
  faq: [
    { q: "PM विकसित भारत रोज़गार योजना में कितने पैसे मिलते हैं?", a: "पहली बार EPFO से जुड़ने वाले कर्मचारी को एक महीने के EPF वेतन के बराबर, अधिकतम ₹15,000, दो किस्तों में।" },
    { q: "क्या इसके लिए अलग से आवेदन करना होता है?", a: "नहीं। पात्रता नियोक्ता के PF रिटर्न (ECR) और आपके फेस-ऑथेंटिकेटेड UAN से अपने आप तय होती है।" },
    { q: "पहली किस्त कब आएगी?", a: "उसी नौकरी में 6 महीने पूरे होने के बाद; दूसरी 12 महीने और वित्तीय साक्षरता कोर्स के बाद।" },
    { q: "क्या ₹1 लाख से ज़्यादा वेतन वालों को मिलेगा?", a: "नहीं। भाग A सिर्फ ₹1 लाख/माह तक के कुल वेतन वालों के लिए है।" },
    { q: "किस तारीख के बीच नौकरी शुरू होनी चाहिए?", a: "1 अगस्त 2025 से 31 जुलाई 2027 के बीच।" },
    { q: "फेस ऑथेंटिकेशन क्यों ज़रूरी है?", a: "EPFO ने नियम बनाया है कि सिर्फ फेस ऑथेंटिकेशन (UMANG) से बने/सत्यापित UAN वालों को ही इस योजना का लाभ मिलेगा।" },
  ],
  related: [
    { href: "/service/epfo.html", emoji: "🏦", title: "EPFO / PF गाइड", text: "UAN, KYC, निकासी" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "💳", title: "जन धन खाता", text: "DBT के लिए बैंक खाता" },
    { href: "/service/epfo-vishwas-scheme-2026.html", emoji: "🧾", title: "EPFO VISHWAS 2026", text: "नियोक्ताओं के लिए" },
    { href: "/jobs/index.html", emoji: "💼", title: "सरकारी नौकरियां", text: "नई भर्तियां" },
  ],
  aside: [
    { href: "https://pmvbry.epfindia.gov.in/", label: "💼 PM-VBRY पोर्टल" },
    { href: "/service/epfo.html", label: "📘 EPFO गाइड" },
  ],
};
