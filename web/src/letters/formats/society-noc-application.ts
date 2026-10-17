import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Cooperative housing societies are registered under each state's
//   Cooperative Societies Act and governed by their bye-laws (e.g. model
//   bye-laws issued by the state Registrar); apartment associations and
//   RWAs follow their own state apartment-ownership law or registered
//   rules. Whether an NOC is needed, the time to issue it and any fee
//   therefore differ by state and society; the page gives no numbers and
//   sends disputes to the managing committee and then the state
//   Registrar/Deputy Registrar of Cooperative Societies.
// - Banks (home loan / loan against property), discoms (meter/name
//   change), gas companies (PNG) and buyers commonly ask for a society NOC;
//   each decides its own document list.
export const societyNocApplication: Letter = {
  slug: "society-noc-application",
  category: "personal",
  emoji: "🏢",
  title: "Society NOC Application in Hindi 2026: हाउसिंग सोसायटी NOC आवेदन",
  description: "हाउसिंग सोसायटी/RWA से NOC (अनापत्ति प्रमाण पत्र) मांगने का पत्र (हिंदी/English): फ्लैट बेचना, किराये, लोन, मीटर, PNG, मरम्मत के लिए। भरें, प्रिंट करें।",
  h1: "हाउसिंग सोसायटी से NOC के लिए आवेदन पत्र 2026",
  short: { hi: "सोसायटी NOC आवेदन", en: "Society NOC application" },
  lead: "फ्लैट बेचने, किराये पर देने, होम लोन, बिजली मीटर/नाम बदलने, PNG गैस कनेक्शन या फ्लैट में मरम्मत के लिए अक्सर <strong>हाउसिंग सोसायटी का अनापत्ति प्रमाण पत्र (NOC)</strong> मांगा जाता है। आवेदन सोसायटी के <strong>सचिव (Secretary)</strong> या <strong>अध्यक्ष/प्रबंध समिति</strong> को दिया जाता है। सहकारी हाउसिंग सोसायटी राज्य के <strong>सहकारी समिति कानून और अपने उप-नियमों (bye-laws)</strong> से चलती हैं, इसलिए NOC की ज़रूरत, फीस और समय राज्य व सोसायटी के हिसाब से अलग हैं। बकाया मेंटेनेंस पहले चुका दें।",
  facts: [
    ["किसे दें", "सोसायटी सचिव / अध्यक्ष / प्रबंध समिति"],
    ["शर्त", "आम तौर पर कोई बकाया (मेंटेनेंस) न हो"],
    ["फीस/समय", "उप-नियम और राज्य के कानून से; सोसायटी से पूछें"],
    ["विवाद", "राज्य के सहकारी समिति रजिस्ट्रार/उप रजिस्ट्रार"],
  ],
  to: "सोसायटी के <strong>सचिव (Hon. Secretary)</strong> को, कॉपी <strong>अध्यक्ष (Chairman)</strong> या प्रबंध समिति को। RWA/अपार्टमेंट एसोसिएशन हो तो उसके अध्यक्ष/सचिव को।",
  when: [
    "फ्लैट/दुकान बेचना या सोसायटी में सदस्यता ट्रांसफर",
    "फ्लैट किराये पर देना",
    "होम लोन या संपत्ति पर लोन (बैंक को NOC चाहिए)",
    "बिजली मीटर नाम बदलना/लोड बढ़ाना या PNG गैस कनेक्शन",
    "फ्लैट में मरम्मत/बदलाव का काम",
  ],
  fields: [
    { key: "society", label: { hi: "सोसायटी का नाम और पता", en: "Society name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: शांति सहकारी गृह निर्माण संस्था मर्यादित, सेक्टर 5, ...", en: "e.g. Shanti Co-operative Housing Society Ltd., Sector 5, ..." } },
    { key: "name", label: { hi: "आपका नाम (सदस्य/मालिक)", en: "Your name (member/owner)" }, required: true },
    { key: "flat", label: { hi: "फ्लैट/मकान नंबर और विंग", en: "Flat/house no. and wing" }, required: true, placeholder: { hi: "जैसे: B-204", en: "e.g. B-204" } },
    { key: "member", label: { hi: "सदस्यता/शेयर सर्टिफिकेट नंबर (चाहें तो)", en: "Membership/share certificate no. (optional)" } },
    { key: "purpose", label: { hi: "NOC किस काम के लिए", en: "Purpose of NOC" }, type: "select", options: [
      { hi: "फ्लैट की बिक्री और सदस्यता ट्रांसफर", en: "sale of the flat and transfer of membership" },
      { hi: "फ्लैट किराये पर देने", en: "letting out the flat on rent" },
      { hi: "बैंक से होम लोन/संपत्ति पर लोन लेने", en: "taking a home loan/loan against property from a bank" },
      { hi: "बिजली मीटर नाम परिवर्तन/लोड बढ़ाने", en: "electricity meter name change/load increase" },
      { hi: "PNG गैस कनेक्शन लेने", en: "taking a PNG gas connection" },
      { hi: "फ्लैट में मरम्मत/आंतरिक बदलाव कराने", en: "repair/internal renovation of the flat" },
    ] },
    { key: "details", label: { hi: "पूरा विवरण", en: "Details" }, type: "textarea", required: true, placeholder: { hi: "जैसे: फ्लैट श्री अजय गुप्ता को बेचना है / HDFC बैंक, अंधेरी शाखा से लोन / किरायेदार: श्री राजेश, 11 महीने के लिए", en: "e.g. selling to Mr. Ajay Gupta / loan from HDFC Bank, Andheri branch / tenant: Mr. Rajesh, 11 months" } },
    { key: "addressed", label: { hi: "NOC किसके नाम चाहिए (चाहें तो)", en: "NOC addressed to (optional)" }, placeholder: { hi: "जैसे: शाखा प्रबंधक, ... बैंक", en: "e.g. Branch Manager, ... Bank" } },
    { key: "dues", label: { hi: "बकाया की स्थिति", en: "Dues status" }, type: "select", options: [
      { hi: "मेरी ओर से सोसायटी का कोई बकाया नहीं है; आखिरी रसीद संलग्न है", en: "no dues are pending from my side; the latest receipt is enclosed" },
      { hi: "कोई बकाया हो तो बताएं, मैं NOC से पहले जमा कर दूंगा/दूंगी", en: "if any dues are pending, please inform me and I will pay before the NOC" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
सचिव/अध्यक्ष,
{{society}}

विषय: {{purpose}} हेतु अनापत्ति प्रमाण पत्र (NOC) जारी करने बाबत

महोदय/महोदया,

मैं, {{name}}, सोसायटी के फ्लैट/मकान नंबर {{flat}} का मालिक और सोसायटी का सदस्य हूं।
सदस्यता/शेयर सर्टिफिकेट नंबर: {{member}}

मुझे {{purpose}} के लिए सोसायटी के अनापत्ति प्रमाण पत्र (NOC) की आवश्यकता है। विवरण इस प्रकार है:
{{details}}

{{dues}}।

अतः आपसे निवेदन है कि सोसायटी के उप-नियमों के अनुसार मुझे NOC जारी करने की कृपा करें।
NOC इनके नाम जारी करें: {{addressed}}

इसके लिए कोई शुल्क, फॉर्म या अन्य दस्तावेज़ आवश्यक हो तो कृपया लिखित में बताएं।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
फ्लैट नंबर: {{flat}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. शेयर सर्टिफिकेट/आवंटन पत्र/स्वामित्व के दस्तावेज़ की प्रति
2. आखिरी मेंटेनेंस रसीद की प्रति
3. काम से जुड़े कागज़ (जैसे बिक्री का समझौता, बैंक का लोन स्वीकृति पत्र, किरायानामा का मसौदा)`,
    en: `To,
The Secretary/Chairman,
{{society}}

Subject: Request for No Objection Certificate (NOC) for {{purpose}}

Sir/Madam,

I, {{name}}, am the owner of flat/house no. {{flat}} and a member of the society.
Membership/share certificate no.: {{member}}

I need the society's No Objection Certificate (NOC) for {{purpose}}. The details are as follows:
{{details}}

Please note that {{dues}}.

I therefore request you kindly to issue the NOC to me as per the bye-laws of the society.
NOC to be addressed to: {{addressed}}

If any fee, form or other document is required for this, please inform me in writing.

Thanking you.

Yours faithfully,

(Signature)
Name: {{name}}
Flat no.: {{flat}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of share certificate/allotment letter/ownership document
2. Copy of latest maintenance receipt
3. Related papers (e.g. agreement for sale, bank sanction letter, draft rent agreement)`,
  },
  attach: [
    "शेयर सर्टिफिकेट, आवंटन पत्र या रजिस्ट्री की कॉपी",
    "आखिरी मेंटेनेंस/बिल की रसीद (No Dues के लिए)",
    'काम के कागज़: बिक्री का समझौता, बैंक का लोन स्वीकृति पत्र, <a href="/rent-agreement/">किरायानामा</a> या मरम्मत का विवरण',
    "बैंक/विभाग का तय NOC फॉर्मेट हो तो वह फॉर्मेट (सोसायटी उसी पर हस्ताक्षर करे)",
  ],
  submit: [
    "पत्र सचिव को दें या सोसायटी ऑफिस में जमा करें; एक कॉपी पर <strong>रिसीविंग</strong> (तारीख और हस्ताक्षर/मुहर) लें, या ईमेल से भेजें।",
    "सोसायटी का अपना फॉर्म या फीस हो तो उसे भरें और रसीद लें।",
    "NOC पर सोसायटी का लेटरहेड, रजिस्ट्रेशन नंबर, सचिव/अध्यक्ष के हस्ताक्षर और मुहर जांच लें।",
    "उचित समय में जवाब न मिले तो प्रबंध समिति को याद-पत्र दें; सहकारी सोसायटी में फिर भी हल न हो तो अपने ज़िले/क्षेत्र के <strong>सहकारी समिति उप रजिस्ट्रार</strong> को लिखित शिकायत करें।",
  ],
  tips: [
    "NOC का उद्देश्य और किसके नाम चाहिए (बैंक, खरीदार, बिजली कंपनी), साफ लिखें।",
    "बकाया मेंटेनेंस पहले चुका दें; बकाया होने पर ज़्यादातर सोसायटी NOC रोकती हैं।",
    "किराये पर देने से पहले किरायेदार की जानकारी और पुलिस सत्यापन की कॉपी सोसायटी को दें, अगर उप-नियम कहें।",
    "मनमाना शुल्क मांगा जाए तो उप-नियम की कॉपी मांगें और लिखित रसीद लें।",
  ],
  notice: "NOC ज़रूरी है या नहीं, और उसकी फीस व समय, <strong>राज्य के कानून और सोसायटी के उप-नियमों</strong> से तय होते हैं। बैंक या बिजली/गैस कंपनी अपना NOC फॉर्मेट दे तो सोसायटी से उसी पर हस्ताक्षर कराएं।",
  related: ["/rent-agreement/", "/service/electricity-connection-bill.html", "/service/png-piped-gas-connection-apply.html", "/service/municipal-property-tax.html"],
  faq: [
    { q: "सोसायटी NOC के लिए आवेदन किसे दें?", a: "सोसायटी के सचिव को, कॉपी अध्यक्ष या प्रबंध समिति को। RWA हो तो उसके अध्यक्ष/सचिव को।" },
    { q: "सोसायटी NOC कब ज़रूरी होता है?", a: "अक्सर फ्लैट बेचने, किराये पर देने, होम लोन, बिजली मीटर/नाम बदलने, PNG कनेक्शन या मरम्मत के लिए। असल में ज़रूरी है या नहीं, यह बैंक/विभाग और राज्य के नियम पर है।" },
    { q: "क्या सोसायटी NOC के लिए फीस ले सकती है?", a: "यह सोसायटी के उप-नियम और राज्य के कानून पर निर्भर है। जो भी फीस ली जाए, उसकी लिखित रसीद लें और नियम की कॉपी मांगें।" },
    { q: "सोसायटी NOC न दे तो क्या करें?", a: "पहले लिखित आवेदन और याद-पत्र दें। सहकारी हाउसिंग सोसायटी हो तो राज्य के सहकारी समिति रजिस्ट्रार/उप रजिस्ट्रार के दफ्तर में शिकायत कर सकते हैं।" },
    { q: "क्या बकाया होने पर सोसायटी NOC रोक सकती है?", a: "ज़्यादातर सोसायटी बकाया मेंटेनेंस चुकाने के बाद ही NOC देती हैं। बकाया गलत लगे तो लिखित में हिसाब मांगें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
