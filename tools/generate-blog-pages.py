#!/usr/bin/env python3
"""
generate-blog-pages.py
=======================
Session 3 of the Ahrefs SEO fix (companion to generate-service-pages.py
from Session 2).

Until now every blog post was served by the same single file,
blog/post.html, with the actual content injected by JavaScript based on
a ?slug= query string. A crawler that doesn't run JS sees an identical,
near-empty shell for all posts — the same "H1 tag missing", "Meta
description too short", "Duplicate pages without canonical" and "Low
word count" pattern Session 2 fixed for services.

This script reads data/blog-posts.json (+ data/categories.json and
data/services.json for the related-service card) and writes one real
static file per post to blog/<slug>.html, with a unique title, meta
description, canonical URL, H1, Open Graph / Twitter card tags,
BlogPosting + BreadcrumbList JSON-LD, and the full post body already
baked into the HTML — mirroring exactly what assets/js/blog-post.js
renders client-side, in Hindi (the site's default language) with an
English fallback for any missing string.

The same JS scripts are still included at the bottom of each generated
page, so once loaded they hydrate the page (share buttons, live
language toggle) — same content, so it's a harmless no-op for the
baked-in parts, but crawlers reading raw HTML now see everything
immediately.

Posts added later from the admin dashboard (Supabase blog_posts table,
not in data/blog-posts.json) are NOT covered by this script — they keep
using the original dynamic blog/post.html?slug= route, exactly like
Supabase-added services. Re-run this script whenever data/blog-posts.json
changes.

Run from the repo root or anywhere; it locates the repo root from its
own path:
    python3 tools/generate-blog-pages.py
"""
import html
import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
POSTS_JSON = REPO_ROOT / "data" / "blog-posts.json"
CATEGORIES_JSON = REPO_ROOT / "data" / "categories.json"
SERVICES_JSON = REPO_ROOT / "data" / "services.json"
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "blog"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_HI = "सरकारीसेवा पोर्टल"
ROOT = "../"  # blog/<slug>.html is one level deep, same as blog/post.html

# Reuse the same helpers Session 2 wrote, so both scripts stay in sync.
import importlib.util

_svc_mod_spec = importlib.util.spec_from_file_location(
    "generate_service_pages", REPO_ROOT / "tools" / "generate-service-pages.py"
)
_svc_mod = importlib.util.module_from_spec(_svc_mod_spec)
_svc_mod_spec.loader.exec_module(_svc_mod)
t = _svc_mod.t
esc = _svc_mod.esc
rewrite_links = _svc_mod.rewrite_links


def build_meta_description(excerpt: str) -> str:
    desc = (excerpt or "").strip()
    if len(desc) > 158:
        desc = desc[:155].rsplit(" ", 1)[0] + "..."
    return desc


def format_date_hi(iso: str) -> str:
    months = [
        "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
        "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
    ]
    try:
        y, m, d = iso.split("-")
        return f"{int(d)} {months[int(m) - 1]} {y}"
    except Exception:
        return iso


def related_service_block(post, services_by_slug):
    rel_id = post.get("relatedServiceId")
    if not rel_id or rel_id not in services_by_slug:
        return "", True
    svc = services_by_slug[rel_id]
    slug = svc.get("slug") or svc.get("id")
    href = f"../service/{slug}.html" if svc.get("source", "json") == "json" else f"../service/service.html?id={slug}"
    return (
        f'''<p class="blog-post-related__label">संबंधित सेवा</p>
      <a class="service-card" href="{href}">
        <div class="service-card__name">{esc(t(svc.get("name")))}</div>
        <div class="service-card__desc">{esc(t(svc.get("shortDescription")))}</div>
        <div class="service-card__arrow">विवरण देखें &rarr;</div>
      </a>''',
        False,
    )


