/* ==========================================================================
   update-detail.js
   Fetches and renders a single government update based on URL ?id= param.
   Includes advanced layout, FAQ accordion, official links, and related services.
   ========================================================================== */

let UPDATE_DATA = null;

async function loadUpdateDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const updateId = urlParams.get('id');

  if (!updateId) {
    showError();
    return;
  }

  try {
    const cacheBuster = new Date().getTime();
    // Fetch latest and pending updates just in case
    const [latestRes, pendingRes] = await Promise.all([
      fetch(ROOT + "data/latest-updates.json?v=" + cacheBuster),
      fetch(ROOT + "data/pending-updates.json?v=" + cacheBuster).catch(() => ({ json: () => [] }))
    ]);

    const latest = latestRes.ok ? await latestRes.json() : [];
    const pending = pendingRes.ok ? await pendingRes.json() : [];

    const allUpdates = [...latest, ...pending];
    UPDATE_DATA = allUpdates.find(u => u.id === updateId);

    if (!UPDATE_DATA) {
      showError();
    } else {
      renderUpdateDetail();
    }
  } catch (e) {
    console.error(e);
    showError();
  }
}

function showError() {
  const lang = getLang();
  document.getElementById("update-title").textContent = lang === "hi" ? "सूचना नहीं मिली" : "Update Not Found";
  document.getElementById("update-summary").textContent = lang === "hi" ? "यह सूचना मौजूद नहीं है या हटा दी गई है।" : "This update does not exist or has been removed.";
  document.getElementById("update-content-body").innerHTML = `<a href="${ROOT}latest-updates.html" class="btn btn-secondary">${lang === "hi" ? "← वापस जाएं" : "← Go Back"}</a>`;
  document.getElementById("update-meta").innerHTML = "";
  document.getElementById("official-link-btn").style.display = "none";
}

function renderUpdateDetail() {
  if (!UPDATE_DATA) return;
  const lang = getLang();

  const title = lang === "hi" ? (UPDATE_DATA.title_hi || UPDATE_DATA.title_en) : (UPDATE_DATA.title_en || UPDATE_DATA.title_hi);
  const summary = lang === "hi" ? (UPDATE_DATA.summary_hi || UPDATE_DATA.summary_en) : (UPDATE_DATA.summary_en || UPDATE_DATA.summary_hi);
  const content = lang === "hi" ? (UPDATE_DATA.content_hi || UPDATE_DATA.content_en) : (UPDATE_DATA.content_en || UPDATE_DATA.content_hi);
  const category = UPDATE_DATA.category || "General";
  
  // Format date
  const d = new Date(UPDATE_DATA.published_date);
  const dateStr = isNaN(d.getTime()) ? UPDATE_DATA.published_date : d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" });

  document.getElementById("update-breadcrumb-title").textContent = title.length > 40 ? title.substring(0, 40) + "..." : title;
  document.title = `${title} — SarkariSewa India`;

  document.getElementById("update-category-badge").textContent = `📢 ${category}`;
  
  document.getElementById("update-meta").innerHTML = `
    <span>🏛️ ${UPDATE_DATA.source_name}</span>
    <span>📅 ${dateStr}</span>
  `;

  document.getElementById("update-title").textContent = title;
  document.getElementById("update-summary").textContent = summary;
  
  // Format content points
  let formattedContent = content;
  if (formattedContent.includes("•")) {
      formattedContent = formattedContent.split("•").filter(line => line.trim()).map(line => `<li>${line.trim()}</li>`).join("");
      formattedContent = `<ul style="line-height:2; padding-left:20px;">${formattedContent}</ul>`;
  } else {
      formattedContent = formattedContent.split('\n').filter(line => line.trim()).map(line => {
        if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
          return `<li>${line.replace(/^[\*\-\s]+/, '')}</li>`;
        }
        return `<p>${line}</p>`;
      }).join('');
      if (formattedContent.includes("<li>")) {
          formattedContent = `<ul style="line-height:2; padding-left:20px;">${formattedContent}</ul>`;
      }
  }

  document.getElementById("update-content-body").innerHTML = formattedContent;

  const officialBtn = document.getElementById("official-link-btn");
  officialBtn.href = UPDATE_DATA.source_url;
  officialBtn.textContent = lang === "hi" ? "आधिकारिक अधिसूचना पढ़ें →" : "Read Official Notification →";

  const shareBtn = document.getElementById("share-whatsapp-btn");
  if (shareBtn) {
    shareBtn.onclick = () => {
      const shareTitle = `*${title}*\n\n${summary}\n\n`;
      const shareUrl = window.location.href;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + shareUrl)}`, "_blank");
    };
  }

  // Render FAQs if they exist
  if (UPDATE_DATA.faqs && UPDATE_DATA.faqs.length > 0) {
      document.getElementById("faq-section").hidden = false;
      const faqContainer = document.getElementById("faq-container");
      faqContainer.innerHTML = UPDATE_DATA.faqs.map(faq => {
          const q = lang === "hi" ? (faq.q_hi || faq.q_en) : (faq.q_en || faq.q_hi);
          const a = lang === "hi" ? (faq.a_hi || faq.a_en) : (faq.a_en || faq.a_hi);
          return `
            <div class="faq-item">
              <button onclick="this.parentElement.classList.toggle('open')">
                <span>${q}</span>
                <span class="faq-arrow">▼</span>
              </button>
              <div class="faq-answer">
                <p style="margin:16px 0;">${a}</p>
              </div>
            </div>
          `;
      }).join("");
  } else {
      document.getElementById("faq-section").hidden = true;
  }

  // Render Related Services
  if (window.SERVICES_DATA && window.CATEGORIES_DATA) {
      // Find category keywords
      const keywords = UPDATE_DATA.keywords || [];
      const query = `${category} ${keywords.join(" ")}`.toLowerCase();
      
      // Basic matching
      let matches = window.SERVICES_DATA.map(s => {
          const sTitle = (s.name.en + " " + s.name.hi).toLowerCase();
          const sCat = s.categories.join(" ").toLowerCase();
          let score = 0;
          if (sCat.includes(category.toLowerCase())) score += 2;
          keywords.forEach(kw => {
              if (sTitle.includes(kw.toLowerCase())) score += 1;
          });
          return { service: s, score: score };
      }).filter(m => m.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
      
      if (matches.length > 0) {
          document.getElementById("related-services-section").hidden = false;
          const grid = document.getElementById("related-services-grid");
          grid.innerHTML = matches.map(m => {
              const s = m.service;
              const sName = lang === "hi" ? s.name.hi : s.name.en;
              return `
                <a class="service-card" href="${ROOT}service/${s.slug}.html" style="text-decoration:none; display:block; padding:16px; border-radius:12px; background:var(--color-surface); border:1px solid var(--color-border); box-shadow:0 2px 4px rgba(0,0,0,0.05); color:var(--color-text);">
                  <div style="font-size:0.8rem; color:var(--color-text-light); margin-bottom:4px;">${s.state ? s.state : "Central"}</div>
                  <h4 style="margin:0; font-size:1.05rem;">${sName}</h4>
                </a>
              `;
          }).join("");
      } else {
          document.getElementById("related-services-section").hidden = true;
      }
  } else {
      // Fetch if not loaded
      if (typeof fetchAllServices === 'function') {
          fetchAllServices().then(data => {
              window.SERVICES_DATA = data;
              // Simple re-trigger
              renderUpdateDetail();
          }).catch(e => console.log("Could not load related services", e));
      }
  }
}

document.addEventListener("ss:ready", loadUpdateDetail);
onLangChange(() => {
  if (UPDATE_DATA) renderUpdateDetail();
});
