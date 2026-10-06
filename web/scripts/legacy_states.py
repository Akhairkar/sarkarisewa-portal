"""Extract the Hindi content of old state document pages (states/*.html)
into JSON for the new-design route web/src/pages/states/[...legacy].astro.

Content is kept as written (no new facts); English duplicates, inline
styles, scripts and injected widgets are dropped. Usage:
  python3 web/scripts/legacy_states.py <doc-suffix> [...]   e.g. birth-certificate death-certificate
Needs beautifulsoup4 (only for this one-off conversion, not for builds).
"""
import json, re, sys
from pathlib import Path
from bs4 import BeautifulSoup, NavigableString

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "web/src/data/legacy-states"
ASTRO = ROOT / "web/src/pages/states"
SECTIONS = ["overview", "eligibility", "benefits", "check-list", "documents", "forms", "apply-online", "apply", "voterlist"]
KEEP = {"p", "ul", "ol", "li", "strong", "b", "em", "a", "table", "thead", "tbody", "tr", "th", "td", "h3", "h4", "br", "dl", "dt", "dd"}
DROP = {"script", "style", "iframe", "button", "form", "input", "select", "svg", "img", "noscript", "nav", "aside", "picture", "video", "canvas"}


def link(href):
    if not href or href.startswith(("javascript:", "#", "mailto:", "tel:")):
        return href if href and href.startswith(("mailto:", "tel:")) else None
    if href.startswith(("http://", "https://")):
        return href.replace("http://sarkarisewaindia.com", "").replace("https://sarkarisewaindia.com", "") or "/"
    if href.startswith("/"):
        return href
    parts = ["states"]
    for seg in href.split("/"):
        if seg == "..":
            parts = parts[:-1]
        elif seg not in ("", "."):
            parts.append(seg)
    return "/" + "/".join(parts)


def clean(node):
    for en in node.select('[data-lang-show="en"]'):
        en.decompose()
    # Fact grids (label + value) become a definition list.
    for item in node.select(".fact-item"):
        lab, val = item.select_one(".fact-label"), item.select_one(".fact-value")
        if lab and val:
            item.name = "dl"
            item.attrs = {}
            lab.name, val.name = "dt", "dd"
            lab.attrs, val.attrs = {}, {}
    for t in node.find_all(DROP):
        t.decompose()
    for t in node.find_all(True):
        if t.name in KEEP:
            href = t.get("href") if t.name == "a" else None
            t.attrs = {}
            if t.name == "a":
                h = link(href)
                if not h:
                    t.unwrap()
                    continue
                t["href"] = h
                if h.startswith("http"):
                    t["target"] = "_blank"
                    t["rel"] = "noopener nofollow"
        elif t.name in ("h2",):
            t.name = "h3"
            t.attrs = {}
        elif t.name in ("summary",):
            t.name = "h4"
            t.attrs = {}
        else:
            t.unwrap()
    html = node.decode_contents()
    html = re.sub(r"\s+", " ", html)
    html = re.sub(r"<(p|li|td|th|h3|h4|strong|dt|dd)>\s*</\1>", "", html)
    # Consecutive fact pairs -> one <dl class="facts"> (the new design's fact grid).
    html = re.sub(r"(?:<dl>.*?</dl>\s*)+", lambda m: '<dl class="facts">' + re.sub(r"<(/?)dl>", r"<\1div>", m.group(0).strip()) + "</dl>", html)
    return html.strip()


def text(node):
    return re.sub(r"\s+", " ", node.get_text(" ")).strip() if node else ""


def hi(node):
    if not node:
        return ""
    h = node.select_one('[data-lang-show="hi"]')
    return text(h) if h else text(node)


def extract(path):
    s = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
    main = s.find("main")
    if not main:
        return None
    out = {
        "title": text(s.title),
        "description": (s.find("meta", attrs={"name": "description"}) or {}).get("content", ""),
        "h1": hi(main.find("h1")),
        "intro": "",
        "sections": [],
        "faqs": [],
    }
    art = main.find("article") or main
    first = art.find("section", id=False)
    if first and not first.find("h2"):
        out["intro"] = clean(first)
    for sid in SECTIONS:
        sec = main.find("section", id=sid)
        if not sec:
            continue
        h2 = sec.find("h2")
        title = hi(h2)
        if h2:
            h2.decompose()
        body = clean(sec)
        if len(re.sub(r"<[^>]+>", " ", body).split()) >= 8:
            out["sections"].append({"id": sid, "title": title, "html": body})
    faq = main.find("section", id="faqs")
    if faq:
        for d in faq.find_all("details"):
            q = hi(d.find("summary"))
            d.find("summary").decompose() if d.find("summary") else None
            a = d.select_one('[data-lang-show="hi"]')
            a = text(a) if a else text(d)
            if q and a:
                out["faqs"].append({"q": q, "a": a})
    return out


def main(suffixes):
    done, thin = [], []
    for f in sorted((ROOT / "states").glob("*.html")):
        slug = f.stem
        if not any(slug.endswith("-" + sfx) for sfx in suffixes) or (ASTRO / f"{slug}.astro").exists():
            continue
        d = extract(f)
        if not d or not d["sections"]:
            thin.append(slug)
            continue
        words = sum(len(re.sub(r"<[^>]+>", " ", x["html"]).split()) for x in d["sections"]) + sum(len(x["a"].split()) for x in d["faqs"])
        if words < 150:
            thin.append(f"{slug} ({words} words)")
            continue
        (OUT / f"{slug}.json").write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
        done.append(slug)
    print(f"converted {len(done)}; skipped {len(thin)}: {thin}")


if __name__ == "__main__":
    main(sys.argv[1:])
