import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity (Rights of Consumers) Rules, 2020 (gazette copy merc.gov.in;
//   legitquest text): licensee must publish detailed procedure, documents and
//   charges for enhancement / reduction of load; forms free at offices and on
//   the website; online application facility.
// - Electricity (Rights of Consumers) Amendment Rules, 2024 (notified
//   22.02.2024; SCC Online / Powerline / India Environment Portal):
//   modification in an existing connection within 3 days (metro), 7 days
//   (other municipal areas), 15 days (rural), 30 days (rural hilly areas)
//   after a complete application.
// - Electricity (Rights of Consumers) Amendment Rules, 2023 (indianinfra-
//   structure.com, teamleaseregtech.com summaries of the notified text): with
//   a smart meter, if recorded maximum demand exceeds sanctioned load at least
//   three times in a financial year, the sanctioned load is revised upward;
//   no penalty for maximum demand recorded before smart meter installation.
// - Electricity Act 2003 s.42(5) CGRF, s.42(6) Ombudsman.
// Per-kW charges / security deposit are set by each DISCOM; not stated.
export const electricityLoadIncreaseApplication: Letter = {
  slug: "electricity-load-increase-application",
  category: "utility",
  emoji: "⚡",
  title: "Electricity Load Increase Application in Hindi 2026: बिजली लोड बढ़ाना",
  description: "बिजली कनेक्शन का स्वीकृत लोड (kW) बढ़ाने का आवेदन पत्र (हिंदी/English)। समय सीमा, दस्तावेज़, स्मार्ट मीटर में लोड बदलने का नियम और शिकायत का रास्ता।",
  h1: "बिजली लोड बढ़ाने का आवेदन पत्र 2026",
  short: { hi: "बिजली लोड बढ़ाने का आवेदन", en: "Electricity load increase" },
  lead: "AC, गीज़र, मोटर जैसे नए उपकरण लगाने से खपत स्वीकृत लोड (Sanctioned Load) से ज़्यादा हो जाए तो DISCOM के <strong>उपखंड अधिकारी (SDO)</strong> को लोड बढ़ाने का आवेदन दें। बिजली उपभोक्ता अधिकार नियम (2024 संशोधन) के अनुसार पूरा आवेदन मिलने पर मौजूदा कनेक्शन में बदलाव <strong>महानगर में 3 दिन, शहर में 7 दिन और गांव में 15 दिन</strong> में होना चाहिए। अतिरिक्त लोड का शुल्क और सिक्योरिटी आपकी DISCOM तय करती है।",
  facts: [
    ["किसे दें", "DISCOM उपखंड कार्यालय के SDO / सहायक अभियंता"],
    ["समय सीमा", "पूरा आवेदन मिलने के बाद: महानगर 3 दिन, शहर 7 दिन, गांव 15 दिन, पहाड़ी गांव 30 दिन"],
    ["फीस", "प्रति kW शुल्क और अतिरिक्त सिक्योरिटी राज्य/DISCOM तय करती है"],
    ["शिकायत", "DISCOM शिकायत अधिकारी → CGRF फोरम → विद्युत लोकपाल"],
  ],
  to: "जिस सब-डिवीजन का बिल आता है, वहां के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता</strong> को। बड़े लोड (जैसे थ्री फेज़ या उद्योग) के लिए कार्यपालक अभियंता को।",
  when: [
    "घर में AC, गीज़र, इंडक्शन, मोटर लगाने से बिजली बार-बार ट्रिप होती है",
    "बिल में 'ज़्यादा लोड' (Excess Demand) का जुर्माना आने लगा है",
    "दुकान/वर्कशॉप में नई मशीन लगानी है",
    "सिंगल फेज़ से थ्री फेज़ कनेक्शन करवाना है",
  ],
  fields: [
    { key: "office", label: { hi: "बिजली दफ्तर का नाम और पता", en: "Electricity office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: उपखंड अधिकारी, विद्युत उपखंड, शास्त्री नगर, जयपुर", en: "e.g. SDO, Electricity Sub-Division, Shastri Nagar, Jaipur" } },
    { key: "name", label: { hi: "उपभोक्ता का नाम (बिल के अनुसार)", en: "Consumer's name (as on bill)" }, required: true },
    { key: "consumer", label: { hi: "उपभोक्ता / खाता संख्या", en: "Consumer / account number" }, required: true },
    { key: "address", label: { hi: "कनेक्शन का पता", en: "Address of connection" }, type: "textarea", required: true },
    { key: "ctype", label: { hi: "कनेक्शन की श्रेणी", en: "Connection category" }, type: "select", options: [
      { hi: "घरेलू (Domestic)", en: "Domestic" },
      { hi: "व्यावसायिक (Commercial)", en: "Commercial" },
      { hi: "कृषि (Agriculture)", en: "Agriculture" },
      { hi: "औद्योगिक (Industrial)", en: "Industrial" },
    ] },
    { key: "oldload", label: { hi: "अभी स्वीकृत लोड (kW)", en: "Present sanctioned load (kW)" }, required: true, placeholder: { hi: "जैसे: 2 kW (बिल पर लिखा)", en: "e.g. 2 kW (printed on bill)" } },
    { key: "newload", label: { hi: "कुल कितना लोड चाहिए (kW)", en: "Total load required (kW)" }, required: true, placeholder: { hi: "जैसे: 5 kW", en: "e.g. 5 kW" } },
    { key: "phase", label: { hi: "फेज़", en: "Phase" }, type: "select", options: [
      { hi: "सिंगल फेज़ ही रहे", en: "Remain single phase" },
      { hi: "सिंगल फेज़ से थ्री फेज़ किया जाए", en: "Convert single phase to three phase" },
      { hi: "थ्री फेज़ ही रहे", en: "Remain three phase" },
    ] },
    { key: "reason", label: { hi: "लोड बढ़ाने का कारण", en: "Reason for load increase" }, placeholder: { hi: "जैसे: घर में 2 AC और गीज़र लगाए हैं", en: "e.g. Installed 2 ACs and a geyser" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: उपभोक्ता संख्या {{consumer}} का स्वीकृत लोड {{oldload}} से बढ़ाकर {{newload}} करने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, उपभोक्ता संख्या {{consumer}} ({{ctype}} श्रेणी) का धारक हूं। कनेक्शन का पता:
{{address}}

इस कनेक्शन का अभी स्वीकृत लोड {{oldload}} है। {{reason}}, जिससे मेरी बिजली की ज़रूरत बढ़ गई है। अतः निवेदन है कि मेरे कनेक्शन का स्वीकृत लोड बढ़ाकर कुल {{newload}} किया जाए। फेज़: {{phase}}।

परिसर की वायरिंग नए लोड के लिए तैयार है। मैं अतिरिक्त लोड का नियमानुसार शुल्क और सिक्योरिटी राशि जमा करने को तैयार हूं। कृपया आवेदन की पावती/आवेदन संख्या दें और बिजली उपभोक्ता अधिकार नियमों में तय समय में लोड बढ़ाने की कार्रवाई करें।

संलग्न:
1. नवीनतम बिजली बिल और भुगतान रसीद की कॉपी
2. पहचान प्रमाण की स्व-प्रमाणित कॉपी
3. वायरिंग टेस्ट रिपोर्ट (यदि DISCOM मांगे)

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for enhancement of sanctioned load of consumer no. {{consumer}} from {{oldload}} to {{newload}}.

Sir/Madam,

I, {{name}}, am the holder of consumer no. {{consumer}} ({{ctype}} category) at the following address:
{{address}}

The present sanctioned load of this connection is {{oldload}}. {{reason}}, so my electricity requirement has increased. I therefore request that the sanctioned load be enhanced to a total of {{newload}}. Phase: {{phase}}.

The internal wiring of the premises is fit for the new load. I am ready to pay the applicable charges and additional security as per rules. Kindly give me an acknowledgement / application number and complete the load enhancement within the time fixed under the Electricity (Rights of Consumers) Rules.

Enclosures:
1. Copy of latest electricity bill and payment receipt
2. Self-attested copy of identity proof
3. Wiring test report (if required by the DISCOM)

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "नवीनतम बिजली बिल (कोई बकाया न हो) और भुगतान रसीद",
    "उपभोक्ता का पहचान प्रमाण",
    "बड़े लोड या थ्री फेज़ के लिए कई DISCOM लाइसेंसी इलेक्ट्रीशियन की वायरिंग टेस्ट रिपोर्ट मांगती हैं",
  ],
  submit: [
    "DISCOM की वेबसाइट/ऐप पर \"Load Enhancement / Load Change\" सेवा देखें; कई कंपनियां इसे ऑनलाइन लेती हैं।",
    "ऑफलाइन हो तो यह पत्र और फॉर्म उपखंड कार्यालय में जमा करें और पावती लें।",
    "डिमांड नोट में लिखा शुल्क/सिक्योरिटी जमा करें; थ्री फेज़ में मीटर बदला जाएगा।",
    "तय समय में काम न हो तो DISCOM शिकायत अधिकारी, फिर <strong>CGRF फोरम</strong>, फिर <strong>विद्युत लोकपाल</strong> के पास जाएं।",
  ],
  tips: [
    "लोड बढ़ने से फिक्स्ड चार्ज भी बढ़ता है; ज़रूरत से ज़्यादा लोड न मांगें।",
    "उपकरणों की वॉट जोड़कर लोड का हिसाब लगाएं (1 kW = 1000 वॉट)।",
    "पुरानी, पतली वायरिंग पर ज़्यादा लोड खतरनाक है; पहले वायरिंग ठीक कराएं।",
    "लोड कम भी करवाया जा सकता है; उसके लिए इसी तरह आवेदन दें।",
  ],
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय (Ministry of Power)", note: "बिजली उपभोक्ता अधिकार नियम" },
  ],
  related: ["/service/electricity-connection-bill.html", "/service/pm-surya-ghar-muft-bijli.html"],
  faq: [
    { q: "बिजली का लोड कैसे बढ़वाएं?", a: "DISCOM की वेबसाइट/ऐप पर लोड बढ़ाने की सेवा में या उपखंड कार्यालय में आवेदन दें, फिर डिमांड नोट की राशि जमा करें। पूरा आवेदन मिलने के बाद शहर में 3–7 दिन और गांव में 15 दिन की सीमा है।" },
    { q: "लोड बढ़ाने का कितना चार्ज लगता है?", a: "प्रति kW शुल्क और अतिरिक्त सिक्योरिटी हर राज्य की बिजली कंपनी अलग तय करती है। सही राशि डिमांड नोट या DISCOM की दर सूची में होती है।" },
    { q: "स्मार्ट मीटर में लोड अपने-आप बढ़ जाता है क्या?", a: "2023 के संशोधन नियमों के अनुसार स्मार्ट मीटर में अगर एक वित्त वर्ष में कम से कम 3 बार अधिकतम मांग स्वीकृत लोड से ज़्यादा दर्ज हो, तो स्वीकृत लोड बढ़ाया जा सकता है। राज्य में लागू तरीका DISCOM से पुष्टि करें।" },
    { q: "ज़्यादा लोड इस्तेमाल करने पर जुर्माना लगता है?", a: "कई राज्यों में स्वीकृत लोड से ज़्यादा मांग पर अतिरिक्त शुल्क लगता है। इससे बचने के लिए समय पर लोड बढ़वाएं। स्मार्ट मीटर लगने से पहले की अवधि के लिए उसकी रीडिंग पर जुर्माना नहीं लगाया जा सकता।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
