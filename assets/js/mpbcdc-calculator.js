/**
 * mpbcdc-calculator.js
 * ------------------------------------------------------------------
 * Shared calculator logic for all 3 MPBCDC scheme pages.
 * Each init function null-checks its elements so it runs safely on
 * pages where that specific calculator doesn't exist.
 * ------------------------------------------------------------------
 */

(function () {
  'use strict';

  /* ---- helpers ---- */
  function fmt(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
  }
  function emi(P, annualRate, months) {
    if (P <= 0 || months <= 0) return 0;
    if (annualRate <= 0) return Math.round(P / months);
    var r = annualRate / 12 / 100;
    return Math.round(P * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1));
  }
  function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }
  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ================================================================
     1. Direct Loan Calculator  (mpbcdc-direct-loan-yojana.html)
     ================================================================ */
  function initDirectLoanCalc() {
    var form = document.getElementById('mpbcdc-dl-form');
    if (!form) return;

    function runCalc() {
      var costEl = document.getElementById('mpbcdc-dl-cost');
      var tenureEl = document.getElementById('mpbcdc-dl-tenure');
      var cost = clamp(parseFloat(costEl ? costEl.value : 100000) || 0, 0, 100000);
      var tenure = clamp(parseInt(tenureEl ? tenureEl.value : 36) || 36, 12, 84);

      var subsidy = Math.round(cost * 0.50);
      var loan = Math.round(cost * 0.45);
      var own = cost - subsidy - loan;
      var monthlyEmi = emi(loan, 4, tenure);
      var totalInterest = (monthlyEmi * tenure) - loan;

      setText('mpbcdc-dl-r-cost', fmt(cost));
      setText('mpbcdc-dl-r-subsidy', fmt(subsidy));
      setText('mpbcdc-dl-r-loan', fmt(loan));
      setText('mpbcdc-dl-r-own', fmt(own));
      setText('mpbcdc-dl-r-rate', '4% p.a.');
      setText('mpbcdc-dl-r-emi', fmt(monthlyEmi) + '/month');
      setText('mpbcdc-dl-r-interest', fmt(totalInterest));
      setText('mpbcdc-dl-r-total', fmt(loan + totalInterest));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      runCalc();
    });

    // Auto-calculate on input changes
    var costInput = document.getElementById('mpbcdc-dl-cost');
    var tenureInput = document.getElementById('mpbcdc-dl-tenure');
    if (costInput) costInput.addEventListener('input', runCalc);
    if (tenureInput) tenureInput.addEventListener('change', runCalc);

    // Initial run
    runCalc();
  }

  /* ================================================================
     2. Seed Capital Calculator  (mpbcdc-seed-capital-yojana.html)
     ================================================================ */
  function initSeedCapitalCalc() {
    var form = document.getElementById('mpbcdc-sc-form');
    if (!form) return;

    function runCalc() {
      var costEl = document.getElementById('mpbcdc-sc-cost');
      var rateEl = document.getElementById('mpbcdc-sc-bank-rate') || document.getElementById('mpbcdc-sc-rate');
      var tenureEl = document.getElementById('mpbcdc-sc-tenure');

      var cost = clamp(parseFloat(costEl ? costEl.value : 300000) || 0, 0, 500000);
      var bankRate = clamp(parseFloat(rateEl ? rateEl.value : 10.5) || 10.5, 1, 20);
      var tenure = clamp(parseInt(tenureEl ? tenureEl.value : 60) || 60, 12, 120);

      var bankShare = Math.round(cost * 0.75);
      var corpShare = Math.round(cost * 0.20);
      if (corpShare > 100000) corpShare = 100000;
      var own = cost - bankShare - corpShare;
      if (own < 0) { bankShare = cost - corpShare - Math.round(cost * 0.05); own = Math.round(cost * 0.05); }
      var monthlyEmi = emi(bankShare, bankRate, tenure);
      var totalInterest = (monthlyEmi * tenure) - bankShare;

      setText('mpbcdc-sc-r-cost', fmt(cost));
      setText('mpbcdc-sc-r-bank', fmt(bankShare));
      setText('mpbcdc-sc-r-seed', fmt(corpShare));
      setText('mpbcdc-sc-r-corp', fmt(corpShare));
      setText('mpbcdc-sc-r-own', fmt(own));
      setText('mpbcdc-sc-r-rate', bankRate.toFixed(1) + '% p.a.');
      setText('mpbcdc-sc-r-emi', fmt(monthlyEmi) + '/month');
      setText('mpbcdc-sc-r-interest', fmt(totalInterest));
      setText('mpbcdc-sc-r-total', fmt(bankShare + totalInterest));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      runCalc();
    });

    var costInput = document.getElementById('mpbcdc-sc-cost');
    var rateInput = document.getElementById('mpbcdc-sc-bank-rate') || document.getElementById('mpbcdc-sc-rate');
    if (costInput) costInput.addEventListener('input', runCalc);
    if (rateInput) rateInput.addEventListener('input', runCalc);

    runCalc();
  }

  /* ================================================================
     3. 50% Subsidy Calculator  (mpbcdc-subsidy-yojana.html)
     ================================================================ */
  function initSubsidyCalc() {
    var form = document.getElementById('mpbcdc-sub-form');
    if (!form) return;

    function runCalc() {
      var costEl = document.getElementById('mpbcdc-sub-cost');
      var rateEl = document.getElementById('mpbcdc-sub-rate');
      var tenureEl = document.getElementById('mpbcdc-sub-tenure');

      var cost = clamp(parseFloat(costEl ? costEl.value : 50000) || 0, 0, 50000);
      var bankRate = clamp(parseFloat(rateEl ? rateEl.value : 10.5) || 10.5, 1, 20);
      var tenure = clamp(parseInt(tenureEl ? tenureEl.value : 36) || 36, 12, 60);

      var grant = Math.round(cost * 0.50);
      var bankLoan = cost - grant;
      var monthlyEmi = emi(bankLoan, bankRate, tenure);
      var totalInterest = (monthlyEmi * tenure) - bankLoan;

      setText('mpbcdc-sub-r-cost', fmt(cost));
      setText('mpbcdc-sub-r-grant', fmt(grant));
      setText('mpbcdc-sub-r-subsidy', fmt(grant));
      setText('mpbcdc-sub-r-bank', fmt(bankLoan));
      setText('mpbcdc-sub-r-loan', fmt(bankLoan));
      setText('mpbcdc-sub-r-rate', bankRate.toFixed(1) + '% p.a.');
      setText('mpbcdc-sub-r-emi', fmt(monthlyEmi) + '/month');
      setText('mpbcdc-sub-r-interest', fmt(totalInterest));
      setText('mpbcdc-sub-r-total', fmt(bankLoan + totalInterest));
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      runCalc();
    });

    var costInput = document.getElementById('mpbcdc-sub-cost');
    var rateInput = document.getElementById('mpbcdc-sub-rate');
    if (costInput) costInput.addEventListener('input', runCalc);
    if (rateInput) rateInput.addEventListener('input', runCalc);

    runCalc();
  }

  /* ---- auto-init on DOMContentLoaded ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initDirectLoanCalc();
    initSeedCapitalCalc();
    initSubsidyCalc();
  });
})();

