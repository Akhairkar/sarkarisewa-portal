import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; esebamanipur.mn.gov.in shows a "system
// maintenance" screen to our checker but its landing text is readable):
// - kangpokpi.nic.in notice "e-Seba Manipur Portal" (06.05.2026): from
//   11-05-2026 Revenue services including Income Certificate only through
//   e-Seba Manipur (https://esebamanipur.mn.gov.in); new applications on the
//   old portal (eservicesmanipur.gov.in) discontinued, pending ones still
//   processed there.
// - esebamanipur.mn.gov.in landing page: Income Certificate documents:
//   passport photo, voter ID, proof of identity, up-to-date Jamabandi or Patta,
//   salary slips of parent (optional), pension book copy (optional),
//   income/occupation certificate verified by Lambu (optional).
// - esebadepartment.mn.gov.in FAQ (29 Apr 2026): Aadhaar + Aadhaar-linked
//   mobile registration (details locked from Aadhaar); Apply Services >
//   Revenue Department > Income Certificate; JPG/PDF up to 200 KB; Processing
//   Office (typically SDO office of the sub-division); declaration; Submit >
//   Application Number; income document list (photo, voter ID of applicant or
//   parents, ID proof, optional salary slip / pension book / income-occupation
//   certificate verified by Lambu); status Submitted > In Progress > Issued /
//   Rejected; "APPLICATION STATUS" and "CERTIFICATE DOWNLOAD" without login;
//   no editing after submit; false information may cancel the certificate.
// - esebadepartment.mn.gov.in "Service Fee Details" (17 Apr 2026): no service
//   fee for online G2C services. "Contact Us": DIT helpdesk (0385) 2447368,
//   helpdesk.edistrictmn@nic.in, Mon-Sat 10 AM-5 PM.
// Left out (not confirmable on an official page we could open): time limit,
// validity period, issuing officer's designation on the certificate, appeal
// route. The old page's "₹30 fee" contradicts the portal's no-fee note.
export const manipurIncomeCertificate: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Manipur Income Certificate 2026: Apply Online",
  description: "Manipur (मणिपुर) आय प्रमाण पत्र 2026: e-Seba Manipur पोर्टल पर ऑनलाइन आवेदन, कोई सेवा शुल्क नहीं, ज़रूरी कागज़ (जमाबंदी/पट्टा, लम्बू सत्यापन) और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मणिपुर आय प्रमाण पत्र 2026: e-Seba पर आवेदन, कागज़, स्टेटस और डाउनलोड",
  lead: "मणिपुर में 11 मई 2026 से आय प्रमाण पत्र का आवेदन सिर्फ नए <a href=\"https://esebamanipur.mn.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-Seba Manipur</a> पोर्टल पर होता है; पुराने eservicesmanipur पोर्टल पर नए आवेदन बंद हैं। रजिस्ट्रेशन आधार और आधार से जुड़े मोबाइल से होता है, आवेदन राजस्व विभाग की सेवा है और फॉर्म में आप अपना प्रसंस्करण कार्यालय (आम तौर पर सब-डिवीज़न का SDO कार्यालय) चुनते हैं। पोर्टल के अनुसार अभी इस ऑनलाइन सेवा पर कोई सेवा शुल्क नहीं है।",
  facts: [
    ["पोर्टल", '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a>'],
    ["विभाग", "राजस्व विभाग (SDO कार्यालय)"],
    ["शुल्क", "ऑनलाइन सेवा शुल्क नहीं (पोर्टल, अप्रैल 2026)"],
    ["हेल्पडेस्क", "(0385) 2447368"],
  ],
  notice: "<strong>पोर्टल बदला है:</strong> 11 मई 2026 से नए आवेदन सिर्फ esebamanipur.mn.gov.in पर। पुराने eservicesmanipur.gov.in पर जमा लंबित आवेदन वहीं निपटाए जाएंगे।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। e-Seba पर यह <strong>Revenue Department → Income Certificate</strong> सेवा है।",
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, OBC प्रमाण पत्र (नॉन-क्रीमी लेयर स्व-घोषणा के साथ) लगता है। देखें <a href=\"/states/manipur-caste-certificate.html\">मणिपुर जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-Seba की सूची)",
      intro: "सभी फाइलें JPG या PDF में, हर फाइल <strong>200 KB</strong> से छोटी।",
      list: [
        "<strong>पासपोर्ट साइज़ फोटो</strong>।",
        "<strong>मतदाता पहचान पत्र</strong> (अपना या माता-पिता का)।",
        "<strong>कोई पहचान प्रमाण</strong>।",
        "<strong>ताज़ा जमाबंदी या पट्टा</strong> (पोर्टल के होमपेज की सूची में; राजस्व विभाग का ज़मीन/संपत्ति रिकॉर्ड, स्थानीय राजस्व कार्यालय से)।",
        "<strong>वैकल्पिक:</strong> माता-पिता की वेतन पर्ची, पेंशन बुक की कॉपी, और <strong>लम्बू (Lambu) से सत्यापित आय/पेशा प्रमाण पत्र</strong>।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> वेतन पर्ची न हो (खेती, मज़दूरी, छोटा काम) तो सूची का वैकल्पिक कागज़, लम्बू से सत्यापित आय/पेशा प्रमाण पत्र, लगा सकते हैं। स्कैन 200 KB से छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "e-Seba पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a> पर <strong>Register here</strong> दबाएं। आधार से जुड़ा मोबाइल नंबर डालें, OTP मंगाएं, फिर आधार नंबर और OTP डालें।',
        "नाम, जन्म तारीख, लिंग, पता और पिता का नाम आधार से अपने-आप भरते हैं। बाकी जानकारी भरें और यूज़रनेम-पासवर्ड बनाएं।",
        "लॉगिन करके <strong>Apply Services → Revenue Department → Income Certificate</strong> पर <strong>Apply Now</strong> दबाएं।",
        "फॉर्म के सारे चरण भरें, आखिरी चरण में कागज़ अपलोड करें और <strong>Processing Office</strong> चुनें।",
        "घोषणा पर टिक करके <strong>Submit Application</strong> दबाएं और <strong>Application Number</strong> लिख लें। पावती Applied List से डाउनलोड होती है।",
      ],
      callout: { kind: "warn", html: "Submit के बाद आवेदन बदला नहीं जा सकता। आय सच-सच लिखें; गलत जानकारी पर प्रमाण पत्र रद्द और कानूनी कार्रवाई हो सकती है। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और खारिज होने पर",
      list: [
        "<strong>चरण:</strong> Submitted → In Progress → Issued (या Rejected)।",
        "<strong>स्टेटस:</strong> Applications → Applied List में, या बिना लॉगिन होमपेज के <strong>APPLICATION STATUS</strong> में Application Number डालें।",
        "<strong>डाउनलोड:</strong> Applications → Issued List से, या बिना लॉगिन <strong>CERTIFICATE DOWNLOAD</strong> में Application Number डालें।",
        "<strong>खारिज हुआ:</strong> Rejected List में कारण देखें, कमी ठीक करके नया आवेदन करें।",
        "<strong>बहुत देर:</strong> आवेदन में चुने गए प्रसंस्करण कार्यालय से संपर्क करें।",
      ],
      html: '<p>सामान्य जानकारी: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      list: [
        "<strong>फीस:</strong> e-Seba के \"Service Fee Details\" पेज (अप्रैल 2026) के अनुसार ऑनलाइन नागरिक सेवाओं पर अभी कोई सेवा शुल्क नहीं है।",
        "<strong>समय सीमा और वैधता:</strong> किसी आधिकारिक पेज पर हमें नहीं मिली। आय बदलती है, इसलिए छात्रवृत्ति/योजना का फॉर्म किस तारीख के बाद का प्रमाण पत्र मांगता है, वह देखकर ज़रूरत हो तो नया बनवाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आम गलतियां",
      table: {
        head: ["गलती", "हल"],
        rows: [
          ["आधार में नाम/जन्म तारीख गलत", "पहले आधार में सुधार कराएं; e-Seba पर ये बदले नहीं जाते"],
          ["आय का कोई सबूत नहीं", "वेतन पर्ची, पेंशन बुक या लम्बू से सत्यापित आय/पेशा प्रमाण पत्र लगाएं"],
          ["जमाबंदी/पट्टा पुराना", "राजस्व कार्यालय से ताज़ा प्रति लें"],
          ["फाइल अपलोड नहीं हुई", "JPG/PDF, 200 KB से छोटी; Chrome या Firefox"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>e-Seba हेल्पडेस्क (सूचना प्रौद्योगिकी विभाग):</strong> (0385) 2447368, helpdesk.edistrictmn@nic.in, सोमवार से शनिवार सुबह 10 से शाम 5 बजे (दूसरा शनिवार और रविवार बंद)।",
        "आवेदन में चुना गया <strong>SDO कार्यालय</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://esebamanipur.mn.gov.in/", title: "e-Seba Manipur (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://esebadepartment.mn.gov.in/Page/Faq", title: "e-Seba FAQ: रजिस्ट्रेशन, कागज़, स्टेटस" },
    { href: "https://esebadepartment.mn.gov.in/Page/ServiceFeeDetails", title: "e-Seba: सेवा शुल्क की जानकारी" },
    { href: "https://kangpokpi.nic.in/notice/e-seba-manipur-portal/", title: "कांगपोकपी ज़िला सूचना: 11 मई 2026 से e-Seba ही पोर्टल" },
  ],
  faq: [
    { q: "मणिपुर में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "esebamanipur.mn.gov.in पर आधार और आधार से जुड़े मोबाइल से रजिस्टर करें, Apply Services → Revenue Department → Income Certificate चुनें, फॉर्म भरें, फोटो, मतदाता पहचान पत्र, पहचान प्रमाण और आय का सबूत अपलोड करें, प्रसंस्करण कार्यालय चुनकर Submit करें।" },
    { q: "मणिपुर आय प्रमाण पत्र की फीस कितनी है?", a: "e-Seba के सेवा शुल्क पेज (अप्रैल 2026) के अनुसार ऑनलाइन नागरिक सेवाओं पर अभी कोई सेवा शुल्क नहीं है।" },
    { q: "वेतन पर्ची नहीं है तो आय का क्या सबूत दें?", a: "e-Seba की सूची में लम्बू से सत्यापित आय/पेशा प्रमाण पत्र (वैकल्पिक) दिया गया है; पेंशन हो तो पेंशन बुक की कॉपी भी लगा सकते हैं।" },
    { q: "क्या पुराना eservicesmanipur पोर्टल चलेगा?", a: "नहीं। 11 मई 2026 से नए आवेदन सिर्फ e-Seba Manipur पर होते हैं; पुराने पोर्टल पर पहले से जमा लंबित आवेदन वहीं निपटाए जाएंगे।" },
  ],
  related: [
    { href: "/states/manipur-caste-certificate.html", emoji: "📜", title: "मणिपुर जाति प्रमाण पत्र", text: "ST, SC, OBC" },
    { href: "/states/manipur-domicile-certificate.html", emoji: "🏠", title: "मणिपुर निवास प्रमाण पत्र", text: "PRC / डोमिसाइल" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://esebamanipur.mn.gov.in/", label: "📝 e-Seba Manipur पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
