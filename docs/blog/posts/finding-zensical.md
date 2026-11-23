---
date: 2026-11-23
slug: finding-zensical
description: "How I found Zensical just as I needed a new site generator, what it's been like to grow with it, and the upgrade that broke our search."
---

# I found my docs tool at exactly the right time

When I decided to move Apteco's help site off MadCap Flare at the start of this year, I needed a static site generator. I had always liked [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), and while I was researching I found out that the team behind it was building their own site generator, [Zensical](https://zensical.org/).

The timing couldn't have been much better. I was about to start a daunting [migration](https://rhysvaughan.dev/work/docs-migration/), and a team whose work I already liked was just getting a new tool going. So I rolled the dice and decided to jump aboard early. My first version pin, back in February, was 0.0.21.

Since then there's been a steady stream of new features, and a lot of them turned up just as I needed them. When I turned on link checking, it found eight broken links on the live Help Hub, and now a broken link stops the build before it can reach a reader. Another plugin publishes an [llms.txt](https://help.apteco.com/llms.txt) file and a Markdown copy of every page, so AI assistants can read our docs as easily as people can. That came at a good time as about one in eight requests to the Help Hub now comes from AI agents.

This site gets the benefit too. When I wanted to start this blog, Zensical already had a blog plugin and an RSS feed, and when I moved a post to a new address, redirects kept the old link working.

Being early has its costs, though. In August, our version wasn't pinned exactly, so the live site quietly picked up a new release. That release renamed some class names inside the search panel, and my customisations relied on them, so search broke. I found out when a colleague messaged me about it. It was a tough day, but I got through it, and I've pinned every version exactly since. One later upgrade still didn't go to plan as it broke the link on the site logo, and I rolled it back the same day.

I read Zensical's release notes with the same mix of excitement and dread as I do whenever I watch Wales play rugby. Before every upgrade, I check every override and customisation against the new version and read the diffs. I also try out any new features, to see whether they're worth using. On 9 November the Help Hub moved to Zensical 0.1.0, its first release past 0.0.x.

The freedom to choose your own tools is one of the things I like most about docs-as-code. You pick the ones that suit you, and you can change your mind later. This site runs on Zensical too.
