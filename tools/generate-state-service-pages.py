#!/usr/bin/env python3
"""
generate-state-service-pages.py
================================
Session 4 of the Ahrefs SEO fix (companion to generate-service-pages.py /
generate-blog-pages.py / generate-category-pages.py).

data/states.json holds 102 state-specific service/scheme entries (e.g.
Maharashtra's "Ladki Bahin Yojana", Delhi's "Caste Certificate", ...).
Until now every one of these was served by the shared dynamic shell
service/service.html?id=<id>, so a crawler that doesn't run JS saw the
same near-empty page (generic title "Service — SarkariSewa Portal",
generic meta description, no H1) for all 102 of them — a large
duplicate-content/thin-content block, on top of the same problem
Session 2 already fixed for the 93 national services.

This script writes one real static file per state-service entry to
service/<id>.html (ids are already state-prefixed, e.g.
"mh-ladki-bahin-yojana", so there is zero filename collision with the
93 national service pages already in that folder — verified against
data/services.json before every run).

Run from the repo root or anywhere; it locates the repo root from its
own path:
    python3 tools/generate-state-service-pages.py
"""
import html
import json
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STATES_JSON = REPO_ROOT / "data" / "states.json"
SERVICES_JSON = REPO_ROOT / "data" / "services.json"
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "service"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_HI = "सरकारीसेवा पोर्टल"
ROOT = "../"  # service/<id>.html is one level deep, same as service/<slug>.html

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


def section(icon, title, inner_html):
    return f'''
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">{icon}</span> {title}</h2>
        {inner_html}
      </section>
    '''


def build_meta_description(summary: str) -> str:
    desc = summary.strip()
    if len(desc) > 158:
        desc = desc[:155].rsplit(" ", 1)[0] + "..."
    return desc


def department_block(svc):
    dept = t(svc.get("department"))
    if not dept:
        return ""
    return f'<p class="service-hero__dept mono">{esc(dept)}</p>'


def official_link_block(svc):
    link = svc.get("officialLink")
    if not link or not link.get("url"):
        return ""
    label = t(link.get("label")) or "आधिकारिक पोर्टल"
    items = f'''
      <li class="link-list__item">
        <span class="link-list__label">{esc(label)}</span>
        <a class="link-list__go" href="{esc(link.get("url", "#"))}" target="_blank" rel="noopener">Visit &rarr;</a>
      </li>'''
    return section("🔗", "आधिकारिक लिंक", f'<ul class="link-list">{items}</ul>')


def documents_block(svc):
    docs = svc.get("documentsRequired") or []
    if not docs:
        return ""
    items = "".join(f"<li>{esc(t(d))}</li>" for d in docs)
    return section("📋", "ज़रूरी दस्तावेज़", f'<ul class="check-list">{items}</ul>')


def eligibility_block(svc):
    elig = svc.get("eligibility") or []
    if not elig:
        return ""
    items = "".join(f"<li>{esc(t(e))}</li>" for e in elig)
    return section("✅", "पात्रता", f'<ul class="check-list">{items}</ul>')


def fees_block(svc):
    fees = t(svc.get("fees"))
    if not fees:
        return ""
    return section("💵", "शुल्क", f'<table class="fees-table"><tbody><tr><td>{esc(fees)}</td></tr></tbody></table>')


def processing_time_block(svc):
    pt = t(svc.get("processingTime"))
    if not pt:
        return ""
    return section("⏱️", "प्रोसेसिंग समय", f"<p>{esc(pt)}</p>")


