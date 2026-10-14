import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - chandigarhdistrict.nic.in "Right to Service" page (opened directly):
//   Chandigarh Administration notification dated 13.09.2019 for services of
//   the Deputy Commissioner office (Punjab RTS Act 2011 as extended to UT
//   Chandigarh). It lists residence, SC/OBC, minority and other certificates
//   but no income certificate; "All types of verifications to be done by
//   revenue officials like Patwari/Kanungo/Tehsildar" 30 days.
// - Tribune (Jan 2022, search extract, official spokesperson): income
//   certificates for EWS-quota admission issued by the Tehsildar (Revenue),
//   UT; forms from Sampark Centres or the e-District portal chdservices.gov.in;
//   submission and collection at Sampark Centres.
// Left out (not confirmable on an official page we could open): the current
// online process, issuing officer for other purposes, fee, document list,
// time limit, validity, helpline.
export const chandigarhIncomeCertificate: DocGuide = {
  state: { slug: "chandigarh", hi: "चंडीगढ़" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Chandigarh Income Certificate 2026: How to Apply",
  description: "चंडीगढ़ आय प्रमाण पत्र 2026: संपर्क केंद्र / e-District से आवेदन, तहसीलदार (राजस्व) की जांच, कागज़ की तैयारी, देरी हो तो क्या करें। सही जानकारी, बिना अंदाज़े के।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "चंडीगढ़ आय प्रमाण पत्र 2026: कहां आवेदन करें, कौन जारी करता है, क्या तैयार रखें",
  lead: "चंडीगढ़ में आय प्रमाण पत्र UT प्रशासन के राजस्व तंत्र से बनता है और आवेदन के फॉर्म <strong>संपर्क केंद्रों (Sampark Centre)</strong> और UT के e-District पोर्टल से मिलते रहे हैं। प्रशासन के 2022 के ऐलान के अनुसार EWS कोटे में दाखिले वाले आय प्रमाण पत्र <strong>तहसीलदार (राजस्व), UT</strong> जारी करते हैं। फीस, समय सीमा और वैधता हम किसी खुलने वाले सरकारी पेज पर पक्की नहीं कर पाए, इसलिए यहां कोई अंदाज़ा नहीं लिखा है।",
  facts: [
    ["आवेदन", "संपर्क केंद्र / e-District (chdservices.gov.in)"],
    ["जांच", "पटवारी / तहसीलदार (राजस्व)"],
    ["EWS दाखिले के लिए", "तहसीलदार (राजस्व), UT"],
    ["फीस / समय", "केंद्र पर रसीद में देखें"],
  ],
  notice: "<strong>ध्यान दें:</strong> चंडीगढ़ प्रशासन की Right to Service सूची (2019, डिप्टी कमिश्नर ऑफिस की सेवाएं) में आय प्रमाण पत्र अलग से दर्ज नहीं है, इसलिए हम इसकी कोई तय समय सीमा नहीं लिख रहे। आवेदन करते समय रसीद पर लिखी तारीख ज़रूर पूछें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। चंडीगढ़ में यह खास तौर पर इन कामों में मांगा जाता है:",
      list: [
        "स्कूलों में <strong>EWS / वंचित वर्ग (DG)</strong> कोटे में दाखिला।",
        "छात्रवृत्ति, फीस माफी और आय पर आधारित सरकारी योजनाएं।",
      ],
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, OBC प्रमाण पत्र चाहिए। देखें: <a href=\"/states/chandigarh-caste-certificate.html\">चंडीगढ़ जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "आधिकारिक चेकलिस्ट संपर्क केंद्र पर मिलती है; हम इसे ऑनलाइन नहीं खोल पाए। आम तौर पर ये कागज़ मांगे जाते हैं:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र, फोटो।",
        "<strong>चंडीगढ़ में निवास का सबूत</strong> (बिजली/पानी बिल, किरायानामा, राशन कार्ड आदि)।",
        "<strong>आय का सबूत:</strong> वेतन पर्ची, पेंशन, ITR, या काम/मज़दूरी से आय का ब्यौरा।",
        "<strong>स्व-घोषणा / शपथ-पत्र</strong>, जिसमें परिवार के सभी सदस्यों की सभी स्रोतों से आय लिखी हो।",
      ],
      callout: { kind: "warn", html: "आय कम या गलत न लिखें; पटवारी/तहसीलदार (राजस्व) जांच करते हैं। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "नज़दीकी <strong>संपर्क केंद्र (Sampark Centre)</strong> से फॉर्म और चेकलिस्ट लें। फॉर्म UT के e-District पोर्टल (chdservices.gov.in) से भी डाउनलोड होते रहे हैं।",
        "फॉर्म भरें, चेकलिस्ट के कागज़ लगाएं और संपर्क केंद्र पर जमा करें।",
        "<strong>रसीद / आवेदन संख्या</strong> लें और संभालकर रखें; उस पर प्रमाण पत्र मिलने की तारीख पूछें।",
        "जांच पूरी होने पर प्रमाण पत्र संपर्क केंद्र से लें।",
      ],
      callout: { kind: "ok", html: "हमारे चेकर से चंडीगढ़ का e-District पोर्टल नहीं खुला, इसलिए ऑनलाइन आवेदन के कदम यहां नहीं लिखे हैं। नज़दीकी केंद्र: <a href=\"/service/csc-locator/chandigarh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "delay",
      title: "देरी हो तो क्या करें",
      intro: "रसीद पर लिखी तारीख तक प्रमाण पत्र न मिले तो रसीद लेकर संपर्क केंद्र और फिर अपने क्षेत्र के तहसीलदार (राजस्व) / SDM कार्यालय में पूछें। लिखित शिकायत दें और उसकी पावती रखें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई सबूत नहीं", "वेतन पर्ची, पेंशन, ITR या आय का शपथ-पत्र लगाएं"],
          ["चंडीगढ़ में निवास साबित नहीं", "बिल, किरायानामा या राशन कार्ड जैसा निवास का कागज़ दें"],
          ["गलत प्रमाण पत्र मांगा", "EWS/DG दाखिले के लिए बताएं कि प्रमाण पत्र किस काम के लिए है"],
          ["रसीद खो दी", "संपर्क केंद्र से आवेदन का ब्यौरा निकलवाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://chandigarhdistrict.nic.in/", title: "ज़िला प्रशासन चंडीगढ़" },
    { href: "https://chandigarhdistrict.nic.in/right-to-service/", title: "Right to Service अधिसूचना (2019)" },
  ],
  faq: [
    { q: "चंडीगढ़ में आय प्रमाण पत्र कहां बनता है?", a: "फॉर्म संपर्क केंद्रों और UT के e-District पोर्टल से मिलते रहे हैं और जमा संपर्क केंद्र पर होता है। जांच राजस्व विभाग (पटवारी / तहसीलदार) करता है।" },
    { q: "EWS दाखिले के लिए आय प्रमाण पत्र कौन जारी करता है?", a: "प्रशासन के 2022 के ऐलान के अनुसार EWS कोटे में दाखिले वाले आय प्रमाण पत्र तहसीलदार (राजस्व), UT जारी करते हैं।" },
    { q: "चंडीगढ़ आय प्रमाण पत्र की फीस कितनी है?", a: "हम किसी खुलने वाले सरकारी पेज पर फीस पक्की नहीं कर पाए। संपर्क केंद्र की रसीद में जो शुल्क लिखा हो वही दें।" },
    { q: "आय प्रमाण पत्र कितने समय तक मान्य है?", a: "चंडीगढ़ के लिए इसकी आधिकारिक अवधि हम पक्की नहीं कर पाए। आय हर साल बदलती है, इसलिए जिस काम के लिए जमा कर रहे हैं, वहां पूछ लें कि कितना नया प्रमाण पत्र चाहिए।" },
  ],
  related: [
    { href: "/states/chandigarh-caste-certificate.html", emoji: "📜", title: "चंडीगढ़ जाति प्रमाण पत्र", text: "SC/OBC, 40 दिन" },
    { href: "/states/chandigarh-domicile-certificate.html", emoji: "🏠", title: "चंडीगढ़ निवास प्रमाण पत्र", text: "रेज़िडेंस सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://chandigarhdistrict.nic.in/", label: "🏛️ ज़िला प्रशासन चंडीगढ़" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
