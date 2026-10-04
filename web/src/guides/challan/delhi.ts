import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026), all on traffic.delhipolice.gov.in:
// - home menu (Pending Challans/Notices, Check Payment Status, Evening Court,
//   Raise Complaint, Update Mobile Number -> vahan.parivahan.gov.in/mobileupdate,
//   Check Towed/Impounded Vehicle, helplines 011-25844444 and 1095);
// - /notice/pay-notice and /notice/js/pay-common.min.js (vehicle or notice
//   number, OTP to the registered mobile, change mobile after chassis/engine
//   check, "Violation Proof" photos); /notice/check-payment (notice number);
// - /evecourtddc/assets/Instructions.pdf and the app bundle (evening and
//   weekend traffic court, max five challans, time slot, undertaking not to
//   contest on vcourts, reprint, rebook three days after a missed date);
// - /en/raise-complaint (fields); /en/faq (documents in DigiLocker/mParivahan,
//   spot payment, grievance or court, towing and custody charges, grievance
//   e-mail); /en/traffic-violations-penalties (Delhi amounts and "Court challan");
// - /en/national-lok-adalat (DSLSA poster) and the 10 Sep 2026 alert
//   (Lok Adalat date changed to 25.10.2026).
// - vcourts.gov.in: Delhi (Notice Department) and Delhi (Traffic Department).
const DTP = "https://traffic.delhipolice.gov.in";
const L = (path: string, text: string) => `<a href="${DTP}${path}" target="_blank" rel="noopener nofollow">${text}</a>`;

