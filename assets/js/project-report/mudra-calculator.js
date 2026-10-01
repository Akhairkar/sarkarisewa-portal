/**
 * mudra-calculator.js
 * ------------------------------------------------------------------
 * Mudra has no government subsidy — it's a collateral-free loan
 * scheme. All this needs to do is classify the requested amount into
 * the correct tier (Shishu/Kishore/Tarun) and hand back the project
 * financing split the applicant asked for (their own contribution vs
 * the loan amount), since Mudra doesn't mandate a fixed margin like
 * PMEGP does — banks decide margin requirements case by case.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./finance-config.js") : root.PRFinanceConfig,
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRMudraCalculator = factory(root.PRFinanceConfig, root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (FinanceConfig, Utils) {
  "use strict";

  const { MUDRA } = FinanceConfig;
  const { InputError, roundRupees, assertPositiveNumber, assertNonNegativeNumber } = Utils;

  /** Returns the tier object ({key, label, min, max}) for a loan amount. */
  function classifyMudraTier(loanAmount) {
    const amount = assertPositiveNumber(loanAmount, "Loan amount");

    if (amount > MUDRA.tiers[MUDRA.tiers.length - 1].max) {
      throw new InputError(
        `Loan amount of ₹${amount.toLocaleString("en-IN")} exceeds the Mudra Tarun ceiling of ₹${MUDRA.tiers[
          MUDRA.tiers.length - 1
        ].max.toLocaleString("en-IN")}. This project needs a different scheme (e.g. MSME loan).`,
        "loanAmount"
      );
    }

    const tier = MUDRA.tiers.find((t) => amount >= t.min && amount <= t.max);
    if (!tier) {
      // Should be unreachable given the ceiling check above, but guard anyway.
      throw new InputError("Could not classify loan amount into a Mudra tier.", "loanAmount");
    }
    return tier;
  }

  /**
   * @param {object} input
   * @param {number} input.projectCost   Total project cost (₹)
   * @param {number} input.ownContribution  What the applicant is putting in themselves (₹)
   * @returns {object} breakdown
   */
  function calculateMudraFinance(input) {
    if (!input || typeof input !== "object") {
      throw new InputError("Input object is required.");
    }

    const projectCost = assertPositiveNumber(input.projectCost, "Project cost");
    const ownContribution = assertNonNegativeNumber(input.ownContribution, "Own contribution");

    if (ownContribution >= projectCost) {
      throw new InputError(
        "Own contribution cannot be greater than or equal to the total project cost — there would be nothing left to borrow.",
        "ownContribution"
      );
    }

    const loanAmount = roundRupees(projectCost - ownContribution);
    const tier = classifyMudraTier(loanAmount);

    return {
      inputs: { projectCost, ownContribution },
      loanAmount,
      tier: tier.key,
      tierLabel: tier.label,
      tierRange: { min: tier.min, max: tier.max },
      note: "Mudra loans carry no government subsidy. Interest rate follows the lending bank's applicable MSE rate — not fixed by the scheme.",
    };
  }

  return { classifyMudraTier, calculateMudraFinance };
});
