import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - aaplesarkar.mahaonline.gov.in (Aaple Sarkar, Maharashtra Right to Public
//   Services Act 2015 portal) home page: Revenue Department services "Caste
//   Certificate" (ServiceId=1284) and "Non Creamy Layer" (ServiceId=1286);
//   Citizen Login, Track your Application (Application ID), Verify Your
//   Authenticated Certificate (18-digit barcode), 24x7 Citizen Call Center
//   1800 120 8040 (toll free); first and second appeal within the department,
//   third appeal before the RTS Commission; apply online yourself or at a
//   service centre.
// - Certificate_Documents?ServiceId=1284 (Caste Certificate): identity proof
//   (any 1), address proof (any 1) and the long "other documents" list (father's
//   / relative's caste certificate, school leaving certificate of father /
//   grandfather, Kotwal book, 7/12 and 8A extracts, Gram Panchayat birth/death
//   register extract, Talathi / Sarpanch / Police Patil enquiry report,
//   affidavit, income proof of 3 years, etc.); time limit 45 days; designated
//   officer Sub-Divisional Officer / Dy. Collector; first appeal Additional
//   Collector; second appeal Collector.
// - Certificate_Documents?ServiceId=1286 (Non Creamy Layer): ID and address
//   proof, mandatory income proof and caste certificate; 21 days; SDO;
//   appeals Additional Collector / Collector.
// - barti.maharashtra.gov.in landing page: BARTI (Social Justice & Special
//   Assistance Dept) link to "जात प्रमाणपत्र पडताळणी माहिती प्रणाली" CCVIS
//   phase-2 at bartievalidity.maharashtra.gov.in (caste validity).
// Left out (not confirmable on an official page we could open): fee amount,
// residence cut-off dates, NCL validity period, caste validity procedure and
// time limit.
export const maharashtraCasteCertificate: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Maharashtra Caste Certificate 2026: Apply & Status",
  description: "महाराष्ट्र जाति प्रमाण पत्र (Caste Certificate) 2026: Aaple Sarkar पर आवेदन, ज़रूरी कागज़, 45 दिन की समय सीमा, नॉन-क्रीमी लेयर, स्टेटस और अपील।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "महाराष्ट्र जाति प्रमाण पत्र 2026: Aaple Sarkar पर आवेदन, कागज़, 45 दिन की समय सीमा और अपील",
  lead: "महाराष्ट्र में जाति प्रमाण पत्र राजस्व विभाग की सेवा है और <strong>लोकसेवा हक्क अधिनियम 2015</strong> में शामिल है। आवेदन <strong>Aaple Sarkar</strong> पोर्टल (aaplesarkar.mahaonline.gov.in) पर खुद या आपले सरकार सेवा केंद्र/सेतु से होता है। प्रमाण पत्र <strong>उपविभागीय अधिकारी (SDO) / उप जिलाधिकारी</strong> देते हैं और पोर्टल पर समय सीमा <strong>45 दिन</strong> लिखी है। OBC/VJNT/SBC आरक्षण के लिए <strong>नॉन-क्रीमी लेयर</strong> प्रमाण पत्र अलग से (21 दिन) बनता है।",
  facts: [
    ["पोर्टल", '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a>'],
    ["जारी करते हैं", "उपविभागीय अधिकारी / उप जिलाधिकारी"],
    ["समय सीमा", "45 दिन (नॉन-क्रीमी लेयर: 21 दिन)"],
    ["हेल्पलाइन", "1800 120 8040 (टोल फ्री, 24x7)"],
  ],
  notice: "<strong>जाति प्रमाण पत्र और जात वैधता अलग हैं:</strong> नौकरी, शिक्षा या चुनाव में कई जगह जाति प्रमाण पत्र के साथ <strong>जात वैधता प्रमाणपत्र (Caste Validity)</strong> भी मांगा जाता है। यह जिले की जात प्रमाणपत्र पडताळणी समिति देती है और इसका आवेदन BARTI के <a href=\"https://bartievalidity.maharashtra.gov.in/index.php\" target=\"_blank\" rel=\"noopener nofollow\">CCVIS पोर्टल</a> पर होता है, Aaple Sarkar पर नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "जाति प्रमाण पत्र, नॉन-क्रीमी लेयर और जात वैधता में फर्क",
      table: {
        head: ["दस्तावेज़", "कब चाहिए", "कौन देता है / कहां"],
        rows: [
          ["<strong>जाति प्रमाण पत्र</strong>", "SC, ST, OBC, VJNT, SBC आदि वर्ग का प्रमाण", "SDO / उप जिलाधिकारी, Aaple Sarkar (45 दिन)"],
          ["<strong>नॉन-क्रीमी लेयर (NCL)</strong>", "OBC, VJNT, SBC आदि को आरक्षण का लाभ", "SDO, Aaple Sarkar (21 दिन)"],
          ["<strong>जात वैधता (Caste Validity)</strong>", "प्रमाण पत्र की जांच-पुष्टि; दाखिला, नौकरी, चुनाव में मांगा जाता है", "जिला जात प्रमाणपत्र पडताळणी समिति, BARTI CCVIS पोर्टल"],
        ],
      },
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी:</strong> केंद्र सरकार की भर्ती में OBC आरक्षण के लिए <strong>केंद्र के प्रारूप</strong> वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र लगता है और जाति <strong>केंद्रीय OBC सूची</strong> में होनी चाहिए। विज्ञापन में दिया प्रारूप देखकर आवेदन करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (Aaple Sarkar की सूची)",
      list: [
        "<strong>पहचान का प्रमाण (कोई 1):</strong> PAN कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस, मनरेगा जॉब कार्ड, RSBY कार्ड या सरकारी/अर्ध-सरकारी पहचान पत्र।",
        "<strong>पते का प्रमाण (कोई 1):</strong> राशन कार्ड, आधार, मतदाता पहचान पत्र, बिजली/पानी/टेलीफोन बिल, संपत्ति कर रसीद, 7/12 और 8-अ उतारा या किराया रसीद, पासपोर्ट, ड्राइविंग लाइसेंस।",
        "<strong>जाति का प्रमाण (मामले के अनुसार):</strong> पिता या रिश्तेदार का जाति प्रमाण पत्र, भाई की जात वैधता की कॉपी, पिता/दादा का स्कूल छोड़ने का प्रमाण पत्र (LC), पिता/दादा/दादी की कोतवाल बुक की कॉपी, ग्राम पंचायत के जन्म-मृत्यु रजिस्टर का उतारा, 7/12, 8-अ, खसरा या अधिकार अभिलेख।",
        "<strong>दूसरे कागज़ जो मांगे जा सकते हैं:</strong> शपथ-पत्र, तलाठी/सरपंच/पुलिस पाटिल की जांच रिपोर्ट, अपना स्कूल छोड़ने का प्रमाण पत्र, नाम बदला हो तो राजपत्र की कॉपी।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> सबसे मज़बूत सबूत <strong>पिता या दादा के पुराने स्कूल रिकॉर्ड</strong> हैं जिनमें जाति लिखी हो। परिवार की वंशावली और ये रिकॉर्ड पहले से इकट्ठा कर लें; जात वैधता में भी यही काम आते हैं।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a> खोलें। पहली बार हैं तो पोर्टल पर अपनी <strong>प्रोफाइल बनाएं (पंजीकरण)</strong>, फिर <strong>Citizen Login</strong> करें।',
        "<strong>Revenue Department → Caste Certificate</strong> चुनें। सेवा के पेज पर कागज़ों की सूची और समय सीमा दिखती है।",
        "फॉर्म भरें, फोटो और कागज़ अपलोड करें।",
        "पोर्टल पर दिखा शुल्क ऑनलाइन भरें और <strong>Application ID</strong> नोट करें।",
        "नॉन-क्रीमी लेयर चाहिए तो जाति प्रमाण पत्र मिलने के बाद <strong>Revenue Department → Non Creamy Layer</strong> में अलग आवेदन करें (आय का प्रमाण और जाति प्रमाण पत्र अनिवार्य)।",
      ],
    },
    {
      id: "offline",
      title: "आपले सरकार सेवा केंद्र / सेतु से",
      intro: "खुद ऑनलाइन न कर सकें तो नज़दीकी <strong>आपले सरकार सेवा केंद्र</strong> या तहसील के <strong>सेतु केंद्र</strong> पर सभी कागज़ लेकर जाएं। ऑपरेटर ऑनलाइन फॉर्म भरकर रसीद देगा, जिस पर Application ID होती है। केंद्र पर सेवा शुल्क लग सकता है; रसीद ज़रूर लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/maharashtra.html\">महाराष्ट्र CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील (लोकसेवा हक्क अधिनियम)",
      table: {
        head: ["सेवा", "समय", "प्रमाण पत्र देने वाले", "पहली अपील", "दूसरी अपील"],
        rows: [
          ["जाति प्रमाण पत्र", "45 दिन", "उपविभागीय अधिकारी / उप जिलाधिकारी", "अपर जिलाधिकारी", "जिलाधिकारी"],
          ["नॉन-क्रीमी लेयर", "21 दिन", "उपविभागीय अधिकारी", "अपर जिलाधिकारी", "जिलाधिकारी"],
        ],
      },
      html: "<p><strong>तीसरी अपील:</strong> पहली और दूसरी अपील के बाद भी हल न मिले तो <strong>राज्य लोकसेवा हक्क आयोग</strong> के सामने तीसरी अपील होती है; Aaple Sarkar पोर्टल पर \"Application for Appeal Three\" का विकल्प है।</p><p><strong>फीस:</strong> शुल्क आवेदन के समय पोर्टल पर दिखता है। सेवा केंद्र का सेवा शुल्क अलग हो सकता है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track your Application</strong> में Application ID डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Citizen Login में अपने आवेदन से डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें; सेवा केंद्र से आवेदन किया हो तो वहीं से भी मिलता है।",
        "<strong>सत्यापन:</strong> <strong>Verify Your Authenticated Certificate</strong> में प्रमाण पत्र का <strong>18 अंकों का बारकोड</strong> डालें।",
      ],
      html: '<p>DigiLocker से जुड़ी जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "जात वैधता (Caste Validity) कैसे बनती है",
      intro: "जाति प्रमाण पत्र मिलने के बाद उसकी जांच जिले की <strong>जात प्रमाणपत्र पडताळणी समिति</strong> करती है और <strong>जात वैधता प्रमाणपत्र</strong> देती है। सामाजिक न्याय विभाग की संस्था BARTI इसके लिए <strong>जात प्रमाणपत्र पडताळणी माहिती प्रणाली (CCVIS)</strong> चलाती है। कागज़ों की सूची और प्रक्रिया उसी पोर्टल पर देखें। 12वीं, मेडिकल/इंजीनियरिंग दाखिले या नौकरी से पहले समय रहते आवेदन करें, क्योंकि समिति की जांच में समय लगता है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जाति का पुराना रिकॉर्ड नहीं लगाया", "पिता/दादा का स्कूल LC, कोतवाल बुक, ग्राम पंचायत का जन्म-मृत्यु उतारा या रिश्तेदार का जाति प्रमाण पत्र लगाएं"],
          ["पहचान या पते का प्रमाण सूची से बाहर का", "Aaple Sarkar की सूची में से कोई 1 पहचान और 1 पते का प्रमाण लगाएं"],
          ["नाम कागज़ों में अलग", "नाम बदला हो तो राजपत्र (गैज़ेट) की कॉपी लगाएं"],
          ["NCL के लिए आय का प्रमाण नहीं", "नॉन-क्रीमी लेयर में आय का प्रमाण और जाति प्रमाण पत्र दोनों अनिवार्य हैं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Aaple Sarkar का <strong>24x7 सिटिजन कॉल सेंटर: 1800 120 8040</strong> (टोल फ्री)। आवेदन से जुड़ी बात के लिए अपने तहसील/SDO कार्यालय या उसी सेवा केंद्र से संपर्क करें जहां आवेदन किया था।",
    },
  ],
  official: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", title: "Aaple Sarkar (आवेदन, स्टेटस, सत्यापन, अपील)" },
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=1284", title: "Caste Certificate: कागज़, समय सीमा, अधिकारी" },
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=1286", title: "Non Creamy Layer: कागज़, समय सीमा, अधिकारी" },
    { href: "https://bartievalidity.maharashtra.gov.in/index.php", title: "BARTI CCVIS: जात वैधता (Caste Validity)" },
  ],
  faq: [
    { q: "महाराष्ट्र में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "aaplesarkar.mahaonline.gov.in पर पंजीकरण करके Citizen Login करें, Revenue Department → Caste Certificate चुनें, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरें। आपले सरकार सेवा केंद्र या सेतु से भी आवेदन होता है।" },
    { q: "महाराष्ट्र जाति प्रमाण पत्र कितने दिन में बनता है?", a: "Aaple Sarkar पर लोकसेवा हक्क अधिनियम के तहत समय सीमा 45 दिन लिखी है। नॉन-क्रीमी लेयर प्रमाण पत्र के लिए 21 दिन।" },
    { q: "प्रमाण पत्र समय पर न मिले तो क्या करें?", a: "पहली अपील अपर जिलाधिकारी को, दूसरी अपील जिलाधिकारी को, और फिर तीसरी अपील राज्य लोकसेवा हक्क आयोग के सामने। Aaple Sarkar पोर्टल पर अपील का विकल्प है।" },
    { q: "जात वैधता प्रमाणपत्र क्या है और कहां बनता है?", a: "यह जाति प्रमाण पत्र की जांच के बाद जिला जात प्रमाणपत्र पडताळणी समिति देती है। आवेदन BARTI के CCVIS पोर्टल (bartievalidity.maharashtra.gov.in) पर होता है।" },
    { q: "जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "Aaple Sarkar होमपेज पर Verify Your Authenticated Certificate में प्रमाण पत्र का 18 अंकों का बारकोड डालें।" },
  ],
  related: [
    { href: "/states/maharashtra-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "Aaple Sarkar, 15 दिन" },
    { href: "/states/maharashtra-domicile-certificate.html", emoji: "🏠", title: "महाराष्ट्र डोमिसाइल प्रमाण पत्र", text: "अधिवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", label: "📝 Aaple Sarkar पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
