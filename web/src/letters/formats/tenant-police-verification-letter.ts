import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same research as
// web/src/guides/rent/police.ts, 4 Oct 2026):
// - Delhi Police Citizen's Charter (delhipolice.gov.in) item 6(e): owners must
//   inform local police whenever they keep a tenant; tenant registration on
//   cctns.delhipolice.gov.in/citizenservices/.
// - Maharashtra Police "instruction regarding tenants" and ApplicationForm.pdf
//   (mahapolice.gov.in): form addressed to the police station in-charge with
//   landlord, premises, tenant, agent, rent period, tenant photo and ID
//   (DL/Aadhaar/election card/passport), employer details; signed by landlord
//   and tenant.
// - UP Police citizen portal (uppolice.gov.in): Tenant/PG Verification online.
// - Haryana Police citizen services (haryanapolice.gov.in/CitizenServiceFee
//   .aspx): Tenant Verification Rs 50, 21 days (other district/state).
// - Such duties usually come from orders of the District Magistrate / Police
//   Commissioner under BNSS s.163 (earlier CrPC s.144); disobeying a duly
//   promulgated order is punishable under BNS s.223 (earlier IPC s.188).
// Fees and forms differ by state; only Haryana's figure is verified, so the
// letter does not state a fee.
export const tenantPoliceVerificationLetter: Letter = {
  slug: "tenant-police-verification-letter",
  category: "police",
  emoji: "🏘️",
  title: "Tenant Police Verification Letter in Hindi 2026: किरायेदार सत्यापन पत्र",
  description: "मकान मालिक की ओर से थाने को किरायेदार पुलिस वेरिफिकेशन का कवरिंग पत्र (हिंदी/English)। ज़रूरी कागज़, ऑनलाइन पोर्टल और किन बातों का ध्यान रखें।",
  h1: "किरायेदार पुलिस वेरिफिकेशन पत्र 2026",
  short: { hi: "किरायेदार पुलिस सत्यापन पत्र", en: "Tenant police verification" },
  lead: "मकान/दुकान किराये पर देने पर मकान मालिक को किरायेदार की जानकारी <strong>स्थानीय थाने</strong> को देनी होती है। कई राज्यों में यह राज्य पुलिस के <strong>सिटिजन पोर्टल पर ऑनलाइन</strong> होता है (जैसे दिल्ली, उत्तर प्रदेश, हरियाणा), और कई जगह थाने का तय फॉर्म भरकर किरायेदार की फोटो और पहचान पत्र के साथ जमा होता है। यह पत्र फॉर्म के साथ लगाने वाला कवरिंग पत्र है, जिससे जमा करने का लिखित रिकॉर्ड बनता है।",
  facts: [
    ["किसे दें", "जिस इलाके में मकान है, उस थाने के प्रभारी (SHO)"],
    ["कौन दे", "मकान मालिक (किरायेदार के साथ हस्ताक्षर)"],
    ["ऑनलाइन", "कई राज्यों के पुलिस सिटिजन पोर्टल पर 'Tenant Verification' सेवा"],
    ["फीस", "राज्य के हिसाब से अलग (जैसे हरियाणा ₹50); कई जगह मुफ्त, थाने से पूछें"],
  ],
  to: "जिस इलाके में किराये का मकान/दुकान है, उस <strong>थाने के प्रभारी (SHO)</strong> को। किरायेदार दूसरे ज़िले/राज्य का हो तो पुलिस उसके स्थायी पते के थाने से भी जांच कराती है।",
  when: [
    "नया किरायेदार या PG रखा है",
    "दुकान, गोदाम या कमरा किराये पर दिया है",
    "थाने या ज़िला प्रशासन ने किरायेदारों का सत्यापन कराने को कहा है",
    "ऑनलाइन आवेदन के बाद थाने में कागज़ जमा करने को कहा गया",
  ],
  fields: [
    { key: "station", label: { hi: "थाने का नाम और ज़िला", en: "Police station and district" }, required: true, placeholder: { hi: "जैसे: थाना सेक्टर 39, नोएडा", en: "e.g. Sector 39 Police Station, Noida" } },
    { key: "owner", label: { hi: "मकान मालिक का नाम", en: "Landlord's name" }, required: true },
    { key: "owneraddress", label: { hi: "मकान मालिक का पता", en: "Landlord's address" }, type: "textarea", required: true },
    { key: "ownerphone", label: { hi: "मकान मालिक का मोबाइल", en: "Landlord's mobile" }, type: "tel", required: true },
    { key: "premises", label: { hi: "किराये पर दी गई जगह का पता", en: "Address of rented premises" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मकान नं. 45, दूसरी मंज़िल, सेक्टर 39, नोएडा", en: "e.g. House 45, second floor, Sector 39, Noida" } },
    { key: "tenant", label: { hi: "किरायेदार का नाम (परिवार के सदस्य भी)", en: "Tenant's name (and family members)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सुनील कुमार (35), पत्नी रीना (32), बेटा अमन (8)", en: "e.g. Sunil Kumar (35), wife Reena (32), son Aman (8)" } },
    { key: "tenantaddress", label: { hi: "किरायेदार का स्थायी पता", en: "Tenant's permanent address" }, type: "textarea", required: true },
    { key: "tenantphone", label: { hi: "किरायेदार का मोबाइल", en: "Tenant's mobile" }, type: "tel", required: true },
    { key: "work", label: { hi: "किरायेदार का काम / कहां काम करता है", en: "Tenant's occupation / employer" }, placeholder: { hi: "जैसे: ABC प्रा. लि., सेक्टर 62 में अकाउंटेंट", en: "e.g. Accountant, ABC Pvt Ltd, Sector 62" } },
    { key: "from", label: { hi: "किराये पर कब से", en: "Tenancy start date" }, required: true, placeholder: { hi: "जैसे: 01/10/2026 से", en: "e.g. from 01/10/2026" } },
    { key: "idproof", label: { hi: "किरायेदार का पहचान पत्र (प्रकार)", en: "Tenant's ID proof (type)" }, type: "select", options: [
      { hi: "आधार कार्ड", en: "Aadhaar card" },
      { hi: "वोटर ID कार्ड", en: "Voter ID card" },
      { hi: "ड्राइविंग लाइसेंस", en: "Driving licence" },
      { hi: "पासपोर्ट", en: "Passport" },
    ] },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान थाना प्रभारी महोदय,
{{station}}

विषय: किरायेदार के पुलिस सत्यापन (Tenant Verification) हेतु आवेदन।

महोदय,

निवेदन है कि मैं, {{owner}}, निवासी {{owneraddress}}, अपनी निम्नलिखित संपत्ति का भाग किराये पर दे रहा/रही हूं:
{{premises}}

किरायेदार का विवरण:
नाम (परिवार सहित): {{tenant}}
स्थायी पता: {{tenantaddress}}
मोबाइल: {{tenantphone}}
काम/नियोक्ता: {{work}}
किराये की शुरुआत: {{from}}
पहचान पत्र: {{idproof}} (कॉपी संलग्न)

अतः निवेदन है कि उपरोक्त किरायेदार का पुलिस सत्यापन करने की कृपा करें और इस आवेदन की प्राप्ति रसीद दें। सत्यापन में कोई प्रतिकूल बात पाई जाए तो कृपया मुझे सूचित करें।

भवदीय/भवदीया,

(मकान मालिक के हस्ताक्षर)
नाम: {{owner}}
मोबाइल: {{ownerphone}}

(किरायेदार के हस्ताक्षर)
नाम: {{tenant}}

संलग्न:
1. थाने का भरा हुआ किरायेदार सत्यापन फॉर्म (यदि लागू हो)
2. किरायेदार की पासपोर्ट साइज़ फोटो
3. किरायेदार के पहचान पत्र और स्थायी पते के प्रमाण की स्व-प्रमाणित कॉपी
4. किरायानामे (रेंट एग्रीमेंट) की कॉपी
5. मकान मालिक के पहचान पत्र की कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Application for police verification of tenant.

Sir,

I, {{owner}}, resident of {{owneraddress}}, am letting out the following premises:
{{premises}}

Details of the tenant:
Name (with family): {{tenant}}
Permanent address: {{tenantaddress}}
Mobile: {{tenantphone}}
Occupation/employer: {{work}}
Tenancy from: {{from}}
ID proof: {{idproof}} (copy enclosed)

I request you to kindly carry out police verification of the above tenant and give me an acknowledgement of this application. Please inform me if anything adverse is found in the verification.

Yours faithfully,

(Signature of landlord)
Name: {{owner}}
Mobile: {{ownerphone}}

(Signature of tenant)
Name: {{tenant}}

Enclosures:
1. Filled tenant verification form of the police station (if applicable)
2. Passport size photograph of the tenant
3. Self-attested copy of tenant's ID and permanent address proof
4. Copy of rent agreement
5. Copy of landlord's ID proof

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "थाने/राज्य पुलिस का तय किरायेदार सत्यापन फॉर्म (भरा हुआ, दोनों के हस्ताक्षर)",
    "किरायेदार की फोटो और पहचान पत्र (आधार/वोटर/DL/पासपोर्ट) की स्व-प्रमाणित कॉपी",
    "किरायेदार के स्थायी पते का प्रमाण; नौकरी करता हो तो नियोक्ता का विवरण",
    "रेंट एग्रीमेंट और मकान मालिक के पहचान पत्र की कॉपी",
  ],
  submit: [
    "पहले अपने राज्य की पुलिस वेबसाइट/ऐप पर 'Tenant Verification' सेवा देखें; ऑनलाइन हो तो वहीं फॉर्म भरकर कागज़ अपलोड करें और आवेदन संख्या लें।",
    "ऑफलाइन हो तो यह पत्र, थाने का फॉर्म और कागज़ थाने में जमा करें और <strong>मुहर लगी रिसीविंग</strong> लें।",
    "पुलिस किरायेदार के स्थायी पते के थाने से जांच कराती है; इसमें समय लग सकता है। स्थिति पोर्टल या थाने से पूछें।",
    "थाना आवेदन न ले तो पुलिस के ऑनलाइन शिकायत पोर्टल पर या SP/DCP कार्यालय में लिखित शिकायत दें।",
  ],
  tips: [
    "किरायेदार को चाबी देने से पहले ही सत्यापन का आवेदन कर दें।",
    "आधार की कॉपी पर 'सिर्फ पुलिस सत्यापन हेतु' लिखकर हस्ताक्षर करें; बिना ज़रूरत पूरा आधार नंबर कहीं न लिखें।",
    "कई ज़िलों में DM/पुलिस आयुक्त किरायेदार की सूचना देने का आदेश (BNSS धारा 163) जारी करते हैं; न मानने पर BNS धारा 223 के तहत कार्रवाई हो सकती है।",
    "रिसीविंग और सत्यापन रिपोर्ट की कॉपी संभाल कर रखें।",
  ],
  notice: "किरायेदार सत्यापन का फॉर्म, शुल्क और तरीका हर राज्य की पुलिस अलग रखती है; कई राज्यों में यह सिर्फ ऑनलाइन होता है। यह पत्र फॉर्म के साथ लगाने के लिए है।",
  official: [
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल के लिंक" },
    { href: "https://cctns.delhipolice.gov.in/citizenservices/", title: "दिल्ली पुलिस सिटिजन सर्विसेज़", note: "किरायेदार रजिस्ट्रेशन" },
    { href: "https://uppolice.gov.in/", title: "उत्तर प्रदेश पुलिस", note: "Tenant/PG Verification" },
  ],
  related: ["/rent-agreement/tenant-police-verification.html", "/rent-agreement/format.html", "/rent-agreement/"],
  faq: [
    { q: "किरायेदार का पुलिस वेरिफिकेशन कैसे कराएं?", a: "राज्य पुलिस के सिटिजन पोर्टल पर 'Tenant Verification' सेवा में ऑनलाइन आवेदन करें, या थाने का फॉर्म भरकर किरायेदार की फोटो, पहचान पत्र और रेंट एग्रीमेंट के साथ थाने में जमा करें और रिसीविंग लें।" },
    { q: "किरायेदार वेरिफिकेशन कौन कराता है?", a: "ज़िम्मेदारी मकान मालिक की होती है; फॉर्म पर मकान मालिक और किरायेदार दोनों के हस्ताक्षर होते हैं।" },
    { q: "किरायेदार वेरिफिकेशन की फीस कितनी है?", a: "राज्य के हिसाब से अलग है। जैसे हरियाणा पुलिस के पोर्टल पर किरायेदार सत्यापन का शुल्क ₹50 लिखा है; कई राज्यों में यह मुफ्त है। अपने राज्य की पुलिस वेबसाइट देखें।" },
    { q: "वेरिफिकेशन न कराने पर क्या होता है?", a: "जहां DM/पुलिस आयुक्त ने आदेश जारी किया है, वहां आदेश न मानना BNS धारा 223 के तहत दंडनीय हो सकता है। साथ ही किसी घटना की स्थिति में मकान मालिक को परेशानी हो सकती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
