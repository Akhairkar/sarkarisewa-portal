import os
import re

# Read the base locator for the exact header/footer
with open("service/jan-aushadhi-store-locator.html", "r", encoding="utf-8") as f:
    base_html = f.read()

# Split base html at <main> and </main>
match_main = re.search(r'(<main[^>]*>)', base_html)
match_end_main = re.search(r'(</main>)', base_html)

header_base = base_html[:match_main.start()] + '<main class="container">'
footer_base = base_html[match_end_main.end():]

# Adjust paths from ../ to ../../ for the deep subfolder
header_base = header_base.replace('href="../', 'href="../../')
header_base = header_base.replace('src="../', 'src="../../')
footer_base = footer_base.replace('href="../', 'href="../../')
footer_base = footer_base.replace('src="../', 'src="../../')

# Note: Some elements like favicon might be /assets/ or /img/. The base uses ../assets/
# Let's double check if there are any <link rel="icon" href="/img/..."
header_base = header_base.replace('href="/img/', 'href="../../img/')

files = [f for f in os.listdir("service/jan-aushadhi") if f.endswith(".html")]

for file in files:
    filepath = os.path.join("service/jan-aushadhi", file)
    with open(filepath, "r", encoding="utf-8") as f:
        state_html = f.read()
    
    # Extract the <main>...</main> from the generated state file
    s_main_start = state_html.find('<main')
    s_main_start = state_html.find('>', s_main_start) + 1
    s_main_end = state_html.find('</main>')
    
    state_main_content = state_html[s_main_start:s_main_end]
    
    # Extract the state specific title, meta description, and schema
    state_title_m = re.search(r'<title>(.*?)</title>', state_html)
    state_title = state_title_m.group(1) if state_title_m else ""
    
    state_desc_m = re.search(r'<meta name="description" content="(.*?)"', state_html)
    state_desc = state_desc_m.group(1) if state_desc_m else ""
    
    # Replace title and desc in the duplicated base header
    this_header = re.sub(r'<title>.*?</title>', f'<title>{state_title}</title>', header_base, flags=re.DOTALL)
    this_header = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{state_desc}"', this_header)
    this_header = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{state_title}"', this_header)
    this_header = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{state_desc}"', this_header)
    this_header = re.sub(r'<meta name="twitter:title" content=".*?"', f'<meta name="twitter:title" content="{state_title}"', this_header)
    this_header = re.sub(r'<meta name="twitter:description" content=".*?"', f'<meta name="twitter:description" content="{state_desc}"', this_header)
    
    # Update canonical URL
    this_header = re.sub(r'<link rel="canonical" href=".*?"', f'<link rel="canonical" href="https://sarkarisewaindia.com/service/jan-aushadhi/{file}"', this_header)
    
    # Update Schema JSON
    state_schema_m = re.search(r'<script type="application/ld\+json">.*?</script>', state_html, flags=re.DOTALL)
    if state_schema_m:
        state_schema = state_schema_m.group(0)
        # The base has id="service-schema"
        this_header = re.sub(r'<script type="application/ld\+json" id="service-schema">.*?</script>', state_schema, this_header, flags=re.DOTALL)

    # Assemble and save
    full_html = this_header + "\n" + state_main_content + "\n" + footer_base
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(full_html)

print(f"Fixed headers and footers for {len(files)} files.")
