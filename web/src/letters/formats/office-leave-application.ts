import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Four Labour Codes in force from 21 Nov 2025 (PIB / Ministry of Labour;
//   commentary by Labour Law Reporter, Acuity Law FAQ on OSH Code and OSH
//   Central Rules 2026): OSH Code 2020 s.32 - a worker in a covered
//   establishment who has worked 180 days or more in a calendar year gets
//   annual leave with wages at one day for every 20 days worked.
// - Office/shop staff are mostly governed by the state Shops and
//   Establishments Act and the employer's leave policy, which differ by
//   state and company, so the page gives no other leave counts.
// - ESIC (esic.gov.in): insured employees on sick leave get medical
//   certificates from ESIC dispensary/doctor for sickness benefit; amounts
//   not stated here.
export const officeLeaveApplication: Letter = {
  slug: "office-leave-application",
  category: "job",
  emoji: "🗓️",
  title: "Leave Application for Office in Hindi 2026: ऑफिस छुट्टी आवेदन पत्र",
  description: "ऑफिस/कंपनी में मैनेजर या HR को छुट्टी का आवेदन पत्र (हिंदी/English): बीमारी, शादी, घर के काम के लिए। तारीखें भरें, ईमेल या प्रिंट के लिए तैयार।",
  h1: "ऑफिस के लिए छुट्टी आवेदन पत्र 2026: मैनेजर/HR को",
  short: { hi: "ऑफिस छुट्टी आवेदन", en: "Office leave application" },
  lead: "ऑफिस, फैक्ट्री या दुकान में छुट्टी के लिए अपने <strong>रिपोर्टिंग मैनेजर/सुपरवाइज़र</strong> को आवेदन दिया जाता है और कॉपी <strong>HR</strong> को जाती है। इसमें छुट्टी का प्रकार (आकस्मिक, बीमारी, अर्जित), तारीखें, कारण और आपकी गैरहाज़िरी में काम कौन देखेगा, यह लिखें। कितनी छुट्टी मिलेगी यह कंपनी की लीव पॉलिसी और राज्य के कानून से तय होता है; OSH कोड लागू वाले संस्थानों में साल में <strong>180 दिन</strong> काम करने पर हर <strong>20 दिन पर 1 दिन</strong> की सवेतन वार्षिक छुट्टी बनती है।",
  facts: [
    ["किसे दें", "रिपोर्टिंग मैनेजर; कॉपी HR को"],
    ["कब दें", "जितना पहले हो सके; बीमारी में तुरंत सूचना"],
    ["छुट्टी कितनी", "कंपनी की लीव पॉलिसी / राज्य का कानून"],
    ["OSH कोड", "180 दिन काम पर हर 20 दिन = 1 दिन वार्षिक छुट्टी"],
  ],
  to: "अपने <strong>रिपोर्टिंग मैनेजर/विभाग प्रमुख/सुपरवाइज़र</strong> को, और कॉपी <strong>HR/प्रशासन</strong> को। जिन कंपनियों में HRMS/ऐप पर छुट्टी लगती है, वहां ऐप में भी आवेदन डालें।",
  when: [
    "बीमारी, इलाज या ऑपरेशन के कारण छुट्टी",
    "शादी, परिवार में कार्यक्रम या किसी के निधन पर",
    "गांव जाना, बच्चे का दाखिला या कोई ज़रूरी निजी काम",
    "पहले से तय छुट्टी (जैसे त्योहार) के लिए लिखित मंज़ूरी चाहिए",
  ],
  fields: [
    { key: "manager", label: { hi: "मैनेजर का नाम/पद", en: "Manager's name/designation" }, required: true, placeholder: { hi: "जैसे: श्री अनिल वर्मा, सेल्स मैनेजर", en: "e.g. Mr. Anil Verma, Sales Manager" } },
    { key: "company", label: { hi: "कंपनी/दफ्तर का नाम और जगह", en: "Company/office name and place" }, required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद और कर्मचारी ID", en: "Your designation and employee ID" }, required: true, placeholder: { hi: "जैसे: अकाउंट्स असिस्टेंट, ID 4521", en: "e.g. Accounts Assistant, ID 4521" } },
    { key: "type", label: { hi: "छुट्टी का प्रकार", en: "Type of leave" }, type: "select", options: [
      { hi: "आकस्मिक अवकाश (Casual Leave)", en: "Casual Leave" },
      { hi: "बीमारी अवकाश (Sick Leave)", en: "Sick Leave" },
      { hi: "अर्जित अवकाश (Earned/Privilege Leave)", en: "Earned/Privilege Leave" },
      { hi: "बिना वेतन अवकाश (Leave Without Pay)", en: "Leave Without Pay" },
    ] },
    { key: "reason", label: { hi: "कारण", en: "Reason" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मेरी बहन की शादी है / मुझे तेज़ बुखार है और डॉक्टर ने आराम बताया है", en: "e.g. my sister's wedding / I have high fever and the doctor has advised rest" } },
    { key: "from", label: { hi: "छुट्टी कब से", en: "Leave from" }, type: "date", required: true },
    { key: "till", label: { hi: "छुट्टी कब तक", en: "Leave till" }, type: "date", required: true },
    { key: "days", label: { hi: "कुल दिन", en: "Total days" }, type: "number" },
    { key: "handover", label: { hi: "आपका काम कौन देखेगा (चाहें तो)", en: "Who will handle your work (optional)" }, placeholder: { hi: "जैसे: मेरा काम श्री राकेश देखेंगे", en: "e.g. Mr. Rakesh will handle my work" } },
    { key: "phone", label: { hi: "छुट्टी में संपर्क नंबर", en: "Contact number during leave" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{manager}},
{{company}}

विषय: {{from}} से {{till}} तक {{type}} हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, {{designation}}, आपको सूचित करना चाहता/चाहती हूं कि {{reason}}।

इस कारण मुझे {{from}} से {{till}} तक छुट्टी की आवश्यकता है।
कुल दिन: {{days}}

छुट्टी पर जाने से पहले मैं अपने ज़रूरी काम पूरे कर दूंगा/दूंगी और बाकी काम सौंप दूंगा/दूंगी।
{{handover}}

ज़रूरत पड़ने पर मुझसे इस नंबर पर संपर्क किया जा सकता है: {{phone}}

अतः आपसे निवेदन है कि मेरा {{type}} स्वीकृत करने की कृपा करें।

धन्यवाद।

भवदीय/भवदीया,
{{name}}
{{designation}}

दिनांक: {{date}}`,
    en: `To,
{{manager}},
{{company}}

Subject: Application for {{type}} from {{from}} to {{till}}

Dear Sir/Madam,

I, {{name}}, {{designation}}, wish to inform you that {{reason}}.

For this reason I need leave from {{from}} to {{till}}.
Total days: {{days}}

Before going on leave I will complete my pending work and hand over the rest.
{{handover}}

If needed, I can be contacted on: {{phone}}

I therefore request you kindly to sanction my {{type}}.

Thanking you.

Yours sincerely,
{{name}}
{{designation}}

Date: {{date}}`,
  },
  attach: [
    "बीमारी की छुट्टी: डॉक्टर का पर्चा/मेडिकल सर्टिफिकेट (कंपनी के नियम के अनुसार); ESIC वाले कर्मचारी ESIC डिस्पेंसरी/डॉक्टर का प्रमाण पत्र लें",
    "लौटने पर फिटनेस सर्टिफिकेट, अगर कंपनी मांगे",
  ],
  submit: [
    "पहले से पता हो तो छुट्टी से कुछ दिन पहले आवेदन दें; अचानक बीमारी में उसी दिन फोन/मैसेज से सूचना देकर बाद में लिखित आवेदन दें।",
    "ईमेल से भेजें तो यही पत्र ईमेल के मुख्य हिस्से में चिपकाएं, विषय (Subject) वही रखें और HR को CC करें।",
    "कंपनी के HRMS/ऐप में भी छुट्टी डालें, ताकि हाज़िरी और वेतन में गड़बड़ न हो।",
    "मंज़ूरी लिखित (ईमेल/ऐप) में लें और संभालकर रखें।",
    "छुट्टी या वेतन कटौती पर विवाद हो तो पहले HR से लिखित बात करें; फिर राज्य के श्रम विभाग या केंद्र क्षेत्र के संस्थान में <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a> पर शिकायत कर सकते हैं।",
  ],
  tips: [
    "तारीखें और छुट्टी का प्रकार साफ लिखें; गलत प्रकार चुनने से वेतन कट सकता है।",
    "अपनी लीव बैलेंस (कितनी छुट्टी बची है) पहले HR/ऐप में देख लें।",
    "बिना सूचना गैरहाज़िर न रहें; कई कंपनियों में लगातार गैरहाज़िरी पर अनुशासनात्मक कार्रवाई का नियम होता है।",
    "छुट्टी बढ़ानी हो तो खत्म होने से पहले ही दोबारा आवेदन दें।",
  ],
  official: [
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "केंद्र क्षेत्र के संस्थानों के विवाद/दावे" },
    { href: "https://www.esic.gov.in/", title: "ESIC", note: "बीमारी हितलाभ और डिस्पेंसरी" },
  ],
  related: ["/service/esic.html"],
  faq: [
    { q: "ऑफिस में छुट्टी का आवेदन किसे लिखें?", a: "अपने रिपोर्टिंग मैनेजर या विभाग प्रमुख को, और कॉपी HR को। कंपनी में HRMS/ऐप हो तो वहां भी छुट्टी डालें।" },
    { q: "क्या ईमेल से छुट्टी का आवेदन मान्य है?", a: "ज़्यादातर कंपनियों में हां। यही पत्र ईमेल में लिखें, विषय में तारीखें डालें और HR को CC करें।" },
    { q: "साल में कितनी छुट्टी मिलती है?", a: "यह कंपनी की लीव पॉलिसी और राज्य के कानून पर निर्भर है। OSH कोड लागू वाले संस्थानों में कैलेंडर साल में 180 दिन काम करने पर हर 20 दिन काम पर 1 दिन की सवेतन वार्षिक छुट्टी बनती है।" },
    { q: "बीमारी की छुट्टी में मेडिकल सर्टिफिकेट ज़रूरी है?", a: "आम तौर पर 2-3 दिन से ज़्यादा की बीमारी में कंपनियां डॉक्टर का प्रमाण पत्र मांगती हैं। ESIC के बीमित कर्मचारी ESIC डॉक्टर का प्रमाण पत्र लें, ताकि बीमारी हितलाभ मिल सके।" },
    { q: "छुट्टी मना हो जाए तो क्या करें?", a: "मैनेजर से बात करके दूसरी तारीख तय करें या बिना वेतन छुट्टी मांगें। बिना मंज़ूरी गैरहाज़िर रहने से कार्रवाई हो सकती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
