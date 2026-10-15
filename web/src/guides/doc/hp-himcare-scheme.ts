import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; hpsbys.in pages seen in search results, not
// fetched): hpsbys.in (Himachal Pradesh Swasthya Bima Yojna Society: HIMCARE
// enrollment, advance hospital search), myscheme.gov.in/schemes/himcare
// (cashless treatment up to ₹5 lakh per family per year, covers families not
// under AB-PMJAY, since January 2019; enrollment online or via Lok Mitra
// Kendra/CSC); The Tribune (card valid one year; portal opens in March, June,
// September, December for a month; ₹50 card fee besides premium; private
// hospitals' empanelment withdrawn from 1 Sept 2024; CM: scheme "will not be
// stopped but reformed", committee report awaited; no report of restoration
// found). Toll-free 1800-202-1311 (PMJAY/HIMCARE) from hpsbys/aggregator
// listings. Premium amounts by category differ between sources and are left
// out.
export const hpHimcareScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "हिमाचल प्रदेश", href: "/states/himachal-pradesh.html" },
    { label: "हिमकेयर योजना" },
  ],
  docHi: "हिमकेयर योजना",
  title: "HIMCARE Scheme",
  description: "हिमाचल प्रदेश की हिमकेयर (HIMCARE) स्वास्थ्य योजना: परिवार को ₹5 लाख तक कैशलेस इलाज। कार्ड कब बनता/रिन्यू होता है, कहां आवेदन करें, निजी अस्पतालों की ताज़ा स्थिति और हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "हिमकेयर (HIMCARE) योजना हिमाचल प्रदेश: ₹5 लाख कैशलेस इलाज, कार्ड बनवाना और रिन्यू",
  lead: "हिमकेयर (Mukhya Mantri Himachal Health Care Scheme) हिमाचल प्रदेश सरकार की स्वास्थ्य बीमा योजना है, जो जनवरी 2019 से उन परिवारों के लिए है जो आयुष्मान भारत (PM-JAY) में नहीं आते। इसमें सूचीबद्ध अस्पताल में भर्ती होने पर परिवार को साल में ₹5 लाख तक कैशलेस इलाज मिलता है। कार्ड एक साल के लिए बनता है और नया कार्ड/रिन्यूअल साल में चार बार खुलने वाली खिड़की में hpsbys.in पर होता है। ध्यान दें: 1 सितंबर 2024 से निजी अस्पतालों को इस योजना से हटा दिया गया था।",
  facts: [
    ["कवर", "₹5 लाख प्रति परिवार प्रति वर्ष (कैशलेस)"],
    ["पोर्टल", '<a href="https://www.hpsbys.in/" target="_blank" rel="noopener nofollow">hpsbys.in</a>'],
    ["कार्ड की वैधता", "1 साल; आवेदन मार्च, जून, सितंबर, दिसंबर में"],
    ["टोल-फ्री", "1800-202-1311"],
  ],
  notice: "<strong>निजी अस्पताल:</strong> सरकार ने 1 सितंबर 2024 से हिमकेयर में निजी अस्पतालों की सूचीबद्धता वापस ले ली थी। मुख्यमंत्री ने कहा है कि योजना बंद नहीं होगी बल्कि सुधारी जाएगी, पर निजी अस्पतालों में इसे दोबारा शुरू करने की कोई सूचना हमें नहीं मिली। इलाज से पहले hpsbys.in की अस्पताल सूची में या हेल्पलाइन पर पुष्टि करें।",
  sections: [
    {
      id: "kaun",
      title: "किसे मिलता है",
      list: [
        "हिमाचल प्रदेश के वे परिवार जो <strong>आयुष्मान भारत PM-JAY में शामिल नहीं</strong> हैं।",
        "परिवार के सदस्य राशन कार्ड के आधार पर जोड़े जाते हैं।",
        "हर श्रेणी (जैसे BPL, मनरेगा मज़दूर, निर्माण मज़दूर, अन्य परिवार) के लिए <strong>प्रीमियम अलग</strong> है। ताज़ा प्रीमियम और श्रेणी hpsbys.in पर देखें; कार्ड बनाने का ₹50 शुल्क प्रीमियम से अलग लगता है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "राशन कार्ड (परिवार के सदस्यों के लिए)",
        "परिवार के सदस्यों का आधार",
        "श्रेणी का प्रमाण, जैसे BPL प्रमाण, मनरेगा जॉब कार्ड, निर्माण मज़दूर कार्ड, दिव्यांगता प्रमाण पत्र आदि (जो लागू हो)",
        "मोबाइल नंबर",
      ],
      html: "<p>ऑनलाइन अपलोड के लिए फाइलें .jpg/.jpeg/.png/.pdf में और छोटे आकार (लगभग 200 KB तक) में रखें। श्रेणी के हिसाब से कागज़ों की पूरी सूची पोर्टल पर है।</p>",
    },
    {
      id: "aavedan",
      title: "कार्ड कैसे बनवाएं या रिन्यू करें",
      steps: [
        "नया कार्ड और रिन्यूअल <strong>सिर्फ खुली खिड़की में</strong> होता है: <strong>मार्च, जून, सितंबर और दिसंबर</strong> में पूरा महीना पोर्टल खुलता है। तारीख पोर्टल के नोटिस में देखें।",
        '<a href="https://www.hpsbys.in/" target="_blank" rel="noopener nofollow">hpsbys.in</a> पर <strong>Online HIMCARE Enrollment</strong> चुनें, या नज़दीकी <strong>लोक मित्र केंद्र / CSC</strong> जाएं।',
        "राशन कार्ड का विवरण, ज़िला/पता और श्रेणी भरें, सदस्य चुनें और कागज़ अपलोड करें।",
        "प्रीमियम और कार्ड शुल्क ऑनलाइन जमा करें। मंज़ूरी के बाद कार्ड डाउनलोड करें।",
        "कार्ड एक साल चलता है। खत्म होने से पहले अगली खिड़की में रिन्यू करें, वरना इलाज के समय लाभ नहीं मिलेगा।",
      ],
    },
    {
      id: "ilaaj",
      title: "इलाज कैसे लें",
      steps: [
        'पहले <a href="https://www.hpsbys.in/advance-hospital-search" target="_blank" rel="noopener nofollow">अस्पताल सूची (Hospital Search)</a> में देखें कि अस्पताल हिमकेयर में सूचीबद्ध है।',
        "भर्ती होते समय अस्पताल के हिमकेयर/आयुष्मान डेस्क पर कार्ड और आधार दिखाएं।",
        "सूचीबद्ध पैकेज का इलाज कैशलेस होता है। अस्पताल पैसे मांगे तो टोल-फ्री 1800-202-1311 पर शिकायत करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.hpsbys.in/", title: "HPSBYS: हिमकेयर पोर्टल", note: "एनरोलमेंट, रिन्यूअल, कार्ड" },
    { href: "https://www.hpsbys.in/advance-hospital-search", title: "सूचीबद्ध अस्पताल खोजें" },
    { href: "https://www.myscheme.gov.in/schemes/himcare", title: "myScheme पर HIMCARE" },
    { href: "tel:18002021311", title: "टोल-फ्री हेल्पलाइन", note: "1800-202-1311" },
  ],
  faq: [
    { q: "हिमकेयर में कितने का इलाज मुफ्त होता है?", a: "सूचीबद्ध अस्पताल में भर्ती होने पर परिवार को साल में ₹5 लाख तक कैशलेस इलाज।" },
    { q: "हिमकेयर कार्ड कब बनता है?", a: "पोर्टल साल में चार बार, मार्च, जून, सितंबर और दिसंबर में एक-एक महीने के लिए खुलता है। इसी समय नया कार्ड बनता और पुराना रिन्यू होता है।" },
    { q: "क्या निजी अस्पताल में हिमकेयर चलता है?", a: "1 सितंबर 2024 से निजी अस्पतालों को योजना से हटा दिया गया था और दोबारा जोड़ने की कोई सूचना हमें नहीं मिली। सरकारी अस्पतालों और पोर्टल की सूची में दिखने वाले अस्पतालों में ही इलाज लें।" },
    { q: "आयुष्मान कार्ड है तो क्या हिमकेयर भी बनेगा?", a: "हिमकेयर उन्हीं परिवारों के लिए है जो आयुष्मान भारत PM-JAY में शामिल नहीं हैं। 70 साल से ऊपर के बुज़ुर्ग आयुष्मान वय वंदना कार्ड बनवा सकते हैं।" },
    { q: "प्रीमियम कितना है?", a: "प्रीमियम परिवार की श्रेणी पर निर्भर है और सरकार इसे बदल सकती है। ताज़ा राशि hpsbys.in पर या लोक मित्र केंद्र पर पूछें।" },
  ],
  related: [
    { href: "/service/hp-sahara-yojana.html", emoji: "🤝", title: "सहारा योजना", text: "गंभीर रोगियों को मासिक सहायता" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत", text: "PM-JAY कार्ड और अस्पताल" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "🧓", title: "आयुष्मान वय वंदना", text: "70+ के लिए ₹5 लाख कवर" },
    { href: "/states/himachal-pradesh-ration-card.html", emoji: "🍚", title: "हिमाचल राशन कार्ड", text: "सदस्य जोड़ना और सुधार" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "कार्ड बनवाने में मदद" },
  ],
  aside: [
    { href: "https://www.hpsbys.in/", label: "🏥 हिमकेयर पोर्टल" },
    { href: "/states/himachal-pradesh.html", label: "📍 हिमाचल की सभी सेवाएं" },
  ],
};
