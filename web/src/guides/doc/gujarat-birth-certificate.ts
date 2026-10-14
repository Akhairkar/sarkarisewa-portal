import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - rajkot.nic.in/service/birth-certificate/, surat.nic.in/service/birth-death-certificate/
//   (district service pages): registration compulsory under the 1969 Act, only at the place of
//   occurrence; links to crs.guj.nic.in and dc.crsorgi.gov.in; Gram Panchayat, Taluka Panchayat,
//   Nagarpalika and corporation civic centres as counters.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): fee amounts, time limits, document list, Digital Gujarat birth service, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const gujaratBirthCertificate: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Gujarat Birth Certificate 2026: Apply & Status",
  description: "गुजरात जन्म प्रमाण पत्र 2026: ग्राम पंचायत/नगरपालिका में पंजीकरण, CRS पोर्टल, 21 दिन की सीमा, देर से पंजीकरण के नियम और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गुजरात जन्म प्रमाण पत्र 2026: कहां पंजीकरण कराएं, 21 दिन की सीमा, देर से पंजीकरण",
  lead: "गुजरात में जन्म का पंजीकरण जन्म की जगह के स्थानीय रजिस्ट्रार के पास होता है: गांव में ग्राम पंचायत/तालुका पंचायत और शहर में नगरपालिका या नगर निगम। ज़िला सरकारी पेज राज्य का CRS पोर्टल (crs.guj.nic.in) और केंद्र का CRS पोर्टल दोनों को आवेदन का रास्ता बताते हैं। 21 दिन के भीतर पंजीकरण मुफ्त है।",
  facts: [
    ["कहां", "ग्राम पंचायत / तालुका पंचायत / नगरपालिका / नगर निगम"],
    ["पोर्टल", "crs.guj.nic.in (ज़िला पेजों के अनुसार) और <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर, मुफ्त"],
    ["नियम", "पंजीकरण सिर्फ जन्म की जगह पर होता है"],
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
      title: "कहां और कैसे आवेदन करें",
      intro: "राजकोट, सूरत और दूसरे ज़िलों के सरकारी पेज कहते हैं कि जन्म-मृत्यु की सूचना रजिस्ट्रार को देना कानूनन ज़रूरी है और पंजीकरण सिर्फ घटना की जगह पर होता है।",
      steps: ["<strong>अस्पताल में जन्म:</strong> अस्पताल से जन्म रिपोर्ट लें और पूछें कि उसने रजिस्ट्रार को सूचना भेजी है या नहीं।", "<strong>घर पर जन्म:</strong> गांव में अपनी ग्राम पंचायत/तालुका पंचायत और शहर में नगरपालिका/नगर निगम (सिविक सेंटर) के जन्म-मृत्यु पंजीकरण कार्यालय में आवेदन दें।", "ऑनलाइन रास्ता: ज़िला पेज <a href=\"http://crs.guj.nic.in\" target=\"_blank\" rel=\"noopener nofollow\">crs.guj.nic.in</a> या केंद्र का <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> बताते हैं। पोर्टल पर कौन सा रास्ता खुलता है, यह इलाके पर निर्भर हो सकता है।", "आवेदन की पावती और पंजीकरण संख्या रखें।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल की जन्म रिपोर्ट/डिस्चार्ज पर्ची (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)।", "<strong>घर पर जन्म:</strong> कार्यालय जो स्थानीय सत्यापन मांगे (जैसे वार्ड सदस्य/आंगनवाड़ी का पत्र या माता-पिता का शपथ-पत्र)। हर राज्य और कार्यालय की सूची थोड़ी अलग होती है।", "<strong>माता-पिता का पहचान प्रमाण</strong> (आधार, मतदाता पहचान पत्र आदि) और पते का प्रमाण। 2023 के संशोधन में माता-पिता और सूचना देने वाले का आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र, \"जन्म का रिकॉर्ड उपलब्ध नहीं\" का प्रमाण और जन्म का कोई सबूत (स्कूल रिकॉर्ड, टीकाकरण कार्ड आदि)। ठीक सूची रजिस्ट्रार से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। गुजरात में इसकी समय सीमा और शुल्क के नियम हम पक्के तौर पर नहीं देख पाए। अपनी ग्राम पंचायत/नगरपालिका से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> पंजीकरण के बाद सर्टिफिकेट रजिस्ट्रार कार्यालय से या CRS पोर्टल से मिलता है।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> पहले कार्यालय के प्रभारी (तलाटी/नगरपालिका के मुख्य अधिकारी) को लिखित में दें; हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।"],
    },
  ],
  official: [
    { href: "http://crs.guj.nic.in", title: "गुजरात CRS पोर्टल (ज़िला पेजों में दिया लिंक)" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://rajkot.nic.in/service/birth-certificate/", title: "राजकोट ज़िला: जन्म प्रमाण पत्र सेवा पेज" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "गुजरात में जन्म पंजीकरण कहां होता है?", a: "जन्म की जगह के स्थानीय कार्यालय में: गांव में ग्राम पंचायत/तालुका पंचायत और शहर में नगरपालिका या नगर निगम। जन्म और मृत्यु सिर्फ घटना की जगह पर ही दर्ज होते हैं।" },
    { q: "गुजरात का जन्म पंजीकरण ऑनलाइन है?", a: "ज़िला सरकारी पेज राज्य का CRS पोर्टल (crs.guj.nic.in) और केंद्र का CRS पोर्टल (crsorgi.gov.in) बताते हैं। कौन सा रास्ता किस इलाके में चलता है, यह स्थानीय कार्यालय से पक्का करें।" },
    { q: "क्या दूसरे शहर में जन्म दर्ज हो सकता है?", a: "नहीं। ज़िला सरकारी पेजों के अनुसार पंजीकरण सिर्फ उस जगह के रजिस्ट्रार के पास होता है जहां जन्म हुआ।" },
    { q: "गुजरात में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ अपनी ग्राम पंचायत/नगरपालिका (रजिस्ट्रार) में जाएं। गुजरात के नियम में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/gujarat-death-certificate.html", emoji: "🕊️", title: "गुजरात मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://crsorgi.gov.in/", label: "📝 CRS पोर्टल" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