def build_page(post, category, services_by_slug):
    slug = post["slug"]
    title = t(post.get("title"))
    excerpt = t(post.get("excerpt")) or ""
    meta_desc = build_meta_description(excerpt)
    title_with_brand = f"{title} — {BRAND_HI} ब्लॉग"
    if len(title_with_brand) <= 60:
        page_title = title_with_brand
    elif len(title) <= 60:
        page_title = title
    else:
        page_title = title[:57].rsplit(" ", 1)[0] + "..."
    canonical_url = f"{BASE_URL}/blog/{slug}.html"
    body_html = t(post.get("body"))
    date_display = format_date_hi(post.get("datePublished", ""))

    cat_crumb = ""
    hero_badge = ""
    if category:
        cat_href = f'../category/{category["slug"]}.html'
        cat_crumb = f'<a href="{cat_href}">{esc(category.get("icon", ""))} {esc(t(category.get("name")))}</a><span class="sep">/</span>'
        hero_badge = f'<span class="service-hero__badge">{esc(category.get("icon", ""))} {esc(t(category.get("name")))}</span>'

    related_html, related_hidden = related_service_block(post, services_by_slug)

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)

    breadcrumb_schema_cat = ""
    if category:
        cat_url = f'{BASE_URL}/category/{category["slug"]}.html'
        breadcrumb_schema_cat = f''',
            {{
              "@type": "ListItem",
              "position": 2,
              "name": {json.dumps("Blog", ensure_ascii=False)},
              "item": {json.dumps(f"{BASE_URL}/blog/index.html", ensure_ascii=False)}
            }}'''

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "BlogPosting",
          "headline": {json.dumps(title, ensure_ascii=False)},
          "description": {json.dumps(excerpt, ensure_ascii=False)},
          "datePublished": {json.dumps(post.get("datePublished", ""), ensure_ascii=False)},
          "url": {json.dumps(canonical_url, ensure_ascii=False)},
          "author": {{ "@type": "Organization", "name": "SarkariSewa Portal" }}
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
              "name": {json.dumps(title, ensure_ascii=False)},
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
  <meta property="og:title" content="{esc(title)} — {BRAND_HI} ब्लॉग" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(title)} — {BRAND_HI} ब्लॉग" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(page_title)}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <link rel="stylesheet" href="../assets/css/module7.css" />
  <link rel="stylesheet" href="../assets/css/module9.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />
  <script type="application/ld+json" id="blog-post-schema">{schema}</script>
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
      <a href="index.html">Blog</a>
      <span class="sep">/</span>
      <span class="current">{esc(title)}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <article>
      <header class="blog-post-hero" id="blog-post-hero">
        {hero_badge}
        <h1 class="blog-post-hero__title">{esc(title)}</h1>
        <p class="blog-post-hero__date">प्रकाशित {esc(date_display)}</p>
        <div id="blog-share-row"></div>
      </header>

      <div class="blog-post-body" id="blog-post-body">
        {body_html}
      </div>

      <section class="blog-post-related" id="blog-post-related" {"hidden" if related_hidden else ""}>
        {related_html}
      </section>
    </article>

    <p class="blog-post-back">
      <a href="index.html">← Back to Blog</a>
    </p>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/services-data.js"></script>
  <script src="../assets/js/blog-post.js"></script>
</body>
</html>
'''


def main():
    posts = json.loads(POSTS_JSON.read_text(encoding="utf-8"))
    categories = json.loads(CATEGORIES_JSON.read_text(encoding="utf-8"))
    services = json.loads(SERVICES_JSON.read_text(encoding="utf-8"))
    categories_by_slug = {c["slug"]: c for c in categories}
    services_by_slug = {(s.get("slug") or s.get("id")): {**s, "source": "json"} for s in services}

    OUT_DIR.mkdir(exist_ok=True)
    written = []
    for post in posts:
        category = categories_by_slug.get(post.get("category"))
        page_html = build_page(post, category, services_by_slug)
        out_path = OUT_DIR / f"{post['slug']}.html"
        out_path.write_text(page_html, encoding="utf-8")
        written.append(str(out_path.relative_to(REPO_ROOT)))

    print(f"Generated {len(written)} static blog pages in blog/")
    for w in written:
        print(f"  - {w}")


if __name__ == "__main__":
    main()
