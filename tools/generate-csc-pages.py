#!/usr/bin/env python3
"""
generate-csc-pages.py
======================
Module 18 — CSC directory static pages.

STATUS: standalone/ready, NOT yet wired into generate-sitemap.py or the
GitHub Actions daily workflow. Run it by hand whenever you're ready to
publish; see "WIRING IT IN LATER" at the bottom of this docstring for the
two small edits that plug it into the automated pipeline once you want
that.

WHY THIS EXISTS
----------------
csc/profile.html (one shared dynamic shell, ?id=<uuid>) has the exact
problem service/service.html, states/state.html and blog/post.html had
before Sessions 4–5: every centre shares one generic title/meta/H1 in the
raw HTML, real content only appears after JS runs, and not one of the
(currently 543, Maharashtra-only) centres is in sitemap.xml. This script
is the same fix already applied to services/states/blog, adapted for CSC
centres — which live in Supabase, not a local JSON file.

WORKS FOR ANY STATE — this isn't Maharashtra-specific. It fetches every
row in csc_centres regardless of the `state` column, so the day you (or a
VLE via csc/add.html) add a Gujarat or Karnataka centre, running this
script again picks it up automatically and writes its static page too.
Nothing here is hardcoded to Maharashtra.

WHAT IT DOES
-------------
1. Fetches every csc_centres row with status in ('unclaimed', 'verified')
   from Supabase via the public REST API (same anon key already used
   client-side in assets/js/supabase-client.js — safe, RLS-protected,
   read-only for this key).
2. For each row, writes csc/<slug>.html — slug = centre name + district,
   slugified, with the first 8 chars of the row's UUID appended so the
   filename is guaranteed unique and STABLE across re-runs (re-running
   this script regenerates the same filenames for the same rows, so old
   links/backlinks/sitemap entries don't silently break).
3. Each page gets a real unique <title>, meta description, canonical URL,
   H1, address/district/pincode/phone content, a WhatsApp link if a phone
   number is on file, LocalBusiness JSON-LD (verified centres only, same
   condition assets/js/csc-profile.js already uses), and a BreadcrumbList.
   Every page ALSO gets a "services typically available at a CSC" block
   (linked to the matching service pages already on this site) plus an
   explainer paragraph — this is what keeps 'unclaimed' rows (which have
   almost no unique data beyond name/address) from being thin content:
   without it, an unclaimed centre's page would be little more than a
   name and a pincode.
4. 'pending' and 'rejected' rows are skipped — never made public, same
   rule the site's own RLS policies already enforce for anonymous reads.

WHAT IT DELIBERATELY DOES NOT DO YET
--------------------------------------
- Does NOT touch assets/js/csc-directory.js's card links (still point at
  profile.html?id=...) — flipping those before the static pages exist
  would 404. Do that in the same commit you first run this script.
- Does NOT add a noindex tag to csc/profile.html or a redirect-to-static
  in csc-profile.js (the pattern used for service.html/state.html/
  blog/post.html) — same reasoning, do it together with the first run.
- Does NOT touch generate-sitemap.py or .github/workflows/regenerate-
  content.yml — see "WIRING IT IN LATER" below.

HOW TO RUN IT (whenever you're ready)
---------------------------------------
    python3 tools/generate-csc-pages.py

Safe to run repeatedly — it only ever writes inside csc/, never touches
anything else, and re-running with the same Supabase data reproduces the
exact same filenames (see slug scheme above).

WIRING IT IN LATER (do this once, the first time you actually run it)
-------------------------------------------------------------------------
1. generate-sitemap.py — add a block that fetches csc_centres the same
   way this script does and appends `{BASE_URL}/csc/<slug>.html` for
   each row (mirror the existing fetch_published_services() pattern).
2. .github/workflows/regenerate-content.yml — add a
   "Generate CSC pages" step calling this script, in the same spot the
   service/state/blog generator steps run, so every future centre
   (Maharashtra or otherwise, submitted via csc/add.html or claimed via
   csc/claim.html) gets its static page automatically within 24h without
   you touching HTML by hand — this is the "future ones go straight to
   static HTML" behaviour.
3. assets/js/csc-directory.js — change the card href from
   `profile.html?id=${c.id}` to the same slug function this script uses
   (duplicate build_slug() as a small JS helper, or simplest: fetch a
   `slug` column if you decide to store it on the row instead of deriving
   it — see NOTE ON SLUG STORAGE below).
4. csc/profile.html + assets/js/csc-profile.js — apply the same
   noindex-by-default + JS-redirect-to-static pattern already used in
   service/service.html + assets/js/service.js (Session 5). Keep the
   dynamic shell as the fallback for 'pending' rows and for any centre
   whose static page hasn't been generated yet (e.g. added minutes ago,
   before the next daily regen).

NOTE ON SLUG STORAGE
----------------------
This script derives the slug purely from name+district+id at build time
— it does not require a database migration. That's the simplest option
and is what's implemented below. If you'd rather have a permanent, DB-
stored `slug` column (nicer for claim.html to reference directly, avoids
recomputing), that's a one-line `alter table csc_centres add column if
not exists slug text` plus a backfill — not done here since it wasn't
asked for, but straightforward to add later if you want it.
"""
import html
import json
import re
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
HEADER_PARTIAL = REPO_ROOT / "partials" / "header.html"
FOOTER_PARTIAL = REPO_ROOT / "partials" / "footer.html"
OUT_DIR = REPO_ROOT / "csc"
BASE_URL = "https://sarkarisewaindia.com"
BRAND_HI = "सरकारीसेवा पोर्टल"
ROOT = "../"  # csc/<slug>.html is one level deep, same as csc/profile.html

