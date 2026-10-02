/* Service access gate: browse freely, require a signed-in account for service workflows. */
(function () {
  "use strict";
  const GATE_ROOT = window.SS_ROOT || "";
  const LOGIN = GATE_ROOT + "account/login.html";

  function safeLocalTarget(value) {
    try {
      const u = new URL(value, location.origin);
      if (u.origin !== location.origin || !u.pathname.startsWith("/")) return "";
      return u.pathname + u.search + u.hash;
    } catch (e) { return ""; }
  }

  document.addEventListener("click", async function (event) {
    const card = event.target.closest(".sd-card[data-service-link]");
    if (!card) return;
    const target = safeLocalTarget(card.getAttribute("data-service-link") || card.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    try {
      const client = typeof getSupabaseClient === "function" ? await getSupabaseClient() : null;
      const sessionResult = client ? await client.auth.getSession() : { data: { session: null } };
      if (sessionResult && sessionResult.data && sessionResult.data.session) {
        location.href = target;
        return;
      }
    } catch (e) {
      console.warn("Account check failed; continuing through login gate.", e);
    }
    location.href = LOGIN + "?return=" + encodeURIComponent(target);
  });
})();
