import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - det.bihar.gov.in (Employment Wing, Directorate of Employment & Training,
//   Labour Resources Department, Government of Bihar): online job seeker
//   registration "anywhere anytime", job search, apply online, e-mail job
//   alerts, employment exchanges upgraded to Model Career Centres, link to NCS.
//   Registration pages linked from it: det.bihar.gov.in/det/registration and
//   detjob.bihar.gov.in/en/registration (not reachable from our checker).
// - 7nishchay-yuvaupmission.bihar.gov.in (home page and FAQ): Mukhyamantri
//   Nishchay Swayam Sahayata Bhatta (self-help allowance Rs 1000 a month, age
//   20-25), eligibility, online application, verification at DRCC within 60
//   days, toll-free 18003456444.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on an official page we could open): registration
// fee, document list, validity/renewal period of the employment card, how many
// months the allowance is paid, whether new applications are open right now.
export const biharEmploymentExchange: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Bihar Employment Exchange 2026: Apply & Status",
  description: "बिहार रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: श्रम संसाधन विभाग के det.bihar.gov.in पर ऑनलाइन रजिस्ट्रेशन और मुख्यमंत्री निश्चय स्वयं सहायता भत्ता की शर्तें।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "बिहार रोज़गार कार्यालय पंजीकरण 2026: det.bihar.gov.in पर रजिस्ट्रेशन और स्वयं सहायता भत्ता",
  lead: "बिहार में रोज़गार कार्यालय (Employment Exchange) का पंजीकरण श्रम संसाधन विभाग के रोज़गार एवं प्रशिक्षण निदेशालय (DET) के पोर्टल det.bihar.gov.in पर ऑनलाइन हो सकता है। इसी पोर्टल पर सरकारी और निजी नौकरियां खोजना, ऑनलाइन आवेदन और ईमेल से सूचना की सुविधा है। बेरोज़गारी के लिए अलग से \"मुख्यमंत्री निश्चय स्वयं सहायता भत्ता\" योजना है, जिसका आवेदन दूसरे पोर्टल पर होता है।",
  facts: [
    ["पोर्टल", '<a href="https://det.bihar.gov.in/" target="_blank" rel="noopener nofollow">det.bihar.gov.in</a>'],
    ["विभाग", "श्रम संसाधन विभाग, रोज़गार एवं प्रशिक्षण निदेशालय"],
    ["स्वयं सहायता भत्ता", "₹1,000 प्रति माह, आयु 20-25 साल"],
    ["भत्ते की हेल्पलाइन", "18003456444 (टोल-फ्री)"],
  ],
  notice: "<strong>ध्यान दें:</strong> रोज़गार कार्यालय का पंजीकरण और भत्ते का आवेदन सरकारी पोर्टल पर होता है। \"भत्ता पक्का\" बताकर पैसे मांगने वाले दलालों से बचें। भत्ता योजना के नाम से आने वाले फर्ज़ी ईमेल/मैसेज पर योजना की वेबसाइट ने खुद चेतावनी दी है।",
  sections: [
    {
      id: "kya-hai",
      title: "बिहार में रोज़गार कार्यालय क्या करते हैं",
      intro: "रोज़गार एवं प्रशिक्षण निदेशालय की वेबसाइट के अनुसार रोज़गार विभाग:",
      list: [
        "नौकरी चाहने वालों का <strong>पंजीकरण</strong> करता है और सरकारी व निजी नौकरियों की जानकारी देता है।",
        "<strong>करियर काउंसलिंग</strong> और कौशल/प्रशिक्षण की सलाह देता है।",
        "<strong>नियोजन मेला (Job Fair)</strong> में नौकरी देने वालों और युवाओं को जोड़ता है।",
        "राज्य के रोज़गार कार्यालयों को <strong>मॉडल करियर सेंटर</strong> के रूप में अपग्रेड किया गया है, जहां IT लैब, डिजिटल लाइब्रेरी और फ्री Wi-Fi की सुविधा बताई गई है।",
      ],
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        '<a href="https://det.bihar.gov.in/" target="_blank" rel="noopener nofollow">det.bihar.gov.in</a> खोलें (श्रम संसाधन विभाग, बिहार सरकार)। किसी मिलती-जुलती दूसरी साइट पर जानकारी न भरें।',
        "<strong>Job Seeker</strong> सेक्शन में Registration चुनें।",
        "पोर्टल जो जानकारी मांगे, जैसे नाम, मोबाइल, पता और पढ़ाई, वह भरकर अकाउंट बनाएं।",
        "सबमिट करने से पहले नाम और जन्मतिथि 10वीं के प्रमाण पत्र से मिलाएं।",
        "रजिस्ट्रेशन के बाद लॉगिन करके प्रोफाइल पूरी करें और अपनी पसंद की नौकरियां खोजें व आवेदन करें।",
      ],
      callout: { kind: "info", html: "पोर्टल पर जो कागज़ मांगे जाएं वही दें। कौन-से कागज़ चाहिए, कार्ड की वैधता और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं दिखी, इसलिए यहां नहीं लिखी। अपने <strong>ज़िला रोज़गार कार्यालय</strong> से पूछ लें।" },
    },
    {
      id: "bhatta",
      title: "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता (बेरोज़गारी भत्ता)",
      intro: "योजना की आधिकारिक वेबसाइट <a href=\"https://www.7nishchay-yuvaupmission.bihar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">7nishchay-yuvaupmission.bihar.gov.in</a> के अनुसार:",
      list: [
        "<strong>राशि:</strong> 20 से 25 साल की उम्र के युवाओं को ₹1,000 प्रति माह का स्वयं सहायता भत्ता।",
        "<strong>पात्रता (योजना के FAQ से):</strong> बिहार का स्थायी निवासी, 20-25 साल, बेरोज़गार, पढ़ाई न कर रहा हो और रोज़गार की तलाश में हो; स्वरोज़गार न हो; किसी और सरकारी भत्ते, छात्रवृत्ति, क्रेडिट कार्ड या शिक्षा ऋण का लाभ न ले रहा हो।",
        "<strong>कुशल युवा कार्यक्रम:</strong> भत्ता पाने वालों के लिए भाषा, संवाद और बुनियादी कंप्यूटर का प्रशिक्षण अनिवार्य बताया गया है।",
        "<strong>आवेदन:</strong> पहले ऑनलाइन आवेदन (New Application Registration, OTP से), फिर <strong>60 दिन के अंदर</strong> किसी कार्य दिवस पर ज़िला निबंधन एवं परामर्श केंद्र (DRCC) में मूल कागज़ दिखाकर सत्यापन।",
        "<strong>बैंक खाता आधार से जुड़ा</strong> होना चाहिए, तभी लाभ मिलेगा।",
        "<strong>मदद:</strong> योजना की सुविधा केंद्र हेल्पलाइन 18003456444 (टोल-फ्री)।",
      ],
      callout: { kind: "warn", html: "भत्ता कितने महीने मिलेगा और नए आवेदन अभी खुले हैं या नहीं, यह पोर्टल या DRCC से पक्का करें; हमें इसकी पुष्ट आधिकारिक जानकारी नहीं मिली। भत्ता रोज़गार कार्यालय के पंजीकरण से अलग आवेदन है।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
          ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर/ईमेल से लॉगिन करें"],
          ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
          ["भत्ते का आवेदन किया, आगे क्या", "60 दिन के अंदर DRCC जाकर कागज़ों का सत्यापन कराएं और बैंक खाता आधार से जोड़ें"],
          ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
        ],
      },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        '<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>। DET पोर्टल पर भी NCS का लिंक है।',
        "<strong>सरकारी भर्तियां:</strong> BPSC, BSSC, बिहार पुलिस, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        '<strong>नई भर्तियां:</strong> हमारे <a href="/jobs/index.html">नौकरी पेज</a> और <a href="/exams/index.html">Exam Calendar</a> पर देखें।',
      ],
    },
  ],
  official: [
    { href: "https://det.bihar.gov.in/", title: "रोज़गार एवं प्रशिक्षण निदेशालय, बिहार (पंजीकरण पोर्टल)" },
    { href: "https://www.7nishchay-yuvaupmission.bihar.gov.in/", title: "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता (आर्थिक हल, युवाओं को बल)" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "बिहार में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "श्रम संसाधन विभाग के पोर्टल det.bihar.gov.in पर Job Seeker के रूप में रजिस्ट्रेशन करें और प्रोफाइल पूरी करें। दिक्कत हो तो अपने ज़िला रोज़गार कार्यालय जाएं।" },
    { q: "बिहार में बेरोज़गारी भत्ता कितना मिलता है?", a: "मुख्यमंत्री निश्चय स्वयं सहायता भत्ता योजना की वेबसाइट के अनुसार 20 से 25 साल के पात्र युवाओं को ₹1,000 प्रति माह। कितने महीने और नए आवेदन खुले हैं या नहीं, यह पोर्टल या DRCC से पक्का करें।" },
    { q: "भत्ते के लिए आवेदन कहां करें?", a: "7nishchay-yuvaupmission.bihar.gov.in पर New Application Registration करें। फिर 60 दिन के अंदर ज़िला निबंधन एवं परामर्श केंद्र (DRCC) जाकर मूल कागज़ दिखाएं। हेल्पलाइन 18003456444।" },
    { q: "क्या रोज़गार कार्यालय में नाम लिखाने से भत्ता अपने-आप मिलता है?", a: "नहीं। रोज़गार कार्यालय का पंजीकरण और स्वयं सहायता भत्ता अलग आवेदन हैं; भत्ते के लिए योजना के पोर्टल पर अलग से आवेदन करना होता है।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप नौकरी की जानकारी और मेलों से जुड़ते हैं। BPSC, BSSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/bihar-domicile-certificate.html", emoji: "🏠", title: "बिहार निवास प्रमाण पत्र", text: "आवासीय प्रमाण पत्र के कागज़" },
    { href: "/states/bihar-caste-certificate.html", emoji: "📜", title: "बिहार जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/bihar-income-certificate.html", emoji: "💰", title: "बिहार आय प्रमाण पत्र", text: "RTPS से आवेदन" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://det.bihar.gov.in/", label: "📝 det.bihar.gov.in पर रजिस्टर करें" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
