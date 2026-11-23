---
title: Projects
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Projects

These are the projects I'm proudest of from the Interactive Media Design program. Some are solo, some are team projects. For team work I say clearly which parts were mine.

<div class="card-grid">
  <a class="card" :href="withBase('/projects/apod-starshot.html')">
    <span class="card-title">APOD Starshot</span>
    <span class="card-meta">MTM6302 Capstone · Solo · UX and front-end</span>
    <span class="card-text">Pick any date and see NASA's space photo for that day. Taken from paper wireframe to working prototype.</span>
  </a>
  <a class="card" :href="withBase('/projects/task-manager.html')">
    <span class="card-title">Student Task Manager</span>
    <span class="card-meta">MTM6302 Final Project · Solo · Front-end</span>
    <span class="card-text">A task app for assignments, due dates and priorities, built in vanilla JavaScript from a classmate's idea.</span>
  </a>
  <a class="card" :href="withBase('/projects/ember-css.html')">
    <span class="card-title">Ember CSS</span>
    <span class="card-meta">MTM6407 · Team project · Team leader</span>
    <span class="card-text">Our own Sass framework. It themes plain HTML with no classes needed and adds utility classes on top.</span>
  </a>
  <a class="card" :href="withBase('/projects/fresh-track.html')">
    <span class="card-title">Fresh Track</span>
    <span class="card-meta">MTM6460 City Studio · Team project · Print and copy</span>
    <span class="card-text">An awareness campaign for the City of Ottawa about the bike paths, for both locals and visitors.</span>
  </a>
</div>

## What ties them together

Every project here started with design work before any code. I usually sketch a lo-fi layout first, move to a hi-fi mockup in Figma, and only then open VS Code. That way the build has a clear target, and I catch layout problems while they are still cheap to fix.
