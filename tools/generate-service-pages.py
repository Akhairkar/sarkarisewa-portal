#!/usr/bin/env python3
"""
generate-service-pages.py
==========================
Session 2 of the Ahrefs SEO fix.

Until now every service (Aadhaar, PAN, PM Kisan, ...) was served by the
same single file, service/service.html, with the actual content injected
by JavaScript based on a ?id= query string. A crawler that doesn't run
JS sees an identical, near-empty shell for all 93 services — that's the
root cause behind "H1 tag missing", "Meta description too short",
"Title too long" / duplicate titles, "Duplicate pages without canonical",
and "Low word count" in the Ahrefs report.

This script reads data/services.json and data/categories.json and writes
one real static file per service to service/<slug>.html, with a unique
title, meta description, canonical URL, H1, Open Graph / Twitter card
tags, JSON-LD schema, and the full content (official links, eligibility,
documents, fees, timeline, FAQs) already baked into the HTML — mirroring
exactly what assets/js/service.js renders client-side, in Hindi (the
site's default language) with an English fallback for any missing string.

The same JS scripts are still included at the bottom of each generated
page, so once loaded they hydrate the page (comments, share buttons,
live language toggle) — same content, so it's a harmless no-op for the
baked-in parts, but crawlers reading raw HTML now see everything
immediately.

Services added later from the admin dashboard (Supabase, not in
services.json) are NOT covered by this script — they keep using the
original dynamic service/service.html?id= route, since generating a
static file for them would need running this script again after every
addition. That's a possible Session 3/4 follow-up if wanted.

Run from the repo root or anywhere; it locates the repo root from its
own path:
    python3 tools/generate-service-pages.py
"""
import html
import json
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SERVICES_JSON = REPO_ROOT / "data" / "services.json"
CATEGORIES_JSON = REPO_ROOT / "data" / "categories.json"
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "service"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_HI = "सरकारीसेवा पोर्टल"
ROOT = "../"  # service/<slug>.html is one level deep, same as service/service.html

# Slugs that get a cross-link CTA to the free Project Report tool,
# since a PMEGP/Mudra applicant reading this page is exactly the
# audience for that tool. Add a slug here once its service page exists
# (e.g. a future PMEGP-specific entry).
PROJECT_REPORT_CTA_SLUGS = {"pm-mudra-yojana"}

PROJECT_REPORT_CTA_HTML = """    <link rel="stylesheet" href="../assets/css/project-report-theme.css">
    <div class="pr-scope" style="margin: 20px 0;">
      <div class="pr-ledger-card" style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
        <p style="margin:0; font-size:15px;">
          Isi scheme ke liye apna <strong>Project Report free mein banayein</strong> — subsidy aur DSCR auto-calculate ho jaayega.
        </p>
        <a href="../project-report/index.html" class="pr-btn pr-btn-primary" style="text-decoration:none; white-space:nowrap; font-size:14px; padding:10px 18px;">
          Abhi Try Karein →
        </a>
      </div>
    </div>
"""

HREF_RE = re.compile(r'href="([^"]*)"')


def rewrite_links(partial_html: str, root: str) -> str:
    def repl(m):
        href = m.group(1)
        if re.match(r"^(https?:)?//", href) or href.startswith(("#", "mailto:", "tel:")):
            return m.group(0)
        return f'href="{root}{href}"'

    return HREF_RE.sub(repl, partial_html)


def t(obj, lang="hi"):
    """Mirrors i18n-helper.js's t(): prefer the requested language, then
    en, then hi, then empty string. Site default language is Hindi."""
    if obj is None:
        return ""
    if isinstance(obj, str):
        return obj
    return obj.get(lang) or obj.get("en") or obj.get("hi") or ""


def esc(s: str) -> str:
    return html.escape(s, quote=True)


def build_meta_description(name_hi: str, summary: str) -> str:
    desc = summary.strip()
    if len(desc) < 100:
        filler = f" {name_hi} के लिए आधिकारिक लिंक, ज़रूरी दस्तावेज़, पात्रता और आवेदन प्रक्रिया की पूरी जानकारी।"
        desc = (desc + filler).strip()
    if len(desc) > 158:
        desc = desc[:155].rsplit(" ", 1)[0] + "..."
    return desc


