import json
import os
import glob

def clean_updates():
    # Load latest updates
    with open('data/latest-updates.json', 'r', encoding='utf-8') as f:
        updates = json.load(f)
        
    initial_count = len(updates)
    
    # Filter out anything with "winner announcement" or "winner" in the title
    clean_updates_list = []
    for u in updates:
        title = u.get('title_en', '').lower()
        if 'winner' in title or 'winners' in title or 'contest' in title:
            # Delete corresponding HTML file if exists
            slug = u.get('slug')
            if slug:
                html_path = f"updates/{slug}.html"
                if os.path.exists(html_path):
                    os.remove(html_path)
                    print(f"Deleted {html_path}")
            continue
        clean_updates_list.append(u)
        
    # Save the cleaned updates back to JSON
    with open('data/latest-updates.json', 'w', encoding='utf-8') as f:
        json.dump(clean_updates_list, f, ensure_ascii=False, indent=2)
        
    final_count = len(clean_updates_list)
    print(f"Removed {initial_count - final_count} winner announcements. Remaining updates: {final_count}")

if __name__ == "__main__":
    clean_updates()
