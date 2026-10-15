import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): consumerhelpline.gov.in (NCH 2.0 home page:
// toll-free 1915, 8 AM to 8 PM; WhatsApp +91 8800001915; Register / Track
// grievance, NCH app; link to e-Jagriti), e-jagriti.gov.in (live; Ministry of
// Consumer Affairs platform), IANS Dec 2025 / Drishti IAS (e-Jagriti launched
// 1 Jan 2025 by the Department of Consumer Affairs, merging OCMS, e-Daakhil,
// NCDRC CMS and CONFONET), Consumer Protection (Jurisdiction of the District,
// State and National Commission) Rules 2021 as reported by LiveLaw/Moneylife
// (District up to Rs 50 lakh, State Rs 50 lakh to Rs 2 crore, National above
// Rs 2 crore), Consumer Protection Act 2019 s.69 (2-year limitation) and s.34
// (file where complainant resides/works). Commission filing fee slabs were
// not verified and are left out. Old page's "ई-दाखिल" description updated.
export const consumerGrievanceRedressal: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सेवाएं", href: "/services/" },
    { label: "उपभोक्ता शिकायत" },
  ],
  docHi: "उपभोक्ता शिकायत",
  title: "उपभोक्ता शिकायत निवारण (राष्ट्रीय उपभोक्ता हेल्पलाइन)",
  description: "खराब सामान, सेवा में कमी या ठगी की शिकायत: राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 / WhatsApp और e-Jagriti पोर्टल पर उपभोक्ता आयोग में केस। तरीका, समय सीमा और किस आयोग में जाएं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "उपभोक्ता शिकायत कैसे करें: हेल्पलाइन 1915 और e-Jagriti पर उपभोक्ता आयोग में केस",
  lead: "खराब सामान, सेवा में कमी, रिफंड न मिलने या गलत बिलिंग की शिकायत पहले राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH) पर करें: टोल-फ्री 1915 (सुबह 8 से रात 8 बजे), WhatsApp 8800001915 या consumerhelpline.gov.in। हेल्पलाइन कंपनी से बात करके मामला सुलझाने की कोशिश करती है। हल न हो तो उपभोक्ता आयोग में केस e-Jagriti पोर्टल से ऑनलाइन दायर कर सकते हैं।",
  facts: [
    ["हेल्पलाइन", "<a href=\"tel:1915\">1915</a> (टोल-फ्री, सुबह 8 से रात 8)"],
    ["WhatsApp", "+91 8800001915"],
    ["आयोग में केस", "<a href=\"https://e-jagriti.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-Jagriti</a> (पहले e-Daakhil)"],
    ["समय सीमा", "शिकायत का कारण बनने के 2 साल के अंदर"],
  ],
  sections: [
    {
      id: "pehla-kadam",
      title: "पहला कदम: कंपनी से लिखित शिकायत",
      list: [
        "विक्रेता/कंपनी के कस्टमर केयर में शिकायत करें और <strong>शिकायत नंबर</strong> लें।",
        "बिल, वारंटी कार्ड, ऑर्डर ID, भुगतान का स्क्रीनशॉट, ईमेल/चैट और फोटो संभालकर रखें।",
        "जवाब न मिले या हल गलत लगे तो अगले कदम पर जाएं।",
      ],
    },
    {
      id: "nch",
      title: "राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH) पर शिकायत",
      steps: [
        "<strong>कॉल करें</strong> <a href=\"tel:1915\">1915</a> (सुबह 8 से रात 8 बजे), या <strong>WhatsApp</strong> करें +91 8800001915 पर।",
        '<strong>या ऑनलाइन:</strong> <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noopener nofollow">consumerhelpline.gov.in</a> पर "Register Grievance" में मोबाइल से रजिस्टर करें। NCH मोबाइल ऐप और UMANG ऐप से भी शिकायत होती है।',
        "<strong>विवरण भरें:</strong> कंपनी/सेक्टर, क्या खरीदा, कब, कितने का, क्या दिक्कत है और आप क्या चाहते हैं (रिफंड, बदलाव, मरम्मत)।",
        "<strong>कागज़ अपलोड करें</strong> (बिल, स्क्रीनशॉट) और डॉकेट/शिकायत नंबर नोट करें।",
        "\"Track Your Grievance\" में स्टेटस देखें। हेल्पलाइन शिकायत कंपनी को भेजती है और जवाब आप तक पहुंचाती है।",
      ],
      callout: { kind: "info", html: "NCH मुकदमे से पहले का (pre-litigation) रास्ता है। यह कंपनी को आदेश नहीं दे सकती। जुर्माना या मुआवज़ा चाहिए तो उपभोक्ता आयोग में केस करना होगा।" },
    },
    {
      id: "aayog",
      title: "उपभोक्ता आयोग में केस: कौन सा आयोग",
      intro: "किस आयोग में केस होगा, यह आपके चुकाए गए पैसे (सामान/सेवा की कीमत) से तय होता है (उपभोक्ता संरक्षण नियम, 2021):",
      table: {
        head: ["आयोग", "चुकाई गई कीमत"],
        rows: [
          ["ज़िला उपभोक्ता आयोग", "₹50 लाख तक"],
          ["राज्य उपभोक्ता आयोग", "₹50 लाख से ₹2 करोड़ तक"],
          ["राष्ट्रीय उपभोक्ता आयोग (NCDRC)", "₹2 करोड़ से ज़्यादा"],
        ],
      },
      list: [
        "शिकायत <strong>वहां भी कर सकते हैं जहां आप रहते या काम करते हैं</strong>; कंपनी के शहर जाना ज़रूरी नहीं।",
        "शिकायत <strong>2 साल के अंदर</strong> करनी होती है (जिस दिन से दिक्कत शुरू हुई)। देरी हो तो कारण बताकर माफी का आवेदन देना पड़ता है।",
        "वकील ज़रूरी नहीं है; उपभोक्ता खुद केस लड़ सकता है।",
      ],
    },
    {
      id: "e-jagriti",
      title: "e-Jagriti पर ऑनलाइन केस कैसे दायर करें",
      intro: "उपभोक्ता मामले विभाग ने 1 जनवरी 2025 को e-Jagriti शुरू किया, जिसमें पुराना e-Daakhil और आयोगों की केस प्रणाली जोड़ दी गई है।",
      steps: [
        '<a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener nofollow">e-jagriti.gov.in</a> खोलें और उपभोक्ता (Consumer) के रूप में रजिस्टर करें।',
        "<strong>शिकायत फॉर्म भरें:</strong> विपक्षी (कंपनी) का नाम-पता, घटना का विवरण, चुकाई गई कीमत और मांगी गई राहत (रिफंड, मुआवज़ा, खर्च)।",
        "<strong>कागज़ अपलोड करें:</strong> बिल, पत्राचार, NCH का डॉकेट नंबर (अगर हो), पहचान पत्र और शपथ पत्र।",
        "<strong>फीस भरें</strong> (आयोग के नियम अनुसार; पोर्टल पर राशि दिखती है) और सबमिट करें।",
        "आयोग शिकायत स्वीकार करने पर कंपनी को नोटिस भेजता है। सुनवाई की तारीख और आदेश पोर्टल पर दिखते हैं।",
      ],
    },
    {
      id: "dhokha",
      title: "किस मामले में कहां जाएं",
      list: [
        "<strong>ऑनलाइन पैसे की ठगी/फ्रॉड:</strong> उपभोक्ता हेल्पलाइन नहीं, तुरंत साइबर हेल्पलाइन <a href=\"tel:1930\">1930</a> या <a href=\"https://cybercrime.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cybercrime.gov.in</a>।",
        "<strong>बैंक/UPI/बीमा:</strong> पहले बैंक/बीमा कंपनी की शिकायत व्यवस्था, फिर RBI या बीमा लोकपाल।",
        "<strong>सरकारी विभाग की सेवा:</strong> <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> या राज्य की लोक शिकायत व्यवस्था।",
      ],
    },
  ],
  official: [
    { href: "https://consumerhelpline.gov.in/", title: "राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH)", note: "1915 (सुबह 8 से रात 8), WhatsApp +91 8800001915" },
    { href: "https://e-jagriti.gov.in/", title: "e-Jagriti: उपभोक्ता आयोग में ऑनलाइन केस" },
    { href: "https://cybercrime.gov.in/", title: "साइबर क्राइम पोर्टल", note: "पैसे की ठगी: 1930" },
  ],
  faq: [
    { q: "उपभोक्ता हेल्पलाइन का नंबर क्या है?", a: "टोल-फ्री 1915 (सुबह 8 से रात 8 बजे) और WhatsApp +91 8800001915। ऑनलाइन शिकायत consumerhelpline.gov.in या NCH ऐप से भी होती है।" },
    { q: "e-Daakhil बंद हो गया क्या?", a: "उपभोक्ता मामले विभाग ने 1 जनवरी 2025 को e-Jagriti शुरू किया और उसमें e-Daakhil समेत पुरानी केस प्रणालियां जोड़ दीं। अब उपभोक्ता आयोग में ऑनलाइन केस e-jagriti.gov.in पर दायर करें।" },
    { q: "उपभोक्ता आयोग में कितने समय तक केस कर सकते हैं?", a: "उपभोक्ता संरक्षण अधिनियम, 2019 के अनुसार शिकायत का कारण बनने के 2 साल के अंदर। देरी का ठोस कारण हो तो आयोग देरी माफ कर सकता है।" },
    { q: "₹1 लाख के फोन की शिकायत किस आयोग में होगी?", a: "ज़िला उपभोक्ता आयोग में, क्योंकि ₹50 लाख तक की कीमत वाले मामले ज़िला आयोग सुनता है। आप अपने रहने या काम की जगह के ज़िला आयोग में केस कर सकते हैं।" },
    { q: "क्या उपभोक्ता केस के लिए वकील ज़रूरी है?", a: "नहीं। उपभोक्ता खुद शिकायत दायर करके अपनी बात रख सकता है। मामला पेचीदा हो तो वकील की मदद ले सकते हैं।" },
  ],
  related: [
    { href: "/service/city-municipal-property-tax-receipt.html", emoji: "🏘️", title: "गृहकर भुगतान और रसीद", text: "नगर निगम की सेवा" },
    { href: "/service/credit-score-report.html", emoji: "📊", title: "मुफ्त क्रेडिट रिपोर्ट", text: "रिपोर्ट में गलती की शिकायत" },
    { href: "/tools/status-troubleshooter.html", emoji: "⚙️", title: "स्टेटस ट्रबलशूटर", text: "अटके आवेदन का हल" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन शिकायत में मदद" },
  ],
  aside: [
    { href: "https://consumerhelpline.gov.in/", label: "📞 शिकायत दर्ज करें (NCH)" },
    { href: "https://e-jagriti.gov.in/", label: "⚖️ e-Jagriti पर केस" },
  ],
};
