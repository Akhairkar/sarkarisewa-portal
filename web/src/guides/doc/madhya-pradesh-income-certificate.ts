import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; mpedistrict.gov.in and most MP district sites
// were not reachable from our checker):
// - anuppur.nic.in > Services > "Issuance of income certificate due to legal
//   obligation": apply via mpedistrict.gov.in citizen login or Lok Seva Kendra
//   (Anuppur, Kotma, Jaithari, Pushprajgarh). Same site lists the caste
//   (SC/ST, OBC) and domicile services.
// - Facts already verified for madhya-pradesh-caste-certificate.ts: Lok Seva
//   Kendra / mpedistrict.gov.in as the application route, services under the
//   MP Lok Sewaon ke Pradan ki Guarantee law, Samagra ID and Aadhaar on the
//   revenue certificate forms.
// Left out (not confirmable on an official page we could open): fee, time
// limit in days, issuing officer named in an official document, validity,
// document list for the income certificate, helpline numbers. The old page
// description stated a fee ("₹0 / ₹30 Lok Seva Kendra"), which we could not
// confirm, so the description was rewritten.
export const madhyaPradeshIncomeCertificate: DocGuide = {
  state: { slug: "madhya-pradesh", hi: "मध्य प्रदेश" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Madhya Pradesh Income Certificate 2026: Apply Online",
  description: "मध्य प्रदेश आय प्रमाण पत्र 2026: MP e-District (mpedistrict.gov.in) या लोक सेवा केंद्र से आवेदन। लोक सेवा गारंटी, समग्र ID, ज़रूरी कागज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मध्य प्रदेश आय प्रमाण पत्र 2026: लोक सेवा केंद्र और MP e-District से आवेदन",
  lead: "मध्य प्रदेश में आय प्रमाण पत्र लोक सेवा गारंटी कानून के तहत मिलने वाली सेवा है। आवेदन नज़दीकी लोक सेवा केंद्र में या MP e-District पोर्टल (mpedistrict.gov.in) पर citizen login से होता है। ज़िला वेबसाइटों पर यह सेवा \"Issuance of income certificate due to legal obligation\" (कानूनी बाध्यता के कारण आय प्रमाण पत्र) नाम से दी गई है।",
  facts: [
    ["आवेदन", "लोक सेवा केंद्र / mpedistrict.gov.in"],
    ["कानून", "म.प्र. लोक सेवाओं के प्रदान की गारंटी"],
    ["फॉर्म में", "समग्र ID और आधार नंबर"],
    ["स्टेटस", "पावती के आवेदन क्रमांक से"],
  ],
  notice: "<strong>\"कानूनी बाध्यता\" का मतलब:</strong> यह प्रमाण पत्र तब बनवाएं जब किसी योजना, छात्रवृत्ति, दाखिले या भर्ती के नियम में आय प्रमाण पत्र मांगा गया हो। बिना ज़रूरत हर साल बनवाने की बजाय पहले देखें कि संस्था कौन सा और कितना पुराना प्रमाण पत्र मानती है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। यह छात्रवृत्ति, फीस माफी, आय पर आधारित योजनाओं और कुछ भर्तियों में मांगा जाता है।",
      callout: { kind: "info", html: "OBC आरक्षण के लिए आय प्रमाण पत्र नहीं, OBC जाति प्रमाण पत्र (क्रीमी लेयर की घोषणा के साथ) लगता है: <a href=\"/states/madhya-pradesh-caste-certificate.html\">मध्य प्रदेश जाति प्रमाण पत्र गाइड</a>। EWS आरक्षण के लिए आय और संपत्ति वाला अलग EWS प्रमाण पत्र चाहिए; लोक सेवा केंद्र पर सही सेवा पूछकर ही आवेदन करें।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "आय प्रमाण पत्र की आधिकारिक कागज़-सूची हम पोर्टल पर नहीं खोल पाए। लोक सेवा केंद्र पर फॉर्म के साथ जो मांगा जाए वही दें। आम तौर पर ये पास रखें:",
      list: [
        "<strong>समग्र ID (समग्र सुरक्षा क्रमांक)</strong> और <strong>आधार नंबर</strong>: म.प्र. के राजस्व प्रमाण पत्रों के फॉर्म में इन्हें भरने की जगह होती है",
        "<strong>आवेदक की फोटो</strong> और पहचान पत्र",
        "<strong>आय का सबूत</strong>: नौकरी हो तो वेतन पर्ची, पेंशन का कागज़, आयकर रिटर्न (ITR), या खेती की ज़मीन का रिकॉर्ड (खसरा/B-1)",
        "<strong>आय की स्व-घोषणा</strong>, अगर फॉर्म में मांगी जाए",
      ],
      callout: { kind: "warn", html: "आय की घोषणा सच-सच करें। गलत जानकारी पर प्रमाण पत्र रद्द हो सकता है और कार्रवाई भी हो सकती है। स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        "अपने <strong>नज़दीकी लोक सेवा केंद्र</strong> (ज़्यादातर तहसील परिसर में) जाएं, या <a href=\"https://mpedistrict.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mpedistrict.gov.in</a> पर citizen login करें।",
        "आय प्रमाण पत्र की सेवा चुनें (ज़िला साइटों पर नाम: <strong>Issuance of income certificate due to legal obligation</strong>)।",
        "फॉर्म में नाम, पता, समग्र ID, आधार नंबर और परिवार की आय की जानकारी भरें।",
        "फोटो और आय के कागज़ लगाकर/अपलोड करके आवेदन जमा करें।",
        "<strong>पावती (acknowledgement) का आवेदन क्रमांक</strong> संभालकर रखें; इसी से स्टेटस देखा जाता है।",
      ],
      callout: { kind: "ok", html: "स्कैन छोटा करना हो तो <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें। लोक सेवा केंद्र पर लगने वाला शुल्क आवेदन से पहले वहीं पूछ लें और रसीद लें।" },
    },
    {
      id: "status",
      title: "स्टेटस, प्रमाण पत्र और समय सीमा",
      list: [
        "पावती के आवेदन क्रमांक से <a href=\"https://mpedistrict.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mpedistrict.gov.in</a> पर स्थिति देखें, या उसी लोक सेवा केंद्र पर पूछें।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से या लोक सेवा केंद्र से लें। नाम, पिता का नाम और आय की राशि ज़रूर जांच लें।",
      ],
      callout: { kind: "warn", html: "लोक सेवा गारंटी कानून में हर अधिसूचित सेवा की समय सीमा तय होती है। आय प्रमाण पत्र की समय सीमा और शुल्क पोर्टल या लोक सेवा केंद्र पर सेवा के विवरण में देखें; हम इन्हें किसी खुलने वाले आधिकारिक पेज पर पुष्ट नहीं कर पाए। देर होने पर उसी कानून में अपील की जा सकती है।" },
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "आय प्रमाण पत्र की वैधता अवधि हमें किसी आधिकारिक पेज पर नहीं मिली। आय हर साल बदलती है, इसलिए छात्रवृत्ति और योजनाएं अक्सर हाल का प्रमाण पत्र मांगती हैं। आवेदन से पहले उस योजना/संस्था के नियम में देखें कि कितना पुराना प्रमाण पत्र मान्य है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["समग्र ID में नाम/परिवार की जानकारी गलत", "पहले समग्र पोर्टल या पंचायत/वार्ड कार्यालय से समग्र में सुधार कराएं"],
          ["आय का कोई सबूत नहीं", "वेतन पर्ची, पेंशन कागज़, ITR या खेती का रिकॉर्ड लगाएं"],
          ["EWS के लिए आय प्रमाण पत्र बनवा लिया", "EWS वाली अलग सेवा में आवेदन करें"],
          ["आवेदन क्रमांक खो गया", "जिस लोक सेवा केंद्र से आवेदन किया था, वहां मोबाइल/नाम से पता कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://mpedistrict.gov.in/", title: "MP e-District / लोक सेवा गारंटी पोर्टल" },
    { href: "https://anuppur.nic.in/en/service/issuance-of-income-certificate-due-to-legal-obligation/", title: "आय प्रमाण पत्र सेवा (ज़िला अनूपपुर)" },
    { href: "https://samagra.gov.in/", title: "समग्र पोर्टल (समग्र ID)" },
  ],
  faq: [
    { q: "मध्य प्रदेश में आय प्रमाण पत्र कहां बनता है?", a: "नज़दीकी लोक सेवा केंद्र में या MP e-District पोर्टल mpedistrict.gov.in पर citizen login से आवेदन करें।" },
    { q: "आय प्रमाण पत्र के फॉर्म में समग्र ID क्यों चाहिए?", a: "मध्य प्रदेश के राजस्व प्रमाण पत्रों के फॉर्म में हितग्राही का समग्र सुरक्षा क्रमांक (समग्र ID) और आधार नंबर भरने की जगह होती है। समग्र में जानकारी सही होगी तो आवेदन आसानी से आगे बढ़ेगा।" },
    { q: "MP आय प्रमाण पत्र कितने दिन में बनता है और फीस कितनी है?", a: "यह लोक सेवा गारंटी कानून की सेवा है, जिसमें समय सीमा तय होती है। हम समय सीमा और शुल्क किसी खुलने वाले आधिकारिक पेज पर पुष्ट नहीं कर पाए, इसलिए आवेदन के समय पोर्टल या लोक सेवा केंद्र पर सेवा का विवरण देखें।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "पावती में लिखे आवेदन क्रमांक से mpedistrict.gov.in पर, या उसी लोक सेवा केंद्र पर पूछकर।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। EWS आरक्षण के लिए आय और संपत्ति वाला अलग EWS प्रमाण पत्र बनता है।" },
  ],
  related: [
    { href: "/states/madhya-pradesh-caste-certificate.html", emoji: "📜", title: "मध्य प्रदेश जाति प्रमाण पत्र", text: "SC/ST/OBC, 1950 और 1984 की शर्त" },
    { href: "/states/madhya-pradesh-domicile-certificate.html", emoji: "🏠", title: "मध्य प्रदेश मूल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://mpedistrict.gov.in/", label: "📝 MP e-District पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