export const delhi: DocGuide = {
  crumbs: crumbs("दिल्ली ट्रैफिक चालान"),
  docHi: "दिल्ली ट्रैफिक चालान",
  title: "दिल्ली ट्रैफिक चालान: चेक, भुगतान, इवनिंग कोर्ट | SarkariSewa India",
  description: "दिल्ली ट्रैफिक पुलिस पोर्टल पर गाड़ी या नोटिस नंबर से चालान देखें, OTP से भरें, इवनिंग कोर्ट अपॉइंटमेंट लें, गलत चालान की शिकायत करें, जुर्माने जानें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "दिल्ली ट्रैफिक चालान: नोटिस/चालान चेक, भुगतान, इवनिंग कोर्ट और शिकायत",
  lead: "दिल्ली में ट्रैफिक चालान और कैमरा नोटिस दिल्ली ट्रैफिक पुलिस की वेबसाइट traffic.delhipolice.gov.in पर \"Pending Challans/Notices\" में गाड़ी नंबर या नोटिस नंबर से देखे और भरे जाते हैं; OTP गाड़ी से जुड़े मोबाइल पर आता है। जो चालान वर्चुअल कोर्ट में है उसे vcourts.gov.in पर भरें या contest करें, या दिल्ली ट्रैफिक पुलिस के पोर्टल से इवनिंग/वीकेंड ट्रैफिक कोर्ट का अपॉइंटमेंट लें। गलत चालान की शिकायत वेबसाइट के \"Raise Complaint\" से होती है।",
  facts: [
    ["पोर्टल", L("/notice/pay-notice", "traffic.delhipolice.gov.in")],
    ["खोजें", "गाड़ी नंबर या नोटिस नंबर"],
    ["पुष्टि", "RC से जुड़े मोबाइल पर OTP"],
    ["ट्रैफिक हेल्पलाइन", '<a href="tel:01125844444">011-25844444</a>, <a href="tel:1095">1095</a>'],
    ["वर्चुअल कोर्ट", "Delhi (Notice / Traffic Department)"],
  ],
  promo,
  sections: [
    {
      id: "check-pay",
      title: "दिल्ली में पेंडिंग चालान/नोटिस कैसे देखें और भरें",
      steps: [
        `${L("/notice/pay-notice", "Pending Challans/Notices")} पेज खोलें (वेबसाइट के मेन्यू में \"Pending Challan/Notice\" के नीचे)।`,
        "<strong>Vehicle Number</strong> या <strong>Notice Number</strong> डालें और <strong>Search Details</strong> दबाएं।",
        "गाड़ी से जुड़े मोबाइल नंबर पर आया <strong>OTP</strong> डालें। स्क्रीन पर मोबाइल नंबर के आखिरी अंक दिखते हैं ताकि आप पहचान सकें कि OTP किस नंबर पर गया।",
        "नोटिस/चालान की सूची में राशि देखें। कैमरा नोटिस में <strong>\"Violation Proof\"</strong> खोलकर फोटो ज़रूर देखें कि गाड़ी आपकी ही है।",
        "भुगतान पूरा करें और रसीद सेव करें। बाद में " + L("/notice/check-payment", "Check Payment Status") + " में नोटिस नंबर डालकर स्टेटस देख सकते हैं।",
      ],
      callout: { kind: "info", html: "मोबाइल नंबर बदल गया है? नोटिस पोर्टल पर <strong>Change Mobile Number</strong> का विकल्प है, जिसमें गाड़ी के <strong>चेसिस और इंजन नंबर</strong> से पुष्टि के बाद नया नंबर डाला जाता है। गाड़ी के रिकॉर्ड में नंबर स्थायी रूप से बदलने के लिए वेबसाइट \"Update Mobile Number\" के लिए <a href=\"https://vahan.parivahan.gov.in/mobileupdate/\" target=\"_blank\" rel=\"noopener nofollow\">VAHAN</a> पर भेजती है।" },
    },
    {
      id: "jurmana",
      title: "दिल्ली ट्रैफिक पुलिस की सूची से कुछ आम जुर्माने",
      intro: "दिल्ली ट्रैफिक पुलिस की \"Traffic Violations & Penalties\" सूची (4 अक्टूबर 2026 को देखी गई) से कुछ उदाहरण। पूरी सूची और ताज़ा राशि वेबसाइट पर देखें; पूरे देश के कानूनी प्रावधान <a href=\"/challan/traffic-fine-list.html\">जुर्माना लिस्ट</a> में हैं।",
      table: {
        head: ["उल्लंघन", "धारा", "पहली बार (₹)", "बाद में (₹)"],
        rows: [
          ["बिना हेलमेट (चालक/पीछे बैठा)", "194D MVA", "1,000", "1,000"],
          ["दोपहिया पर तीन सवारी", "194C MVA", "1,000", "1,000"],
          ["बिना सीट बेल्ट", "194B MVA", "1,000", "1,000"],
          ["गाड़ी चलाते हुए हैंडहेल्ड मोबाइल", "184 MVA", "5,000", "10,000"],
          ["ओवरस्पीड: LMV", "112/183(1) MVA", "2,000", "2,000"],
          ["ओवरस्पीड: MMV/HTV", "112/183(1) MVA", "4,000", "4,000"],
          ["बिना लाइसेंस", "3/181 MVA", "5,000", "5,000"],
          ["बिना बीमा", "146/196 MVA", "2,000", "4,000"],
          ["बिना PUC", "115 CMVR/190(2) MVA", "10,000", "10,000"],
          ["RC उल्लंघन / खराब या फैंसी नंबर प्लेट", "39/192 MVA", "5,000", "10,000"],
          ["इमरजेंसी गाड़ी को रास्ता न देना", "194E MVA", "10,000", "10,000"],
          ["गलत या रुकावट वाली पार्किंग", "122/177 MVA", "500", "1,500"],
          ["टिंटेड ग्लास", "CMVR 100(2)/177 MVA", "500", "1,500"],
          ["रेड लाइट जंप, उल्टी दिशा, खतरनाक ड्राइविंग, नशे में ड्राइविंग, नाबालिग", "184 / 185 / 199A MVA", "Court challan", "Court challan"],
        ],
      },
      html: "<p>सूची के अनुसार \"Court challan\" वाले मामलों में अंतिम राशि अदालत के विवेक पर होती है।</p>",
    },
    {
      id: "court",
      title: "वर्चुअल कोर्ट और इवनिंग/वीकेंड ट्रैफिक कोर्ट",
      intro: "दिल्ली के जो चालान/नोटिस अदालत भेजे जा चुके हैं, वे <a href=\"https://vcourts.gov.in/virtualcourt/\" target=\"_blank\" rel=\"noopener nofollow\">vcourts.gov.in</a> पर <strong>Delhi (Notice Department)</strong> या <strong>Delhi (Traffic Department)</strong> चुनकर मिलते हैं; वहां OTP के बाद भरें या contest करें (<a href=\"/challan/virtual-court-challan.html\">पूरी गाइड</a>)। दूसरा रास्ता दिल्ली ट्रैफिक पुलिस का Evening Court पोर्टल है:",
      steps: [
        L("/evecourtddc/", "Evening Court पोर्टल") + " खोलें, <strong>Evening Court</strong> या <strong>Weekend Traffic Court</strong> चुनें, गाड़ी नंबर और कैप्चा डालकर Search करें।",
        "वर्चुअल कोर्ट में पेंडिंग और इवनिंग कोर्ट वाले चालान/नोटिस दिखेंगे; एक बार में <strong>ज़्यादा से ज़्यादा 5</strong> निपटारे के लिए दिखते हैं।",
        "गाड़ी से जुड़े मोबाइल पर आया OTP डालें। मोबाइल नंबर रजिस्टर्ड न हो तो पहले परिवहन विभाग के पोर्टल पर रजिस्टर करना होगा।",
        "उपलब्ध (हरी) तारीख, कोर्ट परिसर, कोर्ट और समय-स्लॉट चुनें।",
        "<strong>\"I will not contest the challan on virtual court portal i.e. vcourts.gov.in\"</strong> वाली शर्त पर टिक करें, Submit करें और Print से चालान/नोटिस का प्रिंट लें।",
        "तय दिन उस प्रिंट के साथ कोर्ट जाएं। प्रिंट खो जाए तो कोर्ट की तारीख से पहले गाड़ी नंबर और OTP से <strong>Reprint</strong> कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "तय तारीख पर कोर्ट नहीं पहुंचे तो नया अपॉइंटमेंट ले सकते हैं; official निर्देशों के अनुसार पेंडिंग चालान/नोटिस छूटी तारीख के <strong>तीन दिन बाद</strong> दोबारा डाउनलोड के लिए उपलब्ध होते हैं।" },
    },
    {
      id: "shikayat",
      title: "गलत चालान की शिकायत (Raise Complaint)",
      steps: [
        L("/en/raise-complaint", "Raise Complaint") + " पेज खोलें और Complaint Type में <strong>Traffic challan</strong> चुनें।",
        "<strong>गाड़ी नंबर</strong> और <strong>चालान नंबर</strong> डालें।",
        "समस्या चुनें: <strong>Wrong Vehicle Number</strong>, <strong>Wrong Offence captured</strong>, <strong>Problem with the proof of offence</strong> या <strong>Number is mine but not vehicle</strong>।",
        "सबूत की फोटो अपलोड करें (JPG/JPEG/PNG, 2 MB से कम), जगह (Google लोकेशन भी), अपना नाम और शिकायत लिखें।",
        "मोबाइल नंबर पर OTP लेकर सत्यापित करें, कैप्चा भरें और Submit करें।",
      ],
      html: "<p>दिल्ली ट्रैफिक पुलिस के FAQ के अनुसार चालान अनुचित लगे तो ऑनलाइन शिकायत कर सकते हैं या अदालत में चुनौती दे सकते हैं। शिकायत के लिए ई-मेल grievance[dot]traffic[at]delhipolice[dot]gov[dot]in भी दिया गया है। और जानें: <a href=\"/challan/wrong-challan-complaint.html\">गलत चालान आया तो क्या करें</a>।</p>",
    },
    {
      id: "dastavez-towing",
      title: "रोके जाने पर दस्तावेज़ और गाड़ी टो होने पर",
      list: [
        "दिल्ली ट्रैफिक पुलिस के FAQ के अनुसार DL, RC, बीमा और PUC दिखाने के लिए <strong>DigiLocker या mParivahan ऐप</strong> वाले वर्ज़न भी मान्य हैं (<a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan गाइड</a>)।",
        "compoundable अपराध में मौके पर नकद या डिजिटल भुगतान हो सकता है; रसीद ज़रूर लें।",
        "गाड़ी टो या ज़ब्त हुई है तो " + L("/en/vehicle-status", "Check Towed/Impounded Vehicle") + " में गाड़ी नंबर से स्टेटस देखें, या नज़दीकी ट्रैफिक सर्किल/हेल्पलाइन से संपर्क करें।",
      ],
      table: {
        head: ["गाड़ी", "टोइंग चार्ज (₹)", "कस्टडी चार्ज प्रति दिन (₹)*"],
        rows: [
          ["दोपहिया / ई-रिक्शा", "200", "200"],
          ["हल्की सवारी गाड़ी (कार, जीप, वैन)", "400", "500"],
          ["हल्की माल गाड़ी", "1,000", "1,000"],
          ["मीडियम/हैवी सवारी या माल गाड़ी", "1,500", "1,500"],
          ["मल्टी-एक्सल ट्रेलर", "2,000", "2,000"],
        ],
      },
      callout: { kind: "info", html: "*टो/ज़ब्त होने के 48 घंटे बाद से हर दिन या उसके हिस्से पर। इसके अलावा उल्लंघन की compounding राशि भी देनी होती है (दिल्ली ट्रैफिक पुलिस FAQ के अनुसार)।" },
    },
    {
      id: "lok-adalat",
      title: "दिल्ली में लोक अदालत",
      intro: "दिल्ली विधिक सेवा प्राधिकरण (DSLSA) दिल्ली पुलिस ट्रैफिक के साथ नेशनल लोक अदालत में मौके (On-the-Spot) और नोटिस ब्रांच के बकाया ट्रैफिक चालान निपटाने की व्यवस्था करता रहा है। दिल्ली ट्रैफिक पुलिस ने 10 सितंबर 2026 की सूचना में बताया कि लोक अदालत की तारीख बदलकर <strong>25.10.2026</strong> कर दी गई है। तारीख और व्यवस्था फिर बदल सकती है, इसलिए जाने से पहले वेबसाइट की ताज़ा सूचना देखें। नशे में ड्राइविंग जैसे non-compoundable अपराध लोक अदालत में नहीं निपटते (<a href=\"/challan/lok-adalat-challan.html\">लोक अदालत गाइड</a>)।",
    },
  ],
  official: [
    { href: `${DTP}/notice/pay-notice`, title: "पेंडिंग चालान/नोटिस देखें और भरें" },
    { href: `${DTP}/notice/check-payment`, title: "भुगतान का स्टेटस (नोटिस नंबर से)" },
    { href: `${DTP}/evecourtddc/`, title: "इवनिंग/वीकेंड ट्रैफिक कोर्ट अपॉइंटमेंट" },
    { href: `${DTP}/en/raise-complaint`, title: "गलत चालान की शिकायत (Raise Complaint)" },
    { href: `${DTP}/en/traffic-violations-penalties`, title: "दिल्ली: Traffic Violations & Penalties" },
    { href: "https://vcourts.gov.in/virtualcourt/", title: "वर्चुअल कोर्ट: Delhi (Notice/Traffic Department)" },
    { href: "tel:01125844444", title: "दिल्ली ट्रैफिक हेल्पलाइन", note: "011-25844444 · 1095" },
  ],
  faq: [
    { q: "दिल्ली में ट्रैफिक चालान कैसे चेक करें?", a: "traffic.delhipolice.gov.in पर Pending Challans/Notices खोलें, गाड़ी नंबर या नोटिस नंबर डालें और गाड़ी से जुड़े मोबाइल पर आए OTP से पुष्टि करें। कोर्ट भेजे गए चालान vcourts.gov.in पर Delhi (Notice/Traffic Department) में मिलते हैं।" },
    { q: "OTP पुराने मोबाइल नंबर पर जा रहा है, क्या करें?", a: "नोटिस पोर्टल पर Change Mobile Number का विकल्प है, जिसमें चेसिस और इंजन नंबर से पुष्टि होती है। गाड़ी के रिकॉर्ड में नंबर बदलने के लिए vahan.parivahan.gov.in/mobileupdate पर अपडेट करें।" },
    { q: "दिल्ली में इवनिंग कोर्ट का अपॉइंटमेंट कैसे लें?", a: "traffic.delhipolice.gov.in/evecourtddc पर Evening या Weekend Traffic Court चुनें, गाड़ी नंबर और कैप्चा डालें, OTP दें, फिर तारीख, कोर्ट परिसर, कोर्ट और समय-स्लॉट चुनकर Submit करें और प्रिंट लेकर तय दिन कोर्ट जाएं।" },
    { q: "दिल्ली में बिना PUC का चालान कितना है?", a: "दिल्ली ट्रैफिक पुलिस की जुर्माना सूची में बिना PUC (W/O PUCC) का चालान CMVR नियम 115 और मोटर वाहन एक्ट की धारा 190(2) के तहत ₹10,000 लिखा है।" },
    { q: "दिल्ली ट्रैफिक पुलिस का हेल्पलाइन नंबर क्या है?", a: "दिल्ली ट्रैफिक पुलिस की वेबसाइट पर ट्रैफिक हेल्पलाइन 011-25844444 और 1095 दिए गए हैं।" },
    { q: "दिल्ली में गाड़ी टो हो गई, कितना चार्ज लगेगा?", a: "दिल्ली ट्रैफिक पुलिस FAQ के अनुसार दोपहिया का टोइंग चार्ज ₹200 और कार जैसी हल्की सवारी गाड़ी का ₹400 है; 48 घंटे बाद हर दिन कस्टडी चार्ज (दोपहिया ₹200, कार ₹500) लगता है, साथ में उल्लंघन की compounding राशि भी।" },
  ],
  related: cards("hub", "court", "wrong", "lokAdalat", "tool", "mparivahan"),
  aside: [
    { href: `${DTP}/notice/pay-notice`, label: "🏙️ दिल्ली: पेंडिंग चालान" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
