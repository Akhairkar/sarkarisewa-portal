import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - aaplesarkar.mahaonline.gov.in (Aaple Sarkar, Maharashtra Right to Public
//   Services Act 2015 portal) home page: Revenue Department "Income
//   Certificate" (ServiceId=1251) and "Non Creamy Layer"; Citizen Login, Track
//   your Application (Application ID), Verify Your Authenticated Certificate
//   (18-digit barcode), 24x7 Citizen Call Center 1800 120 8040 (toll free);
//   first and second appeal within the department, third appeal before the
//   RTS Commission.
// - Certificate_Documents?ServiceId=1251 (उत्पन्नाचे प्रमाणपत्र): time limit
//   15 days; designated officer Nayab Tahsildar; first appeal Tahsildar; second
//   appeal Sub Divisional Officer. (The page's document box showed "No Documents
//   Required", so the document list below is written generally.)
// - Caste Certificate service page (ServiceId=1284) lists "Income Certificate
//   for the last 3 years issued by the Tahsildar" / "Income proof of 3 years
//   from Talathi" as supporting documents (used only for the NCL note).
// Left out (not confirmable on an official page we could open): fee amount (the
// old page said Rs 33.60; not found on an official page), validity period, a
// fixed document list.
export const maharashtraIncomeCertificate: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Maharashtra Income Certificate 2026: Apply Online",
  description: "Maharashtra (महाराष्ट्र) आय प्रमाण पत्र 2026: Aaple Sarkar पर ऑनलाइन आवेदन, 15 दिन की समय सीमा, नायब तहसीलदार, ज़रूरी कागज़, स्टेटस और अपील।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "महाराष्ट्र आय प्रमाण पत्र (उत्पन्नाचे प्रमाणपत्र) 2026: Aaple Sarkar पर आवेदन, 15 दिन, स्टेटस और अपील",
  lead: "महाराष्ट्र में आय प्रमाण पत्र (उत्पन्नाचे प्रमाणपत्र) राजस्व विभाग की सेवा है और <strong>लोकसेवा हक्क अधिनियम 2015</strong> में शामिल है। आवेदन <strong>Aaple Sarkar</strong> पोर्टल पर खुद या आपले सरकार सेवा केंद्र/सेतु से होता है। प्रमाण पत्र <strong>नायब तहसीलदार</strong> देते हैं और पोर्टल पर समय सीमा <strong>15 दिन</strong> लिखी है। देरी हो तो पहली अपील तहसीलदार और दूसरी उपविभागीय अधिकारी के पास होती है।",
  facts: [
    ["पोर्टल", '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a>'],
    ["जारी करते हैं", "नायब तहसीलदार"],
    ["समय सीमा", "15 दिन"],
    ["हेल्पलाइन", "1800 120 8040 (टोल फ्री, 24x7)"],
  ],
  notice: "<strong>सच्ची आय लिखें:</strong> आय प्रमाण पत्र परिवार की सालाना आय की घोषणा और तलाठी/तहसील की जांच पर बनता है। गलत घोषणा पर प्रमाण पत्र रद्द हो सकता है और कार्रवाई भी हो सकती है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। यह मांगा जाता है:",
      list: [
        "<strong>छात्रवृत्ति</strong> (जैसे MahaDBT), फीस माफी और हॉस्टल",
        "आय पर आधारित <strong>सरकारी योजनाएं</strong>",
        "<strong>नॉन-क्रीमी लेयर</strong> प्रमाण पत्र के आवेदन में आय के प्रमाण के रूप में; जाति प्रमाण पत्र की सेवा-सूची में तहसीलदार का पिछले 3 साल का आय प्रमाण पत्र भी सहायक कागज़ के रूप में दर्ज है",
      ],
      callout: { kind: "info", html: "OBC/VJNT/SBC आरक्षण के लिए आय प्रमाण पत्र काफी नहीं है; इसके लिए अलग <strong>नॉन-क्रीमी लेयर</strong> प्रमाण पत्र बनता है (Aaple Sarkar पर 21 दिन)। देखें: <a href=\"/states/maharashtra-caste-certificate.html\">महाराष्ट्र जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "Aaple Sarkar के सेवा पेज पर इस समय कागज़ों की तय सूची नहीं दिखती; फॉर्म भरते समय पोर्टल जो मांगे वही लगाएं। आम तौर पर ये काम आते हैं:",
      list: [
        "<strong>पहचान का प्रमाण:</strong> आधार, मतदाता पहचान पत्र, PAN कार्ड या ड्राइविंग लाइसेंस",
        "<strong>पते का प्रमाण:</strong> राशन कार्ड, बिजली बिल, संपत्ति कर रसीद या 7/12 उतारा",
        "<strong>आय का प्रमाण:</strong> नौकरी हो तो वेतन प्रमाण पत्र/Form 16, ITR; खेती हो तो 7/12 और 8-अ उतारा; या तलाठी की आय रिपोर्ट",
        "<strong>स्व-घोषणा/शपथ-पत्र</strong> जिसमें परिवार की सालाना आय लिखी हो, और फोटो",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> आय की स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a> खोलें। पहली बार हैं तो अपनी <strong>प्रोफाइल बनाएं (पंजीकरण)</strong>, फिर <strong>Citizen Login</strong> करें।',
        "<strong>Revenue Department → Income Certificate</strong> चुनें।",
        "फॉर्म में परिवार की आय और उसके स्रोत भरें, फोटो और कागज़ अपलोड करें।",
        "पोर्टल पर दिखा शुल्क ऑनलाइन भरें और <strong>Application ID</strong> नोट करें।",
        "मंज़ूरी के बाद Citizen Login में अपने आवेदन से प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "आपले सरकार सेवा केंद्र / सेतु से",
      intro: "नज़दीकी <strong>आपले सरकार सेवा केंद्र</strong> या तहसील के <strong>सेतु केंद्र</strong> पर कागज़ लेकर जाएं। ऑपरेटर ऑनलाइन फॉर्म भरकर रसीद देगा। सेवा शुल्क पहले पूछें और रसीद लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/maharashtra.html\">महाराष्ट्र CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील (लोकसेवा हक्क अधिनियम)",
      table: {
        head: ["सेवा", "समय", "प्रमाण पत्र देने वाले", "पहली अपील", "दूसरी अपील"],
        rows: [
          ["आय प्रमाण पत्र", "15 दिन", "नायब तहसीलदार", "तहसीलदार", "उपविभागीय अधिकारी"],
        ],
      },
      html: "<p><strong>तीसरी अपील:</strong> इसके बाद भी हल न मिले तो <strong>राज्य लोकसेवा हक्क आयोग</strong> के सामने तीसरी अपील होती है (पोर्टल पर \"Application for Appeal Three\")।</p><p><strong>फीस:</strong> शुल्क आवेदन के समय पोर्टल पर दिखता है; हमें कोई आधिकारिक राशि वाला पेज नहीं मिला। सेवा केंद्र का सेवा शुल्क अलग हो सकता है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track your Application</strong> में Application ID डालें।",
        "<strong>डाउनलोड:</strong> Citizen Login में अपने आवेदन से, या उसी सेवा केंद्र से।",
        "<strong>सत्यापन:</strong> <strong>Verify Your Authenticated Certificate</strong> में प्रमाण पत्र का 18 अंकों का बारकोड डालें।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "Aaple Sarkar के सेवा पेज पर वैधता अवधि नहीं लिखी है। आय हर साल बदलती है, इसलिए छात्रवृत्ति और योजनाएं आम तौर पर <strong>चालू या पिछले वित्तीय वर्ष</strong> का प्रमाण पत्र मांगती हैं; कुछ जगह कई सालों की आय का प्रमाण भी मांगा जाता है। फॉर्म की शर्त पढ़कर समय रहते आवेदन करें, क्योंकि समय सीमा 15 दिन है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई प्रमाण नहीं", "वेतन प्रमाण पत्र/Form 16, ITR, 7/12 उतारा या तलाठी की रिपोर्ट लगाएं"],
          ["लिखी आय जांच से मेल नहीं खाती", "सभी स्रोतों की सच्ची आय लिखें"],
          ["गलत तहसील में आवेदन", "जहां आप रहते हैं उसी तहसील का पता दें"],
          ["आरक्षण के लिए आय प्रमाण पत्र बनवाया", "OBC/VJNT/SBC के लिए नॉन-क्रीमी लेयर प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Aaple Sarkar का <strong>24x7 सिटिजन कॉल सेंटर: 1800 120 8040</strong> (टोल फ्री)। आवेदन की बात के लिए तहसील कार्यालय या उसी सेवा केंद्र से संपर्क करें जहां आवेदन किया था।",
    },
  ],
  official: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", title: "Aaple Sarkar (आवेदन, स्टेटस, सत्यापन, अपील)" },
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=1251", title: "Income Certificate: समय सीमा और अधिकारी" },
  ],
  faq: [
    { q: "महाराष्ट्र में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "aaplesarkar.mahaonline.gov.in पर पंजीकरण करके Citizen Login करें, Revenue Department → Income Certificate चुनें, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरें। आपले सरकार सेवा केंद्र या सेतु से भी आवेदन होता है।" },
    { q: "महाराष्ट्र आय प्रमाण पत्र कितने दिन में बनता है?", a: "Aaple Sarkar पर लोकसेवा हक्क अधिनियम के तहत समय सीमा 15 दिन लिखी है। प्रमाण पत्र नायब तहसीलदार देते हैं।" },
    { q: "15 दिन में प्रमाण पत्र न मिले तो?", a: "पहली अपील तहसीलदार को, दूसरी अपील उपविभागीय अधिकारी को, और उसके बाद तीसरी अपील राज्य लोकसेवा हक्क आयोग के सामने।" },
    { q: "आय प्रमाण पत्र की फीस कितनी है?", a: "शुल्क आवेदन के समय Aaple Sarkar पोर्टल पर दिखता है। हमें कोई आधिकारिक राशि वाला पेज नहीं मिला, इसलिए यहां राशि नहीं लिखी है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "Aaple Sarkar होमपेज पर Verify Your Authenticated Certificate में 18 अंकों का बारकोड डालें।" },
  ],
  related: [
    { href: "/service/nagpur-income-certificate.html", emoji: "🏙️", title: "नागपुर आय प्रमाण पत्र", text: "14 तहसीलें, आवेदन और समय" },
    { href: "/states/maharashtra-caste-certificate.html", emoji: "📜", title: "महाराष्ट्र जाति प्रमाण पत्र", text: "जाति, नॉन-क्रीमी लेयर, जात वैधता" },
    { href: "/states/maharashtra-domicile-certificate.html", emoji: "🏠", title: "महाराष्ट्र डोमिसाइल प्रमाण पत्र", text: "अधिवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", label: "📝 Aaple Sarkar पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
