# Maintaining this public repository

This repository is Melancholy's public project display. The private bot application lives in a separate repository. Keep this repository limited to documentation, approved media, and approved source excerpts.

## Review before each update

1. Check the staged file list. It should contain only reviewed documentation, assets, and excerpts.
2. Update the version badge, the README version line, and the release summary when the private application changes.
3. Check the [website](https://melancholy.fujiverse.dev/) and support links.
4. If Melancholy's Discord banner changes, replace `assets/melancholy-discord-banner.png`.
5. Inspect screenshots for tokens, user data, private channels, and server details before adding them.
6. Keep the `.gitignore` allowlist current when adding a new public file.

The published set is `README.md`, `FEATURES.md`, `COMMANDS.md`, `CHANGELOG.md`, `SUPPORT.md`, `NOTICE.md`, `PUBLISHING.md`, `.gitignore`, `assets/melancholy-discord-banner.png`, and `src/events/ready/ready.ts`. Do not copy other source, compiled output, credentials, or deployment configuration from the private checkout.
