import type { DocGuide } from "./types";

// Sources (checked 14-15 Oct 2026; national facts shared with the per-state
// *-voter-id-card.ts guides):
// - eci.gov.in/e-epic/ (search extract): e-EPIC download after login, with
//   EPIC number or Form reference number and OTP on the mobile registered in
//   the electoral roll. Vikaspedia "All about e-EPIC": e-KYC if the mobile is
//   not registered (hedged in the text).
// - PIB 29.10.2025 (PRID 2183805): National Contact Centre 1800-11-1950,
//   8 AM-8 PM; 'Book-a-Call with BLO' on ECINET. PIB 04.11.2025 (PRID
//   2186480): dial 1950 with STD code; check name at voters.eci.gov.in.
// - ceogoa.nic.in: Form 6 / 7 / 8 / 6A on voters.eci.gov.in; name search at
//   electoralsearch.eci.gov.in.
// - Search extracts (dailypioneer.com, May 2025 and explainers): ECINET
//   merges the Voter Helpline App and other ECI apps; e-EPIC download is one
//   of its services.
// Left out: e-EPIC file password format and any fee (none found officially).
export const eVoterEpicDownload: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "e-EPIC डाउनलोड" },
  ],
  docHi: "e-EPIC डाउनलोड",
  title: "डिजिटल ई-एपिक वोटर कार्ड (e-EPIC Download) 2026",
  description: "e-EPIC (डिजिटल वोटर कार्ड) 2026: voters.eci.gov.in या ECINET ऐप से PDF डाउनलोड, EPIC/फॉर्म रेफरेंस नंबर और OTP, मोबाइल रजिस्टर न हो तो क्या करें, हेल्पलाइन 1950।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "e-EPIC डाउनलोड 2026: डिजिटल वोटर कार्ड PDF कैसे निकालें",
  lead: "e-EPIC आपके वोटर आईडी कार्ड (EPIC) का डिजिटल PDF है, जिसे भारत निर्वाचन आयोग (ECI) के पोर्टल <strong>voters.eci.gov.in</strong> या ECI के <strong>ECINET</strong> ऐप से डाउनलोड किया जाता है। लॉगिन के बाद EPIC नंबर या फॉर्म 6 का रेफरेंस नंबर डालें; OTP उसी मोबाइल पर आता है जो वोटर लिस्ट में आपके नाम से दर्ज है। मदद के लिए हेल्पलाइन <strong>1950</strong> है।",
  facts: [
    ["पोर्टल", '<a href="https://voters.eci.gov.in/" target="_blank" rel="noopener nofollow">voters.eci.gov.in</a>'],
    ["ऐप", "ECINET (पहले Voter Helpline App)"],
    ["क्या चाहिए", "EPIC नंबर या फॉर्म रेफरेंस नंबर, रजिस्टर्ड मोबाइल"],
    ["हेल्पलाइन", "1950 (STD कोड के साथ) / 1800-11-1950"],
  ],
  sections: [
    {
      id: "download",
      title: "e-EPIC डाउनलोड करने के स्टेप",
      steps: [
        '<a href="https://voters.eci.gov.in/" target="_blank" rel="noopener nofollow">voters.eci.gov.in</a> खोलें और मोबाइल नंबर/ईमेल/EPIC नंबर से OTP डालकर <strong>लॉगिन</strong> करें। अकाउंट नहीं है तो पहले Sign-up करें।',
        "<strong>E-EPIC Download</strong> विकल्प चुनें।",
        "<strong>EPIC नंबर</strong> (वोटर कार्ड पर लिखा नंबर) या नया नाम जुड़वाते समय मिला <strong>फॉर्म रेफरेंस नंबर</strong> डालें और राज्य चुनें।",
        "वोटर लिस्ट में दर्ज मोबाइल पर आया <strong>OTP</strong> डालें।",
        "<strong>Download e-EPIC</strong> दबाकर PDF सेव करें। चाहें तो प्रिंट कर लें।",
      ],
      callout: { kind: "info", html: "ECINET ऐप में भी e-EPIC डाउनलोड का विकल्प है। e-EPIC को DigiLocker में भी रखा जा सकता है।" },
    },
    {
      id: "mobile-nahi",
      title: "वोटर लिस्ट में मोबाइल नंबर दर्ज नहीं है तो",
      list: [
        "पोर्टल पर आपसे <strong>e-KYC</strong> (चेहरे/आधार से पहचान) करके मोबाइल जोड़ने का विकल्प आ सकता है; उसे पूरा करें।",
        "या <strong>फॉर्म 8</strong> भरकर मोबाइल नंबर दर्ज/अपडेट करवाएं, फिर e-EPIC डाउनलोड करें।",
        "दिक्कत बनी रहे तो अपने BLO से मिलें या 1950 पर कॉल करें। ECINET पर <strong>Book-a-Call with BLO</strong> से BLO का फोन भी मंगवा सकते हैं।",
      ],
    },
    {
      id: "kab",
      title: "किसे e-EPIC मिल सकता है",
      list: [
        "जिसका नाम वोटर लिस्ट में है और EPIC नंबर बना है।",
        "नया वोटर, जिसका फॉर्म 6 मंज़ूर हो चुका है (फॉर्म रेफरेंस नंबर से)।",
        "पहले यह जांच लें कि आपका नाम वोटर लिस्ट में है: <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a>।",
      ],
      callout: { kind: "warn", html: "नाम लिस्ट में नहीं है तो e-EPIC नहीं निकलेगा। पहले <strong>फॉर्म 6</strong> से नाम जुड़वाएं। पूरी जानकारी: <a href=\"/service/voter-id-card.html\">वोटर आईडी कार्ड गाइड</a>।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["OTP नहीं आ रहा", "वोटर लिस्ट में दर्ज मोबाइल पास हो; न हो तो e-KYC या फॉर्म 8 से मोबाइल अपडेट करें"],
          ["EPIC नंबर नहीं पता", "electoralsearch.eci.gov.in पर नाम/जन्मतिथि से खोजें; वहां EPIC नंबर दिखता है"],
          ["नाम/फोटो में गलती", "फॉर्म 8 से सुधार करवाएं; मंज़ूरी के बाद नया e-EPIC डाउनलोड करें"],
          ["प्लास्टिक कार्ड खो गया", "e-EPIC डाउनलोड करें; नया कार्ड चाहिए तो फॉर्म 8 में replacement EPIC चुनें"],
        ],
      },
    },
    {
      id: "rajya",
      title: "अपने राज्य की वोटर आईडी गाइड",
      html: "<p><a href=\"/states/andaman-nicobar-voter-id-card.html\">अंडमान और निकोबार</a> · <a href=\"/states/andhra-pradesh-voter-id-card.html\">आंध्र प्रदेश</a> · <a href=\"/states/arunachal-pradesh-voter-id-card.html\">अरुणाचल प्रदेश</a> · <a href=\"/states/assam-voter-id-card.html\">असम</a> · <a href=\"/states/bihar-voter-id-card.html\">बिहार</a> · <a href=\"/states/chandigarh-voter-id-card.html\">चंडीगढ़</a> · <a href=\"/states/chhattisgarh-voter-id-card.html\">छत्तीसगढ़</a> · <a href=\"/states/dadra-nagar-haveli-daman-diu-voter-id-card.html\">दादरा और नगर हवेली एवं दमण और दीव</a> · <a href=\"/states/delhi-voter-id-card.html\">दिल्ली</a> · <a href=\"/states/goa-voter-id-card.html\">गोवा</a> · <a href=\"/states/gujarat-voter-id-card.html\">गुजरात</a> · <a href=\"/states/haryana-voter-id-card.html\">हरियाणा</a> · <a href=\"/states/himachal-pradesh-voter-id-card.html\">हिमाचल प्रदेश</a> · <a href=\"/states/jammu-kashmir-voter-id-card.html\">जम्मू-कश्मीर</a> · <a href=\"/states/jharkhand-voter-id-card.html\">झारखंड</a> · <a href=\"/states/karnataka-voter-id-card.html\">कर्नाटक</a> · <a href=\"/states/kerala-voter-id-card.html\">केरल</a> · <a href=\"/states/ladakh-voter-id-card.html\">लद्दाख</a> · <a href=\"/states/lakshadweep-voter-id-card.html\">लक्षद्वीप</a> · <a href=\"/states/madhya-pradesh-voter-id-card.html\">मध्य प्रदेश</a> · <a href=\"/states/maharashtra-voter-id-card.html\">महाराष्ट्र</a> · <a href=\"/states/manipur-voter-id-card.html\">मणिपुर</a> · <a href=\"/states/meghalaya-voter-id-card.html\">मेघालय</a> · <a href=\"/states/mizoram-voter-id-card.html\">मिज़ोरम</a> · <a href=\"/states/nagaland-voter-id-card.html\">नागालैंड</a> · <a href=\"/states/odisha-voter-id-card.html\">ओडिशा</a> · <a href=\"/states/puducherry-voter-id-card.html\">पुदुचेरी</a> · <a href=\"/states/punjab-voter-id-card.html\">पंजाब</a> · <a href=\"/states/rajasthan-voter-id-card.html\">राजस्थान</a> · <a href=\"/states/sikkim-voter-id-card.html\">सिक्किम</a> · <a href=\"/states/tamil-nadu-voter-id-card.html\">तमिलनाडु</a> · <a href=\"/states/telangana-voter-id-card.html\">तेलंगाना</a> · <a href=\"/states/tripura-voter-id-card.html\">त्रिपुरा</a> · <a href=\"/states/uttar-pradesh-voter-id-card.html\">उत्तर प्रदेश</a> · <a href=\"/states/uttarakhand-voter-id-card.html\">उत्तराखंड</a> · <a href=\"/states/west-bengal-voter-id-card.html\">पश्चिम बंगाल</a></p>",
    },
  ],
  official: [
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (भारत निर्वाचन आयोग)" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://eci.gov.in/", title: "भारत निर्वाचन आयोग" },
  ],
  faq: [
    { q: "e-EPIC कहां से डाउनलोड करें?", a: "voters.eci.gov.in पर लॉगिन करके E-EPIC Download से, या ECI के ECINET ऐप से।" },
    { q: "क्या e-EPIC वोट डालने के लिए मान्य है?", a: "e-EPIC निर्वाचन आयोग का जारी किया डिजिटल वोटर कार्ड है। मतदान के दिन पहचान के लिए कौन से कागज़ मान्य हैं, यह आयोग हर चुनाव में बताता है; e-EPIC का प्रिंट या मोबाइल पर PDF साथ रखें।" },
    { q: "OTP किस मोबाइल पर आता है?", a: "उसी मोबाइल पर जो वोटर लिस्ट में आपके नाम से दर्ज है। दर्ज न हो तो e-KYC या फॉर्म 8 से मोबाइल जोड़ें।" },
    { q: "वोटर हेल्पलाइन नंबर क्या है?", a: "1950 (अपने STD कोड के साथ) या राष्ट्रीय संपर्क केंद्र 1800-11-1950, सुबह 8 से रात 8 बजे तक।" },
  ],
  related: [
    { href: "/service/voter-id-card.html", emoji: "🗳️", title: "वोटर आईडी कार्ड", text: "नया नाम, सुधार, फॉर्म 6/8" },
    { href: "/service/digilocker.html", emoji: "📲", title: "DigiLocker", text: "डिजिटल कागज़ एक जगह" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "पहचान और e-KYC" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन फॉर्म में मदद" },
  ],
  aside: [
    { href: "https://voters.eci.gov.in/", label: "🗳️ e-EPIC डाउनलोड करें" },
    { href: "/service/voter-id-card.html", label: "📋 वोटर आईडी गाइड" },
  ],
};
