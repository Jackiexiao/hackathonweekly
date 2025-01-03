import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HackathonWeekly",
  description: "HackathonWeekly",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: { light: "/light-logo.png", dark: "dark-logo.png", alt: "logo" },
    logo: '/logo.png',
    nav: [
      { text: '章程', link: '/docs/constitution' },
      { text: '关于我们', link: '/about-us' },
      { text: '飞书协作文档', link: 'https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackathonweekly/hackathonweekly' }
    ],

    sidebar: [
      {
        text: '核心文档',
        items: [
          { text: '组织章程', link: '/docs/constitution' },
          { text: '股权制度', link: '/docs/equity' },
          { text: '会员制度', link: '/docs/membership' },
          { text: '通知公告', link: '/docs/notice' },
        ]
      },
      {
        text: '运营文档',
        items: [
          { text: '活动形式', link: '/docs/activities' },
          { text: '运营方式', link: '/docs/operations' },
          { text: '孵化器', link: '/docs/incubator' },
          { text: '盈利性项目', link: '/docs/profit_projects' },
          { text: '文化建设', link: '/docs/culture' },
          { text: '对外合作', link: '/docs/cooperation' },
          { text: '发展规划', link: '/docs/development_phases' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '基金会模式', link: '/docs/foundation_model' },
          { text: '网站规划', link: '/docs/website_plan' },
          { text: 'FAQ', link: '/FAQ' },
          { text: '关于我们', link: '/about-us' }
        ]
      }
    ]
  }
})
