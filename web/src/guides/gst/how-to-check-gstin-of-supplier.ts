import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, SEARCH_PAN, TOOL, VERIFIED } from "./shared";

// Angle: vendor onboarding and ongoing supplier monitoring — documents to
// collect, PAN cross-check, multi-state GSTINs, vendor master fields and a
// re-check routine.
export const howToCheckGstinOfSupplier: DocGuide = {
  crumbs: crumbs("Check a Supplier's GSTIN"),
  docHi: "Check a Supplier's GSTIN",
  title: "How to Check GSTIN of a Supplier | SarkariSewa India",
  description: "Learn how to check a supplier GSTIN, compare taxpayer details with an invoice and use official GST search before onboarding a vendor.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "How to Check the GSTIN of a Supplier (Vendor Onboarding Guide)",
  lead: "When you add a new supplier, ask for its GSTIN and GST registration certificate, then search the GSTIN on the GST portal's free Search Taxpayer page. Confirm the legal name, constitution, state and PAN match the supplier's other documents and that the registration is active. Search by PAN as well, so you pick the GSTIN for the right state. Save the result in your vendor file and re-check it from time to time, because a registration can be suspended or cancelled later.",
  facts: [
    ["Collect", "GSTIN, registration certificate (REG-06), PAN"],
    ["Search", searchLink("Search by GSTIN/UIN") + " and " + `<a href="${SEARCH_PAN}" target="_blank" rel="noopener nofollow">by PAN</a>`],
    ["Match", "Legal name, PAN, state, constitution"],
    ["Status", "Must be active"],
    ["Re-check", "Before big payments and periodically"],
    ["Vendor file record", `Screenshot or <a href="${TOOL}">₹20 PDF report</a>`],
  ],
  promo: promo("Onboarding a new vendor? Our report gives you a one-page record of the supplier's GSTIN – status, legal and trade name, registration date, taxpayer type, constitution and place of business – to save as PDF in the vendor file."),
  sections: [
    {
      id: "collect",
      title: "Step 1: Collect these from the supplier",
      list: [
        "<strong>GSTIN</strong> for the state(s) from which the supplier will bill you.",
        "<strong>GST registration certificate</strong> (Form GST REG-06). Under rule 10 it is issued with the GSTIN and shows the principal and additional places of business. Rule 18 requires the supplier to display it at its places of business, so it should be easy to share.",
        "<strong>PAN</strong> of the business (characters 3 to 12 of the GSTIN should be this PAN).",
        "<strong>Bank account details</strong> on the supplier's letterhead or a cancelled cheque, in the same legal name.",
        "<strong>Contact details</strong> of someone you can call to confirm any later change.",
      ],
    },
    {
      id: "search",
      title: "Step 2: Search the GSTIN and the PAN",
      steps: [
        `Search the GSTIN on ${searchLink("Search Taxpayer")} (Search by GSTIN/UIN + captcha).`,
        "Check the legal name, trade name, constitution of business, taxpayer type, state and status.",
        `Then run <a href="${SEARCH_PAN}" target="_blank" rel="noopener nofollow">Search by PAN</a> with the supplier's PAN to see all GSTINs it holds.`,
        "Choose the GSTIN for the state the supplier will actually invoice you from.",
        "Save a dated screenshot or report of each result in the vendor file.",
      ],
      callout: { kind: "info", html: "Why several GSTINs? Section 25 of the CGST Act needs a separate registration in each state where a business is liable, and allows separate registrations for multiple places of business in one state. Each registration is treated as a distinct person, so using the wrong state's GSTIN on an invoice is a real error, not a formality." },
    },
    {
      id: "match",
      title: "Step 3: Match the details",
      table: {
        head: ["Supplier document", "GST search field", "Should match"],
        rows: [
          ["Company/firm name on contract and letterhead", "Legal name", "Yes (abbreviations are fine)"],
          ["Shop or brand name", "Trade name", "Usually"],
          ["PAN card / PAN on documents", "Characters 3–12 of the GSTIN", "Exactly"],
          ["Type of entity (Pvt Ltd, LLP, partnership, proprietor)", "Constitution of business", "Yes"],
          ["Address the goods are billed from", "State code (first 2 digits) and place of business", "Same state"],
          ["Registration certificate", "Status and effective date", "Active; dates consistent"],
          ["Bank account name", "Legal name", "Yes – a GST search does not show bank details, so check this separately"],
        ],
      },
    },
    {
      id: "master",
      title: "Step 4: Set up the vendor master correctly",
      intro: "Most GST problems with suppliers start with a wrong entry in the vendor master. Record these fields carefully:",
      list: [
        "GSTIN (copy-paste from the portal result, not retyped from a scan).",
        "Legal name exactly as shown on the portal.",
        "State and state code.",
        "Taxpayer type – regular or composition. Composition suppliers cannot charge GST to you, so you will not get input tax credit on their bills.",
        "Date of your GSTIN check and who did it.",
        "One vendor record per GSTIN if the supplier bills you from more than one state.",
      ],
    },
    {
      id: "monitor",
      title: "Step 5: Keep checking after onboarding",
      intro: "A GSTIN that was active at onboarding can change. The law allows an officer to suspend a registration during cancellation proceedings (rule 21A) and to cancel it, including from a retrospective date (section 29(2)). A simple routine:",
      table: {
        head: ["When", "What to re-check"],
        rows: [
          ["Before a large or advance payment", "Status on the portal, the same day"],
          ["Supplier sends a new GSTIN, name or address", "Search the new GSTIN; ask for the amended certificate"],
          ["Supplier's invoices are missing from your GSTR-2B", "Status, and whether the GSTIN on the invoice is correct; ask the supplier about its GSTR-1 filing"],
          ["Periodically (e.g. quarterly) for regular suppliers", "Status of every active vendor GSTIN"],
          ["Supplier announces merger, closure or change of business type", "Status; a change of constitution that changes the PAN needs a fresh registration (rule 19)"],
        ],
      },
    },
    {
      id: "red-flags",
      title: "Red flags that should stop onboarding",
      list: [
        "GSTIN not found, or found under a different business name.",
        "PAN in the GSTIN does not match the PAN given to you.",
        "Status is suspended or cancelled.",
        "Supplier refuses to share the registration certificate.",
        "Bank account is in a name different from the legal name.",
        "The supplier is very new and offers unusually low prices with pressure to pay in advance.",
      ],
      callout: { kind: "warn", html: "If the GSTIN is valid but the details do not match, pause and ask the supplier in writing. Never edit a GSTIN or name in your system just to make it match." },
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.searchpan, OFFICIAL.regRules, OFFICIAL.acts, OFFICIAL.portal],
  faq: [
    { q: "How do I check a supplier's GST number?", a: "Search the supplier's GSTIN on the Search Taxpayer page of the GST portal and compare the legal name, PAN, state, constitution and status with the supplier's documents. It is free and needs no login." },
    { q: "How can I find all GSTINs of a supplier?", a: "Use Search by PAN on the GST portal with the supplier's PAN. It lists the GSTINs registered against that PAN, so you can choose the one for the state that bills you." },
    { q: "What documents should I take from a new supplier for GST?", a: "Take the GSTIN, the GST registration certificate in Form GST REG-06, the PAN, and bank details on letterhead or a cancelled cheque in the same legal name." },
    { q: "Why does the PAN in the GSTIN matter?", a: "Characters 3 to 12 of a GSTIN are the PAN (or TAN for tax deductors). If they do not match the supplier's PAN, the GSTIN belongs to a different taxpayer." },
    { q: "How often should I re-check a supplier's GSTIN?", a: "At onboarding, before large or advance payments, whenever the supplier changes its details, and periodically for regular suppliers, because registrations can be suspended or cancelled later." },
    { q: "Does a valid GSTIN mean the supplier is reliable?", a: "No. It only confirms GST registration. Also check the supplier's track record, contract terms, delivery and bank details." },
  ],
  related: related("gst-number-check-online", "how-to-verify-gstin-on-invoice", "gstin-status-check", "gst-number-search", "gstin-vs-gst-registration"),
  aside,
};
