import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): onlineemploymentportal.delhi.gov.in (portal
// and its User Manual, Directorate of Employment, GNCTD); registration valid
// for 3 years (Vikaspedia, "Register with Employment Exchange"); ncs.gov.in.
export const delhiEmploymentExchange: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Delhi Employment Exchange 2026: Apply & Status | SarkariSewa",
  description: "दिल्ली रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: onlineemploymentportal.delhi.gov.in पर मोबाइल-ईमेल OTP से रजिस्ट्रेशन, तुरंत रजिस्ट्रेशन सर्टिफिकेट, योग्यता जोड़ना, स्पॉन्सरशिप और 3 साल में नवीनीकरण।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "दिल्ली रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन, सर्टिफिकेट और नवीनीकरण",
  lead: "दिल्ली में रोज़गार कार्यालय (Employment Exchange) का पंजीकरण दिल्ली सरकार के रोज़गार निदेशालय (Directorate of Employment) के ऑनलाइन पोर्टल पर होता है। 14 साल से ऊपर का कोई भी नौकरी चाहने वाला मोबाइल और ईमेल OTP से रजिस्ट्रेशन कर सकता है, और रजिस्ट्रेशन सर्टिफिकेट उसी समय मिल जाता है।",
  facts: [
    ["पोर्टल", '<a href="https://onlineemploymentportal.delhi.gov.in/" target="_blank" rel="noopener nofollow">onlineemploymentportal.delhi.gov.in</a>'],
    ["उम्र", "कम से कम 14 साल"],
    ["सर्टिफिकेट", "रजिस्ट्रेशन के तुरंत बाद"],
    ["नवीनीकरण", "हर 3 साल में"],
  ],
  notice: "<strong>ध्यान दें:</strong> पोर्टल एक व्यक्ति को दोबारा रजिस्ट्रेशन नहीं करने देता। इसलिए नाम, जन्मतिथि, श्रेणी और योग्यता भरने से पहले अपने कागज़ सामने रखें और सबमिट से पहले सब जांच लें।",
  sections: [
    {
      id: "kya-hai",
      title: "रोज़गार कार्यालय पंजीकरण क्या है और क्यों कराएं",
      intro: "रोज़गार निदेशालय नौकरी चाहने वालों और नौकरी देने वालों को जोड़ता है। सरकारी विभाग और Compulsory Notification of Vacancies Act, 1959 के दायरे में आने वाले नियोक्ता अपनी खाली जगहें यहां बताते हैं, और योग्य पंजीकृत उम्मीदवारों के नाम नियोक्ता को भेजे (sponsor) जाते हैं।",
      list: [
        "पोर्टल पर <strong>नौकरी देने वाले अपनी वैकेंसी</strong> डालते हैं; आपकी योग्यता के हिसाब से आपका नाम स्पॉन्सर हो सकता है।",
        "लॉगिन करके <strong>स्पॉन्सरशिप का विवरण</strong> देख सकते हैं।",
        "पंजीकरण सर्टिफिकेट में आपकी योग्यता, कौशल और अनुभव दर्ज रहते हैं, जो कई भर्तियों और योजनाओं में मांगा जाता है।",
      ],
    },
    {
      id: "kya-chahiye",
      title: "रजिस्ट्रेशन के लिए क्या-क्या चाहिए",
      intro: "पोर्टल पर कागज़ अपलोड करने के बजाय ज़्यादातर जानकारी भरनी होती है। ये चीज़ें पहले से तैयार रखें:",
      list: [
        "<strong>चालू मोबाइल नंबर और ईमेल ID</strong> (दोनों पर OTP आता है; लॉगिन ID ईमेल पर आती है)",
        "नाम, पिता और माता का नाम, <strong>जन्मतिथि</strong> (10वीं के सर्टिफिकेट के अनुसार)",
        "<strong>पढ़ाई का विवरण:</strong> बोर्ड/यूनिवर्सिटी, पास होने का साल, कुल अंक और प्राप्त अंक",
        "SC/ST/OBC/EWS हैं तो <strong>जाति प्रमाण पत्र का नंबर</strong> और जारी करने वाला अधिकारी",
        "दिव्यांग हैं तो दिव्यांगता का प्रकार, प्रतिशत (40% या ज़्यादा) और <strong>प्रमाण पत्र नंबर</strong>",
        "पूर्व सैनिक हैं तो फोर्स, रैंक, भर्ती और रिटायरमेंट की तारीख, सर्विस नंबर",
        "कौशल (Skill), अनुभव, भाषाएं, और पत्राचार व स्थायी पता (PIN के साथ)",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://onlineemploymentportal.delhi.gov.in/" target="_blank" rel="noopener nofollow">onlineemploymentportal.delhi.gov.in</a> खोलें और <strong>"New Registration"</strong> पर क्लिक करें।',
        "निर्देश ध्यान से पढ़ें और <strong>\"Register\"</strong> दबाएं।",
        "<strong>बुनियादी जानकारी भरें:</strong> नाम, माता-पिता का नाम, जन्मतिथि, लिंग, वैवाहिक स्थिति, ग्रामीण/शहरी, धर्म, श्रेणी; ज़रूरत हो तो दिव्यांगता और पूर्व सैनिक का विवरण।",
        "<strong>मोबाइल और ईमेल OTP</strong> डालकर सबमिट करें। लॉगिन ID और पासवर्ड आपकी ईमेल पर आते हैं।",
        "<strong>लॉगिन करें</strong> (Login As: Candidate) और योग्यता, कौशल (अधिकतम 10), अनुभव और भाषाएं जोड़ें। हर एंट्री के बाद <strong>\"ADD\"</strong> दबाना ज़रूरी है, वरना वह सेव नहीं होती।",
        "<strong>\"Print Registration Certificate\"</strong> पर क्लिक करके रजिस्ट्रेशन सर्टिफिकेट डाउनलोड/प्रिंट करें।",
      ],
      callout: { kind: "ok", html: "<strong>फीस:</strong> रोज़गार निदेशालय के यूज़र मैनुअल में उम्मीदवार के रजिस्ट्रेशन के लिए कोई भुगतान का चरण नहीं है। अगर कोई एजेंट पैसे मांगे तो सावधान रहें।" },
    },
    {
      id: "certificate",
      title: "रजिस्ट्रेशन सर्टिफिकेट, लॉगिन और योग्यता जोड़ना",
      table: {
        head: ["काम", "कैसे करें"],
        rows: [
          ["सर्टिफिकेट डाउनलोड", "रजिस्ट्रेशन पूरा होते ही \"Print Registration Certificate\"; इसमें रजिस्ट्रेशन नंबर और भरी गई पूरी जानकारी होती है"],
          ["लॉगिन", "Login As में \"Candidate\" चुनें, ईमेल पर आई User ID और पासवर्ड डालें"],
          ["नई योग्यता/कौशल जोड़ना", "लॉगिन के बाद मेन्यू में Qualification, Skill set, Experience और Language जोड़ें"],
          ["नौकरी की पसंद", "मेन्यू में \"Add preference\""],
          ["स्पॉन्सरशिप देखना", "मेन्यू में \"View sponsorship detail\""],
          ["पासवर्ड बदलना", "मेन्यू में \"Change Password\""],
        ],
      },
    },
    {
      id: "renewal",
      title: "नवीनीकरण (Renewal): हर 3 साल में",
      intro: "रोज़गार कार्यालय का पंजीकरण <strong>3 साल के लिए</strong> मान्य रहता है। इसके बाद नवीनीकरण करवाना होता है, नहीं तो पंजीकरण निष्क्रिय हो सकता है और आपका नाम वैकेंसी के लिए स्पॉन्सर नहीं होगा।",
      list: [
        "नवीनीकरण के समय अपनी नई योग्यता और अनुभव भी अपडेट कर दें।",
        "पोर्टल पर नवीनीकरण का विकल्प न मिले तो पोर्टल के \"Technical Assistance\" में सवाल भेजें या अपने रोज़गार कार्यालय से संपर्क करें।",
      ],
    },
    {
      id: "naukri",
      title: "दिल्ली में नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>, जहां पूरे देश की नौकरियां और जॉब फेयर दिखते हैं।',
        "<strong>सरकारी भर्तियां:</strong> SSC, रेलवे, DSSSB जैसी भर्तियां अपनी अलग वेबसाइट पर निकलती हैं; रोज़गार कार्यालय का पंजीकरण उनके लिए अलग से ज़रूरी नहीं है।",
        '<strong>नई भर्तियों की जानकारी:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
    {
      id: "dikkat",
      title: "दिक्कत आए तो क्या करें",
      table: {
        head: ["दिक्कत", "हल"],
        rows: [
          ["OTP नहीं आ रहा", "मोबाइल नंबर और ईमेल सही लिखें; ईमेल का Spam फोल्डर देखें"],
          ["लॉगिन ID नहीं मिली", "रजिस्ट्रेशन वाली ईमेल का Inbox/Spam देखें; फिर भी न मिले तो \"Technical Assistance\" में सवाल भेजें"],
          ["गलत जानकारी भर दी", "पोर्टल दोबारा रजिस्ट्रेशन नहीं करने देता; लॉगिन करके जो बदला जा सकता है वह बदलें, बाकी के लिए Technical Assistance में अनुरोध भेजें"],
          ["योग्यता सेव नहीं हुई", "हर योग्यता/कौशल चुनने के बाद \"ADD\" दबाएं; सिर्फ चुनने से डेटा सेव नहीं होता"],
        ],
      },
    },
  ],
  official: [
    { href: "https://onlineemploymentportal.delhi.gov.in/", title: "ऑनलाइन एम्प्लॉयमेंट पोर्टल, रोज़गार निदेशालय, दिल्ली" },
    { href: "https://onlineemploymentportal.delhi.gov.in/assets/files/userManual.pdf", title: "पोर्टल का यूज़र मैनुअल (PDF)" },
    { href: "https://employment.delhi.gov.in/", title: "रोज़गार निदेशालय, दिल्ली सरकार" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "दिल्ली में रोज़गार कार्यालय में पंजीकरण कैसे करें?", a: "onlineemploymentportal.delhi.gov.in पर New Registration चुनें, बुनियादी जानकारी भरें, मोबाइल और ईमेल OTP से सत्यापन करें, फिर ईमेल पर आई ID से लॉगिन करके योग्यता, कौशल और अनुभव जोड़ें और रजिस्ट्रेशन सर्टिफिकेट प्रिंट करें।" },
    { q: "दिल्ली रोज़गार कार्यालय पंजीकरण की उम्र सीमा क्या है?", a: "पोर्टल के अनुसार रजिस्ट्रेशन के लिए कम से कम 14 साल की उम्र होनी चाहिए।" },
    { q: "रजिस्ट्रेशन सर्टिफिकेट कब मिलता है?", a: "रोज़गार निदेशालय के अनुसार सफल रजिस्ट्रेशन के तुरंत बाद पोर्टल पर \"Print Registration Certificate\" से सर्टिफिकेट मिल जाता है। इसमें रजिस्ट्रेशन नंबर और भरी गई जानकारी होती है।" },
    { q: "रोज़गार कार्यालय का पंजीकरण कितने साल चलता है?", a: "पंजीकरण 3 साल के लिए मान्य रहता है। इसके बाद नवीनीकरण करवाएं, ताकि आपका नाम वैकेंसी के लिए स्पॉन्सर होता रहे।" },
    { q: "क्या दिल्ली में बेरोज़गारी भत्ता मिलता है?", a: "रोज़गार निदेशालय के पोर्टल पर बेरोज़गारी भत्ते की कोई योजना नहीं दी गई है। पंजीकरण का मुख्य फायदा वैकेंसी के लिए स्पॉन्सरशिप और नौकरी की जानकारी है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/states/delhi-caste-certificate.html", emoji: "📜", title: "दिल्ली जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/delhi-labour-card.html", emoji: "👷", title: "दिल्ली लेबर कार्ड", text: "निर्माण मज़दूरों के लिए, मुफ्त" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://onlineemploymentportal.delhi.gov.in/", label: "📝 पोर्टल पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
