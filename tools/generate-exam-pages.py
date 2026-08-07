#!/usr/bin/env python3
"""
generate-exam-pages.py
=======================
Companion to generate-job-pages.py, generate-service-pages.py,
generate-category-pages.py, generate-blog-pages.py — same reasoning,
applied to the Exam Calendar.

Why this exists: /exams/index.html used to be ONLY a listing page —
every exam card linked straight out to the official government site,
so there was no internal, crawlable page per exam at all. That's a
structural reason exams contributed to this site's Google thin-content
flag: there was nothing here for Google to index beyond one shared
listing URL. This script fixes that by writing a real static page per
published exam to exams/<slug>.html, the same way job alerts already
get one page per vacancy.

Needs the columns added by supabase/exam-calendar-detail-migration.sql
(description, eligibility, exam_pattern, syllabus, selection_process,
how_to_apply, application_fee, age_limit) — run that migration first,
or these pages will look thin because the source data is thin, not
because of a bug here.

⚠️ IMPORTANT — like generate-job-pages.py, this needs internet access
(it calls the Supabase REST API), so it can't run inside a
sandboxed/offline environment. Run it locally after adding/editing
exams in the admin dashboard, or via the GitHub Action
(.github/workflows/regenerate-content.yml already runs it there).

Usage:
    python3 tools/generate-exam-pages.py
"""
import html
import json
import re
import sys
import urllib.request
import urllib.error
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "exams"
BASE_URL = "https://sarkarisewaindia.com"

# Same public anon key already shipped in assets/js/supabase-client.js —
# meant to be used client-side, protected by RLS, not a secret.
SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

HREF_RE = re.compile(r'href="([^"]*)"')

EXAM_CATEGORIES_HI = {
    "central": "केंद्र सरकार",
    "state": "राज्य सरकार",
    "banking": "बैंकिंग",
    "railway": "रेलवे",
    "ssc": "SSC",
    "upsc": "UPSC",
    "police": "पुलिस",
    "defence": "रक्षा",
    "other": "अन्य",
}

# Category -> related service slugs on this site, for internal linking.
# Kept intentionally small/precise rather than guessing — only maps to
# services that genuinely exist in data/services.json.
CATEGORY_RELATED_SERVICES = {
    "ssc": ["ssc-recruitment"],
    "upsc": ["upsc-civil-services"],
    "banking": ["ibps-bank-recruitment"],
    "railway": ["employment-exchange-registration"],
    "central": ["employment-exchange-registration", "ssc-recruitment"],
    "state": ["employment-exchange-registration"],
    "police": ["employment-exchange-registration"],
    "defence": ["employment-exchange-registration"],
    "other": ["employment-exchange-registration"],
}

MONTHS_HI = [
    "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
    "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
]


def esc(s) -> str:
    return html.escape(s or "", quote=True)


def rewrite_links(partial_html: str, root: str) -> str:
    def repl(m):
        href = m.group(1)
        if re.match(r"^(https?:)?//", href) or href.startswith(("#", "mailto:", "tel:")):
            return m.group(0)
        return f'href="{root}{href}"'

    return HREF_RE.sub(repl, partial_html)


def pick(row, base_key):
    """Hindi field if present, else English — same pattern as job pages."""
    return row.get(f"{base_key}_hi") or row.get(f"{base_key}_en") or ""


def fetch_published_exams():
    url = (
        f"{SUPABASE_URL}/rest/v1/exam_calendar"
        "?select=*&status=eq.published&order=last_date.asc"
    )
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.URLError as e:
        print(f"ERROR: could not reach Supabase ({e}). This script needs internet access.", file=sys.stderr)
        sys.exit(1)


def format_date_hi(iso: str) -> str:
    try:
        y, m, d = iso.split("-")
        return f"{int(d)} {MONTHS_HI[int(m) - 1]} {y}"
    except Exception:
        return iso or ""


def nl2br(s: str) -> str:
    return esc(s).replace("\n", "<br>")


def body_section(label_hi, content):
    if not content:
        return ""
    return f'''
      <section class="job-post-section">
        <h2>{label_hi}</h2>
        <div class="job-post-section__body">{nl2br(content)}</div>
      </section>'''


