import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - edistrict.odisha.gov.in (e-District Odisha on ServicePlus) home page,
//   Revenue & Disaster Management Department services:
//   * Income Certificate: income of all members of the family living in a
//     common mess from all sources (salary/wage/remuneration from Government,
//     PSU or private service; movable property; trade, business or profession;
//     agriculture, etc.) during the financial year prior to the year of
//     application; ORTPSA service; 10 working days; "no Government Service
//     charge"; documents: copy of RoR, salary certificate, IT returns,
//     documents in support of other incomes, others. Portal statistics: avg
//     approval about 11 days.
//   * Income and Asset Certificate (EWS) for admission to specified
//     educational institutions under Government of Odisha: non SC/ST/SEBC
//     (state list), gross annual family income below Rs 8.00 lakh; ORTPSA, 10
//     working days, no Government Service charge.
//   * FAQ: apply online or through CSC; status, print via Output Certificate,
//     verification with reference number + token; toll free 1800-121-8242,
//     Sanjog 155335, ecertificate.rdm@odisha.gov.in.
// - Income-Certificate-sop.pdf on the portal: registration (e-mail + mobile
//   OTP), apply, attach annexures (any one mandatory), acknowledgement, SMS,
//   track and download.
// - Odisha Miscellaneous Certificates Rules, 2017 (Revenue & DM Dept
//   Resolution No. 10940 dated 31.03.2017, Odisha Gazette Extraordinary
//   No. 728 dated 17.04.2017; igrodisha.gov.in PDF): Tahasildar and Additional
//   Tahasildar competent for income certificate (Form III); application with
//   court fee stamp of Rs 3 (online fee may be realised electronically);
//   income from immovable property certified where property is situated;
//   salary income on employer's certificate; time limit 15 days; validity of
//   income certificate one year from issue; appeal to Sub-Divisional Officer
//   (then Collector, RDC) within 30 days; clerical error correction.
// Left out: nothing major; a portal fee for CSC service charge is not stated.
export const odishaIncomeCertificate: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Odisha Income Certificate 2026: Apply Online",
  description: "ओडिशा आय प्रमाण पत्र 2026: e-District Odisha पर ऑनलाइन आवेदन, ORTPS के 10 कार्य दिवस, कोई सरकारी शुल्क नहीं, 1 साल की वैधता, कागज़, स्टेटस और अपील।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "ओडिशा आय प्रमाण पत्र 2026: e-District पर आवेदन, तहसीलदार, 10 दिन की समय सीमा और 1 साल की वैधता",
  lead: "ओडिशा में आय प्रमाण पत्र <strong>तहसीलदार / अतिरिक्त तहसीलदार</strong> जारी करते हैं (ओडिशा विविध प्रमाण पत्र नियम, 2017)। आवेदन <strong>e-District Odisha (edistrict.odisha.gov.in)</strong> पर ऑनलाइन या CSC से होता है। पोर्टल के अनुसार यह ORTPS सेवा <strong>10 कार्य दिवस</strong> में मिलती है और <strong>कोई सरकारी सेवा शुल्क नहीं</strong> है। प्रमाण पत्र <strong>जारी होने से एक साल</strong> तक मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार / अतिरिक्त तहसीलदार"],
    ["समय सीमा", "10 कार्य दिवस (ORTPS)"],
    ["वैधता", "जारी होने से 1 साल"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र और EWS (Income and Asset) में फर्क",
      table: {
        head: ["सेवा (e-District पर)", "कब चाहिए"],
        rows: [
          ["<strong>Issuance of Income Certificate</strong>", "छात्रवृत्ति, योजना, फीस माफी, जहां आय का प्रमाण मांगा गया हो"],
          ["<strong>Issuance of Income and Asset Certificate</strong>", "EWS: राज्य के तय शिक्षण संस्थानों में दाखिले के लिए उन लोगों को जो SC, ST या SEBC (राज्य सूची) में नहीं हैं और परिवार की कुल सालाना आय <strong>8 लाख रुपये से कम</strong> है"],
        ],
      },
      callout: { kind: "info", html: "SEBC/OBC आरक्षण के लिए जाति प्रमाण पत्र अलग से बनता है: <a href=\"/states/odisha-caste-certificate.html\">ओडिशा जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "aay",
      title: "आय कैसे गिनी जाती है",
      list: [
        "<strong>पूरा परिवार:</strong> पोर्टल के अनुसार साथ रहने और एक चूल्हे पर खाने वाले (common mess) परिवार के <strong>सभी सदस्यों की आय</strong> जोड़ी जाती है।",
        "<strong>सभी स्रोत:</strong> सरकारी/PSU/निजी नौकरी का वेतन या मज़दूरी, चल संपत्ति से आय, व्यापार/पेशा, खेती आदि।",
        "<strong>कौन सा साल:</strong> आवेदन वाले साल से <strong>पिछले वित्त वर्ष</strong> की आय।",
        "<strong>नियम 2017:</strong> नौकरी वालों का आय प्रमाण पत्र <strong>नियोक्ता के प्रमाण पत्र</strong> पर बनता है; व्यापार/पेशे की आय आयकर रिटर्न या दूसरे कागज़ों और जांच से तय होती है; ज़मीन-मकान की आय का प्रमाण पत्र उस तहसील से बनता है जहां संपत्ति है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची)",
      intro: "इनमें से <strong>कम से कम एक</strong> कागज़ अपलोड करना ज़रूरी है; एक से ज़्यादा भी लगा सकते हैं:",
      list: [
        "<strong>RoR (खतियान) की कॉपी</strong>: खेती/ज़मीन की आय के लिए।",
        "<strong>वेतन प्रमाण पत्र (Salary certificate)</strong>: नौकरी हो तो।",
        "<strong>आयकर रिटर्न (IT returns)</strong>।",
        "<strong>दूसरी आय के सबूत</strong> (Documents in support of other incomes)।",
        "इसके अलावा \"Others\" में कोई भी और काम का कागज़।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन साफ़ और छोटे रखें: <a href=\"/tools/document-compressor.html\">Document Compressor</a>। स्व-घोषणा कैसे लिखें: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (पोर्टल की SOP के अनुसार)",
      steps: [
        '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a> खोलें। <strong>Services</strong> → <strong>Register Yourself</strong> से एक बार रजिस्टर करें (ईमेल और मोबाइल OTP)।',
        "<strong>Income Certificate</strong> पर क्लिक करें और ईमेल/मोबाइल से लॉगिन करें; आवेदन फॉर्म खुलेगा।",
        "फॉर्म भरें, जांचें (ज़रूरत हो तो Edit करें) और Annexure में कागज़ अपलोड करें।",
        "जमा करें। <strong>पावती</strong> आपके इनबॉक्स में मिलती है; डाउनलोड/प्रिंट कर लें। आवेदन संदर्भ संख्या SMS से भी आती है।",
        "प्रमाण पत्र जारी या खारिज होने पर SMS आता है। <strong>Track Application Status</strong> से प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "CSC या तहसील से",
      intro: "पोर्टल के अनुसार किसी भी <strong>कॉमन सर्विस सेंटर (CSC)</strong> से आवेदन हो सकता है। विविध प्रमाण पत्र नियम, 2017 के अनुसार तहसील में सीधे आवेदन देने पर फॉर्म-3 पर <strong>3 रुपये का कोर्ट फीस स्टांप</strong> लगता है (या सरकार जो राशि तय करे)। CSC अपना सेवा शुल्क मांगे तो पहले पूछ लें और रसीद लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क, वैधता और अपील",
      table: {
        head: ["बात", "क्या नियम है", "स्रोत"],
        rows: [
          ["समय सीमा", "<strong>10 कार्य दिवस</strong> (ORTPS)", "e-District पोर्टल"],
          ["सरकारी शुल्क", "ऑनलाइन: कोई सरकारी सेवा शुल्क नहीं; तहसील में कागज़ी आवेदन: 3 रुपये कोर्ट फीस स्टांप", "पोर्टल / नियम 2017"],
          ["वैधता", "<strong>जारी होने की तारीख से एक साल</strong>", "नियम 2017, नियम 6(5)"],
          ["अपील", "उप-जिलाधिकारी (SDO/Sub-Collector) के पास, आदेश से <strong>30 दिन के भीतर</strong>", "नियम 2017, नियम 9"],
        ],
      },
      html: "<p>नियम 2017 में आय प्रमाण पत्र की समय सीमा 15 दिन लिखी है, लेकिन e-District पर ORTPS के तहत अब 10 कार्य दिवस दर्ज हैं। पोर्टल के आंकड़ों में औसतन करीब 11 दिन लगे हैं। प्रमाण पत्र में साफ लिखाई की गलती हो तो तहसीलदार उसे सुधार कर नया प्रमाण पत्र दे सकते हैं (नियम 7)।</p>",
      callout: { kind: "warn", html: "आवेदन खारिज हो तो तहसीलदार के आदेश में लिखा कारण पढ़ें और <strong>30 दिन के भीतर</strong> उप-जिलाधिकारी के पास अपील करें। ई-सर्टिफिकेट से जुड़ी शिकायत: टोल फ्री <strong>1800-121-8242</strong>, संजोग हेल्पलाइन <strong>155335</strong>।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Check Your Application Status</strong>, या लॉगिन करके View Status of Application → Track Application Status।",
        "<strong>प्रिंट:</strong> लॉगिन → Track Application Status → <strong>Delivered</strong> → Application Form Details में <strong>Output Certificate</strong>।",
        "<strong>सत्यापन:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा <strong>Token</strong> डालें।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["कोई कागज़ अपलोड नहीं किया", "RoR, वेतन प्रमाण पत्र, ITR या दूसरी आय का सबूत, कम से कम एक लगाएं"],
          ["परिवार के सभी सदस्यों की आय नहीं लिखी", "साथ रहने वाले सभी सदस्यों की सभी स्रोतों की आय लिखें"],
          ["नौकरी है पर नियोक्ता का प्रमाण पत्र नहीं", "नियम 2017 के अनुसार वेतन की आय नियोक्ता के प्रमाण पत्र पर मानी जाती है"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवाया", "EWS के लिए \"Income and Asset Certificate\" वाली अलग सेवा चुनें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.odisha.gov.in/", title: "e-District Odisha (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/Income-Certificate-sop.pdf", title: "आय प्रमाण पत्र की SOP (PDF)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/income_asset_certificate_sop.pdf", title: "Income and Asset (EWS) प्रमाण पत्र की SOP (PDF)" },
    { href: "https://www.igrodisha.gov.in/pdf/OMC_Rules_2017.pdf", title: "ओडिशा विविध प्रमाण पत्र नियम, 2017 (PDF): वैधता, अपील, फॉर्म" },
  ],
  faq: [
    { q: "ओडिशा में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.odisha.gov.in पर एक बार रजिस्टर करें, Income Certificate चुनें, फॉर्म भरें, RoR/वेतन प्रमाण पत्र/ITR जैसा कम से कम एक कागज़ अपलोड करें और जमा करके पावती रखें।" },
    { q: "ओडिशा आय प्रमाण पत्र कितने दिन में बनता है?", a: "e-District के अनुसार ORTPS के तहत 10 कार्य दिवस। पोर्टल के आंकड़ों में औसत करीब 11 दिन रहा है।" },
    { q: "ओडिशा का आय प्रमाण पत्र कितने समय तक मान्य है?", a: "ओडिशा विविध प्रमाण पत्र नियम, 2017 के नियम 6(5) के अनुसार जारी होने की तारीख से एक साल।" },
    { q: "क्या ओडिशा में आय प्रमाण पत्र की फीस है?", a: "पोर्टल के अनुसार ऑनलाइन सेवा का कोई सरकारी शुल्क नहीं है। तहसील में कागज़ी आवेदन पर नियम 2017 के अनुसार 3 रुपये का कोर्ट फीस स्टांप लगता है। CSC अपना सेवा शुल्क ले सकता है।" },
    { q: "आवेदन खारिज हो जाए तो क्या करें?", a: "नियम 2017 के नियम 9 के अनुसार तहसीलदार के आदेश के खिलाफ 30 दिन के भीतर उप-जिलाधिकारी (SDO) के पास अपील कर सकते हैं।" },
    { q: "EWS के लिए कौन सा प्रमाण पत्र चाहिए?", a: "e-District पर \"Income and Asset Certificate\" अलग सेवा है। पोर्टल के अनुसार यह राज्य के तय शिक्षण संस्थानों में दाखिले के लिए उन लोगों को मिलता है जो SC/ST/SEBC में नहीं हैं और जिनके परिवार की कुल सालाना आय 8 लाख रुपये से कम है।" },
  ],
  related: [
    { href: "/states/odisha-caste-certificate.html", emoji: "📜", title: "ओडिशा जाति प्रमाण पत्र", text: "SC/ST/SEBC/OBC, 15 कार्य दिवस" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "रेज़िडेंट सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.odisha.gov.in/", label: "📝 e-District पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
