import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - aaplesarkar.mahaonline.gov.in/en (Aaple Sarkar, Maharashtra Right to
//   Public Services Act 2015 portal) home page: Revenue Department services
//   "Age Nationality Domicile" (ServiceId=1253), "Temporary Residence
//   Certificate" (ServiceId=1252), "Certificate of Residence in Hilly Area";
//   Track your Application (Application ID); Verify Your Authenticated
//   Certificate (18-digit barcode); 24x7 Citizen Call Center 1800 120 8040
//   (toll free); first and second appeal within the department, third appeal
//   before the RTS Commission; no physical visit required unless mandated by
//   law.
// - Certificate_Documents?ServiceId=1253 ("वय, राष्ट्रीयत्व आणि अधिवास
//   प्रमाणपत्र"): time limit 15 days; designated officer Tahsildar; first
//   appeal Sub Divisional Officer; second appeal Additional Collector. (The
//   page's document box showed "No Documents Required", so the document list
//   below is written generally.)
// Left out (not confirmable on an official page we could open): the number of
// years of residence (only commercial sites, conflicting), fee, validity, a
// fixed document list.
export const maharashtraDomicileCertificate: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Maharashtra Domicile Certificate 2026",
  description: "महाराष्ट्र डोमिसाइल (वय, राष्ट्रीयत्व आणि अधिवास प्रमाणपत्र) 2026: Aaple Sarkar पर आवेदन, तहसीलदार, 15 दिन की समय सीमा, अपील, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "महाराष्ट्र डोमिसाइल प्रमाण पत्र 2026: Aaple Sarkar पर आवेदन, समय सीमा और अपील",
  lead: "महाराष्ट्र में डोमिसाइल प्रमाण पत्र का पूरा नाम <strong>वय, राष्ट्रीयत्व आणि अधिवास प्रमाणपत्र</strong> (Age, Nationality and Domicile Certificate) है। आवेदन Aaple Sarkar पोर्टल पर या आपले सरकार सेवा केंद्र से होता है। लोकसेवा हक्क अधिनियम के तहत <strong>तहसीलदार</strong> को यह 15 दिन में देना होता है; देरी हो तो उपविभागीय अधिकारी के पास पहली अपील होती है।",
  facts: [
    ["पोर्टल", '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार"],
    ["समय सीमा", "15 दिन"],
    ["हेल्पलाइन", "1800 120 8040 (टोल फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> महाराष्ट्र में कितने साल का निवास चाहिए, यह किसी मौजूदा सरकारी पेज पर साफ नहीं मिला; निजी वेबसाइटों पर अलग-अलग संख्या लिखी है। दाखिले (जैसे CET सेल) या भर्ती में \"महाराष्ट्र डोमिसाइल\" की शर्त उनकी सूचना-पुस्तिका में दी होती है, वही पढ़ें।",
  sections: [
    {
      id: "kya-hai",
      title: "डोमिसाइल प्रमाण पत्र क्या है",
      intro: "यह एक ही प्रमाण पत्र में तीन बातें बताता है: आपकी <strong>उम्र (वय)</strong>, आप <strong>भारतीय नागरिक (राष्ट्रीयत्व)</strong> हैं, और आप <strong>महाराष्ट्र के अधिवासी (Domicile)</strong> हैं। यह दाखिले में राज्य कोटे, सरकारी नौकरी और राज्य की योजनाओं में मांगा जाता है।",
      table: {
        head: ["Aaple Sarkar पर सेवा", "कब"],
        rows: [
          ["<strong>Age Nationality Domicile</strong>", "स्थायी डोमिसाइल प्रमाण पत्र"],
          ["<strong>Temporary Residence Certificate</strong>", "जब अस्थायी निवास का प्रमाण चाहिए"],
          ["<strong>Certificate of Residence in Hilly Area</strong>", "पहाड़ी क्षेत्र में निवास से जुड़े लाभों के लिए"],
        ],
      },
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/maharashtra-caste-certificate.html\">महाराष्ट्र जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "Aaple Sarkar के सेवा पेज पर कागज़ों की तय सूची नहीं दिखी; आवेदन फॉर्म खोलने पर जो कागज़ मांगे जाएं वही अपलोड करें। इस प्रमाण पत्र में उम्र, नागरिकता और निवास तीनों साबित करने होते हैं, इसलिए आम तौर पर ये तैयार रखें:",
      list: [
        "<strong>उम्र का प्रमाण</strong>: जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र (LC/TC)",
        "<strong>पहचान</strong>: आधार कार्ड, वोटर कार्ड या पैन कार्ड",
        "<strong>महाराष्ट्र में निवास का प्रमाण</strong>: राशन कार्ड, बिजली बिल, घर/ज़मीन के कागज़, किराया अनुबंध, स्कूल रिकॉर्ड",
        "<strong>फोटो</strong> और फॉर्म के साथ मांगा गया <strong>स्व-घोषणा पत्र</strong>",
      ],
      callout: { kind: "ok", html: "स्कैन छोटे रखें: <a href=\"/tools/document-compressor.html\">Document Compressor</a>। स्व-घोषणा कैसे लिखें: <a href=\"/affidavit/self-declaration.html\">स्व-घोषणा पत्र</a>।" },
    },
    {
      id: "online",
      title: "Aaple Sarkar पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a> पर नया पंजीकरण करें और <strong>Citizen Login</strong> करें।',
        "<strong>Revenue Department → Age Nationality Domicile</strong> सेवा चुनें।",
        "फॉर्म में नाम, जन्मतिथि, पता और महाराष्ट्र में निवास की जानकारी भरें।",
        "मांगे गए कागज़ अपलोड करें, पोर्टल पर दिखा शुल्क भरें और आवेदन जमा करें।",
        "<strong>Application ID</strong> नोट करें; इसी से स्टेटस देखा जाता है।",
      ],
      html: "<p>खुद आवेदन न कर पाएं तो नज़दीकी <strong>आपले सरकार सेवा केंद्र</strong> या सेतु केंद्र से आवेदन कराएं। पोर्टल के अनुसार जब तक कानून में ज़रूरी न हो, इस पोर्टल की सेवाओं के लिए दफ्तर जाने की ज़रूरत नहीं है।</p>",
    },
    {
      id: "samay",
      title: "समय सीमा और अपील (लोकसेवा हक्क अधिनियम 2015)",
      table: {
        head: ["बात", "जानकारी"],
        rows: [
          ["समय सीमा", "15 दिन"],
          ["नियत अधिकारी", "तहसीलदार"],
          ["पहली अपील", "उपविभागीय अधिकारी (SDO)"],
          ["दूसरी अपील", "अपर जिल्हाधिकारी (Additional Collector)"],
          ["तीसरी अपील", "राज्य सेवा हक्क आयोग (RTS Commission)"],
        ],
      },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होम पेज पर <strong>Track your Application</strong> में Application ID डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Citizen Login में अपने आवेदन से प्रमाण पत्र डाउनलोड करें।",
        "<strong>सत्यापन:</strong> <strong>Verify Your Authenticated Certificate</strong> में प्रमाण पत्र का 18 अंकों का बारकोड नंबर डालें।",
        "<strong>मदद:</strong> 24x7 कॉल सेंटर 1800 120 8040 (टोल फ्री)।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["उम्र का प्रमाण नहीं", "जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र लगाएं"],
          ["महाराष्ट्र में निवास साबित नहीं हुआ", "पुराने राशन कार्ड, घर/ज़मीन के कागज़ या स्कूल रिकॉर्ड जोड़ें"],
          ["कागज़ों में नाम/जन्मतिथि अलग", "पहले कागज़ों में सुधार कराएं, फिर आवेदन करें"],
          ["15 दिन में फैसला नहीं", "उपविभागीय अधिकारी के पास पहली अपील करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", title: "Aaple Sarkar (आवेदन, स्टेटस, सत्यापन, अपील)" },
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=1253", title: "Age, Nationality and Domicile Certificate: समय सीमा और अधिकारी" },
  ],
  faq: [
    { q: "महाराष्ट्र डोमिसाइल प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "aaplesarkar.mahaonline.gov.in पर पंजीकरण करके Citizen Login करें, Revenue Department → Age Nationality Domicile चुनें, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरें।" },
    { q: "कितने दिन में बनता है?", a: "लोकसेवा हक्क अधिनियम के तहत 15 दिन में। प्रमाण पत्र तहसीलदार देते हैं।" },
    { q: "समय पर न मिले तो?", a: "पहली अपील उपविभागीय अधिकारी, दूसरी अपर जिल्हाधिकारी और तीसरी राज्य सेवा हक्क आयोग के पास।" },
    { q: "महाराष्ट्र में डोमिसाइल के लिए कितने साल रहना ज़रूरी है?", a: "किसी मौजूदा सरकारी पेज पर यह संख्या साफ नहीं मिली। जिस दाखिले या भर्ती के लिए चाहिए, उसकी सूचना-पुस्तिका में दी गई शर्त देखें।" },
  ],
  related: [
    { href: "/states/maharashtra-caste-certificate.html", emoji: "📜", title: "महाराष्ट्र जाति प्रमाण पत्र", text: "जाति और नॉन-क्रीमी लेयर" },
    { href: "/states/maharashtra-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/maharashtra-employment-exchange.html", emoji: "💼", title: "महाराष्ट्र रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", label: "📝 Aaple Sarkar पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
