document.addEventListener('DOMContentLoaded', () => {
  const resultsContainer = document.getElementById('csc-results-container');
  const searchBtn = document.getElementById('csc-search-btn');
  const gpsBtn = document.getElementById('csc-gps-btn');
  
  if (!resultsContainer) return;

  // Supabase Initialization will go here once backend is ready
  // const supabase = supabase.createClient('URL', 'KEY');

  // Dummy Data for Demo (To show UI capabilities)
  const dummyData = [
    {
      id: "CSC101",
      name: "Ramesh E-Seva Kendra",
      address: "Main Market Road, Near Gram Panchayat",
      is_claimed: true,
      phone: "+91 9822105432"
    },
    {
      id: "CSC102",
      name: "Digital India Center (VLE: Suresh)",
      address: "Shop No 4, Shivaji Chowk",
      is_claimed: false,
      phone: "+91 9422001122"
    },
    {
      id: "CSC103",
      name: "Pooja Maha e-Seva",
      address: "Ward No 3, Station Road",
      is_claimed: false,
      phone: "+91 8800119933"
    }
  ];

  function renderCards(data) {
    let html = '<div style="display: flex; flex-direction: column; gap: 15px;">';
    
    data.forEach(center => {
      // Logic for Claimed vs Unclaimed
      let badge = center.is_claimed 
        ? `<span style="background: #10b981; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; vertical-align: middle; margin-left: 10px;">✅ Verified</span>`
        : `<span style="background: #64748b; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; vertical-align: middle; margin-left: 10px;">Unclaimed</span>`;
      
      let phoneDisplay = center.is_claimed 
        ? `<a href="tel:${center.phone}" style="color: var(--color-primary); font-weight: bold; text-decoration: none;">${center.phone}</a>`
        : `<span style="color: var(--color-text-muted); font-family: monospace;">+91 9** *** **22 🔒</span>`;
        
      let claimCta = center.is_claimed
        ? ``
        : `<button onclick="alert('Claim process will connect to Supabase backend!\\n\\n1. VLE Enters CSC ID.\\n2. Gets OTP.\\n3. Claim goes to Admin Panel.')" style="margin-top: 10px; background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary); padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">Mera Center Hai? (Claim)</button>`;

      html += `
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; padding: 15px; position: relative;">
          <h4 style="margin: 0 0 10px 0; color: var(--color-text); font-size: 1.15rem;">${center.name} ${badge}</h4>
          <p style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--color-text-muted);">
            📍 ${center.address}
          </p>
          <div style="display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
              <p style="margin: 0; font-size: 0.95rem; color: var(--color-text);">📞 Phone: ${phoneDisplay}</p>
              ${claimCta}
            </div>
            <a href="#" style="background: var(--color-primary); color: white; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem;">Directions</a>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
  }

  // Initial Render (Mock)
  setTimeout(() => {
    renderCards(dummyData);
  }, 800); // simulate network delay
});
