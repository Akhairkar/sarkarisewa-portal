import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - fcsca.assam.gov.in (Food, Public Distribution and Consumer Affairs Dept.,
//   Assam; "Last Reviewed & Updated: 01 Oct 2026"): home page public advisory
//   to use only the official Assam SMART PDS portal as.smartpds.nic.in (a
//   fake look-alike site was detected). "Apply for Ration Card" page: after
//   NFSA only two card types, AAY and PHH (older APL/BPL/AAY Family Identity
//   Cards and MMASY card abolished); eldest woman with annual family income
//   below Rs 4,00,000 may apply (eldest man if no adult woman), with a
//   no-ration-card certificate from Village Head / Gaon Panchayat President /
//   Ward Commissioner / FPD&CA Inspector; apply to the FPD&CA authority of
//   the District / Sub-Division (Civil) in Proforma-C; document lists for
//   new, duplicate, separate card, inclusion/deletion, change of head,
//   child-to-adult, change of FPS/address; contact the circle office for
//   changes. "NFSA" page: launched in Assam on 24 Dec 2015.
// - nfsa.gov.in/State/AS: schemes AAY and PHH; 32,975 FPS; ration cards
//   70,39,772 (AAY 6,69,800, PHH 63,69,972); Ration Card Management System
//   rcms.assam.gov.in; FEAST "Find RC details" feastasm.gov.in; grievance
//   assam.grams.nic.in; helpdesk 1967 and 1800-345-3611.
// - News (newkerala / LatestLY, Jul 2026, via search extracts): Assam first
//   State to implement SMART PDS; ration card verification drive with a
//   31 July deadline (Minister Kaushik Rai).
// - nfsa.gov.in Coverage (35 kg AAY, 5 kg/person PHH); Mera Ration 2.0 FAQ;
//   free grain 1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: the old page's "apply at Sewa Setu" (not confirmed), whether
// online application on SMART PDS is open to the public, fees and time
// limits. The department page still shows Rs 3/kg rice (pre-2023), so we
// use the national free-grain rule instead.
export const assamRationCard: DocGuide = {
  state: { slug: "assam", hi: "असम" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Assam Ration Card 2026: Apply & Status",
  description: "असम राशन कार्ड 2026: AAY और PHH कार्ड, ₹4 लाख आय सीमा, ज़िला/उप-मंडल FPD&CA कार्यालय में Proforma-C से आवेदन, ज़रूरी कागज़, SMART PDS, RC विवरण और हेल्पलाइन 1800-345-3611 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "असम राशन कार्ड 2026: पात्रता, आवेदन (Proforma-C), कागज़, नाम जोड़ना और हेल्पलाइन",
  lead: "असम में राशन कार्ड खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग (FPD&CA) बनाता है। विभाग के अनुसार राज्य में अब केवल दो तरह के कार्ड हैं: <strong>AAY और PHH</strong>। नए कार्ड का आवेदन ज़िला या उप-मंडल (सिविल) के FPD&CA कार्यालय में <strong>Proforma-C</strong> फॉर्म से होता है।",
  facts: [
    ["राज्य में कार्ड", "70.40 लाख (NFSA पोर्टल)"],
    ["आय सीमा (विभाग)", "₹4,00,000 सालाना से कम"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-345-3611, 1967"],
  ],
  notice: "<strong>सावधान:</strong> विभाग ने चेतावनी दी है कि असम SMART PDS जैसी दिखने वाली एक <strong>नकली वेबसाइट</strong> पकड़ी गई है। केवल आधिकारिक पोर्टल <strong>as.smartpds.nic.in</strong> इस्तेमाल करें और किसी और साइट पर अपनी जानकारी न डालें।",
  sections: [
    {
      id: "prakar",
      title: "असम में राशन कार्ड के प्रकार",
      intro: "विभाग की वेबसाइट के अनुसार NFSA लागू होने से पहले असम में APL, BPL और AAY के \"Family Identity Card\" और राज्य का MMASY कार्ड बनते थे। NFSA (असम में 24 दिसंबर 2015 से) लागू होने पर ये सब बंद कर दिए गए और <strong>अब केवल दो कार्ड</strong> बनते हैं। NFSA पोर्टल के अनुसार राज्य में <strong>32,975 राशन दुकानें</strong> हैं।",
      table: {
        head: ["कार्ड", "कार्ड की संख्या (NFSA पोर्टल)", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "6,69,800", "<strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "63,69,972", "<strong>5 किलो प्रति व्यक्ति</strong>"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "विभाग के अनुसार परिवार की <strong>सबसे बड़ी महिला</strong> आवेदन करती है, अगर परिवार की <strong>सालाना आय ₹4,00,000 से कम</strong> है और परिवार NFSA की बाकी शर्तें पूरी करता है।",
        "परिवार में कोई वयस्क महिला न हो तो <strong>सबसे बड़ा पुरुष</strong> आवेदन कर सकता है।",
        "जिसका कोई राशन कार्ड नहीं है, उसे गांव प्रधान / गांव पंचायत अध्यक्ष / वार्ड कमिश्नर / FPD&CA इंस्पेक्टर से <strong>\"राशन कार्ड नहीं है\" का प्रमाण पत्र</strong> लेना होता है। यह आमतौर पर शपथ पत्र (affidavit) देने पर मिलता है।",
        "दूसरी जगह से आए हैं तो पुरानी जगह के FPD&CA कार्यालय से <strong>सरेंडर प्रमाण पत्र</strong> लगाएं।",
      ],
      callout: { kind: "warn", html: "₹4 लाख की आय सीमा विभाग की वेबसाइट पर लिखी है, पर पूरी पात्रता NFSA लाभार्थी चुनने के राज्य के दिशा-निर्देशों पर निर्भर है। आवेदन से पहले सर्कल / उप-मंडल FPD&CA कार्यालय से पुष्टि करें।" },
    },
    {
      id: "kagaz",
      title: "नए राशन कार्ड के लिए कागज़ (विभाग की सूची)",
      list: [
        "परिवार के <strong>सभी सदस्यों का पूरा विवरण</strong>",
        "10 साल से छोटे बच्चों के <strong>जन्म प्रमाण पत्र</strong> की कॉपी",
        "<strong>मतदाता सूची</strong> के संबंधित पेज की प्रमाणित कॉपी",
        "<strong>टैक्स / भू-राजस्व</strong> भुगतान की रसीद की कॉपी",
        "पुराने राशन कार्ड का <strong>सरेंडर प्रमाण पत्र</strong>, या \"कार्ड नहीं है\" का प्रमाण पत्र",
        "<strong>पते का प्रमाण</strong> (सत्यापित कॉपी): PAN, ड्राइविंग लाइसेंस, बैंक या डाकघर पासबुक, नगरपालिका होल्डिंग रसीद, बिजली या टेलीफोन बिल",
      ],
      html: "<p>आधार भी तैयार रखें: राशन PoS मशीन पर आधार से मिलता है और हर सदस्य का आधार कार्ड से जुड़ा होना चाहिए।</p>",
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कहां करें",
      steps: [
        "विभाग के पेज <a href=\"https://fcsca.assam.gov.in/information-services/detail/how-to-apply-for-ration-cards\" target=\"_blank\" rel=\"noopener nofollow\">Apply for Ration Card</a> से <strong>Proforma-C</strong> फॉर्म डाउनलोड करें, या कार्यालय से लें।",
        "फॉर्म भरें और ऊपर लिखे कागज़ लगाएं।",
        "फॉर्म अपने <strong>ज़िला या उप-मंडल (सिविल) के FPD&CA कार्यालय</strong> में जमा करें और पावती लें।",
        "जांच के बाद पात्र परिवार का कार्ड बनता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "info", html: "जुलाई 2026 की खबरों के अनुसार असम SMART PDS लागू करने वाला पहला राज्य बना, और राशन कार्डों की जांच (verification) का अभियान चला। SMART PDS पर आम लोग खुद ऑनलाइन आवेदन कर सकते हैं या नहीं, यह हमें पक्का नहीं मिला। पुराने पेज में \"Sewa Setu\" पर आवेदन लिखा था; विभाग के पेज पर यह रास्ता नहीं लिखा है।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और दूसरे बदलाव",
      table: {
        head: ["काम", "विभाग के अनुसार कागज़"],
        rows: [
          ["<strong>बच्चे का नाम जोड़ना</strong>", "बच्चे का जन्म प्रमाण पत्र, राशन कार्ड, और FPD&CA अधिकारी के नाम सादे कागज़ पर आवेदन"],
          ["<strong>शादी के बाद नाम जोड़ना</strong>", "पुरानी जगह के FPD&CA अधिकारी का नाम हटाने (deletion) का प्रमाण पत्र, राशन कार्ड"],
          ["<strong>नाम जोड़ना / हटाना</strong>", "मूल राशन कार्ड, पहचान पत्र, जन्म तिथि का प्रमाण, सरेंडर प्रमाण पत्र (जोड़ने पर), मृत्यु प्रमाण पत्र (मृत्यु पर)"],
          ["<strong>मुखिया बदलना</strong>", "मूल राशन कार्ड, मुखिया का मृत्यु प्रमाण पत्र (अगर लागू), अनापत्ति प्रमाण पत्र"],
          ["<strong>अलग कार्ड</strong> (परिवार अलग होने पर)", "मूल सरेंडर प्रमाण पत्र, माता-पिता का मूल राशन कार्ड, स्व-घोषणा, गांव प्रधान / वार्ड कमिश्नर का प्रमाण पत्र, परिवार के मुखिया का अनापत्ति प्रमाण पत्र"],
          ["<strong>डुप्लीकेट कार्ड</strong>", "स्व-घोषणा और पुलिस रिपोर्ट; तय शुल्क लगता है"],
          ["<strong>दुकान या पता बदलना</strong>", "मूल राशन कार्ड और फोटो पहचान पत्र"],
        ],
      },
      callout: { kind: "ok", html: "कार्ड खो जाए या उसमें बदलाव करना हो तो विभाग के अनुसार तुरंत अपने <strong>सर्कल कार्यालय</strong> से संपर्क करें। किसी सदस्य की मृत्यु हो या वह राज्य से बाहर चला जाए, तो उसका नाम कटवाएं।" },
    },
    {
      id: "status",
      title: "राशन कार्ड का विवरण कैसे देखें",
      list: [
        '<a href="https://feastasm.gov.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">FEAST असम: Find RC Details</a> पर राशन कार्ड का विवरण (यह लिंक NFSA पोर्टल के असम पेज पर दिया गया है)।',
        '<a href="https://as.smartpds.nic.in/" target="_blank" rel="noopener nofollow">as.smartpds.nic.in</a>: विभाग के अनुसार असम का आधिकारिक SMART PDS पोर्टल।',
        "केंद्र सरकार के <strong>Mera Ration</strong> ऐप में राशन कार्ड नंबर डालकर हर महीने का हक और नज़दीकी दुकान देख सकते हैं।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC में आपकी जानकारी आधार के बायोमेट्रिक से मिलाई जाती है। यह राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): कार्ड का विवरण, हर महीने का हक, लेन-देन और नज़दीकी दुकान।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["कार्ड खो गया या खराब हो गया", "स्व-घोषणा और पुलिस रिपोर्ट के साथ डुप्लीकेट कार्ड का आवेदन"],
          ["दूसरे ज़िले में चले गए", "पुरानी जगह से सरेंडर प्रमाण पत्र लेकर नई जगह आवेदन; या ONORC से वहीं राशन लें"],
          ["PoS पर अंगूठा नहीं लग रहा", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["राशन कम मिला या दुकान ने मना किया", "1800-345-3611 या 1967 पर शिकायत, या assam.grams.nic.in पर"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-3611</strong> और <strong>1967</strong>: NFSA पोर्टल पर असम के हेल्पडेस्क नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://assam.grams.nic.in/" target="_blank" rel="noopener nofollow">assam.grams.nic.in</a> (NFSA पोर्टल पर असम की PDS शिकायत प्रणाली)',
      ],
    },
  ],
  official: [
    { href: "https://fcsca.assam.gov.in/", title: "खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग, असम" },
    { href: "https://fcsca.assam.gov.in/information-services/detail/how-to-apply-for-ration-cards", title: "असम: Apply for Ration Card (पात्रता, Proforma-C, कागज़)" },
    { href: "https://as.smartpds.nic.in/", title: "असम SMART PDS (विभाग द्वारा बताया गया आधिकारिक पोर्टल)" },
    { href: "https://assam.grams.nic.in/", title: "असम PDS शिकायत प्रणाली" },
    { href: "https://nfsa.gov.in/State/AS", title: "NFSA पोर्टल: असम का पेज (योजनाएं, कार्ड, हेल्पलाइन)" },
  ],
  faq: [
    { q: "असम में नया राशन कार्ड कैसे बनवाएं?", a: "विभाग के अनुसार Proforma-C फॉर्म भरकर ज़रूरी कागज़ों के साथ ज़िला या उप-मंडल (सिविल) के FPD&CA कार्यालय में जमा करें। परिवार की सबसे बड़ी महिला आवेदन करती है।" },
    { q: "असम राशन कार्ड के लिए आय सीमा कितनी है?", a: "विभाग की वेबसाइट के अनुसार परिवार की सालाना आय ₹4,00,000 से कम होनी चाहिए और परिवार NFSA की बाकी शर्तें पूरी करे।" },
    { q: "असम में कितने तरह के राशन कार्ड हैं?", a: "NFSA लागू होने के बाद केवल दो: AAY और PHH। पुराने APL/BPL कार्ड और MMASY कार्ड बंद कर दिए गए।" },
    { q: "असम राशन कार्ड में बच्चे का नाम कैसे जोड़ें?", a: "बच्चे का जन्म प्रमाण पत्र और राशन कार्ड लेकर FPD&CA अधिकारी के नाम सादे कागज़ पर आवेदन दें।" },
    { q: "क्या SMART PDS की कोई नकली वेबसाइट है?", a: "हाँ, विभाग ने चेतावनी दी है कि एक नकली वेबसाइट पकड़ी गई है। केवल as.smartpds.nic.in इस्तेमाल करें।" },
    { q: "असम राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार असम के हेल्पडेस्क नंबर 1800-345-3611 और 1967 हैं। ऑनलाइन शिकायत assam.grams.nic.in पर।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/assam-income-certificate.html", emoji: "💰", title: "असम आय प्रमाण पत्र", text: "आय सीमा साबित करने के लिए" },
    { href: "/states/assam-domicile-certificate.html", emoji: "🏠", title: "असम निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/assam-labour-card.html", emoji: "👷", title: "असम लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/west-bengal-ration-card.html", emoji: "📋", title: "पश्चिम बंगाल राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://fcsca.assam.gov.in/information-services/detail/how-to-apply-for-ration-cards", label: "📝 आवेदन का तरीका (विभाग)" },
    { href: "https://feastasm.gov.in/FrmFindRcDetails.aspx", label: "🔎 RC विवरण देखें" },
  ],
};
