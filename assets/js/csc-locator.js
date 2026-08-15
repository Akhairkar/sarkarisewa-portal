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

  // Fetch JSON Data
  fetch('../data/csc-centers.json')
    .then(response => response.json())
    .then(data => {
      cscData = data;
      renderCenters(cscData);
    })
    .catch(error => {
      console.error('Error fetching CSC data:', error);
      resultsContainer.innerHTML = '<div style="color:red; padding: 20px;">Error loading centers. Please try again later.</div>';
    });

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
  
  operatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Application submitted successfully! Our admin team will verify your details and contact you shortly.');
    modalOverlay.classList.remove('active');
    operatorForm.reset();
  });

});
