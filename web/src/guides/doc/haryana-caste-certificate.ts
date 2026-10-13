import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; saralharyana.gov.in, hppa.haryana.gov.in,
// meraparivar.haryana.gov.in and haryanascbc.gov.in do not open from our
// checker, so we used search extracts of those pages and district pages):
// - hppa.haryana.gov.in "Caste/Class Certificate" (Haryana Parivar Pehchan
//   Authority; search extract): apply over the counter at any SARAL Kendra or
//   on the SARAL portal; need a Parivar Pehchan Number (PPN) with caste and
//   caste category verified in the PPP database; for BC/OBC certificates income
//   must also be verified; residents request caste verification on the
//   meraparivar portal and designated officers mark it verified; caste
//   certificate generally valid for life unless the caste is removed/modified
//   by notification; certificates with income/asset (creamy layer) information
//   valid for the current financial year up to 31 March.
// - haryanascbc.gov.in (search extract): certificates of Scheduled Caste,
//   Deprived Scheduled Caste, Backward Class and Other Backward Class of
//   Haryana; list of Scheduled Castes page.
// - Haryana Right to Service Act, 2014 (district RTS pages jind.gov.in,
//   panchkula.nic.in; sewa.haryana.gov.in; haryana-rtsc.gov.in): designated
//   officer must deliver or reject with reasons within the notified time;
//   First and Second Grievance Redressal Authority; Haryana Right to Service
//   Commission (notified 31 July 2014) can impose penalty and compensation.
// - Drishti IAS summary (Jul 2022) of the state's family-ID based online BC
//   certificate service (background only).
// - District pages (fatehabad.nic.in, panipat.gov.in, karnal.gov.in; 2018-19):
//   SC/BC/OBC certificates; documents; Sarpanch/MC and Patwari report; e-Disha /
//   Atal Seva Kendra (used only for the "older documents" note).
// Left out (not confirmable on a current official page): fee, time limit in
// days, Saral menu names, helpline number, issuing officer designation.
export const haryanaCasteCertificate: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Haryana Caste Certificate 2026: Apply & Status",
  description: "हरियाणा जाति प्रमाण पत्र (SC, वंचित SC, BC, OBC) 2026: परिवार पहचान पत्र (PPP) में जाति सत्यापन, Saral Haryana / सरल केंद्र से आवेदन, वैधता और अपील।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "हरियाणा जाति प्रमाण पत्र 2026: परिवार पहचान पत्र में जाति सत्यापन, Saral पर आवेदन और वैधता",
  lead: "हरियाणा में जाति प्रमाण पत्र <strong>परिवार पहचान पत्र (PPP / Family ID)</strong> से जुड़ा है। पहले PPP डेटाबेस में आपकी <strong>जाति और वर्ग सत्यापित (verified)</strong> होनी चाहिए; BC/OBC प्रमाण पत्र के लिए परिवार की <strong>आय भी सत्यापित</strong> होनी चाहिए। इसके बाद प्रमाण पत्र <strong>Saral Haryana</strong> पोर्टल (saralharyana.gov.in) से या किसी भी <strong>सरल केंद्र</strong> से मिलता है। जाति प्रमाण पत्र आम तौर पर जीवन भर मान्य है, पर आय/क्रीमी लेयर वाली जानकारी वाला प्रमाण पत्र केवल चालू वित्तीय वर्ष (31 मार्च) तक।",
  facts: [
    ["पोर्टल", '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a>'],
    ["पहली शर्त", "PPP में जाति (और BC/OBC में आय) सत्यापित"],
    ["कहां", "Saral पोर्टल / कोई भी सरल केंद्र"],
    ["वैधता", "जाति: आम तौर पर जीवन भर; आय/क्रीमी लेयर वाला: 31 मार्च तक"],
  ],
  notice: "<strong>पहले PPP ठीक कराएं:</strong> अगर परिवार पहचान पत्र में आपकी जाति गलत है या \"verified\" नहीं है, तो प्रमाण पत्र नहीं बनेगा। जाति सत्यापन का अनुरोध <a href=\"https://meraparivar.haryana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">meraparivar.haryana.gov.in</a> पर करें; नामित अधिकारी जांच के बाद उसे verified करते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "हरियाणा में कौन-कौन से जाति प्रमाण पत्र बनते हैं",
      intro: "अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण विभाग के अनुसार हरियाणा में ये प्रमाण पत्र बनते हैं:",
      list: [
        "<strong>अनुसूचित जाति (SC)</strong>",
        "<strong>वंचित अनुसूचित जाति (Deprived SC)</strong>",
        "<strong>पिछड़ा वर्ग (BC)</strong>: राज्य की नौकरी/दाखिले में; इसमें क्रीमी लेयर की शर्त लगती है",
        "<strong>अन्य पिछड़ा वर्ग (OBC)</strong>: BC की तरह इसमें भी क्रीमी लेयर की शर्त देखी जाती है",
      ],
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी:</strong> केंद्र सरकार की भर्ती में OBC आरक्षण के लिए जाति <strong>केंद्रीय OBC सूची</strong> में होनी चाहिए और प्रमाण पत्र केंद्र के प्रारूप में (नॉन-क्रीमी लेयर सहित) होना चाहिए। राज्य वाला BC प्रमाण पत्र केंद्र की भर्ती में अक्सर नहीं माना जाता।" },
    },
    {
      id: "ppp",
      title: "पहला कदम: परिवार पहचान पत्र में जाति और आय सत्यापन",
      steps: [
        "पक्का करें कि आपके परिवार का <strong>परिवार पहचान नंबर (PPN / Family ID)</strong> बना है और उसमें आपका नाम है।",
        '<a href="https://meraparivar.haryana.gov.in/" target="_blank" rel="noopener nofollow">meraparivar.haryana.gov.in</a> पर अपनी Family ID में <strong>जाति और वर्ग</strong> देखें। गलत हो या verified न हो तो वहीं सत्यापन का अनुरोध करें।',
        "BC या OBC प्रमाण पत्र चाहिए तो देखें कि परिवार की <strong>आय भी verified</strong> हो। आय सत्यापन PPP में दी गई जानकारी और सरकारी रिकॉर्ड से होता है।",
        "नामित अधिकारी जांच करके जाति/आय को verified करते हैं। इसके बाद ही प्रमाण पत्र का आवेदन आगे बढ़ता है।",
      ],
    },
    {
      id: "online",
      title: "Saral Haryana पर आवेदन",
      steps: [
        '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a> खोलें और अपने खाते से लॉगिन करें (पहली बार हैं तो रजिस्टर करें)।',
        "सेवाओं में अपनी ज़रूरत का प्रमाण पत्र चुनें: SC, वंचित SC, BC या OBC।",
        "अपना <strong>परिवार पहचान नंबर</strong> डालें; सत्यापित जानकारी PPP से आ जाती है।",
        "मांगे गए कागज़ (अगर कोई) अपलोड करें, शुल्क (अगर दिखे) भरें और आवेदन संख्या नोट करें।",
        "मंज़ूरी के बाद प्रमाण पत्र Saral पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "<strong>सरल केंद्र से:</strong> खुद ऑनलाइन न कर सकें तो किसी भी <strong>सरल केंद्र</strong> (अंत्योदय सरल केंद्र / अटल सेवा केंद्र) पर Family ID, आधार और मोबाइल लेकर जाएं; वहां काउंटर से आवेदन होता है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/haryana.html\">हरियाणा CSC लोकेटर</a>।" },
    },
    {
      id: "kagaz",
      title: "कागज़: क्या साथ रखें",
      intro: "PPP से जुड़े आवेदन में ज़्यादातर जानकारी Family ID से आती है। फिर भी ये साथ रखें, क्योंकि PPP में जाति सत्यापन या आवेदन में मांगे जा सकते हैं:",
      list: [
        "<strong>परिवार पहचान नंबर (Family ID)</strong> और आधार",
        "परिवार में पहले बना <strong>जाति प्रमाण पत्र</strong> (पिता/भाई-बहन का) हो तो",
        "जन्म प्रमाण पत्र, वोटर कार्ड या राशन कार्ड",
        "पुरानी व्यवस्था में मांगी जाने वाली <strong>सरपंच/पार्षद और पटवारी की रिपोर्ट</strong> और शपथ-पत्र: कुछ मामलों में अब भी मांगी जा सकती है",
        "फोटो",
      ],
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील (सेवा का अधिकार अधिनियम)",
      list: [
        "<strong>कानून:</strong> Saral की सेवाएं <strong>हरियाणा सेवा का अधिकार अधिनियम, 2014</strong> के तहत आती हैं। नामित अधिकारी को तय समय में सेवा देनी होती है या लिखित कारण के साथ आवेदन खारिज करना होता है।",
        "<strong>समय और फीस:</strong> इस प्रमाण पत्र के दिन और शुल्क हमें किसी मौजूदा सरकारी पेज पर नहीं मिले; आवेदन के समय Saral पर दिखते हैं।",
        "<strong>अपील:</strong> समय पर सेवा न मिले या बिना ठोस कारण खारिज हो तो <strong>प्रथम शिकायत निवारण प्राधिकारी</strong>, फिर <strong>द्वितीय शिकायत निवारण प्राधिकारी</strong> के पास अपील होती है। <strong>हरियाणा सेवा का अधिकार आयोग</strong> अधिकारियों पर जुर्माना लगा सकता है और आवेदक को मुआवज़ा दिला सकता है।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> Saral Haryana पर लॉगिन करके, या Saral की ट्रैकिंग सुविधा में आवेदन संख्या से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Saral खाते से, या उसी सरल केंद्र से।",
      ],
      html: '<p>DigiLocker से जुड़ी जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "वैधता और क्रीमी लेयर",
      list: [
        "<strong>जाति प्रमाण पत्र:</strong> परिवार पहचान प्राधिकरण के पेज के अनुसार आम तौर पर <strong>जीवन भर</strong> मान्य, जब तक विभाग की अधिसूचना में आपकी जाति हटाई या बदली न जाए।",
        "<strong>आय/संपत्ति (क्रीमी लेयर) वाली जानकारी वाला प्रमाण पत्र:</strong> केवल <strong>चालू वित्तीय वर्ष</strong> में, यानी जारी होने से <strong>31 मार्च</strong> तक मान्य। हर साल नई ज़रूरत पर नया बनवाएं।",
        "PPP में आय बदलने या दोबारा सत्यापन होने पर BC/OBC (नॉन-क्रीमी लेयर) की स्थिति बदल सकती है।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["PPP में जाति verified नहीं", "meraparivar.haryana.gov.in पर जाति सत्यापन का अनुरोध करें"],
          ["BC/OBC के लिए PPP में आय verified नहीं", "Family ID में आय की जानकारी सही करके सत्यापन कराएं"],
          ["PPP में जाति गलत दर्ज", "पहले Family ID में सुधार कराएं, फिर आवेदन करें"],
          ["केंद्र की भर्ती में राज्य वाला BC प्रमाण पत्र", "भर्ती विज्ञापन में मांगा गया केंद्र के प्रारूप वाला OBC प्रमाण पत्र बनवाएं"],
          ["पुराना आय वाला प्रमाण पत्र (31 मार्च के बाद)", "चालू वित्तीय वर्ष का नया प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "आवेदन की मदद के लिए नज़दीकी <strong>सरल केंद्र</strong> या अपने तहसील कार्यालय से संपर्क करें। Family ID की गलती के लिए परिवार पहचान पत्र के पोर्टल या केंद्र पर सुधार कराएं। सेवा में देरी की शिकायत सेवा का अधिकार अधिनियम के तहत अपील से होती है।",
    },
  ],
  official: [
    { href: "https://saralharyana.gov.in/", title: "Saral Haryana (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://meraparivar.haryana.gov.in/", title: "मेरा परिवार: Family ID में जाति/आय सत्यापन" },
    { href: "https://hppa.haryana.gov.in/Caste-Class-certificate.html", title: "परिवार पहचान प्राधिकरण: जाति/वर्ग प्रमाण पत्र" },
    { href: "https://haryanascbc.gov.in/", title: "अनुसूचित जाति एवं पिछड़ा वर्ग कल्याण विभाग, हरियाणा" },
  ],
  faq: [
    { q: "हरियाणा में जाति प्रमाण पत्र कैसे बनवाएं?", a: "पहले परिवार पहचान पत्र (PPP) में अपनी जाति सत्यापित कराएं (BC/OBC के लिए आय भी)। फिर Saral Haryana पोर्टल पर या किसी भी सरल केंद्र से आवेदन करें।" },
    { q: "PPP में जाति verified नहीं है तो क्या करें?", a: "meraparivar.haryana.gov.in पर जाति सत्यापन का अनुरोध करें। नामित अधिकारी जांच के बाद उसे verified करते हैं, उसके बाद प्रमाण पत्र का आवेदन करें।" },
    { q: "हरियाणा का जाति प्रमाण पत्र कब तक मान्य है?", a: "आम तौर पर जीवन भर, जब तक अधिसूचना में जाति हटाई या बदली न जाए। आय/क्रीमी लेयर वाली जानकारी वाला प्रमाण पत्र चालू वित्तीय वर्ष में 31 मार्च तक ही मान्य है।" },
    { q: "हरियाणा में कौन-कौन से जाति प्रमाण पत्र बनते हैं?", a: "अनुसूचित जाति, वंचित अनुसूचित जाति, पिछड़ा वर्ग (BC) और अन्य पिछड़ा वर्ग (OBC)।" },
    { q: "समय पर प्रमाण पत्र न मिले तो?", a: "हरियाणा सेवा का अधिकार अधिनियम, 2014 के तहत प्रथम और फिर द्वितीय शिकायत निवारण प्राधिकारी के पास अपील करें। सेवा का अधिकार आयोग जुर्माना और मुआवज़े का आदेश दे सकता है।" },
  ],
  related: [
    { href: "/states/haryana-income-certificate.html", emoji: "💰", title: "हरियाणा आय प्रमाण पत्र", text: "PPP से सत्यापित आय, Saral" },
    { href: "/states/haryana-domicile-certificate.html", emoji: "🏠", title: "हरियाणा निवास प्रमाण पत्र", text: "15 साल की शर्त" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://saralharyana.gov.in/", label: "📝 Saral Haryana पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
