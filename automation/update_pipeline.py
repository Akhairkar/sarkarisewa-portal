import os
import json
import hashlib
import time
import feedparser
from datetime import datetime, timezone
import requests
from bs4 import BeautifulSoup
import re
import google.generativeai as genai

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(ROOT_DIR, 'data')
SOURCES_FILE = os.path.join(ROOT_DIR, 'automation', 'sources.json')
LATEST_UPDATES_FILE = os.path.join(DATA_DIR, 'latest-updates.json')
PENDING_UPDATES_FILE = os.path.join(DATA_DIR, 'pending-updates.json')
LOG_FILE = os.path.join(ROOT_DIR, 'automation', 'run.log')

DRY_RUN = os.environ.get('DRY_RUN', 'false').lower() == 'true'

def load_json(filepath, default_value):
    if os.path.exists(filepath):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return default_value
    return default_value

def save_json(filepath, data):
    if DRY_RUN:
        print(f"[DRY RUN] Would save to {filepath}")
        return
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def log_run(stats):
    log_content = f"""Daily Update Run
Date: {datetime.now(timezone.utc).strftime('%d %b %Y %H:%M:%S UTC')}
Sources checked: {stats['checked']}
Successful: {stats['successful']}
Failed: {stats['failed']}
New items: {stats['new']}
Duplicates: {stats['duplicates']}
Published: {stats['published']}
Pending review: {stats['pending']}
Rejected: {stats['rejected']}
-------------------------------------------
"""
    print(log_content)
    if not DRY_RUN:
        with open(LOG_FILE, 'a', encoding='utf-8') as f:
            f.write(log_content)

def generate_id(url, title):
    hash_str = f"{url}-{title}".encode('utf-8')
    return hashlib.md5(hash_str).hexdigest()[:12]

def fetch_rss(source):
    items = []
    feed = feedparser.parse(source['url'])
    if feed.bozo:
        raise Exception(f"Failed to parse RSS: {source['url']}")
    for entry in feed.entries:
        items.append({
            'title': entry.get('title', ''),
            'url': entry.get('link', ''),
            'published': entry.get('published', '') or entry.get('updated', ''),
            'summary': entry.get('summary', ''),
            'source_name': source['name'],
            'official': source.get('official', False),
            'category': source.get('category', 'General')
        })
    return items

def summarize_ai(text):
    api_key = os.environ.get('GEMINI_API_KEY')
    if api_key:
        try:
            genai.configure(api_key=api_key)
            model = genai.GenerativeModel('gemini-1.5-flash')
            prompt = f"""
You are an expert content writer for SarkariSewa India. 
We have received a new government update. Do NOT just copy-paste the text. 
Add value for the common man by extracting the most important takeaways, deadlines, and eligibility criteria in simple words.
Provide the output STRICTLY as a JSON object with the following keys, and nothing else:
"title_en": (Clear, catchy English title)
"title_hi": (Clear, catchy Hindi title)
"summary_en": (2-3 sentences adding value and explaining why this matters to the common citizen)
"summary_hi": (2-3 sentences adding value in natural Hindi)
"content_en": (Bullet points of main takeaways in English)
"content_hi": (Bullet points of main takeaways in Hindi)

Original Text: {text}
"""
            response = model.generate_content(prompt)
            # Clean possible markdown block
            res_text = response.text.strip()
            if res_text.startswith("```json"):
                res_text = res_text[7:-3].strip()
            return json.loads(res_text)
        except Exception as e:
            print(f"AI Summarization failed: {e}")
            # Fallback to basic if AI fails

    # Basic fallback
    return {
        "title_en": text[:60] + "...",
        "title_hi": text[:60] + "...",
        "summary_en": text[:150] + "...",
        "summary_hi": text[:150] + "...",
        "content_en": text,
        "content_hi": text
    }

def main():
    sources = load_json(SOURCES_FILE, [])
    latest_updates = load_json(LATEST_UPDATES_FILE, [])
    pending_updates = load_json(PENDING_UPDATES_FILE, [])
    
    existing_ids = {u['id'] for u in latest_updates + pending_updates}
    existing_urls = {u['source_url'] for u in latest_updates + pending_updates}
    
    stats = {
        'checked': len(sources), 'successful': 0, 'failed': 0,
        'new': 0, 'duplicates': 0, 'published': 0, 'pending': 0, 'rejected': 0
    }
    
    new_items = []
    
    for source in sources:
        if not source.get('enabled', True):
            continue
        try:
            items = []
            if source['type'] == 'rss':
                items = fetch_rss(source)
            stats['successful'] += 1
            
            for item in items:
                if not item['url'] or not item['title']:
                    stats['rejected'] += 1
                    continue
                
                item_id = generate_id(item['url'], item['title'])
                if item_id in existing_ids or item['url'] in existing_urls:
                    stats['duplicates'] += 1
                    continue
                
                clean_summary = BeautifulSoup(item['summary'], "html.parser").get_text()
                
                # Attempt AI Summarization (Fallback to basic mapping)
                ai_data = summarize_ai(item['title'] + " " + clean_summary)
                
                update_obj = {
                    "id": item_id,
                    "slug": re.sub(r'[^a-z0-9]+', '-', ai_data['title_en'].lower()).strip('-'),
                    "title_en": item['title'], # Keeping original title
                    "title_hi": ai_data['title_hi'],
                    "summary_en": ai_data['summary_en'],
                    "summary_hi": ai_data['summary_hi'],
                    "content_en": ai_data['content_en'],
                    "content_hi": ai_data['content_hi'],
                    "category": item['category'],
                    "published_date": item['published'] or datetime.now(timezone.utc).isoformat(),
                    "updated_date": datetime.now(timezone.utc).isoformat(),
                    "source_name": item['source_name'],
                    "source_url": item['url'],
                    "official_source": item['official'],
                    "status": "published" if item['official'] else "pending",
                    "featured": False
                }
                
                if update_obj['status'] == 'published':
                    latest_updates.insert(0, update_obj)
                    stats['published'] += 1
                else:
                    pending_updates.insert(0, update_obj)
                    stats['pending'] += 1
                stats['new'] += 1
                existing_ids.add(item_id)
                existing_urls.add(item['url'])
                
        except Exception as e:
            print(f"Error fetching {source['name']}: {e}")
            stats['failed'] += 1
            
    # Save files
    save_json(LATEST_UPDATES_FILE, latest_updates)
    save_json(PENDING_UPDATES_FILE, pending_updates)
    
    log_run(stats)
    
    # Update sitemap
    update_sitemap(latest_updates)

def update_sitemap(updates):
    if not updates or DRY_RUN:
        return
    sitemap_path = os.path.join(ROOT_DIR, 'sitemap.xml')
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # If latest-updates.html is not in sitemap, add it
        if 'latest-updates.html' not in content:
            new_url = f"  <url>\n    <loc>https://sarkarisewaindia.com/latest-updates.html</loc>\n    <lastmod>{datetime.now(timezone.utc).date().isoformat()}</lastmod>\n  </url>\n</urlset>"
            content = content.replace("</urlset>", new_url)
            with open(sitemap_path, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    main()
