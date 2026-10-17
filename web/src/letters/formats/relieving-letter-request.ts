import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Code on Wages 2019, s.17(2) (in force 21 Nov 2025; LiveLaw "Two working
//   days: Code on Wages and employee's final settlement"; Vikaspedia): where
//   an employee is removed, dismissed, retrenched, has resigned or become
//   unemployed due to closure, wages payable shall be paid within two working
//   days. Claims before the authority within 3 years (Code on Wages s.45,
//   advocatekhoj bare act).
// - No law makes a relieving letter compulsory; it is a company document. The
//   page says so and points to SAMADHAN / state labour department for unpaid
//   dues and to EPFO (epfigms.gov.in, toll-free 1800-118-005, repo EPFO guide)
//   when the employer does not mark the date of exit.
export const relievingLetterRequest: Letter = {
  slug: "relieving-letter-request",
  category: "job",
  emoji: "📃",
  title: "Relieving Letter Request in Hindi 2026: रिलीविंग लेटर अनुरोध पत्र",
  description: "नौकरी छोड़ने के बाद रिलीविंग लेटर, अनुभव पत्र और फुल एंड फाइनल मांगने का पत्र (हिंदी/English)। वेतन 2 कार्य-दिवस में देने का नियम, PF exit की जानकारी।",
  h1: "रिलीविंग लेटर अनुरोध पत्र 2026: पुरानी कंपनी/HR को",
  short: { hi: "रिलीविंग लेटर अनुरोध", en: "Relieving letter request" },
  lead: "इस्तीफा देकर नोटिस पीरियड पूरा करने के बाद कंपनी से <strong>रिलीविंग लेटर</strong> (आपको कार्यमुक्त करने का पत्र) लिया जाता है, जो नई नौकरी में अक्सर मांगा जाता है। यह पत्र पुरानी कंपनी के <strong>HR</strong> को लिखें और साथ में अनुभव पत्र, फुल एंड फाइनल और PF में exit की तारीख की बात भी लिखें। Code on Wages 2019 की <strong>धारा 17(2)</strong> के अनुसार इस्तीफे के बाद बकाया वेतन <strong>2 कार्य-दिवस</strong> में देना होता है।",
  facts: [
    ["किसे दें", "पुरानी कंपनी का HR/प्रबंधक"],
    ["बकाया वेतन", "इस्तीफे के बाद 2 कार्य-दिवस में (Code on Wages धारा 17(2))"],
    ["PF", "कंपनी exit की तारीख दर्ज करे; शिकायत epfigms.gov.in"],
    ["वेतन का दावा", "श्रम विभाग में 3 साल के अंदर"],
  ],
  to: "जिस कंपनी में आपने काम किया, उसके <strong>HR मैनेजर/प्रशासन विभाग</strong> को; छोटी फर्म में <strong>मालिक/प्रोपराइटर</strong> को। ईमेल से भेजें तो अपने आखिरी रिपोर्टिंग मैनेजर को CC करें।",
  when: [
    "नोटिस पीरियड पूरा हो गया पर रिलीविंग लेटर नहीं मिला",
    "नई कंपनी ने जॉइनिंग के लिए रिलीविंग लेटर मांगा है",
    "फुल एंड फाइनल (बकाया वेतन, छुट्टी का पैसा) नहीं मिला",
    "PF में पुरानी कंपनी ने exit की तारीख दर्ज नहीं की",
  ],
  fields: [
    { key: "hr", label: { hi: "HR/प्रबंधक का नाम या पद", en: "HR/manager's name or designation" }, required: true, placeholder: { hi: "जैसे: HR मैनेजर", en: "e.g. HR Manager" } },
    { key: "company", label: { hi: "कंपनी का नाम और पता", en: "Company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "आपका पद और कर्मचारी ID", en: "Your designation and employee ID" }, required: true },
    { key: "joining", label: { hi: "जॉइनिंग की तारीख", en: "Date of joining" }, type: "date", required: true },
    { key: "resigned", label: { hi: "इस्तीफा देने की तारीख", en: "Date of resignation" }, type: "date", required: true },
    { key: "lastday", label: { hi: "आखिरी कार्य-दिवस", en: "Last working day" }, type: "date", required: true },
    { key: "need", label: { hi: "क्या-क्या चाहिए", en: "What you need" }, type: "select", options: [
      { hi: "रिलीविंग लेटर और अनुभव पत्र", en: "relieving letter and experience certificate" },
      { hi: "रिलीविंग लेटर, अनुभव पत्र और फुल एंड फाइनल सेटलमेंट", en: "relieving letter, experience certificate and full and final settlement" },
      { hi: "सिर्फ रिलीविंग लेटर", en: "relieving letter only" },
    ] },
    { key: "uan", label: { hi: "UAN नंबर (PF) – चाहें तो", en: "UAN (PF) – optional" } },
    { key: "address", label: { hi: "आपका पता/ईमेल (पत्र भेजने के लिए)", en: "Your address/email (to send the letter)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{hr}},
{{company}}

विषय: रिलीविंग लेटर एवं संबंधित दस्तावेज़ जारी करने हेतु अनुरोध

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, दिनांक {{joining}} से आपकी संस्था में {{designation}} के पद पर कार्यरत था/थी। मैंने दिनांक {{resigned}} को त्यागपत्र दिया था और नोटिस अवधि पूरी कर {{lastday}} को अपना अंतिम कार्य-दिवस पूरा किया। मैंने कंपनी की सभी संपत्ति (ID कार्ड, लैपटॉप/उपकरण आदि) लौटा दी है और हैंडओवर पूरा कर दिया है।

अतः आपसे अनुरोध है कि मुझे {{need}} शीघ्र जारी करने की कृपा करें। Code on Wages 2019 की धारा 17(2) के अनुसार इस्तीफे के बाद बकाया वेतन दो कार्य-दिवस में देय है, अतः मेरा बकाया भुगतान भी शीघ्र करने की कृपा करें।

कृपया EPFO पोर्टल पर मेरी सेवा छोड़ने की तारीख (Date of Exit) भी दर्ज कर दें। मेरा UAN: {{uan}}

दस्तावेज़ कृपया इस पते/ईमेल पर भेजें:
{{address}}

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न: त्यागपत्र/उसकी स्वीकृति की कॉपी`,
    en: `To,
{{hr}},
{{company}}

Subject: Request for issue of relieving letter and related documents

Dear Sir/Madam,

I, {{name}}, worked with your organisation as {{designation}} from {{joining}}. I resigned on {{resigned}} and, after serving the notice period, completed my last working day on {{lastday}}. I have returned all company property (ID card, laptop/equipment etc.) and completed the handover.

I therefore request you to kindly issue my {{need}} at the earliest. As per Section 17(2) of the Code on Wages, 2019, wages due on resignation are payable within two working days, so kindly also release my pending dues.

Kindly also update my date of exit on the EPFO portal. My UAN: {{uan}}

Please send the documents to the following address/email:
{{address}}

Thanking you.

Yours sincerely,

(Signature)
{{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosure: Copy of resignation letter/acceptance`,
  },
  attach: [
    "इस्तीफे के पत्र और उसकी स्वीकृति (acceptance) की कॉपी",
    "हैंडओवर/नो-ड्यूज़ फॉर्म की कॉपी, अगर भरा हो",
  ],
  submit: [
    "पत्र HR को ईमेल करें (आखिरी मैनेजर को CC) या रजिस्टर्ड डाक/स्पीड पोस्ट से भेजें और रसीद संभालें।",
    "7-10 दिन में जवाब न आए तो रिमाइंडर ईमेल भेजें।",
    "बकाया वेतन न मिले तो राज्य के <strong>श्रम विभाग</strong> में दावा करें (Code on Wages में 3 साल के अंदर); केंद्र क्षेत्र के संस्थानों के लिए <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a>।",
    "PF में exit की तारीख न डाली जाए या PF जमा न हुआ हो तो <a href=\"https://epfigms.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">EPFiGMS</a> पर शिकायत करें।",
  ],
  tips: [
    "कंपनी की संपत्ति लौटाने और हैंडओवर का सबूत (ईमेल/रसीद) अपने पास रखें।",
    "नोटिस पीरियड पूरा न किया हो तो कंपनी नोटिस के बदले वेतन काट सकती है; यह आपके नियुक्ति पत्र पर निर्भर है।",
    "रिलीविंग लेटर देना कानूनन ज़रूरी नहीं है, पर ज़्यादातर कंपनियां देती हैं; न मिले तो इस्तीफे की स्वीकृति और आखिरी सैलरी स्लिप भी सबूत का काम करती हैं।",
    "भाषा विनम्र रखें; पुरानी कंपनी का रेफरेंस आगे काम आता है।",
  ],
  official: [
    { href: "https://epfigms.gov.in/", title: "EPFiGMS (EPFO शिकायत पोर्टल)", note: "PF exit/जमा न होने की शिकायत" },
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल", note: "वेतन के दावे (केंद्र क्षेत्र)" },
  ],
  related: ["/service/epfo.html", "/tools/gratuity-calculator.html"],
  faq: [
    { q: "रिलीविंग लेटर कितने दिन में मिलता है?", a: "कानून में कोई तय समय नहीं है; ज़्यादातर कंपनियां आखिरी कार्य-दिवस या फुल एंड फाइनल के साथ देती हैं। देर हो तो लिखित अनुरोध और रिमाइंडर भेजें।" },
    { q: "इस्तीफे के बाद बकाया सैलरी कब मिलनी चाहिए?", a: "Code on Wages 2019 की धारा 17(2) के अनुसार इस्तीफा, बर्खास्तगी या छंटनी पर बकाया वेतन 2 कार्य-दिवस में देना होता है।" },
    { q: "कंपनी रिलीविंग लेटर न दे तो क्या करें?", a: "लिखित अनुरोध और रिमाइंडर भेजें। बकाया वेतन रुका हो तो श्रम विभाग में दावा करें। नई कंपनी को इस्तीफे की स्वीकृति, आखिरी सैलरी स्लिप और PF पासबुक दिखा सकते हैं।" },
    { q: "रिलीविंग लेटर और अनुभव पत्र में क्या फर्क है?", a: "रिलीविंग लेटर बताता है कि आपको नौकरी से विधिवत कार्यमुक्त किया गया; अनुभव पत्र में आपका पद और कितने समय काम किया, यह लिखा होता है। कई कंपनियां दोनों एक ही पत्र में देती हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
