import re

filepath = "assets/js/csc-locator.js"
with open(filepath, "r", encoding="utf-8") as f:
    js_content = f.read()

new_logic = """
  // State elements
  const resultsContainer = document.getElementById('results-container');
  const resultsCount = document.getElementById('results-count');
  
  const stateSelect = document.getElementById('state-select');
  const districtSelect = document.getElementById('district-select');
  const pincodeInput = document.getElementById('pincode-input');
  const btnSearch = document.getElementById('btn-search-csc');
  
  // Default Render Function
  function getDirectionsUrl(lat, lng, address) {
      if(lat && lng) return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  }

  function renderCenters(centers) {
    if(resultsCount) resultsCount.innerText = centers.length;

    if (centers.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
          <h3 style="margin-top:0; font-size: 1.5rem; color: var(--color-text);">No verified CSC found for this location.</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto;">
            We couldn't find any centers matching your search criteria. Try a different PIN code, or search by your broader District/State.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button class="btn btn--primary" onclick="document.getElementById('pincode-input').value=''; document.getElementById('pincode-input').focus();">Try Another PIN</button>
            <a href="../claim-your-csc.html" class="btn btn--outline" style="text-decoration:none;">Claim Your CSC</a>
          </div>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = '';
    
    centers.forEach(center => {
      const isVerifiedHtml = center.is_claimed 
          ? `<span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; border: 1px solid #a7f3d0;">✓ Verified</span>` 
          : `<span style="background: #f3f4f6; color: #6b7280; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">Unclaimed</span>`;
      
      const servicesHtml = ['Aadhaar', 'PAN Card', 'Banking'].map(s => 
          `<span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">${s}</span>`
      ).join('');
      
      const addressString = `${center.address} - ${center.pincode}`;
      const mapUrl = getDirectionsUrl(center.latitude, center.longitude, addressString);
      
      // Future compatible pSEO URL
      let stateSlug = (center.state || '').toLowerCase().replace(/ /g, '-');
      let districtSlug = (center.district || '').toLowerCase().replace(/ /g, '-');
      let nameSlug = (center.vle_name || 'csc').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const detailsUrl = `../service/csc-locator/${stateSlug}/${districtSlug}.html`; 

      const card = document.createElement('div');
      card.style.cssText = `
        background: var(--color-surface); border: 1px solid var(--color-border); 
        border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s;
      `;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); line-height: 1.4;">
            ${center.vle_name || 'CSC Center'} ${isVerifiedHtml}
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
              <div style="font-weight: 500;">⏱ 9:00 AM - 6:00 PM</div>
            </div>
            <div>
              <div style="color: var(--color-text-muted); margin-bottom: 4px; font-size: 0.8rem;">Contact</div>
              <div style="font-weight: 500;">📞 Hidden</div>
            </div>
          </div>
          
          <div style="display: flex; gap: 12px;">
            <a href="${detailsUrl}" class="btn btn--outline" style="flex: 1; text-align: center; padding: 8px; font-size: 0.9rem;">View Local List</a>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="flex: 1; text-align: center; padding: 8px; font-size: 0.9rem;">Directions ↗</a>
          </div>
        </div>
      `;
      
      resultsContainer.appendChild(card);
    });
  }

  async function performServerSearch() {
    const stateFilter = stateSelect ? stateSelect.value : "";
    const districtFilter = districtSelect ? districtSelect.value : "";
    const pincodeFilter = pincodeInput ? pincodeInput.value.trim() : "";

    if (!stateFilter && !pincodeFilter) {
      alert("Please enter a Pincode or select a State to search 1.3 Million records.");
      return;
    }

    resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted); grid-column: 1 / -1;">Searching live across 1.3 Million Centers...</div>';
    if(resultsCount) resultsCount.innerText = 'Searching...';

    try {
      const client = await getSupabaseClient();
      if (!client) throw new Error("Database not connected");

      let query = client.from("csc_centers").select("*");

      if (pincodeFilter) {
        query = query.eq("pincode", pincodeFilter);
      } else {
        if (stateFilter) {
          query = query.ilike("state", `%${stateFilter}%`);
        }
        if (districtFilter && districtFilter !== "other" && districtFilter !== "capital") {
          query = query.ilike("district", `%${districtFilter}%`);
        }
      }

      // Limit to 50 so we don't crash
      query = query.limit(50);

      const { data, error } = await query;
      if (error) throw error;
      
      renderCenters(data || []);
      
      const resultsSection = document.getElementById('csc-results-section');
      if(resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });

    } catch(e) {
      console.error(e);
      resultsContainer.innerHTML = '<div style="color:red; padding: 20px; grid-column: 1 / -1;">Error fetching live data.</div>';
    }
  }

  if (btnSearch) {
      btnSearch.addEventListener('click', performServerSearch);
  }
"""

# Replace from `let cscData = [];` down to before `// Hook up Use My Location button`
start_marker = "  let cscData = [];"
end_marker = "  // Hook up Use My Location button"

if start_marker in js_content and end_marker in js_content:
    before = js_content.split(start_marker)[0]
    after = js_content.split(end_marker)[1]
    final_js = before + new_logic + "\n  // Hook up Use My Location button" + after
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(final_js)
    print("JS successfully updated to use server-side search!")
else:
    print("Failed to replace logic.")
