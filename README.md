# rhysvaughan.dev

Source for my personal site and blog, [rhysvaughan.dev](https://rhysvaughan.dev/). It's built with [Zensical](https://zensical.org/) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## How it's built

Zensical is a documentation site generator, so most of the work here is making it not look like one:

- `overrides/main.html` replaces the theme's header, sidebars, tabs, and footer with a simple header and footer. Page content still renders through the theme.
- `overrides/blog-post.html`, `overrides/partials/post.html`, and `overrides/case-study.html` give blog posts, the post list, and case studies their own plain layouts.
- `docs/assets/stylesheets/extra.css` holds the layout, colours (light and dark), and type. Fonts are set in `zensical.toml`.
- The blog and RSS feed come from Zensical's `blog` and `rss` plugins. The home page's recent posts list reads the JSON feed (`docs/assets/javascripts/extra.js`).
- `layouts/portfolio.yml` draws the social card for every page.

## Run it locally

```sh
python -m venv .venv
.venv/Scripts/activate   # Windows (Git Bash); use .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
zensical serve -a localhost:8010
```

The preview reloads as you edit.

## Write a blog post

Add a Markdown file to `docs/blog/posts/`:

```markdown
---
date: 2026-11-05
slug: the-post-url
description: "One sentence for search results and link previews, 100+ characters for LinkedIn."
---

# Post title
```

- **Link to other pages on this site with full URLs** (`https://rhysvaughan.dev/work/`), not relative paths. The RSS feed includes the whole post, and feed readers can't resolve relative links.
- Add `draft: true` to keep a post out of the build while you work on it. `zensical serve` still shows drafts.
- The home page's recent posts list and the RSS feed update on their own.

## Update the CV

Export the PDF from FlowCV and save it over `docs/rhys-vaughan-cv.pdf`. The filename stays the same, so the links on Home and About keep working.

## Upgrade Zensical

The version is pinned in `requirements.txt`. Change it deliberately, not by letting it float. The overrides depend on the theme's template blocks and CSS classes, so after an upgrade, check the header, a blog post, and the Work page in the preview.

## Social cards

LinkedIn caches card images by URL, so bump the `?v=` number in `layouts/portfolio.yml` whenever the card design or a page description changes.
