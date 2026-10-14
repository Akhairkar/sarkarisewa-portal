import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - jharsewa.jharkhand.gov.in (reachable; Jharkhand e-District portal).
// - dhanbad.nic.in/service/birth-certificate/: CRS link dc.crsorgi.gov.in, DC office location.
// - Jharkhand district service pages (jamshedpur, palamu, hazaribag, sahibganj .nic.in) as
//   summarised by search: Pragya Kendra route; hospital certificate or parents' affidavit; ward
//   councillor letter or affidavit for home birth; photo not mandatory.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): fee amounts, time limit under the Jharkhand service guarantee, rural registrar designation, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const jharkhandBirthCertificate: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Jharkhand Birth Certificate 2026: Apply & Status",
  description: "झारखंड जन्म प्रमाण पत्र 2026: JharSewa और प्रज्ञा केंद्र, CRS पोर्टल, ज़रूरी कागज़, 21 दिन की सीमा, देर से पंजीकरण और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "झारखंड जन्म प्रमाण पत्र 2026: JharSewa/प्रज्ञा केंद्र से आवेदन, कागज़ और देर से पंजीकरण",
  lead: "झारखंड में जन्म प्रमाण पत्र के लिए ज़िला सरकारी पेज JharSewa पोर्टल, प्रज्ञा केंद्र और केंद्र का CRS पोर्टल (dc.crsorgi.gov.in) बताते हैं। जन्म की सूचना 21 दिन में देनी होती है और इस अवधि में पंजीकरण मुफ्त है। अस्पताल में जन्म पर अस्पताल का प्रमाण या माता-पिता का शपथ-पत्र, घर पर जन्म पर वार्ड पार्षद का पत्र या शपथ-पत्र लगता है (ज़िला पेज)।",
  facts: [
    ["पोर्टल", "<a href=\"https://jharsewa.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jharsewa.jharkhand.gov.in</a> और <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>"],
    ["कहां", "प्रज्ञा केंद्र / CSC / ज़िला कार्यालय"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर, मुफ्त"],
    ["कागज़", "अस्पताल प्रमाण या शपथ-पत्र; घर पर जन्म पर पार्षद का पत्र"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त। कानून (जन्म-मृत्यु पंजीकरण अधिनियम 1969) में यही समय सीमा है"], ["21 से 30 दिन", "विलंब शुल्क देकर पंजीकरण"], ["30 दिन से 1 साल", "निर्धारित अधिकारी की लिखित अनुमति और शुल्क"], ["1 से 2 साल", "DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और शुल्क (1 अक्टूबर 2026 से)"], ["2 साल के बाद", "प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश और शुल्क"]]},
      callout: {"kind": "warn", "html": "<strong>1 अक्टूबर 2026 से नया नियम:</strong> जन्म और मृत्यु पंजीकरण (संशोधन) अधिनियम, 2026 लागू हो गया है। अब 1 से 2 साल की देरी पर ज़िला मजिस्ट्रेट (DM), उपखंड मजिस्ट्रेट (SDM) या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और 2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लगता है। देर से पंजीकरण से पहले अपने रजिस्ट्रार से शुल्क और कागज़ पूछ लें।"},
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
      intro: "झारखंड का e-District सिस्टम JharSewa के नाम से चलता है और ज़िला पेज कहते हैं कि सेवा के लिए प्रज्ञा केंद्र जाकर आवेदन कराया या ऑनलाइन आवेदन के लिए पंजीकरण किया जा सकता है।",
      steps: ["<strong>अस्पताल में जन्म:</strong> अस्पताल से जन्म का प्रमाण/रिपोर्ट लें। कई अस्पताल पंजीकरण खुद CRS पर कर देते हैं; पहले पूछ लें।", "<strong>घर पर जन्म या अस्पताल ने पंजीकरण नहीं किया:</strong> <a href=\"https://jharsewa.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">JharSewa</a> पर आवेदन करें या नज़दीकी प्रज्ञा केंद्र/CSC से कराएं।", "कुछ ज़िला पेज (जैसे धनबाद) केंद्र का CRS पोर्टल <a href=\"https://dc.crsorgi.gov.in/crs/home\" target=\"_blank\" rel=\"noopener nofollow\">dc.crsorgi.gov.in</a> बताते हैं। इलाके में कौन सा रास्ता चालू है, यह प्रज्ञा केंद्र/ज़िला कार्यालय से पूछें।", "पावती और पंजीकरण संख्या रखें।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल का प्रमाण पत्र, या माता-पिता का शपथ-पत्र।", "<strong>घर पर जन्म:</strong> वार्ड पार्षद का पत्र, या माता-पिता का शपथ-पत्र।", "<strong>माता-पिता का पहचान और पते का प्रमाण</strong> (आधार, राशन कार्ड, बिजली बिल आदि)।", "आवेदक की फोटो ज़िला पेज में दी गई है, पर अनिवार्य नहीं बताई गई।", "<strong>देर से पंजीकरण:</strong> ठीक सूची और शुल्क के लिए प्रज्ञा केंद्र/रजिस्ट्रार से पूछें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। झारखंड में इसकी समय सीमा और शुल्क हम पक्के तौर पर नहीं देख पाए। रजिस्ट्रार कार्यालय से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> पंजीकरण के बाद सर्टिफिकेट JharSewa, CRS पोर्टल <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> या प्रज्ञा केंद्र से मिलता है।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> पहले आवेदन वाले कार्यालय में, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर लिखित शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://jharsewa.jharkhand.gov.in/", title: "JharSewa (झारखंड e-District)" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://dhanbad.nic.in/service/birth-certificate/", title: "धनबाद ज़िला: जन्म प्रमाण पत्र सेवा पेज" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "झारखंड में जन्म प्रमाण पत्र कहां से बनता है?", a: "ज़िला सरकारी पेजों के अनुसार JharSewa पोर्टल, प्रज्ञा केंद्र या CSC से। कुछ ज़िला पेज केंद्र का CRS पोर्टल (dc.crsorgi.gov.in) भी बताते हैं।" },
    { q: "झारखंड में घर पर जन्म हुआ हो तो कौन सा कागज़ लगेगा?", a: "ज़िला पेजों के अनुसार वार्ड पार्षद का पत्र या माता-पिता का शपथ-पत्र, साथ में पहचान और पते का प्रमाण।" },
    { q: "क्या JharSewa पर जन्म प्रमाण पत्र ऑनलाइन बनता है?", a: "ज़िला पेज कहते हैं कि सेवा प्रज्ञा केंद्र पर कराई जा सकती है या ऑनलाइन आवेदन के लिए पंजीकरण किया जा सकता है। ताज़ा स्थिति JharSewa पोर्टल पर देख लें।" },
    { q: "झारखंड में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ अपने रजिस्ट्रार कार्यालय जाएं। झारखंड में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, इसलिए वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/jharkhand-death-certificate.html", emoji: "🕊️", title: "झारखंड मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://jharsewa.jharkhand.gov.in/", label: "📝 JharSewa पोर्टल" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
