import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory (DigiLocker issuers), searched 4 Oct 2026 for "Income
//   Certificate", "e-District", "Revenue Department" and state names. Issuers
//   listing "Income Certificate": eDistrict Uttar Pradesh; General
//   Administration Department (Bihar); eDistrict Madhya Pradesh; Aaple Sarkar
//   (Maharashtra); Digital Gujarat- Common Services Portal; Revenue Department
//   - Nadakacheri (Karnataka); eDistrict Kerala; Tamil Nadu eGovernance
//   Agency; Mee Seva Andhra Pradesh; Mee Seva Telangana; eDistrict Odisha
//   ServicePlus; Personnel & Administrative Reforms Department (West Bengal);
//   Sewa Setu, Assam; Jharsewa (eDistrict) Jharkhand; Sewa Setu, Chhattisgarh;
//   Antyodaya Saral Haryana; eDistrict Himachal Pradesh; ITDA Uttarakhand;
//   eDistrict Delhi; eDistrict Chandigarh; Goa Online; Revenue Department,
//   Jammu & Kashmir; Department of IT Government of Sikkim / e-District
//   Sikkim; Department of ICT Mizoram; eService (eDistrict) Arunachal Pradesh;
//   eDistrict Andaman & Nicobar Islands; UT Administration of DNH and DD.
//   "Income and Asset Certificate": Karnataka, Maharashtra, Chhattisgarh,
//   Punjab, Manipur. "Agriculture Income Certificate": AP, Telangana, TN.
// - DigiLocker Ask our Experts (18 Oct 2024): DigiLocker shows only what the
//   issuer sends; changes only by the issuer; name must match Aadhaar.
// Left out: validity period of income certificates (differs by state and by
// the scheme asking for it); search fields per state; Rajasthan and Punjab
// plain income certificate (not found in the directory search).
export const incomeCertificate: DocGuide = {
  crumbs: crumbs("आय प्रमाण पत्र"),
  docHi: "आय प्रमाण पत्र",
  title: "DigiLocker से आय प्रमाण पत्र डाउनलोड | SarkariSewa India",
  description: "DigiLocker में आय प्रमाण पत्र किन राज्यों का मिलता है, अपने राज्य का issuer कैसे खोजें, स्टेप, EWS वाला Income and Asset सर्टिफिकेट और आम दिक्कतें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से आय प्रमाण पत्र (Income Certificate) कैसे डाउनलोड करें",
  lead: "आय प्रमाण पत्र राज्य सरकार देती है, इसलिए DigiLocker में यह तभी मिलता है जब आपके राज्य का ई-डिस्ट्रिक्ट/सेवा पोर्टल DigiLocker से जुड़ा हो और आपका प्रमाण पत्र उसी ऑनलाइन सिस्टम से बना हो। Search Documents में अपने राज्य के पोर्टल का नाम (जैसे eDistrict Uttar Pradesh, Aaple Sarkar, Sewa Setu) खोजें, Income Certificate चुनें और मांगी गई जानकारी भरें।",
  facts: [
    ["कौन देता है", "राज्य का राजस्व विभाग / ई-डिस्ट्रिक्ट पोर्टल"],
    ["DigiLocker में नाम", "Income Certificate"],
    ["EWS के लिए", "Income and Asset Certificate (कुछ राज्य)"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "rajya",
      title: "किन राज्यों का आय प्रमाण पत्र DigiLocker में है",
      intro: "API Setu (DigiLocker issuer प्लेटफॉर्म) पर 4 अक्टूबर 2026 को इन issuer के नाम से “Income Certificate” दर्ज मिला। यहां न दिखे तो भी अपने राज्य का नाम Search करके देखें।",
      table: {
        head: ["राज्य/UT", "DigiLocker में issuer का नाम"],
        rows: [
          ["उत्तर प्रदेश", "eDistrict Uttar Pradesh"],
          ["बिहार", "General Administration Department"],
          ["मध्य प्रदेश", "eDistrict Madhya Pradesh"],
          ["महाराष्ट्र", "Aaple Sarkar (Income Certificate, Income and Asset Certificate)"],
          ["गुजरात", "Digital Gujarat- Common Services Portal"],
          ["कर्नाटक", "Revenue Department - Nadakacheri (Income, Income and Asset)"],
          ["झारखंड / छत्तीसगढ़", "Jharsewa (eDistrict) / Sewa Setu, Chhattisgarh"],
          ["हरियाणा / हिमाचल / उत्तराखंड", "Antyodaya Saral Haryana / eDistrict Himachal Pradesh / ITDA Uttarakhand"],
          ["दिल्ली / चंडीगढ़", "eDistrict Delhi / eDistrict Chandigarh"],
          ["पश्चिम बंगाल / ओडिशा / असम", "Personnel & Administrative Reforms Department / eDistrict Odisha ServicePlus / Sewa Setu, Assam"],
          ["केरल / तमिलनाडु", "eDistrict Kerala / Tamil Nadu eGovernance Agency"],
          ["आंध्र प्रदेश / तेलंगाना", "Mee Seva Andhra Pradesh / Mee Seva Telangana (Agriculture Income Certificate भी)"],
          ["गोवा, J&K, सिक्किम, मिज़ोरम, अरुणाचल, अंडमान, DNH-DD", "Goa Online, Revenue Department J&K, Sikkim IT/e-District, Mizoram ICT, Arunachal eService, Andaman eDistrict, UT Administration of DNH and DD"],
        ],
      },
      callout: { kind: "info", html: "राजस्थान और पंजाब के लिए सामान्य “Income Certificate” हमें इस सूची में नहीं मिला (पंजाब का Income and Asset Certificate दर्ज है)। इन राज्यों में प्रमाण पत्र राज्य के अपने पोर्टल से ही डाउनलोड करें।" },
    },
    {
      id: "steps",
      title: "DigiLocker में आय प्रमाण पत्र लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर उसी व्यक्ति के आधार से लॉगिन करें जिसके नाम प्रमाण पत्र बना है।",
        "<strong>Search Documents</strong> में अपने राज्य के पोर्टल का नाम या “Income Certificate” लिखें और सही issuer चुनें।",
        "<strong>Income Certificate</strong> (या EWS के लिए Income and Asset Certificate) चुनें।",
        "प्रमाण पत्र पर लिखा नंबर और स्क्रीन पर मांगी गई दूसरी जानकारी भरें।",
        "सहमति देकर दस्तावेज़ लाएं; यह <strong>Issued Documents</strong> में सेव होगा।",
      ],
    },
    {
      id: "valid",
      title: "कहां काम आता है और कितना मान्य",
      intro: RULE_9A,
      list: [
        "स्कॉलरशिप, फीस छूट, पेंशन और दूसरी योजनाओं में आय का सबूत; कई ऑनलाइन फॉर्म DigiLocker से सीधे दस्तावेज़ लेते हैं।",
        "आय प्रमाण पत्र की वैधता (कितने समय तक मान्य) राज्य और योजना के नियम पर निर्भर है। फॉर्म में लिखी शर्त देखें; DigiLocker में पुराना प्रमाण पत्र दिखना उसके वैध होने की गारंटी नहीं है।",
        "EWS आरक्षण के लिए अलग Income and Asset Certificate लगता है; सामान्य आय प्रमाण पत्र उसकी जगह नहीं चलता।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["Record not found", "प्रमाण पत्र का नंबर दोबारा जांचें। बहुत पुराना या ऑफलाइन (हाथ से बना) प्रमाण पत्र राज्य के ऑनलाइन सिस्टम में न हो तो DigiLocker में नहीं आएगा।"],
          ["प्रमाण पत्र परिवार के मुखिया के नाम", "DigiLocker सिर्फ उसी व्यक्ति के अकाउंट में देता है जिसके नाम दस्तावेज़ है।"],
          ["नाम मेल नहीं खाता", "प्रमाण पत्र और आधार में नाम अलग हो तो fetch नहीं होगा; जारी करने वाले कार्यालय से सुधार करवाएं या नया प्रमाण पत्र बनवाएं।"],
          ["आय या साल बदलना है", "DigiLocker डेटा नहीं बदलता। नया प्रमाण पत्र राज्य पोर्टल/CSC से बनवाएं, फिर DigiLocker में लाएं।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के बिना official तरीका",
      list: [
        "अपने राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल (जैसे UP eDistrict, Aaple Sarkar, RTPS बिहार) पर आवेदन नंबर से प्रमाण पत्र डाउनलोड करें या नज़दीकी CSC पर जाएं।",
        "नया आय प्रमाण पत्र बनवाने की पूरी प्रक्रिया: <a href=\"/service/income-certificate.html\">आय प्रमाण पत्र ऑनलाइन आवेदन</a>।",
        "आवेदन में अक्सर स्व-घोषणा/शपथ पत्र लगता है: <a href=\"/affidavit/income.html\">आय का एफिडेविट</a>।",
      ],
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "राज्यों के जुड़े हुए पोर्टल" },
  ],
  faq: [
    { q: "क्या हर राज्य का आय प्रमाण पत्र DigiLocker में मिलता है?", a: "नहीं। आय प्रमाण पत्र राज्य देते हैं और हर राज्य का पोर्टल DigiLocker से नहीं जुड़ा। हमें 4 अक्टूबर 2026 को UP, बिहार, MP, महाराष्ट्र, गुजरात, कर्नाटक, झारखंड, हरियाणा, दिल्ली समेत कई राज्यों के issuer मिले।" },
    { q: "UP का आय प्रमाण पत्र DigiLocker में कैसे निकालें?", a: "Search Documents में “eDistrict Uttar Pradesh” खोजें, Income Certificate चुनें और प्रमाण पत्र की मांगी गई जानकारी भरें। प्रमाण पत्र UP के ई-डिस्ट्रिक्ट सिस्टम से बना होना चाहिए।" },
    { q: "DigiLocker से आय प्रमाण पत्र के लिए आवेदन कर सकते हैं?", a: "DigiLocker सिर्फ बने हुए प्रमाण पत्र दिखाता है। आवेदन राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल या CSC पर होता है।" },
    { q: "EWS सर्टिफिकेट भी DigiLocker में मिलता है?", a: "कुछ राज्यों का “Income and Asset Certificate” (कर्नाटक, महाराष्ट्र, छत्तीसगढ़, पंजाब, मणिपुर) और “Economically Backward In General Caste Certificate” (गुजरात, ओडिशा, तेलंगाना) DigiLocker issuer सूची में दर्ज है।" },
    { q: "प्रमाण पत्र बन गया पर DigiLocker में नहीं आ रहा, क्या करें?", a: "नाम आधार से मिलाएं और प्रमाण पत्र नंबर दोबारा जांचें। फिर भी न मिले तो राज्य पोर्टल से डाउनलोड करें और DigiLocker सपोर्ट पर टिकट डालें।" },
    { q: "क्या DigiLocker वाला आय प्रमाण पत्र स्कॉलरशिप में मान्य है?", a: "DigiLocker नियम 9A के अनुसार Issued Documents फिजिकल दस्तावेज़ के बराबर स्वीकार किए जा सकते हैं। स्कॉलरशिप पोर्टल की अपनी शर्तें (जैसे प्रमाण पत्र कितना पुराना हो) ज़रूर देखें।" },
  ],
  related: cards("incomeGuide", "caste", "domicile", "ayushman", "aadhaar", "hub"),
  aside: ASIDE,
};
