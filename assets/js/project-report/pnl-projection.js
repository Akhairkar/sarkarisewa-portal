/**
 * pnl-projection.js
 * ------------------------------------------------------------------
 * Builds a year-wise Profit & Loss projection over the loan tenure.
 * Revenue grows at a fixed YoY rate, COGS stays a fixed % of revenue,
 * operating expenses can optionally inflate, depreciation is a flat
 * straight-line figure, and interest comes from the loan schedule
 * (Session 1's loan-amortization.js) for the matching year.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRPnlProjection = factory(root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (Utils) {
  "use strict";

  const { InputError, roundRupees, assertNonNegativeNumber, assertPositiveNumber } = Utils;

  /**
   * @param {object} input
   * @param {number} input.baseRevenue          Year 1 annual revenue (₹)
   * @param {number} input.revenueGrowthRate     Decimal, e.g. 0.10 for 10% YoY
   * @param {number} input.cogsPercent           Decimal, e.g. 0.6 for 60% of revenue
   * @param {number} input.fixedOpex             Year 1 annual operating expense (₹), excludes interest & depreciation
   * @param {number} input.opexInflationRate     Decimal YoY inflation on opex, default 0
   * @param {number} input.depreciationPerYear   Flat annual depreciation (₹)
   * @param {object[]} input.loanSchedule        From generateLoanSchedule() — used for per-year interest
   * @param {number} input.taxRatePercent        e.g. 0 for most small first-time units under presumptive/no-tax slabs
   * @param {number} input.projectionYears       Number of years to project (usually = loan tenure)
   * @returns {object[]} one row per year
   */
  function generatePnLProjection(input) {
    if (!input || typeof input !== "object") {
      throw new InputError("Input object is required.");
    }

    const baseRevenue = assertPositiveNumber(input.baseRevenue, "Base revenue");
    const cogsPercent = assertNonNegativeNumber(input.cogsPercent, "COGS percent");
    const fixedOpex = assertNonNegativeNumber(input.fixedOpex, "Operating expense");
    const depreciationPerYear = assertNonNegativeNumber(input.depreciationPerYear, "Depreciation");
    const projectionYears = assertPositiveNumber(input.projectionYears, "Projection years");

    const revenueGrowthRate = Number(input.revenueGrowthRate) || 0;
    const opexInflationRate = Number(input.opexInflationRate) || 0;
    const taxRatePercent = Number(input.taxRatePercent) || 0;
    const loanSchedule = Array.isArray(input.loanSchedule) ? input.loanSchedule : [];

    const rows = [];

    for (let i = 0; i < projectionYears; i++) {
      const revenue = baseRevenue * Math.pow(1 + revenueGrowthRate, i);
      const cogs = revenue * cogsPercent;
      const grossProfit = revenue - cogs;
      const operatingExpense = fixedOpex * Math.pow(1 + opexInflationRate, i);
      const interest = loanSchedule[i] ? loanSchedule[i].interestPaid : 0;
      // Depreciation is flat and shouldn't reduce the block below zero
      // in the very simplified model used here; kept constant across
      // the projection window as documented to the user on the form.
      const depreciation = depreciationPerYear;

      const ebt = grossProfit - operatingExpense - depreciation - interest;
      const tax = ebt > 0 ? (ebt * taxRatePercent) / 100 : 0;
      const netProfit = ebt - tax;

      rows.push({
        year: i + 1,
        revenue: roundRupees(revenue),
        cogs: roundRupees(cogs),
        grossProfit: roundRupees(grossProfit),
        operatingExpense: roundRupees(operatingExpense),
        depreciation: roundRupees(depreciation),
        interest: roundRupees(interest),
        ebt: roundRupees(ebt),
        tax: roundRupees(tax),
        netProfit: roundRupees(netProfit),
      });
    }

    return rows;
  }

  return { generatePnLProjection };
});
