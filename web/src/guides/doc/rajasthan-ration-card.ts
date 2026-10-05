import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - food.rajasthan.gov.in (Food & Civil Supplies Dept.): toll-free
//   1800-180-6030 and helpline 14445; "राशन कार्ड" page (card colours: APL
//   blue/green, BPL dark pink, State BPL dark green, AAY yellow; Rajasthan
//   Guaranteed Delivery of Public Services Act 2011; issuing officers); "राष्ट्रीय
//   खाद्य सुरक्षा हेतु नवीन आवेदन प्रक्रिया" page with circular F13(10)(5)
//   dated 11.04.2022 (online-only applications via e-Mitra or
//   emitra.rajasthan.gov.in, urban/rural forms, certificate for the inclusion
//   category, self-declaration on exclusion, Jan Aadhaar + Aadhaar seeding,
//   SDO as authorised officer, 30 days to cure a sent-back application,
//   inclusion criteria notified 27.09.2018, annexure lists); Form_Download
//   (e-Mitra/CSC form, NFSA name-addition form); Form_Status (status by RC or
//   form number; link to rrcc download of ration card and NOC);
//   SearchRationCardTransaction; PMO_District_Category_Wise report generated
//   05-10-2026 08:11 (counts below).
// - rrcc.rajasthan.gov.in (same department): NFSA application and status,
//   Give-Up application and status, new-member application and status, the
//   32 inclusion categories and 8 exclusion categories (A–H).
// - nfsa.gov.in/State/RJ: schemes AAY and PHH, helpdesk 6127, 1800-180-6127,
//   181; grievance via Rajasthan Sampark; 26,151 FPS.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; dfpd.gov.in
//   toll-free 1967; free grain 1.1.2024–31.12.2028 per GoI notification of
//   04.12.2023 (as in our Maharashtra guide).
// Left out: whether the NFSA name-addition portal is open on a given date (it
// is opened by government order), fees, time limits and the old page's
// "official fee" line, none of which we could confirm for 2026.
export const rajasthanRationCard: DocGuide = {
  state: { slug: "rajasthan", hi: "राजस्थान" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Rajasthan Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "राजस्थान राशन कार्ड और खाद्य सुरक्षा (NFSA) 2026: 32 पात्र श्रेणियां, 8 निष्कासन शर्तें, e-Mitra से आवेदन, जन आधार सीडिंग, नाम जोड़ना, गिव-अप, कार्ड डाउनलोड, स्टेटस और हेल्पलाइन 1800-180-6030 / 14445।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "राजस्थान राशन कार्ड 2026: खाद्य सुरक्षा में नाम जुड़वाना, पात्रता, स्टेटस और डाउनलोड",
  lead: "राजस्थान में राशन कार्ड खाद्य एवं नागरिक आपूर्ति विभाग बनाता है। राशन कार्ड होना और राष्ट्रीय खाद्य सुरक्षा (NFSA) की सूची में नाम होना दो अलग बातें हैं: मुफ्त गेहूं सिर्फ NFSA सूची वालों को मिलता है। NFSA में नाम जुड़वाने का आवेदन ऑनलाइन e-Mitra से होता है, और इसके लिए परिवार का जन आधार और आधार जुड़ा होना ज़रूरी है।",
  facts: [
    ["कुल राशन कार्ड", "2.25 करोड़ (5 अक्टूबर 2026)"],
    ["NFSA में", "1.08 करोड़ कार्ड, 4.42 करोड़ सदस्य"],
    ["आवेदन", "ऑनलाइन, e-Mitra से"],
    ["हेल्पलाइन", "1800-180-6030, 14445"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग के 11.04.2022 के परिपत्र के अनुसार NFSA में नाम जोड़ने के <strong>आवेदन सिर्फ ऑनलाइन</strong> लिए जाते हैं, ऑफलाइन नहीं। आवेदन का पोर्टल सरकार के आदेश से खुलता है; अभी आवेदन लिए जा रहे हैं या नहीं, यह e-Mitra या ज़िला रसद अधिकारी (DSO) से पक्का करें।",
  sections: [
    {
      id: "sankhya",
      title: "राजस्थान में राशन कार्ड: कितने और किस श्रेणी में",
      intro: "विभाग की \"NFSA & Non NFSA Beneficiary Category Wise\" रिपोर्ट (5 अक्टूबर 2026, सुबह 8:11) के अनुसार:",
      table: {
        head: ["श्रेणी", "राशन कार्ड", "सदस्य (यूनिट)", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "5,82,128", "18,90,376", "<strong>35 किलो प्रति परिवार</strong>"],
          ["प्राथमिकता: BPL", "19,10,668", "82,00,398", "5 किलो प्रति व्यक्ति"],
          ["प्राथमिकता: स्टेट BPL", "4,80,112", "19,65,790", "5 किलो प्रति व्यक्ति"],
          ["प्राथमिकता: APL श्रेणी से शामिल", "77,91,224", "3,21,10,749", "5 किलो प्रति व्यक्ति"],
          ["<strong>कुल NFSA</strong>", "<strong>1,07,64,132</strong>", "<strong>4,41,67,313</strong>", ""],
          ["NFSA से बाहर (Non-NFSA)", "1,16,92,552", "4,12,04,787", "NFSA का अनाज नहीं"],
          ["<strong>कुल</strong>", "<strong>2,24,56,684</strong>", "<strong>8,53,72,100</strong>", ""],
        ],
      },
      callout: { kind: "info", html: "विभाग के \"राशन कार्ड\" पेज के अनुसार कार्ड का रंग श्रेणी बताता है: <strong>APL</strong> नीला (डबल गैस सिलेंडर) या हरा (सिंगल सिलेंडर), <strong>BPL</strong> गहरा गुलाबी, <strong>स्टेट BPL</strong> गहरा हरा और <strong>अंत्योदय</strong> पीला। केंद्र की 04.12.2023 की अधिसूचना के अनुसार NFSA का अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "खाद्य सुरक्षा (NFSA) में कौन शामिल हो सकता है: 32 श्रेणियां",
      intro: "राज्य सरकार की 27.09.2018 की अधिसूचना में समावेशन (inclusion) की श्रेणियां तय हैं। विभाग के पोर्टल पर दी गई सूची में मुख्य श्रेणियां:",
      list: [
        "<strong>अंत्योदय, BPL और स्टेट BPL परिवार</strong>, और अन्नपूर्णा योजना के लाभार्थी",
        "<strong>पेंशन पाने वाले:</strong> मुख्यमंत्री वृद्धजन सम्मान, एकल नारी, विशेष योग्यजन पेंशन और इंदिरा गांधी राष्ट्रीय वृद्धावस्था / विधवा / विकलांग पेंशन",
        "<strong>गांव में:</strong> 2009-10 से किसी भी साल मनरेगा में 100 दिन काम करने वाले परिवार; भूमिहीन, सीमांत और लघु कृषक",
        "<strong>शहर में:</strong> कच्ची बस्ती के सर्वेक्षित परिवार, शहरी घरेलू कामकाजी महिलाएं, गैर-सरकारी सफाई कर्मी, स्ट्रीट वेंडर",
        "<strong>श्रम विभाग में पंजीकृत निर्माण श्रमिक</strong> (लेबर कार्ड), कचरा बीनने वाले, साइकिल रिक्शा चालक, कुली",
        "<strong>एकल महिलाएं</strong>, सहरिया और कथौड़ी जनजाति, घुमंतू-अर्धघुमंतू जातियां, वनाधिकार पत्रधारी, आस्था कार्डधारी, पालनहार परिवार, ट्रांसजेंडर",
        "<strong>गंभीर रोग/स्थिति:</strong> सिलिकोसिस, एड्स, कुष्ठ रोग, बहु-विकलांगता; निःसंतान वृद्ध दंपती, और वृद्ध दंपती जिनकी केवल दिव्यांग संतान है",
        "सरकारी हॉस्टल के अंतःवासी, पंजीकृत अनाथालय/वृद्धाश्रम, बंधुआ मजदूरी से मुक्त परिवार, अत्याचार निवारण कानून और डायन प्रताड़ना निवारण कानून के पीड़ित",
      ],
      callout: { kind: "warn", html: "<strong>इनमें से कोई भी शर्त लागू हो तो परिवार NFSA में नहीं आता:</strong> (A) कोई सदस्य आयकरदाता; (B) कोई सदस्य सरकारी/अर्धसरकारी/स्वायत्त संस्था में नियमित कर्मचारी या ₹1 लाख सालाना से ज़्यादा पेंशन; (C) किसी सदस्य के पास चार पहिया वाहन (ट्रैक्टर और रोज़ी-रोटी वाले एक वाणिज्यिक वाहन को छोड़कर); (D) परिवार की कुल कृषि भूमि लघु कृषक की सीमा से ज़्यादा; (E) परिवार की कुल आय ₹1 लाख सालाना से ज़्यादा; (F) गांव में 2,000 वर्ग फीट से बड़ा पक्का मकान; (G) नगर निगम/परिषद क्षेत्र में 1,000 वर्ग फीट और (H) नगर पालिका क्षेत्र में 1,500 वर्ग फीट से बड़ा पक्का आवासीय/व्यावसायिक परिसर (कच्ची बस्ती को छोड़कर)।" },
    },
    {
      id: "kagaz",
      title: "NFSA आवेदन के लिए क्या चाहिए",
      list: [
        "परिवार का <strong>जन आधार कार्ड</strong> और सभी सदस्यों का <strong>आधार</strong> (दोनों की सीडिंग ज़रूरी; आधार न बना हो तो पहले e-Mitra/आधार केंद्र पर नामांकन कराएं)",
        "अपनी समावेशन श्रेणी का <strong>प्रमाण पत्र</strong>, जो उस विभाग से जारी हो (जैसे पेंशन नंबर, लेबर कार्ड, पटवारी/तहसीलदार का भूमि प्रमाण, स्थानीय निकाय का प्रमाण पत्र)",
        "<strong>स्वघोषणा / शपथ पत्र</strong> कि परिवार निष्कासन की किसी श्रेणी में नहीं है",
        "शहरी या ग्रामीण क्षेत्र का <strong>निर्धारित आवेदन फॉर्म</strong> (विभाग की वेबसाइट पर उपलब्ध)",
      ],
      callout: { kind: "warn", html: "श्रेणी का स्व-प्रमाणित दस्तावेज़ न लगाने पर आवेदन अस्वीकार हो जाता है। गलत जानकारी पर नाम हटाकर वसूली सहित कानूनी कार्रवाई हो सकती है।" },
    },
    {
      id: "avedan",
      title: "खाद्य सुरक्षा में नाम जुड़वाने का तरीका",
      steps: [
        "नज़दीकी <strong>e-Mitra</strong> केंद्र पर जाएं, या खुद <strong>emitra.rajasthan.gov.in</strong> / <a href=\"https://rrcc.rajasthan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rrcc.rajasthan.gov.in</a> (SSO लॉगिन) से आवेदन करें।",
        "<strong>\"खाद्य सुरक्षा योजना (NFSA) के लिए आवेदन फॉर्म\"</strong> भरें: जन आधार नंबर, परिवार के सदस्य और अपनी समावेशन श्रेणी।",
        "श्रेणी का प्रमाण पत्र और स्वघोषणा अपलोड करें, जमा करें और <strong>आवेदन नंबर</strong> संभालें।",
        "आवेदन की जांच संबंधित क्षेत्र के <strong>उपखंड अधिकारी (SDO)</strong> करते हैं। कमी के लिए आवेदन लौटाया जाए तो <strong>30 दिन</strong> में पूरी करें, वरना आवेदन अपने-आप अस्वीकार हो जाएगा (बाद में दोबारा आवेदन कर सकते हैं)।",
        "स्थिति rrcc पोर्टल पर \"NFSA के लिए आवेदन की स्थिति\" में देखें।",
      ],
      callout: { kind: "info", html: "<strong>नया राशन कार्ड या कार्ड में बदलाव</strong> (जैसे APL कार्ड) के लिए विभाग ने e-Mitra/CSC का अलग फॉर्म रखा है। राजस्थान लोक सेवाओं के प्रदान की गारंटी अधिनियम, 2011 के तहत गांव में <strong>विकास अधिकारी</strong> (पंचायत समिति) और नगरपालिका क्षेत्र में <strong>अधिशासी अधिकारी/आयुक्त</strong> कार्ड जारी करने के लिए अधिकृत हैं।" },
    },
    {
      id: "sadasya",
      title: "नया सदस्य जोड़ना, गिव-अप और कार्ड डाउनलोड",
      list: [
        "<strong>नया सदस्य:</strong> rrcc पोर्टल पर \"राशन कार्ड में नए सदस्य का नाम जोड़ने के लिए आवेदन पत्र\" और उसकी स्थिति अलग से दी गई है।",
        "<strong>गिव-अप अभियान:</strong> जो परिवार निष्कासन की शर्तों में आते हैं, वे rrcc पोर्टल के \"GIVE-UP\" फॉर्म से खुद NFSA से नाम हटवा सकते हैं।",
        '<strong>कार्ड और NOC डाउनलोड:</strong> <a href="https://rrcc.rajasthan.gov.in/DownloadRationCard.aspx" target="_blank" rel="noopener nofollow">rrcc.rajasthan.gov.in/DownloadRationCard.aspx</a>',
        '<strong>आवेदन की स्थिति:</strong> <a href="https://food.rajasthan.gov.in/Form_Status.aspx" target="_blank" rel="noopener nofollow">food.rajasthan.gov.in</a> पर राशन कार्ड नंबर या फॉर्म नंबर से।',
        '<strong>राशन कार्ड और वितरण का विवरण:</strong> <a href="https://food.rajasthan.gov.in/SearchRationCardTransaction.aspx" target="_blank" rel="noopener nofollow">ज़िला चुनकर खोजें</a>।',
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "राशन डिपो (उचित मूल्य दुकान) पर आधार आधारित PoS मशीन से अंगूठा/उंगली लगाकर मिलता है। विभाग के परिपत्र के अनुसार One Nation One Ration Card में दूसरे राज्यों में गेहूं लेने के लिए आधार सीडिंग ज़रूरी है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश के किसी भी e-PoS डिपो पर अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी डिपो; ऐप से शिकायत भी दर्ज होती है।",
      ],
    },
    {
      id: "dikkat",
      title: "आवेदन क्यों अस्वीकार होता है और क्या करें",
      table: {
        head: ["कारण", "हल"],
        rows: [
          ["श्रेणी का प्रमाण पत्र नहीं लगाया", "संबंधित विभाग से प्रमाण पत्र लेकर e-Mitra से दोबारा आवेदन करें"],
          ["जन आधार या आधार सीडिंग नहीं", "पहले जन आधार में सदस्य और आधार जुड़वाएं, फिर आवेदन"],
          ["सेंड-बैक के 30 दिन में कमी पूरी नहीं की", "आवेदन अपने-आप अस्वीकार; नया आवेदन कर सकते हैं"],
          ["जांच में निष्कासन की शर्त मिली (जैसे आय ₹1 लाख से ज़्यादा)", "NFSA में नाम नहीं जुड़ेगा; निष्कासन वाली श्रेणी में हों तो गिव-अप करें"],
          ["फैसले से असहमत", "विभाग के फॉर्म पर उपखंड अधिकारी / ज़िला रसद अधिकारी को अपील करें"],
          ["राशन नहीं मिला या कम मिला", "1800-180-6030 या 14445 पर, या sampark.rajasthan.gov.in पर शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-180-6030</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        "<strong>14445</strong>: विभाग की वेबसाइट पर दी गई हेल्पलाइन",
        "<strong>6127</strong>, <strong>1800-180-6127</strong> और <strong>181</strong>: NFSA पोर्टल पर राजस्थान के हेल्पडेस्क नंबर",
        "<strong>1967</strong>: केंद्र सरकार के खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://sampark.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">sampark.rajasthan.gov.in</a>',
      ],
    },
  ],
  official: [
    { href: "https://rrcc.rajasthan.gov.in/", title: "NFSA आवेदन, स्थिति, नया सदस्य और गिव-अप (खाद्य विभाग)" },
    { href: "https://food.rajasthan.gov.in/NFSA_Application.aspx", title: "NFSA में नाम जोड़ने की प्रक्रिया और परिपत्र" },
    { href: "https://food.rajasthan.gov.in/Form_Download.aspx", title: "राशन कार्ड और NFSA के आवेदन फॉर्म" },
    { href: "https://food.rajasthan.gov.in/Form_Status.aspx", title: "Ration Card Application Status" },
    { href: "https://food.rajasthan.gov.in/", title: "खाद्य एवं नागरिक आपूर्ति विभाग, राजस्थान" },
    { href: "https://nfsa.gov.in/State/RJ", title: "NFSA पोर्टल: राजस्थान का पेज" },
  ],
  faq: [
    { q: "राजस्थान में खाद्य सुरक्षा (NFSA) में नाम कैसे जुड़वाएं?", a: "e-Mitra पर या rrcc.rajasthan.gov.in से NFSA का ऑनलाइन फॉर्म भरें, जन आधार नंबर दें, अपनी समावेशन श्रेणी का प्रमाण पत्र और स्वघोषणा अपलोड करें। जांच उपखंड अधिकारी करते हैं। आवेदन पोर्टल खुला होने पर ही लिए जाते हैं।" },
    { q: "राजस्थान में NFSA के लिए कौन पात्र है?", a: "27.09.2018 की अधिसूचना की 32 श्रेणियां, जैसे AAY/BPL/स्टेट BPL, पेंशनधारी, मनरेगा में 100 दिन वाले परिवार, लघु-सीमांत किसान, निर्माण श्रमिक, एकल महिलाएं, स्ट्रीट वेंडर। आयकरदाता, सरकारी कर्मचारी, ₹1 लाख से ज़्यादा आय या चार पहिया वाहन वाले परिवार बाहर हैं।" },
    { q: "राजस्थान राशन कार्ड का स्टेटस कैसे देखें?", a: "food.rajasthan.gov.in के \"Ration Card Application Status\" पेज पर राशन कार्ड नंबर या फॉर्म नंबर डालें। NFSA आवेदन की स्थिति rrcc.rajasthan.gov.in पर देखें।" },
    { q: "राजस्थान राशन कार्ड कैसे डाउनलोड करें?", a: "rrcc.rajasthan.gov.in/DownloadRationCard.aspx पर राशन कार्ड और NOC डाउनलोड होते हैं।" },
    { q: "राशन कार्ड है पर गेहूं नहीं मिलता, क्यों?", a: "मुफ्त गेहूं सिर्फ NFSA सूची में शामिल कार्डों पर मिलता है। विभाग की रिपोर्ट के अनुसार 2.25 करोड़ में से करीब 1.17 करोड़ कार्ड NFSA से बाहर हैं। पात्र हों तो NFSA में नाम जुड़वाने का आवेदन करें।" },
    { q: "गिव-अप अभियान क्या है?", a: "जो परिवार निष्कासन की शर्तों में आते हैं (जैसे आयकरदाता या सरकारी कर्मचारी), वे rrcc पोर्टल के GIVE-UP फॉर्म से खुद को खाद्य सुरक्षा सूची से हटवा सकते हैं।" },
    { q: "राजस्थान राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "खाद्य विभाग का टोल-फ्री 1800-180-6030 और हेल्पलाइन 14445। NFSA पोर्टल पर 6127, 1800-180-6127 और 181 भी दिए हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/rajasthan-labour-card.html", emoji: "👷", title: "राजस्थान लेबर कार्ड", text: "निर्माण श्रमिक भी NFSA श्रेणी में" },
    { href: "/states/rajasthan-income-certificate.html", emoji: "💰", title: "राजस्थान आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/rajasthan-domicile-certificate.html", emoji: "🏠", title: "राजस्थान मूल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/haryana-ration-card.html", emoji: "📋", title: "हरियाणा राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://rrcc.rajasthan.gov.in/", label: "📝 NFSA आवेदन / स्थिति" },
    { href: "https://rrcc.rajasthan.gov.in/DownloadRationCard.aspx", label: "⬇️ राशन कार्ड डाउनलोड" },
  ],
};
