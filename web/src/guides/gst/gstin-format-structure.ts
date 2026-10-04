import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: the 15 characters decoded (rule 10, CGST Rules), the official state
// code list, and how to use the format to catch errors.
// State codes: GST State Code List, Taxes Department, Govt. of Nagaland
// (nagalandtax.nic.in), checked 4 Oct 2026. Special codes (e.g. for other
// territory / centre jurisdiction) are left out as they could not be
// confirmed from an official source reachable here.
const STATES: [string, string][] = [
  ["01", "Jammu and Kashmir"], ["02", "Himachal Pradesh"], ["03", "Punjab"], ["04", "Chandigarh"],
  ["05", "Uttarakhand"], ["06", "Haryana"], ["07", "Delhi"], ["08", "Rajasthan"],
  ["09", "Uttar Pradesh"], ["10", "Bihar"], ["11", "Sikkim"], ["12", "Arunachal Pradesh"],
  ["13", "Nagaland"], ["14", "Manipur"], ["15", "Mizoram"], ["16", "Tripura"],
  ["17", "Meghalaya"], ["18", "Assam"], ["19", "West Bengal"], ["20", "Jharkhand"],
  ["21", "Odisha"], ["22", "Chhattisgarh"], ["23", "Madhya Pradesh"], ["24", "Gujarat"],
  ["25", "Daman and Diu (July 2017 to 26 January 2020)"],
  ["26", "Dadra and Nagar Haveli and Daman and Diu (merged UT)"],
  ["27", "Maharashtra"], ["28", "Andhra Pradesh (before division)"], ["29", "Karnataka"], ["30", "Goa"],
  ["31", "Lakshadweep"], ["32", "Kerala"], ["33", "Tamil Nadu"], ["34", "Puducherry"],
  ["35", "Andaman and Nicobar Islands"], ["36", "Telangana"], ["37", "Andhra Pradesh (new)"], ["38", "Ladakh"],
];

