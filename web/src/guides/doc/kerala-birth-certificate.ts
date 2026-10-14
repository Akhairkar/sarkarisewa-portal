import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - lsgd.kerala.gov.in/en/birth-registration/ (Local Self Government Department Kerala):
//   Kerala Registration of Births and Deaths Rules 1999; 941 gram panchayats, 87 municipalities,
//   6 corporations, Kannur Cantonment Board; K-SMART and ILGMS; mobile, Akshaya, front office;
//   21 days; 21-30 days Rs 2; 30 days-1 year district registrar / municipal secretary; after 1 year
//   RDO; name Rs 5 up to one year; 1970 rule; section 15; download method.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): new fee amounts if the rules changed after the LSGD page, the post-1-year name rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const keralaBirthCertificate: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Kerala Birth Certificate 2026: Apply & Status",
  description: "केरल जन्म प्रमाण पत्र 2026: K-SMART (नगर निकाय) और ILGMS (ग्राम पंचायत) से ऑनलाइन पंजीकरण व डाउनलोड, 21 दिन की सीमा, विलंब शुल्क और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "केरल जन्म प्रमाण पत्र 2026: K-SMART/ILGMS पर आवेदन, देर से पंजीकरण, डाउनलोड",
  lead: "केरल में जन्म-मृत्यु पंजीकरण स्थानीय स्वशासन विभाग की ऑनलाइन प्रणाली से होता है: नगर पालिका और नगर निगम में K-SMART और ग्राम पंचायत में ILGMS। आवेदन मोबाइल, अक्षय केंद्र या स्थानीय निकाय के फ्रंट ऑफिस से हो सकता है। जन्म की सूचना 21 दिन में देनी है; सर्टिफिकेट सिटिज़न पोर्टल से डाउनलोड होता है।",
  facts: [
    ["प्रणाली", "नगर निकाय: K-SMART; ग्राम पंचायत: ILGMS"],
    ["आवेदन कैसे", "मोबाइल, अक्षय केंद्र या निकाय का फ्रंट ऑफिस"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर"],
    ["डाउनलोड", "जन्म की तारीख और माता का नाम (या पहले 3 अक्षर) डालकर"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त"], ["21 से 30 दिन", "पंजीकरण इकाई में <strong>₹2</strong> जुर्माना देकर (LSGD पेज)"], ["30 दिन से 1 साल", "ग्राम पंचायत में जिला जन्म-मृत्यु रजिस्ट्रार, नगर पालिका/निगम में नगर सचिव अनुमति देते हैं"], ["1 साल के बाद", "राजस्व मंडल अधिकारी (RDO) की अनुमति से"]]},
      callout: {"kind": "warn", "html": "<strong>अगस्त 2026 का संशोधन:</strong> समाचार रिपोर्टों के अनुसार संसद ने जन्म-मृत्यु पंजीकरण (संशोधन) विधेयक 2026 पारित किया है। इसमें 1 से 2 साल की देरी पर जिला मजिस्ट्रेट/उप-मंडल मजिस्ट्रेट/अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और 2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लगेगा। यह कब से लागू है, यह हम पक्का नहीं कर सके; देर से पंजीकरण से पहले अपने रजिस्ट्रार से आज का नियम पूछ लें।"},
    },
    {
      id: "kanoon",
      title: "1 अक्टूबर 2023 का नियम: जन्म प्रमाण पत्र क्यों ज़रूरी",
      intro: "जन्म-मृत्यु पंजीकरण (संशोधन) अधिनियम 2023 <strong>1 अक्टूबर 2023</strong> से लागू हुआ। इसके बाद जन्मे बच्चों के लिए जन्म प्रमाण पत्र ही जन्म की तारीख और जगह का एकमात्र प्रमाण माना जाएगा, इन कामों के लिए:",
      list: ["स्कूल/कॉलेज में दाखिला", "ड्राइविंग लाइसेंस", "मतदाता सूची में नाम", "आधार नंबर", "विवाह पंजीकरण", "सरकारी नौकरी में नियुक्ति"],
      callout: {"kind": "info", "html": "यह नियम 1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों पर लागू होता है। इसलिए बच्चे का जन्म पंजीकरण 21 दिन में करा लेना सबसे आसान रास्ता है। केंद्र का पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>."},
    },
    {
      id: "kahan",
      title: "कहां और कैसे आवेदन करें",
      intro: "स्थानीय स्वशासन विभाग (LSGD) के अनुसार केरल में 941 ग्राम पंचायतें, 87 नगर पालिकाएं, 6 नगर निगम और कन्नूर कैंटोनमेंट बोर्ड स्थानीय पंजीकरण इकाइयां हैं। पंजीकरण उसी इकाई में होता है जहां जन्म हुआ।",
      steps: ["जन्म की सूचना 21 दिन के भीतर संबंधित स्थानीय निकाय (पंचायत/नगर पालिका/निगम) को दें।", "आवेदन मोबाइल फोन, <strong>अक्षय केंद्र</strong> या निकाय के फ्रंट ऑफिस से किया जा सकता है।", "नगर पालिका/निगम में प्रणाली <strong>K-SMART</strong> है; ग्राम पंचायत में <strong>ILGMS</strong>। दोनों इन्फॉर्मेशन केरल मिशन ने बनाए हैं।", "देर होने पर ऊपर तालिका के अनुसार अनुमति लें।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल की जन्म रिपोर्ट।", "<strong>माता-पिता का पहचान प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र और जन्म का सबूत; ठीक सूची निकाय के फ्रंट ऑफिस से लें।", "<strong>1970 से पहले के पंजीकरण में</strong> नाम जोड़ना/सुधार मुख्य रजिस्ट्रार की अनुमति से होता है (LSGD पेज)।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>LSGD केरल के अनुसार बिना नाम के दर्ज जन्म में नाम <strong>₹5 विलंब शुल्क</strong> देकर 1 साल तक जुड़वाया जा सकता है। उसके बाद का नियम अलग है (LSGD पेज पर 15 साल बाद नाम जोड़ने की एक विशेष तारीख 13.07.2026 दी गई थी, जो बीत चुकी है)। अभी की स्थिति निकाय के रजिस्ट्रार से पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>नगर पालिका/निगम का सर्टिफिकेट:</strong> K-SMART सिटिज़न पोर्टल के 'Certificate Search' मेन्यू में जन्म की तारीख और माता का नाम (या अंग्रेज़ी के पहले 3 अक्षर) डालकर डाउनलोड करें।", "<strong>ग्राम पंचायत का सर्टिफिकेट:</strong> ILGMS सिटिज़न पोर्टल पर वही तरीका।", "<strong>गलती सुधार:</strong> अधिनियम की धारा 15 के तहत रजिस्टर की गलती ठीक की जा सकती है (LSGD पेज)।", "<strong>शिकायत:</strong> पहले निकाय के सचिव को, फिर LSGD विभाग के पोर्टल पर या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर लिखित शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://lsgd.kerala.gov.in/en/birth-registration/", title: "LSGD केरल: जन्म पंजीकरण प्रक्रिया" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "केरल में जन्म प्रमाण पत्र कैसे डाउनलोड करें?", a: "नगर पालिका/निगम के लिए K-SMART सिटिज़न पोर्टल और ग्राम पंचायत के लिए ILGMS सिटिज़न पोर्टल के 'Certificate Search' मेन्यू में जन्म की तारीख और माता का नाम (या पहले 3 अक्षर) डालें।" },
    { q: "केरल में जन्म पंजीकरण में देर हो जाए तो?", a: "LSGD के अनुसार 21 से 30 दिन में ₹2 जुर्माने के साथ, 30 दिन से 1 साल में जिला रजिस्ट्रार/नगर सचिव की अनुमति से और 1 साल बाद RDO की अनुमति से पंजीकरण होता है। अगस्त 2026 के संशोधन के बाद नियम बदल सकता है।" },
    { q: "केरल में आवेदन कहां से कर सकते हैं?", a: "मोबाइल फोन, अक्षय केंद्र या स्थानीय निकाय (ग्राम पंचायत/नगर पालिका/निगम) के फ्रंट ऑफिस से।" },
    { q: "केरल में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "LSGD केरल के अनुसार बिना नाम वाले पंजीकरण में ₹5 विलंब शुल्क देकर 1 साल तक नाम जोड़ा जा सकता है। उसके बाद की स्थिति अपने निकाय के रजिस्ट्रार से पूछें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/kerala-death-certificate.html", emoji: "🕊️", title: "केरल मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://lsgd.kerala.gov.in/en/birth-registration/", label: "📋 LSGD: पंजीकरण प्रक्रिया" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
