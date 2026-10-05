import type { Section } from "../doc/types";
import { DL_WEB, DL_SUPPORT, DL_ANDROID, DL_IOS, RULES_PDF, RULE_9A, cards } from "./common";

// Hub for /service/digilocker.html (rebuilt from the old static page at the
// same URL; the old title "डिजिलॉकर — SarkariSewa India 2026 | SarkariSewa
// India" repeated the brand and the old description was cut off, so both are
// rewritten). Facts are the ones verified for the child guides (see
// common.ts): rules 9A and 12 of the 2016 DigiLocker Rules (as amended
// 2017); DigiLocker Ask our Experts answers (18 Oct 2024); PIB Railways
// 6 Jul 2018; PIB MoRTH 9 Aug 2018; API Setu directory (4 Oct 2026).
// Also: ECI e-EPIC page (old.eci.gov.in/e-epic/, read through a search
// index excerpt because the site was not reachable directly): "A voter can
// store the card on his/her mobile, upload it on Digi locker or print it".
// e-EPIC is not listed as an issued document in the API Setu directory.
export const hub = {
  title: "DigiLocker: दस्तावेज़ डाउनलोड और पूरी गाइड | SarkariSewa India",
  description: "DigiLocker क्या है, अकाउंट कैसे बनाएं, Issued और Uploaded Documents का फर्क, कानूनी मान्यता (नियम 9A) और मार्कशीट, DL, RC, PAN, आधार डाउनलोड की गाइड।",
  h1: "DigiLocker (डिजिलॉकर): अकाउंट, Issued Documents और डाउनलोड गाइड",
  lead: "DigiLocker इलेक्ट्रॉनिक्स और IT मंत्रालय (MeitY) की फ्री सेवा है, जिसमें बोर्ड, यूनिवर्सिटी, परिवहन विभाग, आयकर विभाग, राज्य सरकारें और बीमा कंपनियां जैसे issuer आपके दस्तावेज़ सीधे भेजते हैं। आधार से लॉगिन करके Search Documents में issuer चुनें, अपना नंबर डालें और दस्तावेज़ Issued Documents में आ जाता है। नियम 9A के अनुसार ये दस्तावेज़ फिजिकल दस्तावेज़ के बराबर स्वीकार किए जा सकते हैं; खुद अपलोड की गई स्कैन कॉपी को यह दर्जा नहीं मिलता।",
  facts: [
    ["official वेबसाइट", DL_WEB],
    ["ऐप", `${DL_ANDROID} · ${DL_IOS} (Android 10+)`],
    ["फीस", "फ्री"],
    ["कानूनी आधार", "IT एक्ट 2000 के तहत DigiLocker नियम 2016, नियम 9A"],
  ] as [string, string][],
  guides: cards("cbse", "board", "degree", "apaar", "dl", "rc", "insurance", "aadhaar", "pan", "ayushman", "income", "caste", "domicile"),
  sections: [
    {
      id: "kya-chahiye",
      title: "आपको क्या चाहिए, कहां मिलेगा",
      table: {
        head: ["दस्तावेज़", "DigiLocker में issuer", "गाइड"],
        rows: [
          ["CBSE 10वीं/12वीं मार्कशीट, माइग्रेशन", "Central Board of Secondary Education", '<a href="/digilocker/cbse-marksheet.html">CBSE मार्कशीट</a>'],
          ["राज्य बोर्ड की मार्कशीट", "आपका राज्य बोर्ड (UP, बिहार, MP, राजस्थान...)", '<a href="/digilocker/state-board-marksheet.html">राज्य बोर्ड</a>'],
          ["डिग्री, यूनिवर्सिटी मार्कशीट", "यूनिवर्सिटी (NAD के ज़रिए)", '<a href="/digilocker/degree-certificate.html">डिग्री</a>'],
          ["APAAR ID कार्ड", "Academic Bank of Credits", '<a href="/digilocker/apaar-id.html">APAAR ID</a>'],
          ["ड्राइविंग लाइसेंस", "Ministry of Road Transport and Highways", '<a href="/digilocker/driving-licence.html">DL</a>'],
          ["गाड़ी की RC, फिटनेस, बीमा", "Ministry of Road Transport and Highways", '<a href="/digilocker/vehicle-rc.html">RC</a>'],
          ["बीमा पॉलिसी", "LIC, New India, United India आदि", '<a href="/digilocker/insurance-policy.html">बीमा</a>'],
          ["आधार", "आधार से अकाउंट जोड़ने पर", '<a href="/digilocker/aadhaar.html">आधार</a>'],
          ["PAN", "Income Tax Department (PAN Verification Record)", '<a href="/digilocker/pan-card.html">PAN</a>'],
          ["आयुष्मान कार्ड", "Pradhan Mantri Jan Arogya Yojana", '<a href="/digilocker/ayushman-card.html">आयुष्मान</a>'],
          ["आय, जाति, निवास प्रमाण पत्र", "राज्य के ई-डिस्ट्रिक्ट/सेवा पोर्टल", '<a href="/digilocker/income-certificate.html">आय</a> · <a href="/digilocker/caste-certificate.html">जाति</a> · <a href="/digilocker/domicile-certificate.html">निवास</a>'],
          ["वोटर ID (e-EPIC)", "Issued Document के रूप में दर्ज नहीं; ECI के अनुसार e-EPIC डाउनलोड करके DigiLocker में अपलोड कर सकते हैं", '<a href="/service/e-voter-epic-download.html">e-EPIC</a>'],
          ["पासपोर्ट", "DigiLocker के अनुसार पासपोर्ट विभाग अभी जुड़ा नहीं", "—"],
        ],
      },
    },
    {
      id: "account",
      title: "DigiLocker अकाउंट कैसे बनाएं",
      steps: [
        `DigiLocker ऐप (${DL_ANDROID}/${DL_IOS}) इंस्टॉल करें या ${DL_WEB} खोलें। ऐप के लिए Android 10 या नया वर्ज़न चाहिए; पुराने फोन में वेबसाइट इस्तेमाल करें।`,
        "<strong>Sign Up</strong> चुनें और आधार नंबर डालें; आधार से जुड़े मोबाइल पर आए OTP से सत्यापन करें।",
        "नाम, जन्मतिथि जैसी जानकारी आधार के अनुसार भरें और Security PIN बनाएं।",
        "लॉगिन के बाद <strong>Issued Documents</strong> में आधार दिखेगा। बाकी दस्तावेज़ <strong>Search Documents</strong> से लाएं।",
      ],
      callout: { kind: "info", html: "DigiLocker के अनुसार एक मोबाइल नंबर से पांच तक आधार-सत्यापित अकाउंट बन सकते हैं (बिना आधार वाला सिर्फ एक)। अकाउंट व्यक्तिगत है: परिवार के हर सदस्य के दस्तावेज़ उसके अपने अकाउंट में ही आते हैं।" },
    },
    {
      id: "issued-uploaded",
      title: "Issued Documents और Uploaded Documents का फर्क",
      table: {
        head: ["", "Issued Documents", "Uploaded Documents"],
        rows: [
          ["कौन डालता है", "issuer (बोर्ड, विभाग, कंपनी) अपने रिकॉर्ड से", "आप खुद स्कैन/फोटो अपलोड करते हैं"],
          ["मान्यता", "नियम 9A के तहत फिजिकल दस्तावेज़ के बराबर स्वीकार किया जा सकता है", "issuer का जारी दस्तावेज़ नहीं माना जाता"],
          ["उदाहरण", "ट्रेन में Issued वाला आधार/DL मान्य (रेल मंत्रालय, 2018)", "ट्रेन में Uploaded कॉपी मान्य नहीं"],
          ["सुधार", "सिर्फ issuer कर सकता है", "आप फाइल बदल सकते हैं"],
        ],
      },
    },
    {
      id: "manyata",
      title: "कानूनी मान्यता: नियम 9A",
      intro: RULE_9A,
      list: [
        "<strong>परिवहन:</strong> परिवहन मंत्रालय की अगस्त 2018 की एडवाइज़री के अनुसार DigiLocker/mParivahan में दिखाया DL और RC मूल के बराबर मान्य है।",
        "<strong>रेल:</strong> रेल मंत्रालय (जुलाई 2018) के अनुसार Issued Documents से दिखाया आधार और DL ट्रेन में पहचान के लिए मान्य है।",
        "<strong>शिक्षा और नौकरी:</strong> DigiLocker के अनुसार Issued Documents एडमिशन और नौकरी के लिए स्वीकार किए जाने चाहिए; फिर भी कुछ संस्थाएं सत्यापन में मूल प्रति देखती हैं।",
        `नियमों का पूरा पाठ: ${RULES_PDF}।`,
      ],
    },
    {
      id: "aam-dikkat",
      title: "दस्तावेज़ न मिले तो: 4 बातें जो हर दस्तावेज़ पर लागू हैं",
      list: [
        "<strong>नाम आधार से मिलना चाहिए:</strong> दस्तावेज़ और आधार में नाम अलग हो (क्रम भी) तो DigiLocker दस्तावेज़ नहीं देता। सुधार issuer के रिकॉर्ड या आधार में करवाएं।",
        "<strong>DigiLocker खुद डेटा नहीं डालता:</strong> आपका साल/रिकॉर्ड नहीं है तो issuer ने उसे नहीं भेजा। बोर्ड/विभाग से अनुरोध करें।",
        "<strong>सुधार सिर्फ issuer करेगा:</strong> गलत नाम, अंक या पता DigiLocker में नहीं बदलते।",
        `<strong>सपोर्ट टिकट:</strong> ${DL_SUPPORT} पर दस्तावेज़ की स्कैन कॉपी या पूरा नाम, issuer का नाम, वर्ष, रोल/रजिस्ट्रेशन नंबर, मोबाइल नंबर और एरर का स्क्रीनशॉट दें।`,
      ],
    },
    {
      id: "shikayat",
      title: "शिकायत और सुरक्षा",
      list: [
        "DigiLocker नियमों (नियम 12, 2017 का संशोधन) के अनुसार सेवा प्रदाता को अपनी वेबसाइट पर शिकायत अधिकारी का नाम और संपर्क देना होता है; शिकायत एक महीने में निपटानी होती है, और आदेश से असंतुष्ट व्यक्ति 15 दिन में Digital Locker Authority के पास अपील कर सकता है।",
        "Security PIN भूल गए: Sign In → Aadhaar → OTP और कैप्चा → <strong>Forgot security PIN?</strong> → आधार के अनुसार जन्मतिथि → नया PIN।",
        "आधार का मोबाइल नंबर बदला है तो पहले आधार में नंबर अपडेट करवाएं, फिर DigiLocker में।",
        "DigiLocker के नाम से आए अनजान लिंक या APK न खोलें; ऐप सिर्फ Google Play/App Store से लें।",
      ],
    },
  ] as Section[],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker official वेबसाइट", note: "digilocker.gov.in" },
    { href: "https://support.digilocker.gov.in/", title: "DigiLocker सपोर्ट", note: "टिकट और शिकायत" },
    { href: "https://cdn.digilocker.gov.in/assets/img/digi_locker_rules_and_amendment.pdf", title: "DigiLocker नियम 2016 और संशोधन 2017", note: "PDF, नियम 9A और 12" },
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=181696", title: "PIB: DigiLocker/mParivahan में DL-RC मान्य", note: "9 अगस्त 2018" },
    { href: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1537986", title: "PIB: ट्रेन में DigiLocker वाला आधार/DL", note: "6 जुलाई 2018" },
    { href: "https://directory.apisetu.gov.in/", title: "API Setu डायरेक्टरी", note: "DigiLocker से जुड़े issuer" },
  ],
  faq: [
    { q: "DigiLocker में रखे दस्तावेज़ कानूनी रूप से मान्य हैं?", a: "Issued Documents (जो issuer ने सीधे भेजे) DigiLocker नियम 2016 के नियम 9A के तहत फिजिकल दस्तावेज़ के बराबर स्वीकार किए जा सकते हैं। खुद अपलोड की गई स्कैन कॉपी को यह दर्जा नहीं है।" },
    { q: "Issued और Uploaded Documents में क्या अंतर है?", a: "Issued Documents issuer के अपने रिकॉर्ड से आते हैं और उन्हें सिर्फ issuer बदल सकता है। Uploaded Documents आपकी अपनी स्कैन कॉपी हैं; उदाहरण के लिए रेल मंत्रालय ट्रेन में पहचान के लिए Uploaded कॉपी नहीं मानता।" },
    { q: "मोबाइल नंबर बदल गया तो DigiLocker कैसे खोलें?", a: "DigiLocker की सलाह है कि पहले आधार केंद्र पर आधार में नया मोबाइल नंबर अपडेट करवाएं, फिर DigiLocker में नंबर अपडेट करें।" },
    { q: "क्या DigiLocker इस्तेमाल करने की कोई फीस है?", a: "नहीं, DigiLocker अकाउंट बनाना और issuer के दस्तावेज़ लाना फ्री है।" },
    { q: "मेरा दस्तावेज़ DigiLocker में क्यों नहीं मिल रहा?", a: "तीन आम वजहें: issuer ने आपका रिकॉर्ड DigiLocker पर नहीं भेजा, दस्तावेज़ और आधार में नाम अलग है, या भरी गई जानकारी (रोल नंबर, वर्ष, नंबर) गलत है। रिकॉर्ड न हो तो issuer से ही अनुरोध करना होगा।" },
    { q: "क्या DigiLocker विदेश में चलता है?", a: "DigiLocker के अनुसार भारत से बाहर इस्तेमाल के लिए भारतीय मोबाइल नंबर या सत्यापित ई-मेल ID होना चाहिए।" },
    { q: "क्या पासपोर्ट और वोटर ID DigiLocker में मिलते हैं?", a: "DigiLocker के अनुसार पासपोर्ट विभाग अभी जुड़ा नहीं है। वोटर ID का e-EPIC ECI के पोर्टल/ऐप से डाउनलोड होता है; ECI के अनुसार उसे DigiLocker में अपलोड किया जा सकता है, पर वह Issued Document के रूप में सूचीबद्ध नहीं है।" },
  ],
};
