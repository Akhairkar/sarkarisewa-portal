/* Admin-only Light / Dark theme controller.
   Only the sidebar-footer switch is a theme toggle. Other buttons reuse the
   .theme-toggle-btn class purely for styling (Refresh, Save draft, Publish...),
   so they must never be relabelled or bound here. */
(function () {
  const KEY = "admin-theme";
  function readTheme() {
    try { return localStorage.getItem(KEY) || "dark"; } catch (_) { return "dark"; }
  }
  function applyTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (_) {}
    document.querySelectorAll(".admin-sidebar-footer .theme-toggle-btn").forEach((btn) => {
      const label = next === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
      btn.textContent = label;
      btn.setAttribute("aria-label", "Switch to " + (next === "dark" ? "light" : "dark") + " theme");
      btn.setAttribute("aria-pressed", String(next === "light"));
    });
  }
  applyTheme(readTheme());
  function bind() {
    document.querySelectorAll(".admin-sidebar-footer .theme-toggle-btn").forEach((btn) => {
      if (btn.dataset.adminThemeBound === "1") return;
      btn.dataset.adminThemeBound = "1";
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    });
    applyTheme(document.documentElement.getAttribute("data-theme") || readTheme());
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
