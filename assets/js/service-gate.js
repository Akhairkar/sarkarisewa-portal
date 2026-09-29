/* Service access gate: public directory stays browseable; individual service workflows require an account. */
(function () {
  "use strict";
  const ROOT = window.SS_ROOT || "";
  const LOGIN = ROOT + "account/login.html";
  const cards = document.querySelectorAll(".sd-card[data-service-link]");
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("click", async function (event) {
      const href = card.getAttribute("data-service-link") || card.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      event.preventDefault();
      try {
        const client = typeof getSupabaseClient === "function" ? await getSupabaseClient() : null;
        const { data } = client ? await client.auth.getSession() : { data: { session: null } };
        if (data && data.session) {
          window.location.href = href;
          return;
        }
      } catch (e) {
        console.warn("Auth check failed; opening login gate.", e);
      }
      window.location.href = LOGIN + "?return=" + encodeURIComponent(href);
    });
  });
})();