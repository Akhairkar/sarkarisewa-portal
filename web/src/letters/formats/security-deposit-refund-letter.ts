import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Model Tenancy Act 2021 (approved by the Union Cabinet on 2 June 2021 as a
//   template for States; MoHUA): s.11 security deposit capped at two months'
//   rent for residential premises (six months for non-residential), to be
//   refunded to the tenant at the time of taking over vacant possession,
//   after making due deductions; disputes go to the Rent Authority / Rent
//   Court set up under the State's law.
// - MoHUA Rajya Sabha reply (Aug 2025, via secondary reports): Assam (2021)
//   and Arunachal Pradesh (2022) notified tenancy Acts on the model;
//   Andaman & Nicobar, DNH&DD and Lakshadweep regulations approved in 2023;
//   Andhra Pradesh, Tamil Nadu, Uttarakhand and Uttar Pradesh have laws based
//   on an earlier draft. The model Act is NOT law in a State until that State
//   enacts it, so the page says the 2-month cap / refund rule applies only
//   where the State law says so; elsewhere the rent agreement governs.
// - Otherwise the remedy is a written demand / legal notice and then the
//   Rent Authority (where it exists) or a civil suit for recovery; no
//   national time limit for refund is stated.
export const securityDepositRefundLetter: Letter = {
  slug: "security-deposit-refund-letter",
  category: "personal",
  emoji: "🔑",
  title: "Security Deposit Refund Letter in Hindi 2026: डिपॉज़िट वापसी पत्र",
  description: "मकान खाली करने के बाद मकान मालिक से सिक्योरिटी डिपॉज़िट वापसी का पत्र (हिंदी/English)। एग्रीमेंट, कटौती का हिसाब, मॉडल किरायेदारी अधिनियम 2021 और आगे का रास्ता।",
  h1: "मकान मालिक से सिक्योरिटी डिपॉज़िट वापसी का पत्र 2026",
  short: { hi: "सिक्योरिटी डिपॉज़िट वापसी पत्र", en: "Security deposit refund letter" },
  lead: "किराये का मकान/दुकान खाली करने के बाद मकान मालिक सिक्योरिटी डिपॉज़िट न लौटाए, तो पहले यह <strong>लिखित मांग पत्र</strong> भेजें। डिपॉज़िट कब और कितनी कटौती के साथ लौटेगा, यह आम तौर पर आपके <strong>रेंट एग्रीमेंट</strong> में लिखा होता है। केंद्र का <strong>मॉडल किरायेदारी अधिनियम 2021 (धारा 11)</strong> कहता है कि रिहायशी मकान का डिपॉज़िट अधिकतम <strong>2 महीने का किराया</strong> हो और मकान का खाली कब्ज़ा लेते समय, जायज़ कटौती के बाद, लौटाया जाए, पर यह नियम <strong>सिर्फ उन राज्यों में लागू है जिन्होंने इसे अपने कानून में अपनाया है</strong>।",
  facts: [
    ["किसे भेजें", "मकान मालिक (या उसका एजेंट/प्रॉपर्टी मैनेजर)"],
    ["आधार", "रेंट एग्रीमेंट की शर्तें; जहां लागू हो, राज्य का किरायेदारी कानून"],
    ["मॉडल एक्ट 2021", "डिपॉज़िट 2 महीने तक; खाली कब्ज़ा लेते समय वापसी (जहां राज्य ने अपनाया)"],
    ["आगे", "कानूनी नोटिस → रेंट अथॉरिटी (जहां बनी हो) / सिविल अदालत"],
  ],
  to: "<strong>मकान मालिक</strong> को, उस पते पर जो रेंट एग्रीमेंट में लिखा है। एजेंट/सोसाइटी के ज़रिए किराया देते थे तो उन्हें भी कॉपी भेजें।",
  when: [
    "मकान खाली करके चाबी सौंप दी, पर डिपॉज़िट वापस नहीं मिला",
    "मकान मालिक बिना हिसाब के डिपॉज़िट से मनमानी कटौती कर रहा है",
    "मरम्मत/पेंट के नाम पर पूरा डिपॉज़िट रोक लिया गया",
    "फोन पर बार-बार टाला जा रहा है और लिखित रिकॉर्ड चाहिए",
  ],
  fields: [
    { key: "landlord", label: { hi: "मकान मालिक का नाम और पता", en: "Landlord's name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका (किरायेदार का) नाम", en: "Your (tenant's) name" }, required: true },
    { key: "newaddress", label: { hi: "आपका अभी का पता", en: "Your current address" }, type: "textarea", required: true },
    { key: "premises", label: { hi: "किराये के मकान का पता", en: "Rented premises address" }, type: "textarea", required: true },
    { key: "agreement", label: { hi: "रेंट एग्रीमेंट की तारीख/अवधि", en: "Rent agreement date/period" }, placeholder: { hi: "जैसे: 01/04/2024 से 11 महीने, नवीनीकरण 01/03/2025", en: "e.g. 11 months from 01/04/2024, renewed 01/03/2025" } },
    { key: "deposit", label: { hi: "जमा किया गया डिपॉज़िट (₹)", en: "Deposit paid (Rs)" }, required: true, placeholder: { hi: "जैसे: ₹30,000 (बैंक ट्रांसफर, 01/04/2024)", en: "e.g. Rs 30,000 (bank transfer, 01/04/2024)" } },
    { key: "vacated", label: { hi: "मकान खाली करने और चाबी देने की तारीख", en: "Date vacated and keys handed over" }, required: true },
    { key: "dues", label: { hi: "बकाया/कटौती की स्थिति", en: "Dues/deduction status" }, type: "select", options: [
      { hi: "मेरी ओर से किराया, बिजली-पानी का कोई बकाया नहीं है", en: "there are no dues of rent, electricity or water from my side" },
      { hi: "जायज़ बकाया (जैसे आखिरी बिजली बिल) काटकर बाकी राशि लौटा दें, कटौती का लिखित हिसाब दें", en: "please deduct legitimate dues (such as the last electricity bill) and return the balance with a written account" },
    ] },
    { key: "days", label: { hi: "कितने दिन में लौटाने को कहें", en: "Days given to refund" }, type: "number", placeholder: { hi: "जैसे: 15", en: "e.g. 15" } },
    { key: "bank", label: { hi: "पैसा भेजने का तरीका (UPI ID या बैंक, IFSC, खाते के आखिरी 4 अंक)", en: "Payment details (UPI ID or bank, IFSC, last 4 digits)" }, type: "textarea", hint: { hi: "पत्र में पूरा खाता नंबर, कार्ड नंबर, PIN या OTP कभी न लिखें", en: "Never write full account/card number, PIN or OTP in the letter" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{landlord}}

विषय: किराये के परिसर {{premises}} की सिक्योरिटी डिपॉज़िट राशि वापस करने हेतु।

महोदय/महोदया,

मैं, {{name}}, आपके परिसर {{premises}} में रेंट एग्रीमेंट ({{agreement}}) के अनुसार किरायेदार था/थी। किरायेदारी की शुरुआत में मैंने आपको {{deposit}} सिक्योरिटी डिपॉज़िट के रूप में दिए थे।

मैंने दिनांक {{vacated}} को परिसर खाली कर उसका कब्ज़ा और चाबियां आपको सौंप दी हैं। परिसर सामान्य टूट-फूट को छोड़कर ठीक हालत में लौटाया गया है। {{dues}}।

अब तक मुझे डिपॉज़िट की राशि वापस नहीं मिली है। अतः आपसे निवेदन है कि इस पत्र की प्राप्ति के {{days}} दिन के अंदर डिपॉज़िट की राशि नीचे दिए खाते/UPI में लौटा दें। यदि कोई कटौती की जाती है, तो उसका मद-वार लिखित हिसाब और बिल साथ में दें।

भुगतान विवरण: {{bank}}

निर्धारित समय में राशि न मिलने पर मुझे कानून के अनुसार उचित कार्यवाही करने के लिए बाध्य होना पड़ेगा, जिसकी पूरी ज़िम्मेदारी आपकी होगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
वर्तमान पता: {{newaddress}}
मोबाइल: {{phone}}

संलग्न:
1. रेंट एग्रीमेंट की कॉपी
2. डिपॉज़िट भुगतान का सबूत (रसीद/बैंक स्टेटमेंट)
3. आखिरी किराया और बिजली-पानी बिल भुगतान की रसीदें
4. खाली करते समय की फोटो/वीडियो, चाबी सौंपने का सबूत (यदि हो)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{landlord}}

Subject: Refund of security deposit for the rented premises at {{premises}}.

Sir/Madam,

I, {{name}}, was a tenant in your premises at {{premises}} under the rent agreement ({{agreement}}). At the start of the tenancy I paid you {{deposit}} as security deposit.

I vacated the premises on {{vacated}} and handed over possession and the keys to you. The premises were returned in good condition, subject to normal wear and tear. Please note that {{dues}}.

I have not yet received the deposit. I therefore request you to refund the deposit to the account/UPI given below within {{days}} days of receipt of this letter. If any deduction is made, kindly give an item-wise written account with bills.

Payment details: {{bank}}

If the amount is not received within the stated time, I will be compelled to take appropriate action as per law, entirely at your risk and cost.

Yours faithfully,

(Signature)
Name: {{name}}
Current address: {{newaddress}}
Mobile: {{phone}}

Enclosures:
1. Copy of rent agreement
2. Proof of deposit payment (receipt/bank statement)
3. Receipts of last rent and electricity/water bills paid
4. Photos/video at the time of vacating, proof of handing over keys (if any)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "रेंट एग्रीमेंट की कॉपी",
    "डिपॉज़िट देने का सबूत: रसीद, बैंक ट्रांसफर/UPI का स्क्रीनशॉट या स्टेटमेंट",
    "आखिरी महीने के किराये और बिजली-पानी के बिल भरने की रसीदें",
    "खाली करते समय मकान की तारीख वाली फोटो/वीडियो और चाबी सौंपने का मैसेज/रसीद",
  ],
  submit: [
    "पत्र पर हस्ताक्षर करके <strong>रजिस्टर्ड डाक/स्पीड पोस्ट</strong> से भेजें; साथ में व्हाट्सऐप/ईमेल पर PDF भी भेज दें। डाक की रसीद और ट्रैकिंग संभालें।",
    "दी गई तारीख तक जवाब न आए तो वकील के ज़रिए <strong>कानूनी नोटिस</strong> भेजें।",
    "आपके राज्य में किरायेदारी कानून के तहत <strong>रेंट अथॉरिटी / रेंट कोर्ट</strong> बनी हो तो वहां आवेदन करें; नहीं तो रकम की वसूली के लिए सिविल अदालत में मुकदमा होता है।",
    "मुफ्त कानूनी सलाह के लिए ज़िला विधिक सेवा प्राधिकरण (DLSA) से संपर्क करें; कई जगह लोक अदालत में आपसी समझौता भी हो जाता है।",
  ],
  tips: [
    "मकान खाली करते समय मकान मालिक के सामने कमरे-कमरे की वीडियो बनाएं और चाबी सौंपने का लिखित/मैसेज सबूत रखें।",
    "आखिरी महीने का किराया डिपॉज़िट में 'एडजस्ट' करने से पहले मकान मालिक की लिखित सहमति लें, वरना विवाद बढ़ता है।",
    "सामान्य टूट-फूट (wear and tear) की कटौती जायज़ नहीं मानी जाती; बड़ी कटौती पर बिल मांगें।",
    "पत्र में बैंक खाते के सिर्फ आखिरी 4 अंक या UPI ID दें; OTP/PIN कभी किसी को न बताएं।",
  ],
  notice: "मॉडल किरायेदारी अधिनियम 2021 अपने-आप पूरे देश में लागू नहीं है; यह उसी राज्य में लागू होता है जिसने इसे अपने कानून के रूप में बनाया है। बाकी जगह आपका रेंट एग्रीमेंट और राज्य का किराया कानून लागू होता है।",
  official: [
    { href: "https://mohua.gov.in/", title: "आवास और शहरी कार्य मंत्रालय", note: "मॉडल किरायेदारी अधिनियम 2021" },
    { href: "https://nalsa.gov.in/", title: "NALSA (मुफ्त कानूनी सहायता)", note: "हेल्पलाइन 15100" },
  ],
  related: ["/rent-agreement/", "/rent-agreement/format.html", "/rent-agreement/tenant-police-verification.html"],
  faq: [
    { q: "मकान मालिक डिपॉज़िट न लौटाए तो क्या करें?", a: "पहले यह लिखित मांग पत्र रजिस्टर्ड डाक से भेजें। जवाब न आए तो कानूनी नोटिस, फिर आपके राज्य की रेंट अथॉरिटी (जहां बनी हो) या सिविल अदालत में वसूली का केस।" },
    { q: "सिक्योरिटी डिपॉज़िट कितना होना चाहिए?", a: "मॉडल किरायेदारी अधिनियम 2021 में रिहायशी मकान के लिए अधिकतम 2 महीने का किराया लिखा है, पर यह सिर्फ उन राज्यों में लागू है जिन्होंने इसे अपनाया। बाकी जगह यह एग्रीमेंट पर निर्भर है।" },
    { q: "डिपॉज़िट कितने दिन में वापस मिलना चाहिए?", a: "मॉडल एक्ट के अनुसार खाली कब्ज़ा लेते समय। ज़्यादातर जगह रेंट एग्रीमेंट में दी गई अवधि लागू होती है; एग्रीमेंट में न लिखा हो तो पत्र में 15-30 दिन की उचित मोहलत दें।" },
    { q: "क्या मकान मालिक पेंट/सफाई का पैसा काट सकता है?", a: "एग्रीमेंट में लिखा हो या किरायेदार ने नुकसान किया हो तो जायज़ कटौती हो सकती है। सामान्य टूट-फूट पर कटौती का विरोध करें और बिल के साथ लिखित हिसाब मांगें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
