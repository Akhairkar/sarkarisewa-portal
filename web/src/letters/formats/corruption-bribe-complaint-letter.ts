import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Prevention of Corruption Act 1988 as amended 2018 (indiacode.nic.in):
//   s.7 public servant obtaining/accepting undue advantage; s.8 giving
//   undue advantage is an offence, proviso: not applicable where the person
//   was compelled and reports the matter to the law enforcement / investigating
//   agency within 7 days (commentary: apnilaw, anantamias, LiveLaw).
// - CVC complaint handling policy (circular 2014, reiterated): CVC does not
//   entertain anonymous / pseudonymous complaints; complaint must have
//   verifiable facts; CVC deals with officers of central government /
//   central PSUs / public sector banks. Online complaint from cvc.gov.in.
// - State employees: state Anti-Corruption Bureau / Vigilance Department /
//   Lokayukta - names and helplines differ by state, so not listed.
// Whistle-blower (PIDPI) route exists through CVC; not detailed on page.
export const corruptionBribeComplaintLetter: Letter = {
  slug: "corruption-bribe-complaint-letter",
  category: "complaint",
  emoji: "🛑",
  title: "Bribe Complaint Letter in Hindi 2026: रिश्वत मांगने की शिकायत पत्र",
  description: "सरकारी कर्मचारी रिश्वत मांगे तो विजिलेंस/एंटी-करप्शन ब्यूरो या CVC को शिकायत का तैयार पत्र (हिंदी/English)। भ्रष्टाचार निवारण अधिनियम, 7 दिन का नियम।",
  h1: "रिश्वत मांगने की शिकायत पत्र 2026: विजिलेंस/एंटी-करप्शन को ऐसे लिखें",
  short: { hi: "रिश्वत की शिकायत", en: "Bribe demand complaint" },
  lead: "सरकारी कर्मचारी या अधिकारी काम के बदले पैसे मांगे, तो यह <strong>भ्रष्टाचार निवारण अधिनियम 1988 की धारा 7</strong> के तहत अपराध है। राज्य सरकार के कर्मचारी की शिकायत राज्य के <strong>एंटी-करप्शन ब्यूरो/सतर्कता (विजिलेंस) विभाग</strong> या लोकायुक्त को, और केंद्र सरकार/केंद्रीय उपक्रम/सरकारी बैंक के कर्मचारी की शिकायत <strong>CBI (एंटी-करप्शन)</strong>, उस विभाग के <strong>मुख्य सतर्कता अधिकारी</strong> या <strong>केंद्रीय सतर्कता आयोग (CVC)</strong> को करें। अगर मजबूरी में रिश्वत दे दी है, तो <strong>7 दिन</strong> के अंदर जांच एजेंसी को बताने पर ही आप खुद धारा 8 के अपराध से बचते हैं।",
  facts: [
    ["कानून", "भ्रष्टाचार निवारण अधिनियम 1988, धारा 7 (रिश्वत लेना)"],
    ["राज्य कर्मचारी", "राज्य एंटी-करप्शन ब्यूरो / विजिलेंस / लोकायुक्त"],
    ["केंद्र कर्मचारी", 'CBI, विभाग का CVO, या <a href="https://cvc.gov.in/" target="_blank" rel="noopener nofollow">CVC</a>'],
    ["मजबूरी में दी रिश्वत", "7 दिन के अंदर जांच एजेंसी को सूचना (धारा 8 का प्रावधान)"],
  ],
  to: "राज्य सरकार, ज़िला, तहसील, थाना, पंचायत या नगर निकाय के कर्मचारी के लिए: <strong>पुलिस अधीक्षक, एंटी-करप्शन ब्यूरो/सतर्कता विभाग</strong> (नाम राज्य के हिसाब से अलग, जैसे निगरानी, ACB, EOW-विजिलेंस)। केंद्र सरकार के दफ्तर, रेलवे, डाक, सरकारी बैंक के कर्मचारी के लिए: <strong>CBI की एंटी-करप्शन शाखा</strong>, उस संस्था के <strong>मुख्य सतर्कता अधिकारी (CVO)</strong> या <strong>CVC</strong>।",
  when: [
    "प्रमाण पत्र, ज़मीन, राशन, पेंशन, बिजली कनेक्शन जैसे काम के लिए पैसे मांगे गए",
    "\"सुविधा शुल्क\" के बिना फाइल आगे नहीं बढ़ाई जा रही",
    "मजबूरी में रिश्वत देनी पड़ी और अब शिकायत करनी है",
    "आप चाहते हैं कि अगली बार पैसे मांगने पर एजेंसी रंगे हाथ पकड़े",
  ],
  fields: [
    { key: "agency", label: { hi: "किसे भेज रहे हैं (पद, विभाग, पता)", en: "Addressed to (designation, agency, address)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पुलिस अधीक्षक, एंटी-करप्शन ब्यूरो, जयपुर", en: "e.g. Superintendent of Police, Anti-Corruption Bureau, Jaipur" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "official", label: { hi: "रिश्वत मांगने वाले का नाम/पद (जितना पता हो)", en: "Name/designation of official (as known)" }, required: true, placeholder: { hi: "जैसे: श्री ___, लिपिक", en: "e.g. Mr ___, Clerk" } },
    { key: "office", label: { hi: "उसका दफ्तर और पता", en: "His/her office and address" }, required: true },
    { key: "work", label: { hi: "आपका कौन सा काम था", en: "What work you needed" }, required: true, placeholder: { hi: "जैसे: दाखिल-खारिज (नामांतरण) आवेदन संख्या 1234", en: "e.g. Mutation application no. 1234" } },
    { key: "amount", label: { hi: "मांगी गई रकम (₹)", en: "Amount demanded (Rs)" }, type: "number", required: true },
    { key: "status", label: { hi: "अभी स्थिति", en: "Current status" }, type: "select", required: true, options: [
      { hi: "मैंने अभी तक रिश्वत नहीं दी है और देना नहीं चाहता/चाहती", en: "I have not paid the bribe and do not wish to pay" },
      { hi: "मजबूरी में रिश्वत देनी पड़ी; मैं 7 दिन के अंदर यह सूचना दे रहा/रही हूं", en: "I was compelled to pay the bribe; I am reporting within 7 days" },
    ] },
    { key: "details", label: { hi: "कब, कहां, कैसे मांगी (तारीख, गवाह, सबूत)", en: "When, where, how demanded (dates, witnesses, evidence)" }, type: "textarea", required: true, placeholder: { hi: "08/10/2026 को दफ्तर में कहा कि ₹5,000 दिए बिना काम नहीं होगा। मेरे भाई ___ साथ थे। फोन रिकॉर्डिंग है।", en: "On 08/10/2026 at the office he said the work won't be done without Rs 5,000. My brother ___ was present." } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{agency}}

विषय: {{office}} के {{official}} द्वारा ₹{{amount}} रिश्वत मांगने की शिकायत

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि {{office}} में पदस्थ {{official}} मेरे काम ({{work}}) के बदले मुझसे ₹{{amount}} की रिश्वत मांग रहे हैं।

घटना का विवरण:
{{details}}

वर्तमान स्थिति: {{status}}।

यह भ्रष्टाचार निवारण अधिनियम 1988 की धारा 7 के तहत अपराध है। अतः निवेदन है कि:
1. मामले की जांच कर संबंधित कर्मचारी के विरुद्ध कानूनी कार्रवाई की जाए;
2. आवश्यकता हो तो मैं आपकी टीम के साथ पूरा सहयोग करने को तैयार हूं;
3. मेरी पहचान गोपनीय रखी जाए और मेरा जायज़ काम बिना रिश्वत पूरा कराया जाए।

मैं प्रमाणित करता/करती हूं कि ऊपर दी गई जानकारी मेरी जानकारी में सत्य है।

प्रार्थी,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: आवेदन की पावती, उपलब्ध सबूत (रिकॉर्डिंग/मैसेज की कॉपी), पहचान पत्र की कॉपी`,
    en: `To,
{{agency}}

Subject: Complaint regarding demand of bribe of Rs {{amount}} by {{official}}, {{office}}

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to inform you that {{official}}, posted at {{office}}, is demanding a bribe of Rs {{amount}} from me for my work ({{work}}).

Details of the incident:
{{details}}

Present status: {{status}}.

This is an offence under Section 7 of the Prevention of Corruption Act, 1988. I therefore request that:
1. The matter be inquired into and legal action be taken against the official;
2. I am ready to fully cooperate with your team if required;
3. My identity be kept confidential and my legitimate work be done without any bribe.

I certify that the above information is true to the best of my knowledge.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: acknowledgement of application, available evidence (copy of recording/messages), copy of ID proof`,
  },
  attach: [
    "जिस काम के लिए आवेदन किया था, उसकी पावती/रसीद",
    "रिश्वत मांगने का कोई सबूत: कॉल रिकॉर्डिंग, मैसेज, गवाहों के नाम",
    "अपने पहचान पत्र की कॉपी",
  ],
  submit: [
    "रिश्वत अभी नहीं दी है तो पैसे देने से पहले ही राज्य के एंटी-करप्शन ब्यूरो/विजिलेंस दफ्तर में खुद जाकर यह पत्र दें; एजेंसी जांच के बाद रंगे हाथ पकड़ने (ट्रैप) की कार्रवाई कर सकती है।",
    "राज्य एजेंसी का पता और हेल्पलाइन नंबर राज्य पुलिस/सतर्कता विभाग की वेबसाइट पर मिलता है; नाम राज्य के हिसाब से अलग होता है।",
    'केंद्र सरकार के कर्मचारी के खिलाफ <a href="https://cvc.gov.in/" target="_blank" rel="noopener nofollow">CVC</a> की वेबसाइट पर ऑनलाइन शिकायत होती है, या CBI की एंटी-करप्शन शाखा/विभाग के CVO को पत्र भेजें।',
    "मजबूरी में रिश्वत दे दी हो तो <strong>7 दिन के अंदर</strong> एजेंसी को लिखित सूचना दें और रसीद संभालें।",
    "पत्र की रिसीविंग या ऑनलाइन शिकायत नंबर ज़रूर लें।",
  ],
  tips: [
    "नाम-पता के साथ शिकायत करें; CVC गुमनाम या फर्जी नाम वाली शिकायत पर कार्रवाई नहीं करता।",
    "सिर्फ वही लिखें जो आपने खुद देखा-सुना है; अंदाज़े या निजी दुश्मनी वाली बातें शिकायत कमज़ोर करती हैं।",
    "रिकॉर्डिंग/मैसेज मूल फोन में संभालकर रखें; एजेंसी जांच में मांग सकती है।",
    "शिकायत की बात दफ्तर में किसी को न बताएं, ताकि जांच पर असर न पड़े।",
  ],
  notice: "रिश्वत देना भी अपराध है। मजबूरी में दी गई रिश्वत में राहत तभी है जब आप 7 दिन के अंदर जांच एजेंसी को इसकी सूचना दें।",
  official: [
    { href: "https://cvc.gov.in/", title: "केंद्रीय सतर्कता आयोग (CVC)", note: "केंद्र सरकार के कर्मचारियों के खिलाफ शिकायत" },
    { href: "https://www.indiacode.nic.in/", title: "भ्रष्टाचार निवारण अधिनियम 1988 (India Code)" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "सरकारी कर्मचारी रिश्वत मांगे तो शिकायत कहां करें?", a: "राज्य सरकार के कर्मचारी के लिए राज्य के एंटी-करप्शन ब्यूरो/विजिलेंस विभाग या लोकायुक्त को; केंद्र सरकार, सरकारी बैंक या केंद्रीय उपक्रम के कर्मचारी के लिए CBI, उस संस्था के CVO या CVC को।" },
    { q: "क्या रिश्वत देने वाला भी फंसता है?", a: "हां, धारा 8 के तहत रिश्वत देना भी अपराध है। अगर मजबूरी में दी हो और 7 दिन के अंदर जांच एजेंसी को बता दें, तो यह धारा आप पर लागू नहीं होती।" },
    { q: "क्या गुमनाम शिकायत कर सकते हैं?", a: "CVC गुमनाम/फर्जी नाम वाली शिकायतों पर कार्रवाई नहीं करता। एजेंसियां शिकायतकर्ता की पहचान गोपनीय रखने की कोशिश करती हैं, इसलिए पत्र में यह मांग लिखें।" },
    { q: "रंगे हाथ पकड़वाने के लिए क्या करें?", a: "पैसे देने से पहले एंटी-करप्शन ब्यूरो/CBI दफ्तर जाकर लिखित शिकायत दें। एजेंसी शिकायत की जांच करके ट्रैप की योजना बनाती है। खुद से कोई जाल न बिछाएं।" },
    { q: "शिकायत के बाद काम रुक जाए तो?", a: "काम में बिना कारण देरी के लिए उसी दफ्तर के वरिष्ठ अधिकारी को लिखें, CPGRAMS/राज्य शिकायत पोर्टल पर शिकायत करें या RTI से फाइल की स्थिति पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
