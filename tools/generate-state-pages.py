#!/usr/bin/env python3
"""
generate-state-pages.py
========================
Session 4 of the Ahrefs SEO fix (companion to generate-state-service-pages.py,
which does the equivalent job for the individual state-scheme detail pages).

Until now all 20 states shared one file, states/state.html, with content
injected by JS based on a ?state= query string — a crawler that doesn't
run JS saw an identical title ("राज्यवार लोकप्रिय सेवाएं — SarkariSewa
Portal"), identical meta description, and no H1 for all 20 states. This
is the state-level version of the exact problem Session 2 fixed for
services.

This script reads data/states.json and writes one real static file per
state to states/<slug>.html, with a unique title, meta description,
canonical URL, H1, Open Graph tags, ItemList + BreadcrumbList JSON-LD,
and the full state's service list (linking to the static pages written
by generate-state-service-pages.py) already baked into the HTML.

Run from the repo root or anywhere; it locates the repo root from its
own path. Run generate-state-service-pages.py FIRST (or at least before
relying on the links this script emits), since this script assumes a
static page already exists at service/<id>.html for every service it
lists:
    python3 tools/generate-state-service-pages.py
    python3 tools/generate-state-pages.py
"""
import html
import json
import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STATES_JSON = REPO_ROOT / "data" / "states.json"
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "states"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_NAME = "SarkariSewa India"
ROOT = "../"  # states/<slug>.html is one level deep, same as states/state.html

HREF_RE = re.compile(r'href="([^"]*)"')


def rewrite_links(partial_html: str, root: str) -> str:
    def repl(m):
        href = m.group(1)
        if re.match(r"^(https?:)?//", href) or href.startswith(("#", "mailto:", "tel:")):
            return m.group(0)
        return f'href="{root}{href}"'

    return HREF_RE.sub(repl, partial_html)


def t(obj, lang="hi"):
    if obj is None:
        return ""
    if isinstance(obj, str):
        return obj
    return obj.get(lang) or obj.get("en") or obj.get("hi") or ""


def esc(s: str) -> str:
    return html.escape(s, quote=True)


def build_meta_description(intro: str) -> str:
    desc = (intro or "").strip()
    if len(desc) < 100:
        desc = (desc + " सभी सरकारी योजनाओं, प्रमाण पत्रों, आधिकारिक पोर्टल और आवेदन प्रक्रियाओं की पूरी जानकारी।").strip()
    if len(desc) > 158:
        desc = desc[:155].rsplit(" ", 1)[0] + "..."
    return desc


def build_page(state, all_states):
    slug = state["slug"]
    name = t(state.get("name"))
    intro = t(state.get("intro"))
    meta_desc = build_meta_description(intro)
    title = f"{name} — सरकारी सेवाएं व योजनाएं | {BRAND_NAME}"
    canonical_url = f"{BASE_URL}/states/{slug}.html"
    services = state.get("services", [])

    cards = "".join(
        f'''
      <a class="service-card" href="../service/{esc(svc["id"])}.html">
        <div class="service-card__name">{esc(t(svc.get("name")))}</div>
        <div class="service-card__desc">{esc(t(svc.get("shortDescription")))}</div>
        <div class="service-card__arrow">गाइड, फीस व दस्तावेज़ देखें &rarr;</div>
      </a>'''
        for svc in services
    )

    portal = state.get("officialPortal") or {}
    portal_block = ""
    if portal.get("url"):
        portal_block = f'''
    <section class="state-official-portal">
      <h2>{esc(name)} सरकार — आधिकारिक पोर्टल</h2>
      <p>ऊपर दी गई सभी सेवाओं के लिए मूल आधिकारिक पोर्टल यही है। अगर किसी सेवा के लिए अलग विभागीय पोर्टल है, तो उसका सीधा लिंक उस सेवा कार्ड में ऊपर दिया गया है।</p>
      <a class="btn btn-primary" href="{esc(portal["url"])}" target="_blank" rel="noopener noreferrer">{esc(t(portal.get("label")))}</a>
    </section>'''

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)

    item_list_elements = ",\n            ".join(
        f'''{{
              "@type": "ListItem",
              "position": {i + 1},
              "name": {json.dumps(t(svc.get("name")), ensure_ascii=False)},
              "url": {json.dumps(f"{BASE_URL}/service/{svc['id']}.html", ensure_ascii=False)}
            }}'''
        for i, svc in enumerate(services)
    )

    schema = f'''{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "ItemList",
          "name": {json.dumps(f"{name} — लोकप्रिय राज्य सेवाएं", ensure_ascii=False)},
          "itemListElement": [
            {item_list_elements}
          ]
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{BASE_URL}/index.html" }},
            {{ "@type": "ListItem", "position": 2, "name": "State-wise Services", "item": "{BASE_URL}/states/index.html" }},
            {{ "@type": "ListItem", "position": 3, "name": {json.dumps(name, ensure_ascii=False)}, "item": {json.dumps(canonical_url, ensure_ascii=False)} }}
          ]
        }}
      ]
    }}'''

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">
  <link rel="manifest" href="../manifest.json">
  <link rel="canonical" href="{esc(canonical_url)}" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta property="og:title" content="{esc(title)}" />
  <meta property="og:description" content="{esc(meta_desc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta name="twitter:card" content="summary_large_image">
