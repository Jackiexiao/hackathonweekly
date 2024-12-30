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
          { text: '愿景和使命', link: '/docs/1_vision_and_mission' },
          { text: '组织架构', link: '/docs/2_organization' },
          { text: '俱乐部制度', link: '/docs/club_system' },
          { text: '会员制度', link: '/docs/3_membership' },
          { text: '活动形式', link: '/docs/4_activities' },
          { text: '运营方式', link: '/docs/5_operations' },
          { text: '激励机制', link: '/docs/6_incentives' },
          { text: '孵化器', link: '/docs/7_incubator' },
          { text: '盈利性项目', link: '/docs/profit_projects' },
          { text: '文化建设', link: '/docs/8_culture' },
          { text: '对外合作', link: '/docs/9_cooperation' },
          { text: '发展规划', link: '/docs/development_phases' },
          { text: '附录', link: '/docs/10_appendix' },
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
