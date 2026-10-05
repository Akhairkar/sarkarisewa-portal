// Kinds of centres an owner can list (claim form, edit page, listing pages).
// Digital service centres (CSC, Jan Seva Kendra, E-Mitra, Maha e-Seva, Vasudha
// Kendra, others) share one format; Jan Aushadhi Kendras (medicine shops) have
// their own services, sections and links. public/assets/js/csc-listing.js
// keeps the same names for pages drawn in the browser.
export type Kind = "csc" | "ja";
export type CentreType = { value: string; label: string; short: string; kind: Kind };

export const CENTRE_TYPES: CentreType[] = [
  { value: "CSC", label: "CSC (Common Service Centre)", short: "CSC सेंटर", kind: "csc" },
  { value: "Jan Seva Kendra", label: "जन सेवा केंद्र", short: "जन सेवा केंद्र", kind: "csc" },
  { value: "E-Mitra", label: "ई-मित्र", short: "ई-मित्र केंद्र", kind: "csc" },
  { value: "Maha E Seva", label: "महा ई-सेवा केंद्र", short: "महा ई-सेवा केंद्र", kind: "csc" },
  { value: "Vasudha Kendra", label: "वसुधा केंद्र", short: "वसुधा केंद्र", kind: "csc" },
  { value: "Jan Aushadhi Kendra", label: "प्रधानमंत्री भारतीय जन औषधि केंद्र", short: "जन औषधि केंद्र", kind: "ja" },
  { value: "Other", label: "अन्य सेवा केंद्र / साइबर कैफे", short: "सेवा केंद्र", kind: "csc" },
];
export const typeOf = (v: string | null | undefined): CentreType =>
  CENTRE_TYPES.find((t) => t.value === v) ?? { value: v ?? "", label: v || "सेवा केंद्र", short: v || "सेवा केंद्र", kind: "csc" };

const CSC_CENTRE = ["Aadhaar सेवा", "PAN कार्ड", "आयुष्मान कार्ड", "प्रमाण पत्र (जाति/आय/निवास)", "राशन कार्ड", "पेंशन / योजना फॉर्म", "बिजली/पानी बिल", "बैंकिंग / पैसा भेजना", "बीमा", "नौकरी / परीक्षा फॉर्म", "ई-श्रम / लेबर कार्ड", "PM-Kisan", "पासपोर्ट / ड्राइविंग लाइसेंस आवेदन", "GST / ITR"];

/** Tap-button choices per kind: at the centre (main), at the centre (other), from home. */
export const SERVICE_CHOICES: Record<Kind, { main: string[]; other: string[]; remote: string[]; mainLabel: string; otherLabel: string; remoteLabel: string }> = {
  csc: {
    main: CSC_CENTRE,
    other: ["फोटोकॉपी", "प्रिंटिंग", "स्कैनिंग", "लैमिनेशन", "पासपोर्ट फोटो", "टाइपिंग / डॉक्यूमेंट सहायता"],
    remote: CSC_CENTRE.filter((s) => !s.startsWith("Aadhaar")),
    mainLabel: "🏢 केंद्र पर आकर होने वाली सेवाएं",
    otherLabel: "दूसरी सेवाएं",
    remoteLabel: "🏠 घर बैठे होने वाली सेवाएं",
  },
  ja: {
    main: ["जेनेरिक दवाएं", "डायबिटीज़ / BP / दिल की दवाएं", "एंटीबायोटिक / बुखार-दर्द की दवाएं", "सर्जिकल सामान", "सुविधा सैनिटरी पैड", "न्यूट्रास्यूटिकल / प्रोटीन पाउडर", "आयुर्वेदिक दवाएं"],
    other: ["BP / शुगर जांच", "जो दवा स्टॉक में न हो, मंगवाकर देना"],
    remote: ["WhatsApp पर पर्ची भेजकर दवा बुकिंग", "दवा की होम डिलीवरी"],
    mainLabel: "💊 केंद्र पर मिलने वाली दवाएं और सामान",
    otherLabel: "दूसरी सुविधाएं",
    remoteLabel: "🏠 घर बैठे (WhatsApp / होम डिलीवरी)",
  },
};
