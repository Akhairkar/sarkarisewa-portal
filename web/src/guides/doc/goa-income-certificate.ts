import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - goaonline.gov.in service page "Application for Income Certificate"
//   (Revenue, __ServiceId=REV07): register and login, Services -> All
//   Services -> Revenue -> Income Certificate; upload documents; pay
//   convenience fees as applicable; acknowledgement no. for status tracking;
//   department may mark back for compliance; certificate in the portal inbox.
//   Processing time "One day" (Right of Citizens to Time-bound Delivery of
//   Public Services Act). Documents: birth certificate, school leaving
//   certificate, voter's card, doctor's certificate, marriage certificate
//   (married woman), ration card copy, original income certificate from
//   C.C.P. / Village Panchayat / Municipality, self declaration with number
//   of family members and electoral-roll part/serial/constituency details.
//   Designated officer Mamlatdar; appellate authority Dy. Collector / SDO.
//   Downloads: application form (REV07.pdf: earning members and their monthly
//   income, immovable property, other income, purpose, "support by an
//   affidavit"), self declaration for Mediclaim, for Griha Aadhar / toilets,
//   affidavit for EWS.
// - goaonline.gov.in home page: Track Status, Verify Certificate, VLE login,
//   phone +91-8882988000 (Mon-Fri office hours), services.goa@gov.in.
// - kushavati.goa.gov.in income certificate service page (search extract):
//   Goa (Right of Citizen to Time Bound Delivery of Public Services) Act 2013.
// Left out (not confirmable on an official page we could open): the fee amount
// (a 2025 DoIT circular adds service/convenience fees for listed Goa Online
// services but we could not open its annexure), validity period.
export const goaIncomeCertificate: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Goa Income Certificate 2026: Apply Online",
  description: "गोवा आय प्रमाण पत्र 2026: Goa Online पोर्टल पर ऑनलाइन आवेदन, मामलतदार से जारी, समय सीमा 1 दिन (RTS कानून), ज़रूरी कागज़, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "गोवा आय प्रमाण पत्र 2026: Goa Online पर आवेदन, कागज़, मामलतदार और 1 दिन की समय सीमा",
  lead: "गोवा में आय प्रमाण पत्र राजस्व विभाग की सेवा है और तालुका के <strong>मामलतदार</strong> इसे जारी करते हैं। आवेदन <strong>Goa Online</strong> (goaonline.gov.in) पोर्टल पर होता है और प्रमाण पत्र पोर्टल के इनबॉक्स में आता है। पोर्टल के अनुसार गोवा के समयबद्ध सेवा (RTS) कानून में इसकी समय सीमा <strong>एक दिन</strong> है; साथ में पंचायत/नगरपालिका का आय प्रमाण पत्र और स्व-घोषणा लगती है।",
  facts: [
    ["पोर्टल", '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a>'],
    ["जारी करते हैं", "मामलतदार (अपील: डिप्टी कलेक्टर / SDO)"],
    ["समय सीमा", "1 दिन (RTS कानून)"],
    ["डिलीवरी", "Goa Online इनबॉक्स से डाउनलोड"],
  ],
  notice: "<strong>पहले पंचायत/नगरपालिका:</strong> Goa Online की दस्तावेज़-सूची में <strong>ग्राम पंचायत / नगरपालिका / CCP से बना मूल आय प्रमाण पत्र</strong> मांगा गया है। मामलतदार के पास आवेदन से पहले यह बनवा लें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। Goa Online पर इसी सेवा के साथ अलग-अलग कामों के लिए स्व-घोषणा के नमूने दिए गए हैं:",
      table: {
        head: ["काम", "पोर्टल पर दिया नमूना"],
        rows: [
          ["इलाज / मेडिक्लेम", "Self Declaration for Mediclaim"],
          ["गृह आधार योजना, शौचालय निर्माण/मरम्मत", "Self Declaration for Griha Aadhar Scheme"],
          ["EWS आरक्षण", "Affidavit for EWS"],
          ["छात्रवृत्ति, दाखिला, दूसरी योजनाएं", "आवेदन फॉर्म और सामान्य स्व-घोषणा"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण के लिए जाति प्रमाण पत्र में ही आय और क्रीमी लेयर की घोषणा होती है। देखें: <a href=\"/states/goa-caste-certificate.html\">गोवा जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (Goa Online की सूची)",
      list: [
        "<strong>जन्म प्रमाण पत्र</strong> (स्व-सत्यापित)।",
        "<strong>स्कूल छोड़ने का प्रमाण पत्र</strong> (स्व-सत्यापित)।",
        "<strong>मतदाता पहचान पत्र</strong> (स्व-सत्यापित)।",
        "<strong>राशन कार्ड की कॉपी</strong> (स्व-सत्यापित)।",
        "<strong>ग्राम पंचायत / नगरपालिका / CCP का मूल आय प्रमाण पत्र</strong>।",
        "<strong>स्व-घोषणा</strong>: परिवार के सदस्यों की संख्या, और चालू साल की मतदाता सूची में नाम, भाग संख्या, क्रम संख्या व विधानसभा क्षेत्र संख्या।",
        "<strong>विवाह प्रमाण पत्र</strong> (विवाहित महिला के लिए)।",
        "<strong>डॉक्टर का प्रमाण पत्र</strong> (सूची में दिया है; आपके मामले में ज़रूरी है या नहीं, तालुका कार्यालय से पूछ लें)।",
      ],
      callout: { kind: "warn", html: "आवेदन फॉर्म में परिवार के कमाने वाले सदस्यों की मासिक आय, अचल संपत्ति और बैंक ब्याज जैसी दूसरी आय भी पूछी जाती है, और फॉर्म के साथ <strong>शपथ-पत्र</strong> लगता है। सही आय लिखें। नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a> पर <strong>Register</strong> करें और लॉगिन करें।',
        "<strong>Services → All Services → Revenue → Income Certificate</strong> चुनें।",
        "फॉर्म भरें और कागज़ अपलोड करें।",
        "लागू सुविधा शुल्क (convenience fee) का भुगतान करें; रसीद इनबॉक्स से डाउनलोड होती है।",
        "<strong>Acknowledgement No.</strong> लिखकर रखें; इसी से स्टेटस देखा जाता है।",
        "विभाग कोई कागज़ कम पाए तो आवेदन आपको लौटा सकता है; कमी पूरी करके दोबारा भेजें।",
        "मंज़ूरी के बाद प्रमाण पत्र Goa Online के <strong>इनबॉक्स</strong> में आता है, वहीं से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो CSC या Goa Online के अधिकृत केंद्र (VLE) से आवेदन करवाएं: <a href=\"/service/csc-locator/goa.html\">CSC लोकेटर</a>। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और अपील",
      table: {
        head: ["मद", "जानकारी"],
        rows: [
          ["जारी करने वाले (Designated officer)", "मामलतदार"],
          ["समय सीमा", "एक दिन (समयबद्ध सेवा कानून)"],
          ["अपील (Appellate authority)", "डिप्टी कलेक्टर / उप-मंडल अधिकारी (SDO)"],
        ],
      },
      html: "<p>समय सीमा और अधिकारी Goa Online के सेवा-पेज से हैं, जो गोवा के <strong>Right of Citizens to Time-bound Delivery of Public Services Act</strong> का हवाला देता है।</p><p><strong>शुल्क:</strong> पोर्टल पर \"convenience fees as applicable\" लिखा है; राशि भुगतान वाली स्क्रीन पर दिखती है। हम इस सेवा की पक्की राशि सरकारी पेज पर नहीं देख पाए, इसलिए यहां नहीं लिख रहे।</p>",
      callout: { kind: "warn", html: "समय पर प्रमाण पत्र न मिले या आवेदन बिना ठोस वजह खारिज हो तो <strong>डिप्टी कलेक्टर / SDO</strong> के पास अपील करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> Goa Online पर <strong>Track Status</strong> में Acknowledgement No. डालें।",
        "<strong>डाउनलोड:</strong> लॉगिन करके इनबॉक्स से।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Verify Certificate</strong> से।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पंचायत/नगरपालिका का आय प्रमाण पत्र नहीं लगाया", "पहले ग्राम पंचायत / नगरपालिका / CCP से आय प्रमाण पत्र लें"],
          ["स्व-घोषणा में मतदाता सूची का ब्यौरा नहीं", "चालू साल की मतदाता सूची से भाग व क्रम संख्या लिखें"],
          ["कागज़ स्व-सत्यापित नहीं", "हर कागज़ पर अपने हस्ताक्षर करके अपलोड करें"],
          ["EWS के लिए साधारण घोषणा लगा दी", "EWS वाला शपथ-पत्र (Affidavit for EWS) लगाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Goa Online पर फोन <strong>+91-8882988000</strong> (सोमवार से शुक्रवार, दफ्तर के समय) और ईमेल services.goa@gov.in दिए गए हैं। प्रमाण पत्र से जुड़ी बात के लिए अपने तालुका के मामलतदार कार्यालय से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://www.goaonline.gov.in/", title: "Goa Online (आवेदन, Track Status, Verify Certificate)" },
    { href: "https://www.goaonline.gov.in/Appln/UIL/DeptServices?__DocId=REV&__ServiceId=REV07", title: "Income Certificate सेवा-पेज: कागज़, समय सीमा, अधिकारी, फॉर्म" },
  ],
  faq: [
    { q: "गोवा में आय प्रमाण पत्र कौन जारी करता है?", a: "तालुका के मामलतदार। आवेदन Goa Online पोर्टल पर होता है और अपील डिप्टी कलेक्टर / SDO के पास होती है।" },
    { q: "गोवा आय प्रमाण पत्र कितने दिन में बनता है?", a: "Goa Online के सेवा-पेज के अनुसार गोवा के समयबद्ध सेवा कानून में इसकी समय सीमा एक दिन है, बशर्ते सारे कागज़ पूरे हों।" },
    { q: "क्या पंचायत का आय प्रमाण पत्र भी चाहिए?", a: "हां। पोर्टल की सूची में ग्राम पंचायत / नगरपालिका / CCP से बना मूल आय प्रमाण पत्र मांगा गया है।" },
    { q: "गोवा आय प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल पर \"convenience fees as applicable\" लिखा है और राशि भुगतान के समय दिखती है। हम इसकी पक्की राशि सरकारी पेज पर नहीं देख पाए।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "Goa Online होमपेज पर Verify Certificate से।" },
  ],
  related: [
    { href: "/states/goa-caste-certificate.html", emoji: "📜", title: "गोवा जाति प्रमाण पत्र", text: "SC/ST/OBC, 10 दिन" },
    { href: "/states/goa-domicile-certificate.html", emoji: "🏠", title: "गोवा निवास प्रमाण पत्र", text: "रेज़िडेंस / डोमिसाइल" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://www.goaonline.gov.in/", label: "📝 Goa Online पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
