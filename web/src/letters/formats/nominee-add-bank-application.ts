import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Banking Laws (Amendment) Act, 2025 (notified 15 Apr 2025); nomination
//   provisions (ss.10-13) in force from 1 Nov 2025 (Ministry of Finance
//   notification; reported by Taxmann, The Tribune): up to four nominees for
//   deposit accounts, simultaneous (shares must total 100%) or successive;
//   lockers and safe custody articles: successive nomination only.
// - Banking Companies (Nomination) Rules, 2025 (G.S.R. 790(E), 27 Oct 2025,
//   in force 1 Nov 2025): supersede the 1985 rules; nomination on the form
//   annexed to the rules or electronically where the bank offers it. Banks'
//   revised forms are still often called DA-1 (e.g. UCO Bank "Nomination Form
//   (DA-1) – Revised, effective 01.11.2025").
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the bank first.
export const nomineeAddBankApplication: Letter = {
  slug: "nominee-add-bank-application",
  category: "bank",
  emoji: "👨‍👩‍👧",
  title: "Bank Nominee Add/Change Application in Hindi 2026: नॉमिनी जोड़ने का आवेदन",
  description: "बैंक खाते में नॉमिनी जोड़ने या बदलने का तैयार आवेदन पत्र (हिंदी/English)। 1 नवंबर 2025 से 4 नॉमिनी तक, हिस्सा कैसे लिखें, नाबालिग नॉमिनी और रसीद।",
  h1: "बैंक खाते में नॉमिनी जोड़ने/बदलने का आवेदन पत्र 2026",
  short: { hi: "बैंक में नॉमिनी जोड़ने का आवेदन", en: "Bank nominee add/change" },
  lead: "बैंक खाते में नॉमिनी (nominee) होने से खाताधारक की मृत्यु के बाद पैसा परिवार को जल्दी मिलता है। <strong>1 नवंबर 2025</strong> से बैंकिंग कानून (संशोधन) अधिनियम 2025 के तहत जमा खाते में <strong>4 नॉमिनी तक</strong> रखे जा सकते हैं: एक साथ (हर एक का हिस्सा प्रतिशत में, कुल 100%) या एक के बाद एक (क्रम से)। नॉमिनी जोड़ने/बदलने के लिए <strong>होम ब्रांच के शाखा प्रबंधक</strong> को आवेदन दें; बैंक अपना नॉमिनेशन फॉर्म भी भरवाता है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["कितने नॉमिनी", "जमा खाते में 4 तक (1 नवंबर 2025 से)"],
    ["तरीका", "एक साथ (हिस्सा %, कुल 100%) या क्रम से"],
    ["लॉकर", "सिर्फ क्रम से (successive) नॉमिनी"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। संयुक्त खाते में सभी खाताधारक मिलकर नॉमिनी तय करते हैं।",
  when: [
    "खाता खोलते समय नॉमिनी नहीं लिखा था",
    "नॉमिनी की मृत्यु हो गई या शादी/परिवार बदलने से नया नॉमिनी चाहिए",
    "एक से ज़्यादा नॉमिनी (4 तक) रखने हैं और हिस्सा तय करना है",
    "नाबालिग नॉमिनी अब बालिग हो गया है और जानकारी बदलनी है",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "action", label: { hi: "क्या करना है", en: "Request" }, type: "select", required: true, options: [
      { hi: "खाते में नया नॉमिनेशन दर्ज करना (अभी कोई नॉमिनी नहीं है)", en: "register a fresh nomination (no nominee at present)" },
      { hi: "पहले वाला नॉमिनेशन रद्द करके नया नॉमिनेशन दर्ज करना", en: "cancel the existing nomination and register a new one" },
      { hi: "मौजूदा नॉमिनेशन में बदलाव/नया नॉमिनी जोड़ना", en: "vary the existing nomination / add a nominee" },
    ] },
    { key: "type", label: { hi: "नॉमिनेशन का प्रकार", en: "Type of nomination" }, type: "select", required: true, options: [
      { hi: "एक साथ (simultaneous) – नीचे लिखे प्रतिशत के अनुसार", en: "simultaneous – in the percentages given below" },
      { hi: "क्रम से (successive) – नीचे लिखे क्रम के अनुसार", en: "successive – in the order given below" },
      { hi: "केवल एक नॉमिनी", en: "single nominee" },
    ] },
    { key: "nominees", label: { hi: "नॉमिनी का विवरण (हर नॉमिनी अलग लाइन में)", en: "Nominee details (one per line)" }, type: "textarea", required: true, placeholder: { hi: "1. नाम, रिश्ता, जन्म तिथि, पता, हिस्सा 50%\n2. नाम, रिश्ता, जन्म तिथि, पता, हिस्सा 50%", en: "1. Name, relation, date of birth, address, share 50%\n2. Name, relation, date of birth, address, share 50%" }, hint: { hi: "एक साथ वाले में कुल हिस्सा 100% हो", en: "Shares must add up to 100% for simultaneous" } },
    { key: "minor", label: { hi: "नाबालिग नॉमिनी हो तो उसकी ओर से पैसा लेने वाला व्यक्ति", en: "If a nominee is a minor: person to receive on their behalf" }, placeholder: { hi: "नाम, रिश्ता, पता; न हो तो खाली छोड़ें", en: "Name, relation, address; else leave blank" } },
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

विषय: खाते में नॉमिनी जोड़ने/बदलने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। बैंकिंग कानून (संशोधन) अधिनियम 2025 तथा बैंकिंग कंपनी (नामांकन) नियम 2025 के अनुसार मेरा अनुरोध है: {{action}}।

नॉमिनेशन का प्रकार: {{type}}

नॉमिनी का विवरण:
{{nominees}}

नाबालिग नॉमिनी की ओर से राशि प्राप्त करने वाला व्यक्ति (यदि लागू हो): {{minor}}

कृपया बैंक के निर्धारित नामांकन फॉर्म के साथ यह नॉमिनेशन दर्ज करें, मुझे इसकी पावती (acknowledgement) दें, और पासबुक/स्टेटमेंट में "नॉमिनेशन दर्ज" अंकित करें।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर – बैंक में दर्ज नमूना हस्ताक्षर जैसे)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: भरा हुआ नामांकन फॉर्म, पासबुक के पहले पेज की कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Application for registration/change of nomination in my account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. In terms of the Banking Laws (Amendment) Act, 2025 and the Banking Companies (Nomination) Rules, 2025, I request you to {{action}}.

Type of nomination: {{type}}

Nominee details:
{{nominees}}

Person to receive the amount on behalf of a minor nominee (if applicable): {{minor}}

Kindly register this nomination along with the bank's prescribed nomination form, give me an acknowledgement, and indicate "Nomination Registered" in my passbook/statement.

Thank you.

Yours faithfully,

(Signature – as per specimen signature with the bank)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Filled nomination form, copy of passbook first page`,
  },
  attach: [
    "बैंक का नामांकन फॉर्म (कई बैंकों में DA-1; रद्द/बदलाव के लिए अलग फॉर्म हो सकता है) भरा हुआ",
    "पासबुक के पहले पेज की कॉपी",
    "नॉमिनी का पहचान/जन्म तिथि का प्रमाण बैंक मांगे तो (आम तौर पर नाम, रिश्ता, उम्र और पता काफी होता है)",
  ],
  submit: [
    "बैंक से नया नामांकन फॉर्म लें या नेट बैंकिंग/ऐप में 'Nomination' विकल्प देखें; कई बैंक ऑनलाइन नॉमिनेशन लेते हैं।",
    "यह पत्र और फॉर्म भरकर, बैंक में दर्ज जैसे हस्ताक्षर करें। अंगूठा लगाते हों तो बैंक के फॉर्म के अनुसार गवाह के हस्ताक्षर करवाएं।",
    "ब्रांच में जमा करके <strong>पावती (acknowledgement)</strong> ज़रूर लें और पासबुक में नॉमिनी दर्ज होने की एंट्री करवाएं।",
    'बैंक नॉमिनेशन दर्ज न करे या पावती न दे, तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "एक साथ (simultaneous) वाले नॉमिनेशन में सभी के हिस्से जोड़कर ठीक 100% होने चाहिए।",
    "नॉमिनी का नाम वैसा ही लिखें जैसा उसके आधार में है; बाद में दावा करते समय नाम मिलान में आसानी होती है।",
    "FD, RD और लॉकर का नॉमिनेशन अलग-अलग होता है; हर खाते/लॉकर के लिए अलग से जांच लें।",
    "नॉमिनी पैसा लेने का हकदार होता है, पर संपत्ति का अंतिम बंटवारा कानून/वसीयत के अनुसार होता है।",
  ],
  notice: "1 नवंबर 2025 से नए नियम लागू हैं; कई बैंकों ने नया नामांकन फॉर्म जारी किया है। ब्रांच से ताज़ा फॉर्म ही लें।",
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
    { href: "https://financialservices.gov.in/", title: "वित्तीय सेवाएं विभाग, वित्त मंत्रालय", note: "बैंकिंग कानून (संशोधन) अधिनियम 2025 की सूचना" },
  ],
  related: ["/service/bank-locker-nomination.html", "/service/pm-jan-dhan-yojana.html", "/service/legal-heir-certificate.html"],
  faq: [
    { q: "बैंक खाते में कितने नॉमिनी रख सकते हैं?", a: "1 नवंबर 2025 से जमा खाते में 4 नॉमिनी तक। एक साथ (हर एक का % हिस्सा) या क्रम से (पहले के न रहने पर अगला) रख सकते हैं। लॉकर में सिर्फ क्रम से।" },
    { q: "नॉमिनी कैसे बदलें?", a: "ब्रांच में आवेदन और बैंक का बदलाव/रद्द करने का फॉर्म दें, या नेट बैंकिंग में नॉमिनेशन विकल्प से बदलें। पावती ज़रूर लें।" },
    { q: "क्या नाबालिग को नॉमिनी बना सकते हैं?", a: "हां। उसकी ओर से पैसा लेने के लिए एक बालिग व्यक्ति का नाम लिखें, जो नॉमिनी के नाबालिग रहते राशि लेगा।" },
    { q: "नॉमिनी न हो तो क्या होगा?", a: "खाताधारक की मृत्यु के बाद वारिसों को उत्तराधिकार प्रमाण/कानूनी कागज़ और बैंक की प्रक्रिया से दावा करना पड़ता है, जिसमें ज़्यादा समय लगता है।" },
    { q: "क्या नॉमिनी जोड़ने का चार्ज है?", a: "आम तौर पर नहीं, पर बैंक की सेवा शुल्क सूची देख लें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