def official_links_block(service):
    links = service.get("officialLinks") or []
    if not links:
        return ""
    items = "".join(
        f'''
      <li class="link-list__item">
        <span class="link-list__label">{esc(t(l.get("label")))}</span>
        <a class="link-list__go" href="{esc(l.get("url", "#"))}" target="_blank" rel="noopener">Visit &rarr;</a>
      </li>'''
        for l in links
    )
    return section("🔗", "आधिकारिक लिंक", f'<ul class="link-list">{items}</ul>')


def apply_online_block(service):
    a = service.get("applyOnline")
    if not a:
        return ""
    steps = a.get("steps") or []
    steps_html = ""
    if steps:
        items = "".join(f"<li>{esc(t(s))}</li>" for s in steps)
        steps_html = f'<ol class="steps-list">{items}</ol>'
    note = t(a.get("note"))
    return section(
        "📝",
        "ऑनलाइन आवेदन करें",
        f'<p>{esc(note)}</p>{steps_html}'
        f'<div style="margin-top:1rem;"><a class="btn btn--primary" href="{esc(a.get("url", "#"))}" target="_blank" rel="noopener">आवेदन शुरू करें</a></div>',
    )


def download_form_block(service):
    f = service.get("downloadForm")
    if not f:
        return ""
    form_name = t(f.get("formName"))
    return section(
        "📄",
        "फॉर्म डाउनलोड करें",
        f'''<ul class="link-list">
        <li class="link-list__item">
          <span class="link-list__label">{esc(form_name)} ({f.get("fileType", "PDF")})</span>
          <a class="link-list__go" href="{esc(f.get("url", "#"))}" target="_blank" rel="noopener">Download &rarr;</a>
        </li>
      </ul>''',
    )


def track_status_block(service):
    ts = service.get("trackStatus")
    if not ts:
        return ""
    note = t(ts.get("note"))
    return section(
        "📍",
        "स्थिति ट्रैक करें",
        f'<p>{esc(note)}</p>'
        f'<div style="margin-top:1rem;"><a class="btn btn--outline" href="{esc(ts.get("url", "#"))}" target="_blank" rel="noopener">स्थिति जांचें</a></div>',
    )


def helpline_block(service):
    h = service.get("helpline")
    if not h:
        return ""
    if isinstance(h, str):
        return section(
            "☎️", "हेल्पलाइन",
            f'<ul class="helpline-list"><li class="helpline-card"><div class="helpline-card__phone">{esc(h)}</div></li></ul>',
        )
    if not h:
        return ""
    cards = "".join(
        f'''
      <li class="helpline-card">
        <div>{esc(t(hh.get("label")))}</div>
        <div class="helpline-card__phone">{esc(hh.get("phone", ""))}</div>
        <div class="helpline-card__hours">{esc(t(hh.get("hours")))}</div>
      </li>'''
        for hh in h
    )
    return section("☎️", "हेल्पलाइन", f'<ul class="helpline-list">{cards}</ul>')


def documents_block(service):
    docs = service.get("documentsRequired") or []
    if not docs:
        return ""
    items = "".join(f"<li>{esc(t(d))}</li>" for d in docs)
    return section("📋", "ज़रूरी दस्तावेज़", f'<ul class="check-list">{items}</ul>')


def eligibility_block(service):
    elig = service.get("eligibility") or []
    if not elig:
        return ""
    items = "".join(f"<li>{esc(t(e))}</li>" for e in elig)
    return section("✅", "पात्रता", f'<ul class="check-list">{items}</ul>')


def fees_block(service):
    fees = service.get("fees") or []
    if not fees:
        return ""
    rows = "".join(f"<tr><td>{esc(t(f.get('label')))}</td><td>{esc(t(f.get('amount')))}</td></tr>" for f in fees)
    return section("💵", "शुल्क", f'<table class="fees-table"><tbody>{rows}</tbody></table>')


def timeline_block(service):
    tl = service.get("timeline") or []
    if not tl:
        return ""
    items = "".join(
        f'<li>{esc(t(s.get("step")))}<span class="timeline__duration">{esc(t(s.get("duration")))}</span></li>'
        for s in tl
    )
    return section("⏱️", "समयसीमा", f'<ul class="timeline">{items}</ul>')


