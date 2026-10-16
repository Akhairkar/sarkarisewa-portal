import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; no official Tripura page found, Tripura
// government sites not reachable from the sandbox): EastMojo 25 Jun 2020
// (Tripura launches schemes to fight malnutrition and maternal mortality),
// GKToday / Manabadi 2020 current-affairs notes (nutrition kits to pregnant
// women after check-ups at PHCs; up to four kits; items such as groundnut,
// soybean, mixed pulses, jaggery, ghee; about Rs 500 per kit; ~40,000 women a
// year). Whether the scheme is still running in 2026 and its current kit
// contents could not be confirmed, so the page says so.
export const tripuraMukhyamantriMatruPushtiUphaar: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "त्रिपुरा", href: "/states/tripura.html" },
    { label: "मातृ पुष्टि उपहार" },
  ],
  docHi: "मुख्यमंत्री मातृ पुष्टि उपहार",
  title: "Mukhyamantri Matru Pushti Uphaar",
  description: "त्रिपुरा की मुख्यमंत्री मातृ पुष्टि उपहार योजना: गर्भवती महिलाओं को जांच के बाद पोषण किट। कौन पात्र, किट में क्या, कहां पूछें और योजना की ताज़ा स्थिति।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "त्रिपुरा मुख्यमंत्री मातृ पुष्टि उपहार: गर्भवती महिलाओं को पोषण किट",
  lead: "मुख्यमंत्री मातृ पुष्टि उपहार त्रिपुरा सरकार की योजना है, जो जून 2020 में शुरू हुई। इसमें गर्भवती महिलाओं को सरकारी स्वास्थ्य केंद्र पर नियमित जांच कराने के बाद <strong>पोषण किट</strong> दी जाती है, ताकि मां और बच्चे का कुपोषण और मृत्यु दर घटे। किट के लिए अलग से ऑनलाइन आवेदन नहीं है; यह स्वास्थ्य केंद्र में पंजीकरण और जांच से जुड़ी है।",
  facts: [
    ["राज्य", "त्रिपुरा"],
    ["किसके लिए", "गर्भवती महिलाएं"],
    ["लाभ", "जांच के बाद पोषण किट (2020 में चार किट तक)"],
    ["कहां", "प्राथमिक स्वास्थ्य केंद्र / सरकारी अस्पताल"],
  ],
  notice: "यह जानकारी 2020 की घोषणा पर आधारित है। 2026 में योजना किस रूप में चल रही है, इसकी आधिकारिक पुष्टि हमें नहीं मिली; अपने स्वास्थ्य केंद्र या आशा/ANM से पूछें।",
  sections: [
    {
      id: "kya-milta",
      title: "योजना में क्या मिलता है (2020 की घोषणा)",
      list: [
        "गर्भावस्था के दौरान तय समय पर जांच कराने पर हर जांच के बाद एक पोषण किट; कुल <strong>चार किट</strong> तक।",
        "किट में मूंगफली, सोयाबीन, मिली-जुली दालें, गुड़ और घी जैसी चीज़ें बताई गई थीं।",
        "घोषणा के समय एक किट पर लगभग ₹500 का खर्च और हर साल करीब 40,000 महिलाओं को लाभ का अनुमान बताया गया था।",
      ],
    },
    {
      id: "kaise",
      title: "लाभ कैसे लें",
      steps: [
        "गर्भ का पता चलते ही नज़दीकी <strong>सरकारी स्वास्थ्य केंद्र</strong> या आंगनवाड़ी में पंजीकरण कराएं (ANC रजिस्ट्रेशन)।",
        "मातृ एवं शिशु सुरक्षा (MCP) कार्ड बनवाएं और हर जांच इसमें दर्ज कराएं।",
        "जांच के बाद स्वास्थ्य केंद्र से पूछें कि मातृ पुष्टि उपहार की किट मिल रही है या नहीं।",
        "आधार, बैंक पासबुक और राशन कार्ड साथ रखें; दूसरी योजनाओं (जैसे PMMVY, JSY) में भी ये लगते हैं।",
      ],
      callout: { kind: "warn", html: "किट मुफ्त है। इसके नाम पर कोई फॉर्म-फीस या पैसे मांगे तो स्वास्थ्य केंद्र के प्रभारी को बताएं।" },
    },
    {
      id: "dusri",
      title: "गर्भवती महिलाओं के लिए दूसरी योजनाएं",
      list: [
        '<strong>प्रधानमंत्री मातृ वंदना योजना (PMMVY):</strong> केंद्र की नकद सहायता, देखें <a href="/service/pm-matru-vandana-yojana.html">PMMVY गाइड</a>।',
        '<strong>जननी सुरक्षा योजना (JSY):</strong> सरकारी अस्पताल में प्रसव पर सहायता, देखें <a href="/service/janani-suraksha-yojana.html">JSY गाइड</a>।',
        "<strong>आंगनवाड़ी:</strong> गर्भवती और धात्री महिलाओं को पूरक पोषण (टेक-होम राशन)।",
      ],
    },
  ],
  official: [
    { href: "https://tripura.gov.in/", title: "त्रिपुरा सरकार का पोर्टल" },
  ],
  faq: [
    { q: "मातृ पुष्टि उपहार में क्या मिलता है?", a: "2020 की घोषणा के अनुसार गर्भवती महिला को स्वास्थ्य केंद्र पर जांच के बाद पोषण किट मिलती है, कुल चार किट तक, जिसमें दाल, सोयाबीन, मूंगफली, गुड़, घी जैसी चीज़ें होती हैं।" },
    { q: "क्या ऑनलाइन आवेदन करना होता है?", a: "हमें इसका कोई ऑनलाइन आवेदन नहीं मिला। लाभ सरकारी स्वास्थ्य केंद्र में गर्भावस्था पंजीकरण और जांच से जुड़ा है।" },
    { q: "क्या यह योजना अभी भी चल रही है?", a: "2026 की आधिकारिक स्थिति हमें नहीं मिली। अपने प्राथमिक स्वास्थ्य केंद्र, आशा या ANM से पूछें।" },
    { q: "क्या इसके साथ PMMVY का पैसा भी मिल सकता है?", a: "PMMVY केंद्र की अलग योजना है, जिसकी अपनी शर्तें हैं। दोनों के लिए अलग-अलग पात्रता देखें।" },
  ],
  related: [
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "🤰", title: "प्रधानमंत्री मातृ वंदना योजना", text: "गर्भवती महिलाओं को नकद सहायता" },
    { href: "/service/janani-suraksha-yojana.html", emoji: "🏥", title: "जननी सुरक्षा योजना", text: "संस्थागत प्रसव पर सहायता" },
    { href: "/service/tripura-ration-card.html", emoji: "🍚", title: "राशन कार्ड (त्रिपुरा)", text: "राशन कार्ड बनवाएं" },
    { href: "/service/tripura-birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र (त्रिपुरा)", text: "बच्चे का जन्म प्रमाण पत्र" },
    { href: "/states/tripura.html", emoji: "🗺️", title: "त्रिपुरा की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "/service/pm-matru-vandana-yojana.html", label: "🤰 PMMVY गाइड" },
    { href: "/states/tripura.html", label: "🗺️ त्रिपुरा की सेवाएं" },
  ],
};
