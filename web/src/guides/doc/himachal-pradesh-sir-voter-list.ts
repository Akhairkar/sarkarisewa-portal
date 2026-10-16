import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2260955 / ECI/PN/086/2026 (14 May 2026, copy on
//   meghalaya.gov.in): Phase III covers the country except Himachal Pradesh,
//   J&K and Ladakh; their schedule after Census Phase II and weather in
//   snow-bound areas.
// - indianeagle.com state-wise list (Jul 2026): HP "schedule yet to be
//   announced"; no later announcement found in searches on 16 Oct 2026.
// - sechimachal.hp.gov.in: State Election Commission panchayat roll programme
//   (separate from SIR), as noted in sibling himachal-pradesh-voter-id-card.ts.
// - ceohimachal.hp.gov.in: CEO HP site.
// Left out: any SIR date for HP (none announced).
export const himachalPradeshSirVoterList: DocGuide = {
  state: { slug: "himachal-pradesh", hi: "हिमाचल प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "हिमाचल प्रदेश", href: "/states/himachal-pradesh.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Himachal Pradesh SIR Voter List 2026",
  description: "हिमाचल प्रदेश SIR वोटर लिस्ट 2026: यहां SIR अभी शुरू नहीं हुआ, कार्यक्रम बाद में घोषित होगा। तब तक नाम कैसे देखें, Form 6/8 से नाम जोड़ें-सुधारें, BLO और 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश SIR वोटर लिस्ट 2026: SIR कब होगा और तब तक क्या करें",
  lead: "हिमाचल प्रदेश में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>अभी शुरू नहीं हुआ है</strong>। चुनाव आयोग ने 14 मई 2026 को कहा कि हिमाचल, जम्मू-कश्मीर और लद्दाख का कार्यक्रम <strong>बाद में घोषित</strong> होगा। तब तक अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर देखें और ज़रूरत हो तो Form 6 या Form 8 सामान्य तरीके से भरें।",
  facts: [
    ["SIR की स्थिति", "शुरू नहीं हुआ"],
    ["कार्यक्रम", "बाद में घोषित होगा (ECI, 14 मई 2026)"],
    ["अभी नाम जोड़ना", "Form 6 (सामान्य तरीका)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>ध्यान दें:</strong> हिमाचल प्रदेश में SIR की कोई तारीख 16 अक्टूबर 2026 तक घोषित होने की जानकारी हमें नहीं मिली। SIR के नाम पर कोई फॉर्म भरवाए, पैसे या OTP मांगे तो सावधान रहें और 1950 पर पूछें।",
  sections: [
    {
      id: "sthiti",
      title: "हिमाचल प्रदेश में SIR की स्थिति",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> में तीसरे चरण में पूरे देश को शामिल किया गया, पर <strong>हिमाचल प्रदेश, जम्मू-कश्मीर और लद्दाख</strong> को छोड़ा गया। आयोग ने कहा कि इन जगहों का कार्यक्रम जनगणना के दूसरे चरण के पूरा होने और बर्फीले इलाकों के मौसम को देखकर बाद में घोषित होगा।",
      list: [
        "तब तक मतदाता सूची में नाम जोड़ने, सुधार और नाम हटाने का सामान्य काम (Form 6, 8, 7) चलता रहेगा।",
        "SIR घोषित होने पर BLO घर-घर गणना फॉर्म लेकर आएंगे। कार्यक्रम CEO हिमाचल की वेबसाइट और चुनाव आयोग की प्रेस विज्ञप्ति में आएगा।",
      ],
      callout: {
        kind: "info",
        html: "पंचायत और नगर निकाय चुनाव की वोटर लिस्ट <strong>राज्य निर्वाचन आयोग</strong> (sechimachal.hp.gov.in) बनाता है; उसका पुनरीक्षण SIR नहीं है। लोकसभा/विधानसभा की वोटर लिस्ट भारत निर्वाचन आयोग और CEO हिमाचल के पास है।",
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
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) हिमाचल प्रदेश की वेबसाइट <a href=\"https://ceohimachal.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceohimachal.hp.gov.in</a> पर मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "SIR होने पर क्या होगा: गणना फॉर्म और कागज़",
      list: [
        "SIR शुरू होने पर BLO हर घर में <strong>दो प्रति में गणना फॉर्म (Enumeration Form)</strong> लेकर आते हैं। इसमें नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और फोटो भरनी होती है।",
        "दूसरे राज्यों में पिछली गहन पुनरीक्षण वाली पुरानी सूची से अपना या माता-पिता का नाम मिलाना पड़ा। अभी से अपना पुराना EPIC नंबर और पुरानी सूची में परिवार का विवरण संभाल कर रखें।",
        "जिनका मिलान नहीं होता, उनसे ERO पहचान, जन्म या निवास के कागज़ मांगता है। अपने कागज़ (जन्म प्रमाण, निवास प्रमाण आदि) तैयार रखें।",
        "कार्यक्रम घोषित होने पर तारीखें मुख्य निर्वाचन अधिकारी (CEO) हिमाचल प्रदेश की वेबसाइट <a href=\"https://ceohimachal.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceohimachal.hp.gov.in</a> पर आएंगी। किसी अफवाह पर भरोसा न करें।",
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
    { href: "https://ceohimachal.hp.gov.in/", title: "मुख्य निर्वाचन अधिकारी, हिमाचल प्रदेश", note: "मतदाता सूची, नाम खोजें" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    {
      q: "क्या हिमाचल प्रदेश में SIR चल रहा है?",
      a: "नहीं। चुनाव आयोग ने 14 मई 2026 को कहा कि हिमाचल, जम्मू-कश्मीर और लद्दाख में SIR का कार्यक्रम बाद में घोषित होगा। 16 अक्टूबर 2026 तक कोई तारीख घोषित होने की जानकारी हमें नहीं मिली।",
    },
    {
      q: "SIR से पहले मुझे क्या तैयारी करनी चाहिए?",
      a: "मतदाता सूची में अपना और परिवार का नाम जांचें, गलती हो तो Form 8 से सुधारें, अपना EPIC नंबर और जन्म/निवास के कागज़ संभाल कर रखें।",
    },
    {
      q: "पंचायत वोटर लिस्ट का पुनरीक्षण क्या SIR है?",
      a: "नहीं। पंचायत/नगर निकाय की सूची राज्य निर्वाचन आयोग बनाता है। SIR भारत निर्वाचन आयोग का विधानसभा/लोकसभा मतदाता सूची का अभियान है।",
    },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/himachal-pradesh-voter-id-card.html", emoji: "🗳️", title: "हिमाचल प्रदेश वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/himachal-pradesh-voter-id-card.html", label: "🗳️ हिमाचल प्रदेश वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
