import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, SOON, DISCLAIMER, crumbs, cards, ext, sample } from "./common";

// Sources (checked 4 Oct 2026):
// - Department of Publication (Ministry of I&B), deptpub.gov.in home page:
//   address Civil Lines, behind Delhi Vidhan Sabha Metro Station, Delhi-110054;
//   toll-free 1800-11-3765; "Change of Name/ Public Notices" document list
//   (deptpub.gov.in/document-category/con-guidelines/).
// - "Guidelines for Change of Name for Adult (Major)" PDF from that list:
//   documents (undertaking signed by applicant, original newspaper, proforma in
//   duplicate typed and signed with two witnesses, CD in MS Word, two self-attested
//   photos, self-attested ID, CD certificate, request letter + fee); one daily
//   local leading newspaper; Central Govt employees may submit a deed (MHA OM of
//   12/03/1987); Indians abroad submit a deed attested by the Indian Embassy/High
//   Commission; fee through bharatkosh.gov.in (NTRP); hard-copy Gazette sale
//   stopped from 01/10/2015, download from egazette.gov.in (weekly gazette,
//   Part IV); submit in person or by post; documents not older than one year;
//   not returned; agents/advocates not entertained; hours 10-1 and 2-4.
//   Fee amounts printed in the PDF are for 2016-17 only, so no amount is stated.
// - "Guidelines for Change of Name for Minor" PDF: guardian applies, undertaking
//   by guardian, photos of guardian and child.
// - "Link 2 - Adopting different surname" PDF: affidavit attested by a First
//   Class Magistrate of the area.
// - "Guidelines for Notification of Public Notice" PDF: correction of name and
//   similar notices go as a Public Notice in Part IV.
// - "List of acceptable documents as proof of old name and proof of address" PDF.
// - Notaries Act 1952 s.8; Oaths Act 1969 s.3(2); BNS 2023 ss.227, 229, 236.
export const nameChange: DocGuide = {
  crumbs: crumbs("नाम बदलने का एफिडेविट"),
  docHi: "नाम परिवर्तन एफिडेविट",
  title: "नाम बदलने का एफिडेविट और गजट प्रक्रिया | SarkariSewa India",
  description: "नाम बदलने का एफिडेविट कब काम आता है, गजट ऑफ इंडिया (Part IV) में नाम परिवर्तन के लिए प्रकाशन विभाग के official दस्तावेज़, नमूना फॉर्मेट और आम गलतियां।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "नाम बदलने का एफिडेविट और गजट ऑफ इंडिया में नाम परिवर्तन",
  lead: "नाम बदलने का पक्का रिकॉर्ड गजट ऑफ इंडिया (Part IV) में छपी सूचना होती है, जिसे प्रकाशन विभाग (Department of Publication, दिल्ली) छापता है। इसके लिए विभाग की official गाइडलाइन में अखबार का विज्ञापन, आवेदक का साइन किया undertaking, दो गवाहों वाला टाइप किया प्रोफॉर्मा, फोटो, ID और फीस मांगी जाती है। नाम बदलने का एफिडेविट (नोटरी/मजिस्ट्रेट के सामने शपथ) आम तौर पर बैंक, दफ्तर या कॉलेज में रिकॉर्ड बदलवाने के लिए सहायक दस्तावेज़ के रूप में बनता है; अलग surname अपनाने पर गाइडलाइन खुद First Class Magistrate से attest एफिडेविट मांगती है।",
  facts: [
    ["गजट कौन छापता है", "प्रकाशन विभाग, सिविल लाइंस, दिल्ली-110054"],
    ["गजट का भाग", "साप्ताहिक गजट ऑफ इंडिया, Part IV"],
    ["फीस कहां भरें", ext("https://bharatkosh.gov.in/", "bharatkosh.gov.in") + " (NTRP)"],
    ["गजट कॉपी", ext("https://egazette.gov.in/", "egazette.gov.in") + " से डाउनलोड"],
    ["हेल्पलाइन", '<a href="tel:1800113765">1800-11-3765</a> (टोल-फ्री)'],
  ],
  notice: DISCLAIMER,
  sections: [
    {
      id: "kab",
      title: "नाम बदलने का एफिडेविट कब चाहिए",
      list: [
        "<strong>शादी के बाद surname बदलना</strong> या पुराना surname वापस लेना, और नए नाम से बैंक, नौकरी या पढ़ाई के रिकॉर्ड अपडेट कराना।",
        "<strong>नाम में शब्द जोड़ना या हटाना</strong> (जैसे surname जोड़ना, बीच का नाम हटाना), अंक ज्योतिष या धार्मिक कारण से पूरा नया नाम रखना।",
        "<strong>नाबालिग बच्चे का नाम बदलना</strong>: माता या पिता (guardian) आवेदन करते हैं।",
        "<strong>सिर्फ स्पेलिंग की गलती</strong> हो तो पूरा नया नाम नहीं, बल्कि उस दस्तावेज़ में सुधार या <a href=\"/affidavit/one-and-same-person.html\">वन एंड सेम पर्सन एफिडेविट</a> काफी हो सकता है। प्रकाशन विभाग नाम के correction की सूचना अलग \"Public Notice\" श्रेणी में छापता है।",
      ],
      callout: { kind: "info", html: "एफिडेविट अपने-आप में नाम नहीं बदलता; यह आपका शपथ पर दिया बयान है। सरकारी रिकॉर्ड के लिए अक्सर गजट सूचना मांगी जाती है, और हर विभाग (आधार, पैन, पासपोर्ट, बोर्ड) अपना अलग सुधार फॉर्म रखता है।" },
    },
    {
      id: "gazette",
      title: "गजट ऑफ इंडिया में नाम परिवर्तन: official प्रक्रिया",
      intro: "प्रकाशन विभाग की \"Guidelines for Change of Name for Adult (Major)\" के अनुसार 18 साल या उससे ज़्यादा उम्र का व्यक्ति ये कदम पूरे करता है:",
      steps: [
        "<strong>अखबार में विज्ञापन:</strong> किसी एक दैनिक स्थानीय प्रमुख अखबार में नाम बदलने की सूचना दें, जिसमें पिता/पति का नाम और पूरा पता हो। अखबार का original पन्ना विभाग को भेजना होता है।",
        "<strong>Undertaking:</strong> आवेदक का साइन किया undertaking, जिसमें पुराना और नया नाम, पिता/पति का नाम, पता और यह घोषणा हो कि बातें सच हैं। केंद्र सरकार के कर्मचारी MHA के 12/03/1987 के OM के अनुसार deed दे सकते हैं; विदेश में रहने वाले भारतीय भारतीय दूतावास/हाई कमीशन से attest deed भेजते हैं।",
        "<strong>प्रोफॉर्मा (printing matter):</strong> विभाग के तय नमूने में कंप्यूटर से टाइप, सादे कागज़ पर, दो प्रतियों में, पुराने नाम में आपके साइन और दो गवाहों के नाम, पते, मोबाइल और साइन के साथ।",
        "<strong>CD (MS Word):</strong> वही मैटर गवाहों वाले हिस्से के बिना, साइन की जगह पुराना नाम टाइप करके। साथ में साइन किया सर्टिफिकेट कि CD और कागज़ी कॉपी का मैटर एक जैसा है।",
        "<strong>फोटो और ID:</strong> दो self-attested पासपोर्ट साइज़ फोटो और self-attested फोटो ID।",
        "<strong>फीस:</strong> bharatkosh.gov.in (NTRP) से भरें और रसीद लगाएं। विभाग की गाइडलाइन में छपी राशि पुराने साल की है; मौजूदा राशि आवेदन से पहले विभाग या Bharatkosh पर देख लें।",
        "<strong>जमा करें:</strong> सब दस्तावेज़ forwarding letter के साथ Controller of Publications, Department of Publication, Civil Lines, Delhi-110054 को खुद जाकर या डाक से। गाइडलाइन के अनुसार एजेंट या वकील के ज़रिए आवेदन नहीं लिया जाता, दस्तावेज़ एक साल से पुराने न हों और जमा कागज़ वापस नहीं होते।",
        "<strong>गजट डाउनलोड:</strong> 1 अक्टूबर 2015 से गजट की छपी कॉपी बिकना बंद है। egazette.gov.in पर Weekly Gazette → Part IV चुनें, शनिवार की तारीखों के बीच खोजें और PDF में अपना पुराना/नया नाम ढूंढें। गाइडलाइन के अनुसार डाउनलोड की गई कॉपी को विभाग से अलग certify कराने की ज़रूरत नहीं।",
      ],
    },
    {
      id: "khas",
      title: "खास स्थितियों में क्या अलग है",
      table: {
        head: ["स्थिति", "official गाइडलाइन में क्या लिखा है"],
        rows: [
          ["नाबालिग (18 से कम) का नाम", "माता या पिता अखबार में बच्चे की उम्र के साथ सूचना देते हैं, guardian का undertaking, guardian और बच्चे की फोटो"],
          ["पिता/माता से अलग surname अपनाना या नया surname जोड़ना", "इलाके के <strong>First Class Magistrate से attest एफिडेविट</strong> देना होता है"],
          ["शादी के बाद मायके का surname वापस लेना", "तलाक की डिक्री की कॉपी या पति की NOC (ID और मोबाइल नंबर के साथ); मामला अदालत में हो तो फैसले तक आवेदन आगे नहीं बढ़ता"],
          ["दूसरे धर्म का नाम, पर धर्म नहीं बदला", "undertaking में साफ लिखें कि आप धर्म नहीं बदल रहे; धर्म परिवर्तन की अलग गाइडलाइन है"],
          ["नाम की गलती का सुधार (correction)", "Public Notice श्रेणी: सही और गलत नाम के साथ undertaking, संबंधित दस्तावेज़ की attested कॉपी"],
          ["विदेश में रहने वाले भारतीय", "भारतीय दूतावास/हाई कमीशन से attest deed या घोषणा, original में"],
        ],
      },
      callout: { kind: "warn", html: "पुराने नाम के सबूत और पते के सबूत के लिए विभाग की सूची में पासपोर्ट, आधार, राशन कार्ड, वोटर कार्ड, ड्राइविंग लाइसेंस, सरकारी ID, 3 महीने से नए बिजली/पानी/टेलीफोन/गैस बिल आदि हैं; पुराने नाम के लिए पैन, जन्म प्रमाण पत्र और 10वीं/12वीं का सर्टिफिकेट भी। पूरी सूची विभाग की वेबसाइट पर देखें।" },
    },
    {
      id: "namuna",
      title: "नाम बदलने के एफिडेविट का नमूना",
      intro: "यह नमूना उन दफ्तरों के लिए है जो गजट के साथ या उसके पहले एफिडेविट मांगते हैं। गजट के लिए प्रकाशन विभाग का अपना प्रोफॉर्मा अलग है (नीचे)।",
      html:
        sample(
          "नमूना: नाम परिवर्तन का शपथ पत्र",
          `शपथ पत्र

मैं, [पुराना पूरा नाम], पुत्र/पुत्री/पत्नी [पिता/पति का नाम], उम्र [__] वर्ष, निवासी [पूरा पता], शपथपूर्वक कहता/कहती हूं कि:

1. मेरा पुराना नाम [पुराना नाम] था, जो मेरे [दस्तावेज़ों के नाम, जैसे 10वीं की मार्कशीट, आधार] में दर्ज है।
2. मैंने अपना नाम [कारण, जैसे विवाह के बाद] बदलकर [नया पूरा नाम] रख लिया है और आगे सभी कामों में इसी नाम से जाना/जानी जाऊंगा/जाऊंगी।
3. [पुराना नाम] और [नया नाम] एक ही व्यक्ति, यानी मैं, हूं।
4. मैंने यह परिवर्तन [अखबार का नाम] में दिनांक [__] को प्रकाशित कराया है।

सत्यापन: मैं सत्यापित करता/करती हूं कि ऊपर लिखी बातें मेरी जानकारी और विश्वास में सही हैं और कुछ छिपाया नहीं गया है।

स्थान: [__]          दिनांक: [__]
                                         शपथकर्ता के हस्ताक्षर (नए और पुराने नाम में)`
        ) +
        sample(
          "गजट के लिए प्रकाशन विभाग का प्रोफॉर्मा (official नमूने का हिंदी आशय)",
          `I hitherto known as [पुराना नाम] son/daughter/wife of [पिता/पति का नाम] employed as [पद] in the [दफ्तर/कंपनी] residing at [पता] have changed my name and shall hereafter be known as [नया नाम].

It is certified that I have complied with other legal requirements in this connection.

[पुराना नाम टाइप करें]
Signature (पुराने नाम में)

Witness 1: Full Name, Signature, Address, Mobile
Witness 2: Full Name, Signature, Address, Mobile`
        ),
    },
    {
      id: "attest",
      title: "एफिडेविट कहां और कैसे attest कराएं",
      steps: [
        "राज्य के नियम के अनुसार stamp paper या e-Stamp लें। एफिडेविट पर stamp duty राज्य के Stamp Act/संशोधन से तय होती है, इसलिए राशि हर राज्य में अलग हो सकती है; जिस दफ्तर में देना है, उससे पूछ लें कि stamp paper चाहिए या सादा कागज़ भी चलेगा।",
        "मैटर टाइप कराएं, नाम की स्पेलिंग हर जगह एक जैसी रखें।",
        "Notary (Notaries Act 1952, धारा 8) या Oaths Act 1969 के तहत अधिकृत Oath Commissioner/मजिस्ट्रेट के सामने खुद जाकर साइन करें; पहचान पत्र साथ रखें।",
        "अलग surname अपनाने वाले मामले में प्रकाशन विभाग First Class Magistrate का attestation मांगता है; वहां नोटरी वाला एफिडेविट न बनवाएं।",
        "Notary की मुहर और साइन ज़रूर देखें; धारा 8(2) के अनुसार मुहर और साइन के बिना यह notarial act नहीं माना जाता।",
      ],
      callout: { kind: "info", html: SOON },
    },
    {
      id: "galtiyan",
      title: "आम गलतियां जिनसे आवेदन लौट सकता है",
      list: [
        "हाथ से लिखा प्रोफॉर्मा: गाइडलाइन कंप्यूटर से टाइप मांगती है।",
        "गवाहों के पूरे नाम, पते या साइन छूट जाना।",
        "अखबार की कटिंग या फोटोकॉपी भेजना: original अखबार चाहिए; दस्तावेज़ एक साल से पुराने न हों।",
        "प्रोफॉर्मा पर नए नाम में साइन करना: गजट प्रोफॉर्मा पुराने नाम में साइन होता है।",
        "CD में गवाहों का हिस्सा डाल देना या फाइल PDF/स्कैन में देना: सिर्फ MS Word, गवाहों के बिना।",
        "एफिडेविट में झूठी बात: शपथ पर झूठा बयान भारतीय न्याय संहिता 2023 की धारा 227/229 के तहत अपराध है।",
      ],
    },
  ],
  official: [
    { href: "https://deptpub.gov.in/document-category/con-guidelines/", title: "प्रकाशन विभाग: Change of Name / Public Notice गाइडलाइन", note: "वयस्क, नाबालिग, surname, धर्म, public notice" },
    { href: "https://deptpub.gov.in/", title: "Department of Publication (प्रकाशन विभाग)", note: "टोल-फ्री 1800-11-3765" },
    { href: "https://egazette.gov.in/", title: "e-Gazette", note: "Weekly Gazette, Part IV डाउनलोड" },
    { href: "https://bharatkosh.gov.in/", title: "Bharatkosh (NTRP)", note: "फीस का भुगतान" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "Notaries Act 1952, Oaths Act 1969" },
  ],
  faq: [
    { q: "क्या सिर्फ एफिडेविट से नाम बदल जाता है?", a: "एफिडेविट आपका शपथ पर दिया बयान है, यह अपने-आप सभी रिकॉर्ड में नाम नहीं बदलता। पक्के सबूत के लिए गजट ऑफ इंडिया (Part IV) में सूचना छपवाई जाती है, और हर दस्तावेज़ (आधार, पैन, पासपोर्ट, बोर्ड) में उस विभाग की अपनी प्रक्रिया से सुधार कराना होता है।" },
    { q: "गजट में नाम बदलने के लिए क्या नोटरी वाला एफिडेविट ज़रूरी है?", a: "प्रकाशन विभाग की वयस्क नाम परिवर्तन गाइडलाइन में आवेदक का साइन किया undertaking, अखबार, दो गवाहों वाला प्रोफॉर्मा, CD, फोटो, ID और फीस मांगी गई है। पिता/माता से अलग surname अपनाने पर First Class Magistrate से attest एफिडेविट मांगा गया है। आवेदन से पहले विभाग की मौजूदा गाइडलाइन ज़रूर पढ़ें।" },
    { q: "गजट नाम परिवर्तन की फीस कितनी है?", a: "फीस bharatkosh.gov.in (NTRP) से भरी जाती है। विभाग की PDF में छपी राशि 2016-17 की है, इसलिए हम कोई राशि नहीं लिख रहे; आवेदन से पहले विभाग की वेबसाइट या टोल-फ्री 1800-11-3765 पर मौजूदा फीस पूछ लें।" },
    { q: "गजट की कॉपी कहां से मिलेगी?", a: "1 अक्टूबर 2015 से छपी कॉपी नहीं बिकती। egazette.gov.in पर Weekly Gazette, Part IV चुनकर शनिवार की तारीखों के बीच खोजें और PDF डाउनलोड करें। गाइडलाइन के अनुसार इसे अलग से certify कराने की ज़रूरत नहीं।" },
    { q: "क्या कोई एजेंट या वकील मेरी तरफ से गजट आवेदन जमा कर सकता है?", a: "प्रकाशन विभाग की गाइडलाइन में लिखा है कि आवेदन खुद जाकर या डाक/कूरियर से ही लिया जाएगा, एजेंट या वकील जैसे किसी और माध्यम से नहीं।" },
    { q: "शादी के बाद नाम बदलना हो तो क्या गजट ज़रूरी है?", a: "यह इस पर निर्भर है कि आप कौन-सा रिकॉर्ड बदलवा रही हैं; हर विभाग अपने दस्तावेज़ मांगता है। गजट सबसे मज़बूत सबूत माना जाता है। मायके का surname वापस लेने के लिए प्रकाशन विभाग तलाक की डिक्री या पति की NOC मांगता है।" },
    { q: "नाबालिग बच्चे का नाम कैसे बदलें?", a: "प्रकाशन विभाग की नाबालिग वाली गाइडलाइन के अनुसार माता या पिता अखबार में बच्चे की उम्र के साथ सूचना देते हैं, guardian का undertaking, दो गवाहों वाला प्रोफॉर्मा, guardian और बच्चे की फोटो और फीस जमा करते हैं। जन्म प्रमाण पत्र में नाम का सुधार अलग से जन्म-मृत्यु रजिस्ट्रार के पास होता है।" },
  ],
  related: cards("same", "dob", "self", "hub", "aadhaar", "passport"),
  aside: [
    { href: "https://deptpub.gov.in/document-category/con-guidelines/", label: "📄 official गाइडलाइन" },
    { href: "/affidavit/", label: "📜 सभी एफिडेविट गाइड" },
  ],
};
