#!/usr/bin/env python3
"""
generate-job-pages.py
======================
Session 3 of the Ahrefs SEO fix (companion to generate-service-pages.py,
generate-blog-pages.py and generate-category-pages.py).

Job alerts are different from services/blog posts: there is no local
data/*.json backup — every job alert lives only in the Supabase
`job_alerts` table (added via the admin dashboard, one at a time or via
bulk import), and new vacancies get added regularly. So this script
can't run offline like the other three; it fetches the current
published rows straight from Supabase's REST API (using the same
public anon key already embedded in assets/js/supabase-client.js — the
same key your browser sends on every page load, protected by the
table's Row-Level Security policy, not a secret) and writes one static
file per job to jobs/<slug>.html.

⚠️ IMPORTANT — this needs internet access to run (it calls the
Supabase REST API), so it can't be run inside a sandboxed/offline
environment. Run it:
  - locally, any time after adding/editing job alerts in the admin
    dashboard, or
  - on a schedule via a GitHub Action (recommended — see the note at
    the bottom of this docstring), so newly-added vacancies always get
    a static page within a few hours without you remembering to run
    this by hand.

Each generated page mirrors exactly what assets/js/job-post.js renders
client-side: title, badges, department/location, vacancies, last date,
apply link, full body sections (eligibility, fees, selection process,
etc.), JobPosting + BreadcrumbList JSON-LD, unique meta description and
canonical URL. The same JS scripts are still included at the bottom of
each generated page so share buttons and live language toggle still
work — same content, so it's a harmless no-op for the baked-in parts.

Closed/expired job alerts are still generated (so their pages don't
404 and keep whatever link equity they've built), but are marked with
a "Closed" badge, exactly like the dynamic route already does.

The old jobs/post.html?slug= route is left in place and keeps working
for any job alert added after the last time this script was run.

Usage:
    pip install requests
    python3 tools/generate-job-pages.py

Suggested GitHub Action (runs this daily and commits any new pages):
    - a scheduled workflow (`on: schedule`) that checks out the repo,
      runs `python3 tools/generate-job-pages.py`, and commits+pushes
      jobs/*.html if anything changed. Ask Claude to write this
      workflow file if you'd like it set up.
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
OUT_DIR = REPO_ROOT / "jobs"
BASE_URL = "https://sarkarisewaindia.com"

# Same public anon key already shipped in assets/js/supabase-client.js —
# meant to be used client-side, protected by RLS, not a secret.
SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

HREF_RE = re.compile(r'href="([^"]*)"')

JOB_TYPES = {
    "central": "केंद्र सरकार",
    "state": "राज्य सरकार",
    "psu": "PSU",
    "railway": "रेलवे",
    "banking": "बैंकिंग",
    "defence": "रक्षा",
    "teaching": "शिक्षण",
    "other": "अन्य",
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


def pick(job, base_key):
    """Mirrors job-post.js's pick(): Hindi field if present, else English."""
    return job.get(f"{base_key}_hi") or job.get(f"{base_key}_en") or ""


