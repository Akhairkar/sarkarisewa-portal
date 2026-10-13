import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - ahara.karnataka.gov.in (Department of Food, Civil Supplies and Consumer
//   Affairs, Karnataka), home page (last updated 08 Oct 2026): notice that news
//   of new ration cards being issued is fake and that the department is only
//   disposing new-card applications received before March 2023; ration through
//   any FPS in the state with Aadhaar OTP or fingerprint; links "Apply for new
//   ration card" (/nrc/), "Apply for ration card corrections" (rcamend_*),
//   "Ration Card Status" (FCS_VERIFY_*) and "Register Grievance" (pgrs_fcs)
//   for the Bangalore, Mysore and Kalaburagi regions; toll-free 1967.
// - ahara e-Services page: e-Ration Card (show ration card, allotment, lifting
//   status, cancelled/suspended list, update Aadhaar), e-Status (new RC
//   request, amendment request, DBT status), registration of denial of ration.
// - ahara fcs_office_statistics "REPORT ON DISTRICTWISE ACTIVE RCs" (as on
//   13 Oct 2026): totals AAY 10,43,753 RCs / 42,58,011; State NPHH 29,67,938 /
//   1,01,87,798; PHH 1,14,41,839 / 4,02,92,790; total 1,54,53,530 /
//   5,47,38,599. Annabhagya POS dashboard note: "AAY Cards with greater than
//   or equal to 4 Members are only eligible for Annabhagya".
// - ahara "newaplrc.pdf" (NIC user manual): Aadhaar mandatory; NPHH card
//   applied online with Aadhaar OTP or fingerprint.
// - nfsa.gov.in/State/KA: schemes AAY and PHH; helpdesk 1967 and
//   1800-425-9339; department website ahara.karnataka.gov.in.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the current form of the extra state grain under Anna Bhagya (news
// reports from 2025 speak of 10 kg rice and a planned "Indira kit" in place of
// 5 kg rice; we found no official order), BPL income limit, fees (the old
// "Direction_RC" note on ahara gives ₹50/₹70 but is undated), Seva Sindhu
// route claimed by the old page.
export const karnatakaRationCard: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Karnataka Ration Card 2026: Apply & Status",
  description: "कर्नाटक राशन कार्ड 2026: AAY, BPL (PHH) और APL कार्ड, ahara.karnataka.gov.in पर आवेदन और स्टेटस, नए BPL कार्ड पर विभाग की सूचना, सदस्य जोड़ना, e-KYC और हेल्पलाइन 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "कर्नाटक राशन कार्ड 2026: प्रकार, आवेदन, स्टेटस, सदस्य जोड़ना और e-KYC",
  lead: "कर्नाटक में राशन कार्ड खाद्य, नागरिक आपूर्ति और उपभोक्ता मामले विभाग बनाता है, और सारी ऑनलाइन सेवाएं ahara.karnataka.gov.in पर हैं। विभाग के अनुसार अभी मार्च 2023 से पहले आए नए कार्ड के आवेदन ही निपटाए जा रहे हैं; नए कार्ड बांटे जाने की खबरों को विभाग ने झूठा बताया है। कार्ड का स्टेटस, सुधार और शिकायत इसी पोर्टल पर होती है।",
  facts: [
    ["राज्य में कार्ड", "1.55 करोड़ (13 अक्टूबर 2026)"],
    ["लाभार्थी", "5.47 करोड़ सदस्य"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1967, 1800-425-9339"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग की वेबसाइट पर साफ लिखा है कि नए राशन कार्ड जारी होने की खबरें झूठी हैं और अभी केवल <strong>मार्च 2023 से पहले मिले आवेदन</strong> निपटाए जा रहे हैं। कोई एजेंट पैसे लेकर नया BPL कार्ड बनवाने का दावा करे तो भरोसा न करें।",
  sections: [
    {
      id: "prakar",
      title: "कर्नाटक में राशन कार्ड के प्रकार और संख्या",
      intro: "ahara पोर्टल की ज़िलेवार रिपोर्ट (13 अक्टूबर 2026) के अनुसार राज्य में <strong>1,54,53,530 सक्रिय राशन कार्ड</strong> और <strong>5,47,38,599 सदस्य</strong> हैं।",
      table: {
        head: ["कार्ड", "कार्ड", "सदस्य", "किसके लिए"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "10,43,753", "42,58,011", "सबसे गरीब परिवार; NFSA में <strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH / BPL)</strong>", "1,14,41,839", "4,02,92,790", "NFSA में <strong>5 किलो प्रति व्यक्ति</strong>; इनमें 16,10,646 कार्ड राज्य के खर्च वाले PHH हैं"],
          ["<strong>गैर-प्राथमिकता (NPHH / APL)</strong>", "29,67,938", "1,01,87,798", "राज्य का कार्ड; NFSA का मुफ्त अनाज नहीं"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का NFSA अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। राज्य की <strong>अन्न भाग्य योजना</strong> में इसके ऊपर अतिरिक्त अनाज/सामग्री मिलती है; विभाग के डैशबोर्ड के अनुसार AAY कार्ड में यह तभी मिलता है जब परिवार में <strong>4 या ज़्यादा सदस्य</strong> हों। अतिरिक्त हिस्सा (चावल या किट) किस रूप में मिल रहा है, यह राशन दुकान या 1967 से पक्का करें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है BPL (PHH) या AAY कार्ड",
      list: [
        "<strong>AAY और PHH:</strong> NFSA के तहत राज्य सरकार के मापदंडों पर चुने गए गरीब परिवार। आय, ज़मीन, सरकारी नौकरी, आयकर जैसी शर्तें राज्य तय करता है।",
        "<strong>APL (NPHH):</strong> जो परिवार BPL में नहीं आते, वे APL कार्ड ले सकते हैं।",
        "एक परिवार का <strong>एक ही कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "BPL की ताज़ा पात्रता शर्तें ahara पोर्टल के e-Services पेज पर \"Eligibility Criteria\" में (कन्नड़ में) हैं। आवेदन से पहले तालुक खाद्य कार्यालय (तहसील) से भी पूछ लें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन के लिए क्या चाहिए",
      intro: "विभाग के आवेदन मैनुअल के अनुसार <strong>आधार अनिवार्य</strong> है; नाम, फोटो, उम्र, पता आधार से ही कार्ड में आते हैं। ये तैयार रखें:",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong>; कम से कम एक सदस्य के आधार में <strong>मौजूदा पता</strong> सही हो",
        "आधार से जुड़ा <strong>मोबाइल नंबर</strong> (OTP के लिए)",
        "BPL के लिए आय से जुड़ी जानकारी; विभाग मांगे तो <strong>आय प्रमाण पत्र</strong>",
        "पहले किसी दूसरे कार्ड में नाम हो तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कैसे होता है",
      steps: [
        '<a href="https://ahara.karnataka.gov.in/" target="_blank" rel="noopener nofollow">ahara.karnataka.gov.in</a> खोलें और \"e-Services\" में अपने क्षेत्र (Bangalore, Mysore या Kalaburagi Region) के नीचे <strong>\"Apply for new ration card\"</strong> चुनें।',
        "भाषा (कन्नड़/English) चुनें, <strong>\"New Ration Card Request\"</strong> खोलें और कार्ड का प्रकार चुनें।",
        "आधार नंबर और आधार से जुड़ा मोबाइल डालें; <strong>OTP या फिंगरप्रिंट</strong> से आधार सत्यापन करें।",
        "सदस्यों की जानकारी भरकर आवेदन जमा करें और <strong>आवेदन नंबर</strong> संभालें।",
        "जांच के बाद मंज़ूरी मिलती है। स्टेटस \"Ration Card Status\" लिंक पर देखें।",
      ],
      callout: { kind: "warn", html: "विभाग के मैनुअल में ऑनलाइन आवेदन का रास्ता <strong>APL (NPHH) कार्ड</strong> के लिए दिखाया गया है। नए BPL (PHH) कार्ड के आवेदन पर विभाग की ताज़ा सूचना (मार्च 2023 से पहले के आवेदन ही) लागू है; इलाज जैसी खास ज़रूरत हो तो सीधे तालुक खाद्य कार्यालय में पूछें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और सुधार",
      list: [
        "<strong>सुधार का आवेदन:</strong> ahara पर अपने क्षेत्र के नीचे <strong>\"Apply for ration card corrections\"</strong> लिंक है।",
        "<strong>नया सदस्य जोड़ना:</strong> जोड़े जाने वाले सदस्य का आधार ज़रूरी है और उसका आधार सत्यापन होता है।",
        "<strong>नाम, उम्र, फोटो में बदलाव:</strong> पहले आधार में सुधार कराएं, फिर कार्ड में।",
        "<strong>सदस्य हटाना / दुकान बदलना:</strong> कार्ड में दर्ज सदस्य आवेदन कर सकता है।",
        "बदलाव के आवेदन का स्टेटस \"Ration Card Status\" पेज पर <strong>\"Ration Card Amendment Request Status\"</strong> में दिखता है।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, कार्ड का विवरण और राशन मिला या नहीं",
      steps: [
        '<a href="https://ahara.karnataka.gov.in/Home/EServices" target="_blank" rel="noopener nofollow">ahara e-Services</a> खोलें।',
        "<strong>e-Status</strong> में अपना क्षेत्र चुनकर नए आवेदन या बदलाव के आवेदन का स्टेटस देखें; यहीं <strong>DBT स्टेटस</strong> भी है।",
        "<strong>e-Ration Card</strong> में \"Show Ration Card\" से कार्ड का विवरण, \"Show allotment\" से महीने का हक और \"Show Ration lifting status\" से राशन लिया या नहीं, देखें।",
        "कार्ड रद्द/निलंबित हुआ हो तो \"Show Cancelled / Suspended list\" में देखें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, पोर्टेबिलिटी और Mera Ration ऐप",
      list: [
        "<strong>आधार से राशन:</strong> विभाग के अनुसार राशन आधार OTP या फिंगरप्रिंट सत्यापन से मिलता है, और राज्य में <strong>किसी भी राशन दुकान</strong> से लिया जा सकता है।",
        "<strong>e-KYC:</strong> परिवार के हर सदस्य का आधार कार्ड से जुड़ा और e-KYC पूरा होना चाहिए। यह राशन दुकान की PoS मशीन पर होता है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड (AAY/PHH) से दूसरे राज्य में भी अपना NFSA हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: ahara पोर्टल पर दिया गया टोल-फ्री नंबर",
        "<strong>1800-425-9339</strong>: NFSA पोर्टल पर कर्नाटक का हेल्पडेस्क",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://ahara.karnataka.gov.in/pgrs_fcs/home.aspx" target="_blank" rel="noopener nofollow">ahara → Register Grievance</a>',
        "<strong>राशन न मिलने की शिकायत:</strong> \"Ration Card Status\" पेज पर \"Registration of Denial of Ration\" विकल्प है।",
      ],
    },
  ],
  official: [
    { href: "https://ahara.karnataka.gov.in/", title: "ahara: खाद्य, नागरिक आपूर्ति विभाग कर्नाटक (आवेदन, स्टेटस, शिकायत)" },
    { href: "https://ahara.karnataka.gov.in/Home/EServices", title: "ahara e-Services: कार्ड का विवरण, आवंटन, स्टेटस" },
    { href: "https://ahara.karnataka.gov.in/fcs_office_statistics/Stat_AAY_APL_BPL_Details.aspx", title: "ज़िलेवार सक्रिय राशन कार्ड रिपोर्ट" },
    { href: "https://nfsa.gov.in/State/KA", title: "NFSA पोर्टल: कर्नाटक का पेज (योजनाएं, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "क्या कर्नाटक में अभी नया BPL राशन कार्ड बन रहा है?", a: "विभाग की वेबसाइट के अनुसार नए कार्ड जारी होने की खबरें झूठी हैं और अभी केवल मार्च 2023 से पहले मिले आवेदन निपटाए जा रहे हैं। ताज़ा जानकारी के लिए ahara.karnataka.gov.in या तालुक खाद्य कार्यालय देखें।" },
    { q: "कर्नाटक राशन कार्ड का स्टेटस कैसे देखें?", a: "ahara.karnataka.gov.in के e-Services में e-Status पर अपना क्षेत्र (Bangalore, Mysore या Kalaburagi) चुनें और नए आवेदन, बदलाव के आवेदन या DBT का स्टेटस देखें।" },
    { q: "कर्नाटक में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर 35 किलो प्रति परिवार और PHH (BPL) पर 5 किलो प्रति व्यक्ति हर महीने, 31 दिसंबर 2028 तक मुफ्त। अन्न भाग्य योजना में राज्य इसके ऊपर अतिरिक्त हिस्सा देता है; इसका ताज़ा रूप राशन दुकान से पूछें।" },
    { q: "कर्नाटक राशन कार्ड में नया नाम कैसे जोड़ें?", a: "ahara पोर्टल पर \"Apply for ration card corrections\" से आवेदन करें। नए सदस्य का आधार ज़रूरी है और उसका आधार सत्यापन होता है।" },
    { q: "कर्नाटक राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1967 और NFSA पोर्टल पर दिया गया हेल्पडेस्क 1800-425-9339। ऑनलाइन शिकायत ahara पोर्टल के Register Grievance लिंक पर।" },
    { q: "क्या कर्नाटक का राशन कार्ड दूसरे राज्य में चलेगा?", a: "हाँ, AAY और PHH कार्ड पर One Nation One Ration Card के तहत किसी भी राज्य की e-PoS दुकान से NFSA का हिस्सा मिल सकता है। राज्य के भीतर भी किसी भी दुकान से राशन लिया जा सकता है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/karnataka-income-certificate.html", emoji: "💰", title: "कर्नाटक आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/karnataka-labour-card.html", emoji: "👷", title: "कर्नाटक लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/kerala-ration-card.html", emoji: "📋", title: "केरल राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://ahara.karnataka.gov.in/Home/EServices", label: "🔎 ahara e-Services: स्टेटस और कार्ड" },
    { href: "https://ahara.karnataka.gov.in/pgrs_fcs/home.aspx", label: "📝 शिकायत दर्ज करें" },
  ],
};
