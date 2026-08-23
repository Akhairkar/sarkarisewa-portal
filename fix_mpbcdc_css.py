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
            
        # Add module2.css if not present
        if "module2.css" not in content:
            # Find the style.css link and insert module2.css after it
            content = re.sub(
                r'(<link[^>]*href="assets/css/style\.css[^>]*rel="stylesheet"[^>]*/>)',
                r'\1\n  <link href="assets/css/module2.css?v=2.0" rel="stylesheet"/>',
                content
            )
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Fixed CSS in {filepath}")
        else:
            print(f"CSS already correct in {filepath}")

