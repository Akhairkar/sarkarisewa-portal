import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: concept explainer — registration (legal status, sections 22/24/25,
// REG-06) vs GSTIN (the identifier, rule 10), with a comparison table and
// common confusions.
export const gstinVsGstRegistration: DocGuide = {
  crumbs: crumbs("GSTIN vs GST Registration"),
  docHi: "GSTIN vs GST Registration",
  title: "GSTIN vs GST Registration | SarkariSewa India",
  description: "Understand the difference between GST registration and the GSTIN issued in connection with that registration.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GSTIN vs GST Registration: What Is the Difference?",
  lead: "GST registration is the legal status a business gets when the tax department approves its application under the CGST Act. The GSTIN is the 15-character number assigned to that registration (rule 10 of the CGST Rules), shown on the registration certificate in Form GST REG-06. One business (one PAN) can hold several registrations – one per state, and sometimes more than one in a state – and each registration has its own GSTIN. If a registration is cancelled, its GSTIN stops being valid for new tax invoices.",
  facts: [
    ["GST registration", "Legal status under the CGST Act (sections 22, 24, 25)"],
    ["GSTIN", "15-character number assigned to a registration (rule 10)"],
    ["Proof", "Registration certificate, Form GST REG-06"],
    ["Per PAN", "One registration per state; more possible"],
    ["Check either", searchLink("GST portal – Search Taxpayer")],
    ["Report", `<a href="${TOOL}">₹20 GSTIN report</a>`],
  ],
  promo: promo("Want to see what a business's registration looks like behind its GSTIN? Our report shows the registered name, status, registration date, taxpayer type and constitution in one clean page."),
  sections: [
    {
      id: "difference",
      title: "The difference in one table",
      table: {
        head: ["", "GST registration", "GSTIN"],
        rows: [
          ["What it is", "The legal status of being registered under GST", "The identification number of that registration"],
          ["Law", "Sections 22, 24 and 25 of the CGST Act; rules 8–26 of the CGST Rules", "Rule 10 of the CGST Rules (format: state code, PAN/TAN, entity code, checksum)"],
          ["How you get it", "Apply on the GST portal (Form GST REG-01 for normal taxpayers); the officer approves", "Assigned automatically when the registration is approved"],
          ["Proof", "Registration certificate in Form GST REG-06", "Printed on the certificate, invoices and the shop name board"],
          ["How many", "One per state/UT where liable; separate ones possible for multiple places of business in a state", "One for each registration"],
          ["Can change?", "Can be amended (rule 19), suspended or cancelled (section 29)", "Stays the same through amendments; a cancelled registration's GSTIN stops being valid; a new registration means a new GSTIN"],
          ["What you check", "Status, type, constitution, registration date", "That the number exists and belongs to the business"],
        ],
      },
    },
    {
      id: "registration",
      title: "What GST registration means",
      intro: "Registration is what lets a business collect GST from customers and claim input tax credit. Under section 22 of the CGST Act, a supplier must register in the state from which it makes taxable supplies once its aggregate turnover in a financial year crosses the threshold – ₹20 lakh in general and ₹10 lakh in special category states, with the law allowing states to raise the limit to up to ₹40 lakh for businesses supplying only goods. Section 24 lists persons who must register regardless of turnover in certain cases, and section 25(3) allows voluntary registration.",
      list: [
        "Apply within 30 days of becoming liable (section 25(1)).",
        "A PAN is required to register (section 25(6)); tax deductors may use a TAN.",
        "Each state registration is treated as a distinct person (section 25(4)), so each files its own returns.",
        "The registration is effective from the date of liability if the application is made within 30 days; otherwise from the date of grant (rule 10).",
      ],
      callout: { kind: "info", html: "Turnover limits can be changed by notification and differ for some states. Check the current limit for your state on the GST portal or with your tax professional before deciding whether to register." },
    },
    {
      id: "gstin",
      title: "What the GSTIN is",
      intro: "The GSTIN is the 15-character identifier assigned when a registration is granted: 2 characters for the state code, 10 for the PAN (or TAN), 2 for the entity code and 1 checksum character. It is what appears on tax invoices (rule 46), on the name board at each place of business (rule 18) and in every return. Read <a href=\"/gst/gstin-format-structure.html\">GSTIN format and state codes</a> for the full breakdown.",
    },
    {
      id: "confusions",
      title: "Common confusions, cleared",
      list: [
        "<strong>\"My GST number\" vs \"my GST registration\":</strong> people use both to mean the same thing in daily talk. Strictly, the number identifies the registration.",
        "<strong>One business, many GSTINs:</strong> a company registered in Maharashtra and Karnataka has two registrations and two GSTINs with the same PAN in the middle but different state codes (27… and 29…).",
        "<strong>Changing name or address:</strong> you amend the registration (rule 19); the GSTIN stays the same. But if a change in constitution changes the PAN (for example a proprietorship becoming a company), a fresh registration – and so a new GSTIN – is needed.",
        "<strong>Cancelled registration:</strong> the number still shows up in a search, but with a cancelled status. It cannot be used for new tax invoices.",
        "<strong>UIN:</strong> embassies, UN bodies and other notified entities get a Unique Identity Number under section 25(9) instead of a normal registration.",
        "<strong>Registration certificate vs search result:</strong> the certificate shows details as on the day it was issued; the portal search shows the current status.",
      ],
    },
    {
      id: "checking",
      title: "Checking a business: registration or GSTIN?",
      intro: "When you check a supplier you are really checking both: that the GSTIN is a real number belonging to that business, and that its registration is active and of the right type.",
      steps: [
        `Search the GSTIN on ${searchLink("Search Taxpayer")} – this confirms the number and shows the registration behind it.`,
        "Read the registration details: legal name, constitution, taxpayer type, effective date and status.",
        "Ask for the registration certificate (REG-06) for your files, but rely on the live search for current status.",
        `If you want a tidy record, use our <a href="${TOOL}">₹20 GSTIN report</a> and save it as PDF.`,
      ],
    },
  ],
  official: [OFFICIAL.regRules, OFFICIAL.acts, OFFICIAL.searchtp, OFFICIAL.portal, OFFICIAL.cbic],
  faq: [
    { q: "Is GSTIN the same as GST registration?", a: "Not exactly. GST registration is the legal status of being registered under the CGST Act. The GSTIN is the 15-character number assigned to that registration and printed on the registration certificate." },
    { q: "Can one business have more than one GSTIN?", a: "Yes. A business needs a separate registration in each state where it is liable, and can have separate registrations for multiple places of business in one state. Each registration has its own GSTIN with the same PAN in the middle." },
    { q: "Does the GSTIN change if I change my business address or name?", a: "No. Name or address changes are made by amending the registration, and the GSTIN stays the same. A change in constitution that changes the PAN needs a fresh registration and a new GSTIN." },
    { q: "Which document proves GST registration?", a: "The registration certificate in Form GST REG-06, issued under rule 10 of the CGST Rules. It shows the GSTIN and the principal and additional places of business." },
    { q: "When is GST registration compulsory?", a: "Under section 22 of the CGST Act a supplier must register once aggregate turnover in a financial year crosses the threshold, which is 20 lakh rupees in general and 10 lakh in special category states, with higher limits allowed for goods-only suppliers. Section 24 requires some persons to register regardless of turnover." },
    { q: "Is GSTIN verification the same as GST registration?", a: "No. Registration is the process of becoming registered. Verification is checking an existing GSTIN on the GST portal to see the registration details and status." },
  ],
  related: related("gstin-format-structure", "gst-number-search", "gstin-status-check", "how-to-check-gstin-of-supplier", "gstin-verification-online"),
  aside,
};
