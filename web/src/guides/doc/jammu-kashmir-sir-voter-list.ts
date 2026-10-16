import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - PIB 14.05.2026 (PRID 2260955) / ECI/PN/086/2026: SIR Phase III in 16 States
//   + 3 UTs; Himachal Pradesh, J&K and Ladakh to be scheduled later, after the
//   census work and considering weather in snow-bound areas.
// - ETV Bharat (15 May 2026, search extract): SIR in J&K likely only after
//   February 2027; CEO J&K said dates will be notified once ECI announces them.
//   No later ECI schedule for J&K found in search on 16 Oct 2026.
// - PIB 25.07.2026 (PRID 2289473): SIR deletion only for death, permanent
//   shifting, duplicate entry, not found after repeated visits.
// - PIB 29.10.2025 (PRID 2183805): helpline 1950, NCC 1800-11-1950, Book-a-Call
//   with BLO on ECINET.
// - ceojammukashmir.nic.in: CEO J&K site (electoral rolls, name search), as in
//   jammu-kashmir-voter-id-card.ts.
// Left out: any J&K SIR date (none announced).
export const jammuKashmirSirVoterList: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू-कश्मीर" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "जम्मू-कश्मीर", href: "/states/jammu-kashmir.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Jammu Kashmir SIR Voter List 2026",
  description: "जम्मू-कश्मीर में SIR (विशेष गहन पुनरीक्षण) की स्थिति 2026: कार्यक्रम अभी घोषित नहीं, तब तक वोटर लिस्ट में नाम कैसे जांचें, Form 6/8 और BLO की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "जम्मू-कश्मीर SIR वोटर लिस्ट 2026: अभी क्या स्थिति है और आप क्या करें",
  lead: "जम्मू-कश्मीर में <strong>SIR (विशेष गहन पुनरीक्षण) अभी शुरू नहीं हुआ है</strong> और इसकी तारीखें भी घोषित नहीं हुई हैं। चुनाव आयोग ने 14 मई 2026 को कहा था कि जम्मू-कश्मीर, लद्दाख और हिमाचल प्रदेश का कार्यक्रम जनगणना का काम और बर्फीले इलाकों का मौसम देखकर <strong>बाद में</strong> बताया जाएगा। तब तक वोटर लिस्ट में अपना नाम जांच लें और ज़रूरत हो तो Form 6 या Form 8 सामान्य तरीके से भरें।",
  facts: [
    ["SIR की स्थिति", "अभी घोषित नहीं"],
    ["नाम जांचें", "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a>"],
    ["CEO वेबसाइट", "<a href=\"https://ceojammukashmir.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceojammukashmir.nic.in</a>"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>ध्यान दें:</strong> जम्मू-कश्मीर में SIR की कोई तारीख अभी तय नहीं है। कोई \"SIR फॉर्म\" के नाम पर पैसे या OTP मांगे तो न दें। सही जानकारी सिर्फ CEO जम्मू-कश्मीर और चुनाव आयोग की वेबसाइट पर आएगी।",
  sections: [
    {
      id: "sthiti",
      title: "जम्मू-कश्मीर में SIR की स्थिति",
      intro: "चुनाव आयोग ने 14 मई 2026 को SIR का तीसरा चरण 16 राज्यों और 3 केंद्र शासित प्रदेशों के लिए घोषित किया, पर <strong>जम्मू-कश्मीर, लद्दाख और हिमाचल प्रदेश</strong> को इसमें नहीं रखा। आयोग के अनुसार इनका कार्यक्रम जनगणना के दूसरे चरण और बर्फीले इलाकों का मौसम देखकर बाद में आएगा।",
      list: [
        "मई 2026 की खबरों (ETV Bharat) के अनुसार जम्मू-कश्मीर में SIR <strong>फरवरी 2027 के बाद</strong> होने की संभावना है। यह अनुमान है, तय तारीख नहीं।",
        "16 अक्टूबर 2026 तक हमें जम्मू-कश्मीर के लिए SIR का कोई आधिकारिक कार्यक्रम नहीं मिला।",
        "कार्यक्रम आने पर उसकी सूचना CEO जम्मू-कश्मीर की वेबसाइट <a href=\"https://ceojammukashmir.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceojammukashmir.nic.in</a> और चुनाव आयोग की प्रेस विज्ञप्ति में आएगी।",
      ],
      callout: { kind: "info", html: "SIR न होने का मतलब यह नहीं कि वोटर लिस्ट बंद है। साल में चार योग्यता तिथियों (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर) के हिसाब से नाम जुड़ना, सुधार और नाम हटाना चलता रहता है।" },
    },
    {
      id: "abhi-kya-karein",
      title: "तब तक आप क्या करें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-पता या मोबाइल नंबर से अपना और परिवार का नाम खोजें।",
        "नाम नहीं है या आप 18 साल के हो गए हैं तो <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline ऐप पर <strong>Form 6</strong> भरें। 17 साल पूरे होते ही पहले से आवेदन कर सकते हैं।",
        "नाम, उम्र, फोटो में गलती है या पता बदला है तो <strong>Form 8</strong> भरें।",
        "परिवार में किसी की मृत्यु हो गई हो या कोई हमेशा के लिए कहीं और चला गया हो तो उसका नाम हटाने के लिए <strong>Form 7</strong> भरें। इससे SIR के समय परेशानी कम होगी।",
        "जन्म प्रमाण पत्र, 10वीं की मार्कशीट, निवास के कागज़ जैसे दस्तावेज़ संभालकर रखें। SIR में जिनका मिलान पुरानी सूची से नहीं होता, उनसे कागज़ मांगे जा सकते हैं।",
      ],
    },
    {
      id: "sir-kaise",
      title: "SIR होने पर क्या होगा (दूसरे राज्यों के अनुभव से)",
      list: [
        "BLO घर-घर जाकर हर वोटर को <strong>गणना फॉर्म (Enumeration Form)</strong> दो प्रति में देते हैं। फॉर्म भरकर BLO को लौटाना होता है और पावती लेनी होती है।",
        "इसके बाद <strong>ड्राफ्ट वोटर लिस्ट</strong> छपती है, फिर दावे-आपत्ति का समय मिलता है, नोटिस और सुनवाई होती है और अंत में <strong>अंतिम सूची</strong> छपती है।",
        "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना।",
        "ड्राफ्ट सूची में नाम न हो तो दावे-आपत्ति के समय में Form 6 (घोषणा पत्र के साथ) भरना होता है। ERO के फैसले पर पहले ज़िला मजिस्ट्रेट/DEO और फिर CEO के पास अपील होती है।",
      ],
      html: "पूरी जानकारी हमारे पेज <a href=\"/service/special-intensive-revision-sir.html\">SIR क्या है</a> पर पढ़ें।",
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "SIR या वोटर लिस्ट के किसी फॉर्म की <strong>कोई फीस नहीं</strong> है।",
        "SIR शुरू होने पर BLO खुद आपके घर आएगा। अनजान लोगों को अपना आधार, EPIC या बैंक की जानकारी न दें।",
        "मोबाइल पर आया <strong>OTP किसी को न बताएं</strong>, चाहे वह खुद को चुनाव कार्यालय का बताए।",
        "फॉर्म सिर्फ voters.eci.gov.in, Voter Helpline/ECINET ऐप या BLO/ERO के ज़रिए भरें।",
      ],
    },
    {
      id: "madad",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और BLO जानने के लिए <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a> खोलें।",
        "ECINET ऐप पर <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेज सकते हैं।",
        "वोटर हेल्पलाइन <strong>1950</strong> (STD कोड के साथ) और राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong> (सुबह 8 से रात 8 बजे)।",
      ],
    },
  ],
  official: [
    { href: "https://ceojammukashmir.nic.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), जम्मू-कश्मीर", note: "वोटर लिस्ट और राज्य की सूचनाएं" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग" },
  ],
  faq: [
    { q: "क्या जम्मू-कश्मीर में SIR चल रहा है?", a: "नहीं। 16 अक्टूबर 2026 तक जम्मू-कश्मीर में SIR शुरू नहीं हुआ है। चुनाव आयोग ने कहा है कि इसका कार्यक्रम बाद में घोषित होगा।" },
    { q: "जम्मू-कश्मीर में SIR कब होगा?", a: "तारीख अभी तय नहीं है। मई 2026 की खबरों के अनुसार यह फरवरी 2027 के बाद हो सकता है, पर यह अनुमान है। आधिकारिक सूचना CEO जम्मू-कश्मीर की वेबसाइट पर देखें।" },
    { q: "SIR से पहले नाम जुड़वा सकते हैं?", a: "हां। voters.eci.gov.in या Voter Helpline ऐप पर Form 6 भरें, या BLO को फॉर्म दें। वोटर लिस्ट साल में चार बार अपडेट होती है।" },
    { q: "SIR फॉर्म भरने के लिए कोई पैसे मांगे तो?", a: "पैसे न दें। वोटर लिस्ट के किसी फॉर्म की कोई फीस नहीं है। शिकायत 1950 पर या ERO कार्यालय में करें।" },
  ],
  related: [
    { href: "/states/jammu-kashmir-voter-id-card.html", emoji: "🗳️", title: "जम्मू-कश्मीर वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/jammu-kashmir-voter-id-card.html", label: "🗳️ J&K वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
