import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - sevasindhu.karnataka.gov.in category pages (search extracts, portal itself not reachable
//   from our checker): 'Application for Registration of Birth' (fee nil, service charge Rs 35;
//   RCH card or birth summary, address proof, Form 1, declaration; Indian citizens) and 'Issue of
//   Birth Certificate' (application fee Rs 5, service charge Rs 20 at Grama One, B1, K1; no
//   documents).
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): registrar designation for rural/urban areas, time limit, late-registration rules and fees, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const karnatakaBirthCertificate: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Karnataka Birth Certificate 2026: Apply & Status",
  description: "कर्नाटक जन्म प्रमाण पत्र 2026: Seva Sindhu पर जन्म पंजीकरण और सर्टिफिकेट सेवाएं, ज़रूरी कागज़, 21 दिन की सीमा, देर से पंजीकरण और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "कर्नाटक जन्म प्रमाण पत्र 2026: Seva Sindhu पर आवेदन, कागज़, सर्टिफिकेट",
  lead: "कर्नाटक के Seva Sindhu पोर्टल पर जन्म से जुड़ी दो अलग सेवाएं दर्ज हैं: 'जन्म पंजीकरण के लिए आवेदन' और 'जन्म प्रमाण पत्र जारी करना'। पंजीकरण के लिए RCH कार्ड या जन्म सारांश, पते का प्रमाण, फॉर्म 1 और घोषणा-पत्र अपलोड करना होता है। जन्म की सूचना 21 दिन में देनी है।",
  facts: [
    ["पोर्टल", "<a href=\"https://sevasindhu.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sevasindhu.karnataka.gov.in</a>"],
    ["दो सेवाएं", "जन्म पंजीकरण; जन्म प्रमाण पत्र जारी करना"],
    ["पंजीकरण के कागज़", "RCH कार्ड/जन्म सारांश, पते का प्रमाण, फॉर्म 1, घोषणा"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त। कानून (जन्म-मृत्यु पंजीकरण अधिनियम 1969) में यही समय सीमा है"], ["21 से 30 दिन", "विलंब शुल्क देकर पंजीकरण"], ["30 दिन से 1 साल", "निर्धारित अधिकारी की लिखित अनुमति और शुल्क"], ["1 साल के बाद", "मजिस्ट्रेट का आदेश और शुल्क"]]},
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
      title: "Seva Sindhu पर आवेदन",
      intro: "Seva Sindhu के सेवा पेजों के अनुसार दोनों सेवाएं भारत के नागरिक के लिए हैं। नीचे के शुल्क Seva Sindhu पेज पर दिखे आंकड़े हैं; आवेदन से पहले पोर्टल पर ताज़ा राशि देख लें।",
      steps: ["<a href=\"https://sevasindhu.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sevasindhu.karnataka.gov.in</a> खोलें और 'Births, Deaths and Marriage Related Services' में जाएं।", "<strong>नया जन्म पंजीकरण:</strong> 'Application for Registration of Birth' चुनें। पेज पर शुल्क शून्य और सेवा शुल्क ₹35 दिखता है। RCH कार्ड या जन्म सारांश, पते का प्रमाण, फॉर्म 1 और घोषणा-पत्र अपलोड करें।", "<strong>पंजीकृत जन्म का सर्टिफिकेट:</strong> 'Issue of Birth Certificate' चुनें। पेज पर आवेदन शुल्क ₹5 और सेवा शुल्क ₹20 (Grama One, B1, K1 केंद्र पर) दिखता है; कोई दस्तावेज़ नहीं मांगा गया।", "आवेदन संख्या/पावती रखें और पोर्टल पर स्थिति देखते रहें।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>RCH कार्ड या जन्म सारांश</strong> (अस्पताल/स्वास्थ्य विभाग से)।", "<strong>पते का प्रमाण।</strong>", "<strong>फॉर्म 1</strong> (जन्म की सूचना) और <strong>घोषणा-पत्र</strong>।", "<strong>माता-पिता का पहचान प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> ठीक सूची Seva Sindhu पेज या रजिस्ट्रार से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। कर्नाटक में इसकी समय सीमा और शुल्क हम पक्के तौर पर नहीं देख पाए। रजिस्ट्रार कार्यालय/Seva Sindhu से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> पंजीकरण के बाद Seva Sindhu की 'Issue of Birth Certificate' सेवा से प्रमाण पत्र लें।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> पहले आवेदन वाले कार्यालय/Seva Sindhu हेल्प डेस्क में, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर लिखित शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://sevasindhu.karnataka.gov.in/", title: "Seva Sindhu कर्नाटक" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "कर्नाटक में जन्म पंजीकरण ऑनलाइन कहां होता है?", a: "Seva Sindhu पोर्टल (sevasindhu.karnataka.gov.in) पर 'Application for Registration of Birth' सेवा है।" },
    { q: "Seva Sindhu पर जन्म प्रमाण पत्र का शुल्क कितना दिखता है?", a: "सेवा पेज के अनुसार 'Issue of Birth Certificate' में आवेदन शुल्क ₹5 और सेवा शुल्क ₹20 (Grama One, B1, K1 केंद्र) है। राशि बदल सकती है, आवेदन से पहले पोर्टल पर देखें।" },
    { q: "कर्नाटक में नए जन्म के पंजीकरण में कौन से कागज़ लगते हैं?", a: "Seva Sindhu पेज के अनुसार RCH कार्ड या जन्म सारांश, पते का प्रमाण, फॉर्म 1 और घोषणा-पत्र।" },
    { q: "कर्नाटक में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ अपने रजिस्ट्रार कार्यालय जाएं। कर्नाटक में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, इसलिए वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/karnataka-death-certificate.html", emoji: "🕊️", title: "कर्नाटक मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/karnataka-domicile-certificate.html", emoji: "🏠", title: "कर्नाटक निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://sevasindhu.karnataka.gov.in/", label: "📝 Seva Sindhu पोर्टल" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
