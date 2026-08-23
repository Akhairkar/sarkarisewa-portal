with open("states/index.html", "r", encoding="utf-8") as f:
    text = f.read()

start_tag = "<!-- SEO Rich Content Block for Crawlers & Users -->"
end_tag = "</section>\n  </main>"

if start_tag in text and end_tag in text:
    start_idx = text.find(start_tag)
    end_idx = text.find(end_tag)
    
    new_text = text[:start_idx] + "  </main>" + text[end_idx + len(end_tag):]
    
    with open("states/index.html", "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Successfully removed SEO text.")
else:
    print("Could not find the tags.")
