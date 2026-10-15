import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): incometax.gov.in Help > Link Aadhaar FAQ Q5
// (on name/phone/DOB mismatch, correct details in PAN or Aadhaar so both
// match; PAN name update via Protean onlineservices.nsdl.com/paam/
// endUserRegisterContact.html or UTIITSL pan.utiitsl.com; Aadhaar via UIDAI
// uidai.gov.in/en/my-aadhaar/updateaadhaar.html; UIDAI data extraction mail
// authsupport@uidai.net.in; if linking still fails, biometric-based
// authentication at dedicated Protean/UTIITSL centres with PAN, Aadhaar,
// ₹1,000 fee challan and a biometric charge); incometax.gov.in Help > Verify
// Your PAN FAQ; e-Filing "Call Us" (Protean PAN queries +91-20-27218080,
// 07:00-23:00 all days; e-filing 1800 103 0025 / 1800 419 0025). Aadhaar
// demographic update fee ₹75 at centres and free online document update till
// 14.06.2027 taken from our aadhaar-card guide (UIDAI OM 13.05.2026). PAN
// correction fees and Aadhaar update-count limits not re-verified, left out.
export const panAadhaarConflictResolver: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "पैन-आधार नाम/जन्म तिथि बेमेल" },
  ],
  docHi: "पैन-आधार बेमेल समाधान",
  title: "पैन और आधार नाम/जन्म तिथि बेमेल समाधान 2026",
  description: "पैन और आधार में नाम, जन्म तिथि या लिंग अलग होने से लिंकिंग अटकी है? किसे ठीक करें, Protean/UTIITSL या UIDAI पर सुधार कैसे करें और बायोमेट्रिक विकल्प कब लें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पैन और आधार में नाम/जन्म तिथि बेमेल 2026: लिंकिंग फेल हो तो क्या करें",
  lead: "पैन और आधार में नाम, जन्म तिथि या लिंग अलग हो तो आयकर पोर्टल पर आधार-पैन लिंकिंग का अनुरोध फेल हो जाता है। आयकर विभाग के अनुसार हल यही है कि पैन या आधार में से किसी एक में सुधार कराकर दोनों को एक जैसा करें: पैन का सुधार Protean या UTIITSL से और आधार का सुधार UIDAI से होता है। फिर भी लिंक न हो तो Protean/UTIITSL के खास केंद्रों पर बायोमेट्रिक सत्यापन का विकल्प है।",
  facts: [
    ["पैन में सुधार", "Protean (NSDL) या UTIITSL"],
    ["आधार में सुधार", "UIDAI (myAadhaar / आधार केंद्र)"],
    ["आखिरी विकल्प", "PAN सेवा केंद्र पर बायोमेट्रिक सत्यापन"],
    ["Protean PAN हेल्पलाइन", "+91-20-27218080"],
  ],
  sections: [
    {
      id: "pehle-jaanche",
      title: "पहले देखें कि फर्क कहां है",
      steps: [
        '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a> पर <strong>Verify Your PAN</strong> से देखें कि पैन में नाम और जन्म तिथि कैसे दर्ज हैं।',
        "आधार कार्ड या mAadhaar/e-Aadhaar में अपना नाम, जन्म तिथि और लिंग देखें।",
        "फर्क लिख लें: स्पेलिंग, नाम का क्रम, उपनाम, शादी के बाद नाम बदलना, या जन्म तिथि/साल का अंतर।",
      ],
    },
    {
      id: "kise-sudhare",
      title: "किसे ठीक करें: पैन या आधार?",
      table: {
        head: ["स्थिति", "क्या करें"],
        rows: [
          ["आधार सही है, पैन में गलती", "पैन में सुधार (Protean या UTIITSL)"],
          ["पैन सही है, आधार में गलती", "आधार में सुधार (UIDAI)"],
          ["दोनों में अलग-अलग गलती", "जिस दस्तावेज़ के पक्के सबूत (जैसे 10वीं की मार्कशीट, जन्म प्रमाण पत्र) आपके पास हैं, उसके हिसाब से दूसरे को ठीक करें"],
        ],
      },
      callout: { kind: "info", html: "आम तौर पर वही नाम और जन्म तिथि रखें जो आपके बैंक, स्कूल प्रमाण पत्र और दूसरे कागज़ों में है, ताकि आगे और जगह बेमेल न हो।" },
    },
    {
      id: "pan-sudhar",
      title: "पैन में सुधार कैसे करें",
      steps: [
        "पैन कार्ड के पीछे देखें कि यह Protean (पहले NSDL) से बना या UTIITSL से। सुधार किसी से भी करा सकते हैं।",
        '<a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener nofollow">Protean</a> या <a href="https://www.pan.utiitsl.com/" target="_blank" rel="noopener nofollow">UTIITSL</a> पर "Changes or Correction in PAN Data" वाला आवेदन चुनें।',
        "सही नाम/जन्म तिथि भरें और प्रमाण दें; आधार e-KYC का विकल्प हो तो आधार के अनुसार विवरण आ जाता है।",
        "फीस भरें (भुगतान के समय पोर्टल पर दिखती है) और पावती संख्या संभालें।",
        "सुधार होने के बाद आयकर पोर्टल पर फिर से Verify Your PAN से जांचें और लिंकिंग का अनुरोध दोबारा भेजें।",
      ],
    },
    {
      id: "aadhaar-sudhar",
      title: "आधार में सुधार कैसे करें",
      list: [
        "नाम, जन्म तिथि और लिंग का सुधार आधार केंद्र पर होता है; दस्तावेज़ (पहचान/जन्म तिथि का प्रमाण) साथ ले जाएं। जनसांख्यिकीय अपडेट की फीस ₹75 है।",
        "पते जैसे कुछ अपडेट myAadhaar पर ऑनलाइन होते हैं; UIDAI ने ऑनलाइन दस्तावेज़ अपडेट 14.06.2027 तक मुफ्त रखा है।",
        "आधार में नाम या जन्म तिथि बदलने की संख्या पर UIDAI की सीमा है, इसलिए सुधार सोच-समझकर और एक बार में सही कराएं।",
        "UIDAI हेल्पलाइन: 1947।",
      ],
    },
    {
      id: "biometric",
      title: "फिर भी लिंक न हो: बायोमेट्रिक विकल्प",
      intro: "आयकर विभाग के FAQ के अनुसार सुधार के बाद भी लिंकिंग फेल हो तो PAN सेवा प्रदाताओं (Protean और UTIITSL) के खास केंद्रों पर बायोमेट्रिक सत्यापन करा सकते हैं।",
      list: [
        "साथ ले जाएं: पैन, आधार और लिंकिंग की <strong>₹1,000 फीस वाले चालान की कॉपी</strong>।",
        "केंद्र पर बायोमेट्रिक सत्यापन का अलग शुल्क देना होता है।",
        "अधिकृत केंद्रों की सूची Protean/UTIITSL की वेबसाइट पर देखें।",
      ],
      callout: { kind: "ok", html: 'लिंकिंग की फीस और स्टेप्स के लिए हमारी <a href="/service/aadhaar-pan-linking.html">आधार-पैन लिंकिंग गाइड</a> देखें। बेमेल को जल्दी पहचानने के लिए <a href="/tools/pan-aadhaar-conflict-resolver.html">पैन-आधार बेमेल टूल</a> भी है।' },
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल (Link Aadhaar, Verify Your PAN)", note: "1800 103 0025" },
    { href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html", title: "Protean: पैन सुधार", note: "+91-20-27218080" },
    { href: "https://www.pan.utiitsl.com/", title: "UTIITSL: पैन सेवाएं" },
    { href: "https://uidai.gov.in/en/my-aadhaar/updateaadhaar.html", title: "UIDAI: आधार अपडेट", note: "हेल्पलाइन 1947" },
  ],
  faq: [
    { q: "नाम बेमेल होने से आधार-पैन लिंक नहीं हो रहा, क्या करें?", a: "पैन या आधार में से किसी एक में सुधार कराकर दोनों में नाम, जन्म तिथि और लिंग एक जैसा करें। पैन का सुधार Protean/UTIITSL से, आधार का UIDAI से होता है।" },
    { q: "सुधार के बाद भी लिंक न हो तो?", a: "Protean या UTIITSL के खास केंद्रों पर पैन, आधार और ₹1,000 फीस के चालान की कॉपी लेकर बायोमेट्रिक सत्यापन कराएं; इसका अलग शुल्क लगता है।" },
    { q: "क्या दोबारा ₹1,000 फीस देनी होगी?", a: "आयकर विभाग के FAQ में बायोमेट्रिक विकल्प के लिए पहले भरे गए ₹1,000 चालान की कॉपी ले जाने को कहा गया है, इसलिए चालान संभालकर रखें। किसी खास मामले में दोबारा फीस लगेगी या नहीं, यह ई-फाइलिंग हेल्पलाइन 1800 103 0025 से पूछ लें।" },
    { q: "पैन किसने बनाया, यह कैसे पता करें?", a: "पैन कार्ड के पीछे जारी करने वाली संस्था (NSDL/Protean या UTIITSL) का नाम/पता छपा होता है।" },
    { q: "आधार में जन्म तिथि बदलने में कितने पैसे लगते हैं?", a: "आधार केंद्र पर जनसांख्यिकीय अपडेट की फीस ₹75 है। सही जन्म तिथि का प्रमाण साथ ले जाएं।" },
  ],
  related: [
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "₹1,000 फीस और स्टेप्स" },
    { href: "/service/pan-card.html", emoji: "🪪", title: "पैन कार्ड", text: "नया पैन, e-PAN, सुधार" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "अपडेट, डाउनलोड और फीस" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर", text: "OTP के लिए मोबाइल जोड़ें" },
    { href: "/tools/pan-aadhaar-conflict-resolver.html", emoji: "🧩", title: "पैन-आधार बेमेल टूल", text: "फर्क पहचानें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन सुधार में मदद" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "🧾 आयकर पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
