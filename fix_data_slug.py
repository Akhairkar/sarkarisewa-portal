import os

files = [f for f in os.listdir("service/jan-aushadhi") if f.endswith(".html")]

for file in files:
    state_slug = file.replace('.html', '')
    filepath = os.path.join("service/jan-aushadhi", file)
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # The bug is that they all say <body data-slug="jan-aushadhi-store-locator">
    bad_string = '<body data-slug="jan-aushadhi-store-locator">'
    good_string = f'<body data-slug="jan-aushadhi-{state_slug}">'
    
    # Just in case some have something else
    if bad_string in html:
        html = html.replace(bad_string, good_string)
    else:
        # Fallback regex
        import re
        html = re.sub(r'<body data-slug="[^"]+">', good_string, html)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

print("Fixed data-slug in all 36 pages.")
