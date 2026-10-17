import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - No law requires waiting 24 hours before reporting a missing person. Delhi
//   High Court (July 2024; WION, JGU Child Rights Clinic reports) directed
//   that there be no waiting period in missing-children cases and that police
//   begin inquiry immediately irrespective of whether the missing person is a
//   minor or a major (binding on Delhi Police; cited as guidance elsewhere).
// - Supreme Court, Bachpan Bachao Andolan v. Union of India, WP (C) 75/2012,
//   orders of 2013: every complaint of a missing child to be registered as an
//   FIR and investigated immediately; MHA advisory of 25 June 2013 to all
//   States (Meghalaya DGP circular 02/2013, Vikaspedia copy of advisory).
// - BNSS 2023 s.173(1): information may be given at any police station
//   irrespective of where the offence occurred (zero FIR); free copy s.173(2).
// - TrackChild portal (trackthemissingchild.gov.in, MWCD) with the
//   Khoya-Paya citizen module (launched 2 June 2015) for reporting missing /
//   sighted children (Lok Sabha replies on eparlib).
// - Helplines: 112 (emergency), 1098 (child helpline).
// Procedures for adults vary by state SOPs (often a missing person report /
// GD entry, converted to FIR if foul play is suspected); stated generally.
export const missingPersonComplaintPolice: Letter = {
  slug: "missing-person-complaint-police",
  category: "police",
  emoji: "🔎",
  title: "Missing Person Complaint Letter in Hindi 2026: गुमशुदगी की रिपोर्ट",
  description: "परिवार का कोई सदस्य या बच्चा गुम हो जाए तो थाने में गुमशुदगी की शिकायत का पत्र (हिंदी/English)। 24 घंटे इंतज़ार ज़रूरी नहीं; बच्चे के मामले में FIR, TrackChild।",
  h1: "गुमशुदा व्यक्ति की शिकायत पत्र 2026: थाने में तुरंत रिपोर्ट करें",
  short: { hi: "गुमशुदगी की शिकायत", en: "Missing person complaint" },
  lead: "कोई व्यक्ति या बच्चा गुम हो जाए तो <strong>तुरंत</strong> नज़दीकी थाने में रिपोर्ट करें; <strong>24 घंटे इंतज़ार करने का कोई कानून नहीं है</strong>। सुप्रीम कोर्ट (बचपन बचाओ आंदोलन केस, 2013) के आदेश के अनुसार <strong>गुमशुदा बच्चे</strong> की हर शिकायत पर <strong>FIR</strong> दर्ज होती है। BNSS धारा 173 के तहत किसी भी थाने में सूचना दी जा सकती है। बच्चों के लिए सरकार का <strong>TrackChild / खोया-पाया</strong> पोर्टल और <strong>1098</strong> हेल्पलाइन भी है। नीचे जानकारी भरकर पत्र तैयार करें और ताज़ा फोटो साथ लगाएं।",
  facts: [
    ["कब रिपोर्ट करें", "तुरंत; 24 घंटे रुकने का नियम नहीं"],
    ["किसे दें", "नज़दीकी थाना प्रभारी (कोई भी थाना, ज़ीरो FIR)"],
    ["बच्चा गुम", "FIR अनिवार्य (सुप्रीम कोर्ट, 2013); 1098 पर भी बताएं"],
    ["हेल्पलाइन", "112 (आपातकाल), 1098 (बच्चे)"],
  ],
  to: "जहां व्यक्ति आखिरी बार देखा गया या जहां आप रहते हैं, उस <strong>थाने के प्रभारी (SHO)</strong> को। जल्दी में किसी भी नज़दीकी थाने में दे सकते हैं; वह सही थाने को भेजेगा।",
  when: [
    "बच्चा स्कूल/ट्यूशन/खेलने गया और घर नहीं लौटा",
    "बुज़ुर्ग (खासकर भूलने की बीमारी वाले) घर से निकले और लापता हैं",
    "परिवार का सदस्य काम/यात्रा पर गया और फोन बंद है, संपर्क नहीं हो रहा",
    "किसी के बहला-फुसलाकर ले जाने या अपहरण का शक है",
  ],
  fields: [
    { key: "station", label: { hi: "थाने का नाम और ज़िला", en: "Police station and district" }, required: true },
    { key: "name", label: { hi: "शिकायतकर्ता का नाम", en: "Complainant's name" }, required: true },
    { key: "relation", label: { hi: "गुमशुदा से रिश्ता", en: "Relation to missing person" }, required: true, placeholder: { hi: "जैसे: पिता / बेटा / पत्नी", en: "e.g. father / son / wife" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "mname", label: { hi: "गुमशुदा का नाम", en: "Missing person's name" }, required: true },
    { key: "mage", label: { hi: "उम्र और लिंग", en: "Age and gender" }, required: true, placeholder: { hi: "जैसे: 14 साल, लड़का", en: "e.g. 14 years, boy" } },
    { key: "looks", label: { hi: "हुलिया (कद, रंग, कपड़े, निशान, भाषा)", en: "Description (height, complexion, clothes, marks, language)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कद 5 फुट, गेहुंआ रंग, नीली शर्ट-काली पैंट, माथे पर चोट का निशान, हिंदी-भोजपुरी बोलता है", en: "e.g. 5 ft, wheatish, blue shirt-black trousers, scar on forehead, speaks Hindi-Bhojpuri" } },
    { key: "last", label: { hi: "आखिरी बार कब और कहां देखा", en: "Last seen (when and where)" }, required: true, placeholder: { hi: "जैसे: 15/10/2026 शाम 5 बजे, बस अड्डे के पास", en: "e.g. 15/10/2026, 5 pm, near the bus stand" } },
    { key: "mphone", label: { hi: "गुमशुदा का मोबाइल नंबर (अगर हो)", en: "Missing person's mobile (if any)" }, type: "tel" },
    { key: "details", label: { hi: "और जानकारी (किसी पर शक, बीमारी, साथ ले गया सामान)", en: "Other details (suspicion, illness, belongings taken)" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
थाना प्रभारी महोदय,
{{station}}

विषय: {{mname}} के गुमशुदा होने की सूचना एवं तुरंत तलाश हेतु आवेदन।

महोदय,

मैं, {{name}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि मेरे/मेरी {{relation}} {{mname}} ({{mage}}) लापता हैं। उन्हें आखिरी बार {{last}} देखा गया था। उसके बाद से उनका कोई पता नहीं है। हमने रिश्तेदारों, दोस्तों और आसपास के इलाकों में तलाश की, पर कोई जानकारी नहीं मिली।

हुलिया:
{{looks}}

गुमशुदा का मोबाइल नंबर: {{mphone}}

अन्य जानकारी:
{{details}}

अतः आपसे निवेदन है कि:
1. मेरी सूचना को तुरंत दर्ज करें (गुमशुदा नाबालिग होने पर माननीय सर्वोच्च न्यायालय के निर्देशानुसार FIR दर्ज करें) और मुझे उसकी प्रति दें;
2. गुमशुदा की तलाश तुरंत शुरू करें, मोबाइल लोकेशन/CCTV की जांच करें और आसपास के थानों, रेलवे स्टेशन, बस अड्डों तथा अस्पतालों को सूचना भेजें;
3. फोटो और विवरण पुलिस के गुमशुदा व्यक्ति पोर्टल पर डालें।

कोई भी जानकारी मिलने पर मुझे तुरंत सूचित करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न:
1. गुमशुदा की ताज़ा फोटो
2. गुमशुदा के पहचान पत्र (आधार/स्कूल ID) की कॉपी (यदि उपलब्ध हो)
3. शिकायतकर्ता के पहचान पत्र की कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Report of missing person {{mname}} and request for immediate search.

Sir,

I, {{name}}, resident of {{address}}, wish to inform you that my {{relation}} {{mname}} ({{mage}}) is missing. They were last seen {{last}}. Since then there has been no trace. We have searched with relatives, friends and nearby areas but found no information.

Description:
{{looks}}

Missing person's mobile number: {{mphone}}

Other details:
{{details}}

I therefore request you to:
1. Record my information immediately (if the missing person is a minor, register an FIR as directed by the Hon'ble Supreme Court) and give me a copy;
2. Start the search immediately, check mobile location/CCTV, and alert nearby police stations, railway stations, bus stands and hospitals;
3. Upload the photo and details on the police missing persons portal.

Kindly inform me immediately of any information.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures:
1. Recent photograph of the missing person
2. Copy of the missing person's ID (Aadhaar/school ID), if available
3. Copy of complainant's ID

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "गुमशुदा की ताज़ा, साफ फोटो (2-3 प्रिंट और मोबाइल में डिजिटल कॉपी)",
    "गुमशुदा का आधार/स्कूल ID/कोई पहचान पत्र, अगर मिल सके",
    "मोबाइल नंबर, सोशल मीडिया अकाउंट, दोस्तों के नंबर की सूची",
    "बीमारी हो (जैसे भूलने की बीमारी, मानसिक रोग) तो डॉक्टर का पर्चा",
  ],
  submit: [
    "देर न करें: तुरंत <strong>112</strong> पर सूचना दें और नज़दीकी थाने में यह पत्र फोटो के साथ जमा करें। FIR/रिपोर्ट नंबर और जांच अधिकारी का नाम-नंबर लें।",
    "बच्चा गुम हो तो <strong>1098</strong> पर भी बताएं और <a href=\"https://trackthemissingchild.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">TrackChild</a> पोर्टल के खोया-पाया हिस्से में जानकारी डालें।",
    "कई राज्यों के पुलिस सिटिजन पोर्टल पर गुमशुदा व्यक्ति की रिपोर्ट और 'अज्ञात शव/मिले व्यक्ति' की खोज की सुविधा है; उसे भी देखें।",
    "थाना रिपोर्ट न ले या टाले, तो तुरंत क्षेत्राधिकारी/पुलिस अधीक्षक को लिखें; बच्चे के मामले में ज़िला बाल संरक्षण इकाई/बाल कल्याण समिति को भी बताएं।",
  ],
  tips: [
    "आखिरी बार पहने कपड़े, चप्पल, बैग का रंग ज़रूर लिखें; यही पहचान में सबसे ज़्यादा काम आते हैं।",
    "सोशल मीडिया पर फोटो डालें तो अपना पूरा पता न डालें, सिर्फ थाने और अपना नंबर दें।",
    "फिरौती का फोन आए तो पुलिस को तुरंत बताएं; खुद पैसे न भेजें।",
    "व्यक्ति मिल जाए तो थाने को ज़रूर बताएं, ताकि रिपोर्ट बंद हो सके।",
  ],
  official: [
    { href: "https://trackthemissingchild.gov.in/", title: "TrackChild / खोया-पाया (महिला एवं बाल विकास मंत्रालय)", note: "गुमशुदा या मिले बच्चों की जानकारी" },
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल" },
  ],
  related: ["/support/helpline-directory.html"],
  faq: [
    { q: "क्या गुमशुदगी की रिपोर्ट के लिए 24 घंटे इंतज़ार करना पड़ता है?", a: "नहीं। ऐसा कोई कानून नहीं है। दिल्ली हाई कोर्ट ने 2024 में साफ कहा कि गुमशुदा के मामले में पुलिस तुरंत जांच शुरू करे। जितनी जल्दी रिपोर्ट करेंगे, ढूंढना उतना आसान होगा।" },
    { q: "बच्चा गुम हो जाए तो FIR होती है या सिर्फ रिपोर्ट?", a: "सुप्रीम कोर्ट ने 2013 में बचपन बचाओ आंदोलन केस में आदेश दिया कि गुमशुदा बच्चे की हर शिकायत FIR के रूप में दर्ज हो और तुरंत जांच शुरू हो।" },
    { q: "किस थाने में रिपोर्ट करें?", a: "जहां व्यक्ति आखिरी बार देखा गया, वहां का थाना सबसे सही है, पर आप किसी भी नज़दीकी थाने में सूचना दे सकते हैं (BNSS धारा 173, ज़ीरो FIR)।" },
    { q: "गुमशुदा बच्चे की ऑनलाइन जानकारी कहां दें?", a: "महिला एवं बाल विकास मंत्रालय के TrackChild पोर्टल (trackthemissingchild.gov.in) के खोया-पाया हिस्से में, और 1098 चाइल्ड हेल्पलाइन पर।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
