import json
import os

blog_posts_file = "data/blog-posts.json"

# Load existing
try:
    with open(blog_posts_file, "r", encoding="utf-8") as f:
        posts = json.load(f)
except Exception as e:
    print(f"Error loading {blog_posts_file}: {e}")
    posts = []

# Load new parts
new_posts = []
for i in range(1, 4):
    part_file = f"blog_part_{i}.json"
    if os.path.exists(part_file):
        with open(part_file, "r", encoding="utf-8") as f:
            try:
                new_posts.append(json.load(f))
            except Exception as e:
                print(f"Error loading {part_file}: {e}")

# Append and save
if new_posts:
    posts.extend(new_posts)
    with open(blog_posts_file, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)
    print(f"Appended {len(new_posts)} new posts to {blog_posts_file}")
else:
    print("No new posts found.")
