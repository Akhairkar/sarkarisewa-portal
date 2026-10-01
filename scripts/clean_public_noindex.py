import os
import re

for f in ['404.html', 'search.html', 'service/service.html']:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        # remove any meta tag containing noindex
        lines = c.splitlines()
        new_lines = [l for l in lines if not ('name="robots"' in l and 'noindex' in l) and not ('content="noindex' in l)]
        new_c = '\n'.join(new_lines)
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_c)
        print(f"Cleaned noindex from {f}")
