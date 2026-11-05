# rhys-vaughan.github.io

Source for my personal site and blog at <https://rhysvaughan.dev/>, built with [Zensical](https://zensical.org/) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Local preview

```sh
python -m venv .venv
.venv/Scripts/activate   # Windows (Git Bash); use .venv/bin/activate on macOS/Linux
pip install -r requirements.txt
zensical serve
```

The Zensical version is pinned in `requirements.txt`. Upgrade it deliberately, not by letting it float.

## Writing a blog post

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

## Social cards

`layouts/portfolio.yml` draws the link-preview image for every page. LinkedIn caches these by URL, so bump the `?v=` number in that file whenever the card design changes.
