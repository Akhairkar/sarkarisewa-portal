import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - DigiLocker Ask our Experts (18 Oct 2024): degrees and marksheets are on
//   DigiLocker only if the institution uploaded records to the National
//   Academic Depository (NAD); data uploaded on ABC is visible on DigiLocker
//   if seeded with the ABC/APAAR ID; only institutions can upload; no deadline
//   for legacy data; name must match Aadhaar, ask the university to update the
//   name; physical copy still from the university; support ticket details for
//   degrees (name, roll/registration/enrolment number, year, course,
//   university, mobile, screenshot); nad-support.digilocker.gov.in for NAD/
//   APAAR queries; normal processing time of an institution's upload is 48 h.
// - API Setu directory: issuer "National Academic Depository (NAD)"
//   (in.gov.digitallocker.nad); "Indira Gandhi National Open University"
//   (Degree Certificate, Diploma Certificate, Degree/ Diploma Marksheet);
//   "University Of Delhi" (Transcript, Degree Certificate, Degree/ Diploma
//   Marksheet); many state and private universities list "Degree/ Diploma
//   Marksheet".
// - apaar.education.gov.in/faqs: APAAR receives academic credits from
//   institutions through NAD.
export const degreeCertificate: DocGuide = {
  crumbs: crumbs("डिग्री सर्टिफिकेट"),
  docHi: "डिग्री सर्टिफिकेट",
  title: "DigiLocker से डिग्री और यूनिवर्सिटी मार्कशीट | SarkariSewa India",
  description: "यूनिवर्सिटी की डिग्री, डिप्लोमा और सेमेस्टर मार्कशीट DigiLocker (NAD) से कैसे निकालें, कौन सी जानकारी लगती है, पुरानी डिग्री या नाम में अंतर हो तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से डिग्री सर्टिफिकेट और यूनिवर्सिटी मार्कशीट कैसे निकालें",
  lead: "कॉलेज और यूनिवर्सिटी की डिग्री व मार्कशीट DigiLocker में नेशनल एकेडमिक डिपॉज़िटरी (NAD) के ज़रिए आती हैं। आपकी यूनिवर्सिटी ने जिस साल का रिकॉर्ड NAD पर डाला है, वही आप Search Documents में यूनिवर्सिटी चुनकर रोल/एनरोलमेंट नंबर और वर्ष से निकाल सकते हैं। रिकॉर्ड न हो तो DigiLocker कुछ नहीं कर सकता; यूनिवर्सिटी से अनुरोध करना होगा।",
  facts: [
    ["सिस्टम", "National Academic Depository (NAD), DigiLocker"],
    ["दस्तावेज़ प्रकार", "Degree Certificate, Diploma Certificate, Degree/Diploma Marksheet, Transcript"],
    ["कौन अपलोड करता है", "सिर्फ यूनिवर्सिटी/संस्थान"],
    ["शिकायत", "support.digilocker.gov.in, nad-support.digilocker.gov.in"],
  ],
  sections: [
    {
      id: "nad",
      title: "NAD, ABC और DigiLocker का रिश्ता",
      list: [
        "<strong>NAD (National Academic Depository):</strong> यूनिवर्सिटी अपनी डिग्री और मार्कशीट का डिजिटल रिकॉर्ड यहां डालती हैं; DigiLocker में यही दिखता है।",
        "<strong>ABC/APAAR:</strong> DigiLocker के अनुसार Academic Bank of Credits पर डाला गया डेटा भी DigiLocker में दिखता है अगर वह आपकी ABC/APAAR ID से जुड़ा हो। APAAR ID के बारे में देखें <a href=\"/digilocker/apaar-id.html\">DigiLocker में APAAR ID</a>।",
        "<strong>कौन सी यूनिवर्सिटी:</strong> API Setu पर बहुत सी केंद्रीय, राज्य और निजी यूनिवर्सिटी “Degree/ Diploma Marksheet” के साथ दर्ज हैं; जैसे IGNOU (Degree Certificate, Diploma Certificate, Marksheet) और University Of Delhi (Degree Certificate, Marksheet, Transcript)।",
      ],
    },
    {
      id: "steps",
      title: "डिग्री/मार्कशीट निकालने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार से जुड़े मोबाइल नंबर से लॉगिन करें।",
        "<strong>Search Documents</strong> में अपनी यूनिवर्सिटी का नाम लिखें। नाम ठीक वैसा न मिले तो शहर या छोटे नाम से खोजें (जैसे “IGNOU”, “Delhi”)।",
        "दस्तावेज़ चुनें: Degree Certificate, Diploma Certificate, Degree/Diploma Marksheet या Transcript (जो आपकी यूनिवर्सिटी देती है)।",
        "रोल नंबर/एनरोलमेंट नंबर, पासिंग वर्ष या सेशन जैसी मांगी गई जानकारी अपनी मार्कशीट से भरें।",
        "सहमति देकर दस्तावेज़ लाएं। मिलने पर यह <strong>Issued Documents</strong> में सेव होगा; हर सेमेस्टर की मार्कशीट अलग से लानी पड़ सकती है।",
      ],
      callout: { kind: "info", html: "ABC/APAAR ID से जुड़े छात्रों के कुछ रिकॉर्ड अपने-आप भी दिख सकते हैं। यूनिवर्सिटी के अपलोड करने के बाद प्रोसेसिंग में आम तौर पर 48 घंटे लगते हैं (DigiLocker के अनुसार), भीड़ में ज़्यादा।" },
    },
    {
      id: "valid",
      title: "क्या DigiLocker वाली डिग्री मान्य है",
      intro: RULE_9A,
      list: [
        "DigiLocker के अनुसार डिजिटल रूप से साइन किया गया दस्तावेज़ इलेक्ट्रॉनिक रूप में इस्तेमाल होने पर IT एक्ट 2000 के तहत मान्य है; नौकरी/एडमिशन के लिए स्वीकार किया जाना चाहिए।",
        "फिर भी डिग्री की प्रिंटेड मूल प्रति चाहिए तो वह यूनिवर्सिटी से ही मिलेगी; DigiLocker प्रिंटेड डिग्री नहीं भेजता।",
        "विदेश में पढ़ाई/नौकरी के लिए apostille या WES जैसी जांच के नियम अलग हैं; उस संस्था के निर्देश देखें।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["यूनिवर्सिटी सर्च में नहीं दिखती", "संस्थान अभी DigiLocker/NAD से नहीं जुड़ा या उसने डेटा नहीं डाला। यूनिवर्सिटी के परीक्षा विभाग से NAD पर रिकॉर्ड डालने का अनुरोध करें।"],
          ["पुराने बैच (जैसे 10-15 साल पहले) की डिग्री नहीं", "DigiLocker के अनुसार पुराने (legacy) डेटा के लिए कोई तय समय-सीमा नहीं है। यूनिवर्सिटी से अनुरोध करें, साथ में " + DL_SUPPORT + " पर टिकट डालें।"],
          ["आधार और डिग्री में नाम का क्रम अलग (जैसे सरनेम पहले)", "नाम मेल न खाने पर दस्तावेज़ fetch नहीं होगा। यूनिवर्सिटी से रिकॉर्ड में नाम आधार के अनुसार अपडेट करवाएं।"],
          ["शादी के बाद आधार में नाम बदला", "यूनिवर्सिटी से नाम अपडेट का अनुरोध करें; अक्सर <a href=\"/affidavit/name-change.html\">नाम बदलने का एफिडेविट</a> या गजट मांगा जाता है।"],
          ["टिकट में क्या लिखें", "मार्कशीट/सर्टिफिकेट की स्कैन कॉपी या पूरा नाम, रोल/रजिस्ट्रेशन/एनरोलमेंट नंबर, पासिंग वर्ष/सेशन, कोर्स, यूनिवर्सिटी का नाम, DigiLocker वाला मोबाइल नंबर और एरर का स्क्रीनशॉट।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के बिना official तरीका",
      list: [
        "डिग्री, प्रोविज़नल सर्टिफिकेट, ट्रांसक्रिप्ट और डुप्लीकेट डिग्री यूनिवर्सिटी के परीक्षा/डिग्री विभाग या उसके पोर्टल से आवेदन करके मिलती हैं; फीस यूनिवर्सिटी तय करती है।",
        "डुप्लीकेट डिग्री के लिए आम तौर पर FIR या शपथ पत्र मांगा जाता है: <a href=\"/affidavit/lost-document.html\">दस्तावेज़ खोने का एफिडेविट</a>।",
      ],
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://nad-support.digilocker.gov.in/", title: "NAD सपोर्ट", note: "NAD/APAAR से जुड़े सवाल" },
    { href: "https://www.abc.gov.in/", title: "Academic Bank of Credits", note: "abc.gov.in" },
  ],
  faq: [
    { q: "मेरी डिग्री DigiLocker में क्यों नहीं दिख रही?", a: "डिग्री DigiLocker में तभी आती है जब आपकी यूनिवर्सिटी ने उसका रिकॉर्ड NAD पर डाला हो। DigiLocker या छात्र खुद यह डेटा नहीं डाल सकते, इसलिए यूनिवर्सिटी से अनुरोध करें।" },
    { q: "क्या NAD और DigiLocker अलग-अलग हैं?", a: "NAD वह डिपॉज़िटरी है जहां संस्थान एकेडमिक रिकॉर्ड डालते हैं; छात्र उन्हें DigiLocker ऐप/वेबसाइट से देखते और शेयर करते हैं।" },
    { q: "क्या हर सेमेस्टर की मार्कशीट मिलती है?", a: "यह यूनिवर्सिटी पर निर्भर है। कई यूनिवर्सिटी “Degree/ Diploma Marksheet” देती हैं; जितने सेमेस्टर/वर्ष का डेटा डाला गया है, वही मिलेगा।" },
    { q: "DigiLocker से डिग्री की हार्ड कॉपी मिल सकती है?", a: "DigiLocker से डिजिटल सर्टिफिकेट प्रिंट कर सकते हैं, पर यूनिवर्सिटी की मूल प्रिंटेड डिग्री चाहिए तो यूनिवर्सिटी से ही संपर्क करना होगा।" },
    { q: "दो कोर्स एक साथ कर रहा हूं, दोनों का रिकॉर्ड आएगा?", a: "DigiLocker के अनुसार यूनिवर्सिटी दोनों कोर्स के परिणाम और प्रमाण पत्र अपलोड कर सकती है; क्रेडिट भी issuing authority डालती है।" },
    { q: "डिग्री में नाम गलत है, DigiLocker में सुधार कैसे होगा?", a: "DigiLocker डेटा नहीं बदलता। यूनिवर्सिटी में सुधार का आवेदन दें; वे रिकॉर्ड अपडेट करेंगे तो DigiLocker में भी सही दिखेगा।" },
  ],
  related: cards("apaar", "cbse", "board", "abc", "nameChange", "lost"),
  aside: ASIDE,
};
