import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; the MeeSeva portal and mgov.telangana.gov.in did
// not open from our checker, so we used district pages and search extracts):
// - medak.telangana.gov.in/service/revenue-services/ and
//   narayanpet.telangana.gov.in/service/caste-certificate/ (district
//   administration): MeeSeva Revenue Department services include Income
//   Certificate, Agriculture Income Certificate, No Earning Certificate, EBC
//   Certificate, ISES services - Income Certificate and Income Fee
//   Reimbursement, Duplicate copy of certificate - Income, Prajavani.
// - rajannasircilla.telangana.gov.in/service/meeseva/: MeeSeva single entry
//   portal; income, EWS, creamy / non-creamy layer certificates; link
//   ts.meeseva.telangana.gov.in/meeseva/home.htm.
// - Search extract of mgov.telangana.gov.in/faqnew.html (Government of
//   Telangana FAQ): income certificates carry the Naib Tahsildar's digital
//   signature and are valid for one year from the date of issue; for income
//   above the limit, contact the Revenue department or call centre.
// - Search result: MeeSeva service page "Income Certificate General"
//   (IncomeCertificateDYMRO.aspx on ts.meeseva.telangana.gov.in).
// Left out (not confirmable on an official page we could open): fee, time
// limit in days, mandatory document list, helpline number.
export const telanganaIncomeCertificate: DocGuide = {
  state: { slug: "telangana", hi: "तेलंगाना" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Telangana Income Certificate 2026: Apply Online",
  description: "Telangana (तेलंगाना) आय प्रमाण पत्र 2026: MeeSeva Telangana केंद्र या पोर्टल से आवेदन। नायब तहसीलदार का डिजिटल हस्ताक्षर, 1 साल वैधता, कौन सी सेवा चुनें और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तेलंगाना आय प्रमाण पत्र 2026: MeeSeva पर आवेदन, कौन सी सेवा चुनें, 1 साल वैधता और स्टेटस",
  lead: "तेलंगाना में आय प्रमाण पत्र राजस्व विभाग की <strong>MeeSeva</strong> सेवा से बनता है; आवेदन MeeSeva केंद्र पर या MeeSeva पोर्टल से होता है। राज्य सरकार की जानकारी के अनुसार प्रमाण पत्र पर <strong>नायब तहसीलदार का डिजिटल हस्ताक्षर</strong> होता है और यह जारी होने से <strong>1 साल</strong> तक मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://ts.meeseva.telangana.gov.in/meeseva/home.htm" target="_blank" rel="noopener nofollow">ts.meeseva.telangana.gov.in</a>'],
    ["हस्ताक्षर", "नायब तहसीलदार (डिजिटल)"],
    ["आवेदन", "MeeSeva केंद्र / पोर्टल"],
    ["वैधता", "जारी होने से 1 साल"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "MeeSeva पर आय से जुड़ी सेवाएं: कौन सी चुनें",
      table: {
        head: ["सेवा (ज़िला प्रशासन की MeeSeva सूची)", "कब चाहिए"],
        rows: [
          ["<strong>Income Certificate</strong>", "योजनाएं, पेंशन, दाखिला: सामान्य आय प्रमाण पत्र"],
          ["<strong>ISES – Income Certificate / Income Fee Reimbursement</strong>", "छात्रवृत्ति और फीस रीइंबर्समेंट के लिए विद्यार्थियों वाली सेवा"],
          ["<strong>Agriculture Income Certificate</strong>", "सिर्फ खेती की आय का प्रमाण"],
          ["<strong>No Earning Certificate</strong>", "जब कोई कमाई न हो"],
          ["<strong>EWS Certificate</strong>", "आर्थिक रूप से कमजोर वर्ग का आरक्षण"],
          ["<strong>Duplicate Copy – Income</strong>", "पहले बने आय प्रमाण पत्र की कॉपी"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, अलग <strong>Non-Creamy Layer</strong> और <strong>OBC Certificate</strong> सेवाएं हैं। देखें: <a href=\"/states/telangana-caste-certificate.html\">तेलंगाना जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      intro: "MeeSeva की आधिकारिक कागज़ सूची हम खोल नहीं पाए। केंद्र पर सूची ज़रूर देखें; आम तौर पर ये काम आते हैं:",
      list: [
        "<strong>आधार कार्ड</strong> और <strong>राशन/खाद्य सुरक्षा कार्ड</strong>",
        "<strong>आय का प्रमाण</strong>: नौकरी हो तो सैलरी स्लिप, आयकर भरते हों तो ITR; खेती हो तो ज़मीन का रिकॉर्ड (पहानी/पासबुक)",
        "परिवार की आय की <strong>स्व-घोषणा</strong> और फोटो",
      ],
      callout: { kind: "warn", html: "आय कम या गलत न लिखें; राजस्व कर्मचारी जांच करते हैं। सरकारी FAQ के अनुसार तय सीमा से ज़्यादा आय हो तो सीधे राजस्व विभाग या कॉल सेंटर से संपर्क करना होता है। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        "पास के <strong>MeeSeva केंद्र</strong> पर कागज़ लेकर जाएं, या <a href=\"https://ts.meeseva.telangana.gov.in/meeseva/home.htm\" target=\"_blank\" rel=\"noopener nofollow\">MeeSeva पोर्टल</a> पर लॉगिन करें।",
        "राजस्व विभाग (Revenue) में सही सेवा चुनें: <strong>Income Certificate</strong>, या विद्यार्थी हों तो ISES वाली आय सेवा।",
        "फॉर्म भरें, कागज़ अपलोड करें और फीस भरें। रसीद लें; ट्रांज़ैक्शन नंबर SMS से भी आता है।",
        "विभाग की मंज़ूरी के बाद प्रमाण पत्र MeeSeva केंद्र या पोर्टल से मिलता है।",
      ],
      callout: { kind: "ok", html: "स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और शिकायत",
      list: [
        "<strong>स्टेटस:</strong> MeeSeva पोर्टल पर ट्रांज़ैक्शन/आवेदन नंबर से, या उसी केंद्र पर पूछें।",
        "<strong>कॉपी खो गई:</strong> \"Duplicate copy of certificate – Income\" सेवा से लें।",
        "<strong>शिकायत:</strong> राजस्व विभाग की MeeSeva सूची में <strong>Prajavani</strong> सेवा है; ज़्यादा देरी हो तो रसीद लेकर तहसीलदार कार्यालय जाएं।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
      callout: { kind: "warn", html: "फीस और समय सीमा हमें किसी आधिकारिक पेज पर पक्की नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। केंद्र पर रसीद में लिखी राशि ही दें।" },
    },
    {
      id: "validity",
      title: "वैधता: हर साल नया कब बनवाएं",
      intro: "तेलंगाना सरकार के FAQ के अनुसार आय प्रमाण पत्र <strong>जारी होने की तारीख से 1 साल</strong> तक मान्य है। छात्रवृत्ति या योजना की आखिरी तारीख से पहले देख लें कि प्रमाण पत्र साल भर पुराना तो नहीं हो गया।",
    },
  ],
  official: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", title: "MeeSeva Telangana पोर्टल" },
    { href: "https://medak.telangana.gov.in/service/revenue-services/", title: "राजस्व विभाग की MeeSeva सेवाएं (ज़िला मेडक)" },
    { href: "https://mgov.telangana.gov.in/faqnew.html", title: "तेलंगाना सरकार FAQ: आय प्रमाण पत्र की वैधता" },
  ],
  faq: [
    { q: "तेलंगाना में आय प्रमाण पत्र कहां बनता है?", a: "MeeSeva केंद्र पर या MeeSeva पोर्टल से, राजस्व विभाग की सेवा के रूप में।" },
    { q: "आय प्रमाण पत्र पर किसका हस्ताक्षर होता है?", a: "राज्य सरकार के FAQ के अनुसार नायब तहसीलदार का डिजिटल हस्ताक्षर।" },
    { q: "तेलंगाना का आय प्रमाण पत्र कितने समय मान्य है?", a: "जारी होने की तारीख से 1 साल।" },
    { q: "छात्रवृत्ति के लिए कौन सी सेवा चुनें?", a: "MeeSeva सूची में विद्यार्थियों के लिए ISES – Income Certificate और Income Fee Reimbursement सेवाएं हैं; कॉलेज/छात्रवृत्ति के निर्देश में जो लिखा हो वही चुनें।" },
    { q: "फीस और समय कितना लगता है?", a: "हमें आधिकारिक पेज पर पक्की संख्या नहीं मिली। MeeSeva केंद्र पर रसीद में लिखी फीस दें और वहीं अनुमानित समय पूछें।" },
  ],
  related: [
    { href: "/states/telangana-caste-certificate.html", emoji: "📜", title: "तेलंगाना जाति प्रमाण पत्र", text: "Community, Integrated, OBC" },
    { href: "/states/telangana-domicile-certificate.html", emoji: "🏠", title: "तेलंगाना निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", label: "📝 MeeSeva Telangana" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
