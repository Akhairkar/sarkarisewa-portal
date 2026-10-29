// Seva Sahayak: people who help with government forms list themselves for
// free (/list-your-service.html); approved helpers show on the guides of the
// test states (supabase/sahayak.sql). We only connect the two; no guarantee.

// Services a helper can pick. Keys are stored in sahayak_providers.services.
// Aadhaar enrolment/update is left out: only UIDAI-approved centres may do it.
export const SAHAYAK_SERVICES: { key: string; hi: string }[] = [
  { key: "senior-citizen-card", hi: "वरिष्ठ नागरिक कार्ड" },
  { key: "old-age-pension", hi: "वृद्धावस्था / विधवा / दिव्यांग पेंशन" },
  { key: "ayushman-card", hi: "आयुष्मान / वय वंदना कार्ड" },
  { key: "ration-card", hi: "राशन कार्ड" },
  { key: "income-certificate", hi: "आय प्रमाण पत्र" },
  { key: "caste-certificate", hi: "जाति प्रमाण पत्र" },
  { key: "domicile-certificate", hi: "निवास प्रमाण पत्र" },
  { key: "birth-certificate", hi: "जन्म प्रमाण पत्र" },
  { key: "death-certificate", hi: "मृत्यु प्रमाण पत्र" },
  { key: "marriage-certificate", hi: "विवाह प्रमाण पत्र" },
  { key: "disability-certificate", hi: "दिव्यांग प्रमाण पत्र / UDID" },
  { key: "labour-card", hi: "लेबर कार्ड" },
  { key: "e-shram", hi: "ई-श्रम कार्ड" },
  { key: "pan-card", hi: "PAN कार्ड" },
  { key: "voter-id", hi: "वोटर ID" },
  { key: "pm-kisan", hi: "PM किसान" },
  { key: "scholarship", hi: "स्कॉलरशिप फॉर्म" },
  { key: "job-form", hi: "सरकारी नौकरी के फॉर्म" },
  { key: "other", hi: "दूसरे सरकारी फॉर्म" },
];

// States whose senior citizen card guide shows the helper box (test).
export const SAHAYAK_STATES = ["madhya-pradesh", "uttarakhand", "delhi", "jharkhand", "uttar-pradesh"];
