import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): eraktkosh.mohfw.gov.in/eraktkoshPortal/
// (official e-Raktkosh portal of the Ministry of Health & Family Welfare,
// responds 200 from the sandbox; menu items Blood Availability Search by
// state/district/blood group/component, Find Nearby Camps, Camp Pre
// Registration, Rare Blood Group Registry, blood-centre contact numbers —
// same reading as web/src/guides/doc/e-raktkosh-blood-donation.ts, checked
// the same day); MoHFW letter to states (Apr 2020) asking blood banks to
// update stock on e-Raktkosh; DCGI advisory (2022 reports) that licensed blood
// centres register on e-Raktkosh. Processing charges vary by centre and
// state and are not stated; no national blood helpline number is given.
export const nationalBloodBankEraktkosh: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "ई-रक्तकोश ब्लड बैंक स्टॉक" },
  ],
  docHi: "ई-रक्तकोश ब्लड बैंक स्टॉक",
  title: "ई-रक्तकोश राष्ट्रीय ब्लड बैंक स्टॉक (eRaktKosh Live Stock)",
  description: "इमरजेंसी में नजदीकी ब्लड बैंक में अपने ब्लड ग्रुप की उपलब्धता लाइव चेक करें। ई-रक्तकोश (eRaktKosh) पर राज्य, ज़िला और ब्लड ग्रुप से खोजने का तरीका।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ई-रक्तकोश ब्लड बैंक स्टॉक: इमरजेंसी में नज़दीकी ब्लड बैंक में खून कैसे खोजें",
  lead: "मरीज़ को खून चाहिए तो स्वास्थ्य एवं परिवार कल्याण मंत्रालय के पोर्टल <strong>eraktkosh.mohfw.gov.in</strong> पर राज्य, ज़िला, ब्लड ग्रुप और कंपोनेंट चुनकर देख सकते हैं कि किस ब्लड सेंटर में कितनी यूनिट उपलब्ध हैं, साथ में ब्लड सेंटर का पता और फोन नंबर भी। खोज मुफ्त है और लॉगिन की ज़रूरत नहीं।",
  facts: [
    ["पोर्टल", '<a href="https://eraktkosh.mohfw.gov.in/eraktkoshPortal/" target="_blank" rel="noopener nofollow">eraktkosh.mohfw.gov.in</a>'],
    ["किसका", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["खोज कैसे", "राज्य → ज़िला → ब्लड ग्रुप → कंपोनेंट"],
    ["शुल्क", "खोज मुफ्त; खून पर ब्लड सेंटर का processing charge"],
  ],
  notice: "<strong>ज़रूरी:</strong> स्टॉक ब्लड सेंटर खुद अपडेट करते हैं, इसलिए वह पुराना भी हो सकता है। निकलने से पहले ब्लड सेंटर को फोन करके पक्का करें। खून के बदले पैसे मांगने वाले बिचौलियों से दूर रहें।",
  sections: [
    {
      id: "stock",
      title: "लाइव स्टॉक कैसे देखें (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://eraktkosh.mohfw.gov.in/eraktkoshPortal/" target="_blank" rel="noopener nofollow">eraktkosh.mohfw.gov.in</a> खोलें और <strong>Blood Availability Search</strong> पर जाएं।',
        "<strong>राज्य</strong> और <strong>ज़िला</strong> चुनें।",
        "<strong>ब्लड ग्रुप</strong> (जैसे B+, O−) और <strong>कंपोनेंट</strong> चुनें, फिर Search दबाएं।",
        "सूची में ब्लड सेंटर का नाम, पता, उपलब्ध यूनिट, अपडेट का समय और फोन नंबर दिखता है।",
        "सबसे नज़दीकी 2-3 ब्लड सेंटर को फोन करें, स्टॉक पक्का करें और पूछें कि कौन से कागज़ लाने हैं।",
      ],
    },
    {
      id: "component",
      title: "कौन सा कंपोनेंट चुनें",
      intro: "डॉक्टर की पर्ची पर लिखा होता है कि मरीज़ को कौन सा कंपोनेंट चाहिए। उसी को चुनें।",
      table: {
        head: ["कंपोनेंट", "आम तौर पर कब"],
        rows: [
          ["Whole Blood (पूरा खून)", "डॉक्टर की सलाह पर"],
          ["PRBC / Packed Red Cells", "खून की कमी (एनीमिया), ऑपरेशन, खून बहना"],
          ["Platelets (प्लेटलेट)", "डेंगू या दूसरी हालत में प्लेटलेट बहुत कम होना"],
          ["Plasma (FFP)", "खून जमने की समस्या, जलना आदि"],
        ],
      },
      callout: { kind: "info", html: "ऊपर की तालिका सिर्फ समझने के लिए है। कौन सा कंपोनेंट और कितनी यूनिट, यह इलाज कर रहे डॉक्टर तय करते हैं।" },
    },
    {
      id: "kagaz",
      title: "ब्लड सेंटर पर क्या लेकर जाएं",
      list: [
        "डॉक्टर/अस्पताल का <strong>requisition form</strong> (खून की मांग की पर्ची)।",
        "मरीज़ का <strong>ब्लड सैंपल</strong> (क्रॉस-मैच के लिए), अगर ब्लड सेंटर मांगे।",
        "मरीज़ और साथ जाने वाले का पहचान पत्र।",
        "कई ब्लड सेंटर बदले में किसी परिजन से रक्तदान (replacement donor) के लिए कहते हैं; यह नियम सेंटर के हिसाब से अलग है।",
      ],
    },
    {
      id: "nahi-mila",
      title: "स्टॉक न मिले तो क्या करें",
      list: [
        "पास के ज़िलों में भी खोजें; बड़े सरकारी मेडिकल कॉलेज के ब्लड सेंटर में अक्सर ज़्यादा स्टॉक रहता है।",
        "दुर्लभ ब्लड ग्रुप के लिए पोर्टल की <strong>Rare Blood Group Registry</strong> देखें और ब्लड सेंटर से संपर्क करें।",
        "रिश्तेदारों/दोस्तों से रक्तदान करवाएं। पोर्टल पर <strong>Find Nearby Camps</strong> में पास के रक्तदान शिविर भी दिखते हैं।",
        'रक्तदान शिविर, दाता पंजीकरण और पात्रता की पूरी जानकारी: <a href="/service/e-raktkosh-blood-donation.html">ई-रक्तकोश रक्तदान गाइड</a>।',
      ],
    },
  ],
  official: [
    { href: "https://eraktkosh.mohfw.gov.in/eraktkoshPortal/", title: "e-Raktkosh पोर्टल (स्वास्थ्य मंत्रालय)" },
    { href: "https://www.mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
  ],
  faq: [
    { q: "ब्लड बैंक में खून का स्टॉक ऑनलाइन कैसे देखें?", a: "eraktkosh.mohfw.gov.in पर Blood Availability Search में राज्य, ज़िला, ब्लड ग्रुप और कंपोनेंट चुनें। सूची में ब्लड सेंटर, उपलब्ध यूनिट और फोन नंबर दिखता है।" },
    { q: "क्या पोर्टल पर दिखा स्टॉक सही होता है?", a: "स्टॉक ब्लड सेंटर अपडेट करते हैं, इसलिए यह कुछ समय पुराना हो सकता है। जाने से पहले ब्लड सेंटर को फोन करके पक्का करें।" },
    { q: "क्या ई-रक्तकोश से खून बुक हो जाता है?", a: "नहीं, पोर्टल पर सिर्फ उपलब्धता दिखती है। खून लेने के लिए डॉक्टर की पर्ची लेकर ब्लड सेंटर जाना होता है।" },
    { q: "खून के लिए पैसे लगते हैं?", a: "पोर्टल पर खोज मुफ्त है। खून लेते समय ब्लड सेंटर processing charge ले सकता है, जो सरकारी/निजी सेंटर और राज्य के हिसाब से अलग है; ब्लड सेंटर से पहले पूछ लें।" },
  ],
  related: [
    { href: "/service/e-raktkosh-blood-donation.html", emoji: "🩸", title: "ई-रक्तकोश रक्तदान", text: "शिविर, दाता पंजीकरण, पात्रता" },
    { href: "/service/organ-donation-registration.html", emoji: "💚", title: "अंगदान पंजीकरण", text: "अंगदान की शपथ" },
    { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "डिजिटल हेल्थ ID" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
  ],
  aside: [
    { href: "https://eraktkosh.mohfw.gov.in/eraktkoshPortal/", label: "🩸 ई-रक्तकोश पोर्टल खोलें" },
    { href: "#stock", label: "🔍 स्टॉक कैसे देखें" },
  ],
};
