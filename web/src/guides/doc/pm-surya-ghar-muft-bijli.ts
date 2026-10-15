import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slug "pmsgmb":
// Ministry of New and Renewable Energy; launched 15 Feb 2024; target 1 crore
// households; subsidy table 0-150 units 1-2 kW ₹30,000-₹60,000, 150-300 units
// 2-3 kW ₹60,000-₹78,000, >300 units above 3 kW ₹78,000; eligibility: Indian
// citizen, own house with suitable roof, valid electricity connection, no other
// solar subsidy; process on pmsuryaghar.gov.in: register with state, DISCOM,
// consumer number, mobile; feasibility by DISCOM; install via registered
// vendor; net meter; commissioning certificate; grievance link); the site's
// own /solar/ cluster (checked 6 Oct 2026: ₹30,000/kW up to 2 kW + ₹18,000 for
// 3rd kW, special-category states up to ₹85,800, DBT after commissioning,
// collateral-free loans via Jan Samarth); Rajya Sabha reply reported Aug 2026
// (Swarajya: 41.9 lakh systems, 50.4 lakh households by 5 Aug 2026); target 1
// crore households by FY 2026-27. The outlay figure and helpline number were
// not confirmed officially, so they are left out.
export const pmSuryaGharMuftBijli: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम सूर्य घर मुफ्त बिजली योजना" },
  ],
  docHi: "पीएम सूर्य घर मुफ्त बिजली योजना",
  title: "पीएम सूर्य घर मुफ्त बिजली योजना (PM Surya Ghar)",
  description: "छत पर सोलर पैनल लगाने हेतु ₹78,000 तक की सब्सिडी और हर महीने 300 यूनिट तक मुफ्त बिजली का लक्ष्य। पात्रता, सब्सिडी तालिका, pmsuryaghar.gov.in पर आवेदन के स्टेप।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम सूर्य घर मुफ्त बिजली योजना 2026: छत पर सोलर, ₹78,000 तक सब्सिडी, आवेदन कैसे करें",
  lead: "पीएम सूर्य घर: मुफ्त बिजली योजना नवीन एवं नवीकरणीय ऊर्जा मंत्रालय (MNRE) की योजना है, जिसमें घर की छत पर सोलर (rooftop solar) लगवाने पर केंद्र सरकार सब्सिडी देती है: 1 kW पर ₹30,000, 2 kW पर ₹60,000 और 3 kW या ज़्यादा पर अधिकतम ₹78,000। मकसद है कि परिवार अपनी छत की बिजली से हर महीने 300 यूनिट तक की ज़रूरत पूरी करें। आवेदन pmsuryaghar.gov.in पर होता है और सब्सिडी सोलर चालू होने व जांच के बाद सीधे बैंक खाते में आती है।",
  facts: [
    ["अधिकतम सब्सिडी", "₹78,000 (3 kW या ज़्यादा)"],
    ["कौन पात्र", "अपना घर, उपयुक्त छत और घरेलू बिजली कनेक्शन"],
    ["आवेदन", "pmsuryaghar.gov.in (ऑनलाइन)"],
    ["सोलर कौन लगाएगा", "सिर्फ DISCOM में पंजीकृत वेंडर"],
  ],
  sections: [
    {
      id: "subsidy",
      title: "कितनी सब्सिडी मिलती है",
      table: {
        head: ["औसत मासिक बिजली खपत", "उपयुक्त सोलर क्षमता", "केंद्र की सब्सिडी"],
        rows: [
          ["0-150 यूनिट", "1-2 kW", "₹30,000 से ₹60,000"],
          ["150-300 यूनिट", "2-3 kW", "₹60,000 से ₹78,000"],
          ["300 यूनिट से ज़्यादा", "3 kW से ऊपर", "₹78,000 (अधिकतम)"],
        ],
      },
      html: '<p>हिसाब: पहले 2 kW पर ₹30,000 प्रति kW और तीसरे kW पर ₹18,000; 3 kW से ज़्यादा लगाने पर भी सब्सिडी ₹78,000 ही रहती है। पूर्वोत्तर, पहाड़ी राज्य और द्वीप जैसे विशेष श्रेणी वाले इलाकों में यह राशि ज़्यादा (अधिकतम ₹85,800) है। अपनी क्षमता पर सब्सिडी जानने के लिए हमारा <a href="/solar/pm-surya-ghar-subsidy-calculator.html">सब्सिडी कैलकुलेटर</a> देखें।</p>',
      callout: { kind: "info", html: "\"मुफ्त बिजली\" का मतलब है कि छत का सोलर आपकी बिजली बनाता है, जिससे बिल घटता है। सरकार अलग से 300 यूनिट मुफ्त नहीं देती; कितनी बचत होगी यह सोलर की क्षमता और आपकी खपत पर निर्भर है।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "भारतीय नागरिक परिवार।",
        "<strong>अपना घर</strong>, जिसकी छत सोलर पैनल लगाने लायक हो।",
        "घर का <strong>वैध घरेलू बिजली कनेक्शन</strong> (बिजली बिल उसी नाम से)।",
        "परिवार ने पहले सोलर पैनल के लिए कोई दूसरी सरकारी सब्सिडी न ली हो।",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noopener nofollow">pmsuryaghar.gov.in</a> पर राज्य, बिजली कंपनी (DISCOM), बिजली उपभोक्ता संख्या, मोबाइल और ईमेल से पंजीकरण करें।',
        "उपभोक्ता संख्या और मोबाइल से लॉगिन करके रूफटॉप सोलर का फॉर्म भरें।",
        "DISCOM से <strong>तकनीकी मंज़ूरी (feasibility approval)</strong> का इंतज़ार करें।",
        "मंज़ूरी के बाद DISCOM में <strong>पंजीकृत वेंडर</strong> से सोलर लगवाएं।",
        "सोलर लगने के बाद पोर्टल पर प्लांट का विवरण भरें और <strong>नेट मीटर</strong> के लिए आवेदन करें।",
        "DISCOM नेट मीटर लगाकर जांच करता है और पोर्टल पर <strong>commissioning certificate</strong> बनता है।",
        "इसके बाद बैंक खाते का विवरण और कैंसिल चेक जमा करें; सब्सिडी सीधे खाते में आती है।",
      ],
      callout: { kind: "ok", html: 'पूरी प्रक्रिया के लिए हमारी <a href="/solar/pm-surya-ghar-online-apply.html">ऑनलाइन आवेदन गाइड</a> और <a href="/solar/pm-surya-ghar-eligibility-documents.html">पात्रता व कागज़</a> वाला पेज देखें।' },
    },
    {
      id: "loan",
      title: "पैसे की कमी हो तो लोन",
      list: [
        "सब्सिडी सोलर चालू होने के बाद आती है, इसलिए पूरा खर्च पहले देना होता है।",
        "सरकारी बैंक जन समर्थ पोर्टल के ज़रिए रूफटॉप सोलर के लिए बिना गारंटी वाला लोन देते हैं; ब्याज दर और शर्तें अपने बैंक से पूछें।",
        'विस्तार से: <a href="/solar/pm-surya-ghar-solar-loan.html">सोलर लोन गाइड</a>।',
      ],
    },
    {
      id: "pragati",
      title: "योजना की प्रगति",
      list: [
        "योजना 15 फरवरी 2024 को शुरू हुई। लक्ष्य वित्त वर्ष 2026-27 तक <strong>1 करोड़ घरों</strong> पर रूफटॉप सोलर है।",
        "राज्यसभा में दिए गए जवाब के अनुसार 5 अगस्त 2026 तक लगभग 41.9 लाख रूफटॉप सोलर सिस्टम लग चुके थे, जिनसे करीब 50.4 लाख घरों को लाभ मिला।",
      ],
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "सिर्फ पोर्टल पर दिखने वाले DISCOM-पंजीकृत वेंडर से ही सोलर लगवाएं, वरना सब्सिडी नहीं मिलेगी।",
        "पैनल और इन्वर्टर की वारंटी, रखरखाव की अवधि और कुल कीमत लिखित में लें।",
        "\"सब्सिडी पास कराने\" के नाम पर पैसे मांगने वाली कॉल/वेबसाइट से बचें। शिकायत पोर्टल के ग्रिवांस सेक्शन में दर्ज करें।",
      ],
    },
  ],
  official: [
    { href: "https://pmsuryaghar.gov.in/", title: "PM सूर्य घर पोर्टल: पंजीकरण, वेंडर सूची, शिकायत" },
    { href: "https://www.myscheme.gov.in/schemes/pmsgmb", title: "myScheme: PM सूर्य घर मुफ्त बिजली योजना" },
    { href: "https://mnre.gov.in/", title: "नवीन एवं नवीकरणीय ऊर्जा मंत्रालय" },
  ],
  faq: [
    { q: "पीएम सूर्य घर योजना में कितनी सब्सिडी मिलती है?", a: "1 kW पर ₹30,000, 2 kW पर ₹60,000 और 3 kW या ज़्यादा पर अधिकतम ₹78,000। विशेष श्रेणी वाले राज्यों में अधिकतम ₹85,800।" },
    { q: "क्या सच में 300 यूनिट बिजली मुफ्त मिलती है?", a: "सरकार अलग से मुफ्त यूनिट नहीं देती। छत पर लगा सोलर आपकी बिजली बनाता है, जिससे लगभग 300 यूनिट तक की मासिक ज़रूरत पूरी हो सकती है और बिल घटता है।" },
    { q: "किराये के घर में रहने वाले आवेदन कर सकते हैं?", a: "योजना उन परिवारों के लिए है जिनका अपना घर और छत है, और बिजली कनेक्शन उनके नाम है।" },
    { q: "सब्सिडी कब मिलती है?", a: "सोलर लगने, नेट मीटर लगने और DISCOM की जांच के बाद commissioning certificate बनता है; फिर बैंक विवरण जमा करने पर सब्सिडी सीधे खाते में आती है।" },
    { q: "आवेदन कहां करें?", a: "pmsuryaghar.gov.in पर ऑनलाइन, अपनी बिजली उपभोक्ता संख्या और मोबाइल नंबर से।" },
  ],
  related: [
    { href: "/solar/", emoji: "☀️", title: "पीएम सूर्य घर पूरी गाइड", text: "सब्सिडी, आवेदन, लोन, वेंडर" },
    { href: "/solar/pm-surya-ghar-subsidy-calculator.html", emoji: "🧮", title: "सब्सिडी कैलकुलेटर", text: "1, 2, 3 kW पर कितनी सब्सिडी" },
    { href: "/solar/pm-surya-ghar-subsidy-status.html", emoji: "⏳", title: "सब्सिडी स्टेटस", text: "सब्सिडी नहीं आई तो क्या करें" },
    { href: "/service/pm-kusam-solar-pump-apply.html", emoji: "🚜", title: "पीएम कुसुम सोलर पंप", text: "किसानों के लिए सोलर पंप" },
    { href: "/service/saubhagya-free-electricity-connection.html", emoji: "💡", title: "बिजली कनेक्शन", text: "नया घरेलू कनेक्शन" },
  ],
  aside: [
    { href: "https://pmsuryaghar.gov.in/", label: "☀️ pmsuryaghar.gov.in पर आवेदन" },
    { href: "/solar/pm-surya-ghar-subsidy-calculator.html", label: "🧮 सब्सिडी कैलकुलेटर" },
  ],
};
