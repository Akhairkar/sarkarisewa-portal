import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Twelfth Schedule (Art. 243W), item 17 "Public
//   amenities including street lighting, parking lots, bus stops and public
//   conveniences" (municipal function); Eleventh Schedule (Art. 243G) for
//   panchayats (rural electrification / maintenance of community assets).
// - pgportal.gov.in (CPGRAMS): public grievance portal; state subjects are
//   handled by state grievance systems.
// - RTI Act 2005 s.6(1), s.7(1) (see rti-application-format.ts) as the
//   follow-up route to ask for action taken.
// No national complaint number or repair time limit for street lights exists;
// many cities publish their own helpline / app and citizen charter time
// limit, so the page says "check your city".
export const streetLightComplaintLetter: Letter = {
  slug: "street-light-complaint-letter",
  category: "municipal",
  emoji: "💡",
  title: "Street Light Complaint Letter in Hindi 2026: स्ट्रीट लाइट खराब शिकायत",
  description: "गली/मोहल्ले की स्ट्रीट लाइट खराब होने पर नगर निगम, नगर पालिका या ग्राम पंचायत को शिकायत पत्र (हिंदी/English)। किसे दें, कैसे भेजें और आगे शिकायत कहां करें।",
  h1: "स्ट्रीट लाइट खराब होने का शिकायत पत्र 2026",
  short: { hi: "स्ट्रीट लाइट शिकायत पत्र", en: "Street light complaint" },
  lead: "शहर में सड़क की बत्ती (स्ट्रीट लाइट) लगाना और ठीक रखना संविधान की 12वीं अनुसूची के तहत <strong>नगर निकाय</strong> का काम है; गांव में यह ग्राम पंचायत देखती है। शिकायत नगर निगम/नगर पालिका के <strong>विद्युत/प्रकाश विभाग के अभियंता</strong> या <strong>वार्ड कार्यालय</strong> को, और गांव में <strong>ग्राम पंचायत सचिव/मुखिया</strong> को दें। खंभे का नंबर और जगह साफ लिखें ताकि कर्मचारी आसानी से पहुंचें।",
  facts: [
    ["किसे दें (शहर)", "नगर निगम/नगर पालिका का विद्युत (स्ट्रीट लाइट) विभाग या वार्ड कार्यालय"],
    ["किसे दें (गांव)", "ग्राम पंचायत सचिव / मुखिया / सरपंच"],
    ["समय सीमा", "कोई राष्ट्रीय नियम नहीं; कई शहरों के नागरिक चार्टर में तय होती है, दफ्तर से पूछें"],
    ["आगे शिकायत", "नगर आयुक्त / EO → राज्य लोक शिकायत पोर्टल; कार्रवाई की जानकारी के लिए RTI"],
  ],
  to: "शहर में <strong>नगर निगम / नगर पालिका / नगर पंचायत</strong> के विद्युत अभियंता या वार्ड पार्षद/वार्ड कार्यालय को। गांव में <strong>ग्राम पंचायत</strong> के सचिव या मुखिया/सरपंच को। हाईवे की लाइट हो तो संबंधित सड़क एजेंसी को।",
  when: [
    "गली/सड़क की स्ट्रीट लाइट कई दिनों से बंद है",
    "लाइट दिन में भी जलती रहती है (बिजली की बर्बादी)",
    "खंभे का तार लटका है या खंभा टूटा/झुका है (खतरा)",
    "नई कॉलोनी/गली में स्ट्रीट लाइट लगी ही नहीं है",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेजना है (पद और दफ्तर)", en: "Addressed to (post and office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: अधिशासी अभियंता (विद्युत), नगर निगम, कानपुर", en: "e.g. Executive Engineer (Electrical), Municipal Corporation, Kanpur" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "location", label: { hi: "खराब लाइट की जगह", en: "Location of the light" }, type: "textarea", required: true, placeholder: { hi: "जैसे: गली नं. 4, शिव मंदिर के पास, वार्ड नं. 12; खंभा नं. SL-245", en: "e.g. Lane 4, near Shiv temple, Ward 12; pole no. SL-245" } },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", options: [
      { hi: "स्ट्रीट लाइट बंद/खराब है", en: "the street light is not working" },
      { hi: "स्ट्रीट लाइट दिन में भी जलती रहती है", en: "the street light stays on during the day" },
      { hi: "खंभे का तार खुला/लटका है और करंट का खतरा है", en: "the pole wiring is exposed/hanging and there is a risk of electric shock" },
      { hi: "इस गली में स्ट्रीट लाइट लगी ही नहीं है", en: "no street light has been installed in this lane" },
    ] },
    { key: "since", label: { hi: "कब से", en: "Since when" }, placeholder: { hi: "जैसे: 20 सितंबर 2026 से", en: "e.g. since 20 September 2026" } },
    { key: "effect", label: { hi: "इससे क्या परेशानी है", en: "Difficulty caused" }, type: "textarea", placeholder: { hi: "जैसे: रात में अंधेरा रहता है, बच्चे-बुज़ुर्ग गिरते हैं, चोरी की घटना हुई", en: "e.g. dark at night, children and elderly fall, a theft took place" } },
    { key: "earlier", label: { hi: "पहले की शिकायत (हो तो)", en: "Earlier complaint (if any)" }, placeholder: { hi: "जैसे: ऐप पर शिकायत नं. ___, दिनांक ___", en: "e.g. app complaint no. ___ dated ___" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: स्ट्रीट लाइट ठीक कराने हेतु शिकायत पत्र।

महोदय/महोदया,

मैं, {{name}}, आपका ध्यान हमारे क्षेत्र की एक गंभीर समस्या की ओर दिलाना चाहता/चाहती हूं। नीचे लिखी जगह पर {{problem}}:
{{location}}

यह समस्या {{since}} से बनी हुई है। {{effect}}

पहले की शिकायत: {{earlier}}

अतः आपसे निवेदन है कि जल्द से जल्द कर्मचारी भेजकर स्ट्रीट लाइट ठीक/चालू कराने की कृपा करें, ताकि क्षेत्र के लोग सुरक्षित रूप से आ-जा सकें। कृपया इस शिकायत की पावती/शिकायत संख्या दें और की गई कार्रवाई की जानकारी दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint for repair of street light.

Sir/Madam,

I, {{name}}, wish to draw your attention to a serious problem in our area. At the location below, {{problem}}:
{{location}}

This problem has continued {{since}}. {{effect}}

Earlier complaint: {{earlier}}

I therefore request you to send staff at the earliest and get the street light repaired / restored so that residents can move about safely. Kindly give an acknowledgement / complaint number for this letter and inform me of the action taken.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "खराब लाइट/खंभे की फोटो (तारीख के साथ हो तो बेहतर)",
    "मोहल्ले के लोगों के हस्ताक्षर (सामूहिक शिकायत हो तो) – नाम, मकान नं. और मोबाइल के साथ",
    "पहले की शिकायत की पावती/नंबर",
  ],
  submit: [
    "पहले अपने नगर निगम/नगर पालिका का हेल्पलाइन नंबर, ऐप या वेबसाइट देखें; कई शहरों में स्ट्रीट लाइट शिकायत ऑनलाइन दर्ज होती है।",
    "यह पत्र वार्ड/ज़ोनल कार्यालय या विद्युत विभाग में हाथ से दें और कॉपी पर <strong>रिसीविंग</strong> लें, या रजिस्टर्ड डाक से भेजें।",
    "करंट का खतरा हो (खुला तार, गिरा खंभा) तो लिखित शिकायत के साथ बिजली कंपनी के शिकायत नंबर पर भी तुरंत फोन करें।",
    "कार्रवाई न हो तो नगर आयुक्त/अधिशासी अधिकारी (EO) या ज़िलाधिकारी को लिखें, राज्य के लोक शिकायत पोर्टल पर शिकायत करें, या RTI से कार्रवाई की जानकारी मांगें।",
  ],
  tips: [
    "जगह इतनी साफ लिखें कि बाहर का कर्मचारी भी पहुंच जाए: गली नं., लैंडमार्क, खंभे का नंबर।",
    "कई लोगों के हस्ताक्षर वाली सामूहिक शिकायत जल्दी सुनी जाती है।",
    "खुले तार या गिरे खंभे को खुद न छुएं।",
    "शिकायत की कॉपी और नंबर संभाल कर रखें; दोबारा लिखते समय उसका हवाला दें।",
  ],
  official: [
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html", "/service/swachh-bharat-sanitation-complaint.html"],
  faq: [
    { q: "स्ट्रीट लाइट खराब हो तो शिकायत कहां करें?", a: "शहर में नगर निगम/नगर पालिका के विद्युत (स्ट्रीट लाइट) विभाग, वार्ड कार्यालय या उसके हेल्पलाइन/ऐप पर; गांव में ग्राम पंचायत सचिव या मुखिया/सरपंच को।" },
    { q: "स्ट्रीट लाइट शिकायत पत्र में क्या लिखें?", a: "सही जगह (गली, लैंडमार्क, वार्ड, खंभे का नंबर), समस्या क्या है, कब से है, इससे क्या परेशानी हो रही है, और पहले की शिकायत का नंबर।" },
    { q: "स्ट्रीट लाइट कितने दिन में ठीक होनी चाहिए?", a: "इसके लिए कोई राष्ट्रीय समय सीमा नहीं है। कई नगर निगम अपने नागरिक चार्टर में समय तय करते हैं; अपने शहर की वेबसाइट या दफ्तर से पता करें।" },
    { q: "शिकायत के बाद भी लाइट ठीक न हो तो क्या करें?", a: "नगर आयुक्त/EO या ज़िलाधिकारी को लिखें, राज्य के लोक शिकायत पोर्टल पर शिकायत करें, या RTI लगाकर पूछें कि आपकी शिकायत पर क्या कार्रवाई हुई।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
