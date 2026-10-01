#!/usr/bin/env python3
"""
inline-header-footer.py
========================
Root-cause fix for the Ahrefs "Orphan page (has no incoming internal
links)" and "Page has no outgoing links" issues.

Every page currently loads its nav and footer like this:
    <div id="site-header"></div>
    <div id="site-footer"></div>
...then assets/js/main.js fetches partials/header.html and
partials/footer.html and injects them AFTER the page loads. A crawler
that doesn't execute JavaScript (or times out before it finishes) sees
an empty page with zero internal links — that's most of the site.

This script bakes the same header/footer markup directly into the
raw HTML of every page at build time, with hrefs already prefixed for
that page's folder depth (same rule main.js's rewriteInternalLinks()
uses at runtime: prefix every relative href with the page's ROOT,
leave absolute/#/mailto:/tel: links alone). main.js still fetches and
re-injects the partials on load as before — same content, so it's a
harmless no-op for real visitors, but crawlers reading raw HTML now
see the full nav and footer immediately.

Run from anywhere; it locates the repo root from its own path.
    python3 tools/inline-header-footer.py
"""
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

HEADER_PATH = REPO_ROOT / "partials" / "header.html"
FOOTER_PATH = REPO_ROOT / "partials" / "footer.html"

HREF_RE = re.compile(r'href="([^"]*)"')


def rewrite_links(html: str, root: str) -> str:
    def repl(m):
        href = m.group(1)
        if re.match(r"^(https?:)?//", href) or href.startswith(("#", "mailto:", "tel:")):
            return m.group(0)
        return f'href="{root}{href}"'

    return HREF_RE.sub(repl, html)


DIV_TAG_RE = re.compile(r"<(/?)div\b[^>]*>", re.IGNORECASE)


def find_balanced_div(html: str, div_id: str):
    """Find the full <div id="{div_id}">...</div> block, correctly
    handling nested divs inside (the baked-in header/footer markup
    has plenty). Returns (start, end) character offsets spanning the
    whole block (open tag through matching close tag), or None."""
    open_re = re.compile(rf'<div id="{div_id}"[^>]*>')
    m = open_re.search(html)
    if not m:
        return None
    start = m.start()
    depth = 1
    pos = m.end()
    for tm in DIV_TAG_RE.finditer(html, pos):
        if tm.group(1):  # closing </div>
            depth -= 1
            if depth == 0:
                return start, tm.end()
        else:
            depth += 1
    return None  # unbalanced -- bail out rather than corrupt the file


def inject(html: str, div_id: str, content: str) -> str:
    """Idempotent: works whether the target div is still the original
    empty placeholder (first run) or already holds previously-baked
    content (a re-run after partials/header.html or footer.html
    changed) -- in both cases the whole div is replaced wholesale."""
    replacement = f'<div id="{div_id}">\n{content.strip()}\n</div>'

    # First run: empty placeholder.
    empty_pattern = re.compile(rf'<div id="{div_id}"[^>]*></div>')
    new_html, count = empty_pattern.subn(replacement, html, count=1)
    if count > 0:
        return new_html

    # Re-run: div already has content -- replace the balanced block.
    span = find_balanced_div(html, div_id)
    if span is None:
        return None
    start, end = span
    return html[:start] + replacement + html[end:]


def get_root(path: Path, repo_root: Path) -> str:
    depth = len(path.relative_to(repo_root).parts) - 1
    return "../" * depth if depth > 0 else ""


def main():
    header_src = HEADER_PATH.read_text(encoding="utf-8")
    footer_src = FOOTER_PATH.read_text(encoding="utf-8")

    changed, skipped = [], []
    for path in sorted(REPO_ROOT.rglob("*.html")):
        if "partials" in path.parts:
            continue
        html = path.read_text(encoding="utf-8")
        if 'id="site-header"' not in html:
            continue

        root = get_root(path, REPO_ROOT)
        header_html = rewrite_links(header_src, root)
        footer_html = rewrite_links(footer_src, root)

        new_html = inject(html, "site-header", header_html)
        if new_html is None:
            skipped.append((str(path.relative_to(REPO_ROOT)), "header div not empty/not found"))
            continue
        new_html2 = inject(new_html, "site-footer", footer_html)
        if new_html2 is None:
            skipped.append((str(path.relative_to(REPO_ROOT)), "footer div not empty/not found"))
            continue

        path.write_text(new_html2, encoding="utf-8")
        changed.append(str(path.relative_to(REPO_ROOT)))

    print(f"Updated {len(changed)} files:")
    for f in changed:
        print(f"  - {f}")
    if skipped:
        print(f"\nSkipped {len(skipped)} files (already inlined or unexpected markup):")
        for f, reason in skipped:
            print(f"  - {f}: {reason}")


if __name__ == "__main__":
    main()
