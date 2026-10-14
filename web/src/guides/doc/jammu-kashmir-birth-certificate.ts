import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - National (all states): Registration of Births and Deaths (Amendment) Act, 2023 in force
//   1 Oct 2023 (MHA S.O. 4058(E), 13 Sep 2023): section 17(3) single proof of date and
//   place of birth for persons born on/after that date; section 25A appeal (30 days to
//   District Registrar, then Chief Registrar; decided in 90 days). Registration of Births
//   and Deaths (Amendment) Act, 2026 (12 of 2026; in force 1 Oct 2026, S.O. 5081(E),
//   16 Sep 2026): delayed registration after 1-2 years on DM/SDM/authorised Executive
//   Magistrate order, after 2 years on JMFC order. Registrar General of India CRS FAQ
//   (21 days free, name free in 12 months and up to 15 years with fee, one free copy) and
//   crsorgi.gov.in public-portal pages (download by Application Reference No. and OTP).
// - Late-registration fee amounts left out everywhere: they differ by state rules.
// - Jammu & Kashmir: jansugam.jk.gov.in ServicePlus service pages (issuance of birth
//   certificate and inclusion of name, 30-day delivery period, correction, non-
//   availability certificate; registration and login required); jammu.nic.in and
//   reasi.nic.in service pages (urban: municipal corporation/EO; rural: SHO/police,
//   district pages differ); budgam.nic.in page (jkhome.ulb.gov.in/birthcertificate).
// Left out (not confirmed): fees, Health Department/CRS late-registration process.
export const jammuKashmirBirthCertificate: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू और कश्मीर" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Jammu & Kashmir Birth Certificate 2026",
  description: "जम्मू और कश्मीर जन्म प्रमाण पत्र 2026: JK Jansugam (ServicePlus) पर जन्म प्रमाण पत्र और नाम जोड़ने की सेवा, शहरी-ग्रामीण पंजीयक, देर से पंजीकरण के नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "जम्मू और कश्मीर जन्म प्रमाण पत्र 2026: Jansugam पोर्टल, पंजीयक, देर से पंजीकरण और नाम जोड़ना",
  lead: "जम्मू और कश्मीर में जन्म प्रमाण पत्र की ऑनलाइन सेवा राज्य के JK Jansugam (ServicePlus) पोर्टल पर \"जन्म प्रमाण पत्र जारी करना और नाम जोड़ना\" के रूप में दी गई है। 21 दिन के भीतर पंजीकरण मुफ़्त है। शहर में नगर निगम या नगरपालिका और गांव में ज़िला वेबसाइटों के अनुसार संबंधित पुलिस अधिकारी (SHO) पंजीयक के रूप में काम करते हैं।",
  facts: [
    ["पोर्टल", "<a href=\"https://jansugam.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">JK Jansugam (jansugam.jk.gov.in)</a>"],
    ["सेवा", "<a href=\"https://jansugam.jk.gov.in/getServiceDesc.html?serviceId=16980009\" target=\"_blank\" rel=\"noopener nofollow\">जन्म प्रमाण पत्र और नाम जोड़ना</a>"],
    ["पोर्टल पर समय", "30 दिन (छुट्टियां छोड़कर)"],
    ["21 दिन के भीतर", "पंजीकरण मुफ़्त"],
  ],
  sections: [
    {
      id: "kyon",
      title: "जन्म प्रमाण पत्र क्यों ज़रूरी है",
      list: [
        "<strong>1 अक्टूबर 2023 या उसके बाद जन्मे</strong> बच्चे के लिए जन्म और मृत्यु पंजीकरण (संशोधन) अधिनियम, 2023 के अनुसार जन्म की तारीख और जगह यही प्रमाण पत्र साबित करता है। यह स्कूल-कॉलेज में दाखिले, ड्राइविंग लाइसेंस, वोटर सूची, विवाह पंजीकरण, सरकारी या सरकारी निकाय की नौकरी, पासपोर्ट और आधार नंबर के लिए लागू है।",
        "इस तारीख से पहले जन्मे लोगों पर यह नियम लागू नहीं होता।",
        "पंजीकरण के समय माता-पिता और सूचना देने वाले का <strong>आधार नंबर</strong> (अगर उपलब्ध हो) दर्ज किया जाता है।",
        "सूचना देने वाले को <strong>एक प्रति मुफ़्त</strong> मिलती है (अधिनियम की धारा 12)। और प्रतियां तय शुल्क देकर मिलती हैं।",
      ],
    },
    {
      id: "kahan",
      title: "जम्मू और कश्मीर में पंजीयक कौन है",
      list: [
        "<strong>शहरी क्षेत्र:</strong> जम्मू ज़िले की वेबसाइट के अनुसार जम्मू नगर निगम और नगरपालिकाओं के कार्यकारी अधिकारी प्रमाण पत्र जारी करते हैं। श्रीनगर नगर निगम की सेवा भी राष्ट्रीय सेवा पोर्टल पर सूचीबद्ध है।",
        "<strong>ग्रामीण क्षेत्र:</strong> जम्मू ज़िले के पेज के अनुसार संबंधित <strong>SHO (पुलिस थाना प्रभारी)</strong>। रियासी ज़िले का पेज भी ग्रामीण क्षेत्र में पुलिस को यह काम देना बताता है, जबकि शहरी क्षेत्र में विभाग को।",
        "ज़िला पेजों में कुछ अंतर है, इसलिए अपने गांव या कस्बे का पंजीयक कौन है, यह अपने ज़िला कार्यालय या थाने से पक्का करें।",
        "<strong>पोर्टल:</strong> <a href=\"https://jansugam.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">JK Jansugam</a> पर जन्म प्रमाण पत्र जारी करने और नाम जोड़ने की सेवा, सुधार की सेवा और जन्म रिकॉर्ड का <strong>अनुपलब्धता प्रमाण पत्र</strong> (Non-Availability Certificate) की सेवा दी गई है। तीनों के लिए पोर्टल पर पंजीकरण करना होता है।",
      ],
    },
    {
      id: "kaun",
      title: "पंजीकरण कौन कराता है",
      list: [
        "<strong>अस्पताल या नर्सिंग होम में जन्म:</strong> अस्पताल का प्रभारी डॉक्टर या उसका अधिकृत व्यक्ति जन्म की सूचना पंजीयक को देता है। माता-पिता यह काम नहीं करते। अस्पताल से पंजीकरण की पर्ची या नंबर ज़रूर लें।",
        "<strong>घर पर जन्म:</strong> घर का मुखिया, उसके न होने पर घर में मौजूद उसका निकट संबंधी, या सबसे बड़ा वयस्क सूचना देता है। आंगनवाड़ी कार्यकर्ता, ANM और आशा जैसे अधिसूचित लोग भी सूचना दे सकते हैं।",
        "<strong>अविवाहित या अकेली मां, गोद लिया बच्चा, सरोगेसी:</strong> 2023 के संशोधन में इनके लिए सूचना देने वाले तय किए गए हैं, जैसे अकेली मां के लिए माता खुद और गोद लेने पर गोद लेने वाले माता-पिता।",
        "<strong>जन्म की जगह के हिसाब से पंजीकरण:</strong> जन्म जहां हुआ, वहीं के नगरपालिका, पंचायत या स्थानीय निकाय के पंजीयक (Registrar) के पास पंजीकरण होता है। कहीं और रहने पर भी जन्म की जगह का पंजीयक ही रिकॉर्ड रखता है।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन का तरीका",
      steps: [
        "<strong>अस्पताल में जन्म:</strong> अस्पताल सूचना देता है। डिस्चार्ज पर पंजीकरण की पर्ची लें।",
        "<strong>घर पर जन्म:</strong> 21 दिन के भीतर अपने क्षेत्र के पंजीयक (शहर में निकाय, गांव में संबंधित थाना) को सूचना दें।",
        "ऑनलाइन आवेदन के लिए <a href=\"https://jansugam.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jansugam.jk.gov.in</a> पर रजिस्टर और लॉगिन करें। Apply for Services में View all available services खोलकर जन्म प्रमाण पत्र की सेवा खोजें।",
        "<a href=\"https://jansugam.jk.gov.in/getServiceDesc.html?serviceId=16980009\" target=\"_blank\" rel=\"noopener nofollow\">सेवा के पेज</a> के अनुसार इस सेवा की समय-सीमा 30 दिन (सरकारी छुट्टियां छोड़कर) है।",
        "जन्म का रिकॉर्ड न मिले (कभी दर्ज ही न हुआ हो) तो पोर्टल की अनुपलब्धता प्रमाण पत्र वाली सेवा देखें। उसके बाद देर से पंजीकरण के नियम लागू होंगे।",
      ],
      callout: {
        kind: "info",
        html: "बडगाम ज़िले का पेज एक दूसरे पोर्टल jkhome.ulb.gov.in/birthcertificate पर पिता का नाम, जन्म की तारीख, ईमेल और फोन से रिकॉर्ड निकालने की बात करता है। यह पेज पुराना हो सकता है, इसलिए इस्तेमाल से पहले अपने ज़िला कार्यालय से पुष्टि कर लें।",
      },
    },
    {
      id: "crs-download",
      title: "CRS पोर्टल से प्रमाण पत्र डाउनलोड करना",
      intro: "जिन राज्यों और इकाइयों का रिकॉर्ड केंद्रीय CRS पोर्टल पर है, वहां <a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate पेज</a> से प्रमाण पत्र निकलता है।",
      steps: [
        "<a href=\"https://dc.crsorgi.gov.in/crs/dwnld\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in/crs/dwnld</a> खोलें।",
        "बॉक्स में <strong>Application Reference No.</strong> डालें और आगे बढ़ें।",
        "आपके पंजीकृत मोबाइल पर <strong>OTP</strong> आएगा। उसे डालकर सत्यापन करें।",
        "सत्यापन के बाद प्रमाण पत्र <strong>PDF</strong> में डाउनलोड हो जाएगा।",
      ],
      callout: {
        kind: "info",
        html: "संदर्भ नंबर नहीं मिल रहा तो अस्पताल या पंजीयक कार्यालय से पूछें। CRS पोर्टल की जानकारी के अनुसार आम नागरिक खुद कुल चार घटनाएं (events) तक ही दर्ज कर सकता है।",
      },
    },
    {
      id: "samay",
      title: "समय-सीमा और देर से पंजीकरण",
      intro: "ये केंद्रीय कानून (1969 का अधिनियम, 2023 और 2026 के संशोधन के साथ) के नियम हैं। देरी का शुल्क हर राज्य के नियमों से तय होता है, इसलिए यहां शुल्क की राशि नहीं लिखी है।",
      table: {
        head: ["जन्म के कितने बाद", "क्या करना होगा"],
        rows: [
          ["21 दिन के भीतर", "<strong>कोई शुल्क नहीं।</strong>"],
          ["21 से 30 दिन", "देरी का शुल्क देकर पंजीयक के पास पंजीकरण।"],
          ["30 दिन से 1 साल", "ज़िला पंजीयक (District Registrar) या तय अधिकारी की <strong>लिखित अनुमति</strong>, देरी का शुल्क और स्व-प्रमाणित दस्तावेज़ (Form 14)।"],
          ["1 साल से 2 साल", "ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या ज़िला मजिस्ट्रेट द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, जो 1 अक्टूबर 2026 से लागू है)"],
          ["2 साल के बाद", "प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का <strong>आदेश</strong> और शुल्क। (2026 के संशोधन से, 1 अक्टूबर 2026 से लागू)"],
        ],
      },
      callout: {
        kind: "warn",
        html: "देर से पंजीकरण में हर जगह जन्म का कोई सबूत मांगा जाता है, जैसे अस्पताल का रिकॉर्ड, टीकाकरण कार्ड या स्कूल का रिकॉर्ड। कौन सा सबूत चलेगा, यह आपके पंजीयक और राज्य के नियमों पर है। जाने से पहले पंजीयक कार्यालय से पूछ लें।",
      },
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना और गलती सुधारना",
      list: [
        "बच्चे के नाम के बिना भी जन्म दर्ज हो सकता है। नाम बाद में जोड़ा जा सकता है।",
        "पंजीकरण के <strong>12 महीने के भीतर नाम जोड़ना मुफ़्त</strong> है।",
        "12 महीने के बाद पंजीकरण की तारीख से <strong>15 साल तक</strong> नाम तय शुल्क देकर जुड़ता है (शुल्क राज्य के नियमों में तय)।",
        "नाम या दूसरी जानकारी में गलती हो तो सुधार (correction) की व्यवस्था अधिनियम की धारा 15 और राज्य के नियमों के तहत है। इसके लिए पंजीयक को प्रमाण के साथ आवेदन दें।",
      ],
    },
    {
      id: "shikayat",
      title: "आवेदन अटके या खारिज हो तो कहां जाएं",
      list: [
        "पंजीयक के किसी फैसले या आदेश से असंतुष्ट हों तो <strong>30 दिन के भीतर ज़िला पंजीयक</strong> (District Registrar) के पास अपील कर सकते हैं (अधिनियम की धारा 25A)।",
        "ज़िला पंजीयक के आदेश के खिलाफ <strong>30 दिन के भीतर मुख्य पंजीयक</strong> (Chief Registrar) के पास अपील होती है।",
        "अपील का फैसला <strong>90 दिन</strong> के भीतर करना ज़रूरी है।",
      ],
    },
    {
      id: "rashtriya",
      title: "राष्ट्रीय CRS पोर्टल और सत्यापन",
      list: [
        "केंद्र सरकार का नागरिक पंजीकरण पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>। वहां जन्म की ऑनलाइन रिपोर्ट, देरी के शुल्क का भुगतान, आवेदन की स्थिति देखना और सुधार का आवेदन जैसी सेवाएं हैं।",
        "यह पोर्टल किसी राज्य के हर पंजीकरण केंद्र के लिए चालू हो, यह ज़रूरी नहीं। अपने पंजीयक से पूछें कि आपका रिकॉर्ड किस पोर्टल पर है।",
        "प्रमाण पत्र फोन में रखना हो तो देखें: <a href=\"/service/digilocker.html\">DigiLocker गाइड</a>।",
      ],
    },
  ],
  official: [
    { href: "https://jansugam.jk.gov.in/", title: "JK Jansugam (ServicePlus): जम्मू और कश्मीर" },
    { href: "https://jansugam.jk.gov.in/getServiceDesc.html?serviceId=16980009", title: "JK Jansugam: जन्म प्रमाण पत्र और नाम जोड़ने की सेवा" },
    { href: "https://jammu.nic.in/service/birth-certificate/", title: "जम्मू ज़िला: जन्म प्रमाण पत्र" },
    { href: "https://reasi.nic.in/service/apply-for-death-certificate/", title: "रियासी ज़िला: जन्म-मृत्यु प्रमाण पत्र" },
    { href: "https://crsorgi.gov.in/", title: "केंद्रीय CRS पोर्टल (crsorgi.gov.in)" },
  ],
  faq: [
    {
      q: "जम्मू और कश्मीर में जन्म प्रमाण पत्र के लिए ऑनलाइन आवेदन कहां होता है?",
      a: "JK Jansugam (ServicePlus) पोर्टल jansugam.jk.gov.in पर, जहां जन्म प्रमाण पत्र जारी करने और नाम जोड़ने की सेवा है। इसके लिए पोर्टल पर रजिस्टर करके लॉगिन करना होता है।",
    },
    {
      q: "जम्मू और कश्मीर में गांव में जन्म कहां दर्ज होता है?",
      a: "जम्मू और रियासी ज़िलों की वेबसाइटों के अनुसार ग्रामीण क्षेत्र में संबंधित थाना (SHO) यह काम करता है। अपने ज़िले में इसकी पुष्टि कर लें।",
    },
    {
      q: "जम्मू और कश्मीर में देर से पंजीकरण का शुल्क कितना है?",
      a: "हमें वर्तमान राशि और स्वास्थ्य विभाग/CRS की देर से पंजीकरण प्रक्रिया आधिकारिक पेज से नहीं मिली, इसलिए यहां राशि नहीं लिखी। अपने पंजीयक से पूछें।",
    },
    {
      q: "जन्म के 21 दिन के भीतर पंजीकरण में कितना शुल्क लगता है?",
      a: "कुछ नहीं। राष्ट्रीय CRS की जानकारी के अनुसार 21 दिन के भीतर सूचना देने पर कोई शुल्क नहीं लगता।",
    },
    {
      q: "क्या बिना नाम के जन्म दर्ज हो सकता है?",
      a: "हां। नाम 12 महीने के भीतर मुफ़्त जुड़ता है और उसके बाद पंजीकरण की तारीख से 15 साल तक तय शुल्क देकर जुड़ता है।",
    },
    {
      q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?",
      a: "1 अक्टूबर 2023 या उसके बाद जन्मे लोगों के लिए हां: स्कूल दाखिले, ड्राइविंग लाइसेंस, वोटर सूची, विवाह पंजीकरण, सरकारी नौकरी, पासपोर्ट और आधार के लिए जन्म की तारीख और जगह इसी प्रमाण पत्र से साबित होती है। उससे पहले जन्मे लोगों पर यह नियम लागू नहीं होता।",
    },
    {
      q: "एक साल से ज़्यादा देर हो जाए तो क्या करें?",
      a: "एक से दो साल के बीच ज़िला मजिस्ट्रेट, उप-खंड मजिस्ट्रेट या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश चाहिए। दो साल के बाद प्रथम श्रेणी के न्यायिक मजिस्ट्रेट का आदेश चाहिए। यह 1 अक्टूबर 2026 से लागू 2026 के संशोधन के अनुसार है। शुल्क राज्य के नियमों से तय होता है।",
    },
    {
      q: "पंजीयक का फैसला गलत लगे तो कहां अपील करें?",
      a: "फैसले के 30 दिन के भीतर ज़िला पंजीयक के पास, और उसके आदेश पर 30 दिन के भीतर मुख्य पंजीयक के पास। फैसला 90 दिन में होना चाहिए (धारा 25A)।",
    },
  ],
  related: [
    { href: "/states/jammu-kashmir-death-certificate.html", emoji: "🕊️", title: "जम्मू और कश्मीर मृत्यु प्रमाण पत्र", text: "मृत्यु का पंजीकरण" },
    { href: "/states/jammu-kashmir-domicile-certificate.html", emoji: "🏠", title: "जम्मू और कश्मीर मूल निवास प्रमाण पत्र", text: "निवास का सबूत" },
    { href: "/states/jammu-kashmir-ration-card.html", emoji: "🍚", title: "जम्मू और कश्मीर राशन कार्ड", text: "बच्चे का नाम जोड़ना" },
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://jansugam.jk.gov.in/", label: "📝 JK Jansugam खोलें" },
    { href: "/service/birth-certificate.html", label: "👶 जन्म प्रमाण पत्र गाइड" },
  ],
};
