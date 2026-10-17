import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI has not fixed a uniform account-closure charge; charges are left to
//   each bank's board-approved policy and must be reasonable (RBI Master
//   Circular on Customer Service in Banks; reported by Business Today and
//   BankBazaar). Example: SBI levies no closure charge within 14 days of
//   opening or after one year; a charge applies in between (BankBazaar /
//   Business Today). So the page tells readers to check their bank's schedule
//   of charges instead of giving an amount.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026): complain
//   to the bank first; Ombudsman via cms.rbi.org.in if no reply in 30 days or
//   reply unsatisfactory; free; helpline 14448.
// - Closure of a deceased depositor's account is a claim process (nominee /
//   legal heir), not covered by this letter.
export const bankAccountClosureApplication: Letter = {
  slug: "bank-account-closure-application",
  category: "bank",
  emoji: "🏦",
  title: "Bank Account Closure Application in Hindi 2026: बैंक खाता बंद करने का आवेदन",
  description: "बचत खाता बंद करने का तैयार आवेदन पत्र (हिंदी/English)। बचा पैसा कहां भेजें, चेकबुक-कार्ड लौटाना, क्लोज़र चार्ज और शिकायत का रास्ता। भरें और प्रिंट करें।",
  h1: "बैंक खाता बंद करने का आवेदन पत्र 2026: भरें, प्रिंट करें और ब्रांच में दें",
  short: { hi: "बैंक खाता बंद करने का आवेदन", en: "Bank account closure application" },
  lead: "बचत खाता बंद करने के लिए <strong>होम ब्रांच के शाखा प्रबंधक</strong> को लिखित आवेदन देना होता है, साथ में बची हुई चेकबुक, ATM/डेबिट कार्ड और पासबुक लौटानी होती है। खाते में बचा पैसा आपके दूसरे खाते में भेजा जाता है या बैंक के नियम के अनुसार नकद दिया जाता है। क्लोज़र चार्ज RBI ने एक जैसा तय नहीं किया है; यह हर बैंक की <strong>सेवा शुल्क सूची</strong> से तय होता है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["लौटाना है", "बची चेकबुक, ATM/डेबिट कार्ड, पासबुक"],
    ["क्लोज़र चार्ज", "बैंक की सेवा शुल्क सूची के अनुसार (कई बैंकों में 14 दिन के अंदर या 1 साल बाद नहीं)"],
    ["शिकायत", "30 दिन में हल न हो तो RBI लोकपाल: cms.rbi.org.in"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। संयुक्त खाते में आम तौर पर खाते के संचालन निर्देश (mandate) के अनुसार सभी या अधिकृत खाताधारकों के हस्ताक्षर लगते हैं।",
  when: [
    "शहर बदल गया है और पुराना खाता इस्तेमाल नहीं होता",
    "एक ही व्यक्ति के कई खाते हैं और न्यूनतम बैलेंस/चार्ज से बचना है",
    "बैंक की सेवा से संतुष्ट नहीं हैं और दूसरे बैंक में खाता खोल लिया है",
    "बच्चे का नाबालिग खाता या पुराना वेतन खाता अब ज़रूरी नहीं",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true, hint: { hi: "संयुक्त खाता हो तो सभी के नाम", en: "All names if joint account" } },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "reason", label: { hi: "खाता बंद करने का कारण", en: "Reason for closure" }, type: "select", required: true, options: [
      { hi: "मेरा निवास दूसरी जगह स्थानांतरित हो गया है", en: "I have shifted my residence to another place" },
      { hi: "मेरे पास दूसरा खाता है और इस खाते की अब आवश्यकता नहीं है", en: "I have another account and no longer need this account" },
      { hi: "मैं इस खाते का उपयोग नहीं कर रहा/रही हूं", en: "I am not using this account" },
      { hi: "व्यक्तिगत कारण", en: "Personal reasons" },
    ] },
    { key: "payout", label: { hi: "बचा पैसा कैसे लेना है", en: "How to pay the balance" }, type: "select", required: true, options: [
      { hi: "मेरे दूसरे खाते में ट्रांसफर करें (विवरण नीचे)", en: "Transfer to my other account (details below)" },
      { hi: "बैंक के नियम के अनुसार नकद भुगतान करें", en: "Pay in cash as per bank rules" },
      { hi: "मेरे नाम का डिमांड ड्राफ्ट/पे ऑर्डर बनाएं", en: "Issue a demand draft/pay order in my name" },
    ] },
    { key: "other", label: { hi: "दूसरे खाते का विवरण (ट्रांसफर के लिए)", en: "Other account details (for transfer)" }, type: "textarea", placeholder: { hi: "बैंक का नाम, खाता नंबर, IFSC, खाताधारक का नाम", en: "Bank, account no., IFSC, holder name" }, hint: { hi: "यह खाता आपके अपने नाम का हो", en: "Should be in your own name" } },
    { key: "returned", label: { hi: "क्या-क्या लौटा रहे हैं", en: "Items being returned" }, placeholder: { hi: "जैसे: पासबुक, ATM कार्ड (काटकर), बचे 7 चेक", en: "e.g. passbook, ATM card (cut), 7 unused cheques" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: बचत खाता बंद करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। कारण: {{reason}}। इसलिए मैं यह खाता बंद करवाना चाहता/चाहती हूं।

कृपया मेरा उक्त खाता बंद करें और लागू शुल्क, यदि कोई हो, काटकर शेष राशि का भुगतान इस प्रकार करें: {{payout}}।

दूसरे खाते का विवरण: {{other}}

मैं इस आवेदन के साथ निम्न वस्तुएं लौटा रहा/रही हूं: {{returned}}। मैं पुष्टि करता/करती हूं कि इस खाते से जुड़े सभी ऑटो-डेबिट, स्टैंडिंग इंस्ट्रक्शन, UPI और सब्सिडी/पेंशन जमा के लिए मैंने दूसरा खाता दे दिया है या उन्हें बंद करवा दिया है।

खाता बंद होने के बाद कृपया क्लोज़र की पुष्टि और अंतिम स्टेटमेंट मुझे दें।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पासबुक, पहचान पत्र की स्व-प्रमाणित कॉपी, लौटाई गई वस्तुएं`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Application for closure of savings account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. Reason: {{reason}}. I therefore wish to close this account.

Kindly close the said account and, after deducting applicable charges if any, pay the balance as follows: {{payout}}.

Details of other account: {{other}}

I am returning the following along with this application: {{returned}}. I confirm that I have given another account for, or stopped, all auto-debits, standing instructions, UPI and subsidy/pension credits linked to this account.

Kindly give me a closure confirmation and the final statement of account.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Passbook, self-attested copy of ID proof, items returned`,
  },
  attach: [
    "पासबुक",
    "बची हुई चेकबुक (बिना इस्तेमाल के चेक) और ATM/डेबिट कार्ड (काटकर)",
    "पहचान पत्र की स्व-प्रमाणित कॉपी; मूल पहचान पत्र साथ ले जाएं",
    "ट्रांसफर करवाना हो तो दूसरे खाते का कैंसिल चेक या पासबुक की कॉपी",
  ],
  submit: [
    "खाता बंद करने से पहले उसमें आने वाली पेंशन, सब्सिडी (DBT), वेतन, LPG सब्सिडी, बीमा प्रीमियम और EMI के ऑटो-डेबिट को दूसरे खाते में बदलवाएं।",
    "कई बैंक अपना 'खाता बंद करने का फॉर्म' मांगते हैं; यह पत्र साथ लगाएं या उसकी जानकारी फॉर्म में भरें।",
    "पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, सभी खाताधारक हस्ताक्षर करें और ब्रांच में खुद जाकर दें।",
    "कॉपी पर <strong>रिसीविंग</strong> लें और खाता बंद होने का पत्र/अंतिम स्टेटमेंट संभालकर रखें।",
    'देरी या गलत चार्ज हो तो बैंक में लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "जिस खाते में सरकारी योजना/पेंशन का पैसा आता है, उसे बंद करने से पहले योजना के दफ्तर या पोर्टल पर नया खाता दर्ज करवाएं, वरना किस्त रुक सकती है।",
    "बंद करने से पहले कोई चेक जो आपने दिया हो और अभी क्लियर न हुआ हो, उसका ध्यान रखें; बाद में वह बाउंस होगा।",
    "पत्र में कार्ड नंबर, PIN या OTP न लिखें।",
    "खाताधारक की मृत्यु हो गई हो तो यह पत्र नहीं, नॉमिनी/वारिस के लिए दावा (claim) प्रक्रिया होती है; बैंक से उसका फॉर्म लें।",
  ],
  notice: "कई बैंक खाता बंद करने के लिए अपना फॉर्म (Account Closure Form) मांगते हैं और खाताधारक को खुद ब्रांच बुलाते हैं।",
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
    { href: "https://rbi.org.in/", title: "भारतीय रिज़र्व बैंक" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/service/lpg-subsidy-pahal.html"],
  faq: [
    { q: "बैंक खाता बंद करने का कितना चार्ज लगता है?", a: "RBI ने कोई एक चार्ज तय नहीं किया है; हर बैंक अपनी सेवा शुल्क सूची से लेता है। कई बैंक खाता खुलने के 14 दिन के अंदर या 1 साल पूरा होने के बाद बंद करने पर चार्ज नहीं लेते। अपने बैंक की सूची ब्रांच या वेबसाइट पर देखें।" },
    { q: "क्या खाता ऑनलाइन बंद हो सकता है?", a: "कुछ बैंक ऐप/नेट बैंकिंग से अनुरोध लेते हैं, पर ज़्यादातर बैंकों में ब्रांच जाकर हस्ताक्षर करने पड़ते हैं। अपने बैंक से पूछें।" },
    { q: "खाते में माइनस बैलेंस (बकाया चार्ज) है तो?", a: "बैंक बंद करने से पहले बकाया चार्ज जमा करने को कह सकता है। चार्ज गलत लगे तो लिखित में ब्योरा मांगें और शिकायत करें।" },
    { q: "संयुक्त खाता कैसे बंद होगा?", a: "आम तौर पर खाते के संचालन निर्देश (जैसे 'दोनों में से कोई' या 'दोनों मिलकर') के अनुसार हस्ताक्षर लगते हैं। सुरक्षित तरीका है कि सभी खाताधारक आवेदन पर हस्ताक्षर करें।" },
    { q: "खाता बंद करने में कितना समय लगता है?", a: "सब कागज़ सही हों तो कई बैंक उसी दिन या कुछ कार्य दिवस में बंद कर देते हैं। देरी हो तो रिसीविंग के साथ लिखित शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
