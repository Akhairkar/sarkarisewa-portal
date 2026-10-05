import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory (DigiLocker issuers), searched 4 Oct 2026. Issuers
//   listing "Caste Certificate": eDistrict Uttar Pradesh; General
//   Administration Department (Bihar); eDistrict Madhya Pradesh; Raj-eVault,
//   Department of Information Technology & Communication, Govt. of Rajasthan;
//   Digital Gujarat- Common Services Portal (also "Unreserved Caste
//   Certificate", "Economically Backward In General Caste Certificate");
//   Revenue Department - Nadakacheri (Karnataka); eDistrict Kerala;
//   Jharsewa (eDistrict) Jharkhand; Antyodaya Saral Haryana; Punjab State
//   eGovernance Society; ITDA Uttarakhand; eDistrict Delhi; Sewa Setu, Assam;
//   Goa Online; Revenue Department, Jammu & Kashmir; Sikkim (Department of IT
//   and e-District). Aaple Sarkar (Maharashtra): "Caste certificate with
//   Affidavit". Mee Seva Telangana: "Community Caste Certificate" and EWS.
//   eDistrict Odisha ServicePlus: EWS certificate. Kerala, TN: also
//   "Inter-Caste Marriage Certificate".
// - DigiLocker Ask our Experts (18 Oct 2024): issuer data only; name match.
// Left out: caste validity certificates (Maharashtra caste validity) and
// central-format (OBC-NCL for central jobs) availability: not confirmed in
// the directory; search fields per state.
export const casteCertificate: DocGuide = {
  crumbs: crumbs("जाति प्रमाण पत्र"),
  docHi: "जाति प्रमाण पत्र",
  title: "DigiLocker से जाति प्रमाण पत्र डाउनलोड | SarkariSewa India",
  description: "DigiLocker में जाति प्रमाण पत्र (Caste Certificate) किन राज्यों का मिलता है, issuer का नाम, स्टेप, EWS सर्टिफिकेट, नाम या रिकॉर्ड न मिले तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से जाति प्रमाण पत्र (Caste Certificate) कैसे डाउनलोड करें",
  lead: "जाति प्रमाण पत्र राज्य सरकार का दस्तावेज़ है। जिन राज्यों का सेवा पोर्टल DigiLocker से जुड़ा है, वहां ऑनलाइन बना प्रमाण पत्र Search Documents में राज्य के issuer (जैसे eDistrict Uttar Pradesh, Raj-eVault, General Administration Department बिहार) को चुनकर Caste Certificate के रूप में लाया जा सकता है। हर राज्य में दस्तावेज़ का नाम एक जैसा नहीं है, जैसे महाराष्ट्र में “Caste certificate with Affidavit” और तेलंगाना में “Community Caste Certificate”।",
  facts: [
    ["कौन देता है", "राज्य का राजस्व/सामान्य प्रशासन विभाग"],
    ["DigiLocker में नाम", "Caste Certificate (कुछ राज्यों में अलग नाम)"],
    ["EWS", "कुछ राज्यों में अलग दस्तावेज़"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "rajya",
      title: "राज्य-वार issuer (DigiLocker में जैसा लिखा है)",
      intro: "API Setu पर 4 अक्टूबर 2026 को दर्ज। सूची में राज्य होने का मतलब है कि उसका सिस्टम जुड़ा है; आपका प्रमाण पत्र मिलेगा या नहीं, यह उसके ऑनलाइन बने होने पर निर्भर है।",
      table: {
        head: ["राज्य/UT", "issuer", "दस्तावेज़"],
        rows: [
          ["उत्तर प्रदेश", "eDistrict Uttar Pradesh", "Caste Certificate"],
          ["बिहार", "General Administration Department", "Caste Certificate"],
          ["मध्य प्रदेश", "eDistrict Madhya Pradesh", "Caste Certificate"],
          ["राजस्थान", "Raj-eVault (DoIT&C, Govt. of Rajasthan)", "Caste Certificate"],
          ["महाराष्ट्र", "Aaple Sarkar", "Caste certificate with Affidavit"],
          ["गुजरात", "Digital Gujarat- Common Services Portal", "Caste, Unreserved Caste, Economically Backward In General Caste Certificate"],
          ["कर्नाटक / केरल", "Revenue Department - Nadakacheri / eDistrict Kerala", "Caste Certificate"],
          ["तेलंगाना", "Mee Seva Telangana", "Community Caste Certificate, Economically Backward In General Caste Certificate"],
          ["झारखंड / हरियाणा / पंजाब", "Jharsewa / Antyodaya Saral Haryana / Punjab State eGovernance Society", "Caste Certificate"],
          ["उत्तराखंड / दिल्ली / असम", "ITDA Uttarakhand / eDistrict Delhi / Sewa Setu, Assam", "Caste Certificate"],
          ["गोवा / J&K / सिक्किम", "Goa Online / Revenue Department J&K / Sikkim e-District", "Caste Certificate"],
          ["ओडिशा", "eDistrict Odisha ServicePlus", "Economically Backward In General Caste Certificate"],
        ],
      },
    },
    {
      id: "steps",
      title: "स्टेप: DigiLocker में जाति प्रमाण पत्र लाना",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर उसी व्यक्ति के आधार से लॉगिन करें जिसके नाम प्रमाण पत्र है (बच्चे का प्रमाण पत्र बच्चे के अकाउंट में आएगा)।",
        "<strong>Search Documents</strong> में राज्य के issuer का नाम (ऊपर की तालिका से) या “Caste Certificate” लिखें।",
        "अपने राज्य का दस्तावेज़ चुनें; नाम राज्य के हिसाब से अलग हो सकता है।",
        "प्रमाण पत्र पर लिखा नंबर और स्क्रीन पर मांगी गई दूसरी जानकारी भरें।",
        "सहमति देकर दस्तावेज़ लाएं; यह <strong>Issued Documents</strong> में दिखेगा।",
      ],
    },
    {
      id: "valid",
      title: "भर्ती और एडमिशन में DigiLocker वाला जाति प्रमाण पत्र",
      intro: RULE_9A,
      list: [
        "राज्य सरकार की नौकरी/एडमिशन में आम तौर पर उसी राज्य का प्रमाण पत्र लगता है। केंद्र सरकार की नौकरियों में अक्सर तय फॉर्मेट (जैसे OBC के लिए केंद्र का फॉर्मेट) मांगा जाता है; DigiLocker वाला राज्य का प्रमाण पत्र उस फॉर्मेट में है या नहीं, अधिसूचना से मिलाएं।",
        "दस्तावेज़ सत्यापन में मूल प्रमाण पत्र भी मांगा जा सकता है; उसे सुरक्षित रखें।",
        "EWS प्रमाण पत्र जाति प्रमाण पत्र से अलग दस्तावेज़ है और उसकी अपनी वैधता शर्तें होती हैं।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["राज्य सर्च में नहीं मिला", "आपके राज्य का जाति प्रमाण पत्र DigiLocker से नहीं जुड़ा हो सकता; राज्य पोर्टल से डाउनलोड करें।"],
          ["Record not found", "पुराना/ऑफलाइन बना प्रमाण पत्र राज्य के ऑनलाइन रिकॉर्ड में न हो तो नहीं आएगा। नया डिजिटल प्रमाण पत्र तहसील/राज्य पोर्टल से बनवाना पड़ सकता है।"],
          ["नाम या पिता का नाम अलग", "DigiLocker नाम मेल न खाने पर दस्तावेज़ नहीं देता। जारी करने वाले कार्यालय से सुधार करवाएं; नाम में अंतर के लिए <a href=\"/affidavit/one-and-same-person.html\">One and Same Person एफिडेविट</a> भी काम आता है।"],
          ["प्रमाण पत्र पिता के नाम पर है", "हर व्यक्ति का प्रमाण पत्र अलग बनता है; पिता का प्रमाण पत्र आपके अकाउंट में नहीं आएगा।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के बिना official तरीका",
      list: [
        "राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल पर आवेदन नंबर से प्रमाण पत्र डाउनलोड करें या CSC/तहसील से प्रति लें।",
        "नया जाति प्रमाण पत्र बनवाने की प्रक्रिया: <a href=\"/service/caste-certificate.html\">जाति प्रमाण पत्र आवेदन गाइड</a>।",
      ],
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "जुड़े हुए राज्य पोर्टल" },
  ],
  faq: [
    { q: "DigiLocker में जाति प्रमाण पत्र कैसे निकालें?", a: "Search Documents में अपने राज्य का issuer (जैसे eDistrict Uttar Pradesh) या “Caste Certificate” खोजें, दस्तावेज़ चुनें और प्रमाण पत्र की मांगी गई जानकारी भरें। प्रमाण पत्र राज्य के ऑनलाइन सिस्टम से बना होना चाहिए।" },
    { q: "राजस्थान का जाति प्रमाण पत्र DigiLocker में मिलता है?", a: "हां, issuer “Raj-eVault, Department of Information Technology & Communication, Govt. of Rajasthan” के तहत Caste Certificate दर्ज है।" },
    { q: "महाराष्ट्र का जाति प्रमाण पत्र किस नाम से है?", a: "Aaple Sarkar issuer के तहत “Caste certificate with Affidavit” के नाम से दर्ज है।" },
    { q: "क्या DigiLocker वाला जाति प्रमाण पत्र सरकारी नौकरी में चलेगा?", a: "नियम 9A के तहत Issued Document मान्य है, पर भर्ती संस्था तय फॉर्मेट और तारीख मांग सकती है (खासकर केंद्र की नौकरियों में OBC के लिए)। अधिसूचना की शर्त से मिलाएं।" },
    { q: "बच्चे का जाति प्रमाण पत्र किसके DigiLocker में आएगा?", a: "जिसके नाम प्रमाण पत्र बना है, उसी के आधार वाले DigiLocker अकाउंट में। बच्चे का अलग अकाउंट बनाएं; एक मोबाइल नंबर से पांच तक आधार-सत्यापित अकाउंट बन सकते हैं।" },
  ],
  related: cards("casteGuide", "income", "domicile", "board", "oneSame", "hub"),
  aside: ASIDE,
};
