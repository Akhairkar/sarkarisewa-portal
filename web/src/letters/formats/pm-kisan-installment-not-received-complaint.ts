import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - PM-KISAN: Rs 6,000 a year in three instalments of Rs 2,000 by DBT to
//   eligible landholding farmer families (pmkisan.gov.in).
// - Common reasons for a missed instalment: e-KYC not done, land seeding
//   (land record verification) pending, Aadhaar not seeded to bank account /
//   DBT not enabled (NPCI), name mismatch, account closed/frozen, income-tax
//   payee or other exclusion (Business Standard, Housing.com, ClearTax,
//   Amar Ujala June 2026).
// - Helpline: 155261 / 011-24300606, toll-free 1800-115-526; email
//   pmkisan-ict@gov.in and pmkisan-funds@gov.in; grievance via
//   pmkisan.gov.in "Help Desk"/Kisan e-Mitra (Business Standard, ClearTax).
//   One 2026 report also lists 1800-180-1551 (Kisan Call Centre) - not used
//   as a PM-Kisan number.
// - Local route: block/district agriculture office (state nodal officer);
//   escalation CPGRAMS (pgportal.gov.in).
export const pmKisanInstallmentNotReceivedComplaint: Letter = {
  slug: "pm-kisan-installment-not-received-complaint",
  category: "complaint",
  emoji: "🧑‍🌾",
  title: "PM Kisan Installment Not Received Complaint 2026: किस्त न मिलने की शिकायत",
  description: "PM किसान की ₹2000 किस्त न आने पर कृषि अधिकारी को शिकायत पत्र (हिंदी/English)। e-KYC, लैंड सीडिंग, आधार-बैंक लिंक, हेल्पलाइन 155261।",
  h1: "PM किसान किस्त न मिलने पर शिकायत पत्र 2026",
  short: { hi: "PM किसान किस्त शिकायत", en: "PM Kisan instalment complaint" },
  lead: "PM किसान सम्मान निधि में पात्र किसान परिवार को साल में <strong>₹6,000</strong>, तीन किस्तों में <strong>₹2,000</strong> करके सीधे बैंक खाते में मिलते हैं। किस्त रुकने के आम कारण हैं: <strong>e-KYC न होना, लैंड सीडिंग (भूमि सत्यापन) बाकी, खाते में आधार सीडिंग/DBT चालू न होना</strong> या नाम में अंतर। पहले <strong>pmkisan.gov.in</strong> पर \"Know Your Status\" देखें, फिर यह पत्र <strong>ब्लॉक/ज़िला कृषि अधिकारी</strong> को दें। हेल्पलाइन: <strong>155261 / 011-24300606</strong>।",
  facts: [
    ["किसे दें", "ब्लॉक/ज़िला कृषि अधिकारी (PM किसान नोडल)"],
    ["हेल्पलाइन", "155261 / 011-24300606; टोल-फ्री 1800-115-526"],
    ["ईमेल", "pmkisan-ict@gov.in"],
    ["ऑनलाइन", '<a href="https://pmkisan.gov.in/" target="_blank" rel="noopener nofollow">pmkisan.gov.in</a> (Know Your Status, e-KYC, Help Desk)'],
  ],
  to: "अपने ब्लॉक के <strong>कृषि अधिकारी / सहायक कृषि अधिकारी</strong> या <strong>ज़िला कृषि अधिकारी (उप कृषि निदेशक)</strong> को, जो ज़िले में PM किसान के नोडल अधिकारी होते हैं। ज़मीन के रिकॉर्ड की गड़बड़ी हो तो प्रति तहसीलदार को भी दें।",
  when: [
    "पिछली किस्तें आईं, पर इस बार की किस्त नहीं आई",
    "स्टेटस में e-KYC, Land Seeding या Aadhaar Bank Seeding के आगे \"No\" दिख रहा है",
    "स्टेटस में \"FTO generated\" या \"Payment failed\" है पर पैसा नहीं आया",
    "रजिस्ट्रेशन के बाद से एक भी किस्त नहीं मिली",
  ],
  fields: [
    { key: "office", label: { hi: "कृषि अधिकारी का दफ्तर और ब्लॉक/ज़िला", en: "Agriculture office and block/district" }, required: true, placeholder: { hi: "जैसे: उप कृषि निदेशक, ज़िला कृषि कार्यालय, हरदोई", en: "e.g. Deputy Director Agriculture, District Agriculture Office, Hardoi" } },
    { key: "name", label: { hi: "किसान का नाम (जैसा आधार में है)", en: "Farmer's name (as in Aadhaar)" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "regno", label: { hi: "PM किसान रजिस्ट्रेशन नंबर", en: "PM Kisan registration no." }, required: true, placeholder: { hi: "स्टेटस पेज पर दिखता है", en: "Shown on the status page" } },
    { key: "village", label: { hi: "गांव, ब्लॉक, ज़िला", en: "Village, block, district" }, required: true },
    { key: "acct", label: { hi: "बैंक का नाम और खाते के आखिरी 4 अंक", en: "Bank name and last 4 digits of account" }, required: true, hint: { hi: "पूरा खाता नंबर, ATM PIN या OTP कभी न लिखें", en: "Never write full account number, ATM PIN or OTP" } },
    { key: "aadhaar4", label: { hi: "आधार के आखिरी 4 अंक", en: "Last 4 digits of Aadhaar" } },
    { key: "missed", label: { hi: "कौन सी किस्त नहीं आई", en: "Which instalment not received" }, required: true, placeholder: { hi: "जैसे: पिछली किस्त (अगस्त 2026)", en: "e.g. the last instalment (August 2026)" } },
    { key: "status", label: { hi: "स्टेटस में क्या दिख रहा है", en: "What the status shows" }, type: "select", required: true, options: [
      { hi: "e-KYC पूरा नहीं दिख रहा, जबकि मैंने e-KYC करा लिया है", en: "e-KYC shows incomplete though I have completed it" },
      { hi: "Land Seeding 'No' है", en: "Land Seeding shows 'No'" },
      { hi: "Aadhaar Bank Seeding / DBT 'No' है", en: "Aadhaar Bank Seeding / DBT shows 'No'" },
      { hi: "Payment failed / रकम वापस (reversed) दिख रही है", en: "Payment failed / amount reversed" },
      { hi: "सब 'Yes' है फिर भी किस्त नहीं आई", en: "everything shows 'Yes' but instalment not received" },
    ] },
    { key: "ticket", label: { hi: "पहले की शिकायत संख्या (हो तो)", en: "Earlier complaint no. (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर (रजिस्ट्रेशन वाला)", en: "Mobile (registered)" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) की किस्त न मिलने के संबंध में शिकायत

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पत्नी श्री {{father}}, निवासी {{village}}, PM-KISAN योजना का पंजीकृत लाभार्थी हूं। मेरा विवरण इस प्रकार है:

पंजीकरण संख्या: {{regno}}
बैंक/खाता (अंतिम 4 अंक): {{acct}}
आधार (अंतिम 4 अंक): {{aadhaar4}}

मुझे {{missed}} की राशि अब तक प्राप्त नहीं हुई है। pmkisan.gov.in पर स्थिति देखने पर: {{status}}। इस बारे में पहले की शिकायत संख्या: {{ticket}}।

मैं योजना की सभी पात्रता शर्तें पूरी करता/करती हूं। आवश्यक कागज़ों की प्रतियां संलग्न हैं।

अतः आपसे प्रार्थना है कि मेरे रिकॉर्ड की जांच कर e-KYC/लैंड सीडिंग/बैंक विवरण की कमी दूर कराएं और रुकी हुई किस्त/किस्तें मेरे खाते में भिजवाने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर / अंगूठे का निशान)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. PM-KISAN स्टेटस पेज का प्रिंट/स्क्रीनशॉट
2. आधार कार्ड की प्रति
3. बैंक पासबुक के पहले पन्ने की प्रति
4. खतौनी/भू-अभिलेख की नकल`,
    en: `To,
{{office}}

Subject: Complaint regarding non-receipt of PM-KISAN instalment

Sir/Madam,

I, {{name}}, son/wife of Shri {{father}}, resident of {{village}}, am a registered beneficiary of the PM-KISAN scheme. My details are as follows:

Registration no.: {{regno}}
Bank/account (last 4 digits): {{acct}}
Aadhaar (last 4 digits): {{aadhaar4}}

I have not yet received the amount of {{missed}}. On checking the status at pmkisan.gov.in: {{status}}. Earlier complaint no.: {{ticket}}.

I fulfil all eligibility conditions of the scheme. Copies of the necessary documents are enclosed.

I therefore request you kindly to verify my record, get the e-KYC/land seeding/bank details deficiency removed and have the pending instalment(s) credited to my account.

Yours faithfully,

(Signature / thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Printout/screenshot of PM-KISAN status page
2. Copy of Aadhaar card
3. Copy of first page of bank passbook
4. Copy of land record`,
  },
  attach: [
    "pmkisan.gov.in के \"Know Your Status\" पेज का प्रिंट/स्क्रीनशॉट",
    "आधार कार्ड और बैंक पासबुक के पहले पन्ने की कॉपी",
    "खतौनी/भू-अभिलेख की नकल (लैंड सीडिंग के लिए)",
    "पहले की शिकायत/हेल्पलाइन टिकट संख्या (हो तो)",
  ],
  submit: [
    '<a href="https://pmkisan.gov.in/" target="_blank" rel="noopener nofollow">pmkisan.gov.in</a> पर "Know Your Status" में रजिस्ट्रेशन/मोबाइल नंबर डालकर देखें कि क्या रुका है।',
    "e-KYC बाकी हो तो पोर्टल पर OTP से, CSC पर बायोमेट्रिक से या PM-KISAN ऐप पर फेस ऑथेंटिकेशन से पूरा करें। आधार सीडिंग बाकी हो तो बैंक जाकर खाते में आधार लिंक और DBT चालू कराएं (India Post Payments Bank में भी खाता खुल सकता है)।",
    "लैंड सीडिंग 'No' हो या बाकी सब ठीक होने पर भी पैसा न आए, तो यह पत्र ब्लॉक/ज़िला कृषि कार्यालय में जमा करें और रिसीविंग लें।",
    "साथ में पोर्टल के <strong>Help Desk / Kisan e-Mitra</strong> पर शिकायत दर्ज करें या <strong>155261 / 011-24300606</strong> पर कॉल करें, या pmkisan-ict@gov.in पर ईमेल करें।",
    'एक महीने में हल न हो तो <a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">CPGRAMS</a> पर शिकायत करें (कृषि एवं किसान कल्याण विभाग)।',
  ],
  tips: [
    "e-KYC, आधार सीडिंग और लैंड सीडिंग तीनों 'Yes' होने पर ही किस्त आती है; पहले यही जांचें।",
    "बैंक खाते और आधार में नाम एक जैसा होना चाहिए; अंतर हो तो पहले बैंक में सुधार कराएं।",
    "पति-पत्नी दोनों अलग-अलग लाभ नहीं ले सकते; एक परिवार को एक ही लाभ मिलता है।",
    "किस्त दिलाने के नाम पर कॉल करके OTP मांगने वालों से सावधान; सरकारी कर्मचारी OTP नहीं मांगता।",
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "स्टेटस, e-KYC, Help Desk" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS", note: "केंद्र सरकार शिकायत पोर्टल" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  related: ["/service/pm-kisan.html", "/service/farmer-id-card-agristack.html", "/service/aadhaar-card.html"],
  faq: [
    { q: "PM किसान की किस्त नहीं आई तो क्या करें?", a: "pmkisan.gov.in पर 'Know Your Status' देखें। e-KYC, लैंड सीडिंग और आधार-बैंक सीडिंग में जो 'No' हो उसे ठीक कराएं, फिर कृषि अधिकारी को शिकायत दें और 155261 पर कॉल करें।" },
    { q: "PM किसान हेल्पलाइन नंबर क्या है?", a: "155261 और 011-24300606; टोल-फ्री 1800-115-526। ईमेल: pmkisan-ict@gov.in।" },
    { q: "लैंड सीडिंग 'No' का मतलब क्या है?", a: "आपकी ज़मीन के रिकॉर्ड का सत्यापन PM किसान रिकॉर्ड से नहीं जुड़ा है। ब्लॉक कृषि कार्यालय या तहसील में खतौनी के साथ आवेदन देकर इसे ठीक कराएं।" },
    { q: "e-KYC कैसे करें?", a: "pmkisan.gov.in पर आधार OTP से, नज़दीकी CSC पर बायोमेट्रिक से, या PM-KISAN मोबाइल ऐप पर फेस ऑथेंटिकेशन से।" },
    { q: "रुकी हुई पुरानी किस्तें मिलेंगी या नहीं?", a: "कमी दूर होने के बाद पात्र किसानों को कई बार रुकी किस्तें भी मिलती हैं, पर यह सरकार के नियम और जांच पर निर्भर है। शिकायत में सभी रुकी किस्तों का ज़िक्र करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
