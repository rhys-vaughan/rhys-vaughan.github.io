---
title: Building an API cookbook
description: "Case study of the Orbit API cookbook: a developer's example scripts on GitHub, turned into documented recipes on the Apteco Help Hub, with GitHub still the source."
template: case-study.html
---

# Building an API cookbook

A developer at Apteco had written a set of PowerShell scripts that automate Orbit through its API, for jobs like changing dashboards in bulk, transferring them between users, and checking that a system is healthy. They were useful, but they lived in a GitHub repository with a README, where Help Hub readers weren't likely to find them. I turned them into the [Orbit API cookbook](https://help.apteco.com/en/admin/orbit-api/){ target="_blank" rel="noopener" }, a section of the Help Hub with a documented page for every script. It launched in November 2026.

- **Audience:** Orbit administrators at clients and partners who are comfortable running a script, and prospects who want to see what the API can do
- **Problem:** working examples that were hard to find, and written for developers rather than the admins who'd run them
- **My role:** I designed the section, built the generator that creates its pages, wrote the guides around it, and worked with the developer on the scripts' help text and a contribution guide
- **Result:** 23 recipes live, built from the scripts themselves, with GitHub still the only place they're maintained

## How it works

I based the idea on Anthropic's [Claude cookbook](https://github.com/anthropics/claude-cookbooks){ target="_blank" rel="noopener" }: working examples that people can run, adapt, and add to.

- **One source.** The scripts stay in the developer's GitHub repository. The Help Hub includes it as a Git submodule pinned to a reviewed commit, so a change only reaches the site once someone has checked it.
- **Generated pages.** A Python script I built with Claude Code reads each script's built-in help and a small registry file, and writes a recipe page: what the script does, what you need to run it, a parameters table that marks the optional ones, and the script itself with line numbers and a download button. If the help documents a parameter the script doesn't declare, the build stops instead of publishing a wrong table.
- **A list you can filter.** The landing page lists every recipe with category filters, and API calls are colour-coded by method, following the convention readers know from Swagger.
- **Walkthroughs** for the scripts that run other scripts, explaining how the pieces fit together.
- **Guides around the recipes:** a getting started guide, an overview of the API, and a page on writing your own scripts with AI tools. That page draws on colleagues' experience of building API tools with Claude and ChatGPT Codex, and it's direct about the risk: an AI tool can do anything the user it logs in as can do, so it should only make live calls against a test system.
- **Contributions.** A contribution guide in the repository explains how to submit a script, with a security checklist (no real hostnames, credentials, or customer data). Every recipe credits its author on the Help Hub.

## Working with the developer

Changes to the scripts' help text went back to the repository as pull requests, so the source and the Help Hub never drifted apart. The developer's answers changed more than I expected: whether a dashboard script included dashboards shared with the user, for example, changed the wording in several places. Review before launch helped too. A reviewer asked why the contribution guide gave Apteco staff different instructions from everyone else. There was no good reason, so now everyone forks the repository.

## What I learned

- A developer's README answers "how does this work?" An admin's first questions are "what will this change?" and "what do I need?", so every recipe starts with those.
- Generating pages moves the bugs somewhere else. Before launch, a label I'd added to the parameters table broke one page's table, because of how the generator rewrote code in table rows. I fixed it, then scanned every built page for the same kind of problem.
- It's better to say what hasn't been tested. The scripts were developed on Windows, and the getting started guide says so, instead of implying they work everywhere.

## Next

Read the other case studies: [Migrating to docs-as-code](docs-migration.md), how the Help Hub came together, and [Docs quality system](docs-quality.md), the checks and review workflow behind every change.
