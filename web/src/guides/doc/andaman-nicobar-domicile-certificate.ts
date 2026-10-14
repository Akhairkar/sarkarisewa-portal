import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; edistrict.andamannicobar.gov.in could not be
// opened from our checker):
// - northmiddle.andaman.nic.in/service/local-certificate/ (last updated
//   11.09.2025): "Local Certificate", whom to apply "Concerned Tehsildar", how
//   to apply "Through e-forms via csc/e-corner/internet"; documents for Local
//   Certificate (10 Years): photograph, birth certificate, 10th certificate,
//   "10 years Duration"; for Local Certificate Pre 1942/Settler: photograph,
//   birth certificate, 10th certificate, ration card, Islander Card (parents),
//   Local (parents); portal https://edistrict.andamannicobar.gov.in/; Tehsildar
//   offices Mayabunder/Diglipur/Rangat.
// - nicobars.andaman.nic.in/service/local-certificate/ (updated Jul 2026): same
//   text; Tehsildar offices Car Nicobar/Nancowry/Great Nicobar.
// - southandaman.nic.in/service/local-certificate/: same text; Tehsildar
//   offices Port Blair/Ferrargunj/Little Andaman.
// - northmiddle.andaman.nic.in/service/residence-certificate/: separate
//   "Residence Certificate" from the Tehsildar; documents ID proof (Islander
//   Card/Aadhaar), ration card, Local Certificate.
// - News reports (nicobartimes.com, andamansheekha.com, search extracts): the
//   local certificate rests on an MHA letter of 14 Feb 1984, categories
//   pre-1942, settlers and ten years; an MP sought a statutory framework in
//   2025. Used only for the note that rules come from administrative orders.
// Left out (not confirmable on an official page we could open): fee, time
// limit, validity, exact meaning of "10 years" (residence or schooling). The
// old description's "official fee" was not confirmable, so it was rewritten.
export const andamanNicobarDomicileCertificate: DocGuide = {
  state: { slug: "andaman-nicobar", hi: "अंडमान और निकोबार" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Andaman & Nicobar Islands Domicile",
  description: "अंडमान और निकोबार में Local Certificate और Residence Certificate 2026: 10 साल / Pre-1942 / Settler श्रेणी, ज़रूरी कागज़, तहसीलदार और e-District / CSC से आवेदन।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "अंडमान और निकोबार निवास (Local / Residence) प्रमाण पत्र 2026: श्रेणी, कागज़ और आवेदन",
  lead: "अंडमान और निकोबार द्वीप समूह में अलग से 'डोमिसाइल' नाम का प्रमाण पत्र नहीं, बल्कि <strong>Local Certificate</strong> (स्थानीय प्रमाण पत्र) और <strong>Residence Certificate</strong> (निवास प्रमाण पत्र) बनते हैं। दोनों आपके क्षेत्र के <strong>तहसीलदार</strong> जारी करते हैं। आवेदन e-District पोर्टल (edistrict.andamannicobar.gov.in), CSC/e-Corner या तहसीलदार कार्यालय से होता है।",
  facts: [
    ["प्रमाण पत्र", "Local Certificate / Residence Certificate"],
    ["जारी करते हैं", "संबंधित तहसीलदार"],
    ["ऑनलाइन", '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a>'],
    ["Local की श्रेणी", "10 साल / Pre-1942 / Settler"],
  ],
  notice: "<strong>ध्यान दें:</strong> द्वीप समूह में सरकारी नौकरियों के लिए अक्सर <strong>Local Certificate</strong> मांगा जाता है, जबकि Residence Certificate के लिए Local Certificate खुद एक ज़रूरी कागज़ है। भर्ती या दाखिले के विज्ञापन में देखें कि कौन सा प्रमाण पत्र मांगा गया है।",
  sections: [
    {
      id: "kya-hai",
      title: "Local Certificate और Residence Certificate क्या हैं",
      list: [
        "<strong>Local Certificate:</strong> यह बताता है कि आप द्वीप समूह के 'स्थानीय' (local) व्यक्ति हैं। ज़िला पेजों पर इसकी दो श्रेणियां हैं: <strong>10 साल</strong> वाली, और <strong>Pre-1942 / Settler</strong> (1942 से पहले से बसे या बसाए गए परिवार) वाली।",
        "<strong>Residence Certificate:</strong> यह आपके वर्तमान निवास का प्रमाण है। इसके लिए पहचान पत्र, राशन कार्ड और Local Certificate लगता है।",
      ],
      callout: { kind: "info", html: "Local Certificate की व्यवस्था किसी अलग कानून से नहीं, बल्कि प्रशासनिक आदेशों (1984 का गृह मंत्रालय का पत्र) पर चलती है, ऐसा स्थानीय अखबारों में छपा है। '10 साल' की शर्त का ठीक मतलब (निवास या पढ़ाई) तहसीलदार कार्यालय से पूछ लें। ज़िला पेज पर इस श्रेणी के लिए 10वीं का प्रमाण पत्र मांगा गया है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "तीनों ज़िलों (दक्षिण अंडमान, उत्तर व मध्य अंडमान, निकोबार) के सेवा पेजों के अनुसार:",
      table: {
        head: ["प्रमाण पत्र", "कागज़"],
        rows: [
          ["Local Certificate (10 साल)", "आवेदक की फोटो, जन्म प्रमाण पत्र, 10वीं का प्रमाण पत्र, 10 साल की अवधि का सबूत"],
          ["Local Certificate (Pre-1942 / Settler)", "आवेदक की फोटो, जन्म प्रमाण पत्र, 10वीं का प्रमाण पत्र, राशन कार्ड, माता-पिता का Islander Card, माता-पिता का Local Certificate"],
          ["Residence Certificate", "पहचान पत्र (Islander Card या आधार), राशन कार्ड, Local Certificate"],
        ],
      },
      callout: { kind: "ok", html: "<strong>टिप:</strong> माता-पिता का Local Certificate या Islander Card हो तो Pre-1942 / Settler श्रेणी में आवेदन आसान रहता है। सभी कागज़ों में नाम और जन्मतिथि एक जैसी हो।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a> खोलें और नागरिक के रूप में अकाउंट बनाकर लॉगिन करें।',
        "सेवाओं में <strong>Local Certificate</strong> या <strong>Residence Certificate</strong> चुनें।",
        "फॉर्म भरें, सही श्रेणी चुनें और ऊपर दिए कागज़ अपलोड करें।",
        "आवेदन जमा करें और आवेदन संख्या संभाल कर रखें।",
        "खुद नहीं भर सकते तो पास के <strong>CSC या e-Corner</strong> से आवेदन करवाएं; वहां सेवा शुल्क लगे तो पहले पूछ लें।",
      ],
      html: "<p>ई-डिस्ट्रिक्ट पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं। पोर्टल का पता ज़िला प्रशासन के 2025-2026 के सेवा पेजों से लिया गया है।</p>",
    },
    {
      id: "offline",
      title: "तहसीलदार कार्यालय",
      table: {
        head: ["ज़िला", "तहसीलदार कार्यालय"],
        rows: [
          ["दक्षिण अंडमान", "पोर्ट ब्लेयर (श्री विजय पुरम), फेरारगंज, लिटिल अंडमान"],
          ["उत्तर और मध्य अंडमान", "मायाबंदर, डिगलीपुर, रंगत"],
          ["निकोबार", "कार निकोबार, नानकौरी, ग्रेट निकोबार"],
        ],
      },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत श्रेणी चुनी", "10 साल या Pre-1942/Settler में से वही श्रेणी चुनें जिसके कागज़ आपके पास हैं"],
          ["माता-पिता के कागज़ नहीं लगे", "Pre-1942/Settler श्रेणी में माता-पिता का Islander Card और Local Certificate ज़रूरी है"],
          ["Residence Certificate में Local Certificate नहीं लगा", "पहले Local Certificate बनवाएं, फिर Residence के लिए आवेदन करें"],
          ["नाम/जन्मतिथि अलग-अलग", "जन्म प्रमाण पत्र, 10वीं और आधार में एक जैसी जानकारी कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.andamannicobar.gov.in/", title: "e-District अंडमान और निकोबार (ऑनलाइन आवेदन)" },
    { href: "https://northmiddle.andaman.nic.in/service/local-certificate/", title: "Local Certificate: कागज़ (उत्तर और मध्य अंडमान)" },
    { href: "https://northmiddle.andaman.nic.in/service/residence-certificate/", title: "Residence Certificate: कागज़ (उत्तर और मध्य अंडमान)" },
    { href: "https://nicobars.andaman.nic.in/service/local-certificate/", title: "Local Certificate (ज़िला निकोबार)" },
    { href: "https://southandaman.nic.in/service/local-certificate/", title: "Local Certificate (ज़िला दक्षिण अंडमान)" },
  ],
  faq: [
    { q: "अंडमान और निकोबार में डोमिसाइल प्रमाण पत्र किसे कहते हैं?", a: "यहां 'Local Certificate' और 'Residence Certificate' बनते हैं। सरकारी नौकरी में स्थानीय होने के सबूत के लिए ज़्यादातर Local Certificate मांगा जाता है।" },
    { q: "Local Certificate कौन जारी करता है?", a: "आपके क्षेत्र के तहसीलदार। आवेदन e-District पोर्टल, CSC/e-Corner या तहसीलदार कार्यालय से होता है।" },
    { q: "Local Certificate के लिए कितने साल चाहिए?", a: "ज़िला पेजों पर एक श्रेणी '10 साल' की है और दूसरी Pre-1942 / Settler परिवारों की। 10 साल की गिनती कैसे होती है, यह तहसीलदार कार्यालय से पुष्टि करें।" },
    { q: "Residence Certificate के लिए क्या चाहिए?", a: "Islander Card या आधार, राशन कार्ड और आपका Local Certificate।" },
    { q: "फीस कितनी है?", a: "हमें किसी सरकारी पेज पर फीस नहीं मिली। आवेदन करते समय पोर्टल या CSC पर जो शुल्क दिखे वही मान्य है।" },
  ],
  related: [
    { href: "/states/andaman-nicobar-caste-certificate.html", emoji: "📜", title: "अंडमान-निकोबार जाति प्रमाण पत्र", text: "OBC और ST प्रमाण पत्र" },
    { href: "/states/andaman-nicobar-income-certificate.html", emoji: "💰", title: "अंडमान-निकोबार आय प्रमाण पत्र", text: "तहसीलदार से, e-District पर" },
    { href: "/states/andaman-nicobar-employment-exchange.html", emoji: "💼", title: "अंडमान-निकोबार रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.andamannicobar.gov.in/", label: "📝 e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