# Same project + public anon key already used by assets/js/supabase-client.js
# and generate-sitemap.py — safe to read here, RLS still applies.
SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
SUPABASE_ANON_KEY = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6"
    "InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMy"
    "MTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"
)

HREF_RE = re.compile(r'href="([^"]*)"')


def rewrite_links(partial_html: str, root: str) -> str:
    def repl(m):
        href = m.group(1)
        if re.match(r"^(https?:)?//", href) or href.startswith(("#", "mailto:", "tel:")):
            return m.group(0)
        return f'href="{root}{href}"'

    return HREF_RE.sub(repl, partial_html)


def esc(s: str) -> str:
    return html.escape(s or "", quote=True)


def slugify(text: str) -> str:
    text = (text or "").lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")[:60]


def build_slug(centre: dict) -> str:
    base = slugify(f"{centre.get('name', '')}-{centre.get('district', '')}")
    short_id = (centre.get("id") or "")[:8]
    return f"{base}-{short_id}" if base else f"csc-{short_id}"


def fetch_centres():
    """Fetch every publicly-visible csc_centres row (any state)."""
    url = (
        f"{SUPABASE_URL}/rest/v1/csc_centres"
        "?select=id,name,address,state,district,pincode,phone,whatsapp,"
        "description,services_offered,service_mode,status"
        "&status=in.(unclaimed,verified)"
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
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch csc_centres from Supabase ({err}). "
              f"No pages generated this run.")
        return []


def wa_link(phone):
    if not phone:
        return None
    digits = re.sub(r"\D", "", phone)
    if not digits:
        return None
    with_country = "91" + digits if len(digits) == 10 else digits
    return f"https://wa.me/{with_country}"


# Services almost every CSC / Maha-E-Seva Kendra offers, each linked to the
# matching page already on this site — this is what turns a page that would
# otherwise be little more than a name+address (thin content risk) into a
# genuinely useful page, and adds real internal links back into the service
# section on every one of these pages. Worded as "आमतौर पर" (typically) since
# it's describing what CSCs generally do, not a confirmed per-centre menu —
# confirmed/owner-provided services (services_offered column) are shown
# separately, above this, when present.
COMMON_CSC_SERVICES = [
    ("आधार कार्ड में सुधार / अपडेट", "aadhaar-card"),
    ("पैन कार्ड आवेदन", "pan-card"),
    ("राशन कार्ड सेवाएं", "ration-card"),
    ("आय प्रमाणपत्र", "income-certificate"),
    ("जाति प्रमाणपत्र", "caste-certificate"),
    ("अधिवास (डोमिसाइल) प्रमाणपत्र", "domicile-certificate"),
    ("जन्म प्रमाणपत्र", "birth-certificate"),
]


