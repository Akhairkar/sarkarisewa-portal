import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; sevasindhu.karnataka.gov.in and dwcd.karnataka
// .gov.in not opened from the sandbox, search extracts used):
// businesstoday.in (registration started 19 July 2023), vikaspedia.in,
// cleartax.in, policybazaar.com, studycafe.in (₹2,000 a month to the woman
// head of family on an Antyodaya/BPL/APL ration card; excluded if she or her
// husband is an income-tax payer or files GST returns; one woman per family;
// apply on Seva Sindhu or free at Grama One / Karnataka One / Bangalore One
// centres; documents: Aadhaar of applicant and husband, ration card, bank
// passbook, Aadhaar-linked mobile), etvbharat.com, thesouthfirst.com,
// ianslive.in (Dec 2025: minister admitted February and March instalments
// were unpaid), organiser.org (22 May 2026: Karnataka High Court notice to
// the government on delayed payments), deccanherald.com (e-KYC/Aadhaar/NPCI
// mapping problems held back payments). No report after May 2026 on whether
// the pending instalments were paid; SMS status numbers and helpline were not
// confirmed from an official page and are left out.
export const kaGruhaLakshmiYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "कर्नाटक", href: "/states/karnataka.html" },
    { label: "गृह लक्ष्मी योजना" },
  ],
  docHi: "गृह लक्ष्मी योजना",
  title: "गृह लक्ष्मी योजना",
  description: "कर्नाटक के पात्र परिवारों की महिला मुखिया को ₹2,000 प्रतिमाह की आर्थिक सहायता। पात्रता, सेवा सिंधु/ग्राम वन पर आवेदन, पैसा न आए तो क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "गृह लक्ष्मी योजना (कर्नाटक): महिला मुखिया को हर महीने ₹2,000, पात्रता, आवेदन और रुकी किस्त",
  lead: "गृह लक्ष्मी कर्नाटक सरकार की गारंटी योजना है, जिसमें राशन कार्ड में परिवार की मुखिया दर्ज महिला के बैंक खाते में हर महीने ₹2,000 भेजे जाते हैं। महिला या उसका पति आयकरदाता या GST रिटर्न भरने वाला हो तो लाभ नहीं मिलता। आवेदन सेवा सिंधु पोर्टल या ग्राम वन/कर्नाटक वन/बेंगलुरु वन केंद्र पर मुफ्त होता है।",
  facts: [
    ["राज्य", "कर्नाटक (महिला एवं बाल विकास विभाग)"],
    ["राशि", "₹2,000 प्रति माह"],
    ["कौन", "राशन कार्ड में दर्ज महिला मुखिया"],
    ["आवेदन", "सेवा सिंधु / ग्राम वन, मुफ्त"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "कर्नाटक की महिला जो अंत्योदय, BPL या APL <strong>राशन कार्ड में परिवार की मुखिया</strong> के रूप में दर्ज है",
        "एक परिवार से सिर्फ एक महिला",
        "महिला के नाम पर आधार से जुड़ा बैंक खाता",
      ],
      callout: { kind: "warn", html: "<strong>लाभ नहीं मिलेगा</strong> अगर महिला या उसका पति आयकर (Income Tax) भरता है या GST रिटर्न दाखिल करता है। सरकारी नौकरी/पेंशन वाली महिलाओं को भी आम तौर पर बाहर रखा गया है।" },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "पहले देखें कि राशन कार्ड में आप <strong>मुखिया</strong> दर्ज हैं। नहीं हैं तो खाद्य एवं नागरिक आपूर्ति विभाग में राशन कार्ड सुधार करवाएं।",
        "<strong>ऑनलाइन:</strong> <a href=\"https://sevasindhu.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">सेवा सिंधु</a> पोर्टल पर गृह लक्ष्मी सेवा चुनें और आधार व राशन कार्ड नंबर से आवेदन करें।",
        "<strong>ऑफलाइन:</strong> नज़दीकी ग्राम वन, कर्नाटक वन या बेंगलुरु वन केंद्र पर मुफ्त पंजीकरण कराएं।",
        "कागज़: महिला और पति का आधार, राशन कार्ड, बैंक पासबुक और आधार से जुड़ा मोबाइल नंबर।",
        "पावती/संदर्भ नंबर संभालें; इसी से स्टेटस पूछें।",
      ],
    },
    {
      id: "kist",
      title: "किस्त की स्थिति (2025-26)",
      list: [
        "दिसंबर 2025 में महिला एवं बाल विकास मंत्री ने विधानसभा में माना कि फरवरी और मार्च की दो किस्तें नहीं दी गई थीं।",
        "मई 2026 में कर्नाटक हाई कोर्ट ने भुगतान में देरी पर जनहित याचिका में राज्य सरकार को नोटिस जारी किया।",
        "15 अक्टूबर 2026 तक हमें ऐसी कोई आधिकारिक सूचना नहीं मिली कि ये बकाया किस्तें दे दी गई हैं। अपने खाते की स्थिति बैंक या CDPO कार्यालय से पूछें।",
      ],
    },
    {
      id: "paisa-ruka",
      title: "पैसा न आए तो क्या करें",
      steps: [
        "<strong>आधार सीडिंग और e-KYC:</strong> बैंक जाकर देखें कि खाता आधार से जुड़ा है और NPCI पर मैप है। कई महिलाओं का पैसा इसी वजह से अटका था।",
        "<strong>नाम का मिलान:</strong> आधार, राशन कार्ड और बैंक खाते में नाम एक जैसा हो।",
        "<strong>शिकायत:</strong> तालुक के बाल विकास परियोजना अधिकारी (CDPO) कार्यालय या ग्राम वन केंद्र पर आवेदन नंबर के साथ शिकायत दें।",
      ],
      callout: { kind: "info", html: "आवेदन मुफ्त है। फॉर्म भरने या किस्त \"चालू\" कराने के नाम पर कोई पैसा मांगे तो न दें।" },
    },
  ],
  official: [
    { href: "https://sevasindhu.karnataka.gov.in/", title: "सेवा सिंधु: कर्नाटक सेवा पोर्टल", note: "आवेदन" },
    { href: "https://dwcd.karnataka.gov.in/", title: "महिला एवं बाल विकास विभाग, कर्नाटक" },
  ],
  faq: [
    { q: "गृह लक्ष्मी योजना में कितना पैसा मिलता है?", a: "हर महीने ₹2,000, महिला मुखिया के आधार-लिंक बैंक खाते में।" },
    { q: "कौन आवेदन नहीं कर सकता?", a: "जिस महिला या उसके पति आयकर भरते हों या GST रिटर्न दाखिल करते हों। एक परिवार से सिर्फ एक महिला लाभ ले सकती है।" },
    { q: "आवेदन कहां करें?", a: "सेवा सिंधु पोर्टल पर ऑनलाइन, या ग्राम वन/कर्नाटक वन/बेंगलुरु वन केंद्र पर मुफ्त।" },
    { q: "राशन कार्ड में मैं मुखिया नहीं हूं, क्या करूं?", a: "योजना राशन कार्ड की मुखिया महिला को ही मिलती है। पहले खाद्य विभाग में राशन कार्ड में मुखिया का नाम बदलवाएं, फिर आवेदन करें।" },
    { q: "फरवरी-मार्च की किस्त नहीं आई, क्या मिलेगी?", a: "सरकार ने दिसंबर 2025 में माना था कि ये किस्तें बकाया हैं, और मामला हाई कोर्ट में भी गया। भुगतान की ताज़ा जानकारी CDPO कार्यालय या विभाग से लें।" },
  ],
  related: [
    { href: "/states/karnataka.html", emoji: "🗺️", title: "कर्नाटक की सेवाएं", text: "राज्य की सभी गाइड" },
    { href: "/states/karnataka-ration-card.html", emoji: "🍚", title: "कर्नाटक राशन कार्ड", text: "मुखिया का नाम और सुधार" },
    { href: "/service/ka-caste-income-certificate.html", emoji: "🪪", title: "जाति एवं आय प्रमाणपत्र", text: "कर्नाटक, नाडकचेरी से" },
    { href: "/states/karnataka-senior-citizen-card.html", emoji: "👵", title: "कर्नाटक वृद्धा पेंशन", text: "बुज़ुर्गों के लिए" },
  ],
  aside: [
    { href: "https://sevasindhu.karnataka.gov.in/", label: "📝 सेवा सिंधु" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
