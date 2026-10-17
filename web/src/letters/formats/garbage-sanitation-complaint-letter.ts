import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Twelfth Schedule (Art. 243W), item 6 "Public
//   health, sanitation conservancy and solid waste management" (municipal
//   function); Eleventh Schedule (Art. 243G), "health and sanitation" for
//   panchayats.
// - Same research as web/src/guides/doc/swachh-bharat-sanitation-complaint.ts
//   (15 Oct 2026): Lok Sabha answer (eparlib.nic.in) on SBM national helpline
//   1969 and the Swachhata app as a citizen grievance tool; Swachhata-MoHUA
//   app routes garbage dumping, unclean streets, overflowing dustbins and
//   blocked drains to the city corporation / ward sanitary inspector.
// - pgportal.gov.in (CPGRAMS).
// No national resolution deadline is stated (not verified).
export const garbageSanitationComplaintLetter: Letter = {
  slug: "garbage-sanitation-complaint-letter",
  category: "municipal",
  emoji: "🗑️",
  title: "Garbage & Drain Cleaning Complaint Letter in Hindi 2026: सफाई शिकायत",
  description: "कूड़ा न उठने, नाली जाम या गली की सफाई न होने पर नगर निगम/नगर पालिका या ग्राम पंचायत को शिकायत पत्र (हिंदी/English)। स्वच्छता ऐप और आगे का रास्ता।",
  h1: "कूड़ा-कचरा और नाली सफाई शिकायत पत्र 2026",
  short: { hi: "कूड़ा/नाली सफाई शिकायत", en: "Garbage & drain complaint" },
  lead: "शहर में कूड़ा उठाना, गलियों की सफाई और नालियां साफ रखना <strong>नगर निकाय</strong> का काम है (संविधान की 12वीं अनुसूची); गांव में यह <strong>ग्राम पंचायत</strong> देखती है। शिकायत वार्ड के <strong>सफाई निरीक्षक (Sanitary Inspector)</strong>, स्वास्थ्य अधिकारी या नगर आयुक्त/EO को दें। शहरों में आवास और शहरी कार्य मंत्रालय के <strong>स्वच्छता (Swachhata-MoHUA) ऐप</strong> पर फोटो के साथ शिकायत भी दर्ज होती है, जो सीधे नगर निकाय को जाती है।",
  facts: [
    ["किसे दें (शहर)", "वार्ड सफाई निरीक्षक / नगर स्वास्थ्य अधिकारी / नगर आयुक्त या EO"],
    ["किसे दें (गांव)", "ग्राम पंचायत सचिव / मुखिया / सरपंच"],
    ["ऑनलाइन", "स्वच्छता (Swachhata-MoHUA) ऐप; नगर निकाय का पोर्टल"],
    ["हेल्पलाइन", "स्वच्छ भारत मिशन राष्ट्रीय हेल्पलाइन 1969 (जानकारी के लिए)"],
  ],
  to: "शहर में अपने वार्ड के <strong>सफाई निरीक्षक</strong> या <strong>नगर स्वास्थ्य अधिकारी</strong>, और बड़ी समस्या पर <strong>नगर आयुक्त / अधिशासी अधिकारी (EO)</strong> को। गांव में <strong>ग्राम पंचायत सचिव / मुखिया / सरपंच</strong> को, और सुनवाई न हो तो <strong>प्रखंड विकास अधिकारी (BDO)</strong> को।",
  when: [
    "कई दिनों से घर-घर कूड़ा उठाने वाली गाड़ी नहीं आई",
    "गली/सड़क किनारे कूड़े का ढेर लगा है, बदबू और मच्छर हैं",
    "नाली जाम है, गंदा पानी सड़क पर बह रहा है",
    "सार्वजनिक शौचालय गंदा या बंद है",
    "मरे जानवर को नहीं हटाया गया",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेजना है (पद और दफ्तर)", en: "Addressed to (post and office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: नगर स्वास्थ्य अधिकारी, नगर निगम, इंदौर (ज़ोन-5)", en: "e.g. Municipal Health Officer, Municipal Corporation, Indore (Zone 5)" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "location", label: { hi: "समस्या की जगह", en: "Location of problem" }, type: "textarea", required: true, placeholder: { hi: "जैसे: वार्ड नं. 18, गांधी नगर, गली नं. 3, स्कूल के सामने", en: "e.g. Ward 18, Gandhi Nagar, Lane 3, opposite the school" } },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", options: [
      { hi: "घर-घर कूड़ा उठाने की गाड़ी नियमित नहीं आ रही", en: "door-to-door garbage collection is not regular" },
      { hi: "सड़क किनारे कूड़े का ढेर जमा है और उठाया नहीं जा रहा", en: "a garbage heap has piled up by the road and is not being cleared" },
      { hi: "नाली जाम है और गंदा पानी सड़क/घरों में भर रहा है", en: "the drain is choked and dirty water is overflowing on the road/into houses" },
      { hi: "गली/सड़क की नियमित झाड़ू-सफाई नहीं हो रही", en: "the lane/road is not being swept regularly" },
      { hi: "सार्वजनिक शौचालय गंदा/बंद पड़ा है", en: "the public toilet is dirty/closed" },
    ] },
    { key: "since", label: { hi: "कब से", en: "Since when" }, placeholder: { hi: "जैसे: 10 दिन से", en: "e.g. for 10 days" } },
    { key: "effect", label: { hi: "इससे क्या परेशानी है", en: "Difficulty caused" }, type: "textarea", placeholder: { hi: "जैसे: बदबू, मच्छर, डेंगू का डर, बच्चों के स्कूल जाने में दिक्कत", en: "e.g. stench, mosquitoes, fear of dengue, children cannot walk to school" } },
    { key: "earlier", label: { hi: "पहले की शिकायत (हो तो)", en: "Earlier complaint (if any)" }, placeholder: { hi: "जैसे: स्वच्छता ऐप शिकायत नं. ___", en: "e.g. Swachhata app complaint no. ___" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: क्षेत्र में कूड़ा/नाली की सफाई न होने के संबंध में शिकायत।

महोदय/महोदया,

मैं, {{name}}, आपका ध्यान हमारे क्षेत्र की सफाई व्यवस्था की ओर दिलाना चाहता/चाहती हूं। नीचे लिखी जगह पर {{since}} से {{problem}}:
{{location}}

{{effect}}

पहले की शिकायत: {{earlier}}

गंदगी से क्षेत्र में बीमारियां फैलने का खतरा बढ़ गया है। अतः आपसे निवेदन है कि:
1. तुरंत सफाई कर्मचारी भेजकर कूड़ा उठवाया जाए / नाली की सफाई कराई जाए;
2. आगे के लिए इस क्षेत्र में नियमित सफाई और कूड़ा उठाने की व्यवस्था की जाए;
3. इस शिकायत की पावती/शिकायत संख्या और की गई कार्रवाई की जानकारी दी जाए।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint regarding garbage / drain not being cleaned in our area.

Sir/Madam,

I, {{name}}, wish to draw your attention to the sanitation situation in our area. At the location below, {{problem}}, {{since}}:
{{location}}

{{effect}}

Earlier complaint: {{earlier}}

The filth has increased the risk of disease in the area. I therefore request that:
1. Sanitation staff be sent immediately to clear the garbage / clean the drain;
2. Regular cleaning and garbage collection be arranged for this area in future;
3. An acknowledgement / complaint number and information on the action taken be given to me.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "कूड़े के ढेर/जाम नाली की फोटो (तारीख के साथ हो तो बेहतर)",
    "मोहल्ले के लोगों के हस्ताक्षर (सामूहिक शिकायत हो तो)",
    "पहले की शिकायत (ऐप/हेल्पलाइन) का नंबर",
  ],
  submit: [
    "शहर में पहले <strong>स्वच्छता (Swachhata-MoHUA) ऐप</strong> या नगर निकाय के पोर्टल/हेल्पलाइन पर फोटो के साथ शिकायत दर्ज करें और नंबर लिख लें।",
    "यह पत्र वार्ड/ज़ोनल कार्यालय या नगर निगम कार्यालय में देकर कॉपी पर रिसीविंग लें; गांव में पंचायत भवन में दें।",
    "सुनवाई न हो तो नगर आयुक्त/EO या ज़िलाधिकारी को (गांव में BDO को) पहली शिकायत की कॉपी के साथ लिखें।",
    "फिर भी हल न हो तो राज्य के लोक शिकायत पोर्टल या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें, या RTI से कार्रवाई की जानकारी मांगें।",
  ],
  tips: [
    "सही जगह और लैंडमार्क लिखें; 'हमारे मोहल्ले में गंदगी है' जैसी अधूरी शिकायत पर कार्रवाई मुश्किल होती है।",
    "फोटो लगाएं; ऐप पर शिकायत में फोटो ज़रूरी होती है।",
    "खुद भी गीला-सूखा कूड़ा अलग रखें और नाली में कूड़ा न डालें, ताकि शिकायत मज़बूत रहे।",
    "शिकायत नंबर और कॉपी संभाल कर रखें।",
  ],
  official: [
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/swachh-bharat-sanitation-complaint.html", "/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "कूड़ा न उठे तो शिकायत कहां करें?", a: "शहर में स्वच्छता (Swachhata-MoHUA) ऐप, नगर निगम/नगर पालिका की हेल्पलाइन या वार्ड के सफाई निरीक्षक को; गांव में ग्राम पंचायत को। लिखित पत्र की कॉपी पर रिसीविंग ज़रूर लें।" },
    { q: "नाली जाम की शिकायत किसे लिखें?", a: "शहर में वार्ड सफाई निरीक्षक, नगर स्वास्थ्य अधिकारी या नगर आयुक्त/EO को; गांव में ग्राम पंचायत सचिव या मुखिया/सरपंच को।" },
    { q: "स्वच्छ भारत मिशन का हेल्पलाइन नंबर क्या है?", a: "राष्ट्रीय हेल्पलाइन 1969 है। स्थानीय सफाई की शिकायत के लिए स्वच्छता ऐप या नगर निकाय का नंबर ज़्यादा काम आता है।" },
    { q: "नगर निगम सुनवाई न करे तो क्या करें?", a: "ज़िलाधिकारी को लिखें, राज्य के लोक शिकायत पोर्टल या CPGRAMS पर शिकायत करें, या RTI से अपनी शिकायत पर हुई कार्रवाई की जानकारी मांगें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
