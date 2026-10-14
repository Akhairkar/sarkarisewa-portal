import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Unified Services Portal, Government of Nagaland (services.nagaland.gov.in),
//   home page and /services directory (53 services): "Scheduled Tribe
//   Certificate" (code ST_CERTIFICATE, Home Department, internal service):
//   "Only for Citizens belonging to Identified Scheduled Tribes of Nagaland.
//   Digitally Issued Indigenous Inhabitant Certificate is required. Cost of
//   Service - Rs. 100/- only"; "Re-Issue of Scheduled Tribe Certificate"
//   (same note); "Backward Tribe Certificate" (BT_CERTIFICATE) and its re-issue
//   (note: identified Backward Tribe, digitally issued IIC required, Rs 100);
//   "Re-Issue of Indigenous Inhabitant Certificate" (IIC_CERTIFICATE_REISSUE):
//   identified indigenous tribes, village verification and administrative
//   circle verification required; "Domicile Certificate". Registration by
//   e-mail or DigiLocker / MeriPehchaan; "Track Application". Service detail
//   pages /services/1, /3, /36.
// - Sentinel Assam report on a Kohima Deputy Commissioner order: children of
//   non-Naga fathers and non-Naga children adopted by Naga parents are not to
//   be given ST / Backward Tribe / Indigenous Inhabitant certificates; Area
//   Administrative Officers verify before forwarding.
// Left out (not confirmable on an official page we could open): a published
// document list (the portal says "No documents specified yet"), the fee for a
// fresh Indigenous Inhabitant Certificate, a time limit, the portal helpline
// (the number shown looked like a placeholder).
export const nagalandCasteCertificate: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Nagaland Caste Certificate 2026: Apply & Status",
  description: "नागालैंड में जाति प्रमाण पत्र यानी ST / Backward Tribe प्रमाण पत्र 2026: Unified Services Portal पर आवेदन, ₹100 शुल्क, Indigenous Inhabitant Certificate की शर्त और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "नागालैंड जाति प्रमाण पत्र 2026: ST और Backward Tribe प्रमाण पत्र, Indigenous Inhabitant Certificate और आवेदन",
  lead: "नागालैंड में \"जाति प्रमाण पत्र\" का मतलब ज़्यादातर अनुसूचित जनजाति (ST) प्रमाण पत्र है; राज्य की आरक्षण सूची के लिए Backward Tribe (BT) प्रमाण पत्र भी बनता है। दोनों गृह विभाग (Home Department) की सेवाएं हैं और राज्य के Unified Services Portal (services.nagaland.gov.in) पर मिलती हैं। पोर्टल के अनुसार ST प्रमाण पत्र सिर्फ नागालैंड की पहचानी गई अनुसूचित जनजातियों के लोगों के लिए है, इसके लिए डिजिटल रूप से जारी Indigenous Inhabitant Certificate ज़रूरी है और सेवा शुल्क ₹100 है।",
  facts: [
    ["पोर्टल", '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a>'],
    ["विभाग", "गृह विभाग (Home Department)"],
    ["पहले चाहिए", "डिजिटल Indigenous Inhabitant Certificate"],
    ["शुल्क", "₹100 (ST / BT प्रमाण पत्र, पोर्टल पर दर्ज)"],
  ],
  notice: "<strong>क्रम ध्यान रखें:</strong> पहले <strong>Indigenous Inhabitant Certificate (IIC)</strong> डिजिटल रूप में होना चाहिए, उसके बाद ही ST या Backward Tribe प्रमाण पत्र का आवेदन होता है। IIC के लिए गांव स्तर का सत्यापन और प्रशासनिक सर्कल (Administrative Circle) का सत्यापन होता है।",
  sections: [
    {
      id: "kaun-sa",
      title: "नागालैंड में कौन सा प्रमाण पत्र किसके लिए",
      table: {
        head: ["पोर्टल पर सेवा", "किसके लिए"],
        rows: [
          ["<strong>Indigenous Inhabitant Certificate</strong> (और उसका Re-Issue)", "नागालैंड की पहचानी गई मूल (indigenous) जनजातियों के लोग; ST/BT प्रमाण पत्र के लिए पहले यही चाहिए"],
          ["<strong>Scheduled Tribe Certificate</strong> (और Re-Issue)", "नागालैंड की पहचानी गई अनुसूचित जनजातियों के लोग: नौकरी, दाखिले, छात्रवृत्ति में ST आरक्षण/छूट"],
          ["<strong>Backward Tribe Certificate</strong> (और Re-Issue)", "राज्य की पहचानी गई Backward Tribes: राज्य के आरक्षण के लिए"],
          ["<strong>Domicile Certificate</strong>", "निवास का प्रमाण; यह जाति/जनजाति का प्रमाण नहीं है"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी/परीक्षा में ST आरक्षण के लिए <strong>ST प्रमाण पत्र</strong> चाहिए। Backward Tribe प्रमाण पत्र राज्य की सूची का है; केंद्र की भर्ती में किस प्रमाण पत्र की ज़रूरत है, वह भर्ती के विज्ञापन में दिए फॉर्मेट से मिलाएं।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "<strong>ST प्रमाण पत्र:</strong> पोर्टल के अनुसार सिर्फ नागालैंड की पहचानी गई अनुसूचित जनजातियों (Identified Scheduled Tribes of Nagaland) के नागरिक।",
        "<strong>Backward Tribe प्रमाण पत्र:</strong> नागालैंड की पहचानी गई Backward Tribes के नागरिक।",
        "<strong>दोनों के लिए:</strong> डिजिटल रूप से जारी Indigenous Inhabitant Certificate ज़रूरी।",
        "समाचार रिपोर्ट के अनुसार कोहिमा के उपायुक्त (DC) के एक आदेश में कहा गया कि गैर-नागा पिता के बच्चों और नागा माता-पिता द्वारा गोद लिए गए गैर-नागा बच्चों को ST/BT/Indigenous Inhabitant प्रमाण पत्र नहीं दिए जाएंगे।",
      ],
    },
    {
      id: "online",
      title: "Unified Services Portal पर आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a> खोलें और <strong>Register</strong> करें: ईमेल से, या <strong>DigiLocker / MeriPehchaan</strong> से साइन इन करें।',
        "<strong>Services</strong> में जाकर <strong>Scheduled Tribe Certificate</strong> या <strong>Backward Tribe Certificate</strong> चुनें (पुराना प्रमाण पत्र दोबारा चाहिए तो <strong>Re-Issue</strong> वाली सेवा)।",
        "फॉर्म भरें और जो कागज़ मांगे जाएं वे अपलोड करें; Indigenous Inhabitant Certificate का ब्योरा तैयार रखें।",
        "₹100 सेवा शुल्क ऑनलाइन भरें और आवेदन जमा करें।",
        "आवेदन संख्या नोट करें और डैशबोर्ड या <strong>Track Application</strong> से स्थिति देखें।",
      ],
      callout: { kind: "ok", html: "पोर्टल पर इस सेवा की कागज़-सूची अभी \"No documents specified yet\" दिखती है। आवेदन करते समय फॉर्म जो मांगे वही लगाएं; सामान्य तौर पर फोटो, पहचान पत्र, Indigenous Inhabitant Certificate और गांव/सर्कल का सत्यापन पास रखें। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "jaanch",
      title: "सत्यापन कैसे होता है",
      list: [
        "<strong>Indigenous Inhabitant Certificate:</strong> पोर्टल के अनुसार गांव स्तर का सत्यापन (Village Verification) और प्रशासनिक सर्कल का सत्यापन (Administrative Circle Verification) ज़रूरी है।",
        "<strong>ज़िला स्तर:</strong> समाचार रिपोर्ट के अनुसार क्षेत्र के प्रशासनिक अधिकारी (Area Administrative Officers) आवेदक की जांच करके आवेदन जारी करने वाले प्राधिकारी को भेजते हैं।",
        "जांच जल्दी हो, इसके लिए गांव परिषद (Village Council) और अपने सर्कल कार्यालय से पहले ही संपर्क रखें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल पर लॉगिन करके अपना आवेदन देखें या <strong>Track Application</strong> इस्तेमाल करें।",
        "<strong>प्रमाण पत्र खो जाए:</strong> ST, BT और IIC तीनों के लिए पोर्टल पर <strong>Re-Issue</strong> की अलग सेवा है।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Indigenous Inhabitant Certificate नहीं है या डिजिटल नहीं", "पहले IIC बनवाएं / पोर्टल पर Re-Issue कराएं, फिर ST/BT का आवेदन करें"],
          ["जनजाति पहचानी गई सूची में नहीं", "ST के लिए Identified Scheduled Tribes और BT के लिए Identified Backward Tribes की सूची में होना ज़रूरी"],
          ["गांव/सर्कल का सत्यापन बाकी", "गांव परिषद और प्रशासनिक सर्कल कार्यालय से सत्यापन पूरा कराएं"],
          ["गैर-नागा पिता / गोद लेने का मामला", "जिला प्रशासन के आदेश के अनुसार ऐसे मामलों में ST/BT/IIC नहीं दिया जाता; अपने DC कार्यालय से स्थिति पूछें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://services.nagaland.gov.in/", title: "Unified Services Portal, नागालैंड सरकार" },
    { href: "https://services.nagaland.gov.in/services/1", title: "Scheduled Tribe Certificate: सेवा विवरण" },
    { href: "https://services.nagaland.gov.in/services/3", title: "Backward Tribe Certificate: सेवा विवरण" },
    { href: "https://services.nagaland.gov.in/services/36", title: "Re-Issue of Indigenous Inhabitant Certificate: सेवा विवरण" },
  ],
  faq: [
    { q: "नागालैंड में जाति प्रमाण पत्र कौन सा बनता है?", a: "नागालैंड में मुख्य रूप से अनुसूचित जनजाति (ST) प्रमाण पत्र और राज्य की सूची के लिए Backward Tribe (BT) प्रमाण पत्र बनते हैं। दोनों गृह विभाग की सेवाएं हैं और Unified Services Portal पर मिलती हैं।" },
    { q: "नागालैंड ST प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल पर ST प्रमाण पत्र (और उसके Re-Issue) का सेवा शुल्क ₹100 लिखा है।" },
    { q: "Indigenous Inhabitant Certificate क्यों ज़रूरी है?", a: "पोर्टल के अनुसार ST और Backward Tribe प्रमाण पत्र के लिए डिजिटल रूप से जारी Indigenous Inhabitant Certificate ज़रूरी है। IIC के लिए गांव और प्रशासनिक सर्कल का सत्यापन होता है।" },
    { q: "नागालैंड का ST प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "services.nagaland.gov.in पर ईमेल या DigiLocker/MeriPehchaan से रजिस्टर करें, Services में Scheduled Tribe Certificate चुनें, फॉर्म भरें, कागज़ अपलोड करें, ₹100 भरें और आवेदन संख्या से स्थिति देखें।" },
    { q: "ST प्रमाण पत्र खो गया तो क्या करें?", a: "पोर्टल पर \"Re-Issue of Scheduled Tribe Certificate\" सेवा से दोबारा प्रमाण पत्र के लिए आवेदन करें। Backward Tribe और Indigenous Inhabitant Certificate के लिए भी Re-Issue सेवा है।" },
  ],
  related: [
    { href: "/states/nagaland-income-certificate.html", emoji: "💰", title: "नागालैंड आय प्रमाण पत्र", text: "कहां और कैसे बनता है" },
    { href: "/states/nagaland-domicile-certificate.html", emoji: "🏠", title: "नागालैंड डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://services.nagaland.gov.in/", label: "📝 Unified Services Portal पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
