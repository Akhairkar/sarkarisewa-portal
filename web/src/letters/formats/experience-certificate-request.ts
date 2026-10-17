import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - No single national law fixes the format or deadline of an experience /
//   relieving letter. Certified or model standing orders of many
//   establishments provide a "certificate of service" on leaving (Supreme
//   Court order 01.11.2018 in Civil Appeal 39122/2010 notes a certified
//   standing order entitling the employee to a certificate of service);
//   the page therefore says "company policy / standing orders" and gives
//   no time limit.
// - Code on Wages 2019 s.17(2), in force 21 Nov 2025: dues on resignation
//   within two working days (commentary: PocketHRMS, ELP).
// - SAMADHAN portal (samadhan.labour.gov.in): claims and grievances for
//   central-sphere establishments; state labour departments for others.
// - EPFO member portal (unifiedportal-mem.epfindia.gov.in): passbook /
//   service history as alternative proof of employment.
export const experienceCertificateRequest: Letter = {
  slug: "experience-certificate-request",
  category: "job",
  emoji: "🏅",
  title: "Experience Certificate Request Letter in Hindi 2026: अनुभव पत्र आवेदन",
  description: "पुरानी/मौजूदा कंपनी से अनुभव प्रमाण पत्र और रिलीविंग लेटर मांगने का पत्र (हिंदी/English)। भरें, ईमेल/प्रिंट करें; न मिले तो क्या करें, यह भी जानें।",
  h1: "अनुभव प्रमाण पत्र / रिलीविंग लेटर के लिए अनुरोध पत्र 2026",
  short: { hi: "अनुभव पत्र अनुरोध", en: "Experience letter request" },
  lead: "नौकरी छोड़ने के बाद <strong>अनुभव प्रमाण पत्र (Experience Certificate)</strong> और <strong>रिलीविंग लेटर</strong> के लिए कंपनी के <strong>HR</strong> को लिखित अनुरोध दिया जाता है। इसमें आपका पद, कर्मचारी ID, जॉइनिंग और आखिरी दिन की तारीख लिखें। नई नौकरी, विदेश में काम या लोन के लिए ये पत्र मांगे जाते हैं। कोई एक राष्ट्रीय समय सीमा तय नहीं है; कंपनी की नीति या <strong>स्टैंडिंग ऑर्डर</strong> से तय होता है, इसलिए लिखित अनुरोध और उसका सबूत ज़रूर रखें।",
  facts: [
    ["किसे दें", "कंपनी का HR / मैनेजर"],
    ["कब मांगें", "आखिरी दिन, क्लियरेंस पूरा होते ही"],
    ["समय सीमा", "कंपनी की नीति / स्टैंडिंग ऑर्डर के अनुसार"],
    ["न मिले तो", "श्रम विभाग; केंद्र क्षेत्र में SAMADHAN पोर्टल"],
  ],
  to: "कंपनी के <strong>HR मैनेजर/प्रशासन विभाग</strong> को; छोटी फर्म/दुकान में <strong>मालिक या प्रबंधक</strong> को। कॉपी अपने पूर्व रिपोर्टिंग मैनेजर को भेजें।",
  when: [
    "इस्तीफे के बाद अनुभव पत्र या रिलीविंग लेटर नहीं मिला",
    "नई कंपनी जॉइनिंग के समय अनुभव पत्र मांग रही है",
    "विदेश में नौकरी, वीज़ा, लोन या सरकारी भर्ती के लिए अनुभव का सबूत चाहिए",
    "पुराना अनुभव पत्र खो गया है या उसमें गलती है",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (नाम/पद)", en: "To (name/designation)" }, required: true, placeholder: { hi: "जैसे: HR मैनेजर", en: "e.g. HR Manager" } },
    { key: "company", label: { hi: "कंपनी का नाम और पता", en: "Company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आखिरी पद और विभाग", en: "Last designation and department" }, required: true },
    { key: "empid", label: { hi: "कर्मचारी ID", en: "Employee ID" } },
    { key: "joined", label: { hi: "जॉइनिंग की तारीख", en: "Date of joining" }, type: "date", required: true },
    { key: "lastday", label: { hi: "आखिरी कार्य दिवस", en: "Last working day" }, type: "date", required: true },
    { key: "doc", label: { hi: "क्या चाहिए", en: "Documents needed" }, type: "select", options: [
      { hi: "अनुभव प्रमाण पत्र और रिलीविंग लेटर", en: "experience certificate and relieving letter" },
      { hi: "अनुभव प्रमाण पत्र", en: "experience certificate" },
      { hi: "रिलीविंग लेटर", en: "relieving letter" },
      { hi: "अनुभव प्रमाण पत्र की दूसरी प्रति (पहली खो गई है)", en: "a duplicate experience certificate (the original is lost)" },
    ] },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, required: true, placeholder: { hi: "जैसे: नई कंपनी में जॉइनिंग", en: "e.g. joining a new company" } },
    { key: "resigned", label: { hi: "इस्तीफा कब दिया (चाहें तो)", en: "Resignation submitted on (optional)" }, type: "date" },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "email", label: { hi: "ईमेल", en: "Email" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{company}}

विषय: {{doc}} जारी करने हेतु अनुरोध

महोदय/महोदया,

मैं, {{name}}, आपकी कंपनी में {{designation}} के पद पर कार्यरत था/थी। मेरा विवरण इस प्रकार है:
कर्मचारी ID: {{empid}}
जॉइनिंग की तारीख: {{joined}}
आखिरी कार्य दिवस: {{lastday}}
इस्तीफा देने की तारीख: {{resigned}}

मैंने अपना नोटिस पीरियड और हैंडओवर पूरा कर दिया है तथा कंपनी की सभी चीज़ें लौटा दी हैं।

मुझे {{purpose}} के लिए {{doc}} की आवश्यकता है। अतः आपसे निवेदन है कि मेरा {{doc}} जल्द से जल्द जारी करने की कृपा करें, जिसमें मेरा पद, विभाग और सेवा की अवधि लिखी हो। पत्र मेरी ईमेल पर भेजें या मुझे सूचित करें कि मैं कब आकर ले सकता/सकती हूं।

कोई क्लियरेंस बाकी हो तो कृपया लिखित में बताएं, ताकि मैं उसे तुरंत पूरा कर सकूं।

धन्यवाद।

भवदीय/भवदीया,
{{name}}
मोबाइल: {{phone}}
ईमेल: {{email}}

दिनांक: {{date}}`,
    en: `To,
{{to}},
{{company}}

Subject: Request for issue of {{doc}}

Dear Sir/Madam,

I, {{name}}, worked in your company as {{designation}}. My details are as follows:
Employee ID: {{empid}}
Date of joining: {{joined}}
Last working day: {{lastday}}
Resignation submitted on: {{resigned}}

I have completed my notice period and handover and returned all company property.

I need the {{doc}} for {{purpose}}. I therefore request you kindly to issue my {{doc}} at the earliest, mentioning my designation, department and period of service. Please send it to my email or let me know when I can collect it.

If any clearance is pending, please inform me in writing so that I can complete it immediately.

Thanking you.

Yours sincerely,
{{name}}
Mobile: {{phone}}
Email: {{email}}

Date: {{date}}`,
  },
  attach: [
    "इस्तीफे के पत्र/ईमेल और उसकी स्वीकृति की कॉपी",
    "नियुक्ति पत्र या आखिरी वेतन पर्ची की कॉपी (पहचान के लिए)",
    "No Dues/क्लियरेंस फॉर्म की कॉपी (अगर मिली हो)",
  ],
  submit: [
    "यह पत्र HR को <strong>ईमेल</strong> से भेजें (रिपोर्टिंग मैनेजर को CC) और भेजा गया मेल संभालें; या हाथ से देकर रिसीविंग लें।",
    "कुछ दिन में जवाब न आए तो उसी ईमेल पर याद-पत्र (reminder) भेजें और HR हेड को लिखें।",
    'फिर भी न मिले तो अपने राज्य के <strong>श्रम विभाग (Labour Office)</strong> में लिखित शिकायत करें; केंद्र क्षेत्र के संस्थानों के लिए <a href="https://samadhan.labour.gov.in/" target="_blank" rel="noopener nofollow">SAMADHAN पोर्टल</a> है।',
    'इस बीच नौकरी का सबूत चाहिए तो <a href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" target="_blank" rel="noopener nofollow">EPFO पोर्टल</a> की PF पासबुक/सर्विस हिस्ट्री, वेतन पर्चियां और फॉर्म 16 काम आते हैं।',
  ],
  tips: [
    "जॉइनिंग और आखिरी दिन की तारीखें अपने नियुक्ति/रिलीविंग रिकॉर्ड से मिलाकर लिखें।",
    "अनुभव पत्र मिलने पर नाम, पद, तारीखें, कंपनी की मुहर और अधिकारी के हस्ताक्षर जांच लें।",
    "नोटिस पीरियड अधूरा छोड़ने पर कंपनी अक्सर पत्र रोकती है; पहले लिखित में बात तय कर लें।",
    "कंपनी बंद हो गई हो तो PF सर्विस हिस्ट्री, वेतन पर्ची और बैंक स्टेटमेंट से अनुभव साबित करें।",
  ],
  official: [
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "केंद्र क्षेत्र के संस्थानों के विवाद/दावे" },
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", title: "EPFO सदस्य पोर्टल", note: "PF पासबुक और सर्विस हिस्ट्री" },
  ],
  related: ["/service/epfo.html", "/service/ncs-national-career-service.html"],
  faq: [
    { q: "अनुभव प्रमाण पत्र किससे मांगें?", a: "कंपनी के HR या प्रशासन विभाग से; छोटी फर्म में मालिक/प्रबंधक से। लिखित (ईमेल) अनुरोध दें।" },
    { q: "अनुभव पत्र और रिलीविंग लेटर में क्या अंतर है?", a: "रिलीविंग लेटर बताता है कि कंपनी ने आपको किस तारीख को कार्यमुक्त किया। अनुभव पत्र आपकी नौकरी की अवधि, पद और काम बताता है। कई कंपनियां दोनों एक ही पत्र में देती हैं।" },
    { q: "कंपनी अनुभव पत्र न दे तो क्या करें?", a: "पहले HR को ईमेल से याद दिलाएं, फिर राज्य के श्रम विभाग में शिकायत करें; केंद्र क्षेत्र के संस्थानों के लिए SAMADHAN पोर्टल है। तब तक PF सर्विस हिस्ट्री और वेतन पर्चियां सबूत के रूप में रखें।" },
    { q: "क्या अनुभव पत्र देने की कोई तय समय सीमा है?", a: "कोई एक राष्ट्रीय समय सीमा नहीं है। कंपनी की नीति, नियुक्ति पत्र या स्टैंडिंग ऑर्डर में जो लिखा है वह लागू होता है।" },
    { q: "कंपनी बंद हो गई है, अनुभव कैसे साबित करें?", a: "EPFO पासबुक/सर्विस हिस्ट्री, वेतन पर्चियां, फॉर्म 16 और बैंक में वेतन जमा होने का स्टेटमेंट सबूत के रूप में काम आते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
