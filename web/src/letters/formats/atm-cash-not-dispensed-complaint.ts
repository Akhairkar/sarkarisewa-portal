import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular DPSS.CO.PD No.629/02.01.014/2019-20 dated 20 Sep 2019
//   "Harmonisation of Turn Around Time (TAT) and customer compensation for
//   failed transactions using authorised Payment Systems" (rbi.org.in;
//   reported by Business Standard and Moneylife), effective 15 Oct 2019: ATM
//   transaction where the account is debited but cash is not dispensed -
//   pro-active reversal by T+5 days (T = transaction day); Rs 100 per day of
//   delay beyond that, credited to the customer's account suo motu, without
//   waiting for a complaint; applies to domestic transactions; customers not
//   getting redress may complain to the RBI Ombudsman. Circular page:
//   rbi.org.in commonman Notification.aspx?Id=3074 (RBI/2019-20/67).
// - Reserve Bank Integrated Ombudsman Scheme 2026 (in force 1 Jul 2026; same
//   facts as the repo bank-kyc-update-application letter): complain to the
//   bank first; approach the Ombudsman at cms.rbi.org.in if there is no reply
//   in 30 days or the reply is unsatisfactory; free; helpline 14448.
export const atmCashNotDispensedComplaint: Letter = {
  slug: "atm-cash-not-dispensed-complaint",
  category: "bank",
  emoji: "🏧",
  title: "ATM Cash Not Dispensed Complaint in Hindi 2026: ATM से पैसा नहीं निकला शिकायत",
  description: "ATM से पैसा नहीं निकला पर खाते से कट गया? बैंक को शिकायत पत्र (हिंदी/English)। RBI नियम: 5 दिन में पैसा वापस, देरी पर ₹100 रोज़ मुआवज़ा, फिर RBI लोकपाल।",
  h1: "ATM से पैसा नहीं निकला पर खाते से कटा: बैंक को शिकायत पत्र 2026",
  short: { hi: "ATM से पैसा न निकलने की शिकायत", en: "ATM cash not dispensed complaint" },
  lead: "ATM से नकद नहीं निकला पर खाते से पैसा कट गया, तो RBI के <strong>20 सितंबर 2019</strong> के सर्कुलर के अनुसार बैंक को लेन-देन वाले दिन से <strong>5 दिन (T+5)</strong> के अंदर पैसा अपने-आप वापस करना होता है। इससे देर हो तो बैंक को <strong>हर दिन ₹100 मुआवज़ा</strong> खुद ही खाते में देना होता है, शिकायत का इंतज़ार किए बिना। फिर भी पैसा न आए तो यह शिकायत अपनी <strong>होम ब्रांच</strong> (जहां खाता है) को दें; 30 दिन में हल न हो तो <strong>RBI लोकपाल</strong>।",
  facts: [
    ["पैसा वापसी", "लेन-देन के दिन से 5 दिन में (T+5)"],
    ["देरी पर मुआवज़ा", "₹100 प्रति दिन, बैंक खुद देगा"],
    ["किसे दें", "अपनी होम ब्रांच (कार्ड जारी करने वाला बैंक)"],
    ["फिर भी हल नहीं", "30 दिन बाद RBI लोकपाल: cms.rbi.org.in / 14448"],
  ],
  to: "जिस बैंक का आपका ATM/डेबिट कार्ड है, उसकी <strong>होम ब्रांच के शाखा प्रबंधक</strong> को, चाहे पैसा किसी दूसरे बैंक के ATM से निकाला हो। बैंक के कस्टमर केयर/नेट बैंकिंग पर भी शिकायत दर्ज करें।",
  when: [
    "ATM से नकद नहीं निकला पर खाते से रकम कट गई",
    "ATM से कम पैसे निकले, पर पूरी रकम कटी",
    "5 दिन बीत गए और पैसा या ₹100 रोज़ का मुआवज़ा नहीं आया",
    "बैंक ने शिकायत बंद कर दी पर पैसा नहीं मिला",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक और होम ब्रांच का नाम/पता", en: "Bank and home branch name/address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder's name" }, required: true },
    { key: "account", label: { hi: "खाते के आखिरी 4 अंक", en: "Last 4 digits of account" }, required: true, placeholder: { hi: "जैसे: XXXX3456", en: "e.g. XXXX3456" }, hint: { hi: "पूरा खाता/कार्ड नंबर, PIN, CVV या OTP कभी न लिखें", en: "Never write the full account/card number, PIN, CVV or OTP" } },
    { key: "card", label: { hi: "कार्ड के आखिरी 4 अंक", en: "Last 4 digits of card" }, placeholder: { hi: "जैसे: XXXX9012", en: "e.g. XXXX9012" } },
    { key: "txndate", label: { hi: "लेन-देन की तारीख और समय", en: "Transaction date and time" }, required: true, placeholder: { hi: "जैसे: 10/10/2026, शाम 6:40 बजे", en: "e.g. 10/10/2026, 6:40 pm" } },
    { key: "atm", label: { hi: "ATM का बैंक और जगह (ATM ID पता हो तो)", en: "ATM bank and location (ATM ID if known)" }, required: true, placeholder: { hi: "जैसे: PNB ATM, स्टेशन रोड, सीतापुर (ATM ID ...)", en: "e.g. PNB ATM, Station Road, Sitapur (ATM ID ...)" } },
    { key: "amount", label: { hi: "कटी हुई रकम", en: "Amount debited" }, required: true, placeholder: { hi: "जैसे: ₹5,000", en: "e.g. Rs 5,000" } },
    { key: "what", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", options: [
      { hi: "ATM से कोई पैसा नहीं निकला", en: "no cash was dispensed by the ATM" },
      { hi: "ATM से कम पैसे निकले", en: "the ATM dispensed less cash than debited" },
    ] },
    { key: "ref", label: { hi: "पिछली शिकायत संख्या (अगर है)", en: "Earlier complaint no. (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर (खाते में दर्ज)", en: "Mobile number (registered)" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}}

विषय: ATM से नकद प्राप्त न होने पर भी खाते से राशि कटने की शिकायत एवं राशि वापसी और मुआवज़े हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा का खाताधारक हूं (खाता: {{account}}, डेबिट कार्ड: {{card}})।

दिनांक/समय {{txndate}} को मैंने {{atm}} से {{amount}} निकालने का प्रयास किया। {{what}}, परंतु मेरे खाते से {{amount}} काट लिए गए। इस संबंध में पिछली शिकायत संख्या: {{ref}}।

भारतीय रिज़र्व बैंक के दिनांक 20 सितंबर 2019 के परिपत्र (विफल लेन-देन के लिए TAT और मुआवज़ा) के अनुसार ऐसे मामले में राशि लेन-देन के दिन से 5 दिन (T+5) के भीतर स्वतः वापस होनी चाहिए, और देरी होने पर प्रतिदिन ₹100 का मुआवज़ा ग्राहक के खाते में स्वतः जमा किया जाना चाहिए। मुझे अब तक राशि वापस नहीं मिली है।

अतः आपसे निवेदन है कि:
1. ATM/स्विच रिकॉर्ड की जांच कर {{amount}} मेरे खाते में तुरंत वापस जमा करें;
2. RBI नियम के अनुसार देरी का मुआवज़ा (₹100 प्रतिदिन) भी जमा करें;
3. शिकायत की पावती और संदर्भ संख्या मुझे दें।

यदि 30 दिन में समाधान नहीं होता है, तो मैं रिज़र्व बैंक एकीकृत लोकपाल योजना के तहत शिकायत करने के लिए बाध्य होऊंगा/होऊंगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. ATM पर्ची (यदि निकली हो) / खाते से कटौती का SMS
2. पासबुक/खाता विवरण की कॉपी जिसमें कटौती दिखे`,
    en: `To,
The Branch Manager,
{{bank}}

Subject: Complaint about amount debited without cash being dispensed at ATM – request for reversal and compensation

Sir/Madam,

I, {{name}}, am an account holder of your branch (account: {{account}}, debit card: {{card}}).

On {{txndate}} I attempted to withdraw {{amount}} at {{atm}}. {{what}}, but {{amount}} was debited from my account. Earlier complaint no.: {{ref}}.

As per the Reserve Bank of India circular dated 20 September 2019 on TAT and compensation for failed transactions, in such cases the amount must be reversed automatically within 5 days of the transaction (T+5), and for any delay compensation of Rs 100 per day must be credited to the customer's account suo motu. I have not received the amount so far.

I therefore request you to:
1. verify the ATM/switch records and immediately re-credit {{amount}} to my account;
2. credit compensation for the delay at Rs 100 per day as per RBI rules;
3. give me an acknowledgement and reference number for this complaint.

If the matter is not resolved within 30 days, I will be constrained to approach the RBI Ombudsman under the Reserve Bank Integrated Ombudsman Scheme.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. ATM slip (if printed) / debit SMS
2. Copy of passbook/statement showing the debit`,
  },
  attach: [
    "ATM की पर्ची (अगर निकली हो) या खाते से पैसे कटने का SMS",
    "पासबुक/स्टेटमेंट की कॉपी, जिसमें कटौती दिखे",
    "बैंक कस्टमर केयर पर दर्ज शिकायत की संख्या",
  ],
  submit: [
    "उसी दिन अपने बैंक के कस्टमर केयर, नेट/मोबाइल बैंकिंग या ब्रांच में शिकायत दर्ज करें और शिकायत संख्या संभालें।",
    "5 दिन (T+5) इंतज़ार करें; ज़्यादातर मामलों में पैसा अपने-आप वापस आ जाता है। न आए तो यह पत्र होम ब्रांच में दें और कॉपी पर रिसीविंग लें।",
    "बैंक 30 दिन में जवाब न दे या जवाब ठीक न लगे, तो <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">cms.rbi.org.in</a> पर RBI लोकपाल को मुफ्त शिकायत करें (हेल्पलाइन 14448)।",
  ],
  tips: [
    "शिकायत अपने बैंक (कार्ड जारी करने वाले) में करें, ATM वाले दूसरे बैंक में नहीं।",
    "किसी कॉल, SMS या सोशल मीडिया पर \"रिफंड\" के नाम पर PIN, OTP, CVV या कार्ड नंबर न बताएं; बैंक कभी नहीं मांगता।",
    "लेन-देन की सही तारीख, समय और ATM की जगह लिखें; बैंक इसी से ATM का रिकॉर्ड (CCTV/कैश जांच) निकालता है।",
    "₹100 रोज़ का मुआवज़ा मांगना आपका हक है; पैसा देर से लौटे तो मुआवज़ा जुड़ा या नहीं, पासबुक में देखें।",
  ],
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "लोकपाल शिकायत; हेल्पलाइन 14448" },
    { href: "https://rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=3074", title: "RBI सर्कुलर: विफल लेन-देन के लिए TAT और मुआवज़ा (20.09.2019)" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/support/helpline-directory.html"],
  faq: [
    { q: "ATM से पैसा नहीं निकला पर कट गया, कितने दिन में वापस आएगा?", a: "RBI नियम के अनुसार लेन-देन वाले दिन से 5 दिन (T+5) के अंदर पैसा अपने-आप वापस आना चाहिए।" },
    { q: "5 दिन में पैसा न आए तो क्या मुआवज़ा मिलता है?", a: "देरी के हर दिन के लिए ₹100, जो बैंक को बिना शिकायत के भी खुद खाते में देना होता है।" },
    { q: "शिकायत किस बैंक में करें, ATM वाले या अपने?", a: "अपने बैंक में, जिसका कार्ड है, चाहे ATM किसी भी बैंक का हो।" },
    { q: "बैंक पैसा न लौटाए तो कहां शिकायत करें?", a: "बैंक में शिकायत के 30 दिन बाद तक हल न हो या जवाब ठीक न हो, तो cms.rbi.org.in पर RBI लोकपाल को मुफ्त शिकायत करें; हेल्पलाइन 14448।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
