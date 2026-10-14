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
// - pib.gov.in PRID 2289473 (25 Jul 2026): Phase I Bihar 2025; Phase II
//   (Chhattisgarh, Goa, Gujarat, Kerala, MP, Rajasthan, TN, UP, WB, A&N,
//   Lakshadweep, Puducherry) October 2025 to April 2026; deletion categories
//   and safeguards; appeal to DM and CEO.
// Left out (not confirmable on an official page we could open): any fee or
// charge, delivery time of the PVC card, exact document list for Form 6,
// whether the old Voter Helpline app is still separate from ECINET.
export const gujaratVoterIdCard: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "voter-id-card",
  docHi: "वोटर आईडी कार्ड",
  title: "Gujarat Voter ID Card (e-EPIC) 2026: Apply & Status",
  description: "गुजरात वोटर आईडी कार्ड 2026: Form 6 से नया नाम, Form 8 से सुधार या पता बदलें, e-EPIC डाउनलोड, वोटर लिस्ट में नाम जांच, BLO संपर्क और SIR की स्थिति।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गुजरात वोटर आईडी कार्ड 2026: नया नाम, सुधार, e-EPIC, वोटर लिस्ट और SIR",
  lead: "गुजरात में वोटर आईडी (EPIC) के लिए आवेदन किसी राज्य सेवा पोर्टल पर नहीं, बल्कि भारत निर्वाचन आयोग के Voters' Service Portal (voters.eci.gov.in) या ECINET ऐप पर होता है। नया नाम जोड़ने के लिए Form 6 और नाम/पते में सुधार, दूसरी जगह शिफ्ट या नए कार्ड के लिए Form 8 भरें। गुजरात की मतदाता सूची, BLO की जानकारी और SIR की ताज़ा तारीखें राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट ceo.gujarat.gov.in पर मिलती हैं।",
  facts: [
    ["आवेदन", "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> / ECINET ऐप"],
    ["फॉर्म", "नया नाम: Form 6 · सुधार/शिफ्ट: Form 8"],
    ["हेल्पलाइन", "1950 (राष्ट्रीय: 1800-11-1950)"],
    ["SIR", "दूसरा चरण (अक्टूबर 2025 से अप्रैल 2026) पूरा"],
  ],
  notice: "<strong>SIR की स्थिति:</strong> भारत सरकार (PIB, 25 जुलाई 2026) के अनुसार गुजरात में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) दूसरे चरण में <strong>अक्टूबर 2025 से अप्रैल 2026</strong> के बीच हुआ। अब नाम जोड़ना, सुधार और नाम हटाना सामान्य तरीके से Form 6, 8 और 7 से होता है।",
  sections: [
    {
      id: "sir",
      title: "गुजरात में SIR (विशेष गहन पुनरीक्षण) की स्थिति",
      intro: "SIR में BLO घर-घर जाकर गणना फॉर्म बांटते और जमा करते हैं, फिर ड्राफ्ट सूची छपती है, दावे-आपत्ति का समय मिलता है और जांच के बाद अंतिम सूची छपती है। गुजरात में यह काम दूसरे चरण में <strong>अक्टूबर 2025 से अप्रैल 2026</strong> के बीच हुआ (9 राज्य और 3 केंद्र शासित प्रदेश)।",
      list: [
        "अगर SIR के बाद आपका नाम सूची में नहीं है, तो अब <strong>Form 6</strong> भरकर नाम जुड़वाएं। मतदाता सूची साल में चार बार (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर की योग्यता तिथि से) अपडेट होती है।",
        "नाम में गलती है या पता बदला है तो <strong>Form 8</strong> भरें।",
        "SIR में नाम केवल चार कारणों से हटाए जाते हैं: मृत्यु, स्थायी रूप से कहीं और चले जाना, एक से ज़्यादा जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना। इसकी जानकारी PIB की 25 जुलाई 2026 की विज्ञप्ति में है।",
      ],
      html: "SIR से जुड़े सवालों के लिए हमारा पेज <a href=\"/states/gujarat-sir-voter-list.html\">गुजरात SIR वोटर लिस्ट</a> देखें।",
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
        "राज्य में <strong>गुजरात</strong>, फिर अपना ज़िला और विधानसभा क्षेत्र चुनें।",
        "नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और पूरा पता भरें।",
        "हाल की फोटो, उम्र का प्रमाण और पते का प्रमाण (फॉर्म में दी गई सूची में से) अपलोड करें।",
        "फॉर्म जांचकर जमा करें और <strong>Reference ID</strong> लिख लें। इसी से Track Application में स्टेटस दिखेगा।",
        "BLO आपके पते पर जांच के लिए आ सकते हैं। मंज़ूरी के बाद नाम सूची में जुड़ता है और EPIC बनता है।",
      ],
      callout: { kind: "info", html: "ऑनलाइन न कर पाएं तो अपने <strong>BLO</strong> या निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO) कार्यालय से फॉर्म लेकर भर सकते हैं। BLO की जानकारी <a href=\"https://ceo.gujarat.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.gujarat.gov.in</a> पर या ECINET के Book-a-Call with BLO से मिलेगी।" },
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
        "CEO गुजरात की वेबसाइट के अनुसार सूची में नाम वेबसाइट पर, हेल्पलाइन 1950 पर, या अपना वोटर आईडी नंबर <strong>8511199899</strong> पर SMS करके जांचा जा सकता है। वेबसाइट पर वोटर के फॉर्म (Forms for Voter) और EPIC की जानकारी भी है।",
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
        "राज्य स्तर पर: मुख्य निर्वाचन अधिकारी, गुजरात (<a href=\"https://ceo.gujarat.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.gujarat.gov.in</a>)।",
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
    { href: "https://ceo.gujarat.gov.in/", title: "मुख्य निर्वाचन अधिकारी, गुजरात: मतदाता सूची और BLO" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289473", title: "SIR के चरण और सुरक्षा उपाय (PIB, 25 जुलाई 2026)" },
  ],
  faq: [
    { q: "गुजरात में नया वोटर आईडी कार्ड कैसे बनवाएं?", a: "voters.eci.gov.in या ECINET ऐप पर मोबाइल OTP से लॉगिन करके Form 6 भरें, फोटो, उम्र और पते का प्रमाण अपलोड करें और Reference ID संभाल कर रखें। ऑनलाइन न कर पाएं तो अपने BLO से फॉर्म भरवाएं।" },
    { q: "गुजरात में SIR की क्या स्थिति है?", a: "भारत सरकार (PIB, 25 जुलाई 2026) के अनुसार गुजरात में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) दूसरे चरण में अक्टूबर 2025 से अप्रैल 2026 के बीच हुआ। अब नाम जोड़ना, सुधार और नाम हटाना सामान्य तरीके से Form 6, 8 और 7 से होता है।" },
    { q: "18 साल पूरे होते ही नाम जुड़ सकता है?", a: "हां। साल में चार योग्यता तिथियां हैं: 1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर। 17 साल से ऊपर के युवा पहले से आवेदन कर सकते हैं; 18 साल पूरे होने वाली तिमाही में नाम जुड़ता है।" },
    { q: "मेरा BLO कौन है, कैसे पता करें?", a: "ECINET पर Book-a-Call with BLO से अनुरोध करें, या ceo.gujarat.gov.in पर BLO की जानकारी देखें। 1950 पर कॉल करके भी पूछ सकते हैं।" },
    { q: "वोटर कार्ड खो गया, क्या करें?", a: "voters.eci.gov.in या ECINET से e-EPIC डाउनलोड कर लें। छपा हुआ नया कार्ड चाहिए तो Form 8 में Replacement of EPIC चुनें।" },
    { q: "क्या वोटर आईडी के लिए आधार ज़रूरी है?", a: "नहीं। आधार देना स्वैच्छिक है। आधार न देने पर नाम जोड़ने का आवेदन खारिज नहीं होता और न ही सूची से नाम हटता है।" },
  ],
  related: [
    { href: "/states/gujarat-sir-voter-list.html", emoji: "📋", title: "गुजरात SIR वोटर लिस्ट", text: "SIR में नाम जांच और दावे" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "विशेष गहन पुनरीक्षण की पूरी जानकारी" },
    { href: "/service/voter-id-card.html", emoji: "🗳️", title: "वोटर आईडी कार्ड: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात निवास प्रमाण पत्र", text: "पते का प्रमाण" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में वोटर आईडी कार्ड",
  aside: [
    { href: "https://voters.eci.gov.in/", label: "📝 Voters' Portal पर आवेदन करें" },
    { href: "/states/gujarat-sir-voter-list.html", label: "📋 गुजरात SIR वोटर लिस्ट" },
  ],
};
