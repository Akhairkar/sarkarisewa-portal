import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; the MeeSeva portal did not open from our
// checker):
// - medak.telangana.gov.in/service/revenue-services/ (district administration,
//   opened directly): services through MeeSeva; Revenue Department list:
//   Nativity Certificate (Manual Application), Nativity Certificate-ST / -SC /
//   -BC, Residence Certificate - General, Residence Certificate - Passport,
//   Income Certificate, Family Member Certificate and others.
// - Facts already verified for telangana-income-certificate.ts:
//   rajannasircilla.telangana.gov.in MeeSeva single entry portal
//   (ts.meeseva.telangana.gov.in/meeseva/home.htm); Prajavani service in the
//   Revenue list; Tahsildar office route.
// Left out (not confirmable on an official page we could open): residence
// period, document list, fee, time limit, validity, issuing officer named in
// an official page for residence certificates, the "local / non-local"
// study rules for admissions. The old description promised an "official
// fee"; it was rewritten.
export const telanganaDomicileCertificate: DocGuide = {
  state: { slug: "telangana", hi: "तेलंगाना" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Telangana Domicile Certificate 2026: Apply & Status",
  description: "तेलंगाना रेज़िडेंस और नेटिविटी सर्टिफिकेट 2026: MeeSeva केंद्र या पोर्टल से आवेदन, कौन सी सेवा किसके लिए, ज़रूरी कागज़, स्टेटस और शिकायत।",
  published: "2026-08-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "तेलंगाना निवास प्रमाण पत्र 2026: MeeSeva पर Residence और Nativity Certificate",
  lead: "तेलंगाना में निवास से जुड़े प्रमाण पत्र राजस्व विभाग <strong>MeeSeva</strong> के ज़रिए देता है। ज़िला प्रशासन की MeeSeva सूची में <strong>Residence Certificate - General</strong>, पासपोर्ट के लिए <strong>Residence Certificate - Passport</strong>, और SC/ST/BC के लिए <strong>Nativity Certificate</strong> की अलग सेवाएं हैं। आवेदन पास के MeeSeva केंद्र पर या MeeSeva पोर्टल से होता है।",
  facts: [
    ["पोर्टल", '<a href="https://ts.meeseva.telangana.gov.in/meeseva/home.htm" target="_blank" rel="noopener nofollow">MeeSeva Telangana</a>'],
    ["सामान्य काम के लिए", "Residence Certificate - General"],
    ["पासपोर्ट के लिए", "Residence Certificate - Passport"],
    ["विभाग", "राजस्व विभाग (तहसीलदार कार्यालय)"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> MeeSeva पर निवास के लिए कई सेवाएं हैं। स्कूल-कॉलेज, नौकरी या योजना के लिए आम तौर पर Residence Certificate - General, पासपोर्ट के लिए Passport वाली सेवा। Nativity Certificate की सेवाएं SC/ST/BC श्रेणियों के नाम से हैं। जिस संस्था को देना है, उससे पूछ लें कि कौन सा प्रमाण पत्र चाहिए।",
  sections: [
    {
      id: "sevayen",
      title: "MeeSeva पर निवास से जुड़ी सेवाएं",
      table: {
        head: ["MeeSeva सेवा (राजस्व विभाग)", "आम तौर पर किसके लिए"],
        rows: [
          ["Residence Certificate - General", "पढ़ाई, नौकरी, योजनाओं में पते/निवास का सबूत"],
          ["Residence Certificate - Passport", "पासपोर्ट आवेदन के लिए"],
          ["Nativity Certificate - SC / ST / BC", "इन श्रेणियों के लिए मूल निवास का प्रमाण"],
          ["Nativity Certificate (Manual Application)", "ऑफलाइन/मैनुअल आवेदन"],
        ],
      },
      callout: { kind: "info", html: "यह सूची मेडक ज़िला प्रशासन की वेबसाइट से है। कितने साल तेलंगाना में रहने पर कौन सा प्रमाण पत्र बनता है, यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली। दाखिले में \"लोकल\" दर्जे के नियम अलग होते हैं; उन्हें काउंसलिंग की सूचना में पढ़ें।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "आधिकारिक कागज़-सूची हमें खुलने वाले पेज पर नहीं मिली; MeeSeva केंद्र जो मांगे वही दें। आम तौर पर ये पास रखें:",
      list: [
        "<strong>फोटो</strong> और <strong>आधार कार्ड</strong>",
        "<strong>पते का सबूत</strong>: राशन कार्ड, वोटर कार्ड, बिजली बिल, किरायानामा या मकान के कागज़",
        "<strong>लंबे निवास के पुराने सबूत</strong>: स्कूल के प्रमाण पत्र (Study Certificate), पुराना राशन कार्ड",
        "Nativity के लिए <strong>जन्म प्रमाण पत्र</strong> और जाति प्रमाण पत्र, अगर मांगा जाए",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "पास के <strong>MeeSeva केंद्र</strong> पर कागज़ लेकर जाएं, या <a href=\"https://ts.meeseva.telangana.gov.in/meeseva/home.htm\" target=\"_blank\" rel=\"noopener nofollow\">MeeSeva पोर्टल</a> पर लॉगिन करें।",
        "राजस्व विभाग (Revenue) में सही सेवा चुनें (ऊपर की तालिका देखें)।",
        "फॉर्म भरें, कागज़ स्कैन/अपलोड कराएं और फीस भरें। रसीद लें; ट्रांज़ैक्शन नंबर संभालकर रखें।",
        "राजस्व विभाग की जांच और मंज़ूरी के बाद प्रमाण पत्र MeeSeva केंद्र या पोर्टल से मिलता है।",
      ],
      callout: { kind: "ok", html: "नज़दीकी केंद्र खोजें: <a href=\"/service/csc-locator/telangana.html\">CSC लोकेटर</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस और शिकायत",
      list: [
        "रसीद के ट्रांज़ैक्शन नंबर से MeeSeva केंद्र या पोर्टल पर स्टेटस पूछें।",
        "राजस्व विभाग की MeeSeva सूची में <strong>Prajavani</strong> (शिकायत) सेवा भी है; ज़्यादा देरी हो तो रसीद लेकर तहसीलदार कार्यालय जाएं।",
        "प्रमाण पत्र मिलने पर नाम, पिता का नाम और पता जांच लें।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत सेवा चुनी (General बनाम Passport)", "जिस काम के लिए चाहिए उसी सेवा में नया आवेदन करें"],
          ["पते का सबूत किसी और के नाम पर", "किरायानामा या मकान मालिक का पत्र लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं"],
          ["जांच में देर", "रसीद लेकर तहसीलदार कार्यालय में संपर्क करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", title: "MeeSeva तेलंगाना पोर्टल" },
    { href: "https://medak.telangana.gov.in/service/revenue-services/", title: "राजस्व सेवाओं की MeeSeva सूची (ज़िला मेडक)" },
  ],
  faq: [
    { q: "तेलंगाना में निवास प्रमाण पत्र कहां बनता है?", a: "MeeSeva केंद्र पर या MeeSeva पोर्टल से। राजस्व विभाग की सेवाओं में Residence Certificate - General चुनें; पासपोर्ट के लिए Residence Certificate - Passport।" },
    { q: "Residence और Nativity Certificate में क्या फर्क है?", a: "Residence Certificate मौजूदा निवास/पते का सबूत है। Nativity Certificate मूल निवास का प्रमाण है; MeeSeva सूची में यह SC/ST/BC श्रेणियों के नाम से है। जिस संस्था को देना है, उसके नियम में लिखा प्रमाण पत्र बनवाएं।" },
    { q: "फीस कितनी है?", a: "हमें शुल्क किसी खुलने वाले आधिकारिक पेज पर नहीं मिला। MeeSeva केंद्र पर रसीद में लिखी राशि ही दें।" },
    { q: "देरी हो तो क्या करें?", a: "रसीद के ट्रांज़ैक्शन नंबर के साथ तहसीलदार कार्यालय में संपर्क करें, या MeeSeva की Prajavani सेवा से शिकायत करें।" },
  ],
  related: [
    { href: "/states/telangana-caste-certificate.html", emoji: "📜", title: "तेलंगाना जाति प्रमाण पत्र", text: "MeeSeva पर" },
    { href: "/states/telangana-income-certificate.html", emoji: "💰", title: "तेलंगाना आय प्रमाण पत्र", text: "MeeSeva पर, 1 साल वैध" },
    { href: "/states/telangana-employment-exchange.html", emoji: "💼", title: "तेलंगाना रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://ts.meeseva.telangana.gov.in/meeseva/home.htm", label: "📝 MeeSeva पोर्टल" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
