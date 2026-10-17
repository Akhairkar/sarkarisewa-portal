import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity (Rights of Consumers) Rules, 2020, rule 5 (metering), as
//   amended by the Amendment Rules 2024 notified 22.02.2024 (TeamLease
//   RegTech update; Vikaspedia summary; Delhi HC, Sunil Bagai v. GNCTD, 2021,
//   quoting rule 5(13)): on a complaint that the meter reading is not
//   commensurate with consumption, the licensee installs an additional (check)
//   meter within 5 days for at least 3 months; meter testing on a consumer
//   complaint within 30 days; a meter found defective/burnt not due to the
//   consumer is replaced by the licensee at its own cost within the timelines
//   fixed by the State Commission (exact hours not stated on the page).
// - Same Rules (repo guides electricity-connection-bill and
//   sub-divisional-electricity-meter-shift): modification in an existing
//   connection (incl. shifting) within 3 days (metro), 7 days (other municipal
//   areas), 15 days (rural), 30 days (rural hilly areas) after a complete
//   application.
// - Electricity Act 2003 s.42(5) CGRF and s.42(6) Electricity Ombudsman.
// Testing/shifting fees are set by each SERC/DISCOM and are not given.
export const electricityMeterChangeApplication: Letter = {
  slug: "electricity-meter-change-application",
  category: "utility",
  emoji: "⚡",
  title: "Electricity Meter Change Application in Hindi 2026: बिजली मीटर बदलने का आवेदन",
  description: "खराब, जला या तेज़ चलने वाला बिजली मीटर बदलवाने/जांच करवाने या मीटर शिफ्ट करवाने का आवेदन पत्र (हिंदी/English)। उपभोक्ता अधिकार नियम 2020 के हक।",
  h1: "बिजली मीटर बदलने/जांच/शिफ्ट करने का आवेदन पत्र 2026",
  short: { hi: "बिजली मीटर बदलने का आवेदन", en: "Electricity meter change application" },
  lead: "मीटर खराब हो, जल गया हो, बंद हो या खपत से ज़्यादा तेज़ चल रहा हो, तो अपनी बिजली कंपनी (DISCOM) के <strong>उपखंड अधिकारी (SDO/AE)</strong> को लिखित आवेदन दें। <strong>बिजली (उपभोक्ता अधिकार) नियम 2020</strong> के अनुसार रीडिंग की शिकायत पर कंपनी को <strong>5 दिन</strong> में जांच के लिए एक अतिरिक्त (चेक) मीटर लगाना होता है, और जो मीटर उपभोक्ता की गलती के बिना खराब/जला हो, उसे कंपनी अपने खर्च पर बदलती है। मीटर की जगह बदलनी (शिफ्ट) हो तो पूरा आवेदन देने के बाद शहर में <strong>7 दिन</strong> और गांव में <strong>15 दिन</strong> की सीमा है।",
  facts: [
    ["किसे दें", "DISCOM का उपखंड अधिकारी (SDO/AE/JE)"],
    ["तेज़ मीटर की शिकायत", "5 दिन में चेक मीटर, कम से कम 3 महीने"],
    ["खराब/जला मीटर", "उपभोक्ता की गलती नहीं तो कंपनी के खर्च पर बदलेगी"],
    ["मीटर शिफ्ट", "महानगर 3, शहर 7, गांव 15, पहाड़ी गांव 30 दिन"],
  ],
  to: "अपने इलाके की बिजली कंपनी के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता (AE)</strong> को, या जहां बिल में लिखा उपखंड/सब-डिवीज़न कार्यालय है। कई कंपनियों में यही काम ऑनलाइन पोर्टल/ऐप या 1912 जैसी हेल्पलाइन से भी दर्ज होता है।",
  when: [
    "मीटर बंद है, डिस्प्ले नहीं दिखता या जल गया है",
    "बिल अचानक बहुत ज़्यादा आने लगा और मीटर तेज़ चलने का शक है",
    "मीटर की सील टूटी हुई मिली या मीटर क्षतिग्रस्त है",
    "घर बनाने/मरम्मत के कारण मीटर को दूसरी जगह (बाहर दीवार/खंभे पर) शिफ्ट करवाना है",
  ],
  fields: [
    { key: "office", label: { hi: "उपखंड कार्यालय का नाम और पता", en: "Sub-division office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: उपखंड अधिकारी, विद्युत वितरण उपखंड-2, आगरा", en: "e.g. SDO, Electricity Distribution Sub-division 2, Agra" } },
    { key: "name", label: { hi: "उपभोक्ता का नाम (बिल के अनुसार)", en: "Consumer name (as on bill)" }, required: true },
    { key: "account", label: { hi: "कनेक्शन/अकाउंट नंबर (बिल पर)", en: "Connection/account number (on bill)" }, required: true },
    { key: "meterno", label: { hi: "मीटर नंबर", en: "Meter number" } },
    { key: "address", label: { hi: "कनेक्शन का पता", en: "Connection address" }, type: "textarea", required: true },
    { key: "request", label: { hi: "आप क्या चाहते हैं", en: "What you want" }, type: "select", options: [
      { hi: "खराब/बंद मीटर बदलना", en: "replacement of the defective/stopped meter" },
      { hi: "जले हुए मीटर को बदलकर बिजली चालू करना", en: "replacement of the burnt meter and restoration of supply" },
      { hi: "तेज़ चल रहे मीटर की जांच और चेक मीटर लगाना", en: "testing of the fast-running meter and installation of a check meter" },
      { hi: "मीटर को दूसरी जगह शिफ्ट करना", en: "shifting of the meter to another location" },
    ] },
    { key: "problem", label: { hi: "समस्या का ब्योरा", en: "Details of the problem" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 05/10/2026 से मीटर का डिस्प्ले बंद है / पिछले 3 महीने का बिल दोगुना आया, खपत उतनी ही है", en: "e.g. meter display off since 05/10/2026 / bill doubled in last 3 months with same usage" } },
    { key: "newplace", label: { hi: "शिफ्ट करना हो तो नई जगह (चाहें तो)", en: "New location if shifting (optional)" }, placeholder: { hi: "जैसे: मकान की बाहरी दीवार पर, मुख्य गेट के पास", en: "e.g. on the outer wall near the main gate" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{request}} हेतु आवेदन – कनेक्शन नंबर {{account}}

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, आपके क्षेत्र का बिजली उपभोक्ता हूं। मेरा विवरण इस प्रकार है:
कनेक्शन/अकाउंट नंबर: {{account}}
मीटर नंबर: {{meterno}}
पता: {{address}}

समस्या: {{problem}}

अतः आपसे निवेदन है कि {{request}} की कार्यवाही शीघ्र करने की कृपा करें। (शिफ्टिंग हेतु नई जगह: {{newplace}})

बिजली (उपभोक्ता अधिकार) नियम 2020 के अनुसार मीटर रीडिंग की शिकायत पर जांच हेतु अतिरिक्त मीटर लगाया जाना चाहिए, और उपभोक्ता की गलती के बिना खराब/जले मीटर को वितरण कंपनी द्वारा अपने खर्च पर बदला जाना चाहिए। मीटर बदलने/जांच तक कृपया औसत के आधार पर उचित बिल दें और जांच रिपोर्ट की प्रति मुझे उपलब्ध कराएं।

यदि इसके लिए कोई निर्धारित शुल्क या फॉर्म है, तो कृपया लिखित में बताएं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. पिछले बिजली बिलों की कॉपी
2. मीटर की फोटो (यदि हो)
3. पहचान पत्र की कॉपी`,
    en: `To,
{{office}}

Subject: Application for {{request}} – connection no. {{account}}

Sir/Madam,

I, {{name}}, am an electricity consumer in your area. My details are:
Connection/account number: {{account}}
Meter number: {{meterno}}
Address: {{address}}

Problem: {{problem}}

I therefore request you to kindly arrange {{request}} at the earliest. (New location for shifting: {{newplace}})

Under the Electricity (Rights of Consumers) Rules, 2020, an additional meter is to be installed on a complaint about meter reading, and a meter found defective or burnt without the consumer's fault is to be replaced by the distribution licensee at its own cost. Until the meter is replaced/tested, kindly bill me on a fair average basis and provide me a copy of the test report.

If any prescribed fee or form applies, kindly inform me in writing.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. Copies of recent electricity bills
2. Photograph of the meter (if any)
3. Copy of identity proof`,
  },
  attach: [
    "पिछले 3-6 महीने के बिजली बिल की कॉपी (तेज़ मीटर की शिकायत में खपत की तुलना के लिए)",
    "मीटर की फोटो, जिसमें रीडिंग/डिस्प्ले/सील दिखे",
    "पहचान पत्र; मीटर शिफ्ट के लिए मकान का मालिकाना/कब्ज़े का प्रमाण (अगर कंपनी मांगे)",
  ],
  submit: [
    "पहले बिजली कंपनी की हेल्पलाइन, ऐप या पोर्टल पर शिकायत दर्ज करें और शिकायत संख्या लें (कई राज्यों में 1912)।",
    "यह आवेदन दो कॉपी में उपखंड कार्यालय में जमा करें; एक पर मुहर और तारीख के साथ रिसीविंग लें। शिफ्टिंग के लिए कंपनी का फॉर्म और फीस (अगर हो) भी जमा करें।",
    "मीटर जांच के समय खुद मौजूद रहें और जांच रिपोर्ट की कॉपी मांगें।",
    "तय समय में काम न हो तो DISCOM के <strong>उपभोक्ता शिकायत निवारण फोरम (CGRF)</strong> में शिकायत करें; वहां से संतुष्ट न हों तो <strong>विद्युत लोकपाल (Electricity Ombudsman)</strong> के पास जाएं।",
  ],
  tips: [
    "मीटर के साथ खुद छेड़छाड़ न करें, न सील तोड़ें; इसे बिजली चोरी माना जा सकता है।",
    "जला मीटर बदलवाने से पहले देखें कि घर की वायरिंग में खराबी तो नहीं; गलती उपभोक्ता की निकली तो खर्च आपसे लिया जा सकता है।",
    "शिकायत के बाद भी पूरा बिल न रोकें; विवादित रकम पर नियम के अनुसार औसत या विरोध के साथ भुगतान करें, ताकि कनेक्शन न कटे।",
    "मीटर बदलने के बदले किसी कर्मचारी को नकद पैसा न दें; जो शुल्क हो उसकी रसीद लें।",
  ],
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय", note: "बिजली (उपभोक्ता अधिकार) नियम" },
    { href: "https://egazette.gov.in/", title: "भारत का राजपत्र (eGazette)", note: "नियम और संशोधन" },
  ],
  related: ["/service/electricity-connection-bill.html", "/service/sub-divisional-electricity-meter-shift.html"],
  faq: [
    { q: "बिजली मीटर खराब हो तो आवेदन किसे दें?", a: "अपनी बिजली कंपनी के उपखंड अधिकारी (SDO/AE) को, जिसका नाम और पता आपके बिल पर लिखा होता है। साथ में हेल्पलाइन/ऐप पर भी शिकायत दर्ज करें।" },
    { q: "मीटर तेज़ चल रहा हो तो क्या करें?", a: "लिखित शिकायत दें। बिजली (उपभोक्ता अधिकार) नियम के अनुसार कंपनी को 5 दिन में एक अतिरिक्त चेक मीटर लगाना होता है, जो कम से कम 3 महीने खपत जांचने के लिए रहता है। मीटर की लैब जांच भी करवा सकते हैं।" },
    { q: "जला हुआ मीटर बदलने का पैसा कौन देगा?", a: "अगर मीटर उपभोक्ता की गलती के बिना जला या खराब हुआ है, तो कंपनी अपने खर्च पर नया मीटर लगाती है। गलती उपभोक्ता की पाई जाए तो खर्च लिया जा सकता है।" },
    { q: "मीटर शिफ्ट करवाने में कितना समय लगता है?", a: "पूरा आवेदन जमा होने के बाद महानगर में 3 दिन, दूसरे शहरों में 7 दिन, गांव में 15 दिन और पहाड़ी गांवों में 30 दिन तक। फीस राज्य/DISCOM के नियम से तय होती है।" },
    { q: "मीटर जांच की फीस कितनी है?", a: "यह हर राज्य के बिजली आयोग/DISCOM के नियम से तय होती है। आवेदन में लिखित में फीस पूछें और रसीद लें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
