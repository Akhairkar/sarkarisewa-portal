import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Consumer Protection Act 2019 (indiacode.nic.in): s.2(10) defect,
//   s.2(11) deficiency in service, s.2(47) unfair trade practice; s.34/47/58
//   District / State / National Commission; s.69 complaint within 2 years of
//   the cause of action.
// - Consumer Protection (Jurisdiction of the District Commission, the State
//   Commission and the National Commission) Rules 2021: up to Rs 50 lakh
//   District, Rs 50 lakh-2 crore State, above Rs 2 crore National (value of
//   goods/services paid).
// - consumerhelpline.gov.in (NCH, Department of Consumer Affairs): toll-free
//   1915, 8 AM-8 PM, WhatsApp 8800001915; pre-litigation, forwards complaint
//   to the company; not a court.
// - e-jagriti.gov.in: online filing before Consumer Commissions (launched
//   2025, merging e-Daakhil/OCMS; Vikaspedia).
// Commission fee slabs are not stated in rupees except "no fee up to Rs 5
// lakh" (Consumer Commission Procedure Regulations 2020); the page tells the
// reader to check the current fee on e-Jagriti.
export const consumerComplaintLetter: Letter = {
  slug: "consumer-complaint-letter",
  category: "complaint",
  emoji: "🧾",
  title: "Consumer Complaint Letter in Hindi 2026: खराब सामान शिकायत पत्र",
  description: "खराब सामान या सेवा में कमी पर दुकान/कंपनी को शिकायत पत्र (हिंदी/English)। हल न हो तो हेल्पलाइन 1915 और उपभोक्ता आयोग (e-Jagriti) का रास्ता।",
  h1: "उपभोक्ता शिकायत पत्र 2026: दुकान या कंपनी को लिखित शिकायत",
  short: { hi: "उपभोक्ता शिकायत पत्र", en: "Consumer complaint letter" },
  lead: "खराब सामान, वारंटी में मरम्मत से इनकार, सेवा में कमी या ज़्यादा पैसा वसूलने पर पहले <strong>दुकानदार/कंपनी को लिखित शिकायत</strong> दें और एक तय समय में हल मांगें। यही पत्र आगे <strong>राष्ट्रीय उपभोक्ता हेल्पलाइन 1915</strong> और उपभोक्ता आयोग में सबूत बनता है। उपभोक्ता संरक्षण अधिनियम 2019 की धारा 69 के अनुसार आयोग में केस <strong>2 साल</strong> के अंदर करना होता है; ₹50 लाख तक के मामले <strong>जिला उपभोक्ता आयोग</strong> में जाते हैं।",
  facts: [
    ["किसे दें", "दुकानदार, कंपनी का ग्राहक सेवा/शिकायत अधिकारी"],
    ["हेल्पलाइन", '<a href="tel:1915">1915</a> (सुबह 8 से रात 8), WhatsApp 8800001915'],
    ["आयोग में केस", 'जिला आयोग (₹50 लाख तक), <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener nofollow">e-Jagriti</a> से ऑनलाइन'],
    ["समय सीमा", "समस्या होने से 2 साल के अंदर (धारा 69)"],
  ],
  to: "जिस <strong>दुकान/डीलर</strong> से सामान लिया उसके मालिक को, और साथ में <strong>कंपनी (निर्माता/सेवा देने वाली) के शिकायत अधिकारी / Grievance Officer</strong> को। कंपनी का पता और ईमेल बिल, वारंटी कार्ड या कंपनी की वेबसाइट पर मिलता है।",
  when: [
    "नया सामान खराब निकला या जल्दी खराब हो गया",
    "वारंटी/गारंटी में मरम्मत या बदलने से मना किया गया",
    "पैसे लेकर सेवा (मरम्मत, इंस्टॉलेशन, कूरियर, कोचिंग आदि) ठीक से नहीं दी",
    "MRP से ज़्यादा पैसा लिया या बिल नहीं दिया",
  ],
  fields: [
    { key: "company", label: { hi: "दुकान/कंपनी का नाम और पता", en: "Shop / company name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: शर्मा इलेक्ट्रॉनिक्स, मेन रोड, आरा; और ABC कंपनी, ग्राहक सेवा विभाग", en: "e.g. Sharma Electronics, Main Road, Arrah; and ABC Ltd, Customer Care" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "product", label: { hi: "सामान/सेवा (मॉडल, सीरियल नंबर)", en: "Product / service (model, serial no.)" }, required: true, placeholder: { hi: "जैसे: ABC फ्रिज, मॉडल X200, सीरियल 12345", en: "e.g. ABC refrigerator, model X200, serial 12345" } },
    { key: "bill", label: { hi: "बिल/इनवॉइस नंबर", en: "Bill / invoice no." } },
    { key: "buydate", label: { hi: "खरीद की तारीख", en: "Date of purchase" }, required: true },
    { key: "amount", label: { hi: "चुकाई गई रकम (₹)", en: "Amount paid (Rs)" }, type: "number" },
    { key: "problem", label: { hi: "समस्या क्या है (तारीख के साथ)", en: "What is the problem (with dates)" }, type: "textarea", required: true, placeholder: { hi: "खरीद के 20 दिन बाद ही कूलिंग बंद हो गई। 05/09 को शिकायत नं. 4567 दर्ज कराई, कोई नहीं आया...", en: "Cooling stopped 20 days after purchase. Complaint no. 4567 on 05/09, no one came..." } },
    { key: "demand", label: { hi: "आप क्या चाहते हैं", en: "What you want" }, type: "select", required: true, options: [
      { hi: "सामान को नए सामान से बदला जाए", en: "replace the product with a new one" },
      { hi: "सामान की मुफ्त मरम्मत की जाए", en: "repair the product free of cost" },
      { hi: "पूरी रकम वापस की जाए", en: "refund the full amount" },
      { hi: "सेवा ठीक से पूरी की जाए और हुए नुकसान का मुआवज़ा दिया जाए", en: "complete the service properly and compensate the loss caused" },
    ] },
    { key: "days", label: { hi: "हल के लिए कितने दिन दें", en: "Days given to resolve" }, type: "select", options: [
      { hi: "15", en: "15" },
      { hi: "7", en: "7" },
      { hi: "30", en: "30" },
    ] },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{company}}

विषय: खराब सामान/सेवा में कमी के संबंध में शिकायत – {{product}}

महोदय/महोदया,

मैंने दिनांक {{buydate}} को आपसे {{product}} खरीदा/सेवा ली, जिसका बिल/इनवॉइस नंबर {{bill}} है और इसके लिए ₹{{amount}} का भुगतान किया।

समस्या का विवरण:
{{problem}}

यह उपभोक्ता संरक्षण अधिनियम 2019 के तहत सामान में दोष/सेवा में कमी का मामला है। मैंने अपनी ओर से हर संभव तरीके से संपर्क किया, लेकिन अब तक समाधान नहीं हुआ।

अतः आपसे अनुरोध है कि इस पत्र के मिलने के {{days}} दिन के अंदर {{demand}}, और मुझे लिखित में सूचित करें।

तय समय में समाधान न होने पर मुझे मजबूर होकर राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) और जिला उपभोक्ता आयोग में शिकायत करनी पड़ेगी, जिसकी पूरी जिम्मेदारी आपकी होगी।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. बिल/इनवॉइस की कॉपी
2. वारंटी कार्ड की कॉपी (यदि हो)
3. पहले की शिकायत/सर्विस रिपोर्ट, फोटो`,
    en: `To,
{{company}}

Subject: Complaint regarding defective product / deficiency in service – {{product}}

Sir/Madam,

On {{buydate}} I purchased {{product}} / availed your service under bill/invoice no. {{bill}} and paid Rs {{amount}}.

Details of the problem:
{{problem}}

This is a case of defect in goods / deficiency in service under the Consumer Protection Act, 2019. I have tried to contact you in every possible way, but the problem has not been resolved so far.

I therefore request you to {{demand}} within {{days}} days of receiving this letter, and to inform me in writing.

If the matter is not resolved within this time, I shall be compelled to approach the National Consumer Helpline (1915) and the District Consumer Commission, entirely at your risk and cost.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of bill / invoice
2. Copy of warranty card (if any)
3. Earlier complaint / service report, photos`,
  },
  attach: [
    "बिल/इनवॉइस की कॉपी (असली अपने पास रखें)",
    "वारंटी/गारंटी कार्ड की कॉपी",
    "कस्टमर केयर शिकायत नंबर, सर्विस जॉब शीट, ईमेल/चैट के स्क्रीनशॉट",
    "खराबी की फोटो या वीडियो",
  ],
  submit: [
    "पत्र दुकान पर हाथ से दें और कॉपी पर रिसीविंग लें, या कंपनी के पते पर <strong>स्पीड पोस्ट/रजिस्टर्ड डाक</strong> से भेजें। कंपनी के ग्राहक सेवा ईमेल पर भी भेजें।",
    "तय दिनों में जवाब न आए तो <strong>राष्ट्रीय उपभोक्ता हेल्पलाइन</strong> पर शिकायत करें: 1915 पर कॉल, WhatsApp 8800001915 या consumerhelpline.gov.in। हेल्पलाइन शिकायत कंपनी तक पहुंचाकर हल कराने की कोशिश करती है।",
    'फिर भी हल न हो तो <strong>जिला उपभोक्ता आयोग</strong> में केस करें; <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener nofollow">e-Jagriti</a> पोर्टल से ऑनलाइन दायर हो जाता है। वकील ज़रूरी नहीं।',
    "आयोग में केस समस्या शुरू होने से 2 साल के अंदर करें।",
  ],
  tips: [
    "शिकायत में तारीखें, बिल नंबर और पहले की शिकायत संख्या ज़रूर लिखें।",
    "गुस्से या धमकी की भाषा न लिखें; शांत और तथ्यों वाला पत्र आयोग में ज़्यादा काम आता है।",
    "बिल और खराब सामान संभाल कर रखें, उसे फेंकें या खुद न खुलवाएं।",
    "फोन पर हुई बात का भी सार ईमेल से भेज दें, ताकि लिखित सबूत रहे।",
  ],
  official: [
    { href: "https://consumerhelpline.gov.in/", title: "राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH)", note: "1915 / WhatsApp 8800001915" },
    { href: "https://e-jagriti.gov.in/", title: "e-Jagriti", note: "उपभोक्ता आयोग में ऑनलाइन केस" },
  ],
  related: ["/service/consumer-grievance-redressal.html"],
  faq: [
    { q: "खराब सामान की शिकायत सबसे पहले कहां करें?", a: "पहले दुकानदार और कंपनी को लिखित शिकायत दें। हल न हो तो राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 या WhatsApp 8800001915 पर शिकायत करें।" },
    { q: "उपभोक्ता आयोग में केस कितने समय में करना होता है?", a: "उपभोक्ता संरक्षण अधिनियम 2019 की धारा 69 के अनुसार समस्या (कारण) होने के 2 साल के अंदर।" },
    { q: "किस आयोग में केस करें?", a: "सामान/सेवा की कीमत ₹50 लाख तक हो तो जिला आयोग, ₹50 लाख से ₹2 करोड़ तक राज्य आयोग, उससे ऊपर राष्ट्रीय आयोग।" },
    { q: "क्या उपभोक्ता आयोग में वकील ज़रूरी है?", a: "नहीं। उपभोक्ता खुद अपना केस दायर कर सकता है और e-Jagriti पोर्टल से ऑनलाइन भी कर सकता है।" },
    { q: "आयोग में केस की फीस कितनी है?", a: "₹5 लाख तक के दावे पर फीस नहीं लगती; उससे ऊपर दावे की रकम के हिसाब से फीस है। केस दायर करते समय e-Jagriti पर मौजूदा फीस देख लें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
