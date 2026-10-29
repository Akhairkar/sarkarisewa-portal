import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme API entries "NSAP - Indira Gandhi
// National Old Age Pension Scheme" and "National Family Benefit Scheme"
// (Ministry of Rural Development; NSAP from 15 Aug 1995; five sub-schemes;
// IGNOAPS BPL 60+, ₹200/month at 60-79 and ₹500 at 80+, states add top-ups so
// people get roughly ₹200-₹1,000 or more; NFBS ₹20,000 lump sum on death of
// the main earner aged 18-59 in a BPL household; online apply via UMANG;
// guidelines nsap.nic.in Oct 2014); Lok Sabha / Rajya Sabha replies 2025
// (eparlib.sansad.in: IGNWPS ₹300 to widows 40-79, IGNDPS ₹300 to persons
// 18-79 with severe/multiple disability in BPL families, both shifted to
// IGNOAPS ₹500 at 80; Government approved continuation of NSAP in present form
// for 2021-26 without revision of rates); PIB Nov 2025 document (2024-25
// releases). Annapurna (10 kg food grain per month to eligible elderly not
// getting IGNOAPS) per NSAP guidelines. State top-up amounts are not listed.
// 29 Oct 2026: Cabinet decision of 14.10.2026 (renamed Pradhan Mantri Samajik
// Sahayata Yojana; disability pension changes) noted, details in
// pm-samajik-sahayata-yojana.ts.
export const nationalSocialAssistanceProgramme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)" },
  ],
  docHi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)",
  title: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) 2026",
  description: "राज्य सामाजिक कल्याण विभागों के माध्यम से बीपीएल परिवारों के वृद्ध, विधवा, और दिव्यांग व्यक्तियों को मासिक पेंशन प्रदान करने वाली छत्र योजना।",
  published: "2024-06-01",
  modified: "2026-10-29",
  verified: "29 अक्टूबर 2026",
  h1: "NSAP पेंशन 2026: वृद्धावस्था, विधवा और दिव्यांग पेंशन, पारिवारिक लाभ योजना, राशि और आवेदन",
  lead: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP) ग्रामीण विकास मंत्रालय की योजना है, जिसके तहत गरीबी रेखा से नीचे (BPL) परिवारों के बुज़ुर्गों, विधवाओं और गंभीर दिव्यांग व्यक्तियों को हर महीने पेंशन मिलती है, और कमाने वाले सदस्य की मृत्यु पर परिवार को ₹20,000 की एकमुश्त मदद। केंद्र का हिस्सा ₹200 से ₹500 महीना है; ज़्यादातर राज्य अपनी तरफ से राशि जोड़ते हैं, इसलिए असल पेंशन राज्य के हिसाब से अलग होती है।",
  facts: [
    ["मंत्रालय", "ग्रामीण विकास मंत्रालय (राज्य सरकारों के ज़रिये)"],
    ["वृद्धावस्था पेंशन (केंद्र का हिस्सा)", "60-79 साल: ₹200, 80+ साल: ₹500 महीना"],
    ["पारिवारिक लाभ (NFBS)", "₹20,000 एकमुश्त"],
    ["पोर्टल", '<a href="https://nsap.nic.in/" target="_blank" rel="noopener nofollow">nsap.nic.in</a>'],
  ],
  notice: "<strong>ध्यान दें:</strong> ऊपर की राशि सिर्फ केंद्र सरकार का हिस्सा है। आपके राज्य में कुल पेंशन कितनी मिलेगी, यह राज्य के समाज कल्याण विभाग की योजना पर निर्भर है। केंद्र ने 2021-26 के लिए NSAP को बिना दर बदले जारी रखा।<br><strong>नया:</strong> 14 अक्टूबर 2026 को केंद्रीय मंत्रिमंडल ने NSAP को 2030-31 तक जारी रखने की मंज़ूरी दी और इसका नाम <strong>प्रधानमंत्री सामाजिक सहायता योजना</strong> कर दिया; दिव्यांग पेंशन अब 40% दिव्यांगता पर मिल सकेगी। <a href=\"/service/pm-samajik-sahayata-yojana.html\">नए नाम और बदलाव पढ़ें</a>।",
  sections: [
    {
      id: "yojnayen",
      title: "NSAP की पांच योजनाएं",
      table: {
        head: ["योजना", "कौन पात्र", "केंद्र की मदद"],
        rows: [
          ["इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन (IGNOAPS)", "BPL परिवार के 60 साल या ज़्यादा उम्र के लोग", "60-79 साल: ₹200 महीना; 80 साल से ऊपर: ₹500 महीना"],
          ["इंदिरा गांधी राष्ट्रीय विधवा पेंशन (IGNWPS)", "BPL परिवार की 40-79 साल की विधवा", "₹300 महीना; 80 साल पर वृद्धावस्था पेंशन में ₹500"],
          ["इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन (IGNDPS)", "BPL परिवार के 18-79 साल के गंभीर/बहु-दिव्यांग व्यक्ति", "₹300 महीना; 80 साल पर वृद्धावस्था पेंशन में ₹500"],
          ["राष्ट्रीय पारिवारिक लाभ योजना (NFBS)", "BPL परिवार, जिसके मुख्य कमाने वाले सदस्य (18-59 साल) की किसी भी कारण से मृत्यु हो जाए", "₹20,000 एकमुश्त, परिवार के मुखिया को"],
          ["अन्नपूर्णा योजना", "वृद्धावस्था पेंशन के पात्र बुज़ुर्ग, जिन्हें पेंशन नहीं मिल रही", "हर महीने 10 किलो अनाज मुफ्त"],
        ],
      },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>ऑफलाइन:</strong> गांव में ग्राम पंचायत/ब्लॉक (BDO) कार्यालय, शहर में नगर निकाय या ज़िला समाज कल्याण कार्यालय में फॉर्म लेकर जमा करें।",
        "<strong>ऑनलाइन:</strong> कई राज्यों के अपने पेंशन पोर्टल हैं; केंद्र की UMANG ऐप पर भी NSAP में \"Apply Online\" का विकल्प है (मोबाइल OTP से लॉगिन, फोटो अपलोड, भुगतान का तरीका चुनें)।",
        "जांच के बाद मंज़ूरी मिलने पर पेंशन सीधे बैंक/डाकघर खाते में आती है।",
      ],
      callout: { kind: "info", html: "अपने राज्य की वृद्धावस्था पेंशन की राशि और आवेदन का तरीका जानने के लिए <a href=\"/service/senior-citizen-card.html\">राज्यवार गाइड</a> देखें।" },
    },
    {
      id: "dastavej",
      title: "आम तौर पर ज़रूरी कागज़",
      list: [
        "आधार कार्ड और बैंक/डाकघर खाता (आधार से जुड़ा हो तो बेहतर)।",
        "BPL होने का प्रमाण (BPL कार्ड/सूची में नाम, या राज्य का तय प्रमाण)।",
        "उम्र का प्रमाण (जन्म प्रमाण पत्र, स्कूल रिकॉर्ड, वोटर ID आदि)।",
        "विधवा पेंशन: पति का मृत्यु प्रमाण पत्र। दिव्यांग पेंशन: दिव्यांगता प्रमाण पत्र/UDID कार्ड।",
        "NFBS: कमाने वाले सदस्य का मृत्यु प्रमाण पत्र और उम्र का प्रमाण।",
      ],
    },
    {
      id: "status",
      title: "पेंशन का स्टेटस कैसे देखें",
      list: [
        '<a href="https://nsap.nic.in/" target="_blank" rel="noopener nofollow">nsap.nic.in</a> पर लाभार्थियों की रिपोर्ट/सूची राज्य, ज़िला और ब्लॉक के हिसाब से देखी जा सकती है।',
        "कई राज्यों के अपने पेंशन पोर्टल पर आवेदन और भुगतान की स्थिति दिखती है।",
        "पेंशन रुक जाए तो बैंक खाते में KYC/आधार की स्थिति देखें और ब्लॉक/समाज कल्याण कार्यालय में पूछें।",
      ],
    },
  ],
  official: [
    { href: "https://nsap.nic.in/", title: "NSAP पोर्टल (ग्रामीण विकास मंत्रालय)" },
    { href: "https://nsap.nic.in/Guidelines/nsap_guidelines_oct2014.pdf", title: "NSAP दिशानिर्देश (PDF)" },
    { href: "https://www.myscheme.gov.in/schemes/nsap-ignoaps", title: "myScheme: वृद्धावस्था पेंशन (IGNOAPS)" },
    { href: "https://web.umang.gov.in/", title: "UMANG ऐप/वेब" },
  ],
  faq: [
    { q: "NSAP में वृद्धावस्था पेंशन कितनी मिलती है?", a: "केंद्र का हिस्सा 60-79 साल पर ₹200 और 80 साल से ऊपर ₹500 महीना है। राज्य अपनी राशि जोड़ते हैं, इसलिए कुल पेंशन राज्य के हिसाब से अलग होती है।" },
    { q: "विधवा पेंशन के लिए उम्र कितनी होनी चाहिए?", a: "केंद्र की IGNWPS योजना में 40 से 79 साल की BPL परिवार की विधवा पात्र है; केंद्र का हिस्सा ₹300 महीना है। कई राज्य कम उम्र की विधवाओं को भी अपनी योजना से पेंशन देते हैं।" },
    { q: "पारिवारिक लाभ योजना में कितना पैसा मिलता है?", a: "BPL परिवार के मुख्य कमाने वाले सदस्य (18-59 साल) की मृत्यु पर परिवार को ₹20,000 एकमुश्त मिलते हैं।" },
    { q: "NSAP पेंशन के लिए कहां आवेदन करें?", a: "ग्राम पंचायत/ब्लॉक कार्यालय, नगर निकाय या ज़िला समाज कल्याण कार्यालय में, या राज्य के पेंशन पोर्टल/UMANG ऐप से।" },
  ],
  related: [
    { href: "/service/pm-samajik-sahayata-yojana.html", emoji: "🆕", title: "प्रधानमंत्री सामाजिक सहायता योजना", text: "NSAP का नया नाम, दिव्यांग पेंशन के नए नियम" },
    { href: "/service/senior-citizen-card.html", emoji: "👴", title: "वरिष्ठ नागरिक कार्ड", text: "राज्यवार पेंशन और कार्ड" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "🏥", title: "आयुष्मान वय वंदना", text: "70+ के लिए ₹5 लाख तक इलाज" },
    { href: "/service/udid-disability-card-download.html", emoji: "♿", title: "UDID कार्ड", text: "दिव्यांगता प्रमाण पत्र" },
    { href: "/service/atal-pension-yojana.html", emoji: "💰", title: "अटल पेंशन योजना", text: "₹1,000-₹5,000 तय पेंशन" },
  ],
  aside: [
    { href: "https://nsap.nic.in/", label: "📋 NSAP पोर्टल" },
    { href: "/service/senior-citizen-card.html", label: "👴 राज्यवार पेंशन गाइड" },
  ],
};
