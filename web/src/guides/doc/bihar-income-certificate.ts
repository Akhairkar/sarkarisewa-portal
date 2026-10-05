import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - Ltr_No_9541.pdf on serviceonline.bihar.gov.in: GAD (Bihar) letter
//   No. 11/A.Vi-07/2021 (May 2026) on documents accepted under "other records"
//   for online income certificates: quotes GAD circular 673 dated 08.03.2011
//   para 11 (evidence: salary/pension slip, income tax return, other records of
//   the applicant's parents/ancestors) and para 12(ii) (income assessed on the
//   previous financial year; certificate valid for one year from issue); Form-XV
//   application and Form-XVII self-affidavit (family annual income from
//   government service, business, agriculture and other sources); any record
//   that authentically confirms the family's annual income, filed with the
//   self-affidavit, counts as "other records".
// - Bihar_RTPS_GAD_Services.pdf (portal document): income certificate Form-XV,
//   attachment Form-XVII self-affidavit, certificate Form-XVI; Circle Officer
//   10 working days, appeal SDO 15, review DM 15; SDO-level and DM-level
//   counter-signature 10 days; "Tatkal" caste/residence/income at Circle
//   Officer level 2 working days.
// - GAD_points.pdf ("आवश्यक सूचना"): income certificate recognised for one year
//   from the date of issue.
// - serviceonline.bihar.gov.in home page and Bihar_Applicant_User_Manual.pdf /
//   Bihar_RTPS_Quick_Reference.pdf: service "आय प्रमाण-पत्र का निर्गमन" at
//   circle, sub-division and district level; separate EWS income & asset
//   certificate; online / RTPS counter / kiosk / CSC; Aadhaar OTP or one of 12
//   ECI identity cards; delivery by SMS link, e-mail, DigiLocker, ServicePlus
//   inbox, "Download Certificate"; "Track Application Status"; portal
//   verification subject to issuing authority; RTPS Appeal
//   (rtpsappeal.bihar.gov.in); "Know Your Eligibility"; fee note ("may be
//   applicable for some Non-RTPS Online Services"); support chain.
// Left out (not confirmable on an official page we could open): a fee amount,
// a helpline number, income limits for particular schemes.
export const biharIncomeCertificate: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Bihar Income Certificate 2026: Apply Online | SarkariSewa India",
  description: "Bihar (बिहार) आय प्रमाण पत्र 2026: RTPS Bihar / ServicePlus Portal पर घर बैठे ऑनलाइन आवेदन करें। पात्रता, 10 दिन की RTPS समय सीमा, 1 साल की वैधता, आवश्यक दस्तावेज़ और स्टेटस चेक।",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "बिहार आय प्रमाण पत्र 2026: RTPS पर आवेदन, कौन से कागज़ मान्य, समय सीमा और वैधता",
  lead: "बिहार में आय प्रमाण पत्र सामान्य प्रशासन विभाग की RTPS सेवा है। आवेदन serviceonline.bihar.gov.in पर या अंचल/प्रखंड के RTPS काउंटर पर होता है और अंचलाधिकारी (CO) 10 कार्य दिवस में प्रमाण पत्र देते हैं। आय पिछले वित्तीय वर्ष के आधार पर आंकी जाती है और प्रमाण पत्र जारी होने की तारीख से एक साल तक मान्य रहता है। आवेदन के साथ परिवार की कुल सालाना आय का स्वयं शपथ-पत्र और आय का कोई प्रमाण (वेतन/पेंशन पर्ची, आयकर रिटर्न या दूसरे मान्य अभिलेख) लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a>'],
    ["जारी करते हैं", "अंचलाधिकारी (CO)"],
    ["समय सीमा", "10 कार्य दिवस (तत्काल: 2 कार्य दिवस)"],
    ["वैधता", "जारी होने से 1 साल"],
  ],
  notice: "<strong>मई 2026 का स्पष्टीकरण:</strong> सामान्य प्रशासन विभाग के पत्र (संख्या 9541) के अनुसार स्वयं शपथ-पत्र के साथ लगाया गया <strong>हर वह अभिलेख</strong> जिससे परिवार की सालाना आय की प्रामाणिक पुष्टि हो, \"अन्यान्य अभिलेख\" के रूप में मान्य है। यानी वेतन पर्ची या ITR न हो तब भी आवेदन हो सकता है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है, और कौन सा चाहिए",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। RTPS पोर्टल पर आय से जुड़ी दो अलग सेवाएं हैं:",
      table: {
        head: ["सेवा", "कब चाहिए"],
        rows: [
          ["<strong>आय प्रमाण-पत्र का निर्गमन</strong>", "योजना, छात्रवृत्ति या दाखिले में जहां \"आय प्रमाण पत्र\" मांगा गया हो"],
          ["<strong>आर्थिक रूप से कमजोर वर्ग (EWS) के लिए आय और संपत्ति प्रमाण-पत्र</strong>", "EWS आरक्षण (नौकरी/दाखिला)। इसमें आय के साथ संपत्ति की जानकारी भी जाती है; यह अलग सेवा है"],
        ],
      },
      callout: { kind: "info", html: "OBC/BC/EBC आरक्षण के लिए आय प्रमाण पत्र नहीं, बल्कि <strong>नॉन-क्रीमी लेयर प्रमाण पत्र</strong> लगता है। उसके लिए <a href=\"/states/bihar-caste-certificate.html\">बिहार जाति प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "aay",
      title: "आय कैसे गिनी जाती है",
      list: [
        "<strong>पिछला वित्तीय वर्ष:</strong> सामान्य प्रशासन विभाग के परिपत्र 673 (08.03.2011) की कंडिका 12(ii) के अनुसार आय का आकलन <strong>गत वित्तीय वर्ष</strong> के आधार पर होता है।",
        "<strong>परिवार की कुल आय:</strong> फॉर्म-XVII (स्वयं शपथ-पत्र) में परिवार की कुल सालाना आय इन स्रोतों से अलग-अलग लिखी जाती है: <strong>सरकारी सेवा, व्यवसाय, कृषि और अन्य स्रोत</strong>।",
        "<strong>किसके कागज़:</strong> उसी परिपत्र की कंडिका 11 में साक्ष्य के रूप में <strong>आवेदक/आवेदिका के माता-पिता/पूर्वज</strong> की वेतन/पेंशन पर्ची, आयकर रिटर्न या अन्यान्य अभिलेख बताए गए हैं।",
      ],
      callout: { kind: "warn", html: "शपथ-पत्र में आय कम या गलत लिखना भारी पड़ सकता है: स्थल जांच में कर्मचारी आपकी बताई आय की पुष्टि करते हैं। जो आय सच में है वही लिखें। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>आवेदन फॉर्म-XV</strong>: ऑनलाइन फॉर्म स्क्रीन पर भरा जाता है; RTPS काउंटर पर भरा हुआ, स्याही से हस्ताक्षर किया फॉर्म दें।",
        "<strong>स्वयं शपथ-पत्र (फॉर्म-XVII)</strong>: परिवार की कुल सालाना आय और उसके स्रोत।",
        "<strong>आय का आधार (इनमें से जो हो)</strong>: माता-पिता की <strong>वेतन/पेंशन पर्ची</strong>, <strong>आयकर रिटर्न</strong>, या <strong>अन्यान्य अभिलेख</strong>, यानी कोई भी कागज़ जिससे परिवार की सालाना आय की प्रामाणिक पुष्टि हो।",
        "<strong>फोटो</strong>: वेबकैम से या फाइल अपलोड करके।",
        "<strong>पहचान</strong>: आधार OTP से प्रमाणीकरण, या भारत निर्वाचन आयोग के मान्य 12 पहचान पत्रों में से एक (मतदाता पहचान पत्र, पासपोर्ट, ड्राइविंग लाइसेंस, पैन कार्ड, फोटो वाली बैंक/डाकघर पासबुक, मनरेगा जॉब कार्ड, पेंशन दस्तावेज़, आधार आदि)।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन छोटी PDF में रखें; पोर्टल यही सलाह देता है। फोटो/कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a> खोलें। पहली बार हैं तो <strong>Register Yourself</strong> से अकाउंट बनाएं (लॉगिन अब <strong>मेरी पहचान</strong> से जुड़ा है)। होमपेज के विभाग वाले लिंक से बिना लॉगिन भी आवेदन खुलता है।',
        "<strong>RTPS सेवाएं → सामान्य प्रशासन विभाग → आय प्रमाण-पत्र का निर्गमन → अंचल स्तर पर</strong> चुनें। जल्दी चाहिए तो पोर्टल पर अंचल स्तर की <strong>तत्काल</strong> सेवा भी है।",
        "फॉर्म भरें (नाम अंग्रेज़ी में लिखकर Tab दबाएं तो हिंदी नाम अपने-आप बनता है), फोटो लगाएं और <strong>Save Draft</strong> करें।",
        "<strong>Attach Annexure</strong> से शपथ-पत्र और आय का प्रमाण जोड़ें।",
        "आधार OTP से प्रमाणीकरण करें या मान्य पहचान पत्र अपलोड करें, फिर फॉर्म जांचकर <strong>Submit</strong> करें।",
        "<strong>पावती (Acknowledgement)</strong> डाउनलोड करें; इसमें आवेदन संदर्भ संख्या होती है। आगे की सूचना SMS/ईमेल से आती है।",
      ],
    },
    {
      id: "offline",
      title: "RTPS काउंटर, कियोस्क या CSC से",
      intro: "अपने अंचल/प्रखंड के <strong>RTPS काउंटर</strong> पर कार्यपालक सहायक को भरा हुआ फॉर्म-XV, शपथ-पत्र और आय का प्रमाण दें। वे ऑनलाइन एंट्री करके पावती की एक कॉपी देंगे। प्रमाण पत्र उसी काउंटर से पावती और पहचान पत्र दिखाकर मिलता है। कियोस्क और कॉमन सर्विस सेंटर (CSC) से भी आवेदन हो सकता है। आवेदन सिर्फ अपने क्षेत्र के कार्यालय में दें।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील",
      table: {
        head: ["स्तर", "प्रमाण पत्र देने वाले", "समय", "अपील / पुनरीक्षण"],
        rows: [
          ["अंचल", "अंचलाधिकारी (CO)", "10 कार्य दिवस", "अनुमंडलाधिकारी (15 दिन) / जिलाधिकारी (15 दिन)"],
          ["अंचल (तत्काल सेवा)", "अंचलाधिकारी", "2 कार्य दिवस", "अनुमंडलाधिकारी / जिलाधिकारी"],
          ["अनुमंडल (अंचल वाले प्रमाण पत्र पर)", "अनुमंडलाधिकारी या प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
          ["जिला (अनुमंडल वाले प्रमाण पत्र पर)", "जिलाधिकारी द्वारा प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
        ],
      },
      html: "<p><strong>फीस:</strong> RTPS सेवा-सूची में कोई शुल्क दर्ज नहीं है। पोर्टल की पुस्तिका के अनुसार ऑनलाइन शुल्क कुछ <em>non-RTPS</em> सेवाओं पर लग सकता है; जिस सेवा में शुल्क हो वहां <strong>Make Payment</strong> दिखता है, नहीं तो सीधे Submit होता है। CSC/कियोस्क का अपना सेवा शुल्क हो सकता है, पहले पूछ लें।</p><p>समय पर प्रमाण पत्र न मिले या आवेदन गलत तरीके से खारिज हो तो <a href=\"https://rtpsappeal.bihar.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">RTPS अपील पोर्टल</a> पर अपील करें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>आवेदन की स्थिति देखें (Track Application Status)</strong> में संदर्भ संख्या और तारीख डालें।",
        "<strong>डाउनलोड:</strong> SMS के लिंक, ईमेल, DigiLocker, ServicePlus इनबॉक्स (Delivered → Output Certificate) या होमपेज के \"सर्टिफिकेट डाउनलोड करें\" लिंक से। काउंटर से आवेदन किया हो तो वहीं से भी मिलता है।",
        "<strong>सत्यापन:</strong> पोर्टल से किया गया सत्यापन जारी करने वाले प्राधिकारी के अंतिम सत्यापन के अधीन है।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: हर साल नया कब बनवाएं",
      intro: "आय प्रमाण पत्र <strong>जारी होने की तारीख से एक साल</strong> तक मान्य है (परिपत्र 673 की कंडिका 12(ii) और पोर्टल की आवश्यक सूचना)। छात्रवृत्ति या योजना के फॉर्म की आखिरी तारीख से पहले देख लें कि आपका प्रमाण पत्र साल भर पुराना तो नहीं हो गया। जब तक प्रमाण पत्र वैध है, पोर्टल की सलाह है कि नया आवेदन न करें और उसी को अलग-अलग कामों में इस्तेमाल करें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई प्रमाण नहीं लगाया", "वेतन/पेंशन पर्ची, ITR, या ऐसा कोई अभिलेख लगाएं जिससे परिवार की आय की पुष्टि हो (पत्र 9541)"],
          ["शपथ-पत्र में आय के स्रोत अधूरे", "सरकारी सेवा, व्यवसाय, कृषि और अन्य स्रोत, सबकी आय लिखें"],
          ["पहचान प्रमाण नहीं", "आधार OTP करें या 12 मान्य पहचान पत्रों में से एक लगाएं"],
          ["गलत कार्यालय में आवेदन", "अपने अंचल/प्रखंड में ही आवेदन करें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवा लिया", "EWS के लिए \"आय और संपत्ति प्रमाण-पत्र\" वाली अलग सेवा में आवेदन करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल की आवेदक पुस्तिका के अनुसार तकनीकी मदद पहले अपने पंचायत/प्रखंड/अंचल के <strong>कार्यपालक सहायक</strong> से लें; वे आईटी सहायक, जिला आईटी प्रबंधक और NIC जिला केंद्र तक मामला भेजते हैं। पोर्टल पर इस सेवा का अलग हेल्पलाइन नंबर नहीं दिया गया है।",
    },
  ],
  official: [
    { href: "https://serviceonline.bihar.gov.in/", title: "RTPS बिहार / ServicePlus (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Ltr_No_9541.pdf", title: "पत्र 9541 (PDF): आय प्रमाण पत्र में मान्य \"अन्यान्य अभिलेख\"" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Bihar_RTPS_GAD_Services.pdf", title: "सामान्य प्रशासन विभाग की RTPS सेवाएं (PDF): फॉर्म, समय सीमा, अपील" },
    { href: "https://rtpsappeal.bihar.gov.in", title: "RTPS अपील पोर्टल" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Bihar_Applicant_User_Manual.pdf", title: "आवेदक उपयोगकर्ता पुस्तिका (PDF)" },
  ],
  faq: [
    { q: "बिहार में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "serviceonline.bihar.gov.in पर लॉगिन करें, RTPS सेवाएं → सामान्य प्रशासन विभाग → आय प्रमाण-पत्र का निर्गमन → अंचल स्तर पर चुनें, फॉर्म भरें, स्वयं शपथ-पत्र और आय का प्रमाण अटैच करें, आधार OTP करें और Submit करके पावती डाउनलोड करें।" },
    { q: "बिहार आय प्रमाण पत्र कितने दिन में बनता है?", a: "RTPS सूची के अनुसार अंचलाधिकारी 10 कार्य दिवस में प्रमाण पत्र देते हैं। अंचल स्तर की तत्काल सेवा में समय सीमा 2 कार्य दिवस है।" },
    { q: "बिहार का आय प्रमाण पत्र कितने समय तक वैध है?", a: "जारी होने की तारीख से एक साल तक। आय का आकलन पिछले वित्तीय वर्ष के आधार पर होता है।" },
    { q: "वेतन पर्ची या ITR नहीं है तो आय प्रमाण पत्र कैसे बनेगा?", a: "सामान्य प्रशासन विभाग के पत्र 9541 (मई 2026) के अनुसार स्वयं शपथ-पत्र के साथ लगाया गया हर वह अभिलेख जिससे परिवार की सालाना आय की प्रामाणिक पुष्टि हो, \"अन्यान्य अभिलेख\" के रूप में मान्य है।" },
    { q: "आय प्रमाण पत्र में किसकी आय लिखी जाती है?", a: "फॉर्म-XVII शपथ-पत्र में परिवार की कुल सालाना आय, सरकारी सेवा, व्यवसाय, कृषि और अन्य स्रोतों से। परिपत्र में साक्ष्य के तौर पर आवेदक के माता-पिता/पूर्वज की वेतन/पेंशन पर्ची, ITR या अन्य अभिलेख बताए गए हैं।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। RTPS पोर्टल पर \"आर्थिक रूप से कमजोर वर्ग के लिए आय और संपत्ति प्रमाण-पत्र\" अलग सेवा है; EWS आरक्षण के लिए वही बनवाएं।" },
  ],
  related: [
    { href: "/states/bihar-caste-certificate.html", emoji: "📜", title: "बिहार जाति प्रमाण पत्र", text: "जाति और नॉन-क्रीमी लेयर" },
    { href: "/states/bihar-domicile-certificate.html", emoji: "🏠", title: "बिहार आवासीय प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.bihar.gov.in/", label: "📝 RTPS बिहार पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
