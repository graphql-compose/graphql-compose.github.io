# Graphql-compose website

**Use `source` branch for making PRs.** `.gihub.io` website requires that `master` branch is used only for already builded version. Changes from `source` branch are automatically picked into `master` branch by CI.

This code is used to generate https://graphql-compose.github.io. It pulls in files from `docs/` and `website/` to generate html files served on the site.

`website/` contains the JS, CSS, images and other files (and blog, which contains some markdown files too, these are separated from `docs/`, not too important).

`cd website && npm install && npm start` to start the development server & watcher.

Don't use `npm build`. It's mostly for debugging.

Two special files:

- `sidebars.json`: lists the sections.
- `siteConfig.json`: some header and i18n configs.

During your development, most changes will be picked up at each browser refresh. If you touch these two files or `blog/`, however, you'll have to restart the server to see the changes.

## Translations

The entire site can be translated via the [Crowdin project](https://crowdin.com/project/graphql-compose). This repo only has the canonical english documentation. Don't manually edit things in `i18n/`.

## Debugging

`console.log`s appear in your terminal!

## Building and Deploying

Changes from `source` branch are automatically picked into `master` branch by CI, then published. Translation download/uploads are still manual right now (needs API key, which @nodkz have).
