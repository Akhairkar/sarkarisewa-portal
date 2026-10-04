import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, TOOL, VERIFIED } from "./shared";

// Angle: a hands-on tutorial — preparation, each screen, decision rules after
// the result, and a troubleshooting table.
export const howToVerifyGstNumber: DocGuide = {
  crumbs: crumbs("How to Verify a GST Number"),
  docHi: "How to Verify a GST Number",
  title: "How to Verify a GST Number Online – Step-by-Step Guide | SarkariSewa India",
  description: "Step-by-step guide to verify a GST number online using the GST Portal. Learn what to check on the result and when an independent ₹20 GSTIN report can be useful.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "How to Verify a GST Number Online: Step-by-Step Guide",
  lead: "To verify a GST number: (1) copy the 15-character GSTIN exactly from the document, (2) do a quick format check, (3) search it on the GST portal's free Search Taxpayer page with the captcha, (4) compare the name, status, registration date and state with your document, and (5) record the result. The whole process takes about two minutes and works on a phone or computer.",
  facts: [
    ["Step count", "5 steps, about 2 minutes"],
    ["You need", "The GSTIN and the document it came from"],
    ["Website", searchLink("services.gst.gov.in – Search Taxpayer")],
    ["Login", "Not required"],
    ["Pass if", "Found, right name, active, dated correctly"],
    ["Report option", `<a href="${TOOL}">₹20 GSTIN report</a>`],
  ],
  promo: promo("Prefer not to deal with captchas and screenshots? Enter the GSTIN on our page, pay ₹20 and get the verification result as a clean page you can save as PDF."),
  sections: [
    {
      id: "step-1",
      title: "Step 1: Copy the GSTIN exactly",
      intro: "Take the GSTIN from the original document – the tax invoice, quotation, purchase order, registration certificate or the supplier's letterhead. Rule 46 of the CGST Rules requires every tax invoice to show the supplier's GSTIN, so the invoice is usually the best source.",
      list: [
        "Copy all 15 characters. Remove spaces, dashes or dots that sometimes get printed for readability.",
        "Use capital letters. GSTINs contain only digits 0–9 and capital letters A–Z.",
        "If you are reading from a printout or photo, watch for look-alikes: O and 0, I and 1, S and 5, B and 8, Z and 2.",
      ],
    },
    {
      id: "step-2",
      title: "Step 2: Do a 10-second format check",
      intro: "Before going to the portal, glance at the structure. Rule 10 of the CGST Rules sets out the characters of a GSTIN: 2 for the state code, 10 for the PAN (or TAN for tax deductors), 2 for the entity code and 1 checksum character.",
      table: {
        head: ["Characters", "Should look like", "Quick test"],
        rows: [
          ["1–2", "Two digits – the state code", "Matches the supplier's state? (e.g. 27 = Maharashtra, 07 = Delhi)"],
          ["3–12", "The PAN: 5 letters, 4 digits, 1 letter (a TAN for tax deductors)", "Same as the supplier's PAN, if you have it"],
          ["13", "A digit or letter (entity number)", "—"],
          ["14", "Usually the letter Z", "—"],
          ["15", "Checksum digit or letter", "A tool can test it; the portal will reject a wrong one"],
        ],
      },
      callout: { kind: "info", html: "Full breakdown and the state code table: <a href=\"/gst/gstin-format-structure.html\">GSTIN format and structure</a>." },
    },
    {
      id: "step-3",
      title: "Step 3: Search on the GST portal",
      steps: [
        `Open ${searchLink("services.gst.gov.in/services/searchtp")} in your browser. Type the address yourself or use this link – avoid look-alike websites from search ads.`,
        "Keep <strong>Search by GSTIN/UIN</strong> selected.",
        "Paste or type the GSTIN in the GSTIN/UIN box.",
        "Type the characters from the captcha image. If you cannot read them, click the refresh icon for a new image.",
        "Click <strong>Search</strong>. The taxpayer details open on the same page.",
      ],
      callout: { kind: "info", html: "On a phone the page works in any mobile browser. If the result table is cut off, turn the phone sideways or use the browser's \"desktop site\" option." },
    },
    {
      id: "step-4",
      title: "Step 4: Compare the result with your document",
      intro: "Go through the result in this order. Stop at the first \"No\" and sort it out before going further.",
      table: {
        head: ["Question", "Look at", "If No"],
        rows: [
          ["Is it the right business?", "Legal name and trade name", "Ask the supplier for the correct GSTIN"],
          ["Is it active?", "GSTIN/UIN status", "See <a href=\"/gst/gstin-active-cancelled-check.html\">active or cancelled</a>"],
          ["Was it registered on the document date?", "Effective date of registration (and cancellation date, if any)", "Invoice cannot be a valid GST invoice for that date"],
          ["Right state?", "State / jurisdiction vs supplier address", "Ask which branch issued the invoice"],
          ["Right type of tax document?", "Taxpayer type", "A composition taxpayer issues a bill of supply, not a tax invoice charging GST"],
        ],
      },
    },
    {
      id: "step-5",
      title: "Step 5: Record what you checked",
      intro: "Write down the GSTIN, the name and status you saw, and the date of the check – on the invoice, the payment voucher or your vendor file. A dated screenshot works. If you prefer a clean document, our <a href=\"" + TOOL + "\">₹20 report</a> shows the result with the time of the check and can be saved as PDF. A record matters because status can change later, and a cancellation can even be dated back (section 29(2) of the CGST Act).",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting: common problems and fixes",
      table: {
        head: ["Problem", "Likely cause", "Fix"],
        rows: [
          ["\"Invalid GSTIN\" or no result", "Typing error, missing character or wrong checksum", "Re-copy from the original document; check look-alike characters"],
          ["Captcha keeps failing", "Mistyped or expired captcha", "Refresh the image and type the new characters carefully"],
          ["Page does not load or is slow", "Portal busy or network issue", "Try again after a few minutes; do not switch to an unofficial copy"],
          ["Name is a person, not a shop", "Proprietorship – legal name is the owner's name", "Check the trade name; it usually shows the shop name"],
          ["Different state from the address", "Business has registrations in several states", "Search by PAN to see all its GSTINs and pick the right one"],
          ["Result is fine but you still have doubts", "Search shows registration, not business conduct", "Ask for the registration certificate and check delivery and bank details"],
        ],
      },
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.searchpan, OFFICIAL.portal, OFFICIAL.regRules, OFFICIAL.invoiceRules],
  faq: [
    { q: "How do I verify a GST number online?", a: "Open the Search Taxpayer page on services.gst.gov.in, choose Search by GSTIN/UIN, enter the 15-character GSTIN and the captcha, and click Search. Then compare the name, status, registration date and state with your document." },
    { q: "Do I need to log in to the GST portal to verify a GSTIN?", a: "No. The Search Taxpayer facility is public. You only need the GSTIN and the captcha." },
    { q: "Can I verify a GST number on my mobile?", a: "Yes. The official Search Taxpayer page works in a mobile browser. If the table is cut off, rotate the phone or use the desktop site option." },
    { q: "Why is the legal name a person's name and not the shop name?", a: "For a sole proprietorship the legal name is the owner's name. The shop or brand name appears as the trade name." },
    { q: "Which GST details should I compare with an invoice?", a: "Compare the supplier's legal or trade name, the GSTIN status, the effective date of registration and the state with the invoice. Also check that your own GSTIN is printed correctly if you are registered." },
    { q: "Can I use SarkariSewa India instead of the official GST portal?", a: "Our 20 rupee report is an optional convenience that presents the result neatly. It is not the government portal, and the official portal remains the final reference." },
  ],
  related: related("gst-number-search", "gstin-format-structure", "how-to-verify-gstin-on-invoice", "gstin-status-check", "gstin-verification-online"),
  aside,
};
