import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular "Harmonisation of Turn Around Time (TAT) and customer
//   compensation for failed transactions using authorised Payment Systems"
//   (20 Sep 2019, effective 15 Oct 2019, rbi.org.in Id=11693): UPI fund
//   transfer debited but beneficiary not credited -> auto-reversal by T+1,
//   compensation Rs 100 per day of delay beyond T+1; UPI merchant payment
//   debited but merchant not confirmed -> auto-reversal by T+5, Rs 100 per day
//   beyond that. Applies without a customer complaint.
// - Money sent by the customer to a wrong UPI ID/account is not a "failed"
//   transaction; banks/app raise it with the beneficiary bank through NPCI's
//   UPI dispute redressal mechanism (npci.org.in > UPI > Dispute Redressal
//   Mechanism, option "Incorrectly transferred to another account"); refund
//   usually needs the receiver's consent (reported by Outlook Money and
//   others).
// - Fraud: National Cyber Crime helpline 1930 / cybercrime.gov.in (MHA, I4C).
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026): complain
//   to the bank/app first; Ombudsman via cms.rbi.org.in if no reply in 30 days
//   (or longer timeline set by RBI/NPCI) or reply unsatisfactory; free; 14448.
export const wrongUpiTransactionRefundApplication: Letter = {
  slug: "wrong-upi-transaction-refund-application",
  category: "bank",
  emoji: "💸",
  title: "UPI Refund Complaint Letter in Hindi 2026: गलत/फेल UPI पेमेंट वापसी आवेदन",
  description: "UPI पेमेंट फेल हुआ पर पैसा कटा, या गलत नंबर पर चला गया? बैंक को शिकायत पत्र (हिंदी/English), T+1 वापसी और ₹100/दिन मुआवज़ा नियम, NPCI और RBI लोकपाल।",
  h1: "गलत या फेल UPI ट्रांजैक्शन रिफंड के लिए बैंक को शिकायत पत्र 2026",
  short: { hi: "UPI रिफंड शिकायत पत्र", en: "UPI refund complaint" },
  lead: "UPI से पैसा भेजा, आपके खाते से कटा पर सामने वाले को नहीं मिला, तो RBI के नियम से बैंक को <strong>अगले कार्य दिवस (T+1)</strong> तक पैसा अपने आप लौटाना होता है; देरी पर <strong>₹100 प्रति दिन</strong> मुआवज़ा बनता है। अगर पैसा <strong>गलत UPI ID/नंबर</strong> पर चला गया, तो यह फेल ट्रांजैक्शन नहीं है; बैंक/ऐप NPCI के ज़रिए सामने वाले बैंक से वापसी का अनुरोध करते हैं, और पैसा आम तौर पर पाने वाले की सहमति से ही लौटता है। दोनों हालात में पहले UPI ऐप में शिकायत करें, फिर यह लिखित शिकायत <strong>अपने बैंक के शाखा प्रबंधक</strong> को दें।",
  facts: [
    ["फेल पर पैसा कटा", "T+1 में अपने आप वापसी; देरी पर ₹100/दिन"],
    ["मर्चेंट पेमेंट फेल", "T+5 में वापसी; देरी पर ₹100/दिन"],
    ["गलत व्यक्ति को भेजा", "ऐप + बैंक + NPCI शिकायत; पाने वाले की सहमति ज़रूरी"],
    ["आगे शिकायत", "30 दिन बाद RBI लोकपाल: cms.rbi.org.in / 14448"],
  ],
  to: "जिस खाते से पैसा कटा, उस बैंक की <strong>होम ब्रांच के शाखा प्रबंधक</strong> को। साथ में UPI ऐप (जैसे जिस ऐप से भुगतान किया) के 'Help/Raise dispute' में भी शिकायत दर्ज करें।",
  when: [
    "UPI पेमेंट 'Failed' या 'Pending' दिखा, पर खाते से पैसा कट गया",
    "दुकानदार/वेबसाइट को पेमेंट किया, पैसा कटा पर ऑर्डर/रसीद नहीं मिली",
    "गलती से गलत मोबाइल नंबर/UPI ID/खाते में पैसा चला गया",
    "एक ही पेमेंट दो बार कट गया",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम (जिस खाते से पैसा कटा)", en: "Bank name (debited account)" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "issue", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", required: true, options: [
      { hi: "UPI ट्रांजैक्शन फेल/पेंडिंग रहा, मेरे खाते से राशि कट गई, पर पाने वाले के खाते में जमा नहीं हुई और अब तक वापस नहीं आई", en: "the UPI transaction failed/remained pending; my account was debited but the beneficiary was not credited and the amount has not been reversed so far" },
      { hi: "मर्चेंट को UPI पेमेंट किया, राशि कट गई पर मर्चेंट को पुष्टि नहीं मिली और राशि वापस नहीं आई", en: "I made a UPI payment to a merchant; my account was debited but the merchant did not receive confirmation and the amount has not been reversed" },
      { hi: "गलती से राशि गलत UPI ID/मोबाइल नंबर/खाते में चली गई", en: "the amount was credited by mistake to a wrong UPI ID/mobile number/account" },
      { hi: "एक ही भुगतान के लिए राशि दो बार कट गई", en: "my account was debited twice for the same payment" },
    ] },
    { key: "amount", label: { hi: "राशि (₹)", en: "Amount (Rs)" }, type: "number", required: true },
    { key: "txndate", label: { hi: "ट्रांजैक्शन की तारीख और समय", en: "Transaction date and time" }, required: true, placeholder: { hi: "जैसे: 12/10/2026, शाम 6:40", en: "e.g. 12/10/2026, 6:40 pm" } },
    { key: "utr", label: { hi: "UPI रेफरेंस नंबर (UTR/RRN, 12 अंक)", en: "UPI reference no. (UTR/RRN, 12 digits)" }, required: true, hint: { hi: "UPI ऐप की ट्रांजैक्शन हिस्ट्री या बैंक SMS में मिलता है", en: "In app transaction history or bank SMS" } },
    { key: "to", label: { hi: "जिसे भेजा (UPI ID/नंबर/नाम)", en: "Paid to (UPI ID/number/name)" }, required: true },
    { key: "app", label: { hi: "किस ऐप से भेजा और ऐप की शिकायत संख्या", en: "App used and app complaint no." }, placeholder: { hi: "जैसे: ऐप का नाम, शिकायत नं. ___", en: "e.g. app name, complaint no. ___" } },
    { key: "phone", label: { hi: "बैंक में दर्ज मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: UPI ट्रांजैक्शन की राशि ₹{{amount}} वापस करने हेतु शिकायत (UPI रेफरेंस नं. {{utr}})

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। दिनांक/समय {{txndate}} को मैंने अपने इस खाते से UPI द्वारा ₹{{amount}} का भुगतान {{to}} को किया। UPI रेफरेंस नंबर (UTR/RRN) {{utr}} है।

शिकायत: {{issue}}।

UPI ऐप और उसकी शिकायत संख्या: {{app}}

यदि यह फेल ट्रांजैक्शन है, तो RBI के परिपत्र दिनांक 20 सितंबर 2019 (फेल ट्रांजैक्शन के लिए टर्न अराउंड टाइम और ग्राहक मुआवज़ा) के अनुसार राशि तय समय में अपने आप वापस होनी चाहिए थी। कृपया राशि तुरंत मेरे खाते में वापस करें और नियम के अनुसार देरी का मुआवज़ा भी दें।

यदि राशि गलत खाते में गई है, तो कृपया पाने वाले बैंक से NPCI की UPI विवाद निवारण व्यवस्था के ज़रिए तुरंत संपर्क करके राशि वापस दिलाने की कार्रवाई करें और मुझे शिकायत संख्या तथा प्रगति की जानकारी दें।

कृपया इस शिकायत की पावती और शिकायत संख्या मुझे दें।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: ट्रांजैक्शन का स्क्रीनशॉट, बैंक SMS/स्टेटमेंट की कॉपी जिसमें राशि कटी दिख रही है`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Complaint for refund of UPI transaction of Rs {{amount}} (UPI reference no. {{utr}})

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. On {{txndate}}, I made a UPI payment of Rs {{amount}} from this account to {{to}}. The UPI reference number (UTR/RRN) is {{utr}}.

Complaint: {{issue}}.

UPI app and app complaint number: {{app}}

If this is a failed transaction, the amount should have been reversed automatically within the time limit under the RBI circular dated 20 September 2019 on Turn Around Time and customer compensation for failed transactions. Kindly credit the amount to my account immediately along with compensation for the delay as per the rules.

If the amount has been credited to a wrong account, kindly take up the matter with the beneficiary bank immediately through NPCI's UPI dispute redressal mechanism for recovery of the amount, and keep me informed of the complaint number and progress.

Kindly give me an acknowledgement and complaint number for this complaint.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Screenshot of the transaction, copy of bank SMS/statement showing the debit`,
  },
  attach: [
    "UPI ऐप में ट्रांजैक्शन का स्क्रीनशॉट (UTR/RRN नंबर दिखता हो)",
    "बैंक SMS या स्टेटमेंट की कॉपी, जिसमें राशि कटी दिखे",
    "ऐप में की गई शिकायत की संख्या/स्क्रीनशॉट",
    "धोखाधड़ी हो तो 1930/cybercrime.gov.in की शिकायत संख्या",
  ],
  submit: [
    "<strong>पहले ऐप में शिकायत:</strong> जिस UPI ऐप से भुगतान किया, उसमें ट्रांजैक्शन खोलकर 'Help' / 'Raise dispute' से शिकायत दर्ज करें और शिकायत नंबर लिखें।",
    "फेल ट्रांजैक्शन में 1-2 कार्य दिवस इंतज़ार करें; पैसा अक्सर अपने आप लौट आता है। न लौटे तो यह पत्र बैंक में दें और <strong>रिसीविंग</strong> लें।",
    'गलत खाते में पैसा गया हो तो जल्दी शिकायत करें; NPCI की वेबसाइट <a href="https://www.npci.org.in/" target="_blank" rel="noopener nofollow">npci.org.in</a> पर UPI के \'Dispute Redressal Mechanism\' में भी शिकायत दर्ज होती है।',
    'किसी ने धोखे से पैसे लिए हों (फ्रॉड), तो तुरंत <strong>1930</strong> पर कॉल करें या <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a> पर शिकायत करें।',
    'बैंक 30 दिन में हल न करे या जवाब ठीक न लगे, तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "UTR/RRN नंबर सबसे ज़रूरी है; इसके बिना शिकायत आगे नहीं बढ़ती।",
    "पैसा 'वापस भेजने' के लिए कोई अनजान व्यक्ति आपसे QR कोड स्कैन करवाए या PIN डलवाए, तो मना करें। पैसा लेने के लिए कभी PIN नहीं डालना पड़ता।",
    "इंटरनेट पर मिले 'UPI कस्टमर केयर' नंबर पर भरोसा न करें; ऐप के अंदर की हेल्प या बैंक की आधिकारिक वेबसाइट का नंबर ही इस्तेमाल करें।",
    "पत्र में UPI PIN, OTP या कार्ड नंबर कभी न लिखें।",
  ],
  notice: "<strong>गलत व्यक्ति को भेजा पैसा</strong> अपने आप वापस नहीं आता; बैंक पाने वाले से सहमति मांगता है। जितनी जल्दी शिकायत करेंगे, वापसी की संभावना उतनी ज़्यादा है।",
  official: [
    { href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693", title: "RBI: फेल ट्रांजैक्शन पर TAT और मुआवज़ा (2019)" },
    { href: "https://www.npci.org.in/", title: "NPCI (UPI विवाद निवारण)" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", note: "हेल्पलाइन 1930" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)" },
  ],
  related: ["/service/upi-payments.html", "/service/consumer-grievance-redressal.html", "/support/helpline-directory.html"],
  faq: [
    { q: "UPI पेमेंट फेल हुआ पर पैसा कट गया, कब वापस आएगा?", a: "RBI के 2019 के नियम से पैसा भेजने (P2P) वाले फेल ट्रांजैक्शन में अगले कार्य दिवस (T+1) तक और मर्चेंट पेमेंट में T+5 तक अपने आप वापस आना चाहिए। उसके बाद हर दिन की देरी पर ₹100 मुआवज़ा बनता है।" },
    { q: "गलत UPI ID पर पैसा चला गया, वापस कैसे मिलेगा?", a: "तुरंत ऐप में शिकायत करें, अपने बैंक को लिखित शिकायत दें और NPCI की वेबसाइट पर UPI विवाद दर्ज करें। बैंक पाने वाले बैंक से संपर्क करता है, पर पैसा आम तौर पर पाने वाले की सहमति से लौटता है।" },
    { q: "UTR नंबर कहां मिलेगा?", a: "UPI ऐप की ट्रांजैक्शन हिस्ट्री में, उस ट्रांजैक्शन को खोलने पर 12 अंकों का UPI Ref No./UTR दिखता है। बैंक के SMS में भी होता है।" },
    { q: "बैंक शिकायत का हल न करे तो?", a: "30 दिन में जवाब न मिले या जवाब ठीक न लगे, तो RBI लोकपाल को cms.rbi.org.in पर मुफ्त शिकायत करें। हेल्पलाइन 14448 है।" },
    { q: "UPI फ्रॉड हो जाए तो क्या करें?", a: "तुरंत 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें, और बैंक को लिखित में बताएं। जल्दी शिकायत से पैसा रोके जाने की संभावना बढ़ती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
