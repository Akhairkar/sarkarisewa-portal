import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory (directory.apisetu.gov.in), DigiLocker issuers and their
//   document types, searched 4 Oct 2026. Board names are copied as listed:
//   UP State Board of High School and Intermediate Education (X, XII marksheet);
//   Bihar School Examination Board (X, XII marksheet); MP State Board of
//   Secondary Education (X, XII); Rajasthan Board of Secondary Education (X,
//   XII marksheet and passing certificate); Maharashtra State Board of Secondary
//   and Higher Secondary Education, Pune (X, XII marksheet, passing and
//   migration); Board of School Education Haryana (X, XII, Haryana Open School,
//   TET); Punjab School Education Board (X, XII, V, I-IX); Gujarat Secondary and
//   Higher Secondary Education Board (X, XII marksheet and passing);
//   Jharkhand State Board (Jharkhand Academic Council) (X, XII marksheet and
//   passing); Chhattisgarh State Board of Secondary Education (X, XII);
//   Uttarakhand State Board of School Education (X, XII, XII migration, TET);
//   H. P. Board Of School Education (X, XII, migration); West Bengal Board of
//   Secondary Education (X marksheet, passing); West Bengal Council of Higher
//   Secondary Education (XII); Board of Secondary Education, Odisha (X);
//   Board Of Secondary Education, Andhra Pradesh (X); Board Of Secondary
//   Education, Telangana State (X); Karnataka School Examination and Assessment
//   Board (X, XII); Kerala State Board of Public Examinations (X); Tamil Nadu
//   State Board (Directorate of Government Examinations) (X, XII); Board of
//   Secondary Education, Assam (X); Goa (X, XII); Delhi Board of School
//   Education (X, XII); J&K Board of School Education (X, XII); CISCE (X, XII);
//   National Institute of Open Schooling (X, XII).
// - DigiLocker Ask our Experts (18 Oct 2024): records only for the years the
//   board has pushed; name must match Aadhaar; ask the board; support ticket
//   details.
// Left out: year ranges per board (DigiLocker's Oct 2024 answers named some,
// but they change as boards push legacy data).
export const stateBoardMarksheet: DocGuide = {
  crumbs: crumbs("राज्य बोर्ड मार्कशीट"),
  docHi: "राज्य बोर्ड मार्कशीट",
  title: "DigiLocker से राज्य बोर्ड की मार्कशीट | SarkariSewa India",
  description: "UP, बिहार, MP, राजस्थान, महाराष्ट्र समेत राज्य बोर्डों की 10वीं-12वीं मार्कशीट DigiLocker से कैसे निकालें, किस बोर्ड का क्या मिलता है, रिकॉर्ड न मिले तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से राज्य बोर्ड की 10वीं-12वीं मार्कशीट कैसे निकालें",
  lead: "ज़्यादातर राज्य बोर्ड DigiLocker से जुड़े हैं, लेकिन हर बोर्ड हर साल की मार्कशीट नहीं देता। DigiLocker में Search Documents में अपने बोर्ड का नाम खोजें, Class X या Class XII Marksheet चुनें, रोल नंबर और पासिंग वर्ष डालें। आपका साल न मिले तो इसका मतलब है कि बोर्ड ने वह डेटा DigiLocker पर नहीं भेजा; तब बोर्ड से ही संपर्क करना होगा।",
  facts: [
    ["कौन देता है", "आपका परीक्षा बोर्ड (DigiLocker सिर्फ दिखाता है)"],
    ["आम तौर पर मांगा जाता है", "रोल नंबर, पासिंग वर्ष"],
    ["नाम की शर्त", "मार्कशीट और आधार में नाम एक जैसा"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "board-list",
      title: "किस बोर्ड का क्या DigiLocker में दर्ज है",
      intro: "नीचे की सूची API Setu (DigiLocker का issuer प्लेटफॉर्म) पर 4 अक्टूबर 2026 को दर्ज दस्तावेज़ प्रकारों से बनी है। सूची में होने का मतलब है कि बोर्ड जुड़ा है; आपका वर्ष उपलब्ध है या नहीं, यह खोजने पर ही पता चलेगा।",
      table: {
        head: ["बोर्ड (DigiLocker में नाम)", "दर्ज दस्तावेज़"],
        rows: [
          ["UP State Board of High School and Intermediate Education", "Class X, Class XII Marksheet"],
          ["Bihar School Examination Board", "Class X, Class XII Marksheet"],
          ["MP State Board of Secondary Education", "Class X, Class XII Marksheet"],
          ["Rajasthan Board of Secondary Education", "Class X, XII Marksheet; X, XII Passing Certificate"],
          ["Maharashtra State Board of Secondary and Higher Secondary Education, Pune", "X, XII Marksheet; Passing; Migration Certificate"],
          ["Gujarat Secondary and Higher Secondary Education Board", "X, XII Marksheet; Passing Certificate"],
          ["Board of School Education Haryana", "X, XII Marksheet; Haryana Open School; TET"],
          ["Punjab School Education Board", "X, XII Marksheet; Class V और I-IX Marksheets"],
          ["Jharkhand State Board (Jharkhand Academic Council)", "X, XII Marksheet; Passing Certificate"],
          ["Chhattisgarh State Board of Secondary Education", "Class X, Class XII Marksheet"],
          ["Uttarakhand State Board of School Education", "X, XII Marksheet; XII Migration; TET"],
          ["H. P. Board Of School Education", "X, XII Marksheet; Migration Certificate"],
          ["West Bengal Board of Secondary Education / WB Council of Higher Secondary Education", "Class X (WBBSE), Class XII (WBCHSE)"],
          ["Karnataka School Examination and Assessment Board", "Class X, Class XII Marksheet"],
          ["Tamil Nadu State Board (Directorate of Government Examinations)", "Class X, Class XII Marksheet"],
          ["Odisha, Andhra Pradesh, Telangana, Kerala, Assam के बोर्ड", "Class X Marksheet (कुछ में Passing Certificate भी)"],
          ["CISCE, NIOS, Delhi Board of School Education, J&K Board", "Class X, Class XII Marksheet"],
        ],
      },
      callout: { kind: "info", html: "CBSE की प्रक्रिया अलग है (स्कूल से मिलने वाला Security PIN)। उसके लिए देखें <a href=\"/digilocker/cbse-marksheet.html\">DigiLocker से CBSE मार्कशीट</a>।" },
    },
    {
      id: "steps",
      title: "DigiLocker ऐप और वेबसाइट में स्टेप",
      steps: [
        "DigiLocker ऐप (Google Play/App Store) या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> खोलें और आधार/मोबाइल नंबर से लॉगिन करें।",
        "<strong>Search Documents</strong> में अपने बोर्ड का नाम या राज्य लिखें (जैसे “Bihar School Examination Board”, “Rajasthan Board”)। एक ही राज्य में कई issuer हो सकते हैं, जैसे ओपन स्कूल या मदरसा बोर्ड; सही बोर्ड चुनें।",
        "<strong>Class X Marksheet</strong> या <strong>Class XII Marksheet</strong> (या Passing/Migration Certificate) चुनें।",
        "रोल नंबर, पासिंग वर्ष और स्क्रीन पर मांगी गई दूसरी जानकारी अपनी पुरानी मार्कशीट या एडमिट कार्ड से वैसे ही भरें।",
        "सहमति (consent) देकर दस्तावेज़ लाएं। सफल होने पर मार्कशीट <strong>Issued Documents</strong> में दिखेगी; वहां से PDF डाउनलोड करें या शेयर करें।",
      ],
    },
    {
      id: "valid",
      title: "DigiLocker की मार्कशीट कितनी मान्य है",
      intro: `${RULE_9A} इसका फायदा सबसे ज़्यादा तब है जब नौकरी या एडमिशन वाला संस्थान DigiLocker से सीधे दस्तावेज़ ले (requester के रूप में)।`,
      list: [
        "जिन फॉर्म में “DigiLocker से दस्तावेज़ लाएं” का विकल्प है, वहां Issued Document शेयर करें; अलग से स्कैन अपलोड की ज़रूरत कम पड़ती है।",
        "Uploaded Documents में खुद डाली गई स्कैन कॉपी issuer की ओर से जारी नहीं मानी जाती।",
        "दस्तावेज़ सत्यापन (document verification) में मूल प्रति मांगी जाए तो वह भी साथ रखें।",
      ],
    },
    {
      id: "galtiyan",
      title: "रिकॉर्ड न मिले तो क्या करें",
      table: {
        head: ["दिक्कत", "वजह और हल"],
        rows: [
          ["No record found / Invalid details", "रोल नंबर, वर्ष और बोर्ड का नाम दोबारा जांचें। 10वीं और 12वीं का रोल नंबर अलग होता है।"],
          ["आपका साल सूची में ही नहीं", "बोर्ड ने उस साल का डेटा DigiLocker पर नहीं भेजा। DigiLocker खुद डेटा नहीं डालता; बोर्ड से अनुरोध करें कि पुराना रिकॉर्ड भी उपलब्ध कराए।"],
          ["नाम मेल नहीं खाता", "मार्कशीट और आधार में नाम अलग हो तो fetch नहीं होगा। बोर्ड से रिकॉर्ड में नाम आधार के अनुसार अपडेट करवाएं या आधार सुधारें।"],
          ["शादी या नाम बदलने के बाद", "DigiLocker की सलाह: बोर्ड से नाम अपडेट का अनुरोध करें। कई जगह <a href=\"/affidavit/one-and-same-person.html\">One and Same Person एफिडेविट</a> मांगा जाता है।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें: मार्कशीट की स्कैन कॉपी या पूरा नाम, बोर्ड, पासिंग वर्ष, रोल/सीट नंबर, सीरियल नंबर, कुल अंक, मोबाइल नंबर और एरर का स्क्रीनशॉट।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker में न मिले तो official विकल्प",
      list: [
        "मूल मार्कशीट आपके स्कूल के माध्यम से बोर्ड देता है।",
        "डुप्लीकेट मार्कशीट/प्रमाण पत्र के लिए अपने बोर्ड की official वेबसाइट या क्षेत्रीय कार्यालय की प्रक्रिया अपनाएं; फीस और दस्तावेज़ हर बोर्ड के अलग हैं।",
        "मूल खो गई हो तो अक्सर FIR/शपथ पत्र मांगा जाता है: <a href=\"/affidavit/lost-document.html\">दस्तावेज़ खोने का एफिडेविट</a>।",
      ],
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "DigiLocker से जुड़े issuer और दस्तावेज़" },
  ],
  faq: [
    { q: "क्या हर राज्य बोर्ड की मार्कशीट DigiLocker में मिलती है?", a: "बहुत से राज्य बोर्ड DigiLocker से जुड़े हैं, पर कई बोर्ड केवल कुछ वर्षों या केवल 10वीं का डेटा देते हैं। Search Documents में अपना बोर्ड खोजें; वर्ष न दिखे तो बोर्ड ने उसे अपलोड नहीं किया है।" },
    { q: "UP बोर्ड की मार्कशीट DigiLocker में किस नाम से है?", a: "issuer का नाम “UP State Board of High School and Intermediate Education” है और इसमें Class X और Class XII Marksheet दर्ज हैं।" },
    { q: "बिहार बोर्ड की 12वीं मार्कशीट DigiLocker में नहीं मिल रही, क्यों?", a: "Bihar School Examination Board DigiLocker से जुड़ा है, पर DigiLocker के अनुसार कई वर्षों का डेटा बोर्ड ने अभी नहीं भेजा। ऐसे में बोर्ड से अनुरोध करना ही रास्ता है; DigiLocker खुद डेटा नहीं जोड़ सकता।" },
    { q: "क्या मैं अपनी मार्कशीट की स्कैन कॉपी अपलोड करके Issued Document बना सकता हूं?", a: "नहीं। DigiLocker के अनुसार डेटा सिर्फ अधिकृत बोर्ड या यूनिवर्सिटी ही डाल सकते हैं। खुद अपलोड की गई फाइल Uploaded Documents में रहती है।" },
    { q: "मार्कशीट में गलती है, क्या DigiLocker में सुधार हो सकता है?", a: "नहीं, DigiLocker वही दिखाता है जो बोर्ड भेजता है। सुधार के लिए बोर्ड में आवेदन करें; बोर्ड डेटा अपडेट करेगा तो DigiLocker में भी बदलेगा।" },
    { q: "NIOS या ओपन स्कूल की मार्कशीट मिलेगी?", a: "National Institute of Open Schooling की Class X और XII मार्कशीट और Passing Certificate DigiLocker में दर्ज हैं। कुछ राज्यों के ओपन स्कूल (जैसे Haryana Open School, Rajasthan State Open School) भी जुड़े हैं।" },
  ],
  related: cards("cbse", "degree", "apaar", "aadhaar", "students", "oneSame"),
  aside: ASIDE,
};
