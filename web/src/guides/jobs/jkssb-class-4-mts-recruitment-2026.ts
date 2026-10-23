import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; jkssb.nic.in not opened from the sandbox, so
// coverage of the official advertisement was used):
// - rojgarlive, sahisarkarijobs, mysarkarinaukri, govtjobguru, careerpower,
//   timesofkashmir, jkbosewallah, testbook, freejobalert: J&K Services
//   Selection Board Advt. No. 09 of 2026 (dated 1 Sep 2026); 2,863 Class-IV
//   (MTS) and Sanitation Worker posts in UT, divisional and district cadres;
//   online 5 Oct - 3 Nov 2026; age on 1 Jan 2026; J&K domicile certificate
//   issued on/before closing date; Class-IV: Matric to 10+2, Sanitation
//   Worker: 8th to 10+2; pay SL-1 ₹14,800-47,100; fee ₹600 (OM) / ₹500
//   (SC/ST-1/ST-2/EWS/PwBD) (one source: timesofkashmir); written test.
// - jkcareerstudyalerts: corrigendum of 1 Oct 2026 changed the cadre-wise
//   breakup. observervoice, freejobalert, navbharatlive report a revised
//   window 14 Oct - 12 Nov 2026; others still show 3 Nov. Not confirmed from
//   the official corrigendum: both dates shown, readers told to apply by 3 Nov.
// Age bands (18-40 for OM in one source) and relaxations not confirmed: left
// to the advertisement.
export const jkssbClass4MtsRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "JKSSB क्लास 4 (MTS) भर्ती 2026" },
  ],
  docHi: "JKSSB क्लास 4 भर्ती 2026",
  title: "JKSSB क्लास 4 MTS भर्ती 2026: 2,863 पद, 8वीं/10वीं पास",
  description: "JKSSB क्लास-IV (MTS) और सफाई कर्मचारी भर्ती 2026: 2,863 पद, विज्ञापन 09/2026। 8वीं/10वीं पास, J&K डोमिसाइल ज़रूरी। आवेदन 3 नवंबर 2026 तक करें।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "JKSSB क्लास 4 (MTS) भर्ती 2026: 2,863 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> जम्मू-कश्मीर सेवा चयन बोर्ड (JKSSB) ने विज्ञापन नं. 09/2026 के तहत <strong>क्लास-IV (मल्टी टास्किंग स्टाफ) और सफाई कर्मचारी (Sanitation Worker) के 2,863 पदों</strong> की भर्ती निकाली है। ऑनलाइन आवेदन 5 अक्टूबर 2026 से चल रहे हैं; मूल विज्ञापन में आखिरी तारीख <strong>3 नवंबर 2026</strong> है। यह भर्ती केवल <strong>जम्मू-कश्मीर के डोमिसाइल</strong> वालों के लिए है।",
  facts: [
    ["कुल पद", "2,863 (क्लास-IV MTS + सफाई कर्मचारी)"],
    ["आखिरी तारीख", "3 नवंबर 2026 (कुछ रिपोर्टों में बढ़कर 12 नवंबर)"],
    ["योग्यता", "MTS: 10वीं पास; सफाई कर्मचारी: 8वीं पास"],
    ["आवेदन", "<a href=\"https://jkssb.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">jkssb.nic.in</a>"],
  ],
  notice: "23 अक्टूबर 2026 तक: आवेदन चालू है। 1 अक्टूबर 2026 को एक शुद्धिपत्र (corrigendum) आया था; कुछ रिपोर्टें कहती हैं कि आवेदन की आखिरी तारीख 12 नवंबर 2026 हो गई है, लेकिन कई जगह अब भी 3 नवंबर लिखा है। सुरक्षित रहने के लिए 3 नवंबर से पहले फॉर्म भरें और jkssb.nic.in पर ताज़ा नोटिस देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी (09/2026)", "1 सितंबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "5 अक्टूबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "3 नवंबर 2026 (कुछ रिपोर्टों में 12 नवंबर 2026; आधिकारिक नोटिस देखें)"],
          ["डोमिसाइल प्रमाणपत्र किस तारीख तक का हो", "आवेदन की आखिरी तारीख या उससे पहले जारी"],
          ["लिखित परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "योग्यता", "वेतन"],
        rows: [
          ["क्लास-IV (मल्टी टास्किंग स्टाफ)", "10वीं (मैट्रिक) पास; 12वीं से ज़्यादा पढ़े हुए पात्र नहीं (रिपोर्टों के अनुसार)", "लेवल SL-1: ₹14,800 - ₹47,100"],
          ["सफाई कर्मचारी (Sanitation Worker)", "8वीं पास; 12वीं से ज़्यादा पढ़े हुए पात्र नहीं (रिपोर्टों के अनुसार)", "लेवल SL-1: ₹14,800 - ₹47,100"],
        ],
      },
      callout: { kind: "info", html: "पद UT, संभाग (डिवीजन) और ज़िला कैडर में बंटे हैं। शुद्धिपत्र के बाद कैडर-वार संख्या बदली है, इसलिए अपने ज़िले के पद विज्ञापन के Annexure में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>डोमिसाइल:</strong> जम्मू-कश्मीर का वैध डोमिसाइल प्रमाणपत्र ज़रूरी है।",
        "<strong>शिक्षा:</strong> MTS के लिए 10वीं, सफाई कर्मचारी के लिए 8वीं पास।",
        "<strong>उम्र की गणना:</strong> 1 जनवरी 2026 को। अधिकतम उम्र और वर्ग के अनुसार छूट विज्ञापन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      list: [
        "<strong>सामान्य (Open Merit):</strong> ₹600 (रिपोर्ट के अनुसार)।",
        "<strong>SC, ST-1, ST-2, EWS, दिव्यांग:</strong> ₹500 (रिपोर्ट के अनुसार)।",
        "फीस केवल ऑनलाइन जमा होती है। सही राशि विज्ञापन में देखें।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा (OMR/ऑब्जेक्टिव)।</strong>",
        "<strong>दस्तावेज़ जांच:</strong> डोमिसाइल, शिक्षा और वर्ग प्रमाणपत्र।",
      ],
      html: "परीक्षा का सिलेबस और अंक विभाजन विज्ञापन में दिया है।",
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://jkssb.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">jkssb.nic.in</a> खोलें और विज्ञापन 09/2026 पढ़ें।",
        "\"Online Application\" में मोबाइल और ईमेल से रजिस्ट्रेशन करें।",
        "पद, कैडर/ज़िला, शिक्षा और वर्ग की जानकारी भरें।",
        "फोटो, हस्ताक्षर और डोमिसाइल प्रमाणपत्र अपलोड करें; ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> से साइज़ ठीक करें।",
        "फीस ऑनलाइन भरें और फॉर्म का प्रिंट संभालकर रखें।",
      ],
      callout: { kind: "warn", html: "नौकरी पक्की कराने के नाम पर पैसे मांगने वालों से सावधान रहें। चयन केवल JKSSB की परीक्षा से होता है।" },
    },
  ],
  official: [
    { href: "https://jkssb.nic.in/", title: "जम्मू-कश्मीर सेवा चयन बोर्ड (JKSSB)", note: "विज्ञापन 09/2026, शुद्धिपत्र और आवेदन" },
  ],
  faq: [
    { q: "JKSSB क्लास 4 का फॉर्म कब तक भर सकते हैं?", a: "मूल विज्ञापन के अनुसार 3 नवंबर 2026 तक। कुछ रिपोर्टें शुद्धिपत्र के बाद 12 नवंबर बताती हैं; पक्का करने के लिए jkssb.nic.in देखें और 3 नवंबर से पहले ही फॉर्म भर दें।" },
    { q: "कितने पद हैं?", a: "कुल 2,863 पद: क्लास-IV (MTS) और सफाई कर्मचारी, UT/संभाग/ज़िला कैडर में।" },
    { q: "क्या दूसरे राज्य के लोग आवेदन कर सकते हैं?", a: "नहीं। जम्मू-कश्मीर का वैध डोमिसाइल प्रमाणपत्र ज़रूरी है।" },
    { q: "वेतन कितना है?", a: "लेवल SL-1, यानी ₹14,800 से ₹47,100 का वेतनमान (रिपोर्टों के अनुसार), साथ में नियम के अनुसार भत्ते।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "💼", title: "सभी सरकारी नौकरियां", text: "अभी खुली भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://jkssb.nic.in/", label: "📝 jkssb.nic.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
