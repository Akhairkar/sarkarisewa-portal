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
HISTORY_FILE = DATA_DIR / "telegram_posted_history.json"

BASE_URL = "https://sarkarisewaindia.com"
TELEGRAM_CHANNEL = os.environ.get("TELEGRAM_CHANNEL", "@sarkarisewaindia").strip()
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()

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

def format_telegram_message(title, summary, url):
    msg = (
        f"*SarkariSewa India — Latest Update*\n"
        f"{'─' * 30}\n"
        f"*{title}*\n\n"
        f"{summary}\n\n"
        f"*Poori Jankari:*\n"
        f"{url}\n\n"
        f"[sarkarisewaindia.com]({BASE_URL}) | [Channel Join Karein](https://t.me/sarkarisewaindia)"
    )
    return msg

def send_to_telegram(text):
    if not TELEGRAM_BOT_TOKEN:
        print("  [Dry Run] TELEGRAM_BOT_TOKEN not set — preview mode only.")
        print(text[:200])
        return True
    try:
        resp = requests.post(
            f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage",
            json={
                "chat_id": TELEGRAM_CHANNEL,
                "text": text,
                "parse_mode": "Markdown",
                "disable_web_page_preview": False
            },
            timeout=15
        )
        data = resp.json()
        if data.get("ok"):
            print(f"  [Telegram] Sent! message_id: {data['result']['message_id']}")
            return True
        else:
            print(f"  [Telegram Error] {data.get('description')}")
            return False
    except Exception as e:
        print(f"  [Telegram Exception] {e}")
        return False

def broadcast():
    print("=" * 60)
    print("SARKARISEWA TELEGRAM CHANNEL BROADCASTER")
    print("=" * 60)

    history = load_history()
    posted_ids = set(history)
    new_posted = []

    # 1. Latest Updates (top 5 newest)
    if LATEST_UPDATES_FILE.exists():
        with open(LATEST_UPDATES_FILE, "r", encoding="utf-8") as f:
            updates = json.load(f)

        sent = 0
        for item in updates:
            if sent >= 3:
                break
            item_id = item.get("id") or item.get("slug")
            if not item_id or item_id in posted_ids:
                continue

            title = (
                item.get("title_hi") or item.get("titleHi") or
                item.get("title") or item.get("title_en") or
                item.get("titleEn") or "Sarkari Update"
            )
            summary = (
                item.get("summary_hi") or item.get("summaryHi") or
                item.get("summary") or item.get("summary_en") or
                item.get("description") or ""
            )
            url = item.get("articleUrl") or f"{BASE_URL}/updates/{item.get('slug', '')}.html"
            if not url.startswith("http"):
                url = f"{BASE_URL}/{url.lstrip('/')}"

            text = format_telegram_message(title, summary, url)
            print(f"\nBroadcasting: {title[:60]}...")
            if send_to_telegram(text):
                new_posted.append(item_id)
                posted_ids.add(item_id)
                sent += 1

    # 2. Latest Blogs (top 3 newest)
    if BLOG_POSTS_FILE.exists():
        with open(BLOG_POSTS_FILE, "r", encoding="utf-8") as f:
            blogs = json.load(f)

        sent = 0
        for b in blogs:
            if sent >= 2:
                break
            slug = b.get("slug")
            if not slug or slug in posted_ids:
                continue

            title = (
                b.get("title", {}).get("hi") or b.get("title", {}).get("en") or
                b.get("titleHi") or b.get("titleEn") or ""
            )
            summary = (
                b.get("excerpt", {}).get("hi") or b.get("excerpt", {}).get("en") or ""
            )
            url = f"{BASE_URL}/blog/{slug}.html"

            text = format_telegram_message(title, summary, url)
            print(f"\nBroadcasting Blog: {title[:60]}...")
            if send_to_telegram(text):
                new_posted.append(slug)
                posted_ids.add(slug)
                sent += 1

    if new_posted:
        history.extend(new_posted)
        save_history(history)
        print(f"\n✅ Successfully broadcast {len(new_posted)} items to Telegram Channel!")
    else:
        print("\n✨ No new items to broadcast. All up to date.")

if __name__ == "__main__":
    broadcast()
