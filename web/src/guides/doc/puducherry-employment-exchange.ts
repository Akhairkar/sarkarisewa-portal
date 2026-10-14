import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - labour.py.gov.in/sites/default/files/lrdeodbeeuser-manualregnren.pdf
//   (Labour Dept, Govt of Puducherry, BRAP 2022 supporting document): online
//   registration (candidate registration, Save as Draft, Register,
//   acknowledgement, physical verification within 30 days, identity card) and
//   online renewal (registration number as username, date of birth ddmmyyyy as
//   password, "Next Renewal Due", print certificate). Portal URL given there:
//   ee1.py.gov.in:8443/ee1 (not reachable from our checker).
// - Search extract of the Online Registration page and services.india.gov.in
//   listing (age above 14, Puducherry residents, original certificates,
//   exchanges at Puducherry, Karaikal, Mahe and Yanam, Aadhaar and phone number
//   needed): not opened directly, so treated with that caveat.
// - labour.py.gov.in (Employment Exchange sits under the Labour Department).
// - ncs.gov.in (toll-free helpline 1514).
// Renewal period and unemployment allowance were not verified, so are left out.
export const puducherryEmploymentExchange: DocGuide = {
  state: { slug: "puducherry", hi: "पुदुचेरी" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Puducherry Employment Exchange 2026: Apply & Status",
  description: "पुदुचेरी रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: श्रम विभाग के पोर्टल पर ऑनलाइन रजिस्ट्रेशन, 30 दिन में मूल कागज़ों से सत्यापन, ऑनलाइन नवीनीकरण और पहचान पत्र।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "पुदुचेरी रोज़गार कार्यालय पंजीकरण 2026: ऑनलाइन रजिस्ट्रेशन, सत्यापन और नवीनीकरण",
  lead: "पुदुचेरी में Employment Exchange श्रम विभाग (Labour Department) के अंतर्गत है। ऑनलाइन पंजीकरण के बाद आपको 30 दिन के अंदर मूल कागज़ लेकर अपने एक्सचेंज में जाकर सत्यापन करवाना होता है, तब पहचान पत्र (Identity Card) बनता है। नवीनीकरण भी ऑनलाइन हो सकता है।",
  facts: [
    ["विभाग", "श्रम विभाग, पुदुचेरी सरकार"],
    ["सत्यापन", "ऑनलाइन पंजीकरण के 30 दिन के अंदर, मूल कागज़ों के साथ"],
    ["एक्सचेंज", "पुदुचेरी, कराईकल, माहे और यानम"],
    ["नवीनीकरण", "ऑनलाइन: रजिस्ट्रेशन नंबर और जन्मतिथि से लॉगिन"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी दस्तावेज़ के अनुसार ऑनलाइन पंजीकरण के बाद 30 दिन के अंदर सत्यापन न कराने पर पंजीकरण अपने-आप रद्द हो सकता है। एक्सचेंज की ताज़ा समय-सीमा अपने एक्सचेंज से पूछ लें।",
  sections: [
    {
      id: "kya-hai",
      title: "पुदुचेरी में Employment Exchange की ऑनलाइन सेवाएं",
      intro: "श्रम विभाग के दस्तावेज़ (Business Reforms Action Plan 2022) में ऑनलाइन व्यवस्था ये बताई गई है:",
      list: [
        "<strong>ऑनलाइन पंजीकरण:</strong> आवेदन जमा करना, पावती (acknowledgement) डाउनलोड करना, 30 दिन में भौतिक सत्यापन और फिर पहचान पत्र।",
        "<strong>ऑनलाइन नवीनीकरण:</strong> रजिस्ट्रेशन नंबर यूज़रनेम और जन्मतिथि (ddmmyyyy) पासवर्ड। रिन्यू करने के बाद पहचान पत्र डाउनलोड होता है।",
        "नियोक्ताओं की वैकेंसी, भेजे गए उम्मीदवारों की संख्या और वरिष्ठता तारीख देखने की व्यवस्था।",
      ],
      callout: { kind: "info", html: "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।" },
    },
    {
      id: "patrata",
      title: "कौन पंजीकरण करा सकता है",
      intro: "पुदुचेरी सरकार की पंजीकरण सेवा के विवरण (खोज परिणाम का अंश) के अनुसार:",
      list: [
        "<strong>14 साल से ऊपर</strong> की उम्र।",
        "पुदुचेरी (राज्य क्षेत्र) के निवासी; पंजीकरण अपने एक्सचेंज के इलाके में होता है।",
        "मूल शैक्षणिक प्रमाण पत्र और निवास का प्रमाण।",
        "फोन/मोबाइल नंबर और आधार कार्ड।",
      ],
    },
    {
      id: "online",
      title: "ऑनलाइन पंजीकरण कैसे करें",
      steps: [
        "श्रम विभाग के Employment Exchange पोर्टल (<strong>ee1.py.gov.in</strong>) पर जाएं। लिंक विभाग की साइट labour.py.gov.in के Employment Exchange भाग से मिलता है। यह पोर्टल हमारी जांच में खुल नहीं पाया, इसलिए विभाग की साइट से लिंक लें।",
        "मेन्यू में <strong>\"Candidate Registration\"</strong> चुनें और <strong>\"I Agree\"</strong> दबाएं।",
        "व्यक्तिगत, संपर्क, योग्यता और (हो तो) अनुभव की जानकारी भरें और <strong>\"Save as Draft\"</strong> दबाएं।",
        "बुनियादी जानकारी भरने के बाद <strong>\"Register\"</strong> दबाएं। पावती स्क्रीन पर आती है; इसे डाउनलोड या प्रिंट कर लें।",
        "<strong>30 दिन के अंदर</strong> सभी मूल कागज़ लेकर अपने एक्सचेंज (पुदुचेरी, कराईकल, माहे या यानम) जाएं। सत्यापन के बाद पहचान पत्र बनता है।",
      ],
      callout: { kind: "warn", html: "इस सेवा की किसी फीस का ज़िक्र हमें सरकारी दस्तावेज़ों में नहीं मिला। कोई एजेंट पैसे मांगे तो सीधे एक्सचेंज से पूछें।" },
    },
    {
      id: "renewal",
      title: "ऑनलाइन नवीनीकरण (Renewal)",
      steps: [
        "पोर्टल पर <strong>Login</strong> चुनें। यूज़रनेम में अपना Employment Registration Number डालें।",
        "पासवर्ड में जन्मतिथि <strong>ddmmyyyy</strong> फॉर्मेट में डालें।",
        "सिस्टम आपका विवरण और <strong>\"Next Renewal Due\"</strong> दिखाता है। नवीनीकरण की अवधि या मोहलत में हों तो \"Do you want to Renew\" आता है; <strong>Yes</strong> दबाएं।",
        "नवीनीकरण का प्रिंटआउट/प्रमाण सिस्टम से मिल जाता है।",
      ],
      callout: { kind: "info", html: "नवीनीकरण की अवधि (कितने साल में) हमने सरकारी स्रोत से पक्की नहीं की है, इसलिए यहां नहीं लिखी। पोर्टल पर \"Next Renewal Due\" में अपनी तारीख देखें।" },
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "श्रम विभाग के Employment Exchange पेजों पर हमें बेरोज़गारी भत्ता योजना की जानकारी नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। ताज़ा जानकारी के लिए एक्सचेंज या विभाग से पूछें।",
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>श्रम विभाग, पुदुचेरी:</strong> <a href="https://labour.py.gov.in/" target="_blank" rel="noopener nofollow">labour.py.gov.in</a>',
        '<strong>National Career Service (NCS):</strong> <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।',
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://labour.py.gov.in/", title: "श्रम विभाग, पुदुचेरी (Employment Exchange)" },
    { href: "https://labour.py.gov.in/sites/default/files/lrdeodbeeuser-manualregnren.pdf", title: "ऑनलाइन पंजीकरण और नवीनीकरण के चरण (श्रम विभाग, PDF)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "पुदुचेरी में रोज़गार कार्यालय में ऑनलाइन नाम कैसे लिखवाएं?", a: "श्रम विभाग के Employment Exchange पोर्टल पर Candidate Registration से आवेदन करें, पावती डाउनलोड करें और 30 दिन के अंदर मूल कागज़ लेकर अपने एक्सचेंज में सत्यापन करवाएं।" },
    { q: "सत्यापन न कराने पर क्या होगा?", a: "विभाग के दस्तावेज़ के अनुसार ऑनलाइन पंजीकरण के 30 दिन के अंदर भौतिक सत्यापन ज़रूरी है। पोर्टल के विवरण के अनुसार न कराने पर पंजीकरण अपने-आप रद्द हो सकता है।" },
    { q: "नवीनीकरण ऑनलाइन कैसे होता है?", a: "पोर्टल पर रजिस्ट्रेशन नंबर यूज़रनेम और जन्मतिथि (ddmmyyyy) पासवर्ड से लॉगिन करें। \"Next Renewal Due\" के अनुसार Renew पर Yes दबाएं और प्रमाण डाउनलोड करें।" },
    { q: "पंजीकरण के लिए उम्र और पात्रता क्या है?", a: "सरकारी सेवा विवरण के अनुसार 14 साल से ऊपर, पुदुचेरी के निवासी, मूल शैक्षणिक और निवास प्रमाण के साथ, और आधार व फोन नंबर।" },
    { q: "क्या पुदुचेरी में बेरोज़गारी भत्ता मिलता है?", a: "श्रम विभाग के Employment Exchange पेजों पर हमें ऐसी योजना की जानकारी नहीं मिली, इसलिए कोई राशि नहीं लिखी है। विभाग से पूछ लें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/states/puducherry-caste-certificate.html", emoji: "📜", title: "पुदुचेरी जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/puducherry-domicile-certificate.html", emoji: "🏠", title: "पुदुचेरी निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://labour.py.gov.in/", label: "📝 श्रम विभाग, पुदुचेरी" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
