/* ==========================================================================
   admin-theme-toggle.js — Light / Dark Theme Controller
   ========================================================================== */

(function () {
  const savedTheme = localStorage.getItem("admin_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  window.addEventListener("DOMContentLoaded", () => {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    
    function updateBtnText(theme) {
      toggleBtns.forEach((btn) => {
        btn.innerHTML = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
      });
    }

    updateBtnText(savedTheme);

    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("admin_theme", next);
        updateBtnText(next);
      });
    });
  });
})();
