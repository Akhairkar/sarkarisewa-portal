import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - nfsa.gov.in/State/HR (Dept. of Food & Public Distribution, GoI): schemes
//   AAY and "Other Priority Household (OPH)"; 39,93,801 ration cards (AAY
//   2,87,154 + PHH 37,06,647); 9,321 FPS; portals haryanafood.gov.in,
//   epds.haryanafood.gov.in (Ration Card Management System), epos.haryana.gov.in
//   (AePDS), hr.feast.nic.in "Know Your Ration Entitlement"; grievance system
//   164.100.86.247/hrgrams; helpdesk 1967 and 1800-180-2087.
// - haryanafood.gov.in (Food, Civil Supplies & Consumer Affairs Dept.): home
//   page helplines (PDS 1967 & 1800-180-2087; One Nation One Ration 14445 &
//   1800-180-2405), "Online Ration Card" link to saralharyana.gov.in, SARAL
//   helpline 1800-2000-023, PPP Grievance Redressal System link
//   grievance.edisha.gov.in; Right to Service list (PDF uploaded Dec 2022):
//   new card 22 days, fee APL ₹20 / OPH ₹15 / BPL-PH ₹10 / AAY ₹5, card colours,
//   documents, member add/delete 15 days (no fee), address change 15 days,
//   surrender 7 days (₹5), data correction 7 days, designated officer
//   Inspector/AFSO, appeals DFSC then Deputy Commissioner, apply on ePDS or
//   SARAL or at CSC/e-Disha/Atal Seva Kendra; SARAL user manual (Nov 2022) for
//   the APL card with Family ID + OTP; NFSA application form (categories AAY,
//   CBPL, SBPL, OPH; eldest woman as head).
// - Haryana Food Security Rules, 2017 (Gazette 27.11.2017, Schedule-I):
//   priority household inclusion and exclusion criteria.
// - Haryana TPDS (Licensing and Control) Order, 2022: ration card / Parivar
//   Pehchan Patra holders as beneficiaries; PPP = 8-digit family ID under the
//   Haryana Parivar Pehchan Act, 2021.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH, eldest
//   woman head); FAQ for Mera Ration 2.0; free grain 1.1.2024–31.12.2028 per
//   GoI notification of 04.12.2023 (as in our Maharashtra guide).
// - epos.mp.gov.in FAQ (same AePDS FAQ used across states): UIDAI error codes.
// Left out (not confirmable on a page we could open; meraparivar, saral and
// epds portals were not reachable): the PPP income limit for BPL/AAY cards
// that is widely quoted, current monthly items other than NFSA grain, and the
// old page's fee/timeline claims that did not match the department's list.
export const haryanaRationCard: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Haryana Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "हरियाणा राशन कार्ड 2026: AAY, BPL, OPH और APL कार्ड, परिवार पहचान पत्र (Family ID) से SARAL पर आवेदन, ₹5-₹20 फीस, 22 दिन की समय सीमा, नाम जोड़ना-हटाना, पात्रता के नियम और हेल्पलाइन 1967 / 1800-180-2087।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "हरियाणा राशन कार्ड 2026: प्रकार, परिवार पहचान पत्र से आवेदन, फीस और नाम जोड़ना",
  lead: "हरियाणा में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। राशन कार्ड की सेवाएं अंत्योदय SARAL पोर्टल पर परिवार पहचान पत्र (Family ID) से ऑनलाइन ली जाती हैं, या CSC, e-Disha और अटल सेवा केंद्र पर। विभाग की राइट टू सर्विस सूची के अनुसार नया कार्ड 22 दिन में बनना चाहिए।",
  facts: [
    ["राज्य में कार्ड", "39.94 लाख (AAY + PHH)"],
    ["नया कार्ड", "22 दिन, फीस ₹5 से ₹20"],
    ["ऑनलाइन", '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a>'],
    ["हेल्पलाइन", "1967, 1800-180-2087"],
  ],
  notice: "<strong>ध्यान दें:</strong> हरियाणा में राशन कार्ड परिवार पहचान पत्र (PPP) से जुड़ा है। विभाग के 2022 के TPDS आदेश में राशन के लाभार्थी \"राशन कार्ड / परिवार पहचान पत्र धारक\" लिखे गए हैं। Family ID में परिवार के सदस्य, मोबाइल नंबर और आय सही होने चाहिए, क्योंकि SARAL पर आवेदन इसी से भरता है।",
  sections: [
    {
      id: "prakar",
      title: "हरियाणा में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के अनुसार हरियाणा में <strong>39,93,801 राशन कार्ड</strong> हैं (AAY 2,87,154 और प्राथमिकता वाले परिवार 37,06,647), जिन्हें <strong>9,321 राशन डिपो</strong> से राशन मिलता है। विभाग की राइट टू सर्विस सूची में चार तरह के कार्ड और उनके रंग दिए गए हैं:",
      table: {
        head: ["कार्ड", "रंग", "NFSA में?", "हर महीने अनाज", "नए कार्ड की फीस"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "गुलाबी", "हाँ", "<strong>35 किलो प्रति परिवार</strong>", "₹5"],
          ["<strong>BPL (प्राथमिकता परिवार)</strong>", "पीला", "हाँ", "<strong>5 किलो प्रति व्यक्ति</strong>", "₹10"],
          ["<strong>OPH (अन्य प्राथमिकता परिवार)</strong>", "खाकी", "हाँ", "<strong>5 किलो प्रति व्यक्ति</strong>", "₹15"],
          ["<strong>APL</strong>", "हरा", "नहीं", "NFSA का अनाज नहीं", "₹20"],
        ],
      },
      callout: { kind: "info", html: "विभाग के NFSA आवेदन फॉर्म में प्राथमिकता परिवार की तीन उप-श्रेणियां हैं: <strong>CBPL</strong> (केंद्र की BPL सूची), <strong>SBPL</strong> (राज्य की BPL सूची) और <strong>OPH</strong>। केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और प्राथमिकता परिवारों का NFSA अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है प्राथमिकता वाला (NFSA) कार्ड",
      intro: "हरियाणा खाद्य सुरक्षा नियम, 2017 की अनुसूची-I में प्राथमिकता परिवार पहचानने के मापदंड हैं। AAY और BPL परिवार अपने-आप शामिल होते हैं। इनके अलावा:",
      list: [
        "<strong>गांव और शहर दोनों:</strong> बेघर परिवार; जिनका मुखिया दिव्यांग है; विधवा या एकल महिला (अविवाहित/अलग/परित्यक्त) जिस परिवार की मुखिया है",
        "<strong>गांव में:</strong> भूमिहीन खेतिहर मज़दूर; 2 एकड़ तक ज़मीन वाले छोटे और सीमांत किसान; खेती, दिहाड़ी मज़दूरी, घरेलू काम, कूड़ा बीनने, भीख आदि पर निर्भर परिवार",
        "<strong>शहर में:</strong> कच्चे मकान वाले परिवार; कूड़ा बीनने वाले, घरेलू कामगार, रेहड़ी-पटरी वाले, निर्माण मज़दूर, सफाई कर्मचारी, रिक्शा चालक, दुकान सहायक, धोबी, चौकीदार जैसे काम करने वाले परिवार",
      ],
      callout: { kind: "warn", html: "<strong>ये परिवार बाहर रहते हैं (नियम 2017):</strong> आयकर, GST, सर्विस टैक्स या प्रोफेशनल टैक्स देने वाले; सरकारी/बोर्ड/निगम के कर्मचारी; चार पहिया वाहन वाले; सभी स्रोतों से <strong>₹1 लाख से ज़्यादा सालाना आय</strong> वाले; गांव में 2 एकड़ से ज़्यादा ज़मीन या मशीनी कृषि उपकरण वाले; शहर में 100 वर्ग गज से बड़े प्लॉट पर मकान या AC वाले। ये 2017 के नियम हैं; सरकार इनमें बदलाव कर सकती है और अब राशन परिवार पहचान पत्र के रिकॉर्ड से जुड़ा है, इसलिए अपनी श्रेणी SARAL या ज़िला खाद्य एवं पूर्ति नियंत्रक (DFSC) दफ्तर से पक्की करें।" },
    },
    {
      id: "kagaz",
      title: "नए राशन कार्ड के लिए कागज़",
      intro: "विभाग की राइट टू सर्विस सूची के अनुसार:",
      list: [
        "<strong>आधार कार्ड ज़रूरी है</strong> (पहचान के प्रमाण के रूप में)",
        "<strong>निवास का एक प्रमाण:</strong> बिजली बिल, पानी का बिल, टेलीफोन बिल, किरायानामा, मकान मालिक की NOC (उसके ID प्रमाण के साथ), वोटर कार्ड, पासपोर्ट या ड्राइविंग लाइसेंस",
        "<strong>फोटो के साथ हस्ताक्षरित स्व-घोषणा</strong> (self undertaking)",
        "पहले किसी और कार्ड में नाम था तो वहां का <strong>सरेंडर सर्टिफिकेट</strong>",
        "SARAL पर आवेदन के लिए <strong>परिवार पहचान पत्र (Family ID)</strong> और उसमें दर्ज मोबाइल नंबर, जिस पर OTP आता है",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: SARAL पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a> पर लॉगिन करें (खाता न हो तो पहले रजिस्टर करें)।',
        "बाईं ओर <strong>\"Apply for Services\"</strong> → <strong>\"View all Available services\"</strong> खोलें और राशन कार्ड वाली सेवा खोजें (जैसे \"Issuance of new Above Poverty Line (APL) Ration card\")।",
        "<strong>\"I have family Id\"</strong> चुनें, Family ID डालें और \"Click here to send OTP\" दबाएं। OTP परिवार पहचान पत्र में दर्ज मोबाइल पर आएगा।",
        "OTP डालकर परिवार के मुखिया का विवरण लाएं, फॉर्म जांचें और <strong>Final Submit</strong> करें। पावती (acknowledgement) संभाल लें।",
        "विभाग के SARAL मैनुअल के अनुसार APL कार्ड के आवेदन में पावती पर ही कार्ड डाउनलोड करने का लिंक आता है और PDF कार्ड मिल जाता है।",
      ],
      callout: { kind: "ok", html: "<strong>ऑफलाइन:</strong> यही आवेदन नज़दीकी <strong>CSC, e-Disha केंद्र या अटल सेवा केंद्र</strong> पर भी हो सकता है। SARAL से जुड़े सवालों के लिए हेल्पलाइन <strong>1800-2000-023</strong> (सोमवार से शनिवार, सुबह 7 से रात 9 बजे)।" },
    },
    {
      id: "samay",
      title: "राशन कार्ड सेवाएं, समय सीमा और फीस",
      intro: "विभाग की राइट टू सर्विस सूची (वेबसाइट पर दिसंबर 2022 में अपलोड) के अनुसार। सेवा देने वाला अधिकारी इंस्पेक्टर / सहायक खाद्य एवं पूर्ति अधिकारी (AFSO) है:",
      table: {
        head: ["सेवा", "समय सीमा", "फीस"],
        rows: [
          ["नया राशन कार्ड", "<strong>22 दिन</strong>", "AAY ₹5, BPL ₹10, OPH ₹15, APL ₹20"],
          ["सरेंडर सर्टिफिकेट के आधार पर नया कार्ड", "15 दिन", "ऊपर जैसी"],
          ["डुप्लीकेट कार्ड (खोया हो तो FIR/DDR की कॉपी)", "15 दिन", "ऊपर जैसी"],
          ["सदस्य का नाम जोड़ना / हटाना", "15 दिन", "कोई फीस नहीं"],
          ["पता बदलना (डिपो बदलने सहित)", "15 दिन", "कोई फीस नहीं"],
          ["सरेंडर सर्टिफिकेट / सदस्य माइग्रेशन / कार्ड ट्रांसफर", "7 दिन", "₹5"],
          ["कार्ड के डेटा में सुधार और मुखिया बदलना", "7 दिन", "कोई फीस नहीं"],
        ],
      },
      callout: { kind: "info", html: "समय पर काम न हो तो पहली शिकायत/अपील <strong>ज़िला खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले नियंत्रक (DFSC)</strong> के पास और दूसरी <strong>उपायुक्त (Deputy Commissioner)</strong> के पास होती है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और मुखिया बदलना",
      list: [
        "<strong>नाम जोड़ना:</strong> नए सदस्य का आधार ज़रूरी है। छोटे बच्चे के लिए जन्म प्रमाण पत्र, शादी के बाद आई बहू/पत्नी के लिए पुराने कार्ड से सरेंडर सर्टिफिकेट या फोटो सहित स्व-घोषणा।",
        "<strong>नाम हटाना:</strong> मुखिया की स्व-घोषणा और मृत्यु प्रमाण पत्र या विवाह प्रमाण पत्र।",
        "<strong>मुखिया बदलना / गलती सुधारना:</strong> आवेदक का आधार और जिस जानकारी को सुधारना है उसका प्रमाण; मुखिया की मृत्यु पर मृत्यु प्रमाण पत्र।",
        "ये सभी काम ePDS या SARAL पर ऑनलाइन, या CSC / e-Disha / अटल सेवा केंद्र पर होते हैं। परिवार पहचान पत्र में सदस्य पहले से सही दर्ज हों तो काम आसान रहता है।",
      ],
    },
    {
      id: "status",
      title: "राशन का हक और स्टेटस कहां देखें",
      list: [
        '<strong>Know Your Ration Entitlement:</strong> NFSA पोर्टल पर हरियाणा के लिए FEAST की रिपोर्ट <a href="http://hr.feast.nic.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">hr.feast.nic.in</a> दी गई है, जिसमें राशन कार्ड नंबर से हक देखा जाता है।',
        '<strong>राशन कार्ड प्रबंधन (HEPDS):</strong> <a href="https://epds.haryanafood.gov.in/" target="_blank" rel="noopener nofollow">epds.haryanafood.gov.in</a>',
        '<strong>डिपो पर लेन-देन (AePDS):</strong> <a href="https://epos.haryana.gov.in/" target="_blank" rel="noopener nofollow">epos.haryana.gov.in</a>',
        '<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, पिछले लेन-देन और नज़दीकी डिपो।',
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC और One Nation One Ration Card",
      list: [
        "राशन डिपो पर आधार आधारित PoS मशीन से अंगूठा/उंगली लगाकर मिलता है। हर सदस्य का आधार कार्ड से जुड़ा होना चाहिए।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश के किसी भी e-PoS डिपो पर अपना हिस्सा ले सकते हैं। हरियाणा विभाग की ONORC हेल्पलाइन <strong>14445</strong> और <strong>1800-180-2405</strong> है।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["SARAL पर OTP नहीं आ रहा", "OTP परिवार पहचान पत्र में दर्ज मोबाइल पर जाता है; पहले PPP में मोबाइल नंबर अपडेट कराएं"],
          ["Family ID में सदस्य या आय गलत है", "पहले परिवार पहचान पत्र ठीक कराएं; PPP शिकायत के लिए grievance.edisha.gov.in"],
          ["PoS पर एरर 300", "बायोमेट्रिक मेल नहीं खाया: उंगली साफ करके या दूसरी उंगली से कोशिश करें; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["एरर 996 / 997 / 998", "आधार रद्द / निलंबित / गलत नंबर: आधार केंद्र में संपर्क करें और कार्ड में आधार नंबर जंचवाएं"],
          ["22 दिन में कार्ड नहीं बना", "DFSC दफ्तर में राइट टू सर्विस के तहत शिकायत करें; फिर उपायुक्त के पास"],
          ["राशन कम मिला या डिपो ने मना किया", "1967 या 1800-180-2087 पर शिकायत; ऑनलाइन NFSA पोर्टल पर दिया गया हरियाणा का शिकायत सिस्टम"],
        ],
      },
    },
  ],
  official: [
    { href: "https://saralharyana.gov.in/", title: "अंत्योदय SARAL: राशन कार्ड का ऑनलाइन आवेदन" },
    { href: "https://haryanafood.gov.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, हरियाणा" },
    { href: "https://haryanafood.gov.in/right-to-service-act/", title: "राइट टू सर्विस: राशन कार्ड सेवाओं की समय सीमा, फीस और कागज़" },
    { href: "https://haryanafood.gov.in/procedure-for-applying-different-services-on-saral-of-food-civil-supplies-and-consumer-affairs-department/", title: "SARAL पर आवेदन का तरीका (विभाग का मैनुअल)" },
    { href: "https://epds.haryanafood.gov.in/", title: "HEPDS: राशन कार्ड प्रबंधन प्रणाली" },
    { href: "https://nfsa.gov.in/State/HR", title: "NFSA पोर्टल: हरियाणा का पेज (कार्ड संख्या, लिंक, हेल्पलाइन)" },
    { href: "https://grievance.edisha.gov.in/", title: "परिवार पहचान पत्र (PPP) शिकायत निवारण" },
  ],
  faq: [
    { q: "हरियाणा में नया राशन कार्ड कैसे बनवाएं?", a: "saralharyana.gov.in पर लॉगिन करके राशन कार्ड की सेवा चुनें, Family ID डालें, PPP में दर्ज मोबाइल पर आए OTP से विवरण लाएं और फॉर्म जमा करें। CSC, e-Disha या अटल सेवा केंद्र पर भी आवेदन होता है।" },
    { q: "हरियाणा में राशन कार्ड बनने में कितने दिन लगते हैं और फीस कितनी है?", a: "विभाग की राइट टू सर्विस सूची के अनुसार नया कार्ड 22 दिन में बनना चाहिए। फीस AAY ₹5, BPL ₹10, OPH ₹15 और APL ₹20 है। नाम जोड़ने-हटाने की कोई फीस नहीं है।" },
    { q: "क्या राशन कार्ड के लिए परिवार पहचान पत्र ज़रूरी है?", a: "SARAL पर आवेदन Family ID और उसमें दर्ज मोबाइल पर OTP से होता है, और विभाग के आदेश में राशन लाभार्थी 'राशन कार्ड / परिवार पहचान पत्र धारक' लिखे गए हैं। इसलिए पहले PPP बनवाकर उसमें सही जानकारी रखें।" },
    { q: "हरियाणा में BPL राशन कार्ड पर कितना राशन मिलता है?", a: "NFSA के तहत BPL और OPH कार्ड पर हर महीने 5 किलो अनाज प्रति व्यक्ति और AAY कार्ड पर 35 किलो प्रति परिवार मिलता है। यह अनाज 31 दिसंबर 2028 तक मुफ्त है। APL कार्ड पर NFSA का अनाज नहीं मिलता।" },
    { q: "राशन कार्ड में नया नाम कैसे जोड़ें?", a: "SARAL, ePDS या CSC पर नाम जोड़ने की सेवा में आवेदन करें। नए सदस्य का आधार और जन्म प्रमाण पत्र (बच्चे के लिए) या पुराने कार्ड का सरेंडर सर्टिफिकेट (शादी के बाद) लगाएं। समय सीमा 15 दिन है।" },
    { q: "हरियाणा राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "PDS के लिए 1967 और 1800-180-2087, One Nation One Ration के लिए 14445 और 1800-180-2405, और SARAL के लिए 1800-2000-023।" },
    { q: "हरियाणा में कितने राशन कार्ड हैं?", a: "NFSA पोर्टल के अनुसार 39,93,801 कार्ड हैं: AAY 2,87,154 और प्राथमिकता वाले परिवार 37,06,647। राज्य में 9,321 राशन डिपो हैं।" },
  ],
  related: [
    { href: "/service/hr-parivar-pehchan-patra.html", emoji: "👨‍👩‍👧", title: "परिवार पहचान पत्र (PPP)", text: "Family ID बनाना और सुधारना" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/haryana-income-certificate.html", emoji: "💰", title: "हरियाणा आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/haryana-domicile-certificate.html", emoji: "🏠", title: "हरियाणा निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/haryana-labour-card.html", emoji: "👷", title: "हरियाणा लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/states/punjab-ration-card.html", emoji: "📋", title: "पंजाब राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://saralharyana.gov.in/", label: "📝 SARAL पर आवेदन" },
    { href: "http://hr.feast.nic.in/FrmFindRcDetails.aspx", label: "🔎 राशन का हक देखें" },
  ],
};
