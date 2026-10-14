import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - suryapet.telangana.gov.in/employment-exchange/ (District Employment
//   Exchange page): documents, upload via MeeSeva, temporary registration no,
//   approval SMS in about a week, Employment Card collected from MeeSeva,
//   renewal / up-dation / transfer procedure, officer contact numbers.
// - employment.telangana.gov.in (DET Telangana official site, seen in search
//   results; its login page has New Job Seeker Registration). The site is not
//   reachable from our checker; search extract says exchanges charge no fee
//   and that all exchange work has been online only since 1 Jan 2018.
// - ncs.gov.in (toll-free helpline 1514).
// Renewal period, age limit and any allowance amount were not verified and
// are left out.
export const telanganaEmploymentExchange: DocGuide = {
  "state": {
    "slug": "telangana",
    "hi": "तेलंगाना"
  },
  "doc": "employment-exchange",
  "docHi": "रोज़गार कार्यालय पंजीकरण",
  "title": "Telangana Employment Exchange 2026: Apply & Status",
  "description": "तेलंगाना रोजगार कार्यालय (Employment Exchange) पंजीकरण 2026: DET पोर्टल employment.telangana.gov.in, MeeSeva केंद्र से रजिस्ट्रेशन और Employment Card, नवीनीकरण, अपडेट और ट्रांसफर।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "तेलंगाना रोजगार कार्यालय पंजीकरण 2026: MeeSeva से रजिस्ट्रेशन और Employment Card",
  "lead": "तेलंगाना में रोजगार कार्यालय का पंजीकरण रोजगार एवं प्रशिक्षण विभाग (DET) के पोर्टल पर होता है, और ज़िला पेजों के अनुसार आप MeeSeva केंद्र पर मूल कागज़ लेकर जाते हैं। डेटा अपलोड होने पर अस्थायी रजिस्ट्रेशन नंबर मिलता है और करीब एक हफ्ते बाद अप्रूवल का SMS आता है। Employment Card MeeSeva केंद्र से मिलता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://employment.telangana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.telangana.gov.in</a>"
    ],
    [
      "कहां से",
      "MeeSeva केंद्र (ज़िला रोजगार कार्यालय के पेज के अनुसार)"
    ],
    [
      "अप्रूवल",
      "लगभग 1 हफ्ते में SMS"
    ],
    [
      "कार्ड",
      "MeeSeva केंद्र से Employment Card"
    ]
  ],
  "notice": "<strong>सावधान:</strong> विभाग की साइट के अनुसार telanganaemploymentexchange.com जैसी साइटों का रोजगार कार्यालयों या DET से कोई संबंध नहीं है। सिर्फ सरकारी पोर्टल या MeeSeva का इस्तेमाल करें।",
  "sections": [
    {
      "id": "kya-hai",
      "title": "रोजगार कार्यालय क्या करता है",
      "intro": "ज़िला रोजगार कार्यालय पंजीकरण के अलावा ये काम भी करता है:",
      "list": [
        "ज़रूरतमंद विभागों को उम्मीदवारों के नाम भेजना (sponsoring)।",
        "व्यावसायिक मार्गदर्शन।",
        "निजी संस्थाओं के लिए बेरोज़गार युवाओं के जॉब मेले।",
        "सरकारी और निजी संस्थानों के रोज़गार बाज़ार की जानकारी जुटाना।"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "kagaz",
      "title": "क्या-क्या तैयार रखें (मूल कागज़)",
      "list": [
        "<strong>SSC मार्क्स मेमो</strong>, और ऊंची पढ़ाई की हो तो डिग्री तक के सभी मूल प्रमाण पत्र (B.Ed, TTC या तकनीकी प्रमाण पत्र हों तो वे भी)",
        "<strong>आधार कार्ड</strong> (ज़रूरी)",
        "<strong>फोटो और हस्ताक्षर</strong>",
        "<strong>मोबाइल नंबर</strong> (ज़रूरी), ईमेल ID हो तो वह भी",
        "SSC तक के स्टडी सर्टिफिकेट; जाति प्रमाण पत्र हो तो वह भी"
      ]
    },
    {
      "id": "online",
      "title": "पंजीकरण कैसे करें",
      "steps": [
        "सभी मूल कागज़ लेकर <strong>MeeSeva केंद्र</strong> जाएं। विभाग का पोर्टल <a href=\"https://employment.telangana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">employment.telangana.gov.in</a> है (New Job Seeker Registration)।",
        "डेटा अपलोड होने पर उम्मीदवार को <strong>अस्थायी रजिस्ट्रेशन नंबर</strong> और एक यूनिक पासवर्ड मिलता है।",
        "लगभग <strong>एक हफ्ते</strong> बाद SMS आता है कि रोजगार पंजीकरण अप्रूव हो गया।",
        "अप्रूवल के बाद <strong>Employment Card</strong> MeeSeva केंद्र से लें।"
      ],
      "callout": {
        "kind": "warn",
        "html": "विभाग की साइट के अनुसार ज़िला रोजगार कार्यालय पंजीकरण और सेवाओं की कोई फीस नहीं लेता। MeeSeva केंद्र का सेवा शुल्क अलग हो सकता है, इसलिए पहले पूछ लें; हमें उसका आंकड़ा सत्यापित नहीं मिला।"
      }
    },
    {
      "id": "renewal",
      "title": "नवीनीकरण, अपडेट और ट्रांसफर",
      "list": [
        "<strong>नवीनीकरण:</strong> Employment Card और आधार लेकर MeeSeva जाएं; मोबाइल वही हो जो पोर्टल पर दर्ज है। लगभग एक हफ्ते में अप्रूवल SMS आता है और कार्ड MeeSeva से मिलता है। नवीनीकरण की अवधि हमें सत्यापित नहीं मिली, कार्ड पर या ज़िला कार्यालय से देखें।",
        "<strong>उच्च योग्यता जोड़ना (Up-dation):</strong> नई योग्यता के मूल कागज़, कार्ड और आधार के साथ MeeSeva से अपलोड कराएं।",
        "<strong>दूसरे ज़िले में ट्रांसफर:</strong> नया निवास प्रमाण (मंडल के तहसीलदार या RDO द्वारा जारी) MeeSeva से अपलोड करें। नए ज़िले के रोजगार अधिकारी की मंज़ूरी के बाद कार्ड वहां के MeeSeva से मिलता है।"
      ]
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "ज़िला रोजगार कार्यालय के पेज पर किसी बेरोज़गारी भत्ते की राशि या पात्रता नहीं दी गई है, इसलिए यहां कोई राशि नहीं लिखी जा रही। जानकारी के लिए अपने ज़िला रोजगार अधिकारी से पूछें।"
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
            "अप्रूवल SMS नहीं आया",
            "एक हफ्ते बाद अस्थायी रजिस्ट्रेशन नंबर के साथ ज़िला रोजगार कार्यालय में पूछें"
          ],
          [
            "मोबाइल नंबर बदल गया",
            "पोर्टल पर दर्ज नंबर ही नवीनीकरण में चाहिए; कार्यालय से अपडेट कराएं"
          ],
          [
            "दूसरे ज़िले में बसे",
            "निवास प्रमाण के साथ ट्रांसफर कराएं"
          ]
        ]
      }
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> TGPSC आदि में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  "official": [
    {
      "href": "https://employment.telangana.gov.in/",
      "title": "रोजगार एवं प्रशिक्षण विभाग, तेलंगाना (DET)"
    },
    {
      "href": "https://suryapet.telangana.gov.in/employment-exchange/",
      "title": "ज़िला रोजगार कार्यालय का पेज (सूर्यापेट): प्रक्रिया और कागज़"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  "faq": [
    {
      "q": "तेलंगाना में रोजगार कार्यालय का पंजीकरण कहां होता है?",
      "a": "ज़िला पेजों के अनुसार मूल कागज़ लेकर MeeSeva केंद्र पर। विभाग का पोर्टल employment.telangana.gov.in है।"
    },
    {
      "q": "कौन से कागज़ चाहिए?",
      "a": "SSC मेमो और ऊंची पढ़ाई के मूल प्रमाण पत्र, आधार, फोटो-हस्ताक्षर और मोबाइल नंबर; जाति प्रमाण पत्र हो तो वह भी।"
    },
    {
      "q": "Employment Card कब मिलता है?",
      "a": "डेटा अपलोड के करीब एक हफ्ते बाद अप्रूवल का SMS आता है, फिर कार्ड MeeSeva केंद्र से मिलता है।"
    },
    {
      "q": "ज़िला बदलने पर कार्ड कैसे ट्रांसफर होगा?",
      "a": "नया निवास प्रमाण (तहसीलदार या RDO द्वारा जारी) MeeSeva से अपलोड करें; नए ज़िले के रोजगार अधिकारी की मंज़ूरी के बाद कार्ड मिलता है।"
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
      "href": "/states/telangana-caste-certificate.html",
      "emoji": "📜",
      "title": "तेलंगाना जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/telangana-domicile-certificate.html",
      "emoji": "🏠",
      "title": "तेलंगाना निवास प्रमाण पत्र",
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
      "href": "https://employment.telangana.gov.in/",
      "label": "📝 DET पोर्टल (तेलंगाना)"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ]
};
