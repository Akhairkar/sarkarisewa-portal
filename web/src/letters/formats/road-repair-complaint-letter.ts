import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Twelfth Schedule (Art. 243W) item 4 "Roads and
//   bridges" (municipal function); Eleventh Schedule (Art. 243G) "Roads,
//   culverts, bridges..." for panchayats; state highways and major district
//   roads are with the state PWD; national highways with NHAI / MoRTH.
// - Meri Sadak app (services.india.gov.in listing; vikaspedia; Lok Sabha
//   answer on eparlib.nic.in): Department of Rural Development app for
//   complaints on PMGSY roads (pace of work, quality, land disputes) with
//   photos; complaints go to State Quality Coordinators; reopen within 10
//   days; NRRDA sends National Quality Monitors if states do not respond.
//   OMMS portal omms.nic.in / pmgsy.nic.in.
// - pgportal.gov.in (CPGRAMS).
// No national repair time limit is stated.
export const roadRepairComplaintLetter: Letter = {
  slug: "road-repair-complaint-letter",
  category: "municipal",
  emoji: "🛣️",
  title: "Road Repair Complaint Letter in Hindi 2026: टूटी सड़क मरम्मत शिकायत",
  description: "टूटी सड़क, गड्ढे या अधूरी सड़क की मरम्मत के लिए नगर निगम, PWD या ग्राम पंचायत को शिकायत पत्र (हिंदी/English)। गांव की PMGSY सड़क के लिए मेरी सड़क ऐप।",
  h1: "सड़क मरम्मत शिकायत पत्र 2026",
  short: { hi: "सड़क मरम्मत शिकायत पत्र", en: "Road repair complaint" },
  lead: "टूटी सड़क की शिकायत उस विभाग को दें जिसकी वह सड़क है: शहर की अंदरूनी सड़कें <strong>नगर निकाय</strong>, गांव की गलियां <strong>ग्राम पंचायत</strong>, बड़ी सड़कें राज्य का <strong>लोक निर्माण विभाग (PWD)</strong> और नेशनल हाईवे <strong>NHAI</strong> देखता है। प्रधानमंत्री ग्राम सड़क योजना (PMGSY) की सड़क खराब हो या काम घटिया हो तो ग्रामीण विकास विभाग के <strong>मेरी सड़क (Meri Sadak) ऐप</strong> पर फोटो के साथ शिकायत भी कर सकते हैं।",
  facts: [
    ["शहर की सड़क", "नगर निगम / नगर पालिका के अभियंता (सड़क/निर्माण विभाग)"],
    ["गांव की सड़क", "ग्राम पंचायत; PMGSY सड़क के लिए मेरी सड़क ऐप"],
    ["बड़ी सड़क / हाईवे", "राज्य PWD के कार्यपालक अभियंता; नेशनल हाईवे पर NHAI"],
    ["आगे शिकायत", "ज़िलाधिकारी → राज्य लोक शिकायत पोर्टल / CPGRAMS; RTI"],
  ],
  to: "सड़क जिस विभाग की है उसके <strong>कार्यपालक/सहायक अभियंता</strong> को: नगर निकाय, PWD, ज़िला परिषद / ग्रामीण कार्य विभाग या ग्राम पंचायत। पता न हो तो ज़िलाधिकारी को लिखें, वहां से सही विभाग को भेजा जाएगा।",
  when: [
    "सड़क में बड़े गड्ढे हैं और दुर्घटना का खतरा है",
    "बारिश में सड़क बह गई या धंस गई",
    "पाइपलाइन/केबल के लिए खोदी गई सड़क दोबारा नहीं बनाई गई",
    "नई बनी सड़क कुछ ही महीनों में टूट गई (घटिया काम)",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेजना है (पद और दफ्तर)", en: "Addressed to (post and office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: अधिशासी अभियंता, लोक निर्माण विभाग, निर्माण खंड, आगरा", en: "e.g. Executive Engineer, PWD, Construction Division, Agra" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "road", label: { hi: "सड़क का नाम / कहां से कहां तक", en: "Road name / from where to where" }, type: "textarea", required: true, placeholder: { hi: "जैसे: रामपुर मोड़ से प्राथमिक विद्यालय तक, लगभग 1 किमी, वार्ड नं. 7", en: "e.g. Rampur turn to primary school, about 1 km, Ward 7" } },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", options: [
      { hi: "सड़क पर जगह-जगह गहरे गड्ढे हो गए हैं", en: "there are deep potholes all along the road" },
      { hi: "सड़क बारिश में बह गई/धंस गई है", en: "the road has washed away / caved in during rain" },
      { hi: "खुदाई के बाद सड़क दोबारा नहीं बनाई गई", en: "the road was dug up and not restored" },
      { hi: "नई बनी सड़क कुछ महीनों में ही टूट गई है", en: "the newly built road has broken within a few months" },
      { hi: "सड़क कच्ची है, पक्की सड़क बनाने की ज़रूरत है", en: "the road is unpaved and needs to be built" },
    ] },
    { key: "since", label: { hi: "कब से", en: "Since when" }, placeholder: { hi: "जैसे: जुलाई 2026 की बारिश से", en: "e.g. since the July 2026 rains" } },
    { key: "effect", label: { hi: "इससे क्या परेशानी है", en: "Difficulty caused" }, type: "textarea", placeholder: { hi: "जैसे: रोज़ दुर्घटनाएं, एम्बुलेंस/स्कूल बस नहीं आ पाती, पानी भरता है", en: "e.g. daily accidents, ambulance/school bus cannot come, water collects" } },
    { key: "earlier", label: { hi: "पहले की शिकायत (हो तो)", en: "Earlier complaint (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: टूटी सड़क की मरम्मत कराने हेतु शिकायत/आवेदन।

महोदय/महोदया,

मैं, {{name}}, आपका ध्यान नीचे लिखी सड़क की खराब हालत की ओर दिलाना चाहता/चाहती हूं:
{{road}}

इस सड़क पर {{problem}}। यह स्थिति {{since}} बनी हुई है। {{effect}}

पहले की शिकायत: {{earlier}}

इस सड़क से रोज़ बड़ी संख्या में लोग, बच्चे, बुज़ुर्ग और वाहन गुज़रते हैं, और किसी भी समय गंभीर दुर्घटना हो सकती है। अतः आपसे निवेदन है कि सड़क का निरीक्षण कराकर जल्द से जल्द इसकी मरम्मत कराई जाए। यदि यह सड़क आपके विभाग के अंतर्गत नहीं है, तो कृपया इस पत्र को संबंधित विभाग को भेजकर मुझे सूचित करें। कृपया इस शिकायत की पावती दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

संलग्न: सड़क की फोटो, क्षेत्रवासियों के हस्ताक्षर

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint / request for repair of damaged road.

Sir/Madam,

I, {{name}}, wish to draw your attention to the poor condition of the following road:
{{road}}

On this road, {{problem}}. This situation has continued {{since}}. {{effect}}

Earlier complaint: {{earlier}}

A large number of people, children, elderly persons and vehicles use this road every day, and a serious accident can happen at any time. I therefore request you to get the road inspected and repaired at the earliest. If this road does not fall under your department, kindly forward this letter to the concerned department and inform me. Please give an acknowledgement of this complaint.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Enclosures: Photographs of the road, signatures of residents

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "सड़क के गड्ढों/टूटे हिस्से की फोटो, जिसमें जगह पहचान में आए",
    "क्षेत्र के लोगों के हस्ताक्षर (नाम, पता, मोबाइल के साथ)",
    "दुर्घटना हुई हो तो उसकी जानकारी या खबर की कटिंग",
    "पहले की शिकायत की कॉपी/नंबर",
  ],
  submit: [
    "पता करें सड़क किस विभाग की है: शहर में नगर निकाय, गांव में पंचायत/ग्रामीण कार्य विभाग, बड़ी सड़क PWD, हाईवे NHAI। सड़क किनारे लगे बोर्ड पर विभाग का नाम अक्सर लिखा होता है।",
    "पत्र संबंधित दफ्तर में देकर कॉपी पर रिसीविंग लें, या रजिस्टर्ड डाक से भेजें।",
    "PMGSY सड़क हो तो <strong>मेरी सड़क (Meri Sadak) ऐप</strong> पर फोटो के साथ शिकायत दर्ज करें; जवाब से असंतुष्ट हों तो ऐप में शिकायत दोबारा खोल सकते हैं।",
    "कार्रवाई न हो तो ज़िलाधिकारी, राज्य के लोक शिकायत पोर्टल या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें, या RTI से सड़क के बजट/ठेके की जानकारी मांगें।",
  ],
  tips: [
    "सड़क की शुरुआत और अंत का लैंडमार्क लिखें; लंबाई का अंदाज़ा दें।",
    "नई सड़क जल्दी टूटी हो तो RTI से ठेकेदार का नाम और रखरखाव (गारंटी) की शर्त पूछ सकते हैं।",
    "सामूहिक शिकायत और फोटो से कार्रवाई जल्दी होती है।",
    "पत्र विनम्र रखें; अपमानजनक भाषा से शिकायत कमज़ोर होती है।",
  ],
  official: [
    { href: "https://omms.nic.in/", title: "PMGSY OMMS (ग्रामीण सड़कें)", note: "प्रधानमंत्री ग्राम सड़क योजना की सड़कों की जानकारी" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/support/rti-guide.html", "/support/helpline-directory.html"],
  faq: [
    { q: "टूटी सड़क की शिकायत कहां करें?", a: "जिस विभाग की सड़क है उसे: शहर में नगर निगम/नगर पालिका, गांव में ग्राम पंचायत या ग्रामीण कार्य विभाग, बड़ी सड़क के लिए PWD और नेशनल हाईवे के लिए NHAI। पता न हो तो ज़िलाधिकारी को लिखें।" },
    { q: "गांव की प्रधानमंत्री सड़क खराब हो तो क्या करें?", a: "ग्रामीण विकास विभाग के मेरी सड़क (Meri Sadak) ऐप पर फोटो के साथ शिकायत करें। शिकायत राज्य के गुणवत्ता अधिकारियों को जाती है; ऐप में शिकायत की स्थिति भी देख सकते हैं।" },
    { q: "सड़क मरम्मत के आवेदन में क्या लिखें?", a: "सड़क कहां से कहां तक है, क्या खराबी है, कब से है, लोगों को क्या परेशानी है, और पहले की शिकायत का नंबर। साथ में फोटो और लोगों के हस्ताक्षर लगाएं।" },
    { q: "शिकायत के बाद भी सड़क न बने तो क्या करें?", a: "ज़िलाधिकारी या राज्य लोक शिकायत पोर्टल पर शिकायत करें और RTI लगाकर पूछें कि सड़क की मरम्मत का प्रस्ताव/बजट क्या है और आपकी शिकायत पर क्या कार्रवाई हुई।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
