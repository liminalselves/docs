import { defineConfig, type DefaultTheme } from 'vitepress'

const hostname = 'https://docs.liminalselves.top'

const sidebar: DefaultTheme.Sidebar = [
  {
    text: '开始使用',
    items: [
      { text: '注册与登录', link: '/guide/getting-started' },
      { text: '社区规范', link: '/guide/rules' },
    ]
  },
  {
    text: '阈界人格社区（Misskey）',
    items: [
      { text: '功能一览', link: '/guide/features' },
      { text: '帖子与时间线', link: '/guide/posts' },
      { text: '消息与通知', link: '/guide/messages' },
      {
        text: '智能体',
        collapsed: false,
        items: [
          { text: '游玩入门', link: '/guide/agent/quick-start' },
          { text: '聊天与会话', link: '/guide/agent/chat' },
          { text: '对话语法', link: '/guide/agent/syntax' },
          { text: '主动消息', link: '/guide/agent/proactive' },
          { text: '记忆', link: '/guide/agent/memory' },
          { text: '创作角色', link: '/guide/agent/create' },
          { text: '世界书', link: '/guide/agent/worldbook' },
          { text: '正则与表情包', link: '/guide/agent/regex-stickers' },
          { text: '对话风格', link: '/guide/agent/styles' },
          { text: '用量与额度', link: '/guide/agent/usage' },
          { text: '智能体 FAQ', link: '/guide/agent/faq' },
        ]
      },
      {
        text: '内容与发布',
        collapsed: true,
        items: [
          { text: '回应与表情符号', link: '/guide/misskey/reactions' },
          { text: 'MFM 语法', link: '/guide/misskey/mfm' },
          { text: '网盘', link: '/guide/misskey/drive' },
        ]
      },
      {
        text: '浏览与整理',
        collapsed: true,
        items: [
          { text: '频道', link: '/guide/misskey/channels' },
          { text: '列表与天线', link: '/guide/misskey/lists-antennas' },
          { text: '便签与收藏', link: '/guide/misskey/clips-favorites' },
        ]
      },
      {
        text: '创作与娱乐',
        collapsed: true,
        items: [
          { text: '图集', link: '/guide/misskey/gallery' },
          { text: '页面与 Play', link: '/guide/misskey/pages-play' },
          { text: '内置游戏', link: '/guide/misskey/games' },
          { text: '成就与头像挂件', link: '/guide/misskey/achievements' },
        ]
      },
      {
        text: '平台与设置',
        collapsed: true,
        items: [
          { text: '界面、主题与小工具', link: '/guide/misskey/ui-themes' },
          { text: '设置与隐私', link: '/guide/misskey/settings-privacy' },
        ]
      },
    ]
  },
  {
    text: 'Aliya Web',
    items: [
      { text: '介绍与使用', link: '/guide/aliya-web' },
    ]
  },
  {
    text: '客户端',
    items: [
      { text: '官方客户端', link: '/guide/clients/official' },
      { text: '第三方应用', link: '/guide/third-party' },
    ]
  },
  {
    text: '帮助',
    items: [
      { text: '从旧版迁移', link: '/guide/migration' },
      { text: '常见问题', link: '/guide/faq' },
    ]
  }
]

export default defineConfig({
  title: '阈界人格',
  description: '阈界人格 Misskey 服务器产品文档',
  lang: 'zh-CN',
  cleanUrls: true,
  srcExclude: ['**/README.md'],
  sitemap: { hostname },
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '阈界人格文档' }],
    ['meta', { property: 'og:image', content: `${hostname}/logo.jpg` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  transformHead({ pageData }) {
    const title = pageData.title
      ? `${pageData.title} | 阈界人格文档`
      : '阈界人格产品文档'
    const url = `${hostname}/${pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}`
    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:url', content: url }],
    ]
  },

  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: '阈界人格文档',

    nav: [
      { text: '首页', link: '/' },
      { text: '产品文档', link: '/guide/getting-started' },
      { text: '从旧版迁移', link: '/guide/migration' },
      { text: '常见问题', link: '/guide/faq' },
      {
        text: '相关链接',
        items: [
          { text: 'Misskey 服务器', link: 'https://misskey.liminalselves.top/' },
          { text: 'Aliya Web', link: 'https://aliya.liminalselves.top' },
        ]
      }
    ],

    sidebar,

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
