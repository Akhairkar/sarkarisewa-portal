import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory (DigiLocker issuers), searched 4 Oct 2026.
//   "Domicile Certificate": eDistrict Uttar Pradesh; Aaple Sarkar
//   (Maharashtra); Digital Gujarat- Common Services Portal; Revenue Department
//   - Nadakacheri (Karnataka); eDistrict Kerala; Sewa Setu, Chhattisgarh;
//   eDistrict Himachal Pradesh; ITDA Uttarakhand; Punjab State eGovernance
//   Society; eDistrict Delhi; Personnel & Administrative Reforms Department
//   (West Bengal); Goa Online; Revenue Department, Jammu & Kashmir; Manipur
//   (Directorate/Department of IT); eService (eDistrict) Arunachal Pradesh;
//   UT Administration of DNH and DD.
//   "Residence Certificate": General Administration Department (Bihar);
//   Jharsewa (Jharkhand); eDistrict Odisha ServicePlus; Sewa Setu, Assam;
//   Mee Seva Andhra Pradesh; Mee Seva Telangana; Tamil Nadu eGovernance
//   Agency; Revenue Department - Nadakacheri (Karnataka, also "HK Region
//   Residence and Eligibility Certificate"); eDistrict Kerala; Gujarat;
//   Punjab (also "Certificate of Residence in Hilly Area"); Goa; Mizoram;
//   Sikkim; Chandigarh; Arunachal; Manipur; Andaman & Nicobar.
//   Maharashtra also "Temporary Residence Certificate" and "Certificate of
//   Residence in Hilly Area".
// - DigiLocker Ask our Experts (18 Oct 2024): issuer data only; name match.
// Left out: Madhya Pradesh and Rajasthan domicile (not found in the directory
// search); the legal difference between domicile and residence in each state.
export const domicileCertificate: DocGuide = {
  crumbs: crumbs("निवास प्रमाण पत्र"),
  docHi: "निवास प्रमाण पत्र",
  title: "DigiLocker से निवास प्रमाण पत्र डाउनलोड | SarkariSewa India",
  description: "DigiLocker में Domicile और Residence Certificate किन राज्यों का मिलता है, दोनों में फर्क, issuer के नाम, स्टेप और रिकॉर्ड न मिले तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से निवास प्रमाण पत्र (Domicile/Residence) कैसे डाउनलोड करें",
  lead: "निवास प्रमाण पत्र DigiLocker में दो नामों से मिलता है: कुछ राज्य इसे “Domicile Certificate” कहते हैं (जैसे UP, महाराष्ट्र, गुजरात, दिल्ली, उत्तराखंड) और कुछ “Residence Certificate” (जैसे बिहार, झारखंड, ओडिशा, असम, तेलंगाना)। Search Documents में अपने राज्य का issuer चुनें, सही नाम वाला दस्तावेज़ खोलें और मांगी गई जानकारी भरें; राज्य के ऑनलाइन सिस्टम से बना प्रमाण पत्र Issued Documents में आ जाएगा।",
  facts: [
    ["कौन देता है", "राज्य का राजस्व विभाग / सेवा पोर्टल"],
    ["DigiLocker में नाम", "Domicile Certificate या Residence Certificate"],
    ["ज़रूरी", "प्रमाण पत्र राज्य के ऑनलाइन सिस्टम से बना हो"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "rajya",
      title: "किस राज्य में किस नाम से है",
      intro: "API Setu (DigiLocker issuer प्लेटफॉर्म) पर 4 अक्टूबर 2026 को दर्ज।",
      table: {
        head: ["राज्य/UT", "issuer", "दस्तावेज़ का नाम"],
        rows: [
          ["उत्तर प्रदेश", "eDistrict Uttar Pradesh", "Domicile Certificate"],
          ["बिहार", "General Administration Department", "Residence Certificate"],
          ["झारखंड", "Jharsewa (eDistrict)", "Residence Certificate"],
          ["महाराष्ट्र", "Aaple Sarkar", "Domicile Certificate; Temporary Residence Certificate"],
          ["गुजरात", "Digital Gujarat- Common Services Portal", "Domicile और Residence Certificate"],
          ["दिल्ली / उत्तराखंड / हिमाचल", "eDistrict Delhi / ITDA Uttarakhand / eDistrict Himachal Pradesh", "Domicile Certificate"],
          ["छत्तीसगढ़ / पंजाब", "Sewa Setu, Chhattisgarh / Punjab State eGovernance Society", "Domicile Certificate (पंजाब में Residence भी)"],
          ["पश्चिम बंगाल", "Personnel & Administrative Reforms Department", "Domicile Certificate"],
          ["ओडिशा / असम", "eDistrict Odisha ServicePlus / Sewa Setu, Assam", "Residence Certificate"],
          ["आंध्र प्रदेश / तेलंगाना / तमिलनाडु", "Mee Seva AP / Mee Seva Telangana / Tamil Nadu eGovernance Agency", "Residence Certificate"],
          ["कर्नाटक / केरल", "Revenue Department - Nadakacheri / eDistrict Kerala", "Domicile और Residence Certificate"],
          ["J&K / गोवा / अरुणाचल / मणिपुर", "Revenue Department J&K / Goa Online / Arunachal eService / Manipur IT", "Domicile Certificate (कई में Residence भी)"],
        ],
      },
      callout: { kind: "info", html: "मध्य प्रदेश और राजस्थान का निवास प्रमाण पत्र हमें इस सूची में नहीं मिला। इन राज्यों में DigiLocker में अपने राज्य का नाम Search करके देखें; न मिले तो राज्य पोर्टल से डाउनलोड करें।" },
    },
    {
      id: "farq",
      title: "Domicile और Residence में फर्क क्यों दिखता है",
      list: [
        "दोनों का मकसद यह साबित करना है कि आप उस राज्य के निवासी हैं, पर नाम, शर्तें (कितने साल से रह रहे हैं) और इस्तेमाल हर राज्य के नियम से तय होते हैं।",
        "भर्ती या एडमिशन फॉर्म में जिस नाम का प्रमाण पत्र मांगा है, वही लें। राज्य कोटा के लिए अक्सर Domicile मांगा जाता है।",
        "कुछ राज्यों के खास प्रमाण पत्र भी DigiLocker में हैं: पंजाब और महाराष्ट्र का Certificate of Residence in Hilly Area, कर्नाटक का HK Region Residence and Eligibility Certificate।",
      ],
    },
    {
      id: "steps",
      title: "DigiLocker में निवास प्रमाण पत्र लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर अपने आधार से लॉगिन करें।",
        "<strong>Search Documents</strong> में अपने राज्य का issuer (ऊपर तालिका से) या “Domicile”/“Residence” लिखें।",
        "अपने राज्य का <strong>Domicile Certificate</strong> या <strong>Residence Certificate</strong> चुनें।",
        "प्रमाण पत्र पर लिखा नंबर और स्क्रीन पर मांगी गई दूसरी जानकारी भरें।",
        "सहमति देकर दस्तावेज़ लाएं; यह <strong>Issued Documents</strong> में दिखेगा।",
      ],
    },
    {
      id: "valid",
      title: "कितना मान्य",
      intro: RULE_9A,
      list: [
        "राज्य की भर्ती, काउंसलिंग और स्कॉलरशिप पोर्टल अक्सर DigiLocker से सीधे दस्तावेज़ लेने का विकल्प देते हैं।",
        "कुछ संस्थाएं प्रमाण पत्र की तारीख (कितना पुराना) की शर्त रखती हैं; अधिसूचना देखें।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["Domicile खोजा, नहीं मिला", "आपके राज्य में शायद यह “Residence Certificate” नाम से है; ऊपर की तालिका देखें।"],
          ["Record not found", "प्रमाण पत्र राज्य के ऑनलाइन सिस्टम से बना होना चाहिए; ऑफलाइन/पुराने प्रमाण पत्र DigiLocker में नहीं आते।"],
          ["नाम मेल नहीं खाता", "प्रमाण पत्र और आधार में नाम एक जैसा न हो तो fetch नहीं होगा; जारी करने वाले कार्यालय से सुधार करवाएं।"],
          ["पता बदल गया", "DigiLocker पुराना प्रमाण पत्र ही दिखाएगा; नए पते का प्रमाण पत्र राज्य पोर्टल से बनवाएं।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के बिना official तरीका",
      list: [
        "राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल पर आवेदन नंबर से प्रमाण पत्र डाउनलोड करें, या CSC/तहसील से लें।",
        "नया निवास प्रमाण पत्र बनवाने की प्रक्रिया: <a href=\"/service/domicile-certificate.html\">निवास प्रमाण पत्र आवेदन गाइड</a>।",
      ],
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "जुड़े हुए राज्य पोर्टल" },
  ],
  faq: [
    { q: "DigiLocker में Domicile Certificate कैसे निकालें?", a: "Search Documents में अपने राज्य का issuer चुनें और Domicile Certificate (या आपके राज्य में Residence Certificate) खोलें, फिर प्रमाण पत्र की मांगी गई जानकारी भरें।" },
    { q: "बिहार का निवास प्रमाण पत्र DigiLocker में किस नाम से है?", a: "issuer “General Administration Department” के तहत “Residence Certificate” के नाम से दर्ज है।" },
    { q: "UP का निवास प्रमाण पत्र DigiLocker में मिलेगा?", a: "हां, “eDistrict Uttar Pradesh” issuer के तहत Domicile Certificate दर्ज है। प्रमाण पत्र UP के ई-डिस्ट्रिक्ट सिस्टम से बना होना चाहिए।" },
    { q: "Domicile और Residence Certificate एक ही हैं?", a: "दोनों निवास साबित करते हैं, पर नाम और शर्तें राज्य के नियम से तय होती हैं। फॉर्म में जो नाम मांगा गया है, वही प्रमाण पत्र दें।" },
    { q: "क्या DigiLocker से निवास प्रमाण पत्र के लिए आवेदन हो सकता है?", a: "नहीं, DigiLocker सिर्फ बने हुए प्रमाण पत्र दिखाता है। आवेदन राज्य के सेवा पोर्टल या CSC पर होता है।" },
  ],
  related: cards("domicileGuide", "income", "caste", "aadhaar", "board", "hub"),
  aside: ASIDE,
};
