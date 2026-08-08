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

  /* ================================================================
     1. Direct Loan Calculator  (mpbcdc-direct-loan-yojana.html)
     ================================================================ */
  function initDirectLoanCalc() {
    var form = document.getElementById('mpbcdc-dl-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var cost = clamp(parseFloat(document.getElementById('mpbcdc-dl-cost').value) || 0, 0, 100000);
      var tenure = clamp(parseInt(document.getElementById('mpbcdc-dl-tenure').value) || 36, 12, 84);

      var subsidy = Math.round(cost * 0.50);
      var loan = Math.round(cost * 0.45);
      var own = cost - subsidy - loan;
      var monthlyEmi = emi(loan, 4, tenure);
      var totalInterest = (monthlyEmi * tenure) - loan;

      document.getElementById('mpbcdc-dl-r-cost').textContent = fmt(cost);
      document.getElementById('mpbcdc-dl-r-subsidy').textContent = fmt(subsidy);
      document.getElementById('mpbcdc-dl-r-loan').textContent = fmt(loan);
      document.getElementById('mpbcdc-dl-r-own').textContent = fmt(own);
      document.getElementById('mpbcdc-dl-r-rate').textContent = '4% p.a.';
      document.getElementById('mpbcdc-dl-r-emi').textContent = fmt(monthlyEmi) + '/month';
      document.getElementById('mpbcdc-dl-r-interest').textContent = fmt(totalInterest);
      document.getElementById('mpbcdc-dl-r-total').textContent = fmt(loan + totalInterest);

      var res = document.getElementById('mpbcdc-dl-results');
      if (res) res.classList.add('is-visible');
    });
  }

  /* ================================================================
     2. Seed Capital Calculator  (mpbcdc-seed-capital-yojana.html)
     ================================================================ */
  function initSeedCapitalCalc() {
    var form = document.getElementById('mpbcdc-sc-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var cost = clamp(parseFloat(document.getElementById('mpbcdc-sc-cost').value) || 0, 0, 500000);
      var bankRate = clamp(parseFloat(document.getElementById('mpbcdc-sc-rate').value) || 10, 1, 20);
      var tenure = clamp(parseInt(document.getElementById('mpbcdc-sc-tenure').value) || 60, 12, 120);

      var bankShare = Math.round(cost * 0.75);
      var corpShare = Math.round(cost * 0.20);
      if (corpShare > 100000) corpShare = 100000;
      var own = cost - bankShare - corpShare;
      if (own < 0) { bankShare = cost - corpShare - Math.round(cost * 0.05); own = Math.round(cost * 0.05); }
      var monthlyEmi = emi(bankShare, bankRate, tenure);
      var totalInterest = (monthlyEmi * tenure) - bankShare;

      document.getElementById('mpbcdc-sc-r-cost').textContent = fmt(cost);
      document.getElementById('mpbcdc-sc-r-bank').textContent = fmt(bankShare);
      document.getElementById('mpbcdc-sc-r-corp').textContent = fmt(corpShare);
      document.getElementById('mpbcdc-sc-r-own').textContent = fmt(own);
      document.getElementById('mpbcdc-sc-r-rate').textContent = bankRate.toFixed(1) + '% p.a.';
      document.getElementById('mpbcdc-sc-r-emi').textContent = fmt(monthlyEmi) + '/month';
      document.getElementById('mpbcdc-sc-r-interest').textContent = fmt(totalInterest);
      document.getElementById('mpbcdc-sc-r-total').textContent = fmt(bankShare + totalInterest);

      var res = document.getElementById('mpbcdc-sc-results');
      if (res) res.classList.add('is-visible');
    });
  }

  /* ================================================================
     3. 50% Subsidy Calculator  (mpbcdc-subsidy-yojana.html)
     ================================================================ */
  function initSubsidyCalc() {
    var form = document.getElementById('mpbcdc-sub-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var cost = clamp(parseFloat(document.getElementById('mpbcdc-sub-cost').value) || 0, 0, 50000);
      var bankRate = clamp(parseFloat(document.getElementById('mpbcdc-sub-rate').value) || 10, 1, 20);
      var tenure = clamp(parseInt(document.getElementById('mpbcdc-sub-tenure').value) || 36, 12, 60);

      var grant = Math.round(cost * 0.50);
      var bankLoan = cost - grant;
      var monthlyEmi = emi(bankLoan, bankRate, tenure);
      var totalInterest = (monthlyEmi * tenure) - bankLoan;

      document.getElementById('mpbcdc-sub-r-cost').textContent = fmt(cost);
      document.getElementById('mpbcdc-sub-r-grant').textContent = fmt(grant);
      document.getElementById('mpbcdc-sub-r-bank').textContent = fmt(bankLoan);
      document.getElementById('mpbcdc-sub-r-rate').textContent = bankRate.toFixed(1) + '% p.a.';
      document.getElementById('mpbcdc-sub-r-emi').textContent = fmt(monthlyEmi) + '/month';
      document.getElementById('mpbcdc-sub-r-interest').textContent = fmt(totalInterest);
      document.getElementById('mpbcdc-sub-r-total').textContent = fmt(bankLoan + totalInterest);

      var res = document.getElementById('mpbcdc-sub-results');
      if (res) res.classList.add('is-visible');
    });
  }

  /* ---- auto-init on DOMContentLoaded ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initDirectLoanCalc();
    initSeedCapitalCalc();
    initSubsidyCalc();
  });
})();
