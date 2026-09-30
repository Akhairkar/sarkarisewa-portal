#!/usr/bin/env python3
"""SarkariSewa India — Re-Audit v3 repair pass.

Idempotent, repository-wide repairs for the 30 Sep 2026 audit:
- retroactively noindex thin CSC/Jan Aushadhi district pages
- noindex duplicate nested state index URLs
- noindex updates/account/private pages and remove FAQPage JSON-LD from updates
- repair missing/broken canonical targets
- repair confirmed broken internal service links
- add missing canonicals to indexable static HTML
- add defer only to external scripts found in <head> (bottom scripts are already
  non-render-blocking and are intentionally left alone)
"""

from pathlib import Path
from urllib.parse import urljoin, urlparse
import json
import re

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://sarkarisewaindia.com"
THRESHOLD = 5

STATE_CODES = {
    "an":"andaman-nicobar","ap":"andhra-pradesh","ar":"arunachal-pradesh","as":"assam","br":"bihar",
    "ch":"chandigarh","cg":"chhattisgarh","dn":"dadra-nagar-haveli-daman-diu","ga":"goa","gj":"gujarat",
    "hr":"haryana","hp":"himachal-pradesh","jk":"jammu-kashmir","jh":"jharkhand","ka":"karnataka",
    "kl":"kerala","la":"ladakh","ld":"lakshadweep","mp":"madhya-pradesh","mh":"maharashtra",
    "mn":"manipur","ml":"meghalaya","mz":"mizoram","nl":"nagaland","od":"odisha","pb":"punjab",
    "py":"puducherry","rj":"rajasthan","sk":"sikkim","tn":"tamil-nadu","tg":"telangana","tr":"tripura",
    "up":"uttar-pradesh","uk":"uttarakhand","wb":"west-bengal",
}

KNOWN_REPLACEMENTS = {
    "https://sarkarisewaindia.com/service/ayushman-bharat-card.html": "https://sarkarisewaindia.com/service/ayushman-bharat.html",
    "https://sarkarisewaindia.com/service/driving-license.html": "https://sarkarisewaindia.com/service/driving-licence.html",
    "https://sarkarisewaindia.com/service/pm-fasal-bima.html": "https://sarkarisewaindia.com/service/pm-fasal-bima-yojana.html",
    "https://sarkarisewaindia.com/service/pm-kusum-solar-yojana.html": "https://sarkarisewaindia.com/service/pm-kusam-solar-pump-apply.html",
    "../service/epfo-uan.html": "../service/epfo.html",
    "/service/epfo-uan.html": "/service/epfo.html",
    "service/epfo-uan.html": "service/epfo.html",
    "../service/gst-registration.html": "../service/gst.html",
    "/service/gst-registration.html": "/service/gst.html",
    "service/gst-registration.html": "service/gst.html",
    "../service/ncs-ncs-national-career-service.html": "../service/ncs-national-career-service.html",
    "/service/ncs-ncs-national-career-service.html": "/service/ncs-national-career-service.html",
    "service/ncs-ncs-national-career-service.html": "service/ncs-national-career-service.html",
    "../service/vidyalakshmi-education-loan.html": "https://www.vidyalakshmi.co.in/Students/",
    "/service/vidyalakshmi-education-loan.html": "https://www.vidyalakshmi.co.in/Students/",
    "service/vidyalakshmi-education-loan.html": "https://www.vidyalakshmi.co.in/Students/",
    "../service/ayushman-bharat-card.html": "../service/ayushman-bharat.html",
    "../service/driving-license.html": "../service/driving-licence.html",
    "../service/pm-fasal-bima.html": "../service/pm-fasal-bima-yojana.html",
}

def own_url(path):
    return BASE + "/" + path.relative_to(ROOT).as_posix()

def ensure_noindex(html):
    tag = '<meta name="robots" content="noindex,follow">'
    pattern = re.compile(r'<meta\s+[^>]*name=["\']robots["\'][^>]*>', re.I)
    if pattern.search(html):
        return pattern.sub(tag, html, count=1)
    return html.replace("<head>", "<head>\n  " + tag, 1)

