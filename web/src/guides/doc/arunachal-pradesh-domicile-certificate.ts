import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - eservice.arunachal.gov.in (Arunachal eServices / ServicePlus, NIC) and its
//   services page resources/homePage/12/services.html: "Requirements for
//   Issuance of Permanent Residence Certificate (PRC)": mandatory verification
//   document from GB/HGB and Admin Officer; attested Land Allotment Passbook
//   (urban) or Land Possession Certificate (rural) of father/guardian for the
//   permanent address; attested copy of father's PRC; passport-size colour
//   photo; optional birth certificate, applicant's Tribe Resident
//   Certificate, surrender of previous PRC on change of address. Separate
//   "Temporary Residence Certificate (TRC)" with six categories (APST / non-APST
//   x government / business / general; non-APST need Inner Line Permit).
// - eservice.arunachal.gov.in/resources/homePage/12/pdf/PreRequisite_PRC.pdf:
//   same PRC list.
// - Same portal (see arunachal-pradesh-income-certificate.ts): helpline 155250,
//   serviceplus-arn@nic.in, Track Application, Verify Certificate, CSC/JSK
//   route, digitally signed certificate in the ServicePlus account.
// - dibangvalley.nic.in/citizen-charter/ (AP Right to Public Service Act, 2016
//   and Rules, 2017): "Issuance of PRC Certificate", designated officer DC,
//   15 days; 1st appeal Secretary/Commissioner 15 days; 2nd appeal Chief
//   Secretary 15 days. Anini "how to avail" list: PRC with father's ST
//   certificate, birth certificate/identity proof, 2 photos, EAC (Jan Suvidha).
// - papumpare.nic.in/citizen-charter/: PRC, designated officer EAC/CO, 3 days.
// Left out (not confirmable): fee, validity, a residence-period rule for
// non-tribals (the PRC lists do not give one).
export const arunachalPradeshDomicileCertificate: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Arunachal Pradesh Domicile Certificate",
  description: "अरुणाचल प्रदेश में डोमिसाइल की जगह PRC (Permanent Residence Certificate) बनता है। ज़रूरी कागज़ (GB/HGB सत्यापन, LPC/Passbook, पिता का PRC), eservice.arunachal.gov.in पर आवेदन, समय सीमा।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश PRC (स्थायी निवास प्रमाण पत्र) 2026: कागज़, ऑनलाइन आवेदन और समय सीमा",
  lead: "अरुणाचल प्रदेश में निवास के सबूत के लिए <strong>Permanent Residence Certificate (PRC)</strong> बनता है, जिसे डोमिसाइल की जगह इस्तेमाल किया जाता है। आवेदन <strong>eservice.arunachal.gov.in</strong> (ServicePlus) पर या CSC / जन सुविधा काउंटर से होता है और प्रमाण पत्र ज़िले का DC कार्यालय जारी करता है। मुख्य कागज़ हैं: गांव बूढ़ा (GB/HGB) और प्रशासनिक अधिकारी का सत्यापन, पिता की ज़मीन का कागज़ (LPC या Land Allotment Passbook) और पिता का PRC।",
  facts: [
    ["प्रमाण पत्र", "PRC (Permanent Residence Certificate)"],
    ["ऑनलाइन", '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a>'],
    ["जारी करते हैं", "ज़िले का DC कार्यालय (EAC / CO)"],
    ["हेल्पलाइन", "155250 (ServicePlus)"],
  ],
  notice: "<strong>ध्यान दें:</strong> PRC के लिए पिता का PRC और पिता के नाम ज़मीन का कागज़ मांगा जाता है। जो लोग बाहर से आकर नौकरी या कारोबार के लिए रह रहे हैं, उनके लिए पोर्टल पर अलग <strong>Temporary Residence Certificate (TRC)</strong> सेवा है।",
  sections: [
    {
      id: "kya-hai",
      title: "PRC क्या है और कहां काम आता है",
      intro: "PRC यह बताता है कि आपका स्थायी घर अरुणाचल प्रदेश में है। राज्य के कोटे वाले दाखिले, भर्ती और कई योजनाओं में स्थायी निवास का सबूत मांगा जाता है।",
      callout: { kind: "info", html: "ST (जनजाति) होने का सबूत अलग है: <a href=\"/states/arunachal-pradesh-caste-certificate.html\">अरुणाचल ST प्रमाण पत्र</a>। PRC सिर्फ निवास बताता है।" },
    },
    {
      id: "kagaz",
      title: "PRC के लिए ज़रूरी कागज़",
      intro: "पोर्टल की सूची के अनुसार (मूल कागज़ों की स्कैन कॉपी अपलोड करनी होती है):",
      list: [
        "<strong>ज़रूरी:</strong> GB/HGB (गांव बूढ़ा / हेड गांव बूढ़ा) और प्रशासनिक अधिकारी का <strong>सत्यापन पत्र</strong>",
        "<strong>ज़रूरी:</strong> स्थायी पते से जुड़ा पिता/अभिभावक का <strong>Land Allotment Passbook</strong> (शहर) <strong>या</strong> <strong>Land Possession Certificate (LPC)</strong> (गांव), सत्यापित कॉपी",
        "<strong>ज़रूरी:</strong> <strong>पिता के PRC</strong> की सत्यापित कॉपी",
        "<strong>ज़रूरी:</strong> पासपोर्ट साइज़ रंगीन फोटो",
        "<strong>वैकल्पिक:</strong> जन्म प्रमाण पत्र, आवेदक का Tribe Resident Certificate",
        "पता बदलने पर नया PRC लेते समय <strong>पुराना PRC जमा</strong> करना होता है",
      ],
      callout: { kind: "ok", html: "कुछ ज़िलों के चार्टर में पिता का ST प्रमाण पत्र और 2 फोटो भी लिखे हैं (जैसे दिबांग वैली, अनिनी)। आवेदन से पहले अपने DC कार्यालय के जन सुविधा काउंटर से सूची मिला लें।" },
    },
    {
      id: "trc",
      title: "बाहर से आए लोगों के लिए TRC",
      intro: "पोर्टल पर <strong>Temporary Residence Certificate (TRC)</strong> की अलग सेवा है। इसकी छह श्रेणियां हैं:",
      table: {
        head: ["श्रेणी", "मुख्य कागज़"],
        rows: [
          ["APST, सरकारी नौकरी", "नियुक्ति/तबादला आदेश या सरकारी पहचान पत्र, ST प्रमाण पत्र"],
          ["APST, कारोबार", "ट्रेडिंग लाइसेंस, ST प्रमाण पत्र"],
          ["APST, सामान्य", "अभिभावक का सरकारी पहचान पत्र / LPC / Passbook / ट्रेडिंग लाइसेंस, ST प्रमाण पत्र"],
          ["गैर-APST, सरकारी नौकरी", "नियुक्ति/तबादला आदेश या सरकारी पहचान पत्र, Inner Line Permit"],
          ["गैर-APST, कारोबार", "ट्रेडिंग लाइसेंस, Inner Line Permit"],
          ["गैर-APST, सामान्य", "अभिभावक का सरकारी पहचान पत्र / ट्रेडिंग लाइसेंस, Inner Line Permit"],
        ],
      },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन",
      steps: [
        '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a> खोलें और पहली बार हैं तो रजिस्टर करें।',
        "लॉगिन करके <strong>Permanent Residence Certificate (PRC)</strong> सेवा और अपना ज़िला चुनें।",
        "फॉर्म भरें और GB/HGB सत्यापन, ज़मीन का कागज़, पिता का PRC और फोटो की स्कैन कॉपी अपलोड करें।",
        "पोर्टल पर कोई शुल्क दिखे तो डेबिट कार्ड या नेट बैंकिंग से भरें और Submit करें।",
        "पावती में लिखी <strong>आवेदन संदर्भ संख्या</strong> संभाल कर रखें; SMS भी आता है।",
      ],
      html: "<p>खुद नहीं भर सकते तो <strong>CSC या DC कार्यालय के जन सुविधा काउंटर</strong> पर कागज़ लेकर जाएं। वहां ऑपरेटर ऑनलाइन आवेदन कर देगा।</p>",
    },
    {
      id: "samay",
      title: "समय सीमा और अपील",
      intro: "समय सीमा अरुणाचल प्रदेश लोक सेवा अधिकार अधिनियम, 2016 के तहत ज़िले के नागरिक चार्टर में लिखी होती है और ज़िलों में अलग है:",
      table: {
        head: ["स्तर", "अधिकारी", "समय"],
        rows: [
          ["PRC देना (दिबांग वैली)", "उपायुक्त (DC)", "15 दिन"],
          ["PRC देना (पापुम पारे)", "EAC / सर्किल ऑफिसर", "3 दिन"],
          ["पहली अपील", "संबंधित विभाग के सचिव / आयुक्त", "15 दिन"],
          ["दूसरी अपील", "मुख्य सचिव", "15 दिन"],
        ],
      },
      html: "<p><strong>फीस:</strong> PRC की फीस किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन के समय पोर्टल पर दिखी रकम ही मान्य है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "होमपेज पर <strong>Track Application</strong> में संदर्भ संख्या डालकर स्थिति देखें।",
        "डिजिटल हस्ताक्षर वाला प्रमाण पत्र आपके ServicePlus अकाउंट में आता है; वहीं से प्रिंट करें, या CSC पर पावती दिखाकर प्रिंट लें।",
        "होमपेज के <strong>Verify Certificate</strong> से प्रमाण पत्र असली है या नहीं, जांचा जा सकता है।",
        "मदद: ServicePlus हेल्पलाइन <strong>155250</strong>, ईमेल serviceplus-arn@nic.in।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["GB/HGB का सत्यापन नहीं लगा", "गांव बूढ़ा और प्रशासनिक अधिकारी से सत्यापन पत्र लेकर अपलोड करें"],
          ["ज़मीन का कागज़ स्थायी पते से मेल नहीं खाता", "उसी पते का LPC या Land Allotment Passbook लगाएं"],
          ["पिता का PRC नहीं है", "DC कार्यालय से पूछें कि आपके मामले में कौन सा दूसरा सबूत चलेगा"],
          ["पता बदला पर पुराना PRC जमा नहीं किया", "पुराना PRC जमा करके नया आवेदन करें"],
          ["तय समय में फैसला नहीं", "विभाग के सचिव/आयुक्त के पास पहली अपील करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://eservice.arunachal.gov.in/", title: "Arunachal eServices (ServicePlus): ऑनलाइन आवेदन" },
    { href: "https://eservice.arunachal.gov.in/resources/homePage/12/pdf/PreRequisite_PRC.pdf", title: "PRC के ज़रूरी कागज़ (PDF)" },
    { href: "https://dibangvalley.nic.in/citizen-charter/", title: "नागरिक चार्टर: PRC, समय सीमा और अपील (दिबांग वैली)" },
    { href: "https://papumpare.nic.in/citizen-charter/", title: "नागरिक चार्टर (पापुम पारे)" },
  ],
  faq: [
    { q: "अरुणाचल प्रदेश में डोमिसाइल प्रमाण पत्र कैसे बनता है?", a: "यहां डोमिसाइल की जगह Permanent Residence Certificate (PRC) बनता है। आवेदन eservice.arunachal.gov.in पर या CSC/जन सुविधा काउंटर से करें।" },
    { q: "PRC के लिए कौन से कागज़ ज़रूरी हैं?", a: "GB/HGB और प्रशासनिक अधिकारी का सत्यापन, पिता के नाम का LPC (गांव) या Land Allotment Passbook (शहर), पिता का PRC और रंगीन फोटो। जन्म प्रमाण पत्र और Tribe Resident Certificate वैकल्पिक हैं।" },
    { q: "PRC कितने दिन में बनता है?", a: "ज़िले के चार्टर पर निर्भर है। दिबांग वैली में 15 दिन और पापुम पारे में 3 दिन लिखे हैं। देर हो तो विभाग के सचिव/आयुक्त के पास अपील कर सकते हैं।" },
    { q: "बाहर के राज्य का व्यक्ति अरुणाचल में नौकरी करता है, उसे क्या मिलेगा?", a: "पोर्टल पर Temporary Residence Certificate (TRC) की सेवा है। गैर-APST लोगों को इसमें Inner Line Permit और नौकरी/कारोबार का सबूत लगाना होता है।" },
    { q: "पता बदल गया तो क्या करें?", a: "नया PRC बनवाएं और पुराना PRC जमा करें; पोर्टल की सूची में यह लिखा है।" },
  ],
  related: [
    { href: "/states/arunachal-pradesh-caste-certificate.html", emoji: "📜", title: "अरुणाचल ST प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/arunachal-pradesh-income-certificate.html", emoji: "💰", title: "अरुणाचल आय प्रमाण पत्र", text: "eService पोर्टल पर" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://eservice.arunachal.gov.in/", label: "📝 eService पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
