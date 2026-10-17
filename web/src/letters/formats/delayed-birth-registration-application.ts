import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Registration of Births and Deaths Act 1969 s.13 (indiacode.nic.in;
//   text on advocatekhoj): s.13(1) after 21 days but within 30 days: late
//   fee; s.13(2) after 30 days but within 1 year: written permission of the
//   prescribed authority + affidavit before notary/authorised officer + fee.
// - RBD (Amendment) Act 2023 (in force 1 Oct 2023): s.13(3) after 1 year:
//   order of the District Magistrate / Sub-Divisional Magistrate / Executive
//   Magistrate authorised by the DM, after verification and fee (Gujarat HC
//   May 2025 upheld it, LiveLaw).
// - RBD (Amendment) Act 2026 (Act 12 of 2026), in force 1 Oct 2026 (MHA
//   notification 16 Sep 2026; GKToday, TeamLease RegTech, FreePressJournal):
//   s.13(3) now covers 1-2 years (DM/SDM/authorised Executive Magistrate);
//   new s.13(3A): after 2 years only on order of a Judicial Magistrate of
//   the First Class having jurisdiction where the event happened.
// - s.25A appeal to District Registrar within 30 days (2023 amendment).
// - CRS portal crsorgi.gov.in. Late fees and forms are set by state rules:
//   not stated.
export const delayedBirthRegistrationApplication: Letter = {
  slug: "delayed-birth-registration-application",
  category: "document",
  emoji: "🍼",
  title: "Delayed Birth Registration Application 2026: देर से जन्म पंजीकरण आवेदन",
  description: "1 साल बाद जन्म पंजीकरण का आवेदन पत्र (हिंदी/English), RBD Act धारा 13। 1–2 साल पर DM/SDM, 2 साल बाद मजिस्ट्रेट का आदेश (1 अक्टूबर 2026 से)।",
  h1: "देर से जन्म पंजीकरण के लिए आवेदन पत्र 2026 (धारा 13)",
  short: { hi: "देर से जन्म पंजीकरण आवेदन", en: "Delayed birth registration" },
  lead: "जन्म का पंजीकरण 21 दिन में मुफ्त होता है। उसके बाद <strong>जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 की धारा 13</strong> लागू होती है: 30 दिन तक सिर्फ लेट फीस; 30 दिन से 1 साल तक तय अधिकारी की लिखित अनुमति और शपथ पत्र; <strong>1 से 2 साल</strong> तक DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश। <strong>1 अक्टूबर 2026</strong> से लागू 2026 के संशोधन के बाद <strong>2 साल से ज़्यादा</strong> देरी में <strong>प्रथम श्रेणी न्यायिक मजिस्ट्रेट</strong> का आदेश ज़रूरी है। यह पत्र उसी आदेश/अनुमति के लिए आवेदन है।",
  facts: [
    ["21 दिन तक", "मुफ्त पंजीकरण"],
    ["30 दिन–1 साल", "लिखित अनुमति + शपथ पत्र + लेट फीस"],
    ["1–2 साल", "DM / SDM / अधिकृत कार्यकारी मजिस्ट्रेट का आदेश"],
    ["2 साल से ज़्यादा", "प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश (1 अक्टूबर 2026 से)"],
  ],
  to: "देरी के हिसाब से: 1–2 साल पर <strong>ज़िला मजिस्ट्रेट (DM) या उप-ज़िला मजिस्ट्रेट (SDM)</strong>; 2 साल से ज़्यादा पर उस इलाके के <strong>प्रथम श्रेणी न्यायिक मजिस्ट्रेट (JMFC)</strong> जहां जन्म हुआ। 30 दिन–1 साल के मामले में राज्य द्वारा तय अधिकारी (अक्सर ज़िला रजिस्ट्रार/चिकित्सा अधिकारी)। आदेश मिलने के बाद पंजीकरण उसी इलाके का <strong>जन्म-मृत्यु रजिस्ट्रार</strong> करता है।",
  when: [
    "बच्चे या खुद का जन्म कभी दर्ज ही नहीं हुआ और अब प्रमाण पत्र चाहिए",
    "स्कूल दाखिले, आधार, पासपोर्ट के लिए जन्म प्रमाण पत्र मांगा गया है",
    "रजिस्ट्रार ने कहा है कि देर हो चुकी है, मजिस्ट्रेट/SDM का आदेश लाएं",
    "रजिस्ट्रार ने 'रिकॉर्ड उपलब्ध नहीं' (non-availability) प्रमाण पत्र दिया है",
  ],
  fields: [
    { key: "authority", label: { hi: "किसे दे रहे हैं", en: "Addressed to" }, type: "select", required: true, options: [
      { hi: "उप-ज़िला मजिस्ट्रेट (SDM)", en: "Sub-Divisional Magistrate (SDM)" },
      { hi: "ज़िला मजिस्ट्रेट (DM)", en: "District Magistrate (DM)" },
      { hi: "प्रथम श्रेणी न्यायिक मजिस्ट्रेट", en: "Judicial Magistrate of the First Class" },
      { hi: "रजिस्ट्रार (जन्म एवं मृत्यु) / तय अधिकारी", en: "Registrar (Births & Deaths) / prescribed authority" },
    ] },
    { key: "office", label: { hi: "दफ्तर/न्यायालय और ज़िला", en: "Office/court and district" }, required: true, placeholder: { hi: "जैसे: तहसील सदर, ज़िला आगरा", en: "e.g. Tehsil Sadar, District Agra" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "relation", label: { hi: "आवेदक कौन है", en: "Applicant is" }, type: "select", options: [
      { hi: "बच्चे का पिता/माता", en: "father/mother of the child" },
      { hi: "स्वयं वह व्यक्ति जिसका जन्म दर्ज होना है", en: "the person whose birth is to be registered" },
      { hi: "कानूनी अभिभावक", en: "legal guardian" },
    ] },
    { key: "child", label: { hi: "जिसका जन्म दर्ज होना है, उसका नाम", en: "Name of the person born" }, required: true },
    { key: "parents", label: { hi: "पिता और माता का नाम", en: "Father's and mother's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, required: true, placeholder: { hi: "जैसे: 12/03/2019", en: "e.g. 12/03/2019" } },
    { key: "pob", label: { hi: "जन्म स्थान (अस्पताल/घर, गांव/शहर)", en: "Place of birth (hospital/home, village/town)" }, required: true },
    { key: "reason", label: { hi: "देर से पंजीकरण का कारण", en: "Reason for delay" }, type: "textarea", required: true, placeholder: { hi: "जैसे: घर पर जन्म हुआ, जानकारी न होने से पंजीकरण नहीं कराया", en: "e.g. Born at home; registration was not done due to lack of awareness" } },
    { key: "proof", label: { hi: "सबूत", en: "Supporting documents" }, type: "textarea", placeholder: { hi: "जैसे: टीकाकरण कार्ड, आंगनवाड़ी रिकॉर्ड, स्कूल प्रमाण पत्र, शपथ पत्र", en: "e.g. vaccination card, Anganwadi record, school certificate, affidavit" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{authority}},
{{office}}

विषय: जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 की धारा 13 के तहत विलंबित जन्म पंजीकरण के आदेश हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, निवेदन करता/करती हूं कि मैं {{relation}} हूं। निम्न जन्म का पंजीकरण अब तक नहीं हुआ है:

नाम: {{child}}
पिता/माता का नाम: {{parents}}
जन्म तिथि: {{dob}}
जन्म स्थान: {{pob}}

देरी का कारण: {{reason}}

जन्म के समर्थन में निम्न कागज़ों की प्रतियां और शपथ पत्र संलग्न हैं:
{{proof}}

संबंधित रजिस्ट्रार के कार्यालय में यह जन्म दर्ज नहीं है; रजिस्ट्रार का 'रिकॉर्ड उपलब्ध नहीं' प्रमाण पत्र (यदि जारी हुआ हो) संलग्न है।

अतः आपसे प्रार्थना है कि जन्म की सत्यता की जांच कर अधिनियम की धारा 13 के तहत संबंधित रजिस्ट्रार को जन्म पंजीकरण करने का आदेश देने की कृपा करें। निर्धारित शुल्क देने और जांच में सहयोग करने को मैं तैयार हूं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. जन्म की तिथि और स्थान का शपथ पत्र
2. रजिस्ट्रार का 'रिकॉर्ड उपलब्ध नहीं' प्रमाण पत्र (यदि हो)
3. सबूत के कागज़ (ऊपर लिखे अनुसार)
4. माता-पिता का आधार/पहचान पत्र और पते का प्रमाण`,
    en: `To,
The {{authority}},
{{office}}

Subject: Application for an order for delayed registration of birth under Section 13 of the Registration of Births and Deaths Act, 1969

Sir/Madam,

I, {{name}}, resident of {{address}}, respectfully submit that I am the {{relation}}. The following birth has not been registered so far:

Name: {{child}}
Father's/mother's name: {{parents}}
Date of birth: {{dob}}
Place of birth: {{pob}}

Reason for delay: {{reason}}

Copies of the following documents and an affidavit are enclosed in support of the birth:
{{proof}}

The birth is not recorded in the office of the concerned Registrar; the Registrar's non-availability certificate (if issued) is enclosed.

I therefore request you kindly to verify the correctness of the birth and order the concerned Registrar to register it under Section 13 of the Act. I am ready to pay the prescribed fee and cooperate in the enquiry.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Affidavit regarding date and place of birth
2. Registrar's non-availability certificate (if any)
3. Supporting documents (as listed above)
4. Parents' Aadhaar/identity and address proof`,
  },
  attach: [
    'जन्म की तारीख और स्थान का <a href="/affidavit/date-of-birth.html">शपथ पत्र</a> (नोटरी/अधिकृत अधिकारी के सामने)',
    "रजिस्ट्रार से 'रिकॉर्ड उपलब्ध नहीं' (non-availability) प्रमाण पत्र, जहां मांगा जाए",
    "जन्म के समय के सबूत: अस्पताल पर्ची, टीकाकरण कार्ड, आंगनवाड़ी/ANM रिकॉर्ड; बाद के: स्कूल प्रमाण पत्र",
    "माता-पिता का आधार, पते का प्रमाण; कई जगह दो गवाहों के बयान",
  ],
  submit: [
    "पहले जन्म वाले इलाके के <strong>जन्म-मृत्यु रजिस्ट्रार</strong> (नगर निगम/पंचायत) से पूछें कि देरी कितनी है और किससे आदेश लेना है; कई राज्य यह आवेदन CRS/e-District पोर्टल से भी लेते हैं।",
    "1–2 साल की देरी: पत्र SDM/DM कार्यालय में जमा करें; जांच के बाद आदेश मिलता है।",
    "2 साल से ज़्यादा (1 अक्टूबर 2026 से): आवेदन <strong>प्रथम श्रेणी न्यायिक मजिस्ट्रेट</strong> के न्यायालय में होगा; इसके लिए वकील या ज़िला विधिक सेवा प्राधिकरण (मुफ्त कानूनी सहायता, हेल्पलाइन 15100) की मदद लें।",
    "आदेश की प्रमाणित कॉपी और लेट फीस के साथ रजिस्ट्रार के पास जाएं; पंजीकरण के बाद CRS से जन्म प्रमाण पत्र मिलेगा।",
    "रजिस्ट्रार कार्रवाई न करे तो 30 दिन में ज़िला रजिस्ट्रार को अपील (धारा 25A) करें।",
  ],
  tips: [
    "जन्म के समय के कागज़ सबसे मज़बूत सबूत हैं; सिर्फ शपथ पत्र पर आदेश मिलना मुश्किल होता है।",
    "जन्म तिथि सभी कागज़ों (स्कूल, आधार, शपथ पत्र) में एक जैसी हो।",
    "दलालों से 'तुरंत प्रमाण पत्र' न बनवाएं; फर्ज़ी प्रमाण पत्र पकड़ा जाता है और रद्द होता है।",
    "जितनी जल्दी आवेदन करेंगे, उतनी आसान प्रक्रिया होगी; 2 साल पार होने पर अदालत जाना पड़ता है।",
  ],
  notice: "<strong>1 अक्टूबर 2026</strong> से 2 साल से ज़्यादा पुराने जन्म का पंजीकरण सिर्फ प्रथम श्रेणी न्यायिक मजिस्ट्रेट के आदेश से होगा। लेट फीस, फॉर्म और 30 दिन–1 साल वाली अनुमति देने वाला अधिकारी <strong>राज्य के नियम</strong> से तय होता है; रजिस्ट्रार से पूछें।",
  official: [
    { href: "https://crsorgi.gov.in/", title: "Civil Registration System (CRS)", note: "जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969" },
    { href: "https://nalsa.gov.in/", title: "NALSA", note: "मुफ्त कानूनी सहायता" },
  ],
  related: ["/service/birth-certificate.html", "/affidavit/date-of-birth.html", "/service/aadhaar-card.html"],
  faq: [
    { q: "1 साल बाद जन्म प्रमाण पत्र कैसे बनवाएं?", a: "धारा 13 के तहत आदेश लेकर। 1 से 2 साल की देरी में DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश; 1 अक्टूबर 2026 से 2 साल से ज़्यादा देरी में प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश। फिर रजिस्ट्रार पंजीकरण करता है।" },
    { q: "2 साल से ज़्यादा पुराना जन्म कैसे दर्ज होगा?", a: "जन्म और मृत्यु रजिस्ट्रीकरण (संशोधन) अधिनियम 2026 के बाद, जो 1 अक्टूबर 2026 से लागू है, इसके लिए उस इलाके के प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश चाहिए।" },
    { q: "देर से जन्म पंजीकरण में कौन से कागज़ लगते हैं?", a: "शपथ पत्र, रजिस्ट्रार का 'रिकॉर्ड उपलब्ध नहीं' प्रमाण पत्र, जन्म के सबूत (अस्पताल पर्ची, टीकाकरण कार्ड, स्कूल रिकॉर्ड) और माता-पिता के पहचान पत्र।" },
    { q: "लेट फीस कितनी है?", a: "लेट फीस राज्य के जन्म-मृत्यु पंजीकरण नियमों में तय होती है और राज्य के हिसाब से अलग है। रजिस्ट्रार के दफ्तर से पूछें और सरकारी रसीद लें।" },
    { q: "21 दिन के अंदर पंजीकरण की फीस कितनी है?", a: "21 दिन के अंदर जन्म का पंजीकरण मुफ्त है। अस्पताल में जन्म हो तो सूचना अस्पताल देता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
