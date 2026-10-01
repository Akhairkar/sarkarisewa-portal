/**
 * financial-ratios.js
 * ------------------------------------------------------------------
 * DSCR (Debt Service Coverage Ratio) and break-even analysis — the
 * two numbers a bank officer checks first when reviewing a PMEGP /
 * Mudra project report.
 *
 * DSCR (per year) = (Net Profit + Depreciation + Interest) / (Interest + Principal Repaid)
 *   — the standard formula: cash actually available to service debt,
 *   divided by what debt service actually costs that year. A DSCR
 *   below ~1.5–2.0 tends to raise a red flag with most lending banks;
 *   this tool reports the number, not a pass/fail judgement.
 *
 * Break-even sales (Year 1) = Fixed Costs / Contribution Margin Ratio
 *   where Fixed Costs = Opex + Depreciation + Interest (year 1) and
 *   Contribution Margin Ratio = 1 − (COGS / Revenue).
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRFinancialRatios = factory(root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (Utils) {
  "use strict";

  const { InputError, roundRupees, roundRatio, assertPositiveNumber, assertNonNegativeNumber } = Utils;

  /**
   * @param {object[]} pnl           From generatePnLProjection()
   * @param {object[]} loanSchedule  From generateLoanSchedule()
   * @returns {object} { yearWise: [{year, dscr}], average }
   */
  function calculateDscr(pnl, loanSchedule) {
    if (!Array.isArray(pnl) || pnl.length === 0) {
      throw new InputError("P&L projection is required.", "pnl");
    }
    if (!Array.isArray(loanSchedule)) {
      throw new InputError("Loan schedule is required.", "loanSchedule");
    }

    const yearWise = pnl.map((row, i) => {
      const loanYear = loanSchedule[i];
      const principal = loanYear ? loanYear.principalPaid : 0;
      const interest = row.interest || 0;
      const debtService = principal + interest;

      const cashAvailable = row.netProfit + row.depreciation + interest;
      const dscr = debtService > 0 ? roundRatio(cashAvailable / debtService) : null;

      return { year: row.year, dscr };
    });

    const validValues = yearWise.map((y) => y.dscr).filter((v) => v !== null && Number.isFinite(v));
    const average =
      validValues.length > 0 ? roundRatio(validValues.reduce((a, b) => a + b, 0) / validValues.length) : null;

    return { yearWise, average };
  }

  /**
   * @param {object} input
   * @param {number} input.year1Revenue
   * @param {number} input.year1Cogs
   * @param {number} input.year1OperatingExpense
   * @param {number} input.year1Depreciation
   * @param {number} input.year1Interest
   * @returns {object} { fixedCosts, contributionMarginRatio (as %), breakEvenSales, breakEvenPercentOfCapacity }
   */
  function calculateBreakEven(input) {
    if (!input || typeof input !== "object") {
      throw new InputError("Input object is required.");
    }

    const year1Revenue = assertPositiveNumber(input.year1Revenue, "Year 1 revenue");
    const year1Cogs = assertNonNegativeNumber(input.year1Cogs, "Year 1 COGS");
    const year1OperatingExpense = assertNonNegativeNumber(input.year1OperatingExpense, "Year 1 operating expense");
    const year1Depreciation = assertNonNegativeNumber(input.year1Depreciation, "Year 1 depreciation");
    const year1Interest = assertNonNegativeNumber(input.year1Interest, "Year 1 interest");

    const fixedCosts = year1OperatingExpense + year1Depreciation + year1Interest;
    const contributionMarginRatio = 1 - year1Cogs / year1Revenue;

    if (contributionMarginRatio <= 0) {
      throw new InputError(
        "COGS is equal to or exceeds revenue — break-even cannot be calculated because there is no contribution margin. Check the sales and cost inputs.",
        "cogsPercent"
      );
    }

    const breakEvenSales = roundRupees(fixedCosts / contributionMarginRatio);
    const breakEvenPercentOfCapacity = roundRatio((breakEvenSales / year1Revenue) * 100);

    return {
      fixedCosts: roundRupees(fixedCosts),
      contributionMarginRatioPercent: roundRatio(contributionMarginRatio * 100),
      breakEvenSales,
      breakEvenPercentOfCapacity,
    };
  }

  return { calculateDscr, calculateBreakEven };
});
