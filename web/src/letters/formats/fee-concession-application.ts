import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Right of Children to Free and Compulsory Education Act 2009
//   (indiacode.nic.in/handle/123456789/2086): s.12(1)(c) private unaided
//   and specified-category schools admit at least 25% of the entry class
//   from weaker-section/disadvantaged children and give them free
//   elementary education (till class 8); s.3 free education in government
//   schools for 6-14.
// - National Scholarship Portal (scholarships.gov.in): central and many
//   state scholarships are applied online there.
// - A fee concession/waiver in a private school or college is at the
//   management's discretion (and state fee-regulation rules, which differ),
//   so the page gives no percentages or income limits.
export const feeConcessionApplication: Letter = {
  slug: "fee-concession-application",
  category: "school",
  emoji: "💰",
  title: "Fee Concession Application in Hindi 2026: फीस माफी प्रार्थना पत्र",
  description: "स्कूल/कॉलेज में फीस माफी या फीस में छूट का प्रार्थना पत्र (हिंदी/English)। कारण चुनें, जानकारी भरें, प्रिंट करें। RTE की मुफ्त सीट और स्कॉलरशिप की जानकारी भी।",
  h1: "फीस माफी / फीस में छूट के लिए प्रार्थना पत्र 2026",
  short: { hi: "फीस माफी प्रार्थना पत्र", en: "Fee concession application" },
  lead: "आर्थिक तंगी, पिता की नौकरी छूटने, बीमारी या परिवार में मृत्यु जैसी स्थिति में <strong>प्रधानाचार्य</strong> (स्कूल) या <strong>प्राचार्य/प्रबंधन</strong> (कॉलेज) को फीस माफी या छूट का प्रार्थना पत्र दिया जाता है। प्राइवेट स्कूल/कॉलेज में छूट देना प्रबंधन के फैसले पर होता है, इसलिए कारण सच्चा और सबूत के साथ लिखें। ध्यान दें: सरकारी स्कूल में कक्षा 1-8 की पढ़ाई मुफ्त है, और <strong>RTE धारा 12(1)(c)</strong> की 25% सीट पर दाखिला लेने वाले बच्चों से प्राइवेट स्कूल फीस नहीं ले सकते।",
  facts: [
    ["किसे दें", "प्रधानाचार्य / कॉलेज प्राचार्य / प्रबंधन समिति"],
    ["छूट कितनी", "स्कूल/कॉलेज के नियम और प्रबंधन पर निर्भर"],
    ["RTE सीट", "25% सीट वाले बच्चों की कक्षा 8 तक पढ़ाई मुफ्त"],
    ["दूसरा रास्ता", '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">राष्ट्रीय छात्रवृत्ति पोर्टल</a> और राज्य की छात्रवृत्ति'],
  ],
  to: "स्कूल में <strong>प्रधानाचार्य/प्रधानाध्यापक</strong> को; कॉलेज में <strong>प्राचार्य (Principal)</strong> या प्रबंधन/फीस समिति को। कई कॉलेजों में फीस माफी (Freeship) का अपना फॉर्म होता है, वह भी भरें।",
  when: [
    "परिवार की आमदनी कम है या कमाने वाले की नौकरी छूट गई",
    "घर में लंबी बीमारी, दुर्घटना या कमाने वाले सदस्य की मृत्यु",
    "एक ही स्कूल में दो-तीन भाई-बहन पढ़ रहे हैं (सिबलिंग छूट)",
    "बाढ़, फसल खराब होने या किसी आपदा से नुकसान",
    "मेधावी छात्र के लिए फीस में छूट मांगनी हो",
  ],
  fields: [
    { key: "to", label: { hi: "किसे लिख रहे हैं", en: "Addressed to" }, type: "select", options: [
      { hi: "प्रधानाचार्य/प्रधानाध्यापक", en: "The Principal/Headmaster" },
      { hi: "प्राचार्य", en: "The Principal" },
      { hi: "अध्यक्ष/सचिव, प्रबंधन समिति", en: "The Chairman/Secretary, Managing Committee" },
    ] },
    { key: "school", label: { hi: "स्कूल/कॉलेज का नाम और पता", en: "School/college name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "class", label: { hi: "कक्षा/कोर्स और सेक्शन", en: "Class/course and section" }, required: true, placeholder: { hi: "जैसे: 10 (ब) / B.A. द्वितीय वर्ष", en: "e.g. 10 (B) / B.A. 2nd year" } },
    { key: "roll", label: { hi: "प्रवेश/रोल नंबर", en: "Admission/roll no." } },
    { key: "parent", label: { hi: "अभिभावक का नाम और काम", en: "Parent's name and occupation" }, required: true, placeholder: { hi: "जैसे: रामलाल, दिहाड़ी मज़दूर", en: "e.g. Ramlal, daily-wage labourer" } },
    { key: "reason", label: { hi: "मुख्य कारण", en: "Main reason" }, type: "select", options: [
      { hi: "परिवार की आर्थिक स्थिति कमज़ोर है और पूरी फीस देना संभव नहीं है", en: "the financial condition of my family is weak and we cannot pay the full fee" },
      { hi: "मेरे पिता/अभिभावक की नौकरी हाल ही में छूट गई है", en: "my father/guardian has recently lost his job" },
      { hi: "परिवार में लंबी बीमारी के इलाज पर बहुत खर्च हो रहा है", en: "a long illness in the family is causing heavy medical expenses" },
      { hi: "परिवार के कमाने वाले सदस्य का निधन हो गया है", en: "the earning member of my family has passed away" },
      { hi: "हमारे परिवार के दो/तीन बच्चे इसी विद्यालय में पढ़ते हैं", en: "two/three children of our family study in this school" },
    ] },
    { key: "income", label: { hi: "परिवार की सालाना आय (चाहें तो)", en: "Annual family income (optional)" }, placeholder: { hi: "जैसे: ₹80,000 (आय प्रमाण पत्र के अनुसार)", en: "e.g. Rs 80,000 (as per income certificate)" } },
    { key: "ask", label: { hi: "क्या चाहिए", en: "What you request" }, type: "select", options: [
      { hi: "पूरी फीस माफ करने", en: "full waiver of the fee" },
      { hi: "फीस में आंशिक छूट देने", en: "a partial concession in the fee" },
      { hi: "फीस किस्तों में जमा करने की अनुमति देने", en: "permission to pay the fee in instalments" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{school}}

विषय: फीस माफी/फीस में छूट हेतु प्रार्थना पत्र

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, आपके विद्यालय/महाविद्यालय की कक्षा {{class}} का छात्र/छात्रा हूं।
प्रवेश/रोल नंबर: {{roll}}

मेरे पिता/अभिभावक {{parent}} हैं। {{reason}}।
परिवार की सालाना आय: {{income}}

मैं पढ़ाई में नियमित हूं और आगे भी मन लगाकर पढ़ना चाहता/चाहती हूं, परंतु इस स्थिति में फीस के कारण मेरी पढ़ाई रुक सकती है।

अतः आपसे विनम्र प्रार्थना है कि मेरी स्थिति को देखते हुए मुझे {{ask}} की कृपा करें। इसके लिए ज़रूरी प्रमाण पत्र संलग्न हैं; विद्यालय कोई और दस्तावेज़ मांगेगा तो मैं वह भी दे दूंगा/दूंगी।

आपकी इस कृपा के लिए मैं सदैव आभारी रहूंगा/रहूंगी।

आपका आज्ञाकारी शिष्य/आपकी आज्ञाकारी शिष्या,

(हस्ताक्षर)
नाम: {{name}}
कक्षा: {{class}}
मोबाइल: {{phone}}

अभिभावक के हस्ताक्षर: ________

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आय प्रमाण पत्र / BPL या राशन कार्ड की कॉपी
2. कारण से जुड़ा प्रमाण (जैसे मेडिकल पर्चे, मृत्यु प्रमाण पत्र, नौकरी छूटने का पत्र)
3. पिछली कक्षा की अंकतालिका की कॉपी`,
    en: `To,
{{to}},
{{school}}

Subject: Application for fee waiver/concession

Respected Sir/Madam,

I, {{name}}, am a student of class {{class}} of your school/college.
Admission/roll no.: {{roll}}

My father/guardian is {{parent}}. Most respectfully, I wish to state that {{reason}}.
Annual family income: {{income}}

I am regular in my studies and wish to continue them with full dedication, but in this situation my education may stop because of the fee.

I therefore humbly request you to consider my situation and grant me {{ask}}. The necessary certificates are enclosed; I will submit any other document the institution may require.

I shall be ever grateful to you for this kindness.

Yours obediently,

(Signature)
Name: {{name}}
Class: {{class}}
Mobile: {{phone}}

Signature of parent/guardian: ________

Place: {{place}}
Date: {{date}}

Enclosures:
1. Income certificate / copy of BPL or ration card
2. Proof of the reason (e.g. medical papers, death certificate, job-loss letter)
3. Copy of the previous class marksheet`,
  },
  attach: [
    "आय प्रमाण पत्र (तहसील/ऑनलाइन से बना) या BPL/राशन कार्ड की कॉपी",
    "कारण का सबूत: मेडिकल पर्चे/बिल, मृत्यु प्रमाण पत्र, नौकरी छूटने का पत्र आदि",
    "पिछली कक्षा की अंकतालिका (अच्छे अंक हों तो मदद मिलती है)",
  ],
  submit: [
    "पत्र प्रिंट करें, छात्र और अभिभावक दोनों हस्ताक्षर करें, कागज़ों की कॉपी लगाएं।",
    "स्कूल ऑफिस/प्रधानाचार्य को दें और एक कॉपी पर रिसीविंग लें; हो सके तो प्रधानाचार्य से मिलकर स्थिति बताएं।",
    "सत्र की शुरुआत में या फीस की आखिरी तारीख से पहले आवेदन दें; बाद में छूट मिलना मुश्किल होता है।",
    'साथ ही <a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)</a> और अपने राज्य के छात्रवृत्ति पोर्टल पर योग्य योजना में आवेदन करें।',
    "बच्चा RTE की 25% सीट पर दाखिल है और फिर भी फीस मांगी जा रही है, तो ज़िला शिक्षा अधिकारी (DEO) को लिखित शिकायत करें।",
  ],
  tips: [
    "कारण सच्चा और ठोस लिखें; गलत जानकारी पकड़ी जाने पर छूट रद्द हो सकती है।",
    "आमदनी का सबूत (आय प्रमाण पत्र) ज़रूर लगाएं; बिना सबूत ज़्यादातर आवेदन लौट जाते हैं।",
    "पूरी माफी न मिले तो किस्तों में फीस की अनुमति मांगें; यह अक्सर आसानी से मिल जाती है।",
    "छूट का फैसला लिखित में लें, ताकि बाद में फीस को लेकर विवाद न हो।",
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "केंद्र और कई राज्यों की छात्रवृत्ति" },
    { href: "https://www.indiacode.nic.in/handle/123456789/2086", title: "शिक्षा का अधिकार (RTE) अधिनियम 2009", note: "धारा 12(1)(c): 25% मुफ्त सीट" },
  ],
  related: ["/students/", "/service/national-scholarship-portal.html", "/service/school-admission-rte.html", "/service/income-certificate.html"],
  faq: [
    { q: "फीस माफी का प्रार्थना पत्र किसे लिखें?", a: "स्कूल में प्रधानाचार्य को, कॉलेज में प्राचार्य या प्रबंधन/फीस समिति को। कई कॉलेजों में फीस माफी (Freeship) का अपना फॉर्म भी होता है।" },
    { q: "क्या प्राइवेट स्कूल फीस माफ करने के लिए बाध्य है?", a: "आम तौर पर नहीं; छूट देना प्रबंधन का फैसला है। पर RTE धारा 12(1)(c) की 25% सीट पर दाखिल बच्चों की कक्षा 8 तक पढ़ाई मुफ्त होती है, उनसे फीस नहीं ली जा सकती।" },
    { q: "फीस माफी के लिए कौन से कागज़ लगाएं?", a: "आय प्रमाण पत्र या BPL/राशन कार्ड, कारण का सबूत (मेडिकल, मृत्यु प्रमाण पत्र आदि) और पिछली अंकतालिका।" },
    { q: "फीस माफी न मिले तो क्या करें?", a: "किस्तों में फीस की अनुमति मांगें, और राष्ट्रीय छात्रवृत्ति पोर्टल या राज्य की छात्रवृत्ति योजना में आवेदन करें।" },
    { q: "सरकारी स्कूल में फीस लगती है क्या?", a: "RTE कानून के तहत 6 से 14 साल (कक्षा 1-8) की पढ़ाई सरकारी स्कूल में मुफ्त है। 9वीं से आगे की फीस राज्य के नियम से तय होती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
