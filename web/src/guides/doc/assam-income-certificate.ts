import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; sewasetu.assam.gov.in does not open from our
// checker, so its pages were read through search extracts):
// - sewasetu.assam.gov.in "Application for Income Certificate" (search
//   extract): register with name, mobile, state, password; Apply Online;
//   acknowledgement with application reference number; track status; download
//   from the ARTPS portal; address proof and identity proof mandatory, land
//   revenue receipt mandatory, salary slip / other documents optional; user
//   (statutory) charge Rs 30; service charge Rs 30 and printing Rs 10 per page
//   when done at PFC/CSC. Separate services "Issuance of Income Certificate -
//   KAAC" and "Income Certificate (NCHAC)" for the autonomous councils.
// - sivasagar.assam.gov.in INCOME.pdf (Revenue Department application form):
//   applicant, relation, source of income, occupation, total income; permanent
//   address with district, sub-division, Circle Office, Mouza; supporting
//   documents: address proof*, identity proof*, land certificate*, salary
//   slip, any other document.
// - dimahasao.assam.gov.in non-creamy-layer page: income certificate of
//   agriculturist parents from the Circle Officer.
// - Sewa Setu helpline 1800-345-3574 (search extract).
// Left out (not confirmable on an official page we could open): time limit in
// days for the general service, validity period, appeal officer names.
export const assamIncomeCertificate: DocGuide = {
  state: { slug: "assam", hi: "असम" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Assam Income Certificate 2026: Apply Online",
  description: "Assam (असम) आय प्रमाण पत्र 2026: Sewa Setu Assam Portal (RTPS) पर घर बैठे ऑनलाइन आवेदन करें। पात्रता, शुल्क ₹30, आवश्यक दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "असम आय प्रमाण पत्र 2026: Sewa Setu पर आवेदन, कागज़, शुल्क और स्टेटस",
  lead: "असम में आय प्रमाण पत्र <strong>राजस्व विभाग</strong> की सेवा है। आवेदन <strong>Sewa Setu</strong> पोर्टल (sewasetu.assam.gov.in) पर ऑनलाइन या DC/SDO/सर्किल कार्यालय के <strong>PFC</strong> और CSC से होता है। आवेदन में अपना <strong>सर्किल ऑफिस और मौजा</strong> चुनना होता है, और <strong>पते का प्रमाण, पहचान पत्र और ज़मीन का कागज़</strong> अनिवार्य है। Sewa Setu पर उपयोगकर्ता शुल्क <strong>₹30</strong> दिया गया है।",
  facts: [
    ["पोर्टल", '<a href="https://sewasetu.assam.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.assam.gov.in</a>'],
    ["विभाग", "राजस्व (सर्किल ऑफिस के क्षेत्र से)"],
    ["शुल्क", "₹30 (PFC/CSC पर सेवा शुल्क अलग)"],
    ["अनिवार्य कागज़", "पता, पहचान, ज़मीन का कागज़"],
  ],
  notice: "<strong>स्वायत्त परिषद क्षेत्र:</strong> कार्बी आंगलोंग (KAAC) और दीमा हसाओ (NCHAC) के लिए Sewa Setu पर <strong>आय प्रमाण पत्र की अलग सेवाएं</strong> हैं। इन इलाकों के लोग अपनी परिषद वाली सेवा ही चुनें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार/आवेदक की सालाना आय का सरकारी प्रमाण है। यह छात्रवृत्ति, फीस माफी, सरकारी योजनाओं और नॉन-क्रीमी लेयर प्रमाण पत्र में मांगा जाता है।",
      list: [
        "<strong>OBC/MOBC नॉन-क्रीमी लेयर</strong> के लिए ज़िला वेबसाइट के अनुसार खेती करने वाले माता-पिता का आय प्रमाण पत्र <strong>सर्किल ऑफिसर</strong> से लगता है। उसके लिए <a href=\"/states/assam-caste-certificate.html\">असम जाति प्रमाण पत्र गाइड</a> देखें।",
        "<strong>EWS</strong> आरक्षण के लिए साधारण आय प्रमाण पत्र नहीं, बल्कि EWS का अलग प्रमाण पत्र लगता है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "राजस्व विभाग के आवेदन फॉर्म और Sewa Setu सेवा पेज के अनुसार:",
      list: [
        "<strong>पते का प्रमाण</strong> (अनिवार्य)",
        "<strong>पहचान पत्र</strong> (अनिवार्य)",
        "<strong>ज़मीन का कागज़</strong> (Land Certificate / भू-राजस्व रसीद) (अनिवार्य)",
        "<strong>वेतन पर्ची</strong> (नौकरी करते हों तो)",
        "आय से जुड़ा <strong>कोई और कागज़</strong> (वैकल्पिक)",
      ],
      html: "<p>फॉर्म में ये जानकारी भरनी होती है: आवेदक का नाम, मोबाइल नंबर, लिंग, संबंध (पुत्र/पुत्री/पत्नी/पति) और संबंधी का नाम, <strong>आय का स्रोत</strong>, <strong>पेशा</strong>, <strong>कुल आय</strong>, और स्थायी पता: ज़िला, उप-मंडल (Sub-Division), <strong>सर्किल ऑफिस</strong>, <strong>मौजा</strong>, गांव/कस्बा, थाना, डाकघर और पिन कोड।</p>",
      callout: { kind: "warn", html: "आय कम या गलत न लिखें। फॉर्म में लिखी आय की जांच हो सकती है। आय की स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "Sewa Setu पर आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sewasetu.assam.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.assam.gov.in</a> खोलें। पहली बार हैं तो पूरा नाम, मोबाइल नंबर, राज्य और पासवर्ड से <strong>रजिस्टर</strong> करें, फिर लॉगिन करें।',
        "<strong>Apply Online</strong> में <strong>Application for Income Certificate</strong> चुनें (KAAC/NCHAC क्षेत्र के लोग अपनी परिषद वाली सेवा)।",
        "फॉर्म भरें: आय का स्रोत, पेशा, कुल आय, और पते में सही <strong>सर्किल ऑफिस और मौजा</strong>।",
        "पते का प्रमाण, पहचान पत्र और ज़मीन का कागज़ अपलोड करें; हो तो वेतन पर्ची भी।",
        "शुल्क भरें और <strong>पावती</strong> डाउनलोड करें। इसमें <strong>Application Reference Number</strong> होता है।",
      ],
      callout: { kind: "info", html: "ऑनलाइन नहीं कर पा रहे? DC, SDO (Civil) या सर्किल कार्यालय के <strong>PFC</strong> या नज़दीकी <strong>CSC</strong> से आवेदन कराएं। Sewa Setu के अनुसार वहां <strong>₹30 सेवा शुल्क</strong> और प्रिंट का <strong>₹10 प्रति पेज</strong> अलग लगता है।" },
    },
    {
      id: "samay",
      title: "शुल्क, समय और अपील",
      list: [
        "<strong>शुल्क:</strong> Sewa Setu पर उपयोगकर्ता शुल्क <strong>₹30</strong>। PFC/CSC से कराने पर सेवा शुल्क ₹30 और प्रिंट ₹10 प्रति पेज अतिरिक्त। भुगतान से पहले स्क्रीन पर कुल राशि देखें।",
        "<strong>समय:</strong> इस सेवा की समय सीमा हमें किसी खुलने वाले सरकारी पेज पर साफ नहीं मिली। आवेदन के समय Sewa Setu सेवा पेज पर लिखी समय सीमा देखें।",
        "<strong>अपील:</strong> Sewa Setu की सेवाएं असम लोक सेवा अधिकार कानून (ARTPS) से जुड़ी हैं। समय पर प्रमाण पत्र न मिले या बिना वजह खारिज हो तो उसी कानून में तय अपील अधिकारी के पास जाएं।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और वैधता",
      list: [
        "<strong>स्टेटस:</strong> Sewa Setu पर <strong>Track Application Status</strong> में Application Reference Number डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड होता है।",
        "<strong>वैधता:</strong> असम के आय प्रमाण पत्र की वैधता अवधि हमें आधिकारिक पेज पर नहीं मिली। छात्रवृत्ति या योजना वाले अक्सर हाल के वित्तीय वर्ष का प्रमाण पत्र मांगते हैं, इसलिए उनकी शर्त पढ़कर ही पुराना प्रमाण पत्र लगाएं।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र रखने का तरीका: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["ज़मीन का कागज़ नहीं लगाया", "भू-राजस्व रसीद या ज़मीन का प्रमाण पत्र लगाएं; यह फॉर्म में अनिवार्य है"],
          ["गलत सर्किल ऑफिस/मौजा चुना", "अपने स्थायी पते का सही सर्किल और मौजा चुनें"],
          ["आय का स्रोत और कुल आय मेल नहीं खाते", "हर स्रोत (खेती, नौकरी, व्यापार) की आय जोड़कर सही कुल लिखें; वेतन पर्ची लगाएं"],
          ["KAAC/NCHAC क्षेत्र का आवेदन सामान्य सेवा में", "अपनी स्वायत्त परिषद वाली आय प्रमाण पत्र सेवा चुनें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Sewa Setu पोर्टल की हेल्पलाइन <strong>1800-345-3574</strong> है। कागज़ों के सवाल के लिए अपने सर्किल कार्यालय या DC कार्यालय के PFC में पूछें।",
    },
  ],
  official: [
    { href: "https://sewasetu.assam.gov.in/", title: "Sewa Setu Assam (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://sewasetu.assam.gov.in/site/service-apply/application-for-income-certificate", title: "Sewa Setu: Application for Income Certificate" },
    { href: "https://sivasagar.assam.gov.in/sites/default/files/public_utility/INCOME.pdf", title: "आय प्रमाण पत्र आवेदन फॉर्म (PDF, ज़िला शिवसागर)" },
  ],
  faq: [
    { q: "असम में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sewasetu.assam.gov.in पर रजिस्टर/लॉगिन करें, Apply Online में Application for Income Certificate चुनें, फॉर्म भरें, पते का प्रमाण, पहचान पत्र और ज़मीन का कागज़ अपलोड करें, शुल्क भरें और पावती रखें।" },
    { q: "असम आय प्रमाण पत्र की फीस कितनी है?", a: "Sewa Setu पर उपयोगकर्ता शुल्क ₹30 दिया गया है। PFC/CSC से आवेदन करने पर ₹30 सेवा शुल्क और ₹10 प्रति पेज प्रिंट शुल्क अलग लगता है।" },
    { q: "कौन से कागज़ अनिवार्य हैं?", a: "राजस्व विभाग के फॉर्म में पते का प्रमाण, पहचान पत्र और ज़मीन का कागज़ (Land Certificate) अनिवार्य हैं। वेतन पर्ची और दूसरे कागज़ वैकल्पिक हैं।" },
    { q: "कार्बी आंगलोंग या दीमा हसाओ में आय प्रमाण पत्र कैसे बनेगा?", a: "Sewa Setu पर KAAC (कार्बी आंगलोंग) और NCHAC (दीमा हसाओ) के लिए आय प्रमाण पत्र की अलग सेवाएं हैं; वहीं से आवेदन करें।" },
  ],
  related: [
    { href: "/states/assam-caste-certificate.html", emoji: "📜", title: "असम जाति प्रमाण पत्र", text: "SC/ST/OBC/MOBC और NCL" },
    { href: "/states/assam-domicile-certificate.html", emoji: "🏠", title: "असम स्थायी निवास प्रमाण पत्र", text: "PRC / डोमिसाइल" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.assam.gov.in/", label: "📝 Sewa Setu पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
