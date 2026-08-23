import os
import re

files = [f for f in os.listdir("service/jan-aushadhi") if f.endswith(".html")]

for file in files:
    filepath = os.path.join("service/jan-aushadhi", file)
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Update the Search UI
    # Replace the button with alert
    old_btn = '''<button class="btn btn-primary" onclick="alert('Full store database integration in progress. Please use the official Sugam App link below for now.')">Search Stores</button>'''
    new_btn = '''<button class="btn btn-primary" id="store-search-btn">Search</button>'''
    html = html.replace(old_btn, new_btn)

    # 2. Add the results container right after the search input div
    # Wait, it's safer to find the closing </div> of that flex container
    old_input_flex = '''id="store-search-input"'''
    if 'id="store-results"' not in html:
        # Find where to inject results container
        # We will inject it right above the <p>* Showing results...
        target_p = '<p style="margin-top: 15px; font-size: 0.9rem; color: var(--color-text-muted);">* Showing results'
        new_results = '<div id="store-results" style="margin-top: 15px;"></div>\n        '
        html = html.replace(target_p, new_results + target_p)

    # 3. Add the script tag near the bottom
    script_tag = '<script src="../../assets/js/jan-aushadhi-locator.js"></script>'
    if script_tag not in html:
        html = html.replace('</body>', f'  {script_tag}\n</body>')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

print("Locator UI and scripts injected into all 36 pages.")
