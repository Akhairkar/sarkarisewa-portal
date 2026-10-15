import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): pmindia.gov.in (Cabinet, 8 Aug 2025:
// continuation of targeted subsidy for PMUY consumers in FY 2025-26, ₹300 per
// 14.2 kg cylinder for up to 9 refills a year, pro-rated for 5 kg, ₹12,000
// crore); earlier history ₹200 from May 2022 and ₹300 from Oct 2023 for up to
// 12 refills (reports citing PIB). PAHAL (DBTL) nationwide from 1 Jan 2015
// (MoPNG/PIB, standard reference). Business Today 12.03.2026 (toll-free LPG
// helpline 1800-2333-555). A 2026-27 cabinet decision on the PMUY subsidy or
// refill cap could not be verified (one unofficial report claims 4 refills),
// so the 2026-27 number of subsidised refills is left out.
export const lpgSubsidyPahal: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "एलपीजी सब्सिडी (PAHAL)" },
  ],
  docHi: "एलपीजी सब्सिडी (PAHAL)",
  title: "एलपीजी सब्सिडी (PAHAL / DBTL) 2026",
  description: "आपकी पात्र एलपीजी सिलेंडर सब्सिडी सीधे आपके बैंक खाते में जमा करने वाली प्रत्यक्ष लाभ हस्तांतरण योजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "LPG सब्सिडी (PAHAL/DBTL) 2026: किसे मिलती है, कितनी, और न आए तो क्या करें",
  lead: "PAHAL (DBTL) योजना में घरेलू LPG सिलेंडर पूरी बाज़ार कीमत पर मिलता है और सरकार की सब्सिडी (अगर लागू हो) सीधे ग्राहक के बैंक खाते में आती है। अभी मुख्य रूप से प्रधानमंत्री उज्ज्वला योजना (PMUY) के लाभार्थियों को सब्सिडी मिलती है: 2025-26 में ₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक। दूसरे सामान्य ग्राहकों के खाते में सब्सिडी आम तौर पर नहीं या नाममात्र आती है।",
  facts: [
    ["योजना", "PAHAL (DBTL), पेट्रोलियम मंत्रालय"],
    ["उज्ज्वला सब्सिडी", "₹300 प्रति 14.2 किलो सिलेंडर"],
    ["2025-26 सीमा", "साल में 9 रिफिल तक"],
    ["हेल्पलाइन", "1800-2333-555 (टोल-फ्री)"],
  ],
  notice: "2026-27 के लिए उज्ज्वला सब्सिडी वाली रिफिल की संख्या पर हमें सरकारी अधिसूचना नहीं मिली। अपने वितरक या कंपनी के ऐप पर अपनी सब्सिडी की स्थिति देखें।",
  sections: [
    {
      id: "kaise",
      title: "PAHAL कैसे काम करता है",
      steps: [
        "ग्राहक सिलेंडर <strong>पूरी बाज़ार कीमत</strong> पर खरीदता है।",
        "अगर उस सिलेंडर पर सब्सिडी बनती है, तो तेल कंपनी उसे ग्राहक के <strong>आधार से जुड़े बैंक खाते</strong> (या कंपनी में दर्ज खाते) में भेजती है।",
        "सब्सिडी आने पर बैंक/कंपनी से SMS आता है; बैंक पासबुक में भी दिखता है।",
      ],
    },
    {
      id: "kise",
      title: "किसे कितनी सब्सिडी",
      table: {
        head: ["ग्राहक", "सब्सिडी"],
        rows: [
          ["उज्ज्वला (PMUY) लाभार्थी", "2025-26: ₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक (5 किलो सिलेंडर पर अनुपात में)"],
          ["सामान्य घरेलू ग्राहक", "बाज़ार कीमत; सब्सिडी आम तौर पर नहीं या नाममात्र"],
        ],
      },
      callout: { kind: "info", html: "उज्ज्वला सब्सिडी मई 2022 में ₹200 से शुरू हुई, अक्टूबर 2023 में ₹300 हुई (तब 12 रिफिल तक)। 2025-26 के लिए कैबिनेट ने ₹300 और 9 रिफिल तक मंज़ूर किए। राशि और सीमा सरकार हर साल तय करती है।" },
    },
    {
      id: "jaruri",
      title: "सब्सिडी पाने के लिए क्या ज़रूरी है",
      list: [
        "LPG कनेक्शन में आपका <strong>आधार</strong> और <strong>मोबाइल नंबर</strong> दर्ज हो",
        "बैंक खाता आधार से जुड़ा (Aadhaar seeded) हो और उसमें DBT चालू हो, या बैंक खाते का विवरण वितरक के पास दर्ज हो",
        "कनेक्शन की e-KYC (आधार सत्यापन) पूरी हो; कंपनियां समय-समय पर e-KYC करवाती हैं",
        "उज्ज्वला लाभार्थी अपनी तय सीमा के भीतर रिफिल लें",
      ],
    },
    {
      id: "status",
      title: "सब्सिडी स्टेटस कैसे देखें",
      steps: [
        "अपनी कंपनी (इंडेन, HP गैस, भारतगैस) का मोबाइल ऐप या वेबसाइट खोलें और रजिस्टर्ड मोबाइल/LPG ID से लॉग इन करें।",
        "\"Subsidy\" या \"PAHAL/DBTL status\" और रिफिल का इतिहास देखें।",
        "बैंक पासबुक या मिनी स्टेटमेंट में सब्सिडी की एंट्री मिलाएं।",
      ],
    },
    {
      id: "nahi-aayi",
      title: "सब्सिडी न आए तो",
      list: [
        "<strong>आधार सीडिंग जांचें:</strong> बैंक में आधार जुड़ा है या नहीं, और किस खाते में DBT आता है (कई खाते हों तो सबसे नया आधार-सीडेड खाता)।",
        "<strong>e-KYC करवाएं:</strong> वितरक के यहां या कंपनी के ऐप से।",
        "<strong>वितरक से बात करें</strong> और रिफिल का बुकिंग नंबर बताएं।",
        "<strong>शिकायत:</strong> टोल-फ्री 1800-2333-555, कंपनी की वेबसाइट, या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a>।",
      ],
      callout: { kind: "warn", html: "सामान्य ग्राहक के खाते में सब्सिडी न आना ज़्यादातर गलती नहीं है, क्योंकि अभी सब्सिडी मुख्य रूप से उज्ज्वला लाभार्थियों के लिए है।" },
    },
  ],
  official: [
    { href: "https://iocl.com/lpg-services", title: "IndianOil (इंडेन) LPG सेवाएं" },
    { href: "https://www.hindustanpetroleum.com/pages/faq", title: "HP गैस FAQ" },
    { href: "https://pmuy.gov.in/", title: "प्रधानमंत्री उज्ज्वला योजना (PMUY)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "LPG सब्सिडी कितनी मिलती है?", a: "उज्ज्वला लाभार्थियों को 2025-26 में ₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक। सामान्य ग्राहकों को आम तौर पर सब्सिडी नहीं या नाममात्र मिलती है।" },
    { q: "मेरी सब्सिडी शून्य क्यों आई?", a: "अगर आप उज्ज्वला लाभार्थी नहीं हैं तो मौजूदा नीति में यह सामान्य है। उज्ज्वला लाभार्थी हैं तो आधार सीडिंग, e-KYC और रिफिल की सीमा जांचें।" },
    { q: "सब्सिडी किस खाते में आती है?", a: "आम तौर पर आधार से जुड़े उस बैंक खाते में जिसमें DBT चालू है। खाता बदलना हो तो बैंक में आधार सीडिंग करवाएं।" },
    { q: "शिकायत कहां करें?", a: "पहले वितरक से, फिर टोल-फ्री 1800-2333-555 या कंपनी की वेबसाइट पर, और ज़रूरत हो तो CPGRAMS (pgportal.gov.in) पर।" },
  ],
  related: [
    { href: "/service/lpg-cylinder-booking.html", emoji: "🛢️", title: "LPG सिलेंडर बुकिंग", text: "इंडेन, HP, भारतगैस बुकिंग" },
    { href: "/service/pm-ujjwala-yojana.html", emoji: "🔥", title: "PM उज्ज्वला योजना", text: "मुफ्त कनेक्शन और सब्सिडी" },
    { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "आधार और बैंक लिंकिंग" },
    { href: "/service/png-piped-gas-connection-apply.html", emoji: "🔧", title: "PNG कनेक्शन", text: "पाइप से रसोई गैस" },
  ],
  aside: [
    { href: "/service/lpg-cylinder-booking.html", label: "🛢️ सिलेंडर बुकिंग" },
    { href: "https://pgportal.gov.in/", label: "📢 शिकायत (CPGRAMS)" },
  ],
};
