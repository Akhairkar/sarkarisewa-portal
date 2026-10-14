import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - megedistrict.gov.in (e-District Meghalaya, NIC) home page: RTPS services
//   "Permanent Residence Certificate" Service Delivery Timeline/SLA 90 days and
//   "Residence Certificate" SLA 30 days, each with View Docs / Apply Now.
// - megedistrict.gov.in/resources/homePage/17/services.html: documents for
//   Permanent Residence Certificate: birth certificate; residential proof
//   (EPIC, electricity bill, patta, ration card, other); identity proof
//   (self/parent/guardian EPIC); caste proof (ST/SC certificate of self or
//   parent); highest education proof only; supporting document stating why
//   PRC is required (prospectus of institute or letter to DC); parent's
//   department ID if in government service. Residence Certificate: birth
//   proof, residential proof, identity proof (EPIC), document stating why RC
//   is required, certificate from this office (e.g. ST, SC). Photo 20-100 KB,
//   colour; PDF max 1 MB, scan at 75 or 100 DPI; "Others" enclosure.
// - Same portal (see meghalaya-income-certificate.ts): Rainbow Centres (CSCs),
//   PFCs at DC/SDO offices, online; Track Application; "Waiting for
//   applicant's response"; RTPS "Raise an Appeal"; digitally signed,
//   verifiable certificates; helpline 1971 Connect.
// Left out (not confirmable): fee, validity, a written residence-period rule,
// the designated officer for PRC/RC under the RTPS notification (the PER(ARC)
// PDF could not be downloaded this time).
export const meghalayaDomicileCertificate: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Meghalaya Domicile Certificate 2026: Apply & Status",
  description: "मेघालय PRC (Permanent Residence Certificate) और Residence Certificate 2026: e-District Meghalaya पर आवेदन, ज़रूरी कागज़, RTPS समय सीमा (90 / 30 दिन) और अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मेघालय PRC / निवास प्रमाण पत्र 2026: e-District पर आवेदन, कागज़ और समय सीमा",
  lead: "मेघालय में डोमिसाइल की जगह दो प्रमाण पत्र बनते हैं: <strong>Permanent Residence Certificate (PRC)</strong> और <strong>Residence Certificate (RC)</strong>। दोनों का आवेदन <strong>e-District Meghalaya</strong> (megedistrict.gov.in) पर, Rainbow Centre (CSC) से या DC/SDO कार्यालय के PFC काउंटर पर होता है। पोर्टल पर PRC की समय सीमा <strong>90 दिन</strong> और Residence Certificate की <strong>30 दिन</strong> लिखी है।",
  facts: [
    ["ऑनलाइन", '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a>'],
    ["PRC समय सीमा", "90 दिन (RTPS)"],
    ["Residence Certificate", "30 दिन (RTPS)"],
    ["ऑफलाइन", "Rainbow Centre (CSC) / DC-SDO का PFC"],
  ],
  notice: "<strong>ध्यान दें:</strong> दोनों प्रमाण पत्रों के लिए पोर्टल एक ऐसा कागज़ मांगता है जिसमें लिखा हो कि <strong>प्रमाण पत्र क्यों चाहिए</strong> (जैसे संस्थान का प्रॉस्पेक्टस या DC को पत्र)। इसे पहले से तैयार रखें।",
  sections: [
    {
      id: "kya-hai",
      title: "PRC और Residence Certificate: कौन सा चाहिए",
      table: {
        head: ["प्रमाण पत्र", "कब मांगा जाता है"],
        rows: [
          ["<strong>Permanent Residence Certificate (PRC)</strong>", "स्थायी निवासी होने का सबूत; दाखिले में राज्य के कोटे, भर्ती आदि में। पोर्टल पर इसमें ST/SC प्रमाण पत्र (अपना या माता-पिता का) भी मांगा जाता है।"],
          ["<strong>Residence Certificate (RC)</strong>", "वर्तमान निवास का सबूत, जहां स्थायी निवास नहीं बल्कि निवास का प्रमाण मांगा गया हो"],
        ],
      },
      callout: { kind: "info", html: "जिस संस्था या भर्ती के लिए चाहिए, उसके फॉर्म में देखें कि PRC मांगा है या Residence Certificate। जनजाति का सबूत अलग है: <a href=\"/states/meghalaya-caste-certificate.html\">मेघालय ST/SC प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "e-District पोर्टल की सूची के अनुसार:",
      table: {
        head: ["कागज़", "PRC", "Residence Certificate"],
        rows: [
          ["जन्म का प्रमाण", "जन्म प्रमाण पत्र", "जन्म प्रमाण पत्र या दूसरा जन्म प्रमाण"],
          ["निवास का प्रमाण", "EPIC, बिजली बिल, पट्टा, राशन कार्ड या दूसरा", "EPIC, बिजली बिल, पट्टा, राशन कार्ड या दूसरा"],
          ["पहचान", "अपना/माता-पिता/अभिभावक का EPIC", "अपना/माता-पिता/अभिभावक का EPIC"],
          ["जाति का प्रमाण", "अपना या माता-पिता का ST/SC प्रमाण पत्र", "इसी कार्यालय से जारी कोई प्रमाण पत्र (जैसे ST, SC)"],
          ["शिक्षा", "सिर्फ सबसे ऊंची पढ़ाई का प्रमाण", "-"],
          ["क्यों चाहिए", "प्रॉस्पेक्टस या DC को पत्र", "RC क्यों चाहिए, यह बताने वाला कागज़"],
          ["सरकारी कर्मचारी के बच्चे", "माता-पिता का विभागीय पहचान पत्र", "-"],
        ],
      },
      callout: { kind: "ok", html: "फोटो रंगीन और 20 से 100 KB की हो। हर PDF अधिकतम 1 MB; 75 या 100 DPI पर स्कैन करें। EPIC के दोनों तरफ एक ही PDF में लगाएं। ज़्यादा कागज़ <strong>Others</strong> में लगा सकते हैं। फाइल छोटी करने के लिए: <a href=\"/tools/document-compressor.html\">Document Resizer</a>।" },
    },
    {
      id: "online",
      title: "e-District पर आवेदन",
      steps: [
        '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a> खोलें। नए हैं तो नाम, ईमेल, पासवर्ड और राज्य देकर रजिस्टर करें।',
        "होमपेज पर <strong>Permanent Residence Certificate</strong> या <strong>Residence Certificate</strong> के आगे <strong>View Docs</strong> से कागज़ों की सूची देखें, फिर <strong>Apply Now</strong> दबाएं।",
        "फॉर्म भरें और कागज़ अपलोड करें। बीच में रुकना हो तो Draft में सेव करें; ड्राफ्ट का मतलब आवेदन जमा होना नहीं है।",
        "शुल्क दिखे तो ऑनलाइन भरें, आवेदन जमा करें और पावती नंबर संभालें।",
      ],
      html: "<p>खुद नहीं भर सकते तो <strong>Rainbow Centre (CSC)</strong> या DC/SDO कार्यालय के <strong>PFC काउंटर</strong> पर जाएं। CSC का अपना सेवा शुल्क हो सकता है। <strong>फीस</strong> की रकम किसी आधिकारिक पेज पर हमें नहीं मिली; पोर्टल पर दिखी रकम ही मान्य है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, सुधार और अपील",
      list: [
        "होमपेज के <strong>Track Application</strong> में आवेदन नंबर डालकर स्थिति देखें।",
        "सुधार मांगा जाए तो <strong>Waiting for applicant's response</strong> में जाकर जानकारी या कागज़ दोबारा लगाएं।",
        "PRC 90 दिन और RC 30 दिन में न मिले या खारिज हो जाए, तो पोर्टल के <strong>RTPS Grievance Redressal → Raise an Appeal</strong> से अपील करें।",
        "प्रमाण पत्र डिजिटल हस्ताक्षर वाला होता है और ऑनलाइन सत्यापित हो सकता है।",
        "मदद: <strong>1971</strong> (Connect हेल्पलाइन)।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["\"क्यों चाहिए\" वाला कागज़ नहीं लगा", "प्रॉस्पेक्टस, भर्ती का विज्ञापन या DC को लिखा पत्र लगाएं"],
          ["PRC में ST/SC प्रमाण पत्र नहीं लगा", "अपना या माता-पिता का ST/SC प्रमाण पत्र लगाएं"],
          ["एक से ज़्यादा शिक्षा प्रमाण लगाए", "सिर्फ सबसे ऊंची पढ़ाई का प्रमाण लगाएं"],
          ["फाइल 1 MB से बड़ी या धुंधली", "75-100 DPI पर दोबारा स्कैन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://megedistrict.gov.in/", title: "e-District Meghalaya (ऑनलाइन आवेदन, SLA)" },
    { href: "https://megedistrict.gov.in/resources/homePage/17/services.html", title: "e-District: PRC और Residence Certificate के कागज़" },
    { href: "http://megpgrams.gov.in/", title: "मेघालय शिकायत पोर्टल (MegPGRAMS)" },
  ],
  faq: [
    { q: "मेघालय में डोमिसाइल प्रमाण पत्र कैसे बनता है?", a: "यहां Permanent Residence Certificate (PRC) या Residence Certificate बनता है। आवेदन megedistrict.gov.in पर, Rainbow Centre (CSC) से या DC/SDO कार्यालय के PFC काउंटर पर करें।" },
    { q: "PRC कितने दिन में मिलता है?", a: "e-District पोर्टल पर PRC की RTPS समय सीमा 90 दिन और Residence Certificate की 30 दिन लिखी है।" },
    { q: "PRC के लिए कौन से कागज़ चाहिए?", a: "जन्म प्रमाण पत्र, निवास प्रमाण (EPIC/बिजली बिल/पट्टा/राशन कार्ड), EPIC, अपना या माता-पिता का ST/SC प्रमाण पत्र, सबसे ऊंची पढ़ाई का प्रमाण और प्रमाण पत्र क्यों चाहिए यह बताने वाला कागज़।" },
    { q: "समय पर प्रमाण पत्र न मिले तो?", a: "पोर्टल पर RTPS Grievance Redressal में Raise an Appeal से अपील करें।" },
  ],
  related: [
    { href: "/states/meghalaya-caste-certificate.html", emoji: "📜", title: "मेघालय ST/SC प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/meghalaya-income-certificate.html", emoji: "💰", title: "मेघालय आय प्रमाण पत्र", text: "e-District पर" },
    { href: "/states/meghalaya-employment-exchange.html", emoji: "💼", title: "मेघालय रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://megedistrict.gov.in/", label: "📝 e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
