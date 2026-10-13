import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; nadakacheri.karnataka.gov.in did not open from
// our checker, so we used district NIC pages and search extracts of the portal):
// - gadag.nic.in/en/service/caste-certificate/ (district administration):
//   caste and income certificates issued at Atalji Janasnehi Kendras; apply at
//   the hobli-level Nadakacheri/AJSK or online; income certificates are valid
//   for five years, caste certificates for life; no need to apply every year.
// - tumkur.nic.in income/caste certificate service pages: online steps on
//   Nadakacheri (Apply Online, mobile number, New Request, upload, SMS
//   acknowledgement, online payment), fee Rs 40.
// - kolar.nic.in/en/service/caste-and-income-certificate/: 777 hobli-level
//   AJSK centres, Nadakacheri cell at the Tahsildar's office, Deputy
//   Commissioner in charge at district level.
// - Search extracts of nadakacheri.karnataka.gov.in (AJSK services table and
//   procedure page): Rs 40 fee for income and caste-and-income certificates;
//   Sakala time limit 21 working days; income and residence certificates signed
//   by the Deputy Tahsildar.
// Left out (not confirmable on an official page we could open): a fixed
// document list for income proof, income limits of particular schemes, a
// helpline number. Note: an older Tumkur page says 12 months validity; we use
// the five years stated by the Gadag district page and the portal extract.
export const karnatakaIncomeCertificate: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Karnataka Income Certificate 2026: Apply Online",
  description: "Karnataka (कर्नाटक) आय प्रमाण पत्र 2026: Nadakacheri (अटलजी जनस्नेही केंद्र) पोर्टल पर ऑनलाइन आवेदन। शुल्क ₹40, सकाल समय सीमा, 5 साल वैधता, दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "कर्नाटक आय प्रमाण पत्र 2026: नाडकचेरी पर आवेदन, फीस ₹40, 21 दिन की सकाल सीमा और 5 साल वैधता",
  lead: "कर्नाटक में आय प्रमाण पत्र राजस्व विभाग की <strong>नाडकचेरी (अटलजी जनस्नेही केंद्र)</strong> सेवा है। आवेदन होबली के नाडकचेरी केंद्र पर या nadakacheri.karnataka.gov.in पर ऑनलाइन होता है; प्रमाण पत्र पर उप-तहसीलदार हस्ताक्षर करते हैं। फीस ₹40 है और ज़िला प्रशासन के अनुसार यह प्रमाण पत्र <strong>पांच साल तक मान्य</strong> रहता है, इसलिए हर साल नया बनवाने की ज़रूरत नहीं।",
  facts: [
    ["पोर्टल", '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a>'],
    ["जारी करते हैं", "उप-तहसीलदार (नाडकचेरी)"],
    ["फीस / समय", "₹40; सकाल में 21 कार्य दिवस"],
    ["वैधता", "5 साल"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> नाडकचेरी पर सिर्फ \"आय प्रमाण पत्र\" और पिछड़े वर्ग के आरक्षण वाला \"जाति व आय प्रमाण पत्र\" अलग-अलग सेवाएं हैं। EWS आरक्षण का प्रमाण पत्र भी अलग होता है। जिस काम के लिए चाहिए, उसकी अधिसूचना में लिखा प्रारूप देखकर सेवा चुनें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। इसकी ज़रूरत पड़ती है:",
      list: [
        "<strong>छात्रवृत्ति</strong>, फीस छूट और हॉस्टल में दाखिले के लिए",
        "आय पर आधारित <strong>सरकारी योजनाओं</strong> और पेंशन के लिए",
        "पिछड़े वर्ग के आरक्षण में (इसके लिए आम तौर पर \"जाति व आय प्रमाण पत्र\" मांगा जाता है)",
      ],
      callout: { kind: "info", html: "केंद्र की नौकरी में OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि केंद्रीय प्रारूप का <strong>OBC नॉन-क्रीमी लेयर</strong> प्रमाण पत्र लगता है। जानकारी के लिए <a href=\"/states/karnataka-caste-certificate.html\">कर्नाटक जाति प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>आवेदन फॉर्म</strong> (नाडकचेरी पर या ऑनलाइन, कन्नड़ या अंग्रेज़ी में)",
        "<strong>राशन कार्ड</strong> या <strong>मतदाता पहचान पत्र</strong> (पहचान और पते के लिए)",
        "<strong>आय का प्रमाण</strong>: नौकरी है तो वेतन प्रमाण पत्र/सैलरी स्लिप, आयकर भरते हैं तो ITR; खेती या मज़दूरी है तो ज़मीन का रिकॉर्ड या स्व-घोषणा",
        "<strong>स्व-घोषणा</strong> कि परिवार की आय की दी गई जानकारी सही है",
      ],
      callout: { kind: "warn", html: "आय कम या गलत न लिखें। प्रमाण पत्र जारी करने से पहले राजस्व विभाग आपकी बताई आय की जांच कर सकता है। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a> खोलें और <strong>Apply Online</strong> पर जाएं।',
        "अपना <strong>मोबाइल नंबर</strong> डालकर <strong>Proceed</strong> करें।",
        "<strong>New Request</strong> में <strong>Income Certificate</strong> चुनें और फॉर्म की भाषा (कन्नड़/अंग्रेज़ी) चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और <strong>Save</strong> करें। पावती बनती है और उसका नंबर SMS से आता है।",
        "₹40 फीस ऑनलाइन भरें (डेबिट/क्रेडिट कार्ड, नेट बैंकिंग)।",
        "पावती का आवेदन नंबर संभाल कर रखें; इसी से स्टेटस और डाउनलोड होता है।",
      ],
      callout: { kind: "ok", html: "स्कैन छोटी PDF/JPG में रखें। साइज़ घटाने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "offline",
      title: "नाडकचेरी केंद्र से आवेदन",
      intro: "राज्य के <strong>777 होबली</strong> में अटलजी जनस्नेही केंद्र (नाडकचेरी) हैं और तहसीलदार कार्यालय में नाडकचेरी सेल भी है। कागज़ लेकर अपने होबली के केंद्र पर जाएं, ऑपरेटर आवेदन दर्ज करके पावती देगा। प्रमाण पत्र तैयार होने पर वहीं से प्रिंट मिल जाता है।",
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      table: {
        head: ["बात", "जानकारी", "स्रोत"],
        rows: [
          ["फीस", "₹40", "नाडकचेरी सेवा तालिका, तुमकुरु ज़िला पेज"],
          ["समय सीमा", "सकाल (Sakala) में 21 कार्य दिवस", "नाडकचेरी सेवा तालिका"],
          ["हस्ताक्षर", "उप-तहसीलदार (Deputy Tahsildar)", "नाडकचेरी पोर्टल"],
          ["वैधता", "5 साल", "गदग ज़िला प्रशासन"],
        ],
      },
      callout: { kind: "warn", html: "कुछ पुराने ज़िला पेजों पर 12 महीने की वैधता लिखी है, और कई छात्रवृत्ति/योजनाएं अपने नियम में <strong>हाल का</strong> आय प्रमाण पत्र मांगती हैं। फॉर्म भरने से पहले उस योजना की शर्त ज़रूर देखें।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "nadakacheri.karnataka.gov.in पर आवेदन की स्थिति (status) वाले विकल्प में पावती का नंबर डालें, या नाडकचेरी केंद्र पर पूछें।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें या केंद्र से प्रिंट लें।",
        "नाम, पता और आय की रकम तुरंत जांचें; गलती हो तो उसी केंद्र पर सुधार का आवेदन दें।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई कागज़ नहीं", "सैलरी स्लिप, ITR, ज़मीन का रिकॉर्ड या स्व-घोषणा लगाएं"],
          ["आरक्षण के लिए सिर्फ आय प्रमाण पत्र बनवाया", "पिछड़े वर्ग के आरक्षण के लिए \"जाति व आय प्रमाण पत्र\" सेवा चुनें"],
          ["दूसरे होबली/तालुक में आवेदन", "जहां रहते हैं उसी होबली/तालुक में आवेदन करें"],
          ["तय समय में प्रमाण पत्र नहीं मिला", "पावती लेकर तहसीलदार कार्यालय या नाडकचेरी सेल में संपर्क करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://nadakacheri.karnataka.gov.in/", title: "नाडकचेरी / अटलजी जनस्नेही केंद्र पोर्टल (आवेदन, स्टेटस)" },
    { href: "https://gadag.nic.in/en/service/caste-certificate/", title: "जाति और आय प्रमाण पत्र (ज़िला गदग): वैधता" },
    { href: "https://kolar.nic.in/en/service/caste-and-income-certificate/", title: "जाति और आय प्रमाण पत्र (ज़िला कोलार): नाडकचेरी व्यवस्था" },
  ],
  faq: [
    { q: "कर्नाटक में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "nadakacheri.karnataka.gov.in पर Apply Online में मोबाइल नंबर डालें, New Request में Income Certificate चुनें, फॉर्म भरें, कागज़ अपलोड करें और ₹40 फीस भरें।" },
    { q: "कर्नाटक आय प्रमाण पत्र की फीस कितनी है?", a: "नाडकचेरी की सेवा तालिका और ज़िला पेज के अनुसार ₹40।" },
    { q: "कितने दिन में बनता है?", a: "सकाल (Sakala) सेवा में इसकी समय सीमा 21 कार्य दिवस बताई गई है।" },
    { q: "कर्नाटक का आय प्रमाण पत्र कितने साल मान्य है?", a: "गदग ज़िला प्रशासन के अनुसार पांच साल। फिर भी कोई योजना हाल का प्रमाण पत्र मांगे तो उसकी शर्त मानें।" },
    { q: "आय प्रमाण पत्र पर हस्ताक्षर कौन करता है?", a: "नाडकचेरी पोर्टल की जानकारी के अनुसार आय और निवास प्रमाण पत्र पर उप-तहसीलदार (Deputy Tahsildar) हस्ताक्षर करते हैं।" },
  ],
  related: [
    { href: "/states/karnataka-caste-certificate.html", emoji: "📜", title: "कर्नाटक जाति प्रमाण पत्र", text: "नाडकचेरी पर आवेदन, जीवन भर वैध" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://nadakacheri.karnataka.gov.in/", label: "📝 नाडकचेरी पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
