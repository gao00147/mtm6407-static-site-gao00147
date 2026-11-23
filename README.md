# mtm6407-static-site-gao00147

- **Name:** Yijia Gao
- **Student number:** 041148262
- **Static site generator:** VitePress

Live site: https://gao00147.github.io/mtm6407-static-site-gao00147/

## About the site

A personal portfolio site. It has 9 pages and uses 4 templates (layouts):

| Layout | Type | Pages |
| --- | --- | --- |
| `home` | VitePress default theme | Home |
| `doc` | VitePress default theme | Projects, Experience |
| `page` | VitePress default theme | About, Contact |
| `project` | Custom Vue layout (`docs/.vitepress/theme/ProjectLayout.vue`) | APOD Starshot, Student Task Manager, Ember CSS, Fresh Track |

The custom `project` layout reads each project's frontmatter (course, summary, role, type, tools, repo link) and builds the project header, then renders the page content below it.

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
