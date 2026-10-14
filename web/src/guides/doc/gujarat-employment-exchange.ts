import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - surendranagar.nic.in/service/employment-exchange-registration/ : Gujarat
//   employment website employment.gujarat.gov.in; District Employment Exchange
//   Surendranagar (opp. Collector Office compound, phone 02752-282353).
// - News report, Sept 2025 (state labour minister in the Assembly, via search
//   results): Anubandham web portal for online jobseeker registration and
//   employer vacancies; 46 employment exchanges under the Directorate of
//   Employment and Training. Not an official page, so stated as 'reported'.
// - vadodara.nic.in service list: OJAS (ojas.gujarat.gov.in) is the online job
//   application system for government recruitment.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on a page we could open): fee, age limit, documents,
// validity/renewal period, Anubandham URL as an official link, any unemployment
// allowance (none confirmed).
export const gujaratEmploymentExchange: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Gujarat Employment Exchange 2026: Apply & Status",
  description: "गुजरात रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: employment.gujarat.gov.in, अनुबंधम पोर्टल पर रिपोर्ट किया गया ऑनलाइन पंजीकरण, ज़िला रोज़गार कार्यालय और OJAS।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गुजरात रोज़गार कार्यालय पंजीकरण 2026: अनुबंधम पोर्टल, ज़िला रोज़गार कार्यालय और OJAS",
  lead: "गुजरात में रोज़गार कार्यालय रोज़गार एवं प्रशिक्षण निदेशालय के अधीन हैं और राज्य की रोज़गार वेबसाइट employment.gujarat.gov.in है। सितंबर 2025 की एक समाचार रिपोर्ट के अनुसार श्रम मंत्री ने विधानसभा में बताया कि \"अनुबंधम\" वेब पोर्टल पर नौकरी चाहने वाले घर बैठे ऑनलाइन पंजीकरण कर सकते हैं और नियोक्ता वैकेंसी डाल सकते हैं। सरकारी भर्तियों के आवेदन के लिए अलग पोर्टल OJAS है।",
  facts: [
    ["वेबसाइट", "<a href=\"https://employment.gujarat.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">employment.gujarat.gov.in</a>"],
    ["विभाग", "रोज़गार एवं प्रशिक्षण निदेशालय, गुजरात"],
    ["कार्यालय", "राज्य में 46 रोज़गार कार्यालय (समाचार रिपोर्ट के अनुसार)"],
    ["सरकारी भर्ती आवेदन", "<a href=\"https://ojas.gujarat.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">OJAS (ojas.gujarat.gov.in)</a>"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "गुजरात में रोज़गार कार्यालय क्या करते हैं",
      intro: "सितंबर 2025 की समाचार रिपोर्ट के अनुसार रोज़गार कार्यालय पंजीकरण, वैकेंसी से मिलान, करियर काउंसलिंग और जॉब फेयर की सेवाएं देते हैं। ज़िला वेबसाइट के अनुसार कार्यालय औद्योगिक इलाकों में भर्ती रैलियां भी कराते हैं।",
    },
    {
      id: "registration",
      title: "पंजीकरण कैसे करें",
      steps: [
        "<a href=\"https://employment.gujarat.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">employment.gujarat.gov.in</a> खोलें; ज़िला सरकारी वेबसाइटों पर रोज़गार कार्यालय के लिए यही वेबसाइट बताई गई है।",
        "जॉबसीकर पंजीकरण का विकल्प चुनें। रिपोर्ट के अनुसार ऑनलाइन पंजीकरण \"अनुबंधम\" पोर्टल पर होता है; सही और ताज़ा लिंक के लिए ऊपर की सरकारी वेबसाइट से जाएं।",
        "मांगी गई जानकारी भरें और नाम व जन्मतिथि 10वीं के प्रमाण पत्र से मिलाएं।",
        "पंजीकरण नंबर/कार्ड संभालकर रखें।",
      ],
      callout: { kind: "info", html: "फीस, ज़रूरी कागज़, वैधता और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं मिली, इसलिए यहां नहीं लिखी। अपने ज़िला रोज़गार कार्यालय से पूछ लें।" },
    },
    {
      id: "surendranagar",
      title: "ज़िला रोज़गार कार्यालय: एक उदाहरण",
      intro: "सुरेंद्रनगर ज़िला वेबसाइट के अनुसार। बाकी ज़िलों का पता अपनी ज़िला वेबसाइट पर देखें।",
      table: { head: ["जानकारी", "विवरण"], rows: [
        ["कार्यालय", "District Employment Exchange, कलेक्टर ऑफिस कंपाउंड के सामने, सुरेंद्रनगर 363001"],
        ["फोन", "02752-282353"],
      ] },
    },
    {
      id: "ojas",
      title: "OJAS क्या है",
      intro: "<a href=\"https://ojas.gujarat.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">ojas.gujarat.gov.in</a> गुजरात का Online Job Application System है, जहां सरकारी विज्ञापन देखे, आवेदन किए और कॉल लेटर डाउनलोड किए जाते हैं। रोज़गार कार्यालय का पंजीकरण इसकी जगह नहीं लेता।",
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "गुजरात में रोज़गार पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही।",
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> GPSC, GSSSB, पुलिस भर्ती (OJAS), SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://employment.gujarat.gov.in", title: "रोज़गार एवं प्रशिक्षण निदेशालय, गुजरात" },
    { href: "https://surendranagar.nic.in/service/employment-exchange-registration/", title: "Employment Exchange Registration (ज़िला सुरेंद्रनगर)" },
    { href: "https://ojas.gujarat.gov.in", title: "OJAS: Online Job Application System" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "गुजरात में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "राज्य की रोज़गार वेबसाइट employment.gujarat.gov.in से जॉबसीकर पंजीकरण का विकल्प खोलें। समाचार रिपोर्ट के अनुसार ऑनलाइन पंजीकरण अनुबंधम पोर्टल पर होता है। या अपने ज़िला रोज़गार कार्यालय जाएं।" },
    { q: "OJAS और रोज़गार कार्यालय में क्या फर्क है?", a: "OJAS सरकारी भर्तियों के विज्ञापन और आवेदन का पोर्टल है। रोज़गार कार्यालय नौकरी चाहने वालों का पंजीकरण और वैकेंसी से मिलान करता है।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल या कार्यालय जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या गुजरात में बेरोज़गारी भत्ता मिलता है?", a: "इसकी कोई पुष्ट आधिकारिक जानकारी हमें नहीं मिली, इसलिए राशि नहीं लिखी गई। ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। GPSC, GSSSB जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/gujarat-caste-certificate.html", emoji: "📜", title: "गुजरात जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://employment.gujarat.gov.in", label: "📝 employment.gujarat.gov.in" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
