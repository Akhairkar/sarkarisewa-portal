document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('store-search-input');
  const searchBtn = document.getElementById('store-search-btn');
  const resultsContainer = document.getElementById('store-results');

  // Identify the state from the body's data-slug (e.g. jan-aushadhi-maharashtra)
  const slug = document.body.getAttribute('data-slug');
  if (!slug || !slug.startsWith('jan-aushadhi-')) return;
  const stateSlug = slug.replace('jan-aushadhi-', '');

  let stores = [];

  // Define translation texts based on lang attribute
  const isHindi = document.documentElement.lang === 'hi';
  const text = {
    loading: isHindi ? "डेटा लोड हो रहा है..." : "Loading store data...",
    placeholder: isHindi ? "शहर, ज़िला या पिनकोड डालें..." : "Enter City, District or Pincode...",
    noResults: isHindi ? "कोई स्टोर नहीं मिला।" : "No stores found.",
    searchBtn: isHindi ? "खोजें" : "Search",
    directions: isHindi ? "मैप पर देखें" : "Get Directions",
    pin: isHindi ? "पिनकोड:" : "PIN:",
    phone: isHindi ? "फ़ोन:" : "Phone:",
    address: isHindi ? "पता:" : "Address:"
  };

  if(searchInput) searchInput.placeholder = text.placeholder;
  if(searchBtn) {
    searchBtn.textContent = text.searchBtn;
    searchBtn.onclick = handleSearch;
  }
  
  if (resultsContainer) {
    resultsContainer.innerHTML = `<p style="color: var(--color-text-muted); padding: 10px;">${text.loading}</p>`;
  }

  // Load the optimized JSON file for this state
  fetch(`../../data/jan-aushadhi/${stateSlug}.json`)
    .then(res => res.json())
    .then(data => {
      stores = data;
      if (resultsContainer) {
        resultsContainer.innerHTML = '';
        renderStores(stores.slice(0, 10)); // Initial 10 stores
      }
    })
    .catch(err => {
      console.error("Failed to load stores:", err);
      if (resultsContainer) resultsContainer.innerHTML = `<p style="color: red;">Error loading data.</p>`;
    });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearch();
    });
  }

  function handleSearch() {
    if (!searchInput || !resultsContainer) return;
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length === 0) {
      renderStores(stores.slice(0, 10));
      return;
    }

    const filtered = stores.filter(store => {
      return (store.d.toLowerCase().includes(query)) ||
             (store.pin.toString().includes(query)) ||
             (store.a.toLowerCase().includes(query));
    });

    renderStores(filtered.slice(0, 50)); // cap at 50 results to prevent lag
  }

  function renderStores(list) {
    if (list.length === 0) {
      resultsContainer.innerHTML = `<p style="color: var(--color-text-muted); padding: 10px;">${text.noResults}</p>`;
      return;
    }

    let html = '<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px; max-height: 400px; overflow-y: auto; padding-right: 5px;">';
    list.forEach(store => {
      let mapsUrl = store.lt && store.lg ? 
        `https://www.google.com/maps/dir/?api=1&destination=${store.lt},${store.lg}` : 
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.a + ' ' + store.d)}`;

      html += `
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; padding: 15px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
            <div>
              <h4 style="margin: 0 0 5px 0; color: var(--color-primary); font-size: 1.1rem;">PMBJP Kendra - ${store.d}</h4>
              <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.4;">
                <strong>${text.address}</strong> ${store.a}<br>
                <strong>${text.pin}</strong> ${store.pin}
                ${store.ph ? `<br><strong>${text.phone}</strong> ${store.ph}` : ''}
                ${store.p ? `<br><strong>Contact:</strong> ${store.p}` : ''}
              </p>
            </div>
            <a href="${mapsUrl}" target="_blank" style="background: #10b981; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: bold; white-space: nowrap; flex-shrink: 0;">
              📍 ${text.directions}
            </a>
          </div>
        </div>
      `;
    });
    html += '</div>';
    resultsContainer.innerHTML = html;
  }
});
