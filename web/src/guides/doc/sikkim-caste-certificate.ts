import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Sikkim GO / single sign-on portal sso.sikkim.gov.in: service cards
//   "District Administrative Centre - Scheduled Caste Certificate", "- Scheduled
//   Tribe Certificate", "- OBC Certificate", "- Primitive Tribe Certificate",
//   linking sc.sikkim.gov.in, st.sikkim.gov.in, obc.sikkim.gov.in,
//   primitivetribe.sikkim.gov.in.
// - Each sub-portal's home page: "Issue Of Scheduled Caste / Scheduled Tribe /
//   Other Backward Classes / Primitive Tribe Certificate", Government of
//   Sikkim; steps: register in Sikkim GO, login, fill form and upload
//   documents, track status (SMS/e-mail notification or online). sc.sikkim.gov.in
//   contact: general enquiries +91 89270 10119 / +91 79081 40583, technical
//   support +91 76019 48764.
// - "User manual to acquire Other Backward Classes Certificate" (PDF on
//   sso.sikkim.gov.in/usermanual): login at sikkim.gov.in / SSO, dashboard
//   sections Applied / Approved / Rejection / Application Updates /
//   Instruction-Guidelines (document list), New Application, photo and
//   signature, upload documents (file name without special characters, max
//   10 MB), Pay and Submit, acknowledgement slip with QR code, "My Application"
//   status.
// Left out (not confirmable on an official page we could open): issuing
// officer for each certificate, the document list (shown only after login),
// fee amount, time limit, validity, separate central-list OBC service.
export const sikkimCasteCertificate: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Sikkim Caste Certificate 2026: Apply & Status",
  description: "सिक्किम जाति प्रमाण पत्र 2026: SC, ST, OBC और Primitive Tribe प्रमाण पत्र के लिए Sikkim GO (sso.sikkim.gov.in) पर ऑनलाइन आवेदन, स्टेप, कागज़ अपलोड के नियम और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "सिक्किम जाति प्रमाण पत्र 2026: SC, ST, OBC और Primitive Tribe प्रमाण पत्र Sikkim GO पर",
  lead: "सिक्किम में SC, ST, OBC और Primitive Tribe प्रमाण पत्र के लिए अलग-अलग ऑनलाइन सेवाएं हैं, जो District Administrative Centre के नाम से राज्य के Sikkim GO पोर्टल (sso.sikkim.gov.in) से खुलती हैं। एक ही Sikkim GO अकाउंट से लॉगिन करके फॉर्म भरें, फोटो-हस्ताक्षर और कागज़ अपलोड करें, शुल्क भरकर जमा करें और QR कोड वाली पावती लें। आवेदन की हर स्थिति SMS/ईमेल से और डैशबोर्ड पर दिखती है।",
  facts: [
    ["पोर्टल", '<a href="https://sso.sikkim.gov.in/" target="_blank" rel="noopener nofollow">sso.sikkim.gov.in</a> (Sikkim GO)'],
    ["सेवाएं", "SC, ST, OBC, Primitive Tribe"],
    ["अपलोड", "हर फाइल 10 MB तक"],
    ["पावती", "QR कोड वाली acknowledgement slip"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> हर वर्ग का अलग पोर्टल है: SC के लिए sc.sikkim.gov.in, ST के लिए st.sikkim.gov.in, OBC के लिए obc.sikkim.gov.in और Primitive Tribe के लिए primitivetribe.sikkim.gov.in। लॉगिन सबमें एक ही Sikkim GO अकाउंट से होता है।",
  sections: [
    {
      id: "sevayen",
      title: "कौन सा प्रमाण पत्र किस पोर्टल पर",
      table: {
        head: ["प्रमाण पत्र", "पोर्टल"],
        rows: [
          ["अनुसूचित जाति (Scheduled Caste)", '<a href="https://sc.sikkim.gov.in/" target="_blank" rel="noopener nofollow">sc.sikkim.gov.in</a>'],
          ["अनुसूचित जनजाति (Scheduled Tribe)", '<a href="https://st.sikkim.gov.in/" target="_blank" rel="noopener nofollow">st.sikkim.gov.in</a>'],
          ["अन्य पिछड़ा वर्ग (OBC)", '<a href="https://obc.sikkim.gov.in/" target="_blank" rel="noopener nofollow">obc.sikkim.gov.in</a>'],
          ["Primitive Tribe", '<a href="https://primitivetribe.sikkim.gov.in/" target="_blank" rel="noopener nofollow">primitivetribe.sikkim.gov.in</a>'],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण के लिए केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र मांगा जाता है, और जाति केंद्र की OBC सूची में होनी चाहिए। आवेदन से पहले भर्ती के विज्ञापन का फॉर्मेट देखें और Sikkim GO पर Instruction/Guidelines में दी जानकारी से मिलाएं।" },
    },
    {
      id: "online",
      title: "Sikkim GO पर आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sso.sikkim.gov.in/" target="_blank" rel="noopener nofollow">sso.sikkim.gov.in</a> पर <strong>Create Account</strong> से रजिस्टर करें (पहले से अकाउंट हो तो ईमेल, पासवर्ड और कैप्चा से लॉगिन करें)।',
        "अपने वर्ग का पोर्टल खोलें (ऊपर की तालिका) और <strong>Login with Sikkim GO</strong> करें।",
        "डैशबोर्ड पर <strong>Instruction/Guidelines</strong> में ज़रूरी कागज़ों की सूची पढ़ें, फिर <strong>New Application</strong> चुनें।",
        "आवेदन का ब्योरा भरें और अपनी <strong>फोटो और हस्ताक्षर</strong> अपलोड करें, फिर <strong>Save &amp; Continue</strong>।",
        "ड्रॉप-डाउन से कागज़ का नाम चुनें, <strong>Choose File</strong> से फाइल लें और <strong>Upload</strong> करें। फाइल के नाम में कोई खास चिह्न न हो और साइज़ 10 MB से ज़्यादा न हो।",
        "अपलोड किए कागज़ जांचें और <strong>Pay and Submit</strong> करें; पुष्टि के पॉप-अप में हां करें।",
        "भुगतान के बाद <strong>QR कोड वाली पावती (acknowledgement slip)</strong> डाउनलोड करके रखें।",
      ],
      callout: { kind: "ok", html: "फाइल का साइज़ और नाम ठीक करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें। फाइल का नाम सादा रखें, जैसे photo.jpg या aadhaar.pdf।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "पोर्टल पर कागज़ों की पूरी सूची लॉगिन के बाद <strong>Instruction/Guidelines</strong> में दिखती है; वही अंतिम है। आम तौर पर ये पास रखें:",
      list: [
        "<strong>फोटो और हस्ताक्षर</strong> (स्कैन)",
        "<strong>पहचान पत्र</strong> (आधार / वोटर ID)",
        "सिक्किम में निवास से जुड़ा कागज़, जैसे <strong>Certificate of Identification (COI)</strong> या Sikkim Subject, जो लागू हो",
        "<strong>माता-पिता का जाति/जनजाति प्रमाण पत्र</strong>, अगर पहले बना हो",
        "OBC के लिए परिवार की आय और क्रीमी लेयर से जुड़ी जानकारी",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "<strong>स्टेटस:</strong> डैशबोर्ड पर <strong>Applied</strong> (जमा), <strong>Approved</strong> (मंज़ूर) और <strong>Rejection</strong> (अस्वीकार) अलग-अलग दिखते हैं; <strong>My Application</strong> में भी स्थिति देखें।",
        "<strong>सूचना:</strong> हर बदलाव की सूचना SMS/ईमेल से आती है और <strong>Application Updates</strong> में दिखती है।",
        "मंज़ूरी के बाद प्रमाण पत्र डैशबोर्ड से लें; नाम, पिता का नाम और वर्ग जांच लें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["फाइल अपलोड नहीं हो रही", "फाइल 10 MB से छोटी करें और नाम से खास चिह्न (#, &, / आदि) हटाएं"],
          ["गलत वर्ग का पोर्टल चुन लिया", "SC/ST/OBC/Primitive Tribe का सही पोर्टल चुनकर नया आवेदन करें"],
          ["Instruction/Guidelines वाले कागज़ पूरे नहीं", "सूची से मिलाकर हर कागज़ अपलोड करें"],
          ["आवेदन Rejection में आया", "कारण पढ़ें, कमी पूरी करके दोबारा आवेदन करें या ज़िला प्रशासनिक केंद्र (DAC) में पूछें"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन",
      list: [
        "<strong>सामान्य पूछताछ:</strong> +91 89270 10119 / +91 79081 40583 (sc.sikkim.gov.in पर दिए नंबर)",
        "<strong>तकनीकी मदद:</strong> +91 76019 48764",
        "अपने ज़िले का <strong>District Administrative Centre (DAC)</strong>",
      ],
    },
  ],
  official: [
    { href: "https://sso.sikkim.gov.in/", title: "Sikkim GO (SSO): रजिस्ट्रेशन और लॉगिन" },
    { href: "https://sc.sikkim.gov.in/", title: "SC प्रमाण पत्र पोर्टल" },
    { href: "https://st.sikkim.gov.in/", title: "ST प्रमाण पत्र पोर्टल" },
    { href: "https://obc.sikkim.gov.in/", title: "OBC प्रमाण पत्र पोर्टल" },
    { href: "https://primitivetribe.sikkim.gov.in/", title: "Primitive Tribe प्रमाण पत्र पोर्टल" },
  ],
  faq: [
    { q: "सिक्किम में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sso.sikkim.gov.in पर Sikkim GO अकाउंट बनाएं, अपने वर्ग का पोर्टल (sc/st/obc/primitivetribe.sikkim.gov.in) खोलें, New Application में ब्योरा भरें, फोटो-हस्ताक्षर और कागज़ अपलोड करें, Pay and Submit करें और QR वाली पावती रखें।" },
    { q: "कौन से कागज़ लगते हैं?", a: "लॉगिन के बाद डैशबोर्ड के Instruction/Guidelines सेक्शन में पूरी सूची दिखती है। वही सूची मानें।" },
    { q: "अपलोड की फाइल का साइज़ कितना हो?", a: "OBC पोर्टल की उपयोगकर्ता पुस्तिका के अनुसार हर फाइल 10 MB से ज़्यादा न हो और फाइल के नाम में कोई खास चिह्न न हो।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "डैशबोर्ड पर Applied, Approved और Rejection सेक्शन और My Application में। हर बदलाव की सूचना SMS/ईमेल से भी आती है।" },
    { q: "सिक्किम में Primitive Tribe प्रमाण पत्र कहां बनता है?", a: "primitivetribe.sikkim.gov.in पर, उसी Sikkim GO अकाउंट से लॉगिन करके।" },
  ],
  related: [
    { href: "/states/sikkim-income-certificate.html", emoji: "💰", title: "सिक्किम आय प्रमाण पत्र", text: "Sikkim GO पर आवेदन" },
    { href: "/states/sikkim-domicile-certificate.html", emoji: "🏠", title: "सिक्किम निवास प्रमाण पत्र", text: "COI और डोमिसाइल" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://sso.sikkim.gov.in/", label: "📝 Sikkim GO पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
