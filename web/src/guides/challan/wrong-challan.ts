import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, ECHALLAN, VCOURTS, crumbs, promo, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - CMVR rule 167A(6), (7), (10) (G.S.R. 575(E), 11 Aug 2021) on indiacode.gov.in.
// - traffic.delhipolice.gov.in/en/raise-complaint (form fields and problem
//   types), /en/faq (grievance online or contest in court; helpline 1095,
//   011-25844444; grievance e-mail).
// - mahatrafficechallan.gov.in/MH-Echallan-Grievance (reasons list, fields;
//   no grievance once paid).
// - echallan.tspolice.gov.in/publicview (feedback form remarks, Fake Number
//   Plate complaint, Sold Out Vehicle tab, fake website warning, SMS header
//   ECHALN-*).
// - vcourts.gov.in FAQ (request to contest).
// - I4C handbook linked from traffic.delhipolice.gov.in (report on
//   cybercrime.gov.in or call 1930; do not install apps from unofficial links).
// - The complaint option on echallan.parivahan.gov.in is as stated on
//   /services/rc-challan/ (site not reachable from the build sandbox).
export const wrongChallan: DocGuide = {
  crumbs: crumbs("गलत चालान की शिकायत"),
  docHi: "गलत चालान",
  title: "गलत चालान आया तो क्या करें: शिकायत और कोर्ट | SarkariSewa India",
  description: "गलत गाड़ी नंबर, फर्जी नंबर प्लेट, बिकी गाड़ी या दोहरा चालान? official पोर्टल पर शिकायत, वर्चुअल कोर्ट में contest और फर्जी ई-चालान SMS से बचाव।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "गलत चालान आया तो क्या करें: शिकायत, कोर्ट में आपत्ति और फर्जी SMS से बचाव",
  lead: "गलत चालान हो तो उसे भरने से पहले उसी official पोर्टल पर शिकायत (grievance) करें जहां चालान दिख रहा है, जैसे दिल्ली ट्रैफिक पुलिस का \"Raise Complaint\", महाराष्ट्र का ई-चालान grievance पोर्टल या तेलंगाना ई-चालान की शिकायत सुविधा। चालान अदालत भेजा जा चुका है तो vcourts.gov.in पर \"contest\" चुनें। गाड़ी आप नहीं चला रहे थे तो नियम 167A(10) के तहत सबूत देकर अधिकारी के सामने यह दावा कर सकते हैं। और चालान के नाम पर आए अनजान लिंक या APK फाइल कभी न खोलें।",
  facts: [
    ["पहला कदम", "चालान, फोटो सबूत और गाड़ी नंबर मिलाएं"],
    ["भरने से पहले", "शिकायत करें; भरने के बाद कई पोर्टल grievance नहीं लेते"],
    ["कोर्ट वाला चालान", `${VCOURTS} पर contest`],
    ["साइबर फ्रॉड", '<a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a> / <a href="tel:1930">1930</a>'],
  ],
  promo,
  sections: [
    {
      id: "kab-galat",
      title: "चालान गलत कब माना जा सकता है",
      list: [
        "<strong>गाड़ी नंबर गलत पढ़ा गया:</strong> फोटो में गाड़ी आपकी नहीं, या नंबर का कोई अक्षर अलग है।",
        "<strong>गाड़ी का प्रकार अलग:</strong> आपकी कार पर दोपहिया का चालान या उल्टा। महाराष्ट्र grievance पोर्टल में \"2 Wheeler challan on 4 Wheeler\" और \"4 Wheeler challan on 2 Wheeler\" जैसे कारण हैं।",
        "<strong>फर्जी नंबर प्लेट:</strong> कोई दूसरी गाड़ी आपका नंबर लगाकर घूम रही है।",
        "<strong>दोहरा चालान:</strong> एक ही समय, एक ही जगह के एक से ज़्यादा चालान।",
        "<strong>भुगतान हो चुका, फिर भी बकाया:</strong> रसीद आपके पास है पर स्टेटस Pending दिखता है।",
        "<strong>सबूत अधूरा:</strong> नियम 167A(6) के अनुसार कैमरा चालान के साथ साफ फोटो (अपराध और नंबर प्लेट), मशीन की माप, तारीख-समय-जगह, टूटी धारा और धारा 65B(4) का प्रमाण पत्र होना चाहिए।",
        "<strong>गाड़ी बिक चुकी थी या चोरी हो गई थी:</strong> अपराध की तारीख पर गाड़ी आपके पास नहीं थी।",
      ],
    },
    {
      id: "pehle-kya",
      title: "शिकायत से पहले क्या तैयार रखें",
      steps: [
        "चालान नंबर, तारीख, जगह और अपराध नोट करें; पोर्टल पर \"Violation Proof\"/फोटो खोलकर स्क्रीनशॉट लें।",
        "अपनी RC की कॉपी, और गाड़ी की साफ फोटो जिसमें नंबर प्लेट दिखे (दिल्ली के शिकायत फॉर्म में इमेज अपलोड ज़रूरी है: JPG/JPEG/PNG, 2 MB से कम)।",
        "जो भी सबूत आपकी बात साबित करे: उस समय आप कहीं और थे, गाड़ी बेचने के कागज़, चोरी की FIR, भुगतान की रसीद/बैंक ट्रांजैक्शन ID।",
        "<strong>गलत चालान न भरें।</strong> महाराष्ट्र के grievance पोर्टल पर साफ लिखा है कि चालान \"Paid\" हो जाने पर उस पर grievance नहीं उठाई जा सकती।",
      ],
    },
    {
      id: "kahan-shikayat",
      title: "कहां शिकायत करें (official विकल्प)",
      table: {
        head: ["पोर्टल", "शिकायत का विकल्प", "क्या-क्या मांगा जाता है"],
        rows: [
          ['<a href="https://traffic.delhipolice.gov.in/en/raise-complaint" target="_blank" rel="noopener nofollow">दिल्ली ट्रैफिक पुलिस</a>', "Raise Complaint → Complaint Type: Traffic challan", "गाड़ी नंबर, चालान नंबर, समस्या (Wrong Vehicle Number / Wrong Offence captured / Problem with the proof of offence / Number is mine but not vehicle), फोटो, लोकेशन, नाम, विवरण, मोबाइल OTP, कैप्चा"],
          ['<a href="https://mahatrafficechallan.gov.in/MH-Echallan-Grievance" target="_blank" rel="noopener nofollow">महाराष्ट्र ई-चालान</a>', "Apply Grievance Against Challan / Against Receipt", "चालान नंबर, मोबाइल, ई-मेल, कारण, टिप्पणी, गाड़ी नंबर, चेसिस/इंजन नंबर"],
          ['<a href="https://echallan.tspolice.gov.in/publicview/" target="_blank" rel="noopener nofollow">तेलंगाना ई-चालान</a>', "User Feedback Form; Complaints → Fake Number Plate", "नाम, मोबाइल, कारण (Manual Error, Double Challan, Fake Vehicle, Theft Vehicle), OTP; फर्जी प्लेट में गाड़ी नंबर, नाम, पता, मोबाइल, OTP"],
          [ECHALLAN, "पोर्टल पर दिया शिकायत विकल्प (जहां उपलब्ध हो)", "चालान की जानकारी के साथ"],
          [VCOURTS, "Request to Contest (चालान कोर्ट में हो तो)", "OTP या इंजन/चेसिस नंबर; फिर कोर्ट का नाम और तारीख मिलती है"],
        ],
      },
      html: "<p>महाराष्ट्र पोर्टल पर चुने जा सकने वाले कारण: Fees Paid but Challan is Unpaid, Double Payment Done, Evidence not available, Duplicate Number plate, Multiple challans on same day same time, 2 Wheeler challan on 4 Wheeler, 4 Wheeler challan on 2 Wheeler, Number not visible, Violation not clear, Wrong Evidence और Other। राज्यवार पूरी प्रक्रिया: <a href=\"/challan/delhi-traffic-challan.html\">दिल्ली</a>, <a href=\"/challan/maharashtra-e-challan.html\">महाराष्ट्र</a>, <a href=\"/challan/telangana-e-challan.html\">तेलंगाना</a>।</p>",
    },
    {
      id: "owner-not-driving",
      title: "गाड़ी आप नहीं चला रहे थे तो",
      intro: "कैमरा चालान नियम 167A(7) के अनुसार <strong>गाड़ी के रजिस्टर्ड मालिक</strong> के नाम पर बनता है। नियम 167A(10) कहता है कि अगर अपराध के समय मालिक गाड़ी नहीं चला रहा था, तो वह पुलिस अधिकारी या राज्य के अधिकृत अधिकारी के सामने उचित सबूत देकर अपनी बेगुनाही का दावा कर सकता है, यानी यह दिखाकर कि वह ड्राइवर नहीं था या कोई और व्यक्ति गाड़ी चला रहा था।",
      callout: { kind: "info", html: "गाड़ी बेच दी है पर RC अब भी आपके नाम पर है, तो चालान आपके नाम पर आता रहेगा। ओनरशिप ट्रांसफर जल्द पूरा करवाएं। तेलंगाना ई-चालान पोर्टल पर \"Sold Out Vehicle\" का अलग टैब भी है।" },
    },
    {
      id: "court-rasta",
      title: "पोर्टल पर हल न हो तो: कोर्ट का रास्ता",
      steps: [
        "दिल्ली ट्रैफिक पुलिस के FAQ के अनुसार चालान अनुचित लगे तो आप ऑनलाइन शिकायत कर सकते हैं <strong>या अदालत में उसे चुनौती</strong> दे सकते हैं।",
        `चालान वर्चुअल कोर्ट में है तो ${VCOURTS} पर केस खोलें, <strong>\"I wish to contest the case\"</strong> चुनें, OTP से पुष्टि करें और Submit करें। अदालत का नाम और तारीख मिलेगी।`,
        "तारीख पर खुद या वकील के साथ जाएं और सबूत दिखाएं। अदालत का फैसला अंतिम होगा। (पूरी प्रक्रिया: <a href=\"/challan/virtual-court-challan.html\">वर्चुअल कोर्ट गाइड</a>)",
        "फर्जी नंबर प्लेट या चोरी हुई गाड़ी के मामले में नज़दीकी पुलिस स्टेशन में भी शिकायत करें और उसकी कॉपी शिकायत के साथ लगाएं।",
      ],
    },
    {
      id: "fraud",
      title: "फर्जी ई-चालान SMS और लिंक से सावधान",
      intro: "चालान के नाम पर नकली वेबसाइट, नकली ऐप (APK फाइल) और SMS/WhatsApp लिंक भेजकर पैसे और बैंक जानकारी चुराने के मामले होते हैं। तेलंगाना पुलिस अपने ई-चालान पोर्टल पर खुद चेतावनी देती है कि नकली वेबसाइट और ऐप से सावधान रहें, पोर्टल सिर्फ official वेबसाइट से खोलें, और पुलिस कभी कॉल, ई-मेल, मैसेज या लिंक से पासवर्ड, OTP या भुगतान की जानकारी नहीं मांगती।",
      list: [
        "पता बार में डोमेन जांचें: official पोर्टल <strong>.gov.in</strong> पर होते हैं (जैसे echallan.parivahan.gov.in, vcourts.gov.in)। मिलते-जुलते नाम वाले डोमेन से सावधान।",
        "चालान के SMS में आया लिंक खोलने की बजाय पोर्टल खुद टाइप करके खोलें और चालान नंबर से जांचें कि चालान सच में है।",
        "<strong>कभी भी .apk फाइल इंस्टॉल न करें।</strong> ऐप सिर्फ Google Play Store या Apple App Store से लें (I4C की सलाह)।",
        "OTP, UPI PIN, कार्ड का CVV या नेट बैंकिंग पासवर्ड किसी को न बताएं।",
        "तेलंगाना पुलिस के अनुसार उसके ई-चालान SMS सिर्फ \"ECHALN-*\" हेडर से आते हैं।",
        'धोखा हो गया हो तो तुरंत <a href="tel:1930">1930</a> पर कॉल करें या <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a> पर शिकायत करें, और अपने बैंक को बताएं।',
      ],
      callout: { kind: "warn", html: "कोई निजी वेबसाइट या ऐप (हमारी ₹49 रिपोर्ट सेवा समेत) सरकारी चालान \"माफ\" या \"कम\" नहीं कर सकती। चालान का पैसा सिर्फ official पोर्टल, अदालत या अधिकृत काउंटर पर ही भरें।" },
    },
  ],
  official: [
    { href: "https://traffic.delhipolice.gov.in/en/raise-complaint", title: "दिल्ली ट्रैफिक पुलिस: Raise Complaint" },
    { href: "https://mahatrafficechallan.gov.in/MH-Echallan-Grievance", title: "महाराष्ट्र ई-चालान grievance" },
    { href: "https://echallan.tspolice.gov.in/publicview/Complaint.jsp", title: "तेलंगाना: फर्जी नंबर प्लेट की शिकायत" },
    { href: "https://vcourts.gov.in/virtualcourt/", title: "वर्चुअल कोर्ट: Request to Contest" },
    { href: "https://echallan.parivahan.gov.in/", title: "ई-चालान पोर्टल (परिवहन मंत्रालय)" },
    { href: "https://cybercrime.gov.in/", title: "साइबर क्राइम शिकायत पोर्टल", note: "cybercrime.gov.in · हेल्पलाइन 1930" },
  ],
  faq: [
    { q: "गलत चालान की शिकायत कहां करें?", a: "उसी official पोर्टल पर जहां चालान दिख रहा है: दिल्ली में traffic.delhipolice.gov.in का Raise Complaint, महाराष्ट्र में mahatrafficechallan.gov.in का grievance पोर्टल, तेलंगाना में echallan.tspolice.gov.in की शिकायत सुविधा। कोर्ट वाला चालान vcourts.gov.in पर contest करें।" },
    { q: "क्या गलत चालान पहले भर दूं, फिर शिकायत करूं?", a: "नहीं। पहले शिकायत करें। महाराष्ट्र के grievance पोर्टल पर साफ लिखा है कि चालान भरा जा चुका हो तो grievance नहीं उठाई जा सकती।" },
    { q: "मेरी गाड़ी के नंबर से कोई और गाड़ी चल रही है, क्या करें?", a: "फोटो सबूत के साथ पोर्टल पर शिकायत करें (जैसे दिल्ली में Number is mine but not vehicle, महाराष्ट्र में Duplicate Number plate, तेलंगाना में Fake Number Plate) और नज़दीकी पुलिस स्टेशन में भी शिकायत दें।" },
    { q: "गाड़ी कोई और चला रहा था, फिर भी चालान मेरे नाम क्यों आया?", a: "CMVR नियम 167A के अनुसार कैमरा चालान रजिस्टर्ड मालिक के नाम बनता है। नियम 167A(10) के तहत आप पुलिस/अधिकृत अधिकारी के सामने सबूत देकर बता सकते हैं कि आप ड्राइवर नहीं थे।" },
    { q: "ई-चालान का SMS असली है या फर्जी, कैसे पहचानें?", a: "SMS के लिंक पर क्लिक न करें। echallan.parivahan.gov.in या अपने राज्य का .gov.in पोर्टल खुद खोलकर चालान नंबर से जांचें। APK फाइल कभी इंस्टॉल न करें। धोखा होने पर 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें।" },
    { q: "कैमरा चालान में फोटो साफ नहीं है तो?", a: "नियम 167A(6) के अनुसार चालान के साथ अपराध और नंबर प्लेट की साफ फोटो, माप, तारीख-समय-जगह और 65B प्रमाण पत्र होना चाहिए। सबूत अधूरा हो तो पोर्टल पर शिकायत करें या कोर्ट में contest करें।" },
  ],
  related: cards("status", "court", "delhi", "maharashtra", "tool", "mparivahan"),
  aside: [
    { href: "https://traffic.delhipolice.gov.in/en/raise-complaint", label: "🛑 दिल्ली: शिकायत दर्ज करें" },
    { href: "/services/rc-challan/", label: "🚗 ₹49 में चालान रिपोर्ट" },
  ],
};
