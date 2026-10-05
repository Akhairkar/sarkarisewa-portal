import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - PIB, Ministry of Railways, 6 Jul 2018 (PRID 1537986): Aadhaar/DL shown
//   from "Issued Documents" in DigiLocker valid proof of identity on trains;
//   documents in "Uploaded Documents" not valid; m-Aadhaar and e-Aadhaar in
//   the list of valid IDs.
// - DigiLocker Ask our Experts (18 Oct 2024): Aadhaar-linked account; a user
//   reports only the Aadhaar card downloading until other issuers push data;
//   if the Aadhaar-linked mobile changes, update the mobile in Aadhaar first
//   (at an Aadhaar enrolment centre) and then in DigiLocker; up to five
//   Aadhaar-verified accounts per mobile number, only one non-verified;
//   "Forgot security PIN?" flow (Sign In -> Aadhaar -> OTP + captcha -> Forgot
//   security PIN -> DOB as per Aadhaar -> new PIN); name on other documents
//   must match the Aadhaar name; family members need their own accounts.
// - uidai.gov.in e-Aadhaar FAQ: e-Aadhaar is digitally signed by UIDAI and
//   equally valid as a physical copy; download from myaadhaar.uidai.gov.in or
//   mAadhaar app with the registered mobile number.
// Left out: the exact screen labels for linking Aadhaar in the current app
// version (they change between releases).
export const aadhaar: DocGuide = {
  crumbs: crumbs("आधार कार्ड"),
  docHi: "आधार कार्ड",
  title: "DigiLocker से आधार कार्ड कैसे डाउनलोड करें | SarkariSewa India",
  description: "DigiLocker में आधार जोड़कर Issued Documents से आधार कैसे डाउनलोड करें, ट्रेन में मान्य है या नहीं, मोबाइल नंबर बदलने या Security PIN भूलने पर क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker से आधार कार्ड कैसे डाउनलोड करें",
  lead: "DigiLocker अकाउंट को आधार से जोड़ने (OTP से सत्यापित करने) के बाद आधार कार्ड Issued Documents में दिखता है, जहां से उसे देखा, डाउनलोड या शेयर किया जा सकता है। इसके लिए आधार से जुड़ा मोबाइल नंबर चालू होना ज़रूरी है, क्योंकि OTP उसी पर आता है। आधार की अलग से PDF चाहिए तो UIDAI के myaadhaar पोर्टल से e-Aadhaar भी डाउनलोड कर सकते हैं।",
  facts: [
    ["कहां दिखता है", "DigiLocker → Issued Documents"],
    ["ज़रूरी", "आधार नंबर और आधार से जुड़ा मोबाइल (OTP)"],
    ["ट्रेन में पहचान", "Issued Documents वाला आधार मान्य (रेल मंत्रालय, 2018)"],
    ["UIDAI का विकल्प", "myaadhaar.uidai.gov.in, mAadhaar ऐप"],
  ],
  sections: [
    {
      id: "steps",
      title: "DigiLocker में आधार जोड़ने और डाउनलोड करने के स्टेप",
      steps: [
        "DigiLocker ऐप (Google Play/App Store) इंस्टॉल करें या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> खोलें।",
        "<strong>Sign Up / Sign In</strong> चुनें और आधार नंबर डालें। आधार से जुड़े मोबाइल पर आया OTP भरें।",
        "पहली बार हैं तो नाम, जन्मतिथि जैसी जानकारी आधार के अनुसार भरें और अपना Security PIN बनाएं।",
        "लॉगिन के बाद <strong>Issued Documents</strong> खोलें; आधार कार्ड वहां दिखेगा। न दिखे तो Search में “Aadhaar” लिखकर आधार दस्तावेज़ चुनें और सहमति देकर लाएं।",
        "आधार खोलकर डाउनलोड/शेयर विकल्प से PDF सेव करें। दूसरों के साथ साझा करते समय सिर्फ भरोसेमंद संस्थाओं को ही दें।",
      ],
      callout: { kind: "info", html: "DigiLocker के अनुसार एक मोबाइल नंबर से <strong>पांच तक आधार-सत्यापित</strong> DigiLocker अकाउंट बन सकते हैं (बिना आधार वाला सिर्फ एक)। यानी परिवार के सदस्य एक ही नंबर से अपने-अपने आधार वाले अकाउंट बना सकते हैं, पर हर सदस्य के दस्तावेज़ उसके अपने अकाउंट में ही आएंगे।" },
    },
    {
      id: "valid",
      title: "DigiLocker वाला आधार कहां मान्य है",
      list: [
        "<strong>ट्रेन यात्रा:</strong> रेल मंत्रालय (जुलाई 2018) के अनुसार DigiLocker में लॉगिन करके <strong>Issued Documents</strong> से दिखाया गया आधार पहचान के लिए मान्य है। <strong>Uploaded Documents</strong> में खुद डाली कॉपी मान्य नहीं।",
        "<strong>e-Aadhaar:</strong> UIDAI के अनुसार डाउनलोड किया e-Aadhaar UIDAI से डिजिटल रूप से साइन होता है और फिजिकल आधार जितना ही मान्य है।",
        "<strong>DigiLocker नियम 9A:</strong> " + RULE_9A,
        "बैंक, सिम या दूसरे KYC में संस्था अपनी प्रक्रिया (जैसे आधार OTP/बायोमेट्रिक e-KYC) अपनाती है; DigiLocker से शेयर करने का विकल्प हो तो वही बेहतर है।",
      ],
    },
    {
      id: "mobile",
      title: "आधार वाला मोबाइल नंबर बदल गया तो",
      intro: "DigiLocker का लॉगिन OTP आधार से जुड़े नंबर पर आता है। DigiLocker की सलाह के अनुसार:",
      steps: [
        "पहले नज़दीकी आधार केंद्र पर जाकर आधार में नया मोबाइल नंबर अपडेट करवाएं (देखें <a href=\"/service/aadhaar-mobile-update.html\">आधार में मोबाइल नंबर अपडेट</a>)।",
        "आधार में नंबर अपडेट होने के बाद DigiLocker में भी नंबर अपडेट करें और नए नंबर से लॉगिन करें।",
      ],
    },
    {
      id: "pin",
      title: "Security PIN भूल गए तो (DigiLocker के बताए स्टेप)",
      steps: [
        "<a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर <strong>Sign In</strong> दबाएं।",
        "<strong>Aadhaar</strong> चुनकर आधार नंबर डालें और Next दबाएं।",
        "OTP और कैप्चा भरकर Submit करें।",
        "<strong>Forgot security PIN?</strong> दबाएं, आधार के अनुसार जन्मतिथि डालें और Next दबाएं।",
        "नया Security PIN सेट करके Submit करें।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["OTP नहीं आ रहा", "आधार से जुड़ा नंबर बंद/बदल गया है तो पहले आधार में नंबर अपडेट करवाएं।"],
          ["आधार में नाम बदलवाया, अब मार्कशीट/DL नहीं आ रहे", "DigiLocker दूसरे दस्तावेज़ तभी देता है जब उन पर नाम आधार से मिले। संबंधित बोर्ड/विभाग से रिकॉर्ड में नाम अपडेट करवाएं।"],
          ["आधार में पता पुराना दिख रहा", "DigiLocker वही दिखाता है जो UIDAI भेजता है; पता UIDAI पोर्टल/आधार केंद्र से अपडेट करवाएं।"],
          ["ऐप नहीं खुल रहा (पुराना फोन)", "DigiLocker के अनुसार ऐप के लिए Android 10 या नया वर्ज़न चाहिए; तब तक वेबसाइट इस्तेमाल करें।"],
          ["कोई और समस्या", DL_SUPPORT + " पर टिकट डालें।"],
        ],
      },
    },
  ],
  official: [
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar (UIDAI)", note: "e-Aadhaar डाउनलोड, अपडेट" },
    { href: "https://uidai.gov.in/", title: "UIDAI official वेबसाइट", note: "uidai.gov.in" },
    { href: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1537986", title: "PIB: ट्रेन में DigiLocker वाला आधार/DL मान्य", note: "6 जुलाई 2018" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "DigiLocker में आधार कैसे जोड़ें?", a: "DigiLocker में आधार नंबर डालकर आधार से जुड़े मोबाइल पर आए OTP से सत्यापन करें। इसके बाद आधार Issued Documents में दिखता है।" },
    { q: "क्या DigiLocker वाला आधार ट्रेन में ID के रूप में चलेगा?", a: "हां। रेल मंत्रालय के 2018 के फैसले के अनुसार DigiLocker के Issued Documents से दिखाया आधार मान्य है, पर Uploaded Documents में रखी कॉपी नहीं।" },
    { q: "DigiLocker और e-Aadhaar में क्या फर्क है?", a: "e-Aadhaar UIDAI की पासवर्ड वाली डिजिटल साइन की हुई PDF है, जो myaadhaar पोर्टल या mAadhaar ऐप से मिलती है। DigiLocker में वही आधार आपके अकाउंट के Issued Documents में रहता है और वहीं से शेयर हो सकता है।" },
    { q: "क्या परिवार के सभी लोगों का आधार एक DigiLocker में रख सकते हैं?", a: "नहीं। DigiLocker व्यक्तिगत है और सिर्फ आपके नाम के दस्तावेज़ देता है। हर सदस्य अपना आधार वाला अकाउंट बनाए; एक मोबाइल नंबर से पांच तक आधार-सत्यापित अकाउंट बन सकते हैं।" },
    { q: "आधार का मोबाइल नंबर बदल गया, DigiLocker नहीं खुल रहा, क्या करें?", a: "पहले आधार केंद्र पर आधार में नया नंबर अपडेट करवाएं, फिर DigiLocker में नंबर अपडेट करें।" },
    { q: "DigiLocker में आधार में सुधार हो सकता है?", a: "नहीं। नाम, पता, जन्मतिथि का सुधार UIDAI (myaadhaar पोर्टल या आधार केंद्र) से होता है; DigiLocker सिर्फ अपडेटेड आधार दिखाता है।" },
  ],
  related: cards("aadhaarGuide", "aadhaarMobile", "pan", "dl", "apaar", "hub"),
  aside: [{ href: "https://myaadhaar.uidai.gov.in/", label: "🪪 myAadhaar पोर्टल" }, ASIDE[1]],
};
