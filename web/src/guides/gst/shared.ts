import type { DocGuide, Promo } from "../doc/types";

// Shared pieces for the GST guides in /gst/ (rendered in English).
//
// Sources checked 4 Oct 2026:
// - CGST Rules, 2017 (CBIC compilation, cbic-gst.gov.in): rule 10 (GSTIN
//   characters, REG-06 certificate), rule 18 (GSTIN on name board), rule 19
//   (amendment), rules 20-23 (cancellation, suspension, revocation), rule 46
//   (tax invoice particulars), rule 60(7) (GSTR-2B).
// - CGST Act, 2017 (CBIC updated text): s.16(2), s.22, s.25, s.29, s.31.
// - GST state code list: Taxes Department, Govt. of Nagaland
//   (nagalandtax.nic.in/docs/GST/Statistics/GST_State_Code_List.pdf).
// - Our tool: services/gstin-verification/index.html (format + checksum check
//   before payment, Razorpay ₹20, fields shown, print-to-PDF, share).
// - services.gst.gov.in/services/searchtp could not be read field by field
//   (captcha/bot wall), so result fields are described as the portal's
//   taxpayer details without claiming exact labels beyond those in GSTN's
//   own description (legal name, trade name, jurisdiction, registration date,
//   constitution, taxpayer type, status, cancellation date where applicable).

export const VERIFIED = "4 October 2026";
export const MODIFIED = "2026-10-04";

export const SEARCH_TP = "https://services.gst.gov.in/services/searchtp";
export const SEARCH_PAN = "https://services.gst.gov.in/services/searchtpbypan";
export const TOOL = "/services/gstin-verification/";

/** Inline link that opens the official Search Taxpayer page. */
export const searchLink = (text = "Search Taxpayer") =>
  `<a href="${SEARCH_TP}" target="_blank" rel="noopener nofollow">${text}</a>`;

export const crumbs = (label: string): DocGuide["crumbs"] => [
  { label: "Home", href: "/" },
  { label: "GST Guides", href: "/gst/" },
  { label },
];

/** The paid GSTIN report box. `text` is the page-specific pitch. */
export const promo = (text: string): Promo => ({
  emoji: "🧾",
  title: "GSTIN verification report",
  price: "₹20 per GSTIN",
  text:
    text +
    " The official GST search stays free; our ₹20 is a service fee (not a government fee) for a clean report built from an authorised verification provider's response.",
  points: [
    "Free format and checksum check before you pay, so a mistyped GSTIN does not cost you anything",
    "Status (active or not), legal name and trade name",
    "Registration date, taxpayer type and constitution of business",
    "Principal place of business / state and the date and time of the check",
    "Save as PDF from your browser, or share a GSTIN + status summary",
  ],
  href: TOOL,
  cta: "Verify a GSTIN for ₹20",
});

export const aside: DocGuide["aside"] = [
  { href: TOOL, label: "GSTIN report – ₹20" },
  { href: SEARCH_TP, label: "Free official GST search" },
];

type Official = DocGuide["official"][number];
export const OFFICIAL: Record<string, Official> = {
  searchtp: { href: SEARCH_TP, title: "GST Portal – Search Taxpayer (by GSTIN/UIN)", note: "Free official search, services.gst.gov.in" },
  searchpan: { href: SEARCH_PAN, title: "GST Portal – Search Taxpayer by PAN", note: "Lists the GSTINs linked to a PAN" },
  portal: { href: "https://www.gst.gov.in/", title: "GST Portal (GSTN)", note: "Registration, returns and taxpayer services" },
  cbic: { href: "https://cbic-gst.gov.in/", title: "CBIC – GST", note: "Central Board of Indirect Taxes and Customs" },
  regRules: { href: "https://cbic-gst.gov.in/gst-registration-rules.html", title: "GST Registration Rules (CBIC)", note: "Rules 8-26: GSTIN, certificate, cancellation" },
  invoiceRules: { href: "https://cbic-gst.gov.in/gst-invoice-rules.html", title: "GST Tax Invoice Rules (CBIC)", note: "Rule 46: what a tax invoice must show" },
  acts: { href: "https://cbic-gst.gov.in/gst-acts.html", title: "GST Acts (CBIC)", note: "CGST Act, 2017 and related Acts" },
  stateCodes: { href: "https://nagalandtax.nic.in/docs/GST/Statistics/GST_State_Code_List.pdf", title: "GST State Code List (PDF)", note: "Taxes Department, Government of Nagaland" },
};

type Card = DocGuide["related"][number];
export const CARDS: Record<string, Card> = {
  "gst-number-search": { href: "/gst/gst-number-search.html", emoji: "🔎", title: "GST Number Search", text: "Search options on the GST portal and what you get" },
  "gst-number-check-online": { href: "/gst/gst-number-check-online.html", emoji: "💳", title: "Check GSTIN Before Payment", text: "Pre-payment checklist for supplier invoices" },
  "gstin-status-check": { href: "/gst/gstin-status-check.html", emoji: "📊", title: "GSTIN Status Check", text: "Active, suspended, cancelled: what each status means" },
  "gstin-verification-online": { href: "/gst/gstin-verification-online.html", emoji: "✅", title: "GSTIN Verification Online", text: "Every verification method compared" },
  "how-to-verify-gst-number": { href: "/gst/how-to-verify-gst-number.html", emoji: "🪜", title: "How to Verify a GST Number", text: "Screen-by-screen steps and error fixes" },
  "how-to-verify-gstin-on-invoice": { href: "/gst/how-to-verify-gstin-on-invoice.html", emoji: "🧾", title: "Verify GSTIN on an Invoice", text: "What a valid tax invoice must show" },
  "how-to-check-gstin-of-supplier": { href: "/gst/how-to-check-gstin-of-supplier.html", emoji: "🤝", title: "Check a Supplier's GSTIN", text: "Vendor onboarding and periodic re-checks" },
  "gstin-active-cancelled-check": { href: "/gst/gstin-active-cancelled-check.html", emoji: "🚦", title: "Active or Cancelled?", text: "What to do when a GSTIN is not active" },
  "gstin-format-structure": { href: "/gst/gstin-format-structure.html", emoji: "🔢", title: "GSTIN Format & State Codes", text: "15 characters decoded, with state code table" },
  "gstin-vs-gst-registration": { href: "/gst/gstin-vs-gst-registration.html", emoji: "⚖️", title: "GSTIN vs GST Registration", text: "Number vs registration, explained simply" },
  tool: { href: TOOL, emoji: "⚡", title: "GSTIN Report · ₹20", text: "Clean, shareable report of any GSTIN" },
};

/** Six related cards: five guides plus the paid tool. */
export const related = (...slugs: string[]): Card[] => [...slugs.slice(0, 5).map((s) => CARDS[s]), CARDS.tool];
