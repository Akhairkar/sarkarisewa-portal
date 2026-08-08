import os
import re
import json
from pathlib import Path
from collections import defaultdict
from xml.etree import ElementTree as ET

ROOT = Path(r"C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production")

html_files = [p for p in ROOT.rglob("*.html") if "partials" not in p.parts and ".git" not in p.parts]

print(f"==================================================")
print(f"SEMRUSH-STYLE SITE AUDIT — SarkariSewa Portal")
print(f"Total HTML files discovered: {len(html_files)}")
print(f"==================================================\n")

# Audit storage
titles = defaultdict(list)
descriptions = defaultdict(list)
broken_links = []
missing_titles = []
missing_descs = []
title_len_issues = []
desc_len_issues = []
missing_h1 = []
multiple_h1 = []
missing_alts = []
missing_canonicals = []
invalid_jsonld = []
all_internal_links = set()
pages_linked_to = set()

# Load sitemap.xml
sitemap_urls = set()
sitemap_path = ROOT / "sitemap.xml"
if sitemap_path.exists():
    try:
        tree = ET.parse(sitemap_path)
        for loc in tree.getroot().findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
            url_str = loc.text.strip().replace("https://sarkarisewaindia.com/", "")
            if not url_str:
                url_str = "index.html"
            sitemap_urls.add(url_str)
    except Exception as e:
        print(f"Warning: Failed to parse sitemap.xml: {e}")

# Process each HTML file
for p in html_files:
    rel_path = str(p.relative_to(ROOT)).replace("\\", "/")
    
    try:
        content = p.read_text(encoding="utf-8")
    except Exception as e:
        print(f"Error reading {rel_path}: {e}")
        continue

    # Title check
    title_match = re.search(r'<title\b[^>]*>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
    if not title_match or not title_match.group(1).trim():
        missing_titles.append(rel_path)
    else:
        t_text = title_match.group(1).strip()
        titles[t_text].append(rel_path)
        if len(t_text) > 60:
            title_len_issues.append((rel_path, f"Too long ({len(t_text)} chars): {t_text[:40]}..."))
        elif len(t_text) < 20:
            title_len_issues.append((rel_path, f"Too short ({len(t_text)} chars): {t_text}"))

    # Meta description check
    desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE | re.DOTALL)
    if not desc_match or not desc_match.group(1).strip():
        missing_descs.append(rel_path)
    else:
        d_text = desc_match.group(1).strip()
        descriptions[d_text].append(rel_path)
        if len(d_text) > 160:
            desc_len_issues.append((rel_path, f"Too long ({len(d_text)} chars)"))
        elif len(d_text) < 50:
            desc_len_issues.append((rel_path, f"Too short ({len(d_text)} chars)"))

    # Canonical check
    if 'rel="canonical"' not in content and "rel='canonical'" not in content:
        missing_canonicals.append(rel_path)

    # H1 check
    h1_matches = re.findall(r'<h1\b[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
    if not h1_matches:
        missing_h1.append(rel_path)
    elif len(h1_matches) > 1:
        multiple_h1.append((rel_path, len(h1_matches)))

    # Image ALT check
    img_tags = re.findall(r'<img\b[^>]*>', content, re.IGNORECASE)
    for img in img_tags:
        if 'alt=' not in img.lower():
            missing_alts.append(rel_path)
            break

    # JSON-LD check
    json_ld_matches = re.findall(r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>', content, re.IGNORECASE | re.DOTALL)
    for jm in json_ld_matches:
        try:
            json.loads(jm.strip())
        except Exception as err:
            invalid_jsonld.append((rel_path, str(err)))

    # Internal links check
    href_matches = re.findall(r'href=["\']([^"\']+)["\']', content, re.IGNORECASE)
    for href in href_matches:
        raw = href.split('#')[0].split('?')[0]
        if not raw or raw.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:')):
            continue
        
        # Calculate target file path relative to current HTML file
        parent_dir = p.parent
        target = (parent_dir / raw).resolve()
        
        try:
            target_rel = str(target.relative_to(ROOT)).replace("\\", "/")
            pages_linked_to.add(target_rel)
            if not target.exists():
                broken_links.append((rel_path, raw))
        except ValueError:
            pass

# Check for Duplicate Titles & Descriptions
duplicate_titles = {k: v for k, v in titles.items() if len(v) > 1}
duplicate_descs = {k: v for k, v in descriptions.items() if len(v) > 1}

# Check for Orphan Pages (pages not in sitemap or not linked internally)
orphan_pages = []
for p in html_files:
    rel_path = str(p.relative_to(ROOT)).replace("\\", "/")
    if rel_path != "index.html" and rel_path not in pages_linked_to and rel_path not in sitemap_urls:
        orphan_pages.append(rel_path)

# SUMMARY REPORT
report_lines = []
report_lines.append("# SEMrush Technical Site Audit Report — SarkariSewa Portal")
report_lines.append(f"**Total Pages Analyzed:** {len(html_files)}\n")

report_lines.append("## 🔴 Critical Errors")
report_lines.append(f"- **Broken Internal Links:** {len(broken_links)}")
report_lines.append(f"- **Missing `<title>` Tags:** {len(missing_titles)}")
report_lines.append(f"- **Missing Meta Descriptions:** {len(missing_descs)}")
report_lines.append(f"- **Invalid JSON-LD Schemas:** {len(invalid_jsonld)}")
report_lines.append(f"- **Missing `<h1>` Headings:** {len(missing_h1)}")

report_lines.append("\n## 🟡 Warnings")
report_lines.append(f"- **Duplicate Title Tags:** {len(duplicate_titles)} unique titles duplicated across pages")
report_lines.append(f"- **Duplicate Meta Descriptions:** {len(duplicate_descs)} unique descs duplicated across pages")
report_lines.append(f"- **Title Length Issues (<20 or >60 chars):** {len(title_len_issues)}")
report_lines.append(f"- **Meta Description Length Issues (<50 or >160 chars):** {len(desc_len_issues)}")
report_lines.append(f"- **Multiple `<h1>` Tags:** {len(multiple_h1)}")
report_lines.append(f"- **Images Missing `alt` Attributes:** {len(missing_alts)}")
report_lines.append(f"- **Missing `<link rel=\"canonical\">`:** {len(missing_canonicals)}")
report_lines.append(f"- **Potential Orphan Pages:** {len(orphan_pages)}")

# Print Breakdown
if broken_links:
    report_lines.append("\n### 🔗 Broken Links Sample (Top 10)")
    for src, target in broken_links[:10]:
        report_lines.append(f"- `{src}` -> `{target}`")

if invalid_jsonld:
    report_lines.append("\n### ⚠️ Invalid JSON-LD Sample")
    for src, err in invalid_jsonld[:10]:
        report_lines.append(f"- `{src}`: {err}")

if missing_h1:
    report_lines.append("\n### 📝 Missing `<h1>` Sample")
    for src in missing_h1[:10]:
        report_lines.append(f"- `{src}`")

report_content = "\n".join(report_lines)
print(report_content)

# Write audit results to file
with open(ROOT / "tools" / "semrush_audit_results.md", "w", encoding="utf-8") as f:
    f.write(report_content)

print(f"\nAudit complete! Full report saved to tools/semrush_audit_results.md")
