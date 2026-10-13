import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; the MeeSeva portal itself did not open from our
// checker, so we used district pages on telangana.gov.in and search extracts):
// - medak.telangana.gov.in/service/revenue-services/ and
//   narayanpet.telangana.gov.in/service/caste-certificate/ (district
//   administration): Revenue Department services through MeeSeva, including
//   "Community and Date of Birth" ST / SC / BC, manual application, Nativity
//   certificate, Integrated Certificate, OBC Certificate, EBC Certificate,
//   Duplicate copy of certificate - Integrated, ISES services - Integrated
//   Certificate, and Prajavani.
// - rajannasircilla.telangana.gov.in/service/meeseva/: MeeSeva single entry
//   portal; caste, income, EWS, creamy layer and non-creamy layer certificates;
//   link ts.meeseva.telangana.gov.in/meeseva/home.htm.
// - Search extracts (secondary guides, consistent with each other): Tahsildar
//   issues the caste certificate after field verification by the revenue staff;
//   MeeSeva sends a transaction / application number by SMS.
// Left out (not confirmable on an official page we could open): fee, time
// limit in days, validity, a list of mandatory documents, a helpline number.
export const telanganaCasteCertificate: DocGuide = {
  state: { slug: "telangana", hi: "तेलंगाना" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Telangana Caste Certificate 2026: Apply & Status",
  description: "तेलंगाना जाति प्रमाण पत्र (Community / Integrated Certificate) online apply 2026 at MeeSeva Telangana. SC/ST/BC सेवा, OBC व NCL प्रमाण पत्र, दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तेलंगाना जाति प्रमाण पत्र 2026: MeeSeva पर Community / Integrated Certificate, OBC प्रमाण पत्र और स्टेटस",
  lead: "तेलंगाना में जाति प्रमाण पत्र राजस्व विभाग की <strong>MeeSeva</strong> सेवा से बनता है। SC, ST और BC के लिए <strong>Community and Date of Birth</strong> प्रमाण पत्र और <strong>Integrated Certificate</strong> की सेवाएं हैं; आवेदन MeeSeva केंद्र पर या MeeSeva पोर्टल से होता है और राजस्व कर्मचारियों की जांच के बाद <strong>तहसीलदार</strong> प्रमाण पत्र देते हैं। केंद्र की नौकरी के लिए अलग <strong>OBC Certificate</strong> सेवा है।",
  facts: [
    ["पोर्टल", '<a href="https://ts.meeseva.telangana.gov.in/meeseva/home.htm" target="_blank" rel="noopener nofollow">ts.meeseva.telangana.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (राजस्व विभाग)"],
    ["सेवाएं", "Community & DOB (SC/ST/BC), Integrated"],
    ["केंद्र के लिए", "OBC Certificate (अलग सेवा)"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> MeeSeva पर SC, ST और BC की <strong>अलग-अलग</strong> Community and Date of Birth सेवाएं हैं, और केंद्र की नौकरी के लिए अलग OBC Certificate सेवा है। आवेदन से पहले केंद्र के ऑपरेटर को साफ बताएं कि प्रमाण पत्र किस काम के लिए है।",
  sections: [
    {
      id: "kya-hai",
      title: "MeeSeva पर जाति से जुड़ी सेवाएं",
      table: {
        head: ["सेवा (ज़िला प्रशासन की MeeSeva सूची)", "कब चाहिए"],
        rows: [
          ["<strong>Community and Date of Birth: SC / ST / BC</strong>", "जाति और जन्मतिथि का प्रमाण: राज्य की योजनाएं, छात्रवृत्ति, दाखिला, नौकरी"],
          ["<strong>Integrated Certificate</strong>", "जाति, मूल निवास और जन्मतिथि का एक साथ प्रमाण"],
          ["<strong>OBC Certificate</strong>", "केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण"],
          ["<strong>Non-Creamy Layer / Creamy Layer Certificate</strong>", "OBC आरक्षण में क्रीमी लेयर से बाहर होने का प्रमाण"],
          ["<strong>EWS Certificate</strong>", "आर्थिक रूप से कमजोर वर्ग का आरक्षण"],
          ["<strong>Duplicate Copy – Integrated</strong>", "पहले बने Integrated Certificate की कॉपी"],
        ],
      },
      callout: { kind: "info", html: "केंद्र की भर्ती में OBC आरक्षण तभी मिलता है जब आपकी जाति <strong>केंद्रीय OBC सूची</strong> में हो और आप <strong>नॉन-क्रीमी लेयर</strong> में हों। राज्य की BC सूची और केंद्र की OBC सूची एक जैसी नहीं हैं, इसलिए भर्ती विज्ञापन में मांगा प्रारूप देखकर OBC Certificate बनवाएं।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      intro: "MeeSeva की आधिकारिक कागज़ सूची हम खोल नहीं पाए। आवेदन के समय केंद्र पर सूची ज़रूर देखें; आम तौर पर ये काम आते हैं:",
      list: [
        "<strong>आधार कार्ड</strong> और <strong>राशन/खाद्य सुरक्षा कार्ड</strong>",
        "<strong>जाति का पुराना रिकॉर्ड</strong>: पिता या परिवार के किसी सदस्य का जाति प्रमाण पत्र, या जाति लिखा स्कूल रिकॉर्ड",
        "<strong>जन्मतिथि का प्रमाण</strong>: SSC मेमो, स्कूल रिकॉर्ड या जन्म प्रमाण पत्र",
        "<strong>पते का प्रमाण</strong> और फोटो",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> परिवार में किसी का पुराना जाति प्रमाण पत्र सबसे काम का कागज़ है। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        "पास के <strong>MeeSeva केंद्र</strong> पर कागज़ लेकर जाएं, या <a href=\"https://ts.meeseva.telangana.gov.in/meeseva/home.htm\" target=\"_blank\" rel=\"noopener nofollow\">MeeSeva पोर्टल</a> पर लॉगिन करें।",
        "राजस्व विभाग (Revenue) की सेवाओं में अपनी श्रेणी की <strong>Community and Date of Birth (SC/ST/BC)</strong>, <strong>Integrated Certificate</strong> या <strong>OBC Certificate</strong> चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और फीस भरें। रसीद लें; ट्रांज़ैक्शन/आवेदन नंबर SMS से भी आता है।",
        "राजस्व कर्मचारी आपके बताए विवरण की जांच करते हैं, फिर तहसीलदार प्रमाण पत्र जारी करते हैं।",
        "मंज़ूरी के बाद प्रमाण पत्र MeeSeva केंद्र/पोर्टल से लें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और शिकायत",
      list: [
        "<strong>स्टेटस:</strong> MeeSeva पोर्टल पर ट्रांज़ैक्शन/आवेदन नंबर से, या उसी केंद्र पर पूछें।",
        "<strong>कॉपी खो गई:</strong> MeeSeva पर \"Duplicate copy of certificate – Integrated\" सेवा है।",
        "<strong>शिकायत:</strong> राजस्व विभाग की MeeSeva सूची में <strong>Prajavani</strong> (जन शिकायत) सेवा भी है; ज़्यादा देरी हो तो रसीद लेकर तहसीलदार कार्यालय में संपर्क करें।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
      callout: { kind: "warn", html: "फीस, समय सीमा और वैधता हमें किसी आधिकारिक पेज पर पक्की नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। केंद्र पर रसीद में लिखी राशि ही दें।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत श्रेणी की सेवा चुनी (जैसे BC की जगह SC)", "अपनी श्रेणी की सही Community and Date of Birth सेवा में आवेदन करें"],
          ["जाति का कोई पुराना रिकॉर्ड नहीं", "परिवार के सदस्य का प्रमाण पत्र या जाति लिखा स्कूल रिकॉर्ड खोजें"],
          ["केंद्र की नौकरी के लिए राज्य वाला प्रमाण पत्र लगा दिया", "OBC Certificate (और नॉन-क्रीमी लेयर) अलग से बनवाएं"],
          ["नाम/जाति की वर्तनी अलग", "सभी कागज़ों में एक जैसी वर्तनी रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", title: "MeeSeva Telangana पोर्टल" },
    { href: "https://medak.telangana.gov.in/service/revenue-services/", title: "राजस्व विभाग की MeeSeva सेवाएं (ज़िला मेडक)" },
    { href: "https://rajannasircilla.telangana.gov.in/service/meeseva/", title: "MeeSeva से प्रमाण पत्र (ज़िला राजन्ना सिरसिला)" },
  ],
  faq: [
    { q: "तेलंगाना में जाति प्रमाण पत्र कहां बनता है?", a: "MeeSeva केंद्र पर या MeeSeva पोर्टल से। राजस्व कर्मचारियों की जांच के बाद तहसीलदार प्रमाण पत्र देते हैं।" },
    { q: "MeeSeva पर कौन सी सेवा चुनें?", a: "अपनी श्रेणी की Community and Date of Birth सेवा (SC, ST या BC), या जहां जाति, निवास और जन्मतिथि एक साथ चाहिए वहां Integrated Certificate।" },
    { q: "केंद्र की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "MeeSeva पर अलग OBC Certificate सेवा है; नॉन-क्रीमी लेयर प्रमाण पत्र भी अलग सेवा है।" },
    { q: "प्रमाण पत्र खो जाए तो?", a: "MeeSeva पर Duplicate copy of certificate – Integrated सेवा से कॉपी लें।" },
    { q: "फीस और समय कितना लगता है?", a: "हमें आधिकारिक पेज पर पक्की संख्या नहीं मिली। MeeSeva केंद्र पर रसीद में लिखी फीस दें और वहीं अनुमानित समय पूछें।" },
  ],
  related: [
    { href: "/states/telangana-income-certificate.html", emoji: "💰", title: "तेलंगाना आय प्रमाण पत्र", text: "MeeSeva पर आवेदन, 1 साल वैधता" },
    { href: "/states/telangana-domicile-certificate.html", emoji: "🏠", title: "तेलंगाना निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", label: "📝 MeeSeva Telangana" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
