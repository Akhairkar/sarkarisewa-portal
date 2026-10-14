import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026, opened directly):
// - goaonline.gov.in service page "Application for Domicile Certificate"
//   (Revenue, __ServiceId=REV03): register with OTP; Services -> All Services
//   -> Revenue -> Domicile Certificate; apply for self/relative/other; upload
//   and pay; acknowledgement SMS/email; certificate in the portal inbox.
//   Processing time "Five days" (Right of Citizens to Time-bound Delivery of
//   Public Services Act). Mandatory documents: affidavit on Rs 100 stamp paper,
//   age proof, Annexure 'X', birth certificate, educational qualification
//   proof, identity proof (any one), photograph, Residence Certificate,
//   residence proof. Designated officer Collector; appellate authority
//   Secretary (Revenue).
// - Form REV03.pdf (Annexure X, addressed to the Dy. Collector and SDM): year
//   and date from when residing in Goa continuously; property in Goa;
//   continuous residence in Goa for the last five years; education/business
//   in Goa; ration card; declarations (no domicile of any other state, intend
//   to make Goa permanent residence); affidavit (Indian citizen, renounced
//   former domicile); note: minors take the domicile of parents, married women
//   of the husband.
// - goaonline.gov.in "Application for Residence Certificate" (REV05):
//   processing time five days; documents: birth certificate, old residence
//   certificate if any, school leaving/bonafide certificate, identity proof,
//   marriage certificate (married woman), LPG connection and owner's NOC
//   (rented premises), self declaration; designated officer Mamlatdar;
//   appellate authority Dy. Collector / SDO; convenience fees as applicable.
//   Self-declaration form SDREV05.pdf: "permanent resident of State of Goa
//   since more than 15 years"; ration card and EPIC numbers.
// - Goa Online helpline facts already recorded in goa-income-certificate.ts.
// Left out (not confirmable): the fee amount, validity period, a statutory
// residence period for the domicile certificate itself.
export const goaDomicileCertificate: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Goa Domicile Certificate 2026: Apply & Status",
  description: "गोवा डोमिसाइल और रेज़िडेंस सर्टिफिकेट 2026: Goa Online पोर्टल पर आवेदन, ज़रूरी कागज़, ₹100 स्टांप का शपथ-पत्र, 5 दिन की समय सीमा, अधिकारी और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गोवा डोमिसाइल प्रमाण पत्र 2026: Goa Online पर आवेदन, कागज़ और समय सीमा",
  lead: "गोवा में निवास के दो अलग प्रमाण पत्र हैं: तालुका के <strong>मामलतदार</strong> का <strong>Residence Certificate</strong>, और <strong>Domicile Certificate</strong>, जिसके फॉर्म डिप्टी कलेक्टर एवं SDM को संबोधित होते हैं। दोनों का आवेदन Goa Online पोर्टल (goaonline.gov.in) पर होता है और पोर्टल के अनुसार दोनों की समय सीमा <strong>5 दिन</strong> है। डोमिसाइल के लिए Residence Certificate भी अनिवार्य कागज़ है, इसलिए पहले वही बनवाएं।",
  facts: [
    ["पोर्टल", '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a>'],
    ["समय सीमा", "5 दिन (दोनों सेवाएं)"],
    ["Residence Certificate", "मामलतदार"],
    ["Domicile Certificate", "कलेक्टर / डिप्टी कलेक्टर एवं SDM"],
  ],
  notice: "<strong>क्रम याद रखें:</strong> Goa Online पर Domicile Certificate के अनिवार्य कागज़ों में <strong>Residence Certificate</strong> और <strong>₹100 के स्टांप पेपर पर शपथ-पत्र</strong> शामिल हैं। Residence Certificate की स्व-घोषणा में लिखना होता है कि आप 15 साल से ज़्यादा समय से गोवा के स्थायी निवासी हैं।",
  sections: [
    {
      id: "do-praman",
      title: "Residence Certificate और Domicile Certificate में फर्क",
      table: {
        head: ["", "Residence Certificate", "Domicile Certificate"],
        rows: [
          ["Goa Online सेवा", "REV05", "REV03"],
          ["फैसला करने वाले अधिकारी", "मामलतदार", "कलेक्टर (फॉर्म डिप्टी कलेक्टर एवं SDM को)"],
          ["अपील", "डिप्टी कलेक्टर / SDO", "सचिव (राजस्व)"],
          ["समय सीमा", "5 दिन", "5 दिन"],
          ["मुख्य शर्त (फॉर्म के अनुसार)", "पते पर निवास; स्व-घोषणा में 15+ साल से गोवा का स्थायी निवासी", "गोवा को स्थायी घर बनाने का इरादा, किसी और राज्य का डोमिसाइल न लिया हो"],
        ],
      },
      callout: { kind: "info", html: "भर्ती, दाखिले या योजना के नियम में जो प्रमाण पत्र मांगा गया हो वही बनवाएं। डोमिसाइल के फॉर्म के नोट के अनुसार नाबालिग का डोमिसाइल माता-पिता के अनुसार और विवाहित महिला का पति के अनुसार माना जाता है।" },
    },
    {
      id: "kagaz-dom",
      title: "Domicile Certificate के कागज़ (पोर्टल की सूची)",
      intro: "ये सभी <strong>अनिवार्य</strong> हैं:",
      list: [
        "<strong>₹100 के स्टांप पेपर पर शपथ-पत्र</strong> (नमूना फॉर्म REV03 में है: जन्म स्थान, गोवा में कब से रह रहे हैं, भारतीय नागरिक, पुराना डोमिसाइल छोड़ा)",
        "<strong>Annexure \"X\"</strong> (आवेदन पत्र): गोवा में लगातार कब से रह रहे हैं, संपत्ति, पिछले पांच साल का निवास, पढ़ाई/कारोबार, राशन कार्ड नंबर",
        "<strong>उम्र का सबूत</strong> और <strong>जन्म प्रमाण पत्र</strong>",
        "<strong>शिक्षा का प्रमाण</strong>",
        "<strong>पहचान पत्र</strong> (आधार, वोटर कार्ड, PAN, ड्राइविंग लाइसेंस, पासपोर्ट, बैंक पासबुक आदि में से एक, स्व-सत्यापित)",
        "<strong>फोटो</strong>",
        "<strong>Residence Certificate</strong> और <strong>निवास का सबूत</strong>",
      ],
    },
    {
      id: "kagaz-res",
      title: "Residence Certificate के कागज़ (पोर्टल की सूची)",
      list: [
        "<strong>जन्म प्रमाण पत्र</strong> (स्व-सत्यापित)",
        "<strong>पुराना Residence Certificate</strong>, अगर हो",
        "<strong>स्कूल लीविंग या बोनाफाइड सर्टिफिकेट</strong>",
        "<strong>पहचान पत्र</strong> (कोई एक)",
        "<strong>विवाह प्रमाण पत्र</strong> (विवाहित महिला के लिए)",
        "किराये के घर में: <strong>LPG कनेक्शन</strong> और <strong>मकान मालिक की NOC/स्व-घोषणा</strong>",
        "<strong>स्व-घोषणा</strong> (पोर्टल पर बालिग और नाबालिग के लिए अलग नमूने)",
      ],
    },
    {
      id: "online",
      title: "Goa Online पर आवेदन",
      steps: [
        '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a> पर ईमेल, मोबाइल, नाम, पता और जन्मतिथि से OTP के साथ रजिस्टर करें, फिर लॉगिन करें।',
        "<strong>Services → All Services → Revenue</strong> में <strong>Residence Certificate</strong> या <strong>Domicile Certificate</strong> चुनें।",
        "चुनें कि आवेदन अपने लिए है, रिश्तेदार के लिए या किसी और के लिए, और फॉर्म भरें।",
        "कागज़ अपलोड करें और पोर्टल पर दिखा शुल्क भरें।",
        "SMS/ईमेल से मिली <strong>Acknowledgement Number</strong> नोट करें। विभाग कागज़ कम होने पर आवेदन वापस भेज सकता है; तब कमी पूरी करें।",
        "मंज़ूरी के बाद प्रमाण पत्र आपके Goa Online <strong>Inbox</strong> में आता है, वहीं से डाउनलोड करें।",
      ],
    },
    {
      id: "fees",
      title: "फीस, समय सीमा और अपील",
      list: [
        "<strong>समय सीमा:</strong> दोनों सेवाओं में 5 दिन (गोवा का समयबद्ध सेवा अधिकार कानून)।",
        "<strong>फीस:</strong> पोर्टल पर \"convenience fees as applicable\" लिखा है; राशि हमें आधिकारिक पेज पर नहीं मिली। भुगतान से पहले स्क्रीन पर दिखी राशि देखें।",
        "<strong>अपील:</strong> Residence Certificate में डिप्टी कलेक्टर / SDO के पास, Domicile Certificate में सचिव (राजस्व) के पास।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["डोमिसाइल के साथ Residence Certificate नहीं लगा", "पहले मामलतदार से Residence Certificate बनवाएं"],
          ["शपथ-पत्र सादे कागज़ पर", "₹100 के स्टांप पेपर पर शपथ-पत्र बनवाएं"],
          ["किराये के घर का सबूत अधूरा", "LPG कनेक्शन और मकान मालिक की NOC/स्व-घोषणा लगाएं"],
          ["किसी और राज्य का डोमिसाइल पहले से है", "फॉर्म में सही जानकारी दें; दो राज्यों का डोमिसाइल नहीं लिया जा सकता"],
        ],
      },
    },
  ],
  official: [
    { href: "https://www.goaonline.gov.in/", title: "Goa Online पोर्टल (आवेदन, Track Status, Verify Certificate)" },
    { href: "https://goaonline.gov.in/Appln/UIL/DeptServices?__DocId=REV&__ServiceId=REV03", title: "Goa Online: Application for Domicile Certificate" },
    { href: "https://goaonline.gov.in/Appln/UIL/DeptServices?__DocId=REV&__ServiceId=REV05", title: "Goa Online: Application for Residence Certificate" },
  ],
  faq: [
    { q: "गोवा में डोमिसाइल प्रमाण पत्र कहां बनता है?", a: "Goa Online पोर्टल (goaonline.gov.in) पर Services → All Services → Revenue → Domicile Certificate में आवेदन होता है। पोर्टल पर नामित अधिकारी कलेक्टर हैं और फॉर्म डिप्टी कलेक्टर एवं SDM को संबोधित होता है।" },
    { q: "डोमिसाइल कितने दिन में मिलता है?", a: "Goa Online के अनुसार Domicile और Residence Certificate दोनों की समय सीमा 5 दिन है।" },
    { q: "क्या डोमिसाइल के लिए Residence Certificate ज़रूरी है?", a: "हां। Goa Online पर Domicile Certificate के अनिवार्य कागज़ों में Residence Certificate शामिल है। यह तालुका के मामलतदार से बनता है।" },
    { q: "Residence Certificate के लिए कितने साल का निवास चाहिए?", a: "Goa Online पर दी गई स्व-घोषणा में लिखना होता है कि आप 15 साल से ज़्यादा समय से गोवा के स्थायी निवासी हैं। जिस काम के लिए चाहिए, उसके नियम भी देख लें।" },
    { q: "फीस कितनी है?", a: "पोर्टल पर \"convenience fees as applicable\" लिखा है; हमें राशि आधिकारिक पेज पर नहीं मिली। भुगतान से पहले स्क्रीन पर राशि दिखती है।" },
  ],
  related: [
    { href: "/states/goa-caste-certificate.html", emoji: "📜", title: "गोवा जाति प्रमाण पत्र", text: "Goa Online पर" },
    { href: "/states/goa-income-certificate.html", emoji: "💰", title: "गोवा आय प्रमाण पत्र", text: "मामलतदार से, Goa Online पर" },
    { href: "/states/goa-employment-exchange.html", emoji: "💼", title: "गोवा रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://www.goaonline.gov.in/", label: "📝 Goa Online पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
