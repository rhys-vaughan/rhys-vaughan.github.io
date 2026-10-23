---
title: Migrating to docs-as-code
description: Case study of moving about 950 pages from six MadCap Flare projects to a single Markdown site.
---

# Migrating to docs-as-code

At a B2B marketing software company, I moved the product documentation from six separate MadCap Flare projects to one Markdown site built with Git and Zensical, a static site generator. The new site launched six months after the first commit.

- **Scale:** about 950 pages across six Flare projects, one per product area
- **Timeline:** February to August 2026
- **My role:** I planned and ran the migration, from tool choice to launch
- **Result:** one searchable site for every product, written in Markdown and published from Git, with old links still working

## The problem

Each product's documentation lived in its own Flare project with its own output, so readers had to know which help site to look in, and writers maintained six sets of navigation, styles, and build settings. Proprietary project files also made it hard to review changes the way developers review code.

## Approach

I migrated one project at a time, starting small and leaving the hardest until last:

1. **Pilot:** I started with the smallest project, about 100 pages, and took it all the way to finished content, redirects, and tooling. Everything the pilot taught me fed into the remaining projects.
2. **Tooling:** I used AI-assisted scripting (Claude Code) to build Python scripts for the repetitive work: generating front matter, renaming files, fixing links, converting Flare's table of contents into site navigation, and moving images.
3. **Content review:** scripts got the content across, but I reviewed every product section by hand before publishing it, merging duplicate pages and fixing anything that didn't survive the conversion.
4. **Order:** the largest, most frequently updated product went last, so it changed the fewest times during the migration.

Keeping old links working mattered as much as the new content, because customers, support articles, and search engines all pointed at the old URLs. The site has about 3,000 redirect rules. An audit before launch found that catch-all rules sat above about 1,700 specific ones, so the specific rules never fired. Moving the catch-all rules to the end fixed it.

## What I learned

Moving the pages is the easy part; most of the work is in everything around them.

- "Migrated" isn't the same as "ready to launch". The work list after the last page moved (front matter, redirects, and navigation) was longer than I expected.
- Test redirects against the URLs people actually use. A redirect file can be internally consistent and still miss a whole generation of old URLs, which is what happened when an older, mixed-case URL format turned up after launch.
- A pilot pays for itself. Taking one small project all the way to done showed me problems that would have repeated across all six.
