// csc-locator.js

document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('results-container');
  const resultsCount = document.getElementById('results-count');
  
  const stateSelect = document.getElementById('state-select');
  const districtSelect = document.getElementById('district-select');
  const pincodeInput = document.getElementById('pincode-input');
  const btnSearch = document.getElementById('btn-search-csc');
  
  const btnOpenModal = document.getElementById('btn-open-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modalOverlay = document.getElementById('operator-modal');

  let cscData = [];

  // Fetch JSON Data + Supabase Data
  async function loadAllData() {
    try {
      resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted); grid-column: 1 / -1;">Loading nearest centers...</div>';
      if(resultsCount) resultsCount.innerText = 'Loading...';
      
      // 1. Fetch static JSON
      const resJson = await fetch(`../data/csc-centers.json?v=${new Date().getTime()}`);
      let jsonData = await resJson.json();

      // 2. Fetch live approved from Supabase
      let supabaseData = [];
      if (typeof getSupabaseClient === "function") {
        const client = await getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("csc_centres")
            .select("*")
            .limit(1000); 
            
          if (!error && data) {
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
      resultsContainer.innerHTML = '<div style="color:red; padding: 20px; grid-column: 1 / -1;">Error loading centers. Please try again later.</div>';
    }
  }

  loadAllData();

  function getDirectionsUrl(address) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  }

  function renderCenters(centers) {
    if(resultsCount) resultsCount.innerText = centers.length;

    if (centers.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="font-size: 3rem; margin-bottom: 16px;">📍</div>
          <h3 style="margin-top:0; font-size: 1.5rem; color: var(--color-text);">No verified CSC found for this location.</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto;">
            We couldn't find any centers matching your search criteria. Try a different PIN code, or search by your broader District/State.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn--primary" onclick="document.getElementById('pincode-input').value=''; document.getElementById('pincode-input').focus();">Try Another PIN</button>
            <button class="btn btn--outline" onclick="document.getElementById('operator-modal').classList.add('active')">Claim Your CSC</button>
          </div>
        </div>
      `;
      return;
    }

    // Sort: Verified first
    centers.sort((a, b) => (a.is_verified === b.is_verified) ? 0 : a.is_verified ? -1 : 1);

    resultsContainer.innerHTML = '';
    
    centers.forEach(center => {
      const isVerifiedHtml = center.is_verified 
          ? `<span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; border: 1px solid #a7f3d0;">✓ Verified</span>` 
          : `<span style="background: #f3f4f6; color: #6b7280; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">Unclaimed</span>`;
      
      const servicesHtml = center.services.map(s => 
          `<span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">${s}</span>`
      ).join('');
      
      const addressString = `${center.address}, ${center.district}, ${center.state} - ${center.pincode}`;
      const mapUrl = getDirectionsUrl(addressString);
      
      // Future compatible pSEO URL
      let stateSlug = center.state.toLowerCase().replace(/ /g, '-');
      let districtSlug = center.district.toLowerCase().replace(/ /g, '-');
      let nameSlug = center.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const detailsUrl = `javascript:alert('Profile pages coming soon for ${center.name}!')`; // Mocked for now

      const card = document.createElement('div');
      card.style.cssText = `
        background: var(--color-surface); 
        border: 1px solid var(--color-border); 
        border-radius: 16px; 
        padding: 24px; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        display: flex;
        flex-direction: column;
        transition: transform 0.2s, box-shadow 0.2s;
      `;
      card.onmouseover = () => { card.style.transform = 'translateY(-2px)'; card.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.05)'; };
      card.onmouseout = () => { card.style.transform = 'none'; card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)'; };

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); line-height: 1.4;">
            ${center.name} ${isVerifiedHtml}
          </h3>
        </div>
        
        <div style="font-size: 0.95rem; color: var(--color-text); margin-bottom: 16px; display: flex; align-items: flex-start; gap: 8px;">
          <span style="font-size: 1.1rem; flex-shrink: 0;">📍</span>
          <span style="line-height: 1.5;">${addressString}</span>
        </div>
        
        <div style="margin-bottom: 20px;">
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Services</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${servicesHtml}
            <span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">+ More</span>
          </div>
        </div>
        
        <div style="margin-top: auto; border-top: 1px solid var(--color-border); padding-top: 16px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; font-size: 0.9rem;">
            <div>
              <div style="color: var(--color-text-muted); margin-bottom: 4px; font-size: 0.8rem;">Opening Hours</div>
              <div style="font-weight: 500;">🕒 ${center.timings}</div>
            </div>
            <div>
              <div style="color: var(--color-text-muted); margin-bottom: 4px; font-size: 0.8rem;">Contact</div>
              <div style="font-weight: 500;">📞 ${center.is_verified && center.contact && center.contact !== "N/A" ? `<a href="tel:${center.contact}" style="color: var(--color-primary); text-decoration: none;">${center.contact}</a>` : 'Hidden'}</div>
            </div>
          </div>
          
          <div style="display: flex; gap: 12px;">
            <a href="${detailsUrl}" class="btn btn--outline" style="flex: 1; text-align: center; padding: 8px; font-size: 0.9rem;">View Details</a>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="flex: 1; text-align: center; padding: 8px; font-size: 0.9rem;">Directions 🗺️</a>
          </div>
        </div>
      `;
      
      resultsContainer.appendChild(card);
    });

    if (window.applyLanguage && window.SITE && window.SITE.lang === 'hi') {
      window.applyLanguage('hi');
    }
  }

  function filterData() {
    const stateFilter = stateSelect ? stateSelect.value.toLowerCase() : "";
    const districtFilter = districtSelect ? districtSelect.value.toLowerCase() : "";
    const pincodeFilter = pincodeInput ? pincodeInput.value : "";

    const filtered = cscData.filter(center => {
      const matchState = !stateFilter || (center.state && center.state.toLowerCase() === stateFilter);
      
      let matchDist = true;
      if (districtFilter && districtFilter !== "other" && districtFilter !== "capital") {
          matchDist = center.district && center.district.toLowerCase().includes(districtFilter);
      }
      
      const matchPin = !pincodeFilter || (center.pincode && String(center.pincode).startsWith(pincodeFilter));
      
      return matchState && matchDist && matchPin;
    });

    renderCenters(filtered);
    
    // Scroll to results
    const resultsSection = document.getElementById('csc-results-section');
    if(resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Hook up search button
  if (btnSearch) {
      btnSearch.addEventListener('click', filterData);
  }
  
  // Also allow enter key on pincode
  if (pincodeInput) {
      pincodeInput.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
              filterData();
          }
      });
  }

  // Modal Logic
  if (btnOpenModal && modalOverlay) {
      btnOpenModal.addEventListener('click', () => {
        modalOverlay.classList.add('active');
      });
  }
  if (btnCloseModal && modalOverlay) {
      btnCloseModal.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
      });
  }
  if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
        }
      });
  }
  
  // Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });

});
