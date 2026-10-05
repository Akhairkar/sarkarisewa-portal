import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - API Setu directory: issuer "Income Tax Department" (in.gov.pan), document
//   type "PAN Verification Record".
// - incometax.gov.in Instant e-PAN help page and FAQ: free; for individuals
//   without a PAN, with Aadhaar linked to an active mobile and access to
//   DigiLocker; not for those who already have a PAN, minors, representative
//   assessees; redirected to DigiLocker to fetch DOB proof (Driving License,
//   Birth Certificate, Class X marksheet / compartment marksheet / Passing
//   Certificate, CGHS card) which must already be fetched in DigiLocker; if
//   several are selected the first alphabetically is used; acknowledgement
//   number; Check Status / Download e-PAN with Aadhaar + OTP; View/Download
//   e-PAN after login (Services > View / Download e-PAN). Helpline numbers on
//   that page (e-filing 1800 103 0025 / 1800 419 0025).
// - PIB, Ministry of Railways, 6 Jul 2018: PAN card issued by the Income Tax
//   Department is a valid ID for reserved travel (list); DigiLocker Issued vs
//   Uploaded rule.
// - DigiLocker Ask our Experts (18 Oct 2024): name must match Aadhaar.
// Left out: the exact fields DigiLocker asks for the PAN record (not shown on
// an official page we could read).
export const panCard: DocGuide = {
  crumbs: crumbs("PAN कार्ड"),
  docHi: "PAN कार्ड",
  title: "DigiLocker में PAN कार्ड कैसे लाएं | SarkariSewa India",
  description: "DigiLocker में आयकर विभाग का PAN Verification Record कैसे लाएं, Instant e-PAN में DigiLocker क्यों लगता है, नाम मेल न खाए तो क्या करें, e-PAN कहां मिलेगा।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker में PAN कार्ड (PAN Verification Record) कैसे लाएं",
  lead: "DigiLocker में आयकर विभाग (Income Tax Department) का दस्तावेज़ “PAN Verification Record” मिलता है। Search Documents में Income Tax Department चुनें, अपना PAN और मांगी गई जानकारी भरें; रिकॉर्ड आयकर विभाग से सीधे Issued Documents में आ जाता है। PAN कार्ड जैसी e-PAN PDF चाहिए तो वह आयकर ई-फाइलिंग पोर्टल से मिलती है।",
  facts: [
    ["issuer", "Income Tax Department"],
    ["DigiLocker में नाम", "PAN Verification Record"],
    ["नई PAN (Instant e-PAN)", "फ्री, आधार + DigiLocker से"],
    ["e-PAN डाउनलोड", "incometax.gov.in → Instant e-PAN"],
  ],
  sections: [
    {
      id: "steps",
      title: "DigiLocker में PAN लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार से जुड़े अकाउंट में लॉगिन करें।",
        "<strong>Search Documents</strong> में “PAN” या “Income Tax Department” लिखें।",
        "<strong>PAN Verification Record</strong> चुनें।",
        "अपना PAN नंबर और स्क्रीन पर मांगी गई जानकारी भरें। जानकारी PAN रिकॉर्ड से मेल खानी चाहिए।",
        "सहमति देकर दस्तावेज़ लाएं। यह <strong>Issued Documents</strong> में सेव होगा और वहां से शेयर हो सकता है।",
      ],
      callout: { kind: "info", html: "DigiLocker का PAN रिकॉर्ड आयकर विभाग के डेटाबेस से आता है। PAN में नाम/जन्मतिथि गलत है तो सुधार आयकर विभाग की PAN सेवा से होगा, DigiLocker से नहीं (देखें <a href=\"/service/pan-card.html\">पैन कार्ड गाइड</a>)।" },
    },
    {
      id: "instant-epan",
      title: "नया PAN बनाना: Instant e-PAN में DigiLocker की भूमिका",
      intro: "आयकर विभाग की Instant e-PAN सेवा फ्री है और उन लोगों के लिए है जिनके पास अभी PAN नहीं है। इसके लिए वैध आधार, आधार से जुड़ा चालू मोबाइल नंबर और <strong>DigiLocker की पहुंच</strong> ज़रूरी है। नाबालिग और जिनके पास पहले से PAN है, वे इसका इस्तेमाल नहीं कर सकते।",
      steps: [
        "ई-फाइलिंग पोर्टल के होमपेज पर Quick Links में <strong>Instant e-PAN</strong> → <strong>Get New e-PAN</strong> चुनें।",
        "आधार और OTP से आगे बढ़ें। प्रक्रिया में आपको <strong>DigiLocker पर भेजा जाता है</strong>, ताकि जन्मतिथि का सबूत लिया जा सके।",
        "DigiLocker में इनमें से कोई दस्तावेज़ चुनें: Driving License, Birth Certificate, Class X marksheet, Class X compartment marksheet, Class X / Matriculation Passing Certificate या CGHS कार्ड। कई चुनें तो अंग्रेज़ी वर्णक्रम में पहला इस्तेमाल होता है।",
        "शेयर करने की वैधता तारीख देखकर <strong>Allow</strong> दबाएं। ध्यान दें: चुना गया दस्तावेज़ पहले से आपके DigiLocker में (Issued Documents में) होना चाहिए।",
        "सफल होने पर Acknowledgement Number मिलता है। बाद में <strong>Check Status / Download e-PAN</strong> में आधार और OTP डालकर e-PAN देखें/डाउनलोड करें।",
      ],
      callout: { kind: "warn", html: "जन्मतिथि का दस्तावेज़ DigiLocker में नहीं है तो पहले उसे लाएं, जैसे <a href=\"/digilocker/driving-licence.html\">DL</a> या <a href=\"/digilocker/cbse-marksheet.html\">10वीं की मार्कशीट</a>।" },
    },
    {
      id: "valid",
      title: "DigiLocker वाला PAN कहां काम आता है",
      list: [
        RULE_9A,
        "रेल मंत्रालय की 2018 की सूची में आयकर विभाग का PAN कार्ड आरक्षित यात्रा के लिए मान्य पहचान है; DigiLocker में दिखाने पर Issued Documents वाला रिकॉर्ड ही दिखाएं।",
        "बैंक/निवेश KYC में संस्थाएं अपनी प्रक्रिया अपनाती हैं; DigiLocker से शेयर का विकल्प हो तो वह सबसे आसान है।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PAN record not found / details mismatch", "PAN नंबर और नाम/जन्मतिथि PAN कार्ड से मिलाकर दोबारा भरें।"],
          ["PAN और आधार में नाम अलग", "DigiLocker नाम मेल न खाने पर दस्तावेज़ नहीं देता। PAN या आधार में सुधार करवाएं; PAN-आधार लिंकिंग में भी यही दिक्कत आती है (देखें <a href=\"/service/aadhaar-pan-linking.html\">PAN-आधार लिंक</a>)।"],
          ["Instant e-PAN में DigiLocker दस्तावेज़ नहीं दिखा", "जन्मतिथि वाला दस्तावेज़ पहले DigiLocker के Issued Documents में लाएं, फिर प्रक्रिया दोबारा करें।"],
          ["पहले से PAN है, फिर भी Instant e-PAN चाहिए", "यह सेवा सिर्फ बिना PAN वालों के लिए है; दूसरा PAN रखना मना है। मौजूदा PAN की कॉपी ई-फाइलिंग/PAN सेवा से लें।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें; ई-फाइलिंग से जुड़ी दिक्कत के लिए आयकर पोर्टल पर दिए हेल्पलाइन नंबर।"],
        ],
      },
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/instant-e-pan", title: "Instant e-PAN (आयकर विभाग)", note: "नया e-PAN, स्टेटस और डाउनलोड" },
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "Verify Your PAN, Link Aadhaar" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "DigiLocker में PAN कार्ड किस नाम से मिलता है?", a: "issuer “Income Tax Department” का दस्तावेज़ “PAN Verification Record” है। Search में “PAN” लिखकर खोजें।" },
    { q: "क्या DigiLocker का PAN Verification Record असली PAN कार्ड जैसा है?", a: "यह आयकर विभाग से सीधे आया इलेक्ट्रॉनिक रिकॉर्ड है और DigiLocker नियम 9A के तहत Issued Document है। कार्ड जैसी PDF चाहिए तो e-PAN ई-फाइलिंग पोर्टल से डाउनलोड करें।" },
    { q: "Instant e-PAN के लिए DigiLocker क्यों ज़रूरी है?", a: "आयकर विभाग के FAQ के अनुसार प्रक्रिया में आपको DigiLocker पर भेजा जाता है ताकि जन्मतिथि का सबूत (जैसे DL, जन्म प्रमाण पत्र, 10वीं की मार्कशीट) लिया जा सके।" },
    { q: "Instant e-PAN की फीस कितनी है?", a: "आयकर विभाग के अनुसार Instant e-PAN सेवा फ्री है।" },
    { q: "e-PAN कैसे डाउनलोड करें?", a: "ई-फाइलिंग पोर्टल पर Instant e-PAN → Check Status / Download e-PAN में आधार नंबर और OTP डालें; e-PAN बन चुका हो तो View या Download करें। लॉगिन करके Services > View / Download e-PAN से भी मिलता है।" },
    { q: "PAN में नाम सुधार DigiLocker से हो सकता है?", a: "नहीं। DigiLocker सिर्फ आयकर विभाग का रिकॉर्ड दिखाता है; सुधार PAN सेवा प्रदाता के ज़रिए होता है, उसके बाद DigiLocker में नया रिकॉर्ड लाएं।" },
  ],
  related: cards("panGuide", "panAadhaar", "aadhaar", "dl", "cbse", "hub"),
  aside: [{ href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/instant-e-pan", label: "💳 Instant e-PAN" }, ASIDE[1]],
};
