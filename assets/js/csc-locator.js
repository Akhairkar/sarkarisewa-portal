// csc-locator.js

document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('results-container');
  const stateSelect = document.getElementById('state-select');
  const districtInput = document.getElementById('district-select');
  const pincodeInput = document.getElementById('pincode-input');
  
  const btnOpenModal = document.getElementById('btn-open-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modalOverlay = document.getElementById('operator-modal');
  const operatorForm = document.getElementById('operator-form');

  let cscData = [];

  // Fetch JSON Data + Supabase Data
  async function loadAllData() {
    try {
      resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted);">Loading nearest centers...</div>';
      
      // 1. Fetch static JSON
      const resJson = await fetch(`../data/csc-centers.json?v=${new Date().getTime()}`);
      let jsonData = await resJson.json();

      // 2. Fetch live approved from Supabase (if loaded)
      let supabaseData = [];
      if (typeof getSupabaseClient === "function") {
        const client = await getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("csc_centres")
            .select("*")
            .limit(1000); // Fetch up to 1000 records to show the uploaded ones
            
          if (!error && data) {
            // Map Supabase schema to match JSON schema
            supabaseData = data.map(row => ({
              id: row.id,
              name: row.name || row.center_name || "CSC Centre",
              state: row.state || "Unknown",
              district: row.district || "Unknown",
              pincode: row.pincode,
              address: row.address || `${row.name || row.center_name}, ${row.pincode}`,
              contact: row.owner_phone || row.phone || row.contact || "N/A",
              services: ["Aadhar Update", "PAN Card", "Income Certificate"],
              timings: "9:00 AM - 6:00 PM (Mon-Sat)",
              rating: 4.8,
              is_verified: row.status === 'verified' || row.is_verified === true
            }));
          }
        }
      }

      cscData = [...supabaseData, ...jsonData];
      renderCenters(cscData);
    } catch (error) {
      console.error('Error fetching CSC data:', error);
      resultsContainer.innerHTML = '<div style="color:red; padding: 20px;">Error loading centers. Please try again later.</div>';
    }
  }

  loadAllData();

  function renderCenters(centers) {
    if (centers.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align:center; padding: 40px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px;">
          <h3 style="margin-top:0;">No centers found matching your criteria.</h3>
          <p style="color: var(--color-text-muted);">Try searching with a different pincode or district.</p>
        </div>
      `;
      return;
    }

    // Sort: Verified first
    centers.sort((a, b) => (a.is_verified === b.is_verified) ? 0 : a.is_verified ? -1 : 1);

    resultsContainer.innerHTML = '';
    
    centers.forEach(center => {
      const isVerifiedHtml = center.is_verified ? `<span class="badge-verified">✓ Verified</span>` : '';
      const verifiedClass = center.is_verified ? 'verified' : '';
      
      const servicesHtml = center.services.map(s => `<span class="service-tag">${s}</span>`).join('');
      
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name + ', ' + center.address)}`;

      const card = document.createElement('div');
      card.className = `center-card ${verifiedClass}`;
      card.innerHTML = `
        <div class="center-header">
          <div>
            <h3 class="center-title">${center.name} ${isVerifiedHtml}</h3>
            <div style="font-size: 0.85rem; color: #f59e0b; font-weight: 700; margin-top: 4px;">⭐ ${center.rating} / 5.0</div>
          </div>
        </div>
        
        <div class="center-address">
          📍 ${center.address}
        </div>
        
        <div style="margin-bottom: 12px;">
          <strong>Services Available:</strong>
        </div>
        <div class="services-tags">
          ${servicesHtml}
        </div>
        
        <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 16px;">
          🕒 ${center.timings} <br>
          📞 Contact: ${center.is_verified ? `<a href="tel:${center.contact}" style="font-weight:600;">${center.contact}</a>` : 'Hidden (Not Verified)'}
        </div>

        <div class="center-actions">
          <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-map" style="padding: 6px 12px; font-size: 0.85rem;">🗺️ View on Google Maps</a>
        </div>
      `;
      
      resultsContainer.appendChild(card);
    });

    if (window.applyLanguage && window.SITE && window.SITE.lang === 'hi') {
      window.applyLanguage('hi');
    }
  }

  function filterData() {
    const stateFilter = stateSelect.value.toLowerCase();
    const districtFilter = districtInput.value.toLowerCase();
    const pincodeFilter = pincodeInput.value;

    const filtered = cscData.filter(center => {
      const matchState = !stateFilter || center.state.toLowerCase() === stateFilter;
      const matchDist = !districtFilter || center.district.toLowerCase().includes(districtFilter);
      const matchPin = !pincodeFilter || center.pincode.startsWith(pincodeFilter);
      return matchState && matchDist && matchPin;
    });

    renderCenters(filtered);
  }

  // Event Listeners for Filters
  stateSelect.addEventListener('change', filterData);
  districtInput.addEventListener('input', filterData);
  pincodeInput.addEventListener('input', filterData);

  // Modal Logic
  btnOpenModal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });
  
  btnCloseModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
  
  // Operator Form submission handled by csc-submit.js now

});
