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


DEFAULT_PROBLEMS = [
    ("1. OTR व लाइव फोटो रिजेक्शन से बचाव (Photo & Sign Fix)", "आवेदन करते समय सफेद बैकग्राउंड, पर्याप्त रोशनी और सीधे कैमरे में देखें। चश्मा या टोपी न पहनें। हमारे Photo Resizer (20-50 KB) और Signature Resizer (10-20 KB) टूल्स का उपयोग करें।"),
    ("2. अंतिम तिथि पर सर्वर क्रैश व भुगतान पेंडिंग (Payment Fix)", "यदि बैंक खाते से फीस कट गई है और फॉर्म पर 'Pending' आ रहा है, तो दोबारा पेमेंट न करें। 24 से 48 घंटे में 'Double Verification' से चालान स्वतः सत्यापित हो जाता है।"),
    ("3. ईडब्ल्यूएस (EWS) व ओबीसी-एनसीएल क्रूशियल डेट नियम", "जाति व आय प्रमाण पत्र हमेशा फॉर्म की अंतिम तिथि (Crucial Cut-off Date) से पूर्व के वैध वित्तीय वर्ष का होना अनिवार्य है। डीवी में पुराना या गलत प्रमाण पत्र स्वीकार नहीं होता।"),
    ("4. परीक्षा केंद्र (Exam Center) वरीयता आवंटन नियम", "अधिकांश आयोग 'First-Apply-First-Allot' नियम का पालन करते हैं। मनपसंद शहर का परीक्षा केंद्र पाने के लिए आवेदन विंडो खुलते ही शुरुआती दिनों में फॉर्म जमा करें।"),
    ("5. टाइपिंग टेस्ट (DEST) व कंप्यूटर प्रोफिशिएंसी मानक", "क्लर्क व सहायक पदों के लिए 35 WPM (English) या 30 WPM (Hindi) टाइपिंग अनिवार्य होती है। हमारे Typing Speed Test टूल पर प्रतिदिन 15 मिनट अभ्यास करें।"),
    ("6. फॉर्म में त्रुटि सुधार विंडो (Application Correction Window)", "यदि नाम, पिता का नाम या श्रेणी में कोई गलती हो जाए तो घबराएं नहीं। आयोग अंतिम तिथि के बाद 2-3 दिन की करेक्शन विंडो खोलता है जहां संशोधित शुल्क देकर सुधार किया जा सकता है।")
]

DEFAULT_FAQS = [
    ("इस भर्ती के लिए ऑनलाइन आवेदन कैसे करें?", "आधिकारिक भर्ती पोर्टल पर जाएं, अपना वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें, शैक्षणिक योग्यता व श्रेणी विवरण दर्ज करें, निर्धारित साइज में लाइव फोटो व सिग्नेचर अपलोड करें और ऑनलाइन फीस भुगतान कर रसीद डाउनलोड करें।"),
    ("क्या अंतिम वर्ष (Final Year) के अभ्यर्थी इस भर्ती के लिए पात्र हैं?", "हाँ, बशर्ते वे अधिसूचना में दी गई अंतिम कट-ऑफ तिथि तक अपनी डिग्री अथवा योग्यता का अंतिम परीक्षा परिणाम प्राप्त कर लें।"),
    ("आयु सीमा में क्या छूट (Age Relaxation) मिलती है?", "सरकारी नियमानुसार OBC (Non-Creamy Layer) को 3 वर्ष, SC/ST को 5 वर्ष, PwD को 10-15 वर्ष तथा भूतपूर्व सैनिकों को सेवा अवधि घटाकर 3 वर्ष की अधिकतम छूट दी जाती है।"),
    ("आवेदन शुल्क कितना है और इसका भुगतान कैसे किया जा सकता है?", "सामान्य/ओबीसी/ईडब्ल्यूएस पुरुष अभ्यर्थियों हेतु निर्धारित शुल्क होता है, जबकि महिला, एससी, एसटी और दिव्यांगजन पूर्णतः निःशुल्क (Exempted) होते हैं। भुगतान नेट बैंकिंग, UPI या डेबिट कार्ड से संभव है।"),
    ("परीक्षा का माध्यम और निगेटिव मार्किंग (Negative Marking) नियम क्या है?", "परीक्षा ऑनलाइन कंप्यूटर आधारित (CBT) होती है जिसमें हिंदी व अंग्रेजी दोनों माध्यम उपलब्ध होते हैं। गलत उत्तर पर निर्धारित 1/3 या 1/4 अंक की निगेटिव मार्किंग काटी जाती है।"),
    ("एडमिट कार्ड (Hall Ticket) कब और कैसे डाउनलोड होगा?", "परीक्षा तिथि से 4 से 7 दिन पूर्व आधिकारिक पोर्टल पर रोल नंबर व जन्म तिथि दर्ज करके ई-एडमिट कार्ड डाउनलोड किया जा सकता है।"),
    ("मल्टी-शिफ्ट परीक्षाओं में नॉर्मलाइजेशन (Score Normalization) कैसे लागू होता है?", "कठिन व आसान पालियों के बीच संतुलन बनाने हेतु DoPT व आयोग द्वारा Equi-Percentile / Standard Normalization फॉर्मूला लागू किया जाता है।"),
    ("क्या फॉर्म भरने के बाद प्रिंटआउट डाक से भेजना जरूरी है?", "नहीं, ऑनलाइन आवेदन पूरी तरह डिजिटल है। प्रिंटआउट केवल भविष्य में डीवी (Document Verification) और संदर्भ के लिए अपने पास सुरक्षित रखें।"),
    ("फोटो और सिग्नेचर का साइज कैसे ठीक करें?", "हमारे पोर्टल पर दिए गए मुफ्त Photo Resizer और Signature Resizer टूल्स का उपयोग करके आप बिना क्वालिटी खोए तुरंत आवश्यक KB में फाइल रीसाइज कर सकते हैं।"),
    ("आधिकारिक अधिसूचना (PDF) और नवीनतम अपडेट्स कहाँ से प्राप्त करें?", "ऊपर दिए गए 'Official Notification PDF' बटन से पूरी विज्ञप्ति डाउनलोड करें और रियल-टाइम अलर्ट्स हेतु हमारे VIP टेलीग्राम चैनल से जुड़ें।")
]


