<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="project-layout">
    <header class="project-hero">
      <p class="project-eyebrow">{{ frontmatter.course }}</p>
      <h1 class="project-title">{{ frontmatter.title }}</h1>
      <p class="project-summary">{{ frontmatter.summary }}</p>

      <dl class="project-facts">
        <div class="project-fact">
          <dt>Role</dt>
          <dd>{{ frontmatter.role }}</dd>
        </div>
        <div class="project-fact">
          <dt>Type</dt>
          <dd>{{ frontmatter.type }}</dd>
        </div>
        <div class="project-fact">
          <dt>Tools</dt>
          <dd>{{ frontmatter.tools }}</dd>
        </div>
      </dl>

      <a
        v-if="frontmatter.repo"
        class="project-repo"
        :href="frontmatter.repo"
        target="_blank"
        rel="noreferrer"
      >
        View the code on GitHub
      </a>
    </header>

    <div class="vp-doc project-body">
      <Content />
    </div>
  </div>
</template>

<style scoped>
.project-layout {
  max-width: 880px;
  margin: 0 auto;
  padding: 32px 24px 96px;
}

@media (min-width: 768px) {
  .project-layout {
    padding: 48px 32px 128px;
  }
}

.project-hero {
  padding: 28px 24px;
  margin-bottom: 40px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

@media (min-width: 768px) {
  .project-hero {
    padding: 40px;
  }
}

.project-eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--morandi-rose);
}

.project-title {
  margin: 0 0 12px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .project-title {
    font-size: 40px;
  }
}

.project-summary {
  margin: 0 0 24px;
  font-size: 17px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.project-facts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 0 0 24px;
}

@media (min-width: 640px) {
  .project-facts {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-fact dt {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

.project-fact dd {
  margin: 4px 0 0;
  font-size: 15px;
  color: var(--vp-c-text-1);
}

.project-repo {
  display: inline-block;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: var(--vp-c-brand-2);
  transition: background 0.2s;
}

.project-repo:hover {
  background: var(--vp-c-brand-1);
}
</style>
