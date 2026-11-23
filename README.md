# mtm6407-static-site-gao00147

- **Name:** Yijia Gao
- **Student number:** 041148262
- **Static site generator:** VitePress

Live site: https://gao00147.github.io/mtm6407-static-site-gao00147/

## About the site

A personal portfolio site. It has 9 pages and uses 3 VitePress templates (layouts):

| Layout | Pages |
| --- | --- |
| `home` | Home |
| `doc` | Projects, APOD Starshot, Student Task Manager, Ember CSS, Fresh Track, Experience |
| `page` | About, Contact |

Site wide navigation comes from the nav bar and the sidebar set in `docs/.vitepress/config.mts`. The colours are my Morandi palette, set in `docs/.vitepress/theme/custom.css`.

## Run locally

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`).
