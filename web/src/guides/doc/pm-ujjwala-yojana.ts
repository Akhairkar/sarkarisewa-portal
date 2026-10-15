import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slugs "pmuy" /
// "pmuy2": Ministry of Petroleum & Natural Gas; launched May 2016; 8 crore
// connections by Sept 2019; Ujjwala 2.0 with migrant facility; Government
// cash assistance ₹1,600 (14.2 kg) / ₹1,150 (5 kg) covering deposit ₹1,250/
// ₹800, regulator ₹150, hose ₹100, DGCC ₹25, installation ₹75; first refill
// and stove free from OMCs; woman 18+, no LPG connection in household,
// eligible categories incl. SC/ST, PMAY-G, MBC, AAY, tea garden tribes,
// forest dwellers, island residents, SECC, 14-point declaration; apply online
// via pmuy.gov.in (Indane/Bharatgas/HP) or at distributor, KYC form,
// Annexure I for migrants); Cabinet Aug 2025 (pmindia.gov.in): ₹300 per
// 14.2 kg refill for up to 9 refills in FY 2025-26, pro-rata for 5 kg; June
// 2026 reports (The Week 9 Jun 2026, The Wire, Moneylife, Outlook Money):
// subsidised refills cut to 4 a year from FY 2026-27, ₹300 unchanged — the
// notification text itself was not seen, so it is attributed to reports.
// Retail prices change monthly and are not given.
export const pmUjjwalaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम उज्ज्वला योजना" },
  ],
  docHi: "पीएम उज्ज्वला योजना",
  title: "पीएम उज्ज्वला योजना 2026",
  description: "गरीब परिवारों की महिलाओं को बिना जमा राशि के मुफ्त एलपीजी गैस कनेक्शन, पहला रिफिल और चूल्हा। पात्रता, कागज़, ऑनलाइन आवेदन और ₹300 रिफिल सब्सिडी की ताज़ा स्थिति।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम उज्ज्वला योजना 2026: मुफ्त गैस कनेक्शन, पात्रता, आवेदन और ₹300 सब्सिडी",
  lead: "प्रधानमंत्री उज्ज्वला योजना (PMUY) पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय की योजना है, जिसमें गरीब परिवार की वयस्क महिला के नाम पर बिना जमा राशि (deposit-free) LPG कनेक्शन मिलता है, साथ में पहला रिफिल और चूल्हा भी मुफ्त। उज्ज्वला कनेक्शन वालों को हर 14.2 किलो रिफिल पर ₹300 की सब्सिडी बैंक खाते में मिलती है; जून 2026 की खबरों के अनुसार 2026-27 में यह सब्सिडी साल में 4 रिफिल तक सीमित कर दी गई है (2025-26 में 9 थी)।",
  facts: [
    ["कनेक्शन", "मुफ्त: जमा राशि, रेगुलेटर, पाइप, पहला रिफिल और चूल्हा"],
    ["रिफिल सब्सिडी", "₹300 प्रति 14.2 किलो सिलेंडर"],
    ["सब्सिडी वाले रिफिल", "2026-27: साल में 4 (खबरों के अनुसार); 2025-26: 9"],
    ["कौन आवेदन करे", "18+ उम्र की महिला, घर में पहले से LPG नहीं"],
  ],
  sections: [
    {
      id: "labh",
      title: "कनेक्शन में क्या-क्या मुफ्त मिलता है",
      intro: "केंद्र सरकार हर उज्ज्वला कनेक्शन के लिए ₹1,600 (14.2 किलो सिलेंडर) या ₹1,150 (5 किलो सिलेंडर) देती है, जिससे ये खर्च पूरे होते हैं:",
      table: {
        head: ["चीज़", "14.2 किलो", "5 किलो"],
        rows: [
          ["सिलेंडर की जमा राशि (security deposit)", "₹1,250", "₹800"],
          ["प्रेशर रेगुलेटर", "₹150", "₹150"],
          ["LPG पाइप (hose)", "₹100", "₹100"],
          ["घरेलू गैस उपभोक्ता कार्ड", "₹25", "₹25"],
          ["जांच/लगाने/डेमो का शुल्क", "₹75", "₹75"],
        ],
      },
      html: "<p>इसके अलावा तेल कंपनियां <strong>पहला रिफिल और चूल्हा (hotplate)</strong> भी मुफ्त देती हैं। कनेक्शन वितरक से कोई और शुल्क मांगा जाए तो लिखित रसीद मांगें और शिकायत करें।</p>",
    },
    {
      id: "subsidy",
      title: "रिफिल पर ₹300 सब्सिडी",
      list: [
        "उज्ज्वला लाभार्थी को हर 14.2 किलो रिफिल पर <strong>₹300</strong> की सब्सिडी सीधे बैंक खाते में (DBT) मिलती है; 5 किलो सिलेंडर पर अनुपात में।",
        "केंद्रीय मंत्रिमंडल ने <strong>2025-26</strong> के लिए साल में <strong>9 रिफिल</strong> तक यह सब्सिडी मंज़ूर की थी।",
        "जून 2026 की खबरों के अनुसार <strong>2026-27</strong> से सब्सिडी साल के <strong>पहले 4 रिफिल</strong> पर ही मिलेगी; ₹300 की राशि नहीं बदली।",
        "सिलेंडर की कीमत हर महीने बदल सकती है; ताज़ा कीमत अपने वितरक या तेल कंपनी के ऐप पर देखें।",
      ],
      callout: { kind: "info", html: 'सब्सिडी के लिए बैंक खाता आधार से जुड़ा होना चाहिए। सब्सिडी न आए तो हमारी <a href="/service/lpg-subsidy-pahal.html">LPG सब्सिडी (PAHAL)</a> गाइड देखें।' },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      intro: "आवेदक <strong>कम से कम 18 साल की महिला</strong> हो, उसके परिवार में पहले से कोई LPG कनेक्शन न हो, और परिवार इनमें से किसी श्रेणी में हो:",
      list: [
        "अनुसूचित जाति (SC) या अनुसूचित जनजाति (ST) परिवार",
        "प्रधानमंत्री आवास योजना (ग्रामीण) के लाभार्थी",
        "अंत्योदय अन्न योजना (AAY) राशन कार्ड वाले",
        "अति पिछड़ा वर्ग (Most Backward Classes)",
        "चाय बागान और पूर्व चाय बागान जनजाति, वनवासी, द्वीप/नदी द्वीप पर रहने वाले",
        "SECC 2011 सूची वाले परिवार",
        "कोई और गरीब परिवार, जो <strong>14-बिंदु घोषणा पत्र</strong> देकर अपनी गरीबी की स्थिति बताए",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "महिला का <strong>आधार कार्ड</strong> (पहचान और पते के प्रमाण के लिए)",
        "परिवार के सभी वयस्क सदस्यों के आधार",
        "<strong>राशन कार्ड</strong> (परिवार की जानकारी के लिए); प्रवासी परिवार राशन कार्ड न हो तो <strong>Annexure-I</strong> स्व-घोषणा दे सकते हैं",
        "बैंक खाता विवरण (IFSC सहित)",
        "पासपोर्ट साइज़ फोटो और KYC फॉर्म; जाति/श्रेणी का प्रमाण अगर उस श्रेणी से आवेदन कर रहे हैं",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<strong>ऑनलाइन:</strong> <a href="https://www.pmuy.gov.in/" target="_blank" rel="noopener nofollow">pmuy.gov.in</a> पर "Apply for New Ujjwala 2.0 Connection" चुनें, फिर तेल कंपनी (Indane, Bharatgas या HP Gas) चुनें।',
        "राज्य, ज़िला, पिन कोड और नज़दीकी वितरक चुनें; मोबाइल OTP से पंजीकरण करें।",
        "परिवार, पता, बैंक और सिलेंडर के प्रकार (14.2 या 5 किलो) की जानकारी भरें और सबमिट करें।",
        "संदर्भ संख्या (reference number) वाला फॉर्म प्रिंट करें और कागज़ों के साथ चुनी गई गैस एजेंसी पर जमा करें।",
        "<strong>ऑफलाइन:</strong> नज़दीकी LPG वितरक से KYC फॉर्म लेकर सीधे भी आवेदन कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "नए उज्ज्वला कनेक्शन सरकार की तय संख्या (allocation) के हिसाब से दिए जाते हैं। अपने इलाके में आवेदन चल रहा है या नहीं, वितरक से पूछें। कनेक्शन के नाम पर पैसे मांगने वाले बिचौलियों से बचें।" },
    },
    {
      id: "suraksha",
      title: "सुरक्षा और मदद",
      list: [
        "गैस रिसाव (leak) की आपात स्थिति में <strong>1906</strong> पर फोन करें।",
        "रिफिल की बुकिंग फोन, SMS, WhatsApp या तेल कंपनी के ऐप से होती है; देखें <a href=\"/service/lpg-cylinder-booking.html\">LPG सिलेंडर बुकिंग</a>।",
        "वितरक से शिकायत हल न हो तो तेल कंपनी की वेबसाइट या pmuy.gov.in पर दिए संपर्क से शिकायत करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.pmuy.gov.in/", title: "PMUY पोर्टल: नया कनेक्शन, फॉर्म और पात्रता" },
    { href: "https://www.myscheme.gov.in/schemes/pmuy2", title: "myScheme: प्रधानमंत्री उज्ज्वला योजना 2.0" },
    { href: "https://mopng.gov.in/", title: "पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय" },
  ],
  faq: [
    { q: "उज्ज्वला योजना में क्या मुफ्त मिलता है?", a: "बिना जमा राशि LPG कनेक्शन (सिलेंडर की जमा राशि, रेगुलेटर, पाइप, उपभोक्ता कार्ड, लगाने का शुल्क), साथ में पहला रिफिल और चूल्हा।" },
    { q: "उज्ज्वला सिलेंडर पर कितनी सब्सिडी मिलती है?", a: "₹300 प्रति 14.2 किलो रिफिल। 2025-26 में साल में 9 रिफिल पर मिलती थी; जून 2026 की खबरों के अनुसार 2026-27 में पहले 4 रिफिल पर।" },
    { q: "उज्ज्वला कनेक्शन किसके नाम पर मिलता है?", a: "परिवार की 18 साल या उससे ज़्यादा उम्र की महिला के नाम पर, जिसके परिवार में पहले से LPG कनेक्शन न हो।" },
    { q: "राशन कार्ड नहीं है तो क्या करें?", a: "प्रवासी परिवार राशन कार्ड की जगह परिवार और पते की स्व-घोषणा (Annexure-I) दे सकते हैं।" },
    { q: "उज्ज्वला का आवेदन कहां करें?", a: "pmuy.gov.in पर ऑनलाइन या नज़दीकी Indane, Bharatgas या HP Gas वितरक के पास।" },
  ],
  related: [
    { href: "/service/lpg-subsidy-pahal.html", emoji: "💰", title: "LPG सब्सिडी (PAHAL)", text: "सब्सिडी न आए तो क्या करें" },
    { href: "/service/lpg-cylinder-booking.html", emoji: "🔥", title: "LPG सिलेंडर बुकिंग", text: "फोन, SMS और ऐप से बुकिंग" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "उज्ज्वला आवेदन में ज़रूरी" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "सब्सिडी के लिए बैंक खाता" },
    { href: "/service/piped-natural-gas-connection.html", emoji: "🏙️", title: "PNG पाइप गैस कनेक्शन", text: "शहरों में पाइप से गैस" },
  ],
  aside: [
    { href: "https://www.pmuy.gov.in/", label: "🔥 उज्ज्वला आवेदन (pmuy.gov.in)" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
