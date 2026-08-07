/**
 * loan-amortization.js
 * ------------------------------------------------------------------
 * Generates a year-wise reducing-balance loan repayment schedule for
 * the bank-loan portion of the project (equal monthly instalments —
 * standard EMI — aggregated into annual rows since the rest of the
 * report is year-wise, not month-wise).
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRLoanAmortization = factory(root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (Utils) {
  "use strict";

  const { InputError, roundRupees, assertPositiveNumber } = Utils;

  /**
   * @param {object} input
   * @param {number} input.loanAmount          Bank loan amount (₹)
   * @param {number} input.annualInterestRate  As a decimal, e.g. 0.11 for 11%
   * @param {number} input.tenureYears         Loan tenure in years
   * @returns {object[]} one row per year: { year, openingBalance,
   *   interestPaid, principalPaid, closingBalance, annualEmi }
   */
  function generateLoanSchedule(input) {
    if (!input || typeof input !== "object") {
      throw new InputError("Input object is required.");
    }

    const loanAmount = assertPositiveNumber(input.loanAmount, "Loan amount");
    const tenureYears = assertPositiveNumber(input.tenureYears, "Loan tenure");
    const annualInterestRate = Number(input.annualInterestRate);
    if (!Number.isFinite(annualInterestRate) || annualInterestRate < 0) {
      throw new InputError("Annual interest rate must be a non-negative number.", "annualInterestRate");
    }

    const monthlyRate = annualInterestRate / 12;
    const numPayments = Math.round(tenureYears * 12);

    // EMI formula for a reducing-balance loan. When the rate is 0
    // (edge case, e.g. a subsidised scheme), fall back to a flat
    // principal-only instalment to avoid divide-by-zero.
    let emi;
    if (monthlyRate === 0) {
      emi = loanAmount / numPayments;
    } else {
      const factor = Math.pow(1 + monthlyRate, numPayments);
      emi = (loanAmount * monthlyRate * factor) / (factor - 1);
    }

    let balance = loanAmount;
    const yearly = [];

    for (let year = 1; year <= tenureYears; year++) {
      const openingBalance = balance;
      let yearInterest = 0;
      let yearPrincipal = 0;

      for (let m = 0; m < 12; m++) {
        if (balance <= 0) break;
        const interestPortion = balance * monthlyRate;
        let principalPortion = emi - interestPortion;
        // Last instalment: don't let rounding drift leave a residual balance.
        if (principalPortion > balance) principalPortion = balance;
        balance -= principalPortion;
        yearInterest += interestPortion;
        yearPrincipal += principalPortion;
      }

      yearly.push({
        year,
        openingBalance: roundRupees(openingBalance),
        interestPaid: roundRupees(yearInterest),
        principalPaid: roundRupees(yearPrincipal),
        closingBalance: roundRupees(Math.max(balance, 0)),
        annualEmi: roundRupees(yearInterest + yearPrincipal),
      });
    }

    return yearly;
  }

  return { generateLoanSchedule };
});
