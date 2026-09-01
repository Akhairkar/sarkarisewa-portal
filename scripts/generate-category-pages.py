#!/usr/bin/env python3
"""
generate-category-pages.py
===========================
Session 3 of the Ahrefs SEO fix (companion to generate-service-pages.py
and generate-blog-pages.py).

Until now all 6 categories were served by the same single file,
category/category.html, differentiated only by a ?cat= query string and
filled in by JavaScript. A crawler that doesn't run JS sees 6 identical,
near-empty shells — the same "Duplicate pages without canonical" /
"H1 tag missing" / "Low word count" pattern fixed for services and blog
posts in this same session.

This script reads data/categories.json + data/services.json and writes
one real static file per category to category/<slug>.html, with a
unique title, meta description, canonical URL, H1, full service grid
(linking to each service's real static page via the same ssServiceHref
logic used site-wide), and ItemList + BreadcrumbList JSON-LD — mirroring
what assets/js/category.js renders client-side.

The generated page's <body data-category="slug"> attribute tells
category.js (already updated this session) which category to hydrate —
no query string needed. category.js still runs after load and will
ADD any services published later from the admin dashboard (Supabase,
not in data/services.json) on top of the baked-in JSON ones — same
"static core + JS top-up" pattern as service and blog pages.

The old category/category.html?cat= route is left in place and still
works (for any as-yet-unmigrated inbound link), but every internal link
in this codebase has been updated to point at the new static URLs.

Run from the repo root or anywhere; it locates the repo root from its
own path:
    python3 tools/generate-category-pages.py
"""
import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CATEGORIES_JSON = REPO_ROOT / "data" / "categories.json"
SERVICES_JSON = REPO_ROOT / "data" / "services.json"
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "category"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_NAME = "SarkariSewa India"
ROOT = "../"  # category/<slug>.html is one level deep, same as category/category.html

import importlib.util

_svc_mod_spec = importlib.util.spec_from_file_location(
    "generate_service_pages", REPO_ROOT / "tools" / "generate-service-pages.py"
)
_svc_mod = importlib.util.module_from_spec(_svc_mod_spec)
_svc_mod_spec.loader.exec_module(_svc_mod)
t = _svc_mod.t
esc = _svc_mod.esc
rewrite_links = _svc_mod.rewrite_links


def service_href(svc):
    slug = svc.get("slug") or svc.get("id")
    if slug and slug.startswith("mpbcdc-"):
        return f"../{slug}.html"
    return f"../service/{slug}.html" if svc.get("source") == "json" else f"../service/service.html?id={slug}"


def service_canonical(svc):
    slug = svc.get("slug") or svc.get("id")
    if slug and slug.startswith("mpbcdc-"):
        return f"{BASE_URL}/{slug}.html"
    if svc.get("source") == "json":
        return f"{BASE_URL}/service/{slug}.html"
    return f"{BASE_URL}/service/service.html?id={slug}"


def build_meta_description(desc: str, name: str, count: int) -> str:
    d = (desc or "").strip()
    if len(d) < 100:
        d = (d + f" {name} से जुड़ी {count} सरकारी सेवाओं की पूरी सूची, फीस, दस्तावेज़ और आधिकारिक लिंक के साथ।").strip()
    if len(d) > 158:
        d = d[:155].rsplit(" ", 1)[0] + "..."
    return d


def build_page(category, services_in_category):
    slug = category["slug"]
    name = t(category.get("name"))
    icon = category.get("icon", "")
    desc = t(category.get("description")) or f"{name} government services on SarkariSewa India."
    count = len(services_in_category)
    meta_desc = build_meta_description(desc, name, count)
    page_title = f"{name} — सरकारी सेवाएं | {BRAND_NAME}"
    canonical_url = f"{BASE_URL}/category/{slug}.html"

    if services_in_category:
        cards = "".join(
            f'''
      <a class="service-card" href="{service_href(s)}">
        <div class="service-card__name">{esc(t(s.get("name")))}</div>
        <div class="service-card__desc">{esc(t(s.get("shortDescription")))}</div>
        <div class="service-card__arrow">विवरण देखें &rarr;</div>
      </a>'''
            for s in services_in_category
        )
    else:
        cards = '<p class="empty-state">No services published in this category yet. Check back soon.</p>'

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)

    item_list = ",\n            ".join(
        f'''{{
              "@type": "ListItem",
              "position": {i + 1},
              "name": {json.dumps(t(s.get("name")), ensure_ascii=False)},
              "url": {json.dumps(service_canonical(s), ensure_ascii=False)}
            }}'''
        for i, s in enumerate(services_in_category)
    )

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "ItemList",
          "name": {json.dumps(name, ensure_ascii=False)},
          "description": {json.dumps(desc, ensure_ascii=False)},
          "numberOfItems": {count},
          "itemListElement": [
            {item_list}
          ]
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "{BASE_URL}/index.html"
            }},
            {{
              "@type": "ListItem",
              "position": 2,
              "name": {json.dumps(name, ensure_ascii=False)},
              "item": {json.dumps(canonical_url, ensure_ascii=False)}
            }}
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
  <meta property="og:title" content="{esc(page_title)}" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(page_title)}" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(page_title)}</title>

  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <script type="application/ld+json" id="category-schema">{schema}</script>
</head>
<body data-category="{esc(slug)}">
  <script>window.SS_ROOT = "../";</script>

  <div id="site-header">
{header_html.strip()}
  </div>

  <main class="container">
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <span class="current">{esc(name)}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <section class="category-hero" id="category-hero">
      <div class="category-hero__icon" aria-hidden="true">{esc(icon)}</div>
      <h1 class="category-hero__title">{esc(name)}</h1>
      <p class="category-hero__desc">{esc(desc)}</p>
      <p class="category-hero__count">{count} {"सेवा" if count == 1 else "सेवाएं"}</p>
    </section>

    <section aria-labelledby="services-heading">
      <h2 class="sr-only" id="services-heading">Services in this category</h2>
      <div class="service-grid" id="service-grid">{cards}</div>
    </section>

    <div class="ad-slot" aria-hidden="true"><span data-i18n="ad_slot_label">Advertisement</span></div>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/category.js"></script>
</body>
</html>
'''


def main():
    import subprocess
    script = REPO_ROOT / "tools" / "upgrade_all_category_pages.py"
    if script.exists():
        subprocess.run(["python", str(script)], check=True)
    else:
        categories = json.loads(CATEGORIES_JSON.read_text(encoding="utf-8"))
        services = json.loads(SERVICES_JSON.read_text(encoding="utf-8"))
        services = [{**s, "source": "json"} for s in services]

        OUT_DIR.mkdir(exist_ok=True)
        written = []
        for category in categories:
            services_in_category = [s for s in services if s.get("category") == category["slug"]]
            page_html = build_page(category, services_in_category)
            out_path = OUT_DIR / f"{category['slug']}.html"
            out_path.write_text(page_html, encoding="utf-8")
            written.append(str(out_path.relative_to(REPO_ROOT)))

        print(f"Generated {len(written)} static category pages in category/")

if __name__ == "__main__":
    main()
