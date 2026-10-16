import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old post (same URL). Overlaps with
// /service/lpg-subsidy-pahal.html; this post takes the "subsidy not coming /
// shows zero: problems & fixes" angle and links there. Title was cut off;
// completed from the old h1.
// Sources (checked 16 Oct 2026), mostly reused from the verified guide
// web/src/guides/doc/lpg-subsidy-pahal.ts: pmindia.gov.in Cabinet 8 Aug 2025
// (PMUY targeted subsidy FY 2025-26: ₹300 per 14.2 kg cylinder, up to 9
// refills a year, pro-rata for 5 kg); PAHAL (DBTL) nationwide since 1 Jan
// 2015; toll-free LPG helpline 1800-2333-555 (Business Today 12.03.2026).
// FY 2026-27: several unofficial reports (Anantam IAS, Indian Pay Calculator)
// claim the subsidised refill cap was cut to 4 from June 2026, but no cabinet
// decision / PIB notice was found, so no 2026-27 number is stated.
// mylpg.in is the MoPNG LPG portal named on the old page.

export const lpgSubsidyNotComingHeresHowPahaldbtlActuallyWorksMsbuojv71: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "LPG सब्सिडी नहीं आ रही" },
  ],
  docHi: "LPG सब्सिडी समस्या",
  title: "LPG सब्सिडी नहीं आ रही? PAHAL/DBTL स्कीम कैसे काम करती है, पूरी जानकारी",
  description: "आपकी LPG सब्सिडी शून्य क्यों दिख रही है, DBT ट्रांसफर असल में कैसे काम करता है, और छूटी हुई सब्सिडी ठीक करने के सटीक कदम।",
  published: "2026-08-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "LPG सब्सिडी नहीं आ रही? पहले यह समझें कि आप पात्र हैं या नहीं",
  lead: "PAHAL (DBTL) में हर ग्राहक सिलेंडर पूरी बाज़ार कीमत पर लेता है और सब्सिडी, अगर बनती है, तो अलग से आधार से जुड़े बैंक खाते में आती है। अभी नकद सब्सिडी मुख्य रूप से उज्ज्वला (PMUY) लाभार्थियों को मिलती है: 2025-26 में ₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक। इसलिए सामान्य ग्राहक के खाते में सब्सिडी ₹0 दिखना ज़्यादातर गलती नहीं है। उज्ज्वला लाभार्थी हैं और फिर भी पैसा नहीं आ रहा, तो आधार सीडिंग, e-KYC और रिफिल की सीमा जांचें।",
  facts: [
    ["व्यवस्था", "PAHAL (DBTL), 1 जनवरी 2015 से पूरे देश में"],
    ["उज्ज्वला सब्सिडी (2025-26)", "₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक"],
    ["सामान्य ग्राहक", "आम तौर पर कोई नकद सब्सिडी नहीं"],
    ["हेल्पलाइन", "1800-2333-555 (टोल-फ्री)"],
  ],
  notice: "2026-27 में उज्ज्वला सब्सिडी वाले रिफिल की संख्या घटाने की खबरें आई हैं, पर हमें इसका कैबिनेट फैसला या PIB सूचना नहीं मिली। अपनी सीमा गैस वितरक या कंपनी के ऐप से पूछें।",
  sections: [
    {
      id: "pehle-dekhen",
      title: "पहले तय करें: सब्सिडी बनती भी है या नहीं",
      table: {
        head: ["आप कौन हैं", "क्या उम्मीद करें"],
        rows: [
          ["उज्ज्वला (PMUY) कनेक्शन वाले", "हर रिफिल पर तय सब्सिडी (2025-26 में ₹300), साल की सीमा तक। सीमा पूरी होने के बाद के रिफिल पर सब्सिडी नहीं"],
          ["सामान्य घरेलू ग्राहक", "बाज़ार कीमत; सब्सिडी आम तौर पर ₹0 या नाममात्र। ₹0 दिखना गड़बड़ी नहीं"],
          ["जिसने सब्सिडी छोड़ी (Give It Up)", "सब्सिडी नहीं आएगी"],
        ],
      },
      html: "अपनी श्रेणी पक्की करने के लिए वितरक से पूछें कि कनेक्शन उज्ज्वला का है या सामान्य। पूरी व्यवस्था: <a href=\"/service/lpg-subsidy-pahal.html\">LPG सब्सिडी (PAHAL) गाइड</a>।",
    },
    {
      id: "karan",
      title: "उज्ज्वला लाभार्थी की सब्सिडी न आने के कारण और उपाय",
      table: {
        head: ["कारण", "क्या करें"],
        rows: [
          ["बैंक खाता आधार से नहीं जुड़ा / DBT बंद", "बैंक में आधार सीडिंग कराएं और DBT के लिए सहमति दें। सब्सिडी उसी खाते में जाती है जो NPCI पर आपके आधार से सबसे आखिर में जुड़ा है"],
          ["बैंक खाता बदला या बंद हुआ", "नए खाते में आधार सीडिंग कराएं; नहीं तो पैसा पुराने खाते में जाने की कोशिश करके लौट आता है"],
          ["LPG कनेक्शन में आधार/e-KYC अधूरी", "वितरक के यहां या कंपनी के ऐप से आधार e-KYC (बायोमेट्रिक/फेस) पूरी करें"],
          ["साल की रिफिल सीमा पूरी", "सीमा के बाद के रिफिल पर सब्सिडी नहीं मिलती; यह गलती नहीं"],
          ["एक आधार पर दो कनेक्शन", "डुप्लीकेट कनेक्शन पर सब्सिडी रुक सकती है; एक कनेक्शन सरेंडर करें"],
        ],
      },
    },
    {
      id: "status",
      title: "सब्सिडी आई या नहीं, कैसे देखें",
      steps: [
        "अपनी कंपनी (इंडेन, HP गैस, भारतगैस) का ऐप या वेबसाइट खोलें, या <a href=\"https://www.mylpg.in/\" target=\"_blank\" rel=\"noopener nofollow\">mylpg.in</a> पर अपनी कंपनी चुनें।",
        "रजिस्टर्ड मोबाइल या 17 अंकों की LPG ID से लॉग-इन करें।",
        "रिफिल का इतिहास और हर रिफिल के आगे सब्सिडी (PAHAL/DBTL) की राशि देखें।",
        "बैंक पासबुक या मिनी स्टेटमेंट में वही राशि मिलाएं।",
      ],
    },
    {
      id: "shikayat",
      title: "फिर भी न आए तो शिकायत",
      list: [
        "पहले अपने गैस वितरक को रिफिल का बुकिंग नंबर और बैंक की जानकारी दें।",
        "टोल-फ्री <strong>1800-2333-555</strong> पर शिकायत करें।",
        "कंपनी की वेबसाइट या ऐप पर शिकायत दर्ज करें; हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।",
      ],
      callout: { kind: "warn", html: "\"सब्सिडी चालू कराने\" के नाम पर फोन पर OTP या बैंक की जानकारी मांगने वालों से बचें। e-KYC वितरक के यहां या कंपनी के आधिकारिक ऐप से ही कराएं।" },
    },
  ],
  official: [
    { href: "https://www.mylpg.in/", title: "MyLPG पोर्टल", note: "तीनों कंपनियों की LPG सेवाएं" },
    { href: "https://iocl.com/lpg-services", title: "IndianOil (इंडेन) LPG सेवाएं" },
    { href: "https://pmuy.gov.in/", title: "प्रधानमंत्री उज्ज्वला योजना (PMUY)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "मेरी LPG सब्सिडी ₹0 क्यों दिखती है?", a: "अगर आपका कनेक्शन उज्ज्वला का नहीं है, तो अभी आम तौर पर कोई नकद सब्सिडी नहीं बनती, इसलिए ₹0 सही है। उज्ज्वला लाभार्थी हैं तो आधार सीडिंग, e-KYC और साल की रिफिल सीमा जांचें।" },
    { q: "उज्ज्वला में कितनी सब्सिडी मिलती है?", a: "2025-26 के लिए ₹300 प्रति 14.2 किलो सिलेंडर, साल में 9 रिफिल तक (5 किलो सिलेंडर पर अनुपात में)। 2026-27 की सीमा का सरकारी फैसला हमें नहीं मिला; वितरक से पूछें।" },
    { q: "बैंक खाता बदल लिया तो क्या करें?", a: "नए खाते में आधार सीडिंग कराएं। सब्सिडी उसी खाते में जाती है जो आपके आधार से DBT के लिए सबसे आखिर में जुड़ा है।" },
    { q: "सब्सिडी कितने दिन में आती है?", a: "आम तौर पर सिलेंडर डिलीवरी के कुछ दिन बाद। देर हो तो कंपनी के ऐप में रिफिल के आगे सब्सिडी की स्थिति देखें।" },
  ],
  related: [
    { href: "/service/lpg-subsidy-pahal.html", emoji: "💸", title: "LPG सब्सिडी (PAHAL): पूरी गाइड", text: "कैसे काम करती है, किसे कितनी" },
    { href: "/service/pm-ujjwala-yojana.html", emoji: "🔥", title: "PM उज्ज्वला योजना", text: "मुफ्त कनेक्शन और सब्सिडी" },
    { href: "/service/lpg-cylinder-booking.html", emoji: "🛢️", title: "LPG सिलेंडर बुकिंग", text: "इंडेन, HP, भारतगैस बुकिंग" },
    { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "आधार और बैंक लिंकिंग" },
  ],
  aside: [
    { href: "https://www.mylpg.in/", label: "🛢️ MyLPG पोर्टल" },
    { href: "/service/lpg-subsidy-pahal.html", label: "📘 LPG सब्सिडी गाइड" },
  ],
};
