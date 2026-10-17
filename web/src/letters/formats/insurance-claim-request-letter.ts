import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - PMJJBY (myscheme.gov.in/schemes/pmjjby; repo guide checked 15 Oct 2026):
//   Rs 2 lakh on death due to any reason; premium Rs 436 a year; age 18-50 at
//   joining; cover 1 June-31 May. Claim procedure (India Post SOP Claim
//   PMJJBY; Indian Bank / Federal Bank / LIC claim procedure; LIC claim form):
//   nominee submits the claim form with death certificate, nominee KYC and
//   bank details (passbook copy/cancelled cheque) to the bank/post office where
//   the account was, preferably within 30 days of death; bank verifies and
//   forwards to the insurer, which credits the nominee's account; no claim if
//   death (other than by accident) occurs within 30 days of enrolment (lien
//   period).
// - PMSBY (myScheme slug "pmsby"; repo guide): premium Rs 20; age 18-70;
//   Rs 2 lakh on accidental death or total permanent disability, Rs 1 lakh on
//   partial (one eye / one hand or foot); claim forms on jansuraksha.gov.in;
//   accidental death claims need FIR/police report and post-mortem report
//   (bank claim procedures).
// - National toll-free 1800-180-1111 / 1800-11-0001 (pmjdy.gov.in; repo
//   guides). RBI Integrated Ombudsman (cms.rbi.org.in, 14448) for the bank's
//   handling; insurer complaints via the insurer / Bima Bharosa.
export const insuranceClaimRequestLetter: Letter = {
  slug: "insurance-claim-request-letter",
  category: "bank",
  emoji: "🛡️",
  title: "PMJJBY / PMSBY Claim Letter to Bank in Hindi 2026: बीमा क्लेम अनुरोध पत्र",
  description: "खाताधारक की मृत्यु/दुर्घटना पर PMJJBY या PMSBY के ₹2 लाख बीमा क्लेम के लिए नॉमिनी का बैंक को अनुरोध पत्र (हिंदी/English)। कागज़, 30 दिन, शिकायत।",
  h1: "PMJJBY / PMSBY बीमा क्लेम अनुरोध पत्र 2026: नॉमिनी की ओर से बैंक को",
  short: { hi: "PMJJBY/PMSBY बीमा क्लेम पत्र", en: "PMJJBY/PMSBY claim letter" },
  lead: "अगर किसी के बैंक खाते से हर साल <strong>₹436 (PMJJBY)</strong> या <strong>₹20 (PMSBY)</strong> प्रीमियम कटता था, तो उसकी मृत्यु पर नॉमिनी को <strong>₹2 लाख</strong> मिल सकते हैं: PMJJBY में किसी भी कारण से मृत्यु पर, PMSBY में दुर्घटना से मृत्यु या पूरी विकलांगता पर। क्लेम उसी <strong>बैंक शाखा/डाकघर</strong> में दिया जाता है जहां खाता था; बैंक जांचकर बीमा कंपनी को भेजता है और पैसा नॉमिनी के खाते में आता है। क्लेम फॉर्म के साथ यह पत्र मृत्यु के बाद जल्द, हो सके तो <strong>30 दिन</strong> के अंदर दें।",
  facts: [
    ["किसे दें", "जिस बैंक शाखा/डाकघर में खाताधारक का खाता था"],
    ["PMJJBY", "₹2 लाख, किसी भी कारण से मृत्यु (₹436 प्रीमियम)"],
    ["PMSBY", "दुर्घटना से मृत्यु/पूरी विकलांगता ₹2 लाख; आंशिक ₹1 लाख"],
    ["हेल्पलाइन", "1800-180-1111 / 1800-11-0001"],
  ],
  to: "जिस बैंक शाखा या डाकघर में मृतक/घायल खाताधारक का बचत खाता था और जहां से बीमा प्रीमियम कटता था, उसके <strong>शाखा प्रबंधक/पोस्टमास्टर</strong> को।",
  when: [
    "खाताधारक की मृत्यु हुई और खाते से PMJJBY (₹436) का प्रीमियम कटता था",
    "दुर्घटना में मृत्यु हुई और PMSBY (₹20) का प्रीमियम कटता था",
    "दुर्घटना में दोनों आंखें/हाथ-पैर बेकार हो गए (PMSBY विकलांगता क्लेम)",
    "क्लेम फॉर्म जमा किया पर लंबे समय से भुगतान नहीं हुआ",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक/डाकघर शाखा का नाम और पता", en: "Bank/post office branch name and address" }, type: "textarea", required: true },
    { key: "scheme", label: { hi: "बीमा योजना", en: "Insurance scheme" }, type: "select", options: [
      { hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)", en: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)" },
      { hi: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)", en: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)" },
      { hi: "PMJJBY और PMSBY दोनों", en: "both PMJJBY and PMSBY" },
    ] },
    { key: "insured", label: { hi: "बीमित खाताधारक का नाम", en: "Insured account holder's name" }, required: true },
    { key: "account", label: { hi: "बीमित के खाते के आखिरी 4 अंक", en: "Last 4 digits of insured's account" }, required: true, placeholder: { hi: "जैसे: XXXX7788", en: "e.g. XXXX7788" }, hint: { hi: "पूरा खाता नंबर, PIN या OTP न लिखें", en: "Do not write the full account number, PIN or OTP" } },
    { key: "event", label: { hi: "घटना", en: "Event" }, type: "select", options: [
      { hi: "बीमारी/सामान्य कारण से मृत्यु", en: "death due to illness/natural causes" },
      { hi: "दुर्घटना से मृत्यु", en: "accidental death" },
      { hi: "दुर्घटना से स्थायी विकलांगता", en: "permanent disability due to accident" },
    ] },
    { key: "eventdate", label: { hi: "मृत्यु/दुर्घटना की तारीख", en: "Date of death/accident" }, type: "date", required: true },
    { key: "claimant", label: { hi: "दावेदार (नॉमिनी) का नाम और बीमित से संबंध", en: "Claimant (nominee) name and relation" }, required: true, placeholder: { hi: "जैसे: गीता देवी, पत्नी", en: "e.g. Geeta Devi, wife" } },
    { key: "claimantacc", label: { hi: "दावेदार का बैंक और खाते के आखिरी 4 अंक", en: "Claimant's bank and last 4 digits of account" }, required: true },
    { key: "address", label: { hi: "दावेदार का पता", en: "Claimant's address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}}

विषय: {{scheme}} के अंतर्गत बीमा दावा (क्लेम) हेतु अनुरोध – खाता {{account}}

महोदय/महोदया,

सविनय निवेदन है कि आपकी शाखा के खाताधारक श्री/श्रीमती {{insured}} (खाता संख्या के अंतिम अंक: {{account}}) की दिनांक {{eventdate}} को {{event}} हो गई है। उनके खाते से {{scheme}} का वार्षिक प्रीमियम कटता था।

मैं, {{claimant}}, उनका/उनकी नामित (नॉमिनी)/कानूनी वारिस हूं। अतः आपसे निवेदन है कि:
1. योजना के अंतर्गत बीमा दावा फॉर्म और आवश्यक दस्तावेज़ स्वीकार करें;
2. दावे की जांच कर उसे शीघ्र बीमा कंपनी को भेजें;
3. बीमा राशि मेरे बैंक खाते ({{claimantacc}}) में जमा कराने की कृपा करें।

भरा हुआ दावा फॉर्म और सभी आवश्यक दस्तावेज़ संलग्न हैं। यदि कोई और दस्तावेज़ चाहिए, तो कृपया लिखित में बताएं। कृपया दावा जमा करने की पावती भी दें।

भवदीय/भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{claimant}}
पता: {{address}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. भरा हुआ दावा फॉर्म (बैंक द्वारा भरा जाने वाला भाग सहित)
2. मृत्यु प्रमाण पत्र (मूल/प्रमाणित प्रति)
3. दुर्घटना के मामले में: FIR/पुलिस रिपोर्ट और पोस्टमार्टम रिपोर्ट; विकलांगता में सरकारी डॉक्टर का प्रमाण पत्र
4. दावेदार का आधार/पहचान पत्र
5. दावेदार की बैंक पासबुक का पहला पन्ना या कैंसिल चेक`,
    en: `To,
The Branch Manager,
{{bank}}

Subject: Request for insurance claim under {{scheme}} – account {{account}}

Sir/Madam,

I regret to inform you that {{insured}}, an account holder of your branch (last digits of account: {{account}}), suffered {{event}} on {{eventdate}}. The annual premium of {{scheme}} was being debited from this account.

I, {{claimant}}, am the nominee/legal heir. I therefore request you to:
1. accept the claim form and required documents under the scheme;
2. verify the claim and forward it to the insurance company at the earliest;
3. arrange to credit the claim amount to my bank account ({{claimantacc}}).

The filled claim form and all required documents are enclosed. If any other document is needed, kindly inform me in writing. Kindly also give an acknowledgement of the claim submitted.

Yours faithfully,

(Signature/thumb impression)
Name: {{claimant}}
Address: {{address}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. Filled claim form (including the part to be filled by the bank)
2. Death certificate (original/certified copy)
3. In accident cases: FIR/police report and post-mortem report; for disability, certificate from a government doctor
4. Claimant's Aadhaar/identity proof
5. First page of claimant's bank passbook or cancelled cheque`,
  },
  attach: [
    "योजना का क्लेम फॉर्म (बैंक शाखा या <a href=\"https://jansuraksha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jansuraksha.gov.in</a> से)",
    "मृत्यु प्रमाण पत्र",
    "PMSBY (दुर्घटना): FIR/पुलिस रिपोर्ट, पोस्टमार्टम रिपोर्ट; विकलांगता में सरकारी अस्पताल/डॉक्टर का प्रमाण पत्र और डिस्चार्ज समरी",
    "नॉमिनी का आधार/पहचान पत्र और बैंक पासबुक/कैंसिल चेक; नॉमिनी न हो तो कानूनी वारिस होने का प्रमाण",
  ],
  submit: [
    "पहले बैंक से पता करें कि मृतक के खाते से PMJJBY/PMSBY का प्रीमियम कटता था (पासबुक में ₹436 या ₹20 की कटौती देखें)।",
    "शाखा से क्लेम फॉर्म लें; फॉर्म देने से बैंक मना नहीं कर सकता। फॉर्म, यह पत्र और कागज़ जमा करें और पावती लें।",
    "बैंक दावे की जांच करके बीमा कंपनी को भेजता है; पैसा सीधे नॉमिनी के खाते में आता है।",
    "देरी हो तो बैंक को लिखित रिमाइंडर दें और 1800-180-1111 / 1800-11-0001 पर शिकायत करें। बैंक 30 दिन में हल न करे तो <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">RBI लोकपाल (cms.rbi.org.in)</a> में शिकायत कर सकते हैं।",
  ],
  tips: [
    "देर न करें; गाइडलाइन के अनुसार क्लेम मृत्यु के 30 दिन के अंदर देना बेहतर है। देर होने पर भी क्लेम दें, साथ में देरी का कारण लिखें।",
    "PMJJBY में जुड़ने के पहले 30 दिन में (दुर्घटना के अलावा) मृत्यु पर क्लेम नहीं मिलता; यह बैंक पहले जांचेगा।",
    "दुर्घटना से मृत्यु हो तो PMJJBY और PMSBY दोनों का क्लेम बन सकता है, अगर दोनों का प्रीमियम कटता था; दोनों फॉर्म भरें।",
    "क्लेम दिलाने के नाम पर किसी एजेंट को पैसा न दें; यह प्रक्रिया मुफ्त है।",
  ],
  official: [
    { href: "https://jansuraksha.gov.in/", title: "जन सुरक्षा पोर्टल", note: "PMJJBY/PMSBY क्लेम फॉर्म और नियम" },
    { href: "https://www.myscheme.gov.in/schemes/pmjjby", title: "myScheme: PMJJBY" },
    { href: "https://www.myscheme.gov.in/schemes/pmsby", title: "myScheme: PMSBY" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली", note: "बैंक के खिलाफ शिकायत; 14448" },
  ],
  related: ["/service/pm-jeevan-jyoti-bima-yojana.html", "/service/pm-suraksha-bima-yojana.html", "/service/pm-jan-dhan-yojana.html"],
  faq: [
    { q: "PMJJBY का क्लेम कैसे करें?", a: "मृतक का खाता जिस बैंक शाखा/डाकघर में था, वहां नॉमिनी क्लेम फॉर्म, मृत्यु प्रमाण पत्र, अपना पहचान पत्र और बैंक विवरण जमा करे। बैंक जांचकर बीमा कंपनी को भेजता है और ₹2 लाख नॉमिनी के खाते में आते हैं।" },
    { q: "PMSBY क्लेम के लिए कौन से कागज़ चाहिए?", a: "क्लेम फॉर्म, मृत्यु प्रमाण पत्र, FIR/पुलिस रिपोर्ट, पोस्टमार्टम रिपोर्ट, नॉमिनी का पहचान पत्र और बैंक विवरण। विकलांगता क्लेम में सरकारी डॉक्टर का प्रमाण पत्र।" },
    { q: "क्लेम कितने दिन के अंदर करना होता है?", a: "गाइडलाइन के अनुसार मृत्यु के बाद हो सके तो 30 दिन के अंदर। देर हो जाए तो भी क्लेम दें और देरी का कारण लिखें।" },
    { q: "नॉमिनी का नाम दर्ज नहीं था तो क्या होगा?", a: "तब कानूनी वारिस क्लेम कर सकते हैं; बैंक वारिस प्रमाण पत्र या अपने नियम के अनुसार कागज़ मांगेगा।" },
    { q: "क्लेम का भुगतान नहीं हो रहा, शिकायत कहां करें?", a: "पहले बैंक शाखा को लिखित रिमाइंडर दें और 1800-180-1111 पर बात करें। बैंक 30 दिन में हल न करे तो RBI लोकपाल (cms.rbi.org.in, 14448) में शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
