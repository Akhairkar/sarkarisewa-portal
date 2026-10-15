import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): CGHS OM F.No. S.11012/1/2024-EHS dated 28 June
// 2024 "Guidelines for issue of CGHS card to serving employees and retired
// employees" on cghs.mohfw.gov.in (contribution by 7th CPC pay level: L1-5
// ₹3,000/yr, L6 ₹5,400/yr, L7-11 ₹7,800/yr, L12+ ₹12,000/yr; lifetime card = 120
// months; payment on Bharatkosh; pensioners/family pensioners from Central Civil
// Estimates not drawing FMA); PIB release 1915950 (CGHS package rates revised,
// MoHFW); MoHFW OM 17 Jul 2026 (pensioner card through Bhavishya portal as an
// additional route; CGHS portal route continues) as reported by Business Today/
// Outlook Money. Number of cities/wellness centres and helpline left out.
export const centralGovtHealthScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "CGHS" },
  ],
  docHi: "केंद्र सरकार स्वास्थ्य योजना (CGHS)",
  title: "केंद्र सरकार स्वास्थ्य योजना (CGHS) 2026",
  description: "CGHS 2026: केंद्र सरकार के कर्मचारी, पेंशनभोगी और आश्रितों के लिए वेलनेस सेंटर में OPD, दवाएं और सूचीबद्ध अस्पतालों में इलाज। कौन पात्र, मासिक अंशदान, कार्ड कैसे बनवाएं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "केंद्र सरकार स्वास्थ्य योजना (CGHS) 2026: पात्रता, अंशदान और CGHS कार्ड",
  lead: "CGHS (Central Government Health Scheme) केंद्रीय स्वास्थ्य एवं परिवार कल्याण मंत्रालय की योजना है, जो केंद्र सरकार के कर्मचारियों, पेंशनभोगियों और उनके आश्रित परिवार को CGHS वाले शहरों में इलाज देती है। इसमें वेलनेस सेंटर पर OPD और दवाएं, और सूचीबद्ध (empanelled) अस्पतालों में तय दरों पर इलाज मिलता है। कार्ड के लिए वेतन स्तर के हिसाब से अंशदान देना होता है।",
  facts: [
    ["मंत्रालय", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["कौन पात्र", "केंद्र सरकार के कर्मचारी, पेंशनभोगी, आश्रित"],
    ["अंशदान", "₹250 से ₹1,000 प्रति माह (वेतन स्तर के अनुसार)"],
    ["पोर्टल", '<a href="https://cghs.mohfw.gov.in/" target="_blank" rel="noopener nofollow">cghs.mohfw.gov.in</a>'],
  ],
  sections: [
    {
      id: "suvidha",
      title: "CGHS में क्या मिलता है",
      list: [
        "<strong>वेलनेस सेंटर (डिस्पेंसरी):</strong> डॉक्टर की सलाह (OPD), दवाएं और कुछ जांचें।",
        "<strong>विशेषज्ञ और रेफरल:</strong> सरकारी अस्पतालों और CGHS से सूचीबद्ध निजी अस्पतालों/लैब में इलाज और जांच।",
        "<strong>पेंशनभोगियों के लिए कैशलेस:</strong> सूचीबद्ध अस्पतालों में तय पैकेज दरों पर इलाज; बाकी मामलों में खर्च की प्रतिपूर्ति (reimbursement) के नियम।",
        "<strong>आपात स्थिति:</strong> इमरजेंसी में किसी भी अस्पताल में इलाज के बाद नियमों के अनुसार प्रतिपूर्ति।",
      ],
    },
    {
      id: "patrata",
      title: "कौन CGHS कार्ड बनवा सकता है",
      list: [
        "CGHS वाले शहरों में रहने वाले <strong>केंद्र सरकार के सेवारत कर्मचारी</strong> और उनके आश्रित।",
        "केंद्रीय सिविल प्राक्कलन (Central Civil Estimates) से पेंशन पाने वाले <strong>पेंशनभोगी और पारिवारिक पेंशनभोगी</strong>, जो <strong>निश्चित चिकित्सा भत्ता (FMA)</strong> नहीं ले रहे हों।",
        "कुछ और श्रेणियां (जैसे सांसद, पूर्व सांसद, स्वतंत्रता सेनानी आदि) अलग नियमों से।",
        "<strong>आश्रित:</strong> जीवनसाथी, आश्रित बच्चे और आय की शर्त पूरी करने वाले आश्रित माता-पिता आदि, CGHS के नियमों के अनुसार।",
      ],
      callout: { kind: "info", html: "70 साल या उससे ऊपर के CGHS लाभार्थी चाहें तो CGHS की जगह <a href=\"/service/ayushman-bharat-vayo-vandana.html\">आयुष्मान वय वंदना कार्ड</a> चुन सकते हैं, पर दोनों में से एक ही योजना मिलेगी।" },
    },
    {
      id: "anshdan",
      title: "मासिक अंशदान (7वें वेतन आयोग के वेतन स्तर से)",
      table: {
        head: ["वेतन स्तर (Pay Level)", "प्रति माह", "सालाना कार्ड (12 माह)", "आजीवन कार्ड (120 माह, पेंशनभोगी)"],
        rows: [
          ["लेवल 1 से 5", "₹250", "₹3,000", "₹30,000"],
          ["लेवल 6", "₹450", "₹5,400", "₹54,000"],
          ["लेवल 7 से 11", "₹650", "₹7,800", "₹78,000"],
          ["लेवल 12 और ऊपर", "₹1,000", "₹12,000", "₹1,20,000"],
        ],
      },
      html: "<p>सेवारत कर्मचारियों का अंशदान वेतन से कटता है। पेंशनभोगी अंशदान <strong>Bharatkosh</strong> पर ऑनलाइन जमा करते हैं; पेंशनभोगी का वेतन स्तर रिटायरमेंट के समय के स्तर से तय होता है। दरें CGHS के जून 2024 के आदेश के अनुसार हैं; भुगतान से पहले पोर्टल पर ताज़ा दरें देख लें।</p>",
    },
    {
      id: "card",
      title: "CGHS कार्ड कैसे बनवाएं",
      steps: [
        "<strong>सेवारत कर्मचारी:</strong> अपने कार्यालय के ज़रिए CGHS पोर्टल पर आवेदन होता है; विभाग सत्यापन करके आगे भेजता है।",
        "<strong>पेंशनभोगी:</strong> <a href=\"https://cghs.mohfw.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cghs.mohfw.gov.in</a> पर ऑनलाइन आवेदन करें, PPO और आश्रितों की जानकारी भरें, Bharatkosh पर अंशदान जमा करें और चालान अपलोड करें।",
        "<strong>रिटायर होने वाले कर्मचारी:</strong> जुलाई 2026 से पेंशन फॉर्म भरते समय <strong>भविष्य (Bhavishya) पोर्टल</strong> से भी CGHS पेंशनभोगी कार्ड का आवेदन कर सकते हैं; पुराना CGHS पोर्टल वाला तरीका भी चालू है।",
        "मंज़ूरी के बाद कार्ड डिजिटल रूप में बनता है और पोर्टल से डाउनलोड होता है।",
      ],
      callout: { kind: "ok", html: "पेंशनभोगियों के लिए पूरी प्रक्रिया की अलग गाइड: <a href=\"/service/cghs-pensioner-card-apply.html\">CGHS पेंशनभोगी कार्ड आवेदन</a>।" },
    },
  ],
  official: [
    { href: "https://cghs.mohfw.gov.in/", title: "CGHS पोर्टल: आवेदन, कार्ड, दरें और आदेश" },
    { href: "https://bharatkosh.gov.in/", title: "Bharatkosh: CGHS अंशदान का ऑनलाइन भुगतान" },
    { href: "https://mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
  ],
  faq: [
    { q: "CGHS में हर महीने कितना अंशदान लगता है?", a: "7वें वेतन आयोग के वेतन स्तर के अनुसार: लेवल 1-5 पर ₹250, लेवल 6 पर ₹450, लेवल 7-11 पर ₹650 और लेवल 12 व ऊपर ₹1,000 प्रति माह।" },
    { q: "पेंशनभोगी का आजीवन CGHS कार्ड कैसे बनता है?", a: "120 महीने (10 साल) का अंशदान एक साथ Bharatkosh पर जमा करने से आजीवन कार्ड बनता है, जैसे लेवल 1-5 के लिए ₹30,000।" },
    { q: "क्या FMA लेते हुए CGHS कार्ड मिल सकता है?", a: "नहीं। CGHS कार्ड उन पेंशनभोगियों को मिलता है जो निश्चित चिकित्सा भत्ता (FMA) नहीं ले रहे। कार्ड लेने पर FMA बंद कराना होता है।" },
    { q: "क्या CGHS वाले बुजुर्ग आयुष्मान वय वंदना कार्ड भी ले सकते हैं?", a: "70+ CGHS लाभार्थी को CGHS या आयुष्मान (PM-JAY) में से एक योजना चुननी होती है; दोनों साथ नहीं।" },
  ],
  related: [
    { href: "/service/cghs-pensioner-card-apply.html", emoji: "🪪", title: "CGHS पेंशनभोगी कार्ड", text: "आवेदन की पूरी प्रक्रिया" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना कार्ड", text: "70+ के लिए ₹5 लाख तक इलाज" },
    { href: "/service/abha-health-card.html", emoji: "📋", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य रिकॉर्ड" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत", text: "PM-JAY की जानकारी" },
    { href: "/tools/medicine-price-checker.html", emoji: "💊", title: "दवा की कीमत जांचें", text: "सस्ती दवा का विकल्प" },
  ],
  aside: [
    { href: "https://cghs.mohfw.gov.in/", label: "🩺 CGHS पोर्टल खोलें" },
    { href: "/service/cghs-pensioner-card-apply.html", label: "🪪 पेंशनभोगी कार्ड गाइड" },
  ],
};
