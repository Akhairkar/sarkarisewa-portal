import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/CG: schemes Annapurna, AAY and PHH; 13,806 FPS (co-op
//   societies, panchayats, SHGs); ration cards 53,86,971 (AAY 7,18,153, PHH
//   46,68,818); state food department website khadya.cg.nic.in; AePDS
//   epos.cg.gov.in; grievance khadya.cg.nic.in/citizen/FrmNewComplain.aspx;
//   ration card details report
//   khadya.cg.nic.in/rationcards/rcmodule/Reports/RptRationcardDetails.aspx;
//   helpdesk 1967 and 1800-233-3663.
// - Patrika (Korba, 16 Jul 2026, via search extract): new ration card
//   applications and amendments now through the Seva Setu portal (designed
//   by CHiPS), also at Lok Seva Kendras, municipal corporations /
//   municipalities / nagar panchayats and janpad panchayat offices.
//   Dynamite News (Jul 2026): CM launched Seva Setu with 441+ services
//   including ration cards.
// - Patrika (Mahasamund, 6 Aug 2026, via search extract): renewal of
//   existing ration cards slowed by server problems; beneficiaries without a
//   registered mobile number cannot apply.
// - nfsa.gov.in Coverage/Salient Features (35 kg AAY, 5 kg/person PHH);
//   Mera Ration 2.0 FAQ; free grain 1.1.2024–31.12.2028 per GoI notification
//   of 04.12.2023.
// Left out: the Seva Setu web address (not confirmed), the state's own card
// categories and quantities under its state food security law, fees,
// documents list and time limits. khadya.cg.nic.in was not reachable.
export const chhattisgarhRationCard: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Chhattisgarh Ration Card 2026: Apply & Status",
  description: "छत्तीसगढ़ राशन कार्ड 2026: सेवा सेतु / लोक सेवा केंद्र, जनपद पंचायत या नगरीय निकाय में आवेदन, khadya.cg.nic.in पर कार्ड विवरण, नवीनीकरण, e-KYC और हेल्पलाइन 1800-233-3663 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "छत्तीसगढ़ राशन कार्ड 2026: आवेदन, कार्ड विवरण, नवीनीकरण और हेल्पलाइन",
  lead: "छत्तीसगढ़ में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग बनाता है, जिसका पोर्टल khadya.cg.nic.in है। जुलाई 2026 की खबरों के अनुसार नए राशन कार्ड का आवेदन और संशोधन अब राज्य के <strong>सेवा सेतु</strong> प्लेटफॉर्म से होता है, जो लोक सेवा केंद्र, जनपद पंचायत और नगरीय निकाय कार्यालयों में भी उपलब्ध है।",
  facts: [
    ["राज्य में NFSA कार्ड", "53.87 लाख (NFSA पोर्टल)"],
    ["आवेदन", "सेवा सेतु / लोक सेवा केंद्र"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-233-3663, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार आधारित PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार जुड़ा और <strong>e-KYC पूरा</strong> हो, और कार्ड में <strong>मोबाइल नंबर दर्ज</strong> हो। अगस्त 2026 की खबर के अनुसार मोबाइल नंबर दर्ज न होने से कई लोग नवीनीकरण का आवेदन नहीं कर पा रहे थे।",
  sections: [
    {
      id: "prakar",
      title: "छत्तीसगढ़ में राशन कार्ड",
      intro: "NFSA पोर्टल के छत्तीसगढ़ पेज (13 अक्टूबर 2026 को देखा गया) के अनुसार राज्य में <strong>53,86,971 NFSA राशन कार्ड</strong> और <strong>13,806 राशन दुकानें</strong> हैं। ज़्यादातर दुकानें सहकारी समितियां, ग्राम पंचायत और स्वयं सहायता समूह चलाते हैं।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या", "हर महीने अनाज (NFSA)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "7,18,153", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "46,68,818", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> राज्य सरकार के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार। केंद्र सरकार के अनुसार यह मापदंड हर राज्य खुद तय करता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
      callout: { kind: "warn", html: "छत्तीसगढ़ में कार्ड की श्रेणियां और पात्रता की शर्तें राज्य सरकार तय करती है। हमें इनकी ताज़ा सरकारी सूची नहीं मिली; आवेदन से पहले जनपद पंचायत, नगरीय निकाय या खाद्य निरीक्षक से पूछ लें।" },
    },
    {
      id: "kagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      intro: "ये चीज़ें पहले से जुटा लें (अंतिम सूची वही है जो पोर्टल या कार्यालय मांगे):",
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong>",
        "<strong>चालू मोबाइल नंबर</strong> (OTP और नवीनीकरण के लिए ज़रूरी)",
        "परिवार की मुखिया का <strong>बैंक खाता</strong> विवरण",
        "छत्तीसगढ़ के <strong>पते का प्रमाण</strong> और मुखिया की <strong>फोटो</strong>",
        "पहले किसी और कार्ड में नाम था तो वहां से <strong>नाम हटने का सबूत</strong>",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन",
      intro: "पत्रिका (16 जुलाई 2026) के अनुसार नए राशन कार्ड के आवेदन से लेकर संशोधन तक का काम अब <strong>सेवा सेतु पोर्टल</strong> से होता है। मुख्यमंत्री ने जुलाई 2026 में सेवा सेतु शुरू किया, जिसमें राशन कार्ड समेत 441 से ज़्यादा सेवाएं हैं।",
      steps: [
        "नज़दीकी <strong>लोक सेवा केंद्र</strong>, या गांव में <strong>जनपद पंचायत</strong> और शहर में <strong>नगर निगम / नगर पालिका / नगर पंचायत</strong> कार्यालय जाएं। मोबाइल या कंप्यूटर से भी सेवा सेतु पर आवेदन किया जा सकता है।",
        "नए राशन कार्ड की सेवा चुनें और मुखिया व हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें।",
        "मांगे गए कागज़ लगाकर आवेदन जमा करें और <strong>आवेदन नंबर / पावती</strong> संभाल लें।",
        "जांच और मंज़ूरी के बाद कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "सेवा सेतु का वेब पता हमें किसी सरकारी पेज पर पक्का नहीं मिला, इसलिए हम लिंक नहीं दे रहे। लोक सेवा केंद्र से सही पोर्टल पर आवेदन कराएं। पुराने पेज में \"e-District\" लिखा था; अब राशन कार्ड सेवा सेतु से जुड़ा है।" },
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      steps: [
        '<a href="https://khadya.cg.nic.in/rationcards/rcmodule/Reports/RptRationcardDetails.aspx" target="_blank" rel="noopener nofollow">khadya.cg.nic.in की राशन कार्ड विवरण रिपोर्ट</a> खोलें (यह लिंक NFSA पोर्टल के छत्तीसगढ़ पेज पर दिया गया है)।',
        "मांगी गई जानकारी (जैसे राशन कार्ड नंबर या ज़िला) भरें।",
        "कार्ड में दर्ज सदस्य और विवरण देखें।",
      ],
      html: "<p>कार्ड का विवरण और हर महीने का हक केंद्र सरकार के <strong>Mera Ration</strong> ऐप में राशन कार्ड नंबर डालकर भी देख सकते हैं।</p>",
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, संशोधन और नवीनीकरण",
      list: [
        "<strong>संशोधन</strong> (नाम जोड़ना/हटाना, पता बदलना) भी सेवा सेतु से होता है।",
        "नए सदस्य का नाम जोड़ने के लिए उसका <strong>आधार</strong> ज़रूरी है; बच्चे के लिए जन्म प्रमाण पत्र और बहू के लिए पुराने कार्ड से नाम हटने का सबूत रखें।",
        "<strong>नवीनीकरण:</strong> अगस्त 2026 की खबर के अनुसार पुराने राशन कार्डों का नवीनीकरण चल रहा था। कार्ड में मोबाइल नंबर दर्ज न हो तो पहले उसे दर्ज कराएं।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA (AAY/PHH) कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर अंगूठा नहीं लग रहा", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["मोबाइल नंबर दर्ज नहीं, OTP नहीं आ रहा", "राशन दुकान या खाद्य विभाग के कार्यालय में मोबाइल नंबर दर्ज कराएं"],
          ["सर्वर धीमा, आवेदन नहीं हो रहा", "कुछ समय बाद कोशिश करें या लोक सेवा केंद्र से कराएं"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-233-3663 या 1967 पर शिकायत, या khadya.cg.nic.in पर ऑनलाइन शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-233-3663</strong> और <strong>1967</strong>: NFSA पोर्टल पर छत्तीसगढ़ के हेल्पडेस्क नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://khadya.cg.nic.in/citizen/FrmNewComplain.aspx" target="_blank" rel="noopener nofollow">khadya.cg.nic.in पर शिकायत</a> (NFSA पोर्टल पर दिया गया लिंक)',
      ],
    },
  ],
  official: [
    { href: "https://khadya.cg.nic.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग, छत्तीसगढ़" },
    { href: "https://khadya.cg.nic.in/rationcards/rcmodule/Reports/RptRationcardDetails.aspx", title: "छत्तीसगढ़: राशन कार्ड विवरण रिपोर्ट" },
    { href: "https://khadya.cg.nic.in/citizen/FrmNewComplain.aspx", title: "छत्तीसगढ़ PDS: ऑनलाइन शिकायत" },
    { href: "https://nfsa.gov.in/State/CG", title: "NFSA पोर्टल: छत्तीसगढ़ का पेज (योजनाएं, कार्ड, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ में नया राशन कार्ड कैसे बनवाएं?", a: "जुलाई 2026 से नए राशन कार्ड का आवेदन सेवा सेतु पोर्टल से होता है। नज़दीकी लोक सेवा केंद्र, जनपद पंचायत या नगरीय निकाय कार्यालय में सभी सदस्यों के आधार और मोबाइल नंबर के साथ आवेदन करें और पावती लें।" },
    { q: "छत्तीसगढ़ राशन कार्ड का विवरण कैसे देखें?", a: "khadya.cg.nic.in की राशन कार्ड विवरण रिपोर्ट में अपना राशन कार्ड नंबर डालकर देखें, या Mera Ration ऐप इस्तेमाल करें।" },
    { q: "राशन कार्ड नवीनीकरण में मोबाइल नंबर क्यों चाहिए?", a: "अगस्त 2026 की खबर के अनुसार मोबाइल नंबर दर्ज न होने से कई हितग्राही नवीनीकरण का आवेदन नहीं कर पा रहे थे। पहले राशन दुकान या खाद्य कार्यालय में मोबाइल नंबर दर्ज कराएं।" },
    { q: "छत्तीसगढ़ में राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत AAY कार्ड पर हर महीने 35 किलो प्रति परिवार और PHH कार्ड पर 5 किलो प्रति व्यक्ति, जो 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "छत्तीसगढ़ राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार छत्तीसगढ़ के हेल्पडेस्क नंबर 1800-233-3663 और 1967 हैं। ऑनलाइन शिकायत khadya.cg.nic.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/chhattisgarh-income-certificate.html", emoji: "💰", title: "छत्तीसगढ़ आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/chhattisgarh-domicile-certificate.html", emoji: "🏠", title: "छत्तीसगढ़ निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/chhattisgarh-labour-card.html", emoji: "👷", title: "छत्तीसगढ़ लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/madhya-pradesh-ration-card.html", emoji: "📋", title: "मध्य प्रदेश राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://khadya.cg.nic.in/rationcards/rcmodule/Reports/RptRationcardDetails.aspx", label: "🔎 राशन कार्ड विवरण देखें" },
    { href: "https://khadya.cg.nic.in/", label: "📋 खाद्य विभाग छत्तीसगढ़" },
  ],
};
