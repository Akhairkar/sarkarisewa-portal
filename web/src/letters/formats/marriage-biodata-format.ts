import type { Letter } from "../types";

// Not a government document: a family-use profile sheet. No legal or
// fee claims are made here. Keyword research (OpenSEO, India, 18 Nov 2026):
// "biodata format for marriage" 27,100/mo, "...template" 60,500, "...pdf"
// 4,400, "...doc" 1,900, "marriage biodata format download" 1,000, all KD <= 5.
export const marriageBiodataFormat: Letter = {
  slug: "marriage-biodata-format",
  category: "personal",
  emoji: "💍",
  title: "Marriage Biodata Format in Hindi & English 2026: शादी के लिए बायोडाटा (PDF, Word)",
  description: "शादी के लिए बायोडाटा का फ्री फॉर्मेट, हिंदी/English में। अपनी जानकारी भरें, प्रिंट/PDF करें या कॉपी करके Word में डालें। क्या लिखें, क्या न लिखें भी जानें।",
  h1: "शादी के लिए बायोडाटा का फॉर्मेट (Marriage Biodata Format) 2026",
  short: { hi: "शादी का बायोडाटा", en: "Marriage biodata" },
  lead: "<strong>शादी का बायोडाटा</strong> एक पन्ने की जानकारी-शीट है, जो रिश्ता देखते समय लड़के/लड़की के परिवार को दी जाती है। इसमें <strong>नाम, जन्म तिथि, कद, पढ़ाई, काम, परिवार और संपर्क</strong> जैसी बातें होती हैं। नीचे फॉर्म भरें, आपका बायोडाटा तुरंत बन जाएगा; उसे प्रिंट/PDF करें, कॉपी करके Word में डालें या WhatsApp पर भेजें। यह किसी सरकारी विभाग का कागज़ नहीं है, इसलिए कोई तय सरकारी फॉर्मेट नहीं है; बस साफ, सच्ची और छोटी जानकारी रखें।",
  facts: [
    ["यह क्या है", "रिश्ते के लिए परिवार को दी जाने वाली जानकारी-शीट"],
    ["सरकारी फॉर्मेट?", "नहीं; कोई तय फॉर्मेट नहीं, साफ और सच्ची जानकारी ज़रूरी"],
    ["लंबाई", "आमतौर पर 1 पन्ना (A4), साथ में 1 साफ फोटो"],
    ["कैसे बनाएं", "नीचे फॉर्म भरें → प्रिंट/PDF, कॉपी या WhatsApp"],
  ],
  to: "जिस परिवार या रिश्ता कराने वाले व्यक्ति को भेजना है। पहली बार किसी अनजान को भेजते समय पूरा पता और आधार जैसे कागज़ की जानकारी न दें।",
  when: [
    "रिश्ता देखने के लिए परिवार या रिश्तेदार को जानकारी भेजना",
    "पंडित/रिश्ता कराने वाले व्यक्ति या सामाजिक समूह में प्रोफाइल देना",
    "परिचय सम्मेलन या समाज की पुस्तिका में प्रोफाइल देना",
    "मैचमेकिंग वेबसाइट या ऐप पर अपनी जानकारी लिखने से पहले मसौदा बनाना",
  ],
  fields: [
    { key: "name", label: { hi: "पूरा नाम", en: "Full name" }, required: true },
    { key: "gender", label: { hi: "लिंग", en: "Gender" }, type: "select", options: [{ hi: "पुरुष", en: "Male" }, { hi: "महिला", en: "Female" }] },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, type: "date", required: true },
    { key: "birthtime", label: { hi: "जन्म समय (अगर कुंडली मिलानी हो)", en: "Birth time (if horoscope is needed)" }, placeholder: { hi: "जैसे: सुबह 6:15", en: "e.g. 6:15 AM" } },
    { key: "birthplace", label: { hi: "जन्म स्थान", en: "Place of birth" } },
    { key: "height", label: { hi: "कद", en: "Height" }, placeholder: { hi: "जैसे: 5 फुट 8 इंच", en: "e.g. 5 ft 8 in" } },
    { key: "religion", label: { hi: "धर्म / समाज (चाहें तो)", en: "Religion / community (optional)" } },
    { key: "gotra", label: { hi: "गोत्र / कुल (चाहें तो)", en: "Gotra (optional)" } },
    { key: "manglik", label: { hi: "मांगलिक (अगर बताना चाहें)", en: "Manglik (if you wish to state)" }, placeholder: { hi: "जैसे: नहीं", en: "e.g. No" } },
    { key: "education", label: { hi: "पढ़ाई", en: "Education" }, type: "textarea", required: true, placeholder: { hi: "जैसे: B.Com, 2022, दिल्ली विश्वविद्यालय", en: "e.g. B.Com, 2022, Delhi University" } },
    { key: "work", label: { hi: "काम / नौकरी / व्यवसाय", en: "Occupation" }, type: "textarea", placeholder: { hi: "जैसे: सहायक प्रबंधक, ABC कंपनी, जयपुर", en: "e.g. Assistant manager, ABC Ltd, Jaipur" } },
    { key: "income", label: { hi: "सालाना आय (चाहें तो)", en: "Annual income (optional)" } },
    { key: "father", label: { hi: "पिता का नाम और काम", en: "Father's name and occupation" }, required: true },
    { key: "mother", label: { hi: "माता का नाम और काम", en: "Mother's name and occupation" } },
    { key: "siblings", label: { hi: "भाई-बहन", en: "Siblings" }, placeholder: { hi: "जैसे: 1 बड़ा भाई (विवाहित), 1 छोटी बहन (पढ़ाई)", en: "e.g. 1 elder brother (married), 1 younger sister (student)" } },
    { key: "city", label: { hi: "वर्तमान शहर / ज़िला", en: "Current city / district" }, required: true },
    { key: "hobbies", label: { hi: "शौक और स्वभाव", en: "Hobbies and nature" }, type: "textarea" },
    { key: "expect", label: { hi: "जीवनसाथी से अपेक्षा (छोटे में)", en: "What you look for in a partner (brief)" }, type: "textarea" },
    { key: "contact", label: { hi: "संपर्क के लिए नाम और मोबाइल (परिवार के सदस्य का)", en: "Contact person and mobile (family member)" }, type: "tel", required: true },
  ],
  template: {
    hi: `॥ शादी का बायोडाटा ॥

व्यक्तिगत जानकारी
नाम: {{name}}
लिंग: {{gender}}
जन्म तिथि: {{dob}}
जन्म समय: {{birthtime}}
जन्म स्थान: {{birthplace}}
कद: {{height}}
धर्म/समाज: {{religion}}
गोत्र: {{gotra}}
मांगलिक: {{manglik}}

शिक्षा और काम
पढ़ाई: {{education}}
काम/व्यवसाय: {{work}}
सालाना आय: {{income}}

पारिवारिक जानकारी
पिता: {{father}}
माता: {{mother}}
भाई-बहन: {{siblings}}
वर्तमान शहर/ज़िला: {{city}}

शौक और स्वभाव
{{hobbies}}

जीवनसाथी से अपेक्षा
{{expect}}

संपर्क
{{contact}}`,
    en: `|| Marriage Biodata ||

Personal details
Name: {{name}}
Gender: {{gender}}
Date of birth: {{dob}}
Time of birth: {{birthtime}}
Place of birth: {{birthplace}}
Height: {{height}}
Religion/community: {{religion}}
Gotra: {{gotra}}
Manglik: {{manglik}}

Education and work
Education: {{education}}
Occupation: {{work}}
Annual income: {{income}}

Family details
Father: {{father}}
Mother: {{mother}}
Siblings: {{siblings}}
Current city/district: {{city}}

Hobbies and nature
{{hobbies}}

Expectations from partner
{{expect}}

Contact
{{contact}}`,
  },
  attach: [
    "एक साफ, हाल की फोटो (चेहरा साफ दिखे); फोटो फाइल भारी हो तो <a href=\"/tools/photo-resizer.html\">Photo Resizer</a> से छोटी करें",
    "ज़रूरत हो तो कुंडली की कॉपी (केवल तब, जब दोनों परिवार मिलान चाहते हों)",
    "बायोडाटा PDF में भेजना हो तो <a href=\"/tools/document-compressor.html\">Document Compressor</a> से फाइल का आकार घटाएं",
  ],
  submit: [
    "ऊपर फॉर्म भरें; जो जानकारी देना नहीं चाहते, उसे खाली छोड़ दें (वह खाली लाइन की तरह दिखेगी)।",
    "\"प्रिंट / PDF\" दबाकर एक पन्ने का PDF बनाएं, या \"कॉपी करें\" दबाकर Word/Google Docs में चिपकाकर अपने ढंग से सजाएं।",
    "पहले अपने परिवार के बड़ों से एक बार पढ़वा लें; तारीख, कद और नाम की स्पेलिंग दोबारा जांच लें।",
    "भेजते समय सिर्फ ज़रूरी जानकारी दें। पूरा पता, आधार/पैन नंबर या बैंक की जानकारी रिश्ता तय होने से पहले कभी न भेजें।",
  ],
  tips: [
    "<strong>सच लिखें।</strong> आय, पढ़ाई, उम्र या शादी की स्थिति (पहली/दूसरी शादी) छुपाने से बाद में रिश्ता टूटता है।",
    "एक पन्ने में रखें। बहुत लंबा बायोडाटा कोई पूरा नहीं पढ़ता।",
    "फोटो असली और हाल की रखें; ज़्यादा एडिट या फिल्टर वाली फोटो से भरोसा घटता है।",
    "संपर्क के लिए परिवार के किसी बड़े का नंबर लिखें, और अनजान लोगों को सीधे पैसे या कागज़ न भेजें। शादी के नाम पर ठगी के मामले होते हैं, इसलिए मिले बिना कोई लेन-देन न करें।",
    "जाति/गोत्र/कुंडली की जानकारी देना आपकी मर्ज़ी है; जहां ज़रूरी न हो, वहां खाली छोड़ सकते हैं।",
  ],
  notice: "यह एक <strong>निजी पारिवारिक कागज़</strong> है; इसका कोई सरकारी या कानूनी तय फॉर्मेट नहीं है। यह जानकारी सिर्फ आपके ब्राउज़र में बनती है और हमारे सर्वर पर नहीं जाती।",
  tools: [
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "Photo Resizer", text: "फोटो का आकार और KB घटाएं" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "Document Compressor", text: "PDF/फोटो फाइल छोटी करें" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "Age Calculator", text: "जन्म तिथि से सही उम्र निकालें" },
    { href: "/affidavit/", emoji: "📜", title: "एफिडेविट (शपथ पत्र)", text: "नाम, जन्म तिथि, स्व-घोषणा के फॉर्मेट" },
    { href: "/tools/self-declaration-builder.html", emoji: "✍️", title: "Self-Declaration Builder", text: "स्व-घोषणा पत्र बनाएं" },
    { href: "/arzi/", emoji: "📝", title: "सभी आवेदन पत्र फॉर्मेट", text: "बैंक, स्कूल, दफ्तर और अन्य पत्र" },
  ],
  related: [],
  faq: [
    { q: "शादी के बायोडाटा में क्या-क्या लिखना चाहिए?", a: "नाम, जन्म तिथि (और समय, अगर कुंडली मिलानी हो), कद, पढ़ाई, काम, परिवार (माता-पिता, भाई-बहन), वर्तमान शहर, शौक और संपर्क नंबर। धर्म, गोत्र, आय और जीवनसाथी से अपेक्षा देना आपकी मर्ज़ी है।" },
    { q: "क्या शादी के बायोडाटा का कोई सरकारी फॉर्मेट है?", a: "नहीं। यह निजी जानकारी-शीट है, कोई सरकारी या कानूनी तय फॉर्मेट नहीं। जो लिखें, सच और साफ लिखें।" },
    { q: "बायोडाटा में फोटो कैसी लगाएं?", a: "एक हाल की, साफ चेहरे वाली फोटो। ज़्यादा फिल्टर या पुरानी फोटो न लगाएं। फाइल भारी हो तो Photo Resizer से छोटी कर लें, ताकि WhatsApp पर आसानी से जाए।" },
    { q: "बायोडाटा PDF कैसे बनाएं?", a: "इस पेज पर फॉर्म भरें, फिर \"प्रिंट / PDF\" दबाएं और प्रिंटर की जगह \"PDF के रूप में सहेजें\" चुनें। Word चाहिए तो \"कॉपी करें\" से टेक्स्ट Word में चिपका लें और अपने ढंग से सजा लें।" },
    { q: "बायोडाटा में पता और मोबाइल नंबर देना ठीक है?", a: "केवल शहर/ज़िला और परिवार के किसी बड़े का मोबाइल नंबर दें। पूरा घर का पता, आधार, पैन या बैंक की जानकारी रिश्ता पक्का होने से पहले साझा न करें।" },
    { q: "क्या बायोडाटा में सैलरी लिखना ज़रूरी है?", a: "ज़रूरी नहीं। कई परिवार सालाना आय पूछते हैं, इसलिए लिखना आपकी मर्ज़ी पर है। लिखें तो सही आंकड़ा लिखें।" },
    { q: "शादी के नाम पर ठगी से कैसे बचें?", a: "मिले बिना या परिवार की जांच किए बिना कोई पैसा, गिफ्ट या कागज़ न भेजें। रिश्ता कराने के नाम पर रजिस्ट्रेशन फीस मांगने वालों से सावधान रहें और संदेह हो तो साइबर अपराध की शिकायत करें: cybercrime.gov.in या हेल्पलाइन 1930।" },
  ],
  official: [
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "ऑनलाइन ठगी की शिकायत; हेल्पलाइन 1930" },
  ],
  published: "2026-11-18",
  modified: "2026-11-18",
  verified: "18 नवंबर 2026",
};
