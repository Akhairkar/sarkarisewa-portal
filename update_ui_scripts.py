import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# 1. Update the buttons to include Claim
old_buttons = """          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--color-border);">
            ${contactDisplay}
            <a href="${mapUrl}" target="_blank" style="background: var(--color-primary); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Directions</a>
          </div>"""

new_buttons = """          <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--color-border); gap: 8px;">
            ${contactDisplay}
            <div style="display: flex; gap: 8px;">
              ${!center.is_verified && center.id ? `<a href="${ROOT}claim-your-csc.html?id=${center.id}" style="background: var(--color-surface); color: var(--color-primary); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--color-primary); text-decoration: none; font-size: 0.9rem; font-weight: 600;">Claim</a>` : ''}
              <a href="${mapUrl}" target="_blank" style="background: var(--color-primary); color: white; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Map</a>
            </div>
          </div>"""

js = js.replace(old_buttons, new_buttons)

# 2. Add search filter listener
# Right after setTimeout(loadAllData, 100);
search_listener = """
  // A small delay to ensure all dependent scripts (like supabase-client) are parsed
  setTimeout(loadAllData, 100);

  const searchInput = document.getElementById('csc-local-search');
  if (searchInput) {
      searchInput.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          if (!q) {
              renderCenters(cscData);
              return;
          }
          const filtered = cscData.filter(c => {
              const str = `${c.name || ''} ${c.address || ''} ${c.pincode || ''}`.toLowerCase();
              return str.includes(q);
          });
          renderCenters(filtered);
      });
  }
"""

js = js.replace("  // A small delay to ensure all dependent scripts (like supabase-client) are parsed\n  setTimeout(loadAllData, 100);", search_listener)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Updated csc-supabase-ui.js with local search filtering and Claim button!")
