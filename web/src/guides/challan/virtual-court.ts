import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, VCOURTS, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - vcourts.gov.in/virtualcourt/ home (department list, search options, terms),
//   faq.php / help.php (pay or contest, OTP, engine/chassis option, ePay,
//   receipt, Reprint, assigned court and date, summons), view_refund.php.
// - Motor Vehicles Act 1988 (indiacode.gov.in): s.200 compoundable offences
//   (as substituted by Act 18 of 2023), s.208 summary disposal.
// - CMVR rule 167(5) (G.S.R. 584(E), 2020): court cases excluded from 90 days.
// - parivahan.gov.in eChallan user manual: officer can mark "SENT TO COURT".
// - traffic.delhipolice.gov.in: "Court challan" offences and note that the
//   final amount is at the court's discretion; evening court instructions PDF.
const DEPTS = [
  "असम (Transport, Traffic)", "चंडीगढ़ (Traffic)", "छत्तीसगढ़ (Traffic, Transport)", "दिल्ली (Notice Department, Traffic Department)",
  "गुजरात (Transport, Traffic)", "हरियाणा (Traffic)", "हिमाचल प्रदेश (Traffic)", "जम्मू-कश्मीर (Jammu Traffic, Kashmir Traffic)",
  "कर्नाटक (Traffic)", "केरल (Transport, Police)", "मध्य प्रदेश (Traffic)", "महाराष्ट्र (Transport, Nashik Traffic)",
  "मणिपुर (Transport, Traffic)", "मेघालय (Traffic)", "ओडिशा (CTC-BBSR Commissionerate)", "पंजाब (Traffic)",
  "राजस्थान (Traffic)", "तमिलनाडु (Traffic)", "त्रिपुरा (Traffic)", "उत्तराखंड (Transport, Traffic)",
  "उत्तर प्रदेश (Traffic)", "पश्चिम बंगाल (Traffic)",
];