def faqs_block(service):
    faqs = service.get("faqs") or []
    if not faqs:
        return ""
    items = "".join(
        f'''
      <details class="faq-item" {"open" if i == 0 else ""}>
        <summary class="faq-item__q">{esc(t(f.get("q")))} <span class="chev">&#8964;</span></summary>
        <div class="faq-item__a">{esc(t(f.get("a")))}</div>
      </details>'''
        for i, f in enumerate(faqs)
    )
    return section("❓", "सामान्य प्रश्न (FAQs)", f'<div class="faq-list">{items}</div>')


def section(icon, title, inner_html):
    return f'''
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">{icon}</span> {title}</h2>
        {inner_html}
      </section>
    '''

def long_description_block(service):
    ld = service.get("longDescription")
    if not ld:
        return ""
    content = t(ld)
    return f'''
      <section class="service-section service-section--longdesc">
        {content}
      </section>
    '''


def related_grid(service, services_by_slug):
    related_ids = service.get("relatedServices") or []
    related = [services_by_slug[r] for r in related_ids if r in services_by_slug]
    if not related:
        return "", True
    cards = "".join(
        f'''
      <a class="service-card" href="{r["slug"]}.html">
        <div class="service-card__name">{esc(t(r.get("name")))}</div>
        <div class="service-card__desc">{esc(t(r.get("shortDescription")))}</div>
        <div class="service-card__arrow">विवरण देखें &rarr;</div>
      </a>'''
        for r in related
    )
    return cards, False


