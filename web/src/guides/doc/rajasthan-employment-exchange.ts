import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - employment.livelihoods.rajasthan.gov.in "Job Seeker User Manual for
//   Employment Department Services" (ShowFile.aspx?DocID=244): services in the
//   SSO Employment app (job seeker registration, unemployment allowance /
//   Mukhyamantri Yuva Sambal Yojana, employer registration), documents
//   (Aadhaar with updated mobile, graduation certificate, 10th marksheet,
//   special-ability certificate), linking an old EEMS registration to SSO by OTP.
// - employment.rajasthan.gov.in (Department of Skill, Employment &
//   Entrepreneurship, Employment Wing) listed as the department site.
// - dipr.rajasthan.gov.in/scheme/detail/954 lists Yuva Sambal amounts but is
//   undated and conflicts with newer reports, so no amount is given here.
// - ncs.gov.in (toll-free helpline 1514).
// Renewal period, age limit and fees were not found on an official page and
// are left out.
export const rajasthanEmploymentExchange: DocGuide = {
  "state": {
    "slug": "rajasthan",
    "hi": "राजस्थान"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Rajasthan Employment Exchange 2026: Apply & Status",
  "description": "राजस्थान रोजगार कार्यालय पंजीकरण 2026: SSO Rajasthan के Employment ऐप से जॉब सीकर रजिस्ट्रेशन, ज़रूरी कागज़ (आधार, 10वीं, स्नातक प्रमाण पत्र) और मुख्यमंत्री युवा संबल योजना की जानकारी।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "राजस्थान रोजगार कार्यालय पंजीकरण 2026: SSO पोर्टल पर जॉब सीकर रजिस्ट्रेशन",
  "lead": "राजस्थान में रोजगार कार्यालय का पंजीकरण SSO Rajasthan पर लॉगिन करके \"Employment\" ऐप से ऑनलाइन होता है। आधार (मोबाइल नंबर अपडेट वाला), 10वीं की अंकतालिका और ज़रूरत हो तो स्नातक प्रमाण पत्र तैयार रखें। मुख्यमंत्री युवा संबल योजना (बेरोज़गारी भत्ता) का आवेदन भी इसी ऐप से होता है।",
  "facts": [
    [
      "पोर्टल",
      "SSO Rajasthan → Employment ऐप (<a href=\"https://employment.rajasthan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.rajasthan.gov.in</a>)"
    ],
    [
      "ज़रूरी कागज़",
      "आधार, 10वीं अंकतालिका, स्नातक प्रमाण पत्र"
    ],
    [
      "भत्ता योजना",
      "मुख्यमंत्री युवा संबल योजना (ऐप में आवेदन)"
    ],
    [
      "विभाग",
      "कौशल, रोजगार एवं उद्यमिता विभाग (रोजगार शाखा)"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> आधार से जुड़ा मोबाइल नंबर चालू होना चाहिए। विभाग की गाइड के अनुसार आधार में मोबाइल अपडेट होना ज़रूरी है, वरना आवेदन में दिक्कत आ सकती है।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "SSO के Employment ऐप में कौन सी सेवाएं हैं",
      "intro": "विभाग की Job Seeker User Manual के अनुसार SSO के Employment ऐप में ये सेवाएं हैं:",
      "list": [
        "<strong>Job Seeker Registration:</strong> रोजगार विभाग में उम्मीदवार का ऑनलाइन पंजीकरण।",
        "<strong>बेरोज़गारी भत्ता (मुख्यमंत्री युवा संबल योजना):</strong> भत्ते के लिए ऑनलाइन आवेदन।",
        "<strong>Employer Registration:</strong> नियोक्ता का पंजीकरण।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की योग्यता और चयन प्रक्रिया अलग होती है।"
      }
    },
    {
      "id": "kagaz",
      "title": "क्या-क्या तैयार रखें",
      "intro": "विभाग की गाइड में जॉब सीकर रजिस्ट्रेशन के लिए ये कागज़ बताए गए हैं:",
      "list": [
        "<strong>आधार कार्ड</strong>, जिसमें मोबाइल नंबर अपडेट हो",
        "<strong>स्नातक (Graduation) प्रमाण पत्र</strong>",
        "<strong>10वीं की अंकतालिका</strong>",
        "दिव्यांग उम्मीदवारों के लिए सक्षम अधिकारी का <strong>विशेष योग्यता प्रमाण पत्र</strong>"
      ],
      "callout": {
        "kind": "warn",
        "html": "गाइड स्नातक प्रमाण पत्र का ज़िक्र करती है। अगर आप स्नातक नहीं हैं तो फॉर्म में दिखने वाली ज़रूरतें देखें या अपने ज़िला रोजगार कार्यालय से पूछें कि आपकी योग्यता के लिए क्या लगेगा।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन पंजीकरण कैसे करें",
      "steps": [
        "<strong>SSO Rajasthan</strong> पर अपनी SSO ID से लॉगिन करें। ID नहीं है तो पहले SSO ID बनाएं।",
        "SSO Dashboard पर <strong>\"Employment\"</strong> लोगो पर क्लिक करें।",
        "खुलने वाले पेज पर <strong>\"Job Seeker\"</strong> चुनें और नया पंजीकरण फॉर्म भरें।",
        "कागज़ अपलोड करके आवेदन जमा करें और पावती सुरक्षित रखें।"
      ],
      "callout": {
        "kind": "info",
        "html": "फीस और आवेदन के बाद की प्रक्रिया की जानकारी हमें विभाग के सार्वजनिक पेज पर नहीं मिली। ई-मित्र से कराएं तो सेवा शुल्क पहले पूछ लें। विभाग की गाइड: <a href=\"https://employment.livelihoods.rajasthan.gov.in/website/CMS/ShowFile.aspx?DocID=244\" target=\"_blank\" rel=\"noopener nofollow\">Job Seeker User Manual (PDF)</a>"
      }
    },
    {
      "id": "purana",
      "title": "पहले से EEMS में पंजीकृत हैं तो",
      "intro": "पुराने पंजीकरण को SSO से जोड़ने के लिए: SSO में लॉगिन करें, Employment लोगो दबाएं, Job Seeker चुनें, फिर <strong>\"Existing User\"</strong> चुनकर अपना रजिस्ट्रेशन नंबर डालें और \"Send OTP\" दबाएं। पंजीकरण के समय दिए मोबाइल पर आए OTP से सत्यापन करने पर आपका EEMS पंजीकरण SSO खाते से जुड़ जाता है और आप अपने डैशबोर्ड पर पहुंचते हैं।"
    },
    {
      "id": "bhatta",
      "title": "मुख्यमंत्री युवा संबल योजना (बेरोज़गारी भत्ता)",
      "intro": "इस योजना का आवेदन भी SSO के Employment ऐप से होता है। भत्ते की राशि, उम्र और आय सीमा अलग-अलग स्रोतों में अलग मिलती है (पुरानी सरकारी पेज पर कम और नई खबरों में ज्यादा राशि), और हमें कोई ताज़ा सरकारी अधिसूचना नहीं मिली। इसलिए यहां कोई राशि नहीं लिखी जा रही। नवीनतम शर्तें और आवेदन की तारीख ज़िला रोजगार कार्यालय या विभाग की साइट पर पक्की करें।"
    },
    {
      "id": "dikkat",
      "title": "आम दिक्कतें और उनका हल",
      "table": {
        "head": [
          "दिक्कत",
          "क्या करें"
        ],
        "rows": [
          [
            "OTP नहीं आ रहा",
            "आधार/SSO में मोबाइल नंबर अपडेट कराएं"
          ],
          [
            "पुराना EEMS पंजीकरण",
            "\"Existing User\" से रजिस्ट्रेशन नंबर डालकर OTP से जोड़ें"
          ],
          [
            "आवेदन में मदद चाहिए",
            "ज़िला रोजगार कार्यालय या ई-मित्र केंद्र से संपर्क करें"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> RPSC, RSMSSB आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://employment.rajasthan.gov.in/",
      "title": "कौशल, रोजगार एवं उद्यमिता विभाग (रोजगार शाखा), राजस्थान"
    },
    {
      "href": "https://employment.livelihoods.rajasthan.gov.in/website/CMS/ShowFile.aspx?DocID=244",
      "title": "Job Seeker User Manual (रोजगार विभाग)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "राजस्थान में रोजगार कार्यालय का पंजीकरण कहां होता है?",
      "a": "SSO Rajasthan पर लॉगिन करके Dashboard के Employment ऐप में Job Seeker चुनकर पंजीकरण होता है।"
    },
    {
      "q": "कौन से कागज़ चाहिए?",
      "a": "विभाग की गाइड के अनुसार आधार (मोबाइल अपडेट), स्नातक प्रमाण पत्र, 10वीं की अंकतालिका और दिव्यांगों के लिए विशेष योग्यता प्रमाण पत्र।"
    },
    {
      "q": "क्या बेरोज़गारी भत्ता मिलता है?",
      "a": "मुख्यमंत्री युवा संबल योजना में आवेदन SSO के Employment ऐप से होता है। राशि और शर्तें समय-समय पर बदली हैं, इसलिए ताज़ा जानकारी रोजगार कार्यालय या विभाग की साइट से लें।"
    },
    {
      "q": "पुराना EEMS पंजीकरण SSO से कैसे जोड़ें?",
      "a": "Employment ऐप में Job Seeker → Existing User चुनें, रजिस्ट्रेशन नंबर डालकर OTP से सत्यापन करें।"
    }
  ],
  "related": [
    {
      "href": "/jobs/index.html",
      "emoji": "🎯",
      "title": "नई सरकारी नौकरियां",
      "text": "भर्ती, योग्यता और आखिरी तारीख"
    },
    {
      "href": "/exams/index.html",
      "emoji": "📅",
      "title": "Exam Calendar",
      "text": "SSC, Railway, Bank की तारीखें"
    },
    {
      "href": "/states/rajasthan-caste-certificate.html",
      "emoji": "📜",
      "title": "राजस्थान जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/rajasthan-domicile-certificate.html",
      "emoji": "🏠",
      "title": "राजस्थान निवास प्रमाण पत्र",
      "text": "डोमिसाइल सर्टिफिकेट"
    },
    {
      "href": "/tools/age-calculator.html",
      "emoji": "⏳",
      "title": "Exam Age Calculator",
      "text": "कट-ऑफ तारीख पर सही उम्र"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Signature Resizer",
      "text": "फॉर्म के साइज़ में, फ्री"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  "aside": [
    {
      "href": "https://employment.rajasthan.gov.in/",
      "label": "📝 रोजगार विभाग पोर्टल"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
