import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - DARPG OM dated 23 Aug 2024, "Comprehensive guidelines for handling the
//   Public Grievances" (pgportal.gov.in; staffnews / Morung Express
//   summaries): redressal timeline reduced from 30 to 21 days; interim reply
//   where more time is needed; feedback call to citizen after disposal; if
//   not satisfied, appeal to the next senior authority (Nodal / Sub
//   Appellate Authority).
// - DARPG circular 24 Feb 2025 (via NPS CRA): appeal can be filed through
//   portal, chatbot, WhatsApp and feedback call centre; only one appeal per
//   grievance.
// - pgportal.gov.in: lodge grievance online (registration with mobile),
//   matters generally not taken up: sub-judice matters, personal/family
//   disputes, RTI matters, matters affecting territorial integrity /
//   foreign relations, suggestions.
// State government matters go to the state's own grievance portal; page
// says so without naming state portals.
export const cpgramsComplaintFormat: Letter = {
  slug: "cpgrams-complaint-format",
  category: "complaint",
  emoji: "🏛️",
  title: "CPGRAMS Complaint Format in Hindi 2026: PG Portal शिकायत नमूना",
  description: "केंद्र सरकार के विभाग के खिलाफ CPGRAMS (pgportal.gov.in) पर शिकायत का तैयार नमूना (हिंदी/English)। 21 दिन में निपटारा, अपील का तरीका और ज़रूरी बातें।",
  h1: "CPGRAMS शिकायत फॉर्मेट 2026: PG Portal पर लिखने के लिए तैयार शिकायत",
  short: { hi: "CPGRAMS शिकायत", en: "CPGRAMS grievance" },
  lead: "केंद्र सरकार के किसी मंत्रालय, विभाग या उसके दफ्तर (जैसे डाक, रेलवे, EPFO, पासपोर्ट, सरकारी बैंक, केंद्रीय पेंशन) से काम न हो तो <strong>CPGRAMS (pgportal.gov.in)</strong> पर ऑनलाइन शिकायत करें। DARPG के अगस्त 2024 के दिशा-निर्देशों के अनुसार शिकायत का निपटारा <strong>21 दिन</strong> में होना चाहिए; ज़्यादा समय लगे तो अंतरिम जवाब देना होता है। जवाब से संतुष्ट न हों तो पोर्टल पर ही <strong>अपील</strong> कर सकते हैं। नीचे जानकारी भरें, शिकायत का साफ-सुथरा टेक्स्ट तैयार हो जाएगा, जिसे कॉपी करके पोर्टल पर चिपकाएं।",
  facts: [
    ["कहां", '<a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> (CPGRAMS)'],
    ["निपटारे का समय", "21 दिन (DARPG दिशा-निर्देश, अगस्त 2024)"],
    ["फीस", "कोई फीस नहीं"],
    ["संतुष्ट न हों तो", "पोर्टल पर अपील (एक शिकायत पर एक अपील)"],
  ],
  to: "पोर्टल पर <strong>संबंधित केंद्रीय मंत्रालय/विभाग</strong> चुनें; शिकायत उस विभाग के शिकायत अधिकारी (GRO) तक जाती है। राज्य सरकार के विभाग का मामला हो तो पोर्टल पर राज्य चुनें या राज्य के अपने शिकायत पोर्टल का इस्तेमाल करें।",
  when: [
    "केंद्र सरकार के दफ्तर में आवेदन महीनों से लटका है",
    "EPFO क्लेम, केंद्रीय पेंशन, डाक, रेलवे रिफंड, पासपोर्ट आदि में देरी",
    "सरकारी बैंक या केंद्र के उपक्रम से सेवा में लापरवाही",
    "किसी अधिकारी ने बिना कारण काम रोक रखा है",
  ],
  fields: [
    { key: "ministry", label: { hi: "मंत्रालय/विभाग", en: "Ministry / Department" }, required: true, placeholder: { hi: "जैसे: श्रम एवं रोज़गार मंत्रालय (EPFO)", en: "e.g. Ministry of Labour & Employment (EPFO)" } },
    { key: "office", label: { hi: "संबंधित दफ्तर और शहर", en: "Concerned office and city" }, required: true, placeholder: { hi: "जैसे: क्षेत्रीय भविष्य निधि कार्यालय, कानपुर", en: "e.g. Regional PF Office, Kanpur" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "refno", label: { hi: "आवेदन/क्लेम/खाता संदर्भ संख्या", en: "Application / claim / reference no." }, required: true, placeholder: { hi: "जैसे: क्लेम ID UPKNP0012345 (बैंक हो तो खाते के सिर्फ आखिरी 4 अंक)", en: "e.g. Claim ID UPKNP0012345 (for banks, last 4 digits only)" } },
    { key: "since", label: { hi: "आवेदन कब दिया था", en: "Applied on" }, required: true },
    { key: "issue", label: { hi: "समस्या का प्रकार", en: "Type of problem" }, type: "select", required: true, options: [
      { hi: "आवेदन पर तय समय से ज़्यादा देरी", en: "delay beyond the prescribed time on my application" },
      { hi: "बिना सही कारण आवेदन/क्लेम अस्वीकार", en: "application/claim rejected without valid reason" },
      { hi: "भुगतान/रिफंड नहीं मिला", en: "payment/refund not received" },
      { hi: "कर्मचारी का गलत व्यवहार या लापरवाही", en: "misbehaviour or negligence of staff" },
    ] },
    { key: "details", label: { hi: "क्रम से तथ्य (क्या हुआ, कब, किससे बात हुई)", en: "Facts in order (what, when, whom you contacted)" }, type: "textarea", required: true, placeholder: { hi: "1. 10/03/2026 को PF क्लेम किया।\n2. 3 बार दफ्तर गया, कहा गया जल्द होगा।\n3. अब तक भुगतान नहीं।", en: "1. Filed PF claim on 10/03/2026.\n2. Visited office 3 times.\n3. Not paid yet." } },
    { key: "relief", label: { hi: "आप क्या चाहते हैं", en: "Relief sought" }, type: "textarea", required: true, placeholder: { hi: "मेरा क्लेम जल्द निपटाकर भुगतान किया जाए और देरी का कारण बताया जाए", en: "Settle my claim and pay at the earliest, and explain the delay" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `मंत्रालय/विभाग: {{ministry}}
संबंधित कार्यालय: {{office}}

विषय: {{issue}} – संदर्भ संख्या {{refno}}

महोदय/महोदया,

मैं, {{name}}, आपके विभाग से जुड़ी निम्न समस्या के समाधान हेतु यह शिकायत दर्ज कर रहा/रही हूं। मैंने दिनांक {{since}} को आवेदन किया था (संदर्भ संख्या: {{refno}}), लेकिन अब तक समाधान नहीं हुआ है।

तथ्य:
{{details}}

अनुरोध:
{{relief}}

कृपया संबंधित अधिकारी को निर्देश दें कि मेरी शिकायत पर तय समय में कार्रवाई करके लिखित/पोर्टल पर कारण सहित जवाब दें। मैं ज़रूरी दस्तावेज़ इस शिकायत के साथ अपलोड कर रहा/रही हूं।

नाम: {{name}}
मोबाइल: {{phone}}
स्थान: {{place}}
दिनांक: {{date}}`,
    en: `Ministry/Department: {{ministry}}
Concerned office: {{office}}

Subject: {{issue}} – Reference no. {{refno}}

Sir/Madam,

I, {{name}}, am lodging this grievance for redressal of the following problem relating to your department. I applied on {{since}} (reference no.: {{refno}}), but the matter has not been resolved so far.

Facts:
{{details}}

Request:
{{relief}}

Kindly direct the concerned officer to act on my grievance within the prescribed time and give a reasoned reply in writing / on the portal. I am uploading the relevant documents with this grievance.

Name: {{name}}
Mobile: {{phone}}
Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पहले दिए आवेदन/क्लेम की पावती या स्क्रीनशॉट (PDF में अपलोड)",
    "दफ्तर से मिला कोई पत्र या ईमेल",
    "पहचान या खाते से जुड़ा ज़रूरी कागज़ (सिर्फ उतना जितना मामले के लिए ज़रूरी हो)",
  ],
  submit: [
    '<a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> खोलें, मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
    "\"Lodge Public Grievance\" चुनें, संबंधित मंत्रालय/विभाग और श्रेणी चुनें।",
    "ऊपर बना शिकायत का टेक्स्ट कॉपी करके विवरण वाले खाने में चिपकाएं और कागज़ PDF में अपलोड करें।",
    "सबमिट करने पर मिला <strong>रजिस्ट्रेशन नंबर</strong> लिख लें; इसी से पोर्टल पर स्थिति देखें।",
    "जवाब से संतुष्ट न हों तो पोर्टल पर उसी शिकायत के सामने <strong>Appeal</strong> करें; अपील विभाग के वरिष्ठ अपीलीय अधिकारी के पास जाती है।",
  ],
  tips: [
    "एक शिकायत में एक ही मामला लिखें और सही मंत्रालय चुनें, वरना शिकायत इधर-उधर ट्रांसफर होने में समय जाता है।",
    "अदालत में चल रहे मामले, पारिवारिक/निजी विवाद, RTI से जुड़े मामले और सुझाव CPGRAMS पर आम तौर पर नहीं लिए जाते।",
    "तारीखें और संदर्भ संख्या ज़रूर लिखें; बिना ब्योरे वाली शिकायत अक्सर \"जानकारी अधूरी\" लिखकर बंद हो जाती है।",
    "बैंक खाता, आधार या कार्ड का पूरा नंबर न लिखें; ज़रूरत हो तो आखिरी 4 अंक।",
  ],
  official: [
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (PG Portal)", note: "शिकायत दर्ज करें, स्थिति देखें, अपील करें" },
    { href: "https://darpg.gov.in/", title: "प्रशासनिक सुधार और लोक शिकायत विभाग (DARPG)" },
  ],
  related: ["/support/helpline-directory.html", "/service/epfo.html"],
  faq: [
    { q: "CPGRAMS पर शिकायत कितने दिन में निपटती है?", a: "DARPG के अगस्त 2024 के दिशा-निर्देशों के अनुसार 21 दिन में। ज़्यादा समय लगे तो विभाग को अंतरिम जवाब देना होता है।" },
    { q: "CPGRAMS पर शिकायत की फीस कितनी है?", a: "कोई फीस नहीं। शिकायत pgportal.gov.in या CPGRAMS मोबाइल ऐप से मुफ्त दर्ज होती है।" },
    { q: "जवाब से संतुष्ट न हों तो क्या करें?", a: "पोर्टल पर उसी शिकायत पर अपील करें। एक शिकायत पर एक ही अपील होती है, जो विभाग के वरिष्ठ अधिकारी देखते हैं।" },
    { q: "क्या राज्य सरकार की शिकायत भी CPGRAMS पर होती है?", a: "पोर्टल पर राज्य सरकार चुनने का विकल्प है और शिकायत राज्य को भेजी जाती है, पर कई राज्यों के अपने शिकायत पोर्टल/हेल्पलाइन हैं जो राज्य के मामलों में तेज़ रहते हैं।" },
    { q: "CPGRAMS पर कौन से मामले नहीं लिए जाते?", a: "अदालत में लंबित मामले, निजी/पारिवारिक विवाद, RTI से जुड़े मामले, देश की अखंडता/विदेश संबंधों से जुड़े मामले और सुझाव आम तौर पर नहीं लिए जाते।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
