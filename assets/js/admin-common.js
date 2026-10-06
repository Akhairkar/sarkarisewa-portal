// admin-common.js
// Shared admin shell: sidebar navigation + login guard.
// The admin panel is for viewing data only — it does not create or publish pages.

(function () {
  const NAV = [
    ["dashboard.html", "📊 Overview"],
    ["analytics.html", "📈 Analytics"],
    ["comments.html", "💬 Comments"],
    ["subscribers.html", "📬 Subscribers"],
    ["csc.html", "🏬 CSC Claims"],
    ["solar.html", "☀️ Solar Leads"],
    ["rc-reports.html", "🚗 RC Challan Reports"],
    ["data.html", "🗂️ Content Data"],
  ];

  function renderNav() {
    const nav = document.querySelector(".admin-nav");
    if (!nav) return;
    const current = location.pathname.split("/").pop() || "dashboard.html";
    nav.innerHTML = NAV.map(([href, label]) =>
      `<a href="${href}" class="admin-nav-item${href === current ? " active" : ""}">${label}</a>`
    ).join("");
  }

  // Resolves to a logged-in Supabase client, or redirects to login.
  window.adminGuard = async function () {
    const client = await getSupabaseClient();
    const loading = document.getElementById("dash-loading");
    if (!client) {
      if (loading) loading.innerHTML = "<p class='loading'>Backend not configured.</p>";
      throw new Error("Backend not configured");
    }
    const { data } = await client.auth.getSession();
    if (!data || !data.session) {
      location.href = "login.html";
      throw new Error("Not logged in");
    }
    const who = document.getElementById("whoami");
    if (who) who.textContent = "Logged in as " + data.session.user.email;
    const logout = document.getElementById("logout");
    if (logout && !logout.dataset.bound) {
      logout.dataset.bound = "1";
      logout.addEventListener("click", async () => {
        await client.auth.signOut();
        location.href = "login.html";
      });
    }
    if (loading) loading.hidden = true;
    const wrap = document.getElementById("dash-wrap");
    if (wrap) wrap.hidden = false;
    return client;
  };

  window.adminEsc = function (v) {
    const d = document.createElement("div");
    d.textContent = v == null ? "" : String(v);
    return d.innerHTML;
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderNav);
  else renderNav();
})();
