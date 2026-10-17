import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Twelfth Schedule (Art. 243W) items 4 "Roads and
//   bridges" and 6 "Public health, sanitation conservancy and solid waste
//   management" (municipal functions; drains and storm water are handled by
//   the municipal body's engineering / drainage wing or a state Jal Nigam);
//   Eleventh Schedule (Art. 243G) "drinking water", "health and sanitation"
//   and roads/culverts for panchayats.
// - Same research as garbage-sanitation-complaint-letter.ts: Swachhata-MoHUA
//   app routes blocked-drain complaints to the city body (Lok Sabha answer on
//   eparlib.nic.in; App Store listing).
// - pgportal.gov.in (CPGRAMS). Disaster helpline 1070/1077 is state-run and
//   not verified for every state, so only "emergency 112" is named.
// No national time limit for drainage complaints exists; none is stated.
export const waterLoggingComplaintLetter: Letter = {
  slug: "water-logging-complaint-letter",
  category: "municipal",
  emoji: "🌧️",
  title: "Water Logging Complaint Letter in Hindi 2026: जलभराव / नाली शिकायत",
  description: "गली-मोहल्ले में बारिश का पानी भरने या नाली निकासी न होने पर नगर निगम/नगर पालिका या ग्राम पंचायत को शिकायत पत्र (हिंदी/English)। किसे दें और आगे कहां जाएं।",
  h1: "जलभराव और पानी निकासी शिकायत पत्र 2026",
  short: { hi: "जलभराव शिकायत पत्र", en: "Water logging complaint" },
  lead: "बारिश के बाद गली/सड़क पर पानी भरा रहे, नाली का पानी घरों में घुसे या पानी निकासी (ड्रेनेज) की व्यवस्था न हो, तो शहर में <strong>नगर निगम/नगर पालिका</strong> के अभियंता (निर्माण/ड्रेनेज विभाग) या नगर आयुक्त/EO को, और गांव में <strong>ग्राम पंचायत</strong> को शिकायत दें। जगह, कितने दिन से पानी भरा है और इससे क्या खतरा है, साफ लिखें। जान का खतरा हो (करंट, मकान गिरना) तो पहले <strong>112</strong> पर फोन करें।",
  facts: [
    ["किसे दें (शहर)", "नगर निगम/नगर पालिका के अधिशासी/सहायक अभियंता (ड्रेनेज/निर्माण) या नगर आयुक्त/EO"],
    ["किसे दें (गांव)", "ग्राम पंचायत सचिव / मुखिया / सरपंच; फिर BDO"],
    ["आपात स्थिति", "करंट, मकान गिरने या डूबने का खतरा हो तो 112"],
    ["आगे शिकायत", "ज़िलाधिकारी → राज्य लोक शिकायत पोर्टल / CPGRAMS; RTI"],
  ],
  to: "शहर में <strong>नगर निगम / नगर पालिका</strong> के अधिशासी अभियंता (निर्माण/ड्रेनेज) या <strong>नगर आयुक्त / अधिशासी अधिकारी (EO)</strong> को; गांव में <strong>ग्राम पंचायत</strong> को। समस्या बड़ी हो या कई विभागों की हो तो प्रति (कॉपी) <strong>ज़िलाधिकारी</strong> को भी भेजें।",
  when: [
    "हर बारिश में गली/सड़क पर कई दिन पानी भरा रहता है",
    "नाली का गंदा पानी घरों या दुकानों में घुस रहा है",
    "नाली बनी ही नहीं है या टूटी/बंद है, पानी निकलने का रास्ता नहीं",
    "भरे पानी से मच्छर, बीमारी या करंट का खतरा है",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेजना है (पद और दफ्तर)", en: "Addressed to (post and office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: नगर आयुक्त, नगर निगम, पटना", en: "e.g. Municipal Commissioner, Municipal Corporation, Patna" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "location", label: { hi: "जलभराव की जगह", en: "Location of water logging" }, type: "textarea", required: true, placeholder: { hi: "जैसे: वार्ड नं. 22, राजेंद्र नगर, रोड नं. 5, पानी टंकी के पास", en: "e.g. Ward 22, Rajendra Nagar, Road 5, near water tank" } },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", options: [
      { hi: "बारिश का पानी सड़क/गली में कई दिन तक भरा रहता है", en: "rain water remains logged on the road/lane for several days" },
      { hi: "नाली जाम होने से गंदा पानी घरों में घुस रहा है", en: "dirty water is entering houses because the drain is choked" },
      { hi: "इलाके में पानी निकासी के लिए नाली ही नहीं बनी है", en: "no drain has been built in the area for water to flow out" },
      { hi: "नाली टूटी हुई है और पानी सड़क पर फैल रहा है", en: "the drain is broken and water spreads over the road" },
    ] },
    { key: "since", label: { hi: "कब से", en: "Since when" }, placeholder: { hi: "जैसे: 15 सितंबर 2026 की बारिश से", en: "e.g. since the rain of 15 September 2026" } },
    { key: "effect", label: { hi: "इससे क्या परेशानी/खतरा है", en: "Difficulty / danger caused" }, type: "textarea", placeholder: { hi: "जैसे: घुटने तक पानी, बच्चे स्कूल नहीं जा पा रहे, डेंगू के मरीज़ मिले, बिजली खंभे के पास पानी", en: "e.g. knee-deep water, children cannot go to school, dengue cases, water near electric pole" } },
    { key: "earlier", label: { hi: "पहले की शिकायत (हो तो)", en: "Earlier complaint (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: क्षेत्र में जलभराव और पानी निकासी की व्यवस्था न होने के संबंध में शिकायत।

महोदय/महोदया,

मैं, {{name}}, आपका ध्यान हमारे क्षेत्र की जलभराव की गंभीर समस्या की ओर दिलाना चाहता/चाहती हूं। नीचे लिखी जगह पर {{problem}}:
{{location}}

यह स्थिति {{since}} बनी हुई है। {{effect}}

पहले की शिकायत: {{earlier}}

भरे पानी से बीमारी फैलने, दुर्घटना और मकानों को नुकसान का खतरा है। अतः आपसे निवेदन है कि:
1. तुरंत पंप/कर्मचारी भेजकर भरा हुआ पानी निकलवाया जाए और नाली की सफाई कराई जाए;
2. स्थायी समाधान के लिए नाली निर्माण/मरम्मत का काम कराया जाए;
3. मच्छर-रोधी दवा का छिड़काव कराया जाए;
4. इस शिकायत की पावती और की गई कार्रवाई की जानकारी दी जाए।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

संलग्न: जलभराव की फोटो, क्षेत्रवासियों के हस्ताक्षर
प्रतिलिपि: ज़िलाधिकारी (सूचनार्थ)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint regarding water logging and lack of drainage in our area.

Sir/Madam,

I, {{name}}, wish to draw your attention to the serious problem of water logging in our area. At the location below, {{problem}}:
{{location}}

This situation has continued {{since}}. {{effect}}

Earlier complaint: {{earlier}}

The stagnant water poses a risk of disease, accidents and damage to houses. I therefore request that:
1. Pumps/staff be sent immediately to drain the water and clean the drains;
2. Drain construction/repair be taken up as a permanent solution;
3. Anti-mosquito spraying be carried out;
4. An acknowledgement and information on the action taken be given to me.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Enclosures: Photographs of water logging, signatures of residents
Copy to: District Magistrate (for information)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "भरे पानी की फोटो/वीडियो, जिसमें जगह पहचान में आए",
    "क्षेत्रवासियों के हस्ताक्षर (नाम, मकान नं., मोबाइल)",
    "पहले की शिकायत का नंबर/कॉपी",
  ],
  submit: [
    "नगर निकाय की हेल्पलाइन/ऐप/पोर्टल पर शिकायत दर्ज करें; जाम नाली की शिकायत स्वच्छता (Swachhata-MoHUA) ऐप पर भी होती है।",
    "यह पत्र नगर निगम/वार्ड कार्यालय में देकर कॉपी पर रिसीविंग लें; एक कॉपी ज़िलाधिकारी कार्यालय में भी दें।",
    "करंट, मकान गिरने या डूबने का खतरा हो तो पत्र का इंतज़ार न करें, <strong>112</strong> पर फोन करें।",
    "कार्रवाई न हो तो राज्य के लोक शिकायत पोर्टल या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें, या RTI से नाली निर्माण के प्रस्ताव/बजट की जानकारी मांगें।",
  ],
  tips: [
    "भरे पानी में बिजली के खंभे या तार के पास न जाएं।",
    "समस्या हर साल होती है तो पिछली शिकायतों की कॉपी लगाकर स्थायी नाली की मांग करें।",
    "सामूहिक शिकायत और फोटो से कार्रवाई जल्दी होती है।",
    "शिकायत नंबर और रिसीविंग संभाल कर रखें।",
  ],
  official: [
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/swachh-bharat-sanitation-complaint.html", "/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "जलभराव की शिकायत कहां करें?", a: "शहर में नगर निगम/नगर पालिका की हेल्पलाइन, ऐप या ड्रेनेज/निर्माण विभाग के अभियंता को; गांव में ग्राम पंचायत को। बड़ी समस्या पर ज़िलाधिकारी को भी प्रति भेजें।" },
    { q: "जलभराव शिकायत पत्र में क्या लिखें?", a: "सही जगह और लैंडमार्क, कब से पानी भरा है, इससे क्या खतरा/परेशानी है, और तुरंत पानी निकालने तथा स्थायी नाली बनाने की मांग। साथ में फोटो लगाएं।" },
    { q: "नाली का पानी घर में घुसे तो क्या करें?", a: "नगर निकाय/पंचायत को तुरंत शिकायत दें। करंट या मकान को खतरा हो तो 112 पर फोन करें। बाद में नुकसान हो तो उसकी फोटो और शिकायत की कॉपी संभाल कर रखें।" },
    { q: "बार-बार शिकायत के बाद भी हल न हो तो?", a: "ज़िलाधिकारी, राज्य लोक शिकायत पोर्टल या CPGRAMS पर शिकायत करें, और RTI से पूछें कि आपके इलाके में नाली निर्माण का कोई प्रस्ताव या बजट है या नहीं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
