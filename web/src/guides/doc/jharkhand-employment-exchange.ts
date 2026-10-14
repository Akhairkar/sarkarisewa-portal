import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - Search extract of the official notice on jharkhandrojgar.nic.in: the old
//   portal was retired in February 2021; job seekers register at
//   rojgar.jharkhand.gov.in. Sahibganj district notice (Dec 2023 - Mar 2024)
//   also names rojgar.jharkhand.gov.in as the Employment Portal.
// - palamu.nic.in/service/employment-exchange-registration/ : Jharkhand
//   Employment Service works under the Employment Exchanges (Compulsory
//   Notification of Vacancies) Act 1959, under the Directorate of Employment &
//   Training; Palamu exchange: behind Govt. ITI, Ranchi Road, Redma,
//   Medininagar 822101. (That page still lists the old jharkhandrojgar.nic.in.)
// - jharkhand.gov.in/labour (search extract): Department of Labour, Employment,
//   Training and Skill Development; Ranchi office Nepal House, Doranda, phone
//   0651-2490514 / 2490956; Rojgar Melas every quarter in all districts.
// - ncs.gov.in (toll-free helpline 1514).
// Left out (not confirmable on a page we could open): fee, documents, age limit,
// validity/renewal, any unemployment allowance (none confirmed).
export const jharkhandEmploymentExchange: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "employment-exchange",
  docHi: "रोज़गार कार्यालय पंजीकरण",
  title: "Jharkhand Employment Exchange 2026: Apply & Status",
  description: "झारखंड रोज़गार कार्यालय (Employment Exchange) पंजीकरण 2026: rojgar.jharkhand.gov.in पोर्टल, ज़िला रोज़गार कार्यालय, पुराने पोर्टल की जानकारी और रोज़गार मेला।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "झारखंड रोज़गार कार्यालय पंजीकरण 2026: rojgar.jharkhand.gov.in और ज़िला रोज़गार कार्यालय",
  lead: "झारखंड में रोज़गार कार्यालय श्रम, नियोजन, प्रशिक्षण एवं कौशल विकास विभाग के रोज़गार एवं प्रशिक्षण निदेशालय के अधीन हैं। सरकारी सूचना के अनुसार पुराना पोर्टल jharkhandrojgar.nic.in फरवरी 2021 में बंद हो चुका है, और नौकरी चाहने वालों को rojgar.jharkhand.gov.in पर रजिस्टर करना होता है। कुछ ज़िला पेज अब भी पुराना लिंक दिखाते हैं।",
  facts: [
    ["पोर्टल", "<a href=\"https://rojgar.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rojgar.jharkhand.gov.in</a>"],
    ["पुराना पोर्टल", "jharkhandrojgar.nic.in (फरवरी 2021 में बंद बताया गया)"],
    ["विभाग", "श्रम, नियोजन, प्रशिक्षण एवं कौशल विकास विभाग"],
    ["रोज़गार मेला", "हर तिमाही सभी ज़िलों में (विभाग के अनुसार)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सरकारी पोर्टल या अपने ज़िला रोज़गार कार्यालय में ही जानकारी दें। \"नौकरी या भत्ता पक्का\" कहकर पैसे मांगने वाले एजेंट को पैसे न दें।",
  sections: [
    {
      id: "kya",
      title: "झारखंड में रोज़गार कार्यालय क्या करते हैं",
      intro: "झारखंड रोज़गार सेवा केंद्र के <strong>Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959</strong> के दायरे में काम करती है। रोज़गार कार्यालयों का रोज़ का काम रोज़गार एवं प्रशिक्षण निदेशालय की देखरेख में होता है। मुख्य काम नाम दर्ज करना, वैकेंसी के लिए उम्मीदवारों के नाम भेजना और रोज़गार मेला कराना है।",
    },
    {
      id: "registration",
      title: "ऑनलाइन रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"https://rojgar.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rojgar.jharkhand.gov.in</a> खोलें। पुराने लिंक jharkhandrojgar.nic.in पर नया रजिस्ट्रेशन न करें।",
        "होम पेज पर <strong>NEW JOBSEEKER</strong> का विकल्प चुनें (पुराने पोर्टल के नोटिस में यही बताया गया था)।",
        "पोर्टल जो जानकारी मांगे, जैसे नाम, मोबाइल, पता और पढ़ाई, भरें और अकाउंट बनाएं।",
        "सबमिट करने से पहले नाम और जन्मतिथि प्रमाण पत्र से मिलाएं और पंजीकरण नंबर संभालें।",
      ],
      callout: { kind: "warn", html: "पुराने पोर्टल के नोटिस के अनुसार फरवरी 2021 से पहले नई साइट पर हुए कुछ पंजीकरण रद्द किए गए थे। अपना पंजीकरण पुराना हो तो ज़िला रोज़गार कार्यालय से स्थिति पूछ लें। फीस और नवीनीकरण की अवधि हमें आधिकारिक पेज पर नहीं मिली।" },
    },
    {
      id: "karyalay",
      title: "कुछ कार्यालयों के पते",
      intro: "बाकी ज़िलों के पते अपनी ज़िला सरकारी वेबसाइट के Employment Exchange Registration पेज पर देखें।",
      table: { head: ["कार्यालय", "पता / फोन"], rows: [
        ["रोज़गार कार्यालय, पलामू", "सरकारी ITI के पीछे, रांची रोड, रेडमा, मेदिनीनगर 822101"],
        ["विभाग कार्यालय, रांची", "नेपाल हाउस, डोरंडा; फोन 0651-2490514, 0651-2490956"],
      ] },
    },
    {
      id: "bhatta",
      title: "बेरोज़गारी भत्ता",
      intro: "झारखंड में रोज़गार पंजीकरण के आधार पर किसी चालू बेरोज़गारी भत्ते की पुष्टि हमें आधिकारिक पेज से नहीं मिली, इसलिए कोई राशि नहीं दी जा रही। ताज़ा योजनाओं की जानकारी ज़िला रोज़गार कार्यालय से लें।",
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और उनका हल",
      table: { head: ["दिक्कत", "क्या करें"], rows: [
        ["लॉगिन की जानकारी भूल गए", "पोर्टल पर पासवर्ड रीसेट का विकल्प देखें; न हो तो ज़िला रोज़गार कार्यालय से पूछें"],
        ["पहले से रजिस्टर्ड बता रहा है", "नया अकाउंट न बनाएं; पुराने मोबाइल नंबर से लॉगिन करें या कार्यालय से पूछें"],
        ["नाम/जन्मतिथि गलत भर दी", "10वीं के प्रमाण पत्र के साथ ज़िला रोज़गार कार्यालय में सुधार का अनुरोध दें"],
        ["पुराने पोर्टल पर पंजीकृत थे", "ज़िला रोज़गार कार्यालय से पूछें कि आपका पंजीकरण नए पोर्टल पर मान्य है या नहीं"],
        ["वेबसाइट नहीं खुल रही", "कुछ देर बाद दोबारा कोशिश करें; ज़रूरी हो तो ज़िला कार्यालय जाएं"],
      ] },
    },
    {
      id: "naukri",
      title: "नौकरी खोजने के और सरकारी रास्ते",
      list: [
        "<strong>National Career Service (NCS):</strong> केंद्र सरकार का पोर्टल <a href=\"https://www.ncs.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ncs.gov.in</a>; टोल-फ्री हेल्पलाइन <strong>1514</strong>।",
        "<strong>सरकारी भर्तियां:</strong> JSSC, JPSC, झारखंड पुलिस, SSC, रेलवे जैसी भर्तियों में आवेदन उनकी अपनी वेबसाइट पर होता है।",
        "<strong>नई भर्तियां:</strong> हमारे <a href=\"/jobs/index.html\">नौकरी पेज</a> और <a href=\"/exams/index.html\">Exam Calendar</a> पर देखें।",
      ],
    },
  ],
  official: [
    { href: "https://rojgar.jharkhand.gov.in/", title: "रोज़गार पोर्टल, झारखंड सरकार" },
    { href: "https://palamu.nic.in/service/employment-exchange-registration/", title: "Employment Exchange Registration (ज़िला पलामू)" },
    { href: "https://www.jharkhand.gov.in/labour", title: "श्रम, नियोजन, प्रशिक्षण एवं कौशल विकास विभाग" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service (केंद्र सरकार)" },
  ],
  faq: [
    { q: "झारखंड में रोज़गार कार्यालय में ऑनलाइन नाम कैसे दर्ज करें?", a: "rojgar.jharkhand.gov.in पर NEW JOBSEEKER से रजिस्ट्रेशन करें। पुराना पोर्टल jharkhandrojgar.nic.in फरवरी 2021 में बंद बताया गया है।" },
    { q: "क्या रोज़गार मेला होता है?", a: "विभाग के अनुसार सभी ज़िलों में हर तिमाही रोज़गार मेला आयोजित होता है। तारीख़ ज़िला रोज़गार कार्यालय या ज़िला वेबसाइट से पता करें।" },
    { q: "क्या रोज़गार पंजीकरण की फीस है?", a: "फीस के बारे में हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल या कार्यालय जो बताए वही मानें और किसी एजेंट को पैसे न दें।" },
    { q: "क्या झारखंड में बेरोज़गारी भत्ता मिलता है?", a: "इसकी कोई पुष्ट आधिकारिक जानकारी हमें नहीं मिली, इसलिए राशि नहीं लिखी गई। ज़िला रोज़गार कार्यालय से पूछें।" },
    { q: "क्या रोज़गार कार्यालय से सरकारी नौकरी अपने-आप मिलती है?", a: "नहीं। पंजीकरण से आप वैकेंसी, मेलों और प्रशिक्षण की जानकारी से जुड़ते हैं। JSSC, JPSC जैसी भर्तियों में अलग से आवेदन करना होता है।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड निवास प्रमाण पत्र", text: "निवास के कागज़" },
    { href: "/states/jharkhand-caste-certificate.html", emoji: "📜", title: "झारखंड जाति प्रमाण पत्र", text: "श्रेणी का प्रमाण पत्र" },
    { href: "/exams/index.html", emoji: "📅", title: "Exam Calendar", text: "SSC, Railway, Bank की तारीखें" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर सही उम्र" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Signature Resizer", text: "फॉर्म के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में रोज़गार कार्यालय पंजीकरण",
  aside: [
    { href: "https://rojgar.jharkhand.gov.in/", label: "📝 rojgar.jharkhand.gov.in" },
    { href: "/jobs/index.html", label: "🎯 नई सरकारी नौकरियां" },
  ],
};
