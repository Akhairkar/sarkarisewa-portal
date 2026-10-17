import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Four Labour Codes in force from 21 Nov 2025 (Ministry of Labour / PIB;
//   commentary: PocketHRMS, ELP alerts 25 Nov 2025): Code on Wages 2019
//   s.17(2) - where an employee has resigned (also removed, dismissed,
//   retrenched), wages due are to be paid within two working days.
//   Detailed state rules were still being notified, so the page says
//   "कानून के अनुसार" and points to the labour department.
// - Code on Social Security 2020 s.53 (commentary: Lakshmikumaran &
//   Sridharan, Bhatt & Joshi): gratuity after 5 years' continuous service
//   for regular employees; fixed-term employees pro-rata. Payment deadline
//   not verified, so not stated.
// - Notice period is set by the appointment letter / service rules /
//   standing orders, so no number is given.
// - SAMADHAN portal (samadhan.labour.gov.in, Ministry of Labour): claims and
//   grievances for central-sphere establishments; states have own offices.
export const resignationLetter: Letter = {
  slug: "resignation-letter",
  category: "job",
  emoji: "📝",
  title: "Resignation Letter Format in Hindi 2026: इस्तीफा पत्र (नोटिस पीरियड)",
  description: "नौकरी से इस्तीफा पत्र का तैयार फॉर्मेट (हिंदी/English), नोटिस पीरियड और आखिरी दिन के साथ। भरें, प्रिंट/ईमेल करें; फुल एंड फाइनल, PF, ग्रेच्युटी की जानकारी।",
  h1: "इस्तीफा पत्र (Resignation Letter) 2026: नोटिस पीरियड के साथ",
  short: { hi: "इस्तीफा पत्र", en: "Resignation letter" },
  lead: "नौकरी छोड़ने के लिए अपने <strong>रिपोर्टिंग मैनेजर</strong> को लिखित इस्तीफा दिया जाता है और कॉपी <strong>HR</strong> को जाती है। पत्र में इस्तीफे की तारीख, <strong>नोटिस पीरियड</strong> (जो आपके नियुक्ति पत्र में लिखा है) और <strong>आखिरी कार्य दिवस</strong> साफ लिखें। 21 नवंबर 2025 से लागू <strong>वेतन संहिता (Code on Wages) की धारा 17(2)</strong> के अनुसार इस्तीफे के बाद बकाया वेतन <strong>दो कार्य दिवस</strong> में देना होता है। लगातार 5 साल की नौकरी पर ग्रेच्युटी भी बनती है।",
  facts: [
    ["किसे दें", "रिपोर्टिंग मैनेजर; कॉपी HR को"],
    ["नोटिस पीरियड", "नियुक्ति पत्र/सेवा नियम के अनुसार"],
    ["बकाया वेतन", "Code on Wages धारा 17(2): 2 कार्य दिवस में"],
    ["ग्रेच्युटी", "आम तौर पर 5 साल लगातार नौकरी के बाद"],
  ],
  to: "अपने <strong>रिपोर्टिंग मैनेजर/विभाग प्रमुख</strong> को, कॉपी <strong>HR</strong> को। सरकारी नौकरी में इस्तीफा <strong>नियुक्ति अधिकारी</strong> को उचित माध्यम (through proper channel) से दिया जाता है और उसके अपने सेवा नियम होते हैं।",
  when: [
    "दूसरी नौकरी मिलने पर",
    "पढ़ाई, शादी, सेहत या परिवार की ज़िम्मेदारी के कारण नौकरी छोड़नी हो",
    "शहर बदलना हो या खुद का काम शुरू करना हो",
    "नोटिस पीरियड पूरा करके या नोटिस के बदले वेतन देकर नौकरी छोड़नी हो",
  ],
  fields: [
    { key: "manager", label: { hi: "मैनेजर का नाम/पद", en: "Manager's name/designation" }, required: true, placeholder: { hi: "जैसे: श्रीमती नेहा सिंह, ऑपरेशंस हेड", en: "e.g. Mrs. Neha Singh, Head of Operations" } },
    { key: "company", label: { hi: "कंपनी का नाम और पता", en: "Company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद और कर्मचारी ID", en: "Your designation and employee ID" }, required: true },
    { key: "joined", label: { hi: "नौकरी जॉइन करने की तारीख", en: "Date of joining" }, type: "date" },
    { key: "reason", label: { hi: "कारण", en: "Reason" }, type: "select", options: [
      { hi: "मुझे करियर में आगे बढ़ने का एक नया अवसर मिला है", en: "I have received a new opportunity for career growth" },
      { hi: "मैं आगे की पढ़ाई करना चाहता/चाहती हूं", en: "I wish to pursue further studies" },
      { hi: "पारिवारिक कारणों से मुझे दूसरे शहर जाना है", en: "I have to relocate to another city for family reasons" },
      { hi: "स्वास्थ्य कारणों से मैं यह नौकरी जारी नहीं रख पाऊंगा/पाऊंगी", en: "I am unable to continue this job for health reasons" },
      { hi: "निजी कारणों से", en: "of personal reasons" },
    ] },
    { key: "notice", label: { hi: "नोटिस पीरियड", en: "Notice period" }, required: true, placeholder: { hi: "जैसे: 30 दिन / एक महीना", en: "e.g. 30 days / one month" } },
    { key: "lastday", label: { hi: "आखिरी कार्य दिवस", en: "Last working day" }, type: "date", required: true },
    { key: "extra", label: { hi: "और कुछ (चाहें तो)", en: "Anything else (optional)" }, type: "textarea", placeholder: { hi: "जैसे: नोटिस पीरियड कम करने का अनुरोध, बची छुट्टियों का समायोजन", en: "e.g. request to shorten notice, adjust leave balance" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "email", label: { hi: "निजी ईमेल (चाहें तो)", en: "Personal email (optional)" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{manager}},
{{company}}

विषय: पद से त्यागपत्र (इस्तीफा)

महोदय/महोदया,

मैं, {{name}}, {{designation}}, इस पत्र के माध्यम से अपने पद से त्यागपत्र दे रहा/रही हूं।
कंपनी में कार्यभार ग्रहण की तारीख: {{joined}}

मैं यह निर्णय इसलिए ले रहा/रही हूं क्योंकि {{reason}}।

मेरे नियुक्ति पत्र के अनुसार मेरा नोटिस पीरियड {{notice}} है। इसके अनुसार मेरा आखिरी कार्य दिवस {{lastday}} होगा।

{{extra}}

नोटिस पीरियड के दौरान मैं अपना सारा काम पूरा करके ठीक से सौंप दूंगा/दूंगी (हैंडओवर) और कंपनी की सभी चीज़ें (आई-कार्ड, लैपटॉप, दस्तावेज़ आदि) लौटा दूंगा/दूंगी।

कृपया मेरा त्यागपत्र स्वीकार करें और मेरा फुल एंड फाइनल सेटलमेंट, अनुभव/रिलीविंग पत्र, वेतन पर्ची और PF से जुड़ी औपचारिकताएं नियम के अनुसार पूरी करने की कृपा करें।

इस कंपनी में काम करने का अवसर देने और मार्गदर्शन के लिए मैं आपका आभारी हूं।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
{{designation}}
मोबाइल: {{phone}}
ईमेल: {{email}}

दिनांक: {{date}}`,
    en: `To,
{{manager}},
{{company}}

Subject: Resignation from my post

Dear Sir/Madam,

I, {{name}}, {{designation}}, hereby resign from my position.
Date of joining: {{joined}}

I am taking this decision because {{reason}}.

As per my appointment letter, my notice period is {{notice}}. Accordingly, my last working day will be {{lastday}}.

{{extra}}

During the notice period I will complete and properly hand over all my work, and return all company property (ID card, laptop, documents, etc.).

Kindly accept my resignation and complete my full and final settlement, experience/relieving letter, salary slips and PF formalities as per rules.

I am grateful for the opportunity to work in this company and for your guidance.

Yours sincerely,

(Signature)
{{name}}
{{designation}}
Mobile: {{phone}}
Email: {{email}}

Date: {{date}}`,
  },
  submit: [
    "पहले मैनेजर से आमने-सामने बात करें, फिर यही पत्र लिखित/ईमेल से दें; ईमेल में HR को CC करें।",
    "हाथ से दें तो एक कॉपी पर <strong>रिसीविंग</strong> (तारीख, हस्ताक्षर) लें; ईमेल दें तो भेजा गया मेल सुरक्षित रखें।",
    "कंपनी के HRMS/पोर्टल में इस्तीफा डालने का नियम हो तो वहां भी डालें।",
    "आखिरी दिन हैंडओवर पूरा करें, सामान लौटाएं और No Dues/क्लियरेंस लें; फुल एंड फाइनल, अनुभव पत्र और रिलीविंग पत्र मांगें।",
    'बकाया वेतन/सेटलमेंट न मिले तो पहले HR को लिखित याद दिलाएं; फिर राज्य के श्रम विभाग (Labour Office) या केंद्र क्षेत्र के संस्थान में <a href="https://samadhan.labour.gov.in/" target="_blank" rel="noopener nofollow">SAMADHAN पोर्टल</a> पर शिकायत करें।',
  ],
  tips: [
    "नोटिस पीरियड अपने नियुक्ति पत्र से देखकर लिखें; पूरा न करें तो कंपनी नोटिस के बदले वेतन काट सकती है।",
    "इस्तीफे में शिकायतें या कड़वी बातें न लिखें; पत्र छोटा और विनम्र रखें।",
    'जाने से पहले <a href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" target="_blank" rel="noopener nofollow">UAN पोर्टल</a> पर अपना KYC और \'Date of Exit\' जांच लें; नई नौकरी में PF ट्रांसफर करें।',
    "आखिरी 3 महीने की वेतन पर्ची और फॉर्म 16 की कॉपी अपने पास रखें; नई नौकरी और ITR में काम आती हैं।",
  ],
  official: [
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "वेतन के दावे और विवाद (केंद्र क्षेत्र)" },
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", title: "EPFO सदस्य पोर्टल (UAN)", note: "PF ट्रांसफर/निकासी" },
  ],
  related: ["/service/epfo.html", "/tools/gratuity-calculator.html", "/service/form16-form26as.html"],
  faq: [
    { q: "इस्तीफा पत्र किसे दें?", a: "अपने रिपोर्टिंग मैनेजर को, कॉपी HR को। सरकारी नौकरी में नियुक्ति अधिकारी को उचित माध्यम से।" },
    { q: "नोटिस पीरियड कितना होता है?", a: "जितना आपके नियुक्ति पत्र, कंपनी नीति या सेवा नियम में लिखा है। अक्सर 15 दिन से 3 महीने तक होता है; अपना पत्र देखें।" },
    { q: "क्या ईमेल से इस्तीफा देना मान्य है?", a: "ज़्यादातर कंपनियों में हां। ईमेल में यही पत्र लिखें, HR को CC करें और भेजा गया मेल संभालें।" },
    { q: "इस्तीफे के बाद पैसा कब तक मिलना चाहिए?", a: "21 नवंबर 2025 से लागू वेतन संहिता की धारा 17(2) के अनुसार इस्तीफे के बाद बकाया वेतन दो कार्य दिवस में देना होता है। ग्रेच्युटी और PF अपने-अपने नियम से मिलते हैं।" },
    { q: "ग्रेच्युटी कब मिलती है?", a: "आम तौर पर एक ही नियोक्ता के यहां लगातार 5 साल नौकरी के बाद। निश्चित अवधि (fixed-term) कर्मचारियों के लिए अनुपात में ग्रेच्युटी का नियम है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
