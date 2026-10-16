import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - theweek.in (PTI, 17 Nov 2025), etvbharat.com, tribuneindia.com: ECI ordered
//   Special Revision (not SIR) in Assam; QD 01.01.2026; H2H verification from
//   18 Nov 2025 without enumeration forms; final roll 10 Feb 2026.
// - business-standard.com / uniindia.com (Feb 2026): final roll 2,49,58,139
//   electors (same as sibling assam-voter-id-card.ts, which cites AIR 10 Feb 2026).
// - tribuneindia.com: CM said an SIR would follow the Assembly election; SC
//   notice on a plea seeking SIR. No SIR schedule for Assam found as of 16 Oct 2026.
// - pib.gov.in PRID 2289473 (25 Jul 2026): four SIR deletion grounds.
// Left out: any SIR date for Assam (none found); outcome of the SC petition.
export const assamSirVoterList: DocGuide = {
  state: { slug: "assam", hi: "असम" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "असम", href: "/states/assam.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Assam SIR Voter List 2026: Name Check, Eligibility & Documents",
  description: "असम SIR वोटर लिस्ट 2026: असम में SIR नहीं, Special Revision हुआ; अंतिम सूची 10 फरवरी 2026 को छपी। नाम कैसे देखें, नाम न हो तो Form 6, BLO और 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "असम SIR वोटर लिस्ट 2026: Special Revision की अंतिम सूची और नाम जांच",
  lead: "असम में चुनाव आयोग ने SIR की जगह मतदाता सूची का <strong>विशेष पुनरीक्षण (Special Revision)</strong> कराया, जिसकी <strong>अंतिम सूची 10 फरवरी 2026</strong> को छपी। असम के लिए SIR का कोई कार्यक्रम अभी (16 अक्टूबर 2026) तक घोषित होने की जानकारी हमें नहीं मिली। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर देखें; नाम न हो तो Form 6 भरें।",
  facts: [
    ["असम में क्या हुआ", "Special Revision (SIR नहीं)"],
    ["योग्यता तिथि", "1 जनवरी 2026"],
    ["अंतिम सूची", "10 फरवरी 2026"],
    ["SIR", "कार्यक्रम घोषित नहीं"],
  ],
  notice: "<strong>ध्यान दें:</strong> असम में SIR अभी नहीं हुआ है। नवंबर 2025 से फरवरी 2026 तक चला काम <strong>Special Revision</strong> था। SIR की तारीखों को लेकर फैल रही बातों पर भरोसा न करें; कार्यक्रम घोषित होगा तो CEO असम की वेबसाइट पर आएगा।",
  sections: [
    {
      id: "sthiti",
      title: "असम में SIR की स्थिति",
      intro: "चुनाव आयोग ने 17 नवंबर 2025 को असम के लिए SIR की जगह मतदाता सूची के <strong>विशेष पुनरीक्षण (Special Revision)</strong> का आदेश दिया। खबरों (PTI/The Week, ETV Bharat) के अनुसार आयोग ने इसकी वजह असम के नागरिकता से जुड़े अलग प्रावधान बताए।",
      table: {
        head: ["काम", "जानकारी"],
        rows: [
          ["योग्यता तिथि", "1 जनवरी 2026"],
          ["BLO का घर-घर सत्यापन", "18 नवंबर 2025 से (गणना फॉर्म नहीं भरवाया गया)"],
          ["अंतिम मतदाता सूची", "10 फरवरी 2026 (करीब 2.49 करोड़ मतदाता)"],
          ["SIR (विशेष गहन पुनरीक्षण)", "16 अक्टूबर 2026 तक कोई कार्यक्रम घोषित होने की जानकारी नहीं"],
        ],
      },
      callout: {
        kind: "info",
        html: "SIR और Special Revision में फर्क: SIR में हर मतदाता को गणना फॉर्म भरना होता है और पुरानी सूची से मिलान होता है। असम के Special Revision में BLO ने घर-घर जाकर मौजूदा नामों का सत्यापन किया; हर व्यक्ति से फॉर्म या कागज़ नहीं मांगे गए। मुख्यमंत्री ने विधानसभा चुनाव के बाद SIR होने की बात कही थी, पर इसकी कोई तारीख हमें नहीं मिली।",
      },
    },
    {
      id: "naam-jaanch",
      title: "मतदाता सूची में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC (वोटर कार्ड) नंबर डालकर खोजें, या नाम, उम्र, ज़िला और विधानसभा क्षेत्र भरकर, या मोबाइल नंबर से खोजें।",
        "नाम दिखे तो भाग संख्या, क्रम संख्या और मतदान केंद्र लिख लें।",
        "नाम न दिखे तो नाम की स्पेलिंग बदलकर दोबारा खोजें। फिर भी न मिले तो नीचे दिए तरीके से Form 6 भरें।",
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) असम की वेबसाइट <a href=\"https://ceoassam.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoassam.nic.in</a> पर मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "SIR होने पर क्या होगा: गणना फॉर्म और कागज़",
      list: [
        "SIR शुरू होने पर BLO हर घर में <strong>दो प्रति में गणना फॉर्म (Enumeration Form)</strong> लेकर आते हैं। इसमें नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और फोटो भरनी होती है।",
        "दूसरे राज्यों में पिछली गहन पुनरीक्षण वाली पुरानी सूची से अपना या माता-पिता का नाम मिलाना पड़ा। अभी से अपना पुराना EPIC नंबर और पुरानी सूची में परिवार का विवरण संभाल कर रखें।",
        "जिनका मिलान नहीं होता, उनसे ERO पहचान, जन्म या निवास के कागज़ मांगता है। अपने कागज़ (जन्म प्रमाण, निवास प्रमाण आदि) तैयार रखें।",
        "कार्यक्रम घोषित होने पर तारीखें मुख्य निर्वाचन अधिकारी (CEO) असम की वेबसाइट <a href=\"https://ceoassam.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoassam.nic.in</a> पर आएंगी। किसी अफवाह पर भरोसा न करें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "सूची में नाम नहीं है तो क्या करें",
      steps: [
        "<strong>Form 6</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर, या अपने BLO/ERO कार्यालय के ज़रिए।",
        "मतदाता सूची साल में चार बार (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर की योग्यता तिथि से) अपडेट होती है। जांच के बाद नाम अगले अपडेट में जुड़ता है।",
        "किसी गलत नाम (मृत, शिफ्ट, डुप्लीकेट) पर आपत्ति के लिए <strong>Form 7</strong>, और अपनी जानकारी में सुधार के लिए <strong>Form 8</strong> भरें।",
        "मदद के लिए अपने BLO से मिलें या <strong>1950</strong> पर कॉल करें।",
        "ERO के फैसले से असहमत हों तो ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील का रास्ता है।",
      ],
      callout: {
        kind: "info",
        html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>।",
      },
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "गणना फॉर्म और Form 6/7/8 <strong>मुफ्त</strong> हैं। कोई पैसे मांगे तो न दें और 1950 पर शिकायत करें।",
        "SIR में गणना फॉर्म के लिए BLO खुद घर आते हैं। BLO से उनकी पहचान पूछ सकते हैं।",
        "OTP किसी को न बताएं, न फोन पर न घर आए किसी व्यक्ति को।",
        "यह SarkariSewa India की निजी जानकारी वाली वेबसाइट है, सरकारी नहीं। आधिकारिक सूची और तारीखें CEO वेबसाइट पर ही देखें।",
      ],
    },
  ],
  official: [
    { href: "https://ceoassam.nic.in/", title: "मुख्य निर्वाचन अधिकारी, असम", note: "मतदाता सूची, Special Revision 2026" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    {
      q: "क्या असम में SIR हुआ है?",
      a: "नहीं। असम में SIR की जगह Special Revision हुआ, जिसकी अंतिम सूची 10 फरवरी 2026 को छपी। SIR का कार्यक्रम 16 अक्टूबर 2026 तक घोषित होने की जानकारी हमें नहीं मिली।",
    },
    {
      q: "Special Revision में मेरा नाम कट गया, क्या करूं?",
      a: "Form 6 भरकर दोबारा नाम जुड़वाएं (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। मतदाता सूची साल में चार बार अपडेट होती है।",
    },
    {
      q: "असम में SIR कब होगा?",
      a: "अभी कोई तारीख घोषित होने की जानकारी नहीं है। घोषणा होने पर CEO असम (ceoassam.nic.in) और चुनाव आयोग की वेबसाइट पर कार्यक्रम आएगा।",
    },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/assam-voter-id-card.html", emoji: "🗳️", title: "असम वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/assam-voter-id-card.html", label: "🗳️ असम वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
