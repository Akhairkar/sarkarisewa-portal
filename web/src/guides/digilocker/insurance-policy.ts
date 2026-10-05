import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory (DigiLocker issuers), insurers and document types as
//   listed: New India Assurance Co. Ltd. (Car, Two Wheeler, Commercial Vehicle,
//   Health, Travel, Engineering, Miscellaneous); United India Insurance
//   Company Limited (Car, Two Wheeler, Commercial Vehicle, Health, Travel,
//   Personal Accident); National Insurance Company Ltd. (vehicle, Health,
//   Home, Group, Property, Marine...); The Oriental Insurance Co. Ltd.
//   (vehicle, Health, Home, Travel, Property, Marine, Policy Document);
//   ICICI Lombard GIC Ltd.; HDFC ERGO General Insurance; Bajaj General
//   Insurance (incl. Cyber); SBI General; Go Digit; Royal Sundaram; Zuno;
//   Tata AIG (Policy Document); Life: Life Insurance Corporation of India
//   (Policy Document), Postal Life Insurance (Insurance - Life, Crop Insurance
//   Certificate), Bajaj Life (Insurance - Life), Canara HSBC Life, Pramerica
//   Life, Star Union Dai-Ichi Life, Future Generali Life, Bandhan Life,
//   IndusInd Nippon Life. MoRTH issuer: "Vehicle Insurance Certificate".
// - PIB, MoRTH, 9 Aug 2018: insurance data uploaded daily by the Insurance
//   Information Bureau to VAHAN; if mParivahan/eChallan shows a policy in
//   force, a physical insurance copy is not to be enforced.
// - DigiLocker Ask our Experts (18 Oct 2024): name must match; DigiLocker
//   shows only issuer data; changes only by the issuer.
// Left out: search fields per insurer (they differ; not confirmed), IRDAI
// e-insurance account rules.
export const insurancePolicy: DocGuide = {
  crumbs: crumbs("बीमा पॉलिसी"),
  docHi: "बीमा पॉलिसी",
  title: "DigiLocker में बीमा पॉलिसी कैसे रखें | SarkariSewa India",
  description: "गाड़ी, हेल्थ और लाइफ इंश्योरेंस पॉलिसी DigiLocker में कैसे लाएं, किन बीमा कंपनियों की मिलती है, गाड़ी बीमा पुलिस को कैसे दिखाएं और पॉलिसी न मिले तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker में बीमा पॉलिसी (गाड़ी, हेल्थ, लाइफ) कैसे लाएं",
  lead: "LIC, New India Assurance, United India, National, Oriental, ICICI Lombard, HDFC ERGO जैसी कई बीमा कंपनियां DigiLocker से जुड़ी हैं। Search Documents में अपनी बीमा कंपनी का नाम खोजें, पॉलिसी का प्रकार (Car, Two Wheeler, Health, Life या Policy Document) चुनें और पॉलिसी नंबर व मांगी गई जानकारी भरें; पॉलिसी Issued Documents में आ जाएगी। गाड़ी के बीमे के लिए परिवहन मंत्रालय का “Vehicle Insurance Certificate” भी है।",
  facts: [
    ["कौन देता है", "आपकी बीमा कंपनी (issuer)"],
    ["आम प्रकार", "Car, Two Wheeler, Commercial Vehicle, Health, Life, Policy Document"],
    ["गाड़ी बीमा", "MoRTH का Vehicle Insurance Certificate भी"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "companies",
      title: "कौन सी बीमा कंपनी क्या देती है",
      intro: "API Setu (DigiLocker issuer प्लेटफॉर्म) पर 4 अक्टूबर 2026 को दर्ज कुछ प्रमुख कंपनियां। सूची पूरी नहीं है; अपनी कंपनी का नाम Search में खोजें।",
      table: {
        head: ["बीमा कंपनी (DigiLocker में नाम)", "दर्ज पॉलिसी प्रकार"],
        rows: [
          ["Life Insurance Corporation of India", "Policy Document"],
          ["Postal Life Insurance, Department of Posts", "Insurance - Life, Crop Insurance Certificate"],
          ["New India Assurance Co. Ltd.", "Car, Two Wheeler, Commercial Vehicle, Health, Travel"],
          ["United India Insurance Company Limited", "Car, Two Wheeler, Commercial Vehicle, Health, Personal Accident, Travel"],
          ["National Insurance Company Ltd.", "Car, Two Wheeler, Commercial Vehicle, Health, Home, Group"],
          ["The Oriental Insurance Co. Ltd.", "Car, Two Wheeler, Commercial Vehicle, Health, Home, Travel"],
          ["ICICI Lombard, HDFC ERGO, Bajaj General, SBI General, Go Digit", "Car, Two Wheeler, Health और अन्य"],
          ["Bajaj Life, Canara HSBC Life, Star Union Dai-Ichi Life, Pramerica Life", "Insurance - Life"],
        ],
      },
    },
    {
      id: "steps",
      title: "पॉलिसी लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर लॉगिन करें।",
        "<strong>Search Documents</strong> में बीमा कंपनी का नाम लिखें (जैसे “New India Assurance”, “Life Insurance Corporation”)।",
        "पॉलिसी का प्रकार चुनें: Insurance Policy - Car / Two Wheeler, Insurance - Health, Insurance - Life या Policy Document।",
        "<strong>पॉलिसी नंबर</strong> और स्क्रीन पर मांगी गई दूसरी जानकारी अपनी पॉलिसी कॉपी/ई-मेल से भरें। हर कंपनी के फील्ड थोड़े अलग हो सकते हैं।",
        "सहमति देकर दस्तावेज़ लाएं। पॉलिसी <strong>Issued Documents</strong> में सेव होगी; रिन्यूअल के बाद नई पॉलिसी फिर से लानी पड़ सकती है।",
      ],
    },
    {
      id: "gaadi",
      title: "गाड़ी का बीमा: पुलिस को क्या दिखाएं",
      list: [
        "MoRTH की अगस्त 2018 की एडवाइज़री के अनुसार नई और रिन्यू हुई पॉलिसियों का डेटा Insurance Information Bureau रोज़ VAHAN पर भेजता है।",
        "अगर mParivahan या eChallan ऐप में गाड़ी के विवरण में <strong>चालू पॉलिसी</strong> दिख रही है, तो बीमा की कागज़ी कॉपी पर ज़ोर नहीं दिया जाना है।",
        "DigiLocker में परिवहन मंत्रालय का <strong>Vehicle Insurance Certificate</strong> या बीमा कंपनी की पॉलिसी Issued Documents में रखें; दोनों ही इलेक्ट्रॉनिक रिकॉर्ड हैं।",
        "पॉलिसी खत्म होने के बाद पुराना दस्तावेज़ DigiLocker में दिखता रहे तो भी वह बीमा का सबूत नहीं है; तारीख ज़रूर देखें।",
      ],
      callout: { kind: "info", html: "RC और DL भी DigiLocker में रखें: <a href=\"/digilocker/vehicle-rc.html\">गाड़ी की RC</a>, <a href=\"/digilocker/driving-licence.html\">ड्राइविंग लाइसेंस</a>।" },
    },
    {
      id: "valid",
      title: "DigiLocker की पॉलिसी कितनी मान्य",
      intro: RULE_9A,
      list: [
        "क्लेम के समय बीमा कंपनी अपनी प्रक्रिया के अनुसार दस्तावेज़ मांगती है; DigiLocker कॉपी से पॉलिसी नंबर और शर्तें तुरंत मिल जाती हैं।",
        "नॉमिनी को पॉलिसी की जानकारी हो, इसके लिए पॉलिसी नंबर अलग से भी सुरक्षित रखें; DigiLocker अकाउंट व्यक्तिगत है।",
      ],
    },
    {
      id: "galtiyan",
      title: "पॉलिसी न मिले तो",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["कंपनी सर्च में नहीं", "आपकी बीमा कंपनी अभी DigiLocker से नहीं जुड़ी; पॉलिसी कंपनी के पोर्टल/ऐप से डाउनलोड करें।"],
          ["Record not found", "पॉलिसी नंबर पॉलिसी शेड्यूल से मिलाएं; नई पॉलिसी का डेटा कंपनी के भेजने के बाद ही आता है। कंपनी के कस्टमर केयर से पूछें कि आपकी पॉलिसी DigiLocker पर भेजी गई है या नहीं।"],
          ["पॉलिसी किसी और के नाम (जैसे पति/पिता)", "DigiLocker सिर्फ आपके नाम के दस्तावेज़ देता है; पॉलिसीधारक के अपने DigiLocker में आएगी।"],
          ["नाम मेल नहीं खाता", "पॉलिसी और आधार में नाम अलग हो तो fetch नहीं होगी; बीमा कंपनी से नाम सुधार (endorsement) करवाएं।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
  ],
  official: [
    ...OFFICIAL_DL,
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=181696", title: "PIB: MoRTH एडवाइज़री (बीमा की कागज़ी कॉपी)", note: "9 अगस्त 2018" },
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "जुड़ी हुई बीमा कंपनियां" },
  ],
  faq: [
    { q: "LIC पॉलिसी DigiLocker में कैसे लाएं?", a: "Search Documents में “Life Insurance Corporation of India” खोजें, “Policy Document” चुनें और पॉलिसी नंबर व मांगी गई जानकारी भरें।" },
    { q: "गाड़ी का बीमा DigiLocker में दिखाने पर चलेगा?", a: "MoRTH के अनुसार mParivahan/eChallan ऐप में गाड़ी के विवरण में चालू पॉलिसी दिखे तो कागज़ी कॉपी पर ज़ोर नहीं दिया जाना है। DigiLocker में Vehicle Insurance Certificate या कंपनी की पॉलिसी भी रख सकते हैं।" },
    { q: "हेल्थ इंश्योरेंस पॉलिसी भी DigiLocker में मिलती है?", a: "हां, कई कंपनियां “Insurance - Health” दस्तावेज़ देती हैं, जैसे New India, United India, National, Oriental, ICICI Lombard, HDFC ERGO। अपनी कंपनी Search करके देखें।" },
    { q: "मेरी बीमा कंपनी DigiLocker में नहीं है, क्या करूं?", a: "तब पॉलिसी कंपनी की वेबसाइट/ऐप या ई-मेल से ही लें। DigiLocker में खुद अपलोड की गई PDF Issued Document नहीं मानी जाती।" },
    { q: "रिन्यूअल के बाद DigiLocker में नई पॉलिसी अपने-आप आएगी?", a: "यह कंपनी पर निर्भर है। नई पॉलिसी न दिखे तो Search करके नए पॉलिसी नंबर से दोबारा लाएं।" },
  ],
  related: cards("rc", "dl", "mparivahan", "ayushman", "challan", "hub"),
  aside: ASIDE,
};
