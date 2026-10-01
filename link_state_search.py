import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# Replace the simple local search listener with a more robust one that handles BOTH inputs
old_listener = """  const searchInput = document.getElementById('csc-local-search');
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
  }"""

new_listener = """  const searchInput = document.getElementById('csc-local-search') || document.getElementById('csc-search-input');
  const searchBtn = document.getElementById('csc-search-btn');

  function applyLocalFilter() {
      if (!searchInput) return;
      const q = searchInput.value.toLowerCase().trim();
      if (!q) {
          renderCenters(cscData);
          return;
      }
      const filtered = cscData.filter(c => {
          const str = `${c.name || ''} ${c.address || ''} ${c.pincode || ''} ${c.district || ''}`.toLowerCase();
          return str.includes(q);
      });
      renderCenters(filtered);
  }

  if (searchInput) {
      searchInput.addEventListener('input', applyLocalFilter);
      if (searchBtn) {
          searchBtn.addEventListener('click', applyLocalFilter);
      }
  }"""

js = js.replace(old_listener, new_listener)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Updated csc-supabase-ui.js to handle state page search inputs!")
