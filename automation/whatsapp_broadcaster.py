import os
import sys
import json
import requests
from datetime import datetime, timezone
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
LATEST_UPDATES_FILE = DATA_DIR / "latest-updates.json"
BLOG_POSTS_FILE = DATA_DIR / "blog-posts.json"
HISTORY_FILE = DATA_DIR / "whatsapp_posted_history.json"

CHANNEL_INVITE_URL = "https://whatsapp.com/channel/0029VbDj7gCDp2Q8SYdFwj14"
BASE_URL = "https://sarkarisewaindia.com"

# GitHub Secrets / Environment Variables
WHATSAPP_WEBHOOK_URL = os.environ.get("WHATSAPP_WEBHOOK_URL", "").strip()
WHATSAPP_API_URL = os.environ.get("WHATSAPP_API_URL", "").strip()
WHATSAPP_API_TOKEN = os.environ.get("WHATSAPP_API_TOKEN", "").strip()
WHATSAPP_CHANNEL_ID = os.environ.get("WHATSAPP_CHANNEL_ID", "").strip()

def load_history():
    if HISTORY_FILE.exists():
        try:
            with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []

def save_history(history):
    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2, ensure_ascii=False)

def format_whatsapp_message(title, summary, url):
    """
    Format attractive, emoji-rich WhatsApp broadcast message.
    """
    msg = (
        f"📢 *सख्त सरकारी अपडेट | SarkariSewa India*\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"🔥 *{title}*\n\n"
        f"📝 {summary}\n\n"
        f"👉 *पूरी जानकारी और आधिकारिक लिंक:*\n"
        f"{url}\n\n"
        f"📲 *रोजाना सरकारी योजनाओं व नौकरियों के लिए हमारे चैनल से जुड़ें:*\n"
        f"{CHANNEL_INVITE_URL}"
    )
    return msg

def send_message_to_whatsapp(msg_payload):
    """
    Send to configured WhatsApp Gateway or Webhook.
    """
    message_text = msg_payload["message"]
    
    # 1. Custom Webhook (Make.com, Pipedream, Zapier, Custom Server)
    if WHATSAPP_WEBHOOK_URL:
        try:
            resp = requests.post(WHATSAPP_WEBHOOK_URL, json=msg_payload, timeout=15)
            print(f"  [Webhook] Dispatched to webhook. Status: {resp.status_code}")
            return resp.status_code in [200, 201, 202, 204]
        except Exception as e:
            print(f"  [Webhook Error] {e}")
            return False

    # 2. Direct WhatsApp API Gateway (Whapi, GreenAPI, UltraMsg, etc.)
    elif WHATSAPP_API_URL and WHATSAPP_API_TOKEN:
        try:
            headers = {
                "Authorization": f"Bearer {WHATSAPP_API_TOKEN}",
                "Content-Type": "application/json"
            }
            body = {
                "to": WHATSAPP_CHANNEL_ID,
                "body": message_text,
                "typing_time": 0
            }
            resp = requests.post(WHATSAPP_API_URL, json=body, headers=headers, timeout=15)
            print(f"  [API Gateway] Dispatched to WhatsApp API. Status: {resp.status_code}")
            return resp.status_code in [200, 201]
        except Exception as e:
            print(f"  [API Gateway Error] {e}")
            return False

    else:
        # Dry Run Mode
        print("  [Dry Run / Simulation] (No WHATSAPP_WEBHOOK_URL or API credentials configured in secrets yet)")
        print("  --- Message Preview ---")
        print(message_text)
        print("  -----------------------")
        return True

def broadcast_latest_updates():
    print("=" * 70)
    print("📱 SARKARISEWA WHATSAPP CHANNEL BROADCASTER")
    print("=" * 70)
    
    history = load_history()
    posted_ids = set(history)
    new_posted = []
    
    # 1. Check Latest Citizen Scheme Updates
    if LATEST_UPDATES_FILE.exists():
        with open(LATEST_UPDATES_FILE, "r", encoding="utf-8") as f:
            updates = json.load(f)
            
        for item in updates:
            item_id = item.get("id") or item.get("slug")
            if not item_id or item_id in posted_ids:
                continue
                
            title = item.get("titleHi") or item.get("title") or item.get("titleEn", "")
            summary = item.get("summaryHi") or item.get("summary") or item.get("description", "")
            url = item.get("articleUrl") or f"{BASE_URL}/updates/{item.get('slug', '')}.html"
            if not url.startswith("http"):
                url = f"{BASE_URL}/{url.lstrip('/')}"
                
            message_text = format_whatsapp_message(title, summary, url)
            payload = {
                "id": item_id,
                "title": title,
                "summary": summary,
                "url": url,
                "message": message_text,
                "timestamp": datetime.now(timezone.utc).isoformat()
            }
            
            print(f"\n🚀 Broadcasting Update: {title}")
            success = send_message_to_whatsapp(payload)
            if success:
                new_posted.append(item_id)
                posted_ids.add(item_id)
                
    # 2. Check Blog Guides
    if BLOG_POSTS_FILE.exists():
        with open(BLOG_POSTS_FILE, "r", encoding="utf-8") as f:
            blogs = json.load(f)
            
        for b in blogs[:5]: # Check latest 5 blogs
            slug = b.get("slug")
            if not slug or slug in posted_ids:
                continue
                
            title = b.get("title", {}).get("hi") or b.get("title", {}).get("en") or ""
            summary = b.get("excerpt", {}).get("hi") or b.get("excerpt", {}).get("en") or ""
            url = f"{BASE_URL}/blog/{slug}.html"
            
            message_text = format_whatsapp_message(title, summary, url)
            payload = {
                "id": slug,
                "title": title,
                "summary": summary,
                "url": url,
                "message": message_text,
                "timestamp": datetime.now(timezone.utc).isoformat()
            }
            
            print(f"\n🚀 Broadcasting Blog: {title}")
            success = send_message_to_whatsapp(payload)
            if success:
                new_posted.append(slug)
                posted_ids.add(slug)
                
    if new_posted:
        history.extend(new_posted)
        save_history(history)
        print(f"\n✅ Successfully processed {len(new_posted)} new items for WhatsApp broadcasting.")
    else:
        print("\n✨ All latest updates have already been broadcasted. No new messages queued.")

if __name__ == "__main__":
    broadcast_latest_updates()
