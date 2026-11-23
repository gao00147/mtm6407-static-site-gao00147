import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-CA',
  title: 'Yijia Gao',
  description: 'Designer and front-end developer based in Ottawa. Portfolio of Yijia Gao.',
  base: '/mtm6407-static-site-gao00147/',

  head: [
    ['meta', { name: 'theme-color', content: '#7d8a7a' }],
    ['meta', { name: 'author', content: 'Yijia Gao' }]
  ],

  themeConfig: {
    siteTitle: 'Yijia Gao',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/', activeMatch: '/projects/' },
      { text: 'Experience', link: '/experience' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'All projects', link: '/projects/' },
          { text: 'APOD Starshot', link: '/projects/apod-starshot' },
          { text: 'Student Task Manager', link: '/projects/task-manager' },
          { text: 'Ember CSS', link: '/projects/ember-css' },
          { text: 'Fresh Track', link: '/projects/fresh-track' }
        ]
      },
      {
        text: 'Me',
        items: [
          { text: 'Experience', link: '/experience' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gao00147' }
    ],

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    footer: {
      message: 'Built with VitePress for MTM6407 at Algonquin College.',
      copyright: '© 2026 Yijia Gao'
    }
  }
})
