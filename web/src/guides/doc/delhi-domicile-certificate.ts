import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; revenue.delhi.gov.in and dmnorthwest.delhi.gov.in
// do not open from our checker, so we used search extracts of those pages):
// - dmnorthwest.delhi.gov.in "Domicile Certificate" (?p=2861, search extract):
//   eligibility: citizen of India residing continuously for the last three
//   years within NCT of Delhi; identity proofs (Aadhaar, PAN, voter ID,
//   passport, ration card with photo, driving licence, any Govt recognised
//   document); scanned self-declaration uploaded online and the original
//   submitted to the SDM/Tehsildar/CSC.
// - revenue.delhi.gov.in "Domicile Certificate" pages (/revenue/domicile-
//   certificate-0 and /hi/node/6465, search extracts): proof of continuous
//   residence for the last 3 years (ration card, identity card, school
//   certificate; education certificate, electricity bill, house tax, water
//   bill); educational certificates of three consecutive years alone not
//   accepted; minors: parents' proofs, birth certificate under 5 years;
//   photo; older FAQ asks for attestation by a Class-I officer knowing the
//   applicant for 3+ years; no fee; online upload PDF/JPG up to 200 KB, then
//   original documents verified at the sub-division certificate counter
//   10 AM-1 PM within seven days.
// - dmeast.delhi.gov.in/service/domicile-certificate/ (opened directly):
//   service listed with e-District link; SDM Court, East Delhi.
// - e-District Delhi URL as used in delhi-income-certificate.ts.
// Left out (not confirmable on a current official page): time limit in days
// (a secondary guide says 15 working days), validity period.
export const delhiDomicileCertificate: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Delhi Domicile Certificate 2026: Apply & Status",
  description: "दिल्ली डोमिसाइल (निवास) प्रमाण पत्र 2026: पिछले 3 साल से लगातार दिल्ली में निवास की शर्त, ज़रूरी कागज़, e-District Delhi पर आवेदन, कोई फीस नहीं, SDM ऑफिस में मूल कागज़ों की जांच।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "दिल्ली डोमिसाइल प्रमाण पत्र 2026: 3 साल की शर्त, कागज़ और e-District पर आवेदन",
  lead: "दिल्ली में डोमिसाइल (निवास) प्रमाण पत्र राजस्व विभाग देता है। ज़िला प्रशासन के अनुसार यह उस भारतीय नागरिक को मिलता है जो <strong>पिछले 3 साल से लगातार</strong> दिल्ली (NCT) में रह रहा है। आवेदन <strong>e-District Delhi</strong> पर ऑनलाइन या अपने इलाके के SDM कार्यालय से होता है, और राजस्व विभाग के अनुसार <strong>कोई फीस नहीं</strong> है।",
  facts: [
    ["शर्त", "पिछले 3 साल से लगातार दिल्ली में निवास"],
    ["पोर्टल", '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a>'],
    ["फीस", "कोई फीस नहीं (राजस्व विभाग)"],
    ["दफ्तर", "इलाके का SDM कार्यालय"],
  ],
  notice: "<strong>ऑनलाइन आवेदन के बाद भी दफ्तर जाना होता है:</strong> राजस्व विभाग के अनुसार ऑनलाइन आवेदन के बाद <strong>7 दिन के अंदर</strong> किसी भी कामकाजी दिन सुबह 10 से दोपहर 1 बजे के बीच अपने सब-डिवीज़न के सर्टिफिकेट काउंटर पर मूल कागज़ दिखाने होते हैं। स्व-घोषणा पत्र की मूल प्रति भी SDM/तहसीलदार/CSC में जमा होती है।",
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "आवेदक <strong>भारत का नागरिक</strong> हो, और",
        "वह <strong>पिछले 3 साल से लगातार</strong> दिल्ली (NCT) में रह रहा हो",
        "नाबालिग के लिए <strong>माता-पिता</strong> के पहचान और निवास के कागज़ लगते हैं; 5 साल से छोटे बच्चे के लिए जन्म प्रमाण पत्र लगाया जा सकता है",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>फोटो</strong> (ऑनलाइन आवेदन में लाभार्थी की फोटो अपलोड करनी होती है)",
        "<strong>पहचान पत्र</strong>: आधार, PAN, वोटर कार्ड, पासपोर्ट, फोटो वाला राशन कार्ड, ड्राइविंग लाइसेंस या कोई सरकारी पहचान पत्र",
        "<strong>पिछले 3 साल के लगातार निवास का सबूत</strong>: राशन कार्ड, बिजली बिल, पानी बिल, हाउस टैक्स, स्कूल/शिक्षा का प्रमाण पत्र आदि",
        "<strong>स्व-घोषणा पत्र (Self-Declaration)</strong>: स्कैन ऑनलाइन, मूल प्रति दफ्तर में",
      ],
      callout: { kind: "warn", html: "राजस्व विभाग के अनुसार <strong>सिर्फ लगातार तीन साल के शिक्षा प्रमाण पत्र</strong> के आधार पर डोमिसाइल नहीं बनता; साथ में बिजली/पानी बिल, राशन कार्ड जैसे निवास के सबूत भी लगाएं। राजस्व विभाग के पुराने FAQ में फॉर्म को किसी प्रथम श्रेणी (Class-I) अधिकारी से सत्यापित कराने की बात है; पोर्टल का फॉर्म जो मांगे वही करें।" },
    },
    {
      id: "online",
      title: "e-District Delhi पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a> खोलें और आधार या e-District रजिस्ट्रेशन से लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Domicile Certificate</strong> चुनें।",
        "फॉर्म में नाम, पता और दिल्ली में रहने की अवधि भरें।",
        "कागज़ <strong>PDF या JPG</strong> में अपलोड करें; हर फाइल ज़्यादा से ज़्यादा <strong>200 KB</strong> की हो।",
        "आवेदन जमा करके पावती/आवेदन नंबर नोट करें।",
        "<strong>7 दिन के अंदर</strong> मूल कागज़ और स्व-घोषणा की मूल प्रति लेकर अपने सब-डिवीज़न (SDM) के सर्टिफिकेट काउंटर पर जाएं (सुबह 10 से दोपहर 1 बजे)।",
        "मंज़ूरी के बाद प्रमाण पत्र e-District पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "फाइल 200 KB से छोटी करने के लिए: <a href=\"/tools/document-compressor.html\">Document Compressor</a>। ऑफलाइन मदद के लिए अपने इलाके का SDM कार्यालय या CSC: <a href=\"/service/csc-locator/delhi.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "e-District Delhi पर लॉगिन करके आवेदन की स्थिति देखें।",
        "मूल कागज़ों की जांच के बाद ही आवेदन आगे बढ़ता है; 7 दिन में काउंटर पर न जाने से आवेदन अटक सकता है।",
        "प्रमाण पत्र में नाम, पिता का नाम और पता जांच लें।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["3 साल का लगातार निवास साबित नहीं", "हर साल के बिजली/पानी बिल, राशन कार्ड या हाउस टैक्स की रसीदें लगाएं"],
          ["सिर्फ स्कूल के प्रमाण पत्र लगाए", "साथ में निवास के दूसरे सबूत भी लगाएं"],
          ["7 दिन में मूल कागज़ नहीं दिखाए", "SDM कार्यालय से संपर्क करें; ज़रूरत हो तो दोबारा आवेदन करें"],
          ["फाइल 200 KB से बड़ी या धुंधली", "फाइल छोटी करें, पर पढ़ने लायक रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.delhi.gov.in/", title: "e-District Delhi (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://revenue.delhi.gov.in/revenue/domicile-certificate-0", title: "राजस्व विभाग दिल्ली: Domicile Certificate" },
    { href: "https://dmeast.delhi.gov.in/service/domicile-certificate/", title: "Domicile Certificate (ज़िला पूर्वी दिल्ली)" },
  ],
  faq: [
    { q: "दिल्ली डोमिसाइल के लिए कितने साल रहना ज़रूरी है?", a: "ज़िला प्रशासन के अनुसार आवेदक भारत का नागरिक हो और पिछले 3 साल से लगातार दिल्ली (NCT) में रह रहा हो।" },
    { q: "दिल्ली डोमिसाइल की फीस कितनी है?", a: "राजस्व विभाग के अनुसार कोई फीस नहीं लगती।" },
    { q: "क्या ऑनलाइन आवेदन के बाद दफ्तर जाना पड़ता है?", a: "हां। राजस्व विभाग के अनुसार 7 दिन के अंदर सुबह 10 से 1 बजे के बीच अपने सब-डिवीज़न के सर्टिफिकेट काउंटर पर मूल कागज़ दिखाने होते हैं।" },
    { q: "किराये पर रहते हैं, क्या डोमिसाइल बनेगा?", a: "शर्त 3 साल के लगातार निवास की है, मकान का मालिक होना नहीं। किराये के घर के बिजली/पानी बिल, राशन कार्ड या दूसरे सबूत से 3 साल का निवास दिखाएं।" },
    { q: "बच्चे का डोमिसाइल कैसे बनेगा?", a: "नाबालिग के लिए माता-पिता के पहचान और निवास के कागज़ लगते हैं; 5 साल से छोटे बच्चे का जन्म प्रमाण पत्र लगाया जा सकता है।" },
  ],
  related: [
    { href: "/states/delhi-caste-certificate.html", emoji: "📜", title: "दिल्ली जाति प्रमाण पत्र", text: "SC/ST/OBC, e-District पर" },
    { href: "/states/delhi-income-certificate.html", emoji: "💰", title: "दिल्ली आय प्रमाण पत्र", text: "कोई फीस नहीं" },
    { href: "/states/delhi-employment-exchange.html", emoji: "💼", title: "दिल्ली रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "200 KB तक, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.delhi.gov.in/", label: "📝 e-District Delhi पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