def build_page(svc, state):
    slug = svc["id"]
    name = t(svc.get("name"))
    summary = t(svc.get("shortDescription"))
    meta_desc = build_meta_description(summary)
    title_with_brand = f"{name} — {BRAND_HI}"
    title = title_with_brand if len(title_with_brand) <= 60 else name
    canonical_url = f"{BASE_URL}/service/{slug}.html"
    state_url = f"{BASE_URL}/states/{state['slug']}.html"
    state_name = t(state.get("name"))

    link = svc.get("officialLink") or {}
    primary_url = link.get("url") or "#"

    blocks = "".join(
        filter(
            None,
            [
                official_link_block(svc),
                documents_block(svc),
                eligibility_block(svc),
                fees_block(svc),
                processing_time_block(svc),
            ],
        )
    )
    if not blocks:
        blocks = '<p class="empty-state">इस सेवा का विवरण जल्द जोड़ा जाएगा।</p>'

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)

    official_sameas = ""
    if link.get("url"):
        official_sameas = f',\n          "sameAs": {json.dumps([link["url"]], ensure_ascii=False)}'

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "GovernmentService",
          "name": {json.dumps(name, ensure_ascii=False)},
          "description": {json.dumps(summary, ensure_ascii=False)},
          "url": {json.dumps(canonical_url, ensure_ascii=False)},
          "serviceType": {json.dumps(name, ensure_ascii=False)},
          "areaServed": {json.dumps(state_name, ensure_ascii=False)},
          "provider": {{ "@type": "GovernmentOrganization", "name": {json.dumps(t(svc.get("department")) or state_name, ensure_ascii=False)} }}{official_sameas}
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{BASE_URL}/index.html" }},
            {{ "@type": "ListItem", "position": 2, "name": "State-wise Services", "item": "{BASE_URL}/states/index.html" }},
            {{ "@type": "ListItem", "position": 3, "name": {json.dumps(state_name, ensure_ascii=False)}, "item": {json.dumps(state_url, ensure_ascii=False)} }},
            {{ "@type": "ListItem", "position": 4, "name": {json.dumps(name, ensure_ascii=False)}, "item": {json.dumps(canonical_url, ensure_ascii=False)} }}
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
      <a href="../states/index.html">राज्यवार सेवाएं</a>
      <span class="sep">/</span>
      <a href="../states/{esc(state['slug'])}.html">{esc(state_name)}</a>
      <span class="sep">/</span>
      <span class="current">{esc(name)}</span>
    </nav>

    <section class="service-hero" id="service-hero">
      <span class="service-hero__badge">{esc(state.get("icon") or "📍")} {esc(state_name)}</span>
      <h1 class="service-hero__title">{esc(name)}</h1>
      {department_block(svc)}
      <p class="service-hero__desc">{esc(summary)}</p>
      <div class="service-hero__actions">
        <a class="btn btn--primary" href="{esc(primary_url)}" target="_blank" rel="noopener">आवेदन करें / आधिकारिक साइट</a>
      </div>
    </section>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <div id="service-sections">
      {blocks}
    </div>

    <div class="ad-slot" aria-hidden="true"><span data-i18n="ad_slot_label">Advertisement</span></div>

    <section class="service-section">
      <h2 class="service-section__title"><span class="icon">📍</span> {esc(state_name)} की अन्य लोकप्रिय सेवाएं</h2>
      <p><a href="../states/{esc(state['slug'])}.html">← {esc(state_name)} की सभी लोकप्रिय सेवाएं देखें</a></p>
    </section>
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
    states_raw = json.loads(STATES_JSON.read_text(encoding="utf-8"))
    states = states_raw if isinstance(states_raw, list) else states_raw.get("states", [])

    national_services = json.loads(SERVICES_JSON.read_text(encoding="utf-8"))
    national_ids = {(s.get("slug") or s.get("id")) for s in national_services}

    OUT_DIR.mkdir(exist_ok=True)
    written = []
    skipped = []
    for state in states:
        for svc in state.get("services", []):
            slug = svc["id"]
            if slug in national_ids:
                # Should never happen (verified 0 overlap at design time), but
                # guard against silently overwriting a national service page.
                skipped.append(slug)
                continue
            page_html = build_page(svc, state)
            out_path = OUT_DIR / f"{slug}.html"
            out_path.write_text(page_html, encoding="utf-8")
            written.append(str(out_path.relative_to(REPO_ROOT)))

    print(f"Generated {len(written)} static state-service pages in service/")
    for w in written[:5]:
        print(f"  - {w}")
    if len(written) > 5:
        print(f"  ... and {len(written) - 5} more")
    if skipped:
        print(f"SKIPPED (id collision with a national service, not overwritten): {skipped}")


if __name__ == "__main__":
    main()
