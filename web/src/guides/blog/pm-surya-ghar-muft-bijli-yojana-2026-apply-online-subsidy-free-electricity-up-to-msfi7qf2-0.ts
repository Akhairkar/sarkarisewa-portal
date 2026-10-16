import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps closely
// with /service/pm-surya-ghar-muft-bijli.html and the /solar/ cluster, so this
// post takes the explainer angle ("is the electricity really free, how much
// subsidy, what you pay") and links there for the full process.
// Sources (checked 16 Oct 2026), reused from web/src/guides/doc/pm-surya-ghar-muft-bijli.ts
// and web/src/guides/solar/pages.ts: myScheme "pmsgmb" (MNRE; launched 15 Feb
// 2024; 1 crore households target; subsidy ₹30,000/kW up to 2 kW + ₹18,000
// for the 3rd kW, max ₹78,000; consumption bands 0-150 / 150-300 / 300+ units;
// eligibility; DISCOM feasibility, empanelled vendor, net meter, commissioning,
// DBT); special-category states +10% (max ₹85,800); collateral-free loans via
// jansamarth.in for up to 3 kW. Web search 16 Oct 2026 found no official change
// to the central subsidy in 2026 (only state top-ups and unconfirmed "2.0" talk).
// Old installation/outlay numbers and "₹15,000 saving" left out (not verified
// for today). Old title was cut off ("2026: ऑनलाइन"); completed from its h1.
// Old description promised "300 unit free" outright; rewritten.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const PORTAL = ext("https://pmsuryaghar.gov.in/", "pmsuryaghar.gov.in");

