import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; punjab.gov.in, connect.punjab.gov.in and
// dit.punjab.gov.in did not open from our checker):
// - Search-result extract of punjab.gov.in/wp-content/uploads/2025/11/
//   Punjab-Residence-Certificate.pdf (state service sheet, Nov 2025): Punjab
//   Residence Certificate, Department of Personnel; Govt. fee Rs 10,
//   facilitation fee Rs 75; identity proof (Aadhaar/e-Aadhaar, voter ID,
//   passport, driving licence, PAN) and address proof (passport, voter ID,
//   Aadhaar, or address certificate from a central/state government or PSU).
// - hoshiarpur.nic.in/service/residence-certificate/ (district administration):
//   purpose (proof of residence for resident quotas in educational institutions
//   and government service, jobs where local residents are preferred); apply at
//   the nearest Sewa Kendra / CSC; tehsil / sub-tehsil offices.
// - esewa.punjab.gov.in (reused from punjab-caste-certificate.ts, checked
//   13 Oct 2026): "Download Certificate", "Verify Certificate", "Track Status";
//   call 1100.
// Left out (not confirmable on an official page we could open): a fixed number
// of years of residence (only commercial and Q&A sites, conflicting), the RTS
// time limit for this service, the issuing officer's designation, validity.
export const punjabDomicileCertificate: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Punjab Domicile Certificate 2026: Apply & Status",
  description: "पंजाब निवास प्रमाण पत्र (Residence Certificate) 2026: सेवा केंद्र से आवेदन, ज़रूरी कागज़, ₹10 सरकारी फीस + ₹75 सुविधा शुल्क, e-Sewa पर स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "पंजाब निवास (Residence) प्रमाण पत्र 2026: सेवा केंद्र से आवेदन, कागज़, फीस और स्टेटस",
  lead: "पंजाब में निवास प्रमाण पत्र को Residence Certificate कहते हैं। इसके लिए नज़दीकी सेवा केंद्र (Sewa Kendra) या CSC पर आवेदन होता है। नवंबर 2025 की सरकारी सेवा-शीट के अनुसार इसमें ₹10 सरकारी फीस और ₹75 सुविधा शुल्क लगता है, और पहचान व पते का प्रमाण चाहिए। स्टेटस और डाउनलोड e-Sewa Punjab पर होता है।",
  facts: [
    ["आवेदन", "सेवा केंद्र / CSC"],
    ["शुल्क", "₹10 सरकारी फीस + ₹75 सुविधा शुल्क"],
    ["कागज़", "पहचान और पते का प्रमाण"],
    ["स्टेटस/डाउनलोड", '<a href="https://esewa.punjab.gov.in/" target="_blank" rel="noopener nofollow">esewa.punjab.gov.in</a>'],
  ],
  notice: "<strong>ध्यान दें:</strong> पंजाब में निवास के कितने साल ज़रूरी हैं, यह किसी मौजूदा सरकारी पेज पर साफ नहीं मिला। दाखिले या भर्ती में \"पंजाब निवासी\" की शर्त उस विज्ञापन/प्रॉस्पेक्टस में लिखी होती है, उसे ज़रूर पढ़ें। आवेदन से पहले सेवा केंद्र पर भी पूछ लें।",
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र क्या है और कहां काम आता है",
      intro: "होशियारपुर ज़िला प्रशासन के अनुसार यह इस बात का सबूत है कि प्रमाण पत्र रखने वाला व्यक्ति उस ज़िले/राज्य का निवासी है। इसकी ज़रूरत पड़ती है:",
      list: [
        "<strong>शिक्षण संस्थानों</strong> में निवासियों के कोटे में दाखिले के लिए",
        "<strong>सरकारी नौकरी</strong> में निवासियों के कोटे के लिए",
        "उन नौकरियों में जहां <strong>स्थानीय निवासियों को प्राथमिकता</strong> मिलती है",
      ],
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। SC/BC आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/punjab-caste-certificate.html\">पंजाब जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "सरकारी सेवा-शीट में दो तरह के प्रमाण मांगे गए हैं:",
      table: {
        head: ["प्रमाण", "इनमें से कोई एक"],
        rows: [
          ["<strong>पहचान</strong>", "आधार / ई-आधार, वोटर कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस, पैन कार्ड"],
          ["<strong>पता</strong>", "पासपोर्ट, वोटर कार्ड, आधार, या केंद्र/राज्य सरकार या PSU का पता प्रमाण पत्र"],
        ],
      },
      callout: { kind: "warn", html: "लंबे समय से पंजाब में रहने का सबूत (पुराना राशन कार्ड, ज़मीन/मकान के कागज़, स्कूल रिकॉर्ड) साथ ले जाएं। जांच में ये काम आते हैं, और कई भर्तियों में निवास की अवधि देखी जाती है।" },
    },
    {
      id: "aavedan",
      title: "सेवा केंद्र से आवेदन (स्टेप बाय स्टेप)",
      steps: [
        "अपने नज़दीकी <strong>सेवा केंद्र</strong> या CSC पर पहचान और पते के मूल कागज़ और उनकी फोटोकॉपी लेकर जाएं।",
        "वहां <strong>Residence Certificate</strong> का फॉर्म भरवाएं; नाम, पिता का नाम और पता आधार/वोटर कार्ड जैसा ही लिखवाएं।",
        "₹10 सरकारी फीस और ₹75 सुविधा शुल्क जमा करें और <strong>रसीद पर लिखा आवेदन नंबर</strong> संभालकर रखें।",
        "तहसील स्तर पर जांच होती है; कोई कागज़ मांगा जाए तो जल्दी जमा करें।",
        "मंज़ूरी के बाद प्रमाण पत्र सेवा केंद्र से लें या e-Sewa पोर्टल से डाउनलोड करें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        '<strong>स्टेटस:</strong> <a href="https://esewa.punjab.gov.in/" target="_blank" rel="noopener nofollow">esewa.punjab.gov.in</a> पर <strong>Track Status</strong> में आवेदन नंबर डालें।',
        "<strong>डाउनलोड:</strong> उसी पोर्टल पर <strong>Download Certificate</strong> से।",
        "<strong>सत्यापन:</strong> <strong>Verify Certificate</strong> से कोई भी संस्था प्रमाण पत्र की जांच कर सकती है।",
        "<strong>मदद:</strong> सेवा केंद्र हेल्पलाइन 1100।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पते का प्रमाण नहीं या पुराना पता", "आधार या वोटर कार्ड में मौजूदा पता अपडेट कराएं, फिर आवेदन करें"],
          ["कागज़ों में नाम/पिता का नाम अलग", "सब कागज़ों में एक जैसी जानकारी कराएं"],
          ["पंजाब में रहने का समय साबित नहीं हुआ", "पुराने राशन कार्ड, ज़मीन/मकान के कागज़ या स्कूल रिकॉर्ड जोड़ें"],
          ["गलत ज़िले में आवेदन", "उसी ज़िले के सेवा केंद्र में आवेदन करें जहां आप रहते हैं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://esewa.punjab.gov.in/", title: "e-Sewa Punjab (सेवा केंद्र आवेदन का स्टेटस, डाउनलोड, सत्यापन)" },
    { href: "https://hoshiarpur.nic.in/service/residence-certificate/", title: "Residence Certificate (ज़िला होशियारपुर)" },
    { href: "https://connect.punjab.gov.in/", title: "Connect Punjab (नागरिक सेवाएं)" },
  ],
  faq: [
    { q: "पंजाब में निवास प्रमाण पत्र कहां बनता है?", a: "नज़दीकी सेवा केंद्र या CSC पर आवेदन करें। स्टेटस और डाउनलोड esewa.punjab.gov.in पर होता है।" },
    { q: "पंजाब निवास प्रमाण पत्र की फीस कितनी है?", a: "नवंबर 2025 की सरकारी सेवा-शीट के अनुसार ₹10 सरकारी फीस और ₹75 सुविधा शुल्क।" },
    { q: "कौन से कागज़ चाहिए?", a: "पहचान का प्रमाण (आधार, वोटर कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस या पैन) और पते का प्रमाण (पासपोर्ट, वोटर कार्ड, आधार या सरकारी/PSU का पता प्रमाण पत्र)।" },
    { q: "पंजाब में कितने साल रहने पर निवास प्रमाण पत्र बनता है?", a: "किसी मौजूदा सरकारी पेज पर यह संख्या साफ नहीं मिली। जिस दाखिले या भर्ती के लिए चाहिए, उसके नियम पढ़ें और सेवा केंद्र पर पूछें।" },
  ],
  related: [
    { href: "/states/punjab-caste-certificate.html", emoji: "📜", title: "पंजाब जाति प्रमाण पत्र", text: "SC/BC प्रमाण पत्र" },
    { href: "/states/punjab-income-certificate.html", emoji: "💰", title: "पंजाब आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/punjab-employment-exchange.html", emoji: "💼", title: "पंजाब रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://esewa.punjab.gov.in/", label: "🔍 e-Sewa पर स्टेटस देखें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
