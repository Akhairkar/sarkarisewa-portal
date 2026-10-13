import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; saralharyana.gov.in, meraparivar.haryana.gov.in
// and hppa.haryana.gov.in do not open from our checker, so we used search
// extracts and news reports):
// - Tribune report "New guidelines for income certificates": state circular:
//   departments must not ask for income proof from residents whose income is
//   marked verified in the Parivar Pehchan (family) database; income
//   certificates issued over the counter via the Saral portal.
// - Haryana Vidhan Sabha unstarred question (cms.neva.gov.in): PPP
//   self-declared income verified using ITR data of the last 3 years, HRMS
//   (government employees), pensioner data and e-Kharid payments to farmers.
// - Drishti IAS summary (Jul 2022): families whose income is not yet verified
//   can apply through Saral and verification is done on priority (background).
// - UNI report (Sep 2026): Chief Secretary ordered time-bound verification of
//   PPP income/family data through Gram Sabhas.
// - hppa.haryana.gov.in (search extract): certificates carrying income/asset
//   information valid for the current financial year up to 31 March.
// - Haryana Right to Service Act, 2014 (district RTS pages, haryana-rtsc.gov.in):
//   designated officer, First/Second Grievance Redressal Authority, Commission.
// Left out (not confirmable on a current official page): fee (old page said
// Rs 0-30), time limit in days, issuing officer designation, helpline.
export const haryanaIncomeCertificate: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Haryana Income Certificate 2026: Apply Online",
  description: "Haryana (हरियाणा) आय प्रमाण पत्र 2026: परिवार पहचान पत्र (PPP) में सत्यापित आय के आधार पर Saral Haryana / सरल केंद्र से आवेदन, वैधता और अपील।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "हरियाणा आय प्रमाण पत्र 2026: परिवार पहचान पत्र की सत्यापित आय, Saral पर आवेदन और वैधता",
  lead: "हरियाणा में आय प्रमाण पत्र <strong>परिवार पहचान पत्र (PPP / Family ID)</strong> में दर्ज और <strong>सत्यापित आय</strong> से जुड़ा है। राज्य सरकार के निर्देश के अनुसार जिनकी आय PPP में verified है, उनसे अलग से आय का सबूत नहीं मांगा जाना चाहिए, और प्रमाण पत्र <strong>Saral Haryana</strong> पोर्टल से या <strong>सरल केंद्र</strong> के काउंटर पर मिलता है। आय/संपत्ति वाली जानकारी वाला प्रमाण पत्र चालू वित्तीय वर्ष में <strong>31 मार्च</strong> तक मान्य है।",
  facts: [
    ["पोर्टल", '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a>'],
    ["आधार", "PPP (Family ID) में सत्यापित आय"],
    ["कहां", "Saral पोर्टल / सरल केंद्र"],
    ["वैधता", "चालू वित्तीय वर्ष (31 मार्च तक)"],
  ],
  notice: "<strong>PPP में आय गलत है?</strong> प्रमाण पत्र में वही आय आएगी जो परिवार पहचान पत्र में सत्यापित है। आय गलत हो तो पहले <a href=\"https://meraparivar.haryana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">meraparivar.haryana.gov.in</a> या सरल केंद्र से Family ID में सुधार/सत्यापन कराएं।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। यह मांगा जाता है:",
      list: [
        "<strong>छात्रवृत्ति</strong> और फीस माफी",
        "आय पर आधारित <strong>सरकारी योजनाएं</strong>",
        "<strong>EWS</strong> के लिए आय और संपत्ति वाला अलग प्रमाण पत्र बनता है",
      ],
      callout: { kind: "info", html: "BC/OBC आरक्षण के लिए क्रीमी लेयर वाला <strong>जाति प्रमाण पत्र</strong> लगता है। देखें: <a href=\"/states/haryana-caste-certificate.html\">हरियाणा जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "ppp",
      title: "परिवार पहचान पत्र में आय कैसे सत्यापित होती है",
      list: [
        "परिवार PPP में अपनी सालाना आय <strong>स्व-घोषित</strong> करता है।",
        "विधानसभा में दिए सरकारी जवाब के अनुसार इस आय की जांच <strong>पिछले 3 साल के ITR</strong>, सरकारी कर्मचारियों के HRMS रिकॉर्ड, <strong>पेंशन डेटा</strong> और किसानों को <strong>e-Kharid</strong> से हुए भुगतान जैसे सरकारी रिकॉर्ड से होती है।",
        "जांच के बाद आय <strong>verified</strong> मानी जाती है। राज्य सरकार ने ग्राम सभाओं के ज़रिए PPP की आय और परिवार की जानकारी के समयबद्ध सत्यापन का भी आदेश दिया है।",
      ],
      callout: { kind: "warn", html: "PPP में आय कम या ज़्यादा लिखना ठीक नहीं: सरकारी रिकॉर्ड से मिलान होता है और गलत जानकारी पर योजनाओं का लाभ रुक सकता है।" },
    },
    {
      id: "online",
      title: "Saral Haryana पर आवेदन",
      steps: [
        '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a> खोलें और अपने खाते से लॉगिन करें (पहली बार हैं तो रजिस्टर करें)।',
        "सेवाओं में <strong>आय प्रमाण पत्र</strong> चुनें।",
        "अपना <strong>परिवार पहचान नंबर</strong> डालें; सत्यापित आय और परिवार की जानकारी PPP से आती है।",
        "मांगे गए कागज़ (अगर कोई) अपलोड करें, शुल्क (अगर दिखे) भरें और आवेदन संख्या नोट करें।",
        "मंज़ूरी के बाद प्रमाण पत्र Saral खाते से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "<strong>सरल केंद्र से:</strong> Family ID, आधार और रजिस्टर्ड मोबाइल लेकर किसी भी सरल केंद्र पर जाएं; आय verified हो तो काउंटर से प्रमाण पत्र मिल सकता है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/haryana.html\">हरियाणा CSC लोकेटर</a>।" },
    },
    {
      id: "kagaz",
      title: "कागज़: क्या साथ रखें",
      list: [
        "<strong>परिवार पहचान नंबर (Family ID)</strong> और आधार",
        "PPP से जुड़ा <strong>मोबाइल नंबर</strong> (OTP के लिए)",
        "अगर आय अभी verified नहीं है: आय का सबूत, जैसे सैलरी स्लिप, ITR, पेंशन पर्ची या खेती की आय के कागज़",
      ],
      html: '<p>आय की स्व-घोषणा के बारे में: <a href="/affidavit/income.html">आय का एफिडेविट / स्व-घोषणा</a>।</p>',
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील (सेवा का अधिकार अधिनियम)",
      list: [
        "<strong>कानून:</strong> Saral की सेवाएं <strong>हरियाणा सेवा का अधिकार अधिनियम, 2014</strong> के तहत आती हैं; नामित अधिकारी को तय समय में सेवा देनी होती है या लिखित कारण से खारिज करना होता है।",
        "<strong>समय और फीस:</strong> दिन और शुल्क हमें किसी मौजूदा सरकारी पेज पर नहीं मिले; आवेदन के समय Saral पर दिखते हैं।",
        "<strong>अपील:</strong> प्रथम शिकायत निवारण प्राधिकारी, फिर द्वितीय शिकायत निवारण प्राधिकारी। <strong>हरियाणा सेवा का अधिकार आयोग</strong> जुर्माना और मुआवज़े का आदेश दे सकता है।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> Saral Haryana पर लॉगिन करके, या Saral की ट्रैकिंग सुविधा में आवेदन संख्या से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Saral खाते से या उसी सरल केंद्र से।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: हर साल नया कब बनवाएं",
      intro: "परिवार पहचान प्राधिकरण के पेज के अनुसार आय या संपत्ति की जानकारी वाले प्रमाण पत्र <strong>चालू वित्तीय वर्ष</strong> में, यानी जारी होने से <strong>31 मार्च</strong> तक ही मान्य हैं। 1 अप्रैल के बाद छात्रवृत्ति या योजना के लिए नया प्रमाण पत्र बनवाएं। उससे पहले PPP में आय अपडेट और verified हो, यह देख लें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["PPP में आय verified नहीं", "Family ID में आय सत्यापन कराएं; ज़रूरत हो तो आय का सबूत दें"],
          ["PPP में आय गलत", "पहले Family ID में सुधार कराएं, फिर आवेदन करें"],
          ["आवेदक का नाम Family ID में नहीं", "पहले परिवार पहचान पत्र में सदस्य जुड़वाएं"],
          ["31 मार्च के बाद पुराना प्रमाण पत्र लगाया", "चालू वित्तीय वर्ष का नया प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "आवेदन की मदद के लिए नज़दीकी <strong>सरल केंद्र</strong> या तहसील कार्यालय से संपर्क करें। Family ID में आय या नाम की गलती परिवार पहचान पत्र के पोर्टल या केंद्र पर ठीक होती है। सेवा में देरी पर सेवा का अधिकार अधिनियम के तहत अपील करें।",
    },
  ],
  official: [
    { href: "https://saralharyana.gov.in/", title: "Saral Haryana (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://meraparivar.haryana.gov.in/", title: "मेरा परिवार: Family ID में आय सत्यापन/सुधार" },
    { href: "https://hppa.haryana.gov.in/Caste-Class-certificate.html", title: "परिवार पहचान प्राधिकरण: प्रमाण पत्र और वैधता" },
  ],
  faq: [
    { q: "हरियाणा में आय प्रमाण पत्र कैसे बनवाएं?", a: "पहले देखें कि परिवार पहचान पत्र (PPP) में आपकी आय verified है। फिर Saral Haryana पोर्टल पर या सरल केंद्र से आवेदन करें; Family ID डालने पर सत्यापित आय अपने-आप आ जाती है।" },
    { q: "क्या आय का सबूत देना पड़ेगा?", a: "राज्य सरकार के निर्देश के अनुसार जिनकी आय PPP में verified है, उनसे अलग से आय का सबूत नहीं मांगा जाना चाहिए। आय verified न हो तो सबूत देकर पहले सत्यापन कराना होगा।" },
    { q: "हरियाणा आय प्रमाण पत्र कब तक मान्य है?", a: "आय/संपत्ति की जानकारी वाले प्रमाण पत्र चालू वित्तीय वर्ष में 31 मार्च तक मान्य हैं।" },
    { q: "PPP में आय गलत दर्ज है तो क्या करें?", a: "meraparivar.haryana.gov.in या सरल केंद्र से Family ID में आय सुधार और सत्यापन कराएं, फिर प्रमाण पत्र के लिए आवेदन करें।" },
  ],
  related: [
    { href: "/states/haryana-caste-certificate.html", emoji: "📜", title: "हरियाणा जाति प्रमाण पत्र", text: "SC, BC, OBC, PPP सत्यापन" },
    { href: "/states/haryana-domicile-certificate.html", emoji: "🏠", title: "हरियाणा निवास प्रमाण पत्र", text: "15 साल की शर्त" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://saralharyana.gov.in/", label: "📝 Saral Haryana पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
