import type { Letter } from "../types";

// Private-sector / walk-in / small-employer biodata. Government recruitments
// use their own online form and do not take a self-made biodata.
// Keyword research (OpenSEO, India, 18 Nov 2026): "biodata format for job"
// 18,100/mo, "biodata sample format for job" 18,100, "...pdf" 2,400,
// "...in word" 1,600, "simple biodata format for job" 590, KD 0.
export const jobBiodataFormat: Letter = {
  slug: "job-biodata-format",
  category: "job",
  emoji: "💼",
  title: "Biodata Format for Job in Hindi & English 2026: नौकरी के लिए बायोडाटा (PDF, Word)",
  description: "नौकरी के लिए सरल बायोडाटा का फ्री फॉर्मेट, हिंदी/English में। फॉर्म भरें, प्रिंट/PDF करें या Word में कॉपी करें। फ्रेशर और अनुभवी दोनों के लिए।",
  h1: "नौकरी के लिए बायोडाटा का फॉर्मेट (Biodata Format for Job) 2026",
  short: { hi: "नौकरी का बायोडाटा", en: "Job biodata" },
  lead: "<strong>नौकरी का बायोडाटा</strong> एक पन्ने का परिचय-पत्र है जिसमें आपकी <strong>पढ़ाई, अनुभव, हुनर और संपर्क</strong> लिखे होते हैं। दुकान, फैक्ट्री, स्कूल, अस्पताल, होटल या वॉक-इन इंटरव्यू में अक्सर यही मांगा जाता है। नीचे फॉर्म भरें और तैयार बायोडाटा प्रिंट/PDF करें या Word में कॉपी करें। ध्यान रखें: <strong>सरकारी भर्ती में बायोडाटा नहीं, भर्ती का अपना ऑनलाइन फॉर्म</strong> भरा जाता है; बड़ी कंपनियां अक्सर रिज्यूमे (Resume) मांगती हैं।",
  facts: [
    ["किसके लिए", "दुकान, फैक्ट्री, स्कूल, अस्पताल, होटल, वॉक-इन इंटरव्यू"],
    ["सरकारी भर्ती में", "बायोडाटा नहीं; भर्ती का अपना ऑनलाइन फॉर्म भरें"],
    ["लंबाई", "1 पन्ना (A4), साथ में 1 पासपोर्ट साइज़ फोटो"],
    ["बायोडाटा बनाम रिज्यूमे", "बायोडाटा में निजी जानकारी ज़्यादा; रिज्यूमे में काम और उपलब्धि पर ज़ोर"],
  ],
  to: "जिस मालिक, मैनेजर या HR को इंटरव्यू या आवेदन के साथ देना है। ईमेल से भेजना हो तो PDF बनाकर भेजें।",
  when: [
    "वॉक-इन इंटरव्यू या स्थानीय नौकरी (दुकान, फैक्ट्री, होटल, हॉस्पिटल) के लिए",
    "अख़बार या WhatsApp पर निकली भर्ती में बायोडाटा मांगा गया हो",
    "पहली नौकरी के लिए, जब अभी कोई अनुभव न हो",
    "प्राइवेट स्कूल/कोचिंग में शिक्षक की नौकरी के लिए",
  ],
  fields: [
    { key: "name", label: { hi: "पूरा नाम", en: "Full name" }, required: true },
    { key: "post", label: { hi: "किस पद के लिए", en: "Post applied for" }, placeholder: { hi: "जैसे: सेल्स एक्ज़ीक्यूटिव / शिक्षक / कंप्यूटर ऑपरेटर", en: "e.g. Sales executive / Teacher / Computer operator" } },
    { key: "father", label: { hi: "पिता का नाम", en: "Father's name" } },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, type: "date", required: true },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea", required: true },
    { key: "mobile", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "email", label: { hi: "ईमेल", en: "Email" } },
    { key: "education", label: { hi: "पढ़ाई (हर लाइन में एक)", en: "Education (one per line)" }, type: "textarea", required: true, placeholder: { hi: "10वीं – CBSE – 2019 – 74%\n12वीं – UP बोर्ड – 2021 – 68%\nBA – 2024 – 61%", en: "10th – CBSE – 2019 – 74%\n12th – UP Board – 2021 – 68%\nBA – 2024 – 61%" } },
    { key: "experience", label: { hi: "अनुभव (कंपनी, पद, कितने समय)", en: "Experience (company, post, duration)" }, type: "textarea", placeholder: { hi: "फ्रेशर हों तो लिखें: अनुभव नहीं (फ्रेशर)", en: "If fresher, write: No experience (fresher)" } },
    { key: "skills", label: { hi: "हुनर (कंप्यूटर, टाइपिंग, भाषा, सिलाई आदि)", en: "Skills (computer, typing, languages etc.)" }, type: "textarea" },
    { key: "languages", label: { hi: "भाषाएं", en: "Languages known" }, placeholder: { hi: "हिंदी, English", en: "Hindi, English" } },
    { key: "strength", label: { hi: "खूबी / शौक (छोटे में)", en: "Strengths / hobbies (brief)" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `बायोडाटा

पद: {{post}}

नाम: {{name}}
पिता का नाम: {{father}}
जन्म तिथि: {{dob}}
पता: {{address}}
मोबाइल: {{mobile}}
ईमेल: {{email}}

शैक्षणिक योग्यता
{{education}}

कार्य अनुभव
{{experience}}

हुनर / तकनीकी जानकारी
{{skills}}

भाषाएं: {{languages}}
खूबी / शौक: {{strength}}

घोषणा
मैं घोषणा करता/करती हूं कि ऊपर दी गई सारी जानकारी मेरी जानकारी में सही है।

स्थान: {{place}}
दिनांक: {{date}}
हस्ताक्षर: ________
({{name}})`,
    en: `BIODATA

Post applied for: {{post}}

Name: {{name}}
Father's name: {{father}}
Date of birth: {{dob}}
Address: {{address}}
Mobile: {{mobile}}
Email: {{email}}

Educational qualification
{{education}}

Work experience
{{experience}}

Skills
{{skills}}

Languages known: {{languages}}
Strengths / hobbies: {{strength}}

Declaration
I declare that all the information given above is true to the best of my knowledge.

Place: {{place}}
Date: {{date}}
Signature: ________
({{name}})`,
  },
  attach: [
    "1 पासपोर्ट साइज़ फोटो; ऑनलाइन भेजना हो तो <a href=\"/tools/photo-resizer.html\">Photo Resizer</a> से उसे सही KB में बदलें",
    "पढ़ाई की मार्कशीट/डिग्री की कॉपी (स्व-प्रमाणित)",
    "अनुभव पत्र (Experience Certificate), अगर पहले काम किया हो",
    "पहचान पत्र की कॉपी (आधार/वोटर ID); देने से पहले पूछ लें कि कंपनी को असल में चाहिए या नहीं",
  ],
  submit: [
    "फॉर्म भरें और \"प्रिंट / PDF\" दबाकर 1 पन्ने का बायोडाटा बना लें; ईमेल या WhatsApp पर भेजना हो तो PDF ही भेजें।",
    "इंटरव्यू में 2-3 कॉपी, फोटो और असली कागज़ साथ रखें।",
    "भेजने से पहले मोबाइल नंबर और ईमेल दोबारा जांचें; गलत नंबर पर कंपनी का फोन नहीं पहुंचेगा।",
    "सरकारी भर्ती के लिए इसका इस्तेमाल न करें; उसमें उस भर्ती का अपना ऑनलाइन फॉर्म और नोटिफिकेशन देखें।",
  ],
  tips: [
    "जो पद चाहिए, उसी का नाम ऊपर लिखें। हर नौकरी के लिए बायोडाटा में पद बदल लें।",
    "फ्रेशर हों तो पढ़ाई, कोर्स, कंप्यूटर/टाइपिंग और भाषा पर ज़ोर दें; \"अनुभव नहीं\" साफ लिख दें।",
    "ईमेल का पता सीधा-सादा रखें (नाम वाला); मज़ाकिया पते से बुरा असर पड़ता है।",
    "जो बात सच नहीं है, न लिखें। इंटरव्यू या जांच में पकड़ी जाती है और नौकरी जा सकती है।",
    "कोई भी नौकरी देने के नाम पर रजिस्ट्रेशन या \"सिक्योरिटी\" फीस मांगे तो सावधान रहें; सही कंपनी ऐसा नहीं करती।",
  ],
  notice: "सरकारी भर्ती (SSC, रेलवे, बैंक, राज्य भर्ती) में बायोडाटा नहीं चलता। उसमें <strong>भर्ती की ऑनलाइन अर्ज़ी</strong> भरनी होती है; <a href=\"/jobs/\">चालू सरकारी भर्तियां यहां देखें</a>।",
  tools: [
    { href: "/jobs/", emoji: "💼", title: "सरकारी नौकरी 2026", text: "चालू भर्तियां, आखिरी तारीख और योग्यता" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "Photo Resizer", text: "फोटो का आकार और KB घटाएं" },
    { href: "/tools/signature-resizer.html", emoji: "✒️", title: "Signature Resizer", text: "हस्ताक्षर की फाइल सही साइज़ में" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "Document Compressor", text: "PDF/फोटो फाइल छोटी करें" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "Typing Speed Test", text: "अपनी टाइपिंग स्पीड जांचें" },
    { href: "/tools/document-checklist.html", emoji: "✅", title: "Document Checklist", text: "नौकरी और योजना के कागज़ों की सूची" },
    { href: "/arzi/experience-certificate-request.html", emoji: "📄", title: "अनुभव पत्र का आवेदन", text: "पुरानी कंपनी से Experience Letter मांगने का फॉर्मेट" },
  ],
  related: [],
  faq: [
    { q: "नौकरी के बायोडाटा में क्या-क्या लिखना चाहिए?", a: "नाम, पिता का नाम, जन्म तिथि, पता, मोबाइल/ईमेल, पढ़ाई, अनुभव, हुनर, भाषाएं, घोषणा और हस्ताक्षर। साथ में पद का नाम और पासपोर्ट साइज़ फोटो रखें।" },
    { q: "बायोडाटा और रिज्यूमे में क्या फर्क है?", a: "बायोडाटा में निजी जानकारी (पिता का नाम, जन्म तिथि, पता) ज़्यादा होती है। रिज्यूमे में आपका काम, उपलब्धि और हुनर पर ज़ोर होता है और अक्सर निजी जानकारी कम होती है। स्थानीय नौकरियों में बायोडाटा चलता है; बड़ी कंपनी में रिज्यूमे बेहतर रहता है।" },
    { q: "फ्रेशर का बायोडाटा कैसा हो?", a: "पढ़ाई सबसे ऊपर रखें, फिर कोर्स, कंप्यूटर/टाइपिंग, भाषा और खूबियां। अनुभव की जगह \"अनुभव नहीं (फ्रेशर)\" लिखें। एक पन्ने में रखें।" },
    { q: "बायोडाटा Word या PDF में कैसे बनाएं?", a: "इस पेज पर फॉर्म भरें। PDF के लिए \"प्रिंट / PDF\" दबाकर \"PDF के रूप में सहेजें\" चुनें। Word के लिए \"कॉपी करें\" दबाकर Word में चिपकाएं और अपने ढंग से सजाएं।" },
    { q: "क्या सरकारी नौकरी के लिए बायोडाटा देना होता है?", a: "नहीं। सरकारी भर्ती में उस भर्ती का अपना ऑनलाइन फॉर्म भरते हैं और नोटिफिकेशन में लिखे कागज़ लगाते हैं। बायोडाटा सामान्यतः प्राइवेट या स्थानीय नौकरी में चलता है।" },
    { q: "बायोडाटा में फोटो लगाना ज़रूरी है?", a: "अधिकतर स्थानीय नौकरियों में पासपोर्ट साइज़ फोटो मांगी जाती है। बड़ी कंपनियों में कई बार ज़रूरी नहीं होती। विज्ञापन में जो लिखा हो, वही करें।" },
    { q: "नौकरी के नाम पर पैसे मांगे तो क्या करें?", a: "रजिस्ट्रेशन, ट्रेनिंग या सिक्योरिटी के नाम पर फीस मांगने वाली नौकरी से सावधान रहें। पैसा देने से पहले कंपनी का पता और संपर्क खुद जांचें; ठगी हो जाए तो cybercrime.gov.in या हेल्पलाइन 1930 पर शिकायत करें।" },
  ],
  official: [
    { href: "https://www.ncs.gov.in/", title: "राष्ट्रीय करियर सेवा (NCS) पोर्टल", note: "सरकार का नौकरी पोर्टल: प्राइवेट और सरकारी नौकरी खोजें" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "ठगी की शिकायत; हेल्पलाइन 1930" },
  ],
  published: "2026-11-18",
  modified: "2026-11-18",
  verified: "18 नवंबर 2026",
};
