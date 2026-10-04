import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: the invoice as a document — where the GSTINs sit, rule 46
// particulars, cross-checks between GSTIN state code, place of supply and
// tax type, and handwritten/manual invoices.
export const howToVerifyGstinOnInvoice: DocGuide = {
  crumbs: crumbs("Verify GSTIN on an Invoice"),
  docHi: "Verify GSTIN on an Invoice",
  title: "How to Verify GST Number on an Invoice | SarkariSewa India",
  description: "Understand how to verify the GST number printed on a tax invoice and compare it with the supplier details.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "How to Verify the GST Number on an Invoice",
  lead: "A GST tax invoice must show the supplier's name, address and GSTIN, and – if you are registered – your GSTIN too (rule 46 of the CGST Rules). To verify it, search the supplier's GSTIN on the GST portal's free Search Taxpayer page and check that the registered name matches the seller on the invoice, the status is active and the registration was effective on the invoice date. Then cross-check the state code in the GSTIN against the place of supply and the type of tax charged.",
  facts: [
    ["Rule", "Rule 46, CGST Rules 2017 (tax invoice particulars)"],
    ["GSTINs on invoice", "Supplier's always; recipient's if registered"],
    ["Verify at", searchLink("GST portal – Search Taxpayer")],
    ["Cross-check", "State code ↔ place of supply ↔ CGST/SGST or IGST"],
    ["Invoice number", "Max 16 characters, unique for the financial year"],
    ["Report", `<a href="${TOOL}">₹20 GSTIN report</a> to attach to your records`],
  ],
  promo: promo("Processing a pile of supplier invoices? Run the supplier's GSTIN through our report and keep the PDF with the invoice as proof of what you checked and when."),
  sections: [
    {
      id: "where",
      title: "Where to find the GSTINs on an invoice",
      list: [
        "<strong>Supplier's GSTIN:</strong> printed with the supplier's name and address, usually in the header. This is the one you verify.",
        "<strong>Recipient's GSTIN:</strong> printed with the buyer's (your) name and address, if you are registered. Check it is yours, character by character.",
        "<strong>State name and code:</strong> rule 46 asks for the state name and code of the recipient in some cases, and the place of supply for inter-State supplies. The state code should be consistent with the GSTINs.",
      ],
      callout: { kind: "info", html: "Got a handwritten or manually typed bill? GSTN lists checking GSTINs on manual or handwritten invoices as one of the main uses of its taxpayer search. These are the invoices most prone to copying mistakes, so always search them." },
    },
    {
      id: "steps",
      title: "How to verify the GSTIN on an invoice",
      steps: [
        "Read the supplier's GSTIN from the invoice and count the characters – there must be 15.",
        `Search it on the GST portal's ${searchLink("Search Taxpayer")} page (Search by GSTIN/UIN, enter captcha).`,
        "<strong>Name:</strong> the legal name or trade name in the result should be the business named on the invoice.",
        "<strong>Status and date:</strong> the GSTIN should be active, and the invoice date should not be before the effective date of registration or after any cancellation date.",
        "<strong>Taxpayer type:</strong> if the result shows a composition taxpayer but the invoice charges GST, question it – a composition taxpayer issues a bill of supply and must not collect tax from you (sections 10(4) and 31(3)(c) of the CGST Act).",
        "<strong>Your GSTIN:</strong> confirm your own GSTIN and legal name on the invoice are correct, since this is how the invoice reaches your GSTR-2B.",
        "<strong>States and tax type:</strong> do the cross-check in the next section.",
        "File the invoice with a note or screenshot of the check, or our PDF report.",
      ],
    },
    {
      id: "cross-check",
      title: "Cross-check: state code, place of supply and tax type",
      intro: "The first two digits of a GSTIN are the state code. They let you spot invoices where the tax type does not fit. As a general rule (CBIC FAQ), if the supplier's location and the place of supply are in the same state, CGST + SGST applies; if they are in different states, IGST applies.",
      table: {
        head: ["Supplier GSTIN state", "Place of supply", "Expected tax on invoice"],
        rows: [
          ["27 (Maharashtra)", "Maharashtra", "CGST + SGST"],
          ["27 (Maharashtra)", "Karnataka (29)", "IGST"],
          ["07 (Delhi)", "Delhi", "CGST + SGST"],
          ["04 (Chandigarh, a Union territory)", "Chandigarh", "CGST + UTGST"],
        ],
      },
      callout: { kind: "warn", html: "Place of supply rules have many special cases (services, e-commerce, imports, SEZ). Use this table to spot obvious mistakes, not to decide the tax yourself – ask your accountant if the invoice looks off." },
    },
    {
      id: "rule-46",
      title: "Other particulars a tax invoice must have (rule 46)",
      intro: "A GSTIN match does not make every field on the invoice correct. Rule 46 of the CGST Rules lists what a tax invoice must contain. The main ones:",
      table: {
        head: ["Particular", "What to look for"],
        rows: [
          ["Supplier's name, address and GSTIN", "Matches the GST search result"],
          ["Invoice number", "Consecutive serial number, up to 16 characters (letters, digits, - and /), unique for the financial year"],
          ["Date of issue", "Present, and within the supplier's registration period"],
          ["Recipient's name, address and GSTIN/UIN (if registered)", "Your correct details"],
          ["HSN/SAC code and description", "Describes what you actually bought"],
          ["Quantity and unit (for goods)", "Matches the delivery"],
          ["Total value, taxable value, rate and amount of tax", "Arithmetic is right; rate fits the goods/services"],
          ["Place of supply with state name (inter-State supplies)", "Consistent with the GST type charged"],
          ["Whether tax is payable on reverse charge", "Stated where applicable"],
          ["Signature or digital signature of the supplier", "Present"],
          ["QR code with IRN (for e-invoices)", "Present where the supplier is required to issue e-invoices"],
        ],
      },
    },
    {
      id: "red-flags",
      title: "Red flags on an invoice",
      list: [
        "The GSTIN returns no result, or a different business.",
        "The GSTIN's PAN part (characters 3–12) is different from the supplier's PAN on other documents.",
        "The supplier's address is in one state but the GSTIN's state code is another, with no branch explanation.",
        "GST is charged by a supplier shown as a composition taxpayer.",
        "The invoice date is before the effective date of registration or after a cancellation date.",
        "Missing invoice number, date or your GSTIN; or a bank account that differs from your records.",
      ],
    },
    {
      id: "fix",
      title: "What to do if something is wrong",
      intro: "Do not correct the invoice yourself. Write to the supplier, explain what does not match and ask for a corrected document (a revised invoice or a credit/debit note as appropriate). Hold the GST portion of the payment until the corrected document arrives, and speak to your accountant before claiming input tax credit on a doubtful invoice. Keep the email trail with the invoice.",
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.invoiceRules, OFFICIAL.acts, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "Is it compulsory to print GSTIN on a tax invoice?", a: "Yes. Rule 46 of the CGST Rules requires a tax invoice to show the supplier's name, address and GSTIN, and the recipient's GSTIN or UIN if the recipient is registered." },
    { q: "How do I check if the GST number on a bill is genuine?", a: "Search it on the Search Taxpayer page of the GST portal. A genuine GSTIN returns the registered business; check that the name matches the seller on the bill and the status is active." },
    { q: "What if the supplier's name on the invoice does not match the GST search?", a: "Hold the payment and ask the supplier to confirm the correct GSTIN and send a corrected invoice. Small differences like abbreviations are usually fine; a completely different name is not." },
    { q: "Should I check my own GSTIN on a purchase invoice?", a: "Yes. If your GSTIN is wrong on the supplier's invoice, the invoice may not appear in your GSTR-2B, which can affect your input tax credit." },
    { q: "Can a composition dealer charge GST on an invoice?", a: "No. A composition taxpayer must not collect tax from the recipient and issues a bill of supply instead of a tax invoice, under sections 10(4) and 31(3)(c) of the CGST Act." },
    { q: "Does a valid GSTIN mean the whole invoice is correct?", a: "No. It only confirms the supplier's registration. Separately check the invoice number, date, HSN code, quantities, rates, tax amounts and place of supply." },
  ],
  related: related("gst-number-check-online", "how-to-check-gstin-of-supplier", "how-to-verify-gst-number", "gstin-format-structure", "gstin-active-cancelled-check"),
  aside,
};
