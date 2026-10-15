import type { DocGuide } from "./types";

// National facts (checked 14 Oct 2026):
// - Registration of Births and Deaths Act 1969 as amended by the Amendment Act
//   2023 (Gazette, 11 Aug 2023; in force 1 Oct 2023 by S.O. 4058(E) of 13 Sep
//   2023): s.10(2) medical institution must give the cause-of-death certificate
//   free to the Registrar and a copy to the nearest relative; s.10(3) doctor who
//   attended a death outside an institution issues it free; s.13(2) 30 days to
//   1 year = written permission of the District Registrar or other authority +
//   fee + self-attested document; s.25A appeal within 30 days (Registrar ->
//   District Registrar -> Chief Registrar), decided within 90 days.
// - Registration of Births and Deaths (Amendment) Act 2026 (Act 12 of 2026,
//   Gazette 6 Aug 2026) in force 1 Oct 2026 (S.O. 5081(E) of 16 Sep 2026; also
//   reported by newsonair.gov.in, ThePrint/PTI): 1-2 years late = order of DM /
//   SDM / Executive Magistrate authorised by the DM; over 2 years = order of a
//   Judicial Magistrate of the first class; fee as prescribed.
// - ORGI 'FAQ of CRS' (dc.crsorgi.gov.in): 21-day normal period, no fee within
//   21 days, delayed registration under s.13; head of household / nearest
//   relative reports a home death, the medical officer in charge reports an
//   institutional death; registration at place of occurrence; one free copy to
//   the informant (s.12), more copies on fee (s.17); corrections under s.15.
// - Model forms (CRS 2019, ORGI): Form 2 = death report; Form 4 = medical
//   certificate of cause of death for hospital in-patients; Form 4A = for
//   non-institutional deaths.
// - CRS portal (crsorgi.gov.in -> dc.crsorgi.gov.in) page text: online reporting
//   incl. delayed events, fee payment, status tracking, correction; certificate
//   download with Application Reference No. + OTP to the registered mobile;
//   fees for delayed registration and extracts vary by State Rules.
// - Per our birth page: services.india.gov.in 'Register with State Portal of
//   Sikkim to avail online services'; Sikkim RBD Rules 1999 (Executive
//   Magistrate / SDM order after a year, legal-text summary); registrar
//   locations from community guides (marked as reports).
// Left out: late-fee amounts, exact portal, phone numbers. Old description's
// 'ServicePlus Sikkim' and 'official fee' removed.

