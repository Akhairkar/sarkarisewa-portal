import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; trai.gov.in not reachable from the sandbox,
// search-result extracts used): TRAI public notice dated 10.12.2019 on the
// revised MNP process from 16.12.2019 (UPC by SMS "PORT <mobile number>" to
// 1900; UPC valid 4 days, 30 days in J&K, Assam and North East LSAs; porting
// within the same LSA in 3 working days, to another LSA in 5 days; at least
// 90 days on the present network); TRAI press release No. 35/2024 and
// Telecommunication MNP (Ninth Amendment) Regulations dated 14.03.2024,
// effective 01.07.2024 (no UPC if requested within 7 days of a SIM swap /
// replacement); tele.net.in, fonearena, moneylife coverage of the same. The
// per-port charge is not stated as a number because the current figure could
// not be confirmed on trai.gov.in. Old page's "1800-110-420" helpline was not
// verified and is dropped.
export const mobileNumberPortability: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "मोबाइल नंबर पोर्टेबिलिटी" },
  ],
  docHi: "मोबाइल नंबर पोर्टेबिलिटी",
  title: "मोबाइल नंबर पोर्टेबिलिटी (MNP) 2026",
  description: "अपने मौजूदा फोन नंबर को बनाए रखते हुए अपने मोबाइल नेटवर्क ऑपरेटर को बदलें, जो पूरे भारत में TRAI द्वारा विनियमित है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मोबाइल नंबर पोर्टेबिलिटी (MNP): नंबर वही, कंपनी नई — UPC कोड, समय और नियम",
  lead: "मोबाइल नंबर पोर्टेबिलिटी (MNP) से आप अपना मोबाइल नंबर बदले बिना दूसरी टेलीकॉम कंपनी में जा सकते हैं। इसके लिए अपने नंबर से 1900 पर \"PORT &lt;मोबाइल नंबर&gt;\" SMS भेजकर यूनिक पोर्टिंग कोड (UPC) लें और नई कंपनी के स्टोर/रिटेलर पर KYC करवाएं। TRAI के नियमों के अनुसार उसी सर्कल में पोर्ट 3 कामकाजी दिनों में और दूसरे सर्कल में 5 दिनों में होता है।",
  facts: [
    ["UPC के लिए SMS", "PORT &lt;मोबाइल नंबर&gt; → 1900"],
    ["UPC की वैधता", "4 दिन (J&K, असम, पूर्वोत्तर: 30 दिन)"],
    ["समय", "उसी सर्कल 3 कामकाजी दिन; दूसरा सर्कल 5 दिन"],
    ["शर्त", "मौजूदा कंपनी में कम से कम 90 दिन"],
  ],
  sections: [
    {
      id: "tarika",
      title: "नंबर पोर्ट कैसे करें",
      steps: [
        "जिस नंबर को पोर्ट करना है, उसी से <strong>1900</strong> पर SMS भेजें: <strong>PORT</strong> स्पेस अपना 10 अंकों का मोबाइल नंबर।",
        "कुछ देर में SMS से 8 अक्षरों का <strong>यूनिक पोर्टिंग कोड (UPC)</strong> और उसकी आखिरी तारीख आएगी।",
        "UPC की वैधता के अंदर नई कंपनी के स्टोर या अधिकृत रिटेलर पर जाएं। UPC बताएं और आधार/पहचान पत्र से <strong>KYC</strong> करवाएं; नई SIM मिलेगी।",
        "पोर्ट होने का समय SMS से बताया जाता है। उस समय पुरानी SIM बंद होगी; तब नई SIM फोन में डालें।",
        "पोस्टपेड है तो पुरानी कंपनी का बकाया बिल पहले चुका दें।",
      ],
      callout: { kind: "ok", html: "UPC आपके अपने फोन पर आता है। किसी अनजान कॉल या मैसेज पर UPC या OTP किसी को न बताएं।" },
    },
    {
      id: "niyam",
      title: "ज़रूरी नियम (TRAI)",
      list: [
        "<strong>90 दिन:</strong> मौजूदा कंपनी में नंबर चालू हुए कम से कम 90 दिन होने चाहिए।",
        "<strong>UPC की वैधता:</strong> 4 दिन; जम्मू-कश्मीर, असम और पूर्वोत्तर सर्कल में 30 दिन। समय निकल जाए तो दोबारा SMS करके नया UPC लें।",
        "<strong>समय सीमा:</strong> उसी सर्कल (राज्य/LSA) में 3 कामकाजी दिन, दूसरे सर्कल में 5 दिन।",
        "<strong>SIM बदलने के बाद 7 दिन रुकें:</strong> 1 जुलाई 2024 से लागू नियम के अनुसार SIM swap/replacement (खोई या खराब SIM बदलवाना) के 7 दिन के अंदर UPC नहीं मिलता। यह धोखाधड़ी रोकने के लिए है।",
        "<strong>पोस्टपेड:</strong> पुरानी कंपनी का बकाया न हो।",
      ],
    },
    {
      id: "kagaz",
      title: "क्या साथ ले जाएं",
      list: [
        "UPC कोड (SMS में आया)",
        "पहचान और पते का प्रमाण, ज़्यादातर आधार से e-KYC",
        "जिस नाम पर नंबर है, उसी व्यक्ति का जाना बेहतर; कंपनी के नाम वाले (कॉर्पोरेट) नंबर के लिए कंपनी का अधिकार पत्र",
      ],
      callout: { kind: "info", html: "पोर्टिंग पर नई कंपनी मामूली शुल्क ले सकती है; कितना, यह स्टोर पर पूछें। नई कंपनी का प्लान और नेटवर्क अपने इलाके में पहले जांच लें।" },
    },
    {
      id: "samasya",
      title: "आम समस्याएं और हल",
      list: [
        "<strong>UPC नहीं आया:</strong> SMS का फॉर्मेट जांचें (PORT, स्पेस, पूरा नंबर)। हाल में SIM बदली है तो 7 दिन रुकें। 90 दिन पूरे न हुए हों तो भी UPC नहीं मिलेगा।",
        "<strong>पोर्ट रिजेक्ट हुआ:</strong> नई कंपनी से कारण पूछें, जैसे UPC मेल न खाना, समय निकल जाना या बकाया। ठीक करके दोबारा आवेदन करें।",
        "<strong>पुरानी कंपनी रोक रही है:</strong> पहले कंपनी की शिकायत सेवा (198) पर शिकायत करें, फिर उसके अपीलीय प्राधिकारी (Appellate Authority) के पास जाएं।",
        "<strong>पोर्ट के दौरान:</strong> स्विच के समय कुछ घंटे सेवा रुक सकती है; बैंक OTP जैसे काम पहले निपटा लें।",
      ],
    },
  ],
  official: [
    { href: "https://www.trai.gov.in/", title: "भारतीय दूरसंचार नियामक प्राधिकरण (TRAI)", note: "MNP नियम और सार्वजनिक सूचनाएं" },
    { href: "https://sancharsaathi.gov.in/", title: "संचार साथी (दूरसंचार विभाग)", note: "अपने नाम पर चल रहे नंबर जांचें" },
  ],
  faq: [
    { q: "UPC कोड कैसे मिलता है?", a: "जिस नंबर को पोर्ट करना है, उससे 1900 पर \"PORT <10 अंकों का मोबाइल नंबर>\" SMS भेजें। UPC SMS से आता है।" },
    { q: "पोर्ट होने में कितना समय लगता है?", a: "TRAI के नियमों के अनुसार उसी सर्कल में 3 कामकाजी दिन और दूसरे सर्कल में 5 दिन।" },
    { q: "UPC कितने दिन चलता है?", a: "4 दिन; जम्मू-कश्मीर, असम और पूर्वोत्तर सर्कल में 30 दिन।" },
    { q: "SIM बदलवाने के तुरंत बाद पोर्ट कर सकते हैं?", a: "नहीं। 1 जुलाई 2024 से SIM swap या replacement के 7 दिन के अंदर UPC जारी नहीं होता।" },
    { q: "कितनी बार नंबर पोर्ट कर सकते हैं?", a: "कोई तय गिनती नहीं, लेकिन हर बार मौजूदा कंपनी में कम से कम 90 दिन पूरे होने चाहिए।" },
  ],
  related: [
    { href: "/service/telecom-sanchar-saathi-tafcop.html", emoji: "📡", title: "संचार साथी / TAFCOP", text: "अपने नाम के मोबाइल कनेक्शन जांचें" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर अपडेट", text: "नया नंबर आधार से जोड़ें" },
    { href: "/service/digilocker.html", emoji: "🗂️", title: "डिजिलॉकर", text: "KYC के कागज़ फोन में" },
    { href: "/service/electricity-connection-bill.html", emoji: "💡", title: "बिजली कनेक्शन और बिल", text: "दूसरी उपयोगिता सेवाएं" },
  ],
  aside: [
    { href: "https://www.trai.gov.in/", label: "📶 TRAI वेबसाइट" },
    { href: "/service/telecom-sanchar-saathi-tafcop.html", label: "📡 संचार साथी गाइड" },
  ],
};
