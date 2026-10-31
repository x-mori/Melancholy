# Features

Melancholy brings member activities and server tools into one Discord bot. Feature availability follows each server's configuration and the permissions of the person using it.

## For members

### Profiles and progress

Profiles bring together activity, badges, charms, and personal details on a pixel-art profile card. Level cards show message progress, with an extended view of nearby ranked members. Stats cover activity such as messages and voice time. One `/leaderboard` card covers levels, balances, charms, and Starlight. Members can choose whether to show their charm collection.

Starlight adds seasonal divisions and quests. Daily, weekly, and seasonal quest pages have separate views. It is a progression score, not a currency for purchases.

### Economy

Members can claim daily rewards, complete work activities, inspect balances and cooldowns, transfer currency, and use the shop. The shop has server, global, level card, and profile card shelves, with item types such as temporary roles, xp boosters, mystery boxes, and collectibles. Server coins stay with the server; gems are tied to the account. Built-in work can award gems once per activity cooldown across servers. Server staff can add custom occupations and configure recurring income for selected roles.

### Birthdays

Each member keeps one birthday across every server, celebrated from midnight in their own timezone. Birthday cards show the countdown, zodiac sign, birthstone, birth flower, and birthday twins. Friends can leave sealed wishes up to 30 days early, and opening them on the day gives a gem gift that grows with each wish.

### Music and game stats

Last.fm integration covers browsing, charts, now playing, personal top charts, a music profile, and server rankings such as who knows and the music leaderboard. Game stats cover osu!, Chess.com, Lichess, Dota 2, and PUBG, with account linking so player lookups work without typing a name.

### Things to do

Melancholy includes social actions, reputation, family, `/games` (dice, ship, trivia, word chain, and more), and a minigame with characters, training, hunting, inventory, a shop, and gacha. Anime search covers series, characters, studios, and people, with richer details where the connected services provide them.

### Everyday utilities

`/home` gathers common personal actions and reward readiness in one panel. `/help find` accepts a command name or a short goal such as `earn money`. Members can set AFK status, create reminders, check weather and timezones, browse image, font, quote, and color tools, and use context menu actions on messages or users.

### Use it anywhere

Thirteen commands, including `/game`, `/music`, `/anime`, `/weather`, `/avatar`, and `/birthday`, work through a user install in DMs, group chats, and servers Melancholy isn't in. Melancholy's pixel icons are its own application emojis, so they appear even where external emojis are disabled.

## For server staff

- Moderation commands cover warnings, bans, kicks, mutes, and bulk message management.
- Configurable logs record server and moderation events and show exactly what changed.
- Settings and protection tools support moderation rules, automation, welcome and verification flows, and other server behavior.
- Role tools create and edit roles, including icons and gradient colors where available.
- Birthday announcements and a birthday role can be set per server.
- Economy tools include a server shop, custom occupations, and scheduled income for selected roles.
- Configuration snapshots let authorized staff save, compare, and restore supported settings.
- Activity and command analytics help staff see how the server uses Melancholy.

## Personal data controls

`/data privacy` summarizes personal server data. `/data export` downloads a JSON copy. `/data delete` requests removal of eligible personal server data and requires an explicit confirmation value. These actions are available through the bot; this public repository stores no user data.

For a command starting point, see [the command guide](COMMANDS.md). The live `/help` menu reflects the commands and permissions available in your server.
