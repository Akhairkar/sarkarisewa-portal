import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - revenue.py.gov.in/downloads/EODB/EODB-Residence Certificate.pdf (Department
//   of Revenue and Disaster Management): "Procedure for Applying Residence
//   Certificate": register/login on https://edistrict.py.gov.in, select
//   Department of Revenue and Disaster Management, then Residence Certificate;
//   save, submit, acknowledgement; "No fee is required to be paid for obtaining
//   Residence Certificate"; VAO of the revenue village verifies, may ask for
//   missing documents, forwards to Revenue Inspector, then Deputy Tahsildar /
//   Tahsildar approves or rejects; message on approval and download after
//   login; "track application details" with application number. Upload list:
//   Aadhaar (optional), photo, birth certificate (optional; age proof of
//   applicant, father and grandfather), earlier caste certificate, income
//   certificate (salary slip / Form 16), parents' previous address details and
//   proof, ration card (optional), TC (optional), EPIC (optional), others.
// - revenue.py.gov.in/citizen_charter.html: charter under revision; previous
//   DR&DM Citizen Charter (English PDF, scanned, page 8): "Residence and
//   Nativity Certificates for admission in Educational Institutions and
//   appointment", eligibility "Residents and Natives of Pondicherry", documents
//   copy of the electoral roll, school records and other documentary proof,
//   apply to and sanctioned by Tahsildar / Deputy Tahsildar, 20 days, remedy
//   Deputy Collector (Revenue).
// - revenue.py.gov.in forms page (see puducherry-income-certificate.ts):
//   common application form for Caste/Community, Residence, Income Certificate
//   addressed to the Tahsildar.
// Left out (not confirmable): a minimum residence period, validity, current
// RTS time limit (the 20 days is from the previous charter). The old
// description's "official fee" contradicts the no-fee note and was rewritten.
export const puducherryDomicileCertificate: DocGuide = {
  state: { slug: "puducherry", hi: "पुदुचेरी" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Puducherry Domicile Certificate 2026",
  description: "पुदुचेरी निवास (Residence) प्रमाण पत्र 2026: edistrict.py.gov.in पर मुफ्त आवेदन, VAO-RI-तहसीलदार जांच, ज़रूरी कागज़, स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "पुदुचेरी निवास (Residence) प्रमाण पत्र 2026: e-District पर मुफ्त आवेदन और कागज़",
  lead: "पुदुचेरी में डोमिसाइल के लिए <strong>Residence Certificate</strong> (निवास प्रमाण पत्र) बनता है, और दाखिले/नौकरी के लिए <strong>Nativity Certificate</strong> भी। आवेदन <strong>edistrict.py.gov.in</strong> पर होता है और राजस्व विभाग के अनुसार Residence Certificate के लिए <strong>कोई फीस नहीं</strong> है। जांच गांव के VAO और राजस्व निरीक्षक (RI) करते हैं, और प्रमाण पत्र <strong>तहसीलदार / डिप्टी तहसीलदार</strong> देते हैं।",
  facts: [
    ["ऑनलाइन", '<a href="https://edistrict.py.gov.in/" target="_blank" rel="noopener nofollow">edistrict.py.gov.in</a>'],
    ["फीस", "कोई फीस नहीं (राजस्व विभाग)"],
    ["जारी करते हैं", "तहसीलदार / डिप्टी तहसीलदार"],
    ["शिकायत", "डिप्टी कलेक्टर (राजस्व)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "Residence और Nativity Certificate",
      intro: "राजस्व विभाग के पिछले नागरिक चार्टर में <strong>Residence और Nativity Certificate</strong> को शिक्षण संस्थानों में दाखिले और नियुक्ति के लिए बताया गया है, जो पुदुचेरी के <strong>निवासियों और मूल निवासियों</strong> को मिलता है।",
      callout: { kind: "info", html: "दाखिले या भर्ती के फॉर्म में देखें कि Residence मांगा है या Nativity। जाति का सबूत अलग है: <a href=\"/states/puducherry-caste-certificate.html\">पुदुचेरी जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "अपलोड के लिए कागज़",
      intro: "राजस्व विभाग की Residence Certificate प्रक्रिया (EODB) में यह सूची दी गई है:",
      list: [
        "<strong>आवेदक की फोटो</strong>",
        "<strong>माता-पिता के पिछले पते का ब्योरा और सबूत</strong>",
        "जन्म प्रमाण पत्र (वैकल्पिक; आवेदक, पिता और दादा की उम्र का प्रमाण)",
        "आधार (वैकल्पिक), राशन कार्ड (वैकल्पिक), स्कूल का TC (वैकल्पिक), वोटर ID / EPIC (वैकल्पिक)",
        "सूची में पुराना जाति प्रमाण पत्र और आय प्रमाण (वेतन पर्ची / Form 16) भी लिखे हैं",
        "दूसरे सहायक कागज़ (वैकल्पिक)",
      ],
      callout: { kind: "ok", html: "पिछले चार्टर के अनुसार निवास के सबूत के लिए <strong>मतदाता सूची (Electoral Roll) की कॉपी</strong> और <strong>स्कूल रिकॉर्ड</strong> सबसे काम के कागज़ हैं। लंबे समय के निवास के पुराने कागज़ जितने ज़्यादा हों, उतना अच्छा।" },
    },
    {
      id: "online",
      title: "e-District पर आवेदन",
      steps: [
        '<a href="https://edistrict.py.gov.in/" target="_blank" rel="noopener nofollow">edistrict.py.gov.in</a> खोलें। पहली बार हैं तो नया यूज़रनेम और पासवर्ड बनाकर रजिस्टर करें, फिर लॉगिन करें।',
        "विभागों की सूची में <strong>Department of Revenue and Disaster Management</strong> चुनें।",
        "प्रमाण पत्र के प्रकार में <strong>Residence Certificate</strong> चुनें।",
        "सभी ज़रूरी खाने भरें और कागज़ अपलोड करें।",
        "Save और Submit करके <strong>पावती (acknowledgement)</strong> ले लें। कोई फीस नहीं देनी है।",
      ],
    },
    {
      id: "jaanch",
      title: "जांच कैसे होती है",
      steps: [
        "आपके राजस्व गांव के <strong>VAO (ग्राम प्रशासनिक अधिकारी)</strong> आपके कागज़ जांचते हैं; कोई कागज़ कम हो तो मांग सकते हैं।",
        "VAO अपनी रिपोर्ट <strong>राजस्व निरीक्षक (RI)</strong> को भेजते हैं; RI ज़रूरत हो तो आपको फोन करके जानकारी लेते हैं।",
        "<strong>डिप्टी तहसीलदार / तहसीलदार</strong> रिपोर्ट देखकर आवेदन मंज़ूर या खारिज करते हैं।",
        "मंज़ूरी का मैसेज आने पर दोबारा लॉगिन करके प्रमाण पत्र डाउनलोड करें।",
      ],
      html: "<p><strong>स्टेटस:</strong> लॉगिन करके <strong>Track application</strong> में आवेदन संख्या डालें।</p>",
    },
    {
      id: "samay",
      title: "समय सीमा और शिकायत",
      intro: "राजस्व विभाग का नागरिक चार्टर अभी संशोधित हो रहा है। पिछले चार्टर में Residence और Nativity Certificate के लिए <strong>20 दिन</strong> का समय और देर होने पर <strong>डिप्टी कलेक्टर (राजस्व)</strong> के पास शिकायत लिखी है। नया चार्टर आने पर समय बदल सकता है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["निवास का पुराना सबूत नहीं", "मतदाता सूची की कॉपी, स्कूल रिकॉर्ड या माता-पिता के पुराने पते के कागज़ जोड़ें"],
          ["VAO ने कागज़ मांगा पर जमा नहीं हुआ", "जल्दी मांगा गया कागज़ जमा करें"],
          ["गलत विभाग या प्रमाण पत्र चुना", "Revenue and Disaster Management में Residence Certificate ही चुनें"],
          ["तय समय में फैसला नहीं", "डिप्टी कलेक्टर (राजस्व) के पास शिकायत करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.py.gov.in/", title: "e-District पुदुचेरी (ऑनलाइन आवेदन)" },
    { href: "https://revenue.py.gov.in/downloads/EODB/EODB-Residence%20Certificate.pdf", title: "Residence Certificate आवेदन की प्रक्रिया (राजस्व विभाग, PDF)" },
    { href: "https://revenue.py.gov.in/citizen_charter.html", title: "राजस्व विभाग का नागरिक चार्टर" },
    { href: "https://revenue.py.gov.in/forms.html", title: "राजस्व विभाग के फॉर्म" },
  ],
  faq: [
    { q: "पुदुचेरी में निवास प्रमाण पत्र कहां बनता है?", a: "edistrict.py.gov.in पर Department of Revenue and Disaster Management में Residence Certificate चुनकर। प्रमाण पत्र तहसीलदार / डिप्टी तहसीलदार देते हैं।" },
    { q: "क्या कोई फीस लगती है?", a: "राजस्व विभाग की प्रक्रिया के अनुसार Residence Certificate के लिए कोई फीस नहीं है।" },
    { q: "कितने दिन में मिलता है?", a: "पिछले नागरिक चार्टर में 20 दिन लिखा है। चार्टर अभी संशोधित हो रहा है।" },
    { q: "कौन से कागज़ सबसे ज़रूरी हैं?", a: "फोटो और माता-पिता के पिछले पते का सबूत। मतदाता सूची की कॉपी, स्कूल रिकॉर्ड, राशन कार्ड, TC और जन्म प्रमाण पत्र भी लगा सकते हैं।" },
  ],
  related: [
    { href: "/states/puducherry-caste-certificate.html", emoji: "📜", title: "पुदुचेरी जाति प्रमाण पत्र", text: "स्थायी प्रमाण पत्र, कट-ऑफ तारीख" },
    { href: "/states/puducherry-income-certificate.html", emoji: "💰", title: "पुदुचेरी आय प्रमाण पत्र", text: "e-District पर, कोई फीस नहीं" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.py.gov.in/", label: "📝 e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
