import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Unified Services Portal, Government of Nagaland (services.nagaland.gov.in)
//   /services directory: 53 services (10 internal, 43 external). Certificate
//   services listed: Scheduled Tribe, Backward Tribe, Indigenous Inhabitant
//   (re-issue), Domicile, Birth, Death. No income certificate service is listed
//   on 13 Oct 2026 (all service pages /services/1-68 checked).
// - Search-result extract of nagaland.gov.in/eservices (page itself returned
//   404 to our checker): earlier listed "Online Income Certificate
//   Registration" pointing to services.nagaland.gov.in.
// Left out (not confirmable on an official page we could open): issuing
// officer, document list, fee, time limit, validity. The old page description
// said "e-District Nagaland, fee ₹25"; we could not confirm either, so the
// description was rewritten.
export const nagalandIncomeCertificate: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Nagaland Income Certificate 2026: Apply Online",
  description: "नागालैंड आय प्रमाण पत्र 2026: अभी ऑनलाइन सेवा कहां है, ज़िला प्रशासन (DC कार्यालय) से कैसे बनवाएं, कौन से कागज़ साथ रखें और EWS/ST प्रमाण पत्र से फर्क।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "नागालैंड आय प्रमाण पत्र 2026: कहां आवेदन करें, क्या कागज़ लगेंगे",
  lead: "नागालैंड सरकार के नए Unified Services Portal (services.nagaland.gov.in) पर 13 अक्टूबर 2026 को आय प्रमाण पत्र की कोई सेवा सूची में नहीं थी; वहां ST, Backward Tribe, Indigenous Inhabitant, Domicile, जन्म और मृत्यु प्रमाण पत्र की सेवाएं हैं। इसलिए आय प्रमाण पत्र के लिए अपने ज़िले के उपायुक्त (DC) कार्यालय या अपने प्रशासनिक सर्कल के कार्यालय में पूछकर आवेदन करें, और पोर्टल पर सेवा जुड़ने पर ऑनलाइन आवेदन करें।",
  facts: [
    ["राज्य पोर्टल", '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a>'],
    ["ऑनलाइन सेवा", "अक्टूबर 2026 में सूची में नहीं"],
    ["कहां पूछें", "ज़िला उपायुक्त (DC) / सर्कल कार्यालय"],
    ["फीस / समय", "आधिकारिक रूप से प्रकाशित नहीं मिली"],
  ],
  notice: "<strong>सावधान:</strong> कई वेबसाइटें नागालैंड आय प्रमाण पत्र के लिए \"e-District\" लिंक और तय फीस बताती हैं। हमें राज्य के मौजूदा आधिकारिक पोर्टल पर यह सेवा नहीं मिली। किसी एजेंट को पैसे देने से पहले DC कार्यालय से सही प्रक्रिया पूछें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में यह मांगा जाता है।",
      callout: { kind: "info", html: "ST/Backward Tribe आरक्षण के लिए आय प्रमाण पत्र नहीं, ST या BT प्रमाण पत्र लगता है: <a href=\"/states/nagaland-caste-certificate.html\">नागालैंड जाति (ST/BT) प्रमाण पत्र गाइड</a>। EWS आरक्षण के लिए आय और संपत्ति वाला अलग EWS प्रमाण पत्र होता है।" },
    },
    {
      id: "kahan",
      title: "कहां आवेदन करें",
      steps: [
        '<a href="https://services.nagaland.gov.in/services" target="_blank" rel="noopener nofollow">services.nagaland.gov.in/services</a> पर सर्च में "Income" लिखकर देखें कि आय प्रमाण पत्र की सेवा जुड़ी है या नहीं। जुड़ी हो तो ईमेल या DigiLocker/MeriPehchaan से रजिस्टर करके ऑनलाइन आवेदन करें।',
        "सेवा न दिखे तो अपने <strong>ज़िले के उपायुक्त (DC) कार्यालय</strong> या अपने प्रशासनिक सर्कल के कार्यालय में जाएं और आय प्रमाण पत्र का फॉर्म, फीस और समय पूछें।",
        "फॉर्म भरकर कागज़ों के साथ जमा करें और <strong>रसीद/आवेदन संख्या</strong> ज़रूर लें।",
        "जांच के बाद प्रमाण पत्र उसी कार्यालय से मिलता है; मिलते ही नाम और आय की राशि जांच लें।",
      ],
    },
    {
      id: "kagaz",
      title: "क्या-क्या साथ रखें",
      intro: "आधिकारिक कागज़-सूची हमें नहीं मिली। कार्यालय जो मांगे वही दें; आम तौर पर ये तैयार रखें:",
      list: [
        "<strong>फोटो</strong> और <strong>पहचान पत्र</strong> (आधार / वोटर ID)",
        "<strong>निवास का सबूत</strong> (राशन कार्ड, वोटर ID या गांव परिषद/वार्ड का प्रमाण)",
        "<strong>आय का सबूत</strong>: नौकरी हो तो वेतन पर्ची, पेंशन का कागज़, ITR, या आय का शपथ-पत्र/स्व-घोषणा",
        "गांव परिषद (Village Council) या वार्ड का प्रमाण पत्र, अगर कार्यालय मांगे",
      ],
      callout: { kind: "warn", html: "आय की घोषणा सच-सच करें; गलत जानकारी पर प्रमाण पत्र रद्द हो सकता है। स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "validity",
      title: "वैधता और फीस",
      intro: "नागालैंड में आय प्रमाण पत्र की फीस, समय सीमा और वैधता किसी आधिकारिक पेज पर प्रकाशित नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। छात्रवृत्ति और योजनाएं आम तौर पर हाल का प्रमाण पत्र मांगती हैं; योजना के नियम में देखें कि कितना पुराना चलेगा।",
    },
    {
      id: "help",
      title: "मदद",
      intro: "ज़िले के DC कार्यालय सबसे भरोसेमंद जानकारी देंगे। राज्य पोर्टल से जुड़ी दिक्कत के लिए पोर्टल पर दिया ईमेल <strong>support@usp.gov.in</strong> इस्तेमाल करें। प्रमाण पत्र फोन में रखना हो तो: <a href=\"/digilocker/income-certificate.html\">DigiLocker में आय प्रमाण पत्र</a>।",
    },
  ],
  official: [
    { href: "https://services.nagaland.gov.in/", title: "Unified Services Portal, नागालैंड सरकार" },
    { href: "https://services.nagaland.gov.in/services", title: "Unified Services Portal: सभी सेवाओं की सूची" },
    { href: "https://nagaland.gov.in/", title: "नागालैंड सरकार की वेबसाइट" },
  ],
  faq: [
    { q: "नागालैंड में आय प्रमाण पत्र ऑनलाइन बनता है?", a: "13 अक्टूबर 2026 को राज्य के Unified Services Portal की सेवा सूची में आय प्रमाण पत्र नहीं था। पोर्टल पर \"Income\" खोजकर देखें; सेवा न हो तो ज़िले के DC कार्यालय में आवेदन करें।" },
    { q: "नागालैंड आय प्रमाण पत्र की फीस कितनी है?", a: "हमें फीस किसी आधिकारिक पेज पर नहीं मिली। DC कार्यालय में फॉर्म लेते समय फीस पूछें और रसीद लें।" },
    { q: "आय प्रमाण पत्र के लिए क्या कागज़ लगते हैं?", a: "आम तौर पर फोटो, पहचान पत्र, निवास का सबूत और आय का सबूत (वेतन पर्ची, पेंशन कागज़, ITR या आय का शपथ-पत्र)। सही सूची DC कार्यालय से पूछें।" },
    { q: "क्या ST आरक्षण के लिए आय प्रमाण पत्र चलेगा?", a: "नहीं। ST आरक्षण के लिए ST प्रमाण पत्र चाहिए, जो Unified Services Portal पर ₹100 शुल्क के साथ बनता है और उसके लिए डिजिटल Indigenous Inhabitant Certificate ज़रूरी है।" },
  ],
  related: [
    { href: "/states/nagaland-caste-certificate.html", emoji: "📜", title: "नागालैंड जाति (ST/BT) प्रमाण पत्र", text: "Unified Services Portal पर" },
    { href: "/states/nagaland-domicile-certificate.html", emoji: "🏠", title: "नागालैंड डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://services.nagaland.gov.in/services", label: "🔎 राज्य पोर्टल की सेवाएं देखें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
