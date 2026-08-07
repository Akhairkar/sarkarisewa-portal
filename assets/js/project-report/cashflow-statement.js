/**
 * cashflow-statement.js
 * ------------------------------------------------------------------
 * Simplified year-wise cash flow statement built from the P&L
 * projection and the loan repayment schedule. Simplified on purpose
 * for a first-time bank loan report (no working-capital-change line,
 * no separate investing section beyond the initial project cost,
 * which is disclosed elsewhere in the report) — this is standard
 * practice for PMEGP/Mudra reports, which focus on operating cash
 * generation vs debt service, not a full CA-grade cash flow.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRCashflowStatement = factory(root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (Utils) {
  "use strict";

  const { InputError, roundRupees } = Utils;

  /**
   * @param {object[]} pnl           From generatePnLProjection()
   * @param {object[]} loanSchedule  From generateLoanSchedule()
   * @param {number} openingCash     Cash balance at the start of Year 1 (₹), usually 0
   * @returns {object[]} one row per year: { year, openingCash,
   *   cashFromOperations, principalRepaid, netCashFlow, closingCash }
   */
  function generateCashflowStatement(pnl, loanSchedule, openingCash) {
    if (!Array.isArray(pnl) || pnl.length === 0) {
      throw new InputError("P&L projection is required.", "pnl");
    }
    if (!Array.isArray(loanSchedule)) {
      throw new InputError("Loan schedule is required.", "loanSchedule");
    }

    let cash = Number(openingCash) || 0;

    return pnl.map((row, i) => {
      const loanYear = loanSchedule[i];
      const principalRepaid = loanYear ? loanYear.principalPaid : 0;

      // Cash from operations = net profit with non-cash depreciation
      // added back — interest is already deducted in netProfit, which
      // is correct since interest IS a real cash outflow.
      const cashFromOperations = row.netProfit + row.depreciation;
      const netCashFlow = cashFromOperations - principalRepaid;
      const openingForYear = cash;
      const closingCash = openingForYear + netCashFlow;
      cash = closingCash;

      return {
        year: row.year,
        openingCash: roundRupees(openingForYear),
        cashFromOperations: roundRupees(cashFromOperations),
        principalRepaid: roundRupees(principalRepaid),
        netCashFlow: roundRupees(netCashFlow),
        closingCash: roundRupees(closingCash),
      };
    });
  }

  return { generateCashflowStatement };
});
