import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Code on Wages 2019, in force from 21 Nov 2025 (LiveLaw; PIB on the four
//   labour codes): s.17(1) monthly wages to be paid before the expiry of the
//   7th day of the succeeding month; s.17(2) on removal, dismissal,
//   retrenchment, resignation or closure, within two working days; s.45 claims
//   may be filed by the employee, a registered trade union of which the
//   employee is a member, or the Inspector-cum-Facilitator, within 3 years;
//   the authority shall decide within 3 months (advocatekhoj bare act s.45;
//   Lakshmikumaran & Sridharan / PSA overviews).
// - SAMADHAN portal (samadhan.labour.gov.in; labour.gov.in PIB notes; Lok
//   Sabha reply 2025): online filing of disputes and claims, also through
//   UMANG and CSC; handled by the Central Industrial Relations Machinery for
//   central-sphere establishments. Most private shops/factories are in the
//   state sphere, so the page sends readers to the state labour department.
// State claim authorities differ by notification; not named.
export const salaryNotPaidComplaintLabourOffice: Letter = {
  slug: "salary-not-paid-complaint-labour-office",
  category: "job",
  emoji: "💸",
  title: "Salary Not Paid Complaint to Labour Office in Hindi 2026: वेतन न मिलने की शिकायत",
  description: "वेतन/मज़दूरी न मिलने पर श्रम विभाग (Labour Office) को शिकायत पत्र हिंदी/English में। Code on Wages: 7 तारीख तक वेतन, 3 साल में दावा। SAMADHAN पोर्टल।",
  h1: "वेतन न मिलने की शिकायत श्रम विभाग को 2026: तैयार पत्र",
  short: { hi: "वेतन न मिलने की शिकायत", en: "Unpaid salary complaint" },
  lead: "मालिक या कंपनी वेतन/मज़दूरी नहीं दे रही तो आप अपने ज़िले के <strong>श्रम विभाग (सहायक श्रम आयुक्त / श्रम प्रवर्तन अधिकारी)</strong> को लिखित शिकायत दे सकते हैं। <strong>Code on Wages 2019</strong> के अनुसार मासिक वेतन अगले महीने की <strong>7 तारीख</strong> से पहले देना होता है, और नौकरी छूटने/इस्तीफे पर बकाया <strong>2 कार्य-दिवस</strong> में। वेतन के दावे के लिए <strong>3 साल</strong> तक का समय है। केंद्र क्षेत्र के संस्थानों के लिए ऑनलाइन <strong>SAMADHAN पोर्टल</strong> भी है।",
  facts: [
    ["किसे दें", "ज़िले का श्रम कार्यालय (सहायक श्रम आयुक्त/निरीक्षक)"],
    ["वेतन कब तक", "मासिक वेतन: अगले महीने की 7 तारीख से पहले"],
    ["दावे की समय-सीमा", "3 साल के अंदर (Code on Wages धारा 45)"],
    ["ऑनलाइन", '<a href="https://samadhan.labour.gov.in/" target="_blank" rel="noopener nofollow">samadhan.labour.gov.in</a> (केंद्र क्षेत्र)'],
  ],
  to: "जहां आप काम करते थे उस ज़िले के <strong>श्रम विभाग / सहायक श्रम आयुक्त (Assistant Labour Commissioner) / श्रम प्रवर्तन अधिकारी</strong> को। रेलवे, बैंक, खदान, केंद्रीय PSU, ठेके पर केंद्र सरकार का काम जैसे केंद्र क्षेत्र के संस्थानों के लिए <strong>क्षेत्रीय श्रम आयुक्त (केंद्रीय)</strong> या SAMADHAN पोर्टल।",
  when: [
    "एक या ज़्यादा महीने का वेतन/मज़दूरी नहीं मिली",
    "नौकरी छोड़ने या निकाले जाने के बाद बकाया (फुल एंड फाइनल) नहीं मिला",
    "न्यूनतम मज़दूरी से कम पैसा या बिना कारण वेतन कटौती",
    "ओवरटाइम का भुगतान नहीं किया गया",
  ],
  fields: [
    { key: "office", label: { hi: "श्रम कार्यालय का पता", en: "Labour office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सहायक श्रम आयुक्त, श्रम विभाग, गाज़ियाबाद", en: "e.g. Assistant Labour Commissioner, Labour Department, Ghaziabad" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता और मोबाइल", en: "Your address and mobile" }, type: "textarea", required: true },
    { key: "employer", label: { hi: "मालिक/कंपनी का नाम और पता", en: "Employer/company name and address" }, type: "textarea", required: true },
    { key: "post", label: { hi: "आपका काम/पद और कब से कब तक काम किया", en: "Your job/post and period of work" }, required: true, placeholder: { hi: "जैसे: हेल्पर, 01/02/2025 से 31/08/2026 तक", en: "e.g. Helper, 01/02/2025 to 31/08/2026" } },
    { key: "wage", label: { hi: "तय मासिक वेतन/दैनिक मज़दूरी", en: "Agreed monthly salary/daily wage" }, required: true, placeholder: { hi: "जैसे: ₹15,000 प्रति माह", en: "e.g. Rs 15,000 per month" } },
    { key: "months", label: { hi: "किन महीनों का वेतन नहीं मिला", en: "Months not paid" }, required: true, placeholder: { hi: "जैसे: जून, जुलाई, अगस्त 2026", en: "e.g. June, July, August 2026" } },
    { key: "amount", label: { hi: "कुल बकाया राशि", en: "Total amount due" }, required: true, placeholder: { hi: "जैसे: ₹45,000", en: "e.g. Rs 45,000" } },
    { key: "status", label: { hi: "अभी की स्थिति", en: "Current status" }, type: "select", options: [
      { hi: "मैं अभी भी वहीं काम कर रहा/रही हूं", en: "I am still working there" },
      { hi: "मैंने नौकरी छोड़ दी है (इस्तीफा)", en: "I have resigned" },
      { hi: "मुझे नौकरी से निकाल दिया गया है", en: "I have been removed from the job" },
      { hi: "प्रतिष्ठान बंद हो गया है", en: "The establishment has closed" },
    ] },
    { key: "details", label: { hi: "और क्या हुआ (कितनी बार मांगा, क्या जवाब मिला)", en: "What happened (requests made, reply received)" }, type: "textarea", placeholder: { hi: "जैसे: 3 बार मैनेजर से लिखित/मौखिक मांगा, हर बार अगले महीने का वादा किया गया", en: "e.g. asked the manager three times, was promised payment next month each time" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: बकाया वेतन/मज़दूरी का भुगतान न किए जाने के संबंध में शिकायत एवं दावा (वेतन संहिता 2019)

महोदय/महोदया,

मैं, {{name}}, निम्नलिखित नियोक्ता के यहां {{post}} के रूप में कार्यरत रहा/रही हूं:
{{employer}}

मेरा तय वेतन/मज़दूरी {{wage}} है। मुझे {{months}} का वेतन अब तक नहीं दिया गया है। कुल बकाया राशि {{amount}} है। वर्तमान स्थिति: {{status}}।

{{details}}

वेतन संहिता 2019 की धारा 17 के अनुसार मासिक वेतन अगले महीने की 7 तारीख से पहले, और नौकरी छूटने/इस्तीफे की स्थिति में दो कार्य-दिवस के भीतर देय है। नियोक्ता ने इस नियम का पालन नहीं किया है।

अतः आपसे निवेदन है कि:
1. नियोक्ता को मेरा पूरा बकाया वेतन {{amount}} तुरंत देने का निर्देश दें;
2. वेतन संहिता 2019 की धारा 45 के तहत मेरे इस दावे पर आवश्यक कार्यवाही करें;
3. सुनवाई की तारीख की सूचना मुझे ऊपर दिए पते/मोबाइल पर दें।

मैं सुनवाई में उपस्थित होकर सभी प्रमाण प्रस्तुत करने को तैयार हूं।

भवदीय/भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{name}}
पता/मोबाइल: {{address}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. नियुक्ति पत्र / ID कार्ड / हाज़िरी या सैलरी स्लिप की कॉपी (जो उपलब्ध हो)
2. बैंक स्टेटमेंट, जिसमें पिछला वेतन आया हो
3. नियोक्ता से की गई मांग के मैसेज/पत्र की कॉपी`,
    en: `To,
{{office}}

Subject: Complaint and claim for non-payment of wages (Code on Wages, 2019)

Sir/Madam,

I, {{name}}, have been employed as {{post}} with the following employer:
{{employer}}

My agreed wage is {{wage}}. I have not been paid my wages for {{months}}. The total amount due is {{amount}}. Present status: {{status}}.

{{details}}

Under Section 17 of the Code on Wages, 2019, monthly wages are payable before the 7th day of the following month, and on separation or resignation within two working days. The employer has not complied with this.

I therefore request you to:
1. direct the employer to pay my full dues of {{amount}} immediately;
2. take necessary action on this claim under Section 45 of the Code on Wages, 2019;
3. inform me of the hearing date at the address/mobile given below.

I am ready to appear at the hearing and produce all evidence.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Address/Mobile: {{address}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of appointment letter / ID card / attendance or salary slip (whatever is available)
2. Bank statement showing earlier salary credits
3. Copies of messages/letters demanding payment from the employer`,
  },
  attach: [
    "काम करने का कोई भी सबूत: नियुक्ति पत्र, ID कार्ड, सैलरी स्लिप, हाज़िरी रजिस्टर की फोटो, गेट पास",
    "बैंक स्टेटमेंट/पासबुक, जिसमें पहले वेतन आया हो; नकद वेतन मिलता था तो साथी मज़दूरों के नाम (गवाह)",
    "मालिक से वेतन मांगने के मैसेज, कॉल रिकॉर्ड या पत्र की कॉपी",
    "पहचान पत्र (आधार/ई-श्रम कार्ड) की कॉपी",
  ],
  submit: [
    "पहले मालिक/HR को लिखित में एक बार बकाया मांगें और उसकी कॉपी रखें।",
    "यह शिकायत दो कॉपी में ज़िले के श्रम कार्यालय में जमा करें; एक कॉपी पर मुहर और तारीख के साथ रिसीविंग लें। कई राज्यों में श्रम विभाग का ऑनलाइन शिकायत पोर्टल भी है।",
    "केंद्र क्षेत्र का संस्थान हो तो <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a> पर ऑनलाइन दावा करें (UMANG ऐप या CSC से भी)।",
    "श्रम अधिकारी दोनों पक्षों को बुलाकर सुलह कराते हैं; न हो तो दावा प्राधिकारी (claim authority) सुनवाई करके आदेश देता है। कानून के अनुसार प्राधिकारी को 3 महीने में फैसला करना होता है।",
    "सुनवाई की हर तारीख पर जाएं और सबूत साथ रखें।",
  ],
  tips: [
    "हर महीने की बकाया राशि अलग-अलग लिखें और कुल जोड़ सही रखें।",
    "दावा 3 साल के अंदर करें; जितनी जल्दी करें, सबूत जुटाना उतना आसान।",
    "शिकायत में गाली या धमकी की भाषा न लिखें; सिर्फ तथ्य लिखें।",
    "PF/ESI भी कटा पर जमा नहीं हुआ तो अलग से EPFO/ESIC में शिकायत करें।",
  ],
  official: [
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "केंद्र क्षेत्र के विवाद/दावे ऑनलाइन" },
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय", note: "लेबर कोड" },
  ],
  related: ["/support/helpline-directory.html", "/service/e-shram-card.html", "/service/epfo.html"],
  faq: [
    { q: "वेतन न मिले तो शिकायत कहां करें?", a: "अपने ज़िले के श्रम विभाग (सहायक श्रम आयुक्त/श्रम प्रवर्तन अधिकारी) को लिखित शिकायत दें। केंद्र क्षेत्र के संस्थान (जैसे रेलवे, बैंक, खदान, केंद्रीय PSU) के लिए SAMADHAN पोर्टल पर ऑनलाइन दावा कर सकते हैं।" },
    { q: "कानून के अनुसार वेतन कब तक मिलना चाहिए?", a: "Code on Wages 2019 की धारा 17 के अनुसार मासिक वेतन अगले महीने की 7 तारीख से पहले। नौकरी छूटने, निकाले जाने या इस्तीफे पर बकाया 2 कार्य-दिवस में।" },
    { q: "बकाया वेतन का दावा कितने समय तक कर सकते हैं?", a: "Code on Wages की धारा 45 के तहत दावा उस तारीख से 3 साल के अंदर किया जा सकता है, जब से भुगतान बकाया हुआ।" },
    { q: "नियुक्ति पत्र या सैलरी स्लिप नहीं है, क्या शिकायत होगी?", a: "हां। बैंक में आया पिछला वेतन, हाज़िरी की फोटो, ID कार्ड, मैसेज या साथी मज़दूरों की गवाही भी सबूत के तौर पर दी जा सकती है।" },
    { q: "क्या शिकायत की कोई फीस है?", a: "श्रम कार्यालय या SAMADHAN पोर्टल पर शिकायत/दावे के लिए आम तौर पर कोई फीस नहीं लगती; किसी दलाल को पैसा न दें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
