import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Sikkim GO / single sign-on portal sso.sikkim.gov.in: service card
//   "District Administrative Centre - Income Certificate" ("Issue of Income
//   Certificate") linking incomecertificate.sikkim.gov.in.
// - incomecertificate.sikkim.gov.in home page: "Issue Of Income Certificate",
//   Government of Sikkim; register in Sikkim GO, login, fill form and upload
//   documents, track status (SMS/e-mail notification or online).
// - Sikkim GO applicant manual (OBC certificate PDF on sso.sikkim.gov.in, same
//   platform): dashboard sections Applied / Approved / Rejection /
//   Application Updates; "the list of necessary required documents to apply
//   for an Income Certificate under the Instruction/Guidelines section"; New
//   Application, photo + signature, uploads max 10 MB without special
//   characters in file name, Pay and Submit, acknowledgement slip with QR code.
// - mangan.nic.in > Services > Income Certificate (North District, page last
//   updated 03.01.2019): Revenue Department of the district issues it to
//   residents; employed / self-employed / agriculturist residents eligible;
//   documents: age proof, address proof, photograph, identity proof, proof of
//   income (salary slip); office: Addl. District Collector / SDM / RO, District
//   Administrative Centre.
// Left out (not confirmable on a current official page): fee, time limit,
// validity. The old page description said "fee ₹25"; not confirmable, so the
// description was rewritten.
export const sikkimIncomeCertificate: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Sikkim Income Certificate 2026: Apply Online",
  description: "सिक्किम आय प्रमाण पत्र 2026: Sikkim GO (sso.sikkim.gov.in) से incomecertificate.sikkim.gov.in पर ऑनलाइन आवेदन। स्टेप, ज़रूरी कागज़, अपलोड के नियम और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "सिक्किम आय प्रमाण पत्र 2026: Sikkim GO पर ऑनलाइन आवेदन, कागज़ और स्टेटस",
  lead: "सिक्किम में आय प्रमाण पत्र ज़िले का District Administrative Centre (राजस्व प्रशासन) जारी करता है और इसका ऑनलाइन आवेदन incomecertificate.sikkim.gov.in पर Sikkim GO (sso.sikkim.gov.in) अकाउंट से होता है। फॉर्म भरें, फोटो-हस्ताक्षर और कागज़ अपलोड करें, Pay and Submit करें और QR कोड वाली पावती लें। ज़रूरी कागज़ों की सूची लॉगिन के बाद डैशबोर्ड के Instruction/Guidelines में दिखती है।",
  facts: [
    ["पोर्टल", '<a href="https://incomecertificate.sikkim.gov.in/" target="_blank" rel="noopener nofollow">incomecertificate.sikkim.gov.in</a>'],
    ["लॉगिन", '<a href="https://sso.sikkim.gov.in/" target="_blank" rel="noopener nofollow">Sikkim GO</a> अकाउंट'],
    ["जारी करता है", "District Administrative Centre (राजस्व)"],
    ["अपलोड", "हर फाइल 10 MB तक"],
  ],
  notice: "<strong>पहले Sikkim GO अकाउंट:</strong> आय प्रमाण पत्र पोर्टल पर अलग से अकाउंट नहीं बनता। पहले sso.sikkim.gov.in पर Create Account करें, फिर उसी से लॉगिन करें।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किसे और क्यों",
      intro: "आय प्रमाण पत्र सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और सरकारी सब्सिडी/योजनाओं में मांगा जाता है। उत्तर ज़िले (मंगन) के आधिकारिक पेज के अनुसार ज़िले का कोई भी निवासी, चाहे नौकरी करता हो, स्वरोज़गार करता हो या किसान हो, आवेदन कर सकता है।",
      callout: { kind: "info", html: "SC/ST/OBC आरक्षण के लिए जाति प्रमाण पत्र अलग से बनता है: <a href=\"/states/sikkim-caste-certificate.html\">सिक्किम जाति प्रमाण पत्र गाइड</a>। EWS आरक्षण के लिए आय और संपत्ति वाला अलग EWS प्रमाण पत्र होता है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "पोर्टल पर अंतिम सूची लॉगिन के बाद <strong>Instruction/Guidelines</strong> में दिखती है। उत्तर ज़िले के आधिकारिक सेवा पेज पर ये कागज़ बताए गए हैं:",
      list: [
        "<strong>उम्र का सबूत:</strong> जन्म प्रमाण पत्र / स्कूल लीविंग सर्टिफिकेट / PAN कार्ड",
        "<strong>पते का सबूत:</strong> राशन कार्ड / वोटर ID / पासपोर्ट / ड्राइविंग लाइसेंस / बिजली या पानी का बिल / संपत्ति कर रसीद",
        "<strong>पहचान का सबूत:</strong> आधार / वोटर ID / ड्राइविंग लाइसेंस",
        "<strong>आय का सबूत:</strong> वेतन पर्ची (नौकरी करते हों तो)",
        "<strong>पासपोर्ट साइज़ फोटो</strong> और हस्ताक्षर (ऑनलाइन फॉर्म में)",
      ],
      callout: { kind: "warn", html: "नौकरी नहीं है (खेती, मज़दूरी, छोटा काम) तो आय की स्व-घोषणा/शपथ-पत्र की ज़रूरत पड़ सकती है; Instruction/Guidelines देखें। आय सच-सच लिखें। स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sso.sikkim.gov.in/" target="_blank" rel="noopener nofollow">sso.sikkim.gov.in</a> पर <strong>Create Account</strong> से रजिस्टर करें।',
        '<a href="https://incomecertificate.sikkim.gov.in/" target="_blank" rel="noopener nofollow">incomecertificate.sikkim.gov.in</a> खोलें और <strong>Login with Sikkim GO</strong> करें।',
        "डैशबोर्ड पर <strong>Instruction/Guidelines</strong> पढ़ें, फिर <strong>New Application</strong> चुनें।",
        "ब्योरा भरें, <strong>फोटो और हस्ताक्षर</strong> अपलोड करें और <strong>Save &amp; Continue</strong> करें।",
        "ड्रॉप-डाउन से कागज़ का नाम चुनकर फाइल अपलोड करें (10 MB तक, नाम में खास चिह्न नहीं)।",
        "कागज़ जांचकर <strong>Pay and Submit</strong> करें और <strong>QR कोड वाली पावती</strong> डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "डैशबोर्ड पर <strong>Applied</strong>, <strong>Approved</strong> और <strong>Rejection</strong> सेक्शन, और <strong>My Application</strong> में स्थिति देखें।",
        "हर बदलाव की सूचना SMS/ईमेल से आती है और <strong>Application Updates</strong> में दिखती है।",
        "मंज़ूरी के बाद प्रमाण पत्र डैशबोर्ड से लें; नाम और आय की राशि जांच लें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "फीस, समय और वैधता",
      intro: "फीस \"Pay and Submit\" के समय स्क्रीन पर दिखती है। समय सीमा और वैधता अवधि किसी मौजूदा आधिकारिक पेज पर नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। छात्रवृत्ति/योजना के नियम में देखें कि कितना पुराना प्रमाण पत्र चलेगा।",
    },
    {
      id: "help",
      title: "मदद",
      list: [
        "अपने ज़िले का <strong>District Administrative Centre (DAC)</strong>; उत्तर ज़िले के पेज पर Addl. District Collector / SDM / RO का कार्यालय बताया गया है।",
        "Sikkim GO की तकनीकी दिक्कत: <strong>+91 76019 48764</strong> (Sikkim GO प्रमाण पत्र पोर्टल पर दिया तकनीकी सहायता नंबर)",
      ],
    },
  ],
  official: [
    { href: "https://incomecertificate.sikkim.gov.in/", title: "आय प्रमाण पत्र पोर्टल (Issue of Income Certificate)" },
    { href: "https://sso.sikkim.gov.in/", title: "Sikkim GO (SSO): रजिस्ट्रेशन और लॉगिन" },
    { href: "https://mangan.nic.in/service/income-certificate/", title: "Income Certificate: सेवा पेज (ज़िला मंगन)" },
  ],
  faq: [
    { q: "सिक्किम में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sso.sikkim.gov.in पर Sikkim GO अकाउंट बनाएं, incomecertificate.sikkim.gov.in पर उसी से लॉगिन करें, New Application में ब्योरा भरें, फोटो-हस्ताक्षर और कागज़ अपलोड करें, Pay and Submit करें और QR वाली पावती रखें।" },
    { q: "सिक्किम आय प्रमाण पत्र कौन जारी करता है?", a: "ज़िले का District Administrative Centre (राजस्व प्रशासन)। उत्तर ज़िले के आधिकारिक पेज पर Addl. District Collector / SDM / RO का कार्यालय बताया गया है।" },
    { q: "कौन से कागज़ लगते हैं?", a: "उम्र, पते और पहचान का सबूत, फोटो और आय का सबूत (नौकरी हो तो वेतन पर्ची)। अंतिम सूची लॉगिन के बाद Instruction/Guidelines में देखें।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "डैशबोर्ड पर Applied, Approved और Rejection सेक्शन और My Application में। हर बदलाव की सूचना SMS/ईमेल से भी आती है।" },
  ],
  related: [
    { href: "/states/sikkim-caste-certificate.html", emoji: "📜", title: "सिक्किम जाति प्रमाण पत्र", text: "SC/ST/OBC, Sikkim GO पर" },
    { href: "/states/sikkim-domicile-certificate.html", emoji: "🏠", title: "सिक्किम निवास प्रमाण पत्र", text: "COI और डोमिसाइल" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://incomecertificate.sikkim.gov.in/", label: "📝 आय प्रमाण पत्र पोर्टल पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
