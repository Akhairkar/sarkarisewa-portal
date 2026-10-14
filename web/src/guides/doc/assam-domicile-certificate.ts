import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - bongaigaon.assam.gov.in/information-and-services/apply-prc (district
//   administration, opened directly; last updated 06.07.2022): PRC issued to
//   Indian citizens only for admission to educational institutions that insist
//   on it; issued after examination by Deputy Commissioners and SDOs (Civil);
//   valid only for the specific institution and purpose; apply at the Circle
//   Office / CSC / PFC in the DC's or SDO(C)'s office; service charge Rs 30,
//   printing Rs 10 and scanning Rs 5 per page (not for senior citizens); total
//   time 14 days; documents: two photos, land records with up-to-date land
//   revenue receipt, Indian passport or certified copy of NRC 1951, certified
//   voter list copy for linkage, PRC of a family member, birth certificate,
//   HSLC certificate/admit card, employment certificate if any, documents of
//   parents/forefathers residing in Assam continuously for 50 years or of a
//   guardian residing continuously for 20 years; "Online: Yes".
// - Search results: sribhumi.assam.gov.in (same "Apply for PRC" page),
//   dimahasao.assam.gov.in "Apply for Permanent Residence Certificate for
//   Higher Educational Purpose", sewasetu.assam.gov.in PRC service pages for
//   the autonomous council areas (NCHAC) with their own fees (not used).
// - Sewa Setu portal URL and helpline 1800-345-3574 as already recorded in
//   assam-income-certificate.ts.
// Left out (not confirmable on an official page we could open): the exact
// Sewa Setu service name and online fee for general districts, ARTPS time
// limit, appeal officers.
export const assamDomicileCertificate: DocGuide = {
  state: { slug: "assam", hi: "असम" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Assam Domicile Certificate 2026: Apply & Status",
  description: "असम स्थायी निवास प्रमाण पत्र (PRC) 2026: 50 साल (माता-पिता/पूर्वज) या 20 साल (अभिभावक) निवास की शर्त, NRC 1951/पासपोर्ट समेत कागज़, CSC/PFC से आवेदन, 14 दिन और शुल्क।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "असम स्थायी निवास प्रमाण पत्र (PRC) 2026: शर्तें, कागज़ और आवेदन",
  lead: "असम में निवास का प्रमाण पत्र <strong>Permanent Residence Certificate (PRC)</strong> कहलाता है। ज़िला प्रशासन के अनुसार PRC सिर्फ भारतीय नागरिकों को और मुख्य रूप से <strong>शैक्षणिक संस्थान में दाखिले</strong> के लिए दिया जाता है, और यह उसी संस्थान/काम के लिए मान्य होता है जिसके लिए बना है। इसे डिप्टी कमिश्नर (DC) या SDO (सिविल) जारी करते हैं; आवेदन सर्कल ऑफिस, CSC या DC/SDO(C) ऑफिस के PFC पर होता है।",
  facts: [
    ["शर्त", "माता-पिता/पूर्वज 50 साल या अभिभावक 20 साल से असम में"],
    ["जारी करते हैं", "डिप्टी कमिश्नर / SDO (सिविल)"],
    ["समय", "14 दिन (ज़िला पेज)"],
    ["शुल्क", "सेवा शुल्क ₹30 + प्रिंटिंग/स्कैनिंग"],
  ],
  notice: "<strong>ध्यान दें:</strong> ज़िला प्रशासन के अनुसार PRC में साफ लिखा होता है कि यह <strong>सिर्फ उसी संस्थान में दाखिले</strong> के लिए मान्य है जिसके लिए बना है, किसी और काम के लिए नहीं। दूसरे संस्थान या काम के लिए नया PRC बनवाना पड़ सकता है।",
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "आवेदक <strong>भारत का नागरिक</strong> हो, और",
        "उसके <strong>माता-पिता और पूर्वज कम से कम 50 साल</strong> से लगातार असम में रह रहे हों, <strong>या</strong>",
        "उसके <strong>अभिभावक (guardian) कम से कम 20 साल</strong> से लगातार असम में रह रहे हों",
      ],
      callout: { kind: "info", html: "कार्बी आंगलोंग (KAAC) और दिमा हसाओ (NCHAC) जैसे स्वायत्त परिषद क्षेत्रों में PRC की अलग सेवाएं और अलग शुल्क हैं। वहां के निवासी अपनी परिषद/ज़िले की प्रक्रिया देखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (ज़िला पेज की सूची)",
      list: [
        "<strong>पासपोर्ट साइज़ फोटो</strong> (दो)",
        "<strong>ज़मीन/मकान का रिकॉर्ड</strong> (अगर हो) और <strong>भू-राजस्व की ताज़ा रसीद</strong>",
        "<strong>भारतीय पासपोर्ट की कॉपी</strong> या <strong>NRC 1951 की सत्यापित कॉपी</strong>",
        "<strong>मतदाता सूची की सत्यापित कॉपी</strong> (परिवार का संबंध जोड़ने के लिए)",
        "परिवार के किसी सदस्य का <strong>PRC</strong> (अगर हो), रिश्ता बताते हुए",
        "<strong>जन्म प्रमाण पत्र</strong> और <strong>HSLC (10वीं) प्रमाण पत्र / एडमिट कार्ड</strong>",
        "नौकरी के कारण असम में हैं तो नियोक्ता का <strong>नियुक्ति प्रमाण पत्र</strong>",
        "माता-पिता/पूर्वजों के <strong>50 साल</strong> या अभिभावक के <strong>20 साल</strong> निवास के कागज़",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "ऊपर के सभी कागज़ और उनकी कॉपी तैयार करें।",
        "अपने <strong>सर्कल ऑफिस</strong>, नज़दीकी <strong>CSC</strong>, या DC/SDO(C) ऑफिस में बने <strong>PFC</strong> पर जाएं।",
        "फॉर्म भरें, कागज़ स्कैन कराएं और शुल्क दें; पावती पर आवेदन नंबर लें।",
        "सर्कल ऑफिसर की जांच के बाद DC या SDO (सिविल) प्रमाण पत्र जारी करते हैं।",
      ],
      callout: { kind: "info", html: "ज़िला पेज पर यह सेवा ऑनलाइन (Online: Yes) बताई गई है। असम की ऑनलाइन सेवाएं <a href=\"https://sewasetu.assam.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Sewa Setu</a> पोर्टल पर हैं; वहां सेवा न मिले तो CSC/PFC से आवेदन कराएं।" },
    },
    {
      id: "fees",
      title: "शुल्क और समय",
      table: {
        head: ["क्या", "राशि / जानकारी"],
        rows: [
          ["सेवा शुल्क", "₹30"],
          ["प्रिंटिंग", "₹10 (वरिष्ठ नागरिकों से नहीं)"],
          ["स्कैनिंग", "₹5 प्रति पेज (वरिष्ठ नागरिकों से नहीं)"],
          ["समय", "14 दिन"],
        ],
      },
      html: "<p>ये दरें और समय बोंगाईगांव ज़िला प्रशासन के पेज (2022) से हैं। केंद्र पर भुगतान से पहले रसीद में लिखी राशि देख लें।</p>",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["50/20 साल के निवास का सबूत नहीं", "पुरानी ज़मीन के कागज़, पुरानी वोटर लिस्ट, NRC 1951 की कॉपी लगाएं"],
          ["वोटर लिस्ट से परिवार का संबंध नहीं जुड़ा", "माता-पिता/दादा-दादी के नाम वाली पुरानी वोटर लिस्ट की सत्यापित कॉपी लगाएं"],
          ["भू-राजस्व की रसीद पुरानी", "सर्कल ऑफिस में भू-राजस्व भरकर नई रसीद लें"],
          ["PRC दूसरे संस्थान में नहीं चला", "PRC उसी संस्थान के लिए मान्य होता है; नए संस्थान के लिए नया आवेदन करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद",
      list: [
        "अपने ज़िले का <strong>DC ऑफिस / सर्कल ऑफिस / CSC</strong>",
        "Sewa Setu हेल्पलाइन: <strong>1800-345-3574</strong>",
      ],
    },
  ],
  official: [
    { href: "https://bongaigaon.assam.gov.in/information-and-services/apply-prc", title: "Apply for PRC: शर्तें, कागज़, शुल्क (ज़िला बोंगाईगांव)" },
    { href: "https://sribhumi.assam.gov.in/information-and-services/apply-prc", title: "Apply for PRC (ज़िला श्रीभूमि)" },
    { href: "https://sewasetu.assam.gov.in/", title: "Sewa Setu (असम की ऑनलाइन सेवाएं)" },
  ],
  faq: [
    { q: "असम में PRC के लिए कितने साल का निवास चाहिए?", a: "ज़िला प्रशासन के पेज के अनुसार माता-पिता और पूर्वजों का कम से कम 50 साल, या अभिभावक का कम से कम 20 साल लगातार असम में निवास होना चाहिए, और आवेदक भारतीय नागरिक हो।" },
    { q: "असम PRC कौन जारी करता है?", a: "डिप्टी कमिश्नर या SDO (सिविल), जांच के बाद। आवेदन सर्कल ऑफिस, CSC या DC/SDO(C) ऑफिस के PFC पर होता है।" },
    { q: "PRC बनने में कितना समय और पैसा लगता है?", a: "ज़िला पेज के अनुसार 14 दिन; सेवा शुल्क ₹30, प्रिंटिंग ₹10 और स्कैनिंग ₹5 प्रति पेज (वरिष्ठ नागरिकों से प्रिंटिंग/स्कैनिंग नहीं)।" },
    { q: "क्या एक PRC हर जगह चलता है?", a: "नहीं। ज़िला पेज के अनुसार PRC सिर्फ उसी संस्थान में दाखिले के लिए मान्य होता है जिसके लिए बना है।" },
  ],
  related: [
    { href: "/states/assam-caste-certificate.html", emoji: "📜", title: "असम जाति प्रमाण पत्र", text: "SC/ST/OBC, Sewa Setu पर" },
    { href: "/states/assam-income-certificate.html", emoji: "💰", title: "असम आय प्रमाण पत्र", text: "Sewa Setu पर ऑनलाइन" },
    { href: "/states/assam-employment-exchange.html", emoji: "💼", title: "असम रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.assam.gov.in/", label: "📝 Sewa Setu पोर्टल" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
