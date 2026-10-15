import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; NOTTO sites not reachable from the sandbox,
// search-result extracts used): notto.mohfw.gov.in (About NOTTO; toll-free
// 1800-11-4770, 24x7, pledge guidance); notto.abdm.gov.in (official portal
// "for registration of pledges of citizens for donation of organs and tissues
// after death"); Health Ministry D.O. letters to states/ministries on the
// NOTTO site (anyone aged 18+ can pledge; 24x7 helpline); news June 2026
// (India crossed 5 lakh pledges, Union Health Ministry); guides describing
// Aadhaar + OTP flow and choice of "all organs and tissues" or selected ones;
// family consent needed at the time of death under the Transplantation of
// Human Organs and Tissues Act, 1994. Old address notto.nic.in treated as
// outdated.
export const organDonationPledgeNotto: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "अंगदान ऑनलाइन प्रतिज्ञा" },
  ],
  docHi: "अंगदान ऑनलाइन प्रतिज्ञा",
  title: "राष्ट्रीय अंगदान ऑनलाइन प्रतिज्ञा (NOTTO Organ Donation)",
  description: "स्वास्थ्य मंत्रालय के NOTTO पोर्टल पर आधार से ऑनलाइन अंगदान की प्रतिज्ञा लें और प्रतिज्ञा प्रमाण/डोनर कार्ड डाउनलोड करें। तरीका, परिवार की सहमति और हेल्पलाइन 1800-11-4770।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "अंगदान की ऑनलाइन प्रतिज्ञा (NOTTO) 2026: आधार से कैसे करें, कौन कर सकता है, परिवार को क्यों बताएं",
  lead: "18 साल या उससे ज़्यादा उम्र का कोई भी व्यक्ति मृत्यु के बाद अंग और ऊतक (टिश्यू) दान करने की प्रतिज्ञा राष्ट्रीय अंग एवं ऊतक प्रत्यारोपण संगठन (NOTTO) के पोर्टल notto.abdm.gov.in पर आधार और OTP से मुफ्त में ले सकता है। प्रतिज्ञा एक इच्छा का पंजीकरण है; मृत्यु के बाद अंगदान के लिए परिवार की सहमति भी ज़रूरी होती है। मदद के लिए NOTTO की 24 घंटे टोल-फ्री हेल्पलाइन 1800-11-4770 है।",
  facts: [
    ["संस्था", "NOTTO, स्वास्थ्य सेवा महानिदेशालय (स्वास्थ्य मंत्रालय)"],
    ["पोर्टल", "notto.abdm.gov.in"],
    ["उम्र", "18 साल या ज़्यादा"],
    ["हेल्पलाइन", "1800-11-4770 (टोल-फ्री, 24x7)"],
  ],
  sections: [
    {
      id: "kaise",
      title: "ऑनलाइन प्रतिज्ञा कैसे लें",
      steps: [
        '<a href="https://notto.abdm.gov.in/" target="_blank" rel="noopener nofollow">notto.abdm.gov.in</a> खोलें और अंगदान प्रतिज्ञा (Pledge) का विकल्प चुनें।',
        "अपना आधार नंबर डालें और आधार/ABHA से जुड़े मोबाइल पर आया OTP भरें।",
        "चुनें कि आप <strong>सभी अंग और ऊतक</strong> दान करना चाहते हैं या कुछ चुने हुए (जैसे आंखें/कॉर्निया, किडनी, लिवर, हृदय)।",
        "परिवार के किसी सदस्य/नज़दीकी व्यक्ति की जानकारी भरें, ताकि ज़रूरत पड़ने पर उनसे संपर्क हो सके।",
        "प्रतिज्ञा जमा करें और प्रतिज्ञा का प्रमाण/डोनर कार्ड डाउनलोड करके संभालें।",
      ],
      callout: { kind: "ok", html: "प्रतिज्ञा पूरी तरह <strong>मुफ्त</strong> है। इसके लिए कोई एजेंट या फीस नहीं लगती।" },
    },
    {
      id: "parivar",
      title: "परिवार को ज़रूर बताएं",
      list: [
        "मानव अंग और ऊतक प्रत्यारोपण अधिनियम, 1994 के तहत मृत्यु के बाद अंगदान के समय <strong>परिवार/कानूनी वारिस की सहमति</strong> ली जाती है।",
        "इसलिए प्रतिज्ञा लेने के बाद अपने परिवार को अपनी इच्छा बताएं और डोनर कार्ड उनके साथ साझा करें।",
        "अंगदान आम तौर पर <strong>ब्रेन डेथ</strong> (मस्तिष्क मृत्यु) की स्थिति में अस्पताल में होता है। आंखें (कॉर्निया) और कुछ ऊतक सामान्य मृत्यु के बाद भी दान हो सकते हैं।",
      ],
    },
    {
      id: "jaankari",
      title: "जानने लायक बातें",
      list: [
        "जून 2026 में स्वास्थ्य मंत्रालय ने बताया कि देश में अंगदान की प्रतिज्ञाएं <strong>5 लाख</strong> से ज़्यादा हो गई हैं।",
        "प्रतिज्ञा से कोई कानूनी बाध्यता नहीं बनती; यह आपकी इच्छा का रिकॉर्ड है।",
        "अंगों की खरीद-बिक्री कानूनन अपराध है। कोई पैसे के बदले अंग मांगे या बेचे तो पुलिस को बताएं।",
        "पुराने लेखों में notto.nic.in पता दिखता है; अभी NOTTO की मुख्य साइट notto.mohfw.gov.in और प्रतिज्ञा के लिए notto.abdm.gov.in है।",
      ],
    },
  ],
  official: [
    { href: "https://notto.abdm.gov.in/", title: "NOTTO अंगदान प्रतिज्ञा पोर्टल" },
    { href: "https://notto.mohfw.gov.in/", title: "राष्ट्रीय अंग एवं ऊतक प्रत्यारोपण संगठन (NOTTO)", note: "टोल-फ्री 1800-11-4770" },
  ],
  faq: [
    { q: "अंगदान की प्रतिज्ञा कौन ले सकता है?", a: "18 साल या उससे ज़्यादा उम्र का कोई भी व्यक्ति।" },
    { q: "क्या प्रतिज्ञा के लिए पैसे लगते हैं?", a: "नहीं, NOTTO पोर्टल पर प्रतिज्ञा पूरी तरह मुफ्त है।" },
    { q: "क्या प्रतिज्ञा लेने के बाद परिवार की मंज़ूरी चाहिए?", a: "हां, मृत्यु के बाद अंगदान के समय परिवार/कानूनी वारिस की सहमति ली जाती है। इसलिए परिवार को अपनी इच्छा ज़रूर बताएं।" },
    { q: "NOTTO हेल्पलाइन नंबर क्या है?", a: "1800-11-4770, टोल-फ्री और 24 घंटे चालू।" },
    { q: "क्या सिर्फ आंखें दान करने की प्रतिज्ञा ले सकते हैं?", a: "हां, पोर्टल पर सभी अंग या सिर्फ चुने हुए अंग/ऊतक चुनने का विकल्प है।" },
  ],
  related: [
    { href: "/service/organ-donation-registration.html", emoji: "🫀", title: "अंगदान पंजीकरण", text: "जीवित और मृत्यु के बाद अंगदान" },
    { href: "/service/e-raktkosh-blood-donation.html", emoji: "🩸", title: "ई-रक्तकोष", text: "रक्तदान और ब्लड बैंक" },
    { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य ID" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर", text: "OTP के लिए मोबाइल जोड़ें" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
  ],
  aside: [
    { href: "https://notto.abdm.gov.in/", label: "🫀 प्रतिज्ञा लें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
