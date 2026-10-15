import type { DocGuide } from "./types";

// Goa moved to the central CRS portal from 1 Jul 2026 (goa.gov.in PR-380,
// July 2026; RGI notice): new registrations only on CRS, 1971-Jun 2026 records
// migrating in phases, unmigrated ones still on rbd.goa.gov.in.

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
// - Goa: rbd.goa.gov.in and dpse.goa.gov.in (Chief Registrar = DPSE; digitally signed
//   certificates from 1971 onwards by online payment, Rs 50 as shown on the page);
//   registration.goa.gov.in Birth and Death section (registration is by Panchayat or
//   Municipality, not the civil registrar; records 1914-1970 with civil registrars;
//   corrections online or in person; non-availability certificate); goaonline.gov.in
//   birth certificate service; panchayatsgoa.gov.in certificate verification page.
// Left out (not confirmed): late-registration fees.
export const goaBirthCertificate: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Goa Birth Certificate 2026: Apply & Status",
  description: "गोवा जन्म प्रमाण पत्र 2026: ग्राम पंचायत/नगरपालिका में पंजीकरण, rbd.goa.gov.in और Goa Online से प्रमाण पत्र, सिविल रजिस्ट्रार के पुराने रिकॉर्ड और सुधार।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गोवा जन्म प्रमाण पत्र 2026: पंजीकरण, rbd.goa.gov.in, Goa Online और पुराने रिकॉर्ड",
  lead: "गोवा में जन्म का पंजीकरण आपके क्षेत्र की ग्राम पंचायत या नगर परिषद (नगरपालिका) में होता है, सिविल रजिस्ट्रार कार्यालय में नहीं। 1 जुलाई 2026 से नए पंजीकरण केंद्र सरकार के CRS पोर्टल पर होते हैं; 1971 से जून 2026 तक के पुराने रिकॉर्ड धीरे-धीरे CRS पर ले जाए जा रहे हैं, और जो अभी नहीं गए उनका प्रमाण पत्र राज्य के नियोजन, सांख्यिकी और मूल्यांकन निदेशालय (DPSE) की साइट rbd.goa.gov.in से मिलता है। पुराने रिकॉर्ड सिविल रजिस्ट्रार कार्यालय में हैं।",
  notice: "<strong>1 जुलाई 2026 से बदलाव:</strong> गोवा ने जन्म-मृत्यु पंजीकरण राज्य पोर्टल से केंद्र के Civil Registration System (CRS) पोर्टल पर ले लिया है। नए पंजीकरण अब सिर्फ CRS पर होते हैं और प्रमाण पत्र राष्ट्रीय फॉर्मेट में मिलता है (गोवा सरकार प्रेस विज्ञप्ति PR-380, जुलाई 2026)।",
  facts: [
    ["पंजीयक", "ग्राम पंचायत / नगर परिषद"],
    ["ऑनलाइन प्रमाण पत्र", "<a href=\"https://rbd.goa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rbd.goa.gov.in</a>"],
    ["आवेदन पोर्टल", "<a href=\"https://goaonline.gov.in/Appln/Uil/DeptServices?__DocId=PSE&__ServiceId=PSE03\" target=\"_blank\" rel=\"noopener nofollow\">Goa Online</a>"],
    ["सत्यापन", "<a href=\"http://panchayatsgoa.gov.in/Other_services/BirthDeathCertificateVerify.aspx\" target=\"_blank\" rel=\"noopener nofollow\">पंचायत जन्म-मृत्यु सत्यापन</a>"],
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
      title: "गोवा में कहां होता है पंजीकरण",
      list: [
        "गोवा में <strong>मुख्य पंजीयक</strong> का कार्यालय नियोजन, सांख्यिकी और मूल्यांकन निदेशालय (DPSE) है। वह पंजीकरण की निगरानी करता है।",
        "नया जन्म दर्ज कराने के लिए आपको अपने क्षेत्र की <strong>ग्राम पंचायत या नगर परिषद</strong> के पास जाना होता है (गोवा सरकार के पेज के अनुसार पंजीकरण सिविल रजिस्ट्रार कार्यालय में नहीं होता)।",
        "<strong>ऑनलाइन:</strong> साइट <a href=\"https://rbd.goa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rbd.goa.gov.in</a> के अनुसार 1971 से आगे के रिकॉर्ड के डिजिटल हस्ताक्षर वाले प्रमाण पत्र ऑनलाइन भुगतान (50 रुपये) करके मिल सकते हैं। भुगतान से पहले पोर्टल पर राशि देख लें।",
        "<strong>Goa Online:</strong> <a href=\"https://goaonline.gov.in/Appln/Uil/DeptServices?__DocId=PSE&__ServiceId=PSE03\" target=\"_blank\" rel=\"noopener nofollow\">goaonline.gov.in</a> पर जन्म प्रमाण पत्र की सेवा है। रजिस्टर और लॉगिन करके फॉर्म भरें और स्वीकृति नंबर से स्थिति देखें। संबंधित अधिकारी नगर परिषद या ग्राम पंचायत का पंजीयक/उप-पंजीयक होता है।",
        "<strong>पुराने रिकॉर्ड:</strong> गोवा के पंजीकरण विभाग के पेज के अनुसार 1914 से 1970 तक के रिकॉर्ड सिविल रजिस्ट्रार कार्यालयों में हैं और वहां से प्रमाण पत्र मिलते हैं।",
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
        "<strong>अस्पताल में जन्म:</strong> अस्पताल जन्म की सूचना पंजीयक को देता है। डिस्चार्ज पर पंजीकरण की पर्ची लें।",
        "<strong>घर पर जन्म:</strong> 21 दिन के भीतर अपनी ग्राम पंचायत या नगर परिषद के पंजीयक को सूचना दें।",
        "पहले से दर्ज जन्म का प्रमाण पत्र चाहिए तो rbd.goa.gov.in या Goa Online पर आवेदन करें, या ग्राम पंचायत/नगर परिषद कार्यालय में जाएं।",
        "जन्म कभी दर्ज ही न हुआ हो तो संबंधित कार्यालय से अनुपलब्धता प्रमाण पत्र (non-availability certificate) मिलता है। इसके लिए कागज़ी सबूत, जैसे स्कूल छोड़ने का प्रमाण पत्र, लगाने पड़ते हैं। उसके बाद देर से पंजीकरण के नियम लागू होंगे।",
      ],
    },
    {
      id: "download",
      title: "प्रमाण पत्र की जांच और सुधार",
      list: ["पंचायत क्षेत्र के प्रमाण पत्र की जांच <a href=\"http://panchayatsgoa.gov.in/Other_services/BirthDeathCertificateVerify.aspx\" target=\"_blank\" rel=\"noopener nofollow\">पंचायत जन्म-मृत्यु सत्यापन पेज</a> पर की जा सकती है।", "जन्म-मृत्यु रिकॉर्ड में सुधार का आवेदन संबंधित कार्यालय में ऑनलाइन या सीधे जाकर किया जा सकता है (गोवा के पंजीकरण विभाग के पेज के अनुसार)।"],
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
    { href: "https://rbd.goa.gov.in/", title: "गोवा जन्म-मृत्यु पंजीकरण (rbd.goa.gov.in)" },
    { href: "https://goaonline.gov.in/Appln/Uil/DeptServices?__DocId=PSE&__ServiceId=PSE03", title: "Goa Online: जन्म प्रमाण पत्र सेवा" },
    { href: "https://www.dpse.goa.gov.in/off-crbd.htm", title: "DPSE गोवा: मुख्य पंजीयक कार्यालय" },
    { href: "https://registration.goa.gov.in/?page_id=1169", title: "गोवा पंजीकरण विभाग: जन्म-मृत्यु अनुभाग" },
  ],
  faq: [
    {
      q: "गोवा में जन्म कहां दर्ज कराएं?",
      a: "अपने क्षेत्र की ग्राम पंचायत या नगर परिषद में। गोवा सरकार के पेज के अनुसार पंजीकरण सिविल रजिस्ट्रार कार्यालय में नहीं होता।",
    },
    {
      q: "गोवा में जन्म प्रमाण पत्र ऑनलाइन कहां से मिलेगा?",
      a: "rbd.goa.gov.in पर 1971 से आगे के रिकॉर्ड का प्रमाण पत्र ऑनलाइन भुगतान से मिलता है, और goaonline.gov.in पर भी जन्म प्रमाण पत्र की सेवा है।",
    },
    {
      q: "1971 से पहले के जन्म का प्रमाण पत्र कहां मिलेगा?",
      a: "गोवा के पंजीकरण विभाग के पेज के अनुसार 1914 से 1970 तक के रिकॉर्ड सिविल रजिस्ट्रार कार्यालयों में हैं।",
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
    { href: "/states/goa-death-certificate.html", emoji: "🕊️", title: "गोवा मृत्यु प्रमाण पत्र", text: "मृत्यु का पंजीकरण" },
    { href: "/states/goa-domicile-certificate.html", emoji: "🏠", title: "गोवा मूल निवास प्रमाण पत्र", text: "निवास का सबूत" },
    { href: "/states/goa-ration-card.html", emoji: "🍚", title: "गोवा राशन कार्ड", text: "बच्चे का नाम जोड़ना" },
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://rbd.goa.gov.in/", label: "📝 rbd.goa.gov.in खोलें" },
    { href: "/service/birth-certificate.html", label: "👶 जन्म प्रमाण पत्र गाइड" },
  ],
};