def build_page(job, header_partial_src, footer_partial_src, all_jobs_by_type):
    slug = job["slug"]
    title = pick(job, "title") or "Sarkari Job Alert 2026"
    dept = pick(job, "department") or "Government Department"
    location = pick(job, "location") or "All India"
    description = pick(job, "description") or ""
    qualification = pick(job, "qualification") or "10th / 12th / Graduate Degree"
    vacancies = f"{job['vacancies']} पद" if job.get("vacancies") else "विज्ञप्ति अनुसार"
    salary = pick(job, "salary") or "7th CPC Pay Scale"
    age_limit = pick(job, "age_limit") or "18 to 35 Years"
    meta_desc = build_meta_description(description or qualification, title)
    title_with_brand = f"{title} — SarkariSewaIndia"
    page_title = title_with_brand if len(title_with_brand) <= 70 else title
    canonical_url = f"{BASE_URL}/jobs/{slug}.html"
    job_type_label = JOB_TYPES.get(job.get("job_type"), job.get("job_type") or "सरकारी नौकरी")

    is_closed = False
    try:
        from datetime import date
        y, m, d = job["last_date"].split("-")
        is_closed = date(int(y), int(m), int(d)) < date.today()
    except Exception:
        pass

    last_date_hi = format_date_hi(job.get("last_date", ""))
    notification_link = job.get("notification_link") or job.get("apply_link") or "#"
    apply_link = job.get("apply_link") or "#"

    # 6 Problem Solvers HTML
    problem_cards = "".join(f"""
      <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
        <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1rem;">{p_title}</h4>
        <p style="margin: 0; font-size: 0.9rem; color: var(--color-text); line-height: 1.6;">{p_desc}</p>
      </div>
    """ for p_title, p_desc in DEFAULT_PROBLEMS)

    # 10 FAQs HTML & Schema
    faq_items_html = ""
    faq_schema_items = []
    for idx, (fq, fa) in enumerate(DEFAULT_FAQS):
        is_open = 'open' if idx == 0 else ''
        faq_items_html += f"""
        <details class="faq-item" {is_open} style="margin-bottom: 12px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-text); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; font-size: 1rem;">
            <span>❓ {fq}</span>
            <span style="font-size: 1.2rem; color: var(--color-primary);">▾</span>
          </summary>
          <div style="padding: 0 20px 16px 20px; color: var(--color-text); font-size: 0.95rem; line-height: 1.7; border-top: 1px solid var(--color-border); padding-top: 12px;">
            {fa}
          </div>
        </details>
        """
        faq_schema_items.append({
            "@type": "Question",
            "name": fq,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": fa
            }
        })

    related = [j for j in all_jobs_by_type.get(job.get("job_type"), []) if j["slug"] != slug][:4]
    related_html = ""
    if related:
        items = "".join(
            f'<a class="job-post-related__item" href="{r["slug"]}.html" style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 8px 14px; border-radius: 8px; text-decoration: none; color: var(--color-text); font-size: 0.9rem;">{esc(pick(r, "title"))} <span>· {esc(format_date_hi(r.get("last_date", "")))}</span></a>'
            for r in related
        )
        related_html = f'''
      <div style="margin: 24px 0;">
        <p style="font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">अन्य समान सरकारी नौकरी अलर्ट</p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">{items}</div>
      </div>'''

    header_html = rewrite_links(header_partial_src, "../")
    footer_html = rewrite_links(footer_partial_src, "../")

    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "JobPosting",
                "title": title,
                "description": meta_desc,
                "datePosted": (job.get("created_at") or "2026-01-01")[:10],
                "validThrough": job.get("last_date", ""),
                "employmentType": "FULL_TIME",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": dept
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": location
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": f"{BASE_URL}/index.html" },
                    { "@type": "ListItem", "position": 2, "name": "Job Alerts", "item": f"{BASE_URL}/jobs/index.html" },
                    { "@type": "ListItem", "position": 3, "name": title, "item": canonical_url }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faq_schema_items
            }
        ]
    }

    return f'''<!DOCTYPE html>
<html lang="hi" data-theme="light">
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
  <meta property="og:type" content="article" />
  <meta property="og:url" content="{esc(canonical_url)}" />
  <meta property="og:image" content="{BASE_URL}/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(page_title)}" />
  <meta name="twitter:description" content="{esc(meta_desc)}" />
  <title>{esc(page_title)}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css" />
  <link rel="stylesheet" href="../assets/css/module9.css" />
  <link rel="stylesheet" href="../assets/css/module16.css" />
  <link rel="stylesheet" href="../assets/css/module18.css" />
  <link rel="stylesheet" href="../assets/css/share-widget.css" />
  <script type="application/ld+json" id="job-post-schema">{json.dumps(schema, ensure_ascii=False, indent=2)}</script>
</head>
<body class="v2-template" data-slug="{esc(slug)}">
  <script>window.SS_ROOT = "../";</script>

  <div id="site-header">
{header_html.strip()}
  </div>

  <main class="container" style="max-width: 1100px; margin: 0 auto; padding: 16px;">
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb" style="margin-top: 14px; font-size: 0.9rem; color: var(--color-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a>
      <span class="sep">/</span>
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">Job Alerts</a>
      <span class="sep">/</span>
      <span class="current" style="color: var(--color-text);">{esc(title)}</span>
    </nav>

    <!-- Master Highlights Card -->
    <div class="job-hero-card" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 16px; padding: 32px 28px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px;">
        <span style="background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">🏛️ {esc(dept)}</span>
        <span style="background: rgba(5,150,105,0.12); color: #059669; padding: 4px 12px; border-radius: 16px; font-weight: 800; font-size: 0.82rem;">👥 {esc(vacancies)}</span>
        {'<span style="background: #ef4444; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">Closed</span>' if is_closed else '<span style="background: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-weight: 700; font-size: 0.82rem;">Active Recruitment</span>'}
      </div>
      
      <h1 style="font-size: 2.1rem; line-height: 1.35; color: var(--color-primary); margin: 0 0 16px 0;">{esc(title)}</h1>
      <p style="font-size: 1.05rem; color: var(--color-text); line-height: 1.7; margin-bottom: 24px;">
        {esc(dept)} द्वारा <strong>{esc(vacancies)}</strong> पर आधिकारिक भर्ती अधिसूचना जारी कर दी गई है। पात्र एवं इच्छुक अभ्यर्थी नीचे दिए गए स्टेप-बाय-स्टेप गाइड का पालन करके ऑनलाइन आवेदन कर सकते हैं।
      </p>

      <!-- 6-Point Highlight Matrix -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 20px 0;">
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">🏛️ भर्ती संस्था / विभाग</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin-top: 4px;">{esc(dept)}</div>
        </div>
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">👥 कुल पद / रिक्तियां</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #059669; margin-top: 4px;">{esc(vacancies)}</div>
        </div>
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">🎓 न्यूनतम योग्यता</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 4px;">{esc(qualification)}</div>
        </div>
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">⏳ आयु सीमा (Age Limit)</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text); margin-top: 4px;">{esc(age_limit)}</div>
        </div>
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">💰 वेतनमान (Pay Scale)</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #059669; margin-top: 4px;">{esc(salary)}</div>
        </div>
        <div style="background: rgba(37,99,235,0.05); border: 1px solid var(--color-border); border-radius: 10px; padding: 14px;">
          <div style="font-size: 0.8rem; color: var(--color-muted); font-weight: 700;">📅 आवेदन की अंतिम तिथि</div>
          <div style="font-size: 0.95rem; font-weight: 700; color: #dc2626; margin-top: 4px;">{esc(last_date_hi)}</div>
        </div>
      </div>

      <!-- Direct Official Action Buttons -->
      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
        <a href="{esc(apply_link)}" target="_blank" rel="noopener noreferrer" style="background: #059669; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem; box-shadow: 0 4px 14px rgba(5,150,105,0.25);">
          🚀 आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें ↗
        </a>
        <a href="{esc(notification_link)}" target="_blank" rel="noopener noreferrer" style="background: #2563eb; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem;">
          📄 आधिकारिक अधिसूचना (PDF) ↗
        </a>
        <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #0088cc; color: #ffffff !important; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 1rem;">
          ✈️ VIP Telegram Alert
        </a>
      </div>
    </div>

    <!-- Section 1: Important Dates & Schedule -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        📅 महत्वपूर्ण तिथियां (Important Dates & Schedule)
      </h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">अधिसूचना जारी होने की तिथि (Notification Date)</td><td style="padding: 12px; font-weight: 700; color: var(--color-primary);">{esc(format_date_hi(job.get("notification_date") or job.get("created_at") or ""))}</td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">ऑनलाइन आवेदन शुरू तिथि (Apply Online Start)</td><td style="padding: 12px; font-weight: 700; color: #059669;">अधिसूचना तिथि से प्रारंभ (Active)</td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">आवेदन की अंतिम तिथि (Last Date to Apply)</td><td style="padding: 12px; font-weight: 700; color: #dc2626;">{esc(last_date_hi)}</td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">फॉर्म सुधार विंडो (Correction Window)</td><td style="padding: 12px; font-weight: 600;">अंतिम तिथि के 2-3 दिन बाद</td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 12px; font-weight: 600;">सीबीटी परीक्षा तिथि (CBT Exam Date)</td><td style="padding: 12px; font-weight: 700; color: var(--color-primary);">आयोग द्वारा शीघ्र घोषित (As Per Calendar)</td></tr>
            <tr><td style="padding: 12px; font-weight: 600;">एडमिट कार्ड जारी (Admit Card Release)</td><td style="padding: 12px; font-weight: 600;">परीक्षा से 4 से 7 दिन पूर्व</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 2: Step-by-Step Online Application Guide -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🚀 ऑनलाइन आवेदन करने की संपूर्ण चरणबद्ध प्रक्रिया (Step-by-Step Guide)
      </h2>
      <div style="color: var(--color-text); line-height: 1.8; font-size: 1rem;">
        <ol style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 12px;"><strong>आधिकारिक वेबसाइट पर जाएं:</strong> सबसे पहले ऊपर दिए गए <em>'आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें'</em> लिंक पर क्लिक करके आयोग के आधिकारिक पोर्टल पर जाएं।</li>
          <li style="margin-bottom: 12px;"><strong>वन-टाइम रजिस्ट्रेशन (OTR):</strong> यदि आप नए उपयोगकर्ता हैं तो 'New Registration / OTR' पर क्लिक करें, आधार कार्ड व 10वीं की मार्कशीट अनुसार विवरण भरकर पासवर्ड बनाएं।</li>
          <li style="margin-bottom: 12px;"><strong>आवेदन फॉर्म भरें:</strong> अपनी लॉग-इन आईडी से लॉगिन करें, सक्रिय भर्ती लिंक का चयन करें, शैक्षणिक योग्यता, आरक्षण श्रेणी व पते का विवरण दर्ज करें।</li>
          <li style="margin-bottom: 12px;"><strong>फोटो व हस्ताक्षर अपलोड:</strong> निर्धारित आयाम में नवीनतम पासपोर्ट फोटो और हस्ताक्षर अपलोड करें। हमारे मुफ्त <a href="../tools/photo-resizer.html" style="color: #2563eb; font-weight: 700;">Photo Resizer (20-50 KB)</a> और <a href="../tools/signature-resizer.html" style="color: #2563eb; font-weight: 700;">Signature Resizer (10-20 KB)</a> टूल्स का उपयोग करें।</li>
          <li style="margin-bottom: 12px;"><strong>परीक्षा केंद्र का चयन:</strong> अपनी प्राथमिकता के अनुसार 3 परीक्षा शहरों का चयन करें।</li>
          <li style="margin-bottom: 12px;"><strong>शुल्क भुगतान व प्रिंटआउट:</strong> नेट बैंकिंग, UPI अथवा कार्ड से निर्धारित आवेदन शुल्क का भुगतान करें और भविष्य के संदर्भ हेतु फाइनल सबमिशन फॉर्म का प्रिंटआउट सुरक्षित रख लें।</li>
        </ol>
      </div>
    </div>

    <!-- Section 3: Official Direct Important Links -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🔗 आधिकारिक महत्वपूर्ण लिंक्स (Official Direct Important Links)
      </h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">ऑनलाइन आवेदन लिंक (Apply Online Portal)</td><td style="padding: 14px; text-align: right;"><a href="{esc(apply_link)}" target="_blank" rel="noopener noreferrer" style="background: #059669; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Click Here ↗</a></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">आधिकारिक विस्तृत अधिसूचना (Official Notification PDF)</td><td style="padding: 14px; text-align: right;"><a href="{esc(notification_link)}" target="_blank" rel="noopener noreferrer" style="background: #2563eb; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Download PDF ↗</a></td></tr>
            <tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">आयोग की आधिकारिक वेबसाइट (Official Website)</td><td style="padding: 14px; text-align: right;"><a href="{esc(apply_link)}" target="_blank" rel="noopener noreferrer" style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Visit Portal ↗</a></td></tr>
            <tr><td style="padding: 14px; font-weight: 700; color: var(--color-primary);">SarkariSewa VIP Telegram चैनल (Live Alerts)</td><td style="padding: 14px; text-align: right;"><a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #0088cc; color: #fff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">Join Telegram ↗</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 4: 6 Real-World Problem Solvers -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🛠️ परीक्षार्थी सहायता केंद्र: 6 प्रमुख समस्याएं व समाधान (Problem Solvers)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
        {problem_cards}
      </div>
    </div>

    <!-- Section 5: 10 Bilingual FAQs -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        ❓ अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)
      </h2>
      <div style="margin-top: 16px;">
        {faq_items_html}
      </div>
    </div>

    <!-- Section 6: Useful Citizen & Exam Tools Grid -->
    <div style="margin-top: 32px; margin-bottom: 24px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🧮 परीक्षार्थियों के लिए उपयोगी मुफ्त टूल्स व कैलकुलेटर
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        <a href="../tools/photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">🖼️ Photo Resizer</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">Govt Exam Photo</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">20-50 KB में तुरंत फोटो तैयार करें</p>
        </a>
        <a href="../tools/signature-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">✍️ Signature Resizer</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">Signature Crop Tool</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">10-20 KB में हस्ताक्षर सेट करें</p>
        </a>
        <a href="../tools/document-compressor.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">📄 Doc Compressor</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">PDF / Marksheet</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">100-300 KB में डॉक्यूमेंट कंप्रेस करें</p>
        </a>
        <a href="../tools/typing-speed-test.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="font-size: 1.6rem;">⌨️ Typing Test</div>
          <div style="font-weight: 700; color: var(--color-primary); margin-top: 4px;">35 WPM Speed Test</div>
          <p style="font-size: 0.82rem; color: var(--color-muted); margin: 4px 0 0 0;">सरकारी टाइपिंग परीक्षा का अभ्यास करें</p>
        </a>
      </div>
    </div>

    <!-- Section 7: Related Jobs -->
    {related_html}

    <!-- Section 8: Subscribe Widget -->
    <div style="margin: 24px 0;">
      <div id="subscribe-widget" data-service-id="{esc(slug)}"></div>
    </div>

    <!-- Section 9: VIP Telegram Banner -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 24px 28px; color: #ffffff; margin: 24px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <h3 style="margin: 0 0 6px 0; font-size: 1.3rem; color: #ffffff;">✈️ SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
        <p style="margin: 0; font-size: 0.95rem; opacity: 0.95;">सभी सरकारी भर्तियों के एडमिट कार्ड, आंसर-की, रिजल्ट और फ्री स्टडी मटेरियल की तुरंत अपडेट्स पाएं।</p>
      </div>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #ffffff; color: #0088cc; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
        अभी जॉइन करें (निःशुल्क) ↗
      </a>
    </div>

    <p class="job-post-back" style="margin-top: 24px;">
      <a href="index.html" style="color: var(--color-primary); text-decoration: none; font-weight: 700;">← Back to Job Alerts Directory</a>
    </p>
  </main>

  <div id="site-footer">
{footer_html.strip()}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/subscribe.js"></script>
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
