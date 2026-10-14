import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - ladakh.gov.in "Online Citizen Services" listing (opened directly): no
//   income certificate service or online link (only national scholarship,
//   driving licence, birth/death, ST certificate, rent collection; domicile
//   has its own portal domicile.ladakh.gov.in).
// - UNI news report (September, search extract): the Lieutenant Governor of
//   Ladakh empowered Naib-Tehsildars holding independent charge of a tehsil
//   to issue Reserved Category and Income Certificates within their
//   jurisdictions, to help residents of remote and far-flung areas. We could
//   not open the official order.
// - Reach Ladakh (2022, search extract): EWS certificate competent authority
//   includes District Magistrate, ADM, SDM and Tehsildar; EWS forms on the UT
//   website.
// Left out (not confirmable on an official page we could open): online
// portal, fee, time limit, document list, validity, appeal officer.
export const ladakhIncomeCertificate: DocGuide = {
  state: { slug: "ladakh", hi: "लद्दाख" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Ladakh Income Certificate 2026: How to Apply",
  description: "लद्दाख आय प्रमाण पत्र 2026: तहसील कार्यालय से आवेदन, स्वतंत्र प्रभार वाले नायब तहसीलदार, ज़रूरी कागज़, EWS के लिए अलग प्रमाण पत्र और देरी हो तो क्या करें।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लद्दाख आय प्रमाण पत्र 2026: तहसील से आवेदन, कागज़ और EWS",
  lead: "लद्दाख में आय प्रमाण पत्र राजस्व विभाग के तहसील कार्यालय से बनता है। एक समाचार रिपोर्ट के अनुसार उप-राज्यपाल ने तहसील का <strong>स्वतंत्र प्रभार</strong> संभाल रहे <strong>नायब तहसीलदारों</strong> को भी आय और आरक्षित श्रेणी प्रमाण पत्र जारी करने का अधिकार दिया है, ताकि दूर के इलाकों के लोगों को ज़िला मुख्यालय न जाना पड़े। UT प्रशासन की वेबसाइट पर इसका कोई ऑनलाइन आवेदन लिंक नहीं मिला।",
  facts: [
    ["जारी करते हैं", "तहसीलदार / स्वतंत्र प्रभार वाले नायब तहसीलदार"],
    ["कहां आवेदन", "अपनी तहसील का कार्यालय"],
    ["ऑनलाइन", "UT वेबसाइट पर ऑनलाइन लिंक नहीं मिला"],
    ["फीस / समय", "तहसील में रसीद पर पूछें"],
  ],
  notice: "<strong>ऑनलाइन का दावा देखकर पैसे न दें:</strong> UT लद्दाख की वेबसाइट की ऑनलाइन सेवाओं की सूची में आय प्रमाण पत्र नहीं है। कोई एजेंट या साइट \"ऑनलाइन आय प्रमाण पत्र\" का दावा करे तो पहले तहसील से पुष्टि करें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में यह मांगा जाता है।",
      callout: { kind: "info", html: "<strong>EWS आरक्षण</strong> के लिए आम आय प्रमाण पत्र नहीं, अलग EWS (आय और संपत्ति) प्रमाण पत्र चाहिए। लद्दाख के EWS नियमों में इसे जारी करने वालों में ज़िला मजिस्ट्रेट, अपर ज़िला मजिस्ट्रेट, SDM और तहसीलदार शामिल हैं। OBC/ST के लिए <a href=\"/states/ladakh-caste-certificate.html\">लद्दाख जाति प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "लद्दाख की आधिकारिक दस्तावेज़-सूची हमें ऑनलाइन नहीं मिली। आम तौर पर ये कागज़ मांगे जाते हैं, इसलिए साथ ले जाएं और तहसील में पूरी सूची पूछ लें:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र, फोटो।",
        "<strong>निवास का सबूत</strong> (रेज़िडेंट/डोमिसाइल प्रमाण पत्र, राशन कार्ड आदि)।",
        "<strong>आय का सबूत:</strong> वेतन पर्ची, पेंशन, ITR, या खेती/पशुपालन/मज़दूरी से आय का ब्यौरा।",
        "<strong>स्व-घोषणा / शपथ-पत्र</strong>, जिसमें परिवार की सभी स्रोतों से सालाना आय लिखी हो।",
      ],
      callout: { kind: "warn", html: "आय सही-सही लिखें; राजस्व कर्मचारी इसकी जांच करते हैं। नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "अपनी <strong>तहसील के कार्यालय</strong> (तहसीलदार, या जहां नायब तहसीलदार के पास स्वतंत्र प्रभार है वहां उनके कार्यालय) में जाएं।",
        "आवेदन फॉर्म भरें, कागज़ों की कॉपी लगाएं और बताएं कि प्रमाण पत्र किस काम के लिए है।",
        "आवेदन की <strong>रसीद / डायरी नंबर</strong> लें और पूछें कि प्रमाण पत्र कब मिलेगा।",
        "पटवारी/राजस्व कर्मचारियों की जांच के बाद प्रमाण पत्र तहसील से लें।",
      ],
      callout: { kind: "ok", html: "नज़दीकी CSC से फॉर्म भरने या कागज़ स्कैन करवाने में मदद मिल सकती है: <a href=\"/service/csc-locator/ladakh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क, वैधता और शिकायत",
      intro: "लद्दाख में आय प्रमाण पत्र की तय समय सीमा, शुल्क, वैधता और अपील अधिकारी हम किसी खुलने वाले सरकारी पेज पर पक्के नहीं कर पाए, इसलिए यहां कोई संख्या नहीं लिख रहे। आय हर साल बदलती है, इसलिए जहां जमा करना है वहां पूछ लें कि कितना नया प्रमाण पत्र चाहिए। देर हो तो लिखित में तहसीलदार से, फिर ज़िले के डिप्टी कमिश्नर कार्यालय में शिकायत करें और पावती रखें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई सबूत नहीं", "वेतन/पेंशन पर्ची, ITR या आय का शपथ-पत्र लगाएं"],
          ["गलत तहसील में आवेदन", "जहां रहते हैं उसी तहसील में दें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र ले लिया", "EWS का अलग प्रमाण पत्र बनवाएं"],
          ["रसीद नहीं ली", "आवेदन के समय रसीद/डायरी नंबर ज़रूर लें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://ladakh.gov.in/services/", title: "UT लद्दाख: Online Citizen Services सूची" },
    { href: "https://ladakh.gov.in/", title: "UT लद्दाख प्रशासन" },
  ],
  faq: [
    { q: "लद्दाख में आय प्रमाण पत्र कौन जारी करता है?", a: "राजस्व विभाग का तहसील कार्यालय। एक समाचार रिपोर्ट के अनुसार स्वतंत्र प्रभार वाले नायब तहसीलदार भी अब अपनी तहसील में आय प्रमाण पत्र जारी कर सकते हैं।" },
    { q: "क्या लद्दाख में आय प्रमाण पत्र ऑनलाइन बनता है?", a: "UT प्रशासन की वेबसाइट की ऑनलाइन सेवाओं की सूची में आय प्रमाण पत्र नहीं है। आवेदन तहसील कार्यालय में करें।" },
    { q: "लद्दाख आय प्रमाण पत्र की फीस और समय सीमा क्या है?", a: "हम इन्हें किसी खुलने वाले सरकारी पेज पर पक्का नहीं कर पाए। रसीद लेते समय तहसील में शुल्क और तारीख पूछें।" },
    { q: "EWS के लिए कौन सा प्रमाण पत्र चाहिए?", a: "अलग EWS (आय और संपत्ति) प्रमाण पत्र। इसे जारी करने वालों में ज़िला मजिस्ट्रेट, अपर ज़िला मजिस्ट्रेट, SDM और तहसीलदार शामिल हैं।" },
  ],
  related: [
    { href: "/states/ladakh-caste-certificate.html", emoji: "📜", title: "लद्दाख जाति / ST प्रमाण पत्र", text: "तहसीलदार से" },
    { href: "/states/ladakh-domicile-certificate.html", emoji: "🏠", title: "लद्दाख डोमिसाइल प्रमाण पत्र", text: "रेज़िडेंट सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://ladakh.gov.in/", label: "🏛️ UT लद्दाख प्रशासन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
