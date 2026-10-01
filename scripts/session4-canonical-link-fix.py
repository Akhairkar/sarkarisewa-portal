#!/usr/bin/env python3
"""Session 4 — canonical and internal-link repair.

Idempotent repo-wide repair for the defects identified in the Session 4 audit:
- removes/repairs canonical URLs that point at missing local HTML files;
- fixes the known legacy service slugs;
- fixes the states/ relative-link depth issue;
- fixes the known updates/ -> states/ path issue.

The script never invents a missing service page. It only redirects a reference to
an existing local page when the mapping is unambiguous. Run from repo root:
    python3 scripts/session4-canonical-link-fix.py
"""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://sarkarisewaindia.com"

# Verified current service filenames in data/services.json / service/.
LEGACY_LINKS = {
    "ayushman-bharat-card.html": "ayushman-bharat.html",
    "driving-license.html": "driving-licence.html",
}

def html_files():
    return sorted(ROOT.rglob("*.html"))

def local_target_from_canonical(value):
    if not value.startswith(BASE + "/"):
        return None
    rel = value[len(BASE) + 1:].split("#", 1)[0].split("?", 1)[0]
    if not rel or rel.startswith(("http:", "https:")):
        return None
    candidate = ROOT / rel
    return candidate if candidate.suffix == ".html" else None

def repair_canonical(text, path):
    m = re.search(r'(<link\\s+[^>]*rel=["\\\']canonical["\\\'][^>]*href=["\\\'])([^"\\\']+)(["\\\'])', text, re.I)
    if not m:
        return text, False
    target = local_target_from_canonical(m.group(2))
    if target is None or target.exists():
        return text, False

    # If a state page canonicals to a missing service page, prefer its own URL.
    rel = path.relative_to(ROOT).as_posix()
    own_url = f"{BASE}/{rel}"
    new = m.group(1) + own_url + m.group(3)
    return text[:m.start()] + new + text[m.end():], True

def repair_links(text, path):
    original = text

    # State service pages are one level below /states/, so ../service and
    # ../tools are the correct depth; ../../ was a legacy generator defect.
    if path.parent.name == "states":
        text = text.replace("../../tools/", "../tools/")
        text = text.replace("../../service/", "../service/")

    # Updates pages are one level below /updates/; root-relative is safest and
    # remains correct regardless of nesting.
    if path.parent.name == "updates":
        text = re.sub(r'href=["\\\']states/states/index\\.html["\\\']',
                      'href="/states/index.html"', text)
        text = re.sub(r'href=["\\\']states/index\\.html["\\\']',
                      'href="/states/index.html"', text)

    for old, new in LEGACY_LINKS.items():
        text = text.replace("../service/" + old, "../service/" + new)
        text = text.replace("/service/" + old, "/service/" + new)

    return text, text != original

def main():
    changed = []
    canonical_repairs = 0
    link_repairs = 0

    for path in html_files():
        text = path.read_text(encoding="utf-8", errors="ignore")
        new, c = repair_canonical(text, path)
        new, l = repair_links(new, path)
        if c or l:
            path.write_text(new, encoding="utf-8")
            changed.append(path.relative_to(ROOT).as_posix())
            canonical_repairs += int(c)
            link_repairs += int(l)

    print(f"Canonical repairs: {canonical_repairs}")
    print(f"Internal-link files repaired: {link_repairs}")
    print(f"Files changed: {len(changed)}")
    for item in changed:
        print(f"  - {item}")

if __name__ == "__main__":
    main()
