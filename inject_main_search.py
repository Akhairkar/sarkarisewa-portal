import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Fix breadcrumb schema corruption
content = re.sub(r'"name": " ,\?  _ ,\? \? _"', '"name": "Health"', content)

# Also fix Breadcrumb HTML corruption if any
content = re.sub(r'<span data-lang-show="hi"> ,\?  _ ,\? \? _</span>', '<span data-lang-show="hi">स्वास्थ्य</span>', content)

# Inject Search UI before the states grid
search_ui = """
    <!-- NATIONWIDE SEARCH -->
    <section class="service-section" style="margin-bottom: 40px; padding-top: 20px;">
      <div style="background: var(--color-surface); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border); margin-bottom: 25px;">
        <label style="font-weight: bold; margin-bottom: 10px; display: block; color: var(--color-text);"><span data-lang-show="en">Live Search: Enter City or Pincode (All India)</span><span data-lang-show="hi">लाइव खोजें: अपना शहर या पिनकोड डालें (अखिल भारतीय)</span></label>
        <div style="display: flex; gap: 10px;">
          <input type="text" id="store-search-input" placeholder="e.g. 400001 or City Name" style="flex: 1; padding: 10px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--color-surface); color: var(--color-text);" />
          <button class="btn btn-primary" id="store-search-btn">Search</button>
        </div>
        <div id="store-results" style="margin-top: 15px;"></div>
      </div>
    </section>
"""

# Insert before the state grid
if '<!-- JAN AUSHADHI STATE HUB GRID -->' in content and 'store-search-btn' not in content:
    content = content.replace('<!-- JAN AUSHADHI STATE HUB GRID -->', search_ui + '\n    <!-- JAN AUSHADHI STATE HUB GRID -->')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Injected search UI to main locator page.")