def common_services_block(centre) -> str:
    offered = centre.get("services_offered") or []
    confirmed_html = ""
    if offered:
        items = "".join(f"<li>{esc(s)}</li>" for s in offered)
        confirmed_html = f'''
      <h2 class="csc-profile-section__title">इस केंद्र पर उपलब्ध सेवाएं</h2>
      <ul class="check-list">{items}</ul>'''

    common_items = "".join(
        f'<li><a href="../service/{slug}.html">{esc(label)}</a></li>'
        for label, slug in COMMON_CSC_SERVICES
    )
    return f'''
    <section class="csc-profile-section">{confirmed_html}
      <h2 class="csc-profile-section__title">CSC / Maha-E-Seva Kendra पर आमतौर पर मिलने वाली सेवाएं</h2>
      <p>Common Service Centre (CSC) — जिन्हें महाराष्ट्र में Maha-E-Seva Kendra भी कहा जाता है — देश भर में सरकारी सेवाओं को नागरिकों तक पहुंचाने वाले अधिकृत केंद्र हैं। इस तरह के केंद्रों पर आमतौर पर ये सेवाएं मिलती हैं (हर सेवा के लिए विस्तृत गाइड, फीस और ज़रूरी दस्तावेज़ों की जानकारी नीचे दिए लिंक पर उपलब्ध है):</p>
      <ul class="link-list">{common_items}</ul>
      <p class="csc-profile-note">ऊपर दी गई सूची सामान्य जानकारी के लिए है — इस विशेष केंद्र पर उपलब्ध सटीक सेवाओं के लिए केंद्र से सीधे संपर्क करें{" (नंबर ऊपर दिया गया है)" if centre.get("status") == "verified" and centre.get("phone") else ""}।</p>
    </section>'''


def about_csc_block(centre) -> str:
    district = centre.get("district") or "आपके क्षेत्र"
    state = centre.get("state") or "राज्य"
    return f'''
    <section class="csc-profile-section">
      <h2 class="csc-profile-section__title">CSC (Common Service Centre) योजना के बारे में</h2>
      <p>Common Service Centre (CSC) भारत सरकार के Digital India कार्यक्रम के तहत बनाई गई एक योजना है, जिसका मकसद है हर गांव और कस्बे तक सरकारी और डिजिटल सेवाओं को आसानी से पहुंचाना। इन्हें कई राज्यों में अलग-अलग नामों से भी जाना जाता है — महाराष्ट्र में इन्हें अक्सर "Maha-E-Seva Kendra" कहा जाता है। एक CSC संचालक (जिसे VLE — Village Level Entrepreneur कहा जाता है) स्थानीय स्तर पर लोगों को आधार, पैन, प्रमाणपत्र, बिल भुगतान, बैंकिंग और बीमा जैसी दर्जनों सेवाएं उपलब्ध कराता है, ताकि आम नागरिकों को इन कामों के लिए दूर के सरकारी दफ्तर या शहर न जाना पड़े।</p>
      <p>{esc(district)}, {esc(state)} जैसे क्षेत्रों में CSC केंद्रों की भूमिका खासतौर पर अहम है, क्योंकि ये केंद्र ग्रामीण और अर्ध-शहरी इलाकों के नागरिकों के लिए डिजिटल सेवाओं का सबसे नज़दीकी और भरोसेमंद ज़रिया होते हैं। इंटरनेट या कंप्यूटर की जानकारी न होने पर भी, नागरिक इन केंद्रों पर जाकर अपना काम पूरा करवा सकते हैं — केंद्र संचालक पूरी प्रक्रिया में मदद करता है।</p>
    </section>'''


def documents_needed_block() -> str:
    return '''
    <section class="csc-profile-section">
      <h2 class="csc-profile-section__title">CSC पर जाने से पहले सामान्यतः क्या साथ ले जाना चाहिए</h2>
      <p>सेवा के अनुसार ज़रूरी दस्तावेज़ अलग-अलग होते हैं (हर सेवा पेज पर विस्तृत सूची दी गई है), लेकिन ज़्यादातर कामों के लिए ये चीज़ें साथ रखना उपयोगी रहता है:</p>
      <ul class="check-list">
        <li>आधार कार्ड (मूल या फोटोकॉपी, सेवा अनुसार)</li>
        <li>हाल की पासपोर्ट साइज़ फ़ोटो (कुछ सेवाओं के लिए)</li>
        <li>मोबाइल नंबर जो आधार से लिंक हो (OTP सत्यापन के लिए)</li>
        <li>संबंधित सेवा से जुड़े मूल दस्तावेज़ (जैसे जन्म प्रमाणपत्र, आय का प्रमाण, आदि — सेवा अनुसार)</li>
        <li>लागू शुल्क (सेवा के अनुसार बदलता है — केंद्र पर पूछ लें)</li>
      </ul>
      <p class="csc-profile-note">सटीक दस्तावेज़ सूची जिस सेवा के लिए आप जा रहे हैं, उसके अनुसार अलग होगी — ऊपर दिए सेवा-पेज लिंक पर हर सेवा की पूरी जानकारी उपलब्ध है।</p>
    </section>'''


