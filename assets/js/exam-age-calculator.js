/**
 * exam-age-calculator.js — Exam Age Eligibility Calculator
 * Client-side calculation of exact age (years, months, days) and category-wise
 * eligibility check against 11 major government exams.
 */
(function () {
  "use strict";

  // Category relaxation in years
  var CATEGORY_RELAXATION = {
    general: { label: "General / EWS", years: 0 },
    obc: { label: "OBC (Non-Creamy Layer)", years: 3 },
    sc: { label: "SC", years: 5 },
    st: { label: "ST", years: 5 },
    pwd: { label: "PwD (Persons with Disabilities)", years: 10 }
  };

  // 11 Exams list with min and max age limits (General)
  var EXAMS_DATA = [
    { name: "SSC CGL", min: 18, max: 32, cat: "SSC" },
    { name: "SSC CHSL", min: 18, max: 27, cat: "SSC" },
    { name: "SSC MTS", min: 18, max: 25, cat: "SSC" },
    { name: "SSC GD Constable", min: 18, max: 23, cat: "SSC" },
    { name: "UPSC Civil Services", min: 21, max: 32, cat: "UPSC" },
    { name: "RRB NTPC (Graduate)", min: 18, max: 33, cat: "Railway" },
    { name: "RRB ALP / Technician", min: 18, max: 30, cat: "Railway" },
    { name: "IBPS PO", min: 20, max: 30, cat: "Banking" },
    { name: "IBPS Clerk", min: 20, max: 28, cat: "Banking" },
    { name: "SBI PO", min: 21, max: 30, cat: "Banking" },
    { name: "State PSC (typical)", min: 21, max: 40, cat: "State PSC" }
  ];

  /**
   * Calculates exact difference in years, months, days between two dates.
   */
  function getExactAge(dob, cutoff) {
    var d1 = new Date(dob);
    var d2 = new Date(cutoff);

    var years = d2.getFullYear() - d1.getFullYear();
    var months = d2.getMonth() - d1.getMonth();
    var days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months--;
      // Days in previous month of cutoff date
      var prevMonthDays = new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
      days += prevMonthDays;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years: years, months: months, days: days };
  }

  /**
   * Evaluates eligibility for an exam given candidate DOB, cutoff date, and category relaxation.
   */
  function checkExamEligibility(dobStr, cutoffStr, exam, relaxationYears) {
    var dob = new Date(dobStr);
    var cutoff = new Date(cutoffStr);

    var maxAge = exam.max + relaxationYears;
    var minAge = exam.min;

    // Date when candidate turns minAge
    var minDate = new Date(dob.getFullYear() + minAge, dob.getMonth(), dob.getDate());
    // Date when candidate exceeds maxAge (day after turning maxAge + 1)
    var maxDate = new Date(dob.getFullYear() + maxAge + 1, dob.getMonth(), dob.getDate());

    if (cutoff < minDate) {
      return { status: "underage", label: "Underage", min: minAge, max: maxAge };
    } else if (cutoff >= maxDate) {
      return { status: "overage", label: "Overage", min: minAge, max: maxAge };
    } else {
      return { status: "eligible", label: "Eligible", min: minAge, max: maxAge };
    }
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  function init() {
    var form = document.getElementById("eac-form");
    var resultEl = document.getElementById("eac-result");

    if (!form || !resultEl) return;

    // Set default cutoff date to current year's 1st August (typical cutoff date) or today
    var cutoffInput = document.getElementById("eac-cutoff");
    if (cutoffInput && !cutoffInput.value) {
      var currentYear = new Date().getFullYear();
      cutoffInput.value = currentYear + "-08-01";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var dobVal = document.getElementById("eac-dob").value;
      var cutoffVal = document.getElementById("eac-cutoff").value;
      var catVal = document.getElementById("eac-category").value || "general";

      if (!dobVal || !cutoffVal) {
        resultEl.innerHTML = '<div class="eac-photo-box">⚠️</div><p style="color:var(--color-danger, #ef4444); font-weight:600;">Kripya Date of Birth aur Cut-off Date dono select karein.</p>';
        return;
      }

      var dobDate = new Date(dobVal);
      var cutoffDate = new Date(cutoffVal);

      if (cutoffDate < dobDate) {
        resultEl.innerHTML = '<div class="eac-photo-box">⚠️</div><p style="color:var(--color-danger, #ef4444); font-weight:600;">Cut-off date Date of Birth se pehle nahi ho sakti.</p>';
        return;
      }

      var age = getExactAge(dobVal, cutoffVal);
      var categoryInfo = CATEGORY_RELAXATION[catVal] || CATEGORY_RELAXATION.general;
      var relaxationYears = categoryInfo.years;

      var eligibleCount = 0;
      var examResults = EXAMS_DATA.map(function (exam) {
        var res = checkExamEligibility(dobVal, cutoffVal, exam, relaxationYears);
        if (res.status === "eligible") eligibleCount++;
        return {
          exam: exam,
          result: res
        };
      });

      // Render Results Card
      var html = '';
      html += '<div style="padding:10px 0;">';
      
      // Candidate Calculated Age Header
      html += '<div style="background:var(--eac-surface, #ffffff); border:1px solid rgba(0,0,0,0.1); border-radius:12px; padding:18px 20px; margin-bottom:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">';
      html += '  <div style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:var(--eac-accent, #D97F2B); letter-spacing:0.04em;">Aapki Exact Age (As On ' + escapeHtml(cutoffVal) + ')</div>';
      html += '  <div style="font-size:1.6rem; font-weight:800; color:var(--eac-primary, #10243E); margin:4px 0 8px;">' + age.years + ' Yrs, ' + age.months + ' Mos, ' + age.days + ' Days</div>';
      html += '  <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;">';
      html += '    <span style="background:rgba(217,127,43,0.12); color:#b45309; padding:3px 10px; border-radius:99px; font-size:0.78rem; font-weight:700;">' + escapeHtml(categoryInfo.label) + '</span>';
      if (relaxationYears > 0) {
        html += '    <span style="background:rgba(16,185,129,0.12); color:#047857; padding:3px 10px; border-radius:99px; font-size:0.78rem; font-weight:700;">+' + relaxationYears + ' Years Age Relaxation Applied</span>';
      }
      html += '  </div>';
      html += '</div>';

      // Summary Banner
      var bannerBg = eligibleCount > 0 ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)";
      var bannerColor = eligibleCount > 0 ? "#047857" : "#b91c1c";
      html += '<div style="background:' + bannerBg + '; border:1px solid ' + bannerColor + '; color:' + bannerColor + '; border-radius:10px; padding:14px 18px; margin-bottom:20px; font-weight:700; font-size:0.95rem; display:flex; align-items:center; justify-content:space-between;">';
      html += '  <span>🎯 Eligibility Status: ' + eligibleCount + ' of ' + EXAMS_DATA.length + ' Major Exams Eligible</span>';
      html += '</div>';

      // Detailed Exam Table
      html += '<div style="overflow-x:auto;">';
      html += '<table class="cat-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">';
      html += '  <thead>';
      html += '    <tr style="border-bottom:2px solid rgba(0,0,0,0.1); text-align:left;">';
      html += '      <th style="padding:8px 10px;">Exam Name</th>';
      html += '      <th style="padding:8px 10px;">Min Age</th>';
      html += '      <th style="padding:8px 10px;">Max Age (Your Cat.)</th>';
      html += '      <th style="padding:8px 10px;">Status</th>';
      html += '    </tr>';
      html += '  </thead>';
      html += '  <tbody>';

      examResults.forEach(function (item) {
        var badgeStyle = "";
        var statusLabel = "";
        if (item.result.status === "eligible") {
          badgeStyle = "background:rgba(16,185,129,0.14); color:#047857; border:1px solid rgba(16,185,129,0.3);";
          statusLabel = "✅ Eligible";
        } else if (item.result.status === "overage") {
          badgeStyle = "background:rgba(239,68,68,0.14); color:#b91c1c; border:1px solid rgba(239,68,68,0.3);";
          statusLabel = "❌ Overage";
        } else {
          badgeStyle = "background:rgba(245,158,11,0.14); color:#b45309; border:1px solid rgba(245,158,11,0.3);";
          statusLabel = "⚠️ Underage";
        }

        html += '    <tr style="border-bottom:1px solid rgba(0,0,0,0.06);">';
        html += '      <td style="padding:10px; font-weight:600;">' + escapeHtml(item.exam.name) + '</td>';
        html += '      <td style="padding:10px;">' + item.exam.min + ' yrs</td>';
        html += '      <td style="padding:10px;">' + item.result.max + ' yrs <span style="font-size:0.75rem; color:#666;">(Gen ' + item.exam.max + ')</span></td>';
        html += '      <td style="padding:10px;"><span style="display:inline-block; padding:3px 10px; border-radius:99px; font-size:0.78rem; font-weight:700; ' + badgeStyle + '">' + statusLabel + '</span></td>';
        html += '    </tr>';
      });

      html += '  </tbody>';
      html += '</table>';
      html += '</div>';

      html += '</div>';

      resultEl.innerHTML = html;
      resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
