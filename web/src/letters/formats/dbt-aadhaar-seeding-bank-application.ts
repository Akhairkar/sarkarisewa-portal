import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - NPCI Aadhaar Payment Bridge (APB) / NPCI mapper: DBT payments sent on
//   Aadhaar go to the account mapped in the NPCI mapper; only one account
//   can receive at a time; if consent is given to several banks, the last
//   seeded bank with active status gets the credit (Federal Bank "Aadhaar
//   seeding status" page, Vikaspedia, Gujarat govt notice).
// - Seeding needs the customer's signed consent at the branch (bank's own
//   consent form); inactive status -> visit branch with consent form.
// - Status check: UIDAI bank-mapper / myAadhaar (OTP to Aadhaar-linked
//   mobile, data from NPCI mapper) and NPCI BASE (Consumers section of
//   npci.org.in).
// - KYC "linking" of Aadhaar to an account differs from DBT "seeding"
//   (NPCI mapping); both explained on page.
export const dbtAadhaarSeedingBankApplication: Letter = {
  slug: "dbt-aadhaar-seeding-bank-application",
  category: "bank",
  emoji: "🔗",
  title: "Aadhaar Seeding Application for DBT 2026: बैंक में आधार सीडिंग आवेदन",
  description: "DBT (PM-Kisan, स्कॉलरशिप, पेंशन, LPG सब्सिडी) के लिए बैंक खाते में आधार सीडिंग/NPCI मैपिंग का आवेदन पत्र (हिंदी/English)। स्टेटस कैसे देखें।",
  h1: "DBT के लिए आधार सीडिंग आवेदन 2026: बैंक को NPCI मैपिंग का पत्र",
  short: { hi: "आधार सीडिंग (DBT) आवेदन", en: "Aadhaar seeding for DBT" },
  lead: "सरकारी योजनाओं का पैसा (PM-Kisan, स्कॉलरशिप, पेंशन, LPG सब्सिडी आदि) अक्सर आधार नंबर पर भेजा जाता है और उसी खाते में आता है जो <strong>NPCI मैपर</strong> में आपके आधार से जुड़ा (seeded) है। एक समय में <strong>एक ही खाता</strong> DBT के लिए जुड़ा रहता है; कई बैंकों को सहमति दी हो तो पैसा <strong>सबसे आखिर में जोड़े गए चालू खाते</strong> में आता है। आधार सीडिंग के लिए अपनी बैंक शाखा में यह आवेदन और बैंक का सहमति फॉर्म दें।",
  facts: [
    ["किसे दें", "अपनी बैंक/डाकघर शाखा के शाखा प्रबंधक"],
    ["नियम", "DBT एक समय में एक ही खाते में (आखिरी सक्रिय सीडिंग)"],
    ["स्टेटस देखें", '<a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener nofollow">myAadhaar</a> (Bank Seeding Status) या NPCI'],
    ["फीस", "आम तौर पर कोई फीस नहीं (बैंक से पूछें)"],
  ],
  to: "जिस बैंक खाते में आप सरकारी पैसा पाना चाहते हैं, उस <strong>बैंक शाखा के शाखा प्रबंधक</strong> को। डाकघर बचत खाता या India Post Payments Bank के लिए उस डाकघर को।",
  when: [
    "योजना के पोर्टल पर \"Aadhaar not seeded\" या \"NPCI inactive\" दिख रहा है",
    "PM-Kisan, पेंशन, स्कॉलरशिप या LPG सब्सिडी का भुगतान फेल हो रहा है",
    "DBT का पैसा किसी पुराने/दूसरे खाते में जा रहा है",
    "नया खाता खुलवाया है और सरकारी पैसा उसी में चाहिए",
  ],
  fields: [
    { key: "branch", label: { hi: "बैंक और शाखा का नाम", en: "Bank and branch" }, required: true, placeholder: { hi: "जैसे: बैंक ऑफ बड़ौदा, सदर बाज़ार शाखा, रायपुर", en: "e.g. Bank of Baroda, Sadar Bazar branch, Raipur" } },
    { key: "name", label: { hi: "खाताधारक का नाम (आधार के अनुसार)", en: "Account holder's name (as in Aadhaar)" }, required: true },
    { key: "account", label: { hi: "खाता नंबर", en: "Account number" }, required: true, hint: { hi: "बैंक को खाता नंबर देना ज़रूरी है; पर ATM PIN, OTP या कार्ड का CVV कभी न लिखें", en: "Account no. is needed by the bank; never write ATM PIN, OTP or CVV" } },
    { key: "aadhaar", label: { hi: "आधार नंबर", en: "Aadhaar number" }, required: true, hint: { hi: "पत्र सिर्फ बैंक शाखा में दें; किसी और को फोटो/कॉपी न भेजें", en: "Give only at the branch; do not share copies with others" } },
    { key: "phone", label: { hi: "मोबाइल नंबर (आधार से जुड़ा)", en: "Mobile (linked to Aadhaar)" }, type: "tel", required: true },
    { key: "purpose", label: { hi: "किस योजना के लिए", en: "For which scheme" }, type: "select", options: [
      { hi: "सभी सरकारी DBT भुगतान", en: "all government DBT payments" },
      { hi: "PM-Kisan सम्मान निधि", en: "PM-Kisan Samman Nidhi" },
      { hi: "छात्रवृत्ति (स्कॉलरशिप)", en: "scholarship" },
      { hi: "वृद्धावस्था/विधवा/दिव्यांग पेंशन", en: "old-age/widow/disability pension" },
      { hi: "LPG सब्सिडी", en: "LPG subsidy" },
    ] },
    { key: "request", label: { hi: "अनुरोध", en: "Request" }, type: "select", required: true, options: [
      { hi: "मेरे खाते में आधार सीडिंग करके NPCI मैपर में DBT के लिए सक्रिय किया जाए", en: "seed my Aadhaar in my account and activate it in the NPCI mapper for DBT" },
      { hi: "मेरी DBT मैपिंग दूसरे बैंक से हटाकर इस खाते में की जाए", en: "move my DBT mapping from another bank to this account" },
      { hi: "मेरी निष्क्रिय (inactive) आधार सीडिंग फिर से सक्रिय की जाए", en: "reactivate my inactive Aadhaar seeding" },
    ] },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{branch}}

विषय: DBT हेतु बचत खाते में आधार सीडिंग / NPCI मैपिंग के लिए आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में खाता संख्या {{account}} का खाताधारक हूं। मेरा आधार नंबर {{aadhaar}} है।

मुझे सरकार की योजनाओं ({{purpose}}) का पैसा इसी खाते में चाहिए। अतः निवेदन है कि {{request}}।

मैं अपनी स्वेच्छा से सहमति देता/देती हूं कि मेरा आधार नंबर इस खाते से जोड़ा जाए और इसे NPCI मैपर में डाला जाए, ताकि आधार आधारित सभी सरकारी भुगतान (DBT) इसी खाते में प्राप्त हों। मुझे जानकारी है कि DBT का पैसा उसी एक खाते में आएगा जो आखिरी बार NPCI मैपर में जोड़ा गया है।

कृपया सीडिंग पूरी होने की पावती/स्थिति मुझे SMS या लिखित में दें।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}
खाता संख्या: {{account}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आधार कार्ड की स्व-प्रमाणित कॉपी
2. पासबुक के पहले पन्ने की कॉपी
3. बैंक का भरा हुआ आधार सीडिंग/सहमति फॉर्म`,
    en: `To,
The Branch Manager,
{{branch}}

Subject: Application for Aadhaar seeding / NPCI mapping in my savings account for DBT

Sir/Madam,

I, {{name}}, hold account no. {{account}} at your branch. My Aadhaar number is {{aadhaar}}.

I wish to receive government scheme payments ({{purpose}}) in this account. I therefore request you to {{request}}.

I voluntarily give my consent for my Aadhaar number to be linked to this account and entered in the NPCI mapper, so that all Aadhaar-based government payments (DBT) are received in this account. I understand that DBT payments will be credited to the one account last mapped in the NPCI mapper.

Kindly give me an acknowledgement / status of the seeding by SMS or in writing.

Yours faithfully,

(Signature)
Name: {{name}}
Account no.: {{account}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Self-attested copy of Aadhaar card
2. Copy of first page of passbook
3. Bank's filled Aadhaar seeding / consent form`,
  },
  attach: [
    "आधार कार्ड की स्व-प्रमाणित कॉपी (कॉपी पर \"सिर्फ आधार सीडिंग के लिए, बैंक का नाम, तारीख\" लिखकर हस्ताक्षर करें)",
    "पासबुक के पहले पन्ने की कॉपी",
    "बैंक का अपना आधार सीडिंग/सहमति (consent) फॉर्म, भरा हुआ",
  ],
  submit: [
    "अपनी शाखा में जाकर बैंक का \"Aadhaar seeding / consent\" फॉर्म मांगें; यह पत्र और कागज़ साथ लगाकर जमा करें।",
    "पावती या रिसीविंग ज़रूर लें; कई बैंक SMS से भी पुष्टि भेजते हैं।",
    'कुछ दिन बाद <a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener nofollow">myAadhaar</a> पर लॉगिन करके \"Bank Seeding Status\" देखें, या NPCI वेबसाइट के Consumers सेक्शन में आधार सीडिंग स्थिति देखें।',
    "स्थिति \"Inactive\" या गलत बैंक दिखे तो शाखा में फिर जाएं; बैंक हल न करे तो बैंक की शिकायत प्रणाली और फिर RBI के CMS (cms.rbi.org.in) पर शिकायत करें।",
  ],
  tips: [
    "आधार पर नाम और खाते में नाम एक जैसा होना चाहिए; फर्क हो तो पहले KYC में सुधार कराएं।",
    "KYC के लिए आधार \"लिंक\" होना और DBT के लिए NPCI में \"सीडिंग\" होना अलग बातें हैं; बैंक से साफ कहें कि NPCI मैपिंग चाहिए।",
    "अगर दूसरे बैंक में पैसा जाता रहा है, तो नया आवेदन देते ही पैसा नए खाते में आने लगता है (आखिरी सीडिंग मान्य)।",
    "आधार कॉपी या OTP किसी एजेंट/अनजान व्यक्ति को न दें; यह काम सिर्फ बैंक शाखा में कराएं।",
  ],
  notice: "ज़्यादातर बैंक इसके लिए अपना छपा हुआ सहमति फॉर्म मांगते हैं। यह पत्र उस फॉर्म के साथ लगाएं, उसकी जगह नहीं।",
  official: [
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar (UIDAI)", note: "Bank Seeding Status" },
    { href: "https://www.npci.org.in/", title: "NPCI", note: "आधार सीडिंग स्थिति (Consumers सेक्शन)" },
  ],
  related: ["/service/pm-kisan.html", "/service/lpg-subsidy-pahal.html", "/service/national-scholarship-portal.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "आधार सीडिंग और आधार लिंक में क्या फर्क है?", a: "आधार लिंक होने का मतलब बैंक ने KYC में आधार ले लिया। सीडिंग/NPCI मैपिंग का मतलब आधार पर आने वाला सरकारी पैसा (DBT) इसी खाते में आएगा। DBT के लिए NPCI मैपिंग ज़रूरी है।" },
    { q: "DBT किस खाते में आएगा अगर कई बैंकों में आधार दिया है?", a: "उसी खाते में जिसे सबसे आखिर में NPCI मैपर में जोड़ा गया और जिसकी स्थिति सक्रिय है।" },
    { q: "आधार सीडिंग की स्थिति कैसे देखें?", a: "myAadhaar (UIDAI) पर लॉगिन करके \"Bank Seeding Status\" में, आधार से जुड़े मोबाइल पर OTP से। NPCI की वेबसाइट पर भी सुविधा है।" },
    { q: "आधार सीडिंग में कितने दिन लगते हैं?", a: "बैंक के हिसाब से अलग; आम तौर पर कुछ दिन। तय समय नहीं है, इसलिए कुछ दिन बाद स्थिति जांचें और न हो तो शाखा से पूछें।" },
    { q: "क्या आधार सीडिंग ऑनलाइन हो सकती है?", a: "कुछ बैंक नेट बैंकिंग/ऐप से आधार जोड़ने की सुविधा देते हैं, पर DBT मैपिंग की पक्की पुष्टि के लिए शाखा में सहमति फॉर्म देना सबसे भरोसेमंद है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
