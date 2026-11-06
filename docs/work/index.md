---
title: Work
description: "What I do as a technical writer and documentation engineer at Apteco: the docs program I built in 2026, the tools behind it, how I work, and writing samples."
hide:
  - navigation
  - toc
---

# Work

I'm the technical writer at Apteco, where I look after the [Apteco Help Hub](https://help.apteco.com/en/){ target="_blank" rel="noopener" }: documentation for four products in a marketing data platform, plus admin guides, release notes, and technical updates. My readers range from marketers building their first audience to IT admins upgrading a production server.
## Recent work

At the start of the year our docs lived in six separate MadCap Flare projects. By the end of it, they were one docs-as-code site, run by a team of one.

### Moving to docs-as-code

I planned and ran the move of about 950 pages from six Flare projects to one site built with Markdown, Git, and Zensical. It launched in August 2026, and it felt like a fresh start.

- Publishing went from 7 or 8 minutes to about one.
- Readers search every product from one place, instead of picking the right help site first.
- Old links still work: the site has more than 3,300 redirect rules, audited before and after launch.

### A docs program, not just a docs site

- **Docs work moved into Azure DevOps.** We used to track docs in Notion. Now it sits in Azure DevOps with the developers' and product managers' work, so docs are visible in the same place as the features they describe, and it's easier for anyone to raise or follow a docs task.
- **Analytics and feedback, for the first time.** Traffic analytics, search tracking, and on-page feedback, plus a monthly report that uses them to decide what to work on next.
- **Release notes every two weeks,** drafted alongside development, so they're ready on release day.
- **A security advisory process** for publishing advisories on the Help Hub.
- **Room to grow.** The workflow is set up so more people can contribute directly as the docs grow. Developers and the technical teams already see docs work happening alongside theirs, and want to get involved.

### A quality system that works for one writer

Content from six projects had to read as if one person wrote it, and stay that way with changes going out all the time. A house style guide sets the rules, Vale checks them with 16 custom rules I wrote, the checks run every time a page is edited, and an AI review agent checks each change and builds the site before a pull request.

### Working as a team of one

I've been Apteco's only technical writer since the start of 2026, and moving the docs to docs-as-code was my call ([the full story](docs-migration.md)). Automating a lot of the routine checking meant I could run the migration and keep up with the day-to-day work at the same time, with more of my time going on the writing and the decisions that need a person. Alongside the migration, I merged 278 pull requests between February and November.

## Case studies

- [Migrating to docs-as-code](docs-migration.md): how I moved 950 pages from six Flare projects to one site on my own, and what I'd do differently
- [Docs quality system](docs-quality.md): the style guide, automated checks, and review workflow behind every change

## Things I've built and set up

The tooling around the docs is as much a part of the job as the pages.

- **Docs for AI readers.** I set up the Help Hub to publish an [llms.txt](https://help.apteco.com/llms.txt){ target="_blank" rel="noopener" } index and a Markdown copy of every page, so AI assistants can read the docs as easily as people can.
- **Custom code blocks for Apteco's expression language.** I built a syntax highlighter (a Pygments lexer) with colours that match the expression editor in FastStats, and code blocks that show the language name in their title, so readers know what they're looking at.
- **A "Copy page" menu,** extended from the theme's copy button, that copies any page as Markdown, ready to paste into an AI assistant.
- **Claude Code skills and agents** for repeat work: drafting release notes and patch notes, drafting new pages to a consistent structure, reviewing changes against the house style, and writing a weekly docs update for the company.
- **Social cards** so shared Help Hub links get a proper preview, and build-time image compression.
- **A winter snowfall effect** in the Help Hub header, because docs can be fun too.

## How I work

I use Claude Code every day, mostly to build things around the writing rather than to write for me: skills for repeat work, hooks that lint every edit as it happens, and review agents that check changes before anyone else sees them.

I keep a human in the loop for every page. An AI can check a sentence against a rule, but it can't care whether the page means the right thing to the person reading it.

??? note "How I like to work"

    I like to know how a reader lands on a page: what brought them there, and how to get them the information they need.

    I like building more than help text, such as cookbooks and prompt libraries.

    I automate what I can, so I have more time for the docs work that adds the most value.

??? note "Types of docs I write"

    - Task, concept, and reference pages for business users
    - Admin, installation, and requirements guides for IT teams
    - Troubleshooting guides
    - Release notes and patch notes
    - Change notices and security advisories
    - Style guides and contributor guides
    - Screenshots and short video walkthroughs
    - AI agent skills and lint rules

??? note "Skills"

    - Information architecture, content audits, and consolidation
    - Docs-as-code workflows and content migration
    - Writing for AI readers
    - Release and change communication
    - Style guides and content strategy
    - Documentation tooling and automation
    - SEO and docs analytics

??? note "Tools"

    - **Writing and publishing:** Markdown, Zensical, Git, pull requests, Netlify, GitHub Actions
    - **Code:** HTML, CSS, and JavaScript for site customisation; Python for scripts
    - **Quality:** Vale, markdownlint
    - **AI:** Claude Code (skills, hooks, and sub-agents)
    - **Planning:** Azure DevOps, Jira, Notion, two-week sprints
    - **Analytics:** Google Analytics, Search Console
    - **Diagrams:** Mermaid
    - **Earlier:** MadCap Flare, Paligo (structured XML authoring), Confluence

## Writing samples

Live pages I wrote on the Help Hub. They may have changed since.

- [Troubleshooting dashboards](https://help.apteco.com/en/orbit/dashboards/troubleshooting/){ target="_blank" rel="noopener" }: organised by symptom, not feature, with who can make each fix. It came out of an audit of about 50 dashboard pages.
- [Combine audiences](https://help.apteco.com/en/orbit/resources/custom-variables/combine-audiences/){ target="_blank" rel="noopener" }: a concept-and-task page that explains the key decision (Selector or Array) before the steps.
- [ASP.NET Core 10 requirement](https://help.apteco.com/en/admin/requirements/asp-net-requirement/){ target="_blank" rel="noopener" }: a change notice for IT admins, drafted months ahead and reviewed with the CTO.
- [Orbit release notes](https://help.apteco.com/en/release-notes/orbit/2026/){ target="_blank" rel="noopener" }: every two weeks, leading with what users can now do.

## Work history

My work history, and how I got from teaching English in South Korea to technical writing, is on the [About](../about.md#work-history) page.
