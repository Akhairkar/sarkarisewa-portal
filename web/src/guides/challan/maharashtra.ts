import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, ECHALLAN, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - mahatrafficechallan.gov.in/payechallan/PaymentService.htm (English/Marathi;
//   Vehicle No + last 4 digits of chassis/engine, or Challan No; reCAPTCHA;
//   link/unlink mobile; grievance link; app store links; operated by ADGP
//   (Traffic) Maharashtra, address; helpdesk 844 844 8960 and e-mail).
// - mobileToLink.htm (OTP; special notes: wrong information punishable, SMS to
//   currently linked numbers).
// - mahatrafficechallan.gov.in/MH-Echallan-Grievance (Against Challan /
//   Against Receipt, fields, reasons, messages for paid/failed/no record).
// - vcourts.gov.in department list: Maharashtra (Transport Department),
//   Maharashtra (NASHIK TRAFFIC DEPARTMENT).
const MH = "https://mahatrafficechallan.gov.in";
const L = (path: string, text: string) => `<a href="${MH}${path}" target="_blank" rel="noopener nofollow">${text}</a>`;

export const maharashtra: DocGuide = {
  crumbs: crumbs("महाराष्ट्र ई-चालान"),
  docHi: "महाराष्ट्र ई-चालान",
  title: "महाराष्ट्र ई-चालान: चेक, भुगतान और शिकायत | SarkariSewa India",
  description: "mahatrafficechallan.gov.in पर गाड़ी नंबर व चेसिस के आखिरी 4 अंक या चालान नंबर से ई-चालान देखें, भरें, मोबाइल लिंक करें और गलत चालान की grievance दें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "महाराष्ट्र ई-चालान: mahatrafficechallan.gov.in पर चेक, भुगतान, मोबाइल लिंक और grievance",
  lead: "महाराष्ट्र ट्रैफिक पुलिस के ई-चालान official पोर्टल mahatrafficechallan.gov.in पर देखे और भरे जाते हैं। यहां गाड़ी नंबर के साथ चेसिस या इंजन नंबर के आखिरी 4 अंक डालें, या सीधे चालान नंबर डालें। पोर्टल पर गाड़ी से मोबाइल नंबर लिंक/अनलिंक करने और गलत चालान या भुगतान की समस्या पर grievance देने की सुविधा भी है। पोर्टल अपर पुलिस महानिदेशक (ट्रैफिक), महाराष्ट्र राज्य, मुंबई के कार्यालय से चलता है।",
  facts: [
    ["पोर्टल", L("/payechallan/PaymentService.htm", "mahatrafficechallan.gov.in")],
    ["खोजें", "गाड़ी नंबर + चेसिस/इंजन के आखिरी 4 अंक, या चालान नंबर"],
    ["भाषा", "English, मराठी"],
    ["हेल्पडेस्क", '<a href="tel:8448448960">844 844 8960</a>'],
    ["ई-मेल", "helpdesk[at]mahatrafficechallan[dot]gov[dot]in"],
  ],
  promo,
  sections: [
    {
      id: "check-pay",
      title: "महाराष्ट्र में ई-चालान कैसे चेक करें और भरें",
      steps: [
        L("/payechallan/PaymentService.htm", "mahatrafficechallan.gov.in") + " खोलें। ऊपर से भाषा English या मराठी चुन सकते हैं।",
        "<strong>Vehicle No.</strong> चुनें तो गाड़ी नंबर और <strong>चेसिस या इंजन नंबर के आखिरी 4 अंक</strong> डालें। या <strong>Challan No.</strong> चुनकर सीधे चालान नंबर डालें।",
        "reCAPTCHA (\"I'm not a robot\") पूरा करें और <strong>Submit</strong> दबाएं।",
        "चालानों की सूची में तारीख, उल्लंघन और राशि मिलाएं। गलत चालान दिखे तो <strong>भरने से पहले</strong> grievance दें (नीचे देखें)।",
        "सही चालान चुनकर ऑनलाइन भुगतान करें और रसीद/रसीद नंबर सेव करें। रसीद नंबर की ज़रूरत गलत भुगतान वाली grievance में पड़ती है।",
      ],
      callout: { kind: "info", html: "चेसिस/इंजन नंबर RC पर लिखा होता है; mParivahan या DigiLocker वाली वर्चुअल RC में भी देख सकते हैं (<a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan गाइड</a>)। महाराष्ट्र ट्रैफिक पुलिस का official मोबाइल ऐप भी है, जिसके Google Play और App Store लिंक इसी पोर्टल के नीचे दिए हैं; ऐप सिर्फ वहीं से इंस्टॉल करें।" },
    },
    {
      id: "mobile-link",
      title: "गाड़ी से मोबाइल नंबर लिंक या अनलिंक करें",
      intro: "चालान की सूचना और OTP सही नंबर पर आएं, इसके लिए पोर्टल के होम पेज पर <strong>\"Click here to link/unlink mobile number to your vehicle number\"</strong> लिंक है।",
      steps: [
        "होम पेज से link/unlink वाला लिंक खोलें (\"Link Mobile To Vehicle\")।",
        "मांगी गई गाड़ी और मोबाइल की जानकारी भरें, <strong>Get OTP</strong> दबाएं और OTP डालकर Submit करें।",
        "नंबर हटाना हो तो उसी पेज पर \"unlink mobile number from vehicle number\" वाला विकल्प है।",
      ],
      callout: { kind: "warn", html: "पोर्टल के \"Special Notes\" के अनुसार गलत जानकारी देना दंडनीय अपराध है, और पुष्टि के लिए SMS उन नंबरों पर भी भेजा जाता है जो अभी गाड़ी से लिंक हैं।" },
    },
    {
      id: "grievance",
      title: "गलत चालान या भुगतान की grievance",
      intro: "होम पेज पर <strong>\"Click here to raise a grievance for wrongly booked challan or any payment issue\"</strong> से " + L("/MH-Echallan-Grievance", "E-Challan Grievance") + " पोर्टल खुलता है। इसमें दो विकल्प हैं:",
      table: {
        head: ["विकल्प", "कब चुनें", "क्या भरना होता है"],
        rows: [
          ["<strong>Apply Grievance Against Challan</strong>", "चालान गलत लगा हो, या भुगतान के बाद भी चालान बकाया दिखे", "चालान नंबर, मोबाइल, ई-मेल, कारण, टिप्पणी, गाड़ी नंबर, चेसिस/इंजन नंबर"],
          ["<strong>Apply Grievance Against Receipt</strong>", "गलती से किसी दूसरी गाड़ी का चालान भर दिया हो", "रसीद नंबर, राशि, मोबाइल, ई-मेल, जिस गलत गाड़ी का भुगतान हुआ उसका नंबर, आपकी गाड़ी का नंबर और उसका चेसिस/इंजन नंबर"],
        ],
      },
      list: [
        "Fees Paid but Challan is Unpaid (फीस भरी, फिर भी चालान बकाया)",
        "Double Payment Done (दो बार भुगतान)",
        "Evidence not available / Wrong Evidence (सबूत नहीं या गलत)",
        "Duplicate Number plate (आपके नंबर की नकली प्लेट)",
        "Multiple challans on same day same time (एक ही समय के कई चालान)",
        "2 Wheeler challan on 4 Wheeler / 4 Wheeler challan on 2 Wheeler",
        "Number not visible / Violation not clear (नंबर या उल्लंघन साफ नहीं)",
        "Other (अन्य)",
      ],
      html: "<p>ऊपर की सूची grievance फॉर्म में दिए \"Reason\" विकल्प हैं। पोर्टल के संदेशों के अनुसार: चालान पहले से <strong>Paid</strong> हो तो उस पर grievance नहीं उठाई जा सकती; और अगर उस चालान को भरने की सभी कोशिशें फेल हुई हैं तो पोर्टल ट्रांजैक्शन का ब्योरा दिखाकर बैंक से बात करने को कहता है। देशभर के लिए सामान्य तरीका: <a href=\"/challan/wrong-challan-complaint.html\">गलत चालान आया तो क्या करें</a>।</p>",
    },
    {
      id: "court",
      title: "कोर्ट भेजे गए चालान",
      intro: "vcourts.gov.in पर महाराष्ट्र के लिए <strong>Maharashtra (Transport Department)</strong> और <strong>Maharashtra (NASHIK TRAFFIC DEPARTMENT)</strong> विकल्प हैं (4 अक्टूबर 2026 की स्थिति)। चालान अदालत को भेजा गया हो तो वहां मोबाइल, CNR, नाम या चालान/गाड़ी नंबर से केस खोजें और OTP के बाद भरें या contest करें। पूरी प्रक्रिया <a href=\"/challan/virtual-court-challan.html\">वर्चुअल कोर्ट गाइड</a> में है। जिन चालानों का विकल्प vcourts पर नहीं दिखता, उनके लिए चालान पर लिखी अदालत/ट्रैफिक पुलिस से जानकारी लें।",
    },
    {
      id: "jurmana",
      title: "महाराष्ट्र में जुर्माना कितना है",
      intro: "जुर्माने का आधार पूरे देश में मोटर वाहन एक्ट 1988 है (जैसे बिना हेलमेट ₹1,000, बिना सीट बेल्ट ₹1,000, बिना लाइसेंस ₹5,000)। पर धारा 200 के तहत compounding राशि राज्य सरकार की अधिसूचना से तय होती है और धारा 210A में राज्य गुणक लगा सकता है, इसलिए महाराष्ट्र में आपके चालान की राशि पोर्टल पर दिखी राशि ही मानें। धारा-वार कानूनी प्रावधान: <a href=\"/challan/traffic-fine-list.html\">ट्रैफिक जुर्माना लिस्ट</a>।",
    },
    {
      id: "madad",
      title: "मदद और संपर्क",
      list: [
        '<strong>ई-चालान हेल्पडेस्क:</strong> <a href="tel:8448448960">844 844 8960</a>, ई-मेल helpdesk[at]mahatrafficechallan[dot]gov[dot]in (पोर्टल पर दिए अनुसार)।',
        "<strong>संचालक:</strong> अपर पुलिस महानिदेशक (ट्रैफिक), महाराष्ट्र राज्य, 6वीं मंज़िल, मोती महल, 195 जमशेदजी टाटा रोड, चर्चगेट, मुंबई 400020।",
        `<strong>दूसरे राज्य का चालान:</strong> महाराष्ट्र की गाड़ी पर दूसरे राज्य में बना चालान उस राज्य के पोर्टल या ${ECHALLAN} पर देखें।`,
        "<strong>फर्जी लिंक से बचें:</strong> भुगतान सिर्फ mahatrafficechallan.gov.in या दूसरे .gov.in पोर्टल पर करें; SMS/WhatsApp पर आए अनजान लिंक या APK न खोलें।",
      ],
    },
  ],
  official: [
    { href: `${MH}/payechallan/PaymentService.htm`, title: "महाराष्ट्र ई-चालान: चेक और भुगतान" },
    { href: `${MH}/MH-Echallan-Grievance`, title: "ई-चालान grievance: चालान या रसीद पर शिकायत" },
    { href: "https://vcourts.gov.in/virtualcourt/", title: "वर्चुअल कोर्ट: Maharashtra (Transport / Nashik Traffic)" },
    { href: "https://echallan.parivahan.gov.in/", title: "ई-चालान पोर्टल (परिवहन मंत्रालय)" },
    { href: "tel:8448448960", title: "महाराष्ट्र ई-चालान हेल्पडेस्क", note: "844 844 8960" },
  ],
  faq: [
    { q: "महाराष्ट्र में ई-चालान कैसे चेक करें?", a: "mahatrafficechallan.gov.in खोलें, Vehicle No. चुनकर गाड़ी नंबर और चेसिस/इंजन नंबर के आखिरी 4 अंक डालें (या Challan No. चुनकर चालान नंबर), reCAPTCHA पूरा करें और Submit दबाएं।" },
    { q: "महाराष्ट्र ई-चालान में चेसिस नंबर के कितने अंक डालने हैं?", a: "पोर्टल पर चेसिस या इंजन नंबर के आखिरी 4 अंक मांगे जाते हैं। ये RC पर लिखे होते हैं।" },
    { q: "महाराष्ट्र में गलत चालान की शिकायत कैसे करें?", a: "पोर्टल के grievance लिंक से Apply Grievance Against Challan चुनें, चालान नंबर, मोबाइल, ई-मेल, कारण (जैसे Wrong Evidence या Duplicate Number plate), गाड़ी नंबर और चेसिस/इंजन नंबर भरें। चालान भर देने के बाद grievance नहीं उठाई जा सकती।" },
    { q: "गलती से दूसरी गाड़ी का चालान भर दिया, क्या करें?", a: "grievance पोर्टल पर Apply Grievance Against Receipt चुनें और रसीद नंबर, राशि, गलत गाड़ी का नंबर, अपनी गाड़ी का नंबर व चेसिस/इंजन नंबर भरें।" },
    { q: "महाराष्ट्र ई-चालान हेल्पलाइन नंबर क्या है?", a: "पोर्टल पर ई-चालान हेल्पडेस्क 844 844 8960 और ई-मेल helpdesk@mahatrafficechallan.gov.in दिया गया है।" },
    { q: "चालान का SMS मेरे नंबर पर नहीं आता, क्या करें?", a: "पोर्टल के होम पेज पर link/unlink mobile number वाले लिंक से OTP के ज़रिये अपना नंबर गाड़ी से लिंक करें। गलत जानकारी देना दंडनीय है और पुष्टि का SMS पहले से लिंक नंबरों पर भी जाता है।" },
  ],
  related: cards("hub", "status", "wrong", "court", "tool", "dl"),
  aside: [
    { href: `${MH}/payechallan/PaymentService.htm`, label: "🛣️ महाराष्ट्र ई-चालान पोर्टल" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
