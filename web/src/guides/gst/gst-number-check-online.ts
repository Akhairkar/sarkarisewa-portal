import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: a pre-payment check for accounts / small business owners — what to
// compare before releasing money and why it matters for input tax credit.
export const gstNumberCheckOnline: DocGuide = {
  crumbs: crumbs("Check GSTIN Before Payment"),
  docHi: "GST Number Check Online",
  title: "GST Number Check Online – Verify GSTIN Before Payment | SarkariSewa India",
  description: "Check a GST number online before paying a supplier or processing an invoice. Learn what to compare on the GST Portal and use SarkariSewa India's ₹20 independent verification report.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GST Number Check Online: Verify the GSTIN Before You Pay",
  lead: "Before you pay a supplier's GST invoice, check the GSTIN on the official GST portal's free Search Taxpayer page. Confirm three things: the GSTIN exists, the legal or trade name matches the business that billed you, and the registration is active and was effective on the invoice date. Your input tax credit depends on getting a valid tax invoice from a registered supplier, so a two-minute check now can save a lot of trouble later.",
  facts: [
    ["Where to check", searchLink("GST portal – Search Taxpayer")],
    ["Time needed", "About 2 minutes per GSTIN"],
    ["Must match", "GSTIN, legal/trade name, state"],
    ["Must be", "Active, and effective on the invoice date"],
    ["Cost", "Free on the GST portal"],
    ["Report for files", `<a href="${TOOL}">₹20 GSTIN report</a> (optional)`],
  ],
  promo: promo("Paying many suppliers and want a record of each check? Our report puts the GSTIN's status and registration details on one page with the time of the check, which you can save as PDF and attach to the payment voucher."),
  sections: [
    {
      id: "why",
      title: "Why check the GSTIN before paying, not after",
      intro: "Once money has gone out, fixing a wrong or fake GSTIN is slow and sometimes impossible. A check before payment protects you in three ways:",
      list: [
        "<strong>Input tax credit (ITC).</strong> Section 16(2) of the CGST Act allows ITC only if you hold a tax invoice issued by a <em>registered</em> supplier, you have received the goods or services, the tax charged has actually been paid to the Government, and you have filed your return. An invoice with a wrong or cancelled GSTIN puts that credit at risk.",
        "<strong>Your GSTR-2B.</strong> The monthly GSTR-2B statement of ITC is built from the details your suppliers report in their GSTR-1 (rule 60 of the CGST Rules). If the supplier's GSTIN on your invoice is wrong, the invoice may never appear there.",
        "<strong>Fraud and mistakes.</strong> A changed GSTIN, a name that does not match, or a cancelled registration can be a simple data-entry error – or a warning sign. Either way, you want to know before you pay.",
      ],
    },
    {
      id: "steps",
      title: "The 2-minute pre-payment check",
      steps: [
        "Pick up the supplier's tax invoice and find the <strong>supplier's GSTIN</strong> (usually near the supplier's name and address at the top).",
        `Open ${searchLink("Search Taxpayer")} on the GST portal, choose Search by GSTIN/UIN, enter the GSTIN and the captcha.`,
        "<strong>Match the name:</strong> the legal name or trade name shown should be the business that sent the invoice.",
        "<strong>Check the status:</strong> it should be active. If it is cancelled or suspended, stop and read our <a href=\"/gst/gstin-active-cancelled-check.html\">active or cancelled guide</a>.",
        "<strong>Check the date:</strong> the effective date of registration should be on or before the invoice date.",
        "<strong>Check the state:</strong> the first two digits of the GSTIN are the state code. They should match the state of the supplier's address on the invoice.",
        "<strong>Check your own GSTIN</strong> on the invoice too. If you are registered, rule 46 requires the invoice to show your GSTIN as the recipient.",
        "Record the result (date checked, status seen, your initials) on the payment voucher or in your accounting software, then release payment.",
      ],
    },
    {
      id: "checklist",
      title: "What to compare: a quick table",
      table: {
        head: ["Check", "Where you see it", "OK if…", "Stop and ask if…"],
        rows: [
          ["GSTIN exists", "GST portal search", "Taxpayer details appear", "No record found"],
          ["Name", "Legal/trade name in result vs invoice", "Same business (minor spelling differences can be normal)", "A completely different business name"],
          ["Status", "GSTIN/UIN status", "Active", "Cancelled, suspended or any other non-active status"],
          ["Registration date", "Effective date of registration", "On or before the invoice date", "Invoice dated before registration"],
          ["State", "First 2 digits of GSTIN vs supplier address", "Same state", "Different state with no explanation (e.g. a branch in another state)"],
          ["Tax type", "CGST+SGST or IGST on invoice", "CGST+SGST when supplier and place of supply are in the same state; IGST when they differ", "Tax type does not fit the states involved"],
          ["Bank account", "Payment details on invoice vs your vendor master", "Account name matches the supplier", "New or changed bank account sent by email or phone only"],
        ],
      },
      callout: { kind: "info", html: "A GST search does not tell you anything about bank accounts. A last-minute change of bank details is a common payment fraud pattern – always confirm it by calling the supplier on a number you already have." },
    },
    {
      id: "mismatch",
      title: "If something does not match",
      list: [
        "<strong>Name differs slightly</strong> (abbreviations, \"Pvt Ltd\" vs \"Private Limited\"): usually fine. Note it and continue.",
        "<strong>Name is completely different:</strong> hold the payment. Ask the supplier for the correct GSTIN and a revised invoice.",
        "<strong>GSTIN not found:</strong> re-check for typing errors. If it still fails, ask for the registration certificate (Form GST REG-06).",
        "<strong>Status not active:</strong> do not pay the GST portion until you understand the situation. Talk to your accountant before claiming ITC on that invoice.",
        "<strong>Wrong GSTIN for your business</strong> on the invoice: ask for a corrected invoice or the appropriate credit/debit note, so the supplier reports it correctly in GSTR-1.",
      ],
      callout: { kind: "warn", html: "Never edit a supplier's GSTIN in your books just to make it \"match\". Get the correct document from the supplier instead." },
    },
    {
      id: "limits",
      title: "What a GSTIN check cannot tell you",
      intro: "A clean result is a good sign, but it is only one part of checking a supplier. It does not prove that the goods were supplied, that the supplier will file its GSTR-1 on time or pay the tax, or that the price and quantity on the invoice are right. For new or high-value suppliers, also look at their track record, contract terms and delivery documents, and keep re-checking the GSTIN from time to time because status can change.",
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.invoiceRules, OFFICIAL.acts, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "What is the first thing to check on a GST invoice?", a: "Check that the supplier's GSTIN is printed and search it on the GST portal. The legal or trade name in the result should match the business that issued the invoice, and the status should be active." },
    { q: "Why should I check GSTIN before paying a supplier?", a: "Input tax credit is allowed only on a tax invoice from a registered supplier, among other conditions in section 16(2) of the CGST Act. Checking first helps you avoid paying GST on an invoice with a wrong, fake or cancelled GSTIN." },
    { q: "Can GSTIN checking help with a new supplier?", a: "Yes. It confirms the supplier is registered under GST and shows the registered name, type and status. Use it as one step along with contract, delivery and bank-detail checks." },
    { q: "Does a GST search show the supplier's bank account?", a: "No. A GST search does not show bank details. Confirm any new or changed bank account by calling the supplier on a phone number you already have on record." },
    { q: "How often should I check a regular supplier's GSTIN?", a: "Check it when you onboard the supplier and again periodically, for example before large payments, because a registration can be suspended or cancelled later." },
    { q: "Is the 20 rupee fee a GST government fee?", a: "No. Checking a GSTIN on the GST portal is free. The 20 rupee fee is only for SarkariSewa India's optional GSTIN report service." },
  ],
  related: related("how-to-verify-gstin-on-invoice", "how-to-check-gstin-of-supplier", "gstin-active-cancelled-check", "gst-number-search", "gstin-status-check"),
  aside,
};
