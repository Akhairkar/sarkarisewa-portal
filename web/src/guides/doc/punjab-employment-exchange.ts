import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; pgrkam.com is not reachable from our checker,
// so facts come from Punjab district websites that link it):
// - patiala.nic.in/district-bureau-of-employment-and-enterprises/ : DBEE under
//   the Ghar Ghar Rozgar Mission, www.pgrkam.com, jobseeker registration link
//   pgrkam.com/signup?type=1, Patiala DBEE helpline and address.
// - amritsar.nic.in/district-bureau-of-employment-enterprises/ : functions of
//   the DBEE (registering job seekers, counselling, skill training, placement,
//   self-employment help, notification of vacancies).
// - jalandhar.nic.in/service/employment-exchange-registration/ : Department of
//   Employment Generation and Training, Punjab, Chandigarh.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on an official page we could open): registration
// fee, age limit, validity/renewal period, unemployment allowance (no scheme
// confirmed), other districts' phone numbers.
export const punjabEmploymentExchange: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Punjab Employment Exchange 2026: Apply & Status",
  description: "पंजाब रोज़गार कार्यालय पंजीकरण 2026: PGRKAM (pgrkam.com) पर जॉबसीकर रजिस्ट्रेशन, ज़िला रोज़गार एवं उद्यम ब्यूरो (DBEE) की सेवाएं और संपर्क।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "पंजाब रोज़गार कार्यालय पंजीकरण 2026: PGRKAM पोर्टल और ज़िला रोज़गार ब्यूरो",
  lead: "पंजाब में नौकरी चाहने वालों का पंजीकरण पंजाब घर घर रोज़गार एवं कारोबार मिशन (PGRKAM) के पोर्टल pgrkam.com पर होता है। हर ज़िले में ज़िला रोज़गार एवं उद्यम ब्यूरो (DBEE) है, जो पुराने रोज़गार कार्यालय का काम करता है, जैसे नाम दर्ज करना, सलाह, कौशल प्रशिक्षण और नौकरी दिलाने में मदद।",
  facts: [
    ["पोर्टल", '<a href="http://www.pgrkam.com/" target="_blank" rel="noopener nofollow">pgrkam.com</a>'],
    ["ज़िला कार्यालय", "District Bureau of Employment and Enterprises (DBEE)"],
    ["विभाग", "Employment Generation, Skill Development and Training, पंजाब"],
    ["राष्ट्रीय हेल्पलाइन", "NCS: 1514 (टोल-फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> नौकरी या पंजीकरण के नाम पर पैसे मांगने वाले एजेंट को पैसे न दें। रजिस्ट्रेशन सिर्फ सरकारी पोर्टल या अपने ज़िले के DBEE में कराएं।",
  sections: [
    {
      id: "dbee",
      title: "पंजाब में रोज़गार कार्यालय: DBEE क्या है",
      intro: "पंजाब सरकार के \"घर घर रोज़गार एवं कारोबार मिशन\" के तहत हर ज़िले में <strong>District Bureau of Employment and Enterprises (DBEE)</strong> बनाया गया है। अमृतसर ज़िला प्रशासन की वेबसाइट के अनुसार जॉबसीकर के लिए इसकी सेवाएं डिजिटल और सामने आकर, दोनों तरह से हैं:",
      list: [
        "नौकरी चाहने वाले की इच्छा और योग्यता समझना और <strong>नाम दर्ज करना</strong>",
        "<strong>काउंसलिंग</strong>, फिनिशिंग स्किल और डोमेन स्किल की ट्रेनिंग",
        "नौकरी मिलने में सहायता और नौकरी के बाद की मदद",
        "स्वरोज़गार और उद्यम के लिए मार्गदर्शन, बैंकों से जुड़ाव और केंद्र व राज्य की योजनाओं में मदद",
        "सरकारी विभागों की संविदा/आउटसोर्स/नियमित वैकेंसी का प्रचार",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        '<a href="http://www.pgrkam.com/" target="_blank" rel="noopener nofollow">pgrkam.com</a> खोलें। यह पंजाब सरकार के मिशन का पोर्टल है; किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।',
        "रजिस्टर/साइन-अप में उपयोगकर्ता का प्रकार <strong>Jobseeker (नौकरी चाहने वाला)</strong> चुनें। ज़िला वेबसाइट पर जॉबसीकर रजिस्ट्रेशन का सीधा लिंक pgrkam.com/signup?type=1 दिया गया है।",
        "पोर्टल जो जानकारी मांगे, जैसे नाम, मोबाइल, पता, पढ़ाई और कौशल, वह भरें और अकाउंट बनाएं।",
        "सबमिट करने से पहले नाम और जन्मतिथि अपने 10वीं के प्रमाण पत्र से मिलाएं।",
        "प्रोफाइल पूरी करके सेव करें, ताकि वैकेंसी के लिए आपका नाम जा सके।",
      ],
      callout: { kind: "ok", html: "ऑनलाइन करने में दिक्कत हो तो अपने <strong>ज़िले के DBEE</strong> में जाएं, जो आमतौर पर मिनी सचिवालय/ज़िला प्रशासनिक कॉम्प्लेक्स में होता है। अपने ज़िले की सरकारी वेबसाइट पर DBEE का पेज देखें।" },
    },
    {
      id: "kagaz",
      title: "रजिस्ट्रेशन से पहले क्या तैयार रखें",
      list: [
        "<strong>चालू मोबाइल नंबर</strong> और ईमेल ID",
        "नाम, माता-पिता का नाम और <strong>जन्मतिथि</strong>, 10वीं के सर्टिफिकेट के अनुसार",
        "<strong>पढ़ाई का विवरण:</strong> बोर्ड/यूनिवर्सिटी, पास होने का साल, अंक; ITI/डिप्लोमा/डिग्री",
        "पंजाब का पता, आधार जैसा पहचान प्रमाण",
        "आरक्षित श्रेणी या दिव्यांगता हो तो संबंधित प्रमाण पत्र",
        "कौशल, अनुभव और पसंद की नौकरी की जानकारी",
      ],
      callout: { kind: "info", html: "पोर्टल पर कौन-कौन से कागज़ अपलोड होते हैं और आयु की शर्त क्या है, इसकी पक्की जानकारी हमें आधिकारिक पेज पर नहीं मिली। फॉर्म में जो मांगा जाए वही दें, और शंका हो तो DBEE से पूछें।" },
    },
    {
      id: "patiala",
      title: "एक ज़िले का उदाहरण: पटियाला DBEE",
      table: {
        head: ["जानकारी", "विवरण"],
        rows: [
          ["पता", "District Bureau of Employment and Enterprises, ब्लॉक D, मिनी सचिवालय, सेवा केंद्र के पास, पटियाला"],
          ["हेल्पलाइन", "9877610877"],
          ["वेबसाइट", "www.pgrkam.com"],
        ],
      },
      intro: "पटियाला ज़िला प्रशासन के पेज पर जॉबसीकर रजिस्ट्रेशन के साथ बेरोज़गार मज़दूर के पंजीकरण, नियोक्ता वैकेंसी और स्वरोज़गार आवेदन के फॉर्म भी दिए गए हैं। बाकी ज़िलों के पते और नंबर उनकी अपनी सरकारी वेबसाइट पर देखें।",
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता: क्या हमें पक्की जानकारी मिली",
      intro: "पंजाब में रोज़गार कार्यालय पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ता योजना की पुष्टि हमें किसी आधिकारिक पेज से नहीं मिली, इसलिए यहां कोई राशि नहीं दी जा रही। भत्ते के नाम पर पैसे मांगने या फॉर्म बेचने वालों से बचें। ताज़ा योजनाओं की जानकारी अपने ज़िले के DBEE से लें।",
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो अपने ज़िले के DBEE से पूछें"],
          ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें"],
          ["नाम/जन्मतिथि गलत भर दी", "10वीं के सर्टिफिकेट के साथ DBEE से सुधार का तरीका पूछें"],
          ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो DBEE जाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> PSSSB, PPSC, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "http://www.pgrkam.com/", title: "PGRKAM (पंजाब घर घर रोज़गार एवं कारोबार मिशन) पोर्टल" },
    { href: "https://patiala.nic.in/district-bureau-of-employment-and-enterprises/", title: "DBEE पटियाला (ज़िला प्रशासन)" },
    { href: "https://amritsar.nic.in/district-bureau-of-employment-enterprises/", title: "DBEE अमृतसर: कार्य और सेवाएं (ज़िला प्रशासन)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पंजाब में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "PGRKAM पोर्टल pgrkam.com पर Jobseeker के रूप में साइन-अप करके अपनी पढ़ाई, कौशल और पता भरें। चाहें तो अपने ज़िले के District Bureau of Employment and Enterprises (DBEE) में भी जा सकते हैं।" },
    { q: "DBEE और रोज़गार कार्यालय में क्या फर्क है?", a: "पंजाब में ज़िला स्तर पर रोज़गार और उद्यम की सेवाएं अब District Bureau of Employment and Enterprises (DBEE) से दी जाती हैं। यह घर घर रोज़गार मिशन के तहत बना है और पंजीकरण, काउंसलिंग, स्किल ट्रेनिंग व नौकरी में मदद करता है।" },
    { q: "क्या पंजाब में पंजीकरण की फीस है?", a: "हमें आधिकारिक पेज पर फीस की कोई बात नहीं मिली। फॉर्म भरते समय पोर्टल जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या रोज़गार कार्यालय में पंजीकरण से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। यह पंजीकरण नौकरी और ट्रेनिंग के मौकों से जोड़ता है। PSSSB, PPSC, SSC जैसी भर्तियों के लिए उनकी वेबसाइट पर अलग आवेदन करना होता है।" },
    { q: "पंजाब में बेरोज़गारी भत्ता मिलता है?", a: "इस बारे में हमें कोई पुष्ट आधिकारिक जानकारी नहीं मिली, इसलिए राशि नहीं लिखी गई है। ताज़ा स्थिति अपने ज़िले के DBEE से पूछें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/punjab-domicile-certificate.html", emoji: "🏠", title: "पंजाब निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/punjab-caste-certificate.html", emoji: "📜", title: "पंजाब जाति प्रमाण पत्र", text: "SC/BC प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "http://www.pgrkam.com/", label: "📝 pgrkam.com पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
