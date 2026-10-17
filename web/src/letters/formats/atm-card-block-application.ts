import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular "Customer Protection – Limiting Liability of Customers in
//   Unauthorised Electronic Banking Transactions" (6 Jul 2017,
//   DBR.No.Leg.BC.78/09.07.005/2017-18, rbi.org.in Id=11040): banks must give
//   24x7 access through multiple channels (website, phone banking, SMS, email,
//   IVR, toll-free helpline, home branch) to report unauthorised transactions
//   and loss/theft of cards; zero customer liability for third-party breach
//   reported within 3 working days; limited liability for 4-7 working days;
//   after reporting, loss is borne by the bank; shadow credit within 10 working
//   days; complaint resolved within 90 days.
// - National Cyber Crime Reporting Portal cybercrime.gov.in and helpline 1930
//   (Ministry of Home Affairs, I4C) for online/financial fraud.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026): complain
//   to bank first; Ombudsman via cms.rbi.org.in / 14448; for unauthorised
//   electronic transactions the bank's own longer timeline applies.
// Replacement card charges are set by each bank and are left out.
export const atmCardBlockApplication: Letter = {
  slug: "atm-card-block-application",
  category: "bank",
  emoji: "💳",
  title: "ATM Card Block Application in Hindi 2026: ATM कार्ड बंद करने का आवेदन",
  description: "ATM/डेबिट कार्ड खोने या चोरी होने पर कार्ड ब्लॉक और नया कार्ड जारी करने का तैयार आवेदन पत्र (हिंदी/English)। 3 कार्य दिवस में सूचना, RBI नियम और शिकायत।",
  h1: "ATM/डेबिट कार्ड ब्लॉक और नया कार्ड आवेदन पत्र 2026",
  short: { hi: "ATM कार्ड ब्लॉक आवेदन", en: "ATM card block application" },
  lead: "ATM/डेबिट कार्ड खो जाए या चोरी हो जाए तो <strong>सबसे पहले तुरंत</strong> बैंक के टोल-फ्री नंबर, SMS, ऐप या नेट बैंकिंग से कार्ड ब्लॉक करें; RBI के नियम से बैंक को यह सुविधा <strong>24x7</strong> देनी होती है। उसके बाद यह लिखित आवेदन <strong>होम ब्रांच के शाखा प्रबंधक</strong> को दें, ताकि ब्लॉक का रिकॉर्ड रहे और नया कार्ड जारी हो। अगर कार्ड से कोई गलत लेन-देन हुआ है और आप <strong>3 कार्य दिवस</strong> के अंदर बैंक को बताते हैं, तो (आपकी लापरवाही न हो तो) नुकसान की ज़िम्मेदारी आपकी नहीं होती।",
  facts: [
    ["पहला काम", "तुरंत हेल्पलाइन/SMS/ऐप से कार्ड ब्लॉक करें"],
    ["किसे लिखें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["गलत लेन-देन", "3 कार्य दिवस में बताएं; साइबर फ्रॉड हो तो 1930 पर भी"],
    ["नया कार्ड", "बैंक के नियम से; चार्ज बैंक की सूची के अनुसार"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। गलत निकासी हुई हो तो इसी पत्र में लिखें; बैंक इसे शिकायत के रूप में दर्ज करता है।",
  when: [
    "ATM/डेबिट कार्ड खो गया या चोरी हो गया",
    "कार्ड ATM मशीन में फंस गया और वापस नहीं मिला",
    "कार्ड से बिना आपकी जानकारी पैसे निकले या खरीदारी हुई",
    "कार्ड टूट गया/खराब हो गया और नया कार्ड चाहिए",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "card", label: { hi: "कार्ड नंबर के सिर्फ आखिरी 4 अंक", en: "Only last 4 digits of card" }, type: "number", required: true, placeholder: { hi: "जैसे: 7788", en: "e.g. 7788" }, hint: { hi: "पूरा कार्ड नंबर, CVV, PIN या OTP कभी न लिखें", en: "Never write full card number, CVV, PIN or OTP" } },
    { key: "reason", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", required: true, options: [
      { hi: "मेरा ATM/डेबिट कार्ड खो गया है", en: "my ATM/debit card has been lost" },
      { hi: "मेरा ATM/डेबिट कार्ड चोरी हो गया है", en: "my ATM/debit card has been stolen" },
      { hi: "मेरा ATM/डेबिट कार्ड ATM मशीन में फंस गया और वापस नहीं मिला", en: "my ATM/debit card was retained by the ATM and not returned" },
      { hi: "मेरा ATM/डेबिट कार्ड टूट गया/खराब हो गया है", en: "my ATM/debit card is damaged" },
    ] },
    { key: "when", label: { hi: "कब और कहां (तारीख, जगह)", en: "When and where (date, place)" }, required: true, placeholder: { hi: "जैसे: 14/10/2026 को बस स्टैंड, कानपुर पर", en: "e.g. on 14/10/2026 at bus stand, Kanpur" } },
    { key: "blockref", label: { hi: "हेल्पलाइन से ब्लॉक किया हो तो शिकायत/रेफरेंस नंबर", en: "Block reference no. (if blocked by helpline)" }, placeholder: { hi: "न हो तो 'अभी नहीं' लिखें", en: "Write 'not yet' if none" } },
    { key: "txns", label: { hi: "बिना जानकारी हुए लेन-देन (हों तो)", en: "Unauthorised transactions (if any)" }, type: "textarea", placeholder: { hi: "तारीख, रकम, जगह; न हों तो 'कोई नहीं'", en: "Date, amount, place; or 'none'" } },
    { key: "phone", label: { hi: "बैंक में दर्ज मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: ATM/डेबिट कार्ड स्थायी रूप से बंद (ब्लॉक) करने तथा नया कार्ड जारी करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। इस खाते से जुड़ा मेरा ATM/डेबिट कार्ड, जिसके अंतिम 4 अंक {{card}} हैं, के बारे में सूचित करना है कि {{reason}}। यह घटना {{when}} हुई।

हेल्पलाइन से कार्ड ब्लॉक का शिकायत/रेफरेंस नंबर: {{blockref}}

मेरी जानकारी के बिना हुए लेन-देन: {{txns}}

अतः आपसे निवेदन है कि:
1. उक्त कार्ड को तुरंत स्थायी रूप से बंद (हॉटलिस्ट) करें और इसकी पुष्टि करें।
2. यदि ऊपर लिखा कोई लेन-देन मेरी जानकारी के बिना हुआ है, तो इसे अनधिकृत लेन-देन की शिकायत के रूप में दर्ज करें और RBI के ग्राहक सुरक्षा नियमों के अनुसार राशि वापस करने की कार्रवाई करें।
3. मेरे खाते पर नया ATM/डेबिट कार्ड जारी करें, जो मेरे पंजीकृत पते पर भेजा जाए या शाखा से दिया जाए।

मैंने अपना PIN किसी को नहीं बताया है। यदि पुराना कार्ड मिल जाता है, तो मैं उसे इस्तेमाल नहीं करूंगा/करूंगी और काटकर शाखा में जमा कर दूंगा/दूंगी।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पासबुक के पहले पेज की कॉपी, पहचान पत्र की स्व-प्रमाणित कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request to permanently block ATM/debit card and issue a new card

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. I wish to inform you that {{reason}}. The card linked to this account ends with the digits {{card}}. The incident took place {{when}}.

Block reference no. from the helpline: {{blockref}}

Transactions made without my knowledge: {{txns}}

I therefore request you to:
1. Permanently block (hotlist) the above card immediately and confirm the same.
2. Register any transaction listed above as an unauthorised transaction complaint and take action for reversal as per the RBI customer protection rules.
3. Issue a new ATM/debit card on my account, to be sent to my registered address or handed over at the branch.

I have not shared my PIN with anyone. If the old card is found, I will not use it and will cut and return it to the branch.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copy of passbook first page, self-attested copy of ID proof`,
  },
  attach: [
    "पासबुक के पहले पेज की कॉपी",
    "पहचान पत्र (आधार/वोटर ID/पैन) की स्व-प्रमाणित कॉपी",
    "गलत लेन-देन हुआ हो तो उसका SMS/स्टेटमेंट और साइबर शिकायत (1930/cybercrime.gov.in) की पावती",
  ],
  submit: [
    "<strong>पहले कार्ड ब्लॉक करें:</strong> बैंक के टोल-फ्री नंबर, SMS, मोबाइल ऐप या नेट बैंकिंग से। जो रेफरेंस नंबर मिले, उसे लिख लें।",
    'पैसे कट गए हों तो उसी समय <strong>1930</strong> पर कॉल करें या <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a> पर शिकायत दर्ज करें; जल्दी शिकायत से पैसा रोके जाने की संभावना बढ़ती है।',
    "पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करें और ब्रांच में जमा करके कॉपी पर <strong>रिसीविंग</strong> लें।",
    "नया कार्ड मिलने पर ATM पर नया PIN बनाएं और पुराने कार्ड का ब्लॉक बना रहे, यह देख लें।",
    'गलत लेन-देन की शिकायत का हल बैंक तय समय में न करे या जवाब ठीक न लगे, तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "देर न करें: RBI के नियम में 3 कार्य दिवस के अंदर बताने पर ग्राहक की ज़िम्मेदारी शून्य होती है (जब गलती बैंक या किसी तीसरे की हो)। देर होने पर नुकसान का कुछ हिस्सा आप पर आ सकता है।",
    "पत्र या किसी फॉर्म में पूरा कार्ड नंबर, CVV, PIN या OTP कभी न लिखें।",
    "'कार्ड ब्लॉक करवा दूंगा' कहकर फोन करने वाले को OTP न बताएं; यह आम ठगी है।",
    "कार्ड ATM में फंसा हो तो उस ATM के बैंक को भी सूचना दें और मशीन की जगह/समय लिख लें।",
  ],
  official: [
    { href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040", title: "RBI: अनधिकृत इलेक्ट्रॉनिक लेन-देन में ग्राहक की सीमित ज़िम्मेदारी (2017)" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "हेल्पलाइन 1930" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/service/upi-payments.html", "/support/helpline-directory.html"],
  faq: [
    { q: "ATM कार्ड खो जाए तो सबसे पहले क्या करें?", a: "तुरंत बैंक के टोल-फ्री नंबर, SMS, मोबाइल ऐप या नेट बैंकिंग से कार्ड ब्लॉक करें। फिर ब्रांच में लिखित आवेदन देकर नया कार्ड मांगें।" },
    { q: "कार्ड से पैसे निकल गए तो क्या पैसा वापस मिलेगा?", a: "RBI के 2017 के नियम के अनुसार अगर गलती आपकी नहीं है और आपने 3 कार्य दिवस में बैंक को बताया, तो आपकी ज़िम्मेदारी शून्य है। बैंक को 10 कार्य दिवस में राशि अस्थायी रूप से खाते में डालनी होती है और 90 दिन में शिकायत निपटानी होती है। PIN/OTP खुद बताया हो तो रिपोर्ट करने तक का नुकसान ग्राहक पर आता है।" },
    { q: "क्या ATM कार्ड खोने पर पुलिस में FIR ज़रूरी है?", a: "कार्ड ब्लॉक और नया कार्ड लेने के लिए आम तौर पर नहीं, पर कुछ बैंक मांग सकते हैं। पैसे चोरी हुए हों तो 1930/cybercrime.gov.in पर शिकायत ज़रूर करें।" },
    { q: "नया ATM कार्ड कितने दिन में मिलता है और कितना चार्ज है?", a: "यह बैंक पर निर्भर है। कई बैंक ब्रांच में तुरंत कार्ड देते हैं, कुछ डाक से भेजते हैं। बदले कार्ड का चार्ज बैंक की सेवा शुल्क सूची में होता है।" },
    { q: "ATM कार्ड ब्लॉक आवेदन किसे लिखें?", a: "जिस ब्रांच में खाता है उसके शाखा प्रबंधक को। विषय में 'ATM कार्ड बंद करने और नया कार्ड जारी करने हेतु आवेदन' लिखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
