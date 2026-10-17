import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - ESIC (esic.gov.in, benefits page; benefit summaries on Vikaspedia/Keka):
//   sickness benefit = cash at 70% of wages during certified sickness for a
//   maximum of 91 days in a year, subject to contributions for 78 days in a
//   contribution period of 6 months; certificate from ESIC doctor/dispensary;
//   toll-free 1800-11-2526 (repo ESIC guide).
// - OSH Code 2020 s.32 (in force 21 Nov 2025): annual leave with wages after
//   180 days' work; sick/casual leave counts otherwise depend on the state Shops
//   and Establishments Act / standing orders / company policy, so the page
//   gives no national sick-leave count.
export const medicalLeaveApplicationOffice: Letter = {
  slug: "medical-leave-application-office",
  category: "job",
  emoji: "🤒",
  title: "Medical Leave Application for Office in Hindi 2026: बीमारी छुट्टी आवेदन",
  description: "बीमारी/मेडिकल छुट्टी का आवेदन पत्र (दफ्तर/फैक्ट्री) हिंदी/English में: बीमारी, अस्पताल, ऑपरेशन। डॉक्टर का पर्चा, ESIC बीमारी हितलाभ की जानकारी।",
  h1: "बीमारी (मेडिकल) छुट्टी आवेदन पत्र 2026: ऑफिस/फैक्ट्री के लिए",
  short: { hi: "मेडिकल छुट्टी आवेदन (दफ्तर)", en: "Medical leave application" },
  lead: "बीमारी, चोट, अस्पताल में भर्ती या ऑपरेशन की वजह से काम पर न आ सकें तो अपने <strong>मैनेजर/HR</strong> को मेडिकल छुट्टी का आवेदन दें और साथ में <strong>डॉक्टर का प्रमाण पत्र</strong> लगाएं। कितनी बीमारी छुट्टी मिलेगी, यह कंपनी की नीति और राज्य के कानून से तय होता है। अगर आप <strong>ESIC</strong> में बीमित हैं तो ESIC डॉक्टर के प्रमाण पत्र पर बीमारी के दिनों में वेतन का <strong>70%</strong> (साल में अधिकतम <strong>91 दिन</strong>) बीमारी हितलाभ मिल सकता है।",
  facts: [
    ["किसे दें", "रिपोर्टिंग मैनेजर; कॉपी HR को"],
    ["ज़रूरी कागज़", "डॉक्टर का पर्चा/मेडिकल सर्टिफिकेट"],
    ["ESIC बीमारी हितलाभ", "वेतन का 70%, साल में 91 दिन तक (78 दिन अंशदान की शर्त)"],
    ["कितनी छुट्टी", "कंपनी नीति / राज्य का कानून"],
  ],
  to: "अपने <strong>रिपोर्टिंग मैनेजर/सुपरवाइज़र</strong> को, कॉपी <strong>HR/प्रशासन</strong> को। फैक्ट्री में <strong>शिफ्ट इंचार्ज/टाइम ऑफिस</strong> को भी सूचना दें।",
  when: [
    "बुखार, टाइफाइड, डेंगू जैसी बीमारी में डॉक्टर ने आराम बताया हो",
    "अस्पताल में भर्ती, ऑपरेशन या दुर्घटना के बाद इलाज चल रहा हो",
    "बिना बताए छुट्टी हो गई और अब लिखित आवेदन देना हो",
    "बीमारी के कारण पहले से ली छुट्टी बढ़ानी हो",
  ],
  fields: [
    { key: "manager", label: { hi: "मैनेजर का नाम/पद", en: "Manager's name/designation" }, required: true, placeholder: { hi: "जैसे: प्रोडक्शन मैनेजर", en: "e.g. Production Manager" } },
    { key: "company", label: { hi: "कंपनी/दफ्तर का नाम और जगह", en: "Company/office name and place" }, required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद/विभाग और कर्मचारी ID", en: "Your designation/department and employee ID" }, required: true },
    { key: "illness", label: { hi: "बीमारी/कारण", en: "Illness/reason" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मुझे वायरल बुखार है और डॉक्टर ने 5 दिन आराम की सलाह दी है", en: "e.g. I have viral fever and the doctor has advised 5 days' rest" } },
    { key: "status", label: { hi: "अभी की स्थिति", en: "Current status" }, type: "select", options: [
      { hi: "घर पर डॉक्टर की सलाह से आराम कर रहा/रही हूं", en: "I am resting at home on medical advice" },
      { hi: "अस्पताल में भर्ती हूं", en: "I am admitted to hospital" },
      { hi: "ऑपरेशन के बाद आराम कर रहा/रही हूं", en: "I am recovering after surgery" },
      { hi: "ESIC डिस्पेंसरी/अस्पताल से इलाज चल रहा है", en: "I am under treatment at an ESIC dispensary/hospital" },
    ] },
    { key: "from", label: { hi: "छुट्टी कब से", en: "Leave from" }, type: "date", required: true },
    { key: "till", label: { hi: "छुट्टी कब तक", en: "Leave till" }, type: "date", required: true },
    { key: "esic", label: { hi: "ESIC IP नंबर (अगर है)", en: "ESIC IP number (if any)" } },
    { key: "phone", label: { hi: "संपर्क नंबर", en: "Contact number" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{manager}},
{{company}}

विषय: बीमारी के कारण {{from}} से {{till}} तक चिकित्सा अवकाश (Medical Leave) हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, {{designation}}, अस्वस्थ हूं। {{illness}}। {{status}}।

इस कारण मैं दिनांक {{from}} से {{till}} तक काम पर उपस्थित नहीं हो सकूंगा/सकूंगी। कृपया मुझे इस अवधि का चिकित्सा अवकाश (बीमारी अवकाश) स्वीकृत करने की कृपा करें। डॉक्टर का प्रमाण पत्र संलग्न है; ठीक होने पर ज़रूरत हो तो फिटनेस प्रमाण पत्र भी जमा कर दूंगा/दूंगी।

मेरा ESIC IP नंबर (यदि लागू हो): {{esic}}

ज़रूरत पड़ने पर मुझसे इस नंबर पर संपर्क किया जा सकता है: {{phone}}

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
{{designation}}

दिनांक: {{date}}

संलग्न: डॉक्टर का पर्चा/मेडिकल सर्टिफिकेट`,
    en: `To,
{{manager}},
{{company}}

Subject: Application for medical leave from {{from}} to {{till}} due to illness

Dear Sir/Madam,

I, {{name}}, {{designation}}, am unwell. {{illness}}. {{status}}.

For this reason I will not be able to attend work from {{from}} to {{till}}. Kindly sanction medical (sick) leave for this period. A medical certificate from my doctor is enclosed; on recovery I will also submit a fitness certificate if required.

My ESIC IP number (if applicable): {{esic}}

If needed, I can be contacted on: {{phone}}

Thanking you.

Yours sincerely,

(Signature)
{{name}}
{{designation}}

Date: {{date}}

Enclosure: Doctor's prescription/medical certificate`,
  },
  attach: [
    "डॉक्टर का पर्चा या मेडिकल सर्टिफिकेट, जिसमें बीमारी और आराम के दिन लिखे हों",
    "अस्पताल में भर्ती रहे हों तो डिस्चार्ज समरी की कॉपी",
    "ESIC में बीमित हों तो ESIC डॉक्टर/डिस्पेंसरी का प्रमाण पत्र (बीमारी हितलाभ के लिए यही चलता है)",
    "लौटते समय फिटनेस सर्टिफिकेट, अगर कंपनी मांगे",
  ],
  submit: [
    "बीमारी के पहले दिन ही मैनेजर/HR को फोन या मैसेज से सूचना दें।",
    "यह आवेदन ईमेल से भेजें (HR को CC) या घर के किसी सदस्य के हाथ भिजवाएं और रिसीविंग लें।",
    "कंपनी के HRMS/ऐप में भी छुट्टी डालें।",
    "ESIC में बीमित हैं तो ESIC डिस्पेंसरी/अस्पताल से ही प्रमाण पत्र बनवाएं और बीमारी हितलाभ के लिए अपनी ESIC शाखा कार्यालय से संपर्क करें (टोल-फ्री 1800-11-2526)।",
    "बीमारी की छुट्टी के कारण गलत वेतन कटौती या नौकरी से निकालने की धमकी हो तो राज्य के श्रम विभाग में शिकायत कर सकते हैं।",
  ],
  tips: [
    "बिना सूचना लंबे समय तक गैरहाज़िर न रहें; कई कंपनियों में इसे नौकरी छोड़ना मान लिया जाता है।",
    "बीमारी का पूरा निजी ब्योरा लिखना ज़रूरी नहीं; डॉक्टर का प्रमाण पत्र काफी है।",
    "छुट्टी बढ़ानी हो तो खत्म होने से पहले नया आवेदन और नया पर्चा भेजें।",
    "अपनी बची हुई बीमारी छुट्टी (sick leave balance) देख लें; न हो तो बिना वेतन छुट्टी लिखी जा सकती है।",
  ],
  official: [
    { href: "https://www.esic.gov.in/", title: "ESIC", note: "बीमारी हितलाभ; टोल-फ्री 1800-11-2526" },
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल", note: "केंद्र क्षेत्र के संस्थानों में शिकायत" },
  ],
  related: ["/service/esic.html"],
  faq: [
    { q: "मेडिकल छुट्टी के लिए डॉक्टर का प्रमाण पत्र ज़रूरी है?", a: "ज़्यादातर कंपनियां 2-3 दिन से ज़्यादा की बीमारी में डॉक्टर का प्रमाण पत्र मांगती हैं। ESIC के बीमारी हितलाभ के लिए ESIC डॉक्टर का प्रमाण पत्र चाहिए।" },
    { q: "ESIC में बीमारी के दौरान कितना पैसा मिलता है?", a: "ESIC डॉक्टर द्वारा प्रमाणित बीमारी के दिनों में वेतन का 70% बीमारी हितलाभ मिलता है, साल में अधिकतम 91 दिन। इसके लिए 6 महीने की अंशदान अवधि में कम से कम 78 दिन का अंशदान ज़रूरी है।" },
    { q: "साल में कितनी sick leave मिलती है?", a: "पूरे देश के लिए एक तय संख्या नहीं है। यह कंपनी की लीव पॉलिसी, स्टैंडिंग ऑर्डर और राज्य के दुकान एवं स्थापना कानून से तय होती है।" },
    { q: "अस्पताल में हूं, आवेदन खुद नहीं दे सकता, क्या करूं?", a: "परिवार का कोई सदस्य फोन से सूचना दे और यह पत्र आपके नाम से ईमेल या हाथ से जमा कर दे; ठीक होने पर आप हस्ताक्षर कर दें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
