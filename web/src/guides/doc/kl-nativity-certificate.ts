import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): edistrict.kerala.gov.in FAQ as used for our
// Kerala domicile guide (checked 14 Oct 2026: Nativity Certificate validity
// life long; documents affidavit, birth certificate, ration card, school
// certificate, school certificate of parents; time limit 5 working days;
// services through Akshaya/CSC and the portal; Aadhaar-linked one-time
// registration; Track Application and Certificate verification; KSITM
// contact edistrict.ksitm@kerala.gov.in, 0471 2525444). Search extracts:
// polyadmission.org annexure "Keralite" and jeecounselling.in KEAM 2026
// checklist (nativity certificate signed by Village Officer / Tahsildar;
// required to claim Keralite status in admissions), prsindia.org Bill 299 of
// 2026 (Kerala Nativity Card Bill: native = born in Kerala, Village Officer /
// Tahsildar roles), wionews.com and amarujala.com (24 Feb 2026: Assembly
// passed the Nativity Card Bill), shankariasparliament.com / iasgyan.in
// (nativity certificates now issued under government orders; card proposed
// to replace repeated certificates). Governor's assent / roll-out of the card
// not confirmed. Fee (₹15 per one unofficial guide) left out. Old title was
// cut off ("जन्मस्थान प्रमाणपत्र) 20") and was completed as "2026".
export const klNativityCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "केरल", href: "/states/kerala.html" },
    { label: "नेटिविटी सर्टिफिकेट" },
  ],
  docHi: "नेटिविटी सर्टिफिकेट",
  title: "नेटिविटी सर्टिफिकेट (जन्मस्थान प्रमाणपत्र) 2026",
  description: "यह प्रमाणित करता है कि आवेदक केरल का मूल निवासी है — राज्य-कोटा प्रवेश (KEAM), सरकारी नौकरी और छात्रवृत्तियों के लिए। e-District/अक्षय से आवेदन, कागज़, 5 कार्य दिवस, आजीवन वैध।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "केरल नेटिविटी सर्टिफिकेट: किसे चाहिए, e-District पर आवेदन, कागज़ और समय",
  lead: "केरल का नेटिविटी सर्टिफिकेट यह प्रमाणित करता है कि आवेदक केरल का मूल निवासी (Keralite) है। यह KEAM जैसे दाखिलों में राज्य कोटा, नौकरी और राज्य की योजनाओं में मांगा जाता है। आवेदन e-District Kerala पोर्टल पर खुद या अक्षय केंद्र से होता है; e-District के अनुसार यह 5 कार्य दिवस में बनता है और आजीवन मान्य है।",
  facts: [
    ["पोर्टल", "<a href=\"https://edistrict.kerala.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">edistrict.kerala.gov.in</a>"],
    ["जारी करते हैं", "विलेज ऑफिसर / तहसीलदार (राजस्व विभाग)"],
    ["समय", "5 कार्य दिवस"],
    ["वैधता", "आजीवन"],
  ],
  notice: "केरल विधानसभा ने फरवरी 2026 में नेटिविटी कार्ड विधेयक पास किया था, जिसमें बार-बार सर्टिफिकेट बनवाने की जगह एक स्थायी नेटिविटी कार्ड का प्रस्ताव है। 15 अक्टूबर 2026 तक हमें यह कार्ड शुरू होने की आधिकारिक सूचना नहीं मिली; तब तक नेटिविटी सर्टिफिकेट ही e-District से बनता है।",
  sections: [
    {
      id: "fark",
      title: "नेटिविटी, डोमिसाइल और रेज़िडेंस में फर्क",
      table: {
        head: ["प्रमाणपत्र", "क्या बताता है", "समय", "वैधता"],
        rows: [
          ["<strong>Nativity</strong>", "व्यक्ति केरल का मूल निवासी है (आम तौर पर केरल में जन्म या केरल मूल के माता-पिता)", "5 कार्य दिवस", "आजीवन"],
          ["Domicile", "व्यक्ति का स्थायी निवास केरल में है", "3 कार्य दिवस", "आजीवन"],
          ["Residence", "व्यक्ति अभी इस पते पर रहता है", "3 कार्य दिवस", "खास काम के लिए"],
        ],
      },
      callout: { kind: "info", html: "फॉर्म या दाखिले की सूचना में जो प्रमाणपत्र लिखा हो, वही बनवाएं। KEAM में केरल मूल (Keralite) का दावा करने के लिए नेटिविटी का प्रमाण मांगा जाता है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District के अनुसार)",
      list: [
        "शपथ पत्र (affidavit)",
        "जन्म प्रमाण पत्र",
        "राशन कार्ड",
        "आवेदक का स्कूल प्रमाण पत्र (जैसे SSLC)",
        "माता-पिता का स्कूल प्रमाण पत्र (अगर माता-पिता के आधार पर दावा है)",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<a href=\"https://edistrict.kerala.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">edistrict.kerala.gov.in</a> पर आधार से जुड़े मोबाइल से वन-टाइम रजिस्ट्रेशन करें, या नज़दीकी अक्षय केंद्र जाएं।",
        "प्रमाणपत्रों की सूची में Nativity Certificate चुनें।",
        "फॉर्म भरें और कागज़ अपलोड करें (हर पेज 100 KB तक, अधिकतम 10 पेज)।",
        "ऑनलाइन फीस भरें। भुगतान फेल हो तो पैसा 7-10 कार्य दिवस में वापस आता है; Transaction History में देखें।",
        "विलेज ऑफिसर जांच करते हैं। Track Application से स्टेटस देखें और मंज़ूरी के बाद डिजिटल हस्ताक्षर वाला प्रमाणपत्र डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "प्रमाणपत्र असली है या नहीं, यह e-District पोर्टल के Certificate verification से जांचा जा सकता है। पोर्टल की समस्या के लिए KSITM: 0471 2525444, edistrict.ksitm@kerala.gov.in।" },
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>गलत प्रमाणपत्र:</strong> Residence या Domicile बनवा लेना, जबकि Nativity मांगा गया था।",
        "<strong>नाम में फर्क:</strong> जन्म प्रमाण पत्र, SSLC और आधार में नाम/जन्म तारीख का मिलान करें।",
        "<strong>बाहर पैदा हुए बच्चे:</strong> केरल के बाहर जन्मे आवेदक माता-पिता के केरल मूल के प्रमाण (जैसे उनका SSLC) के साथ आवेदन करें; विलेज ऑफिसर से पहले पूछ लें।",
      ],
    },
  ],
  official: [
    { href: "https://edistrict.kerala.gov.in/", title: "e-District Kerala", note: "आवेदन, स्टेटस, सत्यापन" },
    { href: "https://www.kerala.gov.in/", title: "केरल सरकार" },
  ],
  faq: [
    { q: "केरल नेटिविटी सर्टिफिकेट कितने दिन में बनता है?", a: "e-District Kerala के अनुसार 5 कार्य दिवस में।" },
    { q: "नेटिविटी सर्टिफिकेट कितने समय तक मान्य है?", a: "e-District के अनुसार आजीवन। फिर भी कुछ संस्थान हाल का प्रमाणपत्र मांग सकते हैं।" },
    { q: "नेटिविटी और डोमिसाइल में क्या फर्क है?", a: "नेटिविटी बताता है कि आप केरल मूल के हैं; डोमिसाइल बताता है कि आपका स्थायी निवास केरल में है। जो फॉर्म मांगे, वही बनवाएं।" },
    { q: "क्या नेटिविटी कार्ड आ गया है?", a: "विधानसभा ने फरवरी 2026 में नेटिविटी कार्ड विधेयक पास किया था, पर 15 अक्टूबर 2026 तक हमें कार्ड जारी होने की आधिकारिक सूचना नहीं मिली। अभी नेटिविटी सर्टिफिकेट ही बनता है।" },
    { q: "कहां आवेदन करें?", a: "edistrict.kerala.gov.in पर खुद, या नज़दीकी अक्षय केंद्र से।" },
  ],
  related: [
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल डोमिसाइल सर्टिफिकेट", text: "डोमिसाइल, नेटिविटी, रेज़िडेंस" },
    { href: "/states/kerala-income-certificate.html", emoji: "💰", title: "केरल आय प्रमाण पत्र", text: "e-District से" },
    { href: "/states/kerala-caste-certificate.html", emoji: "🪪", title: "केरल जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
    { href: "/states/kerala-birth-certificate.html", emoji: "👶", title: "केरल जन्म प्रमाण पत्र", text: "नेटिविटी के लिए ज़रूरी" },
    { href: "/service/kl-social-security-pension.html", emoji: "👵", title: "केरल सामाजिक सुरक्षा पेंशन", text: "पेंशन योजनाएं" },
  ],
  aside: [
    { href: "https://edistrict.kerala.gov.in/", label: "🏛️ e-District Kerala" },
    { href: "/states/kerala.html", label: "🗺️ केरल की सेवाएं" },
  ],
};
