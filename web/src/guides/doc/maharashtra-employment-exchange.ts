import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - mahaswayam.gov.in (Skills, Employment, Entrepreneurship and Innovation
//   Department, Maharashtra): "Employment Exchange" menu linking
//   rojgar.mahaswayam.gov.in; banner for CMYKPY registration and vacancy booking.
// - chanda.nic.in/?p=2870 (Employment Exchange Registration, Chandrapur):
//   points to the Mahaswayam register page, MSSDS, support e-mail on
//   ese.maharashtra.gov.in.
// - pune.gov.in/?p=32007 and jalgaon.gov.in/?p=33677 (Mukhyamantri Yuva Karya
//   Prashikshan Yojana): eligibility 18-35, 12th/ITI/diploma/degree, Maharashtra
//   resident, Aadhaar-registered, Aadhaar-linked bank account, 6-month training,
//   monthly DBT stipend by qualification, register as job seeker on
//   rojgar.mahaswayam.gov.in.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on an official page we could open): registration
// fee, minimum age and documents for plain exchange registration, validity and
// renewal period, stipend amounts, whether CMYKPY intake is open right now, a
// state helpline number.
export const maharashtraEmploymentExchange: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Maharashtra Employment Exchange 2026",
  description: "महाराष्ट्र रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: महास्वयं रोज़गार पोर्टल (rojgar.mahaswayam.gov.in) पर जॉबसीकर रजिस्ट्रेशन और मुख्यमंत्री युवा कार्य प्रशिक्षण योजना।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "महाराष्ट्र रोज़गार कार्यालय पंजीकरण 2026: महास्वयं रोज़गार पोर्टल पर रजिस्ट्रेशन",
  lead: "महाराष्ट्र में रोज़गार कार्यालय (Employment Exchange) की सेवाएं कौशल्य, रोज़गार, उद्योजकता व नाविन्यता विभाग के महास्वयं रोज़गार पोर्टल rojgar.mahaswayam.gov.in पर मिलती हैं। नौकरी चाहने वाले को वहीं जॉबसीकर के रूप में रजिस्ट्रेशन करना होता है। मुख्यमंत्री युवा कार्य प्रशिक्षण योजना में भी इसी पोर्टल पर पंजीकरण ज़रूरी बताया गया है।",
  facts: [
    ["पोर्टल", '<a href="https://rojgar.mahaswayam.gov.in/" target="_blank" rel="noopener nofollow">rojgar.mahaswayam.gov.in</a>'],
    ["विभाग", "कौशल्य, रोज़गार, उद्योजकता व नाविन्यता विभाग"],
    ["रजिस्ट्रेशन", "ऑनलाइन, जॉबसीकर के रूप में"],
    ["राष्ट्रीय हेल्पलाइन", "NCS: 1514 (टोल-फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल पर ही जानकारी भरें। \"ट्रेनिंग या नौकरी पक्की\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "portal",
      title: "महास्वयं पोर्टल क्या है",
      intro: "<a href=\"https://mahaswayam.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mahaswayam.gov.in</a> महाराष्ट्र सरकार के कौशल्य, रोज़गार, उद्योजकता व नाविन्यता विभाग की वेबसाइट है। इसके मेन्यू में अल्पकालीन प्रशिक्षण, ITI, <strong>Employment Exchange</strong>, स्टार्ट-अप और ऋण के विकल्प हैं। Employment Exchange का विकल्प रोज़गार पोर्टल <a href=\"https://rojgar.mahaswayam.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rojgar.mahaswayam.gov.in</a> पर ले जाता है, जहां नौकरी चाहने वाले और नौकरी देने वाले, दोनों पंजीकरण करते हैं।",
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        '<a href="https://rojgar.mahaswayam.gov.in/" target="_blank" rel="noopener nofollow">rojgar.mahaswayam.gov.in</a> खोलें। किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।',
        "<strong>Job Seeker</strong> के रूप में Register चुनें।",
        "पोर्टल जो जानकारी मांगे, जैसे आधार, मोबाइल और अन्य विवरण, भरें और अकाउंट बनाएं।",
        "अपनी पढ़ाई, कौशल और अनुभव की जानकारी जोड़कर प्रोफाइल पूरी करें।",
        "रजिस्ट्रेशन के बाद लॉगिन करके वैकेंसी देखें और आवेदन करें।",
      ],
      callout: { kind: "info", html: "पंजीकरण की न्यूनतम उम्र, फीस, वैधता और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं मिली, इसलिए यहां नहीं लिखी। पोर्टल की FAQ या अपने ज़िले के <strong>कौशल्य विकास, रोज़गार व उद्योजकता मार्गदर्शन केंद्र</strong> से पूछें। चंद्रपुर ज़िले की साइट पर सहायता ईमेल de.support@ese.maharashtra.gov.in दिया गया है।" },
    },
    {
      id: "cmykpy",
      title: "मुख्यमंत्री युवा कार्य प्रशिक्षण योजना",
      intro: "पुणे और जलगांव ज़िला प्रशासन की वेबसाइटों पर दी गई योजना की जानकारी के अनुसार:",
      list: [
        "<strong>क्या मिलता है:</strong> उद्योगों/संस्थानों में <strong>6 महीने का कार्य प्रशिक्षण</strong> और पढ़ाई के अनुसार <strong>मासिक वजीफा (stipend)</strong>, जो DBT से बैंक खाते में आता है।",
        "<strong>कौन आवेदन कर सकता है:</strong> 18 से 35 साल, महाराष्ट्र का निवासी, कम से कम 12वीं/ITI/डिप्लोमा/ग्रेजुएट/पोस्ट-ग्रेजुएट।",
        "<strong>शर्तें:</strong> आधार से पंजीकरण और बैंक खाता आधार से जुड़ा होना चाहिए।",
        "<strong>आवेदन:</strong> rojgar.mahaswayam.gov.in पर जॉबसीकर के रूप में पंजीकरण करें।",
        "वजीफे की राशि और नए बैच खुले हैं या नहीं, यह पोर्टल पर ही देखें।",
      ],
      callout: { kind: "warn", html: "यह योजना <strong>बेरोज़गारी भत्ता नहीं</strong> है। यह प्रशिक्षण के दौरान वजीफा है।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो अपने ज़िले के रोज़गार मार्गदर्शन केंद्र से पूछें"],
          ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें"],
          ["आधार या बैंक जुड़ा नहीं", "बैंक में जाकर खाता आधार से जुड़वाएं; योजना में DBT के लिए यह ज़रूरी है"],
          ["नाम/जन्मतिथि गलत भर दी", "प्रमाण पत्र के साथ अपने ज़िले के केंद्र से सुधार का तरीका पूछें"],
          ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला केंद्र जाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> MPSC, पुलिस भर्ती, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://rojgar.mahaswayam.gov.in/", title: "महास्वयं रोज़गार पोर्टल (महाराष्ट्र सरकार)" },
    { href: "https://mahaswayam.gov.in/", title: "महास्वयं: कौशल्य, रोज़गार, उद्योजकता व नाविन्यता विभाग" },
    { href: "https://pune.gov.in/?p=32007", title: "मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (ज़िला पुणे)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "महाराष्ट्र में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "rojgar.mahaswayam.gov.in पर Job Seeker के रूप में रजिस्टर करें, अपनी पढ़ाई, कौशल और अनुभव भरें और प्रोफाइल पूरी करें।" },
    { q: "क्या महाराष्ट्र में बेरोज़गारी भत्ता मिलता है?", a: "रोज़गार पंजीकरण पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली। मुख्यमंत्री युवा कार्य प्रशिक्षण योजना में 6 महीने की ट्रेनिंग के दौरान वजीफा मिलता है, जो भत्ते से अलग है।" },
    { q: "मुख्यमंत्री युवा कार्य प्रशिक्षण योजना के लिए कौन पात्र है?", a: "ज़िला प्रशासन की साइटों के अनुसार 18 से 35 साल का महाराष्ट्र निवासी, जिसकी कम से कम 12वीं/ITI/डिप्लोमा/डिग्री हो, आधार से पंजीकरण हो और बैंक खाता आधार से जुड़ा हो।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें कोई आधिकारिक जानकारी नहीं मिली। पोर्टल जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी और प्रशिक्षण से जुड़ते हैं। MPSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/maharashtra-domicile-certificate.html", emoji: "🏠", title: "महाराष्ट्र डोमिसाइल प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/maharashtra-caste-certificate.html", emoji: "📜", title: "महाराष्ट्र जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://rojgar.mahaswayam.gov.in/", label: "📝 महास्वयं पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
