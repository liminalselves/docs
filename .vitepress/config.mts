import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '阈界人格',
  description: '阈界人格 Misskey 服务器产品文档',
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }],
  ],
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: '阈界人格文档',

    nav: [
      { text: '首页', link: '/' },
      { text: '产品文档', link: '/guide' },
      {
        text: '相关链接',
        items: [
          { text: 'Misskey 服务器', link: 'https://misskey.liminalselves.top/' },
          { text: 'Aliya Web', link: 'https://aliya.liminalselves.top' },
        ]
      }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '注册 / 登录', link: '/guide#_0-注册-登录' },
          { text: '帖子（发现 & 时间线）', link: '/guide#_1-帖子-发现-时间线' },
        ]
      },
      {
        text: '智能体',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/guide#_2-1-快速开始' },
          { text: '广场', link: '/guide#_2-2-广场' },
          { text: '聊天', link: '/guide#_2-3-聊天' },
          { text: '消息', link: '/guide#_2-4-消息' },
          { text: '搜索', link: '/guide#_2-5-搜索' },
          { text: '模型', link: '/guide#_2-6-模型' },
          { text: '生图', link: '/guide#_2-7-生图' },
          { text: '主动消息', link: '/guide#_2-8-主动消息' },
          { text: '记忆', link: '/guide#_2-9-记忆' },
          { text: '创作角色', link: '/guide#_2-10-创作角色' },
          { text: '用量与额度', link: '/guide#_2-11-用量与额度' },
          { text: '智能体会话', link: '/guide#_2-12-智能体会话' },
          { text: '原 Aliya Bot', link: '/guide#_2-13-原aliya-bot' },
          { text: '数据迁移', link: '/guide#_2-14-关于aliya聊天机器人服务数据迁移至智能体的办法' },
        ]
      },
      {
        text: '消息与通知',
        items: [
          { text: '消息（私信）', link: '/guide#_3-消息' },
          { text: '通知', link: '/guide#_4-通知' },
        ]
      },
      {
        text: '更多',
        items: [
          { text: '其他功能', link: '/guide#_5-其他功能' },
          { text: 'Aliya Web', link: '/guide#_6-aliya-web' },
          { text: '第三方应用程序', link: '/guide#_7-第三方应用程序' },
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    footer: {
      message: '阈界人格 | 产品文档',
      copyright: '官方 Q 群：519308434'
    }
  }
})