CSC_FAQS = [
    (
        "क्या CSC पर सभी सेवाएं मुफ़्त होती हैं?",
        "नहीं। CSC पर सरकारी सेवा शुल्क (जो हर सेवा के लिए तय होता है) के अलावा केंद्र संचालक को एक छोटा सा सुविधा शुल्क भी देना पड़ सकता है, क्योंकि केंद्र चलाना उनका व्यवसाय है। कोई भी दस्तावेज़ या सेवा बनवाने से पहले केंद्र पर कुल शुल्क पूछ लेना बेहतर रहता है।",
    ),
    (
        "क्या CSC जाने से पहले अपॉइंटमेंट लेना ज़रूरी है?",
        "ज़्यादातर CSC केंद्रों पर बिना अपॉइंटमेंट के भी सीधे जाया जा सकता है, लेकिन अगर केंद्र का फोन नंबर उपलब्ध है (इस पेज पर वेरिफाइड केंद्रों के लिए दिखता है), तो पहले कॉल या WhatsApp करके समय और ज़रूरी दस्तावेज़ों की पुष्टि कर लेना बेहतर रहता है, ताकि बार-बार चक्कर न लगाने पड़ें।",
    ),
    (
        "अगर यह केंद्र अभी 'Unclaimed' दिखा रहा है, तो क्या यह असली है?",
        "हां — 'Unclaimed' का मतलब सिर्फ इतना है कि इस केंद्र के संचालक ने अभी तक अपनी लिस्टिंग को SarkariSewa Portal पर वेरिफाई (claim) नहीं किया है। यह जानकारी सरकारी CSC सूची से ली गई है। केंद्र संचालक द्वारा claim करने के बाद फोन नंबर, WhatsApp और सेवाओं की पूरी जानकारी यहां दिखने लगेगी।",
    ),
    (
        "क्या एक ही काम के लिए अलग-अलग CSC केंद्रों पर अलग फीस हो सकती है?",
        "सरकार द्वारा तय सेवा शुल्क सामान्यतः सभी केंद्रों पर एक जैसा होता है, लेकिन केंद्र का अपना सुविधा शुल्क अलग-अलग हो सकता है। इसीलिए काम शुरू करवाने से पहले कुल शुल्क की पुष्टि कर लेना अच्छी आदत है।",
    ),
]


def faq_block() -> str:
    items = "".join(
        f'''
      <details class="faq-item">
        <summary class="faq-item__q">{esc(q)} <span class="chev">&#8964;</span></summary>
        <div class="faq-item__a">{esc(a)}</div>
      </details>'''
        for q, a in CSC_FAQS
    )
    return f'''
    <section class="csc-profile-section">
      <h2 class="csc-profile-section__title">अक्सर पूछे जाने वाले सवाल</h2>
      <div class="faq-list">{items}</div>
    </section>'''


def faq_schema() -> dict:
    return {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {"@type": "Answer", "text": a},
            }
            for q, a in CSC_FAQS
        ],
    }


def build_meta_description(centre) -> str:
    parts = [centre.get("name", ""), centre.get("district", ""), centre.get("state", "")]
    desc = " — ".join(p for p in parts if p) + " — CSC / Maha-E-Seva Kendra."
    if len(desc) > 158:
        desc = desc[:155].rsplit(" ", 1)[0] + "..."
    return desc


def build_schema(centre, canonical_url):
    graph = [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{BASE_URL}/index.html"},
                {"@type": "ListItem", "position": 2, "name": "CSC Centres", "item": f"{BASE_URL}/csc/index.html"},
                {"@type": "ListItem", "position": 3, "name": centre.get("name", ""), "item": canonical_url},
            ],
        },
        faq_schema(),
    ]
    if centre.get("status") == "verified":
        graph.insert(0, {
            "@type": "LocalBusiness",
            "name": centre.get("name", ""),
            "address": {
                "@type": "PostalAddress",
                "streetAddress": centre.get("address", ""),
                "addressLocality": centre.get("district", ""),
                "addressRegion": centre.get("state", ""),
                "postalCode": centre.get("pincode", ""),
                "addressCountry": "IN",
            },
            "telephone": centre.get("phone") or None,
            "url": canonical_url,
        })
    return json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False)


