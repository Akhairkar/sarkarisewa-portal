import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - jammu.nic.in/service/domicile-certificate/ (District Jammu, opened
//   directly, last updated 10.12.2025): domicile certificates are issued by the
//   Tehsildar concerned where the applicant resides; apply online through
//   jansugam.jk.gov.in after registering with full particulars; select the
//   proper Tehsil when applying; Tehsildar office; phone 0191-2571912.
// - Search extracts: budgam.nic.in/service/domicile-certificate/ (Tehsil can be
//   changed from "My Profile" after login); a Jansugam-issued certificate
//   (Nov 2025) citing the J&K Grant of Domicile Certificate (Procedure) Rules,
//   2020, digitally signed with a verification link.
// - Eligibility: Section 3A inserted in the J&K Civil Services
//   (Decentralization and Recruitment) Act by the J&K Reorganisation
//   (Adaptation of State Laws) Order, 2020, as quoted by The Tribune and
//   Kashmir Life (2020): resided 15 years in the UT, or studied 7 years and
//   appeared in Class 10/12 exams in an institution in the UT, or registered
//   as a migrant by the Relief and Rehabilitation Commissioner (Migrants);
//   children of central government / AIS / PSU and similar officials who have
//   served in J&K for a total of 10 years.
// - The Tribune (2020): 15-day period fixed for issuing a certificate under
//   the domicile rules; a Tehsildar who fails to issue on time may forfeit up
//   to Rs 50,000 from salary.
// Left out (not confirmable on an official page we could open): fee (secondary
// sites disagree), document list, appellate officer, validity period.
export const jammuKashmirDomicileCertificate: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू और कश्मीर" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Jammu & Kashmir Domicile Certificate 2026",
  description: "जम्मू-कश्मीर डोमिसाइल प्रमाण पत्र 2026: 15 साल निवास या 7 साल पढ़ाई की शर्त, जनसुगम पोर्टल पर ऑनलाइन आवेदन, सही तहसील चुनना, तहसीलदार और 15 दिन की समय सीमा।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "जम्मू-कश्मीर डोमिसाइल प्रमाण पत्र 2026: शर्तें, जनसुगम पर आवेदन और समय सीमा",
  lead: "जम्मू-कश्मीर में डोमिसाइल प्रमाण पत्र आपके इलाके के <strong>तहसीलदार</strong> जारी करते हैं और ऑनलाइन आवेदन <strong>जनसुगम पोर्टल (jansugam.jk.gov.in)</strong> पर होता है। 2020 के नियमों के अनुसार यह उन लोगों को मिलता है जो <strong>15 साल</strong> से केंद्र शासित प्रदेश में रह रहे हैं, या जिन्होंने यहां <strong>7 साल पढ़ाई</strong> करके 10वीं/12वीं की परीक्षा दी है, या जो पंजीकृत प्रवासी (migrant) हैं।",
  facts: [
    ["पोर्टल", '<a href="https://jansugam.jk.gov.in/" target="_blank" rel="noopener nofollow">jansugam.jk.gov.in</a>'],
    ["जारी करते हैं", "संबंधित तहसीलदार"],
    ["मुख्य शर्त", "15 साल निवास या 7 साल पढ़ाई + 10वीं/12वीं"],
    ["समय सीमा", "15 दिन (2020 के नियम)"],
  ],
  notice: "<strong>सही तहसील चुनें:</strong> जम्मू ज़िला प्रशासन के अनुसार आवेदन करते समय वही तहसील चुनें जहां आप रहते हैं, क्योंकि प्रमाण पत्र उसी तहसील के तहसीलदार जारी करते हैं। गलत तहसील चुनी हो तो लॉगिन के बाद प्रोफाइल में बदलें।",
  sections: [
    {
      id: "patrata",
      title: "किसे डोमिसाइल मिलता है",
      intro: "2020 में जम्मू-कश्मीर सिविल सेवा कानून में जोड़ी गई धारा 3A (जैसा समाचार रिपोर्टों में उद्धृत है) के अनुसार इनमें से कोई एक शर्त पूरी करने वाला डोमिसाइल माना जाता है:",
      list: [
        "जो <strong>15 साल</strong> से जम्मू-कश्मीर केंद्र शासित प्रदेश में रह रहा हो",
        "जिसने यहां के किसी संस्थान में <strong>7 साल पढ़ाई</strong> की हो और <strong>10वीं या 12वीं की परीक्षा</strong> यहीं से दी हो",
        "जो राहत एवं पुनर्वास आयुक्त (प्रवासी) के पास <strong>प्रवासी (migrant)</strong> के रूप में पंजीकृत हो",
        "केंद्र सरकार, अखिल भारतीय सेवा, केंद्रीय PSU आदि के उन अधिकारियों के <strong>बच्चे</strong> जिन्होंने कुल <strong>10 साल</strong> जम्मू-कश्मीर में सेवा दी हो",
      ],
      callout: { kind: "info", html: "पहले के \"स्थायी निवासी प्रमाण पत्र (PRC)\" वाले लोग भी डोमिसाइल के लिए आवेदन करते हैं। अपनी श्रेणी के हिसाब से कागज़ तैयार करें।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "आधिकारिक कागज़-सूची हमें खुलने वाले पेज पर नहीं मिली; पोर्टल का फॉर्म जो मांगे वही लगाएं। अपनी श्रेणी के हिसाब से आम तौर पर ये काम आते हैं:",
      list: [
        "<strong>फोटो</strong> और <strong>आधार कार्ड</strong>",
        "पुराना <strong>स्थायी निवासी प्रमाण पत्र (PRC)</strong>, अगर है",
        "<strong>15 साल निवास</strong> के सबूत: पुराना राशन कार्ड, वोटर लिस्ट, ज़मीन/मकान के कागज़",
        "<strong>पढ़ाई वाली श्रेणी</strong> में: 7 साल पढ़ाई और 10वीं/12वीं के प्रमाण पत्र",
        "<strong>प्रवासी</strong> हैं तो राहत आयुक्त का पंजीकरण; <strong>अधिकारी के बच्चे</strong> हैं तो माता/पिता की 10 साल सेवा का प्रमाण",
      ],
    },
    {
      id: "online",
      title: "जनसुगम पोर्टल पर आवेदन",
      steps: [
        '<a href="https://jansugam.jk.gov.in/" target="_blank" rel="noopener nofollow">jansugam.jk.gov.in</a> पर पूरी जानकारी के साथ रजिस्टर करें, फिर लॉगिन करें।',
        "सेवाओं में <strong>Application for Issuance of Domicile Certificate</strong> खोजें।",
        "फॉर्म में <strong>सही तहसील</strong> चुनें, अपनी श्रेणी और जानकारी भरें, कागज़ अपलोड करें।",
        "जमा करने पर मिला <strong>संदर्भ (reference) नंबर</strong> नोट करें; इसी से स्टेटस देखें।",
        "मंज़ूरी के बाद डिजिटल हस्ताक्षर वाला प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो अपने तहसीलदार कार्यालय या नज़दीकी CSC से मदद लें: <a href=\"/service/csc-locator/jammu-kashmir.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "time",
      title: "समय सीमा",
      intro: "द ट्रिब्यून की 2020 की रिपोर्ट के अनुसार डोमिसाइल नियमों में प्रमाण पत्र जारी करने के लिए <strong>15 दिन</strong> तय हैं, और समय पर जारी न करने वाले तहसीलदार के वेतन से <strong>₹50,000 तक</strong> कटौती का प्रावधान है। देर हो तो रेफरेंस नंबर के साथ तहसीलदार कार्यालय से संपर्क करें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत तहसील चुनी", "प्रोफाइल में तहसील ठीक करें या सही तहसील में आवेदन करें"],
          ["15 साल निवास का सबूत नहीं", "पुराना राशन कार्ड, वोटर लिस्ट, ज़मीन के कागज़ या पुराना PRC लगाएं"],
          ["पढ़ाई के 7 साल पूरे नहीं दिखे", "हर साल के स्कूल रिकॉर्ड और 10वीं/12वीं के प्रमाण पत्र लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार और दूसरे कागज़ों में एक जैसी जानकारी कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://jansugam.jk.gov.in/", title: "जनसुगम पोर्टल (जम्मू-कश्मीर ऑनलाइन सेवाएं)" },
    { href: "https://jammu.nic.in/service/domicile-certificate/", title: "Domicile Certificate (ज़िला जम्मू)" },
  ],
  faq: [
    { q: "जम्मू-कश्मीर डोमिसाइल के लिए कितने साल का निवास चाहिए?", a: "2020 के नियमों के अनुसार 15 साल का निवास, या 7 साल पढ़ाई के साथ 10वीं/12वीं की परीक्षा यहीं से देना। पंजीकृत प्रवासी और 10 साल सेवा दे चुके केंद्रीय अधिकारियों के बच्चे भी पात्र हैं।" },
    { q: "डोमिसाइल प्रमाण पत्र कौन जारी करता है?", a: "उस तहसील के तहसीलदार जहां आवेदक रहता है।" },
    { q: "ऑनलाइन आवेदन कहां करें?", a: "jansugam.jk.gov.in पर रजिस्टर करके \"Application for Issuance of Domicile Certificate\" चुनें और सही तहसील चुनें।" },
    { q: "कितने दिन में मिलता है?", a: "2020 के डोमिसाइल नियमों में 15 दिन तय हैं (द ट्रिब्यून की रिपोर्ट के अनुसार)।" },
    { q: "फीस कितनी है?", a: "हमें शुल्क किसी आधिकारिक पेज पर नहीं मिला और निजी वेबसाइटें अलग-अलग बातें लिखती हैं। आवेदन के समय पोर्टल पर देखें।" },
  ],
  related: [
    { href: "/states/jammu-kashmir-caste-certificate.html", emoji: "📜", title: "जम्मू-कश्मीर जाति प्रमाण पत्र", text: "SC/ST/OBC, तहसीलदार" },
    { href: "/states/jammu-kashmir-income-certificate.html", emoji: "💰", title: "जम्मू-कश्मीर आय प्रमाण पत्र", text: "e-Unnat / जनसुगम पर" },
    { href: "/states/jammu-kashmir-employment-exchange.html", emoji: "💼", title: "जम्मू-कश्मीर रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://jansugam.jk.gov.in/", label: "📝 जनसुगम पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
