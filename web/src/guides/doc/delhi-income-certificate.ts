import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; revenue.delhi.gov.in and edistrict.delhi.gov.in
// do not open from our checker, so we used search extracts of those pages and
// district pages):
// - revenue.delhi.gov.in "Income Certificate" (search extract): documents:
//   completed application form, identity proof (Aadhaar; or PAN, passport,
//   driving licence, voter card if no Aadhaar), self-declaration in the
//   prescribed format, residence proof, salary slips or other family income
//   evidence; attestation note; no fee; certificates issued in 14 days;
//   approach the SDM of your area / Deputy Commissioner office (10 AM-1 PM on
//   working days) or apply online.
// - dmnorthwest.delhi.gov.in income certificate page (search extract):
//   eligibility: citizen of India and permanent resident of NCT of Delhi;
//   passport photo; BPL/NFS ration card where applicable.
// - Older Revenue FAQ (search extract): local enquiry through bailiff / other
//   staff to verify particulars (used only for the "enquiry" note).
// - e-District Delhi certificate template (search extract): certificate carries
//   a "valid up to" date.
// - dmeast.delhi.gov.in income certificate page: apply on e-District, SDM
//   court, East Delhi.
// Left out (not confirmable on a current official page): the validity period
// in months/years, doorstep-delivery fee, appeal officer names. Attestation
// rules differ between Revenue pages (gazetted officer vs self-attested), so
// the page tells readers to check the form.
export const delhiIncomeCertificate: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Delhi (NCT) Income Certificate 2026: Apply Online",
  description: "Delhi (दिल्ली) आय प्रमाण पत्र 2026: e-District Delhi पर ऑनलाइन आवेदन, कोई फीस नहीं, 14 दिन की समय सीमा, ज़रूरी कागज़ और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "दिल्ली आय प्रमाण पत्र 2026: e-District Delhi पर आवेदन, कागज़, 14 दिन और स्टेटस",
  lead: "दिल्ली में आय प्रमाण पत्र राजस्व विभाग देता है। आवेदन <strong>e-District Delhi</strong> (edistrict.delhi.gov.in) पर ऑनलाइन या अपने इलाके के <strong>SDM कार्यालय</strong> से होता है। राजस्व विभाग के अनुसार <strong>कोई फीस नहीं</strong> है और प्रमाण पत्र <strong>14 दिन</strong> में जारी होता है। आवेदक भारत का नागरिक और दिल्ली का स्थायी निवासी होना चाहिए।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a>'],
    ["जारी करते हैं", "SDM कार्यालय (राजस्व विभाग)"],
    ["समय सीमा", "14 दिन"],
    ["फीस", "नहीं (राजस्व विभाग)"],
  ],
  notice: "<strong>सच्ची आय लिखें:</strong> आवेदन में बताई गई आय की स्थानीय जांच हो सकती है। गलत स्व-घोषणा पर प्रमाण पत्र रद्द हो सकता है और कानूनी कार्रवाई भी हो सकती है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। यह मांगा जाता है:",
      list: [
        "<strong>छात्रवृत्ति</strong>, फीस माफी और स्कूल-कॉलेज के दाखिले में",
        "आय पर आधारित <strong>सरकारी योजनाओं</strong> में",
        "<strong>EWS</strong> के लिए \"आय और संपत्ति प्रमाण पत्र\" अलग होता है; साधारण आय प्रमाण पत्र उसकी जगह नहीं चलता",
      ],
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि नॉन-क्रीमी लेयर वाला <strong>OBC प्रमाण पत्र</strong> लगता है। देखें: <a href=\"/states/delhi-caste-certificate.html\">दिल्ली जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (राजस्व विभाग)",
      list: [
        "<strong>भरा हुआ आवेदन फॉर्म</strong>",
        "<strong>पहचान का प्रमाण:</strong> आधार; आधार न हो तो PAN, पासपोर्ट, ड्राइविंग लाइसेंस या वोटर कार्ड",
        "<strong>स्व-घोषणा</strong> तय प्रारूप में (परिवार की आय)",
        "<strong>दिल्ली में निवास का प्रमाण</strong>",
        "<strong>आय का प्रमाण:</strong> सैलरी स्लिप या परिवार की आय का कोई दूसरा सबूत",
        "<strong>पासपोर्ट साइज़ फोटो</strong>; जहां लागू हो, BPL/NFS राशन कार्ड",
      ],
      callout: { kind: "warn", html: "<strong>सत्यापन (attestation):</strong> राजस्व विभाग के अलग-अलग पेजों में नियम अलग लिखे हैं: कहीं राजपत्रित अधिकारी से सत्यापन, कहीं स्व-सत्यापन। आवेदन फॉर्म में जो लिखा हो वही मानें। आय की स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "e-District Delhi पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a> खोलें और आधार या e-District रजिस्ट्रेशन से लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Income Certificate</strong> चुनें।",
        "परिवार की आय की जानकारी भरें, कागज़ और फोटो अपलोड करें।",
        "सबमिट करके <strong>पावती (Acknowledgement) नंबर</strong> नोट करें।",
        "मंज़ूरी के बाद e-District Delhi से प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "SDM कार्यालय या CSC से",
      intro: "राजस्व विभाग के अनुसार अपने इलाके के <strong>SDM कार्यालय</strong> या जिला उपायुक्त कार्यालय में किसी भी कार्य दिवस पर <strong>सुबह 10 से दोपहर 1 बजे</strong> तक आवेदन कर सकते हैं। नागरिक सेवा केंद्र (CSC) से भी ऑनलाइन आवेदन हो सकता है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/delhi.html\">दिल्ली CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और शिकायत",
      list: [
        "<strong>समय:</strong> राजस्व विभाग के पेज के अनुसार <strong>14 दिन</strong>।",
        "<strong>फीस:</strong> कोई फीस नहीं। CSC अपना सेवा शुल्क ले सकता है; पहले पूछें।",
        "<strong>जांच:</strong> आवेदन में दी जानकारी की स्थानीय जांच राजस्व कर्मचारी कर सकते हैं।",
        "<strong>देरी हो तो:</strong> पावती नंबर के साथ अपने SDM कार्यालय, फिर जिला उपायुक्त (DM) कार्यालय से संपर्क करें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> e-District Delhi पर पावती नंबर से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद e-District Delhi से; पोर्टल पर हिंदी प्रारूप में प्रमाण पत्र निकालने का विकल्प भी है।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "e-District Delhi के प्रमाण पत्र में <strong>\"valid up to\" (कब तक मान्य)</strong> की तारीख लिखी होती है; वही तारीख देखें। उसके बाद, या जब योजना/छात्रवृत्ति नए वित्तीय वर्ष का प्रमाण पत्र मांगे, नया आवेदन करें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["दिल्ली में निवास का प्रमाण नहीं", "राजस्व विभाग की सूची का कोई पते का प्रमाण लगाएं"],
          ["आय का कोई सबूत नहीं", "सैलरी स्लिप या परिवार की आय का दूसरा सबूत लगाएं"],
          ["स्व-घोषणा तय प्रारूप में नहीं", "पोर्टल/कार्यालय से मिला प्रारूप भरें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र", "EWS वाला अलग प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "आवेदन से जुड़ी मदद के लिए अपने इलाके के SDM कार्यालय या जिला उपायुक्त (DM) कार्यालय से संपर्क करें। राजस्व विभाग की वेबसाइट पर फॉर्म और सेवा की जानकारी दी गई है।",
    },
  ],
  official: [
    { href: "https://edistrict.delhi.gov.in/", title: "e-District Delhi (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://revenue.delhi.gov.in/revenue/income-certificate", title: "राजस्व विभाग: आय प्रमाण पत्र" },
    { href: "https://revenue.delhi.gov.in/revenue/forms-downloads", title: "राजस्व विभाग: फॉर्म डाउनलोड" },
  ],
  faq: [
    { q: "दिल्ली में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.delhi.gov.in पर लॉगिन करें, Income Certificate सेवा चुनें, आय की जानकारी भरें, कागज़ अपलोड करें और पावती नंबर नोट करें। SDM कार्यालय या CSC से भी आवेदन होता है।" },
    { q: "दिल्ली आय प्रमाण पत्र की फीस कितनी है?", a: "राजस्व विभाग के अनुसार कोई फीस नहीं। CSC अपना सेवा शुल्क ले सकता है।" },
    { q: "दिल्ली आय प्रमाण पत्र कितने दिन में बनता है?", a: "राजस्व विभाग के पेज के अनुसार 14 दिन में।" },
    { q: "दिल्ली आय प्रमाण पत्र कब तक मान्य है?", a: "प्रमाण पत्र पर \"valid up to\" की तारीख लिखी होती है। उसके बाद, या योजना नए साल का प्रमाण पत्र मांगे तो नया बनवाएं।" },
    { q: "आय प्रमाण पत्र कौन बनवा सकता है?", a: "जो भारत का नागरिक हो और दिल्ली (NCT) के उस इलाके का स्थायी निवासी हो।" },
  ],
  related: [
    { href: "/states/delhi-caste-certificate.html", emoji: "📜", title: "दिल्ली जाति प्रमाण पत्र", text: "SC/ST/OBC, 1951/1993 की शर्त" },
    { href: "/states/delhi-domicile-certificate.html", emoji: "🏠", title: "दिल्ली निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.delhi.gov.in/", label: "📝 e-District Delhi पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
