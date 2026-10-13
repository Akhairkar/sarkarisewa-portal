import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - edistrict.kerala.gov.in home page: services through Akshaya / Common
//   Service Centres and the online portal; Aadhaar-linked user creation;
//   "Track Application", "Certificate verification"; contact
//   edistrict.ksitm@kerala.gov.in, 0471 2525444 (KSITM).
// - edistrict.kerala.gov.in FAQ (generalService.htm?event=faq): income
//   certificate valid 1 year, issued in 6 working days; supporting documents
//   (affidavit, any relevant document certifying income, basic tax receipt,
//   Form 16, IT return, land tax receipt, ration card, salary certificate, tax
//   receipt from local authority); ration card verified from PDS database;
//   one-time registration; upload limit 100 KB per page, 10 pages; failed
//   payment refunded in 7-10 working days.
// - Search extract of clr.kerala.gov.in/eng/index.php/services/certificates
//   (Land Revenue Department): income certificate applied through e-District or
//   in the prescribed form; Village Officer issues it after scrutinising the
//   evidence and local enquiry; income of the last one year from the date of
//   application is considered; copies of ration card, land deeds, salary
//   certificate, proof of other income.
// - Kerala GO (2025-26 admission prospectus, document.kerala.gov.in): income
//   certificate "obtained from the Village Officer" uploaded for fee
//   concessions (shows the issuing office).
// Left out (not confirmable on an official page we could open): the fee
// amount, the appeal officer, income limits of particular schemes.
export const keralaIncomeCertificate: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Kerala Income Certificate 2026: Apply Online",
  description: "Kerala (केरल) आय प्रमाण पत्र 2026: e-District Kerala पोर्टल या Akshaya केंद्र से आवेदन। विलेज ऑफिसर, 6 कार्य दिवस, 1 साल वैधता, आवश्यक दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "केरल आय प्रमाण पत्र 2026: e-District पर आवेदन, कागज़, 6 दिन की समय सीमा और 1 साल वैधता",
  lead: "केरल में आय प्रमाण पत्र राजस्व विभाग का <strong>विलेज ऑफिसर</strong> देता है। आवेदन edistrict.kerala.gov.in पर या किसी Akshaya केंद्र से होता है; विलेज ऑफिसर कागज़ जांचकर और स्थानीय पूछताछ करके प्रमाण पत्र देते हैं। e-District के अनुसार यह <strong>6 कार्य दिवस</strong> में बनता है और <strong>1 साल</strong> तक मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a>'],
    ["जारी करते हैं", "विलेज ऑफिसर"],
    ["समय सीमा", "6 कार्य दिवस"],
    ["वैधता", "1 साल"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। छात्रवृत्ति, फीस छूट, दाखिले और आय पर आधारित योजनाओं में मांगा जाता है। राजस्व विभाग के अनुसार <strong>आवेदन की तारीख से पिछले 1 साल की आय</strong> गिनी जाती है।",
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि अलग <strong>Non-Creamy Layer Certificate</strong> लगता है (1 साल मान्य)। जानकारी के लिए <a href=\"/states/kerala-caste-certificate.html\">केरल जाति प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची)",
      intro: "इनमें से जो आपकी आय पर लागू हों:",
      list: [
        "<strong>शपथ-पत्र (Affidavit)</strong>",
        "<strong>राशन कार्ड</strong>: नंबर डालकर <strong>Verify</strong> करें; e-District इसे PDS डेटाबेस से जांचता है, कॉपी अपलोड नहीं करनी पड़ती",
        "<strong>नौकरी हो तो:</strong> वेतन प्रमाण पत्र (Salary Certificate), Form 16 या आयकर रिटर्न",
        "<strong>ज़मीन हो तो:</strong> भूमि कर रसीद (Land tax / Basic tax receipt) और ज़मीन के कागज़",
        "<strong>दुकान/घर हो तो:</strong> स्थानीय निकाय (पंचायत/नगरपालिका) की टैक्स रसीद",
        "आय दिखाने वाला <strong>कोई और कागज़</strong>",
      ],
      html: "<p><strong>अपलोड सीमा:</strong> हर पेज 100 KB तक, एक फाइल में 10 पेज तक। सूची में न दिया कागज़ <strong>One Time Registration → Enclosure</strong> से जोड़ें।</p>",
      callout: { kind: "warn", html: "आय कम या गलत न लिखें; विलेज ऑफिसर स्थानीय पूछताछ करते हैं। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a> पर <strong>Create Account</strong> से आधार से जुड़ा अकाउंट बनाएं। नाम, जन्मतिथि और आधार नंबर बिल्कुल आधार जैसे भरें; नाम में बिंदु (.) हो तो खाली जगह दें।',
        "लॉगिन करके <strong>One Time Registration</strong> पूरा करें और <strong>Register Number</strong> लें। जिसके नाम प्रमाण पत्र चाहिए (जैसे बच्चा), उसका अलग One Time Registration बनाएं।",
        "<strong>Apply for a Certificate</strong> में <strong>Income Certificate</strong> चुनें और Register Number चुनें।",
        "फॉर्म भरें, राशन कार्ड नंबर Verify करें, कागज़ अपलोड करें और ऑनलाइन फीस भरें (नेट बैंकिंग/डेबिट/क्रेडिट कार्ड; बैंक शुल्क अलग)।",
        "भुगतान के बाद पेज खाली हो जाए तो <strong>Transaction History</strong> में देखें; आवेदन नंबर न दिखे तो दोबारा आवेदन करें। कटा पैसा 7-10 कार्य दिवस में लौटता है।",
      ],
      callout: { kind: "ok", html: "स्कैन 100 KB प्रति पेज तक छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "offline",
      title: "Akshaya केंद्र या विलेज ऑफिस से",
      intro: "e-District की सेवाएं <strong>Akshaya / कॉमन सर्विस सेंटर</strong> से भी मिलती हैं। राजस्व विभाग के अनुसार तय फॉर्म में सीधे <strong>विलेज ऑफिस</strong> में भी आवेदन दिया जा सकता है। Akshaya केंद्र का सेवा शुल्क पहले पूछ लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application</strong> में आवेदन नंबर डालें; हर चरण पर SMS भी आता है।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें या Akshaya केंद्र से प्रिंट लें।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Certificate verification</strong> से प्रमाण पत्र की असलियत जांची जा सकती है।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: हर साल नया कब बनवाएं",
      intro: "e-District के FAQ के अनुसार आय प्रमाण पत्र <strong>1 साल</strong> तक मान्य है। छात्रवृत्ति या योजना की आखिरी तारीख से पहले देख लें कि आपका प्रमाण पत्र साल भर पुराना तो नहीं हो गया।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई कागज़ नहीं", "वेतन प्रमाण पत्र, ITR, भूमि कर रसीद या शपथ-पत्र लगाएं"],
          ["आधार सत्यापन फेल", "नाम, जन्मतिथि और इनिशियल की जगह बिल्कुल आधार जैसी रखें"],
          ["\"You have one pending application\"", "Clear दबाकर अधूरा आवेदन हटाएं"],
          ["OBC आरक्षण के लिए आय प्रमाण पत्र लगा दिया", "Non-Creamy Layer Certificate के लिए अलग आवेदन करें"],
        ],
      },
      html: "<p>मदद: e-District (KSITM) ईमेल edistrict.ksitm@kerala.gov.in, फोन 0471 2525444। देरी हो तो आवेदन नंबर लेकर अपने विलेज ऑफिस या तालुक कार्यालय से संपर्क करें।</p>",
    },
  ],
  official: [
    { href: "https://edistrict.kerala.gov.in/", title: "e-District Kerala (आवेदन, Track Application, Certificate verification)" },
    { href: "https://edistrict.kerala.gov.in/generalService.htm?event=faq", title: "e-District FAQ: कागज़, समय सीमा और वैधता" },
    { href: "https://clr.kerala.gov.in/eng/index.php/services/certificates", title: "भू-राजस्व विभाग: प्रमाण पत्र सेवाएं" },
  ],
  faq: [
    { q: "केरल में आय प्रमाण पत्र कौन देता है?", a: "विलेज ऑफिसर, कागज़ जांचने और स्थानीय पूछताछ के बाद।" },
    { q: "केरल आय प्रमाण पत्र कितने दिन में बनता है?", a: "e-District के अनुसार 6 कार्य दिवस में।" },
    { q: "केरल का आय प्रमाण पत्र कितने समय मान्य है?", a: "e-District के FAQ के अनुसार 1 साल।" },
    { q: "आय किस अवधि की गिनी जाती है?", a: "राजस्व विभाग के अनुसार आवेदन की तारीख से पिछले 1 साल की आय।" },
    { q: "क्या बच्चे के लिए माता-पिता अपने अकाउंट से आवेदन कर सकते हैं?", a: "हाँ। अपने अकाउंट में बच्चे का अलग One Time Registration बनाएं और Apply for a Certificate में उसका Register Number चुनें।" },
  ],
  related: [
    { href: "/states/kerala-caste-certificate.html", emoji: "📜", title: "केरल जाति प्रमाण पत्र", text: "Caste, Community और NCL" },
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.kerala.gov.in/", label: "📝 e-District Kerala पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
