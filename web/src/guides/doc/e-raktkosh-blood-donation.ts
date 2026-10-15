import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026):
// - eraktkosh.mohfw.gov.in/eraktkoshPortal/ (official e-Raktkosh portal,
//   "Centralized Blood Center Management System"; the old eraktkosh.in
//   address could not be opened from here). Menu labels read from the
//   portal's own app bundle: Blood Availability Search, Blood Donation Camps /
//   Find Nearby Camps, Camp Pre Registration (with ABHA option), Rare Blood
//   Group Registry, Thalassemia login, blood-centre helpline numbers.
// - MoHFW letter to State Health Ministers (Apr 2020, onlineasdma.assam.gov.in
//   copy): blood banks to update stock on e-Raktkosh; donors may register.
// - Search extracts (thehitavada.com 2022: DCGI advisory that licensed blood
//   centres register on e-Raktkosh; June 2025 reports: Rare Donor Registry
//   being linked with e-Raktkosh; run under NHM, developed by C-DAC).
// - Donor age 18-65 and minimum weight 45 kg: several sources; given as the
//   general rule only. Donation interval and the old "104" helpline could not
//   be confirmed from an official page and were left out.
export const eRaktkoshBloodDonation: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "ई-रक्तकोश" },
  ],
  docHi: "ई-रक्तकोश",
  title: "ई-रक्तकोश (रक्तदान और उपलब्धता) 2026",
  description: "रक्त बैंक खोजने, रक्त समूह उपलब्धता जांचने, रक्तदाता के रूप में पंजीकरण करने, या आगामी रक्तदान शिविर खोजने के लिए केंद्रीकृत पोर्टल।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ई-रक्तकोश (e-Raktkosh) 2026: खून की उपलब्धता कैसे देखें, रक्तदान शिविर और पंजीकरण",
  lead: "ई-रक्तकोश (e-Raktkosh) स्वास्थ्य एवं परिवार कल्याण मंत्रालय का ब्लड सेंटर मैनेजमेंट सिस्टम है। इसके पोर्टल <strong>eraktkosh.mohfw.gov.in</strong> पर आप राज्य और ज़िला चुनकर देख सकते हैं कि किस ब्लड सेंटर में कौन सा ब्लड ग्रुप उपलब्ध है, पास के रक्तदान शिविर खोज सकते हैं और शिविर के लिए पहले से पंजीकरण कर सकते हैं। खोज के लिए लॉगिन की ज़रूरत नहीं।",
  facts: [
    ["पोर्टल", '<a href="https://eraktkosh.mohfw.gov.in/eraktkoshPortal/" target="_blank" rel="noopener nofollow">eraktkosh.mohfw.gov.in</a>'],
    ["किसका", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["मुख्य सेवाएं", "खून की उपलब्धता, शिविर, दाता पंजीकरण"],
    ["शुल्क", "पोर्टल पर खोज मुफ्त"],
  ],
  notice: "<strong>ध्यान दें:</strong> पोर्टल पर दिखा स्टॉक ब्लड सेंटर खुद अपडेट करते हैं, इसलिए जाने से पहले ब्लड सेंटर के फोन नंबर पर बात करके पक्का कर लें। खून के बदले पैसे मांगने वाले बिचौलियों से बचें।",
  sections: [
    {
      id: "upalabdhata",
      title: "खून की उपलब्धता (Blood Availability) कैसे देखें",
      steps: [
        '<a href="https://eraktkosh.mohfw.gov.in/eraktkoshPortal/" target="_blank" rel="noopener nofollow">eraktkosh.mohfw.gov.in</a> खोलें और <strong>Blood Availability Search</strong> चुनें।',
        "अपना <strong>राज्य</strong> और <strong>ज़िला</strong> चुनें।",
        "ज़रूरी <strong>ब्लड ग्रुप</strong> और <strong>कंपोनेंट</strong> (जैसे Whole Blood, PRBC/पैक्ड रेड सेल, प्लेटलेट, प्लाज़्मा) चुनें, फिर खोजें।",
        "सूची में ब्लड सेंटर का नाम, पता, उपलब्ध यूनिट और संपर्क नंबर दिखता है।",
        "ब्लड सेंटर को फोन करके स्टॉक पक्का करें और पूछें कि मरीज़ का कौन सा कागज़ (डॉक्टर की पर्ची/requisition form, सैंपल) लेकर आना है।",
      ],
      callout: { kind: "info", html: "अस्पताल में भर्ती मरीज़ के लिए खून लेने में आम तौर पर डॉक्टर का requisition form और मरीज़ का ब्लड सैंपल लगता है। कौन सी फीस (processing charge) लगेगी, यह ब्लड सेंटर और सरकारी/निजी अस्पताल के हिसाब से अलग है।" },
    },
    {
      id: "shivir",
      title: "रक्तदान शिविर खोजें और पंजीकरण करें",
      steps: [
        "पोर्टल पर <strong>Blood Donation Camps / Find Nearby Camps</strong> खोलें।",
        "राज्य, ज़िला और तारीख से आने वाले शिविर देखें; शिविर का पता और समय नोट करें।",
        "<strong>Camp Pre Registration</strong> से पहले से पंजीकरण करें (पोर्टल पर ABHA से पंजीकरण का विकल्प भी है)।",
        "तय दिन पहचान पत्र लेकर शिविर में जाएं। वहां डॉक्टर जांच के बाद ही रक्तदान करवाते हैं।",
      ],
    },
    {
      id: "patrata",
      title: "रक्तदान कौन कर सकता है",
      list: [
        "<strong>उम्र:</strong> आम तौर पर 18 से 65 साल।",
        "<strong>वज़न:</strong> कम से कम 45 किलो।",
        "<strong>सेहत:</strong> उस दिन तबीयत ठीक हो; हीमोग्लोबिन, BP, नब्ज़ और तापमान की जांच ब्लड सेंटर/शिविर में होती है।",
        "हाल में बीमारी, दवा, टीका, ऑपरेशन, गर्भावस्था या पिछली बार रक्तदान कब किया, यह डॉक्टर को सही-सही बताएं।",
      ],
      callout: { kind: "warn", html: "रक्तदान की इजाज़त का अंतिम फैसला ब्लड सेंटर का डॉक्टर करता है। दो रक्तदान के बीच कितना अंतर रखना है, यह भी वहीं पूछें।" },
    },
    {
      id: "aur-sevaen",
      title: "पोर्टल पर और क्या है",
      list: [
        "<strong>Rare Blood Group Registry:</strong> दुर्लभ ब्लड ग्रुप वाले दाताओं की जानकारी।",
        "<strong>Thalassemia:</strong> थैलेसीमिया मरीज़ों के लिए अलग लॉगिन।",
        "<strong>ब्लड सेंटर की जानकारी:</strong> पंजीकृत ब्लड सेंटरों के पते और हेल्पलाइन नंबर।",
        "<strong>शिविर लगवाना:</strong> संस्थाएं ब्लड सेंटर के ज़रिए शिविर का अनुरोध कर सकती हैं।",
      ],
    },
  ],
  official: [
    { href: "https://eraktkosh.mohfw.gov.in/eraktkoshPortal/", title: "e-Raktkosh पोर्टल (स्वास्थ्य मंत्रालय)" },
    { href: "https://www.mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
  ],
  faq: [
    { q: "ई-रक्तकोश पर ब्लड ग्रुप की उपलब्धता कैसे देखें?", a: "eraktkosh.mohfw.gov.in पर Blood Availability Search खोलें, राज्य, ज़िला, ब्लड ग्रुप और कंपोनेंट चुनें। सूची में ब्लड सेंटर का पता, स्टॉक और फोन नंबर दिखता है।" },
    { q: "क्या पोर्टल पर दिखा स्टॉक पक्का होता है?", a: "स्टॉक ब्लड सेंटर अपडेट करते हैं, इसलिए जाने से पहले उनके नंबर पर फोन करके पक्का कर लें।" },
    { q: "रक्तदान के लिए उम्र और वज़न कितना चाहिए?", a: "आम तौर पर 18 से 65 साल की उम्र और कम से कम 45 किलो वज़न। अंतिम फैसला जांच के बाद ब्लड सेंटर का डॉक्टर करता है।" },
    { q: "क्या ई-रक्तकोश पर खोज के लिए पैसे लगते हैं?", a: "नहीं, पोर्टल पर खून की उपलब्धता और शिविर की खोज मुफ्त है। खून लेते समय ब्लड सेंटर अपनी processing फीस ले सकता है।" },
    { q: "पुराना पता eraktkosh.in था, अब कौन सा है?", a: "पोर्टल अब eraktkosh.mohfw.gov.in पर खुलता है।" },
  ],
  related: [
    { href: "/service/national-blood-bank-eraktkosh.html", emoji: "🩸", title: "ई-रक्तकोश ब्लड बैंक स्टॉक", text: "लाइव स्टॉक की जानकारी" },
    { href: "/service/organ-donation-registration.html", emoji: "💚", title: "अंगदान पंजीकरण", text: "अंगदान की शपथ" },
    { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "डिजिटल हेल्थ ID" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/e-sanjeevani-teleconsultation.html", emoji: "👨‍⚕️", title: "ई-संजीवनी", text: "फ्री ऑनलाइन डॉक्टर परामर्श" },
  ],
  aside: [
    { href: "https://eraktkosh.mohfw.gov.in/eraktkoshPortal/", label: "🩸 ई-रक्तकोश पोर्टल खोलें" },
    { href: "#upalabdhata", label: "🔍 खून की उपलब्धता कैसे देखें" },
  ],
};
