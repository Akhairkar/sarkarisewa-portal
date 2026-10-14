import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; mpedistrict.gov.in and most MP district sites
// were not reachable from our checker):
// - anuppur.nic.in > Citizen Services > "Issuance of Domicile Certificate due
//   to legal obligation": apply online on the MP e-District portal; register
//   with Aadhaar number and OTP on the registered mobile; then apply for the
//   service; pay the service fee by internet banking / credit card / debit
//   card / e-wallet; or apply at Lok Seva Kendra (Anuppur, Jaithari, Kotma,
//   Pushprajgarh); link to mpedistrict.gov.in citizen login.
// - Facts already verified for madhya-pradesh-caste-certificate.ts /
//   madhya-pradesh-income-certificate.ts: Lok Seva Kendra / mpedistrict.gov.in
//   as the application route; services under the MP Lok Sewaon ke Pradan ki
//   Guarantee law.
// Left out (not confirmable on an official page we could open): eligibility /
// years of residence, document list, fee amount, time limit in days, issuing
// officer, validity, helpline numbers. Search results with such numbers were
// all from private sites. The old page description promised an "official fee",
// which we could not confirm, so the description was rewritten.
export const madhyaPradeshDomicileCertificate: DocGuide = {
  state: { slug: "madhya-pradesh", hi: "मध्य प्रदेश" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Madhya Pradesh Domicile Certificate 2026",
  description: "मध्य प्रदेश मूल निवासी (डोमिसाइल) प्रमाण पत्र 2026: MP e-District पर आधार OTP से पंजीकरण और ऑनलाइन आवेदन, या लोक सेवा केंद्र से। कागज़ और स्टेटस की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मध्य प्रदेश मूल निवासी (डोमिसाइल) प्रमाण पत्र 2026: e-District और लोक सेवा केंद्र से आवेदन",
  lead: "मध्य प्रदेश में मूल निवासी (Domicile) प्रमाण पत्र लोक सेवा गारंटी कानून के तहत मिलने वाली सेवा है। आवेदन MP e-District पोर्टल (mpedistrict.gov.in) पर आधार OTP से पंजीकरण करके ऑनलाइन होता है, या नज़दीकी <strong>लोक सेवा केंद्र</strong> से। ऑनलाइन आवेदन में सेवा शुल्क नेट बैंकिंग, कार्ड या ई-वॉलेट से भरा जाता है।",
  facts: [
    ["पोर्टल", '<a href="https://mpedistrict.gov.in/" target="_blank" rel="noopener nofollow">mpedistrict.gov.in</a>'],
    ["ऑफलाइन", "लोक सेवा केंद्र"],
    ["पंजीकरण", "आधार नंबर + मोबाइल OTP"],
    ["कानून", "लोक सेवा गारंटी (समय सीमा में सेवा)"],
  ],
  notice: "<strong>ध्यान दें:</strong> इस सेवा की पात्रता (कितने साल का निवास), कागज़ों की सूची, फीस और समय सीमा हमें किसी ऐसे सरकारी पेज पर नहीं मिली जिसे हम खोल सके। इसलिए ये बातें यहां नहीं लिखी हैं। आवेदन करते समय e-District पोर्टल पर सेवा चुनने के बाद जो शर्तें और कागज़ दिखें, वही मानें, या लोक सेवा केंद्र पर पूछें।",
  sections: [
    {
      id: "kya-hai",
      title: "मूल निवासी प्रमाण पत्र किस काम आता है",
      intro: "यह प्रमाण पत्र बताता है कि आप मध्य प्रदेश के मूल निवासी हैं। राज्य की भर्तियों, दाखिलों और योजनाओं में जहां मध्य प्रदेश का निवासी होना शर्त है, वहां यह मांगा जाता है। भर्ती या दाखिले में निवास की अपनी शर्त उनकी सूचना में लिखी होती है, उसे भी पढ़ें।",
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/madhya-pradesh-caste-certificate.html\">मध्य प्रदेश जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "online",
      title: "MP e-District पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://mpedistrict.gov.in/" target="_blank" rel="noopener nofollow">mpedistrict.gov.in</a> खोलें और citizen login में जाएं।',
        "<strong>आधार नंबर</strong> से पंजीकरण करें; आधार से जुड़े मोबाइल पर OTP आएगा।",
        "OTP सत्यापन के बाद सेवाओं में <strong>मूल निवासी (Domicile) प्रमाण पत्र</strong> चुनें।",
        "फॉर्म भरें और सेवा के पेज पर मांगे गए कागज़ अपलोड करें।",
        "सेवा शुल्क <strong>नेट बैंकिंग, क्रेडिट/डेबिट कार्ड या ई-वॉलेट</strong> से भरें और आवेदन नंबर वाली पावती संभालकर रखें।",
      ],
    },
    {
      id: "offline",
      title: "लोक सेवा केंद्र से आवेदन",
      intro: "ऑनलाइन आवेदन न कर पाएं तो अपनी तहसील/ब्लॉक के <strong>लोक सेवा केंद्र</strong> पर आधार, पहचान और निवास से जुड़े कागज़ लेकर जाएं। वहां फॉर्म भरकर आवेदन दर्ज होता है और पावती मिलती है। पावती पर लिखी फीस और प्रमाण पत्र देने की तारीख ज़रूर देख लें।",
      callout: { kind: "ok", html: "<strong>काम के कागज़ (साथ ले जाएं):</strong> आधार, वोटर कार्ड या राशन कार्ड, और लंबे समय से मध्य प्रदेश में रहने के जो सबूत आपके पास हों (जन्म प्रमाण पत्र, स्कूल रिकॉर्ड, ज़मीन/मकान के कागज़)। केंद्र पर जो सूची बताई जाए, उसके अनुसार लगाएं।" },
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "ऑनलाइन आवेदन किया है तो e-District पर लॉगिन करके आवेदन की स्थिति देखें और मंज़ूरी के बाद प्रमाण पत्र डाउनलोड करें।",
        "लोक सेवा केंद्र से आवेदन किया है तो पावती लेकर उसी केंद्र पर स्थिति पूछें और प्रमाण पत्र लें।",
        "प्रमाण पत्र में नाम, पिता का नाम और पता ध्यान से जांचें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आधार से मोबाइल नंबर जुड़ा नहीं, OTP नहीं आया", "पहले आधार केंद्र पर मोबाइल नंबर जुड़वाएं, या लोक सेवा केंद्र से आवेदन करें"],
          ["निवास का सबूत कमज़ोर", "जन्म प्रमाण पत्र, स्कूल रिकॉर्ड, ज़मीन/मकान के कागज़ जैसे पुराने सबूत जोड़ें"],
          ["कागज़ों में नाम/पता अलग", "पहले कागज़ों में सुधार कराएं, फिर आवेदन करें"],
          ["समय पर प्रमाण पत्र नहीं मिला", "लोक सेवा गारंटी कानून के तहत अपील का अधिकार है; लोक सेवा केंद्र पर अपील की प्रक्रिया पूछें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://mpedistrict.gov.in/", title: "MP e-District / लोक सेवा गारंटी पोर्टल" },
    { href: "https://anuppur.nic.in/en/service/issuance-of-domicile-certificate-due-to-legal-obligation/", title: "मूल निवासी प्रमाण पत्र सेवा (ज़िला अनूपपुर)" },
  ],
  faq: [
    { q: "मध्य प्रदेश में मूल निवासी प्रमाण पत्र कहां बनता है?", a: "MP e-District पोर्टल mpedistrict.gov.in पर आधार OTP से पंजीकरण करके ऑनलाइन, या नज़दीकी लोक सेवा केंद्र से।" },
    { q: "ऑनलाइन फीस कैसे भरें?", a: "नेट बैंकिंग, क्रेडिट/डेबिट कार्ड या ई-वॉलेट से। राशि पोर्टल पर आवेदन के समय दिखती है।" },
    { q: "मध्य प्रदेश में कितने साल रहने पर मूल निवासी प्रमाण पत्र बनता है?", a: "यह शर्त हमें किसी ऐसे सरकारी पेज पर नहीं मिली जिसे हम खोल सके। आवेदन के समय पोर्टल पर दिखने वाली शर्तें देखें या लोक सेवा केंद्र पर पूछें।" },
  ],
  related: [
    { href: "/states/madhya-pradesh-caste-certificate.html", emoji: "📜", title: "मध्य प्रदेश जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/madhya-pradesh-income-certificate.html", emoji: "💰", title: "मध्य प्रदेश आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/madhya-pradesh-employment-exchange.html", emoji: "💼", title: "मध्य प्रदेश रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://mpedistrict.gov.in/", label: "📝 MP e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
