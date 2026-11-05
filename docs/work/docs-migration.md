---
title: Migrating to docs-as-code
description: "How I moved about 950 pages from six MadCap Flare projects to one docs-as-code site on my own, and what I'd do differently next time."
template: case-study.html
---

# Migrating to docs-as-code

At Apteco, I moved the product documentation from six separate MadCap Flare projects to one Markdown site built with Git and Zensical. When my colleague left at the start of 2026 and I became the only technical writer, I decided it was the right time to make the move, and I was given the freedom to make that call. I then ran the migration on my own, and the new site launched in August.

- **Scale:** about 950 pages across six Flare projects, one per product area
- **Timeline:** February to August 2026
- **My role:** I made the decision, then planned and ran the migration alone, from choosing the tools to launch
- **Result:** one searchable site for every product, written in Markdown and published from Git, with old links still working. Publishing went from 7 or 8 minutes to about one.

## The problem

Each product's documentation lived in its own Flare project with its own output, so readers had to know which help site to look in, and writers maintained six sets of navigation, styles, and build settings. Proprietary project files also made it hard to review changes the way developers review code.

## Choosing the tools

One of the things I like most about docs-as-code is that you get to choose your own tools. I went looking for a static site generator and found Material for MkDocs, then learned that the team behind it was building a new one, [Zensical](https://zensical.org/){ target="_blank" rel="noopener" }. I jumped aboard early, and the steady stream of new features since then has made it feel like I found it at exactly the right time. The Help Hub and this site are both built with it.

## Approach

I migrated one project at a time, starting small and leaving the hardest until last:

1. **Pilot:** I started with Designer, the smallest section of the help at about 100 pages, and took it all the way to finished content, redirects, and tooling. Everything the pilot taught me fed into the remaining projects.
2. **Tooling:** I used AI-assisted scripting (Claude Code) to build Python scripts for the repetitive work: generating front matter, renaming files, fixing links, converting Flare's table of contents into site navigation, and moving images.
3. **Content review:** scripts got the content across, but I reviewed every product section by hand before publishing it, merging duplicate pages and fixing anything that didn't survive the conversion.
4. **Order:** the largest, most frequently updated product went last, so it changed the fewest times during the migration.

Keeping old links working mattered as much as the new content, because customers, support articles, and search engines all pointed at the old URLs. The site has about 3,000 redirect rules. An audit before launch found that catch-all rules sat above about 1,700 specific ones, so the specific rules never fired. Moving the catch-all rules to the end fixed it.

## What I learned

Moving the pages is the easy part; most of the work is in everything around them.

- "Migrated" isn't the same as "ready to launch". The work list after the last page moved (front matter, redirects, and navigation) was longer than I expected.
- Test redirects against the URLs people actually use. A redirect file can be internally consistent and still miss a whole generation of old URLs, which is what happened when an older, mixed-case URL format turned up after launch.
- A pilot pays for itself. Taking one small project all the way to done showed me problems that would have repeated across all six.

## What I'd do differently

I'd plan the whole conversion pipeline before moving the first page, and fully test every Python script before running it on real content.

## Next

Read the other case study: [Docs quality system](docs-quality.md), the checks and review workflow that keep the new site consistent.
