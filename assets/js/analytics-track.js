/* ==========================================================================
   analytics-track.js — Visitor Analytics (Supabase-based)
   Updated to filter bots, headless browsers, and admins (GA4 style)
   ========================================================================== */

(function () {
  const ROOT = typeof window.SS_ROOT === "string" ? window.SS_ROOT : "";
  const HEARTBEAT_MS = 45000; // 45 seconds heartbeat
  const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes (GA4 standard)

  // 1. ADMIN EXCLUSION (Persistent)
  // Set a flag if the user ever visits /admin/
  if (location.pathname.includes('/admin')) {
    localStorage.setItem('ss_admin_bypass', '1');
  }
  // If flag is set, don't track anything for this browser
  if (localStorage.getItem('ss_admin_bypass') === '1') return;

  // 2. BOT & CRAWLER FILTERING
  function isBot() {
    const ua = navigator.userAgent || "";
    // Known crawler signatures (including DotBot, Semrush, Ahrefs, MJ12, etc.)
    const botPattern = /bot|crawler|spider|crawling|google|bing|yahoo|duckduckbot|yandex|baidu|teoma|mj12bot|ahrefsbot|semrushbot|dotbot|rogerbot|petalbot|exabot|spinn3r|archive.org_bot|curl|wget/i;
    if (botPattern.test(ua)) return true;
    
    // Headless browser detection (Puppeteer, Selenium, PhantomJS)
    if (navigator.webdriver) return true;
    if (window._phantom || window.__nightmare) return true;
    if (window.domAutomation || window.domAutomationController) return true;
    if (document.documentElement.getAttribute("webdriver")) return true;
    if (navigator.userAgent.indexOf("HeadlessChrome") !== -1) return true;
    
    return false;
  }

  // If detected as bot/crawler, stop execution completely (no server hit)
  if (isBot()) {
    console.log("Analytics: Bot detected, tracking disabled.");
    return;
  }

  // 3. RATE LIMITING / SPAM PROTECTION (Client-Side)
  // Prevent multiple hits within 1 second from the same tab (e.g. rapid F5 refreshes)
  const now = Date.now();
  const lastHitTime = sessionStorage.getItem('ss_last_hit_time');
  if (lastHitTime && (now - parseInt(lastHitTime, 10)) < 1000) {
    return; // Drop rapid-fire request
  }
  sessionStorage.setItem('ss_last_hit_time', now.toString());

  // Helper functions
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

  // 4. SESSION & DEDUPLICATION (30 Min Timeout)
  function getSessionId() {
    let sid = sessionStorage.getItem("ss_analytics_sid");
    let lastActive = sessionStorage.getItem("ss_session_active");
    
    // Create new session if none exists OR if inactive for > 30 mins
    if (!sid || (lastActive && (now - parseInt(lastActive, 10)) > SESSION_TIMEOUT_MS)) {
      sid = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : "sid-" + Date.now() + "-" + Math.random().toString(36).slice(2);
      sessionStorage.setItem("ss_analytics_sid", sid);
    }
    
    sessionStorage.setItem("ss_session_active", Date.now().toString());
    return sid;
  }

  // Determine New vs Returning Visitor
  let visitorType = "returning";
  if (!localStorage.getItem('ss_first_visit')) {
    visitorType = "new";
    localStorage.setItem('ss_first_visit', Date.now().toString());
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
    } catch (e) {}

    const ref = document.referrer;
    if (!ref) return "direct";
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "");
      if (host === location.hostname) return "internal";
      if (/google\.|bing\.|yahoo\.|duckduckgo\./i.test(host)) return "organic search";
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
      if (!client) return;

      // Admin check #2: Server auth session check
      // If the admin is logged into Supabase Auth, don't track
      const { data } = await client.auth.getSession();
      if (data && data.session) return;

      const sessionId = getSessionId();
      const pagePath = location.pathname || "/";

      // 5. PREVENT REFRESH DUPLICATION
      // Don't log a new page_view if the user just refreshed the exact same page within 30 minutes
      const lastPage = sessionStorage.getItem('ss_last_page');
      let isDuplicateReload = false;
      
      // We know session is active and within 30 mins because getSessionId() handled it
      if (lastPage === pagePath) {
          isDuplicateReload = true;
      }
      sessionStorage.setItem('ss_last_page', pagePath);

      if (!isDuplicateReload) {
        // Send page view to server
        await client.from("page_views").insert({
          session_id: sessionId,
          page_path: pagePath,
          referrer_host: getReferrerHost(),
          traffic_source: detectTrafficSource(),
          device_type: detectDeviceType()
        });
      }

      // Heartbeat for Real-Time Active Users (Online Now)
      const heartbeat = () => {
        // Keep session alive
        sessionStorage.setItem("ss_session_active", Date.now().toString());
        
        client.from("active_sessions")
          .upsert({ session_id: sessionId, page_path: pagePath, last_seen: new Date().toISOString() }, { onConflict: "session_id" })
          .then(() => {}, () => {});
      };
      
      heartbeat(); // Fire immediately
      const intervalId = setInterval(heartbeat, HEARTBEAT_MS);
      window.addEventListener("pagehide", () => clearInterval(intervalId));

    } catch (err) {
      // Fail silently to not disrupt UX
      console.warn("Analytics tracking skipped:", err && err.message);
    }
  }

  // Small delay to let page render first before tracking (GA4 practice)
  setTimeout(track, 300);

})();
