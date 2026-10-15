import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): ncs.gov.in home page and FAQ (initiative of
// the Ministry of Labour & Employment; toll-free helpline 1514;
// support.ncs@gov.in; free at every stage, jobseekers should not pay
// employers; registration for jobseekers, employers, counsellors, career
// centres, placement organisations, households; menus for domestic and
// international jobs, e-Migrate advisories, government-sector jobs, jobs for
// differently abled and ex-servicemen, job fairs, Model Career Centres,
// employment exchange list, "Blacklisted Entities"; NCS mobile app; cyber fraud
// on 1930). Portal-shown counters (lakh+ vacancies, employers) change daily
// and are described only loosely.
export const ncsNationalCareerService: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "राष्ट्रीय करियर सेवा (NCS)" },
  ],
  docHi: "राष्ट्रीय करियर सेवा (NCS)",
  title: "राष्ट्रीय करियर सेवा पोर्टल (National Career Service NCS)",
  description: "श्रम एवं रोज़गार मंत्रालय का मुफ्त NCS पोर्टल: नौकरी खोजें, रोज़गार मेले, करियर काउंसलिंग। पंजीकरण कैसे करें, ऐप, हेल्पलाइन 1514 और फर्जी नौकरी से बचाव।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "राष्ट्रीय करियर सेवा (NCS) पोर्टल 2026: मुफ्त पंजीकरण, नौकरी खोज, रोज़गार मेले और हेल्पलाइन 1514",
  lead: "राष्ट्रीय करियर सेवा (NCS) केंद्र सरकार के श्रम एवं रोज़गार मंत्रालय का पोर्टल है, जहां सरकारी, निजी और विदेश की नौकरियां, रोज़गार मेले और करियर काउंसलिंग एक जगह मिलती हैं। नौकरी खोजने वालों के लिए पंजीकरण, आवेदन और इंटरव्यू, किसी भी चरण पर कोई फीस नहीं है। मदद के लिए टोल-फ्री हेल्पलाइन 1514 है।",
  facts: [
    ["मंत्रालय", "श्रम एवं रोज़गार मंत्रालय"],
    ["पोर्टल", "ncs.gov.in और NCS मोबाइल ऐप"],
    ["फीस", "बिल्कुल मुफ्त"],
    ["हेल्पलाइन", "1514 (टोल-फ्री), support.ncs@gov.in"],
  ],
  sections: [
    {
      id: "kya-milta",
      title: "NCS पर क्या-क्या मिलता है",
      list: [
        "<strong>नौकरी खोज:</strong> देश की निजी और सरकारी नौकरियां, शहर, क्षेत्र और योग्यता के हिसाब से। पोर्टल पर लाखों पद दिखते हैं; संख्या रोज़ बदलती है।",
        "<strong>खास श्रेणियां:</strong> सरकारी क्षेत्र की नौकरियां, स्वास्थ्य क्षेत्र, दिव्यांगजन और पूर्व सैनिकों के लिए अलग सूची।",
        "<strong>विदेश की नौकरी:</strong> अंतरराष्ट्रीय नौकरियों की सूची और e-Migrate से जुड़ी सलाह।",
        "<strong>रोज़गार मेले:</strong> आपके ज़िले/राज्य में होने वाले जॉब फेयर में पंजीकरण।",
        "<strong>करियर काउंसलिंग:</strong> काउंसलर और मॉडल करियर सेंटर की सूची; ऑनलाइन मेंटरिंग और रिज़्यूमे बनाने के टूल।",
        "<strong>रोज़गार कार्यालय:</strong> राज्यों के रोज़गार कार्यालयों की सूची भी पोर्टल पर है।",
      ],
    },
    {
      id: "panjikaran",
      title: "नौकरी खोजने वाले का पंजीकरण कैसे करें",
      steps: [
        '<a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a> खोलें या NCS मोबाइल ऐप डाउनलोड करें।',
        "<strong>Jobseekers</strong> में <strong>Register</strong> चुनें।",
        "नाम, जन्म तिथि, मोबाइल नंबर/ईमेल जैसी जानकारी भरें और OTP से सत्यापन करें।",
        "प्रोफाइल में शिक्षा, कौशल, अनुभव और पसंद का काम/शहर भरें। जितनी पूरी प्रोफाइल, उतनी सही नौकरियां दिखेंगी।",
        "लॉग-इन करके <strong>Search for Jobs</strong> से नौकरी खोजें और आवेदन करें; रोज़गार मेलों में भी यहीं से पंजीकरण करें।",
      ],
      callout: { kind: "ok", html: "खुद पंजीकरण न कर पाएं तो अपने ज़िले के रोज़गार कार्यालय/मॉडल करियर सेंटर या <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> से मदद लें। हेल्पलाइन <strong>1514</strong> पर भी पूछ सकते हैं।" },
    },
    {
      id: "dhokha",
      title: "फर्जी नौकरी और ठगी से बचें",
      list: [
        "NCS किसी भी चरण पर फीस नहीं लेता। <strong>नौकरी के नाम पर पैसे मांगने वाले नियोक्ता को पैसा न दें।</strong>",
        "NCS के नाम या लोगो वाली दूसरी वेबसाइट/मैसेज पर भरोसा न करें; जानकारी सिर्फ ncs.gov.in पर जांचें।",
        "पोर्टल पर <strong>Blacklisted Entities</strong> की सूची देखें।",
        "साइबर ठगी हो तो तुरंत <strong>1930</strong> पर कॉल करें या cybercrime.gov.in पर शिकायत करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.ncs.gov.in/", title: "राष्ट्रीय करियर सेवा (NCS) पोर्टल", note: "हेल्पलाइन 1514" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "हेल्पलाइन 1930" },
  ],
  faq: [
    { q: "क्या NCS पोर्टल पर पंजीकरण मुफ्त है?", a: "हां। NCS पंजीकरण, नौकरी के आवेदन या इंटरव्यू, किसी भी चरण पर फीस नहीं लेता।" },
    { q: "NCS पर कौन पंजीकरण कर सकता है?", a: "नौकरी खोजने वाले, नियोक्ता, कौशल प्रशिक्षण देने वाले, करियर काउंसलर, करियर सेंटर, प्लेसमेंट संस्थाएं, घरेलू काम के लिए लोग रखने वाले परिवार और सरकारी विभाग।" },
    { q: "NCS हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री हेल्पलाइन 1514; ईमेल support.ncs@gov.in।" },
    { q: "क्या NCS पर सरकारी नौकरी के फॉर्म भरते हैं?", a: "पोर्टल पर सरकारी क्षेत्र की नौकरियों की सूची मिलती है, पर भर्ती का आवेदन आम तौर पर उसी भर्ती संस्था (जैसे SSC, UPSC या विभाग) की वेबसाइट पर होता है। विज्ञापन में दिया तरीका ही मानें।" },
    { q: "क्या NCS का मोबाइल ऐप है?", a: "हां, NCS का मोबाइल ऐप है, जिसमें नौकरी खोज, आवेदन और रोज़गार मेले में पंजीकरण हो सकता है।" },
  ],
  related: [
    { href: "/service/employment-exchange-registration.html", emoji: "🏢", title: "रोज़गार कार्यालय पंजीकरण", text: "राज्य का एम्प्लॉयमेंट एक्सचेंज" },
    { href: "/service/e-shram-card.html", emoji: "👷", title: "ई-श्रम कार्ड", text: "असंगठित कामगारों का पंजीकरण" },
    { href: "/service/pm-internship-scheme.html", emoji: "💼", title: "पीएम इंटर्नशिप योजना", text: "बड़ी कंपनियों में इंटर्नशिप" },
    { href: "/service/national-apprenticeship-scheme.html", emoji: "🛠️", title: "अप्रेंटिसशिप योजना", text: "ट्रेनिंग के साथ स्टाइपेंड" },
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🎓", title: "कौशल विकास योजना", text: "मुफ्त स्किल ट्रेनिंग" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन पंजीकरण में मदद" },
  ],
  aside: [
    { href: "https://www.ncs.gov.in/", label: "💼 NCS पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
