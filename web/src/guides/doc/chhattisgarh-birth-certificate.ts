import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - bastar.gov.in/en/service/birth-certificate/ (District Bastar service page): informants,
//   late-registration authorities by delay (13(1), 13(2), 13(3)), Form 10, 7 working days under the
//   Public Service Guarantee, name entry free for 1 year, e-District link and Lok Seva Kendra.
// - surajpur.nic.in, jashpur.nic.in service pages: CSC at collectorate/tehsil/gram panchayat;
//   documents for late registration; fee entries that conflict with each other.
// - edistrict.cgstate.gov.in (as linked by the bemetara.gov.in service page).
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): any fee amount (district pages conflict and the 2014 waiver notice is dated), the state's current rule-book fee table, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const chhattisgarhBirthCertificate: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Chhattisgarh Birth Certificate 2026: Apply & Status",
  description: "छत्तीसगढ़ जन्म प्रमाण पत्र 2026: e-District पोर्टल और लोक सेवा केंद्र, 21 दिन की सीमा, देर से पंजीकरण के अधिकारी, नाम जोड़ना और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "छत्तीसगढ़ जन्म प्रमाण पत्र 2026: कहां आवेदन करें, देर से पंजीकरण, नाम जोड़ना",
  lead: "छत्तीसगढ़ में जन्म की सूचना 21 दिन के भीतर देनी होती है। आवेदन e-District पोर्टल (edistrict.cgstate.gov.in), लोक सेवा केंद्र या तहसील कार्यालय से होता है; ज़िला सरकारी पेजों में सेवा की समय सीमा 7 कार्य दिवस बताई गई है। देर होने पर अनुमति देने वाला अधिकारी देरी के हिसाब से बदलता है (नीचे तालिका)।",
  facts: [
    ["पोर्टल", "<a href=\"https://edistrict.cgstate.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">edistrict.cgstate.gov.in</a>"],
    ["कहां", "लोक सेवा केंद्र, तहसील कार्यालय, CSC"],
    ["समय सीमा", "सूचना 21 दिन में; सेवा 7 कार्य दिवस (ज़िला पेज)"],
    ["नाम जोड़ना", "पंजीकरण के बाद 1 साल तक निःशुल्क (ज़िला पेज)"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त (कानूनी समय सीमा)"], ["22 से 30 दिन (धारा 13(1))", "रजिस्ट्रार खुद पंजीकरण कर सकते हैं; जन्म की सूचना का फॉर्म भरें"], ["30 दिन से 1 साल (धारा 13(2))", "अनुमति देने वाले: ग्रामीण क्षेत्र में जनपद पंचायत के मुख्य कार्यपालन अधिकारी; नगर निगम में आयुक्त; नगर पालिका/पंचायत में जिला पंजीयक"], ["1 साल के बाद (धारा 13(3))", "कार्यकारी मजिस्ट्रेट का आदेश"]]},
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
      intro: "जिला सरकारी पेज (बस्तर, सूरजपुर, रायगढ़ आदि) जन्म प्रमाण पत्र के लिए e-District पोर्टल, लोक सेवा केंद्र और सभी तहसील कार्यालयों को बताते हैं। सूरजपुर का पेज कहता है कि सुविधा कलेक्टर कार्यालय, तहसील कार्यालय और ग्राम पंचायत के CSC पर भी है।",
      steps: ["<strong>जन्म की सूचना कौन दे:</strong> घर में हो तो घर का मुखिया या स्वास्थ्य कार्यकर्ता/मितानिन आदि; अस्पताल में हो तो अस्पताल प्रभारी; गांव में सार्वजनिक जगह हो तो गांव का मुखिया या पुलिस।", "अस्पताल की रिपोर्ट या जन्म सूचना फॉर्म लेकर लोक सेवा केंद्र/तहसील कार्यालय/CSC जाएं, या <a href=\"https://edistrict.cgstate.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">e-District पोर्टल</a> पर आवेदन करें।", "देर से पंजीकरण में पहले रजिस्ट्रार से 'अनुपलब्धता प्रमाण' (फॉर्म 10) लें, स्व-सत्यापित शपथ-पत्र बनवाएं और ऊपर तालिका के अधिकारी से अनुमति लें। अनुमति के बाद रजिस्ट्रार को दोबारा दें।", "पावती लें; सर्टिफिकेट ज़िला पेजों के अनुसार लोक सेवा गारंटी में 7 कार्य दिवस में मिलना चाहिए।"],
      html: "<p>ज़िला पेजों पर शुल्क को लेकर अलग-अलग बातें हैं (बस्तर पेज पर 2014 में पांच साल के लिए छूट की सूचना है, जशपुर पेज पर ₹30)। इसलिए हम कोई राशि नहीं लिख रहे; केंद्र पर रसीद के बिना पैसा न दें।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल की जन्म रिपोर्ट/डिस्चार्ज पर्ची।", "<strong>घर पर जन्म:</strong> जन्म की सूचना का फॉर्म, माता-पिता का पहचान प्रमाण और जो स्थानीय सत्यापन कार्यालय मांगे।", "<strong>देर से पंजीकरण (ज़िला पेज):</strong> शपथ-पत्र, जन्म सूचना फॉर्म, और 1 साल के बाद कार्यकारी/प्रथम श्रेणी मजिस्ट्रेट का आदेश।", "<strong>माता-पिता का आधार/पहचान प्रमाण</strong> और पते का प्रमाण।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बच्चे का जन्म बिना नाम के भी दर्ज हो सकता है (धारा 14)। बस्तर के ज़िला सरकारी पेज के अनुसार <strong>पंजीकरण के बाद 1 साल तक नाम निःशुल्क जोड़ा जा सकता है</strong>। 1 साल बाद के लिए शुल्क/समय सीमा रजिस्ट्रार से पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> e-District पोर्टल या लोक सेवा केंद्र से; केंद्रीय CRS पोर्टल <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> पर भी छत्तीसगढ़ के जन्म दर्ज होते हैं।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> लोक सेवा गारंटी में समय पर सर्टिफिकेट न मिले तो पहले उसी कार्यालय के प्रभारी से लिखित शिकायत करें, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।"],
    },
  ],
  official: [
    { href: "https://edistrict.cgstate.gov.in/", title: "e-District छत्तीसगढ़" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://bastar.gov.in/en/service/birth-certificate/", title: "बस्तर ज़िला: जन्म प्रमाण पत्र सेवा पेज" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ में जन्म प्रमाण पत्र कहां से बनता है?", a: "लोक सेवा केंद्र, तहसील कार्यालय या CSC से, या e-District पोर्टल (edistrict.cgstate.gov.in) पर आवेदन करके। यह ज़िला सरकारी पेजों में दी गई जानकारी है।" },
    { q: "छत्तीसगढ़ में 1 साल बाद जन्म पंजीकरण कैसे होता है?", a: "बस्तर के ज़िला पेज के अनुसार 1 साल के बाद कार्यकारी मजिस्ट्रेट का आदेश चाहिए। इसके लिए रजिस्ट्रार का अनुपलब्धता प्रमाण (फॉर्म 10) और स्व-सत्यापित शपथ-पत्र लगता है। अगस्त 2026 के संशोधन के बाद नियम बदल सकता है, रजिस्ट्रार से पूछें।" },
    { q: "छत्तीसगढ़ में 30 दिन से 1 साल के बीच अनुमति कौन देता है?", a: "बस्तर पेज के अनुसार ग्रामीण क्षेत्र में जनपद पंचायत के मुख्य कार्यपालन अधिकारी, नगर निगम में आयुक्त और नगर पालिका/पंचायत में जिला पंजीयक।" },
    { q: "छत्तीसगढ़ में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "बस्तर के ज़िला सरकारी पेज के अनुसार पंजीकरण के बाद 1 साल तक नाम निःशुल्क जोड़ा जा सकता है। उसके बाद का नियम और शुल्क रजिस्ट्रार कार्यालय से पूछें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/chhattisgarh-death-certificate.html", emoji: "🕊️", title: "छत्तीसगढ़ मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/chhattisgarh-domicile-certificate.html", emoji: "🏠", title: "छत्तीसगढ़ निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.cgstate.gov.in/", label: "📝 e-District छत्तीसगढ़" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
