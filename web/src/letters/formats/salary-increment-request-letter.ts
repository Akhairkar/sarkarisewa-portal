import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - There is no law that gives a private employee a right to a yearly
//   increment; increments follow the appointment letter, company policy or a
//   settlement/award. Government employees get annual increments under their
//   pay rules (central: 7th CPC pay matrix, increment on 1 Jan or 1 Jul), so the
//   page points them to their own office.
// - Code on Wages 2019 (in force 21 Nov 2025; LiveLaw, PIB): wages not below
//   the notified minimum wage / floor wage; s.17 monthly wages by the 7th of
//   the next month. Minimum wage complaints go to the state labour department.
// No percentages or amounts are given because they depend on each employer.
export const salaryIncrementRequestLetter: Letter = {
  slug: "salary-increment-request-letter",
  category: "job",
  emoji: "📈",
  title: "Salary Increment Request Letter in Hindi 2026: वेतन वृद्धि अनुरोध पत्र",
  description: "वेतन बढ़ाने (increment/appraisal) का अनुरोध पत्र हिंदी/English में: अपना काम, उपलब्धियां और मांग भरें। मैनेजर/HR को ईमेल या प्रिंट के लिए तैयार।",
  h1: "वेतन वृद्धि (Salary Increment) अनुरोध पत्र 2026: मैनेजर/HR को",
  short: { hi: "वेतन वृद्धि अनुरोध पत्र", en: "Salary increment request" },
  lead: "वेतन बढ़ाने का अनुरोध अपने <strong>रिपोर्टिंग मैनेजर</strong> या <strong>HR/प्रबंधक</strong> को लिखा जाता है। प्राइवेट नौकरी में सालाना बढ़ोतरी का कोई तय कानूनी प्रतिशत नहीं है; यह नियुक्ति पत्र और कंपनी की नीति से तय होता है। इसलिए पत्र में अपना कार्यकाल, पिछली बढ़ोतरी की तारीख, जिम्मेदारियां और उपलब्धियां साफ लिखें। हां, वेतन राज्य की <strong>न्यूनतम मज़दूरी</strong> से कम नहीं हो सकता (Code on Wages 2019)।",
  facts: [
    ["किसे दें", "रिपोर्टिंग मैनेजर; कॉपी HR को"],
    ["कब दें", "अप्रेज़ल से पहले, या 1 साल बिना बढ़ोतरी के बाद"],
    ["कानूनी हक", "तय बढ़ोतरी नहीं; न्यूनतम मज़दूरी से कम वेतन नहीं"],
    ["सरकारी कर्मचारी", "सालाना इंक्रीमेंट वेतन नियमों से; अपने दफ्तर से पूछें"],
  ],
  to: "अपने <strong>रिपोर्टिंग मैनेजर/विभाग प्रमुख</strong> को, और कॉपी <strong>HR</strong> को। छोटी फर्म या दुकान में सीधे <strong>मालिक/प्रोपराइटर</strong> को।",
  when: [
    "एक साल या उससे ज़्यादा से वेतन नहीं बढ़ा हो",
    "आपको नई या ज़्यादा जिम्मेदारी दी गई हो, या पद बदला हो",
    "सालाना अप्रेज़ल (appraisal) से पहले अपनी बात लिखित में रखनी हो",
    "आपका वेतन बाज़ार या न्यूनतम मज़दूरी के हिसाब से कम हो",
  ],
  fields: [
    { key: "manager", label: { hi: "मैनेजर/मालिक का नाम और पद", en: "Manager's/owner's name and designation" }, required: true, placeholder: { hi: "जैसे: श्री रमेश गुप्ता, ऑपरेशंस मैनेजर", en: "e.g. Mr. Ramesh Gupta, Operations Manager" } },
    { key: "company", label: { hi: "कंपनी/दफ्तर का नाम और जगह", en: "Company/office name and place" }, required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद और कर्मचारी ID", en: "Your designation and employee ID" }, required: true, placeholder: { hi: "जैसे: स्टोर सुपरवाइज़र, ID 1187", en: "e.g. Store Supervisor, ID 1187" } },
    { key: "joining", label: { hi: "नौकरी शुरू करने की तारीख", en: "Date of joining" }, type: "date", required: true },
    { key: "lastraise", label: { hi: "पिछली वेतन बढ़ोतरी कब हुई", en: "When was your last raise" }, placeholder: { hi: "जैसे: अप्रैल 2025 / अब तक नहीं", en: "e.g. April 2025 / never" } },
    { key: "salary", label: { hi: "अभी का मासिक वेतन (चाहें तो)", en: "Current monthly salary (optional)" }, placeholder: { hi: "जैसे: ₹18,000", en: "e.g. Rs 18,000" } },
    { key: "work", label: { hi: "आपकी जिम्मेदारियां और उपलब्धियां", en: "Your responsibilities and achievements" }, type: "textarea", required: true, placeholder: { hi: "1. दो नए स्टाफ को ट्रेनिंग दी\n2. बिक्री 15% बढ़ी\n3. रात की शिफ्ट भी संभाली", en: "1. Trained two new staff\n2. Sales grew 15%\n3. Also handled the night shift" } },
    { key: "ask", label: { hi: "आप क्या मांग रहे हैं", en: "What you are asking for" }, type: "select", options: [
      { hi: "मेरे वेतन की समीक्षा कर उचित वृद्धि", en: "a review of my salary and a suitable increase" },
      { hi: "मेरी नई जिम्मेदारी के अनुसार वेतन वृद्धि", en: "a salary increase matching my new responsibilities" },
      { hi: "पद और वेतन दोनों में बढ़ोतरी (प्रमोशन)", en: "a promotion with a revised salary" },
      { hi: "न्यूनतम मज़दूरी के अनुसार वेतन संशोधन", en: "revision of my wages as per the notified minimum wage" },
    ] },
    { key: "expected", label: { hi: "अपेक्षित वेतन/प्रतिशत (चाहें तो)", en: "Expected salary/percentage (optional)" }, placeholder: { hi: "जैसे: ₹21,000 प्रति माह", en: "e.g. Rs 21,000 per month" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
  ],
  template: {
    hi: `सेवा में,
{{manager}},
{{company}}

विषय: वेतन वृद्धि (Salary Increment) हेतु अनुरोध पत्र

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, {{designation}}, दिनांक {{joining}} से इस संस्था में कार्यरत हूं। मेरा वर्तमान मासिक वेतन {{salary}} है और मेरी पिछली वेतन बढ़ोतरी {{lastraise}} में हुई थी।

इस अवधि में मैंने पूरी ईमानदारी और लगन से अपना काम किया है। मेरी मुख्य जिम्मेदारियां और उपलब्धियां इस प्रकार हैं:

{{work}}

बढ़ती जिम्मेदारियों और महंगाई को देखते हुए मेरा अनुरोध है कि {{ask}} पर विचार किया जाए। मेरी अपेक्षा: {{expected}}।

मैं आगे भी संस्था की प्रगति के लिए पूरी मेहनत से काम करता/करती रहूंगा/रहूंगी। यदि आप उचित समझें तो मैं इस विषय पर व्यक्तिगत रूप से मिलकर बात करने के लिए भी तैयार हूं।

आपके सकारात्मक विचार की प्रतीक्षा रहेगी।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
{{designation}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{manager}},
{{company}}

Subject: Request for salary increment

Dear Sir/Madam,

I, {{name}}, {{designation}}, have been working with this organisation since {{joining}}. My current monthly salary is {{salary}} and my last salary revision was in {{lastraise}}.

During this period I have worked sincerely and with dedication. My main responsibilities and achievements are:

{{work}}

In view of my increased responsibilities and the rising cost of living, I request you to kindly consider {{ask}}. My expectation: {{expected}}.

I will continue to work with full commitment for the growth of the organisation. I would be glad to meet you in person to discuss this, if convenient.

I look forward to your favourable consideration.

Thanking you.

Yours sincerely,

(Signature)
{{name}}
{{designation}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "चाहें तो: तारीफ वाले ईमेल/सर्टिफिकेट, ट्रेनिंग या नई योग्यता का प्रमाण",
    "पिछली सैलरी स्लिप की कॉपी (अगर मैनेजर के पास न हो)",
  ],
  submit: [
    "पत्र ईमेल से भेजें तो इसे ईमेल के मुख्य हिस्से में लिखें, Subject यही रखें और HR को CC करें।",
    "प्रिंट देकर जमा करें तो एक कॉपी पर रिसीविंग ले लें।",
    "पत्र देने के बाद मैनेजर से मिलने का समय मांगें और शांत तरीके से बात करें।",
    "1-2 हफ्ते में जवाब न मिले तो विनम्र रिमाइंडर भेजें।",
    "अगर वेतन न्यूनतम मज़दूरी से भी कम है, तो यह कानूनी मामला है: राज्य के <strong>श्रम विभाग</strong> में शिकायत कर सकते हैं (केंद्र क्षेत्र के संस्थानों के लिए <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a>)।",
  ],
  tips: [
    "धमकी भरी भाषा या \"नहीं तो नौकरी छोड़ दूंगा\" जैसी बात न लिखें।",
    "दूसरे कर्मचारियों की सैलरी से तुलना न करें; अपने काम पर बात रखें।",
    "उपलब्धियां संख्या में लिखें (कितना काम, कितना समय बचा) तो असर ज़्यादा होता है।",
    "नई सैलरी तय हो तो उसे लिखित (ईमेल/पत्र) में लें।",
  ],
  official: [
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "वेतन से जुड़े दावे (केंद्र क्षेत्र)" },
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय" },
  ],
  related: ["/tools/hra-calculator.html", "/tools/income-tax-calculator.html", "/tools/epf-calculator.html"],
  faq: [
    { q: "वेतन वृद्धि का पत्र किसे लिखें?", a: "अपने रिपोर्टिंग मैनेजर या विभाग प्रमुख को, और कॉपी HR को। छोटी दुकान/फर्म में सीधे मालिक को।" },
    { q: "क्या कंपनी हर साल सैलरी बढ़ाने के लिए बाध्य है?", a: "प्राइवेट नौकरी में कोई कानून हर साल तय बढ़ोतरी नहीं देता; यह नियुक्ति पत्र और कंपनी नीति पर निर्भर है। पर वेतन सरकार की तय न्यूनतम मज़दूरी से कम नहीं हो सकता।" },
    { q: "सैलरी बढ़ाने का अनुरोध कब करना सही है?", a: "सालाना अप्रेज़ल से पहले, कोई बड़ी जिम्मेदारी मिलने के बाद, या एक साल से ज़्यादा बिना बढ़ोतरी के बाद।" },
    { q: "क्या ईमेल से increment request भेज सकते हैं?", a: "हां। यही पत्र ईमेल में लिखें, विषय में 'Request for salary increment' रखें और HR को CC करें।" },
    { q: "सरकारी कर्मचारी का इंक्रीमेंट कैसे लगता है?", a: "सरकारी कर्मचारियों का सालाना इंक्रीमेंट वेतन नियमों के अनुसार अपने आप लगता है। न लगे तो अपने कार्यालय प्रमुख/लेखा शाखा को आवेदन दें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
