import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Right to Information Act 2005 (indiacode.nic.in): s.19(1) first appeal
//   within 30 days of the decision or of the expiry of the reply period, to
//   the officer senior in rank to the PIO in the same public authority; late
//   appeal can be admitted for sufficient cause. s.19(6) appeal to be decided
//   within 30 days, extendable to 45 days with reasons in writing. s.19(3)
//   second appeal to the Information Commission within 90 days.
// - RTI Rules 2012 (DoPT): fee is prescribed only for the request (r.3) and
//   for supplying information (r.4); no fee is prescribed for a first appeal
//   to a central public authority. States follow their own rules.
// - rtionline.dopt.gov.in: online first appeal for central ministries.
export const rtiFirstAppealFormat: Letter = {
  slug: "rti-first-appeal-format",
  category: "rti",
  emoji: "📮",
  title: "RTI First Appeal Format in Hindi 2026: RTI प्रथम अपील पत्र",
  description: "RTI पहली अपील का तैयार फॉर्मेट (हिंदी/English): जवाब न मिलने या अधूरे जवाब पर धारा 19(1) के तहत 30 दिन में प्रथम अपीलीय अधिकारी को अपील करें।",
  h1: "RTI प्रथम अपील फॉर्मेट 2026: जवाब न मिले तो ऐसे करें अपील",
  short: { hi: "RTI पहली अपील", en: "RTI first appeal" },
  lead: "RTI आवेदन का <strong>30 दिन</strong> में जवाब न मिले, जवाब अधूरा/गलत हो या जानकारी देने से मना कर दिया जाए, तो RTI अधिनियम की <strong>धारा 19(1)</strong> के तहत उसी दफ्तर के <strong>प्रथम अपीलीय अधिकारी</strong> (PIO से वरिष्ठ अधिकारी) को पहली अपील की जाती है। अपील 30 दिन के अंदर करनी होती है और अधिकारी को 30 दिन (ज़्यादा से ज़्यादा 45 दिन) में फैसला देना होता है। केंद्र सरकार के दफ्तरों में पहली अपील की कोई फीस नहीं है।",
  facts: [
    ["कानून", "RTI अधिनियम 2005, धारा 19(1)"],
    ["अपील का समय", "जवाब मिलने या 30 दिन पूरे होने के बाद 30 दिन के अंदर"],
    ["फैसले का समय", "30 दिन, कारण लिखकर 45 दिन तक"],
    ["फीस", "केंद्र: कोई फीस नहीं; राज्य: राज्य के RTI नियम देखें"],
  ],
  to: "उसी सरकारी दफ्तर के <strong>प्रथम अपीलीय अधिकारी (First Appellate Authority)</strong> को, जो PIO से पद में बड़ा होता है। उसका नाम/पद अक्सर PIO के जवाब में या दफ्तर की वेबसाइट पर लिखा होता है।",
  when: [
    "RTI आवेदन के 30 दिन बाद भी कोई जवाब नहीं आया",
    "जवाब अधूरा, गोलमोल या गलत है",
    "जानकारी देने से मना कर दिया गया और कारण सही नहीं लगता",
    "जानकारी के लिए ज़्यादा फीस मांगी गई",
  ],
  fields: [
    { key: "faa", label: { hi: "प्रथम अपीलीय अधिकारी का पद और दफ्तर का पता", en: "First Appellate Authority designation and office" }, type: "textarea", required: true, placeholder: { hi: "जैसे: प्रथम अपीलीय अधिकारी, जिला आपूर्ति कार्यालय, पटना", en: "e.g. First Appellate Authority, District Supply Office, Patna" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर (चाहें तो)", en: "Mobile (optional)" }, type: "tel" },
    { key: "pio", label: { hi: "जिस PIO को आवेदन दिया था (पद और दफ्तर)", en: "PIO to whom application was made" }, required: true, placeholder: { hi: "जैसे: जन सूचना अधिकारी, जिला आपूर्ति कार्यालय, पटना", en: "e.g. PIO, District Supply Office, Patna" } },
    { key: "appdate", label: { hi: "RTI आवेदन की तारीख", en: "Date of RTI application" }, required: true, placeholder: { hi: "जैसे: 01/08/2026", en: "e.g. 01/08/2026" } },
    { key: "regno", label: { hi: "आवेदन/रजिस्ट्रेशन/डाक रसीद नंबर", en: "Application / registration / postal receipt no." } },
    { key: "ground", label: { hi: "अपील का कारण", en: "Ground of appeal" }, type: "select", required: true, options: [
      { hi: "30 दिन बीत जाने के बाद भी जन सूचना अधिकारी से कोई जवाब नहीं मिला", en: "No reply was received from the PIO even after 30 days" },
      { hi: "जन सूचना अधिकारी का जवाब अधूरा और भ्रामक है", en: "The reply of the PIO is incomplete and misleading" },
      { hi: "जानकारी देने से गलत आधार पर मना कर दिया गया", en: "Information was denied on wrong grounds" },
      { hi: "जानकारी के लिए अनुचित फीस मांगी गई", en: "An unreasonable fee was demanded for the information" },
    ] },
    { key: "replydate", label: { hi: "PIO के जवाब की तारीख (जवाब न आया हो तो \"कोई जवाब नहीं\")", en: "Date of PIO reply (or \"no reply\")" }, placeholder: { hi: "जैसे: 05/09/2026 या कोई जवाब नहीं", en: "e.g. 05/09/2026 or no reply" } },
    { key: "details", label: { hi: "क्या कमी है (हर बिंदु अलग लाइन में)", en: "What is missing (one point per line)" }, type: "textarea", placeholder: { hi: "बिंदु 2 की जानकारी नहीं दी गई\nबिंदु 3 में कॉपी के बजाय सिर्फ जवाब लिखा गया", en: "Point 2 not answered\nPoint 3: copy not given" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{faa}}

विषय: सूचना का अधिकार अधिनियम 2005 की धारा 19(1) के तहत प्रथम अपील

महोदय/महोदया,

1. अपीलकर्ता का नाम और पता: {{name}}, {{address}}

2. जिस जन सूचना अधिकारी के निर्णय/निष्क्रियता के विरुद्ध अपील है: {{pio}}

3. RTI आवेदन की तारीख: {{appdate}}
   आवेदन/रजिस्ट्रेशन/डाक रसीद संख्या: {{regno}}

4. जन सूचना अधिकारी के जवाब की तारीख: {{replydate}}

5. अपील का आधार: {{ground}}।

6. विवरण:
{{details}}

7. प्रार्थना: अतः निवेदन है कि जन सूचना अधिकारी को निर्देश दिया जाए कि मेरे RTI आवेदन में मांगी गई पूरी सूचना धारा 7(6) के अनुसार निःशुल्क और निश्चित समय में उपलब्ध कराई जाए, तथा अपील की सुनवाई होने पर मुझे सूचित किया जाए।

मैं प्रमाणित करता/करती हूं कि इस अपील में दी गई जानकारी मेरी जानकारी के अनुसार सही है और यही मामला किसी अन्य अपील में लंबित नहीं है।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. RTI आवेदन की कॉपी
2. फीस/डाक रसीद की कॉपी
3. जन सूचना अधिकारी के जवाब की कॉपी (यदि मिला हो)`,
    en: `To,
{{faa}}

Subject: First Appeal under Section 19(1) of the Right to Information Act, 2005

Sir/Madam,

1. Name and address of the appellant: {{name}}, {{address}}

2. Public Information Officer against whose decision/inaction this appeal is filed: {{pio}}

3. Date of RTI application: {{appdate}}
   Application / registration / postal receipt no.: {{regno}}

4. Date of reply of the PIO: {{replydate}}

5. Ground of appeal: {{ground}}.

6. Details:
{{details}}

7. Prayer: It is requested that the PIO be directed to provide the complete information sought in my RTI application, free of cost as per Section 7(6), within a fixed time, and that I be informed of the date of hearing of this appeal.

I certify that the facts stated in this appeal are true to the best of my knowledge and that no other appeal on the same matter is pending.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of the RTI application
2. Copy of fee / postal receipt
3. Copy of the PIO's reply (if received)`,
  },
  attach: [
    "RTI आवेदन की कॉपी और फीस/डाक की रसीद",
    "PIO का जवाब (अगर आया हो) और लिफाफे की कॉपी, जिससे जवाब मिलने की तारीख दिखे",
    "राज्य सरकार के दफ्तर में अपील फीस लगती हो तो उसकी रसीद (राज्य के नियम के अनुसार)",
  ],
  submit: [
    "अपील प्रिंट करके हस्ताक्षर करें और सभी कॉपी साथ लगाएं।",
    "उसी दफ्तर में प्रथम अपीलीय अधिकारी के नाम पर जमा करें और रिसीविंग लें, या <strong>स्पीड पोस्ट/रजिस्टर्ड डाक</strong> से भेजें।",
    'केंद्र सरकार के जिस विभाग में RTI ऑनलाइन लगाई थी, उसकी पहली अपील <a href="https://rtionline.dopt.gov.in/" target="_blank" rel="noopener nofollow">rtionline.dopt.gov.in</a> पर "Submit First Appeal" से भी हो सकती है।',
    "अपीलीय अधिकारी 30 दिन (अधिकतम 45 दिन) में फैसला न दे या फैसले से संतुष्ट न हों, तो 90 दिन के अंदर केंद्रीय/राज्य <strong>सूचना आयोग</strong> में दूसरी अपील करें।",
  ],
  tips: [
    "अपील PIO को नहीं, उसके वरिष्ठ अपीलीय अधिकारी को लिखें।",
    "पहली अपील में नई जानकारी न मांगें; सिर्फ उन्हीं बिंदुओं की बात करें जो RTI आवेदन में थे।",
    "30 दिन की समय सीमा निकल गई हो तो देरी का कारण साफ लिखें; अधिकारी उचित कारण पर देर से अपील भी ले सकता है।",
    "अपील और रसीद की कॉपी संभालें; दूसरी अपील में ये सब लगाना पड़ता है।",
  ],
  official: [
    { href: "https://rtionline.dopt.gov.in/", title: "RTI Online (केंद्र सरकार)", note: "ऑनलाइन पहली अपील" },
    { href: "https://www.indiacode.nic.in/handle/123456789/2065", title: "RTI अधिनियम 2005 (India Code)" },
  ],
  related: ["/support/rti-guide.html"],
  faq: [
    { q: "RTI की पहली अपील कितने दिन में करनी होती है?", a: "PIO का जवाब मिलने के 30 दिन के अंदर, या जवाब न आए तो आवेदन के 30 दिन पूरे होने के बाद 30 दिन के अंदर। उचित कारण हो तो अधिकारी देर से अपील भी स्वीकार कर सकता है।" },
    { q: "प्रथम अपील की फीस कितनी है?", a: "केंद्र सरकार के दफ्तरों में पहली अपील पर कोई फीस नहीं है। कुछ राज्यों के RTI नियमों में अपील फीस है, इसलिए राज्य के दफ्तर के लिए राज्य के नियम या दफ्तर से पूछें।" },
    { q: "प्रथम अपीलीय अधिकारी कौन होता है?", a: "उसी दफ्तर में PIO से वरिष्ठ अधिकारी। उसका पद अक्सर PIO के जवाब, दफ्तर के बोर्ड या वेबसाइट पर लिखा होता है।" },
    { q: "पहली अपील पर फैसला कितने दिन में आता है?", a: "धारा 19(6) के अनुसार 30 दिन में; कारण लिखकर 45 दिन तक बढ़ सकता है।" },
    { q: "पहली अपील से भी जानकारी न मिले तो?", a: "फैसले की तारीख (या फैसला होना था उस तारीख) से 90 दिन के अंदर केंद्रीय या राज्य सूचना आयोग में दूसरी अपील करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
