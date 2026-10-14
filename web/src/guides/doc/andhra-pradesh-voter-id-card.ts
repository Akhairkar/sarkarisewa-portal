import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; voters.eci.gov.in and eci.gov.in refuse our
// checker, so national facts come from PIB releases of ECI press notes):
// - pib.gov.in PRID 1845738 (28 Jul 2022): four qualifying dates (1 Jan,
//   1 Apr, 1 Jul, 1 Oct) after the RP Act amendment, quarterly roll updates,
//   advance applications from 17+, new forms from 1.8.22, single Form 8 for
//   correction, Form 6B for Aadhaar (no inclusion denied / entry deleted for
//   not giving Aadhaar).
// - ecisveep.nic.in (search extract): Form 6 new registration, Form 7
//   deletion/objection, Form 8 shifting/correction/replacement EPIC/PwD
//   marking; Voter Helpline app (name search, forms, grievances).
// - pib.gov.in PRID 2183805 (29 Oct 2025): National Contact Centre
//   1800-11-1950, 8 AM to 8 PM daily; State/District Contact Centres in office
//   hours; Book-a-Call with BLO on ECINET, disposal within 48 hours;
//   complaints@eci.gov.in.
// - pib.gov.in PRID 2217429 (22 Jan 2026): ECINET launched, includes voter
//   registration, roll search, Track Your Application, Book-a-call with BLO,
//   e-EPIC download; 22 languages.
// - ceo.gujarat.gov.in EPIC page (search extract): EPIC is made only from the
//   roll database; holding an EPIC alone gives no right to vote.
// - pib.gov.in PRID 2260955 (14 May 2026): SIR Phase III in 16 States and 3 UTs,
//   Annexure-I schedule (qualifying date, house-to-house visits, draft and final
//   roll dates).
// - pib.gov.in PRID 2289473 (25 Jul 2026): deletion categories, safeguards,
//   appeal to DM and further to CEO.
// - newsonair.gov.in (30 Sep 2026): AP notice phase to 10 Oct, final roll 16 Oct 2026.
// Left out (not confirmable on an official page we could open): any fee or
// charge, delivery time of the PVC card, exact document list for Form 6,
// whether the old Voter Helpline app is still separate from ECINET.
export const andhraPradeshVoterIdCard: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "voter-id-card",
  docHi: "वोटर आईडी कार्ड",
  title: "Andhra Pradesh Voter ID Card (e-EPIC) 2026",
  description: "आंध्र प्रदेश वोटर आईडी कार्ड 2026: Form 6 से नया नाम, Form 8 से सुधार या पता बदलें, e-EPIC डाउनलोड, वोटर लिस्ट में नाम जांच, BLO संपर्क और SIR की स्थिति।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "आंध्र प्रदेश वोटर आईडी कार्ड 2026: नया नाम, सुधार, e-EPIC, वोटर लिस्ट और SIR",
  lead: "आंध्र प्रदेश में वोटर आईडी (EPIC) के लिए आवेदन किसी राज्य सेवा पोर्टल पर नहीं, बल्कि भारत निर्वाचन आयोग के Voters' Service Portal (voters.eci.gov.in) या ECINET ऐप पर होता है। नया नाम जोड़ने के लिए Form 6 और नाम/पते में सुधार, दूसरी जगह शिफ्ट या नए कार्ड के लिए Form 8 भरें। आंध्र प्रदेश की मतदाता सूची, BLO की जानकारी और SIR की ताज़ा तारीखें राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट ceoandhra.nic.in पर मिलती हैं।",
  facts: [
    ["आवेदन", "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> / ECINET ऐप"],
    ["फॉर्म", "नया नाम: Form 6 · सुधार/शिफ्ट: Form 8"],
    ["हेल्पलाइन", "1950 (राष्ट्रीय: 1800-11-1950)"],
    ["SIR", "तीसरा चरण; अंतिम सूची 16 अक्टूबर 2026 (तय)"],
  ],
  notice: "<strong>SIR (तीसरा चरण):</strong> चुनाव आयोग ने 14 मई 2026 को आंध्र प्रदेश को मतदाता सूची के विशेष गहन पुनरीक्षण (SIR) के <strong>तीसरे चरण</strong> में शामिल किया। योग्यता तिथि <strong>1 जुलाई 2026</strong> है। आकाशवाणी समाचार (30 सितंबर 2026) के अनुसार आयोग ने कार्यक्रम बढ़ाया: दावे-आपत्ति का निपटारा 10 अक्टूबर तक और <strong>अंतिम मतदाता सूची 16 अक्टूबर 2026</strong> को छपनी है। तारीखें कई बार बढ़ाई गई हैं, इसलिए ताज़ा तारीख CEO वेबसाइट पर ज़रूर देखें।",
  sections: [
    {
      id: "sir",
      title: "आंध्र प्रदेश में SIR (विशेष गहन पुनरीक्षण) की स्थिति",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> के अनुसार आंध्र प्रदेश SIR के तीसरे चरण में है और इसकी योग्यता तिथि <strong>1 जुलाई 2026</strong> है। इसमें BLO घर-घर जाकर गणना फॉर्म देते और जमा करते हैं, फिर ड्राफ्ट सूची छपती है, दावे-आपत्ति का समय मिलता है और जांच के बाद अंतिम सूची छपती है। आकाशवाणी समाचार (30 सितंबर 2026) के अनुसार आयोग ने कार्यक्रम बढ़ाया: दावे-आपत्ति का निपटारा 10 अक्टूबर तक और <strong>अंतिम मतदाता सूची 16 अक्टूबर 2026</strong> को छपनी है।",
      list: [
        "ड्राफ्ट या अंतिम सूची में अपना और परिवार का नाम CEO वेबसाइट या <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> पर ज़रूर जांचें।",
        "नाम छूट गया है तो <strong>Form 6</strong>, गलती है तो <strong>Form 8</strong>, और किसी गलत नाम (मृत/शिफ्ट/डुप्लीकेट) पर आपत्ति के लिए <strong>Form 7</strong> भरें। दावे-आपत्ति का समय निकल जाने के बाद भी ये फॉर्म सामान्य तरीके से भरे जा सकते हैं, क्योंकि मतदाता सूची साल में चार बार अपडेट होती है।",
        "SIR में नाम केवल चार कारणों से हटाए जाते हैं: मृत्यु, स्थायी रूप से कहीं और चले जाना, एक से ज़्यादा जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना। हटाने से पहले BLO की जांच और कारण दर्ज करना ज़रूरी है।",
        "फैसले से असंतुष्ट हों तो ज़िला मजिस्ट्रेट (DM) / नामित अपीलीय अधिकारी के पास अपील, और उसके बाद मुख्य निर्वाचन अधिकारी (CEO) के पास जाने का रास्ता है।",
      ],
      html: "SIR से जुड़े सवालों के लिए हमारा पेज <a href=\"/states/andhra-pradesh-sir-voter-list.html\">आंध्र प्रदेश SIR वोटर लिस्ट</a> देखें।",
    },
    {
      id: "patrata",
      title: "कौन वोटर बन सकता है",
      list: [
        "आप <strong>भारत के नागरिक</strong> हों।",
        "योग्यता तिथि पर आपकी उम्र <strong>18 साल</strong> पूरी हो। 2022 से साल में चार योग्यता तिथियां हैं: <strong>1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर</strong>। यानी 18 साल होने के बाद अगली तिमाही में नाम जुड़ सकता है।",
        "<strong>17 साल से ऊपर</strong> के युवा पहले से (advance) आवेदन कर सकते हैं; 18 साल पूरे होने वाली तिमाही में नाम जुड़ता है।",
        "नाम उसी जगह की सूची में जुड़ता है जहां आप आम तौर पर रहते हैं। एक व्यक्ति का नाम एक ही जगह होना चाहिए।",
      ],
      callout: { kind: "info", html: "वोटर आईडी कार्ड (EPIC) मतदाता सूची के डेटा से ही बनता है। सिर्फ कार्ड होने से वोट का अधिकार नहीं मिलता; वोट वही डाल सकता है जिसका <strong>नाम मतदाता सूची में</strong> है। इसलिए चुनाव से पहले सूची में अपना नाम ज़रूर जांचें।" },
    },
    {
      id: "form",
      title: "कौन सा फॉर्म किस काम के लिए",
      table: {
        head: ["फॉर्म", "किस काम के लिए"],
        rows: [
          ["<strong>Form 6</strong>", "पहली बार मतदाता सूची में नाम जुड़वाने (नया वोटर) के लिए"],
          ["<strong>Form 6A</strong>", "विदेश में रहने वाले भारतीय नागरिक (Overseas elector) के लिए"],
          ["<strong>Form 6B</strong>", "पहले से बने वोटर का आधार नंबर जोड़ने के लिए (स्वैच्छिक)"],
          ["<strong>Form 7</strong>", "सूची से नाम हटवाने या किसी गलत नाम पर आपत्ति के लिए (जैसे मृत्यु, स्थायी रूप से कहीं और चले जाना)"],
          ["<strong>Form 8</strong>", "पता बदलना/शिफ्ट होना, नाम-उम्र आदि में सुधार, खोए/खराब कार्ड की जगह नया EPIC, दिव्यांग (PwD) के रूप में दर्ज कराना"],
        ],
      },
      callout: { kind: "ok", html: "आधार देना ज़रूरी नहीं है। चुनाव आयोग के निर्देश के अनुसार आधार नंबर न देने पर न तो नाम जोड़ने का आवेदन खारिज होगा, न सूची से नाम हटेगा।" },
    },
    {
      id: "online",
      title: "नया वोटर आईडी: ऑनलाइन Form 6 कैसे भरें",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> खोलें या ECINET ऐप इंस्टॉल करें। मोबाइल नंबर और OTP से अकाउंट बनाकर लॉगिन करें।",
        "<strong>Form 6</strong> (New registration for general electors) चुनें।",
        "राज्य में <strong>आंध्र प्रदेश</strong>, फिर अपना ज़िला और विधानसभा क्षेत्र चुनें।",
        "नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और पूरा पता भरें।",
        "हाल की फोटो, उम्र का प्रमाण और पते का प्रमाण (फॉर्म में दी गई सूची में से) अपलोड करें।",
        "फॉर्म जांचकर जमा करें और <strong>Reference ID</strong> लिख लें। इसी से Track Application में स्टेटस दिखेगा।",
        "BLO आपके पते पर जांच के लिए आ सकते हैं। मंज़ूरी के बाद नाम सूची में जुड़ता है और EPIC बनता है।",
      ],
      callout: { kind: "info", html: "ऑनलाइन न कर पाएं तो अपने <strong>BLO</strong> या निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO) कार्यालय से फॉर्म लेकर भर सकते हैं। BLO की जानकारी <a href=\"https://ceoandhra.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoandhra.nic.in</a> पर या ECINET के Book-a-Call with BLO से मिलेगी।" },
    },
    {
      id: "sudhar",
      title: "सुधार, पता बदलना या नया कार्ड (Form 8)",
      intro: "2022 से सुधार के सभी काम एक ही <strong>Form 8</strong> से होते हैं। इसमें आप एक काम चुनते हैं:",
      list: [
        "<strong>Shifting of residence</strong>: उसी क्षेत्र में या दूसरे क्षेत्र में घर बदला है",
        "<strong>Correction of entries</strong>: नाम, उम्र, लिंग, फोटो, रिश्तेदार का नाम आदि में गलती",
        "<strong>Replacement of EPIC</strong>: कार्ड खो गया, फट गया या खराब हो गया",
        "<strong>Marking as PwD</strong>: दिव्यांग के रूप में दर्ज कराना",
      ],
      html: "Form 8 भी <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET पर लॉगिन करके भरें और Reference ID से स्टेटस देखें।",
    },
    {
      id: "e-epic",
      title: "e-EPIC डाउनलोड और वोटर लिस्ट में नाम जांच",
      list: [
        "<strong>e-EPIC</strong> (मोबाइल पर रखने लायक डिजिटल वोटर कार्ड) <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET से लॉगिन करके डाउनलोड होता है।",
        "<strong>सूची में नाम</strong>: पोर्टल या ECINET पर Search in Electoral Roll में EPIC नंबर या नाम-विवरण से खोजें।",
        "CEO आंध्र प्रदेश की वेबसाइट पर <strong>वोटर लिस्ट में नाम जांच</strong> और <strong>Know your DEOs, EROs, BLOs</strong> (अपने BLO की जानकारी) का विकल्प है।",
        "e-EPIC डाउनलोड न हो या नाम न मिले तो 1950 पर कॉल करें या अपने BLO से बात करें।",
      ],
      html: "पूरा तरीका: <a href=\"/service/e-voter-epic-download.html\">e-EPIC डाउनलोड गाइड</a>।",
    },
    {
      id: "blo",
      title: "BLO और हेल्पलाइन से संपर्क",
      list: [
        "<strong>Book-a-Call with BLO</strong>: ECINET पर यह सुविधा है जिससे आप सीधे अपने बूथ के BLO से बात का अनुरोध कर सकते हैं। आयोग ने अधिकारियों को ऐसे अनुरोध 48 घंटे में निपटाने को कहा है।",
        "<strong>1950</strong>: वोटर हेल्पलाइन। राष्ट्रीय संपर्क केंद्र का टोल-फ्री नंबर <strong>1800-11-1950</strong> रोज़ सुबह 8 से रात 8 बजे तक चलता है। राज्य और ज़िला संपर्क केंद्र कार्य दिवसों में दफ्तर के समय पर स्थानीय भाषा में मदद करते हैं।",
        "ईमेल से शिकायत: complaints@eci.gov.in",
        "राज्य स्तर पर: मुख्य निर्वाचन अधिकारी, आंध्र प्रदेश (<a href=\"https://ceoandhra.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoandhra.nic.in</a>)।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["सूची में नाम नहीं मिला", "पहले EPIC नंबर और नाम दोनों से खोजें; फिर भी न मिले तो Form 6 भरें"],
          ["नाम, उम्र या फोटो गलत", "Form 8 में Correction of entries चुनें"],
          ["घर बदल लिया", "Form 8 में Shifting of residence चुनें; नई जगह की सूची में नाम जुड़ेगा"],
          ["कार्ड खो गया", "e-EPIC डाउनलोड करें, या Form 8 में Replacement of EPIC चुनें"],
          ["परिवार में किसी की मृत्यु", "Form 7 से नाम हटवाएं (मृत्यु प्रमाण पत्र साथ रखें)"],
          ["आवेदन बहुत दिन से अटका", "Reference ID से Track Application देखें; 1950 पर कॉल करें या BLO/ERO से मिलें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (भारत निर्वाचन आयोग): Form 6, 7, 8, e-EPIC, स्टेटस" },
    { href: "https://ceoandhra.nic.in/", title: "मुख्य निर्वाचन अधिकारी, आंध्र प्रदेश: मतदाता सूची और BLO" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में नया वोटर आईडी कार्ड कैसे बनवाएं?", a: "voters.eci.gov.in या ECINET ऐप पर मोबाइल OTP से लॉगिन करके Form 6 भरें, फोटो, उम्र और पते का प्रमाण अपलोड करें और Reference ID संभाल कर रखें। ऑनलाइन न कर पाएं तो अपने BLO से फॉर्म भरवाएं।" },
    { q: "आंध्र प्रदेश में SIR की क्या स्थिति है?", a: "चुनाव आयोग ने 14 मई 2026 को आंध्र प्रदेश को मतदाता सूची के विशेष गहन पुनरीक्षण (SIR) के तीसरे चरण में शामिल किया। योग्यता तिथि 1 जुलाई 2026 है। आकाशवाणी समाचार (30 सितंबर 2026) के अनुसार आयोग ने कार्यक्रम बढ़ाया: दावे-आपत्ति का निपटारा 10 अक्टूबर तक और अंतिम मतदाता सूची 16 अक्टूबर 2026 को छपनी है। तारीखें कई बार बढ़ाई गई हैं, इसलिए ताज़ा तारीख CEO वेबसाइट पर ज़रूर देखें।" },
    { q: "18 साल पूरे होते ही नाम जुड़ सकता है?", a: "हां। साल में चार योग्यता तिथियां हैं: 1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर। 17 साल से ऊपर के युवा पहले से आवेदन कर सकते हैं; 18 साल पूरे होने वाली तिमाही में नाम जुड़ता है।" },
    { q: "मेरा BLO कौन है, कैसे पता करें?", a: "ECINET पर Book-a-Call with BLO से अनुरोध करें, या ceoandhra.nic.in पर BLO की जानकारी देखें। 1950 पर कॉल करके भी पूछ सकते हैं।" },
    { q: "वोटर कार्ड खो गया, क्या करें?", a: "voters.eci.gov.in या ECINET से e-EPIC डाउनलोड कर लें। छपा हुआ नया कार्ड चाहिए तो Form 8 में Replacement of EPIC चुनें।" },
    { q: "क्या वोटर आईडी के लिए आधार ज़रूरी है?", a: "नहीं। आधार देना स्वैच्छिक है। आधार न देने पर नाम जोड़ने का आवेदन खारिज नहीं होता और न ही सूची से नाम हटता है।" },
  ],
  related: [
    { href: "/states/andhra-pradesh-sir-voter-list.html", emoji: "📋", title: "आंध्र प्रदेश SIR वोटर लिस्ट", text: "SIR में नाम जांच और दावे" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "विशेष गहन पुनरीक्षण की पूरी जानकारी" },
    { href: "/service/voter-id-card.html", emoji: "🗳️", title: "वोटर आईडी कार्ड: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "पते का प्रमाण" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में वोटर आईडी कार्ड",
  aside: [
    { href: "https://voters.eci.gov.in/", label: "📝 Voters' Portal पर आवेदन करें" },
    { href: "/states/andhra-pradesh-sir-voter-list.html", label: "📋 आंध्र प्रदेश SIR वोटर लिस्ट" },
  ],
};