def build_meta_description(desc: str, name: str) -> str:
    d = (desc or "").strip()
    if len(d) < 100:
        d = (d + f" {name} — अधिसूचना तिथि, अंतिम तिथि, पात्रता, परीक्षा पैटर्न और आवेदन प्रक्रिया की पूरी जानकारी यहां देखें।").strip()
    if len(d) > 158:
        d = d[:155].rsplit(" ", 1)[0] + "..."
    return d


def compute_status(exam):
    from datetime import date
    today = date.today()

    def parse(iso):
        y, m, d = iso.split("-")
        return date(int(y), int(m), int(d))

    if exam.get("notification_date"):
        try:
            if today < parse(exam["notification_date"]):
                return "upcoming", "आगामी"
        except Exception:
            pass
    try:
        if today <= parse(exam["last_date"]):
            return "open", "खुला है"
    except Exception:
        pass
    return "closed", "बंद"


def build_page(exam, header_partial_src, footer_partial_src, all_exams_by_category, services_by_slug):
    slug = exam["slug"]
    name = pick(exam, "exam_name")
    org = pick(exam, "organisation")
    description = pick(exam, "description")
    category = exam.get("category") or "other"
    category_label = EXAM_CATEGORIES_HI.get(category, category)
    meta_desc = build_meta_description(description, name)

    title_with_brand = f"{name} — SarkariSewaIndia"
    if len(title_with_brand) <= 60:
        page_title = title_with_brand
    elif len(name) <= 60:
        page_title = name
    else:
        page_title = name[:57].rsplit(" ", 1)[0] + "..."

    canonical_url = f"{BASE_URL}/exams/{slug}.html"
    status_class, status_label = compute_status(exam)

    badges = f'<span class="job-badge job-badge--type">{esc(category_label)}</span>'
    badges += f'<span class="job-badge job-badge--closed">{esc(status_label)}</span>' if status_class == "closed" else ""

    org_line = f'<p class="job-post-hero__dept">{esc(org)}</p>' if org else ""

    dates_line = ""
    if exam.get("notification_date"):
        dates_line += f'<div><strong>अधिसूचना तिथि:</strong> {esc(format_date_hi(exam["notification_date"]))}</div>'
    dates_line += f'<div><strong>आवेदन की अंतिम तिथि:</strong> {esc(format_date_hi(exam.get("last_date", "")))}</div>'
    if exam.get("exam_date"):
        dates_line += f'<div><strong>परीक्षा तिथि:</strong> {esc(format_date_hi(exam["exam_date"]))}</div>'

    notification_pdf = exam.get("notification_pdf_link") or ""
    notification_btn = ""
    if notification_pdf:
        notification_btn = f'<a class="job-card__notification-link" href="{esc(notification_pdf)}" target="_blank" rel="noopener noreferrer">आधिकारिक अधिसूचना (PDF)</a>'

    official_link = exam.get("official_link") or "#"

    body_html = "".join(filter(None, [
        body_section("विवरण", description),
        body_section("पात्रता", pick(exam, "eligibility")),
        body_section("आयु सीमा", pick(exam, "age_limit")),
        body_section("परीक्षा पैटर्न", pick(exam, "exam_pattern")),
        body_section("पाठ्यक्रम", pick(exam, "syllabus")),
        body_section("चयन प्रक्रिया", pick(exam, "selection_process")),
        body_section("आवेदन शुल्क", pick(exam, "application_fee")),
        body_section("आवेदन कैसे करें", pick(exam, "how_to_apply")),
    ]))
    if not body_html.strip():
        body_html = '<p class="job-empty">इस परीक्षा का पूरा विवरण अभी जोड़ा नहीं गया है — आधिकारिक अधिसूचना के लिए ऊपर दिए लिंक का उपयोग करें।</p>'

    # Internal links to related services on this site (SSC/UPSC/banking
    # recruitment service pages etc.) — real cross-linking, not decorative.
    related_service_slugs = [
        s for s in CATEGORY_RELATED_SERVICES.get(category, [])
        if s in services_by_slug
    ]
    related_services_html = ""
    if related_service_slugs:
        items = "".join(
            f'<a class="job-post-related__item" href="../service/{s}.html">{esc(services_by_slug[s])}</a>'
            for s in related_service_slugs
        )
        related_services_html = f'''
      <p class="job-post-related__label">संबंधित सेवाएं</p>
      <div class="job-post-related__list">{items}</div>'''

    # Related exams in the same category
    related_exams = [e for e in all_exams_by_category.get(category, []) if e["slug"] != slug][:4]
    related_exams_html = ""
    if related_exams:
        items = "".join(
            f'<a class="job-post-related__item" href="{r["slug"]}.html">{esc(pick(r, "exam_name"))} <span>· {esc(format_date_hi(r.get("last_date", "")))}</span></a>'
            for r in related_exams
        )
        related_exams_html = f'''
      <p class="job-post-related__label">इसी श्रेणी की अन्य परीक्षाएं</p>
      <div class="job-post-related__list">{items}</div>'''

    header_html = rewrite_links(header_partial_src, "../")
    footer_html = rewrite_links(footer_partial_src, "../")

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "Event",
          "name": {json.dumps(name, ensure_ascii=False)},
          "description": {json.dumps(meta_desc, ensure_ascii=False)},
          "startDate": {json.dumps(exam.get("exam_date") or exam.get("last_date", ""), ensure_ascii=False)},
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "organizer": {{ "@type": "Organization", "name": {json.dumps(org or "Government of India", ensure_ascii=False)} }},
          "location": {{ "@type": "Place", "name": "India" }}
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{BASE_URL}/index.html" }},
            {{ "@type": "ListItem", "position": 2, "name": "Exam Calendar", "item": "{BASE_URL}/exams/index.html" }},
            {{ "@type": "ListItem", "position": 3, "name": {json.dumps(name, ensure_ascii=False)}, "item": {json.dumps(canonical_url, ensure_ascii=False)} }}
          ]
        }}
      ]
    }}'''

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="{esc(canonical_url)}" />
  <meta name="description" content="{esc(meta_desc)}" />
  <meta property="og:title" content="{esc(name)} — SarkariSewaIndia" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(name)} — SarkariSewaIndia" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(page_title)}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module19.css" />
  <link rel="stylesheet" href="../assets/css/module20.css" />
  <script type="application/ld+json" id="exam-post-schema">{schema}</script>
</head>
<body data-slug="{esc(slug)}">
  <script>window.SS_ROOT = "../";</script>

  <div id="site-header">
{header_html.strip()}
  </div>

  <main class="container">
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="index.html">Exam Calendar</a>
      <span class="sep">/</span>
      <span class="current">{esc(name)}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <article id="exam-post-article">
      <header class="job-post-hero" id="exam-post-hero">
        <div class="job-post-hero__badges">{badges}</div>
        <h1 class="job-post-hero__title">{esc(name)}</h1>
        {org_line}
        <div class="job-post-hero__meta">
          {dates_line}
        </div>
        <div class="job-post-hero__actions">
          <a class="btn btn-primary" href="{esc(official_link)}" target="_blank" rel="noopener noreferrer">आधिकारिक वेबसाइट →</a>
          {notification_btn}
        </div>
        <div id="job-share-row"></div>
      </header>

      <div class="job-post-body" id="exam-post-body">
        {body_html}
      </div>

      <section class="job-post-related" id="exam-post-related" {"hidden" if not (related_services_html or related_exams_html) else ""}>
        {related_services_html}
        {related_exams_html}
      </section>
    </article>

    <p class="job-post-back">
      <a href="index.html">← Back to Exam Calendar</a>
    </p>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
</body>
</html>
'''


def main():
    print("Fetching published exams from Supabase...")
    exams = fetch_published_exams()
    print(f"Found {len(exams)} published exams.")
    if not exams:
        print("Nothing to generate.")
        return

    header_src = HEADER_PARTIAL.read_text(encoding="utf-8")
    footer_src = FOOTER_PARTIAL.read_text(encoding="utf-8")

    exams_by_category = {}
    for e in exams:
        exams_by_category.setdefault(e.get("category"), []).append(e)

    services_data = json.loads((REPO_ROOT / "data" / "services.json").read_text(encoding="utf-8"))
    services_by_slug = {s["id"]: (s.get("name", {}).get("hi") or s.get("name", {}).get("en")) for s in services_data}

    OUT_DIR.mkdir(exist_ok=True)
    written = []
    for exam in exams:
        page_html = build_page(exam, header_src, footer_src, exams_by_category, services_by_slug)
        out_path = OUT_DIR / f"{exam['slug']}.html"
        out_path.write_text(page_html, encoding="utf-8")
        written.append(str(out_path.relative_to(REPO_ROOT)))

    print(f"\nGenerated {len(written)} static exam pages in exams/")
    for w in written:
        print(f"  - {w}")


if __name__ == "__main__":
    main()
