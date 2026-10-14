import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Personnel & AR (Administrative Reforms Cell) notification
//   No.PER(ARC)4/2023/20 dated 16.08.2023 (meghalaya.gov.in, PDF): entry 116
//   added to services notified under Section 3(2) of the Meghalaya Right to
//   Public Services Act, 2020: Income Certificate (without police
//   verification) 14 working days, (with police verification) 30 days;
//   organisation: Office of the Deputy Commissioner concerned; designated
//   official: Addl. Deputy Commissioner; appellate authority: Deputy
//   Commissioner.
// - megedistrict.gov.in (e-District Meghalaya, NIC) home/services pages:
//   "Income Certificate" SLA 30 days (RTPS); separate "Income and Asset
//   Certificate for Economically Weaker Section" 30 days; modes: Rainbow
//   Centres (CSCs), PFCs at DC/SDO offices, online; digitally signed and
//   verifiable certificates; Track Application; draft mode; corrections via
//   "Waiting for applicant's response"; payment revalidation; RTPS appeal
//   ("Raise an Appeal"); registration needs name, email, password, state
//   (mobile optional); helpline 1971 Connect. Income certificate documents:
//   residential proof (EPIC, electricity bill, patta, ration card, other),
//   self/parent/guardian EPIC, IT return of previous 2 years, annual income
//   proof from all sources in the form of an affidavit; PDF up to 1 MB.
// Left out (not confirmable on an official page we could open): the fee
// amount, validity. The old page's "₹25 fee" could not be confirmed.
export const meghalayaIncomeCertificate: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Meghalaya Income Certificate 2026: Apply Online",
  description: "Meghalaya (मेघालय) आय प्रमाण पत्र 2026: e-District Meghalaya पोर्टल पर ऑनलाइन आवेदन, ज़रूरी कागज़, RTPS समय सीमा (14 कार्य दिवस), अपील और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मेघालय आय प्रमाण पत्र 2026: e-District पर आवेदन, कागज़, समय सीमा और अपील",
  lead: "मेघालय में आय प्रमाण पत्र उपायुक्त (DC) कार्यालय की सेवा है और मेघालय लोक सेवा अधिकार अधिनियम, 2020 में अधिसूचित है। आवेदन <a href=\"https://megedistrict.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">megedistrict.gov.in</a> पर, Rainbow Centre (CSC) पर या DC/SDO कार्यालय के PFC काउंटर पर होता है। अगस्त 2023 की अधिसूचना के अनुसार अतिरिक्त उपायुक्त (ADC) पुलिस सत्यापन के बिना 14 कार्य दिवस में और पुलिस सत्यापन वाले मामले में 30 दिन में प्रमाण पत्र देते हैं; अपील उपायुक्त के पास होती है। आवेदन के साथ सभी स्रोतों से सालाना आय का शपथ-पत्र लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a>'],
    ["जारी करते हैं", "अतिरिक्त उपायुक्त (ADC), DC कार्यालय"],
    ["समय सीमा", "14 कार्य दिवस (पुलिस सत्यापन हो तो 30 दिन)"],
    ["अपील", "उपायुक्त (DC)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है, और कौन सा चाहिए",
      table: {
        head: ["e-District सेवा", "कब चाहिए"],
        rows: [
          ["<strong>Income Certificate</strong>", "छात्रवृत्ति, फीस माफी, आय पर आधारित योजनाएं"],
          ["<strong>Income and Asset Certificate for Economically Weaker Section</strong>", "EWS आरक्षण (नौकरी/दाखिला); इसमें आय के साथ संपत्ति का ब्योरा जाता है; अलग सेवा है"],
        ],
      },
      callout: { kind: "info", html: "जनजाति प्रमाण पत्र चाहिए तो देखें <a href=\"/states/meghalaya-caste-certificate.html\">मेघालय ST/SC प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची)",
      list: [
        "<strong>निवास का प्रमाण:</strong> EPIC/मतदाता पहचान पत्र, बिजली बिल, पट्टा, राशन कार्ड या कोई दूसरा निवास प्रमाण।",
        "<strong>EPIC:</strong> अपना या माता-पिता/अभिभावक का मतदाता पहचान पत्र (दोनों तरफ एक PDF में)।",
        "<strong>आयकर रिटर्न:</strong> पिछले 2 साल का IT रिटर्न (अगर भरते हैं)।",
        "<strong>सभी स्रोतों से सालाना आय का प्रमाण, शपथ-पत्र के रूप में।</strong>",
        "दूसरे कागज़ (जैसे वेतन प्रमाण पत्र) <strong>Others</strong> में लगा सकते हैं। हर PDF अधिकतम 1 MB; 75 या 100 DPI पर स्कैन करें।",
      ],
      callout: { kind: "warn", html: "शपथ-पत्र में आय सच-सच और सभी स्रोतों (नौकरी, खेती, व्यापार, मज़दूरी आदि) की लिखें। शपथ-पत्र के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a> पर रजिस्टर करें: पूरा नाम, ईमेल, पासवर्ड और राज्य ज़रूरी हैं; मोबाइल नंबर वैकल्पिक है।',
        "होमपेज पर <strong>Income Certificate</strong> के आगे <strong>Apply Now</strong> दबाएं और लॉगिन करें।",
        "फॉर्म भरें और कागज़ अपलोड करें। बीच में रुकना हो तो <strong>Draft</strong> में सेव करें; ड्राफ्ट नंबर का मतलब आवेदन जमा होना नहीं है।",
        "शुल्क लगे तो ऑनलाइन भरें। पैसा कट गया पर पोर्टल पर वापस नहीं आए तो <strong>Revalidate Payment</strong> करें।",
        "जमा करके <strong>पावती नंबर</strong> संभालें।",
      ],
    },
    {
      id: "offline",
      title: "Rainbow Centre (CSC) या DC/SDO कार्यालय से",
      intro: "पोर्टल के अनुसार आवेदन <strong>Rainbow Centre (CSC)</strong>, ज़िले के <strong>DC/SDO कार्यालय में PFC काउंटर</strong>, या खुद ऑनलाइन कर सकते हैं। CSC का अपना सेवा शुल्क हो सकता है, पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, अपील और फीस",
      table: {
        head: ["मामला", "समय सीमा", "देने वाले", "अपील"],
        rows: [
          ["पुलिस सत्यापन के बिना", "14 कार्य दिवस", "अतिरिक्त उपायुक्त", "उपायुक्त"],
          ["पुलिस सत्यापन के साथ", "30 दिन", "अतिरिक्त उपायुक्त", "उपायुक्त"],
        ],
      },
      html: "<p>यह कार्मिक एवं प्रशासनिक सुधार विभाग की अधिसूचना (16 अगस्त 2023) है। e-District के होमपेज पर इस सेवा की SLA <strong>30 दिन</strong> लिखी है। समय पर प्रमाण पत्र न मिले या आवेदन खारिज हो तो पोर्टल के <strong>RTPS Grievance Redressal → Raise an Appeal</strong> से अपील करें।</p><p><strong>फीस:</strong> इस सेवा की फीस की रकम किसी आधिकारिक पेज पर हमें नहीं मिली; आवेदन के समय पोर्टल पर दिखी रकम ही मान्य है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, सुधार और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> होमपेज के <strong>Track Application</strong> में आवेदन/पावती नंबर डालें।",
        "<strong>सुधार का SMS आया:</strong> Track application status में <strong>Waiting for applicant's response</strong> पर जाकर मांगी गई जानकारी या कागज़ दोबारा लगाएं।",
        "<strong>प्रमाण पत्र:</strong> पोर्टल के अनुसार सभी प्रमाण पत्र डिजिटल हस्ताक्षर वाले हैं और ऑनलाइन सत्यापित हो सकते हैं।",
      ],
      html: '<p>सामान्य जानकारी: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता",
      intro: "मेघालय के आय प्रमाण पत्र की वैधता अवधि पोर्टल या अधिसूचना में नहीं लिखी है। आय बदलती रहती है, इसलिए छात्रवृत्ति/योजना का फॉर्म किस तारीख के बाद का प्रमाण पत्र मांगता है, वह देखकर ज़रूरत हो तो नया बनवाएं।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का शपथ-पत्र नहीं लगाया", "सभी स्रोतों से सालाना आय का शपथ-पत्र लगाएं"],
          ["आयकर भरते हैं पर ITR नहीं लगाया", "पिछले 2 साल के IT रिटर्न लगाएं"],
          ["EPIC का एक ही तरफ स्कैन", "दोनों तरफ एक PDF में"],
          ["EWS के लिए साधारण आय प्रमाण पत्र", "\"Income and Asset Certificate for Economically Weaker Section\" में आवेदन करें"],
          ["ड्राफ्ट को जमा समझ लिया", "incomplete applications में जाकर पूरा करके जमा करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>1971 (Connect हेल्पलाइन):</strong> प्रशासनिक मदद के लिए, e-District के होमपेज पर दिया गया नंबर।",
        "<strong>तकनीकी दिक्कत:</strong> e-District के Contact Us पेज पर NIC मेघालय के संपर्क।",
      ],
    },
  ],
  official: [
    { href: "https://megedistrict.gov.in/", title: "e-District Meghalaya (आवेदन, ट्रैक, अपील)" },
    { href: "https://megedistrict.gov.in/resources/homePage/17/services.html", title: "e-District: सेवाएं और कागज़ों की सूची" },
    { href: "https://meghalaya.gov.in/sites/default/files/circulars/PER_ARC_4_2023_20.pdf", title: "RTPS अधिसूचना 16.08.2023 (PDF): आय प्रमाण पत्र की समय सीमा" },
    { href: "http://megpgrams.gov.in/", title: "MEGPGRAMS (शिकायत पोर्टल)" },
  ],
  faq: [
    { q: "मेघालय में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "megedistrict.gov.in पर ईमेल से रजिस्टर करें, Income Certificate पर Apply Now दबाएं, फॉर्म भरें, निवास प्रमाण, EPIC, सालाना आय का शपथ-पत्र (और ITR हो तो पिछले 2 साल का) अपलोड करें और पावती नंबर संभालें।" },
    { q: "मेघालय आय प्रमाण पत्र कितने दिन में बनता है?", a: "16.08.2023 की RTPS अधिसूचना के अनुसार पुलिस सत्यापन के बिना 14 कार्य दिवस और पुलिस सत्यापन के साथ 30 दिन। e-District के होमपेज पर SLA 30 दिन लिखी है।" },
    { q: "आय प्रमाण पत्र कौन जारी करता है?", a: "अधिसूचना के अनुसार संबंधित उपायुक्त कार्यालय में नामित अधिकारी अतिरिक्त उपायुक्त हैं; अपीलीय अधिकारी उपायुक्त हैं।" },
    { q: "EWS के लिए कौन सा प्रमाण पत्र बनवाएं?", a: "e-District पर \"Income and Asset Certificate for Economically Weaker Section\" अलग सेवा है; EWS आरक्षण के लिए वही बनवाएं।" },
  ],
  related: [
    { href: "/states/meghalaya-caste-certificate.html", emoji: "📜", title: "मेघालय ST/SC प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/meghalaya-domicile-certificate.html", emoji: "🏠", title: "मेघालय निवास प्रमाण पत्र", text: "PRC / रेज़िडेंस" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://megedistrict.gov.in/", label: "📝 e-District Meghalaya पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
