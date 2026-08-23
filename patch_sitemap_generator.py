import sys

def patch():
    with open('generate-sitemap.py', 'r', encoding='utf-8') as f:
        content = f.read()
        
    old_blog_logic = """    for slug in sorted(blog_slugs):
        if slug in json_blog_slugs:
            urls.append((f"{BASE_URL}/blog/{slug}.html", "0.6", "monthly"))
        else:
            urls.append((f"{BASE_URL}/blog/post.html?slug={slug}", "0.6", "monthly"))"""
            
    new_blog_logic = """    for slug in sorted(blog_slugs):
        urls.append((f"{BASE_URL}/blog/{slug}.html", "0.6", "monthly"))"""
        
    if old_blog_logic in content:
        content = content.replace(old_blog_logic, new_blog_logic)
        with open('generate-sitemap.py', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Patched generate-sitemap.py successfully!")
    else:
        print("Could not find the exact old logic in generate-sitemap.py.")

if __name__ == '__main__':
    patch()
