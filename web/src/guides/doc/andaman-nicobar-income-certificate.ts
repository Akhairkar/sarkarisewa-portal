import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - northmiddle.andaman.nic.in/service/income-certificate/ (last updated
//   11.09.2025): Income Certificate, whom to apply "Concerned Tehsildar", how
//   to apply "Through e-forms via csc/e-corner/internet", documents: ID Proof
//   (Islander / Aadhar), Ration Card, Affidavit, Pay Certificate (Govt), IT
//   Returns (Pvt); portal https://edistrict.andamannicobar.gov.in/; Tehsildar
//   offices Mayabunder/Diglipur/Rangat.
// - nicobars.andaman.nic.in/service/income-certificate/: same service and
//   documents, Tehsildar offices Car Nicobar / Nancowry / Great Nicobar,
//   portal edistrict.andamannicobar.gov.in.
// - southandaman.nic.in/service/income-certificate/: same service and
//   documents, Tehsildar offices Port Blair / Ferrargunj / Little Andaman
//   (this older page still links edistrict.andaman.gov.in).
// - services.india.gov.in listing "apply online for income certificate"
//   (Andaman & Nicobar) seen in search results.
// Left out (not confirmable; e-District portal and andaman.gov.in could not be
// opened from here): fee, time limit, validity, status steps, EWS rules for
// the UT, helpline. The old description's "शुल्क ₹25" could not be confirmed
// and was removed.
export const andamanNicobarIncomeCertificate: DocGuide = {
  state: { slug: "andaman-nicobar", hi: "अंडमान और निकोबार" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Andaman & Nicobar Islands Income Certificate 2026: Apply Online",
  description: "अंडमान और निकोबार आय प्रमाण पत्र 2026: e-District, CSC/e-Corner या तहसीलदार कार्यालय से आवेदन। ज़रूरी दस्तावेज़ (Islander Card/आधार, राशन कार्ड, शपथ-पत्र, वेतन/ITR)।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अंडमान और निकोबार आय प्रमाण पत्र 2026: e-District पर आवेदन, ज़रूरी कागज़ और तहसीलदार कार्यालय",
  lead: "अंडमान और निकोबार द्वीप समूह में आय प्रमाण पत्र आपके क्षेत्र के <strong>तहसीलदार</strong> देते हैं। आवेदन e-District पोर्टल (edistrict.andamannicobar.gov.in) पर, CSC/e-Corner से, या तहसीलदार कार्यालय में होता है। साथ में पहचान पत्र (Islander Card या आधार), राशन कार्ड, शपथ-पत्र, और सरकारी कर्मचारी के लिए वेतन प्रमाण पत्र या निजी काम वालों के लिए आयकर रिटर्न (ITR) लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a>'],
    ["जारी करते हैं", "संबंधित तहसीलदार"],
    ["आवेदन", "ऑनलाइन, CSC/e-Corner या तहसीलदार कार्यालय"],
    ["आय का सबूत", "वेतन प्रमाण पत्र (सरकारी) / ITR (निजी)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी सबूत है। छात्रवृत्ति, फीस में छूट, सरकारी योजनाओं और कई आवेदनों में यह मांगा जाता है।",
      callout: { kind: "info", html: "EWS (आर्थिक रूप से कमजोर वर्ग) आरक्षण के लिए अलग <strong>Income & Asset Certificate</strong> तय प्रारूप में चाहिए, और OBC आरक्षण के लिए नॉन-क्रीमी लेयर वाला OBC प्रमाण पत्र। साधारण आय प्रमाण पत्र इनकी जगह नहीं चलता; तहसीलदार कार्यालय को बताएं कि प्रमाण पत्र किस काम के लिए है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "तीनों ज़िलों (दक्षिण अंडमान, उत्तर व मध्य अंडमान, निकोबार) के सेवा पेजों पर एक जैसी सूची है:",
      list: [
        "<strong>पहचान का प्रमाण:</strong> Islander Card या आधार कार्ड।",
        "<strong>राशन कार्ड।</strong>",
        "<strong>शपथ-पत्र (Affidavit):</strong> परिवार की आय के बारे में।",
        "<strong>सरकारी कर्मचारी:</strong> वेतन प्रमाण पत्र (Pay Certificate)।",
        "<strong>निजी नौकरी/काम:</strong> आयकर रिटर्न (IT Returns)।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> ITR नहीं भरते (जैसे मज़दूरी, मछली पकड़ना, खेती)? ऐसे में शपथ-पत्र में आय साफ-साफ लिखें और तहसीलदार कार्यालय से पूछें कि और कौन सा कागज़ चलेगा। शपथ-पत्र के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट</a>।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a> खोलें और नागरिक (citizen) के रूप में अकाउंट बनाकर लॉगिन करें।',
        "सेवाओं में <strong>Income Certificate</strong> चुनें।",
        "फॉर्म भरें और ऊपर दिए कागज़ अपलोड करें।",
        "आवेदन जमा करें और पावती/आवेदन संख्या संभाल कर रखें।",
        "खुद नहीं भर सकते तो पास के <strong>CSC या e-Corner</strong> से आवेदन करवाएं; वहां कोई सेवा शुल्क लगे तो पहले पूछ लें।",
      ],
      html: "<p>ई-डिस्ट्रिक्ट पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं। पोर्टल का पता ज़िला प्रशासन के 2025-2026 के सेवा पेजों से लिया गया है।</p>",
    },
    {
      id: "offline",
      title: "तहसीलदार कार्यालय",
      table: {
        head: ["ज़िला", "तहसीलदार कार्यालय"],
        rows: [
          ["दक्षिण अंडमान", "पोर्ट ब्लेयर (श्री विजय पुरम), फेरारगंज, लिटिल अंडमान"],
          ["उत्तर और मध्य अंडमान", "मायाबंदर, डिगलीपुर, रंगत"],
          ["निकोबार", "कार निकोबार, नानकौरी, ग्रेट निकोबार"],
        ],
      },
    },
    {
      id: "samay",
      title: "फीस, समय सीमा, वैधता और स्टेटस",
      list: [
        "<strong>फीस और समय सीमा:</strong> ज़िला प्रशासन के सेवा पेजों पर कोई सरकारी फीस या तय समय सीमा नहीं लिखी है। आवेदन के समय तहसीलदार कार्यालय या CSC पर पूछ लें।",
        "<strong>वैधता:</strong> आधिकारिक पेजों पर वैधता अवधि नहीं लिखी। आय हर साल बदल सकती है, इसलिए छात्रवृत्ति या योजना के फॉर्म में जितना नया प्रमाण पत्र मांगा जाए, उसी हिसाब से नया बनवाएं।",
        "<strong>स्टेटस:</strong> पावती में मिली आवेदन संख्या से e-District पर स्टेटस देखें, या तहसीलदार कार्यालय में पूछें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पहचान पत्र नहीं लगाया", "Islander Card या आधार का साफ स्कैन लगाएं"],
          ["आय का सबूत नहीं", "सरकारी कर्मचारी Pay Certificate, निजी काम वाले ITR लगाएं; ITR न हो तो तहसीलदार कार्यालय से विकल्प पूछें"],
          ["शपथ-पत्र नहीं", "परिवार की आय बताने वाला शपथ-पत्र बनवाकर लगाएं"],
          ["EWS के लिए साधारण आय प्रमाण पत्र लिया", "EWS के लिए अलग Income & Asset Certificate मांगें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पहले अपने तहसीलदार कार्यालय या पास के CSC/e-Corner से संपर्क करें। आवेदन लंबा अटके तो ज़िले के उपायुक्त (Deputy Commissioner) कार्यालय में शिकायत करें। इस सेवा का अलग हेल्पलाइन नंबर हमें आधिकारिक पेज पर नहीं मिला, इसलिए किसी अनौपचारिक नंबर पर अपने कागज़ न भेजें।",
    },
  ],
  official: [
    { href: "https://edistrict.andamannicobar.gov.in/", title: "e-District अंडमान और निकोबार (ऑनलाइन आवेदन)" },
    { href: "https://southandaman.nic.in/service/income-certificate/", title: "दक्षिण अंडमान ज़िला: आय प्रमाण पत्र" },
    { href: "https://northmiddle.andaman.nic.in/service/income-certificate/", title: "उत्तर और मध्य अंडमान ज़िला: आय प्रमाण पत्र" },
    { href: "https://nicobars.andaman.nic.in/service/income-certificate/", title: "निकोबार ज़िला: आय प्रमाण पत्र" },
  ],
  faq: [
    { q: "अंडमान-निकोबार में आय प्रमाण पत्र कौन देता है?", a: "आपके क्षेत्र के तहसीलदार। आवेदन e-District पोर्टल (edistrict.andamannicobar.gov.in), CSC/e-Corner या तहसीलदार कार्यालय से होता है।" },
    { q: "आय प्रमाण पत्र के लिए कौन से कागज़ चाहिए?", a: "Islander Card या आधार, राशन कार्ड, शपथ-पत्र, और सरकारी कर्मचारी के लिए वेतन प्रमाण पत्र या निजी काम वालों के लिए आयकर रिटर्न।" },
    { q: "आय प्रमाण पत्र की फीस कितनी है?", a: "ज़िला प्रशासन के सेवा पेजों पर कोई सरकारी फीस नहीं लिखी है। CSC/e-Corner पर सेवा शुल्क लग सकता है, पहले पूछ लें।" },
    { q: "क्या EWS के लिए यही प्रमाण पत्र चलेगा?", a: "नहीं। EWS आरक्षण के लिए तय प्रारूप वाला Income & Asset Certificate चाहिए। आवेदन करते समय तहसीलदार कार्यालय को इसका उद्देश्य बताएं।" },
  ],
  related: [
    { href: "/states/andaman-nicobar-caste-certificate.html", emoji: "📜", title: "अंडमान-निकोबार जाति प्रमाण पत्र", text: "OBC और ST प्रमाण पत्र" },
    { href: "/states/andaman-nicobar-domicile-certificate.html", emoji: "🏠", title: "अंडमान-निकोबार निवास प्रमाण पत्र", text: "Local / Residence Certificate" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.andamannicobar.gov.in/", label: "📝 e-District अंडमान-निकोबार" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
