import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; mmmsy.jharkhand.gov.in timed out from the
// sandbox, search extracts used): deccanherald.com (₹2,500 a month from 28
// Dec 2024), angelone.in, anantamias.com, padhai.ai, policybazaar.com
// (Mukhyamantri Maiyan Samman Yojana; started August 2024 at ₹1,000 a month,
// raised to ₹2,500 in December 2024; age 18-50; Jharkhand resident women;
// verification/e-KYC required for continued payment), prabhatkhabar.com
// (payment only to the single registered bank account; Garhwa report that no
// new names had been added for about 18 months and some names were removed;
// beneficiary count fell between June 2025 and March 2026). Department name
// taken from the old page's JSON-LD and the scheme's portal. Income cap and
// whether new applications are open could not be confirmed and are described
// generally. No instalment date for October 2026 was found.
export const jhMaiyaSammanYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "झारखंड", href: "/states/jharkhand.html" },
    { label: "मंईयां सम्मान योजना" },
  ],
  docHi: "मंईयां सम्मान योजना",
  title: "मुख्यमंत्री मंईयां सम्मान योजना",
  description: "झारखंड की प्रमुख महिला कल्याण योजना: 18-50 वर्ष की पात्र महिलाओं के बैंक खाते में हर महीने ₹2,500 की सीधी सहायता। पात्रता, सत्यापन, पैसा रुकने पर क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुख्यमंत्री मंईयां सम्मान योजना (झारखंड): हर महीने ₹2,500, पात्रता, सत्यापन और भुगतान स्टेटस",
  lead: "मुख्यमंत्री मंईयां सम्मान योजना झारखंड सरकार की योजना है, जिसमें 18 से 50 साल की पात्र महिलाओं के बैंक खाते में हर महीने ₹2,500 भेजे जाते हैं। योजना अगस्त 2024 में ₹1,000 महीने से शुरू हुई थी और दिसंबर 2024 से राशि ₹2,500 है। पैसा लगातार पाने के लिए लाभार्थी का सत्यापन और बैंक खाता आधार से जुड़ा होना ज़रूरी है।",
  facts: [
    ["राज्य", "झारखंड"],
    ["राशि", "₹2,500 प्रति माह"],
    ["उम्र", "18 से 50 साल की महिलाएं"],
    ["भुगतान", "महिला के आधार-लिंक बैंक खाते में (DBT)"],
  ],
  notice: "यह निजी सूचना वेबसाइट है। योजना का आधिकारिक पोर्टल <a href=\"https://mmmsy.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mmmsy.jharkhand.gov.in</a> है। आवेदन या सत्यापन के नाम पर पैसा मांगने वालों को कुछ न दें।",
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      list: [
        "<strong>विभाग:</strong> महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग, झारखंड सरकार।",
        "<strong>शुरुआत:</strong> अगस्त 2024, तब ₹1,000 प्रति माह।",
        "<strong>अभी की राशि:</strong> दिसंबर 2024 से ₹2,500 प्रति माह (साल में ₹30,000)।",
        "<strong>भुगतान:</strong> सीधे महिला के उसी बैंक खाते में जो पंजीकरण में दिया गया है।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "झारखंड की स्थायी निवासी महिला",
        "उम्र 18 से 50 साल",
        "महिला के नाम पर आधार से जुड़ा बैंक खाता",
        "आम तौर पर झारखंड का राशन कार्ड (कुछ स्रोतों के अनुसार)",
      ],
      callout: { kind: "info", html: "आय सीमा और दूसरी शर्तें सरकार बदलती रही है। अपनी पात्रता आंगनबाड़ी सेविका, प्रखंड कार्यालय या पोर्टल पर पुष्टि करें।" },
    },
    {
      id: "avedan",
      title: "आवेदन और नया नाम जोड़ना",
      intro: "शुरुआत में आवेदन आंगनबाड़ी केंद्र, पंचायत भवन और प्रखंड स्तर के शिविरों में ऑफलाइन फॉर्म से लिए गए थे।",
      list: [
        "नया आवेदन अभी खुला है या नहीं, इसकी जानकारी आंगनबाड़ी सेविका या प्रखंड कार्यालय से लें।",
        "अखबारों की खबरों (जैसे गढ़वा ज़िला) के अनुसार कई जगह लंबे समय से नए नाम नहीं जुड़े हैं और जांच में कुछ नाम हटाए भी गए हैं।",
        "आवेदन में आधार, बैंक पासबुक, राशन कार्ड, निवास की जानकारी और मोबाइल नंबर लगते हैं।",
      ],
    },
    {
      id: "paisa-ruka",
      title: "पैसा रुक गया हो तो क्या करें",
      steps: [
        "<strong>सत्यापन:</strong> आंगनबाड़ी या प्रखंड कार्यालय में पूछें कि आपका सत्यापन/e-KYC पूरा है या नहीं।",
        "<strong>बैंक खाता:</strong> जिस खाते में पहले पैसा आता था वही चालू रखें। नया खाता खोलने या खाता बदलने से किस्त रुक सकती है।",
        "<strong>आधार सीडिंग:</strong> बैंक में जाकर देखें कि खाता आधार से जुड़ा (DBT चालू) है।",
        "<strong>स्टेटस:</strong> पोर्टल पर या प्रखंड कार्यालय में अपना स्टेटस जांचें।",
        "<strong>शिकायत:</strong> हल न हो तो प्रखंड विकास पदाधिकारी (BDO) या ज़िला समाज कल्याण कार्यालय में लिखित शिकायत दें।",
      ],
      callout: { kind: "warn", html: "आधार, बैंक खाते या नाम में बदलाव करने से पहले आंगनबाड़ी/प्रखंड कार्यालय से पूछ लें, ताकि रिकॉर्ड न बिगड़े।" },
    },
  ],
  official: [
    { href: "https://mmmsy.jharkhand.gov.in/", title: "मुख्यमंत्री मंईयां सम्मान योजना पोर्टल" },
    { href: "https://www.jharkhand.gov.in/", title: "झारखंड सरकार" },
  ],
  faq: [
    { q: "मंईयां सम्मान योजना में कितना पैसा मिलता है?", a: "दिसंबर 2024 से हर महीने ₹2,500, यानी साल में ₹30,000। शुरुआत (अगस्त 2024) में यह ₹1,000 प्रति माह थी।" },
    { q: "कितनी उम्र की महिलाएं पात्र हैं?", a: "18 से 50 साल की झारखंड निवासी महिलाएं, जो बाकी शर्तें पूरी करती हैं।" },
    { q: "मेरी किस्त नहीं आई, क्यों?", a: "आम कारण: सत्यापन/e-KYC अधूरा, बैंक खाता आधार से न जुड़ा होना, खाता बदलना या जांच में नाम हटना। आंगनबाड़ी या प्रखंड कार्यालय में अपना रिकॉर्ड पूछें।" },
    { q: "क्या अभी नया आवेदन हो सकता है?", a: "इसकी पक्की सरकारी सूचना हमें नहीं मिली। कई ज़िलों से खबरें हैं कि लंबे समय से नए नाम नहीं जुड़े। आंगनबाड़ी सेविका या प्रखंड कार्यालय से पूछें।" },
  ],
  related: [
    { href: "/states/jharkhand.html", emoji: "🗺️", title: "झारखंड की सेवाएं", text: "राज्य की सभी गाइड" },
    { href: "/states/jharkhand-ration-card.html", emoji: "🍚", title: "झारखंड राशन कार्ड", text: "राशन कार्ड बनवाएं या सुधारें" },
    { href: "/states/jharkhand-income-certificate.html", emoji: "💰", title: "झारखंड आय प्रमाण पत्र", text: "आय का प्रमाण" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड निवास प्रमाण पत्र", text: "स्थायी निवास का प्रमाण" },
    { href: "/states/jharkhand-senior-citizen-card.html", emoji: "👵", title: "झारखंड वृद्धा पेंशन", text: "बुज़ुर्गों के लिए" },
  ],
  aside: [
    { href: "https://mmmsy.jharkhand.gov.in/", label: "🌸 योजना पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
