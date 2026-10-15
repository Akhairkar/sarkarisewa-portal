import type { DocGuide } from "./types";

// Sources (checked 13-15 Oct 2026; same research as
// dadra-nagar-haveli-daman-diu-income-certificate.ts):
// - ddd.gov.in/service/revenu-services/ (UT Administration of DNH & DD,
//   Revenue Department): Income Certificate, EWS Certificate and other revenue
//   services linked to https://sugam.dddgov.in/; Revenue Department, Daman,
//   phone 2230698.
// - dnh.gov.in/service/avanika-revenu/: Mamlatdar Office, Silvassa (DNH).
// - ddd.gov.in home page: link to pgportal.gov.in (CPGRAMS).
// Left out (not confirmable; sugam.dddgov.in could not be opened): fee, time
// limit, validity, document list. The old page's "e-District Daman & Diu
// Portal" and "शुल्क ₹20" could not be confirmed and were removed.
export const dnIncomeCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य", href: "/states/" },
    { label: "DNH & DD आय प्रमाण पत्र" },
  ],
  docHi: "आय प्रमाण पत्र",
  title: "Dadra & Nagar Haveli and Daman & Diu Income Certificate 2026: Apply Online",
  description: "दादरा और नगर हवेली एवं दमण और दीव आय प्रमाण पत्र 2026: राजस्व विभाग के SUGAM पोर्टल (sugam.dddgov.in) पर आवेदन, ज़रूरी कागज़, EWS प्रमाण पत्र और मदद कहां मिलेगी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दादरा और नगर हवेली एवं दमण और दीव आय प्रमाण पत्र 2026: SUGAM पोर्टल पर आवेदन",
  lead: "दादरा और नगर हवेली एवं दमण और दीव (DNH & DD) में आय प्रमाण पत्र राजस्व विभाग की सेवा है। प्रशासन की वेबसाइट (ddd.gov.in) पर राजस्व विभाग की सूची में Income Certificate और EWS Certificate के लिए आवेदन का रास्ता <strong>SUGAM पोर्टल (sugam.dddgov.in)</strong> बताया गया है। फीस, समय सीमा और कागज़ों की सूची आधिकारिक पेज पर नहीं है, इसलिए वे आवेदन के समय पोर्टल पर या मामलतदार कार्यालय से देखें।",
  facts: [
    ["पोर्टल", '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a>'],
    ["विभाग", "राजस्व विभाग, संघ प्रदेश प्रशासन"],
    ["ऑफलाइन मदद", "अपने ज़िले का मामलतदार कार्यालय"],
    ["EWS", "अलग सेवा: EWS Certificate"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी सबूत है। छात्रवृत्ति, फीस में छूट, सरकारी योजनाओं और कई आवेदनों में यह मांगा जाता है। छात्रवृत्ति जैसी योजनाओं में आम तौर पर राजस्व अधिकारी का जारी किया प्रमाण पत्र ही माना जाता है; नियोक्ता का लिखा पत्र या सादे कागज़ पर स्व-घोषणा नहीं चलती।",
      callout: { kind: "info", html: "EWS आरक्षण के लिए साधारण आय प्रमाण पत्र नहीं चलता। SUGAM पर उसके लिए अलग <strong>EWS Certificate</strong> सेवा है। OBC आरक्षण के लिए <strong>NCL (OBC Renewal)</strong> सेवा अलग है।" },
    },
    {
      id: "online",
      title: "SUGAM पोर्टल पर आवेदन",
      steps: [
        '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a> खोलें। यही लिंक संघ प्रदेश प्रशासन की वेबसाइट पर राजस्व विभाग की सेवाओं के सामने दिया गया है।',
        "अपना अकाउंट बनाकर लॉगिन करें।",
        "राजस्व विभाग की सेवाओं में <strong>Income Certificate</strong> चुनें।",
        "फॉर्म में परिवार के सदस्यों और उनकी आय का ब्योरा भरें, मांगे गए कागज़ अपलोड करें और फीस दिखे तो भरें।",
        "आवेदन जमा करके पावती/आवेदन संख्या संभाल कर रखें; इसी से आगे स्टेटस देखें।",
      ],
      html: "<p>SUGAM पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं। पोर्टल का पता प्रशासन की आधिकारिक वेबसाइट के राजस्व सेवा पेज से लिया गया है।</p>",
    },
    {
      id: "kagaz",
      title: "आम तौर पर कौन से कागज़ तैयार रखें",
      intro: "कागज़ों की आधिकारिक सूची SUGAM पर आवेदन फॉर्म में ही दिखती है। आय प्रमाण पत्र के लिए आम तौर पर ये चीज़ें काम आती हैं:",
      list: [
        "आवेदक की फोटो और पहचान पत्र (जैसे आधार)।",
        "राशन कार्ड या निवास का प्रमाण।",
        "आय का सबूत: नौकरी वालों के लिए वेतन पर्ची/वेतन प्रमाण पत्र या Form 16, व्यापार वालों के लिए आयकर रिटर्न।",
        "खेती या मज़दूरी की आय हो तो ज़मीन का रिकॉर्ड या आय बताने वाला शपथ-पत्र, अगर पोर्टल मांगे।",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। पोर्टल या मामलतदार कार्यालय जो कागज़ मांगे, वही मान्य है। शपथ-पत्र के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट</a>।" },
    },
    {
      id: "offline",
      title: "मामलतदार कार्यालय से मदद",
      intro: "ऑनलाइन फॉर्म भरने में दिक्कत हो तो अपने ज़िले (दमण, दीव या दादरा और नगर हवेली/सिलवासा) के <strong>मामलतदार कार्यालय</strong> या पास के कॉमन सर्विस सेंटर (CSC) से मदद लें। कई संस्थानों की सूचनाओं में दमण और दीव के लिए आय प्रमाण पत्र देने वाले अधिकारी के रूप में मामलतदार का नाम आता है, पर आपके आवेदन पर कौन अधिकारी हस्ताक्षर करेगा, यह पोर्टल पर देखें। CSC पर सेवा शुल्क लगे तो पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "फीस, समय सीमा, वैधता और स्टेटस",
      list: [
        "<strong>फीस और समय सीमा:</strong> राजस्व विभाग के आधिकारिक पेज पर इनका ब्योरा नहीं है। SUGAM पर आवेदन करते समय फीस दिखेगी; समय सीमा के लिए मामलतदार कार्यालय से पूछें।",
        "<strong>वैधता:</strong> आधिकारिक पेज पर वैधता अवधि नहीं लिखी। आय हर साल बदल सकती है, इसलिए छात्रवृत्ति या योजना के फॉर्म में जितना नया प्रमाण पत्र मांगा जाए, उसी हिसाब से नया बनवाएं।",
        "<strong>स्टेटस:</strong> SUGAM पर लॉगिन करके अपनी आवेदन संख्या से स्थिति देखें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का सबूत नहीं लगाया", "वेतन पर्ची, ITR या पोर्टल पर मांगा गया शपथ-पत्र लगाएं"],
          ["परिवार की आय अधूरी लिखी", "कमाने वाले सभी सदस्यों की आय सही-सही लिखें"],
          ["धुंधले स्कैन", "साफ, सीधे स्कैन छोटी फाइल में अपलोड करें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र लिया", "EWS के लिए अलग EWS Certificate सेवा चुनें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद और शिकायत",
      intro: "पहले अपने मामलतदार कार्यालय से संपर्क करें। प्रशासन की वेबसाइट के राजस्व विभाग पेज पर दमण के लिए फोन नंबर 2230698 दिया है। आवेदन बहुत दिन अटके तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pgportal.gov.in</a> (CPGRAMS) पर शिकायत कर सकते हैं, जिसका लिंक प्रशासन की वेबसाइट पर है।",
    },
  ],
  official: [
    { href: "https://sugam.dddgov.in/", title: "SUGAM पोर्टल (राजस्व विभाग की ऑनलाइन सेवाएं)" },
    { href: "https://ddd.gov.in/service/revenu-services/", title: "राजस्व विभाग की सेवाएं (ddd.gov.in)" },
    { href: "https://ddd.gov.in/", title: "संघ प्रदेश दादरा और नगर हवेली एवं दमण और दीव प्रशासन" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "DNH & DD में आय प्रमाण पत्र कहां से बनता है?", a: "संघ प्रदेश प्रशासन की वेबसाइट के अनुसार राजस्व विभाग की Income Certificate सेवा SUGAM पोर्टल (sugam.dddgov.in) पर है। मदद के लिए अपने ज़िले के मामलतदार कार्यालय जाएं।" },
    { q: "आय प्रमाण पत्र की फीस कितनी है?", a: "राजस्व विभाग के आधिकारिक पेज पर फीस नहीं लिखी है। SUGAM पर आवेदन के समय जो फीस दिखे, वही लागू है।" },
    { q: "आय प्रमाण पत्र कितने समय तक मान्य रहता है?", a: "आधिकारिक पेज पर वैधता नहीं लिखी। ज़्यादातर योजनाएं और छात्रवृत्ति ताज़ा प्रमाण पत्र मांगती हैं, इसलिए फॉर्म की शर्त देखकर नया बनवाएं।" },
    { q: "EWS के लिए कौन सा प्रमाण पत्र चाहिए?", a: "SUGAM पर अलग EWS Certificate सेवा है। साधारण आय प्रमाण पत्र EWS आरक्षण के लिए नहीं चलता।" },
  ],
  related: [
    { href: "/states/dadra-nagar-haveli-daman-diu-income-certificate.html", emoji: "🗺️", title: "DNH & DD आय प्रमाण पत्र (राज्य गाइड)", text: "राज्य सीरीज़ का पेज" },
    { href: "/states/dadra-nagar-haveli-daman-diu-caste-certificate.html", emoji: "📜", title: "DNH & DD जाति प्रमाण पत्र", text: "Caste, OBC और NCL" },
    { href: "/states/dadra-nagar-haveli-daman-diu-domicile-certificate.html", emoji: "🏠", title: "DNH & DD निवास प्रमाण पत्र", text: "Domicile Certificate" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  aside: [
    { href: "https://sugam.dddgov.in/", label: "📝 SUGAM पोर्टल पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
