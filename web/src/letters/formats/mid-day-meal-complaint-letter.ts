import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - National Food Security Act 2013 (indiacode.nic.in): s.5(1)(b) every child
//   up to Class VIII or aged 6-14 entitled to one free mid-day meal every day
//   except school holidays in local body, government and government-aided
//   schools; s.8 food security allowance if the entitled meal is not
//   supplied; s.15 District Grievance Redressal Officer.
// - Mid-Day Meal Rules 2015 (G.S.R. 743(E), 30 Sept 2015; summaries on
//   SCC Online / Drishti / wbxpress): food security allowance by the 15th of
//   the following month when the meal is not served on a school day; State
//   to fix responsibility if meals are not served on 3 consecutive school
//   days or 5 days in a month; meal tasted by 2-3 adults including at least
//   one teacher before serving; School Management Committee (RTE Act)
//   monitors quality, cleanliness and hygiene; random sampling by accredited
//   labs.
// - PIB (April 2025, via dsel.education.gov.in): PM POSHAN gives one hot
//   cooked meal to Balvatika and Classes I-VIII in government and
//   government-aided schools; material cost minimum Rs 6.78 (Balvatika /
//   primary) and Rs 10.17 (upper primary) per child per day from 1 May 2025;
//   states may add more. Nutrition norms 450 kcal/12 g protein (primary),
//   700 kcal/20 g protein (upper primary).
// - State toll-free numbers exist (e.g. UP MDM Authority 1800-1800-666) but
//   differ by state; only described generally.
export const midDayMealComplaintLetter: Letter = {
  slug: "mid-day-meal-complaint-letter",
  category: "complaint",
  emoji: "🍲",
  title: "Mid Day Meal Complaint Letter in Hindi 2026: PM POSHAN शिकायत पत्र",
  description: "स्कूल में मिड-डे मील (PM POSHAN) न मिलने, खराब/कम खाना या गंदगी की शिकायत का पत्र (हिंदी/English)। खाद्य सुरक्षा भत्ता, SMC और ज़िला अधिकारी।",
  h1: "मिड-डे मील (PM POSHAN) शिकायत पत्र 2026: खाना न मिले या खराब हो",
  short: { hi: "मिड-डे मील शिकायत", en: "Mid-day meal complaint" },
  lead: "सरकारी और सरकारी-सहायता प्राप्त स्कूलों में <strong>बालवाटिका और कक्षा 1 से 8</strong> के बच्चों को हर स्कूल दिवस पर <strong>एक गर्म पका हुआ भोजन मुफ्त</strong> मिलना बच्चे का कानूनी हक है (<strong>राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013, धारा 5</strong>)। खाना न बने तो <strong>मिड-डे मील नियम 2015</strong> के तहत राज्य को <strong>खाद्य सुरक्षा भत्ता</strong> देना होता है। खाना न मिले, कम या खराब मिले, या बनाने की जगह गंदी हो, तो यह पत्र <strong>प्रधानाध्यापक</strong> और <strong>खंड/ज़िला शिक्षा अधिकारी</strong> को दें।",
  facts: [
    ["कानूनी हक", "NFSA 2013 धारा 5(1)(b); मिड-डे मील नियम 2015"],
    ["किसे दें", "प्रधानाध्यापक, फिर खंड/ज़िला शिक्षा अधिकारी (PM POSHAN प्रभारी)"],
    ["खाना न मिले तो", "खाद्य सुरक्षा भत्ता: अगले महीने की 15 तारीख तक"],
    ["निगरानी", "विद्यालय प्रबंधन समिति (SMC); ज़िला शिकायत निवारण अधिकारी (NFSA धारा 15)"],
  ],
  to: "पहले स्कूल के <strong>प्रधानाध्यापक</strong> और <strong>विद्यालय प्रबंधन समिति (SMC) के अध्यक्ष</strong> को। सुनवाई न हो या मामला गंभीर हो तो <strong>खंड शिक्षा अधिकारी (BEO)</strong> या <strong>ज़िला शिक्षा/बेसिक शिक्षा अधिकारी</strong> को, जो ज़िले में PM POSHAN देखते हैं; कॉपी ज़िलाधिकारी को।",
  when: [
    "कई दिनों से स्कूल में खाना नहीं बन रहा",
    "खाना कम, कच्चा, बेस्वाद या मेन्यू के हिसाब से नहीं है",
    "खाने में कीड़े/गंदगी मिली या बच्चे बीमार पड़े",
    "रसोई गंदी है, पीने का साफ पानी नहीं, या बच्चों से बर्तन धुलवाए जाते हैं",
    "बच्चों के साथ जाति या किसी और आधार पर भेदभाव होता है",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (पद और पता)", en: "Addressed to (designation and address)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: खंड शिक्षा अधिकारी, विकासखंड मोहनलालगंज, लखनऊ", en: "e.g. Block Education Officer, Mohanlalganj block, Lucknow" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "role", label: { hi: "आप कौन हैं", en: "You are" }, type: "select", options: [
      { hi: "छात्र/छात्रा का अभिभावक", en: "parent of a student" },
      { hi: "विद्यालय प्रबंधन समिति (SMC) का सदस्य", en: "member of the School Management Committee (SMC)" },
      { hi: "गांव/वार्ड का निवासी", en: "resident of the village/ward" },
    ] },
    { key: "school", label: { hi: "स्कूल का नाम और पता", en: "School name and address" }, type: "textarea", required: true },
    { key: "child", label: { hi: "बच्चे का नाम और कक्षा (अगर अभिभावक हैं)", en: "Child's name and class (if parent)" } },
    { key: "problem", label: { hi: "मुख्य समस्या", en: "Main problem" }, type: "select", required: true, options: [
      { hi: "स्कूल में मध्याह्न भोजन नहीं बन/मिल रहा है", en: "mid-day meal is not being cooked/served in the school" },
      { hi: "भोजन मात्रा में कम और गुणवत्ता में खराब है", en: "the meal is short in quantity and poor in quality" },
      { hi: "भोजन में कीड़े/गंदगी मिली और बच्चों की तबीयत खराब हुई", en: "insects/dirt were found in the meal and children fell ill" },
      { hi: "रसोई और बर्तनों में साफ-सफाई नहीं है, साफ पानी नहीं है", en: "the kitchen and utensils are unhygienic and there is no clean water" },
      { hi: "बच्चों के साथ भोजन परोसने में भेदभाव किया जा रहा है", en: "children are discriminated against while serving the meal" },
    ] },
    { key: "since", label: { hi: "कब से / किन तारीखों को", en: "Since when / on which dates" }, required: true, placeholder: { hi: "जैसे: 01/10/2026 से 10/10/2026 तक खाना नहीं बना", en: "e.g. no meal from 01/10/2026 to 10/10/2026" } },
    { key: "details", label: { hi: "पूरा विवरण", en: "Full details" }, type: "textarea", required: true, placeholder: { hi: "क्या देखा, किससे बात की, उन्होंने क्या कहा; कितने बच्चे प्रभावित", en: "What you saw, whom you spoke to, what they said; how many children affected" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{school}} में प्रधानमंत्री पोषण (मध्याह्न भोजन) योजना में अनियमितता की शिकायत।

महोदय/महोदया,

मैं, {{name}}, {{role}} हूं। (बच्चे का नाम/कक्षा: {{child}})

मैं आपका ध्यान इस ओर दिलाना चाहता/चाहती हूं कि {{school}} में {{problem}}। समय/तारीख: {{since}}।

विवरण:
{{details}}

राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013 की धारा 5 के अनुसार कक्षा 8 तक के प्रत्येक बच्चे को हर स्कूल दिवस पर निःशुल्क पौष्टिक भोजन पाने का कानूनी अधिकार है, और मध्याह्न भोजन नियम 2015 के अनुसार भोजन न मिलने पर खाद्य सुरक्षा भत्ता देय है।

अतः आपसे निवेदन है कि:
1. विद्यालय का तुरंत निरीक्षण कराकर नियमित, पर्याप्त और साफ-सुथरा भोजन सुनिश्चित करें;
2. जिन दिनों भोजन नहीं मिला, उनके लिए बच्चों को नियमानुसार खाद्य सुरक्षा भत्ता दिलाएं;
3. लापरवाही के लिए ज़िम्मेदार व्यक्ति/एजेंसी पर नियमानुसार कार्रवाई करें;
4. की गई कार्रवाई की सूचना मुझे दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

प्रतिलिपि: प्रधानाध्यापक एवं अध्यक्ष, विद्यालय प्रबंधन समिति, {{school}}

संलग्न: फोटो/वीडियो, अन्य अभिभावकों के हस्ताक्षर, डॉक्टर की पर्ची (जो उपलब्ध हों)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint regarding irregularities in the PM POSHAN (Mid-Day Meal) scheme at {{school}}.

Sir/Madam,

I, {{name}}, am a {{role}}. (Child's name/class: {{child}})

I wish to bring to your notice that at {{school}}, {{problem}}. Period/dates: {{since}}.

Details:
{{details}}

Under Section 5 of the National Food Security Act, 2013, every child up to Class VIII has a legal right to a free nutritious meal on every school day, and under the Mid-Day Meal Rules, 2015 a food security allowance is payable when the meal is not provided.

I therefore request you to:
1. Get the school inspected immediately and ensure regular, adequate and hygienic meals;
2. Ensure payment of food security allowance to the children for the days the meal was not served, as per rules;
3. Take action as per rules against the person/agency responsible;
4. Inform me of the action taken.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Copy to: Head Teacher and Chairperson, School Management Committee, {{school}}

Enclosures: photos/videos, signatures of other parents, doctor's slip (whichever are available)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "खाने, रसोई या पानी की फोटो/वीडियो (तारीख के साथ)",
    "दूसरे अभिभावकों/SMC सदस्यों के नाम और हस्ताक्षर (सामूहिक शिकायत ज़्यादा असर करती है)",
    "बच्चे बीमार हुए हों तो डॉक्टर/अस्पताल की पर्ची",
    "पहले स्कूल को दी गई शिकायत की रिसीविंग, अगर दी हो",
  ],
  submit: [
    "पहले प्रधानाध्यापक और SMC अध्यक्ष से बात करें; SMC की बैठक में मुद्दा उठवाएं और कार्यवाही रजिस्टर में दर्ज करवाएं।",
    "सुधार न हो तो यह पत्र खंड शिक्षा अधिकारी/ज़िला शिक्षा अधिकारी कार्यालय में जमा करें और रिसीविंग लें; चाहें तो रजिस्टर्ड डाक से भेजें।",
    "कई राज्यों में मिड-डे मील का टोल-फ्री नंबर या CM हेल्पलाइन है; वहां भी शिकायत दर्ज कर शिकायत संख्या संभालें।",
    "भत्ता/कार्रवाई न मिले तो ज़िले के <strong>ज़िला शिकायत निवारण अधिकारी (NFSA धारा 15)</strong> या ज़िलाधिकारी को लिखें, फिर राज्य खाद्य आयोग में।",
  ],
  tips: [
    "खाना खाकर बच्चे बीमार हों तो पत्र का इंतज़ार न करें: तुरंत 108/112 पर कॉल करें और नज़दीकी अस्पताल ले जाएं।",
    "किसी व्यक्ति पर निजी आरोप लगाने के बजाय तारीख और तथ्य लिखें।",
    "मेन्यू स्कूल की दीवार पर लिखा होना चाहिए; उसकी फोटो लेकर लगाएं।",
    "बच्चों से खाना बनवाना या बर्तन धुलवाना गलत है; ऐसा हो तो पत्र में ज़रूर लिखें।",
  ],
  official: [
    { href: "https://pmposhan.education.gov.in/", title: "PM POSHAN (शिक्षा मंत्रालय)", note: "योजना की जानकारी, राज्यों के लिंक" },
    { href: "https://www.indiacode.nic.in/", title: "India Code (NFSA 2013 का पाठ)" },
  ],
  related: ["/service/midday-meal-scheme.html", "/service/pm-poshan-shakti-nirman.html", "/service/school-admission-rte.html"],
  faq: [
    { q: "मिड-डे मील की शिकायत कहां करें?", a: "पहले स्कूल के प्रधानाध्यापक और SMC को, फिर खंड/ज़िला शिक्षा अधिकारी को लिखित में। कई राज्यों में मिड-डे मील का टोल-फ्री नंबर या CM हेल्पलाइन भी है।" },
    { q: "स्कूल में खाना न बने तो बच्चों को क्या मिलता है?", a: "मिड-डे मील नियम 2015 के अनुसार खाना न मिलने पर राज्य सरकार बच्चे को खाद्य सुरक्षा भत्ता देती है, जो अगले महीने की 15 तारीख तक दिया जाना चाहिए।" },
    { q: "मिड-डे मील किन बच्चों को मिलता है?", a: "सरकारी और सरकारी-सहायता प्राप्त स्कूलों में बालवाटिका और कक्षा 1 से 8 तक के बच्चों को, हर स्कूल दिवस पर एक गर्म पका भोजन।" },
    { q: "खाने की गुणवत्ता कौन जांचता है?", a: "नियम के अनुसार परोसने से पहले कम से कम एक शिक्षक समेत 2-3 वयस्क (SMC सदस्य) खाना चखते हैं। विद्यालय प्रबंधन समिति गुणवत्ता और सफाई की निगरानी करती है।" },
    { q: "शिकायत पर कार्रवाई न हो तो?", a: "ज़िलाधिकारी या ज़िला शिकायत निवारण अधिकारी (NFSA) को लिखें। RTI से अपनी शिकायत पर कार्रवाई और स्कूल के भोजन रजिस्टर की जानकारी भी मांग सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
