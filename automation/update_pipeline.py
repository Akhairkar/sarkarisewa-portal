#!/usr/bin/env python3
"""
update_pipeline.py — v2.0
==========================
Fetches daily government notifications from official RSS feeds (PIB, India.gov.in,
EPFO, MoLE, AIR), summarizes them with Gemini AI (with FAQs), and:
  1. Saves them to data/latest-updates.json
  2. Generates static HTML pages in updates/<slug>.html (SEO-friendly, crawlable)

Run: python automation/update_pipeline.py
"""
import os
import sys
import json
import hashlib
import time
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path

import feedparser
import requests
from bs4 import BeautifulSoup

try:
    import google.generativeai as genai
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
SOURCES_FILE = ROOT_DIR / "automation" / "sources.json"
LATEST_UPDATES_FILE = DATA_DIR / "latest-updates.json"
PENDING_UPDATES_FILE = DATA_DIR / "pending-updates.json"
LOG_FILE = ROOT_DIR / "automation" / "run.log"
UPDATES_DIR = ROOT_DIR / "updates"
HEADER_PARTIAL = ROOT_DIR / "partials" / "header.html"
FOOTER_PARTIAL = ROOT_DIR / "partials" / "footer.html"

DRY_RUN = os.environ.get("DRY_RUN", "false").lower() == "true"
BASE_URL = "https://sarkarisewaindia.com"
MAX_ITEMS_PER_SOURCE = 15
MAX_TOTAL_UPDATES = 200  # Keep latest 200

# ── Helpers ────────────────────────────────────────────────────────────────

def load_json(filepath, default):
    try:
        return json.loads(Path(filepath).read_text(encoding="utf-8"))
    except Exception:
        return default

def save_json(filepath, data):
    if DRY_RUN:
        print(f"[DRY RUN] Would save {filepath}")
        return
    Path(filepath).parent.mkdir(parents=True, exist_ok=True)
    Path(filepath).write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")

def generate_id(url, title):
    return hashlib.md5(f"{url}-{title}".encode("utf-8")).hexdigest()[:12]

def slugify(text):
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:80] if len(s) > 80 else s

def log_run(stats):
    log = f"""Daily Update Run v2.0
Date: {datetime.now(timezone.utc).strftime('%d %b %Y %H:%M:%S UTC')}
Sources checked: {stats['checked']}
Successful: {stats['successful']}
Failed: {stats['failed']}
New items: {stats['new']}
Duplicates: {stats['duplicates']}
Published: {stats['published']}
Pending: {stats['pending']}
Static pages generated: {stats.get('static_pages', 0)}
-------------------------------------------
"""
    print(log)
    if not DRY_RUN:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            f.write(log)


# ── RSS Fetching (with PIB 403 fix) ───────────────────────────────────────

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    ),
    "Accept": "application/rss+xml, application/xml, text/xml, */*",
    "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Referer": "https://www.google.com/",
}

def fetch_rss(source):
    items = []
    # Retry up to 3 times with increasing delay (PIB sometimes needs this)
    for attempt in range(3):
        try:
            resp = requests.get(source["url"], headers=HEADERS, timeout=25)
            if resp.status_code == 403 and attempt < 2:
                time.sleep(2 * (attempt + 1))
                continue
            resp.raise_for_status()
            feed = feedparser.parse(resp.content)
            break
        except requests.exceptions.RequestException as e:
            if attempt == 2:
                raise Exception(f"HTTP error fetching {source['url']} after 3 retries: {e}")
            time.sleep(2 * (attempt + 1))
    else:
        return items

    if feed.bozo and not feed.entries:
        raise Exception(f"Failed to parse RSS: {source['url']} ({feed.bozo_exception})")

    for entry in feed.entries[:MAX_ITEMS_PER_SOURCE]:
        raw_summary = entry.get("summary", "")
        clean_summary = BeautifulSoup(raw_summary, "html.parser").get_text(separator=" ").strip()
        
        items.append({
            "title": entry.get("title", "").strip(),
            "url": entry.get("link", "").strip(),
            "published": entry.get("published", "") or entry.get("updated", ""),
            "summary": clean_summary[:500],
            "source_name": source["name"],
            "official": source.get("official", False),
            "category": source.get("category", "General"),
            "language": source.get("language", "en"),
        })
    return items


