# Command guide

Use these commands as a starting point. Run `/help` in a server for the current command menu. Use `/help find` to search by name or by a goal. Melancholy's prefix is `!!`; many slash commands also have prefix counterparts, while some features are slash or context menu only.

## Start here

| Command | What it opens |
| --- | --- |
| `/home` | Personal shortcuts and daily or work readiness. |
| `/help` | Browsable command categories. |
| `/help find:reminder` | Commands related to a search term or goal. |
| `/profile view` | Your profile card. |
| `/level stats` | Level card and progress; `!!level` opens the same card. |
| `/leaderboard` | Level, balance, charms, and Starlight boards in one panel. |
| `/info user` | Overview, roles, and stats for a member. |
| `/changelogs` | Release notes, with a version menu. |

## Rewards and progression

| Command | What it does |
| --- | --- |
| `/daily` | Claim a daily reward. |
| `/work variant:<activity>` | Complete a built-in or server occupation, or all ready work at once. |
| `/balance view` | View currency balances. |
| `/cooldown` | Check reward and work timers. |
| `/shop browse` | Browse the server, global, level card, and profile card shelves. |
| `/shop inventory` | Use, gift, sell, or equip what you own. |
| `/starlight view` | See a seasonal profile. |
| `/starlight quests` | Browse daily, weekly, and seasonal quests. |
| `/starlight claim quest:<quest>` | Claim a completed quest reward. |
| `/starlight ranks` | View divisions and thresholds. |

Starlight points, charms, coins, and gems have different uses. The [feature guide](FEATURES.md) explains the main boundaries.

## Birthdays

| Command | What it does |
| --- | --- |
| `/birthday set month:<month> day:<day>` | Save your birthday once for every server. |
| `/birthday view` | Your birthday card, or another member's. |
| `/birthday wish user:<member> message:<text>` | Leave a sealed wish up to 30 days early. |
| `/birthday wishes` | Open your wishes on your birthday for a gem gift. |
| `/birthday upcoming` | The server's birthdays today, this week, this month, and later. |
| `/birthday setup` | Staff: choose an announcement channel and birthday role. |

The prefix version is `!!birthday`, also `!!bday`.

## Music and game stats

| Command | What it does |
| --- | --- |
| `/music link user:<last.fm name>` | Connect your Last.fm account. |
| `/music nowplaying` | The song you're playing now. |
| `/music top` | Your top artists, songs, or albums for a period. |
| `/music whoknows` | Who in the server plays an artist, song, or album most. |
| `/music leaderboard` | Linked members ranked by scrobbles. |
| `/game osu player` | osu! profiles; other subcommands cover recent, best, beatmaps, and rankings. |
| `/game chess`, `/game lichess` | Ratings, recent games, and leaderboards. |
| `/game dota2`, `/game pubg` | Player stats, matches, and scoreboards. |
| `/game account link` | Link one account per game. |

Prefix versions are `!!music` (also `!!lf`, `!!fm`) and `!!game`.

## Discovery and play

| Command | What it does |
| --- | --- |
| `/games` | Dice, choose, ship, trivia, would you rather, higher or lower, word chain, fortune, caption, and achievement. |
| `/minigame launch` | Open the minigame panel. |
| `/minigame profile` | View your character sheet and party. |
| `/anime series query:<title>` | Search for a series; other subcommands cover characters, studios, and people. |
| `/action send` | Send a social action; `/action stats` shows totals. |
| `/image` | Find an image using the available filters. |

## Personal utilities and data

| Command | What it does |
| --- | --- |
| `/afk set` | Set an AFK status. |
| `/reminder list` | View active reminders; use `/reminder create` to make one. |
| `/weather city:<city>` | Current weather and forecast for a city. |
| `/utility timezone set` | Save your timezone, also used for birthdays. |
| `/avatar` | Server avatar, profile avatar, and banner. |
| `/data privacy` | See a summary of stored personal server data. |
| `/data export` | Download personal server data as JSON. |
| `/data delete confirm:DELETE` | Remove eligible personal server data after confirmation. |

## Server management

Staff permissions are required for many of these actions.

| Command | What it does |
| --- | --- |
| `/settings` | Configure enabled server systems. |
| `/automation list` | View scheduled server actions. |
| `/protection automod` | Review or configure automatic message protection. |
| `/warn`, `/mute`, `/ban` | Moderation command groups with member and reason options. |
| `/createrole`, `/editrole` | Create or change roles, including icons and gradient colors. |
| `/shop add` | Add an item to the server shop. |
| `/occupations list` | View server-defined jobs; administrators can set or remove them. |
| `/incomerole list` | View recurring role income; administrators can add or remove slots. |
| `/data backup-create` | Save a server configuration snapshot. |
| `/data backup-list` | List available snapshots. |
| `/data backup-diff id:<snapshot>` | Compare a snapshot with current settings. |
| `/data backup-restore id:<snapshot> confirm:RESTORE` | Restore supported settings from a snapshot. |

The command menu also includes context actions on users and messages. Use Discord's Apps menu on a member or message to see the actions currently available to you.
