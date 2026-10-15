import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Rajasthan government renamed the Mukhyamantri
// Chiranjeevi Swasthya Bima Yojana (launched 1 May 2021) as Mukhyamantri
// Ayushman Arogya (MAA) Yojana in Feb 2024 (reported by adda247, bankbazaar,
// govtschemes.in, joinditto); cover up to ₹25 lakh per family per year,
// cashless at empanelled government and private hospitals; free for NFSA,
// SECC, small/marginal farmers, contract workers and other notified groups,
// others by paying the annual premium; Jan Aadhaar based. Helpline 181 /
// 1800-180-6127 (Rajasthan Sampark). The official scheme portal address was
// not confirmed on a government page, so only rajasthan.gov.in and the Jan
// Soochna portal are linked. Premium amount and accident cover are left out
// because no official 2025-26 source could be read.
export const rjChiranjeeviYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "राजस्थान", href: "/states/rajasthan.html" },
    { label: "MAA (चिरंजीवी) योजना" },
  ],
  docHi: "मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना",
  title: "मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना (अब MAA योजना) 2026",
  description: "राजस्थान की चिरंजीवी योजना अब मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना है: पात्र परिवारों को प्रति वर्ष ₹25 लाख तक का कैशलेस इलाज। कौन मुफ्त जुड़ता है, कैसे जुड़ें, हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "राजस्थान: चिरंजीवी योजना अब मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना",
  lead: "राजस्थान की मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना का नाम फरवरी 2024 में बदलकर <strong>मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना</strong> कर दिया गया। इसमें पात्र परिवार को साल में ₹25 लाख तक का कैशलेस इलाज सूचीबद्ध सरकारी और निजी अस्पतालों में मिलता है। पहचान जन आधार कार्ड से होती है; NFSA और कुछ दूसरी श्रेणियों के परिवार मुफ्त जुड़ते हैं, बाकी प्रीमियम देकर।",
  facts: [
    ["नया नाम", "मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना"],
    ["इलाज की सीमा", "₹25 लाख तक प्रति परिवार प्रति वर्ष"],
    ["पहचान", "जन आधार कार्ड"],
    ["हेल्पलाइन", "181 / 1800-180-6127 (राजस्थान संपर्क)"],
  ],
  sections: [
    {
      id: "naam",
      title: "चिरंजीवी से MAA योजना: क्या बदला",
      list: [
        "चिरंजीवी योजना 1 मई 2021 को शुरू हुई थी। फरवरी 2024 में राज्य सरकार ने इसका नाम मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना रखा।",
        "पुराने चिरंजीवी लाभार्थी परिवार नई योजना में चलते रहते हैं; उन्हें नए नाम के लिए अलग से आवेदन नहीं करना पड़ता, पर जन आधार में सदस्यों की जानकारी सही होनी चाहिए।",
        "यह योजना केंद्र की आयुष्मान भारत (PM-JAY) के साथ मिलाकर चलती है।",
      ],
    },
    {
      id: "patrata",
      title: "कौन मुफ्त जुड़ता है, कौन प्रीमियम देकर",
      list: [
        "<strong>मुफ्त:</strong> राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के परिवार, सामाजिक-आर्थिक जनगणना (SECC 2011) के पात्र परिवार, लघु और सीमांत किसान, संविदा कर्मी और सरकार की अधिसूचित दूसरी श्रेणियां।",
        "<strong>प्रीमियम देकर:</strong> जो परिवार इन श्रेणियों में नहीं हैं, वे तय सालाना प्रीमियम भरकर जुड़ सकते हैं। प्रीमियम की राशि और पंजीकरण की अवधि जन आधार/ई-मित्र पर पूछें।",
        "राजस्थान का जन आधार कार्ड होना ज़रूरी है।",
      ],
      callout: { kind: "info", html: "राज्य सरकारी कर्मचारी और पेंशनर आम तौर पर अलग योजना (RGHS) में आते हैं। अपनी श्रेणी पक्की करने के लिए 181 पर पूछें।" },
    },
    {
      id: "judna",
      title: "योजना में कैसे जुड़ें",
      steps: [
        "<strong>जन आधार बनवाएं/अपडेट करें:</strong> परिवार के सभी सदस्यों के नाम, आधार और मोबाइल सही हों।",
        "<strong>नज़दीकी ई-मित्र केंद्र जाएं</strong> या योजना के पोर्टल पर जन आधार नंबर से पंजीकरण करें।",
        "<strong>मुफ्त श्रेणी</strong> के परिवारों का नाम आम तौर पर जन आधार के आंकड़ों से अपने आप जुड़ता है; स्टेटस ई-मित्र पर या <a href=\"https://jansoochna.rajasthan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">जन सूचना पोर्टल</a> पर देखें।",
        "<strong>प्रीमियम वाले परिवार</strong> तय समय में ऑनलाइन/ई-मित्र से प्रीमियम भरकर पंजीकरण करें और रसीद संभालें।",
      ],
    },
    {
      id: "ilaj",
      title: "अस्पताल में इलाज कैसे मिलेगा",
      steps: [
        "योजना से जुड़े (सूचीबद्ध) सरकारी या निजी अस्पताल में जाएं। अस्पताल में योजना की हेल्प डेस्क होती है।",
        "जन आधार कार्ड या नंबर और आधार दिखाएं; पहचान के बाद इलाज कैशलेस होता है।",
        "भर्ती से पहले और छुट्टी के बाद की कुछ जांच/दवाइयां भी पैकेज में आती हैं; हेल्प डेस्क से पूछें।",
        "अस्पताल पैसे मांगे तो रसीद लें और 181 या 1800-180-6127 पर शिकायत करें।",
      ],
      callout: { kind: "warn", html: "हर बीमारी या हर अस्पताल इसमें नहीं आता। इलाज शुरू होने से पहले हेल्प डेस्क से पक्का कर लें कि अस्पताल और इलाज योजना में शामिल हैं।" },
    },
  ],
  official: [
    { href: "https://rajasthan.gov.in/", title: "राजस्थान सरकार पोर्टल" },
    { href: "https://jansoochna.rajasthan.gov.in/", title: "जन सूचना पोर्टल, राजस्थान (योजना की स्थिति)" },
    { href: "https://janaadhaar.rajasthan.gov.in/", title: "जन आधार पोर्टल" },
  ],
  faq: [
    { q: "क्या चिरंजीवी योजना बंद हो गई?", a: "नहीं, इसका नाम बदला है। फरवरी 2024 से यह मुख्यमंत्री आयुष्मान आरोग्य (MAA) योजना कहलाती है और पात्र परिवारों को इलाज मिलता रहता है।" },
    { q: "MAA योजना में कितने रुपये तक का इलाज मुफ्त है?", a: "पात्र परिवार को साल में ₹25 लाख तक का कैशलेस इलाज सूचीबद्ध अस्पतालों में।" },
    { q: "मेरा नाम योजना में है या नहीं, कैसे देखें?", a: "नज़दीकी ई-मित्र पर जन आधार नंबर से, या जन सूचना पोर्टल पर। मदद के लिए 181 पर कॉल करें।" },
    { q: "दूसरे राज्य का व्यक्ति इसमें जुड़ सकता है?", a: "नहीं, यह राजस्थान की योजना है और इसके लिए राजस्थान का जन आधार ज़रूरी है। दूसरे राज्यों के लोग केंद्र की आयुष्मान भारत योजना देखें।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत (PM-JAY)", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों के लिए" },
    { href: "/states/rajasthan-ration-card.html", emoji: "🌾", title: "राशन कार्ड (राजस्थान)", text: "NFSA में नाम" },
    { href: "/states/rajasthan-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (राजस्थान)", text: "योजनाओं के लिए" },
    { href: "/states/rajasthan-domicile-certificate.html", emoji: "🏠", title: "मूल निवास (राजस्थान)", text: "राज्य का निवास प्रमाण" },
  ],
  aside: [
    { href: "https://jansoochna.rajasthan.gov.in/", label: "🔎 जन सूचना पोर्टल" },
    { href: "/states/rajasthan.html", label: "🏰 राजस्थान की सेवाएं" },
  ],
};
