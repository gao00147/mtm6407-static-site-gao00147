import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectLayout from './ProjectLayout.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Custom template used by the project pages (layout: project)
    app.component('project', ProjectLayout)
  }
}

export default theme