export const virtualCourt: DocGuide = {
  crumbs: crumbs("वर्चुअल कोर्ट चालान"),
  docHi: "वर्चुअल कोर्ट चालान",
  title: "Virtual Court चालान: खोजें, भरें या contest करें | SarkariSewa India",
  description: "कोर्ट गया ट्रैफिक चालान vcourts.gov.in पर मोबाइल, CNR, नाम या चालान/गाड़ी नंबर से खोजें, OTP से भरें या contest करें। रसीद, समन और कोर्ट की तारीख।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "Virtual Court चालान: vcourts.gov.in पर केस खोजें, जुर्माना भरें या contest करें",
  lead: "जब ट्रैफिक चालान ट्रैफिक पुलिस/परिवहन विभाग से अदालत को भेज दिया जाता है, तो वह Virtual Court (vcourts.gov.in) पर दिखता है। यहां राज्य और विभाग चुनकर मोबाइल नंबर, CNR नंबर, पार्टी का नाम या चालान/गाड़ी नंबर से केस खोजें। फिर OTP से पुष्टि करके ऑनलाइन जुर्माना भरें, या \"I wish to contest the case\" चुनें; तब आपको कोर्ट का नाम और तारीख मिलती है।",
  facts: [
    ["पोर्टल", VCOURTS],
    ["किसने बनाया", "NIC, ई-कोर्ट्स प्रोजेक्ट (ई-कमेटी, सुप्रीम कोर्ट)"],
    ["खोजने के तरीके", "मोबाइल / CNR / पार्टी का नाम / चालान या गाड़ी नंबर"],
    ["पुष्टि", "OTP, या इंजन और चेसिस नंबर"],
    ["भुगतान", "ePay गेटवे; रसीद तुरंत"],
  ],
  promo,
  sections: [
    {
      id: "kya-hai",
      title: "Virtual Court क्या है",
      intro: "Virtual Court ई-कोर्ट्स प्रोजेक्ट के तहत नेशनल इन्फॉर्मेटिक्स सेंटर (NIC) का बनाया पोर्टल है, जिसका मकसद छोटे मामलों में व्यक्ति या वकील को अदालत में हाज़िर हुए बिना केस ऑनलाइन निपटाना है। ट्रैफिक चालान इसका सबसे आम इस्तेमाल है: अदालत को भेजा गया चालान यहां दिखता है, और आप घर बैठे जुर्माना भर सकते हैं या मुकदमा लड़ने (contest) का विकल्प चुन सकते हैं।",
      callout: { kind: "info", html: "पोर्टल की शर्तों के अनुसार भुगतान की सुविधा संबंधित हाईकोर्ट और राज्य के वित्त विभाग की होती है। भुगतान में दिक्कत आए तो संबंधित अदालत, हाईकोर्ट या राज्य के वित्त/कोषागार विभाग से संपर्क करना होता है।" },
    },
    {
      id: "court-kab",
      title: "चालान कोर्ट कब पहुंचता है",
      list: [
        "<strong>जो अपराध compoundable नहीं हैं:</strong> मोटर वाहन एक्ट की धारा 200 में उन अपराधों की सूची है जिनका जुर्माना अधिकारी मौके पर/ऑनलाइन (compounding) ले सकते हैं। नशे में गाड़ी चलाना (धारा 185), मोबाइल को छोड़कर खतरनाक ड्राइविंग के ज़्यादातर मामले (धारा 184), दुर्घटना के बाद कर्तव्य न निभाना (धारा 187) और नाबालिग से जुड़े अपराध (धारा 199A) इस सूची में नहीं हैं, इसलिए ये अदालत में जाते हैं।",
        "<strong>अधिकारी ने कोर्ट भेजा:</strong> परिवहन मंत्रालय के ई-चालान मैनुअल के अनुसार अधिकारी चालान को अदालत भेज सकता है; तब उसका स्टेटस \"SENT TO COURT\" हो जाता है।",
        "<strong>राज्य की प्रक्रिया:</strong> बकाया चालान कब और किस अदालत को भेजे जाते हैं, यह राज्य और विभाग की प्रक्रिया पर निर्भर है। इसलिए ई-चालान पोर्टल पर स्टेटस देखते रहें।",
      ],
      html: "<p>दिल्ली ट्रैफिक पुलिस की जुर्माना सूची में रेड लाइट जंप, स्टॉप साइन तोड़ना, गलत ओवरटेकिंग, उल्टी दिशा में चलाना, खतरनाक ड्राइविंग, नशे में ड्राइविंग और नाबालिग से जुड़े अपराध <strong>\"Court challan\"</strong> लिखे हैं, और नोट है कि अंतिम राशि अदालत के विवेक पर होती है। धारा 200 की पूरी सूची और राशियां <a href=\"/challan/traffic-fine-list.html\">ट्रैफिक जुर्माना लिस्ट</a> में देखें।</p>",
    },
    {
      id: "pay-steps",
      title: "Virtual Court पर चालान भरने के स्टेप",
      steps: [
        `${VCOURTS} खोलें। <strong>\"Select Department\"</strong> में अपना राज्य और विभाग (Traffic / Transport / Notice) चुनें और <strong>Proceed Now</strong> दबाएं।`,
        "खोजने का तरीका चुनें: <strong>Mobile Number</strong>, <strong>CNR Number</strong>, <strong>Party Name</strong> या <strong>Challan/Vehicle No.</strong>",
        "केस मिलने पर <strong>\"View\"</strong> दबाएं; पूरा चालान, अपराध और राशि दिखेगी।",
        "<strong>Pay Fine</strong> चुनें। चालान में दर्ज मोबाइल पर आए <strong>OTP</strong> से पुष्टि करें। मोबाइल नंबर गलत हो तो <strong>इंजन और चेसिस नंबर</strong> से पुष्टि का विकल्प चुनें; पोर्टल इसे RTO रिकॉर्ड से मिलाता है।",
        "ePay गेटवे पर भुगतान करें। सफल भुगतान पर रसीद तुरंत मिलती है; उसे डाउनलोड या प्रिंट करें।",
      ],
      callout: { kind: "ok", html: "रसीद नहीं मिली या खो गई? केस दोबारा खोजें, स्टेटस <strong>\"Paid\"</strong> दिखेगा। <strong>View → Reprint</strong> दबाकर OTP के बाद रसीद दोबारा देखें/प्रिंट करें।" },
    },
    {
      id: "contest",
      title: "चालान से सहमत नहीं? Contest कैसे करें",
      steps: [
        "ऊपर की तरह केस खोजें और <strong>View</strong> दबाएं।",
        "<strong>\"I wish to contest the case\"</strong> रेडियो बटन चुनें।",
        "OTP से पुष्टि करें; उसके बाद Submit बटन दिखेगा। मांगी गई जानकारी भरकर Submit करें।",
        "स्क्रीन पर acknowledgement के साथ <strong>उस अदालत का नाम और तारीख</strong> दिखती है जहां केस भेजा गया है। इसे सेव कर लें।",
        "तय तारीख पर अदालत में खुद या वकील के ज़रिये पेश हों और अपने सबूत (फोटो, रसीद, दस्तावेज़) साथ रखें।",
      ],
      html: "<p><strong>समन कैसे देखें:</strong> भुगतान शुरू करने या contest चुनने के बाद OTP सत्यापित होते ही \"Click here to view summon\" लिंक दिखता है। <strong>कानूनी आधार:</strong> मोटर वाहन एक्ट की धारा 208 के अनुसार अदालत समन पर यह भी लिख सकती है कि आप सुनवाई से पहले तय तारीख तक अपराध स्वीकार करके तय राशि (कानूनी अधिकतम से ज़्यादा नहीं) भेज सकते हैं; ऐसा करने पर उस अपराध में आगे कार्यवाही नहीं होती।</p>",
    },
    {
      id: "vibhag",
      title: "Virtual Court पर कौन से राज्य/विभाग हैं",
      intro: "4 अक्टूबर 2026 को vcourts.gov.in के \"Select Department\" में ये विकल्प दिखे। सूची बदलती रहती है, इसलिए पोर्टल पर ताज़ा सूची देखें:",
      list: DEPTS,
      html: "<p>आपका राज्य सूची में नहीं है तो चालान पर लिखी अदालत या जिला अदालत से जानकारी लें, या <a href=\"https://ecourts.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ecourts.gov.in</a> पर केस स्टेटस देखें।</p>",
    },
    {
      id: "delhi-evening",
      title: "दिल्ली में एक और रास्ता: इवनिंग/वीकेंड ट्रैफिक कोर्ट",
      intro: "दिल्ली ट्रैफिक पुलिस का <a href=\"https://traffic.delhipolice.gov.in/evecourtddc/\" target=\"_blank\" rel=\"noopener nofollow\">Evening Court पोर्टल</a> वर्चुअल कोर्ट में पेंडिंग चालान/नोटिस के लिए इवनिंग या वीकेंड ट्रैफिक कोर्ट में ऑनलाइन अपॉइंटमेंट देता है। इसमें शर्त माननी होती है कि आप वही चालान vcourts.gov.in पर contest नहीं करेंगे। पूरी प्रक्रिया <a href=\"/challan/delhi-traffic-challan.html\">दिल्ली ट्रैफिक चालान गाइड</a> में है।",
    },
  ],
  official: [
    { href: "https://vcourts.gov.in/virtualcourt/", title: "Virtual Courts: केस खोजें, भरें या contest करें" },
    { href: "https://vcourts.gov.in/virtualcourt/faq.php", title: "Virtual Courts FAQ" },
    { href: "https://pay.ecourts.gov.in/epay/", title: "eCourts ePay (भुगतान गेटवे)" },
    { href: "https://ecourts.gov.in/", title: "eCourts सेवाएं: केस स्टेटस" },
    { href: "https://traffic.delhipolice.gov.in/evecourtddc/", title: "दिल्ली: इवनिंग/वीकेंड कोर्ट अपॉइंटमेंट" },
  ],
  faq: [
    { q: "Virtual Court में चालान कैसे खोजें?", a: "vcourts.gov.in पर Select Department में अपना राज्य और विभाग चुनें, फिर मोबाइल नंबर, CNR नंबर, पार्टी का नाम या चालान/गाड़ी नंबर से खोजें और View दबाएं।" },
    { q: "Virtual Court चालान ऑनलाइन कैसे भरें?", a: "केस खोलकर Pay Fine चुनें, चालान में दर्ज मोबाइल पर आए OTP से पुष्टि करें और ePay गेटवे पर भुगतान करें। सफल भुगतान पर रसीद तुरंत मिलती है।" },
    { q: "चालान पर दिया मोबाइल नंबर गलत है तो क्या करें?", a: "vcourts.gov.in पर OTP की जगह इंजन और चेसिस नंबर से पुष्टि का विकल्प है। पोर्टल इन्हें RTO रिकॉर्ड से मिलाता है, फिर आप भुगतान या contest कर सकते हैं।" },
    { q: "चालान contest करने पर क्या होता है?", a: "I wish to contest the case चुनकर OTP से पुष्टि करें और Submit करें। acknowledgement में अदालत का नाम और तारीख आती है; उस दिन खुद या वकील के ज़रिये पेश होना होता है।" },
    { q: "Virtual Court में जुर्माना कौन तय करता है?", a: "अदालत। दिल्ली ट्रैफिक पुलिस की सूची में कोर्ट चालान के लिए साफ लिखा है कि अंतिम राशि अदालत के विवेक पर है। कानून में हर अपराध की अधिकतम सज़ा मोटर वाहन एक्ट में तय है।" },
    { q: "Virtual Court की रसीद दोबारा कैसे मिलेगी?", a: "केस दोबारा खोजें; स्टेटस Paid दिखेगा। View पर जाकर Reprint दबाएं और OTP के बाद रसीद देखें या प्रिंट करें।" },
    { q: "Virtual Court में भरा पैसा वापस मिल सकता है?", a: "पोर्टल की रिफंड नीति के अनुसार रद्दीकरण या रिफंड संबंधित हाईकोर्ट के नियमों से होता है। भुगतान से जुड़ी दिक्कत में संबंधित अदालत या राज्य के वित्त/कोषागार विभाग से संपर्क करें।" },
  ],
  related: cards("status", "pay", "lokAdalat", "fines", "tool", "delhi"),
  aside: [
    { href: "https://vcourts.gov.in/virtualcourt/", label: "⚖️ Virtual Court खोलें" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
