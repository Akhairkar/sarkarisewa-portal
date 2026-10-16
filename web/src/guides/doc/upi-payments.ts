import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): search-result extracts of NPCI circulars as
// reported by Angel One / Organiser / Business Today (NPCI circular 29 Jul 2025:
// UPI P2P collect requests stopped from 1 Oct 2025, merchant collect continues;
// NPCI circular 7 Oct 2025: optional biometric (fingerprint/face) authentication
// alongside UPI PIN); Shriram Finance / Cashfree (NPCI general limit ₹1 lakh per
// transaction, banks may set lower; higher limits for some merchant categories
// from 15 Sep 2025). npci.org.in could not be opened from the sandbox; NPCI's
// helpline number and the exact 2026 category-wise limits were not confirmed,
// so they are left out. 1930 / cybercrime.gov.in is the national cyber fraud
// helpline (MHA I4C).
export const upiPayments: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "UPI पंजीकरण" },
  ],
  docHi: "यूपीआई (UPI) पंजीकरण",
  title: "यूपीआई (एकीकृत भुगतान इंटरफेस) पंजीकरण 2026",
  description: "NPCI की तत्काल, चौबीसों घंटे भुगतान प्रणाली जो मोबाइल ऐप और वर्चुअल भुगतान पते का उपयोग करके बैंक खातों के बीच धन हस्तांतरण की अनुमति देती है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "UPI कैसे शुरू करें 2026: बैंक खाता जोड़ना, UPI PIN, सीमा और पैसा अटकने पर शिकायत",
  lead: "UPI (Unified Payments Interface) नेशनल पेमेंट्स कॉर्पोरेशन ऑफ इंडिया (NPCI) की भुगतान प्रणाली है, जिससे मोबाइल ऐप के ज़रिए किसी भी समय एक बैंक खाते से दूसरे में तुरंत पैसा भेजा जा सकता है। शुरू करने के लिए बस ऐसा बैंक खाता चाहिए जिससे आपका मोबाइल नंबर जुड़ा हो, और डेबिट कार्ड या आधार OTP से UPI PIN बनाना होता है। आम लेन-देन पर ग्राहक से कोई शुल्क नहीं लगता।",
  facts: [
    ["कौन चलाता है", "NPCI (नेशनल पेमेंट्स कॉर्पोरेशन ऑफ इंडिया)"],
    ["ज़रूरी", "बैंक खाते से जुड़ा मोबाइल नंबर"],
    ["PIN बनाने के लिए", "डेबिट कार्ड या आधार OTP (बैंक के अनुसार)"],
    ["आम सीमा", "₹1 लाख प्रति लेन-देन (बैंक कम रख सकता है)"],
  ],
  sections: [
    {
      id: "shuru",
      title: "UPI कैसे शुरू करें",
      steps: [
        "अपने बैंक का ऐप या BHIM जैसा कोई UPI ऐप Play Store/App Store से डाउनलोड करें।",
        "ऐप उसी सिम से SMS भेजकर मोबाइल नंबर जांचता है, इसलिए <strong>बैंक में दर्ज मोबाइल नंबर वाली सिम</strong> उसी फोन में होनी चाहिए।",
        "बैंक चुनें; ऐप आपका खाता खुद खोज लेगा।",
        "<strong>UPI PIN बनाएं:</strong> डेबिट कार्ड के आखिरी 6 अंक और समाप्ति तिथि डालें, या जहां बैंक देता है वहां आधार OTP का विकल्प चुनें।",
        "अब आपकी UPI ID (जैसे नाम@बैंक) बन जाती है; QR कोड स्कैन करके या मोबाइल नंबर/UPI ID से भुगतान करें।",
      ],
      callout: { kind: "warn", html: "UPI PIN सिर्फ <strong>पैसा भेजते समय</strong> डाला जाता है। पैसा लेने के लिए कभी PIN डालने की ज़रूरत नहीं होती। कोई पैसा भेजने के बहाने PIN मांगे तो वह धोखा है।" },
    },
    {
      id: "badlav",
      title: "हाल के ज़रूरी बदलाव",
      list: [
        "<strong>1 अक्टूबर 2025 से</strong> एक व्यक्ति से दूसरे व्यक्ति को \"पैसे मांगने\" वाली collect request बंद कर दी गई है। दुकानों/कंपनियों की collect request चलती रहती है। अब कोई अनजान व्यक्ति पैसे की रिक्वेस्ट भेजे तो सावधान रहें।",
        "<strong>फिंगरप्रिंट/चेहरे से भुगतान:</strong> NPCI के अक्टूबर 2025 के निर्देश के बाद कुछ ऐप में PIN की जगह बायोमेट्रिक से छोटे भुगतान का विकल्प है। यह वैकल्पिक है; PIN वाला तरीका चलता रहता है।",
        "<strong>सीमा:</strong> आम तौर पर ₹1 लाख प्रति लेन-देन, पर आपका बैंक इससे कम सीमा रख सकता है। टैक्स, बीमा, निवेश जैसी कुछ श्रेणियों के व्यापारी भुगतान में ज़्यादा सीमा है। अपनी सीमा बैंक ऐप में देखें।",
      ],
    },
    {
      id: "atka",
      title: "पैसा कट गया पर पहुंचा नहीं",
      steps: [
        "घबराएं नहीं; अक्सर ऐसा पैसा अपने आप कुछ समय में खाते में वापस आ जाता है।",
        "ऐप में उस लेन-देन पर जाकर \"Raise complaint / Help\" से शिकायत करें। UPI Reference Number (UTR) नोट करें।",
        "हल न हो तो अपने बैंक की शिकायत व्यवस्था में लिखित शिकायत दें।",
        "बैंक 30 दिन में जवाब न दे या जवाब से संतुष्ट न हों तो RBI की लोकपाल व्यवस्था <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">cms.rbi.org.in</a> पर शिकायत करें।",
      ],
      callout: { kind: "warn", html: "UPI से धोखाधड़ी हो जाए तो तुरंत <strong>1930</strong> पर कॉल करें या <a href=\"https://cybercrime.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cybercrime.gov.in</a> पर शिकायत करें और बैंक को भी बताएं। जितनी जल्दी शिकायत, पैसा रुकने की उतनी संभावना।" },
    },
    {
      id: "suraksha",
      title: "सुरक्षा के आसान नियम",
      list: [
        "UPI PIN, OTP या डेबिट कार्ड की जानकारी किसी को न बताएं; बैंक कभी नहीं मांगता।",
        "\"कस्टमर केयर\" का नंबर गूगल पर ढूंढकर कॉल न करें; नंबर अपने बैंक के ऐप या पासबुक से लें।",
        "किसी के कहने पर स्क्रीन शेयर करने वाला ऐप इंस्टॉल न करें।",
        "भुगतान से पहले स्क्रीन पर पाने वाले का नाम ज़रूर पढ़ें।",
        "फोन खो जाए तो बैंक से UPI तुरंत बंद करवाएं और सिम ब्लॉक करवाएं।",
      ],
    },
  ],
  official: [
    { href: "https://www.npci.org.in/", title: "NPCI (UPI की आधिकारिक जानकारी)" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (लोकपाल)" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "हेल्पलाइन 1930" },
  ],
  faq: [
    { q: "UPI शुरू करने के लिए क्या चाहिए?", a: "एक बैंक खाता, उससे जुड़ा मोबाइल नंबर (सिम उसी फोन में) और UPI PIN बनाने के लिए डेबिट कार्ड या आधार OTP (जहां बैंक यह सुविधा देता है)।" },
    { q: "क्या UPI पर पैसा भेजने का शुल्क लगता है?", a: "आम लोगों के बैंक खाते से होने वाले सामान्य UPI भुगतान पर ग्राहक से शुल्क नहीं लिया जाता।" },
    { q: "UPI से एक बार में कितना भेज सकते हैं?", a: "आम तौर पर ₹1 लाख प्रति लेन-देन तक; आपका बैंक कम सीमा रख सकता है। कुछ व्यापारी श्रेणियों (जैसे टैक्स, बीमा, निवेश) में सीमा ज़्यादा है।" },
    { q: "क्या अब कोई मुझे UPI पर पैसे की रिक्वेस्ट भेज सकता है?", a: "1 अक्टूबर 2025 से व्यक्ति-से-व्यक्ति collect request बंद है। केवल दुकानें/कंपनियां ही भुगतान की रिक्वेस्ट भेज सकती हैं। किसी अनजान रिक्वेस्ट को मंज़ूर न करें।" },
    { q: "गलत खाते में पैसा चला गया तो?", a: "ऐप में शिकायत करें और अपने बैंक को लिखित में बताएं। धोखाधड़ी हो तो 1930 पर कॉल करें। हल न हो तो RBI लोकपाल (cms.rbi.org.in) पर शिकायत कर सकते हैं।" },
  ],
  related: [
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "ज़ीरो बैलेंस बैंक खाता" },
    { href: "/service/bharat-billpay-bbps-online.html", emoji: "🧾", title: "भारत बिलपे (BBPS)", text: "बिजली-पानी के बिल ऑनलाइन" },
    { href: "/service/sanchar-saathi.html", emoji: "📱", title: "संचार साथी", text: "खोया फोन ब्लॉक करें" },
    { href: "/service/credit-score-report.html", emoji: "📊", title: "क्रेडिट स्कोर", text: "मुफ्त क्रेडिट रिपोर्ट" },
    { href: "/service/consumer-grievance-redressal.html", emoji: "📣", title: "उपभोक्ता शिकायत", text: "शिकायत कहां करें" },
  ],
  aside: [
    { href: "https://cybercrime.gov.in/", label: "🚨 साइबर धोखाधड़ी शिकायत (1930)" },
    { href: "https://cms.rbi.org.in/", label: "🏛️ RBI लोकपाल शिकायत" },
  ],
};
