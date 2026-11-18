import type { Letter } from "../types";

// Keyword research (OpenSEO, India, 18 Nov 2026): "resume format for
// freshers" 33,100/mo (KD 9), "resume format for it freshers" 33,100,
// "resume format for freshers example" 6,600, "...pdf" 1,900, "...in word"
// 1,900, "career objective for resume for fresher" 8,100 (KD 0).
export const resumeFormatForFreshers: Letter = {
  slug: "resume-format-for-freshers",
  category: "job",
  emoji: "📄",
  title: "Resume Format for Freshers 2026: बिना अनुभव का रिज्यूमे (PDF, Word, ATS फ्रेंडली)",
  description: "फ्रेशर के लिए सरल रिज्यूमे फॉर्मेट, हिंदी/English में। Career objective, पढ़ाई, प्रोजेक्ट, हुनर भरें; ATS फ्रेंडली एक पन्ने का रिज्यूमे PDF/Word में बनाएं।",
  h1: "फ्रेशर के लिए रिज्यूमे फॉर्मेट (Resume Format for Freshers) 2026",
  short: { hi: "फ्रेशर रिज्यूमे", en: "Fresher resume" },
  lead: "<strong>फ्रेशर का रिज्यूमे</strong> एक पन्ने का होना चाहिए, जिसमें सबसे ऊपर <strong>नाम और संपर्क</strong>, फिर <strong>करियर ऑब्जेक्टिव</strong>, <strong>पढ़ाई</strong>, <strong>प्रोजेक्ट/इंटर्नशिप</strong>, <strong>हुनर</strong> और <strong>उपलब्धियां</strong> हों। अनुभव न हो तो चिंता नहीं; पढ़ाई, प्रोजेक्ट, कोर्स और हुनर से ही रिज्यूमे मज़बूत बनता है। नीचे का फॉर्म भरें, सादा और ATS फ्रेंडली (सॉफ्टवेयर आसानी से पढ़ सके, ऐसा) रिज्यूमे तैयार होगा। इसे प्रिंट/PDF करें या Word में कॉपी करें।",
  facts: [
    ["लंबाई", "1 पन्ना (A4); फ्रेशर के लिए 2 पन्ने ज़रूरी नहीं"],
    ["क्रम", "नाम/संपर्क → ऑब्जेक्टिव → पढ़ाई → प्रोजेक्ट/इंटर्नशिप → हुनर → उपलब्धि"],
    ["ATS फ्रेंडली", "सादा टेक्स्ट, साफ हेडिंग, टेबल/तस्वीर कम, PDF"],
    ["फोटो", "भारत की ज़्यादातर प्राइवेट नौकरी में ज़रूरी नहीं; विज्ञापन में लिखा हो तो लगाएं"],
  ],
  to: "जिस कंपनी, HR या भर्ती पोर्टल (जैसे Naukri, LinkedIn) पर आवेदन कर रहे हैं। ईमेल से भेजते समय PDF भेजें और फाइल का नाम \"नाम_Resume.pdf\" रखें।",
  when: [
    "कॉलेज खत्म होने के बाद पहली नौकरी या कैंपस प्लेसमेंट के लिए",
    "इंटर्नशिप के लिए आवेदन",
    "प्राइवेट कंपनी, BPO, IT, बैंकिंग-फाइनेंस, मार्केटिंग जैसी जगह पर आवेदन",
    "Naukri/LinkedIn जैसे पोर्टल पर प्रोफाइल बनाते समय रिज्यूमे अपलोड करने के लिए",
  ],
  fields: [
    { key: "name", label: { hi: "पूरा नाम", en: "Full name" }, required: true },
    { key: "mobile", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "email", label: { hi: "ईमेल", en: "Email" }, required: true },
    { key: "city", label: { hi: "शहर, राज्य", en: "City, state" }, required: true },
    { key: "link", label: { hi: "LinkedIn / GitHub / पोर्टफोलियो लिंक (चाहें तो)", en: "LinkedIn / GitHub / portfolio link (optional)" } },
    { key: "objective", label: { hi: "करियर ऑब्जेक्टिव (2 लाइन)", en: "Career objective (2 lines)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: B.Com पास फ्रेशर, अकाउंटिंग और Excel में रुचि; कंपनी में सीखते हुए सटीक काम करना चाहता/चाहती हूं।", en: "e.g. B.Com graduate with interest in accounting and Excel, looking to learn and contribute accurately." } },
    { key: "education", label: { hi: "पढ़ाई (हर लाइन में एक, सबसे नई पहले)", en: "Education (one per line, latest first)" }, type: "textarea", required: true, placeholder: { hi: "B.Com – दिल्ली विश्वविद्यालय – 2024 – 68%\n12वीं – CBSE – 2021 – 82%", en: "B.Com – Delhi University – 2024 – 68%\n12th – CBSE – 2021 – 82%" } },
    { key: "projects", label: { hi: "प्रोजेक्ट / इंटर्नशिप (क्या किया, कितने समय)", en: "Projects / internship (what you did, duration)" }, type: "textarea", placeholder: { hi: "जैसे: कॉलेज प्रोजेक्ट – 50 दुकानों के बिल का Excel विश्लेषण (3 महीने)", en: "e.g. College project – Excel analysis of 50 shop bills (3 months)" } },
    { key: "skills", label: { hi: "हुनर (कंप्यूटर, सॉफ्टवेयर, टाइपिंग, भाषा)", en: "Skills (computer, software, typing, languages)" }, type: "textarea", required: true, placeholder: { hi: "MS Excel, Tally, टाइपिंग 35 WPM, संवाद कौशल", en: "MS Excel, Tally, typing 35 WPM, communication" } },
    { key: "achievements", label: { hi: "उपलब्धियां / सर्टिफिकेट / कोर्स", en: "Achievements / certificates / courses" }, type: "textarea" },
    { key: "languages", label: { hi: "भाषाएं", en: "Languages" }, placeholder: { hi: "हिंदी, English", en: "Hindi, English" } },
  ],
  template: {
    hi: `{{name}}
मोबाइल: {{mobile}} | ईमेल: {{email}} | शहर: {{city}}
लिंक: {{link}}

करियर ऑब्जेक्टिव
{{objective}}

शिक्षा
{{education}}

प्रोजेक्ट / इंटर्नशिप
{{projects}}

हुनर
{{skills}}

उपलब्धियां / सर्टिफिकेट
{{achievements}}

भाषाएं
{{languages}}

घोषणा
मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी मेरी जानकारी में सही है।`,
    en: `{{name}}
Mobile: {{mobile}} | Email: {{email}} | City: {{city}}
Link: {{link}}

CAREER OBJECTIVE
{{objective}}

EDUCATION
{{education}}

PROJECTS / INTERNSHIP
{{projects}}

SKILLS
{{skills}}

ACHIEVEMENTS / CERTIFICATES
{{achievements}}

LANGUAGES
{{languages}}

DECLARATION
I declare that the information given above is true to the best of my knowledge.`,
  },
  attach: [
    "आवेदन में रिज्यूमे PDF के रूप में लगाएं; फाइल भारी हो तो <a href=\"/tools/document-compressor.html\">Document Compressor</a> से घटा लें",
    "कवर लेटर या आवेदन ईमेल (2-3 लाइन में कि आप किस पद के लिए और क्यों आवेदन कर रहे हैं)",
    "सर्टिफिकेट/मार्कशीट की स्कैन कॉपी, जब कंपनी मांगे (हर आवेदन के साथ अपने आप न भेजें)",
    "विज्ञापन में फोटो मांगी हो तो <a href=\"/tools/photo-resizer.html\">Photo Resizer</a> से सही साइज़ की फोटो",
  ],
  submit: [
    "फॉर्म भरें; जो हिस्सा आपके पास नहीं है (जैसे प्रोजेक्ट), उसे खाली छोड़ सकते हैं।",
    "\"प्रिंट / PDF\" दबाकर PDF बनाएं, या \"कॉपी करें\" दबाकर Word/Google Docs में चिपकाकर अपने ढंग से सजाएं।",
    "हर आवेदन के लिए ऑब्जेक्टिव और हुनर में विज्ञापन के शब्द जोड़ें; जैसे विज्ञापन में \"Excel\" लिखा हो तो आपके हुनर में भी \"Excel\" दिखे।",
    "ईमेल करें तो विषय में पद का नाम लिखें, जैसे \"Application for Accounts Executive – आपका नाम\"।",
  ],
  tips: [
    "<strong>एक पन्ना, साफ फॉन्ट।</strong> Arial/Calibri जैसे सादे फॉन्ट और 10-12 आकार रखें।",
    "ऑब्जेक्टिव में \"मुझे अच्छी कंपनी चाहिए\" जैसी बातें नहीं; लिखें कि आप क्या कर सकते हैं और क्या सीखना चाहते हैं।",
    "फ्रेशर हों तो प्रोजेक्ट, इंटर्नशिप और कोर्स में किए हुए काम के <strong>आंकड़े</strong> डालें (जैसे \"50 बिल\", \"3 महीने\")।",
    "सब झूठे हुनर न लिखें। इंटरव्यू में जो आता है, वही लिखें।",
    "ATS के लिए सादा टेक्स्ट रखें; ज़्यादा टेबल, कॉलम, तस्वीरें और रंगीन डिज़ाइन से कुछ सॉफ्टवेयर जानकारी ठीक से नहीं पढ़ पाते।",
    "आधार/पैन नंबर और पूरा घर का पता रिज्यूमे में न लिखें; शहर और राज्य काफी है।",
  ],
  notice: "सरकारी भर्ती में रिज्यूमे नहीं चलता; उसमें भर्ती का अपना ऑनलाइन फॉर्म भरा जाता है (<a href=\"/jobs/\">चालू भर्तियां</a>)। यह फॉर्मेट प्राइवेट कंपनी, इंटर्नशिप और पोर्टल आवेदन के लिए है।",
  tools: [
    { href: "/arzi/job-biodata-format.html", emoji: "💼", title: "नौकरी का बायोडाटा", text: "सरल बायोडाटा फॉर्मेट, स्थानीय नौकरी के लिए" },
    { href: "/jobs/", emoji: "🧑‍💼", title: "सरकारी नौकरी 2026", text: "चालू भर्तियां, आखिरी तारीख और योग्यता" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "Typing Speed Test", text: "अपनी टाइपिंग स्पीड जांचें और रिज्यूमे में लिखें" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "Photo Resizer", text: "फोटो का आकार और KB घटाएं" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "Document Compressor", text: "PDF/फोटो फाइल छोटी करें" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "Age Calculator", text: "आवेदन की उम्र सीमा जांचें" },
    { href: "/tools/eligibility-checker.html", emoji: "🔍", title: "Eligibility Checker", text: "योजना की पात्रता जांचें" },
  ],
  related: [],
  faq: [
    { q: "फ्रेशर के लिए रिज्यूमे में क्या-क्या लिखें?", a: "नाम और संपर्क, करियर ऑब्जेक्टिव, पढ़ाई, प्रोजेक्ट/इंटर्नशिप, हुनर, उपलब्धियां/सर्टिफिकेट और भाषाएं। अनुभव न हो तो पढ़ाई और प्रोजेक्ट पर ज़ोर दें।" },
    { q: "बिना अनुभव का रिज्यूमे कैसे बनाएं?", a: "पढ़ाई सबसे ऊपर रखें, फिर कॉलेज प्रोजेक्ट, कोर्स, इंटर्नशिप, वॉलंटियर काम और हुनर। \"अनुभव नहीं\" लिखने की ज़रूरत नहीं; बस वह सेक्शन छोड़ दें और बाकी को मज़बूत बनाएं।" },
    { q: "रिज्यूमे कितने पन्ने का होना चाहिए?", a: "फ्रेशर के लिए 1 पन्ना काफी है। कम अनुभव में 2 पन्ने भरना आमतौर पर ज़रूरी नहीं होता।" },
    { q: "ATS फ्रेंडली रिज्यूमे क्या होता है?", a: "ATS (Applicant Tracking System) वह सॉफ्टवेयर है जो कई कंपनियां रिज्यूमे छांटने के लिए इस्तेमाल करती हैं। ऐसा रिज्यूमे सादे फॉन्ट, साफ हेडिंग और कम टेबल/तस्वीर वाला होता है, ताकि सॉफ्टवेयर जानकारी सही पढ़ सके। साथ में विज्ञापन के ज़रूरी शब्द हुनर में रखें।" },
    { q: "रिज्यूमे PDF में भेजें या Word में?", a: "आमतौर पर PDF भेजना बेहतर है, क्योंकि उसका ढांचा नहीं बिगड़ता। कंपनी Word फाइल मांगे तो वही दें। इस पेज से \"प्रिंट / PDF\" या \"कॉपी करें\" दोनों रास्ते हैं।" },
    { q: "रिज्यूमे में फोटो लगानी चाहिए?", a: "भारत में ज़्यादातर प्राइवेट नौकरी में ज़रूरी नहीं। कुछ पद (जैसे होटल, रिसेप्शन, एयरलाइन) में मांगी जाती है। विज्ञापन में लिखा हो तो लगाएं; वरना आप चाहें तो बिना फोटो भेज सकते हैं।" },
    { q: "बायोडाटा और रिज्यूमे में कौन सा भेजूं?", a: "स्थानीय या छोटे व्यवसाय की नौकरी में बायोडाटा चलता है। IT, कॉर्पोरेट और ऑनलाइन पोर्टल पर रिज्यूमे बेहतर रहता है। अगर पक्का न पता हो तो रिज्यूमे बनाएं।" },
  ],
  official: [
    { href: "https://www.ncs.gov.in/", title: "राष्ट्रीय करियर सेवा (NCS) पोर्टल", note: "सरकार का नौकरी पोर्टल: प्राइवेट और सरकारी नौकरी खोजें" },
  ],
  published: "2026-11-18",
  modified: "2026-11-18",
  verified: "18 नवंबर 2026",
};
