import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Protection of Women from Domestic Violence Act 2005 (indiacode.nic.in):
//   s.3 domestic violence includes physical, sexual, verbal/emotional and
//   economic abuse and dowry harassment; s.4 any person may inform the
//   Protection Officer; s.5 duties of police officer/Protection Officer/
//   service provider/Magistrate to inform the woman of her rights (protection
//   order, monetary relief, free legal aid, right to file a complaint under
//   the penal law); s.8-9 Protection Officers appointed in each district,
//   prepare the Domestic Incident Report (DIR) and forward it to the
//   Magistrate; s.12 application to the Magistrate (first hearing ordinarily
//   within 3 days of receipt, s.12(4); disposal within 60 days of first
//   hearing, s.12(5)); reliefs: protection order s.18, residence order s.19,
//   monetary relief s.20, custody s.21, compensation s.22, interim/ex parte
//   order s.23; breach of protection order punishable s.31. Vikaspedia
//   summary of MWCD measures confirms POs in every district.
// - Bharatiya Nyaya Sanhita 2023 ss.85-86 replace IPC 498A (cruelty by
//   husband or relatives; up to 3 years and fine) (iPleaders, LawSikho).
// - 181 Women Helpline (24x7, free) and Sakhi One Stop Centres (MWCD scheme
//   since 1 April 2015: medical, police, legal aid, counselling, temporary
//   shelter). 112 emergency. NALSA 15100 free legal aid.
export const domesticViolenceComplaintApplication: Letter = {
  slug: "domestic-violence-complaint-application",
  category: "police",
  emoji: "🛡️",
  title: "Domestic Violence Complaint in Hindi 2026: घरेलू हिंसा शिकायत आवेदन",
  description: "घरेलू हिंसा की शिकायत संरक्षण अधिकारी या पुलिस को (हिंदी/English): घरेलू हिंसा अधिनियम 2005, DIR, मजिस्ट्रेट से संरक्षण व भरण-पोषण आदेश। हेल्पलाइन 181, 112।",
  h1: "घरेलू हिंसा शिकायत आवेदन 2026: संरक्षण अधिकारी / पुलिस को पत्र",
  short: { hi: "घरेलू हिंसा शिकायत", en: "Domestic violence complaint" },
  lead: "पति, ससुराल वाले या साथ रहने वाला घर का कोई सदस्य मारपीट, गाली, धमकी, दहेज के लिए परेशान करे, पैसे रोके या घर से निकाले, तो <strong>घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम 2005</strong> के तहत ज़िले के <strong>संरक्षण अधिकारी (Protection Officer)</strong> को यह आवेदन दें। वे <strong>घरेलू घटना रिपोर्ट (DIR)</strong> बनाकर <strong>मजिस्ट्रेट</strong> को भेजते हैं, जो संरक्षण, घर में रहने, खर्च (भरण-पोषण) और बच्चों की कस्टडी का आदेश दे सकते हैं। मारपीट/क्रूरता पर पुलिस में <strong>BNS धारा 85</strong> में FIR भी हो सकती है। <strong>तुरंत खतरा हो तो 112 या 181 पर कॉल करें।</strong>",
  facts: [
    ["कानून", "घरेलू हिंसा अधिनियम 2005 (धारा 12, 18-23); BNS धारा 85"],
    ["किसे दें", "ज़िले के संरक्षण अधिकारी; पुलिस (थाना/महिला थाना); सीधे मजिस्ट्रेट"],
    ["समय", "पहली सुनवाई आम तौर पर 3 दिन में; फैसला पहली सुनवाई से 60 दिन में"],
    ["हेल्पलाइन", "181 (महिला हेल्पलाइन), 112, वन स्टॉप सेंटर (सखी)"],
  ],
  to: "अपने ज़िले के <strong>संरक्षण अधिकारी</strong> को (आम तौर पर ज़िला महिला एवं बाल विकास/ज़िला प्रोबेशन कार्यालय में बैठते हैं), या नज़दीकी <strong>थाना प्रभारी / महिला थाना</strong> को। पत्र में दोनों के लिए जगह है; ऊपर 'किसे' वाले खाने में सही पद लिखें। <strong>वन स्टॉप सेंटर (सखी)</strong> भी आवेदन लिखने और आगे भेजने में मदद करता है।",
  when: [
    "पति/ससुराल वाले मारपीट, गाली-गलौज या धमकी देते हैं",
    "दहेज या पैसे के लिए परेशान किया जा रहा है",
    "घर से निकाल दिया या घर में आने नहीं दिया जा रहा",
    "खर्च, गहने (स्त्रीधन) या बच्चों से मिलने से रोका जा रहा है",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (पद और पता)", en: "Addressed to (designation and address)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: संरक्षण अधिकारी, ज़िला कार्यक्रम कार्यालय, सीकर / थाना प्रभारी, महिला थाना, सीकर", en: "e.g. Protection Officer, District Programme Office, Sikar / SHO, Mahila Police Station, Sikar" } },
    { key: "name", label: { hi: "पीड़िता का नाम", en: "Aggrieved woman's name" }, required: true },
    { key: "age", label: { hi: "उम्र", en: "Age" }, type: "number" },
    { key: "address", label: { hi: "अभी का पता (जहां सुरक्षित संपर्क हो)", en: "Current address (where safely reachable)" }, type: "textarea", required: true },
    { key: "respondent", label: { hi: "हिंसा करने वालों के नाम, रिश्ता और पता", en: "Names, relation and address of those committing violence" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पति ___, सास ___; पता: ___", en: "e.g. Husband ___, mother-in-law ___; address: ___" } },
    { key: "marriage", label: { hi: "शादी की तारीख / रिश्ते का विवरण", en: "Date of marriage / nature of relationship" }, placeholder: { hi: "जैसे: शादी 15/02/2021; 1 बेटी (3 साल)", en: "e.g. Married 15/02/2021; 1 daughter (3 years)" } },
    { key: "incidents", label: { hi: "हिंसा की घटनाएं (तारीख, क्या हुआ)", en: "Incidents of violence (date, what happened)" }, type: "textarea", required: true, placeholder: { hi: "1. 02/09/2026: पति ने मारपीट की, हाथ पर चोट\n2. 20/09/2026: दहेज में ₹2 लाख मांगे, घर से निकाला", en: "1. 02/09/2026: husband beat me, injury on arm\n2. 20/09/2026: demanded Rs 2 lakh as dowry, threw me out" } },
    { key: "relief", label: { hi: "मुख्य रूप से क्या चाहिए", en: "Main relief needed" }, type: "select", required: true, options: [
      { hi: "हिंसा रोकने का संरक्षण आदेश (धारा 18) और घर में रहने का अधिकार (धारा 19)", en: "a protection order (Section 18) and right to reside in the shared household (Section 19)" },
      { hi: "मेरे और बच्चों के खर्च/भरण-पोषण का आदेश (धारा 20)", en: "monetary relief/maintenance for me and my children (Section 20)" },
      { hi: "बच्चों की अस्थायी कस्टडी (धारा 21) और स्त्रीधन/सामान की वापसी", en: "temporary custody of children (Section 21) and return of stridhan/belongings" },
      { hi: "संरक्षण, निवास, भरण-पोषण और मुआवज़ा सभी (धारा 18 से 22)", en: "protection, residence, maintenance and compensation (Sections 18 to 22)" },
    ] },
    { key: "phone", label: { hi: "सुरक्षित मोबाइल नंबर", en: "Safe mobile number" }, type: "tel", hint: { hi: "ऐसा नंबर दें जिस पर हिंसा करने वाले की पहुंच न हो", en: "Give a number the abuser cannot access" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}}

विषय: घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम 2005 के अंतर्गत घरेलू हिंसा की शिकायत एवं सहायता हेतु आवेदन।

महोदय/महोदया,

मैं, {{name}}, उम्र {{age}} वर्ष, वर्तमान पता {{address}}, निम्नलिखित व्यक्तियों द्वारा की जा रही घरेलू हिंसा की शिकायत करती हूं:
{{respondent}}

रिश्ते का विवरण: {{marriage}}

घटनाओं का विवरण:
{{incidents}}

उपरोक्त व्यवहार से मेरा शारीरिक, मानसिक और आर्थिक उत्पीड़न हो रहा है और मुझे अपनी तथा अपने बच्चों की सुरक्षा का खतरा है।

अतः आपसे निवेदन है कि:
1. मेरी शिकायत पर घरेलू घटना रिपोर्ट (DIR) तैयार कर धारा 12 के अंतर्गत आवेदन के साथ सक्षम मजिस्ट्रेट के समक्ष प्रस्तुत करें;
2. मुझे मुख्य रूप से यह राहत चाहिए: {{relief}};
3. आवश्यकता होने पर मुझे चिकित्सा सहायता, सुरक्षित आश्रय (वन स्टॉप सेंटर) और निःशुल्क कानूनी सहायता दिलाएं;
4. मारपीट/दहेज उत्पीड़न जैसे संज्ञेय अपराध के लिए भारतीय न्याय संहिता 2023 के अंतर्गत कानूनी कार्रवाई करें।

कृपया मेरा पता और मोबाइल नंबर गोपनीय रखें।

भवदीया,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न:
1. पहचान पत्र की कॉपी
2. चोट की फोटो / मेडिकल रिपोर्ट (यदि हो)
3. धमकी के मैसेज/रिकॉर्डिंग, दहेज मांग के सबूत (यदि हों)
4. शादी का प्रमाण / बच्चों के जन्म प्रमाण पत्र की कॉपी (यदि हों)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{to}}

Subject: Complaint of domestic violence and application for assistance under the Protection of Women from Domestic Violence Act, 2005.

Sir/Madam,

I, {{name}}, aged {{age}} years, presently residing at {{address}}, complain of domestic violence committed by the following persons:
{{respondent}}

Details of relationship: {{marriage}}

Details of incidents:
{{incidents}}

This conduct amounts to physical, mental and economic abuse, and I fear for my safety and the safety of my children.

I therefore request you to:
1. Prepare a Domestic Incident Report (DIR) on my complaint and place it before the competent Magistrate with an application under Section 12;
2. The main relief I need is: {{relief}};
3. Arrange medical aid, safe shelter (One Stop Centre) and free legal aid for me if needed;
4. Take legal action under the Bharatiya Nyaya Sanhita, 2023 for cognizable offences such as assault/dowry harassment.

Kindly keep my address and mobile number confidential.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Enclosures:
1. Copy of identity proof
2. Photos of injuries / medical report (if any)
3. Threatening messages/recordings, proof of dowry demand (if any)
4. Proof of marriage / copies of children's birth certificates (if any)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "अपना कोई पहचान पत्र (आधार, वोटर ID)",
    "चोट की फोटो और सरकारी अस्पताल की मेडिकल रिपोर्ट",
    "धमकी भरे मैसेज, कॉल रिकॉर्डिंग, दहेज मांग के सबूत (स्क्रीनशॉट/पेन ड्राइव)",
    "शादी का सबूत (फोटो, कार्ड, प्रमाण पत्र), बच्चों के जन्म प्रमाण पत्र, स्त्रीधन/सामान की सूची",
  ],
  submit: [
    "<strong>जान का खतरा हो तो पहले 112 या 181 पर कॉल करें</strong>; ज़रूरत हो तो नज़दीकी वन स्टॉप सेंटर (सखी) में तुरंत रहने, इलाज और काउंसलिंग की मदद मिलती है।",
    "यह पत्र ज़िले के संरक्षण अधिकारी को दें; वे DIR बनाकर मजिस्ट्रेट को भेजेंगे। चाहें तो वकील या DLSA की मदद से सीधे मजिस्ट्रेट के पास धारा 12 का आवेदन दे सकती हैं।",
    "मारपीट, दहेज उत्पीड़न जैसी बातों पर थाने/महिला थाने में भी लिखित शिकायत दें और FIR/रिसीविंग की कॉपी लें।",
    "मजिस्ट्रेट तुरंत (एक-पक्षीय) अंतरिम आदेश भी दे सकते हैं (धारा 23)। संरक्षण आदेश तोड़ा जाए तो वह अपराध है (धारा 31); पुलिस को बताएं।",
  ],
  tips: [
    "ज़रूरी कागज़ों (आधार, बैंक पासबुक, बच्चों के कागज़) की फोटो किसी भरोसेमंद व्यक्ति या फोन के सुरक्षित फोल्डर में रखें।",
    "घटनाओं की तारीखें एक डायरी में लिखती रहें।",
    "मुफ्त वकील के लिए ज़िला विधिक सेवा प्राधिकरण (DLSA) या NALSA हेल्पलाइन 15100 पर संपर्क करें; महिलाओं को मुफ्त कानूनी सहायता का हक है।",
    "यह कानून पत्नी के अलावा मां, बहन, बेटी, लिव-इन पार्टनर या घर में साथ रही किसी भी महिला पर लागू होता है।",
  ],
  notice: "आप खतरे में हैं तो यह पत्र लिखने में समय न लगाएं: तुरंत <strong>112</strong> (आपातकाल) या <strong>181</strong> (महिला हेल्पलाइन, 24 घंटे, मुफ्त) पर कॉल करें। यह पत्र कानूनी सलाह नहीं है।",
  official: [
    { href: "https://wcd.gov.in/", title: "महिला एवं बाल विकास मंत्रालय", note: "वन स्टॉप सेंटर (सखी), 181 हेल्पलाइन" },
    { href: "https://www.indiacode.nic.in/", title: "India Code (घरेलू हिंसा अधिनियम 2005 का पाठ)" },
    { href: "https://nalsa.gov.in/", title: "NALSA (मुफ्त कानूनी सहायता)", note: "हेल्पलाइन 15100" },
  ],
  related: ["/support/helpline-directory.html"],
  faq: [
    { q: "घरेलू हिंसा की शिकायत कहां करें?", a: "ज़िले के संरक्षण अधिकारी, थाना/महिला थाना, या सीधे मजिस्ट्रेट के पास। तुरंत मदद के लिए 181 (महिला हेल्पलाइन) या 112 पर कॉल करें; वन स्टॉप सेंटर (सखी) भी मदद करता है।" },
    { q: "संरक्षण अधिकारी क्या करते हैं?", a: "वे शिकायत सुनकर घरेलू घटना रिपोर्ट (DIR) बनाते हैं, उसे मजिस्ट्रेट और पुलिस को भेजते हैं, और इलाज, आश्रय व मुफ्त कानूनी सहायता दिलाने में मदद करते हैं।" },
    { q: "घरेलू हिंसा कानून में क्या-क्या आदेश मिल सकते हैं?", a: "संरक्षण आदेश (धारा 18), साझा घर में रहने का आदेश (धारा 19), खर्च/भरण-पोषण (धारा 20), बच्चों की कस्टडी (धारा 21) और मुआवज़ा (धारा 22)। ज़रूरत हो तो अंतरिम आदेश भी (धारा 23)।" },
    { q: "घरेलू हिंसा केस में कितना समय लगता है?", a: "कानून कहता है कि पहली सुनवाई आम तौर पर आवेदन मिलने के 3 दिन के अंदर हो और मामला पहली सुनवाई से 60 दिन में निपटाने की कोशिश हो। असल में समय अदालत पर निर्भर करता है।" },
    { q: "498A अब किस धारा में है?", a: "1 जुलाई 2024 से पति या ससुराल वालों की क्रूरता का अपराध भारतीय न्याय संहिता (BNS) की धारा 85 में है और क्रूरता की परिभाषा धारा 86 में।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
