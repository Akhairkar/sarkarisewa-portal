import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, SEARCH_PAN, TOOL, VERIFIED } from "./shared";

// Angle: overview of every way to verify a GSTIN online, compared side by
// side, and which one suits which situation.
export const gstinVerificationOnline: DocGuide = {
  crumbs: crumbs("GSTIN Verification Online"),
  docHi: "GSTIN Verification Online",
  title: "GSTIN Verification Online – Check GST Number & Status | SarkariSewa India",
  description: "Verify a GSTIN online and review available registration details such as legal name, trade name and status. Learn the official GST search process and use our ₹20 verification service.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GSTIN Verification Online: Every Method Compared",
  lead: "GSTIN verification means confirming that a GST number is real, belongs to the business that gave it to you, and is currently active. The free and authoritative way is the GST portal's Search Taxpayer page. You can also search by PAN to see all GSTINs of a business, check the 15-character format yourself to catch typing errors, look at the registration certificate, or use a paid service such as our ₹20 report when you want a clean record to save or share.",
  facts: [
    ["Official method", searchLink("Search Taxpayer – GST portal")],
    ["Shows", "Legal name, trade name, status, type, registration date"],
    ["Cost (official)", "Free, no login"],
    ["Quick self-check", "Format and state code – catches typos only"],
    ["Paid option", `<a href="${TOOL}">₹20 per GSTIN report</a>`],
    ["Final reference", "Always the official GST portal"],
  ],
  promo: promo("If you want the verification as a shareable record rather than a portal screen, our report presents the registration details of a GSTIN in a clean English–Hindi format that you can save as PDF."),
  sections: [
    {
      id: "what",
      title: "What \"verifying\" a GSTIN should cover",
      intro: "A proper verification answers four questions. Most mistakes happen when people stop after the first one.",
      list: [
        "<strong>Is the number valid?</strong> 15 characters in the right pattern, with a correct last (checksum) character.",
        "<strong>Is it registered?</strong> The GST system returns a taxpayer for it.",
        "<strong>Is it the right business?</strong> The legal or trade name, state and constitution match the business you are dealing with.",
        "<strong>Is it active?</strong> The registration is in force now, and was in force on the date of your invoice.",
      ],
    },
    {
      id: "methods",
      title: "Verification methods compared",
      table: {
        head: ["Method", "Cost", "Answers", "Best for", "Limits"],
        rows: [
          [searchLink("GST portal – Search by GSTIN/UIN"), "Free", "All four questions", "Every check; the reference source", "One GSTIN at a time; captcha each time; no ready-made document"],
          [`<a href="${SEARCH_PAN}" target="_blank" rel="noopener nofollow">GST portal – Search by PAN</a>`, "Free", "Which GSTINs a PAN holds, by state", "Finding the right GSTIN of a multi-state business", "You still open each GSTIN for full details"],
          ["<a href=\"/gst/gstin-format-structure.html\">Format check</a> (by eye or with a tool)", "Free", "Only question 1", "Catching typing errors before searching", "A well-formed number can still be unregistered, someone else's or cancelled"],
          ["Registration certificate (Form GST REG-06) from the supplier", "Free", "Questions 2 and 3, as on the date issued", "Vendor onboarding files", "Does not show later cancellation or suspension – always pair with a live search"],
          [`<a href="${TOOL}">SarkariSewa India GSTIN report</a>`, "₹20 per GSTIN", "All four, as returned by an authorised provider", "A clean, time-stamped record to save as PDF or share", "Not a government source or certificate; confirm on the portal when it matters"],
        ],
      },
    },
    {
      id: "official",
      title: "The official method, step by step",
      steps: [
        `Open ${searchLink("Search Taxpayer")} on services.gst.gov.in.`,
        "Select Search by GSTIN/UIN and type the GSTIN in capitals, with no spaces.",
        "Enter the captcha and click Search.",
        "Read the taxpayer details: legal name, trade name, effective date of registration, constitution, taxpayer type, jurisdiction and status.",
        "Compare each with the document the GSTIN came from (invoice, quotation, purchase order, vendor form).",
        "Save a screenshot or note of the result with the date of the check.",
      ],
      callout: { kind: "info", html: "For a detailed walk-through with error fixes, see <a href=\"/gst/how-to-verify-gst-number.html\">How to verify a GST number online</a>." },
    },
    {
      id: "situations",
      title: "Which method for which situation",
      table: {
        head: ["Situation", "What to do"],
        rows: [
          ["You received a one-off invoice", "Search the GSTIN on the portal; match name, status and invoice date. See the <a href=\"/gst/how-to-verify-gstin-on-invoice.html\">invoice guide</a>."],
          ["You are adding a new supplier", "Collect the registration certificate, search by GSTIN and by PAN, and keep a record. See the <a href=\"/gst/how-to-check-gstin-of-supplier.html\">supplier guide</a>."],
          ["You are about to make a large payment", "Re-check the status the same day, and confirm bank details separately. See <a href=\"/gst/gst-number-check-online.html\">check before payment</a>."],
          ["You need to show proof of the check", "Keep a dated screenshot, or use the <a href=\"" + TOOL + "\">₹20 report</a> and save it as PDF."],
          ["The GSTIN shows as cancelled", "Pause and read <a href=\"/gst/gstin-active-cancelled-check.html\">what to do if a GSTIN is cancelled</a>."],
        ],
      },
    },
    {
      id: "red-flags",
      title: "Red flags during verification",
      list: [
        "The GSTIN returns no taxpayer, even after checking for typing errors.",
        "The name in the result belongs to a different business from the one on the invoice.",
        "The first two digits (state code) do not match the supplier's state, and the supplier has no branch there.",
        "Characters 3 to 12 (the PAN part) differ from the PAN the supplier gave you.",
        "The status is suspended or cancelled, or the invoice is dated before the effective date of registration.",
        "A composition taxpayer has charged GST on a tax invoice – section 10(4) of the CGST Act says composition taxpayers must not collect tax from customers.",
      ],
    },
    {
      id: "paid",
      title: "How our ₹20 GSTIN report works",
      intro: "Our report is an optional convenience, not a replacement for the GST portal:",
      steps: [
        `Enter the GSTIN on the <a href="${TOOL}">GSTIN verification page</a>. The format and checksum are checked for free first, so a mistyped number is caught before you pay.`,
        "Pay ₹20 through the Razorpay payment window.",
        "The GSTIN is verified through an authorised verification provider.",
        "You see the result: active/not active status, legal name, trade name, registration date, taxpayer type, constitution of business and principal place of business, with the time of the check. Exact fields depend on the provider's response.",
        "Save it as PDF from your browser, share a summary, or verify another GSTIN.",
      ],
      callout: { kind: "warn", html: "SarkariSewa India is an independent private platform, not the GST portal or a government department. The report is not a government certificate and cannot change or approve any GST record." },
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.searchpan, OFFICIAL.portal, OFFICIAL.regRules, OFFICIAL.cbic],
  faq: [
    { q: "Is GSTIN verification free on the official portal?", a: "Yes. The Search Taxpayer facility on services.gst.gov.in is free and needs no login. SarkariSewa India's 20 rupee fee is separate and only for its optional report service." },
    { q: "What details can a GSTIN verification show?", a: "The official taxpayer search shows details such as legal name, trade name, effective date of registration, constitution of business, taxpayer type, jurisdiction and GSTIN status, with the cancellation date where applicable." },
    { q: "Is a format check enough to verify a GSTIN?", a: "No. A format check only catches typing errors. A correctly formed GSTIN can still be unregistered, belong to another business, or be cancelled. Always search it on the GST portal." },
    { q: "Can I verify a GSTIN using the registration certificate?", a: "The certificate shows the details on the day it was issued, but not a later suspension or cancellation. Use it for your records and always confirm the current status with a live search." },
    { q: "Should I rely only on GSTIN verification before paying a supplier?", a: "No. It is one part of checking a supplier. Also compare the invoice, contract, delivery documents and bank details, and confirm any change of bank account by phone." },
    { q: "Is the SarkariSewa India report an official GST document?", a: "No. It is an independent paid report based on an authorised provider's response. The official GST portal remains the final reference." },
  ],
  related: related("how-to-verify-gst-number", "gst-number-search", "gstin-status-check", "gstin-format-structure", "gst-number-check-online"),
  aside,
};
