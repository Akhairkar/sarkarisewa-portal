import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026): echallan.tspolice.gov.in/publicview/ (tabs and
// their fields, Net Banking help, Rs 5 user charge on spot challans, payment
// debited note, refund policy, violation alert registration, feedback form
// reasons, mobile update links, fake website warning and ECHALN-* SMS header,
// contact numbers of the Hyderabad, Cyberabad, Malkajgiri and Future City
// commissionerates) and publicview/Complaint.jsp (fake number plate form).
const TS = "https://echallan.tspolice.gov.in/publicview/";

export const telangana: DocGuide = {
  crumbs: crumbs("तेलंगाना ई-चालान"),
  docHi: "तेलंगाना ई-चालान",
  title: "तेलंगाना ई-चालान: चेक, भुगतान और शिकायत | SarkariSewa India",
  description: "echallan.tspolice.gov.in पर गाड़ी नंबर से चालान देखें, UPI/कार्ड/नेट बैंकिंग से भरें, रसीद, DL पेनल्टी पॉइंट, फर्जी नंबर प्लेट शिकायत और रिफंड नियम।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "तेलंगाना ई-चालान: echallan.tspolice.gov.in पर पेंडिंग चालान, भुगतान, रसीद और शिकायत",
  lead: "तेलंगाना में ट्रैफिक चालान तेलंगाना पुलिस के Integrated e-Challan System, echallan.tspolice.gov.in पर गाड़ी नंबर से देखे और भरे जाते हैं। भुगतान इंटरनेट बैंकिंग, क्रेडिट/डेबिट कार्ड, UPI ID या QR कोड से होता है। पैसा कट जाए पर चालान साफ न हो तो पोर्टल एक दिन इंतज़ार करने को कहता है, और फिर भी साफ न हो तो राशि 7 कामकाजी दिन में खाते में लौटाई जाती है। पोर्टल पर रसीद, DL पेनल्टी पॉइंट, गाड़ी ज़ब्ती और फर्जी नंबर प्लेट की शिकायत के अलग विकल्प हैं।",
  facts: [
    ["पोर्टल", `<a href="${TS}" target="_blank" rel="noopener nofollow">echallan.tspolice.gov.in</a>`],
    ["खोजें", "गाड़ी नंबर"],
    ["भुगतान", "नेट बैंकिंग, कार्ड, UPI ID, QR कोड"],
    ["मौके वाले चालान पर", "₹5 यूज़र चार्ज"],
    ["official SMS हेडर", "ECHALN-*"],
  ],
  promo,
  sections: [
    {
      id: "check",
      title: "तेलंगाना में पेंडिंग चालान कैसे देखें",
      steps: [
        `<a href="${TS}" target="_blank" rel="noopener nofollow">echallan.tspolice.gov.in</a> खोलें (यह अपने-आप public view पेज पर ले जाता है)।`,
        "<strong>Vehicle Number</strong> टैब में गाड़ी नंबर डालें।",
        "कैप्चा/सवाल का जवाब भरें और खोजें। गाड़ी पर बकाया चालानों की सूची दिखेगी।",
        "हर चालान की तारीख, उल्लंघन और राशि मिलाएं। गलत चालान हो तो भरने से पहले नीचे बताई शिकायत सुविधा इस्तेमाल करें।",
      ],
      table: {
        head: ["पोर्टल का टैब", "क्या मिलता है", "क्या डालना होता है"],
        rows: [
          ["Vehicle Number", "गाड़ी पर पेंडिंग चालान", "गाड़ी नंबर"],
          ["Payment Receipt", "भरे गए चालान की रसीद", "ट्रांजैक्शन रेफरेंस नंबर"],
          ["DL Penalty Points", "ड्राइविंग लाइसेंस पर दर्ज पेनल्टी पॉइंट", "लाइसेंस नंबर और जन्म तिथि"],
          ["Seizure (e-39b)", "गाड़ी ज़ब्ती की जानकारी", "चालान नंबर/मोबाइल नंबर"],
          ["Complaints", "फर्जी नंबर प्लेट की शिकायत; बिकी गाड़ी (Sold Out Vehicle) पर ओनरशिप ट्रांसफर की शिकायत", "गाड़ी नंबर, नाम, पता, मोबाइल, OTP (बिकी गाड़ी में आप विक्रेता हैं या खरीदार, यह भी)"],
        ],
      },
    },
    {
      id: "pay",
      title: "ऑनलाइन भुगतान कैसे करें",
      steps: [
        "जो चालान भरना है उसे चुनें और <strong>Netbanking</strong> (भुगतान) विकल्प पर क्लिक करें।",
        "गेटवे की सूची में \"List of Banks\" देखकर वह गेटवे चुनें जिसमें आपका बैंक है।",
        "पोर्टल के अनुसार सभी गेटवे में इंटरनेट बैंकिंग, क्रेडिट/डेबिट कार्ड, UPI ID या QR कोड से भुगतान हो सकता है।",
        "<strong>भुगतान से पहले बनने वाला Reference No. ज़रूर नोट करें।</strong>",
        "भुगतान बैंक में सफल होते ही पोर्टल पर दिख जाता है और रसीद मिलती है। बाद में रसीद \"Payment Receipt\" टैब में रेफरेंस नंबर से दोबारा मिलती है।",
      ],
      callout: { kind: "info", html: "पोर्टल के अनुसार <strong>मौके पर बने (Spot) चालान पर ₹5 यूज़र चार्ज</strong> जुड़ता है।" },
    },
    {
      id: "paisa-kata",
      title: "पैसा कटा पर चालान साफ नहीं हुआ",
      steps: [
        "दोबारा भुगतान न करें। Make Payment के पास दिए <strong>Transaction status</strong> बटन से स्टेटस देखें।",
        "पोर्टल के अनुसार ई-चालान सर्वर पर अपडेट के लिए <strong>एक दिन</strong> इंतज़ार करें।",
        "फिर भी चालान साफ न हो तो कटी राशि <strong>7 कामकाजी दिन</strong> में आपके बैंक खाते में रिफंड की जाती है।",
        "अलग से रिफंड अनुरोध करना हो तो ट्रांजैक्शन रेफरेंस नंबर, गाड़ी नंबर, तारीख, राशि और पेमेंट गेटवे की जानकारी देनी होती है। स्वीकृत रिफंड उसी तरीके से लौटता है जिससे भुगतान हुआ था, और रिफंड पर विभाग का फैसला अंतिम होता है।",
      ],
    },
    {
      id: "shikayat",
      title: "गलत चालान, फर्जी नंबर प्लेट और बिकी गाड़ी",
      list: [
        "<strong>User Feedback Form:</strong> नाम, मोबाइल, ई-मेल (वैकल्पिक), कारण और विवरण भरकर OTP से सबमिट होता है। कारणों में <strong>Manual Error</strong>, <strong>Double Challan</strong>, <strong>Fake Vehicle</strong> और <strong>Theft Vehicle</strong> हैं।",
        `<strong>फर्जी नंबर प्लेट:</strong> Complaints → <a href="${TS}Complaint.jsp" target="_blank" rel="noopener nofollow">Fake Number Plate</a> में गाड़ी नंबर, नाम, पता और मोबाइल डालकर OTP से शिकायत दर्ज करें।`,
        `<strong>बिकी गाड़ी:</strong> Complaints → <a href="${TS}vehicleAddrStatus.jsp" target="_blank" rel="noopener nofollow">Sold Out Vehicle</a> में "Ownership Transfer" की शिकायत दर्ज होती है: शिकायतकर्ता विक्रेता (Seller) है या खरीदार (Buyer), गाड़ी नंबर, नाम, पता, मोबाइल और OTP। साथ ही RC में ओनरशिप ट्रांसफर जल्द पूरा करवाएं।`,
        "पोर्टल की शर्तों के अनुसार दिखाए गए डेटा में गड़बड़ी हो तो संबंधित ट्रैफिक पुलिस से संपर्क करें। चालान अदालत में है तो <a href=\"/challan/virtual-court-challan.html\">वर्चुअल कोर्ट/अदालत</a> का रास्ता है।",
      ],
      html: "<p>और जानें: <a href=\"/challan/wrong-challan-complaint.html\">गलत चालान आया तो क्या करें</a>।</p>",
    },
    {
      id: "alert-mobile",
      title: "चालान अलर्ट और मोबाइल नंबर अपडेट",
      list: [
        "<strong>Register For Violation Alerts:</strong> पोर्टल पर रजिस्टर करने से आपकी गाड़ी पर चालान बनते ही मोबाइल पर अलर्ट भेजा जाता है।",
        'गाड़ी का मोबाइल नंबर: <a href="https://vahan.parivahan.gov.in/mobileupdate/" target="_blank" rel="noopener nofollow">VAHAN मोबाइल अपडेट</a> या <a href="https://tgtransport.net/TGCFSTONLINE/OnlineTransactions/UpdateMobileNumber.aspx" target="_blank" rel="noopener nofollow">तेलंगाना परिवहन विभाग</a> (दोनों लिंक पोर्टल के Help में हैं)।',
        'ड्राइविंग लाइसेंस का मोबाइल नंबर: <a href="https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do" target="_blank" rel="noopener nofollow">SARATHI</a> पर।',
      ],
    },
    {
      id: "fraud",
      title: "फर्जी ई-चालान वेबसाइट और ऐप से सावधान",
      intro: "तेलंगाना पुलिस अपने पोर्टल पर (अंग्रेज़ी और तेलुगु में) चेतावनी देती है:",
      list: [
        "ई-चालान सेवा की नकल करने वाली फर्जी वेबसाइट और मोबाइल ऐप से सावधान रहें; पोर्टल सिर्फ official वेबसाइट/ऐप से इस्तेमाल करें।",
        "पुलिस कभी कॉल, ई-मेल, मैसेज या लिंक से पासवर्ड, OTP, भुगतान की जानकारी या दूसरी संवेदनशील जानकारी नहीं मांगती।",
        "सिर्फ <strong>\"ECHALN-*\"</strong> SMS हेडर वाले संदेशों पर भरोसा करें।",
        "संदिग्ध गतिविधि की तुरंत पुलिस को सूचना दें। ऑनलाइन धोखा होने पर <a href=\"tel:1930\">1930</a> या cybercrime.gov.in पर भी शिकायत कर सकते हैं।",
      ],
    },
    {
      id: "sampark",
      title: "संपर्क (पोर्टल पर दिए अनुसार)",
      table: {
        head: ["कमिश्नरेट", "फोन"],
        rows: [
          ["हैदराबाद पुलिस कमिश्नरेट", '<a href="tel:04027852721">040-27852721</a>, <a href="tel:04027852772">040-27852772</a>'],
          ["साइबराबाद पुलिस कमिश्नरेट", '<a href="tel:04027853416">040-27853416</a>'],
          ["मलकाजगिरी पुलिस कमिश्नरेट", '<a href="tel:04027853000">040-2785 3000</a>'],
          ["फ्यूचर सिटी पुलिस कमिश्नरेट", '<a href="tel:+918712665328">+91 8712665328</a>'],
        ],
      },
      html: "<p>ये नंबर वेबसाइट या ऑनलाइन सेवाओं से जुड़े सवाल, मदद या शिकायत के लिए पोर्टल पर दिए गए हैं। जुर्माने की कानूनी राशि के लिए <a href=\"/challan/traffic-fine-list.html\">ट्रैफिक जुर्माना लिस्ट</a> देखें; तेलंगाना में असली राशि पोर्टल/चालान पर दिखी राशि ही मानें।</p>",
    },
  ],
  official: [
    { href: TS, title: "तेलंगाना पुलिस: Integrated e-Challan System" },
    { href: `${TS}Complaint.jsp`, title: "फर्जी नंबर प्लेट की शिकायत" },
    { href: "https://vahan.parivahan.gov.in/mobileupdate/", title: "VAHAN: गाड़ी का मोबाइल नंबर अपडेट" },
    { href: "https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do", title: "SARATHI: DL का मोबाइल नंबर अपडेट" },
    { href: "https://echallan.parivahan.gov.in/", title: "ई-चालान पोर्टल (परिवहन मंत्रालय)" },
  ],
  faq: [
    { q: "तेलंगाना में ट्रैफिक चालान कैसे चेक करें?", a: "echallan.tspolice.gov.in खोलें, Vehicle Number टैब में गाड़ी नंबर डालें, कैप्चा भरें और खोजें। गाड़ी पर बकाया चालान दिख जाएंगे।" },
    { q: "तेलंगाना ई-चालान कैसे भरें?", a: "चालान चुनकर भुगतान विकल्प पर जाएं, अपने बैंक वाला गेटवे चुनें और इंटरनेट बैंकिंग, कार्ड, UPI ID या QR कोड से भरें। भुगतान से पहले बना रेफरेंस नंबर नोट करें। मौके वाले चालान पर ₹5 यूज़र चार्ज जुड़ता है।" },
    { q: "पैसा कट गया पर चालान अब भी बकाया दिख रहा है?", a: "Transaction status बटन से स्टेटस देखें और एक दिन इंतज़ार करें। पोर्टल के अनुसार फिर भी चालान साफ न हो तो राशि 7 कामकाजी दिन में खाते में रिफंड होती है।" },
    { q: "तेलंगाना ई-चालान की रसीद दोबारा कैसे मिलेगी?", a: "पोर्टल के Payment Receipt टैब में भुगतान का ट्रांजैक्शन रेफरेंस नंबर डालें।" },
    { q: "DL पर पेनल्टी पॉइंट कैसे देखें?", a: "पोर्टल के DL Penalty Points टैब में ड्राइविंग लाइसेंस नंबर और जन्म तिथि डालें।" },
    { q: "तेलंगाना ई-चालान का असली SMS कैसे पहचानें?", a: "तेलंगाना पुलिस के अनुसार ई-चालान के संदेश सिर्फ ECHALN-* SMS हेडर से आते हैं, और पुलिस कभी OTP, पासवर्ड या भुगतान की जानकारी नहीं मांगती।" },
  ],
  related: cards("hub", "status", "pay", "wrong", "tool", "mparivahan"),
  aside: [
    { href: TS, label: "🚓 तेलंगाना ई-चालान पोर्टल" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
