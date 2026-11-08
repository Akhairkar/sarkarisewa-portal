import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 8 Nov 2026): odopup.in/en/page/myuva (official ODOP page of
// "Mukhyamantri Yuva Udyami Vikas Abhiyan (MYUVA)": loans up to ₹5 lakh, 100%
// interest-free and collateral-free, CGTMSE cover for four years, 10% margin money
// subsidy, artisan contribution General 15% / OBC 12.5% / SC-ST-Divyang-
// aspirational districts 10%, project up to ₹10 lakh but benefit on first ₹5 lakh
// only, age 21-40, must have trained under ODOP Training Scheme / Vishwakarma Shram
// Samman Yojana / SC-ST-OBC training schemes / recognised skill certification,
// online via MSME portal, processed by District Industries and Entrepreneurship
// Promotion Centres, banks sanction and pay margin money). Education, helpline,
// phases and dates are NOT stated there. Toll-free 1800-1800-888 is given on the
// ODOP FAQ page for ODOP queries. Who bears the interest is not stated, so the page
// does not say. News reports quote other amounts and phases; none are used.
export const upMyuvaYojana: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "उत्तर प्रदेश", href: "/states/uttar-pradesh.html" },
    { label: "मुख्यमंत्री युवा उद्यमी विकास अभियान (MYUVA)" },
  ],
  docHi: "यूपी मुख्यमंत्री युवा उद्यमी विकास अभियान",
  promo: gstinPromo,
  title: "यूपी MYUVA (CM-YUVA) योजना 2026: ₹5 लाख ब्याज मुक्त लोन",
  description: "उत्तर प्रदेश मुख्यमंत्री युवा उद्यमी विकास अभियान (MYUVA/CM-YUVA): ₹5 लाख तक बिना जमानत ब्याज मुक्त लोन, 10% मार्जिन मनी, उम्र 21-40, ज़रूरी प्रशिक्षण और आवेदन का तरीका।",
  published: "2026-11-08",
  modified: "2026-11-08",
  verified: "8 नवंबर 2026",
  h1: "यूपी मुख्यमंत्री युवा उद्यमी विकास अभियान (MYUVA / CM-YUVA) 2026: ₹5 लाख लोन, पात्रता और आवेदन",
  lead: "मुख्यमंत्री युवा उद्यमी विकास अभियान (MYUVA) उत्तर प्रदेश सरकार की योजना है, जो ODOP (एक जनपद एक उत्पाद) के कारीगरों और प्रशिक्षित युवाओं को अपना काम शुरू करने या बढ़ाने के लिए ₹5 लाख तक का बिना जमानत, ब्याज मुक्त लोन और 10% मार्जिन मनी देती है। इस गाइड की सारी जानकारी ODOP के आधिकारिक पोर्टल odopup.in के MYUVA पेज से ली गई है। जो बात वहां नहीं मिली, उसे हमने अलग से साफ़ लिखा है।",
  facts: [
    ["लोन", "₹5 लाख तक, 100% ब्याज मुक्त और बिना जमानत"],
    ["मार्जिन मनी", "प्रोजेक्ट लागत पर 10%"],
    ["उम्र", "21 से 40 साल"],
    ["ज़रूरी शर्त", "ODOP या मान्य कौशल प्रशिक्षण पूरा होना"],
  ],
  notice: "<strong>ध्यान रखें:</strong> खबरों में इस योजना की राशि और चरण अलग-अलग बताए गए हैं। यहां सिर्फ़ odopup.in के आधिकारिक MYUVA पेज की बात दी गई है। आवेदन से पहले अपने ज़िला उद्योग केंद्र (DIC) से ताज़ा नियम पक्के कर लें।",
  sections: [
    {
      id: "kya-hai",
      title: "MYUVA योजना में क्या मिलता है",
      table: {
        head: ["बात", "आधिकारिक जानकारी"],
        rows: [
          ["लोन की राशि", "₹5 लाख तक, 100% ब्याज मुक्त और बिना जमानत (collateral-free)"],
          ["गारंटी कवर", "CGTMSE का कवर चार साल तक"],
          ["मार्जिन मनी", "प्रोजेक्ट लागत पर 10% सब्सिडी"],
          ["प्रोजेक्ट लागत", "₹10 लाख तक का प्रोजेक्ट पात्र है, पर लाभ सिर्फ़ पहले ₹5 लाख पर मिलता है"],
          ["कौन चलाता है", "आवेदन ज़िला उद्योग एवं उद्यम प्रोत्साहन केंद्र से आगे बढ़ते हैं; बैंक लोन मंज़ूर करता है और मार्जिन मनी देता है"],
        ],
      },
      callout: { kind: "info", html: "ब्याज कौन भरता है, यह आधिकारिक पेज पर नहीं लिखा है, इसलिए हम इस बारे में कुछ नहीं कह रहे। बैंक से साफ़ पूछ लें कि लोन के कागज़ात में ब्याज की क्या स्थिति है।" },
    },
    {
      id: "patrata",
      title: "पात्रता: किसे मिल सकता है",
      list: [
        "आवेदक की उम्र <strong>21 से 40 साल</strong> के बीच हो।",
        "आवेदक ने इनमें से किसी में <strong>प्रशिक्षण</strong> लिया हो: ODOP प्रशिक्षण योजना, विश्वकर्मा श्रम सम्मान योजना, SC/ST/OBC प्रशिक्षण योजनाएं, या कोई मान्यता प्राप्त कौशल प्रमाणन कार्यक्रम।",
        "आधिकारिक पेज के अनुसार योजना ODOP पहल के तहत कारीगरों और उद्यमियों के लिए है।",
        "शैक्षिक योग्यता के बारे में आधिकारिक पेज पर कुछ नहीं लिखा है।",
      ],
      callout: { kind: "info", html: "प्रशिक्षण अभी नहीं लिया है तो पहले <a href=\"/states/uttar-pradesh-odop-training-toolkit-yojana.html\">ODOP प्रशिक्षण और टूलकिट योजना</a> देखें, जिसमें 10 दिन का मुफ़्त प्रशिक्षण मिलता है। अपने ज़िले का ODOP उत्पाद <a href=\"/states/uttar-pradesh-mudra-loan.html\">इस सूची</a> में देखें।" },
    },
    {
      id: "hissa",
      title: "आपको कितना अपना पैसा लगाना होगा",
      intro: "योजना में कारीगर को प्रोजेक्ट लागत का एक हिस्सा खुद लगाना होता है। आधिकारिक पेज के अनुसार यह श्रेणी के हिसाब से अलग है:",
      table: {
        head: ["श्रेणी", "अपना हिस्सा"],
        rows: [
          ["सामान्य", "15%"],
          ["OBC", "12.5%"],
          ["SC / ST / दिव्यांग / आकांक्षी ज़िले", "10%"],
        ],
      },
      callout: { kind: "warn", html: "यह हिस्सा पूरे प्रोजेक्ट की लागत पर लगेगा या सिर्फ़ पहले ₹5 लाख पर, यह आधिकारिक पेज पर साफ़ नहीं है। इसे ज़िला उद्योग केंद्र या बैंक से लिखित में पूछ लें।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "ऑनलाइन आवेदन <strong>MSME पोर्टल</strong> पर किया जाता है (आधिकारिक MYUVA पेज पर पोर्टल का पता नहीं दिया गया; UP MSME विभाग का पोर्टल नीचे दिया है)।",
        "आवेदन आपके ज़िले के उद्योग एवं उद्यम प्रोत्साहन केंद्र (DIC) के ज़रिए आगे बढ़ता है।",
        "बैंक आपका लोन मंज़ूर करता है और मार्जिन मनी जारी करता है।",
      ],
      callout: { kind: "info", html: "ज़रूरी दस्तावेज़ों की सूची और योजना की तारीख़ें आधिकारिक पेज पर नहीं दी गई हैं। ODOP से जुड़े सवालों के लिए टोल-फ्री <strong>1800-1800-888</strong> पर या अपने DIC में पूछें।" },
    },
    {
      id: "mudra-se-farak",
      title: "MYUVA और मुद्रा लोन में फ़र्क",
      table: {
        head: ["", "MYUVA", "मुद्रा लोन"],
        rows: [
          ["किसकी योजना", "उत्तर प्रदेश सरकार", "केंद्र सरकार"],
          ["राशि", "₹5 लाख तक लाभ", "₹20 लाख तक (श्रेणी के हिसाब से)"],
          ["शर्त", "21-40 साल और प्रशिक्षण ज़रूरी", "गैर-कृषि छोटा कारोबार (विवरण मुद्रा गाइड में)"],
          ["आवेदन", "MSME पोर्टल और DIC", "बैंक शाखा या udyamimitra.in"],
        ],
      },
      callout: { kind: "info", html: "मुद्रा की पूरी जानकारी <a href=\"/service/pm-mudra-yojana.html\">पीएम मुद्रा योजना</a> में और यूपी के लिए <a href=\"/states/uttar-pradesh-mudra-loan.html\">यूपी मुद्रा लोन और ODOP मार्जिन मनी</a> में है। दोनों साथ मिल सकते हैं या नहीं, यह हमें आधिकारिक रूप से नहीं मिला, इसलिए लिखित में पूछकर आगे बढ़ें।" },
    },
  ],
  official: [
    { href: "https://odopup.in/en/page/myuva", title: "MYUVA योजना (odopup.in, आधिकारिक)" },
    { href: "https://msme.up.gov.in", title: "UP MSME विभाग पोर्टल" },
    { href: "https://odopup.in/en/page/frequently-asked-questions-(faqs)", title: "ODOP FAQ और टोल-फ्री नंबर (odopup.in)" },
  ],
  faq: [
    { q: "MYUVA योजना में कितना लोन मिलता है?", a: "आधिकारिक पेज के अनुसार ₹5 लाख तक का 100% ब्याज मुक्त और बिना जमानत का लोन। ₹10 लाख तक के प्रोजेक्ट पात्र हैं, पर लाभ पहले ₹5 लाख तक ही मिलता है।" },
    { q: "MYUVA और CM-YUVA में क्या फ़र्क है?", a: "ODOP के आधिकारिक पेज पर योजना का नाम सिर्फ़ MYUVA (मुख्यमंत्री युवा उद्यमी विकास अभियान) लिखा है। CM-YUVA नाम खबरों और आम बोलचाल में चलता है।" },
    { q: "योजना के लिए उम्र कितनी होनी चाहिए?", a: "21 से 40 साल।" },
    { q: "क्या पहले प्रशिक्षण लेना ज़रूरी है?", a: "हां। आवेदक ने ODOP प्रशिक्षण योजना, विश्वकर्मा श्रम सम्मान योजना, SC/ST/OBC प्रशिक्षण योजनाओं या किसी मान्यता प्राप्त कौशल प्रमाणन कार्यक्रम में प्रशिक्षण लिया होना चाहिए।" },
    { q: "आवेदन कहां करें?", a: "ऑनलाइन MSME पोर्टल पर। आवेदन ज़िला उद्योग केंद्र के ज़रिए आगे जाता है और बैंक लोन मंज़ूर करता है।" },
    { q: "मार्जिन मनी कितनी मिलती है?", a: "प्रोजेक्ट लागत पर 10%।" },
  ],
  related: [
    { href: "/states/uttar-pradesh-odop-training-toolkit-yojana.html", emoji: "🛠️", title: "ODOP प्रशिक्षण और टूलकिट", text: "10 दिन का मुफ़्त प्रशिक्षण" },
    { href: "/states/uttar-pradesh-mudra-loan.html", emoji: "💼", title: "यूपी मुद्रा लोन और ODOP", text: "75 ज़िलों के उत्पाद" },
    { href: "/service/pm-mudra-yojana.html", emoji: "🏦", title: "पीएम मुद्रा योजना", text: "₹20 लाख तक का लोन" },
    { href: "/service/udyam-registration.html", emoji: "📝", title: "उद्यम रजिस्ट्रेशन", text: "कारोबार का पंजीकरण" },
    { href: "/states/uttar-pradesh.html", emoji: "🗺️", title: "उत्तर प्रदेश की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://odopup.in/en/page/myuva", label: "🏭 MYUVA आधिकारिक पेज" },
    { href: "https://msme.up.gov.in", label: "📝 UP MSME पोर्टल" },
  ],
};
