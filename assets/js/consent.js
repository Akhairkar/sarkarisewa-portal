/* ==========================================================================
   consent.js (Repurposed to analytics.js)
   Cookie banner removed. GA4 loads immediately to track 100% of traffic.
   Includes custom event tracking for WhatsApp, Tools, Scrolling, and Navigation.
   ========================================================================== */

(function () {
  const GA4_MEASUREMENT_ID = "G-KERK8GPCCX";

  function loadGA4() {
    if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID.includes("XXXXXXXXXX")) return;
    
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
    
    setupCustomTracking();
  }

  function setupCustomTracking() {
    // 1. Track WhatsApp Clicks
    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link && (link.href.includes("whatsapp.com") || link.href.includes("wa.me"))) {
        gtag("event", "whatsapp_click", {
          link_url: link.href
        });
      }
    });

    // 2. Track Tools & Calculators Usage
    document.addEventListener("submit", function (e) {
      if (window.location.pathname.includes("/tools/")) {
        gtag("event", "tool_usage", {
          tool_name: window.location.pathname.split("/").pop()
        });
      }
    });
    
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".wizard-btn, .btn, button");
      if (btn && window.location.pathname.includes("/tools/")) {
        gtag("event", "tool_interaction", {
          tool_name: window.location.pathname.split("/").pop(),
          button_text: btn.textContent.trim()
        });
      }
    });

    // 3. Track Next Page / Navigation (Internal Links)
    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link && link.href && link.hostname === window.location.hostname && !link.hash) {
        gtag("event", "next_page_click", {
          destination_url: link.pathname
        });
      }
    });

    // 4. Track Scroll Depth
    let scrollMarks = { 25: false, 50: false, 75: false, 90: false };
    window.addEventListener("scroll", function () {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      [25, 50, 75, 90].forEach(mark => {
        if (scrollPercent >= mark && !scrollMarks[mark]) {
          scrollMarks[mark] = true;
          gtag("event", "scroll_depth", {
            percent: mark
          });
        }
      });
    }, { passive: true });
  }

  // Load immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadGA4);
  } else {
    loadGA4();
  }
})();
