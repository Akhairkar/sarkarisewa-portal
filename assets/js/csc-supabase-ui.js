document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('csc-results-container');
  if (!resultsContainer) return;

  // Supabase Credentials from user
  const SUPABASE_URL = 'https://yjxsgkqspmhxndvhnjcd.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_qO36wwZH7CKpPRUG0igVSQ_LyRTuE5P';
  
  // Initialize Supabase (assuming script tag is included in head)
  const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  // Figure out the location we need to query
  const rawLocation = resultsContainer.getAttribute('data-location') || '';
  const searchLocation = rawLocation.toUpperCase(); 

  // Function to render cards
  function renderCards(data) {
    if (!data || data.length === 0) {
      resultsContainer.innerHTML = '<p style="text-align: center; color: #64748b; padding: 20px;">No CSC centers found here yet. Data is still importing!</p>';
      return;
    }

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">';
    
    data.forEach(center => {
      // Logic for Claimed vs Unclaimed
      let badge = center.is_claimed 
        ? `<span style="background: #10b981; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; vertical-align: middle; margin-left: 10px;">✅ Verified</span>`
        : `<span style="background: #64748b; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; vertical-align: middle; margin-left: 10px;">Unclaimed</span>`;
      
      let phoneDisplay = center.is_claimed && center.phone_number
        ? `<a href="tel:${center.phone_number}" style="color: var(--color-primary); font-weight: bold; text-decoration: none;">${center.phone_number}</a>`
        : `<span style="color: #94a3b8; font-family: monospace;">+91 9** *** **22 🔒</span>`;
        
      let whatsappBtn = center.is_claimed && center.whatsapp_number
        ? `<a href="https://wa.me/91${center.whatsapp_number.replace(/\D/g,'')}" target="_blank" style="background: #25D366; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 5px;">💬 WhatsApp</a>`
        : `<button onclick="alert('Claim process: VLE enters CSC ID ${center.csc_id} -> OTP verification -> Admin approves -> WhatsApp unlocks!')" style="background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary); padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">Mera Center Hai? (Claim)</button>`;

      let mapsUrl = center.latitude && center.longitude
        ? `https://www.google.com/maps/dir/?api=1&destination=${center.latitude},${center.longitude}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address || center.district)}`;

      html += `
        <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <h4 style="margin: 0 0 10px 0; color: #1e293b; font-size: 1.05rem;">${center.vle_name || center.csc_id} ${badge}</h4>
          <p style="margin: 0 0 8px 0; font-size: 0.9rem; color: #64748b; min-height: 40px;">
            📍 ${center.address || 'Address not provided'}
          </p>
          <div style="border-top: 1px solid #f1f5f9; padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
              <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: #334155;">📞 ${phoneDisplay}</p>
              ${whatsappBtn}
            </div>
            <a href="${mapsUrl}" target="_blank" style="background: #3b82f6; color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem;">Directions</a>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
  }

  // Fetch data from Supabase
  async function loadData() {
    try {
      // Check if it's a district page or state page
      // For simplicity, we search both columns (district or state)
      const { data, error } = await supabaseClient
        .from('csc_centers')
        .select('*')
        .or(`district.ilike.%${searchLocation}%,state.ilike.%${searchLocation}%`)
        .limit(100);

      if (error) throw error;
      renderCards(data);
    } catch (err) {
      console.error("Supabase Error:", err);
      resultsContainer.innerHTML = `<p style="color: red; text-align: center;">Error connecting to database. Please check console.</p>`;
    }
  }

  // Handle manual search if on main locator page
  const searchBtn = document.getElementById('csc-search-btn');
  const districtSelect = document.getElementById('district-select');
  if (searchBtn && districtSelect) {
      searchBtn.addEventListener('click', async () => {
          const dist = districtSelect.value;
          if(!dist) return alert("Please select a district first");
          
          resultsContainer.innerHTML = '<p style="text-align: center; color: #64748b; padding: 20px;">Searching...</p>';
          const { data, error } = await supabaseClient
            .from('csc_centers')
            .select('*')
            .ilike('district', `%${dist}%`)
            .limit(100);
          
          if(error) {
              console.error(error);
              resultsContainer.innerHTML = '<p style="color:red; text-align:center;">Search failed.</p>';
          } else {
              renderCards(data);
          }
      });
  } else {
      // Auto load for city pages
      loadData();
  }
});
