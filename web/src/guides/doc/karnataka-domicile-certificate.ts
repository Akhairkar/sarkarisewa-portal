import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; nadakacheri.karnataka.gov.in did not open from
// our checker, so we used district NIC pages):
// - tumkur.nic.in/en/service/residence-certificate/ (district administration,
//   undated): procedure (form + documents to the Revenue Department officer),
//   certificate "within 30 days"; documents: leaving certificate, residential
//   proof (ration card, voter ID, house tax, tax receipt), property papers of
//   parents/guardian, birth certificate, Aadhaar; under 18 the father's
//   domicile is compulsory; eligibility "permanent resident or living for more
//   than 6 years in the state"; issued by the Revenue Department officer under
//   the Taluk Office; domicile certificate can be made in only one State/UT;
//   form fields (name, father/guardian, sex, address, purpose, ration card
//   no.); link nadakacheri.karnataka.gov.in. The page's fee line ("45/- from
//   setu, affidavit around 200") was not used: it is informal and not
//   confirmed elsewhere.
// - gadag.nic.in/en/service/residence-certificate/: residence certificates are
//   issued at Atalji Janasnehi Kendras; apply at the hobli-level
//   Nadakacheri/AJSK or online through the Nadakacheri website; all Tahsildar
//   offices.
// - kolar.nic.in / udupi.nic.in residence-certificate pages: 777 hobli-level
//   AJSK (Nadakacheri) centres, Revenue Department, Deputy Commissioner in
//   charge at district level; Nadakacheri office at the Tahsildar's office.
// - Reused from karnataka-income-certificate.ts (portal search extract):
//   income and residence certificates are signed by the Deputy Tahsildar.
// Left out (not confirmable on a current official page): fee, Sakala time
// limit, validity.
export const karnatakaDomicileCertificate: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Karnataka Domicile Certificate 2026: Apply & Status",
  description: "कर्नाटक निवास (Residence) प्रमाण पत्र 2026: नाडकचेरी / अटलजी जनस्नेही केंद्र या ऑनलाइन आवेदन, ज़रूरी कागज़, उप-तहसीलदार, शर्तें और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "कर्नाटक निवास (Residence/Domicile) प्रमाण पत्र 2026: नाडकचेरी से आवेदन, कागज़ और शर्तें",
  lead: "कर्नाटक में निवास (Residence/Domicile) प्रमाण पत्र राजस्व विभाग की नाडकचेरी सेवा है। आवेदन होबली स्तर के <strong>अटलजी जनस्नेही केंद्र (AJSK / नाडकचेरी)</strong> पर या nadakacheri.karnataka.gov.in पर ऑनलाइन होता है, और प्रमाण पत्र पर <strong>उप-तहसीलदार</strong> हस्ताक्षर करते हैं। तुमकुर ज़िला प्रशासन के अनुसार यह कर्नाटक के स्थायी निवासियों या 6 साल से ज़्यादा समय से राज्य में रह रहे लोगों को मिलता है।",
  facts: [
    ["पोर्टल", '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a>'],
    ["ऑफलाइन", "नाडकचेरी / अटलजी जनस्नेही केंद्र"],
    ["हस्ताक्षर", "उप-तहसीलदार (Deputy Tahsildar)"],
    ["शर्त (तुमकुर ज़िला)", "स्थायी निवासी या 6+ साल निवास"],
  ],
  notice: "<strong>ध्यान दें:</strong> डोमिसाइल प्रमाण पत्र सिर्फ <strong>एक ही राज्य/केंद्र शासित प्रदेश</strong> से बनवाया जा सकता है; दो जगह से बनवाना अपराध है (तुमकुर ज़िला पेज)। दाखिले (जैसे KEA) या भर्ती में \"कर्नाटक का उम्मीदवार\" की शर्त उनकी सूचना में अलग दी होती है, वह भी पढ़ें।",
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र किस काम आता है",
      intro: "तुमकुर ज़िला पेज के अनुसार यह प्रमाण पत्र बताता है कि आप लंबे समय से किसी जगह रह रहे हैं और उस राज्य के स्थायी निवासी हैं। यह इन कामों में मांगा जाता है:",
      list: [
        "<strong>शिक्षण संस्थानों</strong> में दाखिला",
        "<strong>नौकरी</strong> से जुड़े काम",
        "नया राशन कार्ड, ड्राइविंग लाइसेंस, पासपोर्ट जैसी सेवाएं",
      ],
      callout: { kind: "info", html: "जाति और आय प्रमाण पत्र भी इन्हीं नाडकचेरी केंद्रों से बनते हैं: <a href=\"/states/karnataka-caste-certificate.html\">कर्नाटक जाति प्रमाण पत्र</a>, <a href=\"/states/karnataka-income-certificate.html\">कर्नाटक आय प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "तुमकुर ज़िला पेज पर दी गई सूची:",
      list: [
        "<strong>स्कूल छोड़ने का प्रमाण पत्र (Leaving Certificate)</strong> की फोटोकॉपी",
        "<strong>निवास का प्रमाण</strong>: राशन कार्ड, वोटर ID, घर टैक्स या टैक्स की रसीद",
        "माता-पिता या अभिभावक के नाम की <strong>संपत्ति के कागज़</strong>",
        "<strong>जन्म प्रमाण पत्र</strong>",
        "<strong>आधार कार्ड</strong>",
      ],
      callout: { kind: "warn", html: "आवेदक की उम्र <strong>18 साल से कम</strong> हो तो <strong>पिता का डोमिसाइल</strong> ज़रूरी है। फॉर्म में राशन कार्ड नंबर और प्रमाण पत्र का उद्देश्य (purpose) भी लिखना होता है।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "अपने होबली के <strong>नाडकचेरी / अटलजी जनस्नेही केंद्र</strong> या तहसील कार्यालय के नाडकचेरी काउंटर पर कागज़ लेकर जाएं, या <a href=\"https://nadakacheri.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nadakacheri.karnataka.gov.in</a> पर ऑनलाइन आवेदन करें।",
        "<strong>Residence Certificate</strong> चुनें और फॉर्म में नाम, पिता/अभिभावक का नाम, पता, उद्देश्य और राशन कार्ड नंबर भरें।",
        "ऊपर दिए कागज़ जमा/अपलोड करें, काउंटर या पोर्टल पर बताया गया शुल्क दें और <strong>पावती</strong> लें।",
        "राजस्व विभाग की जांच के बाद उप-तहसीलदार के हस्ताक्षर से प्रमाण पत्र जारी होता है।",
      ],
      html: "<p>तुमकुर ज़िला पेज के अनुसार प्रमाण पत्र आम तौर पर <strong>30 दिन के भीतर</strong> मिल जाता है। फीस का कोई मौजूदा सरकारी आंकड़ा हमें नहीं मिला, इसलिए यहां राशि नहीं लिखी है; पावती पर लिखी फीस ही दें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "नाडकचेरी पोर्टल पर पावती नंबर से आवेदन की स्थिति देखें, या उसी केंद्र पर पूछें जहां आवेदन किया था।",
        "प्रमाण पत्र मिलने पर नाम, पिता का नाम और पता जांच लें। गलती हो तो तुरंत उसी केंद्र में सुधार के लिए कहें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["निवास का प्रमाण कमज़ोर", "राशन कार्ड, घर टैक्स की रसीद और माता-पिता की संपत्ति के कागज़ साथ लगाएं"],
          ["18 साल से कम उम्र, पिता का डोमिसाइल नहीं", "पहले पिता का डोमिसाइल बनवाएं या उसकी कॉपी लगाएं"],
          ["दूसरे राज्य का डोमिसाइल पहले से है", "डोमिसाइल सिर्फ एक राज्य से बन सकता है; सही राज्य चुनें"],
          ["गलत होबली/तहसील में आवेदन", "जहां आप रहते हैं, उसी होबली के केंद्र में आवेदन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://nadakacheri.karnataka.gov.in/", title: "नाडकचेरी / अटलजी जनस्नेही केंद्र पोर्टल (आवेदन, स्टेटस)" },
    { href: "https://tumkur.nic.in/en/service/residence-certificate/", title: "Residence Certificate: कागज़ और शर्तें (ज़िला तुमकुर)" },
    { href: "https://gadag.nic.in/en/service/residence-certificate/", title: "Residence Certificate (ज़िला गदग)" },
    { href: "https://kolar.nic.in/en/service/residence-certificate/", title: "Residence Certificate: नाडकचेरी व्यवस्था (ज़िला कोलार)" },
  ],
  faq: [
    { q: "कर्नाटक में निवास प्रमाण पत्र कहां बनता है?", a: "होबली के नाडकचेरी / अटलजी जनस्नेही केंद्र पर, या nadakacheri.karnataka.gov.in पर ऑनलाइन।" },
    { q: "कर्नाटक डोमिसाइल के लिए कितने साल रहना ज़रूरी है?", a: "तुमकुर ज़िला पेज के अनुसार आवेदक कर्नाटक का स्थायी निवासी हो या 6 साल से ज़्यादा समय से राज्य में रह रहा हो। दाखिले/भर्ती की अपनी शर्तें अलग हो सकती हैं।" },
    { q: "कौन से कागज़ चाहिए?", a: "स्कूल छोड़ने का प्रमाण पत्र, निवास का प्रमाण (राशन कार्ड/वोटर ID/घर टैक्स), माता-पिता की संपत्ति के कागज़, जन्म प्रमाण पत्र और आधार।" },
    { q: "कितने दिन में मिलता है?", a: "तुमकुर ज़िला पेज के अनुसार आम तौर पर 30 दिन के भीतर।" },
  ],
  related: [
    { href: "/states/karnataka-caste-certificate.html", emoji: "📜", title: "कर्नाटक जाति प्रमाण पत्र", text: "जाति और आय प्रमाण पत्र" },
    { href: "/states/karnataka-income-certificate.html", emoji: "💰", title: "कर्नाटक आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/karnataka-employment-exchange.html", emoji: "💼", title: "कर्नाटक रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://nadakacheri.karnataka.gov.in/", label: "📝 नाडकचेरी पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
