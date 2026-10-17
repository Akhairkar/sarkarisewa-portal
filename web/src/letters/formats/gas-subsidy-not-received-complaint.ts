import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - PAHAL (DBTL) and current subsidy as recorded in the repo guides
//   lpg-subsidy-pahal / pm-ujjwala-yojana (checked 15 Oct 2026): PMUY consumers
//   get Rs 300 per 14.2 kg refill (pmindia.gov.in Cabinet Aug 2025; number of
//   subsidised refills per year set by the government each year); general
//   domestic consumers usually pay market price with little or no subsidy;
//   LPG toll-free helpline 1800-2333-555 (Business Today, 12.03.2026).
// - Lok Sabha answers (eparlib.sansad.in): consumers can check subsidy
//   transferred on OMC websites / mylpg.in; delays involve distributors, NPCI
//   and banks. DFS Aadhaar seeding directions: banks upload seeded Aadhaar to
//   the NPCI mapper; unmapped accounts do not get DBT.
// - CPGRAMS (pgportal.gov.in) for escalation to the Ministry of Petroleum &
//   Natural Gas.
export const gasSubsidyNotReceivedComplaint: Letter = {
  slug: "gas-subsidy-not-received-complaint",
  category: "complaint",
  emoji: "🔥",
  title: "LPG Gas Subsidy Not Received Complaint in Hindi 2026: गैस सब्सिडी शिकायत",
  description: "LPG गैस सब्सिडी खाते में नहीं आई? गैस एजेंसी/तेल कंपनी को शिकायत पत्र (हिंदी/English)। आधार-बैंक लिंक, NPCI मैपिंग, mylpg.in, टोल-फ्री 1800-2333-555।",
  h1: "LPG गैस सब्सिडी न मिलने की शिकायत 2026: गैस एजेंसी को पत्र",
  short: { hi: "गैस सब्सिडी न मिलने की शिकायत", en: "LPG subsidy complaint" },
  lead: "LPG सब्सिडी <strong>PAHAL (DBTL)</strong> योजना से सीधे बैंक खाते में आती है। अभी <strong>उज्ज्वला (PMUY)</strong> ग्राहकों को <strong>₹300 प्रति 14.2 किलो सिलेंडर</strong> सब्सिडी मिलती है (साल में तय संख्या के रिफिल तक); आम घरेलू ग्राहकों को आम तौर पर सब्सिडी नहीं या नाममात्र मिलती है। सब्सिडी न आने का सबसे आम कारण है <strong>आधार का बैंक खाते से न जुड़ना या NPCI मैपिंग न होना</strong>। पहले <strong>mylpg.in</strong> पर स्थिति देखें, फिर यह शिकायत अपनी <strong>गैस एजेंसी (डिस्ट्रीब्यूटर)</strong> को दें।",
  facts: [
    ["किसे दें", "अपनी गैस एजेंसी; फिर तेल कंपनी का क्षेत्रीय कार्यालय"],
    ["उज्ज्वला सब्सिडी", "₹300 प्रति 14.2 किलो सिलेंडर"],
    ["स्थिति देखें", '<a href="https://www.mylpg.in/" target="_blank" rel="noopener nofollow">mylpg.in</a> / कंपनी का ऐप'],
    ["हेल्पलाइन", "1800-2333-555 (टोल-फ्री)"],
  ],
  to: "अपनी <strong>LPG गैस एजेंसी (डिस्ट्रीब्यूटर)</strong> के प्रबंधक को। हल न हो तो उसी तेल कंपनी (Indane/IOCL, HP Gas/HPCL, Bharatgas/BPCL) के <strong>क्षेत्रीय/एरिया कार्यालय के LPG बिक्री अधिकारी</strong> को।",
  when: [
    "उज्ज्वला कनेक्शन है, पर सिलेंडर लेने के बाद ₹300 सब्सिडी खाते में नहीं आई",
    "सब्सिडी अचानक आना बंद हो गई",
    "सब्सिडी किसी पुराने/दूसरे बैंक खाते में जा रही है",
    "mylpg.in पर सब्सिडी 'भेजी गई' दिख रही है पर खाते में नहीं आई",
  ],
  fields: [
    { key: "agency", label: { hi: "गैस एजेंसी का नाम और पता", en: "Gas agency name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: श्री गणेश इंडेन गैस सर्विस, बस्ती", en: "e.g. Shri Ganesh Indane Gas Service, Basti" } },
    { key: "company", label: { hi: "गैस कंपनी", en: "Gas company" }, type: "select", options: [
      { hi: "इंडेन (IOCL)", en: "Indane (IOCL)" },
      { hi: "एचपी गैस (HPCL)", en: "HP Gas (HPCL)" },
      { hi: "भारतगैस (BPCL)", en: "Bharatgas (BPCL)" },
    ] },
    { key: "name", label: { hi: "कनेक्शनधारी का नाम", en: "Connection holder's name" }, required: true },
    { key: "lpgid", label: { hi: "17 अंकों की LPG ID / कंज़्यूमर नंबर", en: "17-digit LPG ID / consumer number" }, required: true },
    { key: "scheme", label: { hi: "कनेक्शन का प्रकार", en: "Connection type" }, type: "select", options: [
      { hi: "उज्ज्वला (PMUY) कनेक्शन", en: "Ujjwala (PMUY) connection" },
      { hi: "सामान्य घरेलू कनेक्शन", en: "general domestic connection" },
    ] },
    { key: "bank", label: { hi: "बैंक का नाम और खाते के आखिरी 4 अंक", en: "Bank name and last 4 digits of account" }, required: true, placeholder: { hi: "जैसे: SBI, खाता XXXX4521", en: "e.g. SBI, account XXXX4521" }, hint: { hi: "पूरा खाता नंबर, ATM PIN या OTP कभी न लिखें", en: "Never write the full account number, ATM PIN or OTP" } },
    { key: "refills", label: { hi: "किन रिफिल पर सब्सिडी नहीं आई (तारीख/कैश मेमो)", en: "Refills without subsidy (dates/cash memo)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 12/07/2026 (मेमो 4567), 20/08/2026 (मेमो 5123)", en: "e.g. 12/07/2026 (memo 4567), 20/08/2026 (memo 5123)" } },
    { key: "found", label: { hi: "mylpg.in/बैंक में क्या दिखा (चाहें तो)", en: "What mylpg.in/bank shows (optional)" }, type: "textarea", placeholder: { hi: "जैसे: पोर्टल पर 'subsidy not transferred' दिख रहा है / बैंक ने कहा आधार NPCI से जुड़ा है", en: "e.g. portal shows 'subsidy not transferred' / bank says Aadhaar is mapped with NPCI" } },
    { key: "address", label: { hi: "आपका पता और मोबाइल", en: "Your address and mobile" }, type: "textarea", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रबंधक,
{{agency}}
({{company}})

विषय: LPG सब्सिडी बैंक खाते में प्राप्त न होने के संबंध में शिकायत – LPG ID {{lpgid}}

महोदय/महोदया,

मैं, {{name}}, आपकी एजेंसी का पंजीकृत ग्राहक हूं। मेरे पास {{scheme}} है। मेरी LPG ID {{lpgid}} है और सब्सिडी के लिए जुड़ा बैंक खाता: {{bank}}।

निम्नलिखित रिफिल लेने के बाद मुझे PAHAL (DBTL) के तहत मिलने वाली सब्सिडी मेरे बैंक खाते में प्राप्त नहीं हुई है:
{{refills}}

{{found}}

अतः आपसे निवेदन है कि:
1. मेरे कनेक्शन में आधार और बैंक खाते की लिंकिंग (DBTL स्थिति) की जांच करें;
2. सब्सिडी रुकने का कारण लिखित में बताएं;
3. बकाया सब्सिडी मेरे खाते में जमा कराने की आवश्यक कार्यवाही करें।

आवश्यक दस्तावेज़ों की प्रतियां संलग्न हैं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता/मोबाइल: {{address}}

दिनांक: {{date}}

संलग्न:
1. गैस पासबुक/कनेक्शन कार्ड की कॉपी
2. कैश मेमो की कॉपी
3. आधार कार्ड और बैंक पासबुक (पहला पन्ना) की कॉपी`,
    en: `To,
The Manager,
{{agency}}
({{company}})

Subject: Complaint regarding LPG subsidy not received in bank account – LPG ID {{lpgid}}

Sir/Madam,

I, {{name}}, am a registered customer of your agency. I have a {{scheme}}. My LPG ID is {{lpgid}} and the bank account linked for subsidy is: {{bank}}.

I have not received the subsidy under PAHAL (DBTL) in my bank account for the following refills:
{{refills}}

{{found}}

I therefore request you to:
1. check the Aadhaar and bank account linking (DBTL status) of my connection;
2. inform me in writing of the reason the subsidy has stopped;
3. take necessary action to credit the pending subsidy to my account.

Copies of the required documents are enclosed.

Yours faithfully,

(Signature)
Name: {{name}}
Address/Mobile: {{address}}

Date: {{date}}

Enclosures:
1. Copy of gas passbook/connection card
2. Copies of cash memos
3. Copies of Aadhaar card and bank passbook (first page)`,
  },
  attach: [
    "गैस कनेक्शन कार्ड/पासबुक और सिलेंडर के कैश मेमो की कॉपी",
    "आधार कार्ड और बैंक पासबुक के पहले पन्ने की कॉपी",
    "mylpg.in या कंपनी ऐप पर सब्सिडी स्थिति का स्क्रीनशॉट (अगर है)",
  ],
  submit: [
    "पहले <a href=\"https://www.mylpg.in/\" target=\"_blank\" rel=\"noopener nofollow\">mylpg.in</a> या अपनी गैस कंपनी के ऐप/वेबसाइट पर LPG ID से सब्सिडी की स्थिति देखें।",
    "बैंक जाकर पूछें कि आधार उसी खाते से जुड़ा है और <strong>NPCI मैपर</strong> पर DBT के लिए सक्रिय है; न हो तो बैंक में आधार सीडिंग का फॉर्म भरें।",
    "यह शिकायत गैस एजेंसी में जमा करें और कॉपी पर रिसीविंग लें; कंपनी के टोल-फ्री नंबर <strong>1800-2333-555</strong> पर भी शिकायत दर्ज कराएं और नंबर संभालें।",
    "हल न हो तो तेल कंपनी के क्षेत्रीय कार्यालय को लिखें, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर पेट्रोलियम मंत्रालय के नाम शिकायत करें।",
  ],
  tips: [
    "सामान्य घरेलू कनेक्शन पर अभी सब्सिडी आम तौर पर बहुत कम या शून्य है; पहले पता कर लें कि आपको कितनी सब्सिडी बनती है।",
    "उज्ज्वला में साल में सिर्फ तय संख्या के रिफिल पर सब्सिडी मिलती है; उससे ज़्यादा सिलेंडर पर नहीं।",
    "ई-KYC (आधार बायोमेट्रिक) बाकी हो तो एजेंसी पर पूरा करवाएं; कई मामलों में इसी से सब्सिडी रुकती है।",
    "किसी कॉल/लिंक पर बैंक OTP, PIN या पूरा खाता नंबर न बताएं; एजेंसी कभी OTP नहीं मांगती।",
  ],
  official: [
    { href: "https://www.mylpg.in/", title: "MyLPG (पेट्रोलियम मंत्रालय/तेल कंपनियां)", note: "सब्सिडी स्थिति, शिकायत" },
    { href: "https://www.pmuy.gov.in/", title: "प्रधानमंत्री उज्ज्वला योजना" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS", note: "मंत्रालय स्तर पर शिकायत" },
  ],
  related: ["/service/lpg-subsidy-pahal.html", "/service/pm-ujjwala-yojana.html", "/service/lpg-cylinder-booking.html"],
  faq: [
    { q: "गैस सब्सिडी कितनी मिलती है?", a: "उज्ज्वला (PMUY) ग्राहकों को ₹300 प्रति 14.2 किलो सिलेंडर, साल में सरकार द्वारा तय संख्या के रिफिल तक। आम घरेलू ग्राहकों को आम तौर पर सब्सिडी नहीं या नाममात्र मिलती है।" },
    { q: "गैस सब्सिडी क्यों नहीं आ रही?", a: "सबसे आम कारण: आधार बैंक खाते से न जुड़ा होना, NPCI मैपिंग में दूसरा खाता होना, ई-KYC बाकी होना, या साल के सब्सिडी वाले रिफिल पूरे हो जाना।" },
    { q: "सब्सिडी किस खाते में जा रही है, कैसे पता करें?", a: "mylpg.in या अपनी गैस कंपनी की वेबसाइट/ऐप पर LPG ID से स्थिति देखें; बैंक से भी पूछ सकते हैं कि आधार किस खाते से NPCI पर जुड़ा है।" },
    { q: "LPG सब्सिडी की शिकायत का टोल-फ्री नंबर क्या है?", a: "LPG हेल्पलाइन 1800-2333-555 (टोल-फ्री) है। गैस रिसाव जैसी आपात स्थिति के लिए 1906 है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
