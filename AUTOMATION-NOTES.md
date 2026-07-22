# Automation — GitHub Actions (DONE)

Two workflows added under `.github/workflows/`. Both run automatically
on GitHub's servers — nothing to install, nothing to run manually.

## 1. `audit.yml` — Site QA Audit
Runs `audit-site.py` on every push to `main` (and on pull requests).
Shows a green check ✅ or red X ❌ next to your commit on GitHub. If it
fails, click into it to see exactly which broken link / missing
translation / invalid JSON / dangling reference caused it — the same
output you'd get running `audit-site.py` locally, just automatic.

## 2. `regenerate-sitemap.yml` — Auto-regenerate Sitemap
Triggers only when `data/services.json`, `data/categories.json`,
`data/blog-posts.json`, or `generate-sitemap.py` itself changes on
`main`. Runs `generate-sitemap.py` and commits the updated
`sitemap.xml` back automatically — you no longer need to remember to
run it by hand after adding a new service or blog post.

## What this does NOT automate
- **Deployment** — already automatic. GitHub Pages publishes on every
  push to `main` with no action needed; these workflows don't change that.
- **Google Search Console resubmission** — Google's crawler runs on its
  own schedule; there's no reliable way to force it from GitHub Actions.
  If a page changes, Search Console will pick it up on its own timeline,
  faster if the sitemap (now always current) already lists it.
- **Content writing** — these are structural safety nets, not content
  generators. Adding new services/blog posts is still a content task.

## How to see it working
After pushing this update, go to your repo → **Actions** tab. You'll
see both workflows listed and run automatically on the next push. A red
X on `audit.yml` means something needs fixing before that change is
trustworthy — treat it the same as the `audit-site.py` output you've
already been checking locally.
