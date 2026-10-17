import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Right to Information Act 2005 (indiacode.nic.in): s.19(3) second appeal
//   to the Central / State Information Commission within 90 days from the
//   date the first appeal decision should have been made or was received;
//   late appeal admissible for sufficient cause. s.18 complaint to the
//   Commission. s.20 penalty on PIO.
// - RTI Rules 2012 (DoPT) r.8: contents of the appeal (appellant and CPIO
//   details, particulars of order, brief facts, prayer, grounds,
//   verification) and documents to be attached, duly authenticated
//   (RTI application, CPIO reply, first appeal, first appeal order, other
//   documents relied on, index); r.9 appeal may be returned if documents
//   are missing.
// - cic.gov.in FAQ (via search extract): no fee for second appeal or
//   complaint; one copy with proof of service on the CPIO and First
//   Appellate Authority; online filing from cic.gov.in with signed /
//   self-attested scanned documents. CIC moved to the upgraded AppCoMS 2.0
//   portal in Aug 2026 (vikaspedia), so the page links the CIC homepage.
// State Information Commissions follow state rules; the page says so.
export const rtiSecondAppealFormat: Letter = {
  slug: "rti-second-appeal-format",
  category: "rti",
  emoji: "⚖️",
  title: "RTI Second Appeal Format in Hindi 2026: सूचना आयोग अपील पत्र",
  description: "RTI दूसरी अपील का तैयार फॉर्मेट (हिंदी/English): पहली अपील के बाद भी जानकारी न मिले तो 90 दिन में केंद्रीय/राज्य सूचना आयोग में अपील करें।",
  h1: "RTI द्वितीय अपील फॉर्मेट 2026: सूचना आयोग में अपील कैसे करें",
  short: { hi: "RTI दूसरी अपील", en: "RTI second appeal" },
  lead: "पहली अपील पर फैसला न आए या फैसले के बाद भी पूरी जानकारी न मिले, तो RTI अधिनियम की <strong>धारा 19(3)</strong> के तहत <strong>90 दिन</strong> के अंदर सूचना आयोग में दूसरी अपील होती है। केंद्र सरकार के दफ्तर के लिए <strong>केंद्रीय सूचना आयोग (CIC)</strong> और राज्य सरकार के दफ्तर के लिए <strong>राज्य सूचना आयोग</strong>। CIC में दूसरी अपील की कोई फीस नहीं है, लेकिन RTI नियम 2012 के नियम 8 वाले कागज़ (RTI आवेदन, जवाब, पहली अपील, उसका आदेश) साथ लगाना ज़रूरी है।",
  facts: [
    ["कानून", "RTI अधिनियम 2005, धारा 19(3)"],
    ["समय सीमा", "पहली अपील का फैसला मिलने/होने की तारीख से 90 दिन"],
    ["किसे", "केंद्रीय सूचना आयोग या राज्य सूचना आयोग"],
    ["फीस (CIC)", "कोई फीस नहीं"],
  ],
  to: "केंद्र सरकार के मंत्रालय, विभाग, बैंक, रेलवे आदि के लिए <strong>केंद्रीय सूचना आयोग, बाबा गंग नाथ मार्ग, मुनिरका, नई दिल्ली</strong> को; राज्य सरकार या पंचायत/नगर निकाय के दफ्तर के लिए अपने <strong>राज्य सूचना आयोग</strong> को (पता आयोग की वेबसाइट पर)।",
  when: [
    "पहली अपील के 30/45 दिन बाद भी अपीलीय अधिकारी ने फैसला नहीं दिया",
    "पहली अपील के आदेश के बाद भी PIO ने जानकारी नहीं दी",
    "अपीलीय अधिकारी का फैसला गलत या अधूरा लगता है",
    "आप PIO पर देरी के लिए जुर्माने (धारा 20) की मांग करना चाहते हैं",
  ],
  fields: [
    { key: "commission", label: { hi: "आयोग", en: "Commission" }, type: "select", required: true, options: [
      { hi: "केंद्रीय सूचना आयोग, बाबा गंग नाथ मार्ग, मुनिरका, नई दिल्ली - 110067", en: "Central Information Commission, Baba Gang Nath Marg, Munirka, New Delhi - 110067" },
      { hi: "राज्य सूचना आयोग (अपने राज्य का पता लिखें)", en: "State Information Commission (write your state's address)" },
    ] },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल / ईमेल", en: "Mobile / email" }, type: "tel" },
    { key: "pio", label: { hi: "PIO का पद और दफ्तर का पता", en: "PIO designation and office address" }, type: "textarea", required: true },
    { key: "faa", label: { hi: "प्रथम अपीलीय अधिकारी का पद और पता", en: "First Appellate Authority and address" }, type: "textarea", required: true },
    { key: "appdate", label: { hi: "RTI आवेदन की तारीख", en: "Date of RTI application" }, required: true },
    { key: "replydate", label: { hi: "PIO के जवाब की तारीख (या \"कोई जवाब नहीं\")", en: "Date of PIO reply (or \"no reply\")" } },
    { key: "fadate", label: { hi: "पहली अपील की तारीख", en: "Date of first appeal" }, required: true },
    { key: "faorder", label: { hi: "पहली अपील के आदेश की तारीख/संख्या (या \"कोई आदेश नहीं\")", en: "First appeal order date/no. (or \"no order\")" } },
    { key: "facts", label: { hi: "संक्षिप्त तथ्य: क्या मांगा था, क्या मिला", en: "Brief facts: what was sought, what was received" }, type: "textarea", required: true, placeholder: { hi: "मैंने राशन कार्ड आवेदन की स्थिति और फाइल नोटिंग मांगी थी। PIO ने कोई जवाब नहीं दिया...", en: "I sought status of my ration card application and file notings. The PIO did not reply..." } },
    { key: "prayer", label: { hi: "आप आयोग से क्या चाहते हैं", en: "Relief sought" }, type: "textarea", required: true, placeholder: { hi: "पूरी सूचना निःशुल्क दिलाई जाए; धारा 20 के तहत PIO पर जुर्माना लगाया जाए", en: "Direct full information free of cost; impose penalty on PIO under Section 20" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{commission}}

विषय: सूचना का अधिकार अधिनियम 2005 की धारा 19(3) के तहत द्वितीय अपील

महोदय/महोदया,

1. अपीलकर्ता का नाम और पता: {{name}}, {{address}}; संपर्क: {{phone}}

2. जन सूचना अधिकारी (प्रतिवादी 1) का पद और पता: {{pio}}

3. प्रथम अपीलीय अधिकारी (प्रतिवादी 2) का पद और पता: {{faa}}

4. RTI आवेदन की तारीख: {{appdate}}
   जन सूचना अधिकारी के जवाब की तारीख: {{replydate}}
   प्रथम अपील की तारीख: {{fadate}}
   प्रथम अपील के आदेश की तारीख/संख्या: {{faorder}}

5. संक्षिप्त तथ्य:
{{facts}}

6. अपील के आधार: मांगी गई सूचना धारा 8 या 9 के तहत छूट के दायरे में नहीं आती, फिर भी अधिनियम में तय समय में पूरी सूचना नहीं दी गई। प्रथम अपील से भी मेरी शिकायत दूर नहीं हुई।

7. प्रार्थना:
{{prayer}}

8. सत्यापन: मैं, {{name}}, सत्यापित करता/करती हूं कि ऊपर दी गई जानकारी मेरी जानकारी और विश्वास के अनुसार सही है, और इसी मामले में कोई अन्य अपील आयोग या किसी अदालत में लंबित नहीं है।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न (स्व-प्रमाणित):
1. दस्तावेज़ों की सूची (इंडेक्स)
2. RTI आवेदन की कॉपी और फीस का प्रमाण
3. जन सूचना अधिकारी का जवाब (यदि मिला)
4. प्रथम अपील की कॉपी
5. प्रथम अपीलीय अधिकारी का आदेश (यदि मिला)
6. अपील की कॉपी PIO और प्रथम अपीलीय अधिकारी को भेजने का प्रमाण (डाक रसीद)`,
    en: `To,
{{commission}}

Subject: Second Appeal under Section 19(3) of the Right to Information Act, 2005

Sir/Madam,

1. Name and address of the appellant: {{name}}, {{address}}; contact: {{phone}}

2. Designation and address of the Public Information Officer (Respondent 1): {{pio}}

3. Designation and address of the First Appellate Authority (Respondent 2): {{faa}}

4. Date of RTI application: {{appdate}}
   Date of reply of the PIO: {{replydate}}
   Date of first appeal: {{fadate}}
   Date/number of the first appeal order: {{faorder}}

5. Brief facts:
{{facts}}

6. Grounds of appeal: The information sought is not exempt under Section 8 or 9, yet complete information was not provided within the time limit prescribed in the Act. The first appeal also did not redress my grievance.

7. Prayer:
{{prayer}}

8. Verification: I, {{name}}, verify that the contents of this appeal are true to the best of my knowledge and belief, and that no other appeal on the same matter is pending before the Commission or any court.

Yours faithfully,

(Signature)
Name: {{name}}

Place: {{place}}
Date: {{date}}

Enclosures (self-attested):
1. Index of documents
2. Copy of RTI application and proof of fee
3. Reply of the PIO (if received)
4. Copy of the first appeal
5. Order of the First Appellate Authority (if received)
6. Proof of sending a copy of this appeal to the PIO and First Appellate Authority (postal receipt)`,
  },
  attach: [
    "RTI आवेदन की कॉपी (फीस के प्रमाण के साथ)",
    "PIO का जवाब, अगर आया हो",
    "पहली अपील की कॉपी और उसका आदेश, अगर आया हो",
    "दस्तावेज़ों की सूची (इंडेक्स); हर पन्ने पर स्व-प्रमाणित हस्ताक्षर",
    "अपील की एक कॉपी PIO और प्रथम अपीलीय अधिकारी को भेजने की डाक रसीद",
  ],
  submit: [
    "अपील प्रिंट करें, हर पन्ने पर हस्ताक्षर करें और सभी कागज़ स्व-प्रमाणित करके लगाएं।",
    "अपील की एक-एक कॉपी PIO और प्रथम अपीलीय अधिकारी को डाक से भेजें और रसीद संभालें।",
    "मूल अपील <strong>स्पीड पोस्ट/रजिस्टर्ड डाक</strong> से आयोग के पते पर भेजें, या आयोग में हाथ से जमा करें।",
    'केंद्रीय सूचना आयोग में दूसरी अपील ऑनलाइन भी होती है: <a href="https://cic.gov.in/" target="_blank" rel="noopener nofollow">cic.gov.in</a> पर अपील/शिकायत का लिंक खोलें और हस्ताक्षर वाले स्कैन कागज़ अपलोड करें। कई राज्य सूचना आयोगों के भी अपने पोर्टल हैं।',
    "आयोग अपील दर्ज करके सुनवाई की सूचना भेजता है; सुनवाई में खुद या वीडियो/फोन से शामिल हो सकते हैं।",
  ],
  tips: [
    "कागज़ अधूरे हों तो आयोग अपील लौटा देता है (नियम 9); सारे कागज़ और इंडेक्स ज़रूर लगाएं।",
    "पहली अपील किए बिना सीधे दूसरी अपील नहीं होती; जवाब बिल्कुल न मिला हो तो धारा 18 में शिकायत का रास्ता अलग है।",
    "प्रार्थना साफ लिखें: पूरी सूचना, मुफ्त सूचना (धारा 7(6)), और चाहें तो PIO पर जुर्माना (धारा 20)।",
    "90 दिन निकल गए हों तो देरी का कारण अलग पैराग्राफ में लिखें।",
  ],
  notice: "राज्य सूचना आयोगों के नियम, फॉर्म और फीस राज्य के हिसाब से अलग हो सकते हैं। राज्य के दफ्तर के मामले में अपने राज्य सूचना आयोग की वेबसाइट या दफ्तर से पुष्टि कर लें।",
  official: [
    { href: "https://cic.gov.in/", title: "केंद्रीय सूचना आयोग (CIC)", note: "ऑनलाइन दूसरी अपील और केस की स्थिति" },
    { href: "https://www.indiacode.nic.in/handle/123456789/2065", title: "RTI अधिनियम 2005 (India Code)" },
  ],
  related: ["/support/rti-guide.html"],
  faq: [
    { q: "RTI की दूसरी अपील कितने दिन में करनी होती है?", a: "पहली अपील का फैसला मिलने या फैसले की तय तारीख निकलने के 90 दिन के अंदर। उचित कारण हो तो आयोग देर से अपील भी ले सकता है।" },
    { q: "दूसरी अपील की फीस कितनी है?", a: "केंद्रीय सूचना आयोग में कोई फीस नहीं है। राज्य सूचना आयोग के लिए राज्य के नियम देखें।" },
    { q: "दूसरी अपील के साथ कौन से कागज़ लगते हैं?", a: "RTI आवेदन, PIO का जवाब (अगर आया), पहली अपील, उसका आदेश (अगर आया), दस्तावेज़ों की सूची, और PIO व अपीलीय अधिकारी को कॉपी भेजने का प्रमाण।" },
    { q: "दूसरी अपील CIC में करें या राज्य आयोग में?", a: "जिस दफ्तर से जानकारी मांगी थी वह केंद्र सरकार का है (जैसे रेलवे, सरकारी बैंक, डाक, केंद्रीय मंत्रालय) तो CIC; राज्य सरकार, जिला, पंचायत या नगर निकाय का है तो राज्य सूचना आयोग।" },
    { q: "क्या आयोग PIO पर जुर्माना लगा सकता है?", a: "हां। धारा 20 के तहत बिना उचित कारण देरी या जानकारी न देने पर आयोग PIO पर जुर्माना लगा सकता है। अपील की प्रार्थना में इसकी मांग लिख सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
