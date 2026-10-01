/**
 * report-form-ui.js
 * ------------------------------------------------------------------
 * Wires the 4-step form to the calculation engines (Session 1 & 2)
 * and renders the final report on Page 4.
 *
 * INTEGRATION NOTE: uses the site's existing assets/js/supabase-client.js
 * (loaded automatically on every page by main.js, same as the header's
 * login button) via the shared `getSupabaseClient()` helper. Auto-save
 * calls are wrapped in a try/catch and check for a logged-in user, so
 * the form works standalone (no login) even if the user hasn't signed
 * in yet — auto-save/resume simply won't persist until they do (the
 * header's Login button, top-right, opens the same site-wide login
 * used everywhere else).
 * See saveProgress()/loadProgress() below for the exact table shape
 * expected (supabase/project-report-schema.sql, shipped alongside).
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const form = document.getElementById("pr-form");
  const steps = Array.from(document.querySelectorAll(".pr-step"));
  const tabs = Array.from(document.querySelectorAll(".pr-page-tab"));
  const startBtn = document.getElementById("pr-start-btn");
  const calculateBtn = document.getElementById("pr-calculate-btn");
  const resultArea = document.getElementById("pr-result-area");
  const schemeSelect = document.getElementById("pr-scheme");
  const sectorField = document.getElementById("pr-sector-field");

  let currentStep = 1;

  function goToStep(stepNumber) {
    steps.forEach((s) => {
      s.hidden = Number(s.dataset.step) !== stepNumber;
    });
    tabs.forEach((t) => {
      const tabStep = Number(t.dataset.step);
      t.classList.toggle("pr-active", tabStep === stepNumber);
      t.classList.toggle("pr-done", tabStep < stepNumber);
    });
    currentStep = stepNumber;
    window.scrollTo({ top: form.offsetTop - 20, behavior: "smooth" });
    saveProgress();
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      form.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.querySelectorAll(".pr-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      const stepEl = btn.closest(".pr-step");
      if (!validateStep(stepEl)) return;
      goToStep(Number(btn.dataset.goto));
    });
  });

  // Mudra has no manufacturing/service subsidy distinction — hide
  // the sector field to avoid asking an irrelevant question.
  if (schemeSelect) {
    schemeSelect.addEventListener("change", () => {
      const isNoSectorScheme = schemeSelect.value === "mudra" || schemeSelect.value === "mpbcdc";
      sectorField.hidden = isNoSectorScheme;
      document.getElementById("pr-sector").required = !isNoSectorScheme;
    });
  }

  function validateStep(stepEl) {
    let valid = true;
    stepEl.querySelectorAll("input[required], select[required]").forEach((field) => {
      const fieldWrap = field.closest(".pr-field");
      const isEmpty = field.value === "" || field.value === null;
      const isNumberInvalid = field.type === "number" && field.value !== "" && Number(field.value) < Number(field.min || 0);

      if (isEmpty || isNumberInvalid) {
        fieldWrap.classList.add("pr-has-error");
        valid = false;
      } else {
        fieldWrap.classList.remove("pr-has-error");
      }
    });
    return valid;
  }

  function getFormData() {
    const data = {};
    new FormData(form).forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

  function formatRupees(amount) {
    return "₹" + Math.round(amount).toLocaleString("en-IN");
  }

  let lastReport = null;

  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      const stepEl = calculateBtn.closest(".pr-step");
      if (!validateStep(stepEl)) return;

      try {
        const report = buildReport(getFormData());
        lastReport = report;
        renderReport(report);
        goToStep(4);
      } catch (err) {
        // InputError has a friendly message meant for end users;
        // anything else is an unexpected bug — don't show a raw
        // stack trace to someone filling in a loan form.
        const message =
          err && err.name === "InputError"
            ? err.message
            : "Kuch galat ho gaya. Kripya apni details ek baar check karke dobara try karein.";
        resultArea.innerHTML = `<p class="pr-error" style="display:block;">${message}</p>`;
        steps.forEach((s) => (s.hidden = Number(s.dataset.step) !== 4));
        tabs.forEach((t) => t.classList.toggle("pr-active", Number(t.dataset.step) === 4));
      }
    });
  }

  /**
   * Runs the full calculation chain: scheme finance split -> loan
   * amortization -> P&L -> DSCR -> break-even -> cash flow.
   * Uses sensible, clearly-labelled default assumptions (growth
   * rate, tenure, depreciation) where the form doesn't collect a
   * figure — Session 4 (PDF) will surface these as editable
   * "assumptions" so a user can override them.
   */
  function buildReport(data) {
    const projectCost = Number(data.projectCost);
    const monthlySales = Number(data.monthlySales);
    const cogsPercent = Number(data.cogsPercent) / 100;
    const monthlyOpex = Number(data.monthlyOpex);

    // Default assumptions (documented, not hidden) — overridable via
    // the "Advanced Assumptions" fields on Step 3.
    const ASSUMPTIONS = {
      revenueGrowthRate: data.revenueGrowthPercent ? Number(data.revenueGrowthPercent) / 100 : 0.10,
      loanTenureYears: data.loanTenureYears ? Number(data.loanTenureYears) : 5,
      annualInterestRate: data.interestRatePercent ? Number(data.interestRatePercent) / 100 : 0.11,
      depreciationUsefulLifeYears: 10,
      machineryShareOfProjectCost: 0.6, // used only to estimate depreciation base
    };

    let financeSplit;
    if (data.scheme === "pmegp") {
      financeSplit = window.PRPmegpCalculator.calculatePmegpFinance({
        projectCost,
        category: data.category,
        area: data.area,
        sector: data.sector,
      });
    } else {
      // Mudra & MPBCDC: own contribution left as a simple default (10% of
      // project cost) since they don't mandate a fixed margin —
      // this too becomes an editable assumption in the PDF step.
      const ownContribution = Math.round(projectCost * 0.10);
      const mudraResult = window.PRMudraCalculator.calculateMudraFinance({ projectCost, ownContribution });
      financeSplit = {
        ownContribution,
        subsidy: 0,
        bankLoan: mudraResult.loanAmount,
        tierLabel: data.scheme === "mpbcdc" ? "MPBCDC Scheme" : mudraResult.tierLabel,
      };
    }

    const loanSchedule = window.PRLoanAmortization.generateLoanSchedule({
      loanAmount: financeSplit.bankLoan,
      annualInterestRate: ASSUMPTIONS.annualInterestRate,
      tenureYears: ASSUMPTIONS.loanTenureYears,
    });

    const depreciationPerYear = Math.round(
      (projectCost * ASSUMPTIONS.machineryShareOfProjectCost) / ASSUMPTIONS.depreciationUsefulLifeYears
    );

    const pnl = window.PRPnlProjection.generatePnLProjection({
      baseRevenue: monthlySales * 12,
      revenueGrowthRate: ASSUMPTIONS.revenueGrowthRate,
      cogsPercent,
      fixedOpex: monthlyOpex * 12,
      opexInflationRate: 0,
      depreciationPerYear,
      loanSchedule,
      taxRatePercent: 0,
      projectionYears: ASSUMPTIONS.loanTenureYears,
    });

    const dscr = window.PRFinancialRatios.calculateDscr(pnl, loanSchedule);
    const breakEven = window.PRFinancialRatios.calculateBreakEven({
      year1Revenue: pnl[0].revenue,
      year1Cogs: pnl[0].cogs,
      year1OperatingExpense: pnl[0].operatingExpense,
      year1Depreciation: pnl[0].depreciation,
      year1Interest: pnl[0].interest,
    });
    const cashflow = window.PRCashflowStatement.generateCashflowStatement(pnl, loanSchedule, 0);

    return {
      businessName: data.businessName,
      applicantName: data.applicantName,
      businessAddress: data.businessAddress,
      scheme: data.scheme,
      category: data.category,
      area: data.area,
      financeSplit,
      loanSchedule,
      pnl,
      dscr,
      breakEven,
      cashflow,
      assumptions: ASSUMPTIONS,
    };
  }

  function renderReport(report) {
    const { financeSplit, dscr, breakEven, pnl } = report;

    resultArea.innerHTML = `
      <div class="pr-ledger-card">
        <div class="pr-ledger-row">
          <span class="pr-label">Aapka Hissa (Own Contribution)</span>
          <span class="pr-value">${formatRupees(financeSplit.ownContribution)}</span>
        </div>
        ${
          financeSplit.subsidy
            ? `<div class="pr-ledger-row"><span class="pr-label">Govt Subsidy</span><span class="pr-value">${formatRupees(
                financeSplit.subsidy
              )}</span></div>`
            : ""
        }
        <div class="pr-ledger-row pr-total">
          <span class="pr-label">Bank Loan</span>
          <span class="pr-value">${formatRupees(financeSplit.bankLoan)}</span>
        </div>
      </div>
      <div class="pr-ledger-card">
        <div class="pr-ledger-row">
          <span class="pr-label">Average DSCR (5 saal)</span>
          <span class="pr-value">${dscr.average}</span>
        </div>
        <div class="pr-ledger-row">
          <span class="pr-label">Break-even Sales (Year 1)</span>
          <span class="pr-value">${formatRupees(breakEven.breakEvenSales)}</span>
        </div>
        <div class="pr-ledger-row pr-total">
          <span class="pr-label">Year 1 Net Profit (estimate)</span>
          <span class="pr-value">${formatRupees(pnl[0].netProfit)}</span>
        </div>
      </div>
      <p style="font-size:13px;color:var(--pr-text-muted);">
        Ye numbers aapke diye gaye assumptions (${Math.round(report.assumptions.revenueGrowthRate * 100)}% yearly growth,
        ${Math.round(report.assumptions.annualInterestRate * 100)}% interest, ${report.assumptions.loanTenureYears}-saal tenure) par based hain.
      </p>
      <button type="button" class="pr-btn pr-btn-primary pr-pdf-btn" id="pr-download-pdf-btn">
        📄 Poora PDF Report Download Karein
      </button>
      <p class="pr-pdf-status" id="pr-pdf-status" hidden></p>
    `;

    const pdfBtn = document.getElementById("pr-download-pdf-btn");
    const pdfStatus = document.getElementById("pr-pdf-status");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", async () => {
        if (typeof window.PRReportPdf === "undefined") {
          pdfStatus.hidden = false;
          pdfStatus.textContent = "PDF library load nahi ho payi. Kripya page refresh karke dobara try karein.";
          return;
        }
        pdfBtn.disabled = true;
        pdfStatus.hidden = false;
        pdfStatus.textContent = "PDF banaya ja raha hai...";
        try {
          window.PRReportPdf.generatePdf(report);
          pdfStatus.textContent = "";
          pdfStatus.hidden = true;
        } catch (err) {
          console.error("PDF generation failed:", err);
          pdfStatus.textContent = "PDF banane me dikkat aayi. Kripya dobara try karein.";
        } finally {
          pdfBtn.disabled = false;
        }
      });
    }
  }

  // ---- Site-wide login + auto-save (progress persists if user leaves mid-form) ----
  // Reuses the same Supabase project/auth already wired into the rest of the
  // site (see supabase-client.js), so one login works across every tool.

  async function saveProgress() {
    try {
      const client = await getSupabaseClient();
      if (!client) return; // supabase-client.js not loaded yet / not configured

      const {
        data: { user },
      } = await client.auth.getUser();
      if (!user) return; // not logged in — nothing to save to yet

      await client.from("project_report_drafts").upsert(
        {
          user_id: user.id,
          current_step: currentStep,
          form_data: getFormData(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    } catch (err) {
      // Auto-save failing should never block the form — log only.
      console.warn("Project report auto-save failed:", err);
    }
  }

  async function loadProgress() {
    try {
      const client = await getSupabaseClient();
      if (!client) return;

      const {
        data: { user },
      } = await client.auth.getUser();
      if (!user) return;

      const { data: draft } = await client
        .from("project_report_drafts")
        .select("current_step, form_data")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!draft) return;

      Object.entries(draft.form_data || {}).forEach(([key, value]) => {
        const field = form.elements[key];
        if (field) field.value = value;
      });
      if (draft.current_step) goToStep(draft.current_step);
    } catch (err) {
      console.warn("Project report resume failed:", err);
    }
  }

  // supabase-client.js + auth-modal.js are loaded by main.js right
  // after the header/footer partials — give that a moment before the
  // first resume check, so a returning logged-in user's saved draft
  // actually loads instead of racing an undefined getSupabaseClient.
  const loginNudge = document.getElementById("pr-login-nudge");
  const loginNudgeBtn = document.getElementById("pr-login-nudge-btn");
  if (loginNudgeBtn) {
    loginNudgeBtn.addEventListener("click", () => {
      if (window.ssAuth && typeof window.ssAuth.openLoginModal === "function") {
        window.ssAuth.openLoginModal();
      }
    });
  }

  async function showLoginNudgeIfLoggedOut() {
    if (!loginNudge) return;
    try {
      const client = await getSupabaseClient();
      if (!client) return;
      const {
        data: { user },
      } = await client.auth.getUser();
      loginNudge.hidden = !!user;
    } catch (err) {
      // If we can't tell, don't nag — fail quiet, same as auto-save.
    }
  }

  if (typeof getSupabaseClient === "function") {
    loadProgress();
    showLoginNudgeIfLoggedOut();
  } else {
    document.addEventListener("ss:ready", () => {
      setTimeout(() => {
        loadProgress();
        showLoginNudgeIfLoggedOut();
      }, 300);
    });
  }
})();
