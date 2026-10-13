import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - jharsewa.jharkhand.gov.in (JharSewa / e-Nagrik Seva on ServicePlus) home
//   page: "Issue of Income Certificate" and "Issue of Income and Asset
//   Certificate for EWS" under certificate services; apply online, through a
//   kiosk/Pragya Kendra or in person; "Track Application Status Report";
//   "Verify your Certificate" (application reference number + token); State
//   Designated Agency JAP-IT phone 0651-2401581 / 2401040.
// - ServiceWiseRequirements.pdf ("Prerequisite for Applying"): "Issue of
//   Income Certificate" is a Department of Revenue, Land Reforms and
//   Registration service; documents: Income Related Affidavit (mandatory),
//   Salary Slip, Enclosure for Tatkal (Tatkal applications only); EWS income
//   and asset certificate is a separate Personnel Department service; modes:
//   online registration, CSC (Pragya Kendra), Jan Suvidha Kendra, approved
//   private kiosk.
// - ServicePlus national service list: "Issue of Income Certificate"
//   (Jharkhand) Statutory, 30 days; EWS income and asset certificate 30 days
//   (area outside ULB/RLB) / Not Defined (others).
// Left out (not confirmable on an official page we could open): issuing
// officer for income certificates (not named on the portal pages we read), a
// fee, validity period, appeal officers. A Prabhat Khabar archive report says
// income certificates are valid one year; not used as it is not official.
export const jharkhandIncomeCertificate: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Jharkhand Income Certificate 2026: Apply Online",
  description: "झारखंड आय प्रमाण पत्र 2026: JharSewa (ServicePlus) पर ऑनलाइन या प्रज्ञा केंद्र से आवेदन। आय का शपथ-पत्र, 30 दिन की समय सीमा, तत्काल विकल्प, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "झारखंड आय प्रमाण पत्र 2026: JharSewa पर आवेदन, शपथ-पत्र, समय सीमा और स्टेटस",
  lead: "झारखंड में आय प्रमाण पत्र राजस्व, निबंधन एवं भूमि सुधार विभाग की सेवा है। आवेदन <strong>JharSewa पोर्टल (jharsewa.jharkhand.gov.in)</strong> पर ऑनलाइन, या प्रज्ञा केंद्र / जन सुविधा केंद्र से होता है। आवेदन के साथ <strong>आय से जुड़ा शपथ-पत्र अनिवार्य</strong> है; नौकरी हो तो सैलरी स्लिप भी लगाएं। सेवा-सूची में समय सीमा 30 दिन है।",
  facts: [
    ["पोर्टल", '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a>'],
    ["विभाग", "राजस्व, निबंधन एवं भूमि सुधार"],
    ["समय सीमा", "30 दिन (सेवा-सूची)"],
    ["अनिवार्य कागज़", "आय का शपथ-पत्र"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र और EWS प्रमाण पत्र में फर्क",
      table: {
        head: ["सेवा (JharSewa पर नाम)", "कब चाहिए"],
        rows: [
          ["<strong>Issue of Income Certificate</strong>", "छात्रवृत्ति, योजना, फीस माफी, जहां \"आय प्रमाण पत्र\" मांगा गया हो"],
          ["<strong>Income and Asset Certificate for EWS</strong>", "सामान्य वर्ग के आर्थिक रूप से कमजोर (EWS) आरक्षण के लिए; यह कार्मिक विभाग की अलग सेवा है, केंद्र के प्रारूप के लिए SDO/DC वाली सेवा भी है"],
        ],
      },
      callout: { kind: "info", html: "BC/OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, <strong>नॉन-क्रीमी लेयर</strong> वाला जाति प्रमाण पत्र चाहिए। देखें: <a href=\"/states/jharkhand-caste-certificate.html\">झारखंड जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (JharSewa की सूची)",
      list: [
        "<strong>आय से जुड़ा शपथ-पत्र (Income Related Affidavit)</strong>: <strong>अनिवार्य</strong>। इसमें परिवार की सालाना आय सच-सच लिखें। शपथ-पत्र का प्रारूप अपने अंचल कार्यालय या प्रज्ञा केंद्र से ले लें।",
        "<strong>सैलरी स्लिप</strong>: अगर परिवार में कोई नौकरी करता है।",
        "<strong>तत्काल का संलग्नक</strong>: सिर्फ तत्काल आवेदन में।",
        "आवेदन फॉर्म में पहचान और पते की जानकारी भी भरनी होती है, इसलिए आधार/मतदाता पहचान पत्र पास रखें।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> शपथ-पत्र का नमूना और नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a> खोलें और <strong>Register Yourself</strong> से अकाउंट बनाएं (या लॉगिन करें)।',
        "सेवा सूची में <strong>Issue of Income Certificate</strong> चुनें।",
        "फॉर्म में परिवार की आय की जानकारी भरें और शपथ-पत्र (व सैलरी स्लिप, अगर हो) अपलोड करें।",
        "आवेदन जमा करें और <strong>पावती</strong> डाउनलोड करें; इसमें आवेदन संदर्भ संख्या होती है।",
        "स्वीकृत होने पर प्रमाण पत्र पोर्टल से निकालें।",
      ],
    },
    {
      id: "offline",
      title: "प्रज्ञा केंद्र / जन सुविधा केंद्र से",
      intro: "पोर्टल के अनुसार आवेदन <strong>प्रज्ञा केंद्र (CSC)</strong>, <strong>जन सुविधा केंद्र</strong> या सरकार से मंज़ूर निजी कियोस्क से भी हो सकता है, और फॉर्म लेकर संबंधित कार्यालय में खुद भी दिया जा सकता है। शपथ-पत्र और सैलरी स्लिप साथ ले जाएं, पावती लें। केंद्र का सेवा शुल्क पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और वैधता",
      list: [
        "<strong>समय सीमा:</strong> ServicePlus सेवा-सूची में झारखंड की \"Issue of Income Certificate\" सेवा <strong>30 दिन</strong> वाली \"Statutory\" सेवा दर्ज है। जल्दी चाहिए तो पोर्टल पर <strong>तत्काल</strong> विकल्प भी है।",
        "<strong>फीस:</strong> किसी सरकारी पेज पर हमें सरकारी शुल्क नहीं मिला। प्रज्ञा केंद्र अपना सेवा शुल्क लेते हैं; रसीद लें।",
        "<strong>वैधता:</strong> पोर्टल पर वैधता का नियम हमें नहीं मिला। जिस योजना/संस्था में लगाना है, उसकी शर्त देखें; ज़्यादातर चालू साल का प्रमाण पत्र मांगते हैं।",
      ],
      callout: { kind: "warn", html: "30 दिन में प्रमाण पत्र न मिले तो पावती लेकर अंचल कार्यालय से लिखित कारण मांगें और अनुमंडल पदाधिकारी (SDO) के यहां शिकायत करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application Status</strong> में आवेदन संदर्भ संख्या डालें, या लॉगिन करके View Status of Application देखें।",
        "<strong>सत्यापन:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा <strong>Token</strong> डालें।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का शपथ-पत्र नहीं लगाया", "शपथ-पत्र अनिवार्य है; परिवार की कुल सालाना आय लिखकर लगाएं"],
          ["नौकरी है पर सैलरी स्लिप नहीं", "हाल की सैलरी स्लिप लगाएं"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवाया", "\"Income and Asset Certificate for EWS\" वाली अलग सेवा चुनें"],
          ["शपथ-पत्र की आय जांच में गलत निकली", "सच्ची आय लिखें; गलत जानकारी पर प्रमाण पत्र रद्द हो सकता है"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल पर राज्य नामित एजेंसी (JAP-IT, धुर्वा, रांची) का फोन <strong>0651-2401581 / 2401040</strong> और ईमेल support.edistrict@jharkhandmail.gov.in दिया है। आवेदन की स्थिति के लिए पहले अपने अंचल कार्यालय या प्रज्ञा केंद्र से पूछें।",
    },
  ],
  official: [
    { href: "https://jharsewa.jharkhand.gov.in/", title: "JharSewa (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/ServiceWiseRequirements_Hindi.pdf", title: "सेवा के अनुसार ज़रूरी कागज़, हिंदी (PDF)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/declaration-jh.pdf", title: "घोषणा-पत्र (PDF): EWS आय एवं संपत्ति प्रमाण पत्र का आवेदन-सह-घोषणा पत्र" },
  ],
  faq: [
    { q: "झारखंड में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "jharsewa.jharkhand.gov.in पर रजिस्टर करें, Issue of Income Certificate सेवा चुनें, फॉर्म भरें, आय का शपथ-पत्र (और सैलरी स्लिप, अगर हो) अपलोड करें और जमा करके पावती रखें।" },
    { q: "झारखंड आय प्रमाण पत्र कितने दिन में बनता है?", a: "ServicePlus सेवा-सूची में इस सेवा की समय सीमा 30 दिन है। जल्दी चाहिए तो तत्काल विकल्प से आवेदन करें।" },
    { q: "आय प्रमाण पत्र के लिए कौन सा कागज़ ज़रूरी है?", a: "JharSewa की सूची में आय से जुड़ा शपथ-पत्र अनिवार्य है। नौकरी हो तो सैलरी स्लिप भी लगाएं।" },
    { q: "क्या EWS के लिए यही प्रमाण पत्र चलेगा?", a: "नहीं। JharSewa पर \"Income and Asset Certificate for EWS\" अलग सेवा है; EWS आरक्षण के लिए वही बनवाएं।" },
    { q: "आय प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "JharSewa होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा टोकन डालें।" },
  ],
  related: [
    { href: "/states/jharkhand-caste-certificate.html", emoji: "📜", title: "झारखंड जाति प्रमाण पत्र", text: "SC/ST/OBC/BC, नॉन-क्रीमी लेयर" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड स्थानीय निवासी प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://jharsewa.jharkhand.gov.in/", label: "📝 JharSewa पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
