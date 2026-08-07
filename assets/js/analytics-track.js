/* ==========================================================================
   analytics-track.js — Module 18: Visitor Analytics (Supabase-based)
   Logs one row per page view + a lightweight heartbeat, so the admin
   dashboard can show Total/Today/Online visitors, top pages, traffic
   sources, device types and a 30-day trend — no Google Analytics needed.

   Loaded automatically on EVERY page by main.js — no need to add a
   <script> tag to individual HTML files.

   ⚠️ ADMIN VISITS ARE NEVER COUNTED: before logging anything, this checks
   for an active Supabase Auth session (i.e. this browser is logged into
   /admin/). If one exists, tracking is skipped completely — on top of
   that, supabase/analytics-schema.sql also blocks the insert at the
   database level for any authenticated session, so this is enforced twice.
   ========================================================================== */

(function () {
  const ROOT = typeof window.SS_ROOT === "string" ? window.SS_ROOT : "";
  const HEARTBEAT_MS = 45000; // re-confirm "still open" every 45s (< 5 min window)

  function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
      const already = Array.from(document.scripts).find((s) => s.src.endsWith(src));
      if (already) {
        if (already.dataset.loaded === "1") return resolve();
        already.addEventListener("load", () => resolve());
        already.addEventListener("error", reject);
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => { s.dataset.loaded = "1"; resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function getSessionId() {
    let sid = sessionStorage.getItem("ss_analytics_sid");
    if (!sid) {
      sid = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : "sid-" + Date.now() + "-" + Math.random().toString(36).slice(2);
      sessionStorage.setItem("ss_analytics_sid", sid);
    }
    return sid;
  }

  function detectDeviceType() {
    const ua = navigator.userAgent || "";
    if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return "tablet";
    if (/mobi|iphone|android/i.test(ua)) return "mobile";
    return "desktop";
  }

  function detectTrafficSource() {
    try {
      const params = new URLSearchParams(location.search);
      if (params.get("utm_source")) return "campaign";
    } catch (e) { /* ignore */ }

    const ref = document.referrer;
    if (!ref) return "direct";
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host === location.hostname) return "internal";
      if (/google\.|bing\.|yahoo\.|duckduckgo\./i.test(host)) return "search";
      if (/facebook\.|instagram\.|twitter\.|x\.com|whatsapp\.|t\.co|linkedin\./i.test(host)) return "social";
      return "referral";
    } catch (e) {
      return "referral";
    }
  }

  function getReferrerHost() {
    if (!document.referrer) return null;
    try {
      return new URL(document.referrer).hostname.replace(/^www\./, "");
    } catch (e) {
      return null;
    }
  }

  async function ensureSupabase() {
    if (typeof window.getSupabaseClient !== "function") {
      await loadScriptOnce(ROOT + "assets/js/supabase-client.js");
    }
    if (typeof window.getSupabaseClient !== "function") return null;
    return window.getSupabaseClient();
  }

  async function track() {
    try {
      const client = await ensureSupabase();
      if (!client) return; // backend not configured — fail silently

      // Admin-exclusion check #1 (client-side). See file header.
      const { data } = await client.auth.getSession();
      if (data && data.session) return;

      const sessionId = getSessionId();
      const pagePath = location.pathname || "/";

      await client.from("page_views").insert({
        session_id: sessionId,
        page_path: pagePath,
        referrer_host: getReferrerHost(),
        traffic_source: detectTrafficSource(),
        device_type: detectDeviceType(),
      });

      const heartbeat = () => {
        client.from("active_sessions")
          .upsert({ session_id: sessionId, page_path: pagePath, last_seen: new Date().toISOString() }, { onConflict: "session_id" })
          .then(() => {}, () => {});
      };
      heartbeat();
      const intervalId = setInterval(heartbeat, HEARTBEAT_MS);
      window.addEventListener("pagehide", () => clearInterval(intervalId));
    } catch (err) {
      // Never let analytics break the page.
      console.warn("Analytics tracking skipped:", err && err.message);
    }
  }

  track();
})();