export const gstinFormatStructure: DocGuide = {
  crumbs: crumbs("GSTIN Format & Structure"),
  docHi: "GSTIN Format & Structure",
  title: "GSTIN Number Format & Structure | SarkariSewa India",
  description: "Understand the 15-character GSTIN format, what its parts represent and how to spot obvious formatting errors.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GSTIN Format and Structure: What the 15 Characters Mean",
  lead: "A GSTIN has 15 characters. Rule 10 of the CGST Rules, 2017 sets them out: 2 characters for the state code, 10 characters for the PAN (or the TAN for tax deductors), 2 characters for the entity code and 1 checksum character. In practice, the 13th character numbers the registrations a PAN holds in that state, the 14th is the letter Z by default, and the 15th is a check character that catches typing errors. The format helps you spot mistakes, but only a GST portal search tells you whether the number is real and active.",
  facts: [
    ["Length", "15 characters (0–9, A–Z)"],
    ["Legal basis", "Rule 10(1), CGST Rules 2017"],
    ["Characters 1–2", "State code (e.g. 27 Maharashtra)"],
    ["Characters 3–12", "PAN (or TAN for tax deductors)"],
    ["Characters 13–14", "Entity code (13th number, 14th usually Z)"],
    ["Character 15", "Checksum"],
  ],
  promo: promo("A correct-looking GSTIN can still be unregistered or cancelled. Our tool first checks the format and checksum for free; then, for ₹20, it fetches the registration details and status into a clean report."),
  sections: [
    {
      id: "breakdown",
      title: "The 15 characters, one by one",
      intro: "Take an illustrative GSTIN of the form <strong>27ABCDE1234F1Z?</strong> (not a real number):",
      table: {
        head: ["Position", "Example", "Meaning", "What to check"],
        rows: [
          ["1–2", "27", "State code of the state/UT where the registration is held", "Matches the supplier's state (27 = Maharashtra)"],
          ["3–12", "ABCDE1234F", "PAN of the business (10 characters). Tax deductors registered under section 51 may use their TAN instead", "Same as the business's PAN"],
          ["13", "1", "Entity number – which registration this is for that PAN in that state (1 for the first; later ones get the next digit or letter)", "A business with several registrations in one state has different 13th characters"],
          ["14", "Z", "Second character of the entity code – Z by default for normal registrations", "Usually Z"],
          ["15", "?", "Checksum – calculated from the first 14 characters", "A single wrong character elsewhere usually makes it fail"],
        ],
      },
      callout: { kind: "info", html: "Rule 10 uses the term \"entity code\" for characters 13 and 14 together. The \"13th = registration number, 14th = Z\" description is how GSTINs are issued in practice." },
    },
    {
      id: "state-codes",
      title: "GST state code list",
      intro: "The first two digits of a GSTIN identify the state or Union territory. This list follows the official GST state code list published by the Taxes Department, Government of Nagaland.",
      table: {
        head: ["Code", "State / UT", "Code", "State / UT"],
        rows: Array.from({ length: Math.ceil(STATES.length / 2) }, (_, i) => {
          const a = STATES[i];
          const b = STATES[i + Math.ceil(STATES.length / 2)];
          return [a[0], a[1], b ? b[0] : "", b ? b[1] : ""];
        }),
      },
      callout: { kind: "info", html: "Code 25 was used for Daman and Diu until 26 January 2020, when it merged with Dadra and Nagar Haveli (code 26). Code 28 was Andhra Pradesh before the state's division; the new Andhra Pradesh uses 37 and Telangana 36." },
    },
    {
      id: "errors",
      title: "Using the format to catch errors",
      intro: "A quick look at the structure catches most copying mistakes before you even search:",
      list: [
        "<strong>Length:</strong> exactly 15 characters, no spaces.",
        "<strong>Positions 1–2</strong> must be digits and a valid state code from the table above.",
        "<strong>Positions 3–7</strong> letters, <strong>8–11</strong> digits, <strong>12</strong> a letter – the normal PAN pattern.",
        "<strong>Position 14</strong> is usually Z. Anything else on a normal business invoice deserves a closer look.",
        "<strong>Look-alike characters:</strong> 0/O, 1/I, 5/S, 8/B and 2/Z are the usual culprits. Digits can only appear where digits belong, which helps you decide.",
        "<strong>Checksum:</strong> if one character is wrong, the 15th character usually no longer fits. The GST portal rejects such numbers.",
      ],
      callout: { kind: "ok", html: `Our <a href="${TOOL}">GSTIN tool</a> checks the format and checksum for free as you type – you only pay if you want the full ₹20 verification report.` },
    },
    {
      id: "limits",
      title: "What the format cannot tell you",
      intro: "A perfectly formed GSTIN can still be:",
      list: [
        "Never issued (someone made it up using a real PAN and a valid checksum).",
        "Issued to a different business than the one using it.",
        "Suspended or cancelled.",
        "Registered in a different state from the one the supplier claims to bill from.",
      ],
      html: `<p>Always confirm with a live search on the GST portal's ${searchLink("Search Taxpayer")} page. See <a href="/gst/how-to-verify-gst-number.html">how to verify a GST number</a>.</p>`,
    },
    {
      id: "other-ids",
      title: "GSTIN, UIN and other GST numbers",
      table: {
        head: ["Number", "Who gets it", "Notes"],
        rows: [
          ["GSTIN", "Every person registered under GST", "15 characters, PAN-based (TAN-based for tax deductors), one per registration"],
          ["UIN (Unique Identity Number)", "UN specialised agencies, multilateral financial institutions, foreign consulates and embassies, and other notified persons (section 25(9))", "Used mainly to claim refunds of tax on notified purchases; searchable on the same page as GSTIN"],
          ["PAN", "Issued by the Income Tax Department", "Needed for GST registration (section 25(6)); forms characters 3–12 of the GSTIN"],
        ],
      },
    },
  ],
  official: [OFFICIAL.regRules, OFFICIAL.stateCodes, OFFICIAL.searchtp, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "How many digits are in a GSTIN?", a: "A GSTIN has 15 characters made of digits and capital letters: 2 for the state code, 10 for the PAN, 2 for the entity code and 1 checksum character, as set out in rule 10 of the CGST Rules, 2017." },
    { q: "What do the first two digits of a GSTIN mean?", a: "They are the GST state code of the state or Union territory where the registration is held, for example 27 for Maharashtra, 07 for Delhi and 29 for Karnataka." },
    { q: "What is the 13th digit in a GSTIN?", a: "It is the entity number for that PAN in that state. The first registration usually has 1, and further registrations of the same PAN in the same state get the next digit or letter." },
    { q: "Why is there a Z in every GSTIN?", a: "The 14th character is part of the entity code and is Z by default for normal registrations." },
    { q: "What is the GST state code of Telangana and Andhra Pradesh?", a: "Telangana is 36. Andhra Pradesh after division is 37; code 28 was used for Andhra Pradesh before the division." },
    { q: "Can a GSTIN format check prove that the number is active?", a: "No. Format checking only catches structural and typing errors. Whether the GSTIN is registered and active must be checked on the GST portal's taxpayer search." },
  ],
  related: related("how-to-verify-gst-number", "gstin-vs-gst-registration", "gst-number-search", "how-to-verify-gstin-on-invoice", "gstin-verification-online"),
  aside,
};
