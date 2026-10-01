#!/usr/bin/env python3
"""Session 8 read-only audit: state-service URL duplication/canonical integrity."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
STATES = ROOT / "states"
SERVICES = ROOT / "service"
BASE = "https://sarkarisewaindia.com"

def canonical(html):
    m = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', html, re.I)
    return m.group(1) if m else ""

def main():
    pages = sorted(STATES.glob("*.html"))
    state_landings = 0
    service_like = []
    bad_canon = []
    missing_target = []

    for p in pages:
        html = p.read_text(encoding="utf-8", errors="ignore")
        can = canonical(html)
        if p.stem in {"index"} or "-" not in p.stem:
            state_landings += 1
        else:
            service_like.append(p)
        if can != f"{BASE}/states/{p.name}":
            bad_canon.append((p.name, can))
        if can.startswith(BASE + "/"):
            rel = can[len(BASE)+1:].split("?",1)[0].split("#",1)[0]
            if not (ROOT / rel).is_file():
                missing_target.append((p.name, can))

    print(f"State directory HTML pages checked: {len(pages)}")
    print(f"State/service-like pages: {len(service_like)}")
    print(f"State landing pages (rough heuristic): {state_landings}")
    print(f"Canonical mismatches: {len(bad_canon)}")
    print(f"Canonical targets missing locally: {len(missing_target)}")

    if bad_canon:
        print("\nCANONICAL MISMATCHES:")
        for x in bad_canon[:100]: print(" -", x)
    if missing_target:
        print("\nMISSING CANONICAL TARGETS:")
        for x in missing_target[:100]: print(" -", x)

if __name__ == "__main__":
    main()
