import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Overlaps
// with /service/esic.html (web/src/guides/doc/esic.ts), so this post takes the
// "how it works in practice, from salary slip to dispensary" angle and links
// there. Facts reused from the verified esic.ts guide (15 Oct 2026): 0.75%
// employee / 3.25% employer since July 2019; ₹21,000 wage ceiling (₹25,000
// for persons with disability); ₹30,000 only under consideration (Aug 2026
// news); toll-free 1800-11-2526; e-Pehchan card via IP portal / UMANG.
// Benefit rules (checked 16 Oct 2026, secondary sources: patronaccounting.com
// ESI calculator March 2026, keka.com, godigit.com, deskera.com Form 9):
// sickness benefit 70% of average daily wages up to 91 days in two
// consecutive benefit periods, contributions for at least 78 days in the
// contribution period; maternity benefit 100% of average daily wages for
// 26 weeks. esic.gov.in could not be opened from here. Other cash benefit
// amounts and the unemployment allowance scheme status are left out.

export const esicExplainedHowEmployeesStateInsuranceActuallyWorksMsbuojv70: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "ESIC कैसे काम करता है" },
  ],
  docHi: "ESIC",
  title: "ESIC क्या है और यह असल में कैसे काम करता है",
  description: "ESIC योगदान दरों, कवरेज, और ज़रूरत पड़ने पर अपने लाभ का इस्तेमाल कैसे करें — इसकी सरल भाषा में पूरी जानकारी।",
  published: "2026-08-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "ESIC असल में कैसे काम करता है: सैलरी से कटौती से लेकर इलाज और छुट्टी के पैसे तक",
  lead: "ESIC (कर्मचारी राज्य बीमा निगम) कम वेतन वाले कर्मचारियों का सरकारी स्वास्थ्य बीमा और नकद सहायता की व्यवस्था है। जिनका वेतन <strong>₹21,000 महीना</strong> तक है (दिव्यांग के लिए ₹25,000), उनके वेतन से हर महीने <strong>0.75%</strong> कटता है और नियोक्ता <strong>3.25%</strong> जमा करता है। बदले में कर्मचारी और उसके परिवार को ESIC अस्पताल/डिस्पेंसरी में इलाज, और बीमारी या प्रसूति में छुट्टी के दौरान नकद पैसा मिलता है।",
  facts: [
    ["वेतन सीमा", "₹21,000 महीना (दिव्यांग: ₹25,000)"],
    ["कटौती", "कर्मचारी 0.75% + नियोक्ता 3.25%"],
    ["कार्ड", "ई-पहचान कार्ड (IP नंबर)"],
    ["टोल-फ्री", "1800-11-2526"],
  ],
  sections: [
    {
      id: "chain",
      title: "पूरा सिस्टम एक नज़र में",
      steps: [
        "<strong>नियोक्ता पंजीकरण करता है:</strong> नौकरी लगते ही HR आपका ESIC पंजीकरण करता है और 10 अंकों का <strong>बीमा नंबर (IP नंबर)</strong> बनता है।",
        "<strong>हर महीने अंशदान:</strong> सैलरी स्लिप में \"ESI\" के नाम से 0.75% कटता है; नियोक्ता अपनी तरफ से 3.25% जोड़कर ESIC में जमा करता है।",
        "<strong>ई-पहचान कार्ड:</strong> IP नंबर से ESIC पोर्टल या UMANG ऐप पर कार्ड डाउनलोड होता है; इसमें परिवार के सदस्य भी जुड़ते हैं।",
        "<strong>इलाज:</strong> कार्ड लेकर अपनी तय ESIC डिस्पेंसरी जाएं; ज़रूरत हो तो वहां से बड़े ESIC अस्पताल या जुड़े निजी अस्पताल में रेफर किया जाता है।",
        "<strong>नकद लाभ:</strong> बीमारी, प्रसूति या काम के दौरान चोट से छुट्टी पर ESIC डॉक्टर के प्रमाण पत्र के आधार पर पैसा सीधे आपके बैंक खाते में आता है।",
      ],
    },
    {
      id: "paisa",
      title: "कितना कटता है: एक उदाहरण",
      intro: "मान लीजिए आपका सकल वेतन ₹18,000 महीना है:",
      table: {
        head: ["कौन", "दर", "हर महीने"],
        rows: [
          ["आपके वेतन से", "0.75%", "₹135"],
          ["नियोक्ता की ओर से", "3.25%", "₹585"],
          ["कुल ESIC में", "4%", "₹720"],
        ],
      },
      callout: { kind: "info", html: "ESIC का पैसा PF की तरह आपके खाते में जमा होकर वापस नहीं मिलता। यह बीमा का प्रीमियम है; बदले में इलाज और नकद लाभ मिलते हैं।" },
    },
    {
      id: "labh",
      title: "छुट्टी में कितना पैसा मिलता है",
      table: {
        head: ["लाभ", "आम तौर पर क्या मिलता है", "शर्त"],
        rows: [
          ["बीमारी लाभ", "औसत दैनिक वेतन का लगभग <strong>70%</strong>, दो लगातार लाभ अवधियों में अधिकतम <strong>91 दिन</strong>", "संबंधित अंशदान अवधि में कम से कम 78 दिन का अंशदान; ESIC डॉक्टर का प्रमाण पत्र"],
          ["मातृत्व लाभ", "औसत दैनिक वेतन के बराबर (100%), <strong>26 हफ्ते</strong> तक", "महिला कर्मचारी; तय दिनों का अंशदान"],
          ["अपंगता / आश्रित लाभ", "काम के दौरान चोट से अपंगता पर, या मृत्यु पर आश्रितों को मासिक भुगतान", "चोट काम के दौरान लगी हो"],
          ["चिकित्सा लाभ", "आपका और परिवार का इलाज", "पंजीकरण और अंशदान चालू हो"],
        ],
      },
      callout: { kind: "warn", html: "ये दरें ESIC के नियमों पर आधारित हैं और शर्तें मामले के अनुसार बदलती हैं। दावा करने से पहले अपनी ESIC शाखा कार्यालय से पुष्टि करें।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["सैलरी से ESI कटता है पर कार्ड नहीं मिला", "HR से IP नंबर मांगें। न मिले तो सैलरी स्लिप लेकर ESIC शाखा कार्यालय जाएं।"],
          ["परिवार का नाम कार्ड में नहीं", "HR से परिवार का विवरण (आधार सहित) अपडेट करवाएं, फिर कार्ड दोबारा डाउनलोड करें।"],
          ["नौकरी बदली", "नए नियोक्ता को पुराना IP नंबर दें, ताकि नया नंबर न बने और अंशदान का रिकॉर्ड जुड़ा रहे।"],
          ["वेतन ₹21,000 से ऊपर हो गया", "अंशदान अवधि के बीच वेतन बढ़ने पर उस अवधि के अंत तक कवर रहता है; उसके बाद आम तौर पर कवरेज खत्म होता है। HR से पुष्टि करें।"],
          ["अस्पताल ने इलाज से मना किया", "ई-पहचान कार्ड और फोटो पहचान पत्र दिखाएं; टोल-फ्री 1800-11-2526 पर या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें।"],
        ],
      },
    },
    {
      id: "pf",
      title: "ESIC और PF में फर्क",
      list: [
        "<strong>ESIC:</strong> स्वास्थ्य बीमा और छुट्टी में नकद सहायता; जमा पैसा वापस नहीं मिलता।",
        "<strong>PF (EPFO):</strong> बचत और पेंशन; जमा पैसा ब्याज सहित आपका है। देखें: <a href=\"/service/epfo.html\">EPFO गाइड</a>।",
        "जिनका ESIC या PF कटता है, वे ई-श्रम में पंजीकरण के पात्र नहीं होते।",
      ],
      html: "<p>कवरेज, पंजीकरण और ई-पहचान कार्ड की पूरी जानकारी: <a href=\"/service/esic.html\">ESIC गाइड</a>।</p>",
    },
  ],
  official: [
    { href: "https://www.esic.gov.in/", title: "कर्मचारी राज्य बीमा निगम (ESIC)", note: "टोल-फ्री 1800-11-2526" },
    { href: "https://web.umang.gov.in/", title: "UMANG ऐप", note: "ई-पहचान कार्ड और अंशदान विवरण" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "ESIC में कितना पैसा कटता है?", a: "कर्मचारी के वेतन से 0.75% और नियोक्ता की ओर से 3.25%, कुल 4%। ये दरें जुलाई 2019 से लागू हैं।" },
    { q: "क्या ESIC का कटा पैसा वापस मिलता है?", a: "नहीं। यह बीमा का अंशदान है। इसके बदले इलाज और बीमारी/प्रसूति में नकद लाभ मिलते हैं। बचत वाला पैसा PF में जमा होता है।" },
    { q: "बीमार होकर छुट्टी पर रहने पर ESIC से कितना मिलता है?", a: "आम तौर पर औसत दैनिक वेतन का लगभग 70%, अधिकतम 91 दिन तक, अगर अंशदान की शर्त (कम से कम 78 दिन) पूरी है और ESIC डॉक्टर ने प्रमाण पत्र दिया है।" },
    { q: "क्या ESIC की वेतन सीमा ₹30,000 हो गई है?", a: "अक्टूबर 2026 तक नहीं। सीमा ₹21,000 है; ₹30,000 करने पर विचार की खबरें हैं, पर कोई अधिसूचना नहीं आई।" },
    { q: "ESIC कार्ड कहां से डाउनलोड करें?", a: "ESIC के बीमित व्यक्ति (IP) पोर्टल पर IP नंबर से या UMANG ऐप की ESIC सेवा से।" },
  ],
  related: [
    { href: "/service/esic.html", emoji: "🏥", title: "ESIC गाइड", text: "कवरेज, पंजीकरण, ई-पहचान कार्ड" },
    { href: "/service/epfo.html", emoji: "🏦", title: "EPFO / भविष्य निधि", text: "UAN, PF बैलेंस और क्लेम" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/e-shram-card.html", emoji: "👷", title: "ई-श्रम कार्ड", text: "असंगठित मज़दूरों के लिए" },
  ],
  aside: [
    { href: "/service/esic.html", label: "🏥 पूरी ESIC गाइड" },
    { href: "https://www.esic.gov.in/", label: "🌐 ESIC वेबसाइट" },
  ],
};
