document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('csc-results-container');
  if (!resultsContainer) return;

  const rawLocation = resultsContainer.getAttribute('data-location') || '';
  const searchLocation = rawLocation.toLowerCase(); 

  let cscData = [];
  const ROOT = typeof window.SS_ROOT === "string" ? window.SS_ROOT : "";

  function getDirectionsUrl(address) {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  }

  function renderCenters(centers) {
    if (centers.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="font-size: 3rem; margin-bottom: 16px;">📍</div>
          <h3 style="margin-top:0; font-size: 1.5rem; color: var(--color-text);">No verified CSC found in ${rawLocation}.</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 24px; max-width: 500px; margin-left: auto; margin-right: auto;">
            We are continuously verifying centers. If you own a center here, you can claim it for free!
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
          ? `<span style="background: #ecfdf5; color: #059669; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; margin-left: 8px; border: 1px solid #a7f3d0;">✓ Verified</span>` 
          : `<span style="background: #f3f4f6; color: #6b7280; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">Unclaimed</span>`;
      
      const services = center.services || ["Aadhar Update", "PAN Card", "Income Certificate"];
      const servicesHtml = services.map(s => 
          `<span style="background: var(--color-bg); border: 1px solid var(--color-border); padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; color: var(--color-text); white-space: nowrap;">${s}</span>`
      ).join('');
      
      const addressString = `${center.address}, ${center.district}, ${center.state} - ${center.pincode}`;
      const mapUrl = getDirectionsUrl(addressString);
      
      const contactDisplay = center.is_verified && center.contact !== "N/A"
        ? `<a href="tel:${center.contact}" style="color: var(--color-primary); font-weight: bold; text-decoration: none;">📞 ${center.contact}</a>`
        : `<span style="color: var(--color-text-muted);">📞 +91 9** *** **22 🔒</span>`;

      html += `
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <h3 style="margin: 0; font-size: 1.25rem; color: var(--color-primary); line-height: 1.4;">
              ${center.name} ${isVerifiedHtml}
            </h3>
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 16px; display: flex; align-items: flex-start; gap: 8px;">
            <span style="font-size: 1.1rem; line-height: 1.2;">📍</span>
            <span>${center.address}</span>
          </div>
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
            ${servicesHtml}
          </div>
          
          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--color-border);">
            ${contactDisplay}
            <a href="${mapUrl}" target="_blank" style="background: var(--color-primary); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Directions</a>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
  }

  async function loadAllData() {
    try {
      resultsContainer.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--color-text-muted);">Loading nearest centers...</div>';
      
      // 1. Fetch static JSON
      let jsonData = [];
      try {
          const resJson = await fetch(ROOT + `data/csc-centers.json?v=${new Date().getTime()}`);
          const allJson = await resJson.json();
          // Filter JSON by location
          jsonData = allJson.filter(c => 
              (c.district && c.district.toLowerCase().includes(searchLocation)) || 
              (c.city && c.city.toLowerCase().includes(searchLocation))
          );
      } catch(e) {
          console.warn("Could not fetch csc-centers.json");
      }

      // 2. Fetch live approved from Supabase
      let supabaseData = [];
      if (typeof getSupabaseClient === "function") {
        const client = await getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("csc_centres") // Note: using csc_centres as per main locator.js
            .select("*")
            .or(`district.ilike.%${searchLocation}%,address.ilike.%${searchLocation}%`)
            .limit(100); 
            
          if (!error && data) {
            supabaseData = data.map(row => ({
              id: row.id,
              name: row.name || row.center_name || "CSC Centre",
              state: row.state || "Unknown",
              district: row.district || searchLocation,
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

  // A small delay to ensure all dependent scripts (like supabase-client) are parsed
  setTimeout(loadAllData, 100);
});