def has_noindex(html):
    return bool(re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex', html, re.I))

def canonical(html):
    m = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', html, re.I)
    return m.group(1) if m else None

def set_canonical(html, value):
    tag = f'<link rel="canonical" href="{value}">'
    pattern = re.compile(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*>', re.I)
    if pattern.search(html):
        return pattern.sub(tag, html, count=1)
    return html.replace("</head>", "  " + tag + "\n</head>", 1)

def remove_faq_schema(html):
    def replace_script(m):
        raw = m.group(1).strip()
        try:
            data = json.loads(raw)
        except Exception:
            return m.group(0)
        changed = False
        def clean(node):
            nonlocal changed
            if isinstance(node, dict):
                if node.get("@type") == "FAQPage":
                    changed = True
                    return None
                if isinstance(node.get("@graph"), list):
                    new_graph = []
                    for item in node["@graph"]:
                        cleaned = clean(item)
                        if cleaned is not None:
                            new_graph.append(cleaned)
                    node["@graph"] = new_graph
                for k, v in list(node.items()):
                    if k != "@graph":
                        cv = clean(v)
                        if cv is None and isinstance(v, dict):
                            node.pop(k, None)
                        elif cv is not None and cv is not v:
                            node[k] = cv
                return node
            if isinstance(node, list):
                out = []
                for item in node:
                    cleaned = clean(item)
                    if cleaned is not None:
                        out.append(cleaned)
                return out
            return node
        cleaned = clean(data)
        if not changed:
            return m.group(0)
        if cleaned is None:
            return ""
        return '<script type="application/ld+json">\n' + json.dumps(cleaned, ensure_ascii=False, indent=2) + '\n</script>'
    return re.sub(r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>', replace_script, html, flags=re.I|re.S)

def add_head_defer(html):
    def repl(m):
        tag = m.group(0)
        if re.search(r'\b(?:defer|async)\b', tag, re.I):
            return tag
        return re.sub(r'(<script\b)', r'\1 defer', tag, count=1, flags=re.I)
    head_match = re.search(r'<head\b[^>]*>(.*?)</head>', html, re.I|re.S)
    if not head_match:
        return html
    head = head_match.group(1)
    new_head = re.sub(r'<script\b[^>]*\bsrc=["\'][^"\']+["\'][^>]*>', repl, head, flags=re.I)
    return html[:head_match.start(1)] + new_head + html[head_match.end(1):]

def _replace_href(html, old, new):
    pattern = re.compile(r'(\bhref=["\\\'])' + re.escape(old) + r'(["\\\'])', re.I)
    return pattern.sub(lambda m: m.group(1) + new + m.group(2), html)

def repair_links(html):
    original = html
    for old, new in KNOWN_REPLACEMENTS.items():
        html = _replace_href(html, old, new)
    return html, html != original

def repair_contextual_links(html, path):
    original = html
    rel = path.relative_to(ROOT).as_posix()
    if rel.startswith(("private/", "account/")):
        html = re.sub(r'<meta\\s+[^>]*name=["\']robots["\'][^>]*>', '<meta name="robots" content="noindex,nofollow">', html, count=1, flags=re.I)
        html = re.sub(r'<link\\s+[^>]*rel=["\']canonical["\'][^>]*>', '', html, count=1, flags=re.I)

    if rel.startswith("updates/"):
        html = html.replace("../../../service/", "../service/")
        html = html.replace("../../service/", "../service/")
        html = html.replace("../../claim-your-csc.html", "../claim-your-csc.html")

    # Repair legacy two-letter state-service links only when the destination
    # actually exists. This preserves valid short-code pages while fixing
    # references that point at the newer full-state filenames.
    service_dir = ROOT / "service"
    existing = {p.name for p in service_dir.glob("*.html")}
    for code, state in STATE_CODES.items():
        for service in ("caste-certificate", "domicile-certificate", "ration-card", "income-certificate"):
            candidates = [
                f"{state}-{service}.html",
                f"{code}-{service}.html",
            ]
            target = next((name for name in candidates if name in existing), None)
            if not target:
                continue
            old_name = f"{code}-{service}.html"
            for prefix in ("../service/", "/service/", "service/", BASE + "/service/"):
                html = _replace_href(html, prefix + old_name, prefix + target)
    return html, html != original

def canonical_local_path(value):
    raw = value.split("#",1)[0].split("?",1)[0]
    if raw.startswith(BASE):
        raw = raw[len(BASE):] or "/"
    if raw.startswith("/"):
        return (ROOT / raw.lstrip("/")).resolve()
    return None

def resolve_duplicate_canonicals(pages):
    groups = {}
    for path in pages:
        c = canonical(path.read_text(encoding="utf-8", errors="ignore"))
        if not c:
            continue
        groups.setdefault(c.rstrip("/"), []).append(path)
    changed = 0
    for target, members in groups.items():
        if len(members) < 2:
            continue
        local = canonical_local_path(target)
        if local is None or not local.exists():
            continue
        keep = next((p for p in members if p.resolve() == local.resolve()), min(members, key=lambda p: str(p)))
        for p in members:
            if p.resolve() == keep.resolve():
                continue
            html = p.read_text(encoding="utf-8", errors="ignore")
            new = ensure_noindex(html)
            new = set_canonical(new, own_url(keep))
            if new != html:
                p.write_text(new, encoding="utf-8")
                changed += 1
    return changed

def target_from_url(page, value):
    raw = value.split("#",1)[0].split("?",1)[0]
    if raw.startswith(BASE):
        raw = raw[len(BASE):] or "/"
    if raw.startswith("http:") or raw.startswith("https:") or raw.startswith("//"):
        return None
    if raw.startswith("/"):
        return (ROOT / raw.lstrip("/")).resolve()
    return (page.parent / raw).resolve()

def repair_missing_canonical(html, path):
    c = canonical(html)
    if not c:
        return set_canonical(html, own_url(path)), True
    target = target_from_url(path, c)
    if target is not None:
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            target = None
        if target is not None and not target.exists():
            return set_canonical(html, own_url(path)), True
    return html, False

def thin_csc(path, html):
    rel = path.relative_to(ROOT).as_posix().split("/")
    if len(rel) != 4 or rel[0:2] != ["service", "csc-locator"] or rel[-1] == "index.html":
        return False
    m = re.search(r'<tbody\b[^>]*>(.*?)</tbody>', html, re.I|re.S)
    count = len(re.findall(r'<tr\b', m.group(1), re.I)) if m else 0
    return count < THRESHOLD

def thin_ja(path, html):
    rel = path.relative_to(ROOT).as_posix().split("/")
    if len(rel) != 4 or rel[0:2] != ["service", "jan-aushadhi"] or rel[-1] == "index.html":
        return False
    m = re.search(r'"numberOfItems"\s*:\s*(\d+)', html)
    count = int(m.group(1)) if m else 0
    return count < THRESHOLD

def duplicate_state_index(path):
    rel = path.relative_to(ROOT).as_posix().split("/")
    if len(rel) == 4 and rel[0] == "service" and rel[2] in {"csc-locator", "jan-aushadhi"}:
        return False
    if len(rel) == 4 and rel[0:2] in (["service", "csc-locator"], ["service", "jan-aushadhi"]) and rel[-1] == "index.html":
        return True
    return False

def state_index_canonical(path):
    rel = path.relative_to(ROOT).as_posix().split("/")
    if len(rel) == 4 and rel[-1] == "index.html":
        state = rel[2]
        candidate = ROOT / rel[0] / rel[1] / f"{state}.html"
        if candidate.exists():
            return own_url(candidate)
    return None

def main():
    pages = sorted(ROOT.rglob("*.html"))
    changed = 0
    counters = {
        "thin_noindex": 0,
        "duplicate_indexes": 0,
        "updates_noindex": 0,
        "faq_schema_removed": 0,
        "canonical_repairs": 0,
        "canonical_added": 0,
        "known_link_repairs": 0,
        "head_scripts_deferred": 0,
    }

    for path in pages:
        html = path.read_text(encoding="utf-8", errors="ignore")
        original = html
        rel = path.relative_to(ROOT).as_posix()

        if rel.startswith("updates/"):
            if not has_noindex(html):
                html = ensure_noindex(html)
                counters["updates_noindex"] += 1
            new_html = remove_faq_schema(html)
            if new_html != html:
                counters["faq_schema_removed"] += 1
            html = new_html

        if rel.startswith("account/") or rel.startswith("private/"):
            html = ensure_noindex(html)

        if thin_csc(path, html) or thin_ja(path, html):
            if not has_noindex(html):
                html = ensure_noindex(html)
                counters["thin_noindex"] += 1

        if rel.endswith("/index.html") and (rel.startswith("service/csc-locator/") or rel.startswith("service/jan-aushadhi/")):
            target = state_index_canonical(path)
            if target:
                html = ensure_noindex(html)
                html = set_canonical(html, target)
                counters["duplicate_indexes"] += 1

        html, c = repair_missing_canonical(html, path)
        if c:
            counters["canonical_repairs"] += 1

        html, l = repair_links(html)
        html, contextual = repair_contextual_links(html, path)
        if l or contextual:
            counters["known_link_repairs"] += 1

        # Only scripts in <head> are render-blocking. Bottom-of-body scripts
        # are deliberately left unchanged because adding defer there can break
        # pages whose inline code expects earlier scripts to have executed.
        new_html = add_head_defer(html)
        if new_html != html:
            counters["head_scripts_deferred"] += 1
        html = new_html

        if html != original:
            path.write_text(html, encoding="utf-8")
            changed += 1

    print(f"HTML pages scanned: {len(pages)}")
    duplicate_repairs = resolve_duplicate_canonicals(pages)
    changed += duplicate_repairs
    counters["duplicate_canonical_repairs"] = duplicate_repairs

    print(f"Files changed: {changed}")
    for k, v in counters.items():
        print(f"{k}: {v}")

if __name__ == "__main__":
    main()
