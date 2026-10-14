import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - desd.nagaland.gov.in/wp-content/uploads/2025/04/AAR-2024-25-DESDE.pdf
//   (Annual Administrative Report 2024-25, Directorate of Employment, Skill
//   Development & Entrepreneurship): duties of exchanges, 1 regional + 7
//   district exchanges + 2 rural employment bureaus, Model Career Centres at
//   Kohima, Mokokchung, Phek, Wokha, Dimapur, Mon and Tuensang under NCS, 70,558
//   applicants on the live register at 31/12/2024, Self-Employment Promotion
//   Cell at Regional Exchange Kohima, physically handicapped cell.
// - desd.nagaland.gov.in (Kohima address: above High School Junction, ITI
//   Kohima Complex, Kohima 797001, as shown in search extract).
// - ncs.gov.in (toll-free helpline 1514).
// Registration documents, renewal period, fees and any online state portal were
// not found on official pages, so none are stated. No unemployment allowance was
// found.
export const nagalandEmploymentExchange: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Nagaland Employment Exchange 2026: Apply & Status",
  description: "नागालैंड रोज़गार कार्यालय (Employment Exchange) 2026: क्षेत्रीय, ज़िला और ग्रामीण रोज़गार कार्यालय, निदेशालय (कोहिमा) का पता, Model Career Centre और NCS पोर्टल की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "नागालैंड रोज़गार कार्यालय पंजीकरण 2026: कहां और कैसे नाम दर्ज करवाएं",
  lead: "नागालैंड में रोज़गार कार्यालय रोज़गार, कौशल विकास एवं उद्यमिता निदेशालय (कोहिमा) के अधीन हैं: 1 क्षेत्रीय, 7 ज़िला और 2 ग्रामीण रोज़गार ब्यूरो। निदेशालय की ताज़ा रिपोर्ट में ऑनलाइन पंजीकरण का कोई अलग राज्य पोर्टल नहीं बताया गया है, इसलिए नाम दर्ज करवाने के लिए अपने इलाके के रोज़गार कार्यालय में संपर्क करें और NCS पोर्टल का भी उपयोग करें।",
  facts: [["निदेशालय", "<a href=\"https://desd.nagaland.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">desd.nagaland.gov.in</a>, कोहिमा"], ["कार्यालय", "1 क्षेत्रीय, 7 ज़िला, 2 ग्रामीण रोज़गार ब्यूरो"], ["Model Career Centre", "कोहिमा, मोकोकचुंग, फेक, वोखा, दीमापुर, मोन, तुएनसांग"], ["हेल्पलाइन", "1514 (NCS)"]],
  sections: [
    {
      "id": "kya-hai",
      "title": "Employment Exchange क्या करता है",
      "intro": "निदेशालय की वार्षिक प्रशासनिक रिपोर्ट के अनुसार रोज़गार कार्यालयों के काम:",
      "list": [
        "नौकरी चाहने वालों का <strong>पंजीकरण</strong> (Registration of Job-seekers)",
        "रिक्तियों की अनिवार्य सूचना कानून (1959) लागू करना और अधिसूचित पदों के लिए उम्मीदवारों के नाम भेजना",
        "रोज़गार संबंधी आंकड़े जुटाना (Employment Market Information)",
        "करियर काउंसलिंग, व्यावसायिक मार्गदर्शन और स्कूल-कॉलेज में करियर वार्ता",
        "कोहिमा के क्षेत्रीय रोज़गार कार्यालय में <strong>स्वरोज़गार प्रोत्साहन प्रकोष्ठ (SEPC)</strong> और दिव्यांगों के लिए विशेष प्रकोष्ठ"
      ],
      "callout": {
        "kind": "info",
        "html": "पंजीकरण से नौकरी अपने-आप नहीं मिलती। हर भर्ती की अपनी योग्यता और चयन प्रक्रिया होती है।"
      }
    },
    {
      "id": "offline",
      "title": "कहां जाएं",
      "intro": "पंजीकरण के लिए अपने ज़िले के रोज़गार कार्यालय में संपर्क करें। निदेशालय की रिपोर्ट के अनुसार कोहिमा में क्षेत्रीय कार्यालय है और ज़िलों में 7 ज़िला कार्यालय तथा 2 ग्रामीण रोज़गार ब्यूरो हैं। कोहिमा, मोकोकचुंग, फेक, वोखा, दीमापुर, मोन और तुएनसांग के कार्यालयों को NCS परियोजना के तहत <strong>Model Career Centre</strong> बनाया जा रहा है।",
      "list": [
        "निदेशालय का पता (सरकारी साइट के अनुसार): ITI कोहिमा कॉम्प्लेक्स, हाई स्कूल जंक्शन के ऊपर, कोहिमा 797001।",
        "<a href=\"https://desd.nagaland.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">desd.nagaland.gov.in</a> पर संपर्क और अन्य जानकारी देखें।",
        "कागज़, फीस और नवीनीकरण की ताज़ा जानकारी के लिए सीधे अपने कार्यालय से पूछें; हमें ये बातें किसी चालू सरकारी पेज पर पक्की नहीं मिलीं।"
      ],
      "callout": {
        "kind": "warn",
        "html": "कोई भी \"पक्की नौकरी\" या \"जल्दी पंजीकरण\" के नाम पर पैसे मांगे तो न दें और सीधे रोज़गार कार्यालय से पूछें।"
      }
    },
    {
      "id": "ncs",
      "title": "NCS पोर्टल से ऑनलाइन",
      "intro": "राज्य का अलग ऑनलाइन पंजीकरण पोर्टल हमें निदेशालय की ताज़ा रिपोर्ट में नहीं मिला। ऑनलाइन नौकरी खोजने और प्रोफाइल बनाने के लिए केंद्र सरकार का NCS पोर्टल (ncs.gov.in) उपलब्ध है; हेल्पलाइन 1514।"
    },
    {
      "id": "bhatta",
      "title": "बेरोज़गारी भत्ता",
      "intro": "नागालैंड के निदेशालय की रिपोर्ट पर बेरोज़गारी भत्ता योजना की जानकारी हमें नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। किसी से \"भत्ता दिलाने\" के नाम पर पैसे न दें; योजना की पुष्टि विभाग से करें।"
    },
    {
      "id": "naukri",
      "title": "नौकरी खोजने के और सरकारी रास्ते",
      "list": [
        "<strong>National Career Service (NCS):</strong> <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।"
      ]
    }
  ],
  official: [
    {
      "href": "https://desd.nagaland.gov.in/",
      "title": "रोज़गार, कौशल विकास एवं उद्यमिता निदेशालय, नागालैंड"
    },
    {
      "href": "https://desd.nagaland.gov.in/wp-content/uploads/2025/04/AAR-2024-25-DESDE.pdf",
      "title": "वार्षिक प्रशासनिक रिपोर्ट 2024-25 (निदेशालय, PDF)"
    },
    {
      "href": "https://www.ncs.gov.in/",
      "title": "National Career Service (केंद्र सरकार)"
    }
  ],
  faq: [
    {
      "q": "नागालैंड में रोज़गार कार्यालय में नाम कैसे दर्ज कराएं?",
      "a": "अपने ज़िले के रोज़गार कार्यालय में संपर्क करें। निदेशालय के अधीन 1 क्षेत्रीय, 7 ज़िला कार्यालय और 2 ग्रामीण रोज़गार ब्यूरो हैं। कागज़ों की सूची के लिए कार्यालय से पूछें।"
    },
    {
      "q": "क्या नागालैंड में ऑनलाइन पंजीकरण होता है?",
      "a": "निदेशालय की ताज़ा रिपोर्ट में अलग राज्य पोर्टल का ज़िक्र हमें नहीं मिला। NCS पोर्टल (ncs.gov.in) पर प्रोफाइल बना सकते हैं।"
    },
    {
      "q": "Model Career Centre क्या है?",
      "a": "NCS परियोजना के तहत कोहिमा, मोकोकचुंग, फेक, वोखा, दीमापुर, मोन और तुएनसांग के रोज़गार कार्यालयों को रोज़गार से जुड़ी कई सेवाओं वाले केंद्र के रूप में अपग्रेड किया जा रहा है।"
    },
    {
      "q": "स्वरोज़गार की जानकारी कहां मिलेगी?",
      "a": "निदेशालय के अनुसार कोहिमा के क्षेत्रीय रोज़गार कार्यालय में Self-Employment Promotion Cell है।"
    },
    {
      "q": "क्या नागालैंड में बेरोज़गारी भत्ता मिलता है?",
      "a": "हमें निदेशालय की रिपोर्ट में ऐसी योजना नहीं मिली, इसलिए कोई राशि नहीं लिखी है।"
    }
  ],
  related: [
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
      "href": "/states/nagaland-caste-certificate.html",
      "emoji": "📜",
      "title": "नागालैंड जाति प्रमाण पत्र",
      "text": "SC/ST/OBC प्रमाण पत्र"
    },
    {
      "href": "/states/nagaland-domicile-certificate.html",
      "emoji": "🏠",
      "title": "नागालैंड निवास प्रमाण पत्र",
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
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    {
      "href": "https://desd.nagaland.gov.in/",
      "label": "🏢 निदेशालय, नागालैंड"
    },
    {
      "href": "/jobs/index.html",
      "label": "🎯 नई सरकारी नौकरियां"
    }
  ],
};
