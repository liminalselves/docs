# 阈界人格产品文档

基于 [VitePress](https://vitepress.dev/) 构建的产品文档站点：<https://docs.liminalselves.top>

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 5173 端口）
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署

推送至 `master` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并将产物提交到 `deploy` 分支；服务器上 `git pull` 该分支即可更新。

### Nginx 示例（端口 9527）

```nginx
server {
    listen 9527;
    server_name docs.liminalselves.top;
    root /opt/docs;              # deploy 分支检出目录
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # 静态资源缓存
    location /images/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.mts           # 站点配置（导航、侧边栏、搜索、sitemap、OG）
│   └── theme/               # 主题扩展样式
├── .github/workflows/       # CI：构建并推送 dist 至 deploy 分支
├── public/
│   └── images/              # 文档图片（WebP）
├── guide/                   # 文档正文（按项目组织：阈界人格社区 / Aliya Web / 客户端）
│   ├── getting-started.md   # 注册与登录
│   ├── rules.md             # 社区规范
│   ├── posts.md             # 帖子与时间线
│   ├── agent/               # 智能体（核心功能：游玩/聊天/语法/主动消息/记忆/创作/世界书/正则表情包/风格/用量/FAQ）
│   ├── misskey/             # Misskey 功能各页（回应/MFM/网盘/频道/列表天线/便签/图集/页面Play/游戏/成就/界面/设置）
│   ├── clients/             # 客户端（官方客户端、第三方应用）
│   ├── messages.md          # 消息与通知
│   ├── features.md          # 功能一览
│   ├── aliya-web.md         # Aliya Web
│   ├── third-party.md       # 第三方应用
│   ├── migration.md         # 从旧版 Aliya Bot 迁移
│   └── faq.md               # 常见问题
└── index.md                 # 首页
```

## 写作约定

- 新增章节时在 `guide/` 下建独立 md 文件，并同步更新 `config.mts` 的 `sidebar`。
- 图片统一放 `public/images/`，使用语义化英文文件名，截图导出为 WebP（质量 90）。

## 功能特性

- 多页面语义化 URL（cleanUrls）
- 分组侧边栏导航与上下页导航
- 全文本地搜索（Ctrl+K）
- 暗色 / 亮色主题切换
- 页内目录（TOC）
- sitemap 与 Open Graph 分享卡片
- 响应式移动端适配
