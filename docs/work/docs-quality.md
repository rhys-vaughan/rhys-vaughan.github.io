---
title: Docs quality system
description: Case study of the style guide, automated checks, and review workflow behind a documentation site.
---

# Docs quality system

Once the content from six documentation projects was on one site, it needed to read as if one person wrote it and stay that way, with new content shipping every two weeks. This case study covers the style guide, automated checks, and review workflow I set up to do that.

- **Audience:** the writers and reviewers who change the site
- **Problem:** consistency that depended on memory and a careful final read
- **My role:** I wrote the house style guide and set up and maintain the checks and workflow
- **Result:** most style problems are caught in the editor or in review, before a reader sees them

## How it works

Every change passes through several layers of checks, each catching a different kind of problem:

- **House style guide:** a single written reference for voice, terminology, formatting, and page structure. It covers rules like second person, sentence-case headings, British English, and that every heading needs an introduction before the next one.
- **Prose linting:** Vale runs the Microsoft Writing Style Guide rules plus six custom rules I wrote, covering date formats, first use of acronyms, Latin abbreviations, em dashes, and a product word list.
- **Markdown linting:** markdownlint catches structural problems in the source.
- **AI review:** before each pull request, an AI review agent checks changed pages against the house style and builds the site to catch Markdown that looks right in source but renders wrong.
- **Pull requests and previews:** nothing goes straight to the live site. Every change goes through a branch and pull request, and each pull request gets its own preview deployment for reviewers to check the rendered pages.
- **Pinned tooling:** the static site generator is pinned to an exact version, after a loosely pinned upgrade quietly renamed CSS classes the site relied on and broke its search interface.

## What I learned

Automating the checks changed what reviewers spend their time on.

- Rules that a linter can check get followed; rules that can't be automated need a named place in review, or they drift.
- Writing a custom rule forces you to define the rule precisely, which often shows the style guide was vaguer than it looked.
- Pin your tools. An unplanned upgrade is a change nobody reviewed.
