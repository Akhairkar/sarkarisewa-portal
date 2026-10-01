# -*- coding: utf-8 -*-
import os, re, sys
sys.stdout.reconfigure(encoding='utf-8')

BLOG_DIR = "blog"
files = [f for f in os.listdir(BLOG_DIR) if f.endswith(".html")]

print(f"Inspecting {len(files)} blog files...")
fixed_count = 0
for f in files:
    if f in ("index.html", "post.html"):
        continue
    p = os.path.join(BLOG_DIR, f)
    with open(p, "r", encoding="utf-8") as fp:
        c = fp.read()
    
    # Extract og:title or title
    og_m = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\'](.*?)["\']', c, re.IGNORECASE)
    t_m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    
    current_title = t_m.group(1) if t_m else ""
    og_title = og_m.group(1) if og_m else ""
    
    clean_title = current_title
    if "..." in current_title or "â€¦" in current_title or "…" in current_title:
        # Use og_title if it doesn't have ellipsis, or clean up
        candidate = og_title if og_title and "..." not in og_title and "â€¦" not in og_title else current_title
        candidate = candidate.replace("...", "").replace("â€¦", "").replace("…", "").strip()
        clean_title = candidate

    # Ensure brand name is SarkariSewa India
    clean_title = clean_title.replace("सरकारीसेवा पोर्टल", "SarkariSewa India").replace("SarkariSewa Portal", "SarkariSewa India")
    if "SarkariSewa India" not in clean_title:
        clean_title = f"{clean_title} | SarkariSewa India"
        
    # Replace in file if changed
    new_c = c
    if t_m and t_m.group(1) != clean_title:
        new_c = re.sub(r'<title>.*?</title>', f'<title>{clean_title}</title>', new_c, count=1, flags=re.IGNORECASE)
    
    # Also clean og:title and twitter:title and schema
    new_c = new_c.replace("सरकारीसेवा पोर्टल", "SarkariSewa India").replace("SarkariSewa Portal", "SarkariSewa India")
    
    if new_c != c:
        with open(p, "w", encoding="utf-8") as fp:
            fp.write(new_c)
        fixed_count += 1
        print(f"Fixed {f} -> {clean_title}")

print(f"Total blog files fixed: {fixed_count}")
