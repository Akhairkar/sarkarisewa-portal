// admin-common.js
// Shared admin shell: sidebar navigation + login guard.
// The admin panel is for viewing data only — it does not create or publish pages.

(function () {
  const NAV = [
    ["dashboard.html", "📊 Overview"],
    ["content.html", "🗂️ Content Inventory"],
    ["seo.html", "🔎 SEO Control Center"],
    ["api-payments.html", "🔌 API & Payments"],
    ["analytics.html", "📈 Analytics"],
    ["subscribers.html", "📬 Subscribers"],
    ["csc.html", "🏬 CSC Claims"],
    ["sahayak.html", "🤝 Seva Sahayak"],
    ["solar.html", "☀️ Solar Leads"],
    ["rc-reports.html", "🚗 RC Challan Reports"],
    ["posters.html", "🖼️ Daily Posters"],
    ["push.html", "🔔 Notifications"],
    ["searches.html", "🔍 Site Searches"],
    ["requests.html", "🙋 Service Requests"],
    ["activity.html", "🧾 Activity Logs"],
    ["revenue.html", "💰 Revenue & AdSense"],
    ["membership.html", "⭐ Premium Membership"],
    ["membership-lifecycle.html", "⏳ Membership Lifecycle"],
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
    const { data, error } = await client.auth.getSession();
    if (error || !data || !data.session) {
      location.href = "login.html";
      throw new Error("Not logged in");
    }

    // Only trusted app_metadata can grant admin access. user_metadata is
    // user-editable and must never be used for authorization.
    const appRole = data.session.user?.app_metadata?.role;
    if (appRole !== "admin") {
      if (loading) loading.innerHTML = "<p class='loading'>This account does not have admin access.</p>";
      const wrap = document.getElementById("dash-wrap");
      if (wrap) wrap.hidden = true;
      throw new Error("Admin role required");
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
    await window.adminLog(client, "page_view", location.pathname.split("/").pop());
    return client;
  };

  // Best-effort audit trail. Store only the admin identity and page/action metadata;
  // never record form values, customer details, tokens, or request payloads.
  window.adminLog = async function (client, action, resource) {
    try {
      const { data } = await client.auth.getUser();
      const user = data?.user;
      if (!user || user.app_metadata?.role !== "admin") return;
      const { error } = await client.from("admin_activity_logs").insert({
        actor_id: user.id,
        actor_email: user.email || null,
        action: String(action || "view").slice(0, 40),
        resource: String(resource || location.pathname.split("/").pop() || "admin").slice(0, 120)
      });
      if (error) console.warn("Admin activity log was not saved:", error.message);
    } catch (error) {
      console.warn("Admin activity logging unavailable:", error);
    }
  };

  window.adminEsc = function (v) {
    const d = document.createElement("div");
    d.textContent = v == null ? "" : String(v);
    return d.innerHTML;
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderNav);
  else renderNav();
})();
