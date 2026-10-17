import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI press release 2022-2023/1500 "Periodic Updation of KYC details of
//   customers" (5 Jan 2023, rbi.org.in prid=54998): if KYC information is
//   unchanged, a self-declaration is enough; banks must offer it through
//   non-face-to-face channels (registered email, registered mobile, ATM,
//   digital channels such as online/mobile banking, letter) without a branch
//   visit; if only the address has changed, the new address can be declared
//   the same way and the bank verifies it within two months; fresh KYC only if
//   documents on record are no longer valid OVDs or have expired.
// - RBI Master Direction on KYC 2016 (as amended): periodic updation at least
//   once in 2 / 8 / 10 years for high / medium / low risk customers.
// - KYC (Amendment) Directions 2025 (12 Jun 2025): business correspondents
//   (BC) may collect the self-declaration; banks must send advance intimations
//   and reminders before freezing operations.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (in force 1 Jul 2026):
//   complain to the bank first; approach the Ombudsman (cms.rbi.org.in) if no
//   reply in 30 days or reply unsatisfactory, within 90 days (per bank-issued
//   salient features of the scheme). Free; helpline 14448.
export const bankKycUpdateApplication: Letter = {
  slug: "bank-kyc-update-application",
  category: "bank",
  emoji: "🪪",
  title: "Bank KYC Update Application in Hindi 2026: बैंक KYC अपडेट आवेदन पत्र",
  description: "बैंक में Re-KYC/KYC अपडेट का तैयार आवेदन पत्र (हिंदी/English)। कुछ नहीं बदला तो सिर्फ स्व-घोषणा काफी, पता बदला तो नया पता दें। भरें, प्रिंट करें, जमा करें।",
  h1: "बैंक KYC अपडेट (Re-KYC) आवेदन पत्र 2026: भरें, प्रिंट करें और ब्रांच में दें",
  short: { hi: "बैंक KYC अपडेट आवेदन", en: "Bank KYC update application" },
  lead: "बैंक हर ग्राहक का KYC समय-समय पर दोबारा (Re-KYC) अपडेट करता है; समय पूरा होने पर खाते में लेन-देन रुक सकता है। RBI के अनुसार अगर आपकी KYC जानकारी में <strong>कोई बदलाव नहीं</strong> है, तो सिर्फ <strong>स्व-घोषणा (self-declaration)</strong> काफी है, और अगर <strong>सिर्फ पता बदला</strong> है तो नया पता बताना काफी है; बैंक 2 महीने में उसे जांचता है। यह आवेदन अपनी <strong>होम ब्रांच के शाखा प्रबंधक</strong> को दें। नीचे जानकारी भरें, पत्र तैयार हो जाएगा।",
  facts: [
    ["किसे दें", "अपनी होम ब्रांच के शाखा प्रबंधक को"],
    ["कुछ नहीं बदला", "सिर्फ स्व-घोषणा; ईमेल, मोबाइल, ATM, नेट/मोबाइल बैंकिंग या पत्र से"],
    ["फीस", "RBI ने Re-KYC के लिए कोई फीस तय नहीं की; बैंक से पूछें"],
    ["शिकायत", "30 दिन में हल न हो तो RBI लोकपाल: cms.rbi.org.in / 14448"],
  ],
  to: "जिस ब्रांच में खाता है (होम ब्रांच), उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। कई बैंक यही स्व-घोषणा ईमेल, नेट बैंकिंग या बैंक मित्र (BC) के ज़रिए भी लेते हैं।",
  when: [
    "बैंक से SMS/पत्र आया हो कि आपका KYC/Re-KYC बाकी है",
    "KYC बाकी होने से खाते में लेन-देन रुक गया हो (account freeze / partial freeze)",
    "आपका पता बदल गया हो और खाते में नया पता दर्ज करवाना हो",
    "पुराने कागज़ (जैसे पुराना पहचान पत्र) अब मान्य न हों और नया आधार/वोटर ID/पैन देना हो",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true, placeholder: { hi: "जैसे: भारतीय स्टेट बैंक", en: "e.g. State Bank of India" } },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मुख्य शाखा, स्टेशन रोड, गया, बिहार", en: "e.g. Main Branch, Station Road, Gaya, Bihar" } },
    { key: "name", label: { hi: "खाताधारक का नाम (जैसा पासबुक में है)", en: "Account holder name (as in passbook)" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, placeholder: { hi: "जैसे: 4321", en: "e.g. 4321" }, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद खाली जगह में हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "kyctype", label: { hi: "आपकी स्थिति", en: "Your case" }, type: "select", required: true, options: [
      { hi: "मेरी KYC जानकारी (नाम, पता, पहचान) में कोई बदलाव नहीं है", en: "There is no change in my KYC information (name, address, identity)" },
      { hi: "सिर्फ मेरा पता बदला है, बाकी जानकारी वही है", en: "Only my address has changed; other details are the same" },
      { hi: "मेरे पुराने KYC कागज़ अब मान्य नहीं हैं, नए कागज़ जमा कर रहा/रही हूं", en: "My earlier KYC documents are no longer valid; I am submitting fresh documents" },
    ] },
    { key: "newaddress", label: { hi: "नया पता (पता बदला हो तभी)", en: "New address (only if changed)" }, type: "textarea", placeholder: { hi: "मकान नं., गली, मोहल्ला, शहर, पिन कोड", en: "House no., street, locality, city, PIN" } },
    { key: "docs", label: { hi: "साथ लगाए कागज़ (स्व-प्रमाणित कॉपी)", en: "Documents enclosed (self-attested)" }, type: "textarea", placeholder: { hi: "जैसे: आधार कार्ड, पैन कार्ड, नई फोटो", en: "e.g. Aadhaar card, PAN card, recent photo" } },
    { key: "phone", label: { hi: "बैंक में दर्ज मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका वर्तमान पता", en: "Your present address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: खाते में KYC अपडेट (Re-KYC) हेतु आवेदन एवं स्व-घोषणा

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। मुझे सूचना मिली है कि मेरे खाते का KYC अपडेट होना बाकी है।

मैं घोषणा करता/करती हूं कि: {{kyctype}}।

नया पता (यदि बदला है): {{newaddress}}

कृपया उपरोक्त घोषणा और संलग्न कागज़ों के आधार पर मेरे खाते का KYC अपडेट कर दें, और यदि KYC बाकी होने के कारण खाते में लेन-देन पर कोई रोक लगी है तो उसे हटा दें। KYC अपडेट होने की सूचना मेरे पंजीकृत मोबाइल नंबर पर भेजने की कृपा करें।

मैं प्रमाणित करता/करती हूं कि ऊपर दी गई जानकारी सही है।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: {{docs}}`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Application and self-declaration for KYC updation (Re-KYC) of my account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. I have been informed that the KYC of my account is due for updation.

I hereby declare that: {{kyctype}}.

New address (if changed): {{newaddress}}

Kindly update the KYC of my account on the basis of this declaration and the enclosed documents, and remove any restriction placed on my account because of pending KYC. Please send a confirmation of the KYC updation to my registered mobile number.

I certify that the information given above is true.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: {{docs}}`,
  },
  attach: [
    "पासबुक की पहली पेज की कॉपी (खाता पहचानने के लिए)",
    "पता बदला हो तो नए पते वाला मान्य दस्तावेज़ (OVD), जैसे आधार, वोटर ID, पासपोर्ट या ड्राइविंग लाइसेंस की स्व-प्रमाणित कॉपी",
    "पुराने कागज़ मान्य न हों तो नया पहचान/पता प्रमाण और बैंक मांगे तो पैन कार्ड व हाल की फोटो",
  ],
  submit: [
    "पहले देखें कि आपका बैंक ऑनलाइन स्व-घोषणा लेता है या नहीं: नेट बैंकिंग, मोबाइल ऐप, पंजीकृत ईमेल या ATM। कुछ नहीं बदला हो तो अक्सर ब्रांच जाने की ज़रूरत नहीं पड़ती।",
    "ब्रांच में देना हो तो पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करें और कागज़ों की स्व-प्रमाणित कॉपी लगाएं। मूल कागज़ दिखाने के लिए साथ ले जाएं।",
    "पत्र की एक कॉपी पर बैंक की मुहर और तारीख के साथ <strong>रिसीविंग</strong> ज़रूर लें।",
    "कुछ दिन बाद SMS/पासबुक से पुष्टि करें कि KYC अपडेट हो गया और खाते की रोक हट गई।",
    'काम न हो तो बैंक की शिकायत व्यवस्था में लिखित शिकायत करें। 30 दिन में जवाब न मिले या जवाब ठीक न लगे, तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "KYC के नाम पर आए फोन कॉल, SMS लिंक या APK फाइल पर भरोसा न करें। बैंक कभी OTP, PIN, CVV या पासवर्ड नहीं मांगता।",
    "पत्र में कार्ड नंबर, PIN, OTP या नेट बैंकिंग पासवर्ड कभी न लिखें।",
    "कुछ नहीं बदला हो तो नए कागज़ जमा करने का दबाव मानना ज़रूरी नहीं; RBI के अनुसार स्व-घोषणा काफी है (जब तक पुराने कागज़ मान्य हैं)।",
    "संयुक्त खाते में हर खाताधारक की अलग स्व-घोषणा/हस्ताक्षर लगते हैं।",
  ],
  notice: "कई बैंक Re-KYC के लिए अपना छपा हुआ फॉर्म मांगते हैं। ऐसा हो तो यही जानकारी उनके फॉर्म में भरें और यह पत्र साथ लगा दें।",
  official: [
    { href: "https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54998", title: "RBI: Periodic Updation of KYC (5 जनवरी 2023)", note: "स्व-घोषणा और पता बदलने के नियम" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "Re-KYC के लिए क्या ब्रांच जाना ज़रूरी है?", a: "अगर आपकी KYC जानकारी में कोई बदलाव नहीं है, तो RBI के अनुसार स्व-घोषणा काफी है और बैंक को इसे पंजीकृत ईमेल, मोबाइल, ATM, नेट/मोबाइल बैंकिंग या पत्र से लेने की सुविधा देनी होती है। तरीका बैंक के हिसाब से अलग हो सकता है।" },
    { q: "KYC कितने साल में दोबारा होता है?", a: "RBI के नियम के अनुसार जोखिम श्रेणी के हिसाब से: ज़्यादा जोखिम वाले ग्राहक कम से कम हर 2 साल, मध्यम हर 8 साल और कम जोखिम वाले हर 10 साल में।" },
    { q: "KYC न होने से खाता फ्रीज़ हो गया, क्या करें?", a: "होम ब्रांच में यह आवेदन और ज़रूरी कागज़ दें। KYC अपडेट होते ही बैंक रोक हटा देता है। देरी हो तो लिखित शिकायत करें और 30 दिन बाद RBI लोकपाल के पास जाएं।" },
    { q: "पता बदल गया है, क्या नया पता प्रमाण ज़रूरी है?", a: "RBI के अनुसार सिर्फ पता बदला हो तो आप नया पता बता सकते हैं और बैंक 2 महीने में उसकी जांच करता है। फिर भी नए पते वाला आधार/वोटर ID साथ लगाने से काम जल्दी होता है।" },
    { q: "क्या Re-KYC की कोई फीस है?", a: "RBI ने Re-KYC के लिए कोई फीस तय नहीं की है। कोई चार्ज मांगा जाए तो बैंक से लिखित में कारण पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
