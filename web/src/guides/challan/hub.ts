import type { Section } from "../doc/types";
import { ECHALLAN, VCOURTS, cards } from "./common";

// Hub for /challan/. Facts are the same ones verified for the child guides
// (CMVR rules 139, 167, 167A; MV Act ss. 200, 210A; vcourts.gov.in; NALSA;
// state traffic police portals), checked 4 Oct 2026.
export const hub = {
  title: "ट्रैफिक ई-चालान: चेक, भुगतान और शिकायत | SarkariSewa India",
  description: "ई-चालान स्टेटस, ऑनलाइन भुगतान, वर्चुअल कोर्ट, लोक अदालत, जुर्माना लिस्ट और गलत चालान की शिकायत: official पोर्टल और नियमों के साथ आसान हिंदी गाइड।",
  h1: "ट्रैफिक ई-चालान: चेक, भुगतान और शिकायत",
  lead: "ट्रैफिक चालान का स्टेटस देखना और भरना official पोर्टल echallan.parivahan.gov.in पर फ्री है। कोर्ट भेजे गए चालान vcourts.gov.in पर भरे या contest किए जाते हैं, और गलत चालान की शिकायत उसी पोर्टल पर होती है जहां चालान दिखता है। नीचे हर काम की अलग, जांची हुई गाइड है: स्टेटस, भुगतान, वर्चुअल कोर्ट, लोक अदालत, जुर्माना लिस्ट, शिकायत और दिल्ली, महाराष्ट्र व तेलंगाना के पोर्टल।",
  facts: [
    ["official पोर्टल", ECHALLAN],
    ["कोर्ट वाले चालान", VCOURTS],
    ["भुगतान की समय-सीमा", "90 दिन (CMVR नियम 167, 2020)"],
    ["कैमरा चालान की सूचना", "15 दिन के अंदर (नियम 167A)"],
  ] as [string, string][],
  guides: cards("status", "pay", "court", "fines", "lokAdalat", "wrong", "delhi", "maharashtra", "telangana", "tool"),
  sections: [
    {
      id: "kya-karein",
      title: "आपकी स्थिति के हिसाब से क्या करें",
      table: {
        head: ["आपकी स्थिति", "क्या करें", "गाइड"],
        rows: [
          ["चालान का SMS आया, पर पक्का नहीं कि असली है", "SMS का लिंक न खोलें; पोर्टल खुद खोलकर चालान नंबर से जांचें", '<a href="/challan/e-challan-status-check.html">स्टेटस चेक</a>'],
          ["गाड़ी पर कितने चालान बकाया हैं, जानना है", "चालान/गाड़ी/DL नंबर से official पोर्टल पर देखें", '<a href="/challan/e-challan-status-check.html">स्टेटस चेक</a>'],
          ["चालान सही है, भरना है", "Pay Now से भरें, रसीद सेव करें", '<a href="/challan/e-challan-payment.html">ऑनलाइन भुगतान</a>'],
          ["पैसा कट गया, चालान अब भी बकाया", "दोबारा न भरें; ट्रांजैक्शन स्टेटस देखें, फिर grievance", '<a href="/challan/e-challan-payment.html#paisa-kata">पैसा कटा तो</a>'],
          ["स्टेटस में Sent to Court / Virtual Court", "vcourts.gov.in पर केस खोजें, भरें या contest करें", '<a href="/challan/virtual-court-challan.html">वर्चुअल कोर्ट</a>'],
          ["चालान गलत है (गाड़ी, फोटो या अपराध)", "भरने से पहले पोर्टल पर शिकायत; ज़रूरत हो तो कोर्ट में contest", '<a href="/challan/wrong-challan-complaint.html">गलत चालान</a>'],
          ["कई पुराने चालान एक साथ निपटाने हैं", "अगली लोक अदालत की official सूचना देखें (compoundable अपराध ही)", '<a href="/challan/lok-adalat-challan.html">लोक अदालत</a>'],
          ["किस गलती पर कितना जुर्माना, जानना है", "मोटर वाहन एक्ट की धारा-वार सूची देखें", '<a href="/challan/traffic-fine-list.html">जुर्माना लिस्ट</a>'],
        ],
      },
    },
    {
      id: "prakriya",
      title: "ई-चालान की प्रक्रिया एक नज़र में",
      steps: [
        "<strong>चालान बनता है:</strong> पुलिस/परिवहन अधिकारी मौके पर हैंडहेल्ड मशीन से, या राज्य का कैमरा सिस्टम अपने-आप (CMVR नियम 167)। कैमरा चालान गाड़ी के रजिस्टर्ड मालिक के नाम बनता है (नियम 167A)।",
        "<strong>सूचना आती है:</strong> SMS, ई-मेल या डाक से; कैमरा वाले अपराध की सूचना 15 दिन के अंदर भेजी जानी चाहिए। SMS उसी नंबर पर आता है जो RC/DL से जुड़ा है।",
        "<strong>आप जांचते हैं:</strong> official पोर्टल पर चालान, फोटो सबूत और राशि देखें।",
        "<strong>सही है तो भरें:</strong> नियम 167 (2020) के अनुसार 90 दिन के अंदर। उसके बाद DL/RC से जुड़े आवेदन (परमिट, फिटनेस, टैक्स को छोड़कर) रोके जा सकते हैं।",
        "<strong>गलत है तो आपत्ति करें:</strong> पोर्टल पर शिकायत, या अदालत में contest।",
        "<strong>कोर्ट/लोक अदालत:</strong> non-compoundable अपराध (जैसे नशे में ड्राइविंग) अदालत जाते हैं; compoundable चालान लोक अदालत में भी निपट सकते हैं, अगर आयोजक ने उन्हें शामिल किया हो।",
      ],
    },
    {
      id: "zaroori-baatein",
      title: "हर वाहन चालक के काम की 5 बातें",
      list: [
        "<strong>मोबाइल में दस्तावेज़ मान्य हैं:</strong> CMVR नियम 139 के अनुसार DL, RC, बीमा, PUC आदि पोर्टल से डाउनलोड किए इलेक्ट्रॉनिक रूप (जैसे <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan</a>, DigiLocker) में दिखाए जा सकते हैं।",
        "<strong>राशि राज्य के हिसाब से अलग हो सकती है:</strong> एक्ट में अधिकतम/तय सज़ा है, पर compounding राशि (धारा 200) और गुणक (धारा 210A) राज्य तय करते हैं।",
        "<strong>मोबाइल नंबर अपडेट रखें:</strong> गाड़ी का नंबर VAHAN पर और DL का नंबर SARATHI पर अपडेट होता है।",
        "<strong>गलत चालान पहले न भरें:</strong> कुछ पोर्टल (जैसे महाराष्ट्र) भरे जा चुके चालान पर शिकायत नहीं लेते।",
        "<strong>भुगतान सिर्फ .gov.in पर:</strong> चालान के नाम पर आए अनजान लिंक और APK फाइल से बचें; धोखा होने पर 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें।",
      ],
    },
    {
      id: "rajya",
      title: "राज्यों के ट्रैफिक पुलिस पोर्टल",
      intro: "जिन राज्यों के official पोर्टल और प्रक्रिया हमने खुद जांची है, उनकी अलग गाइड है। बाकी राज्यों के लिए echallan.parivahan.gov.in से शुरू करें।",
      table: {
        head: ["राज्य", "official पोर्टल", "खास बात"],
        rows: [
          ['<a href="/challan/delhi-traffic-challan.html">दिल्ली</a>', "traffic.delhipolice.gov.in", "नोटिस OTP से, इवनिंग/वीकेंड ट्रैफिक कोर्ट अपॉइंटमेंट, Raise Complaint"],
          ['<a href="/challan/maharashtra-e-challan.html">महाराष्ट्र</a>', "mahatrafficechallan.gov.in", "चेसिस/इंजन के आखिरी 4 अंक, मोबाइल लिंक, चालान और रसीद पर grievance"],
          ['<a href="/challan/telangana-e-challan.html">तेलंगाना</a>', "echallan.tspolice.gov.in", "UPI/QR से भुगतान, रसीद, DL पेनल्टी पॉइंट, फर्जी नंबर प्लेट शिकायत"],
        ],
      },
    },
  ] as Section[],
  official: [
    { href: "https://echallan.parivahan.gov.in/", title: "ई-चालान पोर्टल (परिवहन मंत्रालय)", note: "स्टेटस और Pay Now" },
    { href: "https://vcourts.gov.in/virtualcourt/", title: "वर्चुअल कोर्ट", note: "कोर्ट भेजे गए चालान" },
    { href: "https://nalsa.gov.in/national-lok-adalat/", title: "NALSA: नेशनल लोक अदालत" },
    { href: "https://vahan.parivahan.gov.in/mobileupdate/", title: "VAHAN: गाड़ी का मोबाइल नंबर अपडेट" },
    { href: "https://cybercrime.gov.in/", title: "साइबर क्राइम शिकायत पोर्टल", note: "cybercrime.gov.in · हेल्पलाइन 1930" },
  ],
  faq: [
    { q: "ट्रैफिक चालान ऑनलाइन कैसे चेक करें?", a: "echallan.parivahan.gov.in पर Check Online Services में Check Challan Status चुनें और चालान नंबर, गाड़ी नंबर (चेसिस या इंजन नंबर के साथ) या DL नंबर से खोजें। यह फ्री है।" },
    { q: "ट्रैफिक चालान ऑनलाइन कैसे भरें?", a: "स्टेटस में चालान खोलकर Pay Now से भरें और रसीद सेव करें। कोर्ट भेजा गया चालान vcourts.gov.in पर OTP के बाद भरा जाता है।" },
    { q: "चालान न भरने पर क्या होता है?", a: "CMVR नियम 167 (2020) के अनुसार चालान 90 दिन में निपटाना होता है। उसके बाद रिमाइंडर आ सकता है और DL/RC से जुड़े आवेदन (परमिट, फिटनेस, टैक्स को छोड़कर) रोके जा सकते हैं। चालान अदालत भी भेजा जा सकता है।" },
    { q: "गलत चालान आया तो क्या करें?", a: "भरने से पहले उसी official पोर्टल पर शिकायत करें जहां चालान दिखा, फोटो सबूत और RC साथ रखें। चालान कोर्ट में हो तो vcourts.gov.in पर contest चुनें।" },
    { q: "क्या चालान लोक अदालत में निपट सकता है?", a: "compoundable अपराध वाले चालान, अगर आयोजक प्राधिकरण ने उन्हें शामिल किया हो। नशे में ड्राइविंग जैसे non-compoundable अपराध लोक अदालत में नहीं निपटते। तारीख NALSA/राज्य विधिक सेवा प्राधिकरण या ट्रैफिक पुलिस की official सूचना से जानें।" },
    { q: "₹49 वाली RC चालान रिपोर्ट क्या है?", a: "यह हमारी सुविधा सेवा है: गाड़ी नंबर डालकर एक क्लिक में बकाया ई-चालान की साफ रिपोर्ट (चालान नंबर, तारीख, राशि, उल्लंघन, राज्य)। रिपोर्ट न बन सके तो पैसा अपने आप वापस। official पोर्टल पर यही जानकारी फ्री में भी देखी जा सकती है, और चालान का भुगतान हमेशा official पोर्टल पर ही होता है।" },
  ],
};
