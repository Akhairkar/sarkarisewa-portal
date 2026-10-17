import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; oil company sites are blocked from the
// sandbox, so search extracts were used):
// - mylpg.in (MoPNG common LPG portal for Indane, Bharatgas, HP Gas) and
//   iocl.com/lpg-services: transfer, name change and KYC are handled by the
//   distributor; online services through each company's portal/app.
// - Distributor practice described consistently in search extracts
//   (bankbazaar.com Indane transfer / surrender guides, shriramfinance.in
//   "regularise or change the name on your LPG connection"): on death of the
//   holder, transfer to a family member with death certificate, declaration /
//   affidavit of the legal heir, KYC of the new holder and the original
//   Subscription Voucher (SV); moving to another town: surrender cylinder and
//   regulator, get Termination Voucher (TV) and deposit refund, then take a
//   new connection with the TV at the new town; same-town shift: KYC address
//   update / transfer advice. These are not from an official FAQ, so the page
//   asks readers to confirm with the distributor.
// - Business Today 12.03.2026 / lpg-cylinder-booking.ts research: toll-free
//   LPG complaint line 1800-2333-555; emergency 1906.
// Charges (fresh SV, documentation fee, deposit differences) are not stated.
export const lpgConnectionTransferApplication: Letter = {
  slug: "lpg-connection-transfer-application",
  category: "utility",
  emoji: "🔥",
  title: "LPG Gas Connection Transfer Letter in Hindi 2026: गैस कनेक्शन नाम ट्रांसफर",
  description: "गैस कनेक्शन (Indane, HP, Bharatgas) दूसरे के नाम ट्रांसफर या नाम बदलने का आवेदन पत्र (हिंदी/English)। मृत्यु पर वारिस, ज़रूरी कागज़ और शिकायत नंबर।",
  h1: "गैस कनेक्शन ट्रांसफर / नाम परिवर्तन आवेदन पत्र 2026",
  short: { hi: "गैस कनेक्शन नाम ट्रांसफर", en: "LPG connection transfer" },
  lead: "LPG गैस कनेक्शन किसी दूसरे परिवार सदस्य के नाम करवाने (जैसे धारक की मृत्यु के बाद) या दूसरी एजेंसी में ट्रांसफर करवाने के लिए अपनी <strong>गैस एजेंसी (डिस्ट्रीब्यूटर)</strong> को आवेदन दिया जाता है। आम तौर पर मूल <strong>सब्सक्रिप्शन वाउचर (SV)</strong>, नए व्यक्ति का KYC और रिश्ते/वारिस का प्रमाण लगता है। दूसरे शहर जाने पर पुरानी एजेंसी से <strong>टर्मिनेशन वाउचर (TV)</strong> लेकर नई जगह कनेक्शन लिया जाता है।",
  facts: [
    ["किसे दें", "जिस गैस एजेंसी (डिस्ट्रीब्यूटर) से कनेक्शन है, उसके प्रबंधक को"],
    ["ज़रूरी कागज़", "मूल SV, नए धारक का KYC/पहचान, मृत्यु पर मृत्यु प्रमाण पत्र और वारिस का घोषणा पत्र"],
    ["फीस", "दस्तावेज़ शुल्क/जमा राशि का अंतर कंपनी तय करती है; एजेंसी से पूछें"],
    ["शिकायत", "टोल-फ्री LPG शिकायत 1800-2333-555; कंपनी पोर्टल; CPGRAMS"],
  ],
  to: "जिस <strong>गैस एजेंसी / डिस्ट्रीब्यूटर</strong> से आपका कनेक्शन है, उसके प्रबंधक (Manager) को। एजेंसी का नाम और उपभोक्ता संख्या आपकी गैस पासबुक या बुकिंग SMS में होती है।",
  when: [
    "कनेक्शन धारक (पिता, माता, पति आदि) की मृत्यु के बाद कनेक्शन अपने नाम करवाना हो",
    "धारक जीवित है पर कनेक्शन परिवार के दूसरे सदस्य के नाम करना चाहता है",
    "उसी शहर में घर बदला है और नज़दीकी एजेंसी में कनेक्शन ले जाना है",
    "दूसरे शहर जा रहे हैं और कनेक्शन वहां ले जाना है (टर्मिनेशन वाउचर)",
  ],
  fields: [
    { key: "agency", label: { hi: "गैस एजेंसी का नाम और पता", en: "Gas agency name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: श्री राम इंडेन गैस सर्विस, स्टेशन रोड, सीतापुर", en: "e.g. Shri Ram Indane Gas Service, Station Road, Sitapur" } },
    { key: "company", label: { hi: "गैस कंपनी", en: "Oil company" }, type: "select", options: [
      { hi: "इंडेन (IndianOil)", en: "Indane (IndianOil)" },
      { hi: "भारतगैस (BPCL)", en: "Bharatgas (BPCL)" },
      { hi: "एचपी गैस (HPCL)", en: "HP Gas (HPCL)" },
    ] },
    { key: "consumer", label: { hi: "उपभोक्ता संख्या", en: "Consumer number" }, required: true },
    { key: "oldname", label: { hi: "अभी किसके नाम है", en: "Present holder's name" }, required: true },
    { key: "name", label: { hi: "नए धारक का नाम (आपका नाम)", en: "New holder's name (your name)" }, required: true },
    { key: "relation", label: { hi: "पुराने धारक से रिश्ता", en: "Relation with present holder" }, placeholder: { hi: "जैसे: पुत्र / पत्नी", en: "e.g. son / wife" } },
    { key: "request", label: { hi: "क्या करवाना है", en: "Request" }, type: "select", options: [
      { hi: "धारक की मृत्यु हो गई है; कनेक्शन मेरे नाम ट्रांसफर किया जाए (मृत्यु प्रमाण पत्र और वारिस का घोषणा पत्र संलग्न)", en: "The holder has died; transfer the connection to my name (death certificate and legal heir declaration enclosed)" },
      { hi: "धारक की सहमति से कनेक्शन परिवार के सदस्य के रूप में मेरे नाम ट्रांसफर किया जाए (सहमति पत्र संलग्न)", en: "Transfer the connection to my name as a family member with the holder's consent (consent letter enclosed)" },
      { hi: "मैं दूसरे शहर जा रहा/रही हूं; कनेक्शन बंद कर टर्मिनेशन वाउचर (TV) और जमा राशि दी जाए", en: "I am moving to another town; terminate the connection and issue Termination Voucher (TV) with deposit refund" },
      { hi: "उसी शहर में पता बदला है; कनेक्शन नज़दीकी एजेंसी में ट्रांसफर किया जाए", en: "My address has changed in the same town; transfer the connection to the nearest agency" },
    ] },
    { key: "address", label: { hi: "पता (नया पता हो तो वह)", en: "Address (new address if changed)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रबंधक महोदय,
{{agency}}
({{company}})

विषय: गैस कनेक्शन उपभोक्ता संख्या {{consumer}} के ट्रांसफर / नाम परिवर्तन हेतु आवेदन।

महोदय,

सविनय निवेदन है कि आपकी एजेंसी में उपभोक्ता संख्या {{consumer}} का LPG कनेक्शन श्री/श्रीमती {{oldname}} के नाम पर है। मैं, {{name}}, उनका/उनकी {{relation}} हूं।

मेरा अनुरोध: {{request}}।

मेरा पता:
{{address}}

मैं मूल सब्सक्रिप्शन वाउचर (SV), सिलेंडर/रेगुलेटर से जुड़े कागज़ और अपना KYC जमा कर रहा/रही हूं। नियमानुसार जो भी शुल्क या अतिरिक्त जमा राशि लगेगी, वह देने को तैयार हूं। कृपया आवश्यक कार्रवाई करें और आवेदन की पावती दें। मेरे नाम ट्रांसफर होने पर सब्सिडी के लिए मेरा आधार और बैंक खाता जोड़ा जाए।

संलग्न:
1. मूल सब्सक्रिप्शन वाउचर (SV) / गैस पासबुक
2. मेरे पहचान व पते के प्रमाण की स्व-प्रमाणित कॉपी (आधार आदि) और फोटो
3. मृत्यु प्रमाण पत्र और वारिस का घोषणा पत्र / धारक का सहमति पत्र (जो लागू हो)

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Manager,
{{agency}}
({{company}})

Subject: Application for transfer / change of name of LPG connection, consumer no. {{consumer}}.

Sir,

The LPG connection with consumer no. {{consumer}} at your agency is in the name of Mr/Ms {{oldname}}. I, {{name}}, am his/her {{relation}}.

My request: {{request}}.

My address:
{{address}}

I am submitting the original Subscription Voucher (SV), the cylinder/regulator papers and my KYC. I am ready to pay any charges or additional deposit as per rules. Kindly take the necessary action and give me an acknowledgement. On transfer to my name, please link my Aadhaar and bank account for subsidy.

Enclosures:
1. Original Subscription Voucher (SV) / gas passbook
2. Self-attested copy of my identity and address proof (Aadhaar etc.) and photograph
3. Death certificate and legal heir declaration / holder's consent letter (as applicable)

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "मूल सब्सक्रिप्शन वाउचर (SV) और गैस पासबुक; SV खो गया हो तो एजेंसी शपथ पत्र मांग सकती है",
    "नए धारक का KYC: आधार, पते का प्रमाण और फोटो",
    "मृत्यु के मामले में: मृत्यु प्रमाण पत्र और वारिस का घोषणा पत्र/शपथ पत्र (कई जगह बाकी वारिसों की अनापत्ति भी)",
    "सब्सिडी के लिए नए धारक के बैंक खाते का विवरण (पासबुक की कॉपी)",
  ],
  submit: [
    "यह पत्र और कागज़ लेकर अपनी गैस एजेंसी जाएं; एजेंसी कंपनी का तय फॉर्म भी भरवाएगी।",
    "जमा करने पर पावती लें; नए SV या टर्मिनेशन वाउचर (TV) की रसीद संभाल कर रखें।",
    "दूसरे शहर में TV लेकर वहां की किसी एजेंसी में नया कनेक्शन लें; KYC दोबारा होगा।",
    "एजेंसी टालमटोल करे तो कंपनी के पोर्टल/ऐप पर या टोल-फ्री <strong>1800-2333-555</strong> पर शिकायत करें; फिर भी हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।",
  ],
  tips: [
    "मूल SV कभी न खोएं; ट्रांसफर और जमा राशि वापसी दोनों में इसकी ज़रूरत होती है।",
    "धारक की मृत्यु के बाद भी पुराने नाम से बुकिंग करते रहना ठीक नहीं; जल्द नाम बदलवाएं ताकि सब्सिडी सही खाते में आए।",
    "उज्ज्वला कनेक्शन महिला के नाम होता है; उसके ट्रांसफर के नियम एजेंसी से अलग से पूछें।",
    "गैस रिसाव हो तो पत्र नहीं, तुरंत <strong>1906</strong> पर कॉल करें।",
  ],
  notice: "हर तेल कंपनी (Indane, Bharatgas, HP Gas) अपना फॉर्म और कागज़ की सूची रखती है। यह पत्र एजेंसी के फॉर्म के साथ लगाने के लिए है; शुल्क और ज़रूरी कागज़ एजेंसी से पहले पूछ लें।",
  official: [
    { href: "https://www.mylpg.in/", title: "MyLPG (तीनों कंपनियों का साझा LPG पोर्टल)" },
    { href: "https://iocl.com/lpg-services", title: "IndianOil LPG सेवाएं (Indane)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/lpg-cylinder-booking.html", "/service/lpg-subsidy-pahal.html", "/service/pm-ujjwala-yojana.html"],
  faq: [
    { q: "गैस कनेक्शन दूसरे के नाम कैसे ट्रांसफर करें?", a: "अपनी गैस एजेंसी में आवेदन दें, साथ में मूल सब्सक्रिप्शन वाउचर (SV), नए व्यक्ति का KYC और धारक की सहमति या मृत्यु के मामले में मृत्यु प्रमाण पत्र व वारिस का घोषणा पत्र लगाएं। आम तौर पर परिवार के सदस्य के नाम ही ट्रांसफर होता है।" },
    { q: "पिता की मृत्यु के बाद गैस कनेक्शन अपने नाम कैसे करें?", a: "मृत्यु प्रमाण पत्र, वारिस का घोषणा पत्र/शपथ पत्र, मूल SV और अपना आधार लेकर एजेंसी जाएं। कई एजेंसियां बाकी वारिसों की अनापत्ति भी मांगती हैं।" },
    { q: "दूसरे शहर में गैस कनेक्शन कैसे ले जाएं?", a: "पुरानी एजेंसी में सिलेंडर और रेगुलेटर लौटाकर टर्मिनेशन वाउचर (TV) लें। नए शहर में उसी कंपनी की किसी एजेंसी में TV जमा करके नया कनेक्शन लें। जमा राशि का हिसाब कंपनी के नियम से होता है।" },
    { q: "SV (सब्सक्रिप्शन वाउचर) खो जाए तो क्या करें?", a: "एजेंसी से पूछें; आम तौर पर गुम होने का शपथ पत्र देकर काम होता है। कुछ मामलों में पुलिस में गुमशुदगी की सूचना की कॉपी भी मांगी जाती है।" },
    { q: "गैस एजेंसी की शिकायत कहां करें?", a: "पहले तेल कंपनी के पोर्टल/ऐप पर या टोल-फ्री 1800-2333-555 पर। हल न हो तो CPGRAMS (pgportal.gov.in) पर शिकायत दर्ज करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
