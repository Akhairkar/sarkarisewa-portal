import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/pm-surya-ghar-muft-bijli.html and /solar/pm-surya-ghar-online-apply.html,
// so this post takes the "registration step by step, and what to do when it
// gets stuck at each stage" angle and links there.
// Sources (checked 16 Oct 2026), reused from web/src/guides/doc/pm-surya-ghar-muft-bijli.ts
// and web/src/guides/solar/pages.ts: myScheme "pmsgmb" process (register with
// state, DISCOM, consumer number, mobile; DISCOM feasibility; empanelled vendor;
// net meter; commissioning certificate; bank details + cancelled cheque; DBT),
// subsidy ₹30,000 / ₹60,000 / ₹78,000 (special-category max ₹85,800), ALMM/DCR
// panels, vendor list page on pmsuryaghar.gov.in, loans via jansamarth.in.
// No official subsidy change found in 2026 (web search 16 Oct 2026).
// Old title was cut off ("ऑनलाइन"); completed from its h1.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const PORTAL = ext("https://pmsuryaghar.gov.in/", "pmsuryaghar.gov.in");

export const pmSuryaGharMuftBijliYojanaOnlineRegistration2026CompleteStepByStepAMso6aat10: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PM सूर्य घर ऑनलाइन रजिस्ट्रेशन" },
  ],
  docHi: "PM सूर्य घर रजिस्ट्रेशन",
  title: "पीएम सूर्य घर मुफ्त बिजली योजना ऑनलाइन रजिस्ट्रेशन 2026: पूरी आवेदन प्रक्रिया",
  description: "पीएम सूर्य घर मुफ्त बिजली योजना के लिए ऑनलाइन आवेदन कैसे करें, पात्रता, जरूरी दस्तावेज और सब्सिडी राशि की पूरी जानकारी।",
  published: "2026-08-11",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "पीएम सूर्य घर ऑनलाइन रजिस्ट्रेशन 2026: हर स्टेप, ज़रूरी कागज़ और अटकने पर क्या करें",
  lead: "पीएम सूर्य घर का आवेदन pmsuryaghar.gov.in पर बिजली बिल के कंज़्यूमर नंबर और मोबाइल OTP से होता है। उसके बाद 5 पड़ाव हैं: DISCOM की मंज़ूरी, पंजीकृत वेंडर से सोलर, नेट मीटर और जांच, commissioning certificate, और बैंक जानकारी के बाद सब्सिडी। ज़्यादातर आवेदन नाम न मिलने, गलत कंज़्यूमर नंबर या गैर-पंजीकृत वेंडर की वजह से अटकते हैं।",
  facts: [
    ["आवेदन", PORTAL],
    ["ज़रूरी", "बिजली बिल (कंज़्यूमर नंबर), आधार, बैंक खाता"],
    ["सब्सिडी", "₹30,000 (1 kW) से ₹78,000 (3 kW+)"],
    ["सोलर कौन लगाए", "सिर्फ DISCOM में पंजीकृत वेंडर"],
  ],
  sections: [
    {
      id: "kagaz",
      title: "शुरू करने से पहले ये तैयार रखें",
      list: [
        "<strong>ताज़ा बिजली बिल:</strong> कंज़्यूमर नंबर, DISCOM का नाम और स्वीकृत लोड इसी से भरे जाते हैं।",
        "<strong>आधार कार्ड</strong> और उससे जुड़ा मोबाइल।",
        "<strong>बैंक खाता</strong> (IFSC और कैंसिल चेक), जिसमें सब्सिडी आएगी।",
        "किराये या साझा छत पर: मकान मालिक/सोसायटी की लिखित सहमति।",
      ],
      callout: { kind: "warn", html: "बिजली कनेक्शन, आधार और बैंक खाते में <strong>नाम एक जैसा</strong> होना चाहिए। बिल पिता या किसी और के नाम पर है तो या तो उसी व्यक्ति के नाम से आवेदन करें या पहले DISCOM से कनेक्शन अपने नाम कराएं।" },
    },
    {
      id: "steps",
      title: "स्टेप-बाय-स्टेप रजिस्ट्रेशन और आवेदन",
      steps: [
        `${PORTAL} खोलें और रूफटॉप सोलर के लिए आवेदन (Apply) का विकल्प चुनें।`,
        "राज्य, ज़िला और अपनी बिजली कंपनी (DISCOM) चुनें; बिजली बिल पर लिखा <strong>कंज़्यूमर नंबर</strong> डालें।",
        "मोबाइल नंबर डालें और OTP से रजिस्ट्रेशन पूरा करें।",
        "कंज़्यूमर नंबर और मोबाइल से लॉगिन करें; नाम, पता, ईमेल भरें और रूफटॉप सोलर का फॉर्म जमा करें।",
        "DISCOM आपकी छत/लोड देखकर <strong>तकनीकी मंज़ूरी (feasibility approval)</strong> देता है। मंज़ूरी से पहले सोलर न लगवाएं।",
        "मंज़ूरी के बाद पोर्टल की लिस्ट से अपने DISCOM का <strong>पंजीकृत वेंडर</strong> चुनें और सोलर लगवाएं।",
        "पोर्टल पर प्लांट का विवरण भरें और <strong>नेट मीटर</strong> के लिए आवेदन करें।",
        "DISCOM नेट मीटर लगाकर जांच करता है; पास होने पर पोर्टल पर <strong>commissioning certificate</strong> बनता है।",
        "बैंक खाता, IFSC और कैंसिल चेक जमा करें। सब्सिडी सीधे (DBT) खाते में आती है, आम तौर पर लगभग 30 दिन में।",
      ],
    },
    {
      id: "atka",
      title: "किस स्टेप पर अटका, क्या करें",
      table: {
        head: ["कहां अटका", "आम वजह", "क्या करें"],
        rows: [
          ["रजिस्ट्रेशन नहीं हो रहा", "गलत कंज़्यूमर नंबर या गलत DISCOM चुना", "बिल पर लिखा नंबर बिना स्पेस/शून्य छोड़े डालें; DISCOM का नाम बिल से मिलाएं।"],
          ["Feasibility pending", "DISCOM ने अभी जांच नहीं की, या लोड कम है", "DISCOM के रूफटॉप सोलर नोडल अधिकारी से बात करें; ज़रूरत हो तो लोड बढ़वाएं।"],
          ["वेंडर लिस्ट में नहीं", "वेंडर आपके DISCOM के लिए पंजीकृत नहीं", `पोर्टल की ${ext("https://pmsuryaghar.gov.in/VendorList/statewiseVendor", "वेंडर लिस्ट")} में राज्य और DISCOM चुनकर नाम देखें; गैर-पंजीकृत वेंडर से लगे सोलर पर सब्सिडी नहीं मिलती।`],
          ["नेट मीटर/जांच बाकी", "नेट मीटर का आवेदन नहीं हुआ या जांच बुक नहीं हुई", "पोर्टल पर नेट मीटर आवेदन की स्थिति देखें; वेंडर और DISCOM दोनों से फॉलो-अप करें।"],
          ["Commissioning के बाद सब्सिडी नहीं आई", "बैंक जानकारी गलत, नाम अलग, या कैंसिल चेक साफ नहीं", "खाता नंबर, IFSC और नाम जांचें; सुधार कर फिर जमा करें। विस्तार: <a href=\"/solar/pm-surya-ghar-subsidy-status.html\">सब्सिडी स्टेटस गाइड</a>।"],
        ],
      },
      callout: { kind: "info", html: "पोर्टल पर हर आवेदन की स्टेज दिखती है। जिस स्टेज पर रुका है, वही अगला कदम है। शिकायत के लिए पहले DISCOM, फिर पोर्टल का grievance विकल्प।" },
    },
    {
      id: "subsidy",
      title: "सब्सिडी कितनी मिलेगी",
      table: {
        head: ["सोलर का साइज़", "सामान्य राज्य", "पूर्वोत्तर/पहाड़ी राज्य, द्वीप"],
        rows: [
          ["1 kW", "₹30,000", "₹33,000"],
          ["2 kW", "₹60,000", "₹66,000"],
          ["3 kW या ज़्यादा", "₹78,000 (अधिकतम)", "₹85,800 (अधिकतम)"],
        ],
      },
      html: "<p>सब्सिडी पोर्टल पर मंज़ूर क्षमता के हिसाब से मिलती है। पैसे की कमी हो तो 3 kW तक बिना गारंटी लोन: <a href=\"/solar/pm-surya-ghar-solar-loan.html\">सोलर लोन गाइड</a>।</p>",
    },
  ],
  official: [
    { href: "https://pmsuryaghar.gov.in/", title: "PM सूर्य घर राष्ट्रीय पोर्टल", note: "रजिस्ट्रेशन, आवेदन स्टेटस, शिकायत" },
    { href: "https://pmsuryaghar.gov.in/VendorList/statewiseVendor", title: "राज्य/DISCOM के पंजीकृत वेंडर" },
    { href: "https://www.myscheme.gov.in/schemes/pmsgmb", title: "myScheme: PM सूर्य घर मुफ्त बिजली योजना" },
  ],
  faq: [
    { q: "मंज़ूरी में कितना समय लगता है?", a: "यह आपके DISCOM पर निर्भर है; कोई एक तय समय नहीं है। देर हो तो DISCOM के रूफटॉप सोलर नोडल अधिकारी से पूछें।" },
    { q: "क्या रजिस्ट्रेशन के लिए पैसे लगते हैं?", a: "पोर्टल पर आवेदन मुफ्त है। पैसे सोलर लगवाने (वेंडर) और नेट मीटर/DISCOM फीस के लगते हैं।" },
    { q: "बिजली बिल पिता के नाम है, क्या मैं आवेदन कर सकता हूं?", a: "आवेदन उसी के नाम से होना चाहिए जिसके नाम कनेक्शन है, और सब्सिडी उसी के खाते में जाती है। चाहें तो पहले DISCOM से कनेक्शन अपने नाम कराएं।" },
    { q: "क्या पहले सोलर लगवाकर बाद में आवेदन कर सकते हैं?", a: "नहीं। पहले पोर्टल पर आवेदन और DISCOM की मंज़ूरी, फिर पंजीकृत वेंडर से सोलर; तभी सब्सिडी मिलती है।" },
  ],
  related: [
    { href: "/solar/pm-surya-ghar-online-apply.html", emoji: "📝", title: "ऑनलाइन आवेदन गाइड", text: "पूरी प्रक्रिया विस्तार से" },
    { href: "/solar/pm-surya-ghar-eligibility-documents.html", emoji: "📄", title: "पात्रता और दस्तावेज़", text: "किसे मिलेगी सब्सिडी" },
    { href: "/solar/pm-surya-ghar-subsidy-status.html", emoji: "🔍", title: "सब्सिडी स्टेटस", text: "सब्सिडी नहीं आई तो" },
    { href: "/service/pm-surya-ghar-muft-bijli.html", emoji: "☀️", title: "PM सूर्य घर योजना गाइड", text: "योजना की पूरी जानकारी" },
    { href: "/blog/pm-surya-ghar-muft-bijli-yojana-2026-apply-online-subsidy-free-electricity-up-to-msfi7qf2-0.html", emoji: "💡", title: "300 यूनिट फ्री बिजली का मतलब", text: "सब्सिडी और खर्च समझें" },
  ],
  aside: [
    { href: "https://pmsuryaghar.gov.in/", label: "☀️ PM सूर्य घर पोर्टल" },
    { href: "/solar/pm-surya-ghar-vendor-list.html", label: "📋 वेंडर लिस्ट कैसे देखें" },
  ],
};
