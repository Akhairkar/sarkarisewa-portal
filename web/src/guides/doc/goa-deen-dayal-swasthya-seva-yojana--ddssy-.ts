import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Goa Health Department notification of 2026
// raising DDSSY cover (reported by The Goan 3 July 2026, Prudent Media, Free
// Press Journal): Rs 4 lakh a year for families of up to 3 members (earlier
// Rs 2.5 lakh), Rs 6 lakh for 4 or more members (earlier Rs 4 lakh), no
// family above Rs 6 lakh a year, other terms unchanged; new registration and
// renewal for 2026-27 on the Goa Online portal. Residence of at least five
// years in Goa, empanelled government and private hospitals, works alongside
// AB-PMJAY (IMPRI analyses 2026). The notification PDF on goa.gov.in
// returned 403 here. Registration/renewal fee (reported as Rs 200/Rs 300)
// was not confirmed from an official page and is left out; the planned ABHA
// linking is described as announced only.
export const goaDeenDayalSwasthyaSevaYojanaDdssy: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "दीन दयाल स्वास्थ्य सेवा योजना (गोवा)" },
  ],
  docHi: "DDSSY गोवा",
  title: "Deen Dayal Swasthya Seva Yojana (DDSSY) गोवा 2026",
  description: "गोवा की दीन दयाल स्वास्थ्य सेवा योजना (DDSSY): 2026 में बढ़ा कवर, 3 सदस्य तक ₹4 लाख और 4 या ज़्यादा सदस्य पर ₹6 लाख सालाना। पात्रता, Goa Online पर पंजीकरण/नवीनीकरण और अस्पताल।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दीन दयाल स्वास्थ्य सेवा योजना (DDSSY), गोवा: ₹6 लाख तक कवर, पंजीकरण और नवीनीकरण",
  lead: "दीन दयाल स्वास्थ्य सेवा योजना (DDSSY) गोवा सरकार की परिवार स्वास्थ्य बीमा योजना है, जिसमें सूचीबद्ध सरकारी और निजी अस्पतालों में भर्ती होकर इलाज का खर्च मिलता है। 2026 की अधिसूचना के बाद <strong>3 सदस्य तक के परिवार को ₹4 लाख</strong> और <strong>4 या ज़्यादा सदस्य वाले परिवार को ₹6 लाख</strong> सालाना कवर मिलता है। गोवा में कम से कम 5 साल से रह रहे परिवार पात्र हैं; 2026-27 का पंजीकरण और नवीनीकरण Goa Online पोर्टल पर होता है।",
  facts: [
    ["कवर (3 सदस्य तक)", "₹4 लाख सालाना"],
    ["कवर (4+ सदस्य)", "₹6 लाख सालाना"],
    ["निवास", "गोवा में कम से कम 5 साल"],
    ["पंजीकरण/नवीनीकरण", "Goa Online पोर्टल"],
  ],
  sections: [
    {
      id: "kavar",
      title: "कितना कवर मिलता है (2026 से)",
      table: {
        head: ["परिवार का आकार", "पहले", "अब (2026 अधिसूचना)"],
        rows: [
          ["3 सदस्य तक", "₹2.5 लाख", "<strong>₹4 लाख</strong> सालाना"],
          ["4 या ज़्यादा सदस्य", "₹4 लाख", "<strong>₹6 लाख</strong> सालाना"],
        ],
      },
      callout: { kind: "info", html: "कोई भी परिवार एक साल में ₹6 लाख से ज़्यादा का दावा नहीं कर सकता। योजना की बाकी शर्तें पहले जैसी रखी गई हैं।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "गोवा में <strong>कम से कम 5 साल से लगातार</strong> रह रहे परिवार।",
        "योजना निवास पर आधारित है; अलग आय सीमा की शर्त की जानकारी नहीं मिली।",
        "परिवार के सभी सदस्यों का नाम कार्ड में जुड़वाएं, क्योंकि कवर परिवार के आकार पर तय होता है।",
      ],
    },
    {
      id: "panjikaran",
      title: "पंजीकरण और नवीनीकरण कैसे करें",
      steps: [
        "<a href=\"https://www.goaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Goa Online</a> पोर्टल पर खाता बनाएं या लॉगिन करें और DDSSY सेवा खोजें।",
        "नया पंजीकरण या नवीनीकरण चुनें; परिवार के सदस्यों का विवरण भरें।",
        "निवास प्रमाण, आधार, राशन कार्ड/परिवार का प्रमाण और फोटो जैसे मांगे गए कागज़ अपलोड करें।",
        "पोर्टल पर बताया शुल्क (अगर हो) ऑनलाइन भरें और आवेदन संख्या संभालें।",
        "मंज़ूरी के बाद कार्ड/पंजीकरण की जानकारी मिलती है। कार्ड की वैधता खत्म होने से पहले नवीनीकरण करवाएं।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो नज़दीकी <a href=\"/tools/csc-locator.html\">CSC</a> या स्वास्थ्य केंद्र में मदद लें।" },
    },
    {
      id: "ilaj",
      title: "इलाज कैसे होता है",
      list: [
        "योजना से जुड़े (सूचीबद्ध) सरकारी और निजी अस्पतालों में भर्ती होने पर कैशलेस इलाज।",
        "अस्पताल के DDSSY/बीमा डेस्क पर कार्ड और पहचान पत्र दिखाएं।",
        "DDSSY आयुष्मान भारत (PM-JAY) के साथ चलती है; पात्र लोगों को दूसरे राज्यों में PM-JAY कार्ड से इलाज की सुविधा मिल सकती है।",
        "सरकार ने लाभार्थियों के कार्ड को 14 अंकों के ABHA नंबर से जोड़ने की घोषणा की है।",
      ],
      callout: { kind: "warn", html: "अस्पताल पैसे मांगे या इलाज से मना करे तो स्वास्थ्य सेवा निदेशालय, गोवा में शिकायत करें।" },
    },
  ],
  official: [
    { href: "https://www.goaonline.gov.in/", title: "Goa Online पोर्टल", note: "DDSSY पंजीकरण और नवीनीकरण" },
    { href: "https://www.goa.gov.in/", title: "गोवा सरकार का पोर्टल", note: "अधिसूचनाएं" },
  ],
  faq: [
    { q: "DDSSY में अब कितना कवर मिलता है?", a: "2026 की अधिसूचना के बाद 3 सदस्य तक के परिवार को ₹4 लाख और 4 या ज़्यादा सदस्य वाले परिवार को ₹6 लाख सालाना। एक साल में ₹6 लाख से ज़्यादा का दावा नहीं हो सकता।" },
    { q: "DDSSY के लिए कौन पात्र है?", a: "गोवा में कम से कम 5 साल से लगातार रह रहे परिवार।" },
    { q: "DDSSY का पंजीकरण या नवीनीकरण कहां होता है?", a: "2026-27 के लिए Goa Online पोर्टल पर नया पंजीकरण और नवीनीकरण हो रहा है।" },
    { q: "क्या DDSSY और आयुष्मान भारत अलग हैं?", a: "हां, DDSSY गोवा सरकार की योजना है और PM-JAY केंद्र की। गोवा में दोनों साथ चलती हैं; पात्र परिवार दोनों के कार्ड रख सकते हैं।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत (PM-JAY)", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "🩺", title: "आयुष्मान वय वंदना", text: "70+ के लिए ₹5 लाख इलाज" },
    { href: "/service/goa-dayanand-social-security-scheme--dsss-.html", emoji: "👴", title: "दयानंद सामाजिक सुरक्षा योजना", text: "गोवा की मासिक सहायता" },
    { href: "/states/goa-domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र (गोवा)", text: "5 साल के निवास का प्रमाण" },
    { href: "/states/goa-ration-card.html", emoji: "🍚", title: "राशन कार्ड (गोवा)", text: "परिवार का प्रमाण" },
  ],
  aside: [
    { href: "https://www.goaonline.gov.in/", label: "🌐 Goa Online पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
