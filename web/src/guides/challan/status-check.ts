import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, ECHALLAN, VCOURTS, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - echallan.parivahan.gov.in was not reachable; the search flow (Check Online
//   Services -> Check Challan Status, challan/vehicle/DL number, chassis or
//   engine number for vehicle search, captcha, Get Detail, Pay Now) is as
//   already stated on /services/rc-challan/.
// - Central Motor Vehicles Rules: rule 167 as inserted by G.S.R. 584(E),
//   25 Sep 2020 (90 days, reminder, DL/RC applications held) and rule 167A by
//   G.S.R. 575(E), 11 Aug 2021 (camera challans, evidence list, 15-day notice,
//   owner's innocence claim) - text from indiacode.gov.in.
// - parivahan.gov.in eChallan brochure/manual (integrated with Vahan and
//   Sarathi; QR code on challan receipt; "Sent to Court" status).
// - traffic.delhipolice.gov.in/notice (vehicle or notice number, OTP, change
//   mobile via chassis/engine number, violation proof), mahatrafficechallan.gov.in
//   (vehicle number + last 4 digits of chassis/engine, or challan number),
//   echallan.tspolice.gov.in, vcourts.gov.in (search options).
export const statusCheck: DocGuide = {
  crumbs: crumbs("ई-चालान स्टेटस"),
  docHi: "ई-चालान स्टेटस",
  title: "ई-चालान स्टेटस चेक: गाड़ी, DL या चालान नंबर से | SarkariSewa India",
  description: "echallan.parivahan.gov.in पर चालान, गाड़ी या DL नंबर से ई-चालान स्टेटस फ्री में देखें। कौन सी जानकारी लगती है, कैमरा चालान का सबूत और राज्य पोर्टल।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "ई-चालान स्टेटस कैसे चेक करें: चालान नंबर, गाड़ी नंबर या DL नंबर से",
  lead: "ई-चालान का स्टेटस परिवहन विभाग के official पोर्टल echallan.parivahan.gov.in पर फ्री में देखा जाता है। \"Check Challan Status\" में चालान नंबर, गाड़ी नंबर या ड्राइविंग लाइसेंस नंबर में से कोई एक डालें; गाड़ी नंबर से खोजने पर RC पर लिखा चेसिस या इंजन नंबर भी मांगा जाता है। दिल्ली, महाराष्ट्र और तेलंगाना जैसे कुछ राज्यों के अपने पोर्टल भी हैं, और कोर्ट भेजे गए चालान वर्चुअल कोर्ट पोर्टल पर दिखते हैं।",
  facts: [
    ["official पोर्टल", ECHALLAN],
    ["खोजने के तरीके", "चालान नंबर / गाड़ी नंबर / DL नंबर"],
    ["गाड़ी नंबर से खोजने पर", "चेसिस या इंजन नंबर (RC पर लिखा)"],
    ["सरकारी फीस", "स्टेटस देखना फ्री है"],
    ["कोर्ट वाले चालान", VCOURTS],
  ],
  promo,
  sections: [
    {
      id: "kab-banta-hai",
      title: "ई-चालान क्या है और आपको कैसे पता चलता है",
      intro: "ई-चालान ट्रैफिक नियम तोड़ने पर जारी होने वाला डिजिटल चालान है। केंद्रीय मोटर यान नियम (CMVR) के नियम 167 के अनुसार वर्दी वाला पुलिस अधिकारी या राज्य सरकार का अधिकृत अधिकारी चालान कागज़ी या इलेक्ट्रॉनिक रूप में जारी कर सकता है, और राज्य कैमरा जैसे इलेक्ट्रॉनिक सिस्टम से अपने-आप चालान बनाने की सुविधा भी चला सकते हैं। परिवहन मंत्रालय का ई-चालान सिस्टम <strong>VAHAN</strong> (गाड़ी रिकॉर्ड) और <strong>SARATHI</strong> (ड्राइविंग लाइसेंस रिकॉर्ड) से जुड़ा है, इसलिए चालान गाड़ी नंबर और DL नंबर दोनों से जुड़ जाता है।",
      list: [
        "<strong>मौके पर चालान:</strong> पुलिस/परिवहन अधिकारी हैंडहेल्ड मशीन से चालान बनाता है। official मैनुअल के अनुसार छपी रसीद पर QR कोड होता है, जिसे स्कैन करके बाद में ऑनलाइन भुगतान के पेज पर जा सकते हैं।",
        "<strong>कैमरा चालान:</strong> नियम 167A के अनुसार चालान गाड़ी के <strong>रजिस्टर्ड मालिक</strong> के नाम पर बनता है और उसकी सूचना SMS, ई-मेल या डाक से भेजी जाती है।",
        "<strong>सूचना की समय-सीमा:</strong> कैमरा/इलेक्ट्रॉनिक निगरानी वाले अपराध की सूचना अपराध की तारीख से <strong>15 दिन के अंदर</strong> भेजी जानी चाहिए (नियम 167A(9))।",
        "<strong>SMS उसी मोबाइल पर आता है जो RC/DL से जुड़ा है।</strong> नंबर पुराना है तो चालान की सूचना छूट सकती है, इसलिए नियमित रूप से खुद स्टेटस देखते रहें।",
      ],
    },
    {
      id: "steps",
      title: "echallan.parivahan.gov.in पर स्टेटस देखने के स्टेप",
      steps: [
        `${ECHALLAN} खोलें और <strong>"Check Online Services → Check Challan Status"</strong> चुनें।`,
        "खोजने का तरीका चुनें: <strong>Challan Number</strong>, <strong>Vehicle Number</strong> या <strong>DL Number</strong>।",
        "गाड़ी नंबर चुना है तो गाड़ी नंबर के साथ <strong>चेसिस नंबर या इंजन नंबर</strong> भी डालें। यह RC (या mParivahan/DigiLocker वाली RC) पर लिखा होता है।",
        "स्क्रीन पर दिखा <strong>कैप्चा</strong> भरें और <strong>\"Get Detail\"</strong> दबाएं।",
        "चालान की सूची में चालान नंबर, तारीख, राशि और स्टेटस देखें। बकाया चालान को वहीं <strong>\"Pay Now\"</strong> से भरा जा सकता है (देखें: <a href=\"/challan/e-challan-payment.html\">चालान ऑनलाइन कैसे भरें</a>)।",
      ],
      callout: { kind: "info", html: "स्टेटस देखने या चालान भरने के लिए किसी एजेंट या अनजान ऐप की ज़रूरत नहीं है। official पोर्टल पर यह काम फ्री है; सिर्फ ऑनलाइन भुगतान पर बैंक/गेटवे के नियम लागू होते हैं।" },
    },
    {
      id: "kaun-sa-tarika",
      title: "कौन सा नंबर कब इस्तेमाल करें",
      table: {
        head: ["आपके पास क्या है", "कैसे खोजें", "कब काम आता है"],
        rows: [
          ["SMS या रसीद पर चालान नंबर", "Challan Number डालें", "किसी एक खास चालान का स्टेटस या भुगतान देखना हो"],
          ["गाड़ी नंबर + RC", "Vehicle Number + चेसिस/इंजन नंबर", "गाड़ी पर दर्ज सभी चालान देखने हों, जैसे गाड़ी खरीदने-बेचने से पहले"],
          ["ड्राइविंग लाइसेंस", "DL Number", "आपके नाम/लाइसेंस पर बने चालान, चाहे गाड़ी किसी और की हो"],
          ["कोर्ट भेजा गया चालान", `${VCOURTS} पर मोबाइल नंबर, CNR नंबर, पार्टी का नाम या चालान/गाड़ी नंबर से`, "स्टेटस में चालान कोर्ट भेजा गया दिखे"],
        ],
      },
      html: "<p>चेसिस नंबर पूरा न दिखे तो RC की फोटो या mParivahan ऐप वाली वर्चुअल RC देखें। राज्य पोर्टलों पर अक्सर चेसिस/इंजन नंबर के <strong>आखिरी कुछ अंक</strong> ही मांगे जाते हैं (जैसे महाराष्ट्र में आखिरी 4 अंक)।</p>",
    },
    {
      id: "status-matlab",
      title: "स्टेटस का मतलब क्या है",
      intro: "पोर्टल और राज्य के हिसाब से शब्द थोड़े अलग हो सकते हैं, पर मोटे तौर पर तीन स्थितियां होती हैं:",
      table: {
        head: ["स्टेटस", "मतलब", "आपको क्या करना है"],
        rows: [
          ["Pending / Unpaid (बकाया)", "चालान बना है और अभी भरा नहीं गया", "चालान सही है तो Pay Now से भरें; गलत है तो <a href=\"/challan/wrong-challan-complaint.html\">शिकायत करें</a>"],
          ["Paid / Disposed (भरा हुआ / निपटा)", "भुगतान हो चुका या मामला निपट गया", "रसीद PDF सेव करें; RC/DL के काम में यही सबूत है"],
          ["Sent to Court / Virtual Court", "चालान अदालत को भेजा गया है", `${VCOURTS} पर खोजें, वहीं जुर्माना भरें या \"contest\" चुनें (देखें: <a href=\"/challan/virtual-court-challan.html\">वर्चुअल कोर्ट गाइड</a>)`],
        ],
      },
      callout: { kind: "warn", html: "CMVR नियम 167 (G.S.R. 584(E), 2020) के अनुसार चालान जारी होने के <strong>90 दिन</strong> के अंदर निपटाना होता है। उसके बाद भी बकाया रहे तो कम से कम एक रिमाइंडर भेजा जा सकता है, और चालान में दर्ज लाइसेंस/गाड़ी से जुड़े आवेदन (परमिट, फिटनेस और टैक्स को छोड़कर) लाइसेंसिंग या रजिस्ट्रेशन अथॉरिटी रोक सकती है। कोर्ट में चल रहे मामलों पर यह नियम लागू नहीं होता। नियमों में बाद के बदलाव के लिए official पोर्टल देखें।" },
    },
    {
      id: "camera-saboot",
      title: "कैमरा चालान: सबूत में क्या होना चाहिए",
      intro: "स्पीड कैमरा, CCTV, ANPR, स्पीड गन या बॉडी कैमरा से बने चालान के साथ नियम 167A(6) के अनुसार ये जानकारी होनी चाहिए:",
      list: [
        "अपराध और नंबर प्लेट साफ दिखाने वाली फोटो",
        "मशीन की माप (जैसे ओवरस्पीड में दर्ज स्पीड)",
        "अपराध की तारीख, समय और जगह",
        "मोटर वाहन एक्ट की कौन सी धारा टूटी, इसकी सूचना",
        "भारतीय साक्ष्य अधिनियम की धारा 65B(4) वाला प्रमाण पत्र, जिस पर राज्य के अधिकृत अधिकारी के हस्ताक्षर हों",
      ],
      html: "<p>नियम 167A(3) में लिखा है कि ऐसी फुटेज से किन अपराधों पर चालान बन सकता है, जैसे ओवरस्पीड, गलत पार्किंग, बिना हेलमेट, बिना सीट बेल्ट, रेड लाइट/स्टॉप साइन तोड़ना, गाड़ी चलाते हुए मोबाइल, गलत दिशा में चलाना, ओवरलोड और इमरजेंसी गाड़ी को रास्ता न देना। दिल्ली ट्रैफिक पुलिस का पोर्टल नोटिस के साथ \"Violation Proof\" फोटो भी दिखाता है। फोटो में आपकी गाड़ी न हो तो <a href=\"/challan/wrong-challan-complaint.html\">गलत चालान की शिकायत</a> करें।</p>",
    },
    {
      id: "rajya-portal",
      title: "राज्यों के अपने official पोर्टल",
      intro: "कुछ राज्यों में ट्रैफिक पुलिस का अपना ई-चालान पोर्टल है। वहां के चालान वहीं ज़्यादा जल्दी और पूरी जानकारी के साथ दिखते हैं:",
      table: {
        head: ["राज्य", "पोर्टल", "किससे खोजें"],
        rows: [
          ["दिल्ली", '<a href="https://traffic.delhipolice.gov.in/notice/pay-notice" target="_blank" rel="noopener nofollow">traffic.delhipolice.gov.in</a>', "गाड़ी नंबर या नोटिस नंबर; RC से जुड़े मोबाइल पर OTP (<a href=\"/challan/delhi-traffic-challan.html\">पूरी गाइड</a>)"],
          ["महाराष्ट्र", '<a href="https://mahatrafficechallan.gov.in/payechallan/PaymentService.htm" target="_blank" rel="noopener nofollow">mahatrafficechallan.gov.in</a>', "गाड़ी नंबर + चेसिस/इंजन नंबर के आखिरी 4 अंक, या चालान नंबर (<a href=\"/challan/maharashtra-e-challan.html\">पूरी गाइड</a>)"],
          ["तेलंगाना", '<a href="https://echallan.tspolice.gov.in/publicview/" target="_blank" rel="noopener nofollow">echallan.tspolice.gov.in</a>', "गाड़ी नंबर; रसीद के लिए ट्रांजैक्शन रेफरेंस नंबर (<a href=\"/challan/telangana-e-challan.html\">पूरी गाइड</a>)"],
        ],
      },
      html: "<p>दूसरे राज्यों के लिए echallan.parivahan.gov.in से ही शुरू करें। किसी भी पोर्टल को खोलने से पहले पता बार में डोमेन (<strong>.gov.in</strong>) ज़रूर जांचें।</p>",
    },
    {
      id: "mobile-update",
      title: "चालान का SMS नहीं आता? मोबाइल नंबर अपडेट करें",
      list: [
        'गाड़ी (RC) से जुड़ा मोबाइल नंबर परिवहन विभाग के <a href="https://vahan.parivahan.gov.in/mobileupdate/" target="_blank" rel="noopener nofollow">VAHAN मोबाइल अपडेट पेज</a> से बदला जा सकता है (यह लिंक दिल्ली और तेलंगाना ट्रैफिक पुलिस के पोर्टल पर भी दिया है)।',
        '<a href="https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do" target="_blank" rel="noopener nofollow">SARATHI</a> पर ड्राइविंग लाइसेंस से जुड़ा मोबाइल नंबर अपडेट होता है।',
        "दिल्ली के नोटिस पोर्टल पर पुराने नंबर की जगह चेसिस और इंजन नंबर से पुष्टि करके नया नंबर डालने का विकल्प है; महाराष्ट्र पोर्टल पर \"link/unlink mobile number\" का विकल्प है।",
      ],
    },
  ],
  official: [
    { href: "https://echallan.parivahan.gov.in/", title: "ई-चालान पोर्टल (परिवहन मंत्रालय)", note: "स्टेटस देखें और Pay Now से भरें" },
    { href: "https://vcourts.gov.in/virtualcourt/", title: "वर्चुअल कोर्ट", note: "कोर्ट भेजे गए ट्रैफिक चालान" },
    { href: "https://vahan.parivahan.gov.in/mobileupdate/", title: "VAHAN: RC से जुड़ा मोबाइल नंबर अपडेट" },
    { href: "https://traffic.delhipolice.gov.in/notice/pay-notice", title: "दिल्ली ट्रैफिक पुलिस: पेंडिंग नोटिस/चालान" },
    { href: "https://mahatrafficechallan.gov.in/payechallan/PaymentService.htm", title: "महाराष्ट्र ई-चालान भुगतान" },
    { href: "https://echallan.tspolice.gov.in/publicview/", title: "तेलंगाना पुलिस ई-चालान" },
  ],
  faq: [
    { q: "ई-चालान स्टेटस फ्री में कैसे देखें?", a: "echallan.parivahan.gov.in पर Check Online Services में Check Challan Status चुनें। चालान नंबर, गाड़ी नंबर (चेसिस या इंजन नंबर के साथ) या DL नंबर डालें, कैप्चा भरें और Get Detail दबाएं। स्टेटस देखना फ्री है।" },
    { q: "गाड़ी नंबर से चालान देखने पर चेसिस नंबर क्यों मांगा जाता है?", a: "ताकि गाड़ी का मालिक ही उसकी जानकारी देख सके। चेसिस और इंजन नंबर RC पर लिखे होते हैं; mParivahan या DigiLocker वाली वर्चुअल RC में भी दिखते हैं।" },
    { q: "कैमरा चालान की सूचना कितने दिन में आती है?", a: "CMVR नियम 167A के अनुसार इलेक्ट्रॉनिक निगरानी से बने चालान की सूचना अपराध के 15 दिन के अंदर भेजी जानी चाहिए। सूचना SMS, ई-मेल या डाक से रजिस्टर्ड मालिक को जाती है।" },
    { q: "स्टेटस में Sent to Court लिखा है तो क्या करें?", a: "इसका मतलब चालान अदालत को भेजा गया है। vcourts.gov.in पर अपना राज्य/विभाग चुनें, चालान या गाड़ी नंबर से केस खोजें और OTP के बाद जुर्माना भरें या contest चुनें।" },
    { q: "चालान 90 दिन तक न भरें तो क्या होगा?", a: "2020 के CMVR नियम 167 के अनुसार चालान 90 दिन में निपटाना होता है। उसके बाद रिमाइंडर भेजा जा सकता है और लाइसेंस/गाड़ी से जुड़े आवेदन (परमिट, फिटनेस और टैक्स को छोड़कर) रोके जा सकते हैं। कोर्ट वाले मामलों पर यह लागू नहीं होता।" },
    { q: "क्या दूसरे राज्य का चालान भी echallan.parivahan.gov.in पर दिखता है?", a: "जिन राज्यों में यह राष्ट्रीय ई-चालान सिस्टम चलता है, उनके चालान यहां दिखते हैं। दिल्ली, महाराष्ट्र और तेलंगाना जैसे राज्यों के अपने पोर्टल भी हैं; पक्का करने के लिए वहां भी देख लें।" },
  ],
  related: cards("pay", "wrong", "court", "fines", "tool", "mparivahan"),
  aside: [
    { href: "https://echallan.parivahan.gov.in/", label: "🔍 Official ई-चालान पोर्टल" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
