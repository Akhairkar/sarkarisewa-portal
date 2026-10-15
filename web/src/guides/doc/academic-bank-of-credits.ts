import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; abc.gov.in not reachable from the sandbox,
// search-result extracts used): PIB factsheets FactsheetDetails Id=150650 and
// 150693 and PIB document dated June 2026 (credits valid for at most 7 years
// or the period set by the discipline; redeemed credits cannot be reused;
// APAAR = 12-digit ID linked to ABC; 26.30 crore verified APAAR IDs by June
// 2026; UGC asked HEIs to upload credit data on the NAD-ABC portal by
// 30.06.2026; credit redemption/certificates via NAD), Telangana Today
// 11.08.2026 and Drishti IAS 09.07.2026 (students register on the ABC portal
// using an APAAR/ABC ID linked to Aadhaar and DigiLocker; institutions upload
// credits). No fee is known for students; none stated.
export const academicBankOfCredits: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC)" },
  ],
  docHi: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC)",
  title: "शैक्षणिक क्रेडिट बैंक (ABC) 2026",
  description: "एनईपी 2020 के तहत एक डिजिटल रिपॉजिटरी जो संस्थानों में छात्रों के शैक्षणिक क्रेडिट संग्रहीत करती है। ABC/APAAR ID कैसे बनाएं, DigiLocker से जुड़ाव, क्रेडिट की वैधता और कॉलेज बदलने में उपयोग।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC) और APAAR ID: क्या है, कैसे बनाएं, क्रेडिट कैसे जुड़ते हैं",
  lead: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC) राष्ट्रीय शिक्षा नीति 2020 के तहत बना डिजिटल खाता है, जिसमें कॉलेज/विश्वविद्यालय आपके पढ़ाई के क्रेडिट जमा करते हैं। छात्र की पहचान 12 अंकों की APAAR ID (ABC ID) से होती है, जो आधार और DigiLocker से जुड़कर बनती है। क्रेडिट ज़्यादा से ज़्यादा 7 साल (या विषय के लिए तय अवधि) तक मान्य रहते हैं, जिससे बीच में पढ़ाई छोड़कर बाद में फिर से जुड़ना या संस्थान बदलना आसान होता है।",
  facts: [
    ["किसके तहत", "NEP 2020, UGC / शिक्षा मंत्रालय"],
    ["छात्र ID", "APAAR / ABC ID (12 अंक)"],
    ["क्रेडिट की वैधता", "अधिकतम 7 साल"],
    ["कहां", "abc.gov.in और DigiLocker"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "ABC और APAAR ID क्या हैं",
      list: [
        "<strong>ABC:</strong> क्रेडिट का \"बैंक खाता\"। हर पास किए गए कोर्स/सेमेस्टर के क्रेडिट आपका संस्थान इसमें अपलोड करता है।",
        "<strong>APAAR ID:</strong> Automated Permanent Academic Account Registry, 12 अंकों की स्थायी छात्र ID। स्कूल से उच्च शिक्षा और कौशल प्रशिक्षण तक के रिकॉर्ड इससे जुड़ते हैं। ABC में यही ID इस्तेमाल होती है।",
        "<strong>NAD:</strong> नेशनल एकेडमिक डिपॉज़िटरी, जहां डिग्री/मार्कशीट डिजिटल रूप में रखी जाती हैं; क्रेडिट भुनाने और प्रमाण पत्र जारी करने का काम संस्थान NAD के ज़रिए करते हैं।",
      ],
    },
    {
      id: "banayen",
      title: "ABC / APAAR ID कैसे बनाएं",
      steps: [
        '<a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener nofollow">DigiLocker</a> में आधार से खाता बनाएं या लॉग-इन करें (आधार से मोबाइल जुड़ा होना चाहिए)।',
        'DigiLocker में "ABC ID" / "APAAR" खोजें, या <a href="https://www.abc.gov.in/" target="_blank" rel="noopener nofollow">abc.gov.in</a> पर Student सेक्शन में DigiLocker से लॉग-इन करें।',
        "अपना संस्थान, कोर्स, दाखिले का साल और रोल/नामांकन नंबर चुनें और सहमति दें।",
        "ID बनने के बाद इसे अपने कॉलेज को दें; कई विश्वविद्यालय परीक्षा फॉर्म में APAAR/ABC ID मांगते हैं।",
      ],
      callout: { kind: "info", html: "स्कूल में पढ़ने वाले बच्चों की APAAR ID आम तौर पर स्कूल माता-पिता की सहमति लेकर बनवाता है। स्कूल से पूछें।" },
    },
    {
      id: "fayde",
      title: "छात्रों को क्या फायदा",
      list: [
        "<strong>बीच में छोड़कर फिर से जुड़ना:</strong> NEP के ढांचे में पढ़ाई बीच में छोड़ने पर भी जमा क्रेडिट बने रहते हैं, और बाद में वापस आकर आगे पढ़ सकते हैं (विश्वविद्यालय के नियमों के अनुसार)।",
        "<strong>संस्थान बदलना:</strong> एक संस्थान के क्रेडिट दूसरे में गिने जा सकते हैं, अगर दोनों ABC से जुड़े हों।",
        "<strong>ऑनलाइन कोर्स:</strong> SWAYAM जैसे मान्य ऑनलाइन कोर्स के क्रेडिट भी जुड़ सकते हैं, अगर आपका विश्वविद्यालय उन्हें मानता है।",
        "<strong>कागज़ खोने का डर नहीं:</strong> मार्कशीट और डिग्री DigiLocker में डिजिटल रूप से रहती हैं।",
      ],
      callout: { kind: "warn", html: "क्रेडिट अधिकतम 7 साल (या विषय के लिए तय अवधि) तक मान्य हैं, और एक बार डिग्री/प्रमाण पत्र में भुनाए गए क्रेडिट दोबारा इस्तेमाल नहीं होते।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें",
      list: [
        "<strong>क्रेडिट नहीं दिख रहे:</strong> क्रेडिट संस्थान अपलोड करता है, छात्र नहीं। अपने कॉलेज के परीक्षा विभाग या ABC नोडल अधिकारी से पूछें।",
        "<strong>नाम मेल नहीं खाता:</strong> APAAR आधार के नाम से बनती है; मार्कशीट और आधार में नाम एक जैसा रखें।",
        "<strong>संस्थान सूची में नहीं:</strong> हर संस्थान ABC पर पंजीकृत नहीं है; कॉलेज से पुष्टि करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.abc.gov.in/", title: "एकेडमिक बैंक ऑफ क्रेडिट्स (ABC) पोर्टल" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "ABC/APAAR ID और डिजिटल मार्कशीट" },
  ],
  faq: [
    { q: "ABC ID और APAAR ID में क्या फर्क है?", a: "APAAR 12 अंकों की स्थायी छात्र ID है, और ABC में छात्र की पहचान इसी ID से होती है। इसलिए कई जगह इसे ABC/APAAR ID लिखा जाता है।" },
    { q: "ABC में क्रेडिट कितने साल तक मान्य रहते हैं?", a: "ज़्यादा से ज़्यादा 7 साल, या जितनी अवधि उस विषय के लिए तय हो।" },
    { q: "क्या ABC ID बनाने में पैसे लगते हैं?", a: "छात्र के लिए ABC/APAAR ID DigiLocker से आधार के ज़रिए बनती है; इसके लिए किसी फीस की जानकारी नहीं है। कोई एजेंट पैसे मांगे तो खुद DigiLocker से बनाएं।" },
    { q: "मेरे क्रेडिट ABC में कौन डालेगा?", a: "आपका कॉलेज/विश्वविद्यालय। UGC ने सभी उच्च शिक्षा संस्थानों से क्रेडिट डेटा NAD-ABC पोर्टल पर अपलोड करने को कहा है।" },
  ],
  related: [
    { href: "/service/digilocker.html", emoji: "📂", title: "DigiLocker", text: "डिजिटल मार्कशीट और ABC ID" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर आवेदन" },
    { href: "/service/jee-neet-registration.html", emoji: "📝", title: "JEE / NEET रजिस्ट्रेशन", text: "प्रवेश परीक्षा आवेदन" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "नाम सुधार और मोबाइल" },
  ],
  aside: [
    { href: "https://www.abc.gov.in/", label: "🎓 ABC पोर्टल खोलें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
