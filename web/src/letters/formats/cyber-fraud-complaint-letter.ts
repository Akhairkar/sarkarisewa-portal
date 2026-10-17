import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - cybercrime.gov.in (National Cyber Crime Reporting Portal, I4C, MHA) and
//   helpline 1930 for financial cyber fraud; fast reporting lets the money
//   trail be frozen through linked banks (I4C / PIB on CFCFRMS).
// - Bharatiya Nagarik Suraksha Sanhita 2023 s.173: information on a
//   cognisable offence may be given orally or electronically, FIR
//   irrespective of territorial jurisdiction (Zero FIR); e-information must
//   be signed within 3 days. MHA e-Zero FIR for cyber financial fraud
//   reported on 1930/NCRP (pilot Delhi, threshold differs by state;
//   news/IAS summaries 2025-26) - page does not quote a threshold.
// - Bharatiya Nyaya Sanhita 2023 s.318 cheating, s.319 cheating by
//   personation; Information Technology Act 2000 s.66C identity theft,
//   s.66D cheating by personation using a computer resource.
// - RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18 (6 Jul 2017): zero
//   customer liability for unauthorised electronic transactions reported to
//   the bank within 3 working days where the customer is not at fault.
// - sancharsaathi.gov.in: Chakshu to report fraud calls/SMS.
export const cyberFraudComplaintLetter: Letter = {
  slug: "cyber-fraud-complaint-letter",
  category: "complaint",
  emoji: "🚨",
  title: "Cyber Fraud Complaint Letter in Hindi 2026: UPI ठगी शिकायत पत्र",
  description: "UPI/ऑनलाइन ठगी की शिकायत का तैयार पत्र (हिंदी/English) साइबर सेल/थाने के लिए। पहले 1930 पर कॉल और cybercrime.gov.in पर शिकायत, फिर यह पत्र।",
  h1: "साइबर फ्रॉड शिकायत पत्र 2026: UPI/ऑनलाइन ठगी पर पुलिस को आवेदन",
  short: { hi: "साइबर फ्रॉड शिकायत", en: "Cyber fraud complaint" },
  lead: "UPI, बैंक या ऑनलाइन ठगी होते ही <strong>सबसे पहले 1930 पर कॉल करें</strong> या <strong>cybercrime.gov.in</strong> पर शिकायत करें, ताकि ठग के खाते में गया पैसा रोका जा सके। फिर बैंक को लिखित सूचना दें और यह पत्र नज़दीकी <strong>थाने/साइबर सेल</strong> में देकर FIR की मांग करें। नए कानून BNSS की धारा 173 के तहत FIR किसी भी थाने में (ज़ीरो FIR) और इलेक्ट्रॉनिक तरीके से भी दर्ज हो सकती है।",
  facts: [
    ["सबसे पहले", '<a href="tel:1930">1930</a> पर कॉल (वित्तीय साइबर ठगी हेल्पलाइन)'],
    ["ऑनलाइन शिकायत", '<a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a>'],
    ["बैंक को सूचना", "तुरंत; अनधिकृत लेनदेन 3 कामकाजी दिन में बताने पर (आपकी गलती न हो तो) ग्राहक की देनदारी शून्य (RBI 2017)"],
    ["कानून", "BNS धारा 318/319, IT Act धारा 66C/66D; FIR: BNSS धारा 173"],
  ],
  to: "अपने इलाके के <strong>थाना प्रभारी (SHO)</strong> या ज़िले के <strong>साइबर सेल/साइबर थाना प्रभारी</strong> को। ज़ीरो FIR के नियम से किसी भी थाने में शिकायत दी जा सकती है।",
  when: [
    "UPI/QR स्कैन करवाकर या लिंक भेजकर पैसे निकाल लिए गए",
    "बैंक/KYC/बिजली बिल के नाम पर कॉल करके OTP लेकर पैसे कटे",
    "नौकरी, टास्क, निवेश या लोन के नाम पर पैसे ठग लिए",
    "आपके नाम से फर्जी प्रोफाइल बनाकर पैसे मांगे गए",
  ],
  fields: [
    { key: "station", label: { hi: "थाना/साइबर सेल का नाम और ज़िला", en: "Police station / cyber cell and district" }, required: true, placeholder: { hi: "जैसे: साइबर थाना, लखनऊ", en: "e.g. Cyber Police Station, Lucknow" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "ack", label: { hi: "1930/cybercrime.gov.in शिकायत नंबर (Acknowledgement No.)", en: "1930 / cybercrime.gov.in acknowledgement no." }, placeholder: { hi: "जैसे: 31510260012345", en: "e.g. 31510260012345" } },
    { key: "fraudtype", label: { hi: "ठगी का प्रकार", en: "Type of fraud" }, type: "select", required: true, options: [
      { hi: "UPI/QR कोड के ज़रिए ठगी", en: "fraud through UPI/QR code" },
      { hi: "फर्जी कॉल पर OTP/जानकारी लेकर खाते से पैसे निकाले गए", en: "money withdrawn after OTP/details were taken on a fake call" },
      { hi: "नौकरी/टास्क/निवेश के नाम पर ठगी", en: "job/task/investment fraud" },
      { hi: "फर्जी लिंक/APK ऐप से फोन हैक करके ठगी", en: "fraud by hacking the phone through a fake link/APK app" },
      { hi: "ऑनलाइन खरीद-बिक्री में ठगी", en: "online buying/selling fraud" },
    ] },
    { key: "when", label: { hi: "ठगी की तारीख और समय", en: "Date and time of fraud" }, required: true, placeholder: { hi: "जैसे: 14/10/2026, शाम 6:30 बजे", en: "e.g. 14/10/2026, 6:30 pm" } },
    { key: "amount", label: { hi: "कुल ठगी की रकम (₹)", en: "Total amount lost (Rs)" }, type: "number", required: true },
    { key: "txn", label: { hi: "लेनदेन का ब्योरा (UTR/ट्रांज़ैक्शन ID, रकम, समय)", en: "Transaction details (UTR / transaction ID, amount, time)" }, type: "textarea", required: true, placeholder: { hi: "UTR 6287xxxxxx – ₹5,000 – 6:32 PM\nUTR 6287yyyyyy – ₹9,999 – 6:35 PM", en: "UTR 6287xxxxxx – Rs 5,000 – 6:32 PM" } },
    { key: "bank", label: { hi: "आपका बैंक और खाते के आखिरी 4 अंक", en: "Your bank and last 4 digits of account" }, required: true, placeholder: { hi: "जैसे: SBI, खाता XXXX1234", en: "e.g. SBI, account XXXX1234" }, hint: { hi: "पूरा खाता/कार्ड नंबर, PIN या OTP कभी न लिखें", en: "Never write full account/card number, PIN or OTP" } },
    { key: "suspect", label: { hi: "ठग का नंबर, UPI ID, खाता, लिंक/वेबसाइट", en: "Fraudster's phone, UPI ID, account, link/website" }, type: "textarea", placeholder: { hi: "मोबाइल: 9xxxxxxxxx; UPI: abc@xyz", en: "Mobile: 9xxxxxxxxx; UPI: abc@xyz" } },
    { key: "story", label: { hi: "क्या हुआ (थोड़े शब्दों में)", en: "What happened (briefly)" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
थाना प्रभारी महोदय,
{{station}}

विषय: साइबर ठगी ({{fraudtype}}) में ₹{{amount}} की धोखाधड़ी के संबंध में FIR दर्ज करने हेतु आवेदन

महोदय,

निवेदन है कि मैं, {{name}}, निवासी {{address}}, के साथ दिनांक {{when}} को साइबर ठगी हुई है। घटना का विवरण इस प्रकार है:

{{story}}

ठगी का प्रकार: {{fraudtype}}
मेरा बैंक/खाता: {{bank}}
कुल रकम: ₹{{amount}}

लेनदेन का ब्योरा:
{{txn}}

ठग से जुड़ी जानकारी:
{{suspect}}

मैंने घटना की सूचना राष्ट्रीय साइबर क्राइम हेल्पलाइन 1930 / cybercrime.gov.in पर दे दी है, जिसकी शिकायत संख्या {{ack}} है, और अपने बैंक को भी सूचित कर दिया है।

अतः आपसे निवेदन है कि भारतीय न्याय संहिता 2023 की धारा 318/319 तथा सूचना प्रौद्योगिकी अधिनियम 2000 की धारा 66C/66D के तहत FIR दर्ज कर कार्रवाई करें, ठग के खातों पर रोक लगवाएं और मेरी रकम वापस दिलाने की कृपा करें। FIR की निःशुल्क कॉपी मुझे दी जाए।

प्रार्थी,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. 1930/cybercrime.gov.in शिकायत की पावती
2. बैंक स्टेटमेंट/लेनदेन के SMS और स्क्रीनशॉट
3. ठग के कॉल/चैट/लिंक के स्क्रीनशॉट
4. पहचान पत्र की कॉपी`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Application for registration of FIR regarding cyber fraud ({{fraudtype}}) of Rs {{amount}}

Sir/Madam,

I, {{name}}, resident of {{address}}, was a victim of cyber fraud on {{when}}. The details are as follows:

{{story}}

Type of fraud: {{fraudtype}}
My bank/account: {{bank}}
Total amount: Rs {{amount}}

Transaction details:
{{txn}}

Details of the fraudster:
{{suspect}}

I have reported the incident on the National Cyber Crime Helpline 1930 / cybercrime.gov.in, acknowledgement no. {{ack}}, and have also informed my bank.

I therefore request you to register an FIR under Sections 318/319 of the Bharatiya Nyaya Sanhita, 2023 and Sections 66C/66D of the Information Technology Act, 2000, take action, get the fraudster's accounts frozen and help recover my money. Kindly provide me a free copy of the FIR.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Acknowledgement of 1930 / cybercrime.gov.in complaint
2. Bank statement / transaction SMS and screenshots
3. Screenshots of fraudster's calls / chats / links
4. Copy of ID proof`,
  },
  attach: [
    "1930 कॉल या cybercrime.gov.in शिकायत की पावती संख्या",
    "बैंक स्टेटमेंट और पैसे कटने के SMS (UTR/ट्रांज़ैक्शन ID दिखे)",
    "ठग के नंबर, चैट, लिंक, कॉल लॉग के स्क्रीनशॉट",
    "अपना पहचान पत्र (आधार/वोटर ID) की कॉपी",
  ],
  submit: [
    "ठगी पता चलते ही <strong>1930</strong> पर कॉल करें या <a href=\"https://cybercrime.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cybercrime.gov.in</a> पर \"Report Cyber Crime\" से शिकायत करें; पावती नंबर लिख लें।",
    "अपने बैंक के कस्टमर केयर/शाखा में तुरंत सूचना दें, कार्ड/UPI/नेट बैंकिंग ब्लॉक कराएं और लिखित शिकायत की रसीद लें।",
    "यह पत्र प्रिंट करके सबूतों के साथ थाने/साइबर थाने में दें और रिसीविंग या FIR की कॉपी लें।",
    "पुलिस FIR दर्ज न करे तो ज़िले के <strong>पुलिस अधीक्षक (SP)</strong> को डाक से शिकायत भेजें (BNSS धारा 173(4)); फिर भी न हो तो मजिस्ट्रेट के पास अर्ज़ी दी जा सकती है।",
    "फर्जी कॉल/SMS वाले नंबर की रिपोर्ट <a href=\"https://sancharsaathi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Sanchar Saathi</a> के Chakshu पर भी करें।",
  ],
  tips: [
    "देर न करें: शिकायत जितनी जल्दी होगी, ठग के खाते में पैसा रुकने की संभावना उतनी ज़्यादा।",
    "पत्र में पूरा कार्ड नंबर, CVV, UPI PIN या OTP कभी न लिखें; खाते के आखिरी 4 अंक काफी हैं।",
    "\"पैसा वापस दिलाने\" का दावा करने वाले एजेंट/रिकवरी कॉल से बचें; यह दूसरी ठगी होती है।",
    "फोन से चैट, SMS और कॉल लॉग न मिटाएं; ये सबूत हैं।",
  ],
  notice: "ठगी के बाद पहले कुछ घंटे सबसे कीमती होते हैं। यह पत्र बनाने से पहले 1930 पर कॉल या cybercrime.gov.in पर शिकायत ज़रूर कर दें।",
  official: [
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल", note: "ऑनलाइन शिकायत; हेल्पलाइन 1930" },
    { href: "https://sancharsaathi.gov.in/", title: "Sanchar Saathi", note: "फर्जी कॉल/SMS की रिपोर्ट (Chakshu)" },
  ],
  related: ["/service/upi-payments.html", "/support/helpline-directory.html", "/service/telecom-sanchar-saathi-tafcop.html"],
  faq: [
    { q: "UPI फ्रॉड होने पर सबसे पहले क्या करें?", a: "तुरंत 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें, फिर बैंक को सूचना देकर UPI/कार्ड ब्लॉक कराएं। उसके बाद थाने में लिखित शिकायत दें।" },
    { q: "साइबर फ्रॉड में कौन सी धारा लगती है?", a: "1 जुलाई 2024 से नए कानून लागू हैं: धोखाधड़ी के लिए भारतीय न्याय संहिता (BNS) की धारा 318, किसी और बनकर ठगी के लिए धारा 319, और IT Act की धारा 66C (पहचान चोरी) व 66D (कंप्यूटर/फोन से रूप बदलकर ठगी)। सही धारा पुलिस तय करती है।" },
    { q: "क्या किसी भी थाने में शिकायत कर सकते हैं?", a: "हां। BNSS की धारा 173 के तहत ज़ीरो FIR किसी भी थाने में दर्ज हो सकती है, जिसे बाद में सही थाने भेजा जाता है।" },
    { q: "ठगी का पैसा वापस मिलता है क्या?", a: "जल्दी शिकायत होने पर ठग के खाते में पैसा रोका (freeze) जा सकता है और जांच/अदालत की प्रक्रिया से वापस मिल सकता है। गारंटी नहीं होती, इसलिए देर न करें।" },
    { q: "पुलिस FIR न लिखे तो क्या करें?", a: "ज़िले के SP को लिखित शिकायत डाक से भेजें। फिर भी कार्रवाई न हो तो मजिस्ट्रेट के पास BNSS के तहत अर्ज़ी दी जा सकती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
