/* ==========================================================================
   analytics.js — logs one anonymous page-view row per page load into the
   "page_views" Supabase table, and upserts a heartbeat into
   "active_sessions" so the dashboard's "Online now" stat works.
   (see supabase/analytics-schema.sql). Powers the admin dashboard's
   "Analytics" tab. No cookies, no personal data.

   Include this script on every public page (same pattern as job-alerts.js):
     <script src="assets/js/analytics.js"></script>
   It must load AFTER assets/js/supabase-client.js.

   Admin's own visits are never counted:
   - This script itself skips any /admin/ path.
   - Even if the admin browses the public site in another tab while still
     logged in, the shared Supabase client attaches their auth session to
     every request, and the database's RLS insert policy only accepts
     writes from role 'anon' — so a logged-in admin's page views are
     rejected silently at the database level too.
   ========================================================================== */

(function () {
  if (/^\/admin\//i.test(window.location.pathname)) return;

  const SESSION_KEY = "ss_session_id";
  const HEARTBEAT_MS = 60000;

  function getSessionId() {
    try {
      let id = sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
        sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch (e) {
      return "no-storage-" + Date.now();
    }
  }

  function detectDevice() {
    const ua = navigator.userAgent;
    if (/iPad|Tablet(?!.*Mobile)/i.test(ua)) return "tablet";
    if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
    return "desktop";
  }

  function detectTrafficSource() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("utm_source") || params.get("utm_campaign")) return "campaign";

    const ref = document.referrer;
    if (!ref) return "direct";

    let refHost;
    try {
      refHost = new URL(ref).hostname.replace(/^www\./, "");
    } catch (e) {
      return "direct";
    }
    if (refHost === window.location.hostname.replace(/^www\./, "")) return "internal";

    const searchEngines = ["google.", "bing.", "yahoo.", "duckduckgo.", "baidu.", "yandex."];
    if (searchEngines.some((s) => refHost.includes(s))) return "search";

    const socialSites = ["facebook.", "instagram.", "twitter.", "x.com", "linkedin.", "whatsapp.", "t.co", "youtube."];
    if (socialSites.some((s) => refHost.includes(s))) return "social";

    return "referral";
  }

  function detectLang() {
    try {
      if (typeof getLang === "function") return getLang();
    } catch (e) {}
    return document.documentElement.lang || "en";
  }

  async function logPageView(client, sessionId) {
    try {
      await client.from("page_views").insert({
        path: window.location.pathname,
        referrer: document.referrer || null,
        traffic_source: detectTrafficSource(),
        device_type: detectDevice(),
        lang: detectLang(),
        session_id: sessionId,
      });
    } catch (err) {
      console.warn("Analytics: could not log page view", err);
    }
  }

  async function heartbeat(client, sessionId) {
    try {
      await client.from("active_sessions").upsert(
        { session_id: sessionId, path: window.location.pathname, last_seen: new Date().toISOString() },
        { onConflict: "session_id" }
      );
    } catch (err) {
      // Fine to fail silently — this only powers the "online now" stat.
    }
  }

  async function init() {
    if (typeof getSupabaseClient !== "function") return;
    const client = await getSupabaseClient();
    if (!client) return;

    const sessionId = getSessionId();
    logPageView(client, sessionId);
    heartbeat(client, sessionId);

    const intervalId = setInterval(() => {
      if (document.visibilityState === "visible") heartbeat(client, sessionId);
    }, HEARTBEAT_MS);

    window.addEventListener("pagehide", () => clearInterval(intervalId));
  }

  init();
})();
