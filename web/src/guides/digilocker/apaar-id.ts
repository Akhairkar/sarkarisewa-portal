import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - apaar.education.gov.in/faqs: 12-digit ID; "One Nation, One Student ID";
//   school students get it through the school (verification, parental consent
//   for minors, authentication); prerequisites (name in UDISE+ must match
//   Aadhaar; PEN mandatory); mandatory fields (PEN, name, DOB, gender, mobile,
//   mother's and father's name, name as per Aadhaar, Aadhaar number); failure
//   on demographic mismatch; once generated it is pushed to DigiLocker and the
//   virtual APAAR ID card is in Issued Documents; status in the UDISE+ APAAR
//   module; helpline 1800 889 3511 (site header).
// - PIB factsheet "Academic Bank of Credits and APAAR" (July 2026,
//   static.pib.gov.in/.../doc202675912501.pdf): ABC ID renamed APAAR ID,
//   linked to Aadhaar and DigiLocker; IDs can be generated at the nearest CSC;
//   institutions upload credit data to the NAD-ABC portal against APAAR ID;
//   UGC mandated HEIs to upload credit data by 30 June 2026.
// - DigiLocker Ask our Experts (18 Oct 2024): students under 16 cannot create
//   APAAR directly in DigiLocker and should approach the school; college not in
//   the dropdown -> create under "None"; if Aadhaar-linked mobile is with
//   parents, PAN or driving licence can be used to create ABC ID on the ABC
//   website; ID details come from Aadhaar, credits are uploaded only by the
//   university; queries at nad-support.digilocker.gov.in.
// - API Setu directory: issuer "Academic Bank of Credits" (in.gov.abc),
//   document "APAAR ID".
// Left out: national counts of IDs (not needed by the reader).
export const apaarId: DocGuide = {
  crumbs: crumbs("APAAR ID"),
  docHi: "APAAR ID",
  title: "DigiLocker से APAAR ID कार्ड कैसे डाउनलोड करें | SarkariSewa India",
  description: "APAAR (ABC) ID कार्ड DigiLocker के Issued Documents में कैसे मिलता है, स्कूल और कॉलेज छात्रों का तरीका अलग क्यों है, नाम मेल न खाए या ID न बने तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker में APAAR ID कार्ड: बनाना, देखना और डाउनलोड करना",
  lead: "APAAR ID 12 अंकों की छात्र पहचान है (पहले इसे ABC ID कहा जाता था)। ID बनते ही वह छात्र के DigiLocker अकाउंट में भेज दी जाती है और वर्चुअल APAAR ID कार्ड Issued Documents में दिखता है। स्कूल के छात्रों की ID स्कूल UDISE+ के ज़रिए बनवाता है; कॉलेज/यूनिवर्सिटी के छात्र DigiLocker या ABC पोर्टल से खुद बना सकते हैं।",
  facts: [
    ["issuer", "Academic Bank of Credits (दस्तावेज़: APAAR ID)"],
    ["ID", "12 अंकों का नंबर"],
    ["स्कूल छात्र", "स्कूल के ज़रिए (UDISE+ और PEN ज़रूरी)"],
    ["APAAR हेल्पलाइन", "1800 889 3511"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "APAAR ID क्या है और DigiLocker से इसका क्या संबंध है",
      list: [
        "<strong>पूरा नाम:</strong> Automated Permanent Academic Account Registry, “One Nation, One Student ID” पहल के तहत।",
        "<strong>किस काम की:</strong> मार्कशीट, डिग्री, क्रेडिट और प्रमाण पत्र एक जगह; ट्रांसफर, एडमिशन, स्कॉलरशिप और नौकरी में रिकॉर्ड की जांच आसान।",
        "<strong>DigiLocker से जुड़ाव:</strong> APAAR ID आधार और DigiLocker अकाउंट से जुड़ी होती है। संस्थान NAD-ABC पोर्टल पर आपके APAAR ID के सामने क्रेडिट/मार्कशीट डालते हैं, जो DigiLocker में दिखती हैं।",
        "<strong>क्रेडिट कौन डालता है:</strong> सिर्फ यूनिवर्सिटी/संस्थान; ID की निजी जानकारी आधार से आती है।",
      ],
    },
    {
      id: "school",
      title: "स्कूल छात्रों के लिए: APAAR ID कैसे बनती है",
      intro: "DigiLocker के अनुसार 16 साल से कम उम्र के छात्र DigiLocker ऐप/वेबसाइट से खुद APAAR ID नहीं बना सकते; उन्हें “school students should contact their respective schools” संदेश दिखता है।",
      steps: [
        "स्कूल में अपनी जानकारी (नाम, जन्मतिथि, लिंग, माता-पिता का नाम, मोबाइल) की जांच करवाएं। UDISE+ में आपका <strong>PEN</strong> होना ज़रूरी है।",
        "नाबालिग हैं तो माता-पिता की सहमति (consent) फॉर्म भरें।",
        "स्कूल आधार से आपकी पहचान की पुष्टि करके ID बनाने का अनुरोध भेजता है।",
        "ID बनते ही DigiLocker में भेज दी जाती है। छात्र के DigiLocker में <strong>Issued Documents</strong> खोलें; वहां वर्चुअल APAAR ID कार्ड मिलेगा, जिसे डाउनलोड कर सकते हैं।",
        "स्टेटस स्कूल UDISE+ पोर्टल के APAAR मॉड्यूल में देख सकता है; अपने स्कूल से पूछें।",
      ],
      callout: { kind: "warn", html: "<strong>सबसे आम रुकावट:</strong> UDISE+ में लिखा नाम और आधार का नाम अलग होना। ऐसे में ID नहीं बनती; पहले स्कूल रिकॉर्ड या आधार में से जो गलत हो, उसे सही करवाएं।" },
    },
    {
      id: "college",
      title: "कॉलेज/यूनिवर्सिटी छात्रों के लिए: DigiLocker से",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार-सत्यापित अकाउंट से लॉगिन करें।",
        "<strong>Search Documents</strong> में “APAAR” या “Academic Bank of Credits” खोजें और <strong>APAAR ID</strong> चुनें।",
        "सूची से अपना संस्थान/यूनिवर्सिटी चुनें और स्क्रीन पर मांगी गई बाकी जानकारी भरें। आपका कॉलेज सूची में नहीं है तो DigiLocker की सलाह है कि <strong>“None”</strong> चुनकर ID बना लें।",
        "सहमति देकर Submit करें। ID बनने पर कार्ड Issued Documents में आ जाएगा।",
        "आधार से जुड़ा मोबाइल माता-पिता के पास है तो DigiLocker के अनुसार ABC पोर्टल पर PAN या ड्राइविंग लाइसेंस से भी ID बनाई जा सकती है। दूर-दराज़ के इलाकों में नज़दीकी CSC पर भी APAAR ID बनती है।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["“school students should contact their respective schools”", "आप स्कूल श्रेणी में हैं या 16 साल से कम हैं; ID स्कूल के ज़रिए ही बनेगी।"],
          ["Demographic mismatch / ID नहीं बनी", "आधार और स्कूल रिकॉर्ड के नाम, जन्मतिथि, लिंग मिलाएं; गलत जानकारी ठीक करवाकर दोबारा अनुरोध करवाएं।"],
          ["PEN नहीं है", "PEN स्कूल UDISE+ में बनाता है; बिना PEN स्कूल छात्र की APAAR ID नहीं बनती।"],
          ["ID बन गई पर DigiLocker में कार्ड नहीं दिखता", "उसी आधार वाले DigiLocker अकाउंट में लॉगिन करें; Issued Documents को रिफ्रेश करें। फिर भी न दिखे तो nad-support.digilocker.gov.in पर अनुरोध करें।"],
          ["क्रेडिट/मार्कशीट नहीं दिख रहे", "ये यूनिवर्सिटी डालती है; अपने संस्थान से NAD-ABC पर डेटा अपलोड का अनुरोध करें।"],
          ["APAAR ID “0” से शुरू, रजिस्ट्रेशन में स्वीकार नहीं", "DigiLocker सपोर्ट पर टिकट डालें: APAAR ID की स्कैन कॉपी, DigiLocker वाला मोबाइल नंबर, कॉलेज और यूनिवर्सिटी का नाम।"],
        ],
      },
    },
    {
      id: "zaroori",
      title: "ध्यान रखने वाली बातें",
      list: [
        "नाबालिग छात्र की APAAR ID के लिए माता-पिता की सहमति ली जाती है; यह स्कूल के ज़रिए होती है।",
        "विदेशी छात्रों (बिना आधार) के लिए अलग प्रक्रिया पर DigiLocker काम कर रहा था; अपनी यूनिवर्सिटी से ताज़ा स्थिति पूछें।",
        "APAAR कार्ड को किसी अनजान वेबसाइट पर “डाउनलोड” करने के लिए अपना आधार/OTP न दें; सिर्फ DigiLocker, apaar.education.gov.in या abc.gov.in इस्तेमाल करें।",
      ],
    },
  ],
  official: [
    { href: "https://apaar.education.gov.in/", title: "APAAR official पोर्टल", note: "FAQ, हेल्पलाइन 1800 889 3511" },
    { href: "https://www.abc.gov.in/", title: "Academic Bank of Credits", note: "abc.gov.in" },
    { href: "https://nad-support.digilocker.gov.in/", title: "NAD/APAAR सपोर्ट", note: "DigiLocker की NAD हेल्पडेस्क" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "APAAR ID और ABC ID में क्या फर्क है?", a: "PIB की फैक्टशीट के अनुसार ABC ID का नाम ही बदलकर APAAR ID किया गया है। यह 12 अंकों का नंबर है जो आधार और DigiLocker से जुड़ा है।" },
    { q: "APAAR ID कार्ड कहां से डाउनलोड करें?", a: "ID बनते ही वह छात्र के DigiLocker अकाउंट में भेजी जाती है। DigiLocker में Issued Documents खोलें; वहां वर्चुअल APAAR ID कार्ड मिलेगा।" },
    { q: "क्या स्कूल का बच्चा खुद DigiLocker से APAAR ID बना सकता है?", a: "नहीं। DigiLocker के अनुसार 16 साल से कम उम्र के छात्र खुद नहीं बना सकते; स्कूल UDISE+ के ज़रिए माता-पिता की सहमति लेकर ID बनवाता है।" },
    { q: "APAAR ID बनाने के लिए कौन सी जानकारी चाहिए?", a: "स्कूल छात्रों के लिए PEN, नाम, जन्मतिथि, लिंग, मोबाइल नंबर, माता और पिता का नाम, आधार के अनुसार नाम और आधार नंबर अनिवार्य हैं।" },
    { q: "APAAR ID किन कामों में लगती है?", a: "APAAR पोर्टल के अनुसार यह एडमिशन, स्कॉलरशिप, रियायतें, क्रेडिट ट्रांसफर, इंटर्नशिप, नौकरी के आवेदन और एकेडमिक रिकॉर्ड की जांच में काम आती है। आपके स्कूल/कॉलेज के निर्देश भी देखें।" },
    { q: "APAAR में क्रेडिट कौन जोड़ता है?", a: "सिर्फ आपकी यूनिवर्सिटी या प्रमाण पत्र देने वाला संस्थान NAD-ABC पोर्टल पर आपके APAAR ID के सामने क्रेडिट डालता है। छात्र खुद क्रेडिट नहीं जोड़ सकते।" },
  ],
  related: cards("abc", "degree", "cbse", "board", "aadhaar", "students"),
  aside: [{ href: "https://apaar.education.gov.in/", label: "🆔 APAAR पोर्टल" }, ASIDE[1]],
};
