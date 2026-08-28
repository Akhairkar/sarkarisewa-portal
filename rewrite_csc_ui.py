import os

js_code = """document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('csc-results-container');
  if (!resultsContainer) return;

  const rawLocation = resultsContainer.getAttribute('data-location') || '';
  const searchLocation = rawLocation.toLowerCase(); 
  
  // Try to parse State from URL
  const pathParts = window.location.pathname.split('/');
  const cscIndex = pathParts.indexOf('csc-locator');
  let stateFromUrl = "";
  if (cscIndex !== -1 && pathParts.length > cscIndex + 1) {
      let statePart = pathParts[cscIndex + 1];
      statePart = statePart.replace('.html', '').replace(/-/g, ' ');
      stateFromUrl = statePart;
  }

  let cscData = []; // To cache initial local load
  const ROOT = typeof window.SS_ROOT === "string" ? window.SS_ROOT : "";

  function getDirectionsUrl(address) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  }

  function renderCenters(centers) {
    if (!centers || centers.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="font-size: 3rem; margin-bottom: 16px;">dY"?</div>
          <h3 style="margin-top:0; font-size: 1.5rem; color: var(--color-text);">No verified CSC found.</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto;">
            We could not find matching centers. If you own a center here, you can claim it for free!
          </p>
        </div>
      `;
      return;
    }

    // Sort: Verified first
    centers.sort((a, b) => (a.is_verified === b.is_verified) ? 0 : a.is_verified ? -1 : 1);

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">';
    
    centers.forEach(center => {
      const isVerifiedHtml = center.is_verified 
          ? `<span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; border: 1px solid #a7f3d0;">o" Verified</span>` 
          : `<span style="background: #f3f4f6; color: #6b7280; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">Unclaimed</span>`;
      
      const services = center.services || ["Aadhar Update", "PAN Card", "Income Certificate"];
      const servicesHtml = services.map(s => 
          `<span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">${s}</span>`
      ).join('');
      
      const addressString = `${center.address}, ${center.district}, ${center.state} - ${center.pincode}`;
      const mapUrl = getDirectionsUrl(addressString);
      
      const contactDisplay = center.is_verified && center.contact !== "N/A"
        ? `<a href="tel:${center.contact}" style="color: var(--color-primary); font-weight: bold; text-decoration: none;">dY"z ${center.contact}</a>`
        : `<span style="color: var(--color-text-muted);">dY"z +91 9** *** **22 dY"'</span>`;

      html += `
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); line-height: 1.4;">
              ${center.name} ${isVerifiedHtml}
            </h3>
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 16px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="font-size: 1.1rem; line-height: 1.2;">dY"?</span>
            <span>${center.address}</span>
          </div>
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
            ${servicesHtml}
          </div>
          
          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--color-border); gap: 8px;">
            ${contactDisplay}
            <div style="display: flex; gap: 8px;">
              ${!center.is_verified && center.id ? `<a href="${ROOT}claim-your-csc.html?id=${center.id}" style="background: var(--color-surface); color: var(--color-primary); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--color-primary); text-decoration: none; font-size: 0.9rem; font-weight: 600;">Claim</a>` : ''}
              <a href="${mapUrl}" target="_blank" style="background: var(--color-brand); color: white; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Map</a>
            </div>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
  }

  function mapSupabaseRow(row) {
      return {
          id: row.id,
          name: row.vle_name || row.name || row.center_name || "CSC Centre",
          state: row.state || "Unknown",
          district: row.district || "",
          pincode: row.pincode,
          address: row.address || `${row.vle_name || "CSC"}, ${row.pincode}`,
          contact: row.whatsapp_number || row.phone_number || row.owner_phone || row.phone || row.contact || "N/A",
          services: ["Aadhar Update", "PAN Card", "Income Certificate"],
          timings: "9:00 AM - 6:00 PM (Mon-Sat)",
          rating: 4.8,
          is_verified: row.is_claimed === true || row.status === 'verified' || row.is_verified === true
      };
  }

  async function loadAllData() {
    try {
      resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted);">Loading nearest centers...</div>';
      
      let supabaseData = [];
      if (typeof getSupabaseClient === "function") {
        const client = await getSupabaseClient();
        if (client) {
          let query = client.from("csc_centers").select("*");
          
          // Fix for "Nagpur in UP" issue: Filter strictly by State if we are on a state/district page!
          if (stateFromUrl) {
              query = query.ilike('state', `%${stateFromUrl}%`);
          }
          
          // If we have a specific search location (like district name)
          if (searchLocation && searchLocation !== stateFromUrl.toLowerCase()) {
              query = query.or(`district.ilike.%${searchLocation}%,address.ilike.%${searchLocation}%`);
          }
          
          const { data, error } = await query.limit(100);
            
          if (!error && data) {
            supabaseData = data.map(mapSupabaseRow);
          }
        }
      }

      cscData = supabaseData;
      renderCenters(cscData);
    } catch (error) {
      console.error('Error fetching CSC data:', error);
      resultsContainer.innerHTML = '<div style="color:red; padding: 20px;">Error loading centers. Please try again later.</div>';
    }
  }


  // A small delay to ensure all dependent scripts (like supabase-client) are parsed
  setTimeout(loadAllData, 100);

  // GLOBAL SEARCH IMPLEMENTATION
  const searchInput = document.getElementById('csc-local-search') || document.getElementById('csc-search-input');
  const searchBtn = document.getElementById('csc-search-btn');
  let debounceTimer;

  async function performGlobalSearch() {
      if (!searchInput) return;
      const q = searchInput.value.trim();
      
      if (!q) {
          // Revert to initial page load data
          renderCenters(cscData);
          return;
      }
      
      if (q.length < 3) {
          resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted);">Please type at least 3 characters to search the all-India database...</div>';
          return;
      }

      resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-primary); font-weight: 600;">dY"? Searching 5 Lakh+ entries across India...</div>';
      
      try {
          const client = await getSupabaseClient();
          if (!client) throw new Error("Supabase client not loaded");

          const { data, error } = await client
              .from("csc_centers")
              .select("*")
              .or(`pincode.ilike.%${q}%,vle_name.ilike.%${q}%,address.ilike.%${q}%,district.ilike.%${q}%`)
              .limit(100);
          
          if (error) throw error;
          const mapped = (data || []).map(mapSupabaseRow);
          renderCenters(mapped);
      } catch (err) {
          console.error("Global search failed:", err);
          resultsContainer.innerHTML = '<div style="color:red; text-align:center; padding: 20px;">Search failed. Please try again.</div>';
      }
  }

  if (searchInput) {
      searchInput.addEventListener('input', () => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(performGlobalSearch, 500);
      });
      // Allow pressing enter to search immediately
      searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
              clearTimeout(debounceTimer);
              performGlobalSearch();
          }
      });
      
      if (searchBtn) {
          searchBtn.addEventListener('click', () => {
              clearTimeout(debounceTimer);
              performGlobalSearch();
          });
      }
  }

});
"""

with open("assets/js/csc-supabase-ui.js", "w", encoding="utf-8") as f:
    f.write(js_code)
    
print("Rewrote csc-supabase-ui.js with state filter and global search capability.")
