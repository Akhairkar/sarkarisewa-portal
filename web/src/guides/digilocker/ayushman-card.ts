import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory: issuer "Pradhan Mantri Jan Arogya Yojana"
//   (in.gov.pmjay) with document type "Pradhan Mantri Jan Arogya Yojana";
//   issuer "National Health Authority" (in.gov.nha) also listed.
// - PIB, 10 Nov 2022 (PRID 1874894): DigiLocker completed level-2 integration
//   with ABDM; DigiLocker usable as a health locker / PHR app (vaccination
//   records, prescriptions, lab reports, discharge summaries); ABHA creation
//   in DigiLocker (level 1); ABHA holders can link records from ABDM-registered
//   facilities; scan and upload old records; share with ABDM-registered
//   professionals; available to all registered users.
// - PIB, 20 Oct 2023 (PRID 1969429): NHA's Ayushman App (launched 13 Sep 2023)
//   for Ayushman Card creation with self-verification in 4 steps; anyone can
//   help a beneficiary create a card; cover Rs 5 lakh per family per year for
//   secondary and tertiary hospitalisation.
// - DigiLocker Ask our Experts (18 Oct 2024): name must match Aadhaar; only
//   the issuer can change data.
// Left out: the fields DigiLocker asks for the PMJAY card (nha.gov.in and
// beneficiary.nha.gov.in were not reachable to confirm); helpline numbers.
export const ayushmanCard: DocGuide = {
  crumbs: crumbs("आयुष्मान कार्ड"),
  docHi: "आयुष्मान कार्ड",
  title: "DigiLocker से आयुष्मान कार्ड कैसे डाउनलोड करें | SarkariSewa India",
  description: "आयुष्मान कार्ड (PM-JAY) DigiLocker में कैसे लाएं, कार्ड बना ही नहीं तो Ayushman App से कैसे बनता है, DigiLocker हेल्थ लॉकर और ABHA से रिपोर्ट कैसे जोड़ें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से आयुष्मान कार्ड कैसे डाउनलोड करें (और हेल्थ लॉकर)",
  lead: "आयुष्मान भारत PM-JAY का कार्ड DigiLocker में issuer “Pradhan Mantri Jan Arogya Yojana” के नाम से आता है। शर्त यह है कि आपका आयुष्मान कार्ड पहले से बना और स्वीकृत हो। Search Documents में “Pradhan Mantri Jan Arogya Yojana” खोजें, मांगी गई जानकारी भरें और कार्ड Issued Documents में लाएं। कार्ड नहीं बना है तो पहले NHA के Ayushman App या कार्ड बनाने वाले केंद्र से बनवाना होगा।",
  facts: [
    ["DigiLocker में issuer", "Pradhan Mantri Jan Arogya Yojana"],
    ["योजना चलाने वाला", "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)"],
    ["कवर", "₹5 लाख प्रति परिवार प्रति वर्ष (PIB)"],
    ["कार्ड बनाने का ऐप", "Ayushman App (NHA)"],
  ],
  sections: [
    {
      id: "steps",
      title: "DigiLocker में आयुष्मान कार्ड लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर उसी व्यक्ति के आधार से लॉगिन करें जिसका आयुष्मान कार्ड है।",
        "<strong>Search Documents</strong> में “Ayushman” या “Pradhan Mantri Jan Arogya Yojana” लिखें।",
        "issuer <strong>Pradhan Mantri Jan Arogya Yojana</strong> का दस्तावेज़ चुनें।",
        "स्क्रीन पर मांगी गई जानकारी भरें और सहमति देकर दस्तावेज़ लाएं।",
        "कार्ड <strong>Issued Documents</strong> में दिखेगा; अस्पताल में दिखाने या प्रिंट के लिए PDF डाउनलोड करें।",
      ],
      callout: { kind: "warn", html: "परिवार के हर सदस्य का आयुष्मान कार्ड अलग होता है और DigiLocker सिर्फ उसी व्यक्ति के अकाउंट में उसका दस्तावेज़ देता है। बुज़ुर्ग माता-पिता का कार्ड उनके अपने आधार वाले DigiLocker अकाउंट में लाएं (एक मोबाइल नंबर से पांच तक आधार-सत्यापित अकाउंट बन सकते हैं)।" },
    },
    {
      id: "card-nahi",
      title: "आयुष्मान कार्ड बना ही नहीं है तो",
      list: [
        "<strong>Ayushman App (NHA):</strong> PIB (अक्टूबर 2023) के अनुसार इस ऐप में self-verification की सुविधा है, जिससे 4 आसान स्टेप में बिना केंद्र गए कार्ड बनाया जा सकता है, और कोई भी व्यक्ति लाभार्थी की मदद कर सकता है।",
        "कार्ड तभी बनेगा जब आपका नाम PM-JAY की पात्र सूची में हो। पात्रता और योजना की जानकारी: <a href=\"/service/ayushman-bharat.html\">आयुष्मान भारत PM-JAY गाइड</a>।",
        "eKYC पूरा होने और कार्ड स्वीकृत होने के बाद ही वह डाउनलोड और DigiLocker में मिलने लायक होता है।",
        "ऐप सिर्फ official स्टोर से, NHA के नाम वाला ही इंस्टॉल करें; कार्ड के नाम पर पैसे मांगने वाले लिंक से बचें।",
      ],
    },
    {
      id: "health-locker",
      title: "DigiLocker को हेल्थ लॉकर की तरह इस्तेमाल करें (ABHA)",
      intro: "PIB (नवंबर 2022) के अनुसार DigiLocker आयुष्मान भारत डिजिटल मिशन (ABDM) से जुड़ा है और सभी रजिस्टर्ड यूज़र इसे Personal Health Records (PHR) ऐप की तरह इस्तेमाल कर सकते हैं:",
      list: [
        "DigiLocker से <strong>ABHA (Ayushman Bharat Health Account)</strong> बनाया जा सकता है।",
        "ABHA धारक ABDM से जुड़े अस्पताल और लैब के रिकॉर्ड (जैसे लैब रिपोर्ट, डिस्चार्ज समरी, पर्चे, टीकाकरण रिकॉर्ड) DigiLocker में लिंक करके देख सकते हैं।",
        "पुरानी रिपोर्ट स्कैन करके अपलोड कर सकते हैं (ये Uploaded होंगी, Issued नहीं)।",
        "चुने हुए रिकॉर्ड ABDM में रजिस्टर्ड डॉक्टर/स्वास्थ्यकर्मी के साथ शेयर कर सकते हैं।",
      ],
      callout: { kind: "info", html: "आयुष्मान कार्ड (PM-JAY, इलाज का कवर) और ABHA (हेल्थ रिकॉर्ड का नंबर) अलग चीज़ें हैं। ABHA के बारे में: <a href=\"/service/abha-health-card.html\">ABHA हेल्थ कार्ड</a>।" },
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["DigiLocker में कार्ड नहीं मिला", "पहले जांचें कि आपका कार्ड बन चुका और स्वीकृत है। eKYC अधूरा है तो Ayushman App या कार्ड बनाने वाले केंद्र पर पूरा करें।"],
          ["नाम मेल नहीं खाता", "आयुष्मान रिकॉर्ड और आधार में नाम अलग होने पर DigiLocker दस्तावेज़ नहीं देता। eKYC आधार से होता है; सुधार के लिए कार्ड बनाने वाले केंद्र से संपर्क करें।"],
          ["परिवार के सदस्य का कार्ड नहीं आ रहा", "हर सदस्य का कार्ड उसके अपने DigiLocker में आएगा।"],
          ["अस्पताल ने कार्ड नहीं माना", "अस्पताल की PM-JAY हेल्प डेस्क से बात करें; आधार कार्ड साथ रखें।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
  ],
  official: [
    { href: "https://nha.gov.in/", title: "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA)", note: "nha.gov.in" },
    { href: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1969429", title: "PIB: Ayushman App से कार्ड बनाना", note: "20 अक्टूबर 2023" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1874894", title: "PIB: DigiLocker हेल्थ लॉकर और ABHA", note: "10 नवंबर 2022" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "DigiLocker में आयुष्मान कार्ड किस नाम से मिलेगा?", a: "issuer का नाम “Pradhan Mantri Jan Arogya Yojana” है। Search में “Ayushman” या यह नाम लिखकर खोजें।" },
    { q: "आयुष्मान कार्ड DigiLocker में क्यों नहीं दिख रहा?", a: "सबसे आम वजह यह है कि कार्ड अभी बना/स्वीकृत नहीं हुआ या eKYC अधूरा है। दूसरी वजह नाम का आधार से मेल न खाना हो सकती है।" },
    { q: "क्या DigiLocker से नया आयुष्मान कार्ड बन सकता है?", a: "नहीं, DigiLocker पहले से बने कार्ड को दिखाता है। नया कार्ड NHA के Ayushman App या कार्ड बनाने वाले केंद्र से बनता है, बशर्ते आप पात्र हों।" },
    { q: "आयुष्मान कार्ड और ABHA कार्ड में क्या अंतर है?", a: "आयुष्मान कार्ड PM-JAY योजना में इलाज के कवर (₹5 लाख प्रति परिवार प्रति वर्ष) के लिए है। ABHA आपका डिजिटल हेल्थ अकाउंट नंबर है, जिससे मेडिकल रिकॉर्ड जुड़ते हैं; DigiLocker से ABHA भी बनाया जा सकता है।" },
    { q: "क्या DigiLocker में मेडिकल रिपोर्ट रख सकते हैं?", a: "हां। PIB के अनुसार DigiLocker हेल्थ लॉकर की तरह काम करता है: ABHA से जुड़े अस्पतालों/लैब की रिपोर्ट लिंक कर सकते हैं और पुरानी रिपोर्ट स्कैन करके अपलोड कर सकते हैं।" },
  ],
  related: cards("ayushmanGuide", "abha", "aadhaar", "insurance", "income", "hub"),
  aside: ASIDE,
};
