import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): built from the per-state domicile guides in
// this folder (web/src/guides/doc/*-domicile-certificate.ts, each checked
// 12-14 Oct 2026 against the state portal or district NIC page named in its
// header): Delhi 3 years continuous residence (edistrict.delhi.gov.in),
// Gujarat 10 years (digitalgujarat.gov.in), Haryana birth or 15 years
// (saralharyana.gov.in), Chhattisgarh 15 years (sewasetu.cgstate.gov.in), Goa
// 15+ years self-declaration (goaonline.gov.in), Himachal permanent home or
// 20 years (himseva.hp.gov.in), J&K 15 years residence or 7 years study
// (jansugam.jk.gov.in), Assam PRC ancestry rules. The old description's
// blanket "10-15 years in every state" was not correct and was rewritten.
// No national fee, time limit or validity exists, so none is given.
export const stateDomicilePramanPatra: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "मूल निवास प्रमाण पत्र" },
  ],
  docHi: "मूल निवास प्रमाण पत्र",
  title: "मूल निवास प्रमाण पत्र (State Domicile Certificate)",
  description: "मूल निवास (Domicile) प्रमाण पत्र राज्य सरकार देती है। कितने साल रहना ज़रूरी है (दिल्ली 3, गुजरात 10, हरियाणा 15, हिमाचल 20 साल), कागज़ और हर राज्य का पोर्टल।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मूल निवास प्रमाण पत्र (State Domicile): किस राज्य में कितने साल रहना ज़रूरी, कहां बनता है",
  lead: "मूल निवास या डोमिसाइल प्रमाण पत्र <strong>राज्य सरकार</strong> का दस्तावेज़ है, जो बताता है कि आप उस राज्य के निवासी हैं। इसे तहसीलदार/SDM जैसे राजस्व अधिकारी राज्य के सेवा पोर्टल या तहसील कार्यालय से जारी करते हैं; कोई केंद्रीय या राष्ट्रीय पोर्टल नहीं है। कितने साल रहने पर बनेगा, यह हर राज्य का अपना नियम है: जैसे दिल्ली में 3 साल, गुजरात में 10 साल, हरियाणा में 15 साल (या वहीं जन्म) और हिमाचल में 20 साल (या स्थायी घर)।",
  facts: [
    ["कौन जारी करता है", "राज्य का राजस्व विभाग (तहसील/SDM)"],
    ["आवेदन", "राज्य सेवा पोर्टल, CSC या तहसील"],
    ["निवास की अवधि", "हर राज्य में अलग (3 से 20 साल तक)"],
    ["फीस", "राज्य के हिसाब से"],
  ],
  sections: [
    {
      id: "avadhi",
      title: "किस राज्य में कितने साल का निवास ज़रूरी",
      intro: "हमारी राज्यवार गाइडों में जांचे गए कुछ नियम:",
      table: {
        head: ["राज्य", "मुख्य शर्त"],
        rows: [
          ['<a href="/states/delhi-domicile-certificate.html">दिल्ली</a>', "पिछले 3 साल से लगातार निवास"],
          ['<a href="/states/gujarat-domicile-certificate.html">गुजरात</a>', "10 साल निवास का सबूत"],
          ['<a href="/states/haryana-domicile-certificate.html">हरियाणा</a>', "हरियाणा में जन्म या 15 साल निवास"],
          ['<a href="/states/chhattisgarh-domicile-certificate.html">छत्तीसगढ़</a>', "15 साल निवास का प्रमाण"],
          ['<a href="/states/goa-domicile-certificate.html">गोवा</a>', "15 साल से ज़्यादा निवास (स्व-घोषणा)"],
          ['<a href="/states/jammu-kashmir-domicile-certificate.html">जम्मू-कश्मीर</a>', "15 साल निवास या 7 साल पढ़ाई (शर्तों के साथ)"],
          ['<a href="/states/himachal-pradesh-domicile-certificate.html">हिमाचल प्रदेश</a>', "स्थायी घर या 20 साल निवास"],
        ],
      },
      callout: { kind: "info", html: 'बाकी राज्यों के नियम, पोर्टल और कागज़ हमारी <a href="/service/domicile-certificate.html">निवास प्रमाण पत्र गाइड</a> की राज्य तालिका में देखें।' },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "पहचान पत्र: आधार, वोटर ID या दूसरा सरकारी पहचान पत्र",
        "निवास की अवधि का सबूत: पुराने राशन कार्ड, बिजली बिल, ज़मीन/मकान के कागज़, स्कूल प्रमाण पत्र, वोटर लिस्ट में नाम",
        "जन्म प्रमाण पत्र (राज्य में जन्म के आधार पर आवेदन हो तो)",
        "राज्य के फॉर्मेट में शपथ पत्र/स्व-घोषणा; कहीं पंचायत/पार्षद या पटवारी की रिपोर्ट",
        "पासपोर्ट साइज़ फोटो",
      ],
    },
    {
      id: "kaise",
      title: "कैसे आवेदन करें",
      steps: [
        "अपने राज्य का सेवा पोर्टल खोलें (जैसे ई-डिस्ट्रिक्ट/सेवा सेतु/सरल) और \"Domicile / Residence / निवास प्रमाण पत्र\" सेवा चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और राज्य की तय फीस भरें।",
        "आवेदन संख्या संभालें; जांच के बाद तहसीलदार/SDM प्रमाण पत्र जारी करते हैं और कई राज्यों में यह पोर्टल या DigiLocker से डाउनलोड होता है।",
        'खुद न कर पाएं तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> या तहसील कार्यालय से आवेदन करवाएं।',
      ],
      callout: { kind: "warn", html: "मूल निवास प्रमाण पत्र उसी राज्य से बनता है जहां आप रहते हैं। दो राज्यों से डोमिसाइल बनवाना कई राज्यों में गलत घोषणा माना जाता है।" },
    },
  ],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "कई राज्यों का प्रमाण पत्र यहां मिलता है" },
  ],
  faq: [
    { q: "मूल निवास प्रमाण पत्र कौन बनाता है?", a: "राज्य सरकार का राजस्व विभाग, आम तौर पर तहसीलदार, SDM या मामलतदार। आवेदन राज्य के सेवा पोर्टल, CSC या तहसील से होता है।" },
    { q: "क्या हर राज्य में 10-15 साल रहना ज़रूरी है?", a: "नहीं। हर राज्य का नियम अलग है, जैसे दिल्ली में 3 साल, गुजरात में 10, हरियाणा में 15 (या जन्म) और हिमाचल में 20 साल (या स्थायी घर)।" },
    { q: "क्या कोई राष्ट्रीय पोर्टल है जहां से हर राज्य का डोमिसाइल बने?", a: "नहीं। हर राज्य का अपना पोर्टल और नियम है। \"edistrict.gov.in\" जैसा कोई एक केंद्रीय पोर्टल नहीं है।" },
    { q: "डोमिसाइल प्रमाण पत्र कहां काम आता है?", a: "राज्य कोटे में दाखिला, राज्य की छात्रवृत्ति, राज्य सरकार की नौकरी और ऐसी योजनाएं जिनमें उसी राज्य का निवासी होना शर्त है।" },
  ],
  related: [
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र (सभी राज्य)", text: "राज्यवार पोर्टल और गाइड" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "/service/domicile-certificate.html", label: "🏠 राज्यवार पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
