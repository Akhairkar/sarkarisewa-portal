import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Meghalaya government sites not reachable from
// the sandbox, search-result extracts used): EastMojo 25.08.2022 (state
// agreement with insurer for MHIS-PMJAY; Phase 5 cover raised from Rs 5 lakh
// to Rs 5.30 lakh), Reliance General Insurance press release (MHIS-PMJAY
// Phase 6, Rs 5,30,000 family floater cover for over 7 lakh families),
// medicaldialogues.in / Assam Tribune (MHIS converged with AB-PMJAY from
// Phase IV in 2018), CAG audit report 2022 social sector chapter and IIPH
// Shillong / DHR report (MHIS started 2012; free cover for all residents
// except State and Central government employees), EastMojo 11.09.2024 (claim
// delays). Enrolment fee (sources disagree), the current phase end date and
// any Phase 7 changes were not confirmed officially and are left out.
export const meghalayaMhisScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मेघालय", href: "/states/meghalaya.html" },
    { label: "MHIS योजना" },
  ],
  docHi: "MHIS योजना",
  title: "MHIS Scheme",
  description: "मेघालय की मेघा स्वास्थ्य बीमा योजना (MHIS): PM-JAY के साथ जुड़ी, परिवार को सूचीबद्ध अस्पतालों में ₹5.30 लाख तक कैशलेस इलाज। कौन पात्र, कार्ड कैसे बनवाएं, अस्पताल में क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मेघा स्वास्थ्य बीमा योजना (MHIS), मेघालय: ₹5.30 लाख तक कैशलेस इलाज, पात्रता और कार्ड",
  lead: "मेघा स्वास्थ्य बीमा योजना (Megha Health Insurance Scheme, MHIS) मेघालय सरकार की स्वास्थ्य बीमा योजना है, जो 2012 में शुरू हुई और 2018 से आयुष्मान भारत PM-JAY के साथ मिलाकर चलती है। मौजूदा चरण में परिवार को सूचीबद्ध अस्पतालों में साल में <strong>₹5.30 लाख</strong> तक कैशलेस इलाज मिलता है। राज्य और केंद्र सरकार के कर्मचारियों को छोड़कर मेघालय के निवासी परिवार इसके दायरे में हैं।",
  facts: [
    ["कवर", "₹5.30 लाख प्रति परिवार प्रति वर्ष (फैमिली फ्लोटर)"],
    ["किसके साथ", "आयुष्मान भारत PM-JAY"],
    ["कौन पात्र", "मेघालय के निवासी (सरकारी कर्मचारी छोड़कर)"],
    ["कार्ड कहां", "सूचीबद्ध अस्पताल / नामांकन केंद्र"],
  ],
  sections: [
    {
      id: "labh",
      title: "MHIS में क्या मिलता है",
      list: [
        "सूचीबद्ध सरकारी और निजी अस्पतालों में भर्ती होकर इलाज, <strong>₹5.30 लाख प्रति परिवार प्रति वर्ष</strong> तक (2022 के चरण 5 में ₹5 लाख से बढ़ाया गया)।",
        "<strong>फैमिली फ्लोटर:</strong> पूरी राशि परिवार के किसी भी सदस्य के इलाज में लग सकती है।",
        "<strong>कैशलेस:</strong> अस्पताल में कार्ड दिखाने पर पैकेज के इलाज का पैसा बीमा से जाता है।",
      ],
      callout: { kind: "info", html: "योजना चरणों (Phase) में चलती है और हर चरण में बीमा कंपनी, पैकेज या नियम बदल सकते हैं। नए चरण की घोषणा पर नियम दोबारा देखें।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "मेघालय के निवासी परिवार",
        "PM-JAY सूची वाले परिवार भी इसी के ज़रिए लाभ लेते हैं",
        "<strong>पात्र नहीं:</strong> राज्य और केंद्र सरकार के कर्मचारी, क्योंकि उनके लिए अलग स्वास्थ्य योजनाएं हैं",
      ],
    },
    {
      id: "card",
      title: "MHIS कार्ड कैसे बनवाएं",
      steps: [
        "नज़दीकी सूचीबद्ध अस्पताल के MHIS/आरोग्य मित्र डेस्क या सरकार के नामांकन शिविर में जाएं।",
        "आधार, राशन कार्ड या परिवार की पहचान वाले कागज़ और मोबाइल नंबर साथ रखें।",
        "परिवार के सदस्यों का नाम और बायोमेट्रिक/आधार सत्यापन करवाएं।",
        "कार्ड मिलने के बाद इसे संभालकर रखें; इलाज के समय अस्पताल में दिखाएं।",
      ],
      callout: { kind: "warn", html: "नामांकन फीस को लेकर अलग-अलग स्रोतों में अलग बात है। फीस मांगी जाए तो रसीद लें और <a href=\"https://mhis.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">MHIS वेबसाइट</a> या ज़िला स्वास्थ्य कार्यालय से पुष्टि करें।" },
    },
    {
      id: "aspatal",
      title: "अस्पताल में क्या करें",
      list: [
        "भर्ती होते ही MHIS कार्ड और आधार दिखाएं और पूछें कि आपका इलाज योजना के पैकेज में है या नहीं।",
        "कैशलेस इलाज के बदले पैसा मांगा जाए तो लिखित में कारण मांगें और ज़िला स्वास्थ्य कार्यालय में शिकायत करें।",
        "डिस्चार्ज के समय बिल और कागज़ों की कॉपी लें।",
      ],
    },
  ],
  official: [
    { href: "https://mhis.org.in/", title: "मेघा स्वास्थ्य बीमा योजना (MHIS)" },
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान भारत PM-JAY लाभार्थी पोर्टल" },
  ],
  faq: [
    { q: "MHIS में कितने का इलाज मुफ्त होता है?", a: "मौजूदा चरण में ₹5.30 लाख प्रति परिवार प्रति वर्ष तक, फैमिली फ्लोटर आधार पर, सूचीबद्ध अस्पतालों में।" },
    { q: "क्या सरकारी कर्मचारी MHIS ले सकते हैं?", a: "नहीं, राज्य और केंद्र सरकार के कर्मचारी इस योजना से बाहर हैं।" },
    { q: "MHIS और आयुष्मान भारत में क्या फर्क है?", a: "मेघालय में दोनों 2018 से एक साथ चलते हैं। PM-JAY सूची वाले परिवार और बाकी पात्र निवासी, दोनों MHIS-PMJAY के तहत इलाज लेते हैं।" },
    { q: "MHIS कार्ड कहां बनता है?", a: "सूचीबद्ध अस्पतालों के हेल्पडेस्क और सरकार के नामांकन शिविरों में। सही जगह के लिए ज़िला स्वास्थ्य कार्यालय से पूछें।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत", text: "PM-JAY कार्ड और पात्रता" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों के लिए" },
    { href: "/service/meghalaya-focus-scheme.html", emoji: "🌾", title: "मेघालय FOCUS योजना", text: "किसान उत्पादक समूह" },
    { href: "/states/meghalaya.html", emoji: "🗺️", title: "मेघालय की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://mhis.org.in/", label: "🏥 MHIS वेबसाइट" },
    { href: "/states/meghalaya.html", label: "🗺️ मेघालय की सेवाएं" },
  ],
};
