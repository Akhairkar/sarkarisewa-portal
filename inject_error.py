import re
with open("assets/js/csc-locator.js", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace(
    "resultsContainer.innerHTML = '<div style=\"color:red; padding: 20px; grid-column: 1 / -1;\">Error fetching live data.</div>';",
    "resultsContainer.innerHTML = `<div style=\"color:red; padding: 20px; grid-column: 1 / -1;\">Error fetching live data: <b>${e.message || JSON.stringify(e)}</b></div>`;"
)

with open("assets/js/csc-locator.js", "w", encoding="utf-8") as f:
    f.write(text)
