#!/usr/bin/env python3
"""Session 9 read-only performance hygiene audit for static pages."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
HTML = list(ROOT.glob("*.html"))
HTML += list(ROOT.glob("service/*.html"))
HTML += list(ROOT.glob("tools/*.html"))

def main():
    css_dupes = 0
    js_sync = 0
    external_font_pages = 0
    for p in HTML:
        h=p.read_text(encoding="utf-8",errors="ignore")
        sheets=re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]+>',h,re.I)
        if len(sheets) > 8: css_dupes += 1
        if re.search(r'<script\s+[^>]*src=["\'][^"\']+["\'][^>]*>',h,re.I):
            if re.search(r'<script\s+(?![^>]*defer)(?![^>]*async)[^>]*src=',h,re.I):
                js_sync += 1
        if "fonts.googleapis.com" in h: external_font_pages += 1
    print("Pages sampled:", len(HTML))
    print("Pages with >8 stylesheet links:", css_dupes)
    print("Pages containing synchronous external JS:", js_sync)
    print("Pages using Google Fonts:", external_font_pages)
    print("This is a read-only hygiene check; use Lighthouse/PageSpeed for field performance metrics.")

if __name__ == "__main__":
    main()
