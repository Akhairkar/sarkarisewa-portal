/* ==========================================================================
   update-detail.js
   Fetches and renders a single government update based on URL ?id= param.
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
  document.getElementById("update-title").textContent = lang === "hi" ? "अपडेट नहीं मिला" : "Update Not Found";
  document.getElementById("update-summary").textContent = lang === "hi" ? "यह अपडेट मौजूद नहीं है या हटा दिया गया है।" : "This update does not exist or has been removed.";
  document.getElementById("update-content-body").innerHTML = `<a href="${ROOT}latest-updates.html" class="btn btn-secondary">← ${lang === "hi" ? "वापस जाएँ" : "Go Back"}</a>`;
  document.getElementById("update-meta").innerHTML = "";
  document.getElementById("official-link-btn").style.display = "none";
}

function renderUpdateDetail() {
  if (!UPDATE_DATA) return;
  const lang = getLang();

  const title = lang === "hi" ? UPDATE_DATA.title_hi : UPDATE_DATA.title_en;
  const summary = lang === "hi" ? UPDATE_DATA.summary_hi : UPDATE_DATA.summary_en;
  const content = lang === "hi" ? UPDATE_DATA.content_hi : UPDATE_DATA.content_en;

  // Format date
  const d = new Date(UPDATE_DATA.published_date);
  const dateStr = isNaN(d.getTime()) ? UPDATE_DATA.published_date : d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" });

  document.getElementById("update-breadcrumb-title").textContent = title;
  document.title = `${title} — SarkariSewa India`;

  document.getElementById("update-meta").innerHTML = `
    <strong>${UPDATE_DATA.source_name}</strong> • ${dateStr} • <span class="nav-badge">${UPDATE_DATA.category}</span>
  `;

  document.getElementById("update-title").textContent = title;
  document.getElementById("update-summary").textContent = summary;
  
  // Format content points
  const formattedContent = content.split('\n').filter(line => line.trim()).map(line => {
    // If it starts with *, -, or a number, format it nicely
    if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
      return `• ${line.replace(/^[\*\-\s]+/, '')}`;
    }
    return line;
  }).join('<br><br>');

  document.getElementById("update-content-body").innerHTML = formattedContent;

  const officialBtn = document.getElementById("official-link-btn");
  officialBtn.href = UPDATE_DATA.source_url;
  officialBtn.textContent = lang === "hi" ? "पूरा आधिकारिक अपडेट पढ़ें →" : "Read Full Official Update →";

  const shareBtn = document.getElementById("share-whatsapp-btn");
  if (shareBtn) {
    shareBtn.onclick = () => {
      const shareTitle = `*${title}*\n\n${summary}\n\n`;
      const shareUrl = window.location.href;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + shareUrl)}`, "_blank");
    };
  }
}

document.addEventListener("ss:ready", loadUpdateDetail);
onLangChange(() => {
  if (UPDATE_DATA) renderUpdateDetail();
});
