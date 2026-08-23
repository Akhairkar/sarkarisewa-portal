import json
from datetime import datetime, timezone, timedelta

def generate_whatsapp_broadcast():
    try:
        with open('data/latest-updates.json', 'r', encoding='utf-8') as f:
            updates = json.load(f)
            
        now = datetime.now(timezone.utc)
        recent_updates = []
        
        for u in updates:
            # Check if published in last 48 hours to be safe
            try:
                pub_date = datetime.fromisoformat(u.get('published_date', '').replace('Z', '+00:00'))
                if (now - pub_date) < timedelta(days=2):
                    recent_updates.append(u)
            except:
                recent_updates.append(u) # if parse fails, just include it temporarily
                
        if not recent_updates:
            recent_updates = updates[:3] # fallback to top 3
            
        # Limit to 5 updates per message to not spam
        recent_updates = recent_updates[:5]
        
        msg = "📢 *SarkariSewa India - Latest Government Updates*\n\n"
        
        for u in recent_updates:
            title = u.get('title_hi', u.get('title_en', 'New Update'))
            cat = u.get('category', 'Govt')
            slug = u.get('slug', '')
            link = f"https://sarkarisewaindia.com/updates/{slug}.html" if slug else f"https://sarkarisewaindia.com/update.html?id={u['id']}"
            
            msg += f"🔹 *{title}*\n"
            msg += f"👉 *Read Full Details:* {link}\n\n"
            
        msg += "🔔 *Follow our WhatsApp Channel for instant updates:*\n"
        msg += "https://whatsapp.com/channel/0029VbDj7gCDp2Q8SYdFwj14\n"
        
        with open('whatsapp_ready.txt', 'w', encoding='utf-8') as f:
            f.write(msg)
            
        print("Generated whatsapp_ready.txt successfully!")
    except Exception as e:
        print(f"Failed to generate whatsapp broadcast: {e}")

if __name__ == '__main__':
    generate_whatsapp_broadcast()