def build_page(service, category, services_by_slug):
    slug = service.get("slug") or service.get("id")
    name = t(service.get("name"))
    summary = t(service.get("shortDescription"))
    meta_desc = build_meta_description(name, summary)
    title_with_brand = f"{name} — {BRAND_HI}"
    title = title_with_brand if len(title_with_brand) <= 60 else name
    canonical_url = f"{BASE_URL}/service/{slug}.html"

    official_links = service.get("officialLinks") or []
    primary_url = (
        (service.get("applyOnline") or {}).get("url")
        or (official_links[0].get("url") if official_links else None)
        or "#"
    )

    cat_crumb = ""
    if category:
        cat_href = f'../category/{category["slug"]}.html'
        cat_crumb = f'<a href="{cat_href}">{esc(category["icon"])} {esc(t(category.get("name")))}</a><span class="sep">/</span>'

    hero_badge = ""
    if category:
        hero_badge = f'<span class="service-hero__badge">{esc(category["icon"])} {esc(t(category.get("name")))}</span>'

    dept_html = ""
    if service.get("departmentLabel"):
        dept_html = f'<p class="service-hero__dept mono">{esc(t(service.get("departmentLabel")))}</p>'

    track_btn = ""
    ts = service.get("trackStatus")
    if ts:
        track_btn = f'<a class="btn btn--outline" href="{esc(ts.get("url", "#"))}" target="_blank" rel="noopener">स्थिति जांचें</a>'

    blocks = "".join(
        filter(
            None,
            [
                long_description_block(service),
                official_links_block(service),
                apply_online_block(service),
                download_form_block(service),
                track_status_block(service),
                helpline_block(service),
                documents_block(service),
                eligibility_block(service),
                fees_block(service),
                timeline_block(service),
                faqs_block(service),
            ],
        )
    )
    if not blocks:
        blocks = '<p class="empty-state">इस सेवा का विवरण जल्द जोड़ा जाएगा।</p>'

    related_html, related_hidden = related_grid(service, services_by_slug)

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)

    official_links_sameas = ""
    if official_links and official_links[0].get("url"):
        urls_json = json.dumps([l.get("url") for l in official_links if l.get("url")], ensure_ascii=False)
        official_links_sameas = f',\n          "sameAs": {urls_json}'

    breadcrumb_schema_cat = ""
    if category:
        cat_url = f'{BASE_URL}/category/{category["slug"]}.html'
        breadcrumb_schema_cat = f''',
            {{
              "@type": "ListItem",
              "position": 2,
              "name": {json.dumps(t(category.get("name")), ensure_ascii=False)},
              "item": {json.dumps(cat_url, ensure_ascii=False)}
            }}'''

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "GovernmentService",
          "name": {json.dumps(name, ensure_ascii=False)},
          "description": {json.dumps(summary, ensure_ascii=False)},
          "url": {json.dumps(canonical_url, ensure_ascii=False)},
          "serviceType": {json.dumps(name, ensure_ascii=False)},
          "provider": {{ "@type": "GovernmentOrganization", "name": "Government of India" }}{official_links_sameas}
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "{BASE_URL}/index.html"
            }}{breadcrumb_schema_cat},
            {{
              "@type": "ListItem",
              "position": {3 if category else 2},
              "name": {json.dumps(name, ensure_ascii=False)},
              "item": {json.dumps(canonical_url, ensure_ascii=False)}
            }}
          ]
        }}
      ]
    }}'''

    project_report_cta = PROJECT_REPORT_CTA_HTML if slug in PROJECT_REPORT_CTA_SLUGS else ""

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
  <meta property="og:title" content="{esc(title)}" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(title)}" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(title)}</title>

  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module15.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />
  <script type="application/ld+json" id="service-schema">{schema}</script>
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
      {cat_crumb}
      <span class="current">{esc(name)}</span>
    </nav>

    <section class="service-hero" id="service-hero">
      {hero_badge}
      <h1 class="service-hero__title">{esc(name)}</h1>
      {dept_html}
      <p class="service-hero__desc">{esc(summary)}</p>
      <div class="service-hero__actions">
        <a class="btn btn--primary" href="{esc(primary_url)}" target="_blank" rel="noopener">आवेदन करें / आधिकारिक साइट</a>
        {track_btn}
      </div>
      <div id="svc-share-row"></div>
    </section>

    <div class="tricolor-rule" aria-hidden="true"></div>

{project_report_cta}
    <div id="service-sections">
      {blocks}
    </div>

    <div class="ad-slot" aria-hidden="true"><span data-i18n="ad_slot_label">Advertisement</span></div>

    <section class="service-section" id="related-section" {"hidden" if related_hidden else ""}>
      <h2 class="service-section__title"><span class="icon">🔗</span> संबंधित सेवाएं</h2>
      <div class="related-grid" id="related-grid">{related_html}</div>
    </section>

    <div id="subscribe-widget" data-service-id="{esc(slug)}"></div>

    <section class="service-section" id="comments-section">
      <h2 class="service-section__title"><span class="icon">💬</span> <span data-i18n="comments_title">Questions &amp; Comments</span></h2>
      <p class="comments-note" data-i18n="comments_note">This is a public discussion for this service — not official support. For account-specific help, use the helpline above.</p>

      <form id="comment-form" class="comment-form">
        <div class="comment-form__row">
          <label for="comment-name" class="visually-hidden" data-i18n="comments_name_label">Your name</label>
          <input type="text" id="comment-name" maxlength="80" data-i18n-placeholder="comments_name_placeholder" placeholder="Your name" required />
        </div>
        <div class="comment-form__row">
          <label for="comment-message" class="visually-hidden" data-i18n="comments_message_label">Your question or comment</label>
          <textarea id="comment-message" maxlength="2000" rows="3" data-i18n-placeholder="comments_message_placeholder" placeholder="Ask a question or share your experience with this service..." required></textarea>
        </div>
        <div class="comment-form__actions">
          <span class="comment-form__status" id="comment-form-status"></span>
          <button type="submit" class="btn-primary" id="comment-submit" data-i18n="comments_submit">Post</button>
        </div>
      </form>

      <div id="comments-list" class="comments-list">
        <p class="loading" data-i18n="comments_loading">Loading comments…</p>
      </div>
    </section>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/service.js"></script>
  <script src="../assets/js/comments.js"></script>
  <script src="../assets/js/subscribe.js"></script>
</body>
</html>
'''


def main():
    services = json.loads(SERVICES_JSON.read_text(encoding="utf-8"))
    categories = json.loads(CATEGORIES_JSON.read_text(encoding="utf-8"))
    categories_by_slug = {c["slug"]: c for c in categories}
    services_by_slug = {(s.get("slug") or s.get("id")): s for s in services}

    OUT_DIR.mkdir(exist_ok=True)
    written = []
    for service in services:
        slug = service.get("slug") or service.get("id")
        category = categories_by_slug.get(service.get("category"))
        page_html = build_page(service, category, services_by_slug)
        out_path = OUT_DIR / f"{slug}.html"
        out_path.write_text(page_html, encoding="utf-8")
        written.append(str(out_path.relative_to(REPO_ROOT)))

    print(f"Generated {len(written)} static service pages in service/")
    for w in written[:5]:
        print(f"  - {w}")
    if len(written) > 5:
        print(f"  ... and {len(written) - 5} more")


if __name__ == "__main__":
    main()
