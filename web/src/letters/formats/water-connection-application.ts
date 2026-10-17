import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Twelfth Schedule (74th Amendment), item 5: water
//   supply for domestic, industrial and commercial purposes is a municipal
//   function; in towns it is run by the municipal body or a state water
//   board / Jal Board / Jal Nigam under each state's law.
// - pmindia.gov.in news update: Jal Jeevan Mission extended to December 2028
//   (rural household tap connections through the gram panchayat / village
//   water and sanitation committee and the state PHED / Jal Jeevan Mission).
// - Same research as web/src/guides/doc/water-supply-connection-bill.ts
//   (15 Oct 2026): no national fee, time limit or helpline exists.
// Fees, road-cutting charges, documents and time limits are set by each city
// / water board, so none is given.
export const waterConnectionApplication: Letter = {
  slug: "water-connection-application",
  category: "utility",
  emoji: "🚰",
  title: "New Water Connection Application in Hindi 2026: नया पानी कनेक्शन",
  description: "नगर निगम/नगर पालिका या जल बोर्ड को नया पानी (नल) कनेक्शन लेने का आवेदन पत्र (हिंदी/English)। ज़रूरी दस्तावेज़, कहां जमा करें और शिकायत का रास्ता।",
  h1: "नया पानी कनेक्शन आवेदन पत्र 2026",
  short: { hi: "नया पानी कनेक्शन आवेदन", en: "New water connection" },
  lead: "शहर में घर के लिए नल (पानी) कनेक्शन नगर निगम / नगर पालिका के <strong>जल कल विभाग</strong> या राज्य के <strong>जल बोर्ड / जल निगम / PHED</strong> से मिलता है; गांव में हर घर नल का काम <strong>जल जीवन मिशन</strong> के तहत ग्राम पंचायत और PHED करते हैं। आवेदन संबंधित दफ्तर के कार्यपालक/सहायक अभियंता को दिया जाता है। शुल्क, सड़क खुदाई का चार्ज और समय सीमा हर शहर के नियम से तय होते हैं।",
  facts: [
    ["किसे दें", "नगर निकाय का जल कल विभाग / जल बोर्ड / PHED के सहायक या कार्यपालक अभियंता"],
    ["गांव में", "ग्राम पंचायत / पानी समिति और PHED (जल जीवन मिशन)"],
    ["फीस", "कनेक्शन शुल्क, सिक्योरिटी और सड़क खुदाई चार्ज शहर के हिसाब से अलग; दफ्तर से पूछें"],
    ["शिकायत", "नगर निकाय/जल बोर्ड का शिकायत नंबर → राज्य लोक शिकायत पोर्टल / CPGRAMS"],
  ],
  to: "शहर में: <strong>नगर निगम / नगर पालिका के जल कल विभाग</strong> या <strong>जल बोर्ड / जल निगम</strong> के ज़ोनल कार्यालय के सहायक अभियंता को। गांव में: <strong>ग्राम पंचायत के मुखिया/सरपंच</strong> और ब्लॉक के PHED कार्यालय को।",
  when: [
    "नया मकान बना है और पानी का नल कनेक्शन लेना है",
    "किराये के मकान/फ्लैट में अलग पानी कनेक्शन चाहिए",
    "गांव में जल जीवन मिशन की पाइपलाइन आई है पर आपके घर नल नहीं लगा",
    "ऑनलाइन आवेदन के बाद लिखित आवेदन भी मांगा गया हो",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सहायक अभियंता, जल कल विभाग, नगर निगम, लखनऊ (ज़ोन-3)", en: "e.g. Assistant Engineer, Water Works Dept., Municipal Corporation, Lucknow (Zone 3)" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "जहां कनेक्शन चाहिए उसका पता", en: "Address where connection is needed" }, type: "textarea", required: true, placeholder: { hi: "मकान नं., गली, वार्ड नं., मोहल्ला, शहर, पिन", en: "House no., street, ward no., locality, city, PIN" } },
    { key: "ptax", label: { hi: "संपत्ति कर / हाउस टैक्स ID (हो तो)", en: "Property tax / house tax ID (if any)" } },
    { key: "use", label: { hi: "कनेक्शन किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "घरेलू उपयोग", en: "Domestic use" },
      { hi: "व्यावसायिक उपयोग (दुकान/होटल)", en: "Commercial use (shop/hotel)" },
    ] },
    { key: "size", label: { hi: "पाइप का साइज़ (पता हो तो)", en: "Pipe size (if known)" }, placeholder: { hi: "जैसे: 15 mm (½ इंच)", en: "e.g. 15 mm (½ inch)" } },
    { key: "occupancy", label: { hi: "मकान पर आपका हक", en: "Your right over the house" }, type: "select", options: [
      { hi: "मैं मकान का मालिक हूं", en: "I am the owner of the house" },
      { hi: "मैं किरायेदार हूं, मकान मालिक की सहमति (NOC) संलग्न है", en: "I am a tenant; owner's consent (NOC) enclosed" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: नया पानी (नल) कनेक्शन देने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, नीचे लिखे पते पर रहता/रहती हूं:
{{address}}
संपत्ति कर ID: {{ptax}}

मेरे मकान में अभी पानी का कोई कनेक्शन नहीं है, जिससे परिवार को पीने और रोज़मर्रा के पानी के लिए बहुत परेशानी हो रही है। {{occupancy}}।

अतः निवेदन है कि मेरे मकान के लिए {{use}} हेतु {{size}} का नया पानी कनेक्शन स्वीकृत करने की कृपा करें। मैं नियमानुसार कनेक्शन शुल्क, सिक्योरिटी और सड़क खुदाई/मरम्मत का शुल्क जमा करने तथा पानी के उपयोग के सभी नियमों का पालन करने को तैयार हूं। कृपया आवेदन की पावती/आवेदन संख्या दें।

संलग्न:
1. पहचान प्रमाण (आधार / वोटर कार्ड) की स्व-प्रमाणित कॉपी
2. मालिकाना प्रमाण (रजिस्ट्री / संपत्ति कर रसीद) या किरायानामा + मालिक की NOC
3. पासपोर्ट साइज़ फोटो

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for a new water (tap) connection.

Sir/Madam,

I, {{name}}, son/daughter/wife of {{father}}, reside at the following address:
{{address}}
Property tax ID: {{ptax}}

There is no water connection in my house at present, which is causing great difficulty to my family for drinking and daily use. {{occupancy}}.

I therefore request you to sanction a new water connection of {{size}} for {{use}} for my house. I am ready to pay the connection charges, security and road cutting/restoration charges as per rules and to follow all rules on water use. Kindly give me an acknowledgement / application number.

Enclosures:
1. Self-attested copy of identity proof (Aadhaar / Voter ID)
2. Proof of ownership (sale deed / property tax receipt) or rent agreement + owner's NOC
3. Passport size photograph

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पहचान प्रमाण: आधार, वोटर कार्ड आदि की स्व-प्रमाणित कॉपी",
    "मालिकाना प्रमाण: रजिस्ट्री, नामांतरण आदेश या ताज़ा संपत्ति कर रसीद",
    "किरायेदार हों तो किरायानामा और मकान मालिक की लिखित सहमति",
    "कई शहर नक्शा पास होने का प्रमाण या प्लंबर का विवरण भी मांगते हैं; दफ्तर से पूछें",
  ],
  submit: [
    "पहले अपने नगर निगम / जल बोर्ड की वेबसाइट देखें; कई शहरों में पानी कनेक्शन ऑनलाइन या नागरिक सुविधा केंद्र से होता है।",
    "ऑफलाइन हो तो यह पत्र और फॉर्म ज़ोनल/वार्ड कार्यालय में जमा करें और पावती लें।",
    "जांच के बाद डिमांड नोट मिलेगा; राशि रसीद लेकर जमा करें। लाइन जोड़ने का काम विभाग या उसके अधिकृत प्लंबर से कराएं।",
    "लंबे समय तक कार्रवाई न हो तो नगर निकाय के शिकायत पोर्टल/नंबर पर, फिर राज्य के लोक शिकायत पोर्टल या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें।",
  ],
  tips: [
    "बिना अनुमति खुद पाइप जोड़ना अवैध कनेक्शन माना जाता है और जुर्माना लग सकता है।",
    "संपत्ति कर बकाया हो तो कई शहर कनेक्शन रोक देते हैं; पहले टैक्स जमा करें।",
    "गांव में जल जीवन मिशन का कनेक्शन मुफ्त है या नहीं, यह राज्य की नीति पर निर्भर है; पंचायत से लिखित में पूछें।",
    "आवेदन और सभी रसीदों की कॉपी संभाल कर रखें।",
  ],
  notice: "पानी कनेक्शन का फॉर्म, शुल्क और नियम हर शहर/जल बोर्ड के अलग होते हैं। कई जगह तय फॉर्म या ऑनलाइन आवेदन ही चलता है; यह पत्र उसके साथ लगाया जा सकता है।",
  official: [
    { href: "https://jaljeevanmission.gov.in/", title: "जल जीवन मिशन (गांव में नल कनेक्शन)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/water-supply-connection-bill.html", "/service/national-water-grid-jal-jeevan.html", "/service/municipal-property-tax.html"],
  faq: [
    { q: "नया पानी कनेक्शन कैसे लें?", a: "शहर में नगर निगम/नगर पालिका के जल कल विभाग या जल बोर्ड में (कई जगह ऑनलाइन) आवेदन दें, साथ में पहचान और मालिकाना प्रमाण लगाएं, फिर डिमांड नोट की राशि जमा करें। गांव में ग्राम पंचायत और PHED से संपर्क करें।" },
    { q: "पानी कनेक्शन की फीस कितनी है?", a: "कनेक्शन शुल्क, सिक्योरिटी और सड़क खुदाई का चार्ज हर शहर और जल बोर्ड अलग तय करता है। सही राशि दफ्तर या उसकी वेबसाइट से पता करें।" },
    { q: "किरायेदार पानी कनेक्शन ले सकता है?", a: "ज़्यादातर जगह मकान मालिक की लिखित सहमति और किरायानामा के साथ ले सकता है। कई शहर कनेक्शन सिर्फ मालिक के नाम देते हैं; नियम दफ्तर से पूछें।" },
    { q: "गांव में हर घर नल का कनेक्शन कैसे मिलेगा?", a: "जल जीवन मिशन के तहत गांव में पाइपलाइन बिछने पर घरों को नल कनेक्शन दिया जाता है। आपके घर नल न लगा हो तो ग्राम पंचायत/पानी समिति और ब्लॉक के PHED कार्यालय को लिखित आवेदन दें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
