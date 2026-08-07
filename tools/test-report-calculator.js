/**
 * test-report-calculator.js
 * ------------------------------------------------------------------
 * Manual test harness for the PMEGP + Mudra calculators. Run with:
 *   node tools/test-report-calculator.js
 * from the repo root (after the assets/js/project-report files are
 * uploaded). Every case is hand-calculated in the comment above it —
 * if any assertion fails, the script exits non-zero and prints why.
 * ------------------------------------------------------------------
 */

const path = require("path");
const FinanceConfig = require(path.join(__dirname, "../assets/js/project-report/finance-config.js"));
const Utils = require(path.join(__dirname, "../assets/js/project-report/calculator-utils.js"));
const { calculatePmegpFinance } = require(
  path.join(__dirname, "../assets/js/project-report/pmegp-calculator.js")
);
const { calculateMudraFinance, classifyMudraTier } = require(
  path.join(__dirname, "../assets/js/project-report/mudra-calculator.js")
);

let passed = 0;
let failed = 0;

function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    passed++;
    console.log(`PASS  ${label}`);
  } else {
    failed++;
    console.log(`FAIL  ${label}`);
    console.log("   expected:", JSON.stringify(expected));
    console.log("   actual:  ", JSON.stringify(actual));
  }
}

function checkThrows(label, fn, expectedMessageFragment) {
  try {
    fn();
    failed++;
    console.log(`FAIL  ${label} (expected an error, none thrown)`);
  } catch (err) {
    if (!expectedMessageFragment || err.message.includes(expectedMessageFragment)) {
      passed++;
      console.log(`PASS  ${label}`);
    } else {
      failed++;
      console.log(`FAIL  ${label} (wrong error message: "${err.message}")`);
    }
  }
}

console.log("=== PMEGP calculator ===");

// Case 1: General, rural, manufacturing, ₹10,00,000
// subsidy 25% -> 2,50,000 | own 10% -> 1,00,000 | bank = 10,00,000-3,50,000 = 6,50,000
{
  const r = calculatePmegpFinance({
    projectCost: 1000000,
    category: "general",
    area: "rural",
    sector: "manufacturing",
  });
  check("General/Rural/Manufacturing ₹10L — ownContribution", r.ownContribution, 100000);
  check("General/Rural/Manufacturing ₹10L — subsidy", r.subsidy, 250000);
  check("General/Rural/Manufacturing ₹10L — bankLoan", r.bankLoan, 650000);
  check("General/Rural/Manufacturing ₹10L — totalCheck matches project cost", r.totalCheck, 1000000);
}

// Case 2: Women (special), urban, service, ₹25,00,000 — exceeds ₹20L service ceiling
// admissible = 20,00,000 | subsidy 25% -> 5,00,000 | own 5% -> 1,00,000
// bankLoan = 25,00,000 - 1,00,000 - 5,00,000 = 19,00,000 (excess above ceiling is fully bank-financed)
{
  const r = calculatePmegpFinance({
    projectCost: 2500000,
    category: "women",
    area: "urban",
    sector: "service",
  });
  check("Women/Urban/Service ₹25L — admissibleProjectCost capped at ceiling", r.admissibleProjectCost, 2000000);
  check("Women/Urban/Service ₹25L — exceedsCeiling flag", r.exceedsCeiling, true);
  check("Women/Urban/Service ₹25L — ownContribution", r.ownContribution, 100000);
  check("Women/Urban/Service ₹25L — subsidy", r.subsidy, 500000);
  check("Women/Urban/Service ₹25L — bankLoan", r.bankLoan, 1900000);
  check("Women/Urban/Service ₹25L — totalCheck matches ACTUAL project cost", r.totalCheck, 2500000);
}

console.log("\n=== Validation errors (PMEGP) ===");
checkThrows("Negative project cost rejected", () =>
  calculatePmegpFinance({ projectCost: -500, category: "general", area: "urban", sector: "service" })
);
checkThrows("Invalid category rejected", () =>
  calculatePmegpFinance({ projectCost: 500000, category: "not_a_real_category", area: "urban", sector: "service" })
);
checkThrows("Invalid area rejected", () =>
  calculatePmegpFinance({ projectCost: 500000, category: "general", area: "suburban", sector: "service" })
);
checkThrows("Missing project cost rejected", () =>
  calculatePmegpFinance({ category: "general", area: "urban", sector: "service" })
);

console.log("\n=== Mudra calculator ===");

// Case 3: project cost 3,00,000 own contribution 50,000 -> loan 2,50,000 -> Kishore tier
{
  const r = calculateMudraFinance({ projectCost: 300000, ownContribution: 50000 });
  check("Mudra ₹3L project, ₹50k own — loanAmount", r.loanAmount, 250000);
  check("Mudra ₹3L project, ₹50k own — tier", r.tier, "kishore");
}

// Case 4: loan amount 30,000 -> Shishu
check("classifyMudraTier(30000) -> shishu", classifyMudraTier(30000).key, "shishu");

// Case 5: loan amount 900,000 -> Tarun
check("classifyMudraTier(900000) -> tarun", classifyMudraTier(900000).key, "tarun");

console.log("\n=== Validation errors (Mudra) ===");
checkThrows("Loan amount above Tarun ceiling rejected", () => classifyMudraTier(1500000), "exceeds the Mudra Tarun ceiling");
checkThrows("Own contribution >= project cost rejected", () =>
  calculateMudraFinance({ projectCost: 100000, ownContribution: 100000 })
);

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
