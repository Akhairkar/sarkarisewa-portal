import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI Master Direction on KYC 2016 (as amended): KYC verification once done
//   by one branch/office of a regulated entity is valid for transfer of the
//   account to any other branch/office of the same entity, provided full KYC
//   has been done and is not due for periodic updation. Earlier RBI circulars
//   (2012-13) also allowed transfer on a self-declaration of current address.
// - RBI press release on periodic KYC updation (5 Jan 2023, prid=54998): a
//   change of address can be declared through non-face-to-face channels and
//   the bank verifies it within two months.
// - Online branch transfer through net banking/app is offered by several
//   banks; described generally. After transfer the IFSC changes; whether the
//   account number stays the same depends on the bank.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the bank first.
export const bankBranchTransferApplication: Letter = {
  slug: "bank-branch-transfer-application",
  category: "bank",
  emoji: "🔁",
  title: "Bank Branch Transfer Application in Hindi 2026: खाता दूसरी ब्रांच में ट्रांसफर",
  description: "बैंक खाता उसी बैंक की दूसरी ब्रांच में ट्रांसफर करने का तैयार आवेदन पत्र (हिंदी/English)। नया KYC ज़रूरी नहीं (RBI), IFSC बदलेगा, ऑनलाइन तरीका और शिकायत।",
  h1: "बैंक खाता दूसरी ब्रांच में ट्रांसफर करने का आवेदन पत्र 2026",
  short: { hi: "बैंक ब्रांच ट्रांसफर आवेदन", en: "Bank branch transfer application" },
  lead: "शहर या मोहल्ला बदलने पर खाता बंद करने की ज़रूरत नहीं; उसी बैंक की नज़दीकी ब्रांच में ट्रांसफर करवा सकते हैं। आवेदन <strong>मौजूदा ब्रांच (या जहां ले जाना है, उस ब्रांच) के शाखा प्रबंधक</strong> को दें। RBI के KYC नियम के अनुसार एक ब्रांच में पूरा KYC हो चुका हो और Re-KYC बाकी न हो, तो उसी बैंक की दूसरी ब्रांच में ट्रांसफर के लिए <strong>नया KYC ज़रूरी नहीं</strong>। कई बैंक यह काम नेट बैंकिंग/ऐप से भी करते हैं।",
  facts: [
    ["किसे दें", "मौजूदा या नई ब्रांच के शाखा प्रबंधक को (बैंक के नियम अनुसार)"],
    ["KYC", "पूरा KYC हो और Re-KYC बाकी न हो तो नया KYC नहीं"],
    ["क्या बदलेगा", "ब्रांच और IFSC; खाता नंबर बैंक के हिसाब से"],
    ["शिकायत", "30 दिन में हल न हो तो RBI लोकपाल: cms.rbi.org.in"],
  ],
  to: "आम तौर पर <strong>जिस ब्रांच में अभी खाता है</strong> उसके शाखा प्रबंधक को। कई बैंक नई ब्रांच में भी यह आवेदन लेते हैं; पहले फोन करके पूछ लें।",
  when: [
    "नौकरी, पढ़ाई या शादी के बाद दूसरे शहर में रहने लगे",
    "पुरानी ब्रांच दूर है और पास में उसी बैंक की ब्रांच है",
    "पेंशन/सब्सिडी वाला खाता घर के पास की ब्रांच में चाहिए",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "मौजूदा ब्रांच का नाम और पता", en: "Present branch name and address" }, type: "textarea", required: true },
    { key: "newbranch", label: { hi: "जिस ब्रांच में ट्रांसफर चाहिए (नाम, शहर, हो तो कोड/IFSC)", en: "Branch to transfer to (name, city, code/IFSC if known)" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "reason", label: { hi: "कारण", en: "Reason" }, type: "select", required: true, options: [
      { hi: "मेरा निवास नई जगह स्थानांतरित हो गया है", en: "I have shifted my residence" },
      { hi: "नौकरी/तबादले के कारण मैं दूसरे शहर में हूं", en: "I have moved to another city due to job/transfer" },
      { hi: "नई ब्रांच मेरे घर के पास है", en: "the new branch is closer to my home" },
    ] },
    { key: "address", label: { hi: "वर्तमान पता (नया पता हो तो वही)", en: "Present address (new address if changed)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "बैंक में दर्ज मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: बचत खाता दूसरी शाखा में स्थानांतरित करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। कारण: {{reason}}। इसलिए मैं अपना खाता इसी बैंक की निम्न शाखा में स्थानांतरित करवाना चाहता/चाहती हूं:

{{newbranch}}

मेरा वर्तमान पता इस प्रकार है:
{{address}}

मैं घोषणा करता/करती हूं कि ऊपर दिया गया पता मेरा वर्तमान पता है और मेरी KYC की बाकी जानकारी में कोई बदलाव नहीं है। कृपया मेरा खाता, उससे जुड़ी FD/RD, नॉमिनेशन और स्टैंडिंग इंस्ट्रक्शन सहित, नई शाखा में स्थानांतरित करें और स्थानांतरण के बाद नया IFSC तथा खाता संख्या (यदि बदले) मेरे मोबाइल पर सूचित करें।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर – बैंक में दर्ज नमूना हस्ताक्षर जैसे)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पासबुक के पहले पेज की कॉपी, पते के प्रमाण की स्व-प्रमाणित कॉपी (यदि पता बदला है)`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request for transfer of savings account to another branch

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. Reason: {{reason}}. I therefore wish to transfer my account to the following branch of the same bank:

{{newbranch}}

My present address is:
{{address}}

I declare that the above is my present address and that there is no change in my other KYC details. Kindly transfer my account, along with linked FD/RD, nomination and standing instructions, to the new branch and inform me of the new IFSC and account number (if changed) on my mobile.

Thank you.

Yours faithfully,

(Signature – as per specimen signature with the bank)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copy of passbook first page, self-attested address proof (if address changed)`,
  },
  attach: [
    "पासबुक के पहले पेज की कॉपी",
    "पता बदला हो तो नए पते वाला आधार/वोटर ID/ड्राइविंग लाइसेंस की स्व-प्रमाणित कॉपी",
    "Re-KYC बाकी हो तो बैंक के मांगे KYC कागज़",
  ],
  submit: [
    "पहले नेट बैंकिंग/मोबाइल ऐप में 'Transfer of Savings Account' जैसा विकल्प देखें; कई बैंकों में यह OTP से ऑनलाइन हो जाता है।",
    "ब्रांच में देना हो तो पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करें और जमा करके <strong>रिसीविंग</strong> लें।",
    "ट्रांसफर के बाद नया IFSC लिख लें और उसे पेंशन/सब्सिडी/वेतन देने वाले दफ्तर, UPI और ऑटो-डेबिट वालों को बताएं (जहां ज़रूरी हो)।",
    "नई ब्रांच में पासबुक अपडेट करवा लें।",
    'देरी हो तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "ब्रांच ट्रांसफर सिर्फ उसी बैंक के अंदर होता है; दूसरे बैंक में जाना हो तो नया खाता खोलकर पुराना बंद करना पड़ता है।",
    "नई ब्रांच का नाम और शहर साफ लिखें; एक शहर में एक ही बैंक की कई ब्रांच होती हैं।",
    "लॉकर अपने आप ट्रांसफर नहीं होता; उसके लिए अलग से बात करें।",
    "पत्र में कार्ड नंबर, PIN या OTP न लिखें।",
  ],
  official: [
    { href: "https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54998", title: "RBI: Periodic Updation of KYC (5 जनवरी 2023)" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "क्या ब्रांच ट्रांसफर में नया KYC लगता है?", a: "RBI के KYC नियम के अनुसार एक ब्रांच में पूरा KYC हो चुका है और Re-KYC बाकी नहीं है, तो उसी बैंक की दूसरी ब्रांच में ट्रांसफर के लिए नया KYC ज़रूरी नहीं। पता बदला हो तो नया पता बताना होता है।" },
    { q: "क्या ब्रांच बदलने से खाता नंबर बदलता है?", a: "IFSC ज़रूर बदलता है। खाता नंबर कई बैंकों में वही रहता है, कुछ में बदल सकता है। ट्रांसफर के बाद बैंक से पुष्टि कर लें।" },
    { q: "क्या खाता ऑनलाइन ट्रांसफर हो सकता है?", a: "हां, कई बैंक नेट बैंकिंग या मोबाइल ऐप से OTP के ज़रिए ब्रांच ट्रांसफर करते हैं। सुविधा न हो तो ब्रांच में आवेदन दें।" },
    { q: "ब्रांच ट्रांसफर में कितना समय लगता है?", a: "ऑनलाइन अक्सर कुछ ही दिनों में। ब्रांच से आवेदन पर समय बैंक पर निर्भर है; देरी हो तो रिसीविंग के साथ शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
