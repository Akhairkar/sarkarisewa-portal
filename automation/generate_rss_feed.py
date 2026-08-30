import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
RSS_FILE = ROOT_DIR / "feed.xml"

BASE_URL = "https://sarkarisewaindia.com"

def generate_rss():
    print("Generating standard RSS 2.0 feed (feed.xml)...")
    
    items_xml = []
    
    # 1. Add Latest Updates
    updates_file = DATA_DIR / "latest-updates.json"
    if updates_file.exists():
        with open(updates_file, "r", encoding="utf-8") as f:
            updates = json.load(f)
        for u in updates[:15]:
            title = escape(u.get("titleHi") or u.get("title") or u.get("titleEn") or "")
            desc = escape(u.get("summaryHi") or u.get("summary") or "")
            url = u.get("articleUrl") or f"{BASE_URL}/updates/{u.get('slug', '')}.html"
            if not url.startswith("http"):
                url = f"{BASE_URL}/{url.lstrip('/')}"
            
            pub_date = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S +0000")
            items_xml.append(f"""    <item>
      <title>{title}</title>
      <link>{url}</link>
      <guid>{url}</guid>
      <description>{desc}</description>
      <pubDate>{pub_date}</pubDate>
    </item>""")
            
    # 2. Add Blog Posts
    blogs_file = DATA_DIR / "blog-posts.json"
    if blogs_file.exists():
        with open(blogs_file, "r", encoding="utf-8") as f:
            blogs = json.load(f)
        for b in blogs[:10]:
            title = escape(b.get("title", {}).get("hi") or b.get("title", {}).get("en") or "")
            desc = escape(b.get("excerpt", {}).get("hi") or b.get("excerpt", {}).get("en") or "")
            url = f"{BASE_URL}/blog/{b.get('slug', '')}.html"
            pub_date = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S +0000")
            items_xml.append(f"""    <item>
      <title>{title}</title>
      <link>{url}</link>
      <guid>{url}</guid>
      <description>{desc}</description>
      <pubDate>{pub_date}</pubDate>
    </item>""")

    feed_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SarkariSewa India - Latest Government Updates, Schemes &amp; Job Alerts</title>
    <link>{BASE_URL}</link>
    <description>Official alerts, schemes, and daily updates for Indian citizens.</description>
    <language>hi-IN</language>
    <atom:link href="{BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
{chr(10).join(items_xml)}
  </channel>
</rss>"""

    with open(RSS_FILE, "w", encoding="utf-8") as f:
        f.write(feed_xml)
        
    print(f"✅ Created {RSS_FILE} with {len(items_xml)} items.")

if __name__ == "__main__":
    generate_rss()
