import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; esebamanipur.mn.gov.in shows a "system
// maintenance" screen to our checker but its landing text is readable):
// - kangpokpi.nic.in notice "e-Seba Manipur Portal" (06.05.2026): newly
//   inaugurated e-Seba Manipur Portal (https://esebamanipur.mn.gov.in) is the
//   sole platform for notified online services; from 11-05-2026 Revenue
//   services Domicile, Income, OBC, PRC, SC and ST certificates only through
//   it; new applications on the old portal (eservicesmanipur.gov.in)
//   discontinued, pending ones still processed there.
// - esebadepartment.mn.gov.in FAQ (29 Apr 2026): registration needs Aadhaar and
//   Aadhaar-linked mobile (name, DOB, gender, address, father's name fetched
//   from Aadhaar and locked); login by mobile OTP or username; Apply Services >
//   Revenue Department > OBC / SC / ST / PRC / Income / Domicile certificate;
//   multi-step form, upload documents (JPG/PDF, 200 KB for Revenue), choose
//   Processing Office (for revenue certificates typically an SDO office of
//   your sub-division), declaration, Submit > Application Number; documents
//   per service (OBC: photo, voter ID of applicant or parents, ID proof,
//   up-to-date Jamabandi or Patta, self-declaration (not creamy layer),
//   optional salary slips / pension book of parents; SC: photo, voter ID,
//   ID proof, optional up to 3 other files; ST: photo, father's ST
//   certificate, office/staff verification document, ID/address proof
//   (Aadhaar, EPIC, Passport), optional village authority verification);
//   status Submitted > In Progress > Issued / Rejected; Applied List or
//   "APPLICATION STATUS" without login; download from Issued List or
//   "CERTIFICATE DOWNLOAD" with application number; no editing after submit;
//   rejected: see reason in Rejected List and re-apply; false information may
//   cancel the certificate.
// - esebadepartment.mn.gov.in "Service Fee Details" (17 Apr 2026): G2C online
//   services currently charge no service fee. "Contact Us" (19 May 2026):
//   Department of IT, helpdesk (0385) 2447368, helpdesk.edistrictmn@nic.in,
//   Mon-Sat 10 AM-5 PM (second Saturday closed).
// - tamenglong.nic.in "Schedule Tribe (ST) Certificate": issued at the office
//   of the Deputy Commissioner and the concerned SDO offices; used for
//   education, employment, banks. churachandpur.nic.in "Caste Certificate"
//   (updated 21.08.2026): SC certificates from the revenue department of
//   district HQ (forms at the revenue section of the DC office) or online at
//   esebamanipur.mn.gov.in.
// Left out (not confirmable on an official page we could open): a time limit
// under the state's service-delivery law, validity, appeal officers, a
// separate "central OBC" service.
export const manipurCasteCertificate: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Manipur Caste Certificate 2026: Apply & Status",
  description: "मणिपुर ST/SC/OBC जाति प्रमाण पत्र 2026: e-Seba Manipur पोर्टल पर ऑनलाइन आवेदन (कोई सेवा शुल्क नहीं), ज़रूरी कागज़, स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मणिपुर जाति प्रमाण पत्र 2026: e-Seba पर ST, SC और OBC आवेदन, कागज़ और स्टेटस",
  lead: "मणिपुर में 11 मई 2026 से ST, SC और OBC प्रमाण पत्र का आवेदन सिर्फ नए <a href=\"https://esebamanipur.mn.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-Seba Manipur</a> पोर्टल पर होता है; पुराने eservicesmanipur पोर्टल पर नए आवेदन बंद हैं। रजिस्ट्रेशन आधार और आधार से जुड़े मोबाइल से होता है और फॉर्म में आप अपना प्रसंस्करण कार्यालय (आम तौर पर अपने सब-डिवीज़न का SDO कार्यालय) चुनते हैं। पोर्टल के अनुसार अभी इन ऑनलाइन सेवाओं पर कोई सेवा शुल्क नहीं है।",
  facts: [
    ["पोर्टल", '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a>'],
    ["जारी करते हैं", "DC / SDO कार्यालय (राजस्व विभाग)"],
    ["शुल्क", "ऑनलाइन सेवा शुल्क नहीं (पोर्टल, अप्रैल 2026)"],
    ["हेल्पडेस्क", "(0385) 2447368"],
  ],
  notice: "<strong>पोर्टल बदला है:</strong> 11 मई 2026 से नए आवेदन सिर्फ esebamanipur.mn.gov.in पर। पुराने eservicesmanipur.gov.in पर जमा जो आवेदन अधूरे/लंबित थे, वे वहीं निपटाए जाएंगे। कई ज़िला वेबसाइटों पर अभी भी पुराना लिंक लिखा है, उस पर नया आवेदन न करें।",
  sections: [
    {
      id: "sevayen",
      title: "e-Seba पर कौन सा प्रमाण पत्र किसके लिए",
      table: {
        head: ["सेवा (Revenue Department)", "किसके लिए"],
        rows: [
          ["<strong>ST Certificate</strong>", "मणिपुर की मान्य अनुसूचित जनजातियों के लोग। शिक्षा, नौकरी और बैंक के कामों में लगता है।"],
          ["<strong>SC Certificate</strong>", "मणिपुर की मान्य अनुसूचित जातियों के लोग"],
          ["<strong>OBC Certificate</strong>", "मणिपुर की OBC सूची वाले लोग; इसमें क्रीमी लेयर में न होने की स्व-घोषणा लगती है"],
          ["<strong>Permanent Resident Certificate (PRC) / Domicile</strong>", "निवास का सबूत, जाति का नहीं। देखें <a href=\"/states/manipur-domicile-certificate.html\">मणिपुर निवास प्रमाण पत्र</a>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी या परीक्षा में OBC आरक्षण के लिए आम तौर पर केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र मांगा जाता है, जिसमें जाति केंद्र की OBC सूची में होनी चाहिए। e-Seba की सेवा-सूची में केंद्र के लिए अलग सेवा नहीं दिखती, इसलिए आवेदन से पहले अपने SDO कार्यालय से पूछ लें कि जारी होने वाला प्रमाण पत्र आपकी भर्ती के लिए मान्य होगा या नहीं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-Seba की सूची)",
      intro: "सभी फाइलें JPG या PDF में, हर फाइल <strong>200 KB</strong> से छोटी।",
      table: {
        head: ["प्रमाण पत्र", "कागज़"],
        rows: [
          ["<strong>ST</strong>", "पासपोर्ट साइज़ फोटो; <strong>पिता का ST प्रमाण पत्र</strong>; कार्यालय/कर्मचारी का सत्यापन दस्तावेज़; पहचान/पते का प्रमाण (आधार, EPIC या पासपोर्ट); गांव प्राधिकरण (village authority) का सत्यापन (वैकल्पिक)"],
          ["<strong>SC</strong>", "पासपोर्ट साइज़ फोटो; अपना या माता-पिता का मतदाता पहचान पत्र; कोई पहचान प्रमाण; दूसरे सहायक कागज़ (वैकल्पिक, 3 फाइल तक)"],
          ["<strong>OBC</strong>", "पासपोर्ट साइज़ फोटो; अपना या माता-पिता का मतदाता पहचान पत्र; कोई पहचान प्रमाण; ताज़ा <strong>जमाबंदी या पट्टा</strong>; <strong>क्रीमी लेयर में न होने की स्व-घोषणा</strong>; माता-पिता की वेतन पर्ची या पेंशन बुक (वैकल्पिक)"],
        ],
      },
      callout: { kind: "ok", html: "<strong>जमाबंदी या पट्टा</strong> राजस्व विभाग का ज़मीन/संपत्ति का रिकॉर्ड है; ताज़ा प्रति अपने स्थानीय राजस्व कार्यालय से लें। फोटो/स्कैन 200 KB से छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "e-Seba पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a> पर <strong>Register here</strong> दबाएं। आधार से जुड़ा मोबाइल नंबर डालें, OTP मंगाएं, फिर 12 अंकों का आधार नंबर और OTP डालें।',
        "नाम, जन्म तारीख, लिंग, पता और पिता का नाम आधार से अपने-आप भरते हैं और बदले नहीं जा सकते। बाकी (ईमेल, माता का नाम, जाति वर्ग, धर्म, पता) भरें और यूज़रनेम-पासवर्ड बनाएं।",
        "लॉगिन (मोबाइल OTP या यूज़रनेम से) करके <strong>Apply Services → Revenue Department</strong> में ST, SC या OBC Certificate पर <strong>Apply Now</strong> दबाएं।",
        "फॉर्म के सारे चरण भरें, आखिरी चरण में कागज़ अपलोड करें और <strong>Processing Office</strong> चुनें (पहले ज़िला, फिर अपने सब-डिवीज़न का कार्यालय)।",
        "घोषणा पर टिक करें और <strong>Submit Application</strong> दबाएं। स्क्रीन पर आया <strong>Application Number</strong> तुरंत लिख लें; पावती Applied List से डाउनलोड होती है।",
      ],
      callout: { kind: "warn", html: "Submit के बाद आवेदन बदला नहीं जा सकता। गलत जानकारी देने पर प्रमाण पत्र रद्द हो सकता है और कानूनी कार्रवाई भी हो सकती है। \"Save All\" से अधूरा फॉर्म ड्राफ्ट में बचा सकते हैं।" },
    },
    {
      id: "offline",
      title: "ऑफलाइन: DC / SDO कार्यालय",
      intro: "ज़िला वेबसाइटों के अनुसार ST प्रमाण पत्र DC कार्यालय और संबंधित SDO कार्यालयों में भी जारी होते हैं, और SC प्रमाण पत्र के फॉर्म ज़िला मुख्यालय के DC कार्यालय के राजस्व अनुभाग में मिलते हैं। आधार न हो या ऑनलाइन दिक्कत हो तो अपने SDO/DC कार्यालय से पूछें कि आवेदन कैसे लिया जाएगा।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और खारिज होने पर",
      list: [
        "<strong>चरण:</strong> Submitted → In Progress → Issued (या Rejected)।",
        "<strong>स्टेटस:</strong> लॉगिन करके Applications → Applied List में Application Number खोजें, या बिना लॉगिन होमपेज के <strong>APPLICATION STATUS</strong> में नंबर डालें।",
        "<strong>डाउनलोड:</strong> Applications → Issued List में डाउनलोड आइकन, या बिना लॉगिन <strong>CERTIFICATE DOWNLOAD</strong> में Application Number डालें।",
        "<strong>खारिज हुआ:</strong> Rejected List में कारण देखें, कमी ठीक करें और नया आवेदन करें। जब तक एक आवेदन चल रहा है, उसी सेवा में दूसरा आवेदन नहीं होता।",
        "<strong>बहुत देर:</strong> पोर्टल के अनुसार समय विभाग पर निर्भर है; आवेदन में चुने गए प्रसंस्करण कार्यालय से संपर्क करें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखने के बारे में सामान्य जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और वैधता",
      list: [
        "<strong>फीस:</strong> e-Seba के \"Service Fee Details\" पेज (अप्रैल 2026) के अनुसार नागरिक सेवाओं पर अभी कोई सेवा शुल्क नहीं है। कोई दुकान/एजेंट फॉर्म भरने का पैसा ले तो वह सरकारी फीस नहीं है।",
        "<strong>समय सीमा:</strong> इन प्रमाण पत्रों की तय समय सीमा किसी आधिकारिक पेज पर हमें नहीं मिली।",
        "<strong>वैधता:</strong> पोर्टल पर नहीं लिखी। OBC में नौकरी/दाखिले का विज्ञापन किस तारीख तक का नॉन-क्रीमी लेयर प्रमाण मांगता है, वह शर्त ज़रूर पढ़ें।",
      ],
    },
    {
      id: "rejection",
      title: "आम गलतियां",
      table: {
        head: ["गलती", "हल"],
        rows: [
          ["आधार में नाम/जन्म तारीख गलत", "e-Seba पर ये बदले नहीं जा सकते; पहले आधार में सुधार कराएं"],
          ["OTP नहीं आया", "मोबाइल आधार से जुड़ा हो; 2-3 मिनट रुककर Resend OTP करें"],
          ["फाइल अपलोड नहीं हुई", "JPG/PDF रखें, 200 KB से छोटी; Chrome या Firefox इस्तेमाल करें"],
          ["ST में पिता का ST प्रमाण पत्र नहीं लगाया", "पिता का प्रमाण पत्र और गांव प्राधिकरण का सत्यापन लगाएं"],
          ["OBC में जमाबंदी/पट्टा पुराना", "राजस्व कार्यालय से ताज़ा प्रति लें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>e-Seba हेल्पडेस्क (सूचना प्रौद्योगिकी विभाग):</strong> (0385) 2447368, helpdesk.edistrictmn@nic.in, सोमवार से शनिवार सुबह 10 से शाम 5 बजे (दूसरा शनिवार और रविवार बंद)।",
        "आवेदन में चुना गया <strong>SDO / DC कार्यालय</strong>।",
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
    { q: "मणिपुर में ST प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "esebamanipur.mn.gov.in पर आधार और आधार से जुड़े मोबाइल से रजिस्टर करें, Apply Services → Revenue Department → ST Certificate चुनें, फॉर्म भरें, फोटो, पिता का ST प्रमाण पत्र, सत्यापन दस्तावेज़ और पहचान प्रमाण अपलोड करें, प्रसंस्करण कार्यालय चुनकर Submit करें।" },
    { q: "क्या पुराना eservicesmanipur.gov.in पोर्टल चलेगा?", a: "नहीं। कांगपोकपी ज़िले की सूचना के अनुसार 11 मई 2026 से नए आवेदन सिर्फ e-Seba Manipur पर होंगे। पुराने पोर्टल पर पहले से जमा लंबित आवेदन वहीं निपटाए जाएंगे।" },
    { q: "मणिपुर में जाति प्रमाण पत्र की फीस कितनी है?", a: "e-Seba के सेवा शुल्क पेज (अप्रैल 2026) के अनुसार ऑनलाइन नागरिक सेवाओं पर अभी कोई सेवा शुल्क नहीं है।" },
    { q: "आधार में नाम गलत है तो क्या करें?", a: "e-Seba पर नाम, जन्म तारीख, लिंग और पिता का नाम आधार से आते हैं और बदले नहीं जा सकते। पहले आधार में सुधार कराएं, फिर आवेदन करें।" },
    { q: "प्रमाण पत्र कहां से डाउनलोड करें?", a: "लॉगिन करके Applications → Issued List से, या बिना लॉगिन होमपेज के CERTIFICATE DOWNLOAD में Application Number डालकर।" },
  ],
  related: [
    { href: "/states/manipur-income-certificate.html", emoji: "💰", title: "मणिपुर आय प्रमाण पत्र", text: "e-Seba पर आवेदन" },
    { href: "/states/manipur-domicile-certificate.html", emoji: "🏠", title: "मणिपुर निवास प्रमाण पत्र", text: "PRC / डोमिसाइल" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://esebamanipur.mn.gov.in/", label: "📝 e-Seba Manipur पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
