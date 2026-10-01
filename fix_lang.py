import json

def update_lang():
    with open('data/lang.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if "en" in data and "hi" in data:
        data["en"]["daily_updates_home_title"] = "📢 Latest Government Notifications"
        data["en"]["daily_updates_view_all"] = "View All Notifications →"
        
        data["hi"]["daily_updates_home_title"] = "📢 ताज़ा सरकारी सूचनाएं"
        data["hi"]["daily_updates_view_all"] = "सभी सरकारी सूचनाएं देखें →"
        
        with open('data/lang.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print("Updated lang.json successfully!")
    else:
        print("lang.json structure is not what I expected.")

if __name__ == "__main__":
    update_lang()
