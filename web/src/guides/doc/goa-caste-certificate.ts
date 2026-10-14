import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - goaonline.gov.in service page "Application for Caste Certificate"
//   (Revenue, __ServiceId=REV06): register with email, mobile, name, address,
//   DOB and OTP; Services -> All Services -> Revenue -> Caste Certificate;
//   apply for self, relative or other; upload documents and pay; SMS/e-mail
//   acknowledgement; certificate in the portal inbox; all documents
//   self-attested. Processing time "Ten days" (Right of Citizens to
//   Time-bound Delivery of Public Services Act). Documents: age proof, residence
//   proof (optional), father's/grandfather's SC/ST or OBC proof, proof of
//   residence in Goa prior to 19/02/1968 (SC/ST/OBC), self declaration,
//   marriage certificate (married woman), identity proof, income certificate
//   for preceding 3 years from Village Panchayat / Municipality / CCP (if
//   applicable), photograph. Designated officer Dy. Collector / Sub Divisional
//   Officer; appellate authority Additional Collector-II. Downloads:
//   application (Annexure "D"), self declaration for OBC and for SC/ST,
//   SC/ST self declaration for revising an earlier certificate without the
//   word "Provisional", declaration/application for children of a single
//   mother.
// - SDREV04.pdf (OBC self declaration): paternal origin before 19 Feb 1968;
//   parents not Group A / Group B officers etc.; parents' annual income from
//   salaries and other sources; creamy-layer declaration; sworn for the office
//   of the Dy. Collector & SDO.
// - goaonline.gov.in home page: Track Status, Verify Certificate, phone
//   +91-8882988000, services.goa@gov.in.
// Left out (not confirmable on an official page we could open): fee amount,
// validity period, the OBC income limit.
export const goaCasteCertificate: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Goa Caste Certificate 2026: Apply & Status",
  description: "गोवा जाति प्रमाण पत्र (SC/ST/OBC) 2026: Goa Online पर आवेदन, 19.02.1968 से पहले निवास की शर्त, ज़रूरी कागज़, डिप्टी कलेक्टर, 10 दिन, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "गोवा जाति प्रमाण पत्र 2026: Goa Online पर SC/ST/OBC आवेदन, 1968 की शर्त, कागज़ और स्टेटस",
  lead: "गोवा में SC/ST/OBC जाति प्रमाण पत्र राजस्व विभाग की सेवा है और <strong>डिप्टी कलेक्टर / उप-मंडल अधिकारी (SDO)</strong> इसे जारी करते हैं। आवेदन <strong>Goa Online</strong> (goaonline.gov.in) पर होता है और गोवा के समयबद्ध सेवा कानून में इसकी समय सीमा <strong>10 दिन</strong> है। आवेदक या उसके परिवार का <strong>19 फरवरी 1968 से पहले</strong> गोवा में रहना दिखाना होता है।",
  facts: [
    ["पोर्टल", '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a>'],
    ["जारी करते हैं", "डिप्टी कलेक्टर / SDO"],
    ["समय सीमा", "10 दिन (RTS कानून)"],
    ["अपील", "अपर कलेक्टर-II"],
  ],
  notice: "<strong>केंद्र और राज्य की सूची अलग:</strong> गोवा का प्रमाण पत्र गोवा सरकार की SC/ST/OBC सूची के अनुसार बनता है। केंद्र सरकार की नौकरी में OBC आरक्षण के लिए जाति केंद्रीय सूची में होनी चाहिए और भर्ती में नॉन-क्रीमी लेयर वाला केंद्रीय प्रारूप मांगा जाता है। विज्ञापन का प्रारूप देखकर ही आवेदन करें।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन आवेदन कर सकता है",
      list: [
        "आप गोवा सरकार की अधिसूचित <strong>SC, ST या OBC</strong> जाति से हों।",
        "आप / आपके माता-पिता / दादा-दादी <strong>19 फरवरी 1968 से पहले</strong> गोवा में रहते हों (SC/ST/OBC तीनों के लिए यह सबूत मांगा गया है)।",
        "<strong>OBC के लिए:</strong> माता-पिता Group A / Group B स्तर के अधिकारी न हों, और परिवार की आय के आधार पर आप <strong>क्रीमी लेयर</strong> में न आते हों (स्व-घोषणा में यह लिखना होता है)।",
      ],
      callout: { kind: "info", html: "पोर्टल पर <strong>एकल माता (single mother) के बच्चों</strong> के लिए अलग आवेदन और घोषणा-पत्र भी है। पहले बना SC/ST प्रमाण पत्र जिस पर \"Provisional\" लिखा है, उसे बिना इस शब्द के दोबारा बनवाने के लिए भी अलग स्व-घोषणा दी गई है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (Goa Online की सूची)",
      list: [
        "<strong>उम्र का सबूत</strong> (कोई एक): जन्म प्रमाण पत्र, पासिंग सर्टिफिकेट, पासपोर्ट, PAN, आधार।",
        "<strong>पहचान</strong> (कोई एक): आधार, मतदाता कार्ड, PAN, ड्राइविंग लाइसेंस, पेंशन आदेश, पासपोर्ट, बैंक पासबुक, सरकारी/संस्थान का ID कार्ड।",
        "<strong>जाति का सबूत:</strong> पिता या दादा के SC/ST या OBC होने का कागज़ (जैसे उनका जाति प्रमाण पत्र)।",
        "<strong>19.02.1968 से पहले गोवा में निवास</strong> का सबूत।",
        "<strong>स्व-घोषणा</strong> (SC/ST और OBC के अलग नमूने) और हाल की <strong>पासपोर्ट फोटो</strong>: ज़रूरी।",
        "<strong>निवास का सबूत</strong> (वैकल्पिक): स्कूल छोड़ने/बोनाफाइड प्रमाण पत्र, LPG कनेक्शन, घर-कर रसीद, किरायानामा, पानी का बिल।",
        "<strong>विवाह प्रमाण पत्र</strong> (विवाहित महिला के लिए)।",
        "<strong>पिछले 3 साल के आय प्रमाण पत्र</strong> (ग्राम पंचायत / नगरपालिका / CCP से), जहां लागू हो (OBC में क्रीमी लेयर की जांच के लिए)।",
      ],
      callout: { kind: "ok", html: "सभी कागज़ <strong>स्व-सत्यापित</strong> (अपने हस्ताक्षर के साथ) अपलोड करें। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a> पर ईमेल, मोबाइल, नाम, पता और जन्म तिथि डालकर OTP से <strong>Register</strong> करें।',
        "लॉगिन करके <strong>Services → All Services → Revenue → Caste Certificate</strong> चुनें।",
        "चुनें कि आवेदन अपने लिए है, किसी रिश्तेदार के लिए या किसी और के लिए।",
        "फॉर्म भरें, कागज़ अपलोड करें और भुगतान करें।",
        "SMS और ईमेल से <strong>Acknowledgement Number</strong> आता है; इसे संभालकर रखें।",
        "मंज़ूरी के बाद प्रमाण पत्र Goa Online के <strong>इनबॉक्स</strong> में आता है; कभी भी लॉगिन करके डाउनलोड करें।",
      ],
      callout: { kind: "info", html: "खुद ऑनलाइन न कर पाएं तो CSC या Goa Online के अधिकृत केंद्र से आवेदन करवाएं: <a href=\"/service/csc-locator/goa.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और अपील",
      table: {
        head: ["मद", "जानकारी"],
        rows: [
          ["जारी करने वाले (Designated officer)", "डिप्टी कलेक्टर / उप-मंडल अधिकारी (SDO)"],
          ["समय सीमा", "10 दिन (समयबद्ध सेवा कानून)"],
          ["अपील (Appellate authority)", "अपर कलेक्टर-II (Additional Collector-II)"],
        ],
      },
      html: "<p>ये जानकारी Goa Online के सेवा-पेज से है, जो गोवा के <strong>Right of Citizens to Time-bound Delivery of Public Services Act</strong> का हवाला देता है।</p><p><strong>शुल्क:</strong> भुगतान ऑनलाइन होता है और राशि भुगतान वाली स्क्रीन पर दिखती है। हम इसकी पक्की राशि सरकारी पेज पर नहीं देख पाए, इसलिए यहां नहीं लिख रहे।</p>",
      callout: { kind: "warn", html: "10 दिन में प्रमाण पत्र न मिले या आवेदन बिना ठोस वजह खारिज हो तो <strong>अपर कलेक्टर-II</strong> के पास अपील करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> Goa Online पर <strong>Track Status</strong> में Acknowledgement Number डालें।",
        "<strong>डाउनलोड:</strong> लॉगिन करके इनबॉक्स से।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Verify Certificate</strong> से।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["1968 से पहले गोवा में निवास का सबूत नहीं", "पुराने ज़मीन/घर के कागज़, स्कूल रिकॉर्ड या परिवार के पुराने सरकारी कागज़ लगाएं"],
          ["पिता/दादा की जाति का सबूत नहीं", "पैतृक पक्ष के किसी रिश्तेदार का जाति प्रमाण पत्र लगाएं"],
          ["OBC में आय/क्रीमी लेयर की घोषणा अधूरी", "OBC वाली स्व-घोषणा में माता-पिता की वेतन और दूसरी आय दोनों लिखें; पिछले 3 साल के आय प्रमाण पत्र लगाएं"],
          ["गलत स्व-घोषणा नमूना", "SC/ST और OBC के अलग नमूने हैं; अपनी श्रेणी वाला ही लगाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Goa Online पर फोन <strong>+91-8882988000</strong> (सोमवार से शुक्रवार, दफ्तर के समय) और ईमेल services.goa@gov.in दिए गए हैं। आवेदन की जांच से जुड़ी बात के लिए अपने उप-मंडल के डिप्टी कलेक्टर / SDO कार्यालय से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://www.goaonline.gov.in/", title: "Goa Online (आवेदन, Track Status, Verify Certificate)" },
    { href: "https://www.goaonline.gov.in/Appln/UIL/DeptServices?__DocId=REV&__ServiceId=REV06", title: "Caste Certificate सेवा-पेज: कागज़, समय सीमा, अधिकारी, फॉर्म" },
  ],
  faq: [
    { q: "गोवा में जाति प्रमाण पत्र कौन जारी करता है?", a: "डिप्टी कलेक्टर / उप-मंडल अधिकारी (SDO)। आवेदन Goa Online पर होता है और अपील अपर कलेक्टर-II के पास होती है।" },
    { q: "गोवा जाति प्रमाण पत्र कितने दिन में बनता है?", a: "Goa Online के सेवा-पेज के अनुसार गोवा के समयबद्ध सेवा कानून में इसकी समय सीमा 10 दिन है।" },
    { q: "1968 वाली शर्त क्या है?", a: "SC/ST/OBC प्रमाण पत्र के लिए यह दिखाना होता है कि आप या आपका परिवार 19 फरवरी 1968 से पहले गोवा में रहता था। स्व-घोषणा में यह लिखना होता है और इसका सबूत लगाना होता है।" },
    { q: "OBC प्रमाण पत्र के लिए आय क्यों पूछी जाती है?", a: "OBC आरक्षण क्रीमी लेयर से बाहर वालों को मिलता है। इसलिए स्व-घोषणा में माता-पिता की वेतन और दूसरी आय लिखनी होती है, और जहां लागू हो वहां पिछले 3 साल के आय प्रमाण पत्र लगते हैं।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "Goa Online होमपेज पर Verify Certificate से।" },
  ],
  related: [
    { href: "/states/goa-income-certificate.html", emoji: "💰", title: "गोवा आय प्रमाण पत्र", text: "मामलतदार, 1 दिन" },
    { href: "/states/goa-domicile-certificate.html", emoji: "🏠", title: "गोवा निवास प्रमाण पत्र", text: "रेज़िडेंस / डोमिसाइल" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://www.goaonline.gov.in/", label: "📝 Goa Online पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
