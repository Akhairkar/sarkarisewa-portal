import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity (Rights of Consumers) Rules 2020 (MoP gazette, copy on
//   merc.gov.in): "occupier" includes a tenant; r.4 lists documents for a
//   new connection (identity + proof of ownership or occupancy) and r.4(9)
//   bars the licensee from asking for more (Patna HC writ discussing it).
//   State supply codes differ: e.g. Puducherry allows an indemnity bond
//   where the owner's NOC cannot be produced; Goa asks for proof of
//   ownership/occupancy. Hence "discom ke niyam".
// - GST registration (gst.gov.in): for rented premises, rent/lease
//   agreement or a consent letter from the owner with the owner's proof.
// - UIDAI / banks: registered rent agreement is commonly accepted address
//   proof; acceptance of an unregistered agreement or landlord letter is
//   decided by the agency, so the page says to check with them.
export const landlordNocLetter: Letter = {
  slug: "landlord-noc-letter",
  category: "personal",
  emoji: "🏠",
  title: "Landlord NOC Format in Hindi 2026: मकान मालिक अनापत्ति प्रमाण पत्र",
  description: "किरायेदार के लिए मकान मालिक का NOC (अनापत्ति पत्र) फॉर्मेट, हिंदी/English में: बिजली कनेक्शन, पते का सबूत, GST, गैस के लिए। भरें, प्रिंट करें।",
  h1: "मकान मालिक का NOC (अनापत्ति प्रमाण पत्र) फॉर्मेट 2026",
  short: { hi: "मकान मालिक NOC", en: "Landlord NOC" },
  lead: "किराये के मकान/दुकान में बिजली का नया कनेक्शन, गैस कनेक्शन, GST रजिस्ट्रेशन, बैंक या स्कूल में पते का सबूत देने के लिए <strong>मकान मालिक का अनापत्ति प्रमाण पत्र (NOC)</strong> मांगा जाता है। यह पत्र <strong>मकान मालिक</strong> लिखता और हस्ताक्षर करता है, जिसमें लिखा होता है कि किरायेदार उस पते पर रहता है और उसे तय काम पर कोई आपत्ति नहीं। साथ में <strong>किरायानामा</strong> और मालिक के स्वामित्व/पहचान का सबूत लगाएं। हर विभाग अपने नियम से तय करता है कि NOC मानेगा या कौन सा कागज़ चाहिए।",
  facts: [
    ["कौन लिखता है", "मकान मालिक (किरायेदार के नाम)"],
    ["किसे दिया जाता है", "बिजली कंपनी, गैस एजेंसी, GST, बैंक आदि"],
    ["साथ में", "किरायानामा + मालिक का स्वामित्व और पहचान प्रमाण"],
    ["बिजली कनेक्शन", "किरायेदार भी 'occupier' है; कागज़ discom के नियम से"],
  ],
  to: "जिस विभाग/संस्था में जमा करना है, उसे: जैसे बिजली कंपनी के <strong>सहायक/कनिष्ठ अभियंता</strong>, गैस एजेंसी, GST अधिकारी, बैंक शाखा प्रबंधक; या \"संबंधित अधिकारी\" (To Whom It May Concern)।",
  when: [
    "किराये के घर/दुकान में बिजली का नया कनेक्शन या मीटर लगवाना",
    "LPG/PNG गैस कनेक्शन किराये के पते पर लेना",
    "दुकान/ऑफिस के लिए GST या दुकान-स्थापना रजिस्ट्रेशन",
    "बैंक, स्कूल, पासपोर्ट या आधार के लिए पते का सबूत",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (विभाग/अधिकारी)", en: "To (department/officer)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सहायक अभियंता, विद्युत वितरण खंड / संबंधित अधिकारी", en: "e.g. Assistant Engineer, Electricity Distribution Division / To Whom It May Concern" } },
    { key: "owner", label: { hi: "मकान मालिक का नाम", en: "Landlord's name" }, required: true },
    { key: "ownerfather", label: { hi: "मालिक के पिता/पति का नाम", en: "Landlord's father's/husband's name" }, required: true },
    { key: "property", label: { hi: "संपत्ति का पूरा पता", en: "Full address of property" }, type: "textarea", required: true },
    { key: "portion", label: { hi: "कौन सा हिस्सा किराये पर", en: "Portion rented" }, placeholder: { hi: "जैसे: पहली मंज़िल, 2 कमरे / भूतल की दुकान", en: "e.g. first floor, 2 rooms / ground-floor shop" } },
    { key: "tenant", label: { hi: "किरायेदार का नाम", en: "Tenant's name" }, required: true },
    { key: "tenantfather", label: { hi: "किरायेदार के पिता/पति का नाम", en: "Tenant's father's/husband's name" }, required: true },
    { key: "since", label: { hi: "कब से किराये पर", en: "Tenant since" }, type: "date", required: true },
    { key: "purpose", label: { hi: "NOC किस काम के लिए", en: "Purpose of NOC" }, type: "select", options: [
      { hi: "अपने नाम से बिजली का नया कनेक्शन/मीटर लेने", en: "taking a new electricity connection/meter in their name" },
      { hi: "गैस (LPG/PNG) कनेक्शन लेने", en: "taking a gas (LPG/PNG) connection" },
      { hi: "इस पते पर GST/व्यापार पंजीकरण कराने", en: "registering GST/business at this address" },
      { hi: "इस पते को निवास प्रमाण के रूप में उपयोग करने", en: "using this address as proof of residence" },
    ] },
    { key: "phone", label: { hi: "मकान मालिक का मोबाइल", en: "Landlord's mobile" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: अनापत्ति प्रमाण पत्र (NOC) – किरायेदार {{tenant}}

महोदय/महोदया,

मैं, {{owner}}, पुत्र/पुत्री/पत्नी {{ownerfather}}, निम्नलिखित संपत्ति का स्वामी/स्वामिनी हूं:
{{property}}

मैंने इस संपत्ति का निम्न भाग श्री/श्रीमती {{tenant}}, पुत्र/पुत्री/पत्नी {{tenantfather}}, को {{since}} से किराये पर दिया है और वे इस पते पर रह रहे/कारोबार कर रहे हैं।
किराये पर दिया भाग: {{portion}}

मुझे श्री/श्रीमती {{tenant}} द्वारा {{purpose}} पर कोई आपत्ति नहीं है।

यह भी स्पष्ट किया जाता है कि यह अनापत्ति पत्र केवल ऊपर लिखे काम के लिए है। इससे किरायेदार को संपत्ति पर कोई स्वामित्व अधिकार नहीं मिलता, और किरायेदारी समाप्त होने पर इस पत्र का उपयोग नहीं किया जाएगा।

मकान मालिक के हस्ताक्षर: ________
नाम: {{owner}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. स्वामित्व का प्रमाण (बिजली बिल/संपत्ति कर रसीद/रजिस्ट्री की प्रति)
2. मकान मालिक के पहचान पत्र की स्व-प्रमाणित प्रति
3. किरायानामा (Rent Agreement) की प्रति`,
    en: `To,
{{office}}

Subject: No Objection Certificate (NOC) – tenant {{tenant}}

Sir/Madam,

I, {{owner}}, son/daughter/wife of {{ownerfather}}, am the owner of the following property:
{{property}}

I have let out the following portion of this property to Mr./Ms. {{tenant}}, son/daughter/wife of {{tenantfather}}, since {{since}}, and they are residing/doing business at this address.
Portion let out: {{portion}}

I have no objection to Mr./Ms. {{tenant}} {{purpose}}.

It is also clarified that this NOC is only for the purpose stated above. It does not give the tenant any ownership right in the property, and it shall not be used after the tenancy ends.

Signature of landlord: ________
Name: {{owner}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Proof of ownership (electricity bill/property tax receipt/copy of sale deed)
2. Self-attested copy of landlord's ID proof
3. Copy of rent agreement`,
  },
  attach: [
    "मकान मालिक के स्वामित्व का सबूत: संपत्ति कर रसीद, बिजली बिल या रजिस्ट्री/खतौनी की कॉपी",
    "मकान मालिक के पहचान पत्र (आधार/वोटर ID) की स्व-प्रमाणित कॉपी",
    'किरायानामा (<a href="/rent-agreement/">Rent Agreement</a>); कई विभाग रजिस्टर्ड/नोटरी किरायानामा मांगते हैं',
    "किरायेदार का पहचान पत्र (आवेदन के साथ अलग से)",
  ],
  submit: [
    "मकान मालिक पत्र पर हस्ताक्षर करे; कई विभाग NOC नोटरी से सत्यापित या स्टांप पेपर पर मांगते हैं, पहले पूछ लें।",
    "किरायेदार यह NOC और संलग्न कागज़ अपने आवेदन (बिजली/गैस/GST/बैंक फॉर्म) के साथ जमा करे।",
    "बिजली कनेक्शन में मालिक NOC न दे तो discom के नियम देखें: कई राज्यों में किरायेदार किरायानामा/कब्ज़े के सबूत या क्षतिपूर्ति बंधपत्र (indemnity bond) से भी कनेक्शन ले सकता है।",
    "आवेदन की पावती/रसीद संभालें; काम में देरी हो तो उसी विभाग के शिकायत निवारण मंच पर शिकायत करें।",
  ],
  tips: [
    "NOC में काम साफ लिखें (जैसे \"बिजली कनेक्शन के लिए\"); खुला-खुला \"किसी भी काम के लिए\" लिखना मालिक के लिए जोखिम है।",
    "मकान मालिक लिखवा सकता है कि NOC से किरायेदार को कोई मालिकाना हक नहीं मिलता; यह लाइन फॉर्मेट में पहले से है।",
    "किरायेदार का पुलिस सत्यापन कई शहरों में ज़रूरी है; उसे भी करा लें।",
    "पते में मकान नंबर, गली, पिन कोड वही लिखें जो बिजली बिल/किरायानामे में है।",
  ],
  notice: "कौन सा कागज़ चाहिए (NOC, किरायानामा, नोटरी या स्टांप पेपर), यह <strong>हर विभाग और राज्य के नियम</strong> से अलग है। जमा करने से पहले बिजली कंपनी, गैस एजेंसी, बैंक या GST अधिकारी से पूछ लें।",
  official: [
    { href: "https://www.gst.gov.in/", title: "GST पोर्टल", note: "किराये के परिसर के लिए मालिक का सहमति पत्र" },
  ],
  related: ["/rent-agreement/", "/service/electricity-connection-bill.html", "/rent-agreement/tenant-police-verification.html", "/service/gst.html"],
  faq: [
    { q: "मकान मालिक का NOC कौन लिखता है?", a: "मकान मालिक लिखता और हस्ताक्षर करता है। किरायेदार यह पत्र अपने आवेदन के साथ बिजली कंपनी, गैस एजेंसी, बैंक आदि में जमा करता है।" },
    { q: "किरायेदार बिजली कनेक्शन कैसे ले?", a: "बिजली उपभोक्ता अधिकार नियम 2020 में 'occupier' में किरायेदार भी शामिल है। पहचान पत्र और कब्ज़े का सबूत (किरायानामा, मालिक का NOC) लगता है; बाकी कागज़ आपकी बिजली कंपनी के नियम से।" },
    { q: "क्या NOC स्टांप पेपर पर होना चाहिए?", a: "हमेशा नहीं। कई जगह सादे कागज़ पर हस्ताक्षर वाला पत्र चलता है; कुछ विभाग नोटरी या स्टांप पेपर मांगते हैं। पहले पूछ लें।" },
    { q: "मकान मालिक NOC न दे तो?", a: "किरायानामा और किराये की रसीदें कब्ज़े का सबूत हैं। बिजली कनेक्शन के लिए कई राज्यों में क्षतिपूर्ति बंधपत्र (indemnity bond) का रास्ता है; अपनी बिजली कंपनी से पूछें।" },
    { q: "GST के लिए किराये की दुकान का कौन सा कागज़ लगता है?", a: "किरायानामा, या उसके न होने पर मालिक का सहमति पत्र (consent letter) और मालिक के स्वामित्व का सबूत, जैसे बिजली बिल या संपत्ति कर रसीद।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
