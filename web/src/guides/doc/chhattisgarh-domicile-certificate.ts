import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - sewasetu.cgstate.gov.in (Sewa Setu, CHiPS; replaces the older e-District
//   CG portal) home page: "निवास प्रमाण पत्र" service; "आवेदन की स्थिति";
//   help e-mail sewasetu.helpline@cgchips.in.
// - Sewa Setu service page instractionPageNew.do?serviceId=7 ("मूल निवास प्रमाण
//   पत्र", Revenue & Disaster Management Department): purpose (government
//   services, education, scholarships, preference in employment); registration
//   with name, mobile, e-mail, Aadhaar, address; form asks residential address
//   and period of residence in Chhattisgarh; usually completed within 15
//   working days; SMS on approval; digitally signed certificate downloadable;
//   time limit box "7 दिन"; fee Rs 30 at Sewa Setu Kendra and online;
//   documents: affidavit (mandatory); proof of 15 years' residence (mandatory:
//   birth certificate, father/guardian's service certificate, job certificate /
//   ID if government employee, voter card, house or land document, birth
//   intimation form, certificate from ward member / local MLA / MP, ration
//   card, electricity bill); educational certificate (mandatory: class 5, 8,
//   10, 12 certificates/marksheets, school certificate of 3 years' continuous
//   study, PG, M.Phil, technical); proof of 5 years' residence (optional: house
//   or land document, service book); other (optional).
// - Sewa Setu user manual 7.pdf (मूल निवासी प्रमाण पत्र): registration, OTP
//   login, search "Domicile Certificate", Aadhaar e-authentication, form
//   (residence after birth, employment, education), upload (max 750 KB per
//   file; at least one residence proof and an education certificate
//   mandatory), declaration, submit, service charge Rs 30 at Lok Seva Kendra /
//   CSC / kiosk including scanning of up to five documents, acknowledgement
//   with reference number, status, download via "देखें".
// Left out (not confirmable on an official page we could open): the issuing
// officer's designation, validity period, appeal officer, the state's formal
// domicile rules for recruitment.
export const chhattisgarhDomicileCertificate: DocGuide = {
  state: { slug: "chhattisgarh", hi: "छत्तीसगढ़" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Chhattisgarh Domicile Certificate 2026",
  description: "छत्तीसगढ़ मूल निवास प्रमाण पत्र 2026: सेवा सेतु पोर्टल पर आवेदन, 15 साल निवास का प्रमाण, शपथ पत्र और शैक्षणिक प्रमाण पत्र, ₹30 शुल्क, स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "छत्तीसगढ़ मूल निवास प्रमाण पत्र 2026: सेवा सेतु पर आवेदन, कागज़ और शुल्क",
  lead: "छत्तीसगढ़ में मूल निवास (डोमिसाइल) प्रमाण पत्र के लिए आवेदन सेवा सेतु पोर्टल (sewasetu.cgstate.gov.in) पर या सेवा सेतु केंद्र/CSC से होता है। इसके लिए शपथ पत्र, <strong>15 साल के निवास का प्रमाण</strong> और एक शैक्षणिक प्रमाण पत्र अनिवार्य है। शुल्क ₹30 है और मंज़ूरी के बाद डिजिटल हस्ताक्षर वाला प्रमाण पत्र पोर्टल से डाउनलोड होता है।",
  facts: [
    ["पोर्टल", '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a>'],
    ["शर्त", "15 साल निवास का प्रमाण"],
    ["शुल्क", "₹30 (ऑनलाइन और केंद्र पर)"],
    ["समय सीमा", "7 दिन (पोर्टल)"],
  ],
  notice: "<strong>ध्यान दें:</strong> सेवा सेतु के सेवा पेज पर समय सीमा 7 दिन लिखी है, जबकि उसी पेज के परिचय में लिखा है कि सही कागज़ होने पर प्रक्रिया सामान्यतः 15 कार्य दिवस में पूरी होती है। इसलिए भर्ती या दाखिले की आखिरी तारीख से काफी पहले आवेदन करें।",
  sections: [
    {
      id: "kya-hai",
      title: "मूल निवास प्रमाण पत्र किस काम आता है",
      intro: "सेवा सेतु के अनुसार यह प्रमाण पत्र राज्य में स्थायी निवास को प्रमाणित करता है और इन कामों में ज़रूरी होता है:",
      list: [
        "सरकारी सेवाएं और <strong>रोज़गार में वरीयता</strong>",
        "<strong>शैक्षणिक अवसर</strong> और दाखिले",
        "<strong>छात्रवृत्तियां</strong> और राज्य के दूसरे लाभ",
      ],
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। SC/ST/OBC आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/chhattisgarh-caste-certificate.html\">छत्तीसगढ़ जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      table: {
        head: ["कागज़", "अनिवार्य?", "क्या लगा सकते हैं"],
        rows: [
          ["<strong>शपथ पत्र</strong>", "हां", "निवास के बारे में शपथ पत्र"],
          ["<strong>15 साल निवास का प्रमाण</strong>", "हां (कम से कम एक)", "जन्म प्रमाण पत्र, पिता/पालक का सेवा प्रमाण पत्र, सरकारी कर्मचारी हों तो नौकरी प्रमाण पत्र/पहचान पत्र, वोटर कार्ड, घर या भूमि का दस्तावेज़, जन्म सूचना प्रपत्र, वार्ड सदस्य/विधायक/सांसद का प्रमाण पत्र, राशन कार्ड, बिजली बिल"],
          ["<strong>शैक्षणिक प्रमाण पत्र</strong>", "हां (कम से कम एक)", "5वीं, 8वीं, 10वीं या 12वीं का प्रमाण पत्र/अंकसूची, लगातार 3 साल पढ़ाई का स्कूल प्रमाण पत्र, स्नातकोत्तर या तकनीकी प्रमाण पत्र"],
          ["5 साल निवास का प्रमाण", "नहीं", "घर या भूमि का दस्तावेज़, सेवा पुस्तिका"],
          ["फोटो", "हां", "हाल की फोटो"],
        ],
      },
      callout: { kind: "ok", html: "हर फाइल का साइज़ <strong>750 KB</strong> से कम रखें। कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "सेवा सेतु पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a> पर नाम, मोबाइल, ईमेल, आधार और पता देकर पंजीकरण करें।',
        "यूज़रनेम, पासवर्ड और OTP से लॉगिन करें और सेवाओं में <strong>निवास / Domicile Certificate</strong> चुनें।",
        "आधार ई-प्रमाणीकरण करें (आधार नंबर और आधार के अनुसार अंग्रेज़ी में नाम)।",
        "फॉर्म में पता, <strong>छत्तीसगढ़ में निवास की अवधि</strong>, जन्म के बाद निवास का विवरण, शिक्षा और रोज़गार की जानकारी भरें।",
        "शपथ पत्र, फोटो, निवास का प्रमाण और शैक्षणिक प्रमाण पत्र अपलोड करें, घोषणा पर टिक करके जमा करें।",
        "₹30 शुल्क भरें और <strong>पावती</strong> (आवेदन संदर्भ क्रमांक के साथ) प्रिंट करके रखें।",
      ],
      html: "<p><strong>केंद्र से आवेदन:</strong> सेवा सेतु केंद्र, लोक सेवा केंद्र, CSC या कियोस्क पर भी ₹30 सेवा शुल्क में आवेदन होता है; इसमें पांच कागज़ों तक की स्कैनिंग शामिल है। ज़्यादा कागज़ों की स्कैनिंग का अलग शुल्क लग सकता है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "होम पेज पर <strong>आवेदन की स्थिति</strong> में आवेदन संदर्भ क्रमांक और कैप्चा डालें।",
        "मंज़ूरी पर SMS आता है। फिर उसी जगह <strong>देखें</strong> बटन से डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें।",
        "मदद या शिकायत: पोर्टल का शिकायत/सहायता विकल्प या ईमेल sewasetu.helpline@cgchips.in।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["15 साल के निवास का प्रमाण नहीं", "जन्म प्रमाण पत्र, पुराना राशन कार्ड, घर/भूमि के कागज़ या पिता का सेवा प्रमाण पत्र लगाएं"],
          ["शैक्षणिक प्रमाण पत्र नहीं लगाया", "छत्तीसगढ़ के स्कूल का कोई प्रमाण पत्र या अंकसूची लगाएं"],
          ["शपथ पत्र नहीं", "शपथ पत्र अनिवार्य है, उसे अपलोड करें"],
          ["फाइल बहुत बड़ी या धुंधली", "750 KB से छोटी, साफ स्कैन लगाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://sewasetu.cgstate.gov.in/", title: "सेवा सेतु छत्तीसगढ़ (आवेदन, स्टेटस, शिकायत)" },
    { href: "https://sewasetu.cgstate.gov.in/instractionPageNew.do?serviceId=7&lang=hi", title: "मूल निवास प्रमाण पत्र: सेवा विवरण, कागज़, शुल्क" },
    { href: "https://sewasetu.cgstate.gov.in/resources/edistrict/user-manual/new/7.pdf", title: "मूल निवासी प्रमाण पत्र की उपयोग पुस्तिका (PDF)" },
  ],
  faq: [
    { q: "छत्तीसगढ़ मूल निवास प्रमाण पत्र के लिए कितने साल का निवास चाहिए?", a: "सेवा सेतु पर 15 साल तक निवास का प्रमाण अनिवार्य कागज़ के रूप में मांगा गया है।" },
    { q: "छत्तीसगढ़ निवास प्रमाण पत्र की फीस कितनी है?", a: "₹30, ऑनलाइन और सेवा सेतु केंद्र दोनों पर।" },
    { q: "कितने दिन में बनता है?", a: "सेवा पेज पर समय सीमा 7 दिन लिखी है; परिचय के अनुसार सही कागज़ होने पर सामान्यतः 15 कार्य दिवस में।" },
    { q: "कौन से कागज़ अनिवार्य हैं?", a: "शपथ पत्र, फोटो, 15 साल निवास का कम से कम एक प्रमाण और एक शैक्षणिक प्रमाण पत्र।" },
  ],
  related: [
    { href: "/states/chhattisgarh-caste-certificate.html", emoji: "📜", title: "छत्तीसगढ़ जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/chhattisgarh-income-certificate.html", emoji: "💰", title: "छत्तीसगढ़ आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/chhattisgarh-employment-exchange.html", emoji: "💼", title: "छत्तीसगढ़ रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.cgstate.gov.in/", label: "📝 सेवा सेतु पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
