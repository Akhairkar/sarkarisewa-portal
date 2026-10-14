import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; employment.kerala.gov.in is not reachable from
// our checker, so facts come from the Kannur district website, which links it):
// - kannur.nic.in/district-employment-exchange/ (Government of Kerala, district
//   page of the Employment Department): registration age 14+, no upper age
//   limit, registration in the exchange of your residence, no fee, online
//   registration free since 8.3.2017 with verification at the exchange within
//   60 days, 3-year validity, 2 months grace (SC/ST 1 year), online renewal,
//   re-registration loses seniority, additional qualification, transfer,
//   Employment (Compulsory Notification of Vacancies) Act 1959, unemployment
//   allowance run through local bodies, KESRU, Saranya, Kaivalya.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (page is undated / not confirmable as current): the unemployment
// allowance amount and income/age conditions, loan and subsidy figures,
// exact portal menu names.
export const keralaEmploymentExchange: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Kerala Employment Exchange 2026: Apply & Status",
  description: "केरल रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: employment.kerala.gov.in पर ऑनलाइन रजिस्ट्रेशन, 3 साल की वैधता, नवीनीकरण, बेरोज़गारी भत्ता और स्वरोज़गार योजनाएं।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "केरल रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन, नवीनीकरण और बेरोज़गारी भत्ता",
  lead: "केरल में रोज़गार कार्यालय (Employment Exchange) का पंजीकरण रोज़गार विभाग की वेबसाइट employment.kerala.gov.in के ज़रिए ऑनलाइन हो सकता है। 14 साल या उससे ज़्यादा उम्र का कोई भी व्यक्ति नाम दर्ज करा सकता है, ऊपरी उम्र की सीमा नहीं है। पंजीकरण की कोई फीस नहीं है, पर मूल प्रमाण पत्रों के साथ रोज़गार कार्यालय में सत्यापन कराना होता है।",
  facts: [
    ["पोर्टल", '<a href="https://www.employment.kerala.gov.in/" target="_blank" rel="noopener nofollow">employment.kerala.gov.in</a>'],
    ["फीस", "कोई फीस नहीं"],
    ["उम्र", "14 साल या अधिक; ऊपरी सीमा नहीं"],
    ["वैधता", "3 साल, फिर नवीनीकरण"],
  ],
  notice: "<strong>ध्यान दें:</strong> पंजीकरण मुफ्त है। रजिस्ट्रेशन या नौकरी के नाम पर पैसे मांगने वाले एजेंट को पैसे न दें; सीधे अपने रोज़गार कार्यालय से बात करें।",
  sections: [
    {
      id: "niyam",
      title: "पंजीकरण के बुनियादी नियम",
      intro: "केरल रोज़गार विभाग के अनुसार (ज़िला सरकारी वेबसाइट पर दी गई जानकारी):",
      list: [
        "<strong>उम्र:</strong> 14 साल पूरे हो चुके हों। अधिकतम उम्र की कोई सीमा तय नहीं है।",
        "<strong>कौन सा कार्यालय:</strong> आप उसी रोज़गार कार्यालय में नाम दर्ज करा सकते हैं जिसके क्षेत्र में आप आम तौर पर रहते हैं।",
        "<strong>दोहरा पंजीकरण अपराध है:</strong> दो जगह नाम दर्ज करने पर पंजीकरण रद्द हो सकता है।",
        "<strong>फीस:</strong> पंजीकरण के लिए कोई शुल्क नहीं लिया जाता।",
        "<strong>Professional and Executive Exchange:</strong> प्रोफेशनल और एग्ज़िक्यूटिव स्तर की योग्यता वाले लोग इन विशेष कार्यालयों में सीधे नाम दर्ज करा सकते हैं।",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन और सत्यापन",
      steps: [
        '<a href="https://www.employment.kerala.gov.in/" target="_blank" rel="noopener nofollow">employment.kerala.gov.in</a> खोलें (रोज़गार विभाग की वेबसाइट)। किसी दूसरी मिलती-जुलती साइट पर जानकारी न भरें।',
        "नौकरी चाहने वाले के रूप में नया रजिस्ट्रेशन चुनें और अपनी पहचान, पता, पढ़ाई और कौशल की जानकारी भरें।",
        "सबमिट करने से पहले नाम, जन्मतिथि और योग्यता प्रमाण पत्रों से मिलाएं।",
        "ऑनलाइन रजिस्ट्रेशन के बाद <strong>60 दिन के अंदर</strong> अपने रोज़गार कार्यालय में सभी मूल प्रमाण पत्र लेकर सत्यापन कराएं।",
        "सत्यापन के बाद आपको रोज़गार <strong>पहचान पत्र (Identity Card)</strong> दिया जाता है। उसे संभालकर रखें।",
      ],
      callout: { kind: "warn", html: "विभाग के पेज के अनुसार ऑनलाइन रजिस्ट्रेशन के बाद मूल कागज़ों के साथ 60 दिन में कार्यालय जाना ज़रूरी है। समय पर न जाने पर क्या होगा, यह कार्यालय से पूछ लें।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ साथ रखें",
      list: [
        "<strong>सभी मूल प्रमाण पत्र:</strong> SSLC/10वीं, आगे की पढ़ाई, ITI/डिप्लोमा/डिग्री",
        "पहचान और पते का प्रमाण (आधार जैसा)",
        "SC/ST या अन्य आरक्षित श्रेणी हैं तो <strong>श्रेणी का प्रमाण पत्र</strong>",
        "दिव्यांग हैं तो दिव्यांगता प्रमाण पत्र",
        "चालू मोबाइल नंबर और ईमेल",
      ],
    },
    {
      id: "naveenikaran",
      title: "नवीनीकरण (Renewal) कैसे और कब",
      list: [
        "<strong>वैधता 3 साल:</strong> पंजीकरण के 3 साल बाद नवीनीकरण कराना होता है। नवीनीकरण की देय तारीख वही महीना है जिसमें पहली बार पंजीकरण हुआ।",
        "<strong>छूट की अवधि:</strong> देय तारीख के बाद 2 महीने। SC/ST उम्मीदवारों को 1 साल।",
        "<strong>तरीका:</strong> खुद जाकर, किसी प्रतिनिधि के हाथ पहचान पत्र भेजकर, या ऑनलाइन सेवा से। विभाग के पेज पर डाक से नवीनीकरण का भी ज़िक्र है।",
        "<strong>नवीनीकरण छूट गया:</strong> पंजीकरण समाप्त हो जाता है। दोबारा पंजीकरण करना पड़ता है और पुरानी वरिष्ठता (seniority) चली जाती है। पुराना पहचान पत्र जमा करके नया मिलता है।",
        "<strong>विशेष नवीनीकरण:</strong> सरकारी आदेश के तहत कभी-कभी छूटे हुए लोगों के लिए विशेष नवीनीकरण खुलता है। ताज़ा स्थिति रोज़गार कार्यालय से पूछें।",
      ],
    },
    {
      id: "badlav",
      title: "योग्यता जोड़ना और पंजीकरण ट्रांसफर",
      list: [
        "<strong>नई योग्यता:</strong> मूल प्रमाण पत्र दिखाकर कभी भी जोड़ी जा सकती है, पुरानी योग्यता की वरिष्ठता नहीं जाती।",
        "<strong>केरल के अंदर ट्रांसफर:</strong> रहने की जगह बदलने पर पहचान पत्र और नए पते के प्रमाण के साथ उस कार्यालय के Employment Officer को कारण बताकर आवेदन दें, जहां पंजीकरण ट्रांसफर कराना है।",
        "<strong>केरल के बाहर ट्रांसफर:</strong> सिर्फ आवेदन और पहचान पत्र जमा करना काफ़ी बताया गया है।",
      ],
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता और स्वरोज़गार योजनाएं",
      intro: "रोज़गार विभाग की ज़िला वेबसाइट पर ये योजनाएं दर्ज हैं। राशि और शर्तें समय-समय पर बदलती हैं; आवेदन से पहले स्थानीय निकाय या रोज़गार कार्यालय से ताज़ा नियम पूछें।",
      list: [
        "<strong>बेरोज़गारी भत्ता (Unemployment Allowance):</strong> 1982 के सरकारी आदेश से शुरू हुई योजना। राष्ट्रीय रोज़गार सेवा (केरल) के पंजीकृत बेरोज़गारों को स्थानीय निकाय (पंचायत/नगरपालिका) के ज़रिए दिया जाता है। आवेदन स्थानीय निकाय में दिया जाता है। राशि और शर्तों के पुराने आंकड़े पेज पर हैं, इसलिए यहां नहीं लिख रहे।",
        "<strong>KESRU:</strong> रोज़गार कार्यालय में पंजीकृत साक्षर लोगों के लिए स्वरोज़गार योजना (बैंक ऋण और सब्सिडी, ज़िला समिति की मंज़ूरी से)।",
        "<strong>Saranya:</strong> केरल सरकार की स्वरोज़गार योजना; आवेदन ज़िला समिति (ज़िला कलेक्टर की अध्यक्षता) तक जाते हैं।",
        "<strong>Kaivalya:</strong> पंजीकृत दिव्यांग बेरोज़गारों के लिए; विभाग के अनुसार आयु 21 से 55 साल और वैध पंजीकरण ज़रूरी।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["नवीनीकरण की तारीख निकल गई", "पहले अपने रोज़गार कार्यालय से पूछें कि छूट की अवधि या विशेष नवीनीकरण बचा है या नहीं"],
          ["पहचान पत्र खो गया", "रोज़गार कार्यालय जाकर पहचान के प्रमाण के साथ बताएं"],
          ["नाम/जन्मतिथि गलत भर दी", "मूल प्रमाण पत्र लेकर रोज़गार कार्यालय में सुधार का अनुरोध दें"],
          ["पते की जगह बदल गई", "पंजीकरण नई जगह के कार्यालय में ट्रांसफर कराएं"],
          ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो कार्यालय जाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        "<strong>सरकारी भर्तियां:</strong> केरल की ज़्यादातर सरकारी भर्तियां Kerala PSC करता है, आवेदन उसकी अपनी वेबसाइट पर होता है।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://www.employment.kerala.gov.in/", title: "रोज़गार विभाग, केरल (पंजीकरण पोर्टल)" },
    { href: "https://kannur.nic.in/district-employment-exchange/", title: "District Employment Exchange (ज़िला कन्नूर)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "केरल में रोज़गार कार्यालय में नाम कैसे दर्ज करें?", a: "employment.kerala.gov.in पर ऑनलाइन रजिस्ट्रेशन करें और 60 दिन के अंदर मूल प्रमाण पत्र लेकर अपने रोज़गार कार्यालय में सत्यापन कराएं। इसके बाद पहचान पत्र मिलता है।" },
    { q: "क्या केरल में रोज़गार कार्यालय पंजीकरण की फीस है?", a: "नहीं। विभाग के अनुसार पंजीकरण के लिए कोई फीस नहीं ली जाती और ऑनलाइन पंजीकरण मुफ्त है।" },
    { q: "पंजीकरण की वैधता कितनी है और नवीनीकरण कब कराएं?", a: "वैधता 3 साल है। देय तारीख के बाद 2 महीने की छूट है (SC/ST को 1 साल)। चूक गए तो दोबारा पंजीकरण करना पड़ता है और पुरानी वरिष्ठता चली जाती है।" },
    { q: "क्या केरल में बेरोज़गारी भत्ता मिलता है?", a: "रोज़गार विभाग की वेबसाइट पर बेरोज़गारी भत्ता योजना दर्ज है, जो स्थानीय निकाय के ज़रिए दिया जाता है। राशि और शर्तों की ताज़ा जानकारी अपनी पंचायत/नगरपालिका या रोज़गार कार्यालय से लें।" },
    { q: "पंजीकरण में उम्र की सीमा क्या है?", a: "न्यूनतम 14 साल। अधिकतम उम्र की कोई सीमा तय नहीं है।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। वैकेंसी आने पर वरिष्ठता, योग्यता और आरक्षण के हिसाब से नाम भेजे जाते हैं। Kerala PSC की भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल निवास प्रमाण पत्र", text: "नेटिविटी/निवास के कागज़" },
    { href: "/states/kerala-caste-certificate.html", emoji: "📜", title: "केरल जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://www.employment.kerala.gov.in/", label: "📝 employment.kerala.gov.in" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
