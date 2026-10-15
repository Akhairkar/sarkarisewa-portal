import type { DocGuide } from "./types";

// Sources (checked Oct 2026): this page is a national overview built from the
// per-state domicile guides in this folder (web/src/guides/doc/*-domicile-
// certificate.ts, each checked 12-14 Oct 2026 against the state portal or
// district NIC service page named in its own header). Portal links in the
// table are the first official link of each state guide. Issuing officers
// named here are the ones those guides confirmed (e.g. Tehsildar in J&K and
// Maharashtra, Mamlatdar in Gujarat/Goa, Circle Officer in Jharkhand, DC/SDO
// for Assam PRC, DC office for Arunachal PRC). No national fee, time limit or
// validity exists, so none is given.
export const domicileCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "निवास प्रमाण पत्र" },
  ],
  docHi: "निवास प्रमाण पत्र",
  title: "अधिवास / निवास प्रमाण पत्र 2026",
  description: "अधिवास / निवास (Domicile) प्रमाण पत्र 2026: यह क्या है, कौन जारी करता है, किन कागज़ों की ज़रूरत पड़ती है, और हर राज्य/UT का ऑनलाइन पोर्टल व गाइड एक जगह।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "अधिवास / निवास प्रमाण पत्र (Domicile Certificate) 2026: कहां और कैसे बनता है",
  lead: "निवास या अधिवास प्रमाण पत्र (Domicile / Residence Certificate) <strong>राज्य सरकार</strong> का दस्तावेज़ है, जो बताता है कि आप उस राज्य या केंद्र शासित प्रदेश के निवासी हैं। इसे राज्य का राजस्व विभाग (आम तौर पर तहसीलदार, मामलतदार, अंचल अधिकारी या SDM/DC कार्यालय) जारी करता है। कोई एक राष्ट्रीय पोर्टल नहीं है; आवेदन, कागज़, फीस और नियम हर राज्य में अलग हैं, इसलिए नीचे की तालिका से अपना राज्य चुनें।",
  facts: [
    ["कौन जारी करता है", "राज्य/UT का राजस्व विभाग"],
    ["आवेदन", "राज्य का सेवा पोर्टल, CSC या तहसील कार्यालय"],
    ["फीस और समय", "हर राज्य में अलग"],
    ["अलग नाम", "Residence, PRC, Bonafide, मूल निवास"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र क्या है और कहां काम आता है",
      intro: "यह प्रमाण पत्र दिखाता है कि आप किसी राज्य/UT में तय समय से रह रहे हैं या वहां के मूल निवासी हैं। कितने साल रहना ज़रूरी है, यह हर राज्य का नियम तय करता है।",
      list: [
        "<strong>पढ़ाई:</strong> राज्य कोटे की सीटों में दाखिला और राज्य की छात्रवृत्ति।",
        "<strong>राज्य सरकार की नौकरी:</strong> जहां भर्ती में स्थानीय निवासियों के लिए आरक्षण या शर्त हो।",
        "<strong>राज्य की योजनाएं:</strong> कई राज्य योजनाओं में आवेदक का उसी राज्य का निवासी होना शर्त होती है।",
      ],
      callout: { kind: "info", html: "आधार कार्ड पते का सबूत है, पर <strong>निवास प्रमाण पत्र की जगह नहीं लेता</strong>। जहां फॉर्म में Domicile Certificate मांगा गया हो, वहां राज्य का जारी किया प्रमाण पत्र ही लगाएं।" },
    },
    {
      id: "alag-naam",
      title: "हर राज्य में नाम अलग हो सकता है",
      list: [
        "<strong>अरुणाचल प्रदेश और असम:</strong> Permanent Residence Certificate (PRC)।",
        "<strong>हिमाचल प्रदेश:</strong> Bonafide Himachali और Domicile, दोनों सेवाएं।",
        "<strong>छत्तीसगढ़ और मध्य प्रदेश:</strong> मूल निवास / मूल निवासी प्रमाण पत्र।",
        "<strong>महाराष्ट्र:</strong> Age, Nationality and Domicile Certificate।",
        "<strong>अंडमान और निकोबार:</strong> Local Certificate।",
        "<strong>कई राज्य:</strong> Residence Certificate या Resident Certificate।",
      ],
      html: "<p>फॉर्म में जिस नाम से प्रमाण पत्र मांगा गया हो, अपने राज्य की गाइड में देखें कि वह कौन सी सेवा है।</p>",
    },
    {
      id: "rajya",
      title: "राज्य के हिसाब से पोर्टल और पूरी गाइड",
      intro: "राज्य के नाम पर क्लिक करके उस राज्य की पूरी गाइड (कागज़, फीस, समय सीमा, अधिकारी) पढ़ें। दूसरा लिंक राज्य/ज़िले का आधिकारिक पेज है।",
      table: {
        head: ["राज्य / UT", "आधिकारिक पोर्टल / सेवा पेज"],
        rows: [
          ['<a href="/states/andaman-nicobar-domicile-certificate.html">अंडमान और निकोबार</a>', '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a>'],
          ['<a href="/states/andhra-pradesh-domicile-certificate.html">आंध्र प्रदेश</a>', '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a>'],
          ['<a href="/states/arunachal-pradesh-domicile-certificate.html">अरुणाचल प्रदेश</a>', '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a>'],
          ['<a href="/states/assam-domicile-certificate.html">असम</a>', '<a href="https://bongaigaon.assam.gov.in/information-and-services/apply-prc" target="_blank" rel="noopener nofollow">bongaigaon.assam.gov.in</a>'],
          ['<a href="/states/bihar-domicile-certificate.html">बिहार</a>', '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a>'],
          ['<a href="/states/chandigarh-domicile-certificate.html">चंडीगढ़</a>', '<a href="https://chandigarhdistrict.nic.in/service/residence-certificate/" target="_blank" rel="noopener nofollow">chandigarhdistrict.nic.in</a>'],
          ['<a href="/states/chhattisgarh-domicile-certificate.html">छत्तीसगढ़</a>', '<a href="https://sewasetu.cgstate.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.cgstate.gov.in</a>'],
          ['<a href="/states/dadra-nagar-haveli-daman-diu-domicile-certificate.html">दादरा और नगर हवेली एवं दमण और दीव</a>', '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a>'],
          ['<a href="/states/delhi-domicile-certificate.html">दिल्ली</a>', '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a>'],
          ['<a href="/states/goa-domicile-certificate.html">गोवा</a>', '<a href="https://www.goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a>'],
          ['<a href="/states/gujarat-domicile-certificate.html">गुजरात</a>', '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a>'],
          ['<a href="/states/haryana-domicile-certificate.html">हरियाणा</a>', '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a>'],
          ['<a href="/states/himachal-pradesh-domicile-certificate.html">हिमाचल प्रदेश</a>', '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a>'],
          ['<a href="/states/jammu-kashmir-domicile-certificate.html">जम्मू और कश्मीर</a>', '<a href="https://jansugam.jk.gov.in/" target="_blank" rel="noopener nofollow">jansugam.jk.gov.in</a>'],
          ['<a href="/states/jharkhand-domicile-certificate.html">झारखंड</a>', '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a>'],
          ['<a href="/states/karnataka-domicile-certificate.html">कर्नाटक</a>', '<a href="https://nadakacheri.karnataka.gov.in/" target="_blank" rel="noopener nofollow">nadakacheri.karnataka.gov.in</a>'],
          ['<a href="/states/kerala-domicile-certificate.html">केरल</a>', '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a>'],
          ['<a href="/states/ladakh-domicile-certificate.html">लद्दाख</a>', '<a href="https://domicile.ladakh.gov.in/" target="_blank" rel="noopener nofollow">domicile.ladakh.gov.in</a>'],
          ['<a href="/states/lakshadweep-domicile-certificate.html">लक्षद्वीप</a>', '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a>'],
          ['<a href="/states/madhya-pradesh-domicile-certificate.html">मध्य प्रदेश</a>', '<a href="https://mpedistrict.gov.in/" target="_blank" rel="noopener nofollow">mpedistrict.gov.in</a>'],
          ['<a href="/states/maharashtra-domicile-certificate.html">महाराष्ट्र</a>', '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a>'],
          ['<a href="/states/manipur-domicile-certificate.html">मणिपुर</a>', '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a>'],
          ['<a href="/states/meghalaya-domicile-certificate.html">मेघालय</a>', '<a href="https://megedistrict.gov.in/" target="_blank" rel="noopener nofollow">megedistrict.gov.in</a>'],
          ['<a href="/states/mizoram-domicile-certificate.html">मिज़ोरम</a>', '<a href="https://aizawl.nic.in/service/residence-certificate/" target="_blank" rel="noopener nofollow">aizawl.nic.in</a>'],
          ['<a href="/states/nagaland-domicile-certificate.html">नागालैंड</a>', '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a>'],
          ['<a href="/states/odisha-domicile-certificate.html">ओडिशा</a>', '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a>'],
          ['<a href="/states/puducherry-domicile-certificate.html">पुदुचेरी</a>', '<a href="https://edistrict.py.gov.in/" target="_blank" rel="noopener nofollow">edistrict.py.gov.in</a>'],
          ['<a href="/states/punjab-domicile-certificate.html">पंजाब</a>', '<a href="https://esewa.punjab.gov.in/" target="_blank" rel="noopener nofollow">esewa.punjab.gov.in</a>'],
          ['<a href="/states/rajasthan-domicile-certificate.html">राजस्थान</a>', '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">sso.rajasthan.gov.in</a>'],
          ['<a href="/states/sikkim-domicile-certificate.html">सिक्किम</a>', '<a href="https://mangan.nic.in/service/certificate-of-identification/" target="_blank" rel="noopener nofollow">mangan.nic.in</a>'],
          ['<a href="/states/tamil-nadu-domicile-certificate.html">तमिलनाडु</a>', '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in</a>'],
          ['<a href="/states/telangana-domicile-certificate.html">तेलंगाना</a>', '<a href="https://ts.meeseva.telangana.gov.in/meeseva/home.htm" target="_blank" rel="noopener nofollow">ts.meeseva.telangana.gov.in</a>'],
          ['<a href="/states/tripura-domicile-certificate.html">त्रिपुरा</a>', '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a>'],
          ['<a href="/states/uttar-pradesh-domicile-certificate.html">उत्तर प्रदेश</a>', '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a>'],
          ['<a href="/states/uttarakhand-domicile-certificate.html">उत्तराखंड</a>', '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a>'],
          ['<a href="/states/west-bengal-domicile-certificate.html">पश्चिम बंगाल</a>', '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">edistrict.wb.gov.in</a>'],
        ],
      },
    },
    {
      id: "avedan",
      title: "आवेदन का सामान्य तरीका",
      steps: [
        "ऊपर की तालिका से अपने राज्य का पोर्टल खोलें और अकाउंट बनाकर लॉगिन करें। ऑनलाइन न कर पाएं तो <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> या तहसील/मामलतदार/अंचल कार्यालय जाएं।",
        "राजस्व विभाग की सेवाओं में Domicile / Residence / PRC प्रमाण पत्र चुनें।",
        "फॉर्म भरें, मांगे गए कागज़ अपलोड करें और फीस दिखे तो भरें।",
        "आवेदन संख्या संभाल कर रखें। ज़रूरत हो तो पटवारी/लेखपाल/राजस्व निरीक्षक जांच करते हैं।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें। कई राज्यों का प्रमाण पत्र DigiLocker में भी आता है।",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर कौन से कागज़ लगते हैं",
      intro: "सही सूची राज्य के पोर्टल पर ही दिखती है। तैयारी के लिए ये कागज़ अक्सर मांगे जाते हैं:",
      list: [
        "पहचान पत्र (जैसे आधार) और फोटो।",
        "राज्य में रहने का सबूत: राशन कार्ड, वोटर कार्ड, बिजली/पानी का बिल, ज़मीन या मकान के कागज़, किराया अनुबंध।",
        "जन्म या स्कूल का सबूत, अगर राज्य जन्म/पढ़ाई के आधार पर निवास मानता है।",
        "कुछ राज्यों में स्व-घोषणा या शपथ-पत्र, और पिता/परिवार के निवास का प्रमाण।",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है। पोर्टल या कार्यालय जो कागज़ मांगे, वही मान्य है। शपथ-पत्र के बारे में: <a href=\"/affidavit/self-declaration.html\">स्व-घोषणा पत्र</a>।" },
    },
    {
      id: "galtiyan",
      title: "आवेदन अटकने की आम वजहें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["राज्य में रहने के साल पूरे नहीं", "अपने राज्य की गाइड में शर्त देखें; पुराने पते के कागज़ भी लगाएं"],
          ["पते के कागज़ में नाम/पता अलग", "आधार और दूसरे कागज़ों में पता एक जैसा करवाएं"],
          ["गलत सेवा चुनी", "फॉर्म में मांगा गया नाम (Domicile, PRC, Residence) देखकर ही सेवा चुनें"],
          ["धुंधले स्कैन", "साफ स्कैन, सही साइज़ में अपलोड करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker (कई राज्यों के प्रमाण पत्र डाउनलोड)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "निवास प्रमाण पत्र कौन जारी करता है?", a: "राज्य या केंद्र शासित प्रदेश का राजस्व विभाग। अधिकारी राज्य के हिसाब से अलग हैं, जैसे तहसीलदार, मामलतदार, अंचल अधिकारी या SDM/DC कार्यालय।" },
    { q: "क्या पूरे देश के लिए एक ही ऑनलाइन पोर्टल है?", a: "नहीं। हर राज्य का अपना सेवा पोर्टल है। ऊपर की तालिका में हर राज्य/UT का पोर्टल और हमारी गाइड दी गई है।" },
    { q: "निवास प्रमाण पत्र की फीस और समय कितना है?", a: "यह हर राज्य में अलग है। अपने राज्य की गाइड या पोर्टल पर आवेदन करते समय फीस और समय सीमा देखें।" },
    { q: "क्या आधार कार्ड से निवास प्रमाण पत्र का काम चल जाएगा?", a: "आधार पते का सबूत है, पर जहां Domicile Certificate मांगा गया हो, वहां राज्य का जारी किया प्रमाण पत्र ही लगाना होता है।" },
  ],
  related: [
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "सभी राज्य" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/affidavit/self-declaration.html", emoji: "✍️", title: "स्व-घोषणा पत्र", text: "कब और कैसे" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन फॉर्म भरवाने के लिए" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  aside: [
    { href: "#rajya", label: "🗺️ अपना राज्य चुनें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
