/**
 * finance-config.js
 * ------------------------------------------------------------------
 * Central place for every government-scheme number the calculator
 * uses (subsidy %, own-contribution %, project cost ceilings, Mudra
 * slabs). Keeping these as plain data (not buried in logic) means a
 * rate change only needs an edit here, not a code change.
 *
 * SOURCES / VERIFY BEFORE GOING LIVE:
 *   PMEGP guidelines — kviconline.gov.in / pmegp official portal
 *   Cross-checked against multiple 2026 secondary sources; the core
 *   structure (15/25/25/35, 10%/5% own contribution, 50L/20L ceiling)
 *   is consistent everywhere, but PLEASE do one manual check against
 *   the official KVIC PMEGP guidelines PDF before this goes live —
 *   government subsidy % can change with budget cycles.
 * ------------------------------------------------------------------
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.PRFinanceConfig = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const PMEGP = {
    // Categories that qualify for the higher "special" subsidy slab.
    // (SC/ST/OBC/Minority/Women/Ex-servicemen/Divyang/Transgender/
    //  NER/Hill area/Border area/Aspirational district applicants)
    specialCategories: [
      "sc",
      "st",
      "obc",
      "minority",
      "women",
      "ex_servicemen",
      "divyang",
      "transgender",
      "ner",
      "hill_area",
      "border_area",
      "aspirational_district",
    ],
    generalCategory: "general",

    // Margin-money subsidy, as % of admissible project cost.
    subsidyRate: {
      general: { urban: 0.15, rural: 0.25 },
      special: { urban: 0.25, rural: 0.35 },
    },

    // Applicant's own contribution, as % of admissible project cost.
    ownContributionRate: {
      general: 0.10,
      special: 0.05,
    },

    // Max project cost eligible for subsidy calculation.
    maxProjectCost: {
      manufacturing: 5000000, // ₹50 lakh
      service: 2000000, // ₹20 lakh (service/business/trading)
    },

    sectors: ["manufacturing", "service"],
    areaTypes: ["urban", "rural"],
  };

  const MUDRA = {
    // Category is derived from loan amount requested, not chosen by user.
    tiers: [
      { key: "shishu", label: "Shishu", min: 0, max: 50000 },
      { key: "kishore", label: "Kishore", min: 50001, max: 500000 },
      { key: "tarun", label: "Tarun", min: 500001, max: 1000000 },
    ],
    // Mudra is a loan scheme, not a subsidy scheme — no government
    // subsidy component. Collateral-free. Interest rate is bank-set,
    // so we do NOT hardcode a rate; the report should say "as per
    // bank's applicable MSE lending rate" rather than a fixed number.
  };

  const MPBCDC = {
    // MPBCDC state schemes have varying limits and subsidies.
    // For the purpose of the generator, we handle it as a flexible scheme
    // similar to Mudra, allowing custom project cost and own contribution.
  };

  return { PMEGP, MUDRA, MPBCDC };
});
