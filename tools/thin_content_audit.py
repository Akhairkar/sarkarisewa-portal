import os
import re
from pathlib import Path

ROOT = Path(r"C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production")

html_files = [p for p in ROOT.rglob("*.html") if "partials" not in p.parts and ".git" not in p.parts]

print(f"==================================================")
print(f"GOOGLE HELPFUL CONTENT / THIN CONTENT AUDIT")
print(f"Total HTML files analyzed: {len(html_files)}")
print(f"==================================================\n")

thin_pages = []
substantial_pages = []
word_counts = []

for p in html_files:
    rel_path = str(p.relative_to(ROOT)).replace("\\", "/")
    
    # skip admin pages or verification snippets
    if rel_path.startswith("admin/") or "google" in rel_path:
        continue
        
    content = p.read_text(encoding="utf-8")
    
    # Remove script, style, header, footer tags to measure true content text
    clean_html = re.sub(r'<script\b[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<style\b[^>]*>.*?</style>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<header\b[^>]*>.*?</header>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<footer\b[^>]*>.*?</footer>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    
    # Extract inner text
    text_content = re.sub(r'<[^>]+>', ' ', clean_html)
    words = text_content.split()
    w_count = len(words)
    word_counts.append(w_count)
    
    if w_count < 400:
        thin_pages.append((rel_path, w_count))
    else:
        substantial_pages.append((rel_path, w_count))

thin_pages.sort(key=lambda x: x[1])

print(f"--- THIN CONTENT AUDIT SUMMARY ---")
print(f"Total Main Pages Checked: {len(word_counts)}")
print(f"Substantial Content Pages (400+ words): {len(substantial_pages)}")
print(f"Thin Content Risk Pages (< 400 words): {len(thin_pages)}")
print(f"Average Word Count Per Page: {sum(word_counts) // max(len(word_counts), 1)} words\n")

if thin_pages:
    print(f"Top Thin Content Pages to Enhance:")
    for path, count in thin_pages[:20]:
        print(f"  - {path}: {count} words")
