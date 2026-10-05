import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - CBSE user manual "Stepwise User guide to access Class X and XII Marksheets
//   cum Passing Certificate & Migration Certificate" (cbse.gov.in/cbsenew/
//   documents//Security_Pin_Circular_Usermanual_Abroad_10052023.pdf):
//   cbseservices.digilocker.gov.in/activatecbse, class, school code, roll
//   number, 6-digit security PIN from school, mobile + OTP, DOB may be asked for
//   class X; PIN-activated accounts get documents pushed to Issued Documents,
//   other accounts must search and pull; options for students abroad
//   (results.digilocker.gov.in, face verification, support ticket).
// - CBSE "Multimode Result Dissemination" note (cbse.gov.in/cbsenew/documents//
//   DOCUMENT_REGARDING_RESULT_DISSAMINATION.pdf): Parinam Manjusha repository
//   integrated with DigiLocker since 2016; marksheet cum passing certificate,
//   migration and skill certificates; school gets the PIN file in its own
//   DigiLocker account; results also on cbseresults.nic.in and UMANG.
// - API Setu directory, issuer "Central Board of Secondary Education"
//   (in.gov.cbse): Class X/XII Marksheet, Class X / XII Passing Certificate,
//   Class X/XII Migration Certificate, Compartment Marksheets, Merit
//   Certificates, Skill Certificates, CTET (Teachers Eligibility Test) Mark
//   Sheet and Certificate, NEET Marksheet / Rank Letter.
// - DigiLocker Ask our Experts (18 Oct 2024): name must match Aadhaar; only
//   the board can upload/correct; support ticket details.
// Left out: CBSE duplicate-document fees and timelines (only old pages found).
export const cbseMarksheet: DocGuide = {
  crumbs: crumbs("CBSE मार्कशीट"),
  docHi: "CBSE मार्कशीट",
  title: "DigiLocker से CBSE मार्कशीट कैसे डाउनलोड करें | SarkariSewa India",
  description: "CBSE 10वीं-12वीं की मार्कशीट, पासिंग और माइग्रेशन सर्टिफिकेट DigiLocker से: 6 अंकों का Security PIN, स्कूल कोड, रोल नंबर, स्टेप और आम गलतियां।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से CBSE 10वीं-12वीं मार्कशीट कैसे डाउनलोड करें",
  lead: "CBSE अपनी 10वीं और 12वीं की मार्कशीट-कम-पासिंग सर्टिफिकेट, माइग्रेशन सर्टिफिकेट और स्किल सर्टिफिकेट अपने डिजिटल भंडार 'परिणाम मंजूषा' से सीधे DigiLocker में देता है। रिज़ल्ट से पहले या बाद में cbseservices.digilocker.gov.in/activatecbse पर कक्षा, स्कूल कोड, रोल नंबर और स्कूल से मिला 6 अंकों का Security PIN डालकर अकाउंट एक्टिवेट करें; रिज़ल्ट आते ही दस्तावेज़ Issued Documents में आ जाते हैं।",
  facts: [
    ["जारी करने वाला (issuer)", "Central Board of Secondary Education"],
    ["क्या मिलता है", "मार्कशीट-कम-पासिंग सर्टिफिकेट, माइग्रेशन, स्किल सर्टिफिकेट"],
    ["एक्टिवेशन के लिए", "कक्षा, स्कूल कोड, रोल नंबर, 6 अंकों का Security PIN"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "kya-milta-hai",
      title: "CBSE के कौन-कौन से दस्तावेज़ DigiLocker में हैं",
      intro: "API Setu (DigiLocker का issuer प्लेटफॉर्म) पर CBSE के नाम से ये दस्तावेज़ दर्ज हैं। आपके साल का रिकॉर्ड तभी मिलेगा जब बोर्ड ने उसे DigiLocker पर भेजा हो।",
      table: {
        head: ["दस्तावेज़ (DigiLocker में नाम)", "किसके काम का"],
        rows: [
          ["Class X Marksheet / Class XII Marksheet", "एडमिशन, नौकरी, स्कॉलरशिप में अंक का सबूत"],
          ["Class X / Matriculation Passing Certificate, Class XII Passing Certificate", "परीक्षा पास करने का प्रमाण पत्र"],
          ["Class X / Class XII Migration Certificate", "दूसरे बोर्ड या यूनिवर्सिटी में दाखिला"],
          ["Class Xth / XIIth Compartment Marksheet", "सप्लीमेंट्री परीक्षा के बाद की मार्कशीट"],
          ["Class X / XII Merit Certificate, Skill Certificate", "मेरिट और स्किल विषय वाले छात्रों के लिए"],
          ["CTET (Teachers Eligibility Test) Mark Sheet / Certificate", "शिक्षक भर्ती"],
          ["NEET Marksheet, NEET Rank Letter", "जिन वर्षों का डेटा CBSE के issuer खाते में है"],
        ],
      },
    },
    {
      id: "pin-se-activate",
      title: "तरीका 1: Security PIN से अकाउंट एक्टिवेट करें (सबसे आसान)",
      intro: "CBSE हर छात्र का 6 अंकों का Security PIN स्कूल के DigiLocker खाते में भेजता है; स्कूल यह PIN छात्रों को देता है। PIN न मिला हो तो अपने स्कूल से मांगें।",
      steps: [
        "ब्राउज़र में <a href=\"https://cbseservices.digilocker.gov.in/activatecbse\" target=\"_blank\" rel=\"noopener nofollow\">cbseservices.digilocker.gov.in/activatecbse</a> खोलें और <strong>Get Started with Account Confirmation</strong> दबाएं।",
        "अपनी कक्षा (X या XII) चुनें, फिर <strong>स्कूल कोड, रोल नंबर और 6 अंकों का Security PIN</strong> डालें। PIN में सिर्फ अंक लिखें (जैसे 012345)। 10वीं वालों से जन्मतिथि भी पूछी जा सकती है।",
        "स्क्रीन पर आपकी जानकारी दिखेगी। अपना 10 अंकों का मोबाइल नंबर डालकर Submit करें और आए OTP को भरें।",
        "अकाउंट एक्टिवेट होने पर <strong>Go to DigiLocker account</strong> दबाएं। मोबाइल नंबर पहले से DigiLocker में रजिस्टर्ड है तो भी यही संदेश आता है।",
        "रिज़ल्ट घोषित होते ही मार्कशीट-कम-सर्टिफिकेट और माइग्रेशन सर्टिफिकेट <strong>Issued Documents</strong> में अपने-आप आ जाते हैं। वहीं से PDF डाउनलोड या शेयर करें।",
      ],
    },
    {
      id: "search-se",
      title: "तरीका 2: पुराने या बिना PIN वाले अकाउंट में Search करके",
      intro: "CBSE के मैनुअल के अनुसार जिन अकाउंट को PIN से एक्टिवेट नहीं किया गया, उनमें मार्कशीट अपने-आप नहीं आती; उसे खुद खोजकर (pull) लाना होता है।",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार/मोबाइल से लॉगिन करें।",
        "<strong>Search Documents</strong> में “CBSE” या “Central Board of Secondary Education” लिखें।",
        "ज़रूरी दस्तावेज़ चुनें, जैसे Class XII Marksheet या Class X Passing Certificate।",
        "पासिंग वर्ष और रोल नंबर जैसी जो जानकारी मांगी जाए, अपने एडमिट कार्ड/पुरानी मार्कशीट से बिल्कुल वैसी ही भरें।",
        "सहमति (consent) देकर दस्तावेज़ लाएं; वह Issued Documents में सेव हो जाएगा।",
      ],
      callout: { kind: "info", html: "विदेश में स्थित CBSE स्कूलों के छात्रों के लिए CBSE ने अलग विकल्प दिए हैं: results.digilocker.gov.in से ई-मेल पर मार्कशीट, फेस वेरिफिकेशन, या DigiLocker सपोर्ट पर टिकट।" },
    },
    {
      id: "valid",
      title: "क्या DigiLocker वाली CBSE मार्कशीट मान्य है",
      intro: `${RULE_9A}`,
      list: [
        "एडमिशन या नौकरी के ऑनलाइन फॉर्म में DigiLocker से सीधे शेयर करना सबसे भरोसेमंद है, क्योंकि लेने वाला issuer के रिकॉर्ड से मिलान कर सकता है।",
        "कुछ संस्थान फिर भी मूल/प्रिंटेड कॉपी मांगते हैं; उनके नियम पहले पूछ लें।",
        "Uploaded Documents में खुद स्कैन करके डाली मार्कशीट को Issued Document जैसा दर्जा नहीं मिलता।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["Security PIN नहीं मिला या खो गया", "अपने स्कूल से संपर्क करें; PIN फाइल स्कूल के DigiLocker खाते में आती है।"],
          ["Invalid details / रिकॉर्ड नहीं मिला", "स्कूल कोड और रोल नंबर एडमिट कार्ड से दोबारा मिलाएं; रिज़ल्ट घोषित होने से पहले दस्तावेज़ नहीं दिखते।"],
          ["आधार और मार्कशीट में नाम अलग", "DigiLocker नाम मेल न खाने पर दस्तावेज़ नहीं देता। सुधार CBSE के रिकॉर्ड में ही होगा (स्कूल/क्षेत्रीय कार्यालय से), या आधार में नाम सही करवाएं।"],
          ["पुराने साल की मार्कशीट नहीं मिल रही", "वह साल बोर्ड ने DigiLocker पर नहीं भेजा हो सकता। " + DL_SUPPORT + " पर टिकट डालें: नाम, बोर्ड, पासिंग वर्ष, रोल नंबर, कुल अंक, मोबाइल नंबर और एरर का स्क्रीनशॉट दें।"],
          ["मार्कशीट में अंक/नाम गलत छपा", "DigiLocker डेटा नहीं बदल सकता; सुधार केवल CBSE करेगा।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के अलावा official रास्ता",
      list: [
        "रिज़ल्ट देखने के लिए <a href=\"https://cbseresults.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">cbseresults.nic.in</a>, results.digilocker.gov.in और UMANG ऐप (यह ऑनलाइन रिज़ल्ट है, प्रमाण पत्र नहीं)।",
        "मूल मार्कशीट/सर्टिफिकेट स्कूल के माध्यम से मिलता है।",
        "मूल खो जाए तो डुप्लीकेट के लिए CBSE की official वेबसाइट <a href=\"https://www.cbse.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cbse.gov.in</a> पर दी प्रक्रिया अपनाएं; कई मामलों में शपथ पत्र मांगा जाता है (देखें <a href=\"/affidavit/lost-document.html\">दस्तावेज़ खोने का एफिडेविट</a>)।",
      ],
    },
  ],
  official: [
    { href: "https://cbseservices.digilocker.gov.in/activatecbse", title: "CBSE DigiLocker अकाउंट एक्टिवेशन", note: "Security PIN से" },
    { href: "https://www.cbse.gov.in/", title: "CBSE official वेबसाइट", note: "cbse.gov.in" },
    { href: "https://cbseresults.nic.in/", title: "CBSE रिज़ल्ट", note: "cbseresults.nic.in" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "CBSE का Security PIN कहां से मिलेगा?", a: "CBSE छात्र-वार Security PIN की फाइल स्कूलों के DigiLocker खाते में भेजता है और स्कूल हर छात्र को उसका PIN देता है। PIN न मिला हो तो अपने स्कूल से संपर्क करें।" },
    { q: "रिज़ल्ट से पहले अकाउंट एक्टिवेट कर लिया, मार्कशीट कब दिखेगी?", a: "CBSE के मैनुअल के अनुसार आपकी कक्षा का रिज़ल्ट प्रकाशित होने के बाद डिजिटल मार्कशीट-कम-सर्टिफिकेट और माइग्रेशन सर्टिफिकेट Issued Documents में दिखते हैं।" },
    { q: "क्या बिना Security PIN के CBSE मार्कशीट मिल सकती है?", a: "हां, सामान्य DigiLocker अकाउंट में Search Documents से CBSE चुनकर मांगी गई जानकारी भरकर मार्कशीट खुद pull करनी होती है। PIN वाले अकाउंट में यह अपने-आप आती है।" },
    { q: "माइग्रेशन सर्टिफिकेट भी DigiLocker में आता है क्या?", a: "हां, CBSE के अनुसार Class X और XII का माइग्रेशन सर्टिफिकेट भी DigiLocker में दिया जाता है।" },
    { q: "आधार में नाम बदल गया है, मार्कशीट पुराने नाम पर है, क्या करें?", a: "DigiLocker नाम मेल न खाने पर दस्तावेज़ fetch नहीं करता। DigiLocker की सलाह है कि बोर्ड से अपने रिकॉर्ड में नाम आधार के अनुसार अपडेट करने का अनुरोध करें; अपडेट के बाद दस्तावेज़ मिल जाएगा।" },
    { q: "क्या DigiLocker की मार्कशीट कॉलेज एडमिशन में मान्य है?", a: "DigiLocker नियमों के नियम 9A के अनुसार Issued Documents को फिजिकल दस्तावेज़ के बराबर स्वीकार किया जा सकता है। फिर भी कुछ संस्थान अपनी प्रक्रिया में मूल प्रति देखते हैं, इसलिए उनकी सूचना पढ़ लें।" },
  ],
  related: cards("board", "degree", "apaar", "aadhaar", "students", "lost"),
  aside: [{ href: "https://cbseservices.digilocker.gov.in/activatecbse", label: "🔑 CBSE अकाउंट एक्टिवेट करें" }, ASIDE[1]],
};
