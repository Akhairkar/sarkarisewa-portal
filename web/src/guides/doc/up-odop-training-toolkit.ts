import type { DocGuide } from "./types";

// Sources (checked 8 Nov 2026): odopup.in/odop-schemes/training-and-toolkit-scheme-
// uttar-pradesh and the odopup.in FAQ page. Facts: 10 days free training;
// honorarium ₹200 per day; relevant advanced toolkit free of cost (its value is NOT
// stated); minimum age 18; native of Uttar Pradesh; no educational qualification;
// not to have received a toolkit under another scheme in the last 2 years; one
// benefit per family (husband and wife); unskilled artisans get a 10-day course and
// RPL certification, skilled artisans get RPL and Sector Skill Council
// certification; "Apply Now" links to registration on msme.up.gov.in; Government
// Order dated 2020; contact ODOP Cell, Niryat Bhawan, Qaiserbagh, Lucknow; toll-free
// 1800-1800-888. The implementing agency, trade list and dates are NOT stated. The
// FAQ mentions an Amazon/GeM vendor sign-up whose link to this scheme is unclear, so
// it is not described here.
export const upOdopTrainingToolkit: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "उत्तर प्रदेश", href: "/states/uttar-pradesh.html" },
    { label: "ODOP प्रशिक्षण और टूलकिट योजना" },
  ],
  docHi: "यूपी ODOP प्रशिक्षण और टूलकिट योजना",
  title: "यूपी ODOP प्रशिक्षण और टूलकिट योजना 2026: मुफ़्त प्रशिक्षण",
  description: "उत्तर प्रदेश ODOP प्रशिक्षण एवं टूलकिट योजना: 10 दिन का मुफ़्त प्रशिक्षण, ₹200 प्रतिदिन मानदेय, मुफ़्त आधुनिक टूलकिट, पात्रता और आवेदन का तरीका।",
  published: "2026-11-08",
  modified: "2026-11-08",
  verified: "8 नवंबर 2026",
  h1: "यूपी ODOP प्रशिक्षण और टूलकिट योजना 2026: मुफ़्त प्रशिक्षण, ₹200 रोज़ मानदेय और टूलकिट",
  lead: "उत्तर प्रदेश की ODOP (एक जनपद एक उत्पाद) प्रशिक्षण एवं टूलकिट योजना में आपके ज़िले के ODOP उत्पाद से जुड़े कारीगरों को 10 दिन का मुफ़्त प्रशिक्षण, प्रशिक्षण के दौरान ₹200 प्रतिदिन का मानदेय और एक आधुनिक टूलकिट मुफ़्त मिलता है। यह जानकारी ODOP के आधिकारिक पोर्टल odopup.in से ली गई है। जो बात वहां नहीं लिखी है, उसे हमने अलग से बताया है।",
  facts: [
    ["प्रशिक्षण", "10 दिन, मुफ़्त"],
    ["मानदेय", "₹200 प्रतिदिन (प्रशिक्षण के दौरान)"],
    ["टूलकिट", "प्रशिक्षण के बाद मुफ़्त आधुनिक टूलकिट"],
    ["पात्रता", "उत्तर प्रदेश के निवासी, कम से कम 18 साल"],
  ],
  notice: "<strong>ध्यान रखें:</strong> टूलकिट की कीमत और किन-किन काम (ट्रेड) के लिए मिलता है, यह आधिकारिक पेज पर नहीं लिखा है। सरकारी योजना के नाम पर पैसे मांगने वालों से बचें; यह प्रशिक्षण और टूलकिट मुफ़्त है।",
  sections: [
    {
      id: "kya-milta",
      title: "योजना में क्या मिलता है",
      list: [
        "<strong>10 दिन का मुफ़्त प्रशिक्षण।</strong> जिन कारीगरों के पास हुनर नहीं है, उन्हें 10 दिन का कोर्स कराया जाता है और RPL (पहले से सीखे हुनर की मान्यता) के तहत प्रमाणित किया जाता है।",
        "<strong>पहले से हुनरमंद कारीगर:</strong> उन्हें RPL के ज़रिए संबंधित सेक्टर स्किल काउंसिल से प्रमाणन मिलता है।",
        "<strong>₹200 प्रतिदिन मानदेय</strong> प्रशिक्षण की अवधि में सभी प्रशिक्षुओं को।",
        "<strong>आधुनिक टूलकिट</strong> प्रशिक्षित कारीगरों को मुफ़्त; इसकी कीमत आधिकारिक पेज पर नहीं दी गई है।",
      ],
    },
    {
      id: "patrata",
      title: "पात्रता",
      list: [
        "आवेदक <strong>उत्तर प्रदेश का मूल निवासी</strong> हो।",
        "उम्र कम से कम <strong>18 साल</strong> हो।",
        "कोई शैक्षिक योग्यता ज़रूरी नहीं है।",
        "पिछले <strong>2 साल</strong> में किसी और योजना से टूलकिट का लाभ न लिया हो।",
        "लाभ <strong>एक परिवार में एक ही व्यक्ति</strong> को मिलता है (पति-पत्नी में से एक)।",
        "आवेदक आपके ज़िले के ODOP उत्पाद से जुड़ा कारीगर या व्यक्ति हो।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "odopup.in पर योजना के पेज पर <strong>\"Apply Now\"</strong> दबाएं; यह आपको msme.up.gov.in के रजिस्ट्रेशन पेज पर ले जाता है।",
        "रजिस्ट्रेशन पूरा करके आवेदन जमा करें।",
        "सवाल हो तो टोल-फ्री <strong>1800-1800-888</strong> पर या ODOP सेल (निर्यात भवन, कैसरबाग, लखनऊ) से पूछें।",
      ],
      callout: { kind: "info", html: "ज़रूरी दस्तावेज़ों की सूची, चयन का तरीका और आवेदन की तारीख़ें आधिकारिक पेज पर नहीं दी गई हैं। इन्हें अपने ज़िला उद्योग केंद्र से पूछ लें। योजना का शासनादेश 2020 का है।" },
    },
    {
      id: "aage-kya",
      title: "प्रशिक्षण के बाद क्या करें",
      intro: "प्रशिक्षण और टूलकिट के बाद अपना काम शुरू करने या बढ़ाने के लिए आगे की योजनाएं देखें:",
      list: [
        "<a href=\"/states/uttar-pradesh-myuva-yojana.html\">MYUVA योजना</a>: ODOP प्रशिक्षण पूरा करने वाले 21-40 साल के युवाओं के लिए ₹5 लाख तक का ब्याज मुक्त लोन।",
        "<a href=\"/states/uttar-pradesh-mudra-loan.html\">ODOP मार्जिन मनी</a>: अपने ज़िले के उत्पाद की इकाई के लिए बैंक लोन के साथ सरकारी मार्जिन मनी।",
        "<a href=\"/service/pm-mudra-yojana.html\">मुद्रा लोन</a>: छोटे कारोबार के लिए बैंक से ₹20 लाख तक।",
      ],
    },
  ],
  official: [
    { href: "https://odopup.in/odop-schemes/training-and-toolkit-scheme-uttar-pradesh", title: "प्रशिक्षण और टूलकिट योजना (odopup.in)" },
    { href: "https://odopup.in/en/page/frequently-asked-questions-(faqs)", title: "ODOP FAQ और टोल-फ्री नंबर (odopup.in)" },
    { href: "https://msme.up.gov.in", title: "UP MSME विभाग पोर्टल (रजिस्ट्रेशन)" },
  ],
  faq: [
    { q: "ODOP प्रशिक्षण योजना में कितने दिन का प्रशिक्षण होता है?", a: "10 दिन का मुफ़्त प्रशिक्षण, जिसके बाद RPL के तहत प्रमाणन होता है।" },
    { q: "प्रशिक्षण के दौरान कितना पैसा मिलता है?", a: "₹200 प्रतिदिन का मानदेय सभी प्रशिक्षुओं को।" },
    { q: "टूलकिट की कीमत कितनी है?", a: "आधिकारिक पेज पर टूलकिट की कीमत नहीं दी गई है। लिखा है कि प्रशिक्षित कारीगरों को मुफ़्त आधुनिक टूलकिट मिलता है।" },
    { q: "क्या पढ़ाई की कोई शर्त है?", a: "नहीं। कोई शैक्षिक योग्यता ज़रूरी नहीं है, बस उम्र कम से कम 18 साल और उत्तर प्रदेश का मूल निवासी होना चाहिए।" },
    { q: "क्या पति और पत्नी दोनों को टूलकिट मिल सकता है?", a: "नहीं। लाभ एक परिवार में पति-पत्नी में से एक को ही मिलता है।" },
    { q: "पहले टूलकिट मिल चुका हो तो क्या दोबारा मिलेगा?", a: "जिन्होंने पिछले 2 साल में किसी और योजना से टूलकिट का लाभ लिया है, वे पात्र नहीं हैं।" },
  ],
  related: [
    { href: "/states/uttar-pradesh-myuva-yojana.html", emoji: "💡", title: "MYUVA योजना", text: "₹5 लाख तक ब्याज मुक्त लोन" },
    { href: "/states/uttar-pradesh-mudra-loan.html", emoji: "💼", title: "यूपी मुद्रा लोन और ODOP", text: "75 ज़िलों के उत्पाद" },
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🔨", title: "पीएम विश्वकर्मा योजना", text: "कारीगरों के लिए केंद्र की योजना" },
    { href: "/states/uttar-pradesh.html", emoji: "🗺️", title: "उत्तर प्रदेश की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://odopup.in/odop-schemes/training-and-toolkit-scheme-uttar-pradesh", label: "🛠️ आधिकारिक योजना पेज" },
    { href: "https://msme.up.gov.in", label: "📝 UP MSME पोर्टल" },
  ],
};
