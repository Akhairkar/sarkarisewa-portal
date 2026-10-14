import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Apuni Sarkar portal eservices.uk.gov.in, public service API (/api/service,
//   service "income-certificate", id ES09): Revenue Department > Revenue
//   Certificates, charge Rs 40, delivery time 15 days (1296000 s), notified
//   under Right to Service (rts: true); required documents: applicant photo,
//   ID proof, address proof, ration card/copy of family register, self
//   declaration form; optional: pay slip; officer fields "yearly income in
//   digits / words". Separate service RD10 "Economically Weaker Section (EWS)
//   Certificate" (Rs 40, 15 days).
// - Self-declaration form (revised) linked from that service:
//   eservices.uk.gov.in/api/shared-files/revenue-department/revenue-noc-0001.pdf
//   (income heads: unorganised labour, agricultural land, pension, salary with
//   pay slip/certificate mandatory, private profession, shop rent/trade-tax
//   turnover, ITR, other sources; family = husband-wife, minor and unmarried
//   adult children, dependent parents living together with no own income;
//   family head's income plus other members; earlier certificate number;
//   declaration that false information invites penal action).
// - The portal's own bundle: approval flow for income-certificate Tehsildar >
//   Patwari > Tehsildar. Portal FAQ (Rs 30 portal charge, SMS updates,
//   Application Status / Verify Certificate, helpline 1905 option 4,
//   e-helpdesk@uk.gov.in) as already recorded in uttarakhand-caste-certificate.ts.
// Left out (not confirmable on an official page we could open): a validity
// period for the income certificate, scheme-wise income limits.
export const uttarakhandIncomeCertificate: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Uttarakhand Income Certificate 2026: Apply Online",
  description: "उत्तराखंड आय प्रमाण पत्र 2026: अपुणि सरकार (eservices.uk.gov.in) पर ऑनलाइन आवेदन। ₹40 सेवा शुल्क, 15 दिन की समय सीमा, स्व-घोषणा पत्र, ज़रूरी कागज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "उत्तराखंड आय प्रमाण पत्र 2026: अपुणि सरकार पर आवेदन, स्व-घोषणा पत्र, फीस और स्टेटस",
  lead: "उत्तराखंड में आय प्रमाण पत्र राजस्व विभाग जारी करता है और आवेदन अपुणि सरकार पोर्टल (eservices.uk.gov.in) पर या CSC से होता है। पोर्टल के अनुसार यह सेवा का अधिकार (Right to Service) में शामिल सेवा है, समय सीमा 15 दिन और सेवा शुल्क ₹40 है। आवेदन तहसीलदार के पास जाता है, पटवारी जांच करते हैं और तहसीलदार सालाना आय दर्ज करके प्रमाण पत्र जारी करते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a>'],
    ["समय सीमा", "15 दिन (सेवा का अधिकार)"],
    ["शुल्क", "₹40 (पोर्टल पर दर्ज)"],
    ["जारी करते हैं", "तहसीलदार"],
  ],
  notice: "<strong>स्व-घोषणा पत्र ज़रूरी है:</strong> पोर्टल पर आय प्रमाण पत्र के लिए संशोधित <strong>स्व-घोषणा प्रमाण पत्र</strong> भरकर अपलोड करना अनिवार्य है। नौकरी करते हैं तो उसमें वेतन पर्ची/वेतन प्रमाण पत्र लगाना भी अनिवार्य लिखा है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। यह छात्रवृत्ति, फीस माफी, पेंशन और आय पर आधारित दूसरी योजनाओं में मांगा जाता है।",
      callout: { kind: "info", html: "आर्थिक रूप से कमज़ोर वर्ग (EWS) आरक्षण के लिए साधारण आय प्रमाण पत्र नहीं चलता। अपुणि सरकार पर <strong>\"Economically Weaker Section (EWS) Certificate\"</strong> की अलग सेवा है। OBC आरक्षण के लिए <a href=\"/states/uttarakhand-caste-certificate.html\">उत्तराखंड जाति प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "aay",
      title: "आय कैसे गिनी जाती है (स्व-घोषणा पत्र के अनुसार)",
      list: [
        "<strong>परिवार में कौन:</strong> पति-पत्नी, नाबालिग और अविवाहित बालिग संतानें, और वे आश्रित माता-पिता जिनकी अपनी कोई आय नहीं है और जो परिवार के साथ रहते हैं।",
        "<strong>कुल आय:</strong> परिवार के मुखिया की आय में परिवार के बाकी सदस्यों की आय जोड़कर प्रमाण पत्र बनता है।",
        "<strong>आय के स्रोत जो लिखने होते हैं:</strong> असंगठित क्षेत्र की मज़दूरी, खेती की ज़मीन (गांव, क्षेत्रफल और आय), पेंशन, नौकरी का वेतन, निजी व्यवसाय (डॉक्टर, वकील, आर्किटेक्ट, CA, मध्यम/बड़े व्यवसाय), दुकान का किराया या व्यापार कर विवरणी, आयकर रिटर्न (ITR) और दूसरे स्रोत।",
        "पहले कभी आय प्रमाण पत्र बना हो तो उसका क्रमांक, तारीख और उसमें लिखी आय भी भरनी होती है।",
      ],
      callout: { kind: "warn", html: "फॉर्म की घोषणा के अनुसार कोई जानकारी गलत पाई गई तो आवेदक के खिलाफ दंडात्मक कार्रवाई हो सकती है। जो आय सच में है वही लिखें। स्व-घोषणा के बारे में और: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची के अनुसार)",
      list: [
        "<strong>आवेदक की फोटो</strong>",
        "<strong>पहचान पत्र</strong> (जैसे आधार या मतदाता पहचान पत्र)",
        "<strong>निवास का प्रमाण</strong>",
        "<strong>राशन कार्ड या परिवार रजिस्टर की नकल</strong>",
        "<strong>स्व-घोषणा पत्र</strong>: सेवा के पेज पर \"डाउनलोड स्व-घोषणा पत्र\" लिंक से फॉर्म लें, भरकर हस्ताक्षर करें, स्व-प्रमाणित फोटो लगाएं और स्कैन करके अपलोड करें।",
        "<strong>वेतन पर्ची</strong> (पोर्टल पर वैकल्पिक, पर नौकरी/सेवायोजन से आय हो तो स्व-घोषणा पत्र के अनुसार अनिवार्य)",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> खेती से आय हो तो खतौनी, पेंशन हो तो पेंशन का कागज़ और ITR भरते हों तो उसकी कॉपी साथ रखें; स्व-घोषणा पत्र में आय के सबूत लगाने को कहा गया है। फोटो/स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "अपुणि सरकार पोर्टल पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a> खोलें। पहली बार हैं तो <strong>Citizen Login</strong> में "Signup" से अकाउंट बनाएं, फिर लॉगिन करें।',
        "विभागों में <strong>राजस्व विभाग (Revenue Department)</strong> → <strong>राजस्व प्रमाण पत्र</strong> → <strong>आय प्रमाण पत्र</strong> चुनें।",
        "सेवा के पेज से <strong>स्व-घोषणा पत्र</strong> डाउनलोड करके भरें।",
        "ऑनलाइन फॉर्म में नाम, माता-पिता/पति का नाम और पता भरें, फिर ऊपर बताए कागज़ अपलोड करें।",
        "<strong>ऑनलाइन भुगतान</strong> करें: क्रेडिट/डेबिट कार्ड, UPI या नेट बैंकिंग।",
        "सबमिट होने पर मिली <strong>आवेदन संख्या</strong> नोट कर लें। हर चरण पर SMS से सूचना मिलती है।",
        "मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "CSC / जन सेवा केंद्र से आवेदन",
      intro: "अपुणि सरकार पोर्टल पर CSC ऑपरेटरों का अलग लॉगिन है। नज़दीकी CSC/जन सेवा केंद्र पर भरा हुआ स्व-घोषणा पत्र और मूल कागज़ लेकर जाएं; ऑपरेटर ऑनलाइन आवेदन कर देगा। आवेदन संख्या की पर्ची ज़रूर लें और केंद्र का अपना शुल्क पहले पूछ लें।",
    },
    {
      id: "fees",
      title: "फीस, समय सीमा और जांच",
      table: {
        head: ["क्या", "जानकारी"],
        rows: [
          ["सेवा शुल्क", "पोर्टल की सेवा सूची में <strong>₹40</strong> दर्ज है"],
          ["पोर्टल शुल्क", "पोर्टल के FAQ के अनुसार विभागीय शुल्क के अलावा <strong>₹30</strong>; भुगतान से पहले स्क्रीन पर कुल राशि देख लें"],
          ["समय सीमा", "<strong>15 दिन</strong> (सेवा का अधिकार के तहत अधिसूचित सेवा)"],
          ["जांच", "तहसीलदार → पटवारी (जांच और रिपोर्ट) → तहसीलदार (सालाना आय अंकों और शब्दों में दर्ज करके मंज़ूरी)"],
        ],
      },
      callout: { kind: "warn", html: "15 दिन में फैसला न हो या बिना ठोस वजह आवेदन खारिज हो, तो सेवा का अधिकार कानून में अपील का अधिकार है। पोर्टल के <a href=\"https://eservices.uk.gov.in/grievances\" target=\"_blank\" rel=\"noopener nofollow\">Grievances</a> सेक्शन में शिकायत करें या 1905 पर कॉल करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल के मुख्य पेज पर <strong>\"Application Status\"</strong> में आवेदन संख्या डालें।",
        "<strong>प्रमाण पत्र असली है या नहीं:</strong> मुख्य पेज पर <strong>\"Verify Certificate\"</strong> से जांचें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद अपने लॉगिन से जितनी बार चाहें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया प्रमाण पत्र कब बनवाएं",
      intro: "पोर्टल पर आय प्रमाण पत्र की वैधता अवधि नहीं लिखी है। आय हर साल बदल सकती है, इसलिए ज़्यादातर छात्रवृत्ति और योजनाएं हाल का बना प्रमाण पत्र मांगती हैं। फॉर्म भरने से पहले उस योजना/संस्था के नियम में देखें कि कितना पुराना प्रमाण पत्र चलेगा।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["स्व-घोषणा पत्र नहीं लगाया या अधूरा", "पोर्टल वाला संशोधित फॉर्म पूरा भरें, हस्ताक्षर करें और फोटो लगाएं"],
          ["नौकरी है पर वेतन पर्ची नहीं", "वेतन पर्ची या विभाग का वेतन प्रमाण पत्र लगाएं"],
          ["परिवार के सभी सदस्यों की आय नहीं लिखी", "फॉर्म की तालिका में हर कमाने वाले सदस्य की आय लिखें"],
          ["राशन कार्ड/परिवार रजिस्टर नहीं लगा", "ग्राम पंचायत/नगर निकाय से परिवार रजिस्टर की नकल लें"],
          ["EWS के लिए आय प्रमाण पत्र बनवा लिया", "EWS के लिए अलग \"EWS Certificate\" सेवा में आवेदन करें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन",
      list: [
        "<strong>1905</strong> (मुख्यमंत्री हेल्पलाइन): अपुणि सरकार की सेवाओं के लिए विकल्प 4; सोमवार से शनिवार, सुबह 10 से शाम 5 बजे।",
        "ईमेल: <strong>e-helpdesk@uk.gov.in</strong>",
      ],
    },
  ],
  official: [
    { href: "https://eservices.uk.gov.in/", title: "अपुणि सरकार पोर्टल (आवेदन, स्टेटस, Verify Certificate)" },
    { href: "https://eservices.uk.gov.in/api/shared-files/revenue-department/revenue-noc-0001.pdf", title: "आय प्रमाण पत्र का स्व-घोषणा पत्र (PDF)" },
    { href: "https://eservices.uk.gov.in/grievances", title: "अपुणि सरकार: शिकायत (Grievances)" },
    { href: "https://eservices.uk.gov.in/rts-act.pdf", title: "उत्तराखंड सेवा का अधिकार अधिनियम (PDF)" },
  ],
  faq: [
    { q: "उत्तराखंड में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "eservices.uk.gov.in पर लॉगिन करें, राजस्व विभाग → राजस्व प्रमाण पत्र → आय प्रमाण पत्र चुनें, स्व-घोषणा पत्र भरकर फोटो, पहचान, निवास और राशन कार्ड/परिवार रजिस्टर के साथ अपलोड करें और ऑनलाइन भुगतान करें।" },
    { q: "उत्तराखंड आय प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के अनुसार यह सेवा का अधिकार में शामिल सेवा है और समय सीमा 15 दिन है।" },
    { q: "उत्तराखंड आय प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल की सेवा सूची में ₹40 दर्ज है। पोर्टल के FAQ के अनुसार ₹30 पोर्टल शुल्क अलग से लगता है; भुगतान से पहले कुल राशि देख लें।" },
    { q: "आय प्रमाण पत्र में परिवार की आय में किसकी आय जुड़ती है?", a: "स्व-घोषणा पत्र के अनुसार पति-पत्नी, नाबालिग और अविवाहित बालिग संतानें, और साथ रहने वाले वे आश्रित माता-पिता जिनकी अपनी आय नहीं है। मुखिया और बाकी सदस्यों की आय जोड़कर कुल आय बनती है।" },
    { q: "आय प्रमाण पत्र कौन जारी करता है?", a: "तहसीलदार। पटवारी जांच करके रिपोर्ट देते हैं और तहसीलदार सालाना आय दर्ज करके प्रमाण पत्र जारी करते हैं।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। अपुणि सरकार पर \"Economically Weaker Section (EWS) Certificate\" अलग सेवा है।" },
  ],
  related: [
    { href: "/states/uttarakhand-caste-certificate.html", emoji: "📜", title: "उत्तराखंड जाति प्रमाण पत्र", text: "अपुणि सरकार पर आवेदन" },
    { href: "/states/uttarakhand-domicile-certificate.html", emoji: "🏠", title: "उत्तराखंड स्थायी निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://eservices.uk.gov.in/", label: "📝 अपुणि सरकार पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
