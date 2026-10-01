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
    // 1. Track outbound community/support links
    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link) {
        const href = link.href || "";
        const text = link.textContent.trim().slice(0, 80);
        if (href.includes("whatsapp.com") || href.includes("wa.me")) {
          gtag("event", "whatsapp_click", { link_url: href, link_text: text });
        }
        if (href.includes("t.me/") || href.includes("telegram.me/")) {
          gtag("event", "telegram_click", { link_url: href, link_text: text });
        }
      }
    });

    // 2. Track official/source outbound links
    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link && link.target === "_blank" && link.href && !link.href.includes(window.location.hostname)) {
        gtag("event", "official_link_click", {
          link_url: link.href,
          link_text: link.textContent.trim().slice(0, 100),
          page_path: window.location.pathname
        });
      }
    });

    // 3. Track Tools & Calculators Usage
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

    // 4. Track Next Page / Navigation (Internal Links)
    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link && link.href && link.hostname === window.location.hostname && !link.hash) {
        gtag("event", "next_page_click", {
          destination_url: link.pathname
        });
      }
    });

    // 5. Track Scroll Depth
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
