---
title: Work
description: Documentation samples and case studies from my work as a technical writer.
---

# Work

These are documentation samples I've written, followed by case studies of the systems behind them.

## Documentation samples

These pages are live on a public help site and cover different audiences and types of documentation.

<div class="grid cards" markdown>

-   ### Troubleshooting dashboards

    **Troubleshooting · Business users**

    I organised this page by symptom, not by feature, so readers start from what they can see going wrong. Each fix says who can make it (the viewer, a dashboard editor, or an admin), so nobody tries a fix they don't have permission for. It came out of an audit of about 50 dashboard pages.

    **[:octicons-link-external-16: Read the page](https://help.apteco.com/en/orbit/dashboards/troubleshooting/){ target="_blank" rel="noopener" }**

-   ### Combine audiences

    **Concept and task · Analysts and marketers**

    This feature turns existing audiences into a single variable, and its key decision is easy to get wrong: a Selector puts each record in one category, while an Array allows several. The page explains that choice, with examples, before the steps. I wrote it while the feature was in preview, revised it after feedback from the product manager, and updated it when the feature became generally available.

    **[:octicons-link-external-16: Read the page](https://help.apteco.com/en/orbit/resources/custom-variables/combine-audiences/){ target="_blank" rel="noopener" }**

-   ### ASP.NET Core 10 requirement

    **Change notice and FAQ · IT admins**

    Microsoft ends support for .NET 8 in November 2026, so every customer server needs a new prerequisite before a fixed release date. I drafted the page months ahead, reviewed it with the CTO and technical colleagues, and updated it as dates were confirmed. It leads with a timeline and actions, then answers the questions an admin asks before touching a production server.

    **[:octicons-link-external-16: Read the page](https://help.apteco.com/en/admin/requirements/asp-net-requirement/){ target="_blank" rel="noopener" }**

-   ### Release notes

    **Release notes · All users**

    I write release notes for every release, every two weeks, drafting them alongside development. Each entry leads with what users can now do, not what changed in the code, and links to the full documentation.

    **[:octicons-link-external-16: Read the page](https://help.apteco.com/en/release-notes/orbit/2026/){ target="_blank" rel="noopener" }**

</div>

!!! note
    These are live pages, so they may have changed since I wrote them.

## Case studies

- [Migrating to docs-as-code](docs-migration.md): moving about 950 pages from six MadCap Flare projects to a single Markdown site in six months
- [Docs quality system](docs-quality.md): the style guide, automated checks, and review workflow behind every change
