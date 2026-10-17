import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity Act 2003 s.56(1) (courtbook.in reproduction; applied in
//   Bombay HC and DERC orders): disconnection for non-payment only after not
//   less than 15 clear days' written notice; proviso: supply not cut if the
//   consumer deposits under protest the sum claimed or the average monthly
//   charge of the preceding six months, whichever is less, pending disposal
//   of the dispute. s.56(2): no sum recoverable after two years from when it
//   first became due unless shown continuously as arrears.
// - Electricity (Rights of Consumers) Rules, 2020 and Amendment Rules, 2024
//   (notified 22.02.2024; summaries in SCC Online, Powerline): licensee to
//   install an additional check meter within 5 days of a complaint about meter
//   reading; complaints via portal/app/registered post; grievance officer.
// - Electricity Act 2003 s.42(5) Consumer Grievance Redressal Forum, s.42(6)
//   Electricity Ombudsman. Forum/Ombudsman time limits are in each state
//   commission's regulations, so none is stated.
export const electricityBillCorrectionApplication: Letter = {
  slug: "electricity-bill-correction-application",
  category: "utility",
  emoji: "🧾",
  title: "Wrong Electricity Bill Complaint in Hindi 2026: बिजली बिल सुधार आवेदन",
  description: "गलत या ज़्यादा बिजली बिल ठीक करवाने का शिकायत पत्र (हिंदी/English)। विवाद में कितना जमा करें ताकि कनेक्शन न कटे, चेक मीटर और CGRF/लोकपाल का रास्ता।",
  h1: "गलत बिजली बिल सुधार आवेदन पत्र 2026",
  short: { hi: "गलत बिजली बिल शिकायत", en: "Wrong electricity bill" },
  lead: "बिजली बिल में गलत रीडिंग, औसत (एवरेज) बिल, पुराना बकाया या ज़्यादा राशि आए तो DISCOM के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता (राजस्व)</strong> को लिखित शिकायत दें। बिजली अधिनियम 2003 की <strong>धारा 56(1)</strong> के अनुसार विवाद चलते समय आप बिल की राशि या पिछले 6 महीने के औसत मासिक बिल में से <strong>जो कम हो, वह विरोध के साथ (under protest)</strong> जमा करें तो कनेक्शन नहीं काटा जा सकता। मीटर रीडिंग पर शिकायत होने पर 2024 संशोधन नियमों में 5 दिन के अंदर चेक मीटर लगाने का प्रावधान है।",
  facts: [
    ["किसे दें", "DISCOM उपखंड कार्यालय के SDO / सहायक अभियंता (राजस्व)"],
    ["कनेक्शन बचाने के लिए", "बिल राशि या पिछले 6 महीने का औसत, जो कम हो, विरोध के साथ जमा करें (धारा 56(1))"],
    ["पुराना बकाया", "2 साल से पुरानी राशि, जो लगातार बकाया के रूप में न दिखाई गई हो, वसूल नहीं हो सकती (धारा 56(2))"],
    ["आगे शिकायत", "उपभोक्ता शिकायत निवारण फोरम (CGRF) → विद्युत लोकपाल"],
  ],
  to: "जिस सब-डिवीजन से बिल आता है, उसके <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता (राजस्व)</strong> को। साथ में DISCOM के शिकायत नंबर या पोर्टल पर भी शिकायत दर्ज करके नंबर लें।",
  when: [
    "मीटर में कम रीडिंग है पर बिल में ज़्यादा यूनिट लिखे हैं",
    "मीटर पढ़े बिना औसत (Average / Provisional) बिल भेजा गया",
    "बहुत पुराना बकाया, गलत लोड, गलत श्रेणी (घरेलू की जगह व्यावसायिक) या दोबारा जुड़ा भुगतान",
    "जमा किया गया भुगतान बिल में नहीं दिखा",
    "मीटर खराब या तेज़ चलने का शक है और जांच करानी है",
  ],
  fields: [
    { key: "office", label: { hi: "बिजली दफ्तर का नाम और पता", en: "Electricity office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सहायक अभियंता (राजस्व), विद्युत उपखंड, कोटा", en: "e.g. Assistant Engineer (Revenue), Electricity Sub-Division, Kota" } },
    { key: "name", label: { hi: "उपभोक्ता का नाम", en: "Consumer's name" }, required: true },
    { key: "consumer", label: { hi: "उपभोक्ता / खाता संख्या", en: "Consumer / account number" }, required: true },
    { key: "meter", label: { hi: "मीटर नंबर", en: "Meter number" } },
    { key: "address", label: { hi: "कनेक्शन का पता", en: "Address of connection" }, type: "textarea", required: true },
    { key: "billno", label: { hi: "विवादित बिल का महीना / बिल नं.", en: "Disputed bill month / bill no." }, required: true, placeholder: { hi: "जैसे: सितंबर 2026, बिल नं. ___", en: "e.g. September 2026, bill no. ___" } },
    { key: "amount", label: { hi: "बिल में लिखी राशि (₹)", en: "Amount billed (Rs)" }, type: "number", required: true },
    { key: "problem", label: { hi: "गलती क्या है", en: "Nature of error" }, type: "select", options: [
      { hi: "मीटर की असली रीडिंग से ज़्यादा यूनिट का बिल बना है", en: "Units billed are more than the actual meter reading" },
      { hi: "मीटर पढ़े बिना औसत (Average) बिल भेजा गया है", en: "An average bill was sent without reading the meter" },
      { hi: "पहले जमा किया भुगतान बिल में नहीं जोड़ा गया", en: "My earlier payment has not been credited" },
      { hi: "गलत बकाया / गलत लोड या श्रेणी के आधार पर राशि जोड़ी गई है", en: "Wrong arrears / wrong load or category charged" },
      { hi: "मीटर खराब है या तेज़ चल रहा है", en: "The meter is faulty or running fast" },
    ] },
    { key: "details", label: { hi: "पूरी बात (रीडिंग, तारीख, पिछला बिल)", en: "Details (reading, dates, earlier bills)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 05/10/2026 को मीटर रीडिंग 4,512 थी, बिल में 5,890 लिखी है। पिछले 6 महीने का बिल ₹700-900 आता था।", en: "e.g. Meter showed 4,512 on 05/10/2026 but bill says 5,890. Bills for last 6 months were Rs 700-900." } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: उपभोक्ता संख्या {{consumer}} के गलत बिजली बिल ({{billno}}) में सुधार हेतु शिकायत।

महोदय/महोदया,

मैं, {{name}}, उपभोक्ता संख्या {{consumer}} (मीटर नं. {{meter}}) का धारक हूं। कनेक्शन का पता:
{{address}}

मुझे {{billno}} का ₹{{amount}} का बिल मिला है, जो गलत है। {{problem}}।

विवरण:
{{details}}

अतः निवेदन है कि:
1. मीटर की वास्तविक रीडिंग की जांच कराकर / आवश्यकता हो तो चेक मीटर लगाकर बिल को सही किया जाए;
2. संशोधित बिल जारी होने तक इस विवादित राशि के लिए मेरा कनेक्शन न काटा जाए। बिजली अधिनियम 2003 की धारा 56(1) के अनुसार मैं विवाद के निपटारे तक नियमानुसार राशि विरोध के साथ (under protest) जमा करने को तैयार हूं;
3. शिकायत की पावती/शिकायत संख्या और की गई कार्रवाई की लिखित जानकारी दी जाए।

संलग्न:
1. विवादित बिल की कॉपी
2. पिछले बिलों / भुगतान रसीदों की कॉपी
3. मीटर रीडिंग की फोटो (तारीख सहित)

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint for correction of wrong electricity bill ({{billno}}) of consumer no. {{consumer}}.

Sir/Madam,

I, {{name}}, am the holder of consumer no. {{consumer}} (meter no. {{meter}}) at the following address:
{{address}}

I have received a bill of Rs {{amount}} for {{billno}}, which is incorrect. {{problem}}.

Details:
{{details}}

I therefore request that:
1. The actual meter reading be checked, and a check meter installed if needed, and the bill be corrected;
2. My supply not be disconnected for this disputed amount until a revised bill is issued. As per Section 56(1) of the Electricity Act, 2003, I am ready to deposit the amount due under the rules under protest pending disposal of this dispute;
3. I be given an acknowledgement / complaint number and written information on the action taken.

Enclosures:
1. Copy of the disputed bill
2. Copies of earlier bills / payment receipts
3. Dated photograph of the meter reading

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "विवादित बिल की कॉपी",
    "पिछले 6–12 महीने के बिल और भुगतान रसीदें (औसत दिखाने के लिए)",
    "मीटर की ताज़ा रीडिंग की फोटो, जिसमें तारीख दिखे",
    "पहले की गई शिकायत का नंबर हो तो वह",
  ],
  submit: [
    "DISCOM के शिकायत नंबर, ऐप या पोर्टल पर बिल की शिकायत दर्ज करें और शिकायत नंबर लिख लें।",
    "यह पत्र उपखंड कार्यालय में हाथ से दें और कॉपी पर पावती लें, या रजिस्टर्ड डाक से भेजें।",
    "कनेक्शन कटने से बचाने के लिए विवादित बिल की राशि या पिछले 6 महीने का औसत, जो कम हो, <strong>विरोध के साथ (under protest)</strong> जमा करें और रसीद रखें।",
    "जवाब न मिले या जवाब गलत हो तो अपनी DISCOM के <strong>उपभोक्ता शिकायत निवारण फोरम (CGRF)</strong> में शिकायत करें; फोरम के फैसले से संतुष्ट न हों तो <strong>विद्युत लोकपाल</strong> के पास जाएं।",
  ],
  tips: [
    "शिकायत से पहले मीटर की रीडिंग की तारीख वाली फोटो ज़रूर लें।",
    "पूरा बिल न भर पाएं तो भी कुछ न जमा करना गलत है; ऊपर बताई राशि विरोध के साथ जमा करें।",
    "पत्र में भावनाएं नहीं, आंकड़े लिखें: पुरानी रीडिंग, नई रीडिंग, पिछले बिल।",
    "लाइनमैन को नकद देकर 'बिल ठीक' न कराएं; सुधार सिर्फ लिखित आदेश और नए बिल से मानें।",
  ],
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय (Ministry of Power)", note: "बिजली अधिनियम और उपभोक्ता अधिकार नियम" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/electricity-connection-bill.html", "/service/consumer-grievance-redressal.html", "/service/bharat-billpay-bbps-online.html"],
  faq: [
    { q: "गलत बिजली बिल की शिकायत कहां करें?", a: "पहले DISCOM के शिकायत नंबर/ऐप/पोर्टल पर, फिर लिखित पत्र उपखंड कार्यालय (SDO) में। हल न हो तो उपभोक्ता शिकायत निवारण फोरम (CGRF) और उसके बाद विद्युत लोकपाल।" },
    { q: "विवादित बिल में कितना पैसा जमा करें ताकि कनेक्शन न कटे?", a: "बिजली अधिनियम की धारा 56(1) के अनुसार बिल की राशि या पिछले 6 महीने के औसत मासिक बिल में से जो कम हो, वह विरोध के साथ जमा करने पर विवाद के निपटारे तक कनेक्शन नहीं काटा जा सकता।" },
    { q: "क्या बिजली विभाग 3-4 साल पुराना बकाया मांग सकता है?", a: "धारा 56(2) के अनुसार जो राशि पहली बार देय होने के 2 साल बाद तक लगातार बकाया के रूप में बिल में न दिखाई गई हो, वह वसूल नहीं की जा सकती। ऐसे मामले में यह बात शिकायत में लिखें।" },
    { q: "मीटर तेज़ चल रहा हो तो क्या करें?", a: "लिखित शिकायत देकर मीटर की जांच मांगें। 2024 संशोधन नियमों में मीटर रीडिंग की शिकायत पर 5 दिन के अंदर अतिरिक्त चेक मीटर लगाने का प्रावधान है; मीटर टेस्टिंग का शुल्क DISCOM तय करती है।" },
    { q: "बिजली लोकपाल में शिकायत कैसे करें?", a: "पहले CGRF फोरम में शिकायत ज़रूरी है। फोरम के फैसले से असंतुष्ट हों या तय समय में फैसला न हो तो अपने राज्य के विद्युत नियामक आयोग के अधीन विद्युत लोकपाल को आवेदन दें; समय सीमा राज्य के नियमों में लिखी होती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