export const pmSuryaGharMuftBijliYojana2026ApplyOnlineSubsidyFreeElectricityUpToMsfi7qf20: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PM सूर्य घर: सब्सिडी और फ्री बिजली" },
  ],
  docHi: "PM सूर्य घर सब्सिडी",
  title: "PM सूर्य घर मुफ्त बिजली योजना 2026: ऑनलाइन आवेदन, सब्सिडी और 300 यूनिट तक फ्री बिजली",
  description: "PM सूर्य घर योजना में \"300 यूनिट फ्री बिजली\" का असली मतलब, 1-3 kW सोलर पर ₹30,000 से ₹78,000 सब्सिडी, अपनी जेब से कितना लगेगा, लोन और ऑनलाइन आवेदन।",
  published: "2026-08-05",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PM सूर्य घर योजना 2026: \"300 यूनिट फ्री बिजली\" का असली मतलब, सब्सिडी और खर्च",
  lead: "PM सूर्य घर में सरकार सीधे 300 यूनिट मुफ्त बिजली नहीं देती। सरकार घर की छत पर सोलर लगवाने के खर्च पर सब्सिडी देती है (1 kW पर ₹30,000, 2 kW पर ₹60,000, 3 kW या ज़्यादा पर अधिकतम ₹78,000)। छत का सोलर जो बिजली बनाता है, उससे आपका बिल घटता है; सही साइज़ का सोलर हो तो महीने में 300 यूनिट तक की ज़रूरत उसी से पूरी हो सकती है। आवेदन pmsuryaghar.gov.in पर होता है।",
  facts: [
    ["सब्सिडी", "1 kW ₹30,000 · 2 kW ₹60,000 · 3 kW+ ₹78,000"],
    ["पहाड़ी/पूर्वोत्तर राज्य", "10% ज़्यादा, अधिकतम ₹85,800"],
    ["सब्सिडी कब", "सोलर चालू होने और DISCOM जांच के बाद, सीधे बैंक में"],
    ["आवेदन", PORTAL],
  ],
  sections: [
    {
      id: "free-ka-matlab",
      title: "\"मुफ्त बिजली\" का मतलब क्या है",
      list: [
        "सोलर लगवाने का पूरा खर्च पहले आपको (या लोन से) देना होता है। सब्सिडी बाद में आपके बैंक खाते में आती है।",
        "छत का सोलर दिन में बिजली बनाता है। जितनी बिजली बनती है, उतनी आपके बिल से घटती है।",
        "<strong>नेट मीटर</strong> लगता है: ज़्यादा बनी बिजली ग्रिड में जाती है और उसका हिसाब बिल में होता है। ग्रिड को दी गई बिजली का रेट और हिसाब आपके राज्य के बिजली नियमों पर निर्भर है।",
        "रात में या बादल वाले दिन ग्रिड की बिजली ही चलती है; बैटरी इस योजना की सब्सिडी में ज़रूरी हिस्सा नहीं है।",
      ],
      callout: { kind: "info", html: "कितनी बचत होगी, यह सोलर की क्षमता, धूप, छत की दिशा/छाया और आपकी खपत पर निर्भर है। कोई तय \"इतने रुपये बचेंगे\" का वादा नहीं है।" },
    },
    {
      id: "subsidy",
      title: "कितने kW पर कितनी सब्सिडी",
      table: {
        head: ["महीने की खपत", "सही सोलर साइज़", "केंद्र की सब्सिडी (सामान्य राज्य)"],
        rows: [
          ["150 यूनिट तक", "1-2 kW", "₹30,000 से ₹60,000"],
          ["150-300 यूनिट", "2-3 kW", "₹60,000 से ₹78,000"],
          ["300 यूनिट से ज़्यादा", "3 kW से ऊपर", "₹78,000 (अधिकतम)"],
        ],
      },
      html: "<p>हिसाब: पहले 2 kW पर ₹30,000 प्रति kW, तीसरे kW पर ₹18,000। 3 kW से बड़ा सिस्टम लगाएं तो भी केंद्र की सब्सिडी ₹78,000 ही रहती है, बाकी खर्च आपका। कुछ राज्य अपनी तरफ से अलग सब्सिडी भी देते हैं; अपने DISCOM से पूछें। अपने साइज़ का हिसाब: <a href=\"/solar/pm-surya-ghar-subsidy-calculator.html\">सब्सिडी कैलकुलेटर</a>।</p>",
    },
    {
      id: "kaun",
      title: "किसके लिए फायदेमंद है",
      list: [
        "जिनका <strong>अपना घर</strong> है और छत पर दिन भर धूप आती है (हर 1 kW के लिए लगभग 100 वर्ग फुट छाया-रहित जगह)।",
        "जिनके नाम <strong>घरेलू बिजली कनेक्शन</strong> है और जिन्होंने पहले सोलर की कोई सरकारी सब्सिडी नहीं ली।",
        "जिनका बिल हर महीने ठीक-ठाक आता है; बहुत कम खपत हो तो छोटा (1 kW) सिस्टम काफी है।",
        "किराये के घर में: बिजली कनेक्शन आपके नाम हो और मकान मालिक की लिखित सहमति हो, तभी सोचें। पहले DISCOM से पूछ लें।",
      ],
    },
    {
      id: "paisa",
      title: "पैसे नहीं हैं तो: बिना गारंटी लोन",
      intro: `3 kW तक के घरेलू सोलर के लिए बैंक बिना गारंटी (collateral-free) लोन देते हैं। ${PORTAL} पर आवेदन और DISCOM की मंज़ूरी के बाद ${ext("https://www.jansamarth.in/", "jansamarth.in")} पर लोन के लिए आवेदन होता है। ब्याज दर बैंक के हिसाब से अलग होती है, इसलिए लिखित में पूछें। विस्तार: <a href="/solar/pm-surya-ghar-solar-loan.html">सोलर लोन गाइड</a>।`,
    },
    {
      id: "avedan",
      title: "आवेदन छोटे में",
      steps: [
        `${PORTAL} पर राज्य, बिजली कंपनी (DISCOM), बिजली बिल का कंज़्यूमर नंबर और मोबाइल OTP से रजिस्ट्रेशन करें।`,
        "लॉगिन करके रूफटॉप सोलर का आवेदन भरें; DISCOM तकनीकी मंज़ूरी (feasibility) देता है।",
        "मंज़ूरी के बाद सिर्फ <strong>DISCOM में पंजीकृत वेंडर</strong> से सोलर लगवाएं।",
        "नेट मीटर का आवेदन करें; DISCOM जांच के बाद commissioning certificate बनता है।",
        "बैंक खाते की जानकारी और कैंसिल चेक जमा करें; सब्सिडी सीधे खाते में आती है।",
      ],
      callout: { kind: "warn", html: "सब्सिडी के नाम पर पहले पैसे मांगने वाले या \"सरकारी एजेंट\" बनकर आने वालों से सावधान रहें। आवेदन मुफ्त है। पूरी प्रक्रिया और हर स्टेप की दिक्कतें: <a href=\"/solar/pm-surya-ghar-online-apply.html\">ऑनलाइन आवेदन गाइड</a>।" },
    },
  ],
  official: [
    { href: "https://pmsuryaghar.gov.in/", title: "PM सूर्य घर राष्ट्रीय पोर्टल", note: "आवेदन, वेंडर लिस्ट, स्टेटस" },
    { href: "https://www.myscheme.gov.in/schemes/pmsgmb", title: "myScheme: PM सूर्य घर मुफ्त बिजली योजना" },
    { href: "https://www.jansamarth.in/", title: "Jan Samarth", note: "सोलर लोन आवेदन" },
  ],
  faq: [
    { q: "क्या सरकार हर महीने 300 यूनिट बिजली मुफ्त देती है?", a: "नहीं। सरकार छत पर सोलर लगवाने पर सब्सिडी देती है। सोलर से बनी बिजली से आपका बिल घटता है; 3 kW जैसा सही साइज़ हो तो 300 यूनिट तक की ज़रूरत उसी से पूरी हो सकती है।" },
    { q: "3 kW सोलर पर कितनी सब्सिडी मिलेगी?", a: "सामान्य राज्यों में ₹78,000; पूर्वोत्तर, पहाड़ी राज्यों और द्वीपों में ₹85,800। इससे बड़े सिस्टम पर सब्सिडी नहीं बढ़ती।" },
    { q: "सब्सिडी कितने दिन में आती है?", a: "सोलर लगने, नेट मीटर, DISCOM जांच और commissioning certificate के बाद बैंक जानकारी जमा करने पर, आम तौर पर लगभग 30 दिन में।" },
    { q: "क्या मैं किसी भी दुकान से सोलर लगवा सकता हूं?", a: "नहीं। सब्सिडी तभी मिलती है जब आपके DISCOM में पंजीकृत वेंडर सोलर लगाए और पैनल मंज़ूर सूची (ALMM/DCR) के हों।" },
  ],
  related: [
    { href: "/service/pm-surya-ghar-muft-bijli.html", emoji: "☀️", title: "PM सूर्य घर योजना गाइड", text: "पात्रता, सब्सिडी, आवेदन" },
    { href: "/solar/pm-surya-ghar-subsidy-calculator.html", emoji: "🧮", title: "सब्सिडी कैलकुलेटर", text: "kW के हिसाब से सब्सिडी" },
    { href: "/solar/pm-surya-ghar-solar-loan.html", emoji: "🏦", title: "सोलर लोन", text: "बिना गारंटी, Jan Samarth" },
    { href: "/solar/pm-surya-ghar-vendor-list.html", emoji: "📋", title: "पंजीकृत वेंडर लिस्ट", text: "किससे लगवाएं" },
    { href: "/blog/pm-surya-ghar-muft-bijli-yojana-online-registration-2026-complete-step-by-step-a-mso6aat1-0.html", emoji: "📝", title: "ऑनलाइन रजिस्ट्रेशन स्टेप-बाय-स्टेप", text: "हर स्टेप और आम गलतियां" },
  ],
  aside: [
    { href: "https://pmsuryaghar.gov.in/", label: "☀️ PM सूर्य घर पोर्टल" },
    { href: "/solar/pm-surya-ghar-subsidy-calculator.html", label: "🧮 सब्सिडी कैलकुलेटर" },
  ],
};
