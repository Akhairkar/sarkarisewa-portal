import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; mizoram.gov.in sub-domains, including
// edistrict.mizoram.gov.in and dconline.mizoram.gov.in, return 403 to our
// checker):
// - aizawl.nic.in/service/residence-certificate/ (last updated 26.03.2025):
//   "Residential Certificate"; forms from Aizawl DC Office Facilitation Centre
//   by paying Rs 10; documents: voter ID (xerox, attested); children below 18
//   give father's voter ID; children whose parents are divorced or dead give a
//   birth certificate; original recommendation letter of the Local Council
//   chairman/secretary or Village Council and YMA; one passport photo; submit
//   at the Facilitation Centre, examined, issued and collected there; link
//   https://edistrict.mizoram.gov.in/; DC Office, Treasury Square, Aizawl,
//   phone 2326257.
// - mamit.nic.in/service/residence-certificate/ (2018): same list (consent
//   letter from Local/Village Council, two photos; mother's voter ID if father
//   dead/divorced).
// - negd.gov.in State Digital Solutions "DC Online (e-District V2)", Mizoram,
//   and serchhip.nic.in "DC Online e-District Version 2" (see
//   mizoram-income-certificate.ts): dconline.mizoram.gov.in; residential,
//   income and tribal certificates applied online through CSC/VLEs or at the
//   DC office; SMS updates; certificates for download; public verification.
// Left out (not confirmable): a residence-period rule, time limit, validity,
// any fee other than the Aizawl form price. The old description's "ServicePlus
// Mizoram" and "official fee" were dropped.
export const mizoramDomicileCertificate: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Mizoram Domicile Certificate 2026: Apply & Status",
  description: "मिज़ोरम निवास प्रमाण पत्र (Residential Certificate) 2026: DC कार्यालय और DC Online से आवेदन, वोटर ID, लोकल/विलेज काउंसिल व YMA की सिफारिश, फोटो।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मिज़ोरम निवास (Residential) प्रमाण पत्र 2026: कागज़, DC कार्यालय और ऑनलाइन आवेदन",
  lead: "मिज़ोरम में डोमिसाइल के लिए ज़िले का <strong>डिप्टी कमिश्नर (DC) कार्यालय</strong> <strong>Residential Certificate</strong> (निवास प्रमाण पत्र) देता है। आवेदन DC कार्यालय के <strong>Facilitation Centre</strong> में, या DC Online (e-District) पर CSC के ज़रिए होता है। मुख्य कागज़ हैं: वोटर ID, लोकल काउंसिल/विलेज काउंसिल (और आइज़ोल में YMA) की सिफारिश का पत्र और फोटो।",
  facts: [
    ["प्रमाण पत्र", "Residential Certificate"],
    ["जारी करते हैं", "ज़िले का DC कार्यालय"],
    ["ऑनलाइन", '<a href="https://dconline.mizoram.gov.in" target="_blank" rel="noopener nofollow">DC Online (e-District)</a>'],
    ["सिफारिश", "लोकल / विलेज काउंसिल (आइज़ोल में YMA भी)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "Residential Certificate किस काम आता है",
      intro: "यह इस बात का सबूत है कि आप मिज़ोरम के उस ज़िले के निवासी हैं। दाखिले, भर्ती और योजनाओं में निवास के सबूत के लिए मांगा जाता है।",
      callout: { kind: "info", html: "ST (जनजाति) होने का सबूत अलग है: <a href=\"/states/mizoram-caste-certificate.html\">मिज़ोरम ST (Tribal) प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "आइज़ोल ज़िले के सेवा पेज (मार्च 2025) के अनुसार:",
      list: [
        "<strong>वोटर ID</strong> की फोटोकॉपी, सत्यापित (attested)। मूल वोटर ID जांच के लिए साथ रखें।",
        "<strong>18 साल से कम</strong> के बच्चे: पिता का वोटर ID (फोटोकॉपी, सत्यापित)।",
        "माता-पिता का <strong>तलाक या मृत्यु</strong> हो गई हो: बच्चे का जन्म प्रमाण पत्र (ममित ज़िले के पेज पर ऐसे में माता का वोटर ID भी लिखा है)।",
        "<strong>लोकल काउंसिल</strong> के अध्यक्ष/सचिव या <strong>विलेज काउंसिल</strong> और <strong>YMA</strong> की सिफारिश का मूल पत्र।",
        "<strong>पासपोर्ट साइज़ फोटो</strong> (आइज़ोल में 1, ममित में 2)।",
      ],
      callout: { kind: "ok", html: "ज़िलों में सूची थोड़ी अलग हो सकती है। अपने ज़िले के DC कार्यालय के Facilitation Centre से फॉर्म लेते समय सूची मिला लें।" },
    },
    {
      id: "offline",
      title: "DC कार्यालय से आवेदन",
      steps: [
        "अपने ज़िले के DC कार्यालय के <strong>Facilitation Centre</strong> से फॉर्म लें। आइज़ोल में फॉर्म <strong>₹10</strong> में मिलता है (ज़िला पेज, 2025)।",
        "फॉर्म ध्यान से, साफ अक्षरों में और सही जानकारी के साथ भरें।",
        "ऊपर दिए कागज़ लगाकर Facilitation Centre पर जमा करें।",
        "जांच के बाद पात्र होने पर प्रमाण पत्र जारी होता है और वहीं से मिलता है।",
      ],
      html: "<p>आइज़ोल DC कार्यालय: ट्रेज़री स्क्वेयर, आइज़ोल 796001, फोन 2326257।</p>",
    },
    {
      id: "online",
      title: "DC Online (e-District) से आवेदन",
      intro: "NeGD और सेरछिप ज़िले की जानकारी के अनुसार Residential, Income और Tribal प्रमाण पत्र <strong>DC Online (e-District Version 2)</strong> पर ऑनलाइन भी होते हैं:",
      list: [
        "आवेदन पास के <strong>CSC/VLE</strong> से करवाएं या सीधे DC कार्यालय में दें; DC कार्यालय जाए बिना भी आवेदन हो सकता है।",
        "DC कार्यालय के कर्मचारी जांच करते हैं और अधिकारी मंज़ूरी देते हैं; SMS से जानकारी मिलती है।",
        "मंज़ूर प्रमाण पत्र डाउनलोड के लिए उपलब्ध होता है और बिना लॉगिन के सत्यापित किया जा सकता है।",
      ],
      html: "<p>पोर्टल का पता: <a href=\"https://dconline.mizoram.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">dconline.mizoram.gov.in</a>; आइज़ोल ज़िले के पेज पर <a href=\"https://edistrict.mizoram.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">edistrict.mizoram.gov.in</a> लिंक दिया है। दोनों हमारी जांच के समय यहां से नहीं खुले। समय सीमा और ऑनलाइन फीस किसी आधिकारिक पेज पर हमें नहीं मिली।</p>",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["लोकल/विलेज काउंसिल की सिफारिश नहीं लगी", "काउंसिल के अध्यक्ष/सचिव से मूल सिफारिश पत्र लें"],
          ["वोटर ID सत्यापित नहीं", "सेल्फ-अटेस्टेड या राजपत्रित अधिकारी से सत्यापित कॉपी लगाएं, मूल साथ रखें"],
          ["बच्चे के आवेदन में माता-पिता का कागज़ नहीं", "पिता का वोटर ID; पिता नहीं हैं तो माता का वोटर ID और जन्म प्रमाण पत्र"],
          ["फॉर्म अधूरा या गलत भरा", "नया फॉर्म लेकर सही और पूरी जानकारी भरें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://aizawl.nic.in/service/residence-certificate/", title: "Residential Certificate: कागज़ और तरीका (ज़िला आइज़ोल)" },
    { href: "https://mamit.nic.in/service/residence-certificate/", title: "Residence Certificate (ज़िला ममित)" },
    { href: "https://dconline.mizoram.gov.in", title: "DC Online (e-District V2) मिज़ोरम" },
    { href: "https://serchhip.nic.in/dc-online-e-district-version-2/", title: "DC Online e-District Version 2 (ज़िला सेरछिप)" },
  ],
  faq: [
    { q: "मिज़ोरम में डोमिसाइल प्रमाण पत्र कौन देता है?", a: "ज़िले का डिप्टी कमिश्नर (DC) कार्यालय Residential Certificate देता है। आवेदन DC कार्यालय के Facilitation Centre में या DC Online पर CSC से होता है।" },
    { q: "कौन से कागज़ लगते हैं?", a: "सत्यापित वोटर ID (बच्चों के लिए पिता का), लोकल/विलेज काउंसिल (और आइज़ोल में YMA) की सिफारिश का मूल पत्र और पासपोर्ट फोटो। माता-पिता का तलाक या मृत्यु हो तो जन्म प्रमाण पत्र भी।" },
    { q: "फीस कितनी है?", a: "आइज़ोल ज़िले के पेज के अनुसार Facilitation Centre पर फॉर्म ₹10 में मिलता है। दूसरी कोई फीस किसी आधिकारिक पेज पर हमें नहीं मिली।" },
    { q: "क्या ऑनलाइन आवेदन हो सकता है?", a: "हां, DC Online (e-District V2) पर CSC/VLE के ज़रिए Residential Certificate का आवेदन हो सकता है।" },
  ],
  related: [
    { href: "/states/mizoram-caste-certificate.html", emoji: "📜", title: "मिज़ोरम ST (Tribal) प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/mizoram-income-certificate.html", emoji: "💰", title: "मिज़ोरम आय प्रमाण पत्र", text: "DC कार्यालय / DC Online" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://dconline.mizoram.gov.in", label: "📝 DC Online पोर्टल" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
