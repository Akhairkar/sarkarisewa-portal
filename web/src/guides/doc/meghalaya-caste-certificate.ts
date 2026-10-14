import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - megedistrict.gov.in (e-District Meghalaya, maintained by NIC Meghalaya)
//   home page and services page: services notified under the Meghalaya Right
//   to Public Services Act, 2020; "Scheduled Tribe Certificate" SLA 30 days,
//   "Scheduled Caste Certificate" SLA 45 days, "Permanent Residence
//   Certificate" 90 days, "Residence Certificate" 30 days; three modes:
//   Rainbow Centres (CSCs), PFCs at DC/SDO offices, online portal; all
//   certificates digitally signed and verifiable online; Track Application
//   with application/acknowledgement number; draft mode; "Waiting for
//   applicant's response" for corrections; payment revalidation; RTPS
//   grievance / "Raise an Appeal" when delayed or rejected; registration needs
//   full name, email, password, state (mobile optional); "1971 Connect"
//   helpline (administrative help). Document list for ST certificate: birth
//   proof (birth certificate; SSLC admit card / other proof accepted if born
//   before 1989), residential proof (EPIC, electricity bill, patta, ration
//   card, other), self/parent/guardian EPIC, ST certificate of parent/siblings
//   (mandatory below 18 years), NOC from clan in mixed marriage, adoption
//   proof for adopted child, other-state ST proof of either parent if the
//   parents got ST proof in another state; photo 20-100 KB, coloured; PDF up
//   to 1 MB per document. SC certificate page uses the same list.
// - e-District contact page: NIC Meghalaya technical contacts.
// Left out (not confirmable on an official page we could open): the fee
// amount, the designated/appellate officer for ST/SC, validity, an OBC
// service (none is listed on e-District).
export const meghalayaCasteCertificate: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Meghalaya Caste Certificate 2026: Apply & Status",
  description: "मेघालय ST/SC प्रमाण पत्र 2026: e-District Meghalaya (megedistrict.gov.in) पर ऑनलाइन आवेदन, ज़रूरी कागज़, RTPS समय सीमा (ST 30 दिन) और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मेघालय जाति प्रमाण पत्र 2026: e-District पर ST/SC आवेदन, कागज़, समय सीमा और स्टेटस",
  lead: "मेघालय में जाति प्रमाण पत्र के नाम पर मुख्य रूप से <strong>अनुसूचित जनजाति (ST) प्रमाण पत्र</strong> बनता है; अनुसूचित जाति (SC) प्रमाण पत्र की अलग सेवा है। आवेदन <a href=\"https://megedistrict.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">megedistrict.gov.in</a> (e-District Meghalaya) पर, Rainbow Centre (CSC) पर या DC/SDO कार्यालय के PFC काउंटर पर होता है। दोनों सेवाएं मेघालय लोक सेवा अधिकार अधिनियम, 2020 में आती हैं: पोर्टल पर ST की समय सीमा 30 दिन और SC की 45 दिन लिखी है। 18 साल से कम उम्र वालों के लिए माता-पिता/भाई-बहन का ST प्रमाण पत्र ज़रूरी है।",
  facts: [
    ["पोर्टल", '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a>'],
    ["कहां से", "DC / SDO (सिविल) कार्यालय"],
    ["समय सीमा", "ST: 30 दिन, SC: 45 दिन (RTPS)"],
    ["हेल्पलाइन", "1971 (Connect)"],
  ],
  notice: "<strong>मिश्रित विवाह या दूसरे राज्य का ST:</strong> माता-पिता अलग समुदाय के हों तो कबीले (clan) का NOC, और माता-पिता ने ST प्रमाण किसी दूसरे राज्य से लिया हो तो उसका प्रमाण लगाना पोर्टल की सूची में ज़रूरी बताया गया है।",
  sections: [
    {
      id: "sevayen",
      title: "e-District पर कौन सी सेवा किसके लिए",
      table: {
        head: ["e-District सेवा", "किसके लिए / समय सीमा"],
        rows: [
          ["<strong>Scheduled Tribe Certificate</strong>", "मेघालय की मान्य अनुसूचित जनजातियों के लोग; 30 दिन"],
          ["<strong>Scheduled Caste Certificate</strong>", "अनुसूचित जाति के लोग; 45 दिन"],
          ["<strong>Permanent Residence Certificate</strong>", "स्थायी निवास का सबूत, जाति का नहीं; 90 दिन। देखें <a href=\"/states/meghalaya-domicile-certificate.html\">मेघालय निवास प्रमाण पत्र</a>"],
          ["<strong>Income and Asset Certificate (EWS)</strong>", "EWS आरक्षण; 30 दिन"],
        ],
      },
      callout: { kind: "info", html: "e-District की सेवा-सूची में OBC प्रमाण पत्र की कोई सेवा नहीं दिखती। केंद्र सरकार की नौकरी में OBC आरक्षण के लिए केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र चाहिए, जिसमें जाति केंद्र की OBC सूची में हो; ऐसे मामले में अपने DC कार्यालय से पूछें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची, ST और SC दोनों)",
      table: {
        head: ["कागज़", "क्या लगा सकते हैं", "कब ज़रूरी"],
        rows: [
          ["जन्म का प्रमाण", "जन्म प्रमाण पत्र; 1989 से पहले जन्म हो तो SSLC एडमिट कार्ड या दूसरा जन्म प्रमाण भी चल सकता है", "सभी"],
          ["निवास का प्रमाण", "EPIC/मतदाता पहचान पत्र, बिजली बिल, पट्टा, राशन कार्ड या कोई दूसरा निवास प्रमाण", "सभी"],
          ["सहायक दस्तावेज़", "अपना या माता-पिता/अभिभावक का EPIC कार्ड", "सभी"],
          ["माता-पिता का ST प्रमाण पत्र", "माता-पिता या भाई-बहन का ST प्रमाण पत्र", "18 साल से कम उम्र वालों के लिए"],
          ["कबीले (clan) का NOC", "कबीले से अनापत्ति प्रमाण", "मिश्रित विवाह में"],
          ["गोद लेने का प्रमाण", "कोर्ट का आदेश या पंजीकृत गोदनामा", "गोद लिए बच्चे के लिए"],
          ["दूसरे राज्य का ST प्रमाण", "माता या पिता का दूसरे राज्य वाला ST प्रमाण", "जब माता-पिता ने ST प्रमाण दूसरे राज्य से लिया हो"],
        ],
      },
      list: [
        "<strong>फोटो:</strong> सिर्फ रंगीन, ठीक से कटी हुई, 20 KB से 100 KB।",
        "<strong>स्कैन:</strong> हर PDF अधिकतम 1 MB; 75 या 100 DPI पर स्कैन करें। EPIC के दोनों तरफ एक ही PDF में; माता और पिता दोनों के ST प्रमाण पत्र हों तो दोनों एक PDF में।",
        "18 साल से ऊपर हैं तो फॉर्म माता-पिता का ST प्रमाण नहीं मांगेगा, पर हो तो <strong>Others</strong> में अपलोड कर दें।",
      ],
      callout: { kind: "ok", html: "फोटो 100 KB और PDF 1 MB से छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a> पर रजिस्टर करें: पूरा नाम, ईमेल, पासवर्ड और राज्य ज़रूरी हैं; मोबाइल नंबर वैकल्पिक है (दें तो ठीक 10 अंक)।',
        "होमपेज पर <strong>Scheduled Tribe Certificate</strong> (या Scheduled Caste Certificate) के आगे <strong>Apply Now</strong> दबाएं और लॉगिन करें।",
        "फॉर्म भरें, फोटो और ऊपर लिखे कागज़ अपलोड करें। बीच में रुकना हो तो <strong>Draft</strong> में सेव करें; ड्राफ्ट नंबर का मतलब आवेदन जमा होना नहीं है।",
        "शुल्क लगे तो ऑनलाइन भरें। पैसा कट गया पर पोर्टल पर वापस नहीं आए तो <strong>Revalidate Payment</strong> करें।",
        "जमा करके <strong>पावती (acknowledgement) नंबर</strong> संभालें।",
      ],
    },
    {
      id: "offline",
      title: "Rainbow Centre (CSC) या DC/SDO कार्यालय से",
      intro: "पोर्टल के अनुसार आवेदन तीन तरह से होता है: <strong>Rainbow Centre (CSC)</strong>, ज़िले के <strong>DC/SDO कार्यालय में PFC काउंटर</strong>, या खुद ऑनलाइन। CSC का अपना सेवा शुल्क हो सकता है, पहले पूछ लें।",
    },
    {
      id: "status",
      title: "स्टेटस, सुधार और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> होमपेज के <strong>Track Application</strong> में आवेदन/पावती नंबर डालें; वहां स्थिति, टिप्पणी और आपसे बाकी काम दिखता है।",
        "<strong>सुधार का SMS आया:</strong> Track application status में <strong>Waiting for applicant's response</strong> पर जाकर मांगी गई जानकारी या कागज़ दोबारा लगाएं।",
        "<strong>प्रमाण पत्र:</strong> पोर्टल के अनुसार सभी प्रमाण पत्र अब डिजिटल हस्ताक्षर वाले हैं और ऑनलाइन सत्यापित हो सकते हैं।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखने के बारे में सामान्य जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "samay",
      title: "समय सीमा, अपील और फीस",
      list: [
        "<strong>समय सीमा (RTPS अधिनियम, 2020):</strong> ST प्रमाण पत्र 30 दिन, SC प्रमाण पत्र 45 दिन (e-District पर लिखी SLA)।",
        "<strong>अपील:</strong> आवेदन देर से निपटे, खारिज हो या समय में न हो तो पोर्टल के <strong>RTPS Grievance Redressal → Raise an Appeal</strong> से अपीलीय अधिकारी के पास अपील कर सकते हैं। अधिनियम में समय पर सेवा न देने वाले अधिकारी पर जुर्माने का प्रावधान है।",
        "<strong>फीस:</strong> पोर्टल पर ऑनलाइन भुगतान का विकल्प है, पर ST/SC प्रमाण पत्र की फीस की रकम किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन के समय दिखी रकम ही मान्य है।",
        "<strong>वैधता:</strong> पोर्टल पर नहीं लिखी। नौकरी/दाखिले का विज्ञापन कोई खास तारीख मांगे तो उसी के हिसाब से चलें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["18 साल से कम, पर माता-पिता का ST प्रमाण नहीं लगाया", "माता-पिता या भाई-बहन का ST प्रमाण पत्र लगाएं"],
          ["मिश्रित विवाह, clan NOC नहीं", "कबीले से NOC लेकर लगाएं"],
          ["फोटो काली-सफेद या बड़ी", "रंगीन फोटो, 20 से 100 KB"],
          ["EPIC का एक ही तरफ स्कैन", "दोनों तरफ एक PDF में"],
          ["ड्राफ्ट को जमा समझ लिया", "Track application status → incomplete applications में जाकर पूरा करके जमा करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>1971 (Connect हेल्पलाइन):</strong> प्रशासनिक मदद के लिए, e-District के होमपेज पर दिया गया नंबर।",
        "<strong>तकनीकी दिक्कत:</strong> e-District के Contact Us पेज पर NIC मेघालय के अधिकारियों के संपर्क दिए गए हैं।",
        "शिकायत के लिए राज्य का <strong>MEGPGRAMS</strong> पोर्टल भी पोर्टल पर जुड़ा है।",
      ],
    },
  ],
  official: [
    { href: "https://megedistrict.gov.in/", title: "e-District Meghalaya (आवेदन, ट्रैक, अपील)" },
    { href: "https://megedistrict.gov.in/resources/homePage/17/services.html", title: "e-District: सभी सेवाएं, समय सीमा और कागज़ों की सूची" },
    { href: "https://megedistrict.gov.in/resources/homePage/17/contactus.html", title: "e-District: संपर्क" },
    { href: "http://megpgrams.gov.in/", title: "MEGPGRAMS (शिकायत पोर्टल)" },
  ],
  faq: [
    { q: "मेघालय में ST प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "megedistrict.gov.in पर ईमेल से रजिस्टर करें, Scheduled Tribe Certificate पर Apply Now दबाएं, फॉर्म भरें, जन्म प्रमाण, निवास प्रमाण, EPIC और (18 साल से कम हों तो) माता-पिता का ST प्रमाण पत्र अपलोड करें, और पावती नंबर संभालें।" },
    { q: "मेघालय ST प्रमाण पत्र कितने दिन में बनता है?", a: "e-District पर मेघालय लोक सेवा अधिकार अधिनियम, 2020 के तहत ST प्रमाण पत्र की समय सीमा 30 दिन और SC प्रमाण पत्र की 45 दिन लिखी है।" },
    { q: "मिश्रित विवाह वाले परिवार के बच्चे को ST प्रमाण पत्र कैसे मिलेगा?", a: "पोर्टल की सूची के अनुसार मिश्रित विवाह के मामले में कबीले (clan) का NOC लगाना होता है, साथ में बाकी सामान्य कागज़।" },
    { q: "क्या रजिस्ट्रेशन के लिए मोबाइल नंबर ज़रूरी है?", a: "नहीं। e-District के FAQ के अनुसार पूरा नाम, ईमेल, पासवर्ड और राज्य ज़रूरी हैं; मोबाइल नंबर खाली छोड़ सकते हैं।" },
    { q: "समय पर प्रमाण पत्र न मिले तो क्या करें?", a: "e-District के RTPS Grievance Redressal हिस्से में Raise an Appeal से अपील करें।" },
  ],
  related: [
    { href: "/states/meghalaya-income-certificate.html", emoji: "💰", title: "मेघालय आय प्रमाण पत्र", text: "e-District पर आवेदन" },
    { href: "/states/meghalaya-domicile-certificate.html", emoji: "🏠", title: "मेघालय निवास प्रमाण पत्र", text: "PRC / रेज़िडेंस" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://megedistrict.gov.in/", label: "📝 e-District Meghalaya पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
