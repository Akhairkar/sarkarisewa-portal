import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): bhulekh.mahabhumi.gov.in (fetched: Mahabhulekh
// v2.0 shows 7/12, 8A, property card and K-Prat; site in Marathi; select
// district/taluka/village and survey/gat number or name, mobile, captcha;
// note that the information shown cannot be used for any government or legal
// purpose; corrections between online and handwritten 7/12 via e-Hakk on
// bhumiabhilekh.maharashtra.gov.in; Settlement Commissioner and Director of
// Land Records, Pune, phone 020-26050006), digitalsatbara.mahabhumi.gov.in
// (reachable), Navbharat Live / The Realty Today reports (state recognised
// digitally signed 7/12 and 8-A as legally valid; Rs 15 per copy; QR code and
// verification number). The Rs 15 fee is from news reports quoting the
// Revenue Department; GR number/date not verified.
export const mh712Extract: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "7/12 उतारा" },
  ],
  docHi: "7/12 उतारा",
  title: "सातबारा उतारा (7/12 भूमि रिकॉर्ड)",
  description: "महाराष्ट्र में कृषि भूमि का डिजिटल रिकॉर्ड (7/12 उतारा): मालिक का नाम, सर्वे/गट नंबर, क्षेत्र और फसल। महाभूलेख पर मुफ्त देखें, कानूनी काम के लिए डिजिटल हस्ताक्षरित 7/12 लें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सातबारा उतारा (7/12) महाराष्ट्र: ऑनलाइन कैसे देखें और डिजिटल हस्ताक्षरित 7/12 कैसे निकालें",
  lead: "सातबारा (7/12) उतारा महाराष्ट्र में खेती की ज़मीन का अधिकार अभिलेख है, जिसमें खातेदार का नाम, सर्वे/गट नंबर, क्षेत्रफल, फसल और ज़मीन पर कर्ज़/बोझ की जानकारी होती है। इसे महाराष्ट्र भूमि अभिलेख विभाग के <strong>महाभूलेख</strong> पोर्टल पर मुफ्त देखा जा सकता है, पर वह कॉपी सिर्फ जानकारी के लिए है। बैंक, कोर्ट या सरकारी काम के लिए <strong>डिजिटल हस्ताक्षरित 7/12</strong> लें, जो Digital Satbara पोर्टल से लगभग ₹15 में मिलता है।",
  facts: [
    ["विभाग", "भूमि अभिलेख विभाग, महाराष्ट्र (राजस्व)"],
    ["मुफ्त देखने के लिए", "bhulekh.mahabhumi.gov.in"],
    ["कानूनी कॉपी", "digitalsatbara.mahabhumi.gov.in"],
    ["डिजिटल 7/12 फीस", "₹15 प्रति कॉपी (खबरों के अनुसार)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "7/12 उतारे में क्या लिखा होता है",
      list: [
        "<strong>गाव नमुना 7:</strong> खातेदार (मालिक) का नाम, सर्वे/गट नंबर, क्षेत्रफल, ज़मीन का प्रकार, कर्ज़ या दूसरे अधिकार",
        "<strong>गाव नमुना 12:</strong> किस मौसम में कौन-सी फसल, कितने क्षेत्र में",
        "साथ में <strong>8अ</strong> उतारा खातेदार की सारी ज़मीन का खाता दिखाता है",
      ],
      callout: { kind: "info", html: "7/12 ज़मीन के मालिकाना हक का अंतिम सबूत नहीं है; यह राजस्व रिकॉर्ड है। ज़मीन खरीदने से पहले रजिस्ट्री के कागज़ और फेरफार (mutation) भी जांचें।" },
    },
    {
      id: "muft",
      title: "महाभूलेख पर 7/12 मुफ्त कैसे देखें",
      steps: [
        '<a href="https://bhulekh.mahabhumi.gov.in/" target="_blank" rel="noopener nofollow">bhulekh.mahabhumi.gov.in</a> खोलें। पोर्टल मराठी में है।',
        "अभिलेख का प्रकार <strong>7/12</strong> चुनें (8अ, मालमत्ता पत्रक और क-प्रत भी यहीं हैं)।",
        "ज़िला, तालुका और गांव चुनें; फिर सर्वे/गट नंबर या नाम से खोजें।",
        "मोबाइल नंबर और कैप्चा भरकर 7/12 देखें।",
      ],
      callout: { kind: "warn", html: "पोर्टल पर साफ लिखा है कि यहां दिखी जानकारी <strong>किसी सरकारी या कानूनी काम के लिए</strong> इस्तेमाल नहीं हो सकती। लोन, कोर्ट या रजिस्ट्री के लिए डिजिटल हस्ताक्षरित 7/12 लें।" },
    },
    {
      id: "digital",
      title: "डिजिटल हस्ताक्षरित 7/12 कैसे निकालें",
      steps: [
        '<a href="https://digitalsatbara.mahabhumi.gov.in/" target="_blank" rel="noopener nofollow">digitalsatbara.mahabhumi.gov.in</a> पर मोबाइल नंबर से पंजीकरण/लॉगिन करें।',
        "वॉलेट में ऑनलाइन पैसे जोड़ें।",
        "ज़िला, तालुका, गांव और सर्वे/गट नंबर चुनकर 7/12 या 8अ डाउनलोड करें।",
        "कॉपी पर QR कोड और सत्यापन नंबर होता है, जिससे बैंक/कार्यालय उसकी जांच कर सकते हैं।",
      ],
      callout: { kind: "ok", html: 'खुद न कर पाएं तो नज़दीकी आपले सरकार सेवा केंद्र या <a href="/tools/csc-locator.html">CSC</a> से निकलवाएं। वहां सेवा शुल्क अलग लग सकता है।' },
    },
    {
      id: "sudhar",
      title: "7/12 में गलती हो तो",
      list: [
        "ऑनलाइन 7/12 और हाथ से लिखे पुराने 7/12 में फर्क हो (नाम, क्षेत्रफल, इकाई) तो <a href=\"https://bhumiabhilekh.maharashtra.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">भूमि अभिलेख विभाग</a> की <strong>ई-हक्क</strong> सुविधा से तलाठी को ऑनलाइन आवेदन भेजें और पुराना 7/12 अपलोड करें।",
        "वारिस का नाम जोड़ना, खरीद-बिक्री के बाद नाम बदलना जैसे काम फेरफार (mutation) से होते हैं; तलाठी कार्यालय या ई-हक्क से आवेदन करें।",
        "शिकायत के लिए: जमाबंदी आयुक्त एवं भूमि अभिलेख संचालक कार्यालय, पुणे, फोन 020-26050006।",
      ],
    },
  ],
  official: [
    { href: "https://bhulekh.mahabhumi.gov.in/", title: "महाभूलेख (7/12, 8अ, मालमत्ता पत्रक देखें)" },
    { href: "https://digitalsatbara.mahabhumi.gov.in/", title: "Digital Satbara (डिजिटल हस्ताक्षरित 7/12)" },
    { href: "https://bhumiabhilekh.maharashtra.gov.in/", title: "भूमि अभिलेख विभाग, महाराष्ट्र (ई-हक्क)", note: "फोन 020-26050006" },
    { href: "https://aaplesarkar.mahaonline.gov.in/", title: "आपले सरकार पोर्टल" },
  ],
  faq: [
    { q: "7/12 उतारा ऑनलाइन मुफ्त में कहां देखें?", a: "महाभूलेख पोर्टल bhulekh.mahabhumi.gov.in पर ज़िला, तालुका, गांव और सर्वे/गट नंबर डालकर। यह कॉपी सिर्फ जानकारी के लिए है।" },
    { q: "बैंक लोन के लिए कौन-सा 7/12 चाहिए?", a: "डिजिटल हस्ताक्षरित 7/12, जो digitalsatbara.mahabhumi.gov.in से निकलता है। इस पर QR कोड और सत्यापन नंबर होता है।" },
    { q: "डिजिटल 7/12 की फीस कितनी है?", a: "राजस्व विभाग के हवाले से छपी खबरों के अनुसार ₹15 प्रति कॉपी। CSC/सेवा केंद्र से निकलवाने पर उनका सेवा शुल्क अलग हो सकता है।" },
    { q: "7/12 में नाम गलत है तो क्या करें?", a: "ई-हक्क प्रणाली से तलाठी को ऑनलाइन सुधार आवेदन भेजें, या तलाठी कार्यालय में जाकर आवेदन दें। पुराने हस्तलिखित 7/12 की कॉपी साथ रखें।" },
  ],
  related: [
    { href: "/service/farmer-id-card-agristack.html", emoji: "🧑‍🌾", title: "फार्मर ID (AgriStack)", text: "किसान पहचान पत्र" },
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "किसानों को ₹6,000 सालाना" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "आपले सरकार से आवेदन" },
    { href: "/states/maharashtra.html", emoji: "🗺️", title: "महाराष्ट्र की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://bhulekh.mahabhumi.gov.in/", label: "📄 7/12 मुफ्त देखें" },
    { href: "https://digitalsatbara.mahabhumi.gov.in/", label: "✅ डिजिटल 7/12" },
  ],
};
