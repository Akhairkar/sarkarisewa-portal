import os
import re

files = [
    "mpbcdc-direct-loan-yojana.html",
    "mpbcdc-seed-capital-yojana.html",
    "mpbcdc-subsidy-yojana.html",
    "mpbcdc-yojana.html"
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Add module18 and module9 if not present
        if "module18.css" not in content:
            content = re.sub(
                r'(<link[^>]*href="assets/css/style\.css[^>]*rel="stylesheet"[^>]*/>)',
                r'\1\n  <link href="assets/css/module9.css" rel="stylesheet"/>\n  <link href="assets/css/module16.css" rel="stylesheet"/>\n  <link href="assets/css/module18.css" rel="stylesheet"/>',
                content
            )
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Added Megamenu CSS to {filepath}")
