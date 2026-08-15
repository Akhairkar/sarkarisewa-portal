/* ==========================================================================
   daily-updates.js
   Renders daily automated government updates on latest-updates.html with pagination
   ========================================================================== */

let DAILY_UPDATES_DATA = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 10;

async function loadDailyUpdates() {
  if (DAILY_UPDATES_DATA) return;
  try {
    const cacheBuster = new Date().getTime();
    const res = await fetch(ROOT + "data/latest-updates.json?v=" + cacheBuster);
    if (!res.ok) throw new Error("Not found");
    DAILY_UPDATES_DATA = await res.json();
  } catch (e) {
    DAILY_UPDATES_DATA = [];
  }
}

function renderDailyUpdates() {
  const host = document.getElementById("daily-updates-list");
  const paginationHost = document.getElementById("daily-updates-pagination");
  if (!host) return;

  const lang = getLang(); // From i18n-helper.js
  
  if (!DAILY_UPDATES_DATA || DAILY_UPDATES_DATA.length === 0) {
    host.innerHTML = `<p>${lang === "hi" ? "फिलहाल कोई नए अपडेट नहीं हैं।" : "No new updates available currently."}</p>`;
    if (paginationHost) paginationHost.innerHTML = "";
    return;
  }

  // Calculate pagination
  const totalPages = Math.ceil(DAILY_UPDATES_DATA.length / ITEMS_PER_PAGE);
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageData = DAILY_UPDATES_DATA.slice(startIndex, endIndex);

  host.innerHTML = pageData.map((update) => {
    const title = lang === "hi" ? update.title_hi : update.title_en;
    const summary = lang === "hi" ? update.summary_hi : update.summary_en;
    
    // Format date nicely
    const d = new Date(update.published_date);
    const dateStr = isNaN(d.getTime()) ? update.published_date : d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" });
    
    return `
      <article class="service-card" style="margin-bottom: 1.5rem;">
        <div style="font-size: 0.85rem; color: var(--color-text-light); margin-bottom: 0.5rem;">
          <strong>${update.source_name}</strong> • ${dateStr} • <span class="nav-badge">${update.category}</span>
        </div>
        <h3 style="margin-top:0;">${title}</h3>
        <p>${summary}</p>
        <div class="service-links" style="margin-top: 1rem;">
          <a href="${ROOT}update.html?id=${update.id}" class="official">
            ${lang === "hi" ? "पूरा पढ़ें →" : "Read Full →"}
          </a>
        </div>
      </article>
    `;
  }).join("");

  // Render Pagination Controls
  if (paginationHost) {
    let paginationHtml = `<div class="pagination" style="display:flex; gap:10px; justify-content:center; margin-top:20px;">`;
    
    if (currentPage > 1) {
      paginationHtml += `<button onclick="changePage(${currentPage - 1})" class="btn btn-secondary">${lang === "hi" ? "← पिछला" : "← Previous"}</button>`;
    }
    
    paginationHtml += `<span style="padding: 10px;">Page ${currentPage} of ${totalPages}</span>`;
    
    if (currentPage < totalPages) {
      paginationHtml += `<button onclick="changePage(${currentPage + 1})" class="btn btn-secondary">${lang === "hi" ? "अगला →" : "Next →"}</button>`;
    }
    
    paginationHtml += `</div>`;
    paginationHost.innerHTML = paginationHtml;
  }
}

window.changePage = function(newPage) {
  currentPage = newPage;
  renderDailyUpdates();
  // Scroll to top of the list
  const host = document.getElementById("daily-updates-list");
  if (host) host.scrollIntoView({ behavior: "smooth", block: "start" });
};

async function initDailyUpdates() {
  await loadDailyUpdates();
  renderDailyUpdates();
}

document.addEventListener("ss:ready", initDailyUpdates);
onLangChange(() => {
  if (DAILY_UPDATES_DATA) renderDailyUpdates();
});
