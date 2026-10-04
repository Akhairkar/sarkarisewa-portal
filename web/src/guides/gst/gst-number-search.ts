import type { DocGuide } from "../doc/types";
import { aside, crumbs, MODIFIED, OFFICIAL, promo, related, searchLink, SEARCH_PAN, TOOL, VERIFIED } from "./shared";

// Angle: the search facility itself — which search to use, what you need,
// what comes back, and what to do when you only have a name.
export const gstNumberSearch: DocGuide = {
  crumbs: crumbs("GST Number Search"),
  docHi: "GST Number Search",
  title: "GST Number Search Online – Find & Check GSTIN | SarkariSewa India",
  description: "Learn how to search a GST number online using the official GST taxpayer search. Check GSTIN status and business details, and access an independent ₹20 verification report.",
  published: MODIFIED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "GST Number Search Online: Find and Check Any GSTIN",
  lead: "You can search any GST number (GSTIN) for free on the official GST portal's Search Taxpayer page at services.gst.gov.in. Enter the 15-character GSTIN, type the captcha and the portal shows the registered business behind it: legal name, trade name, registration date, constitution, taxpayer type, jurisdiction and whether the GSTIN is active or cancelled. If you only have the business's PAN, a separate search lists the GSTINs linked to that PAN.",
  facts: [
    ["Official search", searchLink("services.gst.gov.in › Search Taxpayer")],
    ["Search by", "GSTIN/UIN, or PAN (separate option)"],
    ["Login needed?", "No – the search is public; only a captcha is asked"],
    ["Government fee", "None – the official search is free"],
    ["GSTIN length", "15 characters (letters and digits)"],
    ["Ready report", `<a href="${TOOL}">₹20 GSTIN report</a> (optional)`],
  ],
  promo: promo("Need the search result as a neat document for your files, your accountant or your purchase team? Our report gives you the key registration details of one GSTIN on a single page."),
  sections: [
    {
      id: "what-is",
      title: "What a GST number search actually tells you",
      intro: "Every business registered under GST gets a GSTIN, a 15-character Goods and Services Tax Identification Number assigned when its registration is approved (rule 10 of the CGST Rules, 2017). A GST number search looks that number up in the GST system and returns the registration details on record. GSTN, the company that runs the portal, describes this facility as the way to check that a GSTIN is genuine and to see the taxpayer's details before you deal with them.",
      list: [
        "<strong>Is the number real?</strong> A made-up or mistyped GSTIN returns no taxpayer at all.",
        "<strong>Whose number is it?</strong> The legal name and trade name show which business holds it.",
        "<strong>Is it still valid?</strong> The status tells you if the registration is active or cancelled; a cancellation date may also be shown.",
        "<strong>What kind of taxpayer?</strong> Taxpayer type (for example regular or composition) and constitution (proprietorship, partnership, company and so on).",
        "<strong>Where is it registered?</strong> The state jurisdiction and principal place of business.",
      ],
    },
    {
      id: "which-search",
      title: "Which search option to use",
      intro: "The Search Taxpayer menu on the GST portal has more than one search. Pick the one that matches what you have in hand:",
      table: {
        head: ["You have", "Use this search", "What you get"],
        rows: [
          ["The full 15-character GSTIN (from an invoice, quotation or letterhead)", searchLink("Search by GSTIN/UIN"), "The registration details of that one GSTIN"],
          ["Only the PAN of the business", `<a href="${SEARCH_PAN}" target="_blank" rel="noopener nofollow">Search by PAN</a>`, "The GSTIN(s) registered against that PAN, state by state"],
          ["Only the business name", "No name search – ask the business for its GSTIN", "A registered business must print its GSTIN on tax invoices and display it on its name board"],
          ["A UIN (embassies, UN bodies and other notified entities)", searchLink("Search by GSTIN/UIN"), "Details of that Unique Identity Number holder"],
        ],
      },
      callout: { kind: "info", html: "Why PAN search is useful: one business can hold several GSTINs – one for each state it is registered in, and sometimes more than one in the same state (section 25 of the CGST Act). Searching by PAN shows them all, so you can pick the GSTIN for the right state." },
    },
    {
      id: "steps",
      title: "How to search a GST number (step by step)",
      steps: [
        `Open the official ${searchLink("Search Taxpayer page")} on services.gst.gov.in. You do not need to log in.`,
        "Make sure the <strong>Search by GSTIN/UIN</strong> option is selected.",
        "Type the GSTIN exactly as printed, in capital letters and without spaces. Check you have all 15 characters.",
        "Type the characters shown in the captcha image (use the refresh icon if it is unreadable) and click <strong>Search</strong>.",
        "Read the taxpayer details that appear. Check the legal name, trade name and status first, then the registration date, taxpayer type and state.",
        "Compare these details with the invoice or document the GSTIN came from (see the table below).",
        "Note down the date of your search, or keep a screenshot or report, so you have a record of what you checked and when.",
      ],
    },
    {
      id: "result",
      title: "Reading the search result",
      intro: "The exact layout of the portal can change, but these are the details GSTN says the taxpayer search provides, and what to do with each:",
      table: {
        head: ["Field", "What it means", "What to compare it with"],
        rows: [
          ["Legal name of business", "The name registered against the PAN (for a proprietor, usually the person's own name)", "The name of the seller on the invoice or contract"],
          ["Trade name", "The shop or brand name the business trades under, if any", "The brand or shop name you know the supplier by"],
          ["Effective date of registration", "From when the GST registration is valid", "Your invoice date should not be earlier than this"],
          ["Constitution of business", "Proprietorship, partnership, company, LLP, trust and so on", "The type of entity named on the invoice (Pvt Ltd, LLP, etc.)"],
          ["Taxpayer type", "For example regular or composition", "A composition taxpayer cannot charge GST on a tax invoice; check what was billed"],
          ["GSTIN / UIN status", "Whether the registration is active, cancelled or in another state", "Should be active for a current invoice"],
          ["Jurisdiction / place of business", "The state and tax office the registration falls under", "The first two digits of the GSTIN and the supplier's address"],
        ],
      },
    },
    {
      id: "name-only",
      title: "Only have a business name? How to get the GSTIN",
      intro: "The public search works with a GSTIN, UIN or PAN – not with a name. The law gives you easy ways to get the number:",
      list: [
        "<strong>Ask for the tax invoice.</strong> Rule 46 of the CGST Rules says every tax invoice must show the supplier's name, address and GSTIN.",
        "<strong>Look at the shop board.</strong> Rule 18 requires every registered person to display the GSTIN on the name board at the entrance of each place of business, and to display the registration certificate there.",
        "<strong>Ask for the registration certificate.</strong> The certificate (Form GST REG-06) shows the GSTIN and the places of business.",
        "<strong>Know the PAN?</strong> Use Search by PAN to list the GSTINs registered against it.",
      ],
      callout: { kind: "warn", html: "Be careful with GST \"search by name\" results from unofficial websites. They may be old copies of data. The official portal is the reference for the current status." },
    },
    {
      id: "no-result",
      title: "When the search shows no result or an error",
      list: [
        "<strong>Typing mistake:</strong> the most common cause. Letters O/0, I/1, S/5 and B/8 are easy to mix up. Re-read the GSTIN from the original document.",
        "<strong>Wrong length:</strong> a GSTIN has exactly 15 characters. Count again; a copied space or missing character breaks it.",
        "<strong>Invalid last character:</strong> the 15th character is a checksum calculated from the first 14. If one character is wrong, the number fails this check (our <a href=\"" + TOOL + "\">GSTIN tool</a> runs this check free, before any payment).",
        "<strong>Captcha error:</strong> refresh the captcha image and type the new characters carefully.",
        "<strong>Portal busy:</strong> try again after a few minutes. Do not rely on a third-party copy if the official portal is temporarily slow.",
        "<strong>Still nothing:</strong> ask the business to confirm the GSTIN in writing or send a copy of its registration certificate. Do not treat an unsearchable GSTIN as valid.",
      ],
    },
    {
      id: "free-vs-paid",
      title: "Free official search or our ₹20 report?",
      intro: `The official search is free and is the government's own record, so it should always be your reference point. Our <a href="${TOOL}">₹20 GSTIN report</a> is a convenience: it checks the format and checksum before you pay, then presents the main details (status, legal and trade name, registration date, taxpayer type, constitution and place of business) on a clean page you can save as PDF or share with a colleague. It is not a government certificate and it does not change or approve any GST record.`,
    },
  ],
  official: [OFFICIAL.searchtp, OFFICIAL.searchpan, OFFICIAL.portal, OFFICIAL.regRules, OFFICIAL.cbic],
  faq: [
    { q: "Can I search a GST number online for free?", a: "Yes. The Search Taxpayer facility on the official GST portal (services.gst.gov.in) is free and does not need a login. You only enter the GSTIN and a captcha." },
    { q: "Can I search GST number by business name?", a: "The official public search works with a GSTIN, UIN or PAN, not with a business name. Ask the business for its GSTIN; it must be printed on its tax invoices and displayed on its shop name board." },
    { q: "How do I find all GST numbers of a company?", a: "Use the Search by PAN option on the GST portal. A business can have a separate GSTIN for each state where it is registered, and the PAN search lists the GSTINs linked to that PAN." },
    { q: "What details does a GST number search show?", a: "The taxpayer search shows details such as legal name, trade name, effective date of registration, constitution of business, taxpayer type, jurisdiction and GSTIN status, with the cancellation date where applicable." },
    { q: "Why does my GST number search show no result?", a: "Usually the GSTIN has been typed wrongly or is incomplete. Check all 15 characters against the original document, especially look-alike characters such as O and 0. If it still fails, ask the business to confirm its GSTIN in writing." },
    { q: "Does SarkariSewa India charge a government GST search fee?", a: "No. The official GST portal search is free. Our 20 rupee charge is only for our own optional GSTIN report service and is not a government fee." },
  ],
  related: related("how-to-verify-gst-number", "gstin-status-check", "gstin-format-structure", "how-to-check-gstin-of-supplier", "how-to-verify-gstin-on-invoice"),
  aside,
};

