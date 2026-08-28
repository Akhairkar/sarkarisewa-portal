import glob

files = glob.glob("service/csc-locator/**/*.html", recursive=True)

search_html = """
        <div class="csc-local-search-wrapper" style="margin-bottom: 24px; max-width: 600px; display: flex; gap: 8px;">
            <input type="text" id="csc-local-search" placeholder="Filter by Pincode, Name, or Address..." style="flex: 1; padding: 12px 16px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 1rem; background: var(--color-surface); color: var(--color-text); box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
            <button onclick="document.getElementById('csc-local-search').value=''; document.getElementById('csc-local-search').dispatchEvent(new Event('input'));" style="padding: 12px 16px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-bg-alt); color: var(--color-text); cursor: pointer;">Clear</button>
        </div>
"""

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()
        
    if 'id="csc-local-search"' not in html:
        # Inject right before csc-results-container
        html = html.replace('<div id="csc-results-container"', search_html + '\n        <div id="csc-results-container"')
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
            
print(f"Injected local search into {len(files)} CSC html files.")