<title>{esc(title)}</title>
<meta name="description" content="{esc(meta_desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/module7.css">
<link rel="stylesheet" href="../assets/css/module2.css">
<link rel="stylesheet" href="../assets/css/module18.css">
<script type="application/ld+json" id="state-detail-schema">{schema}</script>
</head>
<body>
<script>window.SS_ROOT = "../";</script>

<div id="site-header">
{header_html.strip()}
</div>

<main class="container">
  <nav class="breadcrumb" aria-label="Breadcrumb" id="state-breadcrumb">
    <a href="../index.html">Home</a><span class="sep">/</span><a href="index.html">State-wise Services</a><span class="sep">/</span><span class="current">{esc(name)}</span>
  </nav>

  <div class="tricolor-rule" aria-hidden="true"></div>

  <section class="page-hero state-hero" id="state-hero">
    <div class="state-hero__icon" aria-hidden="true">{esc(state.get("icon") or "📍")}</div>
    <h1 class="page-hero__title">{esc(name)} — लोकप्रिय राज्य सेवाएं</h1>
    <p class="page-hero__desc">{esc(intro)}</p>
    <p class="state-hero__meta mono">राजधानी: {esc(t(state.get("capital")))} · {len(services)} सेवाएं</p>
  </section>

  <div class="state-services-list" id="state-services-list">
    <div class="service-grid">{cards}</div>
  </div>

  <!-- Official state portal link is placed here deliberately — after all
       the service content — so visitors read through the page first
       instead of bouncing straight to an external site. -->
  {portal_block}
</main>

<div id="site-footer">
{footer_html.strip()}
</div>

<script src="../assets/js/main.js"></script>
<script src="../assets/js/consent.js"></script>
<script src="../assets/js/i18n-helper.js"></script>
</body>
</html>
'''


def main():
    import subprocess
    script = REPO_ROOT / "tools" / "upgrade_all_state_hub_pages.py"
    if script.exists():
        subprocess.run(["python", str(script)], check=True)
    else:
        states_raw = json.loads(STATES_JSON.read_text(encoding="utf-8"))
        states = states_raw if isinstance(states_raw, list) else states_raw.get("states", [])

        OUT_DIR.mkdir(exist_ok=True)
        written = []
        for state in states:
            page_html = build_page(state, states)
            out_path = OUT_DIR / f"{state['slug']}.html"
            out_path.write_text(page_html, encoding="utf-8")
            written.append(str(out_path.relative_to(REPO_ROOT)))

        print(f"Generated {len(written)} static state pages in states/")

if __name__ == "__main__":
    main()