# ── AI Summarization (with FAQ generation) ─────────────────────────────────

def summarize_ai(title, summary, category):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key or not HAS_GENAI:
        return fallback_summary(title, summary)

    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel("gemini-2.0-flash")
        prompt = f"""You are a government notification expert for SarkariSewa India.
A new notification has been published. Create a citizen-friendly summary.

IMPORTANT: Output ONLY a valid JSON object (no markdown, no code blocks) with these keys:
- "title_en": Clear, catchy English title (max 60 chars)
- "title_hi": Clear Hindi title (max 60 chars)
- "summary_en": 2-3 sentence TL;DR explaining why this matters to common citizens (max 200 chars)
- "summary_hi": Same in Hindi (max 200 chars)
- "content_en": 4-6 bullet points of key takeaways in English. Each bullet starts with "• "
- "content_hi": Same bullet points in Hindi
- "faqs": Array of exactly 3 objects, each with "q_en", "a_en", "q_hi", "a_hi" — practical FAQ for citizens
- "keywords": Array of 3-5 relevant keywords for matching related services (e.g. ["pension", "epfo", "pf"])

Category: {category}
Title: {title}
Content: {summary}"""

        response = model.generate_content(prompt)
        res_text = response.text.strip()
        # Clean markdown wrapping
        if res_text.startswith("```"):
            res_text = re.sub(r"^```\w*\n?", "", res_text)
            res_text = re.sub(r"\n?```$", "", res_text)
        return json.loads(res_text)
    except Exception as e:
        print(f"AI summarization failed: {e}")
        return fallback_summary(title, summary)


def fallback_summary(title, summary):
    return {
        "title_en": title[:60],
        "title_hi": title[:60],
        "summary_en": summary[:200] if summary else title,
        "summary_hi": summary[:200] if summary else title,
        "content_en": f"• {summary[:300]}" if summary else f"• {title}",
        "content_hi": f"• {summary[:300]}" if summary else f"• {title}",
        "faqs": [
            {"q_en": "What is this notification about?", "a_en": title,
             "q_hi": "यह सूचना किसके बारे में है?", "a_hi": title},
            {"q_en": "Who does this affect?", "a_en": "Indian citizens and residents.",
             "q_hi": "इसका प्रभाव किन पर पड़ेगा?", "a_hi": "भारतीय नागरिकों और निवासियों पर।"},
            {"q_en": "Where can I read the official notification?", "a_en": "Click the official source link below.",
             "q_hi": "आधिकारिक सूचना कहाँ पढ़ सकते हैं?", "a_hi": "नीचे दिए गए आधिकारिक स्रोत लिंक पर क्लिक करें।"},
        ],
        "keywords": [],
    }


# ── Static Page Generator ──────────────────────────────────────────────────

def rewrite_links(html_str):
    """Rewrite relative links in header/footer partials for updates/ depth."""
    return html_str.replace('href="', 'href="../').replace('src="', 'src="../').replace('href="../http', 'href="http').replace('src="../http', 'src="http').replace('href="../#', 'href="#').replace('href="../mailto:', 'href="mailto:').replace('href="../tel:', 'href="tel:').replace('href="../javascript:', 'href="javascript:')


