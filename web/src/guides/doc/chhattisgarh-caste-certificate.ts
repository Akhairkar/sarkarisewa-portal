import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - sewasetu.cgstate.gov.in (Sewa Setu, run by CHiPS; replaces the older
//   e-District CG portal) home page: services "अन्य पिछड़ा वर्ग प्रमाण पत्र",
//   "अनुसूचित जाति / अनुसूचित जनजाति प्रमाण पत्र"; citizen login with
//   username/password or OTP; "आवेदन की स्थिति" (workflow/trackAppStatus);
//   help e-mail sewasetu.helpline@cgchips.in, CHiPS address Raipur; WhatsApp
//   chat link wa.me/919203406400.
// - Sewa Setu service pages (instractionPageNew.do?serviceId=4 and 5),
//   Revenue & Disaster Management Department:
//   * SC/ST: register (also via Sewa Setu Kendra / CSC), apply, upload
//     documents, ARN, SMS on approval, download digitally signed certificate;
//     "स्थायी रूप से मान्य ... जब तक कि जारी करने वाले अधिकारी द्वारा अन्यथा
//     निर्देशित न किया जाए"; fee Rs 30 at Sewa Setu Kendra and online; time
//     limit 22 days; document table (residence proof, caste proof mandatory,
//     affidavit, vanshavali, gram sabha resolution for rural residents, MP
//     Reorganisation Act 2000 s.67 cadre allotment proof).
//   * OBC: same flow; text says "सामान्यतः ... 30 कार्य दिवसों के भीतर" while
//     the service box and user manual say 22 days; permanent validity; fee
//     Rs 30; documents incl. affidavit (mandatory), income proof (mandatory),
//     OBC proof (mandatory).
// - Sewa Setu user manuals 4.pdf (SC/ST) and 5.pdf (OBC): service charge
//   Rs 30 at Lok Seva Kendra/CSC/kiosk, scanning of up to five documents free,
//   no other fee; disposal within 22 days; download from the portal.
// - District NIC pages (bemetara.gov.in, korba.gov.in, bilaspur.gov.in):
//   caste/income certificates online through the e-District portal, apply at
//   CSC or Lok Seva Kendra at collectorate/tehsil; approval authority uploads
//   the certificate with a digital signature.
// Left out (not confirmable on an official page we could open): the exact
// designated/appellate officer under the Lok Seva Guarantee Act, the
// creamy-layer income limit.
export const chhattisgarhCasteCertificate: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Chhattisgarh Caste Certificate 2026: Apply & Status",
  description: "छत्तीसगढ़ जाति प्रमाण पत्र (SC/ST/OBC) 2026: सेवा सेतु (पहले e-District) पर ऑनलाइन आवेदन, ₹30 शुल्क, 22 दिन की समय सीमा, स्थायी प्रमाण पत्र, कागज़ और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "छत्तीसगढ़ जाति प्रमाण पत्र 2026: सेवा सेतु पर SC/ST/OBC आवेदन, कागज़, शुल्क और स्टेटस",
  lead: "छत्तीसगढ़ में SC/ST और OBC प्रमाण पत्र अब <strong>सेवा सेतु पोर्टल (sewasetu.cgstate.gov.in)</strong> पर बनते हैं, जिसने पुराने e-District पोर्टल की जगह ली है। आवेदन घर से ऑनलाइन या सेवा सेतु केंद्र / CSC से होता है; शुल्क <strong>₹30</strong> है और पोर्टल पर समय सीमा <strong>22 दिन</strong> लिखी है। पोर्टल के अनुसार यह प्रमाण पत्र <strong>स्थायी रूप से मान्य</strong> रहता है और डिजिटल हस्ताक्षर के साथ पोर्टल से डाउनलोड होता है।",
  facts: [
    ["पोर्टल", '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a>'],
    ["शुल्क", "₹30 (ऑनलाइन या सेवा सेतु केंद्र)"],
    ["समय सीमा", "22 दिन (पोर्टल)"],
    ["वैधता", "स्थायी (जब तक अधिकारी अन्यथा न कहें)"],
  ],
  notice: "<strong>पोर्टल बदला है:</strong> पहले यह सेवा e-District छत्तीसगढ़ पोर्टल पर थी; अब वही सेवाएं <strong>सेवा सेतु</strong> पर हैं (चिप्स, छत्तीसगढ़ शासन)। पुराने लिंक या पुराने लोक सेवा केंद्र के नाम से भ्रमित न हों; नज़दीकी केंद्र अब \"सेवा सेतु केंद्र\" कहलाते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन सी सेवा चुनें",
      table: {
        head: ["सेवा (सेवा सेतु पर)", "किसके लिए", "शुल्क / समय"],
        rows: [
          ["<strong>अनुसूचित जाति / अनुसूचित जनजाति प्रमाण पत्र</strong>", "SC या ST", "₹30 / 22 दिन"],
          ["<strong>अन्य पिछड़ा वर्ग प्रमाण पत्र</strong>", "OBC (आय का प्रमाण भी लगता है)", "₹30 / 22 दिन"],
        ],
      },
      callout: { kind: "info", html: "दोनों सेवाएं <strong>राजस्व एवं आपदा प्रबंधन विभाग</strong> की हैं। OBC के पोर्टल विवरण में एक जगह \"सामान्यतः 30 कार्य दिवस\" भी लिखा है, जबकि सेवा-बॉक्स और उपयोग पुस्तिका में 22 दिन हैं। केंद्र सरकार की नौकरी में OBC आरक्षण के लिए भर्ती के विज्ञापन में मांगा गया (केंद्रीय) प्रारूप देखें और ज़रूरत हो तो तहसील/SDM कार्यालय से पूछें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (सेवा सेतु की सूची)",
      table: {
        head: ["कागज़", "SC/ST", "OBC"],
        rows: [
          ["<strong>जाति का प्रमाण</strong>: परिवार में पहले बना जाति प्रमाण पत्र, स्कूल का स्थानांतरण प्रमाण पत्र (TC), मिसल / अधिकार अभिलेख / जमाबंदी, 1931 की जनगणना पंजी, 1949 की नागरिक पंजी, दाखिल-खारिज पंजी, सरपंच/पार्षद का प्रमाण पत्र आदि", "अनिवार्य", "अनिवार्य"],
          ["<strong>शपथ पत्र</strong>", "वैकल्पिक", "अनिवार्य"],
          ["<strong>आय का प्रमाण</strong>: पटवारी/सरपंच/पार्षद का प्रमाण पत्र, नियोक्ता का आय प्रमाण पत्र/फॉर्म 16, राशन कार्ड आदि", "नहीं मांगा", "अनिवार्य"],
          ["<strong>निवास का प्रमाण</strong>: मूल निवासी प्रमाण पत्र, राशन कार्ड, बिजली बिल, वोटर कार्ड, जन्म प्रमाण पत्र, घर/ज़मीन का कागज़ आदि", "वैकल्पिक", "वैकल्पिक"],
          ["<strong>वंशावली</strong>", "वैकल्पिक", "वैकल्पिक"],
          ["<strong>ग्राम सभा प्रस्ताव</strong> (ग्रामीण क्षेत्र के निवासी के लिए)", "वैकल्पिक", "वैकल्पिक"],
          ["मध्यप्रदेश पुनर्गठन अधिनियम 2000 की धारा 67 के तहत छत्तीसगढ़ संवर्ग आवंटन का प्रमाण (जिन पर लागू हो)", "वैकल्पिक", "वैकल्पिक"],
        ],
      },
      callout: { kind: "ok", html: "<strong>पुराना कागज़ नहीं है?</strong> सूची में \"असमर्थता / अनुपलब्धता का प्रमाण\", वंशावली और ग्राम सभा प्रस्ताव जैसे विकल्प भी हैं। परिवार में किसी का पहले बना जाति प्रमाण पत्र सबसे आसान सबूत है। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a> खोलें और <strong>नागरिक लॉग-इन</strong> में \"नया पंजीयन करने हेतु क्लिक करें\" से रजिस्टर करें। लॉगिन यूज़रनेम-पासवर्ड या मोबाइल OTP से होता है।',
        "<strong>अनुसूचित जाति / अनुसूचित जनजाति प्रमाण पत्र</strong> या <strong>अन्य पिछड़ा वर्ग प्रमाण पत्र</strong> पर \"अप्लाई करें\" दबाएं।",
        "आधार ई-प्रमाणीकरण करें (पोर्टल मांगे तो), फिर फॉर्म में सामान्य विवरण, वर्तमान और स्थायी पता भरें और सहेजें।",
        "मांगे गए कागज़ अपलोड करें।",
        "<strong>₹30 शुल्क</strong> का भुगतान करें, घोषणा पर टिक करके जमा करें।",
        "<strong>पावती</strong> का प्रिंट रखें; इसमें आवेदन संदर्भ संख्या (ARN) होती है।",
      ],
    },
    {
      id: "offline",
      title: "सेवा सेतु केंद्र / CSC से",
      intro: "पोर्टल के अनुसार आवेदन <strong>सेवा सेतु केंद्र (पहले लोक सेवा केंद्र)</strong> या <strong>कॉमन सर्विस सेंटर (CSC)</strong> से भी होता है। उपयोग पुस्तिका के अनुसार केंद्र पर सेवा शुल्क ₹30 तय है, पांच कागज़ों तक स्कैनिंग मुफ्त है और इसके अलावा कोई शुल्क देय नहीं है। ज़्यादा पैसे मांगे जाएं तो रसीद मांगें और शिकायत करें।",
    },
    {
      id: "samay",
      title: "समय सीमा, वैधता और शिकायत",
      list: [
        "<strong>समय सीमा:</strong> पोर्टल और उपयोग पुस्तिका के अनुसार आवेदन जमा करने के बाद <strong>22 दिन</strong> में निराकरण।",
        "<strong>वैधता:</strong> पोर्टल के अनुसार प्रमाण पत्र <strong>स्थायी रूप से मान्य</strong> रहता है, जब तक जारी करने वाले अधिकारी अन्यथा निर्देश न दें; यह राज्य भर में सभी सरकारी और कानूनी कामों के लिए मान्य है।",
        "<strong>शुल्क:</strong> ₹30, ऑनलाइन और सेवा सेतु केंद्र दोनों पर।",
      ],
      callout: { kind: "warn", html: "समय पर प्रमाण पत्र न मिले तो सेवा सेतु पोर्टल पर <strong>शिकायत पटल</strong> का इस्तेमाल करें, या ईमेल sewasetu.helpline@cgchips.in पर लिखें। आवेदन संख्या ज़रूर बताएं।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>आवेदन की स्थिति</strong> में आवेदन संदर्भ संख्या और कैप्चा डालें।",
        "<strong>डाउनलोड:</strong> स्वीकृत होने पर SMS आता है; पोर्टल से <strong>डिजिटल हस्ताक्षर वाला</strong> प्रमाण पत्र सीधे डाउनलोड करें।",
        "<strong>सत्यापन:</strong> प्रमाण पत्र पर जारी करने वाले अधिकारी के डिजिटल हस्ताक्षर होते हैं; संस्था ज़रूरत हो तो तहसील/अनुविभाग कार्यालय से जांच करा सकती है।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जाति का प्रमाण नहीं लगाया", "यह अनिवार्य है; पुराना जाति प्रमाण पत्र, TC, मिसल/जमाबंदी या सरपंच/पार्षद का प्रमाण पत्र लगाएं"],
          ["OBC में शपथ पत्र या आय का प्रमाण छूटा", "OBC में दोनों अनिवार्य हैं"],
          ["गांव के निवासी पर कोई पुराना रिकॉर्ड नहीं", "वंशावली और ग्राम सभा प्रस्ताव लगाएं"],
          ["मध्यप्रदेश से संवर्ग आवंटन वाले कर्मचारी का परिवार", "धारा 67 के तहत छत्तीसगढ़ संवर्ग आवंटन का आदेश लगाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "सेवा सेतु पोर्टल पर ईमेल <strong>sewasetu.helpline@cgchips.in</strong>, शिकायत पटल और WhatsApp चैट का विकल्प है। पता: छत्तीसगढ़ इन्फोटेक प्रमोशन सोसाइटी (चिप्स), स्टेट डाटा सेंटर बिल्डिंग, सिविल लाइंस, रायपुर।",
    },
  ],
  official: [
    { href: "https://sewasetu.cgstate.gov.in/", title: "सेवा सेतु छत्तीसगढ़ (आवेदन, स्टेटस, शिकायत)" },
    { href: "https://sewasetu.cgstate.gov.in/instractionPageNew.do?serviceId=4&lang=hi", title: "SC/ST प्रमाण पत्र: सेवा विवरण और कागज़" },
    { href: "https://sewasetu.cgstate.gov.in/instractionPageNew.do?serviceId=5&lang=hi", title: "OBC प्रमाण पत्र: सेवा विवरण और कागज़" },
    { href: "https://sewasetu.cgstate.gov.in/resources/edistrict/user-manual/new/4.pdf", title: "SC/ST प्रमाण पत्र की उपयोग पुस्तिका (PDF)" },
    { href: "https://sewasetu.cgstate.gov.in/resources/edistrict/user-manual/new/5.pdf", title: "OBC प्रमाण पत्र की उपयोग पुस्तिका (PDF)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sewasetu.cgstate.gov.in पर नागरिक के रूप में पंजीयन करें, SC/ST या OBC प्रमाण पत्र सेवा चुनें, आधार ई-प्रमाणीकरण करें, फॉर्म भरें, कागज़ अपलोड करें, ₹30 शुल्क देकर जमा करें और पावती रखें।" },
    { q: "छत्तीसगढ़ जाति प्रमाण पत्र कितने दिन में बनता है?", a: "सेवा सेतु पोर्टल और उपयोग पुस्तिका के अनुसार 22 दिन में आवेदन का निराकरण होता है।" },
    { q: "छत्तीसगढ़ जाति प्रमाण पत्र की फीस कितनी है?", a: "₹30, ऑनलाइन और सेवा सेतु केंद्र दोनों पर। उपयोग पुस्तिका के अनुसार पांच कागज़ों तक स्कैनिंग मुफ्त है और इसके अलावा कोई शुल्क देय नहीं है।" },
    { q: "क्या छत्तीसगढ़ का जाति प्रमाण पत्र स्थायी है?", a: "हां। सेवा सेतु के अनुसार यह स्थायी रूप से मान्य रहता है, जब तक जारी करने वाले अधिकारी अन्यथा निर्देश न दें।" },
    { q: "e-District छत्तीसगढ़ पोर्टल कहां गया?", a: "जाति, आय और निवास जैसे प्रमाण पत्र अब सेवा सेतु पोर्टल (sewasetu.cgstate.gov.in) पर मिलते हैं, जिसे चिप्स चलाता है।" },
  ],
  related: [
    { href: "/states/chhattisgarh-income-certificate.html", emoji: "💰", title: "छत्तीसगढ़ आय प्रमाण पत्र", text: "₹30, 7 दिन, 1 साल वैध" },
    { href: "/states/chhattisgarh-domicile-certificate.html", emoji: "🏠", title: "छत्तीसगढ़ निवास प्रमाण पत्र", text: "मूल निवासी प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.cgstate.gov.in/", label: "📝 सेवा सेतु पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
