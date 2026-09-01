#!/usr/bin/env python3
"""
tools/fix-csc-duplicate-districts.py

Fixes two real data-quality bugs found across the CSC-locator district
listings (service/csc-locator/<state>/index.html), discovered while
investigating the audit report's "fake '300+ Centers' number, and a
district that has two separate pages with conflicting counts" complaint.

ROOT CAUSE (in generate_csc_pages.py / generate_thick_csc.py, already
patched separately so this doesn't recur next time those scripts run):
  1. MAX_CENTERS_PER_PAGE = 300 caps how many rows get stored per district
     while reading the source CSVs, and the state-index page then always
     appended a literal "+" after the count — so a district with the exact
     real total of, say, 9 stores was shown as "9+ stores" (misleadingly
     implies more exist), while a genuinely-capped district (300 real,
     more discarded) also shows "300+" and looks identical/generic to
     dozens of other unrelated capped districts. Only the exact-300 case
     should ever get a "+".
  2. The source CSVs spell some district names inconsistently (extra
     spaces, hyphens, or a parenthetical like "Kaimur (Bhabua)" vs
     "Kaimur Bhabua" vs "Kaimur(bhabua)") and the old generator used the
     raw spelling as the dict key — so the SAME real district ended up as
     2-4 separate pages with different (and sometimes conflicting) store
     counts, all listed separately on the state index page.

THIS SCRIPT (operates on the already-generated static files, since the
raw CSV source data isn't in the repo — it lives on the user's own
machine per generate_csc_pages.py's CSV_DIR path):
  - For every service/csc-locator/<state>/index.html: finds duplicate
    district entries (same district, different spelling/URL), keeps ONE
    entry (the one with the highest real center count) with a merged,
    correctly-capped count, and removes the other entries from the list.
  - Every remaining entry gets the "+" suffix fixed: only shown when the
    count is truly the 300 cap, not on every entry.
  - Numeric-only "district" entries (e.g. "190", "214", "709" — a
    pincode/ID that leaked into the district column upstream) are
    removed from the listing entirely.
  - The removed duplicate district pages themselves are NOT deleted
    (can't delete via a file-based fix, and something might already link
    to them) — instead their own <link rel="canonical"> is repointed
    from themselves to the surviving/kept page, so Google consolidates
    ranking signals onto one URL instead of splitting/penalizing them as
    duplicate content.
  - The removed numeric-junk pages get their canonical repointed to the
    state index page instead, plus a noindex robots meta tag (they're
    not real content, so they should drop out of the index rather than
    be treated as a duplicate of anything).

Only touches files under service/csc-locator/ — 35 index.html pages plus
whichever individual district pages had duplicates/junk (~25 files this
run). Idempotent — safe to run more than once.

HOW TO RUN
----------
    python3 tools/fix-csc-duplicate-districts.py [--dry-run]

Run from the repo root.
"""
import argparse
import glob
import os
import re

MAX_CENTERS_PER_PAGE = 300


def norm_key(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


ENTRY_RE = re.compile(
    r'<a href="([a-z0-9\-]+\.html)"([^>]*)>(.*?)\s*\((\d+)\+?\s*stores?\)\s*&rarr;</a>'
)


def fix_district_page_canonical(path, new_canonical_url, add_noindex, dry_run):
    if not os.path.exists(path):
        return False
    with open(path, encoding="utf-8") as f:
        html = f.read()
    original = html

    canon_re = re.compile(r'<link rel="canonical" href="[^"]*"\s*/?>')
    m = canon_re.search(html)
    new_tag = f'<link rel="canonical" href="{new_canonical_url}"/>'
    if m:
        html = html[: m.start()] + new_tag + html[m.end():]
    else:
        html = html.replace("<title", new_tag + "\n<title", 1)

    if add_noindex and 'name="robots"' not in html:
        html = html.replace(
            new_tag, new_tag + '\n<meta name="robots" content="noindex, follow"/>', 1
        )

    if html != original:
        if not dry_run:
            with open(path, "w", encoding="utf-8") as f:
                f.write(html)
        return True
    return False


def fix_state_index(path, dry_run):
    state_slug = path.split("/")[2]
    state_dir = os.path.dirname(path)
    with open(path, encoding="utf-8") as f:
        html = f.read()
    original = html

    entries = []
    for m in ENTRY_RE.finditer(html):
        href, extra_attrs, name, count = m.groups()
        entries.append({
            "full": m.group(0),
            "href": href,
            "name": name.strip(),
            "count": int(count),
        })

    if not entries:
        return 0, 0, 0

    groups = {}
    for e in entries:
        groups.setdefault(norm_key(e["name"]), []).append(e)

    removed_count = 0
    junk_count = 0
    canonical_fixes = 0

    for key, group in groups.items():
        is_numeric = group[0]["name"].replace(" ", "").isdigit()

        if is_numeric:
            for e in group:
                html = html.replace(e["full"], "", 1)
                junk_count += 1
                state_index_url = (
                    f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}/index.html"
                )
                if fix_district_page_canonical(
                    os.path.join(state_dir, e["href"]), state_index_url, True, dry_run
                ):
                    canonical_fixes += 1
            continue

        if len(group) == 1:
            e = group[0]
            correct_suffix = "+" if e["count"] == MAX_CENTERS_PER_PAGE else ""
            new_text = re.sub(
                r'\(\d+\+?\s*stores?\)',
                f'({e["count"]}{correct_suffix} stores)',
                e["full"],
            )
            if new_text != e["full"]:
                html = html.replace(e["full"], new_text, 1)
            continue

        # Duplicate group: keep the entry with the highest count as winner
        winner = max(group, key=lambda e: e["count"])
        merged_count = max(e["count"] for e in group)
        correct_suffix = "+" if merged_count == MAX_CENTERS_PER_PAGE else ""
        winner_url = (
            f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{winner['href']}"
        )

        new_winner_text = re.sub(
            r'\(\d+\+?\s*stores?\)',
            f'({merged_count}{correct_suffix} stores)',
            winner["full"],
        )
        html = html.replace(winner["full"], new_winner_text, 1)

        for e in group:
            if e is winner:
                continue
            html = html.replace(e["full"], "", 1)
            removed_count += 1
            if fix_district_page_canonical(
                os.path.join(state_dir, e["href"]), winner_url, False, dry_run
            ):
                canonical_fixes += 1

    if html != original:
        if not dry_run:
            with open(path, "w", encoding="utf-8") as f:
                f.write(html)

    return removed_count, junk_count, canonical_fixes


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    total_removed = total_junk = total_canon = 0
    for path in sorted(glob.glob("service/csc-locator/*/index.html")):
        removed, junk, canon = fix_state_index(path, args.dry_run)
        if removed or junk:
            state = path.split("/")[2]
            print(f"[{state}] merged {removed} duplicate link(s), removed {junk} numeric-junk link(s)")
        total_removed += removed
        total_junk += junk
        total_canon += canon

    print()
    print(
        f"{'DRY RUN — ' if args.dry_run else ''}Done. "
        f"Duplicate links merged: {total_removed}  Numeric-junk links removed: {total_junk}  "
        f"District-page canonicals repointed: {total_canon}"
    )


if __name__ == "__main__":
    main()
