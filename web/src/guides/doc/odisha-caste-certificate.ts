import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - edistrict.odisha.gov.in (e-District Odisha on ServicePlus) home page
//   service descriptions (Revenue & Disaster Management Department):
//   * Scheduled Caste / Scheduled Tribe Certificate: verification that the
//     person and parents belong to the community, community in the
//     Presidential Order for Odisha, person belongs to Odisha and the area;
//     ORTPSA service; 15 working days; "no Government Service charge";
//     documents (any one or more): settlement/consolidation ROR, self
//     declaration, voter ID, land pass book, Aadhaar, PAN, driving licence,
//     recommendation from people's representatives, certificate issued to
//     parents/siblings, others.
//   * OBC Certificate and SEBC Certificate (separate services): ORTPSA, 15
//     working days, no Government Service charge; documents: identity proof
//     (mandatory), self declaration, ROR, land pass book.
//   * Income and Asset Certificate (EWS) separate service.
//   * FAQ: apply online after one-time registration or through a CSC; "Check
//     Your Application Status"; print from Track Application Status ->
//     Delivered -> Output Certificate; "Verify your Certificate" with
//     application reference number + token; e-certificate queries
//     ecertificate.rdm@odisha.gov.in, toll free 1800-121-8242, Sanjog helpline
//     155335.
// - SOPs on the same portal (SC-Certificate-sop.pdf, obc-sop.pdf,
//   sebc-sop.pdf): registration with e-mail and mobile OTP, apply, attach
//   annexures, acknowledgement in inbox, SMS with reference number, download
//   from Track Application Status.
// - ServicePlus national service list: Odisha "Issuance of Scheduled Caste
//   Certificate" 15 days.
// - Search-result extract of the Odisha Gazette notification (ga.odisha.gov.in,
//   No. 114 dated 12.01.2024; page not reachable from our checker): Odisha SC,
//   ST and Backward Classes (Regulation of Issuance and Verification of Caste
//   Certificates) Rules, 2023, superseding the 1980 rules.
// Left out (not confirmable on an official page we could open): validity
// rule of caste certificates, appeal officer under the 2023 rules, the
// state's NCL income limit.
export const odishaCasteCertificate: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Odisha Caste Certificate 2026: Apply & Status",
  description: "ओडिशा जाति प्रमाण पत्र (SC/ST/SEBC/OBC Caste Certificate) 2026: e-District Odisha पर ऑनलाइन आवेदन, ORTPS के 15 कार्य दिवस, कोई सरकारी शुल्क नहीं, कागज़ और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "ओडिशा जाति प्रमाण पत्र 2026: SC/ST/SEBC/OBC के लिए e-District पर आवेदन, कागज़ और स्टेटस",
  lead: "ओडिशा में जाति प्रमाण पत्र राजस्व एवं आपदा प्रबंधन विभाग की सेवा है और <strong>तहसील (तहसीलदार)</strong> से जारी होता है। आवेदन <strong>e-District Odisha (edistrict.odisha.gov.in)</strong> पर ऑनलाइन या CSC से होता है। पोर्टल के अनुसार SC, ST, SEBC और OBC, चारों प्रमाण पत्र ओडिशा लोक सेवा अधिकार कानून (ORTPS) के तहत <strong>15 कार्य दिवस</strong> में मिलते हैं और <strong>कोई सरकारी सेवा शुल्क नहीं</strong> है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (राजस्व विभाग)"],
    ["समय सीमा", "15 कार्य दिवस (ORTPS)"],
    ["सरकारी शुल्क", "कोई नहीं (पोर्टल)"],
  ],
  notice: "<strong>SEBC और OBC अलग हैं:</strong> e-District पर <strong>SEBC Certificate</strong> (ओडिशा की राज्य सूची, राज्य के काम के लिए) और <strong>OBC Certificate</strong> दो अलग सेवाएं हैं। केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण के लिए केंद्र की सूची वाला OBC प्रमाण पत्र चाहिए; विज्ञापन में मांगा गया प्रारूप देखकर सेवा चुनें।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन सा प्रमाण पत्र चुनें",
      table: {
        head: ["सेवा (e-District पर)", "किसके लिए", "समय (ORTPS)"],
        rows: [
          ["<strong>Issuance of Scheduled Caste Certificate</strong>", "अनुसूचित जाति", "15 कार्य दिवस"],
          ["<strong>Issuance of Scheduled Tribe Certificate</strong>", "अनुसूचित जनजाति", "15 कार्य दिवस"],
          ["<strong>Issuance of SEBC Certificate</strong>", "ओडिशा के सामाजिक व शैक्षिक रूप से पिछड़े वर्ग (राज्य सूची)", "15 कार्य दिवस"],
          ["<strong>Issuance of OBC Certificate</strong>", "अन्य पिछड़ा वर्ग", "15 कार्य दिवस"],
          ["<strong>Issuance of Income and Asset Certificate</strong>", "EWS (सामान्य वर्ग के आर्थिक रूप से कमजोर)", "10 कार्य दिवस"],
        ],
      },
      callout: { kind: "info", html: "पोर्टल के अनुसार जाति प्रमाण पत्र सरकारी नौकरी में आरक्षण, स्कूल-कॉलेज की फीस माफी, दाखिले के कोटे और विधानमंडल की आरक्षित सीटों के लिए ज़रूरी है।" },
    },
    {
      id: "patrata",
      title: "SC/ST प्रमाण पत्र में क्या जांचा जाता है",
      intro: "e-District पोर्टल के अनुसार SC/ST के दावे में ये बातें जांची जाती हैं:",
      list: [
        "आवेदक और उसके <strong>माता-पिता</strong> सच में उस समुदाय के हैं।",
        "वह समुदाय <strong>ओडिशा के लिए राष्ट्रपति के आदेश</strong> (SC/ST सूची) में दर्ज है।",
        "आवेदक <strong>ओडिशा का</strong> है और उसी इलाके का है जिसके लिए समुदाय अनुसूचित है।",
        "<strong>धर्म:</strong> ST किसी भी धर्म का हो सकता है। SC के लिए संविधान (अनुसूचित जाति) आदेश के अनुसार हिंदू, सिख या बौद्ध धर्म मानना ज़रूरी है।",
      ],
      html: "<p>ओडिशा सरकार ने जाति प्रमाण पत्र जारी करने और जांचने के लिए 2023 के नए नियम (SC, ST और पिछड़ा वर्ग जाति प्रमाण पत्र नियम) जनवरी 2024 में अधिसूचित किए हैं, जिन्होंने 1980 के पुराने नियमों की जगह ली है।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची)",
      table: {
        head: ["प्रमाण पत्र", "कागज़ (इनमें से एक या ज़्यादा)"],
        rows: [
          ["SC / ST", "अंतिम प्रकाशित सेटलमेंट / कंसॉलिडेशन ROR (खतियान) की कॉपी, स्व-घोषणा, मतदाता पहचान पत्र, लैंड पास बुक, आधार, PAN, ड्राइविंग लाइसेंस, जनप्रतिनिधि की सिफ़ारिश, माता-पिता/भाई-बहन को पहले मिला जाति प्रमाण पत्र"],
          ["SEBC / OBC", "<strong>पहचान का प्रमाण (अनिवार्य)</strong>, स्व-घोषणा, ROR की कॉपी, लैंड पास बुक"],
        ],
      },
      callout: { kind: "ok", html: "<strong>टिप:</strong> परिवार में किसी (पिता, भाई-बहन) का पहले बना जाति प्रमाण पत्र हो तो ज़रूर लगाएं; जांच जल्दी होती है। इसके अलावा पोर्टल पर \"Others\" में कोई भी और काम का कागज़ अपलोड कर सकते हैं। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (पोर्टल की SOP के अनुसार)",
      steps: [
        '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a> खोलें। ऊपर <strong>Services</strong> पर जाकर <strong>Register Yourself</strong> से एक बार रजिस्टर करें; ईमेल और मोबाइल पर आए OTP डालें।',
        "जिस प्रमाण पत्र की ज़रूरत है (SC / ST / SEBC / OBC) उस पर क्लिक करें, <strong>Apply for services → Online</strong> चुनें और ईमेल या मोबाइल से लॉगिन करें।",
        "फॉर्म भरें, जानकारी जांचें (ज़रूरत हो तो Edit करें) और <strong>Annexure</strong> में कागज़ अपलोड करें।",
        "फॉर्म जमा करें। <strong>पावती (Acknowledgement)</strong> आपके खाते में मिलती है; उसे डाउनलोड/प्रिंट कर लें। आवेदन संदर्भ संख्या SMS से भी आती है।",
        "स्वीकृत या खारिज होने पर SMS आता है। प्रमाण पत्र <strong>Track Application Status</strong> से डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "CSC से आवेदन",
      intro: "पोर्टल के अनुसार नागरिक किसी भी <strong>कॉमन सर्विस सेंटर (CSC)</strong> से भी आवेदन कर सकते हैं। ज़रूरी कागज़ों की मूल प्रति और कॉपी साथ ले जाएं, पावती लें। सरकारी शुल्क नहीं है; CSC अपना सेवा शुल्क मांगे तो पहले पूछ लें और रसीद लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और शिकायत",
      list: [
        "<strong>समय सीमा:</strong> SC, ST, SEBC और OBC, चारों ORTPS सेवाएं हैं और पोर्टल के अनुसार <strong>15 कार्य दिवस</strong> में मिलनी चाहिए।",
        "<strong>शुल्क:</strong> पोर्टल पर साफ लिखा है: \"There is no Government Service charge for this service\" (कोई सरकारी सेवा शुल्क नहीं)।",
        "<strong>असल में कितना समय लगता है:</strong> पोर्टल के अपने आंकड़ों में SC और ST प्रमाण पत्र औसतन करीब 27 दिन और OBC/SEBC करीब 23-25 दिन में स्वीकृत हुए हैं। इसलिए ज़रूरत से पहले आवेदन करें।",
      ],
      callout: { kind: "warn", html: "समय सीमा बीत जाए या आवेदन बिना ठोस कारण खारिज हो, तो तहसील से लिखित कारण मांगें और उप-जिलाधिकारी (Sub-Collector) कार्यालय में शिकायत करें। ई-सर्टिफिकेट से जुड़ी शिकायत के लिए टोल फ्री <strong>1800-121-8242</strong> या संजोग हेल्पलाइन <strong>155335</strong> पर फोन करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Check Your Application Status</strong>, या लॉगिन करके View Status of Application → Track Application Status।",
        "<strong>डाउनलोड/प्रिंट:</strong> लॉगिन → Track Application Status → आवेदन के सामने <strong>Delivered</strong> → Application Form Details में <strong>Output Certificate</strong>।",
        "<strong>सत्यापन:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा <strong>Token</strong> डालें; सही होने पर प्रमाण पत्र डाउनलोड हो जाता है।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["SEBC की जगह OBC (या उल्टा) चुना", "राज्य के काम के लिए SEBC, केंद्र के प्रारूप के लिए OBC; ज़रूरत देखकर सेवा चुनें"],
          ["OBC/SEBC में पहचान प्रमाण नहीं लगाया", "पहचान का प्रमाण अनिवार्य है"],
          ["जाति का कोई कागज़ नहीं", "ROR (खतियान), माता-पिता/भाई-बहन का प्रमाण पत्र या जनप्रतिनिधि की सिफ़ारिश लगाएं"],
          ["दूसरे राज्य का समुदाय", "SC/ST के लिए समुदाय ओडिशा की सूची में और आप ओडिशा के होने चाहिए"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल के अनुसार राजस्व विभाग के ई-सर्टिफिकेट से जुड़े सवाल: ईमेल ecertificate.rdm@odisha.gov.in, टोल फ्री <strong>1800-121-8242</strong>, संजोग हेल्पलाइन <strong>155335</strong>। तकनीकी मदद: OCAC, भुवनेश्वर (edistrict@odisha.gov.in, 0674-2567584)।",
    },
  ],
  official: [
    { href: "https://edistrict.odisha.gov.in/", title: "e-District Odisha (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/SC-Certificate-sop.pdf", title: "SC प्रमाण पत्र की SOP (PDF)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/ST-Certificate-sop.pdf", title: "ST प्रमाण पत्र की SOP (PDF)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/sebc-sop.pdf", title: "SEBC प्रमाण पत्र की SOP (PDF)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/obc-sop.pdf", title: "OBC प्रमाण पत्र की SOP (PDF)" },
  ],
  faq: [
    { q: "ओडिशा में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.odisha.gov.in पर एक बार रजिस्टर करें, SC/ST/SEBC/OBC में से सही प्रमाण पत्र चुनें, Apply for services → Online से फॉर्म भरें, कागज़ अपलोड करें और जमा करके पावती रखें।" },
    { q: "ओडिशा जाति प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के अनुसार ORTPS के तहत 15 कार्य दिवस। पोर्टल के आंकड़ों में असल औसत समय करीब 23-27 दिन रहा है, इसलिए पहले से आवेदन करें।" },
    { q: "क्या ओडिशा में जाति प्रमाण पत्र की फीस है?", a: "पोर्टल पर लिखा है कि इस सेवा का कोई सरकारी सेवा शुल्क नहीं है। CSC अपना सेवा शुल्क ले सकता है; रसीद मांगें।" },
    { q: "SEBC और OBC प्रमाण पत्र में क्या फर्क है?", a: "SEBC ओडिशा की राज्य सूची के पिछड़े वर्गों का प्रमाण पत्र है, जो राज्य के काम आता है। केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण के लिए केंद्र की सूची वाला OBC प्रमाण पत्र मांगा जाता है। e-District पर दोनों अलग सेवाएं हैं।" },
    { q: "ओडिशा का जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "e-District होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा टोकन डालें। सही हो तो प्रमाण पत्र डाउनलोड हो जाता है।" },
  ],
  related: [
    { href: "/states/odisha-income-certificate.html", emoji: "💰", title: "ओडिशा आय प्रमाण पत्र", text: "10 कार्य दिवस, 1 साल वैध" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "रेज़िडेंट सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/self-declaration.html", emoji: "✍️", title: "स्व-घोषणा पत्र", text: "नमूना और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.odisha.gov.in/", label: "📝 e-District पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
