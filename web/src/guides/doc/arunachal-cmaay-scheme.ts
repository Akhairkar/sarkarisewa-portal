import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; state sites not reachable from the sandbox,
// search-result extracts used): tawang.nic.in district notice (beneficiaries:
// all APST resident families and non-APST regular State Government
// employees; enrol online or at the CMAAY helpdesk, District Hospital; card
// generated after authentication through Aadhaar/APST/ration card), The
// Arunachal Times (official portal www.cmaay.com; state pensioners may enrol
// voluntarily, ward by last pay scale; beneficiaries must choose either CMAAY
// or PM-JAY, no dual coverage), ICICI Lombard / Joinditto guides (cashless
// cover up to ₹5 lakh per family per year: ₹4 lakh tertiary + ₹1 lakh
// secondary care; certain non-APST permanent residents of Changlang, Lohit and
// Namsai covered). Premium/fee details differ between secondary sources and
// were left out.
export const arunachalCmaayScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "अरुणाचल प्रदेश", href: "/states/arunachal.html" },
    { label: "CMAAY योजना" },
  ],
  docHi: "CMAAY योजना",
  title: "CMAAY Scheme",
  description: "अरुणाचल प्रदेश की मुख्यमंत्री आरोग्य अरुणाचल योजना (CMAAY): पात्र परिवारों को सूचीबद्ध अस्पतालों में ₹5 लाख तक कैशलेस इलाज। पात्रता, कार्ड कैसे बनवाएं, PM-JAY से फर्क।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुख्यमंत्री आरोग्य अरुणाचल योजना (CMAAY), अरुणाचल प्रदेश: ₹5 लाख तक मुफ्त इलाज, पात्रता और कार्ड",
  lead: "मुख्यमंत्री आरोग्य अरुणाचल योजना (CMAAY) अरुणाचल प्रदेश सरकार की स्वास्थ्य बीमा योजना है। इसमें पात्र परिवार को सूचीबद्ध अस्पतालों में साल में ₹5 लाख तक कैशलेस इलाज मिलता है: ₹4 लाख बड़े (तृतीयक) इलाज के लिए और ₹1 लाख द्वितीयक इलाज के लिए। सभी APST निवासी परिवार और गैर-APST नियमित राज्य सरकारी कर्मचारी इसके दायरे में हैं। कार्ड CMAAY पोर्टल या ज़िला अस्पताल के CMAAY हेल्पडेस्क से बनता है।",
  facts: [
    ["कवर", "₹5 लाख प्रति परिवार प्रति वर्ष"],
    ["बंटवारा", "₹4 लाख तृतीयक + ₹1 लाख द्वितीयक"],
    ["कौन", "APST परिवार, राज्य सरकारी कर्मचारी आदि"],
    ["कार्ड कहां", "CMAAY पोर्टल / ज़िला अस्पताल हेल्पडेस्क"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "अरुणाचल प्रदेश के सभी <strong>APST (अरुणाचल प्रदेश अनुसूचित जनजाति)</strong> निवासी परिवार",
        "गैर-APST <strong>नियमित राज्य सरकारी कर्मचारी</strong> और उनका परिवार",
        "चांगलांग, लोहित और नामसाई ज़िलों के कुछ गैर-APST स्थायी निवासी, जिनके पास निवास प्रमाण पत्र (Resident Certificate) है",
        "राज्य के पेंशनभोगी अपनी मर्ज़ी से जुड़ सकते हैं; अस्पताल में वार्ड की पात्रता रिटायरमेंट के समय के आखिरी वेतनमान से तय होती है",
      ],
      callout: { kind: "warn", html: "एक परिवार <strong>CMAAY या आयुष्मान भारत PM-JAY में से एक</strong> ही चुन सकता है; दोनों का लाभ एक साथ नहीं मिलता।" },
    },
    {
      id: "card",
      title: "CMAAY कार्ड कैसे बनवाएं",
      steps: [
        '<a href="https://www.cmaay.com/" target="_blank" rel="noopener nofollow">CMAAY पोर्टल</a> पर ऑनलाइन नामांकन करें, या ज़िला अस्पताल के CMAAY हेल्पडेस्क पर जाएं।',
        "आधार, APST प्रमाण पत्र या राशन कार्ड से पहचान की पुष्टि (authentication) करवाएं।",
        "परिवार के सदस्यों का विवरण जुड़वाएं (परिवार वृक्ष प्रमाण पत्र या राशन कार्ड काम आता है)।",
        "पुष्टि के बाद CMAAY कार्ड बनता है; इसे इलाज के समय अस्पताल में दिखाएं।",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड (परिवार के हर सदस्य का)",
        "APST प्रमाण पत्र, या सरकारी कर्मचारी होने का प्रमाण / निवास प्रमाण पत्र",
        "राशन कार्ड या परिवार वृक्ष (Family Tree) प्रमाण पत्र",
        "मोबाइल नंबर",
      ],
    },
    {
      id: "ilaj",
      title: "इलाज कैसे मिलता है",
      steps: [
        "CMAAY से सूचीबद्ध (empanelled) सरकारी या निजी अस्पताल में जाएं; राज्य के बाहर के कुछ अस्पताल भी सूची में हो सकते हैं।",
        "अस्पताल के CMAAY/आरोग्य मित्र काउंटर पर कार्ड और आधार दिखाएं।",
        "अस्पताल पूर्व-अनुमति (pre-authorisation) लेकर कैशलेस इलाज करता है; आपको बिल नहीं भरना चाहिए।",
      ],
      callout: { kind: "info", html: "₹4 लाख और ₹1 लाख की सीमाएं अलग-अलग हैं, उन्हें आपस में जोड़ा नहीं जा सकता। कौन सा इलाज किस श्रेणी में है, अस्पताल का CMAAY डेस्क बताएगा।" },
    },
  ],
  official: [
    { href: "https://www.cmaay.com/", title: "मुख्यमंत्री आरोग्य अरुणाचल योजना (CMAAY) पोर्टल", note: "नामांकन और अस्पताल सूची" },
    { href: "https://tawang.nic.in/", title: "तवांग ज़िला प्रशासन (CMAAY सूचना का उदाहरण)" },
  ],
  faq: [
    { q: "CMAAY में कितने रुपये तक का इलाज मिलता है?", a: "प्रति परिवार प्रति वर्ष ₹5 लाख तक कैशलेस इलाज: ₹4 लाख तृतीयक (बड़े) इलाज के लिए और ₹1 लाख द्वितीयक इलाज के लिए।" },
    { q: "क्या CMAAY और आयुष्मान भारत दोनों ले सकते हैं?", a: "नहीं, परिवार को इनमें से एक योजना चुननी होती है; दोनों का लाभ साथ नहीं मिलता।" },
    { q: "गैर-APST लोग CMAAY में आते हैं?", a: "गैर-APST नियमित राज्य सरकारी कर्मचारी आते हैं, और चांगलांग, लोहित, नामसाई के कुछ गैर-APST स्थायी निवासी भी। बाकी लोग ज़िला अस्पताल के CMAAY डेस्क से अपनी पात्रता पूछें।" },
    { q: "CMAAY कार्ड कहां बनता है?", a: "CMAAY पोर्टल पर ऑनलाइन या ज़िला अस्पताल के CMAAY हेल्पडेस्क पर, आधार/APST/राशन कार्ड से पुष्टि के बाद।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत (PM-JAY)", text: "केंद्र की ₹5 लाख की योजना" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों के लिए" },
    { href: "/service/abha-health-card.html", emoji: "🏥", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य नंबर" },
    { href: "/service/arunachal-pradesh-ration-card.html", emoji: "🍚", title: "अरुणाचल प्रदेश राशन कार्ड", text: "परिवार का प्रमाण" },
    { href: "/service/arunachal-dulari-kanya-scheme.html", emoji: "👧", title: "दुलारी कन्या योजना", text: "बेटियों के लिए योजना" },
  ],
  aside: [
    { href: "https://www.cmaay.com/", label: "🏥 CMAAY पोर्टल" },
    { href: "/service/csc-locator/arunachal-pradesh.html", label: "📍 नज़दीकी CSC" },
  ],
};
