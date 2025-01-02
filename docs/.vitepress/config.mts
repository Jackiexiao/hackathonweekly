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
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/about-us' },
      { text: '飞书协作文档', link: 'https://hackathonweekly.feishu.cn/wiki/WQ7EwFC7BijePAkMkAHcajkNnae' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hackathonweekly/hackathonweekly' }
    ],

    sidebar: [
      {
        text: '主要文档',
        items: [
          { text: '愿景和使命', link: '/docs/vision_and_mission' },
          { text: '组织架构', link: '/docs/organization' },
          { text: '俱乐部制度', link: '/docs/club_system' },
          { text: '会员制度', link: '/docs/membership' },
          { text: '活动形式', link: '/docs/activities' },
          { text: '运营方式', link: '/docs/operations' },
          { text: '激励机制', link: '/docs/incentives' },
          { text: '孵化器', link: '/docs/incubator' },
          { text: '盈利性项目', link: '/docs/profit_projects' },
          { text: '文化建设', link: '/docs/culture' },
          { text: '对外合作', link: '/docs/cooperation' },
          { text: '发展规划', link: '/docs/development_phases' },
          { text: '附录', link: '/docs/appendix' },
        ]
      },
      {
        text: '其他文档',
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
