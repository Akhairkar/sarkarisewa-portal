Login-block fix — 3 files, upload to these exact paths on GitHub:

  partials/header.html      -> replaces partials/header.html
  assets/js/main.js         -> replaces assets/js/main.js
  assets/css/style.css      -> replaces assets/css/style.css

What changed:
- Removed the login button + login popup from the header (desktop + mobile)
- Stopped main.js from loading the login script
- Also fixed the underlying CSS bug (the popup's "hidden" attribute was
  being ignored, so it covered the whole screen on every page)

Nothing else on the site depends on this, safe to upload directly —
no GitHub Actions workflow run needed, these are static files.
