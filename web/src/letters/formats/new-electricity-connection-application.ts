import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity (Rights of Consumers) Rules, 2020 (Ministry of Power; gazette
//   copy on merc.gov.in): licensee must publish the procedure, documents and
//   charges for new connection; forms free at local offices and on the
//   licensee's website; web portal / mobile app for online applications;
//   application with proof of identity and proof of ownership/occupancy.
// - Electricity (Rights of Consumers) Amendment Rules, 2024 (notified
//   22.02.2024; India Environment Portal copy, SCC Online summary): new
//   connection / modification after a complete application within 3 days
//   (metro), 7 days (other municipal areas), 15 days (rural), 30 days (rural
//   hilly areas). States align their supply codes.
// - Electricity Act 2003 s.42(5) (Consumer Grievance Redressal Forum) and
//   s.42(6) (Electricity Ombudsman).
// Connection charges, security deposit and the exact form are set by each
// DISCOM / state commission, so no amount is given.
export const newElectricityConnectionApplication: Letter = {
  slug: "new-electricity-connection-application",
  category: "utility",
  emoji: "💡",
  title: "New Electricity Connection Application in Hindi 2026: नया बिजली कनेक्शन",
  description: "नए बिजली कनेक्शन के लिए आवेदन पत्र (हिंदी/English) भरें और प्रिंट करें। ज़रूरी दस्तावेज़, शहर में 3-7 दिन व गांव में 15 दिन की समय सीमा और शिकायत का रास्ता।",
  h1: "नया बिजली कनेक्शन आवेदन पत्र 2026: भरें, प्रिंट करें और जमा करें",
  short: { hi: "नया बिजली कनेक्शन आवेदन", en: "New electricity connection" },
  lead: "घर या दुकान में नया बिजली कनेक्शन लेने के लिए अपने इलाके की बिजली कंपनी (DISCOM) के <strong>सहायक अभियंता / उपखंड अधिकारी (SDO)</strong> को आवेदन दिया जाता है। बिजली उपभोक्ता अधिकार नियम 2020 (2024 संशोधन) के अनुसार पूरा आवेदन मिलने के बाद कनेक्शन <strong>महानगर में 3 दिन, अन्य शहरों में 7 दिन और गांव में 15 दिन</strong> (पहाड़ी गांव में 30 दिन) में देना होता है। ज़्यादातर DISCOM अपना फॉर्म और ऑनलाइन पोर्टल रखती हैं; यह पत्र उसके साथ या जहां पत्र चलता है वहां काम आएगा।",
  facts: [
    ["किसे दें", "DISCOM के उपखंड / सब-डिवीजन कार्यालय के SDO / सहायक अभियंता"],
    ["समय सीमा", "पूरा आवेदन मिलने के बाद: महानगर 3 दिन, शहर 7 दिन, गांव 15 दिन, पहाड़ी गांव 30 दिन"],
    ["फीस", "कनेक्शन चार्ज और सिक्योरिटी राज्य/DISCOM तय करती है; दफ्तर से पूछें"],
    ["शिकायत", "DISCOM शिकायत अधिकारी → उपभोक्ता शिकायत निवारण फोरम (CGRF) → विद्युत लोकपाल"],
  ],
  to: "अपने इलाके की बिजली वितरण कंपनी (DISCOM) के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता / कार्यपालक अभियंता</strong> को। बिल पर लिखे सब-डिवीजन का नाम या पड़ोसी के बिल से सही दफ्तर पता करें।",
  when: [
    "नए घर, दुकान या खेत (ट्यूबवेल) के लिए पहली बार बिजली कनेक्शन चाहिए",
    "किराये के मकान में अपने नाम से अलग मीटर लगवाना हो",
    "ऑनलाइन आवेदन के बाद दफ्तर ने लिखित आवेदन भी मांगा हो",
    "आवेदन देने के बाद तय समय में कनेक्शन न मिला हो और याद दिलाना हो",
  ],
  fields: [
    { key: "office", label: { hi: "बिजली दफ्तर का नाम और पता", en: "Electricity office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सहायक अभियंता, विद्युत उपखंड-2, दक्षिण बिहार पावर डिस्ट्रीब्यूशन कंपनी, गया", en: "e.g. Assistant Engineer, Electricity Sub-Division 2, Gaya" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" }, required: true },
    { key: "address", label: { hi: "जिस जगह कनेक्शन चाहिए उसका पूरा पता", en: "Full address where connection is needed" }, type: "textarea", required: true, placeholder: { hi: "मकान नं., गली/मोहल्ला, गांव/वार्ड, थाना, ज़िला, पिन", en: "House no., street, village/ward, district, PIN" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "ctype", label: { hi: "कनेक्शन किस काम के लिए", en: "Purpose of connection" }, type: "select", options: [
      { hi: "घरेलू (Domestic)", en: "Domestic" },
      { hi: "व्यावसायिक / दुकान (Commercial)", en: "Commercial / shop" },
      { hi: "कृषि / ट्यूबवेल (Agriculture)", en: "Agriculture / tube well" },
      { hi: "औद्योगिक (Industrial)", en: "Industrial" },
    ] },
    { key: "load", label: { hi: "कितना लोड चाहिए (kW)", en: "Load required (kW)" }, required: true, placeholder: { hi: "जैसे: 2 kW", en: "e.g. 2 kW" }, hint: { hi: "पंखे, बल्ब, फ्रिज, कूलर/AC जोड़कर अंदाज़ा लगाएं; पक्का न हो तो दफ्तर से पूछें", en: "Add up fans, lights, fridge, cooler/AC; ask the office if unsure" } },
    { key: "phase", label: { hi: "फेज़", en: "Phase" }, type: "select", options: [
      { hi: "सिंगल फेज़", en: "Single phase" },
      { hi: "थ्री फेज़", en: "Three phase" },
    ] },
    { key: "occupancy", label: { hi: "जगह पर आपका हक", en: "Your right over the premises" }, type: "select", options: [
      { hi: "मैं इस मकान/ज़मीन का मालिक हूं", en: "I am the owner of the premises" },
      { hi: "मैं किरायेदार हूं, मकान मालिक की अनुमति (NOC) संलग्न है", en: "I am a tenant; owner's consent (NOC) enclosed" },
      { hi: "पैतृक / परिवार की संपत्ति है, परिवार की सहमति संलग्न है", en: "Ancestral / family property; family consent enclosed" },
    ] },
    { key: "nearpole", label: { hi: "पास के खंभे / पड़ोसी का खाता नंबर (चाहें तो)", en: "Nearest pole / neighbour's account no. (optional)" }, placeholder: { hi: "जैसे: पोल नं. 14, पड़ोसी का उपभोक्ता नं. ___", en: "e.g. Pole no. 14, neighbour's consumer no. ___" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: नया बिजली कनेक्शन देने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, नीचे लिखे पते पर रहता/रहती हूं:
{{address}}

इस परिसर में अभी कोई बिजली कनेक्शन नहीं है। मुझे यहां {{ctype}} उपयोग के लिए {{load}} लोड का {{phase}} बिजली कनेक्शन चाहिए। {{occupancy}}। पहचान: {{nearpole}}।

मैं कनेक्शन से जुड़े सभी नियमानुसार शुल्क और सिक्योरिटी राशि जमा करने तथा परिसर की वायरिंग सुरक्षित रखने के लिए तैयार हूं। कृपया आवश्यक जांच कराकर बिजली उपभोक्ता अधिकार नियमों में तय समय सीमा के अंदर मेरे परिसर में नया कनेक्शन और मीटर लगाने की कृपा करें, तथा आवेदन की पावती/आवेदन संख्या दें।

संलग्न:
1. पहचान प्रमाण (आधार / वोटर कार्ड) की स्व-प्रमाणित कॉपी
2. मालिकाना या कब्ज़े का प्रमाण (रजिस्ट्री / खतियान / संपत्ति कर रसीद / किरायानामा + मालिक की NOC)
3. पासपोर्ट साइज़ फोटो
4. DISCOM का भरा हुआ आवेदन फॉर्म (यदि मांगा गया हो)

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for a new electricity connection.

Sir/Madam,

I, {{name}}, son/daughter/wife of {{father}}, reside at the following address:
{{address}}

There is no electricity connection at these premises at present. I request a {{phase}} electricity connection with a load of {{load}} for {{ctype}} use. {{occupancy}}. Identification: {{nearpole}}.

I am ready to deposit all applicable charges and security as per rules and to keep the internal wiring of the premises safe. Kindly get the necessary inspection done and release the new connection and meter within the time limit fixed under the Electricity (Rights of Consumers) Rules, and give me an acknowledgement / application number.

Enclosures:
1. Self-attested copy of identity proof (Aadhaar / Voter ID)
2. Proof of ownership or occupancy (sale deed / land record / property tax receipt / rent agreement + owner's NOC)
3. Passport size photograph
4. Filled DISCOM application form (if required)

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पहचान प्रमाण: आधार, वोटर कार्ड, पैन या पासपोर्ट की स्व-प्रमाणित कॉपी",
    "मालिकाना/कब्ज़े का प्रमाण: रजिस्ट्री, खतियान/जमाबंदी, संपत्ति कर रसीद या आवंटन पत्र",
    "किरायेदार हों तो किरायानामा और मकान मालिक की लिखित सहमति (NOC)",
    "पासपोर्ट साइज़ फोटो; बड़े लोड पर कई DISCOM वायरिंग का टेस्ट रिपोर्ट (लाइसेंसी इलेक्ट्रीशियन से) मांगती हैं",
  ],
  submit: [
    "पहले अपनी DISCOM की वेबसाइट/ऐप देखें; ज़्यादातर कंपनियां नया कनेक्शन ऑनलाइन लेती हैं। ऑनलाइन फॉर्म भरें या दफ्तर से मुफ्त फॉर्म लें।",
    "यह पत्र, फॉर्म और दस्तावेज़ उपखंड कार्यालय में जमा करें और <strong>पावती / आवेदन संख्या</strong> ज़रूर लें।",
    "दफ्तर जांच (साइट इंस्पेक्शन) करेगा और डिमांड नोट देगा; उसकी राशि रसीद लेकर ही जमा करें।",
    "तय समय में कनेक्शन न मिले तो DISCOM के शिकायत नंबर/पोर्टल पर शिकायत करें; फिर भी हल न हो तो <strong>उपभोक्ता शिकायत निवारण फोरम (CGRF)</strong> और उसके बाद <strong>विद्युत लोकपाल (Electricity Ombudsman)</strong> के पास जाएं।",
  ],
  tips: [
    "पता बिल्कुल वैसा लिखें जैसा मालिकाना कागज़ में है; अलग पता होने पर आवेदन रुक सकता है।",
    "ज़रूरत से बहुत कम लोड न लिखें; बाद में ज़्यादा खपत पर लोड बढ़वाना पड़ता है।",
    "किसी बिचौलिये को नकद न दें; हर भुगतान DISCOM की रसीद या ऑनलाइन ही करें।",
    "आवेदन की कॉपी और पावती संभाल कर रखें; समय सीमा इसी तारीख से गिनी जाती है।",
  ],
  notice: "ज़्यादातर बिजली कंपनियां अपना तय फॉर्म या ऑनलाइन आवेदन मांगती हैं। यह पत्र साथ में लगाने या जहां सादा आवेदन चलता है वहां के लिए है। शुल्क और दस्तावेज़ राज्य के हिसाब से अलग होते हैं।",
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय (Ministry of Power)", note: "बिजली उपभोक्ता अधिकार नियम" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल", note: "लंबे समय तक सुनवाई न हो तो" },
  ],
  related: ["/service/electricity-connection-bill.html", "/service/saubhagya-free-electricity-connection.html", "/service/pm-surya-ghar-muft-bijli.html"],
  faq: [
    { q: "नया बिजली कनेक्शन कितने दिन में मिलता है?", a: "बिजली उपभोक्ता अधिकार नियम (2024 संशोधन) के अनुसार पूरा आवेदन मिलने के बाद महानगर में 3 दिन, अन्य शहरों में 7 दिन, गांव में 15 दिन और पहाड़ी गांव में 30 दिन। खंभा या ट्रांसफॉर्मर लगाना हो तो ज़्यादा समय लग सकता है।" },
    { q: "नए बिजली कनेक्शन के लिए कौन से दस्तावेज़ चाहिए?", a: "पहचान प्रमाण और मकान/ज़मीन पर मालिकाना या कब्ज़े का प्रमाण मुख्य हैं। किरायेदार को मकान मालिक की सहमति लगानी होती है। पूरी सूची आपकी DISCOM तय करती है।" },
    { q: "नए बिजली कनेक्शन की फीस कितनी है?", a: "कनेक्शन चार्ज, मीटर और सिक्योरिटी राशि हर राज्य की बिजली कंपनी और नियामक आयोग तय करते हैं। आवेदन के बाद मिलने वाले डिमांड नोट में सही राशि लिखी होती है।" },
    { q: "किरायेदार अपने नाम से बिजली कनेक्शन ले सकता है?", a: "ज़्यादातर राज्यों में हां, किरायानामा और मकान मालिक की लिखित सहमति (NOC) के साथ। नियम DISCOM के हिसाब से अलग हो सकते हैं।" },
    { q: "समय पर कनेक्शन न मिले तो शिकायत कहां करें?", a: "पहले DISCOM के शिकायत नंबर या पोर्टल पर। हल न हो तो कंपनी के उपभोक्ता शिकायत निवारण फोरम (CGRF) में, और उसके फैसले से संतुष्ट न हों तो विद्युत लोकपाल के पास।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
