// Shared bits for the affidavit / self-declaration guides (/affidavit/).
// Facts were checked on 4 Oct 2026; each guide file lists its own sources.
// Law used across the cluster (all read on indiacode.gov.in):
// - Notaries Act 1952 s.8(1)(e): a notary may "administer oath to, or take
//   affidavit from, any person"; s.8(2): a notarial act needs the notary's
//   signature and official seal.
// - Oaths Act 1969 s.3(2): any court, Judge, Magistrate or person may
//   administer oaths for affidavits if empowered by the High Court (affidavits
//   for judicial proceedings) or by the State Government (other affidavits).
// - Bharatiya Nyaya Sanhita 2023 s.227 (giving false evidence includes a false
//   statement by a person bound by oath), s.229 (punishment: up to 7 years in a
//   judicial proceeding, otherwise up to 3 years, plus fine), s.236 (false
//   statement in a declaration receivable as evidence punished as false evidence).
// - Indian Stamp Act 1899 Schedule I Article 4 (affidavit chargeable;
//   exempt when made for immediate use in court, for receiving a pension or
//   charitable allowance, or for Army/Air Force enrolment). The amount differs
//   in the central text and in state amendments/state Acts, so no amount is
//   stated anywhere in this cluster.

export const VERIFIED = "4 अक्टूबर 2026";
export const PUBLISHED = "2026-10-04";
export const MODIFIED = "2026-10-04";

// The paid e-Stamp affidavit product is not live yet: one line, no price, no link.
export const SOON = "जल्द: e-Stamp पेपर पर तैयार एफिडेविट SarkariSewa पर";

export const DISCLAIMER =
  "यह पेज आम जानकारी के लिए है, कानूनी सलाह नहीं। नीचे दिए नमूने सिर्फ उदाहरण हैं; जिस दफ्तर, कॉलेज या बोर्ड में एफिडेविट देना है, उसका अपना फॉर्मेट हो तो वही इस्तेमाल करें। ज़रूरत हो तो किसी वकील या नोटरी से सलाह लें।";

export const ext = (href: string, label: string) =>
  `<a href="${href}" target="_blank" rel="noopener nofollow">${label}</a>`;

export const crumbs = (label: string) => [
  { label: "होम", href: "/" },
  { label: "एफिडेविट और स्व-घोषणा", href: "/affidavit/" },
  { label },
];

// Plain-text sample formats, shown in a <pre> so line breaks survive.
export const sample = (title: string, body: string) =>
  `<p class="sample-title"><strong>${title}</strong> <em>(सिर्फ नमूना: अपनी जानकारी और जिस दफ्तर में देना है, उसके फॉर्मेट के हिसाब से बदलें)</em></p><pre style="white-space:pre-wrap;font-family:inherit;background:var(--c-surface-2);border:1px dashed var(--c-line);border-radius:8px;padding:12px;line-height:1.7">${body}</pre>`;

type Card = { href: string; emoji: string; title: string; text: string };

export const CARDS: Record<string, Card> = {
  hub: { href: "/affidavit/", emoji: "📜", title: "एफिडेविट गाइड", text: "क्या है, कैसे बनता है, सभी फॉर्मेट" },
  name: { href: "/affidavit/name-change.html", emoji: "✍️", title: "नाम बदलने का एफिडेविट", text: "गजट ऑफ इंडिया में नाम परिवर्तन" },
  gap: { href: "/affidavit/gap-certificate.html", emoji: "🎓", title: "गैप सर्टिफिकेट / एफिडेविट", text: "पढ़ाई में ब्रेक का शपथ पत्र" },
  income: { href: "/affidavit/income.html", emoji: "💰", title: "आय का एफिडेविट / स्व-घोषणा", text: "आय प्रमाण पत्र और स्कॉलरशिप के लिए" },
  dob: { href: "/affidavit/date-of-birth.html", emoji: "🎂", title: "जन्मतिथि का एफिडेविट", text: "जन्म प्रमाण पत्र में सुधार का सही रास्ता" },
  ragging: { href: "/affidavit/anti-ragging.html", emoji: "🛡️", title: "एंटी-रैगिंग एफिडेविट", text: "UGC का ऑनलाइन undertaking" },
  lost: { href: "/affidavit/lost-document.html", emoji: "🔎", title: "दस्तावेज़ खोने का एफिडेविट", text: "खोई मार्कशीट, पुलिस रिपोर्ट, डुप्लीकेट" },
  same: { href: "/affidavit/one-and-same-person.html", emoji: "🪪", title: "वन एंड सेम पर्सन एफिडेविट", text: "दस्तावेज़ों में नाम अलग-अलग हो तो" },
  self: { href: "/affidavit/self-declaration.html", emoji: "📝", title: "स्व-घोषणा (Self Declaration)", text: "कहां एफिडेविट की जगह मान्य है" },
  builder: { href: "/tools/self-declaration-builder.html", emoji: "🧾", title: "Self Declaration बिल्डर", text: "फ्री में फॉर्मेट भरें और प्रिंट करें" },
  students: { href: "/students/", emoji: "📚", title: "छात्रों के काम", text: "स्कॉलरशिप, एडमिशन, दस्तावेज़" },
  documents: { href: "/documents/", emoji: "🗂️", title: "सरकारी दस्तावेज़", text: "प्रमाण पत्र और पहचान पत्र गाइड" },
  aadhaar: { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बनवाना, अपडेट, डाउनलोड" },
  birth: { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र", text: "आवेदन और डाउनलोड" },
  incomeCert: { href: "/service/income-certificate.html", emoji: "🧮", title: "आय प्रमाण पत्र", text: "ऑनलाइन आवेदन की जानकारी" },
  nsp: { href: "/service/national-scholarship-portal.html", emoji: "🏅", title: "नेशनल स्कॉलरशिप पोर्टल", text: "NSP पर आवेदन" },
  digilocker: { href: "/service/digilocker.html", emoji: "☁️", title: "डिजिलॉकर", text: "मार्कशीट और दस्तावेज़ डिजिटल में" },
  passport: { href: "/service/passport.html", emoji: "🛂", title: "पासपोर्ट", text: "आवेदन और दस्तावेज़" },
  pan: { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया पैन और सुधार" },
};

export const cards = (...keys: (keyof typeof CARDS)[]) => keys.map((k) => CARDS[k]);