export const sikkimDeathCertificate: DocGuide = {
  "state": {
    "slug": "sikkim",
    "hi": "सिक्किम"
  },
  "doc": "death-certificate",
  "docHi": "मृत्यु प्रमाण पत्र",
  "title": "Sikkim Death Certificate 2026: Apply & Status",
  "description": "सिक्किम मृत्यु प्रमाण पत्र 2026: 21 दिन में निःशुल्क पंजीकरण, स्थानीय रजिस्ट्रार, मृत्यु के कारण का प्रमाण पत्र, CRS पोर्टल और देर से पंजीकरण के नियम।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "सिक्किम मृत्यु प्रमाण पत्र 2026: पंजीकरण, ज़रूरी कागज़, डाउनलोड और देर से पंजीकरण",
  "lead": "सिक्किम में मृत्यु का पंजीकरण 21 दिन के भीतर कराना है और इस अवधि में कोई शुल्क नहीं। नियम सिक्किम जन्म-मृत्यु पंजीकरण नियम 1999 और केंद्रीय अधिनियम के हैं। प्रमाण पत्र मृत्यु वाले क्षेत्र का स्थानीय रजिस्ट्रार देता है; ऑनलाइन रास्ता आपके क्षेत्र में कौन सा चालू है, यह रजिस्ट्रार से पूछें।",
  "facts": [
    [
      "नियम",
      "सिक्किम जन्म-मृत्यु पंजीकरण नियम 1999"
    ],
    [
      "निःशुल्क अवधि",
      "मृत्यु के 21 दिन के भीतर"
    ],
    [
      "पंजीकरण करता है",
      "मृत्यु वाले क्षेत्र का स्थानीय रजिस्ट्रार"
    ],
    [
      "ऑनलाइन",
      "राज्य पोर्टल / CRS: स्थानीय रजिस्ट्रार से पुष्टि करें"
    ]
  ],
  "sections": [
    {
      "id": "kya-hai",
      "title": "मृत्यु प्रमाण पत्र क्या है और क्यों ज़रूरी है",
      "intro": "मृत्यु प्रमाण पत्र किसी व्यक्ति की मृत्यु की तारीख और जगह का कानूनी सबूत है। जन्म और मृत्यु पंजीकरण अधिनियम 1969 के तहत हर मृत्यु का पंजीकरण <strong>21 दिन के भीतर</strong> होना चाहिए, और इस अवधि में पंजीकरण निःशुल्क है। यह प्रमाण पत्र इन कामों में लगता है:",
      "list": [
        "<strong>संपत्ति और विरासत:</strong> ज़मीन-मकान का नामांतरण (mutation) और वारिस प्रमाण पत्र।",
        "<strong>बीमा और बैंक:</strong> बीमा दावा, बैंक खाते और जमा राशि नॉमिनी/वारिस को दिलाना।",
        "<strong>पेंशन:</strong> परिवार पेंशन शुरू कराना और मृतक की पेंशन बंद कराना।",
        "<strong>राशन कार्ड और दूसरे रिकॉर्ड:</strong> मृतक का नाम हटवाना।"
      ]
    },
    {
      "id": "kaun",
      "title": "मृत्यु की सूचना कौन देता है",
      "list": [
        "<strong>घर पर मृत्यु:</strong> घर का मुखिया, या मौजूद सबसे नज़दीकी रिश्तेदार, या उनकी गैरमौजूदगी में वहां मौजूद सबसे बड़ा व्यक्ति स्थानीय रजिस्ट्रार को सूचना देगा। आशा/ANM/आंगनवाड़ी कार्यकर्ता जैसे सूचनाकर्ता भी सूचना दे सकते हैं।",
        "<strong>अस्पताल/स्वास्थ्य केंद्र में मृत्यु:</strong> संस्था का प्रभारी चिकित्सा अधिकारी सूचना भेजता है। परिवार को अलग से रिपोर्ट नहीं करनी पड़ती, पर अस्पताल से पूछ लें कि पंजीकरण हुआ या नहीं।",
        "<strong>किस रजिस्ट्रार के पास:</strong> पंजीकरण उसी क्षेत्र में होता है <strong>जहां मृत्यु हुई</strong>, न कि जहां मृतक रहता था।"
      ]
    },
    {
      "id": "kahan",
      "title": "सिक्किम में पंजीकरण कौन करता है",
      "intro": "सिक्किम में रजिस्ट्रार अस्पतालों, स्वास्थ्य केंद्रों और स्थानीय निकायों में बताए जाते हैं। स्रोत अलग-अलग बातें कहते हैं, इसलिए जाने से पहले पूछ लें।",
      "list": [
        "<strong>अस्पताल/PHC में मृत्यु:</strong> संस्था से पंजीकरण की स्थिति पूछें; वही रजिस्ट्रार के पास सूचना भेजती है।",
        "<strong>गंगटोक:</strong> रिपोर्टों के अनुसार नगर निगम/मुख्य रजिस्ट्रार कार्यालय का रजिस्ट्रार।",
        "<strong>अन्य ज़िले:</strong> स्थानीय नगर निकाय या पंचायत का रजिस्ट्रार।",
        "<strong>1 साल से ऊपर की देरी:</strong> 1999 के नियमों में कार्यकारी मजिस्ट्रेट/SDM का आदेश था; 1 अक्टूबर 2026 से केंद्रीय संशोधन लागू है (नीचे तालिका)।"
      ]
    },
    {
      "id": "karan",
      "title": "मृत्यु के कारण का चिकित्सा प्रमाण पत्र (Form 4 / 4A)",
      "intro": "2023 के संशोधन के बाद धारा 10 में यह साफ है:",
      "list": [
        "<strong>अस्पताल में मृत्यु (Form 4):</strong> हर चिकित्सा संस्था, सरकारी हो या निजी, मृत्यु के कारण का प्रमाण पत्र <strong>मुफ्त</strong> में रजिस्ट्रार को देगी और उसकी एक प्रति <strong>नज़दीकी रिश्तेदार</strong> को देगी।",
        "<strong>घर या दूसरी जगह मृत्यु (Form 4A):</strong> अगर आखिरी बीमारी में किसी डॉक्टर ने इलाज किया था, तो वह डॉक्टर कारण का प्रमाण पत्र मुफ्त में सूचना देने वाले को देगा। इसे मृत्यु की रिपोर्ट (Form 2) के साथ रजिस्ट्रार को दें।"
      ],
      "callout": {
        "kind": "info",
        "html": "मृत्यु के कारण वाला चिकित्सा प्रमाण पत्र और रजिस्ट्रार का <strong>मृत्यु प्रमाण पत्र</strong> अलग-अलग कागज़ हैं। बैंक, बीमा और संपत्ति के कामों में रजिस्ट्रार का मृत्यु प्रमाण पत्र चाहिए।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन: राज्य पोर्टल और CRS",
      "intro": "पोर्टल पर आम नागरिक (General Public) का लॉगिन मुख्य रूप से <strong>घर पर हुई मृत्यु</strong> की रिपोर्ट के लिए है। अस्पताल या स्वास्थ्य केंद्र में हुई मृत्यु वही संस्था दर्ज करती है। राष्ट्रीय सेवा-सूची में 'सिक्किम राज्य पोर्टल' पर पंजीकरण करके प्रमाण पत्र सेवाएं लेने का उल्लेख है, पर मृत्यु पंजीकरण की सटीक सेवा हम पुष्ट नहीं कर सके। नीचे राष्ट्रीय CRS पोर्टल का तरीका है; अपने रजिस्ट्रार से पूछें कि सिक्किम में कौन सा चैनल चालू है।",
      "steps": [
        "<a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> खोलें और <strong>General Public</strong> वाले विकल्प से साइन-अप करके मोबाइल नंबर से लॉगिन करें।",
        "मृत्यु की घटना दर्ज करने का विकल्प चुनें और मृतक, मृत्यु की तारीख-जगह और सूचना देने वाले का विवरण भरें।",
        "मृत्यु के कारण का चिकित्सा प्रमाण पत्र (अगर है) और पहचान के कागज़ अपलोड करें, फिर आवेदन जमा करें।",
        "आवेदन संदर्भ संख्या सुरक्षित रखें। रजिस्ट्रार की जांच और स्वीकृति के बाद प्रमाण पत्र इसी संख्या और OTP से डाउनलोड होता है।"
      ]
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "intro": "रजिस्ट्रार के हिसाब से सूची थोड़ी बदल सकती है। आमतौर पर ये तैयार रखें:",
      "list": [
        "<strong>मृत्यु के कारण का चिकित्सा प्रमाण पत्र</strong> (Form 4 या 4A), अगर डॉक्टर ने इलाज किया था, या अस्पताल की मृत्यु पर्ची।",
        "<strong>मृतक का पहचान पत्र:</strong> आधार, वोटर कार्ड या राशन कार्ड (जो उपलब्ध हो)।",
        "<strong>सूचना देने वाले का पहचान पत्र</strong> और मृतक से रिश्ता।",
        "<strong>मृतक का पता:</strong> राशन कार्ड, बिजली बिल या निवास का कोई कागज़।",
        "<strong>अंतिम संस्कार/दफन की रसीद,</strong> अगर रजिस्ट्रार मांगे।",
        "<strong>देर से पंजीकरण में:</strong> स्वयं-सत्यापित कागज़/हलफनामा और अनुमति या मजिस्ट्रेट का आदेश (नीचे तालिका)।"
      ]
    },
    {
      "id": "samay",
      "title": "देर से पंजीकरण: समय और शुल्क",
      "table": {
        "head": [
          "कितनी देरी से",
          "क्या लगता है"
        ],
        "rows": [
          [
            "<strong>21 दिन के भीतर</strong>",
            "पंजीकरण <strong>निःशुल्क</strong>। यही सबसे आसान रास्ता है।"
          ],
          [
            "<strong>21 से 30 दिन</strong>",
            "स्थानीय रजिस्ट्रार देरी शुल्क (late fee) लेकर पंजीकरण करता है। राशि राज्य के नियमों में तय है; रजिस्ट्रार से पूछें।"
          ],
          [
            "<strong>30 दिन से 1 साल</strong>",
            "ज़िला रजिस्ट्रार (या तय अधिकारी) की <strong>लिखित अनुमति</strong>, शुल्क और स्वयं-सत्यापित (self-attested) कागज़ (2023 के संशोधन के बाद धारा 13(2))।"
          ],
          [
            "<strong>1 साल से 2 साल</strong>",
            "1 अक्टूबर 2026 से लागू संशोधन के अनुसार <strong>ज़िला मजिस्ट्रेट (DM), उप-मंडल मजिस्ट्रेट (SDM) या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट</strong> का आदेश (मृत्यु की सच्चाई जांचने के बाद) और शुल्क।"
          ],
          [
            "<strong>2 साल से अधिक</strong>",
            "उसी संशोधन के अनुसार <strong>प्रथम श्रेणी न्यायिक मजिस्ट्रेट (JMFC)</strong> का आदेश और शुल्क।"
          ]
        ]
      },
      "html": "<p>शुल्क की राशि राज्य के जन्म-मृत्यु पंजीकरण नियमों से तय होती है। इस पेज पर कोई राशि तभी लिखी है जब वह आधिकारिक स्रोत से पुष्ट हो सकी; बाकी के लिए रजिस्ट्रार से पूछें।</p>"
    },
    {
      "id": "status",
      "title": "डाउनलोड, अतिरिक्त प्रति, सुधार और अपील",
      "list": [
        "<strong>डाउनलोड:</strong> CRS पोर्टल से पंजीकृत मृत्यु का प्रमाण पत्र आवेदन संदर्भ संख्या (Application Reference No.) डालकर और पंजीकृत मोबाइल पर आया OTP भरकर डाउनलोड होता है। पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>।",
        "<strong>पहली प्रति मुफ्त:</strong> अधिनियम की धारा 12 के अनुसार सूचना देने वाले को प्रमाण पत्र की एक प्रति निःशुल्क मिलती है। बैंक, बीमा, पेंशन और संपत्ति के कामों में कई प्रतियां लगती हैं; अतिरिक्त प्रतियां धारा 17 के तहत शुल्क देकर मिलती हैं।",
        "<strong>सुधार:</strong> नाम, तारीख या पते में गलती हो तो उसी रजिस्ट्रार को लिखित आवेदन और सबूत दें जिसने पंजीकरण किया (धारा 15 और राज्य के नियम)।",
        "<strong>अपील:</strong> रजिस्ट्रार के फैसले से असहमत हों तो 30 दिन के भीतर ज़िला रजिस्ट्रार के पास, और ज़िला रजिस्ट्रार के फैसले के खिलाफ मुख्य रजिस्ट्रार के पास अपील कर सकते हैं (धारा 25A); अपील का फैसला 90 दिन में होना है।"
      ]
    },
    {
      "id": "baad-me",
      "title": "प्रमाण पत्र मिलने के बाद के काम",
      "list": [
        "<strong>वारिस/उत्तराधिकार:</strong> संपत्ति, बैंक और बीमा के लिए वारिस प्रमाण पत्र की ज़रूरत पड़ सकती है: <a href=\"/service/legal-heir-certificate.html\">वारिस प्रमाण पत्र की जानकारी</a>।",
        "<strong>राशन कार्ड:</strong> मृतक का नाम राशन कार्ड से हटवाएं: <a href=\"/states/sikkim-ration-card.html\">सिक्किम राशन कार्ड</a>।",
        "<strong>पेंशन और बैंक:</strong> पेंशन देने वाले विभाग/बैंक को मृत्यु प्रमाण पत्र की प्रति देकर सूचना दें, ताकि बाद में वसूली की समस्या न हो।"
      ]
    },
    {
      "id": "rejection",
      "title": "आवेदन क्यों अटकता है, और क्या करें",
      "table": {
        "head": [
          "वजह",
          "हल"
        ],
        "rows": [
          [
            "सूचना 21 दिन के बाद दी गई",
            "ऊपर की तालिका के अनुसार देरी शुल्क, अनुमति या मजिस्ट्रेट का आदेश लें"
          ],
          [
            "गलत रजिस्ट्रार के पास गए",
            "मृत्यु जहां हुई, उसी क्षेत्र के रजिस्ट्रार के पास पंजीकरण होता है"
          ],
          [
            "मृत्यु के कारण का प्रमाण पत्र नहीं है",
            "अस्पताल से Form 4 की प्रति मांगें; घर पर मृत्यु हो और डॉक्टर ने इलाज किया था तो उनसे Form 4A लें"
          ],
          [
            "नाम/उम्र आधार या दूसरे कागज़ों से अलग",
            "पहचान पत्र जैसा ही नाम लिखें; गलती हो तो धारा 15 के तहत सुधार का आवेदन दें"
          ],
          [
            "अस्पताल से पंजीकरण की जानकारी नहीं मिली",
            "अस्पताल से पंजीकरण संख्या/आवेदन संदर्भ संख्या पूछें"
          ]
        ]
      }
    },
    {
      "id": "help",
      "title": "मदद कहां मिलेगी",
      "intro": "स्थानीय रजिस्ट्रार से हल न हो तो ज़िला रजिस्ट्रार और मुख्य रजिस्ट्रार को लिखित आवेदन दें। विभागों के फोन नंबर यहां नहीं दिए: वे हमें आधिकारिक पेज पर पुष्ट नहीं मिले।"
    }
  ],
  "official": [
    {
      "href": "https://services.india.gov.in/service/detail/register-with-state-portal-of-sikkim-to-avail-online-services",
      "title": "सिक्किम राज्य पोर्टल पर पंजीकरण (services.india.gov.in)"
    },
    {
      "href": "https://crsorgi.gov.in/",
      "title": "CRS पोर्टल (Registrar General of India): जन्म-मृत्यु पंजीकरण"
    },
    {
      "href": "https://dc.crsorgi.gov.in/assets/download/FAQ_of_CRS_Latest.pdf",
      "title": "CRS के सवाल-जवाब (Registrar General of India, PDF)"
    },
    {
      "href": "https://www.thc.nic.in/Tripura%20State%20Lagislation%20Acts/The%20Registration%20of%20Births%20and%20Deaths%20Act,%201969.pdf",
      "title": "जन्म और मृत्यु पंजीकरण अधिनियम 1969 (PDF)"
    }
  ],
  "faq": [
    {
      "q": "सिक्किम में मृत्यु प्रमाण पत्र कहां बनता है?",
      "a": "मृत्यु जहां हुई, उस क्षेत्र के स्थानीय रजिस्ट्रार के पास। अस्पताल में मृत्यु हो तो अस्पताल सूचना भेजता है; पंजीकरण की स्थिति वहीं से पूछें।"
    },
    {
      "q": "क्या सिक्किम में ServicePlus पर मृत्यु प्रमाण पत्र बनता है?",
      "a": "हमें कोई आधिकारिक पेज नहीं मिला जो यह पुष्ट करे। राष्ट्रीय CRS पोर्टल या स्थानीय रजिस्ट्रार का रास्ता अपनाएं।"
    },
    {
      "q": "मृत्यु के कितने दिन में पंजीकरण कराना चाहिए?",
      "a": "21 दिन के भीतर। इस अवधि में पंजीकरण निःशुल्क है। उसके बाद देरी शुल्क और, देरी बढ़ने पर, ज़िला रजिस्ट्रार की अनुमति या मजिस्ट्रेट का आदेश लगता है।"
    },
    {
      "q": "1 साल से ज़्यादा देर हो गई तो क्या करें?",
      "a": "1 अक्टूबर 2026 से लागू संशोधन के अनुसार 1 से 2 साल की देरी में DM, SDM या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश, और 2 साल से अधिक देरी में प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश चाहिए। रजिस्ट्रार से फॉर्म और कागज़ों की सूची लेकर आवेदन करें।"
    },
    {
      "q": "क्या मृत्यु प्रमाण पत्र की प्रति के पैसे लगते हैं?",
      "a": "सूचना देने वाले को एक प्रति मुफ्त मिलती है (धारा 12)। उससे ज़्यादा प्रतियां तय शुल्क देकर मिलती हैं (धारा 17)।"
    }
  ],
  "related": [
    {
      "href": "/states/sikkim-birth-certificate.html",
      "emoji": "👶",
      "title": "सिक्किम जन्म प्रमाण पत्र",
      "text": "जन्म का पंजीकरण"
    },
    {
      "href": "/service/legal-heir-certificate.html",
      "emoji": "📜",
      "title": "वारिस प्रमाण पत्र",
      "text": "संपत्ति, बैंक और बीमा के लिए"
    },
    {
      "href": "/states/sikkim-ration-card.html",
      "emoji": "🍚",
      "title": "सिक्किम राशन कार्ड",
      "text": "सदस्य का नाम हटाना/बदलाव"
    },
    {
      "href": "/service/death-certificate.html",
      "emoji": "🕊️",
      "title": "मृत्यु प्रमाण पत्र: पूरी जानकारी",
      "text": "सभी राज्य"
    },
    {
      "href": "/tools/document-compressor.html",
      "emoji": "🗜️",
      "title": "फोटो / Document Resizer",
      "text": "अपलोड के साइज़ में, फ्री"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में मृत्यु प्रमाण पत्र",
  "aside": [
    {
      "href": "https://crsorgi.gov.in/",
      "label": "📝 CRS पोर्टल खोलें"
    },
    {
      "href": "/service/legal-heir-certificate.html",
      "label": "📜 वारिस प्रमाण पत्र"
    }
  ]
};