def generate_static_page(update):
    """Generate a static HTML page for a single notification."""
    slug = update["slug"]
    title_en = update.get("title_en", "Update")
    title_hi = update.get("title_hi", title_en)
    summary_en = update.get("summary_en", "")
    summary_hi = update.get("summary_hi", "")
    content_en = update.get("content_en", "")
    content_hi = update.get("content_hi", "")
    faqs = update.get("faqs", [])
    source_url = update.get("source_url", "#")
    source_name = update.get("source_name", "Official Source")
    category = update.get("category", "General")
    published_date = update.get("published_date", "")
    
    # Build FAQ HTML
    faq_html = ""
    if faqs:
        faq_items = ""
        for i, faq in enumerate(faqs):
            faq_items += f"""
            <div class="faq-item" style="border:1px solid var(--color-border,#E2DFD3); border-radius:10px; margin-bottom:12px; overflow:hidden;">
              <button onclick="this.parentElement.classList.toggle('open')" style="width:100%; padding:16px 20px; background:var(--color-surface-alt,#F5F0E8); border:none; cursor:pointer; text-align:left; font-size:1rem; font-weight:600; color:var(--color-text); display:flex; justify-content:space-between; align-items:center;">
                <span data-lang-show="en">{faq.get('q_en','')}</span>
                <span data-lang-show="hi">{faq.get('q_hi','')}</span>
                <span style="font-size:1.2rem;">▼</span>
              </button>
              <div class="faq-answer" style="padding:0 20px; max-height:0; overflow:hidden; transition:max-height 0.3s ease, padding 0.3s ease;">
                <p data-lang-show="en" style="margin:16px 0;">{faq.get('a_en','')}</p>
                <p data-lang-show="hi" style="margin:16px 0;">{faq.get('a_hi','')}</p>
              </div>
            </div>"""
        faq_html = f"""
        <section style="margin-top:40px;">
          <h2 style="font-size:1.3rem; margin-bottom:16px;">
            <span data-lang-show="en">❓ Frequently Asked Questions</span>
            <span data-lang-show="hi">❓ अक्सर पूछे जाने वाले प्रश्न</span>
          </h2>
          {faq_items}
        </section>"""

    # Format content bullets
    content_en_html = content_en.replace("• ", "<li>").replace("\n", "</li>\n") if "• " in content_en else f"<p>{content_en}</p>"
    if "<li>" in content_en_html:
        content_en_html = f"<ul style='line-height:2; padding-left:20px;'>{content_en_html}</li></ul>"
    
    content_hi_html = content_hi.replace("• ", "<li>").replace("\n", "</li>\n") if "• " in content_hi else f"<p>{content_hi}</p>"
    if "<li>" in content_hi_html:
        content_hi_html = f"<ul style='line-height:2; padding-left:20px;'>{content_hi_html}</li></ul>"

    # Read header/footer
    header_html = ""
    footer_html = ""
    try:
        header_html = rewrite_links(HEADER_PARTIAL.read_text(encoding="utf-8"))
        footer_html = rewrite_links(FOOTER_PARTIAL.read_text(encoding="utf-8"))
    except Exception:
        pass

    canonical_url = f"{BASE_URL}/updates/{slug}.html"
    meta_desc = summary_en[:150] if summary_en else title_en

    page_title = title_en[:50] if len(title_en) > 50 else title_en

    schema = json.dumps({
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": title_en,
        "description": summary_en,
        "datePublished": published_date,
        "url": canonical_url,
        "provider": {"@type": "GovernmentOrganization", "name": source_name}
    }, ensure_ascii=False)

    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{page_title} — SarkariSewa India</title>
  <meta name="description" content="{meta_desc}">
  <link rel="canonical" href="{canonical_url}">
  <meta property="og:title" content="{page_title} — SarkariSewa India">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <link rel="icon" href="../favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module2.css">
  <script type="application/ld+json">{schema}</script>
  <style>
    .notif-hero {{ background: linear-gradient(135deg, var(--color-surface-alt,#F5F0E8) 0%, var(--color-surface,#fff) 100%); padding: 32px; border-radius: 16px; margin-bottom: 32px; border-left: 5px solid var(--color-brand,#10243E); }}
    .notif-badge {{ display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; background: var(--color-brand,#10243E); color: #fff; }}
    .notif-meta {{ font-size: 0.9rem; color: var(--color-text-light); margin-top: 12px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }}
    .notif-summary {{ background: var(--color-surface-alt,#F5F0E8); padding: 20px 24px; border-radius: 12px; border-left: 4px solid #f59e0b; margin: 24px 0; font-size: 1.05rem; line-height: 1.7; }}
    .notif-tools-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 16px; }}
    .notif-tool-card {{ padding: 16px; background: var(--color-surface-alt,#F5F0E8); border-radius: 12px; text-align: center; text-decoration: none; color: var(--color-text); transition: transform 0.2s; }}
    .notif-tool-card:hover {{ transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
    .faq-item.open .faq-answer {{ max-height: 300px !important; padding: 0 20px 16px !important; }}
    .faq-item.open button span:last-child {{ transform: rotate(180deg); }}
  </style>
</head>
<body>
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header">{header_html}</div>

  <main class="container" style="max-width:800px; margin:40px auto; padding:0 20px;">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a>
      <span class="sep">/</span>
      <a href="../latest-updates.html">
        <span data-lang-show="en">Notifications</span>
        <span data-lang-show="hi">सरकारी सूचनाएं</span>
      </a>
      <span class="sep">/</span>
      <span class="current" data-lang-show="en">{title_en[:40]}</span>
      <span class="current" data-lang-show="hi">{title_hi[:40]}</span>
    </nav>

    <div class="tricolor-rule" aria-hidden="true"></div>

    <!-- Hero Section -->
    <div class="notif-hero">
      <span class="notif-badge">📢 {category}</span>
      <h1 style="font-size:1.6rem; margin:16px 0 0 0; line-height:1.4;">
        <span data-lang-show="en">{title_en}</span>
        <span data-lang-show="hi">{title_hi}</span>
      </h1>
      <div class="notif-meta">
        <span>🏛️ {source_name}</span>
        <span>📅 {published_date[:10] if len(published_date) > 10 else published_date}</span>
      </div>
    </div>

    <!-- TL;DR Summary -->
    <div class="notif-summary">
      <strong>
        <span data-lang-show="en">📝 Quick Summary:</span>
        <span data-lang-show="hi">📝 संक्षिप्त सारांश:</span>
      </strong><br>
      <span data-lang-show="en">{summary_en}</span>
      <span data-lang-show="hi">{summary_hi}</span>
    </div>

    <!-- Full Details -->
    <section style="margin-top:32px;">
      <h2 style="font-size:1.3rem; margin-bottom:16px;">
        <span data-lang-show="en">📋 Full Details</span>
        <span data-lang-show="hi">📋 पूरी जानकारी</span>
      </h2>
      <div data-lang-show="en" style="font-size:1rem; line-height:1.8;">{content_en_html}</div>
      <div data-lang-show="hi" style="font-size:1rem; line-height:1.8;">{content_hi_html}</div>
    </section>

    <!-- FAQ Section -->
    {faq_html}

    <!-- Official Source -->
    <section style="margin-top:40px; padding:24px; background:var(--color-surface-alt,#F5F0E8); border-radius:12px; text-align:center;">
      <h3 style="margin-top:0; margin-bottom:8px;">
        <span data-lang-show="en">🔗 Official Source</span>
        <span data-lang-show="hi">🔗 आधिकारिक स्रोत</span>
      </h3>
      <p style="color:var(--color-text-light); margin-bottom:20px; font-size:0.95rem;">
        <span data-lang-show="en">For complete legal and technical details, refer to the original publication.</span>
        <span data-lang-show="hi">पूर्ण कानूनी और तकनीकी विवरण के लिए मूल प्रकाशन देखें।</span>
      </p>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <a class="btn btn-primary" href="{source_url}" target="_blank" rel="noopener noreferrer" style="padding:12px 24px; font-size:1rem;">
          <span data-lang-show="en">Read Official Notification →</span>
          <span data-lang-show="hi">आधिकारिक अधिसूचना पढ़ें →</span>
        </a>
      </div>
    </section>

    <!-- Important Tools -->
    <section style="margin-top:40px;">
      <h2 style="font-size:1.3rem; margin-bottom:8px;">
        <span data-lang-show="en">🛠️ Important Tools</span>
        <span data-lang-show="hi">🛠️ उपयोगी टूल्स</span>
      </h2>
      <div class="notif-tools-grid">
        <a class="notif-tool-card" href="../tools/eligibility-checker.html">
          <div style="font-size:2rem; margin-bottom:8px;">🎯</div>
          <div style="font-weight:600;">
            <span data-lang-show="en">Eligibility Checker</span>
            <span data-lang-show="hi">पात्रता जांच टूल</span>
          </div>
        </a>
        <a class="notif-tool-card" href="../tools/document-checklist.html">
          <div style="font-size:2rem; margin-bottom:8px;">📄</div>
          <div style="font-weight:600;">
            <span data-lang-show="en">Document Checklist</span>
            <span data-lang-show="hi">दस्तावेज़ चेकलिस्ट</span>
          </div>
        </a>
        <a class="notif-tool-card" href="../tools/status-troubleshooter.html">
          <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
          <div style="font-weight:600;">
            <span data-lang-show="en">Status Troubleshooter</span>
            <span data-lang-show="hi">स्टेटस ट्रबलशूटर</span>
          </div>
        </a>
      </div>
    </section>

    <!-- Back -->
    <p style="margin-top:40px; text-align:center;">
      <a href="../latest-updates.html" class="btn btn-secondary" style="padding:10px 24px;">
        <span data-lang-show="en">← All Notifications</span>
        <span data-lang-show="hi">← सभी सूचनाएं देखें</span>
      </a>
    </p>

  </main>

  <div id="site-footer">{footer_html}</div>
  <script src="../assets/js/main.js?v=2.4" defer></script>
  <script src="../assets/js/consent.js" defer></script>
  <script src="../assets/js/i18n-helper.js" defer></script>
</body>
</html>"""
    return html


# ── Main Pipeline ──────────────────────────────────────────────────────────

def main():
    sources = load_json(SOURCES_FILE, [])
    latest_updates = load_json(LATEST_UPDATES_FILE, [])
    pending_updates = load_json(PENDING_UPDATES_FILE, [])

    existing_ids = {u["id"] for u in latest_updates + pending_updates}
    existing_urls = {u.get("source_url", "") for u in latest_updates + pending_updates}

    stats = {
        "checked": 0, "successful": 0, "failed": 0,
        "new": 0, "duplicates": 0, "published": 0, "pending": 0,
        "static_pages": 0,
    }

    new_updates = []

    for source in sources:
        if not source.get("enabled", True):
            continue
        stats["checked"] += 1

        try:
            items = fetch_rss(source)
            stats["successful"] += 1
            print(f"SUCCESS {source['name']}: {len(items)} items fetched")

            for item in items:
                if not item["url"] or not item["title"]:
                    continue

                item_id = generate_id(item["url"], item["title"])
                if item_id in existing_ids or item["url"] in existing_urls:
                    stats["duplicates"] += 1
                    continue

                # AI Summarization
                ai_data = summarize_ai(item["title"], item["summary"], item["category"])

                update_obj = {
                    "id": item_id,
                    "slug": slugify(ai_data.get("title_en", item["title"])),
                    "title_en": ai_data.get("title_en", item["title"]),
                    "title_hi": ai_data.get("title_hi", item["title"]),
                    "summary_en": ai_data.get("summary_en", item["summary"]),
                    "summary_hi": ai_data.get("summary_hi", item["summary"]),
                    "content_en": ai_data.get("content_en", item["summary"]),
                    "content_hi": ai_data.get("content_hi", item["summary"]),
                    "faqs": ai_data.get("faqs", []),
                    "keywords": ai_data.get("keywords", []),
                    "category": item["category"],
                    "published_date": item["published"] or datetime.now(timezone.utc).isoformat(),
                    "updated_date": datetime.now(timezone.utc).isoformat(),
                    "source_name": item["source_name"],
                    "source_url": item["url"],
                    "official_source": item["official"],
                    "status": "published" if item["official"] else "pending",
                    "featured": False,
                }

                if update_obj["status"] == "published":
                    latest_updates.insert(0, update_obj)
                    new_updates.append(update_obj)
                    stats["published"] += 1
                else:
                    pending_updates.insert(0, update_obj)
                    stats["pending"] += 1
                stats["new"] += 1
                existing_ids.add(item_id)
                existing_urls.add(item["url"])

        except Exception as e:
            print(f"ERROR {source['name']}: {e}")
            stats["failed"] += 1

    # Trim to max
    latest_updates = latest_updates[:MAX_TOTAL_UPDATES]

    # Save JSON
    save_json(LATEST_UPDATES_FILE, latest_updates)
    save_json(PENDING_UPDATES_FILE, pending_updates)

    # Generate static pages for ALL updates (not just new ones)
    if not DRY_RUN:
        UPDATES_DIR.mkdir(exist_ok=True)
        for update in latest_updates:
            if not update.get("slug"):
                continue
            try:
                page_html = generate_static_page(update)
                out_path = UPDATES_DIR / f"{update['slug']}.html"
                out_path.write_text(page_html, encoding="utf-8")
                stats["static_pages"] += 1
            except Exception as e:
                print(f"⚠️ Static page error for {update.get('slug')}: {e}")

    log_run(stats)
    print(f"\nDone! {stats['new']} new, {stats['static_pages']} static pages generated.")


if __name__ == "__main__":
    main()
