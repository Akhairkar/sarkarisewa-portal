import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Electricity (Rights of Consumers) Rules, 2020
// and the Amendment Rules, 2024 notified 22 Feb 2024 (SCC Online, Powerline,
// Mondaq summaries; India Environment Portal copy): maximum time for new
// connection and modification in an existing connection cut to 3 days
// (metro), 7 days (other municipal areas), 15 days (rural), 30 days (rural
// hilly areas); "Owner" definition incl. legal heirs; extra check meter within
// 5 days of a reading complaint. Tripura Electricity Supply Code (tsecl.in
// notification) as an example that change of name does not by itself give a
// right to shift the connection. Name-change/shifting forms, fees and
// documents are set by each state's supply code and DISCOM, so no national
// fee is given. The old page's "1800-11-0001 / 1947" helpline and "national
// online application" were not real for this service and were dropped.
export const subDivisionalElectricityMeterShift: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "बिजली मीटर नाम परिवर्तन व शिफ्टिंग" },
  ],
  docHi: "बिजली मीटर नाम परिवर्तन",
  title: "बिजली मीटर नाम परिवर्तन व स्थानांतरण (Electricity Meter Shift)",
  description: "बिजली कनेक्शन में नाम बदलना (मकान खरीदने, विरासत या किराए पर) और मीटर दूसरी जगह शिफ्ट कराना: कहां आवेदन, ज़रूरी कागज़, समय-सीमा के नियम और शिकायत कहां करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "बिजली मीटर/कनेक्शन में नाम बदलना और मीटर शिफ्ट कराना: प्रक्रिया, कागज़ और समय-सीमा",
  lead: "बिजली कनेक्शन में नाम बदलना (Name Change / Transfer) और मीटर दूसरी जगह लगवाना (Meter Shifting) आपकी बिजली वितरण कंपनी (DISCOM) करती है, इसलिए आवेदन उसी के पोर्टल, ऐप या उपखंड (सब-डिवीजन) कार्यालय में होता है। केंद्र के बिजली उपभोक्ता अधिकार नियमों के अनुसार मौजूदा कनेक्शन में बदलाव महानगर में 3 दिन, दूसरे शहरी इलाकों में 7 दिन और गांव में 15 दिन के भीतर होना चाहिए। फीस और फॉर्म राज्य के नियम से तय होते हैं।",
  facts: [
    ["कौन करता है", "आपकी बिजली कंपनी (DISCOM) का उपखंड कार्यालय"],
    ["समय-सीमा (बदलाव)", "महानगर 3 दिन, शहर 7 दिन, गांव 15 दिन"],
    ["पहाड़ी गांव", "30 दिन तक"],
    ["फीस", "राज्य/DISCOM के नियम अनुसार"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब नाम बदलवाना या मीटर शिफ्ट कराना पड़ता है",
      list: [
        "<strong>मकान/दुकान खरीदी:</strong> कनेक्शन पुराने मालिक के नाम है, अपने नाम पर करवाना है।",
        "<strong>मालिक की मृत्यु:</strong> कनेक्शन वारिस के नाम करवाना है।",
        "<strong>मीटर की जगह बदलनी है:</strong> मरम्मत, नया निर्माण या मीटर को बाहर लगवाने के लिए उसी परिसर में मीटर हटवाना।",
        "<strong>किराएदार:</strong> कई राज्यों में किराएदार मालिक की सहमति से अपने नाम पर अलग कनेक्शन ले सकते हैं; नियम राज्य के अनुसार हैं।",
      ],
      callout: { kind: "info", html: "दूसरे मकान में जाने पर पुराना मीटर साथ नहीं जाता। आम तौर पर पुराना कनेक्शन बंद (Permanent Disconnection) कराकर नए पते पर नया कनेक्शन लेना होता है। नाम बदलने से कनेक्शन को दूसरी जगह ले जाने का हक नहीं मिलता।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      intro: "हर DISCOM की सूची अलग होती है। नाम बदलने के लिए ज़्यादातर ये मांगे जाते हैं:",
      list: [
        "<strong>मालिकाना हक का प्रमाण:</strong> रजिस्ट्री/बैनामा, आवंटन पत्र या नगर निकाय/पंचायत का रिकॉर्ड",
        "<strong>पुराने मालिक की सहमति (NOC)</strong> या मृत्यु होने पर <strong>मृत्यु प्रमाण पत्र</strong> और वारिस होने का प्रमाण / बाकी वारिसों का NOC",
        "<strong>पहचान पत्र:</strong> आधार या दूसरा सरकारी पहचान पत्र",
        "<strong>आखिरी बिल जमा होने की रसीद</strong> (बकाया होने पर पहले चुकाना होता है)",
        "तय फॉर्मेट में शपथ पत्र/क्षतिपूर्ति बंधपत्र (indemnity bond), अगर DISCOM मांगे",
      ],
    },
    {
      id: "kaise",
      title: "आवेदन कैसे करें",
      steps: [
        "अपने बिजली बिल पर DISCOM का नाम, उपभोक्ता संख्या (Consumer/Account No.) और उपखंड कार्यालय देखें।",
        "DISCOM की वेबसाइट या ऐप पर \"Name Change / Change of Ownership\" या \"Shifting of Meter/Service\" सेवा खोजें। ऑनलाइन सुविधा न हो तो उपखंड कार्यालय में फॉर्म लें।",
        "फॉर्म भरें, कागज़ लगाएं और DISCOM की तय फीस जमा करें। आवेदन संख्या/पावती ज़रूर लें।",
        "मीटर शिफ्टिंग में कर्मचारी जगह देखता है; खर्च का अनुमान (estimate) दिया जाता है, उसे जमा करने के बाद काम होता है।",
        "नाम बदलने के बाद अगला बिल नए नाम से आता है। जमा राशि (security deposit) नए नाम पर ट्रांसफर या दोबारा जमा करने का नियम DISCOM से पूछें।",
      ],
      callout: { kind: "ok", html: 'ऑनलाइन फॉर्म भरने में दिक्कत हो तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> पर मदद लें।' },
    },
    {
      id: "samay",
      title: "समय-सीमा और आपके अधिकार",
      intro: "बिजली (उपभोक्ता अधिकार) नियम, 2020 में फरवरी 2024 के संशोधन से नया कनेक्शन देने और मौजूदा कनेक्शन में बदलाव की अधिकतम समय-सीमा:",
      table: {
        head: ["इलाका", "अधिकतम समय"],
        rows: [
          ["महानगर", "3 दिन"],
          ["दूसरे नगरीय क्षेत्र", "7 दिन"],
          ["ग्रामीण क्षेत्र", "15 दिन"],
          ["पहाड़ी राज्यों/UT के ग्रामीण क्षेत्र", "30 दिन"],
        ],
      },
      callout: { kind: "info", html: "ये सीमाएं राज्य विद्युत नियामक आयोग अपने नियमों में लागू करता है; राज्य कम समय भी तय कर सकता है। समय पर काम न हो तो नियम के अनुसार मुआवज़े का प्रावधान होता है।" },
    },
    {
      id: "shikayat",
      title: "काम नहीं हुआ तो शिकायत कहां करें",
      steps: [
        "पहले DISCOM के कॉल सेंटर/पोर्टल पर शिकायत दर्ज करें (कई राज्यों में बिजली शिकायत नंबर 1912 है; अपने बिल पर छपा नंबर देखें)।",
        "हल न हो तो DISCOM के <strong>उपभोक्ता शिकायत निवारण फोरम (CGRF)</strong> में लिखित शिकायत दें।",
        "फोरम के फैसले से संतुष्ट न हों तो राज्य के <strong>विद्युत लोकपाल (Electricity Ombudsman)</strong> के पास अपील करें।",
      ],
    },
  ],
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय: बिजली (उपभोक्ता अधिकार) नियम" },
    { href: "https://egazette.gov.in/", title: "भारत का राजपत्र (eGazette)", note: "नियम और संशोधन की अधिसूचना" },
  ],
  faq: [
    { q: "बिजली मीटर नाम परिवर्तन कहां होता है?", a: "आपकी बिजली वितरण कंपनी (DISCOM) के पोर्टल/ऐप पर या उपखंड कार्यालय में। हर राज्य की DISCOM अलग है, इसलिए अपने बिल पर दिया नाम और उपभोक्ता संख्या देखें।" },
    { q: "नाम बदलने में कितना समय लगता है?", a: "केंद्र के नियमों के अनुसार मौजूदा कनेक्शन में बदलाव महानगर में 3 दिन, दूसरे शहरी इलाकों में 7 दिन और गांव में 15 दिन (पहाड़ी गांव 30 दिन) में होना चाहिए, बशर्ते कागज़ पूरे हों।" },
    { q: "नाम बदलने की फीस कितनी है?", a: "फीस राज्य विद्युत नियामक आयोग और DISCOM तय करते हैं, इसलिए हर राज्य में अलग है। आवेदन से पहले DISCOM की वेबसाइट पर शुल्क सूची देखें।" },
    { q: "क्या मकान बदलने पर पुराना मीटर नए घर ले जा सकते हैं?", a: "आम तौर पर नहीं। पुराना कनेक्शन बंद कराकर नए पते पर नया कनेक्शन लेना होता है। एक ही परिसर में मीटर की जगह बदलना (शिफ्टिंग) अलग सेवा है।" },
    { q: "पिता के निधन के बाद कनेक्शन अपने नाम कैसे कराएं?", a: "मृत्यु प्रमाण पत्र, वारिस होने का प्रमाण (या बाकी वारिसों का NOC) और संपत्ति के कागज़ के साथ DISCOM में नाम परिवर्तन का आवेदन दें। बकाया बिल पहले चुकाना होता है।" },
  ],
  related: [
    { href: "/service/electricity-connection-bill.html", emoji: "💡", title: "नया बिजली कनेक्शन और बिल", text: "कनेक्शन, बिल भुगतान" },
    { href: "/service/legal-heir-certificate.html", emoji: "📜", title: "उत्तराधिकार प्रमाण पत्र", text: "वारिस होने का प्रमाण" },
    { href: "/service/death-certificate.html", emoji: "📄", title: "मृत्यु प्रमाण पत्र", text: "नाम बदलने के लिए" },
    { href: "/service/consumer-grievance-redressal.html", emoji: "⚖️", title: "उपभोक्ता शिकायत", text: "शिकायत कहां करें" },
    { href: "/service/pm-surya-ghar-muft-bijli.html", emoji: "☀️", title: "पीएम सूर्य घर", text: "छत पर सोलर" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
    { href: "/service/consumer-grievance-redressal.html", label: "⚖️ शिकायत कैसे करें" },
  ],
};
