/**
 * report-pdf.js
 * ------------------------------------------------------------------
 * Turns the `report` object from report-form-ui.js's buildReport()
 * into a downloadable, bank-ready PDF — entirely client-side (runs
 * in the visitor's browser via jsPDF + jspdf-autotable, no server
 * round-trip, no data leaves the browser except what the user
 * already chose to auto-save via Supabase).
 *
 * 10 sections:
 *   1. Cover (business, applicant, scheme, date)
 *   2. Project Cost & Means of Finance
 *   3. Loan Details & Assumptions Used
 *   4. Loan Repayment Schedule
 *   5. Profit & Loss Projection
 *   6. DSCR (Debt Service Coverage Ratio)
 *   7. Break-even Analysis
 *   8. Cash Flow Statement
 *   9. Key Ratios Summary
 *   10. Declaration & Disclaimer
 *
 * Depends on window.jspdf (jsPDF UMD build) and the autoTable plugin
 * being loaded on the page before this file.
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  function rupees(n) {
    const val = Math.round(Number(n) || 0);
    return "Rs. " + val.toLocaleString("en-IN");
  }

  function todayLabel() {
    const d = new Date();
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  }

  const MARGIN = 14;
  const PAGE_W = 210; // A4 mm

  function addSectionHeading(doc, y, number, title) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(15, 61, 62); // matches --pr-ink
    doc.text(`${number}. ${title}`, MARGIN, y);
    doc.setDrawColor(176, 141, 87); // brass accent
    doc.setLineWidth(0.4);
    doc.line(MARGIN, y + 1.5, PAGE_W - MARGIN, y + 1.5);
    doc.setTextColor(20, 20, 20);
    doc.setFont("helvetica", "normal");
    return y + 8;
  }

  function ensureSpace(doc, y, needed) {
    const pageHeight = doc.internal.pageSize.getHeight();
    if (y + needed > pageHeight - 20) {
      doc.addPage();
      return 20;
    }
    return y;
  }

  function generatePdf(report) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    const schemeLabel = report.scheme === "pmegp" ? "PMEGP" : report.scheme === "mpbcdc" ? "MPBCDC Scheme" : "Mudra Loan (PMMY)";

    // ---------------- SECTION 1: COVER ----------------
    doc.setFillColor(15, 61, 62);
    doc.rect(0, 0, PAGE_W, 42, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Project Report", MARGIN, 20);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`For Bank Loan Application — ${schemeLabel}`, MARGIN, 28);
    doc.setFontSize(9);
    doc.text(`Generated on ${todayLabel()} via sarkarisewaindia.com`, MARGIN, 35);

    let y = 55;
    doc.setTextColor(20, 20, 20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Applicant & Business Details", MARGIN, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const coverRows = [
      ["Business Name", report.businessName || "-"],
      ["Applicant Name", report.applicantName || "-"],
      ["Business Address", report.businessAddress || "-"],
      ["Scheme Applied For", schemeLabel],
      ["Category", (report.category || "-").toUpperCase()],
      ["Location Type", report.area === "rural" ? "Rural" : "Urban"],
    ];
    doc.autoTable({
      startY: y,
      body: coverRows,
      theme: "plain",
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 50 }, 1: { cellWidth: 126 } },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 2: PROJECT COST & MEANS OF FINANCE ----------------
    y = ensureSpace(doc, y, 50);
    y = addSectionHeading(doc, y, 2, "Project Cost & Means of Finance");
    const fs = report.financeSplit;
    const financeRows = [["Own Contribution (Applicant)", rupees(fs.ownContribution)]];
    if (fs.subsidy) financeRows.push(["Government Subsidy (Margin Money)", rupees(fs.subsidy)]);
    financeRows.push(["Bank Loan Required", rupees(fs.bankLoan)]);
    if (fs.tierLabel) financeRows.push(["Mudra Tier", fs.tierLabel]);
    doc.autoTable({
      startY: y,
      head: [["Source of Finance", "Amount"]],
      body: financeRows,
      theme: "grid",
      headStyles: { fillColor: [15, 61, 62] },
      styles: { fontSize: 10 },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 3: LOAN DETAILS & ASSUMPTIONS ----------------
    y = ensureSpace(doc, y, 50);
    y = addSectionHeading(doc, y, 3, "Loan Details & Assumptions Used");
    const a = report.assumptions;
    doc.autoTable({
      startY: y,
      body: [
        ["Loan Amount", rupees(fs.bankLoan)],
        ["Interest Rate (per annum)", `${Math.round(a.annualInterestRate * 100 * 10) / 10}%`],
        ["Loan Tenure", `${a.loanTenureYears} years`],
        ["Assumed Yearly Sales Growth", `${Math.round(a.revenueGrowthRate * 100)}%`],
      ],
      theme: "plain",
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 60 } },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 4;
    doc.setFontSize(8.5);
    doc.setTextColor(90, 90, 90);
    doc.text(
      "Note: interest rate and growth assumptions above were entered/edited by the applicant. Confirm actual sanctioned rate with your bank branch.",
      MARGIN,
      y,
      { maxWidth: PAGE_W - MARGIN * 2 }
    );
    doc.setTextColor(20, 20, 20);
    y += 10;

    // ---------------- SECTION 4: LOAN REPAYMENT SCHEDULE ----------------
    y = ensureSpace(doc, y, 30);
    y = addSectionHeading(doc, y, 4, "Loan Repayment Schedule (Year-wise)");
    doc.autoTable({
      startY: y,
      head: [["Year", "Opening Balance", "Interest Paid", "Principal Paid", "Closing Balance"]],
      body: report.loanSchedule.map((row) => [
        row.year,
        rupees(row.openingBalance),
        rupees(row.interestPaid),
        rupees(row.principalPaid),
        rupees(row.closingBalance),
      ]),
      theme: "grid",
      headStyles: { fillColor: [15, 61, 62] },
      styles: { fontSize: 9 },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 5: P&L PROJECTION ----------------
    y = ensureSpace(doc, y, 30);
    y = addSectionHeading(doc, y, 5, "Profit & Loss Projection");
    doc.autoTable({
      startY: y,
      head: [["Year", "Revenue", "COGS", "Opex", "Deprec.", "Interest", "Net Profit"]],
      body: report.pnl.map((row) => [
        row.year,
        rupees(row.revenue),
        rupees(row.cogs),
        rupees(row.operatingExpense),
        rupees(row.depreciation),
        rupees(row.interest),
        rupees(row.netProfit),
      ]),
      theme: "grid",
      headStyles: { fillColor: [15, 61, 62] },
      styles: { fontSize: 8.5 },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 6: DSCR ----------------
    y = ensureSpace(doc, y, 40);
    y = addSectionHeading(doc, y, 6, "DSCR (Debt Service Coverage Ratio)");
    doc.autoTable({
      startY: y,
      head: [["Year", "DSCR"]],
      body: report.dscr.yearWise.map((row) => [row.year, row.dscr !== null ? row.dscr : "-"]),
      theme: "grid",
      headStyles: { fillColor: [15, 61, 62] },
      styles: { fontSize: 9 },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`Average DSCR: ${report.dscr.average}`, MARGIN, y + 4);
    doc.setFont("helvetica", "normal");
    y += 14;

    // ---------------- SECTION 7: BREAK-EVEN ANALYSIS ----------------
    y = ensureSpace(doc, y, 40);
    y = addSectionHeading(doc, y, 7, "Break-even Analysis (Year 1)");
    const be = report.breakEven;
    doc.autoTable({
      startY: y,
      body: [
        ["Fixed Costs (Opex + Depreciation + Interest)", rupees(be.fixedCosts)],
        ["Contribution Margin Ratio", `${be.contributionMarginRatioPercent}%`],
        ["Break-even Sales", rupees(be.breakEvenSales)],
        ["Break-even as % of Year 1 Projected Sales", `${be.breakEvenPercentOfCapacity}%`],
      ],
      theme: "plain",
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 100 } },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 8: CASH FLOW STATEMENT ----------------
    y = ensureSpace(doc, y, 30);
    y = addSectionHeading(doc, y, 8, "Cash Flow Statement");
    doc.autoTable({
      startY: y,
      head: [["Year", "Opening Cash", "Cash from Ops", "Principal Repaid", "Net Cash Flow", "Closing Cash"]],
      body: report.cashflow.map((row) => [
        row.year,
        rupees(row.openingCash),
        rupees(row.cashFromOperations),
        rupees(row.principalRepaid),
        rupees(row.netCashFlow),
        rupees(row.closingCash),
      ]),
      theme: "grid",
      headStyles: { fillColor: [15, 61, 62] },
      styles: { fontSize: 8.5 },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 12;

    // ---------------- SECTION 9: KEY RATIOS SUMMARY ----------------
    y = ensureSpace(doc, y, 45);
    y = addSectionHeading(doc, y, 9, "Key Ratios Summary");
    doc.autoTable({
      startY: y,
      body: [
        ["Total Project Cost", rupees(fs.ownContribution + (fs.subsidy || 0) + fs.bankLoan)],
        ["Promoter's Contribution", rupees(fs.ownContribution)],
        ["Average DSCR", String(report.dscr.average)],
        ["Break-even Sales (Year 1)", rupees(be.breakEvenSales)],
        ["Year 1 Net Profit (Estimate)", rupees(report.pnl[0].netProfit)],
        [`Year ${report.pnl.length} Net Profit (Estimate)`, rupees(report.pnl[report.pnl.length - 1].netProfit)],
      ],
      theme: "plain",
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 90 } },
      margin: { left: MARGIN, right: MARGIN },
    });
    y = doc.lastAutoTable.finalY + 14;

    // ---------------- SECTION 10: DECLARATION & DISCLAIMER ----------------
    y = ensureSpace(doc, y, 60);
    y = addSectionHeading(doc, y, 10, "Declaration & Disclaimer");
    doc.setFontSize(9.5);
    doc.text(
      "I/We hereby declare that the information furnished above is true and correct to the best of my/our knowledge and belief. " +
        "I/We understand that this project report is an estimate prepared for loan application purposes, and actual results may vary.",
      MARGIN,
      y,
      { maxWidth: PAGE_W - MARGIN * 2, lineHeightFactor: 1.4 }
    );
    y += 24;
    doc.line(MARGIN, y, MARGIN + 70, y);
    doc.setFontSize(9);
    doc.text("Signature of Applicant", MARGIN, y + 5);
    doc.line(PAGE_W - MARGIN - 70, y, PAGE_W - MARGIN, y);
    doc.text("Date", PAGE_W - MARGIN - 70, y + 5);

    y += 20;
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      "Disclaimer: This report is auto-generated using standard assumptions and is meant as an estimation aid, not official " +
        "financial or legal advice. Figures may differ from actual bank terms. Please verify all details with your bank branch " +
        "before submission. Generated free via sarkarisewaindia.com/project-report/",
      MARGIN,
      y,
      { maxWidth: PAGE_W - MARGIN * 2, lineHeightFactor: 1.4 }
    );

    // ---------------- PAGE NUMBERS ----------------
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} of ${pageCount}`, PAGE_W - MARGIN - 20, doc.internal.pageSize.getHeight() - 10);
    }

    const safeName = (report.businessName || "project-report").replace(/[^a-zA-Z0-9-]+/g, "-").toLowerCase();
    doc.save(`${safeName}-project-report.pdf`);
  }

  window.PRReportPdf = { generatePdf };
})();
