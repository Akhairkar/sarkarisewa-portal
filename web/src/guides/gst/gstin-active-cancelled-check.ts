import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: decision guide once you see the status — scenarios (before order,
// invoice in hand, ITC already taken, own GSTIN cancelled) and what to do.
export const gstinActiveCancelledCheck: DocGuide = {
  crumbs: crumbs("GSTIN Active or Cancelled Check"),
  docHi: "GSTIN Active or Cancelled Check",
  title: "GSTIN Active or Cancelled Check | SarkariSewa India",
  description: "Learn how to check whether a GSTIN is active, cancelled or showing another available status.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "Is This GSTIN Active or Cancelled? How to Check and What to Do",
  lead: "Search the GSTIN on the GST portal's free Search Taxpayer page and read the status line. If it says Active, the registration is in force and you can continue with your normal checks. If it shows Cancelled or Suspended, the business should not be issuing GST tax invoices under that number for the period concerned – so pause any order or payment, compare the cancellation date with your invoice dates, and ask the supplier and your accountant before claiming input tax credit.",
  facts: [
    ["Check at", searchLink("GST portal – Search Taxpayer")],
    ["Active", "Registration in force – continue other checks"],
    ["Suspended", "No tax invoices during suspension (rule 21A)"],
    ["Cancelled", "No GST invoices after the cancellation date"],
    ["Key date", "Cancellation date vs your invoice date"],
    ["Record", `Dated screenshot or <a href="${TOOL}">₹20 report</a>`],
  ],
  promo: promo("Need proof of whether a GSTIN was active on the day you checked? Our report records the status and registration details with the time of the check, ready to save as PDF."),
  sections: [
    {
      id: "check",
      title: "How to check active or cancelled in 1 minute",
      steps: [
        `Open ${searchLink("Search Taxpayer")} on services.gst.gov.in.`,
        "Enter the GSTIN and captcha, then click Search.",
        "Read the <strong>GSTIN/UIN Status</strong>. If the registration is cancelled, look for the date of cancellation in the result.",
        "Check the legal name too, so you know the status belongs to the right business.",
      ],
      callout: { kind: "info", html: "Want to understand every status in detail, including suspension and how status changes? See <a href=\"/gst/gstin-status-check.html\">GSTIN status check explained</a>." },
    },
    {
      id: "scenarios",
      title: "What to do in each situation",
      table: {
        head: ["Your situation", "GSTIN is Active", "GSTIN is Cancelled or Suspended"],
        rows: [
          ["Before placing an order", "Continue: match name, state and PAN", "Do not place a GST order on this GSTIN. Ask the supplier if it has a new or different registration"],
          ["Invoice received, not yet paid", "Check the invoice date is after the registration date, then pay", "Compare the invoice date with the cancellation/suspension date. If the invoice falls after it, ask for an explanation and hold the GST amount"],
          ["Invoice paid and ITC already claimed", "Nothing extra; keep your record of the check", "Speak to your accountant. ITC depends on a valid tax invoice from a registered supplier and the tax being paid to the Government (section 16(2))"],
          ["Regular supplier, ongoing business", "Re-check periodically", "Stop GST billing on the old GSTIN until the supplier is re-registered or the cancellation is revoked"],
          ["It is your own GSTIN", "—", "Log in to the GST portal and read the notices/orders; talk to your tax professional about revocation or a fresh registration"],
        ],
      },
    },
    {
      id: "cancelled-meaning",
      title: "Why a GSTIN gets cancelled",
      intro: "Cancellation can come from the taxpayer or the tax officer. Knowing which helps you judge the risk:",
      table: {
        head: ["Who starts it", "Typical reasons (CGST Act section 29, rules 20–22)", "What it suggests"],
        rows: [
          ["The taxpayer (application in Form GST REG-16)", "Business discontinued, transferred or merged; change in constitution; no longer liable to register; opting out of voluntary registration", "Often a normal business event – ask the supplier how it will bill you now"],
          ["The tax officer (notice in Form GST REG-17)", "Not filing returns for the prescribed period; no business at the declared place; issuing invoices without supply; availing ITC in violation of section 16; registration obtained by fraud", "Needs more caution, especially for invoices close to the cancellation date"],
        ],
      },
      callout: { kind: "warn", html: "The officer can cancel <strong>from a retrospective date</strong> (section 29(2)). An invoice that looked fine when you received it can later fall inside a cancelled period. That is why a dated record of your check is useful." },
    },
    {
      id: "suspended",
      title: "Suspended is not the same as cancelled",
      intro: "Under rule 21A a registration is suspended while cancellation proceedings are pending – either after the taxpayer applies to cancel, or when the officer has reason to believe it is liable to be cancelled. During suspension the person must not make taxable supplies; rule 21A explains this as not issuing tax invoices and not charging tax. The suspension can be revoked if the proceedings are dropped, for example after the taxpayer files pending returns and pays dues. So a suspended GSTIN may become active again – or end up cancelled.",
    },
    {
      id: "restore",
      title: "Can a cancelled GSTIN be restored?",
      list: [
        "<strong>Cancelled by the officer on his own:</strong> the taxpayer can apply for revocation in Form GST REG-21 under section 30 and rule 23, within the time allowed. If the cancellation was for not filing returns, pending returns and dues have to be cleared first. If revoked, the <em>same</em> GSTIN becomes active again.",
        "<strong>Cancelled on the taxpayer's own application:</strong> the business would normally apply for a fresh registration if it needs one, which gives a new GSTIN.",
        "<strong>Either way</strong>, cancellation does not cancel past tax dues – section 29(3) keeps the liability for earlier periods.",
      ],
    },
    {
      id: "record",
      title: "Keep a record of every status check",
      intro: `For each supplier GSTIN, note the status you saw, the date and who checked. A screenshot of the portal result is enough. For a cleaner record, our <a href="${TOOL}">₹20 GSTIN report</a> shows active/not active status with the registered name and details and the time of the check, which you can save as PDF. It is an independent report, not a government certificate.`,
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.regRules, OFFICIAL.acts, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "How do I know if a GST number is cancelled?", a: "Search it on the Search Taxpayer page of the GST portal. The GSTIN/UIN status shows whether it is active or cancelled, and a cancelled registration may also show the date of cancellation." },
    { q: "Can I pay a supplier whose GSTIN is cancelled?", a: "You can pay for goods or services actually received, but a cancelled supplier should not charge GST on invoices dated after the cancellation date. Hold the GST portion and ask your accountant before claiming input tax credit." },
    { q: "Can I claim ITC on an invoice from a cancelled GSTIN?", a: "Input tax credit needs a valid tax invoice from a registered supplier and the tax being paid to the Government, among other conditions in section 16(2) of the CGST Act. If the invoice date falls in a cancelled or suspended period, take professional advice before claiming." },
    { q: "What is the difference between suspended and cancelled GSTIN?", a: "Suspension is temporary while cancellation proceedings are pending and can be revoked. Cancellation ends the registration from the cancellation date, though it can be revoked in some cases on application." },
    { q: "Can a cancelled GSTIN become active again?", a: "Yes, if the officer cancelled it on his own motion and the taxpayer gets revocation under section 30 of the CGST Act. The same GSTIN then becomes active again." },
    { q: "Can a GSTIN format check prove that the number is active?", a: "No. A format check only catches typing errors. Status can only be seen through the GST portal's taxpayer search or a report based on it." },
  ],
  related: related("gstin-status-check", "gst-number-check-online", "how-to-check-gstin-of-supplier", "how-to-verify-gstin-on-invoice", "gstin-vs-gst-registration"),
  aside,
};
