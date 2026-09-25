<div align="center">

<img src="assets/melancholy-banner.svg" alt="Melancholy, a Discord bot for community life" width="100%">

# Melancholy

Profiles, rewards, games, and tools for Discord communities.

![Version](https://img.shields.io/badge/version-2.10.3-F092B4?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Discord-BBA0ED?style=flat-square)
![Status](https://img.shields.io/badge/repository-project%20display-8FDDE7?style=flat-square)

[Website](https://melancholy.fujiverse.dev/) · [Support server](https://discord.gg/elegy) · [Explore commands](COMMANDS.md)

</div>

Melancholy brings profiles, activity tracking, rewards, and games into Discord. Members can find what they need through `/home` and `/help`. Server staff can configure moderation, logging, automation, roles, and other community tools.

This repository is Melancholy's public project display. It contains documentation and an original graphic. The bot's application source, compiled files, credentials, and deployment configuration are private. There is no local installation package here.

## What members can do

| Area | Examples |
| --- | --- |
| Find their way | Open `/home` for personal shortcuts or search `/help find` by command name or goal. |
| Make a profile | View profile and level cards, activity statistics, badges, and charm collections. |
| Earn and spend | Claim daily rewards, work, browse the shop, and check balances or cooldowns. |
| Follow a season | Complete daily, weekly, and seasonal Starlight quests and view ranks. |
| Have fun | Try minigames, trivia, social actions, and anime discovery. |
| Stay organized | Use reminders, AFK status, and personal data controls. |

Melancholy supports slash commands, prefix commands using `!!`, and context menu actions. Some commands depend on server settings or Discord permissions. [Browse the command guide](COMMANDS.md) for starting points.

## What server staff can do

Configure welcome and verification flows, moderation and audit logs, automated protections, role tools, custom occupations, and recurring role income. Melancholy also has server configuration snapshots and activity views. [Read the feature guide](FEATURES.md) for the fuller picture.

## A few details that matter

- Guild coins and account-wide gems have different scopes. Work rewards respect an activity cooldown across servers for gems.
- Starlight is seasonal progress. Its quests, divisions, and leaderboards are separate from spendable currency.
- `/data privacy`, `/data export`, and `/data delete` provide personal server data controls. Deletion covers eligible data, as explained in the command itself.
- Melancholy runs alongside other Elegy Apps bots on a shared private runtime. This repository covers Melancholy only.

## Project notes

The current documented version is **2.10.3**, matching the private application's version at the time this display was prepared. [Recent changes](CHANGELOG.md) summarize the public release history. For help or feedback, use the [support server](https://discord.gg/elegy) and see [support options](SUPPORT.md).

The source is private. [Notice](NOTICE.md) explains the scope of this repository. [Publishing notes](PUBLISHING.md) explain how to move these files into a separate GitHub repository without including the private project.
