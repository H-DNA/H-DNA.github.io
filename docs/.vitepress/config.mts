import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "blog",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css", }],
  ],
  markdown: {
    config: (md) => {
      md.use(katex);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/H-DNA' }
    ]
  },
  ignoreDeadLinks: true,
})