def build_page(centre) -> str:
    name = centre.get("name") or "CSC Centre"
    district = centre.get("district") or ""
    state = centre.get("state") or ""
    address = centre.get("address") or ""
    pincode = centre.get("pincode") or ""
    phone = centre.get("phone") or ""
    status = centre.get("status")
    slug = build_slug(centre)
    canonical_url = f"{BASE_URL}/csc/{slug}.html"

    title_full = f"{name} — {district} — CSC Centre — {BRAND_HI}"
    title = title_full if len(title_full) <= 60 else f"{name} — {BRAND_HI}"
    meta_desc = build_meta_description(centre)

    wa = wa_link(phone)
    contact_block = ""
    if status == "verified" and phone:
        contact_block = f'''
      <p class="csc-profile__phone">फ़ोन: <a href="tel:{esc(phone)}">{esc(phone)}</a></p>'''
        if wa:
            contact_block += f'''
      <p><a class="btn btn--primary" href="{esc(wa)}" target="_blank" rel="noopener">WhatsApp पर संपर्क करें</a></p>'''
    elif status == "unclaimed":
        contact_block = f'''
      <p class="csc-profile__unclaimed">यह लिस्टिंग सरकारी CSC/Maha-E-Seva Kendra सूची से ली गई है और अभी तक इसके मालिक द्वारा claim नहीं की गई है, इसलिए फोन नंबर सार्वजनिक रूप से यहां नहीं दिखाया गया — पते पर सीधे जाकर संपर्क करें।</p>
      <p><a class="btn btn--secondary" href="claim.html?id={esc(centre.get("id", ""))}">क्या यह आपका CSC केंद्र है? मुफ़्त में Claim करें</a></p>
      <p class="csc-profile-note">Claim करने के बाद आपका फोन नंबर, WhatsApp लिंक और यह केंद्र वास्तव में कौन-कौन सी सेवाएं देता है — यह सब यहां दिखने लगेगा, और लिस्टिंग "सत्यापित / Verified" बैज पाएगी।</p>'''

    header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"), ROOT)
    schema = build_schema(centre, canonical_url)

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
  <meta property="og:type" content="business.business" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <title>{esc(title)}</title>

  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module2.css" />
  <script type="application/ld+json" id="csc-schema">{schema}</script>
</head>
<body data-csc-id="{esc(centre.get("id", ""))}">
  <script>window.SS_ROOT = "../";</script>

  <div id="site-header">
{header_html.strip()}
  </div>

  <main class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="index.html">CSC Centres</a>
      <span class="sep">/</span>
      <span class="current">{esc(name)}</span>
    </nav>

    <section class="csc-profile-hero">
      <span class="csc-profile__badge">{"सत्यापित / Verified" if status == "verified" else "Unclaimed"}</span>
      <h1 class="csc-profile__title">{esc(name)}</h1>
      <p class="csc-profile__address">{esc(address)}</p>
      <p class="csc-profile__meta mono">{esc(district)}, {esc(state)} — {esc(pincode)}</p>
      {contact_block}
    </section>

    <div class="tricolor-rule" aria-hidden="true"></div>

    {common_services_block(centre)}
    {about_csc_block(centre)}
    {documents_needed_block()}
    {faq_block()}

    <section class="csc-profile-section">
      <p><a href="index.html">← सभी CSC केंद्र देखें</a></p>
    </section>
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
    centres = fetch_centres()
    OUT_DIR.mkdir(exist_ok=True)
    written = []
    states_seen = {}
    for centre in centres:
        slug = build_slug(centre)
        out_path = OUT_DIR / f"{slug}.html"
        out_path.write_text(build_page(centre), encoding="utf-8")
        written.append(str(out_path.relative_to(REPO_ROOT)))
        states_seen[centre.get("state", "?")] = states_seen.get(centre.get("state", "?"), 0) + 1

    print(f"Generated {len(written)} static CSC centre pages in csc/")
    for w in written[:5]:
        print(f"  - {w}")
    if len(written) > 5:
        print(f"  ... and {len(written) - 5} more")
    print("By state:", states_seen)


if __name__ == "__main__":
    main()
