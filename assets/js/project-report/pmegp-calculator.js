/**
 * pmegp-calculator.js
 * ------------------------------------------------------------------
 * Calculates the PMEGP financing split: how much of the project cost
 * is the applicant's own contribution (margin money), how much is
 * government subsidy, and how much the bank finances.
 *
 * Formula (per official PMEGP structure):
 *   admissibleProjectCost = min(requestedProjectCost, sectorCeiling)
 *   ownContribution        = admissibleProjectCost * ownContributionRate(category)
 *   subsidy                 = admissibleProjectCost * subsidyRate(category, area)
 *   bankLoan                 = requestedProjectCost - ownContribution - subsidy
 *
 * Note: subsidy/own-contribution % apply to the ADMISSIBLE cost (capped
 * at the sector ceiling), but the bank loan covers whatever is left of
 * the ACTUAL requested cost — if the project cost exceeds the ceiling,
 * the excess is bank-financed with no subsidy on that portion. This
 * matches how PMEGP guidelines describe it and is a common source of
 * error in manual Excel sheets, so it's called out explicitly here.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      typeof require === "function" ? require("./finance-config.js") : root.PRFinanceConfig,
      typeof require === "function" ? require("./calculator-utils.js") : root.PRCalculatorUtils
    );
  } else {
    root.PRPmegpCalculator = factory(root.PRFinanceConfig, root.PRCalculatorUtils);
  }
})(typeof self !== "undefined" ? self : this, function (FinanceConfig, Utils) {
  "use strict";

  const { PMEGP } = FinanceConfig;
  const { InputError, roundRupees, assertPositiveNumber, assertOneOf } = Utils;

  /**
   * @param {object} input
   * @param {number} input.projectCost      Total requested project cost (₹)
   * @param {string} input.category         One of PMEGP.generalCategory or PMEGP.specialCategories
   * @param {string} input.area             "urban" | "rural"
   * @param {string} input.sector           "manufacturing" | "service"
   * @returns {object} breakdown
   */
  function calculatePmegpFinance(input) {
    if (!input || typeof input !== "object") {
      throw new InputError("Input object is required.");
    }

    const projectCost = assertPositiveNumber(input.projectCost, "Project cost");
    const area = assertOneOf(input.area, PMEGP.areaTypes, "Area type");
    const sector = assertOneOf(input.sector, PMEGP.sectors, "Sector");

    const allCategories = [PMEGP.generalCategory, ...PMEGP.specialCategories];
    const category = assertOneOf(input.category, allCategories, "Category");

    const isSpecial = category !== PMEGP.generalCategory;
    const categoryGroup = isSpecial ? "special" : "general";

    const sectorCeiling = PMEGP.maxProjectCost[sector];
    const admissibleProjectCost = Math.min(projectCost, sectorCeiling);
    const exceedsCeiling = projectCost > sectorCeiling;

    const subsidyRate = PMEGP.subsidyRate[categoryGroup][area];
    const ownContributionRate = PMEGP.ownContributionRate[categoryGroup];

    const ownContribution = roundRupees(admissibleProjectCost * ownContributionRate);
    const subsidy = roundRupees(admissibleProjectCost * subsidyRate);

    // Bank loan = whatever's left of the ACTUAL requested cost, since
    // any amount above the subsidy ceiling is fully bank-financed.
    const bankLoan = roundRupees(projectCost - ownContribution - subsidy);

    return {
      inputs: { projectCost, category, categoryGroup, area, sector },
      sectorCeiling,
      admissibleProjectCost: roundRupees(admissibleProjectCost),
      exceedsCeiling,
      rates: {
        subsidyRatePercent: subsidyRate * 100,
        ownContributionRatePercent: ownContributionRate * 100,
      },
      ownContribution,
      subsidy,
      bankLoan,
      // Sanity check total — should always equal the requested project cost.
      totalCheck: ownContribution + subsidy + bankLoan,
    };
  }

  return { calculatePmegpFinance };
});
