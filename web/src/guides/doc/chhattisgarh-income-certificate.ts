import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - sewasetu.cgstate.gov.in (Sewa Setu, run by CHiPS; replaces the older
//   e-District CG portal) home page: "आय प्रमाण पत्र" service; citizen login;
//   "आवेदन की स्थिति"; शिकायत पटल; help e-mail sewasetu.helpline@cgchips.in.
// - Sewa Setu service page instractionPageNew.do?serviceId=6 (Revenue &
//   Disaster Management Department): registration with name, mobile, e-mail,
//   Aadhaar and address; form details (name, address, age, education,
//   employment, family income); SMS on approval; digitally signed certificate
//   downloadable; "जारी करने की तिथि से एक वर्ष तक मान्य", renewal needed;
//   fee Rs 30 at Sewa Setu Kendra and online; time limit 7 days; documents:
//   affidavit (mandatory), income proof (mandatory: certificate from
//   Patwari/Sarpanch/Parshad, employer's income certificate/Form 16, income
//   from land/house, other), application form, Form 16, income of other family
//   members.
// - Sewa Setu user manual 6.pdf (income certificate): steps (registration,
//   login with OTP, search service, Aadhaar e-authentication, form, upload,
//   fee, preview & submit, acknowledgement, status & download); service charge
//   Rs 30 at Lok Seva Kendra/CSC/kiosk, scanning of up to five documents free
//   (extra scanning may be charged by the operator); disposal within 7 days;
//   valid one year from issue; affidavit and at least one income proof
//   mandatory.
// - District NIC pages (bemetara.gov.in, korba.gov.in): apply at CSC or Lok
//   Seva Kendra; approval authority uploads the certificate with a digital
//   signature.
// Left out (not confirmable on an official page we could open): the issuing
// officer's designation, the appellate officer under the Lok Seva Guarantee
// Act.
export const chhattisgarhIncomeCertificate: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Chhattisgarh Income Certificate 2026: Apply Online",
  description: "Chhattisgarh (छत्तीसगढ़) आय प्रमाण पत्र 2026: सेवा सेतु पोर्टल (पहले e-District) या सेवा सेतु केंद्र से आवेदन। शुल्क ₹30, 7 दिन, 1 साल की वैधता, कागज़ और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "छत्तीसगढ़ आय प्रमाण पत्र 2026: सेवा सेतु पर आवेदन, ₹30 शुल्क, 7 दिन और 1 साल की वैधता",
  lead: "छत्तीसगढ़ में आय प्रमाण पत्र राजस्व एवं आपदा प्रबंधन विभाग की सेवा है और अब <strong>सेवा सेतु पोर्टल (sewasetu.cgstate.gov.in)</strong> पर बनता है। आवेदन ऑनलाइन या सेवा सेतु केंद्र / CSC से होता है; शुल्क <strong>₹30</strong> और समय सीमा <strong>7 दिन</strong> है। <strong>शपथ पत्र और आय का कम से कम एक प्रमाण अनिवार्य</strong> है। प्रमाण पत्र <strong>जारी होने से एक साल</strong> तक मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a>'],
    ["शुल्क", "₹30 (ऑनलाइन या सेवा सेतु केंद्र)"],
    ["समय सीमा", "7 दिन"],
    ["वैधता", "जारी होने से 1 साल"],
  ],
  notice: "<strong>पोर्टल बदला है:</strong> पहले यह सेवा e-District छत्तीसगढ़ पर थी; अब <strong>सेवा सेतु</strong> पर है (चिप्स, छत्तीसगढ़ शासन)। नज़दीकी लोक सेवा केंद्र अब \"सेवा सेतु केंद्र\" कहलाते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "सेवा सेतु के अनुसार सरकारी सुविधाओं, छात्रवृत्तियों और कल्याणकारी योजनाओं का लाभ लेने के लिए आय प्रमाण पत्र बहुत ज़रूरी दस्तावेज़ है। फॉर्म में आवेदक का नाम, पता, उम्र, पढ़ाई, रोज़गार की स्थिति और <strong>परिवार की आय</strong> की जानकारी भरनी होती है।",
      callout: { kind: "info", html: "OBC प्रमाण पत्र में भी आय का प्रमाण अलग से लगता है। जाति प्रमाण पत्र के लिए देखें: <a href=\"/states/chhattisgarh-caste-certificate.html\">छत्तीसगढ़ जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (सेवा सेतु की सूची)",
      table: {
        head: ["कागज़", "अनिवार्य?", "क्या लगा सकते हैं"],
        rows: [
          ["<strong>शपथ पत्र</strong>", "हां", "आय के बारे में शपथ पत्र"],
          ["<strong>आय का प्रमाण</strong>", "हां (कम से कम एक)", "पटवारी / सरपंच / पार्षद से प्रमाण पत्र, नियोक्ता का आय प्रमाण पत्र या फॉर्म 16, भूमि/घर से आय, अन्य"],
          ["परिवार के दूसरे सदस्यों की आय", "जहां लागू हो", "उनकी आय के कागज़"],
        ],
      },
      callout: { kind: "ok", html: "<strong>टिप:</strong> गांव में खेती-मज़दूरी करने वालों के लिए <strong>पटवारी या सरपंच का प्रमाण पत्र</strong> सबसे आसान आय प्रमाण है। शपथ पत्र का नमूना: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (उपयोग पुस्तिका के अनुसार)",
      steps: [
        '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a> पर <strong>नागरिक लॉग-इन</strong> में \"नया पंजीयन करने हेतु क्लिक करें\" से रजिस्टर करें (नाम, मोबाइल, ईमेल, आधार, पता)। पासवर्ड मोबाइल पर आता है।',
        "यूज़रनेम-पासवर्ड और OTP से लॉगिन करें, सेवा सूची में <strong>आय प्रमाण पत्र</strong> चुनें और \"आगे\" दबाएं।",
        "<strong>आधार ई-प्रमाणीकरण</strong> करें (आधार संख्या और आधार कार्ड के अनुसार अंग्रेज़ी में नाम), फिर फॉर्म भरकर \"सहेजें और पूर्वावलोकन\" दबाएं।",
        "शपथ पत्र और आय का प्रमाण अपलोड करें, \"अनुलग्नक सहेजें\" दबाएं।",
        "<strong>₹30</strong> शुल्क का भुगतान करें, घोषणा पर टिक करें और जमा करें।",
        "<strong>पावती</strong> का प्रिंट रखें; इसमें आवेदन संदर्भ क्रमांक होता है।",
      ],
    },
    {
      id: "offline",
      title: "सेवा सेतु केंद्र / CSC से",
      intro: "आवेदन <strong>सेवा सेतु केंद्र</strong> (कलेक्टोरेट/तहसील में) या <strong>CSC</strong> से भी होता है। उपयोग पुस्तिका के अनुसार केंद्र पर सेवा शुल्क ₹30 तय है और पांच कागज़ों तक स्कैनिंग मुफ्त है; इससे ज़्यादा कागज़ हों तो संचालक अलग स्कैनिंग शुल्क ले सकता है। रसीद ज़रूर लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, वैधता और नवीनीकरण",
      list: [
        "<strong>समय सीमा:</strong> आवेदन जमा होने के बाद <strong>7 दिन</strong> में निराकरण (पोर्टल और उपयोग पुस्तिका)।",
        "<strong>वैधता:</strong> प्रमाण पत्र <strong>जारी करने की तारीख से एक साल</strong> तक मान्य है। योजनाओं का लाभ लगातार लेने के लिए समय पर <strong>नवीनीकरण</strong> (नया आवेदन) ज़रूरी है।",
        "<strong>शुल्क:</strong> ₹30, ऑनलाइन और केंद्र दोनों पर।",
      ],
      callout: { kind: "warn", html: "7 दिन में प्रमाण पत्र न मिले तो सेवा सेतु पोर्टल के <strong>शिकायत पटल</strong> पर शिकायत करें या sewasetu.helpline@cgchips.in पर आवेदन संख्या के साथ ईमेल करें।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>आवेदन की स्थिति</strong> में आवेदन संदर्भ क्रमांक और कैप्चा डालकर \"स्थिति चेक करें\"।",
        "<strong>डाउनलोड:</strong> स्वीकृत होने पर SMS आता है; स्थिति वाली विंडो में <strong>देखें (View)</strong> से डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["शपथ पत्र नहीं लगाया", "यह अनिवार्य है"],
          ["आय का कोई प्रमाण नहीं", "पटवारी/सरपंच/पार्षद का प्रमाण पत्र या नियोक्ता का प्रमाण पत्र/फॉर्म 16 लगाएं"],
          ["आधार में नाम और फॉर्म का नाम अलग", "आधार ई-प्रमाणीकरण में नाम ठीक आधार कार्ड जैसा (अंग्रेज़ी में) लिखें"],
          ["पुराना प्रमाण पत्र साल भर पुराना हो गया", "नया आवेदन करें; वैधता एक साल है"],
        ],
      },
    },
  ],
  official: [
    { href: "https://sewasetu.cgstate.gov.in/", title: "सेवा सेतु छत्तीसगढ़ (आवेदन, स्टेटस, शिकायत)" },
    { href: "https://sewasetu.cgstate.gov.in/instractionPageNew.do?serviceId=6&lang=hi", title: "आय प्रमाण पत्र: सेवा विवरण और कागज़" },
    { href: "https://sewasetu.cgstate.gov.in/resources/edistrict/user-manual/new/6.pdf", title: "आय प्रमाण पत्र की उपयोग पुस्तिका (PDF)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sewasetu.cgstate.gov.in पर पंजीयन करें, आय प्रमाण पत्र सेवा चुनें, आधार ई-प्रमाणीकरण करें, फॉर्म भरें, शपथ पत्र और आय का प्रमाण अपलोड करें, ₹30 शुल्क देकर जमा करें और पावती रखें।" },
    { q: "छत्तीसगढ़ आय प्रमाण पत्र कितने दिन में बनता है?", a: "सेवा सेतु के अनुसार 7 दिन में।" },
    { q: "छत्तीसगढ़ आय प्रमाण पत्र की फीस कितनी है?", a: "₹30, ऑनलाइन और सेवा सेतु केंद्र दोनों पर। पांच कागज़ों तक स्कैनिंग मुफ्त है।" },
    { q: "छत्तीसगढ़ का आय प्रमाण पत्र कितने समय तक मान्य है?", a: "जारी होने की तारीख से एक साल। उसके बाद नया (नवीनीकरण) आवेदन करना होता है।" },
    { q: "खेती-मज़दूरी करने वाले आय का क्या प्रमाण दें?", a: "सेवा सेतु की सूची में पटवारी, सरपंच या पार्षद का प्रमाण पत्र और भूमि/घर से आय भी मान्य आय प्रमाण हैं। साथ में शपथ पत्र अनिवार्य है।" },
  ],
  related: [
    { href: "/states/chhattisgarh-caste-certificate.html", emoji: "📜", title: "छत्तीसगढ़ जाति प्रमाण पत्र", text: "SC/ST/OBC, स्थायी" },
    { href: "/states/chhattisgarh-domicile-certificate.html", emoji: "🏠", title: "छत्तीसगढ़ निवास प्रमाण पत्र", text: "मूल निवासी प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.cgstate.gov.in/", label: "📝 सेवा सेतु पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
