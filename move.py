import re

file_path = "service/jan-aushadhi-store-locator.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Extract the grid
pattern = r'(<!-- JAN AUSHADHI STATE HUB GRID -->.*?<!-- /JAN AUSHADHI STATE HUB GRID -->)'
match = re.search(pattern, html, flags=re.DOTALL)
if match:
    grid_html = match.group(1)
    # Remove it from old location
    html = html.replace(grid_html, '')
    
    # Insert it right after <div class="content-main prose">
    target = '<div class="content-main prose">'
    if target in html:
        # To not put it exactly at the very top before the intro paragraph, 
        # maybe put it after the first paragraph or after the first h2?
        # The user said "directory bohot niche aa rahi hai page pe usko upar lo"
        # Let's put it right after <div class="content-main prose">
        html = html.replace(target, target + '\n' + grid_html + '\n')
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html)
    print("Moved successfully.")
else:
    print("Grid not found.")