def fetch_published_jobs():
    url = (
        f"{SUPABASE_URL}/rest/v1/job_alerts"
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


def body_section(label_hi, content, is_pre=True):
    if not content:
        return ""
    inner = nl2br(content) if is_pre else content
    return f'''
      <section class="job-post-section">
        <h2>{label_hi}</h2>
        <div class="job-post-section__body">{inner}</div>
      </section>'''


def build_meta_description(desc: str, title: str) -> str:
    d = (desc or title or "").strip()
    if len(d) < 100:
        d = (d + f" {title} — पूरी जानकारी, योग्यता, चयन प्रक्रिया, महत्वपूर्ण तिथियां और आवेदन कैसे करें, यहां देखें।").strip()
    if len(d) > 158:
        d = d[:155].rsplit(" ", 1)[0] + "..."
    return d


def build_page(job, header_partial_src, footer_partial_src, all_jobs_by_type):
    slug = job["slug"]
    title = pick(job, "title")
    dept = pick(job, "department")
    location = pick(job, "location")
    description = pick(job, "description")
    qualification = pick(job, "qualification")
    meta_desc = build_meta_description(description or qualification, title)
    title_with_brand = f"{title} — SarkariSewaIndia"
    if len(title_with_brand) <= 60:
        page_title = title_with_brand
    elif len(title) <= 60:
        page_title = title
    else:
        page_title = title[:57].rsplit(" ", 1)[0] + "..."
    canonical_url = f"{BASE_URL}/jobs/{slug}.html"
    job_type_label = JOB_TYPES.get(job.get("job_type"), job.get("job_type") or "")

    is_closed = False
    try:
        from datetime import date
        y, m, d = job["last_date"].split("-")
        is_closed = date(int(y), int(m), int(d)) < date.today()
    except Exception:
        pass

    badges = ""
    if job_type_label:
        badges += f'<span class="job-badge job-badge--type">{esc(job_type_label)}</span>'
    if is_closed:
        badges += '<span class="job-badge job-badge--closed">बंद</span>'

    dept_line = ""
    if dept:
        dept_line = f'<p class="job-post-hero__dept">{esc(dept)}{" · " + esc(location) if location else ""}</p>'

    vacancies_line = ""
    if job.get("vacancies"):
        vacancies_line = f'<div><strong>रिक्तियां:</strong> {esc(str(job["vacancies"]))}</div>'

    notification_link = job.get("notification_link") or ""
    notification_btn = ""
    if notification_link:
        notification_btn = f'<a class="job-card__notification-link" href="{esc(notification_link)}" target="_blank" rel="noopener noreferrer">आधिकारिक अधिसूचना (PDF)</a>'

    apply_link = job.get("apply_link") or "#"

    body_html = "".join(filter(None, [
        body_section("विवरण", description),
        body_section("योग्यता", qualification),
        body_section("रिक्ति विवरण", pick(job, "vacancy_breakdown")),
        body_section("आयु सीमा", pick(job, "age_limit")),
        body_section("आवेदन शुल्क", pick(job, "fee_info")),
        body_section("वेतन", pick(job, "salary")),
        body_section("चयन प्रक्रिया", pick(job, "selection_process")),
        body_section("महत्वपूर्ण तिथियां", pick(job, "important_dates")),
        body_section("आवेदन कैसे करें", pick(job, "how_to_apply")),
    ]))
    if not body_html.strip():
        body_html = '<p class="job-empty">इस अलर्ट का पूरा विवरण अभी जोड़ा नहीं गया है — आधिकारिक अधिसूचना के लिए ऊपर दिए Apply Now लिंक का उपयोग करें।</p>'

    related = [j for j in all_jobs_by_type.get(job.get("job_type"), []) if j["slug"] != slug][:4]
    related_html = ""
    if related:
        items = "".join(
            f'<a class="job-post-related__item" href="{r["slug"]}.html">{esc(pick(r, "title"))} <span>· {esc(format_date_hi(r.get("last_date", "")))}</span></a>'
            for r in related
        )
        related_html = f'''
      <p class="job-post-related__label">अन्य समान नौकरी अलर्ट</p>
      <div class="job-post-related__list">{items}</div>'''

    header_html = rewrite_links(header_partial_src, "../")
    footer_html = rewrite_links(footer_partial_src, "../")

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "JobPosting",
          "title": {json.dumps(title, ensure_ascii=False)},
          "description": {json.dumps(meta_desc, ensure_ascii=False)},
          "datePosted": {json.dumps((job.get("created_at") or "")[:10], ensure_ascii=False)},
          "validThrough": {json.dumps(job.get("last_date", ""), ensure_ascii=False)},
          "employmentType": "FULL_TIME",
          "hiringOrganization": {{ "@type": "Organization", "name": {json.dumps(dept or "Government of India", ensure_ascii=False)} }},
          "jobLocation": {{ "@type": "Place", "address": {json.dumps(location or "India", ensure_ascii=False)} }}
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{BASE_URL}/index.html" }},
            {{ "@type": "ListItem", "position": 2, "name": "Job Alerts", "item": "{BASE_URL}/jobs/index.html" }},
            {{ "@type": "ListItem", "position": 3, "name": {json.dumps(title, ensure_ascii=False)}, "item": {json.dumps(canonical_url, ensure_ascii=False)} }}
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
  <meta property="og:title" content="{esc(title)} — SarkariSewaIndia" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(title)} — SarkariSewaIndia" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(page_title)}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module19.css" />
  <script type="application/ld+json" id="job-post-schema">{schema}</script>
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
      <a href="index.html">Job Alerts</a>
      <span class="sep">/</span>
      <span class="current">{esc(title)}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <article id="job-post-article">
      <header class="job-post-hero" id="job-post-hero">
        <div class="job-post-hero__badges">{badges}</div>
        <h1 class="job-post-hero__title">{esc(title)}</h1>
        {dept_line}
        <div class="job-post-hero__meta">
          {vacancies_line}
          <div><strong>आवेदन की अंतिम तिथि:</strong> {esc(format_date_hi(job.get("last_date", "")))}</div>
        </div>
        <div class="job-post-hero__actions">
          <a class="btn btn-primary" href="{esc(apply_link)}" target="_blank" rel="noopener noreferrer">अभी आवेदन करें →</a>
          {notification_btn}
        </div>
        <div id="job-share-row"></div>
      </header>

      <div class="job-post-body" id="job-post-body">
        {body_html}
      </div>

      <section class="job-post-related" id="job-post-related" {"hidden" if not related else ""}>
        {related_html}
      </section>
    </article>

    <p class="job-post-back">
      <a href="index.html">← Back to Job Alerts</a>
    </p>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/job-post.js"></script>
</body>
</html>
'''


def main():
    print("Fetching published job alerts from Supabase...")
    jobs = fetch_published_jobs()
    print(f"Found {len(jobs)} published job alerts.")
    if not jobs:
        print("Nothing to generate.")
        return

    header_src = HEADER_PARTIAL.read_text(encoding="utf-8")
    footer_src = FOOTER_PARTIAL.read_text(encoding="utf-8")

    jobs_by_type = {}
    for j in jobs:
        jobs_by_type.setdefault(j.get("job_type"), []).append(j)

    OUT_DIR.mkdir(exist_ok=True)
    written = []
    for job in jobs:
        page_html = build_page(job, header_src, footer_src, jobs_by_type)
        out_path = OUT_DIR / f"{job['slug']}.html"
        out_path.write_text(page_html, encoding="utf-8")
        written.append(str(out_path.relative_to(REPO_ROOT)))

    print(f"\nGenerated {len(written)} static job pages in jobs/")
    for w in written:
        print(f"  - {w}")


if __name__ == "__main__":
    main()
