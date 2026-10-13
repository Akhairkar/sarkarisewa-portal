import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; nadakacheri.karnataka.gov.in did not open from
// our checker, so we used district NIC pages and search extracts of the portal):
// - gadag.nic.in/en/service/caste-certificate/ (district administration):
//   caste and income certificates issued at Atalji Janasnehi Kendras under the
//   Karnataka SC, ST and OBC (Reservation of Appointment etc.) Act 1990; apply
//   at the hobli-level Nadakacheri/AJSK or online on the Nadakacheri website;
//   caste certificates have life-time validity, income certificates are valid
//   for five years, so no need to apply every year.
// - tumkur.nic.in/en/service/caste-certificate/: taluk-level functionary issues
//   caste certificates; OBC/MBC/SC/ST; details asked (parents' caste and
//   religion, sub-caste); documents (application, ration card / voter card,
//   residence proof, self-declaration, report on caste); online steps (Apply
//   Online, mobile number, New Request, choose service, upload, acknowledgement
//   by SMS, online payment); fee Rs 40.
// - kolar.nic.in/en/service/caste-and-income-certificate/: AJSK project in 777
//   hobli centres, Deputy Commissioner in charge at district level, Nadakacheri
//   cell in the Tahsildar's office.
// - Search extracts of nadakacheri.karnataka.gov.in (AJSK services table and
//   procedure page): Rs 40 fee for caste and income certificates; Sakala time
//   limit 21 working days; income certificates signed by the Deputy Tahsildar
//   and caste certificates by the Tahsildar.
// Left out (not confirmable): a central-format OBC certificate service name on
// Nadakacheri, a helpline number, appeal officer under Sakala.
export const karnatakaCasteCertificate: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Karnataka Caste Certificate 2026: Apply & Status",
  description: "कर्नाटक जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at Nadakacheri (Atalji Janasnehi Kendra). Eligibility, document list, ₹40 fee, Sakala time limit & status check guide.",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "कर्नाटक जाति प्रमाण पत्र 2026: नाडकचेरी पर आवेदन, कागज़, फीस, सकाल समय सीमा और वैधता",
  lead: "कर्नाटक में जाति प्रमाण पत्र राजस्व विभाग की <strong>अटलजी जनस्नेही केंद्र (नाडकचेरी)</strong> सेवा से बनता है। आवेदन होबली के नाडकचेरी केंद्र पर या nadakacheri.karnataka.gov.in पर ऑनलाइन होता है और प्रमाण पत्र पर तहसीलदार हस्ताक्षर करते हैं। ज़िला प्रशासन की जानकारी के अनुसार <strong>जाति प्रमाण पत्र जीवन भर मान्य</strong> है, इसलिए हर साल नया बनवाने की ज़रूरत नहीं।",
  facts: [
    ["पोर्टल", '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (नाडकचेरी / तालुक कार्यालय)"],
    ["फीस / समय", "₹40; सकाल में 21 कार्य दिवस"],
    ["वैधता", "जीवन भर"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> नाडकचेरी पर \"जाति प्रमाण पत्र\" और \"जाति व आय प्रमाण पत्र\" अलग सेवाएं हैं। पिछड़े वर्ग (OBC) के आरक्षण में अक्सर जाति के साथ आय भी देखी जाती है, इसलिए नौकरी या दाखिले की अधिसूचना में जो प्रारूप लिखा हो वही बनवाएं।",
  sections: [
    {
      id: "kya-hai",
      title: "कर्नाटक में जाति प्रमाण पत्र: क्या और किसके लिए",
      intro: "जाति प्रमाण पत्र इस बात का सबूत है कि आप अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या पिछड़े वर्ग (OBC) की किसी जाति से हैं। कर्नाटक में ये प्रमाण पत्र <strong>कर्नाटक SC, ST और OBC (नियुक्ति आदि में आरक्षण) अधिनियम 1990</strong> और उससे जुड़ी सरकारी अधिसूचनाओं के तहत दिए जाते हैं। इनकी ज़रूरत पड़ती है:",
      list: [
        "राज्य की नौकरी और भर्ती में <strong>आरक्षण और उम्र में छूट</strong>",
        "स्कूल-कॉलेज में <strong>दाखिला, फीस छूट और छात्रवृत्ति</strong>",
        "SC/ST/पिछड़े वर्ग की <strong>सरकारी योजनाएं</strong>",
      ],
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी के लिए:</strong> केंद्र सरकार की भर्ती (SSC, रेलवे, बैंक आदि) में OBC आरक्षण <strong>केंद्रीय OBC सूची</strong> और <strong>नॉन-क्रीमी लेयर</strong> वाले केंद्रीय प्रारूप के प्रमाण पत्र से मिलता है। राज्य का प्रमाण पत्र वहां हमेशा नहीं चलता। ऐसे प्रमाण पत्र के लिए नाडकचेरी या तालुक कार्यालय में पूछें और भर्ती विज्ञापन में दिया प्रारूप साथ ले जाएं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "तुमकुरु ज़िला प्रशासन की सूची के अनुसार:",
      list: [
        "<strong>आवेदन फॉर्म</strong> (नाडकचेरी पर या ऑनलाइन, कन्नड़ या अंग्रेज़ी में)",
        "<strong>राशन कार्ड</strong> या <strong>मतदाता पहचान पत्र</strong> की कॉपी, या मतदाता सूची में नाम (इनमें से एक)",
        "<strong>निवास का प्रमाण</strong>",
        "<strong>जाति/धर्म का कोई रिकॉर्ड</strong>: जैसे स्कूल रिकॉर्ड या परिवार के सदस्य (पिता आदि) का पुराना जाति प्रमाण पत्र",
        "<strong>स्व-घोषणा</strong> कि दी गई जानकारी सही है",
      ],
      html: "<p>फॉर्म में आवेदक का नाम, माता-पिता के नाम, जन्मतिथि और जन्मस्थान, <strong>पिता और माता की जाति व उपजाति</strong>, आवेदक और माता-पिता का धर्म, और यह कि आवेदक जैविक संतान है या गोद लिया गया, पूछा जाता है। विवाहित महिला के लिए <strong>शादी से पहले की जाति</strong> का रिकॉर्ड काम आता है।</p>",
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन छोटी PDF या JPG में रखें। फोटो/कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a> खोलें और <strong>Apply Online</strong> पर जाएं।',
        "अपना <strong>मोबाइल नंबर</strong> डालकर <strong>Proceed</strong> करें।",
        "<strong>New Request</strong> में <strong>Caste Certificate</strong> (या ज़रूरत हो तो Caste and Income Certificate) चुनें और भाषा (कन्नड़/अंग्रेज़ी) चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और <strong>Save</strong> करें। पावती (acknowledgement) बनती है और उसका नंबर SMS से आता है।",
        "ऑनलाइन फीस भरें (डेबिट/क्रेडिट कार्ड, नेट बैंकिंग)।",
        "पावती का आवेदन नंबर संभाल कर रखें; इसी से स्टेटस और डाउनलोड होता है।",
      ],
    },
    {
      id: "offline",
      title: "नाडकचेरी (अटलजी जनस्नेही केंद्र) से आवेदन",
      intro: "राज्य के <strong>777 होबली</strong> में नाडकचेरी केंद्र हैं, और तहसीलदार कार्यालय में भी नाडकचेरी सेल होता है। अपने होबली के केंद्र पर कागज़ लेकर जाएं; ऑपरेटर आवेदन ऑनलाइन दर्ज करके पावती देगा। जांच के बाद तहसीलदार प्रमाण पत्र मंज़ूर करते हैं। ज़िला स्तर पर इस व्यवस्था के प्रभारी उपायुक्त (Deputy Commissioner) हैं।",
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      table: {
        head: ["बात", "जानकारी", "स्रोत"],
        rows: [
          ["फीस", "₹40", "नाडकचेरी सेवा तालिका, तुमकुरु ज़िला पेज"],
          ["समय सीमा", "सकाल (Sakala) में 21 कार्य दिवस", "नाडकचेरी सेवा तालिका"],
          ["हस्ताक्षर", "जाति प्रमाण पत्र: तहसीलदार", "नाडकचेरी पोर्टल"],
          ["वैधता", "जीवन भर", "गदग ज़िला प्रशासन"],
        ],
      },
      callout: { kind: "warn", html: "कुछ पुराने ज़िला पेजों में 30 दिन का समय लिखा है। तय समय में प्रमाण पत्र न मिले तो पावती लेकर तहसीलदार कार्यालय में संपर्क करें। फीस और समय पोर्टल पर बदल सकते हैं, आवेदन के समय स्क्रीन पर दिखी राशि ही मान्य है।" },
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र डाउनलोड",
      list: [
        "nadakacheri.karnataka.gov.in पर आवेदन की स्थिति (status) वाले विकल्प में पावती का आवेदन नंबर डालें, या नाडकचेरी केंद्र पर पूछें।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें या नाडकचेरी केंद्र से प्रिंट लें।",
        "नाम, पिता का नाम, जाति और उपजाति की वर्तनी तुरंत जांचें; गलती हो तो उसी केंद्र पर सुधार के लिए आवेदन करें।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जाति का कोई पुराना रिकॉर्ड नहीं", "पिता/भाई का पुराना जाति प्रमाण पत्र, स्कूल रिकॉर्ड जिसमें जाति लिखी हो, या ज़मीन के रिकॉर्ड खोजें"],
          ["उपजाति (sub-caste) अलग-अलग लिखी", "सभी कागज़ों में एक जैसी वर्तनी रखें; सूची में दिया सही नाम चुनें"],
          ["गलत सेवा चुनी", "आरक्षण में आय भी चाहिए तो \"जाति व आय प्रमाण पत्र\" चुनें"],
          ["दूसरे होबली/तालुक में आवेदन", "जहां आप रहते हैं उसी होबली/तालुक में आवेदन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://nadakacheri.karnataka.gov.in/", title: "नाडकचेरी / अटलजी जनस्नेही केंद्र पोर्टल (आवेदन, स्टेटस)" },
    { href: "https://gadag.nic.in/en/service/caste-certificate/", title: "जाति प्रमाण पत्र सेवा (ज़िला गदग): वैधता" },
    { href: "https://tumkur.nic.in/en/service/caste-certificate/", title: "जाति प्रमाण पत्र सेवा (ज़िला तुमकुरु): कागज़ और स्टेप" },
  ],
  faq: [
    { q: "कर्नाटक में जाति प्रमाण पत्र कहां बनता है?", a: "होबली के नाडकचेरी (अटलजी जनस्नेही केंद्र) पर या nadakacheri.karnataka.gov.in पर ऑनलाइन। प्रमाण पत्र पर तहसीलदार हस्ताक्षर करते हैं।" },
    { q: "कर्नाटक जाति प्रमाण पत्र की फीस कितनी है?", a: "नाडकचेरी की सेवा तालिका और ज़िला पेज के अनुसार ₹40। आवेदन के समय पोर्टल पर दिखी राशि ही भरें।" },
    { q: "कितने दिन में बनता है?", a: "सकाल (Sakala) सेवा में इसकी समय सीमा 21 कार्य दिवस बताई गई है।" },
    { q: "क्या जाति प्रमाण पत्र हर साल बनवाना पड़ता है?", a: "नहीं। ज़िला प्रशासन (गदग) के अनुसार जाति प्रमाण पत्र जीवन भर मान्य है। आय प्रमाण पत्र की वैधता पांच साल बताई गई है।" },
    { q: "केंद्र की नौकरी के लिए कौन सा OBC प्रमाण पत्र चाहिए?", a: "केंद्र की भर्ती में केंद्रीय OBC सूची और नॉन-क्रीमी लेयर वाला केंद्रीय प्रारूप मांगा जाता है। भर्ती विज्ञापन में दिया प्रारूप लेकर नाडकचेरी या तालुक कार्यालय में आवेदन की जानकारी लें।" },
  ],
  related: [
    { href: "/states/karnataka-income-certificate.html", emoji: "💰", title: "कर्नाटक आय प्रमाण पत्र", text: "नाडकचेरी पर आवेदन, 5 साल वैधता" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://nadakacheri.karnataka.gov.in/", label: "📝 नाडकचेरी पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
