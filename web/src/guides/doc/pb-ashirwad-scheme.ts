import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; ashirwad.punjab.gov.in not reachable from the
// sandbox): myScheme (slug "asd": Department of Social Justice, Empowerment
// and Minorities, Punjab; ₹51,000; girl 18+; family income from all sources
// up to ₹32,790 a year; parents/guardian domiciled in Punjab; apply before
// marriage or within 30 days after; up to two girls per family; SC/Christian
// girls, BC, EWS girls, daughters of widows of any caste, and SC
// widows/divorcees on remarriage; online registration on
// ashirwad.punjab.gov.in "Applicant Registration"; guideline PDF on the same
// portal). Indian Masterminds / The Statesman (June 2026: ₹16.74 crore
// released for 3,282 SC beneficiaries in FY 2026-27, DBT to bank accounts,
// announced by Social Justice Minister Dr. Baljit Kaur; earlier ₹13.05 crore
// for 2,559 BC/EWS families). Tribune 2024 report on payment delays.
// Document list described generally; income-limit figure flagged as "check".
export const pbAshirwadScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "पंजाब", href: "/states/punjab.html" },
    { label: "आशीर्वाद स्कीम" },
  ],
  docHi: "आशीर्वाद स्कीम",
  title: "मुख्यमंत्री पंजाब आशीर्वाद स्कीम (शगुन)",
  description: "पंजाब की आशीर्वाद (शगुन) योजना: SC, BC, EWS परिवारों की बेटियों की शादी पर ₹51,000 सीधे बैंक खाते में। पात्रता, आय सीमा, शादी से पहले या 30 दिन के भीतर ऑनलाइन आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पंजाब आशीर्वाद स्कीम (शगुन) 2026: बेटी की शादी पर ₹51,000, पात्रता और ऑनलाइन आवेदन",
  lead: "पंजाब सरकार की आशीर्वाद योजना (पहले शगुन योजना) में अनुसूचित जाति, ईसाई, पिछड़ा वर्ग और आर्थिक रूप से कमज़ोर परिवारों की बेटियों की शादी पर ₹51,000 की एकमुश्त मदद सीधे बैंक खाते में मिलती है। आवेदन शादी से पहले या शादी के 30 दिन के भीतर ashirwad.punjab.gov.in पर किया जाता है। योजना सामाजिक न्याय, अधिकारिता एवं अल्पसंख्यक विभाग चलाता है।",
  facts: [
    ["राज्य", "पंजाब"],
    ["राशि", "₹51,000 (एकमुश्त, DBT)"],
    ["उम्र", "लड़की 18 साल या ज़्यादा"],
    ["आवेदन", "शादी से पहले या शादी के 30 दिन के भीतर"],
  ],
  sections: [
    {
      id: "kise",
      title: "किसे मिलती है मदद",
      list: [
        "अनुसूचित जाति और ईसाई परिवारों की बेटियां।",
        "पिछड़े वर्ग और आर्थिक रूप से कमज़ोर वर्ग (EWS) की बेटियां।",
        "किसी भी जाति की विधवा की बेटी।",
        "अनुसूचित जाति की विधवा/तलाकशुदा महिला के <strong>पुनर्विवाह</strong> पर।",
      ],
      callout: { kind: "info", html: "जून 2026 में सरकार ने 2026-27 के लिए अनुसूचित जाति के 3,282 लाभार्थियों को ₹16.74 करोड़ जारी करने की जानकारी दी। भुगतान बैच में होता है, इसलिए पैसा आने में समय लग सकता है।" },
    },
    {
      id: "patrata",
      title: "पात्रता की शर्तें",
      list: [
        "लड़की की उम्र शादी के समय <strong>18 साल या ज़्यादा</strong> हो।",
        "लड़की के माता-पिता/अभिभावक <strong>पंजाब के निवासी</strong> हों।",
        "परिवार की सभी स्रोतों से सालाना आय तय सीमा के भीतर हो। myScheme पर यह सीमा <strong>₹32,790 सालाना</strong> लिखी है; आवेदन से पहले पोर्टल के दिशा-निर्देश या ज़िला समाज कल्याण अधिकारी से ताज़ा सीमा पक्की करें।",
        "एक परिवार की <strong>अधिकतम दो बेटियों</strong> को यह लाभ मिलता है।",
        "आवेदन शादी से पहले या शादी के <strong>30 दिन के भीतर</strong> करना होता है।",
      ],
    },
    {
      id: "avedan",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        '<a href="https://ashirwad.punjab.gov.in/ashirwad/" target="_blank" rel="noopener nofollow">ashirwad.punjab.gov.in</a> खोलें।',
        "<strong>Applicant Registration</strong> चुनें और पंजीकरण फॉर्म भरें।",
        "लड़की और परिवार की जानकारी, शादी की तारीख और बैंक खाते का विवरण भरें।",
        "मांगे गए कागज़ अपलोड करें, जैसे निवास प्रमाण, जाति प्रमाण पत्र (SC/BC के लिए), आय प्रमाण, लड़की की उम्र का प्रमाण, आधार और बैंक पासबुक। पूरी सूची पोर्टल के दिशा-निर्देश में देखें।",
        "फॉर्म जमा करके आवेदन संख्या संभालें। जांच ज़िला समाज कल्याण कार्यालय के स्तर पर होती है।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न भर पाएं तो सेवा केंद्र, <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> या ज़िला समाज कल्याण अधिकारी के कार्यालय से मदद लें। आवेदन के लिए किसी को रिश्वत न दें।" },
    },
    {
      id: "deri",
      title: "पैसा देर से आए तो",
      list: [
        "पोर्टल पर आवेदन की स्थिति देखें।",
        "बैंक खाता चालू और आधार से जुड़ा है, यह बैंक से पक्का करें।",
        "ज़िला समाज कल्याण अधिकारी के कार्यालय में आवेदन संख्या के साथ पूछताछ करें। पहले कुछ ज़िलों में भुगतान में देरी की खबरें आई हैं, इसलिए रसीद और कॉपी संभालकर रखें।",
      ],
    },
  ],
  official: [
    { href: "https://ashirwad.punjab.gov.in/ashirwad/", title: "आशीर्वाद योजना पोर्टल (सामाजिक न्याय, अधिकारिता एवं अल्पसंख्यक विभाग, पंजाब)" },
    { href: "https://www.myscheme.gov.in/schemes/asd", title: "myScheme: Ashirwad" },
  ],
  faq: [
    { q: "आशीर्वाद योजना में कितनी राशि मिलती है?", a: "₹51,000 की एकमुश्त मदद, सीधे लाभार्थी के बैंक खाते में।" },
    { q: "आवेदन कब तक कर सकते हैं?", a: "शादी से पहले या शादी के 30 दिन के भीतर।" },
    { q: "एक परिवार की कितनी बेटियों को लाभ मिलता है?", a: "अधिकतम दो बेटियों को।" },
    { q: "क्या सामान्य वर्ग के परिवार को लाभ मिल सकता है?", a: "आर्थिक रूप से कमज़ोर वर्ग (EWS) की बेटियां और किसी भी जाति की विधवा की बेटी पात्र हैं, बशर्ते आय सीमा और बाकी शर्तें पूरी हों।" },
    { q: "आय सीमा कितनी है?", a: "myScheme पर परिवार की सालाना आय ₹32,790 तक लिखी है। सीमा बदल सकती है, इसलिए आवेदन से पहले पोर्टल या ज़िला समाज कल्याण कार्यालय से पुष्टि करें।" },
  ],
  related: [
    { href: "/states/punjab-caste-certificate.html", emoji: "🪪", title: "पंजाब जाति प्रमाण पत्र", text: "SC/BC प्रमाण पत्र" },
    { href: "/states/punjab-income-certificate.html", emoji: "💰", title: "पंजाब आय प्रमाण पत्र", text: "आय का प्रमाण" },
    { href: "/states/punjab-domicile-certificate.html", emoji: "🏠", title: "पंजाब निवास प्रमाण पत्र", text: "निवास का प्रमाण" },
    { href: "/service/marriage-certificate.html", emoji: "💍", title: "विवाह प्रमाण पत्र", text: "शादी का पंजीकरण" },
    { href: "/states/punjab-ration-card.html", emoji: "🍚", title: "पंजाब राशन कार्ड", text: "राशन कार्ड सेवाएं" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://ashirwad.punjab.gov.in/ashirwad/", label: "💍 आशीर्वाद पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
