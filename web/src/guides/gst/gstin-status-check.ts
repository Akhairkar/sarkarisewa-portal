import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: the status field itself — where it appears, what each status means
// in law (rules 21A, 22; section 29), dates, and why it changes.
export const gstinStatusCheck: DocGuide = {
  crumbs: crumbs("GSTIN Status Check"),
  docHi: "GSTIN Status Check",
  title: "GSTIN Status Check Online – Active, Cancelled & More | SarkariSewa India",
  description: "Check how GSTIN status is shown during taxpayer search, including active and cancelled registrations. Learn the official process and use an independent ₹20 verification report when needed.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GSTIN Status Check Online: Active, Suspended, Cancelled – What It Means",
  lead: "To check a GSTIN's status, search the number on the GST portal's free Search Taxpayer page; the result shows the \"GSTIN/UIN Status\" next to the business details. \"Active\" means the registration is in force. A registration can also be suspended while cancellation proceedings are pending, or cancelled – by the officer or on the taxpayer's own application – sometimes from an earlier date. Status changes over time, so always note the date you checked.",
  facts: [
    ["Where", searchLink("GST portal – Search Taxpayer")],
    ["Field to read", "GSTIN/UIN Status"],
    ["Common statuses", "Active, Suspended, Cancelled"],
    ["Also check", "Effective date of registration; cancellation date if shown"],
    ["Legal basis", "Section 29 CGST Act; rules 20–23 CGST Rules"],
    ["Cost", "Free on the portal"],
  ],
  promo: promo("Want the status recorded with a date and time? Our report shows whether the GSTIN is active along with its registered name and details, time-stamped, ready to save as PDF."),
  sections: [
    {
      id: "how",
      title: "How to check GSTIN status",
      steps: [
        `Go to ${searchLink("Search Taxpayer")} on services.gst.gov.in (no login needed).`,
        "Choose Search by GSTIN/UIN, enter the full 15-character GSTIN and the captcha, and click Search.",
        "Find the <strong>GSTIN/UIN Status</strong> line in the result.",
        "Read it together with the <strong>effective date of registration</strong> and, if shown, the <strong>date of cancellation</strong>.",
        "Confirm the legal/trade name is the business you expect – a status is only useful if it belongs to the right taxpayer.",
        "Write down the date and time of your check. If you need a record to share, take a screenshot or use a report.",
      ],
    },
    {
      id: "meanings",
      title: "What each status means",
      intro: "The GST law provides for registrations that are in force, suspended or cancelled. The portal's wording may vary slightly, but this is what lies behind each:",
      table: {
        head: ["Status", "What it means", "Can the supplier issue a tax invoice?", "What you should do"],
        rows: [
          ["<strong>Active</strong>", "Registration is in force", "Yes", "Go ahead with your other checks (name, date, state)"],
          ["<strong>Suspended</strong>", "Registration is suspended while cancellation proceedings are pending (rule 21A) – either the taxpayer applied to cancel, or the officer believes it is liable to be cancelled", "No. During suspension the person must not make taxable supplies, which rule 21A explains as not issuing tax invoices or charging tax", "Do not accept a tax invoice dated within the suspension period without advice from your accountant"],
          ["<strong>Cancelled</strong> (on the taxpayer's application)", "The taxpayer asked to cancel, e.g. business closed or no longer liable to register (section 29(1), rule 20)", "No, not after the cancellation date", "Ask how the supplier will bill you now; a fresh registration means a new GSTIN"],
          ["<strong>Cancelled</strong> (by the tax officer)", "The officer cancelled it on grounds in section 29(2) or rule 21, such as not filing returns, no business at the declared place, or registration obtained by fraud", "No, not after the cancellation date", "Treat with extra caution; check invoices already received from that supplier"],
        ],
      },
      callout: { kind: "warn", html: "Section 29(2) allows the officer to cancel a registration <strong>from a retrospective date</strong>. So a GSTIN that was active when you checked last month can later show a cancellation date that falls before your invoice. Keep the record of your check." },
    },
    {
      id: "dates",
      title: "The dates that matter",
      list: [
        "<strong>Effective date of registration:</strong> the registration is valid from this date. Under rule 10, if the business applied within 30 days of becoming liable, this is the date it became liable; if it applied later, it is the date registration was granted. An invoice dated earlier than this is a red flag.",
        "<strong>Date of cancellation:</strong> if shown, the registration ends from this date. Invoices dated after it should not carry GST under that GSTIN.",
        "<strong>Your check date:</strong> the status is only true for the moment you searched. Record it.",
      ],
    },
    {
      id: "changes",
      title: "Why status changes, and can it come back?",
      intro: "A status is not permanent. These are the common movements:",
      list: [
        "<strong>Active → Suspended:</strong> when the taxpayer applies for cancellation, or when the officer starts cancellation proceedings (rule 21A).",
        "<strong>Suspended → Active:</strong> the suspension is revoked when proceedings end in the taxpayer's favour, for example if the officer drops the proceedings after the taxpayer files pending returns and pays dues (rule 22(4)).",
        "<strong>Suspended → Cancelled:</strong> when the officer passes a cancellation order (rule 22(3)).",
        "<strong>Cancelled → Active:</strong> if the officer cancelled it on his own motion, the taxpayer can apply for <em>revocation</em> under section 30 and rule 23 within the time allowed. If revoked, the same GSTIN becomes active again.",
      ],
      callout: { kind: "info", html: "Cancellation does not wipe out the taxpayer's past tax liability – section 29(3) says dues for earlier periods still have to be paid." },
    },
    {
      id: "beyond",
      title: "An active status is not the whole story",
      intro: "An active GSTIN shows the registration is in force today. It does not tell you whether the supplier files returns on time, pays the tax collected from you, or will deliver what was ordered. For regular suppliers, re-check status periodically and keep an eye on whether their invoices appear in your GSTR-2B. Our guide to <a href=\"/gst/how-to-check-gstin-of-supplier.html\">checking a supplier's GSTIN</a> covers a full onboarding checklist.",
    },
    {
      id: "report",
      title: "Keep a record with a status report",
      intro: `If you need to show an auditor, manager or client that a GSTIN was active when you checked it, a screenshot of the portal works. Our <a href="${TOOL}">₹20 GSTIN report</a> is a tidier option: it shows active/not active status, legal and trade name, registration date, taxpayer type, constitution and place of business with the time of the check, which you can save as PDF. It reflects the provider's response at that moment and is not a government certificate.`,
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.regRules, OFFICIAL.acts, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "Where can I check GSTIN status officially?", a: "On the GST portal's Search Taxpayer page at services.gst.gov.in. Enter the GSTIN and captcha; the result shows the GSTIN/UIN status with the business details. It is free and needs no login." },
    { q: "What does suspended GST registration mean?", a: "The registration is on hold while cancellation proceedings are pending, either because the taxpayer applied for cancellation or the officer believes it should be cancelled. During suspension the person must not issue tax invoices or charge tax." },
    { q: "Can a cancelled GSTIN become active again?", a: "Yes, in some cases. If the officer cancelled it on his own motion, the taxpayer can apply for revocation under section 30 of the CGST Act within the allowed time. If revocation is granted, the same GSTIN becomes active again." },
    { q: "Can a GSTIN have a cancellation date in the past?", a: "Yes. Section 29(2) allows the officer to cancel a registration from a retrospective date, so a cancellation date can fall before the date you search." },
    { q: "Does active GSTIN status guarantee a genuine supplier?", a: "No. It only shows the registration is in force. Also match the name, registration date and state, and check the supplier's track record, delivery and payment details." },
    { q: "How often does GSTIN status change?", a: "There is no fixed schedule. Status changes when a registration is suspended, cancelled or restored, so re-check before important payments and note the date of every check." },
  ],
  related: related("gstin-active-cancelled-check", "gst-number-check-online", "gst-number-search", "how-to-verify-gst-number", "gstin-verification-online"),
  aside,
};
