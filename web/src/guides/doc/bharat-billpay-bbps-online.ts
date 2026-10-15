import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): RBI (Bharat Bill Payment System) Directions,
// 2024 (issued 29 Feb 2024, effective 1 Apr 2024; NBBL is the authorised Payment
// System Provider; centralised complaint mechanism), as reported by Moneylife/
// DTNext; NBBL "Intimation of Rebranding and Change in Logo of BBPS" (BBPS renamed
// "Bharat Connect", announced 29 Aug 2024) and Bharat Connect overview deck
// (categories: electricity, LPG, water, municipal tax, piped gas, mobile, DTH,
// broadband, FASTag, NCMC, credit card, insurance, loan EMI, education fees, etc.)
// on bharat-connect.com; BBPS Procedural Guidelines v6 (Nov 2025).
// Biller/category counts left out (sources differ).
export const bharatBillpayBbpsOnline: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सेवाएं", href: "/services/" },
    { label: "भारत बिलपे (Bharat Connect)" },
  ],
  docHi: "भारत बिलपे (Bharat Connect)",
  title: "भारत बिलपे (Bharat BillPay / BBPS, अब Bharat Connect) से बिल भुगतान",
  description: "भारत बिलपे (BBPS), जिसका नया नाम Bharat Connect है: बिजली, पानी, गैस, FASTag, मोबाइल, नगर निगम टैक्स जैसे बिल किसी भी बैंक ऐप/UPI ऐप से कैसे भरें, रसीद और शिकायत कैसे करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "भारत बिलपे (BBPS / Bharat Connect): बिजली, पानी, गैस, FASTag के बिल ऑनलाइन कैसे भरें",
  lead: "भारत बिलपे (Bharat Bill Payment System, BBPS) बिल भुगतान का एक राष्ट्रीय नेटवर्क है, जिसे RBI की मंज़ूरी से NPCI Bharat BillPay Ltd (NBBL) चलाती है। अगस्त 2024 से इसका नाम <strong>Bharat Connect</strong> है। यह कोई अलग सरकारी वेबसाइट नहीं है: आप अपने बैंक के ऐप, नेट-बैंकिंग, UPI ऐप या एजेंट केंद्र पर Bharat Connect / BBPS का निशान देखकर बिजली, पानी, गैस, मोबाइल, FASTag जैसे बिल भर सकते हैं।",
  facts: [
    ["कौन चलाता है", "NPCI Bharat BillPay Ltd (NBBL)"],
    ["नियामक", "भारतीय रिज़र्व बैंक (RBI)"],
    ["नया नाम", "Bharat Connect (अगस्त 2024 से)"],
    ["कहां भुगतान करें", "बैंक ऐप, नेट-बैंकिंग, UPI ऐप, एजेंट/CSC केंद्र"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "भारत बिलपे / Bharat Connect क्या है",
      intro: "पहले हर कंपनी का बिल उसकी अपनी वेबसाइट या काउंटर पर भरना पड़ता था। BBPS ने हज़ारों बिलर (बिजली कंपनी, गैस एजेंसी, नगर निगम आदि) को एक नेटवर्क से जोड़ दिया, ताकि किसी भी जुड़े हुए बैंक या ऐप से भुगतान हो सके और तुरंत पक्की रसीद मिले। RBI के BBPS निर्देश, 2024 (1 अप्रैल 2024 से लागू) इसके नियम तय करते हैं।",
      list: [
        "<strong>एक जैसा तरीका:</strong> हर बिलर के लिए उपभोक्ता नंबर/ग्राहक ID डालें, बिल अपने आप दिख जाता है।",
        "<strong>तुरंत पुष्टि:</strong> भुगतान के बाद Bharat Connect / BBPS रेफरेंस नंबर वाली रसीद मिलती है।",
        "<strong>शिकायत का एक तरीका:</strong> भुगतान अटकने पर उसी रेफरेंस नंबर से शिकायत दर्ज होती है।",
      ],
    },
    {
      id: "kaun-se-bill",
      title: "कौन-कौन से बिल भर सकते हैं",
      table: {
        head: ["वर्ग", "उदाहरण"],
        rows: [
          ["घरेलू बिल", "बिजली, पानी, LPG सिलेंडर, पाइप वाली गैस, नगर निगम/हाउस टैक्स, सोसाइटी मेंटेनेंस"],
          ["मोबाइल और यात्रा", "मोबाइल पोस्टपेड/प्रीपेड, ब्रॉडबैंड, DTH, FASTag रिचार्ज, NCMC/मेट्रो कार्ड"],
          ["वित्तीय", "क्रेडिट कार्ड बिल, बीमा प्रीमियम, लोन की EMI, NPS"],
          ["अन्य", "स्कूल/कॉलेज फीस, केबल TV और दूसरे बिलर"],
        ],
      },
      html: "<p>कौन सा बिलर जुड़ा है, यह आपके ऐप की \"Bill Payments\" सूची में दिखता है। बिलर न दिखे तो उसकी अपनी वेबसाइट या काउंटर से भुगतान करें।</p>",
    },
    {
      id: "kaise-bhare",
      title: "बिल कैसे भरें",
      steps: [
        "अपने बैंक का मोबाइल ऐप/नेट-बैंकिंग या कोई UPI ऐप खोलें और <strong>Bill Payments / Recharge</strong> में जाएं। Bharat Connect या BBPS का लोगो देखें।",
        "बिल का वर्ग (जैसे बिजली) और अपना राज्य/बिलर (जैसे बिजली कंपनी का नाम) चुनें।",
        "बिल पर लिखा <strong>उपभोक्ता नंबर / CA नंबर / ग्राहक ID</strong> डालें। बकाया राशि और नाम दिख जाएगा, उसे मिला लें।",
        "UPI, डेबिट कार्ड, नेट-बैंकिंग या वॉलेट से भुगतान करें।",
        "रसीद और <strong>ट्रांज़ैक्शन रेफरेंस ID</strong> का स्क्रीनशॉट/SMS संभाल कर रखें।",
      ],
      callout: { kind: "info", html: "स्मार्टफोन नहीं है तो बैंक शाखा, Bharat Connect एजेंट या <a href=\"/tools/csc-locator.html\">CSC केंद्र</a> पर नकद देकर भी बिल भरा जा सकता है; वहां भी रसीद पर रेफरेंस नंबर होता है।" },
    },
    {
      id: "shikayat",
      title: "पैसा कट गया पर बिल जमा नहीं हुआ: शिकायत",
      steps: [
        "जिस ऐप/बैंक से भुगतान किया, उसी में <strong>Raise Complaint / Help</strong> में जाकर ट्रांज़ैक्शन रेफरेंस ID से शिकायत दर्ज करें और शिकायत नंबर लें।",
        "शिकायत Bharat Connect के केंद्रीय सिस्टम से बिलर तक जाती है; स्टेटस उसी शिकायत नंबर से देखें।",
        "तय समय में हल न हो या जवाब से संतुष्ट न हों तो RBI के <strong>एकीकृत लोकपाल</strong> को <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">cms.rbi.org.in</a> पर शिकायत करें।",
      ],
      callout: { kind: "warn", html: "बिल भुगतान के नाम पर आए <strong>अनजान लिंक या कॉल</strong> (जैसे \"आज रात बिजली कट जाएगी\") से भुगतान न करें। हमेशा अपने बैंक/भरोसेमंद ऐप के Bill Payments विकल्प से ही भरें।" },
    },
  ],
  official: [
    { href: "https://www.bharat-connect.com/", title: "Bharat Connect (पहले Bharat BillPay), NPCI Bharat BillPay Ltd" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत पोर्टल (एकीकृत लोकपाल)" },
  ],
  faq: [
    { q: "क्या भारत बिलपे कोई सरकारी वेबसाइट है जहां जाकर बिल भरें?", a: "नहीं। यह एक भुगतान नेटवर्क है, जिसे NPCI की कंपनी NBBL चलाती है। बिल अपने बैंक ऐप, नेट-बैंकिंग, UPI ऐप या एजेंट केंद्र से Bharat Connect/BBPS विकल्प में भरे जाते हैं।" },
    { q: "BBPS और Bharat Connect में क्या फर्क है?", a: "कोई फर्क नहीं। अगस्त 2024 में BBPS का नाम बदलकर Bharat Connect कर दिया गया। सेवा वही है।" },
    { q: "क्या BBPS से बिल भरने पर अतिरिक्त शुल्क लगता है?", a: "शुल्क ऐप, बैंक और बिलर पर निर्भर करता है। ज़्यादातर बिजली-पानी के बिलों पर UPI से शुल्क नहीं लगता, पर भुगतान से पहले स्क्रीन पर दिखाई गई राशि ज़रूर देखें।" },
    { q: "भुगतान हो गया पर बिल में नहीं दिख रहा, क्या करें?", a: "बिलर के रिकॉर्ड में अपडेट होने में थोड़ा समय लग सकता है। फिर भी न दिखे तो उसी ऐप में ट्रांज़ैक्शन रेफरेंस ID से शिकायत करें।" },
  ],
  related: [
    { href: "/service/electricity-connection-bill.html", emoji: "💡", title: "बिजली कनेक्शन और बिल", text: "नया कनेक्शन, बिल और शिकायत" },
    { href: "/service/water-supply-connection-bill.html", emoji: "🚰", title: "पानी कनेक्शन और बिल", text: "जल बोर्ड/नगर निगम" },
    { href: "/service/lpg-cylinder-booking.html", emoji: "🔥", title: "LPG सिलेंडर बुकिंग", text: "बुकिंग और भुगतान" },
    { href: "/service/fastag-registration.html", emoji: "🚗", title: "FASTag", text: "नया FASTag और रिचार्ज" },
    { href: "/service/upi-payments.html", emoji: "📲", title: "UPI भुगतान", text: "सुरक्षित ऑनलाइन लेन-देन" },
  ],
  aside: [
    { href: "https://www.bharat-connect.com/", label: "🔗 Bharat Connect वेबसाइट" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
