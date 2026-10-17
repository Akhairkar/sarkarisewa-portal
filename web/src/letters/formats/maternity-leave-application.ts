import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Code on Social Security 2020, Chapter VI (Maternity Benefit), in force
//   from 21 Nov 2025 (PIB factsheet on the labour codes; taxmann analysis;
//   Lakshmikumaran & Sridharan overview): eligibility = actually worked at
//   least 80 days in the establishment in the 12 months before the expected
//   delivery; maximum 26 weeks, of which not more than 8 weeks before the
//   expected delivery; reduced period for a woman with two or more surviving
//   children (12 weeks, not more than 6 weeks before, as carried over from
//   the Maternity Benefit Act 1961 s.5(3)); medical bonus Rs 3,500 (or as
//   notified) if the employer gives no free pre/post-natal care; written notice
//   to the employer (s.62) naming the nominee; payment by the employer (s.63).
// - Supreme Court (Bar & Bench report) struck down s.60(4) which limited
//   adoptive mothers to children under 3 months; the page does not give
//   adoption/surrogacy periods and asks readers to check with HR.
// - ESIC (esic.gov.in; benefit summaries): insured women get maternity benefit
//   from ESIC at full wage for 26 weeks, subject to contributions for 70 days in
//   the two preceding contribution periods.
export const maternityLeaveApplication: Letter = {
  slug: "maternity-leave-application",
  category: "job",
  emoji: "🤰",
  title: "Maternity Leave Application in Hindi 2026: मातृत्व अवकाश आवेदन पत्र",
  description: "मातृत्व अवकाश (Maternity Leave) का तैयार आवेदन पत्र हिंदी/English में। 26 सप्ताह तक छुट्टी, 80 दिन काम की शर्त, ESIC लाभ। भरें, प्रिंट करें, HR को दें।",
  h1: "मातृत्व अवकाश (Maternity Leave) आवेदन पत्र 2026: HR/मैनेजर को",
  short: { hi: "मातृत्व अवकाश आवेदन", en: "Maternity leave application" },
  lead: "सामाजिक सुरक्षा संहिता 2020 (Code on Social Security, अध्याय VI) के तहत जिस महिला कर्मचारी ने डिलीवरी की संभावित तारीख से पहले के 12 महीनों में उसी संस्था में कम से कम <strong>80 दिन</strong> काम किया है, उसे <strong>26 सप्ताह</strong> तक सवेतन मातृत्व अवकाश मिलता है, जिसमें से <strong>8 सप्ताह तक</strong> डिलीवरी से पहले लिए जा सकते हैं। यह आवेदन अपने <strong>HR/मैनेजर</strong> को डॉक्टर के प्रमाण पत्र के साथ लिखित में दें। ESIC वाली महिला कर्मचारियों को यह लाभ ESIC से मिलता है।",
  facts: [
    ["कितनी छुट्टी", "26 सप्ताह तक (डिलीवरी से पहले अधिकतम 8 सप्ताह)"],
    ["शर्त", "पिछले 12 महीनों में कम से कम 80 दिन काम"],
    ["2 या ज़्यादा जीवित बच्चे", "12 सप्ताह (पहले अधिकतम 6 सप्ताह)"],
    ["ESIC वाली कर्मचारी", "26 सप्ताह पूरा वेतन ESIC से (70 दिन अंशदान की शर्त)"],
  ],
  to: "अपने <strong>HR/प्रशासन विभाग</strong> या <strong>रिपोर्टिंग मैनेजर</strong> को। सरकारी कर्मचारी अपने <strong>कार्यालय प्रमुख/नियंत्रक अधिकारी</strong> को अपने सेवा नियमों के अनुसार आवेदन दें।",
  when: [
    "डिलीवरी की संभावित तारीख से पहले छुट्टी शुरू करनी हो",
    "डिलीवरी हो चुकी हो और छुट्टी की लिखित मंज़ूरी लेनी हो",
    "डॉक्टर की सलाह पर मातृत्व अवकाश बढ़ाना हो",
    "ESIC मातृत्व हितलाभ के लिए दफ्तर से लिखित रिकॉर्ड चाहिए",
  ],
  fields: [
    { key: "manager", label: { hi: "HR/मैनेजर का नाम या पद", en: "HR/manager's name or designation" }, required: true, placeholder: { hi: "जैसे: HR मैनेजर", en: "e.g. HR Manager" } },
    { key: "company", label: { hi: "कंपनी/दफ्तर का नाम और पता", en: "Company/office name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद और कर्मचारी ID", en: "Your designation and employee ID" }, required: true },
    { key: "esic", label: { hi: "ESIC IP नंबर (अगर है)", en: "ESIC IP number (if any)" }, placeholder: { hi: "न हो तो खाली छोड़ें", en: "Leave blank if none" } },
    { key: "edd", label: { hi: "डिलीवरी की संभावित तारीख (डॉक्टर के अनुसार)", en: "Expected date of delivery (as per doctor)" }, type: "date", required: true },
    { key: "from", label: { hi: "छुट्टी कब से", en: "Leave from" }, type: "date", required: true },
    { key: "till", label: { hi: "छुट्टी कब तक", en: "Leave till" }, type: "date", required: true },
    { key: "weeks", label: { hi: "कुल अवधि", en: "Total period" }, type: "select", options: [
      { hi: "26 सप्ताह", en: "26 weeks" },
      { hi: "12 सप्ताह", en: "12 weeks" },
      { hi: "कंपनी नीति के अनुसार", en: "as per company policy" },
    ] },
    { key: "nominee", label: { hi: "नॉमिनी (मेरी जगह भुगतान किसे) – चाहें तो", en: "Nominee for payment (optional)" }, placeholder: { hi: "जैसे: पति श्री सुनील कुमार", en: "e.g. husband Mr. Sunil Kumar" } },
    { key: "phone", label: { hi: "छुट्टी में संपर्क नंबर", en: "Contact number during leave" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{manager}},
{{company}}

विषय: मातृत्व अवकाश (Maternity Leave) हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, {{designation}}, इस संस्था में कार्यरत हूं। मैं गर्भवती हूं और डॉक्टर के अनुसार मेरी डिलीवरी की संभावित तारीख {{edd}} है।

अतः सामाजिक सुरक्षा संहिता 2020 के मातृत्व हितलाभ प्रावधानों और संस्था के नियमों के अनुसार मुझे दिनांक {{from}} से {{till}} तक कुल {{weeks}} का सवेतन मातृत्व अवकाश स्वीकृत करने की कृपा करें। डिलीवरी की संभावित तारीख से पहले के 12 महीनों में मैंने इस संस्था में 80 दिन से अधिक काम किया है।

मेरा ESIC IP नंबर (यदि लागू हो): {{esic}}
मेरे अनुपस्थित रहने पर भुगतान हेतु नॉमिनी: {{nominee}}

डॉक्टर का प्रमाण पत्र इस आवेदन के साथ संलग्न है। छुट्टी पर जाने से पहले मैं अपना काम सौंप दूंगी। छुट्टी के दौरान मुझसे इस नंबर पर संपर्क किया जा सकता है: {{phone}}

कृपया अवकाश की स्वीकृति लिखित में देने की कृपा करें।

धन्यवाद।

भवदीया,

(हस्ताक्षर)
{{name}}
{{designation}}

दिनांक: {{date}}

संलग्न:
1. डॉक्टर द्वारा गर्भावस्था/डिलीवरी की संभावित तारीख का प्रमाण पत्र
2. ESIC ई-पहचान पत्र की कॉपी (यदि लागू हो)`,
    en: `To,
{{manager}},
{{company}}

Subject: Application for maternity leave

Dear Sir/Madam,

I, {{name}}, {{designation}}, am employed with this organisation. I am pregnant and, as per my doctor, my expected date of delivery is {{edd}}.

I therefore request you to kindly sanction maternity leave with pay for {{weeks}}, from {{from}} to {{till}}, under the maternity benefit provisions of the Code on Social Security, 2020 and the organisation's rules. I have worked in this establishment for more than 80 days in the 12 months preceding my expected date of delivery.

My ESIC IP number (if applicable): {{esic}}
Nominee for payment in my absence: {{nominee}}

A medical certificate from my doctor is enclosed. I will hand over my work before proceeding on leave. During the leave I can be contacted on: {{phone}}

Kindly confirm the sanction of leave in writing.

Thanking you.

Yours sincerely,

(Signature)
{{name}}
{{designation}}

Date: {{date}}

Enclosures:
1. Doctor's certificate of pregnancy/expected date of delivery
2. Copy of ESIC e-Pehchan card (if applicable)`,
  },
  attach: [
    "डॉक्टर का प्रमाण पत्र, जिसमें गर्भावस्था और डिलीवरी की संभावित तारीख लिखी हो (डिलीवरी के बाद आवेदन हो तो जन्म/डिस्चार्ज का प्रमाण)",
    "ESIC वाली कर्मचारी: ई-पहचान कार्ड और ESIC डॉक्टर/डिस्पेंसरी का प्रमाण पत्र",
    "कंपनी का अपना लीव फॉर्म, अगर मांगा जाए",
  ],
  submit: [
    "छुट्टी शुरू होने से पहले लिखित आवेदन दें; डिलीवरी से पहले अधिकतम 8 सप्ताह की छुट्टी ली जा सकती है।",
    "HR को हाथ से दें और कॉपी पर रिसीविंग लें, या ईमेल से भेजें और जवाब संभालें; HRMS/ऐप हो तो वहां भी छुट्टी डालें।",
    "ESIC में बीमित हैं तो मातृत्व हितलाभ के लिए अपनी ESIC शाखा/डिस्पेंसरी से संपर्क करें; लाभ ESIC देता है, कंपनी नहीं।",
    "छुट्टी या भुगतान से इनकार हो, या इस दौरान नौकरी से निकाला जाए, तो राज्य के <strong>श्रम विभाग (Inspector-cum-Facilitator)</strong> में शिकायत करें; केंद्र क्षेत्र के संस्थानों के लिए <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a>।",
  ],
  tips: [
    "डिलीवरी की संभावित तारीख और छुट्टी की तारीखें डॉक्टर के प्रमाण पत्र से मिलाकर लिखें।",
    "दो या ज़्यादा जीवित बच्चे हैं तो अवधि 12 सप्ताह होती है; गलत अवधि न लिखें।",
    "गोद लेने या सरोगेसी (कमीशनिंग मां) की स्थिति में अवधि अलग है; HR से लिखित में पूछें।",
    "लौटने पर काम कैसे करेंगी (घर से काम/क्रेच सुविधा) यह भी HR से लिखित में तय करें, अगर कंपनी में सुविधा है।",
  ],
  notice: "यह कानून उन संस्थानों पर लागू है जो Code on Social Security के मातृत्व अध्याय में आते हैं। सरकारी कर्मचारियों के लिए अपने सेवा नियम (जैसे केंद्र के CCS (Leave) Rules) लागू होते हैं; अवधि और शर्तें अपने दफ्तर से पक्का करें।",
  official: [
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय", note: "लेबर कोड और नियम" },
    { href: "https://www.esic.gov.in/", title: "ESIC", note: "मातृत्व हितलाभ (बीमित महिलाओं के लिए); टोल-फ्री 1800-11-2526" },
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल", note: "केंद्र क्षेत्र के संस्थानों में शिकायत/दावा" },
  ],
  related: ["/service/esic.html"],
  faq: [
    { q: "मातृत्व अवकाश कितने दिन का मिलता है?", a: "Code on Social Security 2020 के अनुसार 26 सप्ताह तक, जिसमें से अधिकतम 8 सप्ताह डिलीवरी से पहले। दो या ज़्यादा जीवित बच्चे होने पर 12 सप्ताह।" },
    { q: "मातृत्व अवकाश के लिए कितने दिन काम करना ज़रूरी है?", a: "डिलीवरी की संभावित तारीख से पहले के 12 महीनों में उसी संस्था में कम से कम 80 दिन काम किया होना चाहिए।" },
    { q: "क्या छुट्टी के दौरान पूरा वेतन मिलता है?", a: "हां, यह सवेतन छुट्टी है; भुगतान औसत दैनिक मज़दूरी के हिसाब से होता है। ESIC में बीमित महिलाओं को यह पैसा ESIC देता है।" },
    { q: "क्या मातृत्व अवकाश में नौकरी से निकाला जा सकता है?", a: "नहीं, मातृत्व अवकाश के दौरान इस कारण नौकरी से निकालना या नोटिस देना कानून में मना है। ऐसा हो तो श्रम विभाग में शिकायत करें।" },
    { q: "मेडिकल बोनस क्या है?", a: "अगर नियोक्ता डिलीवरी से पहले और बाद की मुफ्त देखभाल नहीं देता, तो ₹3,500 (या सरकार की अधिसूचित राशि) का मेडिकल बोनस मिलता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
