import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; company sites blocked from the sandbox, search
// extracts used): pib.gov.in PRID 1668482 (IndianOil common all-India Indane
// refill booking number 7718955555, 24x7, from the registered mobile);
// hindustanpetroleum.com/pages/faq (HP Gas booking: WhatsApp "Book" to
// 92222 01122, missed call 94936 02222 from registered mobile, IVRS, SMS,
// myhpgas.in); myhpgas.in Emergency Service Numbers and iocl.com/help (1906 =
// 24x7 LPG leakage emergency helpline); Business Today 12.03.2026 (toll-free
// LPG complaint line 1800-2333-555, Bharatgas smartline 1800-22-4344).
// Bharatgas booking numbers and other unofficial numbers were left out.
export const lpgCylinderBooking: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "एलपीजी सिलेंडर बुकिंग" },
  ],
  docHi: "एलपीजी सिलेंडर बुकिंग",
  title: "एलपीजी सिलेंडर बुकिंग और रिफिल 2026",
  description: "अपने वितरक के ऐप, वेबसाइट, एसएमएस, या आईवीआर कॉल के माध्यम से अपने मौजूदा घरेलू एलपीजी गैस कनेक्शन के लिए रिफिल बुक करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "एलपीजी सिलेंडर बुकिंग 2026: इंडेन, HP गैस, भारतगैस में रिफिल कैसे बुक करें",
  lead: "घरेलू LPG सिलेंडर की रिफिल अपनी गैस कंपनी के फोन (IVRS), मिस्ड कॉल, WhatsApp, SMS, मोबाइल ऐप या वेबसाइट से बुक होती है। बुकिंग हमेशा उसी मोबाइल नंबर से करें जो आपके गैस कनेक्शन में दर्ज है। इंडेन का पूरे देश के लिए एक बुकिंग नंबर 7718955555 है; गैस रिसाव (लीकेज) पर 1906 पर कॉल करें।",
  facts: [
    ["इंडेन बुकिंग", "7718955555 (24x7)"],
    ["HP गैस", "WhatsApp 92222 01122, मिस्ड कॉल 94936 02222"],
    ["लीकेज इमरजेंसी", "1906 (24x7)"],
    ["शिकायत", "1800-2333-555 (टोल-फ्री)"],
  ],
  sections: [
    {
      id: "tarike",
      title: "कंपनी के हिसाब से बुकिंग के तरीके",
      table: {
        head: ["कंपनी", "बुकिंग का तरीका"],
        rows: [
          ["इंडेन (IndianOil)", "रजिस्टर्ड मोबाइल से <strong>7718955555</strong> पर कॉल (IVRS), भाषा चुनें और निर्देश मानें; IndianOil ऐप/वेबसाइट"],
          ["HP गैस (HPCL)", "WhatsApp पर <strong>92222 01122</strong> पर \"Book\" भेजें; या रजिस्टर्ड मोबाइल से <strong>94936 02222</strong> पर मिस्ड कॉल; myhpgas.in या ऐप"],
          ["भारतगैस (BPCL)", "कंपनी का ऐप/वेबसाइट या अपने वितरक का IVRS नंबर (सिलेंडर की रसीद/कार्ड पर लिखा होता है)"],
        ],
      },
      callout: { kind: "info", html: "आपके वितरक (डिस्ट्रीब्यूटर) की रसीद, गैस कार्ड या पासबुक पर उसका बुकिंग नंबर भी लिखा होता है। सोशल मीडिया या अनजान वेबसाइट पर मिले नंबरों पर भरोसा न करें।" },
    },
    {
      id: "kadam",
      title: "बुकिंग के आम कदम",
      steps: [
        "<strong>रजिस्टर्ड मोबाइल</strong> से कॉल/मैसेज करें। नंबर दर्ज नहीं है तो पहले वितरक के यहां जाकर मोबाइल नंबर जुड़वाएं।",
        "<strong>बुकिंग की पुष्टि:</strong> SMS में बुकिंग/ऑर्डर नंबर आता है; इसे संभालकर रखें।",
        "<strong>भुगतान:</strong> ऐप/वेबसाइट से ऑनलाइन, या डिलीवरी पर नकद/UPI।",
        "<strong>डिलीवरी:</strong> कई जगह डिलीवरी के समय SMS से आया कोड (DAC/OTP) डिलीवरी करने वाले को बताना होता है। कोड तभी बताएं जब सिलेंडर मिल जाए।",
        "<strong>सिलेंडर जांचें:</strong> सील सही हो, और चाहें तो डिलीवरी वाले से वज़न तुलवाएं।",
      ],
    },
    {
      id: "rate",
      title: "कीमत और सब्सिडी",
      list: [
        "रिफिल की कीमत तेल कंपनियां तय करती हैं और शहर के हिसाब से अलग होती है; बुकिंग SMS या कंपनी की वेबसाइट पर अपने शहर की कीमत देखें।",
        "उपभोक्ता बाज़ार कीमत देता है। जिन ग्राहकों को सब्सिडी मिलती है (जैसे <a href=\"/service/pm-ujjwala-yojana.html\">उज्ज्वला</a> लाभार्थी), उनकी सब्सिडी अलग से बैंक खाते में आती है। विवरण: <a href=\"/service/lpg-subsidy-pahal.html\">LPG सब्सिडी (PAHAL)</a>।",
        "डिलीवरी के लिए बिल से ज़्यादा पैसे मांगे जाएं तो वितरक या कंपनी से शिकायत करें।",
      ],
    },
    {
      id: "shikayat",
      title: "सिलेंडर न मिले तो शिकायत",
      steps: [
        "पहले अपने <strong>वितरक</strong> से बुकिंग नंबर बताकर बात करें।",
        "हल न हो तो कंपनी की ऐप/वेबसाइट पर शिकायत करें या टोल-फ्री <strong>1800-2333-555</strong> पर कॉल करें। भारतगैस ग्राहक 1800-22-4344 पर भी संपर्क कर सकते हैं।",
        "फिर भी हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS (pgportal.gov.in)</a> पर पेट्रोलियम मंत्रालय के लिए शिकायत दर्ज करें।",
      ],
      callout: { kind: "warn", html: "<strong>गैस की गंध आए तो:</strong> रेगुलेटर बंद करें, बिजली के स्विच न छुएं, आग/माचिस न जलाएं, खिड़की-दरवाज़े खोलें और <strong>1906</strong> पर कॉल करें। यह नंबर 24 घंटे चलता है।" },
    },
  ],
  official: [
    { href: "https://iocl.com/lpg-services", title: "IndianOil (इंडेन) LPG सेवाएं", note: "बुकिंग 7718955555" },
    { href: "https://www.hindustanpetroleum.com/pages/faq", title: "HP गैस: बुकिंग के तरीके (FAQ)" },
    { href: "https://myhpgas.in/myHPGas/HPGas/EmergencyServiceNumbers.aspx", title: "HP गैस: इमरजेंसी नंबर", note: "1906" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "इंडेन गैस बुकिंग नंबर क्या है?", a: "पूरे देश के लिए 7718955555 (24 घंटे)। रजिस्टर्ड मोबाइल नंबर से ही कॉल करें।" },
    { q: "HP गैस कैसे बुक करें?", a: "WhatsApp पर 92222 01122 पर \"Book\" लिखकर भेजें, या रजिस्टर्ड मोबाइल से 94936 02222 पर मिस्ड कॉल दें। myhpgas.in और ऐप से भी बुकिंग होती है।" },
    { q: "मोबाइल नंबर कनेक्शन में दर्ज नहीं है तो?", a: "अपने वितरक के कार्यालय में गैस कनेक्शन के कागज़ और पहचान पत्र लेकर नंबर जुड़वाएं। इसके बाद ही फोन/WhatsApp बुकिंग चलेगी।" },
    { q: "गैस लीक हो तो किस नंबर पर कॉल करें?", a: "1906, यह 24 घंटे चलने वाला LPG इमरजेंसी नंबर है। पहले रेगुलेटर बंद करें और बिजली के स्विच न छुएं।" },
    { q: "सिलेंडर कितने दिन में आता है?", a: "कोई एक तय राष्ट्रीय समय नहीं है; यह वितरक और इलाके पर निर्भर है। देर हो तो बुकिंग नंबर के साथ वितरक और फिर कंपनी से शिकायत करें।" },
  ],
  related: [
    { href: "/service/lpg-subsidy-pahal.html", emoji: "💰", title: "LPG सब्सिडी (PAHAL)", text: "सब्सिडी स्टेटस और आधार सीडिंग" },
    { href: "/service/pm-ujjwala-yojana.html", emoji: "🔥", title: "PM उज्ज्वला योजना", text: "गरीब परिवारों को गैस कनेक्शन" },
    { href: "/service/png-piped-gas-connection-apply.html", emoji: "🔧", title: "PNG पाइप गैस कनेक्शन", text: "पाइप से रसोई गैस" },
    { href: "/service/consumer-grievance-redressal.html", emoji: "📢", title: "उपभोक्ता शिकायत", text: "सेवा में कमी की शिकायत" },
  ],
  aside: [
    { href: "/service/lpg-subsidy-pahal.html", label: "💰 सब्सिडी स्टेटस" },
    { href: "https://pgportal.gov.in/", label: "📢 शिकायत (CPGRAMS)" },
  ],
};
