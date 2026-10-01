import os
import glob
from pathlib import Path

ROOT = Path(r"C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production")

html_files = list(ROOT.rglob("*.html"))
print(f"Total HTML files found: {len(html_files)}")

issues = []

for p in html_files:
    rel = p.relative_to(ROOT)
    # ignore partials or node_modules if any
    if "partials" in rel.parts or ".git" in rel.parts:
        continue
    
    try:
        content = p.read_text(encoding="utf-8")
    except Exception as e:
        issues.append(f"{rel}: Could not read file: {e}")
        continue
    
    # Check 1: Does it include main.js?
    if "main.js" not in content:
        issues.append(f"{rel}: Missing main.js script tag")
        
    # Check 2: Does it include style.css?
    if "style.css" not in content:
        issues.append(f"{rel}: Missing style.css link tag")
        
    # Check 3: Does it include Noto Sans Devanagari font link?
    if "Noto+Sans+Devanagari" not in content and "Noto Sans Devanagari" not in content:
        issues.append(f"{rel}: Missing Noto Sans Devanagari Google Font link")
        
    # Check 4: Does it have #site-header?
    if 'id="site-header"' not in content:
        issues.append(f"{rel}: Missing #site-header placeholder/container")

    # Check 5: Does it have #theme-toggle when header is baked?
    if 'id="site-header"' in content and len(content) > 500:
        if 'id="theme-toggle"' not in content:
            issues.append(f"{rel}: Header baked but missing #theme-toggle")
        if 'id="lang-toggle"' not in content:
            issues.append(f"{rel}: Header baked but missing #lang-toggle")

print("\n--- AUDIT RESULTS ---")
print(f"Total issues found: {len(issues)}")
for iss in issues[:30]:
    print(" -", iss)
if len(issues) > 30:
    print(f"... and {len(issues) - 30} more issues.")
