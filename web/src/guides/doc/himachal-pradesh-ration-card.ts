import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Dept. of FCS&CA, HP, "Procedure and Checklist - Online System for Ration
//   Card" (emerginghimachal.hp.gov.in/themes/backend/uploads/kya/ration card.pdf):
//   checklist (Aadhaar number, proof of residence, caste certificate if
//   applicable, disability certificate if applicable, certificate from Tibetan
//   Welfare Society/Settlement Officer for Tibetans, surrender/deletion/death/
//   birth/marriage certificate or court orders as needed); apply at
//   g2g.hpepds.com with mobile number + OTP; options "Ration Card Registration"
//   and "Ration Card Registration status"; reference number by SMS; review and
//   approval by Inspector/Panchayat Secretary who selects the card type; RC
//   number by SMS; card downloaded from RC_TEST.aspx; application and issue
//   free, no hard copy (self print); timeline under HP Public Services
//   Guarantee Act, 2011.
// - epds.hp.gov.in (ePDS Transparency Portal, read 13 Oct 2026): "Apply Ration
//   Card" → g2g.hpepds.com; Print Ration Card by Aadhaar or Ration Card Id
//   (HP-XXXXX-XXXX); eKYC Status; "eKYC PDS HP" app for face eKYC; Update
//   Mobile No.; Entitlement Calculator (note: pulses up to 3 kg as per
//   availability, edible oil 1 litre up to two persons and 2 litres for more);
//   ePDS Call Centre/ONORC 1800-180-8026, 1967, 14445.
// - nfsa.gov.in/State/HP: Department of Food, Civil Supplies and Consumer
//   Affairs; food.hp.nic.in; grievance esamadhan.nic.in; helpdesk 1967 and
//   18001808026; schemes Annapurna, AAY, PHH; 5,278 FPS (3,360 co-operative);
//   7,52,769 NFSA cards (AAY 1,65,569, PHH 5,87,200).
// - Tribune (2025-26): e-KYC at any FPS, at Lok Mitra Kendra, or by face
//   authentication on the eKYC PDS HP app.
// - nfsa.gov.in Coverage (35 kg AAY, 5 kg/person PHH); free grain to
//   31.12.2028 (GoI notification of 04.12.2023); Mera Ration app.
// Left out: HP's own card categories outside NFSA and their prices, the PSG
// Act time limit in days, and an official list of eligibility criteria.
export const himachalPradeshRationCard: DocGuide = {
  state: { slug: "himachal-pradesh", hi: "हिमाचल प्रदेश" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Himachal Pradesh Ration Card 2026: Apply & Status",
  description: "हिमाचल प्रदेश राशन कार्ड 2026: g2g.hpepds.com पर मुफ्त ऑनलाइन आवेदन, ज़रूरी कागज़, आधार या RC नंबर से कार्ड प्रिंट, फेस e-KYC ऐप और हेल्पलाइन 1800-180-8026 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश राशन कार्ड 2026: ऑनलाइन आवेदन, कार्ड प्रिंट और e-KYC",
  lead: "हिमाचल प्रदेश में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। नए कार्ड का आवेदन <strong>g2g.hpepds.com</strong> पर मोबाइल नंबर से लॉगिन करके ऑनलाइन होता है, और यह <strong>मुफ्त</strong> है। कार्ड बनने के बाद उसे ePDS पोर्टल से आधार या राशन कार्ड नंबर डालकर खुद प्रिंट करना होता है।",
  facts: [
    ["NFSA कार्ड", "7.53 लाख (NFSA पोर्टल)"],
    ["आवेदन फीस", "मुफ्त (विभाग के अनुसार)"],
    ["अनाज", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-180-8026, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> विभाग राशन कार्ड की छपी हुई कॉपी नहीं देता। कार्ड मंज़ूर होने के बाद उसे <strong>epds.hp.gov.in</strong> से खुद प्रिंट करें। राशन लेने के लिए परिवार के हर सदस्य का <strong>e-KYC</strong> पूरा होना चाहिए।",
  sections: [
    {
      id: "prakar",
      title: "हिमाचल में राशन कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल पर हिमाचल के पेज के अनुसार राज्य में NFSA के <strong>7,52,769 राशन कार्ड</strong> और <strong>5,278 राशन की दुकानें (डिपो)</strong> हैं, जिनमें 3,360 सहकारी सभाओं की हैं। विभाग की योजनाओं में AAY, PHH और अन्नपूर्णा दर्ज हैं।",
      table: {
        head: ["कार्ड", "संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "1,65,569", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "5,87,200", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है। ePDS पोर्टल के अनुसार डिपो पर <strong>दालें</strong> (उपलब्धता के अनुसार 3 किलो तक) और <strong>खाने का तेल</strong> (2 सदस्य तक 1 लीटर, ज़्यादा सदस्य हों तो 2 लीटर) भी मिलता है। आपके कार्ड पर कितना मिलेगा, यह पोर्टल के <strong>Entitlement Calculator</strong> में RC नंबर डालकर देखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (विभाग की चेकलिस्ट)",
      intro: "विभाग की ऑनलाइन राशन कार्ड चेकलिस्ट के अनुसार:",
      list: [
        "<strong>आधार नंबर</strong> (परिवार के सदस्यों का)",
        "<strong>हिमाचल में रहने का प्रमाण</strong>",
        "<strong>जाति प्रमाण पत्र</strong> (अगर लागू हो)",
        "<strong>दिव्यांग प्रमाण पत्र</strong> (अगर लागू हो)",
        "तिब्बती परिवारों के लिए <strong>तिब्बती वेलफेयर सोसाइटी या तिब्बती सेटलमेंट ऑफिसर</strong> का प्रमाण पत्र",
        "ज़रूरत के हिसाब से: पुराने कार्ड का <strong>सरेंडर/नाम कटने का प्रमाण</strong>, मृत्यु, जन्म या विवाह प्रमाण पत्र, या कोर्ट का आदेश",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: ऑनलाइन आवेदन",
      steps: [
        '<a href="https://g2g.hpepds.com/login.xhtml" target="_blank" rel="noopener nofollow">g2g.hpepds.com</a> खोलें (ePDS पोर्टल पर "Apply Ration Card" का यही लिंक है)।',
        "अपना <strong>मोबाइल नंबर</strong> और कैप्चा डालें; आए हुए <strong>OTP</strong> से लॉगिन करें।",
        "<strong>Ration Card Registration</strong> चुनें, पूरा फॉर्म भरें और कागज़ अपलोड करके जमा करें।",
        "जमा होते ही एक <strong>रेफरेंस नंबर</strong> बनता है, जो SMS से भी आता है।",
        "आवेदन <strong>इंस्पेक्टर या पंचायत सचिव</strong> के पास जांच के लिए जाता है। वही पात्रता देखकर कार्ड का प्रकार तय करते हैं और मंज़ूरी देते हैं।",
        "मंज़ूरी के बाद <strong>नया राशन कार्ड नंबर SMS से</strong> आता है। आवेदन रद्द हो तो कारण के साथ SMS आता है।",
      ],
      callout: { kind: "ok", html: "विभाग के अनुसार राशन कार्ड का आवेदन और कार्ड बनना <strong>मुफ्त</strong> है। सेवा देने की समय-सीमा हिमाचल प्रदेश लोक सेवा गारंटी अधिनियम, 2011 के तहत तय है। ऑनलाइन न भर सकें तो नज़दीकी <a href=\"/service/csc-locator/himachal-pradesh.html\">लोक मित्र केंद्र / CSC</a> की मदद लें।" },
    },
    {
      id: "status",
      title: "आवेदन का स्टेटस और कार्ड प्रिंट",
      steps: [
        "<strong>स्टेटस:</strong> g2g.hpepds.com पर उसी मोबाइल नंबर से लॉगिन करें और <strong>Ration Card Registration status</strong> खोलें।",
        '<strong>कार्ड प्रिंट:</strong> <a href="https://epds.hp.gov.in/RC_TEST.aspx" target="_blank" rel="noopener nofollow">epds.hp.gov.in → Print Ration Card</a> खोलें।',
        "<strong>Aadhaar</strong> या <strong>Ration Card Id</strong> (HP-XXXXX-XXXX जैसा नंबर) चुनें और नंबर डालें।",
        "कार्ड में मुखिया, सदस्य, डिपो (FPS) और श्रेणी दिखेगी; इसे प्रिंट कर लें।",
      ],
      html: "<p>मोबाइल नंबर बदल गया हो तो ePDS पोर्टल पर <strong>Update Mobile No.</strong> से नया नंबर जोड़ें, ताकि राशन आने और OTP से राशन लेने के SMS मिलते रहें।</p>",
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई सदस्य) का नाम जोड़ने के लिए उसका <strong>आधार</strong> और <strong>जन्म या विवाह प्रमाण पत्र</strong> रखें।",
        "दूसरे कार्ड से आए सदस्य के लिए पुराने कार्ड से <strong>नाम कटने (deletion) का प्रमाण</strong> ज़रूरी है।",
        "मृत्यु पर नाम हटाने के लिए <strong>मृत्यु प्रमाण पत्र</strong> लगता है।",
      ],
      callout: { kind: "info", html: "बदलाव का आवेदन कहां होगा, यह अपने डिपो, इंस्पेक्टर या पंचायत सचिव से पूछ लें। हेल्पलाइन 1800-180-8026 पर भी जानकारी मिलती है।" },
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>डिपो पर:</strong> PoS मशीन पर अंगूठा/उंगली लगाकर आधार से e-KYC।",
        "<strong>फेस e-KYC ऐप:</strong> विभाग का <strong>\"eKYC PDS HP\"</strong> ऐप चेहरे से e-KYC करता है; इसकी जानकारी और ऐप का लिंक epds.hp.gov.in पर है।",
        "<strong>लोक मित्र केंद्र</strong> पर भी e-KYC करवाई जा सकती है (समाचार रिपोर्टों के अनुसार)।",
        "किसका e-KYC बाकी है, यह ePDS पोर्टल के <strong>eKYC Status</strong> में देखें।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड से देश की किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं। <strong>Mera Ration ऐप</strong> से नज़दीकी दुकान और हक देख सकते हैं।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-180-8026</strong>: ePDS कॉल सेंटर / ONORC (ePDS पोर्टल और NFSA पोर्टल पर दर्ज)",
        "<strong>1967</strong> और <strong>14445</strong>: खाद्य विभाग की हेल्पलाइन",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://esamadhan.nic.in/" target="_blank" rel="noopener nofollow">esamadhan.nic.in</a> (NFSA पोर्टल पर हिमाचल की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://g2g.hpepds.com/login.xhtml", title: "HP ePDS: नए राशन कार्ड का ऑनलाइन आवेदन और स्टेटस" },
    { href: "https://epds.hp.gov.in/", title: "ePDS ट्रांसपेरेंसी पोर्टल हिमाचल: कार्ड प्रिंट, e-KYC स्टेटस, हक" },
    { href: "https://food.hp.nic.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, हिमाचल" },
    { href: "https://nfsa.gov.in/State/HP", title: "NFSA पोर्टल: हिमाचल प्रदेश का पेज" },
  ],
  faq: [
    { q: "हिमाचल में नया राशन कार्ड ऑनलाइन कैसे बनवाएं?", a: "g2g.hpepds.com पर मोबाइल नंबर और OTP से लॉगिन करें, Ration Card Registration का फॉर्म भरें, कागज़ अपलोड करें और रेफरेंस नंबर संभालें। जांच इंस्पेक्टर या पंचायत सचिव करते हैं और मंज़ूरी पर कार्ड नंबर SMS से आता है।" },
    { q: "क्या राशन कार्ड बनवाने की कोई फीस है?", a: "नहीं। विभाग के अनुसार आवेदन और कार्ड बनना मुफ्त है, क्योंकि छपा हुआ कार्ड नहीं दिया जाता; कार्ड खुद प्रिंट करना होता है।" },
    { q: "हिमाचल राशन कार्ड कैसे डाउनलोड या प्रिंट करें?", a: "epds.hp.gov.in पर Print Ration Card खोलें, आधार या Ration Card Id (HP-XXXXX-XXXX) डालें और कार्ड प्रिंट करें।" },
    { q: "घर बैठे e-KYC कैसे करें?", a: "विभाग का eKYC PDS HP ऐप चेहरे से e-KYC करता है। ऐप का लिंक और तरीका epds.hp.gov.in पर है। डिपो की PoS मशीन पर अंगूठा लगाकर भी e-KYC होती है।" },
    { q: "हिमाचल में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है। अपने कार्ड का पूरा हक ePDS पोर्टल के Entitlement Calculator में देखें।" },
    { q: "हिमाचल राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "1800-180-8026 (ePDS कॉल सेंटर), साथ में 1967 और 14445। ऑनलाइन शिकायत esamadhan.nic.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/himachal-pradesh-income-certificate.html", emoji: "💰", title: "हिमाचल आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/himachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "हिमाचल निवास प्रमाण पत्र", text: "हिमाचली बोनाफाइड" },
    { href: "/states/himachal-pradesh-labour-card.html", emoji: "👷", title: "हिमाचल लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/punjab-ration-card.html", emoji: "📋", title: "पंजाब राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://g2g.hpepds.com/login.xhtml", label: "📝 ऑनलाइन आवेदन (HP ePDS)" },
    { href: "https://epds.hp.gov.in/RC_TEST.aspx", label: "🖨️ राशन कार्ड प्रिंट करें" },
  ],
};
