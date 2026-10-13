import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; edistrict.up.gov.in and esathi.up.gov.in do not
// open from our checker, so we used search extracts of the portal's own pages
// and district NIC pages):
// - edistrict.up.gov.in/edistrictup/ (e-District UP, NIC UP State Unit) site
//   map: Income Certificate service; FAQ (contact/eDistrictFAQ.htm):
//   verification by application number and certificate ID; download link of
//   the digitally signed certificate sent to the citizen account; counter
//   applications need the filled form, photo, self-declaration and copies.
// - esathi.up.gov.in/citizenservices/login/login.aspx: e-Sathi citizen login.
// - kannauj.nic.in "Issued by Revenue Department" (district page): income
//   certificate requirements: self-certified declaration, ration card copy,
//   updated pay slip in case of pension (the Rs 20 fee on that 2018 page is not
//   used, it is not current).
// - District NIC service pages (mirzapur, farrukhabad, gorakhpur, varanasi,
//   ghaziabad .nic.in): apply on edistrict.up.gov.in, CSC / Jan Seva Kendra or
//   tehsil; DigiLocker integration; helpdesk 0522-2304706, edistrict@nic.in.
// - indiacode.nic.in: Uttar Pradesh Janhit Guarantee Adhiniyam, 2011.
// - Patrika (Gonda) report: income and caste certificates signed by the
//   Tehsildar under the Janhit Guarantee Act.
// - jansunwai.up.nic.in (IGRS): complaint, status, reminder.
// Left out (no current official page we could open): fee amount, time limit in
// days, an official validity period for UP income certificates.
export const uttarPradeshIncomeCertificate: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Uttar Pradesh Income Certificate 2026: Apply Online",
  description: "Uttar Pradesh (उत्तर प्रदेश) आय प्रमाण पत्र 2026: e-District UP (ई-डिस्ट्रिक्ट उत्तर प्रदेश) पर घर बैठे ऑनलाइन आवेदन करें। पात्रता, शुल्क भुगतान के समय पोर्टल पर दिखता है, आवश्यक दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "उत्तर प्रदेश आय प्रमाण पत्र 2026: e-District UP पर आवेदन, कागज़, स्टेटस और डाउनलोड",
  lead: "उत्तर प्रदेश में आय प्रमाण पत्र राजस्व विभाग की सेवा है और <strong>e-District UP</strong> (edistrict.up.gov.in) से बनता है। आवेदन खुद <strong>e-Sathi</strong> सिटिजन लॉगिन से, या जन सेवा केंद्र (CSC)/तहसील से होता है। लेखपाल आय की जांच करते हैं और प्रमाण पत्र <strong>तहसीलदार</strong> के डिजिटल हस्ताक्षर से जारी होता है। साथ में परिवार की आय की स्व-घोषणा और राशन कार्ड जैसा कागज़ लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (लेखपाल की जांच के बाद)"],
    ["आवेदन कहां", "e-Sathi लॉगिन / जन सेवा केंद्र / तहसील"],
    ["फीस", "आवेदन के समय पोर्टल/केंद्र पर दिखती है"],
  ],
  notice: "<strong>सच्ची आय लिखें:</strong> स्व-घोषणा में आय कम या ज़्यादा लिखने पर लेखपाल की जांच में आवेदन रुक सकता है, और गलत घोषणा पर कार्रवाई भी हो सकती है। परिवार की सभी स्रोतों (खेती, मज़दूरी, नौकरी, पेंशन, व्यापार) की कुल सालाना आय लिखें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। इसकी ज़रूरत पड़ती है:",
      list: [
        "<strong>छात्रवृत्ति</strong> और फीस माफी (जैसे UP स्कॉलरशिप)",
        "आय पर आधारित <strong>सरकारी योजनाएं</strong> और पेंशन",
        "<strong>EWS आरक्षण</strong> के लिए अलग \"आय एवं संपत्ति प्रमाण पत्र\" बनता है; साधारण आय प्रमाण पत्र उसकी जगह नहीं चलता",
      ],
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि <strong>OBC (नॉन-क्रीमी लेयर) जाति प्रमाण पत्र</strong> लगता है। देखें: <a href=\"/states/uttar-pradesh-caste-certificate.html\">उत्तर प्रदेश जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "जिला NIC पृष्ठों के अनुसार आय प्रमाण पत्र के लिए ये कागज़ लगते हैं (फॉर्म भरते समय पोर्टल पर सूची एक बार देख लें):",
      list: [
        "<strong>स्व-प्रमाणित घोषणा पत्र</strong> (परिवार की सालाना आय और उसके स्रोत)",
        "<strong>राशन कार्ड</strong> की कॉपी",
        "<strong>पेंशन/नौकरी हो तो ताज़ा वेतन या पेंशन पर्ची</strong>",
        "<strong>आधार कार्ड</strong> और पासपोर्ट साइज़ फोटो",
        "खेती की आय हो तो <strong>खतौनी</strong> की कॉपी काम आती है",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> आय की स्व-घोषणा कैसे लिखें: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "खुद ऑनलाइन आवेदन (e-Sathi)",
      steps: [
        '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a> खोलें और <strong>सिटिजन लॉगिन (e-Sathi)</strong> चुनें। "ई-डिस्ट्रिक्ट लॉगिन" अधिकारियों और जन सेवा केंद्र संचालकों के लिए है।',
        "पहली बार हैं तो मोबाइल नंबर से <strong>नया पंजीकरण</strong> करें और लॉगिन करें।",
        "सेवाओं में <strong>आय प्रमाण पत्र</strong> चुनें, परिवार की आय के स्रोत और कुल सालाना आय भरें, कागज़ अपलोड करें।",
        "पोर्टल पर जो शुल्क दिखे उसका ऑनलाइन भुगतान करें और आवेदन संख्या नोट करें।",
        "लेखपाल की जांच और तहसीलदार की मंज़ूरी के बाद डिजिटल हस्ताक्षर वाले प्रमाण पत्र का डाउनलोड लिंक e-Sathi खाते में आता है।",
      ],
    },
    {
      id: "offline",
      title: "जन सेवा केंद्र (CSC) या तहसील से",
      intro: "नज़दीकी <strong>जन सेवा केंद्र</strong> या तहसील केंद्र पर फोटो, स्व-घोषणा पत्र, राशन कार्ड और आधार लेकर जाएं। संचालक ऑनलाइन आवेदन करके रसीद देगा। केंद्र पर सेवा शुल्क अलग लग सकता है; पहले पूछें और रसीद लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/uttar-pradesh.html\">उत्तर प्रदेश CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील",
      list: [
        "<strong>कानून:</strong> यह सेवा <strong>उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011</strong> के तहत आती है, जिसमें तय समय सीमा, प्रथम अपील और द्वितीय अपील की व्यवस्था है।",
        "<strong>समय:</strong> दिनों की संख्या हमें किसी मौजूदा सरकारी पेज पर नहीं मिली। रसीद/पोर्टल पर दिखने वाली तारीख देखें।",
        "<strong>फीस:</strong> आवेदन/भुगतान के समय पोर्टल पर दिखती है। जन सेवा केंद्र का सेवा शुल्क अलग हो सकता है।",
        "<strong>शिकायत:</strong> देरी या गलत अस्वीकृति पर तहसील/उपजिलाधिकारी कार्यालय में अपील करें, या <a href=\"https://jansunwai.up.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">जनसुनवाई (IGRS) पोर्टल</a> पर शिकायत दर्ज करें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-District UP पोर्टल पर आवेदन संख्या से, या e-Sathi खाते में लॉगिन करके।",
        "<strong>डाउनलोड:</strong> e-Sathi खाते के लिंक से या <strong>DigiLocker</strong> से।",
        "<strong>सत्यापन:</strong> पोर्टल के प्रमाण पत्र सत्यापन विकल्प में आवेदन संख्या और प्रमाण पत्र संख्या डालें।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "उत्तर प्रदेश के आय प्रमाण पत्र की वैधता अवधि बताने वाला कोई मौजूदा सरकारी आदेश हमें नहीं मिला। आय हर साल बदल सकती है, इसलिए छात्रवृत्ति और योजनाएं अक्सर <strong>चालू वित्तीय वर्ष</strong> या किसी तय तारीख के बाद बना प्रमाण पत्र मांगती हैं। फॉर्म की शर्त पढ़कर देखें कि आपका प्रमाण पत्र चलेगा या नया बनवाना होगा।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["स्व-घोषणा में आय के स्रोत अधूरे", "खेती, मज़दूरी, नौकरी, पेंशन, व्यापार: सब लिखें"],
          ["लिखी आय जांच से मेल नहीं खाती", "सच्ची आय लिखें; वेतन/पेंशन पर्ची या खतौनी लगाएं"],
          ["गलत तहसील में आवेदन", "जहां आप रहते हैं उसी तहसील का पता दें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवाया", "EWS के लिए अलग \"आय एवं संपत्ति प्रमाण पत्र\" बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "जिला NIC पृष्ठों पर e-District UP हेल्पडेस्क <strong>0522-2304706</strong> और ईमेल <strong>edistrict@nic.in</strong> दिए गए हैं। आवेदन की बात के लिए पहले अपनी तहसील या उसी जन सेवा केंद्र से संपर्क करें। शिकायत <a href=\"https://jansunwai.up.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">जनसुनवाई पोर्टल</a> पर दर्ज करें।",
    },
  ],
  official: [
    { href: "https://edistrict.up.gov.in/edistrictup/", title: "e-District UP (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://esathi.up.gov.in/citizenservices/login/login.aspx", title: "e-Sathi सिटिजन लॉगिन" },
    { href: "https://jansunwai.up.nic.in/", title: "जनसुनवाई-समाधान (IGRS) शिकायत पोर्टल" },
    { href: "https://www.indiacode.nic.in/handle/123456789/19960", title: "उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011 (India Code)" },
  ],
  faq: [
    { q: "उत्तर प्रदेश में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.up.gov.in पर सिटिजन लॉगिन (e-Sathi) से पंजीकरण करें, आय प्रमाण पत्र सेवा चुनें, आय की जानकारी भरें, स्व-घोषणा और राशन कार्ड जैसे कागज़ अपलोड करें और पोर्टल पर दिखा शुल्क भरें।" },
    { q: "UP आय प्रमाण पत्र कौन जारी करता है?", a: "लेखपाल की जांच के बाद तहसीलदार के डिजिटल हस्ताक्षर से।" },
    { q: "UP आय प्रमाण पत्र कितने समय तक मान्य है?", a: "वैधता अवधि बताने वाला कोई मौजूदा सरकारी आदेश हमें नहीं मिला। छात्रवृत्ति और योजनाएं अक्सर चालू वित्तीय वर्ष का प्रमाण पत्र मांगती हैं, इसलिए फॉर्म की शर्त देखें।" },
    { q: "आय प्रमाण पत्र में किसकी आय लिखी जाती है?", a: "परिवार की कुल सालाना आय, सभी स्रोतों से: खेती, मज़दूरी, नौकरी, पेंशन और व्यापार।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। EWS आरक्षण के लिए अलग \"आय एवं संपत्ति प्रमाण पत्र\" बनता है।" },
  ],
  related: [
    { href: "/states/uttar-pradesh-caste-certificate.html", emoji: "📜", title: "उत्तर प्रदेश जाति प्रमाण पत्र", text: "SC/ST/OBC, e-District UP" },
    { href: "/states/uttar-pradesh-domicile-certificate.html", emoji: "🏠", title: "उत्तर प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.up.gov.in/edistrictup/", label: "📝 e-District UP पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
