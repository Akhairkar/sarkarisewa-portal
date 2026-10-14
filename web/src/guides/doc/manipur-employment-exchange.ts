import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - employmentservicemanipur.nic.in (Employment Exchange, Govt of Manipur):
//   home page (exchange list, "Register Online"), /en/guidlines/ (provisional
//   web registration, confirm with originals after 4 working days but within
//   30 days, 3 year validity + 3 months grace, one exchange where you reside)
//   and /en/services/ (renewal, transfer, cancellation rules).
// - esebamanipur.mn.gov.in (e-Seba Manipur): lists "Employment Exchange
//   Registration" with documents (photo, Aadhaar, proof of residence,
//   qualification and experience certificates, birth certificate). On our check
//   it showed a scheduled-maintenance notice.
// - Kangpokpi district notice (search extract, kangpokpi.nic.in): e-Seba to be
//   the sole platform for notified online services from 11-05-2026, including
//   Employment Exchange registration and renewal; page itself not opened.
// - ncs.gov.in (toll-free helpline 1514).
// No state unemployment allowance was found, so none is described.
export const manipurEmploymentExchange: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Manipur Employment Exchange 2026: Apply & Status",
  description: "मणिपुर रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: e-Seba Manipur पर ऑनलाइन आवेदन, मूल कागज़ों से पुष्टि, 3 साल की वैधता और नवीनीकरण की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मणिपुर रोज़गार कार्यालय पंजीकरण 2026: e-Seba, कागज़ और नवीनीकरण",
  lead: "मणिपुर के Employment Exchange में नाम दर्ज कराने की ऑनलाइन सेवा e-Seba Manipur पोर्टल की सूची में है। ऑनलाइन पंजीकरण पहले अस्थायी (provisional) होता है और मूल कागज़ों के साथ अपने Employment Exchange में जाकर पुष्टि करवानी पड़ती है। पंजीकरण 3 साल वैध रहता है, ऊपर से 3 महीने की मोहलत मिलती है।",
  facts: [
    ["पोर्टल", '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">e-Seba Manipur</a>'],
    ["पुष्टि", "मूल कागज़ लेकर एक्सचेंज में, 4 कार्य दिवस के बाद लेकिन 30 दिन के अंदर"],
    ["वैधता", "3 साल + 3 महीने की मोहलत"],
    ["बेरोज़गारी भत्ता", "विभाग के पेज पर कोई योजना नहीं मिली"],
  ],
  notice: "<strong>ध्यान दें:</strong> मणिपुर Employment Exchange की गाइडलाइन के अनुसार अस्थायी पंजीकरण की पुष्टि <strong>30 दिन के अंदर</strong> न कराई तो पंजीकरण अपने-आप रद्द हो जाता है। पुष्टि के बाद ही नौकरियों के लिए नाम भेजा जाता है।",
  sections: [
    {
      id: "kya-hai",
      title: "Employment Exchange क्या करता है",
      intro: "मणिपुर Employment Exchange की वेबसाइट के अनुसार मुख्य सेवाएं ये हैं:",
      list: [
        "योग्यता के अनुसार पंजीकरण: मैट्रिक से कम, मैट्रिक/इंटरमीडिएट/ग्रेजुएट, और प्रोफेशनल/तकनीकी/पोस्ट ग्रेजुएट।",
        "दिव्यांग व्यक्तियों का पंजीकरण।",
        "रोज़गार की जानकारी, व्यावसायिक मार्गदर्शन और स्वरोज़गार योजनाओं की जानकारी।",
        "सिविल सर्विस, बैंकिंग जैसी प्रतियोगी परीक्षाओं के लिए कोचिंग क्लास की व्यवस्था।",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "e-Seba Manipur पर Employment Exchange Registration के लिए ये कागज़ दिखाए गए हैं:",
      list: [
        "<strong>पासपोर्ट साइज़ फोटो</strong>",
        "<strong>आधार</strong> (e-Seba में Citizen Registration मोबाइल और आधार सत्यापन से होता है)",
        "<strong>निवास का प्रमाण</strong>",
        "<strong>पढ़ाई और अनुभव के प्रमाण पत्र</strong>",
        "<strong>जन्म प्रमाण पत्र</strong>",
        "पुष्टि के समय ये सभी <strong>मूल कागज़</strong> और पहचान का प्रमाण साथ ले जाएं।",
      ],
    },
    {
      id: "online",
      title: "ऑनलाइन पंजीकरण कैसे करें",
      steps: [
        '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a> खोलें और मोबाइल व आधार से <strong>Citizen Registration</strong> करें।',
        "सेवा सूची में <strong>Employment Exchange Registration</strong> चुनें, फॉर्म भरें और कागज़ अपलोड करें।",
        "वेब पंजीकरण से मिला <strong>अस्थायी रजिस्ट्रेशन नंबर</strong> लिखकर रखें या प्रिंट करें।",
        "4 कार्य दिवस के बाद, पर 30 दिन के अंदर, मूल कागज़ लेकर अपने इलाके के Employment Exchange जाएं।",
        "जांच के बाद पक्का रजिस्ट्रेशन नंबर और पहचान पत्र (Identity Card) मिलता है।",
      ],
      callout: { kind: "warn", html: "कांगपोकपी ज़िले की एक सरकारी सूचना के अनुसार 11 मई 2026 से अधिसूचित ऑनलाइन सेवाएं सिर्फ e-Seba से होनी हैं, पुराने e-Services पोर्टल पर नए आवेदन बंद हैं। हमारी जांच के समय e-Seba पर रखरखाव (maintenance) का संदेश था। न खुले तो बाद में कोशिश करें या एक्सचेंज से पूछें। सरकारी पेजों पर फीस नहीं दिखी; कोई एजेंट पैसे मांगे तो एक्सचेंज से पूछें।" },
    },
    {
      id: "offline",
      title: "Employment Exchange जाकर पंजीकरण",
      intro: "मणिपुर में ज़िला Employment Exchange (इंफाल वेस्ट, इंफाल ईस्ट, बिष्णुपुर, थौबल, सेनापति, तामेंगलोंग, चंदेल, चुराचांदपुर, उखरुल) हैं। इसके अलावा जिरिबाम, कांगपोकपी, मोरेह, सुगनु और तामेई में Town Employment Exchange और साइकुल में एक Employment Information & Assistance Bureau है। नाम सिर्फ <strong>एक</strong> एक्सचेंज में दर्ज होता है, उसी में जहां आप सामान्यतः रहते हैं।",
      list: [
        '<a href="https://employmentservicemanipur.nic.in/" target="_blank" rel="noopener nofollow">Employment Exchange, मणिपुर की वेबसाइट</a> पर गाइडलाइन, डाउनलोड फॉर्म और संपर्क देखें।',
        "डाक से पंजीकरण की सुविधा भी वेबसाइट पर बताई गई है: एक्सचेंज कार्ड भेजता है, भरकर वापस भेजें।",
      ],
    },
    {
      id: "renewal",
      title: "नवीनीकरण और पंजीकरण रद्द होना",
      list: [
        "<strong>वैधता:</strong> इंडेक्स कार्ड की वैधता 3 साल है। नवीनीकरण की तारीख वाले महीने और उसके बाद के 2 महीनों में किसी भी कार्य दिवस पर नवीनीकरण हो जाता है।",
        "नवीनीकरण खुद, अधिकृत व्यक्ति या प्रीपेड डाक से कराया जा सकता है।",
        "<strong>रद्द:</strong> 3 साल 3 महीने में नवीनीकरण न हो तो पंजीकरण लैप्स हो जाता है। कार्ड 2 महीने \"Dead Register\" में रहता है, उसके बाद पंजीकरण रद्द।",
        "जानकारी जैसे योग्यता या अनुभव जुड़वाने पर, अगर सुझाई गई नौकरी की श्रेणी बदल जाए, तो उसे नया पंजीकरण माना जाता है।",
        "दूसरे इलाके में जाने पर कार्ड नए एक्सचेंज में ट्रांसफर होता है और पुरानी वरिष्ठता साथ रहती है।",
      ],
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "Employment Exchange की वेबसाइट पर मणिपुर में किसी बेरोज़गारी भत्ता योजना का ज़िक्र हमें नहीं मिला, इसलिए हम कोई राशि नहीं लिख रहे। स्वरोज़गार योजनाओं की जानकारी एक्सचेंज के Self Employment Promotion Cell (इंफाल) से ले सकते हैं।",
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://esebamanipur.mn.gov.in/", title: "e-Seba Manipur (ऑनलाइन सेवाएं)" },
    { href: "https://employmentservicemanipur.nic.in/", title: "Employment Exchange, Government of Manipur" },
    { href: "https://employmentservicemanipur.nic.in/en/guidlines/", title: "पंजीकरण गाइडलाइन (Employment Exchange, मणिपुर)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "मणिपुर में रोज़गार कार्यालय में ऑनलाइन नाम कैसे लिखवाएं?", a: "e-Seba Manipur पर Citizen Registration करके Employment Exchange Registration सेवा चुनें। फिर अस्थायी नंबर के साथ मूल कागज़ लेकर अपने एक्सचेंज में पुष्टि करवाएं।" },
    { q: "पुष्टि न कराने पर क्या होगा?", a: "गाइडलाइन के अनुसार 4 कार्य दिवस के बाद लेकिन 30 दिन के अंदर पुष्टि न कराई तो अस्थायी पंजीकरण अपने-आप रद्द हो जाता है।" },
    { q: "पंजीकरण कितने समय चलता है?", a: "3 साल, ऊपर से 3 महीने की मोहलत। इसके बाद नवीनीकरण न हो तो पंजीकरण लैप्स हो जाता है।" },
    { q: "क्या दो एक्सचेंज में नाम लिखवा सकते हैं?", a: "नहीं। गाइडलाइन के अनुसार नाम सिर्फ एक Employment Exchange में दर्ज होता है, उसमें जहां आप सामान्यतः रहते हैं।" },
    { q: "क्या मणिपुर में बेरोज़गारी भत्ता मिलता है?", a: "हमें विभाग की वेबसाइट पर ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है। अपने एक्सचेंज से ताज़ा स्थिति पूछ लें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/manipur-caste-certificate.html", emoji: "📜", title: "मणिपुर जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/manipur-domicile-certificate.html", emoji: "🏠", title: "मणिपुर निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://esebamanipur.mn.gov.in/", label: "📝 e-Seba Manipur" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
